/**
 * Protección de CPU del ingreso: con muchos hashes de contraseña a la vez, el exceso recibe 503 al instante (en vez de
 * formar una cola que hace esperar segundos a todos) y el intento se devuelve: no cuenta contra la cuenta ni la IP.
 *
 * La prueba LLENA el limitador a propósito (cupos y cola ocupados por tareas pendientes) en vez de depender de que varios
 * ingresos coincidan en el tiempo, que dependía de cuán cargada estuviera la máquina.
 */
process.env.NODE_ENV = "test";
process.env.LOGIN_CONCURRENCIA_MAX = "2";
process.env.LOGIN_COLA_MAX = "1";

import assert from "node:assert/strict";
import type { Server } from "node:http";
import express from "express";
import { after, before, test } from "node:test";
import { prisma, resetPrisma, seedUser } from "./_helpers/setup";
import { hashPassword } from "../../src/lib/passwords";

const CLAVE = "Clave#Valida2026";
let baseUrl: string;
let server: Server;
let hash: string;

before(async () => {
  hash = await hashPassword(CLAVE);
  const { auth } = await import("../../src/routes/auth");
  const app = express();
  app.set("trust proxy", true);
  app.use(express.json());
  app.use(auth);
  server = await new Promise<Server>((resolve) => { const s = app.listen(0, () => resolve(s)); });
  baseUrl = `http://127.0.0.1:${(server.address() as { port: number }).port}`;
});
after(async () => { await new Promise<void>((r) => server.close(() => r())); });

const login = (ip: string, identifier: string, password = CLAVE) =>
  fetch(`${baseUrl}/api/auth/login`, {
    method: "POST", headers: { "content-type": "application/json", "x-forwarded-for": ip }, body: JSON.stringify({ identifier, password })
  });

test("con el limitador lleno el ingreso recibe 503 + Retry-After, el intento se devuelve y al liberarse entra", async () => {
  resetPrisma();
  for (const id of ["cola-ana", "cola-beto"]) {
    seedUser({ id, role: "USER", schoolId: null });
    Object.assign(prisma.usuario.rows.find((u) => u.id === id) as Record<string, unknown>, { email: `${id}@e.test`, username: id, passwordHash: hash });
  }
  const { limitarHash, almacenLimites } = await import("../../src/lib/login-guard-instancia");
  const { max, colaMax } = limitarHash.estado();
  assert.deepEqual([max, colaMax], [2, 1], "la configuración por entorno se aplicó");

  // se ocupan los cupos y la cola con tareas que no terminan hasta que la prueba lo decida
  const liberar: Array<() => void> = [];
  const ocupadas: Array<Promise<void>> = [];
  for (let i = 0; i < max + colaMax; i++) ocupadas.push(limitarHash(() => new Promise<void>((r) => liberar.push(r))));
  await new Promise((r) => setTimeout(r, 20));
  assert.deepEqual([limitarHash.estado().activos, limitarHash.estado().esperando], [max, colaMax]);

  // lleno: contraseña correcta y contraseña mala dan 503 al instante, y ninguna cuenta queda marcada
  const t0 = Date.now();
  const r1 = await login("203.0.113.77", "cola-ana");
  const r2 = await login("203.0.113.77", "cola-ana", "contraseña-equivocada");
  assert.equal(r1.status, 503);
  assert.equal(r2.status, 503);
  assert.equal(r1.headers.get("retry-after"), "3");
  assert.ok(Date.now() - t0 < 500, `respondió en ${Date.now() - t0} ms: no se quedó esperando en la cola`);
  assert.equal(await almacenLimites.leer("lg:i:203.0.113.77:n"), 0, "el rechazo es previo a todo: no se contó nada contra la IP");

  // 20 intentos rechazados por estar lleno NO bloquean la cuenta (no cuentan como fallos): al liberarse, entra
  for (let i = 0; i < 20; i++) assert.equal((await login("203.0.113.77", "cola-beto", "otra-equivocada")).status, 503);
  // La tarea que esperaba en la cola recién registra su resolvedor cuando empieza a correr: se libera en ciclo hasta que terminen todas.
  let terminadas = false;
  const todas = Promise.all(ocupadas).then(() => { terminadas = true; });
  for (let vueltas = 0; !terminadas && vueltas < 200; vueltas++) {
    while (liberar.length) liberar.shift()?.();
    await new Promise((r) => setTimeout(r, 10));
  }
  await todas;
  assert.equal((await login("203.0.113.77", "cola-beto")).status, 200);
  assert.equal((await login("203.0.113.77", "cola-ana")).status, 200);
});
