/**
 * PLAN-C §4 (ítem 29) — personalización por escuela (branding).
 *
 * Cubre: sólo ADMIN o el DIRECTIVO de esa MISMA escuela puede editar el
 * branding; TEACHER y DIRECTIVO de otra escuela quedan afuera; el PATCH
 * mergea (no pisa) campos no enviados; GET /api/escuelas/:id devuelve el
 * branding ya parseado (no el JSON crudo).
 */
import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";

let baseUrl: string;
let close: () => Promise<void>;

const ESCUELA = "esc-branding";
const ESCUELA_OTRA = "esc-branding-otra";
const DIRECTIVO = "directivo-branding";
const DIRECTIVO_OTRA = "directivo-branding-otra";
const TEACHER = "teacher-branding";
const ADMIN = "admin-branding";

before(async () => {
  const { escuelas } = await import("../../src/routes/escuelas");
  const server = await startServer([escuelas]);
  baseUrl = server.baseUrl;
  close = server.close;
});

after(async () => {
  if (close) await close();
});

beforeEach(() => {
  resetPrisma();
  const nowIso = new Date().toISOString();
  prisma.escuela.rows.push({ id: ESCUELA, name: "Escuela Branding", isDeleted: false, createdAt: nowIso, branding: null });
  prisma.escuela.rows.push({ id: ESCUELA_OTRA, name: "Otra Escuela", isDeleted: false, createdAt: nowIso, branding: null });
  seedUser({ id: DIRECTIVO, role: "DIRECTIVO", schoolId: ESCUELA });
  seedUser({ id: DIRECTIVO_OTRA, role: "DIRECTIVO", schoolId: ESCUELA_OTRA });
  seedUser({ id: TEACHER, role: "TEACHER", schoolId: ESCUELA });
  seedUser({ id: ADMIN, role: "ADMIN", schoolId: null });
});

test("DIRECTIVO de la escuela puede setear su branding", async () => {
  const token = tokenFor({ id: DIRECTIVO, role: "DIRECTIVO", schoolId: ESCUELA });
  const res = await jsonRequest(baseUrl, "PATCH", `/api/escuelas/${ESCUELA}/branding`, {
    token,
    body: { logoUrl: "https://cdn.example.com/logo.png", colorPrimario: "#2563eb" }
  });
  assert.equal(res.status, 200);
  const body = res.body as { ok: boolean; branding: Record<string, unknown> };
  assert.equal(body.branding.logoUrl, "https://cdn.example.com/logo.png");
  assert.equal(body.branding.colorPrimario, "#2563eb");

  const getRes = await jsonRequest(baseUrl, "GET", `/api/escuelas/${ESCUELA}`, {});
  const getBody = getRes.body as { branding: Record<string, unknown> };
  assert.equal(getBody.branding.logoUrl, "https://cdn.example.com/logo.png");
});

test("PATCH parcial mergea sin pisar campos previos", async () => {
  const token = tokenFor({ id: DIRECTIVO, role: "DIRECTIVO", schoolId: ESCUELA });
  await jsonRequest(baseUrl, "PATCH", `/api/escuelas/${ESCUELA}/branding`, {
    token,
    body: { logoUrl: "https://cdn.example.com/logo.png" }
  });
  const res = await jsonRequest(baseUrl, "PATCH", `/api/escuelas/${ESCUELA}/branding`, {
    token,
    body: { colorPrimario: "#111111" }
  });
  const body = res.body as { branding: Record<string, unknown> };
  assert.equal(body.branding.logoUrl, "https://cdn.example.com/logo.png");
  assert.equal(body.branding.colorPrimario, "#111111");
});

test("DIRECTIVO de otra escuela no puede tocar el branding ajeno", async () => {
  const token = tokenFor({ id: DIRECTIVO_OTRA, role: "DIRECTIVO", schoolId: ESCUELA_OTRA });
  const res = await jsonRequest(baseUrl, "PATCH", `/api/escuelas/${ESCUELA}/branding`, {
    token,
    body: { logoUrl: "https://cdn.example.com/logo.png" }
  });
  assert.equal(res.status, 403);
});

test("TEACHER no puede editar branding", async () => {
  const token = tokenFor({ id: TEACHER, role: "TEACHER", schoolId: ESCUELA });
  const res = await jsonRequest(baseUrl, "PATCH", `/api/escuelas/${ESCUELA}/branding`, {
    token,
    body: { logoUrl: "https://cdn.example.com/logo.png" }
  });
  assert.equal(res.status, 403);
});

test("ADMIN de plataforma puede editar el branding de cualquier escuela", async () => {
  const token = tokenFor({ id: ADMIN, role: "ADMIN", schoolId: null });
  const res = await jsonRequest(baseUrl, "PATCH", `/api/escuelas/${ESCUELA}/branding`, {
    token,
    body: { iconoUrl: "https://cdn.example.com/icon.png" }
  });
  assert.equal(res.status, 200);
});

test("URL inválida en logoUrl responde 400", async () => {
  const token = tokenFor({ id: DIRECTIVO, role: "DIRECTIVO", schoolId: ESCUELA });
  const res = await jsonRequest(baseUrl, "PATCH", `/api/escuelas/${ESCUELA}/branding`, {
    token,
    body: { logoUrl: "no-es-una-url" }
  });
  assert.equal(res.status, 400);
});

test("escuela inexistente responde 404", async () => {
  const token = tokenFor({ id: ADMIN, role: "ADMIN", schoolId: null });
  const res = await jsonRequest(baseUrl, "PATCH", `/api/escuelas/escuela-inexistente/branding`, {
    token,
    body: { logoUrl: "https://cdn.example.com/logo.png" }
  });
  assert.equal(res.status, 404);
});
