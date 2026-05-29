/**
 * Texto solo para lectores de pantalla. Equivale a la utilidad `sr-only`
 * del prototipo, pero como componente para usarlo sin recordar las clases.
 */
import type { ReactNode } from "react";

export interface VisuallyHiddenProps {
  children: ReactNode;
  /** Renderiza como `<span>` (default) o el elemento indicado. */
  as?: "span" | "div";
}

export default function VisuallyHidden({ children, as = "span" }: VisuallyHiddenProps) {
  const Tag = as;
  return <Tag className="sr-only">{children}</Tag>;
}
