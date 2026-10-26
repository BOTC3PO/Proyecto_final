import { apiGet } from "../lib/api";

export type ProfesorKpiCard = {
  id: string;
  label: string;
  value: number;
  helper: string;
  href: string;
  icon: string;
};

export type ProfesorWeeklyPlanItem = {
  id: string;
  title: string;
  detail: string;
  status: string;
};

export type ProfesorQuickLink = {
  id: string;
  label: string;
  href: string;
};

export type ProfesorRecentEvaluation = {
  id: string;
  title: string;
  category: string;
  moduleId: string;
  quizId: string;
  status: string;
  startedAt: string;
};

export type ProfesorMenuDashboard = {
  profile: {
    name: string;
    role: string;
    initials: string;
  };
  nextClass: {
    label: string;
    detail: string;
  };
  activeStudents: number;
  progressNextClass: number;
  /** Simetría con "Módulos creados" en la card Resumen: cuántos intentos
   *  de cuestionario ya rindieron los alumnos del docente (enviados o
   *  corregidos). */
  quizzesCompletedByStudents: number;
  recentEvaluations: ProfesorRecentEvaluation[];
  kpiCards: ProfesorKpiCard[];
  weeklyPlan: ProfesorWeeklyPlanItem[];
  quickLinks: {
    academico: ProfesorQuickLink[];
    gestion: ProfesorQuickLink[];
  };
};

// FIX-TEST4-PROF-01 — eliminados los quick-links `cursos` y
// `crear_curso` (redirigen a `/profesor/aulas`). Las páginas
// ProfesorCursos/ProfesorCursoNuevo fueron borradas.
const PROFESOR_QUICK_LINK_ROUTES = new Set([
  "/profesor",
  "/profesor/aulas",
  "/profesor/calendario",
  "/profesor/calendario/detalle",
  "/profesor/calificaciones",
  "/profesor/asistencia",
  "/profesor/materiales",
  "/profesor/evaluaciones",
  "/profesor/encuestas",
  "/profesor/estadisticas",
  "/profesor/reportes",
  "/profesor/mensajes",
  "/profesor/configuracion",
  "/profesor/crear-modulo",
  "/modulos",
  "/modulos/crear"
]);

const PROFESOR_QUICK_LINK_BY_ID: Record<string, string> = {
  aulas: "/profesor/aulas",
  calendario: "/profesor/calendario",
  calificaciones: "/profesor/calificaciones",
  asistencia: "/profesor/asistencia",
  materiales: "/profesor/materiales",
  evaluaciones: "/profesor/evaluaciones",
  encuestas: "/profesor/encuestas",
  estadisticas: "/profesor/estadisticas",
  reportes: "/profesor/reportes",
  mensajes: "/profesor/mensajes",
  configuracion: "/profesor/configuracion",
  crear_modulo: "/modulos/crear",
  modulos: "/modulos"
};

const normalizeQuickLinkPath = (href: string) => {
  const trimmed = href.trim();
  if (!trimmed) return "";
  const [path] = trimmed.split(/[?#]/);
  return path.startsWith("/") ? path : `/${path}`;
};

export const filterProfesorQuickLinks = (quickLinks: ProfesorMenuDashboard["quickLinks"]) => {
  const sanitize = (links: ProfesorQuickLink[]) =>
    links
      .map((link) => {
        const resolvedHref = PROFESOR_QUICK_LINK_BY_ID[link.id] ?? link.href;
        const normalizedPath = normalizeQuickLinkPath(resolvedHref);
        if (!PROFESOR_QUICK_LINK_ROUTES.has(normalizedPath)) return null;
        return { ...link, href: resolvedHref };
      })
      .filter((link): link is ProfesorQuickLink => Boolean(link));

  return {
    academico: sanitize(quickLinks.academico),
    gestion: sanitize(quickLinks.gestion)
  };
};

// FIX-TEST4-PROF-01 — `fetchProfesorCursos` eliminado. Las aulas
// se listan con `fetchClassrooms()` (servicio `aulas.ts`).

export async function fetchProfesorMenuDashboard(): Promise<ProfesorMenuDashboard> {
  const data = await apiGet<ProfesorMenuDashboard>("/api/profesor/menu");
  return {
    ...data,
    // FIX-PANEL-EVALUACIONES — compat con deployments donde el back
    // todavía no incluye `recentEvaluations` (sprint anterior al fix).
    // El panel lo trata como lista vacía en lugar de fallar.
    recentEvaluations: data.recentEvaluations ?? [],
    quizzesCompletedByStudents: data.quizzesCompletedByStudents ?? 0,
    quickLinks: filterProfesorQuickLinks(data.quickLinks)
  };
}
