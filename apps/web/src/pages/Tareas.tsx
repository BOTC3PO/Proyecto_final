import { useEffect, useState } from "react";
import { fetchTareas, type TareaResumen } from "../services/tareas";

export default function Tareas() {
  const [tareas, setTareas] = useState<TareaResumen[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    fetchTareas()
      .then((data) => {
        if (!active) return;
        setTareas(data);
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
        <h1 className="text-3xl font-bold text-slate-900">Tareas pendientes</h1>
        <p className="text-base text-slate-600">
          Mantén tu progreso al día revisando las actividades asignadas por tus profesores.
        </p>
      </header>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900">Agenda de la semana</h2>
        <div className="mt-4 space-y-3">
          {loading && <p className="text-sm text-slate-500">Cargando tareas...</p>}
          {error && <p className="text-sm text-red-500">Error: {error}</p>}
          {!loading &&
            !error &&
            tareas.map((tarea) => (
              <div
                key={tarea.id}
                className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-100 px-4 py-3"
              >
                <div>
                  <p className="text-sm font-semibold text-slate-900">{tarea.titulo}</p>
                  <p className="text-xs text-slate-500">Curso: {tarea.curso}</p>
                </div>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  Vence: {tarea.vence}
                </span>
              </div>
            ))}
          {!loading && !error && tareas.length === 0 && (
            <p className="text-sm text-slate-500">No hay tareas pendientes.</p>
          )}
        </div>
      </section>
    </main>
  );
}
