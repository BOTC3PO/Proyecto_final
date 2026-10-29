/**
 * Documento 17 — módulos favoritos. Cada persona marca los módulos que quiere tener a mano; la lista de
 * módulos los muestra en la pestaña «Favoritos».
 */
import { Router } from "express";
import { prisma } from "../lib/prisma";
import { requireUser } from "../lib/user-auth";
import { idDe, type UsuarioAula } from "../lib/aula-permisos";

export const favoritos = Router();

favoritos.get("/api/modulos-favoritos", requireUser, async (req, res) => {
  const userId = idDe(req.user as UsuarioAula);
  if (!userId) return res.status(401).json({ error: "no autenticado" });
  const filas = await prisma.moduloFavorito.findMany({ where: { usuarioId: userId }, orderBy: { createdAt: "desc" }, take: 500 });
  res.json({ ids: filas.map((f) => f.moduloId) });
});

favoritos.put("/api/modulos-favoritos/:moduloId", requireUser, async (req, res) => {
  const userId = idDe(req.user as UsuarioAula);
  if (!userId) return res.status(401).json({ error: "no autenticado" });
  const moduloId = req.params.moduloId as string;
  const modulo = await prisma.modulo.findFirst({ where: { id: moduloId }, select: { id: true } });
  if (!modulo) return res.status(404).json({ error: "módulo no encontrado" });
  const existe = await prisma.moduloFavorito.findFirst({ where: { usuarioId: userId, moduloId } });
  if (!existe) {
    await prisma.moduloFavorito.create({ data: { usuarioId: userId, moduloId, createdAt: new Date().toISOString() } });
  }
  res.json({ ok: true, favorito: true });
});

favoritos.delete("/api/modulos-favoritos/:moduloId", requireUser, async (req, res) => {
  const userId = idDe(req.user as UsuarioAula);
  if (!userId) return res.status(401).json({ error: "no autenticado" });
  await prisma.moduloFavorito.deleteMany({ where: { usuarioId: userId, moduloId: req.params.moduloId as string } });
  res.json({ ok: true, favorito: false });
});
