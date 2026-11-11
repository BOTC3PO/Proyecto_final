/**
 * Corrección de intentos de cuestionario, sin base de datos: la usan el servidor (`routes/quiz-attempts.ts`) y la app
 * sin conexión (`apps/offline`), así un intento se corrige igual en los dos lados. Las plantillas VBLang se piden con
 * `codigoDe`, que cada uno resuelve contra su base.
 */
import {
  getScoringSystem,
  sonEquivalentes as sonEquivalentesVblang,
  respuestaNumericaCorrecta as respuestaNumericaCorrectaVblang,
  type ModuleQuizQuestion,
  type ScoringConfig
} from "@vb/vblang";
import { getCompiledPlantilla, materializeVblangPool, questionHashPrefix } from "./vblang-materialize";
import { parseComposition, selectPoolIndices } from "./quiz-composition";
import {
  parseCuestionarioPreguntas,
  sortearCuestionarioPreguntas,
  validarCuestionarioPreguntas,
  type CuestionarioPreguntas
} from "./quiz-preguntas";
import type { ContextoSorteo, PoliticaSorteo } from "./quiz-sorteo";

/** Código DSL de una plantilla VBLang, o nada si no existe. */
export type CodigoDePlantilla = (plantillaId: string) => Promise<string | null | undefined>;

/** Lo que la corrección necesita de un intento. */
export type IntentoACorregir = {
  quizId: string;
  userId: string;
  seed: number | string | null;
  quizVersionId: string | null;
  attemptNo?: number | null;
};

export type ModuleQuiz = {
  id?: string;
  title?: string;
  type?: string;
  mode?: string;
  visibility?: string;
  schoolId?: string;
  schoolName?: string;
  competitionRules?: string;
  competitionRulesVisibility?: string;
  questions?: Array<{
    id: string;
    answerKey?: string | string[];
    explanation?: string;
    toleranciaRelativa?: number;
    /**
     * F2-04: tolerancia absoluta. Si está presente, el criterio combinado
     * es `|r-e| ≤ max(|e|·tol_rel, tol_abs)`. Default ausente = 0.
     */
    toleranciaAbsoluta?: number;
    /** Peso de la pregunta en el puntaje (default 1). Composición a nivel quiz. */
    points?: number;
    /**
     * WO-11 — tipo de pregunta. Si es `"expresion"`, la corrección es por
     * equivalencia simbólica (no numérica). Default ausente = numérico.
     * Ver `docs/vblang/wo-11-eje-simbolico.md` §6.
     */
    questionType?: string;
    /** WO07 — abierta: modo de corrección (`ninguna` no puntúa, `manual` la corrige el profe). */
    correccion?: "ninguna" | "manual";
    /** WO07 — abierta+manual: el ítem queda pendiente de corrección al enviar. */
    manualGrading?: boolean;
    /** Enunciado (para mostrar en la pantalla de corrección del profe). */
    prompt?: string;
    /** PLAN-E §21 Parte A — mc múltiple: answerKey array con TODAS las correctas. */
    multiple?: boolean;
    /** PLAN-E §21 Parte A — proporcional = max(0, aciertos − de más) / correctas. */
    puntajeParcial?: "todo_o_nada" | "proporcional";
  }>;
  count?: number;
  seedPolicy?: string;
  fixedSeed?: string | number;
  generatorId?: string;
  generatorVersion?: number | string;
  instructions?: string;
  displayCount?: number;
  /** Composición a nivel quiz (pool/selección/variantes/peso). No DSL. */
  composition?: {
    tomar?: "todas" | number;
    seleccion?: "fijo" | "azar" | "elige_alumno";
    variantes?: string[];
    pesoPorDefecto?: number;
  };
  /** WO-3 — política de sorteo (`fijo_por_alumno` | `por_intento`). Etapa 1
   *  (preguntas nativas) la reusa para el mismo concepto de estabilidad
   *  entre intentos, en vez de inventar un campo nuevo. */
  politicaSorteo?: string;
  /**
   * Etapa 1 (Tiza — preguntas nativas) — `CuestionarioPreguntas` crudo
   * (`settings.preguntas`). Schema INDEPENDIENTE de `composition`; convive
   * con él (un quiz usa uno u otro, nunca los dos). `undefined` = el quiz
   * sigue en el modelo viejo (`composition`/banco estático).
   */
  preguntas?: unknown;
};


export type QuizMetadataRecord = {
  id?: string;
  moduleId?: string | null;
  title?: string;
  type?: string;
  mode?: string;
  visibility?: string;
  schoolId?: string;
  schoolName?: string;
  competitionRules?: string;
  competitionRulesVisibility?: string;
  currentVersion?: number;
  createdBy?: string;
};

export type QuizVersionRecord = {
  id?: string;
  quizId?: string;
  version?: number;
  questions?: ModuleQuiz["questions"];
  generatorId?: string;
  generatorVersion?: number | string;
  params?: Record<string, unknown>;
  count?: number;
  seedPolicy?: number;
  fixedSeed?: string | number;
  settings?: string;
};

export type QuizFeedback = {
  correct: boolean;
  expected?: string | string[];
  response?: string | string[];
  explanation?: string;
  /** WO07 — ítem de corrección manual aún sin nota. */
  pending?: boolean;
};

// WO07 — estado de corrección manual de un intento. Vive en `QuizAttempt.grading`
// (JSON). Guardamos el puntaje auto-corregido por separado para poder recomputar
// la nota a medida que el profe corrige cada ítem `manual`.
export type GradingItem = {
  prompt?: string;
  points: number; // peso máximo del ítem
  response?: string | string[];
  score: number | null; // null = pendiente de corrección
  feedback?: string;
  gradedAt?: string;
  gradedBy?: string;
};
export type AttemptGrading = {
  autoScore: number; // puntaje de las preguntas auto-corregidas
  items: Record<string, GradingItem>; // ítems manuales, por questionId
  // V2-04 — true si el alumno envío un canario (`VB-CANARY-...`) como
  // respuesta. El docente ve el flag en la pantalla de corrección para
  // distinguir intentos legítimos de accesos indebidos al payload.
  canaryTriggered?: boolean;
  // Tickets de examen canjeados sobre este intento (ver routes/examen-tickets.ts): suman a la
  // nota, y `baseScore` es el puntaje sin ellos (la corrección manual vuelve a sumarlos).
  bonusExamen?: { examenId: string; tickets: number; baseScore: number };
  // Ids de las preguntas cuyas respuestas eran canarios.
  canaryQuestions?: string[];
  // I-2 — true si la corrección se hizo contra la materialización del SERVIDOR
  // (plantilla VBLang regenerada server-side o preguntas almacenadas). false si
  // el quiz no se puede materializar server-side (generadoresV2 o plantilla con
  // generador asistido/dataset): la nota depende del cliente. La UI del docente
  // lo usa para distinguir notas server-autoritativas de las que no lo son.
  serverAuthoritative?: boolean;
  // I-2 — true si el cliente mandó `generatedQuestions` con answerKeys que NO
  // coinciden con lo regenerado por el servidor (indicador de manipulación;
  // mismo canal que el canario de V2-04). No bloquea: es info para el docente.
  materializationMismatch?: boolean;
  // Ids (del cliente) de las preguntas con answerKey manipulada.
  mismatchQuestions?: string[];
  // WO-3b — true si el intento se envió después del deadline (timer + gracia).
  tiempoExcedido?: boolean;
  tiempoElapsedSec?: number;
  tiempoLimiteSec?: number;
};

export type GradableQuestion = NonNullable<ModuleQuiz["questions"]>[number];

// Una pregunta es de corrección manual si es `abierta` con `correccion: manual`
// (el flag `manualGrading` viaja como atajo desde el adapter/reproductor).
export const isManualQuestion = (q: GradableQuestion): boolean =>
  q.manualGrading === true || q.correccion === "manual";

// Una pregunta `abierta` informativa (`ninguna`) no puntúa: se excluye del maxScore.
export const isInformativeQuestion = (q: GradableQuestion): boolean =>
  q.correccion === "ninguna" && q.manualGrading !== true;

export function safeJsonParse<T>(value: string | null | undefined, fallback: T): T {
  if (!value) return fallback;
  try {
    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
}

export const buildQuizFromCollection = (
  metadata: QuizMetadataRecord,
  version: QuizVersionRecord | null
) => {
  if (!metadata?.id) return null;
  // La tabla `Quiz` no tiene columna `type` (queda `undefined` en `metadata`): el tipo vive en `settings.type` de la versión.
  // Sin esto `quiz.type` llegaba siempre vacío y ni el progreso formal ni `quizType` en la respuesta funcionaban.
  const tipoDeLaVersion = (() => {
    if (!version?.settings) return undefined;
    const t = (safeJsonParse<Record<string, unknown>>(version.settings, {}) as { type?: unknown }).type;
    return t === "formal" || t === "practica" || t === "competencia" ? t : undefined;
  })();
  const quiz: ModuleQuiz = {
    id: metadata.id,
    title: metadata.title,
    type: metadata.type ?? tipoDeLaVersion,
    mode: metadata.mode,
    visibility: metadata.visibility,
    schoolId: metadata.schoolId,
    schoolName: metadata.schoolName,
    competitionRules: metadata.competitionRules,
    competitionRulesVisibility: metadata.competitionRulesVisibility,
    questions: version?.questions,
    generatorId: version?.generatorId,
    generatorVersion: version?.generatorVersion ?? version?.version,
    count: version?.count,
    seedPolicy: version?.seedPolicy !== undefined ? String(version.seedPolicy) : undefined,
    fixedSeed: version?.fixedSeed
  };
  const settings = version?.settings
    ? safeJsonParse<Record<string, unknown>>(version.settings, {})
    : {};
  if (settings && typeof settings === "object" && (settings as any).composition) {
    quiz.composition = (settings as any).composition;
  }
  if (settings && typeof settings === "object" && (settings as any).politicaSorteo) {
    quiz.politicaSorteo = (settings as any).politicaSorteo;
  }
  // Etapa 1 (Tiza — preguntas nativas) — crudo, se parsea en el punto de uso
  // (mismo criterio que `composition`).
  if (settings && typeof settings === "object" && (settings as any).preguntas) {
    quiz.preguntas = (settings as any).preguntas;
  }
  // PLAN-Y fase 3 — instrucciones para el alumno (editadas en Tiza,
  // persistidas en `settings.instructions`). El response del attempt ya las
  // pasaba (`quiz?.instructions`) pero nunca llegaban: nadie las seteaba acá.
  if (settings && typeof settings === "object" && typeof (settings as any).instructions === "string") {
    quiz.instructions = (settings as any).instructions;
  }
  return quiz;
};

// Shape del body del submit (espejo de QuizAttemptSubmitSchema). El cliente
// materializa las preguntas para MOSTRAR, pero `generatedQuestions`/`presentedIds`
// son afirmaciones suyas: el servidor las usa sólo cuando NO puede materializar.
export type SubmitPayload = {
  answers: Record<string, string | string[]>;
  generatedQuestions?: Array<{
    id: string;
    answerKey?: string | string[];
    points?: number;
    toleranciaRelativa?: number;
    /**
     * F2-04: tolerancia absoluta (enviada por el cliente cuando el
     * template la declara). El server la usa con el criterio combinado.
     */
    toleranciaAbsoluta?: number;
    /**
     * WO-11 — tipo de pregunta. `"expresion"` activa equivalencia
     * simbólica en el grader. Ver `docs/vblang/wo-11-eje-simbolico.md`.
     */
    questionType?: string;
    correccion?: "ninguna" | "manual";
    manualGrading?: boolean;
    prompt?: string;
    /** PLAN-E §21 — proporcional para answerKey array (mc múltiple / spans). */
    puntajeParcial?: "todo_o_nada" | "proporcional";
  }>;
  presentedIds?: string[];
};

export type GradingResolution = {
  gradingQuestions: ModuleQuiz["questions"];
  // I-2 — true si se corrigió contra la materialización del servidor.
  serverAuthoritative: boolean;
  // I-2 — ids cuya answerKey del payload no coincide con lo regenerado.
  mismatchQuestions: string[];
};

// Comportamiento PREVIO (le cree al payload): preguntas generadas del cliente, o
// subconjunto de las almacenadas según `presentedIds`. Se usa para generadoresV2
// y como fallback cuando una plantilla no se puede materializar server-side.
export const gradingQuestionsFromPayload = (
  quiz: ModuleQuiz,
  payload: SubmitPayload
): ModuleQuiz["questions"] => {
  const hasStored = (quiz.questions?.length ?? 0) > 0;
  const presentedSet =
    payload.presentedIds && payload.presentedIds.length > 0
      ? new Set(payload.presentedIds)
      : null;
  if (!hasStored && payload.generatedQuestions && payload.generatedQuestions.length > 0) {
    return payload.generatedQuestions;
  }
  if (presentedSet) return (quiz.questions ?? []).filter((q) => presentedSet.has(q.id));
  return quiz.questions;
};

// F-2c — preguntas almacenadas: deriva el subconjunto presentado server-side.
// Replica EXACTO `presentedQuestions` del reproductor para preguntas del banco:
//  - composición fijo/azar → `selectPoolIndices(total, comp, seed)` (las
//    primeras K, o K barajadas determinísticamente por seed). Se IGNORA
//    `payload.presentedIds`: es afirmación del cliente.
//  - elige_alumno → el alumno elige cuál responder (no derivable por seed); se
//    honra su elección (`presentedIds`) acotada a ids de preguntas reales.
//  - sin composición → todas las almacenadas. (El path legacy de `displayCount`
//    está dormido para quizzes de colección: `buildQuizFromCollection` no lo
//    puebla, así que cliente y servidor presentan todas — consistente.)
export const resolveStoredPresented = (
  quiz: ModuleQuiz,
  attempt: IntentoACorregir,
  payload: SubmitPayload
): ModuleQuiz["questions"] => {
  const stored = quiz.questions ?? [];
  const composition = quiz.composition ? parseComposition(quiz.composition) : null;
  if (!composition) return stored;
  if (composition.seleccion === "elige_alumno") {
    const presentedSet =
      payload.presentedIds && payload.presentedIds.length > 0
        ? new Set(payload.presentedIds)
        : null;
    return presentedSet ? stored.filter((q) => presentedSet.has(q.id)) : stored;
  }
  // fijo / azar: subconjunto determinístico por seed (mismo seed que usó el
  // reproductor: `attempt.seed ?? "0"`).
  const indices = selectPoolIndices(stored.length, composition, attempt.seed ?? "0");
  return indices.map((i) => stored[i]);
};

// Convierte una pregunta materializada por el SERVIDOR al shape que corrigen
// `gradeAnswers`/`buildFeedback`. Conserva answerKey/tolerancia/peso/modo del
// servidor pero usa el id del CLIENTE para que `answers[id]` resuelva (el id del
// cliente trae un contador de módulo no reproducible; ver questionHashPrefix).
// Repaso — de qué plantilla (= tema) salió cada pregunta. No viaja en `ModuleQuizQuestion` (tipo compartido con vblang):
// se guarda aparte, por identidad de objeto, desde que se materializa hasta que se corrige.
const plantillaDeMaterializada = new WeakMap<object, string>();
export const plantillaDeGradable = new WeakMap<object, string>();

export const serverQuestionToGradable = (
  sq: ModuleQuizQuestion,
  id: string
): GradableQuestion => {
  const q: GradableQuestion = { id };
  if (sq.answerKey !== undefined) q.answerKey = sq.answerKey;
  if (sq.explanation !== undefined) q.explanation = sq.explanation;
  if (sq.toleranciaRelativa !== undefined) q.toleranciaRelativa = sq.toleranciaRelativa;
  // F2-04: el server debe propagar la tolerancia absoluta al grader cuando
  // materializa la pregunta (autoridad server-side desde V2-06).
  if (sq.toleranciaAbsoluta !== undefined) q.toleranciaAbsoluta = sq.toleranciaAbsoluta;
  // WO-11 — propagar questionType (ej. "expresion" → equivalencia simbólica).
  if (sq.questionType !== undefined) q.questionType = sq.questionType;
  if (sq.points !== undefined) q.points = sq.points;
  if (sq.correccion !== undefined) q.correccion = sq.correccion;
  if (sq.manualGrading !== undefined) q.manualGrading = sq.manualGrading;
  if (sq.prompt !== undefined) q.prompt = sq.prompt;
  // PLAN-E §21 — sin esto, el path autoritativo VBLang corregía proporcional
  // como todo-o-nada (mc múltiple y analisis_spans).
  if (sq.puntajeParcial !== undefined) q.puntajeParcial = sq.puntajeParcial;
  return q;
};

// I-2 — camino VBLang. Recompila el DSL de la plantilla (cacheado por versión),
// regenera el pool con `attempt.seed` replicando EXACTO el reproductor, deriva
// el subconjunto presentado y arma las preguntas a corregir contra la
// materialización del SERVIDOR. `payload.generatedQuestions` se ignora para
// corregir (sólo se compara para detectar manipulación). Si la plantilla no es
// materializable server-side (generador asistido/dataset/plantilla ausente),
// cae al comportamiento previo marcando serverAuthoritative=false.
export const resolveVblangGrading = async (
  quiz: ModuleQuiz,
  attempt: IntentoACorregir,
  payload: SubmitPayload,
  generatorId: string,
  codigoDe: CodigoDePlantilla
): Promise<GradingResolution> => {
  const fallback = (): GradingResolution => ({
    gradingQuestions: gradingQuestionsFromPayload(quiz, payload),
    serverAuthoritative: false,
    mismatchQuestions: []
  });

  const plantillaId = generatorId.slice("plantilla:".length);
  const codigoDsl = await codigoDe(plantillaId);
  if (!codigoDsl) return fallback();

  let pool: ReturnType<typeof materializeVblangPool>;
  try {
    const compiled = getCompiledPlantilla(
      attempt.quizVersionId ?? plantillaId,
      codigoDsl
    );
    pool = materializeVblangPool(compiled, attempt.seed, quiz.count ?? 10);
  } catch {
    return fallback();
  }
  // Pool vacío = plantilla con generador asistido/dataset (necesita un provider
  // que vive en apps/web): no materializable server-side → no-autoritativo.
  if (!pool.ok) return fallback();

  // Reverse map prefijo-hash → id del cliente, para resolver `answers[clientId]`.
  const clientIdByPrefix = new Map<string, string>();
  const registerClientId = (id: string) => {
    const p = questionHashPrefix(id);
    if (!clientIdByPrefix.has(p)) clientIdByPrefix.set(p, id);
  };
  for (const id of payload.presentedIds ?? []) registerClientId(id);
  for (const id of Object.keys(payload.answers ?? {})) registerClientId(id);
  for (const q of payload.generatedQuestions ?? []) registerClientId(q.id);

  // answerKeys que AFIRMÓ el cliente, por prefijo (para detectar manipulación).
  const claimedKeyByPrefix = new Map<string, unknown>();
  for (const q of payload.generatedQuestions ?? []) {
    claimedKeyByPrefix.set(questionHashPrefix(q.id), q.answerKey);
  }

  // Subconjunto PRESENTADO derivado server-side desde el pool regenerado. Para
  // elige_alumno el alumno elige cuál responder (no derivable por seed): se
  // honra su elección pero la clave de corrección sigue siendo la del servidor.
  const composition = quiz.composition ? parseComposition(quiz.composition) : null;
  const seedForPool = attempt.seed ?? "0";
  let presented: ModuleQuizQuestion[];
  if (composition && composition.seleccion === "elige_alumno") {
    const chosen = new Set((payload.presentedIds ?? []).map(questionHashPrefix));
    presented = pool.questions.filter((q) => chosen.has(questionHashPrefix(q.id)));
  } else if (composition) {
    const indices = selectPoolIndices(pool.questions.length, composition, seedForPool);
    presented = indices.map((i) => pool.questions[i]);
  } else {
    presented = pool.questions;
  }

  const mismatchQuestions: string[] = [];
  const gradingQuestions = presented.map((sq) => {
    const prefix = questionHashPrefix(sq.id);
    const clientId = clientIdByPrefix.get(prefix) ?? sq.id;
    if (claimedKeyByPrefix.has(prefix)) {
      const claimed = JSON.stringify(claimedKeyByPrefix.get(prefix) ?? null);
      const real = JSON.stringify(sq.answerKey ?? null);
      if (claimed !== real) mismatchQuestions.push(clientId);
    }
    return serverQuestionToGradable(sq, clientId);
  });

  return { gradingQuestions, serverAuthoritative: true, mismatchQuestions };
};

// Etapa 1 (Tiza — preguntas nativas) — camino `settings.preguntas`. A
// diferencia de `resolveVblangGrading` (UNA plantilla, pool regenerado por
// seed), acá cada SLOT del sorteo puede venir de una plantilla DISTINTA
// (`PreguntaQuiz.plantillaId`). Se sortea qué plantilla ocupa cada slot
// (`sortearCuestionarioPreguntas`, puro y determinista) y se materializa
// cada una individualmente con `materializeVblangPool(..., count=1)`,
// reusando la MISMA infraestructura de compilación/generación que el
// camino de una sola plantilla — no se inventa un segundo motor VBLang.
//
// Reusado por dos consumidores: `resolvePreguntasGrading` (submit,
// autoritativo) y el GET de `/api/quiz-attempts/:id` (mostrarle el
// cuestionario al alumno ANTES de responder — hasta ahora inexistente,
// ver `tareas_pendientes/PLAN-mostrar-preguntas-nativas-al-alumno.md`).
//
// `id` estable entre llamadas independientes: `materializeVblangPool` arma
// el id como `vb-<fnv1a(seed)>-<contador>`, donde el contador es un GLOBAL
// de módulo que NUNCA se resetea entre requests (`to-module-quiz-question.ts`,
// `let idCounter = 0`) — dos GETs separados del mismo intento (ej. el
// alumno refresca la página) devolverían el MISMO contenido con un id
// DISTINTO, y las respuestas ya guardadas (F5-01, keyed por id) quedarían
// huérfanas. El prefijo (`fnv1a(seed)`) sí es 100% determinista (depende
// sólo del seed del slot, no del contador) — se lo pisa acá con un sufijo
// fijo `-0` para que el id completo sea estable entre llamadas. El submit
// sigue funcionando igual de cualquier forma: `resolvePreguntasGrading`
// reconcilia por PREFIJO contra lo que mande el cliente, nunca por id
// completo.
function idEstablePorSlot(materializada: ModuleQuizQuestion): string {
  return `${questionHashPrefix(materializada.id)}-0`;
}

// Anti-duplicado (pedido de Javier): si el relleno repite la misma
// plantilla en varios slots (ver `maxRepeticiones`), el sorteo de VALORES
// dentro del DSL podría, por azar, generar el MISMO enunciado dos veces
// (ej. "Cuánto es 1+1?" en dos slots distintos) — con rangos de variables
// chicos no es tan raro. Presupuesto de reintentos con seed alternativo
// ANTES de resignarse a aceptar el duplicado (nunca hace fallar el
// intento por esto: agotado el presupuesto, o si el reintento mismo no
// materializa, se queda con lo último que sí generó).
const MAX_REINTENTOS_ANTIDUP = 5;

// Devuelve `null` si CUALQUIER slot no se pudo materializar server-side
// (plantilla ausente, o usa generador asistido/dataset sin provider) — todo
// o nada, mismo criterio que el resto del módulo: no se arma un
// cuestionario parcialmente confiable en silencio.
export async function materializarPreguntasNativas(
  cuestionario: CuestionarioPreguntas,
  ctx: ContextoSorteo,
  codigoDe: CodigoDePlantilla
): Promise<ModuleQuizQuestion[] | null> {
  let resultado: ReturnType<typeof sortearCuestionarioPreguntas>;
  try {
    resultado = sortearCuestionarioPreguntas(cuestionario, ctx);
  } catch {
    return null;
  }

  // Cache de compilados por `plantillaId` DENTRO de esta llamada: el
  // relleno puede repetir la misma plantilla en varios slots.
  const compiledCache = new Map<string, ReturnType<typeof getCompiledPlantilla> | null>();
  const materializadas: ModuleQuizQuestion[] = [];
  // Enunciados ya usados EN ESTE cuestionario (un alumno, un intento) — no
  // across alumnos ni intentos: cada quien puede repetir independiente.
  const enunciadosUsados = new Set<string>();

  for (const slot of resultado.slots) {
    const plantillaId = slot.pregunta.plantillaId;
    let compiled = compiledCache.get(plantillaId);
    if (compiled === undefined) {
      const codigoDsl = await codigoDe(plantillaId);
      compiled = codigoDsl ? getCompiledPlantilla(plantillaId, codigoDsl) : null;
      compiledCache.set(plantillaId, compiled);
    }
    // Plantilla ausente, sin DSL, o que necesita un provider que no vive acá
    // (generador asistido/dataset) → no autoritativo para TODO el intento.
    if (!compiled) return null;
    const pool = materializeVblangPool(compiled, slot.seed, 1);
    if (!pool.ok || pool.questions.length === 0) return null;
    let materializada = pool.questions[0];

    let reintento = 0;
    while (enunciadosUsados.has(materializada.prompt) && reintento < MAX_REINTENTOS_ANTIDUP) {
      const seedAlterno = `${slot.seed}::dup${reintento}`;
      const poolAlterno = materializeVblangPool(compiled, seedAlterno, 1);
      if (!poolAlterno.ok || poolAlterno.questions.length === 0) break;
      materializada = poolAlterno.questions[0];
      reintento += 1;
    }
    enunciadosUsados.add(materializada.prompt);

    // El `puntaje` declarado en `PreguntaQuiz` pisa el `points` que trae la
    // plantilla materializada (si no está declarado, `gradeAnswers` aplica
    // su default de 1 vía `questionWeight`, igual que cualquier otro path).
    const conPuntaje: ModuleQuizQuestion = {
      ...materializada,
      id: idEstablePorSlot(materializada),
      ...(slot.pregunta.puntaje !== undefined ? { points: slot.pregunta.puntaje } : {})
    };
    plantillaDeMaterializada.set(conPuntaje, plantillaId);
    materializadas.push(conPuntaje);
  }

  return materializadas;
}

export function contextoSorteoPreguntas(
  quiz: ModuleQuiz,
  quizId: string,
  alumnoId: string,
  intento: number | null | undefined
): ContextoSorteo {
  // Política de estabilidad entre intentos: reusa `settings.politicaSorteo`
  // (WO-3) — mismo concepto ("¿el sorteo cambia entre intentos?"), no se
  // inventa un campo paralelo para preguntas nativas.
  const politica: PoliticaSorteo =
    quiz.politicaSorteo === "por_intento" ? "por_intento" : "fijo_por_alumno";
  return { quizId, alumnoId, intento: intento ?? 1, politica };
}

export const resolvePreguntasGrading = async (
  quiz: ModuleQuiz,
  attempt: IntentoACorregir,
  payload: SubmitPayload,
  codigoDe: CodigoDePlantilla
): Promise<GradingResolution> => {
  const fallback = (): GradingResolution => ({
    gradingQuestions: gradingQuestionsFromPayload(quiz, payload),
    serverAuthoritative: false,
    mismatchQuestions: []
  });

  const cuestionario = parseCuestionarioPreguntas(quiz.preguntas);
  if (!validarCuestionarioPreguntas(cuestionario).ok) return fallback();

  const ctx = contextoSorteoPreguntas(quiz, attempt.quizId, attempt.userId, attempt.attemptNo);
  const materializadas = await materializarPreguntasNativas(cuestionario, ctx, codigoDe);
  if (!materializadas) return fallback();

  const clientIdByPrefix = new Map<string, string>();
  const registerClientId = (id: string) => {
    const p = questionHashPrefix(id);
    if (!clientIdByPrefix.has(p)) clientIdByPrefix.set(p, id);
  };
  for (const id of payload.presentedIds ?? []) registerClientId(id);
  for (const id of Object.keys(payload.answers ?? {})) registerClientId(id);
  for (const q of payload.generatedQuestions ?? []) registerClientId(q.id);

  const gradingQuestions: ModuleQuiz["questions"] = materializadas.map((materializada) => {
    const prefix = questionHashPrefix(materializada.id);
    const clientId = clientIdByPrefix.get(prefix) ?? materializada.id;
    const gradable = serverQuestionToGradable(materializada, clientId);
    const pid = plantillaDeMaterializada.get(materializada);
    if (pid) plantillaDeGradable.set(gradable, pid);
    return gradable;
  });

  return { gradingQuestions, serverAuthoritative: true, mismatchQuestions: [] };
};

/**
 * F2-04: criterio numérico combinado. Acepta respuesta dentro del MÁXIMO
 * entre la tolerancia relativa (ratio × |esperado|) y la tolerancia
 * absoluta (unidades crudas).
 *
 *   |r - e| ≤ max(|e| · tol_rel, tol_abs)
 *
 * Comportamiento previo preservado:
 *  - tol_abs ausente o 0 → colapsa a `|r - e| ≤ |e| · tol_rel`.
 *  - e = 0 + tol_abs = 0 → exige `r = 0` (exacto).
 *  - e = 0 + tol_abs > 0 → tol_abs es la única holgura.
 *  - tol_rel = 0 + tol_abs > 0 → tol_abs es la única holgura.
 */
/**
 * Corrección de una respuesta numérica. Delega en `@vb/vblang`
 * (`respuestaNumericaCorrecta`), que es la única fuente del criterio y la
 * comparte con el preview del docente — antes cada lado tenía el suyo.
 *
 * PLAN casos-limite §7: sin tolerancia declarada esto era `response === expected`
 * (igualdad de string), así que una respuesta esperada no entera obligaba al
 * alumno a tipear los 4 decimales exactos que produce `formatoDefault`
 * (`1/3` → `"0.3333"`) y `0,3` con coma fallaba contra `0.3`. Ahora una
 * respuesta no entera recibe tolerancia por defecto y la coma se normaliza; las
 * respuestas enteras y las tolerancias declaradas corrigen igual que antes.
 */
const gradeNumeric = (
  response: string,
  expected: string,
  toleranciaRelativa?: number,
  toleranciaAbsoluta?: number
): boolean =>
  respuestaNumericaCorrectaVblang(
    response,
    expected,
    toleranciaRelativa,
    toleranciaAbsoluta
  );

/**
 * WO-11 — corrector simbólico. Compara dos strings-expresión por
 * equivalencia algebraica (no por igualdad de string ni por
 * tolerancia numérica). Ver `docs/vblang/wo-11-eje-simbolico.md` §6.
 *
 * Delega en el paquete `@vb/vblang` (`sonEquivalentes`). Si el
 * paquete está desactualizado y no exporta la función (defensa
 * contra versiones anteriores), cae a igualdad de string.
 */
const gradeSymbolic = (response: string, expected: string): boolean => {
  // Trim + colapso de espacios antes de delegar — coherente con la
  // normalización trivial de la función del paquete.
  const norm = (s: string) => s.replace(/\s+/g, " ").trim();
  const r = norm(response);
  const e = norm(expected);
  if (r === e) return true;
  if (r === "" || e === "") return false;
  if (typeof sonEquivalentesVblang !== "function") {
    // Fallback conservador: igualdad exacta (sin equivalencia simbólica).
    // El alumno debe tipear EXACTAMENTE la forma esperada.
    return r === e;
  }
  try {
    return sonEquivalentesVblang(r, e).eq;
  } catch {
    return false;
  }
};

// Peso (puntaje) de una pregunta: su `points` propio, o el peso por defecto de
// la composición del quiz, o 1. Si nada lo declara, el grading es idéntico al
// histórico (maxScore = cantidad de preguntas).
export const questionWeight = (
  question: { points?: number },
  defaultWeight: number
): number => {
  if (typeof question.points === "number" && question.points > 0) return question.points;
  return defaultWeight > 0 ? defaultWeight : 1;
};

// Una respuesta de texto contra un valor esperado. WO-11 — para `questionType: "expresion"` la corrección es por
// equivalencia simbólica (numérica + algebraica) y no aplican las tolerancias (ver `docs/vblang/wo-11-eje-simbolico.md`
// §6); el resto, con el criterio numérico (que también acepta el texto igual).
const textoCorrecto = (question: GradableQuestion, response: string, expected: string): boolean =>
  question.questionType === "expresion"
    ? gradeSymbolic(response, expected)
    : gradeNumeric(response, expected, question.toleranciaRelativa, question.toleranciaAbsoluta);

// Tipos de respuesta escrita: en ellos una lista son alternativas. En opción múltiple, ordenar o marcar, la lista es la
// respuesta completa y una respuesta de texto no la cumple.
const conAceptables = (question: GradableQuestion): boolean =>
  question.questionType === "completar" || question.questionType === "input";

export const gradeAnswers = (
  quiz: ModuleQuiz | null,
  answers: Record<string, string | string[]>
) => {
  const questions = quiz?.questions ?? [];
  if (questions.length === 0) {
    return {
      score: 0,
      maxScore: 0,
      manual: [] as Array<{ question: GradableQuestion; weight: number }>
    };
  }
  const defaultWeight =
    typeof quiz?.composition?.pesoPorDefecto === "number" && quiz.composition.pesoPorDefecto > 0
      ? quiz.composition.pesoPorDefecto
      : 1;
  let score = 0;
  let maxScore = 0;
  const manual: Array<{ question: GradableQuestion; weight: number }> = [];
  for (const question of questions) {
    // WO07 — abierta informativa: no puntúa, se excluye del maxScore.
    if (isInformativeQuestion(question)) continue;
    const weight = questionWeight(question, defaultWeight);
    maxScore += weight;
    // WO07 — abierta manual: cuenta en el maxScore pero la nota la pone el
    // profe. Queda pendiente; el auto-score suma 0 hasta corregirla.
    if (isManualQuestion(question)) {
      manual.push({ question, weight });
      continue;
    }
    const expected = question.answerKey;
    if (!expected) continue;
    const response = answers[question.id];
    if (Array.isArray(expected)) {
      // Respuesta de texto contra una lista: son las respuestas aceptables de un `completar`
      // (`respuestas_validas`), alcanza con una. Mismo criterio que la vista previa del docente.
      if (typeof response === "string" && conAceptables(question)) {
        if (expected.some((e) => textoCorrecto(question, response, e))) score += weight;
        continue;
      }
      if (!Array.isArray(response)) continue;
      const expectedSet = new Set(expected);
      const responseSet = new Set(response);
      // PLAN-E §21 — puntaje proporcional (mc múltiple y análisis por spans):
      // max(0, aciertos − marcadas de más) / total correctas.
      if (question.puntajeParcial === "proporcional") {
        let aciertos = 0;
        let deMas = 0;
        for (const r of responseSet) {
          if (expectedSet.has(r)) aciertos += 1;
          else deMas += 1;
        }
        if (expectedSet.size > 0) {
          score += weight * (Math.max(0, aciertos - deMas) / expectedSet.size);
        }
        continue;
      }
      if (expectedSet.size !== responseSet.size) continue;
      const matches = Array.from(expectedSet).every((value) => responseSet.has(value));
      if (matches) score += weight;
      continue;
    }
    if (typeof response === "string" && textoCorrecto(question, response, expected)) score += weight;
  }
  return { score, maxScore, manual };
};

export const buildFeedback = (
  quiz: ModuleQuiz | null,
  answers: Record<string, string | string[]>
) => {
  const feedback: Record<string, QuizFeedback> = {};
  const questions = quiz?.questions ?? [];
  for (const question of questions) {
    // WO07 — abierta manual: el feedback queda pendiente hasta que el profe corrija.
    if (isManualQuestion(question)) {
      feedback[question.id] = {
        correct: false,
        pending: true,
        response: answers[question.id],
        explanation: question.explanation
      };
      continue;
    }
    // WO07 — abierta informativa: no afecta la nota; sin feedback de corrección.
    if (isInformativeQuestion(question)) continue;
    const expected = question.answerKey;
    if (!expected) continue;
    const response = answers[question.id];
    let correct = false;
    // Mismo criterio que `gradeAnswers`: si el feedback y la nota difirieran, el alumno vería "correcta" sin puntaje.
    if (Array.isArray(expected)) {
      if (typeof response === "string" && conAceptables(question)) {
        correct = expected.some((e) => textoCorrecto(question, response, e));
      } else if (Array.isArray(response)) {
        const expectedSet = new Set(expected);
        const responseSet = new Set(response);
        correct =
          expectedSet.size === responseSet.size &&
          Array.from(expectedSet).every((value) => responseSet.has(value));
      }
    } else if (typeof response === "string") {
      correct = textoCorrecto(question, response, expected);
    }
    feedback[question.id] = {
      correct,
      expected,
      response,
      explanation: question.explanation
    };
  }
  return feedback;
};

// WO14 — Reconciliación de umbral. `config.minPassingScore` (en la escala) es la
// única fuente de verdad del corte. Cuando el módulo trae un `scoringConfig` con
// un systemId del catálogo, ese gana. Si no (caso actual: no se persiste), se cae
// a `scale-0-100` con `minPassingScore` = QuizUmbral.umbral, preservando exactamente
// el comportamiento previo (aprobado ⇔ % ≥ umbral) pero ahora desde el ratio crudo.
export const resolveScoringConfig = (
  scoringConfig: ScoringConfig | undefined,
  umbral: number
): ScoringConfig => {
  if (scoringConfig?.systemId && getScoringSystem(scoringConfig.systemId)) {
    return scoringConfig;
  }
  return { systemId: "scale-0-100", minPassingScore: String(umbral) };
};
