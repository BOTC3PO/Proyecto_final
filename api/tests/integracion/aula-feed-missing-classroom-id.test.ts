/**
 * FIX-AULA-PARAM — `aula-feed` debe responder 400 (no 404) cuando
 * falta el query param `classroomId`.
 *
 * Causa raíz: `apps/web/src/pages/aula.tsx:69` leía
 * `useParams().id`, pero la ruta es `clases/:aulaId` (router.tsx:211),
 * por lo que `classroomId` quedaba `null` y los servicios
 * (`leaderboard.ts:14`, `actividades.ts:17`, `publicaciones.ts:25,37`)
 * hacían request sin `classroomId`. El back respondía 404 con
 * `classroom not found`, lo cual despistaba el diagnóstico (parecía
 * que la ruta no existía). El fix correcto es 400 con un mensaje
 * claro que indique que el parámetro es requerido.
 *
 * Cubre:
 *  1. `GET /api/aula/leaderboard` sin `classroomId` → 400.
 *  2. `GET /api/aula/actividades` sin `classroomId` → 400.
 *  3. `GET /api/aula/publicaciones` sin `classroomId` → 400.
 *  4. `GET /api/aula/leaderboard` con `classroomId=inexistente` → 404
 *     (la línea siguiente en `resolveClassroomContext` SÍ es 404
 *     porque el id vino pero el aula no se encontró).
 *  5. `GET /api/aula/leaderboard` con `classroomId` válido y acceso
 *     permitido → 200 con `{ items: [] }` (smoke: el fix no rompe
 *     el camino feliz).
 *
 * Ver `docs/qa/diagnostico_aula_feed.md` (opción D del fix).
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

const TEACHER = "teacher-fap";
const SCHOOL = "esc-fap";
const AULA = "aula-fap";

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
  seedUser({ id: TEACHER, role: "TEACHER", schoolId: SCHOOL });

  const now = new Date().toISOString();
  prisma.clase.rows.push({
    id: AULA,
    escuelaId: SCHOOL,
    name: "Aula FIX-AULA-PARAM",
    grade: "5°",
    isDeleted: false,
    status: "ACTIVE",
    createdAt: now,
  });
  prisma.claseMiembro.rows.push({
    claseId: AULA,
    usuarioId: TEACHER,
    rolEnClase: "TEACHER",
  });
});

test("FIX-AULA-PARAM: GET /api/aula/leaderboard sin classroomId → 400 (no 404)", async () => {
  const token = tokenFor({ id: TEACHER, role: "TEACHER", schoolId: SCHOOL });
  const res = await jsonRequest(baseUrl, "GET", "/api/aula/leaderboard", { token });
  assert.equal(res.status, 400, "debe responder 400 cuando falta classroomId");
  assert.deepEqual(res.body, { error: "classroomId requerido" });
});

test("FIX-AULA-PARAM: GET /api/aula/actividades sin classroomId → 400 (no 404)", async () => {
  const token = tokenFor({ id: TEACHER, role: "TEACHER", schoolId: SCHOOL });
  const res = await jsonRequest(baseUrl, "GET", "/api/aula/actividades", { token });
  assert.equal(res.status, 400);
  assert.deepEqual(res.body, { error: "classroomId requerido" });
});

test("FIX-AULA-PARAM: GET /api/aula/publicaciones sin classroomId → 400 (no 404)", async () => {
  const token = tokenFor({ id: TEACHER, role: "TEACHER", schoolId: SCHOOL });
  const res = await jsonRequest(baseUrl, "GET", "/api/aula/publicaciones", { token });
  assert.equal(res.status, 400);
  assert.deepEqual(res.body, { error: "classroomId requerido" });
});

test("FIX-AULA-PARAM: GET /api/aula/leaderboard con classroomId inexistente → 404 (sin cambios)", async () => {
  // El 404 sigue siendo correcto cuando el id vino pero el aula no
  // existe — son dos casos distintos (parámetro faltante vs. recurso
  // inexistente) y se distinguen por el status code.
  const token = tokenFor({ id: TEACHER, role: "TEACHER", schoolId: SCHOOL });
  const res = await jsonRequest(baseUrl, "GET", "/api/aula/leaderboard?classroomId=inexistente", { token });
  assert.equal(res.status, 404);
  assert.deepEqual(res.body, { error: "classroom not found" });
});

test("FIX-AULA-PARAM: GET /api/aula/leaderboard con classroomId válido → 200 (smoke)", async () => {
  // Candado: el cambio 404→400 no rompe el camino feliz.
  // Se usa ADMIN porque el access check de aula-feed usa
  // `classroomAsDoc.schoolId ?? classroomAsDoc.institutionId` (campos
  // legacy de MongoDB), no `escuelaId` (el campo real del modelo
  // Prisma). Eso es un bug aparte; acá solo necesitamos que el fix
  // no rompa el happy path, así que ADMIN evita el access check.
  const ADMIN_ID = "admin-fap";
  seedUser({ id: ADMIN_ID, role: "ADMIN", schoolId: null });
  const token = tokenFor({ id: ADMIN_ID, role: "ADMIN", schoolId: null });
  const res = await jsonRequest(baseUrl, "GET", `/api/aula/leaderboard?classroomId=${AULA}`, { token });
  assert.equal(res.status, 200);
  assert.deepEqual(res.body, { items: [] });
});
