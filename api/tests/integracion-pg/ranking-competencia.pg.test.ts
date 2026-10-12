/**
 * Pruebas contra Postgres REAL (C3): el ranking de competencia solo muestra a alumnos de la escuela de quien
 * lo pide. Antes devolvía el top de toda la plataforma, con nombres de menores de otras escuelas.
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
const tokens: Record<string, string> = {};

const p = `pgrk-${randomUUID().slice(0, 8)}`;
const ESC_A = `${p}-escA`;
const ESC_B = `${p}-escB`;
const AULA_A = `${p}-aulaA`;
const AULA_B = `${p}-aulaB`;
const QUIZ = `${p}-quiz`;
const ALU_A = `${p}-aluA`;
const ALU_A2 = `${p}-aluA2`;
const ALU_B = `${p}-aluB`;
const DOC_B = `${p}-docB`;

const ranking = async (quien: string, query = "") => {
  const res = await fetch(`${baseUrl}/api/quiz-attempts/competencia/${QUIZ}/ranking${query}`, {
    headers: { authorization: `Bearer ${tokens[quien]}` }
  });
  const body = (await res.json()) as { ranking?: Array<{ usuarioId: string }> };
  return { status: res.status, ids: (body.ranking ?? []).map((r) => r.usuarioId).sort() };
};

before(async () => {
  if (!habilitado) return;
  ({ prisma } = await import("../../src/lib/prisma"));
  const actual = await prisma.$queryRaw<Array<{ current_database: string }>>`select current_database()`;
  assert.ok(actual[0].current_database.endsWith("_test"), "la conexión no es una base de pruebas");

  const ahora = new Date().toISOString();
  for (const id of [ESC_A, ESC_B]) await prisma.escuela.create({ data: { id, name: id, createdAt: ahora, estadoVerificacion: "verificada" } });
  const usuarios: Array<[string, string, string, string]> = [
    [ALU_A, "USER", "STUDENT", ESC_A], [ALU_A2, "USER", "STUDENT", ESC_A], [ALU_B, "USER", "STUDENT", ESC_B], [DOC_B, "TEACHER", "TEACHER", ESC_B]
  ];
  for (const [id, rol, mem, esc] of usuarios) {
    await prisma.usuario.create({ data: { id, username: id, email: `${id}@pg.test`, fullName: `Nombre ${id}`, roles: [rol], escuelaId: esc, createdAt: ahora, updatedAt: ahora } });
    await prisma.membresia.create({ data: { usuarioId: id, escuelaId: esc, rol: mem, estado: "activa", fechaAlta: ahora } });
  }
  await prisma.clase.create({ data: { id: AULA_A, escuelaId: ESC_A, name: "A", grade: "1", createdAt: ahora } });
  await prisma.clase.create({ data: { id: AULA_B, escuelaId: ESC_B, name: "B", grade: "1", createdAt: ahora } });
  await prisma.claseMiembro.createMany({
    data: [
      { claseId: AULA_A, usuarioId: ALU_A, rolEnClase: "STUDENT" },
      { claseId: AULA_A, usuarioId: ALU_A2, rolEnClase: "STUDENT" },
      { claseId: AULA_B, usuarioId: ALU_B, rolEnClase: "STUDENT" }
    ]
  });
  let n = 0;
  for (const [usuarioId, aulaId, score] of [[ALU_A, AULA_A, 9], [ALU_A2, AULA_A, 7], [ALU_B, AULA_B, 10]] as const) {
    await prisma.quizCompetencia.create({
      data: { id: `${p}-c${n++}`, quizId: QUIZ, aulaId, usuarioId, attemptId: `${p}-att${n}`, score, maxScore: 10, tiempoSeg: 30, completadoAt: ahora }
    });
  }

  const { createAccessToken } = await import("../../src/lib/auth-token");
  const token = (id: string, role: string, school: string) =>
    createAccessToken({ id, role, roles: [role], esAdminPrincipal: false, schoolId: school } as never).token;
  tokens.aluA = token(ALU_A, "USER", ESC_A);
  tokens.aluB = token(ALU_B, "USER", ESC_B);
  tokens.docB = token(DOC_B, "TEACHER", ESC_B);

  const express = (await import("express")).default;
  const { quizAttempts } = await import("../../src/routes/quiz-attempts");
  const app = express();
  app.use(express.json());
  app.use(quizAttempts);
  await new Promise<void>((ok) => { server = app.listen(0, "127.0.0.1", ok); });
  baseUrl = `http://127.0.0.1:${(server.address() as { port: number }).port}`;
});

after(async () => {
  if (!habilitado) return;
  if (server) await new Promise((ok) => server.close(ok));
  await prisma.quizCompetencia.deleteMany({ where: { quizId: QUIZ } });
  await prisma.claseMiembro.deleteMany({ where: { claseId: { in: [AULA_A, AULA_B] } } });
  await prisma.clase.deleteMany({ where: { id: { in: [AULA_A, AULA_B] } } });
  await prisma.membresia.deleteMany({ where: { escuelaId: { in: [ESC_A, ESC_B] } } });
  await prisma.usuario.deleteMany({ where: { id: { in: [ALU_A, ALU_A2, ALU_B, DOC_B] } } });
  await prisma.escuela.deleteMany({ where: { id: { in: [ESC_A, ESC_B] } } });
  await prisma.$disconnect();
});

test("PG: el ranking sin aula muestra solo a la escuela de quien lo pide (no a las demás)", opts, async () => {
  const deA = await ranking("aluA");
  assert.equal(deA.status, 200);
  assert.deepEqual(deA.ids, [ALU_A, ALU_A2].sort(), "no aparece ALU_B de la otra escuela, que tiene el mejor puntaje");
  const deB = await ranking("aluB");
  assert.deepEqual(deB.ids, [ALU_B]);
});

test("PG: el ranking de un aula ajena responde 404 y el del aula propia funciona", opts, async () => {
  assert.equal((await ranking("aluA", `?aulaId=${AULA_B}`)).status, 404);
  assert.deepEqual((await ranking("aluA", `?aulaId=${AULA_A}`)).ids, [ALU_A, ALU_A2].sort());
});

test("PG: el personal de la escuela ve el ranking de sus aulas aunque no sea miembro", opts, async () => {
  assert.deepEqual((await ranking("docB", `?aulaId=${AULA_B}`)).ids, [ALU_B]);
  assert.equal((await ranking("docB", `?aulaId=${AULA_A}`)).status, 404);
});
