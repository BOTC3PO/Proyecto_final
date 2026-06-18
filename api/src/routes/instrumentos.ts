import { Router } from "express";
import { requireUser } from "../lib/user-auth";
import { prisma } from "../lib/prisma";
import { generateId } from "../lib/ids";
import { getAjusteEconomico } from "../lib/calendario-economico";
import { getOverrideActivo } from "./economia";

export const instrumentos = Router();

const getId = (req: { user?: { id?: string; _id?: { toString?: () => string } } }) =>
  req.user?.id ?? req.user?._id?.toString?.() ?? null;

const genId = (prefix: string) =>
  `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;

// ── Helpers de saldo Prisma ─────────────────────────────────

async function getSaldo(userId: string): Promise<number> {
  const doc = await (prisma as any).economiasSaldo?.findFirst({ where: { usuarioId: userId } }) as { saldo?: number } | null;
  return doc?.saldo ?? 0;
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
instrumentos.post("/api/instrumentos/plazo-fijo", requireUser, async (req, res) => {
  const userId = getId(req as never);
  if (!userId) return res.status(401).json({ error: "no autenticado" });

  const { monto, tasaAnual, dias, aulaId } = req.body as Record<string, unknown>;

  if (typeof monto !== "number" || monto <= 0)
    return res.status(400).json({ error: "monto inválido" });
  if (typeof tasaAnual !== "number" || tasaAnual <= 0)
    return res.status(400).json({ error: "tasa inválida" });
  if (typeof dias !== "number" || dias < 1 || dias > 365)
    return res.status(400).json({ error: "días inválidos (1-365)" });

  try {
    const saldoActual = await getSaldo(userId);
    if (saldoActual < monto) {
      return res.status(400).json({
        error: "saldo_insuficiente",
        saldo: saldoActual,
        mensaje: `Necesitás ${monto} PF pero tenés ${saldoActual}.`,
      });
    }

    const interes = monto * (tasaAnual / 100) * (dias / 365);
    const total = monto + interes;
    const now = new Date();
    const vence = new Date(now.getTime() + dias * 24 * 60 * 60 * 1000);
    const id = genId("pf");
    const nowStr = now.toISOString();

    await prisma.plazoFijo.create({
      data: {
        id,
        usuarioId: userId,
        aulaId: typeof aulaId === "string" ? aulaId : null,
        monto,
        tasaAnual,
        dias,
        interes: parseFloat(interes.toFixed(2)),
        total: parseFloat(total.toFixed(2)),
        estado: "activo",
        creadoAt: nowStr,
        venceAt: vence.toISOString(),
      },
    });

    // Descontar saldo
    await (prisma as any).economiaSaldo?.upsert({
      where: { usuarioId: userId },
      update: { saldo: saldoActual - monto, updatedAt: nowStr },
      create: { usuarioId: userId, saldo: saldoActual - monto, updatedAt: nowStr },
    });
    await (prisma as any).economiaTransaccion?.create({
      data: {
        id: genId("tx"),
        usuarioId: userId,
        tipo: "debito",
        monto,
        moneda: "PF",
        motivo: `plazo_fijo:apertura:${id}`,
        referenciaId: id,
        createdAt: nowStr,
      },
    });

    return res.status(201).json({
      id, monto, tasaAnual, dias,
      interes: parseFloat(interes.toFixed(2)),
      total: parseFloat(total.toFixed(2)),
      venceAt: vence.toISOString(),
      saldoRestante: saldoActual - monto,
    });
  } catch (err) {
    return res.status(500).json({ error: err instanceof Error ? err.message : "error" });
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
  const vence = new Date(pf.venceAt);
  const vencido = ahora >= vence;
  const montoARescatar = vencido ? pf.total : pf.monto;

  try {
    const saldoActual = await getSaldo(userId);
    const nowStr = ahora.toISOString();

    await (prisma as any).economiaSaldo?.upsert({
      where: { usuarioId: userId },
      update: { saldo: saldoActual + montoARescatar, updatedAt: nowStr },
      create: { usuarioId: userId, saldo: saldoActual + montoARescatar, updatedAt: nowStr },
    });
    await (prisma as any).economiaTransaccion?.create({
      data: {
        id: genId("tx"),
        usuarioId: userId,
        tipo: "credito",
        monto: montoARescatar,
        moneda: "PF",
        motivo: `plazo_fijo:rescate${vencido ? "_con_interes" : "_anticipado"}:${pf.id}`,
        referenciaId: pf.id,
        createdAt: nowStr,
      },
    });

    await prisma.plazoFijo.update({
      where: { id: pf.id },
      data: { estado: "rescatado", rescatadoAt: nowStr },
    });

    return res.json({
      ok: true,
      montoRescatado: montoARescatar,
      vencido,
      saldoNuevo: saldoActual + montoARescatar,
      mensaje: vencido
        ? `Rescate exitoso con intereses. Recibiste ${montoARescatar.toFixed(2)} PF.`
        : `Rescate anticipado. Solo se devolvió el capital: ${montoARescatar.toFixed(2)} PF.`,
    });
  } catch (err) {
    return res.status(500).json({ error: err instanceof Error ? err.message : "error" });
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

  // FIX-TEST4-ADMIN-01 — respetar el override del panel admin
  // (mismo criterio que en `economia.ts`).
  const macro = await getOverrideActivo();
  const override = macro.modo !== "normal" ? {
    modo: macro.modo,
    precioFactor: macro.precioFactor,
    recompensaFactor: macro.recompensaFactor,
    tasa: macro.tasaAplicada,
  } : null;
  const ajuste = getAjusteEconomico(undefined, override);
  return res.json({ items, ajusteActual: ajuste });
});

// POST /api/instrumentos/fci
instrumentos.post("/api/instrumentos/fci", requireUser, async (req, res) => {
  const userId = getId(req as never);
  if (!userId) return res.status(401).json({ error: "no autenticado" });

  const { monto, dias, aulaId } = req.body as Record<string, unknown>;

  if (typeof monto !== "number" || monto <= 0)
    return res.status(400).json({ error: "monto inválido" });
  if (typeof dias !== "number" || dias < 1 || dias > 90)
    return res.status(400).json({ error: "días inválidos (1-90)" });

  // FIX-TEST4-ADMIN-01 — idem, override del panel antes del JSON.
  const macro = await getOverrideActivo();
  const override = macro.modo !== "normal" ? {
    modo: macro.modo,
    precioFactor: macro.precioFactor,
    recompensaFactor: macro.recompensaFactor,
    tasa: macro.tasaAplicada,
  } : null;
  const ajuste = getAjusteEconomico(undefined, override);
  let tasaMensual = 4;
  if (ajuste.tipo === "deflacion") tasaMensual = 4 + ajuste.tasa * 100;
  else if (ajuste.tipo === "inflacion") tasaMensual = Math.max(1, 4 - ajuste.tasa * 50);
  else if (ajuste.tipo === "hiperinflacion") tasaMensual = Math.max(0.5, 4 - ajuste.tasa * 100);
  tasaMensual = parseFloat(tasaMensual.toFixed(2));

  const interes = monto * (tasaMensual / 100) * (dias / 30);
  const total = monto + interes;
  const now = new Date();
  const vence = new Date(now.getTime() + dias * 24 * 60 * 60 * 1000);

  try {
    const saldoActual = await getSaldo(userId);
    if (saldoActual < monto) {
      return res.status(400).json({
        error: "saldo_insuficiente",
        saldo: saldoActual,
        mensaje: `Necesitás ${monto} PF pero tenés ${saldoActual}.`,
      });
    }

    const id = genId("fci");
    const nowStr = now.toISOString();

    await prisma.fciPosicion.create({
      data: {
        id,
        usuarioId: userId,
        aulaId: typeof aulaId === "string" ? aulaId : null,
        monto,
        tasaMensual,
        dias,
        interes: parseFloat(interes.toFixed(2)),
        total: parseFloat(total.toFixed(2)),
        estado: "activo",
        creadoAt: nowStr,
        venceAt: vence.toISOString(),
      },
    });

    await (prisma as any).economiaSaldo?.upsert({
      where: { usuarioId: userId },
      update: { saldo: saldoActual - monto, updatedAt: nowStr },
      create: { usuarioId: userId, saldo: saldoActual - monto, updatedAt: nowStr },
    });
    await (prisma as any).economiaTransaccion?.create({
      data: {
        id: genId("tx"),
        usuarioId: userId,
        tipo: "debito",
        monto,
        moneda: "PF",
        motivo: `fci:apertura:${id}`,
        referenciaId: id,
        createdAt: nowStr,
      },
    });

    return res.status(201).json({
      id, monto, tasaMensual, dias,
      interes: parseFloat(interes.toFixed(2)),
      total: parseFloat(total.toFixed(2)),
      venceAt: vence.toISOString(),
      saldoRestante: saldoActual - monto,
      cicloActual: ajuste.tipo,
    });
  } catch (err) {
    return res.status(500).json({ error: err instanceof Error ? err.message : "error" });
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
  const creado = new Date(pos.creadoAt);
  const diasTranscurridos = Math.max(1,
    Math.floor((ahora.getTime() - creado.getTime()) / (1000 * 60 * 60 * 24))
  );
  const diasEfectivos = Math.min(diasTranscurridos, pos.dias);
  const interesEfectivo = pos.monto * (pos.tasaMensual / 100) * (diasEfectivos / 30);
  const montoARescatar = parseFloat((pos.monto + interesEfectivo).toFixed(2));

  try {
    const saldoActual = await getSaldo(userId);
    const nowStr = ahora.toISOString();

    await (prisma as any).economiaSaldo?.upsert({
      where: { usuarioId: userId },
      update: { saldo: saldoActual + montoARescatar, updatedAt: nowStr },
      create: { usuarioId: userId, saldo: saldoActual + montoARescatar, updatedAt: nowStr },
    });
    await (prisma as any).economiaTransaccion?.create({
      data: {
        id: genId("tx"),
        usuarioId: userId,
        tipo: "credito",
        monto: montoARescatar,
        moneda: "PF",
        motivo: `fci:rescate:${pos.id}`,
        referenciaId: pos.id,
        createdAt: nowStr,
      },
    });

    await prisma.fciPosicion.update({
      where: { id: pos.id },
      data: { estado: "rescatado", rescatadoAt: nowStr },
    });

    return res.json({
      ok: true,
      diasEfectivos,
      interesEfectivo: parseFloat(interesEfectivo.toFixed(2)),
      montoRescatado: montoARescatar,
      saldoNuevo: saldoActual + montoARescatar,
      mensaje: `Rescate en ${diasEfectivos} días. Recibiste ${montoARescatar.toFixed(2)} PF.`,
    });
  } catch (err) {
    return res.status(500).json({ error: err instanceof Error ? err.message : "error" });
  }
});
