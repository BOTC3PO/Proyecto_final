/**
 * B13 (2026-10-29) — verificación en dos pasos con TOTP.
 */
process.env.NODE_ENV = "test";
process.env.AUTH_RATE_LIMIT_DISABLED = "true";

import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";
import { hashPassword } from "../../src/lib/passwords";
import { codigoEnPaso, pasoActual, base32 } from "../../src/lib/totp";

let baseUrl: string;
let close: () => Promise<void>;
const ID = "dir-2fa";
const CLAVE = "Directiva#2026x";

before(async () => {
  const { auth } = await import("../../src/routes/auth");
  const server = await startServer([auth]);
  baseUrl = server.baseUrl;
  close = server.close;
});
after(async () => {
  if (close) await close();
});
beforeEach(async () => {
  resetPrisma();
  seedUser({ id: ID, role: "DIRECTIVO", schoolId: null });
  Object.assign(prisma.usuario.rows.find((u) => u.id === ID) as Record<string, unknown>, {
    email: "dir@escuela.com",
    username: "dir",
    passwordHash: await hashPassword(CLAVE),
    totpActivo: false
  });
});

const tk = () => tokenFor({ id: ID, role: "DIRECTIVO", schoolId: null });
const login = () => jsonRequest(baseUrl, "POST", "/api/auth/login", { body: { identifier: "dir@escuela.com", password: CLAVE } });

const activar = async () => {
  const conf = await jsonRequest(baseUrl, "POST", "/api/auth/2fa/configurar", { token: tk() });
  assert.equal(conf.status, 200, JSON.stringify(conf.body));
  const { secreto, url } = conf.body as { secreto: string; url: string };
  assert.match(url, /^otpauth:\/\/totp\//);
  const mal = await jsonRequest(baseUrl, "POST", "/api/auth/2fa/activar", { token: tk(), body: { codigo: "000000" } });
  assert.equal(mal.status, 400);
  const ok = await jsonRequest(baseUrl, "POST", "/api/auth/2fa/activar", {
    token: tk(),
    body: { codigo: codigoEnPaso(secreto, pasoActual() - 1) }
  });
  assert.equal(ok.status, 200, JSON.stringify(ok.body));
  return { secreto, recuperacion: (ok.body as { codigosRecuperacion: string[] }).codigosRecuperacion };
};

test("sin la verificación activa, el login entrega la sesión como siempre", async () => {
  const r = await login();
  assert.equal(r.status, 200);
  assert.ok((r.body as { accessToken?: string }).accessToken);
});

test("con la verificación activa, la contraseña sola no alcanza: hace falta el código", async () => {
  const { secreto, recuperacion } = await activar();
  assert.equal(recuperacion.length, 8);
  const u = prisma.usuario.rows.find((x) => x.id === ID) as Record<string, unknown>;
  assert.notEqual(u.totpSecreto, secreto, "el secreto se guarda cifrado");

  const r = await login();
  assert.equal(r.status, 200);
  const body = r.body as { requiere2fa?: boolean; desafio?: string; accessToken?: string };
  assert.equal(body.requiere2fa, true);
  assert.equal(body.accessToken, undefined);

  const malo = await jsonRequest(baseUrl, "POST", "/api/auth/2fa/login", { body: { desafio: body.desafio, codigo: "123456" } });
  assert.equal(malo.status, 401);
  const bueno = await jsonRequest(baseUrl, "POST", "/api/auth/2fa/login", {
    body: { desafio: body.desafio, codigo: codigoEnPaso(secreto, pasoActual()) }
  });
  assert.equal(bueno.status, 200, JSON.stringify(bueno.body));
  assert.ok((bueno.body as { accessToken?: string }).accessToken);

  const repetido = await jsonRequest(baseUrl, "POST", "/api/auth/2fa/login", {
    body: { desafio: body.desafio, codigo: codigoEnPaso(secreto, pasoActual()) }
  });
  assert.equal(repetido.status, 401, "el mismo código no sirve dos veces");
});

test("un código de recuperación sirve una sola vez", async () => {
  const { recuperacion } = await activar();
  const { desafio } = (await login()).body as { desafio: string };
  const r1 = await jsonRequest(baseUrl, "POST", "/api/auth/2fa/login", { body: { desafio, codigo: recuperacion[0] } });
  assert.equal(r1.status, 200);
  const r2 = await jsonRequest(baseUrl, "POST", "/api/auth/2fa/login", { body: { desafio, codigo: recuperacion[0] } });
  assert.equal(r2.status, 401);
});

test("un desafío alterado no sirve", async () => {
  const { secreto } = await activar();
  const { desafio } = (await login()).body as { desafio: string };
  const [, firma] = desafio.split(".");
  const falso = `${Buffer.from(`otro.${Date.now() + 60_000}`).toString("base64url")}.${firma}`;
  const r = await jsonRequest(baseUrl, "POST", "/api/auth/2fa/login", { body: { desafio: falso, codigo: codigoEnPaso(secreto, pasoActual()) } });
  assert.equal(r.status, 401);
  assert.ok(base32(Buffer.from("x")));
});

test("desactivar pide contraseña y código", async () => {
  const { secreto } = await activar();
  const sinClave = await jsonRequest(baseUrl, "POST", "/api/auth/2fa/desactivar", { token: tk(), body: { password: "otra", codigo: "1" } });
  assert.equal(sinClave.status, 403);
  const ok = await jsonRequest(baseUrl, "POST", "/api/auth/2fa/desactivar", {
    token: tk(),
    body: { password: CLAVE, codigo: codigoEnPaso(secreto, pasoActual() + 1) }
  });
  assert.equal(ok.status, 200, JSON.stringify(ok.body));
  const r = await login();
  assert.ok((r.body as { accessToken?: string }).accessToken);
});
