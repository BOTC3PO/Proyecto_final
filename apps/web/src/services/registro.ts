import { apiFetch } from "./api";

export type RegistroOpciones = {
  grados: string[];
  meses: string[];
  tiposProfesor: string[];
};

export async function fetchRegistroOpciones(): Promise<RegistroOpciones> {
  return apiFetch<RegistroOpciones>("/api/registro/opciones");
}
