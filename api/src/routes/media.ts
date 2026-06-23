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
import { promises as fs } from "fs";
import path from "path";
import crypto from "crypto";
import { requireUser } from "../lib/user-auth";

export const mediaRouter = Router();

/** Directorio de media (fuera de `src`, en la raíz del paquete api). */
const MEDIA_ROOT = path.resolve(__dirname, "../../media");

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
  image: /^image\/(png|jpe?g|webp|gif|svg\+xml)$/i,
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

/** Patrón de nombre de archivo: 32 hex + .<ext> (ext según kind). */
const FILE_NAME_RE = /^[a-f0-9]{32}\.[a-z0-9]{2,5}$/;

export type MediaInspection =
  | { ok: true; kind: MediaKind; mimeType: string }
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
  // Verificamos magic bytes para todos los kinds. SVG es texto — no se
  // puede validar por firma, pero no aceptamos SVG en audio/video/pdf
  // (es un riesgo de XSS). Para "image" sí permitimos SVG, confiando
  // en la cabecera Content-Type.
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
  return { ok: true, kind, mimeType: declaredMime || MIME[`.${EXTENSION_BY_KIND[kind]}`] };
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
  const full = path.resolve(MEDIA_ROOT, archivo);
  if (!full.startsWith(MEDIA_ROOT + path.sep)) {
    return res.status(400).json({ error: "invalid path" });
  }
  try {
    const content = await fs.readFile(full);
    const mime = mimeForFile(archivo) ?? "application/octet-stream";
    res.setHeader("Content-Type", mime);
    res.setHeader("Cache-Control", "public, max-age=86400");
    res.setHeader("Content-Length", String(content.length));
    res.send(content);
  } catch {
    res.status(404).json({ error: "not found" });
  }
});

/**
 * Tamaño máximo a aceptar por `express.raw` — el mayor de los kinds
 * (video 100 MB) más un margen para overhead HTTP.
 */
const RAW_LIMIT = "110mb";

mediaRouter.post(
  "/upload",
  requireUser,
  express.raw({ type: () => true, limit: RAW_LIMIT }),
  async (req, res) => {
    const buf = req.body;
    const declaredMime = (req.headers["content-type"] ?? "").split(";")[0].trim();
    const kindHeader = (req.headers["x-media-kind"] as string | undefined) ?? undefined;
    const check = inspectMediaUpload(buf, declaredMime, kindHeader);
    if (!check.ok) {
      return res.status(check.status).json({ error: check.error });
    }
    const ext = EXTENSION_BY_KIND[check.kind];
    const name = `${crypto.randomBytes(16).toString("hex")}.${ext}`;
    try {
      await fs.mkdir(MEDIA_ROOT, { recursive: true });
      await fs.writeFile(path.resolve(MEDIA_ROOT, name), buf);
    } catch {
      return res.status(500).json({ error: "no se pudo guardar el archivo" });
    }
    return res.status(201).json({ url: `/api/media/${name}`, mimeType: check.mimeType });
  },
);
