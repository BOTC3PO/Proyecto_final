-- FIX-CALENDARIO-B:Mejora B del FIX-CALENDARIO — permitir acotar un
-- evento de escuela a UN aula específica. Decisión B sobre C (tabla
-- puente M:N): el caso real "varias secciones" vive en
-- CalendarioAula/ActividadAula; acá basta con global-o-un-aula.
-- Migración ADITIVA: columna nullable, no rompe eventos existentes
-- (aula_id = null = global, comportamiento histórico intacto).

-- AlterTable
ALTER TABLE "calendario_escuela" ADD COLUMN     "aula_id" TEXT;

-- CreateIndex: ayuda al feed unificado a filtrar por aula acotada.
CREATE INDEX "calendario_escuela_aula_id_idx" ON "calendario_escuela"("aula_id");
