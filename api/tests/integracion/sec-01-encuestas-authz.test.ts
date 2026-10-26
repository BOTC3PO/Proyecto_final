/**
 * SEC-01 — Autorización en /api/encuestas.
 *
 * Verificaciones:
 *  - Sin token → 401 en todos los endpoints de escritura y lectura.
 *  - STUDENT con token → 403 en operaciones de escritura (POST/PUT/PATCH/DELETE).
 *  - TEACHER con token → pasa los guards (puede recibir 400/404 por lógica de negocio).
 *  - POST /api/encuestas/:id/votos: cualquier usuario con sesión puede votar (no staff-only).
 */

process.env.NODE_ENV = "test";
process.env.JWT_SECRET = process.env.JWT_SECRET ?? "test-secret-vblang";
process.env.DATABASE_URL =
  process.env.DATABASE_URL ?? "postgresql://test:test@localhost:5432/test";

import assert from "node:assert/strict";
import { after, before, test } from "node:test";
import {
  prisma,
  seedUser,
  tokenFor,
  startServer,
  jsonRequest,
} from "./_helpers/setup";

type SurveyOption = { id: string; label: string };

let baseUrl: string;
let close: () => Promise<void>;

const TEACHER_ID = "survey-teacher-1";
const STUDENT_ID = "survey-student-1";
const SURVEY_ID = "survey-abc-123";

before(async () => {
  seedUser({ id: TEACHER_ID, role: "TEACHER" });
  seedUser({ id: STUDENT_ID, role: "STUDENT" });
  prisma.clase.rows.push({
    id: "aula-1",
    escuelaId: "escuela-survey",
    name: "Aula encuestas",
    isDeleted: false,
    status: "ACTIVE",
    createdBy: TEACHER_ID,
    createdAt: new Date().toISOString(),
  });

  const { encuestas } = await import("../../src/routes/encuestas");
  const server = await startServer([encuestas]);
  baseUrl = server.baseUrl;
  close = server.close;
});

after(async () => { await close(); });

// ─── POST /api/encuestas ───────────────────────────────────────────────────

test("SEC-01: POST /api/encuestas sin token → 401", async () => {
  const r = await jsonRequest(baseUrl, "POST", "/api/encuestas", {
    body: { title: "Test" },
  });
  assert.equal(r.status, 401);
});

test("SEC-01: POST /api/encuestas con STUDENT → 403", async () => {
  const token = tokenFor({ id: STUDENT_ID, role: "STUDENT" });
  const r = await jsonRequest(baseUrl, "POST", "/api/encuestas", {
    token,
    body: { title: "Test" },
  });
  assert.equal(r.status, 403);
  assert.equal((r.body as { error?: string }).error, "Staff role required");
});

test("SEC-01: POST /api/encuestas con TEACHER → pasa guards (400 por payload)", async () => {
  const token = tokenFor({ id: TEACHER_ID, role: "TEACHER" });
  const r = await jsonRequest(baseUrl, "POST", "/api/encuestas", {
    token,
    body: { title: "incomplete" },
  });
  assert.notEqual(r.status, 401);
  assert.notEqual(r.status, 403);
});

// ─── PUT /api/encuestas/:id ────────────────────────────────────────────────

test("SEC-01: PUT /api/encuestas/:id sin token → 401", async () => {
  const r = await jsonRequest(baseUrl, "PUT", `/api/encuestas/${SURVEY_ID}`, {
    body: { title: "Updated" },
  });
  assert.equal(r.status, 401);
});

test("SEC-01: PUT /api/encuestas/:id con STUDENT → 403", async () => {
  const token = tokenFor({ id: STUDENT_ID, role: "STUDENT" });
  const r = await jsonRequest(baseUrl, "PUT", `/api/encuestas/${SURVEY_ID}`, {
    token,
    body: { title: "Updated" },
  });
  assert.equal(r.status, 403);
});

// ─── PATCH /api/encuestas/:id ─────────────────────────────────────────────

test("SEC-01: PATCH /api/encuestas/:id sin token → 401", async () => {
  const r = await jsonRequest(baseUrl, "PATCH", `/api/encuestas/${SURVEY_ID}`, {
    body: { status: "cerrada" },
  });
  assert.equal(r.status, 401);
});

test("SEC-01: PATCH /api/encuestas/:id con STUDENT → 403", async () => {
  const token = tokenFor({ id: STUDENT_ID, role: "STUDENT" });
  const r = await jsonRequest(baseUrl, "PATCH", `/api/encuestas/${SURVEY_ID}`, {
    token,
    body: { status: "cerrada" },
  });
  assert.equal(r.status, 403);
});

test("SEC-01: PATCH /api/encuestas/:id con TEACHER → pasa guards (404 por survey inexistente)", async () => {
  const token = tokenFor({ id: TEACHER_ID, role: "TEACHER" });
  const r = await jsonRequest(baseUrl, "PATCH", `/api/encuestas/${SURVEY_ID}`, {
    token,
    body: { status: "cerrada" },
  });
  assert.notEqual(r.status, 401);
  assert.notEqual(r.status, 403);
});

// ─── DELETE /api/encuestas/:id ────────────────────────────────────────────

test("SEC-01: DELETE /api/encuestas/:id sin token → 401", async () => {
  const res = await fetch(`${baseUrl}/api/encuestas/${SURVEY_ID}`, { method: "DELETE" });
  assert.equal(res.status, 401);
});

test("SEC-01: DELETE /api/encuestas/:id con STUDENT → 403", async () => {
  const token = tokenFor({ id: STUDENT_ID, role: "STUDENT" });
  const res = await fetch(`${baseUrl}/api/encuestas/${SURVEY_ID}`, {
    method: "DELETE",
    headers: { authorization: `Bearer ${token}` },
  });
  assert.equal(res.status, 403);
});

test("SEC-01: DELETE /api/encuestas/:id con TEACHER → pasa guards (404 survey inexistente)", async () => {
  const token = tokenFor({ id: TEACHER_ID, role: "TEACHER" });
  const res = await fetch(`${baseUrl}/api/encuestas/${SURVEY_ID}`, {
    method: "DELETE",
    headers: { authorization: `Bearer ${token}` },
  });
  assert.notEqual(res.status, 401);
  assert.notEqual(res.status, 403);
});

// ─── POST /api/encuestas/:id/votos ────────────────────────────────────────

test("SEC-01: POST /api/encuestas/:id/votos sin token → 401", async () => {
  const r = await jsonRequest(baseUrl, "POST", `/api/encuestas/${SURVEY_ID}/votos`, {
    body: { aulaId: "aula-1", optionId: "opt-1" },
  });
  assert.equal(r.status, 401);
});

test("SEC-01: POST /api/encuestas/:id/votos con STUDENT → pasa guards (no requiere staff)", async () => {
  const token = tokenFor({ id: STUDENT_ID, role: "STUDENT" });
  const r = await jsonRequest(baseUrl, "POST", `/api/encuestas/${SURVEY_ID}/votos`, {
    token,
    body: { aulaId: "aula-1", optionId: "opt-1" },
  });
  assert.notEqual(r.status, 401);
  assert.notEqual(r.status, 403);
});

// ─── GET /api/encuestas ───────────────────────────────────────────────────

test("SEC-01: GET /api/encuestas sin token → 401", async () => {
  const res = await fetch(`${baseUrl}/api/encuestas?aulaId=aula-1`);
  assert.equal(res.status, 401);
});

test("SEC-01: GET /api/encuestas con STUDENT → 200 (lectura pública con sesión)", async () => {
  const token = tokenFor({ id: STUDENT_ID, role: "STUDENT" });
  const res = await fetch(`${baseUrl}/api/encuestas?aulaId=aula-1`, {
    headers: { authorization: `Bearer ${token}` },
  });
  assert.equal(res.status, 200);
});

// ─── §1 PLAN-X: options debe llegar parseado (array), no como string JSON ──

test("PLAN-X §1: GET /api/encuestas devuelve options como array, no string", async () => {
  const teacherToken = tokenFor({ id: TEACHER_ID, role: "TEACHER" });
  const studentToken = tokenFor({ id: STUDENT_ID, role: "STUDENT" });
  const now = new Date();
  const createRes = await jsonRequest(baseUrl, "POST", "/api/encuestas", {
    token: teacherToken,
    body: {
      id: "survey-options-1",
      title: "Encuesta con opciones",
      description: "Verifica parseo de options",
      classroomId: "aula-1",
      type: "normal",
      options: [
        { id: "opt-1", label: "Opción 1" },
        { id: "opt-2", label: "Opción 2" },
      ],
      startAt: now.toISOString(),
      endAt: new Date(now.getTime() + 60_000).toISOString(),
    },
  });
  assert.equal(createRes.status, 201, JSON.stringify(createRes.body));

  const listRes = await fetch(`${baseUrl}/api/encuestas?aulaId=aula-1`, {
    headers: { authorization: `Bearer ${studentToken}` },
  });
  assert.equal(listRes.status, 200);
  const listBody = (await listRes.json()) as { items: Array<{ options: SurveyOption[] }> };
  const listed = listBody.items.find((item) => Array.isArray(item.options) && item.options.length === 2);
  assert.ok(listed, "la encuesta creada debe tener options como array de 2 elementos");
  assert.deepEqual(
    listed!.options.map((o) => o.id).sort(),
    ["opt-1", "opt-2"]
  );

  const detailRes = await fetch(`${baseUrl}/api/encuestas/survey-options-1?aulaId=aula-1`, {
    headers: { authorization: `Bearer ${studentToken}` },
  });
  assert.equal(detailRes.status, 200);
  const detailBody = (await detailRes.json()) as { options: SurveyOption[] };
  assert.ok(Array.isArray(detailBody.options), "GET /:id debe devolver options como array");
  assert.equal(detailBody.options.length, 2);
});
