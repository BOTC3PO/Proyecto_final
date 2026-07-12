/**
 * PLAN-X §5 — `idiomasDiccionario` en `GET /api/readonly/catalogo`
 * siempre devolvía `[]`: `getAvailableLanguages()` leía subdirectorios
 * de `api/src/diccionarios/` que nunca existieron (es un único
 * `.sqlite` plano). Decisión de Javier (2026-07-11): en vez de borrar
 * el campo, arreglarlo consultando la columna `lang` del sqlite — el
 * mismo mecanismo real que ya usa `GET /api/dictionary/languages`
 * (`sqliteDictionary.languages()`).
 *
 * Unit-test directo de `getAvailableLanguages()` (exportada para esto),
 * NO vía `GET /api/readonly/catalogo`: ese endpoint agrega además
 * `generadores` vía `listTopicsFromFilesystem`, que apunta a
 * `api/src/generadores/*` — un path que quedó huérfano (el contenido
 * real vive en `archive/api/generadores/`, sin reconciliar todavía) y
 * tira 500 sin relación con este fix. Reportado aparte.
 *
 * Corre en su propio proceso (Node test runner aísla módulos por
 * archivo), así el singleton del service y `ENV` se instancian una
 * sola vez con el fixture correcto (mismo patrón que
 * `dictionary-languages-words.test.ts`).
 */
import assert from "node:assert/strict";
import fs from "node:fs";
import Module from "node:module";
import os from "node:os";
import path from "node:path";
import { after, before, test } from "node:test";

let tmpSqlitePath: string;

before(async () => {
  tmpSqlitePath = path.join(os.tmpdir(), `plan-x-5-idiomas-${Date.now()}.sqlite`);
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
      ('es', 'perro', '["Animal domestico."]', NULL, '{"en":"dog"}');
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
});

after(() => {
  try {
    fs.unlinkSync(tmpSqlitePath);
  } catch {
    // ignore
  }
});

test("PLAN-X §5: getAvailableLanguages() lee la columna lang del sqlite real (no []) ", async () => {
  const { getAvailableLanguages } = await import("../../src/routes/readonly");
  const languages = await getAvailableLanguages();
  assert.deepEqual(languages, ["es"]);
});
