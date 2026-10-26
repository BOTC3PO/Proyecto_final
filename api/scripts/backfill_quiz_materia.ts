#!/usr/bin/env ts-node
/**
 * backfill_quiz_materia.ts — completa `settings.materia` de los
 * `QuizVersion` existentes que la tienen vacía, derivándola del módulo
 * (`subject || category`).
 *
 * Causa raíz: sólo `POST /api/modulos` escribía `settings.materia`. Los
 * cuestionarios creados por otros paths (PUT/PATCH, duplicar, semillas,
 * legacy) quedaron con `materia` vacía y desaparecían al filtrar el
 * banco por materia. Este script cierra ese gap retroactivamente.
 *
 * Idempotente: si la versión ya tiene `materia` no vacía, se respeta
 * y se cuenta como `omitidos`. Si el módulo tampoco tiene materia, se
 * cuenta como `sin_modulo` y NO se escribe nada (dejamos el string
 * vacío para no contaminar con un pseudo "Sin materia" que después
 * aparecería en el filtro de banco).
 *
 * Estrategia:
 *  1. Traer todas las `QuizVersion` con `settings` no nulo.
 *  2. Parsear `settings`. Si `materia` es string no vacío → omitir.
 *  3. Resolver la materia del módulo (`subject || category`).
 *  4. Si hay materia → actualizar `settings` (merge) y persistir.
 *  5. Loggear contadores y los IDs sin materia de módulo.
 *
 * Uso:
 *   cd api && pnpm backfill:quiz-materia
 */
import "dotenv/config";
import { prisma } from "../src/lib/prisma";

function safeJsonParse<T>(value: string | null | undefined, fallback: T): T {
  if (!value) return fallback;
  try {
    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
}

function readMateria(rawSettings: string | null | undefined): string {
  const parsed = safeJsonParse<Record<string, unknown>>(rawSettings, {});
  const m = parsed.materia;
  return typeof m === "string" ? m : "";
}

function readModuloMateria(modulo: {
  subject?: string | null;
  category?: string | null;
} | null): string {
  if (!modulo) return "";
  const s = typeof modulo.subject === "string" ? modulo.subject : "";
  if (s) return s;
  const c = typeof modulo.category === "string" ? modulo.category : "";
  return c;
}

async function main(): Promise<void> {
  console.log("[backfill_quiz_materia] Revisando QuizVersion con settings.materia vacía…");

  const versions = await prisma.quizVersion.findMany({});
  console.log(`[backfill_quiz_materia] Total QuizVersion encontradas: ${versions.length}`);

  let revisados = 0;
  let actualizados = 0;
  let omitidos = 0;
  let sinModuloMateria = 0;
  const idsSinModulo: string[] = [];

  for (const v of versions) {
    const currentMateria = readMateria(v.settings);
    if (currentMateria) {
      omitidos++;
      continue;
    }
    revisados++;

    // El InMemoryPrisma usado por tests no soporta include anidado,
    // así que resolvemos modulo + quiz en 2 pasos (mismo patrón que
    // modulos.ts).
    const quiz = await prisma.quiz.findFirst({ where: { id: v.quizId } });
    // PLAN-CORRECCIONES C2 — `Quiz.moduleId` es nullable desde que existen
    // quizzes "sueltos" (sin módulo). Sin este chequeo, `findFirst({ where:
    // { id: null } })` tira `PrismaClientValidationError` y el backfill
    // completo aborta apenas encuentra uno.
    if (!quiz || !quiz.moduleId) {
      idsSinModulo.push(v.id);
      sinModuloMateria++;
      continue;
    }
    const modulo = await prisma.modulo.findFirst({ where: { id: quiz.moduleId } });
    const materia = readModuloMateria(modulo);
    if (!materia) {
      idsSinModulo.push(v.id);
      sinModuloMateria++;
      continue;
    }

    const base = safeJsonParse<Record<string, unknown>>(v.settings, {});
    const merged = { ...base, materia };
    await prisma.quizVersion.updateMany({
      where: { id: v.id },
      data: { settings: JSON.stringify(merged) },
    });
    actualizados++;
  }

  console.log(
    `[backfill_quiz_materia] revisados=${revisados} actualizados=${actualizados} omitidos=${omitidos} sin_modulo_materia=${sinModuloMateria}`,
  );
  if (idsSinModulo.length > 0) {
    console.log(
      `[backfill_quiz_materia] QuizVersion sin materia derivable (revisión manual): ${idsSinModulo.length} id(s).`,
    );
  }
  if (sinModuloMateria > 0) {
    console.log(
      "[backfill_quiz_materia] Sugerencia: revisar y poblar `subject` en los módulos correspondientes.",
    );
  }
}

if (require.main === module) {
  main()
    .catch((e) => {
      console.error("[backfill_quiz_materia] Error:", e);
      process.exit(1);
    })
    .finally(() => prisma.$disconnect());
}
