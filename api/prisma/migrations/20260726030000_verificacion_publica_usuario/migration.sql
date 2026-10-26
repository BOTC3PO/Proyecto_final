-- PLAN-roles-v3 B2 — verificación del perfil PÚBLICO de una persona.
--
-- Distinta de la de escuela: acá no se valida una institución sino a alguien
-- que dice ser profesor o directivo sin una escuela que responda por él. Sin
-- verificar, ese rol no se muestra en su perfil público — el rol de intranet
-- (la membresía) no se toca, porque ahí la escuela ya lo avala.
ALTER TABLE "usuarios"
  ADD COLUMN "verificacion_publica" TEXT NOT NULL DEFAULT 'no_solicitada';
ALTER TABLE "usuarios" ADD COLUMN "datos_verificacion" TEXT;
ALTER TABLE "usuarios" ADD COLUMN "motivo_rechazo_publico" TEXT;

CREATE INDEX IF NOT EXISTS "usuarios_verificacion_publica_idx"
  ON "usuarios" ("verificacion_publica");
