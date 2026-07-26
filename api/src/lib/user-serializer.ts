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
  // PLAN-roles-v3 B1/B2 — identidad pública, separada de la de intranet.
  verificacionPublica?: string | null;
  datosVerificacion?: string | null;
};

/**
 * PLAN-roles-v3 B1 — el rol PÚBLICO no es el de intranet.
 *
 * `role`/`roles` son lo que la persona es **en su escuela activa**: se los
 * concede una escuela y sólo valen adentro. Publicarlos en el perfil abierto
 * convertiría "soy profe en la escuela X" en "soy profesor" a secas, que es
 * justo lo que se puede usar para hacerse pasar por alguien.
 *
 * Afuera sólo se muestra un rol si la persona lo declaró y un admin lo
 * verificó (B2). Si no, el perfil público no afirma nada.
 */
const rolPublicoDe = (user: UserRecord): string | null => {
  if (user.verificacionPublica !== "verificada") return null;
  try {
    const datos = JSON.parse(user.datosVerificacion ?? "{}") as { rolDeclarado?: string };
    return datos.rolDeclarado ?? null;
  } catch {
    return null;
  }
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
  } else {
    // Ver `rolPublicoDe`: afuera no se filtra el rol de escuela.
    base.role = rolPublicoDe(user);
    base.roles = base.role ? [base.role] : [];
    base.verificado = user.verificacionPublica === "verificada";
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
