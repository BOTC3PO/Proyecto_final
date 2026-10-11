/**
 * H4 — Un usuario baneado no puede usar la plataforma.
 *
 *  - El endpoint de ban guarda `bannedUntil` (antes escribía columnas inexistentes).
 *  - requireUser, login y refresh rechazan con 403 BANNED mientras el ban esté vigente.
 *  - Un ban con fecha vence solo; desbanear lo levanta de inmediato.
 *  - Nadie puede banearse a sí mismo.
 */

process.env.JWT_REFRESH_TTL_SECONDS = String(7 * 24 * 60 * 60);
process.env.JWT_SECRET = process.env.JWT_SECRET || "test-secret-ban";
process.env.JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || "test-refresh-secret";
process.env.NODE_ENV = "test";

import assert from "node:assert/strict";
import path from "node:path";
import Module from "node:module";
import { after, before, beforeEach, test } from "node:test";
import express from "express";

// Igual que auth-refresh-token.test.ts: recargar env/auth-token con el TTL de refresh > 0.
const srcLib = (f: string) => path.resolve(__dirname, "..", "..", "src", "lib", f);
// @ts-expect-error — internal require cache surface.
delete Module._cache?.[srcLib("env.ts")];
// @ts-expect-error — internal require cache surface.
delete Module._cache?.[srcLib("auth-token.ts")];

import { estaBaneado } from "../../src/lib/ban";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";

let baseUrl: string;
let close: () => Promise<void>;
const ADMIN = "ban-admin";
const ALUMNO = "ban-alumno";
const nowIso = () => new Date().toISOString();
const dias = (n: number) => new Date(Date.now() + n * 86_400_000).toISOString();

before(async () => {
  const { moderacion } = await import("../../src/routes/moderacion");
  const { auth } = await import("../../src/routes/auth");
  const { requireUser } = await import("../../src/lib/user-auth");
  const sonda = express.Router();
  sonda.get("/api/sonda", requireUser, (_req, res) => res.json({ ok: true }));
  const srv = await startServer([auth, moderacion, sonda]);
  baseUrl = srv.baseUrl;
  close = srv.close;
});
after(async () => { if (close) await close(); });

beforeEach(async () => {
  resetPrisma();
  seedUser({ id: ADMIN, role: "ADMIN", schoolId: null });
  seedUser({ id: ALUMNO, role: "STUDENT" });
  const { hashPassword } = await import("../../src/lib/passwords");
  const u = prisma.usuario.rows.find((r) => (r as { id: string }).id === ALUMNO) as Record<string, unknown>;
  Object.assign(u, { username: "alumnoban", email: "alumnoban@test.local", passwordHash: await hashPassword("clave-larga-1") });
});

const admin = () => tokenFor({ id: ADMIN, role: "ADMIN", schoolId: null });
const alumno = () => tokenFor({ id: ALUMNO, role: "STUDENT" });
const banear = (body: Record<string, unknown> = {}) =>
  jsonRequest(baseUrl, "POST", `/api/moderacion/usuarios/${ALUMNO}/ban`, { token: admin(), body });
const sonda = () => jsonRequest(baseUrl, "GET", "/api/sonda", { token: alumno() });
const fila = () => prisma.usuario.rows.find((r) => (r as { id: string }).id === ALUMNO) as Record<string, unknown>;

test("estaBaneado: sin ban, ban sin fecha, ban vigente, ban vencido, fecha ilegible", () => {
  assert.equal(estaBaneado({ isBanned: false }), false);
  assert.equal(estaBaneado(null), false);
  assert.equal(estaBaneado({ isBanned: true }), true);
  assert.equal(estaBaneado({ isBanned: true, bannedUntil: dias(1) }), true);
  assert.equal(estaBaneado({ isBanned: true, bannedUntil: dias(-1) }), false);
  assert.equal(estaBaneado({ isBanned: true, bannedUntil: "no-es-fecha" }), true);
});

test("H4: el endpoint de ban guarda isBanned y bannedUntil", async () => {
  const r = await banear({ duracionDias: 7, motivo: "prueba" });
  assert.equal(r.status, 201);
  assert.equal(fila().isBanned, true);
  assert.equal(typeof fila().bannedUntil, "string");
  assert.equal((r.body as { bannedUntil: string }).bannedUntil, fila().bannedUntil);
});

test("H4: sin baneo el alumno entra; con baneo requireUser responde 403 BANNED", async () => {
  assert.equal((await sonda()).status, 200);
  await banear();
  const r = await sonda();
  assert.equal(r.status, 403);
  assert.equal((r.body as { code: string }).code, "BANNED");
});

test("H4: un ban con fecha vencida deja de bloquear", async () => {
  await banear({ duracionDias: 1 });
  fila().bannedUntil = dias(-1);
  assert.equal((await sonda()).status, 200);
});

test("H4: desbanear levanta el bloqueo", async () => {
  await banear();
  assert.equal((await sonda()).status, 403);
  const r = await jsonRequest(baseUrl, "POST", `/api/moderacion/usuarios/${ALUMNO}/desbanear`, { token: admin(), body: {} });
  assert.equal(r.status, 200);
  assert.equal(fila().isBanned, false);
  assert.equal((await sonda()).status, 200);
});

test("H4: login de un baneado → 403 BANNED (con la contraseña correcta)", async () => {
  const antes = await jsonRequest(baseUrl, "POST", "/api/auth/login", { body: { identifier: "alumnoban", password: "clave-larga-1" } });
  assert.equal(antes.status, 200, JSON.stringify(antes.body));
  await banear();
  const r = await jsonRequest(baseUrl, "POST", "/api/auth/login", { body: { identifier: "alumnoban", password: "clave-larga-1" } });
  assert.equal(r.status, 403);
  assert.equal((r.body as { code: string }).code, "BANNED");
});

test("H4: refresh de un baneado → 403 y el ban corta los refresh tokens", async () => {
  const login = await jsonRequest(baseUrl, "POST", "/api/auth/login", { body: { identifier: "alumnoban", password: "clave-larga-1" } });
  const refreshToken = (login.body as { refreshToken: string }).refreshToken;
  assert.ok(refreshToken);
  await banear();
  const r = await jsonRequest(baseUrl, "POST", "/api/auth/refresh", { body: { refreshToken } });
  assert.equal(r.status, 403);
  assert.ok(prisma.refreshToken.rows.every((t) => (t as { revoked: boolean }).revoked === true));
});

test("H4: nadie puede banearse a sí mismo", async () => {
  const r = await jsonRequest(baseUrl, "POST", `/api/moderacion/usuarios/${ADMIN}/ban`, { token: admin(), body: {} });
  assert.equal(r.status, 400);
});

test("I1: cada advertencia suma al contador del usuario y deja el evento", async () => {
  const advertir = () =>
    jsonRequest(baseUrl, "POST", `/api/moderacion/usuarios/${ALUMNO}/advertencias`, {
      token: admin(),
      body: { motivo: "lenguaje", severidad: "leve" },
    });
  assert.equal((await advertir()).status, 201);
  assert.equal((await advertir()).status, 201);
  assert.equal(fila().warningCount, 2);
  const eventos = prisma.moderacionEvento.rows.filter((e) => (e as { tipo: string }).tipo === "advertencia");
  assert.equal(eventos.length, 2);
  assert.equal((eventos[0] as { severidad: string }).severidad, "leve");
});
