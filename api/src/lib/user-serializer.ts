import { normalizeSchoolId } from "./school-ids";
import { resolveRoles } from "./roles";

type UserAccessLevel = "admin" | "member" | "public";

type UserMembershipSummary = {
  rolEscuela?: string | null;
  estadoMembresia?: string | null;
  fechaAltaMembresia?: unknown;
  escuelaId?: unknown;
};

type SerializeUserOptions = {
  access: UserAccessLevel;
  membership?: UserMembershipSummary;
};

type UserRecord = {
  _id?: { toString?: () => string } | string;
  username?: string | null;
  email?: string | null;
  fullName?: string | null;
  role?: string | null;
  // MULTIROL-01: el serializer propaga `roles` cuando está presente.
  // Si solo llega `role`, lo promueve a array de un elemento.
  roles?: readonly string[] | null;
  escuelaId?: unknown;
};

export const serializeUsuario = (user: UserRecord, options: SerializeUserOptions) => {
  const base = {
    id: typeof user?._id === "string" ? user._id : user?._id?.toString?.() ?? null,
    username: user?.username ?? null,
    fullName: user?.fullName ?? null,
    role: user?.role ?? null,
    // MULTIROL-01: exponemos `roles` aditivamente. El front actual
    // que solo lee `role` lo sigue viendo.
    roles: resolveRoles(user)
  } as Record<string, unknown>;

  if (options.access !== "public") {
    base.escuelaId = normalizeSchoolId(user?.escuelaId);
  }

  if (options.access === "admin") {
    base.email = user?.email ?? null;
  }

  if (options.membership) {
    return {
      ...base,
      rolEscuela: options.membership.rolEscuela ?? null,
      estadoMembresia: options.membership.estadoMembresia ?? null,
      fechaAltaMembresia: options.membership.fechaAltaMembresia ?? null,
      escuelaId: normalizeSchoolId(options.membership.escuelaId) ?? base.escuelaId ?? null
    };
  }

  return base;
};
