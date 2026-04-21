import { Router } from "express";
import { TuesdayProjectSchema } from "../schema/page";
import { prisma } from "../lib/prisma";
import { ENV } from "../lib/env";
import express from "express";
export const pages = Router();
function bodyLimitMB(maxMb: number) {
  return [express.json({ limit: `${maxMb}mb` })];
}
pages.post("/api/pages", ...bodyLimitMB(ENV.MAX_PAGE_MB), async (req, res) => {
  try {
    const parsed = TuesdayProjectSchema.parse(req.body);
    const now = new Date().toISOString();
    const result = await prisma.page.create({
      data: {
        id: (parsed as any).id ?? require("crypto").randomUUID(),
        title: (parsed as any).title ?? null,
        content: typeof parsed === "object" ? JSON.stringify(parsed) : String(parsed),
        createdAt: now,
        updatedAt: now
      }
    });
    res.status(201).json({ id: result.id });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});
pages.get("/api/pages", async (req, res) => {
  try {
    const q = typeof req.query.q === "string" ? req.query.q.trim() : "";
    const page = Math.max(1, Number(req.query.page ?? 1));
    const pageSize = Math.min(50, Math.max(1, Number(req.query.pageSize ?? 12)));
    const filter = q
      ? { title: { contains: q } }
      : {};
    const total = await prisma.page.count({ where: filter });
    const items = await prisma.page.findMany({
      where: filter,
      select: { id: true, title: true, createdAt: true },
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * pageSize,
      take: pageSize
    });
    res.json({
      items: items.map((i) => ({ id: i.id, title: i.title, createdAt: i.createdAt })),
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
  const page = await prisma.page.findFirst({ where: { id: req.params.id } });
  if (!page) return res.status(404).json({ error: "not found" });
  res.json(page);
});
