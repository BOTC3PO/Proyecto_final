-- Fecha de borrado para la purga definitiva a los 4 años. Columnas nuevas, sin tocar filas existentes.
ALTER TABLE "actividades_aula" ADD COLUMN "deleted_at" TEXT;
ALTER TABLE "calendario_escuela" ADD COLUMN "deleted_at" TEXT;
