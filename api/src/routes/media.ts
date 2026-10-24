/**
 * Subida y servicio de archivos multimedia (PNG, audio, video, PDF) para
 * los bloques de contenido del editor de plantillas VBLang (WO-06) y
 * los nuevos adjuntos (WO-12: audio, video, PDF).
 *
 * Diseño deliberadamente simple (sin bytea ni object storage, como pide
 * el work order): el archivo se guarda en un directorio de media en
 * disco y se devuelve la URL que llena el `src` / `url` del bloque.
 *
 * - `POST /api/media/upload` (autenticado): recibe los bytes crudos con
 *   el `Content-Type` correspondiente al tipo de archivo Y la cabecera
 *   `X-Media-Kind` ("image" | "audio" | "video" | "pdf"). Valida magic
 *   bytes, Content-Type y tamaño según el kind, y devuelve `{ url,
 *   mimeType }`.
 * - `GET /api/media/:archivo` (público): sirve el archivo con
 *   protección contra path traversal, con el `Content-Type`
 *   correspondiente a la extensión.
 *
 * El `alt` (obligatorio por WCAG 1.1.1) vive en el bloque, no acá: lo
 * exige el cliente al insertar el adjunto.
 */
import express, { Router } from "express";
import path from "path";
import crypto from "crypto";
import { requireUser } from "../lib/user-auth";
import { ENV } from "../lib/env";
import { putMedia, getMedia, mediaPublicUrl, localMediaPath } from "../lib/media-storage";

export const mediaRouter = Router();

/** Tipos de archivo soportados para los adjuntos. */
export type MediaKind = "image" | "audio" | "video" | "pdf";

/** Extensión → Content-Type para servir los archivos. */
const MIME: Record<string, string> = {
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".mp3": "audio/mpeg",
  ".m4a": "audio/mp4",
  ".aac": "audio/aac",
  ".ogg": "audio/ogg",
  ".wav": "audio/wav",
  ".webm": "video/webm",
  ".mp4": "video/mp4",
  ".ogv": "video/ogg",
  ".mov": "video/quicktime",
  ".pdf": "application/pdf",
};

/** Extensión por defecto si el formato no se pudo determinar (no debería pasar tras validar la firma). */
const EXTENSION_BY_KIND: Record<MediaKind, string> = {
  image: "png",
  audio: "mp3",
  video: "mp4",
  pdf: "pdf",
};

/**
 * Content-Types aceptados por kind. La idea es ser permisivo en
 * Content-Type (algunos navegadores reportan variantes), pero estricto
 * en magic bytes y tamaño.
 */
const ACCEPTED_MIME: Record<MediaKind, RegExp> = {
  // SVG queda explícitamente excluido: SVG es XML activo y permite
  // <script>/onload. Sin un sanitizer server-side (DOMPurify/Worker)
  // no podemos garantizar que un SVG subido no sea un payload XSS,
  // y servirlo con `image/*` desde /api/media sin CSP/nosniff hace
  // trivial el stored-XSS. Ver F-02.
  image: /^image\/(png|jpe?g|webp|gif)$/i,
  audio: /^audio\/(mpeg|mp3|ogg|wav|x-wav|webm|aac|x-m4a|mp4)$/i,
  video: /^video\/(mp4|webm|ogg|quicktime)$/i,
  pdf: /^application\/pdf$/i,
};

/** Tamaño máximo por kind (Tier 1: alcanza para 5-30 min de audio y unos minutos de video). */
const MAX_BYTES_BY_KIND: Record<MediaKind, number> = {
  image: 5 * 1024 * 1024, // 5 MB
  audio: 20 * 1024 * 1024, // 20 MB
  video: 100 * 1024 * 1024, // 100 MB
  pdf: 25 * 1024 * 1024, // 25 MB
};

/** Magic bytes (firmas) que aceptamos por kind. */
const SIGNATURES: Array<{
  kind: MediaKind;
  match: (buf: Buffer) => boolean;
}> = [
  {
    kind: "image",
    // PNG + JPEG + WebP + GIF (todos los formatos de imagen que
    // aceptamos). No validamos SVG (es texto) — confiamos en la
    // extensión.
    match: (buf) => {
      if (buf.length >= 8 && buf.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))) {
        return true;
      }
      if (buf.length >= 3 && buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff) {
        return true;
      }
      if (buf.length >= 6 && buf.subarray(0, 6).equals(Buffer.from("GIF87a")) || buf.length >= 6 && buf.subarray(0, 6).equals(Buffer.from("GIF89a"))) {
        return true;
      }
      if (buf.length >= 12 && buf.subarray(0, 4).equals(Buffer.from("RIFF")) && buf.subarray(8, 12).equals(Buffer.from("WEBP"))) {
        return true;
      }
      return false;
    },
  },
  {
    kind: "pdf",
    match: (buf) => buf.length >= 4 && buf.subarray(0, 4).equals(Buffer.from("%PDF")),
  },
  {
    // MP3 / MPEG audio (frame sync 0xFF 0xFB / 0xFF 0xF3 / 0xFF 0xF2).
    kind: "audio",
    match: (buf) => {
      // ID3 tag (MP3 con metadata): "ID3"
      if (buf.length >= 3 && buf.subarray(0, 3).equals(Buffer.from("ID3"))) {
        return true;
      }
      // MP3 frame sync
      if (buf.length >= 2 && buf[0] === 0xff && (buf[1] & 0xe0) === 0xe0) {
        return true;
      }
      // WAV/RIFF
      if (buf.length >= 12 && buf.subarray(0, 4).equals(Buffer.from("RIFF")) && buf.subarray(8, 12).equals(Buffer.from("WAVE"))) {
        return true;
      }
      // OGG
      if (buf.length >= 4 && buf.subarray(0, 4).equals(Buffer.from("OggS"))) {
        return true;
      }
      // MP4 / M4A (ftyp box) — empieza con bytes de tamaño + "ftyp"
      if (buf.length >= 12 && buf.subarray(4, 8).equals(Buffer.from("ftyp"))) {
        return true;
      }
      // AAC ADTS sync: 0xFFF sync
      if (buf.length >= 2 && buf[0] === 0xff && (buf[1] & 0xf6) === 0xf0) {
        return true;
      }
      return false;
    },
  },
  {
    kind: "video",
    match: (buf) => {
      // MP4 / MOV (ftyp box en el primer 1KB)
      if (buf.length >= 12 && buf.subarray(4, 8).equals(Buffer.from("ftyp"))) {
        return true;
      }
      // WebM / Matroska: EBML header
      if (buf.length >= 4 && buf[0] === 0x1a && buf[1] === 0x45 && buf[2] === 0xdf && buf[3] === 0xa3) {
        return true;
      }
      // OGG
      if (buf.length >= 4 && buf.subarray(0, 4).equals(Buffer.from("OggS"))) {
        return true;
      }
      return false;
    },
  },
];

/**
 * Formato real del archivo según su firma (B7). Antes la extensión salía solo del `kind`, así que un
 * JPEG o WebP se guardaba y se servía como `.png`, un audio OGG/WAV como `.mp3` y un WebM como
 * `.mp4`, y los navegadores estrictos podían no reproducirlos. La firma ya se validó: acá solo se
 * distingue cuál es.
 */
export function detectarExtension(kind: MediaKind, buf: Buffer): string {
  const ascii = (a: number, b: number) => buf.subarray(a, b).toString("latin1");
  switch (kind) {
    case "image":
      if (buf[0] === 0xff && buf[1] === 0xd8) return "jpg";
      if (ascii(0, 3) === "GIF") return "gif";
      if (ascii(0, 4) === "RIFF" && ascii(8, 12) === "WEBP") return "webp";
      return "png";
    case "pdf":
      return "pdf";
    case "audio":
      if (ascii(0, 4) === "RIFF") return "wav";
      if (ascii(0, 4) === "OggS") return "ogg";
      if (ascii(4, 8) === "ftyp") return "m4a";
      if (buf[0] === 0xff && ((buf[1] ?? 0) & 0xf6) === 0xf0) return "aac";
      return "mp3";
    case "video":
      if (buf[0] === 0x1a && buf[1] === 0x45 && buf[2] === 0xdf && buf[3] === 0xa3) return "webm";
      if (ascii(0, 4) === "OggS") return "ogv";
      if (ascii(4, 8) === "ftyp" && ascii(8, 12) === "qt  ") return "mov";
      return "mp4";
  }
}

/** Patrón de nombre de archivo: 32 hex + .<ext> (ext según kind). */
const FILE_NAME_RE = /^[a-f0-9]{32}\.[a-z0-9]{2,5}$/;

export type MediaInspection =
  | { ok: true; kind: MediaKind; mimeType: string; extension: string }
  | { ok: false; status: number; error: string };

/** Valida que `buf` sea un archivo aceptable para subir. Pura. */
export function inspectMediaUpload(
  buf: unknown,
  declaredMime: string,
  kindHeader: string | undefined,
): MediaInspection {
  if (!Buffer.isBuffer(buf) || buf.length === 0) {
    return {
      ok: false,
      status: 400,
      error: "se esperan los bytes del archivo con el Content-Type correspondiente",
    };
  }
  const kind = parseKind(kindHeader);
  if (!kind) {
    return {
      ok: false,
      status: 400,
      error: "falta la cabecera X-Media-Kind (image | audio | video | pdf)",
    };
  }
  const maxBytes = MAX_BYTES_BY_KIND[kind];
  if (buf.length > maxBytes) {
    const mb = Math.round(maxBytes / 1024 / 1024);
    return {
      ok: false,
      status: 413,
      error: `el archivo supera el máximo de ${mb} MB para ${kind}`,
    };
  }
  if (declaredMime && !ACCEPTED_MIME[kind].test(declaredMime)) {
    return {
      ok: false,
      status: 400,
      error: `Content-Type "${declaredMime}" no válido para ${kind}`,
    };
  }
  // Verificamos magic bytes para todos los kinds. SVG ya está excluido
  // por ACCEPTED_MIME arriba, así que no necesitamos un caso especial
  // acá.
  if (kind !== "image" || declaredMime !== "image/svg+xml") {
    const sig = SIGNATURES.find((s) => s.kind === kind);
    if (!sig || !sig.match(buf)) {
      return {
        ok: false,
        status: 400,
        error: `el archivo no es un ${kind} válido (firma no reconocida)`,
      };
    }
  }
  const extension = detectarExtension(kind, buf);
  // El tipo que se informa es el del formato real, no el que declaró el cliente.
  return { ok: true, kind, extension, mimeType: MIME[`.${extension}`] ?? declaredMime };
}

function parseKind(raw: string | undefined): MediaKind | null {
  if (!raw) return null;
  const k = raw.toLowerCase();
  if (k === "image" || k === "audio" || k === "video" || k === "pdf") return k;
  return null;
}

/** True si `archivo` es un nombre de media generado por nosotros. */
export function isValidMediaName(archivo: string): boolean {
  return FILE_NAME_RE.test(archivo);
}

/** Devuelve el Content-Type según la extensión. */
export function mimeForFile(archivo: string): string | null {
  const ext = path.extname(archivo).toLowerCase();
  return MIME[ext] ?? null;
}

mediaRouter.get("/:archivo", async (req, res) => {
  const { archivo } = req.params;
  if (!isValidMediaName(archivo)) {
    return res.status(400).json({ error: "invalid path" });
  }
  const publicUrl = mediaPublicUrl(archivo);
  if (publicUrl) {
    return res.redirect(302, publicUrl);
  }
  const mime = mimeForFile(archivo) ?? "application/octet-stream";
  // Defensa contra MIME-sniffing: bloquea que el browser "adivine" un
  // content-type distinto al servido (riesgo XSS vía polyglot). Ver F-02.
  // NO forzamos `Content-Disposition: attachment` acá — SVG ya está
  // excluido de ACCEPTED_MIME arriba (la única vía real de XSS por
  // este endpoint), y el resto de los kinds (image/audio/video/pdf) se
  // renderizan inline en el front real: AudioBlockRenderer usa
  // `/api/media/:archivo` directo como `src` de un <audio>, lo mismo
  // para <img>/<video>/PDFs embebidos. Forzar descarga rompería eso sin
  // sumar defensa real ya que el vector estaba cerrado en el upload.
  const cabeceras = {
    "Content-Type": mime,
    "X-Content-Type-Options": "nosniff",
    "Cache-Control": "public, max-age=86400",
  };

  // Disco local: se entrega como flujo, con soporte de rangos (Safari no reproduce ni adelanta
  // video/audio sin ellos) y sin cargar el archivo entero a memoria (D1).
  const enDisco = await localMediaPath(archivo);
  if (enDisco) {
    return res.sendFile(enDisco, { headers: cabeceras, acceptRanges: true, dotfiles: "deny" }, (err) => {
      if (!err || res.headersSent) return;
      // 416 si el rango pedido no cabe en el archivo; 404 para todo lo demás (ya no está, etc.).
      const status = (err as { status?: number }).status === 416 ? 416 : 404;
      res.status(status).json({ error: status === 416 ? "range not satisfiable" : "not found" });
    });
  }

  const content = await getMedia(archivo);
  if (!content) {
    return res.status(404).json({ error: "not found" });
  }
  for (const [k, v] of Object.entries(cabeceras)) res.setHeader(k, v);
  res.setHeader("Content-Length", String(content.length));
  res.send(content);
});

/**
 * Una subida por vez no puede ocupar más memoria que el máximo de su tipo: se mira el tipo y el
 * `Content-Length` ANTES de leer el cuerpo, y el parser tiene el tope de ese tipo (antes eran 110 MB
 * para cualquier subida, incluso una imagen de 5 MB).
 */
const parsersPorTipo: Record<MediaKind, express.RequestHandler> = {
  image: express.raw({ type: () => true, limit: MAX_BYTES_BY_KIND.image }),
  audio: express.raw({ type: () => true, limit: MAX_BYTES_BY_KIND.audio }),
  video: express.raw({ type: () => true, limit: MAX_BYTES_BY_KIND.video }),
  pdf: express.raw({ type: () => true, limit: MAX_BYTES_BY_KIND.pdf }),
};

const leerCuerpoSegunTipo: express.RequestHandler = (req, res, next) => {
  const kind = parseKind((req.headers["x-media-kind"] as string | undefined) ?? undefined);
  if (!kind) {
    return res.status(400).json({ error: "falta la cabecera X-Media-Kind (image | audio | video | pdf)" });
  }
  const largo = Number(req.headers["content-length"]);
  if (Number.isFinite(largo) && largo > MAX_BYTES_BY_KIND[kind]) {
    const mb = Math.round(MAX_BYTES_BY_KIND[kind] / 1024 / 1024);
    return res.status(413).json({ error: `el archivo supera el máximo de ${mb} MB para ${kind}` });
  }
  return parsersPorTipo[kind](req, res, next);
};

/** Tope de subidas por usuario y por hora (en memoria: alcanza para un solo proceso; ver D5). */
const subidasPorUsuario = new Map<string, number[]>();
const VENTANA_MS = 60 * 60 * 1000;

export function registrarSubida(usuarioId: string, ahora = Date.now(), limite = ENV.MEDIA_UPLOADS_POR_HORA): boolean {
  const recientes = (subidasPorUsuario.get(usuarioId) ?? []).filter((t) => ahora - t < VENTANA_MS);
  if (recientes.length >= limite) {
    subidasPorUsuario.set(usuarioId, recientes);
    return false;
  }
  recientes.push(ahora);
  subidasPorUsuario.set(usuarioId, recientes);
  return true;
}

/** Solo para pruebas. */
export function reiniciarContadorDeSubidas() {
  subidasPorUsuario.clear();
}

const limitarSubidasPorUsuario: express.RequestHandler = (req, res, next) => {
  const u = (req as { user?: { id?: string; _id?: { toString?: () => string } } }).user;
  const id = u?._id?.toString?.() ?? u?.id;
  if (id && !registrarSubida(id)) {
    return res.status(429).json({ error: "superaste el máximo de subidas por hora; probá más tarde" });
  }
  return next();
};

mediaRouter.post(
  "/upload",
  requireUser,
  limitarSubidasPorUsuario,
  leerCuerpoSegunTipo,
  async (req, res) => {
    const buf = req.body;
    const declaredMime = (req.headers["content-type"] ?? "").split(";")[0].trim();
    const kindHeader = (req.headers["x-media-kind"] as string | undefined) ?? undefined;
    const check = inspectMediaUpload(buf, declaredMime, kindHeader);
    if (!check.ok) {
      return res.status(check.status).json({ error: check.error });
    }
    const name = `${crypto.randomBytes(16).toString("hex")}.${check.extension}`;
    try {
      await putMedia(name, buf);
    } catch {
      return res.status(500).json({ error: "no se pudo guardar el archivo" });
    }
    return res.status(201).json({ url: `/api/media/${name}`, mimeType: check.mimeType });
  },
);
