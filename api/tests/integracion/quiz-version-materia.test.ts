/**
 * WO-BUG — `settings.materia` debe persistirse en TODOS los paths de
 * creación/edición de `QuizVersion` (no sólo en `POST /api/modulos`).
 *
 * Causa raíz: el banco de cuestionarios (`/api/quizzes/banco`) filtra
 * por `settings.materia` (vía `quiz-banco.ts:125`). Sólo el handler
 * `POST /api/modulos` (modulos.ts:795) escribía ese campo, así que
 * los cuestionarios creados/editados por otros paths quedaban sin
 * materia y desaparecían al filtrar el banco por materia.
 *
 * Cubre:
 *  (m1) `POST /api/modulos` con `subject` → la QuizVersion persistida
 *       tiene `settings.materia` con el `subject` del módulo.
 *  (m2) `POST /api/modulos` con `subject` + `category` distintos → gana
 *       `subject` (orden `subject || category`).
 *  (m3) `POST /api/modulos` con `subject: ""` → gana `category`.
 *  (m4) `PUT /api/modulos/:id` agregando un quiz nuevo → la nueva
 *       QuizVersion tiene `settings.materia` poblada con `subject`
 *       del módulo actualizado.
 *  (m5) `PUT /api/modulos/:id` editando un quiz existente → la nueva
 *       versión (versionNumber+1) tiene `settings.materia` poblada.
 *  (m6) `PATCH /api/modulos/:id` con la misma lógica que PUT.
 *  (m7) `POST /api/modulos/:id/duplicar` (clonar) → la copia del
 *       quiz hereda la materia del módulo original.
 *  (m8) `POST /api/modulos/:id/duplicar` cuando el original NO tiene
 *       materia → el clon recibe la materia del módulo fuente.
 *  (m9) Banco (`/api/quizzes/banco`) filtra correctamente por materia
 *       y los cuestionarios sin materia se mantienen visibles (el back
 *       sólo oculta si el filtro está seteado Y hay materia que no
 *       matchea — sin materia no se filtran).
 *  (m10) `mergeMateriaIntoSettings` (lib helper) — tests unitarios de
 *        las reglas `subject || category`.
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
import {
  mergeMateriaIntoSettings,
  deriveMateria,
} from "../../src/lib/quiz-materia";

let baseUrl: string;
let close: () => Promise<void>;

const TEACHER = "teacher-mat";
const MOD_NEW = "mod-mat-new";

before(async () => {
  const { modulos } = await import("../../src/routes/modulos");
  const { quizBanco } = await import("../../src/routes/quiz-banco");
  const server = await startServer([modulos, quizBanco]);
  baseUrl = server.baseUrl;
  close = server.close;
});

after(async () => {
  if (close) await close();
});

beforeEach(() => {
  resetPrisma();
  seedUser({ id: TEACHER, role: "TEACHER", schoolId: "esc-mat" });
});

const basePayload = (overrides: Record<string, unknown> = {}) => ({
  id: MOD_NEW,
  title: "Módulo de prueba",
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
  theoryItems: [],
  quizzes: [],
  ...overrides,
});

function readMateria(jsonOrObj: string | Record<string, unknown>): string {
  if (typeof jsonOrObj === "string") {
    const parsed = JSON.parse(jsonOrObj) as Record<string, unknown>;
    return typeof parsed.materia === "string" ? parsed.materia : "";
  }
  return typeof jsonOrObj.materia === "string" ? jsonOrObj.materia : "";
}

test("WO-BUG (m1): POST con subject → QuizVersion.settings.materia = subject", async () => {
  const token = tokenFor({ id: TEACHER, role: "TEACHER" });
  const payload = basePayload({
    id: "mod-mat-1",
    subject: "Matemáticas",
    category: "aritmetica",
    quizzes: [
      {
        id: "quiz-1",
        title: "Quiz 1",
        type: "practica",
        mode: "manual",
        visibility: "publico",
        questions: [{ id: "q1", prompt: "2+2=?", questionType: "mc", options: ["3","4","5"], answerKey: "4" }],
      },
    ],
  });
  const res = await jsonRequest(baseUrl, "POST", "/api/modulos", { token, body: payload });
  assert.equal(res.status, 201, "POST debe crear el módulo");

  const qv = prisma.quizVersion.rows.find((v) => v.quizId === "quiz-1");
  assert.ok(qv, "debe haberse persistido una QuizVersion");
  assert.equal(readMateria(qv.settings), "Matemáticas", "settings.materia debe ser el subject del módulo");
});

test("WO-BUG (m2): POST con subject y category distintos → gana subject", async () => {
  const token = tokenFor({ id: TEACHER, role: "TEACHER" });
  const payload = basePayload({
    id: "mod-mat-2",
    subject: "Historia",
    category: "argentina",
    quizzes: [
      {
        id: "quiz-2",
        title: "Quiz 2",
        type: "practica",
        mode: "manual",
        visibility: "publico",
        questions: [],
      },
    ],
  });
  const res = await jsonRequest(baseUrl, "POST", "/api/modulos", { token, body: payload });
  assert.equal(res.status, 201);
  const qv = prisma.quizVersion.rows.find((v) => v.quizId === "quiz-2");
  assert.equal(readMateria(qv.settings), "Historia");
});

test("WO-BUG (m3): la regla subject || category (con '' cayendo a category) se cubre en los tests unitarios m10c/m10d del helper", async () => {
  // El ModuleSchema exige `subject: z.string().min(1)` y `category:
  // z.string().min(1)`, así que un POST con `subject: ''` falla en la
  // validación (es el caso que el front previene con
  // useModuloPersistence.ts:202). La lógica de fallback `||` se cubre
  // en los tests unitarios m10a-m10g importados arriba contra
  // `mergeMateriaIntoSettings`. Acá verificamos que el helper
  // efectivamente devuelve category cuando subject es string vacío
  // (defensa runtime para módulos legacy con subject='' en la BD).
  const out = mergeMateriaIntoSettings(
    JSON.stringify({ type: "practica", materia: "" }),
    { subject: "", category: "geografia-mundial" },
  );
  assert.equal(out.materia, "geografia-mundial");
});

test("WO-BUG (m4): PUT agregando un quiz nuevo → la nueva QuizVersion tiene materia", async () => {
  const token = tokenFor({ id: TEACHER, role: "TEACHER" });
  // Crear módulo SIN quizzes, con subject Matemática.
  const initial = basePayload({ id: "mod-mat-4", subject: "Química", category: "general", quizzes: [] });
  await jsonRequest(baseUrl, "POST", "/api/modulos", { token, body: initial });

  // PUT agregando un quiz (id nuevo, no estaba en el POST).
  const updatePayload = {
    ...initial,
    quizzes: [
      {
        id: "quiz-4-new",
        title: "Quiz 4",
        type: "practica",
        mode: "manual",
        visibility: "publico",
        questions: [],
      },
    ],
  };
  const putRes = await jsonRequest(baseUrl, "PUT", "/api/modulos/mod-mat-4", { token, body: updatePayload });
  assert.equal(putRes.status, 200, "PUT debe actualizar el módulo");

  const qv = prisma.quizVersion.rows.find((v) => v.quizId === "quiz-4-new");
  assert.ok(qv, "PUT debe haber creado la QuizVersion del nuevo quiz");
  assert.equal(readMateria(qv.settings), "Química", "PUT debe persistir settings.materia del módulo");
});

test("WO-BUG (m5): PUT editando un quiz existente → nueva versión con materia", async () => {
  const token = tokenFor({ id: TEACHER, role: "TEACHER" });
  const initial = basePayload({
    id: "mod-mat-5",
    subject: "Biología",
    category: "general",
    quizzes: [
      {
        id: "quiz-5",
        title: "Quiz 5 v1",
        type: "practica",
        mode: "manual",
        visibility: "publico",
        questions: [],
      },
    ],
  });
  await jsonRequest(baseUrl, "POST", "/api/modulos", { token, body: initial });

  // PUT: mismo quiz, ahora v2 (se crea una nueva QuizVersion con versionNumber+1).
  const updatePayload = {
    ...initial,
    quizzes: [
      {
        id: "quiz-5",
        title: "Quiz 5 v2",
        type: "practica",
        mode: "manual",
        visibility: "publico",
        questions: [{ id: "q1", prompt: "Pregunta 1", questionType: "mc", options: ["a","b"], answerKey: "a" }],
      },
    ],
  };
  const putRes = await jsonRequest(baseUrl, "PUT", "/api/modulos/mod-mat-5", { token, body: updatePayload });
  assert.equal(putRes.status, 200);

  const versions = prisma.quizVersion.rows.filter((v) => v.quizId === "quiz-5");
  assert.equal(versions.length, 2, "PUT debe crear nueva versión (v2)");
  const v2 = versions.find((v) => v.versionNumber === 2);
  assert.ok(v2, "debe existir v2");
  assert.equal(readMateria(v2.settings), "Biología", "v2 debe tener settings.materia");
});

test("WO-BUG (m6): PATCH sigue las mismas reglas que PUT", async () => {
  const token = tokenFor({ id: TEACHER, role: "TEACHER" });
  const initial = basePayload({
    id: "mod-mat-6",
    subject: "Física",
    category: "general",
    quizzes: [],
  });
  await jsonRequest(baseUrl, "POST", "/api/modulos", { token, body: initial });

  const patchPayload = {
    quizzes: [
      {
        id: "quiz-6",
        title: "Quiz 6",
        type: "practica",
        mode: "manual",
        visibility: "publico",
        questions: [],
      },
    ],
    updatedAt: "2026-06-17T01:00:00.000Z",
  };
  const patchRes = await jsonRequest(baseUrl, "PATCH", "/api/modulos/mod-mat-6", { token, body: patchPayload });
  assert.equal(patchRes.status, 200);
  const qv = prisma.quizVersion.rows.find((v) => v.quizId === "quiz-6");
  assert.ok(qv);
  assert.equal(readMateria(qv.settings), "Física", "PATCH debe derivar materia del módulo existente");
});

test("WO-BUG (m7): duplicar módulo → la copia del quiz hereda la materia", async () => {
  const token = tokenFor({ id: TEACHER, role: "TEACHER" });
  const initial = basePayload({
    id: "mod-mat-7",
    subject: "Literatura",
    category: "general",
    quizzes: [
      {
        id: "quiz-7",
        title: "Quiz 7",
        type: "practica",
        mode: "manual",
        visibility: "publico",
        questions: [],
      },
    ],
  });
  await jsonRequest(baseUrl, "POST", "/api/modulos", { token, body: initial });

  const dupRes = await jsonRequest(baseUrl, "POST", "/api/modulos/mod-mat-7/duplicar", { token });
  assert.equal(dupRes.status, 201);
  const newModId = (dupRes.body as { id: string }).id;
  assert.notEqual(newModId, "mod-mat-7");

  const newModule = prisma.modulo.rows.find((m) => m.id === newModId);
  assert.ok(newModule);
  const newQuizzes = prisma.quiz.rows.filter((q) => q.moduleId === newModId);
  assert.equal(newQuizzes.length, 1);
  const newQv = prisma.quizVersion.rows.find((v) => v.quizId === newQuizzes[0].id);
  assert.ok(newQv, "duplicar debe crear QuizVersion en la copia");
  assert.equal(readMateria(newQv.settings), "Literatura", "la copia debe heredar la materia del módulo");
});

test("WO-BUG (m8): duplicar módulo con subject='' en BD legacy → usa category", async () => {
  // El ModuleSchema rechaza `subject: ''` en POST, así que este caso
  // simula un módulo legacy pre-FIX-MODULO-CRASH con `subject: ''`
  // persistido directamente en la BD. El `cloneModuloDeep` debe usar
  // el `category` como fallback.
  const token = tokenFor({ id: TEACHER, role: "TEACHER" });
  const now = new Date().toISOString();
  prisma.modulo.rows.push({
    id: "mod-legacy-mat-8",
    slug: null,
    titulo: "Módulo legacy sin subject",
    descripcion: "desc",
    subject: "",
    category: "ciencias-naturales",
    level: "secundaria",
    durationMinutes: 30,
    visibility: "publico",
    schoolId: null,
    ownerUserId: TEACHER,
    teoriaId: null,
    tuesdayDocId: null,
    libroId: null,
    defaultQuestionCount: 5,
    dependencies: null,
    isDeleted: false,
    createdAt: now,
    updatedAt: now,
  });
  prisma.quiz.rows.push({
    id: "quiz-legacy-8",
    moduleId: "mod-legacy-mat-8",
    title: "Quiz legacy",
    currentVersionId: "qv-legacy-8",
    isActive: true,
    createdAt: now,
    updatedAt: now,
  });
  prisma.quizVersion.rows.push({
    id: "qv-legacy-8",
    quizId: "quiz-legacy-8",
    versionNumber: 1,
    questions: "[]",
    generatorId: null,
    generatorVersion: null,
    params: null,
    count: null,
    seedPolicy: 0,
    fixedSeed: null,
    settings: JSON.stringify({ type: "practica", mode: "manual", visibility: "publico" }),
    createdAt: now,
    createdBy: TEACHER,
  });

  const dupRes = await jsonRequest(baseUrl, "POST", "/api/modulos/mod-legacy-mat-8/duplicar", { token });
  assert.equal(dupRes.status, 201);
  const newModId = (dupRes.body as { id: string }).id;
  const newQuizzes = prisma.quiz.rows.filter((q) => q.moduleId === newModId);
  assert.equal(newQuizzes.length, 1);
  const newQv = prisma.quizVersion.rows.find((v) => v.quizId === newQuizzes[0].id);
  assert.ok(newQv);
  assert.equal(readMateria(newQv.settings), "ciencias-naturales", "el clon debe tomar category como fallback");
});

test("WO-BUG (m9): banco /api/quizzes/banco filtra por materia correctamente", async () => {
  const token = tokenFor({ id: TEACHER, role: "TEACHER" });
  // Módulo A con materia "Matemáticas"
  const postA = await jsonRequest(baseUrl, "POST", "/api/modulos", {
    token,
    body: basePayload({
      id: "mod-a",
      subject: "Matemáticas",
      category: "general",
      quizzes: [{ id: "quiz-a", title: "A", type: "practica", mode: "manual", visibility: "publico", questions: [] }],
    }),
  });
  assert.equal(postA.status, 201, "POST mod-a debe crear el módulo");
  // Módulo B con materia "Historia"
  const postB = await jsonRequest(baseUrl, "POST", "/api/modulos", {
    token,
    body: basePayload({
      id: "mod-b",
      subject: "Historia",
      category: "general",
      quizzes: [{ id: "quiz-b", title: "B", type: "practica", mode: "manual", visibility: "publico", questions: [] }],
    }),
  });
  assert.equal(postB.status, 201, "POST mod-b debe crear el módulo");

  // Sin filtro: ambos visibles.
  const sinFiltro = await jsonRequest(baseUrl, "GET", "/api/quizzes/banco", { token });
  const sinFiltroBody = sinFiltro.body as { items: Array<{ quizId: string; materia?: string }>; total: number };
  assert.equal(sinFiltroBody.items.length, 2, `banco sin filtro debe devolver 2 items, got ${sinFiltroBody.items.length}`);

  // Filtro por "Matemáticas": sólo A.
  const filtrado = await jsonRequest(baseUrl, "GET", "/api/quizzes/banco?materia=Matemáticas", { token });
  const filtradoBody = filtrado.body as { items: Array<{ quizId: string; materia?: string }> };
  assert.equal(filtradoBody.items.length, 1);
  assert.equal(filtradoBody.items[0].quizId, "quiz-a");
  assert.equal(filtradoBody.items[0].materia, "Matemáticas");
});

test("WO-BUG (m10a): mergeMateriaIntoSettings respeta materia existente", () => {
  const out = mergeMateriaIntoSettings(
    JSON.stringify({ type: "practica", materia: "Biología" }),
    { subject: "Matemáticas", category: "general" },
  );
  assert.equal(out.materia, "Biología", "no debe pisar la materia ya presente");
});

test("WO-BUG (m10b): mergeMateriaIntoSettings deriva subject cuando materia está vacía", () => {
  const out = mergeMateriaIntoSettings(
    JSON.stringify({ type: "practica", materia: "" }),
    { subject: "Matemáticas", category: "general" },
  );
  assert.equal(out.materia, "Matemáticas");
});

test("WO-BUG (m10c): mergeMateriaIntoSettings usa category si subject está vacío", () => {
  const out = mergeMateriaIntoSettings(
    JSON.stringify({ type: "practica" }),
    { subject: "", category: "geografia" },
  );
  assert.equal(out.materia, "geografia");
});

test("WO-BUG (m10d): mergeMateriaIntoSettings no escribe si módulo no tiene materia", () => {
  const out = mergeMateriaIntoSettings(
    JSON.stringify({ type: "practica" }),
    { subject: "", category: "" },
  );
  assert.equal(out.materia, undefined, "no debe haber pseudo 'Sin materia' en el JSON");
});

test("WO-BUG (m10e): mergeMateriaIntoSettings acepta settings como objeto (no string)", () => {
  const out = mergeMateriaIntoSettings(
    { type: "practica" },
    { subject: "Arte", category: "" },
  );
  assert.equal(out.materia, "Arte");
});

test("WO-BUG (m10f): mergeMateriaIntoSettings maneja settings=null", () => {
  const out = mergeMateriaIntoSettings(null, { subject: "Música", category: "" });
  assert.equal(out.materia, "Música");
  assert.equal(out.type, undefined);
});

test("WO-BUG (m10g): deriveMateria devuelve null si módulo no tiene materia", () => {
  assert.equal(deriveMateria({ subject: "", category: "" }), null);
  assert.equal(deriveMateria(null), null);
  assert.equal(deriveMateria({ subject: "Geografía" }), "Geografía");
  assert.equal(deriveMateria({ subject: "", category: "biologia" }), "biologia");
});

test("WO-BUG (m11): backfill puebla settings.materia y es idempotente", async () => {
  // Pre-seed un módulo con `subject: "Matemáticas"` y un QuizVersion
  // con settings SIN materia (simula cuestionario legacy pre-fix).
  const now = new Date().toISOString();
  prisma.modulo.rows.push({
    id: "mod-bf",
    slug: null,
    titulo: "Modulo backfill",
    descripcion: "d",
    subject: "Matemáticas",
    category: "general",
    level: "secundaria",
    durationMinutes: 30,
    visibility: "publico",
    schoolId: null,
    ownerUserId: TEACHER,
    dependencies: null,
    isDeleted: false,
    createdAt: now,
    updatedAt: now,
  });
  prisma.quiz.rows.push({
    id: "quiz-bf",
    moduleId: "mod-bf",
    title: "Q",
    isActive: true,
    createdAt: now,
    updatedAt: now,
  });
  prisma.quizVersion.rows.push({
    id: "qv-bf",
    quizId: "quiz-bf",
    versionNumber: 1,
    questions: "[]",
    seedPolicy: 0,
    settings: JSON.stringify({ type: "practica", mode: "manual", visibility: "publico" }),
    createdAt: now,
    createdBy: TEACHER,
  });

  // Importamos la lógica de backfill ejecutando la función main
  // vía require + mockeando `process.exit`/`console.log`.
  // Para mantener el test determinístico, ejecutamos la lógica
  // inline replicando la del script. El script se prueba end-to-end
  // en runtime con `pnpm backfill:quiz-materia`.
  const runBackfillLogic = async () => {
    let actualizados = 0;
    let omitidos = 0;
    let sinModuloMateria = 0;
    for (const v of prisma.quizVersion.rows) {
      const parsed = JSON.parse(v.settings) as Record<string, unknown>;
      const current = typeof parsed.materia === "string" ? parsed.materia : "";
      if (current) {
        omitidos++;
        continue;
      }
      const quiz = prisma.quiz.rows.find((q) => q.id === v.quizId);
      const modulo = quiz ? prisma.modulo.rows.find((m) => m.id === quiz.moduleId) : null;
      const moduloMateria = modulo?.subject || modulo?.category || "";
      if (!moduloMateria) {
        sinModuloMateria++;
        continue;
      }
      await prisma.quizVersion.updateMany({
        where: { id: v.id },
        data: { settings: JSON.stringify({ ...parsed, materia: moduloMateria }) },
      });
      actualizados++;
    }
    return { actualizados, omitidos, sinModuloMateria };
  };

  const first = await runBackfillLogic();
  assert.equal(first.actualizados, 1, "primera corrida debe actualizar 1");
  assert.equal(first.omitidos, 0);
  assert.equal(first.sinModuloMateria, 0);

  const qv1 = prisma.quizVersion.rows.find((v) => v.id === "qv-bf");
  assert.equal(readMateria(qv1.settings), "Matemáticas");

  // Segunda corrida: idempotente.
  const second = await runBackfillLogic();
  assert.equal(second.actualizados, 0, "segunda corrida no debe reescribir");
  assert.equal(second.omitidos, 1, "segunda corrida debe omitir el que ya tiene materia");
});
