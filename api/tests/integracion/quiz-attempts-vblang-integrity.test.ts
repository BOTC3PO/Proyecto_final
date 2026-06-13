/**
 * I-2 — quizzes basados en plantillas VBLang: el servidor MATERIALIZA los
 * ejercicios desde el seed del intento y corrige contra SU materialización.
 * `payload.generatedQuestions` deja de ser fuente de verdad.
 *
 * Verifica:
 *  (a) Ataque de devtools automatizado: el alumno manda `generatedQuestions`
 *      con answerKeys = sus propias respuestas (todas mal) → el score sale de la
 *      materialización del servidor (0), NO del payload (que daría perfecto).
 *  (b) Mismo seed → misma corrección en dos submits idénticos.
 *  (control) Respuestas correctas reales puntúan completo (la corrección
 *      server-side no es un "siempre 0").
 */

import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import { compile, generate, parse, toModuleQuizQuestion } from "@vb/vblang";
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
const QUIZ_ID = "quiz-vblang";
const QV_ID = "qv-vblang";
const PLANTILLA_ID = "plantilla-mru";
const FIXED_SEED = "12345";
const COUNT = 3;

// Plantilla MRU pura (sin generador asistido ni dataset): materializable
// server-side sólo con @vb/vblang.
const DSL_MRU = `variables:
  v: random(50, 200)
  t: random(2, 10)

enunciado: "Un auto va a {v} km/h durante {t} h. Que distancia recorre?"

respuesta: v * t
unidad: "km"
tolerancia: 1`;

// Replica EXACTA del loop del reproductor del alumno (QuizAttempt.tsx +
// runPlantilla.ts). En el test hace de "cliente": nos da los ids y las
// respuestas correctas materializadas.
function clientMaterialize(dsl: string, seed: string, count: number) {
  const out: ReturnType<typeof toModuleQuizQuestion>[] = [];
  const maxIntentos = count * 3;
  let intentos = 0;
  while (out.length < count && intentos < maxIntentos) {
    try {
      const gen = generate(compile(parse(dsl)), { seed: `${seed}-${intentos}` });
      out.push(toModuleQuizQuestion(gen, { focus: null }));
    } catch {
      // restricción difícil: reintentar, igual que el cliente.
    }
    intentos++;
  }
  return out;
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
  prisma.modulo.rows.push({
    id: MOD_ID,
    slug: `mod-${Date.now()}`,
    titulo: "Modulo VBLang",
    descripcion: "",
    visibility: "privado",
    schoolId: ESCUELA_ID,
    ownerUserId: DOCENTE_ID,
    teoriaId: null,
    tuesdayDocId: null,
    libroId: null,
    defaultQuestionCount: COUNT,
    dependencies: null,
    isDeleted: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
  prisma.quiz.rows.push({
    id: QUIZ_ID,
    moduleId: MOD_ID,
    title: "Quiz MRU",
    currentVersionId: QV_ID,
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
  // Versión basada en plantilla: sin preguntas persistidas, seed fijo para que
  // el test sea determinista (el reproductor materializa client-side).
  prisma.quizVersion.rows.push({
    id: QV_ID,
    quizId: QUIZ_ID,
    versionNumber: 1,
    questions: null,
    generatorId: `plantilla:${PLANTILLA_ID}`,
    generatorVersion: "1",
    params: null,
    count: COUNT,
    seedPolicy: 0,
    fixedSeed: FIXED_SEED,
    settings: null,
    createdAt: new Date().toISOString(),
    createdBy: DOCENTE_ID,
  });
  prisma.plantillaEjercicio.rows.push({
    id: PLANTILLA_ID,
    ownerUserId: DOCENTE_ID,
    schoolId: ESCUELA_ID,
    visibility: "escuela",
    nombre: "MRU",
    descripcion: null,
    materia: "fisica",
    tags: null,
    codigoDsl: DSL_MRU,
    version: 1,
    basadoEn: null,
    publicAprobado: false,
    isDeleted: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
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
  assert.equal(created.seed, FIXED_SEED, "el intento debe usar el seed fijo");
  return id;
}

function readGrading(attemptId: string): Record<string, unknown> {
  const row = prisma.quizAttempt.rows.find((a) => a.id === attemptId);
  assert.ok(row);
  return JSON.parse(String(row.grading ?? "{}"));
}

test("(a) ataque devtools: el score sale de la materialización del servidor, no del payload", async () => {
  const token = tokenFor({ id: ALUMNO_ID, role: "STUDENT", schoolId: ESCUELA_ID });
  const attemptId = await createAttempt(token);

  // El "cliente" materializa para conocer los ids reales presentados.
  const qs = clientMaterialize(DSL_MRU, FIXED_SEED, COUNT);
  assert.equal(qs.length, COUNT, "la plantilla debe materializar COUNT preguntas");

  // PAYLOAD MANIPULADO: el alumno responde cualquier cosa (mal) y afirma que
  // ESA es la answerKey correcta. Si el server le creyera, sacaría perfecto.
  const WRONG = "999999";
  const answers: Record<string, string> = {};
  const generatedQuestions = qs.map((q) => {
    answers[q.id] = WRONG;
    return { id: q.id, answerKey: WRONG, toleranciaRelativa: q.toleranciaRelativa };
  });

  const res = await jsonRequest(baseUrl, "POST", `/api/quiz-attempts/${attemptId}/submit`, {
    token,
    body: { answers, presentedIds: qs.map((q) => q.id), generatedQuestions },
  });
  assert.equal(res.status, 200, JSON.stringify(res.body));
  const body = res.body as { score: number; maxScore: number };
  assert.equal(body.maxScore, COUNT, "maxScore = peso de las preguntas materializadas");
  assert.equal(body.score, 0, "el ataque NO debe puntuar: corrige contra la answerKey del servidor");

  // El intento queda marcado como server-autoritativo y con discrepancia.
  const grading = readGrading(attemptId);
  assert.equal(grading.serverAuthoritative, true);
  assert.equal(grading.materializationMismatch, true, "answerKeys del payload != regeneradas");
  assert.equal(
    (grading.mismatchQuestions as string[]).length,
    COUNT,
    "las COUNT answerKeys manipuladas deben detectarse",
  );
});

test("(control) respuestas correctas reales puntúan completo", async () => {
  const token = tokenFor({ id: ALUMNO_ID, role: "STUDENT", schoolId: ESCUELA_ID });
  const attemptId = await createAttempt(token);

  const qs = clientMaterialize(DSL_MRU, FIXED_SEED, COUNT);
  const answers: Record<string, string> = {};
  for (const q of qs) answers[q.id] = String(q.answerKey);

  const res = await jsonRequest(baseUrl, "POST", `/api/quiz-attempts/${attemptId}/submit`, {
    token,
    // No mandamos generatedQuestions manipuladas: respuestas honestas.
    body: { answers, presentedIds: qs.map((q) => q.id) },
  });
  assert.equal(res.status, 200, JSON.stringify(res.body));
  const body = res.body as { score: number; maxScore: number };
  assert.equal(body.maxScore, COUNT);
  assert.equal(body.score, COUNT, "las respuestas correctas reales deben puntuar completo");
  assert.equal(readGrading(attemptId).serverAuthoritative, true);
});

test("(b) mismo seed → misma corrección en dos submits idénticos", async () => {
  const token = tokenFor({ id: ALUMNO_ID, role: "STUDENT", schoolId: ESCUELA_ID });

  // Respuestas: correctas en índices pares, mal en impares (mezcla no trivial).
  const qs = clientMaterialize(DSL_MRU, FIXED_SEED, COUNT);
  const answers: Record<string, string> = {};
  qs.forEach((q, i) => {
    answers[q.id] = i % 2 === 0 ? String(q.answerKey) : "0";
  });
  const expectedScore = qs.filter((_, i) => i % 2 === 0).length;

  const submitFor = async () => {
    const attemptId = await createAttempt(token);
    const res = await jsonRequest(baseUrl, "POST", `/api/quiz-attempts/${attemptId}/submit`, {
      token,
      body: { answers, presentedIds: qs.map((q) => q.id) },
    });
    assert.equal(res.status, 200, JSON.stringify(res.body));
    return res.body as { score: number; maxScore: number };
  };

  const first = await submitFor();
  const second = await submitFor();
  assert.deepEqual(first, second, "mismo seed + mismas respuestas → misma corrección");
  assert.equal(first.score, expectedScore);
  assert.equal(first.maxScore, COUNT);
});
