-- H3 — reporte de mensajes directos. Antes el panel de moderacion leia un modelo que no existia y
-- ningun usuario podia reportar un mensaje. Tabla nueva: no toca filas existentes.
CREATE TABLE "mensajes_reportados" (
    "id" TEXT NOT NULL,
    "mensaje_id" TEXT NOT NULL,
    "hilo_id" TEXT NOT NULL,
    "escuela_id" TEXT NOT NULL,
    "reportado_por" TEXT NOT NULL,
    "autor_id" TEXT NOT NULL,
    "motivo" TEXT,
    "cuerpo" TEXT NOT NULL,
    "estado" TEXT NOT NULL DEFAULT 'pendiente',
    "resuelto_por" TEXT,
    "resolucion" TEXT,
    "resuelto_at" TEXT,
    "created_at" TEXT NOT NULL,

    CONSTRAINT "mensajes_reportados_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "mensajes_reportados_mensaje_id_reportado_por_key" ON "mensajes_reportados"("mensaje_id", "reportado_por");
CREATE INDEX "mensajes_reportados_escuela_id_estado_idx" ON "mensajes_reportados"("escuela_id", "estado");
