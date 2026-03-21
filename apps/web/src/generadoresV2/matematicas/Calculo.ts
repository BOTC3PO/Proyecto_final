import { BaseGenerador } from "../core/baseGenerador";
import type { Dificultad, Ejercicio, Calculator, LineChartSpec } from "../core/types";
import { generarPuntos } from "./helpers/calculo";
import { derivarPolinomio, evaluarPolinomio, polinomioToString } from "./helpers/polinomios";
import type { Termino } from "./helpers/polinomios";
import { combinatoria, correlacionPearson } from "./helpers/estadistica";

// ── Generador ─────────────────────────────────────────────────────────────

export class CalculoGenerator extends BaseGenerador {
  readonly id = "matematicas/calculo";
  readonly materia = "matematicas" as const;
  readonly subtipos = [
    "limites_funciones",
    "continuidad",
    "derivada_definicion",
    "derivadas_basicas",
    "reglas_derivacion",
    "aplicaciones_derivadas",
    "integral_indefinida",
    "integral_definida",
    "aplicaciones_integrales",
    "ecuaciones_diferenciales",
    "probabilidad_avanzada",
    "variables_aleatorias",
    "distribuciones",
    "estadistica_inferencial",
    "regresion_correlacion",
  ];

  generarEjercicio(subtipo: string, dificultad: Dificultad, _calc: Calculator): Ejercicio {
    switch (subtipo) {
      case "limites_funciones":      return this.limitesFunciones(dificultad);
      case "continuidad":            return this.continuidad(dificultad);
      case "derivada_definicion":    return this.derivadaDefinicion(dificultad);
      case "derivadas_basicas":      return this.derivadasBasicas(dificultad);
      case "reglas_derivacion":      return this.reglasDerivacion(dificultad);
      case "aplicaciones_derivadas": return this.aplicacionesDerivadas(dificultad);
      case "integral_indefinida":    return this.integralIndefinida(dificultad);
      case "integral_definida":      return this.integralDefinida(dificultad);
      case "aplicaciones_integrales":return this.aplicacionesIntegrales(dificultad);
      case "ecuaciones_diferenciales":return this.ecuacionesDiferenciales(dificultad);
      case "probabilidad_avanzada":  return this.probabilidadAvanzada(dificultad);
      case "variables_aleatorias":   return this.variablesAleatorias(dificultad);
      case "distribuciones":         return this.distribuciones(dificultad);
      case "estadistica_inferencial":return this.estadisticaInferencial(dificultad);
      case "regresion_correlacion":  return this.regresionCorrelacion(dificultad);
      default:                       return this.limitesFunciones(dificultad);
    }
  }

  private uid(): string {
    return `${this.id}/${this.randInt(100000, 999999)}`;
  }

  // ── 1. Límites de funciones ────────────────────────────────────────────────

  private limitesFunciones(d: Dificultad): Ejercicio {
    let enunciado: string, respuesta: number, explicacion: string;
    let terminos: Termino[] = [];

    if (d === "basico") {
      // Límite de polinomio: sustitución directa
      const a = this.randInt(-3, 3);
      const coef = this.randInt(1, 5), c = this.randInt(-5, 5);
      terminos = [{ coef, exp: 2 }, { coef: c, exp: 0 }];
      respuesta = evaluarPolinomio(terminos, a);
      enunciado = `Calcula: lim(x→${a}) [${polinomioToString(terminos)}]`;
      explicacion = `Como el polinomio es continuo, basta sustituir: ${polinomioToString(terminos).replace(/x/g, `(${a})`)} = ${respuesta}.`;
    } else if (d === "intermedio") {
      // Indeterminación 0/0: (x²-a²)/(x-a) = x+a
      const a = this.randInt(1, 5);
      respuesta = 2 * a;
      enunciado = `Calcula: lim(x→${a}) [(x²-${a * a})/(x-${a})]`;
      explicacion = `Indeterminación 0/0. Factorizando: (x+${a})(x-${a})/(x-${a}) = x+${a}. En x=${a}: ${respuesta}.`;
    } else {
      // Límite en infinito: lim(x→∞) (ax²+b)/(cx²+d) = a/c
      const a = this.randInt(1, 5), c = this.randInt(1, 5);
      const b = this.randInt(1, 8), dd = this.randInt(1, 8);
      respuesta = this.redondear(a / c, 2);
      enunciado = `Calcula: lim(x→∞) [(${a}x² + ${b})/(${c}x² + ${dd})]`;
      explicacion = `El grado del numerador = grado del denominador = 2. El límite es el cociente de coeficientes líderes: ${a}/${c} = ${respuesta}.`;
    }

    const chart: LineChartSpec = {
      kind: "line-chart",
      title: "Función cerca del límite",
      xLabel: "x",
      yLabel: "f(x)",
      series: [{
        id: "func",
        label: "f(x)",
        color: "#4f46e5",
        points: (() => {
          if (d === "basico") {
            return generarPuntos(x => evaluarPolinomio(terminos, x), -5, 5, 50);
          } else if (d === "intermedio") {
            return generarPuntos(x => Math.abs(x - 2) < 1e-9 ? NaN : (x * x - 4) / (x - 2), -1, 5, 60);
          } else {
            return generarPuntos(x => (x * x + 1) / (x * x + 2), -10, 10, 60);
          }
        })(),
      }],
    };

    const incorrectas = this.generarOpcionesIncorrectas(respuesta, 3, 0.4);
    return {
      id: this.uid(),
      materia: this.materia,
      subtipo: "limites_funciones",
      dificultad: d,
      tipo: "quiz",
      enunciado,
      opciones: [String(respuesta), ...incorrectas.map(String)],
      indiceCorrecto: 0,
      explicacion,
      visual: chart,
    };
  }

  // ── 2. Continuidad ────────────────────────────────────────────────────────

  private continuidad(d: Dificultad): Ejercicio {
    const a = this.randInt(1, 5);
    const tipo = this.pickOne(["continua", "salto", "evitable"] as const);

    if (tipo === "continua" || d === "basico") {
      return this.crearQuiz({
        id: this.uid(), materia: this.materia, subtipo: "continuidad", dificultad: d,
        enunciado: `¿Es f(x) = x² + ${a} continua en x = ${a}?`,
        opciones: ["Sí, es continua", "No, tiene discontinuidad de salto", "No, tiene discontinuidad evitable", "No está definida"],
        indiceCorrecto: 0,
        explicacion: `Los polinomios son continuos en todo ℝ. f(${a}) = ${a * a + a}, y el límite en x=${a} es también ${a * a + a}. Es continua.`,
      });
    } else if (tipo === "salto") {
      return this.crearQuiz({
        id: this.uid(), materia: this.materia, subtipo: "continuidad", dificultad: d,
        enunciado: `La función f(x) = 1/(x-${a}) tiene una discontinuidad en x = ${a}. ¿De qué tipo?`,
        opciones: ["Discontinuidad esencial (no evitable)", "Discontinuidad evitable", "Discontinuidad de salto", "Es continua"],
        indiceCorrecto: 0,
        explicacion: `En x = ${a}, el denominador es 0 y los límites laterales son ±∞. Es una discontinuidad esencial (asíntota vertical).`,
      });
    } else {
      return this.crearQuiz({
        id: this.uid(), materia: this.materia, subtipo: "continuidad", dificultad: d,
        enunciado: `Si g(x) = (x²-${a * a})/(x-${a}) para x≠${a} y g(${a})=0, ¿es continua en x=${a}?`,
        opciones: ["No, tiene discontinuidad evitable (el límite es ${2 * a} pero g(${a})=0)", "Sí, es continua", "No, tiene discontinuidad esencial", "No está definida"],
        indiceCorrecto: 0,
        explicacion: `lim(x→${a}) (x²-${a * a})/(x-${a}) = lim(x→${a})(x+${a}) = ${2 * a} ≠ 0 = g(${a}). Discontinuidad evitable.`,
      });
    }
  }

  // ── 3. Derivada por definición ────────────────────────────────────────────

  private derivadaDefinicion(d: Dificultad): Ejercicio {
    const a = this.randInt(1, 4);
    const c = this.randInt(1, 5);
    // f(x) = ax² + c  ->  f'(x) = 2ax  ->  f'(x0) = 2a·x0
    const x0 = d === "basico" ? this.randInt(1, 3) : this.randInt(-3, 5);
    const fPrime = 2 * a * x0;

    return this.crearQuiz({
      id: this.uid(), materia: this.materia, subtipo: "derivada_definicion", dificultad: d,
      enunciado: `Usando f'(x) = lim[h→0] (f(x+h)-f(x))/h, calcula f'(${x0}) si f(x) = ${a}x² + ${c}.`,
      opciones: [String(fPrime), String(fPrime + 2 * a), String(2 * a), String(a * x0 * x0)],
      indiceCorrecto: 0,
      explicacion: `f(x+h) = ${a}(x+h)² + ${c}. (f(x+h)-f(x))/h = (${a}(x²+2xh+h²)+${c}-${a}x²-${c})/h = ${a}(2x+h). Cuando h→0: f'(x) = ${2 * a}x. En x=${x0}: f'(${x0}) = ${fPrime}.`,
    });
  }

  // ── 4. Derivadas básicas ──────────────────────────────────────────────────

  private derivadasBasicas(d: Dificultad): Ejercicio {
    const grado = d === "basico" ? 2 : this.randInt(2, 4);
    const terminos: Termino[] = Array.from({ length: grado }, (_, i) => ({
      coef: this.randInt(1, 5),
      exp: grado - i,
    }));
    const derivada = derivarPolinomio(terminos);
    const funcStr = polinomioToString(terminos);
    const derivStr = polinomioToString(derivada);

    const x0 = this.randInt(1, 3);
    const valorDeriv = evaluarPolinomio(derivada, x0);

    const chart: LineChartSpec = {
      kind: "line-chart",
      title: `f(x) y f'(x)`,
      xLabel: "x",
      yLabel: "y",
      series: [
        {
          id: "func",
          label: `f(x) = ${funcStr}`,
          color: "#4f46e5",
          points: generarPuntos(x => evaluarPolinomio(terminos, x), -3, 4, 50),
        },
        {
          id: "deriv",
          label: `f'(x) = ${derivStr}`,
          color: "#e11d48",
          points: generarPuntos(x => evaluarPolinomio(derivada, x), -3, 4, 50),
        },
      ],
    };

    return {
      id: this.uid(),
      materia: this.materia,
      subtipo: "derivadas_basicas",
      dificultad: d,
      tipo: "quiz",
      enunciado: `Usando la regla de la potencia, ¿cuál es la derivada de f(x) = ${funcStr}? Evalúa f'(${x0}).`,
      opciones: [
        `f'(x) = ${derivStr}; f'(${x0}) = ${valorDeriv}`,
        `f'(x) = ${funcStr}; f'(${x0}) = ${evaluarPolinomio(terminos, x0)}`,
        `f'(x) = ${derivStr}; f'(${x0}) = ${valorDeriv + 1}`,
        `f'(x) = ${polinomioToString(terminos)}; f'(${x0}) = ${evaluarPolinomio(terminos, x0) - 1}`,
      ],
      indiceCorrecto: 0,
      explicacion: `Regla de la potencia: d/dx[ax^n] = nax^(n-1). f'(x) = ${derivStr}. f'(${x0}) = ${valorDeriv}.`,
      visual: chart,
    };
  }

  // ── 5. Reglas de derivación ───────────────────────────────────────────────

  private reglasDerivacion(d: Dificultad): Ejercicio {
    const regla = this.pickOne(d === "basico" ? ["producto"] : ["producto", "cociente", "cadena"]);

    if (regla === "producto") {
      // d/dx[u·v] = u'v + uv'   con u=ax+b, v=cx+d
      const a = this.randInt(1, 4), b = this.randInt(1, 5);
      const c = this.randInt(1, 4), dd = this.randInt(1, 5);
      // d/dx[(ax+b)(cx+d)] = a(cx+d) + (ax+b)c = 2acx + ad + bc
      const r2 = 2 * a * c, r1 = a * dd + b * c;
      return this.crearQuiz({
        id: this.uid(), materia: this.materia, subtipo: "reglas_derivacion", dificultad: d,
        enunciado: `Deriva usando la regla del producto: f(x) = (${a}x + ${b})(${c}x + ${dd})`,
        opciones: [`${r2}x + ${r1}`, `${a * c}x + ${b * dd}`, `${a}·${c}`, `${r2 + 1}x + ${r1}`],
        indiceCorrecto: 0,
        explicacion: `f'(x) = ${a}·(${c}x+${dd}) + (${a}x+${b})·${c} = ${a * c}x+${a * dd}+${a * c}x+${b * c} = ${r2}x+${r1}.`,
      });
    } else if (regla === "cociente") {
      // d/dx[u/v] = (u'v - uv')/v²  con u=ax, v=x+b
      const a = this.randInt(1, 4), b = this.randInt(1, 5);
      // d/dx[ax/(x+b)] = (a(x+b) - ax)/(x+b)² = ab/(x+b)²
      const num = a * b;
      return this.crearQuiz({
        id: this.uid(), materia: this.materia, subtipo: "reglas_derivacion", dificultad: d,
        enunciado: `Deriva usando la regla del cociente: f(x) = ${a}x/(x + ${b})`,
        opciones: [`${num}/(x+${b})²`, `${a}/(x+${b})`, `${a}`, `${a}/(x+${b})²`],
        indiceCorrecto: 0,
        explicacion: `f'(x) = (${a}(x+${b}) - ${a}x·1)/(x+${b})² = ${num}/(x+${b})².`,
      });
    } else {
      // d/dx[f(g(x))] = f'(g(x))·g'(x)  con f(u)=u², g(x)=ax+b
      const a = this.randInt(1, 4), b = this.randInt(1, 5);
      // d/dx[(ax+b)²] = 2(ax+b)·a = 2a(ax+b)
      return this.crearQuiz({
        id: this.uid(), materia: this.materia, subtipo: "reglas_derivacion", dificultad: d,
        enunciado: `Deriva usando la regla de la cadena: f(x) = (${a}x + ${b})²`,
        opciones: [`2(${a}x + ${b})·${a}`, `2(${a}x + ${b})`, `${a}(${a}x+${b})`, `(${a}x+${b})²`],
        indiceCorrecto: 0,
        explicacion: `f'(x) = 2(${a}x+${b})·d/dx[${a}x+${b}] = 2(${a}x+${b})·${a}.`,
      });
    }
  }

  // ── 6. Aplicaciones de derivadas ──────────────────────────────────────────

  private aplicacionesDerivadas(d: Dificultad): Ejercicio {
    // f(x) = ax³ + bx² + cx  ->  f'(x) = 3ax² + 2bx + c
    // Para a=1, b=-3, c=0: f(x)=x³-3x², f'(x)=3x²-6x=3x(x-2), críticos x=0 y x=2
    const b = this.randInt(-4, -1);
    const x2 = this.redondear(-2 * b / 3, 2);

    if (d === "basico") {
      return this.crearQuiz({
        id: this.uid(), materia: this.materia, subtipo: "aplicaciones_derivadas", dificultad: d,
        enunciado: `Si f'(x) = 3x² + ${2 * b}x, ¿en qué valores de x son los puntos críticos (f'(x)=0)?`,
        opciones: [`x=0 y x=${x2}`, `x=${x2}`, `x=0`, `x=1 y x=${b}`],
        indiceCorrecto: 0,
        explicacion: `3x² + ${2 * b}x = 0 → x(3x + ${2 * b}) = 0 → x = 0 o x = ${x2}.`,
      });
    } else {
      return this.crearQuiz({
        id: this.uid(), materia: this.materia, subtipo: "aplicaciones_derivadas", dificultad: d,
        enunciado: `Para f(x) = x³ + ${b}x², los puntos críticos son x=0 y x=${x2}. ¿Cuál es el mínimo local?`,
        opciones: [`x = ${x2}`, "x = 0", "No tiene mínimo local", `x = ${-b}`],
        indiceCorrecto: 0,
        explicacion: `f''(x) = 6x + ${2 * b}. En x=${x2}: f''(${x2}) = ${6 * x2 + 2 * b} > 0 → mínimo local. En x=0: f''(0) = ${2 * b} < 0 → máximo local.`,
      });
    }
  }

  // ── 7. Integral indefinida ────────────────────────────────────────────────

  private integralIndefinida(d: Dificultad): Ejercicio {
    const n = d === "basico" ? this.randInt(1, 3) : this.randInt(2, 5);
    const coef = this.randInt(1, 5);
    // ∫ coef·x^n dx = coef/(n+1) · x^(n+1) + C
    const newExp = n + 1;

    const fracNum = coef, fracDen = n + 1;
    const gcd = (a: number, b: number): number => b === 0 ? a : gcd(b, a % b);
    const g = gcd(fracNum, fracDen);
    const [sn, sd] = [fracNum / g, fracDen / g];
    const respuestaStr = sd === 1 ? `${sn}x^${newExp} + C` : `(${sn}/${sd})x^${newExp} + C`;

    return this.crearQuiz({
      id: this.uid(), materia: this.materia, subtipo: "integral_indefinida", dificultad: d,
      enunciado: `Calcula la antiderivada: ∫ ${coef}x^${n} dx`,
      opciones: [
        respuestaStr,
        `${coef}x^${n + 2} + C`,
        `${coef * n}x^${n - 1} + C`,
        sd === 1 ? `${sn}x^${newExp}` : `(${sn}/${sd})x^${newExp}`,
      ],
      indiceCorrecto: 0,
      explicacion: `Regla de la potencia inversa: ∫x^n dx = x^(n+1)/(n+1) + C. ∫${coef}x^${n} dx = ${coef}·x^${newExp}/${newExp} + C = ${respuestaStr}.`,
    });
  }

  // ── 8. Integral definida ──────────────────────────────────────────────────

  private integralDefinida(d: Dificultad): Ejercicio {
    // ∫[a,b] x^n dx = [x^(n+1)/(n+1)] desde a hasta b
    const n = d === "basico" ? 1 : this.randInt(1, 3);
    const a = 0;
    const b = d === "basico" ? this.randInt(2, 5) : this.randInt(1, 4);
    // ∫[0,b] x^n dx = b^(n+1)/(n+1)
    const resultado = this.redondear(Math.pow(b, n + 1) / (n + 1), 2);

    const chart: LineChartSpec = {
      kind: "line-chart",
      title: `∫[${a},${b}] x^${n} dx`,
      xLabel: "x",
      yLabel: "f(x)",
      series: [{
        id: "func",
        label: `f(x) = x^${n}`,
        color: "#4f46e5",
        points: generarPuntos(x => Math.pow(x, n), a - 0.5, b + 0.5, 50),
      }],
      annotations: [
        { id: "a", x: a, label: `x=${a}`, color: "#e11d48" },
        { id: "b", x: b, label: `x=${b}`, color: "#e11d48" },
      ],
    };

    return {
      id: this.uid(),
      materia: this.materia,
      subtipo: "integral_definida",
      dificultad: d,
      tipo: "quiz",
      enunciado: `Calcula: ∫[${a},${b}] x^${n} dx (área bajo la curva entre x=${a} y x=${b})`,
      opciones: [String(resultado), String(resultado + 1), String(b - a), String(Math.pow(b, n))],
      indiceCorrecto: 0,
      explicacion: `∫[${a},${b}] x^${n} dx = [x^${n + 1}/${n + 1}]₀^${b} = ${b}^${n + 1}/${n + 1} - 0 = ${resultado}.`,
      visual: chart,
    };
  }

  // ── 9. Aplicaciones de integrales ─────────────────────────────────────────

  private aplicacionesIntegrales(d: Dificultad): Ejercicio {
    // Área entre y=x² y y=x en [0,1]: ∫[0,1](x-x²)dx = 1/2 - 1/3 = 1/6
    if (d === "basico") {
      return this.crearQuiz({
        id: this.uid(), materia: this.materia, subtipo: "aplicaciones_integrales", dificultad: d,
        enunciado: `Calcula el área entre f(x) = x y g(x) = x² en el intervalo [0, 1].`,
        opciones: ["1/6", "1/2", "1/3", "1/4"],
        indiceCorrecto: 0,
        explicacion: `Área = ∫[0,1](x - x²)dx = [x²/2 - x³/3]₀¹ = (1/2 - 1/3) = 1/6.`,
      });
    } else {
      // Área entre y=x y y=x² en [0,2]: ∫[0,2](x-x²)dx = [x²/2-x³/3]₀² = 2-8/3 = -2/3 (tomar abs)
      const b = this.randInt(2, 4);
      const area = this.redondear(Math.pow(b, 2) / 2 - Math.pow(b, 3) / 3, 4);
      return this.crearQuiz({
        id: this.uid(), materia: this.materia, subtipo: "aplicaciones_integrales", dificultad: d,
        enunciado: `Calcula el área entre f(x) = x y g(x) = x² en [0, ${b}]. (∫[0,${b}](x - x²)dx)`,
        opciones: [String(area), String(this.redondear(area + 0.5, 2)), String(b / 2), String(this.redondear(area - 1, 2))],
        indiceCorrecto: 0,
        explicacion: `∫[0,${b}](x-x²)dx = [x²/2 - x³/3]₀^${b} = ${b}²/2 - ${b}³/3 = ${Math.pow(b, 2) / 2} - ${this.redondear(Math.pow(b, 3) / 3, 4)} = ${area}.`,
      });
    }
  }

  // ── 10. Ecuaciones diferenciales ──────────────────────────────────────────

  private ecuacionesDiferenciales(d: Dificultad): Ejercicio {
    // dy/dx = ky  ->  y = Ce^(kx)
    const k = this.randInt(1, 4);

    if (d === "basico") {
      return this.crearQuiz({
        id: this.uid(), materia: this.materia, subtipo: "ecuaciones_diferenciales", dificultad: d,
        enunciado: `Resuelve la EDO separable: dy/dx = ${k}y`,
        opciones: [`y = Ce^(${k}x)`, `y = ${k}x + C`, `y = x^${k} + C`, `y = Ce^(-${k}x)`],
        indiceCorrecto: 0,
        explicacion: `Separando: dy/y = ${k}dx. Integrando: ln|y| = ${k}x + C₁. Por tanto y = Ce^(${k}x).`,
      });
    } else {
      // dy/dx = x/y  ->  y² = x² + C
      return this.crearQuiz({
        id: this.uid(), materia: this.materia, subtipo: "ecuaciones_diferenciales", dificultad: d,
        enunciado: `Resuelve la EDO separable: dy/dx = x/y`,
        opciones: ["y² = x² + C", "y = x² + C", "y² = x + C", "y = x + C"],
        indiceCorrecto: 0,
        explicacion: `Separando: y dy = x dx. Integrando: y²/2 = x²/2 + C₁. Por tanto y² = x² + C.`,
      });
    }
  }

  // ── 11. Probabilidad avanzada ─────────────────────────────────────────────

  private probabilidadAvanzada(d: Dificultad): Ejercicio {
    if (d === "basico") {
      // P(A∩B) = P(A)·P(B) para independientes
      const pa = this.pickOne([1, 1, 2, 3]) / 4;
      const pb = this.pickOne([1, 1, 2, 3]) / 4;
      const pab = this.redondear(pa * pb, 4);
      return this.crearQuiz({
        id: this.uid(), materia: this.materia, subtipo: "probabilidad_avanzada", dificultad: d,
        enunciado: `Si P(A) = ${pa} y P(B) = ${pb}, y A y B son independientes, ¿cuánto es P(A∩B)?`,
        opciones: [String(pab), String(this.redondear(pa + pb, 2)), String(this.redondear(pa * 2, 2)), "0"],
        indiceCorrecto: 0,
        explicacion: `Para eventos independientes: P(A∩B) = P(A)·P(B) = ${pa}·${pb} = ${pab}.`,
      });
    } else {
      // P(A|B) = P(A∩B)/P(B) o Bayes simple
      const pAyB = this.randInt(1, 3) / 10;
      const pB = this.randInt(4, 8) / 10;
      const pAgivenB = this.redondear(pAyB / pB, 2);
      return this.crearQuiz({
        id: this.uid(), materia: this.materia, subtipo: "probabilidad_avanzada", dificultad: d,
        enunciado: `Si P(A∩B) = ${pAyB} y P(B) = ${pB}, ¿cuánto es P(A|B)?`,
        opciones: [String(pAgivenB), String(this.redondear(pAyB + pB, 2)), String(pAyB), String(this.redondear(1 - pAgivenB, 2))],
        indiceCorrecto: 0,
        explicacion: `P(A|B) = P(A∩B)/P(B) = ${pAyB}/${pB} = ${pAgivenB}.`,
      });
    }
  }

  // ── 12. Variables aleatorias ──────────────────────────────────────────────

  private variablesAleatorias(d: Dificultad): Ejercicio {
    // Distribución discreta simple: P(X=xi), calcular E(X)
    const vals = [this.randInt(1, 3), this.randInt(4, 6), this.randInt(7, 9)];
    const p1 = 0.3, p2 = 0.5, p3 = 0.2;
    const EX = this.redondear(vals[0] * p1 + vals[1] * p2 + vals[2] * p3, 2);
    const EX2 = this.redondear(vals[0] ** 2 * p1 + vals[1] ** 2 * p2 + vals[2] ** 2 * p3, 2);
    const varX = this.redondear(EX2 - EX ** 2, 2);

    if (d === "basico") {
      return this.crearQuiz({
        id: this.uid(), materia: this.materia, subtipo: "variables_aleatorias", dificultad: d,
        enunciado: `X tiene distribución: P(X=${vals[0]})=0.3, P(X=${vals[1]})=0.5, P(X=${vals[2]})=0.2. ¿Cuánto vale E(X)?`,
        opciones: [String(EX), String(this.redondear(EX + 1, 2)), String(vals[1]), String(this.redondear((vals[0] + vals[1] + vals[2]) / 3, 2))],
        indiceCorrecto: 0,
        explicacion: `E(X) = ${vals[0]}·0.3 + ${vals[1]}·0.5 + ${vals[2]}·0.2 = ${vals[0] * p1} + ${vals[1] * p2} + ${vals[2] * p3} = ${EX}.`,
      });
    } else {
      return this.crearQuiz({
        id: this.uid(), materia: this.materia, subtipo: "variables_aleatorias", dificultad: d,
        enunciado: `X tiene E(X) = ${EX} y E(X²) = ${EX2}. Usando Var(X) = E(X²) - [E(X)]², ¿cuánto vale Var(X)?`,
        opciones: [String(varX), String(EX2), String(EX), String(this.redondear(varX + 1, 2))],
        indiceCorrecto: 0,
        explicacion: `Var(X) = E(X²) - [E(X)]² = ${EX2} - ${EX}² = ${EX2} - ${this.redondear(EX ** 2, 2)} = ${varX}.`,
      });
    }
  }

  // ── 13. Distribuciones ────────────────────────────────────────────────────

  private distribuciones(d: Dificultad): Ejercicio {
    if (d === "basico") {
      // Binomial: P(X=k) = C(n,k)·p^k·(1-p)^(n-k)
      const n = this.randInt(3, 6), p = 0.5;
      const k = this.randInt(0, n);
      const prob = this.redondear(combinatoria(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k), 4);
      return this.crearQuiz({
        id: this.uid(), materia: this.materia, subtipo: "distribuciones", dificultad: d,
        enunciado: `X ~ B(${n}, 0.5). Calcula P(X = ${k}).`,
        opciones: [String(prob), String(this.redondear(prob + 0.1, 4)), String(1 / n), String(p)],
        indiceCorrecto: 0,
        explicacion: `P(X=${k}) = C(${n},${k})·(0.5)^${k}·(0.5)^${n - k} = ${combinatoria(n, k)}·(0.5)^${n} = ${prob}.`,
      });
    } else {
      // Normal: regla 68-95-99.7
      const mu = this.randInt(50, 100), sigma = this.randInt(5, 15);
      return this.crearQuiz({
        id: this.uid(), materia: this.materia, subtipo: "distribuciones", dificultad: d,
        enunciado: `X ~ N(${mu}, ${sigma}²). Según la regla 68-95-99.7, ¿qué porcentaje de datos está en [${mu - sigma}, ${mu + sigma}]?`,
        opciones: ["68%", "95%", "99.7%", "50%"],
        indiceCorrecto: 0,
        explicacion: `La regla empírica: μ±1σ contiene el 68%, μ±2σ el 95%, μ±3σ el 99.7% de los datos.`,
      });
    }
  }

  // ── 14. Estadística inferencial ───────────────────────────────────────────

  private estadisticaInferencial(d: Dificultad): Ejercicio {
    const mu = this.randInt(40, 80);
    const sigma = this.randInt(5, 15);
    const n = this.randInt(25, 100);
    const z = 1.96; // 95%
    const margen = this.redondear(z * sigma / Math.sqrt(n), 2);
    const liminf = this.redondear(mu - margen, 2);
    const limsup = this.redondear(mu + margen, 2);

    if (d === "basico") {
      return this.crearQuiz({
        id: this.uid(), materia: this.materia, subtipo: "estadistica_inferencial", dificultad: d,
        enunciado: `Un intervalo de confianza del 95% va de ${liminf} a ${limsup}. ¿Qué significa esto?`,
        opciones: [
          "Con 95% de confianza, el parámetro poblacional está en ese intervalo",
          "El 95% de los datos están en ese intervalo",
          "Hay 95% de probabilidad de que el próximo dato esté en ese intervalo",
          "El error es del 5%",
        ],
        indiceCorrecto: 0,
        explicacion: `Un IC del 95% significa que si repitiéramos el muestreo muchas veces, el 95% de los intervalos construidos contendrían al verdadero parámetro.`,
      });
    } else {
      return this.crearQuiz({
        id: this.uid(), materia: this.materia, subtipo: "estadistica_inferencial", dificultad: d,
        enunciado: `Con media muestral x̄=${mu}, σ=${sigma}, n=${n}, calcula el IC del 95% (z=1.96).`,
        opciones: [
          `[${liminf}, ${limsup}]`,
          `[${mu - sigma}, ${mu + sigma}]`,
          `[${liminf - 1}, ${limsup + 1}]`,
          `[${mu - 1}, ${mu + 1}]`,
        ],
        indiceCorrecto: 0,
        explicacion: `IC = x̄ ± z·(σ/√n) = ${mu} ± 1.96·(${sigma}/√${n}) = ${mu} ± ${margen} = [${liminf}, ${limsup}].`,
      });
    }
  }

  // ── 15. Regresión y correlación ───────────────────────────────────────────

  private regresionCorrelacion(d: Dificultad): Ejercicio {
    // Generar pares (x,y) con correlación positiva
    const n = d === "basico" ? 5 : 8;
    const xs: number[] = [], ys: number[] = [];
    const slope = this.randFloat(0.5, 2.5, 1);
    const intercept = this.randInt(1, 10);

    for (let i = 1; i <= n; i++) {
      xs.push(i);
      ys.push(this.redondear(slope * i + intercept + this.randFloat(-0.5, 0.5, 1), 1));
    }

    const r = this.redondear(correlacionPearson(xs, ys), 2);

    const chart: LineChartSpec = {
      kind: "line-chart",
      title: "Regresión lineal",
      xLabel: "x",
      yLabel: "y",
      series: [
        {
          id: "datos",
          label: "Datos",
          color: "#4f46e5",
          points: xs.map((x, i) => ({ x, y: ys[i] })),
        },
        {
          id: "recta",
          label: `ŷ = ${slope}x + ${intercept}`,
          color: "#e11d48",
          points: generarPuntos(x => slope * x + intercept, xs[0] - 0.5, xs[n - 1] + 0.5, 20),
        },
      ],
    };

    return {
      id: this.uid(),
      materia: this.materia,
      subtipo: "regresion_correlacion",
      dificultad: d,
      tipo: "quiz",
      enunciado: `Para los datos x=[${xs.join(",")}] e y=[${ys.join(",")}], el coeficiente de correlación de Pearson r ≈ ${r}. ¿Cómo se interpreta?`,
      opciones: [
        r >= 0.7 ? "Correlación lineal positiva fuerte" : r >= 0.4 ? "Correlación lineal positiva moderada" : "Correlación lineal débil o nula",
        "Correlación lineal negativa fuerte",
        "No existe relación entre las variables",
        "Correlación perfecta",
      ],
      indiceCorrecto: 0,
      explicacion: `r = ${r}. Valores cercanos a 1 indican correlación positiva fuerte. La recta de regresión aproximada es ŷ = ${slope}x + ${intercept}.`,
      visual: chart,
    };
  }
}
