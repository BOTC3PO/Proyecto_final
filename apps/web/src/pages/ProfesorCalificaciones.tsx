import { useEffect, useState } from "react";
import { fetchProfesorCalificaciones, type ProfesorCalificacionResumen } from "../services/profesor";

export default function ProfesorCalificaciones() {
  const [evaluaciones, setEvaluaciones] = useState<ProfesorCalificacionResumen[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    fetchProfesorCalificaciones()
      .then((data) => {
        if (!active) return;
        setEvaluaciones(data);
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

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-slate-900">Calificaciones</h1>
        <p className="text-base text-slate-600">
          Da seguimiento a entregas pendientes y comparte retroalimentación oportuna.
        </p>
      </header>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900">Entregas por grupo</h2>
        <div className="mt-4 space-y-3">
          {loading && <p className="text-sm text-slate-500">Cargando entregas...</p>}
          {error && <p className="text-sm text-red-500">Error: {error}</p>}
          {!loading &&
            !error &&
            evaluaciones.map((item) => (
              <div
                key={item.id}
                className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-100 px-4 py-3"
              >
                <div>
                  <p className="text-sm font-semibold text-slate-900">{item.grupo}</p>
                  <p className="text-xs text-slate-500">Última entrega: {item.ultimaEntrega}</p>
                </div>
                <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                  {item.pendientes} pendientes
                </span>
              </div>
            ))}
          {!loading && !error && evaluaciones.length === 0 && (
            <p className="text-sm text-slate-500">No hay entregas registradas.</p>
          )}
        </div>
      </section>
    </main>
  );
}
