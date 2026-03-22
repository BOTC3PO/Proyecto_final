#!/usr/bin/env ts-node
/**
 * sqliteMigrate.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Applies pending SQLite migrations from api/sql/migrations/.
 *
 * Version tracking uses PRAGMA user_version (machine-readable).
 * The schema_migrations table (inside the DB) provides a human-readable audit
 * trail if migrations include their own INSERT into that table.
 *
 * Usage:
 *   npm run db:sqlite:migrate
 *   SQLITE_PATH=./data/other.db npm run db:sqlite:migrate
 *
 * Algorithm:
 *   1. Read current PRAGMA user_version.
 *   2. Scan api/sql/migrations/ for files named NNNN_*.sql (zero-padded, sorted).
 *   3. For each file whose NNNN > user_version, apply it inside a transaction
 *      and then set PRAGMA user_version = NNNN atomically.
 *   4. If any migration fails, the transaction rolls back and the process exits
 *      with code 1; no partial state is committed.
 *
 * Idempotence:
 *   Re-running the command when user_version already equals the highest
 *   migration number is a no-op.
 */

import Database from "better-sqlite3";
import fs from "fs";
import path from "path";

try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("dotenv").config();
} catch {
  /* dotenv is optional */
}

const MIGRATIONS_DIR = path.resolve(__dirname, "../../sql/migrations");
const MIGRATION_FILE_RE = /^(\d{4})_[\w-]+\.sql$/;

function getMigrationVersion(filename: string): number {
  return parseInt(filename.slice(0, 4), 10);
}

/**
 * Applies all pending migrations to the SQLite database at `dbPath`.
 * Creates the database file and its parent directories if they do not exist.
 */
export function runMigrations(dbPath: string): void {
  const dir = path.dirname(dbPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const db = new Database(dbPath);

  // Recommended production pragmas applied before any migration work.
  db.pragma("journal_mode = WAL");
  db.pragma("foreign_keys = ON");
  db.pragma("busy_timeout = 5000");

  const currentVersion = db.pragma("user_version", { simple: true }) as number;
  console.log(`[sqlite:migrate] DB            : ${dbPath}`);
  console.log(`[sqlite:migrate] user_version  : ${currentVersion}`);
  console.log(`[sqlite:migrate] migrations dir: ${MIGRATIONS_DIR}`);

  if (!fs.existsSync(MIGRATIONS_DIR)) {
    db.close();
    throw new Error(`Migrations directory not found: ${MIGRATIONS_DIR}`);
  }

  const allFiles = fs
    .readdirSync(MIGRATIONS_DIR)
    .filter((f) => MIGRATION_FILE_RE.test(f))
    .sort(); // lexicographic order == numeric order for zero-padded names

  const pending = allFiles.filter(
    (f) => getMigrationVersion(f) > currentVersion
  );

  if (pending.length === 0) {
    console.log(
      `[sqlite:migrate] Already up to date (user_version = ${currentVersion}).`
    );
    db.close();
    return;
  }

  console.log(`[sqlite:migrate] ${pending.length} migration(s) to apply.`);

  for (const file of pending) {
    const targetVersion = getMigrationVersion(file);
    const sqlPath = path.join(MIGRATIONS_DIR, file);
    const sql = fs.readFileSync(sqlPath, "utf8");

    // Wrap the migration SQL + PRAGMA user_version update in a single
    // transaction so that a failure leaves user_version unchanged.
    const applyMigration = db.transaction(() => {
      db.exec(sql);
      // PRAGMA user_version participates in SQLite transactions.
      db.pragma(`user_version = ${targetVersion}`);
    });

    try {
      applyMigration();
      console.log(
        `[sqlite:migrate] ✓ ${file}  →  user_version = ${targetVersion}`
      );
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      console.error(
        `[sqlite:migrate] ✗ Failed applying ${file}: ${message}`
      );
      db.close();
      process.exit(1);
    }
  }

  const finalVersion = db.pragma("user_version", { simple: true }) as number;
  console.log(
    `[sqlite:migrate] Done. user_version = ${finalVersion}`
  );
  db.close();
}

// ─────────────────────────────────────────────────────────────────────────────
// CLI entry point (executed when called via npm run db:sqlite:migrate)
// ─────────────────────────────────────────────────────────────────────────────
/**
 * Detects DBs that were bootstrapped externally (e.g. directly from a .sql
 * schema file) and had their user_version pre-set without running the full
 * migration SQL.  If the DB reports a version > 0 but is missing a table
 * that migration 0001 is supposed to create, the version is reset to 0 so
 * the runner replays all migrations from the start.
 *
 * Every CREATE TABLE / INDEX statement in the migration files uses
 * IF NOT EXISTS, so replaying them is safe — already-existing objects are
 * silently skipped.
 */
function repairIncompleteBootstrap(dbPath: string): void {
  if (!fs.existsSync(dbPath)) return;

  const db = new Database(dbPath);
  try {
    const ver = db.pragma("user_version", { simple: true }) as number;
    if (ver === 0) return;

    const row = db
      .prepare("SELECT name FROM sqlite_master WHERE type='table' AND name='modulos'")
      .get();

    if (!row) {
      db.pragma("user_version = 0");
      console.log(
        `[sqlite:migrate] ${path.basename(dbPath)}: incomplete bootstrap detected ` +
          `(user_version was ${ver}, 'modulos' table missing) — reset to 0 for replay.`
      );
    }
  } finally {
    db.close();
  }
}

if (require.main === module) {
  const corePath =
    process.env.SQLITE_CORE_PATH ??
    path.resolve(process.cwd(), "src", "base", "core_schema.sqlite");

  const contentPath =
    process.env.SQLITE_CONTENT_PATH ??
    path.resolve(process.cwd(), "src", "base", "modulos_quizzes.sqlite");

  console.log("[sqlite:migrate] ── core ──────────────────────────────────");
  repairIncompleteBootstrap(corePath);
  runMigrations(corePath);

  console.log("[sqlite:migrate] ── content ───────────────────────────────");
  repairIncompleteBootstrap(contentPath);
  runMigrations(contentPath);
}
