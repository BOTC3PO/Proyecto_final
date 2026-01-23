import { apiFetch } from "./api";

export type ProfesorAsistenciaResumen = {
  id: string;
  curso: string;
  presente: number;
  total: number;
};

export type ProfesorCursoResumen = {
  id: string;
  nombre: string;
  alumnos: number;
  estado: string;
};

export type ProfesorCalificacionResumen = {
  id: string;
  grupo: string;
  pendientes: number;
  ultimaEntrega: string;
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
  kpiCards: ProfesorKpiCard[];
  weeklyPlan: ProfesorWeeklyPlanItem[];
  quickLinks: {
    academico: ProfesorQuickLink[];
    gestion: ProfesorQuickLink[];
  };
};

export async function fetchProfesorAsistencia(): Promise<ProfesorAsistenciaResumen[]> {
  return apiFetch<ProfesorAsistenciaResumen[]>("/api/profesor/asistencia");
}

export async function fetchProfesorCursos(): Promise<ProfesorCursoResumen[]> {
  return apiFetch<ProfesorCursoResumen[]>("/api/profesor/cursos");
}

export async function fetchProfesorCalificaciones(): Promise<ProfesorCalificacionResumen[]> {
  return apiFetch<ProfesorCalificacionResumen[]>("/api/profesor/calificaciones");
}

export async function fetchProfesorMenuDashboard(): Promise<ProfesorMenuDashboard> {
  return apiFetch<ProfesorMenuDashboard>("/api/profesor/menu");
}
