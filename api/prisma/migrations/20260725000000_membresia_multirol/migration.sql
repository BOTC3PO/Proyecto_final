-- PLAN-multirol — `Membresia` pasa a ser la fuente de verdad de "a qué
-- escuelas pertenece esta persona y con qué rol".
--
-- La PK vieja `(usuario_id, escuela_id)` permitía UNA sola fila por
-- usuario+escuela, o sea un solo rol por escuela. Era la razón por la que
-- existían las cuentas espejo: un docente que además quería ser alumno
-- necesitaba OTRO `usuario_id` para no chocar contra esta clave.
-- Con el rol adentro de la PK, la misma persona puede ser profesor y padre
-- en la misma escuela sin duplicar cuenta (igual que `clase_miembros`, que
-- ya tenía `rol_en_clase` en su clave).
ALTER TABLE "membresias" DROP CONSTRAINT "membresias_pkey";
ALTER TABLE "membresias" ADD CONSTRAINT "membresias_pkey" PRIMARY KEY ("usuario_id", "escuela_id", "rol");

-- Búsqueda por persona: "¿a qué escuelas pertenece?" es la consulta del
-- selector de escuela (Fase 2) y de `GET /api/membresias/mis-escuelas`.
CREATE INDEX IF NOT EXISTS "membresias_usuario_id_idx" ON "membresias" ("usuario_id");

-- Backfill — una membresía activa por cada usuario que tiene `escuela_id`
-- pero ninguna fila. Hasta ahora sólo el registro con escuela y el espejo
-- creaban membresías: los usuarios dados de alta por admin, los padres
-- provisionados y todo el que fue reasignado de escuela quedaron sin fila,
-- y `usuarios.ts` los rechaza con 403 por eso.
--
-- `fecha_alta` toma `created_at` del usuario a propósito: la regla del rol
-- principal es "el rol con el que se registró primero", así que el dato
-- real de antigüedad es cuándo se creó la cuenta, no cuándo corrió esta
-- migración.
INSERT INTO "membresias" ("usuario_id", "escuela_id", "rol", "estado", "fecha_alta", "created_at", "updated_at")
SELECT
  u."id",
  u."escuela_id",
  CASE u."role"
    WHEN 'DIRECTIVO' THEN 'DIRECTIVO'
    WHEN 'TEACHER'   THEN 'TEACHER'
    WHEN 'USER'      THEN 'STUDENT'
    WHEN 'PARENT'    THEN 'PARENT'
  END,
  'activa',
  u."created_at",
  u."created_at",
  u."created_at"
FROM "usuarios" u
WHERE u."escuela_id" IS NOT NULL
  AND u."is_deleted" IS NOT TRUE
  -- ADMIN y GUEST no tienen rol de escuela (getCanonicalMembershipRole los
  -- mapea a null): un admin de plataforma no es miembro de ninguna escuela.
  AND u."role" IN ('DIRECTIVO', 'TEACHER', 'USER', 'PARENT')
  AND NOT EXISTS (
    SELECT 1 FROM "membresias" m
    WHERE m."usuario_id" = u."id" AND m."escuela_id" = u."escuela_id"
  );
