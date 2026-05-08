import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/use-auth";
import type { Module } from "../domain/module/module.types";
import { fetchEnterpriseModulos } from "../services/enterprise";

export default function EnterpriseModulos() {
  const { user } = useAuth();
  const schoolId = user?.schoolId ?? "";
  const [modules, setModules] = useState<Module[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    fetchEnterpriseModulos(schoolId || undefined)
      .then((data) => { if (!active) return; setModules(data.items ?? []); })
      .catch((err: Error) => { if (!active) return; setError(err.message); })
      .finally(() => { if (!active) return; setLoading(false); });
    return () => { active = false; };
  }, [schoolId]);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-5">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold text-[var(--c-text)]">Módulos escolares</h1>
          <p className="text-base text-[var(--c-muted)]">
            Módulos disponibles para tu institución.
          </p>
        </header>
        <section className="grid gap-4 md:grid-cols-2">
          {loading && <p className="text-sm text-[var(--c-muted)] animate-pulse">Cargando módulos...</p>}
          {error && <p className="text-sm text-[var(--c-danger)]">Error: {error}</p>}
          {!loading && !error && modules.length === 0 && (
            <p className="text-sm text-[var(--c-muted)]">No hay módulos disponibles.</p>
          )}
          {!loading && !error && modules.map((module) => (
            <article key={module.id}
              className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-5 shadow-sm">
              <div className="flex items-start justify-between gap-2">
                <h2 className="text-base font-semibold text-[var(--c-text)]">{module.title}</h2>
                <span className="shrink-0 rounded-full bg-[var(--c-bg)] px-2 py-0.5 text-xs font-semibold text-[var(--c-muted)]">
                  {module.subject ?? module.category ?? "—"}
                </span>
              </div>
              {module.description && (
                <p className="mt-1 text-sm text-[var(--c-muted)] line-clamp-2">{module.description}</p>
              )}
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs text-[var(--c-muted)]">
                  {module.updatedAt
                    ? new Date(module.updatedAt).toLocaleDateString("es-AR")
                    : "—"}
                </span>
                <Link
                  to={`/modulos/${module.id}`}
                  className="text-xs font-semibold text-[var(--c-primary)] hover:underline"
                >
                  Ver módulo →
                </Link>
              </div>
            </article>
          ))}
        </section>
      </div>
  );
}
