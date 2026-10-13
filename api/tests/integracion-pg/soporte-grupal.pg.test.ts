/**
 * Pruebas contra Postgres REAL (K10b): dos pedidos simultáneos de la misma persona comparten un solo hilo de
 * soporte, y la lectura simultánea no duplica filas. Solo corre con PG_TEST_DATABASE_URL `*_test`.
 */
const url = process.env.PG_TEST_DATABASE_URL ?? "";
const dbName = url.replace(/\?.*$/, "").split("/").pop() ?? "";
const habilitado = url !== "" && dbName.endsWith("_test");

process.env.NODE_ENV = "test";
process.env.JWT_SECRET = process.env.JWT_SECRET ?? "test-secret-pg";
if (habilitado) process.env.DATABASE_URL = url;

import assert from "node:assert/strict";
import { after, before, test } from "node:test";
import { randomUUID } from "node:crypto";

const opts = { skip: habilitado ? false : "definir PG_TEST_DATABASE_URL (base *_test)" };
type Prisma = typeof import("../../src/lib/prisma").prisma;
let prisma: Prisma;
let lib: typeof import("../../src/lib/soporte-grupal");
const p = `pgsg-${randomUUID().slice(0, 8)}`;
const ALU = `${p}-alu`;
const ESC = `${p}-esc`;
const PADRE = `${p}-padre`;
const DIR = `${p}-dir`;
const ADM = `${p}-adm`;

before(async () => {
  if (!habilitado) return;
  ({ prisma } = await import("../../src/lib/prisma"));
  lib = await import("../../src/lib/soporte-grupal");
  const actual = await prisma.$queryRaw<Array<{ current_database: string }>>`select current_database()`;
  assert.ok(actual[0].current_database.endsWith("_test"), "la conexión no es una base de pruebas");
  const ahora = new Date().toISOString();
  await prisma.usuario.create({ data: { id: DIR, username: DIR, email: `${DIR}@pg.test`, fullName: "Dir", roles: ["DIRECTIVO"], createdAt: ahora, updatedAt: ahora } });
  await prisma.escuela.create({ data: { id: ESC, name: ESC, createdAt: ahora, estadoVerificacion: "verificada", directivoPrincipalId: DIR } });
  for (const [id, roles] of [[ALU, ["USER"]], [PADRE, ["PARENT"]], [ADM, ["ADMIN"]]] as const) {
    await prisma.usuario.create({ data: { id, username: id, email: `${id}@pg.test`, fullName: id, roles: [...roles], createdAt: ahora, updatedAt: ahora } });
  }
  await prisma.progresoModuloVinculo.create({ data: { id: `${p}-v`, parentId: PADRE, childId: ALU, estado: "aprobado", createdAt: ahora, updatedAt: ahora } as never });
});

after(async () => {
  if (!habilitado) return;
  await prisma.soporteLectura.deleteMany({ where: { usuarioId: { startsWith: p } } });
  await prisma.mensajeSoporte.deleteMany({ where: { senderId: { startsWith: p } } });
  await prisma.hiloSoporte.deleteMany({ where: { solicitanteId: { startsWith: p } } });
  await prisma.progresoModuloVinculo.deleteMany({ where: { childId: ALU } });
  await prisma.usuario.deleteMany({ where: { id: { startsWith: p } } });
  await prisma.escuela.deleteMany({ where: { id: ESC } });
  await prisma.$disconnect();
});

test("pedidos simultáneos de la misma persona comparten un solo hilo", opts, async () => {
  const hilos = await Promise.all(Array.from({ length: 8 }, () => lib.hiloSoporteDe(ALU, ESC)));
  assert.equal(new Set(hilos.map((h) => h.id)).size, 1);
  assert.equal(await prisma.hiloSoporte.count({ where: { solicitanteId: ALU } }), 1);
});

test("participan admin, principal, alumno y padre vinculado; nadie más", opts, async () => {
  const hilo = await lib.hiloSoporteDe(ALU, ESC);
  const ids = await lib.participantesSoporte(hilo);
  for (const id of [ALU, ADM, DIR, PADRE]) assert.ok(ids.includes(id), id);
  assert.equal(await lib.esParticipanteSoporte(hilo, { id: `${p}-otro`, roles: ["USER"] }), false);
});

test("marcar leído en simultáneo deja una sola fila por persona", opts, async () => {
  const hilo = await lib.hiloSoporteDe(ALU, ESC);
  await Promise.all(Array.from({ length: 6 }, () => lib.marcarLeidoSoporte(hilo.id, ADM)));
  assert.equal(await prisma.soporteLectura.count({ where: { hiloId: hilo.id, usuarioId: ADM } }), 1);
});
