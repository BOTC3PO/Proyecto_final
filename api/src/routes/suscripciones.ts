import { Router } from "express";
import {
  crearPreapproval,
  cancelarPreapproval,
  getPreapproval,
  verificarWebhookMP,
} from "../lib/mercadopago";
import { requireUser } from "../lib/user-auth";
import { requireAdmin } from "../lib/admin-auth";
import { ENV } from "../lib/env";
import {
  getLimitesEscuela,
  getSuscripcionActiva,
  calcularMontoEscuela,
  tieneMultiplicadorActivo,
  LIMITES_GRATUITOS,
  EXPANSION_UNIDADES,
} from "../lib/suscripciones";
import { prisma } from "../lib/prisma";

export const suscripciones = Router();

const getId = (req: { user?: { id?: string; _id?: { toString?: () => string } } }) =>
  req.user?.id ?? req.user?._id?.toString?.() ?? null;

const getSchoolId = (req: { user?: { schoolId?: string | null } }) =>
  req.user?.schoolId ?? null;

const getRole = (req: { user?: { role?: string } }) =>
  req.user?.role ?? null;

const genId = () => `sub-${Date.now()}-${Math.random().toString(16).slice(2)}`;
const genPayId = () => `pay-${Date.now()}-${Math.random().toString(16).slice(2)}`;

// ── GET /api/suscripciones/limites ──────────────────────────
suscripciones.get("/api/suscripciones/limites", requireUser, async (req, res) => {
  const schoolId = getSchoolId(req as never);
  const role = getRole(req as never);
  if (!schoolId) return res.json({ limites: LIMITES_GRATUITOS, esAdmin: false });
  const limites = await getLimitesEscuela(schoolId, role ?? undefined);
  return res.json({ limites, esAdmin: role === "ADMIN" });
});

// ── GET /api/suscripciones/estado ───────────────────────────
suscripciones.get("/api/suscripciones/estado", requireUser, async (req, res) => {
  const userId = getId(req as never);
  const schoolId = getSchoolId(req as never);
  const role = getRole(req as never);
  if (!userId) return res.status(401).json({ error: "no autenticado" });

  const entidadTipo =
    role === "USER" ? "alumno"
    : role === "TEACHER" ? "profesor"
    : null;

  const [suscripcionPersonal, suscripcionEscuela, multiplicador] = await Promise.all([
    entidadTipo ? getSuscripcionActiva(entidadTipo, userId) : Promise.resolve(null),
    schoolId ? getSuscripcionActiva("escuela", schoolId) : Promise.resolve(null),
    tieneMultiplicadorActivo(userId),
  ]);

  return res.json({
    personal: suscripcionPersonal,
    escuela: suscripcionEscuela,
    multiplicador,
    paymentsEnabled: ENV.PAYMENTS_ENABLED,
  });
});

// ── GET /api/suscripciones/historial ────────────────────────
suscripciones.get("/api/suscripciones/historial", requireUser, async (req, res) => {
  const userId = getId(req as never);
  const role = getRole(req as never);
  if (!userId) return res.status(401).json({ error: "no autenticado" });

  const entidadTipo =
    role === "USER" ? "alumno"
    : role === "TEACHER" ? "profesor"
    : role === "DIRECTIVO" ? "escuela"
    : null;

  if (!entidadTipo) return res.json({ items: [] });

  const entidadId =
    entidadTipo === "escuela"
      ? (getSchoolId(req as never) ?? userId)
      : userId;

  const items = await prisma.historialPago.findMany({
    where: { entidadTipo, entidadId },
    orderBy: { createdAt: "desc" },
    take: 24,
  });

  return res.json({ items });
});

// ── POST /api/suscripciones/cancelar ────────────────────────
suscripciones.post("/api/suscripciones/cancelar", requireUser, async (req, res) => {
  const userId = getId(req as never);
  const role = getRole(req as never);
  const { suscripcionId } = req.body as { suscripcionId?: string };
  if (!userId) return res.status(401).json({ error: "no autenticado" });
  if (!suscripcionId) return res.status(400).json({ error: "suscripcionId requerido" });

  const sub = await prisma.suscripcion.findUnique({ where: { id: suscripcionId } });
  if (!sub) return res.status(404).json({ error: "suscripción no encontrada" });
  if (sub.estado !== "activa") return res.status(400).json({ error: "la suscripción no está activa" });

  const esAdmin = role === "ADMIN";
  const esDueno =
    sub.entidadId === userId ||
    (sub.entidadTipo === "escuela" && sub.entidadId === getSchoolId(req as never));

  if (!esAdmin && !esDueno) return res.status(403).json({ error: "sin permiso" });

  const now = new Date().toISOString();
  await prisma.suscripcion.update({
    where: { id: suscripcionId },
    data: { estado: "cancelada", canceladaAt: now, canceladaBy: userId, updatedAt: now },
  });

  if (sub.mpPreapprovalId && ENV.PAYMENTS_ENABLED) {
    try { await cancelarPreapproval(sub.mpPreapprovalId); } catch { /* ignorar */ }
  }

  return res.json({
    ok: true,
    mensaje: "Suscripción cancelada. El acceso se mantiene hasta el fin del período.",
    periodoFin: sub.periodoFin,
  });
});

// ── POST /api/suscripciones/reembolso ───────────────────────
// REEMBOLSO MANUAL (decisión de diseño, ver docs/pagos/reembolsos.md):
// este endpoint NO reembolsa por la API de MercadoPago. Solo registra la
// solicitud (reembolsoSolicitado=1) dentro de la ventana de 7 días; un admin
// la procesa manualmente desde el panel de MP y luego marca el pago. La
// automatización (refund vía API de MP + corte de renovación con
// cancelarPreapproval) queda como roadmap, no implementada acá.
suscripciones.post("/api/suscripciones/reembolso", requireUser, async (req, res) => {
  const userId = getId(req as never);
  const { suscripcionId } = req.body as { suscripcionId?: string };
  if (!userId) return res.status(401).json({ error: "no autenticado" });
  if (!suscripcionId) return res.status(400).json({ error: "suscripcionId requerido" });

  const sub = await prisma.suscripcion.findUnique({ where: { id: suscripcionId } });
  if (!sub) return res.status(404).json({ error: "no encontrada" });

  const ultimoPago = await prisma.historialPago.findFirst({
    where: { suscripcionId, estado: "pagado" },
    orderBy: { createdAt: "desc" },
    select: { createdAt: true },
  });

  if (!ultimoPago) return res.status(400).json({ error: "no hay pagos registrados" });

  const diasDesdeUltimoPago = Math.floor(
    (Date.now() - new Date(ultimoPago.createdAt).getTime()) / (1000 * 60 * 60 * 24)
  );

  if (diasDesdeUltimoPago > 7) {
    return res.status(400).json({
      error: `Fuera de la ventana de reembolso (${diasDesdeUltimoPago} días desde el último pago, máximo 7).`,
    });
  }

  if (sub.reembolsoSolicitado) return res.status(400).json({ error: "reembolso ya solicitado" });

  const now = new Date().toISOString();
  await prisma.suscripcion.update({
    where: { id: suscripcionId },
    data: { reembolsoSolicitado: 1, reembolsoAt: now, updatedAt: now },
  });

  return res.json({
    ok: true,
    mensaje: "Solicitud de reembolso registrada. Un administrador la procesará en breve.",
  });
});

// ── GET /api/admin/suscripciones ────────────────────────────
suscripciones.get("/api/admin/suscripciones", requireAdmin, async (req, res) => {
  const estado = typeof req.query.estado === "string" ? req.query.estado : undefined;
  const tipo = typeof req.query.tipo === "string" ? req.query.tipo : undefined;

  const items = await prisma.suscripcion.findMany({
    where: {
      ...(estado ? { estado } : {}),
      ...(tipo ? { entidadTipo: tipo } : {}),
    },
    orderBy: { createdAt: "desc" },
    take: 100,
  });

  return res.json({ items });
});

// ── POST /api/admin/suscripciones/activar ───────────────────
suscripciones.post("/api/admin/suscripciones/activar", requireAdmin, async (req, res) => {
  const { entidadTipo, entidadId, plan, monto, expansiones, meses } =
    req.body as Record<string, unknown>;

  if (!entidadTipo || !entidadId) {
    return res.status(400).json({ error: "entidadTipo y entidadId requeridos" });
  }

  const now = new Date();
  const periodoInicio = now.toISOString();
  const periodoFin = new Date(
    now.getFullYear(),
    now.getMonth() + (typeof meses === "number" ? meses : 1),
    now.getDate()
  ).toISOString();

  const id = genId();
  await prisma.suscripcion.create({
    data: {
      id,
      entidadTipo: String(entidadTipo),
      entidadId: String(entidadId),
      plan: typeof plan === "string" ? plan : "pago",
      estado: "activa",
      periodoInicio,
      periodoFin,
      montoMensual: typeof monto === "number" ? monto : 0,
      moneda: "ARS",
      expansiones: typeof expansiones === "number" ? expansiones : 0,
      createdAt: periodoInicio,
      updatedAt: periodoInicio,
    },
  });

  if (entidadTipo === "escuela" && typeof expansiones === "number") {
    const maxAulas = LIMITES_GRATUITOS.max_aulas + expansiones * EXPANSION_UNIDADES.aulas;
    const maxAlumnos = LIMITES_GRATUITOS.max_alumnos_por_aula +
      expansiones * EXPANSION_UNIDADES.alumnos_por_aula;

    await prisma.limiteEscuela.upsert({
      where: { escuelaId: String(entidadId) },
      create: {
        escuelaId: String(entidadId),
        maxProfesores: LIMITES_GRATUITOS.max_profesores,
        maxDirectivos: LIMITES_GRATUITOS.max_directivos,
        maxAulas,
        maxAlumnosPorAula: maxAlumnos,
        updatedAt: periodoInicio,
      },
      update: { maxAulas, maxAlumnosPorAula: maxAlumnos, updatedAt: periodoInicio },
    });
  }

  return res.status(201).json({ id, ok: true });
});

// ── GET /api/admin/suscripciones/reembolsos ─────────────────
suscripciones.get("/api/admin/suscripciones/reembolsos", requireAdmin, async (_req, res) => {
  const items = await prisma.suscripcion.findMany({
    where: { reembolsoSolicitado: 1 },
    orderBy: { reembolsoAt: "asc" },
  });
  return res.json({ items });
});

// ── POST /api/suscripciones/iniciar ─────────────────────────
suscripciones.post("/api/suscripciones/iniciar", requireUser, async (req, res) => {
  if (!ENV.PAYMENTS_ENABLED) {
    return res.status(403).json({
      error: "pagos_deshabilitados",
      mensaje: "Este sistema no tiene pagos habilitados. Contactá al administrador.",
    });
  }

  const userId = getId(req as never);
  const role = getRole(req as never);
  const schoolId = getSchoolId(req as never);
  if (!userId) return res.status(401).json({ error: "no autenticado" });

  const { tipo, expansiones, payerEmail, backUrl } = req.body as Record<string, unknown>;
  if (!tipo || !payerEmail) return res.status(400).json({ error: "tipo y payerEmail requeridos" });

  const entidadTipo = String(tipo) as "escuela" | "profesor" | "alumno";
  const entidadId = entidadTipo === "escuela" ? (schoolId ?? userId) : userId;

  let monto = 0;
  let titulo = "";
  if (entidadTipo === "alumno") {
    monto = ENV.PRECIO_ALUMNO_MENSUAL;
    titulo = "Virtual Book — Suscripción Alumno";
  } else if (entidadTipo === "profesor") {
    const exp = typeof expansiones === "number" ? expansiones : 1;
    monto = exp * ENV.PRECIO_EXPANSION_PROFESOR;
    titulo = `Virtual Book — Suscripción Profesor (${exp} expansión/es)`;
  } else if (entidadTipo === "escuela") {
    monto = ENV.PRECIO_STAFF_MENSUAL;
    titulo = "Virtual Book — Suscripción Escuela";
  }

  if (monto <= 0) return res.status(400).json({ error: "monto inválido" });

  try {
    const externalRef = `${entidadTipo}:${entidadId}:${Date.now()}`;
    const preapproval = await crearPreapproval({
      payerEmail: String(payerEmail),
      externalReference: externalRef,
      titulo,
      montoMensual: monto,
      backUrl: typeof backUrl === "string" ? backUrl : `${ENV.APP_URL}/perfil`,
    });

    const now = new Date().toISOString();
    // Al crear todavía no hay next_payment_date de MP: usamos +1 mes calendario.
    const periodoFin = (() => { const d = new Date(); d.setMonth(d.getMonth() + 1); return d.toISOString(); })();
    const id = genId();

    await prisma.suscripcion.create({
      data: {
        id,
        entidadTipo,
        entidadId,
        plan: "pago",
        estado: "pendiente",
        mpPreapprovalId: preapproval.id,
        mpPayerEmail: String(payerEmail),
        periodoInicio: now,
        periodoFin,
        montoMensual: monto,
        moneda: "ARS",
        expansiones: typeof expansiones === "number" ? expansiones : 0,
        createdAt: now,
        updatedAt: now,
      },
    });

    return res.status(201).json({
      suscripcionId: id,
      initPoint: preapproval.init_point,
      preapprovalId: preapproval.id,
    });
  } catch (err) {
    return res.status(500).json({
      error: err instanceof Error ? err.message : "error al crear suscripción",
    });
  }
});

// ── POST /api/suscripciones/webhook ─────────────────────────
suscripciones.post("/api/suscripciones/webhook", async (req, res) => {
  const xSignature = String(req.headers["x-signature"] ?? "");
  const xRequestId = String(req.headers["x-request-id"] ?? "");
  const dataId = String((req.query as Record<string, string>)["data.id"] ?? "");

  if (!verificarWebhookMP(xSignature, xRequestId, dataId)) {
    return res.status(401).json({ error: "firma inválida" });
  }

  const { type, action, data } = req.body as {
    type?: string; action?: string; data?: { id?: string };
  };

  if (type !== "subscription_preapproval" || !data?.id) return res.status(200).json({ ok: true });

  const sub = await prisma.suscripcion.findFirst({
    where: { mpPreapprovalId: data.id },
  });
  if (!sub) return res.status(200).json({ ok: true });

  const now = new Date().toISOString();

  if (action === "updated") {
    // Consultar el estado REAL del preapproval en MP antes de acreditar.
    // No alcanza con que MP nos avise "updated": hay que verificar que esté
    // authorized, si no podríamos acreditar pagos que MP rechazó/pausó.
    const pre = await getPreapproval(data.id);

    if (pre.status === "authorized") {
      const periodoInicio = now;
      // Período = próximo cobro real que informa MP; si no viene, +1 mes calendario.
      const periodoFin = pre.next_payment_date
        ? new Date(pre.next_payment_date).toISOString()
        : (() => { const d = new Date(); d.setMonth(d.getMonth() + 1); return d.toISOString(); })();

      await prisma.suscripcion.update({
        where: { id: sub.id },
        data: { estado: "activa", periodoInicio, periodoFin, updatedAt: now },
      });

      await prisma.historialPago.create({
        data: {
          id: genPayId(),
          suscripcionId: sub.id,
          entidadTipo: sub.entidadTipo,
          entidadId: sub.entidadId,
          monto: sub.montoMensual,
          moneda: "ARS",
          estado: "pagado",
          mpPaymentId: data.id,
          periodoInicio,
          periodoFin,
          createdAt: now,
        },
      });

      if (sub.entidadTipo === "escuela" && sub.expansiones > 0) {
        await prisma.limiteEscuela.upsert({
          where: { escuelaId: sub.entidadId },
          create: {
            escuelaId: sub.entidadId,
            maxProfesores: LIMITES_GRATUITOS.max_profesores,
            maxDirectivos: LIMITES_GRATUITOS.max_directivos,
            maxAulas: LIMITES_GRATUITOS.max_aulas + sub.expansiones * EXPANSION_UNIDADES.aulas,
            maxAlumnosPorAula: LIMITES_GRATUITOS.max_alumnos_por_aula +
              sub.expansiones * EXPANSION_UNIDADES.alumnos_por_aula,
            updatedAt: now,
          },
          update: {
            maxAulas: LIMITES_GRATUITOS.max_aulas + sub.expansiones * EXPANSION_UNIDADES.aulas,
            maxAlumnosPorAula: LIMITES_GRATUITOS.max_alumnos_por_aula +
              sub.expansiones * EXPANSION_UNIDADES.alumnos_por_aula,
            updatedAt: now,
          },
        });
      }
    } else if (pre.status === "paused" || pre.status === "pending") {
      // No acreditar: reflejar el estado real sin registrar pago.
      await prisma.suscripcion.update({
        where: { id: sub.id },
        data: { estado: pre.status === "paused" ? "pausada" : "pendiente", updatedAt: now },
      });
    } else if (pre.status === "cancelled" || pre.status === "expired") {
      await prisma.suscripcion.update({
        where: { id: sub.id },
        data: { estado: "cancelada", canceladaAt: now, updatedAt: now },
      });
    }
  } else if (action === "deleted" || action === "cancelled") {
    await prisma.suscripcion.update({
      where: { id: sub.id },
      data: { estado: "cancelada", canceladaAt: now, updatedAt: now },
    });
  }

  return res.status(200).json({ ok: true });
});

// Suppress unused-variable warnings for helpers declared but not yet used
void calcularMontoEscuela;
