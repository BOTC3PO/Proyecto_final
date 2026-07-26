-- PLAN-multirol Fase 3 (cierre) — retiro de las cuentas espejo.
--
-- Se marcan como borradas en vez de un DELETE: `usuarios` es referenciada
-- por una docena de tablas (progreso, intentos, economía, inscripciones…) y
-- un borrado duro exigiría desarmar todas esas dependencias para ganar nada
-- — cada consulta del sistema ya filtra `is_deleted`. Como la columna
-- `tipo_cuenta` desaparece en este mismo archivo, hay que marcarlos ANTES.
UPDATE "usuarios" SET "is_deleted" = true WHERE "tipo_cuenta" = 'ESPEJO_ALUMNO';

-- El puente principal↔espejo ya no tiene consumidores: la misma persona es
-- una sola cuenta con varios roles. El vínculo padre↔hijo REAL vive en
-- `progreso_modulo_vinculos`, que es otra tabla y no se toca.
DROP TABLE IF EXISTS "cuentas_vinculadas";

DROP INDEX IF EXISTS "usuarios_tipo_cuenta_idx";
ALTER TABLE "usuarios" DROP COLUMN IF EXISTS "tipo_cuenta";

-- Verificación de la escuela. Gatea sólo los caminos de plata.
ALTER TABLE "escuelas"
  ADD COLUMN "estado_verificacion" TEXT NOT NULL DEFAULT 'pendiente';

-- Las escuelas que ya existen están operando: quedan verificadas para no
-- cortarles el cobro de un día para el otro. El estado "pendiente" aplica
-- desde acá en adelante, a las que se den de alta.
UPDATE "escuelas" SET "estado_verificacion" = 'verificada';
