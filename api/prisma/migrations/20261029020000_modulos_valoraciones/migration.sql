-- L5: valoración de módulos (1 a 5), una por persona. Tabla nueva.
CREATE TABLE "modulos_valoraciones" (
    "usuario_id" TEXT NOT NULL,
    "modulo_id" TEXT NOT NULL,
    "puntaje" INTEGER NOT NULL,
    "created_at" TEXT NOT NULL,
    "updated_at" TEXT NOT NULL,
    CONSTRAINT "modulos_valoraciones_pkey" PRIMARY KEY ("usuario_id","modulo_id")
);
CREATE INDEX "modulos_valoraciones_modulo_id_idx" ON "modulos_valoraciones"("modulo_id");
