/**
 * WO-tiza-config / PLAN-Z fase 2 — panel de configuración del CUESTIONARIO.
 * Vive en la tarjeta central "Configuraciones" de `PlantillaEditorTiza`
 * (ítem pineado del rail, §7 del PLAN-Z), sólo con `quizId` presente.
 * Antes vivía en el cuerpo plegable de DETALLES (aside angosto); ahora el
 * host es ancho: Tipo/Visibilidad van en par a dos columnas (mockup §7) y
 * `EvaluacionConfig` se reusa tal cual (sus filas flex-wrap fluyen solas).
 *
 * `pools` es un slot del host (la sección POOLS agrupa el working set de
 * preguntas, que este panel no conoce) — va entre la vista previa del
 * sorteo y "Eliminar cuestionario", como en el mockup.
 *
 * Persistencia: cada cambio dispara `onPatch` con un patch parcial; el host
 * (la página) lo encola y lo manda a `PATCH /api/quizzes/:quizId/meta` con
 * debounce. El panel es presentacional: no conoce la red.
 */

import { useState, type CSSProperties, type ReactNode } from "react";
import EvaluacionConfig from "../modulos/EvaluacionConfig";
import { parseEvaluacionConfig, type QuizTipo } from "../../domain/quiz/intentos";
import { useMaterias } from "../../domain/materia/useMaterias";
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
  /** Sección POOLS del host (agrupa el working set de preguntas). */
  pools?: ReactNode;
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

const OTRA_MATERIA = "__otra__";

/** PLAN-Z fase 3/4 — "un solo set de metadatos" a nivel cuestionario:
 *  materia/nivel/tags/descripción, editados UNA vez acá y heredados
 *  silenciosamente a cada Plantilla-pregunta al guardar (decisión §3.1
 *  del plan). Reemplaza el `MetadataPanel` por-pregunta para estos 4
 *  campos en el modo cuestionario. */
function ContenidoFields({
  meta,
  onPatch,
  disabled,
}: {
  meta: QuizMeta;
  onPatch: (patch: QuizMetaPatch) => void;
  disabled?: boolean;
}) {
  const { materias: MATERIAS } = useMaterias();
  const materiaEnLista = MATERIAS.includes(meta.materia);
  const [materiaLibre, setMateriaLibre] = useState(meta.materia !== "" && !materiaEnLista);
  const [tagDraft, setTagDraft] = useState("");
  const [descripcionDraft, setDescripcionDraft] = useState<string | null>(null);
  // PLAN-Y fase 3 — instrucciones para el alumno (mismo patrón draft+blur
  // que descripción, para no disparar un PATCH por tecla).
  const [instruccionesDraft, setInstruccionesDraft] = useState<string | null>(null);

  const addTag = (raw: string) => {
    const t = raw.trim();
    setTagDraft("");
    if (t === "" || meta.tags.includes(t)) return;
    onPatch({ tags: [...meta.tags, t] });
  };
  const removeTag = (t: string) => onPatch({ tags: meta.tags.filter((x) => x !== t) });

  const commitDescripcion = () => {
    if (descripcionDraft === null) return;
    const next = descripcionDraft.trim();
    setDescripcionDraft(null);
    if (next !== meta.descripcion) onPatch({ descripcion: next });
  };

  const commitInstrucciones = () => {
    if (instruccionesDraft === null) return;
    const next = instruccionesDraft.trim();
    setInstruccionesDraft(null);
    if (next !== meta.instructions) onPatch({ instructions: next });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <div style={eyebrowStyle}>Contenido</div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 14,
          alignItems: "start",
        }}
      >
        <Field label="Materia">
          <select
            value={materiaLibre ? OTRA_MATERIA : meta.materia}
            disabled={disabled}
            onChange={(e) => {
              if (e.target.value === OTRA_MATERIA) {
                setMateriaLibre(true);
                onPatch({ materia: "" });
              } else {
                setMateriaLibre(false);
                onPatch({ materia: e.target.value });
              }
            }}
            style={{ ...inputStyle, cursor: "pointer" }}
            data-testid="quiz-config-materia-select"
          >
            <option value="">(sin materia)</option>
            {MATERIAS.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
            <option value={OTRA_MATERIA}>Otra…</option>
          </select>
          {materiaLibre && (
            <input
              type="text"
              value={meta.materia}
              disabled={disabled}
              onChange={(e) => onPatch({ materia: e.target.value })}
              maxLength={100}
              placeholder="Escribí la materia"
              style={{ ...inputStyle, marginTop: 6 }}
              data-testid="quiz-config-materia-input"
            />
          )}
        </Field>

        <Field label="Nivel">
          <input
            type="text"
            value={meta.nivel}
            disabled={disabled}
            onChange={(e) => onPatch({ nivel: e.target.value })}
            maxLength={100}
            placeholder="Ej: 3° año"
            style={inputStyle}
            data-testid="quiz-config-nivel-input"
          />
        </Field>
      </div>

      <Field label="Tags">
        {meta.tags.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 6 }}>
            {meta.tags.map((t) => (
              <span
                key={t}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 4,
                  borderRadius: 999,
                  background: "var(--c-surface-2)",
                  padding: "2px 8px",
                  fontSize: 11.5,
                  color: "var(--c-text)",
                }}
              >
                {t}
                <button
                  type="button"
                  onClick={() => removeTag(t)}
                  disabled={disabled}
                  aria-label={`Quitar tag ${t}`}
                  style={{ color: "var(--c-text-3)", cursor: "pointer" }}
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        )}
        <input
          type="text"
          value={tagDraft}
          disabled={disabled}
          onChange={(e) => setTagDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              addTag(tagDraft);
            } else if (e.key === "Backspace" && tagDraft === "" && meta.tags.length > 0) {
              removeTag(meta.tags[meta.tags.length - 1]);
            }
          }}
          onBlur={() => addTag(tagDraft)}
          placeholder="Escribí y Enter (ej. cinemática)"
          style={inputStyle}
          data-testid="quiz-config-tags-input"
        />
      </Field>

      <Field label="Descripción">
        <textarea
          value={descripcionDraft ?? meta.descripcion}
          disabled={disabled}
          onChange={(e) => setDescripcionDraft(e.target.value)}
          onBlur={commitDescripcion}
          rows={2}
          maxLength={1000}
          style={{ ...inputStyle, resize: "vertical" }}
          data-testid="quiz-config-descripcion-input"
        />
      </Field>

      {/* PLAN-Y fase 3 — se muestran al alumno al iniciar el intento
          (QuizAttempt). Antes vivía como campo fantasma en ModuloEditor
          (nunca se persistía); Tiza es su único editor. */}
      <Field label="Instrucciones para el alumno">
        <textarea
          value={instruccionesDraft ?? meta.instructions}
          disabled={disabled}
          onChange={(e) => setInstruccionesDraft(e.target.value)}
          onBlur={commitInstrucciones}
          rows={2}
          maxLength={2000}
          placeholder="Ej: Leé cada pregunta con atención. Tenés 30 minutos."
          style={{ ...inputStyle, resize: "vertical" }}
          data-testid="quiz-config-instructions-input"
        />
      </Field>
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
  pools,
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
      style={{ display: "flex", flexDirection: "column", gap: 14 }}
    >
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "flex-end", gap: 8, minHeight: 14 }}>
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

      {/* PLAN-Z §7 — par a dos columnas (mockup); degrada a una si no entra. */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 14,
          alignItems: "start",
        }}
      >
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
      </div>

      <ContenidoFields meta={meta} onPatch={onPatch} disabled={disabled} />

      <div>
        <div style={eyebrowStyle}>Configuración de evaluación</div>
        <EvaluacionConfig
          tipo={tipo}
          config={config}
          variant="card"
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
          {/* Link de acento con ›, como el mockup §7 (no botón con borde). */}
          <button
            type="button"
            onClick={() => setPreviewOpen((v) => !v)}
            aria-expanded={previewOpen}
            data-testid="quiz-config-preview-toggle"
            style={{
              border: 0,
              background: "transparent",
              padding: 0,
              color: "var(--c-accent)",
              fontSize: 12.5,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            {previewOpen ? "Ocultar vista previa del sorteo" : "Vista previa del sorteo ›"}
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

      {pools ?? null}

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
    </div>
  );
}
