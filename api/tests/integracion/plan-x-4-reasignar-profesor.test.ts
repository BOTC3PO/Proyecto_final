/**
 * PLAN-X §4 — `POST /api/aulas/:id/reasignar-profesor` calculaba
 * `updatedMembers` (alta del nuevo docente, baja del anterior) pero
 * nunca los persistía: sólo tocaba `Clase.updatedAt`. Decisión de
 * Javier (2026-07-11): conservar el endpoint y arreglarlo — persistir
 * altas/bajas reales en `ClaseMiembro`.
 */
import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";

let baseUrl: string;
let close: () => Promise<void>;

const ESCUELA_ID = "esc-px4";
const DIRECTIVO_ID = "directivo-px4";
const TEACHER_ACTUAL_ID = "teacher-actual-px4";
const TEACHER_NUEVO_ID = "teacher-nuevo-px4";
const ADMIN_MEMBER_ID = "admin-member-px4";
const AULA_ID = "aula-px4";

before(async () => {
  const { aulas } = await import("../../src/routes/aulas");
  const server = await startServer([aulas]);
  baseUrl = server.baseUrl;
  close = server.close;
});

after(async () => {
  if (close) await close();
});

beforeEach(() => {
  resetPrisma();
  seedUser({ id: DIRECTIVO_ID, role: "DIRECTIVO", schoolId: ESCUELA_ID });
  seedUser({ id: TEACHER_ACTUAL_ID, role: "TEACHER", schoolId: ESCUELA_ID });
  seedUser({ id: TEACHER_NUEVO_ID, role: "TEACHER", schoolId: ESCUELA_ID });
  seedUser({ id: ADMIN_MEMBER_ID, role: "USER", schoolId: ESCUELA_ID });

  const now = new Date().toISOString();
  prisma.clase.rows.push({
    id: AULA_ID,
    escuelaId: ESCUELA_ID,
    name: "Aula reasignar",
    grade: "5°",
    isDeleted: false,
    status: "ACTIVE",
    createdBy: TEACHER_ACTUAL_ID,
    createdAt: now,
    updatedAt: now,
  } as never);
  prisma.claseMiembro.rows.push({ claseId: AULA_ID, usuarioId: ADMIN_MEMBER_ID, rolEnClase: "ADMIN" });
  prisma.claseMiembro.rows.push({ claseId: AULA_ID, usuarioId: TEACHER_ACTUAL_ID, rolEnClase: "TEACHER" });
});

const directivo = () => tokenFor({ id: DIRECTIVO_ID, role: "DIRECTIVO", schoolId: ESCUELA_ID });

test("PLAN-X §4: reasignar-profesor persiste el alta del docente nuevo en ClaseMiembro", async () => {
  const res = await jsonRequest(baseUrl, "POST", `/api/aulas/${AULA_ID}/reasignar-profesor`, {
    token: directivo(),
    body: { teacherId: TEACHER_NUEVO_ID },
  });
  assert.equal(res.status, 200, JSON.stringify(res.body));

  const nuevoMiembro = prisma.claseMiembro.rows.find(
    (m: { claseId: string; usuarioId: string; rolEnClase: string }) =>
      m.claseId === AULA_ID && m.usuarioId === TEACHER_NUEVO_ID && m.rolEnClase === "TEACHER"
  );
  assert.ok(nuevoMiembro, "el docente nuevo debe quedar persistido como TEACHER en ClaseMiembro");
});

test("PLAN-X §4: reasignar-profesor con removeTeacherId da de baja al docente anterior", async () => {
  const res = await jsonRequest(baseUrl, "POST", `/api/aulas/${AULA_ID}/reasignar-profesor`, {
    token: directivo(),
    body: { teacherId: TEACHER_NUEVO_ID, removeTeacherId: TEACHER_ACTUAL_ID },
  });
  assert.equal(res.status, 200, JSON.stringify(res.body));

  const filas = prisma.claseMiembro.rows.filter(
    (m: { claseId: string; usuarioId: string; rolEnClase: string }) => m.claseId === AULA_ID
  );
  assert.ok(
    filas.some(
      (m: { usuarioId: string; rolEnClase: string }) =>
        m.usuarioId === TEACHER_NUEVO_ID && m.rolEnClase === "TEACHER"
    ),
    "el docente nuevo queda como TEACHER"
  );
  assert.ok(
    !filas.some(
      (m: { usuarioId: string; rolEnClase: string }) =>
        m.usuarioId === TEACHER_ACTUAL_ID && m.rolEnClase === "TEACHER"
    ),
    "el docente anterior ya no debe figurar como TEACHER"
  );
});

test("PLAN-X §4: reasignar al mismo docente que ya está a cargo no duplica la fila", async () => {
  const res = await jsonRequest(baseUrl, "POST", `/api/aulas/${AULA_ID}/reasignar-profesor`, {
    token: directivo(),
    body: { teacherId: TEACHER_ACTUAL_ID },
  });
  assert.equal(res.status, 200, JSON.stringify(res.body));

  const filas = prisma.claseMiembro.rows.filter(
    (m: { claseId: string; usuarioId: string; rolEnClase: string }) =>
      m.claseId === AULA_ID && m.usuarioId === TEACHER_ACTUAL_ID && m.rolEnClase === "TEACHER"
  );
  assert.equal(filas.length, 1);
});
