PRAGMA user_version = 8;

-- Relaciones padre-alumno (complementa vinculos_padre_hijo de MongoDB)
CREATE TABLE IF NOT EXISTS relaciones_padre_alumno (
  id          TEXT PRIMARY KEY,
  padre_id    TEXT NOT NULL,
  alumno_id   TEXT NOT NULL,
  escuela_id  TEXT NULL,
  created_by  TEXT NOT NULL,
  created_at  TEXT NOT NULL,
  estado      TEXT NOT NULL DEFAULT 'activo'
    CHECK(estado IN ('activo','revocado')),
  UNIQUE(padre_id, alumno_id)
);

CREATE INDEX IF NOT EXISTS idx_relaciones_padre
  ON relaciones_padre_alumno(padre_id);
CREATE INDEX IF NOT EXISTS idx_relaciones_alumno
  ON relaciones_padre_alumno(alumno_id);

-- Flag isParent en usuarios (SQLite mirror)
CREATE TABLE IF NOT EXISTS usuario_flags (
  usuario_id  TEXT PRIMARY KEY,
  is_parent   INTEGER NOT NULL DEFAULT 0,
  updated_at  TEXT NOT NULL
);

INSERT OR IGNORE INTO schema_migrations(version, applied_at)
  VALUES(8, datetime('now'));
