import { Router } from "express";
import { requireUser } from "../lib/user-auth";
import { openContentDb } from "../lib/db-open";

export const membresias = Router();

const getId = (req: { user?: { id?: string; _id?: { toString?: () => string } } }) =>
  req.user?.id ?? req.user?._id?.toString?.() ?? null;

membresias.get("/api/membresias/mis-escuelas", requireUser, (req, res) => {
  const userId = getId(req as Parameters<typeof getId>[0]);
  if (!userId) return res.status(401).json({ error: "no autenticado" });

  const db = openContentDb();
  const rows = db.prepare(`
    SELECT m.escuela_id, e.nombre
    FROM membresias m
    LEFT JOIN escuelas e ON e.id = m.escuela_id
    WHERE m.usuario_id = ?
      AND m.estado = 'activa'
    ORDER BY e.nombre ASC
  `).all(userId) as Array<{
    escuela_id: string;
    nombre: string | null;
  }>;

  return res.json({
    items: rows.map((r) => ({
      escuelaId: r.escuela_id,
      nombre: r.nombre ?? r.escuela_id,
    }))
  });
});
