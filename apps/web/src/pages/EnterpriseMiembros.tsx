import { useEffect, useState } from 'react';
import { useAuth } from '../auth/use-auth';
import { apiGet } from '../lib/api';

type Miembro = { id: string; name: string; role: string; };

const ROLE_LABELS: Record<string, string> = {
  TEACHER: 'Docente', DIRECTIVO: 'Directivo',
  USER: 'Alumno', PARENT: 'Padre/Madre', ADMIN: 'Administrador',
};
const ROLE_COLORS: Record<string, string> = {
  TEACHER: 'bg-violet-100 text-violet-800',
  DIRECTIVO: 'bg-slate-100 text-slate-800',
  USER: 'bg-emerald-100 text-emerald-800',
  PARENT: 'bg-amber-100 text-amber-800',
  ADMIN: 'bg-blue-100 text-blue-800',
};

export default function EnterpriseMiembros() {
  const { user } = useAuth();
  const [staff, setStaff] = useState<Miembro[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!user?.schoolId) {
      setError('Tu cuenta no tiene una escuela asignada.');
      setLoading(false);
      return;
    }
    apiGet<{ staff: Miembro[] }>('/api/enterprise/miembros')
      .then(data => setStaff(data.staff ?? []))
      .catch(err => setError(err instanceof Error ? err.message : 'Error al cargar miembros'))
      .finally(() => setLoading(false));
  }, [user?.schoolId]);

  const grouped = staff.reduce((acc, m) => {
    if (!acc[m.role]) acc[m.role] = [];
    acc[m.role].push(m);
    return acc;
  }, {} as Record<string, Miembro[]>);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-4">
      <div>
        <h1 className="text-xl font-semibold text-[var(--c-text)]">Miembros del equipo</h1>
        <p className="text-sm text-[var(--c-muted)] mt-0.5">Personal de tu institución.</p>
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
          {Object.entries(grouped).map(([role, members]) => (
            <div key={role} className="bg-[var(--c-surface)] border border-[var(--c-border)] rounded-xl overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--c-border)]">
                <p className="text-sm font-semibold text-[var(--c-text)]">{ROLE_LABELS[role] ?? role}</p>
                <span className="text-xs text-[var(--c-muted)]">{members.length}</span>
              </div>
              {members.map(m => (
                <div key={m.id} className="flex items-center justify-between px-4 py-2.5 border-b border-[var(--c-border)] last:border-0 hover:bg-[var(--c-bg)] transition-colors">
                  <p className="text-sm text-[var(--c-text)]">{m.name}</p>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${ROLE_COLORS[m.role] ?? 'bg-[var(--c-bg)] text-[var(--c-muted)]'}`}>
                    {ROLE_LABELS[m.role] ?? m.role}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
