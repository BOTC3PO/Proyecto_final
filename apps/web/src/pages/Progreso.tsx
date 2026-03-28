import { useEffect, useState } from "react";
import { fetchProgresoEstudiante, type ProgresoEstudianteResponse } from "../services/progreso";

export default function Progreso() {
  const [data, setData] = useState<ProgresoEstudianteResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    fetchProgresoEstudiante()
      .then((response) => {
        if (!active) return;
        setData(response);
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
        <h1 className="text-3xl font-bold text-slate-900">Progreso del estudiante</h1>
        <p className="text-base text-slate-600">
          Revisa tu avance por módulos y detecta las áreas donde necesitas reforzar contenidos.
        </p>
      </header>

      <section className="flex flex-col gap-3">
        {loading && <p className="text-sm text-slate-500 animate-pulse">Cargando avances...</p>}
        {error && <p className="text-sm text-red-500">Error: {error}</p>}
        {!loading &&
          !error &&
          data?.avances.map((avance) => (
            <article
              key={avance.id}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-semibold text-slate-900">
                  {avance.modulo}
                </p>
                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  avance.progreso === "100%"
                    ? "bg-emerald-100 text-emerald-700"
                    : avance.progreso === "En progreso"
                    ? "bg-amber-100 text-amber-700"
                    : "bg-slate-100 text-slate-500"
                }`}>
                  {avance.progreso}
                </span>
              </div>
            </article>
          ))}
        {!loading && !error && (!data || data.avances.length === 0) && (
          <p className="text-sm text-slate-500">No hay avances registrados.</p>
        )}
      </section>

      {!loading && !error && data?.sugerencia && (
        <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
          <p className="text-sm font-semibold text-blue-800">
            {data.sugerencia.titulo}
          </p>
          <p className="mt-1 text-sm text-blue-700">
            {data.sugerencia.mensaje}
          </p>
        </div>
      )}
    </main>
  );
}
