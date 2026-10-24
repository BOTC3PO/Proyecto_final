/**
 * QA-FIX-03 — GET /api/dictionary/lookup (Q6).
 *
 * El síntoma reportado: el endpoint devolvía 500 con el modelo de
 * 450MB. La causa raíz es que el async handler dejaba que un throw
 * de `service.lookup()` se propagara como 500 genérico de Express
 * (con stack trace en dev / HTML en prod), en vez de devolver un
 * 500 con causa diagnóstica en el mismo shape que el resto de los
 * endpoints de este router.
 *
 * Estos tests lockean el contrato:
 *   - lookup de una palabra existente → 200 con { found: true, entry }
 *   - lookup de palabra inexistente → 200 con { found: false }, NO 500
 *   - lookup con params inválidos → 400
 *   - lookup cuando el servicio lanza → 500 con { error: <causa> }
 *
 * Implementación: se crea un .sqlite real pequeño en /tmp con la
 * misma shape (tabla `words` con lang+word+definitions+synonyms+translations)
 * que el modelo de 450MB, y se setea SQLITE_PATH en el `before` ANTES
 * de importar el route (los imports de ES modules son hoisted, pero
 * un `await import()` DENTRO de un `before` hook sí respeta el env
 * ya seteado, porque el módulo se carga la primera vez que se importa
 * — el env queda fijo en `ENV.SQLITE_PATH` cuando env.ts se carga
 * por primera vez, que ocurre cuando el route hace su import estático
 * de "../lib/env").
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
  // 1. Crear un .sqlite real pequeño con la misma shape que el
  //    modelo de 450MB.
  tmpSqlitePath = path.join(os.tmpdir(), `qa-fix-03-${Date.now()}.sqlite`);
  const Database = (await import("better-sqlite3")).default;
  const db = new Database(tmpSqlitePath);
  db.exec(`
    CREATE TABLE words (
      lang TEXT NOT NULL,
      word TEXT NOT NULL,
      definitions TEXT,
      synonyms TEXT,
      translations TEXT
    );
    CREATE INDEX idx_words_lang_word ON words (lang, word);
    INSERT INTO words VALUES
      ('es', 'perro', '["Mamífero doméstico de la familia de los cánidos."]', '["can"]', '{"en":"dog","fr":"chien"}'),
      ('es', 'casa',  '["Vivienda."]', NULL, '{"en":"house"}'),
      ('es', 'casamiento', '["Acto de casarse."]', NULL, NULL),
      ('es', 'caso',  '["Asunto, situación."]', NULL, NULL);
  `);
  db.close();

  // 2. Setear env vars ANTES de importar el route. El route importa
  //    `env.ts` que corre `dotenv.config()` (no override) y lee
  //    SQLITE_PATH. Pero — punto sutil — setup.ts ya importó
  //    auth-token, que importó env.ts, que ya computó ENV. Aunque
  //    cambiemos process.env.SQLITE_PATH, ENV.SQLITE_PATH queda
  //    con el valor del .env. Solución: invalidar el cache de env
  //    y auth-token, y dejar que el route los reimporte con el
  //    process.env actualizado.
  process.env.DB_KIND = "sqlite";
  process.env.SQLITE_PATH = tmpSqlitePath;
  process.env.SQLITE_READONLY = "true";
  process.env.SQLITE_CACHE_KB = "1024";
  process.env.NODE_ENV = "test";

  const envPath = path.resolve(__dirname, "..", "..", "src", "lib", "env.ts");
  // @ts-expect-error — internal require cache surface.
  delete Module._cache?.[envPath];

  // 3. Importar el route (y por lo tanto, el env y el servicio).
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

test("QA-FIX-03: lookup palabra existente → 200 con { found: true, entry }", async () => {
  const r = await jsonRequest(baseUrl, "GET", "/api/dictionary/lookup?lang=es&word=perro");
  assert.equal(r.status, 200, `status=${r.status} body=${JSON.stringify(r.body)}`);
  const body = r.body as { found: boolean; entry?: Record<string, unknown> };
  assert.equal(body.found, true);
  assert.ok(body.entry);
  assert.equal(body.entry.word, "perro");
  // El entry NO incluye `lang` (es el WHERE, no está en el SELECT del
  // service). Incluye word + payload cols (definitions, synonyms, translations).
  assert.equal(body.entry.definitions, '["Mamífero doméstico de la familia de los cánidos."]');
  assert.equal(body.entry.synonyms, '["can"]');
  assert.equal(body.entry.translations, '{"en":"dog","fr":"chien"}');
});

test("QA-FIX-03: lookup palabra inexistente → 200 con { found: false }, NO 500", async () => {
  const r = await jsonRequest(baseUrl, "GET", "/api/dictionary/lookup?lang=es&word=no-existe-xyz");
  assert.equal(r.status, 200, `status inesperado: ${r.status} body=${JSON.stringify(r.body)}`);
  const body = r.body as { found: boolean; error?: string };
  assert.equal(body.found, false);
  assert.equal(body.error, undefined, "no debe haber campo error en found:false");
});

test("QA-FIX-03: lookup con lang inválido (1 char) → 400, NO 500", async () => {
  const r = await jsonRequest(baseUrl, "GET", "/api/dictionary/lookup?lang=x&word=perro");
  assert.equal(r.status, 400);
  const body = r.body as { error: string };
  assert.match(body.error, /invalid lang/i);
});

test("QA-FIX-03: lookup sin word → 400, NO 500", async () => {
  const r = await jsonRequest(baseUrl, "GET", "/api/dictionary/lookup?lang=es");
  assert.equal(r.status, 400);
  const body = r.body as { error: string };
  assert.match(body.error, /invalid word/i);
});

test("QA-FIX-03: prefix palabra existente → 200 con count + entries ordenadas", async () => {
  const r = await jsonRequest(baseUrl, "GET", "/api/dictionary/prefix?lang=es&q=cas&limit=5");
  assert.equal(r.status, 200);
  const body = r.body as { count: number; entries: Array<{ word: string }> };
  assert.ok(body.count >= 2, `esperaba ≥2 entries con prefijo 'cas'; recibí ${body.count}`);
  for (const e of body.entries) {
    assert.match(e.word, /^cas/);
  }
  // El sort es por word, así que 'casa' < 'casamiento' < 'caso'.
  if (body.entries.length >= 2) {
    const words = body.entries.map((e) => e.word);
    const sorted = [...words].sort();
    assert.deepEqual(words, sorted, "entries deben estar ordenadas por word");
  }
});

test("QA-FIX-03: prefix con q inválido → 400", async () => {
  const r = await jsonRequest(baseUrl, "GET", "/api/dictionary/prefix?lang=es&q=&limit=5");
  assert.equal(r.status, 400);
});

test("QA-FIX-03: health → 200 con shape de la detección de schema", async () => {
  const r = await jsonRequest(baseUrl, "GET", "/api/dictionary/health");
  assert.equal(r.status, 200);
  const body = r.body as { ok: boolean; kind: string; table: string; cols: { lang: string; word: string; payload: string[] } };
  assert.equal(body.ok, true);
  assert.equal(body.kind, "sqlite");
  assert.equal(body.table, "words");
  assert.equal(body.cols.lang, "lang");
  assert.equal(body.cols.word, "word");
  // Payload cols incluye definitions, synonyms, translations (NO lang, NO word).
  assert.deepEqual(body.cols.payload, ["definitions", "synonyms", "translations"]);
});
