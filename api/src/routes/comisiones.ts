/**
 * Fase 5.1 — rutas del modelo de comisión.
 *
 * Montado tras `requireUser` (auth global). Los endpoints de admin agregan
 * `requireAdmin` por-ruta. El registro contable por transacción lo hace
 * `registrarTransaccionEscuela` (lib/comisiones), invocado desde el webhook de
 * suscripciones al acreditar un cobro de escuela autogestionada.
 */
import { Router } from "express";
import { requireAdmin } from "../lib/admin-auth";
import { prisma } from "../lib/prisma";
import { DEFAULT_COMISION_PCT } from "../lib/comisiones";
import { hasRole } from "../lib/roles";

export const comisiones = Router();

const getSchoolId = (req: { user?: { schoolId?: string | null } }) =>
  req.user?.schoolId ?? null;

const getUserFromReq = (req: { user?: { role?: string; roles?: string[] } }) => req.user ?? null;

const periodoActual = () => new Date().toISOString().slice(0, 7); // "YYYY-MM"
const genId = (p: string) => `${p}-${Date.now()}-${Math.random().toString(16).slice(2)}`;

const sum = (rows: Array<Record<string, unknown>>, key: string) =>
  rows.reduce((acc, r) => acc + (typeof r[key] === "number" ? (r[key] as number) : 0), 0);

// ── GET /api/comisiones/escuela/:escuelaId/resumen ──────────────
// Resumen para el panel de la escuela: modo, comisión, cobros del mes,
// comisión retenida, saldo a liquidar e historial.
comisiones.get(
  "/api/comisiones/escuela/:escuelaId/resumen",
  async (req, res) => {
    const { escuelaId } = req.params;
    const user = getUserFromReq(req as never);
    if (!hasRole(user, "ADMIN") && getSchoolId(req as never) !== escuelaId) {
      return res.status(403).json({ error: "Sin acceso a esta escuela" });
    }
    const escuela = await prisma.escuela.findFirst({ where: { id: escuelaId } });
    if (!escuela) return res.status(404).json({ error: "Escuela no encontrada" });

    const [transacciones, liquidaciones] = await Promise.all([
      prisma.transaccionEscuela.findMany({
        where: { escuelaId },
        orderBy: { createdAt: "desc" },
      }),
      prisma.liquidacionEscuela.findMany({
        where: { escuelaId },
        orderBy: { createdAt: "desc" },
      }),
    ]);

    const periodo = periodoActual();
    const delMes = transacciones.filter((t) =>
      String(t.createdAt).startsWith(periodo),
    );
    const pendientes = transacciones.filter((t) => t.estado === "registrada");

    return res.json({
      escuela: {
        id: escuela.id,
        name: escuela.name,
        modoGestion: escuela.modoGestion ?? "centralizado",
        comisionPct: escuela.comisionPct ?? DEFAULT_COMISION_PCT,
      },
      resumen: {
        periodo,
        cobrosMes: sum(delMes, "montoTotal"),
        comisionRetenidaMes: sum(delMes, "comisionVB"),
        saldoALiquidar: sum(pendientes, "montoNeto"),
        cantTransaccPendientes: pendientes.length,
      },
      transacciones,
      liquidaciones,
    });
  },
);

// ── POST /api/comisiones/escuela/:escuelaId/modo ────────────────
// Elegir modo de gestión y % de comisión. Admin o directivo de esa escuela.
comisiones.post(
  "/api/comisiones/escuela/:escuelaId/modo",
  async (req, res) => {
    const { escuelaId } = req.params;
    const user = getUserFromReq(req as never);
    const esDirectivoDeEscuela =
      hasRole(user, "DIRECTIVO") && getSchoolId(req as never) === escuelaId;
    if (!hasRole(user, "ADMIN") && !esDirectivoDeEscuela) {
      return res.status(403).json({ error: "Sin permiso" });
    }
    const body = req.body as { modoGestion?: unknown; comisionPct?: unknown };
    const modoGestion =
      body.modoGestion === "autogestionado" ? "autogestionado" : "centralizado";
    let comisionPct: number | null = null;
    if (typeof body.comisionPct === "number" && Number.isFinite(body.comisionPct)) {
      comisionPct = Math.min(Math.max(body.comisionPct, 0), 100);
    }

    try {
      const updated = await prisma.escuela.update({
        where: { id: escuelaId },
        data: { modoGestion, comisionPct },
      });
      return res.json({
        ok: true,
        modoGestion: updated.modoGestion,
        comisionPct: updated.comisionPct,
      });
    } catch {
      return res.status(404).json({ error: "Escuela no encontrada" });
    }
  },
);

// ── GET /api/comisiones/admin ───────────────────────────────────
// Panel admin: comisiones agregadas por escuela.
comisiones.get("/api/comisiones/admin", requireAdmin, async (_req, res) => {
  const escuelas = await prisma.escuela.findMany({
    where: { isDeleted: { not: true } },
  });
  const transacciones = await prisma.transaccionEscuela.findMany({});
  const liquidaciones = await prisma.liquidacionEscuela.findMany({});

  const items = escuelas
    .map((e) => {
      const txs = transacciones.filter((t) => t.escuelaId === e.id);
      const liqs = liquidaciones.filter((l) => l.escuelaId === e.id);
      const pendientes = txs.filter((t) => t.estado === "registrada");
      return {
        escuelaId: e.id,
        name: e.name,
        modoGestion: e.modoGestion ?? "centralizado",
        comisionPct: e.comisionPct ?? DEFAULT_COMISION_PCT,
        cobrosTotal: sum(txs, "montoTotal"),
        comisionTotal: sum(txs, "comisionVB"),
        saldoALiquidar: sum(pendientes, "montoNeto"),
        cantTransacc: txs.length,
        cantLiquidaciones: liqs.length,
      };
    })
    .filter((i) => i.cantTransacc > 0 || i.modoGestion === "autogestionado");

  return res.json({ items });
});

// ── POST /api/comisiones/admin/liquidar ─────────────────────────
// Liquida el saldo neto pendiente de una escuela (opcionalmente de un período)
// y marca esas transacciones como liquidadas.
comisiones.post("/api/comisiones/admin/liquidar", requireAdmin, async (req, res) => {
  const body = req.body as { escuelaId?: unknown; periodo?: unknown; metodo?: unknown };
  const escuelaId = typeof body.escuelaId === "string" ? body.escuelaId : "";
  if (!escuelaId) return res.status(400).json({ error: "escuelaId requerido" });
  const periodo = typeof body.periodo === "string" && body.periodo ? body.periodo : periodoActual();
  const metodo = typeof body.metodo === "string" && body.metodo ? body.metodo : "transferencia";

  const pendientes = (
    await prisma.transaccionEscuela.findMany({
      where: { escuelaId, estado: "registrada" },
    })
  ).filter((t) => String(t.createdAt).startsWith(periodo));

  if (pendientes.length === 0) {
    return res.status(409).json({ error: "No hay transacciones pendientes en el período" });
  }

  const montoLiquidado = sum(pendientes, "montoNeto");
  const liquidacion = await prisma.liquidacionEscuela.create({
    data: {
      id: genId("liq"),
      escuelaId,
      periodo,
      montoLiquidado,
      cantTransacc: pendientes.length,
      metodo,
      createdAt: new Date().toISOString(),
    },
  });
  for (const t of pendientes) {
    await prisma.transaccionEscuela.update({
      where: { id: t.id as string },
      data: { estado: "liquidada" },
    });
  }
  return res.json({ ok: true, liquidacion });
});

// ── GET /api/comisiones/admin/export.csv ────────────────────────
// Export contable de todas las transacciones (CSV).
comisiones.get("/api/comisiones/admin/export.csv", requireAdmin, async (_req, res) => {
  const txs = await prisma.transaccionEscuela.findMany({
    orderBy: { createdAt: "desc" },
  });
  const escuelas = await prisma.escuela.findMany({});
  const nameById = new Map(escuelas.map((e) => [e.id, e.name]));

  const header = [
    "id",
    "escuela_id",
    "escuela",
    "fecha",
    "monto_total",
    "comision_vb",
    "monto_neto",
    "estado",
    "mp_payment_id",
  ];
  const esc = (v: unknown) => {
    const s = v === null || v === undefined ? "" : String(v);
    return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  const lines = [header.join(",")];
  for (const t of txs) {
    lines.push(
      [
        t.id,
        t.escuelaId,
        nameById.get(t.escuelaId as string) ?? "",
        t.createdAt,
        t.montoTotal,
        t.comisionVB,
        t.montoNeto,
        t.estado,
        t.mpPaymentId ?? "",
      ]
        .map(esc)
        .join(","),
    );
  }
  res.setHeader("Content-Type", "text/csv; charset=utf-8");
  res.setHeader("Content-Disposition", 'attachment; filename="comisiones.csv"');
  return res.send(lines.join("\n"));
});
