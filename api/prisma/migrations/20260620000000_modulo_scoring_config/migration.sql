-- WO-3 — agregar columna `scoring_config` (escala de notas a nivel módulo)
-- a la tabla `modulos`. Migración ADITIVA nullable: módulos viejos quedan
-- con `scoring_config = null` y el cálculo de nota cae al fallback histórico
-- (scale-0-100 + QuizUmbral.umbral), preservando exactamente el comportamiento
-- previo. Se guarda como JSON serializado `{ "systemId": "...",
-- "minPassingScore"?: "..." }`; el GET lo parsea y el grade path
-- (`quiz-attempts.ts` → `resolveScoringConfig`) lo consume.
--
-- Mismo patrón que `20260617040000_modulo_level`.

-- AlterTable
ALTER TABLE "modulos" ADD COLUMN "scoring_config" TEXT;
