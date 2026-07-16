/**
 * FIX-PUBLICACIONES-AUTOR / EDITAR / BORRAR — el feed de novedades
 * del aula (aula.tsx) siempre mostraba "?" como avatar sin importar
 * quién publicó: el front mandaba `authorInitials` al crear pero esa
 * columna no existe en `Publicacion` (se descartaba en silencio) y
 * el GET nunca resolvía `authorId` a un nombre. Tampoco existía forma
 * de editar o borrar una publicación propia.
 *
 * Cubre:
 *  1. GET resuelve authorName/authorInitials desde authorId.
 *  2. PATCH: el dueño puede editar su publicación.
 *  3. PATCH: otro usuario NO puede editar una publicación ajena.
 *  4. DELETE: el dueño puede borrar (soft-delete) su publicación.
 *  5. DELETE: el staff del aula (TEACHER) puede borrar publicaciones
 *     ajenas (moderación); un STUDENT ajeno no puede.
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

const SCHOOL = "esc-pub";
const AULA = "aula-pub";
const TEACHER = "teacher-pub";
const STUDENT_A = "student-pub-a";
const STUDENT_B = "student-pub-b";

before(async () => {
  const { publicaciones } = await import("../../src/routes/publicaciones");
  const server = await startServer([publicaciones]);
  baseUrl = server.baseUrl;
  close = server.close;
});

after(async () => {
  if (close) await close();
});

beforeEach(() => {
  resetPrisma();
  seedUser({ id: TEACHER, role: "TEACHER", schoolId: SCHOOL, fullName: "Profe García" });
  seedUser({ id: STUDENT_A, role: "USER", schoolId: SCHOOL, fullName: "Alumno A" });
  seedUser({ id: STUDENT_B, role: "USER", schoolId: SCHOOL, fullName: "Alumno B" });

  const now = new Date().toISOString();
  prisma.clase.rows.push({
    id: AULA,
    escuelaId: SCHOOL,
    name: "Aula publicaciones",
    grade: "5°",
    isDeleted: false,
    status: "ACTIVE",
    createdBy: TEACHER,
    createdAt: now,
  });
  prisma.claseMiembro.rows.push(
    { claseId: AULA, usuarioId: TEACHER, rolEnClase: "TEACHER" },
    { claseId: AULA, usuarioId: STUDENT_A, rolEnClase: "STUDENT" },
    { claseId: AULA, usuarioId: STUDENT_B, rolEnClase: "STUDENT" }
  );
});

const seedPublicacion = (authorId: string) => {
  const now = new Date().toISOString();
  const id = `pub-${authorId}-${Math.random().toString(16).slice(2)}`;
  prisma.publicacion.rows.push({
    id,
    aulaId: AULA,
    authorId,
    title: "Nueva publicación",
    body: "Contenido original",
    archivos: null,
    isPinned: false,
    isDeleted: false,
    deletedBy: null,
    publishedAt: now,
    updatedAt: now,
  });
  return id;
};

test("GET resuelve authorName/authorInitials desde authorId", async () => {
  seedPublicacion(TEACHER);
  const res = await jsonRequest(baseUrl, "GET", `/api/aulas/${AULA}/publicaciones`, {
    token: tokenFor({ id: STUDENT_A, role: "USER", schoolId: SCHOOL }),
  });
  assert.equal(res.status, 200);
  const items = (res.body as { items: Array<{ authorName?: string; authorInitials?: string }> }).items;
  assert.equal(items[0].authorName, "Profe García");
  assert.equal(items[0].authorInitials, "PG");
});

test("PATCH: el dueño puede editar su publicación", async () => {
  const pubId = seedPublicacion(TEACHER);
  const res = await jsonRequest(baseUrl, "PATCH", `/api/aulas/${AULA}/publicaciones/${pubId}`, {
    token: tokenFor({ id: TEACHER, role: "TEACHER", schoolId: SCHOOL }),
    body: { contenido: "Contenido editado" },
  });
  assert.equal(res.status, 200);
  const row = prisma.publicacion.rows.find((r: { id: string }) => r.id === pubId);
  assert.equal(row?.body, "Contenido editado");
});

test("PATCH: otro usuario no puede editar una publicación ajena", async () => {
  const pubId = seedPublicacion(TEACHER);
  const res = await jsonRequest(baseUrl, "PATCH", `/api/aulas/${AULA}/publicaciones/${pubId}`, {
    token: tokenFor({ id: STUDENT_A, role: "USER", schoolId: SCHOOL }),
    body: { contenido: "Intento ajeno" },
  });
  assert.equal(res.status, 403);
  const row = prisma.publicacion.rows.find((r: { id: string }) => r.id === pubId);
  assert.equal(row?.body, "Contenido original");
});

test("DELETE: el dueño puede borrar (soft-delete) su publicación", async () => {
  const pubId = seedPublicacion(STUDENT_A);
  const res = await jsonRequest(baseUrl, "DELETE", `/api/aulas/${AULA}/publicaciones/${pubId}`, {
    token: tokenFor({ id: STUDENT_A, role: "USER", schoolId: SCHOOL }),
  });
  assert.equal(res.status, 200);
  const row = prisma.publicacion.rows.find((r: { id: string }) => r.id === pubId);
  assert.equal(row?.isDeleted, true);
  assert.equal(row?.deletedBy, STUDENT_A);
});

test("DELETE: el staff del aula puede borrar una publicación ajena (moderación)", async () => {
  const pubId = seedPublicacion(STUDENT_A);
  const res = await jsonRequest(baseUrl, "DELETE", `/api/aulas/${AULA}/publicaciones/${pubId}`, {
    token: tokenFor({ id: TEACHER, role: "TEACHER", schoolId: SCHOOL }),
  });
  assert.equal(res.status, 200);
  const row = prisma.publicacion.rows.find((r: { id: string }) => r.id === pubId);
  assert.equal(row?.isDeleted, true);
});

test("DELETE: un alumno ajeno no puede borrar la publicación de otro", async () => {
  const pubId = seedPublicacion(STUDENT_A);
  const res = await jsonRequest(baseUrl, "DELETE", `/api/aulas/${AULA}/publicaciones/${pubId}`, {
    token: tokenFor({ id: STUDENT_B, role: "USER", schoolId: SCHOOL }),
  });
  assert.equal(res.status, 403);
  const row = prisma.publicacion.rows.find((r: { id: string }) => r.id === pubId);
  assert.equal(row?.isDeleted, false);
});
