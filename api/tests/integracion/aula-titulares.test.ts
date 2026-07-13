/**
 * PLAN-U §6 — co-titulares de aula: "2 profesores, o 1 profesor + 1
 * directivo" dueños de la misma aula. El dueño original (teacherId)
 * nunca se toca; el co-titular es una fila `ClaseMiembro` extra con
 * rolEnClase TEACHER o DIRECTIVO, que `isClassroomTeacher` reconoce
 * como autoridad docente completa (probado acá vía PATCH /api/aulas/:id,
 * que exige esa autoridad).
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

const SCHOOL = "esc-1";
const OTHER_SCHOOL = "esc-2";
const AULA = "aula-titulares-1";
const OWNER = "owner-teacher";
const CANDIDATE_TEACHER = "candidate-teacher";
const CANDIDATE_DIRECTIVO = "candidate-directivo";
const CANDIDATE_STUDENT = "candidate-student";
const OUTSIDER_SCHOOL_TEACHER = "outsider-school-teacher";
const OUTSIDER = "outsider-no-relation";

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
  seedUser({ id: OWNER, role: "TEACHER", schoolId: SCHOOL });
  seedUser({ id: CANDIDATE_TEACHER, role: "TEACHER", schoolId: SCHOOL, fullName: "Docente Candidato" });
  seedUser({ id: CANDIDATE_DIRECTIVO, role: "DIRECTIVO", schoolId: SCHOOL, fullName: "Directivo Candidato" });
  seedUser({ id: CANDIDATE_STUDENT, role: "STUDENT", schoolId: SCHOOL });
  seedUser({ id: OUTSIDER_SCHOOL_TEACHER, role: "TEACHER", schoolId: OTHER_SCHOOL });
  seedUser({ id: OUTSIDER, role: "STUDENT", schoolId: null });

  prisma.clase.rows.push({
    id: AULA,
    escuelaId: SCHOOL,
    name: "Aula con co-titulares",
    grade: "5°",
    isDeleted: false,
    status: "ACTIVE",
    teacherId: OWNER,
    createdAt: new Date().toISOString(),
  });
});

const ownerToken = () => tokenFor({ id: OWNER, role: "TEACHER", schoolId: SCHOOL });

test("GET titulares-candidatos: lista docentes/directivos de la escuela, sin el dueño ni STUDENT", async () => {
  const { status, body } = await jsonRequest(
    baseUrl, "GET", `/api/aulas/${AULA}/titulares-candidatos`, { token: ownerToken() }
  );
  assert.equal(status, 200);
  const ids = (body as { items: { id: string }[] }).items.map((i) => i.id).sort();
  assert.deepEqual(ids, [CANDIDATE_DIRECTIVO, CANDIDATE_TEACHER].sort());
});

test("POST titulares: el dueño agrega un TEACHER de la misma escuela → 201", async () => {
  const { status } = await jsonRequest(
    baseUrl, "POST", `/api/aulas/${AULA}/titulares`,
    { token: ownerToken(), body: { userId: CANDIDATE_TEACHER } }
  );
  assert.equal(status, 201);

  const get = await jsonRequest(baseUrl, "GET", `/api/aulas/${AULA}/titulares`, { token: ownerToken() });
  assert.equal(get.status, 200);
  const coTitulares = (get.body as { coTitulares: { id: string }[] }).coTitulares;
  assert.equal(coTitulares.length, 1);
  assert.equal(coTitulares[0].id, CANDIDATE_TEACHER);
});

// NOTA: no probamos la autoridad vía PATCH /api/aulas/:id porque esa ruta
// tiene `allowSchoolMatch: true` sin `schoolMatchRoles` — CUALQUIER
// TEACHER/DIRECTIVO de la MISMA escuela ya pasa por ahí (acceso de staff
// de escuela, no específico de titularidad). La señal limpia de "esta
// persona es reconocida como docente DE ESTA aula" es
// `computeViewerRoleInClass`, que sólo mira la membresía real (no el
// school-match), vía `viewerRoleInClass` en GET /api/aulas/:id.

test("co-titular agregado pasa a viewerRoleInClass=TEACHER en GET /api/aulas/:id", async () => {
  const before = await jsonRequest(
    baseUrl, "GET", `/api/aulas/${AULA}`,
    { token: tokenFor({ id: CANDIDATE_TEACHER, role: "TEACHER", schoolId: SCHOOL }) }
  );
  assert.equal((before.body as { viewerRoleInClass?: string | null }).viewerRoleInClass, null);

  await jsonRequest(
    baseUrl, "POST", `/api/aulas/${AULA}/titulares`,
    { token: ownerToken(), body: { userId: CANDIDATE_TEACHER } }
  );

  const after = await jsonRequest(
    baseUrl, "GET", `/api/aulas/${AULA}`,
    { token: tokenFor({ id: CANDIDATE_TEACHER, role: "TEACHER", schoolId: SCHOOL }) }
  );
  assert.equal((after.body as { viewerRoleInClass?: string | null }).viewerRoleInClass, "TEACHER");
});

test("co-titular DIRECTIVO también queda viewerRoleInClass=TEACHER (1 profesor + 1 directivo)", async () => {
  await jsonRequest(
    baseUrl, "POST", `/api/aulas/${AULA}/titulares`,
    { token: ownerToken(), body: { userId: CANDIDATE_DIRECTIVO } }
  );
  const after = await jsonRequest(
    baseUrl, "GET", `/api/aulas/${AULA}`,
    { token: tokenFor({ id: CANDIDATE_DIRECTIVO, role: "DIRECTIVO", schoolId: SCHOOL }) }
  );
  assert.equal((after.body as { viewerRoleInClass?: string | null }).viewerRoleInClass, "TEACHER");
});

test("POST titulares: rechaza un 3er titular (máximo dueño + 1 co-titular)", async () => {
  await jsonRequest(
    baseUrl, "POST", `/api/aulas/${AULA}/titulares`,
    { token: ownerToken(), body: { userId: CANDIDATE_TEACHER } }
  );
  const { status, body } = await jsonRequest(
    baseUrl, "POST", `/api/aulas/${AULA}/titulares`,
    { token: ownerToken(), body: { userId: CANDIDATE_DIRECTIVO } }
  );
  assert.equal(status, 400);
  assert.equal((body as { error?: string })?.error, "classroom already has 2 titulares");
});

test("POST titulares: rechaza un usuario que no es TEACHER ni DIRECTIVO", async () => {
  const { status, body } = await jsonRequest(
    baseUrl, "POST", `/api/aulas/${AULA}/titulares`,
    { token: ownerToken(), body: { userId: CANDIDATE_STUDENT } }
  );
  assert.equal(status, 400);
  assert.equal((body as { error?: string })?.error, "user must be TEACHER or DIRECTIVO");
});

test("POST titulares: rechaza un docente de otra escuela", async () => {
  const { status, body } = await jsonRequest(
    baseUrl, "POST", `/api/aulas/${AULA}/titulares`,
    { token: ownerToken(), body: { userId: OUTSIDER_SCHOOL_TEACHER } }
  );
  assert.equal(status, 403);
  assert.equal((body as { error?: string })?.error, "user school mismatch");
});

test("DELETE titulares: no permite quitar al dueño original", async () => {
  const { status, body } = await jsonRequest(
    baseUrl, "DELETE", `/api/aulas/${AULA}/titulares/${OWNER}`, { token: ownerToken() }
  );
  assert.equal(status, 400);
  assert.equal((body as { error?: string })?.error, "cannot remove the original owner");
});

test("DELETE titulares: quita un co-titular y pierde la membresía (viewerRoleInClass vuelve a null)", async () => {
  await jsonRequest(
    baseUrl, "POST", `/api/aulas/${AULA}/titulares`,
    { token: ownerToken(), body: { userId: CANDIDATE_TEACHER } }
  );
  const del = await jsonRequest(
    baseUrl, "DELETE", `/api/aulas/${AULA}/titulares/${CANDIDATE_TEACHER}`, { token: ownerToken() }
  );
  assert.equal(del.status, 204);

  const get = await jsonRequest(baseUrl, "GET", `/api/aulas/${AULA}/titulares`, { token: ownerToken() });
  assert.deepEqual((get.body as { coTitulares: unknown[] }).coTitulares, []);

  const after = await jsonRequest(
    baseUrl, "GET", `/api/aulas/${AULA}`,
    { token: tokenFor({ id: CANDIDATE_TEACHER, role: "TEACHER", schoolId: SCHOOL }) }
  );
  assert.equal((after.body as { viewerRoleInClass?: string | null }).viewerRoleInClass, null);
});

test("Un usuario sin relación con el aula no puede agregar titulares (403)", async () => {
  const token = tokenFor({ id: OUTSIDER, role: "STUDENT", schoolId: null });
  const { status } = await jsonRequest(
    baseUrl, "POST", `/api/aulas/${AULA}/titulares`,
    { token, body: { userId: CANDIDATE_TEACHER } }
  );
  assert.equal(status, 403);
});
