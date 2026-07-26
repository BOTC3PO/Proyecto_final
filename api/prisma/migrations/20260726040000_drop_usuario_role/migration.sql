-- MULTIROL Fase 3 / PLAN-roles-v3 E1 — se retira la columna espejo `role`.
--
-- `roles` es la fuente de verdad desde la migración multirol; `role` quedó
-- como espejo "por compat" y nunca se retiró, con lo cual podía derivar: el
-- PATCH de rol de admin, por ejemplo, escribía una y no la otra, y como
-- `hasRole` lee `roles` primero, el cambio de rol no tenía efecto.
--
-- Red de seguridad antes de tirarla: cualquier fila cuyo `roles` haya quedado
-- vacío hereda su `role`, así nadie pierde permisos al dropear.
UPDATE "usuarios"
SET "roles" = ARRAY["role"]
WHERE ("roles" IS NULL OR cardinality("roles") = 0) AND "role" IS NOT NULL;

ALTER TABLE "usuarios" DROP COLUMN "role";
