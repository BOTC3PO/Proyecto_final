import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { vaciarCacheSesion } from "./cache-sesion";

// Conexiones a Postgres por instancia de la API. Con hasta 4 instancias son 40 de las 100 de `max_connections`
// (que comparten el respaldo, las herramientas y otras sesiones). Subirlo solo si se baja el número de instancias.
const POOL_MAX = Math.min(Math.max(Math.trunc(Number(process.env.DB_POOL_MAX ?? 10)) || 10, 1), 50);

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
  max: POOL_MAX
});

const ESCRITURAS = new Set(["create", "createMany", "createManyAndReturn", "update", "updateMany", "updateManyAndReturn", "upsert", "delete", "deleteMany"]);

const crear = () =>
  new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
  }).$extends({
    // D4 — requireUser guarda el usuario y sus membresías unos segundos (lib/cache-sesion.ts): cualquier
    // escritura en esas tablas la vacía, para que un ban o una baja valgan en el pedido siguiente.
    query: {
      usuario: {
        async $allOperations({ operation, args, query }) {
          const r = await query(args);
          if (ESCRITURAS.has(operation)) vaciarCacheSesion();
          return r;
        },
      },
      membresia: {
        async $allOperations({ operation, args, query }) {
          const r = await query(args);
          if (ESCRITURAS.has(operation)) vaciarCacheSesion();
          return r;
        },
      },
    },
  });

const globalForPrisma = globalThis as unknown as { prisma?: ReturnType<typeof crear> };

export const prisma = globalForPrisma.prisma ?? crear();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
