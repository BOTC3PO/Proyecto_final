/**
 * Fix "las dependencias entre módulos no bloquean nada" — `Modulo.dependencies`
 * (tipo "required") ya se calculaba como `isLocked` en progreso.ts y se
 * mostraba como pastilla "Bloqueado" en aula.tsx, pero nada impedía que el
 * alumno rindiera el cuestionario igual: el candado era sólo decorativo.
 * `POST /api/quiz-attempts` ahora rechaza con 403 si el módulo del quiz
 * tiene una dependencia "required" que el alumno no completó.
 *
 * Cubre:
 *  (a) Dependencia "required" sin completar → 403 "module_locked".
 *  (b) Una vez completado el prerrequisito (ProgresoModulo), el POST pasa.
 *  (c) Sin dependencies → nunca bloquea (caso normal, sin regresión).
 *  (d) Staff (docente) probando el mismo quiz bloqueado → exceptuado, pasa.
 *  (e) Dependencia tipo "unlocks" (no "required") → no bloquea nada.
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

const DOCENTE_ID = "docente-deps";
const ALUMNO_ID = "alumno-deps";
const ESCUELA_ID = "escuela-deps";
const MOD_PREVIO = "mod-previo";
const MOD_ACTUAL = "mod-actual";

before(async () => {
  const { quizAttempts } = await import("../../src/routes/quiz-attempts");
  const server = await startServer([quizAttempts]);
  baseUrl = server.baseUrl;
  close = server.close;
});

after(async () => {
  if (close) await close();
});

function seedModulo(id: string, dependencies: unknown[] | null) {
  prisma.modulo.rows.push({
    id,
    slug: `${id}-${Date.now()}-${Math.random()}`,
    titulo: `Módulo ${id}`,
    descripcion: "",
    visibility: "publico",
    schoolId: ESCUELA_ID,
    ownerUserId: DOCENTE_ID,
    dependencies: dependencies ? JSON.stringify(dependencies) : null,
    isDeleted: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
}

function seedQuiz(quizId: string, moduleId: string) {
  prisma.quiz.rows.push({
    id: quizId,
    moduleId,
    title: `Quiz ${quizId}`,
    currentVersionId: `qv-${quizId}`,
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
  prisma.quizVersion.rows.push({
    id: `qv-${quizId}`,
    quizId,
    versionNumber: 1,
    questions: JSON.stringify([
      { id: "q1", prompt: "2 + 2", questionType: "input", answerKey: "4", points: 1 },
    ]),
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
}

beforeEach(() => {
  resetPrisma();
  seedUser({ id: DOCENTE_ID, role: "TEACHER", schoolId: ESCUELA_ID });
  seedUser({ id: ALUMNO_ID, role: "USER", schoolId: ESCUELA_ID });
  seedModulo(MOD_PREVIO, null);
});

const alumno = () => tokenFor({ id: ALUMNO_ID, role: "USER", schoolId: ESCUELA_ID });
const docente = () => tokenFor({ id: DOCENTE_ID, role: "TEACHER", schoolId: ESCUELA_ID });

test("(a) dependencia 'required' sin completar → 403 module_locked", async () => {
  seedModulo(MOD_ACTUAL, [{ id: MOD_PREVIO, type: "required" }]);
  seedQuiz("quiz-a", MOD_ACTUAL);

  const res = await jsonRequest(baseUrl, "POST", "/api/quiz-attempts", {
    token: alumno(),
    body: { quizId: "quiz-a", moduleId: MOD_ACTUAL },
  });

  assert.equal(res.status, 403);
  const body = res.body as { code?: string; missingDependencyIds?: string[] };
  assert.equal(body.code, "module_locked");
  assert.deepEqual(body.missingDependencyIds, [MOD_PREVIO]);
  assert.equal(prisma.quizAttempt.rows.length, 0);
});

test("(b) una vez completado el prerrequisito, el POST pasa", async () => {
  seedModulo(MOD_ACTUAL, [{ id: MOD_PREVIO, type: "required" }]);
  seedQuiz("quiz-b", MOD_ACTUAL);
  prisma.progresoModulo.rows.push({
    usuarioId: ALUMNO_ID,
    moduloId: MOD_PREVIO,
    status: "completado",
    updatedAt: new Date().toISOString(),
  });

  const res = await jsonRequest(baseUrl, "POST", "/api/quiz-attempts", {
    token: alumno(),
    body: { quizId: "quiz-b", moduleId: MOD_ACTUAL },
  });

  assert.equal(res.status, 201, JSON.stringify(res.body));
});

test("(c) sin dependencies, nunca bloquea", async () => {
  seedModulo(MOD_ACTUAL, null);
  seedQuiz("quiz-c", MOD_ACTUAL);

  const res = await jsonRequest(baseUrl, "POST", "/api/quiz-attempts", {
    token: alumno(),
    body: { quizId: "quiz-c", moduleId: MOD_ACTUAL },
  });

  assert.equal(res.status, 201, JSON.stringify(res.body));
});

test("(d) staff (docente) probando un quiz bloqueado no queda bloqueado", async () => {
  seedModulo(MOD_ACTUAL, [{ id: MOD_PREVIO, type: "required" }]);
  seedQuiz("quiz-d", MOD_ACTUAL);

  const res = await jsonRequest(baseUrl, "POST", "/api/quiz-attempts", {
    token: docente(),
    body: { quizId: "quiz-d", moduleId: MOD_ACTUAL },
  });

  assert.equal(res.status, 201, JSON.stringify(res.body));
});

test("(e) declarar 'unlocks' hacia OTRO módulo no bloquea al módulo que lo declara", async () => {
  // MOD_ACTUAL declara "unlocks: MOD_PREVIO" (MOD_ACTUAL desbloquea a
  // MOD_PREVIO al completarse) — eso bloquea a MOD_PREVIO, no a
  // MOD_ACTUAL. Ver test (f)/(g) para el efecto sobre el destino.
  seedModulo(MOD_ACTUAL, [{ id: MOD_PREVIO, type: "unlocks" }]);
  seedQuiz("quiz-e", MOD_ACTUAL);

  const res = await jsonRequest(baseUrl, "POST", "/api/quiz-attempts", {
    token: alumno(),
    body: { quizId: "quiz-e", moduleId: MOD_ACTUAL },
  });

  assert.equal(res.status, 201, JSON.stringify(res.body));
});

test("(f) 'unlocks' declarado desde OTRO módulo SÍ bloquea al destino", async () => {
  // MOD_PREVIO ("MOD_ACTUAL" en este test hace de destino) no declara
  // ninguna dependencia propia — pero seedModulo(MOD_ORIGEN) declara
  // "unlocks: MOD_ACTUAL", que debe bloquear MOD_ACTUAL igual que si
  // MOD_ACTUAL declarara "required: MOD_ORIGEN".
  seedModulo(MOD_ACTUAL, null);
  seedModulo("mod-origen-unlocks", [{ id: MOD_ACTUAL, type: "unlocks" }]);
  seedQuiz("quiz-f", MOD_ACTUAL);

  const res = await jsonRequest(baseUrl, "POST", "/api/quiz-attempts", {
    token: alumno(),
    body: { quizId: "quiz-f", moduleId: MOD_ACTUAL },
  });

  assert.equal(res.status, 403);
  const body = res.body as { code?: string; missingDependencyIds?: string[] };
  assert.equal(body.code, "module_locked");
  assert.deepEqual(body.missingDependencyIds, ["mod-origen-unlocks"]);
});

test("(g) al completar el módulo origen del 'unlocks', el destino se libera", async () => {
  seedModulo(MOD_ACTUAL, null);
  seedModulo("mod-origen-unlocks", [{ id: MOD_ACTUAL, type: "unlocks" }]);
  seedQuiz("quiz-g", MOD_ACTUAL);
  prisma.progresoModulo.rows.push({
    usuarioId: ALUMNO_ID,
    moduloId: "mod-origen-unlocks",
    status: "completado",
    updatedAt: new Date().toISOString(),
  });

  const res = await jsonRequest(baseUrl, "POST", "/api/quiz-attempts", {
    token: alumno(),
    body: { quizId: "quiz-g", moduleId: MOD_ACTUAL },
  });

  assert.equal(res.status, 201, JSON.stringify(res.body));
});
