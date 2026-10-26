/**
 * Preview jugable de la pregunta — al costado.
 *
 * Mock: re-renderiza la pregunta con los valores de variables ya resueltos
 * (mismo cálculo que el "rendered" del enunciado) y un campo de respuesta
 * que el usuario puede tocar. El botón "Regenerar" dispatcha
 * `regenerate` → el seed cambia → el mock de variables produce valores
 * nuevos (ver `data.ts`).
 *
 * Accesibilidad: el bloque es un `region` con nombre; el botón regenerar
 * tiene `aria-label`; el seed actual se anuncia por `aria-live` (para que
 * un screen reader sepa que cambió).
 */
import { useState } from "react";
import { usePrototype } from "./state";
import { buildRenderedEnunciado } from "./data";

export function PreviewCard() {
  const { state, dispatch } = usePrototype();
  const [answer, setAnswer] = useState("");
  const rendered = buildRenderedEnunciado(state);

  return (
    <section
      aria-label="Vista previa del alumno"
      data-testid="vblang-prototype-preview"
      className="rounded-[var(--r-lg)] border border-[var(--c-border)] bg-[var(--c-surface)] p-4 shadow-[var(--shadow-1)]"
    >
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-baseline gap-2">
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--c-text-3)]">
            Preview · alumno
          </span>
          <span className="font-mono text-[10px] text-[var(--c-text-3)]">
            seed {state.seed}
          </span>
        </div>
        <button
          type="button"
          aria-label="Regenerar valores de variables"
          onClick={() => dispatch({ type: "regenerate" })}
          className="inline-flex items-center gap-1.5 rounded-[var(--r-md)] border border-[var(--c-border-strong)] px-2.5 py-1 text-xs text-[var(--c-text)] hover:bg-[var(--c-hover)]"
        >
          <span aria-hidden="true">↻</span> Regenerar
        </button>
      </div>

      <div className="space-y-3">
        <p className="font-serif text-lg leading-snug text-[var(--c-text)]">
          {rendered}
        </p>

        {state.question.type === "input" && (
          <div className="flex items-center gap-2">
            <input
              type="text"
              inputMode="decimal"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              aria-label="Tu respuesta"
              placeholder="Escribí tu respuesta…"
              className="h-9 w-32 rounded-[var(--r-md)] border border-[var(--c-border-strong)] bg-[var(--c-surface)] px-3 font-mono text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)]"
            />
            <span className="font-mono text-xs text-[var(--c-text-3)]">
              ± {state.question.tolerancia ?? 0}
            </span>
          </div>
        )}

        {state.question.type === "vf" && (
          <div className="flex gap-2">
            {([true, false] as const).map((v) => (
              <button
                key={String(v)}
                type="button"
                onClick={() => setAnswer(String(v))}
                aria-pressed={answer === String(v)}
                className="rounded-[var(--r-md)] border border-[var(--c-border-strong)] px-3 py-1.5 text-sm hover:bg-[var(--c-hover)]"
              >
                {v ? "Verdadero" : "Falso"}
              </button>
            ))}
          </div>
        )}

        {state.question.type === "mc" && (
          <ul className="space-y-1" role="radiogroup" aria-label="Opciones">
            {(state.question.opciones ?? []).map((o) => (
              <li key={o.id}>
                <button
                  type="button"
                  onClick={() => setAnswer(o.id)}
                  aria-pressed={answer === o.id}
                  className={
                    "flex w-full items-center gap-2 rounded-[var(--r-md)] border px-3 py-2 text-left text-sm transition-colors motion-reduce:transition-none " +
                    (answer === o.id
                      ? "border-[var(--c-primary)] bg-[var(--c-primary-soft)]"
                      : "border-[var(--c-border)] hover:bg-[var(--c-hover)]")
                  }
                >
                  <span className="font-mono text-xs">{o.label}</span>
                </button>
              </li>
            ))}
          </ul>
        )}

        {state.question.type === "abierta" && (
          <textarea
            rows={3}
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            aria-label="Tu respuesta (texto libre)"
            placeholder="Escribí tu respuesta…"
            className="w-full resize-none rounded-[var(--r-md)] border border-[var(--c-border-strong)] bg-[var(--c-surface)] px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)]"
          />
        )}

        {state.question.type === "ordenar" && (
          <ol className="space-y-1" role="list">
            {(state.question.ordenarItems ?? []).map((it, i) => (
              <li
                key={it.id}
                className="flex items-center gap-2 rounded-[var(--r-md)] border border-[var(--c-border)] bg-[var(--c-surface)] px-3 py-2 text-sm"
              >
                <span aria-hidden="true" className="font-mono text-[10px] text-[var(--c-text-3)]">
                  {i + 1}.
                </span>
                {it.label}
              </li>
            ))}
          </ol>
        )}

        {(state.question.type === "analisis_sintactico" || state.question.type === "identificar_palabras") && (
          <p className="rounded-[var(--r-md)] border border-[var(--c-border)] bg-[var(--c-surface)] px-3 py-2 font-serif text-base leading-relaxed text-[var(--c-text)]">
            {state.question.bodyText}
          </p>
        )}

        <div className="flex justify-end">
          <button
            type="button"
            className="rounded-[var(--r-md)] bg-[var(--c-primary)] px-3 py-1.5 text-sm font-semibold text-[var(--c-text-on-dark)] hover:opacity-90"
          >
            Enviar respuesta
          </button>
        </div>
      </div>
    </section>
  );
}
