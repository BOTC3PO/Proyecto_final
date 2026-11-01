import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { vaciarCacheSesion } from "./cache-sesion";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!
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
