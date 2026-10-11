-- H4 — el ban guardaba `banned_at` / `banned_until` en columnas que no existían
-- (la escritura iba con `as any`), así que el ban no se registraba ni vencía.
-- Cambio aditivo y nulable: no toca filas existentes.
ALTER TABLE "usuarios" ADD COLUMN "banned_at" TEXT;
ALTER TABLE "usuarios" ADD COLUMN "banned_until" TEXT;
