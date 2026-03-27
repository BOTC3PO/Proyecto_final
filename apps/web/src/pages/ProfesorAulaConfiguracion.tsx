import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import type { Classroom } from "../domain/classroom/classroom.types";
import { normalizeClassroomStatus } from "../domain/classroom/classroom.types";
import { fetchClassroomDetail, updateClassroom } from "../services/aulas";
import { createActivity, deleteActivity, fetchUpcomingActivities, type UpcomingActivity } from "../services/actividades";

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
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 py-10">
      <header className="flex flex-wrap items-start justify-between gap-3">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">Configuración del aula</p>
          <h1 className="text-3xl font-bold text-slate-900">{classroomTitle}</h1>
          <p className="text-base text-slate-600">
            Ajusta el nombre, la descripción y la visibilidad del aula. Los cambios se guardan en la API.
          </p>
        </div>
        {id && (
          <Link
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            to={`/clases?id=${encodeURIComponent(id)}`}
          >
            Volver al aula
          </Link>
        )}
      </header>

      {isLoading ? (
        <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-6 text-sm text-slate-500">
          Cargando configuración del aula...
        </div>
      ) : error ? (
        <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-sm text-red-700">{error}</div>
      ) : form ? (
        <>
        <form className="grid gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm" onSubmit={handleSubmit}>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-semibold text-slate-700">
              Nombre del aula
              <input
                className="rounded-md border border-slate-200 px-3 py-2 text-sm"
                value={form.name}
                onChange={(event) => handleFieldChange("name", event.target.value)}
                required
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-semibold text-slate-700">
              Estado
              <select
                className="rounded-md border border-slate-200 px-3 py-2 text-sm"
                value={form.status}
                onChange={(event) => handleFieldChange("status", event.target.value)}
              >
                <option value="ACTIVE">Activa</option>
                <option value="ARCHIVED">Archivada</option>
                <option value="LOCKED">Bloqueada</option>
              </select>
            </label>
          </div>

          <label className="flex flex-col gap-2 text-sm font-semibold text-slate-700">
            Descripción
            <textarea
              className="min-h-[120px] rounded-md border border-slate-200 px-3 py-2 text-sm"
              value={form.description}
              onChange={(event) => handleFieldChange("description", event.target.value)}
              required
            />
          </label>

          <div className="grid gap-4 md:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-semibold text-slate-700">
              Tipo de acceso
              <select
                className="rounded-md border border-slate-200 px-3 py-2 text-sm"
                value={form.accessType}
                onChange={(event) => handleFieldChange("accessType", event.target.value)}
              >
                <option value="publica">Pública</option>
                <option value="privada">Privada</option>
              </select>
            </label>
            <label className="flex flex-col gap-2 text-sm font-semibold text-slate-700">
              Institución (opcional)
              <input
                className="rounded-md border border-slate-200 px-3 py-2 text-sm"
                value={form.institutionId}
                onChange={(event) => handleFieldChange("institutionId", event.target.value)}
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-semibold text-slate-700">
              Categoría (opcional)
              <input
                className="rounded-md border border-slate-200 px-3 py-2 text-sm"
                value={form.category}
                onChange={(event) => handleFieldChange("category", event.target.value)}
              />
            </label>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700 disabled:opacity-60"
              type="submit"
              disabled={isSaving}
            >
              {isSaving ? "Guardando..." : "Guardar cambios"}
            </button>
            {successMessage && <span className="text-sm text-emerald-600">{successMessage}</span>}
            {error && <span className="text-sm text-red-600">{error}</span>}
          </div>
        </form>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
          <h2 className="text-lg font-semibold text-slate-900">
            Próximas actividades
          </h2>

          {activities.length === 0 ? (
            <p className="text-sm text-slate-400">Sin actividades cargadas.</p>
          ) : (
            <ul className="space-y-2">
              {activities.map((act) => (
                <li key={act.id}
                  className="flex items-center justify-between gap-3 rounded-lg border border-slate-100 px-3 py-2 text-sm">
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
                    <span className="font-medium text-slate-800">{act.label}</span>
                    <span className="text-slate-400">· {act.when}</span>
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
            <label className="flex flex-col gap-1 text-xs font-medium text-slate-600">
              Tipo
              <select
                value={actForm.tipo}
                onChange={(e) => setActForm((p) => ({
                  ...p, tipo: e.target.value as "clase" | "evaluacion" | "evento"
                }))}
                className="rounded-lg border border-slate-200 px-3 py-2 text-sm bg-white"
              >
                <option value="clase">📖 Clase</option>
                <option value="evaluacion">📝 Evaluación</option>
                <option value="evento">📅 Evento</option>
              </select>
            </label>
            <label className="flex flex-col gap-1 text-xs font-medium text-slate-600">
              Fecha y hora
              <input
                type="datetime-local"
                value={actForm.fecha}
                onChange={(e) => setActForm((p) => ({ ...p, fecha: e.target.value }))}
                className="rounded-lg border border-slate-200 px-3 py-2 text-sm"
              />
            </label>
            <label className="flex flex-col gap-1 text-xs font-medium text-slate-600 sm:col-span-2">
              Título *
              <input
                type="text"
                placeholder="Ej: Clase de repaso, Evaluación parcial..."
                value={actForm.titulo}
                onChange={(e) => setActForm((p) => ({ ...p, titulo: e.target.value }))}
                className="rounded-lg border border-slate-200 px-3 py-2 text-sm"
              />
            </label>
            <label className="flex flex-col gap-1 text-xs font-medium text-slate-600 sm:col-span-2">
              Descripción (opcional)
              <textarea
                rows={2}
                placeholder="Detalle adicional..."
                value={actForm.descripcion}
                onChange={(e) => setActForm((p) => ({ ...p, descripcion: e.target.value }))}
                className="rounded-lg border border-slate-200 px-3 py-2 text-sm"
              />
            </label>
          </div>

          {actError && (
            <p className="text-xs text-red-600">{actError}</p>
          )}

          <button
            type="button"
            disabled={actSaving || !actForm.titulo.trim() || !actForm.fecha}
            onClick={handleCreateActivity}
            className="rounded-xl bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-50 transition-colors"
          >
            {actSaving ? "Guardando..." : "+ Agregar actividad"}
          </button>
        </section>
        </>
      ) : (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
          No encontramos el aula solicitada.
        </div>
      )}
    </main>
  );
}
