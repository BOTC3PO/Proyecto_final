import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useAuth } from "../../auth/use-auth";
import { apiGet } from "../../lib/api";
import type { Module, ModuleVisibility } from "../../domain/module/module.types";
const VISIBILITY_LABELS: Record<ModuleVisibility, string> = {
  publico: "Público",
  privado: "Privado",
  escuela: "Escuela",
};

type ModulesResponse = {
  items: Module[];
};

const resolveMateria = (module: Module) => module.subject || module.category || "Sin materia";
const resolveCategoria = (module: Module) => module.category || module.subject || "Sin categoría";
const resolveStatus = (module: Module) => {
  const moduleWithStatus = module as Module & { status?: string };
  if (moduleWithStatus.status) return moduleWithStatus.status;
  const quizStatuses = module.quizzes?.map((quiz) => quiz.status).filter(Boolean);
  if (quizStatuses?.includes("published")) return "published";
  if (quizStatuses?.includes("draft")) return "draft";
  if (quizStatuses?.includes("archived")) return "archived";
  return "sin_estado";
};

const STATUS_LABELS: Record<string, string> = {
  draft: "Borrador",
  published: "Publicado",
  archived: "Archivado",
  sin_estado: "Sin estado",
};

const VISIBILITY_COLORS: Record<string, string> = {
  publico: "bg-emerald-100 text-emerald-700 ring-emerald-600/20",
  privado: "bg-rose-100 text-rose-700 ring-rose-600/20",
  escuela: "bg-sky-100 text-sky-700 ring-sky-600/20",
};

const STATUS_COLORS: Record<string, string> = {
  draft: "bg-amber-100 text-amber-700 ring-amber-600/20",
  published: "bg-emerald-100 text-emerald-700 ring-emerald-600/20",
  archived: "bg-slate-100 text-slate-600 ring-slate-500/20",
  sin_estado: "bg-gray-100 text-gray-500 ring-gray-400/20",
};

const ACCENT_COLORS = [
  "from-indigo-500 to-purple-500",
  "from-emerald-500 to-teal-500",
  "from-rose-500 to-pink-500",
  "from-amber-500 to-orange-500",
  "from-sky-500 to-cyan-500",
  "from-violet-500 to-fuchsia-500",
];

function getAccentColor(subject: string): string {
  let hash = 0;
  for (let i = 0; i < subject.length; i++) {
    hash = subject.charCodeAt(i) + ((hash << 5) - hash);
  }
  return ACCENT_COLORS[Math.abs(hash) % ACCENT_COLORS.length];
}

export default function ModulosList() {
  const { user } = useAuth();
  const role = user?.role ?? "GUEST";
  const [modules, setModules] = useState<Module[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"mine" | "school" | "public">("public");
  const [selectedSubject, setSelectedSubject] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedVisibility, setSelectedVisibility] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchParams] = useSearchParams();

  const canCreate = useMemo(() => ["TEACHER", "ADMIN"].includes(role), [role]);
  const canEdit = useMemo(() => ["TEACHER", "ADMIN"].includes(role), [role]);

  const subjectOptions = useMemo(() => {
    const values = new Set<string>();
    modules.forEach((module) => values.add(resolveMateria(module)));
    return Array.from(values).sort((a, b) => a.localeCompare(b));
  }, [modules]);

  const categoryOptions = useMemo(() => {
    const values = new Set<string>();
    modules.forEach((module) => values.add(resolveCategoria(module)));
    return Array.from(values).sort((a, b) => a.localeCompare(b));
  }, [modules]);

  useEffect(() => {
    const querySubject = searchParams.get("subject");
    if (querySubject) {
      setSelectedSubject(querySubject);
    }
    // Solo inicializa desde query params al montar.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const statusOptions = useMemo(() => {
    const values = new Set<string>();
    modules.forEach((module) => values.add(resolveStatus(module)));
    return Array.from(values).sort((a, b) => a.localeCompare(b));
  }, [modules]);

  const filteredModules = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();
    return modules.filter((module) => {
      if (activeTab === "mine" && module.createdBy !== user?.id) return false;
      if (activeTab === "school" && module.visibility !== "escuela") return false;
      if (activeTab === "public" && module.visibility !== "publico") return false;
      if (selectedSubject !== "all" && resolveMateria(module) !== selectedSubject) return false;
      if (selectedCategory !== "all" && resolveCategoria(module) !== selectedCategory) return false;
      if (selectedVisibility !== "all" && module.visibility !== selectedVisibility) return false;
      if (selectedStatus !== "all" && resolveStatus(module) !== selectedStatus) return false;
      if (normalizedSearch) {
        const haystack = `${module.title} ${module.description} ${resolveMateria(
          module
        )} ${resolveCategoria(module)}`.toLowerCase();
        if (!haystack.includes(normalizedSearch)) return false;
      }
      return true;
    });
  }, [
    activeTab,
    modules,
    searchTerm,
    selectedCategory,
    selectedStatus,
    selectedSubject,
    selectedVisibility,
    user?.id,
  ]);

  useEffect(() => {
    let active = true;
    setStatus("loading");
    setErrorMessage(null);
    apiGet<ModulesResponse>("/api/modulos")
      .then((data) => {
        if (!active) return;
        setModules(data.items ?? []);
        setStatus("ready");
      })
      .catch((error) => {
        if (!active) return;
        setModules([]);
        setStatus("error");
        setErrorMessage(
          error instanceof Error ? error.message : "No se pudieron cargar los módulos."
        );
      });
    return () => {
      active = false;
    };
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 p-6 space-y-6">
      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <header className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-700 px-8 py-8 shadow-lg">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-60" />
        <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold tracking-tight text-white">Modulos</h1>
            <p className="text-sm text-indigo-100">
              Explora el listado de modulos disponibles y gestiona su contenido.
            </p>
          </div>
          {canCreate && (
            <Link
              to="/modulos/crear"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/15 px-5 py-2.5 text-sm font-semibold text-white shadow-sm ring-1 ring-white/25 backdrop-blur-sm transition-all duration-200 hover:bg-white/25 hover:shadow-md hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              Crear modulo
            </Link>
          )}
        </div>
      </header>

      {/* ── Loading state ──────────────────────────────────────────────────── */}
      {status === "loading" && (
        <div className="flex items-center justify-center rounded-2xl border border-slate-200/60 bg-white/80 p-12 shadow-sm backdrop-blur-sm">
          <div className="flex flex-col items-center gap-4">
            <div className="relative h-10 w-10">
              <div className="absolute inset-0 rounded-full border-4 border-indigo-100" />
              <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-indigo-600" />
            </div>
            <p className="text-sm font-medium text-slate-500">Cargando modulos...</p>
          </div>
        </div>
      )}

      {/* ── Error state ────────────────────────────────────────────────────── */}
      {status === "error" && (
        <div className="flex items-center gap-4 rounded-2xl border border-red-200/60 bg-red-50/80 p-6 shadow-sm backdrop-blur-sm">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-red-800">Error al cargar</p>
            <p className="text-sm text-red-600">{errorMessage ?? "Ocurrio un error inesperado."}</p>
          </div>
        </div>
      )}

      {/* ── Empty global state ─────────────────────────────────────────────── */}
      {status === "ready" && modules.length === 0 && (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300/60 bg-white/60 p-16 text-center backdrop-blur-sm">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <p className="text-base font-semibold text-slate-700">No hay modulos disponibles</p>
          <p className="mt-1 text-sm text-slate-500">Comienza creando tu primer modulo para empezar.</p>
          {canCreate && (
            <Link
              to="/modulos/crear"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:from-indigo-500 hover:to-purple-500 hover:shadow-lg hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              Crear el primer modulo
            </Link>
          )}
        </div>
      )}

      {/* ── Content ────────────────────────────────────────────────────────── */}
      {status === "ready" && modules.length > 0 && (
        <section className="space-y-6">
          {/* Tabs */}
          <div className="flex flex-wrap items-center gap-2 rounded-2xl bg-white/70 p-2 shadow-sm ring-1 ring-slate-200/60 backdrop-blur-sm">
            {[
              { key: "mine", label: "Mis modulos", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
              { key: "school", label: "Escuela", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
              { key: "public", label: "Publicos", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
            ].map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key as "mine" | "school" | "public")}
                className={`inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                  activeTab === tab.key
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/25"
                    : "text-slate-500 hover:bg-slate-100 hover:text-slate-700"
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={tab.icon} />
                </svg>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Filters */}
          <div className="rounded-2xl border border-slate-200/60 bg-white/80 p-5 shadow-sm backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              Filtros
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              <label className="space-y-1.5 text-sm">
                <span className="flex items-center gap-1.5 font-medium text-slate-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Materia
                </span>
                <select
                  value={selectedSubject}
                  onChange={(event) => setSelectedSubject(event.target.value)}
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 shadow-sm transition-all duration-200 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                >
                  <option value="all">Todas</option>
                  {subjectOptions.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
              </label>
              <label className="space-y-1.5 text-sm">
                <span className="flex items-center gap-1.5 font-medium text-slate-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                  Categoria
                </span>
                <select
                  value={selectedCategory}
                  onChange={(event) => setSelectedCategory(event.target.value)}
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 shadow-sm transition-all duration-200 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                >
                  <option value="all">Todas</option>
                  {categoryOptions.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </label>
              <label className="space-y-1.5 text-sm">
                <span className="flex items-center gap-1.5 font-medium text-slate-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Visibilidad
                </span>
                <select
                  value={selectedVisibility}
                  onChange={(event) => setSelectedVisibility(event.target.value)}
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 shadow-sm transition-all duration-200 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                >
                  <option value="all">Todas</option>
                  {Object.entries(VISIBILITY_LABELS).map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </label>
              <label className="space-y-1.5 text-sm">
                <span className="flex items-center gap-1.5 font-medium text-slate-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Estado
                </span>
                <select
                  value={selectedStatus}
                  onChange={(event) => setSelectedStatus(event.target.value)}
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 shadow-sm transition-all duration-200 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                >
                  <option value="all">Todos</option>
                  {statusOptions.map((item) => (
                    <option key={item} value={item}>
                      {STATUS_LABELS[item] ?? item}
                    </option>
                  ))}
                </select>
              </label>
              <label className="space-y-1.5 text-sm">
                <span className="flex items-center gap-1.5 font-medium text-slate-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Busqueda
                </span>
                <div className="relative">
                  <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="search"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    placeholder="Buscar modulo..."
                    className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-9 pr-3 text-sm text-slate-700 shadow-sm transition-all duration-200 placeholder:text-slate-400 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                  />
                </div>
              </label>
            </div>
          </div>

          {/* Module cards or empty filtered state */}
          {filteredModules.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300/60 bg-white/60 p-16 text-center backdrop-blur-sm">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <p className="text-base font-semibold text-slate-600">Sin resultados</p>
              <p className="mt-1 text-sm text-slate-400">
                No encontramos modulos con los filtros seleccionados.
              </p>
            </div>
          ) : (
            <div className="grid gap-4">
              {filteredModules.map((module) => {
                const visibilityLabel = module.visibility
                  ? VISIBILITY_LABELS[module.visibility]
                  : "Sin definir";
                const statusLabel = STATUS_LABELS[resolveStatus(module)] ?? "Sin estado";
                const visibilityColor = VISIBILITY_COLORS[module.visibility ?? ""] ?? "bg-gray-100 text-gray-500 ring-gray-400/20";
                const statusColor = STATUS_COLORS[resolveStatus(module)] ?? "bg-gray-100 text-gray-500 ring-gray-400/20";
                const accentGradient = getAccentColor(resolveMateria(module));
                return (
                  <article
                    key={module.id}
                    className="group relative overflow-hidden rounded-2xl border border-slate-200/60 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/5 hover:-translate-y-0.5"
                  >
                    {/* Color accent strip */}
                    <div className={`absolute inset-y-0 left-0 w-1 bg-gradient-to-b ${accentGradient}`} />
                    <div className="flex flex-col gap-3 p-5 pl-6 sm:flex-row sm:items-center sm:justify-between">
                      <div className="space-y-2">
                        <h2 className="text-lg font-semibold text-slate-900 transition-colors duration-200 group-hover:text-indigo-700">
                          {module.title}
                        </h2>
                        <p className="flex items-center gap-1.5 text-sm text-slate-500">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                          {resolveMateria(module)}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset ${visibilityColor}`}>
                            {visibilityLabel}
                          </span>
                          <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset ${statusColor}`}>
                            {statusLabel}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 text-sm font-semibold">
                        <Link
                          to={`/modulos/${module.id}`}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-4 py-2 text-slate-600 transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-800 hover:shadow-sm"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          Ver
                        </Link>
                        {canEdit && (
                          <Link
                            to={`/modulos/${module.id}/editar`}
                            className="inline-flex items-center gap-1.5 rounded-lg border border-indigo-200 px-4 py-2 text-indigo-600 transition-all duration-200 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700 hover:shadow-sm"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                            Editar
                          </Link>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </section>
      )}
    </main>
  );
}
