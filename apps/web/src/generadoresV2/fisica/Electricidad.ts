import { BaseGenerador } from "../core/baseGenerador";
import type { PRNG } from "../core/prng";
import type { Dificultad, Ejercicio, Calculator, VisualSpec } from "../core/types";

type R = [number, number];
function rng(d: Dificultad, b: R, i: R, a: R): R {
  return d === "basico" ? b : d === "intermedio" ? i : a;
}

export class ElectricidadGenerator extends BaseGenerador {
  readonly id = "fisica/electricidad";
  readonly materia = "fisica";
  readonly subtipos = [
    "ley_ohm", "resistencia_serie", "resistencia_paralelo",
    "potencia_electrica", "consumo_electrico",
  ];

  private readonly calc: Calculator;

  constructor(prng: PRNG, calc: Calculator) {
    super(prng);
    this.calc = calc;
  }

  generarEjercicio(subtipo: string, dificultad: Dificultad, _calc: Calculator): Ejercicio {
    switch (subtipo) {
      case "resistencia_serie":    return this.genSerie(dificultad);
      case "resistencia_paralelo": return this.genParalelo(dificultad);
      case "potencia_electrica":   return this.genPotencia(dificultad);
      case "consumo_electrico":    return this.genConsumo(dificultad);
      default:                     return this.genOhm(dificultad);
    }
  }

  private genOhm(dificultad: Dificultad): Ejercicio {
    const [vMin, vMax] = rng(dificultad, [3, 24], [12, 120], [50, 240]);
    const [rMin, rMax] = rng(dificultad, [10, 100], [20, 500], [50, 1000]);
    const V = this.randInt(vMin, vMax);
    const R = this.randInt(rMin, rMax);
    const I = this.redondear(V / R, 3);
    const modo = this.pickOne(["calcular_V", "calcular_I", "calcular_R"] as const);
    let res;
    let enunciado: string;
    let unidad: string;
    if (modo === "calcular_V") {
      res = this.calc.calcular({ tipo: "ley_ohm_calcular_V", payload: { corriente: I, resistencia: R } });
      enunciado = `Por una resistencia de ${R} Ω circula ${I} A. ¿Cuál es el voltaje?`;
      unidad = "V";
    } else if (modo === "calcular_I") {
      res = this.calc.calcular({ tipo: "ley_ohm_calcular_I", payload: { voltaje: V, resistencia: R } });
      enunciado = `Un circuito tiene ${V} V y ${R} Ω. ¿Qué corriente circula?`;
      unidad = "A";
    } else {
      res = this.calc.calcular({ tipo: "ley_ohm_calcular_R", payload: { voltaje: V, corriente: I } });
      enunciado = `Con ${V} V circulan ${I} A. ¿Cuál es la resistencia?`;
      unidad = "Ω";
    }
    const ans = this.redondear(res.resultado as number, 3);
    const opts = [`${ans} ${unidad}`, ...this.generarOpcionesIncorrectas(ans, 3, 0.35).map(x => `${x} ${unidad}`)];
    const visual: VisualSpec = {
      kind: "circuit",
      elements: [
        { id: "battery", type: "battery", value: V, unit: "V" },
        { id: "resistor", type: "resistor", value: R, unit: "Ω" },
      ],
    };
    return {
      ...this.crearQuiz({
        id: `${this.id}/ley_ohm/${this.randInt(1e5, 9e5)}`,
        materia: this.materia, subtipo: "ley_ohm", dificultad,
        enunciado, opciones: opts, indiceCorrecto: 0,
        pasos: res.pasos,
        datos: { voltaje: V, resistencia: R, corriente: I },
      }),
      visual,
    };
  }

  private genSerie(dificultad: Dificultad): Ejercicio {
    const [rMin, rMax] = rng(dificultad, [10, 100], [20, 300], [50, 600]);
    const n = this.randInt(2, 4);
    const resistencias = Array.from({ length: n }, () => this.randInt(rMin, rMax));
    const res = this.calc.calcular({ tipo: "resistencia_serie", payload: { resistencias } });
    const ans = this.redondear(res.resultado as number, 2);
    const opts = [`${ans} Ω`, ...this.generarOpcionesIncorrectas(ans, 3, 0.3).map(x => `${x} Ω`)];
    const visual: VisualSpec = {
      kind: "circuit",
      elements: [
        { id: "battery", type: "battery" },
        ...resistencias.map((r, i) => ({ id: `r${i + 1}`, type: "resistor", value: r, unit: "Ω" })),
      ],
    };
    return {
      ...this.crearQuiz({
        id: `${this.id}/resistencia_serie/${this.randInt(1e5, 9e5)}`,
        materia: this.materia, subtipo: "resistencia_serie", dificultad,
        enunciado: `Resistencias en serie: ${resistencias.map(r => `${r} Ω`).join(", ")}. ¿Cuál es la resistencia total?`,
        opciones: opts, indiceCorrecto: 0,
        pasos: res.pasos,
        datos: { resistencias: resistencias as unknown as Record<string, unknown> },
      }),
      visual,
    };
  }

  private genParalelo(dificultad: Dificultad): Ejercicio {
    const [rMin, rMax] = rng(dificultad, [20, 200], [50, 500], [100, 1000]);
    const n = this.randInt(2, 3);
    const resistencias = Array.from({ length: n }, () => this.randInt(rMin, rMax));
    const res = this.calc.calcular({ tipo: "resistencia_paralelo", payload: { resistencias } });
    const ans = this.redondear(res.resultado as number, 2);
    const opts = [`${ans} Ω`, ...this.generarOpcionesIncorrectas(ans, 3, 0.3).map(x => `${x} Ω`)];
    const visual: VisualSpec = {
      kind: "circuit",
      elements: [
        { id: "battery", type: "battery" },
        ...resistencias.map((r, i) => ({ id: `r${i + 1}`, type: "resistor-parallel", value: r, unit: "Ω" })),
      ],
    };
    return {
      ...this.crearQuiz({
        id: `${this.id}/resistencia_paralelo/${this.randInt(1e5, 9e5)}`,
        materia: this.materia, subtipo: "resistencia_paralelo", dificultad,
        enunciado: `Resistencias en paralelo: ${resistencias.map(r => `${r} Ω`).join(", ")}. ¿Cuál es la resistencia equivalente?`,
        opciones: opts, indiceCorrecto: 0,
        pasos: res.pasos,
        datos: { resistencias: resistencias as unknown as Record<string, unknown> },
      }),
      visual,
    };
  }

  private genPotencia(dificultad: Dificultad): Ejercicio {
    const [vMin, vMax] = rng(dificultad, [12, 120], [50, 240], [100, 400]);
    const [iMin, iMax] = rng(dificultad, [1, 10], [2, 20], [5, 50]);
    const V = this.randInt(vMin, vMax);
    const I = this.randInt(iMin, iMax);
    const res = this.calc.calcular({ tipo: "potencia_electrica", payload: { voltaje: V, corriente: I } });
    const ans = res.resultado as number;
    const opts = [`${ans} W`, ...this.generarOpcionesIncorrectas(ans, 3, 0.3).map(x => `${x} W`)];
    return this.crearQuiz({
      id: `${this.id}/potencia_electrica/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "potencia_electrica", dificultad,
      enunciado: `Un dispositivo opera a ${V} V y consume ${I} A. ¿Cuál es la potencia?`,
      opciones: opts, indiceCorrecto: 0,
      pasos: res.pasos,
      datos: { voltaje: V, corriente: I },
    });
  }

  private genConsumo(dificultad: Dificultad): Ejercicio {
    const [pMin, pMax] = rng(dificultad, [100, 1000], [500, 3000], [1000, 5000]);
    const [tMin, tMax] = rng(dificultad, [1, 8], [4, 24], [10, 72]);
    const P = this.randInt(pMin, pMax); // W
    const t = this.randInt(tMin, tMax); // horas
    const res = this.calc.calcular({ tipo: "consumo_electrico", payload: { potencia: P, tiempo: t } });
    const ans = this.redondear(res.resultado as number, 4);
    const opts = [`${ans} kWh`, ...this.generarOpcionesIncorrectas(ans, 3, 0.3).map(x => `${x} kWh`)];
    return this.crearQuiz({
      id: `${this.id}/consumo_electrico/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "consumo_electrico", dificultad,
      enunciado: `Un aparato de ${P} W funciona ${t} h. ¿Cuántos kWh consume?`,
      opciones: opts, indiceCorrecto: 0,
      pasos: res.pasos,
      datos: { potencia: P, tiempo: t },
    });
  }
}
