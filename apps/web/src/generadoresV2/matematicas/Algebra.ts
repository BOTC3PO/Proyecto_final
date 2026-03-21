import { BaseGenerador } from "../core/baseGenerador";
import type { PRNG } from "../core/prng";
import type { Dificultad, Ejercicio, Calculator, LineChartSpec } from "../core/types";
import { placeholder } from "../core/shared";
import { mcd } from "./helpers/estadistica";
import {
  type Termino,
  formatTermino,
  polinomioToString,
  evaluarPolinomio,
  formatFraccion,
} from "./helpers/polinomios";
import { generarPuntos } from "./helpers/calculo";

export class AlgebraGenerator extends BaseGenerador {
  readonly id = "matematicas/algebra";
  readonly materia = "matematicas" as const;
  readonly subtipos = [
    "lenguaje_algebraico",
    "terminos_semejantes",
    "evaluacion_expresiones",
    "suma_resta_polinomios",
    "multiplicacion_monomios",
    "grado_coeficientes",
    "factorizacion_basica",
    "productos_notables",
    "ecuaciones_lineales",
    "ecuaciones_parametros",
    "inecuaciones_simples",
    "sistemas_2x2",
    "ecuaciones_cuadraticas",
    "sistemas_3x3",
    "racionales_simples",
    "simplificacion_algebraica",
    "ecuaciones_fracciones",
    "funciones_lineales",
    "funcion_afin",
    "ecuacion_recta",
    "multiplicacion_polinomios",
    "division_polinomios",
    "identidad_ecuacion",
    "intervalos_soluciones",
  ];

  constructor(prng: PRNG) {
    super(prng);
  }

  generarEjercicio(subtipo: string, dificultad: Dificultad, _calc: Calculator): Ejercicio {
    switch (subtipo) {
      case "lenguaje_algebraico":    return this.genLenguajeAlgebraico(dificultad);
      case "terminos_semejantes":    return this.genTerminosSemejantes(dificultad);
      case "evaluacion_expresiones": return this.genEvaluacionExpresiones(dificultad);
      case "suma_resta_polinomios":  return this.genSumaRestaPolinomios(dificultad);
      case "multiplicacion_monomios": return this.genMultiplicacionMonomios(dificultad);
      case "grado_coeficientes":     return this.genGradoCoeficientes(dificultad);
      case "factorizacion_basica":   return this.genFactorizacionBasica(dificultad);
      case "productos_notables":     return this.genProductosNotables(dificultad);
      case "ecuaciones_lineales":    return this.genEcuacionesLineales(dificultad);
      case "ecuaciones_parametros":  return this.genEcuacionesParametros(dificultad);
      case "inecuaciones_simples":   return this.genInecuacionesSimples(dificultad);
      case "sistemas_2x2":              return this.genSistemas2x2(dificultad);
      case "ecuaciones_cuadraticas":    return this.genEcuacionesCuadraticas(dificultad);
      case "sistemas_3x3":              return this.genSistemas3x3(dificultad);
      case "racionales_simples":        return this.genRacionalesSimples(dificultad);
      case "simplificacion_algebraica": return this.genSimplificacionAlgebraica(dificultad);
      case "ecuaciones_fracciones":     return this.genEcuacionesFracciones(dificultad);
      case "funciones_lineales":        return this.genFuncionesLineales(dificultad);
      case "funcion_afin":              return this.genFuncionAfin(dificultad);
      case "ecuacion_recta":            return this.genEcuacionRecta(dificultad);
      case "multiplicacion_polinomios": return this.genMultiplicacionPolinomios(dificultad);
      case "division_polinomios":       return this.genDivisionPolinomios(dificultad);
      case "identidad_ecuacion":        return this.genIdentidadEcuacion(dificultad);
      case "intervalos_soluciones":     return this.genIntervalosSoluciones(dificultad);
      default:                          return placeholder(subtipo, this.materia, dificultad);
    }
  }

  // ── Utilidades internas ─────────────────────────────────────────────────

  private uid(): string {
    return `${this.id}/${this.randInt(100000, 999999)}`;
  }

  /** Reduce a map<exp, coef> to a sorted Termino[] removing zero-coef terms */
  private reducirTerminos(terminos: Termino[]): Termino[] {
    const mapa = new Map<number, number>();
    for (const { coef, exp } of terminos) {
      mapa.set(exp, (mapa.get(exp) ?? 0) + coef);
    }
    return Array.from(mapa.entries())
      .filter(([, c]) => c !== 0)
      .map(([exp, coef]) => ({ coef, exp }));
  }

  /** Build an unreduced polynomial string from a Termino[] in original order */
  private sinReducirStr(terminos: Termino[]): string {
    let result = "";
    let first = true;
    for (const { coef, exp } of terminos) {
      if (coef === 0) continue;
      if (first) {
        result += formatTermino(coef, exp);
        first = false;
      } else {
        if (coef > 0) {
          result += ` + ${formatTermino(coef, exp)}`;
        } else {
          result += ` - ${formatTermino(Math.abs(coef), exp)}`;
        }
      }
    }
    return result || "0";
  }

  // ── 1. Lenguaje algebraico ──────────────────────────────────────────────

  private genLenguajeAlgebraico(dif: Dificultad): Ejercicio {
    type Plantilla = { verbal: string; algebraica: string; incorrectas: [string, string, string] };

    const basicaPools: Plantilla[] = [
      { verbal: "el doble de x", algebraica: "2x", incorrectas: ["x + 2", "x/2", "x²"] },
      { verbal: "la mitad de x", algebraica: "x/2", incorrectas: ["2x", "x - 2", "x²"] },
      { verbal: "cinco más x", algebraica: "x + 5", incorrectas: ["5x", "x - 5", "5 - x"] },
      { verbal: "x menos tres", algebraica: "x - 3", incorrectas: ["3 - x", "x + 3", "3x"] },
      { verbal: "el triple de x", algebraica: "3x", incorrectas: ["x + 3", "x/3", "x³"] },
      { verbal: "x más diez", algebraica: "x + 10", incorrectas: ["10x", "x - 10", "10 - x"] },
      { verbal: "el cuádruplo de x", algebraica: "4x", incorrectas: ["x + 4", "x⁴", "x/4"] },
    ];

    const intermediaPools: Plantilla[] = [
      { verbal: "la suma de x e y", algebraica: "x + y", incorrectas: ["xy", "x - y", "x/y"] },
      { verbal: "el producto de a y b", algebraica: "ab", incorrectas: ["a + b", "a - b", "a/b"] },
      { verbal: "x dividido entre y", algebraica: "x/y", incorrectas: ["xy", "x + y", "y/x"] },
      {
        verbal: "tres veces x más dos veces y",
        algebraica: "3x + 2y",
        incorrectas: ["3x - 2y", "2x + 3y", "3x · 2y"],
      },
      {
        verbal: "la diferencia entre a y el doble de b",
        algebraica: "a - 2b",
        incorrectas: ["2a - b", "a + 2b", "2b - a"],
      },
    ];

    const avanzadaPools: Plantilla[] = [
      {
        verbal: "el cuadrado de x más tres",
        algebraica: "x² + 3",
        incorrectas: ["2x + 3", "x + 3²", "(x + 3)²"],
      },
      { verbal: "el cubo de x", algebraica: "x³", incorrectas: ["3x", "x²", "x · 3"] },
      {
        verbal: "x al cuadrado menos cinco",
        algebraica: "x² - 5",
        incorrectas: ["(x - 5)²", "x - 5²", "2x - 5"],
      },
      {
        verbal: "el cuadrado de la suma de x más dos",
        algebraica: "(x + 2)²",
        incorrectas: ["x² + 2", "x² + 4", "x² + 2²"],
      },
      {
        verbal: "dos veces x al cuadrado más x",
        algebraica: "2x² + x",
        incorrectas: ["(2x)² + x", "2x² - x", "x² + 2x"],
      },
    ];

    const pool =
      dif === "basico" ? basicaPools : dif === "intermedio" ? intermediaPools : avanzadaPools;
    const p = this.pickOne(pool);

    return this.crearQuiz({
      id: this.uid(),
      materia: this.materia,
      subtipo: "lenguaje_algebraico",
      dificultad: dif,
      enunciado: `Traduce la expresión verbal al lenguaje algebraico: "${p.verbal}"`,
      opciones: [p.algebraica, ...p.incorrectas],
      indiceCorrecto: 0,
    });
  }

  // ── 2. Términos semejantes ──────────────────────────────────────────────

  private genTerminosSemejantes(dif: Dificultad): Ejercicio {
    const maxGrado = dif === "basico" ? 1 : dif === "intermedio" ? 2 : 3;
    const numGrupos = dif === "basico" ? 2 : 3;

    // Pick unique exponents
    const allExps = Array.from({ length: maxGrado + 1 }, (_, i) => i);
    const shuffledExps = this.shuffle([...allExps]);
    const exps = shuffledExps.slice(0, Math.min(numGrupos, shuffledExps.length));

    // For each exponent, generate 2 terms (so they appear unreduced)
    const terminos: Termino[] = [];
    for (const exp of exps) {
      const c1 = this.randInt(-5, 5) || 1;
      const c2 = this.randInt(-5, 5) || 1;
      terminos.push({ coef: c1, exp });
      terminos.push({ coef: c2, exp });
    }

    const shuffledTerminos = this.shuffle([...terminos]);
    const sinReducir = this.sinReducirStr(shuffledTerminos);
    const reducidos = this.reducirTerminos(terminos);
    const respuesta = polinomioToString(reducidos);

    const inc1 = reducidos.map((t, i) =>
      i === 0 ? { ...t, coef: t.coef + 1 } : t
    );
    const inc2 = reducidos.map((t, i) =>
      i === 0 ? { ...t, coef: t.coef - 1 } : t
    );
    const inc3 = reducidos.map(t => ({ ...t, coef: -t.coef }));

    const incorrectas = [
      polinomioToString(inc1),
      polinomioToString(inc2),
      polinomioToString(inc3),
    ].filter(o => o !== respuesta);

    return this.crearQuiz({
      id: this.uid(),
      materia: this.materia,
      subtipo: "terminos_semejantes",
      dificultad: dif,
      enunciado: `Reduce los términos semejantes: ${sinReducir}`,
      opciones: [respuesta, ...incorrectas.slice(0, 3)],
      indiceCorrecto: 0,
      explicacion: `Agrupando por grado: ${respuesta}`,
    });
  }

  // ── 3. Evaluación de expresiones ───────────────────────────────────────

  private genEvaluacionExpresiones(dif: Dificultad): Ejercicio {
    const maxGrado = dif === "basico" ? 1 : dif === "intermedio" ? 2 : 3;
    const numTerms = dif === "basico" ? 2 : dif === "intermedio" ? 3 : 4;

    const terminos: Termino[] = [];
    const usedExps = new Set<number>();
    for (let i = 0; i < numTerms; i++) {
      let exp: number;
      let intentos = 0;
      do {
        exp = this.randInt(0, maxGrado);
        intentos++;
      } while (usedExps.has(exp) && intentos < 20);
      usedExps.add(exp);
      const coef = this.randInt(-4, 4) || 1;
      terminos.push({ coef, exp });
    }

    const x = this.randInt(-3, 3) || 1;
    const resultado = evaluarPolinomio(terminos, x);
    const polStr = polinomioToString(terminos);

    const incorrectas = [resultado + 1, resultado - 1, resultado + 2, resultado - 2]
      .filter(v => v !== resultado)
      .slice(0, 3);

    return this.crearQuiz({
      id: this.uid(),
      materia: this.materia,
      subtipo: "evaluacion_expresiones",
      dificultad: dif,
      enunciado: `Evalúa la expresión ${polStr} cuando x = ${x}`,
      opciones: [String(resultado), ...incorrectas.map(String)],
      indiceCorrecto: 0,
      explicacion: `Sustituyendo x = ${x} en ${polStr} se obtiene ${resultado}`,
    });
  }

  // ── 4. Suma y resta de polinomios ──────────────────────────────────────

  private genSumaRestaPolinomios(dif: Dificultad): Ejercicio {
    const maxGrado = dif === "basico" ? 1 : dif === "intermedio" ? 2 : 3;
    const esResta = this.prng.next() < 0.5;
    const numTerms = dif === "basico" ? 2 : 3;

    const p1: Termino[] = [];
    const p2: Termino[] = [];
    for (let i = 0; i <= Math.min(maxGrado, numTerms - 1); i++) {
      p1.push({ coef: this.randInt(-5, 5) || 1, exp: i });
      p2.push({ coef: this.randInt(-5, 5) || 1, exp: i });
    }

    const combined = [
      ...p1,
      ...p2.map(t => ({ coef: esResta ? -t.coef : t.coef, exp: t.exp })),
    ];
    const resultTerminos = this.reducirTerminos(combined);
    const p1Str = polinomioToString(p1);
    const p2Str = polinomioToString(p2);
    const resultStr = polinomioToString(resultTerminos);

    const inc1 = this.reducirTerminos([...p1, ...p2]);
    const inc2 = resultTerminos.map((t, i) => i === 0 ? { ...t, coef: t.coef + 1 } : t);
    const inc3 = resultTerminos.map((t, i) => i === 0 ? { ...t, coef: t.coef - 1 } : t);

    const incorrectas = [
      polinomioToString(inc1),
      polinomioToString(inc2),
      polinomioToString(inc3),
    ].filter(o => o !== resultStr);

    const op = esResta ? "−" : "+";

    return this.crearQuiz({
      id: this.uid(),
      materia: this.materia,
      subtipo: "suma_resta_polinomios",
      dificultad: dif,
      enunciado: `Calcula: (${p1Str}) ${op} (${p2Str})`,
      opciones: [resultStr, ...incorrectas.slice(0, 3)],
      indiceCorrecto: 0,
      explicacion: `Combinando términos semejantes: ${resultStr}`,
    });
  }

  // ── 5. Multiplicación de monomios ──────────────────────────────────────

  private genMultiplicacionMonomios(dif: Dificultad): Ejercicio {
    let mCoefNum: number;
    let mCoefDen: number;
    let mExp: number;
    let monomioStr: string;

    if (dif === "avanzado") {
      mCoefDen = this.pickOne([2, 3, 4]);
      mCoefNum = this.randInt(1, mCoefDen - 1);
      mExp = this.randInt(1, 2);
      monomioStr =
        mExp === 1
          ? `(${mCoefNum}/${mCoefDen})x`
          : `(${mCoefNum}/${mCoefDen})x^${mExp}`;
    } else {
      mCoefNum = this.randInt(2, 5);
      mCoefDen = 1;
      mExp = dif === "basico" ? 0 : this.randInt(0, 1);
      monomioStr = formatTermino(mCoefNum, mExp);
    }

    const numTerms = dif === "basico" ? 2 : 3;
    const polTerms: Termino[] = [];
    for (let i = 0; i < numTerms; i++) {
      // For avanzado with fraction, ensure clean results: coefs multiples of mCoefDen
      const baseCoef = this.randInt(1, 4);
      const coef = dif === "avanzado" ? baseCoef * mCoefDen : baseCoef;
      const signed = i > 0 && this.prng.next() < 0.3 ? -coef : coef;
      polTerms.push({ coef: signed, exp: i });
    }

    const resultTerms: Termino[] = polTerms.map(({ coef, exp }) => ({
      coef: (mCoefNum * coef) / mCoefDen,
      exp: exp + mExp,
    }));

    const polStr = polinomioToString(polTerms);
    const resultStr = polinomioToString(resultTerms);

    const inc1 = resultTerms.map((t, i) => i === 0 ? { ...t, coef: t.coef + 1 } : t);
    const inc2 = resultTerms.map(t => ({ ...t, exp: t.exp + 1 }));
    const inc3 = resultTerms.map(t => ({ ...t, coef: t.coef * 2 }));

    const incorrectas = [
      polinomioToString(inc1),
      polinomioToString(inc2),
      polinomioToString(inc3),
    ].filter(o => o !== resultStr);

    return this.crearQuiz({
      id: this.uid(),
      materia: this.materia,
      subtipo: "multiplicacion_monomios",
      dificultad: dif,
      enunciado: `Calcula: ${monomioStr} · (${polStr})`,
      opciones: [resultStr, ...incorrectas.slice(0, 3)],
      indiceCorrecto: 0,
      explicacion: `Multiplica cada término del polinomio por ${monomioStr}: ${resultStr}`,
    });
  }

  // ── 6. Grado y coeficientes ────────────────────────────────────────────

  private genGradoCoeficientes(dif: Dificultad): Ejercicio {
    const maxGrado = dif === "basico" ? 2 : dif === "intermedio" ? 3 : 4;
    const numTerms = dif === "basico" ? 2 : 3;

    const terminos: Termino[] = [];
    const usedExps = new Set<number>();
    for (let i = 0; i < numTerms; i++) {
      let exp: number;
      let intentos = 0;
      do {
        exp = this.randInt(0, maxGrado);
        intentos++;
      } while (usedExps.has(exp) && intentos < 20);
      usedExps.add(exp);
      const coef = this.randInt(-8, 8);
      if (coef !== 0) terminos.push({ coef, exp });
    }
    if (terminos.length === 0) terminos.push({ coef: 1, exp: 1 });

    const polStr = polinomioToString(terminos);
    const grado = Math.max(...terminos.map(t => t.exp));
    const principal = terminos.find(t => t.exp === grado) ?? terminos[0];
    const coefPrincipal = principal.coef;
    const terminoInd = terminos.find(t => t.exp === 0)?.coef ?? 0;

    const aspectos = ["grado", "coeficiente_principal", "termino_independiente"] as const;
    const aspecto = this.pickOne([...aspectos]);

    let pregunta: string;
    let respuesta: number;

    if (aspecto === "grado") {
      pregunta = "¿Cuál es el grado del polinomio?";
      respuesta = grado;
    } else if (aspecto === "coeficiente_principal") {
      pregunta = "¿Cuál es el coeficiente principal?";
      respuesta = coefPrincipal;
    } else {
      pregunta = "¿Cuál es el término independiente?";
      respuesta = terminoInd;
    }

    const incorrectas = [respuesta + 1, respuesta - 1, respuesta + 2]
      .filter(v => v !== respuesta)
      .slice(0, 3);

    return this.crearQuiz({
      id: this.uid(),
      materia: this.materia,
      subtipo: "grado_coeficientes",
      dificultad: dif,
      enunciado: `Para el polinomio ${polStr}: ${pregunta}`,
      opciones: [String(respuesta), ...incorrectas.map(String)],
      indiceCorrecto: 0,
    });
  }

  // ── 7. Factorización básica ────────────────────────────────────────────

  private genFactorizacionBasica(dif: Dificultad): Ejercicio {
    if (dif === "basico") {
      // Factor común: factor*(a·x + b)
      const factor = this.randInt(2, 6);
      const a = this.randInt(1, 5);
      const b = this.randInt(1, 5);
      const expr = `${factor * a}x + ${factor * b}`;
      const factorizado = `${factor}(${a}x + ${b})`;

      return this.crearQuiz({
        id: this.uid(),
        materia: this.materia,
        subtipo: "factorizacion_basica",
        dificultad: dif,
        enunciado: `Factoriza extrayendo el factor común: ${expr}`,
        opciones: [
          factorizado,
          `${factor}(${a}x - ${b})`,
          `${factor + 1}(${a}x + ${b})`,
          `${factor}(${a + 1}x + ${b})`,
        ],
        indiceCorrecto: 0,
        explicacion: `El factor común es ${factor}: ${factorizado}`,
      });
    }

    if (dif === "intermedio") {
      // Diferencia de cuadrados: x² - a²
      const a = this.randInt(2, 8);
      const expr = `x² - ${a * a}`;
      const factorizado = `(x + ${a})(x - ${a})`;

      return this.crearQuiz({
        id: this.uid(),
        materia: this.materia,
        subtipo: "factorizacion_basica",
        dificultad: dif,
        enunciado: `Factoriza: ${expr}`,
        opciones: [
          factorizado,
          `(x + ${a})²`,
          `(x - ${a})²`,
          `(x + ${a * a})(x - 1)`,
        ],
        indiceCorrecto: 0,
        explicacion: `Diferencia de cuadrados a² - b² = (a+b)(a-b): ${factorizado}`,
      });
    }

    // avanzado: trinomio cuadrado perfecto: (x + a)² = x² + 2ax + a²
    const a = this.randInt(2, 7);
    const b = 2 * a;
    const c = a * a;
    const expr = `x² + ${b}x + ${c}`;
    const factorizado = `(x + ${a})²`;

    return this.crearQuiz({
      id: this.uid(),
      materia: this.materia,
      subtipo: "factorizacion_basica",
      dificultad: dif,
      enunciado: `Factoriza como trinomio cuadrado perfecto: ${expr}`,
      opciones: [
        factorizado,
        `(x - ${a})²`,
        `(x + ${a})(x - ${a})`,
        `(x + ${a + 1})²`,
      ],
      indiceCorrecto: 0,
      explicacion: `x² + ${b}x + ${c} = (x + ${a})²`,
    });
  }

  // ── 8. Productos notables ──────────────────────────────────────────────

  private genProductosNotables(dif: Dificultad): Ejercicio {
    const tipo = this.pickOne([
      "cuadrado_suma",
      "cuadrado_resta",
      "dif_cuadrados",
    ] as const);
    const expandir = dif === "basico" || this.prng.next() < 0.5;
    const b = this.randInt(2, 8);

    if (tipo === "cuadrado_suma") {
      const expanded = `x² + ${2 * b}x + ${b * b}`;
      if (expandir) {
        return this.crearQuiz({
          id: this.uid(),
          materia: this.materia,
          subtipo: "productos_notables",
          dificultad: dif,
          enunciado: `Expande: (x + ${b})²`,
          opciones: [
            expanded,
            `x² + ${b}x + ${b * b}`,
            `x² + ${2 * b}x - ${b * b}`,
            `x² - ${2 * b}x + ${b * b}`,
          ],
          indiceCorrecto: 0,
          explicacion: `(x + ${b})² = x² + 2·${b}·x + ${b}² = ${expanded}`,
        });
      }
      return this.crearQuiz({
        id: this.uid(),
        materia: this.materia,
        subtipo: "productos_notables",
        dificultad: dif,
        enunciado: `Factoriza como producto notable: ${expanded}`,
        opciones: [
          `(x + ${b})²`,
          `(x - ${b})²`,
          `(x + ${b})(x - ${b})`,
          `(x + ${b * b})²`,
        ],
        indiceCorrecto: 0,
        explicacion: `x² + ${2 * b}x + ${b * b} = (x + ${b})²`,
      });
    }

    if (tipo === "cuadrado_resta") {
      const expanded = `x² - ${2 * b}x + ${b * b}`;
      if (expandir) {
        return this.crearQuiz({
          id: this.uid(),
          materia: this.materia,
          subtipo: "productos_notables",
          dificultad: dif,
          enunciado: `Expande: (x - ${b})²`,
          opciones: [
            expanded,
            `x² - ${b}x + ${b * b}`,
            `x² + ${2 * b}x + ${b * b}`,
            `x² - ${2 * b}x - ${b * b}`,
          ],
          indiceCorrecto: 0,
          explicacion: `(x - ${b})² = x² - 2·${b}·x + ${b}² = ${expanded}`,
        });
      }
      return this.crearQuiz({
        id: this.uid(),
        materia: this.materia,
        subtipo: "productos_notables",
        dificultad: dif,
        enunciado: `Factoriza como producto notable: ${expanded}`,
        opciones: [
          `(x - ${b})²`,
          `(x + ${b})²`,
          `(x + ${b})(x - ${b})`,
          `(x - ${b * b})²`,
        ],
        indiceCorrecto: 0,
        explicacion: `x² - ${2 * b}x + ${b * b} = (x - ${b})²`,
      });
    }

    // dif_cuadrados: (x + b)(x - b) = x² - b²
    const expanded = `x² - ${b * b}`;
    if (expandir) {
      return this.crearQuiz({
        id: this.uid(),
        materia: this.materia,
        subtipo: "productos_notables",
        dificultad: dif,
        enunciado: `Expande: (x + ${b})(x - ${b})`,
        opciones: [
          expanded,
          `x² + ${b * b}`,
          `x² - ${b}x - ${b * b}`,
          `x² - ${2 * b}x + ${b * b}`,
        ],
        indiceCorrecto: 0,
        explicacion: `(x + ${b})(x - ${b}) = x² - ${b}² = ${expanded}`,
      });
    }
    return this.crearQuiz({
      id: this.uid(),
      materia: this.materia,
      subtipo: "productos_notables",
      dificultad: dif,
      enunciado: `Factoriza como producto notable: ${expanded}`,
      opciones: [
        `(x + ${b})(x - ${b})`,
        `(x - ${b})²`,
        `(x + ${b})²`,
        `(x + ${b * b})(x - 1)`,
      ],
      indiceCorrecto: 0,
      explicacion: `x² - ${b * b} = (x + ${b})(x - ${b})`,
    });
  }

  // ── 9. Ecuaciones lineales ─────────────────────────────────────────────

  private genEcuacionesLineales(dif: Dificultad): Ejercicio {
    if (dif === "basico") {
      const a = this.randInt(1, 5);
      const xVal = this.randInt(1, 10);
      const b = this.randInt(0, 10);
      const c = a * xVal + b;

      const incorrectas = [xVal + 1, xVal - 1, xVal + 2]
        .filter(v => v !== xVal)
        .map(String)
        .slice(0, 3);

      return this.crearQuiz({
        id: this.uid(),
        materia: this.materia,
        subtipo: "ecuaciones_lineales",
        dificultad: dif,
        enunciado: `Resuelve: ${a}x + ${b} = ${c}`,
        opciones: [String(xVal), ...incorrectas],
        indiceCorrecto: 0,
        explicacion: `${a}x = ${c} - ${b} = ${c - b}; x = ${c - b}/${a} = ${xVal}`,
      });
    }

    if (dif === "intermedio") {
      const a = this.randInt(-5, -1);
      const xVal = this.randInt(-5, 5) || 1;
      const b = this.randInt(-10, 10);
      const c = a * xVal + b;

      const incorrectas = [xVal + 1, xVal - 1, -xVal]
        .filter(v => v !== xVal)
        .map(String)
        .slice(0, 3);

      return this.crearQuiz({
        id: this.uid(),
        materia: this.materia,
        subtipo: "ecuaciones_lineales",
        dificultad: dif,
        enunciado: `Resuelve: ${a}x + ${b} = ${c}`,
        opciones: [String(xVal), ...incorrectas],
        indiceCorrecto: 0,
        explicacion: `${a}x = ${c} - ${b} = ${c - b}; x = ${c - b}/${a} = ${xVal}`,
      });
    }

    // avanzado: ax + b = cx + d (variable en ambos lados)
    const a = this.randInt(3, 7);
    const c2 = this.randInt(1, a - 1);
    const xVal = this.randInt(-5, 5) || 1;
    const b = this.randInt(-10, 10);
    const d2 = (a - c2) * xVal + b;

    const incorrectas = [xVal + 1, xVal - 1, -xVal]
      .filter(v => v !== xVal)
      .map(String)
      .slice(0, 3);

    return this.crearQuiz({
      id: this.uid(),
      materia: this.materia,
      subtipo: "ecuaciones_lineales",
      dificultad: dif,
      enunciado: `Resuelve: ${a}x + ${b} = ${c2}x + ${d2}`,
      opciones: [String(xVal), ...incorrectas],
      indiceCorrecto: 0,
      explicacion: `${a}x - ${c2}x = ${d2} - ${b}; ${a - c2}x = ${d2 - b}; x = ${xVal}`,
    });
  }

  // ── 10. Ecuaciones con parámetros ──────────────────────────────────────

  private genEcuacionesParametros(dif: Dificultad): Ejercicio {
    const solucion = this.randInt(1, 5);

    if (dif === "basico") {
      const k = this.randInt(2, 6);
      const c = k * solucion;
      const incorrectas = [k + 1, k - 1, k * 2]
        .filter(v => v !== k)
        .map(String)
        .slice(0, 3);
      return this.crearQuiz({
        id: this.uid(),
        materia: this.materia,
        subtipo: "ecuaciones_parametros",
        dificultad: dif,
        enunciado: `¿Qué valor de k hace que kx = ${c} tenga solución x = ${solucion}?`,
        opciones: [String(k), ...incorrectas],
        indiceCorrecto: 0,
        explicacion: `Si x = ${solucion}: k·${solucion} = ${c} → k = ${c}/${solucion} = ${k}`,
      });
    }

    // intermedio / avanzado: kx + b = c
    const k = this.randInt(2, 8);
    const b = this.randInt(-5, 5);
    const c = k * solucion + b;
    const incorrectas = [k + 1, k - 1, k + 2]
      .filter(v => v !== k)
      .map(String)
      .slice(0, 3);
    const enunciado =
      dif === "intermedio"
        ? `¿Qué valor de k hace que kx + ${b} = ${c} tenga solución x = ${solucion}?`
        : `¿Qué valor de k hace que kx + ${b} = ${c} tenga solución x = ${solucion}? Verifica sustituyendo.`;

    return this.crearQuiz({
      id: this.uid(),
      materia: this.materia,
      subtipo: "ecuaciones_parametros",
      dificultad: dif,
      enunciado,
      opciones: [String(k), ...incorrectas],
      indiceCorrecto: 0,
      explicacion: `Si x = ${solucion}: k·${solucion} + ${b} = ${c} → k·${solucion} = ${c - b} → k = ${k}`,
    });
  }

  // ── 11. Inecuaciones simples ────────────────────────────────────────────

  private genInecuacionesSimples(dif: Dificultad): Ejercicio {
    const cambioSigno = dif === "avanzado";
    const a = cambioSigno ? this.randInt(-5, -1) : this.randInt(1, 5);
    const b = this.randInt(-5, 5);
    const c = this.randInt(-5, 5);

    // ax + b > c → ax > c - b → x op (c-b)/a
    const rhsNum = c - b;
    const rhsDen = a;
    const g = mcd(Math.abs(rhsNum) || 1, Math.abs(rhsDen));
    let num = rhsNum / g;
    let den = rhsDen / g;
    if (den < 0) { num = -num; den = -den; }

    const solStr = den === 1 ? `${num}` : formatFraccion(num, den);
    const signo = a > 0 ? ">" : "<";
    const signoInv = a > 0 ? "<" : ">";
    const signoEq = a > 0 ? "≥" : "≤";

    const respuesta = `x ${signo} ${solStr}`;
    const incorrectas = [
      `x ${signoInv} ${solStr}`,
      `x ${signoEq} ${solStr}`,
      `x ${signo} ${den === 1 ? `${num + 1}` : formatFraccion(num + 1, den)}`,
    ].filter(o => o !== respuesta);

    return this.crearQuiz({
      id: this.uid(),
      materia: this.materia,
      subtipo: "inecuaciones_simples",
      dificultad: dif,
      enunciado: `Resuelve: ${a}x + ${b} > ${c}`,
      opciones: [respuesta, ...incorrectas.slice(0, 3)],
      indiceCorrecto: 0,
      explicacion: cambioSigno
        ? `Al dividir por ${a} (negativo) el signo de la desigualdad cambia: ${respuesta}`
        : `Despejando x: ${respuesta}`,
    });
  }

  // ── 12. Sistemas 2×2 ───────────────────────────────────────────────────

  private genSistemas2x2(dif: Dificultad): Ejercicio {
    const xVal = this.randInt(-4, 4) || 1;
    const yVal = this.randInt(-4, 4) || 1;

    const a1 = this.randInt(1, 4);
    const b1 = this.randInt(1, 4);
    const c1 = a1 * xVal + b1 * yVal;

    let a2 = this.randInt(1, 4);
    let b2 = this.randInt(1, 4);
    let intentos = 0;
    while (a1 * b2 === a2 * b1 && intentos < 20) {
      a2 = this.randInt(1, 4);
      b2 = this.randInt(1, 4);
      intentos++;
    }
    const c2 = a2 * xVal + b2 * yVal;

    if (dif === "basico") {
      const incorrectas = [xVal + 1, xVal - 1, -xVal]
        .filter(v => v !== xVal)
        .map(String)
        .slice(0, 3);
      return this.crearQuiz({
        id: this.uid(),
        materia: this.materia,
        subtipo: "sistemas_2x2",
        dificultad: dif,
        enunciado:
          `Resuelve el sistema y encuentra x:\n` +
          `${a1}x + ${b1}y = ${c1}\n` +
          `${a2}x + ${b2}y = ${c2}`,
        opciones: [String(xVal), ...incorrectas],
        indiceCorrecto: 0,
        explicacion: `La solución completa es x = ${xVal}, y = ${yVal}`,
      });
    }

    // intermedio / avanzado: pedir el par (x, y)
    const respuesta = `x = ${xVal}, y = ${yVal}`;
    const incorrectas = [
      `x = ${xVal + 1}, y = ${yVal}`,
      `x = ${xVal}, y = ${yVal + 1}`,
      `x = ${yVal}, y = ${xVal}`,
    ].filter(o => o !== respuesta);

    return this.crearQuiz({
      id: this.uid(),
      materia: this.materia,
      subtipo: "sistemas_2x2",
      dificultad: dif,
      enunciado:
        `Resuelve el sistema:\n` +
        `${a1}x + ${b1}y = ${c1}\n` +
        `${a2}x + ${b2}y = ${c2}`,
      opciones: [respuesta, ...incorrectas.slice(0, 3)],
      indiceCorrecto: 0,
      explicacion: `La solución es ${respuesta}`,
    });
  }

  // ── 13. Ecuaciones cuadráticas ─────────────────────────────────────────

  private genEcuacionesCuadraticas(dif: Dificultad): Ejercicio {
    if (dif === "avanzado") {
      // Cualquier discriminante — puede ser no entero o negativo
      const a = this.randInt(1, 3);
      const b = this.randInt(-6, 6);
      const c = this.randInt(-8, 8);
      const disc = b * b - 4 * a * c;

      if (disc < 0) {
        return this.crearQuiz({
          id: this.uid(), materia: this.materia,
          subtipo: "ecuaciones_cuadraticas", dificultad: dif,
          enunciado: `¿Cuántas soluciones reales tiene ${a}x² + ${b}x + ${c} = 0?`,
          opciones: ["Ninguna (discriminante negativo)", "Una solución", "Dos soluciones", "Infinitas soluciones"],
          indiceCorrecto: 0,
          explicacion: `Δ = ${b}² - 4·${a}·${c} = ${disc} < 0 → sin soluciones reales`,
        });
      }
      if (disc === 0) {
        const xStr = formatFraccion(-b, 2 * a);
        return this.crearQuiz({
          id: this.uid(), materia: this.materia,
          subtipo: "ecuaciones_cuadraticas", dificultad: dif,
          enunciado: `Resuelve: ${a}x² + ${b}x + ${c} = 0`,
          opciones: [`x = ${xStr} (solución doble)`, `x = ${xStr}`, `x₁ = ${xStr}, x₂ = ${-b / a - (-b / (2 * a))}`, "Sin solución real"],
          indiceCorrecto: 0,
          explicacion: `Δ = 0 → x = ${formatFraccion(-b, 2 * a)} (solución doble)`,
        });
      }
      const sqrtDisc = Math.sqrt(disc);
      const x1 = ((-b + sqrtDisc) / (2 * a)).toFixed(2);
      const x2 = ((-b - sqrtDisc) / (2 * a)).toFixed(2);
      return this.crearQuiz({
        id: this.uid(), materia: this.materia,
        subtipo: "ecuaciones_cuadraticas", dificultad: dif,
        enunciado: `Resuelve: ${a}x² + ${b}x + ${c} = 0`,
        opciones: [
          `x₁ ≈ ${x1}, x₂ ≈ ${x2}`,
          `x₁ ≈ ${x1}, x₂ ≈ ${((-b + sqrtDisc) / a).toFixed(2)}`,
          `x₁ ≈ ${((-b) / a).toFixed(2)}, x₂ ≈ ${x2}`,
          "Sin solución real",
        ],
        indiceCorrecto: 0,
        explicacion: `Δ = ${disc.toFixed(2)}; x = (−${b} ± √${disc.toFixed(2)}) / ${2 * a}`,
      });
    }

    // basico / intermedio: discriminante entero positivo y perfecto (soluciones enteras)
    // Construir desde raíces enteras: (x - r1)(x - r2) = x² - (r1+r2)x + r1*r2
    const r1 = this.randInt(-6, 6) || 1;
    const r2 = this.randInt(-6, 6);
    const bCoef = -(r1 + r2);
    const cCoef = r1 * r2;
    const enunc = dif === "basico"
      ? `Resuelve: x² ${bCoef >= 0 ? `+ ${bCoef}` : `- ${Math.abs(bCoef)}`}x ${cCoef >= 0 ? `+ ${cCoef}` : `- ${Math.abs(cCoef)}`} = 0`
      : `Resuelve usando la fórmula cuadrática: x² ${bCoef >= 0 ? `+ ${bCoef}` : `- ${Math.abs(bCoef)}`}x ${cCoef >= 0 ? `+ ${cCoef}` : `- ${Math.abs(cCoef)}`} = 0`;
    const resp = r1 === r2
      ? `x = ${r1} (doble)`
      : `x₁ = ${Math.max(r1, r2)}, x₂ = ${Math.min(r1, r2)}`;
    const incorrectas = [
      `x₁ = ${r1 + 1}, x₂ = ${r2}`,
      `x₁ = ${r1}, x₂ = ${r2 + 1}`,
      `x₁ = ${-r1}, x₂ = ${-r2}`,
    ].filter(o => o !== resp);
    return this.crearQuiz({
      id: this.uid(), materia: this.materia,
      subtipo: "ecuaciones_cuadraticas", dificultad: dif,
      enunciado: enunc,
      opciones: [resp, ...incorrectas.slice(0, 3)],
      indiceCorrecto: 0,
      explicacion: `Factorizando: (x ${r1 >= 0 ? `- ${r1}` : `+ ${-r1}`})(x ${r2 >= 0 ? `- ${r2}` : `+ ${-r2}`}) = 0 → ${resp}`,
    });
  }

  // ── 14. Sistemas 3×3 (solo avanzado) ──────────────────────────────────

  private genSistemas3x3(_dif: Dificultad): Ejercicio {
    const x = this.randInt(-3, 3) || 1;
    const y = this.randInt(-3, 3) || 1;
    const z = this.randInt(-3, 3) || 1;

    const a1 = this.randInt(1, 3), b1 = this.randInt(1, 3), c1 = this.randInt(1, 3);
    const a2 = this.randInt(1, 3), b2 = this.randInt(1, 3), c2 = this.randInt(1, 3);
    const a3 = this.randInt(1, 3), b3 = this.randInt(1, 3), c3 = this.randInt(1, 3);
    const d1 = a1 * x + b1 * y + c1 * z;
    const d2 = a2 * x + b2 * y + c2 * z;
    const d3 = a3 * x + b3 * y + c3 * z;

    const resp = `x = ${x}, y = ${y}, z = ${z}`;
    const incorrectas = [
      `x = ${x + 1}, y = ${y}, z = ${z}`,
      `x = ${x}, y = ${y + 1}, z = ${z}`,
      `x = ${y}, y = ${x}, z = ${z}`,
    ].filter(o => o !== resp);

    return this.crearQuiz({
      id: this.uid(), materia: this.materia,
      subtipo: "sistemas_3x3", dificultad: "avanzado",
      enunciado:
        `Resuelve el sistema de 3 ecuaciones:\n` +
        `${a1}x + ${b1}y + ${c1}z = ${d1}\n` +
        `${a2}x + ${b2}y + ${c2}z = ${d2}\n` +
        `${a3}x + ${b3}y + ${c3}z = ${d3}`,
      opciones: [resp, ...incorrectas.slice(0, 3)],
      indiceCorrecto: 0,
      explicacion: `La solución es ${resp}`,
    });
  }

  // ── 15. Racionales simples ─────────────────────────────────────────────

  private genRacionalesSimples(dif: Dificultad): Ejercicio {
    if (dif === "basico") {
      // Simplificar coeficientes: (ka)x / (kb) → ax/b
      const k = this.randInt(2, 5);
      const a = this.randInt(1, 5);
      const b = this.randInt(2, 5);
      const g = mcd(a, b);
      const as = a / g, bs = b / g;
      const num = k * a, den = k * b;
      const resp = bs === 1 ? `${as}x` : `${as}x/${bs}`;
      return this.crearQuiz({
        id: this.uid(), materia: this.materia,
        subtipo: "racionales_simples", dificultad: dif,
        enunciado: `Simplifica la fracción algebraica: ${num}x / ${den}`,
        opciones: [resp, `${num}x/${den}`, `${as + 1}x/${bs}`, `${as}x/${bs + 1}`],
        indiceCorrecto: 0,
        explicacion: `Dividiendo numerador y denominador por ${k * g}: ${resp}`,
      });
    }

    if (dif === "intermedio") {
      // (x² - a²) / (x - a) = x + a, valor excluido x = a
      const a = this.randInt(2, 6);
      return this.crearQuiz({
        id: this.uid(), materia: this.materia,
        subtipo: "racionales_simples", dificultad: dif,
        enunciado: `Simplifica (x² - ${a * a}) / (x - ${a}), indicando el valor excluido del dominio`,
        opciones: [
          `x + ${a}, x ≠ ${a}`,
          `x - ${a}, x ≠ ${a}`,
          `x + ${a}, x ≠ ${-a}`,
          `x + ${a}`,
        ],
        indiceCorrecto: 0,
        explicacion: `x² - ${a * a} = (x+${a})(x-${a}); se cancela (x-${a}): resultado x+${a} con x ≠ ${a}`,
      });
    }

    // avanzado: (x² + (r1+r2)x + r1*r2) / (x + r1) = x + r2, x ≠ -r1
    const r1 = this.randInt(1, 5);
    const r2 = this.randInt(1, 5);
    const bCoef = r1 + r2;
    const cCoef = r1 * r2;
    const excluido = -r1;
    return this.crearQuiz({
      id: this.uid(), materia: this.materia,
      subtipo: "racionales_simples", dificultad: dif,
      enunciado: `Simplifica (x² + ${bCoef}x + ${cCoef}) / (x + ${r1}), indicando el valor excluido`,
      opciones: [
        `x + ${r2}, x ≠ ${excluido}`,
        `x + ${r1}, x ≠ ${excluido}`,
        `x + ${r2}, x ≠ ${-r2}`,
        `x - ${r2}, x ≠ ${excluido}`,
      ],
      indiceCorrecto: 0,
      explicacion: `x² + ${bCoef}x + ${cCoef} = (x+${r1})(x+${r2}); cancela (x+${r1}): resultado x+${r2}, x ≠ ${excluido}`,
    });
  }

  // ── 16. Simplificación algebraica (leyes de potencias) ────────────────

  private genSimplificacionAlgebraica(dif: Dificultad): Ejercicio {
    const tipo = this.pickOne(["producto", "cociente", "potencia", "raiz"] as const);

    if (tipo === "producto") {
      const m = this.randInt(2, 5), n = this.randInt(2, 5);
      return this.crearQuiz({
        id: this.uid(), materia: this.materia,
        subtipo: "simplificacion_algebraica", dificultad: dif,
        enunciado: `Simplifica: x^${m} · x^${n}`,
        opciones: [`x^${m + n}`, `x^${m * n}`, `x^${m - n}`, `${m + n}x`],
        indiceCorrecto: 0,
        explicacion: `x^m · x^n = x^(m+n) → x^${m} · x^${n} = x^${m + n}`,
      });
    }
    if (tipo === "cociente") {
      const n = this.randInt(2, 4);
      const m = n + this.randInt(1, 4);
      return this.crearQuiz({
        id: this.uid(), materia: this.materia,
        subtipo: "simplificacion_algebraica", dificultad: dif,
        enunciado: `Simplifica: x^${m} / x^${n} (x ≠ 0)`,
        opciones: [`x^${m - n}`, `x^${m + n}`, `x^${m * n}`, `${m - n}x`],
        indiceCorrecto: 0,
        explicacion: `x^m / x^n = x^(m-n) → x^${m} / x^${n} = x^${m - n}`,
      });
    }
    if (tipo === "potencia") {
      const m = this.randInt(2, 4), n = this.randInt(2, 3);
      return this.crearQuiz({
        id: this.uid(), materia: this.materia,
        subtipo: "simplificacion_algebraica", dificultad: dif,
        enunciado: `Simplifica: (x^${m})^${n}`,
        opciones: [`x^${m * n}`, `x^${m + n}`, `x^${m - n}`, `${n}x^${m}`],
        indiceCorrecto: 0,
        explicacion: `(x^m)^n = x^(m·n) → (x^${m})^${n} = x^${m * n}`,
      });
    }
    // raiz
    const n = this.randInt(1, 3) * 2; // even exponent
    return this.crearQuiz({
      id: this.uid(), materia: this.materia,
      subtipo: "simplificacion_algebraica", dificultad: dif,
      enunciado: `Simplifica: √(x^${n}) para x ≥ 0`,
      opciones: [`x^${n / 2}`, `x^${n}`, `x^${n * 2}`, `${n / 2}·√x`],
      indiceCorrecto: 0,
      explicacion: `√(x^${n}) = x^(${n}/2) = x^${n / 2} (para x ≥ 0)`,
    });
  }

  // ── 17. Ecuaciones con fracciones ──────────────────────────────────────

  private genEcuacionesFracciones(dif: Dificultad): Ejercicio {
    // Equation: a/(x+p) + b/(x+q) = c  =>  multiply by mcm = (x+p)(x+q)
    // Build from known solution to keep integers
    const p = this.randInt(1, 4);
    const xVal = this.randInt(1, 5);

    if (dif === "basico") {
      // a/x + b = c  =>  a = (c-b)*x
      const b = this.randInt(1, 5);
      const c = this.randInt(b + 1, b + 5);
      const a = (c - b) * xVal;
      const incorrectas = [xVal + 1, xVal - 1, xVal * 2].filter(v => v !== xVal);
      return this.crearQuiz({
        id: this.uid(), materia: this.materia,
        subtipo: "ecuaciones_fracciones", dificultad: dif,
        enunciado: `Resuelve: ${a}/x + ${b} = ${c}  (x ≠ 0)`,
        opciones: [String(xVal), ...incorrectas.map(String).slice(0, 3)],
        indiceCorrecto: 0,
        explicacion: `Multiplicando por x: ${a} + ${b}x = ${c}x → ${a} = ${c - b}x → x = ${xVal}`,
      });
    }

    // intermedio / avanzado: checkA/(x+p) = rhs
    const rhs = this.randInt(1, 3);
    const xSol = this.randInt(1, 5);
    const den1 = xSol + p;
    const checkA = rhs * den1;
    const incorrectas2 = [xSol + 1, xSol - 1, -xSol].filter(v => v !== xSol);
    return this.crearQuiz({
      id: this.uid(), materia: this.materia,
      subtipo: "ecuaciones_fracciones", dificultad: dif,
      enunciado: `Resuelve multiplicando por el MCM: ${checkA}/(x + ${p}) = ${rhs}  (x ≠ ${-p})`,
      opciones: [String(xSol), ...incorrectas2.map(String).slice(0, 3)],
      indiceCorrecto: 0,
      explicacion: `Multiplicando por (x+${p}): ${checkA} = ${rhs}(x+${p}) → ${checkA} = ${rhs}x + ${rhs * p} → x = ${xSol}`,
    });
  }

  // ── 18. Funciones lineales ─────────────────────────────────────────────

  private genFuncionesLineales(dif: Dificultad): Ejercicio {
    const m = this.randInt(-4, 4) || 1;
    const b = this.randInt(-5, 5);
    const fn = (x: number) => m * x + b;

    const visual: LineChartSpec = {
      kind: "line-chart",
      title: `f(x) = ${m}x ${b >= 0 ? `+ ${b}` : `- ${Math.abs(b)}`}`,
      xLabel: "x", yLabel: "f(x)",
      series: [{
        id: "lineal",
        label: `f(x) = ${m}x ${b >= 0 ? `+ ${b}` : `- ${Math.abs(b)}`}`,
        points: generarPuntos(fn, -5, 5, 11),
      }],
    };

    if (dif === "basico") {
      // Ask for y-intercept
      const incorrectas = [b + 1, b - 1, b + 2].filter(v => v !== b);
      return {
        ...this.crearQuiz({
          id: this.uid(), materia: this.materia,
          subtipo: "funciones_lineales", dificultad: dif,
          enunciado: `Para f(x) = ${m}x ${b >= 0 ? `+ ${b}` : `- ${Math.abs(b)}`}, ¿cuál es la ordenada al origen?`,
          opciones: [String(b), ...incorrectas.map(String).slice(0, 3)],
          indiceCorrecto: 0,
          explicacion: `La ordenada al origen es f(0) = ${b}`,
        }),
        visual,
      };
    }

    if (dif === "intermedio") {
      // Ask for the slope
      const incorrectas = [m + 1, m - 1, -m].filter(v => v !== m);
      return {
        ...this.crearQuiz({
          id: this.uid(), materia: this.materia,
          subtipo: "funciones_lineales", dificultad: dif,
          enunciado: `Para f(x) = ${m}x ${b >= 0 ? `+ ${b}` : `- ${Math.abs(b)}`}, ¿cuál es la pendiente?`,
          opciones: [String(m), ...incorrectas.map(String).slice(0, 3)],
          indiceCorrecto: 0,
          explicacion: `La pendiente es el coeficiente de x: m = ${m}`,
        }),
        visual,
      };
    }

    // avanzado: evaluar f(x) en un punto
    const xEval = this.randInt(-4, 4);
    const fxEval = fn(xEval);
    const incorrectas = [fxEval + 1, fxEval - 1, fxEval + 2].filter(v => v !== fxEval);
    return {
      ...this.crearQuiz({
        id: this.uid(), materia: this.materia,
        subtipo: "funciones_lineales", dificultad: dif,
        enunciado: `Para f(x) = ${m}x ${b >= 0 ? `+ ${b}` : `- ${Math.abs(b)}`}, ¿cuánto vale f(${xEval})?`,
        opciones: [String(fxEval), ...incorrectas.map(String).slice(0, 3)],
        indiceCorrecto: 0,
        explicacion: `f(${xEval}) = ${m}·(${xEval}) ${b >= 0 ? `+ ${b}` : `- ${Math.abs(b)}`} = ${fxEval}`,
      }),
      visual,
    };
  }

  // ── 19. Función afín (aplicación) ──────────────────────────────────────

  private genFuncionAfin(dif: Dificultad): Ejercicio {
    const m = this.randInt(2, 8);      // rate
    const b = this.randInt(10, 50);    // initial value
    const xPred = this.randInt(5, 15); // prediction point
    const yPred = m * xPred + b;

    const contextos = [
      {
        enunciado: `Un taxi cobra una tarifa fija de $${b} más $${m} por kilómetro. ` +
          `Si el modelo es f(x) = ${m}x + ${b}, ¿cuánto cuesta un viaje de ${xPred} km?`,
        unidad: "$",
      },
      {
        enunciado: `Una vela mide ${b} cm y se consume ${m} cm por hora. ` +
          `El modelo es f(x) = ${-m}x + ${b}. ¿Cuánto mide después de ${xPred} horas?`,
        unidad: "cm",
      },
    ];

    // Use first context for simplicity; second uses negative slope
    const ctx = this.pickOne(contextos);
    const respNeg = -m * xPred + b;
    const esNegativo = ctx.enunciado.includes("vela");
    const respuesta = esNegativo ? respNeg : yPred;

    const incorrectas = [respuesta + m, respuesta - m, respuesta + 2 * m]
      .filter(v => v !== respuesta)
      .slice(0, 3);

    if (dif === "basico") {
      return this.crearQuiz({
        id: this.uid(), materia: this.materia,
        subtipo: "funcion_afin", dificultad: dif,
        enunciado: ctx.enunciado,
        opciones: [String(respuesta), ...incorrectas.map(String)],
        indiceCorrecto: 0,
        explicacion: `f(${xPred}) = ${esNegativo ? -m : m}·${xPred} + ${b} = ${respuesta} ${ctx.unidad}`,
      });
    }

    // intermedio/avanzado: encontrar la función dado un par de puntos, luego predecir
    const x1 = this.randInt(1, 5);
    const x2 = x1 + this.randInt(1, 4);
    const y1 = m * x1 + b;
    const y2 = m * x2 + b;
    const mStr = `${m}`;
    const bStr = b >= 0 ? `+ ${b}` : `- ${Math.abs(b)}`;
    const fStr = `f(x) = ${mStr}x ${bStr}`;
    const yPredIncorrectas = [yPred + m, yPred - m, yPred + 2].filter(v => v !== yPred);

    return this.crearQuiz({
      id: this.uid(), materia: this.materia,
      subtipo: "funcion_afin", dificultad: dif,
      enunciado:
        `Dos puntos de un modelo lineal son (${x1}, ${y1}) y (${x2}, ${y2}). ` +
        `¿Qué valor predice el modelo para x = ${xPred}?`,
      opciones: [String(yPred), ...yPredIncorrectas.map(String)],
      indiceCorrecto: 0,
      explicacion: `m = (${y2}-${y1})/(${x2}-${x1}) = ${m}; b = ${y1} - ${m}·${x1} = ${b}; ${fStr}; f(${xPred}) = ${yPred}`,
    });
  }

  // ── 20. Ecuación de la recta ───────────────────────────────────────────

  private genEcuacionRecta(dif: Dificultad): Ejercicio {
    const m = this.randInt(-4, 4) || 1;
    const b = this.randInt(-5, 5);

    const visual: LineChartSpec = {
      kind: "line-chart",
      title: "Recta",
      xLabel: "x", yLabel: "y",
      series: [{
        id: "recta",
        label: `y = ${m}x ${b >= 0 ? `+ ${b}` : `- ${Math.abs(b)}`}`,
        points: generarPuntos((x) => m * x + b, -5, 5, 11),
      }],
    };

    if (dif === "basico") {
      // Given slope and y-intercept, write equation
      const resp = `y = ${m}x ${b >= 0 ? `+ ${b}` : `- ${Math.abs(b)}`}`;
      return {
        ...this.crearQuiz({
          id: this.uid(), materia: this.materia,
          subtipo: "ecuacion_recta", dificultad: dif,
          enunciado: `Escribe la ecuación de la recta con pendiente m = ${m} y ordenada al origen b = ${b}`,
          opciones: [
            resp,
            `y = ${b}x ${m >= 0 ? `+ ${m}` : `- ${Math.abs(m)}`}`,
            `y = ${m}x ${b >= 0 ? `- ${b}` : `+ ${Math.abs(b)}`}`,
            `y = ${m + 1}x ${b >= 0 ? `+ ${b}` : `- ${Math.abs(b)}`}`,
          ],
          indiceCorrecto: 0,
          explicacion: `Forma pendiente-ordenada: y = mx + b → ${resp}`,
        }),
        visual,
      };
    }

    if (dif === "intermedio") {
      // Given point (x0,y0) and slope, write equation: y - y0 = m(x - x0)
      const x0 = this.randInt(-3, 3);
      const y0 = m * x0 + b;
      const resp = `y = ${m}x ${b >= 0 ? `+ ${b}` : `- ${Math.abs(b)}`}`;
      return {
        ...this.crearQuiz({
          id: this.uid(), materia: this.materia,
          subtipo: "ecuacion_recta", dificultad: dif,
          enunciado: `Halla la ecuación de la recta con pendiente ${m} que pasa por (${x0}, ${y0})`,
          opciones: [
            resp,
            `y = ${m}x ${b >= 0 ? `- ${b}` : `+ ${Math.abs(b)}`}`,
            `y = ${m + 1}x ${b >= 0 ? `+ ${b}` : `- ${Math.abs(b)}`}`,
            `y = ${-m}x ${b >= 0 ? `+ ${b}` : `- ${Math.abs(b)}`}`,
          ],
          indiceCorrecto: 0,
          explicacion: `y - ${y0} = ${m}(x - ${x0}) → y = ${m}x ${b >= 0 ? `+ ${b}` : `- ${Math.abs(b)}`}`,
        }),
        visual,
      };
    }

    // avanzado: two points
    const x1 = this.randInt(-3, 2);
    const x2 = x1 + this.randInt(1, 4);
    const y1 = m * x1 + b;
    const y2 = m * x2 + b;
    const resp = `y = ${m}x ${b >= 0 ? `+ ${b}` : `- ${Math.abs(b)}`}`;
    return {
      ...this.crearQuiz({
        id: this.uid(), materia: this.materia,
        subtipo: "ecuacion_recta", dificultad: dif,
        enunciado: `Halla la ecuación de la recta que pasa por (${x1}, ${y1}) y (${x2}, ${y2})`,
        opciones: [
          resp,
          `y = ${m + 1}x ${b >= 0 ? `+ ${b}` : `- ${Math.abs(b)}`}`,
          `y = ${m}x ${b >= 0 ? `- ${b}` : `+ ${Math.abs(b)}`}`,
          `y = ${-m}x ${b >= 0 ? `+ ${b}` : `- ${Math.abs(b)}`}`,
        ],
        indiceCorrecto: 0,
        explicacion: `m = (${y2}-${y1})/(${x2}-${x1}) = ${m}; b = ${y1} - ${m}·${x1} = ${b} → ${resp}`,
      }),
      visual,
    };
  }

  // ── 21. Multiplicación de polinomios ───────────────────────────────────

  private genMultiplicacionPolinomios(dif: Dificultad): Ejercicio {
    // p1 × p2, degree sum 2-3
    const deg1 = dif === "basico" ? 1 : this.randInt(1, 2);
    const deg2 = dif === "avanzado" ? 2 : 1;

    const p1: Termino[] = [];
    for (let i = 0; i <= deg1; i++) {
      p1.push({ coef: this.randInt(-4, 4) || 1, exp: i });
    }
    const p2: Termino[] = [];
    for (let i = 0; i <= deg2; i++) {
      p2.push({ coef: this.randInt(-4, 4) || 1, exp: i });
    }

    // Multiply
    const raw: Termino[] = [];
    for (const t1 of p1) {
      for (const t2 of p2) {
        raw.push({ coef: t1.coef * t2.coef, exp: t1.exp + t2.exp });
      }
    }
    const resultado = this.reducirTerminos(raw);
    const resultStr = polinomioToString(resultado);
    const p1Str = polinomioToString(p1);
    const p2Str = polinomioToString(p2);

    // Distractors: perturb one coefficient
    const inc1 = resultado.map((t, i) => i === 0 ? { ...t, coef: t.coef + 1 } : t);
    const inc2 = resultado.map((t, i) => i === 1 ? { ...t, coef: t.coef - 1 } : t);
    const inc3 = resultado.map(t => ({ ...t, coef: t.coef * (t.exp % 2 === 0 ? -1 : 1) }));

    const incorrectas = [
      polinomioToString(inc1),
      polinomioToString(inc2),
      polinomioToString(inc3),
    ].filter(o => o !== resultStr);

    return this.crearQuiz({
      id: this.uid(), materia: this.materia,
      subtipo: "multiplicacion_polinomios", dificultad: dif,
      enunciado: `Calcula el producto: (${p1Str}) · (${p2Str})`,
      opciones: [resultStr, ...incorrectas.slice(0, 3)],
      indiceCorrecto: 0,
      explicacion: `Aplicando la propiedad distributiva: ${resultStr}`,
    });
  }

  // ── 22. División de polinomios ─────────────────────────────────────────

  private genDivisionPolinomios(dif: Dificultad): Ejercicio {
    // dividend = (x + r) * quotient + remainder
    // quotient: ax + b (degree 1)
    const r = this.randInt(-4, 4) || 1;   // divisor root: divide by (x - r)
    const qa = this.randInt(1, 4);
    const qb = this.randInt(-5, 5);
    const rem = dif === "basico" ? 0 : this.randInt(-5, 5);

    // divisor: x - r  =>  (x - r)
    // dividend = (x - r)(qa*x + qb) + rem
    //   = qa*x² + qb*x - qa*r*x - qb*r + rem
    //   = qa*x² + (qb - qa*r)*x + (-qb*r + rem)
    const a = qa;
    const b2 = qb - qa * r;
    const c = -qb * r + rem;

    const divisorStr = r >= 0 ? `x - ${r}` : `x + ${-r}`;
    const dividendStr = polinomioToString([
      { coef: a, exp: 2 },
      { coef: b2, exp: 1 },
      { coef: c, exp: 0 },
    ]);
    const quotientStr = polinomioToString([{ coef: qa, exp: 1 }, { coef: qb, exp: 0 }]);

    if (dif === "basico") {
      // Ask for the quotient (no remainder)
      const inc1 = polinomioToString([{ coef: qa + 1, exp: 1 }, { coef: qb, exp: 0 }]);
      const inc2 = polinomioToString([{ coef: qa, exp: 1 }, { coef: qb + 1, exp: 0 }]);
      const inc3 = polinomioToString([{ coef: qa, exp: 1 }, { coef: -qb, exp: 0 }]);
      return this.crearQuiz({
        id: this.uid(), materia: this.materia,
        subtipo: "division_polinomios", dificultad: dif,
        enunciado: `Divide: (${dividendStr}) ÷ (${divisorStr}). ¿Cuál es el cociente?`,
        opciones: [quotientStr, inc1, inc2, inc3].filter((v, i, a) => a.indexOf(v) === i),
        indiceCorrecto: 0,
        explicacion: `(${dividendStr}) = (${divisorStr})(${quotientStr})`,
      });
    }

    // intermedio/avanzado: ask for quotient and remainder
    const resp = rem === 0
      ? `Cociente: ${quotientStr}, Resto: 0`
      : `Cociente: ${quotientStr}, Resto: ${rem}`;
    const inc1 = `Cociente: ${quotientStr}, Resto: ${rem + 1}`;
    const inc2 = `Cociente: ${polinomioToString([{ coef: qa + 1, exp: 1 }, { coef: qb, exp: 0 }])}, Resto: ${rem}`;
    const inc3 = `Cociente: ${quotientStr}, Resto: ${rem - 1}`;

    return this.crearQuiz({
      id: this.uid(), materia: this.materia,
      subtipo: "division_polinomios", dificultad: dif,
      enunciado: `Divide: (${dividendStr}) ÷ (${divisorStr}). ¿Cuáles son el cociente y el resto?`,
      opciones: [resp, inc1, inc2, inc3].filter((v, i, a) => a.indexOf(v) === i),
      indiceCorrecto: 0,
      explicacion: `(${dividendStr}) = (${divisorStr})(${quotientStr}) + ${rem}`,
    });
  }

  // ── 23. Identidad vs Ecuación ──────────────────────────────────────────

  private genIdentidadEcuacion(dif: Dificultad): Ejercicio {
    if (dif === "basico") {
      // Simple: identify whether it's an identity or equation
      const esIdentidad = this.prng.next() < 0.5;
      const a = this.randInt(2, 5);
      const b = this.randInt(1, 8);
      let enunciado: string, explic: string;
      if (esIdentidad) {
        enunciado = `¿Es identidad o ecuación? ${a}(x + ${b}) = ${a}x + ${a * b}`;
        explic = `Expandiendo el lado izquierdo: ${a}x + ${a * b} = ${a}x + ${a * b} → verdadero para todo x → es una identidad`;
      } else {
        const c = this.randInt(1, 10);
        enunciado = `¿Es identidad o ecuación? ${a}x + ${b} = ${c}`;
        explic = `Solo es verdadera para x = ${formatFraccion(c - b, a)} → es una ecuación`;
      }
      return this.crearQuiz({
        id: this.uid(), materia: this.materia,
        subtipo: "identidad_ecuacion", dificultad: dif,
        enunciado,
        opciones: [
          esIdentidad ? "Identidad (verdadera para todo x)" : "Ecuación (verdadera para un valor de x)",
          esIdentidad ? "Ecuación" : "Identidad",
          "Imposible (nunca verdadera)",
          "No se puede determinar",
        ],
        indiceCorrecto: 0,
        explicacion: explic,
      });
    }

    // intermedio/avanzado: solve or identify
    const a = this.randInt(2, 5);
    const b = this.randInt(1, 6);
    const xSol = this.randInt(1, 8);
    const rhs = a * xSol + b;
    const incorrectas = [xSol + 1, xSol - 1, 2 * xSol].filter(v => v !== xSol);
    return this.crearQuiz({
      id: this.uid(), materia: this.materia,
      subtipo: "identidad_ecuacion", dificultad: dif,
      enunciado: `La expresión ${a}x + ${b} = ${rhs} es una ecuación. Resuélvela.`,
      opciones: [String(xSol), ...incorrectas.map(String).slice(0, 3)],
      indiceCorrecto: 0,
      explicacion: `${a}x = ${rhs - b}; x = ${formatFraccion(rhs - b, a)} = ${xSol}`,
    });
  }

  // ── 24. Intervalos y soluciones ────────────────────────────────────────

  private genIntervalosSoluciones(dif: Dificultad): Ejercicio {
    const a = dif === "avanzado" ? this.randInt(-4, -1) : this.randInt(1, 4);
    const b = this.randInt(-5, 5);
    const c = this.randInt(-5, 5);

    // ax + b > c → ax > c-b → x op (c-b)/a
    const rhsNum = c - b;
    const g = mcd(Math.abs(rhsNum) || 1, Math.abs(a));
    let num = rhsNum / g;
    let den = a / g;
    if (den < 0) { num = -num; den = -den; }

    const threshold = den === 1 ? `${num}` : `${num}/${den}`;
    const strictGt = a > 0; // if a<0 sign flips
    const intervaloStr = strictGt
      ? `(${threshold}, +∞)`
      : `(-∞, ${threshold})`;
    const notacionStr = strictGt
      ? `x > ${threshold}`
      : `x < ${threshold}`;

    const incorrectas = [
      strictGt ? `(-∞, ${threshold})` : `(${threshold}, +∞)`,
      strictGt ? `[${threshold}, +∞)` : `(-∞, ${threshold}]`,
      `(${threshold}, ${threshold})`,
    ].filter(o => o !== intervaloStr);

    return this.crearQuiz({
      id: this.uid(), materia: this.materia,
      subtipo: "intervalos_soluciones", dificultad: dif,
      enunciado:
        `Resuelve ${a}x + ${b} > ${c} y expresa la solución en notación de intervalo`,
      opciones: [intervaloStr, ...incorrectas.slice(0, 3)],
      indiceCorrecto: 0,
      explicacion: `La solución es ${notacionStr}, que en notación de intervalo es ${intervaloStr}`,
    });
  }
}
