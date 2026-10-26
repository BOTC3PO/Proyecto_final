/**
 * "Niveles por aula con mapa de flujo" — desbloqueo manual por docente.
 * Un docente dueño del módulo puede saltear el candado por dependencias
 * para UN alumno puntual o para TODA un aula. Mismo criterio de
 * autorización que "invitados" (sólo el dueño), reusando sus helpers.
 *
 * Cubre:
 *  (a) Dueño crea override individual → 201.
 *  (b) Dueño crea override por aula → 201.
 *  (c) usuarioId Y aulaId juntos (o ninguno) → 400.
 *  (d) Otro docente (no dueño) → 403.
 *  (e) GET lista los overrides con nombres resueltos.
 *  (f) DELETE revoca.
 *  (g) El override individual desbloquea POST /api/quiz-attempts de
 *      verdad para ese alumno (no sólo la fila en la tabla).
 *  (h) El override por aula desbloquea para cualquier miembro de esa aula.
 */
import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";

let baseUrl: string;
let close: () => Promise<void>;

const DOCENTE_ID = "docente-desbloqueo";
const OTRO_DOCENTE_ID = "otro-docente-desbloqueo";
const ALUMNO_ID = "alumno-desbloqueo";
const OTRO_ALUMNO_ID = "otro-alumno-desbloqueo";
const ESCUELA_ID = "escuela-desbloqueo";
const AULA_ID = "aula-desbloqueo";
const MOD_ID = "mod-desbloqueo";
const MOD_PREVIO = "mod-desbloqueo-previo";

before(async () => {
  const { modulos } = await import("../../src/routes/modulos");
  const { quizAttempts } = await import("../../src/routes/quiz-attempts");
  const server = await startServer([modulos, quizAttempts]);
  baseUrl = server.baseUrl;
  close = server.close;
});

after(async () => {
  if (close) await close();
});

beforeEach(() => {
  resetPrisma();
  seedUser({ id: DOCENTE_ID, role: "TEACHER", schoolId: ESCUELA_ID });
  seedUser({ id: OTRO_DOCENTE_ID, role: "TEACHER", schoolId: ESCUELA_ID });
  seedUser({ id: ALUMNO_ID, role: "USER", schoolId: ESCUELA_ID });
  seedUser({ id: OTRO_ALUMNO_ID, role: "USER", schoolId: ESCUELA_ID });
  prisma.modulo.rows.push({
    id: MOD_PREVIO,
    slug: `${MOD_PREVIO}-${Date.now()}`,
    titulo: "Módulo previo",
    descripcion: "",
    visibility: "publico",
    schoolId: ESCUELA_ID,
    ownerUserId: DOCENTE_ID,
    dependencies: null,
    isDeleted: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
  prisma.modulo.rows.push({
    id: MOD_ID,
    slug: `${MOD_ID}-${Date.now()}`,
    titulo: "Módulo bloqueado",
    descripcion: "",
    visibility: "publico",
    schoolId: ESCUELA_ID,
    ownerUserId: DOCENTE_ID,
    dependencies: JSON.stringify([{ id: MOD_PREVIO, type: "required" }]),
    isDeleted: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
  prisma.clase.rows.push({
    id: AULA_ID,
    escuelaId: ESCUELA_ID,
    name: "Aula desbloqueo",
    grade: "1°",
    isDeleted: false,
    status: "ACTIVE",
    createdBy: DOCENTE_ID,
    createdAt: new Date().toISOString(),
  });
  prisma.claseMiembro.rows.push(
    { claseId: AULA_ID, usuarioId: DOCENTE_ID, rolEnClase: "TEACHER" },
    { claseId: AULA_ID, usuarioId: ALUMNO_ID, rolEnClase: "STUDENT" }
  );
});

const docente = () => tokenFor({ id: DOCENTE_ID, role: "TEACHER", schoolId: ESCUELA_ID });
const otroDocente = () => tokenFor({ id: OTRO_DOCENTE_ID, role: "TEACHER", schoolId: ESCUELA_ID });
const alumno = () => tokenFor({ id: ALUMNO_ID, role: "USER", schoolId: ESCUELA_ID });

test("(a) el dueño crea un override individual", async () => {
  const res = await jsonRequest(baseUrl, "POST", `/api/modulos/${MOD_ID}/desbloqueos`, {
    token: docente(),
    body: { usuarioId: ALUMNO_ID },
  });
  assert.equal(res.status, 201, JSON.stringify(res.body));
  assert.equal(prisma.moduloDesbloqueo.rows.length, 1);
  assert.equal(prisma.moduloDesbloqueo.rows[0].usuarioId, ALUMNO_ID);
  assert.equal(prisma.moduloDesbloqueo.rows[0].aulaId, null);
});

test("(b) el dueño crea un override por aula", async () => {
  const res = await jsonRequest(baseUrl, "POST", `/api/modulos/${MOD_ID}/desbloqueos`, {
    token: docente(),
    body: { aulaId: AULA_ID },
  });
  assert.equal(res.status, 201, JSON.stringify(res.body));
  assert.equal(prisma.moduloDesbloqueo.rows[0].aulaId, AULA_ID);
});

test("(c) usuarioId y aulaId juntos, o ninguno de los dos → 400", async () => {
  const juntos = await jsonRequest(baseUrl, "POST", `/api/modulos/${MOD_ID}/desbloqueos`, {
    token: docente(),
    body: { usuarioId: ALUMNO_ID, aulaId: AULA_ID },
  });
  assert.equal(juntos.status, 400);

  const ninguno = await jsonRequest(baseUrl, "POST", `/api/modulos/${MOD_ID}/desbloqueos`, {
    token: docente(),
    body: {},
  });
  assert.equal(ninguno.status, 400);
});

test("(d) otro docente (no dueño) no puede crear un override", async () => {
  const res = await jsonRequest(baseUrl, "POST", `/api/modulos/${MOD_ID}/desbloqueos`, {
    token: otroDocente(),
    body: { usuarioId: ALUMNO_ID },
  });
  assert.equal(res.status, 403);
  assert.equal(prisma.moduloDesbloqueo.rows.length, 0);
});

test("(e) GET lista los overrides con nombre de alumno/aula resueltos", async () => {
  await jsonRequest(baseUrl, "POST", `/api/modulos/${MOD_ID}/desbloqueos`, {
    token: docente(),
    body: { usuarioId: ALUMNO_ID },
  });

  const res = await jsonRequest(baseUrl, "GET", `/api/modulos/${MOD_ID}/desbloqueos`, {
    token: docente(),
  });
  assert.equal(res.status, 200);
  const items = (res.body as { items: { usuarioId: string; usuarioNombre: string }[] }).items;
  assert.equal(items.length, 1);
  assert.equal(items[0].usuarioId, ALUMNO_ID);
  assert.ok(items[0].usuarioNombre);
});

test("(f) DELETE revoca el override", async () => {
  const created = await jsonRequest(baseUrl, "POST", `/api/modulos/${MOD_ID}/desbloqueos`, {
    token: docente(),
    body: { usuarioId: ALUMNO_ID },
  });
  const desbloqueoId = (created.body as { id: string }).id;

  const del = await jsonRequest(
    baseUrl, "DELETE", `/api/modulos/${MOD_ID}/desbloqueos/${desbloqueoId}`,
    { token: docente() }
  );
  assert.equal(del.status, 204);
  assert.equal(prisma.moduloDesbloqueo.rows.length, 0);
});

test("(g) el override individual desbloquea POST /api/quiz-attempts de verdad", async () => {
  prisma.quiz.rows.push({
    id: "quiz-desbloqueo",
    moduleId: MOD_ID,
    title: "Quiz",
    currentVersionId: "qv-desbloqueo",
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
  prisma.quizVersion.rows.push({
    id: "qv-desbloqueo",
    quizId: "quiz-desbloqueo",
    versionNumber: 1,
    questions: JSON.stringify([{ id: "q1", prompt: "2+2", questionType: "input", answerKey: "4", points: 1 }]),
    generatorId: null,
    generatorVersion: "1",
    params: null,
    count: 1,
    seedPolicy: 0,
    fixedSeed: null,
    settings: JSON.stringify({ type: "practica", mode: "manual", visibility: "publico" }),
    createdAt: new Date().toISOString(),
    createdBy: DOCENTE_ID,
  });

  const bloqueado = await jsonRequest(baseUrl, "POST", "/api/quiz-attempts", {
    token: alumno(),
    body: { quizId: "quiz-desbloqueo", moduleId: MOD_ID },
  });
  assert.equal(bloqueado.status, 403);

  await jsonRequest(baseUrl, "POST", `/api/modulos/${MOD_ID}/desbloqueos`, {
    token: docente(),
    body: { usuarioId: ALUMNO_ID },
  });

  const desbloqueado = await jsonRequest(baseUrl, "POST", "/api/quiz-attempts", {
    token: alumno(),
    body: { quizId: "quiz-desbloqueo", moduleId: MOD_ID },
  });
  assert.equal(desbloqueado.status, 201, JSON.stringify(desbloqueado.body));
});

test("(h) el override por aula desbloquea GET /api/modulos/:id para un miembro de esa aula", async () => {
  const antes = await jsonRequest(baseUrl, "GET", `/api/modulos/${MOD_ID}`, { token: alumno() });
  assert.equal((antes.body as { isLocked?: boolean }).isLocked, true);

  await jsonRequest(baseUrl, "POST", `/api/modulos/${MOD_ID}/desbloqueos`, {
    token: docente(),
    body: { aulaId: AULA_ID },
  });

  const despues = await jsonRequest(baseUrl, "GET", `/api/modulos/${MOD_ID}`, { token: alumno() });
  assert.equal((despues.body as { isLocked?: boolean }).isLocked, false);
});
