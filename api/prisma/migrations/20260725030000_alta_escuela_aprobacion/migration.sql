-- Alta de escuela con aprobación. La escuela nace "pendiente" (ver la
-- migración anterior) y no puede cobrar hasta que el admin la verifique.
ALTER TABLE "escuelas" ADD COLUMN "directivo_principal_id" TEXT;
ALTER TABLE "escuelas" ADD COLUMN "datos_verificacion" TEXT;
ALTER TABLE "escuelas" ADD COLUMN "motivo_rechazo" TEXT;

-- Sin FK a `usuarios` a propósito: si se borra la cuenta del directivo
-- principal, la escuela no debe caerse ni quedar bloqueada — queda sin
-- principal y el admin reasigna.
CREATE INDEX IF NOT EXISTS "escuelas_estado_verificacion_idx"
  ON "escuelas" ("estado_verificacion");
