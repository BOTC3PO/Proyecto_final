import { BaseGenerador } from "../core/baseGenerador";
import type { PRNG } from "../core/prng";
import type { Dificultad, Ejercicio, Calculator } from "../core/types";
import { placeholder } from "../core/shared";
import { mcd } from "./helpers/estadistica";
import {
  type Termino,
  formatTermino,
  polinomioToString,
  evaluarPolinomio,
  formatFraccion,
} from "./helpers/polinomios";

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
      case "sistemas_2x2":           return this.genSistemas2x2(dificultad);
      default:                       return placeholder(subtipo, this.materia, dificultad);
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
}
