-- Temas gratuitos (precio 0 — todos los tienen desde el inicio)
INSERT OR IGNORE INTO tienda_items
  (id, tipo, nombre, descripcion, precio, asset_id, activo, orden, created_at)
VALUES
  ('item-tema-clasico',  'tema', 'Clásico',
   'Diseño limpio y familiar.', 0, 'clasico',  1, 1, datetime('now')),
  ('item-tema-nocturno', 'tema', 'Nocturno',
   'Colores oscuros para modo noche.', 0, 'nocturno', 1, 3, datetime('now'));

-- Temas de pago
INSERT OR IGNORE INTO tienda_items
  (id, tipo, nombre, descripcion, precio, asset_id, activo, orden, created_at)
VALUES
  ('item-tema-aurora',   'tema', 'Aurora',
   'Paleta suave con gradientes cálidos.', 40, 'aurora',   1, 2, datetime('now')),
  ('item-tema-vibrante', 'tema', 'Vibrante',
   'Acentos coloridos para destacar logros.', 65, 'vibrante', 1, 4, datetime('now')),
  ('item-tema-bosque',   'tema', 'Bosque',
   'Tonos naturales y verdes.', 40, 'bosque',   1, 5, datetime('now')),
  ('item-tema-galaxy',   'tema', 'Galaxy',
   'Fondo animado con gradiente espacial.', 80, 'galaxy',   1, 6, datetime('now')),
  ('item-tema-sunset',   'tema', 'Sunset',
   'Degradado cálido al atardecer.', 80, 'sunset',   1, 7, datetime('now')),
  ('item-tema-ocean',    'tema', 'Ocean',
   'Profundidades del océano animadas.', 80, 'ocean',    1, 8, datetime('now')),
  ('item-tema-candy',    'tema', 'Candy',
   'Colores pastel con navbar animado.', 90, 'candy',    1, 9, datetime('now')),
  ('item-tema-neon',     'tema', 'Neon',
   'Negro con efectos neón pulsantes.', 100, 'neon',    1, 10, datetime('now'));

-- Nuevos temas estáticos de pago
INSERT OR IGNORE INTO tienda_items
  (id, tipo, nombre, descripcion, precio, moneda, asset_id, activo, orden, created_at)
VALUES
  ('item-tema-obsidian', 'tema', 'Obsidian', 'Oscuro profundo con acentos violeta.',   50, 'PF', 'obsidian', 1, 13, datetime('now')),
  ('item-tema-sakura',   'tema', 'Sakura',   'Rosa japonés delicado.',                 55, 'PF', 'sakura',   1, 14, datetime('now')),
  ('item-tema-carbon',   'tema', 'Carbon',   'Negro industrial con acento naranja.',   50, 'PF', 'carbon',   1, 15, datetime('now')),
  ('item-tema-arctic',   'tema', 'Arctic',   'Azul polar limpio y claro.',             45, 'PF', 'arctic',   1, 16, datetime('now')),
  ('item-tema-lava',     'tema', 'Lava',     'Rojo magma oscuro e intenso.',           60, 'PF', 'lava',     1, 17, datetime('now')),
  ('item-tema-emerald',  'tema', 'Emerald',  'Verde esmeralda elegante.',              45, 'PF', 'emerald',  1, 18, datetime('now')),
  ('item-tema-dusk',     'tema', 'Dusk',     'Violeta nocturno suave.',                55, 'PF', 'dusk',     1, 19, datetime('now'));

-- Temas legendarios
INSERT OR IGNORE INTO tienda_items
  (id, tipo, nombre, descripcion, precio, moneda, asset_id, activo, orden, created_at)
VALUES
  ('item-tema-aurora-boreal', 'tema', 'Aurora Boreal', 'Auroras boreales animadas exclusivas.', 250, 'PF', 'aurora-boreal', 1, 30, datetime('now')),
  ('item-tema-cosmos',        'tema', 'Cosmos',        'Universo con estrellas y nebulosas.',    300, 'PF', 'cosmos',        1, 31, datetime('now')),
  ('item-tema-magma',         'tema', 'Magma',         'Lava fluyendo desde las profundidades.', 280, 'PF', 'magma',         1, 32, datetime('now'));

-- Avatares base (SVG generados desde las iniciales — precio 0)
INSERT OR IGNORE INTO tienda_items
  (id, tipo, nombre, descripcion, precio, asset_id, activo, orden, created_at)
VALUES
  ('item-avatar-iniciales', 'avatar', 'Iniciales',
   'Avatar con tus iniciales.', 0, 'iniciales', 1, 1, datetime('now')),
  ('item-avatar-identicon', 'avatar', 'Identicon',
   'Patrón único generado desde tu ID.', 0, 'identicon', 1, 2, datetime('now'));
