/**
 * Optimización del 2026-11-09: el listado `GET /api/modulos` no devuelve `theoryItems` (era el 93 % de la respuesta,
 * 86 KB por 20 módulos) sino `theoryCount`; el contenido se pide con `?incluirTeoria=true` o con el detalle.
 */
process.env.NODE_ENV = "test";

import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";

let baseUrl: string;
let close: () => Promise<void>;

before(async () => {
  const { modulos } = await import("../../src/routes/modulos");
  const server = await startServer([modulos]);
  baseUrl = server.baseUrl;
  close = server.close;
});
after(async () => {
  if (close) await close();
});

const TEORIA = (n: number) => JSON.stringify(Array.from({ length: n }, (_, i) => ({ id: `t${i}`, type: "Texto", title: `Bloque ${i}`, content: "x".repeat(400) })));
const modulo = (id: string, theoryItems: string | null | undefined, extra: Record<string, unknown> = {}) => ({
  id, slug: id, titulo: `Módulo ${id}`, descripcion: "d", visibility: "publico", ownerUserId: "admin-1", theoryItems,
  dependencies: "[]", createdAt: "2026-11-09T00:00:00.000Z", updatedAt: "2026-11-09T00:00:00.000Z", ...extra
});

type Item = { id: string; title: string; theoryCount?: number; theoryItems?: unknown[]; dependencies?: unknown[] };
const listar = async (query = "") => {
  const token = tokenFor({ id: "alumno-1", role: "STUDENT", schoolId: null });
  const r = await jsonRequest(baseUrl, "GET", `/api/modulos${query}`, { token });
  assert.equal(r.status, 200, JSON.stringify(r.body));
  return (r.body as { items: Item[] }).items;
};

beforeEach(() => {
  resetPrisma();
  seedUser({ id: "alumno-1", role: "STUDENT", schoolId: null });
});

test("el listado trae theoryCount y NO theoryItems", async () => {
  prisma.modulo.rows.push(modulo("m-1", TEORIA(3)) as never);
  const [m] = await listar();
  assert.equal(m.theoryCount, 3);
  assert.equal("theoryItems" in m, false);
  assert.equal(m.title, "Módulo m-1");
  assert.ok(Array.isArray(m.dependencies));
});

test("regresión: TODOS los ítems son livianos (map con la función suelta pasaría el índice como flag)", async () => {
  for (let i = 0; i < 4; i++) prisma.modulo.rows.push(modulo(`m-${i}`, TEORIA(i + 1), { updatedAt: `2026-11-09T00:00:0${i}.000Z` }) as never);
  const items = await listar();
  assert.equal(items.length, 4);
  for (const m of items) assert.equal("theoryItems" in m, false, `m ${m.id} trae theoryItems`);
  assert.deepEqual(items.map((m) => m.theoryCount).sort(), [1, 2, 3, 4]);
});

test("?incluirTeoria=true devuelve el contenido además de la cantidad (compatibilidad)", async () => {
  prisma.modulo.rows.push(modulo("m-1", TEORIA(2)) as never);
  for (const q of ["?incluirTeoria=true", "?incluirTeoria=1"]) {
    const [m] = await listar(q);
    assert.equal(m.theoryCount, 2);
    assert.equal(m.theoryItems?.length, 2, q);
  }
});

test("teoría vacía, nula, inexistente o con JSON roto: cuenta 0 y no falla", async () => {
  prisma.modulo.rows.push(modulo("a", "[]") as never, modulo("b", null) as never, modulo("c", undefined) as never, modulo("d", "{no es json") as never, modulo("e", '"texto"') as never);
  const items = await listar();
  assert.equal(items.length, 5);
  for (const m of items) assert.equal(m.theoryCount, 0, m.id);
});

test("la respuesta es mucho más chica que con el contenido", async () => {
  for (let i = 0; i < 10; i++) prisma.modulo.rows.push(modulo(`m-${i}`, TEORIA(8)) as never);
  const token = tokenFor({ id: "alumno-1", role: "STUDENT", schoolId: null });
  const tam = async (q: string) => (await (await fetch(`${baseUrl}/api/modulos${q}`, { headers: { authorization: `Bearer ${token}` } })).text()).length;
  const liviana = await tam(""), completa = await tam("?incluirTeoria=true");
  assert.ok(liviana * 5 < completa, `liviana ${liviana} B, completa ${completa} B`);
});
