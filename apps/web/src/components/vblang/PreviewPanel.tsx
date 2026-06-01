/**
 * Muestra los 3 ejercicios de preview con botón "Regenerar".
 */

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

export default function PreviewPanel({
  preview,
  onRegenerate,
}: PreviewPanelProps) {
  return (
    <div
      role="region"
      aria-label="Vista previa de la plantilla"
      className="flex flex-col h-full"
      data-testid="vblang-preview-panel"
    >
      <header className="flex items-center justify-between border-b border-[var(--c-border,#e2e8f0)] px-3 py-2">
        <h3 className="text-sm font-semibold">Vista previa</h3>
        <button
          type="button"
          onClick={onRegenerate}
          className="rounded-md bg-[var(--c-primary,#3b82f6)] px-3 py-1 text-xs font-medium text-white hover:opacity-90"
        >
          Regenerar
        </button>
      </header>
      <div className="flex-1 overflow-auto p-3 space-y-3">
        {preview.length === 0 ? (
          <p className="text-xs text-[var(--c-hint)]">
            Sin preview todavía.
          </p>
        ) : (
          preview.map((item, idx) => (
            <article
              key={`${item.seed}-${idx}`}
              className="rounded-lg border border-[var(--c-border,#e2e8f0)] bg-[var(--c-surface,white)] p-3 text-sm"
            >
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
                  <p className="text-[var(--c-text)] leading-relaxed">
                    {item.question.prompt}
                  </p>
                  {item.question.options && item.question.options.length > 0 && (
                    <ul className="mt-2 list-disc pl-5 text-[var(--c-hint)]">
                      {item.question.options.map((opt, i) => (
                        <li key={i}>{opt}</li>
                      ))}
                    </ul>
                  )}
                  <p className="mt-2 text-xs text-[var(--c-hint)]">
                    Respuesta: {answerKeyString(item.question.answerKey)}
                  </p>
                </>
              ) : null}
            </article>
          ))
        )}
      </div>
    </div>
  );
}
