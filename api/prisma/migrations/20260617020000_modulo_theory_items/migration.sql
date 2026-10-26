-- FIX-GUARDADO — agregar columna `theory_items` (teoría como contenido)
-- a la tabla `modulos`. Migración ADITIVA nullable: módulos viejos
-- quedan con `theory_items = null` (sin teoría embebida).
--
-- El front envía `theoryItems: [{ id, title, type, detail }]` y el back
-- lo persiste acá como JSON serializado. No confundir con `teoria_id`
-- (referencia a TeoriaJson) que es el modelo viejo de referencias.

-- AlterTable
ALTER TABLE "modulos" ADD COLUMN "theory_items" TEXT;
