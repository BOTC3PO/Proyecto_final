/**
 * Grilla de los 12 tipos de pregunta.
 *
 * Click en un card = cambiar el tipo de la pregunta actual (resetea la
 * selección a la pregunta y reemplaza el `ProtoQuestion` por uno coherente
 * con el tipo). Los 9 tipos del editor real conviven con 3 "futuro" que
 * mantienen una tarjeta visible.
 *
 * El layout es 6 columnas × 2 filas en desktop, 4 × 3 en tablet, 2 × 6 en
 * mobile. El número pequeño de cada card es decorativo (estilo "índice
 * editorial") y refuerza la paleta de tipos.
 */
import { usePrototype, QUESTION_TYPES, type QuestionTypeMeta } from "./state";

function TypeCard({ meta, active, onPick }: { meta: QuestionTypeMeta; active: boolean; onPick: () => void }) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={active}
      onClick={onPick}
      className={
        "group relative flex w-full flex-col items-start gap-1 rounded-[var(--r-md)] border px-3 py-2.5 text-left transition-colors motion-reduce:transition-none " +
        (active
          ? "border-[var(--c-primary)] bg-[var(--c-primary-soft)]"
          : "border-[var(--c-border)] bg-[var(--c-surface)] hover:border-[var(--c-border-strong)] hover:bg-[var(--c-surface-3)]")
      }
    >
      <div className="flex w-full items-baseline justify-between gap-2">
        <span
          aria-hidden="true"
          className="font-mono text-[10px] text-[var(--c-text-3)] group-hover:text-[var(--c-text)]"
        >
          {meta.glyph}
        </span>
        {meta.category === "futuro" && (
          <span className="rounded-full bg-[var(--c-warning-soft)] px-1.5 py-0 text-[9px] font-semibold uppercase tracking-wider text-[var(--c-warning)]">
            pronto
          </span>
        )}
      </div>
      <span className="text-sm font-medium text-[var(--c-text)]">{meta.label}</span>
      <span className="line-clamp-1 text-[10px] text-[var(--c-text-3)]">{meta.description}</span>
    </button>
  );
}

export function TypeGrid() {
  const { state, dispatch } = usePrototype();
  return (
    <section
      role="radiogroup"
      aria-label="Tipo de pregunta"
      data-testid="vblang-prototype-type-grid"
      className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
    >
      {QUESTION_TYPES.map((meta) => (
        <TypeCard
          key={meta.id}
          meta={meta}
          active={state.question.type === meta.id}
          onPick={() => dispatch({ type: "setType", questionType: meta.id })}
        />
      ))}
    </section>
  );
}
