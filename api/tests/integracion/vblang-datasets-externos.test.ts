/**
 * PLAN-E §20 (F1) — datasets externos: refresco manual desde URL HTTPS.
 * Stubbea globalThis.fetch para no salir a la red.
 */
import {
  jsonRequest,
  resetPrisma,
  seedUser,
  startServer,
  tokenFor,
} from "./_helpers/setup";
import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";

import { parseCsv, coerceFilas, vblangDatasets } from "../../src/routes/vblang-datasets";

let baseUrl: string;
let close: () => Promise<void>;
const realFetch = globalThis.fetch;

before(async () => {
  const server = await startServer([vblangDatasets]);
  baseUrl = server.baseUrl;
  close = server.close;
});

after(async () => {
  globalThis.fetch = realFetch;
  await close();
});

beforeEach(() => {
  globalThis.fetch = realFetch;
  resetPrisma();
  seedUser({ id: "teacher-1", role: "TEACHER", schoolId: "esc-1" });
  seedUser({ id: "teacher-2", role: "TEACHER", schoolId: "esc-1" });
});

const t1 = () => tokenFor({ id: "teacher-1", role: "TEACHER", schoolId: "esc-1" });
const t2 = () => tokenFor({ id: "teacher-2", role: "TEACHER", schoolId: "esc-1" });

const COLUMNAS = { pais: "string", poblacion: "number" } as const;

// jsonRequest también usa globalThis.fetch: las URLs del server de test se
// delegan al fetch real; sólo se stubbea la salida externa.
function stubFetch(body: string, contentType: string) {
  globalThis.fetch = (async (input: RequestInfo | URL, init?: RequestInit) => {
    const url = String(input instanceof Request ? input.url : input);
    if (url.startsWith(baseUrl)) return realFetch(input, init);
    return new Response(body, {
      status: 200,
      headers: { "content-type": contentType },
    });
  }) as typeof fetch;
}

async function crearDataset(sourceUrl?: string): Promise<string> {
  const r = await jsonRequest(baseUrl, "POST", "/api/vblang/datasets", {
    token: t1(),
    body: {
      nombre: "paises_ext",
      visibility: "privada",
      columnas: COLUMNAS,
      filas: [{ pais: "Vieja", poblacion: 1 }],
      ...(sourceUrl ? { sourceUrl } : {}),
    },
  });
  assert.equal(r.status, 201);
  return (r.body as { id: string }).id;
}

// ─── Unit: parseCsv / coerceFilas ────────────────────────────────────────────

test("parseCsv maneja comillas, comas internas y CRLF", () => {
  const filas = parseCsv('pais,poblacion\r\n"San, Marino",34\r\n"Dice ""hola""",2\r\n');
  assert.deepEqual(filas, [
    { pais: "San, Marino", poblacion: "34" },
    { pais: 'Dice "hola"', poblacion: "2" },
  ]);
});

test("coerceFilas convierte strings a number/boolean según columnas", () => {
  const out = coerceFilas(
    { a: "number", b: "boolean", c: "string" },
    [{ a: "3,5", b: "sí", c: 42 }],
  );
  assert.deepEqual(out, [{ a: 3.5, b: true, c: "42" }]);
});

// ─── API ─────────────────────────────────────────────────────────────────────

test("POST create con sourceUrl http:// → 400 (sólo HTTPS)", async () => {
  const r = await jsonRequest(baseUrl, "POST", "/api/vblang/datasets", {
    token: t1(),
    body: {
      nombre: "malo",
      visibility: "privada",
      columnas: COLUMNAS,
      sourceUrl: "http://example.com/x.csv",
    },
  });
  assert.equal(r.status, 400);
});

test("refresh CSV: reemplaza filas y coerciona tipos", async () => {
  const id = await crearDataset("https://example.com/paises.csv");
  stubFetch("pais,poblacion\nArgentina,47\nChile,19\n", "text/csv");
  const r = await jsonRequest(baseUrl, "POST", `/api/vblang/datasets/${id}/refresh`, {
    token: t1(),
    body: {},
  });
  assert.equal(r.status, 200);
  assert.deepEqual(r.body, { ok: true, filas: 2 });

  const detail = await jsonRequest(baseUrl, "GET", `/api/vblang/datasets/${id}`, {
    token: t1(),
  });
  const filas = (detail.body as { filas: Array<{ datos: Record<string, unknown> }> })
    .filas;
  assert.equal(filas.length, 2);
  assert.deepEqual(filas[0].datos, { pais: "Argentina", poblacion: 47 });
  assert.equal(
    (detail.body as { sourceUrl?: string }).sourceUrl,
    "https://example.com/paises.csv",
  );
});

test("refresh JSON: acepta array de objetos", async () => {
  const id = await crearDataset("https://example.com/paises.json");
  stubFetch(
    JSON.stringify([{ pais: "Peru", poblacion: 33 }]),
    "application/json",
  );
  const r = await jsonRequest(baseUrl, "POST", `/api/vblang/datasets/${id}/refresh`, {
    token: t1(),
    body: {},
  });
  assert.equal(r.status, 200);
  assert.deepEqual(r.body, { ok: true, filas: 1 });
});

test("refresh sin sourceUrl → 400", async () => {
  const id = await crearDataset();
  const r = await jsonRequest(baseUrl, "POST", `/api/vblang/datasets/${id}/refresh`, {
    token: t1(),
    body: {},
  });
  assert.equal(r.status, 400);
});

test("refresh por no-owner → 403", async () => {
  const id = await crearDataset("https://example.com/paises.csv");
  const r = await jsonRequest(baseUrl, "POST", `/api/vblang/datasets/${id}/refresh`, {
    token: t2(),
    body: {},
  });
  assert.equal(r.status, 403);
});

test("refresh con columnas que no matchean → 422 y conserva filas viejas", async () => {
  const id = await crearDataset("https://example.com/paises.csv");
  stubFetch("otra,cosa\nx,y\n", "text/csv");
  const r = await jsonRequest(baseUrl, "POST", `/api/vblang/datasets/${id}/refresh`, {
    token: t1(),
    body: {},
  });
  assert.equal(r.status, 422);
  const detail = await jsonRequest(baseUrl, "GET", `/api/vblang/datasets/${id}`, {
    token: t1(),
  });
  const filas = (detail.body as { filas: unknown[] }).filas;
  assert.equal(filas.length, 1);
});

test("refresh contra host interno → 422 sin fetch", async () => {
  globalThis.fetch = (async (input: RequestInfo | URL, init?: RequestInit) => {
    const url = String(input instanceof Request ? input.url : input);
    if (url.startsWith(baseUrl)) return realFetch(input, init);
    throw new Error("no debería llamarse");
  }) as typeof fetch;
  const id = await crearDataset("https://192.168.1.10/datos.csv");
  const r = await jsonRequest(baseUrl, "POST", `/api/vblang/datasets/${id}/refresh`, {
    token: t1(),
    body: {},
  });
  assert.equal(r.status, 422);
  assert.match((r.body as { error: string }).error, /Host no permitido/);
});

test("PUT sourceUrl null borra la URL", async () => {
  const id = await crearDataset("https://example.com/paises.csv");
  const r = await jsonRequest(baseUrl, "PUT", `/api/vblang/datasets/${id}`, {
    token: t1(),
    body: { sourceUrl: null },
  });
  assert.equal(r.status, 200);
  assert.equal((r.body as { sourceUrl?: string }).sourceUrl, undefined);
});
