PRAGMA user_version = 7;

-- Suscripciones por entidad (escuela, profesor, alumno)
CREATE TABLE IF NOT EXISTS suscripciones (
  id                TEXT PRIMARY KEY,
  entidad_tipo      TEXT NOT NULL CHECK(entidad_tipo IN ('escuela','profesor','alumno')),
  entidad_id        TEXT NOT NULL,
  plan              TEXT NOT NULL CHECK(plan IN ('gratuito','pago')),
  estado            TEXT NOT NULL CHECK(estado IN ('activa','cancelada','vencida','pendiente')),
  -- MercadoPago
  mp_preapproval_id TEXT NULL,
  mp_payer_email    TEXT NULL,
  -- Período
  periodo_inicio    TEXT NOT NULL,
  periodo_fin       TEXT NOT NULL,
  -- Monto y expansiones
  monto_mensual     REAL NOT NULL DEFAULT 0,
  moneda            TEXT NOT NULL DEFAULT 'ARS',
  -- Expansiones del profesor (unidades adicionales)
  expansiones       INTEGER NOT NULL DEFAULT 0,
  -- Cancelación
  cancelada_at      TEXT NULL,
  cancelada_by      TEXT NULL,
  -- Reembolso
  reembolso_solicitado INTEGER NOT NULL DEFAULT 0,
  reembolso_at      TEXT NULL,
  -- Auditoría
  created_at        TEXT NOT NULL,
  updated_at        TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_suscripciones_entidad
  ON suscripciones(entidad_tipo, entidad_id);
CREATE INDEX IF NOT EXISTS idx_suscripciones_estado
  ON suscripciones(estado);
CREATE INDEX IF NOT EXISTS idx_suscripciones_mp
  ON suscripciones(mp_preapproval_id);

-- Límites por escuela (calculados según suscripción)
CREATE TABLE IF NOT EXISTS limites_escuela (
  escuela_id           TEXT PRIMARY KEY,
  max_profesores       INTEGER NOT NULL DEFAULT 5,
  max_directivos       INTEGER NOT NULL DEFAULT 5,
  max_aulas            INTEGER NOT NULL DEFAULT 5,
  max_alumnos_por_aula INTEGER NOT NULL DEFAULT 30,
  updated_at           TEXT NOT NULL
);

-- Historial de pagos
CREATE TABLE IF NOT EXISTS historial_pagos (
  id              TEXT PRIMARY KEY,
  suscripcion_id  TEXT NOT NULL,
  entidad_tipo    TEXT NOT NULL,
  entidad_id      TEXT NOT NULL,
  monto           REAL NOT NULL,
  moneda          TEXT NOT NULL DEFAULT 'ARS',
  estado          TEXT NOT NULL CHECK(estado IN ('pendiente','pagado','fallido','reembolsado')),
  mp_payment_id   TEXT NULL,
  periodo_inicio  TEXT NOT NULL,
  periodo_fin     TEXT NOT NULL,
  created_at      TEXT NOT NULL,
  FOREIGN KEY (suscripcion_id) REFERENCES suscripciones(id)
);

CREATE INDEX IF NOT EXISTS idx_historial_pagos_suscripcion
  ON historial_pagos(suscripcion_id);
CREATE INDEX IF NOT EXISTS idx_historial_pagos_entidad
  ON historial_pagos(entidad_tipo, entidad_id);

INSERT OR IGNORE INTO schema_migrations(version, applied_at)
  VALUES(7, datetime('now'));
