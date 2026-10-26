/**
 * F3-04 — Política de intentos (límite + nota agregada + historial).
 *
 * Verifica:
 *  (a) maxIntentos ausente/0 → ilimitado (regresión cero, comportamiento previo).
 *  (b) maxIntentos=2 → el 3er intento del alumno sobre el mismo quiz se
 *      rechaza con 403 y code=max_attempts_reached.
 *  (c) Política "mejor" — summary.notaActual = max(score/maxScore) entre los
 *      intentos finalizados, ignorando in_progress.
 *  (d) Política "última" — summary.notaActual = score/maxScore del último
 *      intento finalizado (por submittedAt).
 *  (e) Política "primera" — summary.notaActual = score/maxScore del primer
 *      intento finalizado.
 *  (f) Política "promedio" — summary.notaActual = promedio de ratios.
 *  (g) Sin intentos finalizados → todas las notas son null.
 *  (h) Aislamiento alumno: GET /api/quiz-attempts sin aulaId y con userId
 *      ajeno al token → siempre devuelve SOLO los intentos del requester.
 *  (i) Aislamiento docente: GET /api/quiz-attempts?aulaId=X → valida
 *      membresía; docente del aula ve los intentos de sus alumnos; docente
 *      de OTRO aula es rechazado con 403.
 *  (j) Summary de otro alumno requiere aulaId y membresía (modos docente).
 *  (k) GET /api/quiz-attempts requiere autenticación → 401.
 *  (l) Defaults por tipo: type=formal → politicaNota="ultima", type=practica
 *      → politicaNota="mejor". Override en settings.politicaNota gana.
 *  (m) Score/maxScore=0 NO cuentan (open/ninguna sin clave).
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
const DOCENTE_OTRO_ID = "docente-otro";
const ALUMNO_ID = "alumno-1";
const ALUMNO_OTRO_ID = "alumno-2";
const ESCUELA_ID = "escuela-1";
const ESCUELA_OTRA_ID = "escuela-2";
const AULA_ID = "aula-1";
const AULA_OTRA_ID = "aula-2";
const MOD_ID = "mod-1";
const QUIZ_ID = "quiz-1";
const QV_ID = "qv-1";

function seedAulaBase() {
  prisma.clase.rows.push({
    id: AULA_ID,
    escuelaId: ESCUELA_ID,
    name: "5°B",
    grade: "5°",
    isDeleted: false,
    status: "ACTIVE",
    createdBy: DOCENTE_ID,
    createdAt: new Date().toISOString(),
  });
  prisma.claseMiembro.rows.push({
    claseId: AULA_ID,
    usuarioId: DOCENTE_ID,
    rolEnClase: "TEACHER",
  });
  prisma.claseMiembro.rows.push({
    claseId: AULA_ID,
    usuarioId: ALUMNO_ID,
    rolEnClase: "STUDENT",
  });
  // Aula separada con OTRO docente y el "alumno otro" — para verificar el
  // aislamiento docente-aula.
  prisma.clase.rows.push({
    id: AULA_OTRA_ID,
    escuelaId: ESCUELA_OTRA_ID,
    name: "4°A",
    grade: "4°",
    isDeleted: false,
    status: "ACTIVE",
    createdBy: DOCENTE_OTRO_ID,
    createdAt: new Date().toISOString(),
  });
  prisma.claseMiembro.rows.push({
    claseId: AULA_OTRA_ID,
    usuarioId: DOCENTE_OTRO_ID,
    rolEnClase: "TEACHER",
  });
  prisma.claseMiembro.rows.push({
    claseId: AULA_OTRA_ID,
    usuarioId: ALUMNO_OTRO_ID,
    rolEnClase: "STUDENT",
  });
  prisma.claseModulo.rows.push({
    claseId: AULA_ID,
    moduloId: MOD_ID,
    assignedAt: new Date().toISOString(),
    required: false,
  });
  prisma.modulo.rows.push({
    id: MOD_ID,
    slug: "mod-1",
    titulo: "Modulo 1",
    descripcion: "",
    visibility: "privado",
    schoolId: ESCUELA_ID,
    ownerUserId: DOCENTE_ID,
    dependencies: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
  prisma.quiz.rows.push({
    id: QUIZ_ID,
    moduleId: MOD_ID,
    title: "Quiz 1",
    currentVersionId: QV_ID,
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
}

/**
 * @param settings objeto que se serializa y se guarda en `QuizVersion.settings`.
 *   - `type`            : "practica" | "formal" | "competencia"
 *   - `maxIntentos`     : número ≥ 1, o 0/undefined para ilimitado
 *   - `politicaNota`    : "mejor" | "ultima" | "primera" | "promedio"
 */
function seedQuizVersionWithSettings(
  settings: {
    type?: string;
    maxIntentos?: number;
    politicaNota?: string;
  } | null
) {
  prisma.quizVersion.rows.push({
    id: QV_ID,
    quizId: QUIZ_ID,
    versionNumber: 1,
    questions: JSON.stringify([
      { id: "q1", answerKey: "1", points: 1, correccion: undefined, manualGrading: false }
    ]),
    generatorId: null,
    generatorVersion: "1",
    params: null,
    count: 1,
    seedPolicy: 0,
    fixedSeed: null,
    settings: settings ? JSON.stringify(settings) : null,
    createdAt: new Date().toISOString(),
    createdBy: DOCENTE_ID,
  });
}

async function createAttempt(
  token: string,
  expectedStatus: number = 201
): Promise<{ id: string; body: any }> {
  const res = await jsonRequest(baseUrl, "POST", "/api/quiz-attempts", {
    token,
    body: { quizId: QUIZ_ID, moduleId: MOD_ID }
  });
  assert.equal(res.status, expectedStatus, JSON.stringify(res.body));
  return { id: (res.body as any).id, body: res.body };
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
  seedUser({ id: DOCENTE_OTRO_ID, role: "TEACHER", schoolId: ESCUELA_OTRA_ID });
  seedUser({ id: ALUMNO_ID, role: "STUDENT", schoolId: ESCUELA_ID });
  seedUser({ id: ALUMNO_OTRO_ID, role: "STUDENT", schoolId: ESCUELA_OTRA_ID });
  seedAulaBase();
});

// =============================================================================
// (a) Ilimitados (regresión cero)
// =============================================================================

test("(a) maxIntentos ausente → ilimitado, alumno puede crear N intentos", async () => {
  seedQuizVersionWithSettings({ type: "practica" });
  const token = tokenFor({ id: ALUMNO_ID, role: "STUDENT", schoolId: ESCUELA_ID });

  for (let i = 0; i < 5; i++) {
    const r = await createAttempt(token);
    assert.equal(r.body.intentosRestantes, null, `intento ${i + 1}: debe ser ilimitado`);
  }
  assert.equal(prisma.quizAttempt.rows.length, 5);
});

test("(a2) maxIntentos=0 → ilimitado (alias histórico)", async () => {
  seedQuizVersionWithSettings({ type: "practica", maxIntentos: 0 });
  const token = tokenFor({ id: ALUMNO_ID, role: "STUDENT", schoolId: ESCUELA_ID });
  for (let i = 0; i < 3; i++) {
    const r = await createAttempt(token);
    assert.equal(r.body.intentosRestantes, null);
  }
});

// =============================================================================
// (b) Límite respetado
// =============================================================================

test("(b) maxIntentos=2 → el 3er intento se rechaza con 403 max_attempts_reached", async () => {
  seedQuizVersionWithSettings({ type: "practica", maxIntentos: 2 });
  const token = tokenFor({ id: ALUMNO_ID, role: "STUDENT", schoolId: ESCUELA_ID });

  const a1 = await createAttempt(token);
  assert.equal(a1.body.intentosRestantes, 1);
  const a2 = await createAttempt(token);
  assert.equal(a2.body.intentosRestantes, 0);
  const a3 = await createAttempt(token, 403);
  assert.equal((a3.body as any).code, "max_attempts_reached");
  assert.equal((a3.body as any).maxIntentos, 2);
  assert.equal((a3.body as any).intentosPrevios, 2);
  assert.equal(prisma.quizAttempt.rows.length, 2);
});

test("(b2) el límite es POR ALUMNO, no global", async () => {
  seedQuizVersionWithSettings({ type: "practica", maxIntentos: 1 });
  const tA = tokenFor({ id: ALUMNO_ID, role: "STUDENT", schoolId: ESCUELA_ID });
  const tB = tokenFor({ id: ALUMNO_OTRO_ID, role: "STUDENT", schoolId: ESCUELA_OTRA_ID });

  // El primer alumno agota su único intento. El segundo sigue pudiendo.
  await createAttempt(tA);
  const r1 = await createAttempt(tA, 403);
  assert.equal((r1.body as any).code, "max_attempts_reached");
  // El segundo alumno, sin intentos previos, puede crear el suyo.
  const r2 = await createAttempt(tB);
  assert.equal(r2.body.id, r2.body.attemptId);
  // Pero al segundo intento, también se le rechaza.
  const r3 = await createAttempt(tB, 403);
  assert.equal((r3.body as any).code, "max_attempts_reached");
});

// =============================================================================
// (c-f) Políticas
// =============================================================================

test("(c) política 'mejor' toma el máximo ratio entre los intentos finalizados", async () => {
  seedQuizVersionWithSettings({ type: "practica", politicaNota: "mejor" });
  const token = tokenFor({ id: ALUMNO_ID, role: "STUDENT", schoolId: ESCUELA_ID });
  // 2 intentos finalizados: ratios 0.5 y 0.8. La política mejor devuelve 0.8.
  prisma.quizAttempt.rows.push({
    id: "att-1",
    quizId: QUIZ_ID,
    quizVersionId: QV_ID,
    userId: ALUMNO_ID,
    status: "submitted",
    startedAt: "2024-01-01T10:00:00.000Z",
    submittedAt: "2024-01-01T10:05:00.000Z",
    score: 5,
    maxScore: 10, // ratio 0.5
    answers: "{}",
    feedback: null,
    grading: null,
    seed: null,
    seedPolicy: 0,
    attemptNo: 1
  });
  prisma.quizAttempt.rows.push({
    id: "att-2",
    quizId: QUIZ_ID,
    quizVersionId: QV_ID,
    userId: ALUMNO_ID,
    status: "submitted",
    startedAt: "2024-01-02T10:00:00.000Z",
    submittedAt: "2024-01-02T10:05:00.000Z",
    score: 8,
    maxScore: 10, // ratio 0.8
    answers: "{}",
    feedback: null,
    grading: null,
    seed: null,
    seedPolicy: 0,
    attemptNo: 2
  });
  // Un intento in_progress que NO cuenta.
  prisma.quizAttempt.rows.push({
    id: "att-3",
    quizId: QUIZ_ID,
    quizVersionId: QV_ID,
    userId: ALUMNO_ID,
    status: "in_progress",
    startedAt: "2024-01-03T10:00:00.000Z",
    submittedAt: null,
    score: 0,
    maxScore: 10,
    answers: "{}",
    feedback: null,
    grading: null,
    seed: null,
    seedPolicy: 0,
    attemptNo: 3
  });

  const res = await jsonRequest(baseUrl, "GET", `/api/quiz-attempts/summary?quizId=${QUIZ_ID}`, { token });
  assert.equal(res.status, 200);
  const body = res.body as Record<string, unknown>;
  assert.equal(body.politicaNota, "mejor");
  assert.equal(body.mejorNota, 0.8);
  assert.equal(body.ultimaNota, 0.8);
  assert.equal(body.primeraNota, 0.5);
  assert.ok(Math.abs((body.promedioNota as number) - 0.65) < 1e-9);
  assert.equal(body.notaActual, 0.8);
  assert.equal(body.intentosPrevios, 3);
  assert.equal((body.historial as any[]).length, 3);
});

test("(d) política 'ultima' toma el ratio del último intento finalizado (por submittedAt)", async () => {
  seedQuizVersionWithSettings({ type: "formal", politicaNota: "ultima" });
  const token = tokenFor({ id: ALUMNO_ID, role: "STUDENT", schoolId: ESCUELA_ID });
  // 3 intentos: ratios 0.3, 0.9, 0.6. Última (por submittedAt) = 0.6.
  prisma.quizAttempt.rows.push(
    {
      id: "att-1",
      quizId: QUIZ_ID,
      quizVersionId: QV_ID,
      userId: ALUMNO_ID,
      status: "submitted",
      startedAt: "2024-01-01T10:00:00.000Z",
      submittedAt: "2024-01-01T10:05:00.000Z",
      score: 3,
      maxScore: 10,
      answers: "{}",
      feedback: null,
      grading: null,
      seed: null,
      seedPolicy: 0,
      attemptNo: 1
    },
    {
      id: "att-2",
      quizId: QUIZ_ID,
      quizVersionId: QV_ID,
      userId: ALUMNO_ID,
      status: "submitted",
      startedAt: "2024-01-02T10:00:00.000Z",
      submittedAt: "2024-01-02T10:05:00.000Z",
      score: 9,
      maxScore: 10,
      answers: "{}",
      feedback: null,
      grading: null,
      seed: null,
      seedPolicy: 0,
      attemptNo: 2
    },
    {
      id: "att-3",
      quizId: QUIZ_ID,
      quizVersionId: QV_ID,
      userId: ALUMNO_ID,
      status: "submitted",
      startedAt: "2024-01-03T10:00:00.000Z",
      submittedAt: "2024-01-03T10:05:00.000Z",
      score: 6,
      maxScore: 10,
      answers: "{}",
      feedback: null,
      grading: null,
      seed: null,
      seedPolicy: 0,
      attemptNo: 3
    }
  );

  const res = await jsonRequest(baseUrl, "GET", `/api/quiz-attempts/summary?quizId=${QUIZ_ID}`, { token });
  assert.equal(res.status, 200);
  const body = res.body as Record<string, unknown>;
  assert.equal(body.politicaNota, "ultima");
  assert.equal(body.notaActual, 0.6);
  assert.equal(body.ultimaNota, 0.6);
  assert.equal(body.mejorNota, 0.9);
  assert.equal(body.primeraNota, 0.3);
});

test("(e) política 'primera' toma el ratio del primer intento finalizado", async () => {
  seedQuizVersionWithSettings({ type: "practica", politicaNota: "primera" });
  const token = tokenFor({ id: ALUMNO_ID, role: "STUDENT", schoolId: ESCUELA_ID });
  prisma.quizAttempt.rows.push(
    {
      id: "att-1",
      quizId: QUIZ_ID,
      quizVersionId: QV_ID,
      userId: ALUMNO_ID,
      status: "submitted",
      startedAt: "2024-01-01T10:00:00.000Z",
      submittedAt: "2024-01-01T10:05:00.000Z",
      score: 3,
      maxScore: 10,
      answers: "{}",
      feedback: null,
      grading: null,
      seed: null,
      seedPolicy: 0,
      attemptNo: 1
    },
    {
      id: "att-2",
      quizId: QUIZ_ID,
      quizVersionId: QV_ID,
      userId: ALUMNO_ID,
      status: "submitted",
      startedAt: "2024-01-02T10:00:00.000Z",
      submittedAt: "2024-01-02T10:05:00.000Z",
      score: 9,
      maxScore: 10,
      answers: "{}",
      feedback: null,
      grading: null,
      seed: null,
      seedPolicy: 0,
      attemptNo: 2
    }
  );
  const res = await jsonRequest(baseUrl, "GET", `/api/quiz-attempts/summary?quizId=${QUIZ_ID}`, { token });
  const body = res.body as Record<string, unknown>;
  assert.equal(body.politicaNota, "primera");
  assert.equal(body.notaActual, 0.3);
});

test("(f) política 'promedio' devuelve la media de los ratios", async () => {
  seedQuizVersionWithSettings({ type: "practica", politicaNota: "promedio" });
  const token = tokenFor({ id: ALUMNO_ID, role: "STUDENT", schoolId: ESCUELA_ID });
  prisma.quizAttempt.rows.push(
    {
      id: "att-1",
      quizId: QUIZ_ID,
      quizVersionId: QV_ID,
      userId: ALUMNO_ID,
      status: "submitted",
      startedAt: "2024-01-01T10:00:00.000Z",
      submittedAt: "2024-01-01T10:05:00.000Z",
      score: 2,
      maxScore: 10,
      answers: "{}",
      feedback: null,
      grading: null,
      seed: null,
      seedPolicy: 0,
      attemptNo: 1
    },
    {
      id: "att-2",
      quizId: QUIZ_ID,
      quizVersionId: QV_ID,
      userId: ALUMNO_ID,
      status: "submitted",
      startedAt: "2024-01-02T10:00:00.000Z",
      submittedAt: "2024-01-02T10:05:00.000Z",
      score: 6,
      maxScore: 10,
      answers: "{}",
      feedback: null,
      grading: null,
      seed: null,
      seedPolicy: 0,
      attemptNo: 2
    },
    {
      id: "att-3",
      quizId: QUIZ_ID,
      quizVersionId: QV_ID,
      userId: ALUMNO_ID,
      status: "submitted",
      startedAt: "2024-01-03T10:00:00.000Z",
      submittedAt: "2024-01-03T10:05:00.000Z",
      score: 10,
      maxScore: 10,
      answers: "{}",
      feedback: null,
      grading: null,
      seed: null,
      seedPolicy: 0,
      attemptNo: 3
    }
  );
  const res = await jsonRequest(baseUrl, "GET", `/api/quiz-attempts/summary?quizId=${QUIZ_ID}`, { token });
  const body = res.body as Record<string, unknown>;
  assert.equal(body.politicaNota, "promedio");
  assert.ok(Math.abs((body.notaActual as number) - 0.6) < 1e-9);
});

test("(g) sin intentos finalizados → todas las notas son null", async () => {
  seedQuizVersionWithSettings({ type: "practica" });
  const token = tokenFor({ id: ALUMNO_ID, role: "STUDENT", schoolId: ESCUELA_ID });
  const res = await jsonRequest(baseUrl, "GET", `/api/quiz-attempts/summary?quizId=${QUIZ_ID}`, { token });
  const body = res.body as Record<string, unknown>;
  assert.equal(body.notaActual, null);
  assert.equal(body.mejorNota, null);
  assert.equal(body.ultimaNota, null);
  assert.equal(body.primeraNota, null);
  assert.equal(body.promedioNota, null);
  assert.equal(body.intentosPrevios, 0);
});

// =============================================================================
// (h-j) Aislamiento
// =============================================================================

test("(h) GET /api/quiz-attempts sin aulaId → solo veo MIS intentos (userId del query se ignora)", async () => {
  seedQuizVersionWithSettings({ type: "practica" });
  prisma.quizAttempt.rows.push(
    {
      id: "att-mine-1",
      quizId: QUIZ_ID,
      quizVersionId: QV_ID,
      userId: ALUMNO_ID,
      status: "submitted",
      startedAt: "2024-01-01T10:00:00.000Z",
      submittedAt: "2024-01-01T10:05:00.000Z",
      score: 5,
      maxScore: 10,
      answers: "{}",
      feedback: null,
      grading: null,
      seed: null,
      seedPolicy: 0,
      attemptNo: 1
    },
    {
      id: "att-other-1",
      quizId: QUIZ_ID,
      quizVersionId: QV_ID,
      userId: ALUMNO_OTRO_ID,
      status: "submitted",
      startedAt: "2024-01-02T10:00:00.000Z",
      submittedAt: "2024-01-02T10:05:00.000Z",
      score: 7,
      maxScore: 10,
      answers: "{}",
      feedback: null,
      grading: null,
      seed: null,
      seedPolicy: 0,
      attemptNo: 1
    }
  );
  const token = tokenFor({ id: ALUMNO_ID, role: "STUDENT", schoolId: ESCUELA_ID });
  // Intenta explícitamente pedir el resumen de OTRO alumno, sin aulaId.
  const res = await jsonRequest(
    baseUrl,
    "GET",
    `/api/quiz-attempts?quizId=${QUIZ_ID}&userId=${ALUMNO_OTRO_ID}`,
    { token }
  );
  assert.equal(res.status, 200);
  const body = res.body as { items: Array<{ userId: string }>; total: number };
  assert.equal(body.total, 1, "solo debe ver 1 intento (el suyo)");
  assert.equal(body.items[0].userId, ALUMNO_ID);
});

test("(i) GET /api/quiz-attempts?aulaId=X como docente del aula → veo los intentos de MIS alumnos", async () => {
  seedQuizVersionWithSettings({ type: "practica" });
  prisma.quizAttempt.rows.push(
    {
      id: "att-mine-1",
      quizId: QUIZ_ID,
      quizVersionId: QV_ID,
      userId: ALUMNO_ID,
      status: "submitted",
      startedAt: "2024-01-01T10:00:00.000Z",
      submittedAt: "2024-01-01T10:05:00.000Z",
      score: 5,
      maxScore: 10,
      answers: "{}",
      feedback: null,
      grading: null,
      seed: null,
      seedPolicy: 0,
      attemptNo: 1
    },
    {
      id: "att-other-1",
      quizId: QUIZ_ID,
      quizVersionId: QV_ID,
      userId: ALUMNO_OTRO_ID, // pertenece al AULA_OTRA, no al AULA_ID
      status: "submitted",
      startedAt: "2024-01-02T10:00:00.000Z",
      submittedAt: "2024-01-02T10:05:00.000Z",
      score: 7,
      maxScore: 10,
      answers: "{}",
      feedback: null,
      grading: null,
      seed: null,
      seedPolicy: 0,
      attemptNo: 1
    }
  );
  const tokenDocente = tokenFor({ id: DOCENTE_ID, role: "TEACHER", schoolId: ESCUELA_ID });
  const res = await jsonRequest(
    baseUrl,
    "GET",
    `/api/quiz-attempts?quizId=${QUIZ_ID}&aulaId=${AULA_ID}`,
    { token: tokenDocente }
  );
  assert.equal(res.status, 200);
  const body = res.body as { items: Array<{ userId: string }>; total: number };
  // El docente del AULA_ID ve los intentos de su alumno (ALUMNO_ID), NO los
  // del AULA_OTRA_ID.
  assert.equal(body.total, 1);
  assert.equal(body.items[0].userId, ALUMNO_ID);
});

test("(i2) GET /api/quiz-attempts?aulaId=X como docente de OTRO aula → 403", async () => {
  seedQuizVersionWithSettings({ type: "practica" });
  // El docente "otro" pertenece a AULA_OTRA, no a AULA_ID.
  const tokenOtro = tokenFor({ id: DOCENTE_OTRO_ID, role: "TEACHER", schoolId: ESCUELA_OTRA_ID });
  const res = await jsonRequest(
    baseUrl,
    "GET",
    `/api/quiz-attempts?quizId=${QUIZ_ID}&aulaId=${AULA_ID}`,
    { token: tokenOtro }
  );
  assert.equal(res.status, 403);
});

test("(i3) GET /api/quiz-attempts?aulaId=X como alumno → 403 (sólo staff)", async () => {
  seedQuizVersionWithSettings({ type: "practica" });
  const tokenAlumno = tokenFor({ id: ALUMNO_ID, role: "STUDENT", schoolId: ESCUELA_ID });
  const res = await jsonRequest(
    baseUrl,
    "GET",
    `/api/quiz-attempts?quizId=${QUIZ_ID}&aulaId=${AULA_ID}`,
    { token: tokenAlumno }
  );
  assert.equal(res.status, 403);
});

test("(i4) GET /api/quiz-attempts?aulaId=X como directivo de la escuela → 200 (no es miembro del aula pero es directivo)", async () => {
  seedQuizVersionWithSettings({ type: "practica" });
  prisma.quizAttempt.rows.push({
    id: "att-mine-1",
    quizId: QUIZ_ID,
    quizVersionId: QV_ID,
    userId: ALUMNO_ID,
    status: "submitted",
    startedAt: "2024-01-01T10:00:00.000Z",
    submittedAt: "2024-01-01T10:05:00.000Z",
    score: 5,
    maxScore: 10,
    answers: "{}",
    feedback: null,
    grading: null,
    seed: null,
    seedPolicy: 0,
    attemptNo: 1
  });
  const directivoId = "directivo-1";
  seedUser({ id: directivoId, role: "DIRECTIVO", schoolId: ESCUELA_ID });
  const tokenDirectivo = tokenFor({ id: directivoId, role: "DIRECTIVO", schoolId: ESCUELA_ID });
  const res = await jsonRequest(
    baseUrl,
    "GET",
    `/api/quiz-attempts?quizId=${QUIZ_ID}&aulaId=${AULA_ID}`,
    { token: tokenDirectivo }
  );
  assert.equal(res.status, 200);
  const body = res.body as { items: Array<{ userId: string }>; total: number };
  assert.equal(body.total, 1);
});

test("(j) summary de otro alumno sin aulaId → 400; con aulaId y membresía → 200", async () => {
  seedQuizVersionWithSettings({ type: "practica" });
  prisma.quizAttempt.rows.push({
    id: "att-other",
    quizId: QUIZ_ID,
    quizVersionId: QV_ID,
    userId: ALUMNO_ID,
    status: "submitted",
    startedAt: "2024-01-01T10:00:00.000Z",
    submittedAt: "2024-01-01T10:05:00.000Z",
    score: 5,
    maxScore: 10,
    answers: "{}",
    feedback: null,
    grading: null,
    seed: null,
    seedPolicy: 0,
    attemptNo: 1
  });
  const tokenDocente = tokenFor({ id: DOCENTE_ID, role: "TEACHER", schoolId: ESCUELA_ID });

  // Sin aulaId → 400.
  const r1 = await jsonRequest(
    baseUrl,
    "GET",
    `/api/quiz-attempts/summary?quizId=${QUIZ_ID}&userId=${ALUMNO_ID}`,
    { token: tokenDocente }
  );
  assert.equal(r1.status, 400);

  // Con aulaId correcta → 200.
  const r2 = await jsonRequest(
    baseUrl,
    "GET",
    `/api/quiz-attempts/summary?quizId=${QUIZ_ID}&userId=${ALUMNO_ID}&aulaId=${AULA_ID}`,
    { token: tokenDocente }
  );
  assert.equal(r2.status, 200);
  const body = r2.body as Record<string, unknown>;
  assert.equal(body.userId, ALUMNO_ID);
  assert.equal(body.mejorNota, 0.5);
});

// =============================================================================
// (k-l) Auth y defaults por tipo
// =============================================================================

test("(k) GET /api/quiz-attempts sin token → 401", async () => {
  seedQuizVersionWithSettings({ type: "practica" });
  const res = await jsonRequest(baseUrl, "GET", `/api/quiz-attempts?quizId=${QUIZ_ID}`);
  assert.equal(res.status, 401);
});

test("(l1) type=formal + sin override → default politicaNota='ultima'", async () => {
  seedQuizVersionWithSettings({ type: "formal" });
  const token = tokenFor({ id: ALUMNO_ID, role: "STUDENT", schoolId: ESCUELA_ID });
  const res = await jsonRequest(baseUrl, "GET", `/api/quiz-attempts/summary?quizId=${QUIZ_ID}`, { token });
  const body = res.body as Record<string, unknown>;
  assert.equal(body.politicaNota, "ultima");
});

test("(l2) type=practica + sin override → default politicaNota='mejor'", async () => {
  seedQuizVersionWithSettings({ type: "practica" });
  const token = tokenFor({ id: ALUMNO_ID, role: "STUDENT", schoolId: ESCUELA_ID });
  const res = await jsonRequest(baseUrl, "GET", `/api/quiz-attempts/summary?quizId=${QUIZ_ID}`, { token });
  const body = res.body as Record<string, unknown>;
  assert.equal(body.politicaNota, "mejor");
});

test("(l3) settings con politicaNota='promedio' + type='practica' → override gana", async () => {
  seedQuizVersionWithSettings({ type: "practica", politicaNota: "promedio" });
  const token = tokenFor({ id: ALUMNO_ID, role: "STUDENT", schoolId: ESCUELA_ID });
  const res = await jsonRequest(baseUrl, "GET", `/api/quiz-attempts/summary?quizId=${QUIZ_ID}`, { token });
  const body = res.body as Record<string, unknown>;
  assert.equal(body.politicaNota, "promedio");
});

test("(l4) settings mal formado (JSON inválido) → defaults", async () => {
  // Insertamos un settings con JSON inválido.
  prisma.quizVersion.rows.push({
    id: QV_ID,
    quizId: QUIZ_ID,
    versionNumber: 1,
    questions: "[]",
    generatorId: null,
    generatorVersion: "1",
    params: null,
    count: 0,
    seedPolicy: 0,
    fixedSeed: null,
    settings: "{invalid json",
    createdAt: new Date().toISOString(),
    createdBy: DOCENTE_ID
  });
  const token = tokenFor({ id: ALUMNO_ID, role: "STUDENT", schoolId: ESCUELA_ID });
  const res = await jsonRequest(baseUrl, "GET", `/api/quiz-attempts/summary?quizId=${QUIZ_ID}`, { token });
  const body = res.body as Record<string, unknown>;
  assert.equal(body.politicaNota, "mejor"); // default practica
  assert.equal(body.maxIntentos, null); // ilimitado
});

// =============================================================================
// (m) edge cases de la política
// =============================================================================

test("(m1) intentos con maxScore=0 NO cuentan para la política", async () => {
  seedQuizVersionWithSettings({ type: "practica", politicaNota: "mejor" });
  const token = tokenFor({ id: ALUMNO_ID, role: "STUDENT", schoolId: ESCUELA_ID });
  prisma.quizAttempt.rows.push(
    {
      id: "att-1",
      quizId: QUIZ_ID,
      quizVersionId: QV_ID,
      userId: ALUMNO_ID,
      status: "submitted",
      startedAt: "2024-01-01T10:00:00.000Z",
      submittedAt: "2024-01-01T10:05:00.000Z",
      score: 0,
      maxScore: 0,
      answers: "{}",
      feedback: null,
      grading: null,
      seed: null,
      seedPolicy: 0,
      attemptNo: 1
    },
    {
      id: "att-2",
      quizId: QUIZ_ID,
      quizVersionId: QV_ID,
      userId: ALUMNO_ID,
      status: "submitted",
      startedAt: "2024-01-02T10:00:00.000Z",
      submittedAt: "2024-01-02T10:05:00.000Z",
      score: 7,
      maxScore: 10,
      answers: "{}",
      feedback: null,
      grading: null,
      seed: null,
      seedPolicy: 0,
      attemptNo: 2
    }
  );
  const res = await jsonRequest(baseUrl, "GET", `/api/quiz-attempts/summary?quizId=${QUIZ_ID}`, { token });
  const body = res.body as Record<string, unknown>;
  assert.equal(body.mejorNota, 0.7, "no debe considerar el ratio del intento con maxScore=0");
  assert.equal(body.intentosPrevios, 2, "cuenta los 2 intentos (para el límite), pero sólo 1 es finalizable");
});

test("(m2) el límite se chequea contando TODOS los estados no-aborted (in_progress también cuenta)", async () => {
  seedQuizVersionWithSettings({ type: "practica", maxIntentos: 1 });
  // Un intento in_progress pre-existente del alumno.
  prisma.quizAttempt.rows.push({
    id: "att-inprog",
    quizId: QUIZ_ID,
    quizVersionId: QV_ID,
    userId: ALUMNO_ID,
    status: "in_progress",
    startedAt: "2024-01-01T10:00:00.000Z",
    submittedAt: null,
    score: 0,
    maxScore: 10,
    answers: "{}",
    feedback: null,
    grading: null,
    seed: null,
    seedPolicy: 0,
    attemptNo: 1
  });
  const token = tokenFor({ id: ALUMNO_ID, role: "STUDENT", schoolId: ESCUELA_ID });
  // El alumno ya gastó su única vida (in_progress) → POST se rechaza.
  const res = await jsonRequest(baseUrl, "POST", "/api/quiz-attempts", {
    token,
    body: { quizId: QUIZ_ID, moduleId: MOD_ID }
  });
  assert.equal(res.status, 403);
  assert.equal((res.body as any).code, "max_attempts_reached");
});

// =============================================================================
// (n) WO-T2a — "revisar" (GET) un intento ya finalizado no consume cupo
// =============================================================================

test("(n) GET /api/quiz-attempts/:id (revisar) repetidas veces NO crea ni consume un intento nuevo", async () => {
  seedQuizVersionWithSettings({ type: "practica", maxIntentos: 1 });
  const token = tokenFor({ id: ALUMNO_ID, role: "STUDENT", schoolId: ESCUELA_ID });

  // El alumno agota su único intento.
  const a1 = await createAttempt(token);
  assert.equal(prisma.quizAttempt.rows.length, 1);

  // Revisar (GET) el mismo intento varias veces no debe crear filas nuevas
  // ni cambiar el conteo que usa `validarLimiteIntentos`.
  for (let i = 0; i < 3; i++) {
    const res = await jsonRequest(baseUrl, "GET", `/api/quiz-attempts/${a1.id}`, { token });
    assert.equal(res.status, 200);
    assert.equal((res.body as any).status, "in_progress");
  }
  assert.equal(prisma.quizAttempt.rows.length, 1, "revisar no debe crear intentos nuevos");

  // El límite sigue agotado: un segundo POST real se sigue rechazando.
  const a2 = await createAttempt(token, 403);
  assert.equal((a2.body as any).code, "max_attempts_reached");
  assert.equal(prisma.quizAttempt.rows.length, 1);
});

test("(n2) GET /api/quiz-attempts/:id expone score/maxScore para el resumen de revisión", async () => {
  seedQuizVersionWithSettings({ type: "practica" });
  prisma.quizAttempt.rows.push({
    id: "att-finished",
    quizId: QUIZ_ID,
    quizVersionId: QV_ID,
    userId: ALUMNO_ID,
    status: "submitted",
    startedAt: "2024-01-01T10:00:00.000Z",
    submittedAt: "2024-01-01T10:05:00.000Z",
    score: 7,
    maxScore: 10,
    answers: "{}",
    feedback: null,
    grading: null,
    seed: null,
    seedPolicy: 0,
    attemptNo: 1
  });
  const token = tokenFor({ id: ALUMNO_ID, role: "STUDENT", schoolId: ESCUELA_ID });
  const res = await jsonRequest(baseUrl, "GET", `/api/quiz-attempts/att-finished`, { token });
  assert.equal(res.status, 200);
  const body = res.body as Record<string, unknown>;
  assert.equal(body.status, "submitted");
  assert.equal(body.score, 7);
  assert.equal(body.maxScore, 10);
});
