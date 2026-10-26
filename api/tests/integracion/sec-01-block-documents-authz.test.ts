/**
 * SEC-01 — Autorización en /api/block-documents.
 *
 * Verificaciones:
 *  - Sin token → 401 en GET, POST, PATCH.
 *  - STUDENT con token → 403 en POST y PATCH (escritura es staff-only).
 *  - TEACHER con token → 201 en POST, 200 en PATCH, 200 en GET.
 *  - STUDENT con token → 200 en GET (lectura disponible para cualquier sesión).
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

let baseUrl: string;
let close: () => Promise<void>;

const TEACHER_ID = "blockdoc-teacher-1";
const STUDENT_ID = "blockdoc-student-1";
let createdDocId: string;

before(async () => {
  seedUser({ id: TEACHER_ID, role: "TEACHER" });
  seedUser({ id: STUDENT_ID, role: "STUDENT" });

  const { blockDocuments } = await import("../../src/routes/block-documents");
  const server = await startServer([blockDocuments]);
  baseUrl = server.baseUrl;
  close = server.close;
});

after(async () => { await close(); });

// ─── POST /api/block-documents ────────────────────────────────────────────

test("SEC-01: POST /api/block-documents sin token → 401", async () => {
  const r = await jsonRequest(baseUrl, "POST", "/api/block-documents", {
    body: { document: { type: "doc", content: [] } },
  });
  assert.equal(r.status, 401);
});

test("SEC-01: POST /api/block-documents con STUDENT → 403", async () => {
  const token = tokenFor({ id: STUDENT_ID, role: "STUDENT" });
  const r = await jsonRequest(baseUrl, "POST", "/api/block-documents", {
    token,
    body: { document: { type: "doc", content: [] } },
  });
  assert.equal(r.status, 403);
  assert.equal((r.body as { error?: string }).error, "Staff role required");
});

test("SEC-01: POST /api/block-documents con TEACHER → 201 (crea documento)", async () => {
  const token = tokenFor({ id: TEACHER_ID, role: "TEACHER" });
  const r = await jsonRequest(baseUrl, "POST", "/api/block-documents", {
    token,
    body: { document: { type: "doc", content: [{ type: "paragraph", text: "Hola" }] } },
  });
  assert.equal(r.status, 201);
  const body = r.body as { id?: string };
  assert.ok(body.id, "debe retornar el id del documento creado");
  createdDocId = body.id!;
});

// ─── PATCH /api/block-documents/:id ──────────────────────────────────────

test("SEC-01: PATCH /api/block-documents/:id sin token → 401", async () => {
  const r = await jsonRequest(baseUrl, "PATCH", "/api/block-documents/some-id", {
    body: { document: { type: "doc", content: [] } },
  });
  assert.equal(r.status, 401);
});

test("SEC-01: PATCH /api/block-documents/:id con STUDENT → 403", async () => {
  const token = tokenFor({ id: STUDENT_ID, role: "STUDENT" });
  const r = await jsonRequest(baseUrl, "PATCH", "/api/block-documents/some-id", {
    token,
    body: { document: { type: "doc", content: [] } },
  });
  assert.equal(r.status, 403);
  assert.equal((r.body as { error?: string }).error, "Staff role required");
});

test("SEC-01: PATCH /api/block-documents/:id con TEACHER → 200 (actualiza documento)", async () => {
  const token = tokenFor({ id: TEACHER_ID, role: "TEACHER" });
  const r = await jsonRequest(baseUrl, "PATCH", `/api/block-documents/${createdDocId}`, {
    token,
    body: { document: { type: "doc", content: [{ type: "paragraph", text: "Actualizado" }] } },
  });
  assert.equal(r.status, 200);
  const body = r.body as { id?: string };
  assert.equal(body.id, createdDocId);
});

// ─── GET /api/block-documents/:id ────────────────────────────────────────

test("SEC-01: GET /api/block-documents/:id sin token → 401", async () => {
  const res = await fetch(`${baseUrl}/api/block-documents/some-id`);
  assert.equal(res.status, 401);
});

test("SEC-01: GET /api/block-documents/:id con STUDENT → accede (200 si existe, 404 si no)", async () => {
  const token = tokenFor({ id: STUDENT_ID, role: "STUDENT" });
  const res = await fetch(`${baseUrl}/api/block-documents/${createdDocId}`, {
    headers: { authorization: `Bearer ${token}` },
  });
  assert.notEqual(res.status, 401);
  assert.notEqual(res.status, 403);
  assert.equal(res.status, 200);
});
