import express, { Router } from "express";
import { prisma } from "../lib/prisma";
import { BookSchema } from "../schema/libro";

export const libros = Router();

const bodyLimitMB = (maxMb: number) => [express.json({ limit: `${maxMb}mb` })];
const DEFAULT_PAGE_SIZE = 12;
const MAX_PAGE_SIZE = 50;

libros.post("/api/libros", ...bodyLimitMB(Number(process.env.MAX_PAGE_MB ?? 30)), async (req, res) => {
  try {
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
    const existing = await prisma.libro.findFirst({ where: { id: parsed.id } });
    if (existing) {
      await prisma.libro.updateMany({
        where: { id: parsed.id },
        data: { json: JSON.stringify(parsed), updatedAt: parsed.updatedAt }
      });
    } else {
      await prisma.libro.create({
        data: { id: parsed.id, json: JSON.stringify(parsed), updatedAt: parsed.updatedAt }
      });
    }
    res.status(201).json({ id: parsed.id });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

libros.get("/api/libros", async (req, res) => {
  try {
    const rawQuery = typeof req.query.q === "string" ? req.query.q.trim() : "";
    const rawId = typeof req.query.id === "string" ? req.query.id.trim() : "";
    const page = Math.max(1, Number(req.query.page ?? 1));
    const pageSize = Math.max(1, Math.min(MAX_PAGE_SIZE, Number(req.query.pageSize ?? DEFAULT_PAGE_SIZE)));

    const allItems = await prisma.libro.findMany();
    const allDocs = allItems.map((r) => {
      try { return { ...JSON.parse(r.json), id: r.id }; } catch { return { id: r.id }; }
    }) as Array<Record<string, unknown>>;

    let filtered = allDocs;
    if (rawId) {
      filtered = allDocs.filter((d) => d.id === rawId);
    } else if (rawQuery) {
      const lower = rawQuery.toLowerCase();
      filtered = allDocs.filter(
        (d) =>
          (typeof d.id === "string" && d.id.toLowerCase().includes(lower)) ||
          (typeof d.title === "string" && d.title.toLowerCase().includes(lower))
      );
    }

    // sort by updatedAt desc, then createdAt desc, then id asc
    filtered.sort((a, b) => {
      const ua = String(a.updatedAt ?? "");
      const ub = String(b.updatedAt ?? "");
      if (ub !== ua) return ub < ua ? -1 : 1;
      const ca = String(a.createdAt ?? "");
      const cb = String(b.createdAt ?? "");
      if (cb !== ca) return cb < ca ? -1 : 1;
      return String(a.id ?? "") < String(b.id ?? "") ? -1 : 1;
    });

    const total = filtered.length;
    const totalPages = Math.max(1, Math.ceil(total / pageSize));
    const currentPage = Math.min(page, totalPages);
    const items = filtered
      .slice((currentPage - 1) * pageSize, currentPage * pageSize)
      .map(({ id, title, createdAt, updatedAt }) => ({ id, title, createdAt, updatedAt }));

    res.json({ items, page: currentPage, pageSize, total, totalPages });
  } catch (e: any) {
    res.status(500).json({ error: e?.message ?? "No se pudo listar libros" });
  }
});

libros.get("/api/libros/:id", async (req, res) => {
  const row = await prisma.libro.findFirst({ where: { id: req.params.id } });
  if (!row) return res.status(404).json({ error: "not found" });
  try {
    const doc = JSON.parse(row.json);
    res.json({ ...doc, id: row.id });
  } catch {
    res.json({ id: row.id, json: row.json });
  }
});
