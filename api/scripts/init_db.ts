#!/usr/bin/env ts-node
/**
 * init_db.ts — inicializa Postgres con usuarios y escuela base via Prisma.
 * Idempotente: usa skipDuplicates, seguro de correr más de una vez.
 * Uso: npm run db:init
 */
import "dotenv/config";
import { prisma } from "../src/lib/prisma";
import { hashPassword } from "../src/lib/passwords";

const now = new Date().toISOString();

async function main() {
  console.log("[init_db] Inicializando DB...");

  await prisma.escuela.createMany({
    skipDuplicates: true,
    data: [{
      id: "esc-0001",
      name: "Escuela Primaria Norte",
      code: "EPN-001",
      address: "Av. Siempre Viva 742, Buenos Aires",
      subscriptionStatus: "ACTIVE",
      plan: "ENTERPRISE_STD",
      isDeleted: false,
      createdAt: "2024-01-01T00:00:00.000Z",
      updatedAt: "2024-01-01T00:00:00.000Z"
    }]
  });

  const seedHash = hashPassword("Password123!");

  await prisma.usuario.createMany({
    skipDuplicates: true,
    data: [
      { id: "usr-admin-001", username: "admin.plataforma", email: "admin@plataforma.com",
        fullName: "Admin Plataforma", role: "ADMIN", passwordHash: seedHash,
        isDeleted: false, createdAt: now, updatedAt: now },
      { id: "usr-direc-001", username: "directivo.norte", email: "directivo@epnorte.edu.ar",
        fullName: "María Directora", role: "DIRECTIVO", escuelaId: "esc-0001",
        passwordHash: seedHash, isDeleted: false, createdAt: now, updatedAt: now },
      { id: "usr-teach-001", username: "prof.garcia", email: "garcia@epnorte.edu.ar",
        fullName: "Carlos García", role: "TEACHER", escuelaId: "esc-0001",
        passwordHash: seedHash, isDeleted: false, createdAt: now, updatedAt: now },
      { id: "usr-stude-001", username: "alumno.perez", email: "perez.alumno@epnorte.edu.ar",
        fullName: "Juan Pérez", role: "USER", escuelaId: "esc-0001",
        passwordHash: seedHash, isDeleted: false, createdAt: now, updatedAt: now },
      { id: "usr-stude-002", username: "alumno.lopez", email: "lopez.alumno@epnorte.edu.ar",
        fullName: "Ana López", role: "USER", escuelaId: "esc-0001",
        passwordHash: seedHash, isDeleted: false, createdAt: now, updatedAt: now },
      { id: "usr-paren-001", username: "padre.perez", email: "perez.padre@gmail.com",
        fullName: "Roberto Pérez", role: "PARENT", escuelaId: "esc-0001",
        passwordHash: seedHash, isDeleted: false, createdAt: now, updatedAt: now },
    ]
  });

  const count = await prisma.usuario.count();
  console.log(`[init_db] DB lista — ${count} usuarios en Postgres.`);
  console.log("[init_db] Contraseña para todos: Password123!");
}

main()
  .catch(e => { console.error("[init_db] Error:", e); process.exit(1); })
  .finally(() => prisma.$disconnect());
