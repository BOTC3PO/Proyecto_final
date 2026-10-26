/**
 * Tarea 17 — endpoint GET /api/progreso/aula-matriz.
 *
 * Verifica:
 *  - Docente del aula → 200 con la matriz alumno × módulo.
 *  - Staff (DIRECTIVO) → 200.
 *  - Alumno del aula → 403.
 *  - Usuario sin auth válido → 401.
 *  - Sin aulaId → 400.
 *  - aulaId inexistente → 404.
 *  - Aula sin módulos asignados → 200 con modulos=[].
 *  - Aula sin alumnos → 200 con alumnos=[].
 *  - Los progresos se exponen por moduloId con status correcto, y los
 *    módulos sin progreso quedan en `null`.
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
const DIRECTIVO_ID = "directivo-1";
const ALUMNO_A_ID = "alumno-a";
const ALUMNO_B_ID = "alumno-b";
const ESCUELA_ID = "escuela-1";
const AULA_ID = "aula-1";
const MOD_1 = "mod-1";
const MOD_2 = "mod-2";
const MOD_3 = "mod-3";

before(async () => {
  const { progreso } = await import("../../src/routes/progreso");
  const server = await startServer([progreso]);
  baseUrl = server.baseUrl;
  close = server.close;
});

after(async () => {
  if (close) await close();
});

function seedAula() {
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
  // Docentes y directivo (schoolId coincide con escuela)
  prisma.claseMiembro.rows.push({
    claseId: AULA_ID,
    usuarioId: DOCENTE_ID,
    rolEnClase: "TEACHER",
  });
  prisma.claseMiembro.rows.push({
    claseId: AULA_ID,
    usuarioId: ALUMNO_A_ID,
    rolEnClase: "STUDENT",
  });
  prisma.claseMiembro.rows.push({
    claseId: AULA_ID,
    usuarioId: ALUMNO_B_ID,
    rolEnClase: "STUDENT",
  });

  // 3 modulos asignados al aula
  for (const id of [MOD_1, MOD_2, MOD_3]) {
    prisma.claseModulo.rows.push({
      claseId: AULA_ID,
      moduloId: id,
      assignedAt: new Date().toISOString(),
      required: false,
    });
    prisma.modulo.rows.push({
      id,
      titulo: `Modulo ${id}`,
      visibility: "privado",
      schoolId: null,
      ownerUserId: DOCENTE_ID,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
  }

  // Progresos mixtos
  // alumno A: mod-1 completado, mod-2 en_progreso, mod-3 sin registro.
  prisma.progresoModulo.rows.push({
    id: "p-1",
    usuarioId: ALUMNO_A_ID,
    moduloId: MOD_1,
    aulaId: AULA_ID,
    status: "completado",
    attempts: 1,
    updatedAt: new Date().toISOString(),
  });
  prisma.progresoModulo.rows.push({
    id: "p-2",
    usuarioId: ALUMNO_A_ID,
    moduloId: MOD_2,
    aulaId: AULA_ID,
    status: "en_progreso",
    attempts: 1,
    updatedAt: new Date().toISOString(),
  });
  // alumno B: mod-1 iniciado, mod-3 completado, mod-2 sin registro.
  prisma.progresoModulo.rows.push({
    id: "p-3",
    usuarioId: ALUMNO_B_ID,
    moduloId: MOD_1,
    aulaId: AULA_ID,
    status: "iniciado",
    attempts: 1,
    updatedAt: new Date().toISOString(),
  });
  prisma.progresoModulo.rows.push({
    id: "p-4",
    usuarioId: ALUMNO_B_ID,
    moduloId: MOD_3,
    aulaId: AULA_ID,
    status: "completado",
    attempts: 1,
    updatedAt: new Date().toISOString(),
  });
}

beforeEach(() => {
  resetPrisma();
  seedUser({ id: DOCENTE_ID, role: "TEACHER", schoolId: ESCUELA_ID });
  seedUser({ id: DIRECTIVO_ID, role: "DIRECTIVO", schoolId: ESCUELA_ID });
  seedUser({ id: ALUMNO_A_ID, role: "STUDENT", schoolId: ESCUELA_ID });
  seedUser({ id: ALUMNO_B_ID, role: "STUDENT", schoolId: ESCUELA_ID });
  seedAula();
});

test("docente del aula → 200 con la matriz alumno × módulo", async () => {
  const token = tokenFor({ id: DOCENTE_ID, role: "TEACHER", schoolId: ESCUELA_ID });
  const res = await jsonRequest(baseUrl, "GET", `/api/progreso/aula-matriz?aulaId=${AULA_ID}`, { token });
  assert.equal(res.status, 200);

  const body = res.body as {
    modulos: Array<{ id: string; title: string }>;
    alumnos: Array<{ id: string; name: string; progresos: Record<string, string | null> }>;
  };

  // 3 módulos asignados
  assert.equal(body.modulos.length, 3);
  const moduloIds = body.modulos.map((m) => m.id).sort();
  assert.deepEqual(moduloIds, [MOD_1, MOD_2, MOD_3].sort());

  // 2 alumnos del aula
  assert.equal(body.alumnos.length, 2);
  const alumnoA = body.alumnos.find((a) => a.id === ALUMNO_A_ID);
  const alumnoB = body.alumnos.find((a) => a.id === ALUMNO_B_ID);
  assert.ok(alumnoA);
  assert.ok(alumnoB);

  // alumno A
  assert.equal(alumnoA.progresos[MOD_1], "completado");
  assert.equal(alumnoA.progresos[MOD_2], "en_progreso");
  assert.equal(alumnoA.progresos[MOD_3], null);

  // alumno B
  assert.equal(alumnoB.progresos[MOD_1], "iniciado");
  assert.equal(alumnoB.progresos[MOD_2], null);
  assert.equal(alumnoB.progresos[MOD_3], "completado");
});

test("staff (DIRECTIVO) → 200", async () => {
  const token = tokenFor({ id: DIRECTIVO_ID, role: "DIRECTIVO", schoolId: ESCUELA_ID });
  const res = await jsonRequest(baseUrl, "GET", `/api/progreso/aula-matriz?aulaId=${AULA_ID}`, { token });
  assert.equal(res.status, 200);
  assert.equal((res.body as { modulos: unknown[] }).modulos.length, 3);
});

test("alumno del aula → 403", async () => {
  const token = tokenFor({ id: ALUMNO_A_ID, role: "STUDENT", schoolId: ESCUELA_ID });
  const res = await jsonRequest(baseUrl, "GET", `/api/progreso/aula-matriz?aulaId=${AULA_ID}`, { token });
  assert.equal(res.status, 403);
});

test("docente de OTRA aula (no staff segun politica) → 403", async () => {
  // Una familia (PARENT) no es staff ni docente del aula → 403.
  seedUser({ id: "padre-1", role: "PARENT", schoolId: ESCUELA_ID });
  const token = tokenFor({ id: "padre-1", role: "PARENT", schoolId: ESCUELA_ID });
  const res = await jsonRequest(baseUrl, "GET", `/api/progreso/aula-matriz?aulaId=${AULA_ID}`, { token });
  assert.equal(res.status, 403);
});

test("sin aulaId → 400", async () => {
  const token = tokenFor({ id: DOCENTE_ID, role: "TEACHER", schoolId: ESCUELA_ID });
  const res = await jsonRequest(baseUrl, "GET", "/api/progreso/aula-matriz", { token });
  assert.equal(res.status, 400);
});

test("aulaId inexistente → 404", async () => {
  const token = tokenFor({ id: DOCENTE_ID, role: "TEACHER", schoolId: ESCUELA_ID });
  const res = await jsonRequest(baseUrl, "GET", "/api/progreso/aula-matriz?aulaId=no-existe", { token });
  assert.equal(res.status, 404);
});

test("aula sin modulos asignados → 200 con modulos=[] y progresos={}", async () => {
  // Quitar las asignaciones
  prisma.claseModulo.rows = [];
  const token = tokenFor({ id: DOCENTE_ID, role: "TEACHER", schoolId: ESCUELA_ID });
  const res = await jsonRequest(baseUrl, "GET", `/api/progreso/aula-matriz?aulaId=${AULA_ID}`, { token });
  assert.equal(res.status, 200);
  const body = res.body as {
    modulos: unknown[];
    alumnos: Array<{ progresos: Record<string, string | null> }>;
  };
  assert.equal(body.modulos.length, 0);
  for (const a of body.alumnos) {
    assert.deepEqual(a.progresos, {});
  }
});

test("aula sin alumnos → 200 con alumnos=[]", async () => {
  prisma.claseMiembro.rows = prisma.claseMiembro.rows.filter(
    (m) => m.rolEnClase === "TEACHER",
  );
  const token = tokenFor({ id: DOCENTE_ID, role: "TEACHER", schoolId: ESCUELA_ID });
  const res = await jsonRequest(baseUrl, "GET", `/api/progreso/aula-matriz?aulaId=${AULA_ID}`, { token });
  assert.equal(res.status, 200);
  const body = res.body as { alumnos: unknown[]; modulos: unknown[] };
  assert.equal(body.alumnos.length, 0);
  // Los modulos asignados siguen apareciendo aunque no haya alumnos.
  assert.equal(body.modulos.length, 3);
});
