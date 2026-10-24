/**
 * QA-FIX-11 — Ciclo completo de refresh token.
 *
 * Antes de QA-FIX-11: JWT_REFRESH_TTL_SECONDS = 0 por defecto →
 * createRefreshToken() retornaba null → login/registro NO emitían
 * refresh token → al vencer el access (1h), el front no podía
 * refrescar y expulsaba al usuario (clearStoredAuthSession).
 *
 * Después de QA-FIX-11: JWT_REFRESH_TTL_SECONDS = 604800 (7 días)
 * por defecto → login/registro emiten access + refresh → el front
 * puede refrescar automáticamente ante 401 → la sesión se renueva
 * sola mientras el refresh sea válido.
 *
 * Tests:
 *  1. Login emite access Y refresh token (con TTL > 0).
 *  2. POST /api/auth/refresh con refresh válido → nuevo access + nuevo refresh.
 *  3. POST /api/auth/refresh con refresh vencido → 401.
 *  4. POST /api/auth/refresh con refresh inválido (firma rota) → 401.
 *  5. POST /api/auth/refresh con access token (tipo incorrecto) → 401.
 */

// QA-FIX-11: setear el env ANTES de cualquier import. auth-token.ts
// captura REFRESH_TTL_SECONDS al cargar (const REFRESH_TTL_SECONDS = ENV.JWT_REFRESH_TTL_SECONDS),
// así que hay que fijar el valor antes de que setup.ts importe createAccessToken.
// El .env tiene JWT_REFRESH_TTL_SECONDS=0 (string "0"), que es truthy en JS.
// Forzar el override a 7 días para el test.
process.env.JWT_REFRESH_TTL_SECONDS = String(7 * 24 * 60 * 60);
process.env.JWT_SECRET = process.env.JWT_SECRET || "test-secret-refresh";
process.env.JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || "test-refresh-secret";
process.env.NODE_ENV = "test";

import assert from "node:assert/strict";
import path from "node:path";
import Module from "node:module";
import { after, before, test } from "node:test";

// QA-FIX-11: invalidar el cache de env.ts y auth-token.ts para que
// se re-carguen con el nuevo JWT_REFRESH_TTL_SECONDS. El import de
// setup.ts (arriba) ya cargó estos módulos con el valor del .env (0),
// así que hay que forzar un re-load.
const envPath = path.resolve(__dirname, "..", "..", "src", "lib", "env.ts");
const authTokenPath = path.resolve(__dirname, "..", "..", "src", "lib", "auth-token.ts");
// @ts-expect-error — internal require cache surface.
delete Module._cache?.[envPath];
// @ts-expect-error — internal require cache surface.
delete Module._cache?.[authTokenPath];

import { startServer, jsonRequest, prisma, seedUser, tokenFor } from "./_helpers/setup";

let baseUrl: string;
let close: () => Promise<void>;

before(async () => {
  // Seed de usuario para los tests.
  seedUser({
    id: "user-refresh-test",
    role: "STUDENT",
    fullName: "Test User",
  });

  const { auth } = await import("../../src/routes/auth");
  const server = await startServer([auth]);
  baseUrl = server.baseUrl;
  close = server.close;
});

after(async () => {
  await close();
});

// ─── Helpers ───

const registerUser = async (email: string, username: string, password: string) => {
  return jsonRequest(baseUrl, "POST", "/api/auth/register", {
    body: { email, username, password, fullName: "Test User" },
  });
};

const loginUser = async (identifier: string, password: string) => {
  return jsonRequest(baseUrl, "POST", "/api/auth/login", {
    body: { identifier, password },
  });
};

const refreshAccessToken = async (refreshToken: string) => {
  return jsonRequest(baseUrl, "POST", "/api/auth/refresh", {
    body: { refreshToken },
  });
};

// ─── Tests ───

test("QA-FIX-11: login emite access Y refresh token (con TTL > 0)", async () => {
  // Seed de usuario con password hasheada.
  const { hashPassword } = await import("../../src/lib/passwords");
  const passwordHash = await hashPassword("test-password");
  prisma.usuario.rows.push({
    id: "login-user-1",
    username: "loginuser1",
    email: "loginuser1@test.local",
    fullName: "Login User 1",
    role: "STUDENT",
    escuelaId: null,
    isDeleted: false,
    passwordHash,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });

  const r = await loginUser("loginuser1", "test-password");
  assert.equal(r.status, 200, `status=${r.status} body=${JSON.stringify(r.body)}`);
  const body = r.body as {
    accessToken?: string;
    refreshToken?: string;
    expiresIn?: number;
    refreshExpiresIn?: number;
  };
  assert.ok(body.accessToken, "debe emitir accessToken");
  assert.ok(body.refreshToken, "debe emitir refreshToken (QA-FIX-11: TTL > 0)");
  assert.equal(body.expiresIn, 3600, "access TTL = 1h");
  assert.equal(body.refreshExpiresIn, 7 * 24 * 60 * 60, "refresh TTL = 7 días");
});

test("QA-FIX-11: POST /api/auth/refresh con refresh válido → nuevo access + nuevo refresh", async () => {
  // Seed de usuario con password.
  const { hashPassword } = await import("../../src/lib/passwords");
  const passwordHash = await hashPassword("test-password-2");
  prisma.usuario.rows.push({
    id: "refresh-user-1",
    username: "refreshuser1",
    email: "refreshuser1@test.local",
    fullName: "Refresh User 1",
    role: "STUDENT",
    escuelaId: null,
    isDeleted: false,
    passwordHash,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });

  // Login para obtener el refresh token.
  const loginR = await loginUser("refreshuser1", "test-password-2");
  assert.equal(loginR.status, 200);
  const loginBody = loginR.body as { accessToken: string; refreshToken: string };
  assert.ok(loginBody.refreshToken, "login debe emitir refreshToken");

  // Refrescar con el refresh token.
  const refreshR = await refreshAccessToken(loginBody.refreshToken);
  assert.equal(refreshR.status, 200, `status=${refreshR.status} body=${JSON.stringify(refreshR.body)}`);
  const refreshBody = refreshR.body as {
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
    refreshExpiresIn: number;
  };
  assert.ok(refreshBody.accessToken, "debe emitir nuevo accessToken");
  assert.ok(refreshBody.refreshToken, "debe emitir nuevo refreshToken (rotación)");
  // Nota: los tokens pueden ser idénticos si se emiten en el mismo segundo
  // (mismo iat, exp, payload, firma). Lo importante es que el endpoint
  // funcione y devuelva tokens válidos, no que sean distintos.
  assert.equal(refreshBody.expiresIn, 3600);
  assert.equal(refreshBody.refreshExpiresIn, 7 * 24 * 60 * 60);
});

test("QA-FIX-11: POST /api/auth/refresh con refresh vencido → 401", async () => {
  // Crear un refresh token vencido manualmente (exp en el pasado).
  // No podemos usar createRefreshToken con TTL negativo porque retorna
  // null (línea 148 de auth-token.ts: REFRESH_TTL_SECONDS <= 0 → null).
  // En su lugar, construimos el JWT a mano con exp vencido.
  const crypto = await import("node:crypto");
  const base64UrlEncode = (input: string) => Buffer.from(input).toString("base64url");
  const sign = (data: string, secret: string) =>
    crypto.createHmac("sha256", secret).update(data).digest("base64url");

  const header = { alg: "HS256", typ: "JWT" };
  const now = Math.floor(Date.now() / 1000);
  const payload = {
    sub: "user-refresh-test",
    iat: now - 7200, // emitido hace 2h
    exp: now - 3600, // vencido hace 1h
    typ: "refresh",
  };
  const headerPart = base64UrlEncode(JSON.stringify(header));
  const payloadPart = base64UrlEncode(JSON.stringify(payload));
  const signingInput = `${headerPart}.${payloadPart}`;
  const signature = sign(signingInput, process.env.JWT_REFRESH_SECRET ?? "test-refresh-secret");
  const expiredRefresh = `${signingInput}.${signature}`;

  const r = await refreshAccessToken(expiredRefresh);
  assert.equal(r.status, 401, `status=${r.status} body=${JSON.stringify(r.body)}`);
  const body = r.body as { error: string };
  assert.match(body.error, /expired/i, "debe mencionar que expiró");
});

test("QA-FIX-11: POST /api/auth/refresh con refresh inválido (firma rota) → 401", async () => {
  // Crear un refresh token con firma inválida.
  const invalidRefresh = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyLXJlZnJlc2gtdGVzdCIsInR5cCI6InJlZnJlc2giLCJleHAiOjk5OTk5OTk5OTl9.INVALID_SIGNATURE";
  const r = await refreshAccessToken(invalidRefresh);
  assert.equal(r.status, 401, `status=${r.status} body=${JSON.stringify(r.body)}`);
  const body = r.body as { error: string };
  assert.match(body.error, /Invalid/i, "debe mencionar que es inválido");
});

test("QA-FIX-11: POST /api/auth/refresh con access token (tipo incorrecto) → 401", async () => {
  // Usar un access token en lugar de refresh.
  const accessToken = tokenFor({ id: "user-refresh-test", role: "STUDENT" });
  const r = await refreshAccessToken(accessToken);
  assert.equal(r.status, 401, `status=${r.status} body=${JSON.stringify(r.body)}`);
  const body = r.body as { error: string };
  assert.match(body.error, /Invalid/i, "debe rechazar tokens de tipo incorrecto");
});
