import { useEffect, useState } from "react";
import { useAuth } from "../auth/use-auth";
import {
  ENTERPRISE_FEATURES,
  canAccessFeature,
  canWriteFeature
} from "../entitlements/enterprise";
import { useEnterpriseEntitlements } from "../hooks/use-enterprise-entitlements";
import { fetchEnterpriseContratos, type EnterpriseContrato } from "../services/enterprise";

export default function EnterpriseContratos() {
  const { user } = useAuth();
  const {
    entitlements,
    loading: entitlementsLoading,
    error: entitlementsError
  } = useEnterpriseEntitlements();
  const [contratos, setContratos] = useState<EnterpriseContrato[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const canViewContratos =
    entitlements ? canAccessFeature(entitlements, ENTERPRISE_FEATURES.CONTRACTS) : false;
  const canWriteContratos =
    entitlements ? canWriteFeature(entitlements, ENTERPRISE_FEATURES.CONTRACTS) : false;

  useEffect(() => {
    if (entitlementsLoading) return;
    if (!canViewContratos) {
      setLoading(false);
      return;
    }
    let active = true;
    fetchEnterpriseContratos()
      .then((data) => {
        if (!active) return;
        setContratos(data);
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
  }, [user?.id, entitlementsLoading, canViewContratos]);

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-slate-900">Convenios escolares</h1>
        <p className="text-base text-slate-600">
          Consulta el estado de los convenios institucionales y sus fechas de renovación.
        </p>
        {entitlementsError && (
          <p className="text-sm text-red-500">Error de suscripción: {entitlementsError}</p>
        )}
        {!entitlementsLoading && !canViewContratos && (
          <p className="text-sm text-amber-600">
            Tu plan actual no incluye la gestión de convenios institucionales.
          </p>
        )}
      </header>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-lg font-semibold text-slate-900">Convenios vigentes</h2>
          <button
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white disabled:opacity-60"
            disabled={!canWriteContratos}
          >
            Nuevo convenio
          </button>
        </div>
        <div className="mt-4 space-y-3">
          {loading && <p className="text-sm text-slate-500">Cargando convenios...</p>}
          {error && <p className="text-sm text-red-500">Error: {error}</p>}
          {!loading &&
            !error &&
            contratos.map((contrato) => (
              <div
                key={contrato.id}
                className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-100 px-4 py-3"
              >
                <div>
                  <p className="text-sm font-semibold text-slate-900">{contrato.nombre}</p>
                  <p className="text-xs text-slate-500">Renovación: {contrato.renovacion}</p>
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                  {contrato.estado}
                </span>
              </div>
            ))}
          {!loading && !error && contratos.length === 0 && (
            <p className="text-sm text-slate-500">No hay convenios vigentes.</p>
          )}
        </div>
      </section>
    </main>
  );
}
