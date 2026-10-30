/**
 * Los miembros de la escuela salen de las membresías activas (2026-10-28).
 *
 * Antes se filtraba por `usuarios.escuela_id`, que es la escuela ACTIVA del usuario: un docente de dos
 * escuelas desaparecía de la lista de la otra, y el panel del directivo mostraba 0 alumnos y 0 docentes.
 */
process.env.NODE_ENV = "test";

import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";

const ESC = "esc-miembros";
const OTRA = "esc-otra";
let baseUrl: string;
let close: () => Promise<void>;
const nowIso = () => new Date().toISOString();

before(async () => {
  const { enterprise } = await import("../../src/routes/enterprise");
  const srv = await startServer([enterprise]);
  baseUrl = srv.baseUrl;
  close = srv.close;
});
after(async () => {
  if (close) await close();
});

beforeEach(() => {
  resetPrisma();
  for (const id of [ESC, OTRA]) {
    prisma.escuela.rows.push({ id, name: id, isDeleted: false, estadoVerificacion: "verificada", createdAt: nowIso() } as never);
  }
  seedUser({ id: "dir", role: "DIRECTIVO", schoolId: ESC });
  // Docente de las dos escuelas, con la otra como escuela activa.
  seedUser({ id: "doc", role: "TEACHER", schoolId: OTRA });
  // Alumno sin escuela activa cargada: solo tiene la membresía.
  seedUser({ id: "alu", role: "USER", schoolId: null });
  seedUser({ id: "baja", role: "USER", schoolId: ESC });
  const mem = (usuarioId: string, escuelaId: string, rol: string, estado = "activa") =>
    prisma.membresia.rows.push({ usuarioId, escuelaId, rol, estado, fechaAlta: nowIso() } as never);
  mem("dir", ESC, "DIRECTIVO");
  mem("doc", ESC, "TEACHER");
  mem("doc", OTRA, "TEACHER");
  mem("alu", ESC, "STUDENT");
  mem("baja", ESC, "STUDENT", "inactiva");
});

const comoDirectivo = (ruta: string) =>
  jsonRequest(baseUrl, "GET", ruta, { token: tokenFor({ id: "dir", role: "DIRECTIVO", schoolId: ESC }) });

test("GET /api/enterprise/miembros lista a todos los que tienen membresía activa en la escuela", async () => {
  const r = await comoDirectivo("/api/enterprise/miembros");
  assert.equal(r.status, 200, JSON.stringify(r.body));
  const staff = (r.body as { staff: Array<{ id: string; role: string }> }).staff;
  const porId = Object.fromEntries(staff.map((m) => [m.id, m.role]));
  assert.equal(porId.doc, "TEACHER", "el docente aparece aunque su escuela activa sea otra");
  assert.equal(porId.alu, "USER", "la membresía de alumno se informa con el rol USER");
  assert.equal(porId.dir, "DIRECTIVO");
  assert.equal(porId.baja, undefined, "una membresía inactiva no cuenta");
});
