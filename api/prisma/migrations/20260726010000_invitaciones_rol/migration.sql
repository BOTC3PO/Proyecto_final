-- PLAN-roles-v3 A3 — solicitudes e invitaciones de rol.
-- Una sola tabla para los dos sentidos: `iniciado_por = destinatario`
-- significa que la persona lo PIDIÓ; si difieren, alguien la INVITÓ. Quién
-- aprueba se deriva de eso más el rol (ver lib/invitaciones.ts).
CREATE TABLE "invitaciones_rol" (
  "id"           TEXT PRIMARY KEY,
  "escuela_id"   TEXT NOT NULL,
  "destinatario" TEXT NOT NULL,
  "rol"          TEXT NOT NULL,
  "iniciado_por" TEXT NOT NULL,
  "estado"       TEXT NOT NULL DEFAULT 'pendiente',
  "resuelto_por" TEXT,
  "motivo"       TEXT,
  "created_at"   TEXT NOT NULL,
  "updated_at"   TEXT NOT NULL
);
CREATE INDEX "invitaciones_rol_destinatario_estado_idx" ON "invitaciones_rol" ("destinatario", "estado");
CREATE INDEX "invitaciones_rol_escuela_estado_idx" ON "invitaciones_rol" ("escuela_id", "estado");
