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
    if (!schoolId) {
      setError('Tu cuenta no tiene una escuela asignada. Contactá al administrador.');
      setLoading(false);
      return;
    }
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
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-4">
      <div>
        <h1 className="text-xl font-semibold text-[var(--c-text)]">Aulas</h1>
        <p className="text-sm text-[var(--c-muted)] mt-0.5">Aulas activas de tu institución.</p>
      </div>

      {error && (
        <div className="rounded-xl border border-[color-mix(in_srgb,var(--c-danger)_25%,transparent)] bg-[color-mix(in_srgb,var(--c-danger)_8%,transparent)] px-4 py-3 text-sm text-[var(--c-danger)]">
          {error}
        </div>
      )}

      <div className="bg-[var(--c-surface)] border border-[var(--c-border)] rounded-xl overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--c-border)]">
          <p className="text-sm font-semibold text-[var(--c-text)]">
            {loading ? 'Cargando...' : `${aulas.length} aulas`}
          </p>
        </div>

        {loading && (
          <div className="p-4 space-y-2">
            {[1,2,3].map(i => <div key={i} className="h-14 rounded-xl animate-pulse bg-[var(--c-border)]" />)}
          </div>
        )}

        {!loading && !error && aulas.length === 0 && (
          <div className="px-4 py-10 text-center">
            <p className="text-sm text-[var(--c-muted)]">No hay aulas registradas.</p>
          </div>
        )}

        {!loading && !error && aulas.map((aula) => (
          <div
            key={getAulaId(aula)}
            className="flex items-center justify-between gap-3 px-4 py-3 border-b border-[var(--c-border)] last:border-0 hover:bg-[var(--c-bg)] transition-colors"
          >
            <div className="min-w-0">
              <p className="text-sm font-medium text-[var(--c-text)] truncate">{aula.name}</p>
              {aula.description && (
                <p className="text-xs text-[var(--c-muted)] truncate mt-0.5">{aula.description}</p>
              )}
              <p className="text-[10px] text-[var(--c-muted)] mt-0.5">
                {ACCESS_LABELS[aula.accessType]} · {aula.teacherIds?.length ?? 0} docente{(aula.teacherIds?.length ?? 0) !== 1 ? 's' : ''}
              </p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                aula.status === 'ACTIVE' || aula.status === 'activa'
                  ? 'bg-[color-mix(in_srgb,var(--c-success)_12%,transparent)] text-[var(--c-success)]'
                  : 'bg-[color-mix(in_srgb,var(--c-muted)_12%,transparent)] text-[var(--c-muted)]'
              }`}>
                {getClassroomStatusLabel(aula.status)}
              </span>
              <Link
                to={`/clases?id=${getAulaId(aula)}`}
                className="rounded-lg border border-[var(--c-border)] px-3 py-1 text-xs font-medium text-[var(--c-primary)] hover:bg-[var(--c-bg)] transition-colors"
              >
                Ver →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
