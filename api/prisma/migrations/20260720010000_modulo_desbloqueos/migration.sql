CREATE TABLE "modulo_desbloqueos" (
    "id" TEXT NOT NULL,
    "modulo_id" TEXT NOT NULL,
    "usuario_id" TEXT,
    "aula_id" TEXT,
    "otorgado_por" TEXT NOT NULL,
    "created_at" TEXT NOT NULL,
    CONSTRAINT "modulo_desbloqueos_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "modulo_desbloqueos_modulo_id_idx" ON "modulo_desbloqueos"("modulo_id");
CREATE INDEX "modulo_desbloqueos_usuario_id_idx" ON "modulo_desbloqueos"("usuario_id");
CREATE INDEX "modulo_desbloqueos_aula_id_idx" ON "modulo_desbloqueos"("aula_id");
