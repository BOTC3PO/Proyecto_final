import { Router } from "express";
import { TuesdayProjectSchema } from "../schema/page";
import { getDb } from "../lib/db";
import { ENV } from "../lib/env";
import express from "express";
export const pages = Router();
function bodyLimitMB(maxMb: number) {
  return [express.json({ limit: `${maxMb}mb` })];
}
pages.post("/api/pages", ...bodyLimitMB(ENV.MAX_PAGE_MB), async (req, res) => {
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
pages.get("/api/pages", async (req, res) => {
  try {
    const db = await getDb();
    const q = typeof req.query.q === "string" ? req.query.q.trim() : "";
    const page = Math.max(1, Number(req.query.page ?? 1));
    const pageSize = Math.min(50, Math.max(1, Number(req.query.pageSize ?? 12)));
    const filter: Record<string, any> = q ? { title: { $regex: q, $options: "i" } } : {};
    const total = await db.collection("pages").countDocuments(filter);
    const items = await db
      .collection<{ _id: string; title: string; createdAt: string }>("pages")
      .find(filter)
      .project({ _id: 1, title: 1, createdAt: 1 })
      .sort({ createdAt: -1 })
      .skip((page - 1) * pageSize)
      .limit(pageSize)
      .toArray();
    res.json({
      items: items.map((i) => ({ id: i._id.toString(), title: i.title, createdAt: i.createdAt })),
      page,
      pageSize,
      total,
      totalPages: Math.max(1, Math.ceil(total / pageSize))
    });
  } catch (e: any) {
    res.status(500).json({ error: e?.message ?? "No se pudo listar páginas" });
  }
});

pages.get("/api/pages/:id", async (req, res) => {
  const db = await getDb();
  const page = await db.collection("pages").findOne({ _id: req.params.id });
  if (!page) return res.status(404).json({ error: "not found" });
  res.json(page);
});
