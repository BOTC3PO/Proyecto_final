/**
 * PLAN-Z fase 3/4 — "un solo set de metadatos": `materia`/`nivel`/`tags`/
 * `descripcion` a nivel cuestionario, editables desde la plantilla-config
 * de Tiza vía `PATCH /api/quizzes/:quizId/meta`.
 *
 * Cubre:
 *  (a) PATCH persiste los 4 campos nuevos; GET los devuelve.
 *  (b) GARANTÍA CRÍTICA (PLAN-Z §3.6, decisión de Javier): `materia`
 *      declarada en Tiza persiste en `settings.materiaDeclarada`, NUNCA
 *      en `settings.materia` — esa clave la administra en exclusiva
 *      `mergeMateriaIntoSettings` (PLAN-F §22) con la regla "la del
 *      módulo manda al adoptar". Si se mezclaran, un profesor que declara
 *      materia en Tiza y luego el módulo lo adopta/edita rompería esa
 *      garantía (la materia del módulo dejaría de pisar).
 *  (c) No pisa otras claves existentes de `settings` (composition, etc.).
 */
import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";

let baseUrl: string;
let close: () => Promise<void>;

const DOCENTE_ID = "docente-pz3";
const ESCUELA_ID = "escuela-pz3";
const MOD_ID = "mod-pz3";
const QUIZ_ID = "quiz-pz3";
const QV_ID = "qv-pz3";

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
    titulo: "Modulo fase3",
    descripcion: "desc",
    subject: "quimica",
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
    title: "Quiz fase3",
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
    settings: JSON.stringify({ type: "practica", composition: { modo: "fijo" } }),
    createdAt: now,
  });
});

const docente = () => tokenFor({ id: DOCENTE_ID, role: "TEACHER", schoolId: ESCUELA_ID });

test("(a) PATCH persiste materia/nivel/tags/descripcion; GET los devuelve", async () => {
  const res = await jsonRequest(baseUrl, "PATCH", `/api/quizzes/${QUIZ_ID}/meta`, {
    token: docente(),
    body: {
      materia: "física",
      nivel: "3° año",
      tags: ["cinemática", "mru"],
      descripcion: "Cuestionario de repaso.",
    },
  });
  assert.equal(res.status, 200, JSON.stringify(res.body));
  const body = res.body as {
    materia: string;
    nivel: string;
    tags: string[];
    descripcion: string;
  };
  assert.equal(body.materia, "física");
  assert.equal(body.nivel, "3° año");
  assert.deepEqual(body.tags, ["cinemática", "mru"]);
  assert.equal(body.descripcion, "Cuestionario de repaso.");

  const getRes = await jsonRequest(baseUrl, "GET", `/api/quizzes/${QUIZ_ID}/meta`, { token: docente() });
  const getBody = getRes.body as { materia: string; nivel: string; tags: string[]; descripcion: string };
  assert.equal(getBody.materia, "física");
  assert.deepEqual(getBody.tags, ["cinemática", "mru"]);
});

test("(b) GARANTÍA: materia de Tiza NO pisa settings.materia; el módulo sigue mandando al guardarse", async () => {
  await jsonRequest(baseUrl, "PATCH", `/api/quizzes/${QUIZ_ID}/meta`, {
    token: docente(),
    body: { materia: "física" },
  });

  const raw = await prisma.quizVersion.findFirst({ where: { id: QV_ID } });
  const settings = JSON.parse(raw!.settings as string) as Record<string, unknown>;
  assert.equal(settings.materiaDeclarada, "física");
  assert.equal(
    settings.materia,
    undefined,
    "settings.materia NO debe existir todavía: PATCH /meta no debe tocarlo",
  );

  // Guardar el MÓDULO (mismo endpoint que usa ModuloEditor.tsx) con este
  // quiz en `quizzes[]` — dispara `applyModuleUpdate` → `mergeMateriaIntoSettings`.
  // La materia del módulo (quimica) debe imponerse, ignorando por completo
  // la "física" declarada en Tiza (que vive en otra clave).
  const patchModulo = await jsonRequest(baseUrl, "PATCH", `/api/modulos/${MOD_ID}`, {
    token: docente(),
    body: {
      subject: "quimica",
      category: "sin-categoria",
      quizzes: [
        {
          id: QUIZ_ID,
          title: "Quiz fase3",
          type: "practica",
          visibility: "publico",
        },
      ],
    },
  });
  assert.equal(patchModulo.status, 200, JSON.stringify(patchModulo.body));

  const quizAfter = await prisma.quiz.findFirst({ where: { id: QUIZ_ID } });
  const versionAfter = await prisma.quizVersion.findFirst({
    where: { id: quizAfter!.currentVersionId as string },
  });
  const settingsAfter = JSON.parse(versionAfter!.settings as string) as Record<string, unknown>;
  assert.equal(settingsAfter.materia, "quimica", "settings.materia debe derivar del módulo, no de Tiza");
  assert.equal(
    settingsAfter.materiaDeclarada,
    "física",
    "la materia declarada en Tiza se conserva intacta en su propia clave",
  );
});

test("(c) PATCH de contenido no pisa otras claves existentes de settings", async () => {
  await jsonRequest(baseUrl, "PATCH", `/api/quizzes/${QUIZ_ID}/meta`, {
    token: docente(),
    body: { nivel: "1° año" },
  });
  const raw = await prisma.quizVersion.findFirst({ where: { id: QV_ID } });
  const settings = JSON.parse(raw!.settings as string) as Record<string, unknown>;
  assert.equal(settings.type, "practica");
  assert.deepEqual(settings.composition, { modo: "fijo" });
  assert.equal(settings.nivel, "1° año");
});
