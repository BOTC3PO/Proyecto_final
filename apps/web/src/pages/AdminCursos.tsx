import { useEffect, useState } from "react";
import { fetchAdminCursos, type AdminCurso } from "../services/admin";

export default function AdminCursos() {
  const [cursos, setCursos] = useState<AdminCurso[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    fetchAdminCursos()
      .then((data) => {
        if (!active) return;
        setCursos(data);
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
        <h1 className="text-3xl font-bold text-slate-900">Gestión de cursos</h1>
        <p className="text-base text-slate-600">
          Revisa la calidad del contenido, activa nuevas rutas y monitorea el impacto en los
          estudiantes.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        {loading && <p className="text-sm text-slate-500">Cargando cursos...</p>}
        {error && <p className="text-sm text-red-500">Error: {error}</p>}
        {!loading &&
          !error &&
          cursos.map((curso) => (
            <article
              key={curso.id}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <h2 className="text-lg font-semibold text-slate-900">{curso.titulo}</h2>
              <p className="mt-2 text-sm text-slate-500">Estado: {curso.estado}</p>
              <p className="mt-1 text-sm text-slate-500">
                Estudiantes activos: {curso.estudiantes}
              </p>
              <button className="mt-4 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-700">
                Ver detalles
              </button>
            </article>
          ))}
        {!loading && !error && cursos.length === 0 && (
          <p className="text-sm text-slate-500">No hay cursos registrados.</p>
        )}
      </section>
    </main>
  );
}
