PRAGMA user_version = 14;

-- Cola de sincronización pendiente
-- Registra operaciones locales que esperan ser enviadas
CREATE TABLE IF NOT EXISTS sync_queue (
  id            TEXT PRIMARY KEY,
  usuario_id    TEXT NOT NULL,
  tipo          TEXT NOT NULL CHECK(tipo IN (
                  'progreso', 'quiz_attempt', 'economia',
                  'competencia', 'mensajes_leidos'
                )),
  payload       TEXT NOT NULL,  -- JSON con los datos
  intento       INTEGER NOT NULL DEFAULT 0,
  max_intentos  INTEGER NOT NULL DEFAULT 5,
  estado        TEXT NOT NULL DEFAULT 'pendiente'
                  CHECK(estado IN ('pendiente','procesando',
                                  'completado','fallido')),
  error         TEXT NULL,
  created_at    TEXT NOT NULL,
  procesado_at  TEXT NULL
);

CREATE INDEX IF NOT EXISTS idx_sync_queue_usuario
  ON sync_queue(usuario_id, estado);
CREATE INDEX IF NOT EXISTS idx_sync_queue_estado
  ON sync_queue(estado, created_at);

-- Registro de snapshots descargados por el alumno
-- Para saber qué versión tiene el cliente
CREATE TABLE IF NOT EXISTS sync_snapshots (
  id            TEXT PRIMARY KEY,
  usuario_id    TEXT NOT NULL,
  tipo          TEXT NOT NULL CHECK(tipo IN (
                  'modulos', 'economia_config', 'avisos'
                )),
  aula_id       TEXT NULL,
  version       INTEGER NOT NULL DEFAULT 1,
  hash          TEXT NULL,  -- hash del contenido para detectar cambios
  descargado_at TEXT NOT NULL
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_sync_snapshots_unique
  ON sync_snapshots(usuario_id, tipo, aula_id);

-- Log de conflictos de sincronización
-- Cuando el servidor y el cliente tienen datos distintos
CREATE TABLE IF NOT EXISTS sync_conflictos (
  id            TEXT PRIMARY KEY,
  usuario_id    TEXT NOT NULL,
  tipo          TEXT NOT NULL,
  payload_local TEXT NOT NULL,
  payload_server TEXT NOT NULL,
  resolucion    TEXT NOT NULL DEFAULT 'server_wins'
                  CHECK(resolucion IN (
                    'server_wins', 'client_wins', 'manual'
                  )),
  resuelto_at   TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_sync_conflictos_usuario
  ON sync_conflictos(usuario_id, tipo);

INSERT OR IGNORE INTO schema_migrations(version, applied_at)
  VALUES(14, datetime('now'));
