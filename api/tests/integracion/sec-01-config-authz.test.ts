/**
 * SEC-01 — Autorización en /api/config/materias y /api/config/categorias.
 *
 * Verificaciones:
 *  - Sin token → 401 en ambos PATCH.
 *  - STUDENT con token → 403 en ambos PATCH.
 *  - TEACHER con token → 403 en ambos PATCH (requiere ADMIN).
 *  - ADMIN con token → 200 en ambos PATCH.
 *  - GET es accesible para cualquier usuario con sesión (cubierto por requireUser global;
 *    aquí solo probamos que los PATCH quedan correctamente protegidos).
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

const ADMIN_ID = "config-admin-1";
const TEACHER_ID = "config-teacher-1";
const STUDENT_ID = "config-student-1";

before(async () => {
  seedUser({ id: ADMIN_ID, role: "ADMIN" });
  seedUser({ id: TEACHER_ID, role: "TEACHER" });
  seedUser({ id: STUDENT_ID, role: "STUDENT" });

  const { configuracion } = await import("../../src/routes/configuracion");
  const server = await startServer([configuracion]);
  baseUrl = server.baseUrl;
  close = server.close;
});

after(async () => { await close(); });

const patchMaterias = (token?: string) =>
  jsonRequest(baseUrl, "PATCH", "/api/config/materias", {
    token,
    body: { items: ["Matemáticas", "Lengua"] },
  });

const patchCategorias = (token?: string) =>
  jsonRequest(baseUrl, "PATCH", "/api/config/categorias", {
    token,
    body: { items: ["Álgebra", "Geometría"] },
  });

// ─── PATCH /api/config/materias ───────────────────────────────────────────

test("SEC-01: PATCH /api/config/materias sin token → 401", async () => {
  const r = await patchMaterias();
  assert.equal(r.status, 401);
});

test("SEC-01: PATCH /api/config/materias con STUDENT → 403", async () => {
  const r = await patchMaterias(tokenFor({ id: STUDENT_ID, role: "STUDENT" }));
  assert.equal(r.status, 403);
});

test("SEC-01: PATCH /api/config/materias con TEACHER → 403", async () => {
  const r = await patchMaterias(tokenFor({ id: TEACHER_ID, role: "TEACHER" }));
  assert.equal(r.status, 403);
});

test("SEC-01: PATCH /api/config/materias con ADMIN → 200", async () => {
  const r = await patchMaterias(tokenFor({ id: ADMIN_ID, role: "ADMIN" }));
  assert.equal(r.status, 200, `status=${r.status} body=${JSON.stringify(r.body)}`);
  const body = r.body as { items?: string[] };
  assert.ok(Array.isArray(body.items), "debe retornar items");
});

// ─── PATCH /api/config/categorias ─────────────────────────────────────────

test("SEC-01: PATCH /api/config/categorias sin token → 401", async () => {
  const r = await patchCategorias();
  assert.equal(r.status, 401);
});

test("SEC-01: PATCH /api/config/categorias con STUDENT → 403", async () => {
  const r = await patchCategorias(tokenFor({ id: STUDENT_ID, role: "STUDENT" }));
  assert.equal(r.status, 403);
});

test("SEC-01: PATCH /api/config/categorias con TEACHER → 403", async () => {
  const r = await patchCategorias(tokenFor({ id: TEACHER_ID, role: "TEACHER" }));
  assert.equal(r.status, 403);
});

test("SEC-01: PATCH /api/config/categorias con ADMIN → 200", async () => {
  const r = await patchCategorias(tokenFor({ id: ADMIN_ID, role: "ADMIN" }));
  assert.equal(r.status, 200, `status=${r.status} body=${JSON.stringify(r.body)}`);
  const body = r.body as { items?: string[] };
  assert.ok(Array.isArray(body.items), "debe retornar items");
});
