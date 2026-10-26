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

import { useI18n } from "../../i18n/I18nContext";
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

const QUIZ_TIPO_LABEL: Record<QuizTipo, string> = {
  practica: "profesorEvaluaciones.practica",
  formal: "profesorEvaluaciones.formal",
  competencia: "profesorEvaluaciones.competencia"
};

const POLITICA_NOTA_LABEL: Record<PoliticaNota, string> = {
  mejor: "evaluacionConfig.politicaMejor",
  ultima: "evaluacionConfig.politicaUltima",
  primera: "evaluacionConfig.politicaPrimera",
  promedio: "evaluacionConfig.politicaPromedio"
};

const POLITICA_SORTEO_LABEL: Record<PoliticaSorteo, string> = {
  fijo_por_alumno: "evaluacionConfig.fijaPorAlumnoNoCambia",
  por_intento: "evaluacionConfig.reSortearEnCadaIntento"
};

const POLITICA_SORTEO_HINT: Record<PoliticaSorteo, string> = {
  fijo_por_alumno: "evaluacionConfig.cadaAlumnoVeSiempreLa",
  por_intento: "evaluacionConfig.cadaIntentoPuedeReSortear"
};

const MODO_PRESENTACION_LABEL: Record<ModoPresentacion, string> = {
  lista: "evaluacionConfig.listaTodoEnUnaPantalla",
  una_por_pantalla: "evaluacionConfig.unaPreguntaPorPantallaSlide",
  paginado: "evaluacionConfig.paginadoNPreguntasPorPagina"
};

const MODO_PRESENTACION_HINT: Record<ModoPresentacion, string> = {
  lista: "evaluacionConfig.igualAlComportamientoHistoricoRecomendado",
  una_por_pantalla: "evaluacionConfig.navegacionTipoDiapositivaComodoEn",
  paginado: "evaluacionConfig.divididoEnPaginasUtilPara"
};

const POLITICA_DIFICULTAD_LABEL: Record<PoliticaDificultad, string> = {
  fija: "evaluacionConfig.fijaDificultadInicialParaTodas",
  manual: "evaluacionConfig.manualPorPosicionProximamente",
  adaptativa_simple: "evaluacionConfig.adaptativaSimpleSubeBajaSegun"
};

const POLITICA_DIFICULTAD_HINT: Record<PoliticaDificultad, string> = {
  fija: "evaluacionConfig.todoElCuestionarioUsaLa",
  manual: "evaluacionConfig.porAhoraSeComportaIgual",
  adaptativa_simple: "evaluacionConfig.laDificultadSubeOBaja"
};

const POLITICA_EXPIRACION_LABEL: Record<PoliticaExpiracion, string> = {
  auto: "evaluacionConfig.enviarAutomaticamenteAlVencerEl",
  gracia60: "evaluacionConfig.dar60sExtraYEnviar"
};

const POLITICA_EXPIRACION_HINT: Record<PoliticaExpiracion, string> = {
  auto: "evaluacionConfig.siElAlumnoNoEnvia",
  gracia60: "evaluacionConfig.elAlumnoTiene60sAdicionales"
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
  const { t } = useI18n();
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
    <legend className={headingClass}>{t("evaluacionConfig.configuracionDeEvaluacion")}<span className="ml-2 text-xs font-normal text-[var(--c-hint)]">
        ({t(QUIZ_TIPO_LABEL[tipo])})
      </span>
    </legend>
  );

  const defaultsLine = (
    <p className="text-xs text-[var(--c-hint)]">
      {t("evaluacionConfig.defaultsParaEsteTipo")}{" "}
      <strong>{defaults.timerSegundos === null ? t("evaluacionConfig.sinTimer2") : formatTimer(Math.round(defaults.timerSegundos / 60))}</strong>,{" "}
      {t("comun.politica")} <strong>{t(POLITICA_NOTA_LABEL[defaults.politicaNota])}</strong>,{" "}
      {t("comun.intentos").toLowerCase()} <strong>{defaults.maxIntentos === null ? t("evaluacionConfig.ilimitados").toLowerCase() : defaults.maxIntentos}</strong>,{" "}
      {t("comun.pantallaCompleta")} <strong>{defaults.fullscreenOnStart ? t("comun.si") : t("comun.no")}</strong>.
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
      <label htmlFor={ocultarPuntosId} className="text-sm">{t("evaluacionConfig.ocultarElPuntajeCrudoAl")}</label>
    </div>
  );

  // Secciones gated por tipo (timer/expiración/intentos/política/sorteo/
  // fullscreen): compartidas entre variantes, siempre dentro del fieldset.
  const seccionesAvanzadas = (
    <>
      {muestraTimer && (
        <div className="flex flex-wrap items-end gap-3" data-testid="config-timer">
          <label htmlFor={timerId} className="text-sm">{t("evaluacionConfig.timer")}</label>
          <label className="flex items-center gap-1 text-xs">
            <input
              type="checkbox"
              data-testid="config-timer-illimitado"
              checked={timerIlimitado}
              disabled={!onChangeTimerSegundos}
              onChange={(e) => onChangeTimerSegundos?.(e.target.checked ? null : 60 * 10)}
            />
            <span>{t("evaluacionConfig.sinTimer")}</span>
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
              {t("comun.minutos")}
            </span>
          </div>
          {timerIlimitado && (
            <p className="text-xs text-[var(--c-hint)]" data-testid="config-timer-help">{t("evaluacionConfig.elAlumnoNoVeraCronometro")}</p>
          )}
        </div>
      )}

      {/* PLAN-D §1 — sólo tiene efecto si hay timer activo. */}
      {muestraTimer && !timerIlimitado && (
        <div className="flex items-end gap-3" data-testid="config-politica-expiracion">
          <label htmlFor={politicaExpiracionId} className="text-sm">{t("evaluacionConfig.alVencerElTiempo")}</label>
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
                {t(POLITICA_EXPIRACION_LABEL[p])}
              </option>
            ))}
          </select>
          <p className="text-xs text-[var(--c-hint)]">
            {t(POLITICA_EXPIRACION_HINT[config.politicaExpiracion])}
          </p>
        </div>
      )}

      {muestraIntentos && (
        <div className="flex flex-wrap items-end gap-3" data-testid="config-intentos">
          <label htmlFor={maxIntentosId} className="text-sm">{t("evaluacionConfig.intentosPermitidos")}</label>
          <label className="flex items-center gap-1 text-xs">
            <input
              type="checkbox"
              data-testid="config-intentos-illimitado"
              checked={maxIntentosIlimitado}
              disabled={!onChangeMaxIntentos}
              onChange={(e) => onChangeMaxIntentos?.(e.target.checked ? null : 3)}
            />
            <span>{t("evaluacionConfig.ilimitados")}</span>
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
            <span className="text-xs text-[var(--c-hint)]">{t("comun.intentos").toLowerCase()}</span>
          </div>
        </div>
      )}

      {muestraPolitica && (
        <div className="flex items-end gap-3" data-testid="config-politica">
          <label htmlFor={politicaId} className="text-sm">{t("evaluacionConfig.politicaDeNota")}</label>
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
                {t(POLITICA_NOTA_LABEL[p])}
              </option>
            ))}
          </select>
          <p className="text-xs text-[var(--c-hint)]">
            {config.politicaNota === "mejor" && t("evaluacionConfig.seCuentaLaMejorNota")}
            {config.politicaNota === "ultima" && t("evaluacionConfig.seCuentaLaNotaDel")}
            {config.politicaNota === "primera" && t("evaluacionConfig.seCuentaLaNotaDel2")}
            {config.politicaNota === "promedio" && t("evaluacionConfig.sePromedianLasNotasDe")}
          </p>
        </div>
      )}

      {muestraSorteo && (
        <div className="flex items-end gap-3" data-testid="config-sorteo">
          <label htmlFor={politicaSorteoId} className="text-sm">{t("evaluacionConfig.sorteoDeVariantes")}</label>
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
                {t(POLITICA_SORTEO_LABEL[p])}
              </option>
            ))}
          </select>
          <p className="text-xs text-[var(--c-hint)]">
            {t(POLITICA_SORTEO_HINT[config.politicaSorteo])}
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
          <label htmlFor={fullscreenId} className="text-sm">{t("evaluacionConfig.activarPantallaCompletaAlIniciar")}</label>
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
            <label htmlFor={modoPresentacionId} className={cardEyebrow}>{t("evaluacionConfig.modoDePresentacion")}</label>
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
                  {t(MODO_PRESENTACION_LABEL[m])}
                </option>
              ))}
            </select>
            <p className="mt-1.5 text-xs leading-snug text-[var(--c-hint)]">
              {t(MODO_PRESENTACION_HINT[config.modoPresentacion])}
            </p>
            {config.modoPresentacion === "paginado" && (
              <div
                className="flex flex-wrap items-end gap-2 pt-1.5"
                data-testid="config-preguntas-por-pagina"
              >
                <label htmlFor={preguntasPorPaginaId} className="text-xs">{t("evaluacionConfig.preguntasPorPagina")}</label>
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
                  ({t("evaluacionConfig.defaultDosPuntos")} {PREGUNTAS_POR_PAGINA_DEFAULT})
                </span>
              </div>
            )}
          </div>

          <div data-testid="config-dificultad">
            <label htmlFor={politicaDificultadId} className={cardEyebrow}>{t("evaluacionConfig.ruteoPorDificultad")}</label>
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
                  {t(POLITICA_DIFICULTAD_LABEL[p])}
                </option>
              ))}
            </select>
            <p className="mt-1.5 text-xs leading-snug text-[var(--c-hint)]">
              {t(POLITICA_DIFICULTAD_HINT[config.politicaDificultad])}
            </p>
            {config.politicaDificultad === "adaptativa_simple" && (
              <div
                className="flex flex-wrap items-end gap-2 pt-1.5"
                data-testid="config-dificultad-ventana"
              >
                <label htmlFor={dificultadVentanaId} className="text-xs">{t("evaluacionConfig.ventanaRespuestasParaSubirBajar")}</label>
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
          <label htmlFor={dificultadInicialId} className={cardEyebrow}>{t("evaluacionConfig.dificultadInicial")}</label>
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
            <option value="basico">{t("comun.basico")}</option>
            <option value="intermedio">{t("comun.intermedio")}</option>
            <option value="avanzado">{t("comun.avanzado")}</option>
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
        <label htmlFor={modoPresentacionId} className="text-sm">{t("evaluacionConfig.modoDePresentacion")}</label>
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
              {t(MODO_PRESENTACION_LABEL[m])}
            </option>
          ))}
        </select>
        <p className="text-xs text-[var(--c-hint)]">
          {t(MODO_PRESENTACION_HINT[config.modoPresentacion])}
        </p>
        {config.modoPresentacion === "paginado" && (
          <div
            className="flex flex-wrap items-end gap-2 pl-1 pt-1"
            data-testid="config-preguntas-por-pagina"
          >
            <label htmlFor={preguntasPorPaginaId} className="text-xs">{t("evaluacionConfig.preguntasPorPagina")}</label>
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
              ({t("evaluacionConfig.defaultDosPuntos")} {PREGUNTAS_POR_PAGINA_DEFAULT})
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
        <label htmlFor={politicaDificultadId} className="text-sm">{t("evaluacionConfig.ruteoPorDificultad")}</label>
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
              {t(POLITICA_DIFICULTAD_LABEL[p])}
            </option>
          ))}
        </select>
        <p className="text-xs text-[var(--c-hint)]">
          {t(POLITICA_DIFICULTAD_HINT[config.politicaDificultad])}
        </p>

        <div className="flex flex-wrap items-end gap-3 pl-1 pt-1">
          <label htmlFor={dificultadInicialId} className="text-xs">{t("evaluacionConfig.dificultadInicial")}</label>
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
            <option value="basico">{t("comun.basico")}</option>
            <option value="intermedio">{t("comun.intermedio")}</option>
            <option value="avanzado">{t("comun.avanzado")}</option>
          </select>
        </div>

        {config.politicaDificultad === "adaptativa_simple" && (
          <div
            className="flex flex-wrap items-end gap-2 pl-1 pt-1"
            data-testid="config-dificultad-ventana"
          >
            <label htmlFor={dificultadVentanaId} className="text-xs">{t("evaluacionConfig.ventanaRespuestasParaSubirBajar")}</label>
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
