/**
 * PLAN-CORRECCIONES C2 — cuestionarios "sueltos" (sin módulo).
 *
 * `Quiz.moduleId` es nullable desde la migración
 * `20260703180000_quiz_standalone`. Un docente puede armar un
 * cuestionario de varias preguntas desde `/plantillas/nueva` SIN pasar
 * primero por un módulo (antes era imposible: `Quiz.moduleId` era NOT
 * NULL). El quiz standalone se edita con las mismas rutas
 * `/api/quizzes/:quizId/*` de siempre (ya toleraban módulo ausente vía
 * `loadQuizConModulo`/`canAccessQuiz`, sólo faltaba la vía de creación).
 * Cuando el docente quiere usarlo en un módulo real, `usar-en-modulo` lo
 * CLONA — el original queda intacto y reusable en otros módulos.
 *
 * Cubre:
 *  (a) POST /api/quizzes crea un quiz sin módulo, dueño = requester.
 *  (b) El dueño puede leer/editar sus preguntas (GET/PUT .../preguntas)
 *      sin módulo.
 *  (c) Otro docente NO puede leer/editar el quiz standalone ajeno (403)
 *      — antes del fix de ownership, cualquier staff podía.
 *  (d) Un USER (no staff) no puede crear un quiz.
 *  (e) usar-en-modulo clona el quiz al módulo destino: el original
 *      sigue existiendo sin módulo, con las mismas preguntas.
 *  (f) El mismo quiz standalone se puede reusar (clonar) en un SEGUNDO
 *      módulo distinto — dos clones independientes, ambos vivos.
 *  (g) usar-en-modulo exige permiso de edición sobre el módulo destino.
 *  (i) PLAN-F ítem 22 — usar-en-modulo hereda la materia del módulo
 *      destino (mismo fix que WO-BUG bff8b6f4 aplicó a duplicar-módulo,
 *      pero a esta vía de creación — más nueva — nunca le había llegado).
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

const DOCENTE_ID = "docente-c2";
const DOCENTE_OTRO_ID = "docente-c2-otro";
const ESCUELA_ID = "escuela-c2";
const ALUMNO_ID = "alumno-c2";

before(async () => {
  const { modulos } = await import("../../src/routes/modulos");
  const server = await startServer([modulos]);
  baseUrl = server.baseUrl;
  close = server.close;
});

after(async () => {
  if (close) await close();
});

beforeEach(() => {
  resetPrisma();
  seedUser({ id: DOCENTE_ID, role: "TEACHER", schoolId: ESCUELA_ID });
  seedUser({ id: DOCENTE_OTRO_ID, role: "TEACHER", schoolId: ESCUELA_ID });
  seedUser({ id: ALUMNO_ID, role: "USER", schoolId: ESCUELA_ID });
});

const docenteToken = () => tokenFor({ id: DOCENTE_ID, role: "TEACHER", schoolId: ESCUELA_ID });
const otroDocenteToken = () => tokenFor({ id: DOCENTE_OTRO_ID, role: "TEACHER", schoolId: ESCUELA_ID });
const alumnoToken = () => tokenFor({ id: ALUMNO_ID, role: "USER", schoolId: ESCUELA_ID });

test("(a) POST /api/quizzes crea un quiz sin módulo, dueño = requester", async () => {
  const res = await jsonRequest(baseUrl, "POST", "/api/quizzes", {
    token: docenteToken(),
    body: { title: "Cuestionario suelto" },
  });
  assert.equal(res.status, 201, JSON.stringify(res.body));
  const { id } = res.body as { id: string };
  assert.ok(id);

  const quiz = prisma.quiz.rows.find((q) => q.id === id);
  assert.ok(quiz, "el quiz debe existir en la DB");
  assert.equal(quiz!.moduleId ?? null, null);
  assert.equal(quiz!.ownerUserId, DOCENTE_ID);
  assert.equal(quiz!.title, "Cuestionario suelto");
});

test("(b) el dueño guarda y relee preguntas de su quiz standalone", async () => {
  const createRes = await jsonRequest(baseUrl, "POST", "/api/quizzes", {
    token: docenteToken(),
    body: {},
  });
  const { id } = createRes.body as { id: string };

  const cuestionario = {
    cantidadGlobal: 2,
    preguntas: [
      { plantillaId: "pl-1", tipo: "obligatoria" },
      { plantillaId: "pl-2", tipo: "obligatoria" },
    ],
  };
  const putRes = await jsonRequest(baseUrl, "PUT", `/api/quizzes/${id}/preguntas`, {
    token: docenteToken(),
    body: cuestionario,
  });
  assert.equal(putRes.status, 200, JSON.stringify(putRes.body));

  const getRes = await jsonRequest(baseUrl, "GET", `/api/quizzes/${id}/preguntas`, {
    token: docenteToken(),
  });
  assert.equal(getRes.status, 200);
  const body = getRes.body as { cantidadGlobal: number; preguntas: unknown[] };
  assert.equal(body.cantidadGlobal, 2);
  assert.equal(body.preguntas.length, 2);
});

test("(c) otro docente NO accede al quiz standalone ajeno (403)", async () => {
  const createRes = await jsonRequest(baseUrl, "POST", "/api/quizzes", {
    token: docenteToken(),
    body: {},
  });
  const { id } = createRes.body as { id: string };

  const getRes = await jsonRequest(baseUrl, "GET", `/api/quizzes/${id}/preguntas`, {
    token: otroDocenteToken(),
  });
  assert.equal(getRes.status, 403, JSON.stringify(getRes.body));

  const metaRes = await jsonRequest(baseUrl, "GET", `/api/quizzes/${id}/meta`, {
    token: otroDocenteToken(),
  });
  assert.equal(metaRes.status, 403);
});

test("(d) un USER (no staff) no puede crear un quiz standalone", async () => {
  const res = await jsonRequest(baseUrl, "POST", "/api/quizzes", {
    token: alumnoToken(),
    body: {},
  });
  assert.equal(res.status, 403);
});

test("(e) usar-en-modulo clona el quiz: el original queda intacto sin módulo", async () => {
  const createRes = await jsonRequest(baseUrl, "POST", "/api/quizzes", {
    token: docenteToken(),
    body: { title: "Reusable" },
  });
  const { id: origenId } = createRes.body as { id: string };
  await jsonRequest(baseUrl, "PUT", `/api/quizzes/${origenId}/preguntas`, {
    token: docenteToken(),
    body: { cantidadGlobal: 1, preguntas: [{ plantillaId: "pl-1", tipo: "obligatoria" }] },
  });

  const now = new Date().toISOString();
  prisma.modulo.rows.push({
    id: "mod-destino-1",
    titulo: "Modulo destino 1",
    descripcion: "",
    visibility: "privado",
    schoolId: ESCUELA_ID,
    ownerUserId: DOCENTE_ID,
    dependencies: null,
    isDeleted: false,
    createdAt: now,
    updatedAt: now,
  });

  const usarRes = await jsonRequest(baseUrl, "POST", `/api/quizzes/${origenId}/usar-en-modulo`, {
    token: docenteToken(),
    body: { moduleId: "mod-destino-1" },
  });
  assert.equal(usarRes.status, 201, JSON.stringify(usarRes.body));
  const { id: clonId } = usarRes.body as { id: string };
  assert.notEqual(clonId, origenId, "debe ser un quiz nuevo, no el mismo");

  const clon = prisma.quiz.rows.find((q) => q.id === clonId);
  assert.equal(clon?.moduleId, "mod-destino-1");

  const original = prisma.quiz.rows.find((q) => q.id === origenId);
  assert.equal(original?.moduleId ?? null, null, "el original sigue sin módulo");

  const preguntasClon = await jsonRequest(baseUrl, "GET", `/api/quizzes/${clonId}/preguntas`, {
    token: docenteToken(),
  });
  assert.equal((preguntasClon.body as { cantidadGlobal: number }).cantidadGlobal, 1);

  const preguntasOriginal = await jsonRequest(baseUrl, "GET", `/api/quizzes/${origenId}/preguntas`, {
    token: docenteToken(),
  });
  assert.equal((preguntasOriginal.body as { cantidadGlobal: number }).cantidadGlobal, 1);
});

test("(i) ITEM-22: usar-en-modulo hereda la materia del módulo DESTINO (mismo fix que WO-BUG en duplicar)", async () => {
  // Un quiz suelto no tiene módulo del que derivar materia, así que su
  // `settings.materia` nace vacío. Antes `usar-en-modulo` copiaba
  // `settings` tal cual: el clon quedaba con materia vacía aunque el
  // módulo al que se lo agrega SÍ tenga materia — invisible al filtrar
  // el banco por esa materia (PLAN-F ítem 22).
  const createRes = await jsonRequest(baseUrl, "POST", "/api/quizzes", {
    token: docenteToken(),
    body: { title: "Reusable con materia" },
  });
  const { id: origenId } = createRes.body as { id: string };

  const now = new Date().toISOString();
  prisma.modulo.rows.push({
    id: "mod-destino-materia",
    titulo: "Modulo destino con materia",
    descripcion: "",
    subject: "Matemáticas",
    category: "general",
    visibility: "privado",
    schoolId: ESCUELA_ID,
    ownerUserId: DOCENTE_ID,
    dependencies: null,
    isDeleted: false,
    createdAt: now,
    updatedAt: now,
  });

  const usarRes = await jsonRequest(baseUrl, "POST", `/api/quizzes/${origenId}/usar-en-modulo`, {
    token: docenteToken(),
    body: { moduleId: "mod-destino-materia" },
  });
  assert.equal(usarRes.status, 201, JSON.stringify(usarRes.body));
  const { id: clonId } = usarRes.body as { id: string };

  const clonVersion = prisma.quizVersion.rows.find((v) => v.quizId === clonId);
  assert.ok(clonVersion, "debe existir la QuizVersion del clon");
  const settings = JSON.parse(clonVersion!.settings as string) as { materia?: string };
  assert.equal(settings.materia, "Matemáticas", "el clon debe heredar la materia del módulo destino");
});

test("(f) el mismo quiz standalone se reusa (clona) en un segundo módulo distinto", async () => {
  const createRes = await jsonRequest(baseUrl, "POST", "/api/quizzes", {
    token: docenteToken(),
    body: { title: "Reusable dos veces" },
  });
  const { id: origenId } = createRes.body as { id: string };

  const now = new Date().toISOString();
  prisma.modulo.rows.push(
    {
      id: "mod-destino-a",
      titulo: "Modulo A",
      descripcion: "",
      visibility: "privado",
      schoolId: ESCUELA_ID,
      ownerUserId: DOCENTE_ID,
      dependencies: null,
      isDeleted: false,
      createdAt: now,
      updatedAt: now,
    },
    {
      id: "mod-destino-b",
      titulo: "Modulo B",
      descripcion: "",
      visibility: "privado",
      schoolId: ESCUELA_ID,
      ownerUserId: DOCENTE_ID,
      dependencies: null,
      isDeleted: false,
      createdAt: now,
      updatedAt: now,
    },
  );

  const usoA = await jsonRequest(baseUrl, "POST", `/api/quizzes/${origenId}/usar-en-modulo`, {
    token: docenteToken(),
    body: { moduleId: "mod-destino-a" },
  });
  const usoB = await jsonRequest(baseUrl, "POST", `/api/quizzes/${origenId}/usar-en-modulo`, {
    token: docenteToken(),
    body: { moduleId: "mod-destino-b" },
  });
  assert.equal(usoA.status, 201);
  assert.equal(usoB.status, 201);
  const idA = (usoA.body as { id: string }).id;
  const idB = (usoB.body as { id: string }).id;
  assert.notEqual(idA, idB);

  const quizA = prisma.quiz.rows.find((q) => q.id === idA);
  const quizB = prisma.quiz.rows.find((q) => q.id === idB);
  assert.equal(quizA?.moduleId, "mod-destino-a");
  assert.equal(quizB?.moduleId, "mod-destino-b");

  // El original sigue sin módulo, disponible para un tercer uso.
  const original = prisma.quiz.rows.find((q) => q.id === origenId);
  assert.equal(original?.moduleId ?? null, null);
});

test("(g) usar-en-modulo exige permiso de edición sobre el módulo destino (403)", async () => {
  const createRes = await jsonRequest(baseUrl, "POST", "/api/quizzes", {
    token: docenteToken(),
    body: {},
  });
  const { id: origenId } = createRes.body as { id: string };

  const now = new Date().toISOString();
  prisma.modulo.rows.push({
    id: "mod-ajeno",
    titulo: "Modulo de otro docente",
    descripcion: "",
    visibility: "privado",
    schoolId: ESCUELA_ID,
    ownerUserId: DOCENTE_OTRO_ID,
    dependencies: null,
    isDeleted: false,
    createdAt: now,
    updatedAt: now,
  });

  const usarRes = await jsonRequest(baseUrl, "POST", `/api/quizzes/${origenId}/usar-en-modulo`, {
    token: docenteToken(),
    body: { moduleId: "mod-ajeno" },
  });
  assert.equal(usarRes.status, 403, JSON.stringify(usarRes.body));
});

test("404 al usar-en-modulo un quiz inexistente", async () => {
  const res = await jsonRequest(baseUrl, "POST", "/api/quizzes/no-existe/usar-en-modulo", {
    token: docenteToken(),
    body: { moduleId: "mod-x" },
  });
  assert.equal(res.status, 404);
});

// ─── PLAN-CUESTIONARIOS — POST con moduleId + GET ?scope=todos ──────────

test("PLAN-CUESTIONARIOS: POST /api/quizzes con moduleId crea el quiz adosado al módulo y hereda su materia", async () => {
  const now = new Date().toISOString();
  prisma.modulo.rows.push({
    id: "mod-crear-directo",
    titulo: "Modulo crear directo",
    descripcion: "",
    subject: "Historia",
    category: "general",
    visibility: "privado",
    schoolId: ESCUELA_ID,
    ownerUserId: DOCENTE_ID,
    dependencies: null,
    isDeleted: false,
    createdAt: now,
    updatedAt: now,
  });

  const res = await jsonRequest(baseUrl, "POST", "/api/quizzes", {
    token: docenteToken(),
    body: { moduleId: "mod-crear-directo" },
  });
  assert.equal(res.status, 201, JSON.stringify(res.body));
  const { id } = res.body as { id: string };

  const quiz = prisma.quiz.rows.find((q) => q.id === id);
  assert.equal(quiz?.moduleId, "mod-crear-directo");
  // Mismo shape que el clon de usar-en-modulo: la autorización pasa a
  // depender del módulo, el owner directo queda null.
  assert.equal(quiz?.ownerUserId ?? null, null);

  const version = prisma.quizVersion.rows.find((v) => v.quizId === id);
  assert.ok(version, "debe existir la QuizVersion inicial");
  const settings = JSON.parse(version!.settings as string) as { materia?: string };
  assert.equal(settings.materia, "Historia", "hereda la materia del módulo (ITEM-22)");
});

test("PLAN-CUESTIONARIOS: POST /api/quizzes con moduleId ajeno → 403; inexistente → 404", async () => {
  const now = new Date().toISOString();
  prisma.modulo.rows.push({
    id: "mod-ajeno-post",
    titulo: "Modulo de otro",
    descripcion: "",
    visibility: "privado",
    schoolId: ESCUELA_ID,
    ownerUserId: DOCENTE_OTRO_ID,
    dependencies: null,
    isDeleted: false,
    createdAt: now,
    updatedAt: now,
  });

  const ajeno = await jsonRequest(baseUrl, "POST", "/api/quizzes", {
    token: docenteToken(),
    body: { moduleId: "mod-ajeno-post" },
  });
  assert.equal(ajeno.status, 403, JSON.stringify(ajeno.body));

  const inexistente = await jsonRequest(baseUrl, "POST", "/api/quizzes", {
    token: docenteToken(),
    body: { moduleId: "mod-que-no-existe" },
  });
  assert.equal(inexistente.status, 404);
});

test("PLAN-CUESTIONARIOS: GET /api/quizzes?scope=todos lista sueltos + quizzes de módulos propios, enriquecidos", async () => {
  // Un suelto con 2 preguntas.
  const suelto = await jsonRequest(baseUrl, "POST", "/api/quizzes", {
    token: docenteToken(),
    body: { title: "Suelto enriquecido" },
  });
  const sueltoId = (suelto.body as { id: string }).id;
  await jsonRequest(baseUrl, "PUT", `/api/quizzes/${sueltoId}/preguntas`, {
    token: docenteToken(),
    body: {
      cantidadGlobal: 2,
      preguntas: [
        { plantillaId: "pl-1", tipo: "obligatoria" },
        { plantillaId: "pl-2", tipo: "obligatoria" },
      ],
    },
  });

  // Un módulo propio con un quiz creado directo, y un módulo ajeno con
  // el suyo (que NO debe aparecer).
  const now = new Date().toISOString();
  prisma.modulo.rows.push(
    {
      id: "mod-scope-mio",
      titulo: "Modulo scope mio",
      descripcion: "",
      visibility: "privado",
      schoolId: ESCUELA_ID,
      ownerUserId: DOCENTE_ID,
      dependencies: null,
      isDeleted: false,
      createdAt: now,
      updatedAt: now,
    },
    {
      id: "mod-scope-ajeno",
      titulo: "Modulo scope ajeno",
      descripcion: "",
      visibility: "privado",
      schoolId: ESCUELA_ID,
      ownerUserId: DOCENTE_OTRO_ID,
      dependencies: null,
      isDeleted: false,
      createdAt: now,
      updatedAt: now,
    },
  );
  const enModulo = await jsonRequest(baseUrl, "POST", "/api/quizzes", {
    token: docenteToken(),
    body: { title: "Del módulo", moduleId: "mod-scope-mio" },
  });
  const enModuloId = (enModulo.body as { id: string }).id;
  const delOtro = await jsonRequest(baseUrl, "POST", "/api/quizzes", {
    token: otroDocenteToken(),
    body: { title: "Del módulo ajeno", moduleId: "mod-scope-ajeno" },
  });
  const delOtroId = (delOtro.body as { id: string }).id;

  const listRes = await jsonRequest(baseUrl, "GET", "/api/quizzes?scope=todos", {
    token: docenteToken(),
  });
  assert.equal(listRes.status, 200, JSON.stringify(listRes.body));
  const items = (listRes.body as {
    items: Array<{
      id: string;
      type: string;
      cantidadPreguntas: number;
      moduleId: string | null;
      moduleTitle: string | null;
    }>;
  }).items;
  const byId = new Map(items.map((i) => [i.id, i]));

  const sueltoItem = byId.get(sueltoId);
  assert.ok(sueltoItem, "el suelto debe aparecer");
  assert.equal(sueltoItem!.cantidadPreguntas, 2);
  assert.equal(sueltoItem!.moduleId, null);
  assert.equal(sueltoItem!.type, "practica");

  const moduloItem = byId.get(enModuloId);
  assert.ok(moduloItem, "el quiz del módulo propio debe aparecer con scope=todos");
  assert.equal(moduloItem!.moduleId, "mod-scope-mio");
  assert.equal(moduloItem!.moduleTitle, "Modulo scope mio");

  assert.ok(!byId.has(delOtroId), "el quiz del módulo AJENO no debe aparecer");

  // El default (sin scope) sigue siendo sólo sueltos — contrato del picker.
  const defaultRes = await jsonRequest(baseUrl, "GET", "/api/quizzes", {
    token: docenteToken(),
  });
  const defaultIds = (defaultRes.body as { items: Array<{ id: string }> }).items.map((i) => i.id);
  assert.ok(defaultIds.includes(sueltoId));
  assert.ok(!defaultIds.includes(enModuloId), "sin scope=todos no entran los de módulo");
});

test("(h) GET /api/quizzes lista sólo los quizzes sueltos propios (no los de otro docente ni un clon ya adjunto a un módulo)", async () => {
  const mio = await jsonRequest(baseUrl, "POST", "/api/quizzes", {
    token: docenteToken(),
    body: { title: "El mío" },
  });
  const ajeno = await jsonRequest(baseUrl, "POST", "/api/quizzes", {
    token: otroDocenteToken(),
    body: { title: "El del otro" },
  });
  const reusable = await jsonRequest(baseUrl, "POST", "/api/quizzes", {
    token: docenteToken(),
    body: { title: "Reusable" },
  });
  assert.equal(mio.status, 201);
  assert.equal(ajeno.status, 201);
  assert.equal(reusable.status, 201);

  const now = new Date().toISOString();
  prisma.modulo.rows.push({
    id: "mod-para-h",
    titulo: "Modulo H",
    descripcion: "",
    visibility: "privado",
    schoolId: ESCUELA_ID,
    ownerUserId: DOCENTE_ID,
    dependencies: null,
    isDeleted: false,
    createdAt: now,
    updatedAt: now,
  });
  const usoRes = await jsonRequest(
    baseUrl,
    "POST",
    `/api/quizzes/${(reusable.body as { id: string }).id}/usar-en-modulo`,
    { token: docenteToken(), body: { moduleId: "mod-para-h" } },
  );
  const clonId = (usoRes.body as { id: string }).id;

  const listRes = await jsonRequest(baseUrl, "GET", "/api/quizzes", { token: docenteToken() });
  assert.equal(listRes.status, 200, JSON.stringify(listRes.body));
  const body = listRes.body as { items: Array<{ id: string; title: string }> };
  const ids = body.items.map((i) => i.id);
  assert.ok(ids.includes((mio.body as { id: string }).id), "debe listar el quiz suelto propio");
  assert.ok(
    ids.includes((reusable.body as { id: string }).id),
    "el ORIGINAL sigue suelto tras usar-en-modulo (reusable de nuevo)",
  );
  assert.ok(!ids.includes((ajeno.body as { id: string }).id), "no debe listar el quiz de otro docente");
  assert.ok(!ids.includes(clonId), "el CLON ya tiene módulo, no es 'suelto'");
});
