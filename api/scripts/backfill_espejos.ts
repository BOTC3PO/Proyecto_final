#!/usr/bin/env ts-node
/**
 * backfill_espejos.ts — provisiona la cuenta espejo-alumno para todo el
 * staff existente que aún no la tenga (staff legacy creado antes de la
 * feature, o altas cuyo hook best-effort falló).
 *
 * Idempotente: `provisionarEspejosParaStaffExistente()` saltea a quien ya
 * tiene espejo. Seguro de re-correr.
 *
 * Uso:
 *   cd api && pnpm backfill:espejos
 */
import "dotenv/config";
import { prisma } from "../src/lib/prisma";
import { provisionarEspejosParaStaffExistente } from "../src/lib/provisionar-espejo";

async function main(): Promise<void> {
  console.log("[backfill_espejos] Revisando staff sin cuenta espejo...");
  const r = await provisionarEspejosParaStaffExistente();
  console.log(
    `[backfill_espejos] revisados=${r.revisados} creados=${r.creados} omitidos=${r.omitidos}`
  );
}

if (require.main === module) {
  main()
    .catch((e) => { console.error("[backfill_espejos] Error:", e); process.exit(1); })
    .finally(() => prisma.$disconnect());
}
