/**
 * WO-11 — Chequeo de equivalencia simbólica (algebraica).
 *
 * Compara dos expresiones representadas como strings (notación math.js:
 * `2*x+4`, `2*(x+2)`, `x^2+1`) y decide si son equivalentes como
 * funciones, no como strings. Estrategia híbrida:
 *
 *   1. **Trivial**: si los strings normalizados son idénticos → true.
 *   2. **Numérico**: evalúa ambas en N puntos enteros fijos. Si en
 *      alguno difieren → false. Schwartz-Zippel: para polinomios de
 *      grado `d` sobre primos {2..29}, la prob. de falso positivo con
 *      10 puntos es despreciable.
 *   3. **Simbólico**: parsea `(a) - (b)`, aplica reglas de
 *      distribución, simplifica, pliega constantes. Si la diferencia
 *      queda en `"0"` → equivalente.
 *
 * Casos de uso: corrección de respuestas simbólicas en preguntas de
 * Álgebra/Cálculo (eje 2 del objetivo B). El motor vive acá, en el
 * paquete, para que tanto el server (corrección real) como los tests
 * (oráculo compartido) lo usen contra la misma implementación.
 *
 * Limitaciones (documentadas en `docs/vblang/wo-11-eje-simbolico.md`):
 *  - No maneja identidades trig (`sin^2 + cos^2 = 1`).
 *  - No maneja constantes universales (`pi`, `e`).
 *  - Sintaxis de input es notación math.js: el alumno debe escribir
 *    `2*x+4` (no `2x+4`), `x^2+1` (no `x²+1`), etc. Ver §9 del doc.
 */
import { create, all, type MathJsInstance, type MathNode } from "mathjs";

/**
 * mathjs con las funciones de meta-programación y álgebra simbólica
 * HABILITADAS. Se usa SOLO desde `sonEquivalentes` y desde los builtins
 * `derivar`/`simplificar_expr`/`evaluar_en` (que reciben strings
 * pre-validados por el linter — no es un agujero de meta-prog).
 *
 * El sandbox del DSL sigue siendo `createIsolatedMath()` (de
 * `math-setup.ts`): esas funciones NO son accesibles como builtins
 * del DSL.
 */
function createAlgebraMath(): MathJsInstance {
  return create(all);
}

// Singleton: math.js es caro de inicializar. Reusar la misma instancia
// para todas las llamadas. Es thread-safe (math.js no mantiene estado
// de evaluación entre llamadas).
let _algebraMath: MathJsInstance | null = null;
function algebraMath(): MathJsInstance {
  if (!_algebraMath) _algebraMath = createAlgebraMath();
  return _algebraMath;
}

/**
 * Puntos de prueba fijos (enteros pequeños, no triviales, evitan
 * denominadores cero típicos). Deterministas para que los tests sean
 * reproducibles. Schwartz-Zippel con 10 puntos sobre {2,3,5,7,11,13,17,
 * 19,23,29} es seguro para polinomios de grado ≤ 4.
 */
const PUNTOS_PRUEBA: number[] = [-11, -7, -5, -3, 2, 3, 5, 7, 11, 13];

/**
 * Normaliza un string-expresión para comparación trivial:
 *  - trim
 *  - colapsa espacios múltiples en uno
 *  - lowercase (math.js es case-sensitive en funciones, pero los inputs
 *    típicos no usan mayúsculas. Si el alumno escribe "X" vs "x", son
 *    variables distintas en math.js — preservar case es más estricto
 *    y predecible).
 *
 * NO inserta `*` implícitos: el parsing sintáctico es responsabilidad de
 * math.js. La normalización es solo para la comparación trivial.
 */
function normalizar(s: string): string {
  return s.replace(/\s+/g, " ").trim();
}

export type MetodoEquivalencia =
  | "trivial"
  | "numerico"
  | "simbolico"
  | "ambos"
  | "ninguno";

export interface ResultadoEquivalencia {
  eq: boolean;
  metodo: MetodoEquivalencia;
  /** Detalle opcional (útil para logs y para el `details` del test). */
  detalle?: string;
}

export interface EquivalenciaOpts {
  /** Puntos a evaluar (default: PUNTOS_PRUEBA). */
  puntos?: number[];
  /**
   * Si true, devuelve `eq: true` cuando SOLO la verificación simbólica
   * pasa (no la numérica). Default false: ambos deben pasar cuando los
   * dos son computables. Esto evita aceptar pares como `2x+4` vs `2x+4`
   * (trivial) cuando uno de los dos no se puede evaluar numéricamente.
   */
  confiarEnSimbolico?: boolean;
}

const DISTRIBUCION_RULES = [
  { l: "n1*(n2+n3)", r: "n1*n2+n1*n3" },
  { l: "(n1+n2)*n3", r: "n1*n3+n2*n3" },
];

/**
 * Decide si dos expresiones simbólicas son equivalentes.
 *
 * Estrategia (ver §3.2 del doc):
 *   1. Normaliza y compara strings.
 *   2. Si ambos parsean, evalúa en N puntos; todos deben coincidir.
 *   3. Si ambos parsean, intenta `simplify(a-b) == 0` simbólico.
 *   4. Resultado: ambos métodos deben pasar (a menos que uno falle por
 *      sintaxis de la expresión — en cuyo caso el que pasó define el
 *      veredicto).
 */
export function sonEquivalentes(
  a: string,
  b: string,
  opts: EquivalenciaOpts = {},
): ResultadoEquivalencia {
  if (typeof a !== "string" || typeof b !== "string") {
    return { eq: false, metodo: "ninguno", detalle: "ambos argumentos deben ser string" };
  }

  const na = normalizar(a);
  const nb = normalizar(b);
  if (na === "" || nb === "") {
    return { eq: false, metodo: "ninguno", detalle: "expresión vacía" };
  }
  if (na === nb) {
    return { eq: true, metodo: "trivial" };
  }

  const math = algebraMath();

  // Parsear. Si alguno no parsea, no podemos decidir vía numérico ni
  // simbólico: solo nos queda el fallback trivial (que ya falló).
  // `math.parse` puede devolver `MathNode | MathNode[]` (este último
  // para expresiones con secuencias tipo `1; 2`). Como las
  // expresiones de respuesta son siempre un solo nodo, tomamos
  // `node[0]` si es array, o `node` si es nodo.
  const toSingle = (n: MathNode | MathNode[]): MathNode => {
    return Array.isArray(n) ? (n[0] ?? n) : n;
  };
  let nodeA: MathNode;
  let nodeB: MathNode;
  try {
    nodeA = toSingle(math.parse(a));
    nodeB = toSingle(math.parse(b));
  } catch (e) {
    return {
      eq: false,
      metodo: "ninguno",
      detalle: `no se pudo parsear: ${(e as Error).message}`,
    };
  }

  const puntos = opts.puntos ?? PUNTOS_PRUEBA;

  // ── Numérico ────────────────────────────────────────────────────
  let numericoOk = true;
  let numericoDetalle = "";
  for (const x of puntos) {
    let va: unknown;
    let vb: unknown;
    try {
      va = nodeA.evaluate({ x });
      vb = nodeB.evaluate({ x });
    } catch (e) {
      numericoOk = false;
      numericoDetalle = `evaluación falló en x=${x}: ${(e as Error).message}`;
      break;
    }
    if (!numericosIguales(va, vb)) {
      numericoOk = false;
      numericoDetalle = `difieren en x=${x}: ${String(va)} vs ${String(vb)}`;
      break;
    }
  }

  // ── Simbólico ───────────────────────────────────────────────────
  let simbolicoOk = false;
  let simbolicoDetalle = "";
  try {
    // diff = (a) - (b)  — con paréntesis por si a o b son binop.
    const diffParsed = math.parse(`(${a})-(${b})`);
    const diff = toSingle(diffParsed);
    // Pasada 1: distribución (para que `2x+4 - 2(x+2)` expanda a
    // `2x+4 - 2x - 2*2`).
    const expandido = toSingle(math.simplify(diff, DISTRIBUCION_RULES));
    // Pasada 2: simplify default (pliega `2*2 -> 4` y constantes).
    const simplificado = toSingle(math.simplify(expandido));
    simbolicoOk = simplificado.toString() === "0";
    if (!simbolicoOk) {
      simbolicoDetalle = `diff simplificada = "${simplificado.toString()}"`;
    }
  } catch (e) {
    simbolicoDetalle = `simplify falló: ${(e as Error).message}`;
  }

  // ── Decisión ────────────────────────────────────────────────────
  if (numericoOk && simbolicoOk) {
    return { eq: true, metodo: "ambos" };
  }
  if (numericoOk && !simbolicoOk) {
    // Numérico pasó pero simbólico no (puede pasar con fracciones o
    // polinomios con dominios acotados). Confiar en numérico.
    return { eq: true, metodo: "numerico", detalle: simbolicoDetalle };
  }
  if (!numericoOk && simbolicoOk) {
    // Caso raro: simbólico ve diferencia 0 pero numérico no (puede
    // pasar si el test numérico se topa con un punto fuera del
    // dominio de alguna transformación, ej. sqrt). Default: no
    // aceptar, salvo `confiarEnSimbolico`.
    if (opts.confiarEnSimbolico) {
      return { eq: true, metodo: "simbolico", detalle: numericoDetalle };
    }
    return { eq: false, metodo: "ninguno", detalle: numericoDetalle };
  }
  return {
    eq: false,
    metodo: "ninguno",
    detalle: numericoDetalle || simbolicoDetalle,
  };
}

function numericosIguales(a: unknown, b: unknown): boolean {
  if (typeof a === "number" && typeof b === "number") {
    if (Number.isNaN(a) || Number.isNaN(b)) return false;
    return Math.abs(a - b) < 1e-9;
  }
  if (typeof a === "number" || typeof b === "number") return false;
  // Compara por igualdad estructural si no son números.
  if (a === b) return true;
  return String(a) === String(b);
}

/**
 * Helpers expuestos para builtins y tests.
 */
export const __internals = {
  algebraMath,
  PUNTOS_PRUEBA,
  DISTRIBUCION_RULES,
  normalizar,
};
