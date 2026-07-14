import { useId, useState } from "react";
import { type RecetaConfig } from "./types";

import { useI18n } from "../../../i18n/I18nContext";
// ── Alumno (readonly) ────────────────────────────────────────────────

type AlumnoProps = { config: RecetaConfig };

function formatAmount(value: number): string {
  const rounded = Math.round(value * 100) / 100;
  return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(2);
}

function EscaladorAlumno({ config }: AlumnoProps) {
  const { t } = useI18n();
  const [multiplier, setMultiplier] = useState(1);
  const [pasosOpen, setPasosOpen] = useState(true);

  const porciones = config.porcionesBase > 0
    ? Math.round(config.porcionesBase * multiplier * 10) / 10
    : 0;

  return (
    <div className="space-y-4">
      {/* Header */}
      <div>
        <h3 className="text-xl font-bold text-[var(--c-text)]">{config.titulo}</h3>
        {config.descripcion && (
          <p className="text-sm text-[var(--c-muted)] mt-1">{config.descripcion}</p>
        )}
        {config.porcionesBase > 0 && (
          <span className="inline-block mt-2 text-xs bg-[var(--c-surface-3)] text-[var(--c-muted)] px-2.5 py-1 rounded-full">
            Para {config.porcionesBase} porciones
          </span>
        )}
      </div>

      {/* Multiplicador */}
      <div className="bg-[color-mix(in_srgb,var(--c-primary)_8%,transparent)] rounded-xl p-4 space-y-3">
        <div className="text-center">
          <span className="text-5xl font-black text-[var(--c-primary)]">×{multiplier}</span>
        </div>
        <input
          type="range"
          min={0.5}
          max={20}
          step={0.5}
          value={multiplier}
          aria-label={t("escaladorRecetas.multiplicadorDeLaReceta")}
          onChange={(e) => setMultiplier(Number(e.target.value))}
          className="w-full accent-[var(--c-primary)]"
        />
        <div className="flex gap-2 justify-center">
          {[0.5, 1, 2, 4].map((v) => (
            <button
              key={v}
              type="button"
              aria-pressed={multiplier === v}
              aria-label={`Multiplicar por ${v}`}
              onClick={() => setMultiplier(v)}
              className={`px-3 py-1 rounded-lg text-sm font-medium border transition-colors motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)] ${
                multiplier === v
                  ? "bg-[var(--c-primary)] text-[var(--c-accent-fg)] border-[var(--c-primary)]"
                  : "bg-[var(--c-surface)] text-[var(--c-primary)] border-[color-mix(in_srgb,var(--c-primary)_30%,transparent)] hover:bg-[color-mix(in_srgb,var(--c-primary)_12%,transparent)]"
              }`}
            >
              ×{v}
            </button>
          ))}
        </div>
        {config.porcionesBase > 0 && (
          <p className="text-center text-xs text-[var(--c-muted)]" aria-live="polite">= {porciones} porciones</p>
        )}
      </div>

      {/* Ingredientes */}
      {config.ingredientes.length > 0 && (
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-[var(--c-muted)] mb-2">{t("escaladorRecetas.ingredientes")}</h4>
          <div className="grid grid-cols-2 gap-2">
            {config.ingredientes.map((ing) => {
              const scaled = formatAmount(ing.cantidadBase * multiplier);
              const base = formatAmount(ing.cantidadBase);
              return (
                <div
                  key={ing.id}
                  className="bg-[var(--c-surface)] border border-[var(--c-border)] rounded-lg p-3"
                >
                  <p className="text-xs text-[var(--c-muted)]">{ing.nombre}</p>
                  {multiplier !== 1 && (
                    <p className="text-xs text-[var(--c-text-3)] line-through">
                      {base} {ing.unidad}
                    </p>
                  )}
                  <p className="text-2xl font-bold text-[var(--c-text)] leading-tight">
                    {scaled}
                    <span className="text-sm text-[var(--c-text-3)] ml-1">{ing.unidad}</span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Pasos — acordeón */}
      {config.pasos.length > 0 && (
        <div>
          <button
            type="button"
            onClick={() => setPasosOpen((o) => !o)}
            aria-expanded={pasosOpen}
            className="flex items-center justify-between w-full text-left text-sm font-semibold text-[var(--c-text)] py-2 border-b border-[var(--c-border)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)] rounded-sm"
          >
            <span>Preparación ({config.pasos.length} pasos)</span>
            <span className="text-[var(--c-text-3)] text-xs" aria-hidden="true">{pasosOpen ? "▲" : "▼"}</span>
          </button>
          {pasosOpen && (
            <ol className="mt-3 space-y-2">
              {config.pasos.map((paso, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[color-mix(in_srgb,var(--c-primary)_14%,transparent)] text-[var(--c-primary)] text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <span className="text-sm text-[var(--c-text)] pt-0.5">{paso}</span>
                </li>
              ))}
            </ol>
          )}
        </div>
      )}
    </div>
  );
}

// ── Editor (docente) ─────────────────────────────────────────────────

type EditorProps = {
  config?: RecetaConfig;
  onChange: (config: RecetaConfig) => void;
};

function makeId() {
  return Math.random().toString(36).slice(2, 9);
}

function emptyConfig(): RecetaConfig {
  return {
    tool: "escalador-recetas",
    titulo: "",
    descripcion: "",
    porcionesBase: 1,
    ingredientes: [],
    pasos: [],
  };
}

const INPUT_CLS =
  "rounded-md border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)] focus:border-[var(--c-primary)]";

function EscaladorEditor({ config, onChange }: EditorProps) {
  const { t } = useI18n();
  const cfg = config ?? emptyConfig();
  const tituloId = useId();
  const descId = useId();
  const porcionesId = useId();

  const update = (partial: Partial<RecetaConfig>) => onChange({ ...cfg, ...partial });

  const addIngrediente = () =>
    update({
      ingredientes: [
        ...cfg.ingredientes,
        { id: makeId(), nombre: "", cantidadBase: 1, unidad: "" },
      ],
    });

  const removeIngrediente = (id: string) =>
    update({ ingredientes: cfg.ingredientes.filter((i) => i.id !== id) });

  const updateIngrediente = (id: string, fields: Partial<RecetaConfig["ingredientes"][0]>) =>
    update({
      ingredientes: cfg.ingredientes.map((i) => (i.id === id ? { ...i, ...fields } : i)),
    });

  const addPaso = () => update({ pasos: [...cfg.pasos, ""] });
  const removePaso = (idx: number) =>
    update({ pasos: cfg.pasos.filter((_, i) => i !== idx) });
  const updatePaso = (idx: number, value: string) =>
    update({ pasos: cfg.pasos.map((p, i) => (i === idx ? value : p)) });

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div>
          <label htmlFor={tituloId} className="block text-xs font-medium text-[var(--c-muted)] mb-1">{t("comun.titulo")}</label>
          <input
            id={tituloId}
            className={`${INPUT_CLS} w-full`}
            value={cfg.titulo}
            placeholder={t("escaladorRecetas.nombreDeLaReceta")}
            onChange={(e) => update({ titulo: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor={descId} className="block text-xs font-medium text-[var(--c-muted)] mb-1">{t("comun.descripcionOpcional")}</label>
          <input
            id={descId}
            className={`${INPUT_CLS} w-full`}
            value={cfg.descripcion ?? ""}
            placeholder={t("adminMaterias.descripcionBreve")}
            onChange={(e) => update({ descripcion: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor={porcionesId} className="block text-xs font-medium text-[var(--c-muted)] mb-1">{t("theorySlideEditor.porcionesBase")}</label>
          <input
            id={porcionesId}
            type="number"
            min={1}
            className={`${INPUT_CLS} w-32`}
            value={cfg.porcionesBase}
            onChange={(e) => update({ porcionesBase: Number(e.target.value) })}
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold uppercase tracking-wide text-[var(--c-muted)]">{t("escaladorRecetas.ingredientes")}</span>
          <button
            type="button"
            className="text-xs text-[var(--c-primary)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)] rounded-sm px-1"
            onClick={addIngrediente}
          >{t("profesorAulaConfiguracion.agregar")}</button>
        </div>
        <div className="space-y-2">
          {cfg.ingredientes.map((ing, idx) => (
            <div key={ing.id} className="flex gap-2 items-center">
              <input
                className={`${INPUT_CLS} flex-1`}
                aria-label={`Nombre del ingrediente ${idx + 1}`}
                placeholder={t("comun.nombre")}
                value={ing.nombre}
                onChange={(e) => updateIngrediente(ing.id, { nombre: e.target.value })}
              />
              <input
                type="number"
                min={0}
                step={0.01}
                className={`${INPUT_CLS} w-20`}
                aria-label={`Cantidad del ingrediente ${idx + 1}`}
                placeholder={t("escaladorRecetas.cant")}
                value={ing.cantidadBase}
                onChange={(e) => updateIngrediente(ing.id, { cantidadBase: Number(e.target.value) })}
              />
              <input
                className={`${INPUT_CLS} w-20`}
                aria-label={`Unidad del ingrediente ${idx + 1}`}
                placeholder={t("theorySlideEditor.unidad")}
                value={ing.unidad}
                onChange={(e) => updateIngrediente(ing.id, { unidad: e.target.value })}
              />
              <button
                type="button"
                className="text-[var(--c-danger)] hover:opacity-80 text-xs px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)] rounded-sm"
                aria-label={`Eliminar ingrediente ${ing.nombre || idx + 1}`}
                onClick={() => removeIngrediente(ing.id)}
              >
                ✕
              </button>
            </div>
          ))}
          {cfg.ingredientes.length === 0 && (
            <p className="text-xs text-[var(--c-text-3)] italic">{t("escaladorRecetas.todaviaNoHayIngredientesUsa")}</p>
          )}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold uppercase tracking-wide text-[var(--c-muted)]">{t("escaladorRecetas.pasos")}</span>
          <button
            type="button"
            className="text-xs text-[var(--c-primary)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)] rounded-sm px-1"
            onClick={addPaso}
          >{t("profesorAulaConfiguracion.agregar")}</button>
        </div>
        <div className="space-y-2">
          {cfg.pasos.map((paso, i) => (
            <div key={i} className="flex gap-2 items-start">
              <span className="text-xs text-[var(--c-text-3)] mt-2 w-5 text-right shrink-0" aria-hidden="true">{i + 1}.</span>
              <textarea
                className={`${INPUT_CLS} flex-1 resize-none`}
                rows={2}
                aria-label={`Descripción del paso ${i + 1}`}
                value={paso}
                placeholder={t("escaladorRecetas.descripcionDelPaso")}
                onChange={(e) => updatePaso(i, e.target.value)}
              />
              <button
                type="button"
                className="text-[var(--c-danger)] hover:opacity-80 text-xs mt-2 px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)] rounded-sm"
                aria-label={`Eliminar paso ${i + 1}`}
                onClick={() => removePaso(i)}
              >
                ✕
              </button>
            </div>
          ))}
          {cfg.pasos.length === 0 && (
            <p className="text-xs text-[var(--c-text-3)] italic">{t("escaladorRecetas.todaviaNoHayPasosUsa")}</p>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Export ────────────────────────────────────────────────────────────

type Props =
  | { config: RecetaConfig; onChange?: never }
  | { config?: RecetaConfig; onChange: (config: RecetaConfig) => void };

export function EscaladorRecetas({ config, onChange }: Props) {
  if (onChange !== undefined) {
    return <EscaladorEditor config={config} onChange={onChange} />;
  }
  if (!config) return null;
  return <EscaladorAlumno config={config} />;
}
