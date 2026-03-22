import { Router } from "express";
import { randomUUID } from "crypto";
import { openContentDb } from "../lib/db-open";
import { requireUser } from "../lib/user-auth";
import { requireAdmin } from "../lib/admin-auth";

export const suggestions = Router();

const VALID_SUGGESTION_TYPES = new Set(["ERRATA", "MEJORA", "CONTENIDO"]);
const VALID_TARGET_TYPES = new Set(["generator", "module"]);
const VALID_REVIEW_STATUSES = new Set(["REVIEWED", "DISCARDED"]);

type SuggestionRow = {
  id: string;
  suggestion_type: string;
  target_type: string | null;
  target_id: string | null;
  title: string;
  body: string;
  created_by: string;
  created_at: string;
  status: string;
  reviewed_by: string | null;
  reviewed_at: string | null;
  admin_note: string | null;
};

function getUserId(req: Parameters<typeof requireUser>[0]): string {
  const user = (req as { user?: { _id?: { toString?: () => string }; id?: string } }).user;
  if (typeof user?._id?.toString === "function") return user._id.toString();
  if (typeof user?.id === "string") return user.id;
  return "";
}

// POST /api/suggestions — crear sugerencia (requireUser)
suggestions.post("/api/suggestions", requireUser, (req, res) => {
  const { suggestion_type, target_type, target_id, title, body } = req.body as Record<string, unknown>;

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
  if (!userId) {
    res.status(401).json({ error: "user not found" });
    return;
  }

  try {
    const db = openContentDb();
    const id = randomUUID();
    const now = new Date().toISOString();

    db.prepare(
      `INSERT INTO suggestions (id, suggestion_type, target_type, target_id, title, body, created_by, created_at, status)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'PENDING')`
    ).run(
      id,
      String(suggestion_type),
      target_type != null ? String(target_type) : null,
      target_id != null ? String(target_id) : null,
      String(title).trim(),
      String(body).trim(),
      userId,
      now
    );

    res.status(201).json({ id });
  } catch (err) {
    const message = err instanceof Error ? err.message : "internal server error";
    res.status(500).json({ error: message });
  }
});

// GET /api/suggestions — listar sugerencias (requireAdmin)
suggestions.get("/api/suggestions", requireAdmin, (req, res) => {
  const { status, target_type } = req.query;
  const limit = Math.max(1, Math.min(200, Number(req.query.limit ?? 50)));
  const offset = Math.max(0, Number(req.query.offset ?? 0));

  try {
    const db = openContentDb();
    const conditions: string[] = [];
    const params: (string | number)[] = [];

    if (status && typeof status === "string") {
      conditions.push("status = ?");
      params.push(status);
    }
    if (target_type && typeof target_type === "string") {
      conditions.push("target_type = ?");
      params.push(target_type);
    }

    const where = conditions.length > 0 ? `WHERE ${conditions.join(" AND ")}` : "";

    const total = (
      db.prepare(`SELECT COUNT(*) AS c FROM suggestions ${where}`).get(...params) as { c: number }
    ).c;

    const items = db
      .prepare(`SELECT * FROM suggestions ${where} ORDER BY created_at DESC LIMIT ? OFFSET ?`)
      .all(...params, limit, offset) as SuggestionRow[];

    res.json({ items, total });
  } catch (err) {
    const message = err instanceof Error ? err.message : "internal server error";
    res.status(500).json({ error: message });
  }
});

// PATCH /api/suggestions/:id — revisar sugerencia (requireAdmin)
suggestions.patch("/api/suggestions/:id", requireAdmin, (req, res) => {
  const { id } = req.params;
  const { status, admin_note } = req.body as Record<string, unknown>;

  if (!status || !VALID_REVIEW_STATUSES.has(String(status))) {
    res.status(400).json({ error: "status inválido. Debe ser REVIEWED o DISCARDED" });
    return;
  }

  const adminId = getUserId(req as Parameters<typeof requireUser>[0]);
  if (!adminId) {
    res.status(401).json({ error: "admin not found" });
    return;
  }

  try {
    const db = openContentDb();
    const existing = db.prepare("SELECT id FROM suggestions WHERE id = ?").get(id);
    if (!existing) {
      res.status(404).json({ error: "not found" });
      return;
    }

    const now = new Date().toISOString();
    db.prepare(
      `UPDATE suggestions SET status = ?, reviewed_by = ?, reviewed_at = ?, admin_note = ?
       WHERE id = ?`
    ).run(
      String(status),
      adminId,
      now,
      admin_note != null ? String(admin_note) : null,
      id
    );

    res.json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "internal server error";
    res.status(500).json({ error: message });
  }
});
