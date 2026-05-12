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
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-4">
      <div>
        <h1 className="text-xl font-semibold text-[var(--c-text)]">Gestión de cursos</h1>
        <p className="text-sm text-[var(--c-muted)] mt-0.5">
          Revisá la calidad del contenido y monitoreá el impacto en los estudiantes.
        </p>
      </div>

      {error && (
        <div className="rounded-xl border border-[color-mix(in_srgb,var(--c-danger)_25%,transparent)] bg-[color-mix(in_srgb,var(--c-danger)_8%,transparent)] px-4 py-3 text-sm text-[var(--c-danger)]">
          {error}
        </div>
      )}

      {loading && (
        <div className="grid gap-3 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-32 rounded-xl animate-pulse bg-[var(--c-border)]" />
          ))}
        </div>
      )}

      {!loading && !error && cursos.length === 0 && (
        <div className="rounded-xl border border-dashed border-[var(--c-border)] px-4 py-12 text-center">
          <p className="text-sm text-[var(--c-muted)]">No hay cursos registrados.</p>
        </div>
      )}

      {!loading && !error && cursos.length > 0 && (
        <div className="grid gap-3 md:grid-cols-3">
          {cursos.map((curso) => (
            <article
              key={curso.id}
              className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-4 space-y-2"
            >
              <h2 className="text-sm font-semibold text-[var(--c-text)]">{curso.titulo}</h2>
              <div className="space-y-1">
                <p className="text-xs text-[var(--c-muted)]">Estado: {curso.estado}</p>
                <p className="text-xs text-[var(--c-muted)]">
                  Estudiantes activos: {curso.estudiantes}
                </p>
              </div>
              <button className="rounded-lg border border-[var(--c-border)] px-3 py-1 text-xs font-medium text-[var(--c-primary)] hover:bg-[var(--c-bg)] transition-colors">
                Ver detalles
              </button>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
