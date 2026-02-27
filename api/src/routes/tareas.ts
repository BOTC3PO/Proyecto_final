import { Router } from "express";
import { getDb } from "../lib/db";
import { requireUser } from "../lib/user-auth";

export const tareasRouter = Router();

tareasRouter.get("/api/tareas", requireUser, async (req, res) => {
  try {
    const user = (req as { user?: { _id?: unknown; id?: string; role?: string } }).user;
    const rawId = user?._id ?? user?.id;
    const userId = rawId
      ? typeof rawId === "string"
        ? rawId
        : typeof (rawId as { toString?: () => string }).toString === "function"
          ? (rawId as { toString: () => string }).toString()
          : null
      : null;
    if (!userId) {
      res.status(401).json({ error: "not authenticated" });
      return;
    }
    const db = await getDb();
    // Intentamos buscar tareas asignadas al usuario en la colección "tareas"
    const rawTareas = await db
      .collection("tareas")
      .find({
        $or: [
          { usuarioId: userId },
          { studentId: userId },
          { assignedTo: userId },
          { "assignees": userId }
        ],
        isDeleted: { $ne: true }
      })
      .project({ _id: 1, id: 1, title: 1, titulo: 1, curso: 1, courseName: 1, dueDate: 1, vence: 1, status: 1 })
      .sort({ dueDate: 1, vence: 1, createdAt: -1 })
      .limit(50)
      .toArray();

    const tareas = rawTareas.map((item) => {
      const dueRaw = item.dueDate ?? item.vence;
      let vence = "Sin fecha";
      if (dueRaw) {
        const d = new Date(dueRaw as string | number | Date);
        if (!Number.isNaN(d.getTime())) {
          vence = d.toLocaleDateString("es-AR", { day: "2-digit", month: "2-digit", year: "numeric" });
        } else {
          vence = String(dueRaw);
        }
      }
      return {
        id: (item.id ?? item._id?.toString?.()) ?? "",
        titulo: (item.titulo ?? item.title ?? "Tarea sin nombre") as string,
        curso: (item.curso ?? item.courseName ?? "Curso") as string,
        vence
      };
    });

    res.json(tareas);
  } catch {
    res.status(500).json({ error: "internal server error" });
  }
});
