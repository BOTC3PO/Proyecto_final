import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { apiGet } from "../lib/api";
import type { Classroom } from "../domain/classroom/classroom.types";
import { getClassroomStatusLabel, normalizeClassroomStatus } from "../domain/classroom/classroom.types";
import { useAuth } from "../auth/use-auth";
import {
  createClassroom,
  deleteClassroom,
  fetchClassrooms,
  fetchClassroomProgressSnapshots,
  updateClassroom,
  type ClassroomProgressSnapshot
} from "../services/aulas";

const formatAccess = (accessType: Classroom["accessType"]) => (accessType === "publica" ? "Pública" : "Privada");
const formatPercent = (value: number) => `${Math.round(value)}%`;

const emptyForm = {
  name: "",
  description: "",
  accessType: "publica" as Classroom["accessType"],
  status: "ACTIVE" as Classroom["status"],
  institutionId: "",
  category: ""
};

export default function ProfesorAulas() {
  const { user } = useAuth();
  const [classrooms, setClassrooms] = useState<Classroom[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [progressByClassroom, setProgressByClassroom] = useState<Record<string, ClassroomProgressSnapshot>>({});
  const [progressError, setProgressError] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [reportSelections, setReportSelections] = useState<Record<string, { format: "pdf" | "xlsx"; studentId: string }>>(
    {}
  );
  const [deletePromptId, setDeletePromptId] = useState<string | null>(null);
  const [downloadOnDelete, setDownloadOnDelete] = useState<Record<string, boolean>>({});
  const [mostrarArchivadas, setMostrarArchivadas] = useState(false);
  const [escuelas, setEscuelas] = useState<Array<{ id: string; name: string }>>([]);
  const [materias, setMaterias] = useState<string[]>([]);

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

  useEffect(() => {
    if (classrooms.length === 0) {
      setProgressByClassroom({});
      return;
    }
    let active = true;
    const ids = classrooms.map((c) => c.id).filter(Boolean);
    if (ids.length === 0) return;
    fetchClassroomProgressSnapshots(ids)
      .then((snapshots) => {
        if (!active) return;
        const mapped: Record<string, ClassroomProgressSnapshot> = {};
        snapshots.forEach((snapshot) => {
          mapped[snapshot.classroomId] = snapshot;
        });
        setProgressByClassroom(mapped);
        setProgressError(null);
      })
      .catch((err: Error) => {
        if (!active) return;
        setProgressError(err.message);
      });
    return () => {
      active = false;
    };
  }, [classrooms]);

  useEffect(() => {
    apiGet<{ items: Array<{ escuelaId: string; nombre?: string }> }>("/api/membresias/mis-escuelas")
      .then((data) => {
        const items = (data.items ?? []).map((m) => ({
          id: m.escuelaId,
          name: m.nombre ?? m.escuelaId,
        }));
        setEscuelas(items);
        if (items.length === 1) {
          setForm((f) => ({ ...f, institutionId: items[0].id }));
        }
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    apiGet<{ items: Array<{ nombre: string }> }>("/api/materias")
      .then((data) => {
        setMaterias((data.items ?? []).map((m) => m.nombre));
      })
      .catch(() => {});
  }, []);

  const visibleClassrooms = useMemo(() => {
    if (!user) return [];
    if (user.role === "TEACHER") {
      // El backend ya filtra por escuela y membresía
      // No filtrar de nuevo en el frontend
      return classrooms;
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
          updatedAt: now,
          members: user?.id ? [
            {
              userId: user._id ?? user.id,
              roleInClass: "TEACHER" as const,
              schoolId: user.schoolId ?? "",
            },
            {
              userId: user._id ?? user.id,
              roleInClass: "ADMIN" as const,
              schoolId: user.schoolId ?? "",
            },
          ] : [],
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
      status: normalizeClassroomStatus(classroom.status) ?? "ACTIVE",
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
    const normalizedStatus = normalizeClassroomStatus(classroom.status) ?? "ACTIVE";
    if (normalizedStatus === "LOCKED") {
      setSubmitError("El aula está bloqueada y no admite cambios de estado.");
      setIsSubmitting(false);
      return;
    }
    const nextStatus = normalizedStatus === "ACTIVE" ? "ARCHIVED" : "ACTIVE";
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
      status: "ACTIVE",
      institutionId: classroom.institutionId ?? "",
      category: classroom.category ?? ""
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const updateReportSelection = (classroomId: string, updates: Partial<{ format: "pdf" | "xlsx"; studentId: string }>) => {
    setReportSelections((prev) => ({
      ...prev,
      [classroomId]: { ...(prev[classroomId] ?? { format: "pdf" as const, studentId: "" }), ...updates }
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

  const aulasFiltradas = mostrarArchivadas
    ? visibleClassrooms
    : visibleClassrooms.filter((c) =>
        !c.status || c.status === "ACTIVE" || c.status === "activa"
      );

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-5">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-xl font-semibold text-[var(--c-text)]">Aulas virtuales</h1>
            <p className="text-sm text-[var(--c-muted)] mt-0.5">Acceso y administración de aulas para tus cursos.</p>
          </div>
          {user?.role !== "TEACHER" && (
            <span className="rounded-md bg-[var(--c-border)] px-4 py-2 text-sm text-[var(--c-muted)]">
              Solo docentes pueden crear aulas
            </span>
          )}
        </div>

        {user?.role === "TEACHER" && (
          <section id="crear" className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--c-border)]">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--c-muted)]">
                {editingId ? 'Editar aula' : 'Crear nueva aula'}
              </p>
            </div>
            <form className="p-4 grid gap-3 md:grid-cols-2" onSubmit={handleSubmit}>
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-[var(--c-text)]">Nombre del aula</label>
                <input
                  value={form.name}
                  onChange={(event) => handleFieldChange("name", event.target.value)}
                  className="mt-1 w-full rounded-md border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 focus:outline-none focus:border-[var(--c-primary)]"
                  required
                />
              </div>
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-[var(--c-text)]">Estado</label>
                <select
                  value={form.status}
                  onChange={(event) => handleFieldChange("status", event.target.value)}
                  className="mt-1 w-full rounded-md border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-3 py-2 focus:outline-none focus:border-[var(--c-primary)]"
                >
                  <option value="ACTIVE">Activa</option>
                  <option value="ARCHIVED">Archivada</option>
                  <option value="LOCKED">Bloqueada</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-[var(--c-text)]">Descripción</label>
                <textarea
                  value={form.description}
                  onChange={(event) => handleFieldChange("description", event.target.value)}
                  className="mt-1 w-full rounded-md border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 focus:outline-none focus:border-[var(--c-primary)]"
                  rows={3}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--c-text)]">Tipo de acceso</label>
                <select
                  value={form.accessType}
                  onChange={(event) => handleFieldChange("accessType", event.target.value)}
                  className="mt-1 w-full rounded-md border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-3 py-2 focus:outline-none focus:border-[var(--c-primary)]"
                >
                  <option value="publica">Pública</option>
                  <option value="privada">Privada</option>
                </select>
              </div>
              <div>
                <label className="flex flex-col gap-1 text-sm font-medium text-[var(--c-text)]">
                  Escuela
                  <select
                    value={form.institutionId}
                    onChange={(e) => setForm((f) => ({ ...f, institutionId: e.target.value }))}
                    className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                  >
                    <option value="">Sin escuela (aula personal)</option>
                    {escuelas.map((e) => (
                      <option key={e.id} value={e.id}>{e.name}</option>
                    ))}
                  </select>
                </label>
              </div>
              <div>
                <label className="flex flex-col gap-1 text-sm font-medium text-[var(--c-text)]">
                  Materia
                  <select
                    value={form.category ?? ""}
                    onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}
                    className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                  >
                    <option value="">General</option>
                    {materias.map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                </label>
              </div>
              <div className="flex flex-wrap items-center gap-3 md:col-span-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-md bg-[var(--c-primary)] px-4 py-2 text-white hover:opacity-90 disabled:opacity-60"
                >
                  {editingId ? "Guardar cambios" : "Crear aula"}
                </button>
                {editingId && (
                  <button
                    type="button"
                    className="rounded-md border border-[var(--c-border)] px-4 py-2 text-[var(--c-text)] hover:bg-[var(--c-bg)]"
                    onClick={resetForm}
                  >
                    Cancelar edición
                  </button>
                )}
                {submitError && <span className="text-sm text-[var(--c-danger)]">{submitError}</span>}
              </div>
            </form>
          </section>
        )}

        <section className="space-y-4">
          {isLoading ? (
            <div className="space-y-2">
              {[1,2,3].map(i => <div key={i} className="h-14 rounded-xl animate-pulse bg-[var(--c-border)]" />)}
            </div>
          ) : error ? (
            <div className="rounded-lg border border-red-200 bg-red-50 p-6 text-red-700">{error}</div>
          ) : visibleClassrooms.length === 0 ? (
            <div className="rounded-lg border border-dashed border-[var(--c-border)] p-6 text-[var(--c-muted)]">
              {user?.role === "TEACHER"
                ? "Todavía no creaste aulas. Usa \"Crear aula\" para comenzar."
                : "No hay aulas disponibles para tu rol todavía."}
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-[var(--c-text)]">
                  Mis aulas ({visibleClassrooms.length})
                </p>
                <label className="flex items-center gap-2 text-xs text-[var(--c-muted)] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={mostrarArchivadas}
                    onChange={(e) => setMostrarArchivadas(e.target.checked)}
                    className="rounded"
                  />
                  Mostrar archivadas
                </label>
              </div>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {aulasFiltradas.map((classroom) => (
                <article key={classroom.id} className={`rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-5 ${classroom.status === "ARCHIVED" ? "opacity-50" : ""}`}>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h2 className="text-lg font-semibold text-[var(--c-text)]">{classroom.name}</h2>
                      <p className="mt-1 text-sm text-[var(--c-muted)]">{classroom.description}</p>
                    </div>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        normalizeClassroomStatus(classroom.status) === "ARCHIVED" ||
                        normalizeClassroomStatus(classroom.status) === "LOCKED"
                          ? "bg-gray-100 text-gray-600"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {getClassroomStatusLabel(classroom.status ?? "ACTIVE")}
                    </span>
                  </div>
                  <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-[var(--c-muted)]">
                    <span className="rounded-full bg-blue-50 px-2 py-1 text-blue-700">{formatAccess(classroom.accessType)}</span>
                    {classroom.category && (
                      <span className="rounded-full bg-purple-50 px-2 py-1 text-purple-700">{classroom.category}</span>
                    )}
                    {classroom.institutionId && <span>Institución: {classroom.institutionId}</span>}
                  </div>
                  <div className="mt-4 flex items-center justify-between text-xs text-[var(--c-muted)]">
                    <span>Creada por {classroom.createdBy}</span>
                    <span>{new Date(classroom.updatedAt).toLocaleDateString()}</span>
                  </div>
                  <div className="mt-4 rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] p-4 text-xs text-[var(--c-muted)]">
                    <h3 className="text-sm font-semibold text-[var(--c-text)]">Progreso de estudiantes</h3>
                    {progressError && (
                      <p className="mt-1 text-xs text-[var(--c-danger)]">Error al cargar progreso: {progressError}</p>
                    )}
                    <p className="mt-1 text-[var(--c-muted)]">
                      Última actualización: {progressByClassroom[classroom.id]?.lastUpdate ?? "--"}
                    </p>
                    <div className="mt-3 grid grid-cols-2 gap-3 text-[11px] text-[var(--c-muted)]">
                      <div className="rounded-md bg-[var(--c-surface)] px-3 py-2 border border-[var(--c-border)]">
                        <p className="font-semibold text-[var(--c-text)]">{progressByClassroom[classroom.id]?.totalStudents ?? 0}</p>
                        <p>Estudiantes registrados</p>
                      </div>
                      <div className="rounded-md bg-[var(--c-surface)] px-3 py-2 border border-[var(--c-border)]">
                        <p className="font-semibold text-[var(--c-text)]">{progressByClassroom[classroom.id]?.activeStudents ?? 0}</p>
                        <p>Activos esta semana</p>
                      </div>
                      <div className="rounded-md bg-[var(--c-surface)] px-3 py-2 border border-[var(--c-border)]">
                        <p className="font-semibold text-[var(--c-text)]">
                          {formatPercent(progressByClassroom[classroom.id]?.avgCompletion ?? 0)}
                        </p>
                        <p>Progreso promedio</p>
                      </div>
                      <div className="rounded-md bg-[var(--c-surface)] px-3 py-2 border border-[var(--c-border)]">
                        <p className="font-semibold text-[var(--c-text)]">{progressByClassroom[classroom.id]?.avgScore ?? 0}</p>
                        <p>Score promedio</p>
                      </div>
                    </div>
                    <ul className="mt-3 space-y-2">
                      {(progressByClassroom[classroom.id]?.students ?? []).map((student) => (
                        <li key={student.id} className="flex items-center justify-between rounded-md bg-[var(--c-surface)] px-3 py-2">
                          <div>
                            <p className="font-semibold text-[var(--c-text)]">{student.name}</p>
                            <p className="text-[11px] text-[var(--c-muted)]">
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
                  <div className="mt-4 rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] p-4 text-xs text-[var(--c-muted)]">
                    <h3 className="text-sm font-semibold text-[var(--c-text)]">Reportes grupales e individuales</h3>
                    <p className="mt-1 text-[var(--c-muted)]">Configura el formato y descarga reportes según tu necesidad.</p>
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      <label className="text-[11px] text-[var(--c-muted)]">Formato</label>
                      <select
                        value={reportSelections[classroom.id]?.format ?? "pdf"}
                        onChange={(event) => updateReportSelection(classroom.id, { format: event.target.value as "pdf" | "xlsx" })}
                        className="rounded-md border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-2 py-1 text-[11px] focus:outline-none focus:border-[var(--c-primary)]"
                      >
                        <option value="pdf">PDF</option>
                        <option value="xlsx">Excel</option>
                      </select>
                      <label className="ml-2 text-[11px] text-[var(--c-muted)]">Estudiante</label>
                      <select
                        value={reportSelections[classroom.id]?.studentId ?? ""}
                        onChange={(event) => updateReportSelection(classroom.id, { studentId: event.target.value })}
                        className="rounded-md border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-2 py-1 text-[11px] focus:outline-none focus:border-[var(--c-primary)]"
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
                        className="rounded-md border border-[var(--c-border)] px-3 py-1 text-[11px] font-semibold text-[var(--c-primary)] hover:bg-[var(--c-bg)]"
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
                  {user?.role === "TEACHER" && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Link
                        to={`/profesor/aulas/${
                          (classroom as { _id?: string } & typeof classroom)
                            ._id ?? classroom.id
                        }/configuracion`}
                        className="rounded-md border border-[var(--c-border)]
                          px-3 py-1 text-xs text-[var(--c-primary)]
                          hover:bg-[var(--c-bg)]"
                      >
                        Configurar
                      </Link>
                      <button
                        type="button"
                        className="rounded-md border border-[var(--c-border)] px-3 py-1 text-xs text-[var(--c-text)] hover:bg-[var(--c-bg)]"
                        onClick={() => startEdit(classroom)}
                      >
                        Editar
                      </button>
                      <button
                        type="button"
                        className="rounded-md border border-amber-200 px-3 py-1 text-xs text-amber-700 hover:bg-amber-50"
                        onClick={() => handleArchiveToggle(classroom)}
                        disabled={isSubmitting || normalizeClassroomStatus(classroom.status) === "LOCKED"}
                      >
                        {normalizeClassroomStatus(classroom.status) === "LOCKED"
                          ? "Bloqueada"
                          : normalizeClassroomStatus(classroom.status) === "ARCHIVED"
                          ? "Reactivar"
                          : "Archivar"}
                      </button>
                      <button
                        type="button"
                        className="rounded-md border border-[var(--c-border)] px-3 py-1 text-xs text-[var(--c-text)] hover:bg-[var(--c-bg)]"
                        onClick={() => handleReuseContent(classroom)}
                      >
                        Reutilizar contenido
                      </button>
                    </div>
                  )}
                </article>
              ))}
            </div>
            </>
          )}
        </section>
      </div>
  );
}
