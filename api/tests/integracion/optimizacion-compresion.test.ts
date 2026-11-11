/** Optimización del 2026-11-09: compresión configurable, sin ETag automático. */
process.env.NODE_ENV = "test";

import assert from "node:assert/strict";
import { constants } from "node:zlib";
import { test } from "node:test";
import { opcionesCompresion } from "../../src/lib/compression-config";

const cfg = (o: Partial<{ COMPRESSION: string; COMPRESSION_BROTLI_QUALITY: number; COMPRESSION_GZIP_LEVEL: number }> = {}) => ({
  COMPRESSION: "on", COMPRESSION_BROTLI_QUALITY: 1, COMPRESSION_GZIP_LEVEL: 1, ...o
});
const calidad = (o: ReturnType<typeof opcionesCompresion>) => o?.brotli.params[constants.BROTLI_PARAM_QUALITY];

test("COMPRESSION=off no monta el middleware (null)", () => {
  assert.equal(opcionesCompresion(cfg({ COMPRESSION: "off" })), null);
});

test("por defecto: Brotli calidad 1 y gzip nivel 1", () => {
  const o = opcionesCompresion(cfg());
  assert.equal(o?.level, 1);
  assert.equal(calidad(o), 1);
});

test("los niveles se acotan a rangos válidos y un valor inválido cae al default", () => {
  assert.equal(calidad(opcionesCompresion(cfg({ COMPRESSION_BROTLI_QUALITY: 99 }))), 11);
  assert.equal(calidad(opcionesCompresion(cfg({ COMPRESSION_BROTLI_QUALITY: -5 }))), 0);
  assert.equal(opcionesCompresion(cfg({ COMPRESSION_GZIP_LEVEL: 99 }))?.level, 9);
  assert.equal(opcionesCompresion(cfg({ COMPRESSION_GZIP_LEVEL: 0 }))?.level, 1);
  assert.equal(calidad(opcionesCompresion(cfg({ COMPRESSION_BROTLI_QUALITY: Number.NaN }))), 1);
  assert.equal(opcionesCompresion(cfg({ COMPRESSION_GZIP_LEVEL: Number.NaN }))?.level, 1);
});

test("cualquier valor distinto de 'off' deja la compresión activa", () => {
  for (const v of ["on", "ON", "true", "", "gzip"]) assert.notEqual(opcionesCompresion(cfg({ COMPRESSION: v })), null, v);
});

test("la app no calcula ETag automático (las respuestas de /api son no-store)", async () => {
  const { app } = await import("../../src/app");
  assert.equal(app.get("etag"), false);
});
