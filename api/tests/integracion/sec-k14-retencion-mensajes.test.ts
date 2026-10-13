/** K14 — los mensajes se borran pasados N años; lo reciente y los reportes pendientes se conservan. */
process.env.NODE_ENV = "test";
process.env.JWT_SECRET = "test-secret-vblang";
process.env.DATABASE_URL = process.env.DATABASE_URL ?? "postgresql://test:test@localhost:5432/test";

import assert from "node:assert/strict";
import { beforeEach, test } from "node:test";
import { prisma, resetPrisma } from "./_helpers/setup";
import { fechaCorte, purgarMensajesVencidos } from "../../src/lib/retencion-mensajes";

const AHORA = new Date("2026-10-13T12:00:00.000Z");
const VIEJO = "2018-01-01T00:00:00.000Z";
const NUEVO = "2026-09-01T00:00:00.000Z";

beforeEach(() => {
  resetPrisma();
  for (const t of [prisma.hilo, prisma.mensajeDirecto, prisma.hiloSoporte, prisma.mensajeSoporte, prisma.soporteLectura, prisma.mensajeReportado]) t.rows = [];
});

test("fechaCorte resta los años", () => {
  assert.equal(fechaCorte(AHORA, 8), "2018-10-13T12:00:00.000Z");
});

test("borra mensajes y hilos de más de 8 años; conserva lo reciente", async () => {
  prisma.hilo.rows.push({ id: "h-viejo", escuelaId: "e", usuarioA: "a", usuarioB: "b", createdAt: VIEJO } as never);
  prisma.hilo.rows.push({ id: "h-mixto", escuelaId: "e", usuarioA: "a", usuarioB: "c", createdAt: VIEJO } as never);
  prisma.mensajeDirecto.rows.push(
    { id: "m1", hiloId: "h-viejo", senderId: "a", body: "x", createdAt: VIEJO } as never,
    { id: "m2", hiloId: "h-mixto", senderId: "a", body: "x", createdAt: VIEJO } as never,
    { id: "m3", hiloId: "h-mixto", senderId: "a", body: "y", createdAt: NUEVO } as never,
  );
  prisma.hiloSoporte.rows.push({ id: "sop-v", solicitanteId: "a", createdAt: VIEJO } as never);
  prisma.mensajeSoporte.rows.push({ id: "s1", hiloId: "sop-v", senderId: "a", body: "x", createdAt: VIEJO } as never);
  prisma.soporteLectura.rows.push({ hiloId: "sop-v", usuarioId: "a", leidoAt: VIEJO } as never);

  const r = await purgarMensajesVencidos(AHORA, 8);
  assert.deepEqual(prisma.mensajeDirecto.rows.map((m) => (m as { id: string }).id), ["m3"]);
  assert.deepEqual(prisma.hilo.rows.map((h) => (h as { id: string }).id), ["h-mixto"], "el hilo con mensajes recientes se queda");
  assert.equal(prisma.mensajeSoporte.rows.length, 0);
  assert.equal(prisma.hiloSoporte.rows.length, 0);
  assert.equal(prisma.soporteLectura.rows.length, 0);
  assert.equal(r.mensajes, 2);
  assert.equal(r.soporte, 1);
});

test("los reportes viejos resueltos se borran; los pendientes se conservan", async () => {
  prisma.mensajeReportado.rows.push(
    { id: "r1", estado: "resuelto", createdAt: VIEJO } as never,
    { id: "r2", estado: "pendiente", createdAt: VIEJO } as never,
  );
  await purgarMensajesVencidos(AHORA, 8);
  assert.deepEqual(prisma.mensajeReportado.rows.map((r) => (r as { id: string }).id), ["r2"]);
});

test("con 0 años no borra nada", async () => {
  prisma.mensajeDirecto.rows.push({ id: "m", hiloId: "h", senderId: "a", body: "x", createdAt: VIEJO } as never);
  await purgarMensajesVencidos(AHORA, 0);
  assert.equal(prisma.mensajeDirecto.rows.length, 1);
});
