-- 1. Admin principal real.
-- `admin.ts` decidía "¿es el admin principal?" mirando `actorDoc.createdBy`,
-- una columna que NUNCA existió en `usuarios`: siempre daba `undefined`, o
-- sea que el guard "Solo el administrador principal puede cambiar roles"
-- no bloqueaba a nadie y cualquier ADMIN podía promover a ADMIN.
ALTER TABLE "usuarios" ADD COLUMN "es_admin_principal" BOOLEAN NOT NULL DEFAULT false;

-- El principal es el ADMIN más antiguo (el del bootstrap). Si no hay
-- ninguno, no marca nada y el primero que se cree por bootstrap lo será.
UPDATE "usuarios" SET "es_admin_principal" = true
WHERE "id" = (
  SELECT "id" FROM "usuarios"
  WHERE "role" = 'ADMIN' AND "is_deleted" IS NOT TRUE
  ORDER BY "created_at" ASC LIMIT 1
);

-- 2. Delegación de cobros dentro de una escuela.
ALTER TABLE "membresias" ADD COLUMN "puede_cobrar" BOOLEAN NOT NULL DEFAULT false;

-- Los directivos que ya existen conservan lo que hoy pueden hacer: sin esto
-- el cambio les sacaría el cobro de un día para el otro.
UPDATE "membresias" SET "puede_cobrar" = true WHERE "rol" = 'DIRECTIVO';
