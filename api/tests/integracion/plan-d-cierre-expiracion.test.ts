/**
 * PLAN-D §1 (Fase 3/6) — Cierre lazy por expiración de un intento con timer.
 *
 * Verifica:
 *  - GET /:id materializa (auto-submit) un intento in_progress vencido según
 *    `politicaExpiracion` ("auto" cierra apenas pasa el margen de red;
 *    "gracia60" da 60s extra).
 *  - POST /:id/answer sobre un intento vencido lo cierra y rechaza la
 *    respuesta con 409 (mismo código que "ya entregado").
 *  - POST /:id/submit sobre un intento ya cerrado (por el auto-cierre) es
 *    idempotente: no re-corrige, devuelve un snapshot ("doble envío").
 *  - La vista del docente (`/staff`) ve el intento cerrado, no in_progress.
 *  - Un quiz generadorV2 (no materializable server-side) NO se auto-cierra:
 *    queda in_progress (comportamiento previo a PLAN-D, sin regresión).
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
const QUIZ_ID = "quiz-1";
const QV_ID = "qv-1";

function seedBase() {
  prisma.modulo.rows.push({
    id: MOD_ID,
    slug: "mod-1",
    titulo: "Modulo 1",
    descripcion: "",
    visibility: "privado",
    schoolId: ESCUELA_ID,
    ownerUserId: DOCENTE_ID,
    dependencies: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
  prisma.quiz.rows.push({
    id: QUIZ_ID,
    moduleId: MOD_ID,
    title: "Quiz 1",
    currentVersionId: QV_ID,
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
}

function seedVersionConTimer(politicaExpiracion?: "auto" | "gracia60", extra: Record<string, unknown> = {}) {
  prisma.quizVersion.rows.push({
    id: QV_ID,
    quizId: QUIZ_ID,
    versionNumber: 1,
    questions: JSON.stringify([
      { id: "q1", answerKey: "1", points: 1 }
    ]),
    generatorId: null,
    generatorVersion: "1",
    params: null,
    count: 1,
    seedPolicy: 0,
    fixedSeed: null,
    settings: JSON.stringify({
      type: "formal",
      timerSegundos: 60,
      ...(politicaExpiracion ? { politicaExpiracion } : {}),
      ...extra,
    }),
    createdAt: new Date().toISOString(),
    createdBy: DOCENTE_ID,
  });
}

async function crearIntento(token: string): Promise<string> {
  const res = await jsonRequest(baseUrl, "POST", "/api/quiz-attempts", {
    token,
    body: { quizId: QUIZ_ID, moduleId: MOD_ID },
  });
  assert.equal(res.status, 201, JSON.stringify(res.body));
  return (res.body as { id: string }).id;
}

/** Retrocede `startedAt` del intento para simular que pasó `segundos`. */
function backdateAttempt(attemptId: string, segundos: number) {
  const row = prisma.quizAttempt.rows.find((a) => a.id === attemptId);
  assert.ok(row, "attempt debe existir");
  row!.startedAt = new Date(Date.now() - segundos * 1000).toISOString();
}

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
  seedBase();
});

test("GET /:id auto-cierra (politica auto) un intento vencido más allá del margen de red", async () => {
  seedVersionConTimer("auto");
  const token = tokenFor({ id: ALUMNO_ID, role: "STUDENT", schoolId: ESCUELA_ID });
  const attemptId = await crearIntento(token);

  // timer=60s, margen de red=30s → vencido recién pasados 91s.
  backdateAttempt(attemptId, 91);

  const res = await jsonRequest(baseUrl, "GET", `/api/quiz-attempts/${attemptId}`, { token });
  assert.equal(res.status, 200);
  const body = res.body as { status: string; score: number; maxScore: number };
  assert.notEqual(body.status, "in_progress", "el GET debe reflejar el cierre, no un in_progress fantasma");
  assert.equal(body.status, "submitted");
  assert.equal(body.maxScore, 1);
  assert.equal(body.score, 0, "sin respuestas guardadas, se corrige con lo que hay (nada)");
});

test("GET /:id NO cierra un intento que todavía no llegó al margen de red", async () => {
  seedVersionConTimer("auto");
  const token = tokenFor({ id: ALUMNO_ID, role: "STUDENT", schoolId: ESCUELA_ID });
  const attemptId = await crearIntento(token);

  backdateAttempt(attemptId, 89); // 60 + 29s < 60 + 30 margen

  const res = await jsonRequest(baseUrl, "GET", `/api/quiz-attempts/${attemptId}`, { token });
  assert.equal(res.status, 200);
  assert.equal((res.body as { status: string }).status, "in_progress");
});

test("GET /:id respeta `gracia60`: no cierra a los 91s, sí pasados 152s", async () => {
  seedVersionConTimer("gracia60");
  const token = tokenFor({ id: ALUMNO_ID, role: "STUDENT", schoolId: ESCUELA_ID });
  const attemptId = await crearIntento(token);

  backdateAttempt(attemptId, 91);
  const res1 = await jsonRequest(baseUrl, "GET", `/api/quiz-attempts/${attemptId}`, { token });
  assert.equal((res1.body as { status: string }).status, "in_progress", "gracia60 todavía no vence a los 91s");

  backdateAttempt(attemptId, 152); // 60 + 60 gracia + 30 margen + 2
  const res2 = await jsonRequest(baseUrl, "GET", `/api/quiz-attempts/${attemptId}`, { token });
  assert.notEqual((res2.body as { status: string }).status, "in_progress");
});

test("respuestas parciales guardadas (F5-01) se usan en el auto-cierre", async () => {
  seedVersionConTimer("auto");
  const token = tokenFor({ id: ALUMNO_ID, role: "STUDENT", schoolId: ESCUELA_ID });
  const attemptId = await crearIntento(token);

  await jsonRequest(baseUrl, "POST", `/api/quiz-attempts/${attemptId}/answer`, {
    token,
    body: { questionId: "q1", response: "1" },
  });

  backdateAttempt(attemptId, 91);
  const res = await jsonRequest(baseUrl, "GET", `/api/quiz-attempts/${attemptId}`, { token });
  const body = res.body as { score: number; maxScore: number };
  assert.equal(body.score, 1, "la respuesta guardada incrementalmente cuenta en el cierre automático");
  assert.equal(body.maxScore, 1);
});

test("POST /:id/answer sobre un intento vencido lo cierra y devuelve 409", async () => {
  seedVersionConTimer("auto");
  const token = tokenFor({ id: ALUMNO_ID, role: "STUDENT", schoolId: ESCUELA_ID });
  const attemptId = await crearIntento(token);

  backdateAttempt(attemptId, 91);
  const res = await jsonRequest(baseUrl, "POST", `/api/quiz-attempts/${attemptId}/answer`, {
    token,
    body: { questionId: "q1", response: "1" },
  });
  assert.equal(res.status, 409);

  const stored = prisma.quizAttempt.rows.find((a) => a.id === attemptId);
  assert.notEqual(stored?.status, "in_progress", "el intento debe quedar cerrado tras el intento de respuesta");
});

test("POST /:id/submit sobre un intento ya auto-cerrado es idempotente (doble envío)", async () => {
  seedVersionConTimer("auto");
  const token = tokenFor({ id: ALUMNO_ID, role: "STUDENT", schoolId: ESCUELA_ID });
  const attemptId = await crearIntento(token);

  backdateAttempt(attemptId, 91);
  // Dispara el cierre lazy vía GET.
  await jsonRequest(baseUrl, "GET", `/api/quiz-attempts/${attemptId}`, { token });
  const closed = prisma.quizAttempt.rows.find((a) => a.id === attemptId);
  assert.equal(closed?.status, "submitted");
  const scoreTrasElCierre = closed?.score;

  // El alumno, sin saber que ya se cerró, presiona "Enviar" en el front.
  const res = await jsonRequest(baseUrl, "POST", `/api/quiz-attempts/${attemptId}/submit`, {
    token,
    body: { answers: { q1: "1" } },
  });
  assert.equal(res.status, 200);
  const body = res.body as { alreadySubmitted?: boolean; status: string; score: number };
  assert.equal(body.alreadySubmitted, true);
  assert.equal(body.status, "submitted");

  // No se re-corrigió: el score post-cierre no cambia aunque el payload del
  // "doble envío" traiga la respuesta correcta.
  const afterDoubleSubmit = prisma.quizAttempt.rows.find((a) => a.id === attemptId);
  assert.equal(afterDoubleSubmit?.score, scoreTrasElCierre);
});

test("vista docente (/staff) ve el intento auto-cerrado, no in_progress", async () => {
  seedVersionConTimer("auto");
  const token = tokenFor({ id: ALUMNO_ID, role: "STUDENT", schoolId: ESCUELA_ID });
  const docenteToken = tokenFor({ id: DOCENTE_ID, role: "TEACHER", schoolId: ESCUELA_ID });
  const attemptId = await crearIntento(token);

  backdateAttempt(attemptId, 91);
  await jsonRequest(baseUrl, "GET", `/api/quiz-attempts/${attemptId}`, { token });

  const staffRes = await jsonRequest(baseUrl, "GET", `/api/quiz-attempts/${attemptId}/staff`, {
    token: docenteToken,
  });
  assert.equal(staffRes.status, 200);
  assert.notEqual((staffRes.body as { status: string }).status, "in_progress");
});

test("un quiz generadorV2 (no materializable server-side) NO se auto-cierra", async () => {
  // Sin `questions` persistidas y `generatorId` que NO empieza con "plantilla:"
  // → isGeneradorV2 (necesita el payload del alumno para conocer la clave de
  // respuesta). El cierre lazy debe abstenerse: el intento queda in_progress
  // hasta que el alumno haga un submit explícito con `generatedQuestions`.
  prisma.quizVersion.rows.push({
    id: QV_ID,
    quizId: QUIZ_ID,
    versionNumber: 1,
    questions: null,
    generatorId: "algun-generador-v2",
    generatorVersion: "1",
    params: null,
    count: 1,
    seedPolicy: 0,
    fixedSeed: null,
    settings: JSON.stringify({ type: "formal", timerSegundos: 60 }),
    createdAt: new Date().toISOString(),
    createdBy: DOCENTE_ID,
  });
  const token = tokenFor({ id: ALUMNO_ID, role: "STUDENT", schoolId: ESCUELA_ID });
  const attemptId = await crearIntento(token);

  backdateAttempt(attemptId, 91);
  const res = await jsonRequest(baseUrl, "GET", `/api/quiz-attempts/${attemptId}`, { token });
  assert.equal(res.status, 200);
  assert.equal((res.body as { status: string }).status, "in_progress");
});
