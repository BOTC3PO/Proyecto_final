/**
 * K12 (2026-11-01) — lo que cubrían las pruebas heredadas de MongoDB, portado a Prisma.
 *
 * - classroom-scope-cross-school: un docente de otra escuela no edita el aula, no lee sus publicaciones ni le
 *   agrega recursos.
 * - modulos-auth-readonly: crear, editar y borrar módulos exige sesión.
 * - seed-auth: las semillas exigen administrador.
 *
 * auth-forgot-password, moderacion-nonadmin y governance-authz se borraron: las dos primeras ya las cubren
 * auth-recuperar-contrasena y moderacion-alcance-escuela, y la gobernanza ya no existe.
 */
process.env.NODE_ENV = "test";

import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";

let baseUrl: string;
let close: () => Promise<void>;

const ESC = "k12-esc";
const OTRA = "k12-otra";
const DOCENTE = "k12-docente";
const AJENO = "k12-ajeno";
const AULA = "k12-aula";

before(async () => {
  const { aulas } = await import("../../src/routes/aulas");
  const { publicaciones } = await import("../../src/routes/publicaciones");
  const { resourceLinks } = await import("../../src/routes/resource-links");
  const { modulos } = await import("../../src/routes/modulos");
  const { seed } = await import("../../src/routes/seed");
  const server = await startServer([aulas, publicaciones, resourceLinks, modulos, seed]);
  baseUrl = server.baseUrl;
  close = server.close;
});
after(async () => {
  if (close) await close();
});

beforeEach(() => {
  resetPrisma();
  const ahora = new Date().toISOString();
  for (const id of [ESC, OTRA]) {
    prisma.escuela.rows.push({ id, name: id, isDeleted: false, estadoVerificacion: "verificada", createdAt: ahora } as never);
  }
  seedUser({ id: DOCENTE, role: "TEACHER", schoolId: ESC });
  seedUser({ id: AJENO, role: "TEACHER", schoolId: OTRA });
  seedUser({ id: "k12-alumno", role: "USER", schoolId: ESC });
  prisma.membresia.rows.push(
    { usuarioId: DOCENTE, escuelaId: ESC, rol: "TEACHER", estado: "activa", fechaAlta: ahora } as never,
    { usuarioId: AJENO, escuelaId: OTRA, rol: "TEACHER", estado: "activa", fechaAlta: ahora } as never
  );
  prisma.clase.rows.push({
    id: AULA, escuelaId: ESC, name: "Aula K12", grade: "5°", isDeleted: false, status: "ACTIVE", teacherId: DOCENTE, createdAt: ahora
  } as never);
  prisma.claseMiembro.rows.push({ claseId: AULA, usuarioId: DOCENTE, rolEnClase: "TEACHER" } as never);
});

const ajeno = () => tokenFor({ id: AJENO, role: "TEACHER", schoolId: OTRA });

test("control: el docente del aula sí la edita y lee sus publicaciones", async () => {
  const propio = tokenFor({ id: DOCENTE, role: "TEACHER", schoolId: ESC });
  const r = await jsonRequest(baseUrl, "PATCH", `/api/aulas/${AULA}`, { token: propio, body: { name: "Aula renombrada" } });
  assert.equal(r.status, 200, JSON.stringify(r.body));
  assert.equal((await jsonRequest(baseUrl, "GET", `/api/aulas/${AULA}/publicaciones`, { token: propio })).status, 200);
});

test("un docente de otra escuela no edita el aula", async () => {
  const r = await jsonRequest(baseUrl, "PATCH", `/api/aulas/${AULA}`, { token: ajeno(), body: { name: "Clase bloqueada" } });
  assert.ok(r.status === 403 || r.status === 404, `status ${r.status}`);
  assert.equal((prisma.clase.rows[0] as { name: string }).name, "Aula K12");
});

test("un docente de otra escuela no lee las publicaciones del aula", async () => {
  const r = await jsonRequest(baseUrl, "GET", `/api/aulas/${AULA}/publicaciones`, { token: ajeno() });
  assert.ok(r.status === 403 || r.status === 404, `status ${r.status}`);
});

test("un docente de otra escuela no agrega recursos al aula", async () => {
  const r = await jsonRequest(baseUrl, "POST", `/api/aulas/${AULA}/resource-links`, {
    token: ajeno(),
    body: { type: "externo", url: "https://example.com/recurso", visibility: "publico" }
  });
  assert.ok(r.status === 403 || r.status === 404, `status ${r.status}`);
});

for (const [method, path] of [
  ["POST", "/api/modulos"],
  ["PUT", "/api/modulos/mod-x"],
  ["PATCH", "/api/modulos/mod-x"],
  ["DELETE", "/api/modulos/mod-x"]
] as const) {
  test(`${method} ${path} exige sesión`, async () => {
    const r = await jsonRequest(baseUrl, method, path, { body: method === "DELETE" ? undefined : { titulo: "x" } });
    assert.equal(r.status, 401);
  });
}

test("las semillas exigen administrador", async () => {
  assert.equal((await jsonRequest(baseUrl, "POST", "/api/seed/modulos")).status, 401);
  const alumno = tokenFor({ id: "k12-alumno", role: "USER", schoolId: ESC });
  assert.equal((await jsonRequest(baseUrl, "POST", "/api/seed/modulos", { token: alumno })).status, 403);
});
