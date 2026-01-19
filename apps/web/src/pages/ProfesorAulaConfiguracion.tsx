import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import type { Classroom } from "../domain/classroom/classroom.types";
import { fetchClassroomDetail, updateClassroom } from "../services/aulas";

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
  status: classroom.status,
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

  const classroomTitle = useMemo(() => classroom?.name ?? "Aula", [classroom?.name]);

  const handleFieldChange = (field: keyof FormState, value: string) => {
    setForm((prev) => (prev ? { ...prev, [field]: value } : prev));
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
                <option value="activa">Activa</option>
                <option value="archivada">Archivada</option>
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
      ) : (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
          No encontramos el aula solicitada.
        </div>
      )}
    </main>
  );
}
