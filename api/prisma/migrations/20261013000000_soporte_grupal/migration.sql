-- K10b — chat de soporte grupal. Tablas nuevas: no tocan filas existentes.
CREATE TABLE "hilos_soporte" (
    "id" TEXT NOT NULL,
    "solicitante_id" TEXT NOT NULL,
    "escuela_id" TEXT,
    "ultimo_msg" TEXT,
    "ultimo_at" TEXT,
    "created_at" TEXT NOT NULL,
    CONSTRAINT "hilos_soporte_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "hilos_soporte_solicitante_id_key" ON "hilos_soporte"("solicitante_id");
CREATE INDEX "hilos_soporte_escuela_id_idx" ON "hilos_soporte"("escuela_id");

CREATE TABLE "mensajes_soporte" (
    "id" TEXT NOT NULL,
    "hilo_id" TEXT NOT NULL,
    "sender_id" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "created_at" TEXT NOT NULL,
    CONSTRAINT "mensajes_soporte_pkey" PRIMARY KEY ("id")
);
CREATE INDEX "mensajes_soporte_hilo_id_created_at_idx" ON "mensajes_soporte"("hilo_id", "created_at");
ALTER TABLE "mensajes_soporte" ADD CONSTRAINT "mensajes_soporte_hilo_id_fkey" FOREIGN KEY ("hilo_id") REFERENCES "hilos_soporte"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

CREATE TABLE "soporte_lecturas" (
    "hilo_id" TEXT NOT NULL,
    "usuario_id" TEXT NOT NULL,
    "leido_at" TEXT NOT NULL,
    CONSTRAINT "soporte_lecturas_pkey" PRIMARY KEY ("hilo_id", "usuario_id")
);
