import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { getAulaId } from "../lib/aula-id";
import { useAuth } from "../auth/use-auth";
import { apiGet, apiPost } from "../lib/api";
import type { Module, ModuleDependency } from "../domain/module/module.types";
import type { Classroom } from "../domain/classroom/classroom.types";
import {
  fetchProfesorMenuDashboard,
  filterProfesorQuickLinks,
  type ProfesorMenuDashboard
} from "../services/profesor";

type LocalConceptLink = {
  id: string;
  sourceId: string;
  targetId: string;
  relation: string;
};

type LocalConceptMapSpec = {
  kind: "concept-map";
  nodes: { id: string; label: string; description?: string }[];
  links: LocalConceptLink[];
};

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
  const [_modulesError, setModulesError] = useState<string | null>(null);
  const [searchTerm] = useState("");
  const [selectedCategory] = useState("todas");
  const [selectedVisibility] = useState("todas");
  const [selectedSubject] = useState("todas");
  const [selectedGraphModuleId, setSelectedGraphModuleId] = useState("");
  const [showFullPath] = useState(false);
  const [dashboard, setDashboard] = useState<ProfesorMenuDashboard | null>(null);
  const [dashboardLoading, setDashboardLoading] = useState(true);
  const [dashboardError, setDashboardError] = useState<string | null>(null);
  const [menuState, setMenuState] = useState<{
    status: "loading" | "ready" | "error";
    message: string;
  }>({
    status: "loading",
    message: "Cargando el menú del profesor..."
  });
  const [aulas, setAulas] = useState<Classroom[]>([]);
  const [modoAulaActivo, setModoAulaActivo] = useState(false);
  const [modoAulaAulaId, setModoAulaAulaId] = useState("");
  const [modoAulaLoading, setModoAulaLoading] = useState(false);
  const [modoAulaDuracion, setModoAulaDuracion] = useState(60);
  const [modoAulaTimer, setModoAulaTimer] = useState<ReturnType<typeof setTimeout> | null>(null);
  const [, setModoAulaExpira] = useState<Date | null>(null);

  const _categoryOptions = useMemo(() => {
    const categories = modules
      .map((module) => module.category)
      .filter((category): category is string => Boolean(category));
    return Array.from(new Set(categories)).sort((a, b) => a.localeCompare(b));
  }, [modules]);
  void _categoryOptions;

  const _filteredModules = useMemo(() => {
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

  const _activeFilters = [
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
  void _filteredModules;
  void _activeFilters;

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
    apiGet<{ items: Module[] }>("/api/modulos?mine=true")
      .then((data) => {
        if (!active) return;
        const mapped = data.items.map((module) => ({
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

  useEffect(() => {
    if (!user?.id) return;
    apiGet<{ items: Classroom[] }>("/api/aulas")
      .then((data) => {
        // El backend ya filtra por membresía
        const misAulas = data.items ?? [];
        setAulas(misAulas);
        if (misAulas[0] && !modoAulaAulaId) {
          setModoAulaAulaId(getAulaId(misAulas[0]));
        }
      })
      .catch(() => {});
  }, [user?.id]);

  const handleToggleModoAula = async () => {
    if (!modoAulaAulaId) return;
    setModoAulaLoading(true);
    try {
      const activar = !modoAulaActivo;
      await apiPost("/api/pedagogico/modo-aula", {
        aulaId: modoAulaAulaId,
        activo: activar,
        restricciones: ["tienda", "economia"],
      });
      setModoAulaActivo(activar);

      // Limpiar timer anterior
      if (modoAulaTimer) clearTimeout(modoAulaTimer);

      if (activar) {
        // Calcular expiración
        const expira = new Date(Date.now() + modoAulaDuracion * 60 * 1000);
        setModoAulaExpira(expira);

        // Timer para desactivar automáticamente
        const timer = setTimeout(async () => {
          try {
            await apiPost("/api/pedagogico/modo-aula", {
              aulaId: modoAulaAulaId,
              activo: false,
              restricciones: ["tienda", "economia"],
            });
            setModoAulaActivo(false);
            setModoAulaExpira(null);
          } catch { /* ignorar */ }
        }, modoAulaDuracion * 60 * 1000);

        setModoAulaTimer(timer);
      } else {
        setModoAulaExpira(null);
        setModoAulaTimer(null);
      }
    } catch { /* ignorar */ }
    finally { setModoAulaLoading(false); }
  };

  // Limpiar timer al desmontar
  useEffect(() => {
    return () => {
      if (modoAulaTimer) clearTimeout(modoAulaTimer);
    };
  }, [modoAulaTimer]);

  useEffect(() => {
    if (dashboardError) {
      setMenuState({
        status: "error",
        message: "No pudimos cargar el menú del profesor. Intenta nuevamente más tarde."
      });
      return;
    }

    if (dashboardLoading || modulesStatus === "loading") {
      setMenuState({
        status: "loading",
        message: "Cargando el menú del profesor..."
      });
      return;
    }

    setMenuState({ status: "ready", message: "" });
  }, [dashboardError, dashboardLoading, modulesStatus]);

  const _subjectOptions = useMemo(() => {
    const subjects = modules
      .map((module) => module.subject || module.category)
      .filter((subject): subject is string => Boolean(subject));
    return Array.from(new Set(subjects)).sort((a, b) => a.localeCompare(b));
  }, [modules]);
  void _subjectOptions;

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
    const links: LocalConceptLink[] = [];
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

  const _graphSpec = useMemo<LocalConceptMapSpec>(() => {
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
  void _graphSpec;

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

  const _previewDependencies = useMemo(() => {
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
  void _previewDependencies;

  useEffect(() => {
    if (graphModules.length === 0) {
      setSelectedGraphModuleId("");
      return;
    }

    if (!selectedGraphModuleId || !moduleById.has(selectedGraphModuleId)) {
      setSelectedGraphModuleId(graphModules[0].id);
    }
  }, [graphModules, moduleById, selectedGraphModuleId]);

  const QUICK_LINK_ICONS: Record<string, string> = {
    aulas:                '🏫',
    cursos:               '📚',
    calificaciones:       '📝',
    materiales:           '📦',
    evaluaciones:         '📋',
    modulos:              '🎓',
    asistencia:           '✅',
    reportes:             '📊',
    mensajes:             '💬',
    configuracion:        '⚙️',
    encuestas:            '📣',
    estadisticas:         '📈',
    crear_modulo:         '➕',
    editor_cuestionarios: '✏️',
    calendario:           '📅',
  };

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4">

      {/* ── Estado de carga ─────────────────────────────────────── */}
      {menuState.status !== 'ready' && (
        <div className={`space-y-4 ${menuState.status === 'loading' ? 'animate-pulse' : ''}`}>
          {menuState.status === 'error' && (
            <p className="text-sm text-[var(--c-danger)] mb-4">{menuState.message}</p>
          )}
          <div className="grid gap-3 grid-cols-4">
            {[1,2,3,4].map(i => <div key={i} className="h-24 rounded-xl bg-[var(--c-border)]" />)}
          </div>
          <div className="grid gap-4 grid-cols-3">
            <div className="h-64 rounded-xl bg-[var(--c-border)]" />
            <div className="h-64 rounded-xl bg-[var(--c-border)]" />
            <div className="h-64 rounded-xl bg-[var(--c-border)]" />
          </div>
        </div>
      )}

      {menuState.status === 'ready' && (
        <div className="flex gap-5">

          {/* ── Contenido principal (col izquierda + centro) ─────── */}
          <div className="flex-1 min-w-0 space-y-4">

            {/* Stats KPI — 4 columnas */}
            <div className="grid gap-3 grid-cols-2 lg:grid-cols-4">
              {dashboard?.kpiCards.map((card) => (
                <Link
                  key={card.id}
                  to={card.href}
                  className="group bg-[var(--c-surface)] border border-[var(--c-border)] rounded-xl p-4 hover:border-[var(--c-primary)] transition-colors"
                >
                  <p className="text-[10px] uppercase tracking-widest text-[var(--c-muted)] mb-2">
                    {card.label}
                  </p>
                  <p className="text-3xl font-semibold text-[var(--c-text)]">{card.value}</p>
                  <p className="text-xs text-[var(--c-muted)] mt-1">{card.helper}</p>
                </Link>
              ))}
              {!dashboard?.kpiCards.length && [1,2,3,4].map(i => (
                <div key={i} className="h-24 rounded-xl bg-[var(--c-border)] animate-pulse" />
              ))}
            </div>

            {/* Layout 2 columnas: Mis aulas (izq) + Evaluaciones + Planificación (der) */}
            <div className="grid gap-4 lg:grid-cols-2">

              {/* ── Mis aulas ──────────────────────────────────── */}
              <div className="bg-[var(--c-surface)] border border-[var(--c-border)] rounded-xl overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--c-border)]">
                  <h3 className="text-sm font-semibold text-[var(--c-text)]">Mis aulas</h3>
                  <Link to="/profesor/aulas" className="text-xs text-[var(--c-primary)] hover:underline">
                    Ver todas →
                  </Link>
                </div>

                {/* Modo aula */}
                <div className={`mx-4 mt-3 mb-2 rounded-xl px-4 py-3 ${
                  modoAulaActivo
                    ? 'bg-[var(--c-primary)]'
                    : 'bg-[var(--c-text)]'
                }`}>
                  <p className="text-[9px] uppercase tracking-widest font-semibold text-white/60 mb-1">
                    Modo Aula
                  </p>
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-medium text-white">
                      {modoAulaActivo
                        ? 'Los alumnos tienen acceso completo'
                        : 'Restringido · activá el modo aula'}
                    </p>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      {!modoAulaActivo && (
                        <select
                          value={modoAulaAulaId}
                          onChange={(e) => setModoAulaAulaId(e.target.value)}
                          className="rounded-lg text-xs px-2 py-1 bg-white/20 text-white border border-white/30 focus:outline-none"
                        >
                          {aulas.filter(a =>
                            (a.status === 'ACTIVE' || a.status === 'activa')
                          ).map(a => (
                            <option key={getAulaId(a)} value={getAulaId(a)}>
                              {a.name}
                            </option>
                          ))}
                        </select>
                      )}
                      <button
                        disabled={modoAulaLoading || !modoAulaAulaId}
                        onClick={handleToggleModoAula}
                        className="rounded-lg px-3 py-1 text-xs font-semibold transition-opacity disabled:opacity-40 bg-[#e85d3a] text-white hover:opacity-90"
                      >
                        {modoAulaLoading ? '...' : modoAulaActivo ? 'Desactivar' : 'Activar'}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Lista de aulas */}
                <div className="px-2 pb-3">
                  {aulas.length === 0 && (
                    <p className="text-xs text-[var(--c-muted)] px-2 py-4 text-center">
                      Sin aulas asignadas.
                    </p>
                  )}
                  {aulas.slice(0, 6).map((a) => {
                    const activa = a.status === 'ACTIVE' || a.status === 'activa';
                    return (
                      <Link
                        key={getAulaId(a)}
                        to={`/profesor/aulas/${getAulaId(a)}`}
                        className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-[var(--c-bg)] transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full flex-shrink-0 ${
                            activa ? 'bg-[var(--c-success)]' : 'bg-[var(--c-border)]'
                          }`} />
                          <span className="text-sm text-[var(--c-text)] truncate">{a.name}</span>
                        </div>
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${
                          activa
                            ? 'bg-[color-mix(in_srgb,var(--c-success)_12%,transparent)] text-[var(--c-success)]'
                            : 'bg-[color-mix(in_srgb,var(--c-muted)_12%,transparent)] text-[var(--c-muted)]'
                        }`}>
                          {activa ? 'Activa' : 'Archivada'}
                        </span>
                      </Link>
                    );
                  })}
                </div>

                {/* Módulos activos — debajo de la lista de aulas */}
                {modules.length > 0 && (
                  <div className="border-t border-[var(--c-border)] px-4 py-3">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-[10px] uppercase tracking-widest font-semibold text-[var(--c-muted)]">
                        Módulos activos
                      </p>
                      <Link to="/modulos" className="text-[10px] text-[var(--c-primary)] hover:underline">
                        Gestionar →
                      </Link>
                    </div>
                    {modules.slice(0, 3).map((m, i) => (
                      <div key={m.id} className="flex items-center gap-2 py-1.5">
                        <span className="text-[10px] font-bold text-[var(--c-muted)] w-5 flex-shrink-0">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-medium text-[var(--c-text)] truncate">{m.title}</p>
                          <p className="text-[10px] text-[var(--c-muted)]">
                            {m.category} · {m.durationMinutes ?? '?'} min
                          </p>
                        </div>
                        <span className={`text-[9px] font-semibold px-1.5 py-0.5 rounded-full flex-shrink-0 ${
                          m.visibility === 'publico'
                            ? 'bg-[color-mix(in_srgb,var(--c-success)_12%,transparent)] text-[var(--c-success)]'
                            : 'bg-[color-mix(in_srgb,var(--c-muted)_12%,transparent)] text-[var(--c-muted)]'
                        }`}>
                          {m.visibility === 'publico' ? 'PUB' : 'PRIV'}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* CTA cuando no hay módulos */}
                {modules.length === 0 && modulesStatus === 'ready' && (
                  <div className="border-t border-[var(--c-border)] px-4 py-4 text-center">
                    <p className="text-xs text-[var(--c-muted)] mb-2">Todavía no creaste módulos.</p>
                    <Link
                      to="/modulos/crear"
                      className="inline-flex items-center gap-1 rounded-lg bg-[var(--c-primary)] px-3 py-1.5 text-xs font-semibold text-white hover:opacity-90 transition-opacity"
                    >
                      + Crear primer módulo
                    </Link>
                  </div>
                )}
              </div>

              {/* ── Evaluaciones + Planificación (apiladas) ──────── */}
              <div className="space-y-4">

                {/* Evaluaciones recientes */}
                <div className="bg-[var(--c-surface)] border border-[var(--c-border)] rounded-xl overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--c-border)]">
                    <h3 className="text-sm font-semibold text-[var(--c-text)]">Evaluaciones recientes</h3>
                    <Link to="/profesor/evaluaciones" className="text-xs text-[var(--c-primary)] hover:underline">
                      Ver todas →
                    </Link>
                  </div>
                  <div className="px-2 py-2">
                    {modules.slice(0, 4).map((m) => (
                      <Link
                        key={m.id}
                        to={`/modulos/${m.id}/editar`}
                        className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-[var(--c-bg)] transition-colors"
                      >
                        <span className="text-sm text-[var(--c-text)] truncate">{m.title}</span>
                        <span className="text-[10px] text-[var(--c-muted)] flex-shrink-0 ml-2">
                          {m.category}
                        </span>
                      </Link>
                    ))}
                    {modules.length === 0 && modulesStatus === 'ready' && (
                      <div className="px-4 py-6 text-center space-y-3">
                        <p className="text-2xl">📋</p>
                        <p className="text-xs text-[var(--c-muted)]">
                          Creá tu primer módulo para luego armar evaluaciones.
                        </p>
                        <Link
                          to="/modulos/crear"
                          className="inline-flex items-center gap-1 rounded-lg bg-[var(--c-primary)] px-3 py-1.5 text-xs font-semibold text-white hover:opacity-90"
                        >
                          + Crear módulo
                        </Link>
                      </div>
                    )}
                    {modulesStatus === 'loading' && (
                      <div className="space-y-2 p-3">
                        {[1,2,3].map(i => <div key={i} className="h-6 rounded bg-[var(--c-border)] animate-pulse" />)}
                      </div>
                    )}
                  </div>
                  <div className="px-4 pb-3">
                    <Link
                      to="/profesor/evaluaciones"
                      className="block w-full text-center rounded-xl border border-[var(--c-border)] py-2 text-xs font-medium text-[var(--c-primary)] hover:bg-[var(--c-bg)] transition-colors"
                    >
                      + Nueva evaluación
                    </Link>
                  </div>
                </div>

                {/* Planificación semanal */}
                <div className="bg-[var(--c-surface)] border border-[var(--c-border)] rounded-xl overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--c-border)]">
                    <h3 className="text-sm font-semibold text-[var(--c-text)]">Planificación semanal</h3>
                    <Link to="/profesor/calendario" className="text-xs text-[var(--c-primary)] hover:underline">
                      Ver calendario →
                    </Link>
                  </div>
                  <div className="px-2 py-2">
                    {dashboard?.weeklyPlan.slice(0, 5).map((item) => (
                      <div key={item.id} className="flex items-start gap-3 px-3 py-2 rounded-lg">
                        <div className="w-2 h-2 rounded-full bg-[var(--c-primary)] flex-shrink-0 mt-1.5" />
                        <div className="min-w-0">
                          <p className="text-sm text-[var(--c-text)] truncate">{item.title}</p>
                          <p className="text-xs text-[var(--c-muted)]">{item.detail}</p>
                        </div>
                      </div>
                    ))}
                    {!dashboard?.weeklyPlan.length && (
                      <div className="px-4 py-6 text-center space-y-3">
                        <p className="text-2xl">📅</p>
                        <p className="text-xs text-[var(--c-muted)]">
                          No hay actividades programadas esta semana.
                        </p>
                        <Link
                          to="/profesor/calendario"
                          className="inline-flex items-center gap-1 rounded-lg border border-[var(--c-border)] px-3 py-1.5 text-xs font-medium text-[var(--c-primary)] hover:bg-[var(--c-bg)] transition-colors"
                        >
                          Ir al calendario →
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Próxima clase + modo aula duration (fila compacta) */}
            <div className="bg-[var(--c-surface)] border border-[var(--c-border)] rounded-xl px-5 py-3 flex items-center justify-between gap-6 flex-wrap">
              <div className="flex items-center gap-4 flex-1">
                <span className="text-2xl flex-shrink-0">🕒</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-xs text-[var(--c-muted)]">Próxima clase</p>
                    <p className="text-xs font-semibold text-[var(--c-text)]">
                      {dashboard?.progressNextClass ?? 0}% preparado
                    </p>
                  </div>
                  <p className="text-sm font-semibold text-[var(--c-text)] truncate mb-1.5">
                    {dashboard?.nextClass.detail ?? 'Sin clases asignadas'}
                  </p>
                  <div className="h-1.5 w-full bg-[var(--c-border)] rounded-full">
                    <div
                      className="h-full rounded-full bg-[var(--c-primary)] transition-all"
                      style={{ width: `${dashboard?.progressNextClass ?? 0}%` }}
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <p className="text-xs text-[var(--c-muted)]">Duración modo aula</p>
                <select
                  value={modoAulaDuracion}
                  onChange={(e) => setModoAulaDuracion(Number(e.target.value))}
                  className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] text-xs px-2 py-1.5 focus:outline-none focus:border-[var(--c-primary)]"
                >
                  {[15,30,45,60,90,120].map(m => (
                    <option key={m} value={m}>{m} min</option>
                  ))}
                </select>
                <div className="text-xs text-[var(--c-muted)]">
                  Estudiantes activos: <span className="font-semibold text-[var(--c-text)]">{dashboard?.activeStudents ?? 0}</span>
                </div>
              </div>
            </div>

          </div>

          {/* ── Columna derecha — Accesos rápidos ───────────────── */}
          <div className="w-56 flex-shrink-0 hidden xl:flex flex-col gap-4">

            {/* Resumen */}
            <div className="bg-[var(--c-surface)] border border-[var(--c-border)] rounded-xl p-4 space-y-3">
              <p className="text-[10px] uppercase tracking-widest font-semibold text-[var(--c-muted)]">
                Resumen
              </p>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-xs text-[var(--c-muted)]">Estudiantes activos</p>
                  <p className="text-sm font-semibold text-[var(--c-text)]">
                    {dashboard?.activeStudents ?? 0}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-[var(--c-muted)]">Aulas activas</p>
                  <p className="text-sm font-semibold text-[var(--c-text)]">
                    {aulas.filter(a => a.status === 'ACTIVE' || a.status === 'activa').length}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-[var(--c-muted)]">Módulos creados</p>
                  <p className="text-sm font-semibold text-[var(--c-text)]">{modules.length}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-[var(--c-muted)]">Evaluaciones</p>
                  <Link
                    to="/profesor/evaluaciones"
                    className="text-sm font-semibold text-[var(--c-primary)] hover:underline"
                  >
                    Ver →
                  </Link>
                </div>
              </div>
            </div>

            {/* Accesos rápidos académico */}
            {quickLinks && quickLinks.academico.length > 0 && (
              <div className="bg-[var(--c-surface)] border border-[var(--c-border)] rounded-xl overflow-hidden">
                <p className="px-4 py-2.5 text-[10px] uppercase tracking-widest font-semibold text-[var(--c-muted)] border-b border-[var(--c-border)]">
                  Accesos rápidos
                </p>
                {quickLinks.academico.map((link) => (
                  <Link
                    key={link.id}
                    to={link.href}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-[var(--c-text)] hover:bg-[var(--c-bg)] border-b border-[var(--c-border)] last:border-0 transition-colors"
                  >
                    <span className="text-base flex-shrink-0">
                      {QUICK_LINK_ICONS[link.id] ?? '→'}
                    </span>
                    <span className="truncate">{link.label}</span>
                  </Link>
                ))}
              </div>
            )}

            {/* Gestión */}
            {quickLinks && quickLinks.gestion.length > 0 && (
              <div className="bg-[var(--c-surface)] border border-[var(--c-border)] rounded-xl overflow-hidden">
                <p className="px-4 py-2.5 text-[10px] uppercase tracking-widest font-semibold text-[var(--c-muted)] border-b border-[var(--c-border)]">
                  Gestión
                </p>
                {quickLinks.gestion.map((link) => (
                  <Link
                    key={link.id}
                    to={link.href}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-[var(--c-text)] hover:bg-[var(--c-bg)] border-b border-[var(--c-border)] last:border-0 transition-colors"
                  >
                    <span className="text-base flex-shrink-0">
                      {QUICK_LINK_ICONS[link.id] ?? '→'}
                    </span>
                    <span className="truncate">{link.label}</span>
                  </Link>
                ))}
              </div>
            )}

            {/* Crear módulo CTA */}
            <Link
              to="/modulos/crear"
              className="block w-full text-center rounded-xl bg-[var(--c-primary)] px-4 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
            >
              + Crear módulo
            </Link>

          </div>

        </div>
      )}
    </div>
  );
}
