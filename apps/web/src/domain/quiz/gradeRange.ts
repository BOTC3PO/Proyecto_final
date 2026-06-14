/**
 * F5-04 — Mirror del helper backend de cálculo de rango de nota.
 *
 * Sólo lo que el front necesita para renderizar: el helper puro vive
 * server-side. El cliente sólo etiqueta y formatea.
 *
 * PRIVACIDAD: el helper opera sobre el número de pendientes, no sobre
 * QUÉ respondió el alumno en cada uno. No introduce canales de
 * vigilancia nuevos.
 */

export type GradeRangeLike = {
  pendingManual?: number;
  notaMinDisplay?: string | null;
  notaMaxDisplay?: string | null;
  notaMinCanonical10?: number | null;
  notaMaxCanonical10?: number | null;
};

/**
 * Etiqueta humana del rango. Neutra, sin acusar.
 * @example formatGradeRangeLabel({pendingManual:2, notaMinDisplay:"5", notaMaxDisplay:"8"})
 *   → "Tu nota está entre 5 y 8. 2 preguntas pendientes de corrección por el profesor."
 */
export function formatGradeRangeLabel(range: GradeRangeLike): string {
  const count = range.pendingManual ?? 0;
  const min = range.notaMinDisplay ?? null;
  const max = range.notaMaxDisplay ?? null;
  let base: string;
  if (min && max) {
    base = `Tu nota está entre ${min} y ${max}.`;
  } else if (min) {
    base = `Tu nota (mín.) es ${min}.`;
  } else if (max) {
    base = `Tu nota (máx.) es ${max}.`;
  } else {
    base = "Tu nota está pendiente de cálculo.";
  }
  const tail =
    count === 1
      ? "1 pregunta pendiente de corrección por el profesor."
      : `${count} preguntas pendientes de corrección por el profesor.`;
  return `${base} ${tail}`;
}

/**
 * ¿Este response tiene un rango de nota provisoria?
 * @example hasGradeRange({pendingManual:2, notaMinDisplay:"5"}) → true
 * @example hasGradeRange({notaDisplay:"Aprobado"}) → false
 */
export function hasGradeRange(range: GradeRangeLike | null | undefined): boolean {
  if (!range) return false;
  return (range.pendingManual ?? 0) > 0;
}
