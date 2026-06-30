/**
 * Muestra los 3 ejercicios de preview con botón "Regenerar".
 *
 * DIFF-07: cada card es interactiva — el profe puede responder ("Tu respuesta…"
 * o eligiendo una opción) y comprobar, viendo si la corrección automática la da
 * por buena. La clave de respuesta queda oculta hasta comprobar / revelar.
 *
 * Envuelto en React.memo: las cards sólo cambian cuando cambia el `preview`
 * (es decir, tras un debounce de compilación) o al pulsar Regenerar. Los
 * re-renders del padre por otras causas (toggle de modo, saveStatus, modales)
 * ya no propagan a las 3 cards ni a sus estados internos de respuesta.
 */

import { memo, useState } from "react";
import type { ModuleQuizQuestion } from "@vb/vblang";
import type { PreviewItem } from "../../hooks/usePlantillaPreview";

interface PreviewPanelProps {
  preview: PreviewItem[];
  onRegenerate: () => void;
}

function answerKeyString(key: unknown): string {
  if (key === undefined || key === null) return "—";
  if (Array.isArray(key)) return key.join(", ");
  return String(key);
}

/** Normaliza para comparar respuestas de texto (sin mayúsc./espacios extra). */
function norm(s: string): string {
  return s.trim().toLowerCase();
}

/** ¿La respuesta `user` es correcta según la clave (con tolerancia numérica)? */
function isCorrect(q: ModuleQuizQuestion, user: string): boolean {
  const keys = Array.isArray(q.answerKey)
    ? q.answerKey
    : q.answerKey != null
      ? [String(q.answerKey)]
      : [];
  const u = user.trim();
  if (u === "" || keys.length === 0) return false;
  const uNum = Number(u.replace(",", "."));
  for (const raw of keys) {
    const k = String(raw);
    if (norm(k) === norm(u)) return true;
    const kNum = Number(k.replace(",", "."));
    if (Number.isFinite(uNum) && Number.isFinite(kNum)) {
      // F2-04: criterio combinado `max(|e|·tol_rel, tol_abs)`. Mantiene el
      // comportamiento previo cuando tol_abs está ausente (= 0). El epsilon
      // 1e-9 absorbe errores de punto flotante.
      const tolRel = q.toleranciaRelativa ?? 0;
      const tolAbs = q.toleranciaAbsoluta ?? 0;
      const diff = Math.abs(uNum - kNum);
      if (kNum === 0) {
        // Antes: exigía `r === 0`. Ahora: tol_abs es la única holgura.
        if (diff <= tolAbs + 1e-9) return true;
        continue;
      }
      const allowed = Math.max(Math.abs(kNum) * tolRel, tolAbs);
      if (diff <= allowed + 1e-9) return true;
    }
  }
  return false;
}

/** Tipos que tienen autocorrección simple en el preview. */
const INTERACTIVE_TYPES = new Set(["mc", "vf", "input", "completar"]);

function PreviewPanel({
  preview,
  onRegenerate,
}: PreviewPanelProps) {
  return (
    <div
      role="region"
      aria-label="Vista previa de la plantilla"
      className="panel-section flex h-full"
      data-testid="vblang-preview-panel"
    >
      <div className="panel-section__head">
        <h3 className="panel-section__title">Vista previa</h3>
        <button
          type="button"
          onClick={onRegenerate}
          className="rounded-md bg-[var(--c-primary,#3b82f6)] px-3 py-1 text-xs font-medium text-white hover:opacity-90"
        >
          Regenerar
        </button>
      </div>
      <div className="panel-section__body space-y-3">
        {preview.length === 0 ? (
          <p className="text-xs text-[var(--c-hint)]">Sin preview todavía.</p>
        ) : (
          preview.map((item, idx) => (
            <PreviewCard key={`${item.seed}-${idx}`} item={item} />
          ))
        )}
      </div>
    </div>
  );
}

export default memo(PreviewPanel);

function PreviewCard({ item }: { item: PreviewItem }) {
  return (
    <article className="rounded-lg border border-[var(--c-border,#e2e8f0)] bg-[var(--c-surface,white)] p-3 text-sm">
      <div className="text-xs uppercase tracking-wider text-[var(--c-hint)] mb-1">
        seed: {item.seed}
      </div>
      {item.error ? (
        <div role="alert" className="text-[var(--c-danger)]">
          <span className="font-bold mr-1" aria-hidden="true">✕</span>
          {item.error.message}
        </div>
      ) : item.question ? (
        <>
          <p className="font-serif text-[var(--c-text)] leading-relaxed">
            {item.question.prompt}
          </p>
          <InteractiveAnswer question={item.question} />
        </>
      ) : null}
    </article>
  );
}

/** Zona de respuesta interactiva + comprobación por card. */
function InteractiveAnswer({ question }: { question: ModuleQuizQuestion }) {
  const tipo = question.questionType ?? "input";
  const [text, setText] = useState("");
  const [selected, setSelected] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);
  const [revealed, setRevealed] = useState(false);

  const interactive = INTERACTIVE_TYPES.has(tipo);
  const usesOptions =
    (tipo === "mc" || tipo === "vf") &&
    !!question.options &&
    question.options.length > 0;

  // Tipos sin autocorrección en el preview (ordenar, mapa, etc.): sólo revelar.
  if (!interactive) {
    return (
      <div className="mt-2 text-xs">
        <button
          type="button"
          onClick={() => setRevealed((v) => !v)}
          className="rounded border border-[var(--c-border,#e2e8f0)] px-2 py-0.5 text-[var(--c-text)]"
        >
          {revealed ? "Ocultar respuesta" : "Ver respuesta"}
        </button>
        {revealed && (
          <p className="mt-1 text-[var(--c-hint)]">
            Respuesta: {answerKeyString(question.answerKey)}
          </p>
        )}
      </div>
    );
  }

  const userAnswer = usesOptions ? (selected ?? "") : text;
  const correct = checked ? isCorrect(question, userAnswer) : false;
  const canCheck = userAnswer.trim() !== "";

  return (
    <div className="mt-2 space-y-1.5">
      {usesOptions ? (
        <ul role="radiogroup" aria-label="Tu respuesta" className="space-y-1">
          {question.options!.map((opt, i) => (
            <li key={i}>
              <label className="flex items-center gap-2 text-[var(--c-text)]">
                <input
                  type="radio"
                  name={`ans-${question.id}`}
                  checked={selected === opt}
                  onChange={() => {
                    setSelected(opt);
                    setChecked(false);
                  }}
                />
                {opt}
              </label>
            </li>
          ))}
        </ul>
      ) : (
        <input
          aria-label="Tu respuesta"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            setChecked(false);
          }}
          placeholder="Tu respuesta…"
          className="w-full rounded border border-[var(--c-border,#cbd5e1)] px-2 py-1 text-sm"
        />
      )}

      <div className="flex items-center gap-2">
        <button
          type="button"
          disabled={!canCheck}
          onClick={() => setChecked(true)}
          className="rounded-md bg-[var(--c-primary,#3b82f6)] px-2 py-1 text-xs font-medium text-white disabled:opacity-40"
        >
          Comprobar
        </button>
        {checked && (
          <span
            role="status"
            className={`text-xs font-semibold ${
              correct ? "text-[var(--c-success)]" : "text-[var(--c-danger)]"
            }`}
          >
            {correct
              ? "✓ ¡Correcto!"
              : `✕ Incorrecto — respuesta: ${answerKeyString(question.answerKey)}`}
          </span>
        )}
      </div>
    </div>
  );
}
