/**
 * FIX-GUARDADO — el back persiste `subject` (materia) y `theoryItems`
 * (teoría como contenido embebido) en POST y PUT, y el GET los devuelve.
 *
 * Causa raíz: el front enviaba `subject` y `theoryItems` en el payload
 * (useModuloPersistence.ts:209-225), el ModuleSchema los aceptaba
 * (modulo.ts:208,227), pero los handlers POST/PUT no los incluían en
 * `moduloData`/`updateData` (modulos.ts:500-510, 598-611). Resultado:
 * los módulos se guardaban sin materia ni teoría.
 *
 * Fix:
 *  1. Migración `20260617020000_modulo_theory_items` agrega columna
 *     `theory_items TEXT` (nullable, JSON serializado) a `modulos`.
 *  2. POST persiste `subject` y `theoryItems` (JSON.stringify).
 *  3. PUT persiste `subject` y `theoryItems` si vienen en el payload.
 *  4. GET devuelve `theoryItems` (deserializado con safeJsonParse).
 *
 * Cubre:
 *  1. POST con subject + theoryItems + quizzes → GET devuelve los tres.
 *  2. PUT actualizando subject + theoryItems → GET refleja los cambios.
 *  3. Módulo legacy sin subject/theoryItems → GET devuelve null/[] (compat).
 *  4. Round-trip: guardar y releer reproduce el contenido exacto.
 *
 * Ver `docs/qa/diagnostico_guardado.md`.
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

const TEACHER = "teacher-fg";
const MOD_NEW = "mod-new";
const MOD_LEGACY = "mod-legacy";

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
  seedUser({ id: TEACHER, role: "TEACHER", schoolId: "esc-fg" });
});

test("FIX-GUARDADO: POST con subject + theoryItems + quizzes → GET devuelve los tres", async () => {
  const token = tokenFor({ id: TEACHER, role: "TEACHER" });
  const payload = {
    id: MOD_NEW,
    title: "Módulo con todo",
    description: "desc",
    subject: "Matemáticas",
    category: "general",
    level: "secundaria",
    durationMinutes: 30,
    visibility: "publico",
    createdBy: TEACHER,
    createdAt: "2026-06-17T00:00:00.000Z",
    updatedAt: "2026-06-17T00:00:00.000Z",
    dependencies: [],
    theoryItems: [
      { id: "t1", title: "Teorema de Pitágoras", type: "Texto", detail: "a² + b² = c²" },
      { id: "t2", title: "Ejemplo", type: "Video", detail: "https://example.com/video" },
    ],
    quizzes: [
      {
        id: "quiz-1",
        title: "Quiz de prueba",
        type: "practica",
        mode: "manual",
        visibility: "publico",
        questions: [
          {
            id: "q1",
            prompt: "¿Cuánto es 2+2?",
            questionType: "mc",
            options: ["3", "4", "5"],
            answerKey: "4",
          },
        ],
      },
    ],
  };

  const postRes = await jsonRequest(baseUrl, "POST", "/api/modulos", { token, body: payload });
  assert.equal(postRes.status, 201, "POST debe crear el módulo");

  const getRes = await jsonRequest(baseUrl, "GET", `/api/modulos/${MOD_NEW}`, { token });
  assert.equal(getRes.status, 200, "GET debe devolver el módulo");
  const body = getRes.body as {
    subject: string | null;
    theoryItems: Array<{ id: string; title: string; type: string; detail: string }>;
    quizzes: Array<{ id: string; title: string }>;
  };

  assert.equal(body.subject, "Matemáticas", "subject debe persistirse");
  assert.equal(body.theoryItems.length, 2, "theoryItems debe persistirse");
  assert.equal(body.theoryItems[0].id, "t1");
  assert.equal(body.theoryItems[0].title, "Teorema de Pitágoras");
  assert.equal(body.theoryItems[0].detail, "a² + b² = c²");
  assert.equal(body.quizzes.length, 1, "quizzes debe persistirse");
  assert.equal(body.quizzes[0].id, "quiz-1");
});

test("FIX-GUARDADO: PUT actualizando subject + theoryItems → GET refleja los cambios", async () => {
  // Crear un módulo inicial.
  const token = tokenFor({ id: TEACHER, role: "TEACHER" });
  const initialPayload = {
    id: "mod-update",
    title: "Módulo inicial",
    description: "desc",
    subject: "Historia",
    category: "general",
    level: "primaria",
    durationMinutes: 20,
    visibility: "publico",
    createdBy: TEACHER,
    createdAt: "2026-06-17T00:00:00.000Z",
    updatedAt: "2026-06-17T00:00:00.000Z",
    dependencies: [],
    theoryItems: [{ id: "t1", title: "Tema 1", type: "Texto", detail: "contenido" }],
    quizzes: [],
  };
  await jsonRequest(baseUrl, "POST", "/api/modulos", { token, body: initialPayload });

  // Actualizar subject y theoryItems.
  const updatePayload = {
    ...initialPayload,
    subject: "Geografía",
    theoryItems: [
      { id: "t1", title: "Tema 1 (actualizado)", type: "Texto", detail: "contenido actualizado" },
      { id: "t2", title: "Tema 2 (nuevo)", type: "Video", detail: "https://example.com" },
    ],
    updatedAt: "2026-06-17T01:00:00.000Z",
  };
  const putRes = await jsonRequest(baseUrl, "PUT", "/api/modulos/mod-update", {
    token,
    body: updatePayload,
  });
  assert.equal(putRes.status, 200, "PUT debe actualizar el módulo");

  const getRes = await jsonRequest(baseUrl, "GET", "/api/modulos/mod-update", { token });
  const body = getRes.body as {
    subject: string | null;
    theoryItems: Array<{ id: string; title: string; detail: string }>;
  };

  assert.equal(body.subject, "Geografía", "subject debe actualizarse");
  assert.equal(body.theoryItems.length, 2, "theoryItems debe actualizarse");
  assert.equal(body.theoryItems[0].title, "Tema 1 (actualizado)");
  assert.equal(body.theoryItems[1].id, "t2");
});

test("FIX-GUARDADO: módulo legacy sin subject/theoryItems → GET devuelve null/[] (compatibilidad)", async () => {
  // Insertar un módulo directamente en la BD (simulando pre-migración).
  const now = new Date().toISOString();
  prisma.modulo.rows.push({
    id: MOD_LEGACY,
    titulo: "Módulo legacy",
    descripcion: "desc",
    subject: null,
    theoryItems: null,
    visibility: "publico",
    schoolId: null,
    ownerUserId: TEACHER,
    dependencies: null,
    isDeleted: false,
    createdAt: now,
    updatedAt: now,
  });

  const token = tokenFor({ id: TEACHER, role: "TEACHER" });
  const getRes = await jsonRequest(baseUrl, "GET", `/api/modulos/${MOD_LEGACY}`, { token });
  assert.equal(getRes.status, 200);
  const body = getRes.body as { subject: string | null; theoryItems: unknown[] };

  assert.equal(body.subject, null, "subject debe ser null para módulos legacy");
  assert.deepEqual(body.theoryItems, [], "theoryItems debe ser [] para módulos legacy");
});

test("FIX-GUARDADO: round-trip — guardar y releer reproduce el contenido exacto", async () => {
  const token = tokenFor({ id: TEACHER, role: "TEACHER" });
  const originalTheory = [
    { id: "t1", title: "Introducción", type: "Texto", detail: "Contenido de introducción" },
    { id: "t2", title: "Demostración", type: "Video", detail: "https://youtube.com/watch?v=abc" },
    { id: "t3", title: "Ejercicio", type: "Texto", detail: "Resolver: 2x + 3 = 7" },
  ];
  const payload = {
    id: "mod-roundtrip",
    title: "Módulo round-trip",
    description: "desc",
    subject: "Álgebra",
    category: "matemáticas",
    level: "universidad",
    durationMinutes: 45,
    visibility: "publico",
    createdBy: TEACHER,
    createdAt: "2026-06-17T00:00:00.000Z",
    updatedAt: "2026-06-17T00:00:00.000Z",
    dependencies: [],
    theoryItems: originalTheory,
    quizzes: [],
  };

  await jsonRequest(baseUrl, "POST", "/api/modulos", { token, body: payload });
  const getRes = await jsonRequest(baseUrl, "GET", "/api/modulos/mod-roundtrip", { token });
  const body = getRes.body as { subject: string; theoryItems: typeof originalTheory };

  assert.equal(body.subject, "Álgebra");
  assert.deepEqual(body.theoryItems, originalTheory, "theoryItems debe reproducirse exactamente");
});
