import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import type { Classroom } from "../domain/classroom/classroom.types";
import { normalizeClassroomStatus } from "../domain/classroom/classroom.types";
import { fetchClassroomDetail, updateClassroom } from "../services/aulas";
import { createActivity, deleteActivity, fetchUpcomingActivities, type UpcomingActivity } from "../services/actividades";
import { fetchClaseModulos, assignModulo, unassignModulo, type ClaseModuloItem } from "../services/clase-modulos";
import { apiGet } from "../lib/api";
import type { Module } from "../domain/module/module.types";

type FormState = {
  name: string;
  description: string;
  accessType: Classroom["accessType"];
  status: Classroom["status"];
  institutionId: string;
  category: string;
};

const buildInitialState = (classroom: Classroom): FormState => ({
  name: classroom.name,
  description: classroom.description,
  accessType: classroom.accessType,
  status: normalizeClassroomStatus(classroom.status) ?? "ACTIVE",
  institutionId: classroom.institutionId ?? "",
  category: classroom.category ?? "",
});

export default function ProfesorAulaConfiguracion() {
  const { id } = useParams();
  const [classroom, setClassroom] = useState<Classroom | null>(null);
  const [form, setForm] = useState<FormState | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [activities, setActivities] = useState<UpcomingActivity[]>([]);
  const [actForm, setActForm] = useState({
    tipo: "clase" as "clase" | "evaluacion" | "evento",
    titulo: "",
    descripcion: "",
    fecha: "",
  });
  const [actSaving, setActSaving] = useState(false);
  const [actError, setActError] = useState<string | null>(null);
  const [asignados, setAsignados] = useState<ClaseModuloItem[]>([]);
  const [todosModulos, setTodosModulos] = useState<Module[]>([]);
  const [moduloSearch, setModuloSearch] = useState("");
  const [moduloSaving, setModuloSaving] = useState(false);

  useEffect(() => {
    if (!id) return;
    let active = true;
    setIsLoading(true);
    setError(null);
    fetchClassroomDetail(id)
      .then((data) => {
        if (!active) return;
        setClassroom(data);
        setForm(buildInitialState(data));
      })
      .catch((err: Error) => {
        if (!active) return;
        setError(err.message || "No pudimos cargar la configuración del aula.");
      })
      .finally(() => {
        if (!active) return;
        setIsLoading(false);
      });
    return () => {
      active = false;
    };
  }, [id]);

  useEffect(() => {
    if (!id) return;
    fetchUpcomingActivities(id).then(setActivities).catch(() => {});
  }, [id]);

  useEffect(() => {
    if (!id) return;
    fetchClaseModulos(id).then(setAsignados).catch(() => {});
    apiGet<{ items: Module[] }>("/api/modulos")
      .then((data) => setTodosModulos(data.items))
      .catch(() => {});
  }, [id]);

  const modulosDisponibles = todosModulos.filter((m) => {
    const yaAsignado = asignados.some((a) => a.moduloId === m.id);
    if (yaAsignado) return false;
    if (!moduloSearch.trim()) return true;
    return m.title.toLowerCase().includes(moduloSearch.toLowerCase()) ||
      (m.subject ?? "").toLowerCase().includes(moduloSearch.toLowerCase());
  });

  const handleAssign = async (moduloId: string) => {
    if (!id) return;
    setModuloSaving(true);
    try {
      await assignModulo(id, moduloId);
      const updated = await fetchClaseModulos(id);
      setAsignados(updated);
    } finally {
      setModuloSaving(false);
    }
  };

  const handleUnassign = async (moduloId: string) => {
    if (!id) return;
    await unassignModulo(id, moduloId);
    setAsignados((prev) => prev.filter((a) => a.moduloId !== moduloId));
  };

  const classroomTitle = useMemo(() => classroom?.name ?? "Aula", [classroom?.name]);

  const handleFieldChange = (field: keyof FormState, value: string) => {
    setForm((prev) => (prev ? { ...prev, [field]: value } : prev));
  };

  const handleCreateActivity = async () => {
    if (!id || !actForm.titulo.trim() || !actForm.fecha) return;
    setActSaving(true);
    setActError(null);
    try {
      await createActivity({
        classroomId: id,
        tipo: actForm.tipo,
        titulo: actForm.titulo.trim(),
        descripcion: actForm.descripcion.trim() || undefined,
        fecha: actForm.fecha,
      });
      setActForm({ tipo: "clase", titulo: "", descripcion: "", fecha: "" });
      const updated = await fetchUpcomingActivities(id);
      setActivities(updated);
    } catch (e) {
      setActError(e instanceof Error ? e.message : "No se pudo crear la actividad.");
    } finally {
      setActSaving(false);
    }
  };

  const handleDeleteActivity = async (actId: string) => {
    await deleteActivity(actId);
    setActivities((prev) => prev.filter((a) => a.id !== actId));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!id || !form) return;
    setIsSaving(true);
    setError(null);
    setSuccessMessage(null);
    try {
      await updateClassroom(id, {
        name: form.name,
        description: form.description,
        accessType: form.accessType,
        status: form.status,
        institutionId: form.institutionId || undefined,
        category: form.category || undefined,
      });
      setClassroom((prev) =>
        prev
          ? {
              ...prev,
              name: form.name,
              description: form.description,
              accessType: form.accessType,
              status: form.status,
              institutionId: form.institutionId || undefined,
              category: form.category || undefined,
              updatedAt: new Date().toISOString(),
            }
          : prev
      );
      setSuccessMessage("Configuración guardada.");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("No pudimos guardar la configuración del aula.");
      }
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-5">
        <header className="flex flex-wrap items-start justify-between gap-3">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--c-primary)]">Configuración del aula</p>
            <h1 className="text-3xl font-bold text-[var(--c-text)]">{classroomTitle}</h1>
            <p className="text-base text-[var(--c-muted)]">
              Ajusta el nombre, la descripción y la visibilidad del aula. Los cambios se guardan en la API.
            </p>
          </div>
          {id && (
            <Link
              className="inline-flex items-center gap-2 rounded-full border border-[var(--c-border)] px-4 py-2 text-sm font-semibold text-[var(--c-text)] hover:bg-[var(--c-bg)]"
              to={`/clases?id=${encodeURIComponent(id)}`}
            >
              Volver al aula
            </Link>
          )}
        </header>

        {isLoading ? (
          <div className="rounded-xl border border-dashed border-[var(--c-border)] bg-[var(--c-surface)] p-6 text-sm text-[var(--c-muted)]">
            Cargando configuración del aula...
          </div>
        ) : error ? (
          <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-sm text-red-700">{error}</div>
        ) : form ? (
          <>
          <form className="grid gap-5 rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-6 shadow-sm" onSubmit={handleSubmit}>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm font-semibold text-[var(--c-text)]">
                Nombre del aula
                <input
                  className="rounded-md border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                  value={form.name}
                  onChange={(event) => handleFieldChange("name", event.target.value)}
                  required
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-semibold text-[var(--c-text)]">
                Estado
                <select
                  className="rounded-md border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                  value={form.status}
                  onChange={(event) => handleFieldChange("status", event.target.value)}
                >
                  <option value="ACTIVE">Activa</option>
                  <option value="ARCHIVED">Archivada</option>
                  <option value="LOCKED">Bloqueada</option>
                </select>
              </label>
            </div>

            <label className="flex flex-col gap-2 text-sm font-semibold text-[var(--c-text)]">
              Descripción
              <textarea
                className="min-h-[120px] rounded-md border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                value={form.description}
                onChange={(event) => handleFieldChange("description", event.target.value)}
                required
              />
            </label>

            <div className="grid gap-4 md:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm font-semibold text-[var(--c-text)]">
                Tipo de acceso
                <select
                  className="rounded-md border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                  value={form.accessType}
                  onChange={(event) => handleFieldChange("accessType", event.target.value)}
                >
                  <option value="publica">Pública</option>
                  <option value="privada">Privada</option>
                </select>
              </label>
              <label className="flex flex-col gap-2 text-sm font-semibold text-[var(--c-text)]">
                Institución (opcional)
                <input
                  className="rounded-md border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                  value={form.institutionId}
                  onChange={(event) => handleFieldChange("institutionId", event.target.value)}
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-semibold text-[var(--c-text)]">
                Categoría (opcional)
                <input
                  className="rounded-md border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                  value={form.category}
                  onChange={(event) => handleFieldChange("category", event.target.value)}
                />
              </label>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                className="inline-flex items-center justify-center rounded-full bg-[var(--c-primary)] px-4 py-2 text-sm font-semibold text-white shadow hover:opacity-90 disabled:opacity-60"
                type="submit"
                disabled={isSaving}
              >
                {isSaving ? "Guardando..." : "Guardar cambios"}
              </button>
              {successMessage && <span className="text-sm text-emerald-600">{successMessage}</span>}
              {error && <span className="text-sm text-[var(--c-danger)]">{error}</span>}
            </div>
          </form>

          <section className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-6 shadow-sm space-y-4">
            <h2 className="text-lg font-semibold text-[var(--c-text)]">
              Próximas actividades
            </h2>

            {activities.length === 0 ? (
              <p className="text-sm text-[var(--c-muted)]">Sin actividades cargadas.</p>
            ) : (
              <ul className="space-y-2">
                {activities.map((act) => (
                  <li key={act.id}
                    className="flex items-center justify-between gap-3 rounded-lg border border-[var(--c-border)] px-3 py-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                        act.tipo === "evaluacion"
                          ? "bg-amber-100 text-amber-700"
                          : act.tipo === "evento"
                          ? "bg-violet-100 text-violet-700"
                          : "bg-blue-100 text-blue-700"
                      }`}>
                        {act.tipo === "evaluacion" ? "📝 Evaluación"
                          : act.tipo === "evento" ? "📅 Evento"
                          : "📖 Clase"}
                      </span>
                      <span className="font-medium text-[var(--c-text)]">{act.label}</span>
                      <span className="text-[var(--c-muted)]">· {act.when}</span>
                    </div>
                    <button
                      type="button"
                      className="text-xs text-red-400 hover:text-red-600"
                      onClick={() => handleDeleteActivity(act.id)}
                    >
                      Eliminar
                    </button>
                  </li>
                ))}
              </ul>
            )}

            <div className="grid gap-3 sm:grid-cols-2">
              <label className="flex flex-col gap-1 text-xs font-medium text-[var(--c-text)]">
                Tipo
                <select
                  value={actForm.tipo}
                  onChange={(e) => setActForm((p) => ({
                    ...p, tipo: e.target.value as "clase" | "evaluacion" | "evento"
                  }))}
                  className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                >
                  <option value="clase">📖 Clase</option>
                  <option value="evaluacion">📝 Evaluación</option>
                  <option value="evento">📅 Evento</option>
                </select>
              </label>
              <label className="flex flex-col gap-1 text-xs font-medium text-[var(--c-text)]">
                Fecha y hora
                <input
                  type="datetime-local"
                  value={actForm.fecha}
                  onChange={(e) => setActForm((p) => ({ ...p, fecha: e.target.value }))}
                  className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                />
              </label>
              <label className="flex flex-col gap-1 text-xs font-medium text-[var(--c-text)] sm:col-span-2">
                Título *
                <input
                  type="text"
                  placeholder="Ej: Clase de repaso, Evaluación parcial..."
                  value={actForm.titulo}
                  onChange={(e) => setActForm((p) => ({ ...p, titulo: e.target.value }))}
                  className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                />
              </label>
              <label className="flex flex-col gap-1 text-xs font-medium text-[var(--c-text)] sm:col-span-2">
                Descripción (opcional)
                <textarea
                  rows={2}
                  placeholder="Detalle adicional..."
                  value={actForm.descripcion}
                  onChange={(e) => setActForm((p) => ({ ...p, descripcion: e.target.value }))}
                  className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                />
              </label>
            </div>

            {actError && (
              <p className="text-xs text-[var(--c-danger)]">{actError}</p>
            )}

            <button
              type="button"
              disabled={actSaving || !actForm.titulo.trim() || !actForm.fecha}
              onClick={handleCreateActivity}
              className="rounded-xl bg-[var(--c-primary)] px-5 py-2 text-sm font-semibold text-white hover:opacity-90 disabled:opacity-50 transition-colors"
            >
              {actSaving ? "Guardando..." : "+ Agregar actividad"}
            </button>
          </section>

          <section className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-6 shadow-sm space-y-4">
            <h2 className="text-lg font-semibold text-[var(--c-text)]">
              Módulos asignados
            </h2>

            {asignados.length === 0 ? (
              <p className="text-sm text-[var(--c-muted)]">Sin módulos asignados.</p>
            ) : (
              <ul className="space-y-2">
                {asignados.map((item) => {
                  const modulo = todosModulos.find((m) => m.id === item.moduloId);
                  return (
                    <li key={item.moduloId}
                      className="flex items-center justify-between gap-3 rounded-lg border border-[var(--c-border)] px-3 py-2 text-sm">
                      <div>
                        <span className="font-medium text-[var(--c-text)]">
                          {modulo?.title ?? item.moduloId}
                        </span>
                        {modulo?.subject && (
                          <span className="ml-2 text-xs text-[var(--c-muted)]">
                            {modulo.subject}
                          </span>
                        )}
                      </div>
                      <button
                        type="button"
                        className="text-xs text-red-400 hover:text-red-600"
                        onClick={() => handleUnassign(item.moduloId)}
                      >
                        Quitar
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}

            <div className="space-y-2">
              <input
                type="search"
                placeholder="Buscar módulo para asignar..."
                value={moduloSearch}
                onChange={(e) => setModuloSearch(e.target.value)}
                className="w-full rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
              />
              {moduloSearch.trim() && (
                <ul className="max-h-48 overflow-y-auto rounded-lg border border-[var(--c-border)] divide-y divide-[var(--c-border)]">
                  {modulosDisponibles.length === 0 ? (
                    <li className="px-3 py-2 text-sm text-[var(--c-muted)]">
                      Sin resultados.
                    </li>
                  ) : (
                    modulosDisponibles.slice(0, 10).map((m) => (
                      <li key={m.id}
                        className="flex items-center justify-between gap-3 px-3 py-2 text-sm hover:bg-[var(--c-bg)]">
                        <div>
                          <span className="font-medium text-[var(--c-text)]">{m.title}</span>
                          {m.subject && (
                            <span className="ml-2 text-xs text-[var(--c-muted)]">{m.subject}</span>
                          )}
                        </div>
                        <button
                          type="button"
                          disabled={moduloSaving}
                          className="text-xs font-semibold text-[var(--c-primary)] hover:underline disabled:opacity-50"
                          onClick={() => handleAssign(m.id)}
                        >
                          + Asignar
                        </button>
                      </li>
                    ))
                  )}
                </ul>
              )}
            </div>
          </section>
          </>
        ) : (
          <div className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-6 text-sm text-[var(--c-muted)]">
            No encontramos el aula solicitada.
          </div>
        )}
      </div>
  );
}
