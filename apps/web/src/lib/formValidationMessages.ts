/**
 * Traduce los mensajes nativos de validación HTML5 (`required`, `type="email"`,
 * etc.) usando la Constraint Validation API (`setCustomValidity`) en vez de
 * reemplazar la UI nativa del navegador (popup, foco automático, `:invalid`).
 * El navegador sigue haciendo toda la validación; solo cambia el texto.
 */
import type { FormEvent } from "react";

type ValidatableElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

// `Element` (no unión) evita el problema de distribución de tipos que rompe
// la asignabilidad de FormEventHandler<HTMLInputElement | HTMLSelectElement | ...>;
// el cast interno recupera `.validity`/`.setCustomValidity`, presentes en los tres.
export function makeValidityMessageHandlers(t: (key: string) => string) {
  const onInvalid = (e: FormEvent<Element>) => {
    const el = e.currentTarget as unknown as ValidatableElement;
    if (el.validity.valueMissing) {
      el.setCustomValidity(t("comun.rellenaEsteCampo"));
    } else if (el.validity.typeMismatch) {
      el.setCustomValidity(t("comun.formatoInvalido"));
    } else {
      el.setCustomValidity("");
    }
  };
  const onInput = (e: FormEvent<Element>) => {
    (e.currentTarget as unknown as ValidatableElement).setCustomValidity("");
  };
  return { onInvalid, onInput };
}
