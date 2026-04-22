import { Router } from "express";
import { requireAdmin } from "../lib/admin-auth";
import { prisma } from "../lib/prisma";

export const adminGenerators = Router();

function parseJson<T>(raw: string, fallback: T): T {
  try { return JSON.parse(raw) as T; } catch { return fallback; }
}

// GET /api/admin/generators — lista completa incluyendo INACTIVE
adminGenerators.get("/api/admin/generators", requireAdmin, async (_req, res) => {
  try {
    const rows = await prisma.generatorConfig.findMany({
      orderBy: [{ materia: "asc" }, { id: "asc" }],
      select: { id: true, materia: true, label: true, description: true, version: true, subtipos: true, status: true },
    });

    res.json({
      items: rows.map((row) => ({
        ...row,
        subtipos: parseJson(row.subtipos, []),
      })),
    });
  } catch (err) {
    res.status(500).json({ error: err instanceof Error ? err.message : "error" });
  }
});

// PATCH /api/admin/generators/:id — editar generador
adminGenerators.patch("/api/admin/generators/:id", requireAdmin, async (req, res) => {
  const id = `${req.params.id}`;
  const { label, description, status, subtipos } = req.body as Record<string, unknown>;
  const VALID_STATUSES = new Set(["ACTIVE", "INACTIVE"]);

  try {
    const existing = await prisma.generatorConfig.findUnique({ where: { id }, select: { id: true } });
    if (!existing) { res.status(404).json({ error: "not found" }); return; }

    const data: Record<string, unknown> = {};
    if (typeof label === "string" && label.trim()) data.label = label.trim();
    if (description !== undefined)
      data.description = typeof description === "string" ? description.trim() || null : null;
    if (typeof status === "string" && VALID_STATUSES.has(status)) data.status = status;
    if (Array.isArray(subtipos)) data.subtipos = JSON.stringify(subtipos);

    if (!Object.keys(data).length) { res.status(400).json({ error: "nada que actualizar" }); return; }

    const updated = await prisma.generatorConfig.update({
      where: { id },
      data,
      select: { id: true, materia: true, label: true, description: true, version: true, subtipos: true, status: true },
    });

    res.json({ ...updated, subtipos: parseJson(updated.subtipos, []) });
  } catch (err) {
    res.status(500).json({ error: err instanceof Error ? err.message : "error" });
  }
});

// GET /api/admin/generators/:id/changelog
adminGenerators.get("/api/admin/generators/:id/changelog", requireAdmin, async (req, res) => {
  const id = `${req.params.id}`;
  try {
    const rows = await prisma.generatorChangelog.findMany({
      where: { generatorId: id },
      orderBy: { changedAt: "desc" },
      take: 20,
    });
    res.json({ items: rows });
  } catch (err) {
    res.status(500).json({ error: err instanceof Error ? err.message : "error" });
  }
});

// POST /api/admin/generators/:id/changelog
adminGenerators.post("/api/admin/generators/:id/changelog", requireAdmin, async (req, res) => {
  const id = `${req.params.id}`;
  const { note, admin_id } = req.body as Record<string, unknown>;

  if (!note || typeof note !== "string" || !note.trim()) {
    res.status(400).json({ error: "note requerido" });
    return;
  }

  try {
    const entry = await prisma.generatorChangelog.create({
      data: {
        id: `chg-${Date.now()}-${Math.random().toString(16).slice(2)}`,
        generatorId: id,
        adminId: typeof admin_id === "string" ? admin_id : "unknown",
        note: note.trim(),
        changedAt: new Date().toISOString(),
      },
    });
    res.status(201).json(entry);
  } catch (err) {
    res.status(500).json({ error: err instanceof Error ? err.message : "error" });
  }
});
