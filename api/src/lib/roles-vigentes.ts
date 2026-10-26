/**
 * B3 — los roles de cada pedido salen de la base, no del token.
 *
 * El token (1 hora) lleva los roles con los que se inició la sesión. Si a alguien se le quita un
 * rol o una membresía, el token seguiría concediéndolo hasta vencer. Acá se recalculan, con las
 * mismas reglas que `resolverSesionEscuela` (los roles de la escuela de la sesión más los que no
 * son de escuela, como ADMIN), y `requireUser` usa el resultado.
 *
 * Del token se conserva la escuela de la sesión y el rol principal elegido, siempre que sigan
 * siendo válidos. Los roles efectivos son los del token que la base todavía concede: quitar un rol
 * o una membresía surte efecto en el pedido siguiente, y un rol nuevo se obtiene al renovar la sesión.
 */
import { prisma } from "./prisma";
import { getCanonicalMembershipRole, getUserRoleFromMembership } from "./membership-roles";
import { resolveRoles } from "./roles";

type Reclamos = { role?: string | null; roles?: string[] | null; schoolId?: string | null };
type UsuarioDb = { id?: string; role?: string | null; roles?: string[] | null; escuelaId?: string | null };

export type RolesVigentes = {
  roles: string[];
  role: string | undefined;
  schoolId: string | null;
};

export async function rolesVigentes(reclamos: Reclamos, usuario: UsuarioDb, usuarioId: string): Promise<RolesVigentes> {
  const propios = resolveRoles(usuario);
  const membresias = await prisma.membresia.findMany({ where: { usuarioId, estado: "activa" } });

  let permitidos: string[];
  let schoolId: string | null;

  if (membresias.length === 0) {
    // Sin membresías (admin de plataforma, invitado, filas anteriores al backfill): valen los roles del usuario.
    permitidos = propios;
    schoolId = reclamos.schoolId ?? null;
  } else {
    const escuelas = new Set(membresias.map((m) => m.escuelaId));
    const pedida = reclamos.schoolId ?? null;
    // La escuela del token tiene que seguir siendo una membresía activa; si no, se vuelve a una válida.
    schoolId =
      pedida && escuelas.has(pedida)
        ? pedida
        : usuario.escuelaId && escuelas.has(usuario.escuelaId)
          ? usuario.escuelaId
          : (membresias[0]?.escuelaId ?? null);
    const deLaEscuela = membresias
      .filter((m) => m.escuelaId === schoolId)
      .map((m) => getUserRoleFromMembership(m.rol))
      .filter((r): r is string => Boolean(r));
    const noEscolares = propios.filter((r) => getCanonicalMembershipRole(r) === null);
    permitidos = [...new Set([...deLaEscuela, ...noEscolares])];
  }

  const delToken = resolveRoles({ role: reclamos.role ?? undefined, roles: reclamos.roles ?? undefined });
  // Intersección: el token puede llevar MENOS roles que los que la persona tiene (cuando actúa con uno
  // solo, por ejemplo como alumno siendo también padre) y eso se respeta; lo que nunca puede es
  // conservar uno que la base ya no le da. Los roles nuevos llegan al renovar la sesión.
  const roles = delToken.filter((r) => permitidos.includes(r));
  const role = reclamos.role && roles.includes(reclamos.role) ? reclamos.role : roles[0];
  return { roles, role, schoolId };
}
