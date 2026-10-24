-- MULTIROL-01 (Fase 1) — multi-rol real para el modelo Usuario.
--
-- Decisión: el caso "un profesor que también es alumno en otra aula"
-- es real y esperable (ver reporte bug-visual-aula-rol-dual). Se va
-- por multi-rol real (no parche front-only). Esta migración es
-- PREPARATORIA y ADITIVA: agrega la columna `roles` sin tocar `role`
-- (sigue vivo como columna espejo deprecada).
--
-- Backfill: cada usuario existente recibe `roles = [role]` (array
-- con un solo elemento). Esto garantiza que `isStaffRole(roles)` y
-- los demás helpers produzcan el mismo resultado que la versión
-- singular actual — un ADMIN sigue siendo admin, un USER sigue sin
-- permisos de staff. NO se eleva ni se degrada ningún permiso.
--
-- Fase 2: el front consume `roles[]` y centraliza los 47 checks
-- dispersos en `useHasRole` / `isStaff`.
-- Fase 3: retirar `role` cuando nada lo use.

-- AlterTable
ALTER TABLE "usuarios" ADD COLUMN "roles" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[];

-- Backfill: roles = [role] para cada usuario existente.
UPDATE "usuarios" SET "roles" = ARRAY["role"]::TEXT[] WHERE cardinality("roles") = 0;
