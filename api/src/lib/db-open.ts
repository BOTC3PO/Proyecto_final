// DB singletons, field-name mapping utilities, and shared helpers

import Database from "better-sqlite3";
import path from "path";
import fs from "fs";
import { ENV } from "./env";
import type { Param } from "./db-types";

// ── DB Singletons ─────────────────────────────────────────────────────────────

let _coreDb: InstanceType<typeof Database> | null = null;
let _contentDb: InstanceType<typeof Database> | null = null;

function openDbFile(dbPath: string): InstanceType<typeof Database> {
  const abs = path.isAbsolute(dbPath) ? dbPath : path.resolve(process.cwd(), dbPath);
  const dir = path.dirname(abs);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  const db = new Database(abs);
  db.pragma("journal_mode = WAL");
  db.pragma("foreign_keys = ON");
  db.pragma("busy_timeout = 5000");
  return db;
}

/** Opens (or returns) the core_schema.sqlite singleton */
export function openCoreDb(): InstanceType<typeof Database> {
  if (!_coreDb) _coreDb = openDbFile(ENV.SQLITE_CORE_PATH);
  return _coreDb;
}

/** Opens (or returns) the modulos_quizzes.sqlite singleton */
export function openContentDb(): InstanceType<typeof Database> {
  if (!_contentDb) _contentDb = openDbFile(ENV.SQLITE_CONTENT_PATH);
  return _contentDb;
}

/** Backward-compat alias – used by index.ts startup check */
export function openSqlite(): InstanceType<typeof Database> {
  return openCoreDb();
}

// ── Field-name mapping ────────────────────────────────────────────────────────

/**
 * Per-collection explicit overrides: camelCase field → snake_case column.
 * Used when auto-conversion would produce the wrong column name
 * (e.g. schoolId → school_id instead of escuela_id).
 */
const FIELD_COL_OVERRIDES: Record<string, Record<string, string>> = {
  usuarios:           { schoolId: "escuela_id", escuelaId: "escuela_id" },
  clases:             { schoolId: "escuela_id", escuelaId: "escuela_id" },
  aulas:              { schoolId: "escuela_id", escuelaId: "escuela_id" },
  membresias:         { usuarioId: "usuario_id", escuelaId: "escuela_id", schoolId: "escuela_id" },
  membresias_escuela: { usuarioId: "usuario_id", escuelaId: "escuela_id", schoolId: "escuela_id" },
};

/** camelCase field name → snake_case column name (with explicit overrides) */
export function fieldToCol(collName: string, field: string): string {
  if (field === "_id") return "id";
  const ov = FIELD_COL_OVERRIDES[collName];
  if (ov?.[field]) return ov[field];
  return field.replace(/[A-Z]/g, (c) => `_${c.toLowerCase()}`);
}

/** snake_case column name → camelCase field name */
export function colToField(col: string): string {
  if (col === "id") return "_id";
  return col.replace(/_([a-z])/g, (_, c: string) => c.toUpperCase());
}

// ── Shared query helpers ──────────────────────────────────────────────────────

/** Coerce any JS value to a SQLite-safe param */
export function toParam(v: unknown): Param {
  if (v === true)  return 1;
  if (v === false) return 0;
  if (v === null || v === undefined) return null;
  if (v instanceof Date) return v.toISOString();
  if (typeof v === "object") return String(v);
  return v as Param;
}

/** Returns true if val is a MongoDB-style operator object like { $gt: 5 } */
export function isOpObject(val: unknown): val is Record<string, unknown> {
  if (!val || typeof val !== "object" || Array.isArray(val) || val instanceof Date) return false;
  return Object.keys(val as object).some((k) => k.startsWith("$"));
}

/** json_extract expression for JsonDocCollection WHERE clauses */
export function jsonPath(field: string): string {
  if (field === "_id") return "_id";
  return `json_extract(doc, '$.${field}')`;
}
