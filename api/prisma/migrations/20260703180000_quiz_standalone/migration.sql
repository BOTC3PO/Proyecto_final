-- PLAN-CORRECCIONES C2 — cuestionarios "sueltos" (sin módulo todavía).
-- `quizzes.module_id` deja de ser obligatorio: un quiz standalone se
-- crea desde /plantillas/nueva sin pasar por un módulo, se edita/reabre
-- por su propio quizId (mismas rutas /api/quizzes/:quizId/* que ya
-- toleran módulo ausente), y recién se "usa" (clona) dentro de un
-- módulo cuando el docente lo elige — reusable en más de un módulo.
-- `owner_user_id` es sólo para autorización mientras el quiz no tiene
-- módulo (una vez que tiene módulo, la autorización la gobierna el
-- módulo, igual que antes).
ALTER TABLE "quizzes" ALTER COLUMN "module_id" DROP NOT NULL;
ALTER TABLE "quizzes" ADD COLUMN "owner_user_id" TEXT;
