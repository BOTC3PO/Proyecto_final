-- L2: tareas del aula y entregas. Tablas nuevas; las viejas `tareas`/`entregas` no se tocan.
CREATE TABLE "tareas_aula" (
    "id" TEXT NOT NULL,
    "clase_id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "consigna" TEXT NOT NULL,
    "vence" TEXT,
    "puntaje_max" DOUBLE PRECISION,
    "estado" TEXT NOT NULL DEFAULT 'publicada',
    "creada_por" TEXT NOT NULL,
    "created_at" TEXT NOT NULL,
    "updated_at" TEXT NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "tareas_aula_pkey" PRIMARY KEY ("id")
);
CREATE INDEX "tareas_aula_clase_id_idx" ON "tareas_aula"("clase_id");

CREATE TABLE "entregas_tarea" (
    "id" TEXT NOT NULL,
    "tarea_id" TEXT NOT NULL,
    "alumno_id" TEXT NOT NULL,
    "texto" TEXT NOT NULL,
    "enlace" TEXT,
    "entregada_at" TEXT NOT NULL,
    "tarde" BOOLEAN NOT NULL DEFAULT false,
    "nota" DOUBLE PRECISION,
    "devolucion" TEXT,
    "corregida_por" TEXT,
    "corregida_at" TEXT,
    CONSTRAINT "entregas_tarea_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "entregas_tarea_tarea_id_alumno_id_key" ON "entregas_tarea"("tarea_id", "alumno_id");
CREATE INDEX "entregas_tarea_alumno_id_idx" ON "entregas_tarea"("alumno_id");
