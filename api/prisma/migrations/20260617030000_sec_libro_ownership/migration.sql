-- SEC-LIBRO — agregar dueño y ámbito de visibilidad a `libros`.
--
-- Contexto: hasta ahora cualquier usuario autenticado (incluido un
-- alumno con rol USER) podía pegarle a `POST /api/libros` con un id
-- existente y SOBRESCRIBIR el libro para todos. El back no podía
-- chequear permisos porque no había a quién comparar: la tabla no
-- tenía dueño ni ámbito. Esta migración agrega los campos para
-- replicar el modelo de permisos de `vblang_datasets`
-- (ver `canReadDataset` en `api/src/routes/vblang-datasets.ts:54-68`):
--
--   - `owner_user_id` (nullable): el creador del libro. Permite
--     identificar al dueño para los checks de edición. Nullable para
--     no romper libros viejos (sin dueño → solo ADMIN edita hasta
--     que se reclamen explícitamente).
--   - `visibility` (default 'privado'): ámbito de edición/lectura.
--     Valores esperados: 'privado' (solo dueño + admin) y
--     'escuela' (todo el staff de esa escuela). Default seguro:
--     'privado'.
--   - `school_id` (nullable): cuando `visibility = 'escuela'`,
--     acota el alcance a una escuela concreta. Sin esto no se puede
--     decidir si un TEACHER de OTRA escuela está autorizado.
--
-- Nota: la tabla que efectivamente usan las rutas es `libros`
-- (modelo `Libro` en schema.prisma). Existe también `libros_json`
-- (modelo `LibroJson`) que aparenta ser legacy/no usada por
-- ningún endpoint; no se toca acá para no inventar dependencias.
--
-- Aditiva nullable: los libros existentes siguen leyéndose. El
-- handler de POST trata `owner_user_id = NULL` como "huérfano":
-- solo ADMIN puede sobrescribirlo (estrategia conservadora).
--
-- ⚠ No se hace backfill automático. Asignar el dueño post-hoc
-- requeriría adivinar (¿el `createdBy` de qué módulo?), y el riesgo
-- de regalarle un libro al usuario equivocado es peor que dejarlo
-- huérfano. Reclamar a mano cuando haga falta.

-- AlterTable
ALTER TABLE "libros" ADD COLUMN "owner_user_id" TEXT;
ALTER TABLE "libros" ADD COLUMN "visibility" TEXT NOT NULL DEFAULT 'privado';
ALTER TABLE "libros" ADD COLUMN "school_id" TEXT;

-- CreateIndex — lookups por dueño y por ámbito escuela
CREATE INDEX "libros_owner_user_id_idx" ON "libros"("owner_user_id");
CREATE INDEX "libros_school_id_visibility_idx" ON "libros"("school_id", "visibility");
