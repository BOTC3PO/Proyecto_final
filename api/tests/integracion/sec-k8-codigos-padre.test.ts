/**
 * K8 — la familia entra a los datos de un menor SOLO con un código que emite la escuela (o dada de alta por
 * el directivo). Antes: registrarse como padre + vincular a cualquier menor por su nombre de usuario, con
 * aprobación automática.
 */
process.env.NODE_ENV = "test";

import assert from "node:assert/strict";
import { after, before, beforeEach, describe, test } from "node:test";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";

const ESC_A = "esc-k8-a";
const ESC_B = "esc-k8-b";
const DIR_A = "k8-dir-a";
const DIR_B = "k8-dir-b";
const DOC_A = "k8-doc-a";
const ALU = "k8-alu";
const ALU_B = "k8-alu-b";
const PADRE = "k8-padre";
const PADRE2 = "k8-padre2";
const PADRE3 = "k8-padre3";
const ADMIN = "k8-admin";
const NO_PADRE = "k8-user";

let baseUrl: string;
let close: () => Promise<void>;
const nowIso = () => new Date().toISOString();
const tok = (id: string, role: string, school: string | null) => tokenFor({ id, role: role as never, schoolId: school });
const dirA = () => tok(DIR_A, "DIRECTIVO", ESC_A);

before(async () => {
  const { codigosPadre } = await import("../../src/routes/codigos-padre");
  const { padres } = await import("../../src/routes/padres");
  const { usuarios } = await import("../../src/routes/usuarios");
  const { auth } = await import("../../src/routes/auth");
  const srv = await startServer([codigosPadre, padres, usuarios, auth]);
  baseUrl = srv.baseUrl;
  close = srv.close;
});
after(async () => { if (close) await close(); });

beforeEach(() => {
  resetPrisma();
  (prisma.codigoInvitacionPadre as { rows: unknown[] }).rows = [];
  for (const id of [ESC_A, ESC_B]) prisma.escuela.rows.push({ id, name: id, isDeleted: false, estadoVerificacion: "verificada", createdAt: nowIso() } as never);
  const u = (id: string, role: string, school: string, mem: string | null) => {
    seedUser({ id, role: role as never, schoolId: school });
    if (mem) prisma.membresia.rows.push({ usuarioId: id, escuelaId: school, rol: mem, estado: "activa", fechaAlta: nowIso() } as never);
  };
  u(DIR_A, "DIRECTIVO", ESC_A, "DIRECTIVO");
  u(DIR_B, "DIRECTIVO", ESC_B, "DIRECTIVO");
  u(DOC_A, "TEACHER", ESC_A, "TEACHER");
  u(ALU, "STUDENT", ESC_A, "STUDENT");
  u(ALU_B, "STUDENT", ESC_B, "STUDENT");
  u(PADRE, "PARENT", ESC_A, "PARENT");
  u(PADRE2, "PARENT", ESC_A, "PARENT");
  u(PADRE3, "PARENT", ESC_A, "PARENT");
  u(NO_PADRE, "STUDENT", ESC_A, "STUDENT");
  seedUser({ id: ADMIN, role: "ADMIN", schoolId: null });
  for (const id of [ALU, ALU_B]) (prisma.usuario.rows.find((x) => (x as { id: string }).id === id) as { username?: string }).username = id;
});

const crear = (token: string, hijoId: string) => jsonRequest(baseUrl, "POST", "/api/escuela/codigos-padre", { token, body: { hijoId } });
const canjear = (token: string, codigo: string) => jsonRequest(baseUrl, "POST", "/api/hijos/canjear", { token, body: { codigo } });
const emitir = async () => (await crear(dirA(), ALU)).body as { id: string; codigo: string; expiresAt: string };
const vinculos = () => prisma.progresoModuloVinculo.rows as Array<{ parentId: string; childId: string; estado: string }>;

describe("emitir códigos", () => {
  test("el directivo emite un código para un alumno de su escuela; se guarda solo el hash", async () => {
    const r = await crear(dirA(), ALU);
    assert.equal(r.status, 201, JSON.stringify(r.body));
    const { codigo, expiresAt } = r.body as { codigo: string; expiresAt: string };
    assert.match(codigo, /^[A-HJ-NP-Z2-9]{5}-[A-HJ-NP-Z2-9]{5}$/);
    assert.ok(new Date(expiresAt).getTime() > Date.now() + 6 * 86_400_000);
    const fila = prisma.codigoInvitacionPadre.rows[0] as Record<string, unknown>;
    assert.equal(fila.estado, "activo");
    assert.ok(!JSON.stringify(fila).includes(codigo.replace("-", "")), "el código en claro no se guarda");
  });

  test("no emiten el docente, el alumno, un padre ni el directivo de otra escuela", async () => {
    for (const t of [tok(DOC_A, "TEACHER", ESC_A), tok(ALU, "STUDENT", ESC_A), tok(PADRE, "PARENT", ESC_A)]) {
      assert.equal((await crear(t, ALU)).status, 403);
    }
    assert.equal((await crear(tok(DIR_B, "DIRECTIVO", ESC_B), ALU)).status, 404, "el alumno no es de su escuela");
    assert.equal(prisma.codigoInvitacionPadre.rows.length, 0);
  });

  test("no se emite para staff ni para un padre", async () => {
    assert.equal((await crear(dirA(), DOC_A)).status, 400);
    assert.equal((await crear(dirA(), PADRE)).status, 400);
  });
});

describe("canjear", () => {
  test("un padre canjea y queda vinculado (aprobado); el código no sirve dos veces", async () => {
    const { codigo } = await emitir();
    const r = await canjear(tok(PADRE, "PARENT", ESC_A), codigo);
    assert.equal(r.status, 200, JSON.stringify(r.body));
    assert.deepEqual(vinculos().map((v) => [v.parentId, v.childId, v.estado]), [[PADRE, ALU, "aprobado"]]);
    assert.equal((prisma.codigoInvitacionPadre.rows[0] as { estado: string }).estado, "usado");
    assert.equal((await canjear(tok(PADRE2, "PARENT", ESC_A), codigo)).status, 404, "otro padre no reusa el código");
    assert.equal(vinculos().length, 1);
  });

  test("acepta minúsculas y sin guion", async () => {
    const { codigo } = await emitir();
    assert.equal((await canjear(tok(PADRE, "PARENT", ESC_A), codigo.toLowerCase().replace("-", ""))).status, 200);
  });

  test("una cuenta que no es de padre/madre no canjea", async () => {
    const { codigo } = await emitir();
    assert.equal((await canjear(tok(NO_PADRE, "STUDENT", ESC_A), codigo)).status, 403);
    assert.equal((await canjear(tok(DOC_A, "TEACHER", ESC_A), codigo)).status, 403);
    assert.equal((prisma.codigoInvitacionPadre.rows[0] as { estado: string }).estado, "activo");
  });

  test("vencido, revocado, inventado o mal formado: mismo 404", async () => {
    const { id, codigo } = await emitir();
    assert.equal((await canjear(tok(PADRE, "PARENT", ESC_A), "AAAAA-BBBBB")).status, 404);
    assert.equal((await canjear(tok(PADRE, "PARENT", ESC_A), "corto")).status, 404);
    (prisma.codigoInvitacionPadre.rows[0] as { expiresAt: string }).expiresAt = new Date(Date.now() - 1000).toISOString();
    assert.equal((await canjear(tok(PADRE, "PARENT", ESC_A), codigo)).status, 404);
    (prisma.codigoInvitacionPadre.rows[0] as { expiresAt: string; estado: string }).expiresAt = new Date(Date.now() + 1e9).toISOString();
    assert.equal((await jsonRequest(baseUrl, "DELETE", `/api/escuela/codigos-padre/${id}`, { token: dirA() })).status, 200);
    assert.equal((await canjear(tok(PADRE, "PARENT", ESC_A), codigo)).status, 404);
    assert.equal(vinculos().length, 0);
  });

  test("un alumno con 2 familiares ya vinculados rechaza un tercero y el código sigue sirviendo", async () => {
    for (const p of [PADRE, PADRE2]) assert.equal((await canjear(tok(p, "PARENT", ESC_A), (await emitir()).codigo)).status, 200);
    const { codigo } = await emitir();
    const r = await canjear(tok(PADRE3, "PARENT", ESC_A), codigo);
    assert.equal(r.status, 409, JSON.stringify(r.body));
    const ultimo = prisma.codigoInvitacionPadre.rows[prisma.codigoInvitacionPadre.rows.length - 1] as { estado: string };
    assert.equal(ultimo.estado, "activo");
  });

  test("dos canjes a la vez del mismo código: gana uno", async () => {
    const { codigo } = await emitir();
    const [a, b] = await Promise.all([canjear(tok(PADRE, "PARENT", ESC_A), codigo), canjear(tok(PADRE2, "PARENT", ESC_A), codigo)]);
    assert.deepEqual([a.status, b.status].sort(), [200, 404]);
    assert.equal(vinculos().length, 1);
  });
});

describe("registro como padre", () => {
  const registrar = (extra: Record<string, unknown>) =>
    jsonRequest(baseUrl, "POST", "/api/auth/register", {
      body: { username: `padre-${Math.random().toString(36).slice(2, 8)}`, email: `p${Math.random().toString(36).slice(2, 8)}@x.test`, fullName: "Madre Nueva", password: "UnaClaveLarga#2026", role: "PARENT", ...extra }
    });

  test("sin código no se puede registrar como padre", async () => {
    const r = await registrar({});
    assert.equal(r.status, 400, JSON.stringify(r.body));
    assert.equal((r.body as { code?: string }).code, "REQUIERE_CODIGO");
    assert.equal(prisma.usuario.rows.filter((x) => (x as { fullName?: string }).fullName === "Madre Nueva").length, 0);
  });

  test("con un código válido se crea la cuenta, en la escuela del código, ya vinculada al alumno", async () => {
    const { codigo } = await emitir();
    const r = await registrar({ inviteCode: codigo, schoolId: undefined });
    assert.equal(r.status, 201, JSON.stringify(r.body));
    const id = (r.body as { id: string }).id;
    assert.ok(prisma.membresia.rows.some((m) => (m as { usuarioId: string; escuelaId: string; rol: string }).usuarioId === id && (m as { escuelaId: string }).escuelaId === ESC_A && (m as { rol: string }).rol === "PARENT"));
    assert.deepEqual(vinculos().map((v) => [v.parentId, v.childId, v.estado]), [[id, ALU, "aprobado"]]);
  });

  test("un código inventado no crea cuenta", async () => {
    const r = await registrar({ inviteCode: "AAAAA-BBBBB" });
    assert.equal(r.status, 404, JSON.stringify(r.body));
    assert.equal(prisma.usuario.rows.filter((x) => (x as { fullName?: string }).fullName === "Madre Nueva").length, 0);
  });
});

describe("el autoservicio viejo está cerrado", () => {
  test("POST /api/hijos (vincular por nombre de usuario) da 403 a un padre; el admin sí puede", async () => {
    const body = { nombre: "X", usuario: ALU, cumple: "2015-01-01", grado: "3°", permisosTareas: true, permisosMensajes: true };
    const r = await jsonRequest(baseUrl, "POST", "/api/hijos", { token: tok(PADRE, "PARENT", ESC_A), body });
    assert.equal(r.status, 403);
    assert.equal((r.body as { code?: string }).code, "REQUIERE_CODIGO");
    assert.equal(vinculos().length, 0);
  });

  test("nadie se autoasigna el rol de padre", async () => {
    const r = await jsonRequest(baseUrl, "POST", "/api/alumnos/crear-cuenta-padre", { token: tok(NO_PADRE, "STUDENT", ESC_A) });
    assert.equal(r.status, 403);
    assert.ok(!prisma.membresia.rows.some((m) => (m as { usuarioId: string; rol: string }).usuarioId === NO_PADRE && (m as { rol: string }).rol === "PARENT"));
  });
});
