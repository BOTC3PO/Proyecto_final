#!/usr/bin/env node
/**
 * migrate_mongo_to_sqlite.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Migrador MongoDB → SQLite  (Fase 2)
 *
 * Uso:
 *   npx ts-node src/scripts/migrate_mongo_to_sqlite.ts
 *   npx ts-node src/scripts/migrate_mongo_to_sqlite.ts --fresh   # borra y recrea la DB
 *
 * Variables de entorno requeridas (o en .env):
 *   MONGO_URI         mongodb://localhost:27017/educational_platform
 *   SQLITE_PATH       ./data/core.db
 *
 * Dependencias:
 *   npm install mongodb better-sqlite3 dotenv
 *   npm install -D @types/better-sqlite3
 */

import fs from "fs";
import path from "path";
import crypto from "crypto";
import { MongoClient, ObjectId, Document } from "mongodb";
import Database from "better-sqlite3";

// ── env ──────────────────────────────────────────────────────────────────────
try { require("dotenv").config(); } catch { /* dotenv optional */ }

const MONGO_URI   = process.env.MONGO_URI   ?? "mongodb://localhost:27017/educational_platform";
const SQLITE_PATH = process.env.SQLITE_PATH ?? path.join(process.cwd(), "data", "core.db");
const SCHEMA_PATH = path.join(__dirname, "../db/core_schema.sql");
const FRESH       = process.argv.includes("--fresh");

// ── helpers ──────────────────────────────────────────────────────────────────

/** Convierte ObjectId o cualquier valor a string hex de 24 chars cuando aplica */
function toId(v: unknown): string | null {
  if (v == null) return null;
  if (v instanceof ObjectId) return v.toHexString();
  if (typeof v === "string" && /^[0-9a-fA-F]{24}$/.test(v)) return v;
  return String(v);
}

/** Date / string → ISO UTC string; null si undefined */
function toIso(v: unknown): string | null {
  if (v == null) return null;
  if (v instanceof Date) return v.toISOString();
  if (typeof v === "string") return new Date(v).toISOString();
  return null;
}

/** Genera un ID determinista de 24 chars (sha1 del input truncado) */
function deterministicId(...parts: unknown[]): string {
  const raw = parts.map(String).join(":");
  return crypto.createHash("sha1").update(raw).digest("hex").slice(0, 24);
}

/** Log de referencia rota — no aborta */
function warnDangling(ctx: string, field: string, id: string | null) {
  console.warn(`  [DANGLING] ${ctx}.${field} = ${id}`);
}

let danglingCount = 0;
let totalInserted = 0;

function log(msg: string) { console.log(msg); }

// ── SQLite bootstrap ─────────────────────────────────────────────────────────

function openSQLite(): Database.Database {
  if (FRESH && fs.existsSync(SQLITE_PATH)) {
    fs.unlinkSync(SQLITE_PATH);
    log(`[FRESH] Deleted existing SQLite at ${SQLITE_PATH}`);
  }
  const dir = path.dirname(SQLITE_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const db = new Database(SQLITE_PATH);
  db.pragma("journal_mode = WAL");
  db.pragma("foreign_keys = OFF"); // off durante carga masiva; on al verificar
  return db;
}

function applySchema(db: Database.Database) {
  if (!fs.existsSync(SCHEMA_PATH)) {
    throw new Error(`Schema not found at: ${SCHEMA_PATH}`);
  }
  const sql = fs.readFileSync(SCHEMA_PATH, "utf8");
  db.exec(sql);
  log("[SCHEMA] Applied core_schema.sql");
}

// ── colección helper ─────────────────────────────────────────────────────────

async function allDocs(mongo: MongoClient, dbName: string, collection: string): Promise<Document[]> {
  try {
    const docs = await mongo.db(dbName).collection(collection).find({}).toArray();
    return docs;
  } catch {
    log(`  [SKIP] Collection '${collection}' not found or empty`);
    return [];
  }
}

// ── migración por entidad ────────────────────────────────────────────────────

async function migrateEscuelas(db: Database.Database, mongo: MongoClient, dbName: string) {
  const docs = await allDocs(mongo, dbName, "escuelas");
  const stmt = db.prepare(`
    INSERT OR REPLACE INTO escuelas
      (id, name, code, address, subscription_status, plan, is_deleted, created_at, updated_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);
  const run = db.transaction((rows: Document[]) => {
    for (const d of rows) {
      stmt.run(
        toId(d._id), d.name ?? "", d.code ?? null, d.address ?? null,
        d.subscriptionStatus ?? null, d.plan ?? null,
        d.isDeleted ? 1 : 0,
        toIso(d.createdAt) ?? new Date().toISOString(),
        toIso(d.updatedAt) ?? null
      );
    }
  });
  run(docs);
  log(`  escuelas: ${docs.length} rows`);
  totalInserted += docs.length;
}

async function migrateUsuarios(db: Database.Database, mongo: MongoClient, dbName: string) {
  const docs = await allDocs(mongo, dbName, "usuarios");
  const stmt = db.prepare(`
    INSERT OR REPLACE INTO usuarios
      (id, username, email, full_name, role, escuela_id, password_hash, birthdate,
       guest_onboarding_status, privacy_consent, terms_accepted, consented_at,
       is_deleted, created_at, updated_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);
  const run = db.transaction((rows: Document[]) => {
    for (const d of rows) {
      const c = d.consents ?? {};
      stmt.run(
        toId(d._id), d.username ?? "", d.email ?? "", d.fullName ?? "",
        d.role ?? "USER", toId(d.escuelaId),
        d.passwordHash ?? null, toIso(d.birthdate),
        d.guestOnboardingStatus ?? null,
        c.privacyConsent ? 1 : null,
        c.termsAccepted ? 1 : null,
        toIso(c.consentedAt),
        d.isDeleted ? 1 : 0,
        toIso(d.createdAt) ?? new Date().toISOString(),
        toIso(d.updatedAt) ?? new Date().toISOString()
      );
    }
  });
  run(docs);
  log(`  usuarios: ${docs.length} rows`);
  totalInserted += docs.length;
}

async function migrateMembresias(db: Database.Database, mongo: MongoClient, dbName: string) {
  const docs = await allDocs(mongo, dbName, "membresias_escuela");
  const stmt = db.prepare(`
    INSERT OR REPLACE INTO membresias
      (usuario_id, escuela_id, rol, estado, fecha_alta, fecha_baja, created_at, updated_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `);
  const run = db.transaction((rows: Document[]) => {
    for (const d of rows) {
      stmt.run(
        toId(d.usuarioId), toId(d.escuelaId),
        d.rol ?? "", d.estado ?? "",
        toIso(d.fechaAlta) ?? new Date().toISOString(),
        toIso(d.fechaBaja),
        toIso(d.createdAt), toIso(d.updatedAt)
      );
    }
  });
  run(docs);
  log(`  membresias: ${docs.length} rows`);
  totalInserted += docs.length;
}

async function migrateClases(db: Database.Database, mongo: MongoClient, dbName: string) {
  const docs = await allDocs(mongo, dbName, "clases");

  const stmtClase = db.prepare(`
    INSERT OR REPLACE INTO clases
      (id, escuela_id, name, grade, code, is_deleted, created_at, updated_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `);
  const stmtMiembro = db.prepare(`
    INSERT OR IGNORE INTO clase_miembros (clase_id, usuario_id, rol_en_clase)
    VALUES (?, ?, ?)
  `);
  const stmtModulo = db.prepare(`
    INSERT OR REPLACE INTO clase_modulos (clase_id, modulo_id, assigned_at, required)
    VALUES (?, ?, ?, ?)
  `);
  const stmtPub = db.prepare(`
    INSERT OR REPLACE INTO clase_publicaciones
      (id, clase_id, author_id, title, body, links_json, is_pinned, published_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `);

  let miembros = 0, modulos = 0, publicaciones = 0;

  const run = db.transaction((rows: Document[]) => {
    for (const d of rows) {
      const claseId = toId(d._id)!;
      stmtClase.run(
        claseId, toId(d.escuelaId) ?? "",
        d.name ?? "", d.grade ?? "", d.code ?? null,
        d.isDeleted ? 1 : 0,
        toIso(d.createdAt) ?? new Date().toISOString(),
        toIso(d.updatedAt)
      );

      // Miembros
      const rolMap: Record<string, string> = {
        teacherIds: "TEACHER",
        adminIds:   "ADMIN",
        studentIds: "STUDENT",
      };
      for (const [field, rol] of Object.entries(rolMap)) {
        for (const uid of (d[field] ?? []) as ObjectId[]) {
          const usuarioId = toId(uid);
          if (!usuarioId) continue;
          stmtMiembro.run(claseId, usuarioId, rol);
          miembros++;
        }
      }

      // Módulos
      for (const m of (d.modules ?? []) as Document[]) {
        stmtModulo.run(
          claseId, String(m.moduleId ?? ""),
          toIso(m.assignedAt), m.required ? 1 : 0
        );
        modulos++;
      }

      // Publicaciones
      for (const p of (d.publications ?? []) as Document[]) {
        const pubId = deterministicId(claseId, toId(p.authorId), p.title, toIso(p.publishedAt));
        stmtPub.run(
          pubId, claseId,
          toId(p.authorId) ?? "",
          p.title ?? "", p.body ?? "",
          p.links ? JSON.stringify(p.links) : null,
          p.isPinned ? 1 : 0,
          toIso(p.publishedAt) ?? new Date().toISOString()
        );
        publicaciones++;
      }
    }
  });
  run(docs);
  log(`  clases: ${docs.length} rows | clase_miembros: ${miembros} | clase_modulos: ${modulos} | clase_publicaciones: ${publicaciones}`);
  totalInserted += docs.length + miembros + modulos + publicaciones;
}

async function migrateMensajes(db: Database.Database, mongo: MongoClient, dbName: string) {
  const docs = await allDocs(mongo, dbName, "mensajes");

  const stmtConv = db.prepare(`
    INSERT OR REPLACE INTO conversaciones
      (id, student_id, parent_id, class_id, last_message_from, last_message_preview,
       unread_for_admin, created_at, updated_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);
  const stmtItem = db.prepare(`
    INSERT OR REPLACE INTO mensajes_items
      (id, conversation_id, sender_id, body, sent_at)
    VALUES (?, ?, ?, ?, ?)
  `);

  let items = 0;
  const run = db.transaction((rows: Document[]) => {
    for (const d of rows) {
      const convId = toId(d._id)!;
      stmtConv.run(
        convId, toId(d.studentId) ?? "", toId(d.parentId) ?? "",
        toId(d.classId) ?? "",
        d.lastMessageFrom ?? null, d.lastMessagePreview ?? null,
        d.unreadForAdmin ? 1 : 0,
        toIso(d.createdAt) ?? new Date().toISOString(),
        toIso(d.updatedAt)
      );

      for (const m of (d.messages ?? []) as Document[]) {
        const itemId = deterministicId(convId, toId(m.senderId), m.body, toIso(m.sentAt));
        stmtItem.run(
          itemId, convId, toId(m.senderId) ?? "",
          m.body ?? "", toIso(m.sentAt) ?? new Date().toISOString()
        );
        items++;
      }
    }
  });
  run(docs);
  log(`  conversaciones: ${docs.length} rows | mensajes_items: ${items}`);
  totalInserted += docs.length + items;
}

async function migrateTransferencias(db: Database.Database, mongo: MongoClient, dbName: string) {
  const docs = await allDocs(mongo, dbName, "transferencias");
  const stmt = db.prepare(`
    INSERT OR REPLACE INTO transferencias
      (id, student_id, from_school_id, to_school_id, status, created_at, updated_at)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `);
  const run = db.transaction((rows: Document[]) => {
    for (const d of rows) {
      stmt.run(
        toId(d._id), toId(d.studentId) ?? "",
        toId(d.fromSchoolId) ?? "", toId(d.toSchoolId) ?? "",
        d.status ?? "", toIso(d.createdAt) ?? new Date().toISOString(),
        toIso(d.updatedAt)
      );
    }
  });
  run(docs);
  log(`  transferencias: ${docs.length} rows`);
  totalInserted += docs.length;
}

async function migrateEconomiaConfig(db: Database.Database, mongo: MongoClient, dbName: string) {
  const docs = await allDocs(mongo, dbName, "economia_config");
  const stmt = db.prepare(`
    INSERT OR REPLACE INTO economia_config (id, json, updated_at)
    VALUES (?, ?, ?)
  `);
  const run = db.transaction((rows: Document[]) => {
    for (const d of rows) {
      const { _id, updatedAt, ...rest } = d;
      stmt.run(
        d.id ?? toId(_id) ?? "default",
        JSON.stringify(rest),
        toIso(updatedAt) ?? new Date().toISOString()
      );
    }
  });
  run(docs);
  log(`  economia_config: ${docs.length} rows`);
  totalInserted += docs.length;
}

/** Fusiona billeteras + economia_saldos en saldos_usuario */
async function migrateSaldos(db: Database.Database, mongo: MongoClient, dbName: string) {
  const billeteras  = await allDocs(mongo, dbName, "billeteras");
  const ecoSaldos   = await allDocs(mongo, dbName, "economia_saldos");

  const stmt = db.prepare(`
    INSERT OR REPLACE INTO saldos_usuario (usuario_id, moneda, saldo, updated_at)
    VALUES (?, ?, ?, ?)
  `);

  const run = db.transaction(() => {
    for (const d of billeteras) {
      stmt.run(
        toId(d.usuarioId), d.moneda ?? "ARS",
        d.saldo ?? 0, toIso(d.updatedAt) ?? new Date().toISOString()
      );
    }
    for (const d of ecoSaldos) {
      // Upsert: si ya existe (de billeteras), reemplaza con el valor de economia_saldos
      stmt.run(
        toId(d.usuarioId), d.moneda ?? "ARS",
        d.saldo ?? 0, toIso(d.updatedAt) ?? new Date().toISOString()
      );
    }
  });
  run();
  log(`  saldos_usuario: billeteras=${billeteras.length} + economia_saldos=${ecoSaldos.length}`);
  totalInserted += billeteras.length + ecoSaldos.length;
}

/** Fusiona movimientos_billetera + economia_transacciones en ledger_movimientos */
async function migrateLedger(db: Database.Database, mongo: MongoClient, dbName: string) {
  const movBilletera    = await allDocs(mongo, dbName, "movimientos_billetera");
  const ecoTransacciones = await allDocs(mongo, dbName, "economia_transacciones");

  // Necesitamos resolver usuarioId para movimientos_billetera via billeteraId → usuarioId
  const billeteras = await allDocs(mongo, dbName, "billeteras");
  const billeteraToUsuario = new Map<string, string>();
  for (const b of billeteras) {
    const bid = toId(b._id);
    const uid = toId(b.usuarioId);
    if (bid && uid) billeteraToUsuario.set(bid, uid);
  }

  const stmt = db.prepare(`
    INSERT OR REPLACE INTO ledger_movimientos
      (id, usuario_id, tipo, monto, moneda, motivo, origen, referencia_id, referencia_tipo, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  let count = 0;
  const run = db.transaction(() => {
    // movimientos_billetera (no tienen id propio; generar determinista)
    for (const d of movBilletera) {
      const bid = toId(d.billeteraId);
      const uid = bid ? billeteraToUsuario.get(bid) ?? null : null;
      if (!uid) { warnDangling("movimientos_billetera", "billeteraId", bid); danglingCount++; continue; }
      const id = toId(d._id) ?? deterministicId(bid, d.motivo, d.origen, toIso(d.fecha));
      stmt.run(
        id, uid, d.tipo ?? "credito",
        d.monto ?? 0, "ARS",
        d.motivo ?? "", d.origen ?? null,
        bid, "billetera",
        toIso(d.fecha) ?? new Date().toISOString()
      );
      count++;
    }

    // economia_transacciones
    for (const d of ecoTransacciones) {
      const id = d.id ?? toId(d._id) ?? deterministicId(toId(d.usuarioId), d.motivo, toIso(d.createdAt));
      stmt.run(
        id, toId(d.usuarioId) ?? "",
        d.tipo ?? "credito", d.monto ?? 0,
        d.moneda ?? "ARS", d.motivo ?? "",
        d.aulaId ?? null, d.referenciaId ?? null, null,
        toIso(d.createdAt) ?? new Date().toISOString()
      );
      count++;
    }
  });
  run();
  log(`  ledger_movimientos: ${count} rows (mov_billetera=${movBilletera.length} + eco_transacciones=${ecoTransacciones.length})`);
  totalInserted += count;
}

async function migrateEconomiaRecompensas(db: Database.Database, mongo: MongoClient, dbName: string) {
  const docs = await allDocs(mongo, dbName, "economia_recompensas");
  const stmt = db.prepare(`
    INSERT OR REPLACE INTO economia_recompensas
      (id, tipo, referencia_id, nombre, descripcion, monto, moneda, activo, updated_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);
  const run = db.transaction((rows: Document[]) => {
    for (const d of rows) {
      stmt.run(
        d.id ?? toId(d._id), d.tipo ?? "", d.referenciaId ?? "",
        d.nombre ?? "", d.descripcion ?? null,
        d.monto ?? 0, d.moneda ?? "ARS",
        d.activo ? 1 : 0,
        toIso(d.updatedAt) ?? new Date().toISOString()
      );
    }
  });
  run(docs);
  log(`  economia_recompensas: ${docs.length} rows`);
  totalInserted += docs.length;
}

async function migrateEconomiaModulos(db: Database.Database, mongo: MongoClient, dbName: string) {
  const docs = await allDocs(mongo, dbName, "economia_modulos");
  const stmt = db.prepare(`
    INSERT OR REPLACE INTO economia_modulos (modulo_id, activo, updated_at)
    VALUES (?, ?, ?)
  `);
  const run = db.transaction((rows: Document[]) => {
    for (const d of rows) {
      stmt.run(
        d.moduloId ?? toId(d._id),
        d.activo ? 1 : 0,
        toIso(d.updatedAt) ?? new Date().toISOString()
      );
    }
  });
  run(docs);
  log(`  economia_modulos: ${docs.length} rows`);
  totalInserted += docs.length;
}

async function migrateEconomiaEventos(db: Database.Database, mongo: MongoClient, dbName: string) {
  const docs = await allDocs(mongo, dbName, "economia_eventos");
  const stmt = db.prepare(`
    INSERT OR REPLACE INTO economia_eventos
      (id, nombre, tipo, descripcion, tasa, activo, updated_at)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `);
  const run = db.transaction((rows: Document[]) => {
    for (const d of rows) {
      stmt.run(
        d.id ?? toId(d._id), d.nombre ?? "", d.tipo ?? "",
        d.descripcion ?? null, d.tasa ?? null,
        d.activo ? 1 : 0,
        toIso(d.updatedAt) ?? new Date().toISOString()
      );
    }
  });
  run(docs);
  log(`  economia_eventos: ${docs.length} rows`);
  totalInserted += docs.length;
}

async function migrateEconomiaRiesgoCursos(db: Database.Database, mongo: MongoClient, dbName: string) {
  const docs = await allDocs(mongo, dbName, "economia_riesgo_cursos");
  const stmt = db.prepare(`
    INSERT OR REPLACE INTO economia_riesgo_cursos
      (aula_id, riesgo_base, riesgo_mercado, riesgo_credito, updated_at)
    VALUES (?, ?, ?, ?, ?)
  `);
  const run = db.transaction((rows: Document[]) => {
    for (const d of rows) {
      stmt.run(
        d.aulaId ?? toId(d._id),
        d.riesgoBase ?? 0, d.riesgoMercado ?? 0, d.riesgoCredito ?? 0,
        toIso(d.updatedAt) ?? new Date().toISOString()
      );
    }
  });
  run(docs);
  log(`  economia_riesgo_cursos: ${docs.length} rows`);
  totalInserted += docs.length;
}

// ── verificación final ────────────────────────────────────────────────────────

function verify(db: Database.Database) {
  log("\n[VERIFY] Row counts:");
  const tables = [
    "escuelas", "usuarios", "membresias",
    "clases", "clase_miembros", "clase_modulos", "clase_publicaciones",
    "conversaciones", "mensajes_items",
    "transferencias",
    "economia_config", "saldos_usuario", "ledger_movimientos",
    "economia_recompensas", "economia_modulos", "economia_eventos", "economia_riesgo_cursos"
  ];
  for (const t of tables) {
    const row = db.prepare(`SELECT COUNT(*) AS n FROM ${t}`).get() as { n: number };
    log(`  ${t.padEnd(28)} ${row.n}`);
  }

  log("\n[VERIFY] Foreign key check:");
  db.pragma("foreign_keys = ON");
  const fkErrors = db.pragma("foreign_key_check") as unknown[];
  if (fkErrors.length === 0) {
    log("  ✓ No foreign key violations");
  } else {
    console.warn(`  ⚠ ${fkErrors.length} FK violations:`);
    console.warn(JSON.stringify(fkErrors, null, 2));
  }
}

// ── main ──────────────────────────────────────────────────────────────────────

async function main() {
  const mongoUri = MONGO_URI;
  const [, , dbName] = mongoUri.match(/\/([^/?]+)(\?|$)/) ?? [, , "educational_platform"];

  log("=".repeat(60));
  log("  MongoDB → SQLite Migration");
  log(`  Mongo:  ${mongoUri}`);
  log(`  SQLite: ${SQLITE_PATH}`);
  log(`  DB:     ${dbName}`);
  log(`  Mode:   ${FRESH ? "FRESH (drop + recreate)" : "UPSERT (idempotent)"}`);
  log("=".repeat(60));

  const mongo = new MongoClient(mongoUri);
  await mongo.connect();
  log("[MONGO] Connected");

  const db = openSQLite();
  applySchema(db);

  // Orden respeta dependencias FK
  log("\n[MIGRATE] Starting...");
  await migrateEscuelas(db, mongo, dbName);
  await migrateUsuarios(db, mongo, dbName);
  await migrateMembresias(db, mongo, dbName);
  await migrateClases(db, mongo, dbName);
  await migrateMensajes(db, mongo, dbName);
  await migrateTransferencias(db, mongo, dbName);
  await migrateEconomiaConfig(db, mongo, dbName);
  await migrateSaldos(db, mongo, dbName);
  await migrateLedger(db, mongo, dbName);
  await migrateEconomiaRecompensas(db, mongo, dbName);
  await migrateEconomiaModulos(db, mongo, dbName);
  await migrateEconomiaEventos(db, mongo, dbName);
  await migrateEconomiaRiesgoCursos(db, mongo, dbName);

  verify(db);

  log(`\n[DONE] Total rows inserted/replaced: ${totalInserted}`);
  if (danglingCount > 0) {
    log(`[WARN]  Dangling references skipped: ${danglingCount}`);
  }

  await mongo.close();
  db.close();
}

main().catch((err) => {
  console.error("[FATAL]", err);
  process.exit(1);
});
