import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { getAulaId } from "../lib/aula-id";
import { useAuth } from "../auth/use-auth";
import { useI18n } from "../i18n/I18nContext";
import { apiGet, apiPost } from "../lib/api";
import type { Module } from "../domain/module/module.types";
import { resolveMateria } from "../domain/module/materia";
import { getRequiredDependencyIds, getUnlocksDependencyIds } from "../domain/module/module-dependencies";
import type { Classroom } from "../domain/classroom/classroom.types";
import {
  fetchProfesorMenuDashboard,
  filterProfesorQuickLinks,
  type ProfesorMenuDashboard
} from "../services/profesor";
import { listarCuestionarios } from "../domain/quiz/quizPreguntasApi";

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
  const { t } = useI18n();
  const [modules, setModules] = useState<Module[]>([]);
  const [modulesStatus, setModulesStatus] = useState<"loading" | "ready" | "error">("loading");
  const [_modulesError, setModulesError] = useState<string | null>(null);
  const [cuestionariosCount, setCuestionariosCount] = useState(0);
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
    message: t("menuProfesor.cargandoElMenuDelProfesor")
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
          subject: resolveMateria(module) === "Sin materia" ? null : resolveMateria(module),
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
          error instanceof Error ? error.message : t("menuProfesor.noSePudieronCargarLos")
        );
      });
    return () => {
      active = false;
    };
  }, [user?.id]);

  useEffect(() => {
    let active = true;
    listarCuestionarios()
      .then((items) => {
        if (!active) return;
        setCuestionariosCount(items.length);
      })
      .catch(() => {});
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
        message: t("menuProfesor.noPudimosCargarElMenu")
      });
      return;
    }

    if (dashboardLoading || modulesStatus === "loading") {
      setMenuState({
        status: "loading",
        message: t("menuProfesor.cargandoElMenuDelProfesor")
      });
      return;
    }

    setMenuState({ status: "ready", message: "" });
  }, [dashboardError, dashboardLoading, modulesStatus]);

  const _subjectOptions = useMemo(() => {
    const subjects = modules
      .map(resolveMateria)
      .filter((subject): subject is string => Boolean(subject));
    return Array.from(new Set(subjects)).sort((a, b) => a.localeCompare(b));
  }, [modules]);
  void _subjectOptions;

  const graphModules = useMemo(() => {
    if (selectedSubject === "todas") {
      return modules;
    }
    return modules.filter(
      (module) => resolveMateria(module) === selectedSubject
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
        description: resolveMateria(module) === "Sin materia" ? undefined : resolveMateria(module),
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

  const KPI_LABEL_KEY: Record<string, string> = {
    aulas: 'menuProfesor.aulasActivas',
    modulos: 'menuProfesor.modulosCreados',
    asistencia: 'menuProfesor.estudiantesActivos2',
  };
  const KPI_HELPER_KEY: Record<string, string> = {
    aulas: 'menuProfesor.clasesEnLasQueEstas',
    modulos: 'menuProfesor.contenidoDisponibleParaTus',
    asistencia: 'menuProfesor.alumnosUnicosEnTus',
  };
  const QUICK_LINK_LABEL_KEY: Record<string, string> = {
    aulas: 'nav.aulas',
    calificaciones: 'profesorCalificaciones.calificaciones',
    materiales: 'nav.materiales',
    evaluaciones: 'nav.evaluaciones',
    modulos: 'nav.modulos',
    asistencia: 'profesorAsistencia.asistencia',
    reportes: 'nav.reportes',
    mensajes: 'nav.mensajes',
    configuracion: 'hijosProgreso.configuracion',
    encuestas: 'dropdown.encuestas',
    estadisticas: 'profesorEstadisticas.estadisticas',
    crear_modulo: 'menuProfesor.crearModulo',
    calendario: 'nav.calendario',
  };

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

            {/* FIX-TEST4-X-04 — Modo Aula como tarjeta PROMINENTE
                arriba de los KPI. Antes estaba anidada dentro de
                "Mis aulas" (línea ~523 del código viejo) y era fácil
                de pasar por alto. Ahora tiene borde grueso,
                indicador de estado (verde/rojo) y un selector de
                aula inline. El countdown del timer se mantiene
                abajo, en la fila compacta. */}
            <div
              data-testid="panel-modo-aula-prominente"
              className={`rounded-xl border-2 p-4 flex flex-col sm:flex-row sm:items-center gap-4 ${
                modoAulaActivo
                  ? 'border-[var(--c-success)] bg-[var(--c-success-soft)]'
                  : 'border-[var(--c-warning)] bg-[var(--c-warning-soft)]'
              }`}
            >
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <div
                  className={`w-3 h-3 rounded-full flex-shrink-0 ${
                    modoAulaActivo ? 'bg-[var(--c-success)] animate-pulse' : 'bg-[var(--c-warning)]'
                  }`}
                />
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-widest font-semibold text-[var(--c-muted)] mb-0.5">
                    {t('menuProfesor.modoAula')}
                  </p>
                  <p className="text-sm font-medium text-[var(--c-text)] truncate">
                    {modoAulaActivo
                      ? t('menuProfesor.losAlumnosTienenAccesoCompleto')
                      : t('menuProfesor.restringidoActivaElModoAula')}
                  </p>
                  {modoAulaActivo && (
                    <p className="text-xs text-[var(--c-success)] mt-0.5">
                      {t('menuProfesor.tiendaYEconomiaDeshabilitadasPara')}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                {!modoAulaActivo && (
                  aulas.some(a => a.status === 'ACTIVE' || a.status === 'activa') ? (
                    <select
                      value={modoAulaAulaId}
                      onChange={(e) => setModoAulaAulaId(e.target.value)}
                      className="rounded-lg text-xs px-2 py-1.5 bg-[var(--c-surface)] border border-[var(--c-warning)] text-[var(--c-text)] focus:outline-none"
                      aria-label={t('menuProfesor.aulaParaModoAula')}
                    >
                      {aulas.filter(a =>
                        (a.status === 'ACTIVE' || a.status === 'activa')
                      ).map(a => (
                        <option key={getAulaId(a)} value={getAulaId(a)}>
                          {a.name}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <span className="text-xs text-[var(--c-muted)] px-2 py-1.5">{t('menuProfesor.sinAulasActivas')}</span>
                  )
                )}
                <button
                  disabled={modoAulaLoading || !modoAulaAulaId}
                  onClick={handleToggleModoAula}
                  className={`rounded-lg px-4 py-1.5 text-xs font-semibold transition-opacity disabled:opacity-40 ${
                    modoAulaActivo
                      ? 'bg-[var(--c-success)] text-[var(--c-accent-fg)] hover:opacity-90'
                      : 'bg-[var(--c-warning)] text-[var(--c-accent-fg)] hover:opacity-90'
                  }`}
                >
                  {modoAulaLoading
                    ? '...'
                    : modoAulaActivo
                      ? t('menuProfesor.desactivar')
                      : t('menuProfesor.activarModoAula')}
                </button>
              </div>
            </div>

            {/* Stats KPI — 4 columnas */}
            <div className="grid gap-3 grid-cols-2 lg:grid-cols-4">
              {dashboard?.kpiCards.map((card) => (
                <Link
                  key={card.id}
                  to={card.href}
                  className="group bg-[var(--c-surface)] border border-[var(--c-border)] rounded-xl p-4 hover:border-[var(--c-primary)] transition-colors"
                >
                  <p className="text-[10px] uppercase tracking-widest text-[var(--c-muted)] mb-2">
                    {KPI_LABEL_KEY[card.id] ? t(KPI_LABEL_KEY[card.id]) : card.label}
                  </p>
                  <p className="text-3xl font-semibold text-[var(--c-text)]">{card.value}</p>
                  <p className="text-xs text-[var(--c-muted)] mt-1">{KPI_HELPER_KEY[card.id] ? t(KPI_HELPER_KEY[card.id]) : card.helper}</p>
                </Link>
              ))}
              {!dashboard?.kpiCards.length && [1,2,3,4].map(i => (
                <div key={i} className="h-24 rounded-xl bg-[var(--c-border)] animate-pulse" />
              ))}
            </div>

            {/* Layout 2 columnas: Mis aulas (izq) + Evaluaciones + Planificación (der) */}
            <div className="grid gap-4 lg:grid-cols-2">

              {/* ── Mis aulas ──────────────────────────────────── */}
              <div className="min-w-0 bg-[var(--c-surface)] border border-[var(--c-border)] rounded-xl overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--c-border)]">
                  <h3 className="text-sm font-semibold text-[var(--c-text)]">{t('menuProfesor.misAulas')}</h3>
                  <Link to="/profesor/aulas" className="text-xs text-[var(--c-primary)] hover:underline">
                    {t('menuProfesor.verTodas')}
                  </Link>
                </div>

                {/* FIX-TEST4-X-04 — la tarjeta de "Modo Aula" se
                    movió ARRIBA del panel (panel-modo-aula-prominente).
                    Acá solo queda la lista de aulas. */}

                {/* Lista de aulas */}
                <div className="px-2 pb-3">
                  {aulas.length === 0 && (
                    <p className="text-xs text-[var(--c-muted)] px-2 py-4 text-center">
                      {t('menuProfesor.sinAulasAsignadas')}
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
                          {activa ? t('profesorAulaConfiguracion.activa') : t('profesorAulaConfiguracion.archivada')}
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
                        {t('menuProfesor.modulosActivos')}
                      </p>
                      <Link to="/modulos" className="text-[10px] text-[var(--c-primary)] hover:underline">
                        {t('menuProfesor.gestionar')}
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
                            {m.category}{m.durationMinutes != null ? ` · ${m.durationMinutes} min` : ''}
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
                    <p className="text-xs text-[var(--c-muted)] mb-2">{t('menuProfesor.todaviaNoCreasteModulos')}</p>
                    <Link
                      to="/modulos/crear"
                      className="inline-flex items-center gap-1 rounded-lg bg-[var(--c-primary)] px-3 py-1.5 text-xs font-semibold text-white hover:opacity-90 transition-opacity"
                    >
                      {t('menuProfesor.crearPrimerModulo')}
                    </Link>
                  </div>
                )}
              </div>

              {/* ── Evaluaciones + Planificación (apiladas) ──────── */}
              <div className="min-w-0 space-y-4">

                {/* Evaluaciones recientes — FIX-PANEL-EVALUACIONES */}
                <div className="bg-[var(--c-surface)] border border-[var(--c-border)] rounded-xl overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--c-border)]">
                    <h3 className="text-sm font-semibold text-[var(--c-text)]">{t('menuProfesor.evaluacionesRecientes')}</h3>
                    <Link to="/profesor/calificaciones" className="text-xs text-[var(--c-primary)] hover:underline">
                      {t('menuProfesor.verTodas')}
                    </Link>
                  </div>
                  <div className="px-2 py-2">
                    {dashboard?.recentEvaluations?.map((evaluation) => (
                      <Link
                        key={evaluation.id}
                        to={`/profesor/intentos/${evaluation.id}`}
                        data-testid="panel-evaluacion-reciente"
                        className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-[var(--c-bg)] transition-colors"
                      >
                        <span className="text-sm text-[var(--c-text)] truncate">{evaluation.title}</span>
                        <span
                          className="text-[10px] text-[var(--c-muted)] flex-shrink-0 ml-2"
                          data-testid="panel-evaluacion-categoria"
                        >
                          {evaluation.category}
                        </span>
                      </Link>
                    ))}
                    {dashboard?.recentEvaluations?.length === 0 && (
                      <div className="px-4 py-6 text-center space-y-3">
                        <p className="text-2xl">📋</p>
                        <p className="text-xs text-[var(--c-muted)]">
                          {t('menuProfesor.todaviaNoHayEvaluacionesRecientes')}
                        </p>
                        <Link
                          to="/modulos/crear"
                          className="inline-flex items-center gap-1 rounded-lg bg-[var(--c-primary)] px-3 py-1.5 text-xs font-semibold text-white hover:opacity-90"
                        >
                          {t('menuProfesor.crearModulo')}
                        </Link>
                      </div>
                    )}
                    {dashboardLoading && (
                      <div className="space-y-2 p-3">
                        {[1,2,3].map(i => <div key={i} className="h-6 rounded bg-[var(--c-border)] animate-pulse" />)}
                      </div>
                    )}
                  </div>
                  <div className="px-4 pb-3">
                    <Link
                      to="/profesor/calificaciones"
                      className="block w-full text-center rounded-xl border border-[var(--c-border)] py-2 text-xs font-medium text-[var(--c-primary)] hover:bg-[var(--c-bg)] transition-colors"
                    >
                      {t('menuProfesor.verCalificaciones')}
                    </Link>
                  </div>
                </div>

                {/* Planificación semanal */}
                <div className="bg-[var(--c-surface)] border border-[var(--c-border)] rounded-xl overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--c-border)]">
                    <h3 className="text-sm font-semibold text-[var(--c-text)]">{t('menuProfesor.planificacionSemanal')}</h3>
                    <Link to="/profesor/calendario" className="text-xs text-[var(--c-primary)] hover:underline">
                      {t('menuProfesor.verCalendario')}
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
                          {t('menuProfesor.noHayActividadesProgramadasEsta')}
                        </p>
                        <Link
                          to="/profesor/calendario"
                          className="inline-flex items-center gap-1 rounded-lg border border-[var(--c-border)] px-3 py-1.5 text-xs font-medium text-[var(--c-primary)] hover:bg-[var(--c-bg)] transition-colors"
                        >
                          {t('menuProfesor.irAlCalendario')}
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
                    <p className="text-xs text-[var(--c-muted)]">{t('menuProfesor.proximaClase')}</p>
                    <p className="text-xs font-semibold text-[var(--c-text)]">
                      {dashboard?.progressNextClass ?? 0}% {t('menuProfesor.preparado')}
                    </p>
                  </div>
                  <p className="text-sm font-semibold text-[var(--c-text)] truncate mb-1.5">
                    {dashboard?.nextClass.detail ?? t('menuProfesor.sinClasesAsignadas')}
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
                <p className="text-xs text-[var(--c-muted)]">{t('menuProfesor.duracionModoAula')}</p>
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
                  {t('menuProfesor.estudiantesActivos')} <span className="font-semibold text-[var(--c-text)]">{dashboard?.activeStudents ?? 0}</span>
                </div>
              </div>
            </div>

          </div>

          {/* ── Columna derecha — Accesos rápidos ───────────────── */}
          <div className="w-56 flex-shrink-0 hidden xl:flex flex-col gap-4">

            {/* Resumen */}
            <div className="bg-[var(--c-surface)] border border-[var(--c-border)] rounded-xl p-4 space-y-3">
              <p className="text-[10px] uppercase tracking-widest font-semibold text-[var(--c-muted)]">
                {t('menuProfesor.resumen')}
              </p>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-xs text-[var(--c-muted)]">{t('menuProfesor.estudiantesActivos2')}</p>
                  <p className="text-sm font-semibold text-[var(--c-text)]">
                    {dashboard?.activeStudents ?? 0}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-[var(--c-muted)]">{t('menuProfesor.aulasActivas')}</p>
                  <p className="text-sm font-semibold text-[var(--c-text)]">
                    {aulas.filter(a => a.status === 'ACTIVE' || a.status === 'activa').length}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-[var(--c-muted)]">{t('menuProfesor.modulosCreados')}</p>
                  <p className="text-sm font-semibold text-[var(--c-text)]">{modules.length}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-[var(--c-muted)]">{t('nav.cuestionarios')}</p>
                  <p className="text-sm font-semibold text-[var(--c-text)]">{cuestionariosCount}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-[var(--c-muted)]">{t('menuProfesor.cuestionariosHechos')}</p>
                  <p className="text-sm font-semibold text-[var(--c-text)]">
                    {dashboard?.quizzesCompletedByStudents ?? 0}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-[var(--c-muted)]">{t('nav.evaluaciones')}</p>
                  <Link
                    to="/profesor/evaluaciones"
                    className="text-sm font-semibold text-[var(--c-primary)] hover:underline"
                  >
                    {t('menuProfesor.ver')}
                  </Link>
                </div>
              </div>
            </div>

            {/* Accesos rápidos académico */}
            {quickLinks && quickLinks.academico.length > 0 && (
              <div className="bg-[var(--c-surface)] border border-[var(--c-border)] rounded-xl overflow-hidden">
                <p className="px-4 py-2.5 text-[10px] uppercase tracking-widest font-semibold text-[var(--c-muted)] border-b border-[var(--c-border)]">
                  {t('menuProfesor.accesosRapidos')}
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
                    <span className="truncate">{QUICK_LINK_LABEL_KEY[link.id] ? t(QUICK_LINK_LABEL_KEY[link.id]) : link.label}</span>
                  </Link>
                ))}
              </div>
            )}

            {/* Gestión */}
            {quickLinks && quickLinks.gestion.length > 0 && (
              <div className="bg-[var(--c-surface)] border border-[var(--c-border)] rounded-xl overflow-hidden">
                <p className="px-4 py-2.5 text-[10px] uppercase tracking-widest font-semibold text-[var(--c-muted)] border-b border-[var(--c-border)]">
                  {t('sidebar.gestion')}
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
                    <span className="truncate">{QUICK_LINK_LABEL_KEY[link.id] ? t(QUICK_LINK_LABEL_KEY[link.id]) : link.label}</span>
                  </Link>
                ))}
              </div>
            )}

            {/* Crear módulo CTA */}
            <Link
              to="/modulos/crear"
              className="block w-full text-center rounded-xl bg-[var(--c-primary)] px-4 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
            >
              {t('menuProfesor.crearModulo')}
            </Link>

          </div>

        </div>
      )}
    </div>
  );
}
