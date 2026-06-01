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
  inspectPngUpload,
  isValidMediaName,
} from "../../src/routes/media";

let baseUrl: string;
let close: () => Promise<void>;

/** Magic bytes de un PNG válido + relleno arbitrario. */
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
function fakePng(extra = "cuerpo-png"): Buffer {
  return Buffer.concat([PNG_MAGIC, Buffer.from(extra)]);
}

async function uploadRaw(
  token: string | undefined,
  body: Buffer,
  contentType = "image/png",
): Promise<{ status: number; body: unknown }> {
  const headers: Record<string, string> = { "content-type": contentType };
  if (token) headers.authorization = `Bearer ${token}`;
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
  resetPrisma();
  seedUser({ id: "profe-1", role: "TEACHER", schoolId: "esc-1" });
});

test("inspectPngUpload acepta un PNG válido y rechaza basura", () => {
  assert.deepEqual(inspectPngUpload(fakePng()), { ok: true });
  const noPng = inspectPngUpload(Buffer.from("no soy un png"));
  assert.equal(noPng.ok, false);
  assert.equal((noPng as { status: number }).status, 400);
  const vacio = inspectPngUpload(Buffer.alloc(0));
  assert.equal(vacio.ok, false);
  const grande = inspectPngUpload(
    Buffer.concat([PNG_MAGIC, Buffer.alloc(6 * 1024 * 1024)]),
  );
  assert.equal(grande.ok, false);
  assert.equal((grande as { status: number }).status, 413);
});

test("isValidMediaName sólo acepta nombres generados por nosotros", () => {
  assert.equal(isValidMediaName("g".repeat(32) + ".png"), false); // g no es hex
  assert.equal(isValidMediaName("0123456789abcdef.png"), false); // largo incorrecto
  assert.equal(isValidMediaName("0123456789abcdef0123456789abcdef.png"), true);
  assert.equal(isValidMediaName("../secreto.png"), false);
  assert.equal(isValidMediaName("foo.jpg"), false);
});

test("POST /api/media/upload sin token → 401", async () => {
  const r = await uploadRaw(undefined, fakePng());
  assert.equal(r.status, 401);
});

test("POST con token + PNG válido → 201 y URL servible", async () => {
  const token = tokenFor({ id: "profe-1", role: "TEACHER", schoolId: "esc-1" });
  const bytes = fakePng("contenido-unico-123");
  const r = await uploadRaw(token, bytes);
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
  const r = await uploadRaw(token, Buffer.from("esto no es un png"));
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
