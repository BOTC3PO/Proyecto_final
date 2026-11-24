import { beforeEach, describe, expect, it } from "vitest";
import { contextoSorteoPreguntas, materializarPreguntasNativas, buildQuizFromCollection } from "../../../../../api/src/lib/quiz-correccion";
import { parseCuestionarioPreguntas } from "../../../../../api/src/lib/quiz-preguntas";
import { crearContexto, type Contexto } from "../contexto";
import { prepararBases } from "../esquema";
import { crearServidorLocal } from "../servidor";
import { cargarManifiesto } from "../temario";
import { almacenPrueba } from "./almacen-prueba";

const BASE = "https://api.virtualbook.local";
const pregunta = (a: number, b: number) =>
  `enunciado: "¿Cuánto es ${a} + ${b}?"\ntipo: mc\nopciones_explicitas:\n  - "${a + b}"\n  - "${a + b + 1}"\nrespuesta: "${a + b}"\n`;
const manifiesto = {
  temas: [
    { id: "cont-mat--sumar", materia: "matematica", ruta: "sumar", titulo: "Sumar", teoria: "Teoría de sumar", nivel: "1", dependencias: [],
      preguntas: [{ titulo: "p1", dsl: pregunta(2, 3) }, { titulo: "p2", dsl: pregunta(4, 5) }] },
    { id: "cont-mat--restar", materia: "matematica", ruta: "restar", titulo: "Restar", teoria: "Teoría de restar", nivel: "1",
      dependencias: ["cont-mat--sumar"], preguntas: [{ titulo: "p1", dsl: pregunta(7, 1) }] },
  ],
};

let ctx: Contexto;
let atender: (r: Request) => Promise<Response>;
let token: string;
let perfilId: string;

const pedir = async (metodo: string, ruta: string, cuerpo?: unknown, t = token) => {
  const r = await atender(new Request(`${BASE}${ruta}`, {
    method: metodo,
    headers: { "Content-Type": "application/json", ...(t ? { Authorization: `Bearer ${t}` } : {}) },
    body: cuerpo === undefined ? undefined : JSON.stringify(cuerpo),
  }));
  return { status: r.status, datos: await r.json() };
};

/** Las respuestas correctas de un intento, materializadas igual que en la API (las pruebas sí pueden mirarlas). */
async function correctas(intento: { quizId: string; numero: number }) {
  const [q] = await ctx.almacen.consulta<{ id: string; modulo_id: string; titulo: string; version_id: string; settings: string }>(
    "contenido", "SELECT * FROM quizzes WHERE id = ?", [intento.quizId],
  );
  const quiz = buildQuizFromCollection({ id: q.id, moduleId: q.modulo_id, title: q.titulo }, { id: q.version_id, quizId: q.id, settings: q.settings })!;
  const codigo = async (id: string) =>
    (await ctx.almacen.consulta<{ codigo_dsl: string }>("contenido", "SELECT codigo_dsl FROM plantillas WHERE id = ?", [id]))[0]?.codigo_dsl;
  const preguntas = await materializarPreguntasNativas(
    parseCuestionarioPreguntas(quiz.preguntas), contextoSorteoPreguntas(quiz, q.id, perfilId, intento.numero), codigo,
  );
  return Object.fromEntries(preguntas!.map((p) => [p.id, String(p.answerKey)]));
}

async function rendir(moduloId: string, bien: boolean) {
  const inicio = await pedir("POST", "/api/quiz-attempts", { moduleId: moduloId, quizId: `${moduloId}.quiz` });
  expect(inicio.status).toBe(201);
  const visto = await pedir("GET", `/api/quiz-attempts/${inicio.datos.id}`);
  const claves = await correctas({ quizId: `${moduloId}.quiz`, numero: inicio.datos.intentosPrevios + 1 });
  const ids = visto.datos.questions.map((q: { id: string }) => q.id);
  for (const id of ids) {
    await pedir("POST", `/api/quiz-attempts/${inicio.datos.id}/answer`, { questionId: id, response: bien ? claves[id] : "-1" });
  }
  const fin = await pedir("POST", `/api/quiz-attempts/${inicio.datos.id}/submit`, { answers: {}, presentedIds: ids });
  return { id: inicio.datos.id as string, visto: visto.datos, fin: fin.datos, claves };
}

beforeEach(async () => {
  ctx = crearContexto(almacenPrueba(), { iteraciones: 1000 });
  await prepararBases(ctx.almacen);
  await cargarManifiesto(ctx, manifiesto as never, { origen: "oficial", paquete: "matematica" });
  atender = crearServidorLocal(ctx);
  const alta = (await pedir("POST", "/api/auth/register", { username: "ana", password: "contraseña-larga", fullName: "Ana" }, "")).datos;
  token = alta.accessToken;
  perfilId = alta.id;
});

describe("intentos sin conexión", () => {
  it("muestra las preguntas sin las respuestas, corrige al instante y desbloquea el módulo siguiente", async () => {
    expect((await pedir("GET", "/api/modulos/cont-mat--restar")).datos.isLocked).toBe(true);
    const { visto, fin, claves } = await rendir("cont-mat--sumar", true);
    expect(visto.status).toBe("in_progress");
    expect(visto.questions).toHaveLength(2);
    for (const q of visto.questions) expect(String(q.answerKey ?? "")).not.toBe(claves[q.id]);
    expect(fin).toMatchObject({ status: "submitted", score: 2, maxScore: 2, aprobado: true, porcentaje: 100 });
    expect((await pedir("GET", "/api/modulos/cont-mat--restar")).datos.isLocked).toBe(false);
    const eventos = await ctx.almacen.consulta<{ tipo: string }>("progreso", "SELECT tipo FROM eventos ORDER BY creado");
    expect(eventos.map((e) => e.tipo).sort()).toEqual(["intento", "progreso"]);
  });

  it("no deja empezar un módulo bloqueado ni ver su plantilla", async () => {
    const r = await pedir("POST", "/api/quiz-attempts", { moduleId: "cont-mat--restar", quizId: "cont-mat--restar.quiz" });
    expect(r.status).toBe(403);
    expect(r.datos.code).toBe("module_locked");
    expect((await pedir("GET", "/api/plantillas/cont-mat--restar.p1")).status).toBe(403);
    expect((await pedir("GET", "/api/plantillas/cont-mat--sumar.p1")).datos.codigoDsl).toContain("¿Cuánto es 2 + 3?");
  });

  it("desaprobar deja el módulo en progreso, y uno completado no vuelve atrás", async () => {
    const mal = await rendir("cont-mat--sumar", false);
    expect(mal.fin).toMatchObject({ score: 0, aprobado: false });
    let p = await pedir("GET", `/api/progreso?usuarioId=${perfilId}`);
    expect(p.datos.items[0]).toMatchObject({ moduloId: "cont-mat--sumar", status: "en_progreso" });
    await rendir("cont-mat--sumar", true);
    await rendir("cont-mat--sumar", false);
    p = await pedir("GET", `/api/progreso?usuarioId=${perfilId}`);
    expect(p.datos.items[0].status).toBe("completado");
    const est = await pedir("GET", "/api/progreso/estudiante");
    expect(est.datos.avances).toEqual([{ id: `${perfilId}:cont-mat--sumar`, modulo: "Sumar", progreso: "100%" }]);
    expect((await pedir("GET", "/api/perfil")).datos.modulosCompletados.total).toBe(1);
  });

  it("entregar dos veces no vuelve a corregir, y el historial queda en el dispositivo", async () => {
    const { id } = await rendir("cont-mat--sumar", true);
    const otra = await pedir("POST", `/api/quiz-attempts/${id}/submit`, { answers: {} });
    expect(otra.datos).toMatchObject({ alreadySubmitted: true, score: 2 });
    expect((await pedir("POST", `/api/quiz-attempts/${id}/answer`, { questionId: "x", response: "1" })).status).toBe(409);
    const lista = await pedir("GET", "/api/quiz-attempts?moduleId=cont-mat--sumar");
    expect(lista.datos.items).toHaveLength(1);
    expect(lista.datos.items[0]).toMatchObject({ status: "submitted", moduleTitle: "Sumar", sinConexion: true });
    const revision = await pedir("GET", `/api/quiz-attempts/${id}`);
    expect(revision.datos).toMatchObject({ status: "submitted", notaDisplay: "100", aprobado: true });
    const resumen = await pedir("GET", "/api/quiz-attempts/summary?quizId=cont-mat--sumar.quiz");
    expect(resumen.datos).toMatchObject({ intentosPrevios: 1, politicaNota: "ultima" });
  });

  it("guarda lo que el servidor necesita para volver a corregir", async () => {
    const { id } = await rendir("cont-mat--sumar", true);
    const [i] = await ctx.almacen.consulta<{ semilla: string | null; version_id: string; respuestas: string; entrega: string; numero: number }>(
      "progreso", "SELECT * FROM intentos WHERE id = ?", [id],
    );
    expect(i.version_id).toBe("cont-mat--sumar.v1");
    expect(i.numero).toBe(1);
    expect(Object.keys(JSON.parse(i.respuestas))).toHaveLength(2);
    expect(JSON.parse(i.entrega).presentedIds).toHaveLength(2);
  });

  it("los intentos son de cada perfil", async () => {
    const { id } = await rendir("cont-mat--sumar", true);
    const otro = (await pedir("POST", "/api/auth/register", { username: "beto", password: "contraseña-larga" }, "")).datos.accessToken;
    expect((await pedir("GET", `/api/quiz-attempts/${id}`, undefined, otro)).status).toBe(404);
    expect((await pedir("GET", `/api/progreso?usuarioId=${perfilId}`, undefined, otro)).status).toBe(403);
    expect((await pedir("GET", "/api/modulos/cont-mat--restar", undefined, otro)).datos.isLocked).toBe(true);
  });

  it("favoritos por perfil", async () => {
    await pedir("PUT", "/api/modulos-favoritos/cont-mat--sumar");
    expect((await pedir("GET", "/api/modulos-favoritos")).datos.ids).toEqual(["cont-mat--sumar"]);
    await pedir("DELETE", "/api/modulos-favoritos/cont-mat--sumar");
    expect((await pedir("GET", "/api/modulos-favoritos")).datos.ids).toEqual([]);
  });
});
