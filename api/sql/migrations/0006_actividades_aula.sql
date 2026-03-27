PRAGMA user_version = 6;

CREATE TABLE IF NOT EXISTS actividades_aula (
  id          TEXT PRIMARY KEY,
  aula_id     TEXT NOT NULL,
  tipo        TEXT NOT NULL CHECK(tipo IN ('clase','evaluacion','evento')),
  titulo      TEXT NOT NULL,
  descripcion TEXT,
  fecha       TEXT NOT NULL,
  created_by  TEXT NOT NULL,
  created_at  TEXT NOT NULL,
  is_deleted  INTEGER NOT NULL DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_actividades_aula_id
  ON actividades_aula(aula_id, fecha);

INSERT OR IGNORE INTO schema_migrations(version, applied_at)
  VALUES(6, datetime('now'));
