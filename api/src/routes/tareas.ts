import { Router } from "express";
import { prisma } from "../lib/prisma";
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

    // Tarea stores full doc as JSON; fetch all and filter in code.
    const rows = await prisma.tarea.findMany({ take: 200 });

    const rawTareas = rows
      .map((r) => {
        try { return { ...JSON.parse(r.json), id: r.id }; } catch { return null; }
      })
      .filter((item): item is Record<string, unknown> => {
        if (!item) return false;
        if (item.isDeleted === true) return false;
        const ids = [item.usuarioId, item.studentId, item.assignedTo];
        if (Array.isArray(item.assignees)) ids.push(...item.assignees);
        return ids.includes(userId);
      })
      .slice(0, 50);

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
        id: String(item.id ?? ""),
        titulo: String(item.titulo ?? item.title ?? "Tarea sin nombre"),
        curso: String(item.curso ?? item.courseName ?? "Curso"),
        vence,
      };
    });

    res.json(tareas);
  } catch {
    res.status(500).json({ error: "internal server error" });
  }
});
