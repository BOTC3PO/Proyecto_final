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

      <section className="grid gap-4 md:grid-cols-3">
        {loading && <p className="text-sm text-slate-500">Cargando avances...</p>}
        {error && <p className="text-sm text-red-500">Error: {error}</p>}
        {!loading &&
          !error &&
          data?.avances.map((avance) => (
            <article
              key={avance.id}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <h2 className="text-lg font-semibold text-slate-900">{avance.modulo}</h2>
              <p className="mt-2 text-sm text-slate-500">Avance total</p>
              <p className="mt-1 text-2xl font-semibold text-blue-600">{avance.progreso}</p>
            </article>
          ))}
        {!loading && !error && (!data || data.avances.length === 0) && (
          <p className="text-sm text-slate-500">No hay avances registrados.</p>
        )}
      </section>

      <section className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6">
        {loading && <p className="text-sm text-emerald-800">Cargando sugerencia...</p>}
        {error && <p className="text-sm text-red-500">Error: {error}</p>}
        {!loading && !error && data && (
          <>
            <h2 className="text-xl font-semibold text-emerald-900">{data.sugerencia.titulo}</h2>
            <p className="mt-2 text-sm text-emerald-800">{data.sugerencia.mensaje}</p>
          </>
        )}
      </section>
    </main>
  );
}
