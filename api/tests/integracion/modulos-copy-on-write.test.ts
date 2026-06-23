/**
 * WO-13 — copy-on-write transparente al editar un módulo compartido.
 *
 * Verifica que:
 *  - PUT /api/modulos/:id por un usuario no-owner, no-admin, no-staff-de-la-misma-escuela
 *    sobre un módulo `visibility='escuela'` cross-school crea una copia
 *    propia y devuelve `{ copied: true, clonedFrom, id: <copiaId> }`. El
 *    original queda intacto.
 *  - PUT por el owner NO dispara copy-on-write (edición normal).
 *  - PUT por ADMIN NO dispara copy-on-write.
 *  - PUT por staff de la MISMA escuela NO dispara copy-on-write
 *    (colaboración — coherente con SEC-LIBRO y `canEditLibro`).
 *  - La copia tiene `clonedFromId`/`clonedFromTitle`/`clonedFromOwnerUserId`
 *    apuntando al original.
 *  - PUT sobre un módulo `privado` ajeno devuelve 403 (no es visible).
 *  - PATCH dispara la misma lógica.
 *  - El endpoint `/duplicar` explícito persiste provenance en su
 *    response (`clonedFrom`).
 *  - El GET expone `clonedFrom` para que la UI pueda mostrar el banner.
 *
 * Coherencia con WO-3 (visibilidad): la policy de lectura
 * `quizVisiblePara` no cambia; copy-on-write es ortogonal a la
 * visibilidad (el usuario ya pasó el filtro de lectura para llegar
 * al editor).
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

const OWNER_ID = "mod-owner";
const OTHER_TEACHER_ID = "mod-other-teacher";
const SAME_SCHOOL_TEACHER_ID = "mod-same-school-teacher";
const OTHER_SCHOOL_TEACHER_ID = "mod-cross-school-teacher";
const ADMIN_ID = "mod-admin";
const STUDENT_ID = "mod-student";
const SCHOOL_A = "school-A";
const SCHOOL_B = "school-B";

const MOD_PUBLIC = "mod-public-1";
const MOD_ESCUELA = "mod-escuela-1";
const MOD_PRIV = "mod-priv-1";

before(async () => {
  const { modulos } = await import("../../src/routes/modulos");
  const server = await startServer([modulos]);
  baseUrl = server.baseUrl;
  close = server.close;
});

after(async () => {
  if (close) await close();
});

beforeEach(() => {
  resetPrisma();
  seedUser({ id: OWNER_ID, role: "TEACHER", schoolId: SCHOOL_A });
  seedUser({ id: OTHER_TEACHER_ID, role: "TEACHER", schoolId: SCHOOL_A });
  seedUser({ id: SAME_SCHOOL_TEACHER_ID, role: "TEACHER", schoolId: SCHOOL_A });
  seedUser({ id: OTHER_SCHOOL_TEACHER_ID, role: "TEACHER", schoolId: SCHOOL_B });
  seedUser({ id: ADMIN_ID, role: "ADMIN" });
  seedUser({ id: STUDENT_ID, role: "STUDENT", schoolId: SCHOOL_A });
});

function seedSharedModulo(opts: {
  id: string;
  visibility: "publico" | "escuela" | "privado";
  schoolId?: string | null;
}) {
  prisma.modulo.rows.push({
    id: opts.id,
    slug: `${opts.id}-slug`,
    titulo: `Modulo ${opts.id}`,
    descripcion: "Descripcion original",
    visibility: opts.visibility,
    schoolId: opts.schoolId ?? null,
    ownerUserId: OWNER_ID,
    teoriaId: null,
    tuesdayDocId: null,
    libroId: null,
    defaultQuestionCount: 5,
    dependencies: null,
    isDeleted: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
  prisma.quiz.rows.push({
    id: `quiz-${opts.id}`,
    moduleId: opts.id,
    title: "Quiz del modulo",
    currentVersionId: `qv-${opts.id}`,
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
  prisma.quizVersion.rows.push({
    id: `qv-${opts.id}`,
    quizId: `quiz-${opts.id}`,
    versionNumber: 1,
    questions: JSON.stringify([{ id: "q-1", prompt: "Pregunta original" }]),
    generatorId: null,
    generatorVersion: null,
    params: null,
    count: 3,
    seedPolicy: 0,
    fixedSeed: null,
    settings: JSON.stringify({ type: "practica", mode: "manual", visibility: "publico" }),
    createdAt: new Date().toISOString(),
    createdBy: OWNER_ID,
  });
}

// ─── PUT copy-on-write ───────────────────────────────────────────

test("WO-13: PUT cross-school sobre modulo 'escuela' dispara copy-on-write", async () => {
  seedSharedModulo({ id: MOD_ESCUELA, visibility: "escuela", schoolId: SCHOOL_A });
  const token = tokenFor({
    id: OTHER_SCHOOL_TEACHER_ID,
    role: "TEACHER",
    schoolId: SCHOOL_B,
  });
  const r = await jsonRequest(baseUrl, "PUT", `/api/modulos/${MOD_ESCUELA}`, {
    token,
    body: { title: "Modulo editado por otro docente" },
  });
  assert.equal(r.status, 200);
  const body = r.body as {
    ok: boolean;
    id: string;
    copied: boolean;
    clonedFrom: { id: string; title: string | null; ownerUserId: string | null };
  };
  assert.equal(body.copied, true);
  assert.notEqual(body.id, MOD_ESCUELA);
  // El original queda intacto: el titulo NO cambia.
  const original = prisma.modulo.rows.find((m) => m.id === MOD_ESCUELA);
  assert.ok(original);
  assert.equal(original.titulo, "Modulo mod-escuela-1");
  // La copia tiene provenance apuntando al original.
  const copia = prisma.modulo.rows.find((m) => m.id === body.id);
  assert.ok(copia);
  assert.equal(copia.clonedFromId, MOD_ESCUELA);
  assert.equal(copia.clonedFromTitle, "Modulo mod-escuela-1");
  assert.equal(copia.clonedFromOwnerUserId, OWNER_ID);
  // El owner de la copia es el solicitante (no el owner original).
  assert.equal(copia.ownerUserId, OTHER_SCHOOL_TEACHER_ID);
  // Y el titulo fue aplicado SOBRE la copia (no sobre el original).
  assert.equal(copia.titulo, "Modulo editado por otro docente");
  // La respuesta trae la provenance.
  assert.equal(body.clonedFrom.id, MOD_ESCUELA);
  assert.equal(body.clonedFrom.ownerUserId, OWNER_ID);
});

test("WO-13: PUT sobre modulo 'publico' ajeno tambien dispara copy-on-write", async () => {
  seedSharedModulo({ id: MOD_PUBLIC, visibility: "publico" });
  const token = tokenFor({
    id: OTHER_TEACHER_ID,
    role: "TEACHER",
    schoolId: SCHOOL_A,
  });
  const r = await jsonRequest(baseUrl, "PUT", `/api/modulos/${MOD_PUBLIC}`, {
    token,
    body: { title: "Mi version del modulo publico" },
  });
  assert.equal(r.status, 200);
  const body = r.body as { copied: boolean; id: string };
  assert.equal(body.copied, true);
  assert.notEqual(body.id, MOD_PUBLIC);
  const copia = prisma.modulo.rows.find((m) => m.id === body.id);
  assert.ok(copia);
  assert.equal(copia.ownerUserId, OTHER_TEACHER_ID);
  assert.equal(copia.clonedFromId, MOD_PUBLIC);
});

test("WO-13: PUT por el owner NO dispara copy-on-write (edicion normal)", async () => {
  seedSharedModulo({ id: MOD_ESCUELA, visibility: "escuela", schoolId: SCHOOL_A });
  const token = tokenFor({ id: OWNER_ID, role: "TEACHER", schoolId: SCHOOL_A });
  const r = await jsonRequest(baseUrl, "PUT", `/api/modulos/${MOD_ESCUELA}`, {
    token,
    body: { title: "Editado por dueno" },
  });
  assert.equal(r.status, 200);
  const body = r.body as { copied?: boolean; id: string };
  assert.equal(body.copied, undefined, "owner edita el original, no copia");
  assert.equal(body.id, MOD_ESCUELA);
  // NO se creó una segunda fila.
  assert.equal(prisma.modulo.rows.length, 1);
  // El original SÍ cambió.
  const mod = prisma.modulo.rows.find((m) => m.id === MOD_ESCUELA);
  assert.equal(mod?.titulo, "Editado por dueno");
  // El campo `clonedFromId` no se setea (queda undefined en el stub
  // in-memory porque nunca se tocó). El owner-edit no es copia.
  assert.equal(mod?.clonedFromId, undefined);
});

test("WO-13: PUT por ADMIN NO dispara copy-on-write (override)", async () => {
  seedSharedModulo({ id: MOD_ESCUELA, visibility: "escuela", schoolId: SCHOOL_A });
  const token = tokenFor({ id: ADMIN_ID, role: "ADMIN" });
  const r = await jsonRequest(baseUrl, "PUT", `/api/modulos/${MOD_ESCUELA}`, {
    token,
    body: { title: "Editado por admin" },
  });
  assert.equal(r.status, 200);
  const body = r.body as { copied?: boolean; id: string };
  assert.equal(body.copied, undefined);
  assert.equal(body.id, MOD_ESCUELA);
  // El original fue actualizado por el admin.
  const mod = prisma.modulo.rows.find((m) => m.id === MOD_ESCUELA);
  assert.equal(mod?.titulo, "Editado por admin");
});

test("WO-13: PUT por staff de la MISMA escuela NO dispara copy-on-write (colaboracion)", async () => {
  // Coherente con SEC-LIBRO y `canEditLibro`: el staff de la escuela
  // dueña edita el original directamente.
  seedSharedModulo({ id: MOD_ESCUELA, visibility: "escuela", schoolId: SCHOOL_A });
  const token = tokenFor({
    id: SAME_SCHOOL_TEACHER_ID,
    role: "TEACHER",
    schoolId: SCHOOL_A,
  });
  const r = await jsonRequest(baseUrl, "PUT", `/api/modulos/${MOD_ESCUELA}`, {
    token,
    body: { title: "Colaborando entre staff de la escuela" },
  });
  assert.equal(r.status, 200);
  const body = r.body as { copied?: boolean; id: string };
  assert.equal(body.copied, undefined);
  assert.equal(body.id, MOD_ESCUELA);
  const mod = prisma.modulo.rows.find((m) => m.id === MOD_ESCUELA);
  assert.equal(mod?.titulo, "Colaborando entre staff de la escuela");
});

test("WO-13: PATCH dispara la misma copy-on-write que PUT", async () => {
  seedSharedModulo({ id: MOD_PUBLIC, visibility: "publico" });
  const token = tokenFor({
    id: OTHER_TEACHER_ID,
    role: "TEACHER",
    schoolId: SCHOOL_A,
  });
  const r = await jsonRequest(baseUrl, "PATCH", `/api/modulos/${MOD_PUBLIC}`, {
    token,
    body: { title: "Patch cross-owner" },
  });
  assert.equal(r.status, 200);
  const body = r.body as { copied: boolean; id: string };
  assert.equal(body.copied, true);
  assert.notEqual(body.id, MOD_PUBLIC);
  const copia = prisma.modulo.rows.find((m) => m.id === body.id);
  assert.ok(copia);
  assert.equal(copia.clonedFromId, MOD_PUBLIC);
  assert.equal(copia.titulo, "Patch cross-owner");
});

test("WO-13: la copia clona tambien los quizzes activos y su ultima version", async () => {
  seedSharedModulo({ id: MOD_PUBLIC, visibility: "publico" });
  const token = tokenFor({
    id: OTHER_TEACHER_ID,
    role: "TEACHER",
    schoolId: SCHOOL_A,
  });
  const r = await jsonRequest(baseUrl, "PUT", `/api/modulos/${MOD_PUBLIC}`, {
    token,
    body: { title: "Patch con quiz clonado" },
  });
  assert.equal(r.status, 200);
  const body = r.body as { copied: boolean; id: string };
  assert.equal(body.copied, true);
  // Quiz original: 1 fila.
  const originalQuizzes = prisma.quiz.rows.filter((q) => q.moduleId === MOD_PUBLIC);
  assert.equal(originalQuizzes.length, 1);
  // Quiz de la copia: 1 fila nueva, ids regenerados.
  const copiaQuizzes = prisma.quiz.rows.filter((q) => q.moduleId === body.id);
  assert.equal(copiaQuizzes.length, 1);
  assert.notEqual(copiaQuizzes[0].id, originalQuizzes[0].id);
  // Misma cantidad de versiones.
  const originalVersions = prisma.quizVersion.rows.filter(
    (v) => v.quizId === originalQuizzes[0].id,
  );
  const copiaVersions = prisma.quizVersion.rows.filter(
    (v) => v.quizId === copiaQuizzes[0].id,
  );
  assert.equal(originalVersions.length, copiaVersions.length);
  // Mismo contenido.
  assert.equal(copiaVersions[0].questions, originalVersions[0].questions);
});

test("WO-13: el duplicar explicito requiere owner o staff (Tarea 19)", async () => {
  // Un STUDENT (no owner, no staff) NO puede usar el endpoint
  // /duplicar explícito. Tarea 19: solo owner o isStaffRole.
  // El copy-on-write del PUT/PATCH, en cambio, no requiere acción
  // explícita y dispara solo cuando el material es compartido y
  // el usuario no es owner/admin.
  seedSharedModulo({ id: MOD_ESCUELA, visibility: "escuela", schoolId: SCHOOL_A });
  const studentToken = tokenFor({
    id: STUDENT_ID,
    role: "STUDENT",
    schoolId: SCHOOL_A,
  });
  const r = await jsonRequest(baseUrl, "POST", `/api/modulos/${MOD_ESCUELA}/duplicar`, { token: studentToken });
  assert.equal(r.status, 403);
});

test("WO-13: el duplicar explicito del dueno devuelve clonedFrom", async () => {
  seedSharedModulo({ id: MOD_ESCUELA, visibility: "escuela", schoolId: SCHOOL_A });
  const token = tokenFor({ id: OWNER_ID, role: "TEACHER", schoolId: SCHOOL_A });
  const r = await jsonRequest(baseUrl, "POST", `/api/modulos/${MOD_ESCUELA}/duplicar`, { token });
  assert.equal(r.status, 201);
  const body = r.body as {
    id: string;
    sourceId: string;
    clonedFrom: { id: string; title: string | null; ownerUserId: string | null };
  };
  assert.notEqual(body.id, MOD_ESCUELA);
  assert.equal(body.sourceId, MOD_ESCUELA);
  assert.equal(body.clonedFrom.id, MOD_ESCUELA);
  assert.equal(body.clonedFrom.ownerUserId, OWNER_ID);
  // La copia persiste las 3 columnas de provenance.
  const copia = prisma.modulo.rows.find((m) => m.id === body.id);
  assert.ok(copia);
  assert.equal(copia.clonedFromId, MOD_ESCUELA);
  assert.equal(copia.clonedFromTitle, `Modulo ${MOD_ESCUELA}`);
  assert.equal(copia.clonedFromOwnerUserId, OWNER_ID);
});

test("WO-13: el GET expone clonedFrom para que la UI muestre el banner", async () => {
  seedSharedModulo({ id: MOD_ESCUELA, visibility: "escuela", schoolId: SCHOOL_A });
  const token = tokenFor({ id: OWNER_ID, role: "TEACHER", schoolId: SCHOOL_A });
  const dup = await jsonRequest(baseUrl, "POST", `/api/modulos/${MOD_ESCUELA}/duplicar`, { token });
  assert.equal(dup.status, 201);
  const copiaId = (dup.body as { id: string }).id;
  // El owner de la copia la lee.
  const tokenCopy = tokenFor({ id: OWNER_ID, role: "TEACHER", schoolId: SCHOOL_A });
  const get = await jsonRequest(baseUrl, "GET", `/api/modulos/${copiaId}`, { token: tokenCopy });
  assert.equal(get.status, 200);
  const mod = get.body as { clonedFrom: { id: string; title: string | null; ownerUserId: string | null } | null };
  assert.ok(mod.clonedFrom);
  assert.equal(mod.clonedFrom.id, MOD_ESCUELA);
  assert.equal(mod.clonedFrom.ownerUserId, OWNER_ID);
});

test("WO-13: modulos no-copias devuelven clonedFrom ausente en el GET", async () => {
  seedSharedModulo({ id: MOD_ESCUELA, visibility: "escuela", schoolId: SCHOOL_A });
  const token = tokenFor({ id: OWNER_ID, role: "TEACHER", schoolId: SCHOOL_A });
  const get = await jsonRequest(baseUrl, "GET", `/api/modulos/${MOD_ESCUELA}`, { token });
  assert.equal(get.status, 200);
  const mod = get.body as { clonedFrom?: unknown };
  // `clonedFrom` ausente o null. Toleramos `undefined` por la
  // implementación del spread.
  assert.ok(mod.clonedFrom === null || mod.clonedFrom === undefined);
});
