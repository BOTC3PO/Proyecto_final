import { BaseGenerador } from "../core/baseGenerador";
import type { PRNG } from "../core/prng";
import type { Dificultad, Ejercicio, Calculator } from "../core/types";

type R = [number, number];
function rng(d: Dificultad, b: R, i: R, a: R): R {
  return d === "basico" ? b : d === "intermedio" ? i : a;
}

const V_SONIDO_AIRE = 340;   // m/s
const V_SONIDO_AGUA = 1500;  // m/s

export class OndasGenerator extends BaseGenerador {
  readonly id = "fisica/ondas";
  readonly materia = "fisica";
  readonly subtipos = ["velocidad_ondas", "longitud_onda", "frecuencia_periodo"];

  private readonly calc: Calculator;

  constructor(prng: PRNG, calc: Calculator) {
    super(prng);
    this.calc = calc;
  }

  generarEjercicio(subtipo: string, dificultad: Dificultad, _calc: Calculator): Ejercicio {
    switch (subtipo) {
      case "longitud_onda":     return this.genLongitudOnda(dificultad);
      case "frecuencia_periodo": return this.genFrecPeriodo(dificultad);
      default:                  return this.genVelocidad(dificultad);
    }
  }

  private genVelocidad(dificultad: Dificultad): Ejercicio {
    const [fMin, fMax] = rng(dificultad, [100, 1000], [200, 5000], [500, 20000]);
    const [lMin, lMax] = rng(dificultad, [1, 10], [0.1, 5], [0.01, 2]);
    const f = this.randInt(fMin, fMax);
    const lambda = this.redondear(this.randFloat(lMin, lMax, 2), 2);
    const modo = this.pickOne(["velocidad", "frecuencia", "longitud"] as const);
    const v = this.redondear(f * lambda, 2);
    let res;
    let enunciado: string;
    let unidad: string;
    if (modo === "velocidad") {
      res = this.calc.calcular({ tipo: "velocidad_ondas", payload: { frecuencia: f, longitud: lambda } });
      enunciado = `Una onda tiene f=${f} Hz y λ=${lambda} m. ¿Cuál es su velocidad?`;
      unidad = "m/s";
    } else if (modo === "frecuencia") {
      res = this.calc.calcular({ tipo: "frecuencia_onda", payload: { velocidad: v, longitud: lambda } });
      enunciado = `Una onda viaja a ${v} m/s con λ=${lambda} m. ¿Cuál es su frecuencia?`;
      unidad = "Hz";
    } else {
      res = this.calc.calcular({ tipo: "longitud_onda", payload: { velocidad: v, frecuencia: f } });
      enunciado = `Una onda viaja a ${v} m/s con f=${f} Hz. ¿Cuál es su longitud de onda?`;
      unidad = "m";
    }
    const ans = this.redondear(res.resultado as number, 3);
    const opts = [`${ans} ${unidad}`, ...this.generarOpcionesIncorrectas(ans, 3, 0.3).map(x => `${x} ${unidad}`)];
    return this.crearQuiz({
      id: `${this.id}/velocidad_ondas/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "velocidad_ondas", dificultad,
      enunciado, opciones: opts, indiceCorrecto: 0,
      pasos: res.pasos,
    });
  }

  private genLongitudOnda(dificultad: Dificultad): Ejercicio {
    const [fMin, fMax] = rng(dificultad, [20, 500], [100, 2000], [500, 10000]);
    const medio = this.pickOne(["aire", "agua"] as const);
    const v = medio === "aire" ? V_SONIDO_AIRE : V_SONIDO_AGUA;
    const f = this.randInt(fMin, fMax);
    const modo = this.pickOne(["longitud", "frecuencia"] as const);
    const lambda = this.redondear(v / f, 4);
    let res;
    let enunciado: string;
    let unidad: string;
    if (modo === "longitud") {
      res = this.calc.calcular({ tipo: "longitud_onda", payload: { velocidad: v, frecuencia: f } });
      enunciado = `El sonido en ${medio} (v=${v} m/s) tiene f=${f} Hz. ¿Cuál es su longitud de onda?`;
      unidad = "m";
    } else {
      res = this.calc.calcular({ tipo: "frecuencia_onda", payload: { velocidad: v, longitud: lambda } });
      enunciado = `El sonido en ${medio} (v=${v} m/s) tiene λ=${lambda} m. ¿Cuál es su frecuencia?`;
      unidad = "Hz";
    }
    const ans = this.redondear(res.resultado as number, 3);
    const opts = [`${ans} ${unidad}`, ...this.generarOpcionesIncorrectas(ans, 3, 0.3).map(x => `${x} ${unidad}`)];
    return this.crearQuiz({
      id: `${this.id}/longitud_onda/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "longitud_onda", dificultad,
      enunciado, opciones: opts, indiceCorrecto: 0,
      pasos: res.pasos,
      datos: { velocidad: v, frecuencia: f },
    });
  }

  private genFrecPeriodo(dificultad: Dificultad): Ejercicio {
    const [fMin, fMax] = rng(dificultad, [1, 100], [10, 500], [50, 5000]);
    const f = this.randInt(fMin, fMax);
    const T = this.redondear(1 / f, 6);
    const modo = this.pickOne(["frecuencia_desde_periodo", "periodo_desde_frecuencia"] as const);
    let res;
    let enunciado: string;
    let unidad: string;
    if (modo === "frecuencia_desde_periodo") {
      res = this.calc.calcular({ tipo: "calcular_frecuencia", payload: { periodo: T } });
      enunciado = `Una onda tiene período T=${T} s. ¿Cuál es su frecuencia?`;
      unidad = "Hz";
    } else {
      res = this.calc.calcular({ tipo: "calcular_periodo", payload: { frecuencia: f } });
      enunciado = `Una onda tiene frecuencia f=${f} Hz. ¿Cuál es su período?`;
      unidad = "s";
    }
    const ans = this.redondear(res.resultado as number, 6);
    const opts = [`${ans} ${unidad}`, ...this.generarOpcionesIncorrectas(ans, 3, 0.3).map(x => `${x} ${unidad}`)];
    return this.crearQuiz({
      id: `${this.id}/frecuencia_periodo/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "frecuencia_periodo", dificultad,
      enunciado, opciones: opts, indiceCorrecto: 0,
      pasos: res.pasos,
      datos: { frecuencia: f, periodo: T },
    });
  }
}
