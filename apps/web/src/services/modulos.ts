import { apiGet } from "../lib/api";

export type ModuleConfigListResponse = {
  items: string[];
  updatedAt: string;
};

export async function fetchMateriasConfig(): Promise<ModuleConfigListResponse> {
  return apiGet<ModuleConfigListResponse>("/api/config/materias");
}

export async function fetchCategoriasConfig(): Promise<ModuleConfigListResponse> {
  return apiGet<ModuleConfigListResponse>("/api/config/categorias");
}
