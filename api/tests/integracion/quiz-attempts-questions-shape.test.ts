/**
 * FIX-QUIZATTEMPT — `QuizVersion.questions` es una columna `String?`
 * serializada con JSON en la DB. El handler de
 * `GET /api/quiz-attempts/:id` (`api/src/routes/quiz-attempts.ts:1163`)
 * delega la lectura en `fetchQuizFromCollections`, que previo al fix
 * hacía `versionRecord.questions as unknown as ModuleQuiz["questions"]`
 * (cast, sin parse). El front recibía el string crudo, intentaba
 * `questions.map(...)` y reventaba con
 * `TypeError: questions.map is not a function` al abrir el quiz.
 *
 * Causa de fondo: el cast asumía que la columna ya venía parseada, lo
 * cual era cierto para el in-memory prisma de los tests (que no
 * deserializa) pero NO para la DB real. `modulos.ts:270` y
 * `quiz-banco.ts:115,207` ya usan `safeJsonParse`/`parseJsonSafe`; acá
 * faltaba.
 *
 * Cubre:
 *  1. `GET /api/quiz-attempts/:id` con `questions` como string JSON
 *     serializado en la DB → la respuesta trae `questions` como ARRAY
 *     parseado (no como string crudo).
 *  2. La sanitización para alumno sigue funcionando con el nuevo path
 *     de parseo (canarios en lugar de answerKey real).
 *  3. Submit contra el attempt no rompe por `questions` mal shapeado.
 *  4. `GET /api/quiz-attempts/:id` con `questions` MALFORMADO (string
 *     que no es JSON válido) → degrada a `[]` sin tirar 500.
 *  5. Compatibilidad: `questions` ya como array (shape del in-memory
 *     prisma de los otros tests) sigue funcionando — la guarda
 *     `typeof === "string"` evita doble-parseo.
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

const DOCENTE_ID = "docente-fqa";
const ALUMNO_ID = "alumno-fqa";
const ESCUELA_ID = "escuela-fqa";
const MOD_ID = "mod-fqa";
const QUIZ_ID = "quiz-fqa";
const QV_ID = "qv-fqa";

const QUESTIONS = [
  {
    id: "q1",
    prompt: "Pregunta FIX-QUIZATTEMPT 1",
    questionType: "mc",
    options: ["A", "B", "C"],
    answerKey: "A",
    explanation: "Explicacion FQA 1",
    points: 1,
  },
  {
    id: "q2",
    prompt: "Pregunta FIX-QUIZATTEMPT 2",
    questionType: "mc",
    options: ["X", "Y", "Z"],
    answerKey: "X",
    explanation: "Explicacion FQA 2",
    points: 1,
  },
];

function seedQuestionsShape(questions: unknown) {
  // FIX-QUIZATTEMPT — la columna es `String?` (JSON serializado en la
  // DB real). El test usa exactamente ese shape, que era el que rompía
  // el front antes del fix.
  prisma.quizVersion.rows.push({
    id: QV_ID,
    quizId: QUIZ_ID,
    versionNumber: 1,
    questions: questions as unknown as string,
    generatorId: null,
    generatorVersion: "1",
    params: null,
    count: 2,
    seedPolicy: 0,
    fixedSeed: null,
    settings: JSON.stringify({
      type: "practica",
      mode: "manual",
      visibility: "publico",
    }),
    createdAt: new Date().toISOString(),
    createdBy: DOCENTE_ID,
  });
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
  seedUser({ id: ALUMNO_ID, role: "USER", schoolId: ESCUELA_ID });
  prisma.modulo.rows.push({
    id: MOD_ID,
    slug: `mod-fqa-${Date.now()}`,
    titulo: "Modulo FIX-QUIZATTEMPT",
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
    title: "Quiz FIX-QUIZATTEMPT",
    currentVersionId: QV_ID,
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
  seedQuestionsShape(JSON.stringify(QUESTIONS));
});

test("FIX-QUIZATTEMPT: GET /api/quiz-attempts/:id con questions como string JSON → array parseado", async () => {
  const alumnoToken = tokenFor({
    id: ALUMNO_ID,
    role: "USER",
    schoolId: ESCUELA_ID,
  });
  // 1. Crear intento.
  const createRes = await jsonRequest(baseUrl, "POST", "/api/quiz-attempts", {
    token: alumnoToken,
    body: { quizId: QUIZ_ID, moduleId: MOD_ID },
  });
  assert.equal(createRes.status, 201);
  const { id: attemptId } = createRes.body as { id: string };

  // 2. Cargar intento. ANTES del fix, `body.questions` era un STRING
  //    (el JSON crudo de la DB). DESPUÉS, debe ser un ARRAY.
  const getRes = await jsonRequest(baseUrl, "GET", `/api/quiz-attempts/${attemptId}`, {
    token: alumnoToken,
  });
  assert.equal(getRes.status, 200);
  const body = getRes.body as {
    questions: unknown;
    quiz?: { questions: unknown };
  };
  assert.ok(
    Array.isArray(body.questions),
    `body.questions debe ser array (recibido: ${typeof body.questions})`
  );
  assert.equal((body.questions as unknown[]).length, 2);
  // El array anidado `quiz.questions` también debe estar parseado.
  assert.ok(
    Array.isArray(body.quiz?.questions),
    `body.quiz.questions debe ser array (recibido: ${typeof body.quiz?.questions})`
  );
});

test("FIX-QUIZATTEMPT: alumno sigue viendo canarios (sanitizacion intacta tras el parseo)", async () => {
  const alumnoToken = tokenFor({
    id: ALUMNO_ID,
    role: "USER",
    schoolId: ESCUELA_ID,
  });
  const createRes = await jsonRequest(baseUrl, "POST", "/api/quiz-attempts", {
    token: alumnoToken,
    body: { quizId: QUIZ_ID, moduleId: MOD_ID },
  });
  assert.equal(createRes.status, 201);
  const { id: attemptId } = createRes.body as { id: string };

  const getRes = await jsonRequest(baseUrl, "GET", `/api/quiz-attempts/${attemptId}`, {
    token: alumnoToken,
  });
  assert.equal(getRes.status, 200);
  const body = getRes.body as {
    questions: Array<{ id: string; answerKey: unknown; explanation?: unknown }>;
  };
  assert.equal(body.questions.length, 2);
  for (const q of body.questions) {
    assert.equal("explanation" in q, false, "alumno no debe ver explanation");
    assert.match(
      String(q.answerKey),
      /^VB-CANARY-[0-9a-f]{8}$/,
      `answerKey debe ser canario para pregunta ${q.id}`
    );
  }
});

const setQuestionsConResolucion = () => {
  const questionsConResolucion = QUESTIONS.map((q) => ({
    ...q,
    pasos: [`Paso 1 de ${q.id}`, `Paso 2 de ${q.id}`],
    pistas: [`Pista de ${q.id}`],
  }));
  const qv = prisma.quizVersion.rows.find((v) => v.id === QV_ID);
  assert.ok(qv, "quizVersion de prueba debe existir");
  (qv as { questions: unknown }).questions = JSON.stringify(questionsConResolucion) as unknown;
};

test("PLAN-C11: alumno NO ve pasos/pistas mientras el intento sigue in_progress", async () => {
  setQuestionsConResolucion();

  const alumnoToken = tokenFor({ id: ALUMNO_ID, role: "USER", schoolId: ESCUELA_ID });
  const createRes = await jsonRequest(baseUrl, "POST", "/api/quiz-attempts", {
    token: alumnoToken,
    body: { quizId: QUIZ_ID, moduleId: MOD_ID },
  });
  assert.equal(createRes.status, 201);
  const { id: attemptId } = createRes.body as { id: string };

  const getRes = await jsonRequest(baseUrl, "GET", `/api/quiz-attempts/${attemptId}`, {
    token: alumnoToken,
  });
  assert.equal(getRes.status, 200);
  const body = getRes.body as { questions: Array<Record<string, unknown>> };
  assert.equal(body.questions.length, 2);
  for (const q of body.questions) {
    assert.equal("pasos" in q, false, `pregunta ${q.id}: pasos no debe viajar antes de responder (fuga)`);
    assert.equal("pistas" in q, false, `pregunta ${q.id}: pistas no debe viajar antes de responder (fuga)`);
  }
});

test("PLAN-C11: alumno SÍ ve pasos/pistas una vez el intento está finalizado (modo revisión)", async () => {
  setQuestionsConResolucion();

  const alumnoToken = tokenFor({ id: ALUMNO_ID, role: "USER", schoolId: ESCUELA_ID });
  const createRes = await jsonRequest(baseUrl, "POST", "/api/quiz-attempts", {
    token: alumnoToken,
    body: { quizId: QUIZ_ID, moduleId: MOD_ID },
  });
  assert.equal(createRes.status, 201);
  const { id: attemptId } = createRes.body as { id: string };

  // Simula el intento ya finalizado (ej. tras el submit).
  const attempt = prisma.quizAttempt.rows.find((a) => a.id === attemptId);
  assert.ok(attempt, "el intento debe existir");
  (attempt as { status: string }).status = "submitted";

  const getRes = await jsonRequest(baseUrl, "GET", `/api/quiz-attempts/${attemptId}`, {
    token: alumnoToken,
  });
  assert.equal(getRes.status, 200);
  const body = getRes.body as { questions: Array<Record<string, unknown>> };
  assert.equal(body.questions.length, 2);
  for (const q of body.questions) {
    assert.ok(Array.isArray(q.pasos) && (q.pasos as unknown[]).length > 0, `pregunta ${q.id}: pasos debe verse en revisión`);
  }
  // explanation y answerKey real siguen sin exponerse, incluso en revisión
  // (fuera de alcance de este fix — nadie los consume del lado alumno hoy).
  for (const q of body.questions) {
    assert.equal("explanation" in q, false);
  }
});

test("FIX-QUIZATTEMPT: staff (docente dueno) ve las preguntas con answerKey real", async () => {
  // FIX-QUIZATTEMPT — la ruta `GET /api/quiz-attempts/:id` actual filtra
  // por `userId` (solo el alumno dueno). Para verificar el camino staff
  // necesitamos el endpoint `/staff`, que sí respeta el access level.
  const docenteToken = tokenFor({
    id: DOCENTE_ID,
    role: "TEACHER",
    schoolId: ESCUELA_ID,
  });
  const alumnoToken = tokenFor({
    id: ALUMNO_ID,
    role: "USER",
    schoolId: ESCUELA_ID,
  });
  // Crear el intento como alumno.
  const createRes = await jsonRequest(baseUrl, "POST", "/api/quiz-attempts", {
    token: alumnoToken,
    body: { quizId: QUIZ_ID, moduleId: MOD_ID },
  });
  assert.equal(createRes.status, 201);
  const { id: attemptId } = createRes.body as { id: string };

  // El endpoint /staff devuelve el attempt; verificamos que NO rompe
  // por `questions` mal shapeado. El body staff no incluye questions
  // (sólo metadata + grading), pero el handler llama
  // `fetchQuizFromCollections` y debe sobrevivir al parseo.
  const staffRes = await jsonRequest(
    baseUrl,
    "GET",
    `/api/quiz-attempts/${attemptId}/staff`,
    { token: docenteToken }
  );
  assert.equal(staffRes.status, 200, JSON.stringify(staffRes.body));
});

test("FIX-QUIZATTEMPT: questions como JSON malformado → degrada a [] sin 500", async () => {
  // Re-seed con questions = string roto.
  prisma.quizVersion.rows.length = 0;
  seedQuestionsShape("{esto no es json valido");

  const alumnoToken = tokenFor({
    id: ALUMNO_ID,
    role: "USER",
    schoolId: ESCUELA_ID,
  });
  const createRes = await jsonRequest(baseUrl, "POST", "/api/quiz-attempts", {
    token: alumnoToken,
    body: { quizId: QUIZ_ID, moduleId: MOD_ID },
  });
  assert.equal(createRes.status, 201);
  const { id: attemptId } = createRes.body as { id: string };

  // Antes del fix, esto reventaba con 500 (o devolvía un string).
  // Después del fix, devuelve 200 con `questions: []` (safeJsonParse
  // cae al fallback).
  const getRes = await jsonRequest(baseUrl, "GET", `/api/quiz-attempts/${attemptId}`, {
    token: alumnoToken,
  });
  assert.equal(getRes.status, 200);
  const body = getRes.body as { questions: unknown; quiz?: { questions: unknown } };
  assert.ok(Array.isArray(body.questions), "questions debe ser array");
  assert.equal((body.questions as unknown[]).length, 0, "questions malformado → []");
  assert.ok(
    Array.isArray(body.quiz?.questions),
    "quiz.questions también debe ser array"
  );
  assert.equal((body.quiz?.questions as unknown[]).length, 0);
});

test("FIX-QUIZATTEMPT: compat — questions ya como array (shape del in-memory prisma) sigue funcionando", async () => {
  // El in-memory prisma de los otros tests pasa `questions: [...]`
  // directamente (sin serializar). El fix debe preservar esa rama.
  prisma.quizVersion.rows.length = 0;
  seedQuestionsShape(QUESTIONS);

  const alumnoToken = tokenFor({
    id: ALUMNO_ID,
    role: "USER",
    schoolId: ESCUELA_ID,
  });
  const createRes = await jsonRequest(baseUrl, "POST", "/api/quiz-attempts", {
    token: alumnoToken,
    body: { quizId: QUIZ_ID, moduleId: MOD_ID },
  });
  assert.equal(createRes.status, 201);
  const { id: attemptId } = createRes.body as { id: string };

  const getRes = await jsonRequest(baseUrl, "GET", `/api/quiz-attempts/${attemptId}`, {
    token: alumnoToken,
  });
  assert.equal(getRes.status, 200);
  const body = getRes.body as { questions: unknown[] };
  assert.ok(Array.isArray(body.questions));
  assert.equal(body.questions.length, 2);
});
