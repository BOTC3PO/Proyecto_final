import { useState } from "react";
import { type RecetaConfig } from "./types";

// ── Alumno (readonly) ────────────────────────────────────────────────

type AlumnoProps = { config: RecetaConfig };

function formatAmount(value: number): string {
  const rounded = Math.round(value * 100) / 100;
  return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(2);
}

function EscaladorAlumno({ config }: AlumnoProps) {
  const [multiplier, setMultiplier] = useState(1);
  const [pasosOpen, setPasosOpen] = useState(true);

  const porciones = config.porcionesBase > 0
    ? Math.round(config.porcionesBase * multiplier * 10) / 10
    : 0;

  return (
    <div className="space-y-4">
      {/* Header */}
      <div>
        <h3 className="text-xl font-bold text-slate-800">{config.titulo}</h3>
        {config.descripcion && (
          <p className="text-sm text-slate-500 mt-1">{config.descripcion}</p>
        )}
        {config.porcionesBase > 0 && (
          <span className="inline-block mt-2 text-xs bg-slate-100 text-slate-500 px-2.5 py-1 rounded-full">
            Para {config.porcionesBase} porciones
          </span>
        )}
      </div>

      {/* Multiplicador */}
      <div className="bg-indigo-50 rounded-xl p-4 space-y-3">
        <div className="text-center">
          <span className="text-5xl font-black text-indigo-700">×{multiplier}</span>
        </div>
        <input
          type="range"
          min={0.5}
          max={20}
          step={0.5}
          value={multiplier}
          onChange={(e) => setMultiplier(Number(e.target.value))}
          className="w-full accent-indigo-600"
        />
        <div className="flex gap-2 justify-center">
          {[0.5, 1, 2, 4].map((v) => (
            <button
              key={v}
              type="button"
              onClick={() => setMultiplier(v)}
              className={`px-3 py-1 rounded-lg text-sm font-medium border transition-colors ${
                multiplier === v
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "bg-white text-indigo-700 border-indigo-200 hover:bg-indigo-100"
              }`}
            >
              ×{v}
            </button>
          ))}
        </div>
        {config.porcionesBase > 0 && (
          <p className="text-center text-xs text-slate-500">= {porciones} porciones</p>
        )}
      </div>

      {/* Ingredientes */}
      {config.ingredientes.length > 0 && (
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">
            Ingredientes
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {config.ingredientes.map((ing) => {
              const scaled = formatAmount(ing.cantidadBase * multiplier);
              const base = formatAmount(ing.cantidadBase);
              return (
                <div
                  key={ing.id}
                  className="bg-white border border-slate-100 rounded-lg p-3"
                >
                  <p className="text-xs text-slate-500">{ing.nombre}</p>
                  {multiplier !== 1 && (
                    <p className="text-xs text-slate-300 line-through">
                      {base} {ing.unidad}
                    </p>
                  )}
                  <p className="text-2xl font-bold text-slate-800 leading-tight">
                    {scaled}
                    <span className="text-sm text-slate-400 ml-1">{ing.unidad}</span>
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
            className="flex items-center justify-between w-full text-left text-sm font-semibold text-slate-700 py-2 border-b border-slate-100"
          >
            <span>Preparación ({config.pasos.length} pasos)</span>
            <span className="text-slate-400 text-xs">{pasosOpen ? "▲" : "▼"}</span>
          </button>
          {pasosOpen && (
            <ol className="mt-3 space-y-2">
              {config.pasos.map((paso, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <span className="text-sm text-slate-700 pt-0.5">{paso}</span>
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

function EscaladorEditor({ config, onChange }: EditorProps) {
  const cfg = config ?? emptyConfig();

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
          <label className="block text-xs font-medium text-slate-600 mb-1">Título</label>
          <input
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
            value={cfg.titulo}
            placeholder="Nombre de la receta"
            onChange={(e) => update({ titulo: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">Descripción (opcional)</label>
          <input
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
            value={cfg.descripcion ?? ""}
            placeholder="Descripción breve"
            onChange={(e) => update({ descripcion: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">Porciones base</label>
          <input
            type="number"
            min={1}
            className="w-32 rounded-md border border-slate-300 px-3 py-2 text-sm"
            value={cfg.porcionesBase}
            onChange={(e) => update({ porcionesBase: Number(e.target.value) })}
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">Ingredientes</span>
          <button
            type="button"
            className="text-xs text-indigo-600 hover:underline"
            onClick={addIngrediente}
          >
            + Agregar
          </button>
        </div>
        <div className="space-y-2">
          {cfg.ingredientes.map((ing) => (
            <div key={ing.id} className="flex gap-2 items-center">
              <input
                className="flex-1 rounded-md border border-slate-300 px-2 py-1.5 text-sm"
                placeholder="Nombre"
                value={ing.nombre}
                onChange={(e) => updateIngrediente(ing.id, { nombre: e.target.value })}
              />
              <input
                type="number"
                min={0}
                step={0.01}
                className="w-20 rounded-md border border-slate-300 px-2 py-1.5 text-sm"
                placeholder="Cant."
                value={ing.cantidadBase}
                onChange={(e) => updateIngrediente(ing.id, { cantidadBase: Number(e.target.value) })}
              />
              <input
                className="w-20 rounded-md border border-slate-300 px-2 py-1.5 text-sm"
                placeholder="Unidad"
                value={ing.unidad}
                onChange={(e) => updateIngrediente(ing.id, { unidad: e.target.value })}
              />
              <button
                type="button"
                className="text-red-400 hover:text-red-600 text-xs"
                onClick={() => removeIngrediente(ing.id)}
              >
                ✕
              </button>
            </div>
          ))}
          {cfg.ingredientes.length === 0 && (
            <p className="text-xs text-slate-400 italic">Sin ingredientes</p>
          )}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">Pasos</span>
          <button type="button" className="text-xs text-indigo-600 hover:underline" onClick={addPaso}>
            + Agregar
          </button>
        </div>
        <div className="space-y-2">
          {cfg.pasos.map((paso, i) => (
            <div key={i} className="flex gap-2 items-start">
              <span className="text-xs text-slate-400 mt-2 w-5 text-right shrink-0">{i + 1}.</span>
              <textarea
                className="flex-1 rounded-md border border-slate-300 px-2 py-1.5 text-sm resize-none"
                rows={2}
                value={paso}
                placeholder="Descripción del paso"
                onChange={(e) => updatePaso(i, e.target.value)}
              />
              <button
                type="button"
                className="text-red-400 hover:text-red-600 text-xs mt-2"
                onClick={() => removePaso(i)}
              >
                ✕
              </button>
            </div>
          ))}
          {cfg.pasos.length === 0 && (
            <p className="text-xs text-slate-400 italic">Sin pasos</p>
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
