/**
 * E1 (2026-10-28) — recuperación de contraseña por correo.
 *
 * Antes `POST /api/auth/forgot-password` respondía «te enviaremos instrucciones» y no enviaba nada.
 */
process.env.NODE_ENV = "test";
process.env.AUTH_RATE_LIMIT_DISABLED = "true";

import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import { prisma, resetPrisma, seedUser, startServer, jsonRequest } from "./_helpers/setup";
import { interceptarCorreos, type Correo } from "../../src/lib/mailer";
import { hashPassword, verifyPassword } from "../../src/lib/passwords";

let baseUrl: string;
let close: () => Promise<void>;
let enviados: Correo[] = [];

before(async () => {
  const { auth } = await import("../../src/routes/auth");
  const server = await startServer([auth]);
  baseUrl = server.baseUrl;
  close = server.close;
  interceptarCorreos((c) => enviados.push(c));
});
after(async () => {
  interceptarCorreos(null);
  if (close) await close();
});
beforeEach(async () => {
  resetPrisma();
  enviados = [];
  seedUser({ id: "u1", role: "USER", schoolId: null });
  const u = prisma.usuario.rows.find((r) => r.id === "u1") as Record<string, unknown>;
  u.email = "ana@escuela.com";
  u.username = "ana";
  u.passwordHash = await hashPassword("ClaveVieja#2026");
  prisma.refreshToken.rows.push({ id: "rt1", jti: "j1", userId: "u1", familyId: "f1", revoked: false } as never);
});

const pedirEnlace = (email: string) => jsonRequest(baseUrl, "POST", "/api/auth/forgot-password", { body: { email } });
const tokenDelCorreo = () => {
  const m = /restablecer\?token=([A-Za-z0-9_-]+)/.exec(enviados.at(-1)?.texto ?? "");
  assert.ok(m, "el correo trae el enlace");
  return decodeURIComponent(m[1]);
};
const restablecer = (token: string, password: string) =>
  jsonRequest(baseUrl, "POST", "/api/auth/reset-password", { body: { token, password } });

test("envía un correo con un enlace y guarda solo el hash del token", async () => {
  const r = await pedirEnlace("ana@escuela.com");
  assert.equal(r.status, 200);
  assert.equal(enviados.length, 1);
  assert.equal(enviados[0].para, "ana@escuela.com");
  const token = tokenDelCorreo();
  const fila = prisma.passwordResetToken.rows[0] as Record<string, unknown>;
  assert.notEqual(fila.tokenHash, token);
});

test("con un correo que no existe responde igual y no envía nada", async () => {
  const r = await pedirEnlace("nadie@escuela.com");
  assert.equal(r.status, 200);
  assert.equal(enviados.length, 0);
});

test("el enlace cambia la contraseña, cierra las sesiones y sirve una sola vez", async () => {
  await pedirEnlace("ana@escuela.com");
  const token = tokenDelCorreo();
  const r = await restablecer(token, "OtraClave#Segura9");
  assert.equal(r.status, 200, JSON.stringify(r.body));
  const u = prisma.usuario.rows.find((x) => x.id === "u1") as { passwordHash: string };
  assert.equal(await verifyPassword("OtraClave#Segura9", u.passwordHash), true);
  assert.equal((prisma.refreshToken.rows[0] as { revoked: boolean }).revoked, true);
  const otraVez = await restablecer(token, "OtraClave#Segura10");
  assert.equal(otraVez.status, 400);
});

test("un enlace vencido no sirve", async () => {
  await pedirEnlace("ana@escuela.com");
  const token = tokenDelCorreo();
  (prisma.passwordResetToken.rows[0] as Record<string, unknown>).expiresAt = new Date(Date.now() - 1000).toISOString();
  const r = await restablecer(token, "OtraClave#Segura9");
  assert.equal(r.status, 400);
});

test("pedir un enlace nuevo invalida el anterior", async () => {
  await pedirEnlace("ana@escuela.com");
  const primero = tokenDelCorreo();
  await pedirEnlace("ana@escuela.com");
  assert.equal((await restablecer(primero, "OtraClave#Segura9")).status, 400);
  assert.equal((await restablecer(tokenDelCorreo(), "OtraClave#Segura9")).status, 200);
});

test("rechaza una contraseña débil", async () => {
  await pedirEnlace("ana@escuela.com");
  const r = await restablecer(tokenDelCorreo(), "12345678");
  assert.equal(r.status, 400);
});
