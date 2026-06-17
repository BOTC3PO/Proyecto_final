/**
 * VB-B5 — mapeo `LintIssue` → `fieldId` del formulario.
 *
 * El linter (`@vb/vblang/validator/linter`) emite issues con `code` y
 * `message` textuales, sin referencia explícita al campo del form.
 * El panel de errores general (ErrorPanel) sigue mostrando todos los
 * issues; este helper permite que, además, el campo CULPABLE se pinte
 * con borde rojo + mensaje al pie (ítem B5 del plan VBLANG_V2_PLAN_USABILIDAD).
 *
 * El mapeo usa el `code` (estable) y un parseo tolerante del
 * `message` (no es contrato, es el formato actual de los mensajes del
 * linter). Si el formato cambia, la función devuelve `null` y el
 * error queda en el panel general — fallback seguro, no rompe nada.
 *
 * Mapeos cubiertos (los más comunes):
 *  - `var-duplicada` / `range-invalid` → `variables` (la fila
 *    entera; sin `var-nombre` no podemos apuntar al chip exacto).
 *  - `enunciados-var-undef` → `enunciados.<i>` (la variante i).
 *  - `pistas-var-undef` → `pistas.<i>` (la pista i).
 *  - `explicacion-var-undef` → `explicacion` (campo único).
 *  - `vf-requires-boolean` / `mc-requires-number` / `type-mismatch`
 *    → `respuesta` (el campo culpable es la respuesta).
 *  - resto → `null` (panel general).
 */

import type { LintIssue } from "@vb/vblang";

/**
 * Devuelve el `fieldId` estable del campo del form al que se le
 * debería pintar el error, o `null` si el error no es atribuible
 * a un campo (ej. `tipo-missing` es global, no de un campo).
 *
 * El `fieldId` retornado es un string. Para campos simples coincide
 * con `field.key` de `QUESTION_TYPE_SCHEMAS` (`enunciado`,
 * `respuesta`, `opciones`, `explicacion`, etc.). Para campos
 * indexados (listas) usa el formato `"<key>.<index>"` —
 * ej. `"enunciados.0"`, `"pistas.1"`. La lista de variantes
 * (`enunciados:`) la renderiza `EnunciadoField` con un `data-field-id`
 * por variante.
 */
export function lintIssueToFieldId(issue: LintIssue): string | null {
  switch (issue.code) {
    case "var-duplicada":
    case "range-invalid":
      // Las variables son una lista. Sin info del nombre, señalamos
      // el bloque entero. El form pone el error badge en el campo
      // `variables` (un `data-field-id="variables"` en el wrapper).
      return "variables";

    case "enunciados-var-undef": {
      // Mensaje: `enunciados[i]: variable "X" no declarada`
      const i = extractIndex(issue.message, "enunciados");
      return i !== null ? `enunciados.${i}` : "enunciados";
    }

    case "pistas-var-undef": {
      // Mensaje: `pistas[i]: variable "X" no declarada`
      const i = extractIndex(issue.message, "pistas");
      return i !== null ? `pistas.${i}` : "pistas";
    }

    case "explicacion-var-undef":
      return "explicacion";

    case "vf-requires-boolean":
    case "mc-requires-number":
    case "type-mismatch":
    case "mc-opcion-no-incluida":
      return "respuesta";

    case "palabra-no-en-texto":
      // La palabra que no está en el texto puede ser del enunciado o
      // de la lista de respuestas. Por simplicidad, lo marcamos en
      // `respuestas_validas` (la lista); si el form lo prefiere en
      // otro lugar, lo cambiamos después.
      return "respuestas_validas";

    // Errores globales (no atribuibles a un campo del form).
    case "tipo-missing":
    case "enunciados-duplicado":
    case "ordenar-requires-opciones-explicitas":
    case "ordenar-requires-respuesta-orden":
    case "ordenar-sets-diferentes":
    case "marcar-mapa-requires-mapa":
    case "marcar-mapa-requires-respuesta-iso":
    case "analisis-sintactico-requires-texto-analizar":
    case "analisis-sintactico-requires-etiquetas-pedidas":
    case "identificar-palabras-requires-texto-analizar":
    case "identificar-palabras-requires-respuestas-validas":
    case "abierta-correccion-invalida":
    case "correccion-fuera-de-abierta":
    case "random-inline":
    default:
      return null;
  }
}

/**
 * Extrae el índice `i` de un mensaje del linter con formato
 * `etiqueta[i]: ...`. Devuelve `null` si no matchea (mensaje
 * inesperado). Tolerante: si el formato cambia, falla como
 * "no atribuible" y el error queda en el panel general.
 */
function extractIndex(message: string, label: string): number | null {
  // Buscamos `etiqueta[N]` en cualquier lugar del mensaje. Capturamos
  // solo dígitos dentro de los corchetes.
  const escaped = label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(`${escaped}\\[(\\d+)\\]`);
  const m = re.exec(message);
  if (!m || !m[1]) return null;
  const n = parseInt(m[1], 10);
  return Number.isFinite(n) ? n : null;
}
