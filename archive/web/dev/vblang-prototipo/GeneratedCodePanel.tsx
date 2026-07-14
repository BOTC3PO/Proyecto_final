/**
 * Panel "Código generado" — read-only, secundario, colapsable.
 *
 * Refleja el DSL mock en vivo. NO es editable: cualquier edición pasa por
 * el formulario o por el property grid. Esto está inspirado en el patrón
 * VB-B2 del editor real (ver `pages/PlantillaEditor.tsx:165`): el código
 * se ve, pero no se toca.
 *
 * Es `<pre>` (no `<textarea>`) para evitar el conflicto de "dos editores
 * que pisan el mismo state". El CSS le da un toque de terminal: tipografía
 * mono, color secundario, scroll si pasa la altura.
 */
import { usePrototype } from "./state";
import { buildMockDsl } from "./data";

export function GeneratedCodePanel() {
  const { state, dispatch } = usePrototype();
  const dsl = buildMockDsl(state);

  return (
    <section
      data-testid="vblang-prototype-generated-code"
      className="rounded-[var(--r-lg)] border border-[var(--c-border)] bg-[var(--c-surface)]"
    >
      <button
        type="button"
        onClick={() => dispatch({ type: "setShowCode", value: !state.showCode })}
        aria-expanded={state.showCode}
        aria-controls="vblang-prototype-generated-code-panel"
        className="flex w-full items-center justify-between px-4 py-2.5 text-left"
      >
        <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--c-text-3)]">
          <span aria-hidden="true">{state.showCode ? "▾" : "▸"}</span>
          Código generado
        </span>
        <span className="text-[10px] text-[var(--c-text-3)]">read-only · sincronizado</span>
      </button>
      {state.showCode && (
        <pre
          id="vblang-prototype-generated-code-panel"
          aria-label="DSL generado (read-only)"
          className="max-h-64 overflow-auto border-t border-[var(--c-border)] bg-[var(--c-surface-3)] px-4 py-3 font-mono text-[11px] leading-relaxed text-[var(--c-text)] whitespace-pre-wrap break-words"
        >
          {dsl}
        </pre>
      )}
    </section>
  );
}
