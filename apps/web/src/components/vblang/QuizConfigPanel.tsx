/**
 * WO-tiza-config (Fase 1+2 del plan "portar configuración de quiz a Tiza") —
 * panel de configuración del CUESTIONARIO dentro del cuerpo plegable de
 * DETALLES en `PlantillaEditorTiza`, sólo con `quizId` presente.
 *
 * Layout apilado a una columna: el aside de Tiza es de ancho fijo (~360px,
 * `PlantillaEditorShell`), así que acá NO se replican las grillas de 3
 * columnas de `ModuloEditor` (§2.1b del plan). `EvaluacionConfig` se reusa
 * tal cual (sus filas son flex-wrap, degradan bien a una columna).
 *
 * Persistencia: cada cambio dispara `onPatch` con un patch parcial; el host
 * (la página) lo encola y lo manda a `PATCH /api/quizzes/:quizId/meta` con
 * debounce. El panel es presentacional: no conoce la red.
 */

import { useState, type CSSProperties, type ReactNode } from "react";
import EvaluacionConfig from "../modulos/EvaluacionConfig";
import { parseEvaluacionConfig, type QuizTipo } from "../../domain/quiz/intentos";
import type {
  QuizMeta,
  QuizMetaPatch,
  QuizMetaTipo,
  QuizMetaVisibility,
} from "../../domain/quiz/quizPreguntasApi";

/** Resumen del sorteo para la "Vista previa" (calculado por el host desde el
 *  working set de preguntas del rail — sin red). */
export interface QuizResumenSorteo {
  cantidadGlobal: number;
  obligatorias: number;
  /** Pools de relleno: `id === null` es la pool implícita (sin poolId). */
  pools: { id: string | null; count: number }[];
  validacionErrores: string[];
}

export type QuizMetaSaveState = "idle" | "saving" | "saved" | "error";

interface Props {
  meta: QuizMeta;
  saveState: QuizMetaSaveState;
  onPatch: (patch: QuizMetaPatch) => void;
  onDelete: () => void;
  resumen: QuizResumenSorteo | null;
  disabled?: boolean;
}

/* Mismo lenguaje visual que el property grid de TizaEditor (tokens --c-*). */
const eyebrowStyle: CSSProperties = {
  fontSize: 10.5,
  fontWeight: 700,
  letterSpacing: "0.05em",
  textTransform: "uppercase",
  color: "var(--c-text-3)",
  marginBottom: 5,
};

const inputStyle: CSSProperties = {
  width: "100%",
  border: "1px solid var(--c-border)",
  borderRadius: "var(--r-md)",
  padding: "7px 9px",
  fontSize: 12.5,
  color: "var(--c-text)",
  background: "var(--c-surface-2)",
};

const hintStyle: CSSProperties = {
  fontSize: 11.5,
  color: "var(--c-text-3)",
  marginTop: 5,
  lineHeight: 1.4,
};

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <div style={eyebrowStyle}>{label}</div>
      {children}
    </div>
  );
}

/** `evaluacion` es el alias legacy de `formal` (ver ModuleQuizSchema): el
 *  select lo muestra y lo guarda como `formal` (canónico para el runtime). */
function normalizarTipo(tipo: QuizMetaTipo): "practica" | "formal" | "competencia" {
  return tipo === "evaluacion" ? "formal" : tipo;
}

export default function QuizConfigPanel({
  meta,
  saveState,
  onPatch,
  onDelete,
  resumen,
  disabled,
}: Props) {
  const [previewOpen, setPreviewOpen] = useState(false);
  // Borrador local del título: se commitea en blur/Enter (mismo criterio que
  // `BufferedInput` de TizaEditor — evita un PATCH por tecla).
  const [tituloDraft, setTituloDraft] = useState<string | null>(null);
  const tipo = normalizarTipo(meta.type);
  // `parseEvaluacionConfig` espera el JSON de `settings` (mismo criterio que
  // `EvaluacionConfigEditor` en ModuloEditor: settings "virtual" para delegar
  // la resolución de defaults por tipo en una sola función).
  const config = parseEvaluacionConfig(JSON.stringify(meta.config), tipo as QuizTipo);

  const commitTitulo = () => {
    if (tituloDraft === null) return;
    const next = tituloDraft.trim();
    setTituloDraft(null);
    if (next && next !== meta.title) onPatch({ title: next });
  };

  return (
    <div
      data-testid="quiz-config-panel"
      style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 14 }}
    >
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 8 }}>
        <div style={{ ...eyebrowStyle, marginBottom: 0 }}>Cuestionario</div>
        <span
          aria-live="polite"
          data-testid="quiz-config-save-state"
          style={{
            fontSize: 11,
            color:
              saveState === "error"
                ? "var(--c-danger, #dc2626)"
                : "var(--c-text-3)",
          }}
        >
          {saveState === "saving"
            ? "Guardando…"
            : saveState === "saved"
              ? "Guardado ✓"
              : saveState === "error"
                ? "Error al guardar — se reintenta con el próximo cambio"
                : ""}
        </span>
      </div>

      <Field label="Título">
        <input
          type="text"
          value={tituloDraft ?? meta.title}
          disabled={disabled}
          onChange={(e) => setTituloDraft(e.target.value)}
          onBlur={commitTitulo}
          onKeyDown={(e) => {
            if (e.key === "Enter") (e.target as HTMLInputElement).blur();
          }}
          style={inputStyle}
          data-testid="quiz-config-title-input"
        />
      </Field>

      <Field label="Tipo">
        <select
          value={tipo}
          disabled={disabled}
          onChange={(e) => onPatch({ type: e.target.value as QuizMetaTipo })}
          style={{ ...inputStyle, cursor: "pointer" }}
          data-testid="quiz-config-tipo-select"
        >
          <option value="practica">Práctica — no cuenta para la nota</option>
          <option value="formal">Evaluación formal — cuenta para la nota</option>
          <option value="competencia">Competencia</option>
        </select>
        <div style={hintStyle}>
          {tipo === "formal"
            ? "Este cuestionario contará para la nota final del alumno."
            : tipo === "practica"
              ? "Este cuestionario es de práctica y no afecta la nota."
              : "Ranking por tiempo entre alumnos."}
        </div>
      </Field>

      <Field label="Visibilidad">
        <select
          value={meta.visibility}
          disabled={disabled}
          onChange={(e) => onPatch({ visibility: e.target.value as QuizMetaVisibility })}
          style={{ ...inputStyle, cursor: "pointer" }}
          data-testid="quiz-config-visibility-select"
        >
          <option value="publico">Público</option>
          <option value="escuela">Escuela</option>
        </select>
      </Field>

      <div>
        <div style={eyebrowStyle}>Configuración de evaluación</div>
        <EvaluacionConfig
          tipo={tipo}
          config={config}
          variant="compact"
          onChangeTimerSegundos={disabled ? undefined : (next) => onPatch({ timerSegundos: next })}
          onChangeMaxIntentos={disabled ? undefined : (next) => onPatch({ maxIntentos: next })}
          onChangePoliticaNota={disabled ? undefined : (next) => onPatch({ politicaNota: next })}
          onChangePoliticaSorteo={disabled ? undefined : (next) => onPatch({ politicaSorteo: next })}
          onChangeFullscreenOnStart={
            disabled ? undefined : (next) => onPatch({ fullscreenOnStart: next })
          }
          onChangeOcultarPuntos={disabled ? undefined : (next) => onPatch({ ocultarPuntos: next })}
          onChangeModoPresentacion={
            disabled ? undefined : (next) => onPatch({ modoPresentacion: next })
          }
          onChangePreguntasPorPagina={
            disabled ? undefined : (next) => onPatch({ preguntasPorPagina: next })
          }
          onChangePoliticaDificultad={
            disabled ? undefined : (next) => onPatch({ politicaDificultad: next })
          }
          onChangeDificultadInicial={
            disabled ? undefined : (next) => onPatch({ dificultadInicial: next })
          }
          onChangeDificultadVentana={
            disabled ? undefined : (next) => onPatch({ dificultadVentana: next })
          }
          onChangePoliticaExpiracion={
            disabled ? undefined : (next) => onPatch({ politicaExpiracion: next })
          }
        />
      </div>

      {resumen ? (
        <div>
          <button
            type="button"
            onClick={() => setPreviewOpen((v) => !v)}
            aria-expanded={previewOpen}
            data-testid="quiz-config-preview-toggle"
            style={{
              border: "1px solid var(--c-border)",
              borderRadius: "var(--r-md)",
              background: "var(--c-surface-2)",
              color: "var(--c-text-2)",
              fontSize: 12,
              fontWeight: 600,
              padding: "6px 10px",
              cursor: "pointer",
            }}
          >
            {previewOpen ? "Ocultar vista previa del sorteo" : "Vista previa del sorteo"}
          </button>
          {previewOpen ? (
            <div
              data-testid="quiz-config-preview"
              style={{
                marginTop: 8,
                border: "1px solid var(--c-border)",
                borderRadius: "var(--r-md)",
                padding: "8px 10px",
                fontSize: 11.5,
                lineHeight: 1.5,
                color: "var(--c-text-2)",
              }}
            >
              <div>
                Cada intento toma <strong>{resumen.cantidadGlobal}</strong>{" "}
                {resumen.cantidadGlobal === 1 ? "pregunta" : "preguntas"}.
              </div>
              <div>
                {resumen.obligatorias} obligatoria{resumen.obligatorias === 1 ? "" : "s"} (entran
                siempre)
                {resumen.cantidadGlobal > resumen.obligatorias
                  ? ` + ${resumen.cantidadGlobal - resumen.obligatorias} de relleno sorteadas`
                  : ""}
                .
              </div>
              {resumen.pools.map((p) => (
                <div key={p.id ?? "(implícita)"}>
                  · Pool {p.id ? `"${p.id}"` : "implícita (sin nombre)"}: {p.count} pregunta
                  {p.count === 1 ? "" : "s"} de relleno
                </div>
              ))}
              {resumen.validacionErrores.length > 0 ? (
                <div style={{ marginTop: 6, color: "var(--c-warning-text, #92400e)" }}>
                  {resumen.validacionErrores.map((err) => (
                    <div key={err}>⚠ {err}</div>
                  ))}
                </div>
              ) : (
                <div style={{ marginTop: 6, color: "var(--c-success, #16a34a)" }}>
                  ✓ El material alcanza para llenar el cuestionario.
                </div>
              )}
            </div>
          ) : null}
        </div>
      ) : null}

      <div>
        <button
          type="button"
          disabled={disabled}
          onClick={onDelete}
          data-testid="quiz-config-delete-button"
          style={{
            border: "1px solid color-mix(in srgb, var(--c-danger, #dc2626) 35%, transparent)",
            borderRadius: "var(--r-md)",
            background: "color-mix(in srgb, var(--c-danger, #dc2626) 8%, transparent)",
            color: "var(--c-danger, #dc2626)",
            fontSize: 12,
            fontWeight: 600,
            padding: "6px 10px",
            cursor: disabled ? "default" : "pointer",
          }}
        >
          Eliminar cuestionario
        </button>
      </div>

      <div style={{ height: 1, background: "var(--c-border)" }} />
      <div style={{ ...eyebrowStyle, marginBottom: 0 }}>Pregunta activa (plantilla)</div>
    </div>
  );
}
