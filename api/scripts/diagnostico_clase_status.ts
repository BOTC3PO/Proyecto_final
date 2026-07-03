#!/usr/bin/env ts-node
/**
 * diagnostico_clase_status.ts — PLAN-A §2 (fase 1, sólo lectura).
 *
 * Agrupa `Clase.status` por valor exacto en la base real, para confirmar
 * qué valor(es) disparan el 409 "invalid classroom status" al publicar.
 *
 * Uso:
 *   cd api && npx ts-node --transpile-only scripts/diagnostico_clase_status.ts
 */
import "dotenv/config";
import { prisma } from "../src/lib/prisma";
import { normalizeClassroomStatus } from "../src/schema/aula";

async function main(): Promise<void> {
  const clases = await prisma.clase.findMany({
    where: { isDeleted: { not: true } },
    select: { id: true, status: true, name: true, createdAt: true }
  });
  console.log(`[diagnostico] aulas activas (no borradas): ${clases.length}`);

  const porValorExacto = new Map<string, number>();
  const porNormalizado = new Map<string, number>();
  for (const c of clases) {
    const raw = JSON.stringify(c.status);
    porValorExacto.set(raw, (porValorExacto.get(raw) ?? 0) + 1);
    const norm = normalizeClassroomStatus(c.status) ?? "NULL/DESCONOCIDO";
    porNormalizado.set(norm, (porNormalizado.get(norm) ?? 0) + 1);
  }
  console.log("[diagnostico] por valor exacto en DB:", Object.fromEntries(porValorExacto));
  console.log("[diagnostico] por valor normalizado (normalizeClassroomStatus):", Object.fromEntries(porNormalizado));

  const problematicas = clases.filter((c) => !normalizeClassroomStatus(c.status));
  console.log(`[diagnostico] aulas que dispararían 409 al publicar (status no reconocido): ${problematicas.length}`);
  problematicas.slice(0, 20).forEach((c) => console.log(`  - ${c.id} (${c.name}): status=${JSON.stringify(c.status)} createdAt=${c.createdAt}`));
}

if (require.main === module) {
  main()
    .catch((e) => { console.error("[diagnostico] Error:", e); process.exit(1); })
    .finally(() => prisma.$disconnect());
}
