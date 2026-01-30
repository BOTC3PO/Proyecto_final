import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/use-auth";
import { apiGet } from "../lib/api";
import type { Module, ModuleDependency } from "../domain/module/module.types";
import { getSubjectColor } from "../domain/module/subjectColors";
import {
  fetchProfesorMenuDashboard,
  filterProfesorQuickLinks,
  type ProfesorMenuDashboard
} from "../services/profesor";
import ConceptMapVisualizer from "../visualizadores/graficos/ConceptMapVisualizer";
import type { ConceptMapSpec, ConceptLink } from "../visualizadores/types";

const getRequiredDependencyIds = (dependencies: Array<ModuleDependency | string>) =>
  dependencies
    .map((dependency) => {
      if (typeof dependency === "string") return dependency;
      return dependency.type === "required" ? dependency.id : null;
    })
    .filter((dependency): dependency is string => Boolean(dependency));

const getUnlocksDependencyIds = (dependencies: Array<ModuleDependency | string>) =>
  dependencies
    .map((dependency) => {
      if (typeof dependency === "string") return null;
      return dependency.type === "unlocks" ? dependency.id : null;
    })
    .filter((dependency): dependency is string => Boolean(dependency));

const collectDependencyChain = (startId: string, adjacency: Map<string, string[]>) => {
  const visited = new Set<string>();
  const stack = [startId];

  while (stack.length > 0) {
    const current = stack.pop();
    if (!current || visited.has(current)) continue;
    visited.add(current);
    const neighbors = adjacency.get(current) ?? [];
    neighbors.forEach((neighbor) => {
      if (!visited.has(neighbor)) {
        stack.push(neighbor);
      }
    });
  }

  return visited;
};

export default function menuProfesor() {
  const { user } = useAuth();
  const [modules, setModules] = useState<Module[]>([]);
  const [modulesStatus, setModulesStatus] = useState<"loading" | "ready" | "error">("loading");
  const [modulesError, setModulesError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("todas");
  const [selectedVisibility, setSelectedVisibility] = useState("todas");
  const [selectedSubject, setSelectedSubject] = useState("todas");
  const [selectedGraphModuleId, setSelectedGraphModuleId] = useState("");
  const [showFullPath, setShowFullPath] = useState(false);
  const [dashboard, setDashboard] = useState<ProfesorMenuDashboard | null>(null);
  const [dashboardLoading, setDashboardLoading] = useState(true);
  const [dashboardError, setDashboardError] = useState<string | null>(null);

  const categoryOptions = useMemo(() => {
    const categories = modules
      .map((module) => module.category)
      .filter((category): category is string => Boolean(category));
    return Array.from(new Set(categories)).sort((a, b) => a.localeCompare(b));
  }, [modules]);

  const filteredModules = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return modules.filter((module) => {
      const authorLabel = (module.authorName ?? module.createdBy ?? "").toLowerCase();
      const matchesSearch =
        normalizedSearch.length === 0 ||
        module.title.toLowerCase().includes(normalizedSearch) ||
        module.description.toLowerCase().includes(normalizedSearch) ||
        authorLabel.includes(normalizedSearch);
      const matchesCategory =
        selectedCategory === "todas" || module.category === selectedCategory;
      const matchesVisibility =
        selectedVisibility === "todas" || module.visibility === selectedVisibility;

      return matchesSearch && matchesCategory && matchesVisibility;
    });
  }, [modules, searchTerm, selectedCategory, selectedVisibility]);

  const activeFilters = [
    searchTerm.trim()
      ? { label: `Búsqueda: "${searchTerm.trim()}"`, key: "search" }
      : null,
    selectedCategory !== "todas"
      ? { label: `Categoría: ${selectedCategory}`, key: "category" }
      : null,
    selectedVisibility !== "todas"
      ? {
          label:
            selectedVisibility === "publico"
              ? "Visibilidad: Publicado"
              : "Visibilidad: Privado",
          key: "visibility"
        }
      : null
  ].filter(Boolean) as Array<{ label: string; key: string }>;

  useEffect(() => {
    let active = true;
    if (!user?.id) {
      setModules([]);
      setModulesStatus("error");
      setModulesError("No se encontró un docente autenticado.");
      return () => {
        active = false;
      };
    }
    setModulesStatus("loading");
    setModulesError(null);
    apiGet<{ items: Module[] }>("/api/modulos")
      .then((data) => {
        if (!active) return;
        const mapped = data.items
          .filter((module) => module.createdBy === user.id)
          .map((module) => ({
          id: module.id,
          title: module.title,
          description: module.description,
          level: module.level,
          durationMinutes: module.durationMinutes,
          subject: module.subject ?? module.category,
          category: module.category,
          visibility: module.visibility ?? "privado",
          dependencies: module.dependencies ?? [],
          createdBy: module.createdBy,
          createdByRole: module.createdByRole,
          authorName: module.authorName ?? module.createdBy,
          updatedAt: module.updatedAt ?? new Date().toISOString()
        }));
        setModules(mapped);
        setModulesStatus("ready");
      })
      .catch((error) => {
        if (!active) return;
        setModules([]);
        setModulesStatus("error");
        setModulesError(
          error instanceof Error ? error.message : "No se pudieron cargar los módulos."
        );
      });
    return () => {
      active = false;
    };
  }, [user?.id]);

  useEffect(() => {
    let active = true;
    fetchProfesorMenuDashboard()
      .then((data) => {
        if (!active) return;
        setDashboard(data);
        setDashboardError(null);
      })
      .catch((err: Error) => {
        if (!active) return;
        setDashboardError(err.message);
      })
      .finally(() => {
        if (!active) return;
        setDashboardLoading(false);
      });
    return () => {
      active = false;
    };
  }, []);

  const subjectOptions = useMemo(() => {
    const subjects = modules
      .map((module) => module.subject || module.category)
      .filter((subject): subject is string => Boolean(subject));
    return Array.from(new Set(subjects)).sort((a, b) => a.localeCompare(b));
  }, [modules]);

  const graphModules = useMemo(() => {
    if (selectedSubject === "todas") {
      return modules;
    }
    return modules.filter(
      (module) => (module.subject || module.category) === selectedSubject
    );
  }, [modules, selectedSubject]);

  const moduleById = useMemo(
    () => new Map(graphModules.map((module) => [module.id, module])),
    [graphModules]
  );

  const dependencyLinks = useMemo(() => {
    const links: ConceptLink[] = [];
    graphModules.forEach((module) => {
      getRequiredDependencyIds(module.dependencies).forEach((dependencyId) => {
        if (!moduleById.has(dependencyId)) return;
        links.push({
          id: `${dependencyId}-${module.id}-required`,
          sourceId: dependencyId,
          targetId: module.id,
          relation: "requiere"
        });
      });
      getUnlocksDependencyIds(module.dependencies).forEach((dependencyId) => {
        if (!moduleById.has(dependencyId)) return;
        links.push({
          id: `${module.id}-${dependencyId}-unlocks`,
          sourceId: module.id,
          targetId: dependencyId,
          relation: "desbloquea"
        });
      });
    });
    return links;
  }, [graphModules, moduleById]);

  const dependencyAdjacency = useMemo(() => {
    const adjacency = new Map<string, string[]>();
    graphModules.forEach((module) => {
      adjacency.set(
        module.id,
        getRequiredDependencyIds(module.dependencies).filter((dep) => moduleById.has(dep))
      );
    });
    return adjacency;
  }, [graphModules, moduleById]);

  const reverseAdjacency = useMemo(() => {
    const adjacency = new Map<string, string[]>();
    graphModules.forEach((module) => {
      getRequiredDependencyIds(module.dependencies).forEach((dependencyId) => {
        if (!moduleById.has(dependencyId)) return;
        const existing = adjacency.get(dependencyId) ?? [];
        existing.push(module.id);
        adjacency.set(dependencyId, existing);
      });
    });
    return adjacency;
  }, [graphModules, moduleById]);

  const unlocksAdjacency = useMemo(() => {
    const adjacency = new Map<string, string[]>();
    graphModules.forEach((module) => {
      getUnlocksDependencyIds(module.dependencies).forEach((dependencyId) => {
        if (!moduleById.has(dependencyId)) return;
        const existing = adjacency.get(module.id) ?? [];
        existing.push(dependencyId);
        adjacency.set(module.id, existing);
      });
    });
    return adjacency;
  }, [graphModules, moduleById]);

  const fullPathIds = useMemo(() => {
    if (!showFullPath || !selectedGraphModuleId || !moduleById.has(selectedGraphModuleId)) {
      return null;
    }
    const ancestors = collectDependencyChain(selectedGraphModuleId, dependencyAdjacency);
    const descendants = collectDependencyChain(selectedGraphModuleId, reverseAdjacency);
    return new Set([...ancestors, ...descendants]);
  }, [dependencyAdjacency, moduleById, reverseAdjacency, selectedGraphModuleId, showFullPath]);

  const graphSpec = useMemo<ConceptMapSpec>(() => {
    const nodes = graphModules
      .filter((module) => (fullPathIds ? fullPathIds.has(module.id) : true))
      .map((module) => ({
        id: module.id,
        label: module.title,
        description: module.subject || module.category
      }));

    const links = dependencyLinks.filter((link) =>
      fullPathIds ? fullPathIds.has(link.sourceId) && fullPathIds.has(link.targetId) : true
    );

    return {
      kind: "concept-map",
      nodes,
      links
    };
  }, [dependencyLinks, fullPathIds, graphModules]);

  const graphSelection = useMemo(() => {
    if (!selectedGraphModuleId) {
      return null;
    }
    return moduleById.get(selectedGraphModuleId) ?? null;
  }, [moduleById, selectedGraphModuleId]);

  const quickLinks = useMemo(() => {
    if (!dashboard) {
      return null;
    }
    return filterProfesorQuickLinks(dashboard.quickLinks);
  }, [dashboard]);

  const previewDependencies = useMemo(() => {
    if (!graphSelection) {
      return { previous: [], next: [] } as { previous: Module[]; next: Module[] };
    }

    const previous = (dependencyAdjacency.get(graphSelection.id) ?? [])
      .map((id) => moduleById.get(id))
      .filter((module): module is Module => Boolean(module));
    const nextIds = new Set<string>([
      ...(reverseAdjacency.get(graphSelection.id) ?? []),
      ...(unlocksAdjacency.get(graphSelection.id) ?? [])
    ]);
    const next = Array.from(nextIds)
      .map((id) => moduleById.get(id))
      .filter((module): module is Module => Boolean(module));

    return { previous, next };
  }, [dependencyAdjacency, graphSelection, moduleById, reverseAdjacency, unlocksAdjacency]);

  useEffect(() => {
    if (graphModules.length === 0) {
      setSelectedGraphModuleId("");
      return;
    }

    if (!selectedGraphModuleId || !moduleById.has(selectedGraphModuleId)) {
      setSelectedGraphModuleId(graphModules[0].id);
    }
  }, [graphModules, moduleById, selectedGraphModuleId]);

  return (
    <main className="flex-1">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-5">
        <div className="bg-white rounded-xl shadow flex items-center gap-4 p-5">
          <div className="w-12 h-12 rounded-full bg-blue-600 text-white grid place-content-center font-semibold">
            {dashboard?.profile.initials ?? "--"}
          </div>
          <div className="flex-1">
            <h2 className="font-semibold">{dashboard?.profile.name ?? "Cargando..."}</h2>
            <p className="text-gray-600">{dashboard?.profile.role ?? ""}</p>
          </div>
          <div className="flex items-center gap-5">
            <button title="Notificaciones" aria-label="Notificaciones">
              🔔
            </button>
            <Link className="flex items-center gap-2 hover:underline" to="/profesor/configuracion">
              👤 Perfil
            </Link>
          </div>
        </div>
        {dashboardError && (
          <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
            Error al cargar el resumen: {dashboardError}
          </div>
        )}

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="bg-white rounded-xl shadow p-5 flex items-center gap-4">
            <div className="text-3xl">🕒</div>
            <div>
              <p className="text-gray-500">Próxima Clase</p>
              <p className="text-xl font-semibold">
                {dashboardLoading ? "Cargando..." : dashboard?.nextClass.detail ?? "--"}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-5 flex items-center gap-4">
            <div className="text-3xl">👪</div>
            <div>
              <p className="text-gray-500">Estudiantes Activos</p>
              <p className="text-2xl font-bold">
                {dashboardLoading ? "--" : `${dashboard?.activeStudents ?? 0} estudiantes`}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-5">
            <div className="flex items-center gap-3">
              <div className="text-3xl">🎓</div>
              <p className="text-gray-600">Progreso general de la próxima clase</p>
            </div>
            <div className="mt-3 h-3 w-full bg-gray-200 rounded">
              <div
                className="h-3 bg-gray-400 rounded"
                style={{ width: `${dashboard?.progressNextClass ?? 0}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {dashboardLoading && <p className="text-sm text-gray-500">Cargando métricas...</p>}
          {!dashboardLoading &&
            dashboard?.kpiCards.map((card) => (
            <Link
              key={card.id}
              className="group rounded-xl border border-transparent bg-white p-5 shadow transition hover:border-blue-200 hover:shadow-md"
              to={card.href}
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-500">{card.label}</p>
                  <p className="mt-2 text-3xl font-semibold text-gray-900">{card.value}</p>
                  <p className="mt-2 text-xs text-gray-400">{card.helper}</p>
                </div>
                <span className="text-3xl">{card.icon}</span>
              </div>
              <span className="mt-4 inline-flex text-xs font-semibold uppercase tracking-wide text-blue-600 group-hover:underline">
                Ver detalle
              </span>
            </Link>
          ))}
          {!dashboardLoading && dashboard?.kpiCards.length === 0 && (
            <p className="text-sm text-gray-500">No hay métricas disponibles.</p>
          )}
        </div>

        <section className="bg-white rounded-xl shadow p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="text-lg font-semibold">Planificación semanal</h3>
              <p className="text-sm text-gray-500">
                Próximas clases y actividades prioritarias.
              </p>
            </div>
            <Link
              className="inline-flex items-center gap-2 rounded-md border border-blue-200 px-3 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50"
              to="/profesor/calendario"
            >
              Ver calendario
            </Link>
          </div>
          <ul className="mt-4 divide-y divide-gray-100">
            {dashboardLoading && <li className="py-3 text-sm text-gray-500">Cargando planificación...</li>}
            {!dashboardLoading &&
              dashboard?.weeklyPlan.map((item) => (
                <li key={item.id} className="flex flex-wrap items-center justify-between gap-3 py-3">
                  <div>
                    <p className="font-semibold text-gray-900">{item.title}</p>
                    <p className="text-sm text-gray-500">{item.detail}</p>
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                    {item.status}
                  </span>
                </li>
              ))}
            {!dashboardLoading && dashboard?.weeklyPlan.length === 0 && (
              <li className="py-3 text-sm text-gray-500">No hay actividades programadas.</li>
            )}
          </ul>
        </section>

        <div className="bg-white rounded-xl shadow p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-lg font-semibold">Módulos activos</h3>
            <div className="flex items-center gap-3">
              <Link
                className="inline-flex items-center gap-2 rounded-md border border-blue-200 px-3 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50"
                to="/profesor/aulas#crear"
              >
                + Crear aula
              </Link>
              <Link
                className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700"
                to="/profesor/cursos/nuevo"
              >
                + Crear clase/sección
              </Link>
              <Link className="text-sm text-blue-600 hover:underline" to="/modulos/crear">
                Crear módulo
              </Link>
            </div>
          </div>
          <div className="mt-4 grid gap-3 lg:grid-cols-[2fr_1fr_1fr]">
            <label className="flex flex-col gap-1 text-sm font-semibold text-gray-700">
              Buscar módulo
              <input
                className="h-10 rounded-md border border-gray-200 px-3 text-sm focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
                placeholder="Busca por título o descripción"
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
            </label>
            <label className="flex flex-col gap-1 text-sm font-semibold text-gray-700">
              Categoría
              <select
                className="h-10 rounded-md border border-gray-200 px-3 text-sm focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
                value={selectedCategory}
                onChange={(event) => setSelectedCategory(event.target.value)}
              >
                <option value="todas">Todas</option>
                {categoryOptions.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-1 text-sm font-semibold text-gray-700">
              Visibilidad
              <select
                className="h-10 rounded-md border border-gray-200 px-3 text-sm focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
                value={selectedVisibility}
                onChange={(event) => setSelectedVisibility(event.target.value)}
              >
                <option value="todas">Todas</option>
                <option value="publico">Publicado</option>
                <option value="privado">Privado</option>
              </select>
            </label>
          </div>
          {activeFilters.length > 0 && (
            <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
              <span className="text-gray-500">Filtros activos:</span>
              {activeFilters.map((filter) => (
                <span
                  key={filter.key}
                  className="rounded-full bg-blue-50 px-3 py-1 font-semibold text-blue-700"
                >
                  {filter.label}
                </span>
              ))}
            </div>
          )}
          {modulesStatus === "loading" && (
            <p className="mt-4 text-sm text-gray-500">Cargando módulos...</p>
          )}
          {modulesStatus === "error" && modulesError && (
            <p className="mt-4 text-sm text-red-600">{modulesError}</p>
          )}
          {modulesStatus === "ready" && (
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {filteredModules.map((module) => {
                const subjectLabel = module.subject ?? module.category;
                const subjectColor = getSubjectColor(subjectLabel);

                return (
                  <article
                    key={module.id}
                    className="rounded-lg border p-4"
                    style={{
                      borderColor: subjectColor.border,
                      backgroundColor: subjectColor.background
                    }}
                  >
                    <p className="text-xs uppercase text-gray-500">{module.category}</p>
                    <h4 className="mt-2 font-semibold">{module.title}</h4>
                    <p className="mt-2 text-sm text-gray-600">{module.description}</p>
                    <div className="mt-2 flex flex-wrap gap-2 text-xs">
                      <span className="rounded-full bg-slate-100 px-2 py-1 text-slate-600">
                        {module.visibility === "publico" ? "Publicado" : "Privado"}
                      </span>
                      <span className="rounded-full bg-slate-100 px-2 py-1 text-slate-600">
                        Dependencias: {module.dependencies.length}
                      </span>
                      {module.createdByRole === "admin" && (
                        <span className="rounded-full bg-amber-100 px-2 py-1 text-amber-700">
                          Creado por admin
                        </span>
                      )}
                    </div>
                    <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-gray-500">
                      <span>{module.level}</span>
                      <span>{module.durationMinutes} min</span>
                    </div>
                    <p className="mt-2 text-xs text-gray-500">
                      Autor: {module.authorName ?? module.createdBy ?? "--"}
                    </p>
                    <Link
                      className="mt-4 inline-flex w-full items-center justify-center rounded-md border border-gray-300 px-3 py-2 text-sm"
                      to={`/modulos/${module.id}/editar`}
                    >
                      Editar módulo
                    </Link>
                  </article>
                );
              })}
            </div>
          )}
          {modulesStatus === "ready" && filteredModules.length === 0 && (
            <p className="mt-4 text-sm text-gray-500">
              No hay módulos que coincidan con los filtros seleccionados.
            </p>
          )}
        </div>

        <section className="bg-white rounded-xl shadow p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="text-lg font-semibold">Mapa de dependencias</h3>
              <p className="text-sm text-gray-500">
                Revisa cómo se encadenan los módulos y filtra por materia o ruta completa.
              </p>
            </div>
            {graphSelection && (
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                Seleccionado: {graphSelection.title}
              </span>
            )}
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <label className="flex flex-col gap-1 text-sm font-semibold text-gray-700">
              Materia
              <select
                className="h-10 rounded-md border border-gray-200 px-3 text-sm focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
                value={selectedSubject}
                onChange={(event) => setSelectedSubject(event.target.value)}
              >
                <option value="todas">Todas</option>
                {subjectOptions.map((subject) => (
                  <option key={subject} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-1 text-sm font-semibold text-gray-700">
              Módulo base
              <select
                className="h-10 rounded-md border border-gray-200 px-3 text-sm focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
                value={selectedGraphModuleId}
                onChange={(event) => setSelectedGraphModuleId(event.target.value)}
              >
                {graphModules.map((module) => (
                  <option key={module.id} value={module.id}>
                    {module.title}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex items-center gap-3 rounded-md border border-gray-200 px-3 py-2 text-sm font-semibold text-gray-700">
              <input
                checked={showFullPath}
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-200"
                type="checkbox"
                onChange={(event) => setShowFullPath(event.target.checked)}
              />
              Mostrar ruta completa
            </label>
          </div>
          <div className="mt-4 grid gap-4 lg:grid-cols-[2fr_1fr]">
            {graphSpec.nodes.length > 0 ? (
              <ConceptMapVisualizer spec={graphSpec} />
            ) : (
              <div className="rounded-lg border border-dashed border-slate-200 bg-slate-50 p-6 text-sm text-slate-500">
                Selecciona una materia con módulos disponibles para ver el mapa.
              </div>
            )}
            <div className="space-y-4">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase text-slate-500">
                  Vista previa compacta
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Nodos anteriores y posteriores al módulo seleccionado.
                </p>
              </div>
              <div className="rounded-lg border border-slate-200 p-4">
                <p className="text-xs font-semibold uppercase text-slate-500">Anteriores</p>
                <ul className="mt-3 space-y-2">
                  {previewDependencies.previous.length === 0 && (
                    <li className="text-sm text-slate-400">Sin dependencias previas.</li>
                  )}
                  {previewDependencies.previous.map((module) => (
                    <li key={module.id} className="rounded-md bg-slate-50 px-3 py-2 text-sm">
                      <p className="font-semibold text-slate-700">{module.title}</p>
                      <p className="text-xs text-slate-500">{module.subject}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 p-4">
                <p className="text-xs font-semibold uppercase text-slate-500">Posteriores</p>
                <ul className="mt-3 space-y-2">
                  {previewDependencies.next.length === 0 && (
                    <li className="text-sm text-slate-400">Sin módulos dependientes.</li>
                  )}
                  {previewDependencies.next.map((module) => (
                    <li key={module.id} className="rounded-md bg-slate-50 px-3 py-2 text-sm">
                      <p className="font-semibold text-slate-700">{module.title}</p>
                      <p className="text-xs text-slate-500">{module.subject}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {dashboardLoading && <p className="text-sm text-gray-500">Cargando accesos rápidos...</p>}
          {!dashboardLoading &&
            quickLinks &&
            Object.entries(quickLinks).map(([section, links]) => (
              <div key={section} className="bg-white rounded-xl shadow">
                <div className="bg-sky-600 text-white font-semibold rounded-t-xl px-4 py-2">
                  {section === "academico" ? "Académico" : "Gestión"}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x">
                  {links.map((link) => (
                    <Link
                      key={link.id}
                      className="h-20 grid place-content-center hover:bg-gray-50"
                      to={link.href}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          {!dashboardLoading &&
            quickLinks &&
            quickLinks.academico.length === 0 &&
            quickLinks.gestion.length === 0 && (
            <p className="text-sm text-gray-500">No hay accesos rápidos configurados.</p>
          )}
        </div>
      </div>
    </main>
  );
}
