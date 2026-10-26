/**
 * PLAN-E §21 Parte A — mc de selección múltiple en el flujo de intentos.
 *
 * Cubre:
 *  (m1) todo_o_nada (default array answerKey): exacto → punto entero;
 *       parcial → 0 (comportamiento previo intacto).
 *  (m2) proporcional: max(0, aciertos − de más) / total correctas.
 *  (m3) proporcional con una de más: (2−1)/2 = 0.5 del peso.
 *  (m4) sanitización: el alumno recibe `multiple: true` pero answerKey canario
 *       string (no filtra las correctas).
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

const DOCENTE_ID = "docente-mcm";
const ALUMNO_ID = "alumno-mcm";
const ESCUELA_ID = "escuela-mcm";
const MOD_ID = "mod-mcm";
const QUIZ_ID = "quiz-mcm";
const QV_ID = "qv-mcm";

before(async () => {
  const { quizAttempts } = await import("../../src/routes/quiz-attempts");
  const server = await startServer([quizAttempts]);
  baseUrl = server.baseUrl;
  close = server.close;
});

after(async () => {
  if (close) await close();
});

function seedQuiz(questions: unknown[]) {
  prisma.modulo.rows.push({
    id: MOD_ID,
    slug: `mod-mcm-${Date.now()}`,
    titulo: "Modulo MC multiple",
    descripcion: "",
    visibility: "publico",
    schoolId: null,
    ownerUserId: DOCENTE_ID,
    dependencies: null,
    isDeleted: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
  prisma.quiz.rows.push({
    id: QUIZ_ID,
    moduleId: MOD_ID,
    title: "Quiz MC multiple",
    currentVersionId: QV_ID,
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
  prisma.quizVersion.rows.push({
    id: QV_ID,
    quizId: QUIZ_ID,
    versionNumber: 1,
    questions: JSON.stringify(questions),
    generatorId: null,
    generatorVersion: "1",
    params: null,
    count: questions.length,
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

const PREGUNTA_MULTIPLE = (puntajeParcial?: string) => ({
  id: "qm1",
  prompt: "Marcá los pares",
  questionType: "mc",
  options: ["2", "3", "4", "5"],
  answerKey: ["2", "4"],
  multiple: true,
  ...(puntajeParcial ? { puntajeParcial } : {}),
  points: 1,
});

beforeEach(() => {
  resetPrisma();
  seedUser({ id: DOCENTE_ID, role: "TEACHER", schoolId: ESCUELA_ID });
  seedUser({ id: ALUMNO_ID, role: "USER", schoolId: ESCUELA_ID });
});

const alumno = () => tokenFor({ id: ALUMNO_ID, role: "USER", schoolId: ESCUELA_ID });

async function crearYEnviar(answers: Record<string, unknown>) {
  const createRes = await jsonRequest(baseUrl, "POST", "/api/quiz-attempts", {
    token: alumno(),
    body: { quizId: QUIZ_ID },
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
  return { attemptId, body: submitRes.body as { score: number; maxScore: number } };
}

test("m1: todo_o_nada — exacto suma el peso, parcial suma 0", async () => {
  seedQuiz([PREGUNTA_MULTIPLE()]);
  const exacto = await crearYEnviar({ qm1: ["2", "4"] });
  assert.equal(exacto.body.score, 1);
  assert.equal(exacto.body.maxScore, 1);

  resetPrisma();
  seedUser({ id: DOCENTE_ID, role: "TEACHER", schoolId: ESCUELA_ID });
  seedUser({ id: ALUMNO_ID, role: "USER", schoolId: ESCUELA_ID });
  seedQuiz([PREGUNTA_MULTIPLE()]);
  const parcial = await crearYEnviar({ qm1: ["2"] });
  assert.equal(parcial.body.score, 0);
});

test("m2: proporcional — la mitad de las correctas = mitad del peso", async () => {
  seedQuiz([PREGUNTA_MULTIPLE("proporcional")]);
  const r = await crearYEnviar({ qm1: ["2"] });
  assert.equal(r.body.score, 0.5);
  assert.equal(r.body.maxScore, 1);
});

test("m3: proporcional — una de más descuenta: (2−1)/2 = 0.5", async () => {
  seedQuiz([PREGUNTA_MULTIPLE("proporcional")]);
  const r = await crearYEnviar({ qm1: ["2", "4", "5"] });
  assert.equal(r.body.score, 0.5);
});

test("m3b: proporcional — más de más que aciertos → piso 0", async () => {
  seedQuiz([PREGUNTA_MULTIPLE("proporcional")]);
  const r = await crearYEnviar({ qm1: ["3", "5"] });
  assert.equal(r.body.score, 0);
});

test("m4: el alumno recibe multiple:true pero answerKey canario (string)", async () => {
  seedQuiz([PREGUNTA_MULTIPLE("proporcional")]);
  const createRes = await jsonRequest(baseUrl, "POST", "/api/quiz-attempts", {
    token: alumno(),
    body: { quizId: QUIZ_ID },
  });
  assert.equal(createRes.status, 201);
  const attemptId = (createRes.body as { id: string }).id;
  const getRes = await jsonRequest(baseUrl, "GET", `/api/quiz-attempts/${attemptId}`, {
    token: alumno(),
  });
  assert.equal(getRes.status, 200);
  const q = (getRes.body as { questions: Array<Record<string, unknown>> }).questions[0];
  assert.equal(q.multiple, true);
  assert.equal(typeof q.answerKey, "string");
  assert.notDeepEqual(q.answerKey, ["2", "4"]);
});
