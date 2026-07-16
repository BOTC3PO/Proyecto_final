/**
 * Reescrito 2026-07-16 sobre el harness Prisma-stub (antes usaba una
 * conexión MongoDB real contra un schema de colecciones "aulas"/
 * "publicaciones" que ya no existe — la migración a Postgres/Prisma
 * dejó ese archivo muerto: no está en el script `test` de
 * package.json y Mongo ni siquiera corre en este entorno. La
 * cobertura (POST publicaciones/comentarios rechaza aulas
 * ARCHIVED/LOCKED) no vive en ningún otro test — se preserva acá.
 *
 * Cubre:
 *  1. POST /api/aulas/:id/publicaciones rechaza aulas ARCHIVED/
 *     archivada/LOCKED (403 "classroom is read-only").
 *  2. POST /api/aulas/:id/publicaciones/:pubId/comentarios rechaza
 *     las mismas variantes.
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

const SCHOOL = "esc-pub-ro";
const AULA = "aula-pub-ro";
const TEACHER = "teacher-pub-ro";
const STUDENT = "student-pub-ro";

before(async () => {
  const { publicaciones } = await import("../../src/routes/publicaciones");
  const server = await startServer([publicaciones]);
  baseUrl = server.baseUrl;
  close = server.close;
});

after(async () => {
  if (close) await close();
});

const seedClassroom = (status: string) => {
  const now = new Date().toISOString();
  prisma.clase.rows.push({
    id: AULA,
    escuelaId: SCHOOL,
    name: "Aula read-only",
    grade: "5°",
    isDeleted: false,
    status,
    createdBy: TEACHER,
    createdAt: now,
  });
  prisma.claseMiembro.rows.push(
    { claseId: AULA, usuarioId: TEACHER, rolEnClase: "TEACHER" },
    { claseId: AULA, usuarioId: STUDENT, rolEnClase: "STUDENT" }
  );
};

const seedPublicacion = () => {
  const now = new Date().toISOString();
  const id = `pub-ro-${Math.random().toString(16).slice(2)}`;
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

const READONLY_STATUSES = ["ARCHIVED", "archivada", "LOCKED"];

for (const status of READONLY_STATUSES) {
  test(`POST /api/aulas/:id/publicaciones rechaza aulas en modo solo lectura (${status})`, async () => {
    seedClassroom(status);
    const countBefore = prisma.publicacion.rows.length;

    const res = await jsonRequest(baseUrl, "POST", `/api/aulas/${AULA}/publicaciones`, {
      token: tokenFor({ id: TEACHER, role: "TEACHER", schoolId: SCHOOL }),
      body: { contenido: "Nueva publicación", title: "Anuncio" },
    });

    assert.equal(res.status, 403);
    assert.equal((res.body as { error?: string })?.error, "classroom is read-only");
    assert.equal(prisma.publicacion.rows.length, countBefore);
  });

  test(`POST /api/aulas/:id/publicaciones/:pubId/comentarios rechaza aulas en modo solo lectura (${status})`, async () => {
    seedClassroom(status);
    const publicationId = seedPublicacion();
    const comentariosBefore = prisma.comentario.rows.length;

    const res = await jsonRequest(
      baseUrl, "POST", `/api/aulas/${AULA}/publicaciones/${publicationId}/comentarios`,
      {
        token: tokenFor({ id: STUDENT, role: "USER", schoolId: SCHOOL }),
        body: { contenido: "Comentario" },
      }
    );

    assert.equal(res.status, 403);
    assert.equal((res.body as { error?: string })?.error, "classroom is read-only");
    assert.equal(prisma.comentario.rows.length, comentariosBefore);
  });
}
