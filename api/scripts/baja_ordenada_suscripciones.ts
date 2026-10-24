#!/usr/bin/env ts-node
/**
 * baja_ordenada_suscripciones.ts — PLAN-B Fase 1.3.
 *
 * Cancela ordenadamente las suscripciones activas remanentes (el SaaS se
 * retiró del producto — ver tareas_pendientes/PLAN-B-negocio-comisiones-
 * pasarelas.md §Fase 1). Cancela el preapproval real en Mercado Pago
 * (acción irreversible del lado del proveedor) y marca la fila local como
 * "cancelada".
 *
 * SIEMPRE dry-run por defecto: sólo lista qué se cancelaría. Pasar
 * --apply para ejecutar de verdad — requiere haber avisado a las
 * escuelas/usuarios afectados antes (ver Riesgos del plan).
 *
 * Uso:
 *   cd api && npx ts-node --transpile-only scripts/baja_ordenada_suscripciones.ts            # dry-run
 *   cd api && npx ts-node --transpile-only scripts/baja_ordenada_suscripciones.ts --apply     # cancela de verdad
 */
import "dotenv/config";
import { prisma } from "../src/lib/prisma";
import { cancelarPreapproval } from "../src/lib/mercadopago";

async function main(): Promise<void> {
  const apply = process.argv.includes("--apply");

  const activas = await prisma.suscripcion.findMany({
    where: { estado: { in: ["activa", "pendiente"] } }
  });

  console.log(`[baja_ordenada] modo: ${apply ? "APPLY (cancela de verdad)" : "DRY-RUN (sólo reporta)"}`);
  console.log(`[baja_ordenada] suscripciones activas/pendientes encontradas: ${activas.length}`);
  activas.forEach((s) =>
    console.log(`  - ${s.id} (${s.entidadTipo}:${s.entidadId}) estado=${s.estado} preapprovalId=${s.mpPreapprovalId ?? "N/A"}`)
  );

  if (activas.length === 0) {
    console.log("[baja_ordenada] Nada que cancelar.");
    return;
  }

  if (!apply) {
    console.log(
      "\n[baja_ordenada] Dry-run: no se canceló nada. Avisar a las escuelas/usuarios afectados ANTES de correr con --apply."
    );
    return;
  }

  const now = new Date().toISOString();
  let canceladas = 0;
  let errores = 0;
  for (const sub of activas) {
    try {
      if (sub.mpPreapprovalId) {
        await cancelarPreapproval(sub.mpPreapprovalId);
      }
      await prisma.suscripcion.updateMany({
        where: { id: sub.id },
        data: { estado: "cancelada", canceladaAt: now, canceladaBy: "sistema:retiro-saas", updatedAt: now }
      });
      canceladas++;
    } catch (e) {
      errores++;
      console.error(`[baja_ordenada] Error cancelando ${sub.id}:`, e);
    }
  }
  console.log(`\n[baja_ordenada] Canceladas: ${canceladas}. Errores: ${errores}.`);
}

if (require.main === module) {
  main()
    .catch((e) => { console.error("[baja_ordenada] Error:", e); process.exit(1); })
    .finally(() => prisma.$disconnect());
}
