/**
 * Fase 5.1 — rutas del modelo de comisión.
 *
 * Montado tras `requireUser` (auth global). Los endpoints de admin agregan
 * `requireAdmin` por-ruta. El registro contable por transacción lo hace
 * `registrarTransaccionEscuela` (lib/comisiones), invocado desde el webhook de
 * suscripciones al acreditar un cobro de escuela. Sistema siempre
 * autogestionado: no hay modo "centralizado" (VB nunca cobra directo).
 */
import { randomUUID } from "node:crypto";
import { Router } from "express";
import { requireAdmin } from "../lib/admin-auth";
import { prisma } from "../lib/prisma";
import { leerPagina, recortar } from "../lib/paginacion";
import {
  COMISION_PCT_RANGO_AR,
  COMISION_PCT_RANGO_INTL,
  DEFAULT_COMISION_PCT_AR,
  DEFAULT_COMISION_PCT_INTL,
} from "../lib/comisiones";
import { hasRole } from "../lib/roles";
import { recordAuditLog } from "../lib/audit-log";

export const comisiones = Router();

const getSchoolId = (req: { user?: { schoolId?: string | null } }) =>
  req.user?.schoolId ?? null;

// Quién ejecutó una acción sobre plata — para el rastro de auditoría.
const getActorId = (req: { user?: { id?: string; _id?: { toString?: () => string } } }) =>
  req.user?.id ?? req.user?._id?.toString?.() ?? "desconocido";

const getUserFromReq = (req: { user?: { role?: string; roles?: string[] } }) => req.user ?? null;

const periodoActual = () => new Date().toISOString().slice(0, 7); // "YYYY-MM"
const genId = (p: string) => `${p}-${randomUUID()}`;

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
    // Son finanzas de la escuela: las ve su dirección (directivo o administrador de escuela), no el resto
    // del personal ni los alumnos (antes valía cualquier persona con esa escuela).
    const esDireccion = hasRole(user, "DIRECTIVO") || hasRole(user, "ADMIN_ESCUELA");
    if (!hasRole(user, "ADMIN") && !(esDireccion && getSchoolId(req as never) === escuelaId)) {
      return res.status(403).json({ error: "Sin acceso a esta escuela" });
    }
    const escuela = await prisma.escuela.findFirst({ where: { id: escuelaId } });
    if (!escuela) return res.status(404).json({ error: "Escuela no encontrada" });

    // Los totales se suman en la base; las listas van paginadas (más recientes primero).
    const periodo = periodoActual();
    const pagina = leerPagina(req.query);
    const [txPagina, liqPagina, delMes, pendientes] = await Promise.all([
      prisma.transaccionEscuela.findMany({
        where: { escuelaId },
        orderBy: { createdAt: "desc" },
        take: pagina.take,
        skip: pagina.skip,
      }),
      prisma.liquidacionEscuela.findMany({
        where: { escuelaId },
        orderBy: { createdAt: "desc" },
        take: pagina.take,
        skip: pagina.skip,
      }),
      prisma.transaccionEscuela.aggregate({
        where: { escuelaId, createdAt: { gte: periodo, lt: `${periodo}\uffff` } },
        _sum: { montoTotal: true, comisionVB: true },
      }),
      prisma.transaccionEscuela.aggregate({
        where: { escuelaId, estado: "registrada" },
        _sum: { montoNeto: true },
      }),
    ]);
    const cantPendientes = await prisma.transaccionEscuela.count({ where: { escuelaId, estado: "registrada" } });
    const { items: transacciones, ...paginacion } = recortar(txPagina, pagina);
    const { items: liquidaciones, hasMore: liquidacionesHasMore } = recortar(liqPagina, pagina);

    return res.json({
      escuela: {
        id: escuela.id,
        name: escuela.name,
        comisionPct: escuela.comisionPct ?? DEFAULT_COMISION_PCT_AR,
        comisionPctIntl: escuela.comisionPctIntl ?? DEFAULT_COMISION_PCT_INTL,
      },
      resumen: {
        periodo,
        cobrosMes: delMes._sum.montoTotal ?? 0,
        comisionRetenidaMes: delMes._sum.comisionVB ?? 0,
        saldoALiquidar: pendientes._sum.montoNeto ?? 0,
        cantTransaccPendientes: cantPendientes,
      },
      transacciones,
      liquidaciones,
      ...paginacion,
      liquidacionesHasMore,
    });
  },
);

// ── POST /api/comisiones/escuela/:escuelaId/comision ────────────
// Fijar el % de comisión (doméstico/MercadoPago y/o internacional/Cryptomus).
// Admin o directivo de esa escuela. Cada valor se clampa a su rango real.
comisiones.post(
  "/api/comisiones/escuela/:escuelaId/comision",
  async (req, res) => {
    const { escuelaId } = req.params;
    const user = getUserFromReq(req as never);
    const esDirectivoDeEscuela =
      hasRole(user, "DIRECTIVO") && getSchoolId(req as never) === escuelaId;
    if (!hasRole(user, "ADMIN") && !esDirectivoDeEscuela) {
      return res.status(403).json({ error: "Sin permiso" });
    }
    const body = req.body as { comisionPct?: unknown; comisionPctIntl?: unknown };
    const data: { comisionPct?: number; comisionPctIntl?: number } = {};
    if (typeof body.comisionPct === "number" && Number.isFinite(body.comisionPct)) {
      data.comisionPct = Math.min(
        Math.max(body.comisionPct, COMISION_PCT_RANGO_AR.min),
        COMISION_PCT_RANGO_AR.max,
      );
    }
    if (typeof body.comisionPctIntl === "number" && Number.isFinite(body.comisionPctIntl)) {
      data.comisionPctIntl = Math.min(
        Math.max(body.comisionPctIntl, COMISION_PCT_RANGO_INTL.min),
        COMISION_PCT_RANGO_INTL.max,
      );
    }

    try {
      const previo = await prisma.escuela.findFirst({ where: { id: escuelaId } });
      const updated = await prisma.escuela.update({
        where: { id: escuelaId },
        data,
      });
      // Cambiar el % es cambiar cuánto factura VB — queda con antes/después.
      await recordAuditLog({
        actorId: getActorId(req as never),
        action: "escuela.comision_actualizada",
        targetType: "Escuela",
        targetId: escuelaId,
        metadata: {
          antes: { comisionPct: previo?.comisionPct ?? null, comisionPctIntl: previo?.comisionPctIntl ?? null },
          despues: { comisionPct: updated.comisionPct, comisionPctIntl: updated.comisionPctIntl },
        },
      });
      return res.json({
        ok: true,
        comisionPct: updated.comisionPct,
        comisionPctIntl: updated.comisionPctIntl,
      });
    } catch {
      return res.status(404).json({ error: "Escuela no encontrada" });
    }
  },
);

// ── GET /api/comisiones/admin ───────────────────────────────────
// Panel admin: comisiones agregadas por escuela.
comisiones.get("/api/comisiones/admin", requireAdmin, async (req, res) => {
  const pagina = leerPagina(req.query);
  const { items: escuelas, ...paginacion } = recortar(
    await prisma.escuela.findMany({
      where: { isDeleted: { not: true } },
      orderBy: { id: "asc" },
      take: pagina.take,
      skip: pagina.skip,
    }),
    pagina,
  );
  const ids = escuelas.map((e) => e.id);
  // Totales por escuela sumados en la base, solo de las escuelas de esta página.
  const [totales, pendientesPorEscuela, liquidacionesPorEscuela] = ids.length
    ? await Promise.all([
        prisma.transaccionEscuela.groupBy({
          by: ["escuelaId"],
          where: { escuelaId: { in: ids } },
          _count: { _all: true },
          _sum: { montoTotal: true, comisionVB: true },
        }),
        prisma.transaccionEscuela.groupBy({
          by: ["escuelaId"],
          where: { escuelaId: { in: ids }, estado: "registrada" },
          _count: { _all: true },
          _sum: { montoNeto: true },
        }),
        prisma.liquidacionEscuela.groupBy({
          by: ["escuelaId"],
          where: { escuelaId: { in: ids } },
          _count: { _all: true },
        }),
      ])
    : [[], [], []];
  const totalDe = new Map(totales.map((t) => [t.escuelaId as string, t]));
  const pendienteDe = new Map(pendientesPorEscuela.map((t) => [t.escuelaId as string, t]));
  const liqDe = new Map(liquidacionesPorEscuela.map((t) => [t.escuelaId as string, t]));

  const items = escuelas.map((e) => {
    const t = totalDe.get(e.id);
    return {
      escuelaId: e.id,
      name: e.name,
      comisionPct: e.comisionPct ?? DEFAULT_COMISION_PCT_AR,
      comisionPctIntl: e.comisionPctIntl ?? DEFAULT_COMISION_PCT_INTL,
      cobrosTotal: t?._sum?.montoTotal ?? 0,
      comisionTotal: t?._sum?.comisionVB ?? 0,
      saldoALiquidar: pendienteDe.get(e.id)?._sum?.montoNeto ?? 0,
      cantTransacc: t?._count?._all ?? 0,
      cantLiquidaciones: liqDe.get(e.id)?._count?._all ?? 0,
    };
  });

  return res.json({ items, ...paginacion });
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
  // Una liquidación es plata saliendo hacia la escuela: quién la declaró
  // pagada, por cuánto y contra qué transacciones.
  await recordAuditLog({
    actorId: getActorId(req as never),
    action: "comision.liquidada",
    targetType: "LiquidacionEscuela",
    targetId: liquidacion.id,
    metadata: {
      escuelaId,
      periodo,
      metodo,
      montoLiquidado,
      transaccionIds: pendientes.map((t) => t.id as string),
    },
  });
  return res.json({ ok: true, liquidacion });
});

// ── GET /api/comisiones/admin/export.csv ────────────────────────
// Export contable de todas las transacciones (CSV).
comisiones.get("/api/comisiones/admin/export.csv", requireAdmin, async (_req, res) => {
  const escuelas = await prisma.escuela.findMany({ select: { id: true, name: true } });
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
    // PLAN-B Fase 4 — de qué pasarela vino el cobro y su referencia.
    // `provider_ref` es el mismo dato que `mp_payment_id` (se mantiene
    // esa columna para no romper exports/imports ya existentes que
    // dependan del nombre); para MP son iguales, para Cryptomus
    // `mp_payment_id` es en realidad su providerRef genérico.
    "provider",
    "provider_ref",
    "mp_payment_id",
  ];
  const esc = (v: unknown) => {
    const s = v === null || v === undefined ? "" : String(v);
    return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  const lines = [header.join(",")];
  // Se lee de a 1000 filas para no cargar toda la tabla de una vez.
  const LOTE = 1000;
  for (let skip = 0; ; skip += LOTE) {
    const lote = await prisma.transaccionEscuela.findMany({
      orderBy: [{ createdAt: "desc" }, { id: "asc" }],
      take: LOTE,
      skip,
    });
    for (const t of lote) {
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
          t.provider ?? "mercadopago",
          t.mpPaymentId ?? "",
          t.mpPaymentId ?? "",
        ]
          .map(esc)
          .join(","),
      );
    }
    if (lote.length < LOTE) break;
  }
  res.setHeader("Content-Type", "text/csv; charset=utf-8");
  res.setHeader("Content-Disposition", 'attachment; filename="comisiones.csv"');
  return res.send(lines.join("\n"));
});
