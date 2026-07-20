/**
 * Tarea 14 — "los alumnos tienen que poder comentar publicaciones en las
 * clases según los ajustes del aula". El endpoint de comentarios
 * (POST .../comentarios) ya existía pero sin ningún gate de aula ni
 * consumidor en el front. Se agregó la columna `allowComments` en `Clase`
 * (default true) y el gate en publicaciones.ts.
 *
 * Cubre:
 *  (a) POST comentario funciona con el default (allowComments ausente).
 *  (b) POST comentario rechaza con 403 cuando allowComments=false.
 *  (c) GET comentarios sigue funcionando aunque allowComments=false
 *      (el ajuste sólo bloquea comentarios NUEVOS, no la lectura).
 *  (d) PATCH /api/aulas/:id persiste allowComments y el GET detail lo
 *      devuelve.
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

const SCHOOL = "esc-comentarios-toggle";
const AULA = "aula-comentarios-toggle";
const TEACHER = "teacher-comentarios-toggle";
const STUDENT = "student-comentarios-toggle";

before(async () => {
  const { publicaciones } = await import("../../src/routes/publicaciones");
  const { aulas } = await import("../../src/routes/aulas");
  const server = await startServer([publicaciones, aulas]);
  baseUrl = server.baseUrl;
  close = server.close;
});

after(async () => {
  if (close) await close();
});

const seedClassroom = (allowComments?: boolean) => {
  const now = new Date().toISOString();
  prisma.clase.rows.push({
    id: AULA,
    escuelaId: SCHOOL,
    name: "Aula comentarios",
    grade: "5°",
    isDeleted: false,
    status: "ACTIVE",
    createdBy: TEACHER,
    createdAt: now,
    ...(allowComments === undefined ? {} : { allowComments }),
  });
  prisma.claseMiembro.rows.push(
    { claseId: AULA, usuarioId: TEACHER, rolEnClase: "TEACHER" },
    { claseId: AULA, usuarioId: STUDENT, rolEnClase: "STUDENT" }
  );
};

const seedPublicacion = () => {
  const now = new Date().toISOString();
  const id = `pub-toggle-${Math.random().toString(16).slice(2)}`;
  prisma.publicacion.rows.push({
    id,
    aulaId: AULA,
    authorId: TEACHER,
    title: "Publicación",
    body: "Contenido",
    archivos: null,
    isPinned: false,
    isDeleted: false,
    deletedBy: null,
    publishedAt: now,
    updatedAt: now,
  });
  return id;
};

beforeEach(() => {
  resetPrisma();
  seedUser({ id: TEACHER, role: "TEACHER", schoolId: SCHOOL });
  seedUser({ id: STUDENT, role: "USER", schoolId: SCHOOL });
});

test("(a) POST comentario funciona con el default (allowComments ausente)", async () => {
  seedClassroom(undefined);
  const publicationId = seedPublicacion();

  const res = await jsonRequest(
    baseUrl, "POST", `/api/aulas/${AULA}/publicaciones/${publicationId}/comentarios`,
    {
      token: tokenFor({ id: STUDENT, role: "USER", schoolId: SCHOOL }),
      body: { contenido: "Buen punto!" },
    }
  );

  assert.equal(res.status, 201);
  assert.equal(prisma.comentario.rows.length, 1);
});

test("(b) POST comentario rechaza con 403 cuando allowComments=false", async () => {
  seedClassroom(false);
  const publicationId = seedPublicacion();
  const before = prisma.comentario.rows.length;

  const res = await jsonRequest(
    baseUrl, "POST", `/api/aulas/${AULA}/publicaciones/${publicationId}/comentarios`,
    {
      token: tokenFor({ id: STUDENT, role: "USER", schoolId: SCHOOL }),
      body: { contenido: "Buen punto!" },
    }
  );

  assert.equal(res.status, 403);
  assert.equal((res.body as { error?: string })?.error, "comments disabled for this classroom");
  assert.equal(prisma.comentario.rows.length, before);
});

test("(c) GET comentarios sigue funcionando aunque allowComments=false", async () => {
  seedClassroom(false);
  const publicationId = seedPublicacion();
  prisma.comentario.rows.push({
    id: "com-preexistente",
    publicacionId: publicationId,
    json: JSON.stringify({ id: "com-preexistente", body: "Ya estaba", authorId: STUDENT }),
    createdAt: new Date().toISOString(),
  });

  const res = await jsonRequest(
    baseUrl, "GET", `/api/aulas/${AULA}/publicaciones/${publicationId}/comentarios`,
    { token: tokenFor({ id: STUDENT, role: "USER", schoolId: SCHOOL }) }
  );

  assert.equal(res.status, 200);
  assert.equal((res.body as { items: unknown[] }).items.length, 1);
});

test("(d) PATCH /api/aulas/:id persiste allowComments y el GET detail lo devuelve", async () => {
  seedClassroom(undefined);

  const patchRes = await jsonRequest(baseUrl, "PATCH", `/api/aulas/${AULA}`, {
    token: tokenFor({ id: TEACHER, role: "TEACHER", schoolId: SCHOOL }),
    body: { allowComments: false },
  });
  assert.equal(patchRes.status, 200);
  assert.equal(prisma.clase.rows.find((c) => c.id === AULA)?.allowComments, false);

  const getRes = await jsonRequest(baseUrl, "GET", `/api/aulas/${AULA}`, {
    token: tokenFor({ id: TEACHER, role: "TEACHER", schoolId: SCHOOL }),
  });
  assert.equal(getRes.status, 200);
  assert.equal((getRes.body as { allowComments?: boolean }).allowComments, false);
});
