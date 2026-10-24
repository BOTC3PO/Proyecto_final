/**
 * Tarjeta central de la consigna en edición — el "formulario Forms".
 *
 * Visual: parece una pregunta de Google Forms pero editada por un profesor.
 * Estética editorial: watermark numérico grande, pregunta en serif, campo
 * de respuesta limpio, fila de variables como chips, y add-ons plegables.
 *
 * Estructura:
 *   1. Watermark "01" (decorativo, aria-hidden).
 *   2. Tipo como eyebrow + pregunta en serif.
 *   3. Bloque "Respuesta" (depende del tipo).
 *   4. Variables como chips clickeables.
 *   5. Add-ons existentes (CollapsibleBlock) + menú + Añadir.
 *
 * Toda la pieza es `data-question-card` para tests y para el Outline.
 */
import { useId } from "react";
import { usePrototype } from "./state";
import { AddOnMenu } from "./AddOnMenu";
import { CollapsibleBlock } from "./CollapsibleBlock";
import { buildRenderedEnunciado } from "./data";

function TypeEyebrow() {
  const { state } = usePrototype();
  const labelMap: Record<string, string> = {
    input: "Numérica",
    mc: "Opción múltiple",
    vf: "Verdadero / Falso",
    completar: "Completar",
    abierta: "Texto libre",
    ordenar: "Ordenar",
    analisis_sintactico: "Análisis sintáctico",
    identificar_palabras: "Identificar palabras",
    marcar_mapa: "Selección en mapa",
    emparejar: "Emparejar",
    codigo_formula: "Código / Fórmula",
    visual: "Visual",
  };
  return (
    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--c-text-3)]">
      {labelMap[state.question.type] ?? state.question.type}
    </p>
  );
}

function EnunciadoDisplay() {
  const { state, dispatch } = usePrototype();
  const rendered = buildRenderedEnunciado(state);
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        Enunciado
      </label>
      <textarea
        id={id}
        value={state.question.enunciado}
        onChange={(e) => dispatch({ type: "setEnunciado", value: e.target.value })}
        rows={2}
        aria-describedby={`${id}-rendered`}
        className="w-full resize-none border-none bg-transparent p-0 font-serif text-2xl leading-snug text-[var(--c-text)] focus:outline-none focus-visible:ring-0"
      />
      <p
        id={`${id}-rendered`}
        className="mt-2 font-mono text-[10px] text-[var(--c-text-3)]"
        aria-live="polite"
      >
        ▶ {rendered}
      </p>
    </div>
  );
}

function AnswerBlock() {
  const { state, dispatch } = usePrototype();
  switch (state.question.type) {
    case "input":
      return (
        <div className="flex flex-col gap-1">
          <label className="text-[10px] font-semibold uppercase tracking-wider text-[var(--c-text-3)]">
            Respuesta
          </label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              inputMode="decimal"
              aria-label="Respuesta esperada"
              placeholder="—"
              className="h-10 w-32 rounded-[var(--r-md)] border border-[var(--c-border-strong)] bg-[var(--c-surface)] px-3 font-mono text-base text-[var(--c-text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)]"
            />
            <span className="font-mono text-xs text-[var(--c-text-3)]">± {state.question.tolerancia ?? 0}</span>
          </div>
        </div>
      );
    case "vf":
      return (
        <div className="flex gap-2">
          {([true, false] as const).map((val) => (
            <button
              key={String(val)}
              type="button"
              onClick={() => dispatch({ type: "setVfAnswer", value: val })}
              aria-pressed={state.question.vfAnswer === val}
              className={
                "rounded-[var(--r-md)] border px-4 py-2 text-sm font-medium transition-colors motion-reduce:transition-none " +
                (state.question.vfAnswer === val
                  ? "border-[var(--c-primary)] bg-[var(--c-primary-soft)] text-[var(--c-primary)]"
                  : "border-[var(--c-border-strong)] bg-[var(--c-surface)] text-[var(--c-text)] hover:bg-[var(--c-hover)]")
              }
            >
              {val ? "Verdadero" : "Falso"}
            </button>
          ))}
        </div>
      );
    case "mc":
      return (
        <ul className="space-y-1" role="list">
          {(state.question.opciones ?? []).map((o, i) => (
            <li key={o.id}>
              <button
                type="button"
                className={
                  "flex w-full items-center gap-2 rounded-[var(--r-md)] border px-3 py-2 text-left text-sm transition-colors motion-reduce:transition-none " +
                  (o.correct
                    ? "border-[var(--c-primary)] bg-[var(--c-primary-soft)] text-[var(--c-text)]"
                    : "border-[var(--c-border)] bg-[var(--c-surface)] hover:bg-[var(--c-hover)]")
                }
                onClick={() => {
                  const next = (state.question.opciones ?? []).map((x) => ({ ...x, correct: x.id === o.id }));
                  dispatch({ type: "setOpciones", opciones: next });
                }}
                aria-pressed={o.correct}
              >
                <span
                  aria-hidden="true"
                  className="grid h-5 w-5 place-items-center rounded-full border border-[var(--c-border-strong)] text-[10px] font-mono"
                >
                  {i + 1}
                </span>
                <span className="font-mono text-sm">{o.label}</span>
                {o.correct && (
                  <span className="ml-auto text-[10px] font-semibold uppercase tracking-wider text-[var(--c-primary)]">
                    correcta
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>
      );
    case "completar":
      return (
        <p className="text-sm text-[var(--c-text)]">
          {state.question.enunciado.split("__").map((part, i, arr) => (
            <span key={i}>
              {part}
              {i < arr.length - 1 && (
                <span className="mx-1 inline-block min-w-[3rem] border-b-2 border-dashed border-[var(--c-border-strong)] align-baseline">
                  &nbsp;
                </span>
              )}
            </span>
          ))}
        </p>
      );
    case "abierta":
      return (
        <textarea
          rows={3}
          aria-label="Respuesta del alumno (mock)"
          placeholder="(el alumno escribe acá)"
          className="w-full resize-none rounded-[var(--r-md)] border border-[var(--c-border)] bg-[var(--c-surface)] px-3 py-2 text-sm text-[var(--c-text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)]"
        />
      );
    case "ordenar":
      return (
        <ol className="space-y-1" role="list">
          {(state.question.ordenarItems ?? []).map((it, i) => (
            <li
              key={it.id}
              className="flex items-center gap-2 rounded-[var(--r-md)] border border-[var(--c-border)] bg-[var(--c-surface)] px-3 py-2 text-sm"
            >
              <span aria-hidden="true" className="font-mono text-[10px] text-[var(--c-text-3)]">
                {i + 1}.
              </span>
              <span>{it.label}</span>
            </li>
          ))}
        </ol>
      );
    case "analisis_sintactico":
    case "identificar_palabras":
      return (
        <p className="rounded-[var(--r-md)] border border-[var(--c-border)] bg-[var(--c-surface)] px-3 py-2 font-serif text-base leading-relaxed text-[var(--c-text)]">
          {state.question.bodyText ?? "(texto a analizar)"}
        </p>
      );
    default:
      return (
        <div className="rounded-[var(--r-md)] border border-dashed border-[var(--c-border-strong)] bg-[var(--c-surface-3)] p-3 text-xs text-[var(--c-text-3)]">
          Render del tipo <span className="font-mono">{state.question.type}</span> en preview
          (mock). El editor dedicado entra en una iteración posterior.
        </div>
      );
  }
}

function VariablesRow() {
  const { state, dispatch } = usePrototype();
  if (state.variables.length === 0) return null;
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--c-text-3)]">
        Variables
      </span>
      {state.variables.map((v) => {
        const selected =
          state.selected.kind === "variable" && state.selected.variableId === v.id;
        return (
          <button
            key={v.id}
            type="button"
            onClick={() => dispatch({ type: "select", element: { kind: "variable", variableId: v.id } })}
            aria-pressed={selected}
            className={
              "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-xs transition-colors motion-reduce:transition-none " +
              (selected
                ? "border-[var(--c-primary)] bg-[var(--c-primary-soft)] text-[var(--c-primary)]"
                : "border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] hover:bg-[var(--c-hover)]")
            }
          >
            <span aria-hidden="true" className="text-[var(--c-text-3)]">{"{"}</span>
            {v.name}
            <span aria-hidden="true" className="text-[var(--c-text-3)]">{"}"}</span>
            <span aria-hidden="true" className="text-[var(--c-text-3)]">·</span>
            <span className="text-[var(--c-text-3)]">
              {Array.isArray(v.currentValue) ? v.currentValue.join(",") : v.currentValue}
            </span>
          </button>
        );
      })}
    </div>
  );
}

function AddOnsList() {
  const { state, dispatch } = usePrototype();
  if (state.addOns.length === 0) return null;
  return (
    <div className="space-y-2">
      {state.addOns.map((a) => (
        <button
          key={a.id}
          type="button"
          className="block w-full text-left"
          onClick={() => dispatch({ type: "select", element: { kind: "addOn", addOnId: a.id } })}
          aria-pressed={state.selected.kind === "addOn" && state.selected.addOnId === a.id}
        >
          <CollapsibleBlock
            summary={a.summary}
            expanded={a.expanded}
            onToggle={() => dispatch({ type: "toggleAddOn", addOnId: a.id })}
            onRemove={() => dispatch({ type: "removeAddOn", addOnId: a.id })}
            removeLabel={`Quitar ${a.summary}`}
          >
            <pre className="whitespace-pre-wrap font-mono text-[11px] leading-snug text-[var(--c-text-3)]">
              {JSON.stringify(a.data, null, 2)}
            </pre>
          </CollapsibleBlock>
        </button>
      ))}
    </div>
  );
}

export function QuestionCard() {
  const { state, dispatch } = usePrototype();
  const selected = state.selected.kind === "question";
  return (
    <article
      data-question-card
      onClick={() => dispatch({ type: "select", element: { kind: "question" } })}
      className={
        "relative cursor-text overflow-hidden rounded-[var(--r-lg)] border bg-[var(--c-surface)] transition-shadow motion-reduce:transition-none " +
        (selected
          ? "border-[var(--c-primary)] shadow-[var(--shadow-2)]"
          : "border-[var(--c-border)] shadow-[var(--shadow-1)]")
      }
    >
      {/* watermark numérico estilo "manuscrito" */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-2 -top-3 select-none font-serif text-[7rem] leading-none text-[var(--c-primary)] opacity-[0.06]"
      >
        01
      </span>

      <div className="relative space-y-4 p-5 md:p-7">
        <div className="flex items-baseline justify-between">
          <TypeEyebrow />
          {selected && (
            <span className="rounded-full bg-[var(--c-primary-soft)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--c-primary)]">
              editando
            </span>
          )}
        </div>
        <EnunciadoDisplay />
        <AnswerBlock />
        <VariablesRow />
        <AddOnsList />
        <div className="flex items-center justify-between border-t border-dashed border-[var(--c-border)] pt-3">
          <span className="text-[10px] text-[var(--c-text-3)]">
            Click en cualquier elemento para editarlo a la derecha.
          </span>
          <AddOnMenu />
        </div>
      </div>
    </article>
  );
}
