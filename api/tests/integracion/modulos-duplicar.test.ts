/**
 * Tarea 19 — endpoint POST /api/modulos/:id/duplicar.
 *
 * Verifica:
 *  - Dueno del modulo → 201 con id nuevo y titulo " (copia)".
 *  - Staff (DIRECTIVO) sobre modulo ajeno → 201.
 *  - Otro docente (no dueno, no staff) → 403.
 *  - Modulo inexistente → 404.
 *  - El modulo duplicado tiene dependencies: null y no aparece en
 *    clase_modulos (sin asignaciones).
 *  - Los quizzes activos se clonan con su ultima version; el original
 *    no se modifica.
 *  - El owner del duplicado es el solicitante.
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
const OTRO_DOCENTE_ID = "docente-2";
const DIRECTIVO_ID = "directivo-1";
const ESCUELA_ID = "escuela-1";
const MOD_ID = "mod-1";

before(async () => {
  const { modulos } = await import("../../src/routes/modulos");
  const server = await startServer([modulos]);
  baseUrl = server.baseUrl;
  close = server.close;
});

after(async () => {
  if (close) await close();
});

function seedModuloSource(opts: {
  ownerUserId: string;
  schoolId?: string | null;
  titulo?: string;
  dependencies?: string | null;
} = { ownerUserId: DOCENTE_ID }) {
  prisma.modulo.rows.push({
    id: MOD_ID,
    slug: `mod-1-${Date.now()}`,
    titulo: opts.titulo ?? "Modulo original",
    descripcion: "Descripcion original",
    visibility: "privado",
    schoolId: opts.schoolId ?? null,
    ownerUserId: opts.ownerUserId,
    teoriaId: "teoria-1",
    tuesdayDocId: null,
    libroId: null,
    defaultQuestionCount: 5,
    dependencies: opts.dependencies ?? JSON.stringify([{ type: "required", id: "otro-mod" }]),
    isDeleted: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
  // Un quiz activo con su ultima version.
  prisma.quiz.rows.push({
    id: "quiz-1",
    moduleId: MOD_ID,
    title: "Quiz original",
    currentVersionId: "qv-1",
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
  prisma.quizVersion.rows.push({
    id: "qv-1",
    quizId: "quiz-1",
    versionNumber: 1,
    questions: JSON.stringify([{ id: "q-1", prompt: "Pregunta 1" }]),
    generatorId: null,
    generatorVersion: null,
    params: null,
    count: 3,
    seedPolicy: 0,
    fixedSeed: null,
    settings: JSON.stringify({ type: "practica", mode: "manual", visibility: "publico", composition: null }),
    createdAt: new Date().toISOString(),
    createdBy: opts.ownerUserId,
  });
}

beforeEach(() => {
  resetPrisma();
  seedUser({ id: DOCENTE_ID, role: "TEACHER", schoolId: ESCUELA_ID });
  seedUser({ id: OTRO_DOCENTE_ID, role: "TEACHER", schoolId: ESCUELA_ID });
  seedUser({ id: DIRECTIVO_ID, role: "DIRECTIVO", schoolId: ESCUELA_ID });
});

test("dueno del modulo duplica -> 201 con id nuevo y titulo '(copia)'", async () => {
  seedModuloSource({ ownerUserId: DOCENTE_ID });
  const token = tokenFor({ id: DOCENTE_ID, role: "TEACHER", schoolId: ESCUELA_ID });
  const res = await jsonRequest(baseUrl, "POST", `/api/modulos/${MOD_ID}/duplicar`, { token });
  assert.equal(res.status, 201);
  const body = res.body as { id: string; moduleId: string; sourceId: string };
  assert.ok(body.id, "debe devolver id");
  assert.notEqual(body.id, MOD_ID);
  assert.equal(body.sourceId, MOD_ID);

  // El modulo duplicado existe y tiene titulo "(copia)".
  const copia = prisma.modulo.rows.find((m) => m.id === body.id);
  assert.ok(copia);
  assert.equal(copia.titulo, "Modulo original (copia)");
  // Sin dependencias.
  assert.equal(copia.dependencies, null);
  // owner = solicitante.
  assert.equal(copia.ownerUserId, DOCENTE_ID);
});

test("staff (DIRECTIVO) puede duplicar modulo ajeno -> 201", async () => {
  seedModuloSource({ ownerUserId: DOCENTE_ID });
  const token = tokenFor({ id: DIRECTIVO_ID, role: "DIRECTIVO", schoolId: ESCUELA_ID });
  const res = await jsonRequest(baseUrl, "POST", `/api/modulos/${MOD_ID}/duplicar`, { token });
  assert.equal(res.status, 201);
  // owner del duplicado es el staff que lo duplico, no el dueno original.
  const copia = prisma.modulo.rows.find((m) => m.id !== MOD_ID);
  assert.ok(copia);
  assert.equal(copia.ownerUserId, DIRECTIVO_ID);
});

test("usuario no dueno y no staff (PARENT/STUDENT) -> 403", async () => {
  seedModuloSource({ ownerUserId: DOCENTE_ID });
  seedUser({ id: "alumno-1", role: "STUDENT", schoolId: ESCUELA_ID });
  const token = tokenFor({ id: "alumno-1", role: "STUDENT", schoolId: ESCUELA_ID });
  const res = await jsonRequest(baseUrl, "POST", `/api/modulos/${MOD_ID}/duplicar`, { token });
  assert.equal(res.status, 403);
  // El modulo original sigue intacto y no hay duplicado.
  assert.equal(prisma.modulo.rows.length, 1);
  assert.equal(prisma.modulo.rows[0].id, MOD_ID);
});

test("modulo inexistente -> 404", async () => {
  const token = tokenFor({ id: DOCENTE_ID, role: "TEACHER", schoolId: ESCUELA_ID });
  const res = await jsonRequest(baseUrl, "POST", `/api/modulos/no-existe/duplicar`, { token });
  assert.equal(res.status, 404);
});

test("el duplicado no se asigna a ningun aula (sin clase_modulos)", async () => {
  seedModuloSource({ ownerUserId: DOCENTE_ID });
  // Fuente con asignacion a un aula
  prisma.claseModulo.rows.push({
    claseId: "aula-1",
    moduloId: MOD_ID,
    assignedAt: new Date().toISOString(),
    required: false,
  });
  const token = tokenFor({ id: DOCENTE_ID, role: "TEACHER", schoolId: ESCUELA_ID });
  const res = await jsonRequest(baseUrl, "POST", `/api/modulos/${MOD_ID}/duplicar`, { token });
  assert.equal(res.status, 201);
  const newId = (res.body as { id: string }).id;
  // La fila de clase_modulos sigue apuntando solo al original.
  const asignaciones = prisma.claseModulo.rows.filter((cm) => cm.moduloId === newId);
  assert.equal(asignaciones.length, 0);
  // El original sigue asignado a su aula.
  const orig = prisma.claseModulo.rows.filter((cm) => cm.moduloId === MOD_ID);
  assert.equal(orig.length, 1);
});

test("se clonan los quizzes activos con su ultima version", async () => {
  seedModuloSource({ ownerUserId: DOCENTE_ID });
  const token = tokenFor({ id: DOCENTE_ID, role: "TEACHER", schoolId: ESCUELA_ID });
  const res = await jsonRequest(baseUrl, "POST", `/api/modulos/${MOD_ID}/duplicar`, { token });
  assert.equal(res.status, 201);
  const newId = (res.body as { id: string }).id;
  // Original: 1 quiz, 1 version.
  assert.equal(prisma.quiz.rows.filter((q) => q.moduleId === MOD_ID).length, 1);
  assert.equal(prisma.quizVersion.rows.filter((v) => v.quizId === "quiz-1").length, 1);
  // Duplicado: 1 quiz nuevo, 1 version nueva, ids regenerados.
  const newQuizzes = prisma.quiz.rows.filter((q) => q.moduleId === newId);
  assert.equal(newQuizzes.length, 1);
  const newQuiz = newQuizzes[0];
  assert.notEqual(newQuiz.id, "quiz-1");
  const newVersions = prisma.quizVersion.rows.filter((v) => v.quizId === newQuiz.id);
  assert.equal(newVersions.length, 1);
  assert.notEqual(newVersions[0].id, "qv-1");
  // Mismo contenido.
  assert.equal(newVersions[0].questions, JSON.stringify([{ id: "q-1", prompt: "Pregunta 1" }]));
  // currentVersionId del nuevo quiz apunta a su version.
  assert.equal(newQuiz.currentVersionId, newVersions[0].id);
});
