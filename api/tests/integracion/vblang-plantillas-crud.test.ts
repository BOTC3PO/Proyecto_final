import {
  jsonRequest,
  resetPrisma,
  seedUser,
  startServer,
  tokenFor,
} from "./_helpers/setup";
import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";

// Import routes AFTER setup has replaced the prisma module.
import { plantillas } from "../../src/routes/plantillas";

let baseUrl: string;
let close: () => Promise<void>;

const VALID_DSL = `variables:
  a: random(1, 10)

enunciado: "X"
respuesta: a`;

const INVALID_DSL = `enunciado: ` + `"unterminated`;

before(async () => {
  const server = await startServer([plantillas]);
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

test("POST /api/plantillas sin auth → 401", async () => {
  const r = await jsonRequest(baseUrl, "POST", "/api/plantillas", {
    body: { nombre: "x", codigoDsl: VALID_DSL, visibility: "privada" },
  });
  assert.equal(r.status, 401);
});

test("POST /api/plantillas como STUDENT → 403", async () => {
  const r = await jsonRequest(baseUrl, "POST", "/api/plantillas", {
    token: tokenFor({ id: "student-1", role: "STUDENT", schoolId: "esc-1" }),
    body: { nombre: "x", codigoDsl: VALID_DSL, visibility: "privada" },
  });
  assert.equal(r.status, 403);
  assert.match(JSON.stringify(r.body), /creadores de contenido/);
});

test("POST /api/plantillas con codigoDsl inválido → 400 con dslError", async () => {
  const r = await jsonRequest(baseUrl, "POST", "/api/plantillas", {
    token: tokenFor({ id: "teacher-1", role: "TEACHER", schoolId: "esc-1" }),
    body: { nombre: "x", codigoDsl: INVALID_DSL, visibility: "privada" },
  });
  assert.equal(r.status, 400);
  const body = r.body as { dslError?: { message?: string } };
  assert.ok(body.dslError, "se esperaba dslError en el body");
  assert.ok(typeof body.dslError!.message === "string");
});

test("POST /api/plantillas como TEACHER plantilla válida → 201 + version 1", async () => {
  const r = await jsonRequest(baseUrl, "POST", "/api/plantillas", {
    token: tokenFor({ id: "teacher-1", role: "TEACHER", schoolId: "esc-1" }),
    body: {
      nombre: "Cinemática 1",
      codigoDsl: VALID_DSL,
      visibility: "privada",
      tags: ["fisica", "mru"],
    },
  });
  assert.equal(r.status, 201);
  const body = r.body as {
    id: string;
    version: number;
    nombre: string;
    publicAprobado: boolean;
    tags?: string[];
  };
  assert.equal(body.version, 1);
  assert.equal(body.nombre, "Cinemática 1");
  assert.deepEqual(body.tags, ["fisica", "mru"]);

  // versions
  const vs = await jsonRequest(baseUrl, "GET", `/api/plantillas/${body.id}/versions`, {
    token: tokenFor({ id: "teacher-1", role: "TEACHER", schoolId: "esc-1" }),
  });
  assert.equal(vs.status, 200);
  const list = vs.body as Array<{ version: number; changelog?: string }>;
  assert.equal(list.length, 1);
  assert.equal(list[0].version, 1);
});

test("POST publica como TEACHER → publicAprobado false", async () => {
  const r = await jsonRequest(baseUrl, "POST", "/api/plantillas", {
    token: tokenFor({ id: "teacher-1", role: "TEACHER", schoolId: "esc-1" }),
    body: { nombre: "p", codigoDsl: VALID_DSL, visibility: "publica" },
  });
  assert.equal(r.status, 201);
  assert.equal((r.body as { publicAprobado: boolean }).publicAprobado, false);
});

test("POST publica como ADMIN → publicAprobado true", async () => {
  const r = await jsonRequest(baseUrl, "POST", "/api/plantillas", {
    token: tokenFor({ id: "admin-1", role: "ADMIN", schoolId: "esc-1" }),
    body: { nombre: "p", codigoDsl: VALID_DSL, visibility: "publica" },
  });
  assert.equal(r.status, 201);
  assert.equal((r.body as { publicAprobado: boolean }).publicAprobado, true);
});

test("GET /api/plantillas como STUDENT → array vacío", async () => {
  // Crear una plantilla pública aprobada como admin.
  await jsonRequest(baseUrl, "POST", "/api/plantillas", {
    token: tokenFor({ id: "admin-1", role: "ADMIN", schoolId: "esc-1" }),
    body: { nombre: "pub", codigoDsl: VALID_DSL, visibility: "publica" },
  });
  const r = await jsonRequest(baseUrl, "GET", "/api/plantillas", {
    token: tokenFor({ id: "student-1", role: "STUDENT", schoolId: "esc-1" }),
  });
  assert.equal(r.status, 200);
  const body = r.body as { items: unknown[]; total: number };
  assert.deepEqual(body.items, []);
  assert.equal(body.total, 0);
});

test("GET /api/plantillas como TEACHER → propias + escuela + publicas aprobadas", async () => {
  const t1 = tokenFor({ id: "teacher-1", role: "TEACHER", schoolId: "esc-1" });
  const t2 = tokenFor({ id: "teacher-2", role: "TEACHER", schoolId: "esc-2" });
  const adminTok = tokenFor({ id: "admin-1", role: "ADMIN", schoolId: "esc-1" });

  // propia de teacher-1, privada.
  await jsonRequest(baseUrl, "POST", "/api/plantillas", {
    token: t1,
    body: { nombre: "mia", codigoDsl: VALID_DSL, visibility: "privada" },
  });
  // de teacher-2 (otra escuela), privada — NO debe verse.
  await jsonRequest(baseUrl, "POST", "/api/plantillas", {
    token: t2,
    body: { nombre: "otra-privada", codigoDsl: VALID_DSL, visibility: "privada" },
  });
  // de teacher-2 (otra escuela), publica aprobada por admin — SÍ.
  // Truco: la creamos como admin para que arranque aprobada.
  await jsonRequest(baseUrl, "POST", "/api/plantillas", {
    token: adminTok,
    body: { nombre: "publica-aprobada", codigoDsl: VALID_DSL, visibility: "publica" },
  });
  // de teacher-2 pública SIN aprobar — NO.
  await jsonRequest(baseUrl, "POST", "/api/plantillas", {
    token: t2,
    body: { nombre: "publica-pendiente", codigoDsl: VALID_DSL, visibility: "publica" },
  });

  const r = await jsonRequest(baseUrl, "GET", "/api/plantillas", { token: t1 });
  assert.equal(r.status, 200);
  const items = (r.body as { items: Array<{ nombre: string }> }).items;
  const nombres = items.map((i) => i.nombre).sort();
  assert.deepEqual(nombres, ["mia", "publica-aprobada"]);
});

test("GET /api/plantillas/:id de plantilla propia → 200 con codigoDsl", async () => {
  const t1 = tokenFor({ id: "teacher-1", role: "TEACHER", schoolId: "esc-1" });
  const created = await jsonRequest(baseUrl, "POST", "/api/plantillas", {
    token: t1,
    body: { nombre: "p", codigoDsl: VALID_DSL, visibility: "privada" },
  });
  const id = (created.body as { id: string }).id;
  const r = await jsonRequest(baseUrl, "GET", `/api/plantillas/${id}`, { token: t1 });
  assert.equal(r.status, 200);
  const body = r.body as { codigoDsl: string };
  assert.equal(body.codigoDsl, VALID_DSL);
});

test("GET /api/plantillas/:id privada de otro user → 403", async () => {
  const t1 = tokenFor({ id: "teacher-1", role: "TEACHER", schoolId: "esc-1" });
  const t2 = tokenFor({ id: "teacher-2", role: "TEACHER", schoolId: "esc-2" });
  const created = await jsonRequest(baseUrl, "POST", "/api/plantillas", {
    token: t1,
    body: { nombre: "secreta", codigoDsl: VALID_DSL, visibility: "privada" },
  });
  const id = (created.body as { id: string }).id;
  const r = await jsonRequest(baseUrl, "GET", `/api/plantillas/${id}`, { token: t2 });
  assert.equal(r.status, 403);
});

test("PUT /api/plantillas/:id por owner cambia codigoDsl → version++", async () => {
  const t1 = tokenFor({ id: "teacher-1", role: "TEACHER", schoolId: "esc-1" });
  const created = await jsonRequest(baseUrl, "POST", "/api/plantillas", {
    token: t1,
    body: { nombre: "p", codigoDsl: VALID_DSL, visibility: "privada" },
  });
  const id = (created.body as { id: string }).id;

  const nuevo = VALID_DSL + "\n# comentario";
  const r = await jsonRequest(baseUrl, "PUT", `/api/plantillas/${id}`, {
    token: t1,
    body: { codigoDsl: nuevo, changelog: "ajuste" },
  });
  assert.equal(r.status, 200);
  assert.equal((r.body as { version: number }).version, 2);

  const vs = await jsonRequest(baseUrl, "GET", `/api/plantillas/${id}/versions`, {
    token: t1,
  });
  const list = vs.body as Array<{ version: number; changelog?: string }>;
  assert.equal(list.length, 2);
  // ordenadas DESC
  assert.equal(list[0].version, 2);
  assert.equal(list[0].changelog, "ajuste");
});

test("PUT /api/plantillas/:id por NO owner y NO admin → 403", async () => {
  const t1 = tokenFor({ id: "teacher-1", role: "TEACHER", schoolId: "esc-1" });
  const t2 = tokenFor({ id: "teacher-2", role: "TEACHER", schoolId: "esc-2" });
  const created = await jsonRequest(baseUrl, "POST", "/api/plantillas", {
    token: t1,
    body: { nombre: "p", codigoDsl: VALID_DSL, visibility: "privada" },
  });
  const id = (created.body as { id: string }).id;
  const r = await jsonRequest(baseUrl, "PUT", `/api/plantillas/${id}`, {
    token: t2,
    body: { nombre: "rename" },
  });
  assert.equal(r.status, 403);
});

test("DELETE /api/plantillas/:id por owner → soft delete + ya no listada", async () => {
  const t1 = tokenFor({ id: "teacher-1", role: "TEACHER", schoolId: "esc-1" });
  const created = await jsonRequest(baseUrl, "POST", "/api/plantillas", {
    token: t1,
    body: { nombre: "borrar", codigoDsl: VALID_DSL, visibility: "privada" },
  });
  const id = (created.body as { id: string }).id;
  const r = await jsonRequest(baseUrl, "DELETE", `/api/plantillas/${id}`, { token: t1 });
  assert.equal(r.status, 200);

  const r2 = await jsonRequest(baseUrl, "GET", `/api/plantillas/${id}`, { token: t1 });
  assert.equal(r2.status, 404);

  const list = await jsonRequest(baseUrl, "GET", "/api/plantillas", { token: t1 });
  const items = (list.body as { items: Array<{ id: string }> }).items;
  assert.equal(items.find((i) => i.id === id), undefined);
});

test("POST /api/plantillas/:id/fork → basadoEn correcto, version 1, publicAprobado false", async () => {
  const adminTok = tokenFor({ id: "admin-1", role: "ADMIN", schoolId: "esc-1" });
  const t2 = tokenFor({ id: "teacher-2", role: "TEACHER", schoolId: "esc-2" });
  const created = await jsonRequest(baseUrl, "POST", "/api/plantillas", {
    token: adminTok,
    body: { nombre: "original", codigoDsl: VALID_DSL, visibility: "publica" },
  });
  const origId = (created.body as { id: string }).id;
  const r = await jsonRequest(baseUrl, "POST", `/api/plantillas/${origId}/fork`, {
    token: t2,
    body: {},
  });
  assert.equal(r.status, 201);
  const body = r.body as {
    id: string;
    basadoEn?: string;
    version: number;
    publicAprobado: boolean;
    nombre: string;
    ownerUserId: string;
  };
  assert.equal(body.basadoEn, origId);
  assert.equal(body.version, 1);
  assert.equal(body.publicAprobado, false);
  assert.equal(body.nombre, "Copia de original");
  assert.equal(body.ownerUserId, "teacher-2");
});

test("3 PUT con codigoDsl distinto → /versions devuelve 3 items", async () => {
  const t1 = tokenFor({ id: "teacher-1", role: "TEACHER", schoolId: "esc-1" });
  const created = await jsonRequest(baseUrl, "POST", "/api/plantillas", {
    token: t1,
    body: { nombre: "vs", codigoDsl: VALID_DSL, visibility: "privada" },
  });
  const id = (created.body as { id: string }).id;

  await jsonRequest(baseUrl, "PUT", `/api/plantillas/${id}`, {
    token: t1,
    body: { codigoDsl: VALID_DSL + "\n# c2", changelog: "c2" },
  });
  await jsonRequest(baseUrl, "PUT", `/api/plantillas/${id}`, {
    token: t1,
    body: { codigoDsl: VALID_DSL + "\n# c3", changelog: "c3" },
  });

  const vs = await jsonRequest(baseUrl, "GET", `/api/plantillas/${id}/versions`, {
    token: t1,
  });
  const list = vs.body as Array<{ version: number }>;
  assert.equal(list.length, 3);
  assert.deepEqual(
    list.map((v) => v.version),
    [3, 2, 1],
  );
});
