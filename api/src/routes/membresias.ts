import { Router } from "express";
import { requireUser } from "../lib/user-auth";
import { escuelasDisponiblesPara } from "../lib/sesion-escuela";

export const membresias = Router();

const getId = (req: { user?: { id?: string; _id?: { toString?: () => string } } }) =>
  req.user?.id ?? req.user?._id?.toString?.() ?? null;

membresias.get("/api/membresias/mis-escuelas", requireUser, async (req, res) => {
  const userId = getId(req as Parameters<typeof getId>[0]);
  if (!userId) return res.status(401).json({ error: "no autenticado" });

  // PLAN-multirol Fase 2 — además de las escuelas, los roles que tiene en
  // cada una: es lo que el selector necesita para mostrar "Escuela X
  // (profesor · padre)". Una persona puede tener varias membresías en la
  // misma escuela, así que agrupar es parte del contrato.
  const items = await escuelasDisponiblesPara(userId);
  return res.json({ items });
});
