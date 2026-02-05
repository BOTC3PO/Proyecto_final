import express, { Router } from "express";
import { getDb } from "../lib/db";
import { toObjectId } from "../lib/ids";
import { requireUser } from "../lib/user-auth";
import { EscuelaPatchSchema, EscuelaSchema } from "../schema/escuela";

export const escuelas = Router();

const clampLimit = (value: string | undefined) => {
  const parsed = Number(value ?? 20);
  if (Number.isNaN(parsed) || parsed <= 0) return 20;
  return Math.min(parsed, 100);
};

const getRequesterId = (req: express.Request) =>
  (req as { user?: { _id?: { toString?: () => string } } }).user?._id?.toString?.() ?? null;

escuelas.post("/api/escuelas", async (req, res) => {
  try {
    const parsed = EscuelaSchema.parse(req.body);
    const db = await getDb();
    const now = new Date();
    const doc = {
      ...parsed,
      adminIds: parsed.adminIds?.map((id) => toObjectId(id)).filter(Boolean),
      isDeleted: false,
      createdAt: now,
      updatedAt: now
    };
    const result = await db.collection("escuelas").insertOne(doc);
    res.status(201).json({ id: result.insertedId });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

escuelas.get("/api/escuelas", async (req, res) => {
  const db = await getDb();
  const limit = clampLimit(req.query.limit as string | undefined);
  const offset = Number(req.query.offset ?? 0);
  const cursor = db
    .collection("escuelas")
    .find({ isDeleted: { $ne: true } })
    .skip(Number.isNaN(offset) || offset < 0 ? 0 : offset)
    .limit(limit)
    .sort({ createdAt: -1 });
  const items = await cursor.toArray();
  res.json({ items, limit, offset });
});

escuelas.get("/api/escuelas/code/:code", async (req, res) => {
  const db = await getDb();
  const escuela = await db.collection("escuelas").findOne(
    { code: req.params.code, isDeleted: { $ne: true } },
    { projection: { name: 1 } }
  );
  if (!escuela) return res.status(404).json({ error: "not found" });
  res.json({ id: escuela._id, name: escuela.name });
});

escuelas.get("/api/escuelas/:id", async (req, res) => {
  const db = await getDb();
  const objectId = toObjectId(req.params.id);
  if (!objectId) return res.status(400).json({ error: "invalid id" });
  const item = await db.collection("escuelas").findOne({ _id: objectId, isDeleted: { $ne: true } });
  if (!item) return res.status(404).json({ error: "not found" });
  res.json(item);
});

escuelas.patch("/api/escuelas/:id", requireUser, async (req, res) => {
  try {
    const parsed = EscuelaPatchSchema.parse(req.body);
    const objectId = toObjectId(req.params.id);
    if (!objectId) return res.status(400).json({ error: "invalid id" });
    const db = await getDb();
    const escuela = await db.collection("escuelas").findOne({ _id: objectId, isDeleted: { $ne: true } });
    if (!escuela) return res.status(404).json({ error: "not found" });
    const shouldAuditPlan = parsed.plan !== undefined && parsed.plan !== escuela.plan;
    const shouldAuditStatus =
      parsed.subscriptionStatus !== undefined && parsed.subscriptionStatus !== escuela.subscriptionStatus;
    const shouldAuditPrice =
      parsed.pricePerStudent !== undefined && parsed.pricePerStudent !== escuela.pricePerStudent;
    if (shouldAuditPlan || shouldAuditStatus || shouldAuditPrice) {
      await db.collection("eventos_suscripciones").insertOne({
        schoolId: escuela._id?.toString?.() ?? req.params.id,
        previousPlan: escuela.plan ?? null,
        newPlan: parsed.plan ?? escuela.plan ?? null,
        previousStatus: escuela.subscriptionStatus ?? null,
        newStatus: parsed.subscriptionStatus ?? escuela.subscriptionStatus ?? null,
        previousPricePerStudent:
          typeof escuela.pricePerStudent === "number" ? escuela.pricePerStudent : null,
        newPricePerStudent:
          typeof parsed.pricePerStudent === "number"
            ? parsed.pricePerStudent
            : typeof escuela.pricePerStudent === "number"
              ? escuela.pricePerStudent
              : null,
        actorId: getRequesterId(req),
        createdAt: new Date().toISOString()
      });
    }
    const update: Record<string, unknown> = { updatedAt: new Date() };
    if (parsed.plan !== undefined) update.plan = parsed.plan;
    if (parsed.subscriptionStatus !== undefined) update.subscriptionStatus = parsed.subscriptionStatus;
    if (parsed.pricePerStudent !== undefined) update.pricePerStudent = parsed.pricePerStudent;
    await db.collection("escuelas").updateOne({ _id: objectId }, { $set: update });
    res.json({ ok: true });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});
