import { useEffect, useMemo, useState } from "react";
import { useAuth } from "../auth/use-auth";
import {
  ENTERPRISE_FEATURES,
  canAccessFeature,
  canWriteFeature
} from "../entitlements/enterprise";
import { useEnterpriseEntitlements } from "../hooks/use-enterprise-entitlements";
import { createClassroom } from "../services/aulas";
import {
  fetchEnterpriseDashboard,
  fetchEnterpriseStaff,
  type EnterpriseDashboardData,
  type EnterpriseStaffMember
} from "../services/enterprise";

type CreateClassForm = {
  name: string;
  description: string;
  accessType: "publica" | "privada";
  teacherId: string;
  adminId: string;
};

export default function EnterpriseDashboard() {
  const { user } = useAuth();
  const schoolId = user?.schoolId ?? null;
  const {
    entitlements,
    loading: entitlementsLoading,
    error: entitlementsError
  } = useEnterpriseEntitlements();
  const [staff, setStaff] = useState<EnterpriseStaffMember[]>([]);
  const [dashboard, setDashboard] = useState<EnterpriseDashboardData | null>(null);
  const [loadingDashboard, setLoadingDashboard] = useState(true);
  const [dashboardError, setDashboardError] = useState<string | null>(null);
  const [staffError, setStaffError] = useState<string | null>(null);
  const [form, setForm] = useState<CreateClassForm>({
    name: "",
    description: "",
    accessType: "privada",
    teacherId: "",
    adminId: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const canManageMembers =
    entitlements ? canAccessFeature(entitlements, ENTERPRISE_FEATURES.MEMBERS) : false;
  const canWriteClassrooms =
    entitlements ? canWriteFeature(entitlements, ENTERPRISE_FEATURES.CLASSROOMS) : false;

  useEffect(() => {
    if (entitlementsLoading) return;
    if (!canManageMembers) {
      setStaff([]);
      return;
    }
    let active = true;
    fetchEnterpriseStaff()
      .then((data) => {
        if (!active) return;
        setStaff(data);
        setStaffError(null);
      })
      .catch((err: Error) => {
        if (!active) return;
        setStaffError(err.message);
      });
    return () => {
      active = false;
    };
  }, [user?.id, entitlementsLoading, canManageMembers]);

  useEffect(() => {
    let active = true;
    fetchEnterpriseDashboard()
      .then((data) => {
        if (!active) return;
        setDashboard(data);
        setDashboardError(null);
      })
      .catch((err: Error) => {
        if (!active) return;
        setDashboardError(err.message);
      })
      .finally(() => {
        if (!active) return;
        setLoadingDashboard(false);
      });
    return () => {
      active = false;
    };
  }, [user?.id]);

  const teachers = useMemo(() => staff.filter((member) => member.role === "TEACHER"), [staff]);
  const admins = useMemo(() => staff.filter((member) => member.role === "ADMIN"), [staff]);

  const updateField = (field: keyof CreateClassForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canWriteClassrooms) {
      setMessage("Tu suscripción no permite crear nuevas aulas.");
      return;
    }
    if (!form.name.trim() || !form.description.trim()) {
      setMessage("Completa el nombre y la descripción del aula.");
      return;
    }
    if (!form.teacherId || !form.adminId) {
      setMessage("Selecciona un docente y un administrador de la misma escuela.");
      return;
    }
    setIsSubmitting(true);
    setMessage(null);
    try {
      const now = new Date().toISOString();
      await createClassroom({
        id: `aula-${crypto.randomUUID()}`,
        name: form.name.trim(),
        description: form.description.trim(),
        accessType: form.accessType,
        status: "ACTIVE",
        institutionId: schoolId ?? undefined,
        category: "Escuela",
        createdBy: form.adminId,
        teacherIds: [form.teacherId],
        createdAt: now,
        updatedAt: now,
      });
      setForm((prev) => ({ ...prev, name: "", description: "" }));
      setMessage("Aula creada y asignada al equipo seleccionado.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "No se pudo crear el aula.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-10">
      <header className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Administración escolar</p>
        <h1 className="text-3xl font-bold text-slate-900">Panel de la escuela</h1>
        <p className="text-base text-slate-600">
          Supervisa el estado académico de tu institución y asigna aulas a docentes y administradores.
        </p>
        {entitlementsError && (
          <p className="text-sm text-red-500">Error de suscripción: {entitlementsError}</p>
        )}
        {entitlements?.accessLevel === "read_only" && (
          <p className="text-sm text-amber-600">
            Tu suscripción está en mora. Puedes consultar información, pero no crear nuevas aulas.
          </p>
        )}
        {entitlements?.accessLevel === "disabled" && (
          <p className="text-sm text-red-600">
            La suscripción está suspendida o inactiva. Las funciones premium están deshabilitadas.
          </p>
        )}
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        {loadingDashboard && <p className="text-sm text-slate-500">Cargando indicadores...</p>}
        {dashboardError && <p className="text-sm text-red-500">Error: {dashboardError}</p>}
        {!loadingDashboard &&
          !dashboardError &&
          dashboard?.indicadores.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <p className="text-sm text-slate-500">{item.label}</p>
              <p className="mt-2 text-2xl font-semibold text-slate-900">{item.value}</p>
            </article>
          ))}
        {!loadingDashboard && !dashboardError && dashboard?.indicadores.length === 0 && (
          <p className="text-sm text-slate-500">No hay indicadores disponibles.</p>
        )}
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Crear aula para la escuela</h2>
            <p className="text-sm text-slate-500">
              Selecciona un docente y un administrador que pertenezcan a la misma institución.
            </p>
          </div>
        </div>
        <form className="mt-4 grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
          <label className="grid gap-2 text-sm font-semibold text-slate-700 md:col-span-2">
            Nombre del aula
            <input
              className="rounded-md border border-slate-200 px-3 py-2 text-sm"
              value={form.name}
              onChange={(event) => updateField("name", event.target.value)}
              placeholder="Ej. 3° B - Primaria"
              required
              disabled={!canWriteClassrooms}
            />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slate-700 md:col-span-2">
            Descripción
            <textarea
              className="min-h-[110px] rounded-md border border-slate-200 px-3 py-2 text-sm"
              value={form.description}
              onChange={(event) => updateField("description", event.target.value)}
              placeholder="Describe objetivos o lineamientos principales."
              required
              disabled={!canWriteClassrooms}
            />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            Tipo de acceso
            <select
              className="rounded-md border border-slate-200 px-3 py-2 text-sm"
              value={form.accessType}
              onChange={(event) => updateField("accessType", event.target.value)}
              disabled={!canWriteClassrooms}
            >
              <option value="privada">Privada</option>
              <option value="publica">Pública</option>
            </select>
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            Docente responsable
            <select
              className="rounded-md border border-slate-200 px-3 py-2 text-sm"
              value={form.teacherId}
              onChange={(event) => updateField("teacherId", event.target.value)}
              disabled={!canWriteClassrooms || !canManageMembers}
            >
              <option value="">Selecciona un docente</option>
              {teachers.map((teacher) => (
                <option key={teacher.id} value={teacher.id}>
                  {teacher.name}
                </option>
              ))}
            </select>
            {staffError && <span className="text-xs text-red-600">{staffError}</span>}
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            Administrador asignado
            <select
              className="rounded-md border border-slate-200 px-3 py-2 text-sm"
              value={form.adminId}
              onChange={(event) => updateField("adminId", event.target.value)}
              disabled={!canWriteClassrooms || !canManageMembers}
            >
              <option value="">Selecciona un administrador</option>
              {admins.map((admin) => (
                <option key={admin.id} value={admin.id}>
                  {admin.name}
                </option>
              ))}
            </select>
            {staffError && <span className="text-xs text-red-600">{staffError}</span>}
          </label>
          <div className="flex flex-wrap items-center gap-3 md:col-span-2">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700 disabled:opacity-60"
              disabled={isSubmitting || !canWriteClassrooms}
            >
              {isSubmitting ? "Creando..." : "Crear aula"}
            </button>
            {message && <span className="text-sm text-slate-600">{message}</span>}
          </div>
        </form>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900">Próximas acciones</h2>
        <ul className="mt-3 space-y-2 text-sm text-slate-600">
          {loadingDashboard && <li>Cargando acciones...</li>}
          {!loadingDashboard &&
            dashboard?.acciones.map((accion) => (
              <li key={accion}>• {accion}</li>
            ))}
          {!loadingDashboard && dashboard?.acciones.length === 0 && (
            <li>No hay acciones planificadas.</li>
          )}
        </ul>
      </section>
    </main>
  );
}
