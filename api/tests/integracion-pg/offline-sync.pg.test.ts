/**
 * L8 — fase 5 de punta a punta: la API real sobre Postgres y la API local de la app (Node, bases en memoria) hablándole
 * por HTTP. Un usuario local rinde sin red y se vincula; la cuenta rinde sin red (con una nota inflada a mano en el
 * dispositivo); al sincronizar, el servidor vuelve a corregir con el mismo sorteo, acredita el progreso, marca la nota
 * que no coincide y baja lo hecho en la web. Después cambia la contraseña en la web y la app pide la nueva.
 *
 * Solo corre si PG_TEST_DATABASE_URL apunta a una base `*_test` (ver economia-saldo.pg.test.ts). Carga un temario mínimo
 * con prefijo único y lo borra al terminar, con el usuario y sus intentos.
 */
const url = process.env.PG_TEST_DATABASE_URL ?? "";
const dbName = url.replace(/\?.*$/, "").split("/").pop() ?? "";
const habilitado = url !== "" && dbName.endsWith("_test");

process.env.NODE_ENV = "test";
process.env.JWT_SECRET = process.env.JWT_SECRET ?? "test-secret-pg";
if (habilitado) process.env.DATABASE_URL = url;

import assert from "node:assert/strict";
import crypto from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { test } from "node:test";

const opts = { skip: habilitado ? false : "definir PG_TEST_DATABASE_URL (base *_test)" };
const carpeta = fs.mkdtempSync(path.join(os.tmpdir(), "e2e-sync-"));
const { privateKey } = crypto.generateKeyPairSync("ed25519");
fs.writeFileSync(path.join(carpeta, "clave.pem"), privateKey.export({ type: "pkcs8", format: "pem" }));
process.env.OFFLINE_PERMISO_CLAVE_ARCHIVO = path.join(carpeta, "clave.pem");

const P = `e2e${crypto.randomBytes(3).toString("hex")}`;
const pregunta = (a: number, b: number) =>
  `enunciado: "¿Cuánto es ${a} + ${b}?"\ntipo: mc\nopciones_explicitas:\n  - "${a + b}"\n  - "${a + b + 1}"\nrespuesta: "${a + b}"\n`;
const manifiesto = {
  temas: [
    { id: `cont-${P}--sumar`, materia: P, ruta: "sumar", titulo: "Sumar E2E", teoria: "Teoría", nivel: "1", dependencias: [],
      preguntas: [{ titulo: "p1", dsl: pregunta(2, 3) }, { titulo: "p2", dsl: pregunta(4, 5) }] },
    { id: `cont-${P}--restar`, materia: P, ruta: "restar", titulo: "Restar E2E", teoria: "Teoría", nivel: "1",
      dependencias: [`cont-${P}--sumar`], preguntas: [{ titulo: "p1", dsl: pregunta(7, 1) }] },
  ],
};
const USUARIO = { id: `u-${P}`, username: `alumna_${P}`, email: `${P}@prueba.invalid`, password: "clave-larga-de-prueba" };

const ok = (cond: unknown, msg: string) => assert.ok(cond, msg);

test("L8: sincronización de punta a punta con Postgres", opts, async () => {
  const { prisma } = await import("../../src/lib/prisma");
  const { filasDelTemario } = await import("../../src/lib/temario-filas");
  const { hashPassword } = await import("../../src/lib/passwords");
  const { ENV } = await import("../../src/lib/env");
  ENV.EMAIL_VERIFICACION = false as never;
  const { clavePublicaCruda } = await import("../../src/lib/permiso-offline");
  const { app } = await import("../../src/app");
  const { almacenNode } = await import("../../../apps/offline/src/node/almacen-node");
  const { crearContexto } = await import("../../../apps/offline/src/api-local/contexto");
  const { prepararBases } = await import("../../../apps/offline/src/api-local/esquema");
  const { crearServidorLocal } = await import("../../../apps/offline/src/api-local/servidor");
  const { cargarManifiesto } = await import("../../../apps/offline/src/api-local/temario");
  const { materializarPreguntasNativas, contextoSorteoPreguntas, buildQuizFromCollection } = await import("../../src/lib/quiz-correccion");
  const { parseCuestionarioPreguntas } = await import("../../src/lib/quiz-preguntas");

  const ahora = new Date().toISOString();
  const f = filasDelTemario(manifiesto as never, { owner: USUARIO.id, now: ahora });
  const servidor = app.listen(0, "127.0.0.1");
  await new Promise((r) => servidor.once("listening", r));
  const puerto = (servidor.address() as { port: number }).port;

  try {
    await prisma.usuario.create({
      data: { id: USUARIO.id, username: USUARIO.username, email: USUARIO.email, fullName: "Alumna E2E", roles: ["USER"],
        passwordHash: await hashPassword(USUARIO.password), birthdate: "2000-01-01", createdAt: ahora, updatedAt: ahora,
        emailVerificadoAt: ahora, privacyConsent: true, termsAccepted: true, consentedAt: ahora } as never,
    });
    for (const m of f.modulos) await prisma.modulo.create({ data: m as never });
    for (const p of f.plantillas) await prisma.plantillaEjercicio.create({ data: p as never });
    for (const q of f.quizzes) await prisma.quiz.create({ data: q as never });
    for (const v of f.versiones) await prisma.quizVersion.create({ data: v as never });

    let red = true;
    const tareas: Promise<unknown>[] = [];
    const ctx = crearContexto(almacenNode(), {
      iteraciones: 1000,
      config: { modoAutonomo: false, usuariosLocales: true, clavePublica: clavePublicaCruda(privateKey) },
      remoto: { base: `http://127.0.0.1:${puerto}`, fetch: ((u: string, i: RequestInit) => (red ? fetch(u, i) : Promise.reject(new TypeError("sin red")))) as typeof fetch },
      segundoPlano: (t) => void tareas.push(t.catch((e) => console.log("segundo plano:", e))),
    });
    await prepararBases(ctx.almacen);
    await cargarManifiesto(ctx, manifiesto as never, { origen: "oficial", paquete: P });
    const atender = crearServidorLocal(ctx);
    const pedir = async (metodo: string, ruta: string, cuerpo?: unknown, token?: string) => {
      const r = await atender(new Request(`https://api.virtualbook.local${ruta}`, {
        method: metodo, headers: { "Content-Type": "application/json", ...(token ? { Authorization: `Bearer ${token}` } : {}) },
        body: cuerpo === undefined ? undefined : JSON.stringify(cuerpo),
      }));
      return { status: r.status, datos: (await r.json()) as any };
    };
    const esperar = async () => { while (tareas.length) await Promise.all(tareas.splice(0)); };
    async function rendir(token: string, sorteo: string, moduloId: string, bien: boolean) {
      const ini = await pedir("POST", "/api/quiz-attempts", { moduleId: moduloId, quizId: `${moduloId}.quiz` }, token);
      if (ini.status !== 201) throw new Error(JSON.stringify(ini));
      const visto = await pedir("GET", `/api/quiz-attempts/${ini.datos.id}`, undefined, token);
      const ids: string[] = visto.datos.questions.map((q: { id: string }) => q.id);
      const [q] = await ctx.almacen.consulta<any>("contenido", "SELECT * FROM quizzes WHERE id = ?", [`${moduloId}.quiz`]);
      const quiz = buildQuizFromCollection({ id: q.id, moduleId: q.modulo_id, title: q.titulo }, { id: q.version_id, quizId: q.id, settings: q.settings })!;
      const codigo = async (id: string) => (await ctx.almacen.consulta<any>("contenido", "SELECT codigo_dsl FROM plantillas WHERE id = ?", [id]))[0]?.codigo_dsl;
      const ps = await materializarPreguntasNativas(parseCuestionarioPreguntas(quiz.preguntas), contextoSorteoPreguntas(quiz, q.id, sorteo, ini.datos.intentosPrevios + 1), codigo);
      const claves = Object.fromEntries(ps!.map((p) => [p.id, String(p.answerKey)]));
      for (const id of ids) await pedir("POST", `/api/quiz-attempts/${ini.datos.id}/answer`, { questionId: id, response: bien ? claves[id] : "-1" }, token);
      const fin = await pedir("POST", `/api/quiz-attempts/${ini.datos.id}/submit`, { answers: {}, presentedIds: ids }, token);
      return { id: ini.datos.id as string, fin: fin.datos };
    }
    const sumar = `cont-${P}--sumar`;

    // 1. Usuario local: rinde sin red y después se vincula a la cuenta.
    red = false;
    const local = (await pedir("POST", "/api/auth/register", { username: USUARIO.username, password: "otra-clave-local" })).datos;
    const intentoLocal = await rendir(local.accessToken, local.id, sumar, false);
    ok(intentoLocal.fin.score === 0, "el usuario local desaprueba sin red");

    red = true;
    const v = await pedir("POST", "/api/offline/vincular", { identifier: USUARIO.username, password: USUARIO.password }, local.accessToken);
    ok(v.status === 200 && v.datos.id === USUARIO.id, `vincula el usuario local a la cuenta (${v.status})`);
    await esperar();
    const token = v.datos.accessToken;
    const delLocal = await prisma.quizAttempt.findFirst({ where: { id: intentoLocal.id } });
    ok(delLocal?.userId === USUARIO.id && delLocal.score === 0, "el intento del usuario local subió a la cuenta");
    ok(JSON.parse(delLocal!.grading!).sinConexion.sorteo === local.id, "se corrigió con el sorteo del usuario local");

    // 2. Sin red aprueba; se hace trampa con la nota local de otro intento.
    red = false;
    const bueno = await rendir(token, USUARIO.id, sumar, true);
    ok(bueno.fin.aprobado === true, "aprueba sin red");
    const malo = await rendir(token, USUARIO.id, sumar, false);
    await ctx.almacen.ejecutar("progreso", "UPDATE intentos SET score = max_score WHERE id = ?", [malo.id]);
    await esperar();

    red = true;
    const s = await pedir("POST", "/api/offline/sincronizar", {}, token);
    ok(s.status === 200 && s.datos.estado === "ok" && s.datos.bajados === 0, `sincroniza (${JSON.stringify(s.datos)})`);
    const a1 = await prisma.quizAttempt.findFirst({ where: { id: bueno.id } });
    const a2 = await prisma.quizAttempt.findFirst({ where: { id: malo.id } });
    ok(a1?.score === 2 && a1.status === "submitted", "el servidor corrigió el intento aprobado con la misma nota");
    ok(a2?.score === 0 && JSON.parse(a2.grading!).sinConexion.revisar === true, "la nota inflada en el dispositivo queda en 0 y para revisar");
    const prog = await prisma.progresoModulo.findFirst({ where: { usuarioId: USUARIO.id, moduloId: sumar } });
    ok(prog?.status === "completado", "el progreso oficial se acreditó con la nueva corrección");
    const estado = (await pedir("GET", "/api/offline/sincronizacion", undefined, token)).datos;
    ok(estado.pendientes === 0 && estado.paraRevisar === 1, `estado de la sincronización (${JSON.stringify(estado)})`);

    // 3. Lo hecho en la web baja al dispositivo.
    const web = crypto.randomUUID();
    await prisma.quizAttempt.create({ data: {
      id: web, quizId: `${sumar}.quiz`, quizVersionId: `${sumar}.v1`, userId: USUARIO.id, status: "submitted", startedAt: new Date().toISOString(),
      submittedAt: new Date().toISOString(), score: 1, maxScore: 2, answers: "{}", feedback: "{}", attemptNo: 9,
    } as never });
    await pedir("POST", "/api/offline/sincronizar", {}, token);
    const lista = (await pedir("GET", `/api/quiz-attempts?moduleId=${sumar}`, undefined, token)).datos.items;
    ok(lista.some((i: { id: string; sinConexion: boolean }) => i.id === web && !i.sinConexion), "el intento hecho en la web aparece en el dispositivo");

    // 4. La web muestra «hecho sin conexión».
    const l = await fetch(`http://127.0.0.1:${puerto}/api/auth/login`, {
      method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ identifier: USUARIO.username, password: USUARIO.password }),
    });
    const jwt = ((await l.json()) as { accessToken: string }).accessToken;
    const r = await fetch(`http://127.0.0.1:${puerto}/api/quiz-attempts?moduleId=${sumar}`, { headers: { Authorization: `Bearer ${jwt}` } });
    const items = (((await r.json()) as { items?: { id: string; sinConexion: boolean }[] }).items ?? []);
    ok(items.find((i) => i.id === bueno.id)?.sinConexion === true && items.find((i) => i.id === web)?.sinConexion === false,
      "el historial de la web marca los intentos hechos sin conexión");

    // 5. Contraseña cambiada en la web.
    await prisma.usuario.update({ where: { id: USUARIO.id }, data: { passwordHash: await hashPassword("clave-nueva-de-prueba") } });
    const c = await pedir("POST", "/api/offline/sincronizar", {}, token);
    ok(c.datos.estado === "contrasena", "si la contraseña cambió, pide la nueva");
    const nueva = await pedir("POST", "/api/auth/login", { identifier: USUARIO.username, password: "clave-nueva-de-prueba" });
    await esperar();
    ok(nueva.status === 200, "entra con la contraseña nueva");
  } finally {
    servidor.close();
    await prisma.quizAttempt.deleteMany({ where: { userId: USUARIO.id } });
    await prisma.progresoModulo.deleteMany({ where: { usuarioId: USUARIO.id } });
    await prisma.quizVersion.deleteMany({ where: { quizId: { startsWith: `cont-${P}--` } } });
    await prisma.quiz.deleteMany({ where: { id: { startsWith: `cont-${P}--` } } });
    await prisma.plantillaEjercicio.deleteMany({ where: { id: { startsWith: `cont-${P}--` } } });
    await prisma.modulo.deleteMany({ where: { id: { startsWith: `cont-${P}--` } } });
    await (prisma as any).auditLog?.deleteMany?.({ where: { actorId: USUARIO.id } }).catch(() => undefined);
    await (prisma as any).transaccion?.deleteMany?.({ where: { usuarioId: USUARIO.id } }).catch(() => undefined);
    await prisma.usuario.deleteMany({ where: { id: USUARIO.id } });
    await prisma.$disconnect();
    fs.rmSync(carpeta, { recursive: true, force: true });
  }
});
