-- =========================================================
-- SQLite DDL: módulos + quizzes + versiones + intentos
-- =========================================================

PRAGMA foreign_keys = ON;

-- -------------------------
-- MODULOS (metadata liviana)
-- -------------------------
CREATE TABLE IF NOT EXISTS modulos (
  id               TEXT PRIMARY KEY,         -- UUID recomendado
  slug             TEXT UNIQUE,              -- opcional
  titulo           TEXT NOT NULL,
  descripcion      TEXT,

  -- publico/privado (+ unlisted opcional)
  visibility       TEXT NOT NULL DEFAULT 'private'
                   CHECK (visibility IN ('public','private','unlisted')),

  -- pertenece a una escuela (NULL = global)
  school_id        TEXT,                     -- FK a escuelas(id) si existe

  owner_user_id    TEXT,                     -- FK a usuarios(id) si existe

  -- punteros a blobs JSON (si los separás)
  teoria_id        TEXT,                     -- FK teoria_json(id)
  tuesday_doc_id   TEXT,                     -- FK tuesdayjs_docs(id)
  libro_id         TEXT,                     -- FK libros_json(id)
  bloque_id        TEXT,                     -- FK bloques_json(id)

  -- config por defecto para generación de quizzes
  default_question_count INTEGER,            -- opcional

  created_at       TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at       TEXT NOT NULL DEFAULT (datetime('now')),

  -- FKs (comentá si todavía no existen esas tablas)
  FOREIGN KEY (school_id)      REFERENCES escuelas(id)   ON DELETE SET NULL,
  FOREIGN KEY (owner_user_id)  REFERENCES usuarios(id)   ON DELETE SET NULL,
  FOREIGN KEY (teoria_id)      REFERENCES teoria_json(id) ON DELETE SET NULL,
  FOREIGN KEY (tuesday_doc_id) REFERENCES tuesdayjs_docs(id) ON DELETE SET NULL,
  FOREIGN KEY (libro_id)       REFERENCES libros_json(id) ON DELETE SET NULL,
  FOREIGN KEY (bloque_id)      REFERENCES bloques_json(id) ON DELETE SET NULL
);

CREATE INDEX IF NOT EXISTS idx_modulos_owner   ON modulos(owner_user_id);
CREATE INDEX IF NOT EXISTS idx_modulos_school  ON modulos(school_id);
CREATE INDEX IF NOT EXISTS idx_modulos_vis     ON modulos(visibility);

-- -----------------------------------------
-- OPCIONAL: tablas separadas para JSON pesado
-- -----------------------------------------
CREATE TABLE IF NOT EXISTS teoria_json (
  id            TEXT PRIMARY KEY,
  schema_version INTEGER NOT NULL DEFAULT 1,
  content       TEXT NOT NULL,
  content_hash  TEXT, -- opcional (dedup)
  created_at    TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at    TEXT NOT NULL DEFAULT (datetime('now')),
  CHECK (json_valid(content))
);

CREATE TABLE IF NOT EXISTS tuesdayjs_docs (
  id            TEXT PRIMARY KEY,
  schema_version INTEGER NOT NULL DEFAULT 1,
  doc           TEXT NOT NULL,
  content_hash  TEXT,
  created_at    TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at    TEXT NOT NULL DEFAULT (datetime('now')),
  CHECK (json_valid(doc))
);

CREATE TABLE IF NOT EXISTS libros_json (
  id            TEXT PRIMARY KEY,
  schema_version INTEGER NOT NULL DEFAULT 1,
  book          TEXT NOT NULL,
  content_hash  TEXT,
  created_at    TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at    TEXT NOT NULL DEFAULT (datetime('now')),
  CHECK (json_valid(book))
);

-- -------------------------
-- BLOQUES_JSON (editor de bloques v2)
-- -------------------------
CREATE TABLE IF NOT EXISTS bloques_json (
  id             TEXT PRIMARY KEY,
  schema_version INTEGER NOT NULL DEFAULT 1,
  document       TEXT NOT NULL,
  content_hash   TEXT,
  created_at     TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at     TEXT NOT NULL DEFAULT (datetime('now')),
  CHECK (json_valid(document))
);

CREATE INDEX IF NOT EXISTS idx_teoria_hash   ON teoria_json(content_hash);
CREATE INDEX IF NOT EXISTS idx_tuesday_hash  ON tuesdayjs_docs(content_hash);
CREATE INDEX IF NOT EXISTS idx_libros_hash   ON libros_json(content_hash);
CREATE INDEX IF NOT EXISTS idx_bloques_hash  ON bloques_json(content_hash);

-- -------------------------
-- QUIZZES (1:1 con modulo)
-- -------------------------
CREATE TABLE IF NOT EXISTS quizzes (
  id                 TEXT PRIMARY KEY,
  module_id           TEXT NOT NULL,      
  title               TEXT,
  is_active           INTEGER NOT NULL DEFAULT 1 CHECK (is_active IN (0,1)),

  -- puntero a la versión vigente (se setea después)
  current_version_id  TEXT,

  created_at          TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at          TEXT NOT NULL DEFAULT (datetime('now')),

  FOREIGN KEY (module_id) REFERENCES modulos(id) ON DELETE CASCADE,
  FOREIGN KEY (current_version_id) REFERENCES quiz_versions(id) ON DELETE SET NULL
);

CREATE INDEX IF NOT EXISTS idx_quizzes_module ON quizzes(module_id);

-- ------------------------------------------------------
-- OPCIONAL: question set para guardar questions[] separado
-- ------------------------------------------------------
CREATE TABLE IF NOT EXISTS quiz_question_sets (
  id            TEXT PRIMARY KEY,
  schema_version INTEGER NOT NULL DEFAULT 1,

  quiz_type      TEXT,               -- "multiple_choice", "mixed", etc.
  questions      TEXT NOT NULL,       -- questions[] (array JSON)
  content_hash   TEXT UNIQUE,         -- dedup opcional

  created_at     TEXT NOT NULL DEFAULT (datetime('now')),
  created_by     TEXT,

  FOREIGN KEY (created_by) REFERENCES usuarios(id) ON DELETE SET NULL,

  CHECK (json_valid(questions)),
  CHECK (json_type(questions) = 'array')
);

CREATE INDEX IF NOT EXISTS idx_qs_hash ON quiz_question_sets(content_hash);

-- -------------------------
-- QUIZ_VERSIONS (inmutable)
-- -------------------------
CREATE TABLE IF NOT EXISTS quiz_versions (
  id              TEXT PRIMARY KEY,
  quiz_id          TEXT NOT NULL,
  version_number   INTEGER NOT NULL,
  schema_version   INTEGER NOT NULL DEFAULT 1,

  -- Guardado del cuestionario:
  -- Opción 1 (recomendada si querés dedup): apunta a question_set
  question_set_id  TEXT,

  -- Opción 2 (si NO usás question_set): guardar questions[] acá
  questions        TEXT,

  -- Metadatos del generador
  generator_id      TEXT,            -- ej "matematica_56"
  generator_version TEXT,            -- ej "1" o hash del código
  params            TEXT,            -- JSON: dificultad, overrides de limites, etc.
  count             INTEGER,         -- cantidad de preguntas

  -- Seed opcional
  seed_policy       INTEGER NOT NULL DEFAULT 0,  -- 0 none, 1 random, 2 fixed, 3 derived
  fixed_seed        TEXT,                         -- si corresponde

  settings          TEXT,            -- JSON: tiempo, shuffle, scoring...
  content_hash      TEXT,            -- opcional

  created_at        TEXT NOT NULL DEFAULT (datetime('now')),
  created_by        TEXT,

  FOREIGN KEY (quiz_id) REFERENCES quizzes(id) ON DELETE CASCADE,
  FOREIGN KEY (question_set_id) REFERENCES quiz_question_sets(id) ON DELETE SET NULL,
  FOREIGN KEY (created_by) REFERENCES usuarios(id) ON DELETE SET NULL,

  CONSTRAINT uq_quiz_versions UNIQUE (quiz_id, version_number),

  -- Validaciones JSON (si tu SQLite soporta JSON1)
  CHECK (params IS NULL OR json_valid(params)),
  CHECK (settings IS NULL OR json_valid(settings)),

  -- Regla: o usás question_set_id, o usás questions directo (pero no ambos vacíos)
  CHECK (
    (question_set_id IS NOT NULL) OR (questions IS NOT NULL)
  ),
  CHECK (questions IS NULL OR (json_valid(questions) AND json_type(questions) = 'array'))
);

CREATE INDEX IF NOT EXISTS idx_quiz_versions_quiz ON quiz_versions(quiz_id);
CREATE INDEX IF NOT EXISTS idx_quiz_versions_gen  ON quiz_versions(generator_id);

-- ---------------------------------------------------------
-- QUIZ_ATTEMPTS (respuestas + feedback + seed nullable)
-- ---------------------------------------------------------
CREATE TABLE IF NOT EXISTS quiz_attempts (
  id              TEXT PRIMARY KEY,
  quiz_id          TEXT NOT NULL,
  quiz_version_id  TEXT NOT NULL,
  user_id          TEXT NOT NULL,

  status           TEXT NOT NULL
                   CHECK (status IN ('in_progress','submitted','graded','abandoned')),

  started_at       TEXT NOT NULL DEFAULT (datetime('now')),
  submitted_at     TEXT,

  score            REAL,
  max_score        REAL,

  -- Respuestas del usuario
  answers          TEXT NOT NULL,

  -- Feedback agregado (puede ser texto simple o JSON estructurado)
  feedback         TEXT,

  -- Corrección detallada (opcional)
  grading          TEXT,

  -- Seed: NULL cuando no se usa (barato)
  seed             TEXT,
  seed_policy      INTEGER NOT NULL DEFAULT 0, -- mismo código que en versions

  attempt_no       INTEGER,

  FOREIGN KEY (quiz_id) REFERENCES quizzes(id) ON DELETE CASCADE,
  FOREIGN KEY (quiz_version_id) REFERENCES quiz_versions(id) ON DELETE RESTRICT,
  FOREIGN KEY (user_id) REFERENCES usuarios(id) ON DELETE CASCADE,

  CHECK (json_valid(answers)),
  CHECK (feedback IS NULL OR json_valid(feedback) OR length(feedback) >= 0),
  CHECK (grading IS NULL OR json_valid(grading))
);

CREATE INDEX IF NOT EXISTS idx_attempts_user_quiz_time
  ON quiz_attempts(user_id, quiz_id, started_at DESC);

CREATE INDEX IF NOT EXISTS idx_attempts_quiz_submitted
  ON quiz_attempts(quiz_id, submitted_at DESC);

-- "Un solo in_progress por usuario+quiz"
CREATE UNIQUE INDEX IF NOT EXISTS uq_attempts_in_progress
  ON quiz_attempts(user_id, quiz_id)
  WHERE status = 'in_progress';
