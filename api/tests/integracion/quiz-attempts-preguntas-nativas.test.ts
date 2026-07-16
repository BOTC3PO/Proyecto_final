/**
 * Etapa 1 (Tiza — preguntas nativas) — `settings.preguntas` enchufado en
 * `quiz-attempts.ts` (submit/grading).
 *
 * Verifica:
 *  (a) Un quiz con `settings.preguntas` obtiene `maxScore = cantidadGlobal`
 *      al crear el intento.
 *  (b) El submit corrige contra la materialización del SERVIDOR (misma
 *      plantilla+seed que deriva `sortearCuestionarioPreguntas`): las
 *      obligatorias siempre entran, el relleno respeta la cantidad total.
 *  (c) Determinismo: dos alumnos, mismo quiz → cada uno reproducible
 *      consigo mismo (mismo seed → mismo resultado si se repite el submit).
 *  (d) Si el cuestionario declarado es inválido (límites insuficientes),
 *      el submit NO revienta: cae a `serverAuthoritative: false` (mismo
 *      criterio que una plantilla no materializable en el camino viejo).
 *  (e) REGRESIÓN EXPLÍCITA: un quiz SIN `settings.preguntas` (con
 *      `composition`, el modelo viejo) sigue resolviéndose exactamente
 *      igual que antes de Etapa 1 — el branch nuevo no lo toca.
 */

import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import { compile, parse } from "@vb/vblang";
import {
  prisma,
  resetPrisma,
  seedUser,
  tokenFor,
  startServer,
  jsonRequest,
} from "./_helpers/setup";
import {
  parseCuestionarioPreguntas,
  sortearCuestionarioPreguntas,
} from "../../src/lib/quiz-preguntas";
import { materializeVblangPool, questionHashPrefix } from "../../src/lib/vblang-materialize";

let baseUrl: string;
let close: () => Promise<void>;

const DOCENTE_ID = "docente-1";
const ALUMNO_ID = "alumno-1";
const ALUMNO_OTRO_ID = "alumno-2";
const ESCUELA_ID = "escuela-1";
const MOD_ID = "mod-1";
const QUIZ_ID = "quiz-preguntas";
const QV_ID = "qv-preguntas";
const PLANTILLA_OBL = "plantilla-obligatoria";
const PLANTILLA_REL = "plantilla-relleno";

const DSL_OBLIGATORIA = `variables:
  a: random(1, 10)
  b: random(1, 10)

enunciado: "Cuanto es {a} + {b}?"

respuesta: a + b
tolerancia: 0`;

const DSL_RELLENO = `variables:
  x: random(1, 20)

enunciado: "Cuanto es el doble de {x}?"

respuesta: x * 2
tolerancia: 0`;

const DSL_BY_ID: Record<string, string> = {
  [PLANTILLA_OBL]: DSL_OBLIGATORIA,
  [PLANTILLA_REL]: DSL_RELLENO,
};

/** Replica el mismo sorteo+materialización que `resolvePreguntasGrading`
 *  (server): mismo sorteo puro + `materializeVblangPool(..., count=1)`
 *  (que aplica el MISMO esquema de seed-por-intento `${seed}-${n}` que el
 *  servidor), para que el test pueda calcular las respuestas correctas sin
 *  duplicar la lógica de producción a mano. */
function clientMaterializePreguntas(
  preguntasSettings: unknown,
  ctx: { quizId: string; alumnoId: string; intento?: number },
) {
  const cuestionario = parseCuestionarioPreguntas(preguntasSettings);
  const resultado = sortearCuestionarioPreguntas(cuestionario, ctx);
  return resultado.slots.map((slot) => {
    const dsl = DSL_BY_ID[slot.pregunta.plantillaId];
    const compiled = compile(parse(dsl));
    const pool = materializeVblangPool(compiled, slot.seed, 1);
    assert.ok(pool.ok, `no se pudo materializar la plantilla ${slot.pregunta.plantillaId}`);
    return { slot, question: pool.questions[0] };
  });
}

function seedPlantilla(id: string, dsl: string) {
  prisma.plantillaEjercicio.rows.push({
    id,
    ownerUserId: DOCENTE_ID,
    schoolId: ESCUELA_ID,
    visibility: "escuela",
    nombre: id,
    descripcion: null,
    materia: "matematicas",
    tags: null,
    codigoDsl: dsl,
    version: 1,
    basadoEn: null,
    publicAprobado: false,
    isDeleted: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
}

function seedModuloYQuiz(settings: Record<string, unknown> | null) {
  prisma.modulo.rows.push({
    id: MOD_ID,
    slug: `mod-${Date.now()}`,
    titulo: "Modulo preguntas nativas",
    descripcion: "",
    visibility: "privado",
    schoolId: ESCUELA_ID,
    ownerUserId: DOCENTE_ID,
    teoriaId: null,
    tuesdayDocId: null,
    libroId: null,
    defaultQuestionCount: 3,
    dependencies: null,
    isDeleted: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
  prisma.quiz.rows.push({
    id: QUIZ_ID,
    moduleId: MOD_ID,
    title: "Quiz preguntas nativas",
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
    generatorId: null,
    generatorVersion: null,
    params: null,
    count: null,
    seedPolicy: 0,
    fixedSeed: null,
    settings: settings ? JSON.stringify(settings) : null,
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
  seedUser({ id: ALUMNO_ID, role: "STUDENT", schoolId: ESCUELA_ID });
  seedUser({ id: ALUMNO_OTRO_ID, role: "STUDENT", schoolId: ESCUELA_ID });
});

async function createAttempt(token: string): Promise<{ id: string; maxScore: number }> {
  const res = await jsonRequest(baseUrl, "POST", "/api/quiz-attempts", {
    token,
    body: { quizId: QUIZ_ID, moduleId: MOD_ID },
  });
  assert.equal(res.status, 201, JSON.stringify(res.body));
  const body = res.body as { id: string };
  // `maxScore` no viaja en el response del create (sólo intentosPrevios/
  // maxIntentos/timer) — se lee de la fila persistida, mismo criterio que
  // el resto de los tests de integración de este archivo.
  const row = prisma.quizAttempt.rows.find((a) => a.id === body.id);
  assert.ok(row, "el intento debe existir en la fila persistida");
  return { id: body.id, maxScore: row!.maxScore };
}

test("(a) maxScore al crear el intento == cantidadGlobal", async () => {
  seedPlantilla(PLANTILLA_OBL, DSL_OBLIGATORIA);
  seedPlantilla(PLANTILLA_REL, DSL_RELLENO);
  seedModuloYQuiz({
    type: "practica",
    preguntas: {
      cantidadGlobal: 3,
      preguntas: [
        { plantillaId: PLANTILLA_OBL, tipo: "obligatoria" },
        { plantillaId: PLANTILLA_REL, tipo: "relleno" },
      ],
    },
  });
  const token = tokenFor({ id: ALUMNO_ID, role: "STUDENT", schoolId: ESCUELA_ID });
  const { maxScore } = await createAttempt(token);
  assert.equal(maxScore, 3);
});

test("(b) el submit corrige contra la materialización del servidor (obligatoria + relleno)", async () => {
  seedPlantilla(PLANTILLA_OBL, DSL_OBLIGATORIA);
  seedPlantilla(PLANTILLA_REL, DSL_RELLENO);
  const preguntasSettings = {
    cantidadGlobal: 3,
    preguntas: [
      { plantillaId: PLANTILLA_OBL, tipo: "obligatoria" },
      { plantillaId: PLANTILLA_REL, tipo: "relleno" },
    ],
  };
  seedModuloYQuiz({ type: "practica", preguntas: preguntasSettings });
  const token = tokenFor({ id: ALUMNO_ID, role: "STUDENT", schoolId: ESCUELA_ID });
  const { id: attemptId } = await createAttempt(token);

  const materializadas = clientMaterializePreguntas(preguntasSettings, {
    quizId: QUIZ_ID,
    alumnoId: ALUMNO_ID,
    intento: 1,
  });
  assert.equal(materializadas.length, 3, "1 obligatoria + 2 de relleno = 3 slots");
  assert.equal(
    materializadas.filter((m) => m.slot.tipo === "obligatoria").length,
    1,
    "la obligatoria siempre entra",
  );

  const answers: Record<string, string> = {};
  for (const { question } of materializadas) answers[question.id] = String(question.answerKey);

  const res = await jsonRequest(baseUrl, "POST", `/api/quiz-attempts/${attemptId}/submit`, {
    token,
    body: { answers, presentedIds: materializadas.map((m) => m.question.id) },
  });
  assert.equal(res.status, 200, JSON.stringify(res.body));
  const body = res.body as { score: number; maxScore: number };
  assert.equal(body.maxScore, 3);
  assert.equal(body.score, 3, "respuestas correctas reales deben puntuar completo");

  const row = prisma.quizAttempt.rows.find((a) => a.id === attemptId);
  const grading = JSON.parse(String(row?.grading ?? "{}"));
  assert.equal(grading.serverAuthoritative, true);
});

test("(b2) respuestas incorrectas puntúan 0 (no le cree al payload)", async () => {
  seedPlantilla(PLANTILLA_OBL, DSL_OBLIGATORIA);
  const preguntasSettings = {
    cantidadGlobal: 1,
    preguntas: [{ plantillaId: PLANTILLA_OBL, tipo: "obligatoria" }],
  };
  seedModuloYQuiz({ type: "practica", preguntas: preguntasSettings });
  const token = tokenFor({ id: ALUMNO_ID, role: "STUDENT", schoolId: ESCUELA_ID });
  const { id: attemptId } = await createAttempt(token);

  const materializadas = clientMaterializePreguntas(preguntasSettings, {
    quizId: QUIZ_ID,
    alumnoId: ALUMNO_ID,
    intento: 1,
  });
  const answers: Record<string, string> = {};
  for (const { question } of materializadas) answers[question.id] = "un-numero-cualquiera-mal";

  const res = await jsonRequest(baseUrl, "POST", `/api/quiz-attempts/${attemptId}/submit`, {
    token,
    body: { answers },
  });
  assert.equal(res.status, 200, JSON.stringify(res.body));
  const body = res.body as { score: number; maxScore: number };
  assert.equal(body.maxScore, 1);
  assert.equal(body.score, 0, "respuesta incorrecta no debe puntuar");
  const row = prisma.quizAttempt.rows.find((a) => a.id === attemptId);
  const grading = JSON.parse(String(row?.grading ?? "{}"));
  assert.equal(grading.serverAuthoritative, true);
});

test("(c) determinismo: dos alumnos distintos reciben cada uno un sorteo reproducible consigo mismo", async () => {
  seedPlantilla(PLANTILLA_OBL, DSL_OBLIGATORIA);
  seedPlantilla(PLANTILLA_REL, DSL_RELLENO);
  const preguntasSettings = {
    cantidadGlobal: 3,
    preguntas: [
      { plantillaId: PLANTILLA_OBL, tipo: "obligatoria" },
      { plantillaId: PLANTILLA_REL, tipo: "relleno" },
    ],
  };
  const m1 = clientMaterializePreguntas(preguntasSettings, {
    quizId: QUIZ_ID,
    alumnoId: ALUMNO_ID,
    intento: 1,
  });
  const m2 = clientMaterializePreguntas(preguntasSettings, {
    quizId: QUIZ_ID,
    alumnoId: ALUMNO_ID,
    intento: 1,
  });
  // El `id` completo (`vb-<hash>-<contador>`) usa un contador GLOBAL de
  // módulo que NO es reproducible entre llamadas (documentado en
  // `questionHashPrefix`); el PREFIJO (`vb-<hash>`, depende sólo del seed)
  // sí lo es — mismo criterio que usa el propio servidor para casar
  // cliente↔servidor.
  assert.deepEqual(
    m1.map((m) => questionHashPrefix(m.question.id)),
    m2.map((m) => questionHashPrefix(m.question.id)),
    "mismo (quiz, alumno, intento) -> mismo resultado",
  );
  // Y el contenido (answerKey) también debe coincidir exactamente.
  assert.deepEqual(
    m1.map((m) => m.question.answerKey),
    m2.map((m) => m.question.answerKey),
  );
});

test("(d) cuestionario inválido (límites insuficientes) -> submit cae a serverAuthoritative:false, no revienta", async () => {
  seedPlantilla(PLANTILLA_OBL, DSL_OBLIGATORIA);
  // cantidadGlobal=5 con sólo 1 obligatoria y SIN relleno declarado: faltan
  // 4 preguntas de relleno -> inválido.
  seedModuloYQuiz({
    type: "practica",
    preguntas: {
      cantidadGlobal: 5,
      preguntas: [{ plantillaId: PLANTILLA_OBL, tipo: "obligatoria" }],
    },
  });
  const token = tokenFor({ id: ALUMNO_ID, role: "STUDENT", schoolId: ESCUELA_ID });
  const { id: attemptId } = await createAttempt(token);

  const res = await jsonRequest(baseUrl, "POST", `/api/quiz-attempts/${attemptId}/submit`, {
    token,
    body: { answers: {} },
  });
  assert.equal(res.status, 200, JSON.stringify(res.body));
  const row = prisma.quizAttempt.rows.find((a) => a.id === attemptId);
  const grading = JSON.parse(String(row?.grading ?? "{}"));
  assert.equal(grading.serverAuthoritative, false);
});

test("(e) REGRESIÓN: un quiz SIN settings.preguntas (composition viejo) no pasa por el branch nuevo", async () => {
  // Quiz con banco estático + composition "azar" tomar 2 de 3 — el camino
  // PRE-Etapa-1 (`resolveStoredPresented`). Confirma que `settings.preguntas`
  // ausente no activa `resolvePreguntasGrading` ni cambia el resultado.
  prisma.modulo.rows.push({
    id: MOD_ID,
    slug: `mod-comp-${Date.now()}`,
    titulo: "Modulo composition viejo",
    descripcion: "",
    visibility: "privado",
    schoolId: ESCUELA_ID,
    ownerUserId: DOCENTE_ID,
    teoriaId: null,
    tuesdayDocId: null,
    libroId: null,
    defaultQuestionCount: 3,
    dependencies: null,
    isDeleted: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
  prisma.quiz.rows.push({
    id: QUIZ_ID,
    moduleId: MOD_ID,
    title: "Quiz composition",
    currentVersionId: QV_ID,
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
  prisma.quizVersion.rows.push({
    id: QV_ID,
    quizId: QUIZ_ID,
    versionNumber: 1,
    questions: JSON.stringify([
      { id: "q1", answerKey: "1", points: 1 },
      { id: "q2", answerKey: "2", points: 1 },
      { id: "q3", answerKey: "3", points: 1 },
    ]),
    generatorId: null,
    generatorVersion: null,
    params: null,
    count: null,
    seedPolicy: 0,
    fixedSeed: "seed-fijo",
    settings: JSON.stringify({
      type: "practica",
      composition: { tomar: 2, seleccion: "fijo" },
    }),
    createdAt: new Date().toISOString(),
    createdBy: DOCENTE_ID,
  });
  const token = tokenFor({ id: ALUMNO_ID, role: "STUDENT", schoolId: ESCUELA_ID });
  const { id: attemptId, maxScore } = await createAttempt(token);
  // maxScore al crear sigue siendo `quiz.questions.length` (3) — el nuevo
  // branch de `cantidadGlobal` NO se activa sin `settings.preguntas`.
  assert.equal(maxScore, 3);

  // fijo/tomar=2 -> las primeras 2: q1, q2.
  const res = await jsonRequest(baseUrl, "POST", `/api/quiz-attempts/${attemptId}/submit`, {
    token,
    body: { answers: { q1: "1", q2: "2" }, presentedIds: ["q1", "q2"] },
  });
  assert.equal(res.status, 200, JSON.stringify(res.body));
  const body = res.body as { score: number; maxScore: number };
  assert.equal(body.maxScore, 2, "sólo las 2 presentadas por composition/tomar, comportamiento intacto");
  assert.equal(body.score, 2);
});

// PLAN-mostrar-preguntas-nativas-al-alumno — hasta acá el GET del intento
// sólo leía `quiz.questions` (legacy); un cuestionario preguntas-nativas
// devolvía `questions: []` y el alumno nunca veía nada. Estos tests cubren
// el GET, no sólo el submit (los de arriba ya lo hacían).
test("(f) GET /api/quiz-attempts/:id materializa las preguntas nativas para el alumno (antes devolvía [])", async () => {
  seedPlantilla(PLANTILLA_OBL, DSL_OBLIGATORIA);
  seedPlantilla(PLANTILLA_REL, DSL_RELLENO);
  const preguntasSettings = {
    cantidadGlobal: 3,
    preguntas: [
      { plantillaId: PLANTILLA_OBL, tipo: "obligatoria" },
      { plantillaId: PLANTILLA_REL, tipo: "relleno" },
    ],
  };
  seedModuloYQuiz({ type: "practica", preguntas: preguntasSettings });
  const token = tokenFor({ id: ALUMNO_ID, role: "STUDENT", schoolId: ESCUELA_ID });
  const { id: attemptId } = await createAttempt(token);

  const res = await jsonRequest(baseUrl, "GET", `/api/quiz-attempts/${attemptId}`, { token });
  assert.equal(res.status, 200, JSON.stringify(res.body));
  const body = res.body as { questions: Array<{ id: string; prompt?: string }> };
  assert.equal(body.questions.length, 3, "1 obligatoria + 2 de relleno = 3 preguntas para mostrar");
  for (const q of body.questions) {
    assert.ok(q.prompt && q.prompt.length > 0, "cada pregunta debe traer un enunciado materializado");
  }
});

test("(g) GET repetido del mismo intento devuelve los mismos ids (estable pese al contador global de idCounter)", async () => {
  seedPlantilla(PLANTILLA_OBL, DSL_OBLIGATORIA);
  const preguntasSettings = {
    cantidadGlobal: 1,
    preguntas: [{ plantillaId: PLANTILLA_OBL, tipo: "obligatoria" }],
  };
  seedModuloYQuiz({ type: "practica", preguntas: preguntasSettings });
  const token = tokenFor({ id: ALUMNO_ID, role: "STUDENT", schoolId: ESCUELA_ID });
  const { id: attemptId } = await createAttempt(token);

  const res1 = await jsonRequest(baseUrl, "GET", `/api/quiz-attempts/${attemptId}`, { token });
  const res2 = await jsonRequest(baseUrl, "GET", `/api/quiz-attempts/${attemptId}`, { token });
  const ids1 = (res1.body as { questions: Array<{ id: string }> }).questions.map((q) => q.id);
  const ids2 = (res2.body as { questions: Array<{ id: string }> }).questions.map((q) => q.id);
  assert.deepEqual(ids1, ids2, "dos GETs separados no deben devolver ids distintos para la misma pregunta");
});

test("(h) round-trip real: responder con los ids que dio el GET se corrige bien en el submit", async () => {
  seedPlantilla(PLANTILLA_OBL, DSL_OBLIGATORIA);
  seedPlantilla(PLANTILLA_REL, DSL_RELLENO);
  seedModuloYQuiz({
    type: "practica",
    preguntas: {
      cantidadGlobal: 2,
      preguntas: [
        { plantillaId: PLANTILLA_OBL, tipo: "obligatoria" },
        { plantillaId: PLANTILLA_REL, tipo: "relleno" },
      ],
    },
  });
  const token = tokenFor({ id: ALUMNO_ID, role: "STUDENT", schoolId: ESCUELA_ID });
  const { id: attemptId } = await createAttempt(token);

  const get = await jsonRequest(baseUrl, "GET", `/api/quiz-attempts/${attemptId}`, { token });
  const questions = (get.body as {
    questions: Array<{ id: string; answerKey?: string | string[] }>;
  }).questions;
  assert.equal(questions.length, 2);
  // El GET sanitiza la respuesta para el alumno (no debería traer
  // answerKey) — igual que el camino legacy. Resolvemos las respuestas
  // correctas del lado del test con el mismo motor que usa producción.
  const materializadas = clientMaterializePreguntas(
    { cantidadGlobal: 2, preguntas: [
      { plantillaId: PLANTILLA_OBL, tipo: "obligatoria" },
      { plantillaId: PLANTILLA_REL, tipo: "relleno" },
    ] },
    { quizId: QUIZ_ID, alumnoId: ALUMNO_ID, intento: 1 },
  );
  const answerByPrefix = new Map(
    materializadas.map((m) => [questionHashPrefix(m.question.id), String(m.question.answerKey)]),
  );
  const answers: Record<string, string> = {};
  for (const q of questions) {
    const key = answerByPrefix.get(questionHashPrefix(q.id));
    assert.ok(key !== undefined, `el id del GET (${q.id}) debe casar por prefijo con la materialización`);
    answers[q.id] = key!;
  }

  const submit = await jsonRequest(baseUrl, "POST", `/api/quiz-attempts/${attemptId}/submit`, {
    token,
    body: { answers, presentedIds: questions.map((q) => q.id) },
  });
  assert.equal(submit.status, 200, JSON.stringify(submit.body));
  const body = submit.body as { score: number; maxScore: number };
  assert.equal(body.maxScore, 2);
  assert.equal(body.score, 2, "responder con los ids/valores que dio el GET debe puntuar completo");
});

test("(i) anti-duplicado: la misma plantilla repetida en 2 slots nunca da el mismo enunciado", async () => {
  // Rango chico a propósito (sólo 3 valores posibles): sin anti-duplicado,
  // 2 slots independientes de la MISMA plantilla colisionarían (mismo n)
  // con probabilidad ~1/3 cada uno — en 20 alumnos distintos, la chance de
  // que NINGUNO colisione sin el fix es ~0.06%. Con el fix, ninguno debe.
  const DSL_RANGO_CHICO = `variables:
  n: random(1, 3)

enunciado: "Cuanto es n + n si n = {n}?"

respuesta: n + n
tolerancia: 0`;
  seedPlantilla(PLANTILLA_REL, DSL_RANGO_CHICO);
  seedModuloYQuiz({
    type: "practica",
    preguntas: {
      cantidadGlobal: 2,
      preguntas: [{ plantillaId: PLANTILLA_REL, tipo: "relleno", maxRepeticiones: 2 }],
    },
  });

  for (let i = 0; i < 20; i++) {
    const alumnoId = `alumno-antidup-${i}`;
    seedUser({ id: alumnoId, role: "STUDENT", schoolId: ESCUELA_ID });
    const token = tokenFor({ id: alumnoId, role: "STUDENT", schoolId: ESCUELA_ID });
    const { id: attemptId } = await createAttempt(token);
    const get = await jsonRequest(baseUrl, "GET", `/api/quiz-attempts/${attemptId}`, { token });
    assert.equal(get.status, 200, JSON.stringify(get.body));
    const prompts = (get.body as { questions: Array<{ prompt?: string }> }).questions.map(
      (q) => q.prompt,
    );
    assert.equal(prompts.length, 2);
    assert.notEqual(
      prompts[0],
      prompts[1],
      `alumno ${alumnoId}: los 2 enunciados no deberían repetirse dentro del mismo intento`,
    );
  }
});

test("(j) resumir el intento: responder una, 'irse y volver' (GET de nuevo), la respuesta guardada sigue ahí y se puede terminar", async () => {
  seedPlantilla(PLANTILLA_OBL, DSL_OBLIGATORIA);
  seedPlantilla(PLANTILLA_REL, DSL_RELLENO);
  const preguntasSettings = {
    cantidadGlobal: 2,
    preguntas: [
      { plantillaId: PLANTILLA_OBL, tipo: "obligatoria" },
      { plantillaId: PLANTILLA_REL, tipo: "relleno" },
    ],
  };
  seedModuloYQuiz({ type: "practica", preguntas: preguntasSettings });
  const token = tokenFor({ id: ALUMNO_ID, role: "STUDENT", schoolId: ESCUELA_ID });
  const { id: attemptId } = await createAttempt(token);

  // 1er GET ("abre el cuestionario").
  const get1 = await jsonRequest(baseUrl, "GET", `/api/quiz-attempts/${attemptId}`, { token });
  assert.equal(get1.status, 200);
  const body1 = get1.body as {
    status: string;
    questions: Array<{ id: string; answerKey?: string | string[] }>;
  };
  assert.equal(body1.status, "in_progress");
  assert.equal(body1.questions.length, 2);

  const materializadas = clientMaterializePreguntas(preguntasSettings, {
    quizId: QUIZ_ID,
    alumnoId: ALUMNO_ID,
    intento: 1,
  });
  const answerByPrefix = new Map(
    materializadas.map((m) => [questionHashPrefix(m.question.id), String(m.question.answerKey)]),
  );
  const primeraId = body1.questions[0].id;
  const primeraRespuesta = answerByPrefix.get(questionHashPrefix(primeraId));
  assert.ok(primeraRespuesta !== undefined);

  // Responde SÓLO la primera (F5-01, guardado incremental).
  const answerRes = await jsonRequest(baseUrl, "POST", `/api/quiz-attempts/${attemptId}/answer`, {
    token,
    body: { questionId: primeraId, response: primeraRespuesta },
  });
  assert.equal(answerRes.status, 200, JSON.stringify(answerRes.body));

  // "Se va y vuelve" — 2do GET: mismas preguntas (mismos ids), sigue
  // in_progress, y la respuesta ya contestada sigue guardada.
  const get2 = await jsonRequest(baseUrl, "GET", `/api/quiz-attempts/${attemptId}`, { token });
  assert.equal(get2.status, 200);
  const body2 = get2.body as {
    status: string;
    questions: Array<{ id: string }>;
    answers: Record<string, string>;
  };
  assert.equal(body2.status, "in_progress", "el intento sigue en curso, no se perdió al volver a entrar");
  assert.deepEqual(
    body2.questions.map((q) => q.id),
    body1.questions.map((q) => q.id),
    "las preguntas no cambian entre GETs del mismo intento en curso",
  );
  assert.equal(
    body2.answers[primeraId],
    primeraRespuesta,
    "la respuesta ya guardada sigue ahí al volver a entrar",
  );

  // Termina: responde la segunda y envía.
  const segundaId = body2.questions[1].id;
  const segundaRespuesta = answerByPrefix.get(questionHashPrefix(segundaId));
  assert.ok(segundaRespuesta !== undefined);
  const submit = await jsonRequest(baseUrl, "POST", `/api/quiz-attempts/${attemptId}/submit`, {
    token,
    body: {
      answers: { [primeraId]: primeraRespuesta!, [segundaId]: segundaRespuesta! },
      presentedIds: [primeraId, segundaId],
    },
  });
  assert.equal(submit.status, 200, JSON.stringify(submit.body));
  const submitBody = submit.body as { score: number; maxScore: number };
  assert.equal(submitBody.score, 2);
  assert.equal(submitBody.maxScore, 2);

  // Después de entregado, un intento de responder de nuevo se rechaza (no
  // se puede "seguir" un intento ya enviado).
  const answerDespues = await jsonRequest(baseUrl, "POST", `/api/quiz-attempts/${attemptId}/answer`, {
    token,
    body: { questionId: primeraId, response: primeraRespuesta },
  });
  assert.equal(answerDespues.status, 409, "un intento ya entregado no acepta más respuestas");
});
