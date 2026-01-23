import { useEffect, useState } from "react";
import { fetchProfesorAsistencia, type ProfesorAsistenciaResumen } from "../services/profesor";

export default function ProfesorAsistencia() {
  const [asistencias, setAsistencias] = useState<ProfesorAsistenciaResumen[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    fetchProfesorAsistencia()
      .then((data) => {
        if (!active) return;
        setAsistencias(data);
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
        <h1 className="text-3xl font-bold text-slate-900">Asistencia</h1>
        <p className="text-base text-slate-600">
          Controla la asistencia diaria y detecta rápidamente a los estudiantes con inasistencias.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        {loading && <p className="text-sm text-slate-500">Cargando asistencia...</p>}
        {error && <p className="text-sm text-red-500">Error: {error}</p>}
        {!loading &&
          !error &&
          asistencias.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <h2 className="text-lg font-semibold text-slate-900">{item.curso}</h2>
              <p className="mt-2 text-sm text-slate-500">Presentes hoy</p>
              <p className="mt-1 text-2xl font-semibold text-emerald-600">
                {item.presente}/{item.total}
              </p>
            </article>
          ))}
        {!loading && !error && asistencias.length === 0 && (
          <p className="text-sm text-slate-500">No hay datos de asistencia.</p>
        )}
      </section>
    </main>
  );
}
