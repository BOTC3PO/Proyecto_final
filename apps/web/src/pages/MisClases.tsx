import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { apiGet } from "../lib/api";
import type { Classroom } from "../domain/classroom/classroom.types";
import {
  normalizeClassroomStatus,
  getClassroomStatusLabel,
} from "../domain/classroom/classroom.types";
import { getAulaId } from "../lib/aula-id";

type AulasResponse = { items: Classroom[] };

function StatusBadge({ status }: { status: Classroom["status"] }) {
  const normalized = normalizeClassroomStatus(status);
  const styles = {
    ACTIVE:   "bg-[color-mix(in_srgb,var(--c-success)_12%,transparent)] text-[var(--c-success)]",
    ARCHIVED: "bg-[color-mix(in_srgb,var(--c-muted)_15%,transparent)] text-[var(--c-muted)]",
    LOCKED:   "bg-[color-mix(in_srgb,var(--c-warning)_12%,transparent)] text-[var(--c-warning)]",
  };
  const cls = normalized ? styles[normalized] : styles.ARCHIVED;
  return (
    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${cls}`}>
      {getClassroomStatusLabel(status)}
    </span>
  );
}

export default function MisClases() {
  const [aulas, setAulas] = useState<Classroom[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filtro, setFiltro] = useState<"todas" | "activas" | "archivadas">("todas");

  useEffect(() => {
    let active = true;
    apiGet<AulasResponse>("/api/aulas")
      .then((data) => {
        if (!active) return;
        setAulas(data.items ?? []);
      })
      .catch(() => {
        if (!active) return;
        setError("No se pudieron cargar tus aulas.");
      })
      .finally(() => { if (!active) return; setLoading(false); });
    return () => { active = false; };
  }, []);

  const aulasFiltradas = useMemo(() => {
    if (filtro === "todas") return aulas;
    if (filtro === "activas")
      return aulas.filter((a) => normalizeClassroomStatus(a.status) === "ACTIVE");
    return aulas.filter((a) => normalizeClassroomStatus(a.status) === "ARCHIVED");
  }, [aulas, filtro]);

  return (
    <div className="min-h-screen bg-[var(--c-bg)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-5">

        {/* Encabezado */}
        <div>
          <h1 className="text-2xl font-semibold text-[var(--c-text)]">Mis clases</h1>
          <p className="text-sm text-[var(--c-muted)] mt-1">
            Seleccioná un aula para ver su contenido.
          </p>
        </div>

        {/* Tabs de filtro */}
        <div className="flex gap-1 border-b border-[var(--c-border)]">
          {(["todas", "activas", "archivadas"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFiltro(tab)}
              className={`px-4 py-2 text-sm font-medium capitalize border-b-2 transition-colors ${
                filtro === tab
                  ? "border-[var(--c-primary)] text-[var(--c-primary)]"
                  : "border-transparent text-[var(--c-muted)] hover:text-[var(--c-text)]"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Estados de carga y error */}
        {loading && (
          <div className="grid gap-3 sm:grid-cols-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-28 rounded-xl bg-[var(--c-surface)] border border-[var(--c-border)] animate-pulse"
              />
            ))}
          </div>
        )}

        {error && (
          <p className="text-sm text-[var(--c-danger)]">{error}</p>
        )}

        {/* Estado vacío */}
        {!loading && !error && aulas.length === 0 && (
          <div className="rounded-xl border border-dashed border-[var(--c-border)] p-12 text-center">
            <p className="text-sm font-medium text-[var(--c-muted)]">
              Todavía no estás en ninguna aula.
            </p>
            <p className="text-xs text-[var(--c-muted)] mt-1">
              Pedile a tu profesor el código de acceso.
            </p>
          </div>
        )}

        {/* Sin resultados para el filtro */}
        {!loading && !error && aulas.length > 0 && aulasFiltradas.length === 0 && (
          <div className="rounded-xl border border-dashed border-[var(--c-border)] p-10 text-center">
            <p className="text-sm text-[var(--c-muted)]">
              No hay aulas {filtro === "activas" ? "activas" : "archivadas"}.
            </p>
          </div>
        )}

        {/* Grilla de aulas */}
        {!loading && !error && aulasFiltradas.length > 0 && (
          <div className="grid gap-3 sm:grid-cols-2">
            {aulasFiltradas.map((aula) => {
              const normalized = normalizeClassroomStatus(aula.status);
              const isArchived = normalized === "ARCHIVED";
              return (
                <Link
                  key={getAulaId(aula)}
                  to={`/clases/${getAulaId(aula)}`}
                  className={`group rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-4 transition-all hover:border-[var(--c-primary)] hover:shadow-sm ${
                    isArchived ? "opacity-60" : ""
                  }`}
                >
                  {/* Fila superior: badge + flecha */}
                  <div className="flex items-center justify-between mb-2.5">
                    <StatusBadge status={aula.status} />
                    <span className="text-[var(--c-muted)] group-hover:text-[var(--c-primary)] transition-colors text-sm">
                      →
                    </span>
                  </div>

                  {/* Nombre */}
                  <p className="font-semibold text-[var(--c-text)] group-hover:text-[var(--c-primary)] transition-colors truncate">
                    {aula.name}
                  </p>

                  {/* Descripción */}
                  {aula.description && (
                    <p className="text-xs text-[var(--c-muted)] mt-1 line-clamp-2 leading-relaxed">
                      {aula.description}
                    </p>
                  )}

                  {/* Footer: categoría + alumnos */}
                  <div className="flex items-center gap-3 mt-3 pt-3 border-t border-[var(--c-border)]">
                    {aula.category && (
                      <span className="text-[10px] font-medium text-[var(--c-muted)] uppercase tracking-wide">
                        {aula.category}
                      </span>
                    )}
                    {aula.members && (
                      <span className="text-[10px] text-[var(--c-muted)] ml-auto">
                        {aula.members.filter((m) => m.roleInClass === "STUDENT").length} alumnos
                      </span>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
}
