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
      throw new Error(`SQLITE_PATH does not exist: ${sqlitePath}`);
    }

    const BetterSqlite3 = getBetterSqlite3();
    this.db = new BetterSqlite3(sqlitePath, {
      readonly: ENV.SQLITE_READONLY,
      fileMustExist: true
    });

    this.configurePragmas();
    this.schema = this.detectSchema();
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

  private detectSchema(): DictionarySchema {
    const tables = this.db
      .prepare("SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%'")
      .all() as Array<{ name: string }>;

    let best: { schema: DictionarySchema; score: number; rows: number } | null = null;

    for (const tableRow of tables) {
      if (TABLE_BLACKLIST.has(tableRow.name)) continue;

      const columns = this.db
        .prepare(`PRAGMA table_info(${quoteIdent(tableRow.name)})`)
        .all() as Array<{ name: string }>;

      const colNames = columns.map((col) => col.name);
      const langCol = pickColumn(colNames, ["lang", "language", "locale"]);
      const wordCol = pickColumn(colNames, ["word", "term", "lemma", "headword"]);

      if (!langCol || !wordCol) continue;

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
    }

    if (!best) {
      throw new Error("Unable to detect dictionary table/columns containing lang + word");
    }

    return best.schema;
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

export const isSqliteDictionaryEnabled = () => ENV.DB_KIND === "sqlite";

export const getSqliteDictionaryService = () => {
  if (!isSqliteDictionaryEnabled()) {
    throw new Error("dictionary disabled");
  }
  if (!singleton) singleton = new SqliteDictionaryService();
  return singleton;
};
