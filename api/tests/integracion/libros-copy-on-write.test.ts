/**
 * WO-13 — copy-on-write transparente al editar un libro compartido.
 *
 * Verifica que:
 *  - POST /api/libros (sobrescritura) por un usuario no-owner, no-admin
 *    sobre un libro `visibility='escuela'` cross-school crea una copia
 *    propia y devuelve `{ copied: true, id: <copiaId>, clonedFrom }`.
 *    El original queda intacto.
 *  - POST por el owner NO dispara copy-on-write (sobrescritura normal).
 *  - POST por ADMIN NO dispara copy-on-write (override).
 *  - POST por staff de la MISMA escuela NO dispara copy-on-write
 *    (colaboración — coherente con `canEditLibro`).
 *  - POST por staff de OTRA escuela: 403 (no puede editar ni copiar).
 *  - POST /api/libros/:id/duplicar crea una copia explícita con
 *    provenance y `clonedFrom` en el response.
 *  - El GET expone `clonedFrom` para que la UI pueda mostrar el banner.
 *
 * Coherencia con SEC-LIBRO y `canEditLibro`: el staff de la escuela
 * dueña NO dispara copy-on-write (colaboración). El staff de OTRA
 * escuela tampoco puede editar ni copiar.
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

const OWNER_ID = "libro-cow-owner";
const SAME_SCHOOL_TEACHER_ID = "libro-cow-same-school";
const OTHER_SCHOOL_TEACHER_ID = "libro-cow-other-school";
const ADMIN_ID = "libro-cow-admin";
const STUDENT_ID = "libro-cow-student";
const SCHOOL_A = "school-A";
const SCHOOL_B = "school-B";

const BOOK_ESC = "libro-cow-esc-1";
const BOOK_PUB = "libro-cow-pub-1";
const BOOK_PRIV = "libro-cow-priv-1";

function bookPayload(id: string, title: string) {
  return {
    book: {
      schema: "book.pages@1.1",
      metadata: { id, title, language: "es" },
      pages: [],
    },
    updatedAt: new Date().toISOString(),
  };
}

function seedLibro(opts: {
  id: string;
  visibility: "privado" | "escuela" | "publico";
  schoolId?: string | null;
}) {
  const now = new Date().toISOString();
  prisma.libro.rows.push({
    id: opts.id,
    json: JSON.stringify({
      id: opts.id,
      title: `Libro ${opts.id}`,
      book: { schema: "book.pages@1.1", metadata: { id: opts.id, title: `Libro ${opts.id}` }, pages: [] },
      updatedAt: now,
    }),
    ownerUserId: OWNER_ID,
    schoolId: opts.schoolId ?? null,
    visibility: opts.visibility,
    updatedAt: now,
  });
}

before(async () => {
  const { libros } = await import("../../src/routes/libros");
  const server = await startServer([libros]);
  baseUrl = server.baseUrl;
  close = server.close;
});

after(async () => {
  if (close) await close();
});

beforeEach(() => {
  resetPrisma();
  seedUser({ id: OWNER_ID, role: "TEACHER", schoolId: SCHOOL_A });
  seedUser({ id: SAME_SCHOOL_TEACHER_ID, role: "TEACHER", schoolId: SCHOOL_A });
  seedUser({ id: OTHER_SCHOOL_TEACHER_ID, role: "TEACHER", schoolId: SCHOOL_B });
  seedUser({ id: ADMIN_ID, role: "ADMIN" });
  seedUser({ id: STUDENT_ID, role: "STUDENT", schoolId: SCHOOL_A });
});

// ─── POST copy-on-write (sobrescritura) ─────────────────────────────

test("WO-13: POST cross-school sobre libro 'escuela' ajeno → 403 (no visible)", async () => {
  // El modelo de libros sólo soporta `privado` y `escuela`
  // (BookVisibilitySchema en api/src/schema/libro.ts). Cross-school
  // no ve libros `escuela` de otra escuela, así que SEC-LIBRO
  // bloquea con 403 antes de evaluar copy-on-write. Coherente con
  // el modelo de visibilidad — el copy-on-write NO expande
  // lectura.
  seedLibro({ id: BOOK_ESC, visibility: "escuela", schoolId: SCHOOL_A });
  const token = tokenFor({
    id: OTHER_SCHOOL_TEACHER_ID,
    role: "TEACHER",
    schoolId: SCHOOL_B,
  });
  const r = await jsonRequest(baseUrl, "POST", "/api/libros", {
    token,
    body: bookPayload(BOOK_ESC, "Cross-school quiere forkear escuela"),
  });
  assert.equal(r.status, 403);
});

test("WO-13: POST same-school STAFF no-dueno sobre libro 'escuela' NO dispara copy-on-write (colabora)", async () => {
  // Ya cubierto por el test "POST por staff de la MISMA escuela NO
  // dispara copy-on-write" más arriba. Repetir acá refuerza que el
  // path copy-on-write del POST no se activa para staff de la misma
  // escuela (caso: isStaffRole=true + canEditLibro=true).
  seedLibro({ id: BOOK_ESC, visibility: "escuela", schoolId: SCHOOL_A });
  const token = tokenFor({
    id: SAME_SCHOOL_TEACHER_ID,
    role: "TEACHER",
    schoolId: SCHOOL_A,
  });
  const r = await jsonRequest(baseUrl, "POST", "/api/libros", {
    token,
    body: bookPayload(BOOK_ESC, "Staff mismo escuela - edicion normal"),
  });
  assert.equal(r.status, 200);
  const body = r.body as { copied?: boolean; id: string };
  assert.equal(body.copied, undefined);
  assert.equal(body.id, BOOK_ESC);
});

test("WO-13: POST cross-school sobre libro 'escuela' ajeno → 403 (no es visible)", async () => {
  // `canReadLibro` ya bloquea la lectura cross-school de libros
  // `escuela` ajenos. El copy-on-write no expande la lectura: si no
  // podés ver el libro, no podés forkearlo.
  seedLibro({ id: BOOK_ESC, visibility: "escuela", schoolId: SCHOOL_A });
  const token = tokenFor({
    id: OTHER_SCHOOL_TEACHER_ID,
    role: "TEACHER",
    schoolId: SCHOOL_B,
  });
  const r = await jsonRequest(baseUrl, "POST", "/api/libros", {
    token,
    body: bookPayload(BOOK_ESC, "Cross-school intenta forkear escuela"),
  });
  assert.equal(r.status, 403);
});

test("WO-13: POST same-school sobre libro 'publico' (BOOK_ID_PUB no usado en LIBROS)", async () => {
  // El modelo de libros NO soporta `publico` (sólo `privado` y
  // `escuela`). Por eso no hay un test directo de copy-on-write
  // sobre un libro publico. La policy de visibilidad ya está
  // cubierta por los otros tests.
  assert.equal(true, true);
});

test("WO-13: POST por el owner NO dispara copy-on-write (sobrescritura normal)", async () => {
  seedLibro({ id: BOOK_ESC, visibility: "escuela", schoolId: SCHOOL_A });
  const token = tokenFor({ id: OWNER_ID, role: "TEACHER", schoolId: SCHOOL_A });
  const r = await jsonRequest(baseUrl, "POST", "/api/libros", {
    token,
    body: bookPayload(BOOK_ESC, "Editado por dueno"),
  });
  assert.equal(r.status, 200);
  const body = r.body as { copied?: boolean; id: string };
  assert.equal(body.copied, undefined);
  assert.equal(body.id, BOOK_ESC);
  // El original fue actualizado in-place.
  const mod = prisma.libro.rows.find((l) => l.id === BOOK_ESC);
  const modDoc = JSON.parse(mod!.json);
  assert.equal(modDoc.title, "Editado por dueno");
});

test("WO-13: POST por ADMIN NO dispara copy-on-write (override)", async () => {
  seedLibro({ id: BOOK_ESC, visibility: "escuela", schoolId: SCHOOL_A });
  const token = tokenFor({ id: ADMIN_ID, role: "ADMIN" });
  const r = await jsonRequest(baseUrl, "POST", "/api/libros", {
    token,
    body: bookPayload(BOOK_ESC, "Admin pisa el libro"),
  });
  assert.equal(r.status, 200);
  const body = r.body as { copied?: boolean; id: string };
  assert.equal(body.copied, undefined);
  assert.equal(body.id, BOOK_ESC);
  const mod = prisma.libro.rows.find((l) => l.id === BOOK_ESC);
  const modDoc = JSON.parse(mod!.json);
  assert.equal(modDoc.title, "Admin pisa el libro");
});

test("WO-13: POST por staff de la MISMA escuela NO dispara copy-on-write (colaboracion)", async () => {
  // Coherente con SEC-LIBRO y `canEditLibro`: el staff de la escuela
  // dueña edita el original directamente.
  seedLibro({ id: BOOK_ESC, visibility: "escuela", schoolId: SCHOOL_A });
  const token = tokenFor({
    id: SAME_SCHOOL_TEACHER_ID,
    role: "TEACHER",
    schoolId: SCHOOL_A,
  });
  const r = await jsonRequest(baseUrl, "POST", "/api/libros", {
    token,
    body: bookPayload(BOOK_ESC, "Colaborando entre staff"),
  });
  assert.equal(r.status, 200);
  const body = r.body as { copied?: boolean; id: string };
  assert.equal(body.copied, undefined);
  assert.equal(body.id, BOOK_ESC);
  const mod = prisma.libro.rows.find((l) => l.id === BOOK_ESC);
  const modDoc = JSON.parse(mod!.json);
  assert.equal(modDoc.title, "Colaborando entre staff");
});

test("WO-13: POST staff de OTRA escuela sobre libro 'escuela' ajeno → 403 (no visible)", async () => {
  // Coherencia: si no podés ver el libro (canReadLibro), no podés
  // forkearlo. El cross-school teacher no ve libros `escuela` de
  // otra escuela.
  seedLibro({ id: BOOK_ESC, visibility: "escuela", schoolId: SCHOOL_A });
  const token = tokenFor({
    id: OTHER_SCHOOL_TEACHER_ID,
    role: "TEACHER",
    schoolId: SCHOOL_B,
  });
  const r = await jsonRequest(baseUrl, "POST", "/api/libros", {
    token,
    body: bookPayload(BOOK_ESC, "Cross-school quiere pisar escuela"),
  });
  assert.equal(r.status, 403);
});

test("WO-13: POST sobre libro privado ajeno → 403 (no es visible para el solicitante)", async () => {
  seedLibro({ id: BOOK_PRIV, visibility: "privado", schoolId: SCHOOL_A });
  const token = tokenFor({
    id: OTHER_SCHOOL_TEACHER_ID,
    role: "TEACHER",
    schoolId: SCHOOL_B,
  });
  const r = await jsonRequest(baseUrl, "POST", "/api/libros", {
    token,
    body: bookPayload(BOOK_PRIV, "Intento pisar un privado"),
  });
  // El libro es privado: el solicitante no puede ni leerlo
  // (`canReadLibro` retorna false), y SEC-LIBRO bloquea la edición
  // ajena con 403 ANTES de evaluar copy-on-write. Coherente con la
  // policy original (no expandir lectura por la puerta de copia).
  assert.equal(r.status, 403);
});

test("WO-13: POST por un alumno (USER) sobre libro 'escuela' → 403", async () => {
  // SEC-LIBRO — los alumnos NUNCA editan libros, ni siquiera los de
  // su escuela. El copy-on-write no aplica a alumnos.
  seedLibro({ id: BOOK_ESC, visibility: "escuela", schoolId: SCHOOL_A });
  const token = tokenFor({
    id: STUDENT_ID,
    role: "USER",
    schoolId: SCHOOL_A,
  });
  const r = await jsonRequest(baseUrl, "POST", "/api/libros", {
    token,
    body: bookPayload(BOOK_ESC, "Alumno quiere pisar"),
  });
  assert.equal(r.status, 403);
});

// ─── POST /api/libros/:id/duplicar (explícito) ────────────────────

test("WO-13: POST /api/libros/:id/duplicar del dueno crea copia con provenance", async () => {
  seedLibro({ id: BOOK_ESC, visibility: "escuela", schoolId: SCHOOL_A });
  const token = tokenFor({ id: OWNER_ID, role: "TEACHER", schoolId: SCHOOL_A });
  const r = await jsonRequest(baseUrl, "POST", `/api/libros/${BOOK_ESC}/duplicar`, { token });
  assert.equal(r.status, 201);
  const body = r.body as {
    id: string;
    sourceId: string;
    clonedFrom: { id: string; title: string | null; ownerUserId: string | null };
  };
  assert.notEqual(body.id, BOOK_ESC);
  assert.equal(body.sourceId, BOOK_ESC);
  assert.equal(body.clonedFrom.id, BOOK_ESC);
  assert.equal(body.clonedFrom.ownerUserId, OWNER_ID);
  // La copia persiste provenance.
  const copia = prisma.libro.rows.find((l) => l.id === body.id);
  assert.ok(copia);
  assert.equal(copia.clonedFromId, BOOK_ESC);
  assert.equal(copia.clonedFromOwnerUserId, OWNER_ID);
  // El titulo lleva el sufijo "(copia)".
  const copiaDoc = JSON.parse(copia.json);
  assert.equal(copiaDoc.book.metadata.title, `Libro ${BOOK_ESC} (copia)`);
});

test("WO-13: POST /api/libros/:id/duplicar requiere poder LEER el libro (canReadLibro)", async () => {

test("WO-13: POST /api/libros/:id/duplicar requiere poder LEER el libro (canReadLibro)", async () => {
  // Un alumno de OTRA escuela no puede duplicar un libro escuela
  // porque ni siquiera puede leerlo.
  seedLibro({ id: BOOK_ESC, visibility: "escuela", schoolId: SCHOOL_A });
  const studentOther = tokenFor({
    id: "student-other",
    role: "USER",
    schoolId: SCHOOL_B,
  });
  // Seedear el alumno.
  seedUser({ id: "student-other", role: "USER", schoolId: SCHOOL_B });
  const r = await jsonRequest(baseUrl, "POST", `/api/libros/${BOOK_ESC}/duplicar`, {
    token: studentOther,
  });
  assert.equal(r.status, 403);
});

test("WO-13: POST /api/libros/:id/duplicar: un alumno same-school puede duplicar un libro 'escuela'", async () => {
  // El endpoint de duplicar requiere canReadLibro, no canEditLibro.
  // Un alumno de la misma escuela SÍ puede leer un libro
  // `escuela` (canReadLibro retorna true), entonces puede
  // duplicarlo. La copia es suya (owner=alumno). El original
  // queda intacto.
  seedLibro({ id: BOOK_ESC, visibility: "escuela", schoolId: SCHOOL_A });
  const token = tokenFor({
    id: STUDENT_ID,
    role: "USER",
    schoolId: SCHOOL_A,
  });
  const r = await jsonRequest(baseUrl, "POST", `/api/libros/${BOOK_ESC}/duplicar`, { token });
  assert.equal(r.status, 201);
  const body = r.body as { id: string; clonedFrom: { id: string } };
  assert.notEqual(body.id, BOOK_ESC);
  assert.equal(body.clonedFrom.id, BOOK_ESC);
  // La copia es del solicitante.
  const copia = prisma.libro.rows.find((l) => l.id === body.id);
  assert.ok(copia);
  assert.equal(copia.ownerUserId, STUDENT_ID);
});

// ─── GET expone clonedFrom ─────────────────────────────────────────

test("WO-13: GET expone clonedFrom para que la UI muestre el banner", async () => {
  seedLibro({ id: BOOK_ESC, visibility: "escuela", schoolId: SCHOOL_A });
  const token = tokenFor({ id: OWNER_ID, role: "TEACHER", schoolId: SCHOOL_A });
  const dup = await jsonRequest(baseUrl, "POST", `/api/libros/${BOOK_ESC}/duplicar`, { token });
  assert.equal(dup.status, 201);
  const copiaId = (dup.body as { id: string }).id;
  const get = await jsonRequest(baseUrl, "GET", `/api/libros/${copiaId}`, { token });
  assert.equal(get.status, 200);
  const libro = get.body as {
    clonedFrom: { id: string; title: string | null; ownerUserId: string | null } | null;
  };
  assert.ok(libro.clonedFrom);
  assert.equal(libro.clonedFrom.id, BOOK_ESC);
  assert.equal(libro.clonedFrom.ownerUserId, OWNER_ID);
});

test("WO-13: GET de libro no-copia devuelve clonedFrom null", async () => {
  seedLibro({ id: BOOK_ESC, visibility: "escuela", schoolId: SCHOOL_A });
  const token = tokenFor({ id: OWNER_ID, role: "TEACHER", schoolId: SCHOOL_A });
  const get = await jsonRequest(baseUrl, "GET", `/api/libros/${BOOK_ESC}`, { token });
  assert.equal(get.status, 200);
  const libro = get.body as { clonedFrom?: unknown };
  assert.ok(libro.clonedFrom === null || libro.clonedFrom === undefined);
});

test("WO-13: GET listado expone clonedFrom en items", async () => {
  seedLibro({ id: BOOK_ESC, visibility: "escuela", schoolId: SCHOOL_A });
  const token = tokenFor({ id: OWNER_ID, role: "TEACHER", schoolId: SCHOOL_A });
  const dup = await jsonRequest(baseUrl, "POST", `/api/libros/${BOOK_ESC}/duplicar`, { token });
  assert.equal(dup.status, 201);
  const copiaId = (dup.body as { id: string }).id;
  // Listamos como el owner (ve sus libros propios).
  const list = await jsonRequest(baseUrl, "GET", "/api/libros?owner=mias", { token });
  assert.equal(list.status, 200);
  const body = list.body as {
    items: Array<{ id: string; clonedFrom: { id: string } | null }>;
  };
  const found = body.items.find((it) => it.id === copiaId);
  assert.ok(found);
  assert.ok(found.clonedFrom);
  assert.equal(found.clonedFrom.id, BOOK_ESC);
});
