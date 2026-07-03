-- PLAN-B Fase 3 — conexión de cada escuela con un provider de pago
-- (Mercado Pago / Stripe / Cryptomus). Ver comentario del modelo en
-- schema.prisma sobre qué credenciales guarda y por qué.
CREATE TABLE "escuelas_pasarelas" (
    "id" TEXT NOT NULL,
    "escuela_id" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "cuenta_conectada_id" TEXT,
    "credenciales_cifradas" TEXT,
    "activa" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TEXT NOT NULL,
    "updated_at" TEXT NOT NULL,

    CONSTRAINT "escuelas_pasarelas_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "escuelas_pasarelas_escuela_id_provider_key" ON "escuelas_pasarelas"("escuela_id", "provider");

ALTER TABLE "escuelas_pasarelas"
    ADD CONSTRAINT "escuelas_pasarelas_escuela_id_fkey"
    FOREIGN KEY ("escuela_id") REFERENCES "escuelas"("id")
    ON DELETE RESTRICT ON UPDATE CASCADE;
