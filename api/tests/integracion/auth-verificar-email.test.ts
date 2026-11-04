/**
 * B9 (2026-11-01) — quien se registra solo confirma su correo antes de iniciar sesión.
 *
 * Antes cualquiera podía registrarse con un correo ajeno y entrar enseguida.
 */
process.env.NODE_ENV = "test";
process.env.AUTH_RATE_LIMIT_DISABLED = "true";

import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import { prisma, resetPrisma, startServer, jsonRequest } from "./_helpers/setup";
import { interceptarCorreos, type Correo } from "../../src/lib/mailer";
import { ENV } from "../../src/lib/env";
import { purgarDatosVencidos } from "../../src/lib/retencion-datos";

let baseUrl: string;
let close: () => Promise<void>;
let enviados: Correo[] = [];
const verificacionAntes = ENV.EMAIL_VERIFICACION;

before(async () => {
  ENV.EMAIL_VERIFICACION = true;
  const { auth } = await import("../../src/routes/auth");
  const server = await startServer([auth]);
  baseUrl = server.baseUrl;
  close = server.close;
  interceptarCorreos((c) => enviados.push(c));
});
after(async () => {
  ENV.EMAIL_VERIFICACION = verificacionAntes;
  interceptarCorreos(null);
  if (close) await close();
});
beforeEach(() => {
  resetPrisma();
  enviados = [];
});

const CLAVE = "Registro#Seguro2026";
const registrar = () =>
  jsonRequest(baseUrl, "POST", "/api/auth/register", {
    body: {
      email: "Nueva@Correo.com",
      username: "nueva",
      fullName: "Nueva Persona",
      password: CLAVE,
      birthdate: "1990-05-10T00:00:00.000Z",
      consents: { privacyConsent: true, termsAccepted: true }
    }
  });
const login = () =>
  jsonRequest(baseUrl, "POST", "/api/auth/login", { body: { identifier: "nueva@correo.com", password: CLAVE } });
const tokenDelCorreo = () => {
  const m = /verificar-email\?token=([A-Za-z0-9_-]+)/.exec(enviados.at(-1)?.texto ?? "");
  assert.ok(m, "el correo trae el enlace");
  return decodeURIComponent(m[1]);
};
const confirmar = (token: string) => jsonRequest(baseUrl, "POST", "/api/auth/verificar-email", { body: { token } });

test("el registro manda el enlace y no deja entrar hasta confirmar", async () => {
  const r = await registrar();
  assert.equal(r.status, 201, JSON.stringify(r.body));
  assert.equal((r.body as { verificacionPendiente: boolean }).verificacionPendiente, true);
  assert.equal(enviados.length, 1);
  assert.equal(enviados[0].para, "nueva@correo.com");

  const antes = await login();
  assert.equal(antes.status, 403);
  assert.equal((antes.body as { code: string }).code, "EMAIL_NO_VERIFICADO");

  const ok = await confirmar(tokenDelCorreo());
  assert.equal(ok.status, 200, JSON.stringify(ok.body));
  const despues = await login();
  assert.equal(despues.status, 200, JSON.stringify(despues.body));
});

test("el enlace sirve una sola vez y se guarda solo su hash", async () => {
  await registrar();
  const token = tokenDelCorreo();
  const fila = prisma.emailVerificacion.rows[0] as Record<string, unknown>;
  assert.notEqual(fila.tokenHash, token);
  assert.equal((await confirmar(token)).status, 200);
  assert.equal((await confirmar(token)).status, 400);
});

test("un enlace vencido no sirve", async () => {
  await registrar();
  const token = tokenDelCorreo();
  (prisma.emailVerificacion.rows[0] as Record<string, unknown>).expiresAt = new Date(Date.now() - 1000).toISOString();
  assert.equal((await confirmar(token)).status, 400);
  assert.equal((await login()).status, 403);
});

test("reenviar invalida el enlace anterior; con un correo desconocido responde igual", async () => {
  await registrar();
  const primero = tokenDelCorreo();
  const r = await jsonRequest(baseUrl, "POST", "/api/auth/reenviar-verificacion", { body: { email: "nueva@correo.com" } });
  assert.equal(r.status, 200);
  assert.equal(enviados.length, 2);
  assert.equal((await confirmar(primero)).status, 400);
  assert.equal((await confirmar(tokenDelCorreo())).status, 200);

  const nadie = await jsonRequest(baseUrl, "POST", "/api/auth/reenviar-verificacion", { body: { email: "nadie@correo.com" } });
  assert.equal(nadie.status, 200);
  assert.equal(enviados.length, 2);
});

test("con la contraseña equivocada no se revela que falta confirmar", async () => {
  await registrar();
  const r = await jsonRequest(baseUrl, "POST", "/api/auth/login", { body: { identifier: "nueva@correo.com", password: "Otra#Clave2026" } });
  assert.equal(r.status, 401);
});

test("un registro sin confirmar se anonimiza a los 30 días", async () => {
  await registrar();
  const u = prisma.usuario.rows[0] as Record<string, unknown>;
  u.createdAt = new Date(Date.now() - 31 * 86_400_000).toISOString();
  const r = await purgarDatosVencidos();
  assert.equal(r.sinConfirmar, 1);
  const despues = prisma.usuario.rows.find((x) => x.id === u.id) as Record<string, unknown>;
  assert.equal(despues.isDeleted, true);
  assert.notEqual(despues.email, "nueva@correo.com");
});

// Ley 25.326 (2026-11-01) — consentimiento expreso, fecha de nacimiento y edad mínima en el registro propio.
test("registro: sin consentimiento, sin fecha de nacimiento o con menos de 13 años no se crea la cuenta", async () => {
  const base = { email: "chico@correo.com", username: "chico", fullName: "Chico Prueba", password: CLAVE };
  const sinConsent = await jsonRequest(baseUrl, "POST", "/api/auth/register", { body: { ...base, birthdate: "1990-05-10T00:00:00.000Z" } });
  assert.equal((sinConsent.body as { code: string }).code, "SIN_CONSENTIMIENTO");
  const consents = { privacyConsent: true, termsAccepted: true };
  const sinFecha = await jsonRequest(baseUrl, "POST", "/api/auth/register", { body: { ...base, consents } });
  assert.equal((sinFecha.body as { code: string }).code, "FALTA_NACIMIENTO");
  const hace = (anios: number) => new Date(Date.now() - anios * 365.25 * 86_400_000).toISOString();
  const nene = await jsonRequest(baseUrl, "POST", "/api/auth/register", { body: { ...base, consents, birthdate: hace(11) } });
  assert.equal(nene.status, 403);
  assert.equal((nene.body as { code: string }).code, "MENOR_SIN_ESCUELA");
  assert.equal(prisma.usuario.rows.length, 0);
  const adolescente = await jsonRequest(baseUrl, "POST", "/api/auth/register", { body: { ...base, consents, birthdate: hace(14) } });
  assert.equal(adolescente.status, 201, JSON.stringify(adolescente.body));
});
