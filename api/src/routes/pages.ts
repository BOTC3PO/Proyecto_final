import { Router } from "express";
import { TuesdayProjectSchema } from "../schema/page";
import { getDb } from "../lib/db";
import express from "express";
export const pages = Router();
function bodyLimitMB(maxMb: number) { return [express.json({ limit: ${maxMb}mb })]; }
pages.post("/api/pages", ...bodyLimitMB(Number(process.env.MAX_PAGE_MB ?? 30)), async (req, res) => {
  try {
    const parsed = TuesdayProjectSchema.parse(req.body);
    const db = await getDb();
    const doc = { ...parsed, createdAt: new Date() };
    const result = await db.collection("pages").insertOne(doc);
    res.status(201).json({ id: result.insertedId });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});
pages.get("/api/pages/:id", async (req, res) => {
  const db = await getDb();
  const { ObjectId } = await import("mongodb");
  const page = await db.collection("pages").findOne({ _id: new ObjectId(req.params.id) });
  if (!page) return res.status(404).json({ error: "not found" });
  res.json(page);
});