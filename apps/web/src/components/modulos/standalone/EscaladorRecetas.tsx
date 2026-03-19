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

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-base font-semibold text-slate-800">{config.titulo}</h3>
        {config.descripcion && (
          <p className="text-sm text-slate-500 mt-1">{config.descripcion}</p>
        )}
      </div>

      <div className="space-y-1">
        <label className="text-xs font-medium text-slate-600">
          Multiplicador: <span className="font-bold text-slate-800">×{multiplier}</span>
          {config.porcionesBase > 0 && (
            <span className="text-slate-400 ml-1">
              ({Math.round(config.porcionesBase * multiplier * 10) / 10} porciones)
            </span>
          )}
        </label>
        <input
          type="range"
          min={0.5}
          max={20}
          step={0.5}
          value={multiplier}
          onChange={(e) => setMultiplier(Number(e.target.value))}
          className="w-full accent-indigo-600"
        />
        <div className="flex justify-between text-xs text-slate-400">
          <span>×0.5</span>
          <span>×10</span>
          <span>×20</span>
        </div>
      </div>

      {config.ingredientes.length > 0 && (
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">
            Ingredientes
          </h4>
          <ul className="divide-y divide-slate-100 border border-slate-100 rounded-lg overflow-hidden">
            {config.ingredientes.map((ing) => (
              <li key={ing.id} className="flex justify-between items-center px-3 py-2 text-sm bg-white">
                <span className="text-slate-700">{ing.nombre}</span>
                <span className="font-medium text-slate-900">
                  {formatAmount(ing.cantidadBase * multiplier)} {ing.unidad}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {config.pasos.length > 0 && (
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">
            Pasos
          </h4>
          <ol className="list-decimal list-inside space-y-1.5">
            {config.pasos.map((paso, i) => (
              <li key={i} className="text-sm text-slate-700">{paso}</li>
            ))}
          </ol>
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
