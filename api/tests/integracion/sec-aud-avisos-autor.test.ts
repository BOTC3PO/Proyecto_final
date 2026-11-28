/**
 * Auditoría 11/2026 — avisos. Editar y borrar solo pedían ser el autor: un docente que dejó la escuela seguía
 * cambiando o borrando los avisos que ven sus alumnos.
 */
process.env.NODE_ENV = "test";

import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest, type Role } from "./_helpers/setup";

const ESC = "av-esc";
let baseUrl: string;
let close: () => Promise<void>;
before(async () => {
  const { mensajeria } = await import("../../src/routes/mensajeria");
  const s = await startServer([mensajeria]);
  baseUrl = s.baseUrl;
  close = s.close;
});
after(async () => { if (close) await close(); });

beforeEach(() => {
  resetPrisma();
  seedUser({ id: "av-prof", role: "TEACHER", schoolId: ESC });
  seedUser({ id: "av-dir", role: "DIRECTIVO", schoolId: ESC });
  const now = new Date().toISOString();
  prisma.membresia.rows.push({ usuarioId: "av-prof", escuelaId: ESC, rol: "TEACHER", estado: "activa", fechaAlta: now } as never);
  prisma.membresia.rows.push({ usuarioId: "av-dir", escuelaId: ESC, rol: "DIRECTIVO", estado: "activa", fechaAlta: now } as never);
});

const tProf = () => tokenFor({ id: "av-prof", role: "TEACHER", schoolId: ESC });
const crear = async (cuerpo: string) => {
  const r = await jsonRequest(baseUrl, "POST", "/api/mensajeria/avisos", { token: tProf(), body: { titulo: "T", cuerpo, destino: "todos" } });
  assert.equal(r.status, 201);
  return (r.body as { id: string }).id;
};
const revocarProf = () => {
  for (const m of prisma.membresia.rows as Array<Record<string, unknown>>) if (m.usuarioId === "av-prof") m.estado = "revocada";
  const u = (prisma.usuario.rows as Array<Record<string, unknown>>).find((r) => r.id === "av-prof")!;
  u.role = "USER"; u.roles = ["USER"]; u.escuelaId = null;
};

test("el autor vigente edita y borra", async () => {
  const id = await crear("original");
  assert.equal((await jsonRequest(baseUrl, "PUT", `/api/mensajeria/avisos/${id}`, { token: tProf(), body: { cuerpo: "nuevo" } })).status, 200);
  assert.equal((await jsonRequest(baseUrl, "DELETE", `/api/mensajeria/avisos/${id}`, { token: tProf() })).status, 200);
});

test("un autor que dejó la escuela ya no edita ni borra; el directivo de la escuela sí borra", async () => {
  const id = await crear("original");
  revocarProf();
  const tEx = tokenFor({ id: "av-prof", role: "STUDENT" as Role, roles: ["USER"], schoolId: null });
  assert.equal((await jsonRequest(baseUrl, "PUT", `/api/mensajeria/avisos/${id}`, { token: tEx, body: { cuerpo: "editado" } })).status, 403);
  assert.equal((await jsonRequest(baseUrl, "DELETE", `/api/mensajeria/avisos/${id}`, { token: tEx })).status, 403);
  assert.equal((prisma.aviso.rows.find((a: any) => a.id === id) as { cuerpo: string }).cuerpo, "original");
  const tDir = tokenFor({ id: "av-dir", role: "DIRECTIVO", schoolId: ESC });
  assert.equal((await jsonRequest(baseUrl, "DELETE", `/api/mensajeria/avisos/${id}`, { token: tDir })).status, 200);
});
