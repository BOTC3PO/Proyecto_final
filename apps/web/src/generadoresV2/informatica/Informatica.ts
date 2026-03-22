import { BaseGenerador } from "../core/baseGenerador";
import type { PRNG } from "../core/prng";
import type { Dificultad, Ejercicio, Calculator } from "../core/types";

// ─── Helpers de conversión numérica ────────────────────────────────────────────

function toBin8(n: number): string {
  return n.toString(2).padStart(8, "0");
}

function toHex(n: number): string {
  return n.toString(16).toUpperCase().padStart(2, "0");
}

// ─── Operaciones lógicas ────────────────────────────────────────────────────────

type LogicOp = "AND" | "OR" | "XOR" | "NOT";

function evalLogic(op: LogicOp, a: number, b: number): number {
  switch (op) {
    case "AND": return a & b;
    case "OR":  return a | b;
    case "XOR": return a ^ b;
    case "NOT": return a === 0 ? 1 : 0;
  }
}

// ─── Álgebra booleana ───────────────────────────────────────────────────────────

interface ReglaBooleana {
  expresion: string;
  resultado: string;
  ley: string;
  opciones: string[];
}

const REGLAS_BASICO: ReglaBooleana[] = [
  { expresion: "A AND 1", resultado: "A", ley: "identidad", opciones: ["A", "0", "1", "NOT A"] },
  { expresion: "A OR 0",  resultado: "A", ley: "identidad", opciones: ["A", "0", "1", "NOT A"] },
  { expresion: "A AND 0", resultado: "0", ley: "nulidad",   opciones: ["A", "0", "1", "NOT A"] },
  { expresion: "A OR 1",  resultado: "1", ley: "nulidad",   opciones: ["A", "0", "1", "NOT A"] },
  { expresion: "A AND A", resultado: "A", ley: "idempotencia", opciones: ["A", "0", "1", "NOT A"] },
  { expresion: "A OR A",  resultado: "A", ley: "idempotencia", opciones: ["A", "0", "1", "NOT A"] },
  { expresion: "A AND NOT A", resultado: "0", ley: "complemento", opciones: ["A", "0", "1", "NOT A"] },
  { expresion: "A OR NOT A",  resultado: "1", ley: "complemento", opciones: ["A", "0", "1", "NOT A"] },
];

const REGLAS_INTERMEDIO: ReglaBooleana[] = [
  { expresion: "NOT(A AND B)", resultado: "NOT A OR NOT B",  ley: "De Morgan", opciones: ["NOT A OR NOT B", "NOT A AND NOT B", "A OR B", "A AND B"] },
  { expresion: "NOT(A OR B)",  resultado: "NOT A AND NOT B", ley: "De Morgan", opciones: ["NOT A OR NOT B", "NOT A AND NOT B", "A OR B", "A AND B"] },
  { expresion: "NOT(NOT A)",   resultado: "A", ley: "doble negación", opciones: ["A", "NOT A", "0", "1"] },
];

const REGLAS_AVANZADO: ReglaBooleana[] = [
  { expresion: "A AND (A OR B)", resultado: "A", ley: "absorción", opciones: ["A", "B", "A AND B", "A OR B"] },
  { expresion: "A OR (A AND B)", resultado: "A", ley: "absorción", opciones: ["A", "B", "A AND B", "A OR B"] },
  { expresion: "(A OR B) AND (A OR C)", resultado: "A OR (B AND C)", ley: "distributiva", opciones: ["A OR (B AND C)", "A AND (B OR C)", "A OR B OR C", "A AND B AND C"] },
  { expresion: "(A AND B) OR (A AND C)", resultado: "A AND (B OR C)", ley: "distributiva", opciones: ["A OR (B AND C)", "A AND (B OR C)", "A OR B OR C", "A AND B AND C"] },
];

// ─── Generador ──────────────────────────────────────────────────────────────────

export class InformaticaGenerator extends BaseGenerador {
  readonly id = "informatica/informatica";
  readonly materia = "informatica" as const;
  readonly subtipos = ["conversion_bases", "operaciones_logicas", "algebra_booleana"];

  constructor(prng: PRNG) {
    super(prng);
  }

  generarEjercicio(subtipo: string, dificultad: Dificultad, _calc: Calculator): Ejercicio {
    switch (subtipo) {
      case "conversion_bases":
        return this.genConversionBases(dificultad);
      case "operaciones_logicas":
        return this.genOperacionesLogicas(dificultad);
      case "algebra_booleana":
        return this.genAlgebraBooleana(dificultad);
      default:
        return this.genConversionBases(dificultad);
    }
  }

  // ── Conversión de bases ─────────────────────────────────────────────────────

  private genConversionBases(dificultad: Dificultad): Ejercicio {
    if (dificultad === "basico") {
      const n = this.randInt(1, 255);
      const binario = toBin8(n);
      const haciaDecimal = this.pickOne([true, false]);

      if (haciaDecimal) {
        // binario → decimal
        const errores = [Math.max(0, n - 1), n + 1, n + 8];
        const opciones = [`${n}`, ...errores.map(v => `${v}`)];
        return this.crearQuiz({
          id: `${this.id}/conversion_bases/${this.randInt(1e5, 9e5)}`,
          materia: this.materia,
          subtipo: "conversion_bases",
          dificultad,
          enunciado: `¿Cuál es el valor decimal del número binario ${binario}?`,
          opciones,
          indiceCorrecto: 0,
          explicacion: `El número binario ${binario} equivale a ${n} en decimal.`,
        });
      }

      // decimal → binario
      const errores = [Math.max(0, n - 1), n + 1, n + 2].map(v => Math.min(255, v));
      const opciones = [binario, ...errores.map(v => toBin8(v))];
      return this.crearQuiz({
        id: `${this.id}/conversion_bases/${this.randInt(1e5, 9e5)}`,
        materia: this.materia,
        subtipo: "conversion_bases",
        dificultad,
        enunciado: `¿Cuál es la representación binaria (8 bits) del número decimal ${n}?`,
        opciones,
        indiceCorrecto: 0,
        explicacion: `El decimal ${n} en binario de 8 bits es ${binario}.`,
      });
    }

    if (dificultad === "intermedio") {
      const n = this.randInt(16, 255);
      const binario = toBin8(n);
      const hexadecimal = toHex(n);
      const haciaHex = this.pickOne([true, false]);

      if (haciaHex) {
        // binario → hexadecimal
        const errores = [Math.max(0, n - 1), n + 1, n + 16].map(v => Math.min(255, v));
        const opciones = [hexadecimal, ...errores.map(v => toHex(v))];
        return this.crearQuiz({
          id: `${this.id}/conversion_bases/${this.randInt(1e5, 9e5)}`,
          materia: this.materia,
          subtipo: "conversion_bases",
          dificultad,
          enunciado: `¿Cuál es la representación hexadecimal del número binario ${binario}?`,
          opciones,
          indiceCorrecto: 0,
          explicacion: `Binario ${binario} = decimal ${n} = hexadecimal ${hexadecimal}.`,
        });
      }

      // hexadecimal → binario
      const errores = [Math.max(0, n - 1), n + 1, n + 16].map(v => Math.min(255, v));
      const opciones = [binario, ...errores.map(v => toBin8(v))];
      return this.crearQuiz({
        id: `${this.id}/conversion_bases/${this.randInt(1e5, 9e5)}`,
        materia: this.materia,
        subtipo: "conversion_bases",
        dificultad,
        enunciado: `¿Cuál es la representación binaria (8 bits) del número hexadecimal ${hexadecimal}?`,
        opciones,
        indiceCorrecto: 0,
        explicacion: `Hexadecimal ${hexadecimal} = decimal ${n} = binario ${binario}.`,
      });
    }

    // avanzado: suma en binario
    const a = this.randInt(1, 100);
    const b = this.randInt(1, 100);
    const suma = a + b;
    const aBin = toBin8(a);
    const bBin = toBin8(b);
    const sumaBin = toBin8(suma);
    const errores = [Math.max(0, suma - 1), suma + 1, suma + 2].map(v => Math.min(255, v));
    const opciones = [sumaBin, ...errores.map(v => toBin8(v))];
    return this.crearQuiz({
      id: `${this.id}/conversion_bases/${this.randInt(1e5, 9e5)}`,
      materia: this.materia,
      subtipo: "conversion_bases",
      dificultad,
      enunciado: `Calcula la suma binaria: ${aBin} + ${bBin} = ?`,
      opciones,
      indiceCorrecto: 0,
      explicacion: `${aBin} (${a}) + ${bBin} (${b}) = ${sumaBin} (${suma} en decimal).`,
    });
  }

  // ── Operaciones lógicas ─────────────────────────────────────────────────────

  private genOperacionesLogicas(dificultad: Dificultad): Ejercicio {
    if (dificultad === "basico") {
      const a = this.randInt(0, 1);
      const b = this.randInt(0, 1);
      const op = this.pickOne<LogicOp>(["AND", "OR", "XOR", "NOT"]);

      let enunciado: string;
      let resultado: number;

      if (op === "NOT") {
        resultado = evalLogic("NOT", a, 0);
        enunciado = `¿Cuál es el resultado de NOT ${a}?`;
      } else {
        resultado = evalLogic(op, a, b);
        enunciado = `¿Cuál es el resultado de ${a} ${op} ${b}?`;
      }

      const opciones = [`${resultado}`, resultado === 0 ? "1" : "0", "indeterminado", "error"];
      return this.crearQuiz({
        id: `${this.id}/operaciones_logicas/${this.randInt(1e5, 9e5)}`,
        materia: this.materia,
        subtipo: "operaciones_logicas",
        dificultad,
        enunciado,
        opciones,
        indiceCorrecto: 0,
        explicacion: `${op === "NOT" ? `NOT ${a}` : `${a} ${op} ${b}`} = ${resultado}. AND devuelve 1 solo si ambos son 1; OR devuelve 1 si al menos uno es 1; XOR devuelve 1 si son distintos; NOT invierte el valor.`,
      });
    }

    if (dificultad === "intermedio") {
      const a = this.randInt(0, 1);
      const b = this.randInt(0, 1);
      const c = this.randInt(0, 1);
      const op1 = this.pickOne<LogicOp>(["AND", "OR", "XOR"]);
      const op2 = this.pickOne<LogicOp>(["AND", "OR", "XOR"]);
      const temp = evalLogic(op1, a, b);
      const resultado = evalLogic(op2, temp, c);
      const enunciado = `¿Cuál es el resultado de (${a} ${op1} ${b}) ${op2} ${c}?`;
      const opciones = [`${resultado}`, resultado === 0 ? "1" : "0", "indeterminado", "error"];
      return this.crearQuiz({
        id: `${this.id}/operaciones_logicas/${this.randInt(1e5, 9e5)}`,
        materia: this.materia,
        subtipo: "operaciones_logicas",
        dificultad,
        enunciado,
        opciones,
        indiceCorrecto: 0,
        explicacion: `Paso 1: ${a} ${op1} ${b} = ${temp}. Paso 2: ${temp} ${op2} ${c} = ${resultado}.`,
      });
    }

    // avanzado: tabla de verdad de 3 variables — ¿en cuántas combinaciones el resultado es 1?
    const expresiones = [
      { expr: "A XOR B XOR C", count1s: 4, desc: "A⊕B⊕C vale 1 cuando hay un número impar de unos (1 o 3 de las 3 variables)" },
      { expr: "A AND B AND C", count1s: 1, desc: "A∧B∧C vale 1 solo cuando las tres variables son 1 (combinación 111)" },
      { expr: "A OR B OR C",   count1s: 7, desc: "A∨B∨C vale 0 solo cuando las tres son 0 (combinación 000)" },
      { expr: "(A AND B) OR C", count1s: 5, desc: "(A∧B)∨C vale 1 cuando C=1, o cuando A=1 y B=1 simultáneamente" },
    ];
    const expr = this.pickOne(expresiones);
    const todosValores = [1, 2, 3, 4, 5, 6, 7];
    const distractores = this.shuffle(todosValores.filter(v => v !== expr.count1s)).slice(0, 3);
    const opciones = [`${expr.count1s}`, ...distractores.map(v => `${v}`)];
    return this.crearQuiz({
      id: `${this.id}/operaciones_logicas/${this.randInt(1e5, 9e5)}`,
      materia: this.materia,
      subtipo: "operaciones_logicas",
      dificultad,
      enunciado: `De las 8 combinaciones posibles de A, B y C (cada variable puede ser 0 o 1), ¿en cuántas la expresión ${expr.expr} produce resultado 1?`,
      opciones,
      indiceCorrecto: 0,
      explicacion: `${expr.desc}. Total: ${expr.count1s} de 8 combinaciones dan resultado 1.`,
    });
  }

  // ── Álgebra booleana ────────────────────────────────────────────────────────

  private genAlgebraBooleana(dificultad: Dificultad): Ejercicio {
    if (dificultad === "basico") {
      const regla = this.pickOne(REGLAS_BASICO);
      const opciones = [regla.resultado, ...regla.opciones.filter(o => o !== regla.resultado).slice(0, 3)];
      return this.crearQuiz({
        id: `${this.id}/algebra_booleana/${this.randInt(1e5, 9e5)}`,
        materia: this.materia,
        subtipo: "algebra_booleana",
        dificultad,
        enunciado: `Usando las leyes del álgebra booleana, simplifica: ${regla.expresion} = ?`,
        opciones,
        indiceCorrecto: 0,
        explicacion: `Por la ley de ${regla.ley}: ${regla.expresion} = ${regla.resultado}.`,
      });
    }

    if (dificultad === "intermedio") {
      const regla = this.pickOne(REGLAS_INTERMEDIO);
      const opciones = [regla.resultado, ...regla.opciones.filter(o => o !== regla.resultado).slice(0, 3)];
      return this.crearQuiz({
        id: `${this.id}/algebra_booleana/${this.randInt(1e5, 9e5)}`,
        materia: this.materia,
        subtipo: "algebra_booleana",
        dificultad,
        enunciado: `Simplifica la expresión booleana: ${regla.expresion} = ?`,
        opciones,
        indiceCorrecto: 0,
        explicacion: `Ley de ${regla.ley}: ${regla.expresion} = ${regla.resultado}.`,
      });
    }

    // avanzado
    const regla = this.pickOne(REGLAS_AVANZADO);
    const opciones = [regla.resultado, ...regla.opciones.filter(o => o !== regla.resultado).slice(0, 3)];
    return this.crearQuiz({
      id: `${this.id}/algebra_booleana/${this.randInt(1e5, 9e5)}`,
      materia: this.materia,
      subtipo: "algebra_booleana",
      dificultad,
      enunciado: `Simplifica la expresión booleana usando álgebra de Boole: ${regla.expresion} = ?`,
      opciones,
      indiceCorrecto: 0,
      explicacion: `Ley de ${regla.ley}: ${regla.expresion} = ${regla.resultado}.`,
    });
  }
}
