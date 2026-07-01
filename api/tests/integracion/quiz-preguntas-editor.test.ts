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
