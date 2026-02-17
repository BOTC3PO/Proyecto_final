import { ENV } from "../src/lib/env";

if (ENV.DB_KIND !== "sqlite") {
  console.error("Set DB_KIND=sqlite to run this script.");
  process.exit(1);
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
const BetterSqlite3 = require("better-sqlite3") as new (
  file: string,
  options?: { readonly?: boolean; fileMustExist?: boolean }
) => {
  prepare: (sql: string) => { run: (...params: unknown[]) => { changes: number } };
};

const db = new BetterSqlite3(ENV.SQLITE_PATH, { readonly: false, fileMustExist: true });

const table = process.env.SQLITE_TABLE;
const langCol = process.env.SQLITE_LANG_COL;
const wordCol = process.env.SQLITE_WORD_COL;

if (!table || !langCol || !wordCol) {
  console.error("Provide SQLITE_TABLE, SQLITE_LANG_COL and SQLITE_WORD_COL env vars.");
  process.exit(1);
}

const quote = (value: string) => `"${value.replace(/"/g, '""')}"`;
const idxName = `idx_${table}_${langCol}_${wordCol}`;
const sql = `CREATE INDEX IF NOT EXISTS ${quote(idxName)} ON ${quote(table)}(${quote(langCol)}, ${quote(wordCol)})`;

db.prepare(sql).run();
console.log(`Index ensured: ${idxName}`);
