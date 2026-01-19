import { useEffect, useMemo, useState } from "react";
import { apiGet } from "../lib/api";
import { createClassroom } from "../services/aulas";

type StaffMember = {
  id: string;
  name: string;
  role: "ADMIN" | "TEACHER";
  schoolId: string;
};

type CreateClassForm = {
  name: string;
  description: string;
  accessType: "publica" | "privada";
  teacherId: string;
  adminId: string;
};

const indicadores = [
  { label: "Usuarios activos", value: "1,240" },
  { label: "Aulas activas", value: "48" },
  { label: "Satisfacción familias", value: "92%" },
];

export default function EnterpriseDashboard() {
  const schoolId = "escuela-demo";
  const [staff, setStaff] = useState<StaffMember[]>([]);
  const [form, setForm] = useState<CreateClassForm>({
    name: "",
    description: "",
    accessType: "privada",
    teacherId: "",
    adminId: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    apiGet<{ items: StaffMember[] }>(`/api/escuelas/${schoolId}/miembros`)
      .then((data) => {
        if (!active) return;
        setStaff(data.items);
      })
      .catch(() => {
        if (!active) return;
        setStaff([
          { id: "admin-1", name: "Lucía Torres", role: "ADMIN", schoolId },
          { id: "admin-2", name: "Rafael Núñez", role: "ADMIN", schoolId },
          { id: "teacher-1", name: "Mariana Rojas", role: "TEACHER", schoolId },
          { id: "teacher-2", name: "Diego Salas", role: "TEACHER", schoolId },
          { id: "teacher-3", name: "Andrea López", role: "TEACHER", schoolId: "escuela-otra" },
        ]);
      });
    return () => {
      active = false;
    };
  }, [schoolId]);

  const availableStaff = useMemo(() => staff.filter((member) => member.schoolId === schoolId), [staff, schoolId]);
  const teachers = availableStaff.filter((member) => member.role === "TEACHER");
  const admins = availableStaff.filter((member) => member.role === "ADMIN");

  const updateField = (field: keyof CreateClassForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
        status: "activa",
        institutionId: schoolId,
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
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        {indicadores.map((item) => (
          <article
            key={item.label}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <p className="text-sm text-slate-500">{item.label}</p>
            <p className="mt-2 text-2xl font-semibold text-slate-900">{item.value}</p>
          </article>
        ))}
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
            />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            Tipo de acceso
            <select
              className="rounded-md border border-slate-200 px-3 py-2 text-sm"
              value={form.accessType}
              onChange={(event) => updateField("accessType", event.target.value)}
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
            >
              <option value="">Selecciona un docente</option>
              {teachers.map((teacher) => (
                <option key={teacher.id} value={teacher.id}>
                  {teacher.name}
                </option>
              ))}
            </select>
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            Administrador asignado
            <select
              className="rounded-md border border-slate-200 px-3 py-2 text-sm"
              value={form.adminId}
              onChange={(event) => updateField("adminId", event.target.value)}
            >
              <option value="">Selecciona un administrador</option>
              {admins.map((admin) => (
                <option key={admin.id} value={admin.id}>
                  {admin.name}
                </option>
              ))}
            </select>
          </label>
          <div className="flex flex-wrap items-center gap-3 md:col-span-2">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700 disabled:opacity-60"
              disabled={isSubmitting}
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
          <li>• Revisar indicadores de participación por grado.</li>
          <li>• Ajustar la asignación docente para el próximo trimestre.</li>
          <li>• Coordinar reuniones con tutores y familias.</li>
        </ul>
      </section>
    </main>
  );
}
