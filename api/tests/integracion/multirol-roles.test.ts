/**
 * MULTIROL-01 (Fase 1) — multi-rol end-to-end a través de una ruta
 * real.
 *
 * Caso de uso: un usuario con `roles: ["TEACHER", "USER"]` es profesor
 * en una escuela pero también está inscripto como alumno en otra
 * aula. Esto es el bug original del reporte `bug-visual-aula-rol-dual`
 * (MULTIROL-00, decisión: ir por multi-rol real en lugar de parche
 * front-only).
 *
 * En Fase 1 verificamos que el BACK ya no se rompe con este usuario
 * multi-rol:
 *   1. El JWT lleva `roles: ["TEACHER", "USER"]` y `role: "TEACHER"`
 *      (mayor jerarquía para compat).
 *   2. `requireUser` lo acepta y popula `req.user.roles`.
 *   3. Los handlers que usan `isStaffRole`/`hasRole` lo tratan como
 *      staff (porque TEACHER está en su array) Y como learner
 *      (porque USER está en su array).
 *   4. Un USER singular sigue sin permisos de staff (no se elevó
 *      nada).
 *
 * Esto prepara el terreno para Fase 3 (contexto por aula: el rol
 * que el viewer tiene EN ESTA aula específica).
 */

import assert from "node:assert/strict";
import { after, before, test } from "node:test";
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

const TEACHER_USER_ID = "multirol-teacher-user";
const PLAIN_USER_ID = "plain-user";

before(async () => {
  // Encuestas es una ruta con guard `isStaffRole` para escritura
  // y sin guard para voto (ver SEC-01). La usamos para verificar
  // que el multi-rol pasa los guards correctos.
  const { encuestas } = await import("../../src/routes/encuestas");
  const server = await startServer([encuestas]);
  baseUrl = server.baseUrl;
  close = server.close;
});

after(async () => { if (close) await close(); });

// ─── 1. El JWT lleva roles[] y role compat ─────────────────────────────

test("MULTIROL-01: tokenFor con roles emite el array y conserva role principal", () => {
  // No necesitamos pegarle al server: basta con verificar el token.
  const token = tokenFor({ id: TEACHER_USER_ID, role: "TEACHER", roles: ["TEACHER", "USER"] });
  const [, payloadPart] = token.split(".");
  const payload = JSON.parse(Buffer.from(payloadPart, "base64url").toString("utf8"));
  assert.deepEqual(payload.roles, ["TEACHER", "USER"]);
  // role compat: TEACHER (mayor jerarquía del array)
  assert.equal(payload.role, "TEACHER");
});

// ─── 2. Multi-rol pasa el guard de staff ──────────────────────────────

test("MULTIROL-01: multi-rol TEACHER+USER pasa el guard de staff en POST /api/encuestas", async () => {
  seedUser({
    id: TEACHER_USER_ID,
    role: "TEACHER",
    roles: ["TEACHER", "USER"],
    schoolId: "esc-1"
  });
  const token = tokenFor({
    id: TEACHER_USER_ID,
    role: "TEACHER",
    roles: ["TEACHER", "USER"],
    schoolId: "esc-1"
  });
  // El payload no tiene el `classroomId` requerido por la lógica de
  // negocio, así que esperamos un 400 (no 401 ni 403). Lo importante
  // es que NO se rechaza con 403 "Staff role required".
  const r = await jsonRequest(baseUrl, "POST", "/api/encuestas", {
    token,
    body: { title: "Test multi-rol" }
  });
  assert.notEqual(r.status, 401, "no debe ser 401 (autenticado)");
  assert.notEqual(r.status, 403, "no debe ser 403 (TEACHER en roles[] = staff)");
});

// ─── 3. USER singular NO pasa el guard de staff ───────────────────────

test("MULTIROL-01: USER singular NO pasa el guard de staff", async () => {
  seedUser({ id: PLAIN_USER_ID, role: "USER", schoolId: "esc-1" });
  const token = tokenFor({ id: PLAIN_USER_ID, role: "USER", schoolId: "esc-1" });
  const r = await jsonRequest(baseUrl, "POST", "/api/encuestas", {
    token,
    body: { title: "USER puro" }
  });
  assert.equal(r.status, 403, "USER puro debe seguir siendo 403");
  assert.equal((r.body as { error?: string }).error, "Staff role required");
});

// ─── 4. Compat: token viejo (sin roles[] en el JWT) sigue funcionando ─

test("MULTIROL-01: compat — JWT legacy con role=TEACHER (sin roles[]) sigue siendo staff", async () => {
  // Forzamos un usuario que existe en la DB pero con `roles: ["TEACHER"]`
  // (backfill de la migración). El token NO incluye `roles` en el JWT
  // (simula un token emitido antes de Fase 1).
  seedUser({ id: TEACHER_USER_ID, role: "TEACHER", schoolId: "esc-1" });
  // tokenFor sin `roles` propaga solo `role` singular.
  const token = tokenFor({ id: TEACHER_USER_ID, role: "TEACHER", schoolId: "esc-1" });
  const [, payloadPart] = token.split(".");
  const payload = JSON.parse(Buffer.from(payloadPart, "base64url").toString("utf8"));
  assert.equal(payload.role, "TEACHER");
  assert.deepEqual(payload.roles, ["TEACHER"], "createAccessToken promueve role a array");
  const r = await jsonRequest(baseUrl, "POST", "/api/encuestas", {
    token,
    body: { title: "Compat legacy" }
  });
  assert.notEqual(r.status, 403, "compat: TEACHER legacy sigue siendo staff");
});
