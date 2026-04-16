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
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-slate-900">Aulas</h1>
        <p className="text-base text-slate-600">
          Aulas activas de tu institución.
        </p>
      </header>
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-lg font-semibold text-slate-900">
            Listado — {aulas.length} aulas
          </h2>
        </div>
        <div className="mt-4 space-y-3">
          {loading && <p className="text-sm text-slate-400 animate-pulse">Cargando aulas...</p>}
          {error && <p className="text-sm text-red-500">Error: {error}</p>}
          {!loading && !error && aulas.length === 0 && (
            <p className="text-sm text-slate-500">No hay aulas registradas.</p>
          )}
          {!loading && !error && aulas.map((aula) => (
            <div key={getAulaId(aula)}
              className="flex flex-wrap items-start justify-between gap-3 rounded-xl border border-slate-100 px-4 py-3 hover:bg-slate-50 transition-colors">
              <div className="space-y-1">
                <p className="text-sm font-semibold text-slate-900">{aula.name}</p>
                {aula.description && (
                  <p className="text-xs text-slate-500 line-clamp-1">{aula.description}</p>
                )}
                <div className="flex flex-wrap gap-2 text-xs text-slate-400">
                  <span>Acceso: {ACCESS_LABELS[aula.accessType]}</span>
                  <span>Docentes: {aula.teacherIds?.length ?? 0}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                  {getClassroomStatusLabel(aula.status)}
                </span>
                <Link
                  to={`/clases?id=${getAulaId(aula)}`}
                  className="rounded-lg border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 hover:bg-white transition-colors"
                >
                  Ver →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
