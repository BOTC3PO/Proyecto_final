/**
 * F5-03 — Eventos informativos del intento (PATCH de flags en `grading`).
 *
 * Verifica el endpoint `PATCH /api/quiz-attempts/:id` que el runner del
 * alumno usa para registrar el contador de salidas de pestaña:
 *  - Ownership: sólo el alumno dueño puede PATCHear su propio intento.
 *  - Status terminal: un intento entregado/corregido rechaza PATCH (409).
 *  - Merge monotónico: el counter nunca decrementa aunque los PATCHes
 *    lleguen fuera de orden.
 *  - Preserva flags previos: el canario de V2-04 no se toca.
 *  - No penaliza: score, status, maxScore, answers NO se modifican.
 *  - Sanitización: rechaza payloads vacíos y valores negativos.
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
const QUIZ_ID = "quiz-evt";
const QV_ID = "qv-evt";

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
    titulo: "Modulo Evt",
    descripcion: "",
    visibility: "privado",
    schoolId: ESCUELA_ID,
    ownerUserId: DOCENTE_ID,
    teoriaId: null,
    tuesdayDocId: null,
    libroId: null,
    defaultQuestionCount: 1,
    dependencies: null,
    isDeleted: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
  prisma.quiz.rows.push({
    id: QUIZ_ID,
    moduleId: MOD_ID,
    title: "Quiz Evt",
    currentVersionId: QV_ID,
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
  prisma.quizVersion.rows.push({
    id: QV_ID,
    quizId: QUIZ_ID,
    versionNumber: 1,
    questions: [{ id: "q0", prompt: "P0", answerKey: "c0", points: 1 }],
    generatorId: null,
    generatorVersion: null,
    params: null,
    count: 1,
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

function storedGrading(attemptId: string): Record<string, unknown> {
  const row = prisma.quizAttempt.rows.find((a) => a.id === attemptId);
  assert.ok(row, "attempt row");
  if (!row.grading) return {};
  return JSON.parse(row.grading as unknown as string);
}

test("PATCH tabSwitchCount=3 → persiste en grading.events", async () => {
  const token = alumnoToken();
  const attemptId = await createAttempt(token);

  const res = await jsonRequest(baseUrl, "PATCH", `/api/quiz-attempts/${attemptId}`, {
    token,
    body: { tabSwitchCount: 3 },
  });
  assert.equal(res.status, 200, JSON.stringify(res.body));
  assert.deepEqual(res.body, {
    ok: true,
    events: { tabSwitchCount: 3, canaryTriggered: false }
  });
  const grading = storedGrading(attemptId);
  assert.deepEqual(grading.events, { tabSwitchCount: 3 });
});

test("PATCH monotónico: 5 luego 3 → queda 5 (no decrementa)", async () => {
  const token = alumnoToken();
  const attemptId = await createAttempt(token);

  await jsonRequest(baseUrl, "PATCH", `/api/quiz-attempts/${attemptId}`, {
    token,
    body: { tabSwitchCount: 5 },
  });
  // PATCH llega tarde / fuera de orden con un valor menor.
  const res = await jsonRequest(baseUrl, "PATCH", `/api/quiz-attempts/${attemptId}`, {
    token,
    body: { tabSwitchCount: 3 },
  });
  assert.equal(res.status, 200);
  const grading = storedGrading(attemptId);
  assert.deepEqual(grading.events, { tabSwitchCount: 5 });
});

test("PATCH monotónico: 5 luego 8 → queda 8", async () => {
  const token = alumnoToken();
  const attemptId = await createAttempt(token);

  await jsonRequest(baseUrl, "PATCH", `/api/quiz-attempts/${attemptId}`, {
    token,
    body: { tabSwitchCount: 5 },
  });
  await jsonRequest(baseUrl, "PATCH", `/api/quiz-attempts/${attemptId}`, {
    token,
    body: { tabSwitchCount: 8 },
  });
  const grading = storedGrading(attemptId);
  assert.deepEqual(grading.events, { tabSwitchCount: 8 });
});

test("PATCH preserva canaryTriggered y items del grading previo", async () => {
  const token = alumnoToken();
  const attemptId = await createAttempt(token);

  // Simulamos un grading previo con canario (V2-04) y un ítem manual.
  prisma.quizAttempt.rows.find((a) => a.id === attemptId)!.grading = JSON.stringify({
    autoScore: 2,
    items: { q0: { points: 2, score: 2 } },
    canaryTriggered: true,
    canaryQuestions: ["q0"]
  });

  const res = await jsonRequest(baseUrl, "PATCH", `/api/quiz-attempts/${attemptId}`, {
    token,
    body: { tabSwitchCount: 2 },
  });
  assert.equal(res.status, 200, JSON.stringify(res.body));
  assert.deepEqual(res.body, {
    ok: true,
    events: { tabSwitchCount: 2, canaryTriggered: true }
  });
  const grading = storedGrading(attemptId);
  assert.strictEqual(grading.canaryTriggered, true);
  assert.deepEqual(grading.canaryQuestions, ["q0"]);
  assert.deepEqual(grading.items, { q0: { points: 2, score: 2 } });
  assert.deepEqual(grading.events, { tabSwitchCount: 2 });
});

test("PATCH no modifica score, maxScore, status ni answers del intento", async () => {
  const token = alumnoToken();
  const attemptId = await createAttempt(token);
  const before = prisma.quizAttempt.rows.find((a) => a.id === attemptId);
  const scoreBefore = before!.score;
  const statusBefore = before!.status;
  const answersBefore = before!.answers;

  await jsonRequest(baseUrl, "PATCH", `/api/quiz-attempts/${attemptId}`, {
    token,
    body: { tabSwitchCount: 4 },
  });
  const after = prisma.quizAttempt.rows.find((a) => a.id === attemptId);
  assert.strictEqual(after!.score, scoreBefore, "score no se toca");
  assert.strictEqual(after!.status, statusBefore, "status no se toca");
  assert.strictEqual(after!.answers, answersBefore, "answers no se toca");
  assert.strictEqual(after!.maxScore, before!.maxScore, "maxScore no se toca");
});

test("PATCH de un intento ajeno: 404", async () => {
  const token = alumnoToken();
  const attemptId = await createAttempt(token);
  const otro = tokenFor({ id: "otro-alumno", role: "STUDENT", schoolId: ESCUELA_ID });
  seedUser({ id: "otro-alumno", role: "STUDENT", schoolId: ESCUELA_ID });

  const res = await jsonRequest(baseUrl, "PATCH", `/api/quiz-attempts/${attemptId}`, {
    token: otro,
    body: { tabSwitchCount: 2 },
  });
  assert.equal(res.status, 404, JSON.stringify(res.body));
});

test("PATCH de un intento entregado: 409 (no se puede modificar)", async () => {
  const token = alumnoToken();
  const attemptId = await createAttempt(token);

  // Lo entregamos.
  const submit = await jsonRequest(baseUrl, "POST", `/api/quiz-attempts/${attemptId}/submit`, {
    token,
    body: { answers: { q0: "c0" }, presentedIds: ["q0"] },
  });
  assert.equal(submit.status, 200, JSON.stringify(submit.body));

  // Ahora PATCH debe ser rechazado.
  const res = await jsonRequest(baseUrl, "PATCH", `/api/quiz-attempts/${attemptId}`, {
    token,
    body: { tabSwitchCount: 2 },
  });
  assert.equal(res.status, 409, JSON.stringify(res.body));
});

test("PATCH sin body / body vacío: 400 (Zod refine)", async () => {
  const token = alumnoToken();
  const attemptId = await createAttempt(token);

  const r1 = await jsonRequest(baseUrl, "PATCH", `/api/quiz-attempts/${attemptId}`, {
    token,
    body: {},
  });
  assert.equal(r1.status, 400, JSON.stringify(r1.body));

  const r2 = await jsonRequest(baseUrl, "PATCH", `/api/quiz-attempts/${attemptId}`, {
    token,
    body: { tabSwitchCount: -1 },
  });
  assert.equal(r2.status, 400, JSON.stringify(r2.body));
});
