/**
 * L8 — POST /api/offline/sync: la sincronización de la app sin conexión.
 *
 * El servidor vuelve a corregir cada intento con su semilla, su versión y sus respuestas (vale esa nota), acredita el
 * progreso recién ahí, no aplica dos veces el mismo intento, renueva el permiso y devuelve lo hecho en la web.
 */
import assert from "node:assert/strict";
import crypto from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { after, before, beforeEach, test } from "node:test";
import { prisma, resetPrisma, seedUser, startServer } from "./_helpers/setup";
import { buildQuizFromCollection, contextoSorteoPreguntas, materializarPreguntasNativas } from "../../src/lib/quiz-correccion";
import { parseCuestionarioPreguntas } from "../../src/lib/quiz-preguntas";
import { filasDelTemario } from "../../src/lib/temario-filas";

let ENV: typeof import("../../src/lib/env").ENV;
let permisoOffline: typeof import("../../src/lib/permiso-offline");
let baseUrl: string;
let close: () => Promise<void>;
let carpeta: string;

const ALUMNA = "alumna-sync";
const DISPOSITIVO = "dispositivo-de-prueba-0001";
const pregunta = (a: number, b: number) =>
  `enunciado: "¿Cuánto es ${a} + ${b}?"\ntipo: mc\nopciones_explicitas:\n  - "${a + b}"\n  - "${a + b + 1}"\nrespuesta: "${a + b}"\n`;
const manifiesto = {
  temas: [
    { id: "cont-mat--sumar", materia: "matematica", ruta: "sumar", titulo: "Sumar", teoria: "Teoría", nivel: "1", dependencias: [],
      preguntas: [{ titulo: "p1", dsl: pregunta(2, 3) }, { titulo: "p2", dsl: pregunta(4, 5) }] },
    { id: "cont-mat--restar", materia: "matematica", ruta: "restar", titulo: "Restar", teoria: "Teoría", nivel: "1",
      dependencias: ["cont-mat--sumar"], preguntas: [{ titulo: "p1", dsl: pregunta(7, 1) }] },
  ],
};
const QUIZ = "cont-mat--sumar.quiz";

before(async () => {
  carpeta = fs.mkdtempSync(path.join(os.tmpdir(), "sync-offline-"));
  const { privateKey } = crypto.generateKeyPairSync("ed25519");
  fs.writeFileSync(path.join(carpeta, "clave.pem"), privateKey.export({ type: "pkcs8", format: "pem" }));
  ({ ENV } = await import("../../src/lib/env"));
  permisoOffline = await import("../../src/lib/permiso-offline");
  ENV.OFFLINE_PERMISO_CLAVE_ARCHIVO = path.join(carpeta, "clave.pem");
  const { offlinePublico } = await import("../../src/routes/offline");
  ({ baseUrl, close } = await startServer([offlinePublico]));
});

after(async () => {
  if (close) await close();
  fs.rmSync(carpeta, { recursive: true, force: true });
});

const fila = (id: string) => prisma.usuario.rows.find((u: { id: string }) => u.id === id) as Record<string, unknown>;

beforeEach(() => {
  resetPrisma();
  prisma.quizAttempt.rows = [];
  prisma.progresoModulo.rows = [];
  prisma.suggestion.rows = [];
  seedUser({ id: ALUMNA, role: "STUDENT", roles: ["USER"] });
  Object.assign(fila(ALUMNA), { passwordHash: "huella-1", birthdate: "2000-01-01", username: "alumna" });
  const f = filasDelTemario(manifiesto as never, { owner: "plataforma", now: new Date().toISOString() });
  prisma.modulo.rows.push(...(f.modulos as never[]));
  prisma.plantillaEjercicio.rows.push(...(f.plantillas as never[]));
  prisma.quiz.rows.push(...(f.quizzes as never[]));
  prisma.quizVersion.rows.push(...(f.versiones as never[]));
});

function permisoDe(sub: string, extra: Partial<import("../../src/lib/permiso-offline").Permiso> = {}) {
  const ahora = Date.now();
  const { permiso, firma } = permisoOffline.firmarPermiso({
    v: 1, sub, username: "alumna", nombre: "Alumna", email: null, roles: ["USER"], schoolId: null, menor: false,
    dispositivo: DISPOSITIVO, emitido: new Date(ahora).toISOString(), vence: new Date(ahora + 86_400_000).toISOString(),
    cred: permisoOffline.huellaDeCredencial("huella-1"), ...extra,
  }, permisoOffline.clavePrivada()!);
  return `Permiso ${permiso}.${firma}`;
}

async function sincronizar(cuerpo: unknown, autorizacion = permisoDe(ALUMNA)) {
  const r = await fetch(`${baseUrl}/api/offline/sync`, {
    method: "POST", headers: { "Content-Type": "application/json", Authorization: autorizacion }, body: JSON.stringify(cuerpo),
  });
  return { status: r.status, body: (await r.json()) as any };
}

/** Las preguntas que sorteó el dispositivo y sus respuestas correctas (mismo código que la app). */
async function preguntas(sorteo: string, numero = 1) {
  const q = prisma.quiz.rows.find((x: { id: string }) => x.id === QUIZ) as { id: string; moduleId: string; title: string };
  const v = prisma.quizVersion.rows.find((x: { quizId: string }) => x.quizId === QUIZ) as { id: string; settings: string };
  const quiz = buildQuizFromCollection({ id: q.id, moduleId: q.moduleId, title: q.title }, { id: v.id, quizId: q.id, settings: v.settings })!;
  const codigo = async (id: string) => (prisma.plantillaEjercicio.rows.find((p: { id: string }) => p.id === id) as { codigoDsl: string })?.codigoDsl;
  const lista = await materializarPreguntasNativas(parseCuestionarioPreguntas(quiz.preguntas), contextoSorteoPreguntas(quiz, QUIZ, sorteo, numero), codigo);
  return lista!.map((p) => ({ id: p.id, correcta: String(p.answerKey) }));
}

async function intento(opciones: { bien: boolean; sorteo?: string; score?: number; id?: string }) {
  const sorteo = opciones.sorteo ?? ALUMNA;
  const ps = await preguntas(sorteo);
  return {
    id: opciones.id ?? crypto.randomUUID(), tipo: "intento",
    datos: {
      id: "", quizId: QUIZ, quizVersionId: "cont-mat--sumar.v1", seed: null, attemptNo: 1, sorteo,
      startedAt: new Date(Date.now() - 120_000).toISOString(), submittedAt: new Date(Date.now() - 60_000).toISOString(),
      answers: Object.fromEntries(ps.map((p) => [p.id, opciones.bien ? p.correcta : "-1"])),
      presentedIds: ps.map((p) => p.id), score: opciones.score ?? (opciones.bien ? 2 : 0), maxScore: 2,
    },
  };
}
const conId = (e: Awaited<ReturnType<typeof intento>>, id = crypto.randomUUID()) => ({ ...e, datos: { ...e.datos, id } });

test("L8: vuelve a corregir el intento, acredita el progreso y renueva el permiso", async () => {
  const e = conId(await intento({ bien: true }));
  const r = await sincronizar({ eventos: [e] });
  assert.equal(r.status, 200, JSON.stringify(r.body));
  assert.deepEqual(r.body.resultados[e.id], { estado: "corregido", score: 2, maxScore: 2, status: "submitted", revisar: false });

  const guardado = prisma.quizAttempt.rows.find((a: { id: string }) => a.id === e.datos.id) as Record<string, any>;
  assert.equal(guardado.userId, ALUMNA);
  assert.equal(guardado.submittedAt, e.datos.submittedAt);
  assert.deepEqual(JSON.parse(guardado.grading).sinConexion, { dispositivo: DISPOSITIVO, scoreLocal: 2, maxScoreLocal: 2, revisar: false });
  const progreso = prisma.progresoModulo.rows.find((p: { usuarioId: string }) => p.usuarioId === ALUMNA) as Record<string, any>;
  assert.equal(progreso.moduloId, "cont-mat--sumar");
  assert.equal(progreso.status, "completado");

  // Permiso nuevo, firmado por el servidor, para el mismo dispositivo.
  const datos = JSON.parse(Buffer.from(r.body.permiso.permiso, "base64url").toString("utf8"));
  assert.equal(datos.sub, ALUMNA);
  assert.equal(datos.dispositivo, DISPOSITIVO);
  assert.equal(r.body.permiso.vence, datos.vence);
  assert.ok(permisoOffline.leerPermiso(`Permiso ${r.body.permiso.permiso}.${r.body.permiso.firma}`));

  // La bajada trae el intento y el progreso.
  assert.deepEqual(r.body.progreso.map((p: { moduloId: string; status: string }) => [p.moduloId, p.status]), [["cont-mat--sumar", "completado"]]);
  assert.equal(r.body.intentos.length, 1);
  assert.equal(r.body.intentos[0].moduleId, "cont-mat--sumar");
  assert.equal(r.body.cursor, e.datos.submittedAt);
});

test("L8: el mismo intento dos veces no se corrige otra vez", async () => {
  const e = conId(await intento({ bien: true }));
  await sincronizar({ eventos: [e] });
  const r = await sincronizar({ eventos: [e] });
  assert.equal(r.body.resultados[e.id].estado, "ya_estaba");
  assert.equal(prisma.quizAttempt.rows.length, 1);
});

test("L8: si la nota del dispositivo no coincide, vale la del servidor y queda para revisar", async () => {
  const e = conId(await intento({ bien: false, score: 2 }));
  const r = await sincronizar({ eventos: [e] });
  assert.deepEqual(r.body.resultados[e.id], { estado: "corregido", score: 0, maxScore: 2, status: "submitted", revisar: true });
  const progreso = prisma.progresoModulo.rows.find((p: { usuarioId: string }) => p.usuarioId === ALUMNA) as Record<string, any>;
  assert.equal(progreso.status, "en_progreso");
});

test("L8: el progreso que manda el dispositivo no se acredita", async () => {
  const r = await sincronizar({ eventos: [{ id: "ev-1", tipo: "progreso", datos: { moduloId: "cont-mat--restar", estado: "completado" } }] });
  assert.equal(r.body.resultados["ev-1"].estado, "ignorado");
  assert.equal(prisma.progresoModulo.rows.length, 0);
});

test("L8: un intento de otra cuenta con el mismo identificador se rechaza", async () => {
  const e = conId(await intento({ bien: true }));
  await sincronizar({ eventos: [e] });
  seedUser({ id: "otra", role: "STUDENT", roles: ["USER"] });
  Object.assign(fila("otra"), { passwordHash: "huella-1" });
  const r = await sincronizar({ eventos: [{ ...e, id: "ev-otra" }] }, permisoDe("otra"));
  assert.equal(r.body.resultados["ev-otra"].estado, "rechazado");
  assert.equal((prisma.quizAttempt.rows[0] as { userId: string }).userId, ALUMNA);
});

test("L8: un usuario local vinculado se corrige con el sorteo que tuvo en el dispositivo", async () => {
  const local = "local-0123456789abcdef";
  const e = conId(await intento({ bien: true, sorteo: local }));
  const r = await sincronizar({ eventos: [e] });
  assert.equal(r.body.resultados[e.id].score, 2);
  const guardado = prisma.quizAttempt.rows.find((a: { id: string }) => a.id === e.datos.id) as Record<string, any>;
  assert.equal(JSON.parse(guardado.grading).sinConexion.sorteo, local);
  // Un sorteo que no es ni la cuenta ni un usuario local no se acepta.
  const raro = conId(await intento({ bien: true, sorteo: "otra-cuenta" }));
  assert.equal((await sincronizar({ eventos: [raro] })).body.resultados[raro.id].estado, "rechazado");
});

test("L8: el módulo sale del cuestionario del servidor, no del dispositivo", async () => {
  const e = conId(await intento({ bien: true }));
  (e.datos as Record<string, unknown>).moduleId = "cont-mat--restar";
  await sincronizar({ eventos: [e] });
  assert.deepEqual(prisma.progresoModulo.rows.map((p: { moduloId: string }) => p.moduloId), ["cont-mat--sumar"]);
});

test("L8: si la contraseña cambió en la web, no aplica nada y pide la nueva", async () => {
  fila(ALUMNA).passwordHash = "huella-2";
  const e = conId(await intento({ bien: true }));
  const r = await sincronizar({ eventos: [e] });
  assert.equal(r.status, 401);
  assert.equal(r.body.code, "CONTRASENA_CAMBIADA");
  assert.equal(prisma.quizAttempt.rows.length, 0);
});

test("L8: una cuenta suspendida sube sus intentos y queda bloqueada", async () => {
  fila(ALUMNA).isBanned = true;
  const e = conId(await intento({ bien: true }));
  const r = await sincronizar({ eventos: [e, { id: "rol", tipo: "solicitar-rol", datos: { target_role: "TEACHER" } }] });
  assert.equal(r.status, 403);
  assert.equal(r.body.resultados[e.id].estado, "corregido");
  assert.equal(r.body.resultados.rol.estado, "rechazado");
  assert.equal(prisma.suggestion.rows.length, 0);
});

test("L8: una cuenta dada de baja no sincroniza", async () => {
  fila(ALUMNA).isDeleted = true;
  const r = await sincronizar({ eventos: [] });
  assert.equal(r.status, 403);
  assert.equal(r.body.code, "CUENTA_BAJA");
});

test("L8: el pedido de rol que esperaba en la cola llega a la plataforma", async () => {
  const r = await sincronizar({ eventos: [{ id: "rol", tipo: "solicitar-rol", datos: { target_role: "TEACHER", motivo: "Doy clases" } }] });
  assert.equal(r.body.resultados.rol.estado, "aplicado");
  assert.equal(prisma.suggestion.rows.length, 1);
  const admin = await sincronizar({ eventos: [{ id: "adm", tipo: "solicitar-rol", datos: { target_role: "ADMIN" } }] });
  assert.equal(admin.body.resultados.adm.estado, "rechazado");
});

test("L8: sin permiso válido no sincroniza", async () => {
  assert.equal((await sincronizar({ eventos: [] }, "Permiso x.y")).status, 401);
  const vencido = permisoDe(ALUMNA, { vence: new Date(Date.now() - 1000).toISOString() });
  assert.equal((await sincronizar({ eventos: [] }, vencido)).status, 401);
});

test("L8: la bajada trae lo hecho en la web desde la última vez, de a tandas", async () => {
  const hecho = (n: number) => ({
    id: crypto.randomUUID(), quizId: QUIZ, quizVersionId: "cont-mat--sumar.v1", userId: ALUMNA, status: "submitted",
    startedAt: new Date(Date.UTC(2026, 0, 1, 0, n)).toISOString(), submittedAt: new Date(Date.UTC(2026, 0, 1, 0, n, 30)).toISOString(),
    score: 1, maxScore: 2, answers: "{}", feedback: "{}", grading: null, seed: null, seedPolicy: 0, attemptNo: n + 1,
  });
  prisma.quizAttempt.rows.push(...Array.from({ length: 205 }, (_, n) => hecho(n)) as never[]);
  const primera = await sincronizar({ eventos: [] });
  assert.equal(primera.body.intentos.length, 200);
  assert.equal(primera.body.mas, true);
  const segunda = await sincronizar({ eventos: [], desde: primera.body.cursor });
  assert.equal(segunda.body.intentos.length, 5);
  assert.equal(segunda.body.mas, false);
});

test("L8: la renovación trae los roles de hoy", async () => {
  fila(ALUMNA).roles = ["USER", "PARENT", "ADMIN"];
  const r = await sincronizar({ eventos: [] });
  const datos = JSON.parse(Buffer.from(r.body.permiso.permiso, "base64url").toString("utf8"));
  assert.deepEqual(datos.roles, ["USER", "PARENT"]);
});
