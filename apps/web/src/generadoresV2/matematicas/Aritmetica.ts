import { BaseGenerador } from "../core/baseGenerador";
import type { PRNG } from "../core/prng";
import type { Dificultad, Ejercicio, Calculator } from "../core/types";
import { mcd, mcm } from "./helpers/estadistica";
import { formatFraccion } from "./helpers/polinomios";

// ── Helpers de módulo ─────────────────────────────────────────────────────────

function esPrimo(n: number): boolean {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function factorizarPrima(n: number): number[] {
  const factores: number[] = [];
  let r = n;
  for (let div = 2; div * div <= r; div++) {
    while (r % div === 0) { factores.push(div); r = Math.floor(r / div); }
  }
  if (r > 1) factores.push(r);
  return factores;
}

function obtenerDivisores(n: number): number[] {
  const divs: number[] = [];
  for (let i = 1; i <= n; i++) if (n % i === 0) divs.push(i);
  return divs;
}

type Frac = { n: number; d: number };

function simplificarFrac(f: Frac): Frac {
  if (f.n === 0) return { n: 0, d: 1 };
  const g = mcd(Math.abs(f.n), Math.abs(f.d));
  return { n: f.n / g, d: f.d / g };
}

function fracStr(f: Frac): string {
  const s = simplificarFrac(f);
  return formatFraccion(s.n, s.d);
}

/**
 * Selección ponderada del índice de la incógnita.
 * basico: índice 0 (resultado) tiene 70% de probabilidad.
 * avanzado: distribución uniforme.
 * intermedio: usa los pesos provistos.
 */
function elegirIncognita(prng: PRNG, dificultad: Dificultad, pesos: number[]): number {
  const n = pesos.length;
  let w: number[];
  if (dificultad === "basico") {
    const resto = 0.3 / (n - 1);
    w = pesos.map((_v, i) => (i === 0 ? 0.7 : resto));
  } else if (dificultad === "avanzado") {
    w = pesos.map(() => 1 / n);
  } else {
    const total = pesos.reduce((s, p) => s + p, 0);
    w = pesos.map(p => p / total);
  }
  let r = prng.next();
  for (let i = 0; i < w.length; i++) {
    r -= w[i];
    if (r <= 0) return i;
  }
  return w.length - 1;
}

// ── Generador ─────────────────────────────────────────────────────────────────

export class AritmeticaGenerator extends BaseGenerador {
  readonly id = "matematicas/aritmetica";
  readonly materia = "matematicas" as const;
  readonly subtipos = [
    "operaciones_basicas",
    "operaciones_combinadas",
    "numeros_primos",
    "divisibilidad",
    "multiplos_divisores",
    "fracciones",
    "decimales",
    "potencias",
    "raices",
    "porcentaje",
    "notacion_cientifica",
    "valor_absoluto",
    "inecuaciones",
    "ecuaciones_lineales",
    "ecuaciones_cuadraticas",
    "sistemas_ecuaciones",
    "sucesiones_aritmeticas",
    "sucesiones_geometricas",
    "proporcionalidad",
    "regla_de_tres",
    "estadistica_basica",
  ];

  constructor(prng: PRNG) {
    super(prng);
  }

  generarEjercicio(subtipo: string, dificultad: Dificultad, _calc: Calculator): Ejercicio {
    switch (subtipo) {
      case "operaciones_basicas":    return this.genOperacionesBasicas(dificultad);
      case "operaciones_combinadas": return this.genOperacionesCombinadas(dificultad);
      case "numeros_primos":         return this.genNumerosPrimos(dificultad);
      case "divisibilidad":          return this.genDivisibilidad(dificultad);
      case "multiplos_divisores":    return this.genMultiplosDivisores(dificultad);
      case "fracciones":             return this.genFracciones(dificultad);
      case "decimales":              return this.genDecimales(dificultad);
      case "potencias":              return this.genPotencias(dificultad);
      case "raices":                 return this.genRaices(dificultad);
      case "porcentaje":             return this.genPorcentaje(dificultad);
      default:                       return this.placeholder(subtipo);
    }
  }

  private placeholder(subtipo: string): never {
    throw new Error(`Subtipo no implementado aún: ${subtipo}`);
  }

  // ── Utilidades internas ──────────────────────────────────────────────────

  private uid(): string {
    return `${this.id}/${this.randInt(100000, 999999)}`;
  }

  private distractoresNum(correcto: number, cantidad = 3): string[] {
    const seen = new Set<number>([correcto]);
    const result: string[] = [];
    const offsets = [1, 2, 3, 5, 7, 10, 11, 13];
    for (const o of offsets) {
      if (result.length >= cantidad) break;
      const v = correcto + (this.prng.next() < 0.5 ? o : -o);
      if (!seen.has(v)) { seen.add(v); result.push(String(v)); }
    }
    while (result.length < cantidad) {
      const extra = correcto + result.length * 3 + 4;
      if (!seen.has(extra)) { seen.add(extra); result.push(String(extra)); }
    }
    return result;
  }

  // ── 1. Operaciones básicas ───────────────────────────────────────────────

  private genOperacionesBasicas(d: Dificultad): Ejercicio {
    type Op = { sym: string; fn: (a: number, b: number) => number };
    const SUMA: Op = { sym: "+", fn: (a, b) => a + b };
    const REST: Op = { sym: "−", fn: (a, b) => a - b };
    const MULT: Op = { sym: "×", fn: (a, b) => a * b };
    const DIVI: Op = { sym: "÷", fn: (a, b) => a / b };

    let ops: Op[], a: number, b: number;
    if (d === "basico") {
      ops = [SUMA, REST];
      a = this.randInt(1, 20); b = this.randInt(1, 20);
    } else if (d === "intermedio") {
      ops = [SUMA, REST, MULT];
      a = this.randInt(1, 100); b = this.randInt(1, 100);
    } else {
      ops = [SUMA, REST, MULT, DIVI];
      a = this.randInt(-100, 100); b = this.randInt(-100, 100);
    }

    let op = this.pickOne(ops);

    // Para división: garantizar resultado entero positivo
    if (op.sym === "÷") {
      b = this.randInt(1, 12);
      a = b * this.randInt(1, 12);
    }
    // Para resta en basico/intermedio: evitar resultado negativo
    if (op.sym === "−" && d !== "avanzado" && b > a) {
      const tmp = a; a = b; b = tmp;
    }

    const c = op.fn(a, b);
    const inc = elegirIncognita(this.prng, d, [1, 1, 1]);

    let enunciado: string;
    let respuesta: number;
    if (inc === 1) {
      enunciado = `□ ${op.sym} ${b} = ${c}. ¿Cuál es el número que falta?`;
      respuesta = a;
    } else if (inc === 2) {
      enunciado = `${a} ${op.sym} □ = ${c}. ¿Cuál es el número que falta?`;
      respuesta = b;
    } else {
      enunciado = `¿Cuánto es ${a} ${op.sym} ${b}?`;
      respuesta = c;
    }

    return this.crearQuiz({
      id: this.uid(), materia: this.materia, subtipo: "operaciones_basicas", dificultad: d,
      enunciado,
      opciones: [String(respuesta), ...this.distractoresNum(respuesta)],
      indiceCorrecto: 0,
    });
  }

  // ── 2. Operaciones combinadas ────────────────────────────────────────────

  private genOperacionesCombinadas(d: Dificultad): Ejercicio {
    if (d === "avanzado") {
      const a = this.randInt(-20, 20);
      const b = this.randInt(1, 20);
      const c = this.randInt(1, 10);
      const ops = ["+", "−", "×"] as const;
      const op1 = this.pickOne([...ops]);
      const op2 = this.pickOne([...ops]);
      const inner = op1 === "×" ? a * b : op1 === "−" ? a - b : a + b;
      const result = op2 === "×" ? inner * c : op2 === "−" ? inner - c : inner + c;
      return this.crearQuiz({
        id: this.uid(), materia: this.materia, subtipo: "operaciones_combinadas", dificultad: d,
        enunciado: `¿Cuánto es (${a} ${op1} ${b}) ${op2} ${c}?`,
        opciones: [String(result), ...this.distractoresNum(result)],
        indiceCorrecto: 0,
        explicacion: `Primero la operación entre paréntesis: ${a} ${op1} ${b} = ${inner}. Luego: ${inner} ${op2} ${c} = ${result}.`,
      });
    }

    if (d === "intermedio") {
      const a = this.randInt(1, 20);
      const b = this.randInt(1, 20);
      const c = this.randInt(1, 20);
      // Respetar precedencia: × antes que +/−
      const leftMult = this.prng.next() < 0.5;
      const op1 = leftMult ? "×" : "+";
      const op2 = leftMult ? "+" : "×";
      const result = leftMult ? a * b + c : a + b * c;
      const explicacion = leftMult
        ? `La multiplicación tiene precedencia: ${a} × ${b} = ${a * b}, luego ${a * b} + ${c} = ${result}.`
        : `La multiplicación tiene precedencia: ${b} × ${c} = ${b * c}, luego ${a} + ${b * c} = ${result}.`;
      return this.crearQuiz({
        id: this.uid(), materia: this.materia, subtipo: "operaciones_combinadas", dificultad: d,
        enunciado: `¿Cuánto es ${a} ${op1} ${b} ${op2} ${c}?`,
        opciones: [String(result), ...this.distractoresNum(result)],
        indiceCorrecto: 0, explicacion,
      });
    }

    // basico: solo + y −
    const a = this.randInt(1, 15);
    const b = this.randInt(1, 15);
    const c = this.randInt(1, 15);
    const op1 = this.pickOne(["+", "−"]);
    const op2 = this.pickOne(["+", "−"]);
    const left = op1 === "−" ? a - b : a + b;
    const result = op2 === "−" ? left - c : left + c;
    return this.crearQuiz({
      id: this.uid(), materia: this.materia, subtipo: "operaciones_combinadas", dificultad: d,
      enunciado: `¿Cuánto es ${a} ${op1} ${b} ${op2} ${c}?`,
      opciones: [String(result), ...this.distractoresNum(result)],
      indiceCorrecto: 0,
    });
  }

  // ── 3. Números primos ────────────────────────────────────────────────────

  private genNumerosPrimos(d: Dificultad): Ejercicio {
    if (d === "basico") {
      const x = this.randInt(2, 50);
      const es = esPrimo(x);
      return this.crearQuiz({
        id: this.uid(), materia: this.materia, subtipo: "numeros_primos", dificultad: d,
        enunciado: `¿Es ${x} un número primo?`,
        opciones: ["Sí", "No"],
        indiceCorrecto: es ? 0 : 1,
        explicacion: es
          ? `${x} es primo porque solo es divisible entre 1 y ${x}.`
          : `${x} no es primo. Sus divisores son: ${obtenerDivisores(x).join(", ")}.`,
      });
    }

    if (d === "intermedio") {
      const x = this.randInt(4, 100);
      const factores = factorizarPrima(x);
      const correcta = factores.join(" × ");
      const alt1 = factorizarPrima(x + 1).join(" × ");
      const alt2 = factorizarPrima(x - 1 > 1 ? x - 1 : x + 2).join(" × ");
      const alt3 = factores.map(f => f + 1).join(" × ");
      return this.crearQuiz({
        id: this.uid(), materia: this.materia, subtipo: "numeros_primos", dificultad: d,
        enunciado: `¿Cuál es la factorización prima de ${x}?`,
        opciones: [correcta, alt1, alt2, alt3],
        indiceCorrecto: 0,
        explicacion: `${x} = ${correcta}`,
      });
    }

    // avanzado: MCD/MCM mediante factorización
    const a = this.randInt(4, 50);
    const b = this.randInt(4, 50);
    const esMCD = this.prng.next() < 0.5;
    const resp = esMCD ? mcd(a, b) : mcm(a, b);
    const label = esMCD ? "MCD" : "MCM";
    const fa = factorizarPrima(a).join(" × ");
    const fb = factorizarPrima(b).join(" × ");
    return this.crearQuiz({
      id: this.uid(), materia: this.materia, subtipo: "numeros_primos", dificultad: d,
      enunciado: `Usando la factorización prima, calcula el ${label}(${a}, ${b}).`,
      opciones: [String(resp), ...this.distractoresNum(resp)],
      indiceCorrecto: 0,
      explicacion: `${a} = ${fa}; ${b} = ${fb}. ${label}(${a}, ${b}) = ${resp}.`,
    });
  }

  // ── 4. Divisibilidad ─────────────────────────────────────────────────────

  private genDivisibilidad(d: Dificultad): Ejercicio {
    if (d === "avanzado") {
      const a = this.randInt(2, 20);
      const b = this.randInt(2, 20);
      const c = this.randInt(2, 20);
      const esMCD = this.prng.next() < 0.5;
      const resp = esMCD ? mcd(mcd(a, b), c) : mcm(mcm(a, b), c);
      const label = esMCD ? "MCD" : "MCM";
      return this.crearQuiz({
        id: this.uid(), materia: this.materia, subtipo: "divisibilidad", dificultad: d,
        enunciado: `Calcula el ${label}(${a}, ${b}, ${c}).`,
        opciones: [String(resp), ...this.distractoresNum(resp)],
        indiceCorrecto: 0,
      });
    }

    const max = d === "basico" ? 20 : 100;
    const a = this.randInt(2, max);
    const b = this.randInt(2, max);
    const esMCD = this.prng.next() < 0.5;
    const resp = esMCD ? mcd(a, b) : mcm(a, b);
    const label = esMCD ? "MCD" : "MCM";
    return this.crearQuiz({
      id: this.uid(), materia: this.materia, subtipo: "divisibilidad", dificultad: d,
      enunciado: `Calcula el ${label}(${a}, ${b}).`,
      opciones: [String(resp), ...this.distractoresNum(resp)],
      indiceCorrecto: 0,
    });
  }

  // ── 5. Múltiplos y divisores ─────────────────────────────────────────────

  private genMultiplosDivisores(d: Dificultad): Ejercicio {
    const tipo = this.randInt(0, 2);

    if (tipo === 0) {
      // listar divisores
      const maxN = d === "basico" ? 30 : d === "intermedio" ? 60 : 100;
      const x = this.randInt(6, maxN);
      const divs = obtenerDivisores(x);
      const correcta = divs.join(", ");
      const alt1 = obtenerDivisores(x + 1).join(", ");
      const alt2 = obtenerDivisores(x + 2).join(", ");
      const alt3 = divs.slice(0, -1).join(", "); // falta el último
      return this.crearQuiz({
        id: this.uid(), materia: this.materia, subtipo: "multiplos_divisores", dificultad: d,
        enunciado: `¿Cuáles son todos los divisores de ${x}?`,
        opciones: [correcta, alt1, alt2, alt3],
        indiceCorrecto: 0,
      });
    }

    if (tipo === 1) {
      // primeros 5 múltiplos
      const maxBase = d === "basico" ? 10 : d === "intermedio" ? 20 : 30;
      const x = this.randInt(2, maxBase);
      const correcta = Array.from({ length: 5 }, (_v, i) => x * (i + 1)).join(", ");
      const alt1 = Array.from({ length: 5 }, (_v, i) => x * (i + 2)).join(", ");
      const alt2 = Array.from({ length: 5 }, (_v, i) => (x + 1) * (i + 1)).join(", ");
      const alt3 = Array.from({ length: 5 }, (_v, i) => x * i).join(", ");
      return this.crearQuiz({
        id: this.uid(), materia: this.materia, subtipo: "multiplos_divisores", dificultad: d,
        enunciado: `¿Cuáles son los primeros 5 múltiplos de ${x}?`,
        opciones: [correcta, alt1, alt2, alt3],
        indiceCorrecto: 0,
      });
    }

    // ¿X es múltiplo de Y?
    const y = this.randInt(2, 10);
    const isMultiple = this.prng.next() < 0.5;
    const factor = this.randInt(2, 10);
    const x = isMultiple ? y * factor : y * factor + this.randInt(1, y - 1);
    return this.crearQuiz({
      id: this.uid(), materia: this.materia, subtipo: "multiplos_divisores", dificultad: d,
      enunciado: `¿Es ${x} múltiplo de ${y}?`,
      opciones: ["Sí", "No"],
      indiceCorrecto: isMultiple ? 0 : 1,
      explicacion: isMultiple
        ? `Sí, ${x} = ${y} × ${Math.round(x / y)}.`
        : `No, ${x} ÷ ${y} = ${Math.floor(x / y)} con resto ${x % y}.`,
    });
  }

  // ── 6. Fracciones ────────────────────────────────────────────────────────

  private genFracciones(d: Dificultad): Ejercicio {
    if (d === "basico") {
      // mismo denominador
      const den = this.randInt(2, 10);
      const n1 = this.randInt(1, den);
      const n2 = this.randInt(1, den);
      const op = this.pickOne(["+", "−"] as const);
      const numRes = op === "+" ? n1 + n2 : Math.abs(n1 - n2);
      const correcta = fracStr({ n: numRes, d: den });
      return this.crearQuiz({
        id: this.uid(), materia: this.materia, subtipo: "fracciones", dificultad: d,
        enunciado: `¿Cuánto es ${n1}/${den} ${op} ${n2}/${den}?`,
        opciones: [correcta, fracStr({ n: numRes + 1, d: den }), fracStr({ n: numRes, d: den + 1 }), fracStr({ n: numRes - 1 > 0 ? numRes - 1 : numRes + 2, d: den })],
        indiceCorrecto: 0,
        explicacion: `Se mantiene el denominador: (${n1} ${op} ${n2})/${den} = ${numRes}/${den} = ${correcta}.`,
      });
    }

    if (d === "intermedio") {
      // denominadores distintos
      const den1 = this.randInt(2, 8);
      const den2 = this.randInt(2, 8);
      const n1 = this.randInt(1, den1);
      const n2 = this.randInt(1, den2);
      const op = this.pickOne(["+", "−", "×", "÷"] as const);
      let res: Frac;
      if (op === "+") res = { n: n1 * den2 + n2 * den1, d: den1 * den2 };
      else if (op === "−") res = { n: n1 * den2 - n2 * den1, d: den1 * den2 };
      else if (op === "×") res = { n: n1 * n2, d: den1 * den2 };
      else res = { n: n1 * den2, d: den1 * n2 };
      const correcta = fracStr(res);
      return this.crearQuiz({
        id: this.uid(), materia: this.materia, subtipo: "fracciones", dificultad: d,
        enunciado: `¿Cuánto es ${n1}/${den1} ${op} ${n2}/${den2}?`,
        opciones: [correcta, fracStr({ n: res.n + 1, d: res.d }), fracStr({ n: res.n, d: res.d + 1 }), fracStr({ n: res.n + 2, d: res.d })],
        indiceCorrecto: 0,
      });
    }

    // avanzado: número mixto + simplificación
    const entero = this.randInt(1, 5);
    const den = this.randInt(2, 8);
    const num = this.randInt(1, den - 1);
    // convertir número mixto a fracción impropia
    const improp: Frac = { n: entero * den + num, d: den };
    const n2 = this.randInt(1, den);
    const res: Frac = { n: improp.n + n2, d: den };
    const correcta = fracStr(res);
    return this.crearQuiz({
      id: this.uid(), materia: this.materia, subtipo: "fracciones", dificultad: d,
      enunciado: `Simplifica y calcula: ${entero} ${num}/${den} + ${n2}/${den}.`,
      opciones: [correcta, fracStr({ n: res.n + 1, d: den }), fracStr({ n: res.n - 1, d: den }), fracStr({ n: res.n, d: den + 1 })],
      indiceCorrecto: 0,
      explicacion: `${entero} ${num}/${den} = ${improp.n}/${den}. Sumando: ${improp.n}/${den} + ${n2}/${den} = ${res.n}/${den} = ${correcta}.`,
    });
  }

  // ── 7. Decimales ─────────────────────────────────────────────────────────

  private genDecimales(d: Dificultad): Ejercicio {
    if (d === "avanzado") {
      // conversión fracción ↔ decimal
      const fracs: Array<[number, number, number]> = [
        [1, 4, 0.25], [3, 4, 0.75], [1, 5, 0.2], [2, 5, 0.4],
        [1, 8, 0.125], [3, 8, 0.375], [1, 2, 0.5], [1, 10, 0.1],
      ];
      const [fn, fd, fv] = this.pickOne(fracs);
      const toDecimal = this.prng.next() < 0.5;
      if (toDecimal) {
        return this.crearQuiz({
          id: this.uid(), materia: this.materia, subtipo: "decimales", dificultad: d,
          enunciado: `Convierte a decimal: ${fn}/${fd}`,
          opciones: [String(fv), String(fv + 0.1), String(fv + 0.25), String(fv - 0.1 > 0 ? fv - 0.1 : fv + 0.05)],
          indiceCorrecto: 0,
        });
      }
      return this.crearQuiz({
        id: this.uid(), materia: this.materia, subtipo: "decimales", dificultad: d,
        enunciado: `Convierte a fracción: ${fv}`,
        opciones: [`${fn}/${fd}`, `${fn + 1}/${fd}`, `${fn}/${fd + 1}`, `${fn * 2}/${fd * 2 + 1}`],
        indiceCorrecto: 0,
      });
    }

    const decimals = d === "basico" ? 1 : 2;
    const factor = Math.pow(10, decimals);
    const a = Math.round(this.randFloat(0.1, 9.9, decimals) * factor) / factor;
    const b = Math.round(this.randFloat(0.1, 9.9, decimals) * factor) / factor;
    const op = d === "basico" ? this.pickOne(["+", "−"] as const) : this.pickOne(["+", "−", "×"] as const);
    let res: number;
    if (op === "×") res = this.redondear(a * b, decimals * 2);
    else if (op === "−") res = this.redondear(Math.abs(a - b), decimals);
    else res = this.redondear(a + b, decimals);
    return this.crearQuiz({
      id: this.uid(), materia: this.materia, subtipo: "decimales", dificultad: d,
      enunciado: `¿Cuánto es ${a} ${op} ${b}?`,
      opciones: [String(res), String(this.redondear(res + 0.1, decimals)), String(this.redondear(res - 0.1 > 0 ? res - 0.1 : res + 0.2, decimals)), String(this.redondear(res + 1, decimals))],
      indiceCorrecto: 0,
    });
  }

  // ── 8. Potencias ─────────────────────────────────────────────────────────

  private genPotencias(d: Dificultad): Ejercicio {
    if (d === "avanzado") {
      // potencia de potencia: (a^m)^n = a^(m*n)
      const a = this.randInt(2, 5);
      const m = this.randInt(2, 4);
      const n = this.randInt(2, 3);
      const exp = m * n;
      const res = Math.pow(a, exp);
      return this.crearQuiz({
        id: this.uid(), materia: this.materia, subtipo: "potencias", dificultad: d,
        enunciado: `Simplifica y calcula (${a}^${m})^${n}.`,
        opciones: [String(res), String(Math.pow(a, m + n)), String(Math.pow(a, m * n + 1)), String(Math.pow(a + 1, exp))],
        indiceCorrecto: 0,
        explicacion: `(${a}^${m})^${n} = ${a}^(${m}×${n}) = ${a}^${exp} = ${res}.`,
      });
    }

    if (d === "intermedio") {
      // exponente 0 y negativo
      const a = this.randInt(2, 10);
      const useZero = this.prng.next() < 0.5;
      if (useZero) {
        return this.crearQuiz({
          id: this.uid(), materia: this.materia, subtipo: "potencias", dificultad: d,
          enunciado: `¿Cuánto es ${a}^0?`,
          opciones: ["1", "0", String(a), String(-a)],
          indiceCorrecto: 0,
          explicacion: `Cualquier número distinto de 0 elevado a 0 es 1.`,
        });
      }
      const n = this.randInt(1, 3);
      const correcta = formatFraccion(1, Math.pow(a, n));
      return this.crearQuiz({
        id: this.uid(), materia: this.materia, subtipo: "potencias", dificultad: d,
        enunciado: `¿Cuánto es ${a}^(−${n})?`,
        opciones: [correcta, `−${Math.pow(a, n)}`, formatFraccion(1, Math.pow(a, n + 1)), formatFraccion(1, Math.pow(a, n) + 1)],
        indiceCorrecto: 0,
        explicacion: `${a}^(−${n}) = 1/${a}^${n} = 1/${Math.pow(a, n)} = ${correcta}.`,
      });
    }

    // basico: potencias positivas
    const base = this.randInt(2, 10);
    const exp = this.randInt(2, 4);
    const res = Math.pow(base, exp);
    return this.crearQuiz({
      id: this.uid(), materia: this.materia, subtipo: "potencias", dificultad: d,
      enunciado: `¿Cuánto es ${base}^${exp}?`,
      opciones: [String(res), ...this.distractoresNum(res)],
      indiceCorrecto: 0,
      explicacion: `${base}^${exp} = ${Array.from({ length: exp }, () => base).join(" × ")} = ${res}.`,
    });
  }

  // ── 9. Raíces ────────────────────────────────────────────────────────────

  private genRaices(d: Dificultad): Ejercicio {
    if (d === "avanzado") {
      // operaciones con radicales: √a + √a = 2√a, etc.
      const k = this.randInt(2, 5);
      const radicando = this.pickOne([2, 3, 5, 6, 7]);
      const coef = k + k;
      return this.crearQuiz({
        id: this.uid(), materia: this.materia, subtipo: "raices", dificultad: d,
        enunciado: `Simplifica: ${k}√${radicando} + ${k}√${radicando}.`,
        opciones: [`${coef}√${radicando}`, `${k}√${radicando * 2}`, `${k * k}√${radicando}`, `${coef}√${radicando * 2}`],
        indiceCorrecto: 0,
        explicacion: `${k}√${radicando} + ${k}√${radicando} = (${k}+${k})√${radicando} = ${coef}√${radicando}.`,
      });
    }

    if (d === "intermedio") {
      // simplificación de radicales: √(a²·b) = a·√b
      const a = this.randInt(2, 5);
      const b = this.pickOne([2, 3, 5, 6, 7]);
      const radicando = a * a * b;
      return this.crearQuiz({
        id: this.uid(), materia: this.materia, subtipo: "raices", dificultad: d,
        enunciado: `Simplifica: √${radicando}.`,
        opciones: [`${a}√${b}`, `${a + 1}√${b}`, `${a}√${b + 1}`, `${a * 2}√${b}`],
        indiceCorrecto: 0,
        explicacion: `√${radicando} = √(${a}²·${b}) = ${a}√${b}.`,
      });
    }

    // basico: raíces exactas
    const squares = [4, 9, 16, 25, 36, 49, 64, 81, 100];
    const cubes = [8, 27, 64, 125];
    const useSqrt = this.prng.next() < 0.7;
    if (useSqrt) {
      const n2 = this.pickOne(squares);
      const res = Math.round(Math.sqrt(n2));
      return this.crearQuiz({
        id: this.uid(), materia: this.materia, subtipo: "raices", dificultad: d,
        enunciado: `¿Cuánto es √${n2}?`,
        opciones: [String(res), ...this.distractoresNum(res)],
        indiceCorrecto: 0,
      });
    }
    const n3 = this.pickOne(cubes);
    const res = Math.round(Math.cbrt(n3));
    return this.crearQuiz({
      id: this.uid(), materia: this.materia, subtipo: "raices", dificultad: d,
      enunciado: `¿Cuánto es ∛${n3}?`,
      opciones: [String(res), ...this.distractoresNum(res)],
      indiceCorrecto: 0,
    });
  }

  // ── 10. Porcentaje ───────────────────────────────────────────────────────

  private genPorcentaje(d: Dificultad): Ejercicio {
    const pcts = d === "basico"
      ? [10, 20, 25, 50]
      : d === "intermedio"
      ? [5, 10, 15, 20, 25, 30, 40, 50, 75]
      : [5, 10, 15, 20, 25, 30, 33, 40, 50, 60, 75, 80];

    const pct = this.pickOne(pcts);
    const base = d === "basico"
      ? this.randInt(1, 20) * 10
      : this.randInt(10, 500);
    const valor = this.redondear((pct / 100) * base, 2);

    const inc = elegirIncognita(this.prng, d, [1, 1, 1]);

    if (inc === 0) {
      // calcular el % de la base
      return this.crearQuiz({
        id: this.uid(), materia: this.materia, subtipo: "porcentaje", dificultad: d,
        enunciado: `¿Cuánto es el ${pct}% de ${base}?`,
        opciones: [String(valor), ...this.distractoresNum(valor)],
        indiceCorrecto: 0,
        explicacion: `${pct}% × ${base} = (${pct}/100) × ${base} = ${valor}.`,
      });
    }

    if (inc === 1) {
      // encontrar la base original: valor es el resultado
      return this.crearQuiz({
        id: this.uid(), materia: this.materia, subtipo: "porcentaje", dificultad: d,
        enunciado: `El ${pct}% de un número es ${valor}. ¿Cuál es ese número?`,
        opciones: [String(base), ...this.distractoresNum(base)],
        indiceCorrecto: 0,
        explicacion: `Si el ${pct}% = ${valor}, entonces el total = ${valor} × (100/${pct}) = ${base}.`,
      });
    }

    // inc === 2: encontrar el porcentaje
    return this.crearQuiz({
      id: this.uid(), materia: this.materia, subtipo: "porcentaje", dificultad: d,
      enunciado: `¿Qué porcentaje de ${base} es ${valor}?`,
      opciones: [`${pct}%`, `${pct + 5}%`, `${pct - 5 > 0 ? pct - 5 : pct + 10}%`, `${pct * 2}%`],
      indiceCorrecto: 0,
      explicacion: `(${valor} / ${base}) × 100 = ${pct}%.`,
    });
  }
}
