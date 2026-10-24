/**
 * C3 — asignar un módulo a un aula: solo uno que quien asigna puede ver. Antes se podía colgar el módulo
 * privado de otra escuela y los alumnos del aula lo leían.
 */
process.env.NODE_ENV = "test";

import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";

const ESC_A = "esc-am-a";
const ESC_B = "esc-am-b";
const AULA = "aula-am";
const DOC_A = "am-doc-a";
const DOC_B = "am-doc-b";

let baseUrl: string;
let close: () => Promise<void>;
const nowIso = () => new Date().toISOString();

before(async () => {
  const { aulas } = await import("../../src/routes/aulas");
  const srv = await startServer([aulas]);
  baseUrl = srv.baseUrl;
  close = srv.close;
});
after(async () => { if (close) await close(); });

beforeEach(() => {
  resetPrisma();
  for (const id of [ESC_A, ESC_B]) prisma.escuela.rows.push({ id, name: id, isDeleted: false, estadoVerificacion: "verificada", createdAt: nowIso() } as never);
  seedUser({ id: DOC_A, role: "TEACHER", schoolId: ESC_A });
  seedUser({ id: DOC_B, role: "TEACHER", schoolId: ESC_B });
  prisma.clase.rows.push({ id: AULA, escuelaId: ESC_A, name: "A", isDeleted: false, status: "ACTIVE", createdAt: nowIso(), updatedAt: nowIso() } as never);
  prisma.claseMiembro.rows.push({ claseId: AULA, usuarioId: DOC_A, rolEnClase: "TEACHER" });
  const mod = (id: string, extra: Record<string, unknown>) =>
    prisma.modulo.rows.push({ id, titulo: id, slug: id, isDeleted: false, createdAt: nowIso(), updatedAt: nowIso(), ...extra } as never);
  mod("m-privado-ajeno", { visibility: "privado", ownerUserId: DOC_B, schoolId: ESC_B });
  mod("m-escuela-ajena", { visibility: "escuela", ownerUserId: DOC_B, schoolId: ESC_B });
  mod("m-escuela-propia", { visibility: "escuela", ownerUserId: DOC_B, schoolId: ESC_A });
  mod("m-publico", { visibility: "publico", ownerUserId: DOC_B, schoolId: ESC_B });
  mod("m-propio-privado", { visibility: "privado", ownerUserId: DOC_A, schoolId: null });
});

const asignar = (moduloId: string) =>
  jsonRequest(baseUrl, "POST", `/api/aulas/${AULA}/modulos`, { token: tokenFor({ id: DOC_A, role: "TEACHER", schoolId: ESC_A }), body: { moduloId } });

test("no se asigna el módulo privado ni el de otra escuela (responde como si no existiera)", async () => {
  for (const id of ["m-privado-ajeno", "m-escuela-ajena"]) {
    assert.equal((await asignar(id)).status, 404, id);
  }
  assert.equal(prisma.claseModulo.rows.length, 0);
});

test("sí se asigna uno propio, uno público o uno de la escuela del aula", async () => {
  for (const id of ["m-propio-privado", "m-publico", "m-escuela-propia"]) {
    const r = await asignar(id);
    assert.equal(r.status, 201, `${id}: ${JSON.stringify(r.body)}`);
  }
  assert.equal(prisma.claseModulo.rows.length, 3);
});

test("el ADMIN asigna cualquiera", async () => {
  seedUser({ id: "am-admin", role: "ADMIN", schoolId: null });
  const r = await jsonRequest(baseUrl, "POST", `/api/aulas/${AULA}/modulos`, { token: tokenFor({ id: "am-admin", role: "ADMIN", schoolId: null }), body: { moduloId: "m-privado-ajeno" } });
  assert.equal(r.status, 201, JSON.stringify(r.body));
});
