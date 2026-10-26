#!/usr/bin/env ts-node
/**
 * backfill_saldo_espejos.ts — acredita el saldo inicial de bienvenida a
 * las cuentas espejo-alumno creadas ANTES del fix que lo automatiza (ver
 * tareas_pendientes/PLAN-escalabilidad-api.md, sesión 2026-07-22:
 * provisionar-espejo.ts ya acredita saldo en espejos nuevos, pero no
 * hubo backfill retroactivo para los ya existentes — quedaban con 0 PF
 * y sin acceso real a la tienda).
 *
 * Idempotente: `acreditarSaldoInicial` chequea `EconomiaTransaccion` por
 * `tipo: "saldo_inicial"` antes de acreditar. Seguro de re-correr.
 *
 * Uso:
 *   cd api && pnpm backfill:saldo-espejos
 */
import "dotenv/config";
import { prisma } from "../src/lib/prisma";
import { acreditarSaldoInicial } from "../src/lib/economia-alta";

async function main(): Promise<void> {
  console.log("[backfill_saldo_espejos] Revisando cuentas espejo-alumno sin saldo inicial...");
  const espejos = await prisma.usuario.findMany({ where: { tipoCuenta: "ESPEJO_ALUMNO" } });

  let acreditados = 0;
  let omitidos = 0;
  for (const espejo of espejos) {
    const result = await acreditarSaldoInicial({ usuarioId: espejo.id, schoolId: espejo.escuelaId ?? null });
    if (result) {
      console.log(`  ${espejo.username} -> acreditado ${result.monto} ${result.moneda}`);
      acreditados++;
    } else {
      console.log(`  ${espejo.username} -> sin cambios (ya tenía saldo inicial, o monto configurado es 0)`);
      omitidos++;
    }
  }

  console.log(`[backfill_saldo_espejos] revisados=${espejos.length} acreditados=${acreditados} omitidos=${omitidos}`);
}

if (require.main === module) {
  main()
    .catch((e) => { console.error("[backfill_saldo_espejos] Error:", e); process.exit(1); })
    .finally(() => prisma.$disconnect());
}
