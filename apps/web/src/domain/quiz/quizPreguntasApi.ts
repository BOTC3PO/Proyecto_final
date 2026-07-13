/**
 * Etapa 2 (Tiza — preguntas nativas) — cliente HTTP del
 * `CuestionarioPreguntas` de un quiz (`GET`/`PUT /api/quizzes/:quizId/preguntas`).
 *
 * Mismo patrón que `domain/vblang/plantillaApi.ts`: funciones finas sobre
 * `apiGet`/`apiPut`, sin lógica de negocio (esa vive en `preguntas.ts`).
 */
import { apiDelete, apiGet, apiPatch, apiPost, apiPut } from "../../lib/api";
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
  /** PLAN-Z fase 3/4 — "un solo set de metadatos" a nivel cuestionario.
   *  `materia` persiste en `settings.materiaDeclarada` (server-side), NO
   *  en `settings.materia` — esa clave la administra en exclusiva
   *  `mergeMateriaIntoSettings` (la materia del MÓDULO manda al adoptar,
   *  decisión de Javier en PLAN-Z §3.6). Se copian silenciosamente a cada
   *  Plantilla-pregunta al guardar (decisión §3.1). */
  materia: string;
  nivel: string;
  tags: string[];
  descripcion: string;
  /** PLAN-Y fase 3 — instrucciones para el alumno (se muestran al iniciar
   *  el intento, `QuizAttempt.tsx`). Persisten en `settings.instructions`.
   *  Tiza es su único editor. */
  instructions: string;
  /** Claves crudas de `settings` de la config de evaluación (sólo las
   *  seteadas). Resolver defaults con `parseEvaluacionConfig(config, type)`. */
  config: EvaluacionConfigInput;
}

/** WO-tiza-config — patch parcial de `PATCH /api/quizzes/:quizId/meta`. */
export type QuizMetaPatch = Partial<
  Pick<
    QuizMeta,
    "title" | "type" | "visibility" | "materia" | "nivel" | "tags" | "descripcion" | "instructions"
  >
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

// ─── PLAN-CORRECCIONES C2 — cuestionarios "sueltos" ─────────────────────

/**
 * Crea un quiz SIN módulo (standalone). Se edita/reabre con las mismas
 * rutas `getQuizMeta`/`getQuizPreguntas`/`saveQuizPreguntas` de arriba —
 * ya toleran módulo ausente. Usado por `/plantillas/nueva` cuando el
 * docente arma 2+ preguntas sin haber pasado por un módulo.
 */
export async function crearQuizSuelto(title?: string): Promise<{ id: string }> {
  return apiPost<{ id: string }>("/api/quizzes", title ? { title } : {});
}

export interface QuizSuelto {
  id: string;
  title: string;
  updatedAt: string;
}

/** Cuestionarios sueltos (sin módulo) del docente logueado — para el
 *  picker de "Usar cuestionario existente" en `ModuloEditor`. */
export async function listarQuizzesSueltos(): Promise<QuizSuelto[]> {
  const data = await apiGet<{ items: QuizSuelto[] }>("/api/quizzes");
  return data.items ?? [];
}

// ─── PLAN-CUESTIONARIOS — página /cuestionarios ──────────────────────────

/** Ítem enriquecido de `GET /api/quizzes?scope=todos`: sueltos + los
 *  quizzes de módulos propios, con tipo/materia/#preguntas. */
export interface CuestionarioListItem {
  id: string;
  title: string;
  updatedAt: string;
  type: QuizMetaTipo;
  materia: string;
  cantidadPreguntas: number;
  moduleId: string | null;
  moduleTitle: string | null;
}

export async function listarCuestionarios(): Promise<CuestionarioListItem[]> {
  const data = await apiGet<{ items: CuestionarioListItem[] }>("/api/quizzes?scope=todos");
  return data.items ?? [];
}

/** Crea un cuestionario vacío YA adosado a un módulo propio ("Crear
 *  cuestionario" en ModuloEditor). El server valida permiso de edición
 *  sobre el módulo y hereda su materia. */
export async function crearQuizEnModulo(
  moduleId: string,
  title?: string,
): Promise<{ id: string }> {
  return apiPost<{ id: string }>("/api/quizzes", title ? { title, moduleId } : { moduleId });
}

/**
 * "Usa" (clona) un quiz suelto o de otro módulo dentro de `moduleId`. El
 * quiz origen queda intacto y se puede reusar en más módulos después —
 * las plantillas referenciadas no se duplican, siguen siendo las mismas
 * filas de `PlantillaEjercicio`.
 */
export async function usarQuizEnModulo(
  quizId: string,
  moduleId: string,
): Promise<{ id: string }> {
  return apiPost<{ id: string }>(
    `/api/quizzes/${encodeURIComponent(quizId)}/usar-en-modulo`,
    { moduleId },
  );
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
