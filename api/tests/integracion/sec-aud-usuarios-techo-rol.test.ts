/**
 * Auditoría 11/2026 — POST /api/usuarios: un ADMIN_ESCUELA podía dar de alta cuentas DIRECTIVO (más poder que
 * la suya) en su escuela.
 */
process.env.NODE_ENV = "test";

import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";

const ESC = "aaaaaaaaaaaaaaaaaaaaaaaa";
let baseUrl: string;
let close: () => Promise<void>;
before(async () => {
  const { usuarios } = await import("../../src/routes/usuarios");
  const s = await startServer([usuarios]);
  baseUrl = s.baseUrl;
  close = s.close;
});
after(async () => { if (close) await close(); });

beforeEach(() => {
  resetPrisma();
  const now = new Date().toISOString();
  prisma.escuela.rows.push({ id: ESC, name: "E", isDeleted: false, estadoVerificacion: "verificada", directivoPrincipalId: "tr-dir", createdAt: now, updatedAt: now } as never);
  seedUser({ id: "tr-ae", role: "ADMIN_ESCUELA" as never, schoolId: ESC });
  seedUser({ id: "tr-dir", role: "DIRECTIVO", schoolId: ESC });
});

let n = 0;
const alta = (token: string, role: string) => {
  n += 1;
  return jsonRequest(baseUrl, "POST", "/api/usuarios", {
    token,
    body: { username: `nuevo${n}`, email: `nuevo${n}@test.local`, fullName: "Cuenta Nueva", role, escuelaId: ESC, password: "Zq8!vLr2#pWm9xT" },
  });
};
const tAe = () => tokenFor({ id: "tr-ae", role: "ADMIN_ESCUELA", roles: ["ADMIN_ESCUELA"], schoolId: ESC } as never);
const tDir = () => tokenFor({ id: "tr-dir", role: "DIRECTIVO", schoolId: ESC });

test("ADMIN_ESCUELA no crea DIRECTIVO ni ADMIN; sí docentes", async () => {
  assert.equal((await alta(tAe(), "DIRECTIVO")).status, 403);
  assert.equal((await alta(tAe(), "ADMIN")).status, 403);
  assert.equal(prisma.usuario.rows.filter((u: any) => u.fullName === "Cuenta Nueva").length, 0);
  assert.equal((await alta(tAe(), "TEACHER")).status, 201);
});

test("un DIRECTIVO sí crea otro DIRECTIVO de su escuela", async () => {
  assert.equal((await alta(tDir(), "DIRECTIVO")).status, 201);
});
