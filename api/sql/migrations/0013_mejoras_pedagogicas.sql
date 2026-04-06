PRAGMA user_version = 13;

-- Umbral de aprobación por quiz (override del módulo)
CREATE TABLE IF NOT EXISTS quiz_umbrales (
  quiz_id       TEXT PRIMARY KEY,
  modulo_id     TEXT NOT NULL,
  umbral        INTEGER NOT NULL DEFAULT 60,
  creado_by     TEXT NOT NULL,
  created_at    TEXT NOT NULL
);

-- Desbloqueos manuales de módulo por profesor
CREATE TABLE IF NOT EXISTS desbloqueos_manuales (
  id            TEXT PRIMARY KEY,
  modulo_id     TEXT NOT NULL,
  usuario_id    TEXT NOT NULL,
  aula_id       TEXT NOT NULL,
  desbloqueado_by TEXT NOT NULL,
  motivo        TEXT NULL,
  created_at    TEXT NOT NULL,
  UNIQUE(modulo_id, usuario_id, aula_id)
);

CREATE INDEX IF NOT EXISTS idx_desbloqueos_usuario
  ON desbloqueos_manuales(usuario_id, aula_id);

-- Modo aula — profesor activa restricciones durante clase
CREATE TABLE IF NOT EXISTS modo_aula (
  aula_id       TEXT PRIMARY KEY,
  activo        INTEGER NOT NULL DEFAULT 0,
  restricciones TEXT NOT NULL DEFAULT 'tienda,economia',
  activado_by   TEXT NOT NULL,
  activado_at   TEXT NOT NULL,
  desactivado_at TEXT NULL
);

INSERT OR IGNORE INTO schema_migrations(version, applied_at)
  VALUES(13, datetime('now'));
