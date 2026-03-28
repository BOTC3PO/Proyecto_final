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
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-slate-900">Módulos escolares</h1>
        <p className="text-base text-slate-600">
          Módulos disponibles para tu institución.
        </p>
      </header>
      <section className="grid gap-4 md:grid-cols-2">
        {loading && <p className="text-sm text-slate-400 animate-pulse">Cargando módulos...</p>}
        {error && <p className="text-sm text-red-500">Error: {error}</p>}
        {!loading && !error && modules.length === 0 && (
          <p className="text-sm text-slate-500">No hay módulos disponibles.</p>
        )}
        {!loading && !error && modules.map((module) => (
          <article key={module.id}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between gap-2">
              <h2 className="text-base font-semibold text-slate-900">{module.title}</h2>
              <span className="shrink-0 rounded-full bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-600">
                {module.subject ?? module.category ?? "—"}
              </span>
            </div>
            {module.description && (
              <p className="mt-1 text-sm text-slate-500 line-clamp-2">{module.description}</p>
            )}
            <div className="mt-3 flex items-center justify-between">
              <span className="text-xs text-slate-400">
                {module.updatedAt
                  ? new Date(module.updatedAt).toLocaleDateString("es-AR")
                  : "—"}
              </span>
              <Link
                to={`/modulos/${module.id}`}
                className="text-xs font-semibold text-blue-600 hover:underline"
              >
                Ver módulo →
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
