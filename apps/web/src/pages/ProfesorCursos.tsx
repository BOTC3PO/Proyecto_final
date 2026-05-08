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
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-5">
        <header className="flex flex-wrap items-start justify-between gap-3">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-[var(--c-text)]">Mis cursos</h1>
            <p className="text-base text-[var(--c-muted)]">
              Administra los cursos que impartes, revisa la participación y crea nuevas rutas.
            </p>
          </div>
          <Link
            className="inline-flex items-center gap-2 rounded-full bg-[var(--c-primary)] px-4 py-2 text-sm font-semibold text-white shadow hover:opacity-90"
            to="/profesor/aulas"
          >
            + Gestionar aulas
          </Link>
        </header>

        <label className="flex items-center gap-2 text-sm text-[var(--c-muted)] cursor-pointer">
          <input
            type="checkbox"
            checked={mostrarArchivadas}
            onChange={(e) => setMostrarArchivadas(e.target.checked)}
            className="rounded"
          />
          Mostrar archivadas
        </label>

        <section className="grid gap-4 md:grid-cols-3">
          {loading && <p className="text-sm text-[var(--c-muted)]">Cargando cursos...</p>}
          {error && <p className="text-sm text-[var(--c-danger)]">Error: {error}</p>}
          {!loading &&
            !error &&
            aulasFiltradas.map((aula) => {
              const aulaId = (aula as { _id?: string })._id ?? aula.id ?? "";
              return (
                <article
                  key={aulaId}
                  className={`rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-5 shadow-sm ${
                    (aula as { status?: string }).status?.toUpperCase() === "ARCHIVED"
                      ? "opacity-50 border-dashed"
                      : ""
                  }`}
                >
                  <h2 className="text-lg font-semibold text-[var(--c-text)]">{aula.name}</h2>
                  {aula.category && (
                    <p className="mt-1 text-xs font-medium uppercase tracking-wide text-[var(--c-primary)]">
                      {aula.category}
                    </p>
                  )}
                  {aula.description && (
                    <p className="mt-2 line-clamp-2 text-sm text-[var(--c-muted)]">{aula.description}</p>
                  )}
                  <Link
                    className="mt-4 inline-block rounded-full border border-[var(--c-border)] px-3 py-1 text-xs font-semibold text-[var(--c-text)] hover:bg-[var(--c-bg)]"
                    to={`/clases/${aulaId}`}
                  >
                    Ir al curso
                  </Link>
                </article>
              );
            })}
          {!loading && !error && aulasFiltradas.length === 0 && (
            <p className="text-sm text-[var(--c-muted)]">No hay cursos asignados.</p>
          )}
        </section>
      </div>
  );
}
