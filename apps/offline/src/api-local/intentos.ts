/**
 * Intentos de cuestionario en el dispositivo, con el formato de `/api/quiz-attempts` del servidor. La corrección es la
 * misma del servidor (`api/src/lib/quiz-correccion.ts`): la nota se ve al instante y cuenta para el progreso local.
 * Al sincronizar, el servidor vuelve a corregir cada intento con su semilla, su versión y sus respuestas (fase 5).
 *
 * Regla anti trampa: no se empieza ni se muestra un intento de un módulo bloqueado.
 */
import { gradeFromConfig, type ScoringConfig } from "@vb/vblang";
import { mergeAttemptEvents, summarizeAttemptEvents } from "../../../../api/src/lib/attemptEvents";
import { computeGradeRange } from "../../../../api/src/lib/gradeRange";
import {
  buildFeedback,
  buildQuizFromCollection,
  contextoSorteoPreguntas,
  gradeAnswers,
  gradingQuestionsFromPayload,
  materializarPreguntasNativas,
  plantillaDeGradable,
  resolvePreguntasGrading,
  resolveScoringConfig,
  resolveStoredPresented,
  resolveVblangGrading,
  safeJsonParse,
  type AttemptGrading,
  type CodigoDePlantilla,
  type IntentoACorregir,
  type ModuleQuiz,
} from "../../../../api/src/lib/quiz-correccion";
import {
  aplicarPolitica,
  calcularDeadline,
  calcularNotas,
  debeAutoCerrarIntento,
  parseEvaluacionConfig,
  parseIntentoPolicy,
  validarLimiteIntentos,
  validarTiempoLimite,
} from "../../../../api/src/lib/quiz-intentos";
import { parseCuestionarioPreguntas, tienePreguntas } from "../../../../api/src/lib/quiz-preguntas";
import { isCanaryAnswer, sanitizeQuestionsForStudent } from "../../../../api/src/lib/sanitize-questions";
import {
  QuizAttemptAnswerSchema,
  QuizAttemptCreateSchema,
  QuizAttemptEventsPatchSchema,
  QuizAttemptSubmitSchema,
  type QuizAttemptSubmit,
} from "../../../../api/src/schema/quiz-attempt";
import { aleatorio } from "./claves";
import type { Contexto, Perfil } from "./contexto";
import { perfilDeSesion } from "./cuentas";
import { aplicaCandado, candadosDe } from "./desbloqueo";
import { error, json, leerJson } from "./http";
import { registrarProgreso } from "./progreso";

// El servidor usa el umbral de `QuizUmbral` (60 si no hay); los paquetes no lo traen.
const UMBRAL = 60;

type FilaIntento = {
  id: string; perfil_id: string; modulo_id: string | null; quiz_id: string; version_id: string; semilla: string | null;
  numero: number; estado: string; respuestas: string; feedback: string; grading: string | null; entrega: string | null;
  score: number; max_score: number; inicio: string; fin: string | null;
};
type FilaQuiz = { id: string; modulo_id: string; titulo: string; version_id: string; settings: string; questions: string; seed_policy: number | null };

type Cuestionario = { quiz: ModuleQuiz; fila: FilaQuiz; tipo: string; scoringConfig: ScoringConfig | undefined };

const tipoDe = (settings: string) => {
  const t = safeJsonParse<{ type?: unknown }>(settings, {}).type;
  return typeof t === "string" ? t : "practica";
};

async function cuestionario(ctx: Contexto, quizId: string): Promise<Cuestionario | null> {
  const [fila] = await ctx.almacen.consulta<FilaQuiz>(
    "contenido", "SELECT id, modulo_id, titulo, version_id, settings, questions, seed_policy FROM quizzes WHERE id = ?", [quizId],
  );
  if (!fila) return null;
  const quiz = buildQuizFromCollection(
    { id: fila.id, moduleId: fila.modulo_id, title: fila.titulo },
    {
      id: fila.version_id, quizId: fila.id, version: 1,
      questions: safeJsonParse<ModuleQuiz["questions"]>(fila.questions, []),
      seedPolicy: fila.seed_policy ?? undefined, settings: fila.settings,
    },
  );
  if (!quiz) return null;
  const [c] = await ctx.almacen.consulta<{ scoring_config: string | null }>(
    "contenido", "SELECT scoring_config FROM modulos_contenido WHERE id = ?", [fila.modulo_id],
  );
  const sc = safeJsonParse<ScoringConfig | null>(c?.scoring_config, null);
  return { quiz, fila, tipo: tipoDe(fila.settings), scoringConfig: sc && typeof sc === "object" ? sc : undefined };
}

const codigoDe = (ctx: Contexto): CodigoDePlantilla => async (id) =>
  (await ctx.almacen.consulta<{ codigo_dsl: string }>("contenido", "SELECT codigo_dsl FROM plantillas WHERE id = ?", [id]))[0]?.codigo_dsl;

const paraCorregir = (i: FilaIntento): IntentoACorregir => ({
  quizId: i.quiz_id, userId: i.perfil_id, seed: i.semilla, quizVersionId: i.version_id, attemptNo: i.numero,
});

async function intentoPropio(ctx: Contexto, p: Perfil, id: string) {
  const [i] = await ctx.almacen.consulta<FilaIntento>("progreso", "SELECT * FROM intentos WHERE id = ? AND perfil_id = ?", [id, p.id]);
  return i ?? null;
}

async function moduloBloqueado(ctx: Contexto, p: Perfil, moduloId: string) {
  if (!aplicaCandado(p)) return null;
  const candado = (await candadosDe(ctx, p.id)).de(moduloId);
  return candado.isLocked ? candado.missingDependencyIds : null;
}

/** Actuando como padre no se rinde (igual que el servidor). */
const comoPadre = (p: Perfil) => p.rol === "PARENT";

async function sesion(ctx: Contexto, req: Request) {
  const p = await perfilDeSesion(ctx, req);
  if (!p) return { r: error(401, "No autenticado") };
  if (comoPadre(p)) return { r: error(403, "role cannot modify quiz attempts") };
  return { p };
}

const nuevaSemilla = (quiz: ModuleQuiz) => {
  if (quiz.fixedSeed !== undefined) return String(quiz.fixedSeed);
  if (quiz.generatorId) return String(crypto.getRandomValues(new Uint32Array(1))[0] % 1_000_000);
  return null;
};

/** Intentos que cuentan (los abandonados no). */
async function previos(ctx: Contexto, perfilId: string, quizId: string) {
  return ctx.almacen.consulta<FilaIntento>(
    "progreso", "SELECT * FROM intentos WHERE perfil_id = ? AND quiz_id = ? AND estado != 'aborted' ORDER BY inicio", [perfilId, quizId],
  );
}

/** POST /api/quiz-attempts */
export async function crearIntento(ctx: Contexto, req: Request) {
  const { p, r } = await sesion(ctx, req);
  if (!p) return r;
  const cuerpo = QuizAttemptCreateSchema.safeParse(await leerJson(req));
  if (!cuerpo.success) return error(400, "invalid payload");
  const c = await cuestionario(ctx, cuerpo.data.quizId);
  if (!c) return error(404, "quiz not found");
  const moduloId = cuerpo.data.moduleId ?? c.fila.modulo_id;
  const faltan = await moduloBloqueado(ctx, p, moduloId);
  if (faltan) {
    return error(403, "Todavía no completaste los módulos previos requeridos.", { code: "module_locked", missingDependencyIds: faltan });
  }
  const politica = parseIntentoPolicy(c.fila.settings, c.tipo);
  const evaluacion = parseEvaluacionConfig(c.fila.settings, c.tipo);
  const anteriores = (await previos(ctx, p.id, c.quiz.id!)).length;
  const limite = validarLimiteIntentos(anteriores, politica.maxIntentos);
  if (!limite.allowed) {
    return error(403, limite.reason, { code: limite.code, maxIntentos: limite.maxIntentos, intentosPrevios: limite.intentosPrevios });
  }
  const maxScore = tienePreguntas(c.quiz.preguntas)
    ? parseCuestionarioPreguntas(c.quiz.preguntas).cantidadGlobal
    : (c.quiz.questions?.length ?? c.quiz.count ?? 0);
  const id = crypto.randomUUID();
  const inicio = ctx.ahora();
  await ctx.almacen.ejecutar(
    "progreso",
    `INSERT INTO intentos (id, perfil_id, modulo_id, quiz_id, version_id, semilla, numero, estado, max_score, inicio)
     VALUES (?, ?, ?, ?, ?, ?, ?, 'in_progress', ?, ?)`,
    [id, p.id, moduloId, c.quiz.id!, c.fila.version_id, nuevaSemilla(c.quiz), anteriores + 1, maxScore, inicio.toISOString()],
  );
  return json({
    id, attemptId: id,
    intentosPrevios: anteriores,
    maxIntentos: politica.maxIntentos,
    intentosRestantes: politica.maxIntentos === null ? null : Math.max(0, politica.maxIntentos - anteriores - 1),
    politicaNota: politica.politicaNota,
    timerSegundos: evaluacion.timerSegundos,
    deadline: calcularDeadline(inicio, evaluacion.timerSegundos),
  }, 201);
}

const resumen = (i: FilaIntento, titulos: Map<string, { quiz: string; modulo: string | null; moduloId: string | null }>) => ({
  id: i.id, quizId: i.quiz_id, quizVersionId: i.version_id, quizTitle: titulos.get(i.quiz_id)?.quiz,
  moduleId: i.modulo_id ?? titulos.get(i.quiz_id)?.moduloId ?? null, moduleTitle: titulos.get(i.quiz_id)?.modulo ?? undefined,
  userId: i.perfil_id, status: i.estado, startedAt: i.inicio, submittedAt: i.fin, score: i.score, maxScore: i.max_score,
  attemptNo: i.numero, seed: i.semilla, sinConexion: true,
});

/** GET /api/quiz-attempts?moduleId=...|quizId=... — los intentos propios. */
export async function listarIntentos(ctx: Contexto, req: Request) {
  const p = await perfilDeSesion(ctx, req);
  if (!p) return error(401, "No autenticado");
  const url = new URL(req.url);
  const quizId = url.searchParams.get("quizId");
  const moduloId = url.searchParams.get("moduleId");
  let quizIds: string[];
  if (quizId) quizIds = [quizId];
  else if (moduloId) {
    quizIds = (await ctx.almacen.consulta<{ id: string }>("contenido", "SELECT id FROM quizzes WHERE modulo_id = ?", [moduloId])).map((q) => q.id);
  } else return json({ items: [], total: 0 });
  if (!quizIds.length) return json({ items: [], total: 0 });
  const limite = Math.min(Math.max(Number(url.searchParams.get("limit") ?? 50) || 50, 1), 200);
  const desde = Math.max(Number(url.searchParams.get("offset") ?? 0) || 0, 0);
  const marcas = quizIds.map(() => "?").join(",");
  const filas = await ctx.almacen.consulta<FilaIntento>(
    "progreso", `SELECT * FROM intentos WHERE perfil_id = ? AND quiz_id IN (${marcas}) ORDER BY inicio DESC LIMIT ? OFFSET ?`,
    [p.id, ...quizIds, limite, desde],
  );
  const [{ n }] = await ctx.almacen.consulta<{ n: number }>(
    "progreso", `SELECT COUNT(*) AS n FROM intentos WHERE perfil_id = ? AND quiz_id IN (${marcas})`, [p.id, ...quizIds],
  );
  const titulos = new Map(
    (await ctx.almacen.consulta<{ id: string; titulo: string; modulo_id: string; modulo: string | null }>(
      "contenido",
      `SELECT q.id, q.titulo, q.modulo_id, m.titulo AS modulo FROM quizzes q LEFT JOIN modulos m ON m.id = q.modulo_id WHERE q.id IN (${marcas})`,
      quizIds,
    )).map((q) => [q.id, { quiz: q.titulo, modulo: q.modulo, moduloId: q.modulo_id }]),
  );
  return json({ items: filas.map((i) => resumen(i, titulos)), total: n });
}

/** GET /api/quiz-attempts/summary?quizId=... */
export async function resumenDeIntentos(ctx: Contexto, req: Request) {
  const p = await perfilDeSesion(ctx, req);
  if (!p) return error(401, "No autenticado");
  const quizId = new URL(req.url).searchParams.get("quizId");
  if (!quizId) return error(400, "quizId is required");
  const c = await cuestionario(ctx, quizId);
  const politica = parseIntentoPolicy(c?.fila.settings ?? null, c?.tipo ?? "practica");
  const hechos = await previos(ctx, p.id, quizId);
  const paraPolitica = hechos.map((i) => ({ status: i.estado, score: i.score, maxScore: i.max_score, submittedAt: i.fin }));
  const notas = calcularNotas(paraPolitica);
  return json({
    quizId, userId: p.id,
    maxIntentos: politica.maxIntentos,
    intentosPrevios: hechos.length,
    intentosRestantes: politica.maxIntentos === null ? null : Math.max(0, politica.maxIntentos - hechos.length),
    politicaNota: politica.politicaNota,
    notaActual: aplicarPolitica(paraPolitica, politica.politicaNota),
    mejorNota: notas.mejor, ultimaNota: notas.ultima, primeraNota: notas.primera, promedioNota: notas.promedio,
    historial: [...hechos].reverse().slice(0, 20).map((i) => ({
      id: i.id, status: i.estado, startedAt: i.inicio, submittedAt: i.fin, score: i.score, maxScore: i.max_score, attemptNo: i.numero,
    })),
  });
}

/** Si el intento venció (cuestionario con tiempo), se entrega solo con lo que ya estaba respondido. */
async function cerrarSiVencio(ctx: Contexto, i: FilaIntento, c: Cuestionario) {
  if (i.estado !== "in_progress") return i;
  const ev = parseEvaluacionConfig(c.fila.settings, c.tipo);
  if (!debeAutoCerrarIntento(i.inicio, ev.timerSegundos, ev.politicaExpiracion, ctx.ahora())) return i;
  const cerrado = await corregir(ctx, i, c, { answers: {} }, { auto: true });
  if (!cerrado) return i;
  const [nuevo] = await ctx.almacen.consulta<FilaIntento>("progreso", "SELECT * FROM intentos WHERE id = ?", [i.id]);
  return nuevo ?? i;
}

/** GET /api/quiz-attempts/:id */
export async function verIntento(ctx: Contexto, req: Request, id: string) {
  const { p, r } = await sesion(ctx, req);
  if (!p) return r;
  const guardado = await intentoPropio(ctx, p, id);
  if (!guardado) return error(404, "attempt not found");
  const c = await cuestionario(ctx, guardado.quiz_id);
  if (!c) return error(409, "la versión del quiz de este intento ya no está disponible");
  if (guardado.modulo_id && (await moduloBloqueado(ctx, p, guardado.modulo_id))) {
    return error(403, "Todavía no completaste los módulos previos requeridos.", { code: "module_locked" });
  }
  const i = await cerrarSiVencio(ctx, guardado, c);
  const ev = parseEvaluacionConfig(c.fila.settings, c.tipo);
  const nativas = tienePreguntas(c.quiz.preguntas)
    ? await materializarPreguntasNativas(
        parseCuestionarioPreguntas(c.quiz.preguntas),
        contextoSorteoPreguntas(c.quiz, i.quiz_id, i.perfil_id, i.numero),
        codigoDe(ctx),
      )
    : null;
  const preguntas = sanitizeQuestionsForStudent(nativas ?? c.quiz.questions ?? [], i.version_id ?? i.quiz_id, {
    revealSolution: i.estado !== "in_progress",
  });
  const nota: Record<string, unknown> = {};
  if ((i.estado === "submitted" || i.estado === "graded") && i.max_score > 0) {
    const n = gradeFromConfig(i.score / i.max_score, resolveScoringConfig(c.scoringConfig, UMBRAL));
    nota.notaDisplay = n.display;
    nota.notaCanonical10 = n.canonical10;
    nota.aprobado = n.passing === true;
    nota.porcentaje = Math.round((i.score / i.max_score) * 100);
  }
  return json({
    id: i.id, attemptId: i.id, moduleId: i.modulo_id ?? undefined, quizId: i.quiz_id, quizTitle: c.quiz.title ?? "Quiz",
    status: i.estado, score: i.score, maxScore: i.max_score, ...nota,
    timerSegundos: ev.timerSegundos, deadline: calcularDeadline(i.inicio, ev.timerSegundos),
    questions: preguntas,
    answers: safeJsonParse(i.respuestas, {}), feedback: safeJsonParse(i.feedback, {}),
    grading: i.grading ? safeJsonParse(i.grading, { autoScore: 0, items: {} }) : undefined,
    quiz: { title: c.quiz.title, questions: preguntas },
    generatorId: c.quiz.generatorId, seed: i.semilla ?? undefined, count: c.quiz.count,
    instructions: c.quiz.instructions, displayCount: c.quiz.displayCount, composition: c.quiz.composition, quizType: c.quiz.type,
  });
}

const cerradoYa = (i: FilaIntento) => i.fin !== null || i.estado !== "in_progress";

/** POST /api/quiz-attempts/:id/answer — guarda una respuesta (la web lo hace en cada pregunta). */
export async function responder(ctx: Contexto, req: Request, id: string) {
  const { p, r } = await sesion(ctx, req);
  if (!p) return r;
  const cuerpo = QuizAttemptAnswerSchema.safeParse(await leerJson(req));
  if (!cuerpo.success) return error(400, "invalid payload");
  const i = await intentoPropio(ctx, p, id);
  if (!i) return error(404, "attempt not found");
  if (cerradoYa(i)) return error(409, "attempt already submitted");
  const c = await cuestionario(ctx, i.quiz_id);
  if (c && cerradoYa(await cerrarSiVencio(ctx, i, c))) return error(409, "attempt already submitted");
  const respuestas = safeJsonParse<Record<string, string | string[]>>(i.respuestas, {});
  respuestas[cuerpo.data.questionId] = cuerpo.data.response;
  await ctx.almacen.ejecutar("progreso", "UPDATE intentos SET respuestas = ? WHERE id = ?", [JSON.stringify(respuestas), id]);
  return json({ ok: true, questionId: cuerpo.data.questionId, answeredCount: Object.keys(respuestas).length });
}

/** PATCH /api/quiz-attempts/:id — eventos informativos (salidas de la pantalla); no cambian la nota. */
export async function eventosDeIntento(ctx: Contexto, req: Request, id: string) {
  const p = await perfilDeSesion(ctx, req);
  if (!p) return error(401, "No autenticado");
  const cuerpo = QuizAttemptEventsPatchSchema.safeParse(await leerJson(req));
  if (!cuerpo.success) return error(400, "invalid payload");
  const i = await intentoPropio(ctx, p, id);
  if (!i) return error(404, "attempt not found");
  if (cerradoYa(i)) return error(409, "attempt already closed");
  const grading = mergeAttemptEvents(safeJsonParse<Record<string, unknown>>(i.grading, {}), cuerpo.data);
  await ctx.almacen.ejecutar("progreso", "UPDATE intentos SET grading = ? WHERE id = ?", [JSON.stringify(grading), id]);
  return json({ ok: true, events: summarizeAttemptEvents(grading) });
}

/**
 * Corrige y cierra un intento, como `materializeSubmit` del servidor. Devuelve null si no se puede cerrar solo
 * (cierre automático de un cuestionario con generadores que viven en la web).
 */
async function corregir(ctx: Contexto, i: FilaIntento, c: Cuestionario, entrega: QuizAttemptSubmit, opciones: { auto?: boolean } = {}) {
  const { quiz } = c;
  const intento = paraCorregir(i);
  const generador = typeof quiz.generatorId === "string" ? quiz.generatorId : null;
  const conPreguntas = (quiz.questions?.length ?? 0) > 0;
  let resolucion: { gradingQuestions: ModuleQuiz["questions"]; serverAuthoritative: boolean; mismatchQuestions: string[] };
  if (tienePreguntas(quiz.preguntas)) {
    resolucion = await resolvePreguntasGrading(quiz, intento, entrega, codigoDe(ctx));
  } else if (!conPreguntas && generador?.startsWith("plantilla:")) {
    resolucion = await resolveVblangGrading(quiz, intento, entrega, generador, codigoDe(ctx));
  } else if (!conPreguntas && generador) {
    if (opciones.auto) return null;
    resolucion = { gradingQuestions: gradingQuestionsFromPayload(quiz, entrega), serverAuthoritative: false, mismatchQuestions: [] };
  } else {
    resolucion = { gradingQuestions: resolveStoredPresented(quiz, intento, entrega), serverAuthoritative: true, mismatchQuestions: [] };
  }
  const respuestas = { ...safeJsonParse<Record<string, string | string[]>>(i.respuestas, {}), ...entrega.answers };
  const aCorregir: ModuleQuiz = { ...quiz, questions: resolucion.gradingQuestions };
  const { score, maxScore, manual } = gradeAnswers(aCorregir, respuestas);
  const feedback = buildFeedback(aCorregir, respuestas);

  const previo = safeJsonParse<Record<string, unknown>>(i.grading, {});
  const grading: AttemptGrading & Record<string, unknown> = { autoScore: score, items: {}, serverAuthoritative: resolucion.serverAuthoritative };
  const canarios = Object.entries(respuestas)
    .filter(([, v]) => (Array.isArray(v) ? v.some(isCanaryAnswer) : isCanaryAnswer(v)))
    .map(([k]) => k);
  if (canarios.length) Object.assign(grading, { canaryTriggered: true, canaryQuestions: canarios });
  if (resolucion.mismatchQuestions.length) Object.assign(grading, { materializationMismatch: true, mismatchQuestions: resolucion.mismatchQuestions });
  const ev = parseEvaluacionConfig(c.fila.settings, c.tipo);
  const tiempo = validarTiempoLimite(i.inicio, ev.timerSegundos, ctx.ahora());
  if (tiempo.exceeded) Object.assign(grading, { tiempoExcedido: true, tiempoElapsedSec: tiempo.elapsedSec, tiempoLimiteSec: tiempo.limitSec });
  const repaso: Record<string, { prompt: string; plantillaId: string }> = {};
  for (const q of resolucion.gradingQuestions ?? []) {
    const pid = plantillaDeGradable.get(q as object);
    if (pid) repaso[q.id] = { prompt: String(q.prompt ?? "").slice(0, 400), plantillaId: pid };
  }
  if (Object.keys(repaso).length) grading.repaso = repaso;
  for (const { question, weight } of manual) {
    grading.items[question.id] = { prompt: question.prompt, points: weight, response: respuestas[question.id], score: null };
  }
  if (previo.events && typeof previo.events === "object") grading.events = previo.events;
  const pendientes = manual.length > 0;
  const estado = pendientes ? "pending_review" : "submitted";
  const fin = ctx.ahora().toISOString();
  const { cambios } = await ctx.almacen.ejecutar(
    "progreso",
    `UPDATE intentos SET respuestas = ?, feedback = ?, grading = ?, entrega = ?, estado = ?, score = ?, max_score = ?, fin = ?
     WHERE id = ? AND fin IS NULL`,
    [JSON.stringify(respuestas), JSON.stringify(feedback), JSON.stringify(grading),
      JSON.stringify({ presentedIds: entrega.presentedIds, generatedQuestions: entrega.generatedQuestions, auto: opciones.auto === true }),
      estado, score, maxScore, fin, i.id],
  );
  if (cambios !== 1) return { yaEntregado: true as const };
  await ctx.almacen.ejecutar(
    "progreso", "INSERT INTO eventos (id, perfil_id, tipo, datos, creado) VALUES (?, ?, 'intento', ?, ?)",
    [aleatorio(16), i.perfil_id, JSON.stringify({ intentoId: i.id }), fin],
  );

  const escala = resolveScoringConfig(c.scoringConfig, UMBRAL);
  const nota = gradeFromConfig(maxScore > 0 ? score / maxScore : null, escala);
  const porcentaje = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;
  const aprobado = nota.passing === true;
  if (pendientes) {
    const rango = computeGradeRange(score, maxScore, manual.map((m) => m.weight), escala);
    return {
      status: estado, score, maxScore, pendingManual: manual.length,
      notaMinDisplay: rango.minDisplay, notaMinCanonical10: rango.minCanonical10,
      notaMaxDisplay: rango.maxDisplay, notaMaxCanonical10: rango.maxCanonical10,
      message: `Respuestas enviadas. ${manual.length} pregunta(s) abierta(s) quedan pendientes de corrección por el profesor.`,
    };
  }
  const moduloId = i.modulo_id ?? c.fila.modulo_id;
  if (quiz.type === "formal" && moduloId) await registrarProgreso(ctx, i.perfil_id, moduloId, aprobado ? "completado" : "en_progreso");
  const ocultarPuntos = safeJsonParse<{ ocultarPuntos?: unknown }>(c.fila.settings, {}).ocultarPuntos === true;
  const message = nota.passing === null
    ? "Respuestas enviadas. Este quiz no tiene ítems puntuables, no hay nota."
    : ocultarPuntos
      ? aprobado ? `¡Aprobado! Nota: ${nota.display}.` : `Nota: ${nota.display} — no alcanza para aprobar.`
      : aprobado ? `¡Aprobado! Nota: ${nota.display} (${porcentaje}%).` : `Nota: ${nota.display} (${porcentaje}%) — no alcanza para aprobar.`;
  return {
    status: "submitted", score, maxScore, porcentaje, aprobado, umbral: UMBRAL,
    notaDisplay: nota.display, notaCanonical10: nota.canonical10, ocultarPuntos, message,
  };
}

const yaEnviado = (i: FilaIntento) => ({
  status: i.estado, score: i.score, maxScore: i.max_score, alreadySubmitted: true, message: "Este intento ya fue enviado.",
});

/** POST /api/quiz-attempts/:id/submit */
export async function entregar(ctx: Contexto, req: Request, id: string) {
  const { p, r } = await sesion(ctx, req);
  if (!p) return r;
  const cuerpo = QuizAttemptSubmitSchema.safeParse(await leerJson(req));
  if (!cuerpo.success) return error(400, "invalid payload");
  const i = await intentoPropio(ctx, p, id);
  if (!i) return error(404, "attempt not found");
  if (i.estado !== "in_progress") return json(yaEnviado(i));
  const c = await cuestionario(ctx, i.quiz_id);
  if (!c) return error(409, "la versión del quiz de este intento ya no está disponible");
  const resultado = await corregir(ctx, i, c, cuerpo.data);
  if (!resultado) return error(409, "no se pudo corregir el intento");
  if ("yaEntregado" in resultado) {
    const [ahora] = await ctx.almacen.consulta<FilaIntento>("progreso", "SELECT * FROM intentos WHERE id = ?", [id]);
    return json(yaEnviado(ahora ?? i));
  }
  return json(resultado);
}
