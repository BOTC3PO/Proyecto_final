-- K8 — codigos de invitacion para familias (tabla nueva: no toca filas existentes).
CREATE TABLE "codigos_invitacion_padre" (
    "id" TEXT NOT NULL,
    "escuela_id" TEXT NOT NULL,
    "hijo_id" TEXT NOT NULL,
    "codigo_hash" TEXT NOT NULL,
    "creado_por" TEXT NOT NULL,
    "created_at" TEXT NOT NULL,
    "expires_at" TEXT NOT NULL,
    "estado" TEXT NOT NULL DEFAULT 'activo',
    "usado_por" TEXT,
    "usado_at" TEXT,

    CONSTRAINT "codigos_invitacion_padre_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "codigos_invitacion_padre_codigo_hash_key" ON "codigos_invitacion_padre"("codigo_hash");
CREATE INDEX "codigos_invitacion_padre_escuela_id_hijo_id_idx" ON "codigos_invitacion_padre"("escuela_id", "hijo_id");
