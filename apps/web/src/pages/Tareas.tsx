import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { fetchTareas, type TareaResumen } from "../services/tareas";
import { useI18n } from "../i18n/I18nContext";

/** Fecha límite como Date (null si la tarea no tiene). `vence` viene formateada para mostrar; se usa `venceIso`. */
const fechaVence = (t: TareaResumen) => (t.venceIso ? new Date(t.venceIso) : null);

function TareaCard({ tarea }: { tarea: TareaResumen }) {
  const { t, lang } = useI18n();
  const vence = fechaVence(tarea);
  const hoy = new Date(); hoy.setHours(23, 59, 59, 0);
  const finSemana = new Date(hoy); finSemana.setDate(finSemana.getDate() + 7);
  const urgente = vence !== null && vence <= hoy;
  const estaSemana = vence !== null && !urgente && vence <= finSemana;

  const dotColor  = urgente ? "bg-[var(--c-danger)]" : estaSemana ? "bg-[var(--c-warning)]" : "bg-[var(--c-success)]";
  const badgeCls  = urgente
    ? "bg-[color-mix(in_srgb,var(--c-danger)_12%,transparent)] text-[var(--c-danger)]"
    : estaSemana
    ? "bg-[color-mix(in_srgb,var(--c-warning)_12%,transparent)] text-[var(--c-warning)]"
    : "bg-[color-mix(in_srgb,var(--c-success)_12%,transparent)] text-[var(--c-success)]";
  const badgeLabel = urgente ? t("tareas.urgente") : estaSemana ? t("tareas.estaSemana") : t("tareas.sinUrgencia");

  return (
    <Link to={`/tareas/${tarea.id}`} className="flex items-center gap-3 rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] px-4 py-3 hover:border-[var(--c-primary)]">
      <div className={`w-2 h-2 rounded-full flex-shrink-0 ${dotColor}`} />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-[var(--c-text)] truncate">{tarea.titulo}</p>
        <p className="text-xs text-[var(--c-muted)] mt-0.5">{tarea.curso}</p>
      </div>
      <div className="flex items-center gap-2 flex-shrink-0">
        <span className="text-xs text-[var(--c-muted)]">
          {vence ? vence.toLocaleDateString(lang, { day: "numeric", month: "short" }) : t("tareas.sinFecha")}
        </span>
        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${badgeCls}`}>
          {badgeLabel}
        </span>
      </div>
    </Link>
  );
}

export default function Tareas() {
  const { t } = useI18n();
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
      return tareas.filter((t) => { const v = fechaVence(t); return v !== null && v <= hoy; });
    if (filtro === "esta-semana")
      return tareas.filter((t) => {
        const v = fechaVence(t);
        return v !== null && v > hoy && v <= finSemana;
      });
    return tareas;
  }, [tareas, filtro]);

  const urgentesCount = useMemo(() => {
    const hoy = new Date(); hoy.setHours(23, 59, 59, 0);
    return tareas.filter((t) => { const v = fechaVence(t); return v !== null && v <= hoy; }).length;
  }, [tareas]);

  return (
    <div className="page-root min-h-screen bg-[var(--c-bg)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-5">

        {/* Encabezado */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold text-[var(--c-text)]">{t("tareas.tareasPendientes")}</h1>
            <p className="text-sm text-[var(--c-muted)] mt-1">{t("tareas.actividadesAsignadasPorTusProfesores")}</p>
          </div>
          {urgentesCount > 0 && (
            <div className="flex items-center gap-1.5 rounded-full bg-[color-mix(in_srgb,var(--c-danger)_12%,transparent)] border border-[color-mix(in_srgb,var(--c-danger)_20%,transparent)] px-3 py-1.5 flex-shrink-0">
              <span className="text-xs font-semibold text-[var(--c-danger)]">
                {urgentesCount} {urgentesCount === 1 ? t("tareas.venceHoy") : t("tareas.vencenHoy")}
              </span>
            </div>
          )}
        </div>

        {/* Tabs filtro */}
        <div className="flex gap-1 border-b border-[var(--c-border)]">
          {([
            { key: "todas",       label: t("comun.todas") },
            { key: "urgentes",    label: t("tareas.urgentes") },
            { key: "esta-semana", label: t("tareas.estaSemana") },
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
            <p className="text-sm font-medium text-[var(--c-muted)]">{t("tareas.noHayTareasPendientes")}</p>
          </div>
        )}

        {!loading && !error && tareas.length > 0 && tareasFiltradas.length === 0 && (
          <div className="rounded-xl border border-dashed border-[var(--c-border)] p-10 text-center">
            <p className="text-sm text-[var(--c-muted)]">{t("tareas.noHayTareasEnEste")}</p>
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
