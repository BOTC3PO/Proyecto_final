-- PLAN-multirol Fase 3 — la inscripción "de prueba" (staff o padre viviendo
-- el contenido como alumno) pasa a marcarse en la INSCRIPCIÓN y no en la
-- CUENTA. Antes se distinguía por `usuarios.tipo_cuenta = 'ESPEJO_ALUMNO'`,
-- lo que obligaba a tener una segunda cuenta por persona.
ALTER TABLE "clase_miembros" ADD COLUMN "es_prueba" BOOLEAN NOT NULL DEFAULT false;

-- Las inscripciones existentes de cuentas espejo son, por definición,
-- inscripciones de prueba: se marcan antes de que los espejos desaparezcan,
-- así los filtros nuevos ven exactamente lo mismo que veían los viejos.
UPDATE "clase_miembros" cm
SET "es_prueba" = true
FROM "usuarios" u
WHERE u."id" = cm."usuario_id" AND u."tipo_cuenta" = 'ESPEJO_ALUMNO';
