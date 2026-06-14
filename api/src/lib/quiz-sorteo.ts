/**
 * F3-02 — Motor de sorteo por posición, determinista por alumno.
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
 * Mirror byte a byte en `apps/web/src/domain/quiz/sorteo.ts` (sólo difieren las
 * líneas de import). Cualquier cambio acá DEBE reflejarse allá.
 */

import { DeterministicPrng } from "./quiz-composition";
import type {
  CuestionarioPosiciones,
  Posicion,
  PosicionTipo,
  Variante,
} from "./quiz-posiciones";

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
): SeleccionPosicion {
  const seed = seedPosicion(ctx.quizId, ctx.alumnoId, pos.numero, ctx.politica, ctx.intento);
  // `fijo` siempre usa su única variante (no depende del seed ni del historial);
  // el pool sortea con sin-repetición sobre lo ya visto en esta posición.
  const variante =
    pos.tipo === "fijo"
      ? pos.variantes[0]
      : elegirVarianteSinRepeticion(pos.variantes, seed, vistas[pos.numero] ?? {});
  const out: SeleccionPosicion = {
    numero: pos.numero,
    tipo: pos.tipo,
    temaPrincipal: pos.temaPrincipal,
    puntaje: pos.puntaje,
    letra: variante.letra,
    variante,
    seed,
  };
  if (pos.temaSecundario !== undefined) out.temaSecundario = pos.temaSecundario;
  return out;
}

/**
 * Sortea, para un alumno, la variante de cada posición del cuestionario, dado un
 * historial de variantes ya vistas (sin-repetición). Puro y determinista.
 */
export function sortearCuestionarioConVistas(
  cuestionario: CuestionarioPosiciones,
  ctx: ContextoSorteo,
  vistas: HistorialVistas,
): SorteoResultado {
  const politica = ctx.politica ?? "fijo_por_alumno";
  const intento = ctx.intento ?? 1;
  const selecciones = cuestionario.posiciones.map((pos) =>
    seleccionarPosicion(pos, { quizId: ctx.quizId, alumnoId: ctx.alumnoId, politica, intento }, vistas),
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
