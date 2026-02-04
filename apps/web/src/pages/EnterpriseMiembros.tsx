import { useEffect, useMemo, useState } from "react";
import { useAuth } from "../auth/use-auth";
import {
  ENTERPRISE_FEATURES,
  canAccessFeature
} from "../entitlements/enterprise";
import { useEnterpriseEntitlements } from "../hooks/use-enterprise-entitlements";
import { fetchEnterpriseStaff, type EnterpriseStaffMember } from "../services/enterprise";

const ROLE_LABELS: Record<EnterpriseStaffMember["role"], string> = {
  ADMIN: "Administración",
  TEACHER: "Docencia",
};

export default function EnterpriseMiembros() {
  const { user } = useAuth();
  const {
    entitlements,
    loading: entitlementsLoading,
    error: entitlementsError
  } = useEnterpriseEntitlements();
  const [staff, setStaff] = useState<EnterpriseStaffMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const canViewStaff =
    entitlements ? canAccessFeature(entitlements, ENTERPRISE_FEATURES.MEMBERS) : false;

  useEffect(() => {
    if (entitlementsLoading) return;
    if (!canViewStaff) {
      setLoading(false);
      return;
    }
    let active = true;
    fetchEnterpriseStaff()
      .then((data) => {
        if (!active) return;
        setStaff(data);
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
  }, [user?.id, entitlementsLoading, canViewStaff]);

  const grouped = useMemo(() => {
    return staff.reduce(
      (acc, member) => {
        acc[member.role].push(member);
        return acc;
      },
      { ADMIN: [] as EnterpriseStaffMember[], TEACHER: [] as EnterpriseStaffMember[] }
    );
  }, [staff]);

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-slate-900">Miembros del equipo</h1>
        <p className="text-base text-slate-600">
          Revisa el personal administrativo y docente asignado a tu institución.
        </p>
        {entitlementsError && (
          <p className="text-sm text-red-500">Error de suscripción: {entitlementsError}</p>
        )}
        {!entitlementsLoading && !canViewStaff && (
          <p className="text-sm text-amber-600">
            Tu plan actual no incluye la gestión de miembros institucionales.
          </p>
        )}
      </header>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-lg font-semibold text-slate-900">Equipo escolar</h2>
          <span className="text-sm text-slate-500">{staff.length} miembros</span>
        </div>

        {loading && <p className="mt-4 text-sm text-slate-500">Cargando miembros...</p>}
        {error && <p className="mt-4 text-sm text-red-500">Error: {error}</p>}

        {!loading && !error && staff.length === 0 && (
          <p className="mt-4 text-sm text-slate-500">No hay miembros registrados.</p>
        )}

        {!loading && !error && staff.length > 0 && (
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {(Object.keys(grouped) as Array<EnterpriseStaffMember["role"]>).map((role) => (
              <div key={role} className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                <h3 className="text-sm font-semibold text-slate-700">{ROLE_LABELS[role]}</h3>
                <ul className="mt-3 space-y-2">
                  {grouped[role].map((member) => (
                    <li
                      key={member.id}
                      className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2"
                    >
                      <span className="text-sm font-medium text-slate-900">{member.name}</span>
                      <span className="text-xs text-slate-500">Escuela {member.schoolId}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
