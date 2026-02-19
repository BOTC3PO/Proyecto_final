import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../auth/use-auth";
import { apiGet } from "../../lib/api";
import type { Module, ModuleVisibility } from "../../domain/module/module.types";
import testmode from "../../sys/testmode";

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

  const isTestMode = testmode();
  const canCreate = useMemo(
    () => ["TEACHER", "ADMIN"].includes(role) || (isTestMode && role === "GUEST"),
    [isTestMode, role]
  );
  const canEdit = useMemo(
    () => ["TEACHER", "ADMIN"].includes(role) || (isTestMode && role === "GUEST"),
    [isTestMode, role]
  );

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
    <main className="p-6 space-y-6">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Módulos</h1>
          <p className="text-sm text-slate-600">
            Explora el listado de módulos disponibles y gestiona su contenido.
          </p>
        </div>
        {canCreate && (
          <Link
            to="/modulos/crear"
            className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500"
          >
            Crear módulo
          </Link>
        )}
      </header>

      {status === "loading" && (
        <div className="rounded-lg border border-slate-200 bg-white p-6 text-sm text-slate-600">
          Cargando módulos...
        </div>
      )}

      {status === "error" && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-6 text-sm text-red-700">
          {errorMessage ?? "Ocurrió un error inesperado."}
        </div>
      )}

      {status === "ready" && modules.length === 0 && (
        <div className="rounded-lg border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
          <p className="text-sm text-slate-600">No hay módulos disponibles por ahora.</p>
          {canCreate && (
            <Link
              to="/modulos/crear"
              className="mt-4 inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500"
            >
              Crear el primer módulo
            </Link>
          )}
        </div>
      )}

      {status === "ready" && modules.length > 0 && (
        <section className="space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            {[
              { key: "mine", label: "Mis módulos" },
              { key: "school", label: "Escuela" },
              { key: "public", label: "Públicos" },
            ].map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key as "mine" | "school" | "public")}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeTab === tab.key
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "bg-white text-slate-600 ring-1 ring-inset ring-slate-200 hover:text-slate-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid gap-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm md:grid-cols-2 xl:grid-cols-5">
            <label className="space-y-1 text-sm text-slate-600">
              <span className="font-medium text-slate-700">Materia</span>
              <select
                value={selectedSubject}
                onChange={(event) => setSelectedSubject(event.target.value)}
                className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700"
              >
                <option value="all">Todas</option>
                {subjectOptions.map((subject) => (
                  <option key={subject} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
            </label>
            <label className="space-y-1 text-sm text-slate-600">
              <span className="font-medium text-slate-700">Categoría</span>
              <select
                value={selectedCategory}
                onChange={(event) => setSelectedCategory(event.target.value)}
                className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700"
              >
                <option value="all">Todas</option>
                {categoryOptions.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>
            <label className="space-y-1 text-sm text-slate-600">
              <span className="font-medium text-slate-700">Visibilidad</span>
              <select
                value={selectedVisibility}
                onChange={(event) => setSelectedVisibility(event.target.value)}
                className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700"
              >
                <option value="all">Todas</option>
                {Object.entries(VISIBILITY_LABELS).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </label>
            <label className="space-y-1 text-sm text-slate-600">
              <span className="font-medium text-slate-700">Estado</span>
              <select
                value={selectedStatus}
                onChange={(event) => setSelectedStatus(event.target.value)}
                className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700"
              >
                <option value="all">Todos</option>
                {statusOptions.map((item) => (
                  <option key={item} value={item}>
                    {STATUS_LABELS[item] ?? item}
                  </option>
                ))}
              </select>
            </label>
            <label className="space-y-1 text-sm text-slate-600">
              <span className="font-medium text-slate-700">Búsqueda</span>
              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Buscar módulo..."
                className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700"
              />
            </label>
          </div>

          {filteredModules.length === 0 ? (
            <div className="rounded-lg border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
              <p className="text-sm text-slate-600">
                No encontramos módulos con los filtros seleccionados.
              </p>
            </div>
          ) : (
            <div className="grid gap-4">
              {filteredModules.map((module) => {
                const visibilityLabel = module.visibility
                  ? VISIBILITY_LABELS[module.visibility]
                  : "Sin definir";
                const statusLabel = STATUS_LABELS[resolveStatus(module)] ?? "Sin estado";
                return (
                  <article
                    key={module.id}
                    className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div className="space-y-1">
                        <h2 className="text-lg font-semibold text-slate-900">{module.title}</h2>
                        <p className="text-sm text-slate-600">
                          Materia: {resolveMateria(module)}
                        </p>
                        <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-500">
                          <span>Visibilidad: {visibilityLabel}</span>
                          <span>Estado: {statusLabel}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-3 text-sm font-semibold">
                        <Link
                          to={`/modulos/${module.id}`}
                          className="rounded-md border border-slate-200 px-3 py-1.5 text-slate-700 transition hover:bg-slate-50"
                        >
                          Ver
                        </Link>
                        {canEdit && (
                          <Link
                            to={`/modulos/${module.id}/editar`}
                            className="rounded-md border border-indigo-200 px-3 py-1.5 text-indigo-600 transition hover:bg-indigo-50"
                          >
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
