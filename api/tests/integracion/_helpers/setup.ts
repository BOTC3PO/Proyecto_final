/**
 * Test setup for Sprint 7 integration tests.
 *
 * Replaces `src/lib/prisma` and `src/lib/entitlements` in the require cache
 * with stubs BEFORE the route modules are imported. This lets us exercise
 * the real route handlers without a real PostgreSQL.
 */

process.env.NODE_ENV = "test";
process.env.JWT_SECRET = process.env.JWT_SECRET ?? "test-secret-vblang";
process.env.DATABASE_URL =
  process.env.DATABASE_URL ?? "postgresql://test:test@localhost:5432/test";

import path from "node:path";
import Module from "node:module";
import { InMemoryPrisma } from "./in-memory-prisma";

const apiSrc = path.resolve(__dirname, "..", "..", "..", "src");

export const prisma = new InMemoryPrisma();

function installModule(absPath: string, exports: unknown): void {
  // @ts-expect-error — internal require cache surface.
  Module._cache = Module._cache || {};
  // @ts-expect-error — same.
  Module._cache[absPath] = {
    id: absPath,
    filename: absPath,
    loaded: true,
    exports,
    children: [],
    paths: [],
  };
}

// 1. Replace prisma module with our in-memory instance.
const prismaPath = path.join(apiSrc, "lib", "prisma.ts");
installModule(prismaPath, { prisma });

// 2. Stub entitlements (subscription gating) — always allow in tests.
const entitlementsPath = path.join(apiSrc, "lib", "entitlements.ts");
installModule(entitlementsPath, {
  enforceSubscriptionAccess: async () => true,
});

// 3. Resetters in case the test suite re-imports.
export function resetPrisma(): InMemoryPrisma {
  prisma.plantillaEjercicio.rows = [];
  prisma.plantillaEjercicioVersion.rows = [];
  prisma.usuario.rows = [];
  prisma.vblangDataset.rows = [];
  prisma.vblangDatasetFila.rows = [];
  prisma.suscripcion.rows = [];
  prisma.historialPago.rows = [];
  prisma.limiteEscuela.rows = [];
  prisma.escuela.rows = [];
  prisma.transaccionEscuela.rows = [];
  prisma.liquidacionEscuela.rows = [];
  prisma.clase.rows = [];
  prisma.claseMiembro.rows = [];
  prisma.claseModulo.rows = [];
  prisma.modulo.rows = [];
  prisma.quiz.rows = [];
  prisma.quizVersion.rows = [];
  prisma.progresoModulo.rows = [];
  return prisma;
}

// 4. Helpers shared by both test files.
import express from "express";
import type { Server } from "node:http";
// Token helper imported AFTER we install module stubs (so it picks up our prisma).
import { createAccessToken } from "../../../src/lib/auth-token";

export type Role = "ADMIN" | "TEACHER" | "DIRECTIVO" | "STUDENT" | "PARENT";

export function seedUser(opts: {
  id: string;
  role: Role;
  schoolId?: string | null;
  fullName?: string;
}): void {
  prisma.usuario.rows.push({
    id: opts.id,
    username: opts.id,
    email: `${opts.id}@test.local`,
    fullName: opts.fullName ?? opts.id,
    role: opts.role,
    escuelaId: opts.schoolId ?? null,
    isDeleted: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
}

export function tokenFor(opts: {
  id: string;
  role: Role;
  schoolId?: string | null;
}): string {
  return createAccessToken({
    id: opts.id,
    role: opts.role,
    schoolId: opts.schoolId ?? null,
  }).token;
}

export async function startServer(
  routers: express.RequestHandler[],
): Promise<{ baseUrl: string; close: () => Promise<void> }> {
  const app = express();
  app.use(express.json());
  for (const r of routers) app.use(r);
  app.use((_req, res) => res.status(404).json({ error: "not found" }));

  const server: Server = await new Promise((resolve) => {
    const s = app.listen(0, () => resolve(s));
  });
  const address = server.address();
  if (!address || typeof address === "string") {
    throw new Error("Failed to bind test server");
  }
  return {
    baseUrl: `http://127.0.0.1:${address.port}`,
    close: () => new Promise((resolve) => server.close(() => resolve())),
  };
}

export async function jsonRequest(
  baseUrl: string,
  method: string,
  path: string,
  opts: { token?: string; body?: unknown } = {},
): Promise<{ status: number; body: unknown }> {
  const headers: Record<string, string> = { "content-type": "application/json" };
  if (opts.token) headers.authorization = `Bearer ${opts.token}`;
  const res = await fetch(`${baseUrl}${path}`, {
    method,
    headers,
    body: opts.body !== undefined ? JSON.stringify(opts.body) : undefined,
  });
  let body: unknown = null;
  const text = await res.text();
  if (text) {
    try {
      body = JSON.parse(text);
    } catch {
      body = text;
    }
  }
  return { status: res.status, body };
}
