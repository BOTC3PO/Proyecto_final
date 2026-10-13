/**
 * C3 — la administración de la economía (exámenes/subastas, riesgo del aula, configuración de módulo,
 * eventos) solo la hace el ADMIN o el personal de la escuela del aula. Antes estas rutas pedían solo
 * sesión: un alumno, o un docente de otra escuela, podía abrir subastas, cambiar el riesgo o cerrar el
 * examen de un aula ajena.
 */
process.env.NODE_ENV = "test";

import assert from "node:assert/strict";
import { after, before, beforeEach, describe, test } from "node:test";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";

const ESC_A = "esc-c3e-a";
const ESC_B = "esc-c3e-b";
const AULA_A = "aula-c3e-a";
const MOD_A = "mod-c3e-a";
const DOC_A = "c3e-doc-a";
const DOC_B = "c3e-doc-b";
const ALU_A = "c3e-alu-a";
const ALU_B = "c3e-alu-b";
const ADMIN = "c3e-admin";

let baseUrl: string;
let close: () => Promise<void>;
const nowIso = () => new Date().toISOString();
const futuro = () => new Date(Date.now() + 7 * 86_400_000).toISOString();
const tok = (id: string, role: string, school: string | null) => tokenFor({ id, role: role as never, schoolId: school });
const tDocA = () => tok(DOC_A, "TEACHER", ESC_A);
const tDocB = () => tok(DOC_B, "TEACHER", ESC_B);
const tAluA = () => tok(ALU_A, "STUDENT", ESC_A);
const tAdmin = () => tok(ADMIN, "ADMIN", null);

before(async () => {
  const { economia } = await import("../../src/routes/economia");
  const srv = await startServer([economia]);
  baseUrl = srv.baseUrl;
  close = srv.close;
});
after(async () => { if (close) await close(); });

beforeEach(() => {
  resetPrisma();
  for (const t of [prisma.economiaExamen, prisma.economiaExamenPuja, prisma.economiaRiesgoCurso, prisma.economiaEvento, prisma.economiaModulo, prisma.economiaSaldo]) {
    (t as { rows: unknown[] }).rows = [];
  }
  for (const id of [ESC_A, ESC_B]) {
    prisma.escuela.rows.push({ id, name: id, isDeleted: false, estadoVerificacion: "verificada", createdAt: nowIso() } as never);
  }
  seedUser({ id: DOC_A, role: "TEACHER", schoolId: ESC_A });
  seedUser({ id: DOC_B, role: "TEACHER", schoolId: ESC_B });
  seedUser({ id: ALU_A, role: "STUDENT", schoolId: ESC_A });
  seedUser({ id: ALU_B, role: "STUDENT", schoolId: ESC_B });
  seedUser({ id: ADMIN, role: "ADMIN", schoolId: null });
  prisma.clase.rows.push({ id: AULA_A, escuelaId: ESC_A, name: "A", isDeleted: false, status: "ACTIVE", createdAt: nowIso(), updatedAt: nowIso() } as never);
  prisma.claseMiembro.rows.push(
    { claseId: AULA_A, usuarioId: DOC_A, rolEnClase: "TEACHER" },
    { claseId: AULA_A, usuarioId: ALU_A, rolEnClase: "STUDENT" }
  );
  prisma.modulo.rows.push({ id: MOD_A, slug: "m", titulo: "Mod A", schoolId: ESC_A, ownerUserId: DOC_A, isDeleted: false, createdAt: nowIso(), updatedAt: nowIso() } as never);
});

const examen = (extra: Record<string, unknown> = {}) => ({
  nombre: "Parcial", aulaId: AULA_A, fechaExamen: futuro(), maxCompra: 2, ...extra
});
const sembrarExamen = (id = "ex-1") =>
  prisma.economiaExamen.rows.push({ id, json: JSON.stringify({ id, aulaId: AULA_A, estado: "anunciado", subastaActiva: true, maxCompra: 2, impuestoTasa: 0.1, nombre: "Parcial", fechaExamen: futuro(), updatedAt: nowIso() }), createdAt: nowIso() } as never);

describe("exámenes / subastas", () => {
  test("crear: el docente de la escuela del aula sí; un alumno o un docente de otra escuela no", async () => {
    assert.equal((await jsonRequest(baseUrl, "POST", "/api/economia/examenes", { token: tAluA(), body: examen() })).status, 403);
    assert.equal((await jsonRequest(baseUrl, "POST", "/api/economia/examenes", { token: tDocB(), body: examen() })).status, 403);
    assert.equal(prisma.economiaExamen.rows.length, 0);
    const ok = await jsonRequest(baseUrl, "POST", "/api/economia/examenes", { token: tDocA(), body: examen() });
    assert.equal(ok.status, 201, JSON.stringify(ok.body));
    assert.equal((await jsonRequest(baseUrl, "POST", "/api/economia/examenes", { token: tAdmin(), body: examen() })).status, 201);
  });

  test("crear sin aula: solo el admin de plataforma", async () => {
    assert.equal((await jsonRequest(baseUrl, "POST", "/api/economia/examenes", { token: tDocA(), body: examen({ aulaId: undefined }) })).status, 403);
    assert.equal((await jsonRequest(baseUrl, "POST", "/api/economia/examenes", { token: tAdmin(), body: examen({ aulaId: undefined }) })).status, 201);
  });

  test("modificar: igual que crear", async () => {
    sembrarExamen();
    const cambio = { nombre: "Cambiado" };
    assert.equal((await jsonRequest(baseUrl, "PATCH", "/api/economia/examenes/ex-1", { token: tAluA(), body: cambio })).status, 403);
    assert.equal((await jsonRequest(baseUrl, "PATCH", "/api/economia/examenes/ex-1", { token: tDocB(), body: cambio })).status, 403);
    assert.equal((await jsonRequest(baseUrl, "PATCH", "/api/economia/examenes/ex-1", { token: tDocA(), body: cambio })).status, 200);
  });

  test("cerrar: un docente de otra escuela no puede cerrar el examen ajeno", async () => {
    sembrarExamen();
    const r = await jsonRequest(baseUrl, "POST", "/api/economia/examenes/ex-1/cerrar", { token: tDocB(), body: {} });
    assert.equal(r.status, 403, JSON.stringify(r.body));
    assert.equal(JSON.parse((prisma.economiaExamen.rows[0] as { json: string }).json).estado, "anunciado");
  });

  test("las pujas: el alumno ve solo las suyas aunque pida las de otro; el docente de la escuela ve todas; el de otra escuela, ninguna", async () => {
    sembrarExamen();
    const puja = (id: string, usuarioId: string) =>
      prisma.economiaExamenPuja.rows.push({ id, examenId: "ex-1", json: JSON.stringify({ id, examenId: "ex-1", usuarioId, puntos: 1, montoPorPunto: 5 }), createdAt: nowIso() } as never);
    puja("p1", ALU_A);
    puja("p2", "otro-alumno");
    const ver = async (token: string, q = "") =>
      ((await jsonRequest(baseUrl, "GET", `/api/economia/examenes/ex-1/pujas${q}`, { token })).body as { items: Array<{ usuarioId: string }> }).items.map((i) => i.usuarioId).sort();
    assert.deepEqual(await ver(tAluA()), [ALU_A]);
    assert.deepEqual(await ver(tAluA(), "?usuarioId=otro-alumno"), [ALU_A], "no puede pedir las pujas de otro");
    assert.deepEqual(await ver(tDocA()), [ALU_A, "otro-alumno"].sort());
    assert.deepEqual(await ver(tDocB()), []);
  });
});

describe("riesgo del aula", () => {
  const riesgo = { riesgoBase: 0.1, riesgoMercado: 0.2, riesgoCredito: 0.3 };
  test("PUT y PATCH: solo el personal de la escuela del aula (o el admin)", async () => {
    for (const metodo of ["PUT", "PATCH"]) {
      assert.equal((await jsonRequest(baseUrl, metodo, `/api/economia/riesgo/${AULA_A}`, { token: tAluA(), body: riesgo })).status, 403, `${metodo} alumno`);
      assert.equal((await jsonRequest(baseUrl, metodo, `/api/economia/riesgo/${AULA_A}`, { token: tDocB(), body: riesgo })).status, 403, `${metodo} otra escuela`);
    }
    assert.equal(prisma.economiaRiesgoCurso.rows.length, 0);
    assert.equal((await jsonRequest(baseUrl, "PUT", `/api/economia/riesgo/${AULA_A}`, { token: tDocA(), body: riesgo })).status, 200);
    assert.equal((await jsonRequest(baseUrl, "PATCH", `/api/economia/riesgo/${AULA_A}`, { token: tAdmin(), body: { riesgoBase: 0.5 } })).status, 200);
  });
});

describe("configuración de módulo y eventos", () => {
  test("activar la economía de un módulo: el dueño/escuela del módulo y el admin; no un alumno ni otra escuela", async () => {
    const put = (token: string) => jsonRequest(baseUrl, "PUT", `/api/economia/modulos/${MOD_A}`, { token, body: { activo: true } });
    assert.equal((await put(tAluA())).status, 403);
    assert.equal((await put(tDocB())).status, 403);
    assert.equal(prisma.economiaModulo.rows.length, 0);
    assert.equal((await put(tDocA())).status, 200);
    assert.equal((await put(tAdmin())).status, 200);
  });

  test("eventos económicos (globales): solo el admin de plataforma", async () => {
    const evento = { nombre: "Inflación", tipo: "inflacion", activo: true, tasa: 0.1 };
    assert.equal((await jsonRequest(baseUrl, "POST", "/api/economia/eventos", { token: tDocA(), body: evento })).status, 403);
    assert.equal((await jsonRequest(baseUrl, "POST", "/api/economia/eventos", { token: tAluA(), body: evento })).status, 403);
    assert.equal(prisma.economiaEvento.rows.length, 0);
    const ok = await jsonRequest(baseUrl, "POST", "/api/economia/eventos", { token: tAdmin(), body: evento });
    assert.equal(ok.status, 201, JSON.stringify(ok.body));
    const id = (ok.body as { id: string }).id;
    assert.equal((await jsonRequest(baseUrl, "PATCH", `/api/economia/eventos/${id}`, { token: tDocA(), body: { activo: false } })).status, 403);
    assert.equal((await jsonRequest(baseUrl, "PATCH", `/api/economia/eventos/${id}`, { token: tAdmin(), body: { activo: false } })).status, 200);
  });
});
