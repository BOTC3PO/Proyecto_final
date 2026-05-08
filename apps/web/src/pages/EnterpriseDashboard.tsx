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
  const [dashboard, setDashboard] =
    useState<EnterpriseDashboardData | null>(null);
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
    if (!schoolId) return;
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
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-5">
        <header className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--c-muted)]">
            Administración escolar
          </p>
          <h1 className="text-3xl font-bold text-[var(--c-text)]">Panel de la escuela</h1>
          <p className="text-base text-[var(--c-muted)]">
            Supervisá el estado académico de tu institución.
          </p>
          {error && (
            <p className="text-sm text-[var(--c-danger)]">Error: {error}</p>
          )}
        </header>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {loading
            ? Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-24 animate-pulse rounded-xl bg-[var(--c-border)]" />
              ))
            : dashboard?.indicadores.map((item) => (
                <div key={item.id}
                  className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-5 shadow-sm">
                  <p className="text-sm text-[var(--c-muted)]">{item.label}</p>
                  <p className="mt-1 text-3xl font-bold text-[var(--c-text)]">{item.value}</p>
                </div>
              ))}
        </section>

        <section className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-[var(--c-text)]">Accesos rápidos</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link to="/enterprise/aulas"
              className="rounded-full border border-[var(--c-border)] px-4 py-2 text-sm font-semibold text-[var(--c-text)] hover:bg-[var(--c-bg)] transition-colors">
              Ver aulas
            </Link>
            <Link to="/enterprise/miembros"
              className="rounded-full border border-[var(--c-border)] px-4 py-2 text-sm font-semibold text-[var(--c-text)] hover:bg-[var(--c-bg)] transition-colors">
              Ver miembros
            </Link>
            <Link to="/enterprise/modulos"
              className="rounded-full border border-[var(--c-border)] px-4 py-2 text-sm font-semibold text-[var(--c-text)] hover:bg-[var(--c-bg)] transition-colors">
              Ver módulos
            </Link>
            <Link to="/enterprise/reportes"
              className="rounded-full border border-[var(--c-border)] px-4 py-2 text-sm font-semibold text-[var(--c-text)] hover:bg-[var(--c-bg)] transition-colors">
              Reportes
            </Link>
            <Link to="/gobernanza"
              className="rounded-full border border-violet-200 px-4 py-2 text-sm font-semibold text-violet-700 hover:bg-violet-50 transition-colors">
              Gobernanza
            </Link>
          </div>
        </section>

        <section className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-[var(--c-text)]">Crear aula</h2>
          <form className="mt-4 grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
            <label className="flex flex-col gap-1 text-sm font-medium text-[var(--c-text)] sm:col-span-2">
              Nombre *
              <input
                required
                value={form.name}
                onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                placeholder="Ej: 3° B - Primaria"
              />
            </label>
            <label className="flex flex-col gap-1 text-sm font-medium text-[var(--c-text)] sm:col-span-2">
              Descripción
              <textarea
                rows={2}
                value={form.description}
                onChange={(e) => setForm((p) => ({ ...p, description: e.target.value }))}
                className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                placeholder="Objetivos o lineamientos del aula"
              />
            </label>
            <label className="flex flex-col gap-1 text-sm font-medium text-[var(--c-text)]">
              Tipo de acceso
              <select
                value={form.accessType}
                onChange={(e) => setForm((p) => ({ ...p, accessType: e.target.value as "publica" | "privada" }))}
                className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
              >
                <option value="privada">Privada</option>
                <option value="publica">Pública</option>
              </select>
            </label>
            <label className="flex flex-col gap-1 text-sm font-medium text-[var(--c-text)]">
              Docente responsable
              <select
                value={form.teacherId}
                onChange={(e) => setForm((p) => ({ ...p, teacherId: e.target.value }))}
                className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
              >
                <option value="">Sin asignar</option>
                {teachers.map((t) => (
                  <option key={t.id} value={t.id}>{t.name}</option>
                ))}
              </select>
            </label>
            <div className="flex items-center gap-3 sm:col-span-2">
              <button
                type="submit"
                disabled={submitting || !form.name.trim()}
                className="rounded-xl bg-[var(--c-primary)] px-6 py-2.5 text-sm font-semibold text-white hover:opacity-90 disabled:opacity-50 transition-colors"
              >
                {submitting ? "Creando..." : "Crear aula"}
              </button>
              {message && (
                <p className={`text-sm ${message.startsWith("✓") ? "text-emerald-600" : "text-[var(--c-danger)]"}`}>
                  {message}
                </p>
              )}
            </div>
          </form>
        </section>

        <section className="rounded-xl border border-violet-100 bg-violet-50 p-5">
          <h2 className="text-base font-semibold text-violet-900">Gobernanza colaborativa</h2>
          <p className="mt-1 text-sm text-violet-700">
            Participá en propuestas de cambio para módulos y generadores de ejercicios.
          </p>
          <Link
            to="/gobernanza"
            className="mt-3 inline-block rounded-xl bg-violet-600 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-700 transition-colors"
          >
            Ir a gobernanza →
          </Link>
        </section>
      </div>
  );
}
