#!/usr/bin/env ts-node
/**
 * seed.ts — orquestador de Prisma seeds.
 * Ejecutado automáticamente por `prisma migrate reset` y `prisma db seed`.
 */
import "dotenv/config";
import { prisma } from "../src/lib/prisma";

async function main() {
  console.log("=".repeat(60));
  console.log("Prisma seed — orquestando seeds del proyecto");
  console.log("=".repeat(60));

  // 1. Estructura base: escuela + usuarios
  console.log("\n[1/3] Ejecutando init_db...");
  const { runInitDb } = await import("../scripts/init_db");
  await runInitDb();

  // 2. Datos de demostración: módulos, quizzes, etc.
  console.log("\n[2/3] Ejecutando seed_demo...");
  const { runSeedDemo } = await import("../scripts/seed_demo");
  await runSeedDemo();

  // 3. Items de tienda
  console.log("\n[3/3] Ejecutando seed_tienda...");
  const { seedTienda } = await import("../scripts/seed_tienda");
  await seedTienda();

  console.log("\n" + "=".repeat(60));
  console.log("Seed completo.");
  console.log("=".repeat(60));
}

main()
  .catch((e) => { console.error("[seed] Error:", e); process.exit(1); })
  .finally(() => prisma.$disconnect());
