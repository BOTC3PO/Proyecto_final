PRAGMA user_version = 16;

ALTER TABLE clases ADD COLUMN status TEXT NOT NULL
  DEFAULT 'ACTIVE';

CREATE INDEX IF NOT EXISTS idx_clases_status
  ON clases(status);

INSERT OR IGNORE INTO schema_migrations(version, applied_at)
  VALUES(16, datetime('now'));
