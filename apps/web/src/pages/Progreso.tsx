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
        <h1 className="text-3xl font-bold text-[var(--c-text)]">Progreso del estudiante</h1>
        <p className="text-base text-[var(--c-muted)]">
          Revisa tu avance por módulos y detecta las áreas donde necesitas reforzar contenidos.
        </p>
      </header>

      <section className="flex flex-col gap-3">
        {loading && <p className="text-sm text-[var(--c-muted)] animate-pulse">Cargando avances...</p>}
        {error && <p className="text-sm text-[var(--c-danger)]">Error: {error}</p>}
        {!loading &&
          !error &&
          data?.avances.map((avance) => (
            <article
              key={avance.id}
              className="rounded-2xl border border-[var(--c-border)] bg-[var(--c-surface)] p-5 shadow-sm"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-semibold text-[var(--c-text)]">
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
          <p className="text-sm text-[var(--c-muted)]">No hay avances registrados.</p>
        )}
      </section>

      {!loading && !error && data?.sugerencia && (
        <div className="rounded-2xl border border-[var(--c-border)] bg-[var(--c-surface)] p-5">
          <p className="text-sm font-semibold text-[var(--c-primary)]">
            {data.sugerencia.titulo}
          </p>
          <p className="mt-1 text-sm text-[var(--c-muted)]">
            {data.sugerencia.mensaje}
          </p>
        </div>
      )}
    </main>
  );
}
