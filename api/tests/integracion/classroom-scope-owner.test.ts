/**
 * QA-FIX-05 — Criterio único "es docente del aula" + scope reconoce al dueño.
 *
 * `requireClassroomScope` debe reconocer al DUEÑO del aula (por `createdBy`,
 * `teacherId` o `teacherOfRecord`) como autoridad de tipo TEACHER, aunque NO
 * figure en `clase_miembros` y aunque la clase no tenga `escuelaId`. El criterio
 * SOLO AMPLÍA el acceso al dueño legítimo:
 *
 *  - TEACHER dueño por `createdBy`, sin membresía, clase sin escuela → GET 200.
 *  - TEACHER dueño por `createdBy` → PUT 200 (antes 403).
 *  - TEACHER dueño por `teacherId` → GET 200.
 *  - Usuario sin relación con el aula → sigue 403 (no se abrió de más).
 *  - Miembro TEACHER existente → sigue pasando.
 *  - Admin → sigue pasando.
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

// Aula cuyo dueño es docente por `createdBy`, sin membresía y SIN escuela.
const AULA_CREATED = "aula-owner-created";
const OWNER_CREATED = "teacher-created";
// Aula cuyo dueño es docente por `teacherId`, sin membresía y SIN escuela.
const AULA_TEACHER_ID = "aula-owner-teacher-id";
const OWNER_TEACHER_ID = "teacher-tid";
// Aula con un miembro TEACHER real (camino preexistente).
const AULA_MEMBER = "aula-member";
const MEMBER_TEACHER = "member-teacher";
// Actores adicionales.
const OUTSIDER = "outsider-student";
const ADMIN = "admin-user";

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

  seedUser({ id: OWNER_CREATED, role: "TEACHER", schoolId: null });
  seedUser({ id: OWNER_TEACHER_ID, role: "TEACHER", schoolId: null });
  seedUser({ id: MEMBER_TEACHER, role: "TEACHER", schoolId: null });
  seedUser({ id: OUTSIDER, role: "STUDENT", schoolId: null });
  seedUser({ id: ADMIN, role: "ADMIN", schoolId: null });

  const now = new Date().toISOString();

  // Dueño por `createdBy`, sin escuela y sin miembros.
  prisma.clase.rows.push({
    id: AULA_CREATED,
    escuelaId: "",
    name: "Aula del creador",
    grade: "5°",
    isDeleted: false,
    status: "ACTIVE",
    createdBy: OWNER_CREATED,
    createdAt: now,
  });

  // Dueño por `teacherId` (createdBy es un tercero), sin escuela y sin miembros.
  prisma.clase.rows.push({
    id: AULA_TEACHER_ID,
    escuelaId: "",
    name: "Aula del docente de registro",
    grade: "5°",
    isDeleted: false,
    status: "ACTIVE",
    createdBy: "alguien-mas",
    teacherId: OWNER_TEACHER_ID,
    createdAt: now,
  });

  // Aula con miembro TEACHER real (createdBy es un tercero).
  prisma.clase.rows.push({
    id: AULA_MEMBER,
    escuelaId: "esc-member",
    name: "Aula con miembro docente",
    grade: "5°",
    isDeleted: false,
    status: "ACTIVE",
    createdBy: "alguien-mas",
    createdAt: now,
  });
  prisma.claseMiembro.rows.push({
    claseId: AULA_MEMBER,
    usuarioId: MEMBER_TEACHER,
    rolEnClase: "TEACHER",
  });
});

test("TEACHER dueño por createdBy (sin membresía, clase sin escuela) → GET 200", async () => {
  const token = tokenFor({ id: OWNER_CREATED, role: "TEACHER", schoolId: null });
  const { status } = await jsonRequest(baseUrl, "GET", `/api/aulas/${AULA_CREATED}`, { token });
  assert.equal(status, 200);
});

test("TEACHER dueño por createdBy → PUT 200 (antes 403)", async () => {
  const token = tokenFor({ id: OWNER_CREATED, role: "TEACHER", schoolId: null });
  const { status, body } = await jsonRequest(baseUrl, "PUT", `/api/aulas/${AULA_CREATED}`, {
    token,
    body: { name: "Aula renombrada" },
  });
  assert.equal(status, 200);
  assert.deepEqual(body, { ok: true });
});

test("TEACHER dueño por teacherId → GET 200", async () => {
  const token = tokenFor({ id: OWNER_TEACHER_ID, role: "TEACHER", schoolId: null });
  const { status } = await jsonRequest(baseUrl, "GET", `/api/aulas/${AULA_TEACHER_ID}`, { token });
  assert.equal(status, 200);
});

test("Usuario sin relación con el aula → sigue 403 (no se abrió de más)", async () => {
  const token = tokenFor({ id: OUTSIDER, role: "STUDENT", schoolId: null });
  const { status, body } = await jsonRequest(baseUrl, "GET", `/api/aulas/${AULA_CREATED}`, { token });
  assert.equal(status, 403);
  assert.equal((body as { error?: string })?.error, "forbidden");
});

test("Miembro TEACHER existente → sigue pasando", async () => {
  const token = tokenFor({ id: MEMBER_TEACHER, role: "TEACHER", schoolId: null });
  const { status } = await jsonRequest(baseUrl, "GET", `/api/aulas/${AULA_MEMBER}`, { token });
  assert.equal(status, 200);
});

test("Admin → sigue pasando", async () => {
  const token = tokenFor({ id: ADMIN, role: "ADMIN", schoolId: null });
  const { status } = await jsonRequest(baseUrl, "GET", `/api/aulas/${AULA_CREATED}`, { token });
  assert.equal(status, 200);
});
