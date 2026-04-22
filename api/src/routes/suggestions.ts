import { Router } from "express";
import { randomUUID } from "crypto";
import { requireUser } from "../lib/user-auth";
import { requireAdmin } from "../lib/admin-auth";
import { prisma } from "../lib/prisma";

export const suggestions = Router();

const VALID_SUGGESTION_TYPES = new Set(["ERRATA", "MEJORA", "CONTENIDO"]);
const VALID_TARGET_TYPES = new Set(["generator", "module"]);
const VALID_REVIEW_STATUSES = new Set(["REVIEWED", "DISCARDED", "PINNED"]);

function getUserId(req: Parameters<typeof requireUser>[0]): string {
  const user = (req as { user?: { _id?: { toString?: () => string }; id?: string } }).user;
  if (typeof user?._id?.toString === "function") return user._id.toString();
  if (typeof user?.id === "string") return user.id;
  return "";
}

// POST /api/suggestions — crear sugerencia
suggestions.post("/api/suggestions", requireUser, async (req, res) => {
  const { suggestion_type, target_type, target_id, title, body } =
    req.body as Record<string, unknown>;

  if (!suggestion_type || !VALID_SUGGESTION_TYPES.has(String(suggestion_type))) {
    res.status(400).json({ error: "suggestion_type inválido. Debe ser ERRATA, MEJORA o CONTENIDO" });
    return;
  }
  if (!title || String(title).trim() === "") {
    res.status(400).json({ error: "title es requerido" });
    return;
  }
  if (!body || String(body).trim() === "") {
    res.status(400).json({ error: "body es requerido" });
    return;
  }
  if (target_type !== undefined && target_type !== null && !VALID_TARGET_TYPES.has(String(target_type))) {
    res.status(400).json({ error: "target_type inválido. Debe ser generator o module" });
    return;
  }

  const userId = getUserId(req as Parameters<typeof requireUser>[0]);
  if (!userId) { res.status(401).json({ error: "user not found" }); return; }

  try {
    const id = randomUUID();
    const now = new Date().toISOString();

    await prisma.suggestion.create({
      data: {
        id,
        suggestionType: String(suggestion_type),
        targetType: target_type != null ? String(target_type) : null,
        targetId: target_id != null ? String(target_id) : null,
        title: String(title).trim(),
        body: String(body).trim(),
        createdBy: userId,
        createdAt: now,
        status: "PENDING",
      },
    });

    res.status(201).json({ id });
  } catch (err) {
    res.status(500).json({ error: err instanceof Error ? err.message : "internal server error" });
  }
});

// GET /api/suggestions — listar (requireAdmin)
suggestions.get("/api/suggestions", requireAdmin, async (req, res) => {
  const { status, target_type } = req.query;
  const limit = Math.max(1, Math.min(200, Number(req.query.limit ?? 50)));
  const offset = Math.max(0, Number(req.query.offset ?? 0));

  try {
    const where: Record<string, unknown> = {};
    if (status && typeof status === "string") where.status = status;
    if (target_type && typeof target_type === "string") where.targetType = target_type;

    const [total, items] = await Promise.all([
      prisma.suggestion.count({ where }),
      prisma.suggestion.findMany({
        where,
        orderBy: { createdAt: "desc" },
        take: limit,
        skip: offset,
      }),
    ]);

    res.json({ items, total });
  } catch (err) {
    res.status(500).json({ error: err instanceof Error ? err.message : "internal server error" });
  }
});

// PATCH /api/suggestions/:id — revisar (requireAdmin)
suggestions.patch("/api/suggestions/:id", requireAdmin, async (req, res) => {
  const id = String(req.params.id);
  const { status, admin_note } = req.body as Record<string, unknown>;

  if (!status || !VALID_REVIEW_STATUSES.has(String(status))) {
    res.status(400).json({ error: "status inválido. Debe ser REVIEWED, DISCARDED o PINNED" });
    return;
  }

  const adminId = getUserId(req as Parameters<typeof requireUser>[0]);
  if (!adminId) { res.status(401).json({ error: "admin not found" }); return; }

  try {
    const existing = await prisma.suggestion.findUnique({ where: { id }, select: { id: true } });
    if (!existing) { res.status(404).json({ error: "not found" }); return; }

    const now = new Date().toISOString();
    await prisma.suggestion.update({
      where: { id },
      data: {
        status: String(status),
        reviewedBy: adminId,
        reviewedAt: now,
        adminNote: admin_note != null ? String(admin_note) : null,
      },
    });

    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err instanceof Error ? err.message : "internal server error" });
  }
});
