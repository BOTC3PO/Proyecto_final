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

// WO-9 — Modo de presentación del cuestionario al alumno. Mirror de
// `api/src/lib/quiz-intentos.ts`. Default `lista` (preserva el
// comportamiento previo a WO-9).
export type ModoPresentacion = "lista" | "una_por_pantalla" | "paginado";

export const MODOS_PRESENTACION_VALIDOS: ModoPresentacion[] = [
  "lista",
  "una_por_pantalla",
  "paginado",
];

/** WO-9 — tamaño de página por defecto cuando `modoPresentacion === "paginado"`. */
export const PREGUNTAS_POR_PAGINA_DEFAULT = 5;

/** WO-9 — modo de presentación por defecto. Usado cuando el campo no está
 *  persistido (preserva el comportamiento previo a WO-9). */
export const MODO_PRESENTACION_DEFAULT: ModoPresentacion = "lista";

// WO-14 — Política de ruteo de DIFICULTAD. Define CÓMO se elige la
// variante cuando el cuestionario tiene `Variante.dificultad` etiquetada.
// Es RUTEO sobre material congelado (no generación en vivo).
//  - `fija`: se usa `dificultadInicial` para todas las posiciones. La
//    selección sortea una variante con esa dificultad (o vecindad ±1 si
//    no hay exacta), con sin-repetición.
//  - `manual`: la fundación la trata como `fija` (la per-posición por
//    el profe queda fuera de alcance; preserva la API).
//  - `adaptativa_simple`: la dificultad se mueve ±1 nivel según las
//    últimas `dificultadVentana` respuestas (regla pura
//    `proximaDificultad` de `sorteo.ts`); la fundación provee la
//    función pura, su wireado per-slide es WO-XX (roadmap).
export type PoliticaDificultad = "fija" | "manual" | "adaptativa_simple";

export const POLITICAS_DIFICULTAD_VALIDAS: PoliticaDificultad[] = [
  "fija",
  "manual",
  "adaptativa_simple",
];

/** WO-14 — Política por defecto: `fija` (preserva el comportamiento
 *  pre-WO-14, donde la dificultad se ignoraba). Cuestionarios nuevos
 *  pueden cambiarla desde el editor. */
export const POLITICA_DIFICULTAD_DEFAULT: PoliticaDificultad = "fija";

/** WO-14 — Dificultad inicial por defecto. `intermedio` evita tanto la
 *  frustración de arrancar en `avanzado` como el aburrimiento de
 *  arrancar en `basico`. */
export const DIFICULTAD_INICIAL_DEFAULT: "basico" | "intermedio" | "avanzado" =
  "intermedio";

/** WO-14 — Ventana por defecto para la política `adaptativa_simple`:
 *  cuántas respuestas mirar antes de subir/bajar 1 nivel. */
export const DIFICULTAD_VENTANA_DEFAULT = 2;

/** WO-14 — Saturación del clamp de ventana (mínimo/máximo permitido). */
export const DIFICULTAD_VENTANA_MIN = 1;
export const DIFICULTAD_VENTANA_MAX = 10;

// PLAN-D §1 — Política de cierre por expiración de un intento con timer.
//  - `auto`: al vencer el timer (+ margen de red), el server materializa el
//    intento como enviado con lo respondido hasta ahí.
//  - `gracia60`: da 60s extra para terminar la pregunta actual antes de
//    auto-enviar.
export type PoliticaExpiracion = "auto" | "gracia60";

export const POLITICAS_EXPIRACION_VALIDAS: PoliticaExpiracion[] = ["auto", "gracia60"];

export const POLITICA_EXPIRACION_DEFAULT: PoliticaExpiracion = "auto";

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
  /** WO-9 — modo de presentación del cuestionario al alumno. Default `lista`. */
  modoPresentacion: ModoPresentacion;
  /** WO-9 — tamaño de página cuando `modoPresentacion === "paginado"`. */
  preguntasPorPagina: number;
  /** WO-14 — política de ruteo por dificultad. Default `fija`. */
  politicaDificultad: PoliticaDificultad;
  /** WO-14 — dificultad inicial cuando `politicaDificultad !== "adaptativa_simple"`
   *  o cuando no hay historial previo. Default `intermedio`. */
  dificultadInicial: "basico" | "intermedio" | "avanzado";
  /** WO-14 — ventana (N últimas respuestas) que mira la política
   *  `adaptativa_simple` para subir/bajar 1 nivel. Default 2. */
  dificultadVentana: number;
  /** PLAN-D §1 — qué hace el server cuando vence el timer sin submit.
   *  Sólo tiene efecto si `timerSegundos !== null`. Default `auto`. */
  politicaExpiracion: PoliticaExpiracion;
};

export type EvaluacionConfigInput = Partial<{
  timerSegundos: number | null;
  fullscreenOnStart: boolean;
  maxIntentos: number | null;
  politicaNota: string | null;
  politicaSorteo: string | null;
  ocultarPuntos: boolean;
  modoPresentacion: string | null;
  preguntasPorPagina: number | null;
  politicaDificultad: string | null;
  dificultadInicial: string | null;
  dificultadVentana: number | null;
  politicaExpiracion: string | null;
}>;

export const DEFAULT_EVALUACION_CONFIG: Record<QuizTipo, EvaluacionConfig> = {
  practica: {
    timerSegundos: null,
    fullscreenOnStart: false,
    maxIntentos: null,
    politicaNota: "mejor",
    politicaSorteo: "fijo_por_alumno",
    ocultarPuntos: false,
    // WO-9 — defaults de modo de presentación. Preservan el
    // comportamiento previo a WO-9 (lista, todo en una pantalla).
    modoPresentacion: "lista",
    preguntasPorPagina: PREGUNTAS_POR_PAGINA_DEFAULT,
    // WO-14 — defaults de ruteo por dificultad. Preservan el
    // comportamiento previo a WO-14: la dificultad se ignora
    // (`fija` + `intermedio` = el docente no tocó nada).
    politicaDificultad: POLITICA_DIFICULTAD_DEFAULT,
    dificultadInicial: DIFICULTAD_INICIAL_DEFAULT,
    dificultadVentana: DIFICULTAD_VENTANA_DEFAULT,
    politicaExpiracion: POLITICA_EXPIRACION_DEFAULT
  },
  formal: {
    timerSegundos: null, // default conservador — el docente activa explícitamente
    fullscreenOnStart: true,
    maxIntentos: 3,
    politicaNota: "ultima",
    politicaSorteo: "fijo_por_alumno",
    ocultarPuntos: false,
    modoPresentacion: "lista",
    preguntasPorPagina: PREGUNTAS_POR_PAGINA_DEFAULT,
    politicaDificultad: POLITICA_DIFICULTAD_DEFAULT,
    dificultadInicial: DIFICULTAD_INICIAL_DEFAULT,
    dificultadVentana: DIFICULTAD_VENTANA_DEFAULT,
    politicaExpiracion: POLITICA_EXPIRACION_DEFAULT
  },
  competencia: {
    timerSegundos: 600, // 10 min — preserva el hardcode de QuizAttempt.tsx pre-F4-04
    fullscreenOnStart: false,
    maxIntentos: null,
    politicaNota: "mejor",
    politicaSorteo: "fijo_por_alumno",
    ocultarPuntos: false,
    modoPresentacion: "lista",
    preguntasPorPagina: PREGUNTAS_POR_PAGINA_DEFAULT,
    politicaDificultad: POLITICA_DIFICULTAD_DEFAULT,
    dificultadInicial: DIFICULTAD_INICIAL_DEFAULT,
    dificultadVentana: DIFICULTAD_VENTANA_DEFAULT,
    politicaExpiracion: POLITICA_EXPIRACION_DEFAULT
  }
};

/** Rango válido para el timer (segundos). Null/undefined/0 = sin timer. */
export const TIMER_SEGUNDOS_MIN = 30;
export const TIMER_SEGUNDOS_MAX = 60 * 60 * 3; // 3 horas — tope arbitrario, suficiente para exámenes largos.

/** WO-3b — margen de gracia para latencia de red al enforcar el timer server-side. */
export const TIMER_GRACE_SECONDS = 30;

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

function coerceModoPresentacion(raw: unknown, fallback: ModoPresentacion): ModoPresentacion {
  if (
    typeof raw === "string" &&
    (MODOS_PRESENTACION_VALIDOS as string[]).includes(raw)
  ) {
    return raw as ModoPresentacion;
  }
  return fallback;
}

function coercePreguntasPorPagina(raw: unknown, fallback: number): number {
  if (typeof raw === "number" && Number.isFinite(raw) && raw >= 1) {
    return Math.floor(raw);
  }
  if (typeof raw === "string") {
    const trimmed = raw.trim();
    if (trimmed) {
      const n = Number(trimmed);
      if (Number.isFinite(n) && n >= 1) return Math.floor(n);
    }
  }
  return fallback;
}

/** WO-14 — Coacciona un valor arbitrario a `PoliticaDificultad`. Si es
 *  inválido, devuelve el fallback (default: `POLITICA_DIFICULTAD_DEFAULT`). */
function coercePoliticaDificultad(
  raw: unknown,
  fallback: PoliticaDificultad,
): PoliticaDificultad {
  if (typeof raw === "string" && (POLITICAS_DIFICULTAD_VALIDAS as string[]).includes(raw)) {
    return raw as PoliticaDificultad;
  }
  return fallback;
}

/** WO-14 — Coacciona un valor arbitrario a `Dificultad`
 *  (`basico` | `intermedio` | `avanzado`). Si es inválido, devuelve el
 *  fallback (default: `DIFICULTAD_INICIAL_DEFAULT`). Reutiliza el helper
 *  `coerceDificultad` de `posiciones.ts` (mismo dominio). */
function coerceDificultad(
  raw: unknown,
  fallback: "basico" | "intermedio" | "avanzado",
): "basico" | "intermedio" | "avanzado" {
  if (typeof raw === "string" && ["basico", "intermedio", "avanzado"].includes(raw)) {
    return raw as "basico" | "intermedio" | "avanzado";
  }
  return fallback;
}

/** WO-14 — Coacciona la ventana de `adaptativa_simple`. Clamp al rango
 *  `[DIFICULTAD_VENTANA_MIN, DIFICULTAD_VENTANA_MAX]`. Si el valor es
 *  inválido (NaN, no-finito, fuera de rango), devuelve el fallback. */
function coerceDificultadVentana(raw: unknown, fallback: number): number {
  let n: number | undefined;
  if (typeof raw === "number" && Number.isFinite(raw)) n = raw;
  else if (typeof raw === "string") {
    const trimmed = raw.trim();
    if (trimmed) {
      const parsed = Number(trimmed);
      if (Number.isFinite(parsed)) n = parsed;
    }
  }
  if (n === undefined) return fallback;
  if (n < DIFICULTAD_VENTANA_MIN) return DIFICULTAD_VENTANA_MIN;
  if (n > DIFICULTAD_VENTANA_MAX) return DIFICULTAD_VENTANA_MAX;
  return Math.floor(n);
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

/** PLAN-D §1 — Coacciona un valor arbitrario a `PoliticaExpiracion`. Si es
 *  inválido, devuelve el fallback (default: `POLITICA_EXPIRACION_DEFAULT`). */
function coercePoliticaExpiracion(
  raw: unknown,
  fallback: PoliticaExpiracion
): PoliticaExpiracion {
  if (typeof raw === "string" && (POLITICAS_EXPIRACION_VALIDAS as string[]).includes(raw)) {
    return raw as PoliticaExpiracion;
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
    ocultarPuntos: coerceOcultarPuntos(parsed.ocultarPuntos, defaults.ocultarPuntos),
    // WO-9 — modo de presentación. Ausente o inválido cae al default
    // (`lista`), preservando el comportamiento previo a WO-9.
    modoPresentacion: coerceModoPresentacion(parsed.modoPresentacion, defaults.modoPresentacion),
    preguntasPorPagina: coercePreguntasPorPagina(
      parsed.preguntasPorPagina,
      defaults.preguntasPorPagina
    ),
    // WO-14 — ruteo por dificultad. Ausente o inválido cae al default
    // (`fija` + `intermedio` + ventana 2), preservando el comportamiento
    // previo a WO-14 (la dificultad se ignoraba). Los campos siempre se
    // persisten (mismo criterio que los demás): así el editor puede saber
    // qué eligió el docente sin recalcular defaults.
    politicaDificultad: coercePoliticaDificultad(
      parsed.politicaDificultad,
      defaults.politicaDificultad
    ),
    dificultadInicial: coerceDificultad(
      parsed.dificultadInicial,
      defaults.dificultadInicial
    ),
    dificultadVentana: coerceDificultadVentana(
      parsed.dificultadVentana,
      defaults.dificultadVentana
    ),
    // PLAN-D §1 — política de cierre por expiración. Ausente o inválida cae
    // al default del tipo (`auto`).
    politicaExpiracion: coercePoliticaExpiracion(
      parsed.politicaExpiracion,
      defaults.politicaExpiracion
    )
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
    ocultarPuntos: config.ocultarPuntos,
    // WO-9 — modo de presentación + tamaño de página.
    modoPresentacion: config.modoPresentacion,
    preguntasPorPagina: config.preguntasPorPagina,
    // WO-14 — ruteo por dificultad. Se persisten siempre (no son
    // opcionales): así el editor puede saber qué eligió el docente
    // sin recalcular defaults.
    politicaDificultad: config.politicaDificultad,
    dificultadInicial: config.dificultadInicial,
    dificultadVentana: config.dificultadVentana,
    politicaExpiracion: config.politicaExpiracion
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

/**
 * WO-3b — Calcula el deadline ISO de un intento a partir de su startedAt y el
 * timerSegundos configurado. Devuelve `null` si no hay timer.
 */
export function calcularDeadline(
  startedAt: string | Date,
  timerSegundos: number | null
): string | null {
  if (timerSegundos === null) return null;
  const start = typeof startedAt === "string" ? new Date(startedAt) : startedAt;
  if (isNaN(start.getTime())) return null;
  return new Date(start.getTime() + timerSegundos * 1000).toISOString();
}

/**
 * WO-3b — Valida si el intento excedió el tiempo límite.
 *
 * Devuelve `{ exceeded: false }` si no hay timer o el tiempo es válido.
 * Devuelve `{ exceeded: true, elapsedSec, limitSec }` si se excedió el
 * timer + margen de gracia (TIMER_GRACE_SECONDS).
 *
 * El submit NO se rechaza (para no perder trabajo del alumno), pero el flag
 * `tiempoExcedido` se persiste en el `grading` JSON para que el docente lo vea.
 */
export function validarTiempoLimite(
  startedAt: string | Date,
  timerSegundos: number | null,
  now?: Date
): { exceeded: false } | { exceeded: true; elapsedSec: number; limitSec: number } {
  if (timerSegundos === null) return { exceeded: false };
  const start = typeof startedAt === "string" ? new Date(startedAt) : startedAt;
  if (isNaN(start.getTime())) return { exceeded: false };
  const ref = now ?? new Date();
  const elapsedSec = Math.floor((ref.getTime() - start.getTime()) / 1000);
  if (elapsedSec <= timerSegundos + TIMER_GRACE_SECONDS) {
    return { exceeded: false };
  }
  return { exceeded: true, elapsedSec, limitSec: timerSegundos };
}

/**
 * PLAN-D §1 (Fase 3) — ¿el server debe auto-cerrar YA este intento con
 * timer? Distinto de `validarTiempoLimite` (que sólo marca `tiempoExcedido`
 * en un submit explícito): esta función decide si un intento `in_progress`
 * que el alumno NUNCA envió debe materializarse como enviado-automático en
 * el próximo GET/answer/submit que lo toque (cierre lazy, sin cron).
 *
 * `gracia60` corre la ventana 60s más allá del timer (para terminar la
 * pregunta actual); ambas políticas conservan el margen de red
 * `TIMER_GRACE_SECONDS` para no cerrar por una latencia normal.
 */
export function debeAutoCerrarIntento(
  startedAt: string | Date,
  timerSegundos: number | null,
  politicaExpiracion: PoliticaExpiracion,
  now?: Date
): boolean {
  if (timerSegundos === null) return false;
  const start = typeof startedAt === "string" ? new Date(startedAt) : startedAt;
  if (isNaN(start.getTime())) return false;
  const ref = now ?? new Date();
  const elapsedSec = Math.floor((ref.getTime() - start.getTime()) / 1000);
  const graciaExtra = politicaExpiracion === "gracia60" ? 60 : 0;
  return elapsedSec > timerSegundos + graciaExtra + TIMER_GRACE_SECONDS;
}
