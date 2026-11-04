/**
 * Purga definitiva de lo borrado hace más de 4 años, sin tocar lo que otra parte del sistema usa
 * (2026-10-29).
 */
process.env.NODE_ENV = "test";

import assert from "node:assert/strict";
import { beforeEach, test } from "node:test";
import { prisma, resetPrisma } from "./_helpers/setup";
import { purgarBorradosViejos } from "../../src/lib/purga-borrados";

const AHORA = new Date("2026-10-29T12:00:00Z");
const hace = (anios: number) => {
  const d = new Date(AHORA.getTime());
  d.setUTCFullYear(d.getUTCFullYear() - anios);
  return d.toISOString();
};
const ids = (rows: unknown[]) => (rows as Array<{ id: string }>).map((r) => r.id).sort();

beforeEach(() => {
  resetPrisma();
  prisma.calendarioEscuela.rows = [];
  prisma.actividadAula.rows = [];
  prisma.comentario.rows = [];
  prisma.economiaEvento.rows = [];
  prisma.economiaRecompensa.rows = [];
  prisma.publicacion.rows.push(
    { id: "pub-vieja", aulaId: "a", isDeleted: true, updatedAt: hace(5) } as never,
    { id: "pub-reciente", aulaId: "a", isDeleted: true, updatedAt: hace(1) } as never,
    { id: "pub-viva", aulaId: "a", isDeleted: false, updatedAt: hace(6) } as never
  );
  prisma.comentario.rows.push({ id: "c1", publicacionId: "pub-vieja" } as never, { id: "c2", publicacionId: "pub-viva" } as never);
  prisma.calendarioEscuela.rows.push(
    { id: "cal-viejo", isDeleted: true, deletedAt: hace(5) } as never,
    { id: "cal-sin-fecha", isDeleted: true, deletedAt: null } as never
  );
  prisma.tareaAula.rows.push(
    { id: "t-sin-entregas", isDeleted: true, updatedAt: hace(5) } as never,
    { id: "t-con-entregas", isDeleted: true, updatedAt: hace(5) } as never
  );
  prisma.entregaTarea.rows.push({ id: "e1", tareaId: "t-con-entregas", alumnoId: "x" } as never);
  prisma.economiaRecompensa.rows.push(
    { id: "r-libre", isDeleted: true, deletedAt: hace(5) } as never,
    { id: "r-usada", isDeleted: true, deletedAt: hace(5) } as never
  );
  prisma.ledgerMovimiento.rows.push({ id: "m1", usuarioId: "x", referenciaId: "r-usada" } as never);
});

test("purga lo borrado hace más de 4 años y respeta lo que otra parte usa", async () => {
  const r = await purgarBorradosViejos(AHORA, 4);
  assert.deepEqual(ids(prisma.publicacion.rows), ["pub-reciente", "pub-viva"]);
  assert.deepEqual(ids(prisma.comentario.rows), ["c2"], "se van los comentarios de la publicación purgada");
  assert.deepEqual(ids(prisma.calendarioEscuela.rows), ["cal-sin-fecha"], "sin fecha: se marca hoy y espera 4 años");
  assert.equal((prisma.calendarioEscuela.rows[0] as { deletedAt: string }).deletedAt, AHORA.toISOString());
  assert.deepEqual(ids(prisma.tareaAula.rows), ["t-con-entregas"], "una tarea con entregas tiene notas");
  assert.deepEqual(ids(prisma.economiaRecompensa.rows), ["r-usada"], "una recompensa con movimientos se conserva");
  assert.equal(r.publicaciones, 1);
});

test("con 0 años no purga nada", async () => {
  await purgarBorradosViejos(AHORA, 0);
  assert.equal(prisma.publicacion.rows.length, 3);
});
