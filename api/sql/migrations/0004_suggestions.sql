-- =============================================================================
-- Migration 0004: suggestions
-- =============================================================================

CREATE TABLE IF NOT EXISTS suggestions (
  id              TEXT NOT NULL PRIMARY KEY,
  suggestion_type TEXT NOT NULL
                  CHECK (suggestion_type IN ('ERRATA','MEJORA','CONTENIDO')),
  target_type     TEXT CHECK (target_type IN ('generator','module')),
  target_id       TEXT,
  title           TEXT NOT NULL,
  body            TEXT NOT NULL,
  created_by      TEXT NOT NULL REFERENCES usuarios(id) ON DELETE CASCADE,
  created_at      TEXT NOT NULL DEFAULT (datetime('now')),
  status          TEXT NOT NULL DEFAULT 'PENDING'
                  CHECK (status IN ('PENDING','REVIEWED','DISCARDED')),
  reviewed_by     TEXT REFERENCES usuarios(id) ON DELETE SET NULL,
  reviewed_at     TEXT,
  admin_note      TEXT
);

CREATE INDEX IF NOT EXISTS idx_suggestions_status
  ON suggestions(status);

CREATE INDEX IF NOT EXISTS idx_suggestions_target
  ON suggestions(target_type, target_id);

CREATE INDEX IF NOT EXISTS idx_suggestions_created_by
  ON suggestions(created_by);

INSERT OR IGNORE INTO schema_migrations(version, applied_at)
  VALUES(4, datetime('now'));
