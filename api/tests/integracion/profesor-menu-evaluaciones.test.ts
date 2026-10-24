/**
 * FIX-PANEL-EVALUACIONES — el menú del profesor mostraba módulos
 * bajo el rótulo "Evaluaciones recientes" sin título ni materia
 * asociada (bugs 1.1 y 1.2 de `docs/qa/test-parte-3-profesor.md`).
 *
 * El fix agrega `recentEvaluations` a la respuesta de
 * `GET /api/profesor/menu`: se compone con los QuizAttempt reales
 * del modelo nuevo (no la colección legacy "ejercicios" que ya no
 * existe), trayendo el `title` del Quiz y el `subject` del módulo
 * dueño como `category`.
 *
 * Cubre:
 *  1. Devuelve hasta 4 intentos ordenados por `startedAt desc`.
 *  2. Cada item incluye `title` (no vacío) y `category` (no vacío).
 *  3. Los intentos sin quiz dueño se omiten (data huérfana).
 *  4. Si el docente no tiene módulos propios ni asignados,
 *     `recentEvaluations` es `[]` y NO rompe la respuesta.
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

const TEACHER = "teacher-panel";
const SCHOOL = "esc-panel";
const AULA = "aula-panel";
const MOD_OWN = "mod-own";
const MOD_ASSIGNED = "mod-assigned";
const Q1 = "quiz-1";
const Q2 = "quiz-2";
const Q3 = "quiz-3";
const ATT_OLD = "att-old";
const ATT_MID = "att-mid";
const ATT_NEW = "att-new";

before(async () => {
  const { profesor } = await import("../../src/routes/profesor");
  const server = await startServer([profesor]);
  baseUrl = server.baseUrl;
  close = server.close;
});

after(async () => {
  if (close) await close();
});

beforeEach(() => {
  resetPrisma();
  seedUser({ id: TEACHER, role: "TEACHER", schoolId: SCHOOL });

  // El teacher es miembro de AULA y AULA es la que tiene el módulo
  // MOD_ASSIGNED asignado — ese es el camino por el cual el endpoint
  // debería incluir el módulo asignado.
  prisma.clase.rows.push({
    id: AULA,
    escuelaId: SCHOOL,
    name: "Aula del teacher",
    grade: "5°",
    isDeleted: false,
    status: "ACTIVE",
    createdBy: TEACHER,
    createdAt: "2026-06-01T00:00:00.000Z",
  });
  prisma.claseMiembro.rows.push({
    claseId: AULA, usuarioId: TEACHER, rolEnClase: "TEACHER",
  });
  prisma.claseModulo.rows.push({
    claseId: AULA, moduloId: MOD_ASSIGNED, assignedAt: "2026-06-02T00:00:00.000Z", required: false,
  });

  prisma.modulo.rows.push(
    {
      id: MOD_OWN,
      titulo: "Módulo propio",
      subject: "Matemáticas",
      visibility: "private",
      ownerUserId: TEACHER,
      isDeleted: false,
      createdAt: "2026-06-01T00:00:00.000Z",
      updatedAt: "2026-06-15T00:00:00.000Z",
    },
    {
      id: MOD_ASSIGNED,
      titulo: "Módulo asignado a un aula",
      subject: "Física",
      visibility: "escuela",
      ownerUserId: "other-teacher",
      isDeleted: false,
      createdAt: "2026-06-01T00:00:00.000Z",
      updatedAt: "2026-06-14T00:00:00.000Z",
    },
  );

  prisma.quiz.rows.push(
    { id: Q1, moduleId: MOD_OWN, title: "Quiz 1 (propio)", isActive: true, currentVersionId: null, createdAt: "", updatedAt: "" },
    { id: Q2, moduleId: MOD_OWN, title: "Quiz 2 (propio)", isActive: true, currentVersionId: null, createdAt: "", updatedAt: "" },
    { id: Q3, moduleId: MOD_ASSIGNED, title: "Quiz 3 (asignado)", isActive: true, currentVersionId: null, createdAt: "", updatedAt: "" },
  );

  prisma.quizAttempt.rows.push(
    { id: ATT_OLD, quizId: Q1, userId: "u1", status: "submitted", startedAt: "2026-06-10T10:00:00.000Z" },
    { id: ATT_MID, quizId: Q2, userId: "u1", status: "submitted", startedAt: "2026-06-12T10:00:00.000Z" },
    { id: ATT_NEW, quizId: Q3, userId: "u2", status: "in_progress", startedAt: "2026-06-15T10:00:00.000Z" },
  );
});

test("FIX-PANEL-EVALUACIONES: recentEvaluations incluye title y category no vacíos", async () => {
  const token = tokenFor({ id: TEACHER, role: "TEACHER", schoolId: SCHOOL });
  const res = await jsonRequest(baseUrl, "GET", "/api/profesor/menu", { token });
  assert.equal(res.status, 200);
  const items = res.body.recentEvaluations;
  assert.ok(Array.isArray(items), "recentEvaluations debe ser array");
  // No exigimos ==4: el endpoint puede devolver menos si no hay data.
  // Lo que sí exigimos: cada item tiene title y category.
  for (const item of items) {
    assert.ok(typeof item.title === "string" && item.title.length > 0,
      `title vacío o ausente en ${JSON.stringify(item)}`);
    assert.ok(typeof item.category === "string" && item.category.length > 0,
      `category vacío o ausente en ${JSON.stringify(item)}`);
  }
  // El más reciente (Q3, Física) debe estar presente.
  const newest = items.find((i: { id: string }) => i.id === ATT_NEW);
  assert.ok(newest, "el intento más reciente debe estar");
  assert.equal(newest.title, "Quiz 3 (asignado)");
  assert.equal(newest.category, "Física");
});

test("FIX-PANEL-EVALUACIONES: recentEvaluations se ordena por startedAt desc", async () => {
  const token = tokenFor({ id: TEACHER, role: "TEACHER", schoolId: SCHOOL });
  const res = await jsonRequest(baseUrl, "GET", "/api/profesor/menu", { token });
  const items = res.body.recentEvaluations;
  const dates = items.map((i: { startedAt: string }) => i.startedAt);
  const sorted = [...dates].sort().reverse();
  assert.deepEqual(dates, sorted, "los intentos deben venir ordenados desc");
});

test("FIX-PANEL-EVALUACIONES: intentos huérfanos (sin quiz) se omiten", async () => {
  // FIX-PANEL-EVALUACIONES — un QuizAttempt sin Quiz correspondiente
  // (data huérfana) NO debe romper el endpoint ni aparecer en la
  // respuesta con `title: undefined`.
  prisma.quizAttempt.rows.push({
    id: "att-orphan", quizId: "no-existe", userId: "u3", status: "submitted", startedAt: "2026-06-16T00:00:00.000Z",
  });
  const token = tokenFor({ id: TEACHER, role: "TEACHER", schoolId: SCHOOL });
  const res = await jsonRequest(baseUrl, "GET", "/api/profesor/menu", { token });
  const orphan = res.body.recentEvaluations.find((i: { id: string }) => i.id === "att-orphan");
  assert.equal(orphan, undefined, "intento huérfano debe omitirse");
});

test("FIX-PANEL-EVALUACIONES: docente sin módulos devuelve recentEvaluations=[]", async () => {
  resetPrisma();
  seedUser({ id: "teacher-empty", role: "TEACHER", schoolId: SCHOOL });
  const token = tokenFor({ id: "teacher-empty", role: "TEACHER", schoolId: SCHOOL });
  const res = await jsonRequest(baseUrl, "GET", "/api/profesor/menu", { token });
  assert.equal(res.status, 200);
  assert.deepEqual(res.body.recentEvaluations, []);
});

// Simetría del panel — card "Resumen": `quizzesCompletedByStudents` cuenta
// los intentos ENVIADOS o CORREGIDOS (no los que siguen `in_progress`),
// de los mismos quizzes que arman `recentEvaluations` arriba.
test("PANEL-RESUMEN-SIMETRIA: quizzesCompletedByStudents cuenta submitted+graded, no in_progress", async () => {
  const token = tokenFor({ id: TEACHER, role: "TEACHER", schoolId: SCHOOL });
  const res = await jsonRequest(baseUrl, "GET", "/api/profesor/menu", { token });
  assert.equal(res.status, 200);
  // Seed: ATT_OLD (submitted), ATT_MID (submitted), ATT_NEW (in_progress).
  assert.equal(res.body.quizzesCompletedByStudents, 2);
});

test("PANEL-RESUMEN-SIMETRIA: un intento 'graded' también cuenta como hecho", async () => {
  prisma.quizAttempt.rows.push({
    id: "att-graded", quizId: Q1, userId: "u4", status: "graded", startedAt: "2026-06-17T00:00:00.000Z",
  });
  const token = tokenFor({ id: TEACHER, role: "TEACHER", schoolId: SCHOOL });
  const res = await jsonRequest(baseUrl, "GET", "/api/profesor/menu", { token });
  assert.equal(res.body.quizzesCompletedByStudents, 3);
});

test("PANEL-RESUMEN-SIMETRIA: docente sin módulos devuelve quizzesCompletedByStudents=0", async () => {
  resetPrisma();
  seedUser({ id: "teacher-empty", role: "TEACHER", schoolId: SCHOOL });
  const token = tokenFor({ id: "teacher-empty", role: "TEACHER", schoolId: SCHOOL });
  const res = await jsonRequest(baseUrl, "GET", "/api/profesor/menu", { token });
  assert.equal(res.body.quizzesCompletedByStudents, 0);
});
