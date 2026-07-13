-- PLAN-R Parte 5 — tokens de push (Expo) de la app móvil. Un usuario
-- puede tener más de una fila (un dispositivo por token); el envío
-- real queda para otra sesión, esto sólo persiste dónde mandar el push.

CREATE TABLE "push_tokens" (
  "id" TEXT PRIMARY KEY,
  "user_id" TEXT NOT NULL,
  "token" TEXT NOT NULL,
  "platform" TEXT,
  "created_at" TEXT NOT NULL,
  "updated_at" TEXT NOT NULL
);

CREATE UNIQUE INDEX "push_tokens_token_key" ON "push_tokens"("token");
CREATE INDEX "push_tokens_user_id_idx" ON "push_tokens"("user_id");
