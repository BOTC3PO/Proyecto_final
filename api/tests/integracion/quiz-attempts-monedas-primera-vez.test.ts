/**
 * Monedas al completar un cuestionario POR PRIMERA VEZ (mismo alumno +
 * mismo quiz). Ver `acreditarPorPrimerCuestionario` en economia-alta.ts —
 * mismo patrón que `acreditarSaldoInicial` (ledger primero, saldo después,
 * idempotente por `tipo` + `referenciaId`).
 *
 * Cubre:
 *  (a) Primer submit de un quiz → acredita monedas (ledger + saldo).
 *  (b) Reintentar el MISMO quiz (nuevo intento, mismo alumno) → NO vuelve
 *      a acreditar (ya no es "primera vez").
 *  (c) Un quiz DISTINTO del mismo alumno → sí acredita (primera vez para
 *      ESE quiz).
 *  (d) Un quiz con una pregunta manual (queda pending_review) → NO
 *      acredita en el submit inmediato (ponytail: caso no cubierto,
 *      documentado en el código).
 */
import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import {
  prisma,
  resetPrisma,
  seedUser,
  tokenFor,
  startServer,
  jsonRequest,
} from "./_helpers/setup";

let baseUrl: string;
let close: () => Promise<void>;

const DOCENTE_ID = "docente-monedas";
const ALUMNO_ID = "alumno-monedas";
const ESCUELA_ID = "escuela-monedas";
const MOD_ID = "mod-monedas";

before(async () => {
  const { quizAttempts } = await import("../../src/routes/quiz-attempts");
  const server = await startServer([quizAttempts]);
  baseUrl = server.baseUrl;
  close = server.close;
});

after(async () => {
  if (close) await close();
});

function seedQuiz(quizId: string, questions: unknown[]) {
  prisma.modulo.rows.push({
    id: MOD_ID,
    slug: `mod-monedas-${Date.now()}-${Math.random()}`,
    titulo: "Modulo monedas",
    descripcion: "",
    visibility: "publico",
    schoolId: ESCUELA_ID,
    ownerUserId: DOCENTE_ID,
    dependencies: null,
    isDeleted: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
  prisma.quiz.rows.push({
    id: quizId,
    moduleId: MOD_ID,
    title: `Quiz ${quizId}`,
    currentVersionId: `qv-${quizId}`,
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
  prisma.quizVersion.rows.push({
    id: `qv-${quizId}`,
    quizId,
    versionNumber: 1,
    questions: JSON.stringify(questions),
    generatorId: null,
    generatorVersion: "1",
    params: null,
    count: questions.length,
    seedPolicy: 0,
    fixedSeed: null,
    settings: JSON.stringify({ type: "practica", mode: "manual", visibility: "publico" }),
    createdAt: new Date().toISOString(),
    createdBy: DOCENTE_ID,
  });
}

const PREGUNTA_INPUT = {
  id: "q1",
  prompt: "2 + 2",
  questionType: "input",
  answerKey: "4",
  points: 1,
};

const PREGUNTA_ABIERTA = {
  id: "q1",
  prompt: "Explicá con tus palabras",
  questionType: "abierta",
  manualGrading: true,
  points: 1,
};

beforeEach(() => {
  resetPrisma();
  seedUser({ id: DOCENTE_ID, role: "TEACHER", schoolId: ESCUELA_ID });
  seedUser({ id: ALUMNO_ID, role: "USER", schoolId: ESCUELA_ID });
});

const alumno = () => tokenFor({ id: ALUMNO_ID, role: "USER", schoolId: ESCUELA_ID });

async function crearYEnviar(quizId: string, answers: Record<string, unknown>) {
  const createRes = await jsonRequest(baseUrl, "POST", "/api/quiz-attempts", {
    token: alumno(),
    body: { quizId },
  });
  assert.equal(createRes.status, 201, JSON.stringify(createRes.body));
  const attemptId = (createRes.body as { id: string }).id;
  const submitRes = await jsonRequest(
    baseUrl,
    "POST",
    `/api/quiz-attempts/${attemptId}/submit`,
    { token: alumno(), body: { answers } },
  );
  assert.equal(submitRes.status, 200, JSON.stringify(submitRes.body));
  return { attemptId, body: submitRes.body };
}

function saldoDe(usuarioId: string): number {
  const row = prisma.economiaSaldo.rows.find(
    (s: { usuarioId: string }) => s.usuarioId === usuarioId,
  ) as { saldo?: number } | undefined;
  return row?.saldo ?? 0;
}

function transaccionesQuizPrimeraVez(usuarioId: string) {
  return prisma.economiaTransaccion.rows.filter(
    (t: { usuarioId: string; tipo: string }) =>
      t.usuarioId === usuarioId && t.tipo === "quiz_primera_vez",
  );
}

test("(a) primer submit de un quiz acredita monedas (ledger + saldo)", async () => {
  seedQuiz("quiz-a", [PREGUNTA_INPUT]);
  await crearYEnviar("quiz-a", { q1: "4" });

  const txs = transaccionesQuizPrimeraVez(ALUMNO_ID);
  assert.equal(txs.length, 1);
  assert.equal(txs[0].referenciaId, "quiz-a");
  assert.ok(txs[0].monto > 0);
  assert.equal(saldoDe(ALUMNO_ID), txs[0].monto);
});

test("(b) un segundo intento del MISMO quiz no vuelve a acreditar", async () => {
  seedQuiz("quiz-b", [PREGUNTA_INPUT]);
  await crearYEnviar("quiz-b", { q1: "4" });
  const saldoTrasPrimero = saldoDe(ALUMNO_ID);

  await crearYEnviar("quiz-b", { q1: "4" });

  assert.equal(transaccionesQuizPrimeraVez(ALUMNO_ID).length, 1);
  assert.equal(saldoDe(ALUMNO_ID), saldoTrasPrimero);
});

test("(c) un quiz DISTINTO del mismo alumno sí acredita de nuevo", async () => {
  seedQuiz("quiz-c1", [PREGUNTA_INPUT]);
  await crearYEnviar("quiz-c1", { q1: "4" });
  const saldoTrasPrimero = saldoDe(ALUMNO_ID);

  seedQuiz("quiz-c2", [PREGUNTA_INPUT]);
  await crearYEnviar("quiz-c2", { q1: "4" });

  const txs = transaccionesQuizPrimeraVez(ALUMNO_ID);
  assert.equal(txs.length, 2);
  assert.ok(saldoDe(ALUMNO_ID) > saldoTrasPrimero);
});

test("(d) un quiz con pregunta manual (pending_review) no acredita en el submit inmediato", async () => {
  seedQuiz("quiz-d", [PREGUNTA_ABIERTA]);
  const { body } = await crearYEnviar("quiz-d", { q1: "una respuesta" });
  assert.equal((body as { status: string }).status, "pending_review");

  assert.equal(transaccionesQuizPrimeraVez(ALUMNO_ID).length, 0);
  assert.equal(saldoDe(ALUMNO_ID), 0);
});
