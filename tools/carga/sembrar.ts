/**
 * L16 — usuarios para la prueba de carga. SOLO contra la base de pruebas (se niega con otra base).
 * Crea N alumnos «carga-NNN» en la escuela de demostración, con membresía y en el aula 3.º A.
 *   npx tsx tools/carga/sembrar.ts 500        (crear)
 *   npx tsx tools/carga/sembrar.ts borrar     (borrar todo lo creado)
 */
import { prisma } from "../../api/src/lib/prisma";

const url = process.env.DATABASE_URL ?? "";
if (!url.includes("virtualbook_test")) {
  console.error("Solo se puede usar con la base virtualbook_test.");
  process.exit(1);
}
const ESCUELA = "esc-0001";
const AULA = "cls-demo-mat-3a";
const arg = process.argv[2] ?? "500";
const ahora = new Date().toISOString();

async function main() {
  if (arg === "borrar") {
    const ids = (await prisma.usuario.findMany({ where: { id: { startsWith: "carga-" } }, select: { id: true } })).map((u) => u.id);
    await prisma.claseMiembro.deleteMany({ where: { usuarioId: { in: ids } } });
    await prisma.membresia.deleteMany({ where: { usuarioId: { in: ids } } });
    await prisma.refreshToken.deleteMany({ where: { userId: { in: ids } } });
    await prisma.usuario.deleteMany({ where: { id: { in: ids } } });
    console.log(`borrados ${ids.length}`);
    return;
  }
  const n = Number(arg);
  const ids = Array.from({ length: n }, (_, i) => `carga-${String(i + 1).padStart(4, "0")}`);
  await prisma.usuario.createMany({
    skipDuplicates: true,
    data: ids.map((id) => ({
      id,
      username: id,
      email: `${id}@carga.invalid`,
      fullName: `Alumno de carga ${id.slice(6)}`,
      roles: ["USER"],
      escuelaId: ESCUELA,
      isDeleted: false,
      createdAt: ahora,
      updatedAt: ahora
    }))
  });
  await prisma.membresia.createMany({
    skipDuplicates: true,
    data: ids.map((id) => ({ usuarioId: id, escuelaId: ESCUELA, rol: "STUDENT", estado: "activa", fechaAlta: ahora }))
  });
  await prisma.claseMiembro.createMany({
    skipDuplicates: true,
    data: ids.map((id) => ({ claseId: AULA, usuarioId: id, rolEnClase: "STUDENT" }))
  });
  console.log(`listos ${n} alumnos de carga`);
}

main().finally(() => prisma.$disconnect());
