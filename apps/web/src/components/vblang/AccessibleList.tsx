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
import { useCallback, useEffect, useId, useRef, useState, type CSSProperties } from "react";

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

const fieldsetStyle: CSSProperties = {
  margin: 0,
  border: 0,
  padding: 0,
};

const legendStyle: CSSProperties = {
  marginBottom: "var(--space-1)",
  fontSize: "var(--text-xs)",
  fontWeight: "var(--fw-medium)",
  color: "var(--c-text)",
};

const listStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "var(--space-1)",
  listStyle: "none",
  margin: 0,
  padding: 0,
};

const itemStyle: CSSProperties = {
  display: "flex",
  alignItems: "flex-start",
  gap: "var(--space-1)",
  borderRadius: "var(--r-sm)",
  border: "1px solid var(--c-border)",
  background: "var(--c-surface)",
  padding: "var(--space-1)",
};

const indexStyle: CSSProperties = {
  marginTop: "var(--space-1)",
  width: "1.25rem",
  flexShrink: 0,
  textAlign: "right",
  fontSize: "10px",
  color: "var(--c-muted)",
};

const reorderBtnStyle: CSSProperties = {
  padding: "0 var(--space-1)",
  fontSize: "var(--text-xs)",
  color: "var(--c-muted)",
  background: "none",
  border: "none",
  cursor: "pointer",
  lineHeight: 1,
};

const removeBtnStyle: CSSProperties = {
  ...reorderBtnStyle,
  color: "var(--c-danger)",
};

const addBtnStyle: CSSProperties = {
  marginTop: "var(--space-1)",
  borderRadius: "var(--r-sm)",
  border: "1px solid var(--c-border)",
  padding: "var(--space-1) var(--space-2)",
  fontSize: "var(--text-xs)",
  color: "var(--c-text)",
  background: "var(--c-surface)",
  cursor: "pointer",
  fontFamily: "var(--font-sans)",
};

const srOnly: CSSProperties = {
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: 0,
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0,0,0,0)",
  whiteSpace: "nowrap",
  border: 0,
};

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
    pendingFocus.current = { index: j, kind: dir === -1 ? "up" : "down" };
  };

  const removeAt = (index: number) => {
    if (items.length <= minItems) return;
    const next = items.filter((_, i) => i !== index);
    onChange(next);
    setAnnounce(
      `${capitalize(itemNoun)} en la posición ${index + 1} eliminado. Quedan ${next.length}.`,
    );
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
    <fieldset style={fieldsetStyle} aria-describedby={describedById}>
      <legend style={legendStyle}>
        {label}
      </legend>

      <ul role="list" style={listStyle}>
        {items.map((item, index) => {
          const rowId = `${baseId}-row-${index}`;
          const hidden = isItemHidden?.(item, index) ?? false;
          return (
            <li
              key={index}
              style={itemStyle}
              hidden={hidden}
            >
              <span
                id={rowId}
                style={indexStyle}
                aria-hidden="true"
              >
                {index + 1}.
              </span>
              <div style={{ minWidth: 0, flex: 1 }}>
                {renderItem(item, index, (nextItem) => {
                  const next = [...items];
                  next[index] = nextItem;
                  onChange(next);
                })}
              </div>
              <div style={{ display: "flex", flexShrink: 0, flexDirection: "column", gap: "2px" }}>
                <button
                  type="button"
                  ref={setBtnRef(`${index}:up`)}
                  onClick={() => move(index, -1)}
                  disabled={index === 0}
                  aria-label={`Subir ${itemNoun} de la posición ${index + 1}`}
                  style={{
                    ...reorderBtnStyle,
                    opacity: index === 0 ? 0.3 : 1,
                  }}
                >
                  ↑
                </button>
                <button
                  type="button"
                  ref={setBtnRef(`${index}:down`)}
                  onClick={() => move(index, 1)}
                  disabled={index === items.length - 1}
                  aria-label={`Bajar ${itemNoun} de la posición ${index + 1}`}
                  style={{
                    ...reorderBtnStyle,
                    opacity: index === items.length - 1 ? 0.3 : 1,
                  }}
                >
                  ↓
                </button>
                <button
                  type="button"
                  ref={setBtnRef(`${index}:remove`)}
                  onClick={() => removeAt(index)}
                  disabled={items.length <= minItems}
                  aria-label={`Eliminar ${itemNoun} de la posición ${index + 1}`}
                  style={{
                    ...removeBtnStyle,
                    opacity: items.length <= minItems ? 0.3 : 1,
                  }}
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
        style={addBtnStyle}
      >
        + {addLabel}
      </button>

      {/* Región de anuncios para lectores de pantalla. */}
      <div role="status" aria-live="polite" style={srOnly}>
        {announce}
      </div>
    </fieldset>
  );
}

function capitalize(s: string): string {
  return s.length === 0 ? s : s[0].toUpperCase() + s.slice(1);
}

export default AccessibleList;
