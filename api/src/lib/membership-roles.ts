export const MEMBERSHIP_ROLES = ["DIRECTIVO", "TEACHER", "STUDENT", "PARENT"] as const;

export type MembershipRole = (typeof MEMBERSHIP_ROLES)[number];

const USER_ROLE_TO_MEMBERSHIP_ROLE: Record<string, MembershipRole | null> = {
  ADMIN: null,
  DIRECTIVO: "DIRECTIVO",
  TEACHER: "TEACHER",
  USER: "STUDENT",
  PARENT: "PARENT",
  GUEST: null
};

export const getCanonicalMembershipRole = (role?: string | null): MembershipRole | null => {
  if (!role) return null;
  return USER_ROLE_TO_MEMBERSHIP_ROLE[role] ?? null;
};

/**
 * PLAN-multirol — vuelta al rol global desde el rol de membresía. Hace
 * falta porque las guardas (`hasRole`, `isStaffRole`, …) razonan en roles
 * globales, mientras la verdad de "qué es esta persona en esta escuela"
 * vive en `Membresia.rol`. El único par que no es identidad es
 * STUDENT↔USER (herencia de nombres, ver PLAN-multirol).
 */
const MEMBERSHIP_ROLE_TO_USER_ROLE: Record<MembershipRole, string> = {
  DIRECTIVO: "DIRECTIVO",
  TEACHER: "TEACHER",
  STUDENT: "USER",
  PARENT: "PARENT"
};

export const getUserRoleFromMembership = (rol?: string | null): string | null => {
  if (!rol) return null;
  return MEMBERSHIP_ROLE_TO_USER_ROLE[rol as MembershipRole] ?? null;
};
