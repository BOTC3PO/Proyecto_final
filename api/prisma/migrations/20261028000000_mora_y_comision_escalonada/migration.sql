-- Interés por mora configurable por escuela, comisión escalonada y cobros voluntarios (cooperadora, aporte solidario).
-- Solo agrega columnas con valor por defecto y una tabla nueva: no cambia filas existentes.
ALTER TABLE "escuelas" ADD COLUMN "mora_activa" BOOLEAN NOT NULL DEFAULT false;
ALTER TABLE "escuelas" ADD COLUMN "mora_tasa" DOUBLE PRECISION NOT NULL DEFAULT 2;
ALTER TABLE "escuelas" ADD COLUMN "mora_periodo" TEXT NOT NULL DEFAULT 'mensual';
ALTER TABLE "escuelas" ADD COLUMN "mora_dias_gracia" INTEGER NOT NULL DEFAULT 0;
ALTER TABLE "escuelas" ADD COLUMN "comision_pct_aportes" DOUBLE PRECISION NOT NULL DEFAULT 0;
ALTER TABLE "escuelas" ADD COLUMN "tope_aporte_legal" DOUBLE PRECISION;

ALTER TABLE "cobros_escuela" ADD COLUMN "tipo" TEXT NOT NULL DEFAULT 'cuota';

ALTER TABLE "pagos" ADD COLUMN "monto_original" DOUBLE PRECISION;
ALTER TABLE "pagos" ADD COLUMN "interes_mora" DOUBLE PRECISION;

CREATE TABLE "comision_config" (
    "id" TEXT NOT NULL DEFAULT 'default',
    "json" TEXT NOT NULL,
    "updated_at" TEXT NOT NULL,
    CONSTRAINT "comision_config_pkey" PRIMARY KEY ("id")
);
