import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiGet, apiPut } from "../lib/api";
import type { Module } from "../domain/module/module.types";

type SaveStatus = "idle" | "loading" | "saving" | "saved" | "error";

export default function EditarModulo() {
  const { id } = useParams();
  const [status, setStatus] = useState<SaveStatus>("loading");
  const [message, setMessage] = useState("");
  const [form, setForm] = useState<Module | null>(null);

  useEffect(() => {
    let active = true;
    if (!id) {
      setStatus("error");
      setMessage("No se encontró el ID del módulo.");
      return;
    }
    apiGet<Module>(`/api/modulos/${id}`)
      .then((module) => {
        if (!active) return;
        setForm(module);
        setStatus("idle");
      })
      .catch(() => {
        if (!active) return;
        setStatus("error");
        setMessage("No se pudo cargar el módulo.");
      });
    return () => {
      active = false;
    };
  }, [id]);

  const onChange = (field: keyof Module, value: Module[keyof Module]) => {
    setForm((prev) => (prev ? { ...prev, [field]: value } : prev));
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form || !id) return;
    setStatus("saving");
    setMessage("");
    try {
      await apiPut(`/api/modulos/${id}`, {
        title: form.title,
        description: form.description,
        subject: form.subject,
        category: form.category,
        level: form.level,
        durationMinutes: form.durationMinutes,
        visibility: form.visibility,
        dependencies: form.dependencies,
        generatorRef: form.generatorRef ?? null,
        resources: form.resources ?? [],
        updatedAt: new Date().toISOString()
      });
      setStatus("saved");
      setMessage("Cambios guardados.");
    } catch {
      setStatus("error");
      setMessage("No se pudo guardar el módulo.");
    }
  };

  if (status === "loading") {
    return (
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <p className="text-sm text-gray-600">Cargando módulo...</p>
        </div>
      </main>
    );
  }

  if (status === "error" && !form) {
    return (
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <p className="text-sm text-red-600">{message || "No se pudo cargar el módulo."}</p>
        </div>
      </main>
    );
  }

  if (!form) return null;

  return (
    <main className="flex-1">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <header className="mb-6">
          <h1 className="text-3xl font-semibold text-center">Editar Módulo</h1>
          <p className="mt-2 text-center text-sm text-gray-600">Actualiza la información principal del módulo.</p>
        </header>
        <form className="space-y-6 bg-white rounded-xl shadow p-6" onSubmit={onSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Título</label>
            <input
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
              value={form.title}
              onChange={(event) => onChange("title", event.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Descripción</label>
            <textarea
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
              rows={4}
              value={form.description}
              onChange={(event) => onChange("description", event.target.value)}
              required
            />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">Materia</label>
              <input
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
                value={form.subject}
                onChange={(event) => onChange("subject", event.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Categoría</label>
              <input
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
                value={form.category}
                onChange={(event) => onChange("category", event.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div>
              <label className="block text-sm font-medium text-gray-700">Nivel</label>
              <input
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
                value={form.level}
                onChange={(event) => onChange("level", event.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Duración (min)</label>
              <input
                type="number"
                min={1}
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
                value={form.durationMinutes}
                onChange={(event) => onChange("durationMinutes", Number(event.target.value))}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Visibilidad</label>
              <select
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
                value={form.visibility}
                onChange={(event) => onChange("visibility", event.target.value as Module["visibility"])}
              >
                <option value="publico">Público</option>
                <option value="privado">Privado</option>
                <option value="escuela">Escuela</option>
              </select>
            </div>
          </div>

          <div className="flex items-center justify-between gap-3">
            {message && (
              <p
                className={`text-sm ${
                  status === "saved" ? "text-emerald-600" : status === "error" ? "text-red-600" : "text-gray-600"
                }`}
              >
                {message}
              </p>
            )}
            <button
              type="submit"
              className="ml-auto rounded-md bg-blue-600 px-4 py-2 text-sm text-white disabled:opacity-70"
              disabled={status === "saving"}
            >
              {status === "saving" ? "Guardando..." : "Guardar cambios"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
