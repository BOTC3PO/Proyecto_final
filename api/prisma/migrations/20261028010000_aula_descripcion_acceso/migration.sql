-- L1: el aula guarda descripción, categoría y tipo de acceso. Las aulas existentes quedan privadas.
ALTER TABLE "clases" ADD COLUMN "description" TEXT;
ALTER TABLE "clases" ADD COLUMN "category" TEXT;
ALTER TABLE "clases" ADD COLUMN "access_type" TEXT NOT NULL DEFAULT 'privada';
