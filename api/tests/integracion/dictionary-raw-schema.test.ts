/**
 * QA-FIX-09 — fixture con tabla `entries` (firma RAW de Wiktionary).
 *
 * El Diccionario.sqlite commiteado en el repo es el dump RAW que
 * produce install/build_wiktionary_sqlite.py:309 (PRIMARY KEY
 * (source, title), columnas source/title/text BLOB). NO es el
 * diccionario servible — ese se produce con
 * install/build_dictionary_final.py:400 (tabla `words` con
 * lang/word/definitions/synonyms/translations).
 *
 * Antes de QA-FIX-09: detectSchema() lanzaba
 * "Unable to detect dictionary table/columns containing lang + word"
 * que burbujeaba como 500 genérico de Express en health/lookup/prefix.
 * El operador no tenía idea de que el archivo era RAW y faltaba correr
 * build_dictionary_final.py.
 *
 * Después de QA-FIX-09: el servicio detecta la firma RAW, lanza un
 * DictionarySchemaError("RAW_WIKTIONARY", ...), el route lo convierte
 * en 503 con un mensaje accionable que menciona
 * "entries"/"RAW"/"build_dictionary_final".
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
  // 1. Crear un .sqlite con la firma RAW de Wiktionary dump
  //    (mismo shape que produce build_wiktionary_sqlite.py:309).
  tmpSqlitePath = path.join(os.tmpdir(), `qa-fix-09-raw-${Date.now()}.sqlite`);
  const Database = (await import("better-sqlite3")).default;
  const db = new Database(tmpSqlitePath);
  db.exec(`
    CREATE TABLE entries (
      source TEXT NOT NULL,
      title TEXT NOT NULL,
      ns INTEGER,
      page_id INTEGER,
      rev_id INTEGER,
      parent_id INTEGER,
      timestamp TEXT,
      model TEXT,
      format TEXT,
      text TEXT,
      sha1 TEXT,
      is_redirect INTEGER DEFAULT 0,
      redirect_title TEXT,
      PRIMARY KEY (source, title)
    );
    CREATE INDEX idx_entries_source_title ON entries (source, title);
    INSERT INTO entries (source, title, ns, page_id, text) VALUES
      ('es', 'perro', 0, 1234, '{{sustantivo|es}}...'),
      ('es', 'casa', 0, 1235, '{{sustantivo|es}}...');
  `);
  db.close();

  // 2. Setear env vars ANTES de importar el route (mismo patrón que
  //    dictionary-lookup.test.ts).
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

test("QA-FIX-09: health con tabla RAW (entries) → 503 con RAW_WIKTIONARY", async () => {
  const r = await jsonRequest(baseUrl, "GET", "/api/dictionary/health");
  assert.equal(r.status, 503, `status=${r.status} body=${JSON.stringify(r.body)}`);
  const body = r.body as { ok: boolean; code: string; error: string };
  assert.equal(body.ok, false);
  assert.equal(body.code, "RAW_WIKTIONARY");
  // El mensaje debe ser ACCIONABLE: mencionar la tabla, "RAW" y
  // el script a correr. Esto es lo que distingue QA-FIX-09 del
  // 500 opaco anterior.
  assert.match(body.error, /entries/, "debe mencionar la tabla 'entries'");
  assert.match(body.error, /RAW/i, "debe identificar como RAW");
  assert.match(body.error, /build_dictionary_final/, "debe apuntar al script accionable");
  assert.match(body.error, new RegExp(tmpSqlitePath), "debe incluir el path del sqlite");
});

test("QA-FIX-09: lookup con tabla RAW → 503 con RAW_WIKTIONARY (NO 500)", async () => {
  const r = await jsonRequest(baseUrl, "GET", "/api/dictionary/lookup?lang=es&word=perro");
  assert.equal(r.status, 503, `status=${r.status} body=${JSON.stringify(r.body)}`);
  const body = r.body as { found: boolean; code: string; error: string };
  assert.equal(body.found, false);
  assert.equal(body.code, "RAW_WIKTIONARY");
  assert.match(body.error, /build_dictionary_final/);
});

test("QA-FIX-09: prefix con tabla RAW → 503 con RAW_WIKTIONARY (NO 500)", async () => {
  const r = await jsonRequest(baseUrl, "GET", "/api/dictionary/prefix?lang=es&q=per&limit=5");
  assert.equal(r.status, 503, `status=${r.status} body=${JSON.stringify(r.body)}`);
  const body = r.body as { count: number; entries: unknown[]; code: string; error: string };
  assert.equal(body.count, 0);
  assert.deepEqual(body.entries, []);
  assert.equal(body.code, "RAW_WIKTIONARY");
  assert.match(body.error, /build_dictionary_final/);
});

test("QA-FIX-09: el error es estable (substring testeable), no un stack trace", async () => {
  const r = await jsonRequest(baseUrl, "GET", "/api/dictionary/health");
  assert.equal(r.status, 503);
  const body = r.body as { error: string };
  // NO debe contener stack trace (sin "at ", "at\n", "Error:" en el path).
  assert.doesNotMatch(body.error, /\n\s+at\s+/, "no debe contener stack trace");
  // El mensaje debe ser UNA sola línea legible.
  assert.equal(body.error.split("\n").length, 1, "el mensaje debe ser una sola línea");
});
