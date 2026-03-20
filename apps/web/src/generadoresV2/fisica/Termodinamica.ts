import { BaseGenerador } from "../core/baseGenerador";
import type { PRNG } from "../core/prng";
import type { Dificultad, Ejercicio, Calculator } from "../core/types";

type R = [number, number];
function rng(d: Dificultad, b: R, i: R, a: R): R {
  return d === "basico" ? b : d === "intermedio" ? i : a;
}

// Calores específicos comunes [J/(g·°C)]
const C_AGUA = 4.18;
const C_COBRE = 0.385;
const C_ALUMINIO = 0.9;
const C_HIERRO = 0.45;

// Calores latentes de fusión [J/g]
const L_AGUA_FUSION = 334;
const L_AGUA_VAPORIZACION = 2260;

export class TermodinamicaGenerator extends BaseGenerador {
  readonly id = "fisica/termodinamica";
  readonly materia = "fisica";
  readonly subtipos = ["calor", "conversion_temperatura", "cambios_estado", "dilatacion_termica"];

  private readonly calc: Calculator;

  constructor(prng: PRNG, calc: Calculator) {
    super(prng);
    this.calc = calc;
  }

  generarEjercicio(subtipo: string, dificultad: Dificultad, _calc: Calculator): Ejercicio {
    switch (subtipo) {
      case "conversion_temperatura": return this.genConvTemp(dificultad);
      case "cambios_estado":         return this.genCambioEstado(dificultad);
      case "dilatacion_termica":     return this.genDilatacion(dificultad);
      default:                       return this.genCalor(dificultad);
    }
  }

  private genCalor(dificultad: Dificultad): Ejercicio {
    const [mMin, mMax] = rng(dificultad, [100, 500], [200, 1000], [500, 3000]);
    const [dtMin, dtMax] = rng(dificultad, [10, 50], [20, 80], [30, 150]);
    const masa = this.randInt(mMin, mMax); // gramos
    const c = this.pickOne([C_AGUA, C_COBRE, C_ALUMINIO, C_HIERRO]);
    const deltaT = this.randInt(dtMin, dtMax);
    const modo = this.pickOne(["calor", "masa", "delta_t"] as const);
    const Q = this.redondear(masa * c * deltaT, 2);
    let res;
    let enunciado: string;
    let unidad: string;
    if (modo === "calor") {
      res = this.calc.calcular({ tipo: "calor", payload: { masa, calorEspecifico: c, deltaT } });
      enunciado = `¿Cuánto calor se necesita para elevar ${masa} g de una sustancia (c=${c} J/g°C) en ${deltaT}°C?`;
      unidad = "J";
    } else if (modo === "masa") {
      res = this.calc.calcular({ tipo: "calor_masa", payload: { calor: Q, calorEspecifico: c, deltaT } });
      enunciado = `Se absorben ${Q} J con c=${c} J/g°C y ΔT=${deltaT}°C. ¿Cuál es la masa?`;
      unidad = "g";
    } else {
      res = this.calc.calcular({ tipo: "calor_delta_t", payload: { calor: Q, masa, calorEspecifico: c } });
      enunciado = `${Q} J calientan ${masa} g de una sustancia (c=${c} J/g°C). ¿En cuánto sube la temperatura?`;
      unidad = "°C";
    }
    const ans = this.redondear(res.resultado as number, 2);
    const opts = [`${ans} ${unidad}`, ...this.generarOpcionesIncorrectas(ans, 3, 0.3).map(x => `${x} ${unidad}`)];
    return this.crearQuiz({
      id: `${this.id}/calor/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "calor", dificultad,
      enunciado, opciones: opts, indiceCorrecto: 0,
      pasos: res.pasos,
    });
  }

  private genConvTemp(dificultad: Dificultad): Ejercicio {
    const [tMin, tMax] = rng(dificultad, [0, 100], [-20, 150], [-50, 300]);
    const t = this.randInt(tMin, tMax);
    const modo = this.pickOne(["C_a_F", "F_a_C", "C_a_K", "K_a_C"] as const);
    let tipoCalc: string;
    let desde: string;
    let hasta: string;
    let entrada: number;
    if (modo === "C_a_F") {
      tipoCalc = "conversion_C_a_F"; desde = "°C"; hasta = "°F"; entrada = t;
    } else if (modo === "F_a_C") {
      tipoCalc = "conversion_F_a_C"; desde = "°F"; hasta = "°C";
      entrada = this.randInt(32, 212);
    } else if (modo === "C_a_K") {
      tipoCalc = "conversion_C_a_K"; desde = "°C"; hasta = "K"; entrada = t;
    } else {
      tipoCalc = "conversion_K_a_C"; desde = "K"; hasta = "°C";
      entrada = this.randInt(273, 573);
    }
    const res = this.calc.calcular({ tipo: tipoCalc, payload: { temperatura: entrada } });
    const ans = this.redondear(res.resultado as number, 2);
    const opts = [`${ans} ${hasta}`, ...this.generarOpcionesIncorrectas(ans, 3, 0.3).map(x => `${x} ${hasta}`)];
    return this.crearQuiz({
      id: `${this.id}/conversion_temperatura/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "conversion_temperatura", dificultad,
      enunciado: `Convierte ${entrada} ${desde} a ${hasta}.`,
      opciones: opts, indiceCorrecto: 0,
      pasos: res.pasos,
      datos: { temperatura: entrada },
    });
  }

  private genCambioEstado(dificultad: Dificultad): Ejercicio {
    const [mMin, mMax] = rng(dificultad, [100, 500], [200, 1000], [500, 2000]);
    const masa = this.randInt(mMin, mMax); // gramos
    const proceso = this.pickOne(["fusion", "vaporizacion"] as const);
    const L = proceso === "fusion" ? L_AGUA_FUSION : L_AGUA_VAPORIZACION;
    const nombreProceso = proceso === "fusion" ? "fundir" : "vaporizar";
    const res = this.calc.calcular({ tipo: "cambio_estado", payload: { masa, calorLatente: L } });
    const ans = this.redondear(res.resultado as number, 2);
    const opts = [`${ans} J`, ...this.generarOpcionesIncorrectas(ans, 3, 0.3).map(x => `${x} J`)];
    return this.crearQuiz({
      id: `${this.id}/cambios_estado/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "cambios_estado", dificultad,
      enunciado: `¿Cuánto calor se necesita para ${nombreProceso} ${masa} g de agua (L=${L} J/g)?`,
      opciones: opts, indiceCorrecto: 0,
      pasos: res.pasos,
      datos: { masa, calorLatente: L },
    });
  }

  private genDilatacion(dificultad: Dificultad): Ejercicio {
    const [lMin, lMax] = rng(dificultad, [0.5, 5], [1, 10], [2, 20]); // metros
    const [dtMin, dtMax] = rng(dificultad, [10, 50], [20, 100], [50, 200]);
    const L0 = this.randFloat(lMin, lMax, 1);
    const deltaT = this.randInt(dtMin, dtMax);
    // Coeficientes de dilatación lineal [1/°C × 10⁻⁵]: acero ~1.2, aluminio ~2.3, cobre ~1.7
    const { nombre, alfa } = this.pickOne([
      { nombre: "acero", alfa: 1.2e-5 },
      { nombre: "aluminio", alfa: 2.3e-5 },
      { nombre: "cobre", alfa: 1.7e-5 },
    ]);
    const res = this.calc.calcular({ tipo: "dilatacion_lineal", payload: { longitud: L0, coeficiente: alfa, deltaT } });
    const ans = this.redondear(res.resultado as number, 6);
    const opts = [`${ans} m`, ...this.generarOpcionesIncorrectas(ans, 3, 0.3).map(x => `${x} m`)];
    return this.crearQuiz({
      id: `${this.id}/dilatacion_termica/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "dilatacion_termica", dificultad,
      enunciado: `Una barra de ${nombre} de ${L0} m se calienta ${deltaT}°C (α=${alfa} 1/°C). ¿Cuánto se dilata?`,
      opciones: opts, indiceCorrecto: 0,
      pasos: res.pasos,
      datos: { longitud: L0, coeficiente: alfa, deltaT },
    });
  }
}
