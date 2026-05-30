-- Fase 5.1 — modelo de comisión por escuela.

-- AlterTable
ALTER TABLE "escuelas" ADD COLUMN     "modo_gestion" TEXT DEFAULT 'centralizado',
ADD COLUMN     "comision_pct" DOUBLE PRECISION;

-- CreateTable
CREATE TABLE "transacciones_escuela" (
    "id" TEXT NOT NULL,
    "escuela_id" TEXT NOT NULL,
    "monto_total" DOUBLE PRECISION NOT NULL,
    "comision_vb" DOUBLE PRECISION NOT NULL,
    "monto_neto" DOUBLE PRECISION NOT NULL,
    "estado" TEXT NOT NULL DEFAULT 'registrada',
    "mp_payment_id" TEXT,
    "created_at" TEXT NOT NULL,

    CONSTRAINT "transacciones_escuela_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "liquidaciones_escuela" (
    "id" TEXT NOT NULL,
    "escuela_id" TEXT NOT NULL,
    "periodo" TEXT NOT NULL,
    "monto_liquidado" DOUBLE PRECISION NOT NULL,
    "cant_transacc" INTEGER NOT NULL,
    "metodo" TEXT NOT NULL,
    "created_at" TEXT NOT NULL,

    CONSTRAINT "liquidaciones_escuela_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "transacciones_escuela_escuela_id_idx" ON "transacciones_escuela"("escuela_id");

-- CreateIndex
CREATE INDEX "liquidaciones_escuela_escuela_id_idx" ON "liquidaciones_escuela"("escuela_id");

-- AddForeignKey
ALTER TABLE "transacciones_escuela" ADD CONSTRAINT "transacciones_escuela_escuela_id_fkey" FOREIGN KEY ("escuela_id") REFERENCES "escuelas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "liquidaciones_escuela" ADD CONSTRAINT "liquidaciones_escuela_escuela_id_fkey" FOREIGN KEY ("escuela_id") REFERENCES "escuelas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
