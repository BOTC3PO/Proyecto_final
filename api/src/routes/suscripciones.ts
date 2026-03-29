import { Router } from "express";
import { openContentDb } from "../lib/db-open";
import {
  crearPreapproval,
  cancelarPreapproval,
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
  type Suscripcion,
} from "../lib/suscripciones";

export const suscripciones = Router();

const getId = (req: { user?: { id?: string; _id?: { toString?: () => string } } }) =>
  req.user?.id ?? req.user?._id?.toString?.() ?? null;

const getSchoolId = (req: { user?: { schoolId?: string | null } }) =>
  req.user?.schoolId ?? null;

const getRole = (req: { user?: { role?: string } }) =>
  req.user?.role ?? null;

const genId = () =>
  `sub-${Date.now()}-${Math.random().toString(16).slice(2)}`;

const genPayId = () =>
  `pay-${Date.now()}-${Math.random().toString(16).slice(2)}`;

// ── GET /api/suscripciones/limites ──────────────────────────
// Retorna los límites actuales de la escuela del usuario
suscripciones.get(
  "/api/suscripciones/limites",
  requireUser,
  (req, res) => {
    const schoolId = getSchoolId(req as never);
    const role = getRole(req as never);
    if (!schoolId) {
      return res.json({ limites: LIMITES_GRATUITOS, esAdmin: false });
    }
    const limites = getLimitesEscuela(schoolId, role ?? undefined);
    const esAdmin = role === "ADMIN";
    return res.json({ limites, esAdmin });
  }
);

// ── GET /api/suscripciones/estado ───────────────────────────
// Retorna la suscripción activa del usuario autenticado
suscripciones.get(
  "/api/suscripciones/estado",
  requireUser,
  (req, res) => {
    const userId = getId(req as never);
    const schoolId = getSchoolId(req as never);
    const role = getRole(req as never);
    if (!userId) return res.status(401).json({ error: "no autenticado" });

    // Suscripción personal (alumno o profesor)
    const entidadTipo =
      role === "USER" ? "alumno"
      : role === "TEACHER" ? "profesor"
      : null;

    const suscripcionPersonal = entidadTipo
      ? getSuscripcionActiva(entidadTipo, userId)
      : null;

    // Suscripción de la escuela
    const suscripcionEscuela = schoolId
      ? getSuscripcionActiva("escuela", schoolId)
      : null;

    const multiplicador = tieneMultiplicadorActivo(userId);

    return res.json({
      personal: suscripcionPersonal,
      escuela: suscripcionEscuela,
      multiplicador,
      paymentsEnabled: ENV.PAYMENTS_ENABLED,
    });
  }
);

// ── GET /api/suscripciones/historial ────────────────────────
suscripciones.get(
  "/api/suscripciones/historial",
  requireUser,
  (req, res) => {
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

    const db = openContentDb();
    const items = db.prepare(`
      SELECT * FROM historial_pagos
      WHERE entidad_tipo = ? AND entidad_id = ?
      ORDER BY created_at DESC
      LIMIT 24
    `).all(entidadTipo, entidadId);

    return res.json({ items });
  }
);

// ── POST /api/suscripciones/cancelar ────────────────────────
suscripciones.post(
  "/api/suscripciones/cancelar",
  requireUser,
  async (req, res) => {
    const userId = getId(req as never);
    const role = getRole(req as never);
    const { suscripcionId } = req.body as { suscripcionId?: string };
    if (!userId) return res.status(401).json({ error: "no autenticado" });
    if (!suscripcionId) return res.status(400).json({ error: "suscripcionId requerido" });

    const db = openContentDb();
    const sub = db.prepare(
      "SELECT * FROM suscripciones WHERE id = ?"
    ).get(suscripcionId) as Suscripcion | undefined;

    if (!sub) return res.status(404).json({ error: "suscripción no encontrada" });
    if (sub.estado !== "activa") {
      return res.status(400).json({ error: "la suscripción no está activa" });
    }

    // Verificar que el usuario es dueño o admin
    const esAdmin = role === "ADMIN";
    const esDueno =
      sub.entidad_id === userId ||
      (sub.entidad_tipo === "escuela" && sub.entidad_id === getSchoolId(req as never));

    if (!esAdmin && !esDueno) {
      return res.status(403).json({ error: "sin permiso" });
    }

    const now = new Date().toISOString();
    db.prepare(`
      UPDATE suscripciones
      SET estado = 'cancelada', cancelada_at = ?, cancelada_by = ?, updated_at = ?
      WHERE id = ?
    `).run(now, userId, now, suscripcionId);

    // Cancelar en MercadoPago si tiene preapproval
    if (sub.mp_preapproval_id && ENV.PAYMENTS_ENABLED) {
      try {
        await cancelarPreapproval(sub.mp_preapproval_id);
      } catch { /* ignorar error de MP */ }
    }

    return res.json({
      ok: true,
      mensaje: "Suscripción cancelada. El acceso se mantiene hasta el fin del período.",
      periodoFin: sub.periodo_fin,
    });
  }
);

// ── POST /api/suscripciones/reembolso ───────────────────────
suscripciones.post(
  "/api/suscripciones/reembolso",
  requireUser,
  (req, res) => {
    const userId = getId(req as never);
    const { suscripcionId } = req.body as { suscripcionId?: string };
    if (!userId) return res.status(401).json({ error: "no autenticado" });
    if (!suscripcionId) return res.status(400).json({ error: "suscripcionId requerido" });

    const db = openContentDb();
    const sub = db.prepare(
      "SELECT * FROM suscripciones WHERE id = ?"
    ).get(suscripcionId) as Suscripcion | undefined;

    if (!sub) return res.status(404).json({ error: "no encontrada" });

    // Verificar ventana de 7 días desde el último pago
    const ultimoPago = db.prepare(`
      SELECT created_at FROM historial_pagos
      WHERE suscripcion_id = ? AND estado = 'pagado'
      ORDER BY created_at DESC LIMIT 1
    `).get(suscripcionId) as { created_at: string } | undefined;

    if (!ultimoPago) {
      return res.status(400).json({ error: "no hay pagos registrados" });
    }

    const diasDesdeUltimoPago = Math.floor(
      (Date.now() - new Date(ultimoPago.created_at).getTime()) /
      (1000 * 60 * 60 * 24)
    );

    if (diasDesdeUltimoPago > 7) {
      return res.status(400).json({
        error: `Fuera de la ventana de reembolso (${diasDesdeUltimoPago} días desde el último pago, máximo 7).`,
      });
    }

    if (sub.reembolso_solicitado) {
      return res.status(400).json({ error: "reembolso ya solicitado" });
    }

    const now = new Date().toISOString();
    db.prepare(`
      UPDATE suscripciones
      SET reembolso_solicitado = 1, reembolso_at = ?, updated_at = ?
      WHERE id = ?
    `).run(now, now, suscripcionId);

    return res.json({
      ok: true,
      mensaje: "Solicitud de reembolso registrada. Un administrador la procesará en breve.",
    });
  }
);

// ── GET /api/admin/suscripciones ────────────────────────────
// Solo admin — ver todas las suscripciones
suscripciones.get(
  "/api/admin/suscripciones",
  requireAdmin,
  (req, res) => {
    const db = openContentDb();
    const estado = typeof req.query.estado === "string"
      ? req.query.estado : null;
    const tipo = typeof req.query.tipo === "string"
      ? req.query.tipo : null;

    let query = "SELECT * FROM suscripciones WHERE 1=1";
    const params: string[] = [];

    if (estado) { query += " AND estado = ?"; params.push(estado); }
    if (tipo) { query += " AND entidad_tipo = ?"; params.push(tipo); }

    query += " ORDER BY created_at DESC LIMIT 100";

    const items = db.prepare(query).all(...params);
    return res.json({ items });
  }
);

// ── POST /api/admin/suscripciones/activar ───────────────────
// Admin activa manualmente una suscripción (cuando PAYMENTS_ENABLED=false)
suscripciones.post(
  "/api/admin/suscripciones/activar",
  requireAdmin,
  (req, res) => {
    const {
      entidadTipo, entidadId, plan, monto,
      expansiones, meses
    } = req.body as Record<string, unknown>;

    if (!entidadTipo || !entidadId) {
      return res.status(400).json({ error: "entidadTipo y entidadId requeridos" });
    }

    const db = openContentDb();
    const now = new Date();
    const periodoInicio = now.toISOString();
    const periodoFin = new Date(
      now.getFullYear(),
      now.getMonth() + (typeof meses === "number" ? meses : 1),
      now.getDate()
    ).toISOString();

    const id = genId();
    db.prepare(`
      INSERT INTO suscripciones (
        id, entidad_tipo, entidad_id, plan, estado,
        periodo_inicio, periodo_fin, monto_mensual, moneda,
        expansiones, created_at, updated_at
      ) VALUES (?, ?, ?, ?, 'activa', ?, ?, ?, 'ARS', ?, ?, ?)
    `).run(
      id,
      String(entidadTipo),
      String(entidadId),
      typeof plan === "string" ? plan : "pago",
      periodoInicio,
      periodoFin,
      typeof monto === "number" ? monto : 0,
      typeof expansiones === "number" ? expansiones : 0,
      periodoInicio,
      periodoInicio,
    );

    // Si es escuela, actualizar límites
    if (entidadTipo === "escuela" && typeof expansiones === "number") {
      const maxAulas = LIMITES_GRATUITOS.max_aulas +
        expansiones * EXPANSION_UNIDADES.aulas;
      const maxAlumnos = LIMITES_GRATUITOS.max_alumnos_por_aula +
        expansiones * EXPANSION_UNIDADES.alumnos_por_aula;
      db.prepare(`
        INSERT OR REPLACE INTO limites_escuela
          (escuela_id, max_profesores, max_directivos,
           max_aulas, max_alumnos_por_aula, updated_at)
        VALUES (?, ?, ?, ?, ?, ?)
      `).run(
        String(entidadId),
        LIMITES_GRATUITOS.max_profesores,
        LIMITES_GRATUITOS.max_directivos,
        maxAulas,
        maxAlumnos,
        periodoInicio,
      );
    }

    return res.status(201).json({ id, ok: true });
  }
);

// ── GET /api/admin/suscripciones/reembolsos ─────────────────
// Admin procesa reembolsos pendientes
suscripciones.get(
  "/api/admin/suscripciones/reembolsos",
  requireAdmin,
  (_req, res) => {
    const db = openContentDb();
    const items = db.prepare(`
      SELECT * FROM suscripciones
      WHERE reembolso_solicitado = 1
      ORDER BY reembolso_at ASC
    `).all();
    return res.json({ items });
  }
);

// ── POST /api/suscripciones/iniciar ─────────────────────────
// Inicia el flujo de pago con MercadoPago
suscripciones.post(
  "/api/suscripciones/iniciar",
  requireUser,
  async (req, res) => {
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

    const {
      tipo,
      expansiones,
      payerEmail,
      backUrl,
    } = req.body as Record<string, unknown>;

    if (!tipo || !payerEmail) {
      return res.status(400).json({ error: "tipo y payerEmail requeridos" });
    }

    const entidadTipo = String(tipo) as "escuela" | "profesor" | "alumno";
    const entidadId =
      entidadTipo === "escuela" ? (schoolId ?? userId) : userId;

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

    if (monto <= 0) {
      return res.status(400).json({ error: "monto inválido" });
    }

    try {
      const externalRef = `${entidadTipo}:${entidadId}:${Date.now()}`;
      const preapproval = await crearPreapproval({
        payerEmail: String(payerEmail),
        externalReference: externalRef,
        titulo,
        montoMensual: monto,
        backUrl: typeof backUrl === "string"
          ? backUrl
          : "https://virtualbook.app/perfil",
      });

      const db = openContentDb();
      const now = new Date().toISOString();
      const periodoFin = new Date(
        Date.now() + 30 * 24 * 60 * 60 * 1000
      ).toISOString();

      const id = genId();
      db.prepare(`
        INSERT INTO suscripciones (
          id, entidad_tipo, entidad_id, plan, estado,
          mp_preapproval_id, mp_payer_email,
          periodo_inicio, periodo_fin,
          monto_mensual, moneda, expansiones,
          created_at, updated_at
        ) VALUES (?, ?, ?, 'pago', 'pendiente', ?, ?, ?, ?, ?, 'ARS', ?, ?, ?)
      `).run(
        id, entidadTipo, entidadId,
        preapproval.id,
        String(payerEmail),
        now, periodoFin,
        monto,
        typeof expansiones === "number" ? expansiones : 0,
        now, now
      );

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
  }
);

// ── POST /api/suscripciones/webhook ─────────────────────────
// Webhook de MercadoPago — actualiza estado de suscripciones
suscripciones.post(
  "/api/suscripciones/webhook",
  async (req, res) => {
    const xSignature = String(req.headers["x-signature"] ?? "");
    const xRequestId = String(req.headers["x-request-id"] ?? "");
    const dataId = String(
      (req.query as Record<string, string>)["data.id"] ?? ""
    );

    if (!verificarWebhookMP(xSignature, xRequestId, dataId)) {
      return res.status(401).json({ error: "firma inválida" });
    }

    const { type, action, data } = req.body as {
      type?: string;
      action?: string;
      data?: { id?: string };
    };

    if (type !== "subscription_preapproval" || !data?.id) {
      return res.status(200).json({ ok: true });
    }

    const db = openContentDb();
    const sub = db.prepare(`
      SELECT * FROM suscripciones WHERE mp_preapproval_id = ?
    `).get(data.id) as Suscripcion | undefined;

    if (!sub) return res.status(200).json({ ok: true });

    const now = new Date().toISOString();

    if (action === "updated") {
      const periodoInicio = now;
      const periodoFin = new Date(
        Date.now() + 30 * 24 * 60 * 60 * 1000
      ).toISOString();

      db.prepare(`
        UPDATE suscripciones
        SET estado = 'activa', periodo_inicio = ?,
            periodo_fin = ?, updated_at = ?
        WHERE mp_preapproval_id = ?
      `).run(periodoInicio, periodoFin, now, data.id);

      db.prepare(`
        INSERT INTO historial_pagos (
          id, suscripcion_id, entidad_tipo, entidad_id,
          monto, moneda, estado, mp_payment_id,
          periodo_inicio, periodo_fin, created_at
        ) VALUES (?, ?, ?, ?, ?, 'ARS', 'pagado', ?, ?, ?, ?)
      `).run(
        genPayId(), sub.id, sub.entidad_tipo, sub.entidad_id,
        sub.monto_mensual, data.id,
        periodoInicio, periodoFin, now
      );

      if (sub.entidad_tipo === "escuela" && sub.expansiones > 0) {
        db.prepare(`
          INSERT OR REPLACE INTO limites_escuela
            (escuela_id, max_profesores, max_directivos,
             max_aulas, max_alumnos_por_aula, updated_at)
          VALUES (?, ?, ?, ?, ?, ?)
        `).run(
          sub.entidad_id,
          LIMITES_GRATUITOS.max_profesores,
          LIMITES_GRATUITOS.max_directivos,
          LIMITES_GRATUITOS.max_aulas + sub.expansiones * EXPANSION_UNIDADES.aulas,
          LIMITES_GRATUITOS.max_alumnos_por_aula + sub.expansiones * EXPANSION_UNIDADES.alumnos_por_aula,
          now
        );
      }
    } else if (action === "deleted" || action === "cancelled") {
      db.prepare(`
        UPDATE suscripciones
        SET estado = 'cancelada', cancelada_at = ?, updated_at = ?
        WHERE mp_preapproval_id = ?
      `).run(now, now, data.id);
    }

    return res.status(200).json({ ok: true });
  }
);

// Suppress unused-variable warnings for helpers declared but not yet used
void calcularMontoEscuela;
