/**
 * PLAN-B Fase 5 — CRUD de `EscuelaPasarela` (conexión de pasarela por
 * escuela). Cubre: permisos (ADMIN/DIRECTIVO de la propia escuela; nadie
 * más), alta cifra las credenciales (nunca se devuelven en claro ni
 * cifradas), upsert por provider (no duplica filas), y el toggle
 * activa/inactiva vía PATCH.
 */
import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";

let baseUrl: string;
let close: () => Promise<void>;

const ESCUELA = "esc-pasarelas-crud";
const ESCUELA_OTRA = "esc-pasarelas-otra";
const DIRECTIVO = "directivo-pasarelas-crud";
const DIRECTIVO_OTRA = "directivo-pasarelas-otra";
const TEACHER = "teacher-pasarelas-crud";

before(async () => {
  const { escuelaPasarelas } = await import("../../src/routes/escuela-pasarelas");
  const server = await startServer([escuelaPasarelas]);
  baseUrl = server.baseUrl;
  close = server.close;
});

after(async () => {
  if (close) await close();
});

beforeEach(() => {
  resetPrisma();
  const nowIso = new Date().toISOString();
  prisma.escuela.rows.push({ id: ESCUELA, name: "Escuela CRUD Pasarelas", isDeleted: false, createdAt: nowIso });
  prisma.escuela.rows.push({ id: ESCUELA_OTRA, name: "Otra Escuela", isDeleted: false, createdAt: nowIso });
  seedUser({ id: DIRECTIVO, role: "DIRECTIVO", schoolId: ESCUELA });
  seedUser({ id: DIRECTIVO_OTRA, role: "DIRECTIVO", schoolId: ESCUELA_OTRA });
  seedUser({ id: TEACHER, role: "TEACHER", schoolId: ESCUELA });
});

test("TEACHER no puede conectar ni listar pasarelas", async () => {
  const token = tokenFor({ id: TEACHER, role: "TEACHER", schoolId: ESCUELA });
  const getRes = await jsonRequest(baseUrl, "GET", `/api/escuelas/${ESCUELA}/pasarelas`, { token });
  assert.equal(getRes.status, 403);
  const postRes = await jsonRequest(baseUrl, "POST", `/api/escuelas/${ESCUELA}/pasarelas`, {
    token,
    body: { provider: "mercadopago" }
  });
  assert.equal(postRes.status, 403);
});

test("DIRECTIVO de otra escuela no puede conectar pasarela ajena", async () => {
  const token = tokenFor({ id: DIRECTIVO_OTRA, role: "DIRECTIVO", schoolId: ESCUELA_OTRA });
  const res = await jsonRequest(baseUrl, "POST", `/api/escuelas/${ESCUELA}/pasarelas`, {
    token,
    body: { provider: "mercadopago" }
  });
  assert.equal(res.status, 403);
});

test("DIRECTIVO conecta una pasarela; la respuesta nunca expone credenciales", async () => {
  const token = tokenFor({ id: DIRECTIVO, role: "DIRECTIVO", schoolId: ESCUELA });
  const res = await jsonRequest(baseUrl, "POST", `/api/escuelas/${ESCUELA}/pasarelas`, {
    token,
    body: {
      provider: "mercadopago",
      cuentaConectadaId: "cuenta-mp-123",
      credenciales: { accessToken: "secreto-super-sensible" }
    }
  });
  assert.equal(res.status, 201);
  const body = res.body as Record<string, unknown>;
  assert.equal(body.provider, "mercadopago");
  assert.equal(body.cuentaConectadaId, "cuenta-mp-123");
  assert.equal(body.activa, true);
  assert.equal(body.configurada, true);
  assert.equal("credenciales" in body, false);
  assert.equal("credencialesCifradas" in body, false);

  const row = prisma.escuelaPasarela.rows.find((r) => r.escuelaId === ESCUELA && r.provider === "mercadopago")!;
  assert.ok(row.credencialesCifradas, "debe persistir cifrado");
  assert.notEqual(row.credencialesCifradas, "secreto-super-sensible");
});

test("POST repetido con el mismo provider actualiza (no duplica filas)", async () => {
  const token = tokenFor({ id: DIRECTIVO, role: "DIRECTIVO", schoolId: ESCUELA });
  await jsonRequest(baseUrl, "POST", `/api/escuelas/${ESCUELA}/pasarelas`, {
    token,
    body: { provider: "cryptomus", cuentaConectadaId: "acct_1" }
  });
  const res2 = await jsonRequest(baseUrl, "POST", `/api/escuelas/${ESCUELA}/pasarelas`, {
    token,
    body: { provider: "cryptomus", cuentaConectadaId: "acct_2" }
  });
  assert.equal(res2.status, 200);
  const filas = prisma.escuelaPasarela.rows.filter((r) => r.escuelaId === ESCUELA && r.provider === "cryptomus");
  assert.equal(filas.length, 1);
  assert.equal(filas[0].cuentaConectadaId, "acct_2");
});

test("GET lista las pasarelas conectadas de la escuela", async () => {
  const token = tokenFor({ id: DIRECTIVO, role: "DIRECTIVO", schoolId: ESCUELA });
  await jsonRequest(baseUrl, "POST", `/api/escuelas/${ESCUELA}/pasarelas`, {
    token,
    body: { provider: "cryptomus", credenciales: { apiKey: "xyz" } }
  });
  const res = await jsonRequest(baseUrl, "GET", `/api/escuelas/${ESCUELA}/pasarelas`, { token });
  assert.equal(res.status, 200);
  const body = res.body as { items: Array<{ provider: string }> };
  assert.equal(body.items.length, 1);
  assert.equal(body.items[0].provider, "cryptomus");
});

test("PATCH desactiva una pasarela conectada sin tocar credenciales", async () => {
  const token = tokenFor({ id: DIRECTIVO, role: "DIRECTIVO", schoolId: ESCUELA });
  await jsonRequest(baseUrl, "POST", `/api/escuelas/${ESCUELA}/pasarelas`, {
    token,
    body: { provider: "mercadopago", credenciales: { accessToken: "abc" } }
  });
  const res = await jsonRequest(baseUrl, "PATCH", `/api/escuelas/${ESCUELA}/pasarelas/mercadopago`, {
    token,
    body: { activa: false }
  });
  assert.equal(res.status, 200);
  const row = prisma.escuelaPasarela.rows.find((r) => r.escuelaId === ESCUELA && r.provider === "mercadopago")!;
  assert.equal(row.activa, false);
  assert.ok(row.credencialesCifradas);
});

test("PATCH sobre un provider no conectado devuelve 404", async () => {
  const token = tokenFor({ id: DIRECTIVO, role: "DIRECTIVO", schoolId: ESCUELA });
  const res = await jsonRequest(baseUrl, "PATCH", `/api/escuelas/${ESCUELA}/pasarelas/cryptomus`, {
    token,
    body: { activa: false }
  });
  assert.equal(res.status, 404);
});

test("provider inválido es rechazado (400)", async () => {
  const token = tokenFor({ id: DIRECTIVO, role: "DIRECTIVO", schoolId: ESCUELA });
  const res = await jsonRequest(baseUrl, "POST", `/api/escuelas/${ESCUELA}/pasarelas`, {
    token,
    body: { provider: "paypal" }
  });
  assert.equal(res.status, 400);
});
