/**
 * Auditoría 11/2026 — POST /api/admins: cualquier ADMIN (no solo el principal) creaba nuevos ADMIN, y como
 * requireAdmin no miraba el baneo, un admin recién baneado seguía haciéndolo con su token vigente.
 */
process.env.NODE_ENV = "test";

import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";

let baseUrl: string;
let close: () => Promise<void>;
before(async () => {
  const { auth } = await import("../../src/routes/auth");
  const s = await startServer([auth]);
  baseUrl = s.baseUrl;
  close = s.close;
});
after(async () => { if (close) await close(); });

beforeEach(() => {
  resetPrisma();
  seedUser({ id: "ad-principal", role: "ADMIN", schoolId: null });
  seedUser({ id: "ad-b", role: "ADMIN", schoolId: null });
  (prisma.usuario.rows.find((u: any) => u.id === "ad-b") as { esAdminPrincipal: boolean }).esAdminPrincipal = false;
});

let n = 0;
const alta = (token: string) => {
  n += 1;
  return jsonRequest(baseUrl, "POST", "/api/admins", {
    token,
    body: { username: `admin${n}`, email: `admin${n}@test.local`, fullName: "Admin Nuevo", password: "Zx9-vQ7!mLp2-Rt4" },
  });
};
const admins = () => prisma.usuario.rows.filter((u: any) => u.fullName === "Admin Nuevo").length;

test("un ADMIN que no es el principal no crea administradores", async () => {
  const r = await alta(tokenFor({ id: "ad-b", role: "ADMIN", schoolId: null }));
  assert.equal(r.status, 403);
  assert.equal(admins(), 0);
});

test("el principal sí", async () => {
  assert.equal((await alta(tokenFor({ id: "ad-principal", role: "ADMIN", schoolId: null }))).status, 201);
});

test("un ADMIN baneado queda afuera aunque su token siga vigente", async () => {
  const token = tokenFor({ id: "ad-principal", role: "ADMIN", schoolId: null });
  const fila = prisma.usuario.rows.find((u: any) => u.id === "ad-principal") as { isBanned?: boolean };
  fila.isBanned = true;
  const r = await alta(token);
  assert.equal(r.status, 403);
  assert.equal(admins(), 0);
});
