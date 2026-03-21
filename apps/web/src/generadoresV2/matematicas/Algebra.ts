import { BaseGenerador } from "../core/baseGenerador";
import type { Dificultad, Ejercicio, Calculator } from "../core/types";
import { factorial, combinatoria, permutacion, mcd } from "./helpers/estadistica";
import { polinomioToString } from "./helpers/polinomios";
import type { Termino } from "./helpers/polinomios";

// ── Helpers internos ───────────────────────────────────────────────────────

function simplificarFrac(n: number, d: number): [number, number] {
  const g = mcd(Math.abs(n), Math.abs(d));
  return [n / g, d / g];
}

// ── Generador ─────────────────────────────────────────────────────────────

export class AlgebraGenerator extends BaseGenerador {
  readonly id = "matematicas/algebra";
  readonly materia = "matematicas" as const;
  readonly subtipos = [
    "expresiones_algebraicas",
    "simplificacion",
    "ecuaciones_lineales",
    "ecuaciones_cuadraticas",
    "ecuaciones_bicuadradas",
    "sistemas_lineales_2x2",
    "sistemas_lineales_3x3",
    "inecuaciones_lineales",
    "inecuaciones_cuadraticas",
    "valor_absoluto",
    "polinomios_suma_resta",
    "polinomios_multiplicacion",
    "polinomios_division",
    "productos_notables",
    "factor_comun",
    "diferencia_cuadrados",
    "trinomio_cuadrado_perfecto",
    "factorizacion_general",
    "fracciones_algebraicas",
    "suma_fracciones_algebraicas",
    "radicales_simplificacion",
    "operaciones_radicales",
    "racionalizacion",
    "potencias_enteras",
    "leyes_exponentes",
    "funciones_lineales",
    "funciones_cuadraticas",
    "funciones_dominio_rango",
    "funciones_compuesta",
    "funciones_inversa",
    "progresion_aritmetica",
    "progresion_geometrica",
    "binomio_newton",
    "permutaciones",
    "combinaciones",
  ];

  generarEjercicio(subtipo: string, dificultad: Dificultad, _calc: Calculator): Ejercicio {
    switch (subtipo) {
      case "expresiones_algebraicas":     return this.expresionesAlgebraicas(dificultad);
      case "simplificacion":              return this.simplificacion(dificultad);
      case "ecuaciones_lineales":         return this.ecuacionesLineales(dificultad);
      case "ecuaciones_cuadraticas":      return this.ecuacionesCuadraticas(dificultad);
      case "ecuaciones_bicuadradas":      return this.ecuacionesBicuadradas(dificultad);
      case "sistemas_lineales_2x2":       return this.sistemasLineales2x2(dificultad);
      case "sistemas_lineales_3x3":       return this.sistemasLineales3x3(dificultad);
      case "inecuaciones_lineales":       return this.inecuacionesLineales(dificultad);
      case "inecuaciones_cuadraticas":    return this.inecuacionesCuadraticas(dificultad);
      case "valor_absoluto":              return this.valorAbsoluto(dificultad);
      case "polinomios_suma_resta":       return this.polinomiosSumaResta(dificultad);
      case "polinomios_multiplicacion":   return this.polinomiosMultiplicacion(dificultad);
      case "polinomios_division":         return this.polinomiosDivision(dificultad);
      case "productos_notables":          return this.productosNotables(dificultad);
      case "factor_comun":                return this.factorComun(dificultad);
      case "diferencia_cuadrados":        return this.diferenciaCuadrados(dificultad);
      case "trinomio_cuadrado_perfecto":  return this.trinomioCuadradoPerfecto(dificultad);
      case "factorizacion_general":       return this.factorizacionGeneral(dificultad);
      case "fracciones_algebraicas":      return this.fraccionesAlgebraicas(dificultad);
      case "suma_fracciones_algebraicas": return this.sumaFraccionesAlgebraicas(dificultad);
      case "radicales_simplificacion":    return this.radicalesSimplificacion(dificultad);
      case "operaciones_radicales":       return this.operacionesRadicales(dificultad);
      case "racionalizacion":             return this.racionalizacion(dificultad);
      case "potencias_enteras":           return this.potenciasEnteras(dificultad);
      case "leyes_exponentes":            return this.leyesExponentes(dificultad);
      case "funciones_lineales":          return this.funcionesLineales(dificultad);
      case "funciones_cuadraticas":       return this.funcionesCuadraticas(dificultad);
      case "funciones_dominio_rango":     return this.funcionesDominioRango(dificultad);
      case "funciones_compuesta":         return this.funcionesCompuesta(dificultad);
      case "funciones_inversa":           return this.funcionesInversa(dificultad);
      case "progresion_aritmetica":       return this.progresionAritmetica(dificultad);
      case "progresion_geometrica":       return this.progresionGeometrica(dificultad);
      case "binomio_newton":              return this.binomioNewton(dificultad);
      case "permutaciones":               return this.permutaciones(dificultad);
      case "combinaciones":               return this.combinaciones(dificultad);
      default:                            return this.expresionesAlgebraicas(dificultad);
    }
  }

  private uid(): string {
    return `${this.id}/${this.randInt(100000, 999999)}`;
  }

  // ── 1. Expresiones algebraicas ───────────────────────────────────────────

  private expresionesAlgebraicas(d: Dificultad): Ejercicio {
    const a = this.randInt(1, d === "basico" ? 5 : 10);
    const b = this.randInt(1, d === "basico" ? 5 : 10);
    const x = this.randInt(1, d === "basico" ? 5 : 8);
    const resultado = a * x + b;
    return this.crearQuiz({
      id: this.uid(),
      materia: this.materia,
      subtipo: "expresiones_algebraicas",
      dificultad: d,
      enunciado: `Evalúa la expresión ${a}x + ${b} cuando x = ${x}.`,
      opciones: [String(resultado), String(resultado + 1), String(resultado - 1), String(resultado + a)],
      indiceCorrecto: 0,
      explicacion: `${a}·${x} + ${b} = ${a * x} + ${b} = ${resultado}.`,
    });
  }

  // ── 2. Simplificación ────────────────────────────────────────────────────

  private simplificacion(d: Dificultad): Ejercicio {
    const k = this.randInt(2, 5);
    const a = this.randInt(1, 4) * k;
    const b = this.randInt(1, 4) * k;
    const [an, bn] = simplificarFrac(a, b);
    return this.crearQuiz({
      id: this.uid(),
      materia: this.materia,
      subtipo: "simplificacion",
      dificultad: d,
      enunciado: `Simplifica la fracción algebraica: ${a}/${b}`,
      opciones: [`${an}/${bn}`, `${a + 1}/${b}`, `${an + 1}/${bn}`, `${a}/${b + 1}`],
      indiceCorrecto: 0,
      explicacion: `MCD(${a}, ${b}) = ${k}. Dividiendo: ${a}/${k} = ${an}, ${b}/${k} = ${bn}. Resultado: ${an}/${bn}.`,
    });
  }

  // ── 3. Ecuaciones lineales ───────────────────────────────────────────────

  private ecuacionesLineales(d: Dificultad): Ejercicio {
    // ax + b = c  ->  x = (c - b) / a
    const a = this.randInt(1, d === "basico" ? 5 : 10);
    const x = this.randInt(-5, 5);
    const b = this.randInt(-10, 10);
    const c = a * x + b;
    return this.crearQuiz({
      id: this.uid(),
      materia: this.materia,
      subtipo: "ecuaciones_lineales",
      dificultad: d,
      enunciado: `Resuelve: ${a}x + ${b} = ${c}`,
      opciones: [String(x), String(x + 1), String(x - 1), String(x + 2)],
      indiceCorrecto: 0,
      explicacion: `${a}x = ${c} - ${b} = ${c - b}. x = ${c - b}/${a} = ${x}.`,
    });
  }

  // ── 4. Ecuaciones cuadráticas ────────────────────────────────────────────

  private ecuacionesCuadraticas(d: Dificultad): Ejercicio {
    // (x - r1)(x - r2) = x² - (r1+r2)x + r1*r2
    const r1 = this.randInt(-5, 5);
    const r2 = this.randInt(-5, 5);
    const b = -(r1 + r2), c = r1 * r2;
    const bStr = b >= 0 ? `+ ${b}` : `- ${Math.abs(b)}`;
    const cStr = c >= 0 ? `+ ${c}` : `- ${Math.abs(c)}`;
    const respuesta = r1 === r2 ? `x = ${r1}` : `x = ${Math.min(r1, r2)} o x = ${Math.max(r1, r2)}`;
    return this.crearQuiz({
      id: this.uid(),
      materia: this.materia,
      subtipo: "ecuaciones_cuadraticas",
      dificultad: d,
      enunciado: `Resuelve: x² ${bStr}x ${cStr} = 0`,
      opciones: [
        respuesta,
        `x = ${r1 + 1} o x = ${r2 - 1}`,
        `x = ${-r1} o x = ${-r2}`,
        `Sin solución real`,
      ],
      indiceCorrecto: 0,
      explicacion: `Factorizando: (x - ${r1})(x - ${r2}) = 0. Raíces: x = ${r1} y x = ${r2}.`,
    });
  }

  // ── 5. Ecuaciones bicuadradas ────────────────────────────────────────────

  private ecuacionesBicuadradas(d: Dificultad): Ejercicio {
    // x^4 - (a²+b²)x² + a²b² = 0  con u = x²
    const a2 = this.randInt(1, 4), b2 = this.randInt(1, 3);
    const p = a2 * a2 + b2 * b2, q = a2 * a2 * b2 * b2;
    const respuesta = `x = ±${a2} o x = ±${b2}`;
    return this.crearQuiz({
      id: this.uid(),
      materia: this.materia,
      subtipo: "ecuaciones_bicuadradas",
      dificultad: d,
      enunciado: `Resuelve la ecuación bicuadrada: x⁴ - ${p}x² + ${q} = 0`,
      opciones: [respuesta, `x = ${a2} o x = ${b2}`, `x = ±${p}`, `Sin solución real`],
      indiceCorrecto: 0,
      explicacion: `Haciendo u = x²: u² - ${p}u + ${q} = 0. Raíces: u = ${a2 * a2} o u = ${b2 * b2}. Por tanto x = ±${a2} o x = ±${b2}.`,
    });
  }

  // ── 6. Sistemas 2×2 ──────────────────────────────────────────────────────

  private sistemasLineales2x2(d: Dificultad): Ejercicio {
    const x = this.randInt(1, 5), y = this.randInt(1, 5);
    const a1 = this.randInt(1, 3), b1 = this.randInt(1, 3);
    const a2 = this.randInt(1, 3), b2 = this.randInt(1, 3);
    const c1 = a1 * x + b1 * y;
    const c2 = a2 * x + b2 * y;
    return this.crearQuiz({
      id: this.uid(),
      materia: this.materia,
      subtipo: "sistemas_lineales_2x2",
      dificultad: d,
      enunciado: `Resuelve el sistema:\n${a1}x + ${b1}y = ${c1}\n${a2}x + ${b2}y = ${c2}`,
      opciones: [`x=${x}, y=${y}`, `x=${y}, y=${x}`, `x=${x + 1}, y=${y}`, `x=${x}, y=${y + 1}`],
      indiceCorrecto: 0,
      explicacion: `La solución es x = ${x}, y = ${y}. Verificación: ${a1}·${x}+${b1}·${y}=${c1} ✓, ${a2}·${x}+${b2}·${y}=${c2} ✓.`,
    });
  }

  // ── 7. Sistemas 3×3 ──────────────────────────────────────────────────────

  private sistemasLineales3x3(d: Dificultad): Ejercicio {
    const x = this.randInt(1, 3), y = this.randInt(1, 3), z = this.randInt(1, 3);
    const c1 = x + y + z;
    const c2 = 2 * x + y + z;
    const c3 = x + 2 * y + 3 * z;
    return this.crearQuiz({
      id: this.uid(),
      materia: this.materia,
      subtipo: "sistemas_lineales_3x3",
      dificultad: d,
      enunciado: `Resuelve:\nx + y + z = ${c1}\n2x + y + z = ${c2}\nx + 2y + 3z = ${c3}`,
      opciones: [
        `x=${x}, y=${y}, z=${z}`,
        `x=${x + 1}, y=${y}, z=${z}`,
        `x=${x}, y=${y + 1}, z=${z}`,
        `x=${x}, y=${y}, z=${z + 1}`,
      ],
      indiceCorrecto: 0,
      explicacion: `De la 1ª y 2ª ecuación: x = ${c2} - ${c1} = ${x}. Sustituyendo se obtiene y = ${y}, z = ${z}.`,
    });
  }

  // ── 8. Inecuaciones lineales ─────────────────────────────────────────────

  private inecuacionesLineales(d: Dificultad): Ejercicio {
    const a = this.randInt(1, 5);
    const b = this.randInt(-10, 10);
    const c = this.randInt(-10, 10);
    // ax + b < c  ->  x < (c - b) / a
    const [num, den] = simplificarFrac(c - b, a);
    const fracStr = den === 1 ? String(num) : `${num}/${den}`;
    return this.crearQuiz({
      id: this.uid(),
      materia: this.materia,
      subtipo: "inecuaciones_lineales",
      dificultad: d,
      enunciado: `Resuelve: ${a}x + ${b} < ${c}`,
      opciones: [`x < ${fracStr}`, `x > ${fracStr}`, `x ≤ ${fracStr}`, `x ≥ ${fracStr}`],
      indiceCorrecto: 0,
      explicacion: `${a}x < ${c} - ${b} = ${c - b}. Dividiendo por ${a} (positivo): x < ${fracStr}.`,
    });
  }

  // ── 9. Inecuaciones cuadráticas ──────────────────────────────────────────

  private inecuacionesCuadraticas(d: Dificultad): Ejercicio {
    const r1 = this.randInt(-4, 0), r2 = this.randInt(1, 5);
    // (x - r1)(x - r2) > 0 -> x < r1 o x > r2
    const b = -(r1 + r2), c = r1 * r2;
    const bStr = b >= 0 ? `+ ${b}` : `- ${Math.abs(b)}`;
    const cStr = c >= 0 ? `+ ${c}` : `- ${Math.abs(c)}`;
    return this.crearQuiz({
      id: this.uid(),
      materia: this.materia,
      subtipo: "inecuaciones_cuadraticas",
      dificultad: d,
      enunciado: `Resuelve: x² ${bStr}x ${cStr} > 0`,
      opciones: [
        `x < ${r1} o x > ${r2}`,
        `${r1} < x < ${r2}`,
        `x > ${r1}`,
        `x < ${r2}`,
      ],
      indiceCorrecto: 0,
      explicacion: `Raíces: x = ${r1} y x = ${r2}. Como a = 1 > 0, la parábola es positiva fuera del intervalo: x < ${r1} o x > ${r2}.`,
    });
  }

  // ── 10. Valor absoluto ───────────────────────────────────────────────────

  private valorAbsoluto(d: Dificultad): Ejercicio {
    const k = this.randInt(1, 8);
    const b = this.randInt(-5, 5);
    // |x + b| = k  ->  x = k - b  o  x = -k - b
    const x1 = k - b, x2 = -k - b;
    const respuesta = `x = ${Math.min(x1, x2)} o x = ${Math.max(x1, x2)}`;
    return this.crearQuiz({
      id: this.uid(),
      materia: this.materia,
      subtipo: "valor_absoluto",
      dificultad: d,
      enunciado: `Resuelve: |x ${b >= 0 ? "+ " + b : "- " + Math.abs(b)}| = ${k}`,
      opciones: [respuesta, `x = ${k - b}`, `x = ${-k - b}`, `x = ±${k}`],
      indiceCorrecto: 0,
      explicacion: `|x + ${b}| = ${k} implica x + ${b} = ${k} (x = ${x1}) o x + ${b} = -${k} (x = ${x2}).`,
    });
  }

  // ── 11. Polinomios: suma y resta ─────────────────────────────────────────

  private polinomiosSumaResta(d: Dificultad): Ejercicio {
    const a1 = this.randInt(1, 5), a0 = this.randInt(1, 5);
    const b1 = this.randInt(1, 5), b0 = this.randInt(1, 5);
    const op = this.pickOne(["+", "-"] as const);
    const r1 = op === "+" ? a1 + b1 : a1 - b1;
    const r0 = op === "+" ? a0 + b0 : a0 - b0;
    const p1: Termino[] = [{ coef: a1, exp: 1 }, { coef: a0, exp: 0 }];
    const p2: Termino[] = [{ coef: b1, exp: 1 }, { coef: b0, exp: 0 }];
    return this.crearQuiz({
      id: this.uid(),
      materia: this.materia,
      subtipo: "polinomios_suma_resta",
      dificultad: d,
      enunciado: `Calcula: (${polinomioToString(p1)}) ${op} (${polinomioToString(p2)})`,
      opciones: [
        `${r1}x + ${r0}`,
        `${r1 + 1}x + ${r0}`,
        `${r1}x + ${r0 + 1}`,
        `${a1 * b1}x + ${a0 * b0}`,
      ],
      indiceCorrecto: 0,
      explicacion: `Agrupando términos semejantes: (${a1}${op === "+" ? "+" : "-"}${b1})x + (${a0}${op === "+" ? "+" : "-"}${b0}) = ${r1}x + ${r0}.`,
    });
  }

  // ── 12. Polinomios: multiplicación ───────────────────────────────────────

  private polinomiosMultiplicacion(d: Dificultad): Ejercicio {
    const a = this.randInt(1, 4), b = this.randInt(1, 6);
    const c = this.randInt(1, 4);
    // (ax + b)(cx) = acx² + bcx
    const r2 = a * c, r1 = b * c;
    return this.crearQuiz({
      id: this.uid(),
      materia: this.materia,
      subtipo: "polinomios_multiplicacion",
      dificultad: d,
      enunciado: `Multiplica: (${a}x + ${b}) · ${c}x`,
      opciones: [
        `${r2}x² + ${r1}x`,
        `${r2}x² + ${b}x`,
        `${a}x² + ${r1}x`,
        `${r2 + 1}x² + ${r1}x`,
      ],
      indiceCorrecto: 0,
      explicacion: `${c}x · ${a}x = ${r2}x², ${c}x · ${b} = ${r1}x. Resultado: ${r2}x² + ${r1}x.`,
    });
  }

  // ── 13. Polinomios: división ─────────────────────────────────────────────

  private polinomiosDivision(d: Dificultad): Ejercicio {
    const q = this.randInt(1, 4), r0 = this.randInt(1, 5);
    const div = this.randInt(1, 3);
    // (div*q x² + div*r0 x) / (div x) = qx + r0
    const a = div * q, b = div * r0;
    return this.crearQuiz({
      id: this.uid(),
      materia: this.materia,
      subtipo: "polinomios_division",
      dificultad: d,
      enunciado: `Simplifica: (${a}x² + ${b}x) / (${div}x)`,
      opciones: [`${q}x + ${r0}`, `${a}x + ${b}`, `${q}x`, `${r0}x + ${q}`],
      indiceCorrecto: 0,
      explicacion: `Dividiendo término a término: ${a}x²/${div}x = ${q}x, ${b}x/${div}x = ${r0}. Resultado: ${q}x + ${r0}.`,
    });
  }

  // ── 14. Productos notables ───────────────────────────────────────────────

  private productosNotables(d: Dificultad): Ejercicio {
    const a = this.randInt(1, 5), b = this.randInt(1, 5);
    const tipo = this.pickOne(["suma_cuadrado", "resta_cuadrado", "suma_resta"] as const);
    if (tipo === "suma_cuadrado") {
      // (ax + b)² = a²x² + 2abx + b²
      const r2 = a * a, r1 = 2 * a * b, r0 = b * b;
      return this.crearQuiz({
        id: this.uid(), materia: this.materia, subtipo: "productos_notables", dificultad: d,
        enunciado: `Expande: (${a}x + ${b})²`,
        opciones: [`${r2}x² + ${r1}x + ${r0}`, `${r2}x² + ${r0}`, `${a}x² + ${b}`, `${r2}x² - ${r1}x + ${r0}`],
        indiceCorrecto: 0,
        explicacion: `(a+b)² = a² + 2ab + b². (${a}x)² + 2·${a}x·${b} + ${b}² = ${r2}x² + ${r1}x + ${r0}.`,
      });
    } else if (tipo === "resta_cuadrado") {
      const r2 = a * a, r1 = 2 * a * b, r0 = b * b;
      return this.crearQuiz({
        id: this.uid(), materia: this.materia, subtipo: "productos_notables", dificultad: d,
        enunciado: `Expande: (${a}x - ${b})²`,
        opciones: [`${r2}x² - ${r1}x + ${r0}`, `${r2}x² + ${r1}x + ${r0}`, `${r2}x² - ${r0}`, `${a}x² - ${b}`],
        indiceCorrecto: 0,
        explicacion: `(a-b)² = a² - 2ab + b². (${a}x)² - 2·${a}x·${b} + ${b}² = ${r2}x² - ${r1}x + ${r0}.`,
      });
    } else {
      // (ax + b)(ax - b) = a²x² - b²
      const r2 = a * a, r0 = b * b;
      return this.crearQuiz({
        id: this.uid(), materia: this.materia, subtipo: "productos_notables", dificultad: d,
        enunciado: `Expande: (${a}x + ${b})(${a}x - ${b})`,
        opciones: [`${r2}x² - ${r0}`, `${r2}x² + ${r0}`, `${a}x² - ${b}`, `${r2}x² - ${2 * a * b}x - ${r0}`],
        indiceCorrecto: 0,
        explicacion: `(a+b)(a-b) = a² - b². (${a}x)² - ${b}² = ${r2}x² - ${r0}.`,
      });
    }
  }

  // ── 15. Factor común ─────────────────────────────────────────────────────

  private factorComun(d: Dificultad): Ejercicio {
    const k = this.randInt(2, 5);
    const a = this.randInt(1, 4), b = this.randInt(1, 4);
    return this.crearQuiz({
      id: this.uid(), materia: this.materia, subtipo: "factor_comun", dificultad: d,
      enunciado: `Factoriza extrayendo el factor común: ${k * a}x² + ${k * b}x`,
      opciones: [`${k}x(${a}x + ${b})`, `${k}(${a}x² + ${b}x)`, `x(${k * a}x + ${k * b})`, `${k * a}x(x + ${b})`],
      indiceCorrecto: 0,
      explicacion: `El MCD es ${k}x. Factorizando: ${k}x · (${a}x + ${b}).`,
    });
  }

  // ── 16. Diferencia de cuadrados ──────────────────────────────────────────

  private diferenciaCuadrados(d: Dificultad): Ejercicio {
    const a = this.randInt(1, 5), b = this.randInt(1, 5);
    const expr = `${a * a}x² - ${b * b}`;
    return this.crearQuiz({
      id: this.uid(), materia: this.materia, subtipo: "diferencia_cuadrados", dificultad: d,
      enunciado: `Factoriza: ${expr}`,
      opciones: [`(${a}x + ${b})(${a}x - ${b})`, `(${a}x - ${b})²`, `(${a}x + ${b})²`, `${a}x(x - ${b})`],
      indiceCorrecto: 0,
      explicacion: `a² - b² = (a+b)(a-b). Aquí a = ${a}x, b = ${b}. Resultado: (${a}x + ${b})(${a}x - ${b}).`,
    });
  }

  // ── 17. Trinomio cuadrado perfecto ───────────────────────────────────────

  private trinomioCuadradoPerfecto(d: Dificultad): Ejercicio {
    const a = this.randInt(1, 4), b = this.randInt(1, 5);
    const r2 = a * a, r1 = 2 * a * b, r0 = b * b;
    return this.crearQuiz({
      id: this.uid(), materia: this.materia, subtipo: "trinomio_cuadrado_perfecto", dificultad: d,
      enunciado: `Factoriza el trinomio cuadrado perfecto: ${r2}x² + ${r1}x + ${r0}`,
      opciones: [`(${a}x + ${b})²`, `(${a}x - ${b})²`, `(${a}x + ${b})(${a}x - ${b})`, `${a}x(x + ${b})`],
      indiceCorrecto: 0,
      explicacion: `Verificando: √(${r2}x²) = ${a}x, √${r0} = ${b}, 2·${a}x·${b} = ${r1}x ✓. Factoriza como (${a}x + ${b})².`,
    });
  }

  // ── 18. Factorización general ────────────────────────────────────────────

  private factorizacionGeneral(d: Dificultad): Ejercicio {
    const r1 = this.randInt(-4, -1), r2 = this.randInt(1, 4);
    const b = -(r1 + r2), c = r1 * r2;
    const bStr = b >= 0 ? `+ ${b}` : `- ${Math.abs(b)}`;
    const cStr = c >= 0 ? `+ ${c}` : `- ${Math.abs(c)}`;
    return this.crearQuiz({
      id: this.uid(), materia: this.materia, subtipo: "factorizacion_general", dificultad: d,
      enunciado: `Factoriza: x² ${bStr}x ${cStr}`,
      opciones: [`(x - ${r1})(x - ${r2})`, `(x + ${r1})(x + ${r2})`, `(x - ${r1})(x + ${r2})`, `(x + ${-r1})(x - ${r2})`],
      indiceCorrecto: 0,
      explicacion: `Buscamos dos números cuyo producto sea ${c} y suma sea ${b}. Son ${r1} y ${r2}: (x - ${r1})(x - ${r2}).`,
    });
  }

  // ── 19. Fracciones algebraicas ───────────────────────────────────────────

  private fraccionesAlgebraicas(d: Dificultad): Ejercicio {
    const a = this.randInt(1, 4), b = this.randInt(1, 4);
    // (ax² + bx) / x = ax + b
    return this.crearQuiz({
      id: this.uid(), materia: this.materia, subtipo: "fracciones_algebraicas", dificultad: d,
      enunciado: `Simplifica: (${a}x² + ${b}x) / x`,
      opciones: [`${a}x + ${b}`, `${a}x`, `${b}x + ${a}`, `${a + b}x`],
      indiceCorrecto: 0,
      explicacion: `Dividiendo: ${a}x²/x + ${b}x/x = ${a}x + ${b}.`,
    });
  }

  // ── 20. Suma de fracciones algebraicas ───────────────────────────────────

  private sumaFraccionesAlgebraicas(d: Dificultad): Ejercicio {
    const a = this.randInt(1, 4);
    // 1/x + 1/(ax) = (a+1)/(ax)
    const num = a + 1;
    return this.crearQuiz({
      id: this.uid(), materia: this.materia, subtipo: "suma_fracciones_algebraicas", dificultad: d,
      enunciado: `Calcula: 1/x + 1/(${a}x)`,
      opciones: [`${num}/(${a}x)`, `2/(${a + 1}x)`, `1/(${a}x)`, `${a + 1}/(${a}x²)`],
      indiceCorrecto: 0,
      explicacion: `MCM = ${a}x. 1/x = ${a}/(${a}x), 1/(${a}x) = 1/(${a}x). Suma: (${a}+1)/(${a}x) = ${num}/(${a}x).`,
    });
  }

  // ── 21. Radicales: simplificación ────────────────────────────────────────

  private radicalesSimplificacion(d: Dificultad): Ejercicio {
    const k = this.randInt(2, 4);
    const a = this.randInt(1, 5);
    // √(k²·a) = k·√a
    const radicando = k * k * a;
    const respuesta = a === 1 ? `${k}` : `${k}√${a}`;
    return this.crearQuiz({
      id: this.uid(), materia: this.materia, subtipo: "radicales_simplificacion", dificultad: d,
      enunciado: `Simplifica: √${radicando}`,
      opciones: [respuesta, `${k + 1}√${a}`, `${k}√${a + 1}`, `√${radicando - 1}`],
      indiceCorrecto: 0,
      explicacion: `√${radicando} = √(${k}²·${a}) = ${k}√${a}${a === 1 ? " = " + k : ""}.`,
    });
  }

  // ── 22. Operaciones con radicales ─────────────────────────────────────────

  private operacionesRadicales(d: Dificultad): Ejercicio {
    const a = this.randInt(2, 5);
    // √a · √a = a
    return this.crearQuiz({
      id: this.uid(), materia: this.materia, subtipo: "operaciones_radicales", dificultad: d,
      enunciado: `Calcula: √${a} · √${a}`,
      opciones: [String(a), `√${a * a}`, String(a * 2), `${a}²`],
      indiceCorrecto: 0,
      explicacion: `√${a} · √${a} = (√${a})² = ${a}.`,
    });
  }

  // ── 23. Racionalización ──────────────────────────────────────────────────

  private racionalizacion(d: Dificultad): Ejercicio {
    const b = this.randInt(2, 5);
    // 1/√b = √b/b
    return this.crearQuiz({
      id: this.uid(), materia: this.materia, subtipo: "racionalizacion", dificultad: d,
      enunciado: `Racionaliza: 1/√${b}`,
      opciones: [`√${b}/${b}`, `1/√${b}`, `√${b}`, `${b}/√${b}`],
      indiceCorrecto: 0,
      explicacion: `Multiplicando por √${b}/√${b}: 1·√${b}/(√${b}·√${b}) = √${b}/${b}.`,
    });
  }

  // ── 24. Potencias enteras ────────────────────────────────────────────────

  private potenciasEnteras(d: Dificultad): Ejercicio {
    const base = this.randInt(2, d === "basico" ? 4 : 6);
    const exp = this.randInt(2, d === "basico" ? 4 : 6);
    const resultado = Math.pow(base, exp);
    return this.crearQuiz({
      id: this.uid(), materia: this.materia, subtipo: "potencias_enteras", dificultad: d,
      enunciado: `Calcula: ${base}^${exp}`,
      opciones: [String(resultado), String(resultado + base), String(base * exp), String(resultado - 1)],
      indiceCorrecto: 0,
      explicacion: `${base}^${exp} = ${Array(exp).fill(base).join("·")} = ${resultado}.`,
    });
  }

  // ── 25. Leyes de exponentes ──────────────────────────────────────────────

  private leyesExponentes(d: Dificultad): Ejercicio {
    const base = this.randInt(2, 5);
    const m = this.randInt(1, 4), n = this.randInt(1, 4);
    const tipo = this.pickOne(["producto", "cociente", "potencia"] as const);
    if (tipo === "producto") {
      return this.crearQuiz({
        id: this.uid(), materia: this.materia, subtipo: "leyes_exponentes", dificultad: d,
        enunciado: `Simplifica: ${base}^${m} · ${base}^${n}`,
        opciones: [`${base}^${m + n}`, `${base}^${m * n}`, `${base * 2}^${m + n}`, `${base}^${m - n}`],
        indiceCorrecto: 0,
        explicacion: `a^m · a^n = a^(m+n). ${base}^${m} · ${base}^${n} = ${base}^${m + n}.`,
      });
    } else if (tipo === "cociente") {
      const big = Math.max(m, n), small = Math.min(m, n);
      return this.crearQuiz({
        id: this.uid(), materia: this.materia, subtipo: "leyes_exponentes", dificultad: d,
        enunciado: `Simplifica: ${base}^${big} / ${base}^${small}`,
        opciones: [`${base}^${big - small}`, `${base}^${big + small}`, `1^${big - small}`, `${base}^${big * small}`],
        indiceCorrecto: 0,
        explicacion: `a^m / a^n = a^(m-n). ${base}^${big} / ${base}^${small} = ${base}^${big - small}.`,
      });
    } else {
      return this.crearQuiz({
        id: this.uid(), materia: this.materia, subtipo: "leyes_exponentes", dificultad: d,
        enunciado: `Simplifica: (${base}^${m})^${n}`,
        opciones: [`${base}^${m * n}`, `${base}^${m + n}`, `${base * n}^${m}`, `${base}^${m - n}`],
        indiceCorrecto: 0,
        explicacion: `(a^m)^n = a^(m·n). (${base}^${m})^${n} = ${base}^${m * n}.`,
      });
    }
  }

  // ── 26. Funciones lineales ───────────────────────────────────────────────

  private funcionesLineales(d: Dificultad): Ejercicio {
    const m = this.randInt(-4, 4) || 1;
    const b = this.randInt(-5, 5);
    const x = this.randInt(-3, 5);
    const resultado = m * x + b;
    return this.crearQuiz({
      id: this.uid(), materia: this.materia, subtipo: "funciones_lineales", dificultad: d,
      enunciado: `Dada f(x) = ${m}x + ${b}, calcula f(${x}).`,
      opciones: [String(resultado), String(resultado + 1), String(resultado - m), String(resultado + m)],
      indiceCorrecto: 0,
      explicacion: `f(${x}) = ${m}·${x} + ${b} = ${m * x} + ${b} = ${resultado}.`,
    });
  }

  // ── 27. Funciones cuadráticas ────────────────────────────────────────────

  private funcionesCuadraticas(d: Dificultad): Ejercicio {
    const a = this.randInt(1, 3), b = this.randInt(-3, 3), c = this.randInt(-5, 5);
    // Vértice: x_v = -b/(2a)
    const xv_num = -b, xv_den = 2 * a;
    const [xvn, xvd] = simplificarFrac(xv_num, xv_den);
    const verticeStr = xvd === 1 ? `x = ${xvn}` : `x = ${xvn}/${xvd}`;
    return this.crearQuiz({
      id: this.uid(), materia: this.materia, subtipo: "funciones_cuadraticas", dificultad: d,
      enunciado: `Para f(x) = ${a}x² ${b >= 0 ? "+ " + b : "- " + Math.abs(b)}x ${c >= 0 ? "+ " + c : "- " + Math.abs(c)}, ¿cuál es el eje de simetría?`,
      opciones: [verticeStr, `x = ${b}/(${2 * a})`, `x = ${xvn + 1}`, `x = ${-xvn}`],
      indiceCorrecto: 0,
      explicacion: `El eje de simetría es x = -b/(2a) = -${b}/(2·${a}) = ${verticeStr.replace("x = ", "")}.`,
    });
  }

  // ── 28. Dominio y rango ──────────────────────────────────────────────────

  private funcionesDominioRango(d: Dificultad): Ejercicio {
    const tipo = this.pickOne(["raiz", "racional", "lineal"] as const);
    if (tipo === "raiz" || d === "basico") {
      const k = this.randInt(1, 5);
      return this.crearQuiz({
        id: this.uid(), materia: this.materia, subtipo: "funciones_dominio_rango", dificultad: d,
        enunciado: `¿Cuál es el dominio de f(x) = √(x - ${k})?`,
        opciones: [`x ≥ ${k}`, `x > ${k}`, `x ≤ ${k}`, `Todos los reales`],
        indiceCorrecto: 0,
        explicacion: `Para que √(x - ${k}) esté definida, necesitamos x - ${k} ≥ 0, es decir x ≥ ${k}.`,
      });
    } else {
      const k = this.randInt(1, 5);
      return this.crearQuiz({
        id: this.uid(), materia: this.materia, subtipo: "funciones_dominio_rango", dificultad: d,
        enunciado: `¿Cuál es el dominio de f(x) = 1/(x - ${k})?`,
        opciones: [`ℝ \\ {${k}}`, `x > ${k}`, `x ≥ ${k}`, `Todos los reales`],
        indiceCorrecto: 0,
        explicacion: `El denominador no puede ser cero: x - ${k} ≠ 0, es decir x ≠ ${k}. Dominio: ℝ \\ {${k}}.`,
      });
    }
  }

  // ── 29. Funciones compuesta ──────────────────────────────────────────────

  private funcionesCompuesta(d: Dificultad): Ejercicio {
    const a = this.randInt(1, 4), b = this.randInt(1, 5);
    const c = this.randInt(1, 4), e = this.randInt(1, 5);
    // f(x) = ax + b, g(x) = cx + e, f(g(x)) = a(cx+e)+b = acx + ae + b
    const comp_a = a * c, comp_b = a * e + b;
    return this.crearQuiz({
      id: this.uid(), materia: this.materia, subtipo: "funciones_compuesta", dificultad: d,
      enunciado: `Si f(x) = ${a}x + ${b} y g(x) = ${c}x + ${e}, ¿cuánto es f(g(x))?`,
      opciones: [`${comp_a}x + ${comp_b}`, `${a * c}x + ${b + e}`, `${comp_a + 1}x + ${comp_b}`, `${a}x + ${e}`],
      indiceCorrecto: 0,
      explicacion: `f(g(x)) = f(${c}x+${e}) = ${a}(${c}x+${e})+${b} = ${comp_a}x+${a * e}+${b} = ${comp_a}x+${comp_b}.`,
    });
  }

  // ── 30. Funciones inversas ───────────────────────────────────────────────

  private funcionesInversa(d: Dificultad): Ejercicio {
    const a = this.randInt(1, 4) || 1;
    const b = this.randInt(-5, 5);
    // f(x) = ax + b  ->  f⁻¹(x) = (x - b) / a
    return this.crearQuiz({
      id: this.uid(), materia: this.materia, subtipo: "funciones_inversa", dificultad: d,
      enunciado: `Encuentra la función inversa de f(x) = ${a}x + ${b}.`,
      opciones: [
        a === 1 ? `f⁻¹(x) = x - ${b}` : `f⁻¹(x) = (x - ${b})/${a}`,
        `f⁻¹(x) = ${a}x - ${b}`,
        `f⁻¹(x) = x/${a} + ${b}`,
        `f⁻¹(x) = -${a}x + ${b}`,
      ],
      indiceCorrecto: 0,
      explicacion: `Despejando x de y = ${a}x + ${b}: x = (y - ${b})/${a}. Intercambiando: f⁻¹(x) = (x - ${b})/${a}.`,
    });
  }

  // ── 31. Progresión aritmética ────────────────────────────────────────────

  private progresionAritmetica(d: Dificultad): Ejercicio {
    const a1 = this.randInt(1, 10);
    const r = this.randInt(1, 5);
    const n = d === "basico" ? this.randInt(5, 8) : this.randInt(8, 15);
    // a_n = a1 + (n-1)*r
    const an = a1 + (n - 1) * r;
    return this.crearQuiz({
      id: this.uid(), materia: this.materia, subtipo: "progresion_aritmetica", dificultad: d,
      enunciado: `En una progresión aritmética con a₁ = ${a1} y razón r = ${r}, ¿cuánto vale a_${n}?`,
      opciones: [String(an), String(an + r), String(an - r), String(a1 + n * r)],
      indiceCorrecto: 0,
      explicacion: `a_n = a₁ + (n-1)·r = ${a1} + (${n}-1)·${r} = ${a1} + ${(n - 1) * r} = ${an}.`,
    });
  }

  // ── 32. Progresión geométrica ────────────────────────────────────────────

  private progresionGeometrica(d: Dificultad): Ejercicio {
    const a1 = this.randInt(1, 5);
    const q = this.pickOne([2, 3]);
    const n = d === "basico" ? this.randInt(3, 5) : this.randInt(4, 7);
    const an = a1 * Math.pow(q, n - 1);
    return this.crearQuiz({
      id: this.uid(), materia: this.materia, subtipo: "progresion_geometrica", dificultad: d,
      enunciado: `En una progresión geométrica con a₁ = ${a1} y razón q = ${q}, ¿cuánto vale a_${n}?`,
      opciones: [String(an), String(an * q), String(an / q), String(a1 + (n - 1) * q)],
      indiceCorrecto: 0,
      explicacion: `a_n = a₁ · q^(n-1) = ${a1} · ${q}^${n - 1} = ${a1} · ${Math.pow(q, n - 1)} = ${an}.`,
    });
  }

  // ── 33. Binomio de Newton ────────────────────────────────────────────────

  private binomioNewton(d: Dificultad): Ejercicio {
    const n = d === "basico" ? 2 : this.randInt(3, 5);
    const k = this.randInt(0, n);
    const coef = combinatoria(n, k);
    return this.crearQuiz({
      id: this.uid(), materia: this.materia, subtipo: "binomio_newton", dificultad: d,
      enunciado: `En el desarrollo de (a + b)^${n}, ¿cuál es el coeficiente del término de grado k = ${k}? (C(${n},${k}))`,
      opciones: [String(coef), String(coef + 1), String(coef - 1), String(coef * 2)],
      indiceCorrecto: 0,
      explicacion: `C(${n},${k}) = ${n}! / (${k}! · ${n - k}!) = ${coef}.`,
    });
  }

  // ── 34. Permutaciones ───────────────────────────────────────────────────

  private permutaciones(d: Dificultad): Ejercicio {
    const n = d === "basico" ? this.randInt(3, 5) : this.randInt(5, 7);
    const k = this.randInt(1, Math.min(3, n));
    const resultado = permutacion(n, k);
    return this.crearQuiz({
      id: this.uid(), materia: this.materia, subtipo: "permutaciones", dificultad: d,
      enunciado: `¿Cuántas permutaciones de ${k} elementos se pueden formar con ${n} elementos distintos? P(${n},${k})`,
      opciones: [String(resultado), String(resultado + 1), String(combinatoria(n, k)), String(factorial(n))],
      indiceCorrecto: 0,
      explicacion: `P(${n},${k}) = ${n}!/(${n}-${k})! = ${n}!/${n - k}! = ${resultado}.`,
    });
  }

  // ── 35. Combinaciones ───────────────────────────────────────────────────

  private combinaciones(d: Dificultad): Ejercicio {
    const n = d === "basico" ? this.randInt(4, 6) : this.randInt(6, 9);
    const k = this.randInt(2, Math.min(4, n - 1));
    const resultado = combinatoria(n, k);
    return this.crearQuiz({
      id: this.uid(), materia: this.materia, subtipo: "combinaciones", dificultad: d,
      enunciado: `¿Cuántas combinaciones de ${k} elementos se pueden elegir de un conjunto de ${n} elementos? C(${n},${k})`,
      opciones: [String(resultado), String(resultado + 1), String(permutacion(n, k)), String(resultado * 2)],
      indiceCorrecto: 0,
      explicacion: `C(${n},${k}) = ${n}! / (${k}! · ${n - k}!) = ${resultado}.`,
    });
  }
}
