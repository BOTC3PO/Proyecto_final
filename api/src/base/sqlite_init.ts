#!/usr/bin/env ts-node
/**
 * sqlite_init.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Thin wrapper kept for backward compatibility.
 * Delegates to sqliteMigrate.ts, which applies all pending migrations and
 * tracks versions via PRAGMA user_version.
 *
 * Usage:   npm run db:sqlite:migrate     ← preferred
 *          ts-node src/base/sqlite_init.ts  ← also works
 *
 * Variables de entorno:
 *   SQLITE_PATH   path to the SQLite file (default: ./data/core.db)
 *
 * NOTE — previous bug fixed:
 *   The original script referenced "../db/core_schema.sql" which resolved to
 *   api/src/db/core_schema.sql — a path that did not exist. The schema files
 *   live under api/src/base/ and are now consolidated into api/sql/schema.sql.
 *   All DDL is applied through the migration runner (api/src/db/sqliteMigrate.ts).
 */

import path from "path";
import { runMigrations } from "../db/sqliteMigrate";

try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("dotenv").config();
} catch {
  /* dotenv is optional */
}

const dbPath =
  process.env.SQLITE_PATH ?? path.resolve(process.cwd(), "data", "core.db");

runMigrations(dbPath);
