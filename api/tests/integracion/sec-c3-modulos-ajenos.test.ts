/**
 * C3 — actuar sobre el módulo de otra persona. Antes: cualquier usuario con sesión (un alumno de otra
 * escuela incluido) podía BORRAR cualquier módulo; un docente de otra escuela pisaba el original de un
 * módulo privado ajeno (PUT/PATCH) y lo duplicaba.
 */
process.env.NODE_ENV = "test";

import assert from "node:assert/strict";
import { after, before, beforeEach, describe, test } from "node:test";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";

const ESC_A = "esc-aj-a";
const ESC_B = "esc-aj-b";
const DUENO = "aj-dueno";
const COLEGA_A = "aj-colega-a";
const DIR_A = "aj-dir-a";
const DOC_B = "aj-doc-b";
const ALU_B = "aj-alu-b";
const ADMIN = "aj-admin";

let baseUrl: string;
let close: () => Promise<void>;
const nowIso = () => new Date().toISOString();
const tok = (id: string, role: string, school: string | null) => tokenFor({ id, role: role as never, schoolId: school });

before(async () => {
  const { modulos } = await import("../../src/routes/modulos");
  const { requireUser } = await import("../../src/lib/user-auth");
  const srv = await startServer([requireUser, modulos]);
  baseUrl = srv.baseUrl;
  close = srv.close;
});
after(async () => { if (close) await close(); });

beforeEach(() => {
  resetPrisma();
  for (const id of [ESC_A, ESC_B]) prisma.escuela.rows.push({ id, name: id, isDeleted: false, estadoVerificacion: "verificada", createdAt: nowIso() } as never);
  seedUser({ id: DUENO, role: "TEACHER", schoolId: ESC_A });
  seedUser({ id: COLEGA_A, role: "TEACHER", schoolId: ESC_A });
  seedUser({ id: DIR_A, role: "DIRECTIVO", schoolId: ESC_A });
  seedUser({ id: DOC_B, role: "TEACHER", schoolId: ESC_B });
  seedUser({ id: ALU_B, role: "STUDENT", schoolId: ESC_B });
  seedUser({ id: ADMIN, role: "ADMIN", schoolId: null });
  const mod = (id: string, visibility: string) =>
    prisma.modulo.rows.push({ id, titulo: `Original ${id}`, slug: id, ownerUserId: DUENO, visibility, schoolId: ESC_A, isDeleted: false, createdAt: nowIso(), updatedAt: nowIso() } as never);
  mod("m-privado", "privado");
  mod("m-escuela", "escuela");
  mod("m-publico", "publico");
});

const existe = (id: string) => prisma.modulo.rows.some((m) => (m as { id: string }).id === id);
const titulo = (id: string) => (prisma.modulo.rows.find((m) => (m as { id: string }).id === id) as { titulo: string }).titulo;

describe("borrar", () => {
  test("no borra un alumno, ni un docente de otra escuela, ni un colega de la misma escuela", async () => {
    for (const [quien, t] of [["alumno de otra escuela", tok(ALU_B, "STUDENT", ESC_B)], ["docente de otra escuela", tok(DOC_B, "TEACHER", ESC_B)], ["colega de la escuela", tok(COLEGA_A, "TEACHER", ESC_A)]] as const) {
      for (const id of ["m-privado", "m-escuela", "m-publico"]) {
        const r = await jsonRequest(baseUrl, "DELETE", `/api/modulos/${id}`, { token: t });
        assert.ok([403, 404].includes(r.status), `${quien} borró ${id}: ${r.status}`);
        assert.ok(existe(id), `${quien}: ${id} desapareció`);
      }
    }
  });

  test("borran el dueño, el directivo de la escuela y el admin", async () => {
    assert.equal((await jsonRequest(baseUrl, "DELETE", "/api/modulos/m-privado", { token: tok(DUENO, "TEACHER", ESC_A) })).status, 204);
    assert.equal((await jsonRequest(baseUrl, "DELETE", "/api/modulos/m-escuela", { token: tok(DIR_A, "DIRECTIVO", ESC_A) })).status, 204);
    assert.equal((await jsonRequest(baseUrl, "DELETE", "/api/modulos/m-publico", { token: tok(ADMIN, "ADMIN", null) })).status, 204);
    assert.equal(prisma.modulo.rows.length, 0);
  });
});

describe("editar el original", () => {
  test("un módulo privado ajeno no se edita ni se pisa (docente de otra escuela, o colega de la escuela)", async () => {
    for (const t of [tok(DOC_B, "TEACHER", ESC_B), tok(COLEGA_A, "TEACHER", ESC_A)]) {
      for (const metodo of ["PUT", "PATCH"]) {
        const r = await jsonRequest(baseUrl, metodo, "/api/modulos/m-privado", { token: t, body: { title: "Pisado" } });
        assert.ok([403, 404].includes(r.status), `${metodo}: ${r.status} ${JSON.stringify(r.body)}`);
      }
    }
    assert.equal(titulo("m-privado"), "Original m-privado");
  });

  test("el módulo 'solo escuela' de otra escuela no se edita", async () => {
    const r = await jsonRequest(baseUrl, "PATCH", "/api/modulos/m-escuela", { token: tok(DOC_B, "TEACHER", ESC_B), body: { title: "Pisado" } });
    assert.ok([403, 404].includes(r.status), String(r.status));
    assert.equal(titulo("m-escuela"), "Original m-escuela");
  });

  test("un módulo público ajeno se edita sobre una COPIA y el original queda intacto", async () => {
    const r = await jsonRequest(baseUrl, "PATCH", "/api/modulos/m-publico", { token: tok(DOC_B, "TEACHER", ESC_B), body: { title: "Mi versión" } });
    assert.equal(r.status, 200, JSON.stringify(r.body));
    assert.equal(titulo("m-publico"), "Original m-publico");
    assert.notEqual((r.body as { id: string }).id, "m-publico");
  });
});

describe("duplicar", () => {
  test("no se duplica un módulo privado, ni uno de otra escuela, que no se puede ver", async () => {
    for (const id of ["m-privado", "m-escuela"]) {
      const r = await jsonRequest(baseUrl, "POST", `/api/modulos/${id}/duplicar`, { token: tok(DOC_B, "TEACHER", ESC_B) });
      assert.equal(r.status, 404, `${id}: ${JSON.stringify(r.body)}`);
    }
    assert.equal(prisma.modulo.rows.length, 3);
  });

  test("sí se duplica uno público, o uno de la escuela del docente", async () => {
    assert.equal((await jsonRequest(baseUrl, "POST", "/api/modulos/m-publico/duplicar", { token: tok(DOC_B, "TEACHER", ESC_B) })).status, 201);
    assert.equal((await jsonRequest(baseUrl, "POST", "/api/modulos/m-escuela/duplicar", { token: tok(COLEGA_A, "TEACHER", ESC_A) })).status, 201);
  });
});
