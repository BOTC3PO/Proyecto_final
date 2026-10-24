/**
 * Repaso de un intento (`GET /api/quiz-attempts/:id/repaso`): explica en qué falló el alumno y qué temas repasar.
 *
 *  (a) Un examen que junta preguntas de dos temas: se agrupa por tema, el fallado queda primero y se recomienda repasarlo.
 *  (b) Un examen de idiomas (plantillas con la etiqueta `examen-jefe`): se agrupa por sección y no recomienda temas.
 *  (c) Solo el dueño lo ve, y solo después de enviar.
 */
import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import { compile, parse } from "@vb/vblang";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";
import { parseCuestionarioPreguntas, sortearCuestionarioPreguntas } from "../../src/lib/quiz-preguntas";
import { materializeVblangPool } from "../../src/lib/vblang-materialize";

let baseUrl: string;
let close: () => Promise<void>;

const ALUMNO = "rp-alumno";
const OTRO = "rp-otro";
const EXAMEN = "cont-t--examen";
const QUIZ = "cont-t--examen.quiz";
const QV = "cont-t--examen.v1";
const now = () => new Date().toISOString();
const tAlumno = (id = ALUMNO) => tokenFor({ id, role: "STUDENT", schoolId: null });

const dsl = (n: number) => `variables:
  a: random(1, 10)

enunciado: "Pregunta ${n}: cuanto es {a} + ${n}?"

respuesta: a + ${n}
tolerancia: 0
explicacion: "Se suma ${n} a {a}."`;

function plantilla(id: string, n: number, tags: string[]) {
  prisma.plantillaEjercicio.rows.push({
    id, ownerUserId: "system", schoolId: null, visibility: "privada", nombre: id, descripcion: null, materia: "matematica",
    tags: JSON.stringify(tags), codigoDsl: dsl(n), version: 1, basadoEn: null, publicAprobado: false, isDeleted: false,
    createdAt: now(), updatedAt: now(),
  } as never);
}
function modulo(id: string, titulo: string) {
  prisma.modulo.rows.push({ id, slug: id, titulo, descripcion: null, visibility: "publico", schoolId: null, ownerUserId: "system", teoriaId: null,
    tuesdayDocId: null, libroId: null, defaultQuestionCount: null, dependencies: null, isDeleted: false, createdAt: now(), updatedAt: now() } as never);
}
function examen(plantillaIds: string[]) {
  const preguntas = { cantidadGlobal: plantillaIds.length, preguntas: plantillaIds.map((plantillaId) => ({ plantillaId, tipo: "obligatoria" })) };
  prisma.quiz.rows.push({ id: QUIZ, moduleId: EXAMEN, title: "Examen jefe", currentVersionId: QV, isActive: true, createdAt: now(), updatedAt: now() } as never);
  prisma.quizVersion.rows.push({ id: QV, quizId: QUIZ, versionNumber: 1, questions: null, generatorId: null, generatorVersion: null, params: null, count: null,
    seedPolicy: 0, fixedSeed: null, settings: JSON.stringify({ type: "formal", preguntas }), createdAt: now(), createdBy: "system" } as never);
  return preguntas;
}
const materializar = (preguntas: unknown) =>
  sortearCuestionarioPreguntas(parseCuestionarioPreguntas(preguntas), { quizId: QUIZ, alumnoId: ALUMNO, intento: 1 }).slots.map((slot) => {
    const row = prisma.plantillaEjercicio.rows.find((p) => p.id === slot.pregunta.plantillaId)!;
    const pool = materializeVblangPool(compile(parse(String(row.codigoDsl))), slot.seed, 1);
    assert.ok(pool.ok);
    return { plantillaId: slot.pregunta.plantillaId, question: pool.questions[0] };
  });

async function rendir(correctas: (plantillaId: string) => boolean) {
  const preguntas = (prisma.quizVersion.rows[0] as { settings: string }).settings;
  const mat = materializar(JSON.parse(preguntas).preguntas);
  const token = tAlumno();
  const created = await jsonRequest(baseUrl, "POST", "/api/quiz-attempts", { token, body: { quizId: QUIZ, moduleId: EXAMEN } });
  assert.equal(created.status, 201, JSON.stringify(created.body));
  const id = (created.body as { id: string }).id;
  const answers: Record<string, string> = {};
  for (const m of mat) answers[m.question.id] = correctas(m.plantillaId) ? String(m.question.answerKey) : "999999";
  const sub = await jsonRequest(baseUrl, "POST", `/api/quiz-attempts/${id}/submit`, { token, body: { answers, presentedIds: mat.map((m) => m.question.id) } });
  assert.equal(sub.status, 200, JSON.stringify(sub.body));
  return { id, token };
}

before(async () => {
  const { quizAttempts } = await import("../../src/routes/quiz-attempts");
  const { quizRepaso } = await import("../../src/routes/quiz-repaso");
  const srv = await startServer([quizAttempts, quizRepaso]);
  baseUrl = srv.baseUrl; close = srv.close;
});
after(async () => { if (close) await close(); });
beforeEach(() => {
  resetPrisma();
  seedUser({ id: ALUMNO, role: "STUDENT", schoolId: null });
  seedUser({ id: OTRO, role: "STUDENT", schoolId: null });
  modulo(EXAMEN, "Examen jefe — Trigonometría");
});

test("(a) agrupa por tema, deja primero el fallado y recomienda repasarlo", async () => {
  modulo("cont-t--a", "Razones trigonométricas"); modulo("cont-t--b", "Teorema del seno");
  plantilla("cont-t--a.p1", 1, ["a"]); plantilla("cont-t--a.p2", 2, ["a"]); plantilla("cont-t--b.p1", 3, ["b"]); plantilla("cont-t--b.p2", 4, ["b"]);
  examen(["cont-t--a.p1", "cont-t--a.p2", "cont-t--b.p1", "cont-t--b.p2"]);
  const { id, token } = await rendir((p) => p.startsWith("cont-t--a"));
  const r = await jsonRequest(baseUrl, "GET", `/api/quiz-attempts/${id}/repaso`, { token });
  assert.equal(r.status, 200, JSON.stringify(r.body));
  const b = r.body as any;
  assert.equal(b.disponible, true);
  assert.equal(b.porcentaje, 50);
  assert.equal(b.aprobado, false);
  assert.deepEqual(b.porGrupo.map((g: any) => [g.titulo, g.correctas, g.total, g.porcentaje]), [["Teorema del seno", 0, 2, 0], ["Razones trigonométricas", 2, 2, 100]]);
  assert.deepEqual(b.recomendados.map((g: any) => g.moduloId), ["cont-t--b"]);
  assert.equal(b.preguntas.length, 4);
  assert.deepEqual(b.preguntas.map((p: any) => p.correcta), [false, false, true, true], "las falladas van primero");
  assert.ok(b.preguntas.every((p: any) => p.prompt.startsWith("Pregunta")), "trae el enunciado");
  assert.ok(b.preguntas.find((p: any) => !p.correcta).explicacion, "trae la explicación");
});

test("(b) examen de idiomas: agrupa por sección y no recomienda temas", async () => {
  plantilla("cont-t--examen.p1", 1, ["gramatica", "examen-jefe"]); plantilla("cont-t--examen.p2", 2, ["lectura", "examen-jefe"]);
  examen(["cont-t--examen.p1", "cont-t--examen.p2"]);
  const { id, token } = await rendir((p) => p.endsWith(".p1"));
  const b = (await jsonRequest(baseUrl, "GET", `/api/quiz-attempts/${id}/repaso`, { token })).body as any;
  assert.deepEqual(b.porGrupo.map((g: any) => [g.tipo, g.titulo, g.porcentaje]), [["seccion", "lectura", 0], ["seccion", "gramatica", 100]]);
  assert.deepEqual(b.recomendados, []);
});

test("(c) solo el dueño lo ve, y solo después de enviar", async () => {
  modulo("cont-t--a", "A"); plantilla("cont-t--a.p1", 1, ["a"]); examen(["cont-t--a.p1"]);
  const { id, token } = await rendir(() => true);
  assert.equal((await jsonRequest(baseUrl, "GET", `/api/quiz-attempts/${id}/repaso`, { token: tAlumno(OTRO) })).status, 404);
  assert.equal((await jsonRequest(baseUrl, "GET", `/api/quiz-attempts/${id}/repaso`, { token })).status, 200);
  const abierto = await jsonRequest(baseUrl, "POST", "/api/quiz-attempts", { token, body: { quizId: QUIZ, moduleId: EXAMEN } });
  const idAbierto = (abierto.body as { id: string }).id;
  assert.equal((await jsonRequest(baseUrl, "GET", `/api/quiz-attempts/${idAbierto}/repaso`, { token })).status, 409);
});
