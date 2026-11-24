/**
 * Con REDIS_URL apuntando a un Redis que no responde, la API NO se cuelga ni se cae: el limitador deja pasar el pedido
 * (antes un Redis caído dejaba TODOS los pedidos esperando para siempre, /health incluido) y los contadores de ingreso
 * caen a memoria.
 */
process.env.NODE_ENV = "test";
process.env.REDIS_URL = "redis://127.0.0.1:1"; // puerto cerrado: conexión rechazada

import assert from "node:assert/strict";
import type { Server } from "node:http";
import express from "express";
import { after, test } from "node:test";

let srv: Server | undefined;
after(async () => {
  const { getRedisClient } = await import("../../src/lib/rate-limit");
  getRedisClient()?.disconnect();
  if (srv) await new Promise<void>((r) => srv?.close(() => r()));
});

test("createRateLimiter con Redis caído: los pedidos responden rápido y no se cae el proceso", async () => {
  const { createRateLimiter } = await import("../../src/lib/rate-limit");
  const app = express();
  app.get("/x", createRateLimiter({ windowMs: 60_000, limit: 3 }), (_req, res) => res.json({ ok: true }));
  srv = await new Promise<Server>((resolve) => { const s = app.listen(0, () => resolve(s)); });
  const url = `http://127.0.0.1:${(srv.address() as { port: number }).port}/x`;
  const t0 = Date.now();
  const estados: number[] = [];
  for (let i = 0; i < 10; i++) estados.push((await fetch(url, { signal: AbortSignal.timeout(3000) })).status);
  assert.deepEqual(estados, Array(10).fill(200), "sin Redis no hay límite compartido: el pedido pasa");
  assert.ok(Date.now() - t0 < 3000, `tardó ${Date.now() - t0} ms`);
});

test("los contadores de ingreso con Redis caído funcionan en memoria (no se cuelga el login)", async () => {
  const { getRedisClient } = await import("../../src/lib/rate-limit");
  const { crearAlmacenDelEntorno } = await import("../../src/lib/login-guard");
  const almacen = crearAlmacenDelEntorno(getRedisClient(), () => undefined);
  const t0 = Date.now();
  assert.equal(await almacen.incr("k", 60_000), 1);
  assert.equal(await almacen.incr("k", 60_000), 2);
  await almacen.agregar("s", "m", 60_000);
  assert.equal(await almacen.tamano("s"), 1);
  assert.ok(Date.now() - t0 < 2000, `tardó ${Date.now() - t0} ms`);
});
