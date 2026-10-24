/**
 * Pruebas contra Postgres REAL (K8): un código de invitación se canjea una sola vez aunque lleguen varios
 * canjes simultáneos, y un alumno nunca pasa de 2 familiares. Solo corre con PG_TEST_DATABASE_URL `*_test`.
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
let lib: typeof import("../../src/lib/codigos-padre");

const p = `pgcp-${randomUUID().slice(0, 8)}`;
const ESC = `${p}-esc`;
const HIJO = `${p}-hijo`;
const padres = Array.from({ length: 6 }, (_, i) => `${p}-padre${i}`);

before(async () => {
  if (!habilitado) return;
  ({ prisma } = await import("../../src/lib/prisma"));
  lib = await import("../../src/lib/codigos-padre");
  const actual = await prisma.$queryRaw<Array<{ current_database: string }>>`select current_database()`;
  assert.ok(actual[0].current_database.endsWith("_test"), "la conexión no es una base de pruebas");
  const ahora = new Date().toISOString();
  await prisma.escuela.create({ data: { id: ESC, name: ESC, createdAt: ahora, estadoVerificacion: "verificada" } });
  await prisma.usuario.create({ data: { id: HIJO, username: HIJO, email: `${HIJO}@pg.test`, fullName: "Hijo", roles: ["USER"], escuelaId: ESC, createdAt: ahora, updatedAt: ahora } });
  for (const id of padres) {
    await prisma.usuario.create({ data: { id, username: id, email: `${id}@pg.test`, fullName: id, roles: ["PARENT"], escuelaId: ESC, createdAt: ahora, updatedAt: ahora } });
  }
});

after(async () => {
  if (!habilitado) return;
  await prisma.progresoModuloVinculo.deleteMany({ where: { childId: HIJO } });
  await prisma.codigoInvitacionPadre.deleteMany({ where: { escuelaId: ESC } });
  await prisma.membresia.deleteMany({ where: { escuelaId: ESC } });
  await prisma.usuario.deleteMany({ where: { id: { in: [HIJO, ...padres] } } });
  await prisma.escuela.deleteMany({ where: { id: ESC } });
  await prisma.$disconnect();
});

test("PG: 6 padres canjean el MISMO código a la vez: gana uno y queda un solo vínculo", opts, async () => {
  const { codigo } = await lib.crearCodigoPadre({ escuelaId: ESC, hijoId: HIJO, creadoPor: "dir" });
  const rs = await Promise.all(padres.map((id) => lib.canjearCodigoPadre(codigo, id)));
  assert.equal(rs.filter((r) => r.ok).length, 1, JSON.stringify(rs));
  assert.equal(await prisma.progresoModuloVinculo.count({ where: { childId: HIJO } }), 1);
  const fila = (await prisma.codigoInvitacionPadre.findMany({ where: { escuelaId: ESC } }))[0];
  assert.equal(fila.estado, "usado");
});

test("PG: con 5 códigos distintos canjeados a la vez el alumno no pasa de 2 familiares", opts, async () => {
  const codigos = await Promise.all(Array.from({ length: 5 }, () => lib.crearCodigoPadre({ escuelaId: ESC, hijoId: HIJO, creadoPor: "dir" })));
  await Promise.all(codigos.map((c, i) => lib.canjearCodigoPadre(c.codigo, padres[i + 1])));
  const activos = await prisma.progresoModuloVinculo.count({ where: { childId: HIJO, estado: { not: "revocado" } } });
  assert.ok(activos <= 2, `el alumno quedó con ${activos} familiares`);
});
