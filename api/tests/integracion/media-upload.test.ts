import {
  resetPrisma,
  seedUser,
  startServer,
  tokenFor,
} from "./_helpers/setup";
import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import express from "express";

import {
  mediaRouter,
  inspectMediaUpload,
  isValidMediaName,
  mimeForFile,
  registrarSubida,
  reiniciarContadorDeSubidas,
} from "../../src/routes/media";

let baseUrl: string;
let close: () => Promise<void>;

/** Magic bytes de un PNG válido + relleno arbitrario. */
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
function fakePng(extra = "cuerpo-png"): Buffer {
  return Buffer.concat([PNG_MAGIC, Buffer.from(extra)]);
}

/** Magic bytes de un PDF válido. */
function fakePdf(extra = "fake-pdf"): Buffer {
  return Buffer.concat([Buffer.from("%PDF-"), Buffer.from(extra)]);
}

/** Magic bytes de un MP3 con frame sync. */
function fakeMp3(extra = "cuerpo-mp3"): Buffer {
  // 0xFF 0xFB es un MP3 frame sync válido (MPEG-1 layer 3).
  return Buffer.concat([Buffer.from([0xff, 0xfb, 0x90, 0x00]), Buffer.from(extra)]);
}

/** Magic bytes de un MP4 (ftyp box en bytes 4-8). */
function fakeMp4(extra = "cuerpo-mp4"): Buffer {
  // 4 bytes de tamaño + "ftyp" + brand
  return Buffer.concat([Buffer.from([0x00, 0x00, 0x00, 0x18, 0x66, 0x74, 0x79, 0x70]), Buffer.from("isom"), Buffer.from(extra)]);
}

async function uploadRaw(
  token: string | undefined,
  body: Buffer,
  contentType: string,
  kindHeader?: string,
): Promise<{ status: number; body: unknown }> {
  const headers: Record<string, string> = { "content-type": contentType };
  if (token) headers.authorization = `Bearer ${token}`;
  if (kindHeader) headers["x-media-kind"] = kindHeader;
  const res = await fetch(`${baseUrl}/api/media/upload`, {
    method: "POST",
    headers,
    body,
  });
  const text = await res.text();
  let parsed: unknown = text;
  try {
    parsed = JSON.parse(text);
  } catch {
    /* deja el texto */
  }
  return { status: res.status, body: parsed };
}

before(async () => {
  // Montar el router bajo /api/media (el helper monta en raíz).
  const wrap = express.Router();
  wrap.use("/api/media", mediaRouter);
  const server = await startServer([wrap]);
  baseUrl = server.baseUrl;
  close = server.close;
});

after(async () => {
  await close();
});

beforeEach(() => {
  reiniciarContadorDeSubidas();
  resetPrisma();
  seedUser({ id: "profe-1", role: "TEACHER", schoolId: "esc-1" });
});

test("inspectMediaUpload acepta cada kind con magic bytes correctos", () => {
  assert.deepEqual(
    inspectMediaUpload(fakePng(), "image/png", "image"),
    { ok: true, kind: "image", mimeType: "image/png", extension: "png" },
  );
  assert.deepEqual(
    inspectMediaUpload(fakePdf(), "application/pdf", "pdf"),
    { ok: true, kind: "pdf", mimeType: "application/pdf", extension: "pdf" },
  );
  const mp3 = inspectMediaUpload(fakeMp3(), "audio/mpeg", "audio");
  assert.equal(mp3.ok, true);
  if (mp3.ok) assert.equal(mp3.kind, "audio");
  const mp4 = inspectMediaUpload(fakeMp4(), "video/mp4", "video");
  assert.equal(mp4.ok, true);
  if (mp4.ok) assert.equal(mp4.kind, "video");
});

test("inspectMediaUpload rechaza bytes que no matchean el kind", () => {
  // PNG header pero kind=audio → 400
  const wrong = inspectMediaUpload(fakePng(), "audio/mpeg", "audio");
  assert.equal(wrong.ok, false);
  assert.equal((wrong as { status: number }).status, 400);
});

test("inspectMediaUpload rechaza sin X-Media-Kind", () => {
  const r = inspectMediaUpload(fakePng(), "image/png", undefined);
  assert.equal(r.ok, false);
  assert.equal((r as { status: number }).status, 400);
});

test("inspectMediaUpload rechaza kind desconocido", () => {
  const r = inspectMediaUpload(fakePng(), "image/png", "exe");
  assert.equal(r.ok, false);
  assert.equal((r as { status: number }).status, 400);
});

test("inspectMediaUpload aplica límite por kind", () => {
  // 21 MB de MP3 con magic correcto > 20 MB permitido
  const huge = Buffer.concat([Buffer.from([0xff, 0xfb, 0x90, 0x00]), Buffer.alloc(21 * 1024 * 1024)]);
  const r = inspectMediaUpload(huge, "audio/mpeg", "audio");
  assert.equal(r.ok, false);
  assert.equal((r as { status: number }).status, 413);
});

test("inspectMediaUpload rechaza body vacío", () => {
  const r = inspectMediaUpload(Buffer.alloc(0), "image/png", "image");
  assert.equal(r.ok, false);
  assert.equal((r as { status: number }).status, 400);
});

test("isValidMediaName sólo acepta nombres generados por nosotros", () => {
  assert.equal(isValidMediaName("0123456789abcdef0123456789abcdef.png"), true);
  assert.equal(isValidMediaName("0123456789abcdef0123456789abcdef.mp3"), true);
  assert.equal(isValidMediaName("0123456789abcdef0123456789abcdef.pdf"), true);
  assert.equal(isValidMediaName("0123456789abcdef.png"), false); // corto
  assert.equal(isValidMediaName("../secreto.png"), false);
  assert.equal(isValidMediaName("foo.jpg"), false);
});

test("mimeForFile resuelve la extensión al Content-Type", () => {
  assert.equal(mimeForFile("abc.png"), "image/png");
  assert.equal(mimeForFile("abc.mp3"), "audio/mpeg");
  assert.equal(mimeForFile("abc.mp4"), "video/mp4");
  assert.equal(mimeForFile("abc.pdf"), "application/pdf");
  assert.equal(mimeForFile("abc.xyz"), null);
});

test("POST /api/media/upload sin token → 401", async () => {
  const r = await uploadRaw(undefined, fakePng(), "image/png", "image");
  assert.equal(r.status, 401);
});

test("POST con token + PNG válido → 201 y URL servible", async () => {
  const token = tokenFor({ id: "profe-1", role: "TEACHER", schoolId: "esc-1" });
  const bytes = fakePng("contenido-unico-123");
  const r = await uploadRaw(token, bytes, "image/png", "image");
  assert.equal(r.status, 201);
  const url = (r.body as { url: string }).url;
  assert.match(url, /^\/api\/media\/[a-f0-9]{32}\.png$/);

  // La URL devuelta sirve exactamente los bytes subidos.
  const get = await fetch(`${baseUrl}${url}`);
  assert.equal(get.status, 200);
  assert.equal(get.headers.get("content-type"), "image/png");
  const served = Buffer.from(await get.arrayBuffer());
  assert.ok(served.equals(bytes));
});

test("POST con token + bytes que no son PNG → 400", async () => {
  const token = tokenFor({ id: "profe-1", role: "TEACHER", schoolId: "esc-1" });
  const r = await uploadRaw(token, Buffer.from("esto no es un png"), "image/png", "image");
  assert.equal(r.status, 400);
});

test("POST con token + PDF válido → 201 y URL servible con Content-Type application/pdf", async () => {
  const token = tokenFor({ id: "profe-1", role: "TEACHER", schoolId: "esc-1" });
  const bytes = fakePdf("cap3-fracciones");
  const r = await uploadRaw(token, bytes, "application/pdf", "pdf");
  assert.equal(r.status, 201);
  const url = (r.body as { url: string }).url;
  assert.match(url, /^\/api\/media\/[a-f0-9]{32}\.pdf$/);

  const get = await fetch(`${baseUrl}${url}`);
  assert.equal(get.status, 200);
  assert.equal(get.headers.get("content-type"), "application/pdf");
  const served = Buffer.from(await get.arrayBuffer());
  assert.ok(served.equals(bytes));
});

test("POST con token + audio MP3 válido → 201 y URL servible con audio/mpeg", async () => {
  const token = tokenFor({ id: "profe-1", role: "TEACHER", schoolId: "esc-1" });
  const bytes = fakeMp3("audio-ingles");
  const r = await uploadRaw(token, bytes, "audio/mpeg", "audio");
  assert.equal(r.status, 201);
  const url = (r.body as { url: string }).url;
  assert.match(url, /^\/api\/media\/[a-f0-9]{32}\.mp3$/);

  const get = await fetch(`${baseUrl}${url}`);
  assert.equal(get.status, 200);
  assert.equal(get.headers.get("content-type"), "audio/mpeg");
});

test("POST con token + video MP4 válido → 201 y URL servible con video/mp4", async () => {
  const token = tokenFor({ id: "profe-1", role: "TEACHER", schoolId: "esc-1" });
  const bytes = fakeMp4("video-quimica");
  const r = await uploadRaw(token, bytes, "video/mp4", "video");
  assert.equal(r.status, 201);
  const url = (r.body as { url: string }).url;
  assert.match(url, /^\/api\/media\/[a-f0-9]{32}\.mp4$/);

  const get = await fetch(`${baseUrl}${url}`);
  assert.equal(get.status, 200);
  assert.equal(get.headers.get("content-type"), "video/mp4");
});

test("POST con kind=audio y bytes que no son audio → 400", async () => {
  const token = tokenFor({ id: "profe-1", role: "TEACHER", schoolId: "esc-1" });
  // PNG header pero kind=audio
  const r = await uploadRaw(token, fakePng(), "audio/mpeg", "audio");
  assert.equal(r.status, 400);
});

test("POST sin X-Media-Kind → 400", async () => {
  const token = tokenFor({ id: "profe-1", role: "TEACHER", schoolId: "esc-1" });
  const r = await uploadRaw(token, fakePng(), "image/png");
  assert.equal(r.status, 400);
});

test("GET /api/media con nombre inválido → 400; inexistente → 404", async () => {
  const malo = await fetch(`${baseUrl}/api/media/no-valido`);
  assert.equal(malo.status, 400);
  const inexistente = await fetch(
    `${baseUrl}/api/media/0123456789abcdef0123456789abcdef.png`,
  );
  assert.equal(inexistente.status, 404);
});

// ── Formato real (B7) ──────────────────────────────────────────────────────

const docente = () => tokenFor({ id: "profe-1", role: "TEACHER", schoolId: "esc-1" });

const FORMATOS: Array<{ nombre: string; kind: string; mime: string; bytes: Buffer; ext: string; servido: string }> = [
  { nombre: "JPEG", kind: "image", mime: "image/jpeg", bytes: Buffer.from([0xff, 0xd8, 0xff, 0xe0, 1, 2, 3]), ext: "jpg", servido: "image/jpeg" },
  { nombre: "GIF", kind: "image", mime: "image/gif", bytes: Buffer.from("GIF89a-cuerpo"), ext: "gif", servido: "image/gif" },
  { nombre: "WebP", kind: "image", mime: "image/webp", bytes: Buffer.concat([Buffer.from("RIFF"), Buffer.from([1, 0, 0, 0]), Buffer.from("WEBPVP8 ")]), ext: "webp", servido: "image/webp" },
  { nombre: "WAV", kind: "audio", mime: "audio/wav", bytes: Buffer.concat([Buffer.from("RIFF"), Buffer.from([1, 0, 0, 0]), Buffer.from("WAVEfmt ")]), ext: "wav", servido: "audio/wav" },
  { nombre: "OGG", kind: "audio", mime: "audio/ogg", bytes: Buffer.from("OggS-cuerpo"), ext: "ogg", servido: "audio/ogg" },
  { nombre: "M4A", kind: "audio", mime: "audio/mp4", bytes: Buffer.concat([Buffer.from([0, 0, 0, 0x20]), Buffer.from("ftypM4A ")]), ext: "m4a", servido: "audio/mp4" },
  { nombre: "WebM", kind: "video", mime: "video/webm", bytes: Buffer.from([0x1a, 0x45, 0xdf, 0xa3, 1, 2, 3]), ext: "webm", servido: "video/webm" },
  { nombre: "MOV", kind: "video", mime: "video/quicktime", bytes: Buffer.concat([Buffer.from([0, 0, 0, 0x14]), Buffer.from("ftypqt  ")]), ext: "mov", servido: "video/quicktime" },
];

for (const f of FORMATOS) {
  test(`B7: un ${f.nombre} se guarda y se sirve como .${f.ext} con ${f.servido}`, async () => {
    const r = await uploadRaw(docente(), f.bytes, f.mime, f.kind);
    assert.equal(r.status, 201, JSON.stringify(r.body));
    const { url, mimeType } = r.body as { url: string; mimeType: string };
    assert.match(url, new RegExp(`\\.${f.ext}$`));
    assert.equal(mimeType, f.servido);
    const get = await fetch(`${baseUrl}${url}`);
    assert.equal(get.headers.get("content-type"), f.servido);
  });
}

// ── Servicio por flujo con rangos (D1) ─────────────────────────────────────

test("D1: el archivo se sirve con soporte de rangos (206) y anuncia Accept-Ranges", async () => {
  const bytes = fakeMp4("x".repeat(5000));
  const r = await uploadRaw(docente(), bytes, "video/mp4", "video");
  const url = (r.body as { url: string }).url;

  const completo = await fetch(`${baseUrl}${url}`);
  assert.equal(completo.status, 200);
  assert.equal(completo.headers.get("accept-ranges"), "bytes");
  assert.equal(completo.headers.get("x-content-type-options"), "nosniff");
  assert.equal(completo.headers.get("content-length"), String(bytes.length));

  const parcial = await fetch(`${baseUrl}${url}`, { headers: { range: "bytes=10-109" } });
  assert.equal(parcial.status, 206);
  assert.equal(parcial.headers.get("content-range"), `bytes 10-109/${bytes.length}`);
  const trozo = Buffer.from(await parcial.arrayBuffer());
  assert.equal(trozo.length, 100);
  assert.ok(trozo.equals(bytes.subarray(10, 110)));

  const fuera = await fetch(`${baseUrl}${url}`, { headers: { range: `bytes=${bytes.length + 10}-` } });
  assert.equal(fuera.status, 416);
});

test("D1: un archivo inexistente con nombre válido → 404 (sin romper el servidor)", async () => {
  const r = await fetch(`${baseUrl}/api/media/${"a".repeat(32)}.mp4`);
  assert.equal(r.status, 404);
});

// ── Límite de memoria y de subidas (D2 / B7) ───────────────────────────────

test("D2: una imagen que supera su máximo se rechaza con 413 antes de leerla", async () => {
  const grande = Buffer.concat([PNG_MAGIC, Buffer.alloc(6 * 1024 * 1024)]); // > 5 MB
  const r = await uploadRaw(docente(), grande, "image/png", "image");
  assert.equal(r.status, 413);
});

test("D2: un audio de 6 MB (dentro de su máximo) sí entra aunque supere el de imagen", async () => {
  const audio = Buffer.concat([Buffer.from([0xff, 0xfb, 0x90, 0x00]), Buffer.alloc(6 * 1024 * 1024)]);
  const r = await uploadRaw(docente(), audio, "audio/mpeg", "audio");
  assert.equal(r.status, 201, JSON.stringify(r.body));
});

test("B7: tope de subidas por usuario y hora", () => {
  const t0 = 1_000_000;
  for (let i = 0; i < 3; i++) assert.equal(registrarSubida("u1", t0 + i, 3), true);
  assert.equal(registrarSubida("u1", t0 + 10, 3), false, "la cuarta en la misma hora se rechaza");
  assert.equal(registrarSubida("u2", t0 + 10, 3), true, "otro usuario no se ve afectado");
  assert.equal(registrarSubida("u1", t0 + 60 * 60 * 1000 + 5, 3), true, "pasada la hora vuelve a poder");
});

test("B7: por HTTP, superado el tope la subida responde 429", async () => {
  for (let i = 0; i < 60; i++) registrarSubida("profe-1");
  const r = await uploadRaw(docente(), fakePng(), "image/png", "image");
  assert.equal(r.status, 429);
});
