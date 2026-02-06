import type { MembershipRole } from "./membership-roles";
import { getCanonicalMembershipRole } from "./membership-roles";

export const MEMBERSHIP_STATUSES = ["activa", "suspendida", "revocada"] as const;

export type MembershipStatus = (typeof MEMBERSHIP_STATUSES)[number];

const ALLOWED_TRANSITIONS: Record<MembershipStatus, MembershipStatus[]> = {
  activa: ["suspendida", "revocada"],
  suspendida: ["activa", "revocada"],
  revocada: []
};

export const assertValidMembershipTransition = (
  previousStatus: MembershipStatus | null | undefined,
  nextStatus: MembershipStatus
) => {
  if (!previousStatus || previousStatus === nextStatus) return;
  const allowed = ALLOWED_TRANSITIONS[previousStatus] ?? [];
  if (!allowed.includes(nextStatus)) {
    throw new Error(`Transición de membresía inválida: ${previousStatus} -> ${nextStatus}`);
  }
};

type MembershipInvariantInput = {
  estado: MembershipStatus;
  escuelaId?: unknown | null;
  escuelaExists?: boolean;
  membershipRole?: MembershipRole | null;
  userRole?: string | null;
};

export const assertMembershipInvariants = ({
  estado,
  escuelaId,
  escuelaExists,
  membershipRole,
  userRole
}: MembershipInvariantInput) => {
  if (estado === "activa") {
    if (!escuelaId) {
      throw new Error("La membresía activa requiere una escuela válida");
    }
    if (escuelaExists === false) {
      throw new Error("La escuela asociada a la membresía no existe");
    }
  }
  if (estado === "activa" && !membershipRole) {
    throw new Error("La membresía activa requiere un rol de escuela");
  }
  const canonicalRole = getCanonicalMembershipRole(userRole ?? null);
  if (canonicalRole === null && membershipRole) {
    throw new Error("El rol global del usuario no permite membresía escolar");
  }
  if (canonicalRole && membershipRole && canonicalRole !== membershipRole) {
    throw new Error("El rol de la membresía no coincide con el rol global del usuario");
  }
};
