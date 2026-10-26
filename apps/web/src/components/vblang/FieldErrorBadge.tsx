/**
 * VB-B5 — badge de error a nivel campo del formulario.
 *
 * Muestra los mensajes del lint cuyo `code`/`message` matchean con
 * el `fieldId` dado (vía `lintIssueToFieldId`). Cuando hay al menos
 * un error, agrega un `data-error="true"` al contenedor padre para
 * que el form pueda pintar un borde rojo.
 *
 * Si no hay errores, retorna `null` y deja que el form renderice
 * el campo normalmente.
 *
 * Diseño:
 *  - Un único badge por campo, aunque haya N issues. Lista los
 *    mensajes en una línea cada uno (no es común tener >1, pero si
 *    pasa los mostramos todos).
 *  - El badge es accesible: `role="alert"` para lectores de pantalla.
 *  - El `data-testid` es estable (`vblang-field-error-<fieldId>`)
 *    para que los tests verifiquen la presencia del error en el
 *    campo correcto sin tener que matchear el texto.
 */

import type { LintIssue } from "@vb/vblang";
import { lintIssueToFieldId } from "./lintFieldMap";

export type FieldErrors = Record<string, LintIssue[]>;

export function buildFieldErrors(issues: readonly LintIssue[]): FieldErrors {
  const map: FieldErrors = {};
  for (const issue of issues) {
    const fid = lintIssueToFieldId(issue);
    if (fid === null) continue;
    if (!map[fid]) map[fid] = [];
    map[fid].push(issue);
  }
  return map;
}

interface FieldErrorBadgeProps {
  fieldId: string;
  errors: FieldErrors;
}

/**
 * Devuelve `true` si el campo `fieldId` tiene al menos un error.
 * Útil para que el form aplique un borde rojo al wrapper del campo
 * (sin renderizar el badge dos veces).
 */
export function fieldHasError(fieldId: string, errors: FieldErrors): boolean {
  return errors[fieldId] !== undefined && errors[fieldId]!.length > 0;
}

export function FieldErrorBadge({ fieldId, errors }: FieldErrorBadgeProps) {
  const issues = errors[fieldId];
  if (!issues || issues.length === 0) return null;
  return (
    <ul
      role="alert"
      data-testid={`vblang-field-error-${fieldId}`}
      className="mt-1 space-y-0.5 text-[10px] text-red-600"
    >
      {issues.map((issue, i) => (
        <li key={i}>
          <span className="font-mono text-[9px] text-red-500">
            {issue.code}
          </span>
          {" "}
          {issue.message}
        </li>
      ))}
    </ul>
  );
}
