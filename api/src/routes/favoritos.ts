/**
 * Documento 17 — módulos favoritos y (L5) valoración de módulos.
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

// ── L5 — valoración de módulos ───────────────────────────────
// Puntaje de 1 a 5, uno por persona. Solo puede valorar quien empezó el módulo (tiene progreso registrado):
// así la valoración refleja a quien lo usó. Se muestra el promedio y la cantidad.

const resumenValoraciones = async (moduloIds: string[]) => {
  if (moduloIds.length === 0) return new Map<string, { promedio: number; cantidad: number }>();
  const grupos = await prisma.moduloValoracion.groupBy({
    by: ["moduloId"],
    where: { moduloId: { in: moduloIds } },
    _avg: { puntaje: true },
    _count: { _all: true }
  });
  return new Map(
    grupos.map((g) => [g.moduloId, { promedio: Math.round((g._avg.puntaje ?? 0) * 10) / 10, cantidad: g._count._all }])
  );
};

favoritos.get("/api/modulos-valoraciones", requireUser, async (req, res) => {
  const ids = String(req.query.ids ?? "").split(",").map((x) => x.trim()).filter(Boolean).slice(0, 200);
  const mapa = await resumenValoraciones(ids);
  res.json({ items: Object.fromEntries(mapa) });
});

favoritos.get("/api/modulos/:moduloId/valoracion", requireUser, async (req, res) => {
  const userId = idDe(req.user as UsuarioAula);
  const moduloId = req.params.moduloId as string;
  const resumen = (await resumenValoraciones([moduloId])).get(moduloId) ?? { promedio: 0, cantidad: 0 };
  const mia = userId ? await prisma.moduloValoracion.findFirst({ where: { usuarioId: userId, moduloId } }) : null;
  const puedeValorar = userId
    ? Boolean(await prisma.progresoModulo.findFirst({ where: { usuarioId: userId, moduloId } }))
    : false;
  res.json({ ...resumen, mia: mia?.puntaje ?? null, puedeValorar });
});

favoritos.put("/api/modulos/:moduloId/valoracion", requireUser, async (req, res) => {
  const userId = idDe(req.user as UsuarioAula);
  if (!userId) return res.status(401).json({ error: "no autenticado" });
  const moduloId = req.params.moduloId as string;
  const puntaje = Number(req.body?.puntaje);
  if (!Number.isInteger(puntaje) || puntaje < 1 || puntaje > 5) {
    return res.status(400).json({ error: "el puntaje va de 1 a 5" });
  }
  const progreso = await prisma.progresoModulo.findFirst({ where: { usuarioId: userId, moduloId } });
  if (!progreso) return res.status(403).json({ error: "solo puede valorar quien empezó el módulo", code: "SIN_PROGRESO" });
  const ahora = new Date().toISOString();
  const existente = await prisma.moduloValoracion.findFirst({ where: { usuarioId: userId, moduloId } });
  if (existente) {
    await prisma.moduloValoracion.updateMany({ where: { usuarioId: userId, moduloId }, data: { puntaje, updatedAt: ahora } });
  } else {
    await prisma.moduloValoracion.create({ data: { usuarioId: userId, moduloId, puntaje, createdAt: ahora, updatedAt: ahora } });
  }
  const resumen = (await resumenValoraciones([moduloId])).get(moduloId);
  res.json({ ok: true, mia: puntaje, ...resumen });
});
