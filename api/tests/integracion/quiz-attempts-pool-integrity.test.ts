/**
 * F-2c — quizzes con preguntas ALMACENADAS + selección por pool/azar: el
 * servidor DERIVA el subconjunto presentado desde `attempt.seed` + composición
 * (mismo algoritmo que el reproductor), en vez de creerle a
 * `payload.presentedIds`. Así un alumno no puede declarar que sólo vio las
 * preguntas que respondió bien.
 *
 * Verifica (test (d)):
 *  - `presentedIds` del payload IGNORADO: el subconjunto corregido es el
 *    derivado del seed, no el que afirma el cliente.
 *  - Control: respondiendo bien las derivadas → puntaje completo del subconjunto.
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
import { parseComposition, selectPoolIndices } from "../../src/lib/quiz-composition";

let baseUrl: string;
let close: () => Promise<void>;

const DOCENTE_ID = "docente-1";
const ALUMNO_ID = "alumno-1";
const ESCUELA_ID = "escuela-1";
const MOD_ID = "mod-1";
const QUIZ_ID = "quiz-pool";
const QV_ID = "qv-pool";
const FIXED_SEED = "pool-seed-77";
const TOTAL = 5;
const TOMAR = 2;

// Composición: tomar 2 de 5 al azar (determinístico por seed). El subconjunto
// derivado server-side debe coincidir con esto.
const COMPOSITION = { tomar: TOMAR, seleccion: "azar" as const };

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
    titulo: "Modulo Pool",
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
    title: "Quiz Pool",
    currentVersionId: QV_ID,
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
  // 5 preguntas almacenadas con answerKeys distintas (c0..c4), peso 1.
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
    fixedSeed: FIXED_SEED,
    // La composición viaja serializada en settings (como en producción).
    settings: JSON.stringify({ composition: COMPOSITION }),
    createdAt: new Date().toISOString(),
    createdBy: DOCENTE_ID,
  });
});

async function createAttempt(token: string): Promise<string> {
  const createRes = await jsonRequest(baseUrl, "POST", "/api/quiz-attempts", {
    token,
    body: { quizId: QUIZ_ID, moduleId: MOD_ID },
  });
  assert.equal(createRes.status, 201, JSON.stringify(createRes.body));
  const { id } = createRes.body as { id: string };
  const created = prisma.quizAttempt.rows.find((a) => a.id === id);
  assert.ok(created);
  assert.equal(created.seed, FIXED_SEED);
  return id;
}

// Subconjunto que el servidor DEBE derivar (mismo algoritmo y seed).
function derivedIndices(): number[] {
  return selectPoolIndices(TOTAL, parseComposition(COMPOSITION), FIXED_SEED);
}

test("(d) pool almacenado: presentedIds del payload IGNORADO, subconjunto derivado del seed", async () => {
  const token = tokenFor({ id: ALUMNO_ID, role: "STUDENT", schoolId: ESCUELA_ID });
  const attemptId = await createAttempt(token);

  const derived = derivedIndices();
  assert.equal(derived.length, TOMAR, "el subconjunto derivado debe tener TOMAR preguntas");
  const derivedIds = derived.map((i) => `q${i}`);
  const nonDerivedIds = Array.from({ length: TOTAL }, (_, i) => `q${i}`).filter(
    (id) => !derivedIds.includes(id),
  );

  // ATAQUE: respondemos BIEN las NO derivadas y MAL las derivadas, y afirmamos
  // (presentedIds) que sólo vimos las no derivadas (las que están bien). Si el
  // server le creyera al payload, daría 3/3; con la derivación, corrige las 2
  // derivadas (mal) → 0/2.
  const answers: Record<string, string> = {};
  for (let i = 0; i < TOTAL; i++) {
    answers[`q${i}`] = derived.includes(i) ? "mal" : `c${i}`;
  }

  const res = await jsonRequest(baseUrl, "POST", `/api/quiz-attempts/${attemptId}/submit`, {
    token,
    body: { answers, presentedIds: nonDerivedIds },
  });
  assert.equal(res.status, 200, JSON.stringify(res.body));
  const body = res.body as { score: number; maxScore: number };
  assert.equal(body.maxScore, TOMAR, "maxScore = tamaño del subconjunto derivado, no el afirmado");
  assert.equal(body.score, 0, "se corrigen las preguntas derivadas (mal), no las afirmadas");
});

test("(d-control) respondiendo bien las derivadas → puntaje completo del subconjunto", async () => {
  const token = tokenFor({ id: ALUMNO_ID, role: "STUDENT", schoolId: ESCUELA_ID });
  const attemptId = await createAttempt(token);

  const derived = derivedIndices();
  // Respondemos bien SÓLO las derivadas; el resto da igual (no se corrigen).
  const answers: Record<string, string> = {};
  for (let i = 0; i < TOTAL; i++) {
    answers[`q${i}`] = derived.includes(i) ? `c${i}` : "mal";
  }

  const res = await jsonRequest(baseUrl, "POST", `/api/quiz-attempts/${attemptId}/submit`, {
    token,
    // Sin presentedIds: igual el server deriva el subconjunto.
    body: { answers },
  });
  assert.equal(res.status, 200, JSON.stringify(res.body));
  const body = res.body as { score: number; maxScore: number };
  assert.equal(body.maxScore, TOMAR);
  assert.equal(body.score, TOMAR, "las derivadas correctas puntúan completo");
});
