/**
 * Correcciones de la revisión de código del 2026-11-09 (auth, autorización, pagos):
 *  1-2. Comparación de secretos en tiempo constante (clave de arranque y firma de Cryptomus).
 *  3.   `canXxx` da lo mismo con un rol suelto que con un objeto (ADMIN_ESCUELA es staff en ambos).
 *  4.   El limitador de cambio de escuela está conectado a la ruta.
 *  5.   El segundo paso de 2FA tiene el mismo tope estricto que el primero.
 *
 * Los limitadores quedan ACTIVOS acá (no se define AUTH_RATE_LIMIT_DISABLED): cada archivo de test corre
 * en su propio proceso, así que no afecta a los demás.
 */
process.env.NODE_ENV = "test";

import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import { resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";
import { ENV } from "../../src/lib/env";
import { secretosIguales } from "../../src/lib/secret-compare";
import {
  canCreateClass,
  canManageParents,
  canMintCurrency,
  canModerateContent,
  canPostInClass
} from "../../src/lib/authorization";
import { CryptomusProvider } from "../../src/lib/pasarelas/cryptomus-provider";
import { createHash } from "node:crypto";

ENV.BOOTSTRAP_ADMIN_KEY = "clave-de-arranque-de-prueba";
ENV.CRYPTOMUS_API_KEY = "test-cryptomus-api-key";

let baseUrl: string;
let close: () => Promise<void>;

before(async () => {
  const { auth } = await import("../../src/routes/auth");
  const server = await startServer([auth]);
  baseUrl = server.baseUrl;
  close = server.close;
});
after(async () => {
  if (close) await close();
});
beforeEach(() => {
  resetPrisma();
});

// ── 1-2 · comparación en tiempo constante ───────────────────────────────────

test("secretosIguales: iguales, distintos, de otro largo y no-strings", () => {
  assert.equal(secretosIguales("abc123", "abc123"), true);
  assert.equal(secretosIguales("abc123", "abc124"), false);
  assert.equal(secretosIguales("abc123", "abc1234"), false);
  assert.equal(secretosIguales("abc123", ""), false);
  assert.equal(secretosIguales("", ""), true);
  assert.equal(secretosIguales(undefined, "abc"), false);
  assert.equal(secretosIguales("abc", null), false);
  assert.equal(secretosIguales(123, 123), false);
});

test("bootstrap-admin: clave incorrecta → 401; clave correcta pasa la guarda (falla después, por el cuerpo)", async () => {
  const llamar = (clave?: string) =>
    fetch(`${baseUrl}/api/auth/bootstrap-admin`, {
      method: "POST",
      headers: { "content-type": "application/json", ...(clave ? { "x-bootstrap-key": clave } : {}) },
      body: JSON.stringify({ cualquier: "cosa" })
    });
  assert.equal((await llamar()).status, 401);
  assert.equal((await llamar("clave-de-arranque-de-pruebX")).status, 401);
  assert.equal((await llamar("clave-de-arranque-de-prueba-y-mas")).status, 401);
  const ok = await llamar("clave-de-arranque-de-prueba");
  assert.notEqual(ok.status, 401, "con la clave correcta no debe cortar por clave inválida");
});

const firmaCryptomus = (cuerpo: Record<string, unknown>) =>
  createHash("md5")
    .update(Buffer.from(JSON.stringify(cuerpo)).toString("base64") + ENV.CRYPTOMUS_API_KEY)
    .digest("hex");

test("Cryptomus verifyWebhook: firma válida entra; firma alterada, de otro largo o ausente se rechaza", () => {
  const provider = new CryptomusProvider();
  const cuerpo = { order_id: "ord-1", status: "paid", amount: "100.00" };
  const valido = JSON.stringify({ ...cuerpo, sign: firmaCryptomus(cuerpo) });
  assert.equal(provider.verifyWebhook(valido)?.estado, "pagada");

  const alterada = JSON.stringify({ ...cuerpo, sign: firmaCryptomus(cuerpo).replace(/.$/, (c) => (c === "0" ? "1" : "0")) });
  assert.equal(provider.verifyWebhook(alterada), null);
  assert.equal(provider.verifyWebhook(JSON.stringify({ ...cuerpo, sign: "abc" })), null);
  assert.equal(provider.verifyWebhook(JSON.stringify({ ...cuerpo, sign: "" })), null);
  assert.equal(provider.verifyWebhook(JSON.stringify(cuerpo)), null);
});

// ── 3 · autorización consistente ────────────────────────────────────────────

test("canXxx: rol suelto y objeto dan lo mismo; ADMIN_ESCUELA es staff en ambos", () => {
  const acciones = [canCreateClass, canPostInClass, canModerateContent, canMintCurrency, canManageParents];
  for (const accion of acciones) {
    for (const rol of ["ADMIN", "DIRECTIVO", "ADMIN_ESCUELA", "TEACHER"]) {
      assert.equal(accion(rol), true, `${accion.name}("${rol}")`);
      assert.equal(accion({ role: rol }), true, `${accion.name}({role:"${rol}"})`);
      assert.equal(accion({ roles: [rol] }), true, `${accion.name}({roles:["${rol}"]})`);
    }
    for (const rol of ["USER", "STUDENT", "PARENT", "GUEST", ""]) {
      assert.equal(accion(rol), false, `${accion.name}("${rol}")`);
      assert.equal(accion({ role: rol }), false, `${accion.name}({role:"${rol}"})`);
    }
    assert.equal(accion(null), false);
    assert.equal(accion(undefined), false);
  }
});

// ── 4 · limitador de cambio de escuela ──────────────────────────────────────

test("escuela-activa: pasada la cuota por minuto responde 429 (el limitador está conectado)", async () => {
  seedUser({ id: "usr-switch", role: "DIRECTIVO", schoolId: null });
  const token = tokenFor({ id: "usr-switch", role: "DIRECTIVO", schoolId: null });
  const codigos: number[] = [];
  for (let i = 0; i < 105; i++) {
    const r = await jsonRequest(baseUrl, "POST", "/api/auth/escuela-activa", { token, body: {} });
    codigos.push(r.status);
  }
  assert.ok(!codigos.slice(0, 100).includes(429), "las primeras 100 (cuota de desarrollo) no se cortan");
  assert.ok(codigos.slice(100).every((c) => c === 429), `después de la cuota debe cortar: ${codigos.slice(98, 105).join(",")}`);
});

// ── 5 · segundo paso de 2FA ─────────────────────────────────────────────────

test("2fa/login: tope de 10 intentos por ventana (el desafío roto da 401 hasta el tope y 429 después)", async () => {
  const codigos: number[] = [];
  for (let i = 0; i < 13; i++) {
    const r = await jsonRequest(baseUrl, "POST", "/api/auth/2fa/login", { body: { desafio: "desafio-invalido", codigo: "000000" } });
    codigos.push(r.status);
  }
  assert.deepEqual(codigos.slice(0, 10), Array(10).fill(401), `primeros 10: ${codigos.join(",")}`);
  assert.deepEqual(codigos.slice(10), [429, 429, 429], `después del tope: ${codigos.join(",")}`);
});
