/**
 * Hallazgo post-PLAN-X §5 — `GET /api/readonly/catalogo` agregaba 4
 * fuentes independientes en un solo `Promise.all`. `generadores`
 * (`listTopicsFromFilesystem`) apunta a `api/src/generadores/`, que no
 * existe (el contenido real vive sin reconciliar en
 * `archive/api/generadores/`, ver PLAN-N) — su `readdir` siempre tira
 * ENOENT, y `Promise.all` propagaba ese rechazo tumbando TODO el
 * endpoint a 500, aunque `modulosActivos`/`visualizadores`/
 * `idiomasDiccionario` estuvieran bien.
 *
 * Fix: `safeFetch` aísla cada fuente — una falla puntual degrada a un
 * fallback en vez de tirar las demás. Este test corre en su propio
 * proceso (Node test runner aísla módulos por archivo) y NO toca
 * `SQLITE_PATH`/`DB_KIND`, así que `getAvailableLanguages()` también
 * degrada solo (best-effort `[]`) — el catálogo entero debe responder
 * 200 con arrays vacíos en las fuentes rotas, nunca 500.
 */
import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import { prisma, resetPrisma, startServer, jsonRequest } from "./_helpers/setup";

let baseUrl: string;
let close: () => Promise<void>;

before(async () => {
  const { readonlyRouter } = await import("../../src/routes/readonly");
  const server = await startServer([readonlyRouter]);
  baseUrl = server.baseUrl;
  close = server.close;
});

after(async () => {
  if (close) await close();
});

beforeEach(() => {
  resetPrisma();
  const now = new Date().toISOString();
  prisma.modulo.rows.push({
    id: "mod-catalogo-1",
    slug: "mod-catalogo-1",
    titulo: "Modulo catalogo",
    descripcion: "",
    visibility: "publico",
    schoolId: null,
    ownerUserId: "owner-1",
    dependencies: null,
    isDeleted: false,
    createdAt: now,
    updatedAt: now,
  } as never);
});

test("GET /api/readonly/catalogo devuelve 200 aunque `generadores` falle (fault isolation)", async () => {
  const r = await jsonRequest(baseUrl, "GET", "/api/readonly/catalogo");
  assert.equal(r.status, 200, `status=${r.status} body=${JSON.stringify(r.body)}`);
  const body = r.body as {
    modulosActivos: Array<{ id: string }>;
    generadores: unknown[];
    mapasYDiccionarios: { visualizadores: unknown[]; idiomasDiccionario: string[] };
  };
  // La fuente rota degrada a [] en vez de tumbar el endpoint.
  assert.deepEqual(body.generadores, []);
  // Las fuentes sanas siguen funcionando con normalidad.
  assert.equal(body.modulosActivos.length, 1);
  assert.equal(body.modulosActivos[0].id, "mod-catalogo-1");
  assert.ok(Array.isArray(body.mapasYDiccionarios.visualizadores));
  assert.ok(body.mapasYDiccionarios.visualizadores.length > 0, "visualizadores de ejemplo sí existen en disco");
  // idiomasDiccionario depende del fixture sqlite real de dev (PLAN-X §5,
  // ya cubierto por plan-x-5-readonly-idiomas-diccionario.test.ts) — acá
  // sólo nos importa que sea un array, no su contenido puntual.
  assert.ok(Array.isArray(body.mapasYDiccionarios.idiomasDiccionario));
});
