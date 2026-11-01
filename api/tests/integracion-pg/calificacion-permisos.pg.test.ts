/**
 * H17 (2026-11-01) — calificación y permisos contra Postgres REAL.
 *
 * La base falsa en memoria no detecta transacciones, bloqueos ni nombres de modelo mal escritos. Acá se usan
 * los routers reales (`quiz-attempts` y `cobros`) con el `requireUser` real:
 *  - la nota la calcula el servidor con las respuestas guardadas en la versión del cuestionario;
 *  - dos envíos simultáneos del mismo intento se corrigen una sola vez;
 *  - dos intentos del mismo cuestionario enviados a la vez dan las monedas de "primera vez" una sola vez;
 *  - un alumno de otra escuela no ve el intento;
 *  - al revocar la membresía, el siguiente pedido ya no tiene el permiso (roles vigentes, B3).
 *
 * Solo corre si PG_TEST_DATABASE_URL apunta a una base `*_test` (ver economia-saldo.pg.test.ts).
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

const p = `pgcal-${randomUUID().slice(0, 8)}`;
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
  { id: "q1", prompt: "2 + 2", questionType: "mc", options: ["3", "4", "5"], answerKey: "4", points: 1 },
  { id: "q2", prompt: "Pares", questionType: "mc", options: ["2", "3", "4"], answerKey: ["2", "4"], multiple: true, points: 1 }
];

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
  const { cobros } = await import("../../src/routes/cobros");
  const app = express();
  app.use(express.json());
  app.use(quizAttempts);
  app.use(cobros);
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

test("la nota la calcula el servidor con la clave guardada y queda en la base", opts, async () => {
  const id = await nuevoIntento();
  const r = await llamar("POST", `/api/quiz-attempts/${id}/submit`, alumno(), { answers: { q1: "4", q2: ["2"] } });
  assert.equal(r.status, 200, JSON.stringify(r.body));
  const fila = await prisma.quizAttempt.findUnique({ where: { id } });
  assert.equal(fila?.status, "submitted");
  assert.equal(fila?.score, 1, "q1 bien; q2 incompleta (todo o nada) no suma");
  assert.equal(fila?.maxScore, 2);
});

test("dos envíos simultáneos del mismo intento: se corrige una vez", opts, async () => {
  const id = await nuevoIntento();
  const [a, b] = await Promise.all([
    llamar("POST", `/api/quiz-attempts/${id}/submit`, alumno(), { answers: { q1: "4", q2: ["2", "4"] } }),
    llamar("POST", `/api/quiz-attempts/${id}/submit`, alumno(), { answers: { q1: "3", q2: [] } })
  ]);
  assert.equal(a.status, 200);
  assert.equal(b.status, 200);
  const repetidos = [a.body, b.body].filter((x) => x?.alreadySubmitted === true);
  assert.equal(repetidos.length, 1, "uno de los dos recibe lo ya guardado");
  const ganador = a.body?.alreadySubmitted ? b.body : a.body;
  const fila = await prisma.quizAttempt.findUnique({ where: { id } });
  assert.equal(fila?.score, ganador.score, "la nota guardada es la del envío que ganó");
  assert.equal(repetidos[0].score, ganador.score, "el otro ve la misma nota");
});

test("las monedas de primera vez se acreditan una sola vez aunque se envíen dos intentos a la vez", opts, async () => {
  await limpiar();
  const [x, y] = [await nuevoIntento(), await nuevoIntento()];
  const respuestas = await Promise.all([
    llamar("POST", `/api/quiz-attempts/${x}/submit`, alumno(), { answers: { q1: "4", q2: ["2", "4"] } }),
    llamar("POST", `/api/quiz-attempts/${y}/submit`, alumno(), { answers: { q1: "4", q2: ["2", "4"] } })
  ]);
  for (const r of respuestas) assert.equal(r.status, 200, JSON.stringify(r.body));
  const acreditaciones = await prisma.economiaTransaccion.count({
    where: { usuarioId: ALUMNO, tipo: "quiz_primera_vez", referenciaId: QUIZ }
  });
  assert.ok(acreditaciones <= 1, `se acreditó ${acreditaciones} veces`);
});

test("un alumno de otra escuela no ve el intento ajeno", opts, async () => {
  const id = await nuevoIntento();
  const r = await llamar("GET", `/api/quiz-attempts/${id}`, token(AJENO, "USER", OTRA));
  assert.ok(r.status === 403 || r.status === 404, `status ${r.status}`);
});

test("revocar la membresía quita el permiso en el pedido siguiente", opts, async () => {
  const tk = token(DIRECTIVO, "DIRECTIVO", ESCUELA);
  const antes = await llamar("POST", "/api/cobros", tk, { concepto: "Cuota pg", montoUnitario: 1000 });
  assert.equal(antes.status, 201, JSON.stringify(antes.body));
  await prisma.membresia.updateMany({
    where: { usuarioId: DIRECTIVO, escuelaId: ESCUELA },
    data: { estado: "revocada", fechaBaja: new Date().toISOString() }
  });
  const despues = await llamar("POST", "/api/cobros", tk, { concepto: "Cuota pg 2", montoUnitario: 1000 });
  assert.equal(despues.status, 403, "el token sigue vigente pero la base ya no concede el rol");
});
