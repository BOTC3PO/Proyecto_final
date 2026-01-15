import express, { Router } from "express";
import { getDb } from "../lib/db";
import { ENV } from "../lib/env";
import { SurveySchema } from "../schema/encuesta";

export const encuestas = Router();

const SurveyUpdateSchema = SurveySchema.partial().omit({ id: true, createdAt: true, createdBy: true });

const clampLimit = (value: string | undefined) => {
  const parsed = Number(value ?? 20);
  if (Number.isNaN(parsed) || parsed <= 0) return 20;
  return Math.min(parsed, 100);
};

const bodyLimitMB = (maxMb: number) => [express.json({ limit: `${maxMb}mb` })];

encuestas.get("/api/encuestas", async (req, res) => {
  const db = await getDb();
  const limit = clampLimit(req.query.limit as string | undefined);
  const offset = Number(req.query.offset ?? 0);
  const cursor = db
    .collection("encuestas")
    .find({})
    .skip(Number.isNaN(offset) || offset < 0 ? 0 : offset)
    .limit(limit)
    .sort({ updatedAt: -1 });
  const items = await cursor.toArray();
  res.json({ items, limit, offset });
});

encuestas.get("/api/encuestas/:id", async (req, res) => {
  const db = await getDb();
  const item = await db.collection("encuestas").findOne({ id: req.params.id });
  if (!item) return res.status(404).json({ error: "not found" });
  res.json(item);
});

encuestas.post("/api/encuestas", ...bodyLimitMB(ENV.MAX_PAGE_MB), async (req, res) => {
  try {
    const now = new Date().toISOString();
    const payload = {
      ...req.body,
      status: req.body?.status ?? "borrador",
      createdAt: req.body?.createdAt ?? now,
      updatedAt: req.body?.updatedAt ?? now
    };
    const parsed = SurveySchema.parse(payload);
    const db = await getDb();
    const result = await db.collection("encuestas").insertOne(parsed);
    res.status(201).json({ id: result.insertedId, surveyId: parsed.id });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

encuestas.put("/api/encuestas/:id", ...bodyLimitMB(ENV.MAX_PAGE_MB), async (req, res) => {
  try {
    const parsed = SurveyUpdateSchema.parse(req.body);
    const db = await getDb();
    const update = { ...parsed, updatedAt: new Date().toISOString() };
    const result = await db.collection("encuestas").updateOne({ id: req.params.id }, { $set: update });
    if (result.matchedCount === 0) return res.status(404).json({ error: "not found" });
    res.json({ ok: true });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

encuestas.patch("/api/encuestas/:id", ...bodyLimitMB(ENV.MAX_PAGE_MB), async (req, res) => {
  try {
    const parsed = SurveyUpdateSchema.parse(req.body);
    const db = await getDb();
    const update = { ...parsed, updatedAt: new Date().toISOString() };
    const result = await db.collection("encuestas").updateOne({ id: req.params.id }, { $set: update });
    if (result.matchedCount === 0) return res.status(404).json({ error: "not found" });
    res.json({ ok: true });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

encuestas.delete("/api/encuestas/:id", async (req, res) => {
  const db = await getDb();
  const result = await db.collection("encuestas").deleteOne({ id: req.params.id });
  if (result.deletedCount === 0) return res.status(404).json({ error: "not found" });
  res.status(204).send();
});
