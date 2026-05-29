/**
 * Tabs con patrón ARIA completo (prototipo `.htabs` / `.qz-tab`).
 *
 * - `role="tablist"` + `role="tab"` + `role="tabpanel"`, `aria-selected`,
 *   `aria-controls` / `aria-labelledby`.
 * - Roving tabindex: solo el tab activo es tabbable.
 * - Navegación por teclado: ←/→ (con wrap), Home, End — activación automática
 *   al enfocar (patrón recomendado para paneles baratos).
 *
 * Controlado: el padre maneja `value` + `onChange`.
 */
import { useRef } from "react";
import type { KeyboardEvent, ReactNode } from "react";

export interface TabItem {
  id: string;
  label: ReactNode;
  content: ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  tabs: TabItem[];
  value: string;
  onChange: (id: string) => void;
  /** Nombre accesible del tablist (obligatorio). */
  "aria-label": string;
  className?: string;
}

export default function Tabs({
  tabs,
  value,
  onChange,
  "aria-label": ariaLabel,
  className = "",
}: TabsProps) {
  const refs = useRef<Record<string, HTMLButtonElement | null>>({});

  const enabled = tabs.filter((t) => !t.disabled);

  const focusAndSelect = (id: string) => {
    onChange(id);
    requestAnimationFrame(() => refs.current[id]?.focus());
  };

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    const idx = enabled.findIndex((t) => t.id === value);
    if (idx < 0) return;
    let next = -1;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (idx + 1) % enabled.length;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (idx - 1 + enabled.length) % enabled.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = enabled.length - 1;
    if (next >= 0) {
      e.preventDefault();
      focusAndSelect(enabled[next].id);
    }
  };

  const active = tabs.find((t) => t.id === value) ?? tabs[0];

  return (
    <div className={className}>
      <div
        role="tablist"
        aria-label={ariaLabel}
        className="flex gap-1 border-b border-[var(--c-border)]"
      >
        {tabs.map((t) => {
          const selected = t.id === value;
          return (
            <button
              key={t.id}
              ref={(el) => {
                refs.current[t.id] = el;
              }}
              role="tab"
              type="button"
              id={`tab-${t.id}`}
              aria-selected={selected}
              aria-controls={`tabpanel-${t.id}`}
              tabIndex={selected ? 0 : -1}
              disabled={t.disabled}
              onClick={() => onChange(t.id)}
              onKeyDown={onKeyDown}
              className={
                "-mb-px rounded-t-[var(--r-sm)] border-b-2 px-3 py-1.5 text-sm font-medium " +
                "transition-colors motion-reduce:transition-none " +
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)] " +
                "disabled:opacity-50 disabled:cursor-not-allowed " +
                (selected
                  ? "border-[var(--c-primary)] text-[var(--c-text)]"
                  : "border-transparent text-[var(--c-text-3)] hover:text-[var(--c-text)]")
              }
            >
              {t.label}
            </button>
          );
        })}
      </div>
      {active && (
        <div
          role="tabpanel"
          id={`tabpanel-${active.id}`}
          aria-labelledby={`tab-${active.id}`}
          tabIndex={0}
          className="pt-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)]"
        >
          {active.content}
        </div>
      )}
    </div>
  );
}
