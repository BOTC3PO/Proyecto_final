/**
 * Menú "+ Añadir" — surface para disclosure progresivo.
 *
 * El menú vive en la tarjeta central. Al click, abre un popover con los
 * add-ons disponibles. Al elegir uno, dispatcha `addAddOn` con datos
 * iniciales (mock).
 *
 * Accesibilidad: el botón tiene `aria-haspopup="menu"` + `aria-expanded`.
 * El menú tiene `role="menu"` y cada item `role="menuitem"`. La navegación
 * por teclado (Esc para cerrar, click afuera para cerrar) es esencial.
 */
import { useEffect, useRef } from "react";
import { usePrototype, type AddOn, type AddOnData, type AddOnKind } from "./state";

const ADDON_OPTIONS: { kind: AddOnKind; label: string; description: string }[] = [
  { kind: "hints", label: "Pistas", description: "Una o más pistas para el alumno." },
  { kind: "explanation", label: "Explicación", description: "Texto que se muestra tras responder." },
  { kind: "steps", label: "Pasos / resolución", description: "Pasos guiados para llegar a la respuesta." },
  { kind: "restricciones", label: "Restricciones", description: "Reglas adicionales (ej. sin calculadora)." },
  { kind: "unidad", label: "Unidad", description: "Etiqueta de unidad (kg, m, °C…)." },
  { kind: "dataset", label: "Dataset", description: "Vincular a una columna de un dataset." },
  { kind: "imagen", label: "Imagen", description: "Imagen estática asociada a la consigna." },
];

function makeDefaultData(kind: AddOnKind): AddOnData {
  switch (kind) {
    case "hints":
      return { kind: "hints", items: ["Primera pista…"] };
    case "explanation":
      return { kind: "explanation", text: "Explicación de la respuesta correcta." };
    case "steps":
      return { kind: "steps", items: ["Paso 1…"] };
    case "restricciones":
      return { kind: "restricciones", items: ["Sin calculadora."] };
    case "unidad":
      return { kind: "unidad", value: "kg" };
    case "dataset":
      return { kind: "dataset", datasetId: "demo", column: "valor" };
    case "imagen":
      return { kind: "imagen", src: "", alt: "" };
  }
}

function summaryFor(data: AddOnData): string {
  switch (data.kind) {
    case "hints":
      return `Pistas (${data.items.length})`;
    case "explanation":
      return "Explicación";
    case "steps":
      return `Pasos (${data.items.length})`;
    case "restricciones":
      return `Restricciones (${data.items.length})`;
    case "unidad":
      return `Unidad: ${data.value || "—"}`;
    case "dataset":
      return `Dataset: ${data.column}`;
    case "imagen":
      return "Imagen";
  }
}

export function AddOnMenu() {
  const { state, dispatch } = usePrototype();
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!state.addMenuOpen) return;
    const onDown = (e: MouseEvent) => {
      if (
        menuRef.current?.contains(e.target as Node) ||
        buttonRef.current?.contains(e.target as Node)
      ) {
        return;
      }
      dispatch({ type: "setAddMenuOpen", value: false });
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        dispatch({ type: "setAddMenuOpen", value: false });
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [state.addMenuOpen, dispatch]);

  const add = (kind: AddOnKind) => {
    const data = makeDefaultData(kind);
    const newAddOn: AddOn = {
      id: `add-${Date.now()}`,
      kind,
      summary: summaryFor(data),
      expanded: false,
      data,
    };
    dispatch({ type: "addAddOn", addOn: newAddOn });
    dispatch({ type: "setAddMenuOpen", value: false });
  };

  return (
    <div className="relative inline-block">
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="menu"
        aria-expanded={state.addMenuOpen}
        onClick={() => dispatch({ type: "setAddMenuOpen", value: !state.addMenuOpen })}
        className="inline-flex items-center gap-1.5 rounded-[var(--r-md)] border border-dashed border-[var(--c-border-strong)] px-2.5 py-1 text-xs text-[var(--c-text-3)] hover:border-[var(--c-primary)] hover:text-[var(--c-primary)]"
      >
        <span aria-hidden="true">+</span> Añadir
      </button>
      {state.addMenuOpen && (
        <div
          ref={menuRef}
          role="menu"
          aria-label="Añadir bloque opcional"
          className="absolute right-0 z-30 mt-1 w-72 rounded-[var(--r-md)] border border-[var(--c-border)] bg-[var(--c-surface)] p-1 shadow-[var(--shadow-pop)]"
        >
          {ADDON_OPTIONS.map((opt) => (
            <button
              key={opt.kind}
              role="menuitem"
              type="button"
              onClick={() => add(opt.kind)}
              className="block w-full rounded-[var(--r-sm)] px-2.5 py-1.5 text-left hover:bg-[var(--c-hover)]"
            >
              <span className="block text-sm font-medium text-[var(--c-text)]">{opt.label}</span>
              <span className="block text-[10px] text-[var(--c-text-3)]">{opt.description}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
