/**
 * V2-04 — integridad: el alumno no recibe answerKey/explanation y los
 * canarios se detectan en el submit.
 *
 * Verifica:
 *  - Alumno pide GET /api/modulos/:id → ninguna pregunta trae `explanation`
 *    y todos los `answerKey` son canarios (`VB-CANARY-...`).
 *  - Docente dueño del módulo → respuestas reales intactas.
 *  - GET /api/quizzes/banco/:quizId/questions sanitiza para alumno y deja
 *    intacto para docente/staff.
 *  - GET /api/quiz-attempts/:id sanitiza para el alumno.
 *  - Submit con un canario como respuesta → flag `canaryTriggered: true` en
 *    `grading` y la pregunta cuenta como incorrecta.
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
const OTRO_DOCENTE_ID = "otro-docente";
const ESCUELA_ID = "escuela-1";
const OTRA_ESCUELA_ID = "escuela-2";
const MOD_ID = "mod-1";
const QUIZ_ID = "quiz-1";
const QV_ID = "qv-1";

before(async () => {
  const { modulos } = await import("../../src/routes/modulos");
  const { quizBanco } = await import("../../src/routes/quiz-banco");
  const { quizAttempts } = await import("../../src/routes/quiz-attempts");
  const server = await startServer([modulos, quizBanco, quizAttempts]);
  baseUrl = server.baseUrl;
  close = server.close;
});

after(async () => {
  if (close) await close();
});

beforeEach(() => {
  resetPrisma();
  seedUser({ id: DOCENTE_ID, role: "TEACHER", schoolId: ESCUELA_ID });
  seedUser({ id: OTRO_DOCENTE_ID, role: "TEACHER", schoolId: OTRA_ESCUELA_ID });
  seedUser({ id: ALUMNO_ID, role: "USER", schoolId: ESCUELA_ID });
  prisma.modulo.rows.push({
    id: MOD_ID,
    slug: `mod-${Date.now()}`,
    titulo: "Modulo V2-04",
    descripcion: "",
    visibility: "publico",
    schoolId: null,
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
    title: "Quiz V2-04",
    currentVersionId: QV_ID,
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
  prisma.quizVersion.rows.push({
    id: QV_ID,
    quizId: QUIZ_ID,
    versionNumber: 1,
    questions: [
      {
        id: "q1",
        prompt: "Pregunta 1",
        questionType: "mc",
        options: ["A", "B", "C"],
        answerKey: "A",
        explanation: "Explicacion 1",
        points: 1,
      },
      {
        id: "q2",
        prompt: "Pregunta 2",
        questionType: "mc",
        options: ["X", "Y", "Z"],
        answerKey: "X",
        explanation: "Explicacion 2",
        points: 1,
      },
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

test("alumno: GET /api/modulos/:id sanitiza preguntas (canarios, sin explanation)", async () => {
  const token = tokenFor({ id: ALUMNO_ID, role: "USER", schoolId: ESCUELA_ID });
  const res = await jsonRequest(baseUrl, "GET", `/api/modulos/${MOD_ID}`, { token });
  assert.equal(res.status, 200);
  const body = res.body as {
    quizzes: Array<{ questions: Array<Record<string, unknown>> }>;
  };
  const questions = body.quizzes[0].questions;
  assert.equal(questions.length, 2);
  for (const q of questions) {
    assert.equal("explanation" in q, false, "no debe haber explanation");
    const answerKey = q.answerKey;
    assert.equal(typeof answerKey, "string", "answerKey debe ser string canario");
    assert.match(
      String(answerKey),
      /^VB-CANARY-[0-9a-f]{8}$/,
      "answerKey debe tener formato de canario"
    );
  }
  // Los canarios son estables y distintos por pregunta.
  const a = questions[0].answerKey as string;
  const b = questions[1].answerKey as string;
  assert.notEqual(a, b);
});

test("docente dueno: GET /api/modulos/:id mantiene respuestas reales", async () => {
  const token = tokenFor({ id: DOCENTE_ID, role: "TEACHER", schoolId: ESCUELA_ID });
  const res = await jsonRequest(baseUrl, "GET", `/api/modulos/${MOD_ID}`, { token });
  assert.equal(res.status, 200);
  const body = res.body as {
    quizzes: Array<{ questions: Array<Record<string, unknown>> }>;
  };
  const questions = body.quizzes[0].questions;
  assert.equal(questions[0].answerKey, "A", "docente ve respuesta real");
  assert.equal(questions[0].explanation, "Explicacion 1", "docente ve explanation");
  assert.equal(questions[1].answerKey, "X");
});

test("staff (otro docente, no dueno): GET /api/modulos/:id mantiene respuestas", async () => {
  const token = tokenFor({ id: OTRO_DOCENTE_ID, role: "TEACHER", schoolId: OTRA_ESCUELA_ID });
  const res = await jsonRequest(baseUrl, "GET", `/api/modulos/${MOD_ID}`, { token });
  assert.equal(res.status, 200);
  const body = res.body as {
    quizzes: Array<{ questions: Array<Record<string, unknown>> }>;
  };
  const questions = body.quizzes[0].questions;
  assert.equal(questions[0].answerKey, "A", "staff (TEACHER) ve respuesta real");
  assert.equal(questions[0].explanation, "Explicacion 1");
});

test("GET /api/quizzes/banco/:quizId/questions sanitiza para alumno", async () => {
  const token = tokenFor({ id: ALUMNO_ID, role: "USER", schoolId: ESCUELA_ID });
  const res = await jsonRequest(baseUrl, "GET", `/api/quizzes/banco/${QUIZ_ID}/questions`, {
    token,
  });
  assert.equal(res.status, 200);
  const body = res.body as { questions: Array<Record<string, unknown>> };
  for (const q of body.questions) {
    assert.equal("explanation" in q, false);
    assert.match(String(q.answerKey), /^VB-CANARY-[0-9a-f]{8}$/);
  }
});

test("submit con canario como respuesta: flag en grading + pregunta incorrecta", async () => {
  // 1. Crear intento.
  const token = tokenFor({ id: ALUMNO_ID, role: "USER", schoolId: ESCUELA_ID });
  const createRes = await jsonRequest(baseUrl, "POST", "/api/quiz-attempts", {
    token,
    body: { quizId: QUIZ_ID, moduleId: MOD_ID },
  });
  assert.equal(createRes.status, 201);
  const { id: attemptId } = createRes.body as { id: string };

  // 2. Cargar intento para obtener los canarios visibles al alumno.
  const getRes = await jsonRequest(baseUrl, "GET", `/api/quiz-attempts/${attemptId}`, { token });
  assert.equal(getRes.status, 200);
  const getBody = getRes.body as { questions: Array<{ id: string; answerKey: string }> };
  assert.match(getBody.questions[0].answerKey, /^VB-CANARY-/);
  const canario1 = getBody.questions[0].answerKey;
  const canario2 = getBody.questions[1].answerKey;

  // 3. Submit con respuestas = los canarios (el alumno "leyó" el payload).
  const submitRes = await jsonRequest(baseUrl, "POST", `/api/quiz-attempts/${attemptId}/submit`, {
    token,
    body: { answers: { q1: canario1, q2: canario2 } },
  });
  assert.equal(submitRes.status, 200, JSON.stringify(submitRes.body));
  const body = submitRes.body as { score: number; maxScore: number };
  assert.equal(body.maxScore, 2);
  // Canarios no coinciden con respuestas reales → 0 puntos.
  assert.equal(body.score, 0, "canario cuenta como incorrecto");

  // 4. Verificar el flag en `grading`.
  const stored = prisma.quizAttempt.rows.find((a) => a.id === attemptId);
  assert.ok(stored);
  const grading = JSON.parse(stored.grading ?? "{}") as {
    canaryTriggered?: boolean;
    canaryQuestions?: string[];
  };
  assert.equal(grading.canaryTriggered, true);
  assert.deepEqual(grading.canaryQuestions?.sort(), ["q1", "q2"]);
});

test("submit legitimo: NO debe disparar flag canary", async () => {
  const token = tokenFor({ id: ALUMNO_ID, role: "USER", schoolId: ESCUELA_ID });
  const createRes = await jsonRequest(baseUrl, "POST", "/api/quiz-attempts", {
    token,
    body: { quizId: QUIZ_ID, moduleId: MOD_ID },
  });
  const { id: attemptId } = createRes.body as { id: string };

  const submitRes = await jsonRequest(baseUrl, "POST", `/api/quiz-attempts/${attemptId}/submit`, {
    token,
    body: { answers: { q1: "A", q2: "X" } },
  });
  assert.equal(submitRes.status, 200);
  const body = submitRes.body as { score: number; maxScore: number };
  assert.equal(body.maxScore, 2);
  assert.equal(body.score, 2, "respuestas correctas suman 2");

  const stored = prisma.quizAttempt.rows.find((a) => a.id === attemptId);
  const grading = JSON.parse(stored?.grading ?? "{}") as { canaryTriggered?: boolean };
  assert.equal(grading.canaryTriggered, undefined, "no debe haber flag canary");
});
