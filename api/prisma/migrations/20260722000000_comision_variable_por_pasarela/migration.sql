-- El sistema pasa a ser siempre autogestionado (no existe más el modo
-- "centralizado" donde VB cobraba directo): la comisión ahora varía por
-- pasarela (doméstica/MercadoPago vs internacional/Cryptomus) en vez de
-- por modo de gestión.
ALTER TABLE "escuelas" DROP COLUMN "modo_gestion";
ALTER TABLE "escuelas" ADD COLUMN "comision_pct_intl" DOUBLE PRECISION;
