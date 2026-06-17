import { apiGet } from "../lib/api";

export type ProfesorCursoResumen = {
  id: string;
  nombre: string;
  alumnos: number;
  estado: string;
};

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
  recentEvaluations: ProfesorRecentEvaluation[];
  kpiCards: ProfesorKpiCard[];
  weeklyPlan: ProfesorWeeklyPlanItem[];
  quickLinks: {
    academico: ProfesorQuickLink[];
    gestion: ProfesorQuickLink[];
  };
};

const PROFESOR_QUICK_LINK_ROUTES = new Set([
  "/profesor",
  "/profesor/aulas",
  "/profesor/calendario",
  "/profesor/calendario/detalle",
  "/profesor/cursos",
  "/profesor/cursos/nuevo",
  "/profesor/calificaciones",
  "/profesor/asistencia",
  "/profesor/materiales",
  "/profesor/evaluaciones",
  "/profesor/encuestas",
  "/profesor/estadisticas",
  "/profesor/reportes",
  "/profesor/mensajes",
  "/profesor/configuracion",
  "/profesor/editor-cuestionarios",
  "/profesor/crear-modulo",
  "/modulos",
  "/modulos/crear"
]);

const PROFESOR_QUICK_LINK_BY_ID: Record<string, string> = {
  aulas: "/profesor/aulas",
  calendario: "/profesor/calendario",
  cursos: "/profesor/cursos",
  crear_curso: "/profesor/cursos/nuevo",
  calificaciones: "/profesor/calificaciones",
  asistencia: "/profesor/asistencia",
  materiales: "/profesor/materiales",
  evaluaciones: "/profesor/evaluaciones",
  encuestas: "/profesor/encuestas",
  estadisticas: "/profesor/estadisticas",
  reportes: "/profesor/reportes",
  mensajes: "/profesor/mensajes",
  configuracion: "/profesor/configuracion",
  editor_cuestionarios: "/profesor/editor-cuestionarios",
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

export async function fetchProfesorCursos(): Promise<ProfesorCursoResumen[]> {
  return apiGet<ProfesorCursoResumen[]>("/api/profesor/cursos");
}

export async function fetchProfesorMenuDashboard(): Promise<ProfesorMenuDashboard> {
  const data = await apiGet<ProfesorMenuDashboard>("/api/profesor/menu");
  return {
    ...data,
    // FIX-PANEL-EVALUACIONES — compat con deployments donde el back
    // todavía no incluye `recentEvaluations` (sprint anterior al fix).
    // El panel lo trata como lista vacía en lugar de fallar.
    recentEvaluations: data.recentEvaluations ?? [],
    quickLinks: filterProfesorQuickLinks(data.quickLinks)
  };
}
