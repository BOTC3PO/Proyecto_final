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
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/40">
      {/* Header */}
      <header className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 px-6 py-6 shadow-lg">
        {/* Decorative background circles */}
        <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/10" />
        <div className="pointer-events-none absolute -left-6 bottom-0 h-32 w-32 rounded-full bg-white/5" />
        <div className="relative mx-auto max-w-7xl flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white tracking-tight">Reproductor de Modulos</h1>
            <p className="text-sm text-indigo-100 mt-1">
              Explora y reproduce modulos organizados por materia y categoria
            </p>
          </div>
          <div className="relative w-full sm:w-80">
            <svg
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-indigo-300"
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
              placeholder="Buscar modulos..."
              className="w-full rounded-xl border border-white/20 bg-white/15 py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-indigo-200 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/40 focus:bg-white/20 transition-all duration-200"
            />
          </div>
        </div>
      </header>

      {/* Loading state */}
      {loadStatus === "loading" && (
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm space-y-3">
                <div className="h-2.5 w-full rounded-full bg-slate-100 animate-pulse" />
                <div className="flex gap-2">
                  <div className="h-6 w-20 rounded-full bg-slate-100 animate-pulse" />
                  <div className="h-6 w-16 rounded-full bg-slate-100 animate-pulse" />
                </div>
                <div className="h-5 w-3/4 rounded-lg bg-slate-100 animate-pulse" />
                <div className="h-4 w-full rounded-lg bg-slate-100 animate-pulse" />
                <div className="h-4 w-2/3 rounded-lg bg-slate-100 animate-pulse" />
                <div className="flex gap-3 pt-1">
                  <div className="h-4 w-14 rounded bg-slate-100 animate-pulse" />
                  <div className="h-4 w-14 rounded bg-slate-100 animate-pulse" />
                </div>
                <div className="h-10 w-full rounded-xl bg-slate-100 animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      )}

      {loadStatus === "error" && (
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="rounded-2xl border border-red-200 bg-gradient-to-r from-red-50 to-rose-50 p-6 text-sm text-red-700 shadow-sm">
            <div className="flex items-start gap-3">
              <svg className="h-5 w-5 shrink-0 text-red-400 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
              </svg>
              <p>{errorMessage ?? "Ocurrio un error al cargar los modulos."}</p>
            </div>
          </div>
        </div>
      )}

      {loadStatus === "ready" && visibleModules.length === 0 && (
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <div className="mx-auto max-w-sm">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-indigo-100 to-purple-100">
              <svg className="h-10 w-10 text-indigo-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
              </svg>
            </div>
            <p className="text-base font-medium text-slate-600">No hay modulos disponibles para reproducir.</p>
            <p className="mt-1 text-sm text-slate-400">Los modulos publicados apareceran aqui.</p>
          </div>
        </div>
      )}

      {loadStatus === "ready" && visibleModules.length > 0 && (
        <div className="mx-auto max-w-7xl px-6 py-6 flex gap-6">
          {/* Sidebar -- subjects */}
          <aside className="hidden lg:flex flex-col w-56 shrink-0 gap-1">
            <p className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-400">
              Materias
            </p>
            <button
              type="button"
              onClick={() => handleSubjectClick("all")}
              className={`flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200 text-left ${
                selectedSubject === "all"
                  ? "bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 ring-1 ring-indigo-200 shadow-sm"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 hover:translate-x-0.5"
              }`}
            >
              <span>Todas</span>
              <span className={`ml-2 rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                selectedSubject === "all"
                  ? "bg-indigo-100 text-indigo-600"
                  : "bg-slate-100 text-slate-500"
              }`}>
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
                  className={`flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200 text-left ${
                    selectedSubject === subj
                      ? "ring-1 shadow-sm"
                      : "hover:bg-slate-100 hover:translate-x-0.5"
                  }`}
                  style={
                    selectedSubject === subj
                      ? {
                          backgroundColor: color.background,
                          color: color.text,
                        }
                      : { color: "#475569" }
                  }
                >
                  <span className="truncate">{subj}</span>
                  <span className="ml-2 shrink-0 rounded-full bg-white/60 px-2.5 py-0.5 text-xs font-semibold opacity-80">
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
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 shadow-sm ${
                  selectedSubject === "all"
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-indigo-200"
                    : "bg-white text-slate-600 ring-1 ring-slate-200 hover:text-slate-900 hover:shadow-md"
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
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 shadow-sm ${
                      selectedSubject === subj
                        ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-indigo-200"
                        : "bg-white text-slate-600 ring-1 ring-slate-200 hover:text-slate-900 hover:shadow-md"
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
                  className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 ${
                    selectedCategory === "all"
                      ? "bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 ring-1 ring-indigo-300 shadow-sm"
                      : "bg-white text-slate-500 ring-1 ring-slate-200 hover:text-slate-700 hover:shadow-sm"
                  }`}
                >
                  Todas las categorias
                </button>
                {categoryOptions.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 ${
                      selectedCategory === cat
                        ? "bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 ring-1 ring-indigo-300 shadow-sm"
                        : "bg-white text-slate-500 ring-1 ring-slate-200 hover:text-slate-700 hover:shadow-sm"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}

            {/* Module grid */}
            {filteredModules.length === 0 ? (
              <div className="rounded-2xl border-2 border-dashed border-slate-200 bg-gradient-to-br from-white to-slate-50 p-16 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-slate-100">
                  <svg className="h-7 w-7 text-slate-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-slate-500">
                  No hay modulos para los filtros seleccionados.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedSubject("all");
                    setSelectedCategory("all");
                    setSearchTerm("");
                  }}
                  className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600 transition-all duration-200 hover:bg-indigo-100"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                  Limpiar filtros
                </button>
              </div>
            ) : (
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {filteredModules.map((m) => {
                  const subjectColor = getSubjectColor(m.subject);
                  const quizCount = publishedQuizCount(m);
                  const hasRewards = Boolean(m.rewardsConfig);

                  return (
                    <article
                      key={m.id}
                      className="group flex flex-col rounded-2xl border border-slate-200/80 bg-white shadow-sm hover:shadow-xl hover:shadow-indigo-100/50 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                    >
                      {/* Color strip -- gradient and thicker */}
                      <div
                        className="h-2 w-full"
                        style={{
                          background: `linear-gradient(90deg, ${subjectColor.border}, ${subjectColor.text}40)`,
                        }}
                      />

                      <div className="flex flex-col flex-1 p-5 gap-3">
                        {/* Badges row */}
                        <div className="flex flex-wrap items-center gap-1.5">
                          <span
                            className="rounded-full px-2.5 py-1 text-xs font-bold shadow-sm"
                            style={{
                              background: `linear-gradient(135deg, ${subjectColor.background}, ${subjectColor.background}cc)`,
                              color: subjectColor.text,
                            }}
                          >
                            {resolveSubject(m)}
                          </span>
                          {m.category && m.category !== m.subject && (
                            <span className="rounded-full bg-gradient-to-r from-slate-100 to-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600 ring-1 ring-slate-200/60">
                              {resolveCategory(m)}
                            </span>
                          )}
                          {hasRewards && (
                            <span className="rounded-full bg-gradient-to-r from-amber-50 to-yellow-50 px-2.5 py-1 text-xs font-bold text-amber-700 ring-1 ring-amber-200 shadow-sm">
                              PF
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <h2 className="text-base font-bold text-slate-900 leading-snug group-hover:text-indigo-700 transition-colors duration-200">
                          {m.title}
                        </h2>

                        {/* Description */}
                        {m.description && (
                          <p className="text-sm text-slate-500 leading-relaxed">
                            {truncate(m.description, 120)}
                          </p>
                        )}

                        {/* Meta row */}
                        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mt-auto pt-2 border-t border-slate-100">
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
                          className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 px-4 py-2.5 text-sm font-bold text-white shadow-sm shadow-indigo-200 transition-all duration-200 hover:from-indigo-500 hover:to-purple-500 hover:shadow-md hover:shadow-indigo-300 active:scale-[0.98] group/btn"
                        >
                          <svg className="h-4 w-4 transition-transform duration-200 group-hover/btn:scale-110" fill="currentColor" viewBox="0 0 24 24">
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
