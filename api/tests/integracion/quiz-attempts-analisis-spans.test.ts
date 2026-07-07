/**
 * PLAN-E §21 Parte B — analisis_spans en el flujo de intentos.
 *
 * La corrección reusa el camino genérico de answerKey array (spans como
 * strings canónicos "desde-hasta:etiqueta"), así que acá se cubre lo
 * específico del tipo:
 *  (s1) proporcional: 1 de 2 spans correctos = 0.5 del peso.
 *  (s2) proporcional con un span de más descuenta.
 *  (s3) sanitización: el alumno recibe textoAnalizar + etiquetasDisponibles
 *       pero answerKey canario string (la clave no filtra).
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

const DOCENTE_ID = "docente-spans";
const ALUMNO_ID = "alumno-spans";
const ESCUELA_ID = "escuela-spans";
const MOD_ID = "mod-spans";
const QUIZ_ID = "quiz-spans";
const QV_ID = "qv-spans";

before(async () => {
  const { quizAttempts } = await import("../../src/routes/quiz-attempts");
  const server = await startServer([quizAttempts]);
  baseUrl = server.baseUrl;
  close = server.close;
});

after(async () => {
  if (close) await close();
});

const PREGUNTA_SPANS = {
  id: "qs1",
  prompt: "Analizá la oración",
  questionType: "analisis_spans",
  textoAnalizar: "El perro grande corre por el parque",
  etiquetasDisponibles: ["sujeto", "predicado", "objeto directo"],
  answerKey: ["0-2:sujeto", "3-6:predicado"],
  puntajeParcial: "proporcional",
  points: 1,
};

function seedQuiz() {
  prisma.modulo.rows.push({
    id: MOD_ID,
    slug: `mod-spans-${Date.now()}`,
    titulo: "Modulo spans",
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
    title: "Quiz spans",
    currentVersionId: QV_ID,
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
  prisma.quizVersion.rows.push({
    id: QV_ID,
    quizId: QUIZ_ID,
    versionNumber: 1,
    questions: JSON.stringify([PREGUNTA_SPANS]),
    generatorId: null,
    generatorVersion: "1",
    params: null,
    count: 1,
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

beforeEach(() => {
  resetPrisma();
  seedUser({ id: DOCENTE_ID, role: "TEACHER", schoolId: ESCUELA_ID });
  seedUser({ id: ALUMNO_ID, role: "USER", schoolId: ESCUELA_ID });
  seedQuiz();
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

test("s1: proporcional — 1 de 2 spans correctos = 0.5", async () => {
  const r = await crearYEnviar({ qs1: ["0-2:sujeto"] });
  assert.equal(r.body.score, 0.5);
  assert.equal(r.body.maxScore, 1);
});

test("s2: proporcional — un span de más descuenta: (2−1)/2 = 0.5", async () => {
  const r = await crearYEnviar({
    qs1: ["0-2:sujeto", "3-6:predicado", "1-1:objeto directo"],
  });
  assert.equal(r.body.score, 0.5);
});

test("s3: el alumno recibe texto y etiquetas pero answerKey canario", async () => {
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
  assert.equal(q.textoAnalizar, PREGUNTA_SPANS.textoAnalizar);
  assert.deepEqual(q.etiquetasDisponibles, PREGUNTA_SPANS.etiquetasDisponibles);
  assert.equal(typeof q.answerKey, "string");
  assert.notDeepEqual(q.answerKey, PREGUNTA_SPANS.answerKey);
});
