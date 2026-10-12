/**
 * C3 — visibilidad de los módulos. El catálogo (`GET /api/modulos`, `/buscar`) y el detalle
 * (`GET /api/modulos/:id`) no filtraban por `visibility`: el módulo privado de un docente, o el "solo mi
 * escuela" de otra escuela, aparecía para cualquier usuario.
 */
process.env.NODE_ENV = "test";

import assert from "node:assert/strict";
import { after, before, beforeEach, describe, test } from "node:test";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";

const ESC_A = "esc-vis-a";
const ESC_B = "esc-vis-b";
const DUENO = "vis-dueno";
const DOC_A = "vis-doc-a";
const DOC_B = "vis-doc-b";
const ALU_AULA = "vis-alu-aula";
const ALU_A = "vis-alu-a";
const ALU_B = "vis-alu-b";
const PADRE = "vis-padre";
const ADMIN = "vis-admin";
const AULA = "aula-vis";

let baseUrl: string;
let close: () => Promise<void>;
const nowIso = () => new Date().toISOString();
const tok = (id: string, role: string, school: string | null) => tokenFor({ id, role: role as never, schoolId: school });
const get = (path: string, token: string) => jsonRequest(baseUrl, "GET", path, { token });

before(async () => {
  const { modulos } = await import("../../src/routes/modulos");
  const { requireUser } = await import("../../src/lib/user-auth");
  // En producción `requireUser` corre antes de este router (src/app.ts); acá se monta igual.
  const srv = await startServer([requireUser, modulos]);
  baseUrl = srv.baseUrl;
  close = srv.close;
});
after(async () => { if (close) await close(); });

beforeEach(() => {
  resetPrisma();
  for (const id of [ESC_A, ESC_B]) prisma.escuela.rows.push({ id, name: id, isDeleted: false, estadoVerificacion: "verificada", createdAt: nowIso() } as never);
  seedUser({ id: DUENO, role: "TEACHER", schoolId: ESC_A });
  seedUser({ id: DOC_A, role: "TEACHER", schoolId: ESC_A });
  seedUser({ id: DOC_B, role: "TEACHER", schoolId: ESC_B });
  seedUser({ id: ALU_AULA, role: "STUDENT", schoolId: ESC_A });
  seedUser({ id: ALU_A, role: "STUDENT", schoolId: ESC_A });
  seedUser({ id: ALU_B, role: "STUDENT", schoolId: ESC_B });
  seedUser({ id: PADRE, role: "PARENT", schoolId: ESC_A });
  seedUser({ id: ADMIN, role: "ADMIN", schoolId: null });
  prisma.clase.rows.push({ id: AULA, escuelaId: ESC_A, name: "Aula", isDeleted: false, status: "ACTIVE", createdAt: nowIso(), updatedAt: nowIso() } as never);
  prisma.claseMiembro.rows.push({ claseId: AULA, usuarioId: DUENO, rolEnClase: "TEACHER" }, { claseId: AULA, usuarioId: ALU_AULA, rolEnClase: "STUDENT" });
  prisma.progresoModuloVinculo.rows.push({ id: "v1", parentId: PADRE, childId: ALU_AULA, estado: "aprobado", createdAt: nowIso(), updatedAt: nowIso() } as never);
  const mod = (id: string, visibility: string, schoolId: string | null) =>
    prisma.modulo.rows.push({ id, titulo: id, slug: id, ownerUserId: DUENO, visibility, schoolId, isDeleted: false, createdAt: nowIso(), updatedAt: nowIso() } as never);
  mod("m-publico", "publico", ESC_A);
  mod("m-escuela", "escuela", ESC_A);
  mod("m-privado", "privado", ESC_A);
  mod("m-privado-asignado", "privado", ESC_A);
  prisma.claseModulo.rows.push({ claseId: AULA, moduloId: "m-privado-asignado", assignedAt: nowIso(), required: false } as never);
});

const ids = (body: unknown) => ((body as { items: Array<{ id: string }> }).items ?? []).map((i) => i.id).sort();

describe("catálogo", () => {
  test("el dueño ve todos los suyos", async () => {
    assert.deepEqual(ids((await get("/api/modulos", tok(DUENO, "TEACHER", ESC_A))).body), ["m-escuela", "m-privado", "m-privado-asignado", "m-publico"]);
  });

  test("un docente de la misma escuela ve el público y el de la escuela, no el privado ajeno", async () => {
    assert.deepEqual(ids((await get("/api/modulos", tok(DOC_A, "TEACHER", ESC_A))).body), ["m-escuela", "m-publico"]);
  });

  test("un docente o un alumno de OTRA escuela ve solo lo público", async () => {
    for (const t of [tok(DOC_B, "TEACHER", ESC_B), tok(ALU_B, "STUDENT", ESC_B)]) {
      assert.deepEqual(ids((await get("/api/modulos", t)).body), ["m-publico"]);
      assert.deepEqual(ids((await get("/api/modulos/buscar", t)).body), ["m-publico"]);
    }
  });

  test("un alumno del aula ve además el módulo privado que su docente le asignó", async () => {
    assert.deepEqual(ids((await get("/api/modulos", tok(ALU_AULA, "STUDENT", ESC_A))).body), ["m-escuela", "m-privado-asignado", "m-publico"]);
  });

  test("el padre de un alumno del aula ve también lo asignado a su hijo", async () => {
    assert.deepEqual(ids((await get("/api/modulos", tok(PADRE, "PARENT", ESC_A))).body), ["m-escuela", "m-privado-asignado", "m-publico"]);
  });

  test("el admin ve todo", async () => {
    assert.equal(ids((await get("/api/modulos", tok(ADMIN, "ADMIN", null))).body).length, 4);
  });

  test("listar por aulaId no destapa el módulo privado a quien no es del aula", async () => {
    assert.deepEqual(ids((await get(`/api/modulos?aulaId=${AULA}`, tok(ALU_B, "STUDENT", ESC_B))).body), []);
    assert.deepEqual(ids((await get(`/api/modulos?aulaId=${AULA}`, tok(ALU_AULA, "STUDENT", ESC_A))).body), ["m-privado-asignado"]);
  });
});

describe("detalle", () => {
  test("un módulo privado, o de otra escuela, responde 404 a quien no puede verlo", async () => {
    for (const [id, quien] of [["m-privado", tok(DOC_A, "TEACHER", ESC_A)], ["m-privado", tok(ALU_B, "STUDENT", ESC_B)], ["m-escuela", tok(DOC_B, "TEACHER", ESC_B)], ["m-privado-asignado", tok(ALU_A, "STUDENT", ESC_A)]] as const) {
      const r = await get(`/api/modulos/${id}`, quien);
      assert.equal(r.status, 404, `${id}: ${JSON.stringify(r.body).slice(0, 120)}`);
    }
  });

  test("lo ven el dueño, el admin, los de la escuela (escuela), cualquiera (público) y los del aula (asignado)", async () => {
    assert.equal((await get("/api/modulos/m-privado", tok(DUENO, "TEACHER", ESC_A))).status, 200);
    assert.equal((await get("/api/modulos/m-privado", tok(ADMIN, "ADMIN", null))).status, 200);
    assert.equal((await get("/api/modulos/m-escuela", tok(DOC_A, "TEACHER", ESC_A))).status, 200);
    assert.equal((await get("/api/modulos/m-publico", tok(ALU_B, "STUDENT", ESC_B))).status, 200);
    assert.equal((await get("/api/modulos/m-privado-asignado", tok(ALU_AULA, "STUDENT", ESC_A))).status, 200);
  });
});
