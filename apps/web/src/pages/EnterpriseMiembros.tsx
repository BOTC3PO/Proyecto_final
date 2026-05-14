import { useEffect, useMemo, useState } from "react";
import { useAuth } from "../auth/use-auth";
import { fetchEnterpriseStaff, type EnterpriseStaffMember } from "../services/enterprise";

const ROLE_LABELS: Record<string, string> = {
  TEACHER: "Docentes",
  DIRECTIVO: "Directivos",
};

const ROLE_COLORS: Record<string, string> = {
  TEACHER: "bg-violet-100 text-violet-700",
  DIRECTIVO: "bg-blue-100 text-blue-700",
};

export default function EnterpriseMiembros() {
  const { user } = useAuth();
  const schoolId = user?.schoolId ?? "";
  const [staff, setStaff] = useState<EnterpriseStaffMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!schoolId) {
      setError('Tu cuenta no tiene una escuela asignada. Contactá al administrador.');
      setLoading(false);
      return;
    }
    let active = true;
    fetchEnterpriseStaff(schoolId)
      .then((data) => { if (!active) return; setStaff(data); })
      .catch((err: Error) => { if (!active) return; setError(err.message); })
      .finally(() => { if (!active) return; setLoading(false); });
    return () => { active = false; };
  }, [schoolId]);

  const grouped = useMemo(() => {
    const map: Record<string, EnterpriseStaffMember[]> = { TEACHER: [], DIRECTIVO: [] };
    staff.forEach((m) => {
      const key = m.role === "TEACHER" ? "TEACHER" : "DIRECTIVO";
      map[key].push(m);
    });
    return map;
  }, [staff]);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-4">
      <div>
        <h1 className="text-xl font-semibold text-[var(--c-text)]">Miembros del equipo</h1>
        <p className="text-sm text-[var(--c-muted)] mt-0.5">
          Personal docente y directivo de tu institución.
        </p>
      </div>

      {error && (
        <div className="rounded-xl border border-[color-mix(in_srgb,var(--c-danger)_25%,transparent)] bg-[color-mix(in_srgb,var(--c-danger)_8%,transparent)] px-4 py-3 text-sm text-[var(--c-danger)]">
          {error}
        </div>
      )}

      {loading && (
        <div className="grid gap-3 md:grid-cols-2">
          {[1,2].map(i => <div key={i} className="h-48 rounded-xl animate-pulse bg-[var(--c-border)]" />)}
        </div>
      )}

      {!loading && !error && staff.length === 0 && (
        <div className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] px-4 py-10 text-center">
          <p className="text-sm text-[var(--c-muted)]">No hay miembros registrados.</p>
        </div>
      )}

      {!loading && !error && staff.length > 0 && (
        <div className="grid gap-4 md:grid-cols-2">
          {Object.entries(grouped).map(([role, members]) =>
            members.length > 0 && (
              <div key={role} className="bg-[var(--c-surface)] border border-[var(--c-border)] rounded-xl overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--c-border)]">
                  <p className="text-sm font-semibold text-[var(--c-text)]">
                    {ROLE_LABELS[role] ?? role}
                  </p>
                  <span className="text-xs text-[var(--c-muted)]">{members.length}</span>
                </div>
                <div>
                  {members.map((m) => (
                    <div key={m.id} className="flex items-center justify-between px-4 py-2.5 border-b border-[var(--c-border)] last:border-0 hover:bg-[var(--c-bg)] transition-colors">
                      <p className="text-sm text-[var(--c-text)]">{m.name}</p>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${ROLE_COLORS[m.role] ?? 'bg-[var(--c-bg)] text-[var(--c-muted)]'}`}>
                        {ROLE_LABELS[m.role] ?? m.role}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}
