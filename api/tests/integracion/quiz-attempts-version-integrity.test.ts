/**
 * V2-03 — submit de quiz-attempt se corrige contra la versión con la que se
 * inició el intento, no contra la versión actual del quiz.
 *
 * Verifica:
 *  - Intento creado contra versión A → docente publica versión B (cambia
 *    currentVersionId) → submit con respuestas correctas según A → score
 *    completo (no se evalúa contra B).
 *  - Intento cuya versión ya no existe (borrada) → 409 con mensaje claro, sin
 *    degradar silenciosamente a currentVersionId.
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
const QV_A = "qv-a";
const QV_B = "qv-b";

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
    titulo: "Modulo 1",
    descripcion: "",
    visibility: "privado",
    schoolId: ESCUELA_ID,
    ownerUserId: DOCENTE_ID,
    teoriaId: null,
    tuesdayDocId: null,
    libroId: null,
    defaultQuestionCount: 2,
    dependencies: null,
    isDeleted: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
  prisma.quiz.rows.push({
    id: QUIZ_ID,
    moduleId: MOD_ID,
    title: "Quiz V2-03",
    currentVersionId: QV_A,
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
  // Version A: respuestas correctas = "A" y "X".
  prisma.quizVersion.rows.push({
    id: QV_A,
    quizId: QUIZ_ID,
    versionNumber: 1,
    questions: [
      { id: "q1", prompt: "P1", answerKey: "A", points: 1 },
      { id: "q2", prompt: "P2", answerKey: "X", points: 1 },
    ],
    generatorId: null,
    generatorVersion: null,
    params: null,
    count: 2,
    seedPolicy: 0,
    fixedSeed: null,
    settings: { type: "practica", mode: "manual", visibility: "publico" },
    createdAt: new Date().toISOString(),
    createdBy: DOCENTE_ID,
  });
  // Version B: respuestas correctas = "B" y "Y" (diferentes a A).
  prisma.quizVersion.rows.push({
    id: QV_B,
    quizId: QUIZ_ID,
    versionNumber: 2,
    questions: [
      { id: "q1", prompt: "P1", answerKey: "B", points: 1 },
      { id: "q2", prompt: "P2", answerKey: "Y", points: 1 },
    ],
    generatorId: null,
    generatorVersion: null,
    params: null,
    count: 2,
    seedPolicy: 0,
    fixedSeed: null,
    settings: { type: "practica", mode: "manual", visibility: "publico" },
    createdAt: new Date().toISOString(),
    createdBy: DOCENTE_ID,
  });
});

test("submit usa la version del intento, no currentVersionId del quiz", async () => {
  // 1. Alumno inicia intento contra version A.
  const token = tokenFor({ id: ALUMNO_ID, role: "STUDENT", schoolId: ESCUELA_ID });
  const createRes = await jsonRequest(baseUrl, "POST", "/api/quiz-attempts", {
    token,
    body: { quizId: QUIZ_ID, moduleId: MOD_ID },
  });
  assert.equal(createRes.status, 201);
  const { id: attemptId } = createRes.body as { id: string };
  const created = prisma.quizAttempt.rows.find((a) => a.id === attemptId);
  assert.ok(created);
  assert.equal(created.quizVersionId, QV_A, "el intento debe arrancar contra QV_A");

  // 2. Docente publica version B: cambia currentVersionId.
  prisma.quiz.rows[0].currentVersionId = QV_B;

  // 3. Alumno envia respuestas correctas segun A.
  const submitRes = await jsonRequest(baseUrl, "POST", `/api/quiz-attempts/${attemptId}/submit`, {
    token,
    body: { answers: { q1: "A", q2: "X" } },
  });
  assert.equal(submitRes.status, 200, JSON.stringify(submitRes.body));
  const body = submitRes.body as { score: number; maxScore: number; status: string };
  assert.equal(body.maxScore, 2);
  assert.equal(body.score, 2, "score completo segun la version A, no la B");
  assert.equal(body.status, "submitted");
});

test("submit devuelve 409 cuando la version del intento ya no existe", async () => {
  // 1. Crear intento contra QV_A, persistir en store.
  prisma.quizAttempt.rows.push({
    id: "att-1",
    quizId: QUIZ_ID,
    quizVersionId: QV_A,
    userId: ALUMNO_ID,
    moduleId: MOD_ID,
    status: "in_progress",
    startedAt: new Date().toISOString(),
    submittedAt: null,
    score: 0,
    maxScore: 2,
    answers: JSON.stringify({}),
    feedback: JSON.stringify({}),
    seed: null,
    seedPolicy: 0,
  });

  // 2. Borrar la version A (simula que el docente la elimino).
  prisma.quizVersion.rows = prisma.quizVersion.rows.filter((v) => v.id !== QV_A);

  // 3. Submit debe responder 409, nunca degradar a la version B (currentVersionId).
  const token = tokenFor({ id: ALUMNO_ID, role: "STUDENT", schoolId: ESCUELA_ID });
  const res = await jsonRequest(baseUrl, "POST", "/api/quiz-attempts/att-1/submit", {
    token,
    body: { answers: { q1: "A", q2: "X" } },
  });
  assert.equal(res.status, 409);
  const body = res.body as { error: string };
  assert.match(body.error, /versi[oó]n.*(ya no|disponible|no existe)/i);
});
