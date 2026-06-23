-- WO-13 — Copy-on-write al editar material compartido.
--
-- Agrega columnas de procedencia (`cloned_from_id`, `cloned_from_title`,
-- `cloned_from_owner_user_id`) a `modulos` y `libros` para que las copias
-- registren de dónde salieron. Es ADITIVA nullable: las filas viejas
-- (no-copias) quedan con las 3 columnas en NULL. Mismo patrón que las
-- migraciones previas (`20260617010000_modulo_subject`,
-- `20260620000000_modulo_scoring_config`).
--
-- Por qué 3 campos y no un FK a una tabla `sources`:
--  - El original puede ser borrado (`isDeleted = true`) sin perder la
--    referencia de procedencia de la copia — guardamos el id, el título y
--    el owner del momento de la copia.
--  - En Tier 1 la cardinalidad es 1:1 (una copia ⇒ un origen); no
--    justifica una tabla aparte.
--  - La UI puede mostrar "Copiado de: <título> (<owner>)" sin un join.
--
-- Notas sobre el ownership después de clonar:
--  - El `ownerUserId` de la copia es el solicitante (NO el original).
--  - El `cloned_from_owner_user_id` es el `ownerUserId` del original
--    al momento de copiar (puede ser NULL si el original era huérfano).
--  - La visibilidad / schoolId se mantienen por defecto en el copy-on-write
--    transparente; en el `duplicar` explícito el solicitante las puede
--    reescribir después.

-- AlterTable modulos
ALTER TABLE "modulos" ADD COLUMN "cloned_from_id" TEXT;
ALTER TABLE "modulos" ADD COLUMN "cloned_from_title" TEXT;
ALTER TABLE "modulos" ADD COLUMN "cloned_from_owner_user_id" TEXT;

-- AlterTable libros
ALTER TABLE "libros" ADD COLUMN "cloned_from_id" TEXT;
ALTER TABLE "libros" ADD COLUMN "cloned_from_title" TEXT;
ALTER TABLE "libros" ADD COLUMN "cloned_from_owner_user_id" TEXT;
