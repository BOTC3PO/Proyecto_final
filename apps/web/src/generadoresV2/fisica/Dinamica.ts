import { BaseGenerador } from "../core/baseGenerador";
import type { PRNG } from "../core/prng";
import type { Dificultad, Ejercicio, Calculator, VisualSpec } from "../core/types";

const G = 9.8;
type R = [number, number];
function rng(d: Dificultad, b: R, i: R, a: R): R {
  return d === "basico" ? b : d === "intermedio" ? i : a;
}

export class DinamicaGenerator extends BaseGenerador {
  readonly id = "fisica/dinamica";
  readonly materia = "fisica";
  readonly subtipos = ["suma_fuerzas", "peso", "friccion", "plano_inclinado", "ley_hooke"];

  private readonly calc: Calculator;

  constructor(prng: PRNG, calc: Calculator) {
    super(prng);
    this.calc = calc;
  }

  generarEjercicio(subtipo: string, dificultad: Dificultad, _calc: Calculator): Ejercicio {
    switch (subtipo) {
      case "peso":           return this.genPeso(dificultad);
      case "friccion":       return this.genFriccion(dificultad);
      case "plano_inclinado": return this.genPlano(dificultad);
      case "ley_hooke":      return this.genHooke(dificultad);
      default:               return this.genSumaFuerzas(dificultad);
    }
  }

  private genSumaFuerzas(dificultad: Dificultad): Ejercicio {
    const [fMin, fMax] = rng(dificultad, [5, 50], [10, 100], [20, 200]);
    const n = this.randInt(2, 3);
    const fuerzas = Array.from({ length: n }, () => {
      const sign = this.pickOne([-1, 1]);
      return sign * this.randInt(fMin, fMax);
    });
    const res = this.calc.calcular({ tipo: "suma_fuerzas", payload: { fuerzas } });
    const ans = res.resultado as number;
    const opts = [`${ans} N`, ...this.generarOpcionesIncorrectas(ans, 3, 0.3).map(x => `${x} N`)];
    const visual: VisualSpec = {
      kind: "vector-diagram",
      vectors: fuerzas.map((f, i) => ({
        id: `f${i + 1}`,
        label: `F${i + 1} = ${f} N`,
        dx: f,
        dy: 0,
        color: f >= 0 ? "#2563EB" : "#EF4444",
      })),
    };
    return {
      ...this.crearQuiz({
        id: `${this.id}/suma_fuerzas/${this.randInt(1e5, 9e5)}`,
        materia: this.materia, subtipo: "suma_fuerzas", dificultad,
        enunciado: `Sobre un objeto actúan fuerzas de ${fuerzas.map(f => `${f} N`).join(", ")}. ¿Cuál es la fuerza neta?`,
        opciones: opts, indiceCorrecto: 0,
        pasos: res.pasos,
        datos: { fuerzas: fuerzas as unknown as Record<string, unknown> },
      }),
      visual,
    };
  }

  private genPeso(dificultad: Dificultad): Ejercicio {
    const [mMin, mMax] = rng(dificultad, [1, 20], [5, 50], [10, 100]);
    const modo = this.pickOne(["peso", "masa"] as const);
    const masa = this.randInt(mMin, mMax);
    const peso = this.redondear(masa * G, 2);
    let res;
    let enunciado: string;
    let unidad: string;
    if (modo === "peso") {
      res = this.calc.calcular({ tipo: "peso", payload: { masa, g: G } });
      enunciado = `Un objeto tiene masa ${masa} kg. ¿Cuál es su peso (g=9.8 m/s²)?`;
      unidad = "N";
    } else {
      res = this.calc.calcular({ tipo: "masa_desde_peso", payload: { peso, g: G } });
      enunciado = `Un objeto pesa ${peso} N (g=9.8 m/s²). ¿Cuál es su masa?`;
      unidad = "kg";
    }
    const ans = this.redondear(res.resultado as number, 2);
    const opts = [`${ans} ${unidad}`, ...this.generarOpcionesIncorrectas(ans, 3, 0.3).map(x => `${x} ${unidad}`)];
    return this.crearQuiz({
      id: `${this.id}/peso/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "peso", dificultad,
      enunciado, opciones: opts, indiceCorrecto: 0,
      pasos: res.pasos,
    });
  }

  private genFriccion(dificultad: Dificultad): Ejercicio {
    const [nMin, nMax] = rng(dificultad, [10, 100], [50, 300], [100, 600]);
    const mu = this.redondear(this.randFloat(0.1, 0.8, 2), 2);
    const N = this.randInt(nMin, nMax);
    const modo = this.pickOne(["fuerza", "coeficiente", "normal"] as const);
    const Fr = this.redondear(mu * N, 2);
    let res;
    let enunciado: string;
    let unidad: string;
    if (modo === "fuerza") {
      res = this.calc.calcular({ tipo: "friccion", payload: { coeficiente: mu, normal: N } });
      enunciado = `μ=${mu}, N=${N} N. ¿Cuál es la fuerza de fricción?`;
      unidad = "N";
    } else if (modo === "coeficiente") {
      res = this.calc.calcular({ tipo: "friccion_coeficiente", payload: { fuerza: Fr, normal: N } });
      enunciado = `Fr=${Fr} N, N=${N} N. ¿Cuál es el coeficiente de fricción?`;
      unidad = "";
    } else {
      res = this.calc.calcular({ tipo: "friccion_normal", payload: { fuerza: Fr, coeficiente: mu } });
      enunciado = `Fr=${Fr} N, μ=${mu}. ¿Cuál es la fuerza normal?`;
      unidad = "N";
    }
    const ans = this.redondear(res.resultado as number, 2);
    const opts = [`${ans}${unidad ? " " + unidad : ""}`, ...this.generarOpcionesIncorrectas(ans, 3, 0.3).map(x => `${x}${unidad ? " " + unidad : ""}`)];
    return this.crearQuiz({
      id: `${this.id}/friccion/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "friccion", dificultad,
      enunciado, opciones: opts, indiceCorrecto: 0,
      pasos: res.pasos,
    });
  }

  private genPlano(dificultad: Dificultad): Ejercicio {
    const [mMin, mMax] = rng(dificultad, [1, 10], [5, 30], [10, 60]);
    const masa = this.randInt(mMin, mMax);
    const angulo = this.randInt(20, 60);
    const res = this.calc.calcular({ tipo: "plano_inclinado", payload: { masa, angulo, g: G } });
    const ans = this.redondear(res.resultado as number, 2);
    const opts = [`${ans} N`, ...this.generarOpcionesIncorrectas(ans, 3, 0.3).map(x => `${x} N`)];
    return this.crearQuiz({
      id: `${this.id}/plano_inclinado/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "plano_inclinado", dificultad,
      enunciado: `Un bloque de ${masa} kg está en un plano inclinado ${angulo}°. ¿Cuál es la componente paralela del peso?`,
      opciones: opts, indiceCorrecto: 0,
      pasos: res.pasos,
      datos: { masa, angulo, g: G },
    });
  }

  private genHooke(dificultad: Dificultad): Ejercicio {
    const [kMin, kMax] = rng(dificultad, [10, 100], [50, 300], [100, 800]);
    const [xMin, xMax] = rng(dificultad, [1, 10], [5, 30], [10, 60]);
    const k = this.randInt(kMin, kMax);
    const x = this.randInt(xMin, xMax);
    const F = k * x;
    const modo = this.pickOne(["fuerza", "constante", "deformacion"] as const);
    let res;
    let enunciado: string;
    let unidad: string;
    if (modo === "fuerza") {
      res = this.calc.calcular({ tipo: "ley_hooke", payload: { constante: k, deformacion: x } });
      enunciado = `Un resorte con k=${k} N/m se comprime ${x} cm. ¿Cuál es la fuerza?`;
      unidad = "N";
    } else if (modo === "constante") {
      res = this.calc.calcular({ tipo: "ley_hooke_constante", payload: { fuerza: F, deformacion: x } });
      enunciado = `Una fuerza de ${F} N produce una deformación de ${x} cm. ¿Cuál es la constante del resorte?`;
      unidad = "N/m";
    } else {
      res = this.calc.calcular({ tipo: "ley_hooke_deformacion", payload: { fuerza: F, constante: k } });
      enunciado = `Una fuerza de ${F} N actúa sobre un resorte (k=${k} N/m). ¿Cuánto se deforma?`;
      unidad = "cm";
    }
    const ans = this.redondear(res.resultado as number, 2);
    const opts = [`${ans} ${unidad}`, ...this.generarOpcionesIncorrectas(ans, 3, 0.3).map(x2 => `${x2} ${unidad}`)];
    return this.crearQuiz({
      id: `${this.id}/ley_hooke/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "ley_hooke", dificultad,
      enunciado, opciones: opts, indiceCorrecto: 0,
      pasos: res.pasos,
    });
  }
}
