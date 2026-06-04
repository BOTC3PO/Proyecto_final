/**
 * Cliente para las sugerencias de variables asistidas por IA (DIFF-05).
 *
 * Pega contra `POST /api/vblang/suggest-variables`. La API hace la llamada a
 * Claude del lado servidor (la API key vive ahí, nunca en el browser) y
 * devuelve variables VBLang estructuradas. `ApiError` propaga el status para
 * distinguir "no configurado" (503) de otros errores.
 */
import { apiPost } from "../../lib/api";

export interface VariableSugerida {
  nombre: string;
  expr: string;
  descripcion?: string;
}

interface SuggestResponse {
  variables: VariableSugerida[];
}

/** Pide a la IA variables para un enunciado. Lanza `ApiError` en fallo. */
export async function suggestVariablesIA(
  enunciado: string,
  tipo?: string,
): Promise<VariableSugerida[]> {
  const res = await apiPost<SuggestResponse>("/api/vblang/suggest-variables", {
    enunciado,
    tipo,
  });
  return res.variables ?? [];
}
