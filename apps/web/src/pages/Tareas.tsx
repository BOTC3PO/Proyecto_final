import { useEffect, useMemo, useState } from "react";
import { fetchTareas, type TareaResumen } from "../services/tareas";

function TareaCard({ tarea }: { tarea: TareaResumen }) {
  const vence = new Date(tarea.vence);
  const hoy = new Date(); hoy.setHours(23, 59, 59, 0);
  const finSemana = new Date(hoy); finSemana.setDate(finSemana.getDate() + 7);
  const urgente = vence <= hoy;
  const estaSemana = !urgente && vence <= finSemana;

  const dotColor  = urgente ? "bg-[var(--c-danger)]" : estaSemana ? "bg-[var(--c-warning)]" : "bg-[var(--c-success)]";
  const badgeCls  = urgente
    ? "bg-[color-mix(in_srgb,var(--c-danger)_12%,transparent)] text-[var(--c-danger)]"
    : estaSemana
    ? "bg-[color-mix(in_srgb,var(--c-warning)_12%,transparent)] text-[var(--c-warning)]"
    : "bg-[color-mix(in_srgb,var(--c-success)_12%,transparent)] text-[var(--c-success)]";
  const badgeLabel = urgente ? "Urgente" : estaSemana ? "Esta semana" : "Sin urgencia";

  return (
    <div className="flex items-center gap-3 rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] px-4 py-3">
      <div className={`w-2 h-2 rounded-full flex-shrink-0 ${dotColor}`} />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-[var(--c-text)] truncate">{tarea.titulo}</p>
        <p className="text-xs text-[var(--c-muted)] mt-0.5">{tarea.curso}</p>
      </div>
      <div className="flex items-center gap-2 flex-shrink-0">
        <span className="text-xs text-[var(--c-muted)]">
          {new Date(tarea.vence).toLocaleDateString("es-AR", { day: "numeric", month: "short" })}
        </span>
        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${badgeCls}`}>
          {badgeLabel}
        </span>
      </div>
    </div>
  );
}

export default function Tareas() {
  const [tareas, setTareas] = useState<TareaResumen[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filtro, setFiltro] = useState<"todas" | "urgentes" | "esta-semana">("todas");

  useEffect(() => {
    let active = true;
    fetchTareas()
      .then((data) => {
        if (!active) return;
        setTareas(data);
        setError(null);
      })
      .catch((err: Error) => {
        if (!active) return;
        setError(err.message);
      })
      .finally(() => {
        if (!active) return;
        setLoading(false);
      });
    return () => {
      active = false;
    };
  }, []);

  const tareasFiltradas = useMemo(() => {
    const hoy = new Date(); hoy.setHours(23, 59, 59, 0);
    const finSemana = new Date(hoy); finSemana.setDate(finSemana.getDate() + 7);
    if (filtro === "urgentes")
      return tareas.filter((t) => new Date(t.vence) <= hoy);
    if (filtro === "esta-semana")
      return tareas.filter((t) => {
        const v = new Date(t.vence);
        return v > hoy && v <= finSemana;
      });
    return tareas;
  }, [tareas, filtro]);

  const urgentesCount = useMemo(() => {
    const hoy = new Date(); hoy.setHours(23, 59, 59, 0);
    return tareas.filter((t) => new Date(t.vence) <= hoy).length;
  }, [tareas]);

  return (
    <div className="page-root min-h-screen bg-[var(--c-bg)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-5">

        {/* Encabezado */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold text-[var(--c-text)]">Tareas pendientes</h1>
            <p className="text-sm text-[var(--c-muted)] mt-1">
              Actividades asignadas por tus profesores.
            </p>
          </div>
          {urgentesCount > 0 && (
            <div className="flex items-center gap-1.5 rounded-full bg-[color-mix(in_srgb,var(--c-danger)_12%,transparent)] border border-[color-mix(in_srgb,var(--c-danger)_20%,transparent)] px-3 py-1.5 flex-shrink-0">
              <span className="text-xs font-semibold text-[var(--c-danger)]">
                {urgentesCount} {urgentesCount === 1 ? "vence hoy" : "vencen hoy"}
              </span>
            </div>
          )}
        </div>

        {/* Tabs filtro */}
        <div className="flex gap-1 border-b border-[var(--c-border)]">
          {([
            { key: "todas",       label: "Todas" },
            { key: "urgentes",    label: "Urgentes" },
            { key: "esta-semana", label: "Esta semana" },
          ] as const).map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setFiltro(key)}
              className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                filtro === key
                  ? "border-[var(--c-primary)] text-[var(--c-primary)]"
                  : "border-transparent text-[var(--c-muted)] hover:text-[var(--c-text)]"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Estados */}
        {loading && (
          <div className="space-y-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-14 rounded-xl bg-[var(--c-surface)] border border-[var(--c-border)] animate-pulse" />
            ))}
          </div>
        )}

        {error && <p className="text-sm text-[var(--c-danger)]">Error: {error}</p>}

        {!loading && !error && tareas.length === 0 && (
          <div className="rounded-xl border border-dashed border-[var(--c-border)] p-12 text-center">
            <p className="text-sm font-medium text-[var(--c-muted)]">No hay tareas pendientes.</p>
          </div>
        )}

        {!loading && !error && tareas.length > 0 && tareasFiltradas.length === 0 && (
          <div className="rounded-xl border border-dashed border-[var(--c-border)] p-10 text-center">
            <p className="text-sm text-[var(--c-muted)]">
              No hay tareas en este filtro.
            </p>
          </div>
        )}

        {/* Lista */}
        {!loading && !error && tareasFiltradas.length > 0 && (
          <div className="space-y-2">
            {tareasFiltradas.map((tarea) => (
              <TareaCard key={tarea.id} tarea={tarea} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
