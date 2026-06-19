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
import { ESPEJO_TIPO_CUENTA } from "../../src/lib/provisionar-espejo";

// Routers e infraestructura bajo prueba (importados después de los stubs).
import { aulas } from "../../src/routes/aulas";
import { progreso } from "../../src/routes/progreso";
import { profesor } from "../../src/routes/profesor";
import {
  getEspejoUserIds,
  excluirEspejos,
  excluirEspejosDeIds,
  whereExcluirEspejos,
} from "../../src/lib/espejo-filtro";
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
    prisma.claseMiembro.rows.push({ claseId: opts.aulaId, usuarioId: opts.espejoId, rolEnClase: "STUDENT" });
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

test("FASE 4 (helper): getEspejoUserIds identifica solo a los espejos", async () => {
  resetPrisma();
  seedUser({ id: "real-1", role: "USER", schoolId: ESC });
  seedUser({ id: "esp-1", role: "USER", schoolId: ESC, tipoCuenta: ESPEJO_TIPO_CUENTA });
  seedUser({ id: "esp-2", role: "USER", schoolId: ESC, tipoCuenta: ESPEJO_TIPO_CUENTA });

  const all = await getEspejoUserIds();
  assert.ok(all.has("esp-1"));
  assert.ok(all.has("esp-2"));
  assert.ok(!all.has("real-1"));

  // Acotado a candidatos.
  const scoped = await getEspejoUserIds(["real-1", "esp-1"]);
  assert.deepEqual([...scoped].sort(), ["esp-1"]);

  // Candidatos vacíos → set vacío sin tocar DB.
  const none = await getEspejoUserIds([]);
  assert.equal(none.size, 0);
});

test("FASE 4 (helper): excluirEspejos / excluirEspejosDeIds descartan espejos", async () => {
  resetPrisma();
  seedUser({ id: "real-1", role: "USER", schoolId: ESC });
  seedUser({ id: "esp-1", role: "USER", schoolId: ESC, tipoCuenta: ESPEJO_TIPO_CUENTA });

  const rows = await excluirEspejos([
    { usuarioId: "real-1", extra: 1 },
    { usuarioId: "esp-1", extra: 2 },
  ]);
  assert.deepEqual(rows.map((r) => r.usuarioId), ["real-1"]);

  const ids = await excluirEspejosDeIds(["real-1", "esp-1", "real-1"]);
  assert.deepEqual(ids, ["real-1", "real-1"]);
});

test("FASE 4 (helper): whereExcluirEspejos devuelve {} si no hay espejos", async () => {
  resetPrisma();
  seedUser({ id: "real-1", role: "USER", schoolId: ESC });
  const w = await whereExcluirEspejos();
  assert.deepEqual(w, {});
});

test("FASE 4 (helper): whereExcluirEspejos arma notIn cuando hay espejos", async () => {
  resetPrisma();
  seedUser({ id: "esp-1", role: "USER", schoolId: ESC, tipoCuenta: ESPEJO_TIPO_CUENTA });
  const w = await whereExcluirEspejos();
  assert.deepEqual(w, { usuarioId: { notIn: ["esp-1"] } });
});

// ─── B. Endpoint de inscripción ─────────────────────────────────────────────

test("FASE 4: POST /usar-como-alumno provisiona e inscribe el espejo (201)", async () => {
  resetPrisma();
  const teacherId = randomUUID();
  const aulaId = "aula-insc";
  seedAulaConAlumnos({ aulaId, teacherId, studentIds: [] });
  const token = tokenFor({ id: teacherId, role: "TEACHER", roles: ["TEACHER"], schoolId: ESC });

  const res = await jsonRequest(baseUrl, "POST", `/api/aulas/${aulaId}/usar-como-alumno`, { token, body: {} });
  assert.equal(res.status, 201);
  const body = res.body as Record<string, unknown>;
  assert.equal(body.ok, true);
  assert.equal(body.aulaId, aulaId);
  const espejoId = body.espejoId as string;
  assert.ok(espejoId, "devuelve espejoId");

  // El espejo quedó inscripto como STUDENT.
  const miembro = prisma.claseMiembro.rows.find(
    (m) => m.claseId === aulaId && m.usuarioId === espejoId && m.rolEnClase === "STUDENT"
  );
  assert.ok(miembro, "el espejo es ClaseMiembro STUDENT");

  // Y el usuario espejo tiene el marcador tipoCuenta.
  const espejoUser = prisma.usuario.rows.find((u) => u.id === espejoId);
  assert.equal(espejoUser?.tipoCuenta, ESPEJO_TIPO_CUENTA);
});

test("FASE 4: POST /usar-como-alumno es idempotente (200 alreadyEnrolled)", async () => {
  resetPrisma();
  const teacherId = randomUUID();
  const aulaId = "aula-idem";
  seedAulaConAlumnos({ aulaId, teacherId, studentIds: [] });
  const token = tokenFor({ id: teacherId, role: "TEACHER", roles: ["TEACHER"], schoolId: ESC });

  const r1 = await jsonRequest(baseUrl, "POST", `/api/aulas/${aulaId}/usar-como-alumno`, { token, body: {} });
  assert.equal(r1.status, 201);
  const r2 = await jsonRequest(baseUrl, "POST", `/api/aulas/${aulaId}/usar-como-alumno`, { token, body: {} });
  assert.equal(r2.status, 200);
  assert.equal((r2.body as Record<string, unknown>).alreadyEnrolled, true);

  // Una sola fila de inscripción del espejo.
  const espejoId = (r1.body as Record<string, unknown>).espejoId as string;
  const filas = prisma.claseMiembro.rows.filter(
    (m) => m.claseId === aulaId && m.usuarioId === espejoId
  );
  assert.equal(filas.length, 1);
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
