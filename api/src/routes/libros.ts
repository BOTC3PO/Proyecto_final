import express, { Router } from "express";
import { getDb } from "../lib/db";
import { BookSchema } from "../schema/libro";

export const libros = Router();

const bodyLimitMB = (maxMb: number) => [express.json({ limit: `${maxMb}mb` })];
const DEFAULT_PAGE_SIZE = 12;
const MAX_PAGE_SIZE = 50;
let librosIndexesPromise: Promise<void> | null = null;

async function ensureLibrosIndexes() {
  if (!librosIndexesPromise) {
    librosIndexesPromise = getDb()
      .then((db) =>
        db.collection("libros").createIndexes([
          { key: { id: 1 }, name: "libros_id_idx", unique: true },
          { key: { title: 1 }, name: "libros_title_idx" }
        ])
      )
      .then(() => undefined)
      .catch((error) => {
        console.warn("No se pudieron crear los índices de libros:", error);
      });
  }
  await librosIndexesPromise;
}

libros.post("/api/libros", ...bodyLimitMB(Number(process.env.MAX_PAGE_MB ?? 30)), async (req, res) => {
  try {
    await ensureLibrosIndexes();
    const book = req.body?.book;
    if (!book || typeof book !== "object") {
      return res.status(400).json({ error: "book payload is required" });
    }
    const metadata = (book as { metadata?: { id?: string; title?: string } }).metadata;
    const id = metadata?.id;
    const title = metadata?.title;
    if (!id || !title) {
      return res.status(400).json({ error: "book.metadata.id and book.metadata.title are required" });
    }
    const payload = {
      id,
      title,
      book,
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

libros.get("/api/libros", async (req, res) => {
  try {
    await ensureLibrosIndexes();
    const db = await getDb();
    const rawQuery = typeof req.query.q === "string" ? req.query.q.trim() : "";
    const rawId = typeof req.query.id === "string" ? req.query.id.trim() : "";
    const page = Math.max(1, Number(req.query.page ?? 1));
    const pageSize = Math.max(1, Math.min(MAX_PAGE_SIZE, Number(req.query.pageSize ?? DEFAULT_PAGE_SIZE)));

    const filter: Record<string, any> = {};
    if (rawId) {
      filter.id = rawId;
    } else if (rawQuery) {
      filter.$or = [
        { id: { $regex: rawQuery, $options: "i" } },
        { title: { $regex: rawQuery, $options: "i" } }
      ];
    }

    const total = await db.collection("libros").countDocuments(filter);
    const totalPages = Math.max(1, Math.ceil(total / pageSize));
    const currentPage = Math.min(page, totalPages);
    const items = await db
      .collection("libros")
      .find(filter)
      .project({ _id: 0, id: 1, title: 1, createdAt: 1, updatedAt: 1 })
      .sort({ updatedAt: -1, createdAt: -1, id: 1 })
      .skip((currentPage - 1) * pageSize)
      .limit(pageSize)
      .toArray();

    res.json({
      items,
      page: currentPage,
      pageSize,
      total,
      totalPages
    });
  } catch (e: any) {
    res.status(500).json({ error: e?.message ?? "No se pudo listar libros" });
  }
});

libros.get("/api/libros/:id", async (req, res) => {
  await ensureLibrosIndexes();
  const db = await getDb();
  const book = await db.collection("libros").findOne({ id: req.params.id });
  if (!book) return res.status(404).json({ error: "not found" });
  res.json(book);
});
