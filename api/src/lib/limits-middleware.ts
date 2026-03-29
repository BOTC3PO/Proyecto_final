import type { Request, Response, NextFunction } from "express";
import { getDb } from "./db";
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
    const db = await getDb();
    const count = await db.collection("users").countDocuments({
      schoolId,
      role: nuevoRol,
      isBanned: { $ne: true },
    });

    if (!puedeAgregarStaff(schoolId, nuevoRol, count)) {
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
    const db = await getDb();
    const count = await db.collection("aulas").countDocuments({
      $or: [{ institutionId: schoolId }, { schoolId }],
      status: "ACTIVE",
      isDeleted: { $ne: true },
    });

    if (!puedeAgregarAula(schoolId, role, count)) {
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
    const db = await getDb();
    const aula = await db.collection("aulas").findOne({ id: aulaId });
    if (!aula) return next();

    const members = Array.isArray(aula.members)
      ? (aula.members as { role?: string }[])
      : [];
    const alumnosCount = members.filter((m) => m.role === "USER").length;

    if (!puedeAgregarAlumno(schoolId, role, alumnosCount)) {
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
