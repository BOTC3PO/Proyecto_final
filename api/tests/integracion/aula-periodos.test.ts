/**
 * PLAN-V §1 — períodos académicos EN el aula (no un motor de calendario
 * global): lista libre y ordenada de { nombre, desde, hasta } por aula.
 * Sin agregación de notas todavía (eso es §3, sesión aparte).
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

const SCHOOL = "esc-periodos";
const AULA = "aula-periodos-1";
const AULA_ARCHIVADA = "aula-periodos-archivada";
const OWNER = "owner-periodos";
const OUTSIDER = "outsider-periodos";

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
  seedUser({ id: OUTSIDER, role: "STUDENT", schoolId: null });

  const now = new Date().toISOString();
  prisma.clase.rows.push({
    id: AULA,
    escuelaId: SCHOOL,
    name: "Aula con períodos",
    grade: "5°",
    isDeleted: false,
    status: "ACTIVE",
    teacherId: OWNER,
    createdAt: now,
  });
  prisma.clase.rows.push({
    id: AULA_ARCHIVADA,
    escuelaId: SCHOOL,
    name: "Aula archivada",
    grade: "5°",
    isDeleted: false,
    status: "ARCHIVED",
    teacherId: OWNER,
    createdAt: now,
  });
});

const ownerToken = () => tokenFor({ id: OWNER, role: "TEACHER", schoolId: SCHOOL });

test("POST periodos: crea el primer período con orden=0", async () => {
  const { status, body } = await jsonRequest(
    baseUrl, "POST", `/api/aulas/${AULA}/periodos`,
    { token: ownerToken(), body: { nombre: "1er bimestre", desde: "2026-03-01", hasta: "2026-05-01" } }
  );
  assert.equal(status, 201);
  assert.equal((body as { orden?: number }).orden, 0);
});

test("POST periodos: el segundo período incrementa orden", async () => {
  await jsonRequest(
    baseUrl, "POST", `/api/aulas/${AULA}/periodos`,
    { token: ownerToken(), body: { nombre: "1er bimestre", desde: "2026-03-01", hasta: "2026-05-01" } }
  );
  const { body } = await jsonRequest(
    baseUrl, "POST", `/api/aulas/${AULA}/periodos`,
    { token: ownerToken(), body: { nombre: "2do bimestre", desde: "2026-05-02", hasta: "2026-07-01" } }
  );
  assert.equal((body as { orden?: number }).orden, 1);
});

test("GET periodos: lista ordenada por orden asc", async () => {
  await jsonRequest(
    baseUrl, "POST", `/api/aulas/${AULA}/periodos`,
    { token: ownerToken(), body: { nombre: "1er bimestre", desde: "2026-03-01", hasta: "2026-05-01" } }
  );
  await jsonRequest(
    baseUrl, "POST", `/api/aulas/${AULA}/periodos`,
    { token: ownerToken(), body: { nombre: "2do bimestre", desde: "2026-05-02", hasta: "2026-07-01" } }
  );
  const { status, body } = await jsonRequest(baseUrl, "GET", `/api/aulas/${AULA}/periodos`, { token: ownerToken() });
  assert.equal(status, 200);
  const nombres = (body as { items: { nombre: string }[] }).items.map((i) => i.nombre);
  assert.deepEqual(nombres, ["1er bimestre", "2do bimestre"]);
});

test("POST periodos: rechaza desde > hasta", async () => {
  const { status } = await jsonRequest(
    baseUrl, "POST", `/api/aulas/${AULA}/periodos`,
    { token: ownerToken(), body: { nombre: "Inválido", desde: "2026-07-01", hasta: "2026-03-01" } }
  );
  assert.equal(status, 400);
});

test("PATCH periodos: edita el nombre", async () => {
  const created = await jsonRequest(
    baseUrl, "POST", `/api/aulas/${AULA}/periodos`,
    { token: ownerToken(), body: { nombre: "Bimestre 1", desde: "2026-03-01", hasta: "2026-05-01" } }
  );
  const periodoId = (created.body as { id: string }).id;
  const patch = await jsonRequest(
    baseUrl, "PATCH", `/api/aulas/${AULA}/periodos/${periodoId}`,
    { token: ownerToken(), body: { nombre: "Primer bimestre" } }
  );
  assert.equal(patch.status, 200);
  const get = await jsonRequest(baseUrl, "GET", `/api/aulas/${AULA}/periodos`, { token: ownerToken() });
  const items = (get.body as { items: { id: string; nombre: string }[] }).items;
  assert.equal(items.find((i) => i.id === periodoId)?.nombre, "Primer bimestre");
});

test("DELETE periodos: quita el período", async () => {
  const created = await jsonRequest(
    baseUrl, "POST", `/api/aulas/${AULA}/periodos`,
    { token: ownerToken(), body: { nombre: "A borrar", desde: "2026-03-01", hasta: "2026-05-01" } }
  );
  const periodoId = (created.body as { id: string }).id;
  const del = await jsonRequest(baseUrl, "DELETE", `/api/aulas/${AULA}/periodos/${periodoId}`, { token: ownerToken() });
  assert.equal(del.status, 204);
  const get = await jsonRequest(baseUrl, "GET", `/api/aulas/${AULA}/periodos`, { token: ownerToken() });
  assert.deepEqual((get.body as { items: unknown[] }).items, []);
});

test("Un usuario sin relación con el aula no puede crear períodos (403)", async () => {
  const token = tokenFor({ id: OUTSIDER, role: "STUDENT", schoolId: null });
  const { status } = await jsonRequest(
    baseUrl, "POST", `/api/aulas/${AULA}/periodos`,
    { token, body: { nombre: "Intento ajeno", desde: "2026-03-01", hasta: "2026-05-01" } }
  );
  assert.equal(status, 403);
});

test("POST periodos: bloqueado en aula archivada (read-only)", async () => {
  const { status, body } = await jsonRequest(
    baseUrl, "POST", `/api/aulas/${AULA_ARCHIVADA}/periodos`,
    { token: ownerToken(), body: { nombre: "No debería crearse", desde: "2026-03-01", hasta: "2026-05-01" } }
  );
  assert.equal(status, 403);
  assert.equal((body as { error?: string })?.error, "classroom is read-only");
});
