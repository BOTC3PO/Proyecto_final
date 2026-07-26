import { Router } from "express";
import { prisma } from "../lib/prisma";
import { generateId } from "../lib/ids";
import { requireUser } from "../lib/user-auth";
import { hasRole } from "../lib/roles";
import { recordAuditLog } from "../lib/audit-log";

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
  const membresia = await prisma.membresia.findFirst({
    where: { usuarioId, escuelaId, estado: "activa" }
  });
  if (membresia) return true;
  // Compat con filas anteriores al backfill de membresías.
  const usuario = await prisma.usuario.findFirst({ where: { id: usuarioId } });
  return usuario?.escuelaId === escuelaId;
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
  const items = await (prisma as any).mensajeReportado?.findMany({
    where: { ...whereEscuela(escuelaId) },
    skip: Number.isNaN(offset) || offset < 0 ? 0 : offset,
    take: limit,
    orderBy: { createdAt: "desc" }
  }) ?? [];
  res.json({ items, limit, offset });
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
  const now = new Date();
  const motivo = typeof req.body?.motivo === "string" ? req.body.motivo.trim() : "";
  const duracionDias = Number(req.body?.duracionDias ?? 0);
  const bannedUntil = Number.isFinite(duracionDias) && duracionDias > 0
    ? new Date(now.getTime() + duracionDias * 24 * 60 * 60 * 1000)
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
    data: {
      isBanned: true,
      bannedAt: now,
      bannedUntil
    } as any
  });
  await recordAuditLog({
    actorId: (req.user as ReqUser | undefined)?.id ?? "desconocido",
    action: "moderacion.ban",
    targetType: "Usuario",
    targetId: userId,
    metadata: { motivo: motivo || null, duracionDias, bannedUntil, alcance: escuelaId }
  });
  res.status(201).json({ ok: true, bannedUntil });
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
  await prisma.usuario.updateMany({
    where: { id: userId },
    data: {
      lastWarningAt: now,
      lastWarningReason: motivo,
      lastWarningSeverity: severidad
    } as any
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
