import { Router } from "express";
import { prisma } from "../lib/prisma";
import { generateId } from "../lib/ids";
import { requireAdmin } from "../lib/admin-auth";

export const moderacion = Router();

const clampLimit = (value: string | undefined) => {
  const parsed = Number(value ?? 20);
  if (Number.isNaN(parsed) || parsed <= 0) return 20;
  return Math.min(parsed, 100);
};

moderacion.use("/api/moderacion", requireAdmin);

moderacion.get("/api/moderacion/clases-publicas", async (req, res) => {
  const limit = clampLimit(req.query.limit as string | undefined);
  const offset = Number(req.query.offset ?? 0);
  const items = await prisma.clase.findMany({
    where: {
      isDeleted: false,
      status: "ACTIVE",
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
  const items = await (prisma as any).mensajeReportado?.findMany({
    where: {},
    skip: Number.isNaN(offset) || offset < 0 ? 0 : offset,
    take: limit,
    orderBy: { createdAt: "desc" }
  }) ?? [];
  res.json({ items, limit, offset });
});

moderacion.post("/api/moderacion/usuarios/:id/ban", async (req, res) => {
  const userId = req.params.id;
  if (!userId) return res.status(400).json({ error: "invalid user id" });
  const now = new Date();
  const actor = res.locals.adminUser as { _id?: unknown; id?: unknown } | undefined;
  const actorId = String(actor?.id ?? actor?._id ?? "");
  const actorIp = (req.header("x-forwarded-for") ?? "").split(",")[0].trim() || req.ip;
  const motivo = typeof req.body?.motivo === "string" ? req.body.motivo.trim() : "";
  const duracionDias = Number(req.body?.duracionDias ?? 0);
  const bannedUntil = Number.isFinite(duracionDias) && duracionDias > 0
    ? new Date(now.getTime() + duracionDias * 24 * 60 * 60 * 1000)
    : null;
  const event = {
    id: generateId(),
    usuarioId: userId,
    tipo: "ban",
    motivo,
    duracionDias: Number.isFinite(duracionDias) ? duracionDias : 0,
    actorId,
    metadata: {
      ip: actorIp,
      timestamp: now
    },
    createdAt: now
  };
  await prisma.moderacionEvento.create({ data: event as any });
  await prisma.usuario.updateMany({
    where: { id: userId },
    data: {
      isBanned: true,
      bannedAt: now,
      bannedUntil
    } as any
  });
  res.status(201).json({ ok: true, bannedUntil });
});

moderacion.post("/api/moderacion/usuarios/:id/advertencias", async (req, res) => {
  const userId = req.params.id;
  if (!userId) return res.status(400).json({ error: "invalid user id" });
  const now = new Date();
  const actor = res.locals.adminUser as { _id?: unknown; id?: unknown } | undefined;
  const actorId = String(actor?.id ?? actor?._id ?? "");
  const actorIp = (req.header("x-forwarded-for") ?? "").split(",")[0].trim() || req.ip;
  const motivo = typeof req.body?.motivo === "string" ? req.body.motivo.trim() : "";
  const severidad = typeof req.body?.severidad === "string" ? req.body.severidad.trim() : "";
  const event = {
    id: generateId(),
    usuarioId: userId,
    tipo: "advertencia",
    motivo,
    severidad,
    actorId,
    metadata: {
      ip: actorIp,
      timestamp: now
    },
    createdAt: now
  };
  await prisma.moderacionEvento.create({ data: event as any });
  await prisma.usuario.updateMany({
    where: { id: userId },
    data: {
      lastWarningAt: now,
      lastWarningReason: motivo,
      lastWarningSeverity: severidad
    } as any
  });
  res.status(201).json({ ok: true });
});
