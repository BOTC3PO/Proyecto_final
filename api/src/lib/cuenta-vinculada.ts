/**
 * Resolución del vínculo de cuentas (FASE 2/5/6).
 *
 * `CuentaVinculada` es la tabla puente simétrica que une las DOS
 * cuentas de la MISMA persona. Dado un `userId`, este helper resuelve
 * a dónde puede cambiar esa cuenta:
 *
 *   - `tipoDestino: "ALUMNO"`    → el destino es la cuenta espejo
 *     alumno (entrar como alumno). Pasa cuando el origen es la cuenta
 *     principal (staff o padre) y el otro lado es un ESPEJO_ALUMNO.
 *   - `tipoDestino: "PRINCIPAL"` → el destino es la cuenta principal
 *     (volver al panel). Pasa cuando el origen es el espejo alumno.
 *   - `tipoDestino: "PADRE"`     → FASE 6: el destino es la cuenta
 *     de padre vinculada. Pasa cuando el origen es el alumno adulto
 *     que creó su cuenta de padre. La cuenta padre es "real" (no
 *     espejo), así que `tipoCuenta` no alcanza para discriminarla.
 *   - `tipoDestino: "ALUMNO_HIJO"` → FASE 6: el destino es la
 *     cuenta de alumno del par, vista desde el lado del padre. Es
 *     el simétrico de "PADRE" — el front lo usa para mostrar el
 *     "Volver a mi panel" y el botón "Entrar como alumno".
 *
 * El switch en sí mismo (`/api/auth/cambiar-cuenta`) no consume
 * `tipoDestino` para autorizar: solo lo mira para derivar el
 * `landing` y para presentar mensajes. La decisión de qué destino
 * elegir la toma el `CuentaVinculada` row directamente — siempre
 * hay a lo sumo un vínculo por persona, así que no hay ambigüedad.
 *
 * Lo usan el shape de sesión (`/api/auth/me`, login), el switch
 * (`/api/auth/cambiar-cuenta`) y el perfil del padre/alumno (para
 * saber si ya tiene su cuenta vinculada y mostrar la acción
 * correspondiente: "Crear / Entrar como …").
 *
 * NO confundir con `ProgresoModuloVinculo`, que une padre↔hijo
 * (personas distintas, solo monitoreo, nunca switchable).
 */

import { prisma } from "./prisma";
import { ESPEJO_TIPO_CUENTA } from "./provisionar-espejo";
import { isParentInRoles, resolveRoles } from "./roles";

export type TipoDestino = "ALUMNO" | "PRINCIPAL" | "PADRE" | "ALUMNO_HIJO";

export type CuentaVinculadaInfo = {
  destinoUsuarioId: string;
  tipoDestino: TipoDestino;
};

const isRealAlumno = (roles: readonly string[]): boolean =>
  roles.length === 1 && roles[0] === "USER";

const isEspejoAlumno = (tipoCuenta: string | null | undefined): boolean =>
  tipoCuenta === ESPEJO_TIPO_CUENTA;

export const resolveCuentaVinculada = async (
  userId: string
): Promise<CuentaVinculadaInfo | null> => {
  const vinculo = await prisma.cuentaVinculada.findFirst({
    where: { OR: [{ usuarioAId: userId }, { usuarioBId: userId }] }
  });
  if (!vinculo) return null;
  const otherId = vinculo.usuarioAId === userId ? vinculo.usuarioBId : vinculo.usuarioAId;
  const [me, other] = await Promise.all([
    prisma.usuario.findFirst({ where: { id: userId, isDeleted: { not: true } } }),
    prisma.usuario.findFirst({ where: { id: otherId, isDeleted: { not: true } } })
  ]);
  if (!other || !me) return null;

  const meRoles = resolveRoles(me);
  const otherRoles = resolveRoles(other);
  const meEsEspejo = isEspejoAlumno(me.tipoCuenta);
  const otherEsEspejo = isEspejoAlumno(other.tipoCuenta);
  const meEsAlumnoReal = isRealAlumno(meRoles);
  const otherEsAlumnoReal = isRealAlumno(otherRoles);
  const meEsPadre = isParentInRoles(meRoles);
  const otherEsPadre = isParentInRoles(otherRoles);

  // FASE 6 — alumno real ↔ padre real (ambas cuentas son "reales",
  // no espejos). La discriminamos por roles: USER puro ↔ PARENT
  // puro, sin tipoCuenta ESPEJO_ALUMNO en ninguno. Si el destino
  // es padre y el origen es alumno, marcamos PADRE; si el destino
  // es alumno y el origen es padre, marcamos ALUMNO_HIJO. Esto le
  // da al front el contexto suficiente para mostrar "Entrar como
  // padre" o "Volver a mi panel".
  if (meEsAlumnoReal && otherEsPadre && !otherEsEspejo) {
    return { destinoUsuarioId: other.id, tipoDestino: "PADRE" };
  }
  if (meEsPadre && otherEsAlumnoReal && !otherEsEspejo) {
    return { destinoUsuarioId: other.id, tipoDestino: "ALUMNO_HIJO" };
  }

  // FASE 1/5 — principal↔espejo. El espejo siempre lleva
  // `tipoCuenta = ESPEJO_ALUMNO` (sea del staff o del padre), así
  // que esta rama es la única que asigna ALUMNO/PRINCIPAL.
  if (otherEsEspejo) {
    return { destinoUsuarioId: other.id, tipoDestino: "ALUMNO" };
  }
  if (meEsEspejo) {
    return { destinoUsuarioId: other.id, tipoDestino: "PRINCIPAL" };
  }
  // Edge case: par sin espejos ni roles USER/PARENT puros. Por
  // seguridad, caemos al default histórico ("PRINCIPAL").
  return { destinoUsuarioId: other.id, tipoDestino: "PRINCIPAL" };
};
