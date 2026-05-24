import {
  jsonRequest,
  resetPrisma,
  seedUser,
  startServer,
  tokenFor,
} from "./_helpers/setup";
import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";

import { vblangDatasets } from "../../src/routes/vblang-datasets";

let baseUrl: string;
let close: () => Promise<void>;

before(async () => {
  const server = await startServer([vblangDatasets]);
  baseUrl = server.baseUrl;
  close = server.close;
});

after(async () => {
  await close();
});

beforeEach(() => {
  resetPrisma();
  // user1 — owner del dataset privado/escuela.
  seedUser({ id: "user-1", role: "TEACHER", schoolId: "esc-1" });
  // user2 — otra escuela, no debería ver datasets privados de user1.
  seedUser({ id: "user-2", role: "TEACHER", schoolId: "esc-2" });
});

const tok1 = () =>
  tokenFor({ id: "user-1", role: "TEACHER", schoolId: "esc-1" });
const tok2 = () =>
  tokenFor({ id: "user-2", role: "TEACHER", schoolId: "esc-2" });

const COLUMNAS = { nombre: "string", iso: "string" } as const;

test("GET by-name como owner devuelve filas ordenadas por orden", async () => {
  const created = await jsonRequest(baseUrl, "POST", "/api/vblang/datasets", {
    token: tok1(),
    body: {
      nombre: "paises",
      visibility: "privada",
      columnas: COLUMNAS,
      filas: [
        { nombre: "Argentina", iso: "ARG" },
        { nombre: "Brasil", iso: "BRA" },
      ],
    },
  });
  assert.equal(created.status, 201);

  const r = await jsonRequest(
    baseUrl,
    "GET",
    "/api/vblang/datasets/by-name/paises",
    { token: tok1() },
  );
  assert.equal(r.status, 200);
  const body = r.body as { filas: Array<{ datos: Record<string, unknown> }> };
  assert.equal(body.filas.length, 2);
  assert.equal(body.filas[0].datos.nombre, "Argentina");
  assert.equal(body.filas[1].datos.nombre, "Brasil");
});

test("GET by-name privado de otro user → 404", async () => {
  await jsonRequest(baseUrl, "POST", "/api/vblang/datasets", {
    token: tok1(),
    body: {
      nombre: "secret",
      visibility: "privada",
      columnas: COLUMNAS,
      filas: [{ nombre: "X", iso: "XXX" }],
    },
  });
  const r = await jsonRequest(
    baseUrl,
    "GET",
    "/api/vblang/datasets/by-name/secret",
    { token: tok2() },
  );
  assert.equal(r.status, 404);
});

test("GET by-name público es visible para cualquier user logueado", async () => {
  await jsonRequest(baseUrl, "POST", "/api/vblang/datasets", {
    token: tok1(),
    body: {
      nombre: "publico",
      visibility: "publica",
      columnas: COLUMNAS,
      filas: [{ nombre: "Mundo", iso: "WLD" }],
    },
  });
  const r = await jsonRequest(
    baseUrl,
    "GET",
    "/api/vblang/datasets/by-name/publico",
    { token: tok2() },
  );
  assert.equal(r.status, 200);
  const body = r.body as { filas: Array<{ datos: Record<string, unknown> }> };
  assert.equal(body.filas.length, 1);
  assert.equal(body.filas[0].datos.nombre, "Mundo");
});

test("GET by-name nombre inexistente → 404", async () => {
  const r = await jsonRequest(
    baseUrl,
    "GET",
    "/api/vblang/datasets/by-name/noexiste",
    { token: tok1() },
  );
  assert.equal(r.status, 404);
});
