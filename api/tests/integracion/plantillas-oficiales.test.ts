/**
 * F6-01 — Plantillas oficiales + clonar-para-editar.
 *
 * Una plantilla "oficial" es una plantilla pública pre-sembrada cuyo dueño es la
 * cuenta de sistema (`SYSTEM_OWNER_ID`). Cualquier docente puede CLONARLA para
 * editar su copia, pero la original es inmutable para él (sólo ADMIN/owner edita)
 * y visible para todos (publica + aprobada).
 *
 * Cubre:
 *  - la API expone `esOficial` (derivado del owner = sistema);
 *  - clonar una oficial produce una copia EDITABLE del solicitante y deja la
 *    original intacta;
 *  - el docente no puede editar la oficial (inmutable), pero sí su clon;
 *  - clonar una pública ajena se permite; clonar una privada ajena no.
 */

import {
  jsonRequest,
  prisma,
  resetPrisma,
  seedUser,
  startServer,
  tokenFor,
} from "./_helpers/setup";
import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";

import { plantillas } from "../../src/routes/plantillas";
import { SYSTEM_OWNER_ID } from "../../src/lib/vblang-types";

let baseUrl: string;
let close: () => Promise<void>;

const VALID_DSL = `variables:
  a: random(1, 10)

enunciado: "X"
respuesta: a`;

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

/** Siembra una plantilla oficial: owner = sistema, publica + aprobada. */
async function seedOficial(id: string, nombre = "Oficial MRU"): Promise<void> {
  const now = new Date().toISOString();
  await prisma.plantillaEjercicio.create({
    data: {
      id,
      ownerUserId: SYSTEM_OWNER_ID,
      schoolId: null,
      visibility: "publica",
      nombre,
      descripcion: "plantilla oficial",
      materia: "fisica",
      tags: null,
      codigoDsl: VALID_DSL,
      version: 1,
      basadoEn: null,
      publicAprobado: true,
      isDeleted: false,
      createdAt: now,
      updatedAt: now,
    },
  });
}

const teacher1 = () => tokenFor({ id: "teacher-1", role: "TEACHER", schoolId: "esc-1" });
const teacher2 = () => tokenFor({ id: "teacher-2", role: "TEACHER", schoolId: "esc-2" });

test("GET de una oficial expone esOficial:true; una normal esOficial:false", async () => {
  await seedOficial("of-1");
  const r = await jsonRequest(baseUrl, "GET", "/api/plantillas/of-1", { token: teacher1() });
  assert.equal(r.status, 200, JSON.stringify(r.body));
  assert.equal((r.body as { esOficial: boolean }).esOficial, true);

  const created = await jsonRequest(baseUrl, "POST", "/api/plantillas", {
    token: teacher1(),
    body: { nombre: "mía", codigoDsl: VALID_DSL, visibility: "privada" },
  });
  assert.equal((created.body as { esOficial: boolean }).esOficial, false);
});

test("clonar una oficial → copia editable del solicitante; la original queda intacta", async () => {
  await seedOficial("of-1");
  const r = await jsonRequest(baseUrl, "POST", "/api/plantillas/of-1/clonar", {
    token: teacher1(),
    body: {},
  });
  assert.equal(r.status, 201, JSON.stringify(r.body));
  const clon = r.body as {
    id: string;
    ownerUserId: string;
    basadoEn?: string;
    version: number;
    visibility: string;
    publicAprobado: boolean;
    esOficial: boolean;
    nombre: string;
    codigoDsl: string;
  };
  assert.equal(clon.ownerUserId, "teacher-1");
  assert.equal(clon.basadoEn, "of-1");
  assert.equal(clon.version, 1);
  assert.equal(clon.visibility, "privada");
  assert.equal(clon.publicAprobado, false);
  assert.equal(clon.esOficial, false, "el clon NO es oficial");
  assert.equal(clon.nombre, "Copia de Oficial MRU");
  assert.notEqual(clon.id, "of-1");

  // La original sigue intacta: dueño sistema, publica, oficial.
  const orig = await jsonRequest(baseUrl, "GET", "/api/plantillas/of-1", { token: teacher1() });
  const o = orig.body as { ownerUserId: string; visibility: string; esOficial: boolean };
  assert.equal(o.ownerUserId, SYSTEM_OWNER_ID);
  assert.equal(o.visibility, "publica");
  assert.equal(o.esOficial, true);
});

test("el docente NO puede editar la oficial (inmutable) → PUT 403", async () => {
  await seedOficial("of-1");
  const r = await jsonRequest(baseUrl, "PUT", "/api/plantillas/of-1", {
    token: teacher1(),
    body: { nombre: "secuestrada" },
  });
  assert.equal(r.status, 403, JSON.stringify(r.body));
});

test("clonar una pública ajena se permite; el docente edita su clon pero no la original", async () => {
  await seedOficial("of-1");
  // teacher-2 (otra escuela) clona la oficial pública → permitido.
  const cloned = await jsonRequest(baseUrl, "POST", "/api/plantillas/of-1/clonar", {
    token: teacher2(),
    body: { nombre: "mi versión" },
  });
  assert.equal(cloned.status, 201, JSON.stringify(cloned.body));
  const clonId = (cloned.body as { id: string }).id;

  // Puede editar SU clon.
  const editClon = await jsonRequest(baseUrl, "PUT", `/api/plantillas/${clonId}`, {
    token: teacher2(),
    body: { nombre: "mi versión 2" },
  });
  assert.equal(editClon.status, 200, JSON.stringify(editClon.body));

  // Pero NO la original oficial.
  const editOrig = await jsonRequest(baseUrl, "PUT", "/api/plantillas/of-1", {
    token: teacher2(),
    body: { nombre: "no" },
  });
  assert.equal(editOrig.status, 403);
});

test("clonar una privada ajena → 403 (no la puede leer)", async () => {
  // teacher-1 crea una privada.
  const created = await jsonRequest(baseUrl, "POST", "/api/plantillas", {
    token: teacher1(),
    body: { nombre: "secreta", codigoDsl: VALID_DSL, visibility: "privada" },
  });
  const id = (created.body as { id: string }).id;
  // teacher-2 (otra escuela) intenta clonarla → no la puede leer.
  const r = await jsonRequest(baseUrl, "POST", `/api/plantillas/${id}/clonar`, {
    token: teacher2(),
    body: {},
  });
  assert.equal(r.status, 403, JSON.stringify(r.body));
});

test("STUDENT no puede clonar → 403", async () => {
  await seedOficial("of-1");
  const r = await jsonRequest(baseUrl, "POST", "/api/plantillas/of-1/clonar", {
    token: tokenFor({ id: "student-1", role: "STUDENT", schoolId: "esc-1" }),
    body: {},
  });
  assert.equal(r.status, 403, JSON.stringify(r.body));
});

test("clonar inexistente → 404", async () => {
  const r = await jsonRequest(baseUrl, "POST", "/api/plantillas/nope/clonar", {
    token: teacher1(),
    body: {},
  });
  assert.equal(r.status, 404, JSON.stringify(r.body));
});

test("el clon es editable y versiona (PUT codigoDsl → version 2)", async () => {
  await seedOficial("of-1");
  const cloned = await jsonRequest(baseUrl, "POST", "/api/plantillas/of-1/clonar", {
    token: teacher1(),
    body: {},
  });
  const clonId = (cloned.body as { id: string }).id;
  const nuevoDsl = `${VALID_DSL}\n`;
  const edit = await jsonRequest(baseUrl, "PUT", `/api/plantillas/${clonId}`, {
    token: teacher1(),
    body: { codigoDsl: `variables:\n  b: random(2, 5)\n\nenunciado: "Y"\nrespuesta: b` },
  });
  assert.equal(edit.status, 200, JSON.stringify(edit.body));
  assert.equal((edit.body as { version: number }).version, 2);
  void nuevoDsl;
});
