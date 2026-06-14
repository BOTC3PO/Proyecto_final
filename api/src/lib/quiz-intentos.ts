/**
 * F3-04 — Política de intentos (límite y nota agregada).
 *
 * El docente configura por cuestionario:
 *   - `maxIntentos`: número entero ≥ 1, o `0`/`null` para ilimitados.
 *   - `politicaNota`: "mejor" | "ultima" | "primera" | "promedio".
 *
 * El default por tipo de quiz (del campo embebido en `QuizVersion.settings.type`):
 *   - `practica`   → `politicaNota = "mejor"`
 *   - `formal`     → `politicaNota = "ultima"`
 *   - `competencia`→ `politicaNota = "mejor"` (de todas formas no se aplica: el
 *                    modo competencia se puntúa por tiempo, no por nota agregada)
 *
 * La configuración vive en `QuizVersion.settings` (JSON) — patrón F3-01: sin
 * tabla nueva, sin migration. Si no está presente en `settings`, se usa el
 * default por tipo. Si el `type` tampoco está, default a `practica`.
 *
 * `maxIntentos = 0` significa ILIMITADO (es el default histórico, preserva
 * el comportamiento previo a F3-04). El backend NO rechaza intentos cuando
 * `maxIntentos === 0` o `null`/`undefined`.
 */

export type PoliticaNota = "mejor" | "ultima" | "primera" | "promedio";

export const POLITICAS_VALIDAS: PoliticaNota[] = ["mejor", "ultima", "primera", "promedio"];

export type IntentoPolicy = {
  /** `null` = ilimitado. Entero ≥ 1 = tope. 0 = ilimitado (alias de null). */
  maxIntentos: number | null;
  politicaNota: PoliticaNota;
};

export type IntentoPolicyInput = {
  maxIntentos?: number | null;
  politicaNota?: string | null;
};

export type QuizTipo = "practica" | "formal" | "competencia" | string;

export type AttemptForPolicy = {
  status: string;
  score: number | null;
  maxScore: number | null;
  submittedAt?: string | null;
};

const DEFAULT_POLITICA: Record<QuizTipo, PoliticaNota> = {
  practica: "mejor",
  formal: "ultima",
  competencia: "mejor",
};

const DEFAULT_MAX_INTENTOS = 0; // 0 = ilimitado (preserva el comportamiento previo a F3-04).

function coercePoliticaNota(raw: unknown, fallback: PoliticaNota): PoliticaNota {
  if (typeof raw === "string" && (POLITICAS_VALIDAS as string[]).includes(raw)) {
    return raw as PoliticaNota;
  }
  return fallback;
}

function coerceMaxIntentos(raw: unknown): number | null {
  if (raw === null || raw === undefined) return null;
  if (typeof raw === "number") {
    if (!Number.isFinite(raw)) return null;
    if (raw <= 0) return null; // 0 (y negativos) = ilimitado
    return Math.floor(raw);
  }
  if (typeof raw === "string") {
    const trimmed = raw.trim();
    if (!trimmed) return null;
    const n = Number(trimmed);
    if (!Number.isFinite(n)) return null;
    if (n <= 0) return null;
    return Math.floor(n);
  }
  return null;
}

/**
 * Lee la política de intentos del `settings` JSON de una QuizVersion.
 * Resuelve defaults según `type` si los campos están ausentes.
 *
 * NO lanza — si el JSON es inválido, devuelve los defaults. Esto es
 * importante porque F3-04 puede rodar contra versiones de quiz creadas
 * antes de la feature, donde `settings` puede no tener estos campos o
 * tenerlos mal formados.
 */
export function parseIntentoPolicy(
  settingsRaw: string | null | undefined,
  tipo: QuizTipo = "practica"
): IntentoPolicy {
  const tipoKey = (DEFAULT_POLITICA[tipo] ? tipo : "practica") as QuizTipo;
  const defaultPolitica: PoliticaNota = DEFAULT_POLITICA[tipoKey];

  if (!settingsRaw) {
    return { maxIntentos: DEFAULT_MAX_INTENTOS || null, politicaNota: defaultPolitica };
  }

  let parsed: Record<string, unknown> | null = null;
  try {
    const j = JSON.parse(settingsRaw) as unknown;
    if (j && typeof j === "object" && !Array.isArray(j)) {
      parsed = j as Record<string, unknown>;
    }
  } catch {
    parsed = null;
  }

  if (!parsed) {
    return { maxIntentos: DEFAULT_MAX_INTENTOS || null, politicaNota: defaultPolitica };
  }

  return {
    maxIntentos: coerceMaxIntentos(parsed.maxIntentos) ?? (DEFAULT_MAX_INTENTOS || null),
    politicaNota: coercePoliticaNota(parsed.politicaNota, defaultPolitica)
  };
}

export type ResumenNotas = {
  mejor: number | null;
  ultima: number | null;
  primera: number | null;
  promedio: number | null;
};

/**
 * Calcula la nota agregada según la política, sobre un set de intentos
 * finalizados (status `submitted` | `graded` | `pending_review`).
 *
 * Sólo cuentan los intentos con:
 *   - status ∈ {"submitted", "pending_review", "graded"} (los ENVIADOS)
 *   - `score !== null && maxScore !== null && maxScore > 0`
 *
 * Intentos `in_progress` (sin enviar) NO cuentan para la nota, aunque tengan
 * `score: 0, maxScore: N` inicializados al crear el intento. Sí cuentan para
 * el `intentosPrevios` del límite (ver `contarIntentosPrevios`).
 *
 * El puntaje agregado se expresa en **escala 0..1** (ratio), NO en escala del
 * cuestionario. La conversión a la escala del sistema (0..10, 0..100, etc.) la
 * hace el caller con `gradeFromConfig` de `@vb/vblang` o el equivalente.
 *
 * Devuelve también todas las cuatro variantes para que el front pueda
 * mostrar "Mejor: X, Última: Y" sin re-iterar.
 */
export function calcularNotas(intentos: AttemptForPolicy[]): ResumenNotas {
  const ENVIADOS = new Set(["submitted", "pending_review", "graded"]);
  const submitted = intentos.filter(
    (a) =>
      ENVIADOS.has(a.status) &&
      a.score !== null &&
      a.score !== undefined &&
      a.maxScore !== null &&
      a.maxScore !== undefined &&
      a.maxScore > 0
  );
  if (submitted.length === 0) {
    return { mejor: null, ultima: null, primera: null, promedio: null };
  }

  const ratios = submitted.map((a) => (a.score as number) / (a.maxScore as number));

  const mejor = Math.max(...ratios);
  // Orden por submittedAt si está presente, si no por orden de aparición.
  const ordenados = submitted
    .map((a, i) => ({ a, i, r: ratios[i] }))
    .sort((x, y) => {
      const xs = x.a.submittedAt ?? "";
      const ys = y.a.submittedAt ?? "";
      if (xs && ys) return xs.localeCompare(ys);
      if (xs) return -1;
      if (ys) return 1;
      return x.i - y.i;
    });

  const ultima = ordenados[ordenados.length - 1].r;
  const primera = ordenados[0].r;
  const promedio = ratios.reduce((acc, r) => acc + r, 0) / ratios.length;

  return { mejor, ultima, primera, promedio };
}

export function aplicarPolitica(
  intentos: AttemptForPolicy[],
  politica: PoliticaNota
): number | null {
  const resumen = calcularNotas(intentos);
  return resumen[politica];
}

/**
 * Cuenta los intentos previos del alumno sobre un quiz.
 * Se cuentan TODOS los estados no eliminados: `in_progress`, `submitted`,
 * `pending_review`, `graded`. La idea es: si el alumno ya creó el intento,
 * ya gastó una "vida", aunque no lo haya enviado.
 */
export function contarIntentosPrevios(
  intentos: Array<{ userId: string; quizId: string; status: string }>,
  userId: string,
  quizId: string
): number {
  return intentos.filter(
    (a) => a.userId === userId && a.quizId === quizId && a.status !== "aborted"
  ).length;
}

/**
 * ¿Puede el alumno crear un nuevo intento? Devuelve `null` si sí,
 * o `{ reason, code }` si no.
 *
 *   - maxIntentos = null (ilimitado) → siempre puede.
 *   - intentosPrevios >= maxIntentos → no.
 */
export function validarLimiteIntentos(
  intentosPrevios: number,
  maxIntentos: number | null
): { allowed: true } | { allowed: false; reason: string; code: string; maxIntentos: number | null; intentosPrevios: number } {
  if (maxIntentos === null) return { allowed: true };
  if (intentosPrevios < maxIntentos) return { allowed: true };
  return {
    allowed: false,
    code: "max_attempts_reached",
    reason: `Alcanzaste el máximo de ${maxIntentos} intento(s) para este cuestionario.`,
    maxIntentos,
    intentosPrevios
  };
}
