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
  enunciados: Record<string, string>;
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

// ── Shared class constants ─────────────────────────────────────────────────────

const inputCls =
  "w-full rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-1.5 text-sm focus:outline-none focus:border-[var(--c-primary)]";

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

  useEffect(() => {
    setLoadingGen(true);
    apiGet<{ items: GeneratorItem[] }>("/api/admin/generators")
      .then((data) => setGenerators(data.items ?? []))
      .catch(() => {})
      .finally(() => setLoadingGen(false));
  }, []);

  useEffect(() => {
    setLoadingSug(true);
    apiGet<{ items: Suggestion[] }>(`/api/suggestions?status=${suggestionFilter}`)
      .then((data) => setSuggestions(data.items ?? []))
      .catch(() => {})
      .finally(() => setLoadingSug(false));
  }, [suggestionFilter]);

  useEffect(() => {
    if (!expandedGen) return;
    apiGet<{ items: ChangelogEntry[] }>(`/api/admin/generators/${expandedGen}/changelog`)
      .then((data) =>
        setChangelog((prev) => ({ ...prev, [expandedGen]: data.items ?? [] }))
      )
      .catch(() => {});
  }, [expandedGen]);

  const handleToggleExpand = (id: string) => {
    setExpandedGen((prev) => (prev === id ? null : id));
    setEditingGen(null);
  };

  const handleStartEdit = (gen: GeneratorItem) => {
    setEditingGen(gen.id);
    setEditForm({ label: gen.label, description: gen.description, status: gen.status, enunciados: gen.enunciados ?? {} });
    setExpandedGen(gen.id);
  };

  const handleSaveGen = async (genId: string) => {
    setSavingGen(true);
    try {
      // Strip empty templates before saving
      const enunciados = editForm.enunciados as Record<string, string> | undefined;
      const cleanedEnunciados = enunciados
        ? Object.fromEntries(Object.entries(enunciados).filter(([, v]) => v.trim()))
        : undefined;

      const payload = { ...editForm, enunciados: cleanedEnunciados };
      const updated = await apiPatch<GeneratorItem>(
        `/api/admin/generators/${genId}`,
        payload
      );
      setGenerators((prev) => prev.map((g) => (g.id === genId ? updated : g)));

      const parts: string[] = [];
      if (editForm.label) parts.push(`label: "${editForm.label}"`);
      if (editForm.status) parts.push(`status: ${editForm.status}`);
      if (editForm.description !== undefined) parts.push("description actualizada");
      if (cleanedEnunciados && Object.keys(cleanedEnunciados).length > 0) parts.push("enunciados personalizados");
      const autoNote = `Editado: ${parts.join(", ")}`;

      await apiPost(`/api/admin/generators/${genId}/changelog`, { note: autoNote });
      const freshChangelog = await apiGet<{ items: ChangelogEntry[] }>(
        `/api/admin/generators/${genId}/changelog`
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
      await apiPost(`/api/admin/generators/${genId}/changelog`, { note: newNote.trim() });
      setNewNote("");
      const fresh = await apiGet<{ items: ChangelogEntry[] }>(
        `/api/admin/generators/${genId}/changelog`
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

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-10">
      {/* Header */}
      <header className="space-y-1">
        <Link to="/admin/panel" className="text-sm text-[var(--c-primary)] hover:underline">
          ← Panel admin
        </Link>
        <h1 className="text-xl font-semibold text-[var(--c-text)]">Generadores y sugerencias</h1>
        <p className="text-sm text-[var(--c-muted)]">
          Gestioná los generadores de ejercicios y revisá las sugerencias de usuarios.
        </p>
      </header>

      {actionMsg && (
        <div
          className="rounded-xl border px-4 py-3 text-sm"
          style={{
            borderColor: "var(--c-border)",
            backgroundColor: "color-mix(in srgb, var(--c-primary) 8%, transparent)",
            color: "var(--c-primary)",
          }}
        >
          {actionMsg}
        </div>
      )}

      {/* ── Section 1: Generators ───────────────────────────────────────────── */}
      <section>
        <h2 className="text-base font-semibold text-[var(--c-text)] mb-4">
          Generadores ({generators.length})
        </h2>

        {loadingGen ? (
          <div className="space-y-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-14 animate-pulse rounded-xl bg-[var(--c-border)]" />
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {Object.entries(byMateria).map(([materia, items]) => (
              <div key={materia}>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--c-muted)] mb-2">
                  {materia}
                </p>
                <div className="space-y-2">
                  {items.map((gen) => {
                    const isExpanded = expandedGen === gen.id;
                    const isEditing = editingGen === gen.id;

                    return (
                      <article
                        key={gen.id}
                        className={`rounded-xl border bg-[var(--c-surface)] overflow-hidden ${
                          gen.status === "ACTIVE"
                            ? "border-[var(--c-primary)]"
                            : "border-[var(--c-border)]"
                        }`}
                      >
                        {/* Collapsed row */}
                        <div className="flex items-center gap-3 px-4 py-3">
                          <span
                            className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                              gen.status === "ACTIVE"
                                ? "bg-emerald-100 text-emerald-700"
                                : "bg-[var(--c-border)] text-[var(--c-muted)]"
                            }`}
                          >
                            {gen.status}
                          </span>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-[var(--c-text)] truncate">
                              {gen.label}
                            </p>
                            <p className="text-xs text-[var(--c-muted)]">{gen.id}</p>
                          </div>
                          <div className="flex items-center gap-2 shrink-0">
                            <button
                              type="button"
                              className="text-xs text-[var(--c-muted)] hover:underline"
                              onClick={() => handleToggleExpand(gen.id)}
                            >
                              {isExpanded ? "Colapsar" : "Expandir"}
                            </button>
                            <button
                              type="button"
                              className="text-xs text-[var(--c-primary)] hover:underline"
                              onClick={() => handleStartEdit(gen)}
                            >
                              Editar
                            </button>
                          </div>
                        </div>

                        {/* Expanded content */}
                        {isExpanded && (
                          <div className="border-t border-[var(--c-border)] px-4 py-4 space-y-5">
                            {isEditing ? (
                              <div className="space-y-3">
                                <div>
                                  <label className="text-xs font-medium text-[var(--c-muted)]">Label</label>
                                  <input
                                    className={`mt-1 ${inputCls}`}
                                    value={editForm.label ?? ""}
                                    onChange={(e) =>
                                      setEditForm((f) => ({ ...f, label: e.target.value }))
                                    }
                                  />
                                </div>
                                <div>
                                  <label className="text-xs font-medium text-[var(--c-muted)]">
                                    Descripción
                                  </label>
                                  <textarea
                                    className={`mt-1 ${inputCls} resize-none`}
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
                                  <label className="text-xs font-medium text-[var(--c-muted)]">
                                    Estado
                                  </label>
                                  <select
                                    className={`mt-1 ${inputCls}`}
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
                                <details className="border border-[var(--c-border)] rounded-lg p-3">
                                  <summary className="text-xs font-semibold text-[var(--c-text)] cursor-pointer">
                                    Enunciados personalizados ({gen.subtipos.length} subtipos)
                                  </summary>
                                  <p className="text-xs text-[var(--c-muted)] mt-2 mb-3">
                                    Dejar en blanco para usar el enunciado por defecto del generador.
                                    Variables disponibles por subtipo en la documentación.
                                  </p>
                                  <div className="space-y-3">
                                    {gen.subtipos.map((sub) => (
                                      <div key={sub.id}>
                                        <label className="text-xs font-medium text-[var(--c-text)] flex items-center gap-2">
                                          <code className="bg-[var(--c-bg)] px-1.5 py-0.5 rounded text-xs">{sub.id}</code>
                                          <span className="text-[var(--c-muted)] font-normal">{sub.label}</span>
                                        </label>
                                        <textarea
                                          className={`${inputCls} mt-1 font-mono text-xs resize-none`}
                                          rows={2}
                                          placeholder={`Ej: Un {objeto} viaja a {velocidad} m/s durante {tiempo} s. ¿Qué distancia?`}
                                          value={(editForm.enunciados as Record<string, string> | undefined)?.[sub.id] ?? ""}
                                          onChange={(e) =>
                                            setEditForm((f) => ({
                                              ...f,
                                              enunciados: {
                                                ...(f.enunciados as Record<string, string> | undefined),
                                                [sub.id]: e.target.value,
                                              },
                                            }))
                                          }
                                        />
                                      </div>
                                    ))}
                                  </div>
                                </details>
                                <div className="flex gap-2">
                                  <button
                                    type="button"
                                    disabled={savingGen}
                                    onClick={() => handleSaveGen(gen.id)}
                                    className="rounded-xl bg-[var(--c-primary)] px-4 py-2 text-sm font-semibold text-white hover:opacity-90 disabled:opacity-50 transition-opacity"
                                  >
                                    {savingGen ? "Guardando…" : "Guardar"}
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => setEditingGen(null)}
                                    className="rounded-xl border border-[var(--c-border)] px-4 py-2 text-sm text-[var(--c-text)] hover:bg-[var(--c-bg)] transition-colors"
                                  >
                                    Cancelar
                                  </button>
                                </div>
                              </div>
                            ) : (
                              <div>
                                <p className="text-xs font-semibold text-[var(--c-muted)] mb-2">
                                  Subtipos
                                </p>
                                {gen.subtipos.length === 0 ? (
                                  <p className="text-xs text-[var(--c-muted)]">Sin subtipos</p>
                                ) : (
                                  <ul className="space-y-1">
                                    {gen.subtipos.map((sub, idx) => (
                                      <li key={sub.id} className="flex items-center gap-2">
                                        <input
                                          type="checkbox"
                                          defaultChecked={sub.activo !== false}
                                          onChange={(e) => {
                                            setEditForm((f) => {
                                              const base = f.subtipos ?? gen.subtipos;
                                              const next = base.map((s, i) =>
                                                i === idx ? { ...s, activo: e.target.checked } : s
                                              );
                                              return { ...f, subtipos: next };
                                            });
                                          }}
                                          className="h-4 w-4 rounded border-[var(--c-border)]"
                                        />
                                        <span className="text-sm text-[var(--c-text)]">
                                          {sub.label}
                                        </span>
                                        <span className="text-xs text-[var(--c-muted)] font-mono">
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
                              <p className="text-xs font-semibold text-[var(--c-muted)] mb-2">
                                Historial de cambios
                              </p>
                              <ul className="space-y-1 mb-3 max-h-40 overflow-y-auto">
                                {(changelog[gen.id] ?? []).length === 0 ? (
                                  <li className="text-xs text-[var(--c-muted)]">Sin entradas</li>
                                ) : (
                                  (changelog[gen.id] ?? []).map((entry) => (
                                    <li
                                      key={entry.id}
                                      className="text-xs text-[var(--c-text)] border-l-2 border-[var(--c-border)] pl-3 py-0.5"
                                    >
                                      <span className="text-[var(--c-muted)]">
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
                                  className={`flex-1 ${inputCls}`}
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
                                  className="rounded-xl border border-[var(--c-border)] px-3 py-1.5 text-sm text-[var(--c-text)] hover:bg-[var(--c-bg)] transition-colors"
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
      <section>
        <h2 className="text-base font-semibold text-[var(--c-text)] mb-4">Sugerencias</h2>

        {/* Filter tabs — border-bottom pattern */}
        <div className="flex flex-wrap gap-0 border-b border-[var(--c-border)] mb-5">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setSuggestionFilter(tab.key)}
              className={`px-4 py-2 text-sm font-semibold transition-colors border-b-2 -mb-px ${
                suggestionFilter === tab.key
                  ? "border-[var(--c-primary)] text-[var(--c-primary)]"
                  : "border-transparent text-[var(--c-muted)] hover:text-[var(--c-text)]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {loadingSug ? (
          <div className="space-y-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-20 animate-pulse rounded-xl bg-[var(--c-border)]" />
            ))}
          </div>
        ) : suggestions.length === 0 ? (
          <p className="text-sm text-[var(--c-muted)]">No hay sugerencias en esta categoría.</p>
        ) : (
          <ul className="space-y-3">
            {suggestions.map((sug) => (
              <li
                key={sug.id}
                className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] px-4 py-4 space-y-2"
              >
                <div className="flex items-start gap-3 justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      {sug.status === "PINNED" && (
                        <span className="text-xs font-bold text-amber-600 bg-amber-50 border border-amber-200 rounded-full px-2 py-0.5">
                          📌 Fijada
                        </span>
                      )}
                      <span
                        className="text-xs font-semibold uppercase tracking-wide rounded-full px-2 py-0.5"
                        style={{
                          backgroundColor: "var(--c-border)",
                          color: "var(--c-muted)",
                        }}
                      >
                        {sug.suggestion_type}
                      </span>
                      <p className="text-sm font-semibold text-[var(--c-text)] truncate">
                        {sug.title}
                      </p>
                    </div>
                    <p className="text-sm text-[var(--c-muted)] mt-1 line-clamp-2">{sug.body}</p>
                    <div className="flex flex-wrap gap-3 mt-1.5 text-xs text-[var(--c-muted)]">
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
                            className="rounded-xl border border-amber-200 px-3 py-1.5 text-xs font-semibold text-amber-700 hover:bg-amber-50 transition-colors"
                          >
                            📌 Fijar
                          </button>
                        )}
                        <button
                          type="button"
                          onClick={() => handleSuggestionAction(sug.id, "REVIEWED")}
                          className="rounded-xl border border-emerald-200 px-3 py-1.5 text-xs font-semibold text-emerald-700 hover:bg-emerald-50 transition-colors"
                        >
                          ✓ Revisar
                        </button>
                        <button
                          type="button"
                          onClick={() => handleSuggestionAction(sug.id, "DISCARDED")}
                          className="rounded-xl border border-[var(--c-danger)] px-3 py-1.5 text-xs font-semibold text-[var(--c-danger)] hover:bg-[color-mix(in_srgb,var(--c-danger)_8%,transparent)] transition-colors"
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
                      <span
                        className="rounded-full px-3 py-1 text-xs font-semibold"
                        style={{
                          backgroundColor: "var(--c-border)",
                          color: "var(--c-muted)",
                        }}
                      >
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
