/**
 * F3-04 + F4-04 — Política de intentos y configuración del modo evaluación.
 *
 * Mirror byte-a-byte de `api/src/lib/quiz-intentos.ts`. Cualquier cambio
 * en uno DEBE reflejarse en el otro. La función principal para el front
 * es `parseEvaluacionConfig(settingsRaw, tipo)` que devuelve el
 * `EvaluacionConfig` resuelto (con defaults por tipo aplicados).
 *
 * Lógica pura y SIN imports.
 */
export type PoliticaNota = "mejor" | "ultima" | "primera" | "promedio";

export const POLITICAS_VALIDAS: PoliticaNota[] = ["mejor", "ultima", "primera", "promedio"];

/**
 * WO-3 — Política de SORTEO de variantes (distinta de la política de NOTA).
 * Mirror de `PoliticaSorteo` de `sorteo.ts`; se declara acá (sin import, mismo
 * criterio que el resto del módulo) para incluirla en `EvaluacionConfig`.
 *  - `fijo_por_alumno`: la variante NO cambia entre intentos/dispositivos.
 *  - `por_intento`: cada intento puede re-sortear.
 */
export type PoliticaSorteo = "fijo_por_alumno" | "por_intento";

export const POLITICAS_SORTEO_VALIDAS: PoliticaSorteo[] = ["fijo_por_alumno", "por_intento"];

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

/**
 * F4-04 — Configuración de modo evaluación (timer, intentos, fullscreen).
 *
 * Agrupa la config del cuestionario que SÍ O SÍ debe estar disponible cuando
 * `type === "formal"` (modo evaluación) y que se gatea por tipo. Se persiste
 * en `QuizVersion.settings` (JSON, sin migration, patrón F3-01/F3-04).
 *
 * Decisiones de diseño (F4-04):
 *  - `timerSegundos`: null = sin timer (preserva el comportamiento previo a
 *    F4-04 para `practica`; el `10 * 60` hardcodeado para `competencia` se
 *    mantiene como default de ese tipo). Entero ≥ 1 = duración en segundos.
 *  - `fullscreenOnStart`: false por default; `formal` default true.
 *  - `maxIntentos` y `politicaNota` siguen las reglas de F3-04.
 *  - `ocultarPuntos` se conserva en este agregador para tener un único
 *    objeto de "todo lo configurable por cuestionario" en el editor.
 *
 * Defaults por tipo:
 *  - `practica`   → timer null, fullscreen false, ilimitado, mejor, mostrar.
 *  - `formal`     → timer null (conservador: docente activa), fullscreen true,
 *                   max 3, ultima nota, mostrar.
 *  - `competencia`→ timer 600 (10 min, preserva el hardcode de QuizAttempt.tsx
 *                   previo a F4-04), fullscreen false, ilimitado, mejor, mostrar.
 */
export type EvaluacionConfig = {
  /** null = sin timer. Entero ≥ 1 = segundos. */
  timerSegundos: number | null;
  fullscreenOnStart: boolean;
  /** null = ilimitado. Entero ≥ 1 = tope. 0 = ilimitado (alias). */
  maxIntentos: number | null;
  politicaNota: PoliticaNota;
  /** WO-3 — política de sorteo de variantes. Default `fijo_por_alumno`. */
  politicaSorteo: PoliticaSorteo;
  ocultarPuntos: boolean;
};

export type EvaluacionConfigInput = Partial<{
  timerSegundos: number | null;
  fullscreenOnStart: boolean;
  maxIntentos: number | null;
  politicaNota: string | null;
  politicaSorteo: string | null;
  ocultarPuntos: boolean;
}>;

export const DEFAULT_EVALUACION_CONFIG: Record<QuizTipo, EvaluacionConfig> = {
  practica: {
    timerSegundos: null,
    fullscreenOnStart: false,
    maxIntentos: null,
    politicaNota: "mejor",
    politicaSorteo: "fijo_por_alumno",
    ocultarPuntos: false
  },
  formal: {
    timerSegundos: null, // default conservador — el docente activa explícitamente
    fullscreenOnStart: true,
    maxIntentos: 3,
    politicaNota: "ultima",
    politicaSorteo: "fijo_por_alumno",
    ocultarPuntos: false
  },
  competencia: {
    timerSegundos: 600, // 10 min — preserva el hardcode de QuizAttempt.tsx pre-F4-04
    fullscreenOnStart: false,
    maxIntentos: null,
    politicaNota: "mejor",
    politicaSorteo: "fijo_por_alumno",
    ocultarPuntos: false
  }
};

/** Rango válido para el timer (segundos). Null/undefined/0 = sin timer. */
export const TIMER_SEGUNDOS_MIN = 30;
export const TIMER_SEGUNDOS_MAX = 60 * 60 * 3; // 3 horas — tope arbitrario, suficiente para exámenes largos.

function coerceTimerSegundos(raw: unknown): number | null {
  if (raw === null || raw === undefined) return null;
  if (typeof raw === "number") {
    if (!Number.isFinite(raw) || raw <= 0) return null;
    return Math.floor(raw);
  }
  if (typeof raw === "string") {
    const trimmed = raw.trim();
    if (!trimmed) return null;
    const n = Number(trimmed);
    if (!Number.isFinite(n) || n <= 0) return null;
    return Math.floor(n);
  }
  return null;
}

function coerceFullscreenOnStart(raw: unknown, fallback: boolean): boolean {
  if (typeof raw === "boolean") return raw;
  if (raw === "true" || raw === 1 || raw === "1") return true;
  if (raw === "false" || raw === 0 || raw === "0") return false;
  return fallback;
}

function coerceOcultarPuntos(raw: unknown, fallback: boolean): boolean {
  if (typeof raw === "boolean") return raw;
  if (raw === "true" || raw === 1 || raw === "1") return true;
  if (raw === "false" || raw === 0 || raw === "0") return false;
  return fallback;
}

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

function coercePoliticaSorteo(raw: unknown, fallback: PoliticaSorteo): PoliticaSorteo {
  if (typeof raw === "string" && (POLITICAS_SORTEO_VALIDAS as string[]).includes(raw)) {
    return raw as PoliticaSorteo;
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

/**
 * F4-04 — Lee la config completa de evaluación del `settings` JSON de una
 * QuizVersion, aplicando defaults por `tipo`.
 *
 * Cierra el gap de F3-04: el modelo de datos `maxIntentos`/`politicaNota`
 * ya existía pero la API de módulos no los persistía. Esta función los
 * LEE del settings; el wireado del PUT (modulos.ts) los escribe a partir
 * de la misma estructura `EvaluacionConfig` que produce este parser.
 *
 * NO lanza — si el JSON es inválido, devuelve los defaults del tipo.
 */
export function parseEvaluacionConfig(
  settingsRaw: string | null | undefined,
  tipo: QuizTipo = "practica"
): EvaluacionConfig {
  const tipoKey = (DEFAULT_EVALUACION_CONFIG[tipo] ? tipo : "practica") as QuizTipo;
  const defaults = DEFAULT_EVALUACION_CONFIG[tipoKey];

  if (!settingsRaw) return { ...defaults };

  let parsed: Record<string, unknown> | null = null;
  try {
    const j = JSON.parse(settingsRaw) as unknown;
    if (j && typeof j === "object" && !Array.isArray(j)) {
      parsed = j as Record<string, unknown>;
    }
  } catch {
    parsed = null;
  }

  if (!parsed) return { ...defaults };

  // Distinguir `0` (ilimitado EXPLÍCITO, per F3-04) de `undefined` (ausente
  // → default del tipo). Si el campo está ausente, usamos el default; si
  // está presente, lo respetamos aunque sea 0. La coerción `coerceX` puede
  // devolver `null` (= ilimitado para maxIntentos/timerSegundos), que es
  // un valor VÁLIDO y NO debe dispararse al default.
  const timerRaw = parsed.timerSegundos;
  const maxIntentosRaw = parsed.maxIntentos;
  return {
    timerSegundos:
      timerRaw === undefined || timerRaw === null
        ? defaults.timerSegundos
        : coerceTimerSegundos(timerRaw), // coerceTimerSegundos puede devolver null (= ilimitado), que es válido.
    fullscreenOnStart: coerceFullscreenOnStart(
      parsed.fullscreenOnStart,
      defaults.fullscreenOnStart
    ),
    maxIntentos:
      maxIntentosRaw === undefined || maxIntentosRaw === null
        ? defaults.maxIntentos
        : coerceMaxIntentos(maxIntentosRaw), // igual: null es válido (ilimitado).
    politicaNota: coercePoliticaNota(parsed.politicaNota, defaults.politicaNota),
    politicaSorteo: coercePoliticaSorteo(parsed.politicaSorteo, defaults.politicaSorteo),
    ocultarPuntos: coerceOcultarPuntos(parsed.ocultarPuntos, defaults.ocultarPuntos)
  };
}

/**
 * F4-04 — Convierte un `EvaluacionConfig` a los campos que se persisten en
 * `settings` (JSON). Simétrico a `parseEvaluacionConfig`. Usado por el PUT
 * de `modulos.ts`.
 */
export function serializeEvaluacionConfig(config: EvaluacionConfig): Record<string, unknown> {
  return {
    timerSegundos: config.timerSegundos ?? null,
    fullscreenOnStart: config.fullscreenOnStart,
    maxIntentos: config.maxIntentos ?? null,
    politicaNota: config.politicaNota,
    politicaSorteo: config.politicaSorteo,
    ocultarPuntos: config.ocultarPuntos
  };
}

/**
 * F4-04 — Mezcla (override) el `settings` JSON actual con los campos de
 * un `EvaluacionConfig`, preservando el resto de los campos (type, mode,
 * visibility, composition, materia, etc.). Usado por el PUT para no
 * pisar accidentalmente la config existente al actualizar la evaluación.
 */
export function mergeEvaluacionConfigIntoSettings(
  settingsRaw: string | null | undefined,
  config: EvaluacionConfig
): string {
  let base: Record<string, unknown> = {};
  if (settingsRaw) {
    try {
      const j = JSON.parse(settingsRaw) as unknown;
      if (j && typeof j === "object" && !Array.isArray(j)) {
        base = j as Record<string, unknown>;
      }
    } catch {
      base = {};
    }
  }
  const merged = { ...base, ...serializeEvaluacionConfig(config) };
  return JSON.stringify(merged);
}

/**
 * F4-04 — Clamp del timer a los rangos permitidos. Usado por la UI antes
 * de invocar el callback `onChange`, para evitar valores fuera de rango.
 */
export function clampTimerSegundos(raw: number | null): number | null {
  if (raw === null) return null;
  if (!Number.isFinite(raw) || raw <= 0) return null;
  const n = Math.floor(raw);
  if (n < TIMER_SEGUNDOS_MIN) return null; // < 30s no es útil
  if (n > TIMER_SEGUNDOS_MAX) return TIMER_SEGUNDOS_MAX;
  return n;
}
