import express, { Router } from "express";
import { getDb } from "../lib/db";
import { ENV } from "../lib/env";
import { ModuleSchema } from "../schema/modulo";

export const modulos = Router();

const ModuleUpdateSchema = ModuleSchema.partial().omit({ id: true });

const clampLimit = (value: string | undefined) => {
  const parsed = Number(value ?? 20);
  if (Number.isNaN(parsed) || parsed <= 0) return 20;
  return Math.min(parsed, 100);
};

const bodyLimitMB = (maxMb: number) => [express.json({ limit: `${maxMb}mb` })];

modulos.get("/api/modulos", async (req, res) => {
  const db = await getDb();
  const limit = clampLimit(req.query.limit as string | undefined);
  const offset = Number(req.query.offset ?? 0);
  const cursor = db
    .collection("modulos")
    .find({})
    .skip(Number.isNaN(offset) || offset < 0 ? 0 : offset)
    .limit(limit)
    .sort({ updatedAt: -1 });
  const items = await cursor.toArray();
  res.json({ items, limit, offset });
});

modulos.get("/api/modulos/:id", async (req, res) => {
  const db = await getDb();
  const item = await db.collection("modulos").findOne({ id: req.params.id });
  if (!item) return res.status(404).json({ error: "not found" });
  res.json(item);
});

modulos.post("/api/modulos", ...bodyLimitMB(ENV.MAX_PAGE_MB), async (req, res) => {
  try {
    const payload = { ...req.body, updatedAt: req.body?.updatedAt ?? new Date().toISOString() };
    const parsed = ModuleSchema.parse(payload);
    const db = await getDb();
    const result = await db.collection("modulos").insertOne(parsed);
    res.status(201).json({ id: result.insertedId, moduleId: parsed.id });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

modulos.put("/api/modulos/:id", ...bodyLimitMB(ENV.MAX_PAGE_MB), async (req, res) => {
  try {
    const parsed = ModuleUpdateSchema.parse(req.body);
    const db = await getDb();
    const update = { ...parsed, updatedAt: new Date().toISOString() };
    const result = await db.collection("modulos").updateOne({ id: req.params.id }, { $set: update });
    if (result.matchedCount === 0) return res.status(404).json({ error: "not found" });
    res.json({ ok: true });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

modulos.patch("/api/modulos/:id", ...bodyLimitMB(ENV.MAX_PAGE_MB), async (req, res) => {
  try {
    const parsed = ModuleUpdateSchema.parse(req.body);
    const db = await getDb();
    const update = { ...parsed, updatedAt: new Date().toISOString() };
    const result = await db.collection("modulos").updateOne({ id: req.params.id }, { $set: update });
    if (result.matchedCount === 0) return res.status(404).json({ error: "not found" });
    res.json({ ok: true });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

modulos.delete("/api/modulos/:id", async (req, res) => {
  const db = await getDb();
  const result = await db.collection("modulos").deleteOne({ id: req.params.id });
  if (result.deletedCount === 0) return res.status(404).json({ error: "not found" });
  res.status(204).send();
});
