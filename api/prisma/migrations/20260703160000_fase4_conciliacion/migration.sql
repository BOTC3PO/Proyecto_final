-- PLAN-B Fase 4 — conciliación y liquidaciones.
-- `provider` en transacciones_escuela: de qué pasarela vino el cobro.
-- Default "mercadopago" porque todo lo histórico (pre-Fase-3) era del
-- SaaS de suscripción, siempre MP.
ALTER TABLE "transacciones_escuela" ADD COLUMN "provider" TEXT NOT NULL DEFAULT 'mercadopago';

-- `tipo` en liquidaciones_escuela: "manual" (VB retiene y liquida por
-- fuera) vs "split_nativo" (Stripe/MP ya depositaron directo, esta fila
-- es sólo informativa). Default "manual" — el flujo de liquidación
-- manual existente (POST /api/comisiones/admin/liquidar) es el único
-- que crea filas hoy.
ALTER TABLE "liquidaciones_escuela" ADD COLUMN "tipo" TEXT NOT NULL DEFAULT 'manual';
