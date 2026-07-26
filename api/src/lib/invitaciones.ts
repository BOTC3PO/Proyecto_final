/**
 * PLAN-roles-v3 A3 — reglas de quién puede pedir/invitar qué, y quién lo
 * aprueba.
 *
 * La regla de fondo (decisión de Javier): **cualquier rol se puede PEDIR
 * salvo ADMIN de plataforma**. Pedir no es obtener — lo que cambia según el
 * caso es quién aprueba. Si alumno o profesor fueran auto-servicio, un
 * alumno se haría profesor de su propia escuela y vería los datos de sus
 * compañeros; por eso esos dos pasan siempre por el directivo.
 *
 * Módulo puro: sin DB, para poder testear la matriz sola.
 */
import type { MembershipRole } from "./membership-roles";

/** Quién tiene que resolver una invitación/solicitud pendiente. */
export type Aprobador =
  | "automatico"
  | "destinatario"
  | "directivo"
  | "directivo_principal"
  | "admin_principal";

export type Contexto = {
  rol: MembershipRole;
  /** true si la persona lo pidió para sí misma; false si la invitaron. */
  esPedidoPropio: boolean;
};

/**
 * `null` = no se puede crear esta invitación en absoluto.
 *
 * PARENT es automático a propósito: el rol no abre datos de nadie. Lo que
 * los abre es el vínculo con el hijo (`ProgresoModuloVinculo`), que ya exige
 * aprobación aparte. El control está un nivel más abajo y ya funciona.
 */
export const aprobadorPara = ({ rol, esPedidoPropio }: Contexto): Aprobador | null => {
  if (rol === "PARENT") return esPedidoPropio ? "automatico" : "destinatario";

  // Invitación: la inició alguien con autoridad, falta que el otro acepte.
  if (!esPedidoPropio) return "destinatario";

  // Pedido propio.
  switch (rol) {
    case "STUDENT":
    case "TEACHER":
    case "ADMIN_ESCUELA":
      return "directivo";
    case "DIRECTIVO":
      // Sumar un directivo a una escuela existente habilita cobrar: lo
      // resuelve el principal, no cualquier directivo.
      return "directivo_principal";
    default:
      return null;
  }
};

/**
 * ¿Puede `rolesDelActor` INVITAR a alguien con este rol en esta escuela?
 * Un pedido propio no pasa por acá (cualquiera puede pedir).
 */
export const puedeInvitar = (rolesDelActor: readonly string[], rol: MembershipRole): boolean => {
  const tiene = (r: string) => rolesDelActor.includes(r);
  if (tiene("ADMIN")) return true;
  switch (rol) {
    case "STUDENT":
    case "TEACHER":
    case "ADMIN_ESCUELA":
      return tiene("DIRECTIVO");
    case "DIRECTIVO":
      // El principal es el único que suma directivos; se verifica contra la
      // escuela en la ruta, acá sólo se exige el rol.
      return tiene("DIRECTIVO");
    case "PARENT":
      return tiene("DIRECTIVO") || tiene("TEACHER");
    default:
      return false;
  }
};

/** ADMIN de plataforma nunca sale de esta tabla: no es un rol de escuela. */
export const ROLES_INVITABLES: readonly MembershipRole[] = [
  "STUDENT",
  "TEACHER",
  "PARENT",
  "DIRECTIVO",
  "ADMIN_ESCUELA"
];
