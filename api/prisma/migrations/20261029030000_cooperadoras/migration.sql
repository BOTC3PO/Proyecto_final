-- Cooperadora escolar con cuenta de cobro propia. Las pasarelas y transacciones existentes quedan como de la
-- escuela (valor por defecto).
CREATE TABLE "cooperadoras" (
    "id" TEXT NOT NULL,
    "escuela_id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "cuit" TEXT NOT NULL,
    "contacto_email" TEXT,
    "estado_verificacion" TEXT NOT NULL DEFAULT 'pendiente',
    "motivo_rechazo" TEXT,
    "created_at" TEXT NOT NULL,
    "updated_at" TEXT NOT NULL,
    CONSTRAINT "cooperadoras_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "cooperadoras_escuela_id_key" ON "cooperadoras"("escuela_id");

ALTER TABLE "escuelas_pasarelas" ADD COLUMN "titular" TEXT NOT NULL DEFAULT 'escuela';
DROP INDEX "escuelas_pasarelas_escuela_id_provider_key";
CREATE UNIQUE INDEX "escuelas_pasarelas_escuela_id_provider_titular_key" ON "escuelas_pasarelas"("escuela_id", "provider", "titular");

ALTER TABLE "transacciones_escuela" ADD COLUMN "titular" TEXT NOT NULL DEFAULT 'escuela';
