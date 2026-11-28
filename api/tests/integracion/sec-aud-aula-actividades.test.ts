/**
 * Auditoría 11/2026 — /api/aula/actividades. Alta y baja solo pedían rol docente: un docente de otra escuela
 * agregaba o borraba actividades del calendario de cualquier aula. Ahora siguen el criterio de calendario.ts.
 */
process.env.NODE_ENV = "test";

import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";

let baseUrl: string;
let close: () => Promise<void>;
const now = () => new Date().toISOString();

before(async () => {
  const { aulaFeed } = await import("../../src/routes/aula-feed");
  const s = await startServer([aulaFeed]);
  baseUrl = s.baseUrl;
  close = s.close;
});
after(async () => { if (close) await close(); });

beforeEach(() => {
  resetPrisma();
  seedUser({ id: "af-doc-a", role: "TEACHER", schoolId: "af-esc-a" });
  seedUser({ id: "af-doc-b", role: "TEACHER", schoolId: "af-esc-b" });
  for (const [id, esc, own] of [["af-aula-a", "af-esc-a", "af-doc-a"], ["af-aula-b", "af-esc-b", "af-doc-b"]]) {
    prisma.clase.rows.push({ id, escuelaId: esc, name: id, grade: "5", isDeleted: false, status: "ACTIVE", createdBy: own, createdAt: now() } as never);
    prisma.claseMiembro.rows.push({ claseId: id, usuarioId: own, rolEnClase: "TEACHER" } as never);
  }
  prisma.actividadAula.rows.push({ id: "af-act-b", aulaId: "af-aula-b", tipo: "evaluacion", titulo: "Prueba", descripcion: null, fecha: "2026-12-05", createdBy: "af-doc-b", createdAt: now(), isDeleted: false, deletedAt: null } as never);
});

const tA = () => tokenFor({ id: "af-doc-a", role: "TEACHER", schoolId: "af-esc-a" });
const tB = () => tokenFor({ id: "af-doc-b", role: "TEACHER", schoolId: "af-esc-b" });
const body = (classroomId: string) => ({ classroomId, tipo: "evaluacion", titulo: "Nueva", fecha: "2026-12-01" });

test("un docente de otra escuela no agrega actividades a un aula ajena", async () => {
  const r = await jsonRequest(baseUrl, "POST", "/api/aula/actividades", { token: tA(), body: body("af-aula-b") });
  assert.equal(r.status, 403);
  assert.equal(prisma.actividadAula.rows.length, 1);
});

test("el docente del aula sí", async () => {
  const r = await jsonRequest(baseUrl, "POST", "/api/aula/actividades", { token: tB(), body: body("af-aula-b") });
  assert.equal(r.status, 201);
});

test("borrar: solo quien la creó", async () => {
  const ajeno = await jsonRequest(baseUrl, "DELETE", "/api/aula/actividades/af-act-b", { token: tA() });
  assert.equal(ajeno.status, 403);
  assert.equal((prisma.actividadAula.rows[0] as any).isDeleted, false);
  const propio = await jsonRequest(baseUrl, "DELETE", "/api/aula/actividades/af-act-b", { token: tB() });
  assert.equal(propio.status, 200);
  assert.equal((prisma.actividadAula.rows[0] as any).isDeleted, true);
});
