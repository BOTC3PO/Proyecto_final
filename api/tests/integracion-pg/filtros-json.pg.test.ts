/**
 * Pruebas contra Postgres REAL (H11): los filtros por texto sobre el JSON de las tablas de economía (`contains`)
 * encuentran exactamente lo que buscan y no se confunden con ids parecidos. Solo corre con PG_TEST_DATABASE_URL `*_test`.
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
const p = `pgfj-${randomUUID().slice(0, 8)}`;

before(async () => {
  if (!habilitado) return;
  ({ prisma } = await import("../../src/lib/prisma"));
  const actual = await prisma.$queryRaw<Array<{ current_database: string }>>`select current_database()`;
  assert.ok(actual[0].current_database.endsWith("_test"), "la conexión no es una base de pruebas");
  const ahora = new Date().toISOString();
  const examen = (id: string, moduloId: string, estado: string) =>
    prisma.economiaExamen.create({ data: { id, json: JSON.stringify({ id, moduloId, estado, aulaId: `${p}-aula` }), createdAt: ahora } });
  await examen(`${p}-e1`, `${p}-mod`, "cerrado");
  await examen(`${p}-e2`, `${p}-mod2`, "cerrado");
  await examen(`${p}-e3`, `${p}-mod`, "anunciado");
});

after(async () => {
  if (!habilitado) return;
  await prisma.economiaExamen.deleteMany({ where: { id: { startsWith: p } } });
  await prisma.$disconnect();
});

test("filtra por moduloId exacto (el id entre comillas no coincide con otro más largo)", opts, async () => {
  const filas = await prisma.economiaExamen.findMany({ where: { json: { contains: `"moduloId":${JSON.stringify(`${p}-mod`)}` } } });
  assert.deepEqual(filas.map((f) => f.id).sort(), [`${p}-e1`, `${p}-e3`]);
});

test("combina estado y aula", opts, async () => {
  const filas = await prisma.economiaExamen.findMany({
    where: {
      json: { contains: `"estado":${JSON.stringify("cerrado")}` },
      OR: [{ json: { contains: `"aulaId":${JSON.stringify(`${p}-aula`)}` } }]
    }
  });
  assert.deepEqual(filas.map((f) => f.id).sort(), [`${p}-e1`, `${p}-e2`]);
});
