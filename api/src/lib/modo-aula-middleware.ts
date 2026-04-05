import type { Request, Response, NextFunction } from "express";
import { openContentDb } from "./db-open";

export function checkModoAula(restriccion: "tienda" | "economia") {
  return (req: Request, res: Response, next: NextFunction) => {
    const role = (req as never as { user?: { role?: string } })
      .user?.role;
    // Solo aplica a alumnos
    if (role !== "USER") return next();

    const aulaId = (req.query as Record<string, string>).aulaId
      ?? (req.body as Record<string, string>)?.aulaId;

    if (!aulaId) return next();

    const db = openContentDb();
    const row = db.prepare(
      "SELECT activo, restricciones FROM modo_aula WHERE aula_id = ?"
    ).get(aulaId) as {
      activo: number; restricciones: string
    } | undefined;

    if (!row || row.activo === 0) return next();

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
