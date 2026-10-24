import type { Request, Response, NextFunction } from "express";
import { prisma } from "./prisma";
import {
  puedeAgregarStaff,
  puedeAgregarAula,
  puedeAgregarAlumno,
} from "./suscripciones";
import { hasRole, resolveRoles } from "./roles";
import { whereSoloAlumnosReales } from "./inscripcion-prueba";

const getUser = (req: Request) =>
  (req as unknown as { user?: { role?: string; roles?: string[] } }).user;

const getRole = (req: Request) => getUser(req)?.role ?? "";

const getSchoolId = (req: Request) =>
  (req as unknown as { user?: { schoolId?: string | null } }).user?.schoolId ?? null;

// Middleware: verificar límite de staff al agregar miembro
export async function checkStaffLimit(
  req: Request, res: Response, next: NextFunction
) {
  const user = getUser(req);
  if (hasRole(user, "ADMIN")) return next();

  const schoolId = getSchoolId(req);
  if (!schoolId) return next();

  const nuevoRol = (req.body as Record<string, unknown>)?.role as string;
  if (nuevoRol !== "TEACHER" && nuevoRol !== "DIRECTIVO") return next();

  try {
    const count = await prisma.usuario.count({
      where: { escuelaId: schoolId, roles: { has: nuevoRol }, isBanned: { not: true } }
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
  const user = getUser(req);
  if (hasRole(user, "ADMIN")) return next();

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

    if (!(await puedeAgregarAula(schoolId, getRole(req), count))) {
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
  const user = getUser(req);
  if (hasRole(user, "ADMIN")) return next();

  const schoolId = getSchoolId(req);
  if (!schoolId) return next();

  const aulaId = (req.body as Record<string, unknown>)?.aulaId as string
    ?? (req.params as Record<string, string>)?.aulaId;
  if (!aulaId) return next();

  try {
    const aula = await prisma.clase.findFirst({ where: { id: aulaId } });
    if (!aula) return next();

    // FASE 4 — el espejo-alumno no cuenta contra el límite de alumnos
    // del plan (no es un alumno facturable).
    // PLAN-A §4 — `rolEnClase` es "STUDENT" en la data real (el rol de
    // cuenta "USER" nunca se escribe acá); con "USER" este conteo daba
    // siempre 0 y el límite de alumnos por aula nunca se aplicaba.
    const alumnosCount = await prisma.claseMiembro.count({
      where: { claseId: aulaId, rolEnClase: "STUDENT", ...whereSoloAlumnosReales() }
    });

    if (!(await puedeAgregarAlumno(schoolId, getRole(req), alumnosCount))) {
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
