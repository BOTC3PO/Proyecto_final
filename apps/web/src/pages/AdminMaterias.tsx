import { useEffect, useState } from "react";
import { useI18n } from "../i18n/I18nContext";
import {
  fetchAdminMaterias,
  createAdminMateria,
  updateAdminMateria,
  type AdminMateria,
} from "../services/admin";

type EditForm = { nombre: string; descripcion: string; nivel: string };
const emptyForm = (): EditForm => ({ nombre: "", descripcion: "", nivel: "" });

export default function AdminMaterias() {
  const { t } = useI18n();
  const [materias, setMaterias] = useState<AdminMateria[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [showCreate, setShowCreate] = useState(false);
  const [createForm, setCreateForm] = useState<EditForm>(emptyForm());
  const [creating, setCreating] = useState(false);
  const [createError, setCreateError] = useState<string | null>(null);

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
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-5">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-xl font-semibold text-[var(--c-text)]">{t("adminMaterias.gestionDeMaterias")}</h1>
            <p className="text-sm text-[var(--c-muted)] mt-0.5">{t("adminMaterias.administraLasMateriasDisponiblesEn")}</p>
          </div>
          <button
            onClick={() => { setShowCreate(!showCreate); setCreateForm(emptyForm()); setCreateError(null); }}
            className="rounded-xl bg-[var(--c-primary)] px-4 py-2 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
          >
            {showCreate ? 'Cancelar' : '+ Nueva materia'}
          </button>
        </div>

        <section className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] overflow-hidden">
          <div className="px-4 py-3 border-b border-[var(--c-border)]">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--c-muted)]">{t("adminMaterias.materiasRegistradas")}</p>
          </div>
          <div className="p-4">

          {showCreate && (
            <form onSubmit={handleCreate} className="mb-4 space-y-3 rounded-xl border border-[var(--c-border)] bg-[var(--c-bg)] p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--c-muted)]">{t("adminMaterias.nuevaMateria")}</p>
              <div className="grid gap-3 sm:grid-cols-3">
                <label className="flex flex-col gap-1">
                  <span className="text-xs text-[var(--c-muted)]">{t("adminMaterias.nombre")}</span>
                  <input
                    type="text"
                    value={createForm.nombre}
                    onChange={(e) => setCreateForm({ ...createForm, nombre: e.target.value })}
                    placeholder={t("adminMaterias.ejMatematicas")}
                    className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                  />
                </label>
                <label className="flex flex-col gap-1">
                  <span className="text-xs text-[var(--c-muted)]">{t("adminMaterias.nivel")}</span>
                  <input
                    type="text"
                    value={createForm.nivel}
                    onChange={(e) => setCreateForm({ ...createForm, nivel: e.target.value })}
                    placeholder={t("adminMaterias.ejPrimaria")}
                    className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                  />
                </label>
                <label className="flex flex-col gap-1">
                  <span className="text-xs text-[var(--c-muted)]">{t("comun.descripcion")}</span>
                  <input
                    type="text"
                    value={createForm.descripcion}
                    onChange={(e) => setCreateForm({ ...createForm, descripcion: e.target.value })}
                    placeholder={t("adminMaterias.descripcionBreve")}
                    className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                  />
                </label>
              </div>
              {createError && <p className="text-xs text-[var(--c-danger)]">{createError}</p>}
              <button
                type="submit"
                disabled={creating}
                className="rounded-xl bg-[var(--c-primary)] px-5 py-2 text-sm font-semibold text-white hover:opacity-90 disabled:opacity-50 transition-colors"
              >
                {creating ? "Creando…" : "Crear materia"}
              </button>
            </form>
          )}

          <div className="space-y-3">
            {loading && (
              <div className="space-y-2">
                {[1,2,3].map(i => <div key={i} className="h-12 rounded-xl animate-pulse bg-[var(--c-border)]" />)}
              </div>
            )}
            {error && <p className="text-sm text-[var(--c-danger)]">Error: {error}</p>}

            {!loading && !error && materias.length === 0 && (
              <p className="text-sm text-[var(--c-muted)]">{t("adminMaterias.noHayMateriasRegistradas")}</p>
            )}

            {!loading && !error && materias.map((materia) => (
              <div key={materia.id} className="rounded-xl border border-[var(--c-border)] px-4 py-3">
                {editingId === materia.id ? (
                  <form onSubmit={handleSave} className="space-y-3">
                    <div className="grid gap-3 sm:grid-cols-3">
                      <label className="flex flex-col gap-1">
                        <span className="text-xs text-[var(--c-muted)]">{t("adminMaterias.nombre")}</span>
                        <input
                          type="text"
                          value={editForm.nombre}
                          onChange={(e) => setEditForm({ ...editForm, nombre: e.target.value })}
                          className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                        />
                      </label>
                      <label className="flex flex-col gap-1">
                        <span className="text-xs text-[var(--c-muted)]">{t("adminMaterias.nivel")}</span>
                        <input
                          type="text"
                          value={editForm.nivel}
                          onChange={(e) => setEditForm({ ...editForm, nivel: e.target.value })}
                          className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                        />
                      </label>
                      <label className="flex flex-col gap-1">
                        <span className="text-xs text-[var(--c-muted)]">{t("comun.descripcion")}</span>
                        <input
                          type="text"
                          value={editForm.descripcion}
                          onChange={(e) => setEditForm({ ...editForm, descripcion: e.target.value })}
                          className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                        />
                      </label>
                    </div>
                    {saveError && <p className="text-xs text-[var(--c-danger)]">{saveError}</p>}
                    <div className="flex gap-2">
                      <button
                        type="submit"
                        disabled={saving}
                        className="rounded-lg bg-[var(--c-primary)] px-4 py-1.5 text-xs font-semibold text-white hover:opacity-90 disabled:opacity-50 transition-colors"
                      >
                        {saving ? "Guardando…" : "Guardar"}
                      </button>
                      <button
                        type="button"
                        onClick={() => setEditingId(null)}
                        className="rounded-lg border border-[var(--c-border)] px-4 py-1.5 text-xs font-semibold text-[var(--c-text)] hover:bg-[var(--c-bg)] transition-colors"
                      >{t("comun.cancelar")}</button>
                    </div>
                  </form>
                ) : (
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <p className="text-sm font-semibold text-[var(--c-text)]">{materia.nombre}</p>
                      {materia.nivel && <p className="text-xs text-[var(--c-muted)]">Nivel: {materia.nivel}</p>}
                      {materia.descripcion && <p className="text-xs text-[var(--c-muted)]">{materia.descripcion}</p>}
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleToggle(materia)}
                        className={`rounded-xl px-3 py-1 text-xs font-semibold transition-colors ${
                          materia.activa
                            ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                            : "bg-[var(--c-bg)] text-[var(--c-muted)] hover:bg-[var(--c-border)]"
                        }`}
                      >
                        {materia.activa ? "Activa" : "Inactiva"}
                      </button>
                      <button
                        onClick={() => startEdit(materia)}
                        className="rounded-lg border border-[var(--c-border)] px-3 py-1 text-xs font-semibold text-[var(--c-text)] hover:bg-[var(--c-bg)] transition-colors"
                      >{t("comun.editar")}</button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          </div>
        </section>
      </div>
  );
}
