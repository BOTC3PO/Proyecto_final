import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../auth/use-auth";
import { apiGet } from "../../lib/api";
import type { Module } from "../../domain/module/module.types";
import { getSubjectColor } from "../../domain/module/subjectColors";

type ModulesResponse = {
  items: Module[];
};

const resolveSubject = (m: Module) => m.subject || m.category || "Sin materia";
const resolveCategory = (m: Module) => m.category || m.subject || "Sin categoría";

const truncate = (text: string, max: number) =>
  text.length <= max ? text : text.slice(0, max).trimEnd() + "…";

const publishedQuizCount = (m: Module) =>
  m.quizzes?.filter((q) => q.status === "published").length ?? 0;

export default function ReproductorModulos() {
  const { user } = useAuth();
  const [modules, setModules] = useState<Module[]>([]);
  const [loadStatus, setLoadStatus] = useState<"loading" | "ready" | "error">("loading");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [selectedSubject, setSelectedSubject] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    let active = true;
    setLoadStatus("loading");
    setErrorMessage(null);
    apiGet<ModulesResponse>("/api/modulos")
      .then((data) => {
        if (!active) return;
        setModules(data.items ?? []);
        setLoadStatus("ready");
      })
      .catch((err) => {
        if (!active) return;
        setModules([]);
        setLoadStatus("error");
        setErrorMessage(err instanceof Error ? err.message : "No se pudieron cargar los módulos.");
      });
    return () => {
      active = false;
    };
  }, []);

  // Modules visible to the current user (exclude private ones unless own)
  const visibleModules = useMemo(() => {
    const userId = user?.id;
    return modules.filter(
      (m) => m.visibility !== "privado" || m.createdBy === userId
    );
  }, [modules, user?.id]);

  // Filtered by search term
  const searchedModules = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    if (!q) return visibleModules;
    return visibleModules.filter((m) => {
      const haystack = `${m.title} ${m.description} ${resolveSubject(m)} ${resolveCategory(m)}`.toLowerCase();
      return haystack.includes(q);
    });
  }, [visibleModules, searchTerm]);

  // Unique subjects sorted
  const subjectOptions = useMemo(() => {
    const set = new Set<string>();
    searchedModules.forEach((m) => set.add(resolveSubject(m)));
    return Array.from(set).sort((a, b) => a.localeCompare(b, "es"));
  }, [searchedModules]);

  // When subject selection changes reset category
  const handleSubjectClick = (subject: string) => {
    setSelectedSubject(subject);
    setSelectedCategory("all");
  };

  // Modules filtered by selected subject
  const subjectFilteredModules = useMemo(() => {
    if (selectedSubject === "all") return searchedModules;
    return searchedModules.filter((m) => resolveSubject(m) === selectedSubject);
  }, [searchedModules, selectedSubject]);

  // Unique categories for selected subject
  const categoryOptions = useMemo(() => {
    const set = new Set<string>();
    subjectFilteredModules.forEach((m) => set.add(resolveCategory(m)));
    return Array.from(set).sort((a, b) => a.localeCompare(b, "es"));
  }, [subjectFilteredModules]);

  // Final filtered modules
  const filteredModules = useMemo(() => {
    if (selectedCategory === "all") return subjectFilteredModules;
    return subjectFilteredModules.filter((m) => resolveCategory(m) === selectedCategory);
  }, [subjectFilteredModules, selectedCategory]);

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="mx-auto max-w-7xl flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-slate-900">Reproductor de Módulos</h1>
            <p className="text-sm text-slate-500 mt-0.5">
              Explora y reproduce módulos organizados por materia y categoría
            </p>
          </div>
          <div className="relative w-full sm:w-72">
            <svg
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0Z" />
            </svg>
            <input
              type="search"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setSelectedSubject("all");
                setSelectedCategory("all");
              }}
              placeholder="Buscar módulos..."
              className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2 pl-9 pr-4 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
      </header>

      {/* Loading / Error states */}
      {loadStatus === "loading" && (
        <div className="mx-auto max-w-7xl px-6 py-12 text-center text-sm text-slate-500">
          Cargando módulos…
        </div>
      )}

      {loadStatus === "error" && (
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            {errorMessage ?? "Ocurrió un error al cargar los módulos."}
          </div>
        </div>
      )}

      {loadStatus === "ready" && visibleModules.length === 0 && (
        <div className="mx-auto max-w-7xl px-6 py-16 text-center">
          <p className="text-sm text-slate-500">No hay módulos disponibles para reproducir.</p>
        </div>
      )}

      {loadStatus === "ready" && visibleModules.length > 0 && (
        <div className="mx-auto max-w-7xl px-6 py-6 flex gap-6">
          {/* Sidebar — subjects */}
          <aside className="hidden lg:flex flex-col w-52 shrink-0 gap-1">
            <p className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400">
              Materias
            </p>
            <button
              type="button"
              onClick={() => handleSubjectClick("all")}
              className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition text-left ${
                selectedSubject === "all"
                  ? "bg-indigo-50 text-indigo-700 ring-1 ring-indigo-200"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              <span>Todas</span>
              <span className="ml-2 rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-500">
                {searchedModules.length}
              </span>
            </button>
            {subjectOptions.map((subj) => {
              const count = searchedModules.filter((m) => resolveSubject(m) === subj).length;
              const color = getSubjectColor(subj);
              return (
                <button
                  key={subj}
                  type="button"
                  onClick={() => handleSubjectClick(subj)}
                  className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition text-left ${
                    selectedSubject === subj
                      ? "ring-1"
                      : "hover:bg-slate-100"
                  }`}
                  style={
                    selectedSubject === subj
                      ? {
                          backgroundColor: color.background,
                          color: color.text,
                          ringColor: color.border,
                        }
                      : { color: "#475569" }
                  }
                >
                  <span className="truncate">{subj}</span>
                  <span className="ml-2 shrink-0 rounded-full bg-white/60 px-2 py-0.5 text-xs opacity-80">
                    {count}
                  </span>
                </button>
              );
            })}
          </aside>

          {/* Mobile subject selector */}
          <div className="lg:hidden w-full mb-4 flex-col hidden">
            {/* shown inside main col below */}
          </div>

          {/* Main content */}
          <section className="flex-1 min-w-0 space-y-4">
            {/* Mobile subject pills */}
            <div className="lg:hidden flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => handleSubjectClick("all")}
                className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
                  selectedSubject === "all"
                    ? "bg-indigo-600 text-white"
                    : "bg-white text-slate-600 ring-1 ring-slate-200 hover:text-slate-900"
                }`}
              >
                Todas ({searchedModules.length})
              </button>
              {subjectOptions.map((subj) => {
                const count = searchedModules.filter((m) => resolveSubject(m) === subj).length;
                return (
                  <button
                    key={subj}
                    type="button"
                    onClick={() => handleSubjectClick(subj)}
                    className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
                      selectedSubject === subj
                        ? "bg-indigo-600 text-white"
                        : "bg-white text-slate-600 ring-1 ring-slate-200 hover:text-slate-900"
                    }`}
                  >
                    {subj} ({count})
                  </button>
                );
              })}
            </div>

            {/* Category pills */}
            {categoryOptions.length > 1 && (
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedCategory("all")}
                  className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                    selectedCategory === "all"
                      ? "bg-indigo-100 text-indigo-700 ring-1 ring-indigo-300"
                      : "bg-white text-slate-500 ring-1 ring-slate-200 hover:text-slate-700"
                  }`}
                >
                  Todas las categorías
                </button>
                {categoryOptions.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                      selectedCategory === cat
                        ? "bg-indigo-100 text-indigo-700 ring-1 ring-indigo-300"
                        : "bg-white text-slate-500 ring-1 ring-slate-200 hover:text-slate-700"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}

            {/* Module grid */}
            {filteredModules.length === 0 ? (
              <div className="rounded-xl border border-dashed border-slate-300 bg-white p-12 text-center">
                <p className="text-sm text-slate-500">
                  No hay módulos para los filtros seleccionados.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedSubject("all");
                    setSelectedCategory("all");
                    setSearchTerm("");
                  }}
                  className="mt-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Limpiar filtros
                </button>
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {filteredModules.map((m) => {
                  const subjectColor = getSubjectColor(m.subject);
                  const quizCount = publishedQuizCount(m);
                  const hasRewards = Boolean(m.rewardsConfig);

                  return (
                    <article
                      key={m.id}
                      className="flex flex-col rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                    >
                      {/* Color strip */}
                      <div
                        className="h-1.5 w-full"
                        style={{ backgroundColor: subjectColor.border }}
                      />

                      <div className="flex flex-col flex-1 p-4 gap-3">
                        {/* Badges row */}
                        <div className="flex flex-wrap items-center gap-1.5">
                          <span
                            className="rounded-full px-2 py-0.5 text-xs font-semibold"
                            style={{
                              backgroundColor: subjectColor.background,
                              color: subjectColor.text,
                            }}
                          >
                            {resolveSubject(m)}
                          </span>
                          {m.category && m.category !== m.subject && (
                            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">
                              {resolveCategory(m)}
                            </span>
                          )}
                          {hasRewards && (
                            <span className="rounded-full bg-amber-50 px-2 py-0.5 text-xs font-semibold text-amber-700 ring-1 ring-amber-200">
                              PF
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <h2 className="text-base font-semibold text-slate-900 leading-snug">
                          {m.title}
                        </h2>

                        {/* Description */}
                        {m.description && (
                          <p className="text-sm text-slate-500 leading-relaxed">
                            {truncate(m.description, 120)}
                          </p>
                        )}

                        {/* Meta row */}
                        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mt-auto pt-1">
                          {m.durationMinutes > 0 && (
                            <span className="flex items-center gap-1">
                              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="10" />
                                <path strokeLinecap="round" d="M12 6v6l4 2" />
                              </svg>
                              {m.durationMinutes} min
                            </span>
                          )}
                          {m.level && (
                            <span className="flex items-center gap-1">
                              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13h2l2-5 4 10 2-5h8" />
                              </svg>
                              {m.level}
                            </span>
                          )}
                          {quizCount > 0 && (
                            <span className="flex items-center gap-1">
                              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2" />
                              </svg>
                              {quizCount} {quizCount === 1 ? "cuestionario" : "cuestionarios"}
                            </span>
                          )}
                        </div>

                        {/* Play button */}
                        <Link
                          to={`/modulos/${m.id}/jugar`}
                          className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 active:bg-indigo-700"
                        >
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                          Reproducir
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </section>
        </div>
      )}
    </main>
  );
}
