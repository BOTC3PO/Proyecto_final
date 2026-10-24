/**
 * PLAN-roles-v3 A1 — `ADMIN_ESCUELA` es un rol de ESCUELA, no el ADMIN de
 * plataforma con menos alcance. Son dos strings distintos a propósito: hay
 * 48 chequeos `hasRole(user, "ADMIN")` que devuelven true sin mirar escuela
 * y 66 rutas detrás de `requireAdmin`, que tampoco mira. Con un nombre
 * propio, esos 114 puntos siguen significando "admin de plataforma" y no
 * hay nada que retrofitear — el alcance sale gratis porque la membresía ya
 * es por escuela.
 *
 * Qué es: profesor de esa escuela que además puede moderar y sancionar
 * dentro de ella. Lo que NO es: alguien que toque plata (no recibe
 * `puedeCobrar` ni puede ser directivo principal).
 */
export const MEMBERSHIP_ROLES = ["DIRECTIVO", "ADMIN_ESCUELA", "TEACHER", "STUDENT", "PARENT"] as const;

export type MembershipRole = (typeof MEMBERSHIP_ROLES)[number];

const USER_ROLE_TO_MEMBERSHIP_ROLE: Record<string, MembershipRole | null> = {
  ADMIN: null,
  DIRECTIVO: "DIRECTIVO",
  ADMIN_ESCUELA: "ADMIN_ESCUELA",
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
  ADMIN_ESCUELA: "ADMIN_ESCUELA",
  TEACHER: "TEACHER",
  STUDENT: "USER",
  PARENT: "PARENT"
};

export const getUserRoleFromMembership = (rol?: string | null): string | null => {
  if (!rol) return null;
  return MEMBERSHIP_ROLE_TO_USER_ROLE[rol as MembershipRole] ?? null;
};
