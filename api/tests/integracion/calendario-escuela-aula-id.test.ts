/**
 * FIX-CALENDARIO-B — Mejora B: un evento de escuela puede ser
 * global (aulaId null, comportamiento histórico) o acotado a UN
 * aula (aulaId = <id>). Decisión B sobre C (tabla puente M:N): el
 * caso real "varias secciones" vive en CalendarioAula/ActividadAula;
 * acá basta con global-o-un-aula. C es sobre-ingeniería; B es
 * extensible a C después sin perder datos si apareciera el M:N
 * real.
 *
 * Migración: 20260617000000_calendario_escuela_aula_id — columna
 * `aula_id` nullable, aditiva, no rompe eventos existentes
 * (quedan con aulaId null = global).
 *
 * Cubre:
 *  1. POST evento escuela sin aulaId → 201, evento es global.
 *  2. POST evento escuela con aulaId válido de la escuela → 201,
 *     evento es acotado, aulaId persistido en la respuesta.
 *  3. POST evento escuela con aulaId inexistente → 400.
 *  4. POST evento escuela con aulaId de otra escuela → 400.
 *  5. GET feed unificado: evento global visible para todos los
 *     miembros de la escuela.
 *  6. GET feed unificado: evento acotado visible para miembros del
 *     aula y para DIRECTIVO/ADMIN.
 *  7. GET feed unificado: evento acotado NO visible para usuarios
 *     de otras aulas de la misma escuela.
 *  8. Migración: eventos viejos (aulaId null) siguen siendo
 *     globales (compatibilidad hacia atrás).
 *  9. Evento escuela acotado a un aula de OTRA escuela: se filtra
 *     por escuelaId en la query, así que ni siquiera se trae.
 *
 * Ver `docs/qa/diagnostico_calendario.md` (sección "Mejora B").
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

// Escuela A — la del test.
const SCHOOL_A = "esc-A";
// Escuela B — para el test de rechazo de aula ajena.
const SCHOOL_B = "esc-B";

// Usuarios.
const DIRECTIVO = "dir-fcb";
const TEACHER_OWNER_5A = "teacher-owner-5A";
const STUDENT_5A = "student-5A";
const STUDENT_5B = "student-5B";
const TEACHER_TOR_5B = "teacher-tor-5B";

// Aulas.
const AULA_5A = "aula-5A";
const AULA_5B = "aula-5B";
const AULA_OTHER_SCHOOL = "aula-other-school";

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
  seedUser({ id: DIRECTIVO, role: "DIRECTIVO", schoolId: SCHOOL_A });
  seedUser({ id: TEACHER_OWNER_5A, role: "TEACHER", schoolId: SCHOOL_A });
  seedUser({ id: TEACHER_TOR_5B, role: "TEACHER", schoolId: SCHOOL_A });
  seedUser({ id: STUDENT_5A, role: "USER", schoolId: SCHOOL_A });
  seedUser({ id: STUDENT_5B, role: "USER", schoolId: SCHOOL_A });

  const now = new Date().toISOString();
  prisma.clase.rows.push(
    { id: AULA_5A, escuelaId: SCHOOL_A, name: "5°A", grade: "5°", isDeleted: false, status: "ACTIVE", createdBy: TEACHER_OWNER_5A, createdAt: now },
    { id: AULA_5B, escuelaId: SCHOOL_A, name: "5°B", grade: "5°", isDeleted: false, status: "ACTIVE", teacherOfRecord: TEACHER_TOR_5B, createdAt: now },
    { id: AULA_OTHER_SCHOOL, escuelaId: SCHOOL_B, name: "5°A OtraEscuela", grade: "5°", isDeleted: false, status: "ACTIVE", createdAt: now }
  );
  prisma.claseMiembro.rows.push(
    { claseId: AULA_5A, usuarioId: STUDENT_5A, rolEnClase: "STUDENT" },
    { claseId: AULA_5B, usuarioId: STUDENT_5B, rolEnClase: "STUDENT" }
  );
});

// ── POST /api/calendario/escuela ────────────────────────────

test("FIX-CALENDARIO-B: POST sin aulaId → 201 y evento global (comportamiento histórico)", async () => {
  const token = tokenFor({ id: DIRECTIVO, role: "DIRECTIVO", schoolId: SCHOOL_A });
  const res = await jsonRequest(baseUrl, "POST", "/api/calendario/escuela", {
    token,
    body: {
      tipo: "feriado",
      titulo: "Día de la Independencia",
      fechaInicio: "2026-07-09",
      fechaFin: "2026-07-09",
    },
  });
  assert.equal(res.status, 201);
  const body = res.body as { id: string; ok: boolean; aulaId: string | null };
  assert.equal(body.ok, true);
  assert.equal(body.aulaId, null, "sin aulaId → null en la respuesta");

  // Verificar persistencia.
  const stored = prisma.calendarioEscuela.rows.find((r) => r.id === body.id);
  assert.ok(stored, "el evento debe estar persistido");
  assert.equal(stored.aulaId, null, "aulaId debe ser null en la fila");
});

test("FIX-CALENDARIO-B: POST con aulaId válido de la escuela → 201, evento acotado, aulaId devuelto", async () => {
  const token = tokenFor({ id: DIRECTIVO, role: "DIRECTIVO", schoolId: SCHOOL_A });
  const res = await jsonRequest(baseUrl, "POST", "/api/calendario/escuela", {
    token,
    body: {
      tipo: "acto_escolar",
      titulo: "Acto 5°A",
      fechaInicio: "2026-09-01",
      fechaFin: "2026-09-01",
      aulaId: AULA_5A,
    },
  });
  assert.equal(res.status, 201);
  const body = res.body as { id: string; ok: boolean; aulaId: string | null };
  assert.equal(body.aulaId, AULA_5A, "el aulaId debe devolverse en la respuesta");

  const stored = prisma.calendarioEscuela.rows.find((r) => r.id === body.id);
  assert.ok(stored);
  assert.equal(stored.aulaId, AULA_5A, "aulaId debe persistirse en la fila");
});

test("FIX-CALENDARIO-B: POST con aulaId inexistente → 400", async () => {
  const token = tokenFor({ id: DIRECTIVO, role: "DIRECTIVO", schoolId: SCHOOL_A });
  const res = await jsonRequest(baseUrl, "POST", "/api/calendario/escuela", {
    token,
    body: {
      tipo: "acto_escolar",
      titulo: "Acto aula fantasma",
      fechaInicio: "2026-09-01",
      fechaFin: "2026-09-01",
      aulaId: "aula-que-no-existe",
    },
  });
  assert.equal(res.status, 400);
  assert.deepEqual(res.body, { error: "aulaId no existe" });
});

test("FIX-CALENDARIO-B: POST con aulaId de otra escuela → 400 (no se filtra aulas ajenas)", async () => {
  const token = tokenFor({ id: DIRECTIVO, role: "DIRECTIVO", schoolId: SCHOOL_A });
  const res = await jsonRequest(baseUrl, "POST", "/api/calendario/escuela", {
    token,
    body: {
      tipo: "acto_escolar",
      titulo: "Acto aula ajena",
      fechaInicio: "2026-09-01",
      fechaFin: "2026-09-01",
      aulaId: AULA_OTHER_SCHOOL,
    },
  });
  assert.equal(res.status, 400);
  assert.deepEqual(res.body, { error: "aulaId no pertenece a la escuela" });
});

// ── GET /api/calendario/unificado — visibilidad ──────────────

async function seedEvent(opts: {
  id: string;
  titulo: string;
  aulaId?: string | null;
  fechaInicio?: string;
  fechaFin?: string;
}): Promise<void> {
  prisma.calendarioEscuela.rows.push({
    id: opts.id,
    escuelaId: SCHOOL_A,
    aulaId: opts.aulaId ?? null,
    tipo: "acto_escolar",
    titulo: opts.titulo,
    descripcion: null,
    fechaInicio: opts.fechaInicio ?? "2026-09-01",
    fechaFin: opts.fechaFin ?? "2026-09-01",
    createdBy: DIRECTIVO,
    createdAt: new Date().toISOString(),
    isDeleted: false,
  });
}

async function getFeed(userId: string, role: string) {
  const token = tokenFor({ id: userId, role, schoolId: SCHOOL_A });
  return jsonRequest(baseUrl, "GET", "/api/calendario/unificado", { token });
}

test("FIX-CALENDARIO-B: feed unificado — evento global visible para todos los de la escuela", async () => {
  await seedEvent({ id: "cal-global", titulo: "Feriado global" });
  const res = await getFeed(STUDENT_5A, "USER");
  assert.equal(res.status, 200);
  const eventos = (res.body as { eventos: Array<{ id: string; aulaId?: string }> }).eventos;
  assert.ok(eventos.some((e) => e.id === "cal-global"), "STUDENT_5A ve el evento global");
  const res2 = await getFeed(STUDENT_5B, "USER");
  const eventos2 = (res2.body as { eventos: Array<{ id: string }> }).eventos;
  assert.ok(eventos2.some((e) => e.id === "cal-global"), "STUDENT_5B también ve el evento global");
  const res3 = await getFeed(DIRECTIVO, "DIRECTIVO");
  const eventos3 = (res3.body as { eventos: Array<{ id: string }> }).eventos;
  assert.ok(eventos3.some((e) => e.id === "cal-global"), "DIRECTIVO ve el evento global");
});

test("FIX-CALENDARIO-B: feed unificado — evento acotado a 5°A visible para miembros de 5°A", async () => {
  await seedEvent({ id: "cal-5A", titulo: "Acto 5A", aulaId: AULA_5A });
  const res = await getFeed(STUDENT_5A, "USER");
  assert.equal(res.status, 200);
  const eventos = (res.body as { eventos: Array<{ id: string; aulaId?: string; aulaNombre?: string }> }).eventos;
  const ev = eventos.find((e) => e.id === "cal-5A");
  assert.ok(ev, "STUDENT_5A ve el evento acotado a su aula");
  assert.equal(ev.aulaId, AULA_5A);
  assert.equal(ev.aulaNombre, "5°A", "aulaNombre se resuelve para acotados");
});

test("FIX-CALENDARIO-B: feed unificado — evento acotado a 5°A NO visible para miembro de 5°B", async () => {
  await seedEvent({ id: "cal-5A-only", titulo: "Solo 5A", aulaId: AULA_5A });
  const res = await getFeed(STUDENT_5B, "USER");
  const eventos = (res.body as { eventos: Array<{ id: string }> }).eventos;
  assert.ok(
    !eventos.some((e) => e.id === "cal-5A-only"),
    "STUDENT_5B (miembro de 5°B) NO debe ver un evento acotado a 5°A",
  );
});

test("FIX-CALENDARIO-B: feed unificado — evento acotado visible para TEACHER owner del aula", async () => {
  await seedEvent({ id: "cal-5A-acto", titulo: "Acto 5A", aulaId: AULA_5A });
  const res = await getFeed(TEACHER_OWNER_5A, "TEACHER");
  const eventos = (res.body as { eventos: Array<{ id: string }> }).eventos;
  assert.ok(eventos.some((e) => e.id === "cal-5A-acto"), "TEACHER_OWNER_5A ve el evento de su aula");
});

test("FIX-CALENDARIO-B: feed unificado — DIRECTIVO ve tanto globales como acotados", async () => {
  await seedEvent({ id: "cal-global-2", titulo: "Feriado" });
  await seedEvent({ id: "cal-5A-acto-2", titulo: "Acto 5A", aulaId: AULA_5A });
  await seedEvent({ id: "cal-5B-acto", titulo: "Acto 5B", aulaId: AULA_5B });
  const res = await getFeed(DIRECTIVO, "DIRECTIVO");
  const eventos = (res.body as { eventos: Array<{ id: string }> }).eventos;
  assert.ok(eventos.some((e) => e.id === "cal-global-2"), "DIRECTIVO ve el global");
  assert.ok(eventos.some((e) => e.id === "cal-5A-acto-2"), "DIRECTIVO ve el acotado a 5°A");
  assert.ok(eventos.some((e) => e.id === "cal-5B-acto"), "DIRECTIVO ve el acotado a 5°B");
});

// ── Compatibilidad hacia atrás ──────────────────────────────

test("FIX-CALENDARIO-B: migración — eventos viejos con aulaId null siguen siendo globales", async () => {
  // Simular un evento pre-migración: persistido con aulaId null.
  prisma.calendarioEscuela.rows.push({
    id: "cal-legacy",
    escuelaId: SCHOOL_A,
    // FIX-CALENDARIO-B: nullable, default null. Eventos viejos
    // creados antes de la migración quedan con aulaId = null.
    aulaId: null,
    tipo: "feriado",
    titulo: "Feriado pre-migración",
    descripcion: null,
    fechaInicio: "2026-08-01",
    fechaFin: "2026-08-01",
    createdBy: "alguien",
    createdAt: "2025-01-01T00:00:00.000Z",
    isDeleted: false,
  });
  const res = await getFeed(STUDENT_5A, "USER");
  const eventos = (res.body as { eventos: Array<{ id: string; aulaId?: string }> }).eventos;
  const ev = eventos.find((e) => e.id === "cal-legacy");
  assert.ok(ev, "el evento legacy debe verse para todos los de la escuela");
  assert.equal(ev.aulaId, undefined, "el evento legacy no tiene aulaId en el response (global)");
});
