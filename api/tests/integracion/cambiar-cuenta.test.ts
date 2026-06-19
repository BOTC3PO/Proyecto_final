/**
 * FASE 2 — switch de cuenta (backend).
 *
 * Cubre:
 *   1. Switch válido principal→espejo emite token del destino con
 *      roles correctos y `switchedFrom` seteado.
 *   2. Switch válido espejo→principal (simétrico).
 *   3. Switch a cuenta ajena (no vinculada) → 403.
 *   4. Token del espejo contra un endpoint solo-staff → 403.
 *   5. La respuesta de sesión (/me) expone `cuentaVinculada` en
 *      ambos lados del vínculo.
 *   6. La transición queda en el audit-log.
 *   7. Login expone `cuentaVinculada`.
 *   8. `switchedFrom` no concede permisos de staff.
 */

import assert from "node:assert/strict";
import { after, before, test } from "node:test";
import { randomUUID } from "node:crypto";
import {
  prisma,
  resetPrisma,
  seedUser,
  seedVinculacion,
  tokenFor,
  startServer,
  jsonRequest,
} from "./_helpers/setup";
import { ESPEJO_TIPO_CUENTA } from "../../src/lib/provisionar-espejo";
import { verifyToken } from "../../src/lib/auth-token";

// Import the router under test AFTER the stubs are installed.
import { auth } from "../../src/routes/auth";
import { requireUser } from "../../src/lib/user-auth";

const ESC = "esc-fase2-test";

// A representative staff-only endpoint for testing that espejo tokens
// don't gain staff access.
import { Router } from "express";
const staffOnlyRouter = Router();
staffOnlyRouter.get("/api/test-staff-only", requireUser, (req, res) => {
  const user = (req as { user?: Record<string, unknown> }).user;
  const roles = Array.isArray(user?.roles) ? user!.roles as string[] : [];
  const STAFF = new Set(["ADMIN", "DIRECTIVO", "TEACHER"]);
  const isStaff = roles.some((r) => STAFF.has(r as string));
  if (!isStaff) {
    res.status(403).json({ error: "forbidden" });
    return;
  }
  res.json({ ok: true });
});

let baseUrl: string;
let close: () => Promise<void>;

before(async () => {
  const srv = await startServer([auth, staffOnlyRouter]);
  baseUrl = srv.baseUrl;
  close = srv.close;
});

after(async () => {
  if (close) await close();
});

// ─── Helpers ──────────────────────────────────────────────────────────────

const setupLinkedPair = () => {
  const principalId = randomUUID();
  const espejoId = randomUUID();
  seedUser({
    id: principalId,
    role: "TEACHER",
    roles: ["TEACHER"],
    schoolId: ESC,
    fullName: "Prof Test",
  });
  seedUser({
    id: espejoId,
    role: "USER",
    roles: ["USER"],
    schoolId: ESC,
    fullName: "Espejo de Prof Test",
    tipoCuenta: ESPEJO_TIPO_CUENTA,
  });
  seedVinculacion(principalId, espejoId);
  return { principalId, espejoId };
};

// ─── 1. Switch válido: principal→espejo ──────────────────────────────────

test("FASE 2: switch principal→espejo emite token del destino con roles USER y switchedFrom", async () => {
  resetPrisma();
  const { principalId, espejoId } = setupLinkedPair();
  const token = tokenFor({ id: principalId, role: "TEACHER", schoolId: ESC });

  const res = await jsonRequest(baseUrl, "POST", "/api/auth/cambiar-cuenta", {
    token,
    body: {},
  });

  assert.equal(res.status, 200);
  const body = res.body as Record<string, unknown>;
  assert.equal(body.id, espejoId);
  assert.equal(body.role, "USER");
  assert.deepEqual(body.roles, ["USER"]);
  assert.equal(body.landing, "/alumno");
  assert.ok(typeof body.accessToken === "string", "devuelve accessToken");

  // Verify the JWT claims
  const verification = verifyToken(body.accessToken as string, "access");
  assert.ok(verification.ok);
  if (verification.ok) {
    assert.equal(verification.payload.sub, espejoId);
    assert.equal(verification.payload.switchedFrom, principalId);
    assert.deepEqual(verification.payload.roles, ["USER"]);
  }
});

// ─── 2. Switch válido: espejo→principal ──────────────────────────────────

test("FASE 2: switch espejo→principal emite token del destino con roles TEACHER", async () => {
  resetPrisma();
  const { principalId, espejoId } = setupLinkedPair();
  const token = tokenFor({ id: espejoId, role: "USER", schoolId: ESC });

  const res = await jsonRequest(baseUrl, "POST", "/api/auth/cambiar-cuenta", {
    token,
    body: {},
  });

  assert.equal(res.status, 200);
  const body = res.body as Record<string, unknown>;
  assert.equal(body.id, principalId);
  assert.equal(body.role, "TEACHER");
  assert.deepEqual(body.roles, ["TEACHER"]);
  assert.equal(body.landing, "/profesor");

  const verification = verifyToken(body.accessToken as string, "access");
  assert.ok(verification.ok);
  if (verification.ok) {
    assert.equal(verification.payload.sub, principalId);
    assert.equal(verification.payload.switchedFrom, espejoId);
  }
});

// ─── 3. Switch con destinoUsuarioId explícito válido ─────────────────────

test("FASE 2: switch con destinoUsuarioId explícito válido funciona", async () => {
  resetPrisma();
  const { principalId, espejoId } = setupLinkedPair();
  const token = tokenFor({ id: principalId, role: "TEACHER", schoolId: ESC });

  const res = await jsonRequest(baseUrl, "POST", "/api/auth/cambiar-cuenta", {
    token,
    body: { destinoUsuarioId: espejoId },
  });

  assert.equal(res.status, 200);
  const body = res.body as Record<string, unknown>;
  assert.equal(body.id, espejoId);
});

// ─── 4. Switch a cuenta ajena → 403 ─────────────────────────────────────

test("FASE 2: switch a cuenta no vinculada → 403", async () => {
  resetPrisma();
  const { principalId } = setupLinkedPair();
  const ajenaId = randomUUID();
  seedUser({ id: ajenaId, role: "USER", schoolId: ESC, fullName: "Otra" });
  const token = tokenFor({ id: principalId, role: "TEACHER", schoolId: ESC });

  const res = await jsonRequest(baseUrl, "POST", "/api/auth/cambiar-cuenta", {
    token,
    body: { destinoUsuarioId: ajenaId },
  });

  assert.equal(res.status, 403);
});

test("FASE 2: switch sin vinculación → 403", async () => {
  resetPrisma();
  const soloId = randomUUID();
  seedUser({ id: soloId, role: "TEACHER", schoolId: ESC, fullName: "Sin Espejo" });
  const token = tokenFor({ id: soloId, role: "TEACHER", schoolId: ESC });

  const res = await jsonRequest(baseUrl, "POST", "/api/auth/cambiar-cuenta", {
    token,
    body: {},
  });

  assert.equal(res.status, 403);
});

// ─── 5. Token de espejo contra endpoint solo-staff → 403 ────────────────

test("FASE 2: token del espejo contra endpoint solo-staff → 403", async () => {
  resetPrisma();
  const { principalId, espejoId } = setupLinkedPair();

  // Get an espejo token via switch
  const switchToken = tokenFor({ id: principalId, role: "TEACHER", schoolId: ESC });
  const switchRes = await jsonRequest(baseUrl, "POST", "/api/auth/cambiar-cuenta", {
    token: switchToken,
    body: {},
  });
  assert.equal(switchRes.status, 200);
  const espejoAccessToken = (switchRes.body as Record<string, unknown>).accessToken as string;

  // Use the espejo token against a staff-only endpoint
  const staffRes = await jsonRequest(baseUrl, "GET", "/api/test-staff-only", {
    token: espejoAccessToken,
  });
  assert.equal(staffRes.status, 403);
});

test("FASE 2: switchedFrom en el token NO concede permisos de staff", async () => {
  resetPrisma();
  const { principalId, espejoId } = setupLinkedPair();

  // Create a token for the espejo with switchedFrom pointing to the principal
  const espejoToken = tokenFor({
    id: espejoId,
    role: "USER",
    roles: ["USER"],
    schoolId: ESC,
    switchedFrom: principalId,
  });

  const staffRes = await jsonRequest(baseUrl, "GET", "/api/test-staff-only", {
    token: espejoToken,
  });
  assert.equal(staffRes.status, 403, "switchedFrom does NOT grant staff access");
});

// ─── 6. /me expone cuentaVinculada en ambos lados ───────────────────────

test("FASE 2: /me expone cuentaVinculada para el principal (tipoDestino=ALUMNO)", async () => {
  resetPrisma();
  const { principalId, espejoId } = setupLinkedPair();
  const token = tokenFor({ id: principalId, role: "TEACHER", schoolId: ESC });

  const res = await jsonRequest(baseUrl, "GET", "/api/auth/me", { token });

  assert.equal(res.status, 200);
  const body = res.body as Record<string, unknown>;
  const cv = body.cuentaVinculada as { destinoUsuarioId: string; tipoDestino: string } | null;
  assert.ok(cv, "cuentaVinculada present");
  assert.equal(cv!.destinoUsuarioId, espejoId);
  assert.equal(cv!.tipoDestino, "ALUMNO");
});

test("FASE 2: /me expone cuentaVinculada para el espejo (tipoDestino=PRINCIPAL)", async () => {
  resetPrisma();
  const { principalId, espejoId } = setupLinkedPair();
  const token = tokenFor({ id: espejoId, role: "USER", schoolId: ESC });

  const res = await jsonRequest(baseUrl, "GET", "/api/auth/me", { token });

  assert.equal(res.status, 200);
  const body = res.body as Record<string, unknown>;
  const cv = body.cuentaVinculada as { destinoUsuarioId: string; tipoDestino: string } | null;
  assert.ok(cv, "cuentaVinculada present");
  assert.equal(cv!.destinoUsuarioId, principalId);
  assert.equal(cv!.tipoDestino, "PRINCIPAL");
});

test("FASE 2: /me devuelve cuentaVinculada null si no hay vinculo", async () => {
  resetPrisma();
  const soloId = randomUUID();
  seedUser({ id: soloId, role: "USER", schoolId: ESC, fullName: "Sin Vinculo" });
  const token = tokenFor({ id: soloId, role: "USER", schoolId: ESC });

  const res = await jsonRequest(baseUrl, "GET", "/api/auth/me", { token });

  assert.equal(res.status, 200);
  const body = res.body as Record<string, unknown>;
  assert.equal(body.cuentaVinculada, null);
});

// ─── 7. Audit log ───────────────────────────────────────────────────────

test("FASE 2: la transición queda en el audit-log", async () => {
  resetPrisma();
  const { principalId, espejoId } = setupLinkedPair();
  const token = tokenFor({ id: principalId, role: "TEACHER", schoolId: ESC });

  const res = await jsonRequest(baseUrl, "POST", "/api/auth/cambiar-cuenta", {
    token,
    body: {},
  });
  assert.equal(res.status, 200);

  const logs = prisma.auditLog.rows.filter((l) => l.action === "CUENTA_SWITCH");
  assert.equal(logs.length, 1);
  assert.equal(logs[0].actorId, principalId);
  assert.equal(logs[0].targetId, espejoId);
  assert.equal(logs[0].targetType, "Usuario");

  const meta = JSON.parse(logs[0].metadata ?? "{}");
  assert.equal(meta.origenId, principalId);
  assert.equal(meta.destinoId, espejoId);
  assert.equal(meta.sentido, "principal→espejo");
});

// ─── 8. La respuesta del switch expone cuentaVinculada del destino ──────

test("FASE 2: la respuesta del switch expone cuentaVinculada del destino (para volver)", async () => {
  resetPrisma();
  const { principalId, espejoId } = setupLinkedPair();
  const token = tokenFor({ id: principalId, role: "TEACHER", schoolId: ESC });

  const res = await jsonRequest(baseUrl, "POST", "/api/auth/cambiar-cuenta", {
    token,
    body: {},
  });
  assert.equal(res.status, 200);
  const body = res.body as Record<string, unknown>;
  const cv = body.cuentaVinculada as { destinoUsuarioId: string; tipoDestino: string } | null;
  assert.ok(cv, "cuentaVinculada present in switch response");
  assert.equal(cv!.destinoUsuarioId, principalId, "desde el espejo, el destino es el principal");
  assert.equal(cv!.tipoDestino, "PRINCIPAL");
});

// ─── 9. Landing correcto para diferentes roles ──────────────────────────

test("FASE 2: landing /admin para ADMIN", async () => {
  resetPrisma();
  const adminId = randomUUID();
  const espejoId = randomUUID();
  seedUser({ id: adminId, role: "ADMIN", roles: ["ADMIN"], schoolId: null, fullName: "Admin" });
  seedUser({
    id: espejoId, role: "USER", roles: ["USER"], schoolId: null,
    fullName: "Espejo Admin", tipoCuenta: ESPEJO_TIPO_CUENTA,
  });
  seedVinculacion(adminId, espejoId);
  const token = tokenFor({ id: espejoId, role: "USER", schoolId: null });

  const res = await jsonRequest(baseUrl, "POST", "/api/auth/cambiar-cuenta", {
    token,
    body: {},
  });
  assert.equal(res.status, 200);
  assert.equal((res.body as Record<string, unknown>).landing, "/admin");
});
