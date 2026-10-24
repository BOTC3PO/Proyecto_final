import { Router } from "express";
import { randomUUID } from "node:crypto";
import { requireUser } from "../lib/user-auth";
import { prisma } from "../lib/prisma";
import { InstrumentoAbrirSchema } from "../schema/escrituras";
import { validarCuerpo } from "../lib/validar";
import { ENV } from "../lib/env";
import { getAjusteEconomico } from "../lib/calendario-economico";
import { acreditarSaldo, debitarSaldo, SaldoInsuficienteError } from "../lib/economia-saldo";
import { getOverrideActivo } from "./economia";

export const instrumentos = Router();

const getId = (req: { user?: { id?: string; _id?: { toString?: () => string } } }) =>
  req.user?.id ?? req.user?._id?.toString?.() ?? null;

/** Resultado de un rescate o apertura que no se pudo completar por una regla de negocio. */
class ReglaError extends Error {
  constructor(public readonly status: number, public readonly codigo: string) {
    super(codigo);
  }
}

const redondear = (n: number) => parseFloat(n.toFixed(2));

/** Monto válido: número finito, positivo y con tope (E6: nada que mande el cliente es de fiar). */
function montoValido(v: unknown): v is number {
  return typeof v === "number" && Number.isFinite(v) && v > 0 && v <= ENV.INSTRUMENTOS_MONTO_MAX;
}

function responderError(res: import("express").Response, err: unknown) {
  if (err instanceof SaldoInsuficienteError) {
    return res.status(400).json({
      error: "saldo_insuficiente",
      saldo: err.saldo,
      mensaje: `No te alcanza el saldo (tenés ${err.saldo} PF).`,
    });
  }
  if (err instanceof ReglaError) return res.status(err.status).json({ error: err.codigo });
  console.error("[instrumentos]", err);
  return res.status(500).json({ error: "error interno" });
}

async function macroOverride() {
  // FIX-TEST4-ADMIN-01 — respetar el override del panel admin
  // (mismo criterio que en `economia.ts`).
  const macro = await getOverrideActivo();
  return macro.modo !== "normal" ? {
    modo: macro.modo,
    precioFactor: macro.precioFactor,
    recompensaFactor: macro.recompensaFactor,
    tasa: macro.tasaAplicada,
  } : null;
}

// ════════════════════════════════════════════════════════════
// PLAZO FIJO
// ════════════════════════════════════════════════════════════

// GET /api/instrumentos/plazo-fijo
instrumentos.get("/api/instrumentos/plazo-fijo", requireUser, async (req, res) => {
  const userId = getId(req as never);
  if (!userId) return res.status(401).json({ error: "no autenticado" });

  const items = await prisma.plazoFijo.findMany({
    where: { usuarioId: userId },
    orderBy: { creadoAt: "desc" },
    take: 20,
  });
  return res.json({ items });
});

// POST /api/instrumentos/plazo-fijo
// La tasa la fija el servidor (E6): se ignora cualquier `tasaAnual` del cuerpo.
instrumentos.post("/api/instrumentos/plazo-fijo", requireUser, async (req, res) => {
  const userId = getId(req as never);
  if (!userId) return res.status(401).json({ error: "no autenticado" });

  const abrir = validarCuerpo(InstrumentoAbrirSchema, req, res);
  if (!abrir) return;
  const { monto, dias, aulaId } = abrir;

  if (!montoValido(monto)) return res.status(400).json({ error: "monto inválido" });
  if (typeof dias !== "number" || !Number.isInteger(dias) || dias < 1 || dias > 365)
    return res.status(400).json({ error: "días inválidos (1-365)" });

  const tasaAnual = ENV.PLAZO_FIJO_TASA_ANUAL;
  const montoFinal = redondear(monto);
  const interes = redondear(montoFinal * (tasaAnual / 100) * (dias / 365));
  const total = redondear(montoFinal + interes);
  const now = new Date();
  const nowStr = now.toISOString();
  const vence = new Date(now.getTime() + dias * 24 * 60 * 60 * 1000);
  const id = `pf-${randomUUID()}`;

  try {
    await prisma.$transaction(async (tx) => {
      await debitarSaldo(tx, {
        usuarioId: userId,
        monto: montoFinal,
        motivo: `plazo_fijo:apertura:${id}`,
        referenciaId: id,
        now: nowStr,
      });
      await tx.plazoFijo.create({
        data: {
          id,
          usuarioId: userId,
          aulaId: typeof aulaId === "string" ? aulaId : null,
          monto: montoFinal,
          tasaAnual,
          dias,
          interes,
          total,
          estado: "activo",
          creadoAt: nowStr,
          venceAt: vence.toISOString(),
        },
      });
    });

    const restante = (await prisma.economiaSaldo.findFirst({ where: { usuarioId: userId } }))?.saldo ?? 0;
    return res.status(201).json({
      id, monto: montoFinal, tasaAnual, dias, interes, total,
      venceAt: vence.toISOString(),
      saldoRestante: restante,
    });
  } catch (err) {
    return responderError(res, err);
  }
});

// POST /api/instrumentos/plazo-fijo/:id/rescatar
instrumentos.post("/api/instrumentos/plazo-fijo/:id/rescatar", requireUser, async (req, res) => {
  const userId = getId(req as never);
  if (!userId) return res.status(401).json({ error: "no autenticado" });

  const pf = await prisma.plazoFijo.findFirst({
    where: { id: String(req.params.id), usuarioId: userId },
  });

  if (!pf) return res.status(404).json({ error: "no encontrado" });
  if (pf.estado !== "activo")
    return res.status(400).json({ error: "ya fue rescatado o vencido" });

  const ahora = new Date();
  const nowStr = ahora.toISOString();
  const vencido = ahora >= new Date(pf.venceAt);
  const montoARescatar = vencido ? pf.total : pf.monto;

  try {
    await prisma.$transaction(async (tx) => {
      // Pasa de activo a rescatado una sola vez: un doble pedido no acredita dos veces.
      const r = await tx.plazoFijo.updateMany({
        where: { id: pf.id, usuarioId: userId, estado: "activo" },
        data: { estado: "rescatado", rescatadoAt: nowStr },
      });
      if (r.count !== 1) throw new ReglaError(409, "ya fue rescatado");
      await acreditarSaldo(tx, {
        usuarioId: userId,
        monto: montoARescatar,
        motivo: `plazo_fijo:rescate${vencido ? "_con_interes" : "_anticipado"}:${pf.id}`,
        referenciaId: pf.id,
        now: nowStr,
      });
    });

    const saldoNuevo = (await prisma.economiaSaldo.findFirst({ where: { usuarioId: userId } }))?.saldo ?? 0;
    return res.json({
      ok: true,
      montoRescatado: montoARescatar,
      vencido,
      saldoNuevo,
      mensaje: vencido
        ? `Rescate exitoso con intereses. Recibiste ${montoARescatar.toFixed(2)} PF.`
        : `Rescate anticipado. Solo se devolvió el capital: ${montoARescatar.toFixed(2)} PF.`,
    });
  } catch (err) {
    return responderError(res, err);
  }
});

// ════════════════════════════════════════════════════════════
// FCI
// ════════════════════════════════════════════════════════════

// GET /api/instrumentos/fci
instrumentos.get("/api/instrumentos/fci", requireUser, async (req, res) => {
  const userId = getId(req as never);
  if (!userId) return res.status(401).json({ error: "no autenticado" });

  const items = await prisma.fciPosicion.findMany({
    where: { usuarioId: userId },
    orderBy: { creadoAt: "desc" },
    take: 20,
  });

  const ajuste = getAjusteEconomico(undefined, await macroOverride());
  return res.json({ items, ajusteActual: ajuste });
});

// POST /api/instrumentos/fci
instrumentos.post("/api/instrumentos/fci", requireUser, async (req, res) => {
  const userId = getId(req as never);
  if (!userId) return res.status(401).json({ error: "no autenticado" });

  const abrir = validarCuerpo(InstrumentoAbrirSchema, req, res);
  if (!abrir) return;
  const { monto, dias, aulaId } = abrir;

  if (!montoValido(monto)) return res.status(400).json({ error: "monto inválido" });
  if (typeof dias !== "number" || !Number.isInteger(dias) || dias < 1 || dias > 90)
    return res.status(400).json({ error: "días inválidos (1-90)" });

  const ajuste = getAjusteEconomico(undefined, await macroOverride());
  let tasaMensual = 4;
  if (ajuste.tipo === "deflacion") tasaMensual = 4 + ajuste.tasa * 100;
  else if (ajuste.tipo === "inflacion") tasaMensual = Math.max(1, 4 - ajuste.tasa * 50);
  else if (ajuste.tipo === "hiperinflacion") tasaMensual = Math.max(0.5, 4 - ajuste.tasa * 100);
  tasaMensual = parseFloat(tasaMensual.toFixed(2));

  const montoFinal = redondear(monto);
  const interes = redondear(montoFinal * (tasaMensual / 100) * (dias / 30));
  const total = redondear(montoFinal + interes);
  const now = new Date();
  const nowStr = now.toISOString();
  const vence = new Date(now.getTime() + dias * 24 * 60 * 60 * 1000);
  const id = `fci-${randomUUID()}`;

  try {
    await prisma.$transaction(async (tx) => {
      await debitarSaldo(tx, {
        usuarioId: userId,
        monto: montoFinal,
        motivo: `fci:apertura:${id}`,
        referenciaId: id,
        now: nowStr,
      });
      await tx.fciPosicion.create({
        data: {
          id,
          usuarioId: userId,
          aulaId: typeof aulaId === "string" ? aulaId : null,
          monto: montoFinal,
          tasaMensual,
          dias,
          interes,
          total,
          estado: "activo",
          creadoAt: nowStr,
          venceAt: vence.toISOString(),
        },
      });
    });

    const restante = (await prisma.economiaSaldo.findFirst({ where: { usuarioId: userId } }))?.saldo ?? 0;
    return res.status(201).json({
      id, monto: montoFinal, tasaMensual, dias, interes, total,
      venceAt: vence.toISOString(),
      saldoRestante: restante,
      cicloActual: ajuste.tipo,
    });
  } catch (err) {
    return responderError(res, err);
  }
});

// POST /api/instrumentos/fci/:id/rescatar
instrumentos.post("/api/instrumentos/fci/:id/rescatar", requireUser, async (req, res) => {
  const userId = getId(req as never);
  if (!userId) return res.status(401).json({ error: "no autenticado" });

  const pos = await prisma.fciPosicion.findFirst({
    where: { id: String(req.params.id), usuarioId: userId },
  });

  if (!pos) return res.status(404).json({ error: "no encontrado" });
  if (pos.estado !== "activo")
    return res.status(400).json({ error: "ya rescatado" });

  const ahora = new Date();
  const nowStr = ahora.toISOString();
  const creado = new Date(pos.creadoAt);
  const diasTranscurridos = Math.max(1,
    Math.floor((ahora.getTime() - creado.getTime()) / (1000 * 60 * 60 * 24))
  );
  const diasEfectivos = Math.min(diasTranscurridos, pos.dias);
  const interesEfectivo = pos.monto * (pos.tasaMensual / 100) * (diasEfectivos / 30);
  const montoARescatar = redondear(pos.monto + interesEfectivo);

  try {
    await prisma.$transaction(async (tx) => {
      const r = await tx.fciPosicion.updateMany({
        where: { id: pos.id, usuarioId: userId, estado: "activo" },
        data: { estado: "rescatado", rescatadoAt: nowStr },
      });
      if (r.count !== 1) throw new ReglaError(409, "ya rescatado");
      await acreditarSaldo(tx, {
        usuarioId: userId,
        monto: montoARescatar,
        motivo: `fci:rescate:${pos.id}`,
        referenciaId: pos.id,
        now: nowStr,
      });
    });

    const saldoNuevo = (await prisma.economiaSaldo.findFirst({ where: { usuarioId: userId } }))?.saldo ?? 0;
    return res.json({
      ok: true,
      diasEfectivos,
      interesEfectivo: redondear(interesEfectivo),
      montoRescatado: montoARescatar,
      saldoNuevo,
      mensaje: `Rescate en ${diasEfectivos} días. Recibiste ${montoARescatar.toFixed(2)} PF.`,
    });
  } catch (err) {
    return responderError(res, err);
  }
});
