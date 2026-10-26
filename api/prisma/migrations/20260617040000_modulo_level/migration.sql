-- FIX-MODULO-CRASH-LEVEL — agregar columna `level` (nivel educativo)
-- a la tabla `modulos`. Migración ADITIVA nullable: módulos viejos
-- quedan con `level = null` (sin nivel persistido). El editor trata
-- `null` como string vacío y el usuario puede tipear el nivel sin
-- romper.
--
-- Mismo patrón que la migración `20260617010000_modulo_subject` (la
-- columna `subject`/materia). El front envía `level: form.level` en
-- el payload (useModuloPersistence.ts:218), el ModuleSchema lo acepta
-- (modulo.ts:210), pero la fila `Modulo` no tenía columna. Este fix
-- agrega la columna; la persistencia (POST/PUT que escriben el campo)
-- y la lectura (GET que lo devuelve) la hace el código del back.

-- AlterTable
ALTER TABLE "modulos" ADD COLUMN "level" TEXT;
