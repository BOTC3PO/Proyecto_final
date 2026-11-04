/**
 * Fase 5: sincronización con la plataforma y vinculación de usuarios locales.
 *
 * El servidor es falso, pero vuelve a corregir cada intento con la misma corrección compartida
 * (`api/src/lib/quiz-correccion.ts`) y el sorteo que manda la app: si la app no mandara lo necesario (semilla, número,
 * sorteo, respuestas), la nota del servidor no daría igual. Firma los permisos con Ed25519 como el de verdad.
 */
import crypto from "node:crypto";
import { beforeEach, describe, expect, it } from "vitest";
import {
  buildQuizFromCollection, contextoSorteoPreguntas, gradeAnswers, materializarPreguntasNativas, serverQuestionToGradable,
} from "../../../../../api/src/lib/quiz-correccion";
import { parseCuestionarioPreguntas } from "../../../../../api/src/lib/quiz-preguntas";
import { crearContexto, type Contexto } from "../contexto";
import { prepararBases } from "../esquema";
import { crearServidorLocal } from "../servidor";
import { cargarManifiesto } from "../temario";
import { almacenPrueba } from "./almacen-prueba";

const BASE = "https://api.virtualbook.local";
const REMOTA = "https://plataforma.prueba/api";
const { privateKey, publicKey } = crypto.generateKeyPairSync("ed25519");
const CLAVE_PUBLICA = (publicKey.export({ format: "jwk" }) as { x: string }).x;

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

type Cuenta = { id: string; username: string; password: string; roles: string[]; baneada?: boolean; credencial: string };
type Servidor = {
  red: boolean;
  cuentas: Cuenta[];
  intentos: Map<string, { userId: string; score: number; maxScore: number; revisar: boolean; sorteo: string }>;
  progreso: Map<string, { moduloId: string; status: string; updatedAt: string }[]>;
  web: Record<string, unknown>[];
  /** Si la nota no coincide, el servidor manda la suya y marca para revisar; con esto se fuerza. */
  notaFalsa?: number;
  pedidos: { ruta: string; cuerpo: any }[];
};

let ctx: Contexto;
let atender: (r: Request) => Promise<Response>;
let srv: Servidor;
let tareas: Promise<unknown>[];

const responder = (cuerpo: unknown, status = 200) => new Response(JSON.stringify(cuerpo), { status, headers: { "Content-Type": "application/json" } });

function firmar(c: Cuenta, dispositivo: string, roles = c.roles) {
  const ahora = Date.now();
  const datos = {
    v: 1, sub: c.id, username: c.username, nombre: `Nombre ${c.username}`, email: null, roles, schoolId: null, menor: false,
    dispositivo, emitido: new Date(ahora).toISOString(), vence: new Date(ahora + 90 * 86_400_000).toISOString(), cred: c.credencial,
  };
  const permiso = Buffer.from(JSON.stringify(datos)).toString("base64url");
  return { permiso, firma: crypto.sign(null, Buffer.from(permiso), privateKey).toString("base64url"), vence: datos.vence };
}

/** La corrección del servidor, con el código compartido y el contenido del dispositivo (que es el mismo temario). */
async function corregirComoElServidor(i: { quizId: string; sorteo: string; attemptNo: number; answers: Record<string, string> }) {
  const [q] = await ctx.almacen.consulta<{ id: string; modulo_id: string; titulo: string; version_id: string; settings: string }>(
    "contenido", "SELECT * FROM quizzes WHERE id = ?", [i.quizId],
  );
  const quiz = buildQuizFromCollection({ id: q.id, moduleId: q.modulo_id, title: q.titulo }, { id: q.version_id, quizId: q.id, settings: q.settings })!;
  const codigo = async (id: string) =>
    (await ctx.almacen.consulta<{ codigo_dsl: string }>("contenido", "SELECT codigo_dsl FROM plantillas WHERE id = ?", [id]))[0]?.codigo_dsl;
  const ps = await materializarPreguntasNativas(
    parseCuestionarioPreguntas(quiz.preguntas), contextoSorteoPreguntas(quiz, q.id, i.sorteo, i.attemptNo), codigo,
  );
  const r = gradeAnswers({ ...quiz, questions: ps!.map((p) => serverQuestionToGradable(p, p.id)) }, i.answers);
  return { ...r, moduloId: q.modulo_id };
}

function servidorFalso() {
  const tokens = new Map<string, Cuenta>();
  return async (url: RequestInfo | URL, init?: RequestInit): Promise<Response> => {
    if (!srv.red) throw new TypeError("Failed to fetch");
    const ruta = String(url).replace(REMOTA, "");
    const b = JSON.parse(String(init?.body ?? "{}"));
    srv.pedidos.push({ ruta, cuerpo: b });
    const auth = String(new Headers(init?.headers).get("Authorization") ?? "");
    if (ruta === "/api/auth/login") {
      const c = srv.cuentas.find((x) => x.username === b.identifier);
      if (!c || c.password !== b.password) return responder({ error: "Invalid credentials" }, 401);
      if (c.baneada) return responder({ error: "Account suspended", code: "BANNED" }, 403);
      const t = crypto.randomUUID();
      tokens.set(t, c);
      return responder({ accessToken: t });
    }
    if (ruta === "/api/offline/permiso") {
      const c = tokens.get(auth.replace("Bearer ", ""));
      return c ? responder(firmar(c, b.dispositivo)) : responder({ error: "no autenticado" }, 401);
    }
    if (ruta === "/api/offline/sync") {
      const m = /^Permiso ([\w-]+)\.([\w-]+)$/.exec(auth);
      if (!m || !crypto.verify(null, Buffer.from(m[1]), publicKey, Buffer.from(m[2], "base64url"))) return responder({ code: "PERMISO_INVALIDO" }, 401);
      const datos = JSON.parse(Buffer.from(m[1], "base64url").toString("utf8"));
      const c = srv.cuentas.find((x) => x.id === datos.sub)!;
      if (datos.cred !== c.credencial) return responder({ code: "CONTRASENA_CAMBIADA" }, 401);
      const resultados: Record<string, unknown> = {};
      for (const e of b.eventos) {
        if (e.tipo !== "intento") {
          resultados[e.id] = { estado: "ignorado" };
          continue;
        }
        const ya = srv.intentos.get(e.datos.id);
        if (ya) {
          resultados[e.id] = { estado: "ya_estaba", ...ya };
          continue;
        }
        const r = await corregirComoElServidor(e.datos);
        const score = srv.notaFalsa ?? r.score;
        const guardado = { userId: c.id, score, maxScore: r.maxScore, revisar: score !== e.datos.score, sorteo: e.datos.sorteo };
        srv.intentos.set(e.datos.id, guardado);
        if (score === r.maxScore) srv.progreso.set(c.id, [...(srv.progreso.get(c.id) ?? []), { moduloId: r.moduloId, status: "completado", updatedAt: e.datos.submittedAt }]);
        resultados[e.id] = { estado: "corregido", status: "submitted", score, maxScore: r.maxScore, revisar: guardado.revisar };
      }
      if (c.baneada) return responder({ error: "Account suspended", code: "BANNED", resultados }, 403);
      const desde = b.desde ?? "";
      const web = srv.web.filter((w) => String(w.submittedAt) > desde);
      return responder({
        resultados, permiso: firmar(c, datos.dispositivo), progreso: srv.progreso.get(c.id) ?? [],
        intentos: web, cursor: web.length ? web[web.length - 1].submittedAt : desde || null, mas: false,
      });
    }
    return responder({ error: "not found" }, 404);
  };
}

const pedir = async (metodo: string, ruta: string, cuerpo?: unknown, token?: string) => {
  const r = await atender(new Request(`${BASE}${ruta}`, {
    method: metodo,
    headers: { "Content-Type": "application/json", ...(token ? { Authorization: `Bearer ${token}` } : {}) },
    body: cuerpo === undefined ? undefined : JSON.stringify(cuerpo),
  }));
  return { status: r.status, datos: await r.json() };
};
const terminarTareas = async () => {
  while (tareas.length) await Promise.all(tareas.splice(0));
};

/** Rinde el cuestionario de un módulo; `bien` decide si las respuestas son correctas (las calcula el sorteo real). */
async function rendir(token: string, sorteo: string, moduloId: string, bien: boolean) {
  const inicio = await pedir("POST", "/api/quiz-attempts", { moduleId: moduloId, quizId: `${moduloId}.quiz` }, token);
  expect(inicio.status).toBe(201);
  const visto = await pedir("GET", `/api/quiz-attempts/${inicio.datos.id}`, undefined, token);
  const ids: string[] = visto.datos.questions.map((q: { id: string }) => q.id);
  const [q] = await ctx.almacen.consulta<{ id: string; modulo_id: string; titulo: string; version_id: string; settings: string }>(
    "contenido", "SELECT * FROM quizzes WHERE id = ?", [`${moduloId}.quiz`],
  );
  const quiz = buildQuizFromCollection({ id: q.id, moduleId: q.modulo_id, title: q.titulo }, { id: q.version_id, quizId: q.id, settings: q.settings })!;
  const codigo = async (id: string) =>
    (await ctx.almacen.consulta<{ codigo_dsl: string }>("contenido", "SELECT codigo_dsl FROM plantillas WHERE id = ?", [id]))[0]?.codigo_dsl;
  const ps = await materializarPreguntasNativas(
    parseCuestionarioPreguntas(quiz.preguntas), contextoSorteoPreguntas(quiz, q.id, sorteo, inicio.datos.intentosPrevios + 1), codigo,
  );
  const claves = Object.fromEntries(ps!.map((p) => [p.id, String(p.answerKey)]));
  for (const id of ids) await pedir("POST", `/api/quiz-attempts/${inicio.datos.id}/answer`, { questionId: id, response: bien ? claves[id] : "-1" }, token);
  const fin = await pedir("POST", `/api/quiz-attempts/${inicio.datos.id}/submit`, { answers: {}, presentedIds: ids }, token);
  return { id: inicio.datos.id as string, fin: fin.datos };
}

beforeEach(async () => {
  srv = {
    red: true, pedidos: [], intentos: new Map(), progreso: new Map(), web: [],
    cuentas: [{ id: "u-ana", username: "ana", password: "clave-de-la-web", roles: ["USER"], credencial: "c1" }],
  };
  tareas = [];
  ctx = crearContexto(almacenPrueba(), {
    iteraciones: 1000,
    config: { modoAutonomo: false, usuariosLocales: true, clavePublica: CLAVE_PUBLICA },
    remoto: { base: REMOTA, fetch: servidorFalso() as typeof fetch },
    segundoPlano: (t) => void tareas.push(t),
  });
  await prepararBases(ctx.almacen);
  await cargarManifiesto(ctx, manifiesto as never, { origen: "oficial", paquete: "matematica" });
  atender = crearServidorLocal(ctx);
});

const entrar = async (identifier = "ana", password = "clave-de-la-web") => {
  const r = await pedir("POST", "/api/auth/login", { identifier, password });
  await terminarTareas();
  return r;
};

describe("sincronización", () => {
  it("sube los intentos hechos sin red, el servidor los vuelve a corregir con el mismo sorteo y renueva el permiso", async () => {
    const token = (await entrar()).datos.accessToken;
    srv.red = false;
    const { id } = await rendir(token, "u-ana", "cont-mat--sumar", true);
    await terminarTareas();
    expect((await pedir("GET", "/api/offline/sincronizacion", undefined, token)).datos).toMatchObject({ intentosSinSubir: 1 });

    srv.red = true;
    const [antes] = await ctx.almacen.consulta<{ vence: string }>("progreso", "SELECT vence FROM perfiles WHERE id = 'u-ana'");
    const r = await pedir("POST", "/api/offline/sincronizar", {}, token);
    expect(r.datos).toMatchObject({ estado: "ok", subidos: 2, paraRevisar: 0, pendientes: 0 });
    expect(srv.intentos.get(id)).toMatchObject({ userId: "u-ana", score: 2, maxScore: 2, revisar: false, sorteo: "u-ana" });
    const subida = srv.pedidos.find((p) => p.ruta === "/api/offline/sync" && p.cuerpo.eventos.length)!.cuerpo;
    expect(subida.eventos.map((e: { tipo: string }) => e.tipo).sort()).toEqual(["intento", "progreso"]);

    const [despues] = await ctx.almacen.consulta<{ vence: string; sync_ultima: string }>("progreso", "SELECT vence, sync_ultima FROM perfiles WHERE id = 'u-ana'");
    expect(despues.sync_ultima).toBeTruthy();
    expect(despues.vence >= antes.vence).toBe(true);
    const estado = (await pedir("GET", "/api/offline/sincronizacion", undefined, token)).datos;
    expect(estado).toMatchObject({ pendientes: 0, intentosSinSubir: 0, paraRevisar: 0 });

    // Otra vez: no hay nada que subir.
    expect((await pedir("POST", "/api/offline/sincronizar", {}, token)).datos).toMatchObject({ subidos: 0 });
  });

  it("si la nota del servidor no coincide, se ve en el historial", async () => {
    const token = (await entrar()).datos.accessToken;
    srv.red = false;
    const { id } = await rendir(token, "u-ana", "cont-mat--sumar", true);
    srv.red = true;
    srv.notaFalsa = 1;
    expect((await pedir("POST", "/api/offline/sincronizar", {}, token)).datos).toMatchObject({ paraRevisar: 1 });
    const visto = await pedir("GET", `/api/quiz-attempts/${id}`, undefined, token);
    expect(visto.datos).toMatchObject({ sinConexion: true, sincronizado: true, paraRevisar: true, notaPlataforma: { score: 1, maxScore: 2 } });
  });

  it("baja el progreso y los intentos hechos en la web", async () => {
    srv.progreso.set("u-ana", [{ moduloId: "cont-mat--sumar", status: "completado", updatedAt: "2026-11-01T10:00:00.000Z" }]);
    srv.web.push({
      id: crypto.randomUUID(), quizId: "cont-mat--sumar.quiz", quizVersionId: "cont-mat--sumar.v1", moduleId: "cont-mat--sumar",
      status: "submitted", score: 2, maxScore: 2, startedAt: "2026-11-01T09:59:00.000Z", submittedAt: "2026-11-01T10:00:00.000Z",
      attemptNo: 1, seed: null, answers: "{}", feedback: "{}", grading: null,
    });
    const token = (await entrar()).datos.accessToken;
    // Completado en la web: el módulo siguiente se abre en el dispositivo.
    expect((await pedir("GET", "/api/modulos/cont-mat--restar", undefined, token)).datos.isLocked).toBe(false);
    const lista = await pedir("GET", "/api/quiz-attempts?moduleId=cont-mat--sumar", undefined, token);
    expect(lista.datos.items).toHaveLength(1);
    expect(lista.datos.items[0]).toMatchObject({ sinConexion: false, sincronizado: true, score: 2 });
    // La segunda vez pide desde la última.
    await pedir("POST", "/api/offline/sincronizar", {}, token);
    expect(srv.pedidos.filter((p) => p.ruta === "/api/offline/sync").at(-1)!.cuerpo.desde).toBe("2026-11-01T10:00:00.000Z");
  });

  it("el progreso se queda con el mayor avance", async () => {
    const token = (await entrar()).datos.accessToken;
    srv.red = false;
    await rendir(token, "u-ana", "cont-mat--sumar", true);
    srv.red = true;
    srv.notaFalsa = 0; // el servidor no lo acredita, pero lo completado en el dispositivo no vuelve atrás
    srv.progreso.set("u-ana", [{ moduloId: "cont-mat--sumar", status: "en_progreso", updatedAt: "2026-11-01T10:00:00.000Z" }]);
    await pedir("POST", "/api/offline/sincronizar", {}, token);
    const p = await pedir("GET", "/api/progreso?usuarioId=u-ana", undefined, token);
    expect(p.datos.items[0]).toMatchObject({ moduloId: "cont-mat--sumar", status: "completado" });
  });

  it("sin red los eventos quedan en la cola", async () => {
    const token = (await entrar()).datos.accessToken;
    srv.red = false;
    await rendir(token, "u-ana", "cont-mat--sumar", true);
    const r = await pedir("POST", "/api/offline/sincronizar", {}, token);
    expect(r.status).toBe(503);
    expect(r.datos).toMatchObject({ code: "SIN_CONEXION", pendientes: 2 });
  });

  it("si la contraseña cambió en la web, el perfil pide la nueva", async () => {
    const token = (await entrar()).datos.accessToken;
    srv.red = false;
    await rendir(token, "u-ana", "cont-mat--sumar", true);
    srv.red = true;
    Object.assign(srv.cuentas[0], { password: "clave-nueva", credencial: "c2" });
    expect((await pedir("POST", "/api/offline/sincronizar", {}, token)).datos.estado).toBe("contrasena");
    expect((await pedir("GET", "/api/auth/me", undefined, token)).status).toBe(401);

    srv.red = false;
    const vieja = await entrar("ana", "clave-de-la-web");
    expect(vieja.datos.code).toBe("CONTRASENA_CAMBIADA");
    srv.red = true;
    const nueva = await entrar("ana", "clave-nueva");
    expect(nueva.status).toBe(200);
    // Al entrar con la nueva se sincroniza lo que había quedado.
    expect(srv.intentos.size).toBe(1);
  });

  it("una cuenta suspendida sube sus intentos antes de quedar bloqueada", async () => {
    const token = (await entrar()).datos.accessToken;
    srv.red = false;
    await rendir(token, "u-ana", "cont-mat--sumar", true);
    srv.red = true;
    srv.cuentas[0].baneada = true;
    // Entra con la huella del dispositivo; la sincronización de fondo se entera de la suspensión.
    const r = await entrar();
    expect(srv.intentos.size).toBe(1);
    const [p] = await ctx.almacen.consulta<{ estado: string }>("progreso", "SELECT estado FROM perfiles WHERE id = 'u-ana'");
    expect(p.estado).toBe("bloqueado");
    expect((await pedir("GET", "/api/auth/me", undefined, r.datos.accessToken)).status).toBe(401);
    expect((await entrar()).datos.code).toBe("CUENTA_BLOQUEADA");
  });

  it("los usuarios locales no se sincronizan", async () => {
    const local = (await pedir("POST", "/api/auth/register", { username: "beto", password: "contraseña-larga" })).datos;
    expect((await pedir("POST", "/api/offline/sincronizar", {}, local.accessToken)).status).toBe(400);
  });
});

describe("vincular un usuario local", () => {
  it("su historial pasa a la cuenta y el servidor lo corrige con el sorteo que tuvo en el dispositivo", async () => {
    srv.red = false;
    const local = (await pedir("POST", "/api/auth/register", { username: "ana", password: "contraseña-larga" })).datos;
    const { id } = await rendir(local.accessToken, local.id, "cont-mat--sumar", true);
    await pedir("PUT", "/api/modulos-favoritos/cont-mat--sumar", undefined, local.accessToken);

    srv.red = true;
    const v = await pedir("POST", "/api/offline/vincular", { identifier: "ana", password: "clave-de-la-web" }, local.accessToken);
    expect(v.status).toBe(200);
    expect(v.datos).toMatchObject({ id: "u-ana", username: "ana" });
    await terminarTareas();

    expect(srv.intentos.get(id)).toMatchObject({ userId: "u-ana", score: 2, revisar: false, sorteo: local.id });
    const token = v.datos.accessToken;
    expect((await pedir("GET", "/api/modulos/cont-mat--restar", undefined, token)).datos.isLocked).toBe(false);
    expect((await pedir("GET", "/api/modulos-favoritos", undefined, token)).datos.ids).toEqual(["cont-mat--sumar"]);
    // La revisión del intento muestra las mismas preguntas que vio el usuario local.
    const visto = await pedir("GET", `/api/quiz-attempts/${id}`, undefined, token);
    expect(visto.datos).toMatchObject({ status: "submitted", score: 2 });
    const perfiles = (await pedir("GET", "/api/offline/perfiles")).datos.items;
    expect(perfiles.map((p: { id: string }) => p.id)).toEqual(["u-ana"]);
    expect((await pedir("GET", "/api/auth/me", undefined, local.accessToken)).status).toBe(401);
  });

  it("con la contraseña equivocada no cambia nada", async () => {
    const local = (await pedir("POST", "/api/auth/register", { username: "beto", password: "contraseña-larga" })).datos;
    const v = await pedir("POST", "/api/offline/vincular", { identifier: "ana", password: "otra" }, local.accessToken);
    expect(v.status).toBe(401);
    expect((await pedir("GET", "/api/auth/me", undefined, local.accessToken)).status).toBe(200);
  });
});
