/**
 * Etapa 2 (Tiza — preguntas nativas) — cliente HTTP del
 * `CuestionarioPreguntas` de un quiz (`GET`/`PUT /api/quizzes/:quizId/preguntas`).
 *
 * Mismo patrón que `domain/vblang/plantillaApi.ts`: funciones finas sobre
 * `apiGet`/`apiPut`, sin lógica de negocio (esa vive en `preguntas.ts`).
 */
import { apiDelete, apiGet, apiPatch, apiPut } from "../../lib/api";
import type { CuestionarioPreguntas, ResultadoValidacionPreguntas } from "./preguntas";
import type { EvaluacionConfigInput } from "./intentos";

export async function getQuizPreguntas(quizId: string): Promise<CuestionarioPreguntas> {
  return apiGet<CuestionarioPreguntas>(`/api/quizzes/${encodeURIComponent(quizId)}/preguntas`);
}

/** Tipo del cuestionario. `evaluacion` es el alias legacy de `formal`
 *  (canónico) — el server acepta ambos; la UI de Tiza escribe `formal`. */
export type QuizMetaTipo = "practica" | "evaluacion" | "competencia" | "formal";
export type QuizMetaVisibility = "publico" | "escuela";

export interface QuizMeta {
  id: string;
  title: string;
  type: QuizMetaTipo;
  visibility: QuizMetaVisibility;
  /** Claves crudas de `settings` de la config de evaluación (sólo las
   *  seteadas). Resolver defaults con `parseEvaluacionConfig(config, type)`. */
  config: EvaluacionConfigInput;
}

/** WO-tiza-config — patch parcial de `PATCH /api/quizzes/:quizId/meta`. */
export type QuizMetaPatch = Partial<
  Pick<QuizMeta, "title" | "type" | "visibility">
> &
  EvaluacionConfigInput;

/** WO — título/tipo/visibilidad/config del cuestionario (viven en
 *  `Quiz.title` + `QuizVersion.settings`, no en la plantilla), usados por la
 *  cabecera y el panel DETALLES de Tiza. */
export async function getQuizMeta(quizId: string): Promise<QuizMeta> {
  return apiGet<QuizMeta>(`/api/quizzes/${encodeURIComponent(quizId)}/meta`);
}

/** WO-tiza-config — persiste sólo los campos presentes en `patch`
 *  (read-modify-write server-side: no toca `preguntas` ni otras claves). */
export async function patchQuizMeta(quizId: string, patch: QuizMetaPatch): Promise<QuizMeta> {
  return apiPatch<QuizMeta>(`/api/quizzes/${encodeURIComponent(quizId)}/meta`, patch);
}

/** WO-tiza-config — soft-delete del cuestionario (isActive=false, mismo
 *  mecanismo que quitarlo de `quizzes[]` al guardar el módulo). */
export async function deleteQuiz(quizId: string): Promise<void> {
  await apiDelete<{ ok: boolean }>(`/api/quizzes/${encodeURIComponent(quizId)}`);
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
