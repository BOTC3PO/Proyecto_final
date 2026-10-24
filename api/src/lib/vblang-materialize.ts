/**
 * I-2 — materialización server-side de quizzes basados en plantillas VBLang.
 *
 * El servidor recompila el DSL de la plantilla y regenera las preguntas con el
 * `seed` del intento, replicando EXACTO lo que hace el reproductor del alumno
 * (apps/web/src/pages/quizzes/QuizAttempt.tsx + apps/web/src/vblang/runPlantilla.ts).
 * Así la corrección usa la materialización del SERVIDOR como fuente de verdad y
 * `payload.generatedQuestions` (las preguntas+respuestas que manda el cliente)
 * deja de ser confiable: un alumno ya no puede editar el payload con devtools
 * para inyectar sus respuestas como answerKeys y sacar puntaje perfecto.
 *
 * @vb/vblang es isomórfico (parser+runtime puros, dep solo mathjs) y el API ya
 * lo importa para validar plantillas al guardar; `generate(compiled, { seed })`
 * es determinista (verificado: byte a byte entre corridas y entre versiones).
 */

import {
  compile,
  generate,
  parse,
  toModuleQuizQuestion,
  type ModuleQuizQuestion,
} from "@vb/vblang";

type Compiled = ReturnType<typeof compile>;

/**
 * Cache module-level del compilado, cacheado por `quizVersionId`. El DSL de una
 * versión de quiz es estable mientras la plantilla no se edite; guardamos un
 * hash del DSL para revalidar y recompilar si cambió (defensa ante edición de
 * la plantilla entre el inicio del intento y el submit).
 *
 * Reusar un mismo compilado entre `generate()` con distintas seeds es seguro:
 * verificado empíricamente que `generate` no muta `compiled` (cachear el
 * compilado da el mismo resultado byte a byte que recompilar por pregunta, que
 * es lo que hace el cliente).
 */
const compiledCache = new Map<string, { dslHash: string; compiled: Compiled }>();

/** djb2 — sólo para invalidar el cache de compilado, no es uso de seguridad. */
function hashDsl(dsl: string): string {
  let h = 5381;
  for (let i = 0; i < dsl.length; i += 1) h = ((h << 5) + h + dsl.charCodeAt(i)) | 0;
  return (h >>> 0).toString(16);
}

export function getCompiledPlantilla(versionId: string, codigoDsl: string): Compiled {
  const dslHash = hashDsl(codigoDsl);
  const cached = compiledCache.get(versionId);
  if (cached && cached.dslHash === dslHash) return cached.compiled;
  const compiled = compile(parse(codigoDsl));
  compiledCache.set(versionId, { dslHash, compiled });
  return compiled;
}

/** Sólo para tests: limpia el cache module-level. */
export function __resetCompiledCache(): void {
  compiledCache.clear();
}

/**
 * Prefijo reproducible del id de una pregunta materializada. El adapter genera
 * el id como `vb-<fnv1a(seed)>-<contador>`, donde `<contador>` es un global de
 * módulo que NO es reproducible entre el proceso del cliente y el del servidor.
 * El prefijo `vb-<fnv1a(seed)>` SÍ es reproducible (depende sólo de la seed),
 * así que casamos cliente↔servidor por ese prefijo (todo menos el último
 * segmento). Dentro de un intento las seeds por pregunta son distintas, así que
 * los prefijos son únicos.
 */
export function questionHashPrefix(id: string): string {
  return id.split("-").slice(0, -1).join("-");
}

export interface MaterializedPool {
  questions: ModuleQuizQuestion[];
  /**
   * true si la plantilla se pudo materializar server-side. false cuando el pool
   * sale vacío: pasa con plantillas que usan `generador:` (generador asistido)
   * o `dataset:`, que necesitan un provider que vive en apps/web → quedan fuera
   * del alcance server-autoritativo (misma política que generadoresV2).
   */
  ok: boolean;
}

/**
 * Replica EXACTA del loop del reproductor del alumno:
 *
 *   baseSeed = attempt.seed != null ? String(attempt.seed) : "0"
 *   intentos = 0
 *   while (out.length < count && intentos < count*3) {
 *     try { out.push(runPlantilla(dsl, { seed: `${baseSeed}-${intentos}` })) }
 *     catch { /* restricción difícil: reintentar *\/ }
 *     intentos++
 *   }
 *
 * La FÓRMULA de derivación de seed por pregunta es `${baseSeed}-${intentos}`
 * (concatenación de STRING, no `seed + i` numérico), y `intentos` avanza en
 * CADA iteración (éxito o fallo). Como `generate` es determinista, el servidor
 * reproduce el mismo set, con los mismos fallos por restricción en las mismas
 * seeds. NO pasamos `provider`: una plantilla con generador asistido / dataset
 * lanza en todas las seeds → pool vacío → ok=false (fallback no-autoritativo).
 */
export function materializeVblangPool(
  compiled: Compiled,
  attemptSeed: string | number | null | undefined,
  count: number,
): MaterializedPool {
  const baseSeed =
    attemptSeed !== undefined && attemptSeed !== null ? String(attemptSeed) : "0";
  const questions: ModuleQuizQuestion[] = [];
  const target = Math.max(0, count);
  const maxIntentos = target * 3;
  let intentos = 0;
  while (questions.length < target && intentos < maxIntentos) {
    try {
      const gen = generate(compiled, { seed: `${baseSeed}-${intentos}` });
      // `focus: null` igual que runPlantilla del cliente (no pasa focus).
      questions.push(toModuleQuizQuestion(gen, { focus: null }));
    } catch {
      // Restricción difícil para esta seed (o falta de provider): reintentar con
      // la siguiente, exactamente como el cliente.
    }
    intentos += 1;
  }
  return { questions, ok: questions.length > 0 };
}
