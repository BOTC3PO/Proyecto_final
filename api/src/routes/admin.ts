import { Router } from "express";
import { getDb } from "../lib/db";
import { requireAdmin } from "../lib/admin-auth";

export const adminRouter = Router();

adminRouter.get("/api/admin/usuarios", requireAdmin, async (req, res) => {
  try {
    const db = await getDb();
    const limit = Math.min(Number(req.query.limit ?? 50), 200);
    const offset = Number(req.query.offset ?? 0);
    const items = await db
      .collection("usuarios")
      .find({ isDeleted: { $ne: true } })
      .project({ _id: 1, fullName: 1, username: 1, role: 1, isActive: 1, createdAt: 1 })
      .skip(Number.isNaN(offset) || offset < 0 ? 0 : offset)
      .limit(Number.isNaN(limit) || limit <= 0 ? 50 : limit)
      .sort({ createdAt: -1 })
      .toArray();
    const usuarios = items.map((item) => ({
      id: item._id?.toString?.() ?? "",
      nombre: (item.fullName ?? item.username ?? "Sin nombre") as string,
      rol: (item.role ?? "USER") as string,
      estado: item.isActive === false ? "Inactivo" : "Activo"
    }));
    res.json(usuarios);
  } catch {
    res.status(500).json({ error: "internal server error" });
  }
});

adminRouter.get("/api/admin/cursos", requireAdmin, async (req, res) => {
  try {
    const db = await getDb();
    const limit = Math.min(Number(req.query.limit ?? 50), 200);
    const offset = Number(req.query.offset ?? 0);
    const items = await db
      .collection("cursos")
      .find({ isDeleted: { $ne: true } })
      .project({ _id: 1, id: 1, name: 1, title: 1, status: 1, enrollments: 1, studentCount: 1 })
      .skip(Number.isNaN(offset) || offset < 0 ? 0 : offset)
      .limit(Number.isNaN(limit) || limit <= 0 ? 50 : limit)
      .sort({ createdAt: -1 })
      .toArray();
    const cursos = items.map((item) => ({
      id: (item.id ?? item._id?.toString?.()) ?? "",
      titulo: (item.title ?? item.name ?? "Curso sin nombre") as string,
      estado: (item.status ?? "Activo") as string,
      estudiantes:
        typeof item.studentCount === "number"
          ? item.studentCount
          : Array.isArray(item.enrollments)
            ? item.enrollments.length
            : 0
    }));
    res.json(cursos);
  } catch {
    res.status(500).json({ error: "internal server error" });
  }
});

adminRouter.get("/api/admin/materias", requireAdmin, async (req, res) => {
  try {
    const db = await getDb();
    const items = await db
      .collection("materias")
      .find({})
      .sort({ nombre: 1 })
      .toArray();
    const materias = items.map((item) => ({
      id: item._id?.toString?.() ?? "",
      nombre: (item.nombre ?? item.name ?? "Sin nombre") as string,
      descripcion: (item.descripcion ?? item.description ?? "") as string,
      nivel: (item.nivel ?? item.level ?? "") as string,
      activa: item.activa !== false
    }));
    res.json(materias);
  } catch {
    res.status(500).json({ error: "internal server error" });
  }
});

adminRouter.post("/api/admin/materias", requireAdmin, async (req, res) => {
  try {
    const { nombre, descripcion, nivel } = req.body ?? {};
    if (!nombre || typeof nombre !== "string" || !nombre.trim()) {
      res.status(400).json({ error: "nombre is required" });
      return;
    }
    const db = await getDb();
    const now = new Date().toISOString();
    const doc = {
      nombre: nombre.trim(),
      descripcion: typeof descripcion === "string" ? descripcion.trim() : "",
      nivel: typeof nivel === "string" ? nivel.trim() : "",
      activa: true,
      createdAt: now,
      updatedAt: now
    };
    const result = await db.collection("materias").insertOne(doc);
    res.status(201).json({ id: result.insertedId.toString(), ...doc });
  } catch {
    res.status(500).json({ error: "internal server error" });
  }
});

adminRouter.patch("/api/admin/materias/:id", requireAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, descripcion, nivel, activa } = req.body ?? {};
    const db = await getDb();
    const { toObjectId } = await import("../lib/ids");
    const objectId = toObjectId(id as string);
    if (!objectId) {
      res.status(400).json({ error: "invalid id" });
      return;
    }
    const update: Record<string, unknown> = { updatedAt: new Date().toISOString() };
    if (typeof nombre === "string" && nombre.trim()) update.nombre = nombre.trim();
    if (typeof descripcion === "string") update.descripcion = descripcion.trim();
    if (typeof nivel === "string") update.nivel = nivel.trim();
    if (typeof activa === "boolean") update.activa = activa;
    const result = await db
      .collection("materias")
      .updateOne({ _id: objectId }, { $set: update });
    if (result.matchedCount === 0) {
      res.status(404).json({ error: "not found" });
      return;
    }
    res.json({ ok: true });
  } catch {
    res.status(500).json({ error: "internal server error" });
  }
});
