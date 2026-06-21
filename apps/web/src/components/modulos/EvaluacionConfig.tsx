/**
 * F4-04 — Panel "Configuración de evaluación" para el editor de cuestionarios.
 *
 * Componente presentacional que muestra los inputs de la config de
 * evaluación (F3-04 + F4-04), con gating por `quiz.type`:
 *
 *   - `practica`   → sólo `ocultarPuntos` (sin timer, sin fullscreen, sin
 *                    intentos limitados, política fija "mejor").
 *   - `formal`     → todos los inputs: timer, maxIntentos, política, fullscreen,
 *                    ocultarPuntos. Esta es la pantalla "Modo evaluación".
 *   - `competencia`→ timer (mantiene 10 min default), ocultarPuntos.
 *                    Sin fullscreen, sin política (es ranking por tiempo).
 *
 * Los defaults se resuelven server-side vía `parseEvaluacionConfig`; el
 * componente los muestra sin recalcular. El componente dispara callbacks
 * `onChange` (uno por campo) con el valor nuevo. El host (futuro
 * ModuloEditor) los compone en `setQuizzes`.
 *
 * El gating por tipo es la pieza clave: "módulo general no expone
 * timer" se cumple automáticamente cuando `type !== "formal"`. La
 * sección de timer/fullscreen/intentos/política se renderiza sólo
 * para `formal` (y para `competencia` con timer + ocultarPuntos).
 */

import { useId } from "react";
import {
  DEFAULT_EVALUACION_CONFIG,
  POLITICAS_SORTEO_VALIDAS,
  POLITICAS_VALIDAS,
  TIMER_SEGUNDOS_MAX,
  TIMER_SEGUNDOS_MIN,
  type EvaluacionConfig,
  type PoliticaNota,
  type PoliticaSorteo,
  type QuizTipo
} from "../../domain/quiz/intentos";

interface Props {
  /** El tipo actual del cuestionario. Determina qué secciones se renderizan. */
  tipo: QuizTipo;
  /** La config actual (resuelta con `parseEvaluacionConfig` en el host). */
  config: EvaluacionConfig;
  /** Callbacks por campo. Cualquier undefined deshabilita ese input (read-only). */
  onChangeTimerSegundos?: (next: number | null) => void;
  onChangeMaxIntentos?: (next: number | null) => void;
  onChangePoliticaNota?: (next: PoliticaNota) => void;
  /** WO-3 — política de sorteo de variantes. */
  onChangePoliticaSorteo?: (next: PoliticaSorteo) => void;
  onChangeFullscreenOnStart?: (next: boolean) => void;
  onChangeOcultarPuntos?: (next: boolean) => void;
  /** Variante visual. Default: "panel" (con fieldset). "compact" = menos padding. */
  variant?: "panel" | "compact";
}

const POLITICA_SORTEO_LABEL: Record<PoliticaSorteo, string> = {
  fijo_por_alumno: "Fija por alumno (no cambia entre intentos)",
  por_intento: "Re-sortear en cada intento"
};

function formatTimer(minutes: number): string {
  if (minutes < 60) return `${minutes} min`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m === 0 ? `${h} h` : `${h} h ${m} min`;
}

export default function EvaluacionConfig({
  tipo,
  config,
  onChangeTimerSegundos,
  onChangeMaxIntentos,
  onChangePoliticaNota,
  onChangePoliticaSorteo,
  onChangeFullscreenOnStart,
  onChangeOcultarPuntos,
  variant = "panel"
}: Props) {
  const fieldsetClass =
    variant === "compact"
      ? "rounded-md border border-[var(--c-border)] p-3 space-y-3"
      : "rounded-lg border border-[var(--c-border)] bg-[var(--c-surface-1)] p-4 space-y-4";

  const headingClass =
    variant === "compact"
      ? "text-sm font-semibold"
      : "text-sm font-semibold text-[var(--c-text)]";

  const baseId = useId();
  const timerId = `${baseId}-timer`;
  const timerUnitId = `${baseId}-timer-unit`;
  const maxIntentosId = `${baseId}-max-intentos`;
  const politicaId = `${baseId}-politica`;
  const politicaSorteoId = `${baseId}-politica-sorteo`;
  const fullscreenId = `${baseId}-fullscreen`;
  const ocultarPuntosId = `${baseId}-ocultar-puntos`;

  // Minutos para el input (el timer se guarda en segundos).
  const timerMinutos = config.timerSegundos === null ? null : Math.round(config.timerSegundos / 60);
  const timerIlimitado = config.timerSegundos === null;
  const maxIntentosIlimitado = config.maxIntentos === null;

  const defaults = DEFAULT_EVALUACION_CONFIG[tipo] ?? DEFAULT_EVALUACION_CONFIG.practica;
  const isFormal = tipo === "formal";
  const isCompetencia = tipo === "competencia";
  const muestraTimer = isFormal || isCompetencia;
  const muestraIntentos = isFormal;
  const muestraPolitica = isFormal;
  const muestraSorteo = isFormal || isCompetencia;
  const muestraFullscreen = isFormal;

  return (
    <fieldset
      className={fieldsetClass}
      data-testid="evaluacion-config"
      data-tipo={tipo}
    >
      <legend className={headingClass}>
        Configuración de evaluación
        <span className="ml-2 text-xs font-normal text-[var(--c-hint)]">
          ({tipo})
        </span>
      </legend>

      <p className="text-xs text-[var(--c-hint)]">
        Defaults para este tipo: timer{" "}
        <strong>{defaults.timerSegundos === null ? "sin timer" : formatTimer(Math.round(defaults.timerSegundos / 60))}</strong>,{" "}
        política <strong>{defaults.politicaNota}</strong>,{" "}
        intentos <strong>{defaults.maxIntentos === null ? "ilimitados" : defaults.maxIntentos}</strong>,{" "}
        fullscreen <strong>{defaults.fullscreenOnStart ? "sí" : "no"}</strong>.
      </p>

      {muestraTimer && (
        <div className="flex flex-wrap items-end gap-3" data-testid="config-timer">
          <label htmlFor={timerId} className="text-sm">
            Timer
          </label>
          <label className="flex items-center gap-1 text-xs">
            <input
              type="checkbox"
              data-testid="config-timer-illimitado"
              checked={timerIlimitado}
              disabled={!onChangeTimerSegundos}
              onChange={(e) => onChangeTimerSegundos?.(e.target.checked ? null : 60 * 10)}
            />
            <span>Sin timer</span>
          </label>
          <div className="flex items-center gap-1">
            <input
              id={timerId}
              type="number"
              data-testid="config-timer-min"
              min={Math.ceil(TIMER_SEGUNDOS_MIN / 60)}
              max={Math.floor(TIMER_SEGUNDOS_MAX / 60)}
              step={1}
              disabled={timerIlimitado || !onChangeTimerSegundos}
              value={timerMinutos ?? ""}
              onChange={(e) => {
                const raw = e.target.value;
                if (raw === "") return;
                const m = Number(raw);
                if (Number.isFinite(m) && m > 0) {
                  onChangeTimerSegundos?.(m * 60);
                }
              }}
              className="w-20 rounded border border-[var(--c-border)] bg-[var(--c-surface-1)] px-1.5 py-0.5 text-right text-sm tabular-nums"
            />
            <span id={timerUnitId} className="text-xs text-[var(--c-hint)]">
              minutos
            </span>
          </div>
          {timerIlimitado && (
            <p className="text-xs text-[var(--c-hint)]" data-testid="config-timer-help">
              El alumno no verá cronómetro.
            </p>
          )}
        </div>
      )}

      {muestraIntentos && (
        <div className="flex flex-wrap items-end gap-3" data-testid="config-intentos">
          <label htmlFor={maxIntentosId} className="text-sm">
            Intentos permitidos
          </label>
          <label className="flex items-center gap-1 text-xs">
            <input
              type="checkbox"
              data-testid="config-intentos-illimitado"
              checked={maxIntentosIlimitado}
              disabled={!onChangeMaxIntentos}
              onChange={(e) => onChangeMaxIntentos?.(e.target.checked ? null : 3)}
            />
            <span>Ilimitados</span>
          </label>
          <div className="flex items-center gap-1">
            <input
              id={maxIntentosId}
              type="number"
              min={1}
              step={1}
              disabled={maxIntentosIlimitado || !onChangeMaxIntentos}
              value={config.maxIntentos ?? ""}
              onChange={(e) => {
                const raw = e.target.value;
                if (raw === "") return;
                const n = Number(raw);
                if (Number.isFinite(n) && n >= 1) {
                  onChangeMaxIntentos?.(Math.floor(n));
                }
              }}
              className="w-20 rounded border border-[var(--c-border)] bg-[var(--c-surface-1)] px-1.5 py-0.5 text-right text-sm tabular-nums"
              data-testid="config-intentos-input"
            />
            <span className="text-xs text-[var(--c-hint)]">intentos</span>
          </div>
        </div>
      )}

      {muestraPolitica && (
        <div className="flex items-end gap-3" data-testid="config-politica">
          <label htmlFor={politicaId} className="text-sm">
            Política de nota
          </label>
          <select
            id={politicaId}
            data-testid="config-politica-select"
            disabled={!onChangePoliticaNota}
            value={config.politicaNota}
            onChange={(e) => onChangePoliticaNota?.(e.target.value as PoliticaNota)}
            className="rounded border border-[var(--c-border)] bg-[var(--c-surface-1)] px-1.5 py-1 text-sm"
          >
            {POLITICAS_VALIDAS.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
          <p className="text-xs text-[var(--c-hint)]">
            {config.politicaNota === "mejor" && "Se cuenta la mejor nota de los intentos finalizados."}
            {config.politicaNota === "ultima" && "Se cuenta la nota del último intento enviado."}
            {config.politicaNota === "primera" && "Se cuenta la nota del primer intento enviado."}
            {config.politicaNota === "promedio" && "Se promedian las notas de los intentos finalizados."}
          </p>
        </div>
      )}

      {muestraSorteo && (
        <div className="flex items-end gap-3" data-testid="config-sorteo">
          <label htmlFor={politicaSorteoId} className="text-sm">
            Sorteo de variantes
          </label>
          <select
            id={politicaSorteoId}
            data-testid="config-sorteo-select"
            disabled={!onChangePoliticaSorteo}
            value={config.politicaSorteo}
            onChange={(e) => onChangePoliticaSorteo?.(e.target.value as PoliticaSorteo)}
            className="rounded border border-[var(--c-border)] bg-[var(--c-surface-1)] px-1.5 py-1 text-sm"
          >
            {POLITICAS_SORTEO_VALIDAS.map((p) => (
              <option key={p} value={p}>
                {POLITICA_SORTEO_LABEL[p]}
              </option>
            ))}
          </select>
          <p className="text-xs text-[var(--c-hint)]">
            {config.politicaSorteo === "fijo_por_alumno" &&
              "Cada alumno ve siempre la misma variante (estable entre intentos y dispositivos)."}
            {config.politicaSorteo === "por_intento" &&
              "Cada intento puede re-sortear la variante (sin repetir mientras quede material nuevo)."}
          </p>
        </div>
      )}

      {muestraFullscreen && (
        <div className="flex items-center gap-2" data-testid="config-fullscreen">
          <input
            id={fullscreenId}
            type="checkbox"
            data-testid="config-fullscreen-checkbox"
            checked={config.fullscreenOnStart}
            disabled={!onChangeFullscreenOnStart}
            onChange={(e) => onChangeFullscreenOnStart?.(e.target.checked)}
          />
          <label htmlFor={fullscreenId} className="text-sm">
            Activar pantalla completa al iniciar el intento
          </label>
        </div>
      )}

      <div className="flex items-center gap-2" data-testid="config-ocultar-puntos">
        <input
          id={ocultarPuntosId}
          type="checkbox"
          data-testid="config-ocultar-puntos-checkbox"
          checked={config.ocultarPuntos}
          disabled={!onChangeOcultarPuntos}
          onChange={(e) => onChangeOcultarPuntos?.(e.target.checked)}
        />
        <label htmlFor={ocultarPuntosId} className="text-sm">
          Ocultar el puntaje crudo al alumno (sólo se muestra la nota)
        </label>
      </div>
    </fieldset>
  );
}
