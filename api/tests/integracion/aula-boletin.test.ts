/**
 * PLAN-V §3 — GET /api/aulas/:id/boletin: junta los períodos del aula
 * (§1) con las evaluaciones FORMALES de los módulos asignados a esa
 * aula, agregadas por `computeBoletin`. Sólo el bloque "por aula"; la
 * vista que junta varias aulas por materia (§2) es otra sesión.
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

const SCHOOL = "esc-boletin";
const AULA = "aula-boletin-1";
const DOCENTE = "docente-boletin";
const ALUMNO = "alumno-boletin";
const OTRO_ALUMNO = "otro-alumno-boletin";
const MODULO = "mod-boletin";
const QUIZ = "quiz-boletin";
const QV = "qv-boletin";

before(async () => {
  const { aulas } = await import("../../src/routes/aulas");
  const { boletin } = await import("../../src/routes/boletin");
  const server = await startServer([aulas, boletin]);
  baseUrl = server.baseUrl;
  close = server.close;
});

after(async () => {
  if (close) await close();
});

function seedAttempt(id: string, userId: string, score: number, fecha: string) {
  prisma.quizAttempt.rows.push({
    id,
    quizId: QUIZ,
    quizVersionId: QV,
    userId,
    status: "submitted",
    startedAt: fecha,
    submittedAt: fecha,
    score,
    maxScore: 10,
    answers: "{}",
    feedback: null,
    grading: null,
    seed: null,
    seedPolicy: 0,
    attemptNo: 1,
  });
}

beforeEach(() => {
  resetPrisma();
  seedUser({ id: DOCENTE, role: "TEACHER", schoolId: SCHOOL });
  seedUser({ id: ALUMNO, role: "USER", schoolId: SCHOOL });
  seedUser({ id: OTRO_ALUMNO, role: "USER", schoolId: SCHOOL });

  const now = new Date().toISOString();
  prisma.clase.rows.push({
    id: AULA,
    escuelaId: SCHOOL,
    name: "Aula boletín",
    grade: "5°",
    isDeleted: false,
    status: "ACTIVE",
    teacherId: DOCENTE,
    createdAt: now,
  });
  prisma.claseMiembro.rows.push(
    { claseId: AULA, usuarioId: ALUMNO, rolEnClase: "STUDENT" },
    { claseId: AULA, usuarioId: OTRO_ALUMNO, rolEnClase: "STUDENT" }
  );
  prisma.claseModulo.rows.push({ claseId: AULA, moduloId: MODULO, assignedAt: now, required: false });
  prisma.modulo.rows.push({
    id: MODULO,
    slug: "mod-boletin",
    titulo: "Módulo boletín",
    descripcion: "",
    createdAt: now,
    updatedAt: now,
  });
  prisma.quiz.rows.push({
    id: QUIZ,
    moduleId: MODULO,
    title: "Quiz boletín",
    currentVersionId: QV,
    isActive: true,
    createdAt: now,
    updatedAt: now,
  });
  prisma.quizVersion.rows.push({
    id: QV,
    quizId: QUIZ,
    versionNumber: 1,
    questions: "[]",
    generatorId: null,
    generatorVersion: "1",
    params: null,
    count: 0,
    seedPolicy: 0,
    fixedSeed: null,
    settings: JSON.stringify({ type: "formal" }),
    createdAt: now,
    createdBy: DOCENTE,
  });
  prisma.clasePeriodo.rows.push(
    { id: "per-1", claseId: AULA, nombre: "1er bimestre", desde: "2026-03-01", hasta: "2026-04-30", orden: 0, createdAt: now, updatedAt: now },
    { id: "per-2", claseId: AULA, nombre: "2do bimestre", desde: "2026-05-01", hasta: "2026-06-30", orden: 1, createdAt: now, updatedAt: now }
  );
});

const alumnoToken = () => tokenFor({ id: ALUMNO, role: "USER", schoolId: SCHOOL });
const docenteToken = () => tokenFor({ id: DOCENTE, role: "TEACHER", schoolId: SCHOOL });

test("el alumno ve su propio boletín agregado por período", async () => {
  seedAttempt("att-1", ALUMNO, 8, "2026-03-15T10:00:00.000Z");
  seedAttempt("att-2", ALUMNO, 6, "2026-04-10T10:00:00.000Z");
  seedAttempt("att-3", ALUMNO, 9, "2026-05-20T10:00:00.000Z");

  const { status, body } = await jsonRequest(baseUrl, "GET", `/api/aulas/${AULA}/boletin`, { token: alumnoToken() });
  assert.equal(status, 200);
  const b = body as { periodos: { nombre: string; promedio: number | null; cantidad: number }[]; promedioFinal: number | null };
  assert.equal(b.periodos[0].cantidad, 2);
  assert.equal(b.periodos[0].promedio, 7);
  assert.equal(b.periodos[1].promedio, 9);
  assert.equal(b.promedioFinal, 8);
});

test("no cuenta evaluaciones de práctica (settings.type !== formal)", async () => {
  prisma.quizVersion.rows.find((v) => v.id === QV)!.settings = JSON.stringify({ type: "practica" });
  seedAttempt("att-practica", ALUMNO, 10, "2026-03-15T10:00:00.000Z");

  const { body } = await jsonRequest(baseUrl, "GET", `/api/aulas/${AULA}/boletin`, { token: alumnoToken() });
  const b = body as { periodos: { cantidad: number }[] };
  assert.equal(b.periodos[0].cantidad, 0);
});

test("el docente puede pedir el boletín de un alumno vía ?alumnoId=", async () => {
  seedAttempt("att-1", ALUMNO, 8, "2026-03-15T10:00:00.000Z");
  const { status, body } = await jsonRequest(
    baseUrl, "GET", `/api/aulas/${AULA}/boletin?alumnoId=${ALUMNO}`, { token: docenteToken() }
  );
  assert.equal(status, 200);
  assert.equal((body as { periodos: { cantidad: number }[] }).periodos[0].cantidad, 1);
});

test("un alumno no puede pedir el boletín de OTRO alumno (403)", async () => {
  seedAttempt("att-1", OTRO_ALUMNO, 8, "2026-03-15T10:00:00.000Z");
  const { status } = await jsonRequest(
    baseUrl, "GET", `/api/aulas/${AULA}/boletin?alumnoId=${OTRO_ALUMNO}`, { token: alumnoToken() }
  );
  assert.equal(status, 403);
});
