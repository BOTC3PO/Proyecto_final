/**
 * Helpers de edad compartidos por el autoservicio de cuentas.
 *
 * `isMinor` se usa en al menos cuatro lugares del backend (roles, padres,
 * reportes, progreso) con implementaciones sutilmente distintas. Esta
 * versión canónica se prefiere para nuevos endpoints.
 *
 * Regla:
 *   - Sin `birthdate` ⇒ asumimos menor (rechazamos el autoservicio). No
 *     se puede demostrar mayoría de edad sin fecha de nacimiento.
 *   - `birthdate` inválida ⇒ también asumimos menor.
 *   - Edad < 18 años ⇒ menor.
 *   - Edad ≥ 18 años ⇒ mayor.
 *
 * La convención opuesta (sin birthdate = mayor) solo es válida para
 * validaciones de monitoreo, no para autorizar autoservicio. Por eso
 * este helper es explícitamente conservador.
 */

export const isMinor = (birthdate?: string | Date | null): boolean => {
  if (!birthdate) return true;
  const bd = birthdate instanceof Date ? birthdate : new Date(birthdate);
  if (isNaN(bd.getTime())) return true;
  const days = (Date.now() - bd.getTime()) / (1000 * 60 * 60 * 24);
  return days < 365.25 * 18;
};

export const isAdult = (birthdate?: string | Date | null): boolean => !isMinor(birthdate);
