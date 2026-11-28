/**
 * Auditoría 11/2026 — reportes. La escuela y el aula del reporte salían de `?institucion=` y `?aula=`:
 * un docente leía nombres y promedios de alumnos de otra escuela, y un docente sin escuela veía todas.
 */
process.env.NODE_ENV = "test";

import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";

let baseUrl: string;
let close: () => Promise<void>;
const now = () => new Date().toISOString();
const get = (path: string, token: string) => jsonRequest(baseUrl, "GET", path, { token });
const tDocA = () => tokenFor({ id: "ra-doc-a", role: "TEACHER", schoolId: "ra-esc-a" });
const tAdmin = () => tokenFor({ id: "ra-admin", role: "ADMIN", schoolId: null });
const traeB = (r: { body?: any }) => JSON.stringify(r.body?.boletines ?? []).includes("Alumno B");

before(async () => {
  const { reportes } = await import("../../src/routes/reportes");
  const srv = await startServer([reportes]);
  baseUrl = srv.baseUrl;
  close = srv.close;
});
after(async () => { if (close) await close(); });

beforeEach(() => {
  resetPrisma();
  for (const id of ["ra-esc-a", "ra-esc-b"]) prisma.escuela.rows.push({ id, name: id, isDeleted: false, estadoVerificacion: "verificada", createdAt: now() } as never);
  seedUser({ id: "ra-doc-a", role: "TEACHER", schoolId: "ra-esc-a" });
  seedUser({ id: "ra-doc-sin", role: "TEACHER", schoolId: null });
  seedUser({ id: "ra-admin", role: "ADMIN", schoolId: null });
  seedUser({ id: "ra-alu-b", role: "STUDENT", schoolId: "ra-esc-b", fullName: "Alumno B" });
  for (const [id, esc] of [["ra-aula-a", "ra-esc-a"], ["ra-aula-b", "ra-esc-b"]]) {
    prisma.clase.rows.push({ id, escuelaId: esc, name: id, isDeleted: false, status: "ACTIVE", createdAt: now(), updatedAt: now() } as never);
  }
  prisma.claseMiembro.rows.push({ claseId: "ra-aula-b", usuarioId: "ra-alu-b", rolEnClase: "STUDENT" } as never);
  prisma.progresoModulo.rows.push({ id: "ra-p1", usuarioId: "ra-alu-b", aulaId: "ra-aula-b", moduloId: "m1", status: "completado", score: 3, createdAt: now(), updatedAt: now() } as never);
});

test("docente: su escuela sí, sin datos de otra", async () => {
  const r = await get("/api/reportes/profesor", tDocA());
  assert.equal(r.status, 200);
  assert.equal(traeB(r), false);
});

test("docente: ?institucion de otra escuela → 403", async () => {
  for (const ruta of ["/api/reportes/profesor?institucion=ra-esc-b", "/api/reportes/economia?institucion=ra-esc-b"]) {
    const r = await get(ruta, tDocA());
    assert.equal(r.status, 403, ruta);
  }
});

test("docente: ?aula de otra escuela no devuelve sus alumnos", async () => {
  const r = await get("/api/reportes/admin?aula=ra-aula-b", tDocA());
  assert.equal(r.status, 200);
  assert.equal(traeB(r), false);
  assert.equal(r.body.paginacion?.totalAulas ?? 0, 0);
  const e = await get("/api/reportes/economia?aula=ra-aula-b", tDocA());
  assert.equal(e.status, 200);
  assert.equal(e.body.paginacion.totalAulas, 0);
});

test("personal sin escuela → 403", async () => {
  const r = await get("/api/reportes/profesor", tokenFor({ id: "ra-doc-sin", role: "TEACHER", schoolId: null }));
  assert.equal(r.status, 403);
});

test("admin puede elegir la escuela", async () => {
  const r = await get("/api/reportes/profesor?institucion=ra-esc-b", tAdmin());
  assert.equal(r.status, 200);
  assert.ok(traeB(r));
});
