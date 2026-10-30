-- Documento 17: módulos favoritos por persona. Tabla nueva.
CREATE TABLE "modulos_favoritos" (
    "usuario_id" TEXT NOT NULL,
    "modulo_id" TEXT NOT NULL,
    "created_at" TEXT NOT NULL,
    CONSTRAINT "modulos_favoritos_pkey" PRIMARY KEY ("usuario_id","modulo_id")
);
