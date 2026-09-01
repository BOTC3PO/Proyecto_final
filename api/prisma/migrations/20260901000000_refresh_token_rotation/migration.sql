-- F8 — refresh token rotation.
--
-- Hasta hoy los refresh JWTs eran 100% stateless: el handler verificaba
-- firma+exp y emitía uno nuevo sin invalidar el viejo. Un refresh robado
-- (XSS, log leak, etc.) permitía al atacante seguir refinando access
-- tokens hasta la expiración natural (7 días). Esta tabla le da al
-- servidor memoria de los `jti` vivos para:
--
--   * rotación real (cada refresh se marca `revoked=true` al usarse),
--   * reuse detection (mismo `jti` presentado dos veces ⇒ se revoca
--     toda la `family_id`, asumiendo compromiso),
--   * logout forzado del usuario (`UPDATE refresh_tokens SET revoked=true`
--     WHERE user_id = $1).

CREATE TABLE "refresh_tokens" (
  "id"          TEXT NOT NULL,
  "jti"         TEXT NOT NULL,
  "user_id"     TEXT NOT NULL,
  "family_id"   TEXT NOT NULL,
  "revoked"     BOOLEAN NOT NULL DEFAULT false,
  "replaced_by" TEXT,
  "expires_at"  TIMESTAMP(3) NOT NULL,
  "created_at"  TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "refresh_tokens_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "refresh_tokens_jti_key" ON "refresh_tokens"("jti");
CREATE INDEX "refresh_tokens_user_id_idx" ON "refresh_tokens"("user_id");
CREATE INDEX "refresh_tokens_family_id_idx" ON "refresh_tokens"("family_id");
CREATE INDEX "refresh_tokens_expires_at_idx" ON "refresh_tokens"("expires_at");