/**
 * FIX-GUARDADO-QUIZTYPE / FIX-GUARDADO-QUIZID — un módulo con un cuestionario
 * de tipo "formal" (evaluación) y un id temporal `quiz-...` se guarda por POST
 * y por PATCH, y el GET preserva el tipo.
 *
 * Causa raíz (doble):
 *  1. El editor crea/edita cuestionarios con `type: "formal"`
 *     (useModuloEditor.ts:418, ModuloEditor.tsx:405, dropdown value="formal").
 *     El runtime del backend también es canónico en "formal"
 *     (quiz-intentos.ts:97 `QuizTipo = "practica"|"formal"|"competencia"`;
 *     quiz-attempts.ts:1848 gatea `quiz.type === "formal"` para la nota).
 *     Pero `ModuleQuizSchema.type` sólo aceptaba ["practica","evaluacion",
 *     "competencia"], así que Zod rechazaba "formal" con 400.
 *  2. `useModuloPersistence` stripeaba el id de los cuestionarios nuevos
 *     (ids `quiz-...`), pero `ModuleQuizSchema.id` es obligatorio y el POST
 *     usa `quiz.id` directo → 400 / id faltante.
 *
 * Ambas fallas disparaban juntas al agregar un cuestionario de evaluación,
 * y el front las ocultaba con un `catch {}` silencioso ("No se pudo guardar
 * el módulo").
 *
 * Fix:
 *  1. `ModuleQuizSchema.type` ahora acepta "formal" (modulo.ts).
 *  2. El front envía siempre el `id` del cuestionario (useModuloPersistence.ts).
 *
 * Estos tests usan los valores REALES que emite el editor (a diferencia de
 * los tests previos, que usaban "evaluacion" + ids reales y por eso no
 * detectaban el bug).
 */

import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import {
  resetPrisma,
  seedUser,
  tokenFor,
  startServer,
  jsonRequest,
} from "./_helpers/setup";

let baseUrl: string;
let close: () => Promise<void>;

const TEACHER = "teacher-qf";

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
  seedUser({ id: TEACHER, role: "TEACHER", schoolId: "esc-qf" });
});

test("POST: módulo con cuestionario 'formal' e id temporal `quiz-...` → 201 y GET preserva el tipo", async () => {
  const token = tokenFor({ id: TEACHER, role: "TEACHER" });
  const payload = {
    id: "mod-formal",
    title: "Módulo con evaluación",
    description: "desc",
    subject: "Matemáticas",
    category: "evaluacion",
    level: "secundaria",
    durationMinutes: 30,
    visibility: "publico",
    createdBy: TEACHER,
    createdAt: "2026-06-27T00:00:00.000Z",
    updatedAt: "2026-06-27T00:00:00.000Z",
    dependencies: [],
    theoryItems: [],
    quizzes: [
      {
        // id temporal tal como lo genera `buildQuizId()` en el editor.
        id: "quiz-1700000000-abc123",
        title: "Evaluación unidad 1",
        type: "formal",
        mode: "manual",
        visibility: "publico",
        questions: [
          { id: "p1", prompt: "¿Cuánto es 2+2?", questionType: "input", answerKey: "4" },
        ],
        maxIntentos: 1,
        politicaNota: "mejor",
        timerSegundos: null,
        fullscreenOnStart: true,
      },
    ],
  };

  const postRes = await jsonRequest(baseUrl, "POST", "/api/modulos", { token, body: payload });
  assert.equal(postRes.status, 201, "POST debe crear el módulo con cuestionario formal");

  const getRes = await jsonRequest(baseUrl, "GET", "/api/modulos/mod-formal", { token });
  assert.equal(getRes.status, 200);
  const body = getRes.body as {
    quizzes: Array<{ id: string; title: string; type: string }>;
  };
  assert.equal(body.quizzes.length, 1, "el cuestionario debe persistirse");
  assert.equal(body.quizzes[0].id, "quiz-1700000000-abc123", "el id temporal debe persistirse tal cual");
  assert.equal(body.quizzes[0].type, "formal", "el tipo 'formal' debe sobrevivir el round-trip");
});

test("PATCH: agregar un cuestionario 'formal' nuevo a un módulo existente → 200 y queda guardado", async () => {
  const token = tokenFor({ id: TEACHER, role: "TEACHER" });

  // Módulo inicial sin cuestionarios.
  const base = {
    id: "mod-patch-formal",
    title: "Módulo base",
    description: "desc",
    subject: "Historia",
    category: "evaluacion",
    level: "primaria",
    durationMinutes: 20,
    visibility: "publico",
    createdBy: TEACHER,
    createdAt: "2026-06-27T00:00:00.000Z",
    updatedAt: "2026-06-27T00:00:00.000Z",
    dependencies: [],
    theoryItems: [],
    quizzes: [],
  };
  const postRes = await jsonRequest(baseUrl, "POST", "/api/modulos", { token, body: base });
  assert.equal(postRes.status, 201);

  // PATCH agregando un cuestionario formal nuevo (id temporal).
  const patchBody = {
    ...base,
    quizzes: [
      {
        id: "quiz-1700000999-def456",
        title: "Evaluación final",
        type: "formal",
        mode: "manual",
        visibility: "publico",
        questions: [
          { id: "p1", prompt: "Pregunta", questionType: "input", answerKey: "ok" },
        ],
      },
    ],
    updatedAt: "2026-06-27T01:00:00.000Z",
  };
  const patchRes = await jsonRequest(baseUrl, "PATCH", "/api/modulos/mod-patch-formal", {
    token,
    body: patchBody,
  });
  assert.equal(patchRes.status, 200, "PATCH debe aceptar el cuestionario formal");

  const getRes = await jsonRequest(baseUrl, "GET", "/api/modulos/mod-patch-formal", { token });
  const body = getRes.body as { quizzes: Array<{ id: string; type: string }> };
  assert.equal(body.quizzes.length, 1, "el cuestionario formal agregado debe quedar guardado");
  assert.equal(body.quizzes[0].type, "formal");
});
