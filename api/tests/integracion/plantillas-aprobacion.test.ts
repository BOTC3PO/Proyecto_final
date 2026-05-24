import {
  jsonRequest,
  resetPrisma,
  seedUser,
  startServer,
  tokenFor,
} from "./_helpers/setup";
import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";

import { plantillas } from "../../src/routes/plantillas";

const VALID_DSL = `variables:
  a: random(1, 10)

enunciado: "X"
respuesta: a`;

let baseUrl: string;
let close: () => Promise<void>;

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
});

const tAdmin = () =>
  tokenFor({ id: "admin-1", role: "ADMIN", schoolId: "esc-1" });
const tTeacher = () =>
  tokenFor({ id: "teacher-1", role: "TEACHER", schoolId: "esc-1" });

async function crearPlantilla(opts: {
  token: string;
  nombre: string;
  visibility: "privada" | "escuela" | "publica";
}): Promise<string> {
  const r = await jsonRequest(baseUrl, "POST", "/api/plantillas", {
    token: opts.token,
    body: {
      nombre: opts.nombre,
      codigoDsl: VALID_DSL,
      visibility: opts.visibility,
    },
  });
  assert.equal(r.status, 201);
  return (r.body as { id: string }).id;
}

test("crear pública como TEACHER → publicAprobado=false", async () => {
  const id = await crearPlantilla({
    token: tTeacher(),
    nombre: "pub-teacher",
    visibility: "publica",
  });
  const detail = await jsonRequest(baseUrl, "GET", `/api/plantillas/${id}`, {
    token: tAdmin(),
  });
  assert.equal(detail.status, 200);
  assert.equal((detail.body as { publicAprobado: boolean }).publicAprobado, false);
});

test("crear pública como ADMIN → publicAprobado=true", async () => {
  const id = await crearPlantilla({
    token: tAdmin(),
    nombre: "pub-admin",
    visibility: "publica",
  });
  const detail = await jsonRequest(baseUrl, "GET", `/api/plantillas/${id}`, {
    token: tAdmin(),
  });
  assert.equal((detail.body as { publicAprobado: boolean }).publicAprobado, true);
});

test("POST aprobar como ADMIN con pública pendiente → 200, publicAprobado=true", async () => {
  const id = await crearPlantilla({
    token: tTeacher(),
    nombre: "p1",
    visibility: "publica",
  });
  const r = await jsonRequest(
    baseUrl,
    "POST",
    `/api/admin/plantillas/${id}/aprobar`,
    { token: tAdmin(), body: {} },
  );
  assert.equal(r.status, 200);
  assert.equal((r.body as { publicAprobado: boolean }).publicAprobado, true);
});

test("POST aprobar como TEACHER → 403", async () => {
  const id = await crearPlantilla({
    token: tTeacher(),
    nombre: "p2",
    visibility: "publica",
  });
  const r = await jsonRequest(
    baseUrl,
    "POST",
    `/api/admin/plantillas/${id}/aprobar`,
    { token: tTeacher(), body: {} },
  );
  assert.equal(r.status, 403);
});

test("POST aprobar plantilla privada → 400", async () => {
  const id = await crearPlantilla({
    token: tTeacher(),
    nombre: "priv",
    visibility: "privada",
  });
  const r = await jsonRequest(
    baseUrl,
    "POST",
    `/api/admin/plantillas/${id}/aprobar`,
    { token: tAdmin(), body: {} },
  );
  assert.equal(r.status, 400);
  assert.match(JSON.stringify(r.body), /públicas/);
});

test("POST aprobar plantilla ya aprobada → 400", async () => {
  const id = await crearPlantilla({
    token: tAdmin(),
    nombre: "yapub",
    visibility: "publica",
  });
  // ya quedó publicAprobado=true al crearse como ADMIN.
  const r = await jsonRequest(
    baseUrl,
    "POST",
    `/api/admin/plantillas/${id}/aprobar`,
    { token: tAdmin(), body: {} },
  );
  assert.equal(r.status, 400);
  assert.match(JSON.stringify(r.body), /ya está aprobada/);
});

test("POST rechazar como ADMIN baja visibility a escuela", async () => {
  const id = await crearPlantilla({
    token: tTeacher(),
    nombre: "rej",
    visibility: "publica",
  });
  const r = await jsonRequest(
    baseUrl,
    "POST",
    `/api/admin/plantillas/${id}/rechazar`,
    { token: tAdmin(), body: {} },
  );
  assert.equal(r.status, 200);
  const body = r.body as { visibility: string; publicAprobado: boolean };
  assert.equal(body.visibility, "escuela");
  assert.equal(body.publicAprobado, false);
});

test("GET pendientes como ADMIN lista plantillas publica no aprobadas", async () => {
  await crearPlantilla({
    token: tTeacher(),
    nombre: "pend-1",
    visibility: "publica",
  });
  await crearPlantilla({
    token: tTeacher(),
    nombre: "pend-2",
    visibility: "publica",
  });
  // Una privada — no debe aparecer.
  await crearPlantilla({
    token: tTeacher(),
    nombre: "priv-x",
    visibility: "privada",
  });
  // Una pública aprobada — no debe aparecer (creada por ADMIN).
  await crearPlantilla({
    token: tAdmin(),
    nombre: "pub-ok",
    visibility: "publica",
  });

  const r = await jsonRequest(
    baseUrl,
    "GET",
    "/api/admin/plantillas/pendientes",
    { token: tAdmin() },
  );
  assert.equal(r.status, 200);
  const body = r.body as { items: Array<{ nombre: string }>; total: number };
  assert.equal(body.total, 2);
  const nombres = body.items.map((i) => i.nombre).sort();
  assert.deepEqual(nombres, ["pend-1", "pend-2"]);
});

test("GET pendientes como TEACHER → 403", async () => {
  const r = await jsonRequest(
    baseUrl,
    "GET",
    "/api/admin/plantillas/pendientes",
    { token: tTeacher() },
  );
  assert.equal(r.status, 403);
});
