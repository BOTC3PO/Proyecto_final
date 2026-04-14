import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiGet } from "../lib/api";
import type { Classroom } from "../domain/classroom/classroom.types";

type ClassroomListResponse = { items: Classroom[] };

export default function ProfesorCursos() {
  const [aulas, setAulas] = useState<Classroom[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mostrarArchivadas, setMostrarArchivadas] = useState(false);

  const aulasFiltradas = mostrarArchivadas
    ? aulas
    : aulas.filter((a) => {
        const status = (a as { status?: string }).status;
        const normalized = status?.toUpperCase();
        return !normalized || normalized === "ACTIVE" || normalized === "ACTIVA";
      });

  useEffect(() => {
    let active = true;
    apiGet<ClassroomListResponse>("/api/aulas")
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
  }, []);

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-10">
      <header className="flex flex-wrap items-start justify-between gap-3">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-slate-900">Mis cursos</h1>
          <p className="text-base text-slate-600">
            Administra los cursos que impartes, revisa la participación y crea nuevas rutas.
          </p>
        </div>
        <Link
          className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700"
          to="/profesor/aulas"
        >
          + Gestionar aulas
        </Link>
      </header>

      <label className="flex items-center gap-2 text-sm text-slate-500 cursor-pointer">
        <input
          type="checkbox"
          checked={mostrarArchivadas}
          onChange={(e) => setMostrarArchivadas(e.target.checked)}
          className="rounded"
        />
        Mostrar archivadas
      </label>

      <section className="grid gap-4 md:grid-cols-3">
        {loading && <p className="text-sm text-slate-500">Cargando cursos...</p>}
        {error && <p className="text-sm text-red-500">Error: {error}</p>}
        {!loading &&
          !error &&
          aulasFiltradas.map((aula) => {
            const aulaId = (aula as { _id?: string })._id ?? aula.id ?? "";
            return (
              <article
                key={aulaId}
                className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-sm ${
                  (aula as { status?: string }).status?.toUpperCase() === "ARCHIVED"
                    ? "opacity-50 border-dashed"
                    : ""
                }`}
              >
                <h2 className="text-lg font-semibold text-slate-900">{aula.name}</h2>
                {aula.category && (
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-blue-600">
                    {aula.category}
                  </p>
                )}
                {aula.description && (
                  <p className="mt-2 line-clamp-2 text-sm text-slate-500">{aula.description}</p>
                )}
                <Link
                  className="mt-4 inline-block rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                  to={`/clases/${aulaId}`}
                >
                  Ir al curso
                </Link>
              </article>
            );
          })}
        {!loading && !error && aulasFiltradas.length === 0 && (
          <p className="text-sm text-slate-500">No hay cursos asignados.</p>
        )}
      </section>
    </main>
  );
}
