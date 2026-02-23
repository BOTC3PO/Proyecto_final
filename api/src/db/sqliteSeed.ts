#!/usr/bin/env ts-node
/**
 * sqliteSeed.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Applies the minimal seed data (api/src/base/seed_minimal.sql) to the SQLite
 * database.  All INSERT statements in that file use OR IGNORE so the script is
 * idempotent — safe to run more than once.
 *
 * Usage:
 *   npm run db:seed
 *   SQLITE_PATH=./data/other.db npm run db:seed
 *
 * Prerequisites:
 *   The schema migrations must have been applied first:
 *     npm run db:sqlite:migrate
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

const SEED_FILE = path.resolve(__dirname, "../../src/base/seed_minimal.sql");

function runSeed(dbPath: string): void {
  if (!fs.existsSync(dbPath)) {
    console.error(`[sqlite:seed] Database file not found: ${dbPath}`);
    console.error("[sqlite:seed] Run 'npm run db:sqlite:migrate' first.");
    process.exit(1);
  }

  if (!fs.existsSync(SEED_FILE)) {
    console.error(`[sqlite:seed] Seed file not found: ${SEED_FILE}`);
    process.exit(1);
  }

  const db = new Database(dbPath);
  db.pragma("journal_mode = WAL");
  db.pragma("foreign_keys = ON");
  db.pragma("busy_timeout = 5000");

  const sql = fs.readFileSync(SEED_FILE, "utf8");

  console.log(`[sqlite:seed] DB       : ${dbPath}`);
  console.log(`[sqlite:seed] Seed file: ${SEED_FILE}`);

  try {
    db.exec(sql);
    console.log("[sqlite:seed] Done. Seed applied successfully.");
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.error(`[sqlite:seed] Failed: ${message}`);
    db.close();
    process.exit(1);
  }

  db.close();
}

if (require.main === module) {
  const dbPath =
    process.env.SQLITE_PATH ??
    path.resolve(process.cwd(), "data", "core.sqlite");

  runSeed(dbPath);
}

export { runSeed };
