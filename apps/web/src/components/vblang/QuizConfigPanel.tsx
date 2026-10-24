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

import { useI18n } from "../../i18n/I18nContext";
/** Resumen del sorteo para la "Vista previa" (calculado por el host desde el
 *  working set de preguntas del rail — sin red). */
export interface QuizResumenSorteo {
  /** PLAN-sorteo-opcional — si es `false`, el cuestionario no sortea: entran
   *  todas las preguntas guardadas siempre (el resto de este resumen no
   *  aplica, ver render). */
  sorteoActivo: boolean;
  cantidadGlobal: number;
  obligatorias: number;
  /** Pools de relleno: `id === null` es la pool implícita (sin poolId).
   *  `cantidad` presente = el docente fijó los puestos a mano para esta
   *  pool (PLAN-sorteo-opcional); ausente = reparto proporcional automático. */
  pools: { id: string | null; count: number; cantidad?: number }[];
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
  const { t } = useI18n();
  const { materias: MATERIAS } = useMaterias();
  const materiaEnLista = MATERIAS.includes(meta.materia);
  const [materiaLibre, setMateriaLibre] = useState(meta.materia !== "" && !materiaEnLista);
  const [tagDraft, setTagDraft] = useState("");
  const [descripcionDraft, setDescripcionDraft] = useState<string | null>(null);
  // PLAN-Y fase 3 — instrucciones para el alumno (mismo patrón draft+blur
  // que descripción, para no disparar un PATCH por tecla).
  const [instruccionesDraft, setInstruccionesDraft] = useState<string | null>(null);

  const addTag = (raw: string) => {
    const tag = raw.trim();
    setTagDraft("");
    if (tag === "" || meta.tags.includes(tag)) return;
    onPatch({ tags: [...meta.tags, tag] });
  };
  const removeTag = (tag: string) => onPatch({ tags: meta.tags.filter((x) => x !== tag) });

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
      <div style={eyebrowStyle}>{t("quizConfigPanel.contenido")}</div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 14,
          alignItems: "start",
        }}
      >
        <Field label={t("comun.materia")}>
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
            <option value="">{t("quizConfigPanel.sinMateriaParentesis")}</option>
            {MATERIAS.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
            <option value={OTRA_MATERIA}>{t("quizConfigPanel.otra")}</option>
          </select>
          {materiaLibre && (
            <input
              type="text"
              value={meta.materia}
              disabled={disabled}
              onChange={(e) => onPatch({ materia: e.target.value })}
              maxLength={100}
              placeholder={t("quizConfigPanel.escribiLaMateria")}
              style={{ ...inputStyle, marginTop: 6 }}
              data-testid="quiz-config-materia-input"
            />
          )}
        </Field>

        <Field label={t("quizConfigPanel.nivel")}>
          <input
            type="text"
            value={meta.nivel}
            disabled={disabled}
            onChange={(e) => onPatch({ nivel: e.target.value })}
            maxLength={100}
            placeholder={t("quizConfigPanel.ej3Ano")}
            style={inputStyle}
            data-testid="quiz-config-nivel-input"
          />
        </Field>
      </div>

      <Field label={t("quizConfigPanel.tags")}>
        {meta.tags.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 6 }}>
            {meta.tags.map((tag) => (
              <span
                key={tag}
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
                {tag}
                <button
                  type="button"
                  onClick={() => removeTag(tag)}
                  disabled={disabled}
                  aria-label={`${t("quizConfigPanel.quitarTag")} ${tag}`}
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
          placeholder={t("quizConfigPanel.escribiYEnterEjCinematica")}
          style={inputStyle}
          data-testid="quiz-config-tags-input"
        />
      </Field>

      <Field label={t("comun.descripcion")}>
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
      <Field label={t("quizConfigPanel.instruccionesParaElAlumno")}>
        <textarea
          value={instruccionesDraft ?? meta.instructions}
          disabled={disabled}
          onChange={(e) => setInstruccionesDraft(e.target.value)}
          onBlur={commitInstrucciones}
          rows={2}
          maxLength={2000}
          placeholder={t("quizConfigPanel.ejLeeCadaPreguntaCon")}
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
  const { t } = useI18n();
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
            ? t("comun.guardando")
            : saveState === "saved"
              ? t("quizConfigPanel.guardado")
              : saveState === "error"
                ? t("quizConfigPanel.errorAlGuardarSeReintenta")
                : ""}
        </span>
      </div>

      <Field label={t("comun.titulo")}>
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
        <Field label={t("comun.tipo")}>
          <select
            value={tipo}
            disabled={disabled}
            onChange={(e) => onPatch({ type: e.target.value as QuizMetaTipo })}
            style={{ ...inputStyle, cursor: "pointer" }}
            data-testid="quiz-config-tipo-select"
          >
            <option value="practica">{t("quizConfigPanel.practicaNoCuentaParaLa")}</option>
            <option value="formal">{t("quizConfigPanel.evaluacionFormalCuentaParaLa")}</option>
            <option value="competencia">{t("profesorEvaluaciones.competencia")}</option>
          </select>
          <div style={hintStyle}>
            {tipo === "formal"
              ? t("quizConfigPanel.esteCuestionarioContaraParaLa")
              : tipo === "practica"
                ? t("quizConfigPanel.esteCuestionarioEsDePractica")
                : t("quizConfigPanel.rankingPorTiempoEntreAlumnos")}
          </div>
        </Field>

        <Field label={t("comun.visibilidad")}>
          <select
            value={meta.visibility}
            disabled={disabled}
            onChange={(e) => onPatch({ visibility: e.target.value as QuizMetaVisibility })}
            style={{ ...inputStyle, cursor: "pointer" }}
            data-testid="quiz-config-visibility-select"
          >
            <option value="publico">{t("profesorEvaluaciones.publico")}</option>
            <option value="escuela">{t("sidebar.escuela")}</option>
          </select>
        </Field>
      </div>

      <ContenidoFields meta={meta} onPatch={onPatch} disabled={disabled} />

      <div>
        <div style={eyebrowStyle}>{t("evaluacionConfig.configuracionDeEvaluacion")}</div>
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
            {previewOpen ? t("quizConfigPanel.ocultarVistaPreviaDelSorteo") : t("quizConfigPanel.vistaPreviaDelSorteo")}
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
              {!resumen.sorteoActivo ? (
                // PLAN-sorteo-opcional — sin sorteo no hay nada que repartir:
                // todas las preguntas guardadas entran siempre.
                <div>{t("quizConfigPanel.sorteoDesactivadoResumen")}</div>
              ) : (
                <>
                  <div>{t("quizConfigPanel.cadaIntentoToma")}<strong>{resumen.cantidadGlobal}</strong>{" "}
                    {resumen.cantidadGlobal === 1 ? t("comun.pregunta") : t("comun.preguntas")}.
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
                      · Pool {p.id ? `"${p.id}"` : t("quizConfigPanel.implicitaSinNombre")}:{" "}
                      {p.cantidad !== undefined
                        ? `${p.cantidad} puesto${p.cantidad === 1 ? "" : "s"} fijo${p.cantidad === 1 ? "" : "s"} (de ${p.count} pregunta${p.count === 1 ? "" : "s"})`
                        : `${p.count} pregunta${p.count === 1 ? "" : "s"} de relleno`}
                    </div>
                  ))}
                  {resumen.validacionErrores.length > 0 ? (
                    <div style={{ marginTop: 6, color: "var(--c-warning-text, #92400e)" }}>
                      {resumen.validacionErrores.map((err) => (
                        <div key={err}>⚠ {err}</div>
                      ))}
                    </div>
                  ) : (
                    <div style={{ marginTop: 6, color: "var(--c-success, #16a34a)" }}>{t("quizConfigPanel.elMaterialAlcanzaParaLlenar")}</div>
                  )}
                </>
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
        >{t("moduloEditor.eliminarCuestionario")}</button>
      </div>
    </div>
  );
}
