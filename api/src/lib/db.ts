// Main entry point for the DB layer.
// Exports:
//   openSqlite()  – backward-compat alias → openCoreDb() (used by index.ts)
//   getDb()       – returns the SmartDb singleton
//   Db            – type alias for SmartDb (used by routes)
//
// SmartDb.collection(name) routes to:
//   SchemaCollection  – for known tables in core_schema.sqlite / modulos_quizzes.sqlite
//   JsonDocCollection – fallback JSON-doc store for any unknown collection name

import type { Doc } from "./db-types";
import { openCoreDb, openContentDb } from "./db-open";
import { SchemaCollection }  from "./db-schema";
import { JsonDocCollection } from "./db-jdoc";

// Re-export openSqlite for index.ts startup check
export { openSqlite } from "./db-open";

// ── Collection routing table ──────────────────────────────────────────────────

type CollTarget = { dbType: "core" | "content"; table: string };

const COLLECTION_TARGETS: Record<string, CollTarget> = {
  // ── core_schema.sqlite ─────────────────────────────────────────────────────
  usuarios:               { dbType: "core",    table: "usuarios" },
  escuelas:               { dbType: "core",    table: "escuelas" },
  membresias:             { dbType: "core",    table: "membresias" },
  membresias_escuela:     { dbType: "core",    table: "membresias" },
  clases:                 { dbType: "core",    table: "clases" },
  aulas:                  { dbType: "core",    table: "clases" },
  clase_miembros:         { dbType: "core",    table: "clase_miembros" },
  clase_modulos:          { dbType: "core",    table: "clase_modulos" },
  clase_publicaciones:    { dbType: "core",    table: "clase_publicaciones" },
  conversaciones:         { dbType: "core",    table: "conversaciones" },
  mensajes_items:         { dbType: "core",    table: "mensajes_items" },
  transferencias:         { dbType: "core",    table: "transferencias" },
  economia_config:        { dbType: "core",    table: "economia_config" },
  saldos_usuario:         { dbType: "core",    table: "saldos_usuario" },
  ledger_movimientos:     { dbType: "core",    table: "ledger_movimientos" },
  economia_recompensas:   { dbType: "core",    table: "economia_recompensas" },
  economia_modulos:       { dbType: "core",    table: "economia_modulos" },
  economia_eventos:       { dbType: "core",    table: "economia_eventos" },
  economia_riesgo_cursos: { dbType: "core",    table: "economia_riesgo_cursos" },
  // ── modulos_quizzes.sqlite ─────────────────────────────────────────────────
  modulos:                { dbType: "content", table: "modulos" },
  teoria_json:            { dbType: "content", table: "teoria_json" },
  tuesdayjs_docs:         { dbType: "content", table: "tuesdayjs_docs" },
  libros_json:            { dbType: "content", table: "libros_json" },
  bloques_json:           { dbType: "content", table: "bloques_json" },
  quizzes:                { dbType: "content", table: "quizzes" },
  quiz_question_sets:     { dbType: "content", table: "quiz_question_sets" },
  quiz_versions:          { dbType: "content", table: "quiz_versions" },
  quiz_attempts:          { dbType: "content", table: "quiz_attempts" },
  generator_configs:      { dbType: "content", table: "generator_configs" },
  suggestions:            { dbType: "content", table: "suggestions" },
};

// ── SmartDb ───────────────────────────────────────────────────────────────────

class SmartDb {
  // Keyed by "dbType:table" to avoid instantiating the same table twice
  private schemaCache = new Map<string, SchemaCollection>();
  private jdocCache   = new Map<string, JsonDocCollection>();

  collection<T extends Doc = Doc>(
    name: string
  ): SchemaCollection<T> | JsonDocCollection<T> {
    const target = COLLECTION_TARGETS[name];

    if (target) {
      const key = `${target.dbType}:${target.table}`;
      if (!this.schemaCache.has(key)) {
        const db = target.dbType === "core" ? openCoreDb() : openContentDb();
        // Pass the original collection name (e.g. "aulas") so field overrides
        // are looked up correctly even when the table name differs ("clases").
        this.schemaCache.set(key, new SchemaCollection(db, target.table, name));
      }
      return this.schemaCache.get(key) as unknown as SchemaCollection<T>;
    }

    // Unknown collection → JSON-doc fallback in core_schema.sqlite
    if (!this.jdocCache.has(name)) {
      this.jdocCache.set(name, new JsonDocCollection(openCoreDb(), name));
    }
    return this.jdocCache.get(name) as unknown as JsonDocCollection<T>;
  }

  command(_cmd: Doc): Doc { return { ok: 1 }; }
}

export type { SmartDb as Db };

// ── Singleton ─────────────────────────────────────────────────────────────────

let _instance: SmartDb | null = null;

export async function getDb(): Promise<SmartDb> {
  if (!_instance) _instance = new SmartDb();
  return _instance;
}
