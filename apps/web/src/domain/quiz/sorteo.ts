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
 * Port byte a byte de `api/src/lib/quiz-sorteo.ts` (sólo difieren las líneas de
 * import). Cualquier cambio acá DEBE reflejarse allá.
 */

import { DeterministicPrng } from "../../generadoresV2/core/prng";
import type {
  CuestionarioPosiciones,
  Posicion,
  PosicionTipo,
  Variante,
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

function seleccionarPosicion(
  pos: Posicion,
  ctx: { quizId: string; alumnoId: string; politica: PoliticaSorteo; intento: number },
): SeleccionPosicion {
  const seed = seedPosicion(ctx.quizId, ctx.alumnoId, pos.numero, ctx.politica, ctx.intento);
  // `fijo` siempre usa su única variante (no depende del seed); pool sortea.
  const variante = pos.tipo === "fijo" ? pos.variantes[0] : elegirVariante(pos.variantes, seed);
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
 * Sortea, para un alumno, la variante de cada posición del cuestionario. Puro y
 * determinista: la misma entrada produce siempre el mismo resultado.
 */
export function sortearCuestionario(
  cuestionario: CuestionarioPosiciones,
  ctx: ContextoSorteo,
): SorteoResultado {
  const politica = ctx.politica ?? "fijo_por_alumno";
  const intento = ctx.intento ?? 1;
  const selecciones = cuestionario.posiciones.map((pos) =>
    seleccionarPosicion(pos, { quizId: ctx.quizId, alumnoId: ctx.alumnoId, politica, intento }),
  );
  return { alumnoId: ctx.alumnoId, quizId: ctx.quizId, intento, politica, selecciones };
}
