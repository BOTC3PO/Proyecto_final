import { BaseGenerador } from "../core/baseGenerador";
import type { PRNG } from "../core/prng";
import type { Dificultad, Ejercicio, Calculator } from "../core/types";

// R = 0.08206 L·atm/(mol·K)
const R_GAS = 0.08206;

type Rng = [number, number];
function rng(d: Dificultad, b: Rng, i: Rng, a: Rng): Rng {
  return d === "basico" ? b : d === "intermedio" ? i : a;
}

export class GasesGenerator extends BaseGenerador {
  readonly id = "quimica/gases";
  readonly materia = "quimica";
  readonly subtipos = [
    "ley_boyle", "ley_charles", "ley_gay_lussac", "ley_combinada",
    "gas_ideal", "presiones_parciales", "mezcla_gases",
  ];

  constructor(prng: PRNG) { super(prng); }

  generarEjercicio(subtipo: string, dificultad: Dificultad, _calc: Calculator): Ejercicio {
    switch (subtipo) {
      case "ley_boyle":          return this.genBoyle(dificultad);
      case "ley_charles":        return this.genCharles(dificultad);
      case "ley_gay_lussac":     return this.genGayLussac(dificultad);
      case "ley_combinada":      return this.genCombinada(dificultad);
      case "gas_ideal":          return this.genGasIdeal(dificultad);
      case "presiones_parciales": return this.genPresionesParciales(dificultad);
      default:                   return this.genMezclaGases(dificultad);
    }
  }

  private genBoyle(dificultad: Dificultad): Ejercicio {
    const [pMin, pMax] = rng(dificultad, [0.5, 2.0], [1.0, 5.0], [1.0, 10.0]);
    const [vMin, vMax] = rng(dificultad, [1, 5], [2, 10], [5, 20]);
    const P1 = this.randFloat(pMin, pMax, 2);
    const V1 = this.randFloat(vMin, vMax, 2);
    const factor = this.randFloat(0.3, 3.0, 2);
    const V2 = this.redondear(V1 * factor, 2);
    const P2 = this.redondear((P1 * V1) / V2, 3);
    const opts = [`${P2} atm`, ...this.generarOpcionesIncorrectas(P2, 3, 0.3).map(x => `${x} atm`)];
    return this.crearQuiz({
      id: `${this.id}/ley_boyle/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "ley_boyle", dificultad,
      enunciado: `Un gas ocupa ${V1} L a ${P1} atm (T constante). Si el volumen cambia a ${V2} L, ¿cuál es la nueva presión?`,
      opciones: opts, indiceCorrecto: 0,
      pasos: [
        "Ley de Boyle (T cte): P₁·V₁ = P₂·V₂.",
        `P₂ = (${P1} × ${V1}) / ${V2} = ${P2} atm.`,
      ],
      datos: { P1, V1, V2 },
    });
  }

  private genCharles(dificultad: Dificultad): Ejercicio {
    const [tMin, tMax] = rng(dificultad, [200, 350], [150, 450], [100, 600]);
    const [vMin, vMax] = rng(dificultad, [1, 5], [2, 10], [5, 20]);
    const T1 = this.randInt(tMin, tMax);
    const V1 = this.randFloat(vMin, vMax, 2);
    const T2 = this.randInt(tMin, tMax);
    const V2 = this.redondear((V1 * T2) / T1, 3);
    const opts = [`${V2} L`, ...this.generarOpcionesIncorrectas(V2, 3, 0.3).map(x => `${x} L`)];
    return this.crearQuiz({
      id: `${this.id}/ley_charles/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "ley_charles", dificultad,
      enunciado: `Un gas ocupa ${V1} L a ${T1} K (P constante). ¿Qué volumen ocupa a ${T2} K?`,
      opciones: opts, indiceCorrecto: 0,
      pasos: [
        "Ley de Charles (P cte): V₁/T₁ = V₂/T₂.",
        `V₂ = (${V1} × ${T2}) / ${T1} = ${V2} L.`,
      ],
      datos: { V1, T1, T2 },
    });
  }

  private genGayLussac(dificultad: Dificultad): Ejercicio {
    const [tMin, tMax] = rng(dificultad, [200, 350], [150, 450], [100, 600]);
    const [pMin, pMax] = rng(dificultad, [0.5, 2.0], [1.0, 5.0], [1.0, 10.0]);
    const T1 = this.randInt(tMin, tMax);
    const P1 = this.randFloat(pMin, pMax, 2);
    const T2 = this.randInt(tMin, tMax);
    const P2 = this.redondear((P1 * T2) / T1, 3);
    const opts = [`${P2} atm`, ...this.generarOpcionesIncorrectas(P2, 3, 0.3).map(x => `${x} atm`)];
    return this.crearQuiz({
      id: `${this.id}/ley_gay_lussac/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "ley_gay_lussac", dificultad,
      enunciado: `Un gas a ${P1} atm y ${T1} K (V constante) se calienta a ${T2} K. ¿Cuál es la nueva presión?`,
      opciones: opts, indiceCorrecto: 0,
      pasos: [
        "Ley de Gay-Lussac (V cte): P₁/T₁ = P₂/T₂.",
        `P₂ = (${P1} × ${T2}) / ${T1} = ${P2} atm.`,
      ],
      datos: { P1, T1, T2 },
    });
  }

  private genCombinada(dificultad: Dificultad): Ejercicio {
    const [tMin, tMax] = rng(dificultad, [200, 350], [150, 450], [100, 600]);
    const [pMin, pMax] = rng(dificultad, [0.5, 2.0], [1.0, 5.0], [1.0, 10.0]);
    const [vMin, vMax] = rng(dificultad, [1, 5], [2, 10], [5, 20]);
    const P1 = this.randFloat(pMin, pMax, 2);
    const V1 = this.randFloat(vMin, vMax, 2);
    const T1 = this.randInt(tMin, tMax);
    const P2 = this.randFloat(pMin, pMax, 2);
    const T2 = this.randInt(tMin, tMax);
    const V2 = this.redondear((P1 * V1 * T2) / (T1 * P2), 3);
    const opts = [`${V2} L`, ...this.generarOpcionesIncorrectas(V2, 3, 0.3).map(x => `${x} L`)];
    return this.crearQuiz({
      id: `${this.id}/ley_combinada/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "ley_combinada", dificultad,
      enunciado: `Un gas ocupa ${V1} L a ${P1} atm y ${T1} K. Si la presión cambia a ${P2} atm y la temperatura a ${T2} K, ¿cuál es el nuevo volumen?`,
      opciones: opts, indiceCorrecto: 0,
      pasos: [
        "Ley combinada: P₁V₁/T₁ = P₂V₂/T₂.",
        `V₂ = (${P1} × ${V1} × ${T2}) / (${T1} × ${P2}) = ${V2} L.`,
      ],
      datos: { P1, V1, T1, P2, T2 },
    });
  }

  private genGasIdeal(dificultad: Dificultad): Ejercicio {
    const [nMin, nMax] = rng(dificultad, [0.5, 2.0], [0.5, 5.0], [1.0, 10.0]);
    const [tMin, tMax] = rng(dificultad, [250, 350], [200, 450], [150, 600]);
    const [vMin, vMax] = rng(dificultad, [5, 20], [10, 40], [20, 80]);
    const n = this.randFloat(nMin, nMax, 2);
    const T = this.randInt(tMin, tMax);
    const V = this.randFloat(vMin, vMax, 1);
    const P = this.redondear((n * R_GAS * T) / V, 3);
    const opts = [`${P} atm`, ...this.generarOpcionesIncorrectas(P, 3, 0.3).map(x => `${x} atm`)];
    return this.crearQuiz({
      id: `${this.id}/gas_ideal/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "gas_ideal", dificultad,
      enunciado: `Calcula la presión de ${n} mol de gas en ${V} L a ${T} K. (R = 0.08206 L·atm/mol·K)`,
      opciones: opts, indiceCorrecto: 0,
      pasos: [
        "Ecuación del gas ideal: PV = nRT → P = nRT/V.",
        `P = (${n} × 0.08206 × ${T}) / ${V} = ${P} atm.`,
      ],
      datos: { n, T, V, R: R_GAS },
    });
  }

  private genPresionesParciales(dificultad: Dificultad): Ejercicio {
    const gases = [
      { a: "N₂", b: "O₂" }, { a: "H₂", b: "He" }, { a: "CO₂", b: "N₂" },
    ];
    const par = this.pickOne(gases);
    const [nMin, nMax] = rng(dificultad, [0.5, 2.0], [1.0, 4.0], [1.0, 8.0]);
    const [pMin, pMax] = rng(dificultad, [1.0, 3.0], [1.5, 5.0], [2.0, 10.0]);
    const nA = this.randFloat(nMin, nMax, 2);
    const nB = this.randFloat(nMin, nMax, 2);
    const Ptotal = this.randFloat(pMin, pMax, 2);
    const nTotal = nA + nB;
    const PA = this.redondear((nA / nTotal) * Ptotal, 3);
    const opts = [`${PA} atm`, ...this.generarOpcionesIncorrectas(PA, 3, 0.3).map(x => `${x} atm`)];
    return this.crearQuiz({
      id: `${this.id}/presiones_parciales/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "presiones_parciales", dificultad,
      enunciado: `Una mezcla contiene ${nA} mol de ${par.a} y ${nB} mol de ${par.b}. La presión total es ${Ptotal} atm. ¿Cuál es la presión parcial de ${par.a}?`,
      opciones: opts, indiceCorrecto: 0,
      pasos: [
        `n_total = ${nA} + ${nB} = ${this.redondear(nTotal, 2)} mol.`,
        `x(${par.a}) = ${nA} / ${this.redondear(nTotal, 2)} = ${this.redondear(nA/nTotal, 4)}.`,
        `P(${par.a}) = ${this.redondear(nA/nTotal, 4)} × ${Ptotal} = ${PA} atm.`,
      ],
      datos: { nA, nB, Ptotal },
    });
  }

  private genMezclaGases(dificultad: Dificultad): Ejercicio {
    const gases = ["N₂", "O₂", "CO₂", "He", "H₂"];
    const gA = this.pickOne(gases);
    const gB = this.pickOne(gases.filter(g => g !== gA));
    const [pMin, pMax] = rng(dificultad, [0.5, 1.5], [1.0, 3.0], [1.0, 5.0]);
    const PA = this.randFloat(pMin, pMax, 2);
    const PB = this.randFloat(pMin, pMax, 2);
    const Ptotal = this.redondear(PA + PB, 2);
    const opts = [`${Ptotal} atm`, ...this.generarOpcionesIncorrectas(Ptotal, 3, 0.2).map(x => `${x} atm`)];
    return this.crearQuiz({
      id: `${this.id}/mezcla_gases/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "mezcla_gases", dificultad,
      enunciado: `Una mezcla de gases tiene una presión parcial de ${PA} atm para ${gA} y ${PB} atm para ${gB}. ¿Cuál es la presión total de la mezcla?`,
      opciones: opts, indiceCorrecto: 0,
      pasos: [
        "Ley de Dalton: P_total = ΣP_parciales.",
        `P_total = ${PA} + ${PB} = ${Ptotal} atm.`,
      ],
      datos: { PA, PB },
    });
  }
}
