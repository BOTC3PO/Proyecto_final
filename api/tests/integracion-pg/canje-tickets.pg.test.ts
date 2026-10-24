/**
 * Pruebas contra Postgres REAL (H17 / J6) del canje de tickets de examen: canjes simultáneos del mismo
 * alumno no pasan del máximo ni descuentan de más, y el bono sobrevive al segundo canje.
 *
 * Solo corre si PG_TEST_DATABASE_URL apunta a una base `*_test` (ver economia-saldo.pg.test.ts).
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
import type { Server } from "node:http";

const opts = { skip: habilitado ? false : "definir PG_TEST_DATABASE_URL (base *_test)" };

type Prisma = typeof import("../../src/lib/prisma").prisma;
let prisma: Prisma;
let server: Server;
let baseUrl = "";
let token = "";

const p = `pgtk-${randomUUID().slice(0, 8)}`;
const ALUMNO = `${p}-alumno`;
const MODULO = `${p}-mod`;
const QUIZ = `${p}-quiz`;
const VERSION = `${p}-ver`;
const EXAMEN = `${p}-examen`;
const FILA = `${p}-fila`;
const INTENTO = `${p}-intento`;

const canjear = async (tickets: number) => {
  const res = await fetch(`${baseUrl}/api/quiz-attempts/${INTENTO}/canjear-tickets`, {
    method: "POST",
    headers: { "content-type": "application/json", authorization: `Bearer ${token}` },
    body: JSON.stringify({ tickets })
  });
  return { status: res.status, body: (await res.json()) as Record<string, any> };
};

const billetera = async () => JSON.parse((await prisma.economiaExamenPunto.findFirst({ where: { id: FILA } }))!.json) as { tickets: number; canjeados: number };
const intento = async () => (await prisma.quizAttempt.findFirst({ where: { id: INTENTO } }))!;

before(async () => {
  if (!habilitado) return;
  ({ prisma } = await import("../../src/lib/prisma"));
  const actual = await prisma.$queryRaw<Array<{ current_database: string }>>`select current_database()`;
  assert.ok(actual[0].current_database.endsWith("_test"), "la conexión no es una base de pruebas");

  const ahora = new Date().toISOString();
  await prisma.usuario.create({
    data: { id: ALUMNO, username: ALUMNO, email: `${ALUMNO}@pg.test`, fullName: ALUMNO, roles: ["USER"], createdAt: ahora, updatedAt: ahora }
  });
  await prisma.modulo.create({ data: { id: MODULO, titulo: "Examen pg" } as never });
  await prisma.quiz.create({ data: { id: QUIZ, moduleId: MODULO, ownerUserId: ALUMNO, title: "Examen", createdAt: ahora, updatedAt: ahora } });
  await prisma.quizVersion.create({ data: { id: VERSION, quizId: QUIZ, versionNumber: 1, createdAt: ahora } });
  await prisma.economiaExamen.create({
    data: { id: EXAMEN, createdAt: ahora, updatedAt: ahora, json: JSON.stringify({ id: EXAMEN, moduloId: MODULO, estado: "cerrado", updatedAt: ahora }) }
  });
  // 2 tickets comprados, ninguno canjeado.
  await prisma.economiaExamenPunto.create({
    data: { id: FILA, examenId: EXAMEN, updatedAt: ahora, json: JSON.stringify({ usuarioId: ALUMNO, examenId: EXAMEN, tickets: 2, canjeados: 0 }) }
  });
  await prisma.quizAttempt.create({
    data: { id: INTENTO, quizId: QUIZ, quizVersionId: VERSION, userId: ALUMNO, status: "submitted", startedAt: ahora, score: 5, maxScore: 10, answers: "{}", grading: "{}" }
  });

  const { createAccessToken } = await import("../../src/lib/auth-token");
  token = createAccessToken({ id: ALUMNO, role: "USER", roles: ["USER"], esAdminPrincipal: false, schoolId: null } as never).token;

  const express = (await import("express")).default;
  const { examenTickets } = await import("../../src/routes/examen-tickets");
  const app = express();
  app.use(express.json());
  app.use(examenTickets);
  await new Promise<void>((ok) => { server = app.listen(0, "127.0.0.1", ok); });
  baseUrl = `http://127.0.0.1:${(server.address() as { port: number }).port}`;
});

after(async () => {
  if (!habilitado) return;
  if (server) await new Promise((ok) => server.close(ok));
  await prisma.quizAttempt.deleteMany({ where: { id: INTENTO } });
  await prisma.economiaExamenPunto.deleteMany({ where: { id: FILA } });
  await prisma.economiaExamen.deleteMany({ where: { id: EXAMEN } });
  await prisma.quizVersion.deleteMany({ where: { id: VERSION } });
  await prisma.quiz.deleteMany({ where: { id: QUIZ } });
  await prisma.modulo.deleteMany({ where: { id: MODULO } });
  await prisma.usuario.deleteMany({ where: { id: ALUMNO } });
  await prisma.$disconnect();
});

test("PG: 6 canjes de 1 ticket a la vez con 2 comprados: prosperan exactamente 2 y el bono es el de 2 tickets", opts, async () => {
  const rs = await Promise.all(Array.from({ length: 6 }, () => canjear(1)));
  const ok = rs.filter((r) => r.status === 200);
  assert.equal(ok.length, 2, JSON.stringify(rs.map((r) => [r.status, r.body.error])));
  assert.ok(rs.filter((r) => r.status !== 200).every((r) => r.status === 400 || r.status === 409));
  const b = await billetera();
  assert.deepEqual([b.tickets, b.canjeados], [2, 2]);
  // 2 tickets × 10% de 10 = +2 sobre la nota base de 5.
  assert.equal((await intento()).score, 7);
});

test("PG: un canje más después de gastar los tickets se rechaza y no cambia nada", opts, async () => {
  const r = await canjear(1);
  assert.ok(r.status === 400 || r.status === 409, JSON.stringify(r.body));
  assert.equal((await billetera()).canjeados, 2);
  assert.equal((await intento()).score, 7);
});

test("PG: sobre un intento que no es el último no se canjea", opts, async () => {
  const ahora = new Date(Date.now() + 60_000).toISOString();
  const nuevo = `${p}-intento2`;
  await prisma.quizAttempt.create({
    data: { id: nuevo, quizId: QUIZ, quizVersionId: VERSION, userId: ALUMNO, status: "in_progress", startedAt: ahora, answers: "{}" }
  });
  try {
    const r = await canjear(1);
    assert.equal(r.status, 409, JSON.stringify(r.body));
  } finally {
    await prisma.quizAttempt.deleteMany({ where: { id: nuevo } });
  }
});
