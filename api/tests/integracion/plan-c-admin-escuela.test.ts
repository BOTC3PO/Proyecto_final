/**
 * PLAN-C §2 (ítem 27) — admin↔escuela.
 *
 * Cubre dos cambios: (1) `POST /api/escuelas` ahora asocia al creador con
 * la escuela recién creada (antes quedaba huérfano, síntoma raíz de
 * PLAN-A §1); (2) `PATCH /api/admin/usuarios/:id/escuela`, el endpoint
 * nuevo de reasignación que NO pasa por el gate de gobernanza de
 * `.../rol` (es reorganización, no escalada de privilegios).
 */
import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";

let baseUrl: string;
let close: () => Promise<void>;

const ESCUELA = "esc-plan-c-2";
const OTRA_ESCUELA = "esc-plan-c-2-otra";
const ADMIN = "admin-plan-c-2";
const USER = "user-plan-c-2";

before(async () => {
  const { escuelas } = await import("../../src/routes/escuelas");
  const { adminRouter } = await import("../../src/routes/admin");
  const server = await startServer([escuelas, adminRouter]);
  baseUrl = server.baseUrl;
  close = server.close;
});

after(async () => {
  if (close) await close();
});

beforeEach(() => {
  resetPrisma();
  const nowIso = new Date().toISOString();
  prisma.escuela.rows.push({ id: OTRA_ESCUELA, name: "Otra escuela", isDeleted: false, createdAt: nowIso });
  seedUser({ id: ADMIN, role: "ADMIN", schoolId: null });
  seedUser({ id: USER, role: "USER", schoolId: OTRA_ESCUELA });
});

test("POST /api/escuelas asocia al creador con la escuela creada", async () => {
  const token = tokenFor({ id: ADMIN, role: "ADMIN", schoolId: null });
  const res = await jsonRequest(baseUrl, "POST", "/api/escuelas", {
    token,
    body: { name: "Escuela Nueva", code: "ESC-NUEVA-01" }
  });
  assert.equal(res.status, 201);
  const escuelaId = (res.body as { id: string }).id;

  const actor = await prisma.usuario.findFirst({ where: { id: ADMIN } });
  assert.equal(actor?.escuelaId, escuelaId);
});

test("PATCH /api/admin/usuarios/:id/escuela mueve al usuario a otra escuela", async () => {
  const nowIso = new Date().toISOString();
  prisma.escuela.rows.push({ id: ESCUELA, name: "Escuela Destino", isDeleted: false, createdAt: nowIso });
  const token = tokenFor({ id: ADMIN, role: "ADMIN", schoolId: null });
  const res = await jsonRequest(baseUrl, "PATCH", `/api/admin/usuarios/${USER}/escuela`, {
    token,
    body: { escuelaId: ESCUELA }
  });
  assert.equal(res.status, 200);
  assert.deepEqual(res.body, { ok: true, escuelaId: ESCUELA });
  const updated = await prisma.usuario.findFirst({ where: { id: USER } });
  assert.equal(updated?.escuelaId, ESCUELA);
});

test("PATCH /api/admin/usuarios/:id/escuela con escuelaId null deja al usuario sin escuela", async () => {
  const token = tokenFor({ id: ADMIN, role: "ADMIN", schoolId: null });
  const res = await jsonRequest(baseUrl, "PATCH", `/api/admin/usuarios/${USER}/escuela`, {
    token,
    body: { escuelaId: null }
  });
  assert.equal(res.status, 200);
  const updated = await prisma.usuario.findFirst({ where: { id: USER } });
  assert.equal(updated?.escuelaId, null);
});

test("PATCH /api/admin/usuarios/:id/escuela con escuela inexistente responde 404", async () => {
  const token = tokenFor({ id: ADMIN, role: "ADMIN", schoolId: null });
  const res = await jsonRequest(baseUrl, "PATCH", `/api/admin/usuarios/${USER}/escuela`, {
    token,
    body: { escuelaId: "escuela-que-no-existe" }
  });
  assert.equal(res.status, 404);
});

test("PATCH /api/admin/usuarios/:id/escuela sin rol ADMIN responde 403", async () => {
  const token = tokenFor({ id: USER, role: "USER", schoolId: OTRA_ESCUELA });
  const res = await jsonRequest(baseUrl, "PATCH", `/api/admin/usuarios/${ADMIN}/escuela`, {
    token,
    body: { escuelaId: OTRA_ESCUELA }
  });
  assert.equal(res.status, 403);
});
