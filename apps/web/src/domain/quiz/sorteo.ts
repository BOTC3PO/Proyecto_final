/**
 * F3-02 + WO-14 — Motor de sorteo por posición, determinista por alumno.
 *
 * Dado un cuestionario por posiciones (F3-01), la identidad del alumno y el
 * intento, elige QUÉ VARIANTE de cada posición le toca a ese alumno. Es
 * server-side, puro y determinista: misma entrada → misma salida, en cualquier
 * dispositivo y en cualquier llamada (anticopia + cross-device "gratis").
 *
 * Lo que VARÍA por alumno es sólo la variante elegida dentro de cada posición.
 * La posición en sí (número, tema, puntaje) es FIJA para todos —
 * referenciabilidad: "la posición 3" es la misma posición/tema para toda la
 * clase, sólo cambia la letra. El barajado ENTRE temas (qué posiciones y en qué
 * orden) ocurre al ARMAR el cuestionario (una vez, fijo para todos) y por eso
 * vive en el orden ya almacenado de `cuestionario.posiciones`, no acá.
 *
 * Reusa el PRNG y el patrón EXACTO de selección de `quiz-composition.ts`
 * (`DeterministicPrng` + `prng.int(0, n-1)`, igual que `pickVariante`): no se
 * inventa otro generador. La política por defecto es `fijo_por_alumno` (decisión
 * del plan ronda 2/7): el sorteo NO depende del intento, así un alumno ve la
 * misma variante entre reintentos y dispositivos.
 *
 * Port byte a byte de `api/src/lib/quiz-sorteo.ts` (sólo difieren las líneas de
 * import). Cualquier cambio acá DEBE reflejarse allá.
 *
 * ── WO-14 — Selección por dificultad (fundación) ────────────────
 * `elegirVariantePorDificultad` es un nuevo selector que, sobre el
 * MISMO pool de variantes ya congelado, elige cuál presentar según la
 * `dificultad` deseada. Es RUTEO, NO generación: el docente etiqueta
 * a/b/c con basico / intermedio / avanzado al armar el cuestionario
 * (`Variante.dificultad?`, ver `posiciones.ts`), y este selector elige
 * cuál mostrar. El resultado es reproducible por seed y respeta
 * sin-repetición + agotamiento (mismo patrón que
 * `elegirVarianteSinRepeticion`). `sortearCuestionarioPorDificultadFija`
 * aplica el selector a TODO el cuestionario para la política
 * `politicaDificultad: "fija"` (única política que la fundación
 * wirea contra el sorteo al-crear-intento). La política
 * `adaptativa_simple` aporta la regla pura `proximaDificultad`; su
 * wireado per-slide es tarea de la integración cliente/servidor
 * (WO-XX, roadmap).
 */

import { DeterministicPrng } from "../../generadoresV2/core/prng";
import {
  DIFICULTADES_VALIDAS,
  coerceDificultad,
  dificultadIndice,
  dificultadVecina,
  type CuestionarioPosiciones,
  type Dificultad,
  type Posicion,
  type PosicionTipo,
  type Variante,
} from "./posiciones";

/**
 * Política de estabilidad del sorteo entre intentos:
 *  - `fijo_por_alumno` (default, plan ronda 2/7): la variante NO cambia entre
 *    intentos ni dispositivos. El `intento` no entra en el seed.
 *  - `por_intento`: cada intento puede re-sortear (el `intento` entra en el seed).
 * La no-repetición real entre intentos (F3-03) requiere ESTADO y no se resuelve
 * sólo con esta política; ver decisión de persistencia más abajo.
 */
export type PoliticaSorteo = "fijo_por_alumno" | "por_intento";

export interface ContextoSorteo {
  /** Identidad del alumno (estable). Distintos alumnos → distinto sorteo. */
  alumnoId: string;
  /**
   * Identidad estable del quiz. Usar el `quizVersionId` para atar el sorteo al
   * contenido de la versión (recomendado: una versión nueva re-sortea), o el
   * `quizId` si se quiere estabilidad entre versiones.
   */
  quizId: string;
  /** Número de intento. Sólo afecta la selección si `politica = "por_intento"`. */
  intento?: number;
  /** Política de estabilidad. Default `fijo_por_alumno`. */
  politica?: PoliticaSorteo;
}

/** Selección concreta de una posición para un alumno. */
export interface SeleccionPosicion {
  numero: number;
  tipo: PosicionTipo;
  temaPrincipal: string;
  temaSecundario?: string;
  /** Puntaje de la posición (compartido por todas las variantes — F3-01). */
  puntaje: number;
  /** Letra de la variante elegida. */
  letra: string;
  /** La variante elegida completa. */
  variante: Variante;
  /** Dificultad efectiva de la variante elegida (WO-14). Indefinida si la
   *  variante no tenía `dificultad` etiquetada (v2 / legacy). */
  dificultad: Dificultad | undefined;
  /** Seed usado para elegir esta posición — auditable/reproducible. */
  seed: string;
}

export interface SorteoResultado {
  alumnoId: string;
  quizId: string;
  intento: number;
  politica: PoliticaSorteo;
  selecciones: SeleccionPosicion[];
}

/**
 * Seed determinista de una posición. Incluye quiz + alumno + número de posición
 * (cada posición es independiente y estable). El intento sólo entra bajo la
 * política `por_intento`, y se pone al FRENTE del seed: el hash rodante del
 * `DeterministicPrng` (`h = 31*h + c`) amplifica una diferencia temprana en
 * muchas iteraciones, mientras que dos seeds que sólo difieren en el último
 * carácter (p. ej. `…intento1`/`…intento2`) producen estados casi idénticos y
 * la misma elección. Por eso el componente que DEBE variar va primero.
 */
export function seedPosicion(
  quizId: string,
  alumnoId: string,
  numero: number,
  politica: PoliticaSorteo,
  intento: number,
): string {
  const base = `${quizId}::${alumnoId}::pos${numero}`;
  return politica === "por_intento" ? `i${intento}::${base}` : base;
}

/**
 * Elige una variante de un pool de forma determinista por seed — patrón EXACTO
 * de `pickVariante` (DeterministicPrng + `int(0, n-1)`). Un pool de una sola
 * variante (p. ej. `fijo`) devuelve esa variante sin consumir aleatoriedad.
 */
export function elegirVariante(variantes: Variante[], seed: string): Variante {
  if (variantes.length <= 1) return variantes[0];
  const prng = new DeterministicPrng(seed);
  return variantes[prng.int(0, variantes.length - 1)];
}

/**
 * F3-03 (b/c) — Historial de variantes ya vistas por un alumno: por número de
 * posición, cuántas veces vio cada letra. Se reconstruye por REPLAY de los
 * intentos previos (`derivarHistorialVistas`), no requiere persistirse.
 */
export type HistorialVistas = Record<number, Record<string, number>>;

/**
 * F3-03 (b/c) — Elige una variante aplicando SIN-REPETICIÓN y AGOTAMIENTO:
 * prefiere las variantes MENOS vistas (las no vistas tienen conteo 0). Mientras
 * quede material nuevo nunca repite una vista; cuando TODAS fueron vistas (pool
 * agotado) la regla se SUAVIZA y cicla por las menos vistas (no bloquea el
 * reintento — las paramétricas re-generan valores aunque el enunciado se repita,
 * plan ronda 5). El desempate entre candidatas con igual conteo es determinista
 * por seed (mismo patrón que `elegirVariante`). Con historial vacío equivale a
 * `elegirVariante`.
 */
export function elegirVarianteSinRepeticion(
  variantes: Variante[],
  seed: string,
  vistas: Record<string, number>,
): Variante {
  if (variantes.length <= 1) return variantes[0];
  let min = Infinity;
  for (const v of variantes) {
    const c = vistas[v.letra] ?? 0;
    if (c < min) min = c;
  }
  const candidatas = variantes.filter((v) => (vistas[v.letra] ?? 0) === min);
  if (candidatas.length === 1) return candidatas[0];
  const prng = new DeterministicPrng(seed);
  return candidatas[prng.int(0, candidatas.length - 1)];
}

function seleccionarPosicion(
  pos: Posicion,
  ctx: { quizId: string; alumnoId: string; politica: PoliticaSorteo; intento: number },
  vistas: HistorialVistas,
  selector: (variantes: Variante[], seed: string, vistas: Record<string, number>) => Variante = elegirVarianteSinRepeticion,
): SeleccionPosicion {
  const seed = seedPosicion(ctx.quizId, ctx.alumnoId, pos.numero, ctx.politica, ctx.intento);
  // `fijo` siempre usa su única variante (no depende del seed ni del historial);
  // el pool sortea con el selector provisto (default: sin-repetición; WO-14
  // puede pasar `elegirVariantePorDificultad` para ruteo por dificultad).
  const variante =
    pos.tipo === "fijo"
      ? pos.variantes[0]
      : selector(pos.variantes, seed, vistas[pos.numero] ?? {});
  const out: SeleccionPosicion = {
    numero: pos.numero,
    tipo: pos.tipo,
    temaPrincipal: pos.temaPrincipal,
    puntaje: pos.puntaje,
    letra: variante.letra,
    variante,
    // WO-14 — la dificultad efectiva de la variante elegida se propaga al
    // `SeleccionPosicion` para que el scorer (`puntaje.ts`) y el runner
    // puedan usarla. Indefinida = variante legacy sin etiqueta.
    dificultad: variante.dificultad,
    seed,
  };
  if (pos.temaSecundario !== undefined) out.temaSecundario = pos.temaSecundario;
  return out;
}

/**
 * Sortea, para un alumno, la variante de cada posición del cuestionario, dado un
 * historial de variantes ya vistas (sin-repetición). Puro y determinista.
 *
 * WO-14 — `selector` opcional: si se provee, se usa como selector por
 * posición (en lugar del default `elegirVarianteSinRepeticion`). El
 * selector de dificultad (`elegirVariantePorDificultad`) entra por
 * acá. El default preserva el comportamiento previo a WO-14.
 */
export function sortearCuestionarioConVistas(
  cuestionario: CuestionarioPosiciones,
  ctx: ContextoSorteo,
  vistas: HistorialVistas,
  selector?: (variantes: Variante[], seed: string, vistas: Record<string, number>) => Variante,
): SorteoResultado {
  const politica = ctx.politica ?? "fijo_por_alumno";
  const intento = ctx.intento ?? 1;
  const selecciones = cuestionario.posiciones.map((pos) =>
    seleccionarPosicion(
      pos,
      { quizId: ctx.quizId, alumnoId: ctx.alumnoId, politica, intento },
      vistas,
      selector,
    ),
  );
  return { alumnoId: ctx.alumnoId, quizId: ctx.quizId, intento, politica, selecciones };
}

/**
 * Sortea, para un alumno, la variante de cada posición del cuestionario. Puro y
 * determinista: la misma entrada produce siempre el mismo resultado. Sin
 * historial (primer intento o política sin sin-repetición).
 */
export function sortearCuestionario(
  cuestionario: CuestionarioPosiciones,
  ctx: ContextoSorteo,
): SorteoResultado {
  return sortearCuestionarioConVistas(cuestionario, ctx, {});
}

/** Suma al historial lo visto en una tanda de selecciones (mutando `historial`). */
function acumularVistas(historial: HistorialVistas, selecciones: SeleccionPosicion[]): void {
  for (const s of selecciones) {
    const porLetra = (historial[s.numero] ??= {});
    porLetra[s.letra] = (porLetra[s.letra] ?? 0) + 1;
  }
}

/**
 * F3-03 (b/c) — Reconstruye por REPLAY el historial de variantes vistas tras
 * `intentosPrevios` intentos. No requiere persistencia: el `QuizVersion` es
 * inmutable, así que reproducir los intentos 1..N con el mismo motor da
 * exactamente lo que el alumno vio (reproducible y auditable). Sólo se necesita
 * la CANTIDAD de intentos previos.
 */
export function derivarHistorialVistas(
  cuestionario: CuestionarioPosiciones,
  ctx: ContextoSorteo,
  intentosPrevios: number,
): HistorialVistas {
  const politica = ctx.politica ?? "fijo_por_alumno";
  const historial: HistorialVistas = {};
  for (let k = 0; k < Math.max(0, intentosPrevios); k += 1) {
    const previo = sortearCuestionarioConVistas(
      cuestionario,
      { ...ctx, intento: k + 1, politica },
      historial,
    );
    acumularVistas(historial, previo.selecciones);
  }
  return historial;
}

/**
 * F3-03 (b/c) — Sortea el intento ACTUAL de un alumno aplicando sin-repetición
 * sobre los `intentosPrevios` ya realizados (0 = primer intento), reconstruidos
 * por replay. Es el punto de entrada para los reintentos.
 */
export function sortearReintento(
  cuestionario: CuestionarioPosiciones,
  ctx: ContextoSorteo,
  intentosPrevios: number,
): SorteoResultado {
  const politica = ctx.politica ?? "fijo_por_alumno";
  const historial = derivarHistorialVistas(cuestionario, ctx, intentosPrevios);
  return sortearCuestionarioConVistas(
    cuestionario,
    { ...ctx, intento: Math.max(0, intentosPrevios) + 1, politica },
    historial,
  );
}

// ────────────────────────────────────────────────────────────────
// WO-14 — Selección por dificultad (fundación)
// ────────────────────────────────────────────────────────────────

/**
 * Dificultad inicial por defecto cuando la config no la declara. Eligir
 * `intermedio` evita tanto la frustración de arrancar en `avanzado` como el
 * aburrimiento de arrancar en `basico` (es el "punto medio natural").
 */
export const DIFICULTAD_INICIAL_DEFAULT: Dificultad = "intermedio";

/**
 * Filtra el pool a las variantes con `dificultad` estrictamente igual a
 * `desired`. Si no hay ninguna, devuelve `[]` (caller decide el fallback).
 */
function candidatasPorDificultadExacta(
  variantes: Variante[],
  desired: Dificultad,
): Variante[] {
  return variantes.filter((v) => v.dificultad === desired);
}

/**
 * Filtra el pool a las variantes con `dificultad` a una distancia
 * Manhattan de a lo sumo `toleranciaVecindad` niveles de `desired`.
 * Distancia 0 = exacta. Útil para fallback cuando no hay match exacto.
 */
function candidatasPorDificultadCercana(
  variantes: Variante[],
  desired: Dificultad,
  toleranciaVecindad: number,
): Variante[] {
  const target = dificultadIndice(desired);
  return variantes.filter((v) => {
    if (v.dificultad === undefined) return false;
    return Math.abs(dificultadIndice(v.dificultad) - target) <= toleranciaVecindad;
  });
}

/**
 * Aplica sin-repetición (y agotamiento suave) sobre un subconjunto de
 * candidatas. Si hay una sola, la devuelve sin consumir aleatoriedad.
 * Si hay varias con el mismo `vistas[letra]` mínimo, desempata por seed
 * (mismo patrón que `elegirVarianteSinRepeticion`).
 */
function elegirEntreCandidatas(
  candidatas: Variante[],
  seed: string,
  vistas: Record<string, number>,
): Variante {
  if (candidatas.length === 0) {
    throw new Error("elegirEntreCandidatas: candidatas vacío (caller bug)");
  }
  if (candidatas.length === 1) return candidatas[0];
  let min = Infinity;
  for (const v of candidatas) {
    const c = vistas[v.letra] ?? 0;
    if (c < min) min = c;
  }
  const menosVistas = candidatas.filter((v) => (vistas[v.letra] ?? 0) === min);
  if (menosVistas.length === 1) return menosVistas[0];
  const prng = new DeterministicPrng(seed);
  return menosVistas[prng.int(0, menosVistas.length - 1)];
}

/**
 * WO-14 — Elige una variante del pool intentando matchear la `dificultad`
 * deseada. RUTEO sobre material congelado: NO genera nada en vivo, sólo
 * elige entre las variantes ya materializadas por el docente.
 *
 * Orden de búsqueda (cada paso cae al siguiente si no hay candidatas):
 *  1. **Exacta** (variantes con `dificultad === desired`, sin-repetición).
 *  2. **Vecindad ±1** (basico↔intermedio, intermedio↔avanzado), sin-rep.
 *  3. **Cualquiera con `dificultad` declarada** (basico|intermedio|avanzado),
 *     sin-rep. — útil cuando el pool tiene una mezcla heterogénea y la
 *     deseada cae "lejos" (ej: deseado=avanzado, pool=basico+intermedio).
 *  4. **Variantes sin `dificultad` etiquetada** (legacy v2) — fallback
 *     final: trata a las variantes sin etiqueta como "cumplen", porque
 *     quebrar el cuestionario sería peor que aceptar un fallback neutro.
 *     En `puntaje.ts` el factor de estas variantes es 1.0 (intermedio).
 *
 * Dentro de cada nivel, se prefiere variante NO vista
 * (`vistas[letra] === 0`); si todas fueron vistas, se cicla por la menos
 * vista (mismo patrón que `elegirVarianteSinRepeticion`).
 *
 * Determinista: misma entrada → misma variante, en cualquier device.
 * Un pool de una sola variante devuelve esa variante sin consumir seed.
 */
export function elegirVariantePorDificultad(
  variantes: Variante[],
  desired: Dificultad,
  seed: string,
  vistas: Record<string, number>,
): Variante {
  if (variantes.length <= 1) return variantes[0];

  // (1) Exacta.
  const exactas = candidatasPorDificultadExacta(variantes, desired);
  if (exactas.length > 0) {
    return elegirEntreCandidatas(exactas, seed, vistas);
  }

  // (2) Vecindad ±1.
  const vecinas = candidatasPorDificultadCercana(variantes, desired, 1);
  if (vecinas.length > 0) {
    return elegirEntreCandidatas(vecinas, seed, vistas);
  }

  // (3) Cualquiera con `dificultad` declarada.
  const conDif = variantes.filter((v) => v.dificultad !== undefined);
  if (conDif.length > 0) {
    return elegirEntreCandidatas(conDif, seed, vistas);
  }

  // (4) Variantes sin `dificultad` (legacy). Mantener el comportamiento
  // pre-WO-14: tratar a las variantes sin etiqueta como un pool neutro.
  return elegirVarianteSinRepeticion(variantes, seed, vistas);
}

/**
 * WO-14 — Política `politicaDificultad: "fija"`. Sortea el cuestionario
 * completo eligiendo, en cada posición, la variante cuya `dificultad`
 * coincide con `dificultadInicial` (con fallback de vecindad y legacy
 * según `elegirVariantePorDificultad`). Para la fundación, esta es la
 * ÚNICA política que se wirea contra el sorteo al-crear-intento (la
 * `adaptativa_simple` opera per-slide, ver `proximaDificultad`).
 *
 * Puro y determinista: mismo (cuestionario, ctx, dificultadInicial,
 * intentosPrevios) → mismo resultado. El historial de sin-repetición
 * se reconstruye por replay de los `intentosPrevios` (no se
 * persiste), igual que en `sortearReintento`.
 */
export function sortearCuestionarioPorDificultadFija(
  cuestionario: CuestionarioPosiciones,
  ctx: ContextoSorteo,
  dificultadInicial: Dificultad,
  intentosPrevios: number = 0,
): SorteoResultado {
  const politica = ctx.politica ?? "fijo_por_alumno";
  const historial = derivarHistorialVistas(
    cuestionario,
    ctx,
    Math.max(0, intentosPrevios),
  );
  const ctxIntento = {
    ...ctx,
    intento: Math.max(0, intentosPrevios) + 1,
    politica,
  };
  // El selector cierra sobre la `dificultadInicial`; el seed se inyecta
  // por `seleccionarPosicion` (que firma (variantes, seed, vistas)).
  const selector = (
    variantes: Variante[],
    seed: string,
    vistas: Record<string, number>,
  ): Variante =>
    elegirVariantePorDificultad(variantes, dificultadInicial, seed, vistas);
  return sortearCuestionarioConVistas(cuestionario, ctxIntento, historial, selector);
}

/**
 * WO-14 — Política `politicaDificultad: "adaptativa_simple"` (regla pura).
 * Dada la dificultad actual del alumno y el resultado de sus últimas
 * `ventana` respuestas, devuelve la dificultad a aplicar en la próxima
 * posición. La regla es SIMPLE (no awareness de frustración, eso es
 * roadmap):
 *
 *   - Si las últimas `ventana` respuestas son TODAS correctas → sube 1 nivel.
 *   - Si son TODAS incorrectas → baja 1 nivel.
 *   - Si la ventana está incompleta (< `ventana` respuestas) → se queda
 *     (no hay suficientes datos para decidir).
 *   - Si la mezcla es parcial (no todas iguales) → se queda.
 *
 * Saturación: no sube más allá de `avanzado` ni baja más allá de `basico`
 * (usa `dificultadVecina` con clamp al rango).
 *
 * Determinista, pura y testeable. La fundación la provee para que
 * futuras integraciones la apliquen per-slide; el wireado (llamarla
 * entre preguntas) es tarea de la integración cliente/servidor
 * (WO-XX, roadmap).
 */
export function proximaDificultad(
  actual: Dificultad,
  ultimasRespuestas: ReadonlyArray<boolean>,
  ventana: number,
): Dificultad {
  const n = Math.max(1, Math.floor(ventana));
  // Ventana incompleta → no decidir. Esto evita que con 1 sola respuesta
  // correcta (en una ventana de 2) el algoritmo suba al alumno a
  // `avanzado`: la fundación es conservadora.
  if (ultimasRespuestas.length < n) return actual;
  const ultimas = ultimasRespuestas.slice(-n);
  const todasCorrectas = ultimas.every((r) => r === true);
  const todasIncorrectas = ultimas.every((r) => r === false);
  if (todasCorrectas) return dificultadVecina(actual, +1);
  if (todasIncorrectas) return dificultadVecina(actual, -1);
  return actual;
}

/**
 * WO-14 — Dificultad inicial sugerida al crear un intento, en función
 * del desempeño del alumno en intentos PREVIOS del mismo cuestionario
 * (espejo de "lo que rindió antes" para arrancar cerca de su nivel).
 *
 * Regla (pura, testeable):
 *  - Encuentra el NIVEL MÁS ALTO donde el alumno tuvo ≥ 60% de aciertos.
 *  - Sugiere UN NIVEL arriba de ése (para darle un challenge).
 *  - Si no llegó a ningún nivel con ≥ 60% (todo mal) → `intermedio`
 *    (default conservador).
 *  - Si ya estaba en `avanzado` y lo dominó → queda en `avanzado`
 *    (saturación: no sube más allá del tope).
 *  - Historial vacío (primer intento) → `intermedio` (default).
 *
 * La política `adaptativa_simple` la consume al arrancar; `fija` la
 * ignora (usa `dificultadInicial` del config).
 */
export function dificultadInicialSugerida(
  desempenoPrevio: ReadonlyArray<{ dificultad: Dificultad; correcta: boolean }>,
): Dificultad {
  if (desempenoPrevio.length === 0) return DIFICULTAD_INICIAL_DEFAULT;
  // Ratio de aciertos POR nivel, agrupando por dificultad.
  const porNivel: Record<number, { ok: number; total: number }> = {};
  for (const d of desempenoPrevio) {
    const idx = dificultadIndice(d.dificultad);
    const acc = (porNivel[idx] ??= { ok: 0, total: 0 });
    acc.total += 1;
    if (d.correcta) acc.ok += 1;
  }
  // Encuentra el nivel más alto con ≥ 60% (recorre de arriba hacia abajo).
  let mejor: number | undefined;
  for (let idx = 2; idx >= 0; idx -= 1) {
    const acc = porNivel[idx];
    if (!acc) continue;
    if (acc.ok / acc.total >= 0.6) {
      mejor = idx;
      break;
    }
  }
  if (mejor === undefined) return DIFICULTAD_INICIAL_DEFAULT;
  // Sube UN nivel desde el mejor que dominó. Saturación: no pasa de `avanzado`.
  return dificultadVecina(DIFICULTADES_VALIDAS[mejor] ?? "intermedio", +1);
}

/**
 * Re-export conveniente para que `sorteo.ts` sea la fachada pública de
 * los nuevos helpers de dificultad (mismo criterio que el resto del
 * módulo: no se acopla a otros dominios).
 */
export {
  DIFICULTADES_VALIDAS,
  coerceDificultad,
  dificultadIndice,
  dificultadVecina,
  type Dificultad,
} from "./posiciones";
