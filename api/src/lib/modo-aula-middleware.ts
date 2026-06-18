import type { Request, Response, NextFunction } from "express";
import { prisma } from "./prisma";
import { hasRole, isStaffInRoles, resolveRoles } from "./roles";

export function checkModoAula(restriccion: "tienda" | "economia") {
  return async (req: Request, res: Response, next: NextFunction) => {
    const user = (req as never as { user?: { role?: string; roles?: string[] } })
      .user;
    // MULTIROL-01: el modo aula solo aplica a "alumnos puros"
    // (usuarios cuyo único rol es USER). Un usuario con
    // `roles: ["TEACHER", "USER"]` es staff (pasa `isStaffInRoles`) y
    // NO es un alumno puro, así que el modo aula no le aplica
    // aunque tenga USER en su array. Esto resuelve de raíz el bug
    // "profesor que también es alumno en otra aula": al ser
    // multi-rol real, el profesor no es un alumno puro.
    //
    // Compat Fase 1: un USER singular (`roles: ["USER"]`) sigue
    // restringido exactamente igual que antes.
    const userRoles = user ? resolveRoles(user) : [];
    if (user && isStaffInRoles(userRoles)) return next();
    if (user && !hasRole(user, "USER")) return next();

    const aulaId = (req.query as Record<string, string>).aulaId
      ?? (req.body as Record<string, string>)?.aulaId;

    if (!aulaId) return next();

    const row = await prisma.modoAula.findFirst({ where: { aulaId } });

    if (!row || !row.activo) return next();

    const restricciones = row.restricciones.split(",");
    if (restricciones.includes(restriccion)) {
      return res.status(403).json({
        error: "modo_aula_activo",
        mensaje: "El profesor ha restringido esta función durante la clase.",
        codigo: "MODO_AULA",
      });
    }

    return next();
  };
}
