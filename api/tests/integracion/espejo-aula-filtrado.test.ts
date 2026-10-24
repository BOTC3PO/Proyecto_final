/**
 * FASE 4 — inscripción del espejo en aula real + filtrado por rol.
 *
 * Cubre:
 *   A. Helper central `espejo-filtro` (getEspejoUserIds / excluirEspejos
 *      / excluirEspejosDeIds / whereExcluirEspejos).
 *   B. Endpoint de inscripción `POST /api/aulas/:id/usar-como-alumno`:
 *      provisiona+inscribe el espejo, idempotencia, authz.
 *   C. Roster/analíticas: con N alumnos reales + 1 espejo, la matriz de
 *      progreso y el panel docente devuelven N (no N+1).
 *   D. El espejo, autenticado, ve los módulos del aula (su propia vista
 *      NO se filtra).
 *   E. La cuenta staff real sigue listada como staff del aula.
 *   F. Facturación enterprise: el espejo no se cuenta como alumno activo.
 */

import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import { randomUUID } from "node:crypto";
import {
  prisma,
  resetPrisma,
  seedUser,
  seedVinculacion,
  tokenFor,
  startServer,
  jsonRequest,
} from "./_helpers/setup";
// PLAN-multirol Fase 3 — el marcador de cuenta espejo ya no existe en el
// código; se conserva acá sólo para seedear filas históricas y comprobar
// que el filtrado ahora depende de `ClaseMiembro.esPrueba`, no de la cuenta.
const ESPEJO_TIPO_CUENTA = "ESPEJO_ALUMNO";

// Routers e infraestructura bajo prueba (importados después de los stubs).
import { aulas } from "../../src/routes/aulas";
import { progreso } from "../../src/routes/progreso";
import { profesor } from "../../src/routes/profesor";
import { fetchActiveStudentSummary } from "../../src/lib/enterprise-billing";

const ESC = "esc-fase4";
let baseUrl: string;
let close: () => Promise<void>;

before(async () => {
  const srv = await startServer([aulas, progreso, profesor]);
  baseUrl = srv.baseUrl;
  close = srv.close;
});

after(async () => {
  if (close) await close();
});

beforeEach(() => {
  resetPrisma();
});

// ─── Helpers de seed ────────────────────────────────────────────────────────

/**
 * Aula con 1 docente (dueño + miembro TEACHER), N alumnos reales y,
 * opcionalmente, 1 espejo inscripto como STUDENT.
 */
function seedAulaConAlumnos(opts: {
  aulaId: string;
  teacherId: string;
  studentIds: string[];
  espejoId?: string;
  moduloIds?: string[];
}) {
  prisma.clase.rows.push({
    id: opts.aulaId,
    escuelaId: ESC,
    name: "Aula Test",
    grade: "5°",
    isDeleted: false,
    status: "ACTIVE",
    createdBy: opts.teacherId,
    teacherId: opts.teacherId,
    createdAt: new Date().toISOString(),
  });
  // Docente: dueño + miembro TEACHER.
  seedUser({ id: opts.teacherId, role: "TEACHER", roles: ["TEACHER"], schoolId: ESC, fullName: "Profe" });
  prisma.claseMiembro.rows.push({ claseId: opts.aulaId, usuarioId: opts.teacherId, rolEnClase: "TEACHER" });
  // Alumnos reales.
  for (const sid of opts.studentIds) {
    seedUser({ id: sid, role: "USER", roles: ["USER"], schoolId: ESC, fullName: `Alumno ${sid}` });
    prisma.claseMiembro.rows.push({ claseId: opts.aulaId, usuarioId: sid, rolEnClase: "STUDENT" });
  }
  // Espejo inscripto como STUDENT (lo que crea la FASE 4).
  if (opts.espejoId) {
    seedUser({
      id: opts.espejoId,
      role: "USER",
      roles: ["USER"],
      schoolId: ESC,
      fullName: "Espejo de Profe",
      tipoCuenta: ESPEJO_TIPO_CUENTA,
    });
    // PLAN-multirol Fase 3 — lo que marca "esto no es un alumno real" pasó
    // de la CUENTA (tipoCuenta) a la INSCRIPCIÓN (esPrueba).
    prisma.claseMiembro.rows.push({ claseId: opts.aulaId, usuarioId: opts.espejoId, rolEnClase: "STUDENT", esPrueba: true });
  }
  // Módulos asignados.
  for (const mid of opts.moduloIds ?? []) {
    prisma.modulo.rows.push({
      id: mid,
      titulo: `Mod ${mid}`,
      visibility: "privado",
      schoolId: null,
      ownerUserId: opts.teacherId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
    prisma.claseModulo.rows.push({ claseId: opts.aulaId, moduloId: mid, assignedAt: new Date().toISOString(), required: false });
  }
}

// ─── A. Helper central ──────────────────────────────────────────────────────





// ─── B. Endpoint de inscripción ─────────────────────────────────────────────

test("PLAN-multirol: POST /usar-como-alumno inscribe al PROPIO docente con esPrueba (201)", async () => {
  const TEACHER = "doc-usar-como-alumno";
  const AULA = "aula-usar-como-alumno";
  seedAulaConAlumnos({ aulaId: AULA, teacherId: TEACHER, studentIds: [] });
  const token = tokenFor({ id: TEACHER, role: "TEACHER", schoolId: ESC });
  const r = await jsonRequest(baseUrl, "POST", `/api/aulas/${AULA}/usar-como-alumno`, { token });
  assert.equal(r.status, 201, JSON.stringify(r.body));

  const fila = prisma.claseMiembro.rows.find(
    (m) => m.claseId === AULA && m.usuarioId === TEACHER && m.rolEnClase === "STUDENT"
  );
  assert.ok(fila, "se inscribe la MISMA cuenta, no una espejo");
  assert.equal(fila?.esPrueba, true, "marcada como inscripción de prueba");
  assert.equal(
    prisma.usuario.rows.filter((u) => u.id === TEACHER).length,
    1,
    "no se crea ninguna cuenta nueva"
  );
  // Y le queda la membresía STUDENT que le permite elegir el rol alumno.
  assert.ok(
    prisma.membresia.rows.some((m) => m.usuarioId === TEACHER && m.rol === "STUDENT" && m.estado === "activa")
  );
});

test("PLAN-multirol: POST /usar-como-alumno es idempotente (200 alreadyEnrolled)", async () => {
  const TEACHER = "doc-idempotente";
  const AULA = "aula-idempotente";
  seedAulaConAlumnos({ aulaId: AULA, teacherId: TEACHER, studentIds: [] });
  const token = tokenFor({ id: TEACHER, role: "TEACHER", schoolId: ESC });
  await jsonRequest(baseUrl, "POST", `/api/aulas/${AULA}/usar-como-alumno`, { token });
  const r2 = await jsonRequest(baseUrl, "POST", `/api/aulas/${AULA}/usar-como-alumno`, { token });
  assert.equal(r2.status, 200);
  assert.equal((r2.body as { alreadyEnrolled?: boolean }).alreadyEnrolled, true);
});

test("FASE 4: POST /usar-como-alumno en aula ajena → 403", async () => {
  resetPrisma();
  const ownerId = randomUUID();
  const intrusoId = randomUUID();
  const aulaId = "aula-ajena";
  seedAulaConAlumnos({ aulaId, teacherId: ownerId, studentIds: [] });
  // Un TEACHER de otra escuela, sin vínculo con el aula.
  seedUser({ id: intrusoId, role: "TEACHER", roles: ["TEACHER"], schoolId: "otra-esc", fullName: "Intruso" });
  const token = tokenFor({ id: intrusoId, role: "TEACHER", roles: ["TEACHER"], schoolId: "otra-esc" });

  const res = await jsonRequest(baseUrl, "POST", `/api/aulas/${aulaId}/usar-como-alumno`, { token, body: {} });
  assert.equal(res.status, 403);
});

test("FASE 4: POST /usar-como-alumno en aula inexistente → 404", async () => {
  resetPrisma();
  const teacherId = randomUUID();
  seedUser({ id: teacherId, role: "TEACHER", roles: ["TEACHER"], schoolId: ESC });
  const token = tokenFor({ id: teacherId, role: "TEACHER", roles: ["TEACHER"], schoolId: ESC });
  const res = await jsonRequest(baseUrl, "POST", `/api/aulas/no-existe/usar-como-alumno`, { token, body: {} });
  assert.equal(res.status, 404);
});

// ─── C. Roster/analíticas excluyen al espejo ────────────────────────────────

test("FASE 4: la matriz de progreso devuelve N alumnos (no N+1 con el espejo)", async () => {
  resetPrisma();
  const teacherId = randomUUID();
  const aulaId = "aula-matriz";
  const studentIds = ["al-1", "al-2", "al-3"];
  const espejoId = "espejo-x";
  seedAulaConAlumnos({ aulaId, teacherId, studentIds, espejoId, moduloIds: ["m1"] });
  const token = tokenFor({ id: teacherId, role: "TEACHER", roles: ["TEACHER"], schoolId: ESC });

  const res = await jsonRequest(baseUrl, "GET", `/api/progreso/aula-matriz?aulaId=${aulaId}`, { token });
  assert.equal(res.status, 200);
  const body = res.body as { alumnos: Array<{ id: string }> };
  assert.equal(body.alumnos.length, 3, "3 alumnos reales, el espejo excluido");
  const ids = body.alumnos.map((a) => a.id);
  assert.ok(!ids.includes(espejoId), "el espejo no está en la matriz");
  for (const sid of studentIds) assert.ok(ids.includes(sid));
});

test("FASE 4: el panel docente cuenta N estudiantes activos (sin el espejo)", async () => {
  resetPrisma();
  const teacherId = randomUUID();
  const aulaId = "aula-panel";
  seedAulaConAlumnos({ aulaId, teacherId, studentIds: ["al-1", "al-2"], espejoId: "espejo-y" });
  const token = tokenFor({ id: teacherId, role: "TEACHER", roles: ["TEACHER"], schoolId: ESC });

  const res = await jsonRequest(baseUrl, "GET", `/api/profesor/menu`, { token });
  assert.equal(res.status, 200);
  const body = res.body as { activeStudents: number };
  assert.equal(body.activeStudents, 2, "2 alumnos reales; el espejo no se cuenta");
});

// ─── D. El espejo SÍ ve su propio contenido ─────────────────────────────────

test("FASE 4: el espejo autenticado ve los módulos del aula (su vista no se filtra)", async () => {
  resetPrisma();
  const teacherId = randomUUID();
  const aulaId = "aula-vista";
  const espejoId = "espejo-vista";
  seedAulaConAlumnos({ aulaId, teacherId, studentIds: ["al-1"], espejoId, moduloIds: ["m1", "m2"] });
  const espejoToken = tokenFor({ id: espejoId, role: "USER", roles: ["USER"], schoolId: ESC });

  const res = await jsonRequest(baseUrl, "GET", `/api/aulas/${aulaId}/modulos`, { token: espejoToken });
  assert.equal(res.status, 200);
  const body = res.body as { items: Array<{ moduloId: string }> };
  assert.equal(body.items.length, 2, "el espejo ve los 2 módulos del aula");
});

// ─── E. La cuenta staff real sigue visible como staff ───────────────────────

test("FASE 4: la cuenta staff real sigue siendo TEACHER del aula (no se filtra)", async () => {
  resetPrisma();
  const teacherId = randomUUID();
  const aulaId = "aula-staff";
  seedAulaConAlumnos({ aulaId, teacherId, studentIds: ["al-1"], espejoId: "espejo-z" });

  // El docente sigue figurando como miembro TEACHER (la membresía staff
  // no se toca: el filtro es por tipoCuenta del espejo, no por staff).
  const teacherMember = prisma.claseMiembro.rows.find(
    (m) => m.claseId === aulaId && m.usuarioId === teacherId && m.rolEnClase === "TEACHER"
  );
  assert.ok(teacherMember, "el docente real sigue como TEACHER del aula");

  // Y NO está marcado como espejo.
  const teacherUser = prisma.usuario.rows.find((u) => u.id === teacherId);
  assert.notEqual(teacherUser?.tipoCuenta, ESPEJO_TIPO_CUENTA);
});

// ─── F. Facturación enterprise excluye al espejo ────────────────────────────

test("FASE 4: el conteo de alumnos activos para facturación excluye al espejo", async () => {
  resetPrisma();
  const teacherId = randomUUID();
  const aulaId = "aula-billing";
  seedAulaConAlumnos({ aulaId, teacherId, studentIds: ["al-1", "al-2", "al-3"], espejoId: "espejo-bill" });

  const summary = await fetchActiveStudentSummary(ESC);
  assert.equal(summary.activeStudentCount, 3, "solo los 3 alumnos reales se facturan");
  const ids = summary.students.map((s) => s.userId);
  assert.ok(!ids.includes("espejo-bill"), "el espejo no aparece en la facturación");
});
