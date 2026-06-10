/**
 * Lista repetible accesible para el editor schema-driven de VBLang (WO06).
 *
 * Principio no negociable del work order: reordenar SIN drag-and-drop como base.
 * Se reordena con botones ↑/↓ (nativamente accesibles por teclado: Tab +
 * Enter/Espacio), siguiendo el patrón WAI-ARIA de listas reordenables:
 *  - Cada acción (mover, agregar, eliminar) se anuncia en una región
 *    `aria-live="polite"` (`role="status"`).
 *  - El foco se conserva en el botón que disparó el movimiento, ahora en su
 *    nueva posición, para poder seguir reordenando sin usar el mouse.
 *
 * Es genérica vía render-prop: sirve para cualquier forma de ítem (string,
 * expresión, etiqueta), de modo que un solo componente cubra todas las
 * dash-lists que el parser soporta.
 */
import { useCallback, useEffect, useId, useRef, useState } from "react";

export interface AccessibleListProps<T> {
  /** Ítems actuales. */
  items: T[];
  /** Notifica la nueva lista (inmutable). */
  onChange: (next: T[]) => void;
  /** Dibuja el contenido editable de un ítem. */
  renderItem: (
    item: T,
    index: number,
    onItemChange: (next: T) => void,
  ) => React.ReactNode;
  /** Crea un ítem vacío al agregar. */
  createItem: () => T;
  /** Etiqueta accesible del grupo (fieldset legend). */
  label: string;
  /** Etiqueta del botón "agregar". Default: "Agregar ítem". */
  addLabel?: string;
  /** Nombre singular del ítem para los anuncios (ej.: "opción"). Default: "ítem". */
  itemNoun?: string;
  /** Mínimo de ítems; por debajo, el botón eliminar se deshabilita. Default 0. */
  minItems?: number;
  /** id de un elemento que describe el grupo (aria-describedby). */
  describedById?: string;
  /**
   * Si retorna true, el item se renderiza con el atributo HTML `hidden`
   * (no se quita del state ni se reordena). Usado por la barra del banco
   * de preguntas (Tarea 20) para el buscador: el filtro es solo visual.
   */
  isItemHidden?: (item: T, index: number) => boolean;
}

export function AccessibleList<T>({
  items,
  onChange,
  renderItem,
  createItem,
  label,
  addLabel = "Agregar ítem",
  itemNoun = "ítem",
  minItems = 0,
  describedById,
  isItemHidden,
}: AccessibleListProps<T>) {
  const baseId = useId();
  const [announce, setAnnounce] = useState("");
  // Foco pendiente tras un re-render: { index, dir } => enfocar ese botón.
  const pendingFocus = useRef<{ index: number; kind: "up" | "down" | "remove" | "add" } | null>(
    null,
  );
  const btnRefs = useRef<Map<string, HTMLButtonElement | null>>(new Map());

  const setBtnRef = useCallback(
    (key: string) => (el: HTMLButtonElement | null) => {
      btnRefs.current.set(key, el);
    },
    [],
  );

  useEffect(() => {
    const pf = pendingFocus.current;
    if (!pf) return;
    pendingFocus.current = null;
    const el = btnRefs.current.get(`${pf.index}:${pf.kind}`);
    el?.focus();
  });

  const move = (index: number, dir: -1 | 1) => {
    const j = index + dir;
    if (j < 0 || j >= items.length) return;
    const next = [...items];
    [next[index], next[j]] = [next[j], next[index]];
    onChange(next);
    setAnnounce(
      `${capitalize(itemNoun)} movido de la posición ${index + 1} a la ${j + 1} de ${items.length}.`,
    );
    // Conservar el foco en el mismo botón, ahora en la fila destino.
    pendingFocus.current = { index: j, kind: dir === -1 ? "up" : "down" };
  };

  const removeAt = (index: number) => {
    if (items.length <= minItems) return;
    const next = items.filter((_, i) => i !== index);
    onChange(next);
    setAnnounce(
      `${capitalize(itemNoun)} en la posición ${index + 1} eliminado. Quedan ${next.length}.`,
    );
    // Tras eliminar, enfocar el botón eliminar de la fila que toma su lugar
    // (o la anterior si era la última).
    const focusIndex = Math.min(index, next.length - 1);
    if (focusIndex >= 0) {
      pendingFocus.current = { index: focusIndex, kind: "remove" };
    }
  };

  const add = () => {
    const next = [...items, createItem()];
    onChange(next);
    setAnnounce(`${capitalize(itemNoun)} agregado. Ahora hay ${next.length}.`);
  };

  return (
    <fieldset className="m-0 border-0 p-0" aria-describedby={describedById}>
      <legend className="mb-1 text-xs font-medium text-[var(--c-text,#0f172a)]">
        {label}
      </legend>

      <ul role="list" className="flex flex-col gap-1">
        {items.map((item, index) => {
          const rowId = `${baseId}-row-${index}`;
          const hidden = isItemHidden?.(item, index) ?? false;
          return (
            <li
              key={index}
              className="flex items-start gap-1 rounded border border-[var(--c-border,#cbd5e1)] bg-white p-1"
              hidden={hidden}
            >
              <span
                id={rowId}
                className="mt-1 w-5 shrink-0 text-right text-[10px] text-[var(--c-muted,#64748b)]"
                aria-hidden="true"
              >
                {index + 1}.
              </span>
              <div className="min-w-0 flex-1">
                {renderItem(item, index, (nextItem) => {
                  const next = [...items];
                  next[index] = nextItem;
                  onChange(next);
                })}
              </div>
              <div className="flex shrink-0 flex-col gap-0.5">
                <button
                  type="button"
                  ref={setBtnRef(`${index}:up`)}
                  onClick={() => move(index, -1)}
                  disabled={index === 0}
                  aria-label={`Subir ${itemNoun} de la posición ${index + 1}`}
                  className="px-1 text-xs text-[var(--c-muted,#64748b)] disabled:opacity-30"
                >
                  ↑
                </button>
                <button
                  type="button"
                  ref={setBtnRef(`${index}:down`)}
                  onClick={() => move(index, 1)}
                  disabled={index === items.length - 1}
                  aria-label={`Bajar ${itemNoun} de la posición ${index + 1}`}
                  className="px-1 text-xs text-[var(--c-muted,#64748b)] disabled:opacity-30"
                >
                  ↓
                </button>
                <button
                  type="button"
                  ref={setBtnRef(`${index}:remove`)}
                  onClick={() => removeAt(index)}
                  disabled={items.length <= minItems}
                  aria-label={`Eliminar ${itemNoun} de la posición ${index + 1}`}
                  className="px-1 text-xs text-red-600 disabled:opacity-30"
                >
                  ×
                </button>
              </div>
            </li>
          );
        })}
      </ul>

      <button
        type="button"
        onClick={add}
        className="mt-1 rounded border border-[var(--c-border,#cbd5e1)] px-2 py-1 text-xs text-[var(--c-text,#0f172a)] hover:bg-[var(--c-surface,#f1f5f9)]"
      >
        + {addLabel}
      </button>

      {/* Región de anuncios para lectores de pantalla. */}
      <div role="status" aria-live="polite" className="sr-only">
        {announce}
      </div>
    </fieldset>
  );
}

function capitalize(s: string): string {
  return s.length === 0 ? s : s[0].toUpperCase() + s.slice(1);
}

export default AccessibleList;
