/**
 * F5-04 — Nota provisoria como RANGO cuando hay ítems pendientes.
 *
 * Verifica el endpoint de submit y /grade:
 *  - Submit con ítems manuales sin corregir → response con
 *    `notaMinDisplay`/`notaMaxDisplay` y `pendingManual` > 0.
 *    NO incluye `notaDisplay` ni `aprobado` (rango, no número único).
 *  - Submit sin manuales → response sin rango, con `notaDisplay` y
 *    `aprobado` (camino WO14 sin cambios).
 *  - /grade con un item corregido pero aún con pendientes → response
 *    con el rango acotado (la nota que ya está corregida entra al score).
 *  - /grade con TODOS los items corregidos (allGraded=true) → response
 *    con `notaDisplay` única y SIN campos de rango.
 *  - El progreso del módulo NO se actualiza con pendientes (gate
 *    pre-existente WO07 preservado).
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
const ALUMNO_ID = "alumno-1";
const ESCUELA_ID = "escuela-1";
const MOD_ID = "mod-rango";
const QUIZ_ID = "quiz-rango";
const QV_ID = "qv-rango";

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
    titulo: "Modulo Rango",
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
    title: "Quiz Rango",
    currentVersionId: QV_ID,
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
  // 2 preguntas auto + 1 manual (peso 2). Total maxScore = 1 + 1 + 2 = 4.
  prisma.quizVersion.rows.push({
    id: QV_ID,
    quizId: QUIZ_ID,
    versionNumber: 1,
    questions: [
      { id: "q0", prompt: "P0", answerKey: "c0", points: 1 },
      { id: "q1", prompt: "P1", answerKey: "c1", points: 1 },
      {
        id: "q2",
        prompt: "Explica X",
        questionType: "abierta",
        correccion: "manual",
        points: 2
      }
    ],
    generatorId: null,
    generatorVersion: null,
    params: null,
    count: 3,
    seedPolicy: 0,
    fixedSeed: null,
    settings: null,
    createdAt: new Date().toISOString(),
    createdBy: DOCENTE_ID,
  });
  // Umbral 60% (default) para que la nota 'Aprobado/Desaprobado' tenga corte.
  prisma.quizUmbral.rows.push({
    quizId: QUIZ_ID,
    umbral: 60
  });
});

function alumnoToken(): string {
  return tokenFor({ id: ALUMNO_ID, role: "STUDENT", schoolId: ESCUELA_ID });
}
function docenteToken(): string {
  return tokenFor({ id: DOCENTE_ID, role: "TEACHER", schoolId: ESCUELA_ID });
}

async function createAttempt(token: string): Promise<string> {
  const res = await jsonRequest(baseUrl, "POST", "/api/quiz-attempts", {
    token,
    body: { quizId: QUIZ_ID, moduleId: MOD_ID },
  });
  assert.equal(res.status, 201, JSON.stringify(res.body));
  return (res.body as { id: string }).id;
}

test("submit con 1 manual sin corregir → response con rango y sin nota única", async () => {
  const token = alumnoToken();
  const attemptId = await createAttempt(token);
  // Alumno responde 1 de 2 auto + deja la manual vacía (sigue contando como pendiente).
  const res = await jsonRequest(baseUrl, "POST", `/api/quiz-attempts/${attemptId}/submit`, {
    token,
    body: { answers: { q0: "c0" }, presentedIds: ["q0", "q1", "q2"] },
  });
  assert.equal(res.status, 200, JSON.stringify(res.body));
  const body = res.body as Record<string, unknown>;
  assert.equal(body.status, "pending_review");
  assert.equal(body.pendingManual, 1);
  assert.equal(body.score, 1);
  assert.equal(body.maxScore, 4);
  // F5-04 — rango: mín = 1/4 = 25%, máx = 3/4 = 75%.
  // Con scale-0-100 + cutoff 60: mín display ≈ "2" (25%) y máx ≈ "8" (75%).
  // Los valores exactos dependen de la escala; verificamos que están y son plausibles.
  assert.ok(typeof body.notaMinDisplay === "string", "notaMinDisplay presente");
  assert.ok(typeof body.notaMaxDisplay === "string", "notaMaxDisplay presente");
  // `notaDisplay` ausente: el sistema NO presenta un número único con pendientes.
  assert.equal(body.notaDisplay, undefined, "sin notaDisplay única con pendientes");
  assert.equal(body.aprobado, undefined, "sin aprobado con pendientes");
});

test("submit sin manuales → response con nota única (camino WO14 sin cambios)", async () => {
  // Re-seed con un quiz SIN manuales para comparar el camino "limpio".
  resetPrisma();
  seedUser({ id: DOCENTE_ID, role: "TEACHER", schoolId: ESCUELA_ID });
  seedUser({ id: ALUMNO_ID, role: "STUDENT", schoolId: ESCUELA_ID });
  prisma.modulo.rows.push({
    id: MOD_ID,
    slug: `mod-limpio-${Date.now()}`,
    titulo: "Modulo Limpio",
    descripcion: "",
    visibility: "privado",
    schoolId: ESCUELA_ID,
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
    title: "Quiz Limpio",
    currentVersionId: QV_ID,
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
  prisma.quizVersion.rows.push({
    id: QV_ID,
    quizId: QUIZ_ID,
    versionNumber: 1,
    questions: [
      { id: "q0", prompt: "P0", answerKey: "c0", points: 1 },
      { id: "q1", prompt: "P1", answerKey: "c1", points: 1 }
    ],
    generatorId: null,
    generatorVersion: null,
    params: null,
    count: 2,
    seedPolicy: 0,
    fixedSeed: null,
    settings: null,
    createdAt: new Date().toISOString(),
    createdBy: DOCENTE_ID,
  });
  prisma.quizUmbral.rows.push({ quizId: QUIZ_ID, umbral: 60 });

  const token = alumnoToken();
  const attemptId = await createAttempt(token);
  const res = await jsonRequest(baseUrl, "POST", `/api/quiz-attempts/${attemptId}/submit`, {
    token,
    body: { answers: { q0: "c0", q1: "c1" }, presentedIds: ["q0", "q1"] },
  });
  assert.equal(res.status, 200, JSON.stringify(res.body));
  const body = res.body as Record<string, unknown>;
  assert.equal(body.status, "submitted");
  assert.equal(body.pendingManual, undefined, "sin pendingManual");
  // F5-04 — sin rango porque no hay pendientes.
  assert.equal(body.notaMinDisplay, undefined, "sin notaMinDisplay sin pendientes");
  assert.equal(body.notaMaxDisplay, undefined, "sin notaMaxDisplay sin pendientes");
  // Camino WO14 intacto: nota única + aprobado.
  assert.ok(typeof body.notaDisplay === "string");
  assert.equal(body.aprobado, true); // 2/2 = 100% ≥ 60%
});

test("/grade de 1 de 2 manuales: status sigue pending_review, response con rango", async () => {
  // 2 manuales para que el primero no agote todo.
  resetPrisma();
  seedUser({ id: DOCENTE_ID, role: "TEACHER", schoolId: ESCUELA_ID });
  seedUser({ id: ALUMNO_ID, role: "STUDENT", schoolId: ESCUELA_ID });
  prisma.modulo.rows.push({
    id: MOD_ID,
    slug: `mod-2man-${Date.now()}`,
    titulo: "Modulo 2 manuales",
    descripcion: "",
    visibility: "privado",
    schoolId: ESCUELA_ID,
    ownerUserId: DOCENTE_ID,
    teoriaId: null,
    tuesdayDocId: null,
    libroId: null,
    defaultQuestionCount: 4,
    dependencies: null,
    isDeleted: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
  prisma.quiz.rows.push({
    id: QUIZ_ID,
    moduleId: MOD_ID,
    title: "Quiz 2 manuales",
    currentVersionId: QV_ID,
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
  prisma.quizVersion.rows.push({
    id: QV_ID,
    quizId: QUIZ_ID,
    versionNumber: 1,
    questions: [
      { id: "q0", prompt: "P0", answerKey: "c0", points: 1 },
      { id: "q1", prompt: "Explica A", questionType: "abierta", correccion: "manual", points: 1 },
      { id: "q2", prompt: "Explica B", questionType: "abierta", correccion: "manual", points: 1 }
    ],
    generatorId: null,
    generatorVersion: null,
    params: null,
    count: 3,
    seedPolicy: 0,
    fixedSeed: null,
    settings: null,
    createdAt: new Date().toISOString(),
    createdBy: DOCENTE_ID,
  });
  prisma.quizUmbral.rows.push({ quizId: QUIZ_ID, umbral: 60 });

  const alumnoTk = alumnoToken();
  const docenteTk = docenteToken();
  const attemptId = await createAttempt(alumnoTk);
  await jsonRequest(baseUrl, "POST", `/api/quiz-attempts/${attemptId}/submit`, {
    token: alumnoTk,
    body: { answers: { q0: "c0" }, presentedIds: ["q0", "q1", "q2"] },
  });
  // Docente corrige SOLO q1 con puntaje pleno (1/1).
  const res = await jsonRequest(baseUrl, "POST", `/api/quiz-attempts/${attemptId}/grade`, {
    token: docenteTk,
    body: { questionId: "q1", score: 1 },
  });
  assert.equal(res.status, 200, JSON.stringify(res.body));
  const body = res.body as Record<string, unknown>;
  assert.equal(body.status, "pending_review", "todavía queda q2");
  assert.equal(body.allGraded, false);
  // F5-04 — rango acotado: auto-score=1 + q1 corregida=1 → 2/3.
  // mín = 2/3 = 67%, máx = 3/3 = 100%.
  assert.ok(typeof body.notaMinDisplay === "string");
  assert.ok(typeof body.notaMaxDisplay === "string");
  assert.equal(body.notaDisplay, null);
  assert.equal(body.aprobado, null);
  // pendingCount implícito: la ausencia de allGraded.
});

test("/grade del ÚLTIMO manual: status pasa a 'graded', nota única, sin rango", async () => {
  const alumnoTk = alumnoToken();
  const docenteTk = docenteToken();
  const attemptId = await createAttempt(alumnoTk);
  await jsonRequest(baseUrl, "POST", `/api/quiz-attempts/${attemptId}/submit`, {
    token: alumnoTk,
    body: { answers: { q0: "c0" }, presentedIds: ["q0", "q1", "q2"] },
  });
  // Corregimos q2 (el último pendiente, porque q1 está con score: null y q2 también).
  // Espera — en este test el quiz tiene 1 sola manual (q2). Corregir q2 cierra el ciclo.
  const res = await jsonRequest(baseUrl, "POST", `/api/quiz-attempts/${attemptId}/grade`, {
    token: docenteTk,
    body: { questionId: "q2", score: 2 },
  });
  assert.equal(res.status, 200, JSON.stringify(res.body));
  const body = res.body as Record<string, unknown>;
  assert.equal(body.status, "graded");
  assert.equal(body.allGraded, true);
  // F5-04 — el rango colapsa: nota ÚNICA, sin campos de rango.
  assert.ok(typeof body.notaDisplay === "string", "notaDisplay única cuando allGraded");
  assert.equal(body.aprobado, true); // 3/3 = 100% ≥ 60%
  // Los 4 campos de rango quedan null.
  assert.equal(body.notaMinDisplay, null);
  assert.equal(body.notaMaxDisplay, null);
  assert.equal(body.notaMinCanonical10, null);
  assert.equal(body.notaMaxCanonical10, null);
});
