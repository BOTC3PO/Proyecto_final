/**
 * Límite de ingreso por cuenta y por IP, de punta a punta: router de auth real, hash de contraseñas real y varias IPs
 * simuladas con X-Forwarded-For. Los límites quedan ACTIVOS (no se define AUTH_RATE_LIMIT_DISABLED).
 *
 * Cada prueba usa IPs y cuentas propias: los contadores viven en el proceso y se comparten dentro del archivo.
 */
process.env.NODE_ENV = "test";

import assert from "node:assert/strict";
import type { Server } from "node:http";
import express from "express";
import { after, before, test } from "node:test";
import { prisma, resetPrisma, seedUser } from "./_helpers/setup";
import { hashPassword } from "../../src/lib/passwords";
import { interceptarCorreos, type Correo } from "../../src/lib/mailer";
import { cifrarSecreto, codigoEnPaso, pasoActual, base32 } from "../../src/lib/totp";
import { createRateLimiter } from "../../src/lib/rate-limit";

const CLAVE = "Clave#Valida2026";
const MAL = "mal-escrita-1"; // el esquema exige 6 caracteres o más: una más corta da 400 y no cuenta como intento
let baseUrl: string;
let server: Server;
let hash: string;
let enviados: Correo[] = [];

before(async () => {
  hash = await hashPassword(CLAVE);
  const { auth } = await import("../../src/routes/auth");
  const app = express();
  app.set("trust proxy", true); // la IP sale de X-Forwarded-For, como detrás de Nginx
  app.use(express.json());
  app.use(auth);
  app.use((_req, res) => res.status(404).json({ error: "not found" }));
  server = await new Promise<Server>((resolve) => { const s = app.listen(0, () => resolve(s)); });
  baseUrl = `http://127.0.0.1:${(server.address() as { port: number }).port}`;
  interceptarCorreos((c) => enviados.push(c));
});
after(async () => {
  interceptarCorreos(null);
  await new Promise<void>((r) => server.close(() => r()));
});

const crearUsuario = (id: string, extra: Record<string, unknown> = {}) => {
  seedUser({ id, role: "USER", schoolId: null });
  Object.assign(prisma.usuario.rows.find((u) => u.id === id) as Record<string, unknown>, {
    email: `${id}@escuela.test`, username: id, passwordHash: hash, ...extra
  });
};

type Resp = { status: number; body: Record<string, unknown>; cookie: string | undefined; retryAfter: string | null };
const login = async (ip: string, identifier: string, password: string, extra: { cookie?: string; ua?: string; proto?: string } = {}): Promise<Resp> => {
  const r = await fetch(`${baseUrl}/api/auth/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json", "x-forwarded-for": ip, "user-agent": extra.ua ?? "Mozilla/5.0 (prueba)",
      ...(extra.cookie ? { cookie: extra.cookie } : {}), ...(extra.proto ? { "x-forwarded-proto": extra.proto } : {})
    },
    body: JSON.stringify({ identifier, password })
  });
  const sc = r.headers.getSetCookie().find((c) => c.startsWith("vb_dev="));
  return { status: r.status, body: (await r.json().catch(() => ({}))) as Record<string, unknown>, cookie: sc, retryAfter: r.headers.get("retry-after") };
};
const cookieDe = (r: Resp) => (r.cookie ?? "").split(";")[0];

// ── la escuela ──────────────────────────────────────────────────────────────────────────────────────────────────────

test("ESCUELA: 30 alumnos distintos entran a la vez desde la misma IP (antes entraban 10 y 20 recibían 429)", async () => {
  resetPrisma();
  for (let i = 0; i < 30; i++) crearUsuario(`esc-a${i}`);
  const rs = await Promise.all(Array.from({ length: 30 }, (_, i) => login("203.0.113.10", `esc-a${i}`, CLAVE)));
  assert.deepEqual(rs.map((r) => r.status), Array(30).fill(200));
  // algunos se equivocan de contraseña y después la corrigen: tampoco los frena
  const mal = await Promise.all(Array.from({ length: 12 }, (_, i) => login("203.0.113.10", `esc-a${i}`, "mal-escrita-1")));
  assert.deepEqual(mal.map((r) => r.status), Array(12).fill(401));
  const bien = await Promise.all(Array.from({ length: 12 }, (_, i) => login("203.0.113.10", `esc-a${i}`, CLAVE)));
  assert.deepEqual(bien.map((r) => r.status), Array(12).fill(200));
});

// ── ataques ─────────────────────────────────────────────────────────────────────────────────────────────────────────

test("UNA FUENTE PRUEBA MUCHAS CUENTAS: a la décima cuenta fallida se la frena, también con la contraseña buena; otra IP entra", async () => {
  resetPrisma();
  for (let i = 0; i < 14; i++) crearUsuario(`spr-u${i}`);
  const estados: number[] = [];
  for (let i = 0; i < 12; i++) estados.push((await login("198.51.100.50", `spr-u${i}`, "contraseña-adivinada")).status);
  assert.deepEqual(estados, [401, 401, 401, 401, 401, 401, 401, 401, 401, 401, 429, 429]);
  const buena = await login("198.51.100.50", "spr-u13", CLAVE);
  assert.equal(buena.status, 429, "esa IP quedó frenada");
  assert.ok(Number(buena.retryAfter) > 0, "avisa cuánto esperar (Retry-After)");
  assert.equal((await login("198.51.100.51", "spr-u13", CLAVE)).status, 200, "otra IP entra normalmente");
});

test("UNA CUENTA ATACADA DESDE MUCHAS IPs: a los 5 fallos se bloquea (aun con la contraseña correcta); el correo y el usuario comparten el cupo", async () => {
  resetPrisma();
  crearUsuario("fb-ana");
  const estados: number[] = [];
  for (let i = 0; i < 5; i++) estados.push((await login(`45.9.9.${i}`, i % 2 ? "fb-ana@escuela.test" : "fb-ana", "adivinando")).status);
  assert.deepEqual(estados, [401, 401, 401, 401, 401]);
  const bloqueada = await login("45.9.9.99", "fb-ana@escuela.test", CLAVE);
  assert.equal(bloqueada.status, 429);
  assert.equal((await login("45.9.9.98", "fb-ana", CLAVE)).status, 429, "alias distinto, mismo cupo");
  crearUsuario("fb-beto");
  assert.equal((await login("45.9.9.99", "fb-beto", CLAVE)).status, 200, "las otras cuentas no se ven afectadas");
});

test("MISMO NAVEGADOR: quien ya entró desde su navegador no queda afuera aunque otro le agote el cupo", async () => {
  resetPrisma();
  crearUsuario("dev-ana");
  const primera = await login("190.50.1.1", "dev-ana", CLAVE);
  assert.equal(primera.status, 200);
  assert.ok(primera.cookie, "se emitió la cookie de dispositivo");
  for (let i = 0; i < 6; i++) await login(`45.8.8.${i}`, "dev-ana", "adivinando"); // el atacante (sin cookie) la bloquea
  assert.equal((await login("45.8.8.77", "dev-ana", CLAVE)).status, 429, "desde un dispositivo desconocido: bloqueada");
  const suNavegador = await login("190.50.1.1", "dev-ana", CLAVE, { cookie: cookieDe(primera) });
  assert.equal(suNavegador.status, 200, "su navegador sigue entrando");
  // la cookie de otra cuenta o una inventada no sirve
  crearUsuario("dev-beto");
  const deBeto = await login("190.50.1.2", "dev-beto", CLAVE);
  assert.equal((await login("45.8.8.78", "dev-ana", CLAVE, { cookie: cookieDe(deBeto) })).status, 429);
  assert.equal((await login("45.8.8.79", "dev-ana", CLAVE, { cookie: "vb_dev=abc.def.ghi" })).status, 429);
});

test("la cookie de dispositivo es HttpOnly, SameSite=Lax, acotada a /api/auth y Secure solo con HTTPS", async () => {
  resetPrisma();
  crearUsuario("ck-ana");
  const http = await login("190.50.2.1", "ck-ana", CLAVE);
  assert.match(http.cookie ?? "", /HttpOnly/);
  assert.match(http.cookie ?? "", /SameSite=Lax/);
  assert.match(http.cookie ?? "", /Path=\/api\/auth/);
  assert.doesNotMatch(http.cookie ?? "", /Secure/);
  const https = await login("190.50.2.1", "ck-ana", CLAVE, { proto: "https" });
  assert.match(https.cookie ?? "", /Secure/);
});

test("entrar bien devuelve el intento: 4 fallos + un acierto dejan exactamente 1 fallo más antes de bloquear", async () => {
  resetPrisma();
  crearUsuario("ref-ana");
  for (let i = 0; i < 4; i++) assert.equal((await login("45.7.7.1", "ref-ana", MAL)).status, 401);
  assert.equal((await login("45.7.7.1", "ref-ana", CLAVE)).status, 200);
  assert.equal((await login("45.7.7.2", "ref-ana", MAL)).status, 401);
  assert.equal((await login("45.7.7.3", "ref-ana", MAL)).status, 429);
});

test("una cuenta que no existe se comporta igual que una que existe (no se puede averiguar por el límite)", async () => {
  resetPrisma();
  const estados: number[] = [];
  for (let i = 0; i < 7; i++) estados.push((await login(`45.6.6.${i}`, "no-existe@escuela.test", "x1234567")).status);
  assert.deepEqual(estados, [401, 401, 401, 401, 401, 429, 429]);
  crearUsuario("enum-ana");
  const real: number[] = [];
  for (let i = 0; i < 7; i++) real.push((await login(`45.5.5.${i}`, "enum-ana", "x1234567")).status);
  assert.deepEqual(real, estados);
});

test("el 429 no revela qué regla saltó: IP y cuenta responden con el mismo mensaje", async () => {
  resetPrisma();
  for (let i = 0; i < 12; i++) crearUsuario(`msg-u${i}`);
  for (let i = 0; i < 11; i++) await login("198.51.100.60", `msg-u${i}`, MAL);
  const porIp = await login("198.51.100.60", "msg-u11", CLAVE);
  for (let i = 0; i < 6; i++) await login(`45.4.4.${i}`, "msg-u0", MAL);
  const porCuenta = await login("45.4.4.99", "msg-u0", CLAVE);
  assert.equal(porIp.status, 429);
  assert.equal(porCuenta.status, 429);
  assert.equal(porIp.body.error, porCuenta.body.error);
  assert.doesNotMatch(JSON.stringify(porIp.body), /ip|cuenta|spray|motivo/i);
});

test("las IPv6 del mismo /64 comparten el límite (un atacante dispone de bloques enteros)", async () => {
  resetPrisma();
  for (let i = 0; i < 14; i++) crearUsuario(`v6-u${i}`);
  const estados: number[] = [];
  for (let i = 0; i < 12; i++) estados.push((await login(`2001:db8:aa:bb:${i}:${i + 1}:${i + 2}:${i + 3}`, `v6-u${i}`, MAL)).status);
  assert.equal(estados.slice(10).every((s) => s === 429), true, `estados: ${estados}`);
});

// ── segundo factor ──────────────────────────────────────────────────────────────────────────────────────────────────

const usuarioCon2fa = (id: string) => {
  const secreto = base32(Buffer.from(`secreto-${id}`.padEnd(20, "x")));
  crearUsuario(id, { totpActivo: true, totpSecreto: cifrarSecreto(secreto) });
  return secreto;
};
const dos = async (ip: string, desafio: string, codigo: string) => {
  const r = await fetch(`${baseUrl}/api/auth/2fa/login`, {
    method: "POST", headers: { "content-type": "application/json", "x-forwarded-for": ip }, body: JSON.stringify({ desafio, codigo })
  });
  return { status: r.status, cookie: r.headers.getSetCookie().find((c) => c.startsWith("vb_dev=")) };
};

test("2FA: 5 códigos incorrectos por persona y se bloquea (aunque cambie de IP); los desafíos inválidos no bloquean a nadie", async () => {
  resetPrisma();
  const secreto = usuarioCon2fa("f2-ana");
  const l = await login("190.60.1.1", "f2-ana", CLAVE);
  const desafio = String(l.body.desafio);
  assert.ok(l.body.requiere2fa && desafio);
  assert.equal(l.cookie, undefined, "con 2FA pendiente todavía no se recuerda el navegador");
  for (let i = 0; i < 12; i++) assert.equal((await dos("190.60.1.9", "desafio-inventado", "000000")).status, 401); // basura de otra IP
  const estados: number[] = [];
  for (let i = 0; i < 5; i++) estados.push((await dos(`190.60.2.${i}`, desafio, "000000")).status);
  assert.deepEqual(estados, [401, 401, 401, 401, 401]);
  assert.equal((await dos("190.60.2.99", desafio, codigoEnPaso(secreto, pasoActual()))).status, 429, "ni con el código bueno");
});

test("2FA: un ingreso completo devuelve el intento y recuerda el navegador; una escuela no se bloquea por IP", async () => {
  resetPrisma();
  const secreto = usuarioCon2fa("f2-beto");
  for (let i = 0; i < 2; i++) {
    const l = await login("190.61.1.1", "f2-beto", CLAVE);
    assert.equal((await dos("190.61.1.1", String(l.body.desafio), "000000")).status, 401);
  }
  const l = await login("190.61.1.1", "f2-beto", CLAVE);
  const ok = await dos("190.61.1.1", String(l.body.desafio), codigoEnPaso(secreto, pasoActual() - 1));
  assert.equal(ok.status, 200);
  assert.ok(ok.cookie, "al completar el 2FA se emite la cookie de dispositivo");
  // 30 alumnos con 2FA desde la misma IP: ninguno depende del cupo de los demás
  const ids = Array.from({ length: 6 }, (_, i) => `f2-esc${i}`);
  const secretos = ids.map(usuarioCon2fa);
  const finales = await Promise.all(ids.map(async (id, i) => {
    const li = await login("190.61.9.9", id, CLAVE);
    return (await dos("190.61.9.9", String(li.body.desafio), codigoEnPaso(secretos[i], pasoActual() - 1))).status;
  }));
  assert.deepEqual(finales, Array(6).fill(200));
});

// ── recuperar contraseña y refresco de sesión ───────────────────────────────────────────────────────────────────────

test("RECUPERAR CONTRASEÑA: 5 pedidos por hora por correo; el 6.º responde igual pero no envía nada (y otros correos no se ven afectados)", async () => {
  resetPrisma();
  crearUsuario("fp-ana");
  crearUsuario("fp-beto");
  enviados = [];
  const pedir = (correo: string, ip: string) => fetch(`${baseUrl}/api/auth/forgot-password`, {
    method: "POST", headers: { "content-type": "application/json", "x-forwarded-for": ip }, body: JSON.stringify({ email: correo })
  });
  for (let i = 0; i < 7; i++) assert.equal((await pedir("fp-ana@escuela.test", `190.70.1.${i}`)).status, 200);
  assert.equal(enviados.length, 5, "solo los 5 primeros enviaron correo");
  assert.equal((await pedir("fp-beto@escuela.test", "190.70.1.0")).status, 200);
  assert.equal(enviados.length, 6, "otro correo desde la misma IP sí envía");
});

test("createRateLimiter con keyGenerator: cuenta por persona aunque compartan IP (se usa para renovar la sesión)", async () => {
  const app = express();
  app.set("trust proxy", true);
  app.use(express.json());
  app.post("/x", createRateLimiter({ windowMs: 60_000, limit: 3, keyGenerator: (req) => `persona:${(req.body as { quien?: string }).quien}` }), (_req, res) => res.json({ ok: true }));
  const srv = await new Promise<Server>((resolve) => { const s = app.listen(0, () => resolve(s)); });
  const url = `http://127.0.0.1:${(srv.address() as { port: number }).port}/x`;
  const pedir = async (quien: string) => (await fetch(url, { method: "POST", headers: { "content-type": "application/json", "x-forwarded-for": "9.9.9.9" }, body: JSON.stringify({ quien }) })).status;
  assert.deepEqual([await pedir("a"), await pedir("a"), await pedir("a"), await pedir("a")], [200, 200, 200, 429]);
  assert.equal(await pedir("b"), 200, "otra persona, misma IP, no se ve afectada");
  await new Promise<void>((r) => srv.close(() => r()));
});

test("un pedido mal formado (contraseña demasiado corta) da 400 y NO consume cupo de la IP ni de la cuenta", async () => {
  resetPrisma();
  crearUsuario("mf-ana");
  for (let i = 0; i < 200; i++) assert.equal((await login("45.3.3.3", "mf-ana", "mal")).status, 400);
  assert.equal((await login("45.3.3.3", "mf-ana", CLAVE)).status, 200);
});
