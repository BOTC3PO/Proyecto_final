-- =============================================================================
-- BLOQUES_JSON
-- =============================================================================
CREATE TABLE IF NOT EXISTS bloques_json (
  id             TEXT PRIMARY KEY,
  schema_version INTEGER NOT NULL DEFAULT 1,
  document       TEXT NOT NULL,
  content_hash   TEXT,
  created_at     TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at     TEXT NOT NULL DEFAULT (datetime('now')),
  CHECK (json_valid(document))
);

CREATE INDEX IF NOT EXISTS idx_bloques_hash ON bloques_json(content_hash);

-- Add bloque_id reference to modulos
ALTER TABLE modulos ADD COLUMN bloque_id TEXT REFERENCES bloques_json(id);

INSERT OR IGNORE INTO schema_migrations (version, applied_at)
VALUES (2, strftime('%Y-%m-%dT%H:%M:%SZ', 'now'));
