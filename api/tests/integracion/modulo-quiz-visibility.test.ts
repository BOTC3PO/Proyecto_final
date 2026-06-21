/**
 * WO-3 — Bug de visibilidad de cuestionarios + persistencia de la config nueva.
 *
 * Bug: el GET de un módulo devolvía TODOS los cuestionarios activos a
 * cualquiera. Un alumno veía cuestionarios `escuela` de otra escuela (y todos
 * los que el profe podía hacer), no sólo el que le corresponde.
 *
 * Fix (back): `GET /api/modulos/:id` filtra los cuestionarios para el
 * solicitante no-dueño/no-staff:
 *   - `publico`  → visible para todos.
 *   - `escuela`  → visible sólo si su escuela == la del módulo.
 * El dueño/staff sigue viendo TODOS (los necesita para editar).
 *
 * También cubre que la config nueva (politicaSorteo, displayCount) y la escala
 * de notas del módulo (scoringConfig) se exponen en el DTO.
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

const OWNER = "teacher-vis";
const STUDENT_SAME = "alumno-mismo";
const STUDENT_OTHER = "alumno-otro";
const ESCUELA = "esc-1";
const MOD = "mod-vis";

before(async () => {
  const { modulos } = await import("../../src/routes/modulos");
  const server = await startServer([modulos]);
  baseUrl = server.baseUrl;
  close = server.close;
});

after(async () => {
  if (close) await close();
});

function seedQuiz(
  id: string,
  visibility: string,
  extraSettings: Record<string, unknown> = {},
) {
  const now = new Date().toISOString();
  prisma.quiz.rows.push({
    id,
    moduleId: MOD,
    title: `Quiz ${id}`,
    isActive: true,
    currentVersionId: `${id}-v1`,
    createdAt: now,
    updatedAt: now,
  });
  prisma.quizVersion.rows.push({
    id: `${id}-v1`,
    quizId: id,
    versionNumber: 1,
    questions: JSON.stringify([]),
    settings: JSON.stringify({ type: "formal", visibility, ...extraSettings }),
    createdAt: now,
  });
}

beforeEach(() => {
  resetPrisma();
  seedUser({ id: OWNER, role: "TEACHER", schoolId: ESCUELA });
  seedUser({ id: STUDENT_SAME, role: "STUDENT", schoolId: ESCUELA });
  seedUser({ id: STUDENT_OTHER, role: "STUDENT", schoolId: "esc-2" });

  const now = new Date().toISOString();
  prisma.modulo.rows.push({
    id: MOD,
    titulo: "Módulo con quizzes mixtos",
    descripcion: "desc",
    visibility: "publico",
    schoolId: ESCUELA,
    ownerUserId: OWNER,
    dependencies: null,
    // WO-3 — escala de notas del módulo persistida como JSON string.
    scoringConfig: JSON.stringify({ systemId: "scale-a-f" }),
    isDeleted: false,
    createdAt: now,
    updatedAt: now,
  });

  seedQuiz("q-publico", "publico", {
    politicaSorteo: "por_intento",
    displayCount: 3,
  });
  seedQuiz("q-escuela", "escuela");
});

test("WO-3: el dueño ve TODOS los cuestionarios (publico + escuela)", async () => {
  const token = tokenFor({ id: OWNER, role: "TEACHER", schoolId: ESCUELA });
  const res = await jsonRequest(baseUrl, "GET", `/api/modulos/${MOD}`, { token });
  assert.equal(res.status, 200);
  const body = res.body as { quizzes: Array<{ id: string }> };
  const ids = body.quizzes.map((q) => q.id).sort();
  assert.deepEqual(ids, ["q-escuela", "q-publico"]);
});

test("WO-3: un alumno de OTRA escuela sólo ve el cuestionario público", async () => {
  const token = tokenFor({ id: STUDENT_OTHER, role: "STUDENT", schoolId: "esc-2" });
  const res = await jsonRequest(baseUrl, "GET", `/api/modulos/${MOD}`, { token });
  assert.equal(res.status, 200);
  const body = res.body as { quizzes: Array<{ id: string }> };
  const ids = body.quizzes.map((q) => q.id);
  assert.deepEqual(ids, ["q-publico"], "no debe ver el cuestionario de escuela");
});

test("WO-3: un alumno de la MISMA escuela ve el público y el de escuela", async () => {
  const token = tokenFor({ id: STUDENT_SAME, role: "STUDENT", schoolId: ESCUELA });
  const res = await jsonRequest(baseUrl, "GET", `/api/modulos/${MOD}`, { token });
  assert.equal(res.status, 200);
  const body = res.body as { quizzes: Array<{ id: string }> };
  const ids = body.quizzes.map((q) => q.id).sort();
  assert.deepEqual(ids, ["q-escuela", "q-publico"]);
});

test("WO-3: el DTO expone politicaSorteo, displayCount y la escala del módulo", async () => {
  const token = tokenFor({ id: OWNER, role: "TEACHER", schoolId: ESCUELA });
  const res = await jsonRequest(baseUrl, "GET", `/api/modulos/${MOD}`, { token });
  assert.equal(res.status, 200);
  const body = res.body as {
    scoringConfig?: { systemId?: string };
    quizzes: Array<{
      id: string;
      politicaSorteo?: string;
      displayCount?: number;
    }>;
  };
  assert.equal(body.scoringConfig?.systemId, "scale-a-f");
  const pub = body.quizzes.find((q) => q.id === "q-publico");
  assert.equal(pub?.politicaSorteo, "por_intento");
  assert.equal(pub?.displayCount, 3);
});
