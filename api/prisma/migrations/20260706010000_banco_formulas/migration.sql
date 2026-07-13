-- PLAN-E §19 (F2) — banco de fórmulas: entidad propia (nombre + LaTeX +
-- materia) con scoping global/escuela. Las globales se siembran con owner
-- "system" + visibility "publica" (mismo patrón F6-01 de plantillas oficiales).

CREATE TABLE "formulas" (
  "id" TEXT PRIMARY KEY,
  "owner_user_id" TEXT NOT NULL,
  "school_id" TEXT,
  "visibility" TEXT NOT NULL,
  "nombre" TEXT NOT NULL,
  "materia" TEXT,
  "latex" TEXT NOT NULL,
  "descripcion" TEXT,
  "is_deleted" BOOLEAN NOT NULL DEFAULT false,
  "created_at" TEXT NOT NULL,
  "updated_at" TEXT NOT NULL
);

CREATE INDEX "formulas_school_id_visibility_idx" ON "formulas"("school_id", "visibility");
CREATE INDEX "formulas_materia_idx" ON "formulas"("materia");
CREATE INDEX "formulas_owner_user_id_idx" ON "formulas"("owner_user_id");
