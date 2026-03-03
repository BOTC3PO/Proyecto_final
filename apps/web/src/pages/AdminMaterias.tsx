import { useEffect, useState } from "react";
import {
  fetchAdminMaterias,
  createAdminMateria,
  updateAdminMateria,
  type AdminMateria,
} from "../services/admin";

type EditForm = { nombre: string; descripcion: string; nivel: string };
const emptyForm = (): EditForm => ({ nombre: "", descripcion: "", nivel: "" });

export default function AdminMaterias() {
  const [materias, setMaterias] = useState<AdminMateria[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Crear
  const [showCreate, setShowCreate] = useState(false);
  const [createForm, setCreateForm] = useState<EditForm>(emptyForm());
  const [creating, setCreating] = useState(false);
  const [createError, setCreateError] = useState<string | null>(null);

  // Editar
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<EditForm>(emptyForm());
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  const load = () => {
    setLoading(true);
    fetchAdminMaterias()
      .then((data) => { setMaterias(data); setError(null); })
      .catch((e: Error) => setError(e.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => { load(); }, []);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!createForm.nombre.trim()) { setCreateError("El nombre es requerido."); return; }
    setCreating(true);
    setCreateError(null);
    try {
      await createAdminMateria(createForm);
      setCreateForm(emptyForm());
      setShowCreate(false);
      load();
    } catch (e: unknown) {
      setCreateError((e as Error).message);
    } finally {
      setCreating(false);
    }
  };

  const startEdit = (m: AdminMateria) => {
    setEditingId(m.id);
    setEditForm({ nombre: m.nombre, descripcion: m.descripcion, nivel: m.nivel });
    setSaveError(null);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingId) return;
    if (!editForm.nombre.trim()) { setSaveError("El nombre es requerido."); return; }
    setSaving(true);
    setSaveError(null);
    try {
      await updateAdminMateria(editingId, editForm);
      setEditingId(null);
      load();
    } catch (e: unknown) {
      setSaveError((e as Error).message);
    } finally {
      setSaving(false);
    }
  };

  const handleToggle = async (m: AdminMateria) => {
    try {
      await updateAdminMateria(m.id, { activa: !m.activa });
      load();
    } catch {
      // ignore, user will see no change
    }
  };

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-slate-900">Gestión de materias</h1>
        <p className="text-base text-slate-600">
          Administra las materias disponibles en la plataforma educativa.
        </p>
      </header>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-lg font-semibold text-slate-900">Materias registradas</h2>
          <button
            onClick={() => { setShowCreate(!showCreate); setCreateForm(emptyForm()); setCreateError(null); }}
            className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
          >
            {showCreate ? "Cancelar" : "Nueva materia"}
          </button>
        </div>

        {/* Formulario crear */}
        {showCreate && (
          <form onSubmit={handleCreate} className="mt-5 space-y-3 rounded-xl border border-blue-100 bg-blue-50 p-4">
            <h3 className="text-sm font-semibold text-blue-900">Nueva materia</h3>
            <div className="grid gap-3 sm:grid-cols-3">
              <label className="flex flex-col gap-1">
                <span className="text-xs text-slate-600">Nombre *</span>
                <input
                  type="text"
                  value={createForm.nombre}
                  onChange={(e) => setCreateForm({ ...createForm, nombre: e.target.value })}
                  placeholder="Ej: Matemáticas"
                  className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </label>
              <label className="flex flex-col gap-1">
                <span className="text-xs text-slate-600">Nivel</span>
                <input
                  type="text"
                  value={createForm.nivel}
                  onChange={(e) => setCreateForm({ ...createForm, nivel: e.target.value })}
                  placeholder="Ej: Primaria"
                  className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </label>
              <label className="flex flex-col gap-1">
                <span className="text-xs text-slate-600">Descripción</span>
                <input
                  type="text"
                  value={createForm.descripcion}
                  onChange={(e) => setCreateForm({ ...createForm, descripcion: e.target.value })}
                  placeholder="Descripción breve"
                  className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </label>
            </div>
            {createError && <p className="text-xs text-red-600">{createError}</p>}
            <button
              type="submit"
              disabled={creating}
              className="rounded-xl bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-50 transition-colors"
            >
              {creating ? "Creando…" : "Crear materia"}
            </button>
          </form>
        )}

        <div className="mt-4 space-y-3">
          {loading && <p className="text-sm text-slate-500">Cargando materias…</p>}
          {error && <p className="text-sm text-red-500">Error: {error}</p>}

          {!loading && !error && materias.length === 0 && (
            <p className="text-sm text-slate-500">No hay materias registradas.</p>
          )}

          {!loading && !error && materias.map((materia) => (
            <div key={materia.id} className="rounded-xl border border-slate-100 px-4 py-3">
              {editingId === materia.id ? (
                <form onSubmit={handleSave} className="space-y-3">
                  <div className="grid gap-3 sm:grid-cols-3">
                    <label className="flex flex-col gap-1">
                      <span className="text-xs text-slate-600">Nombre *</span>
                      <input
                        type="text"
                        value={editForm.nombre}
                        onChange={(e) => setEditForm({ ...editForm, nombre: e.target.value })}
                        className="rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                      />
                    </label>
                    <label className="flex flex-col gap-1">
                      <span className="text-xs text-slate-600">Nivel</span>
                      <input
                        type="text"
                        value={editForm.nivel}
                        onChange={(e) => setEditForm({ ...editForm, nivel: e.target.value })}
                        className="rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                      />
                    </label>
                    <label className="flex flex-col gap-1">
                      <span className="text-xs text-slate-600">Descripción</span>
                      <input
                        type="text"
                        value={editForm.descripcion}
                        onChange={(e) => setEditForm({ ...editForm, descripcion: e.target.value })}
                        className="rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                      />
                    </label>
                  </div>
                  {saveError && <p className="text-xs text-red-600">{saveError}</p>}
                  <div className="flex gap-2">
                    <button
                      type="submit"
                      disabled={saving}
                      className="rounded-lg bg-blue-600 px-4 py-1.5 text-xs font-semibold text-white hover:bg-blue-700 disabled:opacity-50 transition-colors"
                    >
                      {saving ? "Guardando…" : "Guardar"}
                    </button>
                    <button
                      type="button"
                      onClick={() => setEditingId(null)}
                      className="rounded-lg border border-slate-200 px-4 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
                    >
                      Cancelar
                    </button>
                  </div>
                </form>
              ) : (
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{materia.nombre}</p>
                    {materia.nivel && <p className="text-xs text-slate-500">Nivel: {materia.nivel}</p>}
                    {materia.descripcion && <p className="text-xs text-slate-400">{materia.descripcion}</p>}
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleToggle(materia)}
                      className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                        materia.activa
                          ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      {materia.activa ? "Activa" : "Inactiva"}
                    </button>
                    <button
                      onClick={() => startEdit(materia)}
                      className="rounded-lg border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
                    >
                      Editar
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
