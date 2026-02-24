#!/usr/bin/env ts-node
/**
 * init_db.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Initialises the SQLite database used by the JSON-document runtime layer
 * (api/src/lib/db.ts).  Creates the core tables and inserts seed users so the
 * API can accept logins immediately after a fresh setup.
 *
 * All inserts use OR IGNORE so the script is idempotent — safe to run more
 * than once.
 *
 * Usage:
 *   npm run db:init
 *   SQLITE_PATH=./data/other.sqlite npm run db:init
 *
 * Default credentials seeded:
 *   admin@plataforma.com   / Password123!  (role: ADMIN)
 *   directivo@epnorte.edu.ar / Password123! (role: DIRECTIVO)
 *   garcia@epnorte.edu.ar  / Password123!  (role: TEACHER)
 *   perez.alumno@epnorte.edu.ar / Password123! (role: USER)
 */

import Database from "better-sqlite3";
import crypto from "crypto";
import path from "path";
import fs from "fs";

try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("dotenv").config();
} catch {
  /* dotenv is optional */
}

// ── Password helpers (mirrors api/src/lib/passwords.ts) ────────────────────

const HASH_PREFIX = "pbkdf2";
const HASH_ITERATIONS = 100_000;
const HASH_KEY_LENGTH = 64;
const HASH_DIGEST = "sha256";

function hashPassword(password: string): string {
  const saltBuffer = crypto.randomBytes(16);
  const salt = saltBuffer.toString("hex");
  const derived = crypto
    .pbkdf2Sync(password, saltBuffer, HASH_ITERATIONS, HASH_KEY_LENGTH, HASH_DIGEST)
    .toString("hex");
  return `${HASH_PREFIX}$${HASH_ITERATIONS}$${salt}$${derived}`;
}

// ── Init ───────────────────────────────────────────────────────────────────

function initDb(dbPath: string): void {
  const dir = path.dirname(dbPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const db = new Database(dbPath);
  db.pragma("journal_mode = WAL");
  db.pragma("foreign_keys = ON");
  db.pragma("busy_timeout = 5000");

  console.log(`[init_db] DB: ${dbPath}`);

  // Create JSON-doc tables (same schema created by SqliteCollection in db.ts)
  db.exec(`CREATE TABLE IF NOT EXISTS "usuarios" (_id TEXT PRIMARY KEY, doc TEXT NOT NULL)`);
  db.exec(`CREATE TABLE IF NOT EXISTS "escuelas" (_id TEXT PRIMARY KEY, doc TEXT NOT NULL)`);

  const now = new Date().toISOString();
  const seedPassword = hashPassword("Password123!");

  // ── Escuela ──────────────────────────────────────────────────────────────
  db.prepare(`INSERT OR IGNORE INTO "escuelas" (_id, doc) VALUES (?, ?)`).run(
    "esc-0001",
    JSON.stringify({
      name: "Escuela Primaria Norte",
      code: "EPN-001",
      address: "Av. Siempre Viva 742, Buenos Aires",
      subscriptionStatus: "ACTIVE",
      plan: "ENTERPRISE_STD",
      isDeleted: false,
      createdAt: "2024-01-01T00:00:00.000Z",
      updatedAt: "2024-01-01T00:00:00.000Z"
    })
  );

  // ── Usuarios ─────────────────────────────────────────────────────────────
  const users: Array<[string, object]> = [
    [
      "usr-admin-001",
      {
        username: "admin.plataforma",
        email: "admin@plataforma.com",
        fullName: "Admin Plataforma",
        role: "ADMIN",
        schoolId: null,
        passwordHash: seedPassword,
        isDeleted: false,
        createdAt: now,
        updatedAt: now
      }
    ],
    [
      "usr-direc-001",
      {
        username: "directivo.norte",
        email: "directivo@epnorte.edu.ar",
        fullName: "María Directora",
        role: "DIRECTIVO",
        schoolId: "esc-0001",
        passwordHash: seedPassword,
        isDeleted: false,
        createdAt: now,
        updatedAt: now
      }
    ],
    [
      "usr-teach-001",
      {
        username: "prof.garcia",
        email: "garcia@epnorte.edu.ar",
        fullName: "Carlos García",
        role: "TEACHER",
        schoolId: "esc-0001",
        passwordHash: seedPassword,
        isDeleted: false,
        createdAt: now,
        updatedAt: now
      }
    ],
    [
      "usr-stude-001",
      {
        username: "alumno.perez",
        email: "perez.alumno@epnorte.edu.ar",
        fullName: "Juan Pérez",
        role: "USER",
        schoolId: "esc-0001",
        passwordHash: seedPassword,
        isDeleted: false,
        createdAt: now,
        updatedAt: now
      }
    ]
  ];

  const stmt = db.prepare(`INSERT OR IGNORE INTO "usuarios" (_id, doc) VALUES (?, ?)`);
  let inserted = 0;
  for (const [id, doc] of users) {
    const result = stmt.run(id, JSON.stringify(doc));
    if (result.changes > 0) inserted++;
  }

  if (inserted > 0) {
    console.log(`[init_db] Inserted ${inserted} user(s).`);
    console.log("[init_db] Default password for all users: Password123!");
    console.log("[init_db]   admin@plataforma.com        (ADMIN)");
    console.log("[init_db]   directivo@epnorte.edu.ar    (DIRECTIVO)");
    console.log("[init_db]   garcia@epnorte.edu.ar       (TEACHER)");
    console.log("[init_db]   perez.alumno@epnorte.edu.ar (USER)");
  } else {
    console.log("[init_db] All users already exist. Nothing inserted.");
  }

  db.close();
  console.log("[init_db] Done.");
}

// ── Entry point ────────────────────────────────────────────────────────────

if (require.main === module) {
  const dbPath =
    process.env.SQLITE_CORE_PATH ?? path.resolve(process.cwd(), "src", "base", "core_schema.sqlite");
  initDb(dbPath);
}

export { initDb };
