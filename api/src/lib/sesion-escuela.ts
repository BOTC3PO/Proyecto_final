/**
 * PLAN-multirol Fase 2 — resolución de la ESCUELA ACTIVA y de los roles
 * que la persona tiene *en esa escuela*.
 *
 * Por qué los roles de la sesión son los de la escuela activa y no la
 * unión de todos: las ~95 guardas del repo tienen la forma
 * `hasRole(user, "DIRECTIVO") && user.schoolId === escuelaId`. Si la
 * sesión llevara la unión, alguien que es DIRECTIVO en la escuela A y
 * alumno en la B, parado en B, pasaría esa guarda para B — podría emitir
 * cuotas en una escuela donde sólo es alumno. Acotando los roles a la
 * escuela activa, las 95 guardas siguen siendo correctas sin tocarlas.
 *
 * Los roles que NO son de escuela (ADMIN, GUEST) sobreviven siempre: un
 * admin de plataforma no es miembro de ninguna escuela.
 */
import { prisma } from "./prisma";
import { getCanonicalMembershipRole, getUserRoleFromMembership } from "./membership-roles";
import { resolveRoles } from "./roles";

export type SesionEscuela = {
  /** Escuela en la que está parada la sesión. Null = sin escuela (admin de plataforma, guest). */
  escuelaId: string | null;
  /** Roles GLOBALES efectivos en esa escuela, principal primero. */
  roles: string[];
  /** El rol con el que actúa: el más antiguo activo de esa escuela. */
  rolPrincipal: string | null;
};

type UsuarioParaSesion = {
  id: string;
  role?: string | null;
  roles?: string[] | null;
  escuelaId?: string | null;
};

/** Roles globales que no dependen de ninguna escuela y viajan siempre. */
const rolesNoEscolares = (usuario: UsuarioParaSesion): string[] =>
  resolveRoles(usuario).filter((r) => getCanonicalMembershipRole(r) === null);

/**
 * `escuelaSolicitada` viene del selector (Fase 2). Se valida SIEMPRE
 * contra `Membresia`: nunca se confía en lo que manda el cliente.
 */
export const resolverSesionEscuela = async (
  usuario: UsuarioParaSesion,
  escuelaSolicitada?: string | null,
  /**
   * Rol global con el que quiere actuar dentro de esa escuela. Sólo hace
   * falta cuando tiene más de uno ahí (profesor y padre, o docente que
   * además cursa) — sin esto, el principal es siempre el más antiguo y no
   * habría forma de actuar con el otro. Se valida contra `Membresia`: si
   * no lo tiene activo, se ignora y manda el principal.
   */
  rolSolicitado?: string | null
): Promise<SesionEscuela> => {
  const membresias = await prisma.membresia.findMany({
    where: { usuarioId: usuario.id, estado: "activa" }
  });

  const noEscolares = rolesNoEscolares(usuario);

  if (membresias.length === 0) {
    // Sin membresías no hay escuela que resolver: cuentas de plataforma
    // (ADMIN), invitados, y cualquier fila anterior al backfill.
    const propios = resolveRoles(usuario);
    return {
      escuelaId: usuario.escuelaId ?? null,
      roles: propios,
      rolPrincipal: propios[0] ?? usuario.role ?? null
    };
  }

  // Más antigua primero: de ese orden sale el rol principal ("el rol con
  // el que se registró primero", decisión de Javier).
  const ordenadas = [...membresias].sort((a, b) =>
    String(a.fechaAlta).localeCompare(String(b.fechaAlta))
  );

  const escuelasDisponibles = new Set(ordenadas.map((m) => m.escuelaId));
  const escuelaId =
    escuelaSolicitada && escuelasDisponibles.has(escuelaSolicitada)
      ? escuelaSolicitada
      : usuario.escuelaId && escuelasDisponibles.has(usuario.escuelaId)
        ? usuario.escuelaId
        : (ordenadas[0]?.escuelaId ?? null);

  const rolesDeLaEscuela = ordenadas
    .filter((m) => m.escuelaId === escuelaId)
    .map((m) => getUserRoleFromMembership(m.rol))
    .filter((r): r is string => Boolean(r));

  // Dedup conservando el orden (el primero es el principal).
  const roles = [...new Set([...rolesDeLaEscuela, ...noEscolares])];

  // El rol pedido sólo se concede si figura entre los que REALMENTE tiene
  // activos en esa escuela. Si no, cae al principal (el más antiguo).
  const rolPrincipal =
    (rolSolicitado && rolesDeLaEscuela.includes(rolSolicitado) ? rolSolicitado : null) ??
    rolesDeLaEscuela[0] ??
    noEscolares[0] ??
    null;

  return { escuelaId, roles, rolPrincipal };
};

/**
 * Escuelas a las que la persona puede cambiarse, con los roles que tiene
 * en cada una. Lo consume el selector de escuela.
 */
export const escuelasDisponiblesPara = async (
  usuarioId: string
): Promise<Array<{ escuelaId: string; nombre: string; roles: string[] }>> => {
  const membresias = await prisma.membresia.findMany({
    where: { usuarioId, estado: "activa" }
  });
  if (membresias.length === 0) return [];

  const ordenadas = [...membresias].sort((a, b) =>
    String(a.fechaAlta).localeCompare(String(b.fechaAlta))
  );
  const escuelas = await prisma.escuela.findMany({
    where: { id: { in: [...new Set(ordenadas.map((m) => m.escuelaId))] } }
  });
  const nombrePorId = new Map(escuelas.map((e) => [e.id, e.name]));

  const porEscuela = new Map<string, string[]>();
  for (const m of ordenadas) {
    const rolGlobal = getUserRoleFromMembership(m.rol);
    if (!rolGlobal) continue;
    const actuales = porEscuela.get(m.escuelaId) ?? [];
    if (!actuales.includes(rolGlobal)) actuales.push(rolGlobal);
    porEscuela.set(m.escuelaId, actuales);
  }

  return [...porEscuela.entries()].map(([escuelaId, roles]) => ({
    escuelaId,
    nombre: nombrePorId.get(escuelaId) ?? escuelaId,
    roles
  }));
};
