/**
 * L14 (2026-10-28) — descargar los propios datos y darse de baja desde el perfil.
 */
process.env.NODE_ENV = "test";

import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";
import { hashPassword } from "../../src/lib/passwords";

let baseUrl: string;
let close: () => Promise<void>;
const ID = "usr-mis-datos";

before(async () => {
  const { misDatos } = await import("../../src/routes/mis-datos");
  const server = await startServer([misDatos]);
  baseUrl = server.baseUrl;
  close = server.close;
});
after(async () => {
  if (close) await close();
});
beforeEach(async () => {
  resetPrisma();
  seedUser({ id: ID, role: "USER", schoolId: "esc" });
  const u = prisma.usuario.rows.find((r) => r.id === ID) as Record<string, unknown>;
  Object.assign(u, { email: "luz@escuela.com", username: "luz", fullName: "Luz Gómez", passwordHash: await hashPassword("MiClave#2026x") });
  prisma.membresia.rows.push({ usuarioId: ID, escuelaId: "esc", rol: "STUDENT", estado: "activa", fechaAlta: "2026-01-01" } as never);
  prisma.asistencia.rows.push({ id: "a1", claseId: "c1", alumnoId: ID, fecha: "2026-10-01", estado: "presente", registradoPor: "d", createdAt: "x", updatedAt: "x" } as never);
  prisma.refreshToken.rows.push({ id: "rt", jti: "j", userId: ID, familyId: "f", revoked: false } as never);
});

const token = () => tokenFor({ id: ID, role: "USER", schoolId: "esc" });

test("GET /api/mis-datos devuelve los datos de la cuenta sin la contraseña", async () => {
  const r = await jsonRequest(baseUrl, "GET", "/api/mis-datos", { token: token() });
  assert.equal(r.status, 200, JSON.stringify(r.body));
  const body = r.body as { perfil: Record<string, unknown>; asistencias: unknown[]; membresias: unknown[] };
  assert.equal(body.perfil.email, "luz@escuela.com");
  assert.equal("passwordHash" in body.perfil, false);
  assert.equal(body.asistencias.length, 1);
  assert.equal(body.membresias.length, 1);
});

test("GET /api/mis-datos sin sesión: 401", async () => {
  const r = await jsonRequest(baseUrl, "GET", "/api/mis-datos");
  assert.equal(r.status, 401);
});

test("POST /api/mis-datos/baja pide la contraseña y la palabra BAJA", async () => {
  const sinConfirmar = await jsonRequest(baseUrl, "POST", "/api/mis-datos/baja", { token: token(), body: { password: "MiClave#2026x" } });
  assert.equal(sinConfirmar.status, 400);
  const malaClave = await jsonRequest(baseUrl, "POST", "/api/mis-datos/baja", { token: token(), body: { password: "otra", confirmacion: "BAJA" } });
  assert.equal(malaClave.status, 403);
  assert.equal((prisma.usuario.rows.find((r) => r.id === ID) as { isDeleted: boolean }).isDeleted, false);
});

test("POST /api/mis-datos/baja desactiva, anonimiza y cierra sesiones; los registros escolares quedan", async () => {
  const r = await jsonRequest(baseUrl, "POST", "/api/mis-datos/baja", { token: token(), body: { password: "MiClave#2026x", confirmacion: "baja" } });
  assert.equal(r.status, 200, JSON.stringify(r.body));
  const u = prisma.usuario.rows.find((x) => x.id === ID) as Record<string, unknown>;
  assert.equal(u.isDeleted, true);
  assert.equal(u.fullName, "Cuenta dada de baja");
  assert.notEqual(u.email, "luz@escuela.com");
  assert.equal(u.passwordHash, null);
  assert.equal((prisma.refreshToken.rows[0] as { revoked: boolean }).revoked, true);
  assert.equal((prisma.membresia.rows[0] as { estado: string }).estado, "revocada");
  assert.equal(prisma.asistencia.rows.length, 1);
});
