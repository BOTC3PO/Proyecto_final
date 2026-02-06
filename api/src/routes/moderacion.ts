import { Router } from "express";
import { getDb } from "../lib/db";
import { toObjectId } from "../lib/ids";
import { requireAdmin } from "../lib/admin-auth";

export const moderacion = Router();

const clampLimit = (value: string | undefined) => {
  const parsed = Number(value ?? 20);
  if (Number.isNaN(parsed) || parsed <= 0) return 20;
  return Math.min(parsed, 100);
};

moderacion.use("/api/moderacion", requireAdmin);

moderacion.get("/api/moderacion/clases-publicas", async (req, res) => {
  const db = await getDb();
  const limit = clampLimit(req.query.limit as string | undefined);
  const offset = Number(req.query.offset ?? 0);
  const items = await db
    .collection("aulas")
    .find({ accessType: "publica" })
    .skip(Number.isNaN(offset) || offset < 0 ? 0 : offset)
    .limit(limit)
    .sort({ updatedAt: -1 })
    .toArray();
  res.json({ items, limit, offset });
});

moderacion.get("/api/moderacion/mensajes-reportados", async (req, res) => {
  const db = await getDb();
  const limit = clampLimit(req.query.limit as string | undefined);
  const offset = Number(req.query.offset ?? 0);
  const items = await db
    .collection("mensajes_reportados")
    .find({})
    .skip(Number.isNaN(offset) || offset < 0 ? 0 : offset)
    .limit(limit)
    .sort({ createdAt: -1 })
    .toArray();
  res.json({ items, limit, offset });
});

moderacion.post("/api/moderacion/usuarios/:id/ban", async (req, res) => {
  const db = await getDb();
  const userId = toObjectId(req.params.id);
  if (!userId) return res.status(400).json({ error: "invalid user id" });
  const now = new Date();
  const actor = res.locals.adminUser as { _id?: unknown } | undefined;
  const actorId = actor?._id;
  const actorIp = (req.header("x-forwarded-for") ?? "").split(",")[0].trim() || req.ip;
  const motivo = typeof req.body?.motivo === "string" ? req.body.motivo.trim() : "";
  const duracionDias = Number(req.body?.duracionDias ?? 0);
  const bannedUntil = Number.isFinite(duracionDias) && duracionDias > 0
    ? new Date(now.getTime() + duracionDias * 24 * 60 * 60 * 1000)
    : null;
  const event = {
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
  await db.collection("moderacion_eventos").insertOne(event);
  await db.collection("usuarios").updateOne(
    { _id: userId },
    {
      $set: {
        isBanned: true,
        bannedAt: now,
        bannedUntil
      }
    }
  );
  res.status(201).json({ ok: true, bannedUntil });
});

moderacion.post("/api/moderacion/usuarios/:id/advertencias", async (req, res) => {
  const db = await getDb();
  const userId = toObjectId(req.params.id);
  if (!userId) return res.status(400).json({ error: "invalid user id" });
  const now = new Date();
  const actor = res.locals.adminUser as { _id?: unknown } | undefined;
  const actorId = actor?._id;
  const actorIp = (req.header("x-forwarded-for") ?? "").split(",")[0].trim() || req.ip;
  const motivo = typeof req.body?.motivo === "string" ? req.body.motivo.trim() : "";
  const severidad = typeof req.body?.severidad === "string" ? req.body.severidad.trim() : "";
  const event = {
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
  await db.collection("moderacion_eventos").insertOne(event);
  await db.collection("usuarios").updateOne(
    { _id: userId },
    {
      $set: {
        lastWarningAt: now,
        lastWarningReason: motivo,
        lastWarningSeverity: severidad
      },
      $inc: { warningCount: 1 }
    }
  );
  res.status(201).json({ ok: true });
});
