PRAGMA user_version = 12;

-- Hilos de mensajes directos entre dos usuarios
-- Siempre dentro de la misma escuela
CREATE TABLE IF NOT EXISTS hilos (
  id            TEXT PRIMARY KEY,
  escuela_id    TEXT NOT NULL,
  usuario_a     TEXT NOT NULL,   -- quien inicia
  usuario_b     TEXT NOT NULL,   -- quien recibe
  ultimo_msg    TEXT NULL,       -- preview del último mensaje
  ultimo_at     TEXT NULL,       -- fecha del último mensaje
  no_leidos_a   INTEGER NOT NULL DEFAULT 0,
  no_leidos_b   INTEGER NOT NULL DEFAULT 0,
  created_at    TEXT NOT NULL,
  UNIQUE(escuela_id, usuario_a, usuario_b)
);

CREATE INDEX IF NOT EXISTS idx_hilos_a
  ON hilos(usuario_a, escuela_id);
CREATE INDEX IF NOT EXISTS idx_hilos_b
  ON hilos(usuario_b, escuela_id);
CREATE INDEX IF NOT EXISTS idx_hilos_ultimo
  ON hilos(escuela_id, ultimo_at DESC);

-- Mensajes dentro de un hilo
CREATE TABLE IF NOT EXISTS mensajes_directos (
  id            TEXT PRIMARY KEY,
  hilo_id       TEXT NOT NULL,
  sender_id     TEXT NOT NULL,
  body          TEXT NOT NULL,
  leido         INTEGER NOT NULL DEFAULT 0,
  created_at    TEXT NOT NULL,
  FOREIGN KEY (hilo_id) REFERENCES hilos(id)
);

CREATE INDEX IF NOT EXISTS idx_mensajes_hilo
  ON mensajes_directos(hilo_id, created_at ASC);
CREATE INDEX IF NOT EXISTS idx_mensajes_sender
  ON mensajes_directos(sender_id);
CREATE INDEX IF NOT EXISTS idx_mensajes_leido
  ON mensajes_directos(hilo_id, leido);

-- Avisos institucionales (directivo o profesor → grupo)
CREATE TABLE IF NOT EXISTS avisos (
  id            TEXT PRIMARY KEY,
  escuela_id    TEXT NOT NULL,
  autor_id      TEXT NOT NULL,
  autor_rol     TEXT NOT NULL,
  titulo        TEXT NOT NULL,
  cuerpo        TEXT NOT NULL,
  -- Destino: "todos" | "padres" | "alumnos" | "profesores" | aulaId
  destino       TEXT NOT NULL DEFAULT 'todos',
  aula_id       TEXT NULL,       -- si destino es un aula específica
  created_at    TEXT NOT NULL,
  updated_at    TEXT NULL
);

CREATE INDEX IF NOT EXISTS idx_avisos_escuela
  ON avisos(escuela_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_avisos_aula
  ON avisos(aula_id, created_at DESC);

-- Tabla de lecturas de avisos (para marcar como leído)
CREATE TABLE IF NOT EXISTS avisos_leidos (
  aviso_id      TEXT NOT NULL,
  usuario_id    TEXT NOT NULL,
  leido_at      TEXT NOT NULL,
  PRIMARY KEY (aviso_id, usuario_id)
);

INSERT OR IGNORE INTO schema_migrations(version, applied_at)
  VALUES(12, datetime('now'));
