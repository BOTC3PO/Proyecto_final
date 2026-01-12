import { Router } from "express";
import { getDb } from "../lib/db";
import { toObjectId } from "../lib/ids";
import { EscuelaSchema } from "../schema/escuela";

export const escuelas = Router();

const clampLimit = (value: string | undefined) => {
  const parsed = Number(value ?? 20);
  if (Number.isNaN(parsed) || parsed <= 0) return 20;
  return Math.min(parsed, 100);
};

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

escuelas.get("/api/escuelas/:id", async (req, res) => {
  const db = await getDb();
  const objectId = toObjectId(req.params.id);
  if (!objectId) return res.status(400).json({ error: "invalid id" });
  const item = await db.collection("escuelas").findOne({ _id: objectId, isDeleted: { $ne: true } });
  if (!item) return res.status(404).json({ error: "not found" });
  res.json(item);
});
