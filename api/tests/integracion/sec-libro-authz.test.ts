/**
 * SEC-LIBRO — Autorización en /api/libros.
 *
 * Contexto: hasta el fix, `POST /api/libros` aceptaba a cualquier
 * usuario autenticado (incluido un alumno con rol USER) y, si el
 * `book.metadata.id` ya existía, SOBRESCRIBÍA el libro para
 * TODOS. Causa de escalada de privilegios con efecto global.
 *
 * Modelo de permisos (réplica de `canReadDataset` aplicada a
 * EDICIÓN de libros, ver `api/src/routes/vblang-datasets.ts:54-68`):
 *
 *   - ADMIN: siempre.
 *   - Dueño: siempre.
 *   - Staff de la escuela dueña cuando `visibility = 'escuela'`: sí.
 *   - Alumnos: NUNCA editan, ni siquiera libros de su escuela.
 *   - Libros sin dueño (`ownerUserId = null`): solo ADMIN.
 *
 * Verificaciones:
 *  - POST sin token → 401.
 *  - STUDENT sobrescribiendo libro ajeno → 403.
 *  - STUDENT creando libro nuevo → 403 (los alumnos no crean
 *    contenido, ni siquiera privado).
 *  - Dueño editando su libro → 200.
 *  - Otro TEACHER (no dueño, libro privado ajeno) → 403.
 *  - Staff de la MISMA escuela editando un libro escuela → 200.
 *  - Staff de OTRA escuela editando un libro escuela → 403.
 *  - ADMIN editando cualquier libro → 200.
 *  - Libro huérfano (sin ownerUserId): TEACHER → 403; ADMIN → 200.
 *  - GET de un libro existente devuelve ownerUserId/visibility/
 *    schoolId para que el front pueda decidir editor vs lector.
 */

process.env.NODE_ENV = "test";
process.env.JWT_SECRET = process.env.JWT_SECRET ?? "test-secret-vblang";
process.env.DATABASE_URL =
  process.env.DATABASE_URL ?? "postgresql://test:test@localhost:5432/test";

import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import {
  jsonRequest,
  prisma,
  resetPrisma,
  seedUser,
  startServer,
  tokenFor,
} from "./_helpers/setup";

let baseUrl: string;
let close: () => Promise<void>;

const OWNER_ID = "libro-owner-teacher";
const OTHER_TEACHER_ID = "libro-other-teacher";
const SAME_SCHOOL_TEACHER_ID = "libro-school-teacher";
const OTHER_SCHOOL_TEACHER_ID = "libro-otherschool-teacher";
const STUDENT_ID = "libro-student";
const ADMIN_ID = "libro-admin";

const SCHOOL_A = "school-A";
const SCHOOL_B = "school-B";

const BOOK_ID_PRIV = "libro-priv-1";
const BOOK_ID_ESC = "libro-escuela-1";
const BOOK_ID_HUERFANO = "libro-huerfano-1";

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

before(async () => {
  const { libros } = await import("../../src/routes/libros");
  const server = await startServer([libros]);
  baseUrl = server.baseUrl;
  close = server.close;
});

after(async () => {
  await close();
});

beforeEach(() => {
  resetPrisma();
  // Profesores y alumnos de la escuela A
  seedUser({ id: OWNER_ID, role: "TEACHER", schoolId: SCHOOL_A });
  seedUser({ id: OTHER_TEACHER_ID, role: "TEACHER", schoolId: SCHOOL_A });
  seedUser({ id: SAME_SCHOOL_TEACHER_ID, role: "TEACHER", schoolId: SCHOOL_A });
  // El back usa "USER" como rol canónico para alumnos (ver
  // `api/src/lib/membership-roles.ts` — `USER → STUDENT`). El helper
  // `Role` del setup no incluye "USER" en la unión, así que casteamos.
  seedUser({ id: STUDENT_ID, role: "USER" as never, schoolId: SCHOOL_A });
  // Profesor de otra escuela
  seedUser({ id: OTHER_SCHOOL_TEACHER_ID, role: "TEACHER", schoolId: SCHOOL_B });
  // Admin global
  seedUser({ id: ADMIN_ID, role: "ADMIN" });

  // Sembramos los libros pre-existentes para los tests de sobrescritura.
  const now = new Date().toISOString();
  prisma.libro.rows.push({
    id: BOOK_ID_PRIV,
    json: JSON.stringify({
      id: BOOK_ID_PRIV,
      title: "Libro privado del owner",
      book: { schema: "book.pages@1.1", metadata: { id: BOOK_ID_PRIV, title: "Libro privado del owner" }, pages: [] },
      updatedAt: now,
    }),
    ownerUserId: OWNER_ID,
    schoolId: SCHOOL_A,
    visibility: "privado",
    updatedAt: now,
  });
  prisma.libro.rows.push({
    id: BOOK_ID_ESC,
    json: JSON.stringify({
      id: BOOK_ID_ESC,
      title: "Libro de la escuela A",
      book: { schema: "book.pages@1.1", metadata: { id: BOOK_ID_ESC, title: "Libro de la escuela A" }, pages: [] },
      updatedAt: now,
    }),
    ownerUserId: OWNER_ID,
    schoolId: SCHOOL_A,
    visibility: "escuela",
    updatedAt: now,
  });
  // SEC-LIBRO — libro huérfano (sin dueño). Simula los libros que
  // existían antes de la migración.
  prisma.libro.rows.push({
    id: BOOK_ID_HUERFANO,
    json: JSON.stringify({
      id: BOOK_ID_HUERFANO,
      title: "Libro huerfano (sin dueño)",
      book: { schema: "book.pages@1.1", metadata: { id: BOOK_ID_HUERFANO, title: "Libro huerfano (sin dueño)" }, pages: [] },
      updatedAt: now,
    }),
    ownerUserId: null,
    schoolId: null,
    visibility: "privado",
    updatedAt: now,
  });
});

const tok = (id: string, role: string, schoolId: string | null = null) =>
  // Cast porque `Role` del helper no incluye "USER"; el back usa
  // ese string canónico para alumnos.
  tokenFor({ id, role: role as never, schoolId });

// ─── Sin token ─────────────────────────────────────────────────────────

test("SEC-LIBRO: POST /api/libros sin token → 401", async () => {
  const r = await jsonRequest(baseUrl, "POST", "/api/libros", {
    body: bookPayload(BOOK_ID_PRIV, "Libro privado del owner"),
  });
  assert.equal(r.status, 401);
});

// ─── STUDENT (rol USER) ────────────────────────────────────────────────

test("SEC-LIBRO: STUDENT sobrescribiendo libro AJENO → 403", async () => {
  const r = await jsonRequest(baseUrl, "POST", "/api/libros", {
    token: tok(STUDENT_ID, "USER", SCHOOL_A),
    body: bookPayload(BOOK_ID_PRIV, "Soy un alumno y modifico esto"),
  });
  assert.equal(r.status, 403);
  // Confirmar que el libro original NO se modificó.
  const stored = prisma.libro.rows.find((r) => r.id === BOOK_ID_PRIV);
  assert.ok(stored, "el libro original debe seguir existiendo");
  assert.match(stored!.json, /Libro privado del owner/);
});

test("SEC-LIBRO: STUDENT sobrescribiendo libro de su ESCUELA → 403", async () => {
  // El libro tiene visibility='escuela' y schoolId = SCHOOL_A. El
  // alumno también es de SCHOOL_A. Igual: 403. Los alumnos NUNCA
  // editan libros, ni siquiera los de su escuela.
  const r = await jsonRequest(baseUrl, "POST", "/api/libros", {
    token: tok(STUDENT_ID, "USER", SCHOOL_A),
    body: bookPayload(BOOK_ID_ESC, "Hack from student same school"),
  });
  assert.equal(r.status, 403);
  const stored = prisma.libro.rows.find((r) => r.id === BOOK_ID_ESC);
  assert.ok(stored);
  assert.match(stored!.json, /Libro de la escuela A/);
});

test("SEC-LIBRO: STUDENT creando libro NUEVO → 403", async () => {
  // Los alumnos tampoco crean. Solo el staff escribe libros.
  const r = await jsonRequest(baseUrl, "POST", "/api/libros", {
    token: tok(STUDENT_ID, "USER", SCHOOL_A),
    body: bookPayload("libro-nuevo-de-alumno", "Mi libro de alumno"),
  });
  assert.equal(r.status, 403);
  const stored = prisma.libro.rows.find((r) => r.id === "libro-nuevo-de-alumno");
  assert.equal(stored, undefined, "no se debe haber creado el libro");
});

// ─── Dueño y otros teachers ───────────────────────────────────────────

test("SEC-LIBRO: DUEÑO editando su libro privado → 200", async () => {
  const r = await jsonRequest(baseUrl, "POST", "/api/libros", {
    token: tok(OWNER_ID, "TEACHER", SCHOOL_A),
    body: bookPayload(BOOK_ID_PRIV, "Mi libro actualizado"),
  });
  assert.equal(r.status, 200);
  const stored = prisma.libro.rows.find((r) => r.id === BOOK_ID_PRIV);
  assert.match(stored!.json, /Mi libro actualizado/);
});

test("SEC-LIBRO: OTRO TEACHER editando libro privado ajeno → 403", async () => {
  // Misma escuela que el dueño, pero el libro es PRIVADO. Solo
  // dueño (y admin) edita.
  const r = await jsonRequest(baseUrl, "POST", "/api/libros", {
    token: tok(OTHER_TEACHER_ID, "TEACHER", SCHOOL_A),
    body: bookPayload(BOOK_ID_PRIV, "Me apropio del libro"),
  });
  assert.equal(r.status, 403);
});

// ─── Visibility escuela ───────────────────────────────────────────────

test("SEC-LIBRO: STAFF de la MISMA escuela editando libro escuela → 200", async () => {
  // Libro con visibility='escuela', schoolId=SCHOOL_A. Otro
  // teacher de la misma escuela puede editar.
  const r = await jsonRequest(baseUrl, "POST", "/api/libros", {
    token: tok(SAME_SCHOOL_TEACHER_ID, "TEACHER", SCHOOL_A),
    body: bookPayload(BOOK_ID_ESC, "Colaborando entre staff de la escuela"),
  });
  assert.equal(r.status, 200);
  const stored = prisma.libro.rows.find((r) => r.id === BOOK_ID_ESC);
  assert.match(stored!.json, /Colaborando entre staff/);
});

test("SEC-LIBRO: STAFF de OTRA escuela editando libro escuela → 403", async () => {
  const r = await jsonRequest(baseUrl, "POST", "/api/libros", {
    token: tok(OTHER_SCHOOL_TEACHER_ID, "TEACHER", SCHOOL_B),
    body: bookPayload(BOOK_ID_ESC, "Soy de otra escuela y meto mano"),
  });
  assert.equal(r.status, 403);
});

// ─── Admin ────────────────────────────────────────────────────────────

test("SEC-LIBRO: ADMIN editando libro ajeno → 200", async () => {
  const r = await jsonRequest(baseUrl, "POST", "/api/libros", {
    token: tok(ADMIN_ID, "ADMIN"),
    body: bookPayload(BOOK_ID_PRIV, "Admin pisó el libro"),
  });
  assert.equal(r.status, 200);
});

// ─── Libros huérfanos (legacy sin dueño) ──────────────────────────────

test("SEC-LIBRO: TEACHER editando libro HUÉRFANO (sin owner) → 403", async () => {
  // Estrategia conservadora: sin dueño solo edita ADMIN. Los
  // libros viejos quedan bloqueados hasta que un admin los
  // reclame asignando ownerUserId explícitamente.
  const r = await jsonRequest(baseUrl, "POST", "/api/libros", {
    token: tok(OWNER_ID, "TEACHER", SCHOOL_A),
    body: bookPayload(BOOK_ID_HUERFANO, "Me adueño del huerfano"),
  });
  assert.equal(r.status, 403);
});

test("SEC-LIBRO: ADMIN editando libro HUÉRFANO → 200", async () => {
  const r = await jsonRequest(baseUrl, "POST", "/api/libros", {
    token: tok(ADMIN_ID, "ADMIN"),
    body: bookPayload(BOOK_ID_HUERFANO, "Admin recupera el huerfano"),
  });
  assert.equal(r.status, 200);
});

// ─── Creación de libro nuevo por staff ────────────────────────────────

test("SEC-LIBRO: TEACHER creando libro NUEVO → 201 (queda como dueño)", async () => {
  const newId = "libro-nuevo-de-teacher";
  const r = await jsonRequest(baseUrl, "POST", "/api/libros", {
    token: tok(OWNER_ID, "TEACHER", SCHOOL_A),
    body: { ...bookPayload(newId, "Mi nuevo libro"), visibility: "privado" },
  });
  assert.equal(r.status, 201);
  const stored = prisma.libro.rows.find((r) => r.id === newId);
  assert.ok(stored);
  assert.equal(stored!.ownerUserId, OWNER_ID);
  assert.equal(stored!.schoolId, SCHOOL_A);
  assert.equal(stored!.visibility, "privado");
});

test("SEC-LIBRO: TEACHER creando libro con visibility='escuela' → 201 y queda con visibility escuela", async () => {
  const newId = "libro-escuela-nuevo";
  const r = await jsonRequest(baseUrl, "POST", "/api/libros", {
    token: tok(OWNER_ID, "TEACHER", SCHOOL_A),
    body: { ...bookPayload(newId, "Libro nuevo escuela"), visibility: "escuela" },
  });
  assert.equal(r.status, 201);
  const stored = prisma.libro.rows.find((r) => r.id === newId);
  assert.equal(stored!.visibility, "escuela");
  assert.equal(stored!.schoolId, SCHOOL_A);
});

// ─── GET expone ownership para que el front decida editor vs lector ──

test("SEC-LIBRO: GET /api/libros/:id incluye ownerUserId, visibility, schoolId", async () => {
  const r = await jsonRequest(baseUrl, "GET", `/api/libros/${BOOK_ID_ESC}`, {
    token: tok(STUDENT_ID, "USER", SCHOOL_A),
  });
  assert.equal(r.status, 200);
  const body = r.body as {
    ownerUserId?: string | null;
    visibility?: string;
    schoolId?: string | null;
  };
  assert.equal(body.ownerUserId, OWNER_ID);
  assert.equal(body.visibility, "escuela");
  assert.equal(body.schoolId, SCHOOL_A);
});
