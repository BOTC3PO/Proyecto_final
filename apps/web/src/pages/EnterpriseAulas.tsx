import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/use-auth";
import type { Classroom } from "../domain/classroom/classroom.types";
import { getClassroomStatusLabel } from "../domain/classroom/classroom.types";
import { fetchEnterpriseAulas } from "../services/enterprise";
import { getAulaId } from "../lib/aula-id";

const ACCESS_LABELS: Record<Classroom["accessType"], string> = {
  publica: "Pública", privada: "Privada",
};

export default function EnterpriseAulas() {
  const { user } = useAuth();
  const schoolId = user?.schoolId ?? "";
  const [aulas, setAulas] = useState<Classroom[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!schoolId) return;
    let active = true;
    fetchEnterpriseAulas(schoolId)
      .then((data) => {
        if (!active) return;
        setAulas(data.items ?? []);
      })
      .catch((err: Error) => {
        if (!active) return;
        setError(err.message);
      })
      .finally(() => { if (!active) return; setLoading(false); });
    return () => { active = false; };
  }, [schoolId]);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-5">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold text-[var(--c-text)]">Aulas</h1>
          <p className="text-base text-[var(--c-muted)]">
            Aulas activas de tu institución.
          </p>
        </header>
        <section className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-6 shadow-sm">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-lg font-semibold text-[var(--c-text)]">
              Listado — {aulas.length} aulas
            </h2>
          </div>
          <div className="mt-4 space-y-3">
            {loading && <p className="text-sm text-[var(--c-muted)] animate-pulse">Cargando aulas...</p>}
            {error && <p className="text-sm text-[var(--c-danger)]">Error: {error}</p>}
            {!loading && !error && aulas.length === 0 && (
              <p className="text-sm text-[var(--c-muted)]">No hay aulas registradas.</p>
            )}
            {!loading && !error && aulas.map((aula) => (
              <div key={getAulaId(aula)}
                className="flex flex-wrap items-start justify-between gap-3 rounded-xl border border-[var(--c-border)] px-4 py-3 hover:bg-[var(--c-bg)] transition-colors">
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-[var(--c-text)]">{aula.name}</p>
                  {aula.description && (
                    <p className="text-xs text-[var(--c-muted)] line-clamp-1">{aula.description}</p>
                  )}
                  <div className="flex flex-wrap gap-2 text-xs text-[var(--c-muted)]">
                    <span>Acceso: {ACCESS_LABELS[aula.accessType]}</span>
                    <span>Docentes: {aula.teacherIds?.length ?? 0}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-[var(--c-bg)] px-3 py-1 text-xs font-semibold text-[var(--c-muted)]">
                    {getClassroomStatusLabel(aula.status)}
                  </span>
                  <Link
                    to={`/clases?id=${getAulaId(aula)}`}
                    className="rounded-lg border border-[var(--c-border)] px-3 py-1 text-xs font-semibold text-[var(--c-text)] hover:bg-[var(--c-bg)] transition-colors"
                  >
                    Ver →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
  );
}
