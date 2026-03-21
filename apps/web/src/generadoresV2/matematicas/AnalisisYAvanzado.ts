import { BaseGenerador } from "../core/baseGenerador";
import type { Dificultad, Ejercicio, Calculator, LineChartSpec, VectorDiagramSpec } from "../core/types";
import { ANGULOS_NOTABLES } from "./helpers/trigonometria";
import { generarPuntos } from "./helpers/calculo";

// ── Generador ─────────────────────────────────────────────────────────────

export class AnalisisYAvanzadoGenerator extends BaseGenerador {
  readonly id = "matematicas/analisis_avanzado";
  readonly materia = "matematicas" as const;
  readonly subtipos = [
    "trigonometria_basica",
    "trigonometria_aplicada",
    "identidades_trigonometricas",
    "ecuaciones_trigonometricas",
    "funciones_exponenciales",
    "funciones_logaritmicas",
    "ecuaciones_exponenciales",
    "ecuaciones_logaritmicas",
    "numeros_complejos",
    "operaciones_complejos",
    "matrices_basico",
    "determinantes_basico",
    "sistemas_matrices",
    "vectores_basico",
    "geometria_espacial",
    "conicas",
  ];

  generarEjercicio(subtipo: string, dificultad: Dificultad, _calc: Calculator): Ejercicio {
    switch (subtipo) {
      case "trigonometria_basica":         return this.trigonometriaBasica(dificultad);
      case "trigonometria_aplicada":       return this.trigonometriaAplicada(dificultad);
      case "identidades_trigonometricas":  return this.identidadesTrigonometricas(dificultad);
      case "ecuaciones_trigonometricas":   return this.ecuacionesTrigonometricas(dificultad);
      case "funciones_exponenciales":      return this.funcionesExponenciales(dificultad);
      case "funciones_logaritmicas":       return this.funcionesLogaritmicas(dificultad);
      case "ecuaciones_exponenciales":     return this.ecuacionesExponenciales(dificultad);
      case "ecuaciones_logaritmicas":      return this.ecuacionesLogaritmicas(dificultad);
      case "numeros_complejos":            return this.numerosComplejos(dificultad);
      case "operaciones_complejos":        return this.operacionesComplejos(dificultad);
      case "matrices_basico":              return this.matricesBasico(dificultad);
      case "determinantes_basico":         return this.determinantesBasico(dificultad);
      case "sistemas_matrices":            return this.sistemaMatrices(dificultad);
      case "vectores_basico":              return this.vectoresBasico(dificultad);
      case "geometria_espacial":           return this.geometriaEspacial(dificultad);
      case "conicas":                      return this.conicas(dificultad);
      default:                             return this.trigonometriaBasica(dificultad);
    }
  }

  private uid(): string {
    return `${this.id}/${this.randInt(100000, 999999)}`;
  }

  // ── 1. Trigonometría básica ───────────────────────────────────────────────

  private trigonometriaBasica(d: Dificultad): Ejercicio {
    const angulos = d === "basico" ? [0, 30, 45, 60, 90] : [30, 45, 60];
    const angulo = this.pickOne(angulos);
    const info = ANGULOS_NOTABLES[angulo];
    const funcs = d === "avanzado"
      ? ["seno", "coseno", "tangente"] as const
      : ["seno", "coseno"] as const;
    const funcion = this.pickOne([...funcs]);

    let enunciado: string, respuesta: string, explicacion: string;
    if (funcion === "seno") {
      enunciado = `¿Cuál es el seno de ${angulo}°?`;
      respuesta = info.sen;
      explicacion = `sen(${angulo}°) = ${info.sen}.`;
    } else if (funcion === "coseno") {
      enunciado = `¿Cuál es el coseno de ${angulo}°?`;
      respuesta = info.cos;
      explicacion = `cos(${angulo}°) = ${info.cos}.`;
    } else {
      enunciado = `¿Cuál es la tangente de ${angulo}°?`;
      respuesta = info.tan;
      explicacion = `tan(${angulo}°) = sen/cos = ${info.sen}/${info.cos} = ${info.tan}.`;
    }

    // Build distractors from other angle values
    const distract: string[] = [];
    for (const ang of [0, 30, 45, 60, 90]) {
      if (ang === angulo) continue;
      const inf = ANGULOS_NOTABLES[ang];
      for (const v of [inf.sen, inf.cos, inf.tan]) {
        if (v !== respuesta && !distract.includes(v)) {
          distract.push(v);
          break;
        }
      }
      if (distract.length >= 3) break;
    }
    while (distract.length < 3) distract.push(`${this.randInt(1, 3)}/2`);

    return this.crearQuiz({
      id: this.uid(),
      materia: this.materia,
      subtipo: "trigonometria_basica",
      dificultad: d,
      enunciado,
      opciones: [respuesta, ...distract.slice(0, 3)],
      indiceCorrecto: 0,
      explicacion,
    });
  }

  // ── 2. Trigonometría aplicada ─────────────────────────────────────────────

  private trigonometriaAplicada(d: Dificultad): Ejercicio {
    const angulo = this.pickOne([30, 45, 60]);
    const info = ANGULOS_NOTABLES[angulo];
    const hip = d === "basico" ? this.randInt(5, 10) : this.randInt(8, 20);
    const opuesto = this.redondear(hip * info.senVal, 2);
    const adyacente = this.redondear(hip * info.cosVal, 2);

    return this.crearQuiz({
      id: this.uid(),
      materia: this.materia,
      subtipo: "trigonometria_aplicada",
      dificultad: d,
      enunciado: `En un triángulo rectángulo con hipotenusa = ${hip} y ángulo = ${angulo}°, ¿cuánto mide el cateto opuesto?`,
      opciones: [
        String(opuesto),
        String(adyacente),
        String(this.redondear(hip * info.tanVal, 2)),
        String(this.redondear(opuesto + 1, 2)),
      ],
      indiceCorrecto: 0,
      explicacion: `cateto opuesto = hipotenusa × sen(${angulo}°) = ${hip} × ${info.sen} ≈ ${opuesto}. Cateto adyacente = ${hip} × cos(${angulo}°) ≈ ${adyacente}.`,
    });
  }

  // ── 3. Identidades trigonométricas ────────────────────────────────────────

  private identidadesTrigonometricas(d: Dificultad): Ejercicio {
    const angulo = this.pickOne([30, 45, 60]);
    const info = ANGULOS_NOTABLES[angulo];

    if (d === "basico") {
      return this.crearQuiz({
        id: this.uid(),
        materia: this.materia,
        subtipo: "identidades_trigonometricas",
        dificultad: d,
        enunciado: `Verifica: sen²(θ) + cos²(θ) para θ = ${angulo}°. ¿Cuánto vale?`,
        opciones: ["1", "0", "2", "√2"],
        indiceCorrecto: 0,
        explicacion: `sen²(${angulo}°) + cos²(${angulo}°) = (${info.sen})² + (${info.cos})² = 1 siempre.`,
      });
    } else {
      return this.crearQuiz({
        id: this.uid(),
        materia: this.materia,
        subtipo: "identidades_trigonometricas",
        dificultad: d,
        enunciado: `Si sen(${angulo}°) = ${info.sen} y cos(${angulo}°) = ${info.cos}, ¿cuánto vale tan(${angulo}°) usando tan = sen/cos?`,
        opciones: [info.tan, info.sen, info.cos, "2"],
        indiceCorrecto: 0,
        explicacion: `tan(${angulo}°) = sen(${angulo}°) / cos(${angulo}°) = ${info.sen} / ${info.cos} = ${info.tan}.`,
      });
    }
  }

  // ── 4. Ecuaciones trigonométricas ─────────────────────────────────────────

  private ecuacionesTrigonometricas(d: Dificultad): Ejercicio {
    const angulo = this.pickOne([30, 45, 60]);
    const info = ANGULOS_NOTABLES[angulo];
    const useSen = d === "basico" || this.pickOne([true, false]);
    const funcion = useSen ? "sen" : "cos";
    const valor = useSen ? info.sen : info.cos;

    let sols: string;
    if (useSen) {
      sols = `x = ${angulo}° o x = ${180 - angulo}°`;
    } else {
      sols = `x = ${angulo}° o x = ${360 - angulo}°`;
    }

    return this.crearQuiz({
      id: this.uid(),
      materia: this.materia,
      subtipo: "ecuaciones_trigonometricas",
      dificultad: d,
      enunciado: `Resuelve en [0°, 360°]: ${funcion}(x) = ${valor}`,
      opciones: [
        sols,
        `x = ${angulo}°`,
        `x = ${180 - angulo}° o x = ${360 - angulo}°`,
        `x = ${angulo + 90}° o x = ${angulo + 270}°`,
      ],
      indiceCorrecto: 0,
      explicacion: `${funcion}(x) = ${valor} tiene dos soluciones en [0°, 360°]: ${sols}.`,
    });
  }

  // ── 5. Funciones exponenciales ────────────────────────────────────────────

  private funcionesExponenciales(d: Dificultad): Ejercicio {
    const base = this.pickOne(d === "basico" ? [2, 3, 10] : [2, 3, 5, 10]);
    const xVal = d === "basico" ? this.randInt(1, 4) : this.randInt(2, 6);
    const resultado = Math.pow(base, xVal);

    const chart: LineChartSpec = {
      kind: "line-chart",
      title: `f(x) = ${base}^x`,
      xLabel: "x",
      yLabel: "f(x)",
      series: [{
        id: "exp",
        label: `f(x) = ${base}^x`,
        color: "#4f46e5",
        points: generarPuntos(x => Math.pow(base, x), -2, 5, 50),
      }],
    };

    return {
      id: this.uid(),
      materia: this.materia,
      subtipo: "funciones_exponenciales",
      dificultad: d,
      tipo: "quiz",
      enunciado: `Si f(x) = ${base}^x, ¿cuánto vale f(${xVal})? La base ${base} > 1, por lo que la función es creciente.`,
      opciones: [String(resultado), String(resultado * base), String(base * xVal), String(resultado - 1)],
      indiceCorrecto: 0,
      explicacion: `f(${xVal}) = ${base}^${xVal} = ${resultado}. Con base > 1 la función crece al infinito.`,
      visual: chart,
    };
  }

  // ── 6. Funciones logarítmicas ─────────────────────────────────────────────

  private funcionesLogaritmicas(d: Dificultad): Ejercicio {
    const base = d === "basico" ? this.pickOne([2, 10]) : this.pickOne([2, 3, 10]);
    const exp = d === "basico" ? this.randInt(1, 4) : this.randInt(1, 6);
    const x = Math.pow(base, exp);
    const baseLabel = base === 10 ? "log" : `log_${base}`;

    const chart: LineChartSpec = {
      kind: "line-chart",
      title: base === 10 ? "f(x) = log(x)" : `f(x) = log_${base}(x)`,
      xLabel: "x",
      yLabel: "f(x)",
      series: [{
        id: "log",
        label: base === 10 ? "log(x)" : `log_${base}(x)`,
        color: "#059669",
        points: generarPuntos(t => t > 0 ? Math.log(t) / Math.log(base) : NaN, 0.1, Math.min(x + 5, 50), 60),
      }],
    };

    return {
      id: this.uid(),
      materia: this.materia,
      subtipo: "funciones_logaritmicas",
      dificultad: d,
      tipo: "quiz",
      enunciado: `Calcula: ${baseLabel}(${x})`,
      opciones: [String(exp), String(exp + 1), String(exp - 1), String(x)],
      indiceCorrecto: 0,
      explicacion: `${baseLabel}(${x}) = ${exp}, porque ${base}^${exp} = ${x}. El logaritmo es el exponente al que hay que elevar la base.`,
      visual: chart,
    };
  }

  // ── 7. Ecuaciones exponenciales ───────────────────────────────────────────

  private ecuacionesExponenciales(d: Dificultad): Ejercicio {
    const base = this.pickOne([2, 3, 5]);
    const exp = d === "basico" ? this.randInt(2, 5) : this.randInt(2, 8);
    const b = Math.pow(base, exp);

    return this.crearQuiz({
      id: this.uid(),
      materia: this.materia,
      subtipo: "ecuaciones_exponenciales",
      dificultad: d,
      enunciado: `Resuelve: ${base}^x = ${b}`,
      opciones: [String(exp), String(exp + 1), String(exp - 1), String(base)],
      indiceCorrecto: 0,
      explicacion: `${base}^x = ${b} → x = log_${base}(${b}) = ${exp}, ya que ${base}^${exp} = ${b}.`,
    });
  }

  // ── 8. Ecuaciones logarítmicas ────────────────────────────────────────────

  private ecuacionesLogaritmicas(d: Dificultad): Ejercicio {
    const base = d === "basico" ? 10 : this.pickOne([2, 3, 10]);
    const k = d === "basico" ? this.randInt(1, 3) : this.randInt(1, 5);
    const x = Math.pow(base, k);
    const baseLabel = base === 10 ? "log" : `log_${base}`;

    return this.crearQuiz({
      id: this.uid(),
      materia: this.materia,
      subtipo: "ecuaciones_logaritmicas",
      dificultad: d,
      enunciado: `Resuelve: ${baseLabel}(x) = ${k}. Verifica que x > 0.`,
      opciones: [String(x), String(x + 1), String(base * k), String(k)],
      indiceCorrecto: 0,
      explicacion: `${baseLabel}(x) = ${k} → x = ${base}^${k} = ${x}. Verificación: x = ${x} > 0 ✓.`,
    });
  }

  // ── 9. Números complejos ──────────────────────────────────────────────────

  private numerosComplejos(d: Dificultad): Ejercicio {
    const a = this.randInt(-5, 5) || 1;
    const b = this.randInt(1, 8);
    const modulo = this.redondear(Math.sqrt(a * a + b * b), 2);

    if (d === "basico") {
      return this.crearQuiz({
        id: this.uid(),
        materia: this.materia,
        subtipo: "numeros_complejos",
        dificultad: d,
        enunciado: `Para z = ${a} + ${b}i, ¿cuál es la parte real?`,
        opciones: [String(a), String(b), String(modulo), String(-a)],
        indiceCorrecto: 0,
        explicacion: `En z = ${a} + ${b}i, la parte real es ${a} y la parte imaginaria es ${b}.`,
      });
    } else {
      return this.crearQuiz({
        id: this.uid(),
        materia: this.materia,
        subtipo: "numeros_complejos",
        dificultad: d,
        enunciado: `Calcula el módulo de z = ${a} + ${b}i. |z| = √(a² + b²)`,
        opciones: [String(modulo), String(a + b), String(Math.abs(a) + b), String(this.redondear(modulo + 1, 2))],
        indiceCorrecto: 0,
        explicacion: `|z| = √(${a}² + ${b}²) = √(${a * a + b * b}) ≈ ${modulo}.`,
      });
    }
  }

  // ── 10. Operaciones con complejos ─────────────────────────────────────────

  private operacionesComplejos(d: Dificultad): Ejercicio {
    const a1 = this.randInt(-3, 4), b1 = this.randInt(-3, 4);
    const a2 = this.randInt(-3, 4), b2 = this.randInt(-3, 4);
    const ops = d === "basico" ? ["suma", "resta"] : ["suma", "resta", "multiplicacion", "conjugado"];
    const op = this.pickOne(ops);

    let enunciado: string, respuesta: string, explicacion: string;
    const z1 = `(${a1} + ${b1}i)`;
    const z2 = `(${a2} + ${b2}i)`;

    if (op === "suma") {
      const ra = a1 + a2, rb = b1 + b2;
      enunciado = `Calcula: ${z1} + ${z2}`;
      respuesta = `${ra} + ${rb}i`;
      explicacion = `Sumamos parte real e imaginaria: (${a1}+${a2}) + (${b1}+${b2})i = ${ra} + ${rb}i.`;
    } else if (op === "resta") {
      const ra = a1 - a2, rb = b1 - b2;
      enunciado = `Calcula: ${z1} - ${z2}`;
      respuesta = `${ra} + ${rb}i`;
      explicacion = `Restamos parte real e imaginaria: (${a1}-${a2}) + (${b1}-${b2})i = ${ra} + ${rb}i.`;
    } else if (op === "multiplicacion") {
      const ra = a1 * a2 - b1 * b2, rb = a1 * b2 + b1 * a2;
      enunciado = `Calcula: ${z1} × ${z2}`;
      respuesta = `${ra} + ${rb}i`;
      explicacion = `(a+bi)(c+di) = (ac-bd)+(ad+bc)i = (${a1}·${a2}-${b1}·${b2})+(${a1}·${b2}+${b1}·${a2})i = ${ra}+${rb}i.`;
    } else {
      enunciado = `¿Cuál es el conjugado de z = ${a1} + ${b1}i?`;
      respuesta = `${a1} - ${b1}i`;
      explicacion = `El conjugado cambia el signo de la parte imaginaria: conj(${a1}+${b1}i) = ${a1}-${b1}i.`;
    }

    return this.crearQuiz({
      id: this.uid(),
      materia: this.materia,
      subtipo: "operaciones_complejos",
      dificultad: d,
      enunciado,
      opciones: [
        respuesta,
        `${a1 + a2 + 1} + ${b1 + b2}i`,
        `${a1 * a2} + ${b1 * b2}i`,
        `${a1 - a2} + ${b1 + b2}i`,
      ],
      indiceCorrecto: 0,
      explicacion,
    });
  }

  // ── 11. Matrices básico ───────────────────────────────────────────────────

  private matricesBasico(d: Dificultad): Ejercicio {
    if (d === "basico") {
      const filas = this.randInt(2, 4), cols = this.randInt(2, 4);
      return this.crearQuiz({
        id: this.uid(), materia: this.materia, subtipo: "matrices_basico", dificultad: d,
        enunciado: `Una matriz tiene ${filas} filas y ${cols} columnas. ¿Cuál es su dimensión?`,
        opciones: [`${filas}×${cols}`, `${cols}×${filas}`, `${filas + cols}×1`, `1×${filas * cols}`],
        indiceCorrecto: 0,
        explicacion: `La dimensión de una matriz se expresa como filas×columnas = ${filas}×${cols}.`,
      });
    } else {
      // Matrix sum 2×2
      const a = Array.from({ length: 2 }, () => Array.from({ length: 2 }, () => this.randInt(1, 5)));
      const b = Array.from({ length: 2 }, () => Array.from({ length: 2 }, () => this.randInt(1, 5)));
      const c = a.map((row, i) => row.map((v, j) => v + b[i][j]));
      const respuesta = `[[${c[0]}],[${c[1]}]]`;
      return this.crearQuiz({
        id: this.uid(), materia: this.materia, subtipo: "matrices_basico", dificultad: d,
        enunciado: `Calcula A + B donde A=[[${a[0]}],[${a[1]}]] y B=[[${b[0]}],[${b[1]}]]`,
        opciones: [
          respuesta,
          `[[${c[0][0] + 1},${c[0][1]}],[${c[1][0]},${c[1][1]}]]`,
          `[[${a[0][0] * b[0][0]},${a[0][1] * b[0][1]}],[${a[1][0] * b[1][0]},${a[1][1] * b[1][1]}]]`,
          `[[${c[0][0]},${c[0][1] + 1}],[${c[1][0]},${c[1][1]}]]`,
        ],
        indiceCorrecto: 0,
        explicacion: `La suma de matrices es elemento a elemento: A+B = [[${c[0]}],[${c[1]}]].`,
      });
    }
  }

  // ── 12. Determinantes básico ──────────────────────────────────────────────

  private determinantesBasico(d: Dificultad): Ejercicio {
    if (d !== "avanzado") {
      // det 2×2: ad - bc
      const a = this.randInt(-4, 5), b = this.randInt(-4, 5);
      const c = this.randInt(-4, 5), e = this.randInt(-4, 5);
      const det = a * e - b * c;
      return this.crearQuiz({
        id: this.uid(), materia: this.materia, subtipo: "determinantes_basico", dificultad: d,
        enunciado: `Calcula el determinante 2×2: |${a} ${b}; ${c} ${e}| = ?`,
        opciones: [String(det), String(a * e), String(a * e + b * c), String(det + 1)],
        indiceCorrecto: 0,
        explicacion: `det = ${a}·${e} - ${b}·${c} = ${a * e} - ${b * c} = ${det}.`,
      });
    } else {
      // det 3×3 regla de Sarrus
      const m = Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => this.randInt(-2, 3)));
      const [r0, r1, r2] = m;
      const det = r0[0] * (r1[1] * r2[2] - r1[2] * r2[1])
                - r0[1] * (r1[0] * r2[2] - r1[2] * r2[0])
                + r0[2] * (r1[0] * r2[1] - r1[1] * r2[0]);
      return this.crearQuiz({
        id: this.uid(), materia: this.materia, subtipo: "determinantes_basico", dificultad: d,
        enunciado: `Calcula el det 3×3 (Sarrus): [[${r0}],[${r1}],[${r2}]]`,
        opciones: [String(det), String(det + 1), String(det - 1), String(det * 2)],
        indiceCorrecto: 0,
        explicacion: `Usando la regla de Sarrus: det = ${r0[0]}(${r1[1]}·${r2[2]}-${r1[2]}·${r2[1]}) - ${r0[1]}(...) + ${r0[2]}(...) = ${det}.`,
      });
    }
  }

  // ── 13. Sistemas de matrices (Cramer) ─────────────────────────────────────

  private sistemaMatrices(d: Dificultad): Ejercicio {
    // Construir sistema con solución entera garantizada
    let x: number, y: number, a: number, b: number, c: number, e: number, det: number;
    let intentos = 0;
    do {
      x = this.randInt(1, 4); y = this.randInt(1, 4);
      a = this.randInt(1, 3); b = this.randInt(1, 3);
      c = this.randInt(1, 3); e = this.randInt(1, 3);
      det = a * e - b * c;
      intentos++;
    } while (det === 0 && intentos < 20);

    const e1 = a * x + b * y;
    const e2 = c * x + e * y;

    return this.crearQuiz({
      id: this.uid(),
      materia: this.materia,
      subtipo: "sistemas_matrices",
      dificultad: d,
      enunciado: `Resuelve usando regla de Cramer:\n${a}x + ${b}y = ${e1}\n${c}x + ${e}y = ${e2}\n¿Cuánto vale x?`,
      opciones: [String(x), String(y), String(x + 1), String(x - 1)],
      indiceCorrecto: 0,
      explicacion: `Det(A) = ${a}·${e} - ${b}·${c} = ${det}. Det(Ax) = ${e1}·${e} - ${b}·${e2} = ${x * det}. x = ${x * det}/${det} = ${x}.`,
    });
  }

  // ── 14. Vectores básico ───────────────────────────────────────────────────

  private vectoresBasico(d: Dificultad): Ejercicio {
    const dx1 = this.randInt(-4, 5) || 1, dy1 = this.randInt(-4, 5) || 1;
    const dx2 = this.randInt(-4, 5) || 1, dy2 = this.randInt(-4, 5) || 1;
    const modulo1 = this.redondear(Math.sqrt(dx1 ** 2 + dy1 ** 2), 2);
    const productoEscalar = dx1 * dx2 + dy1 * dy2;
    const sumX = dx1 + dx2, sumY = dy1 + dy2;

    const chart: VectorDiagramSpec = {
      kind: "vector-diagram",
      vectors: [
        { id: "v1", label: `v₁=(${dx1},${dy1})`, dx: dx1, dy: dy1, color: "#4f46e5" },
        { id: "v2", label: `v₂=(${dx2},${dy2})`, dx: dx2, dy: dy2, color: "#e11d48" },
      ],
    };

    const pregunta = this.pickOne(d === "basico" ? ["modulo"] : ["modulo", "escalar", "suma"]);
    let enunciado: string, respuesta: number, explicacion: string;

    if (pregunta === "modulo") {
      enunciado = `Calcula el módulo del vector v₁ = (${dx1}, ${dy1}).`;
      respuesta = modulo1;
      explicacion = `|v₁| = √(${dx1}² + ${dy1}²) = √${dx1 ** 2 + dy1 ** 2} ≈ ${modulo1}.`;
    } else if (pregunta === "escalar") {
      enunciado = `Calcula el producto escalar v₁ · v₂ con v₁=(${dx1},${dy1}), v₂=(${dx2},${dy2}).`;
      respuesta = productoEscalar;
      explicacion = `v₁ · v₂ = ${dx1}·${dx2} + ${dy1}·${dy2} = ${dx1 * dx2} + ${dy1 * dy2} = ${productoEscalar}.`;
    } else {
      enunciado = `¿Cuál es la componente x de v₁ + v₂ con v₁=(${dx1},${dy1}), v₂=(${dx2},${dy2})?`;
      respuesta = sumX;
      explicacion = `v₁ + v₂ = (${dx1}+${dx2}, ${dy1}+${dy2}) = (${sumX}, ${sumY}).`;
    }

    const incorrectas = this.generarOpcionesIncorrectas(respuesta, 3, 0.3);
    const todas = [respuesta, ...incorrectas].map(v => String(v));

    return {
      id: this.uid(),
      materia: this.materia,
      subtipo: "vectores_basico",
      dificultad: d,
      tipo: "quiz",
      enunciado,
      opciones: todas,
      indiceCorrecto: 0,
      explicacion,
      visual: chart,
    };
  }

  // ── 15. Geometría espacial ────────────────────────────────────────────────

  private geometriaEspacial(d: Dificultad): Ejercicio {
    const figuras = d === "basico"
      ? ["cubo"] as const
      : ["cubo", "esfera", "cilindro", "cono"] as const;
    const figura = this.pickOne([...figuras]);
    const lado = this.randInt(2, 8);
    const r = this.randInt(2, 6);
    const h = this.randInt(3, 10);

    let enunciado: string, respuesta: number, explicacion: string;

    if (figura === "cubo") {
      const pide = d === "basico" ? "volumen" : this.pickOne(["volumen", "superficie"] as const);
      respuesta = pide === "volumen" ? lado ** 3 : 6 * lado ** 2;
      enunciado = `Calcula el ${pide} de un cubo con lado = ${lado}.`;
      explicacion = pide === "volumen"
        ? `Volumen = lado³ = ${lado}³ = ${respuesta}.`
        : `Superficie = 6·lado² = 6·${lado}² = ${respuesta}.`;
    } else if (figura === "esfera") {
      const pide = this.pickOne(["volumen", "superficie"] as const);
      respuesta = pide === "volumen"
        ? this.redondear((4 / 3) * Math.PI * r ** 3, 2)
        : this.redondear(4 * Math.PI * r ** 2, 2);
      enunciado = `Calcula el ${pide} de una esfera con radio = ${r}.`;
      explicacion = pide === "volumen"
        ? `Volumen = (4/3)πr³ = (4/3)π·${r}³ ≈ ${respuesta}.`
        : `Superficie = 4πr² = 4π·${r}² ≈ ${respuesta}.`;
    } else if (figura === "cilindro") {
      respuesta = this.redondear(Math.PI * r ** 2 * h, 2);
      enunciado = `Calcula el volumen de un cilindro con radio = ${r} y altura = ${h}.`;
      explicacion = `Volumen = πr²h = π·${r}²·${h} ≈ ${respuesta}.`;
    } else {
      respuesta = this.redondear((1 / 3) * Math.PI * r ** 2 * h, 2);
      enunciado = `Calcula el volumen de un cono con radio = ${r} y altura = ${h}.`;
      explicacion = `Volumen = (1/3)πr²h = (1/3)π·${r}²·${h} ≈ ${respuesta}.`;
    }

    const incorrectas = this.generarOpcionesIncorrectas(respuesta, 3, 0.25);
    const todas = [respuesta, ...incorrectas].map(v => String(v));

    return this.crearQuiz({
      id: this.uid(),
      materia: this.materia,
      subtipo: "geometria_espacial",
      dificultad: d,
      enunciado,
      opciones: todas,
      indiceCorrecto: 0,
      explicacion,
    });
  }

  // ── 16. Cónicas ───────────────────────────────────────────────────────────

  private conicas(d: Dificultad): Ejercicio {
    const tipos = d === "basico"
      ? ["circunferencia"] as const
      : ["circunferencia", "parabola", "elipse"] as const;
    const tipo = this.pickOne([...tipos]);

    let enunciado: string, respuesta: string, opciones: string[], explicacion: string;
    let chart: LineChartSpec;

    if (tipo === "circunferencia") {
      const h = this.randInt(-3, 3), k = this.randInt(-3, 3), r = this.randInt(1, 5);
      const r2 = r * r;
      const hStr = h >= 0 ? `- ${h}` : `+ ${Math.abs(h)}`;
      const kStr = k >= 0 ? `- ${k}` : `+ ${Math.abs(k)}`;
      enunciado = `Identifica la cónica: (x ${hStr})² + (y ${kStr})² = ${r2}`;
      respuesta = `Circunferencia: centro (${h},${k}), radio ${r}`;
      opciones = [
        respuesta,
        `Elipse: semiejes ${r} y ${r + 1}`,
        `Parábola: vértice (${h},${k})`,
        `Hipérbola: focos en eje x`,
      ];
      explicacion = `Forma (x-h)²+(y-k)²=r²: circunferencia con centro (${h},${k}) y radio = √${r2} = ${r}.`;
      chart = {
        kind: "line-chart",
        title: `Circunferencia: centro (${h},${k}), r=${r}`,
        xLabel: "x", yLabel: "y",
        series: [
          {
            id: "circ_top", label: "circunferencia", color: "#4f46e5",
            points: generarPuntos(x => {
              const disc = r2 - (x - h) ** 2;
              return disc >= 0 ? k + Math.sqrt(disc) : NaN;
            }, h - r - 0.5, h + r + 0.5, 60),
          },
          {
            id: "circ_bot", label: "", color: "#4f46e5",
            points: generarPuntos(x => {
              const disc = r2 - (x - h) ** 2;
              return disc >= 0 ? k - Math.sqrt(disc) : NaN;
            }, h - r - 0.5, h + r + 0.5, 60),
          },
        ],
      };
    } else if (tipo === "parabola") {
      const a = this.pickOne([-2, -1, 1, 2]);
      const b = this.randInt(-3, 3), c = this.randInt(-3, 3);
      const bStr = b >= 0 ? `+ ${b}` : `- ${Math.abs(b)}`;
      const cStr = c >= 0 ? `+ ${c}` : `- ${Math.abs(c)}`;
      enunciado = `Identifica la cónica: y = ${a}x² ${bStr}x ${cStr}`;
      respuesta = `Parábola: ${a > 0 ? "abre hacia arriba" : "abre hacia abajo"}`;
      opciones = [
        respuesta,
        "Circunferencia de radio √|a|",
        "Elipse con semiejes |a| y |b|",
        `Parábola: ${a > 0 ? "abre hacia abajo" : "abre hacia arriba"}`,
      ];
      explicacion = `Es una parábola y = ax²+bx+c con a = ${a}. Como a ${a > 0 ? "> 0" : "< 0"}, abre hacia ${a > 0 ? "arriba" : "abajo"}.`;
      chart = {
        kind: "line-chart",
        title: `y = ${a}x² ${bStr}x ${cStr}`,
        xLabel: "x", yLabel: "y",
        series: [{
          id: "parabola", label: `y = ${a}x²${bStr}x${cStr}`, color: "#e11d48",
          points: generarPuntos(x => a * x * x + b * x + c, -5, 5, 60),
        }],
      };
    } else {
      const a2 = this.pickOne([4, 9, 16]), b2 = this.pickOne([1, 4, 9]);
      const h = this.randInt(-2, 2), k = this.randInt(-2, 2);
      const hStr = h >= 0 ? `- ${h}` : `+ ${Math.abs(h)}`;
      const kStr = k >= 0 ? `- ${k}` : `+ ${Math.abs(k)}`;
      const sa = Math.sqrt(a2), sb = Math.sqrt(b2);
      enunciado = `Identifica: (x ${hStr})²/${a2} + (y ${kStr})²/${b2} = 1`;
      respuesta = `Elipse: centro (${h},${k}), a=${sa}, b=${sb}`;
      opciones = [
        respuesta,
        `Circunferencia: centro (${h},${k})`,
        `Hipérbola: centro (${h},${k})`,
        `Parábola: vértice (${h},${k})`,
      ];
      explicacion = `Forma (x-h)²/a² + (y-k)²/b² = 1: elipse con centro (${h},${k}), semieje a=${sa}, semieje b=${sb}.`;
      chart = {
        kind: "line-chart",
        title: `Elipse: centro (${h},${k})`,
        xLabel: "x", yLabel: "y",
        series: [
          {
            id: "elipse_top", label: "elipse", color: "#059669",
            points: generarPuntos(x => {
              const disc = 1 - ((x - h) ** 2) / a2;
              return disc >= 0 ? k + sb * Math.sqrt(disc) : NaN;
            }, h - sa - 0.5, h + sa + 0.5, 60),
          },
          {
            id: "elipse_bot", label: "", color: "#059669",
            points: generarPuntos(x => {
              const disc = 1 - ((x - h) ** 2) / a2;
              return disc >= 0 ? k - sb * Math.sqrt(disc) : NaN;
            }, h - sa - 0.5, h + sa + 0.5, 60),
          },
        ],
      };
    }

    return {
      id: this.uid(),
      materia: this.materia,
      subtipo: "conicas",
      dificultad: d,
      tipo: "quiz",
      enunciado,
      opciones,
      indiceCorrecto: 0,
      explicacion,
      visual: chart,
    };
  }
}
