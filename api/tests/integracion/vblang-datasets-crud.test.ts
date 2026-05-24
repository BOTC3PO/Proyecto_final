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
  seedUser({ id: "admin-1", role: "ADMIN", schoolId: "esc-1" });
  seedUser({ id: "teacher-1", role: "TEACHER", schoolId: "esc-1" });
  seedUser({ id: "student-1", role: "STUDENT", schoolId: "esc-1" });
});

const t1 = () => tokenFor({ id: "teacher-1", role: "TEACHER", schoolId: "esc-1" });

const COLUMNAS = {
  pais: "string",
  poblacion: "number",
  capital: "string",
} as const;

const FILA_OK = { pais: "Argentina", poblacion: 47, capital: "Buenos Aires" };

test("POST dataset válido con 3 columnas + filas → 201", async () => {
  const r = await jsonRequest(baseUrl, "POST", "/api/vblang/datasets", {
    token: t1(),
    body: {
      nombre: "paises",
      visibility: "privada",
      columnas: COLUMNAS,
      filas: [
        FILA_OK,
        { pais: "Brasil", poblacion: 215, capital: "Brasilia" },
        { pais: "Chile", poblacion: 19, capital: "Santiago" },
        { pais: "Peru", poblacion: 33, capital: "Lima" },
        { pais: "Uruguay", poblacion: 3, capital: "Montevideo" },
      ],
    },
  });
  assert.equal(r.status, 201);
  const body = r.body as { id: string; filas: unknown[]; columnas: unknown };
  assert.equal(body.filas.length, 5);
  assert.deepEqual(body.columnas, COLUMNAS);
});

test("POST con fila que no matchea columnas → 400", async () => {
  const r = await jsonRequest(baseUrl, "POST", "/api/vblang/datasets", {
    token: t1(),
    body: {
      nombre: "x",
      visibility: "privada",
      columnas: COLUMNAS,
      filas: [{ pais: "Argentina", poblacion: "no-es-numero", capital: "BA" }],
    },
  });
  assert.equal(r.status, 400);
  const body = r.body as { filaIndex?: number; message?: string };
  assert.equal(body.filaIndex, 0);
  assert.match(String(body.message), /esperaba number/);
});

test("POST con nombre duplicado → 400", async () => {
  await jsonRequest(baseUrl, "POST", "/api/vblang/datasets", {
    token: t1(),
    body: { nombre: "dup", visibility: "privada", columnas: COLUMNAS, filas: [] },
  });
  const r = await jsonRequest(baseUrl, "POST", "/api/vblang/datasets", {
    token: t1(),
    body: { nombre: "dup", visibility: "privada", columnas: COLUMNAS, filas: [] },
  });
  assert.equal(r.status, 400);
  assert.match(JSON.stringify(r.body), /ya existe un dataset/i);
});

test("POST como STUDENT → 403", async () => {
  const tok = tokenFor({ id: "student-1", role: "STUDENT", schoolId: "esc-1" });
  const r = await jsonRequest(baseUrl, "POST", "/api/vblang/datasets", {
    token: tok,
    body: { nombre: "s", visibility: "privada", columnas: COLUMNAS },
  });
  assert.equal(r.status, 403);
});

test("GET /api/vblang/datasets como TEACHER → lista visible", async () => {
  await jsonRequest(baseUrl, "POST", "/api/vblang/datasets", {
    token: t1(),
    body: {
      nombre: "uno",
      visibility: "privada",
      columnas: COLUMNAS,
      filas: [FILA_OK],
    },
  });
  const r = await jsonRequest(baseUrl, "GET", "/api/vblang/datasets", { token: t1() });
  assert.equal(r.status, 200);
  const body = r.body as { items: Array<{ nombre: string; filasCount: number }> };
  assert.equal(body.items.length, 1);
  assert.equal(body.items[0].nombre, "uno");
  assert.equal(body.items[0].filasCount, 1);
});

test("GET /api/vblang/datasets/:id → detalle con filas parseadas", async () => {
  const created = await jsonRequest(baseUrl, "POST", "/api/vblang/datasets", {
    token: t1(),
    body: {
      nombre: "detail",
      visibility: "privada",
      columnas: COLUMNAS,
      filas: [FILA_OK],
    },
  });
  const id = (created.body as { id: string }).id;
  const r = await jsonRequest(baseUrl, "GET", `/api/vblang/datasets/${id}`, {
    token: t1(),
  });
  assert.equal(r.status, 200);
  // Sprint 9B: el GET devuelve `filas: [{ id, datos: {...} }]` para que el
  // editor pueda direccionar PUT/DELETE por filaId.
  const body = r.body as {
    filas: Array<{ id: string; datos: Record<string, unknown> }>;
  };
  assert.equal(body.filas.length, 1);
  assert.equal(typeof body.filas[0].id, "string");
  assert.equal(body.filas[0].datos.pais, "Argentina");
  assert.equal(body.filas[0].datos.poblacion, 47);
});

test("POST /:id/filas → agrega filas, COUNT subió", async () => {
  const created = await jsonRequest(baseUrl, "POST", "/api/vblang/datasets", {
    token: t1(),
    body: {
      nombre: "addrows",
      visibility: "privada",
      columnas: COLUMNAS,
      filas: [FILA_OK],
    },
  });
  const id = (created.body as { id: string }).id;
  const r = await jsonRequest(baseUrl, "POST", `/api/vblang/datasets/${id}/filas`, {
    token: t1(),
    body: {
      filas: [
        { pais: "Brasil", poblacion: 215, capital: "Brasilia" },
        { pais: "Chile", poblacion: 19, capital: "Santiago" },
      ],
    },
  });
  assert.equal(r.status, 201);

  const detail = await jsonRequest(baseUrl, "GET", `/api/vblang/datasets/${id}`, {
    token: t1(),
  });
  const body = detail.body as { filas: unknown[] };
  assert.equal(body.filas.length, 3);
});

test("PUT /:id/filas/:filaId → modifica fila", async () => {
  const created = await jsonRequest(baseUrl, "POST", "/api/vblang/datasets", {
    token: t1(),
    body: {
      nombre: "putrow",
      visibility: "privada",
      columnas: COLUMNAS,
      filas: [FILA_OK],
    },
  });
  const id = (created.body as { id: string }).id;
  const detail = await jsonRequest(baseUrl, "GET", `/api/vblang/datasets/${id}`, {
    token: t1(),
  });
  // necesitamos el filaId — buscar en la prisma in-memory directamente.
  const { prisma } = await import("./_helpers/setup");
  const filaId = prisma.vblangDatasetFila.rows[0].id;

  const r = await jsonRequest(baseUrl, "PUT", `/api/vblang/datasets/${id}/filas/${filaId}`, {
    token: t1(),
    body: {
      datos: { pais: "Argentina", poblacion: 50, capital: "Buenos Aires" },
    },
  });
  assert.equal(r.status, 200);
  const body = r.body as { datos: Record<string, unknown> };
  assert.equal(body.datos.poblacion, 50);
  // sanity para evitar lint sobre detail unused
  assert.ok(detail.body);
});

test("DELETE /:id/filas/:filaId → elimina fila", async () => {
  const created = await jsonRequest(baseUrl, "POST", "/api/vblang/datasets", {
    token: t1(),
    body: {
      nombre: "delrow",
      visibility: "privada",
      columnas: COLUMNAS,
      filas: [FILA_OK, { pais: "Brasil", poblacion: 215, capital: "Brasilia" }],
    },
  });
  const id = (created.body as { id: string }).id;
  const { prisma } = await import("./_helpers/setup");
  const filaId = prisma.vblangDatasetFila.rows[0].id;
  const r = await jsonRequest(baseUrl, "DELETE", `/api/vblang/datasets/${id}/filas/${filaId}`, {
    token: t1(),
  });
  assert.equal(r.status, 200);
  const detail = await jsonRequest(baseUrl, "GET", `/api/vblang/datasets/${id}`, {
    token: t1(),
  });
  const body = detail.body as { filas: unknown[] };
  assert.equal(body.filas.length, 1);
});

test("DELETE /:id soft-delete → 404 después", async () => {
  const created = await jsonRequest(baseUrl, "POST", "/api/vblang/datasets", {
    token: t1(),
    body: { nombre: "delds", visibility: "privada", columnas: COLUMNAS },
  });
  const id = (created.body as { id: string }).id;
  const r = await jsonRequest(baseUrl, "DELETE", `/api/vblang/datasets/${id}`, {
    token: t1(),
  });
  assert.equal(r.status, 200);
  const r2 = await jsonRequest(baseUrl, "GET", `/api/vblang/datasets/${id}`, {
    token: t1(),
  });
  assert.equal(r2.status, 404);
});
