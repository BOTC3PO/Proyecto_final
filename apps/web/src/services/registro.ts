import { apiGet } from "../lib/api";

export type RegistroOpciones = {
  grados: string[];
  meses: string[];
  tiposProfesor: string[];
};

export async function fetchRegistroOpciones(): Promise<RegistroOpciones> {
  return apiGet<RegistroOpciones>("/api/registro/opciones");
}
