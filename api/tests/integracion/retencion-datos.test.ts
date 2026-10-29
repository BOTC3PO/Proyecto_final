/**
 * L13 (2026-10-28) — conservación de datos: se borran sesiones vencidas, enlaces de recuperación y tokens push
 * viejos, y se anonimizan las cuentas borradas por un administrador después del plazo.
 */
process.env.NODE_ENV = "test";

import assert from "node:assert/strict";
import { beforeEach, test } from "node:test";
import { prisma, resetPrisma, seedUser } from "./_helpers/setup";
import { purgarDatosVencidos } from "../../src/lib/retencion-datos";

const AHORA = new Date("2026-10-28T12:00:00Z");
const hace = (dias: number) => new Date(AHORA.getTime() - dias * 86_400_000);

beforeEach(() => {
  resetPrisma();
  prisma.refreshToken.rows.push(
    { id: "rt-viejo", jti: "a", userId: "x", familyId: "f", revoked: false, expiresAt: hace(40) } as never,
    { id: "rt-vigente", jti: "b", userId: "x", familyId: "f", revoked: false, expiresAt: hace(-5) } as never
  );
  prisma.passwordResetToken.rows.push(
    { id: "pr-viejo", usuarioId: "x", tokenHash: "h1", expiresAt: hace(39).toISOString(), createdAt: hace(40).toISOString() } as never,
    { id: "pr-nuevo", usuarioId: "x", tokenHash: "h2", expiresAt: hace(0).toISOString(), createdAt: hace(1).toISOString() } as never
  );
  prisma.pushToken.rows.push(
    { id: "p-viejo", userId: "x", token: "t1", createdAt: hace(400).toISOString(), updatedAt: hace(400).toISOString() } as never,
    { id: "p-nuevo", userId: "x", token: "t2", createdAt: hace(10).toISOString(), updatedAt: hace(10).toISOString() } as never
  );
  seedUser({ id: "borrado-viejo", role: "USER", schoolId: null });
  seedUser({ id: "borrado-reciente", role: "USER", schoolId: null });
  seedUser({ id: "activo", role: "USER", schoolId: null });
  const set = (id: string, datos: Record<string, unknown>) =>
    Object.assign(prisma.usuario.rows.find((u) => u.id === id) as Record<string, unknown>, datos);
  set("borrado-viejo", { isDeleted: true, email: "viejo@x.com", fullName: "Viejo", updatedAt: hace(45).toISOString() });
  set("borrado-reciente", { isDeleted: true, email: "reciente@x.com", fullName: "Reciente", updatedAt: hace(5).toISOString() });
  set("activo", { isDeleted: false, email: "activo@x.com", updatedAt: hace(400).toISOString() });
});

test("borra lo técnico vencido y anonimiza solo las cuentas borradas hace más de 30 días", async () => {
  const r = await purgarDatosVencidos(AHORA);
  assert.deepEqual(prisma.refreshToken.rows.map((x) => x.id), ["rt-vigente"]);
  assert.deepEqual(prisma.passwordResetToken.rows.map((x) => (x as { id: string }).id), ["pr-nuevo"]);
  assert.deepEqual(prisma.pushToken.rows.map((x) => (x as { id: string }).id), ["p-nuevo"]);
  assert.equal(r.cuentasAnonimizadas, 1);
  const u = (id: string) => prisma.usuario.rows.find((x) => x.id === id) as Record<string, unknown>;
  assert.match(String(u("borrado-viejo").email), /@baja\.invalid$/);
  assert.equal(u("borrado-viejo").fullName, "Cuenta dada de baja");
  assert.equal(u("borrado-reciente").email, "reciente@x.com");
  assert.equal(u("activo").email, "activo@x.com", "una cuenta activa no se toca aunque esté inactiva");
  const otraVez = await purgarDatosVencidos(AHORA);
  assert.equal(otraVez.cuentasAnonimizadas, 0, "no se vuelve a anonimizar");
});
