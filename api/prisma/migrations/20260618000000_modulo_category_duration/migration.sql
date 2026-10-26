-- FIX-TEST4-MOD-01 — agregar columnas `category` y `duration_minutes`
-- a la tabla `modulos`. Migración ADITIVA nullable: módulos viejos
-- (creados antes de la beta 0.0.5 con el schema original) quedan
-- con ambas columnas en `NULL`.
--
-- Historia: la migración `20260521034216_modulo_opcional` agregó
-- estas columnas originalmente. La migración trampa
-- `20260523184108_vblang_models` las dropeó junto con `subject`,
-- `level` y `duration_minutes`. Las migraciones de junio
-- (`20260617010000_modulo_subject` y `20260617040000_modulo_level`)
-- re-agregaron `subject` y `level`, pero `category` y
-- `duration_minutes` quedaron sin restaurar. Este fix las
-- restaura para que el front pueda persistirlas.
--
-- El front ya envía `category` y `durationMinutes` en el payload
-- (useModuloPersistence.ts:217,219) y el Zod schema las acepta
-- (modulo.ts:209,211), pero la fila Modulo no las tenía. Después
-- de esta migración, el back puede leerlas y escribirlas.

-- AlterTable
ALTER TABLE "modulos" ADD COLUMN "category" TEXT;
ALTER TABLE "modulos" ADD COLUMN "duration_minutes" INTEGER;
