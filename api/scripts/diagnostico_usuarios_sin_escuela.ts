#!/usr/bin/env ts-node
/**
 * diagnostico_usuarios_sin_escuela.ts — PLAN-A §1 (fase 1, sólo lectura).
 *
 * Lista usuarios activos con `escuelaId` null/vacío agrupados por rol, y
 * cruza con sus membresías (¿tienen alguna Membresia activa de la que se
 * podría derivar la escuela para un backfill?). No escribe nada.
 *
 * Uso:
 *   cd api && npx ts-node --transpile-only scripts/diagnostico_usuarios_sin_escuela.ts
 */
import "dotenv/config";
import { prisma } from "../src/lib/prisma";

async function main(): Promise<void> {
  const sinEscuela = await prisma.usuario.findMany({
    where: {
      isDeleted: { not: true },
      OR: [{ escuelaId: null }, { escuelaId: "" }]
    },
    select: { id: true, username: true, role: true, roles: true, tipoCuenta: true, createdAt: true }
  });

  console.log(`[diagnostico] usuarios activos sin escuelaId: ${sinEscuela.length}`);

  const porRol = new Map<string, number>();
  for (const u of sinEscuela) {
    const rol = u.role ?? "SIN_ROL";
    porRol.set(rol, (porRol.get(rol) ?? 0) + 1);
  }
  console.log("[diagnostico] por rol:", Object.fromEntries(porRol));

  const espejos = sinEscuela.filter((u) => u.tipoCuenta === "ESPEJO_ALUMNO");
  console.log(`[diagnostico] de esos, cuentas espejo (ESPEJO_ALUMNO, esperable sin escuela): ${espejos.length}`);

  const noEspejoStaffLike = sinEscuela.filter(
    (u) => u.tipoCuenta !== "ESPEJO_ALUMNO" && ["TEACHER", "DIRECTIVO", "ADMIN"].includes(u.role ?? "")
  );
  console.log(
    `[diagnostico] STAFF (TEACHER/DIRECTIVO/ADMIN) reales sin escuela — bloqueantes de items 1/27/33: ${noEspejoStaffLike.length}`
  );

  if (noEspejoStaffLike.length) {
    const ids = noEspejoStaffLike.map((u) => u.id);
    const membresias = await prisma.membresia.findMany({
      where: { usuarioId: { in: ids }, estado: { not: "revocada" } },
      select: { usuarioId: true, escuelaId: true, rol: true, estado: true }
    });
    const membresiasPorUsuario = new Map<string, typeof membresias>();
    for (const m of membresias) {
      const list = membresiasPorUsuario.get(m.usuarioId) ?? [];
      list.push(m);
      membresiasPorUsuario.set(m.usuarioId, list);
    }

    let derivablesSinAmbiguedad = 0;
    let ambiguos = 0;
    let sinMembresia = 0;

    for (const u of noEspejoStaffLike) {
      const ms = membresiasPorUsuario.get(u.id) ?? [];
      const escuelas = new Set(ms.map((m) => m.escuelaId));
      if (escuelas.size === 0) sinMembresia++;
      else if (escuelas.size === 1) derivablesSinAmbiguedad++;
      else ambiguos++;
    }

    console.log("[diagnostico] de los STAFF sin escuela:");
    console.log(`  - derivables de una única membresía activa (backfill directo): ${derivablesSinAmbiguedad}`);
    console.log(`  - con membresías en >1 escuela (ambiguo, requiere revisión manual): ${ambiguos}`);
    console.log(`  - sin ninguna membresía (huérfanos totales, ej. promovidos por /api/admin/usuarios/:id/rol): ${sinMembresia}`);

    console.log(
      "\n[diagnostico] detalle (primeros 20):",
      noEspejoStaffLike.slice(0, 20).map((u) => ({
        id: u.id,
        username: u.username,
        role: u.role,
        createdAt: u.createdAt,
        escuelasMembresia: [...new Set((membresiasPorUsuario.get(u.id) ?? []).map((m) => m.escuelaId))]
      }))
    );
  }
}

if (require.main === module) {
  main()
    .catch((e) => { console.error("[diagnostico] Error:", e); process.exit(1); })
    .finally(() => prisma.$disconnect());
}
