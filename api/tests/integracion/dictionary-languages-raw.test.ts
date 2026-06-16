/**
 * QA-FIX-10 — GET /api/dictionary/languages con fixture RAW (entries).
 *
 * Mismo trato que QA-FIX-09: si el sqlite no es servible (es el dump
 * RAW de Wiktionary), el endpoint devuelve 503 con la causa accionable
 * de RAW_WIKTIONARY, NO 500 ni un 200 con `languages: []` (que sería
 * peor — el selector del front pensaría que el diccionario no tiene
 * idiomas y mostraría un estado roto).
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
  tmpSqlitePath = path.join(os.tmpdir(), `qa-fix-10-raw-${Date.now()}.sqlite`);
  const Database = (await import("better-sqlite3")).default;
  const db = new Database(tmpSqlitePath);
  db.exec(`
    CREATE TABLE entries (
      source TEXT NOT NULL,
      title TEXT NOT NULL,
      ns INTEGER,
      page_id INTEGER,
      text TEXT,
      PRIMARY KEY (source, title)
    );
    INSERT INTO entries VALUES ('es', 'perro', 0, 1, '...');
  `);
  db.close();

  process.env.DB_KIND = "sqlite";
  process.env.SQLITE_PATH = tmpSqlitePath;
  process.env.SQLITE_READONLY = "true";
  process.env.SQLITE_CACHE_KB = "1024";
  process.env.NODE_ENV = "test";

  const envPath = path.resolve(__dirname, "..", "..", "src", "lib", "env.ts");
  // @ts-expect-error — internal require cache surface.
  delete Module._cache?.[envPath];

  const { dictionary } = await import("../../src/routes/dictionary");
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

test("QA-FIX-10: entries (RAW) → 503 con RAW_WIKTIONARY (mismo trato que QA-FIX-09)", async () => {
  const r = await jsonRequest(baseUrl, "GET", "/api/dictionary/languages");
  assert.equal(r.status, 503, `status=${r.status} body=${JSON.stringify(r.body)}`);
  const body = r.body as { languages: string[]; code: string; error: string };
  assert.deepEqual(body.languages, []);
  assert.equal(body.code, "RAW_WIKTIONARY");
  assert.match(body.error, /build_dictionary_final/);
});
