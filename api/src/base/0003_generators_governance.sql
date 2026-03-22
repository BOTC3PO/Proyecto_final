-- =============================================================================
-- Migration 0003 — Generator configs, governance, changelog, suggestions
-- Target DB:  modulos_quizzes.sqlite  (content DB — ENV.SQLITE_CONTENT_PATH)
-- Depends on: 0001_init.sql (modulos, quizzes, quiz_versions, usuarios)
--
-- Para aplicar:
--   npm run db:sqlite:migrate
-- o manualmente:
--   sqlite3 $SQLITE_CONTENT_PATH < api/sql/migrations/0003_generators_governance.sql
-- =============================================================================

PRAGMA foreign_keys = ON;
PRAGMA user_version = 3;

-- =============================================================================
-- GENERATOR_CONFIGS
-- Catálogo de generadores de cuestionarios disponibles en la plataforma.
-- Cada fila representa un generador con su configuración editable.
-- La gobernanza opera sobre estas filas (activar, modificar limits, agregar).
-- La relación con quizzes va por quiz_versions.generator_id → generator_configs.id
-- =============================================================================
CREATE TABLE IF NOT EXISTS generator_configs (
  id               TEXT NOT NULL PRIMARY KEY,
  -- Ejemplos: "biologia/biologia", "economia/contabilidad", "informatica/informatica"
  -- Debe coincidir con generator_id en quiz_versions

  materia          TEXT NOT NULL,
  -- Valor visible: "Biología", "Economía", "Informática"
  -- Debe coincidir con el subject en MODULE_SUBJECT_CAPABILITIES del frontend

  label            TEXT NOT NULL,
  -- Nombre visible en el picker del ModuloEditor

  description      TEXT,
  -- Descripción corta para el docente

  version          INTEGER NOT NULL DEFAULT 1,
  -- Versión del esquema de configuración (no del generador en sí)

  -- JSON: array de subtipos disponibles
  -- [{ "id": "genetica_mendel", "label": "Genética de Mendel", "activo": true, "peso": 1 }]
  -- "activo" permite desactivar un subtipo sin tocar código
  -- "peso" define la probabilidad relativa de selección aleatoria
  subtipos         TEXT NOT NULL DEFAULT '[]'
                   CHECK (json_valid(subtipos) AND json_type(subtipos) = 'array'),

  -- JSON: plantillas de enunciado por subtipo
  -- { "genetica_mendel": "En el cruce {{cruce}}, ¿cuál es la proporción de {{fenotipo}}?" }
  -- Si está vacío, el generador usa sus enunciados internos (hardcodeados en el .ts)
  enunciados       TEXT NOT NULL DEFAULT '{}'
                   CHECK (json_valid(enunciados)),

  -- JSON: límites por subtipo y dificultad
  -- {
  --   "genetica_mendel": {
  --     "basico":      { "rangos": {}, "reglas": { "evitarCeros": true } },
  --     "intermedio":  { "rangos": {}, "reglas": {} },
  --     "avanzado":    { "rangos": {}, "reglas": {} }
  --   }
  -- }
  -- Si está vacío, el generador usa sus límites internos
  limits           TEXT NOT NULL DEFAULT '{}'
                   CHECK (json_valid(limits)),

  -- ACTIVE | INACTIVE
  -- INACTIVE oculta el generador del picker y bloquea la creación de nuevos quizzes
  -- Los quizzes existentes con este generador no se ven afectados
  status           TEXT NOT NULL DEFAULT 'ACTIVE'
                   CHECK (status IN ('ACTIVE', 'INACTIVE')),

  created_at       TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at       TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_generator_configs_materia
  ON generator_configs (materia);

CREATE INDEX IF NOT EXISTS idx_generator_configs_status
  ON generator_configs (status);


-- =============================================================================
-- GOVERNANCE_PROPOSALS
-- Propuestas formales de cambio sobre generadores.
-- Roles habilitados para crear y votar: profesor, directivo, admin.
-- Solo el admin puede marcar como APPLIED y generar el changelog.
--
-- Tipos de propuesta:
--   CREATE_GENERATOR  — proponer un generador nuevo
--   UPDATE_GENERATOR  — modificar subtipos, enunciados o limits de uno existente
--   SET_GENERATOR_STATUS — activar o desactivar un generador
-- =============================================================================
CREATE TABLE IF NOT EXISTS governance_proposals (
  id               TEXT NOT NULL PRIMARY KEY,

  proposal_type    TEXT NOT NULL
                   CHECK (proposal_type IN (
                     'CREATE_GENERATOR',
                     'UPDATE_GENERATOR',
                     'SET_GENERATOR_STATUS'
                   )),

  -- NULL cuando proposal_type = 'CREATE_GENERATOR' y el generador todavía no existe
  generator_id     TEXT
                   REFERENCES generator_configs (id) ON DELETE SET NULL,

  title            TEXT NOT NULL,
  description      TEXT,

  -- JSON con el detalle de la propuesta según proposal_type:
  --
  -- CREATE_GENERATOR:
  --   { "id", "materia", "label", "description", "subtipos", "enunciados", "limits" }
  --
  -- UPDATE_GENERATOR:
  --   { "subtipos"?: [...], "enunciados"?: {...}, "limits"?: {...} }
  --   Solo los campos presentes se actualizan
  --
  -- SET_GENERATOR_STATUS:
  --   { "status": "ACTIVE" | "INACTIVE" }
  payload          TEXT NOT NULL DEFAULT '{}'
                   CHECK (json_valid(payload)),

  -- OPEN     — recibiendo votos
  -- APPROVED — umbral alcanzado, pendiente de aplicar por el admin
  -- REJECTED — no alcanzó el umbral o fue rechazada
  -- APPLIED  — el admin la aplicó (genera entrada en changelog)
  status           TEXT NOT NULL DEFAULT 'OPEN'
                   CHECK (status IN ('OPEN', 'APPROVED', 'REJECTED', 'APPLIED')),

  created_by       TEXT NOT NULL REFERENCES usuarios (id) ON DELETE RESTRICT,
  created_at       TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at       TEXT NOT NULL DEFAULT (datetime('now')),

  -- Quién la aplicó y cuándo (solo admin)
  applied_by       TEXT REFERENCES usuarios (id) ON DELETE SET NULL,
  applied_at       TEXT
);

CREATE INDEX IF NOT EXISTS idx_gov_proposals_status
  ON governance_proposals (status);

CREATE INDEX IF NOT EXISTS idx_gov_proposals_generator
  ON governance_proposals (generator_id);

CREATE INDEX IF NOT EXISTS idx_gov_proposals_created_by
  ON governance_proposals (created_by);


-- =============================================================================
-- GOVERNANCE_VOTES
-- Un voto por usuario por propuesta.
-- La lógica de umbral (mayoría simple, supermayoría) vive en la API.
-- =============================================================================
CREATE TABLE IF NOT EXISTS governance_votes (
  id           TEXT NOT NULL PRIMARY KEY,
  proposal_id  TEXT NOT NULL REFERENCES governance_proposals (id) ON DELETE CASCADE,
  user_id      TEXT NOT NULL REFERENCES usuarios (id) ON DELETE CASCADE,

  -- APPROVE | REJECT
  vote         TEXT NOT NULL CHECK (vote IN ('APPROVE', 'REJECT')),

  comment      TEXT,
  voted_at     TEXT NOT NULL DEFAULT (datetime('now')),

  -- Un solo voto por usuario por propuesta
  UNIQUE (proposal_id, user_id)
);

CREATE INDEX IF NOT EXISTS idx_gov_votes_proposal
  ON governance_votes (proposal_id);

CREATE INDEX IF NOT EXISTS idx_gov_votes_user
  ON governance_votes (user_id);


-- =============================================================================
-- CHANGELOG_ENTRIES
-- El admin publica entradas cuando aplica cambios aprobados.
-- Visible públicamente, ordenado de más nuevo a más viejo.
-- =============================================================================
CREATE TABLE IF NOT EXISTS changelog_entries (
  id           TEXT NOT NULL PRIMARY KEY,
  title        TEXT NOT NULL,

  -- Texto libre (puede ser markdown)
  body         TEXT NOT NULL,

  -- GENERATOR | CONTENT | PLATFORM
  category     TEXT NOT NULL DEFAULT 'GENERATOR'
               CHECK (category IN ('GENERATOR', 'CONTENT', 'PLATFORM')),

  -- Referencia opcional al proposal que originó el cambio
  proposal_id  TEXT REFERENCES governance_proposals (id) ON DELETE SET NULL,

  -- Referencia opcional al generador afectado
  generator_id TEXT REFERENCES generator_configs (id) ON DELETE SET NULL,

  published_by TEXT NOT NULL REFERENCES usuarios (id) ON DELETE RESTRICT,
  published_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_changelog_published
  ON changelog_entries (published_at DESC);

CREATE INDEX IF NOT EXISTS idx_changelog_category
  ON changelog_entries (category);


-- =============================================================================
-- SUGGESTIONS
-- Cualquier usuario registrado puede crear una sugerencia.
-- No tiene votación — le llega al admin como información.
-- El admin decide si abre soporte, crea propuesta formal o descarta.
-- =============================================================================
CREATE TABLE IF NOT EXISTS suggestions (
  id              TEXT NOT NULL PRIMARY KEY,

  -- ERRATA   — error factual o de cálculo en un ejercicio
  -- MEJORA   — mejora de enunciado, claridad, opciones
  -- CONTENIDO — sugerencia sobre teoría, libros u otro contenido
  suggestion_type TEXT NOT NULL
                  CHECK (suggestion_type IN ('ERRATA', 'MEJORA', 'CONTENIDO')),

  -- Objeto afectado (opcional pero recomendado)
  -- target_type: "generator" | "module" | "quiz"
  target_type     TEXT,
  target_id       TEXT,

  title           TEXT NOT NULL,
  body            TEXT NOT NULL,

  created_by      TEXT NOT NULL REFERENCES usuarios (id) ON DELETE CASCADE,
  created_at      TEXT NOT NULL DEFAULT (datetime('now')),

  -- PENDING   — sin revisar
  -- REVIEWED  — el admin la revisó (puede haber generado una propuesta o no)
  -- DISCARDED — descartada sin acción
  status          TEXT NOT NULL DEFAULT 'PENDING'
                  CHECK (status IN ('PENDING', 'REVIEWED', 'DISCARDED')),

  reviewed_by     TEXT REFERENCES usuarios (id) ON DELETE SET NULL,
  reviewed_at     TEXT,

  -- Nota interna del admin al revisar
  admin_note      TEXT
);

CREATE INDEX IF NOT EXISTS idx_suggestions_status
  ON suggestions (status);

CREATE INDEX IF NOT EXISTS idx_suggestions_target
  ON suggestions (target_type, target_id);

CREATE INDEX IF NOT EXISTS idx_suggestions_created_by
  ON suggestions (created_by);


-- =============================================================================
-- Registrar la migración
-- =============================================================================
INSERT OR IGNORE INTO schema_migrations (version, applied_at)
VALUES (3, datetime('now'));
