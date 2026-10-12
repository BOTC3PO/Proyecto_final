import type { Response } from "express";
import { prisma } from "./prisma";
import { hasRole } from "./roles";
import { isClassroomTeacher } from "./classroom-scope";

type ReqConUsuario = {
  user?: { id?: string; _id?: { toString?: () => string } | string; schoolId?: string | null; role?: string; roles?: string[] };
};

export type AulaGestionada = { id: string; escuelaId: string | null };

const idDe = (req: ReqConUsuario): string | null => {
  const u = req.user;
  if (!u) return null;
  if (typeof u.id === "string") return u.id;
  if (typeof u._id === "string") return u._id;
  return u._id?.toString?.() ?? null;
};

/**
 * C3 — ¿quién gestiona el aula? El ADMIN; el DIRECTIVO (o ADMIN_ESCUELA) de la escuela del aula; o el
 * docente titular o co-titular del aula. Responde 404 (aula inexistente) o 403 y devuelve `null` si no
 * corresponde: quien llama solo tiene que cortar. Es el criterio que ya usaba `desbloquear`
 * (PLAN-U §6); el panel de riesgo, el modo aula y los reportes solo pedían ser docente (o ni eso) de
 * cualquier escuela.
 */
export async function aulaGestionable(
  req: ReqConUsuario,
  res: Response,
  aulaId: string
): Promise<AulaGestionada | null> {
  const user = req.user ?? null;
  const aula = await prisma.clase.findFirst({
    where: { id: aulaId, isDeleted: { not: true } },
    include: { miembros: true },
  });
  if (!aula) {
    res.status(404).json({ error: "aula no encontrada" });
    return null;
  }
  const publico: AulaGestionada = { id: aula.id, escuelaId: aula.escuelaId ?? null };
  if (hasRole(user as never, "ADMIN")) return publico;
  if (hasRole(user as never, "DIRECTIVO") || hasRole(user as never, "ADMIN_ESCUELA")) {
    const escuelaUsuario = user?.schoolId ?? null;
    if (aula.escuelaId && aula.escuelaId === escuelaUsuario) return publico;
    res.status(403).json({ error: "sin permiso sobre esta aula" });
    return null;
  }
  const members = (aula.miembros ?? []).map((m) => ({ userId: m.usuarioId, roleInClass: m.rolEnClase }));
  if (isClassroomTeacher({ ...aula, members }, idDe(req))) return publico;
  res.status(403).json({ error: "sin permiso sobre esta aula" });
  return null;
}
