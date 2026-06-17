import type { RequestHandler } from "express";
import { canManageParents } from "./authorization";
import { prisma } from "./prisma";

type ClassroomMember = { userId?: string; roleInClass?: string };

type UserIdentity = {
  role?: string;
  schoolId?: string | null;
  _id?: { toString?: () => string } | string;
  id?: string;
};

type AulaDoc = {
  id?: string;
  schoolId?: string;
  institutionId?: string;
  createdBy?: string | null;
  teacherId?: string | null;
  teacherOfRecord?: string | null;
  // FIX-CONFIG-CODIGO — códigos de clase que la UI usa para que los
  // alumnos se sumen al aula (`classCode`) y para trazabilidad
  // interna (`code`). Se propagan desde el modelo Prisma `Clase`
  // (columnas `class_code` y `code`).
  code?: string | null;
  classCode?: string | null;
  members?: ClassroomMember[];
  isDeleted?: boolean;
};

/**
 * Criterio canónico "es dueño del aula".
 *
 * El modelo `Clase` expresa la autoría docente por TRES vías independientes
 * (`createdBy`, `teacherId`, `teacherOfRecord`). Un usuario es dueño si su id
 * coincide con cualquiera de ellas. Es el bloque base de `isClassroomTeacher`.
 */
const isClassroomOwner = (
  classroom: Pick<AulaDoc, "createdBy" | "teacherId" | "teacherOfRecord">,
  userId: string | null
): boolean => {
  if (!userId) return false;
  return (
    classroom.createdBy === userId ||
    classroom.teacherId === userId ||
    classroom.teacherOfRecord === userId
  );
};

/**
 * Criterio CANÓNICO "es docente del aula".
 *
 * Devuelve true cuando el usuario tiene autoridad de docente sobre la clase por
 * cualquiera de estos caminos:
 *  - es ADMIN global;
 *  - es miembro con rol TEACHER en `clase_miembros`;
 *  - es DUEÑO de la clase por `createdBy`, `teacherId` o `teacherOfRecord`.
 *
 * ESTE es el único criterio válido de "docente/dueño del aula". Cualquier ruta
 * o middleware que necesite decidir si un usuario es docente del aula debe usar
 * este helper en lugar de reimplementar la combinación ad-hoc de campos.
 */
export const isClassroomTeacher = (
  classroom: Pick<AulaDoc, "createdBy" | "teacherId" | "teacherOfRecord" | "members">,
  userId: string | null,
  userRole?: string | null
): boolean => {
  if (userRole === "ADMIN") return true;
  if (isClassroomOwner(classroom, userId)) return true;
  if (!userId) return false;
  const members = Array.isArray(classroom.members) ? classroom.members : [];
  return members.some((entry) => entry.userId === userId && entry.roleInClass === "TEACHER");
};

type ClassroomScopeOptions = {
  paramName?: string;
  /**
   * FIX-TABLON-403 — algunas rutas (ej. `/api/aula/leaderboard`,
   * `/api/aula/actividades`) reciben el `classroomId` por QUERY
   * STRING y no por path param. Por defecto el middleware lee
   * `req.params[paramName]`, pero se puede optar por `query` para
   * mantener la URL pública intacta sin cambiar el handler.
   */
  paramSource?: "params" | "query";
  /**
   * FIX-TABLON-403 — mensaje del 400 cuando falta el id. Por
   * defecto se mantiene el genérico `classroom id required` para
   * no romper consumidores existentes; las rutas que quieran un
   * mensaje específico (ej. `classroomId requerido` para
   * mantener compat con FIX-AULA-PARAM) lo pasan explícito.
   */
  badRequestMessage?: string;
  allowMemberRoles?: "any" | string[];
  allowSchoolMatch?: boolean;
  schoolMatchRoles?: string[];
  allowAdmin?: boolean;
  includeDeleted?: boolean;
  notFoundMessage?: string;
};

const resolveUserId = (user?: UserIdentity) => {
  if (!user) return null;
  if (typeof user.id === "string") return user.id;
  if (typeof user._id === "string") return user._id;
  if (user._id && typeof user._id === "object" && typeof user._id.toString === "function") {
    return user._id.toString();
  }
  return null;
};

const resolveUserSchoolId = (user?: UserIdentity) =>
  typeof user?.schoolId === "string" ? user.schoolId : null;

const resolveClassroomSchoolId = (classroom?: { schoolId?: string; institutionId?: string }) =>
  classroom?.schoolId ?? classroom?.institutionId ?? null;

export const requireClassroomScope =
  (options: ClassroomScopeOptions = {}): RequestHandler =>
  async (req, res, next) => {
    const paramName = options.paramName ?? "id";
    const paramSource = options.paramSource ?? "params";
    const rawId =
      paramSource === "query"
        ? (req.query as Record<string, unknown>)[paramName]
        : req.params[paramName];
    const classroomId =
      typeof rawId === "string" && rawId.length > 0 ? rawId : null;
    if (!classroomId) {
      res.status(400).json({ error: options.badRequestMessage ?? "classroom id required" });
      return;
    }
    const whereClause: any = { id: classroomId };
    if (!options.includeDeleted) {
      whereClause.isDeleted = { not: true };
    }
    const claseRaw = await prisma.clase.findFirst({
      where: whereClause,
      include: { miembros: true }
    });
    if (!claseRaw) {
      res.status(404).json({ error: options.notFoundMessage ?? "classroom not found" });
      return;
    }

    const classroom: AulaDoc = {
      id: claseRaw.id,
      schoolId: claseRaw.escuelaId ?? undefined,
      createdBy: claseRaw.createdBy ?? null,
      teacherId: claseRaw.teacherId ?? null,
      teacherOfRecord: claseRaw.teacherOfRecord ?? null,
      isDeleted: claseRaw.isDeleted,
      // FIX-CONFIG-CODIGO — el modelo Prisma `Clase` expone `code` y
      // `classCode` (códigos legacy y de join, ver `schema.prisma:104`).
      // Antes no se propagaban al `res.locals.classroom`, así que el
      // front (`aula.tsx`, `ProfesorAulaConfiguracion.tsx`) los veía
      // como `undefined` aunque la fila los tuviera poblados.
      code: claseRaw.code ?? null,
      classCode: claseRaw.classCode ?? null,
      members: claseRaw.miembros.map((m: { usuarioId: string; rolEnClase: string }) => ({
        userId: m.usuarioId,
        roleInClass: m.rolEnClase
      }))
    };

    const user = (req as { user?: UserIdentity }).user;
    const userId = resolveUserId(user);
    const userRole = user?.role ?? null;
    const userSchoolId = resolveUserSchoolId(user);
    const classroomSchoolId = resolveClassroomSchoolId(classroom);
    const members: ClassroomMember[] = Array.isArray(classroom.members) ? classroom.members : [];
    const member = userId ? members.find((entry) => entry.userId === userId) : undefined;
    const memberRole = member?.roleInClass ?? null;

    const allowAdmin = options.allowAdmin ?? true;
    const isAdmin = allowAdmin && userRole === "ADMIN";

    const allowMemberRoles = options.allowMemberRoles ?? "any";
    const isAllowedMember =
      allowMemberRoles === "any"
        ? !!member
        : !!member && allowMemberRoles.includes(memberRole ?? "");

    const allowSchoolMatch = options.allowSchoolMatch ?? true;
    const canMatchByRole = options.schoolMatchRoles
      ? options.schoolMatchRoles.includes(userRole ?? "")
      : canManageParents(userRole ?? null);
    const isSchoolMatch =
      allowSchoolMatch &&
      canMatchByRole &&
      !!userSchoolId &&
      !!classroomSchoolId &&
      userSchoolId === classroomSchoolId;

    // Criterio canónico "es docente del aula" (isClassroomTeacher): admin,
    // miembro TEACHER o dueño por createdBy/teacherId/teacherOfRecord. Aquí lo
    // usamos para AMPLIAR el acceso al dueño legítimo aunque no figure en
    // `clase_miembros` ni comparta escuela. Respeta `allowMemberRoles`: el dueño
    // cuenta como TEACHER, de modo que si la ruta restringe a roles que no
    // incluyen TEACHER (p.ej. ["STUDENT"] o ["ADMIN"]) no entra por esta vía. No
    // relaja los caminos admin/miembro/escuela existentes (admin y miembro
    // TEACHER ya quedan cubiertos por isAdmin/isAllowedMember).
    const isTeacherAuthority = isClassroomTeacher(classroom, userId, userRole);
    const teacherAuthorityAllowed =
      isTeacherAuthority && (allowMemberRoles === "any" || allowMemberRoles.includes("TEACHER"));

    if (!isAdmin && !isAllowedMember && !isSchoolMatch && !teacherAuthorityAllowed) {
      res.status(403).json({ error: "forbidden" });
      return;
    }

    res.locals.classroom = classroom;
    res.locals.classroomScope = {
      userId,
      userSchoolId,
      classroomSchoolId,
      memberRole
    };
    next();
  };
