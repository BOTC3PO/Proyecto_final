import { Router } from "express";
import { prisma } from "../lib/prisma";
import { generateId } from "../lib/ids";
import { requireUser } from "../lib/user-auth";
import { hasRole } from "../lib/roles";
import { recordAuditLog } from "../lib/audit-log";
import { perteneceAEscuela } from "../lib/pertenece-escuela";

export const moderacion = Router();

type ReqUser = { id?: string; role?: string; roles?: string[]; schoolId?: string | null };

/**
 * Alcance de moderación del que llama.
 *
 * `null` = global (admin de plataforma, que no pertenece a ninguna escuela).
 * Un id = sólo esa escuela.
 *
 * Estos endpoints no filtraban por escuela en absoluto: era coherente
 * mientras el único que llegaba acá era el admin de plataforma, pero deja
 * de serlo apenas exista un rol de escuela con acceso a moderación —
 * sancionaría alumnos de escuelas ajenas. El alcance se resuelve acá, una
 * vez, para que agregar ese rol sea sólo abrir la puerta de entrada.
 */
export const alcanceModeracion = (user: ReqUser | undefined): string | null => {
  if (hasRole(user, "ADMIN")) return null;
  return user?.schoolId ?? null;
};

/** `where` de escuela, vacío cuando el alcance es global. */
const whereEscuela = (escuelaId: string | null) => (escuelaId ? { escuelaId } : {});

/**
 * Sancionar a alguien de otra escuela es el peor caso de este archivo, así
 * que se verifica contra la pertenencia real del destinatario, no contra lo
 * que venga en el request.
 */
export const puedeSancionar = async (escuelaId: string | null, usuarioId: string): Promise<boolean> => {
  if (!escuelaId) return true; // admin de plataforma
  return perteneceAEscuela(escuelaId, usuarioId);
};

const clampLimit = (value: string | undefined) => {
  const parsed = Number(value ?? 20);
  if (Number.isNaN(parsed) || parsed <= 0) return 20;
  return Math.min(parsed, 100);
};

/**
 * PLAN-roles-v3 A1 — entran el ADMIN de plataforma (alcance global) y el
 * ADMIN_ESCUELA (acotado a la suya por `alcanceModeracion`). Antes era
 * `requireAdmin` a secas; el confinamiento ya estaba puesto esperando esto.
 */
moderacion.use("/api/moderacion", requireUser, (req, res, next) => {
  const user = req.user as ReqUser | undefined;
  if (hasRole(user, "ADMIN") || hasRole(user, "ADMIN_ESCUELA")) return next();
  return res.status(403).json({ error: "sin permiso de moderación" });
});

moderacion.get("/api/moderacion/clases-publicas", async (req, res) => {
  const limit = clampLimit(req.query.limit as string | undefined);
  const offset = Number(req.query.offset ?? 0);
  const escuelaId = alcanceModeracion(req.user as ReqUser | undefined);
  const items = await prisma.clase.findMany({
    where: {
      isDeleted: false,
      status: "ACTIVE",
      ...whereEscuela(escuelaId),
    },
    skip: Number.isNaN(offset) || offset < 0 ? 0 : offset,
    take: limit,
    orderBy: { updatedAt: "desc" },
  });
  res.json({ items, limit, offset });
});

moderacion.get("/api/moderacion/mensajes-reportados", async (req, res) => {
  const limit = clampLimit(req.query.limit as string | undefined);
  const offset = Number(req.query.offset ?? 0);
  const escuelaId = alcanceModeracion(req.user as ReqUser | undefined);
  const estado = typeof req.query.estado === "string" && req.query.estado ? req.query.estado : undefined;
  const items = await prisma.mensajeReportado.findMany({
    where: { ...whereEscuela(escuelaId), ...(estado ? { estado } : {}) },
    skip: Number.isNaN(offset) || offset < 0 ? 0 : offset,
    take: limit,
    orderBy: { createdAt: "desc" }
  });
  res.json({ items, limit, offset });
});

// Resolver un reporte: "revisado" (se tomó una medida o se dejó constancia) o "descartado".
// La sanción al autor, si corresponde, se aplica con los endpoints de advertencia y ban.
moderacion.post("/api/moderacion/mensajes-reportados/:id/resolver", async (req, res) => {
  const escuelaId = alcanceModeracion(req.user as ReqUser | undefined);
  const reporte = await prisma.mensajeReportado.findFirst({ where: { id: String(req.params.id) } });
  // Un reporte de otra escuela se trata como inexistente.
  if (!reporte || (escuelaId && reporte.escuelaId !== escuelaId)) {
    return res.status(404).json({ error: "reporte no encontrado" });
  }
  const estado = req.body?.estado;
  if (estado !== "revisado" && estado !== "descartado") {
    return res.status(400).json({ error: "estado debe ser revisado o descartado" });
  }
  const resolucion = typeof req.body?.resolucion === "string" ? req.body.resolucion.trim().slice(0, 500) : "";
  const ahora = new Date().toISOString();
  const r = await prisma.mensajeReportado.updateMany({
    where: { id: reporte.id, estado: "pendiente" },
    data: {
      estado,
      resolucion: resolucion || null,
      resueltoPor: (req.user as ReqUser | undefined)?.id ?? "desconocido",
      resueltoAt: ahora
    }
  });
  if (r.count !== 1) return res.status(409).json({ error: "el reporte ya fue resuelto" });
  await recordAuditLog({
    actorId: (req.user as ReqUser | undefined)?.id ?? "desconocido",
    action: "moderacion.mensaje_reportado.resolver",
    targetType: "MensajeReportado",
    targetId: reporte.id,
    metadata: { estado, alcance: escuelaId }
  });
  res.json({ ok: true });
});

moderacion.post("/api/moderacion/usuarios/:id/ban", async (req, res) => {
  const userId = req.params.id;
  if (!userId) return res.status(400).json({ error: "invalid user id" });
  const escuelaId = alcanceModeracion(req.user as ReqUser | undefined);
  if (!(await puedeSancionar(escuelaId, userId))) {
    return res.status(403).json({
      error: "ese usuario no pertenece a tu escuela",
      code: "FUERA_DE_ALCANCE"
    });
  }
  if (userId === (req.user as ReqUser | undefined)?.id) {
    return res.status(400).json({ error: "no podés banearte a vos mismo" });
  }
  const now = new Date();
  const motivo = typeof req.body?.motivo === "string" ? req.body.motivo.trim() : "";
  const duracionDias = Number(req.body?.duracionDias ?? 0);
  const bannedUntil = Number.isFinite(duracionDias) && duracionDias > 0
    ? new Date(now.getTime() + duracionDias * 24 * 60 * 60 * 1000).toISOString()
    : null;
  await prisma.moderacionEvento.create({
    data: {
      id: generateId(),
      usuarioId: userId,
      tipo: "ban",
      motivo: motivo || null,
      severidad: null,
      createdAt: now.toISOString(),
    },
  });
  await prisma.usuario.updateMany({
    where: { id: userId },
    data: { isBanned: true, bannedAt: now.toISOString(), bannedUntil, updatedAt: now.toISOString() }
  });
  // El access token vigente deja de servir en el próximo pedido (requireUser mira la base);
  // además se cortan los refresh para que no pueda renovar la sesión.
  await prisma.refreshToken.updateMany({ where: { userId, revoked: false }, data: { revoked: true } });
  await recordAuditLog({
    actorId: (req.user as ReqUser | undefined)?.id ?? "desconocido",
    action: "moderacion.ban",
    targetType: "Usuario",
    targetId: userId,
    metadata: { motivo: motivo || null, duracionDias, bannedUntil, alcance: escuelaId }
  });
  res.status(201).json({ ok: true, bannedUntil });
});

moderacion.post("/api/moderacion/usuarios/:id/desbanear", async (req, res) => {
  const userId = req.params.id;
  if (!userId) return res.status(400).json({ error: "invalid user id" });
  const escuelaId = alcanceModeracion(req.user as ReqUser | undefined);
  if (!(await puedeSancionar(escuelaId, userId))) {
    return res.status(403).json({
      error: "ese usuario no pertenece a tu escuela",
      code: "FUERA_DE_ALCANCE"
    });
  }
  const now = new Date().toISOString();
  const motivo = typeof req.body?.motivo === "string" ? req.body.motivo.trim() : "";
  await prisma.usuario.updateMany({
    where: { id: userId },
    data: { isBanned: false, bannedAt: null, bannedUntil: null, updatedAt: now }
  });
  await prisma.moderacionEvento.create({
    data: {
      id: generateId(),
      usuarioId: userId,
      tipo: "desban",
      motivo: motivo || null,
      severidad: null,
      createdAt: now,
    },
  });
  await recordAuditLog({
    actorId: (req.user as ReqUser | undefined)?.id ?? "desconocido",
    action: "moderacion.desban",
    targetType: "Usuario",
    targetId: userId,
    metadata: { motivo: motivo || null, alcance: escuelaId }
  });
  res.json({ ok: true });
});

moderacion.post("/api/moderacion/usuarios/:id/advertencias", async (req, res) => {
  const userId = req.params.id;
  if (!userId) return res.status(400).json({ error: "invalid user id" });
  const escuelaId = alcanceModeracion(req.user as ReqUser | undefined);
  if (!(await puedeSancionar(escuelaId, userId))) {
    return res.status(403).json({
      error: "ese usuario no pertenece a tu escuela",
      code: "FUERA_DE_ALCANCE"
    });
  }
  const now = new Date();
  const motivo = typeof req.body?.motivo === "string" ? req.body.motivo.trim() : "";
  const severidad = typeof req.body?.severidad === "string" ? req.body.severidad.trim() : "";
  await prisma.moderacionEvento.create({
    data: {
      id: generateId(),
      usuarioId: userId,
      tipo: "advertencia",
      motivo: motivo || null,
      severidad: severidad || null,
      createdAt: now.toISOString(),
    },
  });
  // El motivo y la severidad quedan en el evento de moderación; en el usuario solo se
  // lleva la cuenta (columna `warning_count`, la que muestran el perfil y el panel).
  await prisma.usuario.updateMany({
    where: { id: userId },
    data: { warningCount: { increment: 1 }, updatedAt: now.toISOString() }
  });
  await recordAuditLog({
    actorId: (req.user as ReqUser | undefined)?.id ?? "desconocido",
    action: "moderacion.advertencia",
    targetType: "Usuario",
    targetId: userId,
    metadata: { motivo: motivo || null, severidad: severidad || null, alcance: escuelaId }
  });
  res.status(201).json({ ok: true });
});
