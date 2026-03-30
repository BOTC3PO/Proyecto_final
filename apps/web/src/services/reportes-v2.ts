import { apiGet } from "../lib/api";

export type AlumnoBoletin = {
  alumnoId: string;
  nombre: string;
  username: string;
  promedioGeneral: number | null;
  materias: Array<{
    materia: string;
    promedio: number;
    evaluaciones: number;
  }>;
  totalEvaluaciones: number;
};

export type BoletinResponse = {
  aulaId: string;
  aulaNombre: string;
  generadoEn: string;
  alumnos: AlumnoBoletin[];
};

export type ActividadReporte = {
  id: string;
  tipo: string;
  titulo: string;
  descripcion?: string;
  fecha: string;
  fechaFormateada: string;
};

export type AsistenciaResponse = {
  aulaId: string;
  generadoEn: string;
  resumen: {
    totalClases: number;
    totalEvaluaciones: number;
    totalEventos: number;
  };
  actividades: ActividadReporte[];
};

export type ModuloProgreso = {
  moduloId: string;
  titulo: string;
  materia: string;
  completados: number;
  enProgreso: number;
  sinIniciar: number;
  total: number;
  porcentaje: number;
};

export type ProgresoResponse = {
  aulaId: string;
  generadoEn: string;
  modulos: ModuloProgreso[];
};

export type EscuelaIndicadores = {
  totalAulas: number;
  totalUsuarios: number;
  totalActividades: number;
  progresoTotal: number;
  progresoCompletado: number;
  porcentajeCompletado: number;
};

export type EscuelaResponse = {
  generadoEn: string;
  escuela: string;
  indicadores: EscuelaIndicadores;
};

export async function fetchBoletin(
  aulaId: string
): Promise<BoletinResponse> {
  return apiGet(`/api/v2/reportes/boletin/${aulaId}`);
}

export async function fetchAsistencia(
  aulaId: string
): Promise<AsistenciaResponse> {
  return apiGet(`/api/v2/reportes/asistencia/${aulaId}`);
}

export async function fetchProgresoReporte(
  aulaId: string
): Promise<ProgresoResponse> {
  return apiGet(`/api/v2/reportes/progreso/${aulaId}`);
}

export async function fetchEscuelaReporte(): Promise<EscuelaResponse> {
  return apiGet("/api/v2/reportes/escuela");
}
