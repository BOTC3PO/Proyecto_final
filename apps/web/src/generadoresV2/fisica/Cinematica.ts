import { BaseGenerador } from "../core/baseGenerador";
import type { PRNG } from "../core/prng";
import type { Dificultad, Ejercicio, Calculator, VisualSpec } from "../core/types";

const G = 9.8;

type R = [number, number];
function rng(d: Dificultad, b: R, i: R, a: R): R {
  return d === "basico" ? b : d === "intermedio" ? i : a;
}

function linPoints(n: number, tMax: number, fn: (t: number) => number) {
  return Array.from({ length: n }, (_, k) => {
    const x = Number(((k * tMax) / (n - 1)).toFixed(2));
    return { x, y: Number(fn(x).toFixed(2)) };
  });
}

export class CinematicaGenerator extends BaseGenerador {
  readonly id = "fisica/cinematica";
  readonly materia = "fisica";
  readonly subtipos = [
    "MRU", "MRUV", "caida_libre", "movimiento_vertical",
    "movimiento_horizontal", "relacion_distancia_tiempo", "conversion_unidades",
  ];

  private readonly calc: Calculator;

  constructor(prng: PRNG, calc: Calculator) {
    super(prng);
    this.calc = calc;
  }

  generarEjercicio(subtipo: string, dificultad: Dificultad, _calc: Calculator): Ejercicio {
    switch (subtipo) {
      case "MRUV":             return this.genMRUV(dificultad);
      case "caida_libre":      return this.genCaidaLibre(dificultad);
      case "movimiento_vertical": return this.genMovVertical(dificultad);
      case "movimiento_horizontal": return this.genMovHorizontal(dificultad);
      case "relacion_distancia_tiempo": return this.genRelDT(dificultad);
      case "conversion_unidades": return this.genConversion(dificultad);
      default:                 return this.genMRU(dificultad);
    }
  }

  private genMRU(dificultad: Dificultad): Ejercicio {
    const [vMin, vMax] = rng(dificultad, [10, 60], [20, 120], [50, 200]);
    const [tMin, tMax] = rng(dificultad, [1, 5], [2, 10], [5, 20]);
    const v = this.randInt(vMin, vMax);
    const t = this.randInt(tMin, tMax);
    const res = this.calc.calcular({ tipo: "MRU_distancia", payload: { velocidad: v, tiempo: t } });
    const ans = res.resultado as number;
    const opts = [`${ans} m`, ...this.generarOpcionesIncorrectas(ans, 3, 0.3).map(x => `${x} m`)];
    const visual: VisualSpec = {
      kind: "line-chart",
      title: "MRU",
      xLabel: "Tiempo", xUnit: "s",
      yLabel: "Posición / Velocidad", yUnit: "m / m/s",
      series: [
        { id: "pos", label: "x(t) [m]", color: "#2563EB", points: linPoints(6, t, t2 => v * t2) },
        { id: "vel", label: "v(t) [m/s]", color: "#F97316", points: linPoints(6, t, () => v) },
      ],
    };
    return {
      ...this.crearQuiz({
        id: `${this.id}/MRU/${this.randInt(1e5, 9e5)}`,
        materia: this.materia, subtipo: "MRU", dificultad,
        enunciado: `Un vehículo se desplaza a ${v} m/s durante ${t} s. ¿Qué distancia recorre?`,
        opciones: opts, indiceCorrecto: 0,
        pasos: res.pasos,
        datos: { velocidad: v, tiempo: t },
      }),
      visual,
    };
  }

  private genMRUV(dificultad: Dificultad): Ejercicio {
    const [v0Min, v0Max] = rng(dificultad, [0, 10], [0, 20], [0, 30]);
    const [aMin, aMax] = rng(dificultad, [1, 5], [2, 10], [3, 15]);
    const [tMin, tMax] = rng(dificultad, [1, 5], [2, 10], [5, 20]);
    const v0 = this.randInt(v0Min, v0Max);
    const a = this.randInt(aMin, aMax);
    const t = this.randInt(tMin, tMax);
    const res = this.calc.calcular({ tipo: "MRUV_velocidad_final", payload: { v0, aceleracion: a, tiempo: t } });
    const ans = res.resultado as number;
    const opts = [`${ans} m/s`, ...this.generarOpcionesIncorrectas(ans, 3, 0.3).map(x => `${x} m/s`)];
    const visual: VisualSpec = {
      kind: "line-chart",
      title: "MRUV",
      xLabel: "Tiempo", xUnit: "s",
      yLabel: "Velocidad / Posición",
      series: [
        { id: "vel", label: "v(t) [m/s]", color: "#F97316", points: linPoints(6, t, t2 => v0 + a * t2) },
        { id: "pos", label: "x(t) [m]", color: "#2563EB", points: linPoints(6, t, t2 => v0 * t2 + 0.5 * a * t2 ** 2) },
      ],
    };
    return {
      ...this.crearQuiz({
        id: `${this.id}/MRUV/${this.randInt(1e5, 9e5)}`,
        materia: this.materia, subtipo: "MRUV", dificultad,
        enunciado: `Un objeto parte con v₀=${v0} m/s y acelera a=${a} m/s². ¿Cuál es su velocidad tras ${t} s?`,
        opciones: opts, indiceCorrecto: 0,
        pasos: res.pasos,
        datos: { v0, aceleracion: a, tiempo: t },
      }),
      visual,
    };
  }

  private genCaidaLibre(dificultad: Dificultad): Ejercicio {
    const [tMin, tMax] = rng(dificultad, [1, 5], [2, 10], [5, 20]);
    const t = this.randInt(tMin, tMax);
    const res = this.calc.calcular({ tipo: "caida_libre", payload: { g: G, tiempo: t } });
    const ans = res.resultado as number;
    const opts = [`${ans} m/s`, ...this.generarOpcionesIncorrectas(ans, 3, 0.3).map(x => `${x} m/s`)];
    return this.crearQuiz({
      id: `${this.id}/caida_libre/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "caida_libre", dificultad,
      enunciado: `Un objeto cae libremente durante ${t} s (g=9.8 m/s²). ¿Cuál es su velocidad al impactar?`,
      opciones: opts, indiceCorrecto: 0,
      pasos: res.pasos,
      datos: { g: G, tiempo: t },
    });
  }

  private genMovVertical(dificultad: Dificultad): Ejercicio {
    const [vMin, vMax] = rng(dificultad, [10, 60], [20, 120], [50, 200]);
    const v0 = this.randInt(vMin, vMax);
    const res = this.calc.calcular({ tipo: "movimiento_vertical_altura_max", payload: { v0, g: G } });
    const ans = this.redondear(res.resultado as number, 2);
    const opts = [`${ans} m`, ...this.generarOpcionesIncorrectas(ans, 3, 0.3).map(x => `${x} m`)];
    return this.crearQuiz({
      id: `${this.id}/movimiento_vertical/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "movimiento_vertical", dificultad,
      enunciado: `Un objeto se lanza hacia arriba con v₀=${v0} m/s. ¿Cuál es la altura máxima?`,
      opciones: opts, indiceCorrecto: 0,
      pasos: res.pasos,
      datos: { v0, g: G },
    });
  }

  private genMovHorizontal(dificultad: Dificultad): Ejercicio {
    const [vMin, vMax] = rng(dificultad, [10, 60], [20, 120], [50, 200]);
    const [hMin, hMax] = rng(dificultad, [5, 20], [10, 50], [20, 100]);
    const v = this.randInt(vMin, vMax);
    const h = this.randInt(hMin, hMax);
    const res = this.calc.calcular({ tipo: "movimiento_horizontal_alcance", payload: { velocidad: v, altura: h, g: G } });
    const ans = this.redondear(res.resultado as number, 2);
    const opts = [`${ans} m`, ...this.generarOpcionesIncorrectas(ans, 3, 0.3).map(x => `${x} m`)];
    return this.crearQuiz({
      id: `${this.id}/movimiento_horizontal/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "movimiento_horizontal", dificultad,
      enunciado: `Un proyectil se lanza horizontalmente a ${v} m/s desde ${h} m de altura. ¿Cuál es el alcance horizontal?`,
      opciones: opts, indiceCorrecto: 0,
      pasos: res.pasos,
      datos: { velocidad: v, altura: h, g: G },
    });
  }

  private genRelDT(dificultad: Dificultad): Ejercicio {
    const [vMin, vMax] = rng(dificultad, [10, 60], [20, 120], [50, 200]);
    const [tMin, tMax] = rng(dificultad, [1, 5], [2, 10], [5, 20]);
    const v = this.randInt(vMin, vMax);
    const t = this.randInt(tMin, tMax);
    const dist = v * t;
    const modo = this.pickOne(["distancia", "velocidad", "tiempo"] as const);
    let res;
    let enunciado: string;
    let unidad: string;
    if (modo === "distancia") {
      res = this.calc.calcular({ tipo: "relacion_distancia_tiempo_distancia", payload: { velocidad: v, tiempo: t } });
      enunciado = `Un móvil va a ${v} m/s durante ${t} s. ¿Qué distancia recorre?`;
      unidad = "m";
    } else if (modo === "velocidad") {
      res = this.calc.calcular({ tipo: "relacion_distancia_tiempo_velocidad", payload: { distancia: dist, tiempo: t } });
      enunciado = `Un móvil recorre ${dist} m en ${t} s. ¿Cuál es su velocidad?`;
      unidad = "m/s";
    } else {
      res = this.calc.calcular({ tipo: "relacion_distancia_tiempo_tiempo", payload: { distancia: dist, velocidad: v } });
      enunciado = `Un móvil a ${v} m/s recorre ${dist} m. ¿Cuánto tarda?`;
      unidad = "s";
    }
    const ans = this.redondear(res.resultado as number, 2);
    const opts = [`${ans} ${unidad}`, ...this.generarOpcionesIncorrectas(ans, 3, 0.3).map(x => `${x} ${unidad}`)];
    return this.crearQuiz({
      id: `${this.id}/relacion_distancia_tiempo/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "relacion_distancia_tiempo", dificultad,
      enunciado, opciones: opts, indiceCorrecto: 0,
      pasos: res.pasos,
    });
  }

  private genConversion(dificultad: Dificultad): Ejercicio {
    const [vMin, vMax] = rng(dificultad, [10, 60], [20, 120], [50, 200]);
    const haciaKmh = this.pickOne([true, false]);
    const valor = this.randInt(vMin, vMax);
    const factor = haciaKmh ? 3.6 : 1 / 3.6;
    const res = this.calc.calcular({ tipo: "conversion_unidades", payload: { valor, factor } });
    const ans = this.redondear(res.resultado as number, 2);
    const unidadOrigen = haciaKmh ? "m/s" : "km/h";
    const unidadDestino = haciaKmh ? "km/h" : "m/s";
    const opts = [`${ans} ${unidadDestino}`, ...this.generarOpcionesIncorrectas(ans, 3, 0.3).map(x => `${x} ${unidadDestino}`)];
    return this.crearQuiz({
      id: `${this.id}/conversion_unidades/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "conversion_unidades", dificultad,
      enunciado: `Convierte ${valor} ${unidadOrigen} a ${unidadDestino}.`,
      opciones: opts, indiceCorrecto: 0,
      pasos: res.pasos,
      datos: { valor, factor },
    });
  }
}
