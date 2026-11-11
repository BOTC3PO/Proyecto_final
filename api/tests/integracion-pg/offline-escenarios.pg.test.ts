/**
 * L8 — fase 7: los casos difíciles de la app sin conexión, con la API real sobre Postgres y la API local de la app (Node,
 * bases en memoria) hablándole por HTTP:
 *
 * 1. Modo avión: se activa con red, después todo sin red (entrar, rendir, nota al instante, desbloqueo) y al volver la
 *    red se sube solo.
 * 2. Intentos repetidos: la respuesta de una sincronización se pierde y se vuelve a mandar lo mismo; varios intentos
 *    del mismo cuestionario sin red. El servidor no duplica intentos ni monedas.
 * 3. Notas que no coinciden: una nota inflada en el dispositivo vale la del servidor; si el cuestionario se actualizó
 *    en la plataforma mientras tanto, vale la versión que se rindió.
 * 4. Permiso vencido: sin red pide conectarse y no pierde nada; con red se renueva y sube lo pendiente.
 * 5. Cuenta suspendida o dada de baja: la suspendida sube sus intentos y queda bloqueada (y se puede quitar del
 *    dispositivo sin entrar); la dada de baja no sube nada y se borra del dispositivo.
 *
 * Solo corre si PG_TEST_DATABASE_URL apunta a una base `*_test` (ver economia-saldo.pg.test.ts). Carga un temario mínimo
 * con prefijo único y lo borra al terminar, con los usuarios y sus intentos.
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
const carpeta = fs.mkdtempSync(path.join(os.tmpdir(), "e2e-escenarios-"));
const { privateKey } = crypto.generateKeyPairSync("ed25519");
fs.writeFileSync(path.join(carpeta, "clave.pem"), privateKey.export({ type: "pkcs8", format: "pem" }));
process.env.OFFLINE_PERMISO_CLAVE_ARCHIVO = path.join(carpeta, "clave.pem");

const P = `esc${crypto.randomBytes(3).toString("hex")}`;
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
const CLAVE = "clave-larga-de-prueba";
const USUARIOS = ["avion", "repetido", "vencido", "suspendida", "baja"].map((n) => ({
  id: `u-${P}-${n}`, username: `${n}_${P}`, email: `${n}.${P}@prueba.invalid`,
}));
const [AVION, REPETIDO, VENCIDO, SUSPENDIDA, BAJA] = USUARIOS;

const ok = (cond: unknown, msg: string) => assert.ok(cond, msg);

test("L8: escenarios sin conexión de punta a punta con Postgres", opts, async () => {
  const { prisma } = await import("../../src/lib/prisma");
  const { filasDelTemario } = await import("../../src/lib/temario-filas");
  const { hashPassword } = await import("../../src/lib/passwords");
  const { ENV } = await import("../../src/lib/env");
  ENV.EMAIL_VERIFICACION = false as never;
  const { clavePublicaCruda, firmarPermiso } = await import("../../src/lib/permiso-offline");
  const { app } = await import("../../src/app");
  const { almacenNode } = await import("../../../apps/offline/src/node/almacen-node");
  const { crearContexto } = await import("../../../apps/offline/src/api-local/contexto");
  const { prepararBases } = await import("../../../apps/offline/src/api-local/esquema");
  const { crearServidorLocal } = await import("../../../apps/offline/src/api-local/servidor");
  const { cargarManifiesto } = await import("../../../apps/offline/src/api-local/temario");
  const { materializarPreguntasNativas, contextoSorteoPreguntas, buildQuizFromCollection } = await import("../../src/lib/quiz-correccion");
  const { parseCuestionarioPreguntas } = await import("../../src/lib/quiz-preguntas");

  const ahora = new Date().toISOString();
  const f = filasDelTemario(manifiesto as never, { owner: AVION.id, now: ahora });
  const servidor = app.listen(0, "127.0.0.1");
  await new Promise((r) => servidor.once("listening", r));
  const base = `http://127.0.0.1:${(servidor.address() as { port: number }).port}`;
  const sumar = `cont-${P}--sumar`;
  const restar = `cont-${P}--restar`;

  try {
    for (const u of USUARIOS) {
      await prisma.usuario.create({
        data: { id: u.id, username: u.username, email: u.email, fullName: `Alumna ${u.username}`, roles: ["USER"],
          passwordHash: await hashPassword(CLAVE), birthdate: "2000-01-01", createdAt: ahora, updatedAt: ahora,
          emailVerificadoAt: ahora, privacyConsent: true, termsAccepted: true, consentedAt: ahora } as never,
      });
    }
    for (const m of f.modulos) await prisma.modulo.create({ data: m as never });
    for (const p of f.plantillas) await prisma.plantillaEjercicio.create({ data: p as never });
    for (const q of f.quizzes) await prisma.quiz.create({ data: q as never });
    for (const v of f.versiones) await prisma.quizVersion.create({ data: v as never });

    // La red del dispositivo. `perderRespuesta`: la próxima sincronización llega al servidor, pero la respuesta no vuelve.
    let red = true;
    let perderRespuesta = false;
    const tareas: Promise<unknown>[] = [];
    const ctx = crearContexto(almacenNode(), {
      iteraciones: 1000,
      config: { modoAutonomo: false, usuariosLocales: true, clavePublica: clavePublicaCruda(privateKey) },
      remoto: {
        base,
        fetch: (async (u: string, i: RequestInit) => {
          if (!red) throw new TypeError("sin red");
          const r = await fetch(u, i);
          if (perderRespuesta && u.endsWith("/api/offline/sync")) {
            perderRespuesta = false;
            throw new TypeError("se cortó la conexión");
          }
          return r;
        }) as typeof fetch,
      },
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
    const entrar = async (u: { username: string }) => {
      const r = await pedir("POST", "/api/auth/login", { identifier: u.username, password: CLAVE });
      await esperar();
      return r;
    };
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
    const enElServidor = (userId: string) => prisma.quizAttempt.findMany({ where: { userId }, orderBy: { startedAt: "asc" } });
    const filasLocales = async (tabla: string, perfilId: string) =>
      (await ctx.almacen.consulta<{ n: number }>("progreso", `SELECT COUNT(*) AS n FROM ${tabla} WHERE perfil_id = ?`, [perfilId]))[0].n;

    // ── 1. Modo avión ──────────────────────────────────────────────────────────────────────────────────────────────
    ok((await entrar(AVION)).status === 200, "activa la cuenta con red");
    red = false;
    const avion = await entrar(AVION);
    ok(avion.status === 200, `sin red entra con la huella del dispositivo (${avion.status})`);
    const t1 = avion.datos.accessToken;
    ok((await pedir("GET", `/api/modulos/${sumar}`, undefined, t1)).status === 200, "sin red lee la teoría");
    ok((await pedir("GET", `/api/modulos/${restar}`, undefined, t1)).datos.isLocked === true, "el módulo siguiente arranca con candado");
    const a1 = await rendir(t1, AVION.id, sumar, true);
    ok(a1.fin.aprobado === true && a1.fin.score === 2, "sin red la nota sale al instante");
    ok((await pedir("GET", `/api/modulos/${restar}`, undefined, t1)).datos.isLocked === false, "aprobar desbloquea el siguiente sin red");
    const sinRed = await pedir("POST", "/api/offline/sincronizar", {}, t1);
    ok(sinRed.status === 503 && sinRed.datos.code === "SIN_CONEXION" && sinRed.datos.pendientes > 0, "sin red, lo hecho queda en la cola");
    ok((await enElServidor(AVION.id)).length === 0, "nada llegó al servidor");
    red = true;
    ok((await entrar(AVION)).status === 200, "vuelve la red y entra");
    const subidos = await enElServidor(AVION.id);
    ok(subidos.length === 1 && subidos[0].id === a1.id && subidos[0].score === 2, "al entrar con red se subió solo y el servidor dio la misma nota");
    const prog = await prisma.progresoModulo.findFirst({ where: { usuarioId: AVION.id, moduloId: sumar } });
    ok(prog?.status === "completado", "el progreso oficial se acreditó");
    ok((await pedir("GET", "/api/offline/sincronizacion", undefined, t1)).datos.pendientes === 0, "no queda nada pendiente");

    // ── 2. Intentos repetidos ──────────────────────────────────────────────────────────────────────────────────────
    const t2 = (await entrar(REPETIDO)).datos.accessToken;
    red = false;
    const r1 = await rendir(t2, REPETIDO.id, sumar, false);
    const r2 = await rendir(t2, REPETIDO.id, sumar, false);
    const r3 = await rendir(t2, REPETIDO.id, sumar, true);
    ok(new Set([r1.id, r2.id, r3.id]).size === 3, "cada intento sin red tiene su identificador");
    const numeros = (await ctx.almacen.consulta<{ numero: number }>("progreso", "SELECT numero FROM intentos WHERE perfil_id = ? ORDER BY numero", [REPETIDO.id])).map((x) => x.numero);
    ok(JSON.stringify(numeros) === "[1,2,3]", `los intentos se numeran en el dispositivo (${numeros})`);
    // Entregar otra vez el mismo intento no lo vuelve a corregir.
    const otraVez = await pedir("POST", `/api/quiz-attempts/${r1.id}/submit`, { answers: {}, presentedIds: [] }, t2);
    ok(otraVez.datos.score === 0, "volver a entregar un intento ya entregado no cambia la nota");

    red = true;
    perderRespuesta = true;
    const cortada = await pedir("POST", "/api/offline/sincronizar", {}, t2);
    ok(cortada.status === 503, `la respuesta se perdió (${cortada.status})`);
    ok((await enElServidor(REPETIDO.id)).length === 3, "el servidor sí los recibió");
    const movimientos = async () =>
      (await prisma.economiaTransaccion.count({ where: { usuarioId: REPETIDO.id } })) +
      (await prisma.ledgerMovimiento.count({ where: { usuarioId: REPETIDO.id } }));
    const monedas = await movimientos();
    const repetida = await pedir("POST", "/api/offline/sincronizar", {}, t2);
    ok(repetida.status === 200 && repetida.datos.estado === "ok", `se vuelve a mandar lo mismo (${JSON.stringify(repetida.datos)})`);
    const finales = await enElServidor(REPETIDO.id);
    ok(finales.length === 3, `no se duplicó ningún intento (${finales.length})`);
    ok(JSON.stringify(finales.map((a) => a.score)) === "[0,0,2]", "cada intento conserva su nota");
    ok(JSON.stringify(finales.map((a) => a.attemptNo)) === "[1,2,3]", "y su número");
    const despues = await movimientos();
    ok(despues === monedas, `las monedas no se acreditaron dos veces (${monedas} → ${despues})`);
    ok((await pedir("GET", "/api/offline/sincronizacion", undefined, t2)).datos.pendientes === 0, "la cola quedó vacía");

    // ── 3. Notas que no coinciden ──────────────────────────────────────────────────────────────────────────────────
    red = false;
    const inflado = await rendir(t2, REPETIDO.id, restar, false);
    await ctx.almacen.ejecutar("progreso", "UPDATE intentos SET score = max_score WHERE id = ?", [inflado.id]);
    // Mientras tanto, la plataforma publica otra versión del cuestionario (otra respuesta correcta).
    const v1 = await prisma.quizVersion.findFirst({ where: { quizId: `${restar}.quiz` } });
    const settings = JSON.parse(String(v1!.settings));
    const plantillaV1 = await prisma.plantillaEjercicio.findFirst({ where: { id: settings.preguntas.preguntas[0].plantillaId } });
    await prisma.plantillaEjercicio.create({ data: { ...(plantillaV1 as any), id: `cont-${P}--restar-v2`, codigoDsl: pregunta(7, 2) } as never });
    settings.preguntas.preguntas[0].plantillaId = `cont-${P}--restar-v2`;
    await prisma.quizVersion.create({ data: { ...(v1 as any), id: `${restar}.v2`, versionNumber: 2, settings: JSON.stringify(settings) } as never });
    await prisma.quiz.update({ where: { id: `${restar}.quiz` }, data: { currentVersionId: `${restar}.v2` } });
    const vuelto = await rendir(t2, REPETIDO.id, restar, true);
    red = true;
    await pedir("POST", "/api/offline/sincronizar", {}, t2);
    const sInflado = await prisma.quizAttempt.findFirst({ where: { id: inflado.id } });
    ok(sInflado?.score === 0 && JSON.parse(sInflado.grading!).sinConexion.revisar === true, "la nota inflada vale 0 y queda para revisar");
    const sVuelto = await prisma.quizAttempt.findFirst({ where: { id: vuelto.id } });
    ok(sVuelto?.score === 1 && sVuelto.quizVersionId === v1!.id, `vale la versión que se rindió (${sVuelto?.score}, ${sVuelto?.quizVersionId})`);
    ok(JSON.parse(sVuelto!.grading!).sinConexion.revisar === false, "y esa nota coincide");
    const historial = (await pedir("GET", `/api/quiz-attempts?moduleId=${restar}`, undefined, t2)).datos.items as any[];
    const enLaApp = historial.find((i) => i.id === inflado.id);
    ok(enLaApp?.paraRevisar === true, `la app muestra que la nota no coincide (${JSON.stringify(enLaApp)})`);
    ok((await pedir("GET", "/api/offline/sincronizacion", undefined, t2)).datos.paraRevisar === 1, "el estado lo cuenta");

    // ── 4. Permiso vencido ─────────────────────────────────────────────────────────────────────────────────────────
    const t4 = (await entrar(VENCIDO)).datos.accessToken;
    red = false;
    const pendiente = await rendir(t4, VENCIDO.id, sumar, true);
    // Pasan más de 90 días sin red: el permiso guardado vence (se firma de nuevo con fechas pasadas).
    const [fila] = await ctx.almacen.consulta<{ permiso: string }>("progreso", "SELECT permiso FROM perfiles WHERE id = ?", [VENCIDO.id]);
    const datos = JSON.parse(Buffer.from(fila.permiso, "base64url").toString("utf8"));
    const viejo = firmarPermiso({ ...datos, emitido: new Date(Date.now() - 100 * 86_400_000).toISOString(), vence: new Date(Date.now() - 86_400_000).toISOString() }, privateKey);
    await ctx.almacen.ejecutar("progreso", "UPDATE perfiles SET permiso = ?, firma = ?, vence = ? WHERE id = ?", [viejo.permiso, viejo.firma, new Date(Date.now() - 86_400_000).toISOString(), VENCIDO.id]);
    const vencido = await entrar(VENCIDO);
    ok(vencido.status === 403 && vencido.datos.code === "PERMISO_VENCIDO", `sin red pide conectarse (${JSON.stringify(vencido.datos)})`);
    ok((await filasLocales("intentos", VENCIDO.id)) === 1 && (await filasLocales("eventos", VENCIDO.id)) > 0, "no se perdió nada del dispositivo");
    // Con la sesión que había quedado abierta, la sincronización tampoco pasa: el servidor no acepta el permiso vencido.
    red = true;
    const conVencido = await pedir("POST", "/api/offline/sincronizar", {}, t4);
    ok(conVencido.datos.estado === "permiso-vencido", `el servidor no acepta el permiso vencido (${JSON.stringify(conVencido.datos)})`);
    ok((await enElServidor(VENCIDO.id)).length === 0, "y no aplica nada");
    const renovado = await entrar(VENCIDO);
    ok(renovado.status === 200, "con red y la contraseña, se renueva");
    const [nuevo] = await ctx.almacen.consulta<{ vence: string }>("progreso", "SELECT vence FROM perfiles WHERE id = ?", [VENCIDO.id]);
    ok(new Date(nuevo.vence).getTime() > Date.now() + 89 * 86_400_000, "por otros 90 días");
    const sVencido = await enElServidor(VENCIDO.id);
    ok(sVencido.length === 1 && sVencido[0].id === pendiente.id && sVencido[0].score === 2, "y sube lo que había quedado");

    // ── 5a. Cuenta suspendida ──────────────────────────────────────────────────────────────────────────────────────
    const t5 = (await entrar(SUSPENDIDA)).datos.accessToken;
    red = false;
    const deLaSuspendida = await rendir(t5, SUSPENDIDA.id, sumar, true);
    await prisma.usuario.update({ where: { id: SUSPENDIDA.id }, data: { isBanned: true } as never });
    red = true;
    const suspendida = await pedir("POST", "/api/offline/sincronizar", {}, t5);
    ok(suspendida.datos.estado === "bloqueado", `queda bloqueada (${JSON.stringify(suspendida.datos)})`);
    ok((await enElServidor(SUSPENDIDA.id)).some((a) => a.id === deLaSuspendida.id), "pero sus intentos subieron antes");
    ok((await pedir("GET", "/api/auth/me", undefined, t5)).status === 401, "se cerró la sesión");
    const bloqueada = await entrar(SUSPENDIDA);
    ok(bloqueada.status === 403 && bloqueada.datos.code === "CUENTA_BLOQUEADA", `no puede entrar (${JSON.stringify(bloqueada.datos)})`);
    red = false;
    const quitar = await pedir("DELETE", "/api/offline/perfil", { identifier: SUSPENDIDA.username, password: CLAVE });
    ok(quitar.status === 200, `se puede quitar del dispositivo sin entrar (${JSON.stringify(quitar.datos)})`);
    ok((await filasLocales("intentos", SUSPENDIDA.id)) === 0, "sin dejar nada");

    // ── 5b. Cuenta dada de baja ────────────────────────────────────────────────────────────────────────────────────
    red = true;
    const t6 = (await entrar(BAJA)).datos.accessToken;
    red = false;
    await rendir(t6, BAJA.id, sumar, true);
    await pedir("PUT", `/api/modulos-favoritos/${sumar}`, undefined, t6);
    red = true;
    const login = await fetch(`${base}/api/auth/login`, {
      method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ identifier: BAJA.username, password: CLAVE }),
    });
    const jwt = ((await login.json()) as { accessToken: string }).accessToken;
    const baja = await fetch(`${base}/api/mis-datos/baja`, {
      method: "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${jwt}` },
      body: JSON.stringify({ password: CLAVE, confirmacion: "BAJA" }),
    });
    ok(baja.status === 200, `se da de baja desde la web (${baja.status})`);
    const tras = await pedir("POST", "/api/offline/sincronizar", {}, t6);
    ok(tras.datos.estado === "baja", `la app se entera de la baja (${JSON.stringify(tras.datos)})`);
    ok((await enElServidor(BAJA.id)).length === 0, "no se subió nada de una cuenta dada de baja");
    for (const tabla of ["intentos", "eventos", "favoritos", "progreso_modulos", "sesiones"]) {
      ok((await filasLocales(tabla, BAJA.id)) === 0, `no queda nada en «${tabla}» del dispositivo`);
    }
    const perfiles = (await pedir("GET", "/api/offline/perfiles")).datos.items.map((p: { id: string }) => p.id);
    ok(!perfiles.includes(BAJA.id), "el perfil desapareció del dispositivo");
    ok(perfiles.includes(AVION.id) && perfiles.includes(VENCIDO.id), "los demás perfiles siguen");
    red = false;
    const sinPerfil = await entrar(BAJA);
    ok(sinPerfil.status === 503 && sinPerfil.datos.code === "SIN_CONEXION", "sin red ya no entra: el dispositivo no la conoce");
  } finally {
    servidor.close();
    const ids = USUARIOS.map((u) => u.id);
    await prisma.quizAttempt.deleteMany({ where: { userId: { in: ids } } });
    await prisma.progresoModulo.deleteMany({ where: { usuarioId: { in: ids } } });
    await prisma.quizVersion.deleteMany({ where: { quizId: { startsWith: `cont-${P}--` } } });
    await prisma.quiz.deleteMany({ where: { id: { startsWith: `cont-${P}--` } } });
    await prisma.plantillaEjercicio.deleteMany({ where: { id: { startsWith: `cont-${P}--` } } });
    await prisma.modulo.deleteMany({ where: { id: { startsWith: `cont-${P}--` } } });
    await (prisma as any).auditLog?.deleteMany?.({ where: { actorId: { in: ids } } }).catch(() => undefined);
    await prisma.economiaTransaccion.deleteMany({ where: { usuarioId: { in: ids } } });
    await prisma.ledgerMovimiento.deleteMany({ where: { usuarioId: { in: ids } } });
    await (prisma as any).moduloFavorito?.deleteMany?.({ where: { usuarioId: { in: ids } } }).catch(() => undefined);
    await prisma.usuario.deleteMany({ where: { id: { in: ids } } });
    await prisma.$disconnect();
    fs.rmSync(carpeta, { recursive: true, force: true });
  }
});
