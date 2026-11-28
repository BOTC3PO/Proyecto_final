/**
 * Auditoría 11/2026 — datasets externos: el límite de 2 MB se miraba después de descomprimir la fuente entera.
 */
import assert from "node:assert/strict";
import { test } from "node:test";
import { gzipSync } from "node:zlib";
import http from "node:http";
import type { AddressInfo } from "node:net";
import { leerConTope } from "../routes/vblang-datasets";

const servir = (cuerpo: Buffer, gzip: boolean) =>
  new Promise<{ url: string; cerrar: () => void }>((resolve) => {
    const srv = http.createServer((_req, res) => {
      res.writeHead(200, { "content-type": "text/csv", ...(gzip ? { "content-encoding": "gzip" } : {}), "content-length": cuerpo.length });
      res.end(cuerpo);
    });
    srv.listen(0, "127.0.0.1", () => resolve({ url: `http://127.0.0.1:${(srv.address() as AddressInfo).port}/`, cerrar: () => srv.close() }));
  });

test("una fuente gzip chica que descomprime a 64 MB se corta al pasar el tope", async () => {
  const comprimido = gzipSync(Buffer.alloc(64 * 1024 * 1024, 0x61));
  assert.ok(comprimido.length < 2 * 1024 * 1024);
  const { url, cerrar } = await servir(comprimido, true);
  try {
    const res = await fetch(url);
    await assert.rejects(leerConTope(res, 2 * 1024 * 1024), /2MB/);
  } finally {
    cerrar();
  }
});

test("dentro del tope devuelve el texto", async () => {
  const { url, cerrar } = await servir(gzipSync(Buffer.from("a,b\n1,2\n")), true);
  try {
    assert.equal(await leerConTope(await fetch(url), 1024), "a,b\n1,2\n");
  } finally {
    cerrar();
  }
});
