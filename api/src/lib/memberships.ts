/**
 * PLAN-multirol Fase 1 — `Membresia` es la fuente de verdad de a qué
 * escuelas pertenece una persona y con qué rol.
 *
 * Antes de este plan la tabla sólo se escribía en dos lugares (el registro
 * con escuela y la provisión del espejo) mientras CUATRO caminos la
 * ignoraban — alta por admin, provisión de padre y los dos PATCH de
 * admin. Como `usuarios.ts` autoriza leyéndola, un usuario sin fila daba
 * 403 y un usuario reasignado de escuela quedaba autorizado contra la
 * escuela vieja. `sincronizarMembresia` es ahora el ÚNICO escritor: mismo
 * patrón que `confirmarPago` para los pagos.
 */
import type { MembershipRole } from "./membership-roles";
import { getCanonicalMembershipRole } from "./membership-roles";
import { prisma } from "./prisma";

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
  // PLAN-multirol — acá vivía `canonicalRole !== membershipRole`, que
  // exigía que la membresía tuviera el MISMO rol que la columna global del
  // usuario. Era "un rol por persona" escrito como invariante, y es
  // exactamente lo que impide ser profesor en una escuela y padre en otra.
  // La dirección se invierte: las membresías mandan y el rol global se
  // deriva de ellas (ver `rolesDesdeMembresias`), así que comparar contra
  // `userRole` ya no tiene sentido. Lo que sí se sigue validando es que el
  // rol pedido sea un rol de escuela real.
  if (membershipRole && !MEMBERSHIP_ROLE_SET.has(membershipRole)) {
    throw new Error(`Rol de membresía desconocido: ${membershipRole}`);
  }
  void userRole;
};

const MEMBERSHIP_ROLE_SET = new Set<string>(["DIRECTIVO", "TEACHER", "STUDENT", "PARENT"]);

const now = () => new Date().toISOString();

/**
 * ÚNICO punto de escritura de `Membresia`. Idempotente: si la fila ya
 * existe la reactiva (y le conserva la `fechaAlta` original — de eso
 * depende la regla del rol principal, "el rol con el que se registró
 * primero"). Es best-effort en el sentido de que valida antes de escribir,
 * pero NO se traga errores: un alta que no puede dejar membresía es un
 * usuario que después va a comer 403 en `usuarios.ts`.
 *
 * `rolUsuario` es el rol global (USER/TEACHER/...); se traduce al rol de
 * escuela (STUDENT/TEACHER/...). ADMIN y GUEST mapean a null: un admin de
 * plataforma no es miembro de ninguna escuela, así que no se escribe nada.
 */
export const sincronizarMembresia = async (params: {
  usuarioId: string;
  escuelaId: string | null | undefined;
  rolUsuario: string | null | undefined;
  /** Antigüedad real de la afiliación. Default: ahora. */
  fechaAlta?: string;
}): Promise<{ escrita: boolean; rol: MembershipRole | null }> => {
  const rol = getCanonicalMembershipRole(params.rolUsuario ?? null);
  if (!params.escuelaId || !rol) return { escrita: false, rol };

  // No se verifica que la escuela exista: tanto `Usuario.escuelaId` como
  // `Membresia.escuelaId` tienen FK contra `escuelas`, así que Postgres ya
  // lo garantiza y el lookup sólo agrega un viaje a la DB por llamada.
  assertMembershipInvariants({
    estado: "activa",
    escuelaId: params.escuelaId,
    membershipRole: rol
  });

  const nowIso = now();
  const existente = await prisma.membresia.findFirst({
    where: { usuarioId: params.usuarioId, escuelaId: params.escuelaId, rol }
  });

  if (existente) {
    assertValidMembershipTransition(existente.estado as MembershipStatus, "activa");
    await prisma.membresia.updateMany({
      where: { usuarioId: params.usuarioId, escuelaId: params.escuelaId, rol },
      // `fechaAlta` NO se toca: es la antigüedad que decide el rol principal.
      data: { estado: "activa", fechaBaja: null, updatedAt: nowIso }
    });
    return { escrita: true, rol };
  }

  assertValidMembershipTransition(null, "activa");
  await prisma.membresia.create({
    data: {
      usuarioId: params.usuarioId,
      escuelaId: params.escuelaId,
      rol,
      estado: "activa",
      fechaAlta: params.fechaAlta ?? nowIso,
      createdAt: nowIso,
      updatedAt: nowIso
    }
  });
  return { escrita: true, rol };
};

/**
 * Da de baja una membresía sin borrar la fila — la baja tiene que quedar
 * registrada para que la regla del rol principal pueda saltear un rol
 * desactivado ("era profesor y ahora no lo es") en vez de olvidarlo.
 */
export const desactivarMembresia = async (params: {
  usuarioId: string;
  escuelaId: string;
  rol: MembershipRole;
}): Promise<boolean> => {
  const nowIso = now();
  const { count } = await prisma.membresia.updateMany({
    where: { usuarioId: params.usuarioId, escuelaId: params.escuelaId, rol: params.rol, estado: "activa" },
    data: { estado: "revocada", fechaBaja: nowIso, updatedAt: nowIso }
  });
  return count > 0;
};

/**
 * Rol principal de una persona EN UNA ESCUELA: el más antiguo que siga
 * `activa` (decisión de Javier — "el rol con el que se registró primero,
 * salvo que esté desactivado"). Null si no tiene ninguno vigente ahí.
 */
export const rolPrincipalEnEscuela = async (
  usuarioId: string,
  escuelaId: string
): Promise<MembershipRole | null> => {
  const filas = await prisma.membresia.findMany({
    where: { usuarioId, escuelaId, estado: "activa" }
  });
  if (filas.length === 0) return null;
  const ordenadas = [...filas].sort((a, b) => String(a.fechaAlta).localeCompare(String(b.fechaAlta)));
  return (ordenadas[0]?.rol as MembershipRole) ?? null;
};
