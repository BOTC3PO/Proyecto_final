/**
 * V2-04 — sanitización de preguntas para alumnos.
 *
 * Cuando un alumno (USER/STUDENT/PARENT) consume un módulo o un quiz, las
 * preguntas NUNCA deben incluir el answerKey real ni la explanation. Para
 * detectar accesos indebidos al payload (alguien leyendo la respuesta real y
 * enviándola como si fuera propia) se planta un **canario**:
 *
 *   answerKey: "VB-CANARY-<8 hex chars derivados de scope+questionId>"
 *
 * El canario es **estable** (no aleatorio) para que:
 *   - El servidor lo reconozca después como marcador.
 *   - Si el alumno lo envía como respuesta, queda registrado en `grading`
 *     (sin acusar automáticamente — es información para el docente).
 *
 * El docente sí sigue recibiendo el answerKey y la explanation intactos
 * (las edita, las muestra en la corrección manual, etc.).
 */

const CANARY_PREFIX = "VB-CANARY-";

/**
 * Hash determinista de 32 bits → 8 hex chars. Suficiente para detectar
 * intentos individuales, sin dar información sobre el contenido original.
 * Implementación FNV-1a simple (no criptográfica; solo necesitamos
 * distribución razonable y estabilidad entre runs del mismo proceso).
 */
function shortHash(a: string, b: string): string {
  const input = `${a}\u0000${b}`;
  let h = 0x811c9dc5;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  // Una segunda vuelta con la longitud para mejorar la mezcla.
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h.toString(16).padStart(8, "0");
}

export function buildCanaryAnswer(scopeId: string, questionId: string): string {
  return `${CANARY_PREFIX}${shortHash(scopeId, questionId)}`;
}

export function isCanaryAnswer(value: unknown): boolean {
  if (typeof value !== "string") return false;
  return value.startsWith(CANARY_PREFIX);
}

type Question = Record<string, unknown> & { id: string };

/**
 * Devuelve una copia del array de preguntas sin `explanation` y con
 * `answerKey` reemplazado por un canario estable. NO muta el input.
 *
 * El `scopeId` puede ser el quizId, la versión del quiz, o un identificador
 * equivalente que el caller ya tenga a mano. Solo se usa para derivar el
 * canario, no se expone en la respuesta.
 *
 * - Si la pregunta no tiene `id`, se omite (no podemos derivar un canario
 *   estable). El id es obligatorio por contrato del DSL.
 * - Si la pregunta no tiene `answerKey` (informativa / abierta), se devuelve
 *   tal cual excepto `explanation` (que sí se elimina).
 */
export function sanitizeQuestionsForStudent<T extends Question>(
  questions: readonly T[] | undefined,
  scopeId: string
): T[] {
  if (!Array.isArray(questions) || questions.length === 0) return [];
  return questions.map((q) => {
    if (!q || typeof q.id !== "string" || q.id.length === 0) {
      // Sin id no podemos derivar canario; devolvemos la pregunta sin
      // explanation pero conservando el resto de campos.
      const { explanation: _ex, ...rest } = q ?? {};
      return rest as T;
    }
    const sanitized: Record<string, unknown> = { ...q };
    delete sanitized.explanation;
    if ("answerKey" in sanitized && sanitized.answerKey !== undefined) {
      sanitized.answerKey = buildCanaryAnswer(scopeId, q.id);
    }
    return sanitized as T;
  });
}
