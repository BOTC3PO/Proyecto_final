import { useEffect, useState } from "react";
import { useAuth } from "../auth/use-auth";
import {
  ENTERPRISE_FEATURES,
  canAccessFeature
} from "../entitlements/enterprise";
import { useEnterpriseEntitlements } from "../hooks/use-enterprise-entitlements";
import { fetchEnterpriseReportes, type EnterpriseReporte } from "../services/enterprise";

export default function EnterpriseReportes() {
  const { user } = useAuth();
  const {
    entitlements,
    loading: entitlementsLoading,
    error: entitlementsError
  } = useEnterpriseEntitlements();
  const [reportes, setReportes] = useState<EnterpriseReporte[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const canViewReportes =
    entitlements ? canAccessFeature(entitlements, ENTERPRISE_FEATURES.REPORTS) : false;

  useEffect(() => {
    if (entitlementsLoading) return;
    if (!canViewReportes) {
      setLoading(false);
      return;
    }
    let active = true;
    fetchEnterpriseReportes()
      .then((data) => {
        if (!active) return;
        setReportes(data);
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
  }, [user?.id, entitlementsLoading, canViewReportes]);

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-slate-900">Reportes</h1>
        <p className="text-base text-slate-600">
          Descarga información clave y comparte insights con los equipos directivos de la escuela.
        </p>
        {entitlementsError && (
          <p className="text-sm text-red-500">Error de suscripción: {entitlementsError}</p>
        )}
        {!entitlementsLoading && !canViewReportes && (
          <p className="text-sm text-amber-600">
            Tu plan actual no incluye reportes avanzados.
          </p>
        )}
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        {loading && <p className="text-sm text-slate-500">Cargando reportes...</p>}
        {error && <p className="text-sm text-red-500">Error: {error}</p>}
        {!loading &&
          !error &&
          reportes.map((reporte) => (
            <article
              key={reporte.id}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <h2 className="text-lg font-semibold text-slate-900">{reporte.titulo}</h2>
              <p className="mt-2 text-sm text-slate-600">{reporte.descripcion}</p>
              <button className="mt-4 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-700">
                Descargar
              </button>
            </article>
          ))}
        {!loading && !error && reportes.length === 0 && (
          <p className="text-sm text-slate-500">No hay reportes disponibles.</p>
        )}
      </section>
    </main>
  );
}
