/**
 * PLAN casos-limite §7 — corrección de respuestas decimales sin tolerancia
 * declarada, contra el endpoint real de submit.
 *
 * Antes, sin `tolerancia:` el grader comparaba STRINGS (`response === expected`).
 * La respuesta esperada se serializa con `formatoDefault`, que redondea a 4
 * decimales, así que `1/3` llegaba como `"0.3333"` y el alumno tenía que tipear
 * exactamente esos 4 decimales: `0.33` daba mal. Y `0,3` con coma daba mal
 * contra `0.3` aunque el mismo grader sí normalizaba la coma cuando había
 * tolerancia declarada.
 *
 * Ahora una respuesta esperada NO entera recibe tolerancia por defecto
 * (`min(0.005, 2 % de |e|)`) y la coma se normaliza siempre. Las respuestas
 * enteras siguen exigiendo exactitud — eso es lo que mantiene intacta la
 * corrección de todo el contenido existente.
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

const DOCENTE_ID = "docente-dec";
const ALUMNO_ID = "alumno-dec";
const ESCUELA_ID = "escuela-dec";
const MOD_ID = "mod-dec";
const QUIZ_ID = "quiz-dec";
const QV_ID = "qv-dec";

before(async () => {
  const { quizAttempts } = await import("../../src/routes/quiz-attempts");
  const server = await startServer([quizAttempts]);
  baseUrl = server.baseUrl;
  close = server.close;
});

after(async () => {
  if (close) await close();
});

function seedQuiz() {
  const now = new Date().toISOString();
  prisma.modulo.rows.push({
    id: MOD_ID,
    slug: `mod-dec-${Date.now()}`,
    titulo: "Modulo decimales",
    descripcion: "",
    visibility: "publico",
    schoolId: null,
    ownerUserId: DOCENTE_ID,
    dependencies: null,
    isDeleted: false,
    createdAt: now,
    updatedAt: now,
  });
  prisma.quiz.rows.push({
    id: QUIZ_ID,
    moduleId: MOD_ID,
    title: "Quiz decimales",
    currentVersionId: QV_ID,
    isActive: true,
    createdAt: now,
    updatedAt: now,
  });
  prisma.quizVersion.rows.push({
    id: QV_ID,
    quizId: QUIZ_ID,
    versionNumber: 1,
    questions: null,
    // No empieza con "plantilla:" → path no-autoritativo: el answerKey del
    // payload es el que corrige, que es justo lo que queremos controlar acá.
    generatorId: "generadorv2:aritmetica",
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
    createdAt: now,
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

/** Corrige `answer` contra `answerKey` sin declarar tolerancia y devuelve score. */
async function corregir(
  answerKey: string,
  answer: string
): Promise<{ score: number; correct: boolean }> {
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
    {
      token: alumno(),
      body: {
        answers: { q1: answer },
        // Sin toleranciaRelativa ni toleranciaAbsoluta: el caso de §7.
        generatedQuestions: [{ id: "q1", answerKey, points: 1 }],
        presentedIds: ["q1"],
      },
    }
  );
  assert.equal(submitRes.status, 200, JSON.stringify(submitRes.body));
  const body = submitRes.body as { score: number };

  // El submit no devuelve el feedback en el body (se persiste en el intento y
  // se sirve en el GET), así que lo leemos de la fila.
  const row = prisma.quizAttempt.rows.find(
    (r: { id: string }) => r.id === attemptId
  ) as { feedback?: string } | undefined;
  const feedback = JSON.parse(row?.feedback ?? "{}") as Record<
    string,
    { correct?: boolean }
  >;
  return { score: body.score, correct: feedback.q1?.correct === true };
}

test("§7: un decimal redondeado a 2 lugares se acepta (1/3 → 0.3333)", async () => {
  for (const respuesta of ["0.3333", "0.333", "0.33"]) {
    const { score } = await corregir("0.3333", respuesta);
    assert.equal(score, 1, `"${respuesta}" debería valer contra 0.3333`);
  }
});

test("§7: una respuesta más gruesa o equivocada sigue dando mal", async () => {
  for (const respuesta of ["0.3", "0.34", "0"]) {
    const { score } = await corregir("0.3333", respuesta);
    assert.equal(score, 0, `"${respuesta}" NO debería valer contra 0.3333`);
  }
});

test("§7: la respuesta entera sigue exigiendo exactitud", async () => {
  assert.equal((await corregir("7", "7")).score, 1);
  assert.equal((await corregir("7", "7.001")).score, 0);
  assert.equal((await corregir("7", "6.999")).score, 0);
});

test("§7: la coma decimal se acepta como separador", async () => {
  assert.equal((await corregir("1.4142", "1,4142")).score, 1);
  assert.equal((await corregir("0.5", "0,5")).score, 1);
});

test("§7: el feedback coincide con la nota (misma función en los dos)", async () => {
  // Si `buildFeedback` y `gradeAnswers` divergieran, el alumno vería la
  // respuesta en verde con 0 puntos (o al revés).
  const aceptada = await corregir("0.3333", "0.33");
  assert.equal(aceptada.score, 1);
  assert.equal(aceptada.correct, true, "feedback debe decir correcta");

  const rechazada = await corregir("0.3333", "0.3");
  assert.equal(rechazada.score, 0);
  assert.equal(rechazada.correct, false, "feedback debe decir incorrecta");
});
