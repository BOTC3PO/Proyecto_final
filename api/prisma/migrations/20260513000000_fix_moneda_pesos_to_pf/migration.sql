-- Fix: normalise moneda column in tienda_items ('pesos' → 'PF').
-- Early seeds inserted rows without specifying moneda; some environments
-- ended up with 'pesos' instead of the canonical 'PF' code.
UPDATE public.tienda_items
SET moneda = 'PF'
WHERE moneda = 'pesos';

-- Ensure economia_config has an explicit default row so the backend
-- never falls back to the in-process hardcoded default.
INSERT INTO public.economia_config (id, json, updated_at)
VALUES (
  'default',
  '{"moneda":{"nombre":"Puntos de Foco","codigo":"PF","simbolo":"PF"},"limites":{"emisionDiariMaxima":500,"recompensaMaximaPorAccion":100,"recompensaDiariaMaximaPorUsuario":300},"inflacion":{"activa":false,"tasa":0},"deflacion":{"activa":false,"tasa":0}}',
  to_char(now(), 'YYYY-MM-DD"T"HH24:MI:SS"Z"')
)
ON CONFLICT (id) DO NOTHING;
