/**
 * FIX-CALIFICACIONES — la pantalla de calificaciones del aula
 * (`apps/web/src/pages/ProfesorCalificaciones.tsx:48`) hardcodeaba
 * `?moduleId=&` (string vacío) en la URL, y el back rechazaba con
 * `400 ZodError` por el `z.string().min(1)` del schema
 * (`api/src/schema/quiz-attempt.ts`). Tres cambios para arreglarlo:
 *
 *  1. Schema: preprocesa "" a undefined (helper `emptyStringToUndefined`)
 *     para que `?moduleId=&` se trate como "no provisto" en vez de un
 *     400 críptico. Misma defensa para `quizId`, `aulaId`, `userId`.
 *  2. Schema: el refine ahora acepta `aulaId` solo (antes exigía
 *     `quizId || moduleId`). La pantalla pide "todas las calificaciones
 *     del aula", no de un módulo específico.
 *  3. Handler: nuevo modo "aulaId solo" — `targetQuizIds = null` significa
 *     "sin filtro de quiz". El `findMany` no agrega el `quizId.in` y
 *     devuelve todos los intentos de los usuarios del aula
 *     (acotados por `targetUserIds`).
 *
 * Cubre:
 *  (c1) `?moduleId=&` (string vacío) + `aulaId` válido → 200 (no 400).
 *  (c2) `?aulaId=X` solo como docente del aula → 200, ve intentos.
 *  (c3) `?aulaId=X` solo como docente de OTRO aula → 403 (access check).
 *  (c4) `?aulaId=X` solo como alumno → 403 (sólo staff).
 *  (c5) `?moduleId=&aulaId=&quizId=&userId=` (todo vacío) → 400 con
 *       mensaje claro del refine (ningún identificador).
 *  (c6) `?moduleId=valid&aulaId=X` → 200, filtra por módulo (modo
 *       previo intacto).
 *  (c7) `?quizId=X&moduleId=&aulaId=Y` → 200, `quizId` tiene prioridad
 *       sobre `moduleId` vacío (defensa preprocess funciona).
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

const DOCENTE_ID = "docente-fc";
const ALUMNO_ID = "alumno-fc";
const OTRO_DOCENTE_ID = "otro-docente-fc";
const ESCUELA_ID = "escuela-fc";
const OTRA_ESCUELA_ID = "otra-escuela-fc";
const MOD_ID = "mod-fc";
const QUIZ_ID = "quiz-fc";
const QV_ID = "qv-fc";
const AULA_ID = "aula-fc";
const OTRA_AULA_ID = "otra-aula-fc";

before(async () => {
  const { quizAttempts } = await import("../../src/routes/quiz-attempts");
  const server = await startServer([quizAttempts]);
  baseUrl = server.baseUrl;
  close = server.close;
});

after(async () => {
  if (close) await close();
});

function seedWorld() {
  prisma.clase.rows.push(
    {
      id: AULA_ID,
      escuelaId: ESCUELA_ID,
      name: "Aula FIX-CALIFICACIONES",
      grade: "5°",
      isDeleted: false,
      status: "ACTIVE",
      createdAt: new Date().toISOString(),
    },
    {
      id: OTRA_AULA_ID,
      escuelaId: OTRA_ESCUELA_ID,
      name: "Otra Aula",
      grade: "4°",
      isDeleted: false,
      status: "ACTIVE",
      createdAt: new Date().toISOString(),
    }
  );
  prisma.claseMiembro.rows.push(
    {
      claseId: AULA_ID,
      usuarioId: ALUMNO_ID,
      rolEnClase: "STUDENT",
    },
    {
      claseId: AULA_ID,
      usuarioId: DOCENTE_ID,
      rolEnClase: "TEACHER",
    }
  );
  prisma.quiz.rows.push({
    id: QUIZ_ID,
    moduleId: MOD_ID,
    title: "Quiz FIX-CALIFICACIONES",
    currentVersionId: QV_ID,
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
  prisma.quizVersion.rows.push({
    id: QV_ID,
    quizId: QUIZ_ID,
    versionNumber: 1,
    questions: "[]",
    generatorId: null,
    generatorVersion: "1",
    params: null,
    count: 0,
    seedPolicy: 0,
    fixedSeed: null,
    settings: JSON.stringify({ type: "formal", mode: "manual" }),
    createdAt: new Date().toISOString(),
    createdBy: DOCENTE_ID,
  });
  prisma.quizAttempt.rows.push({
    id: "att-fc-1",
    quizId: QUIZ_ID,
    quizVersionId: QV_ID,
    userId: ALUMNO_ID,
    status: "submitted",
    startedAt: "2024-06-01T10:00:00.000Z",
    submittedAt: "2024-06-01T10:30:00.000Z",
    score: 8,
    maxScore: 10,
    answers: "{}",
    feedback: null,
    grading: null,
    seed: null,
    seedPolicy: 0,
    attemptNo: 1,
  });
}

beforeEach(() => {
  resetPrisma();
  seedUser({ id: DOCENTE_ID, role: "TEACHER", schoolId: ESCUELA_ID });
  seedUser({ id: OTRO_DOCENTE_ID, role: "TEACHER", schoolId: OTRA_ESCUELA_ID });
  seedUser({ id: ALUMNO_ID, role: "USER", schoolId: ESCUELA_ID });
  seedWorld();
});

test("(c1) FIX-CALIFICACIONES: ?moduleId=& + aulaId válido → 200 (NO 400)", async () => {
  // Reproduce el bug original: URL exacta que rompía la pantalla de
  // calificaciones antes del fix.
  const token = tokenFor({
    id: DOCENTE_ID,
    role: "TEACHER",
    schoolId: ESCUELA_ID,
  });
  const res = await jsonRequest(
    baseUrl,
    "GET",
    `/api/quiz-attempts?moduleId=&aulaId=${AULA_ID}&quizType=formal&limit=50`,
    { token }
  );
  assert.equal(res.status, 200, `debe ser 200 (recibido ${res.status})`);
  const body = res.body as { items: Array<{ id: string }>; total: number };
  assert.equal(body.total, 1, "el docente del aula debe ver el intento del alumno");
  assert.equal(body.items[0].id, "att-fc-1");
});

test("(c2) FIX-CALIFICACIONES: ?aulaId=X solo como docente del aula → 200 con intentos", async () => {
  // Modo nuevo "aulaId solo" (sin moduleId/quizId): "todas las
  // calificaciones del aula". Esto es lo que la pantalla del front
  // necesita ahora.
  const token = tokenFor({
    id: DOCENTE_ID,
    role: "TEACHER",
    schoolId: ESCUELA_ID,
  });
  const res = await jsonRequest(
    baseUrl,
    "GET",
    `/api/quiz-attempts?aulaId=${AULA_ID}`,
    { token }
  );
  assert.equal(res.status, 200);
  const body = res.body as { items: Array<{ id: string }>; total: number };
  assert.equal(body.total, 1);
  assert.equal(body.items[0].id, "att-fc-1");
});

test("(c3) FIX-CALIFICACIONES: ?aulaId=X solo como docente de OTRO aula → 403", async () => {
  // El access check de "staff de aula" sigue aplicando: el docente de
  // OTRA_AULA no puede ver intentos del AULA_ID.
  const tokenOtro = tokenFor({
    id: OTRO_DOCENTE_ID,
    role: "TEACHER",
    schoolId: OTRA_ESCUELA_ID,
  });
  const res = await jsonRequest(
    baseUrl,
    "GET",
    `/api/quiz-attempts?aulaId=${AULA_ID}`,
    { token: tokenOtro }
  );
  assert.equal(res.status, 403);
});

test("(c4) FIX-CALIFICACIONES: ?aulaId=X solo como alumno → 403 (sólo staff)", async () => {
  // Modo "aulaId solo" exige staff; un alumno no puede listar intentos
  // de un aula aunque sea miembro.
  const tokenAlumno = tokenFor({
    id: ALUMNO_ID,
    role: "USER",
    schoolId: ESCUELA_ID,
  });
  const res = await jsonRequest(
    baseUrl,
    "GET",
    `/api/quiz-attempts?aulaId=${AULA_ID}`,
    { token: tokenAlumno }
  );
  assert.equal(res.status, 403);
});

test("(c5) FIX-CALIFICACIONES: todos los identificadores vacíos → 400 claro (no críptico)", async () => {
  // Ningún `quizId/moduleId/aulaId` válido → el refine devuelve un
  // 400 con mensaje legible (no 500 ni "").
  const token = tokenFor({
    id: DOCENTE_ID,
    role: "TEACHER",
    schoolId: ESCUELA_ID,
  });
  const res = await jsonRequest(
    baseUrl,
    "GET",
    `/api/quiz-attempts?moduleId=&aulaId=&quizId=&userId=`,
    { token }
  );
  assert.equal(res.status, 400);
  // El mensaje del refine tiene que mencionar los identificadores.
  const body = res.body as { error: string };
  assert.ok(
    typeof body.error === "string" && body.error.length > 0,
    "el error debe ser un string no vacío"
  );
  assert.match(body.error, /quizId|moduleId|aulaId/i);
});

test("(c6) FIX-CALIFICACIONES: ?moduleId=valid + aulaId=X → 200 filtra por módulo (modo previo intacto)", async () => {
  // Candado: el fix no rompe el modo "filtrar por módulo específico".
  const token = tokenFor({
    id: DOCENTE_ID,
    role: "TEACHER",
    schoolId: ESCUELA_ID,
  });
  const res = await jsonRequest(
    baseUrl,
    "GET",
    `/api/quiz-attempts?moduleId=${MOD_ID}&aulaId=${AULA_ID}`,
    { token }
  );
  assert.equal(res.status, 200);
  const body = res.body as { items: Array<{ id: string }>; total: number };
  assert.equal(body.total, 1);
  assert.equal(body.items[0].id, "att-fc-1");
});

test("(c7) FIX-CALIFICACIONES: ?quizId=X con moduleId= vacío → 200 (preprocess + prioridad de quizId)", async () => {
  // El front podría mandar `?quizId=X&moduleId=` (con moduleId vacío
  // por descuido). El preprocess de `moduleId=""` → undefined no debe
  // interferir con el `quizId` válido.
  const token = tokenFor({
    id: DOCENTE_ID,
    role: "TEACHER",
    schoolId: ESCUELA_ID,
  });
  const res = await jsonRequest(
    baseUrl,
    "GET",
    `/api/quiz-attempts?quizId=${QUIZ_ID}&moduleId=&aulaId=${AULA_ID}`,
    { token }
  );
  assert.equal(res.status, 200);
  const body = res.body as { items: Array<{ id: string }>; total: number };
  assert.equal(body.total, 1);
  assert.equal(body.items[0].id, "att-fc-1");
});
