import { type LineaTiempoConfig } from "./types";

// ── Alumno (readonly) ────────────────────────────────────────────────

type AlumnoProps = { config: LineaTiempoConfig };

function LineaTiempoAlumno({ config }: AlumnoProps) {
  return (
    <div className="space-y-3">
      {config.titulo && (
        <h3 className="text-base font-semibold text-slate-800">{config.titulo}</h3>
      )}
      <div className="relative pl-6">
        {/* Vertical line */}
        <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-slate-200" />
        <div className="space-y-4">
          {config.eventos.map((ev) => (
            <div key={ev.id} className="relative">
              {/* Dot */}
              <div className="absolute -left-4 mt-1.5 w-3 h-3 rounded-full bg-indigo-500 border-2 border-white shadow-sm" />
              <div className="bg-white rounded-lg border border-slate-200 p-3 shadow-sm">
                <div className="flex items-start justify-between gap-2 flex-wrap">
                  <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">
                    {ev.fecha}
                  </span>
                  {ev.tags && ev.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {ev.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <p className="text-sm font-semibold text-slate-800 mt-1">{ev.titulo}</p>
                {ev.descripcion && (
                  <p className="text-sm text-slate-600 mt-0.5">{ev.descripcion}</p>
                )}
              </div>
            </div>
          ))}
          {config.eventos.length === 0 && (
            <p className="text-sm text-slate-400 italic">Sin eventos</p>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Editor (docente) ─────────────────────────────────────────────────

type EditorProps = {
  config?: LineaTiempoConfig;
  onChange: (config: LineaTiempoConfig) => void;
};

function makeId() {
  return Math.random().toString(36).slice(2, 9);
}

function emptyConfig(): LineaTiempoConfig {
  return { tool: "linea-tiempo", titulo: "", eventos: [] };
}

type Evento = LineaTiempoConfig["eventos"][0];

function LineaTiempoEditor({ config, onChange }: EditorProps) {
  const cfg = config ?? emptyConfig();

  const update = (partial: Partial<LineaTiempoConfig>) => onChange({ ...cfg, ...partial });

  const addEvento = () =>
    update({
      eventos: [
        ...cfg.eventos,
        { id: makeId(), titulo: "", fecha: "", descripcion: "", tags: [] },
      ],
    });

  const removeEvento = (id: string) =>
    update({ eventos: cfg.eventos.filter((e) => e.id !== id) });

  const updateEvento = (id: string, fields: Partial<Evento>) =>
    update({ eventos: cfg.eventos.map((e) => (e.id === id ? { ...e, ...fields } : e)) });

  const moveUp = (idx: number) => {
    if (idx === 0) return;
    const arr = [...cfg.eventos];
    [arr[idx - 1], arr[idx]] = [arr[idx], arr[idx - 1]];
    update({ eventos: arr });
  };

  const moveDown = (idx: number) => {
    if (idx === cfg.eventos.length - 1) return;
    const arr = [...cfg.eventos];
    [arr[idx], arr[idx + 1]] = [arr[idx + 1], arr[idx]];
    update({ eventos: arr });
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-xs font-medium text-slate-600 mb-1">Título (opcional)</label>
        <input
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
          value={cfg.titulo ?? ""}
          placeholder="Título de la línea de tiempo"
          onChange={(e) => update({ titulo: e.target.value })}
        />
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">Eventos</span>
          <button type="button" className="text-xs text-indigo-600 hover:underline" onClick={addEvento}>
            + Agregar
          </button>
        </div>
        <div className="space-y-3">
          {cfg.eventos.map((ev, idx) => (
            <div key={ev.id} className="rounded-lg border border-slate-200 p-3 space-y-2 bg-slate-50">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400">Evento {idx + 1}</span>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    className="text-xs text-slate-400 hover:text-slate-700 px-1"
                    onClick={() => moveUp(idx)}
                    disabled={idx === 0}
                  >
                    ▲
                  </button>
                  <button
                    type="button"
                    className="text-xs text-slate-400 hover:text-slate-700 px-1"
                    onClick={() => moveDown(idx)}
                    disabled={idx === cfg.eventos.length - 1}
                  >
                    ▼
                  </button>
                  <button
                    type="button"
                    className="text-xs text-red-400 hover:text-red-600 px-1"
                    onClick={() => removeEvento(ev.id)}
                  >
                    ✕
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs text-slate-500 mb-0.5">Título</label>
                  <input
                    className="w-full rounded border border-slate-300 px-2 py-1.5 text-sm"
                    value={ev.titulo}
                    placeholder="Ej: Revolución Francesa"
                    onChange={(e) => updateEvento(ev.id, { titulo: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-0.5">Fecha</label>
                  <input
                    className="w-full rounded border border-slate-300 px-2 py-1.5 text-sm"
                    value={ev.fecha}
                    placeholder="Ej: 1789, Siglo XVIII"
                    onChange={(e) => updateEvento(ev.id, { fecha: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs text-slate-500 mb-0.5">Descripción (opcional)</label>
                <input
                  className="w-full rounded border border-slate-300 px-2 py-1.5 text-sm"
                  value={ev.descripcion ?? ""}
                  onChange={(e) => updateEvento(ev.id, { descripcion: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-xs text-slate-500 mb-0.5">
                  Tags (separados por coma)
                </label>
                <input
                  className="w-full rounded border border-slate-300 px-2 py-1.5 text-sm"
                  value={(ev.tags ?? []).join(", ")}
                  placeholder="Ej: política, guerra"
                  onChange={(e) =>
                    updateEvento(ev.id, {
                      tags: e.target.value
                        .split(",")
                        .map((t) => t.trim())
                        .filter(Boolean),
                    })
                  }
                />
              </div>
            </div>
          ))}
          {cfg.eventos.length === 0 && (
            <p className="text-xs text-slate-400 italic">Sin eventos</p>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Export ────────────────────────────────────────────────────────────

type Props =
  | { config: LineaTiempoConfig; onChange?: never }
  | { config?: LineaTiempoConfig; onChange: (config: LineaTiempoConfig) => void };

export function LineaTiempo({ config, onChange }: Props) {
  if (onChange !== undefined) {
    return <LineaTiempoEditor config={config} onChange={onChange} />;
  }
  if (!config) return null;
  return <LineaTiempoAlumno config={config} />;
}
