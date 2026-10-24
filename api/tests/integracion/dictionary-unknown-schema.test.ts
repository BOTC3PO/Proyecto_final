/**
 * QA-FIX-09 — fixture con tabla sin lang+word (esquema desconocido).
 *
 * Cubre el caso de un .sqlite que NO es el dump RAW de Wiktionary y
 * tampoco un diccionario servible: por ejemplo, un archivo de otra
 * cosa, o un dump corrupto. El servicio debe devolver 503 con un
 * mensaje genérico que LISTA las tablas encontradas (para que el
 * operador sepa qué tiene) y NO identificarlo como RAW.
 */

import assert from "node:assert/strict";
import fs from "node:fs";
import Module from "node:module";
import os from "node:os";
import path from "node:path";
import { after, before, test } from "node:test";

import { startServer, jsonRequest } from "./_helpers/setup";

let baseUrl: string;
let close: () => Promise<void>;
let tmpSqlitePath: string;

before(async () => {
  // 1. Crear un .sqlite con una tabla cualquiera (widgets) que NO
  //    matchea la firma RAW ni tiene lang+word. Esto fuerza el camino
  //    UNKNOWN_SCHEMA del detectSchema.
  tmpSqlitePath = path.join(os.tmpdir(), `qa-fix-09-unknown-${Date.now()}.sqlite`);
  const Database = (await import("better-sqlite3")).default;
  const db = new Database(tmpSqlitePath);
  db.exec(`
    CREATE TABLE widgets (
      id INTEGER PRIMARY KEY,
      name TEXT,
      price REAL
    );
    INSERT INTO widgets (name, price) VALUES ('foo', 9.99);
  `);
  db.close();

  // 2. Setear env vars.
  process.env.DB_KIND = "sqlite";
  process.env.SQLITE_PATH = tmpSqlitePath;
  process.env.SQLITE_READONLY = "true";
  process.env.SQLITE_CACHE_KB = "1024";
  process.env.NODE_ENV = "test";

  const envPath = path.resolve(__dirname, "..", "..", "src", "lib", "env.ts");
  // @ts-expect-error — internal require cache surface.
  delete Module._cache?.[envPath];

  // 3. Importar el route.
  const { dictionary } = await import("../../src/routes/dictionary");

  // 4. Arrancar el server.
  const server = await startServer([dictionary]);
  baseUrl = server.baseUrl;
  close = server.close;
});

after(async () => {
  await close();
  try {
    fs.unlinkSync(tmpSqlitePath);
  } catch {
    // ignore
  }
});

// ─── Tests del contrato ───

test("QA-FIX-09: health con tabla unknown → 503 con UNKNOWN_SCHEMA + lista las tablas", async () => {
  const r = await jsonRequest(baseUrl, "GET", "/api/dictionary/health");
  assert.equal(r.status, 503, `status=${r.status} body=${JSON.stringify(r.body)}`);
  const body = r.body as { ok: boolean; code: string; error: string };
  assert.equal(body.ok, false);
  assert.equal(body.code, "UNKNOWN_SCHEMA");
  // El mensaje debe listar la(s) tabla(s) encontrada(s) para que el
  // operador sepa qué tiene el archivo. Esto distingue el caso
  // "tienes una tabla pero no es diccionario" del caso RAW.
  assert.match(body.error, /widgets/, "debe listar la tabla 'widgets'");
  // NO debe confundirse con RAW.
  assert.doesNotMatch(body.error, /RAW_WIKTIONARY|build_dictionary_final/, "no debe ser RAW");
  // El mensaje debe ser claro sobre QUÉ falta.
  assert.match(body.error, /no table with lang\+word columns/i);
});

test("QA-FIX-09: lookup con tabla unknown → 503 con UNKNOWN_SCHEMA", async () => {
  const r = await jsonRequest(baseUrl, "GET", "/api/dictionary/lookup?lang=es&word=foo");
  assert.equal(r.status, 503, `status=${r.status} body=${JSON.stringify(r.body)}`);
  const body = r.body as { found: boolean; code: string; error: string };
  assert.equal(body.found, false);
  assert.equal(body.code, "UNKNOWN_SCHEMA");
  assert.match(body.error, /widgets/);
});

test("QA-FIX-09: prefix con tabla unknown → 503 con UNKNOWN_SCHEMA", async () => {
  const r = await jsonRequest(baseUrl, "GET", "/api/dictionary/prefix?lang=es&q=fo&limit=5");
  assert.equal(r.status, 503, `status=${r.status} body=${JSON.stringify(r.body)}`);
  const body = r.body as { count: number; entries: unknown[]; code: string; error: string };
  assert.equal(body.count, 0);
  assert.deepEqual(body.entries, []);
  assert.equal(body.code, "UNKNOWN_SCHEMA");
  assert.match(body.error, /widgets/);
});
