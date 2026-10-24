-- PLAN-V §1 — períodos académicos EN el aula (no un motor de calendario
-- global). Lista libre y ordenada de `{ nombre, desde, hasta }` por
-- aula, declarada por el docente/directivo. `desde`/`hasta` son fechas
-- ISO (yyyy-mm-dd) como string, mismo patrón que `asistencias.fecha`.
CREATE TABLE "clase_periodos" (
    "id" TEXT NOT NULL,
    "clase_id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "desde" TEXT NOT NULL,
    "hasta" TEXT NOT NULL,
    "orden" INTEGER NOT NULL,
    "created_at" TEXT NOT NULL,
    "updated_at" TEXT NOT NULL,

    CONSTRAINT "clase_periodos_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "clase_periodos_clase_id_idx" ON "clase_periodos"("clase_id");

ALTER TABLE "clase_periodos"
    ADD CONSTRAINT "clase_periodos_clase_id_fkey"
    FOREIGN KEY ("clase_id") REFERENCES "clases"("id")
    ON DELETE RESTRICT ON UPDATE CASCADE;
