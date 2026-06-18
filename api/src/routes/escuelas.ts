import express, { Router } from "express";
import { randomUUID } from "crypto";
import { requireAdmin } from "../lib/admin-auth";
import { prisma } from "../lib/prisma";
import { createRateLimiter } from "../lib/rate-limit";
import { toObjectId } from "../lib/ids";
import { getQueryString } from "../lib/query";
import { hasRole } from "../lib/roles";
import { requireUser } from "../lib/user-auth";
import { EscuelaPatchSchema, EscuelaSchema } from "../schema/escuela";

export const escuelas = Router();

const escuelasMutationLimiter = createRateLimiter({
  windowMs: 10 * 60 * 1000,
  limit: 30
});

const clampLimit = (value: string | undefined) => {
  const parsed = Number(value ?? 20);
  if (Number.isNaN(parsed) || parsed <= 0) return 20;
  return Math.min(parsed, 100);
};

const getRequesterId = (req: express.Request) =>
  (req as { user?: { _id?: { toString?: () => string } } }).user?._id?.toString?.() ?? null;

escuelas.post("/api/escuelas", requireAdmin, escuelasMutationLimiter, async (req, res) => {
  try {
    const parsed = EscuelaSchema.parse(req.body);
    const now = new Date().toISOString();
    const created = await prisma.escuela.create({
      data: {
        id: randomUUID(),
        name: parsed.name,
        code: parsed.code,
        address: parsed.address,
        subscriptionStatus: parsed.subscriptionStatus,
        plan: parsed.plan,
        isDeleted: false,
        createdAt: now,
        updatedAt: now
      }
    });
    res.status(201).json({ id: created.id });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

escuelas.get("/api/escuelas", requireUser, async (req, res) => {
  const limit = clampLimit(getQueryString(req.query.limit));
  const offset = Number(getQueryString(req.query.offset) ?? 0);
  const skip = Number.isNaN(offset) || offset < 0 ? 0 : offset;
  const items = await prisma.escuela.findMany({
    where: { isDeleted: { not: true } },
    skip,
    take: limit,
    orderBy: { createdAt: "desc" }
  });
  res.json({ items, limit, offset: skip });
});

escuelas.get("/api/escuelas/code/:code", async (req, res) => {
  const escuela = await prisma.escuela.findFirst({
    where: { code: req.params.code, isDeleted: { not: true } },
    select: { id: true, name: true }
  });
  if (!escuela) return res.status(404).json({ error: "not found" });
  res.json({ id: escuela.id, name: escuela.name });
});

escuelas.get("/api/escuelas/:id", async (req, res) => {
  const rawId = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
  if (!toObjectId(rawId)) return res.status(400).json({ error: "invalid id" });
  const item = await prisma.escuela.findFirst({
    where: { id: rawId, isDeleted: { not: true } }
  });
  if (!item) return res.status(404).json({ error: "not found" });
  res.json(item);
});

escuelas.patch("/api/escuelas/:id", requireUser, escuelasMutationLimiter, async (req, res) => {
  try {
    const parsed = EscuelaPatchSchema.parse(req.body);
    const rawId = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    if (!toObjectId(rawId)) return res.status(400).json({ error: "invalid id" });
    const escuela = await prisma.escuela.findFirst({
      where: { id: rawId, isDeleted: { not: true } }
    });
    if (!escuela) return res.status(404).json({ error: "not found" });
    const requester = (req as { user?: { _id?: { toString?: () => string }; role?: string; roles?: string[] } }).user;
    const isPlatformAdmin = hasRole(requester, "ADMIN");
    if (!isPlatformAdmin) {
      return res.status(403).json({ error: "forbidden" });
    }
    const shouldAuditPlan = parsed.plan !== undefined && parsed.plan !== escuela.plan;
    const shouldAuditStatus =
      parsed.subscriptionStatus !== undefined && parsed.subscriptionStatus !== escuela.subscriptionStatus;
    if (shouldAuditPlan || shouldAuditStatus) {
      await prisma.eventoSuscripcion.create({
        data: {
          json: JSON.stringify({
            schoolId: escuela.id,
            previousPlan: escuela.plan ?? null,
            newPlan: parsed.plan ?? escuela.plan ?? null,
            previousStatus: escuela.subscriptionStatus ?? null,
            newStatus: parsed.subscriptionStatus ?? escuela.subscriptionStatus ?? null,
            actorId: getRequesterId(req)
          }),
          createdAt: new Date().toISOString()
        }
      });
    }
    const update: Record<string, unknown> = { updatedAt: new Date() };
    if (parsed.plan !== undefined) update.plan = parsed.plan;
    if (parsed.subscriptionStatus !== undefined) update.subscriptionStatus = parsed.subscriptionStatus;
    await prisma.escuela.update({
      where: { id: rawId },
      data: update as Parameters<typeof prisma.escuela.update>[0]["data"]
    });
    res.json({ ok: true });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});
