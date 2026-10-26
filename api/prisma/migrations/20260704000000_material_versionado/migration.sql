-- PLAN-G §1 (item 25) -- puente "guardar como material escolar" para los
-- editores standalone (mapa, timeline, interactivo, presentacion).
-- Patron padre+version igual a quizzes/quiz_versions. Aditiva: no toca
-- ninguna tabla existente.

CREATE TABLE "materiales_guardados" (
  "id" TEXT PRIMARY KEY,
  "tipo" TEXT NOT NULL,
  "titulo" TEXT NOT NULL,
  "owner_user_id" TEXT NOT NULL,
  "school_id" TEXT,
  "visibility" TEXT NOT NULL DEFAULT 'privado',
  "current_version_id" TEXT,
  "is_deleted" BOOLEAN NOT NULL DEFAULT false,
  "created_at" TEXT NOT NULL DEFAULT '',
  "updated_at" TEXT NOT NULL DEFAULT ''
);

CREATE TABLE "material_versions" (
  "id" TEXT PRIMARY KEY,
  "material_id" TEXT NOT NULL,
  "version_number" INTEGER NOT NULL,
  "schema_version" INTEGER NOT NULL DEFAULT 1,
  "contenido" TEXT NOT NULL,
  "content_hash" TEXT,
  "created_at" TEXT NOT NULL DEFAULT '',
  "created_by" TEXT,
  CONSTRAINT "material_versions_material_id_fkey"
    FOREIGN KEY ("material_id") REFERENCES "materiales_guardados"("id")
);

CREATE INDEX "materiales_guardados_owner_user_id_idx" ON "materiales_guardados"("owner_user_id");
CREATE INDEX "materiales_guardados_school_id_visibility_idx" ON "materiales_guardados"("school_id", "visibility");
CREATE UNIQUE INDEX "material_versions_material_id_version_number_key" ON "material_versions"("material_id", "version_number");
