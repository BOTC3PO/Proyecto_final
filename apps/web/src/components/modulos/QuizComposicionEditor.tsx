/**
 * Editor de la composición del quiz (nivel quiz, no DSL): política de pool,
 * variantes de consigna y peso por defecto de las preguntas.
 *
 * Implementa la Decisión 1: el profe elige cuántas preguntas se presentan
 * (todas | K de N) y cómo se eligen (fijo | azar | elige_alumno). Se persiste
 * en `QuizVersion.settings.composition`; el reproductor lo respeta vía el
 * módulo `domain/quiz/composition`.
 */

import { useId } from "react";
import {
  DEFAULT_COMPOSITION,
  type QuizComposition,
  type QuizSelectionMode,
} from "../../domain/quiz/composition";

import { useI18n } from "../../i18n/I18nContext";
interface Props {
  /** Composición actual (o undefined → defaults). */
  value: QuizComposition | undefined;
  /** Total de preguntas del grupo (N) para acotar K y dar contexto. */
  total: number;
  onChange: (next: QuizComposition) => void;
}

const SELECCION_OPTS: { value: QuizSelectionMode; labelKey: string; helpKey: string }[] = [
  { value: "fijo", labelKey: "quizComposicionEditor.ordenFijo", helpKey: "quizComposicionEditor.siempreLasMismasEnOrden" },
  { value: "azar", labelKey: "quizComposicionEditor.alAzar", helpKey: "quizComposicionEditor.subconjuntoAleatorioPorIntentoSeed" },
  {
    value: "elige_alumno",
    labelKey: "quizComposicionEditor.eligeElAlumno",
    helpKey: "quizComposicionEditor.seMuestranTodasElAlumno",
  },
];

export default function QuizComposicionEditor({ value, total, onChange }: Props) {
  const { t } = useI18n();
  const comp = value ?? DEFAULT_COMPOSITION;
  const tomarTodas = comp.tomar === "todas";
  const k = typeof comp.tomar === "number" ? comp.tomar : Math.max(1, total);
  const baseId = useId();

  const patch = (next: Partial<QuizComposition>) =>
    onChange({ ...DEFAULT_COMPOSITION, ...comp, ...next });

  return (
    <fieldset className="rounded-lg border border-[var(--c-border,#e2e8f0)] p-3 space-y-3 text-xs">
      <legend className="px-1 text-xs font-semibold text-[var(--c-text)]">{t("quizComposicionEditor.composicionDelQuiz")}</legend>

      {/* Cuántas presentar */}
      <div className="space-y-1.5">
        <span className="block font-medium text-[var(--c-text)]">{t("quizComposicionEditor.cuantasPreguntasSePresentan")}</span>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name={`${baseId}-tomar`}
            checked={tomarTodas}
            onChange={() => patch({ tomar: "todas" })}
          />
          Todas{total > 0 ? ` (${total})` : ""}
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name={`${baseId}-tomar`}
            checked={!tomarTodas}
            onChange={() => patch({ tomar: Math.min(Math.max(1, k), Math.max(1, total)) })}
          />{t("quizComposicionEditor.unSubconjuntoDe")}<input
            type="number"
            min={1}
            max={total || undefined}
            value={tomarTodas ? "" : k}
            disabled={tomarTodas}
            aria-label={t("quizComposicionEditor.cantidadDePreguntasATomar")}
            onChange={(e) => {
              const n = Number(e.target.value);
              if (Number.isFinite(n) && n > 0) patch({ tomar: n });
            }}
            className="w-16 rounded border border-[var(--c-border,#e2e8f0)] px-1.5 py-0.5 disabled:opacity-50"
          />
          {total > 0 ? `de ${total}` : "preguntas"}
        </label>
      </div>

      {/* Cómo se eligen (solo si no son todas) */}
      {!tomarTodas && (
        <div className="space-y-1">
          <label
            htmlFor={`${baseId}-seleccion`}
            className="block font-medium text-[var(--c-text)]"
          >{t("quizComposicionEditor.comoSeEligen")}</label>
          <select
            id={`${baseId}-seleccion`}
            value={comp.seleccion}
            onChange={(e) => patch({ seleccion: e.target.value as QuizSelectionMode })}
            className="w-full rounded border border-[var(--c-border,#e2e8f0)] bg-white px-2 py-1"
          >
            {SELECCION_OPTS.map((o) => (
              <option key={o.value} value={o.value}>
                {t(o.labelKey)}
              </option>
            ))}
          </select>
          <p className="text-[var(--c-hint)]">
            {t(SELECCION_OPTS.find((o) => o.value === comp.seleccion)?.helpKey ?? "quizComposicionEditor.ordenFijo")}
          </p>
        </div>
      )}

      {/* Peso por defecto */}
      <div className="space-y-1">
        <label
          htmlFor={`${baseId}-peso`}
          className="block font-medium text-[var(--c-text)]"
        >{t("quizComposicionEditor.puntosPorPreguntaPeso")}</label>
        <input
          id={`${baseId}-peso`}
          type="number"
          min={0.5}
          step={0.5}
          value={comp.pesoPorDefecto ?? 1}
          onChange={(e) => {
            const n = Number(e.target.value);
            if (Number.isFinite(n) && n > 0) patch({ pesoPorDefecto: n });
          }}
          className="w-20 rounded border border-[var(--c-border,#e2e8f0)] px-1.5 py-0.5"
        />
      </div>

      {/* Variantes de consigna */}
      <div className="space-y-1">
        <label
          htmlFor={`${baseId}-variantes`}
          className="block font-medium text-[var(--c-text)]"
        >{t("quizComposicionEditor.variantesDeConsigna")}<span className="ml-1 font-normal text-[var(--c-hint)]">
            (una por línea; la serie elige una por seed)
          </span>
        </label>
        <textarea
          id={`${baseId}-variantes`}
          rows={3}
          value={(comp.variantes ?? []).join("\n")}
          onChange={(e) => {
            const variantes = e.target.value
              .split("\n")
              .map((s) => s.trim())
              .filter((s) => s.length > 0);
            patch({ variantes });
          }}
          placeholder={"Resolvé el siguiente ejercicio.\nCalculá el resultado paso a paso."}
          className="w-full rounded border border-[var(--c-border,#e2e8f0)] bg-white px-2 py-1 font-mono"
        />
      </div>
    </fieldset>
  );
}
