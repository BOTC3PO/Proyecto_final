/**
 * PLAN-A §4 (fase 3) — regresión del ítem 38 ("los alumnos no ven
 * eventos del calendario").
 *
 * Causa raíz: `GET /api/calendario/unificado` filtraba las aulas del
 * alumno con `miembros: { some: { usuarioId, rolEnClase: "USER" } }`,
 * pero el enum real de `ClaseMiembro.rolEnClase` es
 * ADMIN|TEACHER|STUDENT (ver `ClassroomRoleSchema`, schema/aula.ts, y
 * todo lo que escribe el modelo: `/api/aulas/unirse`, `progreso.ts`,
 * `aulas.ts`, etc. — todos escriben "STUDENT", nunca "USER"). El
 * filtro nunca matcheaba, así que la lista de aulas del alumno para
 * el feed de calendario quedaba siempre vacía.
 *
 * El mismo mismatch existía en `limits-middleware.ts`,
 * `pedagogico.ts` (x2) y `reportes-v2.ts` — corregidos en el mismo
 * commit; este archivo cubre el camino de calendario (el reportado).
 */
import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";

let baseUrl: string;
let close: () => Promise<void>;

const SCHOOL = "esc-cal-alumno";
const ALUMNO = "alumno-cal";
const ALUMNO_AJENO = "alumno-cal-ajeno";
const AULA_ID = "aula-cal-alumno";

before(async () => {
  const { calendario } = await import("../../src/routes/calendario");
  const server = await startServer([calendario]);
  baseUrl = server.baseUrl;
  close = server.close;
});

after(async () => {
  if (close) await close();
});

beforeEach(() => {
  resetPrisma();
  seedUser({ id: ALUMNO, role: "USER", schoolId: SCHOOL });
  seedUser({ id: ALUMNO_AJENO, role: "USER", schoolId: SCHOOL });

  const now = new Date().toISOString();
  prisma.clase.rows.push({
    id: AULA_ID,
    escuelaId: SCHOOL,
    name: "Aula del alumno",
    grade: "5°",
    isDeleted: false,
    status: "ACTIVE",
    createdAt: now,
  });

  // Igual que `/api/aulas/unirse`: el alumno queda como ClaseMiembro
  // con `rolEnClase: "STUDENT"` (NUNCA "USER").
  prisma.claseMiembro.rows.push({
    claseId: AULA_ID,
    usuarioId: ALUMNO,
    rolEnClase: "STUDENT",
  });

  const today = new Date().toISOString().slice(0, 10);
  prisma.actividadAula.rows.push({
    id: "act-aula-cal-alumno",
    aulaId: AULA_ID,
    tipo: "clase",
    titulo: "Evento del aula del alumno",
    descripcion: null,
    fecha: today,
    fechaFin: null,
    createdBy: "test",
    createdAt: now,
    isDeleted: false,
  });
});

test("PLAN-A §4: alumno miembro (rolEnClase=STUDENT) ve los eventos de su aula en el feed unificado", async () => {
  const token = tokenFor({ id: ALUMNO, role: "USER", schoolId: SCHOOL });
  const res = await jsonRequest(baseUrl, "GET", "/api/calendario/unificado", { token });
  assert.equal(res.status, 200, JSON.stringify(res.body));
  const eventos = (res.body as { eventos: Array<{ aulaId: string; origen: string; titulo: string }> }).eventos;
  const aulaEventos = eventos.filter((e) => e.origen === "aula");
  assert.ok(
    aulaEventos.some((e) => e.aulaId === AULA_ID),
    "el alumno debe ver el evento de su aula (antes del fix la lista venía siempre vacía)"
  );
});

test("PLAN-A §4: alumno ajeno al aula NO ve sus eventos", async () => {
  const token = tokenFor({ id: ALUMNO_AJENO, role: "USER", schoolId: SCHOOL });
  const res = await jsonRequest(baseUrl, "GET", "/api/calendario/unificado", { token });
  assert.equal(res.status, 200);
  const eventos = (res.body as { eventos: Array<{ aulaId: string; origen: string }> }).eventos;
  const aulaEventos = eventos.filter((e) => e.origen === "aula");
  assert.equal(aulaEventos.length, 0, "un alumno que no es miembro del aula no debe ver sus eventos");
});
