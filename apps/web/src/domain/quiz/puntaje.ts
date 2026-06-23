/**
 * F3-03 (a) + WO-14 — Puntaje por proporción cruda + peso por dificultad.
 *
 * El puntaje de un intento se calcula POR POSICIÓN: cada posición vale
 * `posicion.puntaje`, compartido por todas sus variantes (regla del plan,
 * F3-01). Por eso dos alumnos con variantes distintas rinden por el MISMO total
 * (equidad) en el caso base.
 *
 * WO-14 — DIFICULTAD COMO FACTOR (no como rebalanceo del total): la
 * `dificultad` de la variante PRESENTADA al alumno (no la de la
 * posición) multiplica el peso de ESA instancia. Si la variante
 * elegida fue `avanzado` (factor 1.2), el `puntaje` de la posición
 * rinde 1.2× en ESE intento; si fue `basico` (0.8), rinde 0.8×. El
 * resultado es que:
 *   - La `ratio = score / maxScore` se preserva dentro de un mismo
 *     intento (no se distorsiona con la dificultad).
 *   - El `maxScore` del alumno refleja la dificultad del material
 *     que le tocó (un intento con variantes `avanzado` tiene un
 *     `maxScore` mayor que uno con `basico` — el alumno ve que la
 *     prueba difícil "valía más").
 *   - La NOTA (ratio → escala del profesor via `gradeFromConfig`)
 *     sigue dependiendo de la ratio, no del absoluto. La fundación
 *     no toca `gradeFromConfig` (es del paquete `@vb/vblang`); si
 *     el docente quiere que la nota FINAL también refleje la
 *     dificultad, eso se hace ajustando la curva de la escala, no
 *     este scorer.
 *
 * El resultado es una proporción cruda `ratio = score / maxScore`
 * que NO es una nota: la nota la produce `gradeFromConfig(ratio, scoringConfig)`
 * de `@vb/vblang` (escala del profesor, WO14) — acá NO se inventa ningún sistema
 * de notas, sólo se alimenta el ratio.
 *
 * Lógica pura y SIN imports, port byte a byte de
 * `api/src/lib/quiz-puntaje.ts`. Cualquier cambio acá DEBE reflejarse allá o los
 * tipos compartidos se desincronizan.
 */

/** Factor de dificultad (peso) por nivel. Declarado localmente para mantener
 *  el módulo SIN imports (mirror byte-a-byte con el API). Matchea los valores
 *  de `dificultadFactor` en `generadoresV2/core/types.ts`. */
const FACTOR_DIFICULTAD: Record<"basico" | "intermedio" | "avanzado", number> = {
  basico: 0.8,
  intermedio: 1.0,
  avanzado: 1.2,
};

/** Devuelve el factor de peso de una dificultad. Indefinida o ausente = 1.0
 *  (intermedio), preservando el comportamiento pre-WO-14 cuando las
 *  variantes no tenían etiqueta. */
export function factorDificultad(
  d: "basico" | "intermedio" | "avanzado" | undefined,
): number {
  if (d === "basico") return FACTOR_DIFICULTAD.basico;
  if (d === "avanzado") return FACTOR_DIFICULTAD.avanzado;
  return FACTOR_DIFICULTAD.intermedio; // intermedio o undefined
}

/** Lo mínimo que se necesita de una posición para puntuar: número y puntaje. */
export interface PosicionPuntuable {
  numero: number;
  /** Puntaje de la posición (≥ 0). 0 = no puntúa (no entra en el maxScore). */
  puntaje: number;
  /** WO-14 — Factor multiplicativo de la variante PRESENTADA. Ausente = 1.0
   *  (intermedio), preservando el comportamiento pre-WO-14 para cuestionarios
   *  v2 sin etiqueta de dificultad. NO es un atributo de la posición sino
   *  del intento concreto (cada alumno tiene su factor). */
  factorDificultad?: number;
}

export interface ResultadoPuntaje {
  /** Suma de puntajes de las posiciones acertadas (con factor WO-14). */
  score: number;
  /** Suma de puntajes de TODAS las posiciones puntuables (con factor WO-14). */
  maxScore: number;
  /** Proporción cruda score/maxScore ∈ [0,1], o null si maxScore = 0 (N/A). */
  ratio: number | null;
}

/**
 * Calcula el puntaje de un intento a partir de las posiciones (con su puntaje a
 * nivel posición) y el conjunto de posiciones acertadas (por `numero`).
 *
 * - `maxScore`: suma de `puntaje * factorDificultad` de todas las posiciones
 *   (las de puntaje 0 no suman, quedando efectivamente excluidas).
 * - `score`: suma de `puntaje * factorDificultad` de las posiciones cuyo
 *   `numero` está en `acertadas`.
 * - `ratio`: `score/maxScore`, o `null` cuando `maxScore = 0` (mismo contrato
 *   `rawRatio = null` que espera `gradeFromConfig`).
 *
 * WO-14 — `factorDificultad` se aplica por POSICIÓN, leyendo el campo
 * opcional de cada `PosicionPuntuable`. Si está ausente, vale 1.0
 * (intermedio). Esto preserva back-compat: los call sites que pasan
 * `{numero, puntaje}` sin factor se comportan idéntico a pre-WO-14.
 */
export function puntajePorPosiciones(
  posiciones: readonly PosicionPuntuable[],
  acertadas: ReadonlySet<number>,
): ResultadoPuntaje {
  let score = 0;
  let maxScore = 0;
  for (const pos of posiciones) {
    const wBase = pos.puntaje > 0 ? pos.puntaje : 0;
    const factor = pos.factorDificultad !== undefined ? pos.factorDificultad : 1;
    const w = wBase * factor;
    maxScore += w;
    if (w > 0 && acertadas.has(pos.numero)) score += w;
  }
  const ratio = maxScore > 0 ? score / maxScore : null;
  return { score, maxScore, ratio };
}

/**
 * `maxScore` de un cuestionario: el total contra el que rinden TODOS los alumnos,
 * independiente de qué variante le tocó a cada uno (verificación de equidad).
 */
export function maxScoreCuestionario(posiciones: readonly PosicionPuntuable[]): number {
  let maxScore = 0;
  for (const pos of posiciones) maxScore += pos.puntaje > 0 ? pos.puntaje : 0;
  return maxScore;
}

/**
 * F4-03 — Reparto del puntaje por tema (sección).
 *
 * Dado un cuestionario con posiciones que tienen `temaPrincipal` y `puntaje`,
 * agrupa los puntos por tema. La "sección" que ve el docente en el editor es
 * un tema del modelo F3-01: una posición con `temaPrincipal = "algebra"`
 * pertenece a la sección "Álgebra". Si la posición tiene `temaSecundario`, se
 * reparte 50/50 entre principal y secundario (regla documentada; consistente
 * con el hecho de que `temaSecundario` no aumenta el total — el tema principal
 * sigue siendo el "dueño" de la posición).
 *
 * Devuelve un objeto { temaId -> { score, maxScore, ratio } } donde:
 *   - `maxScore` = suma del puntaje de las posiciones del tema (con `puntaje > 0`).
 *   - `score`    = suma del puntaje de las posiciones del tema en `acertadas`.
 *   - `ratio`    = `score/maxScore` o `null` si `maxScore = 0`.
 *
 * Los temas SIN posiciones se omiten del resultado (no se infieren temas vacíos).
 *
 * Importante: si dos posiciones del mismo tema suman 10 puntos, pero el alumno
 * acertó una sola de 3 puntos, `score = 3, maxScore = 10, ratio = 0.3` — igual
 * que `puntajePorPosiciones` para ese subconjunto.
 */
export interface PosicionConTema extends PosicionPuntuable {
  temaPrincipal: string;
  temaSecundario?: string;
}

export interface RepartoPorTema {
  score: number;
  maxScore: number;
  ratio: number | null;
}

export function puntajePorTema(
  cuestionario: { posiciones: readonly PosicionConTema[] },
  acertadas: ReadonlySet<number>
): Record<string, RepartoPorTema> {
  const out: Record<string, RepartoPorTema> = {};
  const ensure = (id: string): RepartoPorTema => {
    if (!out[id]) out[id] = { score: 0, maxScore: 0, ratio: null };
    return out[id];
  };
  for (const pos of cuestionario.posiciones) {
    const wBase = pos.puntaje > 0 ? pos.puntaje : 0;
    if (wBase === 0) continue; // las posiciones con puntaje 0 no entran ni al total
                                // ni a la distribución por tema.
    // WO-14 — el factor de dificultad se aplica a la posición ANTES del
    // split 50/50 entre tema principal y secundario. Así la masa sigue
    // conservada (la suma por tema = `puntaje * factor` para esa posición)
    // y el reparto refleja la dificultad real del material presentado.
    const factor = pos.factorDificultad !== undefined ? pos.factorDificultad : 1;
    const w = wBase * factor;
    const acertada = acertadas.has(pos.numero);
    if (pos.temaSecundario && pos.temaSecundario !== pos.temaPrincipal) {
      // Split 50/50 entre principal y secundario: cada uno carga w/2 de maxScore,
      // y si la posición fue acertada, también w/2 de score. La suma de las
      // contribuciones es exactamente `w` (masa conservada).
      const mitad = w / 2;
      const principal = ensure(pos.temaPrincipal);
      principal.maxScore += mitad;
      if (acertada) principal.score += mitad;
      const secundario = ensure(pos.temaSecundario);
      secundario.maxScore += mitad;
      if (acertada) secundario.score += mitad;
    } else {
      const principal = ensure(pos.temaPrincipal);
      principal.maxScore += w;
      if (acertada) principal.score += w;
    }
  }
  // Calculamos ratios.
  for (const id of Object.keys(out)) {
    const r = out[id];
    r.ratio = r.maxScore > 0 ? r.score / r.maxScore : null;
  }
  return out;
}

/**
 * F4-03 — Total del cuestionario (suma de `puntaje` de todas las posiciones
 * con `puntaje > 0`). Es un alias semántico de `maxScoreCuestionario` para
 * la UI ("total" se ve más natural en el panel de reparto que "maxScore").
 */
export function puntajeTotalCuestionario(
  cuestionario: { posiciones: readonly PosicionPuntuable[] }
): number {
  return maxScoreCuestionario(cuestionario.posiciones);
}

/**
 * F4-03 — Versión del reparto que también devuelve el total (en un solo
 * recorrido, para evitar doble pasada en el render). Pensado para alimentar
 * al panel "Reparto por sección" en una sola llamada.
 */
export function resumenPuntaje(cuestionario: {
  posiciones: readonly PosicionConTema[];
  temas: ReadonlyArray<{ id: string; nombre: string }>;
  acertadas?: ReadonlySet<number>;
}): {
  total: number;
  porTema: Record<string, RepartoPorTema & { nombre: string }>;
} {
  const acertadas = cuestionario.acertadas ?? new Set<number>();
  const distribucion = puntajePorTema({ posiciones: cuestionario.posiciones }, acertadas);
  const nombres = new Map(cuestionario.temas.map((t) => [t.id, t.nombre] as const));
  const porTema: Record<string, RepartoPorTema & { nombre: string }> = {};
  for (const id of Object.keys(distribucion)) {
    const r = distribucion[id];
    porTema[id] = { ...r, nombre: nombres.get(id) ?? id };
  }
  return {
    total: puntajeTotalCuestionario({ posiciones: cuestionario.posiciones }),
    porTema
  };
}
