-- PLAN-A §3 — persistencia de asistencia.
--
-- Contexto (ver tareas_pendientes/PLAN-A-bloqueantes-operativos.md §3):
-- `GET /api/profesor/asistencia` devolvía `[]` hardcodeado porque la
-- colección `asistencias` no existía en Prisma. Esta migración crea la
-- tabla real; el handler pasa a leer/escribir contra ella.
--
-- `estado` (presente|ausente|tarde|justificado) se valida en la capa
-- zod (api/src/schema/asistencia.ts), no con un CHECK de DB — mismo
-- patrón que `clases.status`.
--
-- Unicidad (clase_id, alumno_id, fecha): un alumno tiene un único
-- registro de asistencia por aula y por día; el upsert masivo de la
-- planilla se apoya en este índice.
CREATE TABLE "asistencias" (
    "id" TEXT NOT NULL,
    "clase_id" TEXT NOT NULL,
    "alumno_id" TEXT NOT NULL,
    "fecha" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "registrado_por" TEXT NOT NULL,
    "notas" TEXT,
    "created_at" TEXT NOT NULL,
    "updated_at" TEXT NOT NULL,

    CONSTRAINT "asistencias_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "asistencias_clase_id_alumno_id_fecha_key"
    ON "asistencias"("clase_id", "alumno_id", "fecha");

ALTER TABLE "asistencias"
    ADD CONSTRAINT "asistencias_clase_id_fkey"
    FOREIGN KEY ("clase_id") REFERENCES "clases"("id")
    ON DELETE RESTRICT ON UPDATE CASCADE;
