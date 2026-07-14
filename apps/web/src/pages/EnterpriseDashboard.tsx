import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/use-auth";
import { createClassroom } from "../services/aulas";
import {
  fetchEnterpriseDashboard,
  fetchEnterpriseStaff,
  type EnterpriseDashboardData,
  type EnterpriseStaffMember,
} from "../services/enterprise";

export default function EnterpriseDashboard() {
  const { user } = useAuth();
  const schoolId = user?.schoolId ?? "";
  const [dashboard, setDashboard] = useState<EnterpriseDashboardData | null>(null);
  const [staff, setStaff] = useState<EnterpriseStaffMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "", description: "",
    accessType: "privada" as "publica" | "privada",
    teacherId: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!schoolId) {
      setError('Tu cuenta no tiene una escuela asignada. Contactá al administrador.');
      setLoading(false);
      return;
    }
    let active = true;
    Promise.all([
      fetchEnterpriseDashboard(schoolId),
      fetchEnterpriseStaff(schoolId),
    ])
      .then(([dash, staffData]) => {
        if (!active) return;
        setDashboard(dash);
        setStaff(staffData);
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
    return () => { active = false; };
  }, [schoolId]);

  const teachers = useMemo(
    () => staff.filter((m) => m.role === "TEACHER"),
    [staff]
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !schoolId) return;
    setSubmitting(true);
    setMessage(null);
    try {
      const now = new Date().toISOString();
      await createClassroom({
        id: `aula-${crypto.randomUUID()}`,
        name: form.name.trim(),
        description: form.description.trim(),
        accessType: form.accessType,
        status: "ACTIVE",
        institutionId: schoolId,
        category: "Escuela",
        createdBy: user?.id ?? "",
        teacherIds: form.teacherId ? [form.teacherId] : [],
        createdAt: now,
        updatedAt: now,
      });
      setForm({ name: "", description: "", accessType: "privada", teacherId: "" });
      setMessage("✓ Aula creada correctamente.");
    } catch (err) {
      setMessage(err instanceof Error ? err.message : "No se pudo crear el aula.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-4">

      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-xl font-semibold text-[var(--c-text)]">Panel de la escuela</h1>
          <p className="text-sm text-[var(--c-muted)] mt-0.5">
            Supervisá el estado académico de tu institución.
          </p>
        </div>
        <div className="flex gap-2">
          <Link
            to="/enterprise/aulas"
            className="rounded-xl bg-[var(--c-primary)] px-4 py-2 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
          >
            + Crear aula
          </Link>
        </div>
      </div>

      {error && (
        <div className="rounded-xl border border-[color-mix(in_srgb,var(--c-danger)_25%,transparent)] bg-[color-mix(in_srgb,var(--c-danger)_8%,transparent)] px-4 py-3 text-sm text-[var(--c-danger)]">
          {error}
        </div>
      )}

      {/* Stats KPI */}
      <div className="grid gap-3 grid-cols-2 lg:grid-cols-4">
        {loading
          ? [1,2,3,4].map(i => <div key={i} className="h-20 animate-pulse rounded-xl bg-[var(--c-border)]" />)
          : dashboard?.indicadores.map((item) => (
            <div key={item.id} className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-4">
              <p className="text-[10px] uppercase tracking-widest text-[var(--c-muted)] mb-1">{item.label}</p>
              <p className="text-2xl font-semibold text-[var(--c-text)]">{item.value}</p>
            </div>
          ))
        }
      </div>

      <div className="grid gap-4 lg:grid-cols-3">

        {/* Accesos rápidos */}
        <div className="bg-[var(--c-surface)] border border-[var(--c-border)] rounded-xl overflow-hidden">
          <p className="px-4 py-3 text-xs font-semibold uppercase tracking-widest text-[var(--c-muted)] border-b border-[var(--c-border)]">
            Accesos rápidos
          </p>
          {[
            { label: 'Aulas',      to: '/enterprise/aulas',     icon: '🏫' },
            { label: 'Miembros',   to: '/enterprise/miembros',  icon: '👥' },
            { label: 'Módulos',    to: '/enterprise/modulos',   icon: '🎓' },
            { label: 'Reportes',   to: '/enterprise/reportes',  icon: '📊' },
            { label: 'Calendario', to: '/enterprise/calendario',icon: '📅' },
            { label: 'Mensajes',   to: '/mensajes',             icon: '💬' },
          ].map(({ label, to, icon }) => (
            <Link
              key={to}
              to={to}
              className="flex items-center gap-3 px-4 py-2.5 text-sm text-[var(--c-text)] hover:bg-[var(--c-bg)] border-b border-[var(--c-border)] last:border-0 transition-colors"
            >
              <span className="text-base flex-shrink-0">{icon}</span>
              <span>{label}</span>
            </Link>
          ))}
        </div>

        {/* Crear aula */}
        <div className="lg:col-span-2 bg-[var(--c-surface)] border border-[var(--c-border)] rounded-xl overflow-hidden">
          <p className="px-4 py-3 text-xs font-semibold uppercase tracking-widest text-[var(--c-muted)] border-b border-[var(--c-border)]">
            Crear aula
          </p>
          <form className="p-4 grid gap-3 sm:grid-cols-2" onSubmit={handleSubmit}>
            <label className="flex flex-col gap-1 sm:col-span-2">
              <span className="text-xs font-medium text-[var(--c-muted)]">Nombre *</span>
              <input
                required value={form.name}
                onChange={(e) => setForm(p => ({ ...p, name: e.target.value }))}
                className="rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                placeholder="Ej: 3° B — Primaria"
              />
            </label>
            <label className="flex flex-col gap-1 sm:col-span-2">
              <span className="text-xs font-medium text-[var(--c-muted)]">Descripción</span>
              <textarea
                rows={2} value={form.description}
                onChange={(e) => setForm(p => ({ ...p, description: e.target.value }))}
                className="rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)] resize-none"
                placeholder="Objetivos del aula"
              />
            </label>
            <label className="flex flex-col gap-1">
              <span className="text-xs font-medium text-[var(--c-muted)]">Tipo de acceso</span>
              <select
                value={form.accessType}
                onChange={(e) => setForm(p => ({ ...p, accessType: e.target.value as 'publica' | 'privada' }))}
                className="rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
              >
                <option value="privada">Privada</option>
                <option value="publica">Pública</option>
              </select>
            </label>
            <label className="flex flex-col gap-1">
              <span className="text-xs font-medium text-[var(--c-muted)]">Docente responsable</span>
              <select
                value={form.teacherId}
                onChange={(e) => setForm(p => ({ ...p, teacherId: e.target.value }))}
                className="rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
              >
                <option value="">Sin asignar</option>
                {teachers.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
              </select>
            </label>
            <div className="sm:col-span-2 flex items-center gap-3">
              <button
                type="submit" disabled={submitting || !form.name.trim()}
                className="rounded-xl bg-[var(--c-primary)] px-5 py-2 text-sm font-semibold text-white hover:opacity-90 disabled:opacity-50 transition-opacity"
              >
                {submitting ? 'Creando...' : 'Crear aula'}
              </button>
              {message && (
                <p className={`text-sm ${message.startsWith('✓') ? 'text-[var(--c-success)]' : 'text-[var(--c-danger)]'}`}>
                  {message}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>

    </div>
  );
}
