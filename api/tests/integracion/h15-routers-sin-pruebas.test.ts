/**
 * H15 (2026-11-01) — routers que ninguna prueba tocaba: health, registro, beneficios, membresías, tokens push,
 * pedido de rol, sugerencias, generadores (público y de administración) y pagos enterprise.
 */
process.env.NODE_ENV = "test";

import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";

let baseUrl: string;
let close: () => Promise<void>;

before(async () => {
  const { health } = await import("../../src/routes/health");
  const { registro } = await import("../../src/routes/registro");
  const { beneficios } = await import("../../src/routes/beneficios");
  const { membresias } = await import("../../src/routes/membresias");
  const { pushTokens } = await import("../../src/routes/push-tokens");
  const { roles } = await import("../../src/routes/roles");
  const { suggestions } = await import("../../src/routes/suggestions");
  const { generators } = await import("../../src/routes/generators");
  const { adminGenerators } = await import("../../src/routes/admin-generators");
  const { payments } = await import("../../src/routes/payments");
  const server = await startServer([
    health, registro, beneficios, membresias, pushTokens, roles, suggestions, generators, adminGenerators, payments
  ]);
  baseUrl = server.baseUrl;
  close = server.close;
});
after(async () => {
  if (close) await close();
});

const adulta = new Date(Date.now() - 30 * 365 * 86_400_000).toISOString();
const menor = new Date(Date.now() - 12 * 365 * 86_400_000).toISOString();

beforeEach(() => {
  resetPrisma();
  seedUser({ id: "ana", role: "USER", schoolId: "esc" });
  seedUser({ id: "beto", role: "USER", schoolId: "esc" });
  seedUser({ id: "admin", role: "ADMIN", schoolId: null });
  (prisma.usuario.rows.find((u) => u.id === "ana") as Record<string, unknown>).birthdate = adulta;
  (prisma.usuario.rows.find((u) => u.id === "beto") as Record<string, unknown>).birthdate = menor;
  prisma.generatorConfig.rows.push(
    { id: "matematicas/suma", materia: "matematicas", label: "Suma", description: null, version: 1, subtipos: "[]", enunciados: "{}", limits: "{}", variablesSchema: "{}", status: "ACTIVE" },
    { id: "matematicas/resta", materia: "matematicas", label: "Resta", description: null, version: 1, subtipos: "[]", enunciados: "{}", limits: "{}", variablesSchema: "{}", status: "INACTIVE" }
  );
});

const ana = () => tokenFor({ id: "ana", role: "USER", schoolId: "esc" });
const beto = () => tokenFor({ id: "beto", role: "USER", schoolId: "esc" });
const admin = () => tokenFor({ id: "admin", role: "ADMIN", schoolId: null });
const req = (method: string, path: string, opts: { token?: string; body?: unknown } = {}) =>
  jsonRequest(baseUrl, method, path, opts);

test("health y opciones de registro responden sin sesión", async () => {
  assert.deepEqual((await req("GET", "/health")).body, { ok: true });
  const r = await req("GET", "/api/registro/opciones");
  assert.equal(r.status, 200);
  assert.equal((r.body as { meses: string[] }).meses.length, 12);
});

test("beneficios y membresías piden sesión", async () => {
  assert.equal((await req("GET", "/api/beneficios/estado")).status, 401);
  assert.equal((await req("GET", "/api/membresias/mis-escuelas")).status, 401);
  assert.equal((await req("GET", "/api/membresias/mis-escuelas", { token: ana() })).status, 200);
});

test("tokens push: el mismo teléfono cambia de dueño y cada uno borra solo los suyos", async () => {
  assert.equal((await req("POST", "/api/push-tokens", { token: ana(), body: { token: "ExpoTok[1]", platform: "android" } })).status, 200);
  assert.equal((await req("POST", "/api/push-tokens", { token: beto(), body: { token: "ExpoTok[1]" } })).status, 200);
  assert.equal(prisma.pushToken.rows.length, 1);
  assert.equal((prisma.pushToken.rows[0] as { userId: string }).userId, "beto");
  await req("DELETE", "/api/push-tokens/ExpoTok%5B1%5D", { token: ana() });
  assert.equal(prisma.pushToken.rows.length, 1, "ana ya no es dueña: no lo borra");
  await req("DELETE", "/api/push-tokens/ExpoTok%5B1%5D", { token: beto() });
  assert.equal(prisma.pushToken.rows.length, 0);
  assert.equal((await req("POST", "/api/push-tokens", { token: ana(), body: { token: "" } })).status, 400);
});

test("pedir rol: valida el rol, la edad, el largo y no duplica pendientes", async () => {
  assert.equal((await req("POST", "/api/solicitar-rol", { token: ana(), body: { target_role: "REY" } })).status, 400);
  assert.equal((await req("POST", "/api/solicitar-rol", { token: beto(), body: { target_role: "TEACHER" } })).status, 403);
  assert.equal((await req("POST", "/api/solicitar-rol", { token: ana(), body: { target_role: "USER" } })).status, 400);
  assert.equal((await req("POST", "/api/solicitar-rol", { token: ana(), body: { target_role: "TEACHER", motivo: "x".repeat(2001) } })).status, 400);
  const r = await req("POST", "/api/solicitar-rol", { token: ana(), body: { target_role: "TEACHER", motivo: "Soy docente" } });
  assert.equal(r.status, 201);
  const otra = await req("POST", "/api/solicitar-rol", { token: ana(), body: { target_role: "TEACHER" } });
  assert.equal((otra.body as { alreadyPending: boolean }).alreadyPending, true);
  assert.equal(prisma.suggestion.rows.length, 1);
});

test("sugerencias: cualquiera con sesión crea; solo el administrador lista y revisa", async () => {
  assert.equal((await req("POST", "/api/suggestions", { body: { suggestion_type: "ERRATA", title: "t", body: "b" } })).status, 401);
  assert.equal((await req("POST", "/api/suggestions", { token: ana(), body: { suggestion_type: "OTRA", title: "t", body: "b" } })).status, 400);
  assert.equal((await req("POST", "/api/suggestions", { token: ana(), body: { suggestion_type: "ERRATA", title: "t".repeat(201), body: "b" } })).status, 400);
  const r = await req("POST", "/api/suggestions", { token: ana(), body: { suggestion_type: "ERRATA", title: "Error en fracciones", body: "La respuesta 3 está mal" } });
  assert.equal(r.status, 201);
  const id = (r.body as { id: string }).id;
  assert.equal((await req("GET", "/api/suggestions", { token: ana() })).status, 403);
  assert.equal((await req("PATCH", `/api/suggestions/${id}`, { token: ana(), body: { status: "REVIEWED" } })).status, 403);
  const lista = await req("GET", "/api/suggestions", { token: admin() });
  assert.equal((lista.body as { total: number }).total, 1);
  assert.equal((await req("PATCH", `/api/suggestions/${id}`, { token: admin(), body: { status: "NADA" } })).status, 400);
  assert.equal((await req("PATCH", `/api/suggestions/${id}`, { token: admin(), body: { status: "REVIEWED", admin_note: "ok" } })).status, 200);
  assert.equal((prisma.suggestion.rows[0] as { reviewedBy: string }).reviewedBy, "admin");
});

test("generadores: el catálogo público muestra solo los activos", async () => {
  const lista = await req("GET", "/api/generators");
  assert.deepEqual((lista.body as { items: Array<{ id: string }> }).items.map((i) => i.id), ["matematicas/suma"]);
  assert.equal((await req("GET", "/api/generators/matematicas/suma")).status, 200);
  assert.equal((await req("GET", "/api/generators/matematicas/resta")).status, 404);
});

test("administración de generadores: solo el administrador, y el historial lo firma la sesión", async () => {
  assert.equal((await req("GET", "/api/admin/generators", { token: ana() })).status, 403);
  assert.equal((await req("PATCH", "/api/admin/generators/matematicas%2Fsuma", { token: ana(), body: { label: "x" } })).status, 403);
  const cambio = await req("PATCH", "/api/admin/generators/matematicas%2Fsuma", { token: admin(), body: { status: "INACTIVE" } });
  assert.equal(cambio.status, 200, JSON.stringify(cambio.body));
  assert.equal((await req("GET", "/api/generators/matematicas/suma")).status, 404);
  assert.equal((await req("PATCH", "/api/admin/generators/matematicas%2Fsuma", { token: admin(), body: { enunciados: [] } })).status, 400);
  const nota = await req("POST", "/api/admin/generators/matematicas%2Fsuma/changelog", {
    token: admin(),
    body: { note: "Se desactiva", admin_id: "otra-persona" }
  });
  assert.equal(nota.status, 201);
  assert.equal((prisma.generatorChangelog.rows[0] as { adminId: string }).adminId, "admin");
});

test("pagos enterprise: apagados por defecto y el webhook exige firma", async () => {
  const r = await req("POST", "/api/payments/initiate", { token: admin(), body: { amount: 10 } });
  assert.ok(r.status === 403 || r.status === 501, `status ${r.status}`);
  const w = await fetch(`${baseUrl}/api/payments/webhook`, {
    method: "POST",
    headers: { "content-type": "application/json", "x-payments-signature": "falsa" },
    body: JSON.stringify({ invoiceId: "inv-1", status: "PAID" })
  });
  assert.equal(w.status, 401);
});
