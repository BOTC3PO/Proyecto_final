/**
 * QA-FIX-10 — GET /api/dictionary/languages con fixture UNKNOWN_SCHEMA.
 *
 * Cubre el caso "el sqlite existe, no es RAW, pero no es un
 * diccionario" — el endpoint debe devolver 503 con
 * UNKNOWN_SCHEMA + la lista de tablas, igual que los otros endpoints
 * (QA-FIX-09).
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
  tmpSqlitePath = path.join(os.tmpdir(), `qa-fix-10-unknown-${Date.now()}.sqlite`);
  const Database = (await import("better-sqlite3")).default;
  const db = new Database(tmpSqlitePath);
  db.exec(`CREATE TABLE widgets (id INTEGER PRIMARY KEY, name TEXT);`);
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

test("QA-FIX-10: tabla unknown (widgets) → 503 con UNKNOWN_SCHEMA", async () => {
  const r = await jsonRequest(baseUrl, "GET", "/api/dictionary/languages");
  assert.equal(r.status, 503, `status=${r.status} body=${JSON.stringify(r.body)}`);
  const body = r.body as { languages: string[]; code: string; error: string };
  assert.deepEqual(body.languages, []);
  assert.equal(body.code, "UNKNOWN_SCHEMA");
  assert.match(body.error, /widgets/);
});
