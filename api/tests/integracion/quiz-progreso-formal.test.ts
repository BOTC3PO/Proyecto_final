/**
 * Aprobar un cuestionario formal marca el módulo como completado y desbloquea el siguiente.
 *
 * Regresión: `QuizAttempt` no tiene columna de módulo, y el submit usaba `attempt.moduleId` (siempre vacío) para
 * registrar el progreso: nunca se guardaba nada y ningún alumno podía avanzar por una cadena de módulos.
 */
import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import { compile, parse } from "@vb/vblang";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";
import { parseCuestionarioPreguntas, sortearCuestionarioPreguntas } from "../../src/lib/quiz-preguntas";
import { materializeVblangPool } from "../../src/lib/vblang-materialize";

let baseUrl: string;
let close: () => Promise<void>;
const ALUMNO = "pf-alumno";
const now = () => new Date().toISOString();
const token = () => tokenFor({ id: ALUMNO, role: "STUDENT", schoolId: null });
const DSL = `variables:
  a: random(1, 10)

enunciado: "Cuanto es {a} + 1?"

respuesta: a + 1
tolerancia: 0`;

function modulo(id: string, dependencias: string[], tipo: "formal" | "practica") {
  prisma.modulo.rows.push({ id, slug: id, titulo: id, descripcion: null, visibility: "publico", schoolId: null, ownerUserId: "system", teoriaId: null,
    tuesdayDocId: null, libroId: null, defaultQuestionCount: null, isDeleted: false, createdAt: now(), updatedAt: now(),
    dependencies: JSON.stringify(dependencias.map((d) => ({ id: d, type: "required" }))) } as never);
  prisma.plantillaEjercicio.rows.push({ id: `${id}.p1`, ownerUserId: "system", schoolId: null, visibility: "privada", nombre: id, descripcion: null, materia: "m",
    tags: null, codigoDsl: DSL, version: 1, basadoEn: null, publicAprobado: false, isDeleted: false, createdAt: now(), updatedAt: now() } as never);
  prisma.quiz.rows.push({ id: `${id}.quiz`, moduleId: id, title: id, currentVersionId: `${id}.v1`, isActive: true, createdAt: now(), updatedAt: now() } as never);
  prisma.quizVersion.rows.push({ id: `${id}.v1`, quizId: `${id}.quiz`, versionNumber: 1, questions: null, generatorId: null, generatorVersion: null, params: null, count: null,
    seedPolicy: 0, fixedSeed: null, createdAt: now(), createdBy: "system",
    settings: JSON.stringify({ type: tipo, preguntas: { cantidadGlobal: 1, preguntas: [{ plantillaId: `${id}.p1`, tipo: "obligatoria" }] } }) } as never);
}
async function rendir(moduloId: string, correcto: boolean) {
  const quizId = `${moduloId}.quiz`;
  const c = await jsonRequest(baseUrl, "POST", "/api/quiz-attempts", { token: token(), body: { quizId, moduleId: moduloId } });
  if (c.status !== 201) return { crear: c, enviar: null };
  const id = (c.body as { id: string }).id;
  const settings = JSON.parse(String(prisma.quizVersion.rows.find((v) => v.quizId === quizId)!.settings));
  const slot = sortearCuestionarioPreguntas(parseCuestionarioPreguntas(settings.preguntas), { quizId, alumnoId: ALUMNO, intento: 1 }).slots[0];
  const q = materializeVblangPool(compile(parse(DSL)), slot.seed, 1).questions[0];
  const enviar = await jsonRequest(baseUrl, "POST", `/api/quiz-attempts/${id}/submit`, { token: token(), body: { answers: { [q.id]: correcto ? String(q.answerKey) : "999999" }, presentedIds: [q.id] } });
  assert.equal(enviar.status, 200, JSON.stringify(enviar.body));
  return { crear: c, enviar };
}
const estado = (moduloId: string) => prisma.progresoModulo.rows.find((r) => r.usuarioId === ALUMNO && r.moduloId === moduloId)?.status;

before(async () => {
  const { quizAttempts } = await import("../../src/routes/quiz-attempts");
  const srv = await startServer([quizAttempts]);
  baseUrl = srv.baseUrl; close = srv.close;
});
after(async () => { if (close) await close(); });
beforeEach(() => { resetPrisma(); seedUser({ id: ALUMNO, role: "STUDENT", schoolId: null }); });

test("aprobar el formal completa el módulo y desbloquea el siguiente; reprobar lo deja en progreso", async () => {
  modulo("m-a", [], "formal"); modulo("m-b", ["m-a"], "formal");
  assert.equal((await rendir("m-b", true)).crear.status, 403, "bloqueado antes de completar el previo");

  const mal = await rendir("m-a", false);
  assert.equal((mal.enviar!.body as { aprobado: boolean }).aprobado, false);
  assert.equal(estado("m-a"), "en_progreso", "reprobar deja el módulo en progreso");
  assert.equal((await rendir("m-b", true)).crear.status, 403, "sigue bloqueado");

  const bien = await rendir("m-a", true);
  assert.equal((bien.enviar!.body as { aprobado: boolean }).aprobado, true);
  assert.equal(estado("m-a"), "completado", "aprobar lo completa");

  const siguiente = await rendir("m-b", true);
  assert.equal(siguiente.crear.status, 201, "se desbloqueó el siguiente");
  assert.equal(estado("m-b"), "completado");
});

test("un cuestionario de práctica no completa el módulo", async () => {
  modulo("m-p", [], "practica");
  await rendir("m-p", true);
  assert.equal(estado("m-p"), undefined);
});
