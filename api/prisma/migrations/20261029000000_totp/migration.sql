-- B13: verificación en dos pasos (TOTP). Columnas nuevas con valor por defecto; no cambia filas existentes.
ALTER TABLE "usuarios" ADD COLUMN "totp_secreto" TEXT;
ALTER TABLE "usuarios" ADD COLUMN "totp_activo" BOOLEAN NOT NULL DEFAULT false;
ALTER TABLE "usuarios" ADD COLUMN "totp_ultimo_paso" INTEGER;
ALTER TABLE "usuarios" ADD COLUMN "totp_recuperacion" TEXT;
