-- ============================================================
-- Migration 001 — Generator configs, governance & suggestions
-- Target: modulos_quizzes.sqlite  (content DB)
-- ============================================================

-- ── Generator catalogue ───────────────────────────────────────
-- One row per generator. Subtipos, enunciados y limits son JSON.
-- La gobernanza opera sobre estas filas directamente.

CREATE TABLE IF NOT EXISTS generator_configs (
  id               TEXT NOT NULL PRIMARY KEY,  -- "biologia/biologia", "economia/contabilidad"
  materia          TEXT NOT NULL,              -- "Biología", "Economía"
  label            TEXT NOT NULL,              -- nombre visible en el picker
  description      TEXT,                       -- descripción corta para el docente
  version          INTEGER NOT NULL DEFAULT 1,

  -- JSON: [{ id, label, activo, peso }]
  -- 'activo' permite desactivar un subtipo sin borrar el generador
  subtipos         TEXT NOT NULL DEFAULT '[]',

  -- JSON: plantillas de enunciado por subtipo
  -- { "genetica_mendel": "En un cruce {{cruce}}, ¿qué proporción...?" }
  enunciados       TEXT NOT NULL DEFAULT '{}',

  -- JSON: límites por subtipo y dificultad
  -- { "genetica_mendel": { "basico": { rangos: {}, reglas: {} }, ... } }
  limits           TEXT NOT NULL DEFAULT '{}',

  -- ACTIVE | INACTIVE
  status           TEXT NOT NULL DEFAULT 'ACTIVE',

  created_at       TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at       TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_generator_configs_materia
  ON generator_configs (materia);

CREATE INDEX IF NOT EXISTS idx_generator_configs_status
  ON generator_configs (status);


-- ── Governance proposals ──────────────────────────────────────
-- Solo cubre generadores (ejercicios + límites).
-- Roles habilitados para crear/votar: profesor, directivo, admin.

CREATE TABLE IF NOT EXISTS governance_proposals (
  id               TEXT NOT NULL PRIMARY KEY,

  -- CREATE_GENERATOR | UPDATE_GENERATOR | SET_GENERATOR_STATUS
  proposal_type    TEXT NOT NULL,

  -- id del generador afectado (puede ser null si es CREATE_GENERATOR nuevo)
  generator_id     TEXT,

  title            TEXT NOT NULL,
  description      TEXT,

  -- JSON con el payload completo de la propuesta
  -- Para CREATE_GENERATOR: { materia, label, subtipos, enunciados, limits }
  -- Para UPDATE_GENERATOR: { subtipos?, enunciados?, limits? }
  -- Para SET_GENERATOR_STATUS: { status: "ACTIVE"|"INACTIVE" }
  payload          TEXT NOT NULL DEFAULT '{}',

  -- OPEN | APPROVED | REJECTED | APPLIED
  status           TEXT NOT NULL DEFAULT 'OPEN',

  created_by       TEXT NOT NULL,  -- user id
  created_at       TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at       TEXT NOT NULL DEFAULT (datetime('now')),

  -- Solo admin puede marcar como APPLIED
  applied_by       TEXT,
  applied_at       TEXT
);

CREATE INDEX IF NOT EXISTS idx_governance_proposals_status
  ON governance_proposals (status);

CREATE INDEX IF NOT EXISTS idx_governance_proposals_generator
  ON governance_proposals (generator_id);


-- ── Governance votes ──────────────────────────────────────────
-- Un voto por usuario por propuesta.

CREATE TABLE IF NOT EXISTS governance_votes (
  id               TEXT NOT NULL PRIMARY KEY,
  proposal_id      TEXT NOT NULL REFERENCES governance_proposals (id),
  user_id          TEXT NOT NULL,
  -- APPROVE | REJECT
  vote             TEXT NOT NULL,
  comment          TEXT,
  voted_at         TEXT NOT NULL DEFAULT (datetime('now')),

  UNIQUE (proposal_id, user_id)
);

CREATE INDEX IF NOT EXISTS idx_governance_votes_proposal
  ON governance_votes (proposal_id);


-- ── Changelog ─────────────────────────────────────────────────
-- El admin publica entradas cuando aplica cambios.
-- Visible públicamente, ordenado de más nuevo a más viejo.

CREATE TABLE IF NOT EXISTS changelog_entries (
  id               TEXT NOT NULL PRIMARY KEY,
  title            TEXT NOT NULL,
  body             TEXT NOT NULL,  -- texto libre, puede ser markdown
  -- GENERATOR | CONTENT | PLATFORM
  category         TEXT NOT NULL DEFAULT 'GENERATOR',
  -- referencia opcional al proposal que originó el cambio
  proposal_id      TEXT,
  published_by     TEXT NOT NULL,  -- admin user id
  published_at     TEXT NOT NULL DEFAULT (datetime('now'))
);


-- ── Suggestions ───────────────────────────────────────────────
-- Cualquier usuario puede crear una sugerencia.
-- No tiene votación — le llega al admin como información.
-- El admin decide si abre soporte, crea propuesta formal, o descarta.

CREATE TABLE IF NOT EXISTS suggestions (
  id               TEXT NOT NULL PRIMARY KEY,

  -- ERRATA | MEJORA | CONTENIDO
  suggestion_type  TEXT NOT NULL,

  -- referencia opcional: generador, módulo, etc.
  target_type      TEXT,   -- "generator" | "module" | "quiz"
  target_id        TEXT,

  title            TEXT NOT NULL,
  body             TEXT NOT NULL,

  created_by       TEXT NOT NULL,  -- user id (cualquier rol)
  created_at       TEXT NOT NULL DEFAULT (datetime('now')),

  -- PENDING | REVIEWED | DISCARDED
  status           TEXT NOT NULL DEFAULT 'PENDING',
  reviewed_by      TEXT,   -- admin user id
  reviewed_at      TEXT,
  admin_note       TEXT    -- nota interna del admin al revisar
);

CREATE INDEX IF NOT EXISTS idx_suggestions_status
  ON suggestions (status);

CREATE INDEX IF NOT EXISTS idx_suggestions_target
  ON suggestions (target_type, target_id);
