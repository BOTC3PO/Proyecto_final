/**
 * FIX-TABLON-403 — `/api/aula/leaderboard` y `/api/aula/actividades`
 * devolvían 403 (forbidden) para un TEACHER-miembro del aula (los dos
 * widgets que rompía el bug 2.3 de `test-parte-3-profesor.md`).
 *
 * Causa raíz documentada en el propio test anterior
 * (`aula-feed-missing-classroom-id.test.ts:110-115`): el access check
 * de `routes/aula-feed.ts` leía `classroom.schoolId ?? classroom.institutionId`
 * (campos legacy del Zod schema de Mongo) cuando el modelo Prisma expone
 * `escuelaId`. Además, el `prisma.clase.findFirst` NO incluía
 * `miembros`, así que `classroomMembers` siempre era `[]`. Para un
 * TEACHER-miembro con `escuelaId` que NO matcheaba por algún desvío
 * (o cualquier TEACHER sin `schoolId` poblado), el handler caía en
 * `return false` → 403.
 *
 * El fix reemplaza el access check ad-hoc por
 * `requireClassroomScope` (`api/src/lib/classroom-scope.ts`), que es la
 * policy canónica y ya valida miembro / dueño / school-match sobre la
 * forma Prisma real.
 *
 * Cubre:
 *  1. GET /api/aula/leaderboard con TEACHER-miembro del aula → 200.
 *  2. GET /api/aula/actividades con TEACHER-miembro del aula → 200.
 *  3. GET /api/aula/leaderboard con TEACHER de la escuela pero NO
 *     miembro del aula → 200 (school-match canónico).
 *  4. GET /api/aula/leaderboard con STUDENT ajeno al aula → 403
 *     (la policy canónica sigue siendo estricta para no-miembros
 *     sin school-match).
 *
 * Bug 2.3 — `docs/qa/test-parte-3-profesor.md`.
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

const TEACHER_MEMBER = "teacher-tablon-member";
const TEACHER_STAFF = "teacher-tablon-staff";
const STUDENT_OUTSIDER = "student-tablon-outsider";
const SCHOOL = "esc-tablon";
const OTHER_SCHOOL = "esc-otra";
const AULA = "aula-tablon";

before(async () => {
  const { aulaFeed } = await import("../../src/routes/aula-feed");
  const server = await startServer([aulaFeed]);
  baseUrl = server.baseUrl;
  close = server.close;
});

after(async () => {
  if (close) await close();
});

beforeEach(() => {
  resetPrisma();
  // El TEACHER-miembro es de la misma escuela que el aula Y figura en
  // `clase_miembros` con rol TEACHER. Antes del fix, el access check
  // ad-hoc lo trataba como outsider (porque leía `schoolId`/`institutionId`,
  // no `escuelaId`) → 403. Ahora `requireClassroomScope` lo acepta
  // por la rama "miembro TEACHER".
  seedUser({ id: TEACHER_MEMBER, role: "TEACHER", schoolId: SCHOOL });
  // El TEACHER-staff es de la misma escuela pero NO figura en
  // clase_miembros. Pasa por la rama "school-match" de la policy
  // canónica (canManageParents(TEACHER) = true + schoolId match).
  seedUser({ id: TEACHER_STAFF, role: "TEACHER", schoolId: SCHOOL });
  // STUDENT ajeno a la escuela y al aula: ningún camino lo acepta,
  // debe seguir dando 403 (la policy canónica no se relaja).
  seedUser({ id: STUDENT_OUTSIDER, role: "STUDENT", schoolId: OTHER_SCHOOL });

  const now = new Date().toISOString();
  prisma.clase.rows.push({
    id: AULA,
    escuelaId: SCHOOL,
    name: "Aula FIX-TABLON-403",
    grade: "5°",
    isDeleted: false,
    status: "ACTIVE",
    createdAt: now,
  });
  prisma.claseMiembro.rows.push({
    claseId: AULA,
    usuarioId: TEACHER_MEMBER,
    rolEnClase: "TEACHER",
  });
});

test("FIX-TABLON-403: TEACHER-miembro del aula puede cargar /api/aula/leaderboard", async () => {
  const token = tokenFor({ id: TEACHER_MEMBER, role: "TEACHER", schoolId: SCHOOL });
  const res = await jsonRequest(
    baseUrl,
    "GET",
    `/api/aula/leaderboard?classroomId=${AULA}`,
    { token },
  );
  // Antes del fix: 403 forbidden. Después: 200 con shape esperado.
  assert.equal(res.status, 200, `esperado 200, recibido ${res.status} (${JSON.stringify(res.body)})`);
  assert.deepEqual(res.body, { items: [] });
});

test("FIX-TABLON-403: TEACHER-miembro del aula puede cargar /api/aula/actividades", async () => {
  const token = tokenFor({ id: TEACHER_MEMBER, role: "TEACHER", schoolId: SCHOOL });
  const res = await jsonRequest(
    baseUrl,
    "GET",
    `/api/aula/actividades?classroomId=${AULA}`,
    { token },
  );
  assert.equal(res.status, 200, `esperado 200, recibido ${res.status} (${JSON.stringify(res.body)})`);
  assert.deepEqual(res.body, { items: [] });
});

test("FIX-TABLON-403: TEACHER de la escuela (no miembro) entra por school-match", async () => {
  // El TEACHER-staff no figura en clase_miembros pero comparte escuela.
  // La policy canónica de `requireClassroomScope` (rama school-match)
  // debería autorizarlo. Antes del fix NO entraba porque el access
  // check ad-hoc no cargaba miembros ni leía escuelaId.
  const token = tokenFor({ id: TEACHER_STAFF, role: "TEACHER", schoolId: SCHOOL });
  const res = await jsonRequest(
    baseUrl,
    "GET",
    `/api/aula/leaderboard?classroomId=${AULA}`,
    { token },
  );
  assert.equal(res.status, 200, `esperado 200, recibido ${res.status} (${JSON.stringify(res.body)})`);
});

test("FIX-TABLON-403: STUDENT ajeno al aula y a la escuela sigue en 403", async () => {
  // Candado: la policy canónica no se relajó. Un alumno de otra escuela
  // que no figura en clase_miembros NO debe poder leer el feed.
  const token = tokenFor({ id: STUDENT_OUTSIDER, role: "STUDENT", schoolId: OTHER_SCHOOL });
  const res = await jsonRequest(
    baseUrl,
    "GET",
    `/api/aula/leaderboard?classroomId=${AULA}`,
    { token },
  );
  assert.equal(res.status, 403, `esperado 403, recibido ${res.status}`);
  assert.deepEqual(res.body, { error: "forbidden" });
});
