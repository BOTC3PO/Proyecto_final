import { useEffect, useMemo, useState } from "react";
import type { Classroom } from "../domain/classroom/classroom.types";
import { useAuth } from "../auth/use-auth";
import { createClassroom, deleteClassroom, fetchClassrooms, updateClassroom } from "../services/aulas";

const formatAccess = (accessType: Classroom["accessType"]) => (accessType === "publica" ? "Pública" : "Privada");
const emptyForm = {
  name: "",
  description: "",
  accessType: "publica" as Classroom["accessType"],
  status: "activa" as Classroom["status"],
  institutionId: "",
  category: ""
};

export default function ProfesorAulas() {
  const { user } = useAuth();
  const [classrooms, setClassrooms] = useState<Classroom[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    fetchClassrooms()
      .then((response) => {
        if (!active) return;
        setClassrooms(response.items);
        setError(null);
      })
      .catch((err: Error) => {
        if (!active) return;
        setError(err.message || "No se pudo cargar las aulas.");
      })
      .finally(() => {
        if (!active) return;
        setIsLoading(false);
      });
    return () => {
      active = false;
    };
  }, []);

  const visibleClassrooms = useMemo(() => {
    if (!user) return [];
    if (user.role === "TEACHER") {
      return classrooms.filter((classroom) => classroom.createdBy === user.id || classroom.teacherIds?.includes(user.id));
    }
    if (user.role === "USER" || user.role === "PARENT") {
      return classrooms.filter((classroom) => classroom.accessType === "publica");
    }
    return classrooms;
  }, [classrooms, user]);

  const handleFieldChange = (field: keyof typeof emptyForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const resetForm = () => {
    setForm(emptyForm);
    setEditingId(null);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError(null);
    setIsSubmitting(true);
    try {
      if (editingId) {
        await updateClassroom(editingId, {
          name: form.name,
          description: form.description,
          accessType: form.accessType,
          status: form.status,
          institutionId: form.institutionId || undefined,
          category: form.category || undefined
        });
        setClassrooms((prev) =>
          prev.map((classroom) =>
            classroom.id === editingId
              ? {
                  ...classroom,
                  name: form.name,
                  description: form.description,
                  accessType: form.accessType,
                  status: form.status,
                  institutionId: form.institutionId || undefined,
                  category: form.category || undefined,
                  updatedAt: new Date().toISOString()
                }
              : classroom
          )
        );
      } else {
        const now = new Date().toISOString();
        const payload: Classroom = {
          id: `aula-${crypto.randomUUID()}`,
          name: form.name,
          description: form.description,
          accessType: form.accessType,
          status: form.status,
          institutionId: form.institutionId || undefined,
          category: form.category || undefined,
          createdBy: user?.id ?? "profesor-demo",
          teacherIds: user?.id ? [user.id] : [],
          createdAt: now,
          updatedAt: now
        };
        await createClassroom(payload);
        setClassrooms((prev) => [payload, ...prev]);
      }
      resetForm();
    } catch (err: unknown) {
      if (err instanceof Error) {
        setSubmitError(err.message);
      } else {
        setSubmitError("No se pudo guardar el aula.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const startEdit = (classroom: Classroom) => {
    setEditingId(classroom.id);
    setForm({
      name: classroom.name,
      description: classroom.description,
      accessType: classroom.accessType,
      status: classroom.status,
      institutionId: classroom.institutionId ?? "",
      category: classroom.category ?? ""
    });
  };

  const handleDelete = async (classroomId: string) => {
    setSubmitError(null);
    setIsSubmitting(true);
    try {
      await deleteClassroom(classroomId);
      setClassrooms((prev) => prev.filter((classroom) => classroom.id !== classroomId));
      if (editingId === classroomId) {
        resetForm();
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setSubmitError(err.message);
      } else {
        setSubmitError("No se pudo eliminar el aula.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="p-6 space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Aulas virtuales</h1>
          <p className="text-gray-600">Acceso y administración de aulas para tus cursos.</p>
        </div>
        {user?.role === "TEACHER" ? (
          <button
            type="button"
            className="rounded-md border border-blue-600 px-4 py-2 text-blue-700 hover:bg-blue-50"
            onClick={resetForm}
          >
            Crear aula
          </button>
        ) : (
          <span className="rounded-md bg-gray-100 px-4 py-2 text-sm text-gray-600">
            Solo docentes pueden crear aulas
          </span>
        )}
      </div>

      {user?.role === "TEACHER" && (
        <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">
            {editingId ? "Editar aula" : "Crear nueva aula"}
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            Define el acceso, la institución y la categoría (opcional) antes de publicar.
          </p>
          <form className="mt-4 grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700">Nombre del aula</label>
              <input
                value={form.name}
                onChange={(event) => handleFieldChange("name", event.target.value)}
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
                required
              />
            </div>
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700">Estado</label>
              <select
                value={form.status}
                onChange={(event) => handleFieldChange("status", event.target.value)}
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
              >
                <option value="activa">Activa</option>
                <option value="archivada">Archivada</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Descripción</label>
              <textarea
                value={form.description}
                onChange={(event) => handleFieldChange("description", event.target.value)}
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
                rows={3}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Tipo de acceso</label>
              <select
                value={form.accessType}
                onChange={(event) => handleFieldChange("accessType", event.target.value)}
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
              >
                <option value="publica">Pública</option>
                <option value="privada">Privada</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Institución (opcional)</label>
              <input
                value={form.institutionId}
                onChange={(event) => handleFieldChange("institutionId", event.target.value)}
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Categoría (opcional)</label>
              <input
                value={form.category}
                onChange={(event) => handleFieldChange("category", event.target.value)}
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
              />
            </div>
            <div className="flex flex-wrap items-center gap-3 md:col-span-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-60"
              >
                {editingId ? "Guardar cambios" : "Crear aula"}
              </button>
              {editingId && (
                <button
                  type="button"
                  className="rounded-md border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50"
                  onClick={resetForm}
                >
                  Cancelar edición
                </button>
              )}
              {submitError && <span className="text-sm text-red-600">{submitError}</span>}
            </div>
          </form>
        </section>
      )}

      <section className="space-y-4">
        {isLoading ? (
          <div className="rounded-lg border border-dashed border-gray-300 p-6 text-gray-500">Cargando aulas...</div>
        ) : error ? (
          <div className="rounded-lg border border-red-200 bg-red-50 p-6 text-red-700">{error}</div>
        ) : visibleClassrooms.length === 0 ? (
          <div className="rounded-lg border border-dashed border-gray-300 p-6 text-gray-500">
            {user?.role === "TEACHER"
              ? "Todavía no creaste aulas. Usa “Crear aula” para comenzar."
              : "No hay aulas disponibles para tu rol todavía."}
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {visibleClassrooms.map((classroom) => (
              <article key={classroom.id} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">{classroom.name}</h2>
                    <p className="mt-1 text-sm text-gray-600">{classroom.description}</p>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      classroom.status === "archivada"
                        ? "bg-gray-100 text-gray-600"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {classroom.status === "archivada" ? "Archivada" : "Activa"}
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-gray-600">
                  <span className="rounded-full bg-blue-50 px-2 py-1 text-blue-700">{formatAccess(classroom.accessType)}</span>
                  {classroom.category && (
                    <span className="rounded-full bg-purple-50 px-2 py-1 text-purple-700">{classroom.category}</span>
                  )}
                  {classroom.institutionId && <span>Institución: {classroom.institutionId}</span>}
                </div>
                <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
                  <span>Creada por {classroom.createdBy}</span>
                  <span>{new Date(classroom.updatedAt).toLocaleDateString()}</span>
                </div>
                {user?.role === "TEACHER" && classroom.createdBy === user.id && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    <button
                      type="button"
                      className="rounded-md border border-gray-300 px-3 py-1 text-xs text-gray-700 hover:bg-gray-50"
                      onClick={() => startEdit(classroom)}
                    >
                      Editar
                    </button>
                    <button
                      type="button"
                      className="rounded-md border border-red-200 px-3 py-1 text-xs text-red-600 hover:bg-red-50"
                      onClick={() => handleDelete(classroom.id)}
                      disabled={isSubmitting}
                    >
                      Eliminar
                    </button>
                  </div>
                )}
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
