-- Rendimiento del listado de módulos (GET /api/modulos): ordena por updated_at DESC con LIMIT. Sin índice recorría y
-- ordenaba toda la tabla en cada pedido (1,985 ms con 2.386 módulos; con el índice 0,030 ms; mediciones del 2026-11-09).
-- updated_at es TEXT con fechas ISO, que ordenan bien como texto.
CREATE INDEX IF NOT EXISTS "modulos_updated_at_idx" ON "modulos"("updated_at" DESC);
