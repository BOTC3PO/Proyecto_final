import { apiFetch } from "./api";

export type ModuloCreatorOptions = {
  materias: string[];
  categorias: string[];
  nivelesDificultad: string[];
  sistemasEvaluacion: string[];
  quizBlocks: Array<{
    id: string;
    title: string;
    type: "practica" | "evaluacion";
    visibility: "publico" | "escuela";
  }>;
};

export async function fetchModuleCreatorOptions(): Promise<ModuloCreatorOptions> {
  return apiFetch<ModuloCreatorOptions>("/api/modulos/opciones");
}

export type ModuleConfigListResponse = {
  items: string[];
  updatedAt: string;
};

export async function fetchMateriasConfig(): Promise<ModuleConfigListResponse> {
  return apiFetch<ModuleConfigListResponse>("/api/config/materias");
}

export async function fetchCategoriasConfig(): Promise<ModuleConfigListResponse> {
  return apiFetch<ModuleConfigListResponse>("/api/config/categorias");
}
