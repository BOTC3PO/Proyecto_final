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
  const membership = getCanonicalMembershipRole(role ?? undefined);
  return membership === "ADMIN" || membership === "TEACHER";
};

export const canReadAsLearner = (role?: string | null) => {
  const membership = getCanonicalMembershipRole(role ?? undefined);
  return membership === "STUDENT" || membership === "PARENT";
};

type ClassroomMember = { userId?: string; roleInClass?: string };

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
