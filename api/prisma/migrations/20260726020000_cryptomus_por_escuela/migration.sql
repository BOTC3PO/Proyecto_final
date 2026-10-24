-- Cryptomus habilitado escuela por escuela, y sólo por el admin de
-- plataforma. Ese camino liquida con comisión pero todo dentro de la cuenta
-- de VB y con pago manual a la escuela: VB custodia fondos de terceros. No se
-- puede quitar (no hay otra opción para pagos del exterior), así que se acota
-- a las escuelas con las que se decide asumir ese riesgo.
ALTER TABLE "escuelas"
  ADD COLUMN "cryptomus_habilitado" BOOLEAN NOT NULL DEFAULT false;
