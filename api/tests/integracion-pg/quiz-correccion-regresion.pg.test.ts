/**
 * Regresión de la corrección de cuestionarios contra Postgres REAL.
 *
 * La corrección se movió de `routes/quiz-attempts.ts` a `lib/quiz-correccion.ts`. Esta prueba envía intentos por el
 * router real, con todos los tipos de pregunta que corrige el servidor, y compara el puntaje, el máximo y el detalle
 * por pregunta con los valores que daba el código anterior (commit 314d3ddc). Con `REGRESION_REGISTRAR=archivo` no
 * compara: escribe lo obtenido, para regenerar los valores esperados desde otra versión del código.
 *
 * Única diferencia intencional respecto del código anterior: en `completar` con varias respuestas aceptables alcanza
 * con escribir una (caso `completar-varias`; antes valía 0).
 *
 * Solo corre si PG_TEST_DATABASE_URL apunta a una base `*_test`.
 */

const url = process.env.PG_TEST_DATABASE_URL ?? "";
const dbName = url.replace(/\?.*$/, "").split("/").pop() ?? "";
const habilitado = url !== "" && dbName.endsWith("_test");

process.env.NODE_ENV = "test";
process.env.JWT_SECRET = process.env.JWT_SECRET ?? "test-secret-pg";
if (habilitado) process.env.DATABASE_URL = url;

import assert from "node:assert/strict";
import { after, before, test } from "node:test";
import { randomUUID } from "node:crypto";
import type { Server } from "node:http";

const opts = { skip: habilitado ? false : "definir PG_TEST_DATABASE_URL (base *_test)" };

type Prisma = typeof import("../../src/lib/prisma").prisma;
let prisma: Prisma;
let server: Server;
let baseUrl = "";
let token: (id: string, rol: string, escuela: string) => string;

const p = `pgreg-${randomUUID().slice(0, 8)}`;
const ESCUELA = `${p}-esc`;
const OTRA = `${p}-otra`;
const DOCENTE = `${p}-docente`;
const DIRECTIVO = `${p}-directivo`;
const ALUMNO = `${p}-alumno`;
const AJENO = `${p}-ajeno`;
const MODULO = `${p}-mod`;
const QUIZ = `${p}-quiz`;
const VERSION = `${p}-qv`;

const PREGUNTAS = [
  { id: "mc", prompt: "2 + 2", questionType: "mc", options: ["3", "4", "5"], answerKey: "4", points: 1 },
  { id: "mcm", prompt: "Pares", questionType: "mc", options: ["2", "3", "4"], answerKey: ["2", "4"], multiple: true, points: 2 },
  { id: "mcp", prompt: "Primos", questionType: "mc", options: ["2", "3", "4", "5"], answerKey: ["2", "3", "5"], multiple: true, puntajeParcial: "proporcional", points: 3 },
  { id: "vf", prompt: "El sol es una estrella", questionType: "vf", answerKey: "verdadero" },
  { id: "num", prompt: "10 / 4", questionType: "input", answerKey: "2.5" },
  { id: "rel", prompt: "g", questionType: "input", answerKey: "9.8", toleranciaRelativa: 0.05 },
  { id: "abs", prompt: "pi", questionType: "input", answerKey: "3.14", toleranciaAbsoluta: 0.01, points: 2 },
  { id: "txt", prompt: "Capital de Francia", questionType: "completar", answerKey: "París" },
  { id: "cv", prompt: "Capital de Argentina", questionType: "completar", answerKey: ["Buenos Aires", "CABA"] },
  { id: "exp", prompt: "Desarrollar (x+1)^2", questionType: "expresion", answerKey: "x^2 + 2*x + 1", points: 2 },
  { id: "ord", prompt: "Ordenar", questionType: "ordenar", answerKey: ["a", "b", "c"] },
  { id: "man", prompt: "Explicar", questionType: "abierta", correccion: "manual", manualGrading: true, points: 4 },
  { id: "inf", prompt: "Opinión", questionType: "abierta", correccion: "ninguna" },
  { id: "sin", prompt: "Sin clave", questionType: "mc", options: ["a", "b"] }
];

// Cada caso es un intento distinto. Se guardan los esperados del código anterior (314d3ddc).
const CASOS: Record<string, Record<string, string | string[]>> = {
  "todo-bien": { mc: "4", mcm: ["4", "2"], mcp: ["2", "3", "5"], vf: "verdadero", num: "2.5", rel: "9.8", abs: "3.14", txt: "París", cv: ["Buenos Aires", "CABA"], exp: "x^2 + 2*x + 1", ord: ["a", "b", "c"], man: "texto", inf: "opino" },
  "todo-mal": { mc: "3", mcm: ["3"], mcp: ["4"], vf: "falso", num: "3", rel: "12", abs: "3.2", txt: "Lyon", cv: ["Rosario"], exp: "x^2", ord: ["c", "b", "a"], man: "", inf: "" },
  "vacio": {},
  "multiple-parcial": { mcm: ["2"], mcp: ["2", "3"] },
  "multiple-de-mas": { mcm: ["2", "3", "4"], mcp: ["2", "3", "4", "5"] },
  "proporcional-negativo": { mcp: ["4"] },
  "multiple-como-texto": { mcm: "2", mcp: "2" },
  "numero-con-coma": { num: "2,5", rel: "9,8", abs: "3,14" },
  "numero-equivalente": { num: "2.50", rel: "10", abs: "3.149" },
  "tolerancia-en-el-borde": { rel: "10.29", abs: "3.15" },
  "tolerancia-afuera": { rel: "10.5", abs: "3.16", num: "2.51" },
  "texto-mayusculas-y-espacios": { txt: " parís ", vf: "Verdadero" },
  "texto-sin-tilde": { txt: "Paris" },
  "expresion-equivalente": { exp: "(x+1)^2" },
  "expresion-otro-orden": { exp: "1 + 2*x + x^2" },
  "expresion-distinta": { exp: "x^2 + 2*x" },
  "ordenar-otro-orden": { ord: ["b", "a", "c"] },
  "lista-donde-va-texto": { mc: ["4"], num: ["2.5"] },
  "completar-varias": { cv: "CABA" }
};

const llamar = async (method: string, path: string, tk: string, body?: unknown) => {
  const res = await fetch(`${baseUrl}${path}`, {
    method,
    headers: { "content-type": "application/json", authorization: `Bearer ${tk}` },
    body: body === undefined ? undefined : JSON.stringify(body)
  });
  const texto = await res.text();
  let json: any = null;
  try { json = JSON.parse(texto); } catch { /* no es JSON */ }
  return { status: res.status, body: json };
};

const alumno = () => token(ALUMNO, "USER", ESCUELA);
const nuevoIntento = async () => {
  const r = await llamar("POST", "/api/quiz-attempts", alumno(), { quizId: QUIZ });
  assert.equal(r.status, 201, JSON.stringify(r.body));
  return r.body.id as string;
};

const limpiar = async () => {
  await prisma.quizAttempt.deleteMany({ where: { quizId: QUIZ } });
  await prisma.economiaTransaccion.deleteMany({ where: { usuarioId: { in: [ALUMNO, AJENO] } } });
  await prisma.saldoUsuario.deleteMany({ where: { usuarioId: { in: [ALUMNO, AJENO] } } }).catch(() => undefined);
  await prisma.ledgerMovimiento.deleteMany({ where: { usuarioId: { in: [ALUMNO, AJENO] } } }).catch(() => undefined);
  await prisma.economiaSaldo.deleteMany({ where: { usuarioId: { in: [ALUMNO, AJENO] } } }).catch(() => undefined);
  await prisma.progresoModulo.deleteMany({ where: { usuarioId: { in: [ALUMNO, AJENO] } } }).catch(() => undefined);
  await prisma.cobroEscuela.deleteMany({ where: { escuelaId: ESCUELA } });
};

before(async () => {
  if (!habilitado) return;
  ({ prisma } = await import("../../src/lib/prisma"));
  const actual = await prisma.$queryRaw<Array<{ current_database: string }>>`select current_database()`;
  assert.ok(actual[0].current_database.endsWith("_test"), "la conexión no es una base de pruebas");
  // D4 — con la caché de sesión prendida (en pruebas viene apagada): revocar tiene que valer igual en el
  // pedido siguiente, porque escribir en membresias la vacía.
  const { ENV } = await import("../../src/lib/env");
  ENV.AUTH_CACHE_SEGUNDOS = 15;
  const { createAccessToken } = await import("../../src/lib/auth-token");
  token = (id, rol, escuela) => createAccessToken({ id, role: rol, roles: [rol], schoolId: escuela }).token;

  const ahora = new Date().toISOString();
  await prisma.escuela.createMany({
    data: [
      { id: ESCUELA, name: "Escuela pg", createdAt: ahora, estadoVerificacion: "verificada" },
      { id: OTRA, name: "Otra pg", createdAt: ahora, estadoVerificacion: "verificada" }
    ]
  });
  const usuarios: Array<[string, string, string]> = [
    [DOCENTE, "TEACHER", ESCUELA], [DIRECTIVO, "DIRECTIVO", ESCUELA], [ALUMNO, "USER", ESCUELA], [AJENO, "USER", OTRA]
  ];
  for (const [id, rol, escuela] of usuarios) {
    await prisma.usuario.create({
      data: { id, username: id, email: `${id}@pg.test`, fullName: id, roles: [rol], escuelaId: escuela, emailVerificadoAt: ahora, createdAt: ahora, updatedAt: ahora }
    });
  }
  await prisma.membresia.createMany({
    data: [
      { usuarioId: DOCENTE, escuelaId: ESCUELA, rol: "TEACHER", estado: "activa", fechaAlta: ahora },
      { usuarioId: DIRECTIVO, escuelaId: ESCUELA, rol: "DIRECTIVO", estado: "activa", fechaAlta: ahora },
      { usuarioId: ALUMNO, escuelaId: ESCUELA, rol: "STUDENT", estado: "activa", fechaAlta: ahora },
      { usuarioId: AJENO, escuelaId: OTRA, rol: "STUDENT", estado: "activa", fechaAlta: ahora }
    ]
  });
  await prisma.modulo.create({
    data: { id: MODULO, slug: MODULO, titulo: "Módulo pg", visibility: "publico", ownerUserId: DOCENTE, isDeleted: false, createdAt: ahora, updatedAt: ahora }
  });
  await prisma.quiz.create({ data: { id: QUIZ, moduleId: MODULO, title: "Cuestionario pg", currentVersionId: VERSION, isActive: true, createdAt: ahora, updatedAt: ahora } });
  await prisma.quizVersion.create({
    data: {
      id: VERSION, quizId: QUIZ, versionNumber: 1, questions: JSON.stringify(PREGUNTAS), generatorVersion: "1",
      count: PREGUNTAS.length, seedPolicy: 0,
      settings: JSON.stringify({ type: "practica", mode: "manual", visibility: "publico" }),
      createdAt: ahora, createdBy: DOCENTE
    }
  });

  const express = (await import("express")).default;
  const { quizAttempts } = await import("../../src/routes/quiz-attempts");
  const app = express();
  app.use(express.json());
  app.use(quizAttempts);
  await new Promise<void>((resolve) => { server = app.listen(0, () => resolve()); });
  const addr = server.address();
  baseUrl = `http://127.0.0.1:${typeof addr === "object" && addr ? addr.port : 0}`;
});

after(async () => {
  if (!habilitado) return;
  await new Promise<void>((resolve) => server.close(() => resolve()));
  await limpiar();
  await prisma.quizVersion.deleteMany({ where: { quizId: QUIZ } });
  await prisma.quiz.deleteMany({ where: { id: QUIZ } });
  await prisma.modulo.deleteMany({ where: { id: MODULO } });
  await prisma.membresia.deleteMany({ where: { escuelaId: { in: [ESCUELA, OTRA] } } });
  await prisma.auditLog.deleteMany({ where: { actorId: { in: [DOCENTE, DIRECTIVO, ALUMNO, AJENO] } } }).catch(() => undefined);
  await prisma.usuario.deleteMany({ where: { id: { in: [DOCENTE, DIRECTIVO, ALUMNO, AJENO] } } });
  await prisma.escuela.deleteMany({ where: { id: { in: [ESCUELA, OTRA] } } });
  await prisma.$disconnect();
});


type Obtenido = { status: number; score: unknown; maxScore: unknown; estado: unknown; detalle: Record<string, { correct?: boolean; pending?: boolean }> };

const correr = async (answers: Record<string, string | string[]>): Promise<Obtenido> => {
  const id = await nuevoIntento();
  const r = await llamar("POST", `/api/quiz-attempts/${id}/submit`, alumno(), { answers });
  const fila = await prisma.quizAttempt.findUnique({ where: { id } });
  let feedback: Record<string, { correct?: boolean; pending?: boolean }> = {};
  try { feedback = JSON.parse(String(fila?.feedback ?? "{}")); } catch { /* sin detalle */ }
  const detalle: Obtenido["detalle"] = {};
  for (const k of Object.keys(feedback).sort()) {
    detalle[k] = { correct: feedback[k].correct, ...(feedback[k].pending ? { pending: true } : {}) };
  }
  return { status: r.status, score: fila?.score ?? null, maxScore: fila?.maxScore ?? null, estado: fila?.status ?? null, detalle };
};

const ESPERADO: Record<string, Obtenido> = {
  "todo-bien": {"status": 200, "score": 16, "maxScore": 21, "estado": "pending_review", "detalle": {"abs": {"correct": true}, "cv": {"correct": true}, "exp": {"correct": true}, "man": {"correct": false, "pending": true}, "mc": {"correct": true}, "mcm": {"correct": true}, "mcp": {"correct": true}, "num": {"correct": true}, "ord": {"correct": true}, "rel": {"correct": true}, "txt": {"correct": true}, "vf": {"correct": true}}},
  "todo-mal": {"status": 200, "score": 1, "maxScore": 21, "estado": "pending_review", "detalle": {"abs": {"correct": false}, "cv": {"correct": false}, "exp": {"correct": false}, "man": {"correct": false, "pending": true}, "mc": {"correct": false}, "mcm": {"correct": false}, "mcp": {"correct": false}, "num": {"correct": false}, "ord": {"correct": true}, "rel": {"correct": false}, "txt": {"correct": false}, "vf": {"correct": false}}},
  "vacio": {"status": 200, "score": 0, "maxScore": 21, "estado": "pending_review", "detalle": {"abs": {"correct": false}, "cv": {"correct": false}, "exp": {"correct": false}, "man": {"correct": false, "pending": true}, "mc": {"correct": false}, "mcm": {"correct": false}, "mcp": {"correct": false}, "num": {"correct": false}, "ord": {"correct": false}, "rel": {"correct": false}, "txt": {"correct": false}, "vf": {"correct": false}}},
  "multiple-parcial": {"status": 200, "score": 2, "maxScore": 21, "estado": "pending_review", "detalle": {"abs": {"correct": false}, "cv": {"correct": false}, "exp": {"correct": false}, "man": {"correct": false, "pending": true}, "mc": {"correct": false}, "mcm": {"correct": false}, "mcp": {"correct": false}, "num": {"correct": false}, "ord": {"correct": false}, "rel": {"correct": false}, "txt": {"correct": false}, "vf": {"correct": false}}},
  "multiple-de-mas": {"status": 200, "score": 2, "maxScore": 21, "estado": "pending_review", "detalle": {"abs": {"correct": false}, "cv": {"correct": false}, "exp": {"correct": false}, "man": {"correct": false, "pending": true}, "mc": {"correct": false}, "mcm": {"correct": false}, "mcp": {"correct": false}, "num": {"correct": false}, "ord": {"correct": false}, "rel": {"correct": false}, "txt": {"correct": false}, "vf": {"correct": false}}},
  "proporcional-negativo": {"status": 200, "score": 0, "maxScore": 21, "estado": "pending_review", "detalle": {"abs": {"correct": false}, "cv": {"correct": false}, "exp": {"correct": false}, "man": {"correct": false, "pending": true}, "mc": {"correct": false}, "mcm": {"correct": false}, "mcp": {"correct": false}, "num": {"correct": false}, "ord": {"correct": false}, "rel": {"correct": false}, "txt": {"correct": false}, "vf": {"correct": false}}},
  "multiple-como-texto": {"status": 200, "score": 0, "maxScore": 21, "estado": "pending_review", "detalle": {"abs": {"correct": false}, "cv": {"correct": false}, "exp": {"correct": false}, "man": {"correct": false, "pending": true}, "mc": {"correct": false}, "mcm": {"correct": false}, "mcp": {"correct": false}, "num": {"correct": false}, "ord": {"correct": false}, "rel": {"correct": false}, "txt": {"correct": false}, "vf": {"correct": false}}},
  "numero-con-coma": {"status": 200, "score": 4, "maxScore": 21, "estado": "pending_review", "detalle": {"abs": {"correct": true}, "cv": {"correct": false}, "exp": {"correct": false}, "man": {"correct": false, "pending": true}, "mc": {"correct": false}, "mcm": {"correct": false}, "mcp": {"correct": false}, "num": {"correct": true}, "ord": {"correct": false}, "rel": {"correct": true}, "txt": {"correct": false}, "vf": {"correct": false}}},
  "numero-equivalente": {"status": 200, "score": 4, "maxScore": 21, "estado": "pending_review", "detalle": {"abs": {"correct": true}, "cv": {"correct": false}, "exp": {"correct": false}, "man": {"correct": false, "pending": true}, "mc": {"correct": false}, "mcm": {"correct": false}, "mcp": {"correct": false}, "num": {"correct": true}, "ord": {"correct": false}, "rel": {"correct": true}, "txt": {"correct": false}, "vf": {"correct": false}}},
  "tolerancia-en-el-borde": {"status": 200, "score": 3, "maxScore": 21, "estado": "pending_review", "detalle": {"abs": {"correct": true}, "cv": {"correct": false}, "exp": {"correct": false}, "man": {"correct": false, "pending": true}, "mc": {"correct": false}, "mcm": {"correct": false}, "mcp": {"correct": false}, "num": {"correct": false}, "ord": {"correct": false}, "rel": {"correct": true}, "txt": {"correct": false}, "vf": {"correct": false}}},
  "tolerancia-afuera": {"status": 200, "score": 0, "maxScore": 21, "estado": "pending_review", "detalle": {"abs": {"correct": false}, "cv": {"correct": false}, "exp": {"correct": false}, "man": {"correct": false, "pending": true}, "mc": {"correct": false}, "mcm": {"correct": false}, "mcp": {"correct": false}, "num": {"correct": false}, "ord": {"correct": false}, "rel": {"correct": false}, "txt": {"correct": false}, "vf": {"correct": false}}},
  "texto-mayusculas-y-espacios": {"status": 200, "score": 0, "maxScore": 21, "estado": "pending_review", "detalle": {"abs": {"correct": false}, "cv": {"correct": false}, "exp": {"correct": false}, "man": {"correct": false, "pending": true}, "mc": {"correct": false}, "mcm": {"correct": false}, "mcp": {"correct": false}, "num": {"correct": false}, "ord": {"correct": false}, "rel": {"correct": false}, "txt": {"correct": false}, "vf": {"correct": false}}},
  "texto-sin-tilde": {"status": 200, "score": 0, "maxScore": 21, "estado": "pending_review", "detalle": {"abs": {"correct": false}, "cv": {"correct": false}, "exp": {"correct": false}, "man": {"correct": false, "pending": true}, "mc": {"correct": false}, "mcm": {"correct": false}, "mcp": {"correct": false}, "num": {"correct": false}, "ord": {"correct": false}, "rel": {"correct": false}, "txt": {"correct": false}, "vf": {"correct": false}}},
  "expresion-equivalente": {"status": 200, "score": 2, "maxScore": 21, "estado": "pending_review", "detalle": {"abs": {"correct": false}, "cv": {"correct": false}, "exp": {"correct": true}, "man": {"correct": false, "pending": true}, "mc": {"correct": false}, "mcm": {"correct": false}, "mcp": {"correct": false}, "num": {"correct": false}, "ord": {"correct": false}, "rel": {"correct": false}, "txt": {"correct": false}, "vf": {"correct": false}}},
  "expresion-otro-orden": {"status": 200, "score": 2, "maxScore": 21, "estado": "pending_review", "detalle": {"abs": {"correct": false}, "cv": {"correct": false}, "exp": {"correct": true}, "man": {"correct": false, "pending": true}, "mc": {"correct": false}, "mcm": {"correct": false}, "mcp": {"correct": false}, "num": {"correct": false}, "ord": {"correct": false}, "rel": {"correct": false}, "txt": {"correct": false}, "vf": {"correct": false}}},
  "expresion-distinta": {"status": 200, "score": 0, "maxScore": 21, "estado": "pending_review", "detalle": {"abs": {"correct": false}, "cv": {"correct": false}, "exp": {"correct": false}, "man": {"correct": false, "pending": true}, "mc": {"correct": false}, "mcm": {"correct": false}, "mcp": {"correct": false}, "num": {"correct": false}, "ord": {"correct": false}, "rel": {"correct": false}, "txt": {"correct": false}, "vf": {"correct": false}}},
  "ordenar-otro-orden": {"status": 200, "score": 1, "maxScore": 21, "estado": "pending_review", "detalle": {"abs": {"correct": false}, "cv": {"correct": false}, "exp": {"correct": false}, "man": {"correct": false, "pending": true}, "mc": {"correct": false}, "mcm": {"correct": false}, "mcp": {"correct": false}, "num": {"correct": false}, "ord": {"correct": true}, "rel": {"correct": false}, "txt": {"correct": false}, "vf": {"correct": false}}},
  "lista-donde-va-texto": {"status": 200, "score": 0, "maxScore": 21, "estado": "pending_review", "detalle": {"abs": {"correct": false}, "cv": {"correct": false}, "exp": {"correct": false}, "man": {"correct": false, "pending": true}, "mc": {"correct": false}, "mcm": {"correct": false}, "mcp": {"correct": false}, "num": {"correct": false}, "ord": {"correct": false}, "rel": {"correct": false}, "txt": {"correct": false}, "vf": {"correct": false}}},
  "completar-varias": {"status": 200, "score": 1, "maxScore": 21, "estado": "pending_review", "detalle": {"abs": {"correct": false}, "cv": {"correct": true}, "exp": {"correct": false}, "man": {"correct": false, "pending": true}, "mc": {"correct": false}, "mcm": {"correct": false}, "mcp": {"correct": false}, "num": {"correct": false}, "ord": {"correct": false}, "rel": {"correct": false}, "txt": {"correct": false}, "vf": {"correct": false}}}
};

test("la corrección da lo mismo que el código anterior en todos los tipos de pregunta", opts, async () => {
  const obtenido: Record<string, Obtenido> = {
  "todo-bien": {"status": 200, "score": 16, "maxScore": 21, "estado": "pending_review", "detalle": {"abs": {"correct": true}, "cv": {"correct": true}, "exp": {"correct": true}, "man": {"correct": false, "pending": true}, "mc": {"correct": true}, "mcm": {"correct": true}, "mcp": {"correct": true}, "num": {"correct": true}, "ord": {"correct": true}, "rel": {"correct": true}, "txt": {"correct": true}, "vf": {"correct": true}}},
  "todo-mal": {"status": 200, "score": 1, "maxScore": 21, "estado": "pending_review", "detalle": {"abs": {"correct": false}, "cv": {"correct": false}, "exp": {"correct": false}, "man": {"correct": false, "pending": true}, "mc": {"correct": false}, "mcm": {"correct": false}, "mcp": {"correct": false}, "num": {"correct": false}, "ord": {"correct": true}, "rel": {"correct": false}, "txt": {"correct": false}, "vf": {"correct": false}}},
  "vacio": {"status": 200, "score": 0, "maxScore": 21, "estado": "pending_review", "detalle": {"abs": {"correct": false}, "cv": {"correct": false}, "exp": {"correct": false}, "man": {"correct": false, "pending": true}, "mc": {"correct": false}, "mcm": {"correct": false}, "mcp": {"correct": false}, "num": {"correct": false}, "ord": {"correct": false}, "rel": {"correct": false}, "txt": {"correct": false}, "vf": {"correct": false}}},
  "multiple-parcial": {"status": 200, "score": 2, "maxScore": 21, "estado": "pending_review", "detalle": {"abs": {"correct": false}, "cv": {"correct": false}, "exp": {"correct": false}, "man": {"correct": false, "pending": true}, "mc": {"correct": false}, "mcm": {"correct": false}, "mcp": {"correct": false}, "num": {"correct": false}, "ord": {"correct": false}, "rel": {"correct": false}, "txt": {"correct": false}, "vf": {"correct": false}}},
  "multiple-de-mas": {"status": 200, "score": 2, "maxScore": 21, "estado": "pending_review", "detalle": {"abs": {"correct": false}, "cv": {"correct": false}, "exp": {"correct": false}, "man": {"correct": false, "pending": true}, "mc": {"correct": false}, "mcm": {"correct": false}, "mcp": {"correct": false}, "num": {"correct": false}, "ord": {"correct": false}, "rel": {"correct": false}, "txt": {"correct": false}, "vf": {"correct": false}}},
  "proporcional-negativo": {"status": 200, "score": 0, "maxScore": 21, "estado": "pending_review", "detalle": {"abs": {"correct": false}, "cv": {"correct": false}, "exp": {"correct": false}, "man": {"correct": false, "pending": true}, "mc": {"correct": false}, "mcm": {"correct": false}, "mcp": {"correct": false}, "num": {"correct": false}, "ord": {"correct": false}, "rel": {"correct": false}, "txt": {"correct": false}, "vf": {"correct": false}}},
  "multiple-como-texto": {"status": 200, "score": 0, "maxScore": 21, "estado": "pending_review", "detalle": {"abs": {"correct": false}, "cv": {"correct": false}, "exp": {"correct": false}, "man": {"correct": false, "pending": true}, "mc": {"correct": false}, "mcm": {"correct": false}, "mcp": {"correct": false}, "num": {"correct": false}, "ord": {"correct": false}, "rel": {"correct": false}, "txt": {"correct": false}, "vf": {"correct": false}}},
  "numero-con-coma": {"status": 200, "score": 4, "maxScore": 21, "estado": "pending_review", "detalle": {"abs": {"correct": true}, "cv": {"correct": false}, "exp": {"correct": false}, "man": {"correct": false, "pending": true}, "mc": {"correct": false}, "mcm": {"correct": false}, "mcp": {"correct": false}, "num": {"correct": true}, "ord": {"correct": false}, "rel": {"correct": true}, "txt": {"correct": false}, "vf": {"correct": false}}},
  "numero-equivalente": {"status": 200, "score": 4, "maxScore": 21, "estado": "pending_review", "detalle": {"abs": {"correct": true}, "cv": {"correct": false}, "exp": {"correct": false}, "man": {"correct": false, "pending": true}, "mc": {"correct": false}, "mcm": {"correct": false}, "mcp": {"correct": false}, "num": {"correct": true}, "ord": {"correct": false}, "rel": {"correct": true}, "txt": {"correct": false}, "vf": {"correct": false}}},
  "tolerancia-en-el-borde": {"status": 200, "score": 3, "maxScore": 21, "estado": "pending_review", "detalle": {"abs": {"correct": true}, "cv": {"correct": false}, "exp": {"correct": false}, "man": {"correct": false, "pending": true}, "mc": {"correct": false}, "mcm": {"correct": false}, "mcp": {"correct": false}, "num": {"correct": false}, "ord": {"correct": false}, "rel": {"correct": true}, "txt": {"correct": false}, "vf": {"correct": false}}},
  "tolerancia-afuera": {"status": 200, "score": 0, "maxScore": 21, "estado": "pending_review", "detalle": {"abs": {"correct": false}, "cv": {"correct": false}, "exp": {"correct": false}, "man": {"correct": false, "pending": true}, "mc": {"correct": false}, "mcm": {"correct": false}, "mcp": {"correct": false}, "num": {"correct": false}, "ord": {"correct": false}, "rel": {"correct": false}, "txt": {"correct": false}, "vf": {"correct": false}}},
  "texto-mayusculas-y-espacios": {"status": 200, "score": 0, "maxScore": 21, "estado": "pending_review", "detalle": {"abs": {"correct": false}, "cv": {"correct": false}, "exp": {"correct": false}, "man": {"correct": false, "pending": true}, "mc": {"correct": false}, "mcm": {"correct": false}, "mcp": {"correct": false}, "num": {"correct": false}, "ord": {"correct": false}, "rel": {"correct": false}, "txt": {"correct": false}, "vf": {"correct": false}}},
  "texto-sin-tilde": {"status": 200, "score": 0, "maxScore": 21, "estado": "pending_review", "detalle": {"abs": {"correct": false}, "cv": {"correct": false}, "exp": {"correct": false}, "man": {"correct": false, "pending": true}, "mc": {"correct": false}, "mcm": {"correct": false}, "mcp": {"correct": false}, "num": {"correct": false}, "ord": {"correct": false}, "rel": {"correct": false}, "txt": {"correct": false}, "vf": {"correct": false}}},
  "expresion-equivalente": {"status": 200, "score": 2, "maxScore": 21, "estado": "pending_review", "detalle": {"abs": {"correct": false}, "cv": {"correct": false}, "exp": {"correct": true}, "man": {"correct": false, "pending": true}, "mc": {"correct": false}, "mcm": {"correct": false}, "mcp": {"correct": false}, "num": {"correct": false}, "ord": {"correct": false}, "rel": {"correct": false}, "txt": {"correct": false}, "vf": {"correct": false}}},
  "expresion-otro-orden": {"status": 200, "score": 2, "maxScore": 21, "estado": "pending_review", "detalle": {"abs": {"correct": false}, "cv": {"correct": false}, "exp": {"correct": true}, "man": {"correct": false, "pending": true}, "mc": {"correct": false}, "mcm": {"correct": false}, "mcp": {"correct": false}, "num": {"correct": false}, "ord": {"correct": false}, "rel": {"correct": false}, "txt": {"correct": false}, "vf": {"correct": false}}},
  "expresion-distinta": {"status": 200, "score": 0, "maxScore": 21, "estado": "pending_review", "detalle": {"abs": {"correct": false}, "cv": {"correct": false}, "exp": {"correct": false}, "man": {"correct": false, "pending": true}, "mc": {"correct": false}, "mcm": {"correct": false}, "mcp": {"correct": false}, "num": {"correct": false}, "ord": {"correct": false}, "rel": {"correct": false}, "txt": {"correct": false}, "vf": {"correct": false}}},
  "ordenar-otro-orden": {"status": 200, "score": 1, "maxScore": 21, "estado": "pending_review", "detalle": {"abs": {"correct": false}, "cv": {"correct": false}, "exp": {"correct": false}, "man": {"correct": false, "pending": true}, "mc": {"correct": false}, "mcm": {"correct": false}, "mcp": {"correct": false}, "num": {"correct": false}, "ord": {"correct": true}, "rel": {"correct": false}, "txt": {"correct": false}, "vf": {"correct": false}}},
  "lista-donde-va-texto": {"status": 200, "score": 0, "maxScore": 21, "estado": "pending_review", "detalle": {"abs": {"correct": false}, "cv": {"correct": false}, "exp": {"correct": false}, "man": {"correct": false, "pending": true}, "mc": {"correct": false}, "mcm": {"correct": false}, "mcp": {"correct": false}, "num": {"correct": false}, "ord": {"correct": false}, "rel": {"correct": false}, "txt": {"correct": false}, "vf": {"correct": false}}},
  "completar-varias": {"status": 200, "score": 1, "maxScore": 21, "estado": "pending_review", "detalle": {"abs": {"correct": false}, "cv": {"correct": true}, "exp": {"correct": false}, "man": {"correct": false, "pending": true}, "mc": {"correct": false}, "mcm": {"correct": false}, "mcp": {"correct": false}, "num": {"correct": false}, "ord": {"correct": false}, "rel": {"correct": false}, "txt": {"correct": false}, "vf": {"correct": false}}}
};
  for (const [nombre, answers] of Object.entries(CASOS)) obtenido[nombre] = await correr(answers);
  const archivo = process.env.REGRESION_REGISTRAR;
  if (archivo) {
    const { writeFileSync } = await import("node:fs");
    writeFileSync(archivo, JSON.stringify(obtenido, null, 2));
    return;
  }
  for (const nombre of Object.keys(CASOS)) {
    assert.deepEqual(obtenido[nombre], ESPERADO[nombre], `caso ${nombre}`);
  }
});
