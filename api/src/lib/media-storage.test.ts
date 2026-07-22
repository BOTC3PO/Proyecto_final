/**
 * Backend "local" de media-storage.ts (default de ENV.MEDIA_STORAGE).
 * El backend "s3" no se testea acá: necesita credenciales reales contra
 * un bucket S3-compatible, se verifica a mano (ver
 * tareas_pendientes/PLAN-escalabilidad-api.md).
 */
import assert from "node:assert/strict";
import crypto from "node:crypto";
import test from "node:test";
import { putMedia, getMedia, mediaPublicUrl } from "./media-storage";

test("media-storage (local): put + get devuelve los mismos bytes", async () => {
  const name = `${crypto.randomBytes(16).toString("hex")}.png`;
  const buf = Buffer.from("contenido-de-prueba");
  await putMedia(name, buf);
  const read = await getMedia(name);
  assert.ok(read);
  assert.equal(read.toString(), buf.toString());
});

test("media-storage (local): get de un nombre inexistente devuelve null", async () => {
  const read = await getMedia(`${crypto.randomBytes(16).toString("hex")}.png`);
  assert.equal(read, null);
});

test("media-storage (local): sin MEDIA_S3_PUBLIC_URL no hay URL pública", () => {
  assert.equal(mediaPublicUrl("cualquier-nombre.png"), null);
});
