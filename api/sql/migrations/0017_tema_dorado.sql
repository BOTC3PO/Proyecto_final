-- Tema Dorado: legendario metálico (precio: 500 PF)
INSERT INTO public.tienda_items
  (id, tipo, nombre, descripcion, precio, moneda, asset_id, preview_css, activo, orden)
VALUES (
  'tema-dorado',
  'tema',
  'Dorado',
  'Tema metálico exclusivo con efectos de oro animados.',
  500,
  'PF',
  'dorado',
  NULL,
  1,
  33
)
ON CONFLICT (id) DO NOTHING;
