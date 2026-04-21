import { Router } from "express";
import { requireUser } from "../lib/user-auth";
import { prisma } from "../lib/prisma";

export const membresias = Router();

const getId = (req: { user?: { id?: string; _id?: { toString?: () => string } } }) =>
  req.user?.id ?? req.user?._id?.toString?.() ?? null;

membresias.get("/api/membresias/mis-escuelas", requireUser, async (req, res) => {
  const userId = getId(req as Parameters<typeof getId>[0]);
  if (!userId) return res.status(401).json({ error: "no autenticado" });

  const rows = await prisma.membresia.findMany({
    where: {
      usuarioId: userId,
      estado: "activa"
    },
    include: {
      escuela: {
        select: { name: true }
      }
    },
    orderBy: {
      escuela: { name: "asc" }
    }
  });

  return res.json({
    items: rows.map((r) => ({
      escuelaId: r.escuelaId,
      nombre: r.escuela?.name ?? r.escuelaId
    }))
  });
});
