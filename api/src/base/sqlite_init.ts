#!/usr/bin/env node
/**
 * sqlite_init.ts
 * ──────────────────────────────────────────────────────────────────────────────
 * Crea la base SQLite y aplica core_schema.sql (idempotente).
 *
 * Uso: npm run db:sqlite:init
 *
 * Variables de entorno:
 *   SQLITE_PATH   ./data/core.db  (por defecto)
 */

import fs from "fs";
import path from "path";
import Database from "better-sqlite3";

try { require("dotenv").config(); } catch { /* optional */ }

const SQLITE_PATH = process.env.SQLITE_PATH ?? path.join(process.cwd(), "data", "core.db");
const SCHEMA_PATH = path.join(__dirname, "../db/core_schema.sql");

function main() {
  const dir = path.dirname(SQLITE_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  if (!fs.existsSync(SCHEMA_PATH)) {
    throw new Error(`Schema not found: ${SCHEMA_PATH}`);
  }

  const db = new Database(SQLITE_PATH);
  db.pragma("journal_mode = WAL");
  db.pragma("foreign_keys = OFF");

  const sql = fs.readFileSync(SCHEMA_PATH, "utf8");
  db.exec(sql);

  const { user_version } = db.pragma("user_version", { simple: true }) as { user_version: number };
  console.log(`[OK] SQLite initialized at ${SQLITE_PATH}  (schema version: ${user_version})`);

  db.close();
}

main();
