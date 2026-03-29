PRAGMA user_version = 9;

-- Items de la tienda
CREATE TABLE IF NOT EXISTS tienda_items (
  id          TEXT PRIMARY KEY,
  tipo        TEXT NOT NULL CHECK(tipo IN ('tema','avatar','marco','animacion')),
  nombre      TEXT NOT NULL,
  descripcion TEXT NOT NULL DEFAULT '',
  precio      INTEGER NOT NULL DEFAULT 0,
  moneda      TEXT NOT NULL DEFAULT 'PF',
  asset_id    TEXT NULL,       -- id del tema CSS o nombre del asset SVG
  preview_css TEXT NULL,       -- CSS inline para preview en la tienda
  activo      INTEGER NOT NULL DEFAULT 1,
  orden       INTEGER NOT NULL DEFAULT 0,
  created_at  TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_tienda_tipo
  ON tienda_items(tipo, activo);

-- Items comprados por usuario
CREATE TABLE IF NOT EXISTS usuario_items (
  id          TEXT PRIMARY KEY,
  usuario_id  TEXT NOT NULL,
  item_id     TEXT NOT NULL,
  comprado_at TEXT NOT NULL,
  origen      TEXT NOT NULL DEFAULT 'compra'
    CHECK(origen IN ('compra','regalo','inicial')),
  UNIQUE(usuario_id, item_id)
);

CREATE INDEX IF NOT EXISTS idx_usuario_items_usuario
  ON usuario_items(usuario_id);
CREATE INDEX IF NOT EXISTS idx_usuario_items_item
  ON usuario_items(item_id);

INSERT OR IGNORE INTO schema_migrations(version, applied_at)
  VALUES(9, datetime('now'));
