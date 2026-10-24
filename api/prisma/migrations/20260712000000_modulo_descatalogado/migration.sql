-- PLAN-X §7 — "descatalogado": el profesor dueño oculta el módulo de
-- los listados generales sin borrarlo. Sigue visible para el dueño,
-- para alumnos invitados (modulo_invitaciones) y para cualquier aula
-- donde ya esté asignado (clase_modulos).
ALTER TABLE "modulos" ADD COLUMN "descatalogado" BOOLEAN NOT NULL DEFAULT false;

CREATE TABLE "modulo_invitaciones" (
    "modulo_id" TEXT NOT NULL,
    "usuario_id" TEXT NOT NULL,
    "invited_by" TEXT,
    "created_at" TEXT NOT NULL,

    CONSTRAINT "modulo_invitaciones_pkey" PRIMARY KEY ("modulo_id","usuario_id")
);

CREATE INDEX "modulo_invitaciones_usuario_id_idx" ON "modulo_invitaciones"("usuario_id");
