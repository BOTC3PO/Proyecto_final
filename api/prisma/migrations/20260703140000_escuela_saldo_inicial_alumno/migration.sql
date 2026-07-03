-- PLAN-B Fase 6 (ítem 34) — saldo de bienvenida (economía interna del
-- juego, no dinero real) configurable por escuela. Default 50, backfileado
-- para las escuelas existentes (columna NOT NULL con DEFAULT).
ALTER TABLE "escuelas" ADD COLUMN "saldo_inicial_alumno" DOUBLE PRECISION NOT NULL DEFAULT 50;
