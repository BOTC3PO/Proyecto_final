import { useEffect, useMemo, useState } from "react";
import type { Classroom } from "../domain/classroom/classroom.types";
import { useAuth } from "../auth/use-auth";
import { createClassroom, deleteClassroom, fetchClassrooms, updateClassroom } from "../services/aulas";

type StudentProgress = {
  id: string;
  name: string;
  completion: number;
  score: number;
  status: "al_dia" | "en_riesgo" | "destacado";
};

type ProgressSnapshot = {
  totalStudents: number;
  activeStudents: number;
  avgCompletion: number;
  avgScore: number;
  atRiskCount: number;
  students: StudentProgress[];
  lastUpdate: string;
};

const formatAccess = (accessType: Classroom["accessType"]) => (accessType === "publica" ? "Pública" : "Privada");
const formatPercent = (value: number) => `${Math.round(value)}%`;

const STUDENT_NAMES = [
  "Camila",
  "Diego",
  "Valentina",
  "Mateo",
  "Sofía",
  "Benjamín",
  "Martina",
  "Lucas",
  "Isabella",
  "Joaquín"
];

const hashString = (value: string) =>
  value.split("").reduce((acc, char) => acc + char.charCodeAt(0) * 17, 0);

const buildProgressSnapshot = (classroom: Classroom): ProgressSnapshot => {
  const seed = hashString(classroom.id);
  const totalStudents = 16 + (seed % 12);
  const activeStudents = totalStudents - (seed % 4);
  const avgCompletion = 62 + (seed % 26);
  const avgScore = 70 + (seed % 21);
  const atRiskCount = Math.max(1, Math.round(totalStudents * 0.12));
  const students = Array.from({ length: 4 }).map((_, index) => {
    const name = STUDENT_NAMES[(seed + index) % STUDENT_NAMES.length];
    const completion = 58 + ((seed + index * 7) % 42);
    const score = 65 + ((seed + index * 9) % 30);
    const status = completion > 88 ? "destacado" : completion < 70 ? "en_riesgo" : "al_dia";
    return {
      id: `${classroom.id}-student-${index}`,
      name,
      completion,
      score,
      status
    };
  });

  return {
    totalStudents,
    activeStudents,
    avgCompletion,
    avgScore,
    atRiskCount,
    students,
    lastUpdate: new Date(classroom.updatedAt).toLocaleString()
  };
};

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
  const [reportSelections, setReportSelections] = useState<Record<string, { format: "pdf" | "xlsx"; studentId: string }>>(
    {}
  );
  const [deletePromptId, setDeletePromptId] = useState<string | null>(null);
  const [downloadOnDelete, setDownloadOnDelete] = useState<Record<string, boolean>>({});

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

  const progressByClassroom = useMemo(() => {
    const snapshot: Record<string, ProgressSnapshot> = {};
    classrooms.forEach((classroom) => {
      snapshot[classroom.id] = buildProgressSnapshot(classroom);
    });
    return snapshot;
  }, [classrooms]);

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

  useEffect(() => {
    setReportSelections((prev) => {
      const next = { ...prev };
      visibleClassrooms.forEach((classroom) => {
        if (!next[classroom.id]) {
          const roster = progressByClassroom[classroom.id]?.students ?? [];
          next[classroom.id] = { format: "pdf", studentId: roster[0]?.id ?? "" };
        }
      });
      return next;
    });
  }, [visibleClassrooms, progressByClassroom]);

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
      if (downloadOnDelete[classroomId]) {
        const classroom = classrooms.find((item) => item.id === classroomId);
        const progress = progressByClassroom[classroomId];
        if (classroom && progress) {
          const exportPayload = {
            classroom,
            progreso: progress,
            exportadoEn: new Date().toISOString()
          };
          const blob = new Blob([JSON.stringify(exportPayload, null, 2)], { type: "application/json" });
          const url = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          link.download = `aula-${classroom.name.replace(/\s+/g, "-").toLowerCase()}-respaldo.json`;
          link.click();
          URL.revokeObjectURL(url);
        }
      }
      await deleteClassroom(classroomId);
      setClassrooms((prev) => prev.filter((classroom) => classroom.id !== classroomId));
      if (editingId === classroomId) {
        resetForm();
      }
      setDeletePromptId(null);
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

  const handleArchiveToggle = async (classroom: Classroom) => {
    setSubmitError(null);
    setIsSubmitting(true);
    const nextStatus = classroom.status === "activa" ? "archivada" : "activa";
    try {
      await updateClassroom(classroom.id, { status: nextStatus });
      setClassrooms((prev) =>
        prev.map((item) =>
          item.id === classroom.id
            ? {
                ...item,
                status: nextStatus,
                updatedAt: new Date().toISOString()
              }
            : item
        )
      );
    } catch (err: unknown) {
      if (err instanceof Error) {
        setSubmitError(err.message);
      } else {
        setSubmitError("No se pudo actualizar el estado del aula.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReuseContent = (classroom: Classroom) => {
    setEditingId(null);
    setForm({
      name: `${classroom.name} (copia)`,
      description: classroom.description,
      accessType: classroom.accessType,
      status: "activa",
      institutionId: classroom.institutionId ?? "",
      category: classroom.category ?? ""
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const updateReportSelection = (classroomId: string, updates: Partial<{ format: "pdf" | "xlsx"; studentId: string }>) => {
    setReportSelections((prev) => ({
      ...prev,
      [classroomId]: { format: "pdf", studentId: "", ...prev[classroomId], ...updates }
    }));
  };

  const handleReportDownload = (classroom: Classroom, scope: "grupal" | "individual") => {
    const progress = progressByClassroom[classroom.id];
    if (!progress) return;
    const selection = reportSelections[classroom.id] ?? { format: "pdf", studentId: progress.students[0]?.id ?? "" };
    const targetStudent =
      scope === "individual" ? progress.students.find((student) => student.id === selection.studentId) : undefined;
    const payload = {
      aula: classroom.name,
      scope,
      formato: selection.format,
      generadoEn: new Date().toISOString(),
      resumen: {
        estudiantes: progress.totalStudents,
        progresoPromedio: `${formatPercent(progress.avgCompletion)}`,
        scorePromedio: progress.avgScore
      },
      estudiante: targetStudent
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `reporte-${scope}-${classroom.name.replace(/\s+/g, "-").toLowerCase()}.${selection.format}`;
    link.click();
    URL.revokeObjectURL(url);
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
        <section id="crear" className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
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
                <div className="mt-4 rounded-lg border border-slate-100 bg-slate-50 p-4 text-xs text-slate-700">
                  <h3 className="text-sm font-semibold text-slate-800">Progreso de estudiantes</h3>
                  <p className="mt-1 text-slate-500">
                    Última actualización: {progressByClassroom[classroom.id]?.lastUpdate ?? "--"}
                  </p>
                  <div className="mt-3 grid grid-cols-2 gap-3 text-[11px] text-slate-600">
                    <div className="rounded-md bg-white px-3 py-2 shadow-sm">
                      <p className="font-semibold text-slate-800">{progressByClassroom[classroom.id]?.totalStudents ?? 0}</p>
                      <p>Estudiantes registrados</p>
                    </div>
                    <div className="rounded-md bg-white px-3 py-2 shadow-sm">
                      <p className="font-semibold text-slate-800">{progressByClassroom[classroom.id]?.activeStudents ?? 0}</p>
                      <p>Activos esta semana</p>
                    </div>
                    <div className="rounded-md bg-white px-3 py-2 shadow-sm">
                      <p className="font-semibold text-slate-800">
                        {formatPercent(progressByClassroom[classroom.id]?.avgCompletion ?? 0)}
                      </p>
                      <p>Progreso promedio</p>
                    </div>
                    <div className="rounded-md bg-white px-3 py-2 shadow-sm">
                      <p className="font-semibold text-slate-800">{progressByClassroom[classroom.id]?.avgScore ?? 0}</p>
                      <p>Score promedio</p>
                    </div>
                  </div>
                  <ul className="mt-3 space-y-2">
                    {(progressByClassroom[classroom.id]?.students ?? []).map((student) => (
                      <li key={student.id} className="flex items-center justify-between rounded-md bg-white px-3 py-2">
                        <div>
                          <p className="font-semibold text-slate-800">{student.name}</p>
                          <p className="text-[11px] text-slate-500">
                            Progreso {formatPercent(student.completion)} · Score {student.score}
                          </p>
                        </div>
                        <span
                          className={`rounded-full px-2 py-1 text-[10px] font-semibold ${
                            student.status === "destacado"
                              ? "bg-emerald-100 text-emerald-700"
                              : student.status === "en_riesgo"
                              ? "bg-amber-100 text-amber-700"
                              : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {student.status === "destacado" ? "Destacado" : student.status === "en_riesgo" ? "En riesgo" : "Al día"}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 rounded-lg border border-slate-100 bg-white p-4 text-xs text-slate-700">
                  <h3 className="text-sm font-semibold text-slate-800">Reportes grupales e individuales</h3>
                  <p className="mt-1 text-slate-500">Configura el formato y descarga reportes según tu necesidad.</p>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <label className="text-[11px] text-slate-500">Formato</label>
                    <select
                      value={reportSelections[classroom.id]?.format ?? "pdf"}
                      onChange={(event) => updateReportSelection(classroom.id, { format: event.target.value as "pdf" | "xlsx" })}
                      className="rounded-md border border-slate-200 px-2 py-1 text-[11px]"
                    >
                      <option value="pdf">PDF</option>
                      <option value="xlsx">Excel</option>
                    </select>
                    <label className="ml-2 text-[11px] text-slate-500">Estudiante</label>
                    <select
                      value={reportSelections[classroom.id]?.studentId ?? ""}
                      onChange={(event) => updateReportSelection(classroom.id, { studentId: event.target.value })}
                      className="rounded-md border border-slate-200 px-2 py-1 text-[11px]"
                    >
                      {(progressByClassroom[classroom.id]?.students ?? []).map((student) => (
                        <option key={student.id} value={student.id}>
                          {student.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <button
                      type="button"
                      className="rounded-md border border-blue-200 px-3 py-1 text-[11px] font-semibold text-blue-700 hover:bg-blue-50"
                      onClick={() => handleReportDownload(classroom, "grupal")}
                    >
                      Descargar grupal
                    </button>
                    <button
                      type="button"
                      className="rounded-md border border-emerald-200 px-3 py-1 text-[11px] font-semibold text-emerald-700 hover:bg-emerald-50"
                      onClick={() => handleReportDownload(classroom, "individual")}
                    >
                      Descargar individual
                    </button>
                  </div>
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
                      className="rounded-md border border-amber-200 px-3 py-1 text-xs text-amber-700 hover:bg-amber-50"
                      onClick={() => handleArchiveToggle(classroom)}
                      disabled={isSubmitting}
                    >
                      {classroom.status === "archivada" ? "Reactivar" : "Archivar"}
                    </button>
                    <button
                      type="button"
                      className="rounded-md border border-slate-200 px-3 py-1 text-xs text-slate-700 hover:bg-slate-50"
                      onClick={() => handleReuseContent(classroom)}
                    >
                      Reutilizar contenido
                    </button>
                    <button
                      type="button"
                      className="rounded-md border border-red-200 px-3 py-1 text-xs text-red-600 hover:bg-red-50"
                      onClick={() => setDeletePromptId(classroom.id)}
                      disabled={isSubmitting}
                    >
                      Eliminar
                    </button>
                  </div>
                )}
                {user?.role === "TEACHER" && classroom.createdBy === user.id && deletePromptId === classroom.id && (
                  <div className="mt-3 rounded-lg border border-red-100 bg-red-50 p-3 text-xs text-red-700">
                    <p className="font-semibold">¿Eliminar esta aula?</p>
                    <p className="mt-1 text-red-600">Podés descargar un respaldo antes de confirmar.</p>
                    <label className="mt-2 flex items-center gap-2 text-[11px] text-red-700">
                      <input
                        type="checkbox"
                        checked={downloadOnDelete[classroom.id] ?? false}
                        onChange={(event) =>
                          setDownloadOnDelete((prev) => ({ ...prev, [classroom.id]: event.target.checked }))
                        }
                      />
                      Descargar datos del aula
                    </label>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <button
                        type="button"
                        className="rounded-md bg-red-600 px-3 py-1 text-[11px] text-white hover:bg-red-700"
                        onClick={() => handleDelete(classroom.id)}
                        disabled={isSubmitting}
                      >
                        Confirmar eliminación
                      </button>
                      <button
                        type="button"
                        className="rounded-md border border-red-200 px-3 py-1 text-[11px] text-red-700 hover:bg-red-100"
                        onClick={() => setDeletePromptId(null)}
                      >
                        Cancelar
                      </button>
                    </div>
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
