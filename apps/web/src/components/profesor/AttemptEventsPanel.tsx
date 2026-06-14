/**
 * F5-03 — Panel informativo de eventos del intento (vista del docente).
 *
 * Muestra dos flags del intento (sub-objeto `events` del JSON `grading`
 * del backend):
 *  1. **Salidas de pestaña** (counter de `useFlushCounter` en el cliente).
 *  2. **Canario disparado** (flag `canaryTriggered` que V2-04 ya
 *     escribía en el submit).
 *
 * El panel es NEUTRO: no acusa, no penaliza, no dice "el alumno hizo
 * trampa". Sólo presenta el dato y un asterisco explicando qué se
 * registra (y qué NO — el navegador no expone qué pestaña se abrió, y
 * F5-03 mantiene esa garantía).
 *
 * Decisión de UX: los dos flags se muestran en una tarjeta con borde
 * gris. Si AMBOS están en estado "limpio" (sin salidas y sin canario),
 * se muestra sólo un check verde "Sin eventos registrados". El docente
 * no se distrae con un panel vacío.
 */
import { useState } from "react";
import {
  formatTabSwitchLabel,
  summarizeAttemptEvents,
  type AttemptEventsSummary
} from "../../domain/quiz/attemptEvents";

export interface AttemptEventsPanelProps {
  /** El JSON `grading` del intento. Puede ser null si todavía no se
   *  computó (intento en curso). */
  grading: Record<string, unknown> | null | undefined;
  /** Permite al docente colapsar el panel. Default: false (expandido). */
  defaultCollapsed?: boolean;
}

export function AttemptEventsPanel({ grading, defaultCollapsed = false }: AttemptEventsPanelProps) {
  const summary: AttemptEventsSummary = summarizeAttemptEvents(grading);
  const clean = summary.tabSwitchCount === 0 && !summary.canaryTriggered;
  const [collapsed, setCollapsed] = useState(defaultCollapsed);

  return (
    <section
      data-testid="attempt-events-panel"
      aria-label="Eventos del intento"
      className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
    >
      <header className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-800">
          Eventos del intento
        </h3>
        <button
          type="button"
          onClick={() => setCollapsed((c) => !c)}
          className="text-xs text-slate-500 hover:underline"
          aria-expanded={!collapsed}
        >
          {collapsed ? "Expandir" : "Colapsar"}
        </button>
      </header>

      {collapsed ? null : (
        <div className="space-y-2">
          {clean ? (
            <div
              data-testid="attempt-events-clean"
              className="flex items-center gap-2 rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-700"
            >
              <span aria-hidden="true">✓</span>
              <span>Sin eventos registrados</span>
            </div>
          ) : (
            <>
              {summary.tabSwitchCount > 0 && (
                <div
                  data-testid="attempt-events-tab-switches"
                  className="flex items-center gap-2 rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-700"
                >
                  <span aria-hidden="true">⚠</span>
                  <span>{formatTabSwitchLabel(summary.tabSwitchCount)}</span>
                </div>
              )}
              {summary.canaryTriggered && (
                <div
                  data-testid="attempt-events-canary"
                  className="flex items-center gap-2 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700"
                >
                  <span aria-hidden="true">🪤</span>
                  <span>Canario disparado (respuestas inválidas detectadas)</span>
                </div>
              )}
            </>
          )}

          <p
            data-testid="attempt-events-privacy-note"
            className="mt-2 text-[11px] leading-relaxed text-slate-500"
          >
            Sólo se registra que la pestaña perdió visibilidad, nunca qué
            pestaña o app se abrió. El docente decide si dar peso a esta
            información; el sistema no penaliza automáticamente.
          </p>
        </div>
      )}
    </section>
  );
}

export default AttemptEventsPanel;
