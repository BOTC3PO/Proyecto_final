/**
 * PLAN-Y — la config del cuestionario vive SOLO en Tiza.
 *
 * Bug original: `applyModuleUpdate` reconstruía `settings` desde el payload
 * del módulo con defaults forzados (`type ?? "practica"`, `timerSegundos →
 * null`, etc.), así que guardar el módulo pisaba lo que Tiza había escrito
 * por `PATCH /api/quizzes/:quizId/meta`. `title` tenía el mismo problema
 * (`title: q.title ?? ""`).
 *
 * Cubre:
 *  (a) GARANTÍA: guardar el módulo SIN campos de config no pisa lo que
 *      Tiza configuró (type/visibility/timer/maxIntentos/title/instructions).
 *  (b) Retrocompat: payload viejo (campos explícitos) se aplica igual que
 *      siempre.
 *  (c) Quiz NUEVO vía guardado de módulo recibe los defaults de creación.
 *  (d) `instructions` (campo nuevo, fase 3): PATCH /meta round-trip.
 */
import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";

let baseUrl: string;
let close: () => Promise<void>;

const DOCENTE_ID = "docente-py";
const ESCUELA_ID = "escuela-py";
const MOD_ID = "mod-py";
const QUIZ_ID = "quiz-py";
const QV_ID = "qv-py";

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
  const now = new Date().toISOString();
  prisma.modulo.rows.push({
    id: MOD_ID,
    titulo: "Modulo plan-y",
    descripcion: "desc",
    subject: "fisica",
    visibility: "privado",
    schoolId: ESCUELA_ID,
    ownerUserId: DOCENTE_ID,
    dependencies: null,
    isDeleted: false,
    createdAt: now,
    updatedAt: now,
  } as never);
  prisma.quiz.rows.push({
    id: QUIZ_ID,
    moduleId: MOD_ID,
    title: "Quiz plan-y",
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
    settings: JSON.stringify({ type: "practica", visibility: "publico" }),
    createdAt: now,
  });
});

const docente = () => tokenFor({ id: DOCENTE_ID, role: "TEACHER", schoolId: ESCUELA_ID });

const settingsActuales = async () => {
  const quiz = await prisma.quiz.findFirst({ where: { id: QUIZ_ID } });
  const version = await prisma.quizVersion.findFirst({
    where: { id: quiz!.currentVersionId as string },
  });
  return {
    quiz: quiz!,
    settings: JSON.parse(version!.settings as string) as Record<string, unknown>,
  };
};

test("(a) guardar el módulo sin campos de config NO pisa lo configurado en Tiza", async () => {
  // 1. Tiza configura el cuestionario.
  const patchMeta = await jsonRequest(baseUrl, "PATCH", `/api/quizzes/${QUIZ_ID}/meta`, {
    token: docente(),
    body: {
      title: "Renombrado en Tiza",
      type: "formal",
      visibility: "escuela",
      timerSegundos: 1800,
      maxIntentos: 3,
      instructions: "Leé con atención. Tenés 30 minutos.",
    },
  });
  assert.equal(patchMeta.status, 200, JSON.stringify(patchMeta.body));

  // 2. Guardado del módulo estilo PLAN-Y: el quiz viaja SOLO con id/contenido
  //    (el cliente nuevo no manda title/type/visibility/config).
  const patchModulo = await jsonRequest(baseUrl, "PATCH", `/api/modulos/${MOD_ID}`, {
    token: docente(),
    body: {
      subject: "fisica",
      category: "sin-categoria",
      quizzes: [{ id: QUIZ_ID, mode: "manual", questions: [] }],
    },
  });
  assert.equal(patchModulo.status, 200, JSON.stringify(patchModulo.body));

  // 3. La config de Tiza sobrevive en la versión NUEVA que creó el guardado.
  const { quiz, settings } = await settingsActuales();
  assert.notEqual(quiz.currentVersionId, QV_ID, "el guardado del módulo versiona");
  assert.equal(quiz.title, "Renombrado en Tiza", "title no debe pisarse");
  assert.equal(settings.type, "formal");
  assert.equal(settings.visibility, "escuela");
  assert.equal(settings.timerSegundos, 1800);
  assert.equal(settings.maxIntentos, 3);
  assert.equal(settings.instructions, "Leé con atención. Tenés 30 minutos.");
});

test("(b) retrocompat: payload viejo con campos explícitos se aplica igual", async () => {
  await jsonRequest(baseUrl, "PATCH", `/api/quizzes/${QUIZ_ID}/meta`, {
    token: docente(),
    body: { type: "formal", timerSegundos: 1800 },
  });

  const patchModulo = await jsonRequest(baseUrl, "PATCH", `/api/modulos/${MOD_ID}`, {
    token: docente(),
    body: {
      subject: "fisica",
      category: "sin-categoria",
      quizzes: [
        {
          id: QUIZ_ID,
          title: "Título del cliente viejo",
          type: "practica",
          visibility: "publico",
          timerSegundos: 600,
        },
      ],
    },
  });
  assert.equal(patchModulo.status, 200, JSON.stringify(patchModulo.body));

  const { quiz, settings } = await settingsActuales();
  assert.equal(quiz.title, "Título del cliente viejo");
  assert.equal(settings.type, "practica", "mandado explícito = se aplica");
  assert.equal(settings.timerSegundos, 600);
});

test("(c) quiz nuevo vía guardado de módulo recibe defaults de creación", async () => {
  const patchModulo = await jsonRequest(baseUrl, "PATCH", `/api/modulos/${MOD_ID}`, {
    token: docente(),
    body: {
      subject: "fisica",
      category: "sin-categoria",
      quizzes: [
        { id: QUIZ_ID, mode: "manual", questions: [] },
        { id: "quiz-py-nuevo", mode: "manual", questions: [] },
      ],
    },
  });
  assert.equal(patchModulo.status, 200, JSON.stringify(patchModulo.body));

  const nuevo = await prisma.quiz.findFirst({ where: { id: "quiz-py-nuevo" } });
  assert.ok(nuevo, "el quiz nuevo se crea");
  const version = await prisma.quizVersion.findFirst({
    where: { id: nuevo!.currentVersionId as string },
  });
  const settings = JSON.parse(version!.settings as string) as Record<string, unknown>;
  assert.equal(settings.type, "practica");
  assert.equal(settings.visibility, "publico");
  assert.equal(settings.ocultarPuntos, false);
  assert.equal(settings.timerSegundos, null);
  assert.equal(settings.fullscreenOnStart, false);
});

test("(d) instructions: PATCH /meta round-trip (GET lo devuelve, settings lo persiste)", async () => {
  const patch = await jsonRequest(baseUrl, "PATCH", `/api/quizzes/${QUIZ_ID}/meta`, {
    token: docente(),
    body: { instructions: "Sin calculadora." },
  });
  assert.equal(patch.status, 200, JSON.stringify(patch.body));
  assert.equal((patch.body as { instructions: string }).instructions, "Sin calculadora.");

  const get = await jsonRequest(baseUrl, "GET", `/api/quizzes/${QUIZ_ID}/meta`, { token: docente() });
  assert.equal((get.body as { instructions: string }).instructions, "Sin calculadora.");

  const raw = await prisma.quizVersion.findFirst({ where: { id: QV_ID } });
  const settings = JSON.parse(raw!.settings as string) as Record<string, unknown>;
  assert.equal(settings.instructions, "Sin calculadora.");

  // Vaciar con string vacío también persiste (borrar instrucciones).
  await jsonRequest(baseUrl, "PATCH", `/api/quizzes/${QUIZ_ID}/meta`, {
    token: docente(),
    body: { instructions: "" },
  });
  const get2 = await jsonRequest(baseUrl, "GET", `/api/quizzes/${QUIZ_ID}/meta`, { token: docente() });
  assert.equal((get2.body as { instructions: string }).instructions, "");
});
