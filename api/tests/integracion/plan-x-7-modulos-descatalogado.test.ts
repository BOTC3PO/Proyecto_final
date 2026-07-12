/**
 * PLAN-X §7 — "descatalogado": el profesor dueño oculta un módulo de
 * los listados generales sin borrarlo. Spec de Javier (2026-07-12):
 * «el modo descatalogado es como un modo oculto pero que el mismo
 * profesor pone para que el contenido no aparezca; los alumnos tienen
 * que ser invitados a que vean el contenido o el profesor tiene que
 * agregarlo en un aula para que sea visible».
 *
 * Cubre:
 *  - GET /api/modulos (sin aulaId): excluye descatalogado salvo
 *    dueño/invitado.
 *  - GET /api/modulos?mine=true: el dueño SIEMPRE ve lo suyo.
 *  - GET /api/modulos?aulaId=X: asignar a un aula (ClaseModulo) ya
 *    habilita visibilidad — no filtra por descatalogado.
 *  - GET /api/modulos/buscar: mismo filtro que el listado general.
 *  - POST/DELETE /api/modulos/:id/invitados: sólo el dueño invita;
 *    invitar da visibilidad, desinvitar la retira.
 *  - PATCH /api/modulos/:id: el dueño togglea descatalogado.
 */
import assert from "node:assert/strict";
import type { NextFunction, Request, Response } from "express";
import { after, before, beforeEach, test } from "node:test";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";

let baseUrl: string;
let close: () => Promise<void>;

// GET /api/modulos no trae `requireUser` propio (soporta lectura anónima),
// así que en la app real depende del middleware GLOBAL montado en
// index.ts (`app.use(requireUser)` ANTES de `app.use(modulos)`) para
// poblar `req.user` cuando SÍ hay token. `startServer` de este helper
// sólo monta los routers pasados, sin esa cadena global — se replica acá
// con un shim mínimo: si hay Authorization, delega en `requireUser` real
// (rechaza tokens inválidos igual que en prod); si no hay header, sigue
// anónimo. Sin esto, "el dueño ve lo suyo sin `?mine=true`" es
// intestable en este archivo aunque sea correcto en producción.
const optionalAuth = async (req: Request, res: Response, next: NextFunction) => {
  if (!req.headers.authorization) return next();
  const { requireUser } = await import("../../src/lib/user-auth");
  await requireUser(req, res, next);
};

const DOCENTE_ID = "docente-px7";
const OTRO_DOCENTE_ID = "otro-docente-px7";
const ALUMNO_ID = "alumno-px7";
const ALUMNO_INVITADO_ID = "alumno-invitado-px7";
const AULA_ID = "aula-px7";
const MOD_DESCATALOGADO = "mod-descatalogado-px7";
const MOD_NORMAL = "mod-normal-px7";

before(async () => {
  const { modulos } = await import("../../src/routes/modulos");
  const server = await startServer([optionalAuth, modulos]);
  baseUrl = server.baseUrl;
  close = server.close;
});

after(async () => {
  if (close) await close();
});

beforeEach(() => {
  resetPrisma();
  seedUser({ id: DOCENTE_ID, role: "TEACHER", schoolId: null, fullName: "Profe Dueño" });
  seedUser({ id: OTRO_DOCENTE_ID, role: "TEACHER", schoolId: null });
  seedUser({ id: ALUMNO_ID, role: "USER", schoolId: null });
  seedUser({ id: ALUMNO_INVITADO_ID, role: "USER", schoolId: null, fullName: "Alumno Invitado" });

  const now = new Date().toISOString();
  prisma.modulo.rows.push({
    id: MOD_DESCATALOGADO,
    slug: null,
    titulo: "Módulo descatalogado",
    descripcion: null,
    visibility: "publico",
    schoolId: null,
    ownerUserId: DOCENTE_ID,
    dependencies: null,
    descatalogado: true,
    createdAt: now,
    updatedAt: now,
  } as never);
  prisma.modulo.rows.push({
    id: MOD_NORMAL,
    slug: null,
    titulo: "Módulo normal",
    descripcion: null,
    visibility: "publico",
    schoolId: null,
    ownerUserId: DOCENTE_ID,
    dependencies: null,
    createdAt: now,
    updatedAt: now,
  } as never);
});

const docente = () => tokenFor({ id: DOCENTE_ID, role: "TEACHER" });
const otroDocente = () => tokenFor({ id: OTRO_DOCENTE_ID, role: "TEACHER" });
const alumno = () => tokenFor({ id: ALUMNO_ID, role: "USER" });
const alumnoInvitado = () => tokenFor({ id: ALUMNO_INVITADO_ID, role: "USER" });

test("GET /api/modulos sin auth excluye el descatalogado", async () => {
  const res = await jsonRequest(baseUrl, "GET", "/api/modulos");
  assert.equal(res.status, 200);
  const ids = (res.body as { items: Array<{ id: string }> }).items.map((m) => m.id).sort();
  assert.deepEqual(ids, [MOD_NORMAL]);
});

test("GET /api/modulos con un docente ajeno (no dueño, no invitado) excluye el descatalogado", async () => {
  const res = await jsonRequest(baseUrl, "GET", "/api/modulos", { token: otroDocente() });
  assert.equal(res.status, 200);
  const ids = (res.body as { items: Array<{ id: string }> }).items.map((m) => m.id).sort();
  assert.deepEqual(ids, [MOD_NORMAL]);
});

test("GET /api/modulos?mine=true el dueño SIEMPRE ve su módulo descatalogado", async () => {
  const res = await jsonRequest(baseUrl, "GET", "/api/modulos?mine=true", { token: docente() });
  assert.equal(res.status, 200);
  const ids = (res.body as { items: Array<{ id: string }> }).items.map((m) => m.id).sort();
  assert.deepEqual(ids, [MOD_DESCATALOGADO, MOD_NORMAL].sort());
});

test("GET /api/modulos (sin mine) el dueño autenticado también ve lo suyo", async () => {
  const res = await jsonRequest(baseUrl, "GET", "/api/modulos", { token: docente() });
  assert.equal(res.status, 200);
  const ids = (res.body as { items: Array<{ id: string }> }).items.map((m) => m.id).sort();
  assert.deepEqual(ids, [MOD_DESCATALOGADO, MOD_NORMAL].sort());
});

test("GET /api/modulos?aulaId=X ignora descatalogado: la asignación a un aula ya habilita visibilidad", async () => {
  prisma.claseModulo.rows.push({ claseId: AULA_ID, moduloId: MOD_DESCATALOGADO, required: false });
  const res = await jsonRequest(
    baseUrl,
    "GET",
    `/api/modulos?aulaId=${encodeURIComponent(AULA_ID)}`,
    { token: alumno() },
  );
  assert.equal(res.status, 200);
  const ids = (res.body as { items: Array<{ id: string }> }).items.map((m) => m.id).sort();
  assert.deepEqual(ids, [MOD_DESCATALOGADO]);
});

test("GET /api/modulos/buscar aplica el mismo filtro que el listado general", async () => {
  const res = await jsonRequest(baseUrl, "GET", "/api/modulos/buscar?visibility=publico");
  assert.equal(res.status, 200);
  const ids = (res.body as { items: Array<{ id: string }> }).items.map((m) => m.id).sort();
  assert.deepEqual(ids, [MOD_NORMAL]);
});

test("PLAN-X §7: invitar da visibilidad; desinvitar la retira", async () => {
  // Antes de invitar: el alumno no ve el descatalogado.
  const antes = await jsonRequest(baseUrl, "GET", "/api/modulos", { token: alumnoInvitado() });
  assert.deepEqual(
    (antes.body as { items: Array<{ id: string }> }).items.map((m) => m.id).sort(),
    [MOD_NORMAL],
  );

  const invite = await jsonRequest(
    baseUrl,
    "POST",
    `/api/modulos/${MOD_DESCATALOGADO}/invitados`,
    { token: docente(), body: { usuarioId: ALUMNO_INVITADO_ID } },
  );
  assert.equal(invite.status, 201, JSON.stringify(invite.body));

  const despues = await jsonRequest(baseUrl, "GET", "/api/modulos", { token: alumnoInvitado() });
  assert.deepEqual(
    (despues.body as { items: Array<{ id: string }> }).items.map((m) => m.id).sort(),
    [MOD_DESCATALOGADO, MOD_NORMAL].sort(),
  );

  const uninvite = await jsonRequest(
    baseUrl,
    "DELETE",
    `/api/modulos/${MOD_DESCATALOGADO}/invitados/${ALUMNO_INVITADO_ID}`,
    { token: docente() },
  );
  assert.equal(uninvite.status, 204);

  const final = await jsonRequest(baseUrl, "GET", "/api/modulos", { token: alumnoInvitado() });
  assert.deepEqual(
    (final.body as { items: Array<{ id: string }> }).items.map((m) => m.id).sort(),
    [MOD_NORMAL],
  );
});

test("PLAN-X §7: sólo el dueño puede invitar (otro docente → 403)", async () => {
  const res = await jsonRequest(
    baseUrl,
    "POST",
    `/api/modulos/${MOD_DESCATALOGADO}/invitados`,
    { token: otroDocente(), body: { usuarioId: ALUMNO_INVITADO_ID } },
  );
  assert.equal(res.status, 403);
});

test("PLAN-X §7: GET /invitados devuelve la lista con nombres (owner-only)", async () => {
  await jsonRequest(baseUrl, "POST", `/api/modulos/${MOD_DESCATALOGADO}/invitados`, {
    token: docente(),
    body: { usuarioId: ALUMNO_INVITADO_ID },
  });

  const res = await jsonRequest(baseUrl, "GET", `/api/modulos/${MOD_DESCATALOGADO}/invitados`, {
    token: docente(),
  });
  assert.equal(res.status, 200);
  const items = (res.body as { items: Array<{ usuarioId: string; name: string }> }).items;
  assert.equal(items.length, 1);
  assert.equal(items[0].usuarioId, ALUMNO_INVITADO_ID);
  assert.equal(items[0].name, "Alumno Invitado");

  const ajeno = await jsonRequest(baseUrl, "GET", `/api/modulos/${MOD_DESCATALOGADO}/invitados`, {
    token: otroDocente(),
  });
  assert.equal(ajeno.status, 403);
});

test("PLAN-X §7: PATCH /api/modulos/:id togglea descatalogado", async () => {
  const res = await jsonRequest(baseUrl, "PATCH", `/api/modulos/${MOD_NORMAL}`, {
    token: docente(),
    body: { descatalogado: true },
  });
  assert.equal(res.status, 200, JSON.stringify(res.body));

  const listado = await jsonRequest(baseUrl, "GET", "/api/modulos");
  const ids = (listado.body as { items: Array<{ id: string }> }).items.map((m) => m.id);
  assert.ok(!ids.includes(MOD_NORMAL), "MOD_NORMAL debe desaparecer del listado público tras el PATCH");
});
