import { Router } from "express";
import { openContentDb } from "../lib/db-open";
import { requireAdmin } from "../lib/admin-auth";

export const adminGenerators = Router();

type GeneratorRow = {
  id: string; materia: string; label: string;
  description: string | null; version: number;
  subtipos: string; status: string;
};

type ChangelogRow = {
  id: string; generator_id: string; admin_id: string;
  note: string; changed_at: string;
};

// GET /api/admin/generators — lista completa incluyendo INACTIVE
adminGenerators.get("/api/admin/generators", requireAdmin, (req, res) => {
  try {
    const db = openContentDb();
    const rows = db
      .prepare("SELECT id, materia, label, description, version, subtipos, status FROM generator_configs ORDER BY materia ASC, id ASC")
      .all() as GeneratorRow[];

    res.json({
      items: rows.map((row) => ({
        ...row,
        subtipos: (() => { try { return JSON.parse(row.subtipos); } catch { return []; } })(),
      }))
    });
  } catch (err) {
    res.status(500).json({ error: err instanceof Error ? err.message : "error" });
  }
});

// PATCH /api/admin/generators/:id — editar generador
adminGenerators.patch("/api/admin/generators/:id", requireAdmin, (req, res) => {
  const id = `${req.params.id}`;
  const { label, description, status, subtipos } = req.body as Record<string, unknown>;

  const VALID_STATUSES = new Set(["ACTIVE", "INACTIVE"]);

  try {
    const db = openContentDb();
    const existing = db
      .prepare("SELECT id FROM generator_configs WHERE id = ?")
      .get(id) as { id: string } | undefined;

    if (!existing) {
      res.status(404).json({ error: "not found" });
      return;
    }

    const updates: string[] = [];
    const params: unknown[] = [];

    if (typeof label === "string" && label.trim()) {
      updates.push("label = ?");
      params.push(label.trim());
    }
    if (description !== undefined) {
      updates.push("description = ?");
      params.push(typeof description === "string" ? description.trim() || null : null);
    }
    if (typeof status === "string" && VALID_STATUSES.has(status)) {
      updates.push("status = ?");
      params.push(status);
    }
    if (Array.isArray(subtipos)) {
      updates.push("subtipos = ?");
      params.push(JSON.stringify(subtipos));
    }

    if (updates.length === 0) {
      res.status(400).json({ error: "nada que actualizar" });
      return;
    }

    params.push(id);
    db.prepare(`UPDATE generator_configs SET ${updates.join(", ")} WHERE id = ?`).run(...params);

    const updated = db
      .prepare("SELECT id, materia, label, description, version, subtipos, status FROM generator_configs WHERE id = ?")
      .get(id) as GeneratorRow;

    res.json({
      ...updated,
      subtipos: (() => { try { return JSON.parse(updated.subtipos); } catch { return []; } })(),
    });
  } catch (err) {
    res.status(500).json({ error: err instanceof Error ? err.message : "error" });
  }
});

// GET /api/admin/generators/:id/changelog — log de cambios
adminGenerators.get("/api/admin/generators/:id/changelog", requireAdmin, (req, res) => {
  const id = `${req.params.id}`;
  try {
    const db = openContentDb();

    // Crear tabla si no existe
    db.prepare(`
      CREATE TABLE IF NOT EXISTS generator_changelog (
        id TEXT PRIMARY KEY,
        generator_id TEXT NOT NULL,
        admin_id TEXT NOT NULL,
        note TEXT NOT NULL,
        changed_at TEXT NOT NULL
      )
    `).run();

    const rows = db
      .prepare("SELECT * FROM generator_changelog WHERE generator_id = ? ORDER BY changed_at DESC LIMIT 20")
      .all(id) as ChangelogRow[];

    res.json({ items: rows });
  } catch (err) {
    res.status(500).json({ error: err instanceof Error ? err.message : "error" });
  }
});

// POST /api/admin/generators/:id/changelog — agregar entrada al log
adminGenerators.post("/api/admin/generators/:id/changelog", requireAdmin, (req, res) => {
  const id = `${req.params.id}`;
  const { note, admin_id } = req.body as Record<string, unknown>;

  if (!note || typeof note !== "string" || !note.trim()) {
    res.status(400).json({ error: "note requerido" });
    return;
  }

  try {
    const db = openContentDb();

    db.prepare(`
      CREATE TABLE IF NOT EXISTS generator_changelog (
        id TEXT PRIMARY KEY,
        generator_id TEXT NOT NULL,
        admin_id TEXT NOT NULL,
        note TEXT NOT NULL,
        changed_at TEXT NOT NULL
      )
    `).run();

    const entry: ChangelogRow = {
      id: `chg-${Date.now()}-${Math.random().toString(16).slice(2)}`,
      generator_id: id,
      admin_id: typeof admin_id === "string" ? admin_id : "unknown",
      note: note.trim(),
      changed_at: new Date().toISOString(),
    };

    db.prepare(
      "INSERT INTO generator_changelog (id, generator_id, admin_id, note, changed_at) VALUES (?, ?, ?, ?, ?)"
    ).run(entry.id, entry.generator_id, entry.admin_id, entry.note, entry.changed_at);

    res.status(201).json(entry);
  } catch (err) {
    res.status(500).json({ error: err instanceof Error ? err.message : "error" });
  }
});
