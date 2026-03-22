-- =============================================================================
-- Migration 0003: generator_configs
-- =============================================================================

CREATE TABLE IF NOT EXISTS generator_configs (
  id               TEXT NOT NULL PRIMARY KEY,
  materia          TEXT NOT NULL,
  label            TEXT NOT NULL,
  description      TEXT,
  version          INTEGER NOT NULL DEFAULT 1,
  subtipos         TEXT NOT NULL DEFAULT '[]'
                   CHECK (json_valid(subtipos) AND json_type(subtipos) = 'array'),
  enunciados       TEXT NOT NULL DEFAULT '{}'
                   CHECK (json_valid(enunciados)),
  limits           TEXT NOT NULL DEFAULT '{}'
                   CHECK (json_valid(limits)),
  variables_schema TEXT NOT NULL DEFAULT '{}'
                   CHECK (json_valid(variables_schema)),
  status           TEXT NOT NULL DEFAULT 'ACTIVE'
                   CHECK (status IN ('ACTIVE','INACTIVE')),
  created_at       TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at       TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_generator_configs_materia
  ON generator_configs(materia);

CREATE INDEX IF NOT EXISTS idx_generator_configs_status
  ON generator_configs(status);

INSERT OR IGNORE INTO schema_migrations(version, applied_at)
  VALUES(3, datetime('now'));
