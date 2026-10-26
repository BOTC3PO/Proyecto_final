/**
 * C3 — crear módulos. `POST /api/modulos` pedía solo sesión y se fiaba del cliente para la escuela, el
 * autor y el aula: un alumno podía publicar contenido en el catálogo de otra escuela, firmado con el
 * nombre de un docente.
 */
process.env.NODE_ENV = "test";

import assert from "node:assert/strict";
import { after, before, beforeEach, describe, test } from "node:test";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";

const ESC_A = "esc-c3m-a";
const ESC_B = "esc-c3m-b";
const DOC_A = "c3m-doc-a";
const DOC_B = "c3m-doc-b";
const ALU_A = "c3m-alu-a";
const PADRE = "c3m-padre";
const ADMIN = "c3m-admin";
const AULA_B = "aula-c3m-b";

let baseUrl: string;
let close: () => Promise<void>;
const nowIso = () => new Date().toISOString();
const tok = (id: string, role: string, school: string | null) => tokenFor({ id, role: role as never, schoolId: school });

before(async () => {
  const { modulos } = await import("../../src/routes/modulos");
  const srv = await startServer([modulos]);
  baseUrl = srv.baseUrl;
  close = srv.close;
});
after(async () => { if (close) await close(); });

beforeEach(() => {
  resetPrisma();
  for (const id of [ESC_A, ESC_B]) {
    prisma.escuela.rows.push({ id, name: id, isDeleted: false, estadoVerificacion: "verificada", createdAt: nowIso() } as never);
  }
  seedUser({ id: DOC_A, role: "TEACHER", schoolId: ESC_A });
  seedUser({ id: DOC_B, role: "TEACHER", schoolId: ESC_B });
  seedUser({ id: ALU_A, role: "STUDENT", schoolId: ESC_A });
  seedUser({ id: PADRE, role: "PARENT", schoolId: ESC_A });
  seedUser({ id: ADMIN, role: "ADMIN", schoolId: null });
  prisma.clase.rows.push({ id: AULA_B, escuelaId: ESC_B, name: "B", isDeleted: false, status: "ACTIVE", createdAt: nowIso(), updatedAt: nowIso() } as never);
});

const modulo = (id: string, extra: Record<string, unknown> = {}) => ({
  id, title: "Módulo", description: "desc", subject: "Matemáticas", category: "general", level: "secundaria",
  durationMinutes: 30, visibility: "publico", createdBy: DOC_A, createdAt: nowIso(), updatedAt: nowIso(),
  dependencies: [], theoryItems: [], quizzes: [], ...extra
});
const crear = (token: string, body: Record<string, unknown>) => jsonRequest(baseUrl, "POST", "/api/modulos", { token, body });

describe("quién puede crear módulos", () => {
  test("un alumno o un padre no crean módulos", async () => {
    assert.equal((await crear(tok(ALU_A, "STUDENT", ESC_A), modulo("m-alu", { createdBy: ALU_A }))).status, 403);
    assert.equal((await crear(tok(PADRE, "PARENT", ESC_A), modulo("m-pad", { createdBy: PADRE }))).status, 403);
    assert.equal(prisma.modulo.rows.length, 0);
  });

  test("un docente crea módulos propios; el admin también", async () => {
    assert.equal((await crear(tok(DOC_A, "TEACHER", ESC_A), modulo("m-doc"))).status, 201);
    assert.equal((await crear(tok(ADMIN, "ADMIN", null), modulo("m-adm", { createdBy: ADMIN }))).status, 201);
  });
});

describe("el servidor no se fía del cliente", () => {
  test("no se puede firmar un módulo con el nombre de otra persona", async () => {
    const r = await crear(tok(DOC_A, "TEACHER", ESC_A), modulo("m-suplanta", { createdBy: DOC_B }));
    assert.equal(r.status, 403, JSON.stringify(r.body));
    assert.equal(prisma.modulo.rows.length, 0);
  });

  test("un docente no publica en el catálogo de otra escuela", async () => {
    const r = await crear(tok(DOC_A, "TEACHER", ESC_A), modulo("m-ajeno", { visibility: "escuela", schoolId: ESC_B }));
    assert.equal(r.status, 403, JSON.stringify(r.body));
    assert.equal(prisma.modulo.rows.length, 0);
    const propio = await crear(tok(DOC_A, "TEACHER", ESC_A), modulo("m-propio", { visibility: "escuela", schoolId: ESC_A }));
    assert.equal(propio.status, 201, JSON.stringify(propio.body));
  });

  test("un docente no cuelga un módulo de un aula de otra escuela", async () => {
    const r = await crear(tok(DOC_A, "TEACHER", ESC_A), modulo("m-aula-ajena", { aulaId: AULA_B }));
    assert.equal(r.status, 403, JSON.stringify(r.body));
    assert.equal(prisma.modulo.rows.length, 0);
  });
});

describe("edición", () => {
  const sembrar = (id: string, extra: Record<string, unknown> = {}) =>
    prisma.modulo.rows.push({ id, titulo: "Original", slug: id, ownerUserId: DOC_A, visibility: "publico", schoolId: ESC_A, isDeleted: false, createdAt: nowIso(), updatedAt: nowIso(), ...extra } as never);
  const editar = (token: string, id: string, body: Record<string, unknown>, metodo = "PATCH") =>
    jsonRequest(baseUrl, metodo, `/api/modulos/${id}`, { token, body });

  test("un alumno no edita un módulo público, ni por copy-on-write (no se crea ninguna copia)", async () => {
    sembrar("m-pub");
    const r = await editar(tok(ALU_A, "STUDENT", ESC_A), "m-pub", { title: "Hackeado" });
    assert.equal(r.status, 403, JSON.stringify(r.body));
    assert.equal(prisma.modulo.rows.length, 1);
    assert.equal((prisma.modulo.rows[0] as { titulo: string }).titulo, "Original");
  });

  test("el dueño no puede regalar el módulo a otra escuela", async () => {
    sembrar("m-mio");
    for (const metodo of ["PATCH", "PUT"]) {
      const r = await editar(tok(DOC_A, "TEACHER", ESC_A), "m-mio", { schoolId: ESC_B, visibility: "escuela" }, metodo);
      assert.equal(r.status, 403, `${metodo}: ${JSON.stringify(r.body)}`);
    }
    assert.equal((prisma.modulo.rows[0] as { schoolId: string }).schoolId, ESC_A);
  });

  test("el autor no se cambia editando", async () => {
    sembrar("m-autor");
    const r = await editar(tok(DOC_A, "TEACHER", ESC_A), "m-autor", { title: "Nuevo título", createdBy: DOC_B });
    assert.equal(r.status, 200, JSON.stringify(r.body));
    const fila = prisma.modulo.rows[0] as { ownerUserId: string; titulo: string };
    assert.equal(fila.titulo, "Nuevo título");
    assert.equal(fila.ownerUserId, DOC_A);
  });
});
