/**
 * Auditoría 11/2026 — GET /api/sync/pull devolvía todos los avisos de la escuela, también los dirigidos solo a
 * docentes o a padres. Ahora usa el mismo filtro de destino que el listado de avisos.
 */
process.env.NODE_ENV = "test";

import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";

const ESC = "sa-esc";
const AULA = "sa-aula";
let baseUrl: string;
let close: () => Promise<void>;
before(async () => {
  const { sync } = await import("../../src/routes/sync");
  const s = await startServer([sync]);
  baseUrl = s.baseUrl;
  close = s.close;
});
after(async () => { if (close) await close(); });

beforeEach(() => {
  resetPrisma();
  seedUser({ id: "sa-alu", role: "STUDENT", roles: ["USER"], schoolId: ESC });
  seedUser({ id: "sa-prof", role: "TEACHER", schoolId: ESC });
  prisma.clase.rows.push({ id: AULA, escuelaId: ESC, name: "A", isDeleted: false, status: "ACTIVE" } as never);
  prisma.claseMiembro.rows.push({ claseId: AULA, usuarioId: "sa-alu", rolEnClase: "STUDENT" } as never, { claseId: AULA, usuarioId: "sa-prof", rolEnClase: "TEACHER" } as never);
  prisma.membresia.rows.push({ usuarioId: "sa-alu", escuelaId: ESC, rol: "STUDENT", estado: "activa", fechaAlta: new Date().toISOString() } as never);
  const now = new Date().toISOString();
  for (const d of ["todos", "alumnos", "profesores", "padres"]) {
    prisma.aviso.rows.push({ id: `sa-${d}`, escuelaId: ESC, autorId: "sa-prof", autorRol: "TEACHER", titulo: d, cuerpo: d, destino: d, createdAt: now } as never);
  }
});

const ids = (r: { body?: unknown }) => ((r.body as { avisos?: Array<{ id: string }> }).avisos ?? []).map((a) => a.id).sort();

test("un alumno recibe solo los avisos para todos y para alumnos", async () => {
  const r = await jsonRequest(baseUrl, "GET", `/api/sync/pull/${AULA}`, { token: tokenFor({ id: "sa-alu", role: "STUDENT", roles: ["USER"], schoolId: ESC }) });
  assert.equal(r.status, 200, JSON.stringify(r.body));
  assert.deepEqual(ids(r), ["sa-alumnos", "sa-todos"]);
});

test("el docente autor ve los suyos", async () => {
  const r = await jsonRequest(baseUrl, "GET", `/api/sync/pull/${AULA}`, { token: tokenFor({ id: "sa-prof", role: "TEACHER", schoolId: ESC }) });
  assert.equal(r.status, 200);
  assert.deepEqual(ids(r), ["sa-alumnos", "sa-padres", "sa-profesores", "sa-todos"]);
});
