export const MEMBERSHIP_ROLES = ["ADMIN", "TEACHER", "STUDENT", "PARENT"] as const;

export type MembershipRole = (typeof MEMBERSHIP_ROLES)[number];

const USER_ROLE_TO_MEMBERSHIP_ROLE: Record<string, MembershipRole | null> = {
  ADMIN: "ADMIN",
  DIRECTIVO: "ADMIN",
  TEACHER: "TEACHER",
  USER: "STUDENT",
  PARENT: "PARENT",
  GUEST: null
};

export const getCanonicalMembershipRole = (role?: string | null): MembershipRole | null => {
  if (!role) return null;
  return USER_ROLE_TO_MEMBERSHIP_ROLE[role] ?? null;
};
