import { BaseGenerador } from "../core/baseGenerador";
import type { PRNG } from "../core/prng";
import type { Dificultad, Ejercicio, Calculator } from "../core/types";

const G = 9.8;
type R = [number, number];
function rng(d: Dificultad, b: R, i: R, a: R): R {
  return d === "basico" ? b : d === "intermedio" ? i : a;
}

export class EnergiaGenerator extends BaseGenerador {
  readonly id = "fisica/energia";
  readonly materia = "fisica";
  readonly subtipos = [
    "trabajo_mecanico", "energia_cinetica", "energia_potencial",
    "conservacion_energia", "potencia_mecanica",
  ];

  private readonly calc: Calculator;

  constructor(prng: PRNG, calc: Calculator) {
    super(prng);
    this.calc = calc;
  }

  generarEjercicio(subtipo: string, dificultad: Dificultad, _calc: Calculator): Ejercicio {
    switch (subtipo) {
      case "energia_cinetica":     return this.genEc(dificultad);
      case "energia_potencial":    return this.genEp(dificultad);
      case "conservacion_energia": return this.genConservacion(dificultad);
      case "potencia_mecanica":    return this.genPotencia(dificultad);
      default:                     return this.genTrabajo(dificultad);
    }
  }

  private genTrabajo(dificultad: Dificultad): Ejercicio {
    const [fMin, fMax] = rng(dificultad, [5, 50], [20, 200], [50, 500]);
    const [dMin, dMax] = rng(dificultad, [1, 20], [5, 50], [10, 100]);
    const F = this.randInt(fMin, fMax);
    const dist = this.randInt(dMin, dMax);
    const angulo = this.pickOne([0, 30, 45, 60]);
    const res = this.calc.calcular({ tipo: "trabajo_mecanico", payload: { fuerza: F, distancia: dist, angulo } });
    const ans = this.redondear(res.resultado as number, 2);
    const opts = [`${ans} J`, ...this.generarOpcionesIncorrectas(ans, 3, 0.3).map(x => `${x} J`)];
    const label = angulo === 0 ? "" : ` (θ=${angulo}°)`;
    return this.crearQuiz({
      id: `${this.id}/trabajo_mecanico/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "trabajo_mecanico", dificultad,
      enunciado: `Una fuerza de ${F} N${label} desplaza un objeto ${dist} m. ¿Cuánto trabajo realiza?`,
      opciones: opts, indiceCorrecto: 0,
      pasos: res.pasos,
      datos: { fuerza: F, distancia: dist, angulo },
    });
  }

  private genEc(dificultad: Dificultad): Ejercicio {
    const [mMin, mMax] = rng(dificultad, [1, 20], [5, 50], [10, 100]);
    const [vMin, vMax] = rng(dificultad, [1, 10], [5, 30], [10, 60]);
    const m = this.randInt(mMin, mMax);
    const v = this.randInt(vMin, vMax);
    const res = this.calc.calcular({ tipo: "energia_cinetica", payload: { masa: m, velocidad: v } });
    const ans = this.redondear(res.resultado as number, 2);
    const opts = [`${ans} J`, ...this.generarOpcionesIncorrectas(ans, 3, 0.3).map(x => `${x} J`)];
    return this.crearQuiz({
      id: `${this.id}/energia_cinetica/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "energia_cinetica", dificultad,
      enunciado: `Un objeto de ${m} kg se mueve a ${v} m/s. ¿Cuál es su energía cinética?`,
      opciones: opts, indiceCorrecto: 0,
      pasos: res.pasos,
      datos: { masa: m, velocidad: v },
    });
  }

  private genEp(dificultad: Dificultad): Ejercicio {
    const [mMin, mMax] = rng(dificultad, [1, 20], [5, 50], [10, 100]);
    const [hMin, hMax] = rng(dificultad, [1, 10], [5, 30], [10, 80]);
    const m = this.randInt(mMin, mMax);
    const h = this.randInt(hMin, hMax);
    const res = this.calc.calcular({ tipo: "energia_potencial", payload: { masa: m, g: G, altura: h } });
    const ans = this.redondear(res.resultado as number, 2);
    const opts = [`${ans} J`, ...this.generarOpcionesIncorrectas(ans, 3, 0.3).map(x => `${x} J`)];
    return this.crearQuiz({
      id: `${this.id}/energia_potencial/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "energia_potencial", dificultad,
      enunciado: `Un objeto de ${m} kg está a ${h} m de altura. ¿Cuál es su energía potencial gravitatoria?`,
      opciones: opts, indiceCorrecto: 0,
      pasos: res.pasos,
      datos: { masa: m, g: G, altura: h },
    });
  }

  private genConservacion(dificultad: Dificultad): Ejercicio {
    const [hMin, hMax] = rng(dificultad, [1, 10], [5, 30], [10, 80]);
    const h = this.randInt(hMin, hMax);
    const res = this.calc.calcular({ tipo: "conservacion_energia", payload: { g: G, altura: h } });
    const ans = this.redondear(res.resultado as number, 2);
    const opts = [`${ans} m/s`, ...this.generarOpcionesIncorrectas(ans, 3, 0.3).map(x => `${x} m/s`)];
    return this.crearQuiz({
      id: `${this.id}/conservacion_energia/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "conservacion_energia", dificultad,
      enunciado: `Un objeto cae desde ${h} m de altura. Usando conservación de energía, ¿cuál es su velocidad al llegar al suelo?`,
      opciones: opts, indiceCorrecto: 0,
      pasos: res.pasos,
      datos: { g: G, altura: h },
    });
  }

  private genPotencia(dificultad: Dificultad): Ejercicio {
    const [wMin, wMax] = rng(dificultad, [100, 1000], [500, 5000], [1000, 10000]);
    const [tMin, tMax] = rng(dificultad, [1, 10], [5, 30], [10, 60]);
    const W = this.randInt(wMin, wMax);
    const t = this.randInt(tMin, tMax);
    const res = this.calc.calcular({ tipo: "potencia_mecanica", payload: { trabajo: W, tiempo: t } });
    const ans = this.redondear(res.resultado as number, 2);
    const opts = [`${ans} W`, ...this.generarOpcionesIncorrectas(ans, 3, 0.3).map(x => `${x} W`)];
    return this.crearQuiz({
      id: `${this.id}/potencia_mecanica/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "potencia_mecanica", dificultad,
      enunciado: `Se realiza un trabajo de ${W} J en ${t} s. ¿Cuál es la potencia desarrollada?`,
      opciones: opts, indiceCorrecto: 0,
      pasos: res.pasos,
      datos: { trabajo: W, tiempo: t },
    });
  }
}
