import { Router } from "express";
import { prisma } from "../lib/prisma";
import { requireUser } from "../lib/user-auth";
import { bloquearClave } from "../lib/economia-saldo";
import { bonusPorTickets } from "../lib/examen-tickets";
import {
  billeterasDelModulo,
  parseJson as parse,
  resumenDe,
  type BilleteraJson,
  type ExamenJson,
} from "../lib/tickets-billetera";

/**
 * Canje de tickets de examen.
 *
 * Los tickets se compran en la subasta (ver `economia.ts`, cierre del examen). Una vez que el
 * alumno entregó el examen (un módulo de tipo examen enlazado a la subasta por `moduloId`),
 * puede canjearlos por puntos de nota, con un máximo por alumno y examen. Cada ticket suma el
 * 10% del puntaje máximo del examen (1 punto en una escala de 1 a 10), sin pasar del máximo.
 */
export const examenTickets = Router();

class CanjeError extends Error {
  constructor(public readonly status: number, public readonly codigo: string, public readonly extra: Record<string, unknown> = {}) {
    super(codigo);
  }
}

type BonusExamen = { examenId: string; tickets: number; baseScore: number };

const userIdOf = (req: { user?: { id?: string; _id?: { toString?: () => string } } }) =>
  req.user?._id?.toString?.() ?? req.user?.id ?? "";

// GET /api/economia/examenes/:id/tickets — mis tickets de ese examen de la subasta.
examenTickets.get("/api/economia/examenes/:id/tickets", requireUser, async (req, res) => {
  const userId = userIdOf(req as never);
  if (!userId) return res.status(401).json({ error: "no autenticado" });
  const examenRow = await prisma.economiaExamen.findFirst({ where: { id: String(req.params.id) } });
  if (!examenRow) return res.status(404).json({ error: "examen not found" });
  const examen = parse<ExamenJson | null>(examenRow.json, null);
  if (!examen) return res.status(404).json({ error: "examen not found" });
  const filas = await prisma.economiaExamenPunto.findMany({ where: { examenId: examen.id } });
  const billetera = filas.map((f) => parse<BilleteraJson>(f.json, {})).find((b) => b.usuarioId === userId);
  return res.json({
    examenId: examen.id,
    ...resumenDe(billetera ? [{ examen, fila: { id: "" }, billetera }] : [])
  });
});

// GET /api/quiz-attempts/:id/tickets — tickets que el alumno puede canjear sobre este intento
// (`tickets: null` si el módulo no tiene subasta de tickets o no compró ninguno).
examenTickets.get("/api/quiz-attempts/:id/tickets", requireUser, async (req, res) => {
  const userId = userIdOf(req as never);
  if (!userId) return res.status(401).json({ error: "no autenticado" });
  const attempt = await prisma.quizAttempt.findFirst({ where: { id: String(req.params.id), userId } });
  if (!attempt) return res.status(404).json({ error: "attempt not found" });
  const quiz = await prisma.quiz.findFirst({ where: { id: attempt.quizId } });
  const billeteras = quiz?.moduleId ? await billeterasDelModulo(prisma, quiz.moduleId, userId) : [];
  const resumenModulo = billeteras.length ? resumenDe(billeteras) : null;
  const grading = parse<Record<string, unknown>>(attempt.grading, {});
  const aplicado = (grading.bonusExamen as BonusExamen | undefined)?.tickets ?? 0;
  const entregado = ["submitted", "graded", "pending_review"].includes(attempt.status);
  return res.json({
    tickets: resumenModulo,
    ticketsEnEsteIntento: aplicado,
    puedeCanjear: entregado && !!resumenModulo && resumenModulo.restantesCanjeables > 0
  });
});

// POST /api/quiz-attempts/:id/canjear-tickets  { tickets: 1 | 2 }
examenTickets.post("/api/quiz-attempts/:id/canjear-tickets", requireUser, async (req, res) => {
  const userId = userIdOf(req as never);
  if (!userId) return res.status(401).json({ error: "no autenticado" });
  const tickets = (req.body ?? {}).tickets;
  if (typeof tickets !== "number" || !Number.isInteger(tickets) || tickets < 1) {
    return res.status(400).json({ error: "tickets debe ser un entero positivo" });
  }
  const attemptId = String(req.params.id);

  try {
    const salida = await prisma.$transaction(async (tx) => {
      // Un solo canje a la vez por alumno: la cuenta de tickets se lee y se escribe bajo este bloqueo.
      await bloquearClave(tx, `tickets:${userId}`);

      const attempt = await tx.quizAttempt.findFirst({ where: { id: attemptId, userId } });
      if (!attempt) throw new CanjeError(404, "attempt not found");
      if (!["submitted", "graded", "pending_review"].includes(attempt.status)) {
        throw new CanjeError(409, "el examen todavía no fue entregado");
      }
      const maxScore = typeof attempt.maxScore === "number" ? attempt.maxScore : 0;
      if (!(maxScore > 0)) throw new CanjeError(409, "el intento no tiene puntaje máximo");

      // La nota que vale es la del último intento: no se gastan tickets en uno que ya no cuenta.
      const ultimos = await tx.quizAttempt.findMany({
        where: { quizId: attempt.quizId, userId },
        orderBy: { startedAt: "desc" },
        take: 1
      });
      if (ultimos[0] && ultimos[0].id !== attempt.id) {
        throw new CanjeError(409, "solo se pueden canjear tickets sobre el último intento");
      }

      const quiz = await tx.quiz.findFirst({ where: { id: attempt.quizId } });
      if (!quiz?.moduleId) throw new CanjeError(404, "este examen no tiene tickets");
      const billeteras = await billeterasDelModulo(tx, quiz.moduleId, userId);
      if (!billeteras.length) throw new CanjeError(404, "no tenés tickets para este examen");

      const r = resumenDe(billeteras);
      if (tickets > r.disponibles) {
        throw new CanjeError(400, "tickets insuficientes", { disponibles: r.disponibles });
      }
      if (r.canjeados + tickets > r.maximoCanjeable) {
        throw new CanjeError(409, "superás el máximo de tickets canjeables en este examen", {
          maximoCanjeable: r.maximoCanjeable,
          canjeados: r.canjeados
        });
      }

      const grading = parse<Record<string, unknown>>(attempt.grading, {});
      const previo = grading.bonusExamen as BonusExamen | undefined;
      const baseScore = previo?.baseScore ?? (typeof attempt.score === "number" ? attempt.score : 0);
      const ticketsEnIntento = (previo?.tickets ?? 0) + tickets;
      const score = Math.min(maxScore, baseScore + bonusPorTickets(ticketsEnIntento, maxScore));
      const bonus: BonusExamen = { examenId: billeteras[0].examen.id, tickets: ticketsEnIntento, baseScore };
      grading.bonusExamen = bonus;

      // Se descuentan de las billeteras más viejas primero.
      const ahora = new Date().toISOString();
      let porCanjear = tickets;
      for (const { fila, billetera } of billeteras) {
        if (porCanjear <= 0) break;
        const libres = Math.max(0, Math.floor(billetera.tickets ?? 0) - (billetera.canjeados ?? 0));
        const usar = Math.min(libres, porCanjear);
        if (usar <= 0) continue;
        porCanjear -= usar;
        await tx.economiaExamenPunto.updateMany({
          where: { id: fila.id },
          data: {
            json: JSON.stringify({ ...billetera, canjeados: (billetera.canjeados ?? 0) + usar, updatedAt: ahora }),
            updatedAt: ahora
          }
        });
      }
      await tx.quizAttempt.updateMany({
        where: { id: attempt.id },
        data: { score, grading: JSON.stringify(grading) }
      });

      return {
        ok: true,
        ticketsCanjeados: tickets,
        ticketsEnIntento,
        ...resumenDe(await billeterasDelModulo(tx, quiz.moduleId, userId)),
        score,
        maxScore,
        scoreSinTickets: baseScore
      };
    });
    return res.json(salida);
  } catch (err) {
    if (err instanceof CanjeError) return res.status(err.status).json({ error: err.codigo, ...err.extra });
    console.error("[examen-tickets] canje", err);
    return res.status(500).json({ error: "error interno" });
  }
});
