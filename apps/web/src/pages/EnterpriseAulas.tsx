import { useEffect, useState } from "react";
import { useAuth } from "../auth/use-auth";
import type { Classroom } from "../domain/classroom/classroom.types";
import { fetchEnterpriseAulas } from "../services/enterprise";

const ACCESS_LABELS: Record<Classroom["accessType"], string> = {
  publica: "Pública",
  privada: "Privada",
};

const STATUS_LABELS: Record<Classroom["status"], string> = {
  activa: "Activa",
  archivada: "Archivada",
};

export default function EnterpriseAulas() {
  const { user } = useAuth();
  const [aulas, setAulas] = useState<Classroom[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    fetchEnterpriseAulas()
      .then((data) => {
        if (!active) return;
        setAulas(data.items ?? []);
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
  }, [user?.id]);

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-slate-900">Aulas</h1>
        <p className="text-base text-slate-600">
          Administra las aulas activas de tu institución y revisa su estado actual.
        </p>
      </header>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-lg font-semibold text-slate-900">Listado de aulas</h2>
          <span className="text-sm text-slate-500">{aulas.length} aulas</span>
        </div>
        <div className="mt-4 space-y-3">
          {loading && <p className="text-sm text-slate-500">Cargando aulas...</p>}
          {error && <p className="text-sm text-red-500">Error: {error}</p>}
          {!loading &&
            !error &&
            aulas.map((aula) => (
              <div
                key={aula.id}
                className="flex flex-wrap items-start justify-between gap-3 rounded-xl border border-slate-100 px-4 py-3"
              >
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-slate-900">{aula.name}</p>
                  <p className="text-xs text-slate-500">{aula.description}</p>
                  <div className="flex flex-wrap gap-2 text-xs text-slate-500">
                    <span>Acceso: {ACCESS_LABELS[aula.accessType]}</span>
                    <span>Docentes: {aula.teacherIds?.length ?? 0}</span>
                  </div>
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                  {STATUS_LABELS[aula.status]}
                </span>
              </div>
            ))}
          {!loading && !error && aulas.length === 0 && (
            <p className="text-sm text-slate-500">No hay aulas registradas.</p>
          )}
        </div>
      </section>
    </main>
  );
}
