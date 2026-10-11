import { Router } from "express";
import { TuesdayProjectSchema } from "../schema/page";
import { prisma } from "../lib/prisma";
import { ENV } from "../lib/env";
import express from "express";
import { requireUser } from "../lib/user-auth";
import { isStaffRole } from "../lib/authorization";

export const pages = Router();

// El parser global de index.ts admite hasta MAX_PAGE_MB (30) antes de llegar
// aquí, así que el tope de esta ruta se aplica sobre el Content-Length.
const MAX_POST_BYTES = ENV.MAX_PAGES_POST_MB * 1024 * 1024;

const requireStaff: express.RequestHandler = (req, res, next) => {
  const user = (req as { user?: { role?: string } }).user;
  if (!isStaffRole(user?.role)) {
    res.status(403).json({ error: "Staff role required" });
    return;
  }
  next();
};

const limitePost: express.RequestHandler = (req, res, next) => {
  const largo = Number(req.headers["content-length"] ?? 0);
  if (largo > MAX_POST_BYTES) {
    res.status(413).json({ error: `Payload too large (max ${ENV.MAX_PAGES_POST_MB} MB)` });
    return;
  }
  next();
};

// `requireUser` va en cada ruta (no solo por el orden de montaje en index.ts):
// ver A1 / C1 en tareas_pendientes/PRODUCCION.md.
pages.post("/api/pages", requireUser, requireStaff, limitePost, async (req, res) => {
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
pages.get("/api/pages", requireUser, async (req, res) => {
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

pages.get("/api/pages/:id", requireUser, async (req, res) => {
  const page = await prisma.page.findFirst({ where: { id: String(req.params.id) } });
  if (!page) return res.status(404).json({ error: "not found" });
  res.json(page);
});
