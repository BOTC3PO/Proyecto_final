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

// ── Paso 4 — tolerancia/equivalencia numérica ──────────────────────────────
// Plantilla con respuesta no entera (10/3 = 3.3333…). El servidor corrige con
// `gradeNumeric` contra el valor MATERIALIZADO (la answerKey de
// toModuleQuizQuestion, misma que usa el cliente), no contra un string mostrado
// redondeado: una respuesta dentro de la tolerancia se acepta aunque tenga menos
// decimales; una fuera se rechaza.
const QUIZ_DIV = "quiz-div";
const QV_DIV = "qv-div";
const PLANTILLA_DIV = "plantilla-div";
const DSL_DIV = `variables:
  n: random(2, 5)

enunciado: "Aproxima 10/3 (variante {n})"

respuesta: 10 / 3
tolerancia: 0.05`;

function seedDivQuiz() {
  prisma.quiz.rows.push({
    id: QUIZ_DIV,
    moduleId: MOD_ID,
    title: "Quiz Div",
    currentVersionId: QV_DIV,
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
  prisma.quizVersion.rows.push({
    id: QV_DIV,
    quizId: QUIZ_DIV,
    versionNumber: 1,
    questions: null,
    generatorId: `plantilla:${PLANTILLA_DIV}`,
    generatorVersion: "1",
    params: null,
    count: 1,
    seedPolicy: 0,
    fixedSeed: FIXED_SEED,
    settings: null,
    createdAt: new Date().toISOString(),
    createdBy: DOCENTE_ID,
  });
  prisma.plantillaEjercicio.rows.push({
    id: PLANTILLA_DIV,
    ownerUserId: DOCENTE_ID,
    schoolId: ESCUELA_ID,
    visibility: "escuela",
    nombre: "Div",
    descripcion: null,
    materia: "matematicas",
    tags: null,
    codigoDsl: DSL_DIV,
    version: 1,
    basadoEn: null,
    publicAprobado: false,
    isDeleted: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
}

async function submitDiv(token: string, answer: string): Promise<{ score: number; maxScore: number }> {
  const createRes = await jsonRequest(baseUrl, "POST", "/api/quiz-attempts", {
    token,
    body: { quizId: QUIZ_DIV, moduleId: MOD_ID },
  });
  assert.equal(createRes.status, 201, JSON.stringify(createRes.body));
  const { id } = createRes.body as { id: string };
  const [q] = clientMaterialize(DSL_DIV, FIXED_SEED, 1);
  const res = await jsonRequest(baseUrl, "POST", `/api/quiz-attempts/${id}/submit`, {
    token,
    body: { answers: { [q.id]: answer }, presentedIds: [q.id] },
  });
  assert.equal(res.status, 200, JSON.stringify(res.body));
  return res.body as { score: number; maxScore: number };
}

test("(step4) tolerancia numérica: corrige contra el valor materializado, no el string mostrado", async () => {
  seedDivQuiz();
  const token = tokenFor({ id: ALUMNO_ID, role: "STUDENT", schoolId: ESCUELA_ID });

  const [q] = clientMaterialize(DSL_DIV, FIXED_SEED, 1);
  const expected = parseFloat(String(q.answerKey)); // 3.3333 (materializado)
  assert.ok(!Number.isInteger(expected), "la respuesta materializada es no entera");
  const tol = q.toleranciaRelativa ?? 0;
  assert.ok(tol > 0, "la plantilla define tolerancia relativa");

  // Respuesta redondeada a 2 decimales (lo que el alumno ve/tipea) — dentro de
  // la tolerancia respecto del valor sin redondear → debe aceptarse.
  const rounded = expected.toFixed(2);
  assert.notEqual(rounded, String(q.answerKey), "el redondeo difiere del valor materializado");
  const within = await submitDiv(token, rounded);
  assert.equal(within.maxScore, 1);
  assert.equal(within.score, 1, "respuesta dentro de tolerancia (redondeada) se acepta");

  // Respuesta claramente fuera de tolerancia → se rechaza.
  const off = (expected + Math.abs(expected) * tol * 4).toFixed(4);
  const outside = await submitDiv(token, off);
  assert.equal(outside.score, 0, "respuesta fuera de tolerancia se rechaza");
});

// ── Paso 5 — política de evaluación: generadoresV2 ─────────────────────────
// Un quiz generadoresV2 (generatorId que NO es "plantilla:…") no se materializa
// server-side: se mantiene el comportamiento actual (corrige contra el payload)
// PERO el intento se marca serverAuthoritative=false para la UI del docente.
const QUIZ_GEN2 = "quiz-gen2";
const QV_GEN2 = "qv-gen2";

test("(c) generadoresV2: serverAuthoritative=false (comportamiento actual, marcado)", async () => {
  prisma.quiz.rows.push({
    id: QUIZ_GEN2,
    moduleId: MOD_ID,
    title: "Quiz Gen2",
    currentVersionId: QV_GEN2,
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
  prisma.quizVersion.rows.push({
    id: QV_GEN2,
    quizId: QUIZ_GEN2,
    versionNumber: 1,
    questions: null,
    generatorId: "biologia/celula", // generadoresV2 (vive en apps/web)
    generatorVersion: "1",
    params: null,
    count: 2,
    seedPolicy: 0,
    fixedSeed: FIXED_SEED,
    settings: null,
    createdAt: new Date().toISOString(),
    createdBy: DOCENTE_ID,
  });
  const token = tokenFor({ id: ALUMNO_ID, role: "STUDENT", schoolId: ESCUELA_ID });
  const createRes = await jsonRequest(baseUrl, "POST", "/api/quiz-attempts", {
    token,
    body: { quizId: QUIZ_GEN2, moduleId: MOD_ID },
  });
  assert.equal(createRes.status, 201, JSON.stringify(createRes.body));
  const { id: attemptId } = createRes.body as { id: string };

  // El cliente materializó (generadoresV2) y manda las preguntas; el server las
  // usa (no puede regenerarlas) pero marca el intento como no-autoritativo.
  const generatedQuestions = [
    { id: "g1", answerKey: "A" },
    { id: "g2", answerKey: "B" },
  ];
  const res = await jsonRequest(baseUrl, "POST", `/api/quiz-attempts/${attemptId}/submit`, {
    token,
    body: {
      answers: { g1: "A", g2: "B" },
      presentedIds: ["g1", "g2"],
      generatedQuestions,
    },
  });
  assert.equal(res.status, 200, JSON.stringify(res.body));
  const body = res.body as { score: number; maxScore: number };
  assert.equal(body.score, 2, "se conserva el comportamiento actual (corrige contra el payload)");
  const row = prisma.quizAttempt.rows.find((a) => a.id === attemptId);
  assert.ok(row);
  const grading = JSON.parse(String(row.grading ?? "{}"));
  assert.equal(grading.serverAuthoritative, false, "generadoresV2 → serverAuthoritative=false");
});
