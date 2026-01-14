import express, { Router } from "express";
import { getDb } from "../lib/db";
import { BookSchema } from "../schema/libro";

export const libros = Router();

const bodyLimitMB = (maxMb: number) => [express.json({ limit: `${maxMb}mb` })];

libros.post("/api/libros", ...bodyLimitMB(Number(process.env.MAX_PAGE_MB ?? 30)), async (req, res) => {
  try {
    const payload = {
      ...req.body,
      createdAt: req.body?.createdAt ?? new Date().toISOString(),
      updatedAt: req.body?.updatedAt ?? new Date().toISOString()
    };
    const parsed = BookSchema.parse(payload);
    const db = await getDb();
    await db.collection("libros").updateOne(
      { id: parsed.id },
      { $set: parsed },
      { upsert: true }
    );
    res.status(201).json({ id: parsed.id });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

libros.get("/api/libros/:id", async (req, res) => {
  const db = await getDb();
  const book = await db.collection("libros").findOne({ id: req.params.id });
  if (!book) return res.status(404).json({ error: "not found" });
  res.json(book);
});
