/**
 * L8 — POST /api/offline/permiso: el permiso firmado de la app sin conexión.
 *
 * Comprueba que la firma Ed25519 se verifica con la clave pública en crudo (la que se compila en la app), que
 * solo viajan los roles que usa la app y que sin clave configurada la ruta responde 503.
 */
import assert from "node:assert/strict";
import crypto from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { after, before, test } from "node:test";
import { jsonRequest, prisma, seedUser, startServer, tokenFor } from "./_helpers/setup";

// env y permiso-offline se importan en `before`, después de que setup defina JWT_SECRET.
let ENV: typeof import("../../src/lib/env").ENV;
let clavePublicaCruda: typeof import("../../src/lib/permiso-offline").clavePublicaCruda;

let baseUrl: string;
let close: () => Promise<void>;
let carpeta: string;
let clavePublica: crypto.KeyObject;
const DISPOSITIVO = "dispositivo-de-prueba-0001";

before(async () => {
  carpeta = fs.mkdtempSync(path.join(os.tmpdir(), "permiso-offline-"));
  const { privateKey, publicKey } = crypto.generateKeyPairSync("ed25519");
  fs.writeFileSync(path.join(carpeta, "clave.pem"), privateKey.export({ type: "pkcs8", format: "pem" }));
  clavePublica = publicKey;
  ({ ENV } = await import("../../src/lib/env"));
  ({ clavePublicaCruda } = await import("../../src/lib/permiso-offline"));
  ENV.OFFLINE_PERMISO_CLAVE_ARCHIVO = path.join(carpeta, "clave.pem");
  const { offline } = await import("../../src/routes/offline");
  ({ baseUrl, close } = await startServer([offline]));
});

after(async () => {
  if (close) await close();
  fs.rmSync(carpeta, { recursive: true, force: true });
});

const pedir = (token: string, body: unknown = { dispositivo: DISPOSITIVO }) =>
  jsonRequest(baseUrl, "POST", "/api/offline/permiso", { token, body });

test("L8: el permiso viene firmado y la firma se verifica con la clave pública en crudo", async () => {
  seedUser({ id: "alumna-offline", role: "STUDENT", roles: ["USER"], schoolId: "esc-1" });
  const r = await pedir(tokenFor({ id: "alumna-offline", role: "STUDENT", roles: ["USER"], schoolId: "esc-1" }));
  assert.equal(r.status, 200);
  const { permiso, firma, vence } = r.body as { permiso: string; firma: string; vence: string };
  assert.ok(crypto.verify(null, Buffer.from(permiso), clavePublica, Buffer.from(firma, "base64url")));

  // La app arma la clave desde los 32 bytes en crudo: tiene que dar la misma.
  const privada = crypto.createPrivateKey(fs.readFileSync(ENV.OFFLINE_PERMISO_CLAVE_ARCHIVO));
  const cruda = Buffer.from(clavePublicaCruda(privada), "base64url");
  assert.equal(cruda.length, 32);
  const reconstruida = crypto.createPublicKey({ key: { kty: "OKP", crv: "Ed25519", x: cruda.toString("base64url") }, format: "jwk" });
  assert.ok(crypto.verify(null, Buffer.from(permiso), reconstruida, Buffer.from(firma, "base64url")));

  const datos = JSON.parse(Buffer.from(permiso, "base64url").toString("utf8"));
  assert.equal(datos.v, 1);
  assert.equal(datos.sub, "alumna-offline");
  assert.deepEqual(datos.roles, ["USER"]);
  assert.equal(datos.dispositivo, DISPOSITIVO);
  assert.equal(datos.menor, true); // sin fecha de nacimiento cuenta como menor
  assert.equal(datos.vence, vence);
  const dias = (Date.parse(datos.vence) - Date.parse(datos.emitido)) / 86_400_000;
  assert.equal(dias, 90);
});

test("L8: directivo y administrador no viajan en el permiso", async () => {
  seedUser({ id: "directivo-profe", role: "DIRECTIVO", roles: ["DIRECTIVO", "TEACHER"], schoolId: "esc-1" });
  const r = await pedir(tokenFor({ id: "directivo-profe", role: "DIRECTIVO", roles: ["DIRECTIVO", "TEACHER"], schoolId: "esc-1" }));
  assert.equal(r.status, 200);
  const datos = JSON.parse(Buffer.from((r.body as { permiso: string }).permiso, "base64url").toString("utf8"));
  assert.deepEqual(datos.roles, ["TEACHER"]);
});

test("L8: una cuenta sin rol de alumno, profesor ni padre no se activa", async () => {
  seedUser({ id: "solo-admin", role: "ADMIN", roles: ["ADMIN"] });
  const r = await pedir(tokenFor({ id: "solo-admin", role: "ADMIN", roles: ["ADMIN"] }));
  assert.equal(r.status, 403);
  assert.equal((r.body as { code: string }).code, "SIN_ROL_PARA_APP");
});

test("L8: el identificador del dispositivo se valida", async () => {
  const r = await pedir(tokenFor({ id: "alumna-offline", role: "STUDENT", roles: ["USER"], schoolId: "esc-1" }), { dispositivo: "x" });
  assert.equal(r.status, 400);
});

test("L8: una cuenta suspendida no recibe permiso", async () => {
  seedUser({ id: "suspendida", role: "STUDENT", roles: ["USER"] });
  const fila = prisma.usuario.rows.find((u: { id: string }) => u.id === "suspendida") as Record<string, unknown>;
  fila.isBanned = true;
  const r = await pedir(tokenFor({ id: "suspendida", role: "STUDENT", roles: ["USER"] }));
  assert.equal(r.status, 403);
});

test("L8: sin clave configurada responde 503", async () => {
  const antes = ENV.OFFLINE_PERMISO_CLAVE_ARCHIVO;
  ENV.OFFLINE_PERMISO_CLAVE_ARCHIVO = "";
  try {
    const r = await pedir(tokenFor({ id: "alumna-offline", role: "STUDENT", roles: ["USER"], schoolId: "esc-1" }));
    assert.equal(r.status, 503);
    assert.equal((r.body as { code: string }).code, "PERMISO_NO_CONFIGURADO");
  } finally {
    ENV.OFFLINE_PERMISO_CLAVE_ARCHIVO = antes;
  }
});
