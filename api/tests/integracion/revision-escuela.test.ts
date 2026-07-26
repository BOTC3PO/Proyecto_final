/**
 * PLAN-roles-v3 C — cola de revisión posterior de la escuela.
 *
 * Es revisión POSTERIOR, no un gate: el material se publica al toque. Lo que
 * se protege acá es el alcance — bajar contenido de otra escuela no puede
 * pasar — y que "bajar" saque de circulación sin borrar.
 */
import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";

const ESC_A = "esc-rev-a";
const ESC_B = "esc-rev-b";
const ADMIN_ESC = "admin-esc-a";
const PROFE_A = "profe-a";
const PROFE_B = "profe-b";

let baseUrl: string;
let close: () => Promise<void>;
const nowIso = () => new Date().toISOString();

before(async () => {
  const { revisionEscuela } = await import("../../src/routes/revision-escuela");
  const srv = await startServer([revisionEscuela]);
  baseUrl = srv.baseUrl;
  close = srv.close;
});
after(async () => { if (close) await close(); });

beforeEach(() => {
  resetPrisma();
  for (const id of [ESC_A, ESC_B]) {
    prisma.escuela.rows.push({ id, name: id, isDeleted: false, estadoVerificacion: "verificada", createdAt: nowIso() } as never);
  }
  seedUser({ id: ADMIN_ESC, role: "ADMIN_ESCUELA", schoolId: ESC_A });
  seedUser({ id: PROFE_A, role: "TEACHER", schoolId: ESC_A });
  seedUser({ id: PROFE_B, role: "TEACHER", schoolId: ESC_B });
  for (const [u, e] of [[ADMIN_ESC, ESC_A], [PROFE_A, ESC_A], [PROFE_B, ESC_B]] as const) {
    prisma.membresia.rows.push({ usuarioId: u, escuelaId: e, rol: "TEACHER", estado: "activa", fechaAlta: nowIso() } as never);
  }
  prisma.quiz.rows.push({ id: "quiz-a", ownerUserId: PROFE_A, title: "De la escuela A", isActive: true, updatedAt: nowIso(), createdAt: nowIso() } as never);
  prisma.quiz.rows.push({ id: "quiz-b", ownerUserId: PROFE_B, title: "De la escuela B", isActive: true, updatedAt: nowIso(), createdAt: nowIso() } as never);
  prisma.plantillaEjercicio.rows.push({ id: "pl-a", ownerUserId: PROFE_A, schoolId: ESC_A, nombre: "Plantilla A", visibility: "escuela", updatedAt: nowIso(), createdAt: nowIso() } as never);
  prisma.plantillaEjercicio.rows.push({ id: "pl-b", ownerUserId: PROFE_B, schoolId: ESC_B, nombre: "Plantilla B", visibility: "escuela", updatedAt: nowIso(), createdAt: nowIso() } as never);
});

const tk = () => tokenFor({ id: ADMIN_ESC, role: "ADMIN_ESCUELA" as never, schoolId: ESC_A });

test("la cola muestra sólo lo de la propia escuela", async () => {
  const res = await jsonRequest(baseUrl, "GET", "/api/escuela/revision", { token: tk() });
  assert.equal(res.status, 200, JSON.stringify(res.body));
  const body = res.body as { quizzes: Array<{ id: string }>; plantillas: Array<{ id: string }> };
  assert.deepEqual(body.quizzes.map((q) => q.id), ["quiz-a"]);
  assert.deepEqual(body.plantillas.map((p) => p.id), ["pl-a"]);
});

test("bajar un cuestionario lo saca de circulación sin borrarlo, y queda auditado", async () => {
  const res = await jsonRequest(baseUrl, "POST", "/api/escuela/revision/quiz/quiz-a/ocultar", {
    token: tk(),
    body: { motivo: "contenido duplicado" }
  });
  assert.equal(res.status, 200);
  const fila = prisma.quiz.rows.find((q) => q.id === "quiz-a");
  assert.ok(fila, "no se borra");
  assert.equal(fila?.isActive, false);
  const log = prisma.auditLog.rows.find((l) => l.action === "revision.quiz_ocultado");
  assert.equal(log?.actorId, ADMIN_ESC);
});

test("bajar una plantilla la vuelve privada", async () => {
  const res = await jsonRequest(baseUrl, "POST", "/api/escuela/revision/plantilla/pl-a/ocultar", { token: tk() });
  assert.equal(res.status, 200);
  assert.equal(prisma.plantillaEjercicio.rows.find((p) => p.id === "pl-a")?.visibility, "privada");
});

test("NO se puede bajar contenido de otra escuela", async () => {
  const q = await jsonRequest(baseUrl, "POST", "/api/escuela/revision/quiz/quiz-b/ocultar", { token: tk() });
  assert.equal(q.status, 403);
  assert.equal((q.body as { code?: string }).code, "FUERA_DE_ALCANCE");
  assert.notEqual(prisma.quiz.rows.find((x) => x.id === "quiz-b")?.isActive, false);

  const p = await jsonRequest(baseUrl, "POST", "/api/escuela/revision/plantilla/pl-b/ocultar", { token: tk() });
  assert.equal(p.status, 403);
  assert.equal(prisma.plantillaEjercicio.rows.find((x) => x.id === "pl-b")?.visibility, "escuela");
});

test("un alumno no entra a la cola", async () => {
  seedUser({ id: "alumno-rev", role: "USER", schoolId: ESC_A });
  const res = await jsonRequest(baseUrl, "GET", "/api/escuela/revision", {
    token: tokenFor({ id: "alumno-rev", role: "USER", schoolId: ESC_A })
  });
  assert.equal(res.status, 403);
});
