/**
 * PLAN-A §3 (fase 5) — regresión del ítem 3 ("la asistencia no
 * funciona"). No era un bug: `GET /api/profesor/asistencia` devolvía
 * `[]` hardcodeado porque el modelo `Asistencia` no existía en Prisma.
 *
 * Cubre:
 *  - GET planilla del día: alumnos del aula con su estado (null si no
 *    hay registro aún).
 *  - PUT upsert masivo: crea filas nuevas.
 *  - PUT re-enviado (corrección): actualiza en vez de duplicar.
 *  - Un alumno ajeno a la aula en el body → 400.
 *  - Un STUDENT (no TEACHER/ADMIN/DIRECTIVO) no puede tomar asistencia.
 *  - Aula con status legacy (sin status) igual admite registrar
 *    asistencia (mismo criterio que PLAN-A §2).
 */
import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";

let baseUrl: string;
let close: () => Promise<void>;

const ESCUELA = "esc-asistencia";
const DOCENTE = "docente-asistencia";
const ALUMNO_1 = "alumno-1-asistencia";
const ALUMNO_2 = "alumno-2-asistencia";
const ALUMNO_AJENO = "alumno-ajeno-asistencia";
const AULA_ID = "aula-asistencia";
const FECHA = "2026-07-03";

before(async () => {
  const { asistencia } = await import("../../src/routes/asistencia");
  const server = await startServer([asistencia]);
  baseUrl = server.baseUrl;
  close = server.close;
});

after(async () => {
  if (close) await close();
});

beforeEach(() => {
  resetPrisma();
  seedUser({ id: DOCENTE, role: "TEACHER", schoolId: ESCUELA });
  seedUser({ id: ALUMNO_1, role: "USER", schoolId: ESCUELA });
  seedUser({ id: ALUMNO_2, role: "USER", schoolId: ESCUELA });
  seedUser({ id: ALUMNO_AJENO, role: "USER", schoolId: ESCUELA });

  const now = new Date().toISOString();
  prisma.clase.rows.push({
    id: AULA_ID,
    escuelaId: ESCUELA,
    name: "Aula con asistencia",
    grade: "5°",
    isDeleted: false,
    status: "ACTIVE",
    createdBy: DOCENTE,
    createdAt: now,
  });
  prisma.claseMiembro.rows.push({ claseId: AULA_ID, usuarioId: DOCENTE, rolEnClase: "TEACHER" });
  prisma.claseMiembro.rows.push({ claseId: AULA_ID, usuarioId: ALUMNO_1, rolEnClase: "STUDENT" });
  prisma.claseMiembro.rows.push({ claseId: AULA_ID, usuarioId: ALUMNO_2, rolEnClase: "STUDENT" });
});

test("GET planilla del día: alumnos del aula con estado=null antes de registrar nada", async () => {
  const token = tokenFor({ id: DOCENTE, role: "TEACHER", schoolId: ESCUELA });
  const res = await jsonRequest(baseUrl, "GET", `/api/aulas/${AULA_ID}/asistencia?fecha=${FECHA}`, { token });
  assert.equal(res.status, 200, JSON.stringify(res.body));
  const body = res.body as { alumnos: Array<{ alumnoId: string; estado: string | null }> };
  assert.equal(body.alumnos.length, 2);
  assert.ok(body.alumnos.every((a) => a.estado === null));
});

test("PUT upsert masivo crea las filas de asistencia", async () => {
  const token = tokenFor({ id: DOCENTE, role: "TEACHER", schoolId: ESCUELA });
  const putRes = await jsonRequest(baseUrl, "PUT", `/api/aulas/${AULA_ID}/asistencia/${FECHA}`, {
    token,
    body: {
      registros: [
        { alumnoId: ALUMNO_1, estado: "presente" },
        { alumnoId: ALUMNO_2, estado: "ausente", notas: "Avisó la madre" },
      ],
    },
  });
  assert.equal(putRes.status, 200, JSON.stringify(putRes.body));
  assert.equal(prisma.asistencia.rows.length, 2);

  const getRes = await jsonRequest(baseUrl, "GET", `/api/aulas/${AULA_ID}/asistencia?fecha=${FECHA}`, { token });
  const body = getRes.body as { alumnos: Array<{ alumnoId: string; estado: string | null; notas: string | null }> };
  const a1 = body.alumnos.find((a) => a.alumnoId === ALUMNO_1);
  const a2 = body.alumnos.find((a) => a.alumnoId === ALUMNO_2);
  assert.equal(a1?.estado, "presente");
  assert.equal(a2?.estado, "ausente");
  assert.equal(a2?.notas, "Avisó la madre");
});

test("PUT re-enviado corrige el estado sin duplicar filas (idempotente)", async () => {
  const token = tokenFor({ id: DOCENTE, role: "TEACHER", schoolId: ESCUELA });
  await jsonRequest(baseUrl, "PUT", `/api/aulas/${AULA_ID}/asistencia/${FECHA}`, {
    token,
    body: { registros: [{ alumnoId: ALUMNO_1, estado: "ausente" }] },
  });
  assert.equal(prisma.asistencia.rows.length, 1);

  // El docente se da cuenta de que en realidad llegó tarde.
  const secondPut = await jsonRequest(baseUrl, "PUT", `/api/aulas/${AULA_ID}/asistencia/${FECHA}`, {
    token,
    body: { registros: [{ alumnoId: ALUMNO_1, estado: "tarde" }] },
  });
  assert.equal(secondPut.status, 200);
  assert.equal(prisma.asistencia.rows.length, 1, "no debe duplicar la fila");
  assert.equal(prisma.asistencia.rows[0].estado, "tarde");
});

test("PUT con un alumno que no es miembro de la aula → 400", async () => {
  const token = tokenFor({ id: DOCENTE, role: "TEACHER", schoolId: ESCUELA });
  const res = await jsonRequest(baseUrl, "PUT", `/api/aulas/${AULA_ID}/asistencia/${FECHA}`, {
    token,
    body: { registros: [{ alumnoId: ALUMNO_AJENO, estado: "presente" }] },
  });
  assert.equal(res.status, 400);
  assert.equal(prisma.asistencia.rows.length, 0);
});

test("un STUDENT no puede tomar asistencia (403)", async () => {
  const token = tokenFor({ id: ALUMNO_1, role: "USER", schoolId: ESCUELA });
  const res = await jsonRequest(baseUrl, "PUT", `/api/aulas/${AULA_ID}/asistencia/${FECHA}`, {
    token,
    body: { registros: [{ alumnoId: ALUMNO_1, estado: "presente" }] },
  });
  assert.equal(res.status, 403);
});

test("aula legacy sin status igual admite registrar asistencia (PLAN-A §2)", async () => {
  const otraAula = "aula-asistencia-legacy";
  const now = new Date().toISOString();
  prisma.clase.rows.push({
    id: otraAula,
    escuelaId: ESCUELA,
    name: "Aula legacy",
    grade: "5°",
    isDeleted: false,
    createdBy: DOCENTE,
    createdAt: now,
    // status ausente a propósito
  } as never);
  prisma.claseMiembro.rows.push({ claseId: otraAula, usuarioId: ALUMNO_1, rolEnClase: "STUDENT" });

  const token = tokenFor({ id: DOCENTE, role: "TEACHER", schoolId: ESCUELA });
  const res = await jsonRequest(baseUrl, "PUT", `/api/aulas/${otraAula}/asistencia/${FECHA}`, {
    token,
    body: { registros: [{ alumnoId: ALUMNO_1, estado: "presente" }] },
  });
  assert.equal(res.status, 200, JSON.stringify(res.body));
});
