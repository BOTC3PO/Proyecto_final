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

import crypto from "node:crypto";
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
  ENTERPRISE_FEATURES: {
    DASHBOARD: "enterprise_dashboard",
    CLASSROOMS: "enterprise_classrooms",
    MEMBERS: "enterprise_members",
    MODULES: "enterprise_modules",
    MESSAGES: "enterprise_messages",
    CONTRACTS: "enterprise_contracts",
    REPORTS: "enterprise_reports",
    PARENTS: "enterprise_parents",
    INSTITUTIONAL_BENEFITS: "enterprise_institutional_benefits",
    AUDIT: "enterprise_audit",
    ADVANCED_MODERATION: "enterprise_advanced_moderation",
    ADMIN_TOOLS: "enterprise_admin_tools",
    ECONOMY: "economy",
    QUIZZES: "quizzes",
  },
  requireEnterpriseFeature: () => (_req: unknown, _res: unknown, next: () => void) => next(),
  requireActiveInstitutionBenefit: (_req: unknown, _res: unknown, next: () => void) => next(),
});

// 3. Resetters in case the test suite re-imports.
export function resetPrisma(): InMemoryPrisma {
  prisma.plantillaEjercicio.rows = [];
  prisma.plantillaEjercicioVersion.rows = [];
  prisma.usuario.rows = [];
  prisma.vblangDataset.rows = [];
  prisma.vblangDatasetFila.rows = [];
  prisma.formula.rows = [];
  prisma.suscripcion.rows = [];
  prisma.historialPago.rows = [];
  prisma.limiteEscuela.rows = [];
  prisma.escuela.rows = [];
  prisma.transaccionEscuela.rows = [];
  prisma.liquidacionEscuela.rows = [];
  prisma.clase.rows = [];
  prisma.claseMiembro.rows = [];
  prisma.claseModulo.rows = [];
  prisma.clasePeriodo.rows = [];
  prisma.actividadAula.rows = [];
  prisma.calendarioEscuela.rows = [];
  prisma.modulo.rows = [];
  prisma.quiz.rows = [];
  prisma.quizVersion.rows = [];
  prisma.quizAttempt.rows = [];
  prisma.quizUmbral.rows = [];
  prisma.progresoModulo.rows = [];
  prisma.encuesta.rows = [];
  prisma.encuestaRespuesta.rows = [];
  prisma.bloqueJson.rows = [];
  prisma.configModulo.rows = [];
  // PLAN-G §1 (item 25) — materiales guardados (mapa/timeline/interactivo/presentacion).
  prisma.material.rows = [];
  prisma.materialVersion.rows = [];
  // FASE 1 — limpiar también las tablas de membresia y la puente de
  // cuentas vinculadas. Cada test empieza con un store limpio.
  prisma.membresia.rows = [];
  prisma.cuentaVinculada.rows = [];
  // FASE 5 — vínculos padre↔hijo.
  prisma.progresoModuloVinculo.rows = [];
  prisma.auditLog.rows = [];
  // FASE 6 — `suggestions` (solicitar-rol crea filas acá).
  prisma.suggestion.rows = [];
  // FASE 7 — `modoAula` (restricciones por aula).
  prisma.modoAula.rows = [];
  // SEC-LIBRO — tabla de libros con dueño/ámbito.
  prisma.libro.rows = [];
  // PLAN-A §2 — publicaciones/comentarios/moderación de aula.
  prisma.publicacion.rows = [];
  prisma.comentario.rows = [];
  prisma.moderacionEvento.rows = [];
  // PLAN-A §3 — asistencia.
  prisma.asistencia.rows = [];
  // PLAN-A §3.4 — log de eventos para reportes del padre.
  prisma.eventoReportePadre.rows = [];
  // PLAN-B Fase 2 — núcleo de cobros escuela→familias.
  prisma.cobroEscuela.rows = [];
  prisma.cuotaAlumno.rows = [];
  prisma.pago.rows = [];
  prisma.escuelaPasarela.rows = [];
  // PLAN-B Fase 6 — saldo inicial de alumno.
  prisma.economiaTransaccion.rows = [];
  prisma.economiaSaldo.rows = [];
  prisma.economiaConfig.rows = [];
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
  roles?: string[];
  schoolId?: string | null;
  fullName?: string;
  // FASE 1 — opcional, default null. Solo se setea en espejos
  // alumno del staff.
  tipoCuenta?: string | null;
}): void {
  // MULTIROL-01: si no se pasa `roles`, se promueve `role` a
  // array de un elemento (compat con los seeds preexistentes).
  const roles = opts.roles ?? [opts.role];
  prisma.usuario.rows.push({
    id: opts.id,
    username: opts.id,
    email: `${opts.id}@test.local`,
    fullName: opts.fullName ?? opts.id,
    role: opts.role,
    roles,
    escuelaId: opts.schoolId ?? null,
    isDeleted: false,
    // FASE 1 — el helper por defecto crea cuentas reales (sin
    // marcador). Los tests que necesiten espejos setean
    // explícitamente `tipoCuenta: "ESPEJO_ALUMNO"`.
    tipoCuenta: opts.tipoCuenta ?? null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
}

export function tokenFor(opts: {
  id: string;
  role: Role;
  roles?: string[];
  schoolId?: string | null;
  switchedFrom?: string;
}): string {
  const roles = opts.roles ?? [opts.role];
  return createAccessToken({
    id: opts.id,
    role: opts.role,
    roles,
    schoolId: opts.schoolId ?? null,
    ...(opts.switchedFrom ? { switchedFrom: opts.switchedFrom } : {}),
  }).token;
}

export function seedVinculacion(idA: string, idB: string): void {
  const a = idA < idB ? idA : idB;
  const b = idA < idB ? idB : idA;
  prisma.cuentaVinculada.rows.push({
    id: crypto.randomUUID(),
    usuarioAId: a,
    usuarioBId: b,
    createdAt: new Date().toISOString(),
  });
}

export async function startServer(
  routers: express.RequestHandler[],
): Promise<{ baseUrl: string; close: () => Promise<void> }> {
  const app = express();
  // Mismo carve-out que api/src/index.ts: los webhooks de pago necesitan
  // el body CRUDO para verificar firma, no el JSON ya parseado.
  app.use("/api/payments/webhook", express.raw({ type: "application/json" }));
  app.use("/api/pasarelas/webhook", express.raw({ type: "application/json" }));
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
