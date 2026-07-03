-- PLAN-B Fase 2 — núcleo de cobros escuela→familias.
--
-- Contexto (ver tareas_pendientes/PLAN-B-negocio-comisiones-pasarelas.md
-- Fase 2): reemplaza el modelo de negocio de suscripción por comisión
-- sobre cobros escuela→familias. Este es el dominio provider-agnostic
-- (la conexión con Mercado Pago/Stripe/Cryptomus es Fase 3, no requiere
-- cambios de esquema).
--
-- `pagos` reemplaza/absorbe el par Invoice/Receipt en memoria de
-- api/src/lib/payments/index.ts para este dominio (el de "enterprise
-- contracts" en payments.ts es un dominio B2B distinto, no se toca acá).

CREATE TABLE "cobros_escuela" (
    "id" TEXT NOT NULL,
    "escuela_id" TEXT NOT NULL,
    "concepto" TEXT NOT NULL,
    "descripcion" TEXT,
    "monto_unitario" DOUBLE PRECISION NOT NULL,
    "moneda" TEXT NOT NULL DEFAULT 'ARS',
    "vencimiento" TEXT,
    "estado" TEXT NOT NULL DEFAULT 'borrador',
    "created_by" TEXT NOT NULL,
    "created_at" TEXT NOT NULL,
    "updated_at" TEXT NOT NULL,

    CONSTRAINT "cobros_escuela_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "cobros_escuela_escuela_id_idx" ON "cobros_escuela"("escuela_id");

ALTER TABLE "cobros_escuela"
    ADD CONSTRAINT "cobros_escuela_escuela_id_fkey"
    FOREIGN KEY ("escuela_id") REFERENCES "escuelas"("id")
    ON DELETE RESTRICT ON UPDATE CASCADE;

CREATE TABLE "pagos" (
    "id" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "provider_ref" TEXT,
    "estado" TEXT NOT NULL DEFAULT 'pendiente',
    "monto_bruto" DOUBLE PRECISION NOT NULL,
    "comision_vb" DOUBLE PRECISION,
    "monto_neto_escuela" DOUBLE PRECISION,
    "raw" TEXT,
    "created_at" TEXT NOT NULL,
    "updated_at" TEXT NOT NULL,

    CONSTRAINT "pagos_pkey" PRIMARY KEY ("id")
);

-- Idempotencia de webhooks (Fase 3): nunca dos Pago para el mismo
-- (provider, providerRef) aunque el provider reintente la notificación.
CREATE UNIQUE INDEX "pagos_provider_provider_ref_key" ON "pagos"("provider", "provider_ref");

CREATE TABLE "cuotas_alumno" (
    "id" TEXT NOT NULL,
    "cobro_id" TEXT NOT NULL,
    "alumno_id" TEXT NOT NULL,
    "pagador_id" TEXT,
    "estado" TEXT NOT NULL DEFAULT 'pendiente',
    "monto_final" DOUBLE PRECISION NOT NULL,
    "pago_id" TEXT,
    "created_at" TEXT NOT NULL,
    "updated_at" TEXT NOT NULL,

    CONSTRAINT "cuotas_alumno_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "cuotas_alumno_cobro_id_alumno_id_key" ON "cuotas_alumno"("cobro_id", "alumno_id");
CREATE INDEX "cuotas_alumno_alumno_id_idx" ON "cuotas_alumno"("alumno_id");
CREATE INDEX "cuotas_alumno_pagador_id_idx" ON "cuotas_alumno"("pagador_id");

ALTER TABLE "cuotas_alumno"
    ADD CONSTRAINT "cuotas_alumno_cobro_id_fkey"
    FOREIGN KEY ("cobro_id") REFERENCES "cobros_escuela"("id")
    ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "cuotas_alumno"
    ADD CONSTRAINT "cuotas_alumno_pago_id_fkey"
    FOREIGN KEY ("pago_id") REFERENCES "pagos"("id")
    ON DELETE SET NULL ON UPDATE CASCADE;
