import { useEffect, useMemo, useState } from "react";
import { useAuth } from "../auth/use-auth";
import { fetchEnterpriseStaff, type EnterpriseStaffMember } from "../services/enterprise";

const ROLE_LABELS: Record<string, string> = {
  TEACHER: "Docentes",
  ADMIN: "Directivos",
};

const ROLE_COLORS: Record<string, string> = {
  TEACHER: "bg-violet-100 text-violet-700",
  ADMIN: "bg-blue-100 text-blue-700",
};

export default function EnterpriseMiembros() {
  const { user } = useAuth();
  const schoolId = user?.schoolId ?? "";
  const [staff, setStaff] = useState<EnterpriseStaffMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!schoolId) return;
    let active = true;
    fetchEnterpriseStaff(schoolId)
      .then((data) => { if (!active) return; setStaff(data); })
      .catch((err: Error) => { if (!active) return; setError(err.message); })
      .finally(() => { if (!active) return; setLoading(false); });
    return () => { active = false; };
  }, [schoolId]);

  const grouped = useMemo(() => {
    const map: Record<string, EnterpriseStaffMember[]> = { TEACHER: [], ADMIN: [] };
    staff.forEach((m) => {
      if (map[m.role]) map[m.role].push(m);
    });
    return map;
  }, [staff]);

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-slate-900">Miembros del equipo</h1>
        <p className="text-base text-slate-600">
          Personal docente y directivo de tu institución.
        </p>
      </header>
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900">
            Equipo — {staff.length} miembros
          </h2>
        </div>
        {loading && <p className="mt-4 text-sm text-slate-400 animate-pulse">Cargando miembros...</p>}
        {error && <p className="mt-4 text-sm text-red-500">Error: {error}</p>}
        {!loading && !error && staff.length === 0 && (
          <p className="mt-4 text-sm text-slate-500">No hay miembros registrados.</p>
        )}
        {!loading && !error && staff.length > 0 && (
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {Object.entries(grouped).map(([role, members]) => (
              members.length > 0 && (
                <div key={role} className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                  <h3 className="text-sm font-semibold text-slate-700">
                    {ROLE_LABELS[role] ?? role} ({members.length})
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {members.map((m) => (
                      <li key={m.id}
                        className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2">
                        <span className="text-sm font-medium text-slate-900">{m.name}</span>
                        <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${ROLE_COLORS[m.role] ?? "bg-slate-100 text-slate-600"}`}>
                          {ROLE_LABELS[m.role] ?? m.role}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
