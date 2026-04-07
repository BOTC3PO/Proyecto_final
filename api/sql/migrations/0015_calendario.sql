PRAGMA user_version = 15;

-- Calendario institucional de la escuela
CREATE TABLE IF NOT EXISTS calendario_escuela (
  id            TEXT PRIMARY KEY,
  escuela_id    TEXT NOT NULL,
  tipo          TEXT NOT NULL CHECK(tipo IN (
                  'feriado', 'vacaciones',
                  'acto_escolar', 'evento_institucional',
                  'sin_clases'
                )),
  titulo        TEXT NOT NULL,
  descripcion   TEXT NULL,
  fecha_inicio  TEXT NOT NULL,
  fecha_fin     TEXT NOT NULL,  -- puede ser igual a fecha_inicio
  created_by    TEXT NOT NULL,
  created_at    TEXT NOT NULL,
  is_deleted    INTEGER NOT NULL DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_cal_escuela_id
  ON calendario_escuela(escuela_id, fecha_inicio);
CREATE INDEX IF NOT EXISTS idx_cal_escuela_rango
  ON calendario_escuela(fecha_inicio, fecha_fin);

-- Actualizar actividades_aula para soportar feriado y sin_clases
-- SQLite no permite ALTER COLUMN CHECK, recrear la tabla
CREATE TABLE IF NOT EXISTS actividades_aula_new (
  id          TEXT PRIMARY KEY,
  aula_id     TEXT NOT NULL,
  tipo        TEXT NOT NULL CHECK(tipo IN (
                'clase', 'evaluacion', 'evento',
                'feriado', 'sin_clases'
              )),
  titulo      TEXT NOT NULL,
  descripcion TEXT NULL,
  fecha       TEXT NOT NULL,
  fecha_fin   TEXT NULL,
  created_by  TEXT NOT NULL,
  created_at  TEXT NOT NULL,
  is_deleted  INTEGER NOT NULL DEFAULT 0
);

INSERT INTO actividades_aula_new
  (id, aula_id, tipo, titulo, descripcion,
   fecha, created_by, created_at, is_deleted)
SELECT id, aula_id, tipo, titulo, descripcion,
       fecha, created_by, created_at, is_deleted
FROM actividades_aula;

DROP TABLE actividades_aula;
ALTER TABLE actividades_aula_new RENAME TO actividades_aula;

CREATE INDEX IF NOT EXISTS idx_actividades_aula_fecha
  ON actividades_aula(aula_id, fecha);

INSERT OR IGNORE INTO schema_migrations(version, applied_at)
  VALUES(15, datetime('now'));
