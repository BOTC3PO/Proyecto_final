/**
 * Wizard "Nueva plantilla".
 *
 * Modal que se muestra UNA sola vez al crear una plantilla nueva. Ofrece
 * arrancar desde un ejemplo (agrupado por tipo de pregunta) o desde un
 * template en blanco. El padre (PlantillaEditor) lo monta sólo en modo
 * creación y maneja la persistencia del "ya se mostró" con un useState local.
 *
 * Accesibilidad:
 *  - role="dialog" + aria-modal="true" + aria-labelledby.
 *  - Foco inicial en el dialogo.
 *  - Esc y el botón X cierran (equivalente a "Empezar en blanco").
 */

import { useEffect, useId, useMemo, useRef } from "react";
import { parse } from "@vb/vblang";
import { SPRINT_9B_EXAMPLES, type VblangExample } from "../../vblang/examples";

export interface ExampleGroup {
  /** El tipo de pregunta (input, mc, ordenar, ...). */
  tipo: string;
  /** Etiqueta legible para mostrar en la grilla. */
  label: string;
  examples: VblangExample[];
}

const TIPO_LABELS: Record<string, string> = {
  input: "Input numérico",
  mc: "Multiple choice",
  ordenar: "Ordenar",
  marcar_mapa: "Marcar en el mapa",
  analisis_sintactico: "Análisis sintáctico",
  identificar_palabras: "Identificar palabras",
};

function labelFor(tipo: string): string {
  return TIPO_LABELS[tipo] ?? tipo;
}

/** Devuelve el valor del bloque `tipo:` de un codigoDsl, o `null` si no
 *  puede extraerlo (DSL invalido o sin bloque). */
function extractTipo(codigoDsl: string): string | null {
  try {
    const p = parse(codigoDsl);
    const bloque = p.bloques.find((b) => b.kind === "tipo");
    if (!bloque || bloque.kind !== "tipo") return null;
    return bloque.valor;
  } catch {
    return null;
  }
}

function buildGroups(): ExampleGroup[] {
  const buckets = new Map<string, VblangExample[]>();
  for (const ex of SPRINT_9B_EXAMPLES) {
    const tipo = extractTipo(ex.codigoDsl) ?? "general";
    const list = buckets.get(tipo) ?? [];
    list.push(ex);
    buckets.set(tipo, list);
  }
  const groups: ExampleGroup[] = [];
  for (const [tipo, examples] of buckets) {
    groups.push({ tipo, label: labelFor(tipo), examples });
  }
  // Orden estable: input primero, luego por nombre de tipo.
  groups.sort((a, b) => {
    if (a.tipo === "input") return -1;
    if (b.tipo === "input") return 1;
    return a.tipo.localeCompare(b.tipo);
  });
  return groups;
}

export interface NuevaPlantillaWizardProps {
  onPick: (codigoDsl: string) => void;
  onBlank: () => void;
  onClose: () => void;
  /** Override opcional de la lista de ejemplos (para tests). */
  examples?: readonly VblangExample[];
}

export default function NuevaPlantillaWizard({
  onPick,
  onBlank,
  onClose,
  examples = SPRINT_9B_EXAMPLES,
}: NuevaPlantillaWizardProps) {
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement | null>(null);

  const groups = useMemo(() => {
    // Si nos pasan `examples`, derivamos los grupos desde esa lista en vez
    // de los globales (asi los tests pueden usar un subset).
    if (examples === SPRINT_9B_EXAMPLES) return buildGroups();
    const buckets = new Map<string, VblangExample[]>();
    for (const ex of examples) {
      const tipo = extractTipo(ex.codigoDsl) ?? "general";
      const list = buckets.get(tipo) ?? [];
      list.push(ex);
      buckets.set(tipo, list);
    }
    const out: ExampleGroup[] = [];
    for (const [tipo, list] of buckets) {
      out.push({ tipo, label: labelFor(tipo), examples: list });
    }
    out.sort((a, b) => a.tipo.localeCompare(b.tipo));
    return out;
  }, [examples]);

  // Cierre con Esc (accesibilidad minima: no es necesario un focus trap
  // estricto para v1 — el overlay es opaco y los controles del editor quedan
  // detras, no accesibles via teclado).
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };
    document.addEventListener("keydown", onKey);
    // Foco inicial: en el dialogo (no en un boton) para que el lector de
    // pantalla lo anuncie completo.
    dialogRef.current?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      data-testid="vblang-wizard-overlay"
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        data-testid="vblang-wizard"
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-lg bg-[var(--c-surface,#fff)] p-6 shadow-xl outline-none"
      >
        <button
          type="button"
          aria-label="Cerrar wizard"
          onClick={onClose}
          className="absolute right-3 top-3 rounded p-1 text-[var(--c-muted,#64748b)] hover:bg-[var(--c-surface-2,#f1f5f9)]"
        >
          ×
        </button>
        <h2
          id={titleId}
          className="mb-1 text-lg font-semibold text-[var(--c-text,#0f172a)]"
        >
          Empezá una nueva plantilla
        </h2>
        <p className="mb-4 text-sm text-[var(--c-muted,#64748b)]">
          Elegí un ejemplo para arrancar con la estructura ya armada, o empezá
          en blanco.
        </p>

        <div className="flex flex-col gap-5" data-testid="vblang-wizard-groups">
          {groups.map((g) => (
            <section key={g.tipo} data-testid={`vblang-wizard-group-${g.tipo}`}>
              <h3 className="mb-2 text-xs font-medium uppercase tracking-wide text-[var(--c-muted,#64748b)]">
                {g.label}
              </h3>
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {g.examples.map((ex) => (
                  <li key={ex.id}>
                    <button
                      type="button"
                      onClick={() => onPick(ex.codigoDsl)}
                      data-testid={`vblang-wizard-pick-${ex.id}`}
                      className="w-full rounded-md border border-[var(--c-border,#cbd5e1)] bg-[var(--c-surface-2,#f8fafc)] p-3 text-left hover:border-[var(--c-primary,#3b82f6)] hover:bg-[var(--c-surface,#fff)]"
                    >
                      <span className="block text-sm font-medium text-[var(--c-text,#0f172a)]">
                        {ex.titulo}
                      </span>
                      <span className="mt-0.5 block text-xs text-[var(--c-muted,#64748b)]">
                        {ex.descripcion}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <section>
            <h3 className="mb-2 text-xs font-medium uppercase tracking-wide text-[var(--c-muted,#64748b)]">
              En blanco
            </h3>
            <button
              type="button"
              onClick={onBlank}
              data-testid="vblang-wizard-blank"
              className="w-full rounded-md border border-dashed border-[var(--c-border,#cbd5e1)] bg-[var(--c-surface-2,#f8fafc)] p-3 text-left text-sm hover:border-[var(--c-primary,#3b82f6)]"
            >
              <span className="block font-medium text-[var(--c-text,#0f172a)]">
                Empezar en blanco
              </span>
              <span className="mt-0.5 block text-xs text-[var(--c-muted,#64748b)]">
                Arranca con un template mínimo de variables + enunciado +
                respuesta (útil para input numérico).
              </span>
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}
