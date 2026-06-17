-- FIX-MODULO-CRASH — agregar columna `subject` (materia) a la
-- tabla `modulos`. Migración ADITIVA nullable: eventos viejos
-- quedan con `subject = null` (sin materia asignada), el editor
-- los maneja como string vacío y el usuario puede tipear la
-- materia sin romper.
--
-- Esta migración es PREPARATORIA. La persistencia (POST/PUT que
-- escriben este campo) la agrega FIX-GUARDADO. Este fix solo
-- necesitaba la columna para que el GET pudiera devolverla.

-- AlterTable
ALTER TABLE "modulos" ADD COLUMN "subject" TEXT;
