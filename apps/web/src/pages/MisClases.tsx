import { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { apiGet, apiPost } from "../lib/api";
import type { Classroom } from "../domain/classroom/classroom.types";
import {
  normalizeClassroomStatus,
  getClassroomStatusLabel,
} from "../domain/classroom/classroom.types";
import { getAulaId } from "../lib/aula-id";
import { useI18n } from "../i18n/I18nContext";

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
  const { t } = useI18n();
  const [aulas, setAulas] = useState<Classroom[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filtro, setFiltro] = useState<"todas" | "activas" | "archivadas">("todas");

  const [codigo, setCodigo] = useState("");
  const [joinMsg, setJoinMsg] = useState<string | null>(null);
  const [joining, setJoining] = useState(false);

  const fetchAulas = useCallback(() => {
    setLoading(true);
    apiGet<AulasResponse>("/api/aulas")
      .then((data) => { setAulas(data.items ?? []); })
      .catch(() => { setError("No se pudieron cargar tus aulas."); })
      .finally(() => { setLoading(false); });
  }, []);

  useEffect(() => {
    fetchAulas();
  }, [fetchAulas]);

  const handleJoin = async () => {
    if (!codigo.trim()) return;
    setJoining(true);
    setJoinMsg(null);
    try {
      await apiPost("/api/aulas/unirse", { codigo: codigo.trim() });
      setJoinMsg("✓ Te uniste al aula correctamente.");
      setCodigo("");
      fetchAulas();
    } catch (err) {
      setJoinMsg(err instanceof Error ? err.message : "Código inválido o aula no encontrada.");
    } finally {
      setJoining(false);
    }
  };

  const aulasFiltradas = useMemo(() => {
    if (filtro === "todas") return aulas;
    if (filtro === "activas")
      return aulas.filter((a) => normalizeClassroomStatus(a.status) === "ACTIVE");
    return aulas.filter((a) => normalizeClassroomStatus(a.status) === "ARCHIVED");
  }, [aulas, filtro]);

  return (
    <div className="page-root min-h-screen bg-[var(--c-bg)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-5">

        {/* Encabezado */}
        <div>
          <h1 className="text-2xl font-semibold text-[var(--c-text)]">{t("misClases.misClases")}</h1>
          <p className="text-sm text-[var(--c-muted)] mt-1">{t("misClases.seleccionaUnAulaParaVer")}</p>
        </div>

        {/* Unirse con código — FIX-TEST4-ALU-01 — antes el input
            estaba arriba pero no se resaltaba cuando el usuario
            no tenía aulas. Ahora: si aulas.length === 0, el
            bloque se vuelve un callout prominente con borde
            primario y foco automático. */}
        <div className={`rounded-xl border-2 p-4 flex flex-wrap items-center gap-2 ${
          aulas.length === 0
            ? "border-[var(--c-primary)] bg-[color-mix(in_srgb,var(--c-primary)_5%,transparent)]"
            : "border-[var(--c-border)] bg-[var(--c-surface)]"
        }`}>
          <label className="text-xs font-medium text-[var(--c-text)] flex-1 min-w-[180px]">
            {aulas.length === 0
              ? "¿Tenés un código de clase? Uníte ahora:"
              : "Unirse a otra aula con código:"}
          </label>
          <input
            type="text"
            placeholder={t("misClases.codigoDeAula")}
            value={codigo}
            onChange={(e) => setCodigo(e.target.value.toUpperCase())}
            onKeyDown={(e) => { if (e.key === "Enter") void handleJoin(); }}
            className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)] uppercase tracking-widest w-36"
            maxLength={8}
            autoFocus={aulas.length === 0}
            aria-label={t("misClases.codigoDeAula")}
          />
          <button
            onClick={() => void handleJoin()}
            disabled={joining || !codigo.trim()}
            className="rounded-xl bg-[var(--c-primary)] px-4 py-2 text-sm font-semibold text-white hover:opacity-90 disabled:opacity-50 transition-opacity"
          >
            {joining ? "Uniéndose..." : "Unirse"}
          </button>
          {joinMsg && (
            <p className={`text-xs w-full ${
              joinMsg.startsWith("✓") ? "text-[var(--c-success)]" : "text-[var(--c-danger)]"
            }`}>
              {joinMsg}
            </p>
          )}
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
            <p className="text-sm font-medium text-[var(--c-muted)]">{t("misClases.todaviaNoEstasEnNinguna")}</p>
            <p className="text-xs text-[var(--c-muted)] mt-1">{t("misClases.pedileATuProfesorEl")}</p>
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
