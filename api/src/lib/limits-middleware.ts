import type { Request, Response, NextFunction } from "express";
import { prisma } from "./prisma";
import {
  puedeAgregarStaff,
  puedeAgregarAula,
  puedeAgregarAlumno,
} from "./suscripciones";

const getRole = (req: Request) =>
  (req as unknown as { user?: { role?: string } }).user?.role ?? "";

const getSchoolId = (req: Request) =>
  (req as unknown as { user?: { schoolId?: string | null } }).user?.schoolId ?? null;

// Middleware: verificar límite de staff al agregar miembro
export async function checkStaffLimit(
  req: Request, res: Response, next: NextFunction
) {
  const role = getRole(req);
  if (role === "ADMIN") return next();

  const schoolId = getSchoolId(req);
  if (!schoolId) return next();

  const nuevoRol = (req.body as Record<string, unknown>)?.role as string;
  if (nuevoRol !== "TEACHER" && nuevoRol !== "DIRECTIVO") return next();

  try {
    const count = await prisma.usuario.count({
      where: { escuelaId: schoolId, role: nuevoRol, isBanned: { not: true } }
    });

    if (!(await puedeAgregarStaff(schoolId, nuevoRol, count))) {
      return res.status(403).json({
        error: "límite_alcanzado",
        mensaje: `Alcanzaste el límite de ${nuevoRol === "TEACHER" ? "profesores" : "directivos"} en tu plan actual.`,
        codigo: "STAFF_LIMIT_REACHED",
      });
    }
    return next();
  } catch {
    return next();
  }
}

// Middleware: verificar límite de aulas activas
export async function checkAulaLimit(
  req: Request, res: Response, next: NextFunction
) {
  const role = getRole(req);
  if (role === "ADMIN") return next();

  const schoolId = getSchoolId(req);
  if (!schoolId) return next();

  try {
    const count = await prisma.clase.count({
      where: {
        escuelaId: schoolId,
        status: "ACTIVE",
        isDeleted: { not: true }
      }
    });

    if (!(await puedeAgregarAula(schoolId, role, count))) {
      return res.status(403).json({
        error: "límite_alcanzado",
        mensaje: "Alcanzaste el límite de aulas activas en tu plan actual.",
        codigo: "AULA_LIMIT_REACHED",
      });
    }
    return next();
  } catch {
    return next();
  }
}

// Middleware: verificar límite de alumnos por aula
export async function checkAlumnoLimit(
  req: Request, res: Response, next: NextFunction
) {
  const role = getRole(req);
  if (role === "ADMIN") return next();

  const schoolId = getSchoolId(req);
  if (!schoolId) return next();

  const aulaId = (req.body as Record<string, unknown>)?.aulaId as string
    ?? (req.params as Record<string, string>)?.aulaId;
  if (!aulaId) return next();

  try {
    const aula = await prisma.clase.findFirst({ where: { id: aulaId } });
    if (!aula) return next();

    const alumnosCount = await prisma.claseMiembro.count({
      where: { claseId: aulaId, rolEnClase: "USER" }
    });

    if (!(await puedeAgregarAlumno(schoolId, role, alumnosCount))) {
      return res.status(403).json({
        error: "límite_alcanzado",
        mensaje: "Alcanzaste el límite de alumnos por aula en tu plan actual.",
        codigo: "ALUMNO_LIMIT_REACHED",
      });
    }
    return next();
  } catch {
    return next();
  }
}
