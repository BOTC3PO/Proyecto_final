/**
 * editor/LintContext.ts — lint inline por campo, transversal al editor nuevo.
 *
 * El editor nuevo corre el validador (`lint`) sobre la plantilla y expone el
 * mapa `fieldId → LintIssue[]` (vía `buildFieldErrors`/`lintFieldMap`, reusados
 * del editor viejo) por contexto. Cada campo lee su propio error y lo pasa a la
 * prop `error` del átomo `Field` (o equivalente), sin prop-drilling.
 *
 * `useFieldError(id)` sirve para campos de control único; en listas (índices
 * `enunciados.<i>`, `pistas.<i>`) se lee el mapa una vez con `useFieldErrorMap()`
 * y se resuelve por índice con `errorTextFor` (no se puede llamar un hook por
 * ítem dentro de un `.map`).
 */
import { createContext, useContext } from "react";
import type { FieldErrors } from "../components/vblang/FieldErrorBadge";

export const LintFieldsContext = createContext<FieldErrors>({});

/** Mapa completo `fieldId → issues` (para resolver índices en listas). */
export function useFieldErrorMap(): FieldErrors {
  return useContext(LintFieldsContext);
}

/** Mensaje de error combinado para `fieldId`, o `undefined` si no hay. */
export function errorTextFor(
  map: FieldErrors,
  fieldId: string,
): string | undefined {
  const issues = map[fieldId];
  if (!issues || issues.length === 0) return undefined;
  return issues.map((i) => i.message).join(" · ");
}

/** Error de un campo de control único. */
export function useFieldError(fieldId: string): string | undefined {
  return errorTextFor(useFieldErrorMap(), fieldId);
}
