import { Router } from "express";
import { prisma } from "../lib/prisma";
import { requireUser } from "../lib/user-auth";

/**
 * Repaso de un intento: explica en qué falló el alumno y qué temas tendría que repasar.
 *
 * Agrupa las preguntas del intento por TEMA (el módulo de donde sale cada plantilla) y, en los exámenes de idiomas, por
 * SECCIÓN (gramática, lectura, audición…). Solo lo ve el dueño del intento, una vez enviado. Se apoya en `grading.repaso`
 * (lo guarda el submit) y en `feedback` (correcta o no, y la explicación de cada pregunta).
 */
export const quizRepaso = Router();

/** Un grupo con menos de este porcentaje de aciertos se recomienda repasar. */
export const UMBRAL_REPASO = 80;
const MAX_RECOMENDADOS = 6;

type RepasoItem = { prompt: string; plantillaId: string };
type FeedbackItem = { correct?: boolean; pending?: boolean; explanation?: string };
type Grupo = { tipo: "tema" | "seccion"; id: string; titulo: string; moduloId: string | null; correctas: number; total: number; porcentaje: number };

const parse = <T,>(raw: string | null | undefined, fallback: T): T => {
  if (!raw) return fallback;
  try { return JSON.parse(raw) as T; } catch { return fallback; }
};
/** `cont-<materia>--<ruta>.p3` → `cont-<materia>--<ruta>` (el módulo dueño de la plantilla). */
export const moduloDePlantilla = (plantillaId: string): string | null => plantillaId.match(/^(cont-.+)\.p\d+$/)?.[1] ?? null;

quizRepaso.get("/api/quiz-attempts/:id/repaso", requireUser, async (req, res) => {
  const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
  const userId = typeof req.user?._id?.toString === "function" ? req.user._id.toString() : typeof req.user?.id === "string" ? req.user.id : "";
  if (!id || !userId) return res.status(401).json({ error: "user not found" });
  const attempt = await prisma.quizAttempt.findFirst({ where: { id, userId } });
  if (!attempt) return res.status(404).json({ error: "attempt not found" });
  if (attempt.status === "in_progress") return res.status(409).json({ error: "El intento todavía no se envió." });

  const feedback = parse<Record<string, FeedbackItem>>(attempt.feedback, {});
  const repaso = parse<{ repaso?: Record<string, RepasoItem> }>(attempt.grading, {}).repaso ?? {};
  const quiz = await prisma.quiz.findFirst({ where: { id: attempt.quizId }, select: { moduleId: true, title: true } });
  const moduloDelQuiz = quiz?.moduleId ?? null;
  const porcentaje = attempt.maxScore && attempt.maxScore > 0 ? Math.round(((attempt.score ?? 0) / attempt.maxScore) * 100) : null;
  const umbral = (await prisma.quizUmbral.findUnique({ where: { quizId: attempt.quizId }, select: { umbral: true } }))?.umbral ?? 60;

  // Plantillas del intento → etiquetas (para distinguir secciones de un examen de idiomas).
  const plantillaIds = [...new Set(Object.values(repaso).map((r) => r.plantillaId))];
  const plantillas = plantillaIds.length
    ? await prisma.plantillaEjercicio.findMany({ where: { id: { in: plantillaIds } }, select: { id: true, tags: true } })
    : [];
  const tagsDe = new Map(plantillas.map((p) => [p.id, parse<string[]>(p.tags, [])]));
  const claveDe = (plantillaId: string): { tipo: "tema" | "seccion"; id: string; moduloId: string | null } => {
    const modulo = moduloDePlantilla(plantillaId) ?? moduloDelQuiz;
    const tags = tagsDe.get(plantillaId) ?? [];
    if (modulo && modulo === moduloDelQuiz && tags.includes("examen-jefe")) {
      const seccion = tags.find((t) => t !== "examen-jefe");
      if (seccion) return { tipo: "seccion", id: seccion, moduloId: null };
    }
    return { tipo: "tema", id: modulo ?? "sin-tema", moduloId: modulo };
  };
  const moduloIds = [...new Set(Object.values(repaso).map((r) => claveDe(r.plantillaId)).filter((c) => c.moduloId).map((c) => c.moduloId as string))];
  const modulos = moduloIds.length ? await prisma.modulo.findMany({ where: { id: { in: moduloIds } }, select: { id: true, titulo: true } }) : [];
  const tituloDe = new Map(modulos.map((m) => [m.id, m.titulo]));

  const grupos = new Map<string, Grupo>();
  const preguntas: { id: string; prompt: string; correcta: boolean; pendiente: boolean; explicacion: string | null; grupo: string }[] = [];
  for (const [qid, r] of Object.entries(repaso)) {
    const fb = feedback[qid];
    if (!fb) continue;
    const clave = claveDe(r.plantillaId);
    const gid = `${clave.tipo}:${clave.id}`;
    const g = grupos.get(gid) ?? { tipo: clave.tipo, id: clave.id, titulo: clave.tipo === "seccion" ? clave.id : (clave.moduloId && tituloDe.get(clave.moduloId)) || "Otros temas", moduloId: clave.moduloId, correctas: 0, total: 0, porcentaje: 0 };
    if (!fb.pending) { g.total += 1; if (fb.correct) g.correctas += 1; }
    grupos.set(gid, g);
    preguntas.push({ id: qid, prompt: r.prompt, correcta: !!fb.correct, pendiente: !!fb.pending, explicacion: fb.explanation ?? null, grupo: gid });
  }
  const porGrupo = [...grupos.values()].filter((g) => g.total > 0).map((g) => ({ ...g, porcentaje: Math.round((100 * g.correctas) / g.total) }))
    .sort((a, b) => a.porcentaje - b.porcentaje || b.total - a.total);
  const recomendados = porGrupo.filter((g) => g.porcentaje < UMBRAL_REPASO && g.tipo === "tema" && g.moduloId).slice(0, MAX_RECOMENDADOS);

  return res.json({
    attemptId: attempt.id, quizId: attempt.quizId, titulo: quiz?.title ?? null, moduloId: moduloDelQuiz,
    score: attempt.score, maxScore: attempt.maxScore, porcentaje, umbral, aprobado: porcentaje !== null ? porcentaje >= umbral : null,
    disponible: preguntas.length > 0,
    porGrupo, recomendados,
    // Primero las falladas: es lo que hay que mirar.
    preguntas: preguntas.sort((a, b) => Number(a.correcta) - Number(b.correcta)),
  });
});
