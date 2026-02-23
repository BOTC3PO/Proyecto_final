-- =============================================================================
-- CORE SCHEMA — SQLite
-- Migración MongoDB → SQLite (Fase 1)
-- Version: 1
-- =============================================================================

PRAGMA foreign_keys = ON;
PRAGMA journal_mode = WAL;
PRAGMA user_version = 1;

-- =============================================================================
-- ESCUELAS
-- =============================================================================
CREATE TABLE IF NOT EXISTS escuelas (
  id                   TEXT PRIMARY KEY,
  name                 TEXT NOT NULL,
  code                 TEXT UNIQUE NULL,
  address              TEXT NULL,
  subscription_status  TEXT NULL,
  plan                 TEXT NULL,
  is_deleted           INTEGER NOT NULL DEFAULT 0,
  created_at           TEXT NOT NULL,
  updated_at           TEXT NULL
);

CREATE INDEX IF NOT EXISTS idx_escuelas_code ON escuelas(code);
CREATE INDEX IF NOT EXISTS idx_escuelas_name ON escuelas(name);

-- =============================================================================
-- USUARIOS
-- =============================================================================
CREATE TABLE IF NOT EXISTS usuarios (
  id                      TEXT PRIMARY KEY,
  username                TEXT UNIQUE NOT NULL,
  email                   TEXT UNIQUE NOT NULL,
  full_name               TEXT NOT NULL,
  role                    TEXT NOT NULL,
  escuela_id              TEXT NULL,
  password_hash           TEXT NULL,
  birthdate               TEXT NULL,
  guest_onboarding_status TEXT NULL,
  -- consents (flattened)
  privacy_consent         INTEGER NULL,
  terms_accepted          INTEGER NULL,
  consented_at            TEXT NULL,
  is_deleted              INTEGER NOT NULL DEFAULT 0,
  created_at              TEXT NOT NULL,
  updated_at              TEXT NOT NULL,
  FOREIGN KEY (escuela_id) REFERENCES escuelas(id)
);

CREATE INDEX IF NOT EXISTS idx_usuarios_email    ON usuarios(email);
CREATE INDEX IF NOT EXISTS idx_usuarios_username ON usuarios(username);
CREATE INDEX IF NOT EXISTS idx_usuarios_role     ON usuarios(role);
CREATE INDEX IF NOT EXISTS idx_usuarios_escuela  ON usuarios(escuela_id);

-- =============================================================================
-- MEMBRESIAS  (desde membresias_escuela)
-- =============================================================================
CREATE TABLE IF NOT EXISTS membresias (
  usuario_id  TEXT NOT NULL,
  escuela_id  TEXT NOT NULL,
  rol         TEXT NOT NULL,
  estado      TEXT NOT NULL,
  fecha_alta  TEXT NOT NULL,
  fecha_baja  TEXT NULL,
  created_at  TEXT NULL,
  updated_at  TEXT NULL,
  PRIMARY KEY (usuario_id, escuela_id),
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
  FOREIGN KEY (escuela_id) REFERENCES escuelas(id)
);

CREATE INDEX IF NOT EXISTS idx_membresias_escuela_id ON membresias(escuela_id);
CREATE INDEX IF NOT EXISTS idx_membresias_usuario_id ON membresias(usuario_id);
CREATE INDEX IF NOT EXISTS idx_membresias_estado      ON membresias(estado);

-- =============================================================================
-- CLASES
-- =============================================================================
CREATE TABLE IF NOT EXISTS clases (
  id          TEXT PRIMARY KEY,
  escuela_id  TEXT NOT NULL,
  name        TEXT NOT NULL,
  grade       TEXT NOT NULL,
  code        TEXT NULL,
  is_deleted  INTEGER NOT NULL DEFAULT 0,
  created_at  TEXT NOT NULL,
  updated_at  TEXT NULL,
  FOREIGN KEY (escuela_id) REFERENCES escuelas(id)
);

CREATE INDEX IF NOT EXISTS idx_clases_escuela_id ON clases(escuela_id);
CREATE INDEX IF NOT EXISTS idx_clases_code       ON clases(code);

-- =============================================================================
-- CLASE_MIEMBROS  (normaliza teacherIds / adminIds / studentIds)
-- =============================================================================
CREATE TABLE IF NOT EXISTS clase_miembros (
  clase_id     TEXT NOT NULL,
  usuario_id   TEXT NOT NULL,
  rol_en_clase TEXT NOT NULL,  -- TEACHER | ADMIN | STUDENT
  PRIMARY KEY (clase_id, usuario_id, rol_en_clase),
  FOREIGN KEY (clase_id)   REFERENCES clases(id),
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

CREATE INDEX IF NOT EXISTS idx_clase_miembros_usuario ON clase_miembros(usuario_id);
CREATE INDEX IF NOT EXISTS idx_clase_miembros_clase   ON clase_miembros(clase_id);

-- =============================================================================
-- CLASE_MODULOS  (normaliza clases.modules[])
-- =============================================================================
CREATE TABLE IF NOT EXISTS clase_modulos (
  clase_id    TEXT NOT NULL,
  modulo_id   TEXT NOT NULL,
  assigned_at TEXT NULL,
  required    INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (clase_id, modulo_id),
  FOREIGN KEY (clase_id) REFERENCES clases(id)
);

CREATE INDEX IF NOT EXISTS idx_clase_modulos_clase ON clase_modulos(clase_id);

-- =============================================================================
-- CLASE_PUBLICACIONES  (normaliza clases.publications[])
-- =============================================================================
CREATE TABLE IF NOT EXISTS clase_publicaciones (
  id           TEXT PRIMARY KEY,
  clase_id     TEXT NOT NULL,
  author_id    TEXT NOT NULL,
  title        TEXT NOT NULL,
  body         TEXT NOT NULL,
  links_json   TEXT NULL,   -- JSON array de {label, href}
  is_pinned    INTEGER NOT NULL DEFAULT 0,
  published_at TEXT NOT NULL,
  FOREIGN KEY (clase_id)   REFERENCES clases(id),
  FOREIGN KEY (author_id)  REFERENCES usuarios(id)
);

CREATE INDEX IF NOT EXISTS idx_clase_pub_clase ON clase_publicaciones(clase_id);
CREATE INDEX IF NOT EXISTS idx_clase_pub_published ON clase_publicaciones(published_at);

-- =============================================================================
-- CONVERSACIONES  (entidad padre desde mensajes)
-- =============================================================================
CREATE TABLE IF NOT EXISTS conversaciones (
  id                    TEXT PRIMARY KEY,
  student_id            TEXT NOT NULL,
  parent_id             TEXT NOT NULL,
  class_id              TEXT NOT NULL,
  last_message_from     TEXT NULL,
  last_message_preview  TEXT NULL,
  unread_for_admin      INTEGER NOT NULL DEFAULT 0,
  created_at            TEXT NOT NULL,
  updated_at            TEXT NULL,
  FOREIGN KEY (student_id) REFERENCES usuarios(id),
  FOREIGN KEY (parent_id)  REFERENCES usuarios(id),
  FOREIGN KEY (class_id)   REFERENCES clases(id)
);

CREATE INDEX IF NOT EXISTS idx_conv_student ON conversaciones(student_id);
CREATE INDEX IF NOT EXISTS idx_conv_parent  ON conversaciones(parent_id);
CREATE INDEX IF NOT EXISTS idx_conv_class   ON conversaciones(class_id);

-- =============================================================================
-- MENSAJES_ITEMS  (normaliza mensajes.messages[])
-- =============================================================================
CREATE TABLE IF NOT EXISTS mensajes_items (
  id               TEXT PRIMARY KEY,
  conversation_id  TEXT NOT NULL,
  sender_id        TEXT NOT NULL,
  body             TEXT NOT NULL,
  sent_at          TEXT NOT NULL,
  FOREIGN KEY (conversation_id) REFERENCES conversaciones(id),
  FOREIGN KEY (sender_id)       REFERENCES usuarios(id)
);

CREATE INDEX IF NOT EXISTS idx_msg_items_conv   ON mensajes_items(conversation_id);
CREATE INDEX IF NOT EXISTS idx_msg_items_sent   ON mensajes_items(sent_at);
CREATE INDEX IF NOT EXISTS idx_msg_items_sender ON mensajes_items(sender_id);

-- =============================================================================
-- TRANSFERENCIAS
-- =============================================================================
CREATE TABLE IF NOT EXISTS transferencias (
  id              TEXT PRIMARY KEY,
  student_id      TEXT NOT NULL,
  from_school_id  TEXT NOT NULL,
  to_school_id    TEXT NOT NULL,
  status          TEXT NOT NULL,
  created_at      TEXT NOT NULL,
  updated_at      TEXT NULL,
  FOREIGN KEY (student_id)     REFERENCES usuarios(id),
  FOREIGN KEY (from_school_id) REFERENCES escuelas(id),
  FOREIGN KEY (to_school_id)   REFERENCES escuelas(id)
);

CREATE INDEX IF NOT EXISTS idx_transf_student      ON transferencias(student_id);
CREATE INDEX IF NOT EXISTS idx_transf_from_school  ON transferencias(from_school_id);
CREATE INDEX IF NOT EXISTS idx_transf_to_school    ON transferencias(to_school_id);
CREATE INDEX IF NOT EXISTS idx_transf_status       ON transferencias(status);

-- =============================================================================
-- ECONOMIA_CONFIG  (singleton)
-- =============================================================================
CREATE TABLE IF NOT EXISTS economia_config (
  id          TEXT PRIMARY KEY DEFAULT 'default',
  json        TEXT NOT NULL,
  updated_at  TEXT NOT NULL
);

-- =============================================================================
-- SALDOS_USUARIO  (fusion billeteras + economia_saldos)
-- =============================================================================
CREATE TABLE IF NOT EXISTS saldos_usuario (
  usuario_id  TEXT NOT NULL,
  moneda      TEXT NOT NULL,
  saldo       REAL NOT NULL DEFAULT 0,
  updated_at  TEXT NOT NULL,
  PRIMARY KEY (usuario_id, moneda),
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

CREATE INDEX IF NOT EXISTS idx_saldos_usuario ON saldos_usuario(usuario_id);

-- =============================================================================
-- LEDGER_MOVIMIENTOS  (fusion movimientos_billetera + economia_transacciones)
-- =============================================================================
CREATE TABLE IF NOT EXISTS ledger_movimientos (
  id              TEXT PRIMARY KEY,
  usuario_id      TEXT NOT NULL,
  tipo            TEXT NOT NULL,   -- credito | debito
  monto           REAL NOT NULL,
  moneda          TEXT NOT NULL,
  motivo          TEXT NOT NULL,
  origen          TEXT NULL,
  referencia_id   TEXT NULL,
  referencia_tipo TEXT NULL,
  created_at      TEXT NOT NULL,
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

CREATE INDEX IF NOT EXISTS idx_ledger_usuario    ON ledger_movimientos(usuario_id);
CREATE INDEX IF NOT EXISTS idx_ledger_created    ON ledger_movimientos(created_at);
CREATE INDEX IF NOT EXISTS idx_ledger_tipo       ON ledger_movimientos(tipo);

-- =============================================================================
-- ECONOMIA_RECOMPENSAS
-- =============================================================================
CREATE TABLE IF NOT EXISTS economia_recompensas (
  id            TEXT PRIMARY KEY,
  tipo          TEXT NOT NULL,
  referencia_id TEXT NOT NULL,
  nombre        TEXT NOT NULL,
  descripcion   TEXT NULL,
  monto         REAL NOT NULL,
  moneda        TEXT NOT NULL,
  activo        INTEGER NOT NULL DEFAULT 1,
  updated_at    TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_eco_recomp_tipo ON economia_recompensas(tipo);
CREATE INDEX IF NOT EXISTS idx_eco_recomp_ref  ON economia_recompensas(referencia_id);

-- =============================================================================
-- ECONOMIA_MODULOS
-- =============================================================================
CREATE TABLE IF NOT EXISTS economia_modulos (
  modulo_id   TEXT PRIMARY KEY,
  activo      INTEGER NOT NULL DEFAULT 1,
  updated_at  TEXT NOT NULL
);

-- =============================================================================
-- ECONOMIA_EVENTOS
-- =============================================================================
CREATE TABLE IF NOT EXISTS economia_eventos (
  id          TEXT PRIMARY KEY,
  nombre      TEXT NOT NULL,
  tipo        TEXT NOT NULL,
  descripcion TEXT NULL,
  tasa        REAL NULL,
  activo      INTEGER NOT NULL DEFAULT 1,
  updated_at  TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_eco_eventos_tipo   ON economia_eventos(tipo);
CREATE INDEX IF NOT EXISTS idx_eco_eventos_activo ON economia_eventos(activo);

-- =============================================================================
-- ECONOMIA_RIESGO_CURSOS
-- =============================================================================
CREATE TABLE IF NOT EXISTS economia_riesgo_cursos (
  aula_id         TEXT PRIMARY KEY,
  riesgo_base     REAL NOT NULL DEFAULT 0,
  riesgo_mercado  REAL NOT NULL DEFAULT 0,
  riesgo_credito  REAL NOT NULL DEFAULT 0,
  updated_at      TEXT NOT NULL
);

-- =============================================================================
-- SCHEMA MIGRATIONS (tracking)
-- =============================================================================
CREATE TABLE IF NOT EXISTS schema_migrations (
  version     INTEGER PRIMARY KEY,
  applied_at  TEXT NOT NULL
);

INSERT OR IGNORE INTO schema_migrations (version, applied_at)
VALUES (1, strftime('%Y-%m-%dT%H:%M:%SZ', 'now'));
