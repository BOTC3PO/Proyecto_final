import fs from "node:fs";
import path from "node:path";
import { ENV } from "../lib/env";

type BetterSqlite3Ctor = new (
  file: string,
  options?: { readonly?: boolean; fileMustExist?: boolean }
) => {
  pragma: (value: string) => unknown;
  prepare: (sql: string) => {
    get: (...params: unknown[]) => unknown;
    all: (...params: unknown[]) => unknown[];
  };
};

let cachedBetterSqlite3: BetterSqlite3Ctor | null = null;

const getBetterSqlite3 = (): BetterSqlite3Ctor => {
  if (cachedBetterSqlite3) return cachedBetterSqlite3;
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  cachedBetterSqlite3 = require("better-sqlite3") as BetterSqlite3Ctor;
  return cachedBetterSqlite3;
};

type SqliteDb = InstanceType<BetterSqlite3Ctor>;

type DictionarySchema = {
  table: string;
  langCol: string;
  wordCol: string;
  payloadCols: string[];
};

const TABLE_BLACKLIST = new Set(["sqlite_sequence", "sqlite_stat1", "sqlite_stat4"]);

const toAbsolutePath = (value: string) => (path.isAbsolute(value) ? value : path.resolve(process.cwd(), value));

/**
 * QA-FIX-09: typed error for dictionary schema validation failures.
 *
 * `code` distinguishes the four known failure modes so the route can
 * map them to a 503 with a stable, actionable message instead of a
 * 500 with a stack trace. The full message is logged once at init
 * (with `path` and `code`) and surfaced to the operator via
 * `GET /api/dictionary/health` → 503, so a misconfigured `SQLITE_PATH`
 * is diagnosable without reading server logs.
 */
export type DictionarySchemaErrorCode =
  | "RAW_WIKTIONARY"
  | "UNKNOWN_SCHEMA"
  | "NO_TABLES"
  | "FILE_MISSING";

export class DictionarySchemaError extends Error {
  readonly code: DictionarySchemaErrorCode;
  readonly path: string;

  constructor(code: DictionarySchemaErrorCode, path: string, message: string) {
    super(message);
    this.name = "DictionarySchemaError";
    this.code = code;
    this.path = path;
  }
}

const scoreColumn = (name: string, candidates: string[]) => {
  const lc = name.toLowerCase();
  if (candidates.includes(lc)) return 4;
  if (candidates.some((candidate) => lc.startsWith(candidate) || lc.endsWith(candidate))) return 3;
  if (candidates.some((candidate) => lc.includes(candidate))) return 2;
  return 0;
};

const pickColumn = (columns: string[], candidates: string[]) => {
  let best: string | null = null;
  let bestScore = 0;
  for (const col of columns) {
    const score = scoreColumn(col, candidates);
    if (score > bestScore) {
      bestScore = score;
      best = col;
    }
  }
  return best;
};

const quoteIdent = (name: string) => `"${name.replace(/"/g, '""')}"`;

export const nextPrefixEnd = (prefix: string) => {
  if (!prefix.trim()) {
    throw new Error("prefix cannot be empty");
  }
  const chars = Array.from(prefix);
  const lastChar = chars.pop();
  if (!lastChar) return `${prefix}\uFFFF`;
  const cp = lastChar.codePointAt(0);
  if (cp === undefined || cp >= 0x10ffff) {
    return `${prefix}\uFFFF`;
  }
  return `${chars.join("")}${String.fromCodePoint(cp + 1)}`;
};

class SqliteDictionaryService {
  private db: SqliteDb;
  private schema: DictionarySchema;
  private lookupStmt;
  private prefixStmt;
  private healthStmt;

  constructor() {
    const sqlitePath = toAbsolutePath(ENV.SQLITE_PATH);
    if (!fs.existsSync(sqlitePath)) {
      throw new DictionarySchemaError(
        "FILE_MISSING",
        sqlitePath,
        `SQLITE_PATH does not exist: ${sqlitePath}`
      );
    }

    const BetterSqlite3 = getBetterSqlite3();
    this.db = new BetterSqlite3(sqlitePath, {
      readonly: ENV.SQLITE_READONLY,
      fileMustExist: true
    });

    this.configurePragmas();
    this.schema = this.detectSchema(sqlitePath);
    this.logSelection(sqlitePath);
    this.lookupStmt = this.prepareLookup();
    this.prefixStmt = this.preparePrefix();
    this.healthStmt = this.db.prepare("SELECT 1 as ok");
  }

  private configurePragmas() {
    this.db.pragma("temp_store = MEMORY");
    this.db.pragma(`cache_size = -${Math.max(1, ENV.SQLITE_CACHE_KB)}`);
    this.db.pragma("query_only = ON");
  }

  private detectSchema(sqlitePath: string): DictionarySchema {
    const tables = this.db
      .prepare("SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%'")
      .all() as Array<{ name: string }>;

    let best: { schema: DictionarySchema; score: number; rows: number } | null = null;
    let rawTable: { name: string; cols: string[] } | null = null;

    for (const tableRow of tables) {
      if (TABLE_BLACKLIST.has(tableRow.name)) continue;

      const columns = this.db
        .prepare(`PRAGMA table_info(${quoteIdent(tableRow.name)})`)
        .all() as Array<{ name: string }>;

      const colNames = columns.map((col) => col.name);
      const langCol = pickColumn(colNames, ["lang", "language", "locale"]);
      const wordCol = pickColumn(colNames, ["word", "term", "lemma", "headword"]);

      if (langCol && wordCol) {
        const payloadCols = colNames.filter((col) => col !== langCol && col !== wordCol).slice(0, 6);
        const rows = (this.db.prepare(`SELECT COUNT(1) as count FROM ${quoteIdent(tableRow.name)}`).get() as { count: number }).count;
        const score = scoreColumn(langCol, ["lang", "language", "locale"]) + scoreColumn(wordCol, ["word", "term", "lemma", "headword"]);

        if (!best || score > best.score || (score === best.score && rows > best.rows)) {
          best = {
            schema: { table: tableRow.name, langCol, wordCol, payloadCols },
            score,
            rows
          };
        }
      } else {
        // QA-FIX-09: detect RAW Wiktionary dump signature so the operator
        // gets an actionable message ("run build_dictionary_final.py to
        // produce the 'words' table") instead of a generic "no lang+word"
        // error. The RAW dump table comes from build_wiktionary_sqlite.py:309
        // (PRIMARY KEY (source, title), columns include text BLOB).
        if (
          !rawTable &&
          tableRow.name === "entries" &&
          colNames.includes("source") &&
          colNames.includes("title") &&
          (colNames.includes("text") || colNames.includes("page_id"))
        ) {
          rawTable = { name: tableRow.name, cols: colNames };
        }
      }
    }

    if (best) return best.schema;

    if (rawTable) {
      throw new DictionarySchemaError(
        "RAW_WIKTIONARY",
        sqlitePath,
        `Dictionary sqlite has RAW Wiktionary schema (table 'entries' with source/title/text); ` +
          `run install/build_dictionary_final.py to produce the 'words' table. ` +
          `Path: ${sqlitePath}, columns: [${rawTable.cols.join(", ")}]`
      );
    }

    if (tables.length === 0) {
      throw new DictionarySchemaError(
        "NO_TABLES",
        sqlitePath,
        `Dictionary sqlite has no user tables. Path: ${sqlitePath}`
      );
    }

    const tableList = tables.map((t) => t.name).join(", ");
    throw new DictionarySchemaError(
      "UNKNOWN_SCHEMA",
      sqlitePath,
      `Dictionary sqlite has no table with lang+word columns; got tables: [${tableList}]. Path: ${sqlitePath}`
    );
  }

  private prepareLookup() {
    const { table, langCol, wordCol, payloadCols } = this.schema;
    const cols = [wordCol, ...payloadCols].map(quoteIdent).join(", ");
    return this.db.prepare(
      `SELECT ${cols} FROM ${quoteIdent(table)} WHERE ${quoteIdent(langCol)} = ? AND ${quoteIdent(wordCol)} = ? LIMIT 1`
    );
  }

  private preparePrefix() {
    const { table, langCol, wordCol, payloadCols } = this.schema;
    const cols = [wordCol, ...payloadCols].map(quoteIdent).join(", ");
    return this.db.prepare(
      `SELECT ${cols} FROM ${quoteIdent(table)} WHERE ${quoteIdent(langCol)} = ? AND ${quoteIdent(wordCol)} >= ? AND ${quoteIdent(wordCol)} < ? ORDER BY ${quoteIdent(wordCol)} LIMIT ?`
    );
  }

  private logSelection(sqlitePath: string) {
    console.info("[dictionary/sqlite] loaded", {
      path: sqlitePath,
      table: this.schema.table,
      columns: { lang: this.schema.langCol, word: this.schema.wordCol, payload: this.schema.payloadCols }
    });
  }

  getHealth() {
    this.healthStmt.get();
    return {
      ok: true,
      kind: "sqlite",
      path: ENV.NODE_ENV === "production" ? undefined : toAbsolutePath(ENV.SQLITE_PATH),
      table: this.schema.table,
      cols: { lang: this.schema.langCol, word: this.schema.wordCol, payload: this.schema.payloadCols }
    };
  }

  lookup(lang: string, word: string) {
    return (this.lookupStmt.get(lang, word) as Record<string, unknown> | undefined) ?? null;
  }

  prefix(lang: string, q: string, limit: number) {
    return this.prefixStmt.all(lang, q, nextPrefixEnd(q), limit) as Array<Record<string, unknown>>;
  }

  getSchema() {
    return this.schema;
  }

  verifyLangWordIndex() {
    const { table, langCol, wordCol } = this.schema;
    const indexRows = this.db.prepare(`PRAGMA index_list(${quoteIdent(table)})`).all() as Array<{ name: string }>;

    for (const indexRow of indexRows) {
      const cols = this.db.prepare(`PRAGMA index_info(${quoteIdent(indexRow.name)})`).all() as Array<{ seqno: number; name: string }>;
      const ordered = cols.sort((a, b) => a.seqno - b.seqno).map((col) => col.name.toLowerCase());
      if (ordered[0] === langCol.toLowerCase() && ordered[1] === wordCol.toLowerCase()) {
        return true;
      }
    }

    return false;
  }

  getExplainPlans(sampleLang: string, sampleWord: string, samplePrefix: string, limit: number) {
    const end = nextPrefixEnd(samplePrefix);
    const { table, langCol, wordCol } = this.schema;
    const lookupPlan = this.db
      .prepare(`EXPLAIN QUERY PLAN SELECT * FROM ${quoteIdent(table)} WHERE ${quoteIdent(langCol)}=? AND ${quoteIdent(wordCol)}=? LIMIT 1`)
      .all(sampleLang, sampleWord);
    const prefixPlan = this.db
      .prepare(`EXPLAIN QUERY PLAN SELECT * FROM ${quoteIdent(table)} WHERE ${quoteIdent(langCol)}=? AND ${quoteIdent(wordCol)}>=? AND ${quoteIdent(wordCol)}<? ORDER BY ${quoteIdent(wordCol)} LIMIT ?`)
      .all(sampleLang, samplePrefix, end, limit);
    return { lookupPlan, prefixPlan };
  }
}

let singleton: SqliteDictionaryService | null = null;
let lastInitError: DictionarySchemaError | null = null;

export const isSqliteDictionaryEnabled = () => ENV.DB_KIND === "sqlite";

export const getSqliteDictionaryService = () => {
  if (!isSqliteDictionaryEnabled()) {
    throw new Error("dictionary disabled");
  }
  if (singleton) return singleton;
  // QA-FIX-09: if the previous init failed with a schema error, don't
  // retry on every request — surface the same error each time so the
  // 503 response is stable. The operator must restart the server
  // after fixing SQLITE_PATH. Reset only via resetSqliteDictionaryService
  // (used by tests).
  if (lastInitError) throw lastInitError;
  try {
    singleton = new SqliteDictionaryService();
    return singleton;
  } catch (error) {
    if (error instanceof DictionarySchemaError) {
      lastInitError = error;
      // Log once at init: code + path + full message. The route will
      // also surface this in /api/dictionary/health → 503.
      console.warn(`[dictionary/sqlite] schema validation failed (${error.code}): ${error.message}`);
    }
    throw error;
  }
};

/**
 * QA-FIX-09: test-only. Clears the singleton and the cached init
 * error so the next call to `getSqliteDictionaryService()` re-runs
 * detection against the (possibly new) `ENV.SQLITE_PATH`.
 */
export const resetSqliteDictionaryService = () => {
  singleton = null;
  lastInitError = null;
};
