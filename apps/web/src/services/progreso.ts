import { apiFetch } from "./api";

export type AvanceModulo = {
  id: string;
  modulo: string;
  progreso: string;
};

export type ProgresoSugerencia = {
  titulo: string;
  mensaje: string;
};

export type ProgresoEstudianteResponse = {
  avances: AvanceModulo[];
  sugerencia: ProgresoSugerencia;
};

export type ChildModule = {
  id: string;
  titulo: string;
  area: "Matemática" | "Lengua" | "Ciencias" | "Historia" | "Geografía" | "Arte" | "Otro";
  progreso: number;
  estado: "En curso" | "Completado" | "Bloqueado";
  ultimaActividad: string;
};

export type ChildProgress = {
  id: string;
  nombre: string;
  usuario: string;
  grado: string;
  avatar?: string;
  progresoGeneral: number;
  modulos: ChildModule[];
};

export async function fetchProgresoEstudiante(): Promise<ProgresoEstudianteResponse> {
  return apiFetch<ProgresoEstudianteResponse>("/api/progreso/estudiante");
}

export async function fetchProgresoHijos(): Promise<ChildProgress[]> {
  return apiFetch<ChildProgress[]>("/api/progreso/hijos");
}
