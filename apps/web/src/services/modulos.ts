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
