/**
 * Etapa 2 (Tiza — preguntas nativas) — GET/PUT /api/quizzes/:quizId/preguntas.
 *
 * Verifica:
 *  (a) GET de un quiz sin `settings.preguntas` devuelve un cuestionario
 *      vacío (cantidadGlobal=0, preguntas=[]) — no revienta.
 *  (b) PUT persiste el `CuestionarioPreguntas` en `settings.preguntas`
 *      (verificable con un GET posterior).
 *  (c) PUT con límites insuficientes NO se rechaza — se persiste igual y
 *      la respuesta incluye `validacion.ok === false` (aviso, no bloqueo).
 *  (d) Autorización: el dueño del módulo puede editar; un docente ajeno
 *      (otra escuela, no staff del módulo) recibe 403.
 *  (e) 404 si el quizId no existe.
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

const DOCENTE_ID = "docente-1";
const DOCENTE_OTRO_ID = "docente-otro";
const ESCUELA_ID = "escuela-1";
const ESCUELA_OTRA_ID = "escuela-2";
const MOD_ID = "mod-1";
const QUIZ_ID = "quiz-1";
const QV_ID = "qv-1";

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
  seedUser({ id: DOCENTE_OTRO_ID, role: "TEACHER", schoolId: ESCUELA_OTRA_ID });
  const now = new Date().toISOString();
  prisma.modulo.rows.push({
    id: MOD_ID,
    titulo: "Modulo preguntas",
    descripcion: "desc",
    visibility: "privado",
    schoolId: ESCUELA_ID,
    ownerUserId: DOCENTE_ID,
    dependencies: null,
    isDeleted: false,
    createdAt: now,
    updatedAt: now,
  });
  prisma.quiz.rows.push({
    id: QUIZ_ID,
    moduleId: MOD_ID,
    title: "Quiz 1",
    isActive: true,
    currentVersionId: QV_ID,
    createdAt: now,
    updatedAt: now,
  });
  prisma.quizVersion.rows.push({
    id: QV_ID,
    quizId: QUIZ_ID,
    versionNumber: 1,
    questions: JSON.stringify([]),
    settings: JSON.stringify({ type: "practica" }),
    createdAt: now,
  });
});

test("(a) GET sin settings.preguntas devuelve cuestionario vacío", async () => {
  const token = tokenFor({ id: DOCENTE_ID, role: "TEACHER", schoolId: ESCUELA_ID });
  const res = await jsonRequest(baseUrl, "GET", `/api/quizzes/${QUIZ_ID}/preguntas`, { token });
  assert.equal(res.status, 200, JSON.stringify(res.body));
  const body = res.body as { cantidadGlobal: number; preguntas: unknown[] };
  assert.equal(body.cantidadGlobal, 0);
  assert.deepEqual(body.preguntas, []);
});

test("(b) PUT persiste el cuestionario, GET posterior lo devuelve igual", async () => {
  const token = tokenFor({ id: DOCENTE_ID, role: "TEACHER", schoolId: ESCUELA_ID });
  const payload = {
    cantidadGlobal: 2,
    preguntas: [
      { plantillaId: "p1", tipo: "obligatoria" },
      { plantillaId: "p2", tipo: "relleno", maxRepeticiones: 3, poolId: "pool-a" },
    ],
  };
  const putRes = await jsonRequest(baseUrl, "PUT", `/api/quizzes/${QUIZ_ID}/preguntas`, {
    token,
    body: payload,
  });
  assert.equal(putRes.status, 200, JSON.stringify(putRes.body));
  const putBody = putRes.body as { validacion: { ok: boolean } };
  assert.equal(putBody.validacion.ok, true);

  const getRes = await jsonRequest(baseUrl, "GET", `/api/quizzes/${QUIZ_ID}/preguntas`, { token });
  assert.equal(getRes.status, 200);
  const getBody = getRes.body as { cantidadGlobal: number; preguntas: Array<{ plantillaId: string }> };
  assert.equal(getBody.cantidadGlobal, 2);
  assert.deepEqual(
    getBody.preguntas.map((p) => p.plantillaId),
    ["p1", "p2"],
  );

  // Confirma que quedó dentro de `settings` sin pisar otros campos (`type`).
  const row = prisma.quizVersion.rows.find((v) => v.id === QV_ID);
  const settings = JSON.parse(String(row?.settings ?? "{}"));
  assert.equal(settings.type, "practica", "no debe pisar otros campos de settings");
  assert.ok(settings.preguntas, "settings.preguntas debe existir");
});

test("(c) PUT con límites insuficientes se persiste igual, con validacion.ok=false", async () => {
  const token = tokenFor({ id: DOCENTE_ID, role: "TEACHER", schoolId: ESCUELA_ID });
  const payload = {
    cantidadGlobal: 5,
    preguntas: [{ plantillaId: "p1", tipo: "obligatoria" }],
  };
  const res = await jsonRequest(baseUrl, "PUT", `/api/quizzes/${QUIZ_ID}/preguntas`, {
    token,
    body: payload,
  });
  assert.equal(res.status, 200, JSON.stringify(res.body));
  const body = res.body as { validacion: { ok: boolean; errores: string[] } };
  assert.equal(body.validacion.ok, false);
  assert.match(body.validacion.errores[0], /faltan 4 preguntas de relleno/);

  // Se persistió de todos modos (no bloquea el guardado incremental).
  const getRes = await jsonRequest(baseUrl, "GET", `/api/quizzes/${QUIZ_ID}/preguntas`, { token });
  const getBody = getRes.body as { cantidadGlobal: number };
  assert.equal(getBody.cantidadGlobal, 5);
});

test("(d) docente ajeno (otra escuela, no dueño) -> 403 en GET y PUT", async () => {
  const tokenOtro = tokenFor({ id: DOCENTE_OTRO_ID, role: "TEACHER", schoolId: ESCUELA_OTRA_ID });
  const getRes = await jsonRequest(baseUrl, "GET", `/api/quizzes/${QUIZ_ID}/preguntas`, {
    token: tokenOtro,
  });
  assert.equal(getRes.status, 403);
  const putRes = await jsonRequest(baseUrl, "PUT", `/api/quizzes/${QUIZ_ID}/preguntas`, {
    token: tokenOtro,
    body: { cantidadGlobal: 1, preguntas: [{ plantillaId: "p1", tipo: "obligatoria" }] },
  });
  assert.equal(putRes.status, 403);
});

test("(e) quizId inexistente -> 404", async () => {
  const token = tokenFor({ id: DOCENTE_ID, role: "TEACHER", schoolId: ESCUELA_ID });
  const res = await jsonRequest(baseUrl, "GET", "/api/quizzes/no-existe/preguntas", { token });
  assert.equal(res.status, 404);
});

// WO — GET /api/quizzes/:quizId/meta: título del cuestionario para la
// cabecera de Tiza (Quiz.title vive fuera de la plantilla). El path es
// `/meta` y no la raíz `:quizId` para no capturar rutas literales hermanas
// (`/api/quizzes/banco`, ver orden de mounts en index.ts).
test("(f) GET /api/quizzes/:quizId/meta devuelve id + title + tipo/visibilidad/config", async () => {
  const token = tokenFor({ id: DOCENTE_ID, role: "TEACHER", schoolId: ESCUELA_ID });
  const res = await jsonRequest(baseUrl, "GET", `/api/quizzes/${QUIZ_ID}/meta`, { token });
  assert.equal(res.status, 200, JSON.stringify(res.body));
  assert.deepEqual(res.body, {
    id: QUIZ_ID,
    title: "Quiz 1",
    type: "practica",
    visibility: "publico",
    // PLAN-Z fase 3/4 — "un solo set de metadatos" a nivel cuestionario.
    materia: "",
    nivel: "",
    tags: [],
    descripcion: "",
    // PLAN-Y fase 3 — instrucciones para el alumno (Tiza-only).
    instructions: "",
    config: {},
  });
});

test("(g) GET /api/quizzes/:quizId/meta: docente ajeno -> 403, inexistente -> 404", async () => {
  const tokenOtro = tokenFor({ id: DOCENTE_OTRO_ID, role: "TEACHER", schoolId: ESCUELA_OTRA_ID });
  const forbidden = await jsonRequest(baseUrl, "GET", `/api/quizzes/${QUIZ_ID}/meta`, { token: tokenOtro });
  assert.equal(forbidden.status, 403);

  const token = tokenFor({ id: DOCENTE_ID, role: "TEACHER", schoolId: ESCUELA_ID });
  const notFound = await jsonRequest(baseUrl, "GET", "/api/quizzes/no-existe/meta", { token });
  assert.equal(notFound.status, 404);
});

// WO-tiza-config — PATCH /api/quizzes/:quizId/meta: título/tipo/visibilidad/
// config de evaluación editables desde el panel DETALLES de Tiza.
test("(h) PATCH meta persiste title + type + config sin pisar otras claves de settings", async () => {
  const token = tokenFor({ id: DOCENTE_ID, role: "TEACHER", schoolId: ESCUELA_ID });

  // Pre-cargar `preguntas` para verificar que el PATCH no las pisa.
  const putRes = await jsonRequest(baseUrl, "PUT", `/api/quizzes/${QUIZ_ID}/preguntas`, {
    token,
    body: { cantidadGlobal: 1, preguntas: [{ plantillaId: "p1", tipo: "obligatoria" }] },
  });
  assert.equal(putRes.status, 200);

  const patchRes = await jsonRequest(baseUrl, "PATCH", `/api/quizzes/${QUIZ_ID}/meta`, {
    token,
    body: {
      title: "Quiz renombrado",
      type: "formal",
      visibility: "escuela",
      timerSegundos: 600,
      maxIntentos: 2,
      politicaNota: "mejor",
    },
  });
  assert.equal(patchRes.status, 200, JSON.stringify(patchRes.body));
  assert.deepEqual(patchRes.body, {
    id: QUIZ_ID,
    title: "Quiz renombrado",
    type: "formal",
    visibility: "escuela",
    materia: "",
    nivel: "",
    tags: [],
    descripcion: "",
    // PLAN-Y fase 3 — instrucciones para el alumno (Tiza-only).
    instructions: "",
    config: { maxIntentos: 2, politicaNota: "mejor", timerSegundos: 600 },
  });

  // Las `preguntas` cargadas antes siguen intactas (read-modify-write).
  const getPreguntas = await jsonRequest(baseUrl, "GET", `/api/quizzes/${QUIZ_ID}/preguntas`, { token });
  assert.equal(getPreguntas.status, 200);
  assert.equal((getPreguntas.body as { cantidadGlobal: number }).cantidadGlobal, 1);
});

test("(i) PATCH meta: campo desconocido -> 400; docente ajeno -> 403", async () => {
  const token = tokenFor({ id: DOCENTE_ID, role: "TEACHER", schoolId: ESCUELA_ID });
  const badField = await jsonRequest(baseUrl, "PATCH", `/api/quizzes/${QUIZ_ID}/meta`, {
    token,
    body: { campoInventado: true },
  });
  assert.equal(badField.status, 400);

  const tokenOtro = tokenFor({ id: DOCENTE_OTRO_ID, role: "TEACHER", schoolId: ESCUELA_OTRA_ID });
  const forbidden = await jsonRequest(baseUrl, "PATCH", `/api/quizzes/${QUIZ_ID}/meta`, {
    token: tokenOtro,
    body: { title: "hackeado" },
  });
  assert.equal(forbidden.status, 403);
});

// WO-tiza-config — DELETE /api/quizzes/:quizId: soft-delete (isActive=false),
// mismo mecanismo que applyModuleUpdate al quitar un quiz de quizzes[].
test("(j) DELETE marca isActive=false; docente ajeno -> 403", async () => {
  const tokenOtro = tokenFor({ id: DOCENTE_OTRO_ID, role: "TEACHER", schoolId: ESCUELA_OTRA_ID });
  const forbidden = await jsonRequest(baseUrl, "DELETE", `/api/quizzes/${QUIZ_ID}`, { token: tokenOtro });
  assert.equal(forbidden.status, 403);

  const token = tokenFor({ id: DOCENTE_ID, role: "TEACHER", schoolId: ESCUELA_ID });
  const res = await jsonRequest(baseUrl, "DELETE", `/api/quizzes/${QUIZ_ID}`, { token });
  assert.equal(res.status, 200, JSON.stringify(res.body));
  const row = prisma.quiz.rows.find((q: { id: string }) => q.id === QUIZ_ID) as
    | { isActive?: boolean }
    | undefined;
  assert.equal(row?.isActive, false);
});

// Archivar cuestionarios — POST /api/quizzes/:quizId/restaurar revierte el
// DELETE de arriba (isActive=true), con el mismo chequeo de permiso. GET
// /api/quizzes?archivados=true lista sólo los archivados; el default
// (sin el query param) sigue sin mostrarlos.
test("(l) POST /restaurar revierte isActive=true; docente ajeno -> 403; GET ?archivados=true los lista", async () => {
  const token = tokenFor({ id: DOCENTE_ID, role: "TEACHER", schoolId: ESCUELA_ID });
  await jsonRequest(baseUrl, "DELETE", `/api/quizzes/${QUIZ_ID}`, { token });

  const tokenOtro = tokenFor({ id: DOCENTE_OTRO_ID, role: "TEACHER", schoolId: ESCUELA_OTRA_ID });
  const forbidden = await jsonRequest(baseUrl, "POST", `/api/quizzes/${QUIZ_ID}/restaurar`, {
    token: tokenOtro,
  });
  assert.equal(forbidden.status, 403);

  // Archivado: no aparece en la lista default, sí en la de archivados.
  const listaDefault = await jsonRequest(baseUrl, "GET", "/api/quizzes?scope=todos", { token });
  const idsDefault = (listaDefault.body as { items: Array<{ id: string }> }).items.map((i) => i.id);
  assert.ok(!idsDefault.includes(QUIZ_ID));

  const listaArchivados = await jsonRequest(
    baseUrl,
    "GET",
    "/api/quizzes?scope=todos&archivados=true",
    { token },
  );
  const idsArchivados = (listaArchivados.body as { items: Array<{ id: string }> }).items.map((i) => i.id);
  assert.ok(idsArchivados.includes(QUIZ_ID));

  const res = await jsonRequest(baseUrl, "POST", `/api/quizzes/${QUIZ_ID}/restaurar`, { token });
  assert.equal(res.status, 200, JSON.stringify(res.body));
  const row = prisma.quiz.rows.find((q: { id: string }) => q.id === QUIZ_ID) as
    | { isActive?: boolean }
    | undefined;
  assert.equal(row?.isActive, true);
});

// WO-tiza-config — regresión del bug de pérdida de datos: guardar el módulo
// desde ModuloEditor (PATCH /api/modulos/:id con quizzes[]) creaba una
// versión nueva SIN `settings.preguntas` porque ese campo no viaja en
// `ModuleQuizSchema`. El fix arrastra `preguntas` de la versión anterior.
test("(k) PATCH /api/modulos/:id con quizzes[] preserva settings.preguntas", async () => {
  const token = tokenFor({ id: DOCENTE_ID, role: "TEACHER", schoolId: ESCUELA_ID });

  const putRes = await jsonRequest(baseUrl, "PUT", `/api/quizzes/${QUIZ_ID}/preguntas`, {
    token,
    body: { cantidadGlobal: 2, preguntas: [{ plantillaId: "p1", tipo: "obligatoria" }] },
  });
  assert.equal(putRes.status, 200);

  // Guardado del módulo "estilo ModuloEditor": re-envía el quiz completo
  // (sin `preguntas`, que el front de módulos no conoce).
  const patchModulo = await jsonRequest(baseUrl, "PATCH", `/api/modulos/${MOD_ID}`, {
    token,
    body: {
      quizzes: [{ id: QUIZ_ID, title: "Quiz 1 renombrado", type: "practica", visibility: "publico" }],
    },
  });
  assert.equal(patchModulo.status, 200, JSON.stringify(patchModulo.body));

  const getPreguntas = await jsonRequest(baseUrl, "GET", `/api/quizzes/${QUIZ_ID}/preguntas`, { token });
  assert.equal(getPreguntas.status, 200);
  const body = getPreguntas.body as { cantidadGlobal: number; preguntas: unknown[] };
  assert.equal(body.cantidadGlobal, 2, "settings.preguntas se perdió al guardar el módulo");
  assert.equal(body.preguntas.length, 1);
});

// WO-tiza-config (Fase 5) — el GET del módulo expone `tienePreguntasNativas`
// para que el badge de ModuloEditor sepa que la entrada correcta es Tiza.
test("(l) GET /api/modulos/:id expone tienePreguntasNativas según settings.preguntas", async () => {
  const token = tokenFor({ id: DOCENTE_ID, role: "TEACHER", schoolId: ESCUELA_ID });

  const antes = await jsonRequest(baseUrl, "GET", `/api/modulos/${MOD_ID}`, { token });
  assert.equal(antes.status, 200, JSON.stringify(antes.body));
  const quizAntes = (antes.body as { quizzes: { id: string; tienePreguntasNativas?: boolean }[] })
    .quizzes.find((q) => q.id === QUIZ_ID);
  assert.equal(quizAntes?.tienePreguntasNativas, false);

  const putRes = await jsonRequest(baseUrl, "PUT", `/api/quizzes/${QUIZ_ID}/preguntas`, {
    token,
    body: { cantidadGlobal: 1, preguntas: [{ plantillaId: "p1", tipo: "obligatoria" }] },
  });
  assert.equal(putRes.status, 200);

  const despues = await jsonRequest(baseUrl, "GET", `/api/modulos/${MOD_ID}`, { token });
  assert.equal(despues.status, 200);
  const quizDespues = (despues.body as { quizzes: { id: string; tienePreguntasNativas?: boolean }[] })
    .quizzes.find((q) => q.id === QUIZ_ID);
  assert.equal(quizDespues?.tienePreguntasNativas, true);
});
