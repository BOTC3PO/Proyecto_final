/**
 * F5-01 — Entrega incremental + idempotencia.
 *
 * Verifica el endpoint de respuesta parcial `POST /api/quiz-attempts/:id/answer`
 * y la fusión en `/submit`:
 *  - Una respuesta enviada individualmente persiste en el intento.
 *  - Idempotencia por (intento, questionId): reenviar la misma clave NO duplica,
 *    sólo actualiza (modela el reintento de la cola offline).
 *  - `/submit` fusiona las respuestas parciales ya guardadas con el payload final,
 *    así un corte de red a mitad del quiz no pierde respuestas previas.
 *  - Un intento ya entregado rechaza respuestas parciales (409, error terminal).
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

const DOCENTE_ID = "docente-1";
const ALUMNO_ID = "alumno-1";
const ESCUELA_ID = "escuela-1";
const MOD_ID = "mod-1";
const QUIZ_ID = "quiz-inc";
const QV_ID = "qv-inc";
const TOTAL = 3;

before(async () => {
  const { quizAttempts } = await import("../../src/routes/quiz-attempts");
  const server = await startServer([quizAttempts]);
  baseUrl = server.baseUrl;
  close = server.close;
});

after(async () => {
  if (close) await close();
});

beforeEach(() => {
  resetPrisma();
  seedUser({ id: DOCENTE_ID, role: "TEACHER", schoolId: ESCUELA_ID });
  seedUser({ id: ALUMNO_ID, role: "STUDENT", schoolId: ESCUELA_ID });
  prisma.modulo.rows.push({
    id: MOD_ID,
    slug: `mod-${Date.now()}`,
    titulo: "Modulo Inc",
    descripcion: "",
    visibility: "privado",
    schoolId: ESCUELA_ID,
    ownerUserId: DOCENTE_ID,
    teoriaId: null,
    tuesdayDocId: null,
    libroId: null,
    defaultQuestionCount: TOTAL,
    dependencies: null,
    isDeleted: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
  prisma.quiz.rows.push({
    id: QUIZ_ID,
    moduleId: MOD_ID,
    title: "Quiz Inc",
    currentVersionId: QV_ID,
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
  // 3 preguntas almacenadas, answerKey c0..c2, peso 1, SIN composición (todas se presentan).
  prisma.quizVersion.rows.push({
    id: QV_ID,
    quizId: QUIZ_ID,
    versionNumber: 1,
    questions: Array.from({ length: TOTAL }, (_, i) => ({
      id: `q${i}`,
      prompt: `P${i}`,
      answerKey: `c${i}`,
      points: 1,
    })),
    generatorId: null,
    generatorVersion: null,
    params: null,
    count: TOTAL,
    seedPolicy: 0,
    fixedSeed: null,
    settings: null,
    createdAt: new Date().toISOString(),
    createdBy: DOCENTE_ID,
  });
});

function alumnoToken(): string {
  return tokenFor({ id: ALUMNO_ID, role: "STUDENT", schoolId: ESCUELA_ID });
}

async function createAttempt(token: string): Promise<string> {
  const res = await jsonRequest(baseUrl, "POST", "/api/quiz-attempts", {
    token,
    body: { quizId: QUIZ_ID, moduleId: MOD_ID },
  });
  assert.equal(res.status, 201, JSON.stringify(res.body));
  return (res.body as { id: string }).id;
}

function storedAnswers(attemptId: string): Record<string, unknown> {
  const row = prisma.quizAttempt.rows.find((a) => a.id === attemptId);
  assert.ok(row, "attempt row");
  return JSON.parse(row.answers as unknown as string);
}

test("respuesta enviada individualmente persiste en el intento", async () => {
  const token = alumnoToken();
  const attemptId = await createAttempt(token);

  const res = await jsonRequest(baseUrl, "POST", `/api/quiz-attempts/${attemptId}/answer`, {
    token,
    body: { questionId: "q0", response: "c0" },
  });
  assert.equal(res.status, 200, JSON.stringify(res.body));
  assert.deepEqual(res.body, { ok: true, questionId: "q0", answeredCount: 1 });
  assert.deepEqual(storedAnswers(attemptId), { q0: "c0" });
});

test("idempotencia: mismo (intento, questionId) dos veces → una sola respuesta", async () => {
  const token = alumnoToken();
  const attemptId = await createAttempt(token);

  await jsonRequest(baseUrl, "POST", `/api/quiz-attempts/${attemptId}/answer`, {
    token,
    body: { questionId: "q0", response: "c0" },
  });
  // Reintento de la cola con la MISMA clave (mismo questionId): no duplica.
  const segundo = await jsonRequest(baseUrl, "POST", `/api/quiz-attempts/${attemptId}/answer`, {
    token,
    body: { questionId: "q0", response: "c0" },
  });
  assert.equal(segundo.status, 200);
  assert.equal((segundo.body as { answeredCount: number }).answeredCount, 1);
  assert.deepEqual(storedAnswers(attemptId), { q0: "c0" });
});

test("reenvío con misma clave y distinto valor ACTUALIZA (no duplica)", async () => {
  const token = alumnoToken();
  const attemptId = await createAttempt(token);

  await jsonRequest(baseUrl, "POST", `/api/quiz-attempts/${attemptId}/answer`, {
    token,
    body: { questionId: "q0", response: "viejo" },
  });
  await jsonRequest(baseUrl, "POST", `/api/quiz-attempts/${attemptId}/answer`, {
    token,
    body: { questionId: "q0", response: "c0" },
  });
  assert.deepEqual(storedAnswers(attemptId), { q0: "c0" });
});

test("submit fusiona parciales ya guardadas con el payload final (no se pierden)", async () => {
  const token = alumnoToken();
  const attemptId = await createAttempt(token);

  // El alumno respondió q0 y q1 incrementalmente (se enviaron individualmente).
  await jsonRequest(baseUrl, "POST", `/api/quiz-attempts/${attemptId}/answer`, {
    token,
    body: { questionId: "q0", response: "c0" },
  });
  await jsonRequest(baseUrl, "POST", `/api/quiz-attempts/${attemptId}/answer`, {
    token,
    body: { questionId: "q1", response: "c1" },
  });

  // El payload de /submit SÓLO trae q2 (p. ej. el resto se perdió en el cliente).
  // El server fusiona con lo guardado → corrige las 3.
  const res = await jsonRequest(baseUrl, "POST", `/api/quiz-attempts/${attemptId}/submit`, {
    token,
    body: { answers: { q2: "c2" }, presentedIds: ["q0", "q1", "q2"] },
  });
  assert.equal(res.status, 200, JSON.stringify(res.body));
  const body = res.body as { score: number; maxScore: number };
  assert.equal(body.maxScore, TOTAL);
  assert.equal(body.score, TOTAL, "las 3 respuestas (2 incrementales + 1 del payload) puntúan");
});

test("submit: el payload pisa la parcial guardada ante conflicto", async () => {
  const token = alumnoToken();
  const attemptId = await createAttempt(token);

  // Guardó q0 mal incrementalmente; en el submit lo corrige con la respuesta buena.
  await jsonRequest(baseUrl, "POST", `/api/quiz-attempts/${attemptId}/answer`, {
    token,
    body: { questionId: "q0", response: "mal" },
  });
  const res = await jsonRequest(baseUrl, "POST", `/api/quiz-attempts/${attemptId}/submit`, {
    token,
    body: { answers: { q0: "c0", q1: "c1", q2: "c2" }, presentedIds: ["q0", "q1", "q2"] },
  });
  assert.equal(res.status, 200, JSON.stringify(res.body));
  assert.equal((res.body as { score: number }).score, TOTAL);
});

test("un intento ya entregado rechaza respuestas parciales (409)", async () => {
  const token = alumnoToken();
  const attemptId = await createAttempt(token);

  await jsonRequest(baseUrl, "POST", `/api/quiz-attempts/${attemptId}/submit`, {
    token,
    body: { answers: { q0: "c0", q1: "c1", q2: "c2" }, presentedIds: ["q0", "q1", "q2"] },
  });
  const res = await jsonRequest(baseUrl, "POST", `/api/quiz-attempts/${attemptId}/answer`, {
    token,
    body: { questionId: "q0", response: "c0" },
  });
  assert.equal(res.status, 409, JSON.stringify(res.body));
});

test("no se puede guardar respuesta en un intento ajeno (404)", async () => {
  const token = alumnoToken();
  const attemptId = await createAttempt(token);
  const otro = tokenFor({ id: "otro-alumno", role: "STUDENT", schoolId: ESCUELA_ID });
  seedUser({ id: "otro-alumno", role: "STUDENT", schoolId: ESCUELA_ID });

  const res = await jsonRequest(baseUrl, "POST", `/api/quiz-attempts/${attemptId}/answer`, {
    token: otro,
    body: { questionId: "q0", response: "c0" },
  });
  assert.equal(res.status, 404, JSON.stringify(res.body));
});
