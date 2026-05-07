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
    <div className="min-h-screen bg-[var(--c-bg)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-5">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold text-[var(--c-text)]">Miembros del equipo</h1>
          <p className="text-base text-[var(--c-muted)]">
            Personal docente y directivo de tu institución.
          </p>
        </header>
        <section className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-[var(--c-text)]">
              Equipo — {staff.length} miembros
            </h2>
          </div>
          {loading && <p className="mt-4 text-sm text-[var(--c-muted)] animate-pulse">Cargando miembros...</p>}
          {error && <p className="mt-4 text-sm text-[var(--c-danger)]">Error: {error}</p>}
          {!loading && !error && staff.length === 0 && (
            <p className="mt-4 text-sm text-[var(--c-muted)]">No hay miembros registrados.</p>
          )}
          {!loading && !error && staff.length > 0 && (
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {Object.entries(grouped).map(([role, members]) => (
                members.length > 0 && (
                  <div key={role} className="rounded-xl border border-[var(--c-border)] bg-[var(--c-bg)] p-4">
                    <h3 className="text-sm font-semibold text-[var(--c-text)]">
                      {ROLE_LABELS[role] ?? role} ({members.length})
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {members.map((m) => (
                        <li key={m.id}
                          className="flex items-center justify-between rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] px-3 py-2">
                          <span className="text-sm font-medium text-[var(--c-text)]">{m.name}</span>
                          <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${ROLE_COLORS[m.role] ?? "bg-[var(--c-bg)] text-[var(--c-muted)]"}`}>
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
      </div>
    </div>
  );
}
