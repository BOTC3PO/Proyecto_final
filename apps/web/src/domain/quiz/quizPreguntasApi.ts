/**
 * Etapa 2 (Tiza — preguntas nativas) — cliente HTTP del
 * `CuestionarioPreguntas` de un quiz (`GET`/`PUT /api/quizzes/:quizId/preguntas`).
 *
 * Mismo patrón que `domain/vblang/plantillaApi.ts`: funciones finas sobre
 * `apiGet`/`apiPut`, sin lógica de negocio (esa vive en `preguntas.ts`).
 */
import { apiGet, apiPut } from "../../lib/api";
import type { CuestionarioPreguntas, ResultadoValidacionPreguntas } from "./preguntas";

export async function getQuizPreguntas(quizId: string): Promise<CuestionarioPreguntas> {
  return apiGet<CuestionarioPreguntas>(`/api/quizzes/${encodeURIComponent(quizId)}/preguntas`);
}

export interface SaveQuizPreguntasResponse {
  cuestionario: CuestionarioPreguntas;
  validacion: ResultadoValidacionPreguntas;
}

/**
 * Reemplaza el `CuestionarioPreguntas` completo del quiz. El backend NO
 * rechaza cuestionarios con límites insuficientes (el docente puede estar
 * armándolo incrementalmente) — la `validacion` devuelta es para que el
 * front muestre un aviso inline (Etapa 2 Tarea 4), no para bloquear.
 */
export async function saveQuizPreguntas(
  quizId: string,
  cuestionario: Pick<CuestionarioPreguntas, "cantidadGlobal" | "preguntas">,
): Promise<SaveQuizPreguntasResponse> {
  return apiPut<SaveQuizPreguntasResponse>(
    `/api/quizzes/${encodeURIComponent(quizId)}/preguntas`,
    cuestionario,
  );
}
