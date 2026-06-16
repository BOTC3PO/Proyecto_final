/**
 * QA-FIX-10 — GET /api/dictionary/languages con fixture `words`.
 *
 * Caso bueno: un sqlite `words` con fr/la/pt → debe devolver esos
 * tres ordenados alfabéticamente, y lookup en cada uno debe encontrar
 * la palabra esperada (candado: el selector NUNCA miente — todo idioma
 * ofrecido debe tener al menos una entrada en el archivo).
 *
 * Corre en su propio proceso (Node test runner aísla módulos), así
 * el singleton del service se instancia una sola vez con el fixture
 * correcto.
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
  // 1. Crear un .sqlite con la misma shape que el diccionario servible
  //    (mismo patrón que dictionary-lookup.test.ts).
  tmpSqlitePath = path.join(os.tmpdir(), `qa-fix-10-words-${Date.now()}.sqlite`);
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
      ('fr', 'chien',     '["Canidé domestique."]', '["can"]', '{"en":"dog","es":"perro"}'),
      ('la', 'canis',     '["Canis."]',             NULL,       '{"en":"dog"}'),
      ('pt', 'cachorro',  '["Filhote de cão."]',    NULL,       '{"en":"puppy"}');
  `);
  db.close();

  // 2. Setear env vars ANTES de importar el route.
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

// ─── Tests ───

test("QA-FIX-10: words con fr/la/pt → 200 con esos 3 idiomas ordenados alfabéticamente", async () => {
  const r = await jsonRequest(baseUrl, "GET", "/api/dictionary/languages");
  assert.equal(r.status, 200, `status=${r.status} body=${JSON.stringify(r.body)}`);
  const body = r.body as { languages: string[] };
  assert.deepEqual(
    body.languages,
    ["fr", "la", "pt"],
    "idiomas ordenados alfabéticamente, sólo los reales del archivo"
  );
});

test("QA-FIX-10: cada idioma devuelto responde a lookup (ninguno ofrecido queda vacío)", async () => {
  // Candado: si /languages ofreciera un idioma sin entradas, este test
  // lo detecta. El selector del front debe NUNCA mentir.
  const langs = ((await jsonRequest(baseUrl, "GET", "/api/dictionary/languages")).body as { languages: string[] }).languages;
  const expected: Record<string, string> = { fr: "chien", la: "canis", pt: "cachorro" };
  for (const lang of langs) {
    const word = expected[lang];
    assert.ok(word, `falta mapeo de test para idioma ${lang}`);
    const r = await jsonRequest(baseUrl, "GET", `/api/dictionary/lookup?lang=${lang}&word=${word}`);
    assert.equal(r.status, 200, `lookup ${lang}/${word} status=${r.status} body=${JSON.stringify(r.body)}`);
    const body = r.body as { found: boolean };
    assert.equal(body.found, true, `lookup ${lang}/${word} debería encontrar la palabra`);
  }
});

test("QA-FIX-10: dos requests consecutivos son consistentes (cache funciona)", async () => {
  const r1 = await jsonRequest(baseUrl, "GET", "/api/dictionary/languages");
  const r2 = await jsonRequest(baseUrl, "GET", "/api/dictionary/languages");
  assert.equal(r1.status, 200);
  assert.equal(r2.status, 200);
  assert.deepEqual(r1.body, r2.body, "mismo response en cache hit vs miss");
});
