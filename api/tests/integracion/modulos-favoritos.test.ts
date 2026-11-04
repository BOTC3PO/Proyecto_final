/**
 * Documento 17 (2026-10-29) — módulos favoritos por persona.
 */
process.env.NODE_ENV = "test";

import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";

let baseUrl: string;
let close: () => Promise<void>;

before(async () => {
  const { favoritos } = await import("../../src/routes/favoritos");
  const server = await startServer([favoritos]);
  baseUrl = server.baseUrl;
  close = server.close;
});
after(async () => {
  if (close) await close();
});
beforeEach(() => {
  resetPrisma();
  seedUser({ id: "ana", role: "USER", schoolId: "esc" });
  seedUser({ id: "beto", role: "USER", schoolId: "esc" });
  prisma.modulo.rows.push({ id: "mod-1", titulo: "Fracciones" } as never);
});

const tk = (id: string) => tokenFor({ id, role: "USER", schoolId: "esc" });

test("marcar y desmarcar un favorito; cada persona ve los suyos", async () => {
  assert.equal((await jsonRequest(baseUrl, "PUT", "/api/modulos-favoritos/mod-1", { token: tk("ana") })).status, 200);
  assert.equal((await jsonRequest(baseUrl, "PUT", "/api/modulos-favoritos/mod-1", { token: tk("ana") })).status, 200, "repetir no duplica");
  assert.deepEqual((await jsonRequest(baseUrl, "GET", "/api/modulos-favoritos", { token: tk("ana") })).body, { ids: ["mod-1"] });
  assert.deepEqual((await jsonRequest(baseUrl, "GET", "/api/modulos-favoritos", { token: tk("beto") })).body, { ids: [] });
  await jsonRequest(baseUrl, "DELETE", "/api/modulos-favoritos/mod-1", { token: tk("ana") });
  assert.deepEqual((await jsonRequest(baseUrl, "GET", "/api/modulos-favoritos", { token: tk("ana") })).body, { ids: [] });
});

test("un módulo que no existe da 404", async () => {
  assert.equal((await jsonRequest(baseUrl, "PUT", "/api/modulos-favoritos/no-existe", { token: tk("ana") })).status, 404);
});

// L5 (2026-10-29) — valoración de módulos.
test("solo valora quien empezó el módulo; el promedio y la propia se informan", async () => {
  prisma.progresoModulo.rows.push({ id: "p1", usuarioId: "ana", moduloId: "mod-1", status: "en_progreso" } as never);
  const sinProgreso = await jsonRequest(baseUrl, "PUT", "/api/modulos/mod-1/valoracion", { token: tk("beto"), body: { puntaje: 5 } });
  assert.equal(sinProgreso.status, 403);
  assert.equal((await jsonRequest(baseUrl, "PUT", "/api/modulos/mod-1/valoracion", { token: tk("ana"), body: { puntaje: 7 } })).status, 400);
  assert.equal((await jsonRequest(baseUrl, "PUT", "/api/modulos/mod-1/valoracion", { token: tk("ana"), body: { puntaje: 4 } })).status, 200);
  await jsonRequest(baseUrl, "PUT", "/api/modulos/mod-1/valoracion", { token: tk("ana"), body: { puntaje: 5 } });
  const r = await jsonRequest(baseUrl, "GET", "/api/modulos/mod-1/valoracion", { token: tk("ana") });
  assert.deepEqual(r.body, { promedio: 5, cantidad: 1, mia: 5, puedeValorar: true }, "cambiar la valoración no suma otra");
  const lista = await jsonRequest(baseUrl, "GET", "/api/modulos-valoraciones?ids=mod-1,mod-2", { token: tk("beto") });
  assert.deepEqual(lista.body, { items: { "mod-1": { promedio: 5, cantidad: 1 } } });
});
