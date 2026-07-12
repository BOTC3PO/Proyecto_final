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
  DIFICULTAD_VENTANA_MAX,
  DIFICULTAD_VENTANA_MIN,
  MODOS_PRESENTACION_VALIDOS,
  POLITICAS_DIFICULTAD_VALIDAS,
  POLITICAS_EXPIRACION_VALIDAS,
  POLITICAS_SORTEO_VALIDAS,
  POLITICAS_VALIDAS,
  PREGUNTAS_POR_PAGINA_DEFAULT,
  TIMER_SEGUNDOS_MAX,
  TIMER_SEGUNDOS_MIN,
  type EvaluacionConfig,
  type ModoPresentacion,
  type PoliticaDificultad,
  type PoliticaExpiracion,
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
  /** WO-9 — modo de presentación del cuestionario al alumno. */
  onChangeModoPresentacion?: (next: ModoPresentacion) => void;
  /** WO-9 — tamaño de página cuando `modoPresentacion === "paginado"`. */
  onChangePreguntasPorPagina?: (next: number) => void;
  /** WO-14 — política de ruteo por dificultad. */
  onChangePoliticaDificultad?: (next: PoliticaDificultad) => void;
  /** WO-14 — dificultad inicial ("fija" o punto de partida de "adaptativa_simple"). */
  onChangeDificultadInicial?: (next: "basico" | "intermedio" | "avanzado") => void;
  /** WO-14 — ventana de respuestas que mira "adaptativa_simple" para subir/bajar 1 nivel. */
  onChangeDificultadVentana?: (next: number) => void;
  /** PLAN-D §1 — qué hace el server cuando vence el timer sin submit. */
  onChangePoliticaExpiracion?: (next: PoliticaExpiracion) => void;
  /** Variante visual. Default: "panel" (con fieldset). "compact" = menos
   *  padding. "card" (PLAN-Z fase 2, mockup §7): el fieldset conserva sólo
   *  la línea de defaults y las secciones gated por tipo; ocultar-puntos,
   *  presentación y dificultad se promueven fuera de la caja como campos
   *  de la tarjeta de configuración (etiquetas eyebrow, par a 2 columnas). */
  variant?: "panel" | "compact" | "card";
}

const POLITICA_SORTEO_LABEL: Record<PoliticaSorteo, string> = {
  fijo_por_alumno: "Fija por alumno (no cambia entre intentos)",
  por_intento: "Re-sortear en cada intento"
};

const MODO_PRESENTACION_LABEL: Record<ModoPresentacion, string> = {
  lista: "Lista (todo en una pantalla)",
  una_por_pantalla: "Una pregunta por pantalla (slide)",
  paginado: "Paginado (N preguntas por página)"
};

const MODO_PRESENTACION_HINT: Record<ModoPresentacion, string> = {
  lista: "Igual al comportamiento histórico. Recomendado para pocas preguntas.",
  una_por_pantalla: "Navegación tipo diapositiva. Cómodo en teléfono.",
  paginado: "Dividido en páginas. Útil para cuestionarios largos."
};

const POLITICA_DIFICULTAD_LABEL: Record<PoliticaDificultad, string> = {
  fija: "Fija (dificultad inicial para todas las posiciones)",
  manual: "Manual (por posición, próximamente)",
  adaptativa_simple: "Adaptativa simple (sube/baja según desempeño)"
};

const POLITICA_DIFICULTAD_HINT: Record<PoliticaDificultad, string> = {
  fija: "Todo el cuestionario usa la dificultad inicial elegida abajo.",
  manual: "Por ahora se comporta igual que 'fija' (la elección por posición es una mejora futura).",
  adaptativa_simple: "La dificultad sube o baja 1 nivel según las últimas respuestas del alumno."
};

const POLITICA_EXPIRACION_LABEL: Record<PoliticaExpiracion, string> = {
  auto: "Enviar automáticamente al vencer el timer",
  gracia60: "Dar 60s extra y enviar automáticamente"
};

const POLITICA_EXPIRACION_HINT: Record<PoliticaExpiracion, string> = {
  auto: "Si el alumno no envía a tiempo, el server cierra el intento con lo respondido hasta el vencimiento.",
  gracia60: "El alumno tiene 60s adicionales para terminar la pregunta actual antes del envío automático."
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
  onChangeModoPresentacion,
  onChangePreguntasPorPagina,
  onChangePoliticaDificultad,
  onChangeDificultadInicial,
  onChangeDificultadVentana,
  onChangePoliticaExpiracion,
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
  // WO-9 — ids de los inputs de modo de presentación.
  const modoPresentacionId = `${baseId}-modo-presentacion`;
  const preguntasPorPaginaId = `${baseId}-preguntas-por-pagina`;
  // WO-14 — ids de los inputs de ruteo por dificultad.
  const politicaDificultadId = `${baseId}-politica-dificultad`;
  const dificultadInicialId = `${baseId}-dificultad-inicial`;
  const dificultadVentanaId = `${baseId}-dificultad-ventana`;
  // PLAN-D §1 — id del select de política de expiración.
  const politicaExpiracionId = `${baseId}-politica-expiracion`;

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

  const legendNode = (
    <legend className={headingClass}>
      Configuración de evaluación
      <span className="ml-2 text-xs font-normal text-[var(--c-hint)]">
        ({tipo})
      </span>
    </legend>
  );

  const defaultsLine = (
    <p className="text-xs text-[var(--c-hint)]">
      Defaults para este tipo: timer{" "}
      <strong>{defaults.timerSegundos === null ? "sin timer" : formatTimer(Math.round(defaults.timerSegundos / 60))}</strong>,{" "}
      política <strong>{defaults.politicaNota}</strong>,{" "}
      intentos <strong>{defaults.maxIntentos === null ? "ilimitados" : defaults.maxIntentos}</strong>,{" "}
      fullscreen <strong>{defaults.fullscreenOnStart ? "sí" : "no"}</strong>.
    </p>
  );

  const ocultarPuntosNode = (
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
  );

  // Secciones gated por tipo (timer/expiración/intentos/política/sorteo/
  // fullscreen): compartidas entre variantes, siempre dentro del fieldset.
  const seccionesAvanzadas = (
    <>
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

      {/* PLAN-D §1 — sólo tiene efecto si hay timer activo. */}
      {muestraTimer && !timerIlimitado && (
        <div className="flex items-end gap-3" data-testid="config-politica-expiracion">
          <label htmlFor={politicaExpiracionId} className="text-sm">
            Al vencer el tiempo
          </label>
          <select
            id={politicaExpiracionId}
            data-testid="config-politica-expiracion-select"
            disabled={!onChangePoliticaExpiracion}
            value={config.politicaExpiracion}
            onChange={(e) => onChangePoliticaExpiracion?.(e.target.value as PoliticaExpiracion)}
            className="rounded border border-[var(--c-border)] bg-[var(--c-surface-1)] px-1.5 py-1 text-sm"
          >
            {POLITICAS_EXPIRACION_VALIDAS.map((p) => (
              <option key={p} value={p}>
                {POLITICA_EXPIRACION_LABEL[p]}
              </option>
            ))}
          </select>
          <p className="text-xs text-[var(--c-hint)]">
            {POLITICA_EXPIRACION_HINT[config.politicaExpiracion]}
          </p>
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
    </>
  );

  // PLAN-Z fase 2 (§7) — variante "card": la caja conserva sólo el resumen de
  // defaults y las secciones gated por tipo; el resto se promueve como campos
  // de la tarjeta (eyebrow en mayúsculas, par presentación|ruteo a 2 columnas,
  // mismos ids/testids que las otras variantes).
  if (variant === "card") {
    const cardEyebrow =
      "mb-1.5 block text-[10.5px] font-bold uppercase tracking-[0.05em] text-[var(--c-text-3)]";
    const cardSelect =
      "w-full cursor-pointer rounded-md border border-[var(--c-border)] bg-[var(--c-surface-2)] px-2 py-[7px] text-[12.5px] text-[var(--c-text)]";
    return (
      <div className="space-y-3.5" data-testid="evaluacion-config" data-tipo={tipo}>
        <fieldset className="space-y-3 rounded-md border border-[var(--c-border)] p-3">
          {legendNode}
          {defaultsLine}
          {seccionesAvanzadas}
        </fieldset>

        {ocultarPuntosNode}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 14,
            alignItems: "start",
          }}
        >
          <div data-testid="config-modo-presentacion">
            <label htmlFor={modoPresentacionId} className={cardEyebrow}>
              Modo de presentación
            </label>
            <select
              id={modoPresentacionId}
              data-testid="config-modo-presentacion-select"
              disabled={!onChangeModoPresentacion}
              value={config.modoPresentacion}
              onChange={(e) => onChangeModoPresentacion?.(e.target.value as ModoPresentacion)}
              className={cardSelect}
            >
              {MODOS_PRESENTACION_VALIDOS.map((m) => (
                <option key={m} value={m}>
                  {MODO_PRESENTACION_LABEL[m]}
                </option>
              ))}
            </select>
            <p className="mt-1.5 text-xs leading-snug text-[var(--c-hint)]">
              {MODO_PRESENTACION_HINT[config.modoPresentacion]}
            </p>
            {config.modoPresentacion === "paginado" && (
              <div
                className="flex flex-wrap items-end gap-2 pt-1.5"
                data-testid="config-preguntas-por-pagina"
              >
                <label htmlFor={preguntasPorPaginaId} className="text-xs">
                  Preguntas por página
                </label>
                <input
                  id={preguntasPorPaginaId}
                  type="number"
                  min={1}
                  max={50}
                  step={1}
                  disabled={!onChangePreguntasPorPagina}
                  value={config.preguntasPorPagina}
                  onChange={(e) => {
                    const raw = e.target.value;
                    if (raw === "") return;
                    const n = Number(raw);
                    if (Number.isFinite(n) && n >= 1) {
                      onChangePreguntasPorPagina?.(Math.floor(n));
                    }
                  }}
                  className="w-20 rounded border border-[var(--c-border)] bg-[var(--c-surface-1)] px-1.5 py-0.5 text-right text-sm tabular-nums"
                  data-testid="config-preguntas-por-pagina-input"
                />
                <span className="text-xs text-[var(--c-hint)]">
                  (default: {PREGUNTAS_POR_PAGINA_DEFAULT})
                </span>
              </div>
            )}
          </div>

          <div data-testid="config-dificultad">
            <label htmlFor={politicaDificultadId} className={cardEyebrow}>
              Ruteo por dificultad
            </label>
            <select
              id={politicaDificultadId}
              data-testid="config-politica-dificultad-select"
              disabled={!onChangePoliticaDificultad}
              value={config.politicaDificultad}
              onChange={(e) => onChangePoliticaDificultad?.(e.target.value as PoliticaDificultad)}
              className={cardSelect}
            >
              {POLITICAS_DIFICULTAD_VALIDAS.map((p) => (
                <option key={p} value={p}>
                  {POLITICA_DIFICULTAD_LABEL[p]}
                </option>
              ))}
            </select>
            <p className="mt-1.5 text-xs leading-snug text-[var(--c-hint)]">
              {POLITICA_DIFICULTAD_HINT[config.politicaDificultad]}
            </p>
            {config.politicaDificultad === "adaptativa_simple" && (
              <div
                className="flex flex-wrap items-end gap-2 pt-1.5"
                data-testid="config-dificultad-ventana"
              >
                <label htmlFor={dificultadVentanaId} className="text-xs">
                  Ventana (respuestas para subir/bajar 1 nivel)
                </label>
                <input
                  id={dificultadVentanaId}
                  type="number"
                  min={DIFICULTAD_VENTANA_MIN}
                  max={DIFICULTAD_VENTANA_MAX}
                  step={1}
                  disabled={!onChangeDificultadVentana}
                  value={config.dificultadVentana}
                  onChange={(e) => {
                    const raw = e.target.value;
                    if (raw === "") return;
                    const n = Number(raw);
                    if (Number.isFinite(n) && n >= 1) {
                      onChangeDificultadVentana?.(Math.floor(n));
                    }
                  }}
                  className="w-16 rounded border border-[var(--c-border)] bg-[var(--c-surface-1)] px-1.5 py-0.5 text-right text-sm tabular-nums"
                  data-testid="config-dificultad-ventana-input"
                />
              </div>
            )}
          </div>
        </div>

        <div>
          <label htmlFor={dificultadInicialId} className={cardEyebrow}>
            Dificultad inicial
          </label>
          <select
            id={dificultadInicialId}
            data-testid="config-dificultad-inicial-select"
            disabled={!onChangeDificultadInicial}
            value={config.dificultadInicial}
            onChange={(e) =>
              onChangeDificultadInicial?.(
                e.target.value as "basico" | "intermedio" | "avanzado"
              )
            }
            className={`${cardSelect} max-w-[220px]`}
          >
            <option value="basico">Básico</option>
            <option value="intermedio">Intermedio</option>
            <option value="avanzado">Avanzado</option>
          </select>
        </div>
      </div>
    );
  }

  return (
    <fieldset
      className={fieldsetClass}
      data-testid="evaluacion-config"
      data-tipo={tipo}
    >
      {legendNode}

      {defaultsLine}

      {seccionesAvanzadas}

      {ocultarPuntosNode}

      {/* WO-9 — modo de presentación del cuestionario al alumno. Se renderiza
          para todos los tipos (practica / formal / competencia): la decisión
          es del docente, no del tipo. El default es `lista` (preserva el
          comportamiento previo a WO-9). */}
      <div className="space-y-1.5" data-testid="config-modo-presentacion">
        <label htmlFor={modoPresentacionId} className="text-sm">
          Modo de presentación
        </label>
        <select
          id={modoPresentacionId}
          data-testid="config-modo-presentacion-select"
          disabled={!onChangeModoPresentacion}
          value={config.modoPresentacion}
          onChange={(e) => onChangeModoPresentacion?.(e.target.value as ModoPresentacion)}
          className="rounded border border-[var(--c-border)] bg-[var(--c-surface-1)] px-1.5 py-1 text-sm"
        >
          {MODOS_PRESENTACION_VALIDOS.map((m) => (
            <option key={m} value={m}>
              {MODO_PRESENTACION_LABEL[m]}
            </option>
          ))}
        </select>
        <p className="text-xs text-[var(--c-hint)]">
          {MODO_PRESENTACION_HINT[config.modoPresentacion]}
        </p>
        {config.modoPresentacion === "paginado" && (
          <div
            className="flex flex-wrap items-end gap-2 pl-1 pt-1"
            data-testid="config-preguntas-por-pagina"
          >
            <label htmlFor={preguntasPorPaginaId} className="text-xs">
              Preguntas por página
            </label>
            <input
              id={preguntasPorPaginaId}
              type="number"
              min={1}
              max={50}
              step={1}
              disabled={!onChangePreguntasPorPagina}
              value={config.preguntasPorPagina}
              onChange={(e) => {
                const raw = e.target.value;
                if (raw === "") return;
                const n = Number(raw);
                if (Number.isFinite(n) && n >= 1) {
                  onChangePreguntasPorPagina?.(Math.floor(n));
                }
              }}
              className="w-20 rounded border border-[var(--c-border)] bg-[var(--c-surface-1)] px-1.5 py-0.5 text-right text-sm tabular-nums"
              data-testid="config-preguntas-por-pagina-input"
            />
            <span className="text-xs text-[var(--c-hint)]">
              (default: {PREGUNTAS_POR_PAGINA_DEFAULT})
            </span>
          </div>
        )}
      </div>

      {/* WO-14 — ruteo por dificultad. Se renderiza para todos los tipos
          (practica / formal / competencia): aplica también a generadores,
          no es exclusiva del modo evaluación. Default `fija` + `intermedio`
          preserva el comportamiento previo a WO-14 (la dificultad se
          ignoraba). */}
      <div className="space-y-1.5" data-testid="config-dificultad">
        <label htmlFor={politicaDificultadId} className="text-sm">
          Ruteo por dificultad
        </label>
        <select
          id={politicaDificultadId}
          data-testid="config-politica-dificultad-select"
          disabled={!onChangePoliticaDificultad}
          value={config.politicaDificultad}
          onChange={(e) => onChangePoliticaDificultad?.(e.target.value as PoliticaDificultad)}
          className="rounded border border-[var(--c-border)] bg-[var(--c-surface-1)] px-1.5 py-1 text-sm"
        >
          {POLITICAS_DIFICULTAD_VALIDAS.map((p) => (
            <option key={p} value={p}>
              {POLITICA_DIFICULTAD_LABEL[p]}
            </option>
          ))}
        </select>
        <p className="text-xs text-[var(--c-hint)]">
          {POLITICA_DIFICULTAD_HINT[config.politicaDificultad]}
        </p>

        <div className="flex flex-wrap items-end gap-3 pl-1 pt-1">
          <label htmlFor={dificultadInicialId} className="text-xs">
            Dificultad inicial
          </label>
          <select
            id={dificultadInicialId}
            data-testid="config-dificultad-inicial-select"
            disabled={!onChangeDificultadInicial}
            value={config.dificultadInicial}
            onChange={(e) =>
              onChangeDificultadInicial?.(
                e.target.value as "basico" | "intermedio" | "avanzado"
              )
            }
            className="rounded border border-[var(--c-border)] bg-[var(--c-surface-1)] px-1.5 py-1 text-sm"
          >
            <option value="basico">Básico</option>
            <option value="intermedio">Intermedio</option>
            <option value="avanzado">Avanzado</option>
          </select>
        </div>

        {config.politicaDificultad === "adaptativa_simple" && (
          <div
            className="flex flex-wrap items-end gap-2 pl-1 pt-1"
            data-testid="config-dificultad-ventana"
          >
            <label htmlFor={dificultadVentanaId} className="text-xs">
              Ventana (respuestas para subir/bajar 1 nivel)
            </label>
            <input
              id={dificultadVentanaId}
              type="number"
              min={DIFICULTAD_VENTANA_MIN}
              max={DIFICULTAD_VENTANA_MAX}
              step={1}
              disabled={!onChangeDificultadVentana}
              value={config.dificultadVentana}
              onChange={(e) => {
                const raw = e.target.value;
                if (raw === "") return;
                const n = Number(raw);
                if (Number.isFinite(n) && n >= 1) {
                  onChangeDificultadVentana?.(Math.floor(n));
                }
              }}
              className="w-16 rounded border border-[var(--c-border)] bg-[var(--c-surface-1)] px-1.5 py-0.5 text-right text-sm tabular-nums"
              data-testid="config-dificultad-ventana-input"
            />
          </div>
        )}
      </div>
    </fieldset>
  );
}
