import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiGet, apiPatch, apiPost } from "../lib/api";

// ── Types ──────────────────────────────────────────────────────────────────────

type GeneratorItem = {
  id: string;
  materia: string;
  label: string;
  description: string | null;
  version: number;
  subtipos: { id: string; label: string; activo?: boolean }[];
  status: "ACTIVE" | "INACTIVE";
};

type ChangelogEntry = {
  id: string;
  generator_id: string;
  admin_id: string;
  note: string;
  changed_at: string;
};

type Suggestion = {
  id: string;
  suggestion_type: string;
  target_type: string | null;
  target_id: string | null;
  title: string;
  body: string;
  status: string;
  created_by: string;
  created_at: string;
  admin_note: string | null;
};

// ── Component ──────────────────────────────────────────────────────────────────

export default function AdminGeneradores() {
  const [generators, setGenerators] = useState<GeneratorItem[]>([]);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [suggestionFilter, setSuggestionFilter] =
    useState<"OPEN" | "PINNED" | "REVIEWED" | "DISCARDED">("OPEN");
  const [loadingGen, setLoadingGen] = useState(true);
  const [loadingSug, setLoadingSug] = useState(true);
  const [expandedGen, setExpandedGen] = useState<string | null>(null);
  const [changelog, setChangelog] = useState<Record<string, ChangelogEntry[]>>({});
  const [editingGen, setEditingGen] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Partial<GeneratorItem>>({});
  const [newNote, setNewNote] = useState("");
  const [savingGen, setSavingGen] = useState(false);
  const [actionMsg, setActionMsg] = useState<string | null>(null);

  // ── Load generators on mount ─────────────────────────────────────────────────

  useEffect(() => {
    setLoadingGen(true);
    apiGet<{ items: GeneratorItem[] }>("/api/admin/generadores")
      .then((data) => setGenerators(data.items ?? []))
      .catch(() => {})
      .finally(() => setLoadingGen(false));
  }, []);

  // ── Load suggestions when filter changes ─────────────────────────────────────

  useEffect(() => {
    setLoadingSug(true);
    apiGet<{ items: Suggestion[] }>(`/api/suggestions?status=${suggestionFilter}`)
      .then((data) => setSuggestions(data.items ?? []))
      .catch(() => {})
      .finally(() => setLoadingSug(false));
  }, [suggestionFilter]);

  // ── Load changelog when a generator is expanded ───────────────────────────────

  useEffect(() => {
    if (!expandedGen) return;
    apiGet<{ items: ChangelogEntry[] }>(`/api/admin/generadores/${expandedGen}/changelog`)
      .then((data) =>
        setChangelog((prev) => ({ ...prev, [expandedGen]: data.items ?? [] }))
      )
      .catch(() => {});
  }, [expandedGen]);

  // ── Handlers ──────────────────────────────────────────────────────────────────

  const handleToggleExpand = (id: string) => {
    setExpandedGen((prev) => (prev === id ? null : id));
    setEditingGen(null);
  };

  const handleStartEdit = (gen: GeneratorItem) => {
    setEditingGen(gen.id);
    setEditForm({ label: gen.label, description: gen.description, status: gen.status });
    setExpandedGen(gen.id);
  };

  const handleSaveGen = async (genId: string) => {
    setSavingGen(true);
    try {
      const updated = await apiPatch<GeneratorItem>(
        `/api/admin/generadores/${genId}`,
        editForm
      );
      setGenerators((prev) => prev.map((g) => (g.id === genId ? updated : g)));

      // Auto-changelog note
      const parts: string[] = [];
      if (editForm.label) parts.push(`label: "${editForm.label}"`);
      if (editForm.status) parts.push(`status: ${editForm.status}`);
      if (editForm.description !== undefined) parts.push("description actualizada");
      const autoNote = `Editado: ${parts.join(", ")}`;

      await apiPost(`/api/admin/generadores/${genId}/changelog`, { note: autoNote });
      const freshChangelog = await apiGet<{ items: ChangelogEntry[] }>(
        `/api/admin/generadores/${genId}/changelog`
      );
      setChangelog((prev) => ({ ...prev, [genId]: freshChangelog.items ?? [] }));

      setEditingGen(null);
      setActionMsg("Generador actualizado");
      setTimeout(() => setActionMsg(null), 3000);
    } catch {
      setActionMsg("Error al guardar");
      setTimeout(() => setActionMsg(null), 3000);
    } finally {
      setSavingGen(false);
    }
  };

  const handleAddNote = async (genId: string) => {
    if (!newNote.trim()) return;
    try {
      await apiPost(`/api/admin/generadores/${genId}/changelog`, { note: newNote.trim() });
      setNewNote("");
      const fresh = await apiGet<{ items: ChangelogEntry[] }>(
        `/api/admin/generadores/${genId}/changelog`
      );
      setChangelog((prev) => ({ ...prev, [genId]: fresh.items ?? [] }));
    } catch {
      setActionMsg("Error al agregar nota");
      setTimeout(() => setActionMsg(null), 3000);
    }
  };

  const handleSuggestionAction = async (id: string, status: string) => {
    try {
      await apiPatch(`/api/suggestions/${id}`, { status });
      const fresh = await apiGet<{ items: Suggestion[] }>(
        `/api/suggestions?status=${suggestionFilter}`
      );
      setSuggestions(fresh.items ?? []);
    } catch {
      setActionMsg("Error al actualizar sugerencia");
      setTimeout(() => setActionMsg(null), 3000);
    }
  };

  // ── Group generators by materia ───────────────────────────────────────────────

  const byMateria = generators.reduce<Record<string, GeneratorItem[]>>((acc, g) => {
    (acc[g.materia] ??= []).push(g);
    return acc;
  }, {});

  const TABS: { key: "OPEN" | "PINNED" | "REVIEWED" | "DISCARDED"; label: string }[] = [
    { key: "OPEN", label: "Abiertas" },
    { key: "PINNED", label: "📌 Fijadas" },
    { key: "REVIEWED", label: "Revisadas" },
    { key: "DISCARDED", label: "Descartadas" },
  ];

  // ── Render ────────────────────────────────────────────────────────────────────

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-10">
      {/* Header */}
      <header className="space-y-2">
        <Link to="/admin/panel" className="text-sm text-blue-600 hover:underline">
          ← Panel admin
        </Link>
        <h1 className="text-3xl font-bold text-slate-900">Generadores y sugerencias</h1>
        <p className="text-base text-slate-600">
          Gestioná los generadores de ejercicios y revisá las sugerencias de usuarios.
        </p>
      </header>

      {actionMsg && (
        <div className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-blue-700">
          {actionMsg}
        </div>
      )}

      {/* ── Section 1: Generators ───────────────────────────────────────────── */}
      <section>
        <h2 className="text-xl font-semibold text-slate-800 mb-4">
          Generadores ({generators.length})
        </h2>

        {loadingGen ? (
          <div className="space-y-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-14 animate-pulse rounded-xl bg-slate-100" />
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {Object.entries(byMateria).map(([materia, items]) => (
              <div key={materia}>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">
                  {materia}
                </p>
                <div className="space-y-2">
                  {items.map((gen) => {
                    const isExpanded = expandedGen === gen.id;
                    const isEditing = editingGen === gen.id;

                    return (
                      <article
                        key={gen.id}
                        className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden"
                      >
                        {/* ── Collapsed row ── */}
                        <div className="flex items-center gap-3 px-4 py-3">
                          <span
                            className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                              gen.status === "ACTIVE"
                                ? "bg-emerald-100 text-emerald-700"
                                : "bg-slate-100 text-slate-500"
                            }`}
                          >
                            {gen.status}
                          </span>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-slate-800 truncate">
                              {gen.label}
                            </p>
                            <p className="text-xs text-slate-400">{gen.id}</p>
                          </div>
                          <div className="flex items-center gap-2 shrink-0">
                            <button
                              type="button"
                              className="text-xs text-slate-600 hover:underline"
                              onClick={() => handleToggleExpand(gen.id)}
                            >
                              {isExpanded ? "Colapsar" : "Expandir"}
                            </button>
                            <button
                              type="button"
                              className="text-xs text-violet-600 hover:underline"
                              onClick={() => handleStartEdit(gen)}
                            >
                              Editar
                            </button>
                          </div>
                        </div>

                        {/* ── Expanded content ── */}
                        {isExpanded && (
                          <div className="border-t border-slate-100 px-4 py-4 space-y-5">
                            {/* Edit form */}
                            {isEditing ? (
                              <div className="space-y-3">
                                <div>
                                  <label className="text-xs font-medium text-slate-600">Label</label>
                                  <input
                                    className="mt-1 w-full rounded-md border border-slate-300 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
                                    value={editForm.label ?? ""}
                                    onChange={(e) =>
                                      setEditForm((f) => ({ ...f, label: e.target.value }))
                                    }
                                  />
                                </div>
                                <div>
                                  <label className="text-xs font-medium text-slate-600">
                                    Descripción
                                  </label>
                                  <textarea
                                    className="mt-1 w-full rounded-md border border-slate-300 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
                                    rows={2}
                                    value={editForm.description ?? ""}
                                    onChange={(e) =>
                                      setEditForm((f) => ({
                                        ...f,
                                        description: e.target.value || null,
                                      }))
                                    }
                                  />
                                </div>
                                <div>
                                  <label className="text-xs font-medium text-slate-600">
                                    Estado
                                  </label>
                                  <select
                                    className="mt-1 rounded-md border border-slate-300 px-3 py-1.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-violet-400"
                                    value={editForm.status ?? gen.status}
                                    onChange={(e) =>
                                      setEditForm((f) => ({
                                        ...f,
                                        status: e.target.value as "ACTIVE" | "INACTIVE",
                                      }))
                                    }
                                  >
                                    <option value="ACTIVE">ACTIVE</option>
                                    <option value="INACTIVE">INACTIVE</option>
                                  </select>
                                </div>
                                <div className="flex gap-2">
                                  <button
                                    type="button"
                                    disabled={savingGen}
                                    onClick={() => handleSaveGen(gen.id)}
                                    className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-700 disabled:opacity-50 transition-colors"
                                  >
                                    {savingGen ? "Guardando…" : "Guardar"}
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => setEditingGen(null)}
                                    className="rounded-lg border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 transition-colors"
                                  >
                                    Cancelar
                                  </button>
                                </div>
                              </div>
                            ) : (
                              /* Subtipos list */
                              <div>
                                <p className="text-xs font-semibold text-slate-500 mb-2">
                                  Subtipos
                                </p>
                                {gen.subtipos.length === 0 ? (
                                  <p className="text-xs text-slate-400">Sin subtipos</p>
                                ) : (
                                  <ul className="space-y-1">
                                    {gen.subtipos.map((sub, idx) => (
                                      <li key={sub.id} className="flex items-center gap-2">
                                        <input
                                          type="checkbox"
                                          defaultChecked={sub.activo !== false}
                                          onChange={(e) => {
                                            setEditForm((f) => {
                                              const base =
                                                f.subtipos ?? gen.subtipos;
                                              const next = base.map((s, i) =>
                                                i === idx ? { ...s, activo: e.target.checked } : s
                                              );
                                              return { ...f, subtipos: next };
                                            });
                                          }}
                                          className="h-4 w-4 rounded border-slate-300"
                                        />
                                        <span className="text-sm text-slate-700">
                                          {sub.label}
                                        </span>
                                        <span className="text-xs text-slate-400 font-mono">
                                          {sub.id}
                                        </span>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                            )}

                            {/* Changelog */}
                            <div>
                              <p className="text-xs font-semibold text-slate-500 mb-2">
                                Historial de cambios
                              </p>
                              <ul className="space-y-1 mb-3 max-h-40 overflow-y-auto">
                                {(changelog[gen.id] ?? []).length === 0 ? (
                                  <li className="text-xs text-slate-400">Sin entradas</li>
                                ) : (
                                  (changelog[gen.id] ?? []).map((entry) => (
                                    <li
                                      key={entry.id}
                                      className="text-xs text-slate-600 border-l-2 border-slate-200 pl-3 py-0.5"
                                    >
                                      <span className="text-slate-400">
                                        {new Date(entry.changed_at).toLocaleString("es")} ·{" "}
                                        {entry.admin_id}
                                      </span>{" "}
                                      — {entry.note}
                                    </li>
                                  ))
                                )}
                              </ul>
                              <div className="flex gap-2">
                                <input
                                  className="flex-1 rounded-md border border-slate-300 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
                                  placeholder="Agregar nota..."
                                  value={newNote}
                                  onChange={(e) => setNewNote(e.target.value)}
                                  onKeyDown={(e) => {
                                    if (e.key === "Enter") handleAddNote(gen.id);
                                  }}
                                />
                                <button
                                  type="button"
                                  onClick={() => handleAddNote(gen.id)}
                                  className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                                >
                                  Agregar nota
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </article>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ── Section 2: Suggestions ──────────────────────────────────────────── */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Sugerencias</h2>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-5">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setSuggestionFilter(tab.key)}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
                suggestionFilter === tab.key
                  ? "bg-violet-600 text-white"
                  : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {loadingSug ? (
          <div className="space-y-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-20 animate-pulse rounded-xl bg-slate-100" />
            ))}
          </div>
        ) : suggestions.length === 0 ? (
          <p className="text-sm text-slate-400">No hay sugerencias en esta categoría.</p>
        ) : (
          <ul className="space-y-3">
            {suggestions.map((sug) => (
              <li
                key={sug.id}
                className="rounded-xl border border-slate-200 bg-white px-4 py-4 shadow-sm space-y-2"
              >
                <div className="flex items-start gap-3 justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      {sug.status === "PINNED" && (
                        <span className="text-xs font-bold text-amber-600 bg-amber-50 border border-amber-200 rounded-full px-2 py-0.5">
                          📌 Fijada
                        </span>
                      )}
                      <span className="text-xs font-semibold uppercase tracking-wide text-slate-400 bg-slate-100 rounded-full px-2 py-0.5">
                        {sug.suggestion_type}
                      </span>
                      <p className="text-sm font-semibold text-slate-800 truncate">
                        {sug.title}
                      </p>
                    </div>
                    <p className="text-sm text-slate-600 mt-1 line-clamp-2">{sug.body}</p>
                    <div className="flex flex-wrap gap-3 mt-1.5 text-xs text-slate-400">
                      {sug.target_type && (
                        <span>
                          {sug.target_type}
                          {sug.target_id ? ` · ${sug.target_id}` : ""}
                        </span>
                      )}
                      <span>{new Date(sug.created_at).toLocaleDateString("es")}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 shrink-0">
                    {(sug.status === "OPEN" || sug.status === "PINNED") && (
                      <>
                        {sug.status === "OPEN" && (
                          <button
                            type="button"
                            onClick={() => handleSuggestionAction(sug.id, "PINNED")}
                            className="rounded-lg border border-amber-200 px-3 py-1.5 text-xs font-semibold text-amber-700 hover:bg-amber-50 transition-colors"
                          >
                            📌 Fijar
                          </button>
                        )}
                        <button
                          type="button"
                          onClick={() => handleSuggestionAction(sug.id, "REVIEWED")}
                          className="rounded-lg border border-emerald-200 px-3 py-1.5 text-xs font-semibold text-emerald-700 hover:bg-emerald-50 transition-colors"
                        >
                          ✓ Revisar
                        </button>
                        <button
                          type="button"
                          onClick={() => handleSuggestionAction(sug.id, "DISCARDED")}
                          className="rounded-lg border border-red-200 px-3 py-1.5 text-xs font-semibold text-red-600 hover:bg-red-50 transition-colors"
                        >
                          ✕ Descartar
                        </button>
                      </>
                    )}
                    {sug.status === "REVIEWED" && (
                      <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                        Revisada
                      </span>
                    )}
                    {sug.status === "DISCARDED" && (
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
                        Descartada
                      </span>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
