#!/usr/bin/env ts-node
/**
 * backfill_escuela_staff.ts — PLAN-A §1 (fase 3).
 *
 * Asigna `escuelaId` al staff real (TEACHER/DIRECTIVO/ADMIN, no espejo) que
 * hoy no tiene escuela pero SÍ tiene una única Membresia activa — criterio
 * inequívoco. Los casos ambiguos (>1 escuela) o sin ninguna membresía
 * (huérfanos totales, ej. promovidos por /api/admin/usuarios/:id/rol sin
 * escuelaId) quedan afuera y se listan para resolución manual del admin.
 *
 * Por defecto corre en modo dry-run (sólo reporta). Pasar --apply para
 * escribir de verdad.
 *
 * Uso:
 *   cd api && npx ts-node --transpile-only scripts/backfill_escuela_staff.ts            # dry-run
 *   cd api && npx ts-node --transpile-only scripts/backfill_escuela_staff.ts --apply     # escribe
 */
import "dotenv/config";
import { prisma } from "../src/lib/prisma";

async function main(): Promise<void> {
  const apply = process.argv.includes("--apply");

  // Nota: filtramos tipoCuenta !== "ESPEJO_ALUMNO" en JS, no en el `where`.
  // Un `NOT: { tipoCuenta: "ESPEJO_ALUMNO" }` de Prisma compila a
  // `NOT (tipo_cuenta = 'ESPEJO_ALUMNO')`, y en SQL esa comparación es
  // NULL/unknown (no true) cuando tipo_cuenta es NULL — excluiría por
  // error a todo el staff real (que tiene tipoCuenta null).
  const candidatos = await prisma.usuario.findMany({
    where: {
      isDeleted: { not: true },
      role: { in: ["TEACHER", "DIRECTIVO", "ADMIN"] },
      OR: [{ escuelaId: null }, { escuelaId: "" }]
    },
    select: { id: true, username: true, role: true, tipoCuenta: true }
  });
  const sinEscuela = candidatos.filter((u) => u.tipoCuenta !== "ESPEJO_ALUMNO");

  if (sinEscuela.length === 0) {
    console.log("[backfill_escuela_staff] Nada que hacer: no hay staff sin escuela.");
    return;
  }

  const ids = sinEscuela.map((u) => u.id);
  const membresias = await prisma.membresia.findMany({
    where: { usuarioId: { in: ids }, estado: { not: "revocada" } },
    select: { usuarioId: true, escuelaId: true }
  });
  const escuelasPorUsuario = new Map<string, Set<string>>();
  for (const m of membresias) {
    const set = escuelasPorUsuario.get(m.usuarioId) ?? new Set<string>();
    set.add(m.escuelaId);
    escuelasPorUsuario.set(m.usuarioId, set);
  }

  const aplicables: Array<{ id: string; username: string; role: string; escuelaId: string }> = [];
  const ambiguos: typeof sinEscuela = [];
  const sinMembresia: typeof sinEscuela = [];

  for (const u of sinEscuela) {
    const escuelas = escuelasPorUsuario.get(u.id) ?? new Set<string>();
    if (escuelas.size === 1) {
      aplicables.push({ ...u, escuelaId: [...escuelas][0] });
    } else if (escuelas.size > 1) {
      ambiguos.push(u);
    } else {
      sinMembresia.push(u);
    }
  }

  console.log(`[backfill_escuela_staff] modo: ${apply ? "APPLY (escribe)" : "DRY-RUN (sólo reporta)"}`);
  console.log(`[backfill_escuela_staff] derivables de 1 sola membresía: ${aplicables.length}`);
  aplicables.forEach((u) => console.log(`  - ${u.username} (${u.role}) -> escuelaId=${u.escuelaId}`));

  console.log(`[backfill_escuela_staff] ambiguos (>1 escuela, requieren revisión manual): ${ambiguos.length}`);
  ambiguos.forEach((u) => console.log(`  - ${u.username} (${u.role}): ${[...(escuelasPorUsuario.get(u.id) ?? [])].join(", ")}`));

  console.log(`[backfill_escuela_staff] huérfanos totales (sin ninguna membresía, requieren asignación manual vía /api/admin/usuarios/:id/rol o UI de admin): ${sinMembresia.length}`);
  sinMembresia.forEach((u) => console.log(`  - ${u.username} (${u.role})`));

  if (!apply) {
    console.log("\n[backfill_escuela_staff] Dry-run: no se escribió nada. Volver a correr con --apply para aplicar los derivables.");
    return;
  }

  const now = new Date().toISOString();
  for (const u of aplicables) {
    await prisma.usuario.updateMany({
      where: { id: u.id },
      data: { escuelaId: u.escuelaId, updatedAt: now }
    });
  }
  console.log(`\n[backfill_escuela_staff] Aplicado: ${aplicables.length} usuario(s) actualizado(s).`);
}

if (require.main === module) {
  main()
    .catch((e) => { console.error("[backfill_escuela_staff] Error:", e); process.exit(1); })
    .finally(() => prisma.$disconnect());
}
