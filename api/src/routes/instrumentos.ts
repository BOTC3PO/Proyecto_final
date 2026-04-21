import { Router } from "express";
import { openContentDb } from "../lib/db-open";
import { requireUser } from "../lib/user-auth";
import { prisma } from "../lib/prisma";
import { generateId } from "../lib/ids";
import { getAjusteEconomico } from "../lib/calendario-economico";

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

async function updateSaldo(
  userId: string,
  nuevoSaldo: number,
  motivo: string,
  referencia: string
): Promise<void> {
  const now = new Date().toISOString();
  await (prisma as any).economiaSaldo?.upsert({
    where: { usuarioId: userId },
    update: { saldo: nuevoSaldo, updatedAt: now },
    create: { usuarioId: userId, saldo: nuevoSaldo, updatedAt: now }
  });
  await (prisma as any).economiaTransaccion?.create({
    data: {
      id: genId("tx"),
      usuarioId: userId,
      tipo: nuevoSaldo > 0 ? "credito" : "debito",
      monto: Math.abs(nuevoSaldo),
      moneda: "PF",
      motivo,
      referenciaId: referencia,
      createdAt: now,
    }
  });
}

// ════════════════════════════════════════════════════════════
// PLAZO FIJO
// ════════════════════════════════════════════════════════════

// GET /api/instrumentos/plazo-fijo
instrumentos.get("/api/instrumentos/plazo-fijo", requireUser, (req, res) => {
  const userId = getId(req as never);
  if (!userId) return res.status(401).json({ error: "no autenticado" });
  const db = openContentDb();
  const items = db.prepare(`
    SELECT * FROM plazo_fijo
    WHERE usuario_id = ?
    ORDER BY creado_at DESC
    LIMIT 20
  `).all(userId);
  return res.json({ items });
});

// POST /api/instrumentos/plazo-fijo
instrumentos.post("/api/instrumentos/plazo-fijo", requireUser,
  async (req, res) => {
    const userId = getId(req as never);
    if (!userId) return res.status(401).json({ error: "no autenticado" });

    const { monto, tasaAnual, dias, aulaId } =
      req.body as Record<string, unknown>;

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

      const sqliteDb = openContentDb();
      const id = genId("pf");

      sqliteDb.prepare(`
        INSERT INTO plazo_fijo
          (id, usuario_id, aula_id, monto, tasa_anual, dias,
           interes, total, estado, creado_at, vence_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'activo', ?, ?)
      `).run(
        id, userId,
        typeof aulaId === "string" ? aulaId : null,
        monto, tasaAnual, dias,
        parseFloat(interes.toFixed(2)),
        parseFloat(total.toFixed(2)),
        now.toISOString(),
        vence.toISOString()
      );

      // Descontar saldo
      const nowStr = now.toISOString();
      await (prisma as any).economiaSaldo?.upsert({
        where: { usuarioId: userId },
        update: { saldo: saldoActual - monto, updatedAt: nowStr },
        create: { usuarioId: userId, saldo: saldoActual - monto, updatedAt: nowStr }
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
        }
      });

      return res.status(201).json({
        id, monto, tasaAnual, dias,
        interes: parseFloat(interes.toFixed(2)),
        total: parseFloat(total.toFixed(2)),
        venceAt: vence.toISOString(),
        saldoRestante: saldoActual - monto,
      });
    } catch (err) {
      return res.status(500).json({
        error: err instanceof Error ? err.message : "error"
      });
    }
  }
);

// POST /api/instrumentos/plazo-fijo/:id/rescatar
instrumentos.post("/api/instrumentos/plazo-fijo/:id/rescatar",
  requireUser, async (req, res) => {
    const userId = getId(req as never);
    if (!userId) return res.status(401).json({ error: "no autenticado" });

    const sqliteDb = openContentDb();
    const pf = sqliteDb.prepare(`
      SELECT * FROM plazo_fijo WHERE id = ? AND usuario_id = ?
    `).get(req.params.id, userId) as {
      id: string; monto: number; total: number;
      estado: string; vence_at: string;
    } | undefined;

    if (!pf) return res.status(404).json({ error: "no encontrado" });
    if (pf.estado !== "activo")
      return res.status(400).json({ error: "ya fue rescatado o vencido" });

    const ahora = new Date();
    const vence = new Date(pf.vence_at);
    const vencido = ahora >= vence;

    // Si no venció, devolver solo el capital (sin interés)
    const montoARescatar = vencido ? pf.total : pf.monto;

    try {
      const saldoActual = await getSaldo(userId);
      const nowStr = ahora.toISOString();

      await (prisma as any).economiaSaldo?.upsert({
        where: { usuarioId: userId },
        update: { saldo: saldoActual + montoARescatar, updatedAt: nowStr },
        create: { usuarioId: userId, saldo: saldoActual + montoARescatar, updatedAt: nowStr }
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
        }
      });

      sqliteDb.prepare(`
        UPDATE plazo_fijo
        SET estado = 'rescatado', rescatado_at = ?
        WHERE id = ?
      `).run(nowStr, pf.id);

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
      return res.status(500).json({
        error: err instanceof Error ? err.message : "error"
      });
    }
  }
);

// ════════════════════════════════════════════════════════════
// FCI
// ════════════════════════════════════════════════════════════

// GET /api/instrumentos/fci
instrumentos.get("/api/instrumentos/fci", requireUser, (req, res) => {
  const userId = getId(req as never);
  if (!userId) return res.status(401).json({ error: "no autenticado" });
  const db = openContentDb();
  const items = db.prepare(`
    SELECT * FROM fci_posiciones
    WHERE usuario_id = ?
    ORDER BY creado_at DESC
    LIMIT 20
  `).all(userId);

  // Ajustar tasa según ciclo actual
  const ajuste = getAjusteEconomico();
  return res.json({ items, ajusteActual: ajuste });
});

// POST /api/instrumentos/fci
instrumentos.post("/api/instrumentos/fci", requireUser,
  async (req, res) => {
    const userId = getId(req as never);
    if (!userId) return res.status(401).json({ error: "no autenticado" });

    const { monto, dias, aulaId } =
      req.body as Record<string, unknown>;

    if (typeof monto !== "number" || monto <= 0)
      return res.status(400).json({ error: "monto inválido" });
    if (typeof dias !== "number" || dias < 1 || dias > 90)
      return res.status(400).json({ error: "días inválidos (1-90)" });

    // Tasa mensual desde el ciclo económico actual
    const ajuste = getAjusteEconomico();
    // En deflación la tasa FCI sube, en inflación baja
    let tasaMensual = 4; // base
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

      const sqliteDb = openContentDb();
      const id = genId("fci");

      sqliteDb.prepare(`
        INSERT INTO fci_posiciones
          (id, usuario_id, aula_id, monto, tasa_mensual, dias,
           interes, total, estado, creado_at, vence_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'activo', ?, ?)
      `).run(
        id, userId,
        typeof aulaId === "string" ? aulaId : null,
        monto, tasaMensual, dias,
        parseFloat(interes.toFixed(2)),
        parseFloat(total.toFixed(2)),
        now.toISOString(),
        vence.toISOString()
      );

      const nowStr = now.toISOString();
      await (prisma as any).economiaSaldo?.upsert({
        where: { usuarioId: userId },
        update: { saldo: saldoActual - monto, updatedAt: nowStr },
        create: { usuarioId: userId, saldo: saldoActual - monto, updatedAt: nowStr }
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
        }
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
      return res.status(500).json({
        error: err instanceof Error ? err.message : "error"
      });
    }
  }
);

// POST /api/instrumentos/fci/:id/rescatar
instrumentos.post("/api/instrumentos/fci/:id/rescatar",
  requireUser, async (req, res) => {
    const userId = getId(req as never);
    if (!userId) return res.status(401).json({ error: "no autenticado" });

    const sqliteDb = openContentDb();
    const pos = sqliteDb.prepare(`
      SELECT * FROM fci_posiciones WHERE id = ? AND usuario_id = ?
    `).get(req.params.id, userId) as {
      id: string; monto: number; total: number;
      estado: string; vence_at: string; dias: number;
      tasa_mensual: number; creado_at: string;
    } | undefined;

    if (!pos) return res.status(404).json({ error: "no encontrado" });
    if (pos.estado !== "activo")
      return res.status(400).json({ error: "ya rescatado" });

    // FCI permite rescate anticipado — calcular interés proporcional
    const ahora = new Date();
    const creado = new Date(pos.creado_at);
    const diasTranscurridos = Math.max(1,
      Math.floor((ahora.getTime() - creado.getTime()) / (1000 * 60 * 60 * 24))
    );
    const diasEfectivos = Math.min(diasTranscurridos, pos.dias);
    const interesEfectivo = pos.monto * (pos.tasa_mensual / 100) * (diasEfectivos / 30);
    const montoARescatar = parseFloat((pos.monto + interesEfectivo).toFixed(2));

    try {
      const saldoActual = await getSaldo(userId);
      const nowStr = ahora.toISOString();

      await (prisma as any).economiaSaldo?.upsert({
        where: { usuarioId: userId },
        update: { saldo: saldoActual + montoARescatar, updatedAt: nowStr },
        create: { usuarioId: userId, saldo: saldoActual + montoARescatar, updatedAt: nowStr }
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
        }
      });

      sqliteDb.prepare(`
        UPDATE fci_posiciones
        SET estado = 'rescatado', rescatado_at = ?
        WHERE id = ?
      `).run(nowStr, pos.id);

      return res.json({
        ok: true,
        diasEfectivos,
        interesEfectivo: parseFloat(interesEfectivo.toFixed(2)),
        montoRescatado: montoARescatar,
        saldoNuevo: saldoActual + montoARescatar,
        mensaje: `Rescate en ${diasEfectivos} días. Recibiste ${montoARescatar.toFixed(2)} PF.`,
      });
    } catch (err) {
      return res.status(500).json({
        error: err instanceof Error ? err.message : "error"
      });
    }
  }
);
