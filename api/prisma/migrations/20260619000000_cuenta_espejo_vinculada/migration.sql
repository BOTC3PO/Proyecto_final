-- FASE 1 — espejo de alumno para staff.
--
-- Contexto (ver 00-PLAN-v3.md y tareas_pendientes/FASE-1-datos-y-provision.md):
-- el personal (ADMIN / DIRECTIVO / TEACHER) gana una cuenta espejo
-- "alumno" para entrar a la app y vivir la experiencia de un estudiante
-- sin contaminar su propia cuenta de staff. La cuenta espejo es:
--   * un `Usuario` aparte con `roles: ["USER"]` y `tipoCuenta = "ESPEJO_ALUMNO"`
--   * sin `passwordHash` (no puede entrar por login)
--   * con su propia `Membresia` STUDENT en la misma escuela
--   * apuntada desde una nueva tabla puente `CuentaVinculada` simétrica
--
-- El switch (Fase 2) usa la `CuentaVinculada` para cambiar de identidad
-- sin tocar la fila de staff. La misma tabla se reutiliza en Fase 6
-- para que un alumno pueda generar su propia cuenta de padre.
--
-- `CuentaVinculada` es SIMÉTRICA: las dos FKs son pares equivalentes
-- (`usuarioAId`, `usuarioBId`) y el contrato de aplicación es insertar
-- siempre con `min(a,b), max(a,b)` para que la unicidad de par no
-- dependa del orden de inserción. Esto deja la puerta abierta a Fase 6
-- sin nueva migración.
--
-- El marcador `tipoCuenta` se agrega aditivamente (nullable, sin
-- default) para no tocar filas existentes. Los espejos son los únicos
-- que lo llevan poblado (con "ESPEJO_ALUMNO"); cuentas reales quedan
-- con `NULL`. Fase 4 lo usa para filtrar el espejo de rosters y
-- analíticas de alumnos.
--
-- Esta migración es ADITIVA: ningún permiso cambia. La lógica de
-- provisión vive en `api/src/lib/provisionar-espejo.ts`.

-- AlterTable: agregar `tipo_cuenta` a usuarios.
-- Nullable aditiva. No tiene DEFAULT: las filas existentes quedan con
-- NULL, y solo los espejos nuevos lo llevan poblado.
ALTER TABLE "usuarios" ADD COLUMN "tipo_cuenta" TEXT;

-- CreateTable: cuentas_vinculadas.
-- PK uuid (consistente con el resto del esquema). Las dos FKs son
-- equivalentes; la aplicación las ordena (min, max) en cada insert
-- para que el par único funcione simétricamente.
CREATE TABLE "cuentas_vinculadas" (
    "id" TEXT NOT NULL,
    "usuario_a_id" TEXT NOT NULL,
    "usuario_b_id" TEXT NOT NULL,
    "created_at" TEXT NOT NULL,

    CONSTRAINT "cuentas_vinculadas_pkey" PRIMARY KEY ("id")
);

-- UniqueIndex: par (a, b) único. El insert siempre va con min/max
-- para que (X,Y) y (Y,X) caigan en la misma clave canónica.
CREATE UNIQUE INDEX "cuentas_vinculadas_usuario_a_id_usuario_b_id_key"
    ON "cuentas_vinculadas"("usuario_a_id", "usuario_b_id");

-- Index sobre la FK inversa para que las búsquedas por "dado B, ¿con
-- quién está vinculado?" sean baratas. (Útil en Fase 2 para resolver
-- el espejo de la cuenta actual.)
CREATE INDEX "cuentas_vinculadas_usuario_b_id_idx"
    ON "cuentas_vinculadas"("usuario_b_id");

-- ForeignKey: las dos puntas cuelgan de `usuarios` con CASCADE. Si se
-- borra un principal, se va su espejo; si se borra un espejo, se va
-- el vínculo. (La cascada evita huérfanos sin migrar lógica a la app.)
ALTER TABLE "cuentas_vinculadas"
    ADD CONSTRAINT "cuentas_vinculadas_usuario_a_id_fkey"
    FOREIGN KEY ("usuario_a_id") REFERENCES "usuarios"("id")
    ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "cuentas_vinculadas"
    ADD CONSTRAINT "cuentas_vinculadas_usuario_b_id_fkey"
    FOREIGN KEY ("usuario_b_id") REFERENCES "usuarios"("id")
    ON DELETE CASCADE ON UPDATE CASCADE;
