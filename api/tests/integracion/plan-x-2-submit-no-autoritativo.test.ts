/**
 * PLAN-X §2 — el submit NO-autoritativo (generadorV2, sin `questions`
 * almacenadas) perdía `toleranciaAbsoluta` y `questionType` porque
 * `QuizAttemptSubmitSchema.generatedQuestions` no los declaraba (zod
 * los stripeaba). El grader SÍ los usa (`questionType: "expresion"` →
 * equivalencia simbólica; `toleranciaAbsoluta` → criterio F2-04).
 *
 * Este test fuerza el path no-autoritativo (isGeneradorV2: sin
 * `quiz.questions`, `generatorId` que NO empieza con "plantilla:") y
 * verifica que ambos campos, enviados en `generatedQuestions`, SÍ
 * afectan la corrección.
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

const DOCENTE_ID = "docente-px2";
const ALUMNO_ID = "alumno-px2";
const ESCUELA_ID = "escuela-px2";
const MOD_ID = "mod-px2";
const QUIZ_ID = "quiz-px2";
const QV_ID = "qv-px2";

before(async () => {
  const { quizAttempts } = await import("../../src/routes/quiz-attempts");
  const server = await startServer([quizAttempts]);
  baseUrl = server.baseUrl;
  close = server.close;
});

after(async () => {
  if (close) await close();
});

function seedGeneradorV2Quiz() {
  prisma.modulo.rows.push({
    id: MOD_ID,
    slug: `mod-px2-${Date.now()}`,
    titulo: "Modulo generadorV2",
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
    title: "Quiz generadorV2",
    currentVersionId: QV_ID,
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
  prisma.quizVersion.rows.push({
    id: QV_ID,
    quizId: QUIZ_ID,
    versionNumber: 1,
    questions: null,
    // No empieza con "plantilla:" → isGeneradorV2 (no materializable server-side).
    generatorId: "generadorv2:algebra",
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
  seedGeneradorV2Quiz();
});

const alumno = () => tokenFor({ id: ALUMNO_ID, role: "USER", schoolId: ESCUELA_ID });

async function crearIntento() {
  const createRes = await jsonRequest(baseUrl, "POST", "/api/quiz-attempts", {
    token: alumno(),
    body: { quizId: QUIZ_ID },
  });
  assert.equal(createRes.status, 201, JSON.stringify(createRes.body));
  return (createRes.body as { id: string }).id;
}

test("PLAN-X §2: toleranciaAbsoluta sobrevive el parse y decide la corrección", async () => {
  const attemptId = await crearIntento();
  const submitRes = await jsonRequest(
    baseUrl,
    "POST",
    `/api/quiz-attempts/${attemptId}/submit`,
    {
      token: alumno(),
      body: {
        answers: { q1: "0.3" },
        generatedQuestions: [
          {
            id: "q1",
            answerKey: "0",
            points: 1,
            // Sin esto, e===0 exige respuesta exacta ⇒ "0.3" sería incorrecta.
            toleranciaAbsoluta: 0.5,
          },
        ],
        presentedIds: ["q1"],
      },
    }
  );
  assert.equal(submitRes.status, 200, JSON.stringify(submitRes.body));
  const body = submitRes.body as { score: number; maxScore: number };
  assert.equal(body.score, 1, "toleranciaAbsoluta debe perdonar 0.3 vs 0 con margen 0.5");
});

test("PLAN-X §2: questionType 'expresion' activa equivalencia simbólica", async () => {
  const attemptId = await crearIntento();
  const submitRes = await jsonRequest(
    baseUrl,
    "POST",
    `/api/quiz-attempts/${attemptId}/submit`,
    {
      token: alumno(),
      body: {
        // "x+x" y "2*x" son equivalentes algebraicamente pero NO strings iguales.
        answers: { q1: "x+x" },
        generatedQuestions: [
          {
            id: "q1",
            answerKey: "2*x",
            points: 1,
            questionType: "expresion",
          },
        ],
        presentedIds: ["q1"],
      },
    }
  );
  assert.equal(submitRes.status, 200, JSON.stringify(submitRes.body));
  const body = submitRes.body as { score: number; maxScore: number };
  assert.equal(
    body.score,
    1,
    "questionType 'expresion' debe corregir por equivalencia simbólica, no por igualdad de string"
  );
});
