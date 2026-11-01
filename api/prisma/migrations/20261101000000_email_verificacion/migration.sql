-- B9: verificación del correo en el registro. Las cuentas que ya existen quedan confirmadas (se dieron de alta
-- antes de que se pidiera); solo los registros nuevos tienen que confirmar.
ALTER TABLE "usuarios" ADD COLUMN "email_verificado_at" TEXT;
UPDATE "usuarios" SET "email_verificado_at" = "created_at" WHERE "email_verificado_at" IS NULL;

CREATE TABLE "email_verificaciones" (
    "id" TEXT NOT NULL,
    "usuario_id" TEXT NOT NULL,
    "token_hash" TEXT NOT NULL,
    "expires_at" TEXT NOT NULL,
    "used_at" TEXT,
    "created_at" TEXT NOT NULL,
    CONSTRAINT "email_verificaciones_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "email_verificaciones_token_hash_key" ON "email_verificaciones"("token_hash");
CREATE INDEX "email_verificaciones_usuario_id_idx" ON "email_verificaciones"("usuario_id");
