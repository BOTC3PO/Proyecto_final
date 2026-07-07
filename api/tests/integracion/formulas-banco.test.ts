/**
 * PLAN-E §19 (F2) — banco de fórmulas: CRUD + scoping.
 */
import {
  jsonRequest,
  resetPrisma,
  seedUser,
  startServer,
  tokenFor,
} from "./_helpers/setup";
import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";

import { formulas } from "../../src/routes/formulas";

let baseUrl: string;
let close: () => Promise<void>;

before(async () => {
  const server = await startServer([formulas]);
  baseUrl = server.baseUrl;
  close = server.close;
});

after(async () => {
  await close();
});

beforeEach(() => {
  resetPrisma();
  seedUser({ id: "admin-1", role: "ADMIN", schoolId: "esc-1" });
  seedUser({ id: "teacher-1", role: "TEACHER", schoolId: "esc-1" });
  seedUser({ id: "teacher-2", role: "TEACHER", schoolId: "esc-2" });
  seedUser({ id: "student-1", role: "STUDENT", schoolId: "esc-1" });
});

const admin = () => tokenFor({ id: "admin-1", role: "ADMIN", schoolId: "esc-1" });
const t1 = () => tokenFor({ id: "teacher-1", role: "TEACHER", schoolId: "esc-1" });
const t2 = () => tokenFor({ id: "teacher-2", role: "TEACHER", schoolId: "esc-2" });
const alumno = () => tokenFor({ id: "student-1", role: "STUDENT", schoolId: "esc-1" });

async function crear(
  token: string,
  body: Record<string, unknown>,
): Promise<{ status: number; body: unknown }> {
  return jsonRequest(baseUrl, "POST", "/api/formulas", { token, body });
}

const PITAGORAS = {
  nombre: "Pitágoras",
  materia: "Matemática",
  latex: "a^2 + b^2 = c^2",
  visibility: "escuela",
};

test("POST + GET: el docente crea una fórmula de escuela y la lista", async () => {
  const r = await crear(t1(), PITAGORAS);
  assert.equal(r.status, 201);
  const list = await jsonRequest(baseUrl, "GET", "/api/formulas", { token: t1() });
  assert.equal(list.status, 200);
  const items = (list.body as { items: Array<{ nombre: string }> }).items;
  assert.equal(items.length, 1);
  assert.equal(items[0].nombre, "Pitágoras");
});

test("scoping: docente de otra escuela NO ve la fórmula de escuela ajena", async () => {
  await crear(t1(), PITAGORAS);
  const list = await jsonRequest(baseUrl, "GET", "/api/formulas", { token: t2() });
  assert.equal((list.body as { items: unknown[] }).items.length, 0);
});

test("scoping: las públicas las ven todos los docentes", async () => {
  const r = await crear(admin(), { ...PITAGORAS, visibility: "publica" });
  assert.equal(r.status, 201);
  const list = await jsonRequest(baseUrl, "GET", "/api/formulas", { token: t2() });
  assert.equal((list.body as { items: unknown[] }).items.length, 1);
});

test("docente NO puede crear fórmula pública (sólo ADMIN)", async () => {
  const r = await crear(t1(), { ...PITAGORAS, visibility: "publica" });
  assert.equal(r.status, 403);
});

test("alumno no crea ni lista", async () => {
  const r = await crear(alumno(), PITAGORAS);
  assert.equal(r.status, 403);
  const list = await jsonRequest(baseUrl, "GET", "/api/formulas", { token: alumno() });
  assert.deepEqual(list.body, { items: [], total: 0 });
});

test("filtro por materia", async () => {
  await crear(t1(), PITAGORAS);
  await crear(t1(), { ...PITAGORAS, nombre: "Ohm", materia: "Física" });
  const list = await jsonRequest(baseUrl, "GET", "/api/formulas?materia=F%C3%ADsica", {
    token: t1(),
  });
  const items = (list.body as { items: Array<{ nombre: string }> }).items;
  assert.equal(items.length, 1);
  assert.equal(items[0].nombre, "Ohm");
});

test("PUT: sólo owner o ADMIN; DELETE soft", async () => {
  const created = await crear(t1(), PITAGORAS);
  const id = (created.body as { id: string }).id;

  const ajeno = await jsonRequest(baseUrl, "PUT", `/api/formulas/${id}`, {
    token: t2(),
    body: { nombre: "hackeada" },
  });
  assert.equal(ajeno.status, 403);

  const ok = await jsonRequest(baseUrl, "PUT", `/api/formulas/${id}`, {
    token: t1(),
    body: { latex: "c^2 = a^2 + b^2" },
  });
  assert.equal(ok.status, 200);
  assert.equal((ok.body as { latex: string }).latex, "c^2 = a^2 + b^2");

  const del = await jsonRequest(baseUrl, "DELETE", `/api/formulas/${id}`, {
    token: t1(),
  });
  assert.equal(del.status, 200);
  const list = await jsonRequest(baseUrl, "GET", "/api/formulas", { token: t1() });
  assert.equal((list.body as { items: unknown[] }).items.length, 0);
});

test("docente no puede PUBLICAR una fórmula existente (visibility→publica)", async () => {
  const created = await crear(t1(), PITAGORAS);
  const id = (created.body as { id: string }).id;
  const r = await jsonRequest(baseUrl, "PUT", `/api/formulas/${id}`, {
    token: t1(),
    body: { visibility: "publica" },
  });
  assert.equal(r.status, 403);
});
