import type { NextFunction, Request, Response } from "express";
import { getCanonicalMembershipRole } from "./membership-roles";

const STAFF_ROLES = new Set(["ADMIN", "DIRECTIVO", "TEACHER"]);

export const canCreateClass = (role?: string | null) => !!role && STAFF_ROLES.has(role);

export const canPostInClass = (role?: string | null) => !!role && STAFF_ROLES.has(role);

export const canModerateContent = (role?: string | null) => !!role && STAFF_ROLES.has(role);

export const canMintCurrency = (role?: string | null) => !!role && STAFF_ROLES.has(role);

export const canManageParents = (role?: string | null) => !!role && STAFF_ROLES.has(role);

export const canPostAsStudent = (role?: string | null) =>
  getCanonicalMembershipRole(role ?? undefined) === "STUDENT";

export const canModerateIntercambios = (role?: string | null) => canModerateContent(role);

export const canViewAllUsers = (role?: string | null) => role === "ADMIN";

export const isStaffRole = (role?: string | null) => {
  if (role === "ADMIN") return true;
  const membership = getCanonicalMembershipRole(role ?? undefined);
  return membership === "DIRECTIVO" || membership === "TEACHER";
};

export const canReadAsLearner = (role?: string | null) => {
  const membership = getCanonicalMembershipRole(role ?? undefined);
  return membership === "STUDENT" || membership === "PARENT";
};

export const canProposeGovernanceChange = (role?: string | null) => isStaffRole(role);

export const canVoteContent = (role?: string | null) => {
  if (role === "ADMIN") return true;
  const membership = getCanonicalMembershipRole(role ?? undefined);
  return membership === "DIRECTIVO" || membership === "TEACHER" || membership === "STUDENT";
};

export const canVoteGovernance = (role?: string | null) => role === "ADMIN";

type ClassroomMember = { userId?: string; roleInClass?: string };
type AuthorizationUser = {
  _id?: { toString?: () => string } | string;
  id?: string;
  role?: string | null;
  schoolId?: string | null;
};

type AuthorizationContext = {
  req: Request;
  res: Response;
  classroom?: { members?: ClassroomMember[] | null; schoolId?: string | null; institutionId?: string | null } | null;
};

type AuthorizationResult = {
  allowed: boolean;
  reason?: string;
  data?: Record<string, unknown>;
};

export type AuthorizationPolicy =
  | "aula-feed/read"
  | "aulas/create"
  | "aulas/list"
  | "aulas/manage"
  | "aulas/manage-classroom"
  | "aulas/read"
  | "economia/compras"
  | "economia/mint"
  | "economia/moderate-intercambios"
  | "estadisticas/export"
  | "estadisticas/read"
  | "publicaciones/comment"
  | "publicaciones/create"
  | "publicaciones/read"
  | "progreso/read"
  | "progreso/write"
  | "reportes/export"
  | "reportes/read"
  | "resource-links/read"
  | "resource-links/write"
  | "usuarios/create"
  | "usuarios/list"
  | "usuarios/read";

const getUserId = (user?: AuthorizationUser) => {
  if (!user) return null;
  if (typeof user._id === "string") return user._id;
  if (user._id && typeof user._id === "object" && typeof user._id.toString === "function") {
    return user._id.toString();
  }
  if (typeof user.id === "string") return user.id;
  return null;
};

const resolveAccessLevel = (role?: string | null) => {
  if (role === "ADMIN") return "admin" as const;
  if (canManageParents(role) || isStaffRole(role)) return "staff" as const;
  if (canReadAsLearner(role)) return "learner" as const;
  return null;
};

const resolveTargetUsuarioId = (req: Request) => {
  const bodyUserId = typeof req.body?.usuarioId === "string" ? req.body.usuarioId : null;
  if (bodyUserId) return bodyUserId;
  const queryUserId = typeof req.query?.usuarioId === "string" ? req.query.usuarioId : null;
  if (queryUserId) return queryUserId;
  return null;
};

const policies: Record<AuthorizationPolicy, (user: AuthorizationUser | undefined, context: AuthorizationContext) => AuthorizationResult> =
  {
    "aula-feed/read": (user) => {
      const accessLevel = resolveAccessLevel(user?.role);
      if (!accessLevel) return { allowed: false };
      return { allowed: true, data: { accessLevel } };
    },
    "aulas/create": (user) => ({ allowed: canCreateClass(user?.role ?? null) }),
    "aulas/list": (user) => {
      const accessLevel = resolveAccessLevel(user?.role);
      if (!accessLevel) return { allowed: false };
      return { allowed: true, data: { accessLevel } };
    },
    "aulas/manage": (user) => ({ allowed: canManageParents(user?.role ?? null) }),
    "aulas/manage-classroom": (user, context) => {
      const classroom = context.classroom;
      if (!classroom) return { allowed: false };
      return {
        allowed: canManageClassroom({
          requesterId: getUserId(user),
          requesterRole: user?.role ?? null,
          requesterSchoolId: user?.schoolId ?? null,
          classroomSchoolId: classroom.schoolId ?? classroom.institutionId ?? null,
          classroomMembers: classroom.members ?? null
        })
      };
    },
    "aulas/read": (user) => {
      const accessLevel = resolveAccessLevel(user?.role);
      if (!accessLevel) return { allowed: false };
      return { allowed: true, data: { accessLevel } };
    },
    "economia/compras": (user, context) => {
      const requesterId = getUserId(user);
      const usuarioId = typeof context.req.body?.usuarioId === "string" ? context.req.body.usuarioId : null;
      if (!requesterId || !usuarioId) return { allowed: false };
      const isOwner = requesterId === usuarioId;
      if (isOwner) return { allowed: true };
      return { allowed: canModerateIntercambios(user?.role ?? null) };
    },
    "economia/mint": (user) => ({ allowed: canMintCurrency(user?.role ?? null) }),
    "economia/moderate-intercambios": (user) => ({
      allowed: canModerateIntercambios(user?.role ?? null),
      data: { isAdmin: user?.role === "ADMIN" }
    }),
    "estadisticas/export": (user) => ({ allowed: isStaffRole(user?.role ?? null) }),
    "estadisticas/read": (user) => ({ allowed: isStaffRole(user?.role ?? null) }),
    "publicaciones/comment": (user) => ({ allowed: canPostAsStudent(user?.role ?? null) }),
    "publicaciones/create": (user) => ({ allowed: canPostInClass(user?.role ?? null) }),
    "publicaciones/read": (user) => {
      const accessLevel = resolveAccessLevel(user?.role);
      if (!accessLevel) return { allowed: false };
      return { allowed: true, data: { accessLevel } };
    },
    "progreso/read": (user, context) => {
      const requesterId = getUserId(user);
      if (!requesterId) return { allowed: false };
      const targetUsuarioId = resolveTargetUsuarioId(context.req);
      if (targetUsuarioId && requesterId === targetUsuarioId) return { allowed: true };
      return { allowed: isStaffRole(user?.role ?? null), data: { isStaff: isStaffRole(user?.role ?? null) } };
    },
    "progreso/write": (user, context) => {
      const requesterId = getUserId(user);
      if (!requesterId) return { allowed: false };
      const targetUsuarioId =
        resolveTargetUsuarioId(context.req) ?? (context.req.method === "PATCH" ? requesterId : null);
      if (targetUsuarioId && requesterId === targetUsuarioId) return { allowed: true };
      return { allowed: isStaffRole(user?.role ?? null), data: { isStaff: isStaffRole(user?.role ?? null) } };
    },
    "reportes/export": (user) => ({ allowed: isStaffRole(user?.role ?? null) }),
    "reportes/read": (user) => ({ allowed: isStaffRole(user?.role ?? null) }),
    "resource-links/read": (user) => {
      const isStaff = isStaffRole(user?.role ?? null);
      const canRead = isStaff || canReadAsLearner(user?.role ?? null);
      return canRead ? { allowed: true, data: { isStaff } } : { allowed: false };
    },
    "resource-links/write": (user) => ({ allowed: isStaffRole(user?.role ?? null) }),
    "usuarios/create": (user) => {
      if (canViewAllUsers(user?.role ?? null)) return { allowed: true, data: { accessLevel: "admin" } };
      if (canManageParents(user?.role ?? null)) return { allowed: true, data: { accessLevel: "school" } };
      return { allowed: false };
    },
    "usuarios/list": (user) => {
      if (canViewAllUsers(user?.role ?? null)) return { allowed: true, data: { accessLevel: "admin" } };
      if (canManageParents(user?.role ?? null)) return { allowed: true, data: { accessLevel: "school" } };
      return { allowed: false };
    },
    "usuarios/read": (user) => {
      if (canViewAllUsers(user?.role ?? null)) return { allowed: true, data: { accessLevel: "admin" } };
      if (canManageParents(user?.role ?? null) || canReadAsLearner(user?.role ?? null)) {
        return { allowed: true, data: { accessLevel: "member" } };
      }
      return { allowed: false };
    }
  };

export const canManageClassroom = ({
  requesterId,
  requesterRole,
  requesterSchoolId,
  classroomSchoolId,
  classroomMembers
}: {
  requesterId: string | null;
  requesterRole?: string | null;
  requesterSchoolId?: string | null;
  classroomSchoolId?: string | null;
  classroomMembers?: ClassroomMember[] | null;
}) => {
  const hasInstitutionRole =
    requesterRole === "DIRECTIVO" &&
    !!requesterSchoolId &&
    !!classroomSchoolId &&
    requesterSchoolId === classroomSchoolId;
  const hasAdminMembership = !!requesterId
    ? (classroomMembers ?? []).some(
        (member) => member.userId === requesterId && member.roleInClass === "ADMIN"
      )
    : false;
  return hasInstitutionRole || hasAdminMembership;
};

export const requirePolicy = (
  policy: AuthorizationPolicy,
  buildContext?: (req: Request, res: Response) => Partial<AuthorizationContext> | Promise<Partial<AuthorizationContext>>
) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const user = (req as { user?: AuthorizationUser }).user;
    const context: AuthorizationContext = {
      req,
      res,
      ...(buildContext ? await buildContext(req, res) : {})
    };
    const policyResult = policies[policy](user, context);
    if (!policyResult.allowed) {
      res.status(403).json({ error: policyResult.reason ?? "forbidden" });
      return;
    }
    res.locals.authorization = {
      policy,
      data: policyResult.data ?? null
    };
    next();
  };
};
