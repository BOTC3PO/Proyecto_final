#!/usr/bin/env ts-node
/**
 * backfill_clase_status.ts — PLAN-A §2 (fase 3).
 *
 * Normaliza `Clase.status` de aulas legacy (status null/vacío/valor no
 * reconocido) al canónico "ACTIVE" — misma semántica que ya aplican en
 * memoria `PUT/PATCH /api/aulas/:id` y `publicaciones.ts` (status ausente
 * ⇒ ACTIVE, ver PLAN-A §2). Esto es puramente cosmético/idempotente: no
 * cambia el comportamiento observable (las rutas ya tratan esos casos
 * como ACTIVE en tiempo de ejecución), pero deja la columna consistente
 * para reportes/filtros que lean `status` crudo sin pasar por
 * `normalizeClassroomStatus`.
 *
 * Dry-run por defecto. Pasar --apply para escribir.
 *
 * Uso:
 *   cd api && npx ts-node --transpile-only scripts/backfill_clase_status.ts
 *   cd api && npx ts-node --transpile-only scripts/backfill_clase_status.ts --apply
 */
import "dotenv/config";
import { prisma } from "../src/lib/prisma";
import { normalizeClassroomStatus } from "../src/schema/aula";

async function main(): Promise<void> {
  const apply = process.argv.includes("--apply");

  const clases = await prisma.clase.findMany({
    where: { isDeleted: { not: true } },
    select: { id: true, status: true, name: true }
  });

  const aNormalizar = clases.filter((c) => !normalizeClassroomStatus(c.status));

  console.log(`[backfill_clase_status] modo: ${apply ? "APPLY (escribe)" : "DRY-RUN (sólo reporta)"}`);
  console.log(`[backfill_clase_status] aulas con status no reconocido: ${aNormalizar.length}`);
  aNormalizar.forEach((c) => console.log(`  - ${c.id} (${c.name}): status=${JSON.stringify(c.status)} -> ACTIVE`));

  if (!apply) {
    console.log("\n[backfill_clase_status] Dry-run: no se escribió nada. Volver a correr con --apply para aplicar.");
    return;
  }

  const now = new Date().toISOString();
  for (const c of aNormalizar) {
    await prisma.clase.updateMany({
      where: { id: c.id },
      data: { status: "ACTIVE", updatedAt: now }
    });
  }
  console.log(`\n[backfill_clase_status] Aplicado: ${aNormalizar.length} aula(s) normalizada(s).`);
}

if (require.main === module) {
  main()
    .catch((e) => { console.error("[backfill_clase_status] Error:", e); process.exit(1); })
    .finally(() => prisma.$disconnect());
}
