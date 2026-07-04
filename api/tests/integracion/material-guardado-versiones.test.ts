/**
 * PLAN-G §1 (item 25) — "Guardar como material" desde los editores
 * standalone (mapa, timeline, interactivo, presentacion).
 *
 * Cubre:
 *  (a) POST /api/materiales/guardados crea material + version 1.
 *  (b) POST /api/materiales/guardados/:id/versiones crea version 2 SIN
 *      perder la version 1.
 *  (c) un docente que no es owner ni ADMIN no puede versionar un
 *      material privado ajeno (403).
 *  (d) GET /api/materiales/guardados/:id devuelve la version actual con
 *      `contenido` ya parseado.
 *  (e) GET /api/materiales incluye tanto modulos como materiales en
 *      `items[]`, con `origen` correcto en cada uno, y respeta el mismo
 *      filtro de visibilidad ya cubierto por materiales-compartir-scope
 *      para el material nuevo.
 */

import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import {
  prisma,
  resetPrisma,
  seedUser,
  tokenFor,
  startServer,
  jsonRequest,
} from "./_helpers/setup";

let baseUrl: string;
let close: () => Promise<void>;

const DOCENTE_ID = "docente-material-1";
const DOCENTE_OTRO_ID = "docente-material-2";
const ESCUELA_ID = "escuela-material-1";
const OTRA_ESCUELA_ID = "escuela-material-2";

before(async () => {
  const { materiales } = await import("../../src/routes/materiales");
  const server = await startServer([materiales]);
  baseUrl = server.baseUrl;
  close = server.close;
});

after(async () => {
  if (close) await close();
});

beforeEach(() => {
  resetPrisma();
  seedUser({ id: DOCENTE_ID, role: "TEACHER", schoolId: ESCUELA_ID });
  seedUser({ id: DOCENTE_OTRO_ID, role: "TEACHER", schoolId: ESCUELA_ID });
});

const docenteToken = () => tokenFor({ id: DOCENTE_ID, role: "TEACHER", schoolId: ESCUELA_ID });
const otroDocenteToken = () => tokenFor({ id: DOCENTE_OTRO_ID, role: "TEACHER", schoolId: ESCUELA_ID });

test("(a) POST /api/materiales/guardados crea material + version 1", async () => {
  const res = await jsonRequest(baseUrl, "POST", "/api/materiales/guardados", {
    token: docenteToken(),
    body: { tipo: "mapa", titulo: "Mapa de prueba", contenido: { capas: [] } },
  });
  assert.equal(res.status, 201, JSON.stringify(res.body));
  const { id, versionId, versionNumber } = res.body as { id: string; versionId: string; versionNumber: number };
  assert.ok(id);
  assert.ok(versionId);
  assert.equal(versionNumber, 1);

  const material = prisma.material.rows.find((m) => m.id === id);
  assert.ok(material, "el material debe existir en la DB");
  assert.equal(material!.tipo, "mapa");
  assert.equal(material!.titulo, "Mapa de prueba");
  assert.equal(material!.ownerUserId, DOCENTE_ID);
  assert.equal(material!.visibility, "privado");
  assert.equal(material!.currentVersionId, versionId);

  const version = prisma.materialVersion.rows.find((v) => v.id === versionId);
  assert.ok(version);
  assert.equal(version!.versionNumber, 1);
  assert.equal(JSON.parse(version!.contenido).capas.length, 0);
});

test("tipo inválido es rechazado (400)", async () => {
  const res = await jsonRequest(baseUrl, "POST", "/api/materiales/guardados", {
    token: docenteToken(),
    body: { tipo: "no-existe", titulo: "x", contenido: {} },
  });
  assert.equal(res.status, 400);
});

test("(b) versionar un material existente crea version 2 sin perder la version 1", async () => {
  const createRes = await jsonRequest(baseUrl, "POST", "/api/materiales/guardados", {
    token: docenteToken(),
    body: { tipo: "presentacion", titulo: "Slides de prueba", contenido: { slides: ["s1"] } },
  });
  const { id } = createRes.body as { id: string };

  const versionRes = await jsonRequest(baseUrl, "POST", `/api/materiales/guardados/${id}/versiones`, {
    token: docenteToken(),
    body: { contenido: { slides: ["s1", "s2"] } },
  });
  assert.equal(versionRes.status, 201, JSON.stringify(versionRes.body));
  const { versionId: v2Id, versionNumber: v2Number } = versionRes.body as { versionId: string; versionNumber: number };
  assert.equal(v2Number, 2);

  const versiones = prisma.materialVersion.rows.filter((v) => v.materialId === id);
  assert.equal(versiones.length, 2, "las 2 versiones deben seguir existiendo");
  const v1 = versiones.find((v) => v.versionNumber === 1);
  assert.ok(v1, "la version 1 no debe haberse perdido");
  assert.equal(JSON.parse(v1!.contenido).slides.length, 1);

  const material = prisma.material.rows.find((m) => m.id === id);
  assert.equal(material?.currentVersionId, v2Id, "el material debe apuntar a la version nueva");
});

test("(c) un docente que no es owner ni ADMIN no puede versionar un material privado ajeno (403)", async () => {
  const createRes = await jsonRequest(baseUrl, "POST", "/api/materiales/guardados", {
    token: docenteToken(),
    body: { tipo: "mapa", titulo: "Privado", contenido: {} },
  });
  const { id } = createRes.body as { id: string };

  const res = await jsonRequest(baseUrl, "POST", `/api/materiales/guardados/${id}/versiones`, {
    token: otroDocenteToken(),
    body: { contenido: { intento: "ajeno" } },
  });
  assert.equal(res.status, 403, JSON.stringify(res.body));
});

test("(d) GET /api/materiales/guardados/:id devuelve la version actual con contenido parseado", async () => {
  const createRes = await jsonRequest(baseUrl, "POST", "/api/materiales/guardados", {
    token: docenteToken(),
    body: { tipo: "interactivo", titulo: "Bloques de prueba", contenido: { blocks: [{ id: "b1" }] } },
  });
  const { id } = createRes.body as { id: string };

  const res = await jsonRequest(baseUrl, "GET", `/api/materiales/guardados/${id}`, {
    token: docenteToken(),
  });
  assert.equal(res.status, 200, JSON.stringify(res.body));
  const body = res.body as {
    id: string; tipo: string; titulo: string;
    version: { versionNumber: number; contenido: { blocks: Array<{ id: string }> } };
  };
  assert.equal(body.tipo, "interactivo");
  assert.equal(body.titulo, "Bloques de prueba");
  assert.equal(body.version.versionNumber, 1);
  assert.equal(typeof body.version.contenido, "object", "contenido debe venir ya parseado, no string");
  assert.equal(body.version.contenido.blocks[0].id, "b1");
});

test("GET /api/materiales/guardados/:id de un material privado ajeno da 403", async () => {
  const createRes = await jsonRequest(baseUrl, "POST", "/api/materiales/guardados", {
    token: docenteToken(),
    body: { tipo: "mapa", titulo: "Privado", contenido: {} },
  });
  const { id } = createRes.body as { id: string };

  const res = await jsonRequest(baseUrl, "GET", `/api/materiales/guardados/${id}`, {
    token: otroDocenteToken(),
  });
  assert.equal(res.status, 403);
});

test("(e) GET /api/materiales fusiona modulos y materiales en items[], con origen correcto", async () => {
  await jsonRequest(baseUrl, "POST", "/api/materiales/guardados", {
    token: docenteToken(),
    body: { tipo: "timeline", titulo: "Linea de tiempo de prueba", contenido: { eventos: [] } },
  });

  const now = new Date().toISOString();
  prisma.modulo.rows.push({
    id: "mod-material-e",
    titulo: "Modulo de prueba",
    descripcion: "",
    visibility: "privado",
    schoolId: ESCUELA_ID,
    ownerUserId: DOCENTE_ID,
    dependencies: null,
    isDeleted: false,
    createdAt: now,
    updatedAt: now,
  });

  const res = await jsonRequest(baseUrl, "GET", "/api/materiales", { token: docenteToken() });
  assert.equal(res.status, 200, JSON.stringify(res.body));
  const body = res.body as { items: Array<{ id: string; tipo: string; origen: string }> };

  const moduloItem = body.items.find((i) => i.id === "mod-material-e");
  assert.ok(moduloItem, "debe listar el modulo");
  assert.equal(moduloItem!.origen, "modulo");
  assert.equal(moduloItem!.tipo, "cuestionario");

  const materialItem = body.items.find((i) => i.tipo === "timeline");
  assert.ok(materialItem, "debe listar el material guardado");
  assert.equal(materialItem!.origen, "material");
});

test("GET /api/materiales no lista un material privado de otro docente", async () => {
  await jsonRequest(baseUrl, "POST", "/api/materiales/guardados", {
    token: docenteToken(),
    body: { tipo: "mapa", titulo: "Privado del docente 1", contenido: {} },
  });

  const res = await jsonRequest(baseUrl, "GET", "/api/materiales", { token: otroDocenteToken() });
  assert.equal(res.status, 200);
  const body = res.body as { items: Array<{ titulo: string }> };
  assert.ok(!body.items.some((i) => i.titulo === "Privado del docente 1"));
});

test("GET /api/materiales SI lista un material visibility=escuela de otro docente de la misma escuela", async () => {
  const createRes = await jsonRequest(baseUrl, "POST", "/api/materiales/guardados", {
    token: docenteToken(),
    body: { tipo: "mapa", titulo: "Compartido con la escuela", contenido: {} },
  });
  const { id } = createRes.body as { id: string };

  await prisma.material.updateMany({
    where: { id },
    data: { visibility: "escuela", schoolId: ESCUELA_ID },
  });

  const res = await jsonRequest(baseUrl, "GET", "/api/materiales", { token: otroDocenteToken() });
  assert.equal(res.status, 200);
  const body = res.body as { items: Array<{ titulo: string }> };
  assert.ok(body.items.some((i) => i.titulo === "Compartido con la escuela"));
});

test("un docente de OTRA escuela no ve un material visibility=escuela ajeno", async () => {
  seedUser({ id: "docente-otra-escuela", role: "TEACHER", schoolId: OTRA_ESCUELA_ID });
  const otraEscuelaToken = tokenFor({ id: "docente-otra-escuela", role: "TEACHER", schoolId: OTRA_ESCUELA_ID });

  const createRes = await jsonRequest(baseUrl, "POST", "/api/materiales/guardados", {
    token: docenteToken(),
    body: { tipo: "mapa", titulo: "Compartido solo en mi escuela", contenido: {} },
  });
  const { id } = createRes.body as { id: string };
  await prisma.material.updateMany({
    where: { id },
    data: { visibility: "escuela", schoolId: ESCUELA_ID },
  });

  const res = await jsonRequest(baseUrl, "GET", "/api/materiales", { token: otraEscuelaToken });
  assert.equal(res.status, 200);
  const body = res.body as { items: Array<{ titulo: string }> };
  assert.ok(!body.items.some((i) => i.titulo === "Compartido solo en mi escuela"));
});
