import type { NextFunction, Request, Response } from "express";
import { getCanonicalMembershipRole } from "./membership-roles";
import { hasRole, isStaffInRoles, resolveRoles, type RoleUser } from "./roles";

// MULTIROL-01 (Fase 1): `STAFF_ROLES` se mantiene como Set (legado)
// pero los helpers públicos ahora aceptan un `RoleUser` (con `role`
// y/o `roles`). El check interno mira primero `roles` y cae al
// singular para compat. La equivalencia funcional con la versión
// anterior (rol singular) se valida en los tests de Fase 1.
const STAFF_ROLES = new Set(["ADMIN", "DIRECTIVO", "TEACHER"]);

const toRoleUser = (input?: string | null | RoleUser): RoleUser => {
  if (input == null) return {};
  if (typeof input === "string") return { role: input };
  return input;
};

const staffFromInput = (input?: string | null | RoleUser): boolean => {
  if (input == null) return false;
  if (typeof input === "string") return STAFF_ROLES.has(input);
  const roles = resolveRoles(input);
  if (roles.length === 0) return false;
  // Compat: si solo trae `role` y no `roles`, la lógica vieja
  // aplicaba `STAFF_ROLES.has(role)` directamente. Si trae `roles`
  // miramos el array.
  return isStaffInRoles(roles);
};

// `canCreateClass` — antes `canCreateClass(role: string)`.
// Ahora acepta `role: string | RoleUser`. Una `RoleUser` con
// `roles: ["TEACHER"]` (sin role singular) debe seguir dando `true`.
export const canCreateClass = (input?: string | null | RoleUser) => staffFromInput(input);

export const canPostInClass = (input?: string | null | RoleUser) => staffFromInput(input);

export const canModerateContent = (input?: string | null | RoleUser) => staffFromInput(input);

export const canMintCurrency = (input?: string | null | RoleUser) => staffFromInput(input);

export const canManageParents = (input?: string | null | RoleUser) => staffFromInput(input);

export const canPostAsStudent = (input?: string | null | RoleUser) => {
  const ru = toRoleUser(input);
  // Cualquiera de los roles del usuario que mapee a STUDENT habilita
  // la acción. Un TEACHER+USER (multi-rol) puede actuar como learner
  // si USER está en su array.
  const roles = resolveRoles(ru);
  return roles.some((r) => getCanonicalMembershipRole(r) === "STUDENT");
};

export const canModerateIntercambios = (input?: string | null | RoleUser) =>
  canModerateContent(input);

export const canViewAllUsers = (input?: string | null | RoleUser) => {
  const ru = toRoleUser(input);
  // ADMIN sigue siendo el único con acceso a "ver todos los usuarios"
  // globalmente. Miramos `roles` primero, `role` después.
  return hasRole(ru, "ADMIN");
};

export const isStaffRole = (input?: string | null | RoleUser) => {
  const ru = toRoleUser(input);
  const roles = resolveRoles(ru);
  if (roles.length === 0) return false;
  // MULTIROL-01: un usuario es staff si AL MENOS UNO de sus roles es
  // staff. Ej. un TEACHER+USER es staff (TEACHER lo es) y además puede
  // actuar como learner. Un USER puro no es staff.
  return isStaffInRoles(roles);
};

export const canReadAsLearner = (input?: string | null | RoleUser) => {
  const ru = toRoleUser(input);
  const roles = resolveRoles(ru);
  return roles.some((r) => {
    const membership = getCanonicalMembershipRole(r);
    return membership === "STUDENT" || membership === "PARENT";
  });
};

export const canProposeGovernanceChange = (input?: string | null | RoleUser) =>
  isStaffRole(input);

export const canVoteContent = (input?: string | null | RoleUser) => {
  const ru = toRoleUser(input);
  if (hasRole(ru, "ADMIN")) return true;
  const roles = resolveRoles(ru);
  return roles.some((r) => {
    const membership = getCanonicalMembershipRole(r);
    return membership === "DIRECTIVO" || membership === "TEACHER" || membership === "STUDENT";
  });
};

export const canVoteGovernance = (input?: string | null | RoleUser) => staffFromInput(input);

type ClassroomMember = { userId?: string; roleInClass?: string };
type AuthorizationUser = RoleUser & {
  _id?: { toString?: () => string } | string;
  id?: string;
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
  | "aula-feed/write"
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

const resolveAccessLevel = (input?: string | null | RoleUser) => {
  if (hasRole(typeof input === "object" ? input : null, "ADMIN") || (typeof input === "string" && input === "ADMIN")) {
    return "admin" as const;
  }
  if (canManageParents(input) || isStaffRole(input)) return "staff" as const;
  if (canReadAsLearner(input)) return "learner" as const;
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
      const accessLevel = resolveAccessLevel(user);
      if (!accessLevel) return { allowed: false };
      return { allowed: true, data: { accessLevel } };
    },
    "aula-feed/write": (user) => {
      if (!user) return { allowed: false, reason: "unauthenticated" };
      // MULTIROL-01: si alguno de los roles del usuario es staff, pasa.
      if (isStaffRole(user)) {
        return { allowed: true, data: { accessLevel: "staff" } };
      }
      return { allowed: false, reason: "forbidden" };
    },
    "aulas/create": (user) => ({ allowed: canCreateClass(user) }),
    "aulas/list": (user) => {
      const accessLevel = resolveAccessLevel(user);
      if (!accessLevel) return { allowed: false };
      return { allowed: true, data: { accessLevel } };
    },
    "aulas/manage": (user) => ({ allowed: canManageParents(user) }),
    "aulas/manage-classroom": (user, context) => {
      const classroom = context.classroom;
      if (!classroom) return { allowed: false };
      return {
        allowed: canManageClassroom({
          requesterId: getUserId(user),
          requesterRole: user?.role ?? null,
          requesterRoles: user?.roles ?? null,
          requesterSchoolId: user?.schoolId ?? null,
          classroomSchoolId: classroom.schoolId ?? classroom.institutionId ?? null,
          classroomMembers: classroom.members ?? null
        })
      };
    },
    "aulas/read": (user) => {
      const accessLevel = resolveAccessLevel(user);
      if (!accessLevel) return { allowed: false };
      return { allowed: true, data: { accessLevel } };
    },
    "economia/compras": (user, context) => {
      const requesterId = getUserId(user);
      const usuarioId = typeof context.req.body?.usuarioId === "string" ? context.req.body.usuarioId : null;
      if (!requesterId || !usuarioId) return { allowed: false };
      const isOwner = requesterId === usuarioId;
      if (isOwner) return { allowed: true };
      return { allowed: canModerateIntercambios(user) };
    },
    "economia/mint": (user) => ({ allowed: canMintCurrency(user) }),
    "economia/moderate-intercambios": (user) => ({
      allowed: canModerateIntercambios(user),
      data: { isAdmin: hasRole(user ?? null, "ADMIN") }
    }),
    "estadisticas/export": (user) => ({ allowed: isStaffRole(user) }),
    "estadisticas/read": (user) => ({ allowed: isStaffRole(user) }),
    "publicaciones/comment": (user) => ({ allowed: canPostAsStudent(user) }),
    "publicaciones/create": (user) => ({ allowed: canPostInClass(user) }),
    "publicaciones/read": (user) => {
      const accessLevel = resolveAccessLevel(user);
      if (!accessLevel) return { allowed: false };
      return { allowed: true, data: { accessLevel } };
    },
    "progreso/read": (user, context) => {
      const requesterId = getUserId(user);
      if (!requesterId) return { allowed: false };
      const targetUsuarioId = resolveTargetUsuarioId(context.req);
      if (targetUsuarioId && requesterId === targetUsuarioId) return { allowed: true };
      const isStaff = isStaffRole(user);
      return { allowed: isStaff, data: { isStaff } };
    },
    "progreso/write": (user, context) => {
      const requesterId = getUserId(user);
      if (!requesterId) return { allowed: false };
      const targetUsuarioId =
        resolveTargetUsuarioId(context.req) ?? (context.req.method === "PATCH" ? requesterId : null);
      if (targetUsuarioId && requesterId === targetUsuarioId) return { allowed: true };
      const isStaff = isStaffRole(user);
      return { allowed: isStaff, data: { isStaff } };
    },
    "reportes/export": (user) => ({ allowed: isStaffRole(user) }),
    "reportes/read": (user) => ({ allowed: isStaffRole(user) }),
    "resource-links/read": (user) => {
      const isStaff = isStaffRole(user);
      const canRead = isStaff || canReadAsLearner(user);
      return canRead ? { allowed: true, data: { isStaff } } : { allowed: false };
    },
    "resource-links/write": (user) => ({ allowed: isStaffRole(user) }),
    "usuarios/create": (user) => {
      if (canViewAllUsers(user)) return { allowed: true, data: { accessLevel: "admin" } };
      if (canManageParents(user)) return { allowed: true, data: { accessLevel: "school" } };
      return { allowed: false };
    },
    "usuarios/list": (user) => {
      if (canViewAllUsers(user)) return { allowed: true, data: { accessLevel: "admin" } };
      if (canManageParents(user)) return { allowed: true, data: { accessLevel: "school" } };
      return { allowed: false };
    },
    "usuarios/read": (user) => {
      if (canViewAllUsers(user)) return { allowed: true, data: { accessLevel: "admin" } };
      if (canManageParents(user) || canReadAsLearner(user)) {
        return { allowed: true, data: { accessLevel: "member" } };
      }
      return { allowed: false };
    }
  };

export const canManageClassroom = ({
  requesterId,
  requesterRole,
  requesterRoles,
  requesterSchoolId,
  classroomSchoolId,
  classroomMembers
}: {
  requesterId: string | null;
  requesterRole?: string | null;
  // MULTIROL-01: nuevo. Si el requester tiene DIRECTIVO en su array,
  // sigue contando como directivo de su escuela aunque su `role`
  // principal sea TEACHER (caso multi-rol).
  requesterRoles?: readonly string[] | null;
  requesterSchoolId?: string | null;
  classroomSchoolId?: string | null;
  classroomMembers?: ClassroomMember[] | null;
}) => {
  const roles = resolveRoles({ role: requesterRole, roles: requesterRoles });
  const hasInstitutionRole =
    roles.includes("DIRECTIVO") &&
    !!requesterSchoolId &&
    !!classroomSchoolId &&
    requesterSchoolId === classroomSchoolId;
  // "admin de las aulas" se refiere a un directivo o a un profesor, no literalmente a un admin
  const hasAdminMembership = !!requesterId
    ? (classroomMembers ?? []).some(
        (member) =>
          member.userId === requesterId &&
          (member.roleInClass === "TEACHER" ||
            member.roleInClass === "DIRECTIVO" ||
            member.roleInClass === "ADMIN")
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
