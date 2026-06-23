import type { PRNG } from "../runtime/prng.js";
import { EvalError } from "./errors.js";
import type { IsolatedMath } from "./math-setup.js";
import { __internals } from "./symbolic.js";

export type BuiltinFn = (...args: unknown[]) => unknown;

function compareValues(a: unknown, b: unknown): number {
  if (typeof a === "number" && typeof b === "number") return a - b;
  return String(a).localeCompare(String(b));
}

function expectInt(name: string, value: unknown, position: string): number {
  if (typeof value !== "number" || !Number.isInteger(value)) {
    throw new EvalError(
      `${name}: ${position} debe ser entero, recibió ${value}`,
    );
  }
  return value;
}

function expectNumber(name: string, value: unknown, position: string): number {
  if (typeof value !== "number") {
    throw new EvalError(
      `${name}: ${position} debe ser número, recibió ${typeof value}`,
    );
  }
  return value;
}

function expectArray(name: string, value: unknown, position: string): unknown[] {
  if (!Array.isArray(value)) {
    throw new EvalError(
      `${name}: ${position} debe ser array, recibió ${typeof value}`,
    );
  }
  return value;
}

export function createBuiltins(
  prng: PRNG,
  math: IsolatedMath,
): Record<string, BuiltinFn> {
  return {
    // ---- Aleatoriedad
    random: (min, max) => prng.int(min as number, max as number),
    random_float: (min, max, dec) =>
      prng.float(
        min as number,
        max as number,
        dec as number | undefined,
      ),
    uno_de: (arr) => {
      if (!Array.isArray(arr)) {
        throw new EvalError(`uno_de espera un array`);
      }
      if (arr.length === 0) {
        throw new EvalError(`uno_de: array vacío`);
      }
      return prng.pick(arr as unknown[]);
    },
    n_de: (arr, n) => {
      if (!Array.isArray(arr)) {
        throw new EvalError(`n_de espera un array`);
      }
      return prng.sample(arr as unknown[], n as number);
    },
    mezclar: (arr) => {
      if (!Array.isArray(arr)) {
        throw new EvalError(`mezclar espera un array`);
      }
      return prng.shuffle(arr as unknown[]);
    },

    // ---- Strings
    capitalizar: (s) => {
      const str = String(s);
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
    mayusculas: (s) => String(s).toUpperCase(),
    minusculas: (s) => String(s).toLowerCase(),
    concatenar: (...args) => args.map((a) => String(a)).join(""),
    longitud: (s) => {
      if (typeof s === "string" || Array.isArray(s)) return s.length;
      throw new EvalError(
        `longitud() requiere string o array, recibió ${typeof s}`,
      );
    },

    // ---- Aritméticas (override sqrt para detectar NaN)
    sqrt: (x) => {
      const v = Math.sqrt(x as number);
      if (Number.isNaN(v)) {
        throw new EvalError(`sqrt(${x}) no es real`);
      }
      return v;
    },
    raiz: (x, n) => {
      const xn = x as number;
      const nn = n as number;
      if (nn === 0) throw new EvalError(`raiz: índice 0 no es válido`);
      const v = Math.pow(xn, 1 / nn);
      if (Number.isNaN(v)) {
        throw new EvalError(`raiz(${xn}, ${nn}) no es real`);
      }
      return v;
    },
    redondear: (x, n) => {
      const factor = Math.pow(10, (n as number | undefined) ?? 0);
      return Math.round((x as number) * factor) / factor;
    },
    signo: (x) => Math.sign(x as number),
    abs: (x) => {
      const v = x as number;
      if (typeof v !== "number") {
        throw new EvalError(`abs: argumento debe ser número, recibió ${typeof v}`);
      }
      if (Number.isNaN(v)) {
        throw new EvalError(`abs(NaN) no es real`);
      }
      return Math.abs(v);
    },

    // ---- Teoría de números (WO-8)
    // mcd y mcm siempre devuelven un entero no-negativo. El signo se ignora
    // a la entrada: mcd(-12, 8) === mcd(12, 8) === 4. mcm(0, n) === 0.
    mcd: (a, b) => {
      const aa = expectInt("mcd", a, "a");
      const bb = expectInt("mcd", b, "b");
      let x = Math.abs(aa);
      let y = Math.abs(bb);
      while (y !== 0) {
        const t = y;
        y = x % y;
        x = t;
      }
      return x;
    },
    mcm: (a, b) => {
      const aa = expectInt("mcm", a, "a");
      const bb = expectInt("mcm", b, "b");
      if (aa === 0 || bb === 0) return 0;
      const g = (() => {
        let x = Math.abs(aa);
        let y = Math.abs(bb);
        while (y !== 0) {
          const t = y;
          y = x % y;
          x = t;
        }
        return x;
      })();
      return Math.abs((aa / g) * bb);
    },
    es_primo: (n) => {
      const nn = expectInt("es_primo", n, "n");
      if (nn < 2) return false;
      if (nn === 2) return true;
      if (nn % 2 === 0) return false;
      const limite = Math.floor(Math.sqrt(nn));
      for (let i = 3; i <= limite; i += 2) {
        if (nn % i === 0) return false;
      }
      return true;
    },
    divisores: (n) => {
      const nn = expectInt("divisores", n, "n");
      if (nn === 0) {
        throw new EvalError(`divisores(0) no está definido (infinitos divisores)`);
      }
      const absN = Math.abs(nn);
      const resultado: number[] = [];
      const limite = Math.floor(Math.sqrt(absN));
      for (let i = 1; i <= limite; i++) {
        if (absN % i === 0) {
          resultado.push(i);
          const cociente = absN / i;
          if (cociente !== i) resultado.push(cociente);
        }
      }
      return resultado.sort((a, b) => a - b);
    },
    factorizar: (n) => {
      const nn = expectInt("factorizar", n, "n");
      if (nn < 2) {
        throw new EvalError(`factorizar(${nn}) no está definido (requiere n ≥ 2)`);
      }
      const factores: number[] = [];
      let restante = nn;
      for (let p = 2; p * p <= restante; p++) {
        while (restante % p === 0) {
          factores.push(p);
          restante = restante / p;
        }
      }
      if (restante > 1) factores.push(restante);
      return factores;
    },

    // ---- Salida de fracción simplificada (WO-8)
    // Devuelve un string "p/q" con el signo normalizado en el numerador y el
    // denominador positivo. Pensado para `respuesta:` (string) y para
    // interpolar en enunciados/pasos. Internamente usa `mcd`.
    fraccion: (p, q) => {
      const pp = expectInt("fraccion", p, "p");
      const qq = expectInt("fraccion", q, "q");
      if (qq === 0) {
        throw new EvalError(`fraccion: denominador no puede ser 0`);
      }
      const numAbs = Math.abs(pp);
      const denAbs = Math.abs(qq);
      let x = numAbs;
      let y = denAbs;
      while (y !== 0) {
        const t = y;
        y = x % y;
        x = t;
      }
      const g = x || 1;
      let num = numAbs / g;
      let den = denAbs / g;
      // Signo: si p y q tienen signos opuestos, el resultado es negativo.
      if ((pp < 0) !== (qq < 0)) num = -num;
      return den === 1 ? `${num}` : `${num}/${den}`;
    },

    // ---- Arrays
    largo: (arr) => (arr as unknown[]).length,
    primero: (arr) => (arr as unknown[])[0],
    ultimo: (arr) => {
      const a = arr as unknown[];
      return a[a.length - 1];
    },
    sumar: (arr) => (arr as number[]).reduce((a, b) => a + b, 0),
    promedio: (arr) => {
      const a = arr as number[];
      if (a.length === 0) {
        throw new EvalError(`promedio: array vacío`);
      }
      return a.reduce((x, y) => x + y, 0) / a.length;
    },
    mediana: (arr) => {
      const a = expectArray("mediana", arr, "argumento");
      if (a.length === 0) {
        throw new EvalError(`mediana: array vacío`);
      }
      const nums = a.map((v, i) => expectNumber("mediana", v, `posición ${i}`));
      const sorted = [...nums].sort((x, y) => x - y);
      const mid = Math.floor(sorted.length / 2);
      if (sorted.length % 2 === 1) return sorted[mid];
      // Lista par: mediana matemática = promedio de los dos centrales.
      return (sorted[mid - 1] + sorted[mid]) / 2;
    },
    moda: (arr) => {
      const a = expectArray("moda", arr, "argumento");
      if (a.length === 0) {
        throw new EvalError(`moda: array vacío`);
      }
      const counts = new Map<unknown, number>();
      for (const v of a) {
        counts.set(v, (counts.get(v) ?? 0) + 1);
      }
      let bestValue: unknown = undefined;
      let bestCount = 0;
      let empates = 0;
      for (const [v, c] of counts) {
        if (c > bestCount) {
          bestValue = v;
          bestCount = c;
          empates = 1;
        } else if (c === bestCount) {
          empates++;
        }
      }
      if (bestCount <= 1) {
        // Todos los valores aparecen 1 vez: no hay moda. Devolvemos null en
        // vez de un valor arbitrario para que el caller pueda detectarlo.
        return null;
      }
      if (empates > 1) {
        // Empate entre varias modas. Devolvemos null para no elegir
        // arbitrariamente; el caller puede filtrar la entrada.
        return null;
      }
      return bestValue;
    },
    ordenar: (arr) => [...(arr as unknown[])].sort(compareValues),
    ordenar_por: (arr, campo) => {
      const a = arr as Record<string, unknown>[];
      const c = campo as string;
      return [...a].sort((x, y) => compareValues(x[c], y[c]));
    },
    unico: (arr) => [...new Set(arr as unknown[])],

    // ---- Predicados
    es_numero: (x) => typeof x === "number" && isFinite(x),
    es_positivo: (x) => typeof x === "number" && x > 0,
    es_entero: (x) => typeof x === "number" && Number.isInteger(x),

    // ---- Trigonometría en grados (las versiones en radianes vienen de math.js)
    sin_deg: (x) => Math.sin(((x as number) * Math.PI) / 180),
    cos_deg: (x) => Math.cos(((x as number) * Math.PI) / 180),
    tan_deg: (x) => Math.tan(((x as number) * Math.PI) / 180),
    asin_deg: (x) => (Math.asin(x as number) * 180) / Math.PI,
    acos_deg: (x) => (Math.acos(x as number) * 180) / Math.PI,
    atan_deg: (x) => (Math.atan(x as number) * 180) / Math.PI,

    // ---- Unidades — delega a math.js
    unidad: (s) => math.unit(s as string),

    // ---- Error invocable desde el DSL
    error: (msg) => {
      throw new EvalError(String(msg));
    },

    // ---- Álgebra simbólica (WO-11) ────────────────────────────────
    // Reciben strings con notación math.js (ej. "2*x+4", "x^2+1") y
    // delegan al módulo `symbolic.ts` (que usa su propia instancia de
    // math.js, no el sandbox del DSL). NO exponen `math.parse` /
    // `math.evaluate` como builtin (sería un agujero de meta-prog).
    //
    // Uso típico:
    //   derivada: derivar("3*x^2 + 2*x + 5", "x")  → "6*x + 2"
    //   simplificar: simplificar_expr("x + x")     → "2*x"
    //   evaluar:  evaluar_en("x^2 + 1", "x", 3)    → 10
    derivar: (expr, variable) => {
      if (typeof expr !== "string") {
        throw new EvalError(`derivar: primer argumento debe ser string`);
      }
      if (typeof variable !== "string" || variable === "") {
        throw new EvalError(`derivar: segundo argumento debe ser string no vacío`);
      }
      try {
        const math = __internals.algebraMath();
        const node = math.derivative(math.parse(expr), variable);
        return math.simplify(node).toString();
      } catch (e) {
        throw new EvalError(`derivar: ${(e as Error).message}`);
      }
    },
    simplificar_expr: (expr) => {
      if (typeof expr !== "string") {
        throw new EvalError(`simplificar_expr: argumento debe ser string`);
      }
      try {
        const math = __internals.algebraMath();
        return math.simplify(expr).toString();
      } catch (e) {
        throw new EvalError(`simplificar_expr: ${(e as Error).message}`);
      }
    },
    evaluar_en: (expr, variable, valor) => {
      if (typeof expr !== "string") {
        throw new EvalError(`evaluar_en: primer argumento debe ser string`);
      }
      if (typeof variable !== "string" || variable === "") {
        throw new EvalError(`evaluar_en: segundo argumento debe ser string no vacío`);
      }
      const v = valor as number;
      if (typeof v !== "number" || !Number.isFinite(v)) {
        throw new EvalError(`evaluar_en: tercer argumento debe ser número finito`);
      }
      try {
        const math = __internals.algebraMath();
        return math.parse(expr).evaluate({ [variable]: v });
      } catch (e) {
        throw new EvalError(`evaluar_en: ${(e as Error).message}`);
      }
    },
  };
}

export function builtinNames(builtins: Record<string, BuiltinFn>): string[] {
  return Object.keys(builtins);
}

/**
 * Lista derivada de las claves de `createBuiltins`. Se usa para que el
 * autocompletado del editor de código pueda sugerir builtins sin acoplarse
 * a una lista hardcodeada: si se agrega uno nuevo a `createBuiltins` hay que
 * agregarlo acá (test de drift en `builtins-registry.test.ts` lo verifica).
 */
export const BUILTIN_NAMES: readonly string[] = [
  // Aleatoriedad
  "random",
  "random_float",
  "uno_de",
  "n_de",
  "mezclar",
  // Strings
  "capitalizar",
  "mayusculas",
  "minusculas",
  "concatenar",
  "longitud",
  // Aritmética
  "sqrt",
  "raiz",
  "redondear",
  "signo",
  "abs",
  // Teoría de números (WO-8)
  "mcd",
  "mcm",
  "es_primo",
  "divisores",
  "factorizar",
  "fraccion",
  // Arrays
  "largo",
  "primero",
  "ultimo",
  "sumar",
  "promedio",
  "mediana",
  "moda",
  "ordenar",
  "ordenar_por",
  "unico",
  // Predicados
  "es_numero",
  "es_positivo",
  "es_entero",
  // Trigonometría
  "sin_deg",
  "cos_deg",
  "tan_deg",
  "asin_deg",
  "acos_deg",
  "atan_deg",
  // Unidades
  "unidad",
  // Error invocable
  "error",
  // Álgebra simbólica (WO-11)
  "derivar",
  "simplificar_expr",
  "evaluar_en",
];
