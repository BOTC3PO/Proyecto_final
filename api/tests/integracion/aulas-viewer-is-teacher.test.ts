/**
 * QA-FIX-08 — `GET /api/aulas` expone `viewerIsTeacher` derivado
 * del criterio canónico de QA-FIX-05 (Q8).
 *
 * Síntoma: `ProfesorCalendario` filtraba el dropdown de aulas
 * con `a.teacherIds?.includes(user.id)`. El back NUNCA poblaba
 * `teacherIds` (es un campo phantom del `Classroom` type — el
 * modelo Prisma tiene `teacherId`/`teacherOfRecord` singulares),
 * así que un TEACHER-miembro del aula (no creador) quedaba
 * fuera del dropdown → form.aulaId = "" → POST → 400.
 *
 * Fix: el back calcula `viewerIsTeacher` por aula usando
 * `isClassroomTeacher` (classroom-scope.ts:57-67), que es el
 * criterio canónico de "es docente del aula": admin, owner
 * por `createdBy`/`teacherId`/`teacherOfRecord`, o miembro
 * con `rolEnClase === "TEACHER"`.
 *
 * Cubre:
 *  1. TEACHER owner por `createdBy` → viewerIsTeacher: true.
 *  2. TEACHER owner por `teacherId` → viewerIsTeacher: true.
 *  3. TEACHER owner por `teacherOfRecord` → viewerIsTeacher: true.
 *  4. TEACHER member con `rolEnClase === "TEACHER"` (camino
 *     preexistente que el filtro del front NO capturaba) →
 *     viewerIsTeacher: true.
 *  5. TEACHER ajeno al aula (ni owner ni miembro) →
 *     viewerIsTeacher: false (sigue apareciendo en la lista
 *     porque el filtro staff de `GET /api/aulas` lo trae por
 *     escuela, pero el flag lo deja fuera del dropdown).
 *  6. ADMIN → viewerIsTeacher: true en todas.
 *  7. STUDENT ajeno no aparece en la lista (filtrado por
 *     accessLevel: learner).
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

// Docentes.
const TEACHER_OWNER = "teacher-owner";
const TEACHER_TID = "teacher-tid";
const TEACHER_TOR = "teacher-tor";
const TEACHER_MEMBER = "teacher-member";
const TEACHER_OUTSIDER = "teacher-outsider";
const ADMIN = "admin";
const STUDENT = "student";

// Aulas: cada una con un solo "camino" de owner para que los
// asserts sean específicos.
const AULA_CREATED = "aula-created";
const AULA_TID = "aula-tid";
const AULA_TOR = "aula-tor";
const AULA_MEMBER = "aula-member";
const AULA_NONE = "aula-none";

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

  // Todos en la misma escuela para que el filtro "staff" de
  // GET /api/aulas los incluya a todos.
  const schoolId = "esc-1";
  seedUser({ id: TEACHER_OWNER, role: "TEACHER", schoolId });
  seedUser({ id: TEACHER_TID, role: "TEACHER", schoolId });
  seedUser({ id: TEACHER_TOR, role: "TEACHER", schoolId });
  seedUser({ id: TEACHER_MEMBER, role: "TEACHER", schoolId });
  seedUser({ id: TEACHER_OUTSIDER, role: "TEACHER", schoolId });
  seedUser({ id: ADMIN, role: "ADMIN", schoolId: null });
  // "USER" es el role del Alumno en la membresía canónica
  // (membership-roles.ts:9). El back mapea USER → STUDENT.
  seedUser({ id: STUDENT, role: "USER", schoolId });

  const now = new Date().toISOString();
  const seedAula = (id: string, fields: Record<string, unknown> = {}) => {
    prisma.clase.rows.push({
      id,
      escuelaId: schoolId,
      name: `Aula ${id}`,
      grade: "5°",
      isDeleted: false,
      status: "ACTIVE",
      createdAt: now,
      ...fields
    });
  };

  // Una aula por cada camino del criterio:
  seedAula(AULA_CREATED, { createdBy: TEACHER_OWNER });
  seedAula(AULA_TID, { teacherId: TEACHER_TID });
  seedAula(AULA_TOR, { teacherOfRecord: TEACHER_TOR });
  seedAula(AULA_MEMBER, {
    // TEACHER_MEMBER NO es owner — es solo miembro en
    // clase_miembros. Cubre el camino que el filtro viejo
    // del front NO capturaba.
  });
  seedAula(AULA_NONE, {
    // Sin owner, sin miembro TEACHER_MEMBER.
    // TEACHER_OUTSIDER no está relacionado en absoluto.
  });

  // TEACHER_MEMBER es miembro de AULA_MEMBER con rol TEACHER.
  prisma.claseMiembro.rows.push({
    claseId: AULA_MEMBER,
    usuarioId: TEACHER_MEMBER,
    rolEnClase: "TEACHER"
  });
});

test("QA-FIX-08: TEACHER owner por createdBy → viewerIsTeacher: true", async () => {
  const token = tokenFor({ id: TEACHER_OWNER, role: "TEACHER" });
  const res = await jsonRequest(baseUrl, "GET", "/api/aulas", { token });
  assert.equal(res.status, 200);
  const items = (res.body as { items: Array<{ id: string; viewerIsTeacher: boolean }> }).items;
  const aula = items.find((a) => a.id === AULA_CREATED);
  assert.ok(aula, "AULA_CREATED debe estar en la lista");
  assert.equal(aula.viewerIsTeacher, true);
});

test("QA-FIX-08: TEACHER owner por teacherId → viewerIsTeacher: true", async () => {
  const token = tokenFor({ id: TEACHER_TID, role: "TEACHER" });
  const res = await jsonRequest(baseUrl, "GET", "/api/aulas", { token });
  assert.equal(res.status, 200);
  const items = (res.body as { items: Array<{ id: string; viewerIsTeacher: boolean }> }).items;
  const aula = items.find((a) => a.id === AULA_TID);
  assert.ok(aula);
  assert.equal(aula.viewerIsTeacher, true);
});

test("QA-FIX-08: TEACHER owner por teacherOfRecord → viewerIsTeacher: true", async () => {
  const token = tokenFor({ id: TEACHER_TOR, role: "TEACHER" });
  const res = await jsonRequest(baseUrl, "GET", "/api/aulas", { token });
  assert.equal(res.status, 200);
  const items = (res.body as { items: Array<{ id: string; viewerIsTeacher: boolean }> }).items;
  const aula = items.find((a) => a.id === AULA_TOR);
  assert.ok(aula);
  assert.equal(aula.viewerIsTeacher, true);
});

test("QA-FIX-08: TEACHER member (clase_miembros, no owner) → viewerIsTeacher: true", async () => {
  // Este es el camino que el bug original NO capturaba: TEACHER_MEMBER
  // no es createdBy/teacherId/teacherOfRecord de AULA_MEMBER, sólo
  // es miembro con rolEnClase: "TEACHER". El filtro viejo del front
  // (a.teacherIds?.includes) lo descartaba.
  const token = tokenFor({ id: TEACHER_MEMBER, role: "TEACHER" });
  const res = await jsonRequest(baseUrl, "GET", "/api/aulas", { token });
  assert.equal(res.status, 200);
  const items = (res.body as { items: Array<{ id: string; viewerIsTeacher: boolean }> }).items;
  const aula = items.find((a) => a.id === AULA_MEMBER);
  assert.ok(aula, "AULA_MEMBER debe estar en la lista");
  assert.equal(aula.viewerIsTeacher, true);
});

test("QA-FIX-08: TEACHER ajeno al aula → viewerIsTeacher: false", async () => {
  // TEACHER_OUTSIDER está en la escuela de las 5 aulas, así que el
  // filtro staff de GET /api/aulas las lista. Pero como no es owner
  // ni miembro de ninguna, viewerIsTeacher debe ser false.
  const token = tokenFor({ id: TEACHER_OUTSIDER, role: "TEACHER" });
  const res = await jsonRequest(baseUrl, "GET", "/api/aulas", { token });
  assert.equal(res.status, 200);
  const items = (res.body as { items: Array<{ id: string; viewerIsTeacher: boolean }> }).items;
  assert.equal(items.length, 5, "debe ver las 5 aulas de su escuela");
  for (const aula of items) {
    assert.equal(aula.viewerIsTeacher, false, `${aula.id} debería ser false`);
  }
});

test("QA-FIX-08: ADMIN → viewerIsTeacher: true en todas", async () => {
  // Los admins globales acceden a TODAS las aulas (accessLevel: admin
  // en aulas.ts:100-101). isClassroomTeacher retorna true si role ===
  // "ADMIN" (classroom-scope.ts:62), así que viewerIsTeacher debe
  // ser true en todas.
  const token = tokenFor({ id: ADMIN, role: "ADMIN" });
  const res = await jsonRequest(baseUrl, "GET", "/api/aulas", { token });
  assert.equal(res.status, 200);
  const items = (res.body as { items: Array<{ id: string; viewerIsTeacher: boolean }> }).items;
  assert.ok(items.length >= 5);
  for (const aula of items) {
    assert.equal(aula.viewerIsTeacher, true, `${aula.id} debería ser true para ADMIN`);
  }
});

test("QA-FIX-08: STUDENT ajeno no aparece en la lista (filtro accessLevel: learner)", async () => {
  // El filtro 'learner' de GET /api/aulas (aulas.ts:121-129) solo
  // muestra aulas donde el user es miembro de clase_miembros.
  // STUDENT no es miembro de ninguna, así que la lista viene vacía.
  // Nota: el role "canónico" de alumno en el back es "USER"
  // (membership-roles.ts:9), no "STUDENT" (eso es la membresía).
  const token = tokenFor({ id: STUDENT, role: "USER" });
  const res = await jsonRequest(baseUrl, "GET", "/api/aulas", { token });
  assert.equal(res.status, 200);
  const items = (res.body as { items: unknown[] }).items;
  assert.deepEqual(items, []);
});

test("QA-FIX-08: el response NO incluye el array 'miembros' crudo de Prisma", async () => {
  // Defensive: el back hace `include: { miembros: true }` para
  // calcular viewerIsTeacher, pero el spread `...rest` no debe
  // exponerlo crudo (front espera `members` mapeado o nada).
  const token = tokenFor({ id: TEACHER_OWNER, role: "TEACHER" });
  const res = await jsonRequest(baseUrl, "GET", "/api/aulas", { token });
  assert.equal(res.status, 200);
  const items = (res.body as { items: Array<Record<string, unknown>> }).items;
  for (const item of items) {
    assert.equal(
      "miembros" in item,
      false,
      `item ${item.id} no debe exponer 'miembros' crudo de Prisma`
    );
  }
});
