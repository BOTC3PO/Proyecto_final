PRAGMA user_version = 11;

-- Plazo fijo educativo
CREATE TABLE IF NOT EXISTS plazo_fijo (
  id            TEXT PRIMARY KEY,
  usuario_id    TEXT NOT NULL,
  aula_id       TEXT NULL,
  monto         REAL NOT NULL,
  tasa_anual    REAL NOT NULL,
  dias          INTEGER NOT NULL,
  interes       REAL NOT NULL,
  total         REAL NOT NULL,
  estado        TEXT NOT NULL DEFAULT 'activo'
    CHECK(estado IN ('activo','vencido','rescatado')),
  creado_at     TEXT NOT NULL,
  vence_at      TEXT NOT NULL,
  rescatado_at  TEXT NULL
);

CREATE INDEX IF NOT EXISTS idx_plazo_fijo_usuario
  ON plazo_fijo(usuario_id, estado);
CREATE INDEX IF NOT EXISTS idx_plazo_fijo_vence
  ON plazo_fijo(vence_at, estado);

-- FCI — Fondo Común de Inversión
CREATE TABLE IF NOT EXISTS fci_posiciones (
  id            TEXT PRIMARY KEY,
  usuario_id    TEXT NOT NULL,
  aula_id       TEXT NULL,
  monto         REAL NOT NULL,
  tasa_mensual  REAL NOT NULL,
  dias          INTEGER NOT NULL,
  interes       REAL NOT NULL,
  total         REAL NOT NULL,
  estado        TEXT NOT NULL DEFAULT 'activo'
    CHECK(estado IN ('activo','rescatado')),
  creado_at     TEXT NOT NULL,
  vence_at      TEXT NOT NULL,
  rescatado_at  TEXT NULL
);

CREATE INDEX IF NOT EXISTS idx_fci_usuario
  ON fci_posiciones(usuario_id, estado);

INSERT OR IGNORE INTO schema_migrations(version, applied_at)
  VALUES(11, datetime('now'));
