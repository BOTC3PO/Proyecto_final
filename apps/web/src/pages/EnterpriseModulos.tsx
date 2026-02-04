import { useEffect, useState } from "react";
import { useAuth } from "../auth/use-auth";
import type { Module, ModuleVisibility } from "../domain/module/module.types";
import {
  ENTERPRISE_FEATURES,
  canAccessFeature
} from "../entitlements/enterprise";
import { useEnterpriseEntitlements } from "../hooks/use-enterprise-entitlements";
import { fetchEnterpriseModulos } from "../services/enterprise";

const VISIBILITY_LABELS: Record<ModuleVisibility, string> = {
  publico: "Público",
  privado: "Privado",
  escuela: "Escuela",
};

const resolveMateria = (module: Module) => module.subject || module.category || "Sin materia";

export default function EnterpriseModulos() {
  const { user } = useAuth();
  const {
    entitlements,
    loading: entitlementsLoading,
    error: entitlementsError
  } = useEnterpriseEntitlements();
  const [modules, setModules] = useState<Module[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const canViewModules =
    entitlements ? canAccessFeature(entitlements, ENTERPRISE_FEATURES.MODULES) : false;

  useEffect(() => {
    if (entitlementsLoading) return;
    if (!canViewModules) {
      setLoading(false);
      return;
    }
    let active = true;
    fetchEnterpriseModulos()
      .then((data) => {
        if (!active) return;
        setModules(data.items ?? []);
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
  }, [user?.id, entitlementsLoading, canViewModules]);

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-slate-900">Módulos escolares</h1>
        <p className="text-base text-slate-600">
          Visualiza los módulos disponibles para tu institución y su visibilidad actual.
        </p>
        {entitlementsError && (
          <p className="text-sm text-red-500">Error de suscripción: {entitlementsError}</p>
        )}
        {!entitlementsLoading && !canViewModules && (
          <p className="text-sm text-amber-600">
            Tu plan actual no incluye el catálogo de módulos institucionales.
          </p>
        )}
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        {loading && <p className="text-sm text-slate-500">Cargando módulos...</p>}
        {error && <p className="text-sm text-red-500">Error: {error}</p>}
        {!loading &&
          !error &&
          modules.map((module) => (
            <article
              key={module.id}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-start justify-between gap-2">
                <h2 className="text-lg font-semibold text-slate-900">{module.title}</h2>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                  {VISIBILITY_LABELS[module.visibility]}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-600">{module.description}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-500">
                <span>Materia: {resolveMateria(module)}</span>
                {module.updatedAt && (
                  <span>
                    Actualizado: {new Date(module.updatedAt).toLocaleDateString("es-ES")}
                  </span>
                )}
              </div>
            </article>
          ))}
        {!loading && !error && modules.length === 0 && (
          <p className="text-sm text-slate-500">No hay módulos disponibles.</p>
        )}
      </section>
    </main>
  );
}
