import { BaseGenerador } from "../core/baseGenerador";
import type { PRNG } from "../core/prng";
import type { Dificultad, Ejercicio, Calculator, VisualSpec } from "../core/types";

const G = 9.8;
type R = [number, number];
function rng(d: Dificultad, b: R, i: R, a: R): R {
  return d === "basico" ? b : d === "intermedio" ? i : a;
}

const FLUIDOS_IMAGE: VisualSpec = {
  kind: "static-image",
  src: "/api/assets/fisica/fluidos.svg",
  alt: "Diagrama de fluidos mostrando columna de líquido y presión hidrostática",
};

export class FluidosGenerator extends BaseGenerador {
  readonly id = "fisica/fluidos";
  readonly materia = "fisica";
  readonly subtipos = ["densidad", "presion", "presion_hidrostatica", "caudal"];

  private readonly calc: Calculator;

  constructor(prng: PRNG, calc: Calculator) {
    super(prng);
    this.calc = calc;
  }

  generarEjercicio(subtipo: string, dificultad: Dificultad, _calc: Calculator): Ejercicio {
    switch (subtipo) {
      case "presion":             return this.genPresion(dificultad);
      case "presion_hidrostatica": return this.genPresionHidro(dificultad);
      case "caudal":              return this.genCaudal(dificultad);
      default:                    return this.genDensidad(dificultad);
    }
  }

  private genDensidad(dificultad: Dificultad): Ejercicio {
    const [mMin, mMax] = rng(dificultad, [100, 2000], [500, 5000], [1000, 10000]);
    const [vMin, vMax] = rng(dificultad, [1, 10], [2, 20], [5, 50]); // litros → /1000 = m³
    const masa = this.randInt(mMin, mMax); // gramos
    const volL = this.randFloat(vMin, vMax, 2); // litros
    const volM3 = this.redondear(volL / 1000, 5); // m³
    const densidad = this.redondear(masa / (volL * 1000), 3); // g/L → kg/m³ equiv: masa[g]/vol[mL]
    const modo = this.pickOne(["densidad", "masa", "volumen"] as const);
    let res;
    let enunciado: string;
    let unidad: string;
    if (modo === "densidad") {
      res = this.calc.calcular({ tipo: "densidad", payload: { masa, volumen: volM3 * 1000 } }); // masa[g], vol[L]→mL no...
      // Simplify: use consistent units. ρ[kg/m³] = m[kg] / V[m³]
      const masaKg = masa / 1000;
      res = this.calc.calcular({ tipo: "densidad", payload: { masa: masaKg, volumen: volM3 } });
      enunciado = `Un objeto pesa ${masaKg.toFixed(2)} kg y ocupa ${volM3} m³. ¿Cuál es su densidad?`;
      unidad = "kg/m³";
    } else if (modo === "masa") {
      const masaKg = masa / 1000;
      res = this.calc.calcular({ tipo: "masa_desde_densidad", payload: { densidad: densidad * 1000, volumen: volM3 } });
      enunciado = `Un fluido de densidad ${(densidad * 1000).toFixed(1)} kg/m³ ocupa ${volM3} m³. ¿Cuál es su masa?`;
      unidad = "kg";
      void masaKg; // used for reference only
    } else {
      const masaKg = masa / 1000;
      res = this.calc.calcular({ tipo: "volumen_desde_densidad", payload: { masa: masaKg, densidad: densidad * 1000 } });
      enunciado = `Un fluido de densidad ${(densidad * 1000).toFixed(1)} kg/m³ tiene masa ${masaKg.toFixed(2)} kg. ¿Cuál es su volumen?`;
      unidad = "m³";
    }
    const ans = this.redondear(res.resultado as number, 4);
    const opts = [`${ans} ${unidad}`, ...this.generarOpcionesIncorrectas(ans, 3, 0.3).map(x => `${x} ${unidad}`)];
    return {
      ...this.crearQuiz({
        id: `${this.id}/densidad/${this.randInt(1e5, 9e5)}`,
        materia: this.materia, subtipo: "densidad", dificultad,
        enunciado, opciones: opts, indiceCorrecto: 0,
        pasos: res.pasos,
      }),
      visual: FLUIDOS_IMAGE,
    };
  }

  private genPresion(dificultad: Dificultad): Ejercicio {
    const [fMin, fMax] = rng(dificultad, [10, 500], [100, 2000], [500, 5000]);
    const [aMin, aMax] = rng(dificultad, [0.01, 1], [0.1, 5], [0.5, 10]); // m²
    const F = this.randInt(fMin, fMax);
    const A = this.redondear(this.randFloat(aMin, aMax, 2), 2);
    const P = this.redondear(F / A, 2);
    const modo = this.pickOne(["presion", "fuerza", "area"] as const);
    let res;
    let enunciado: string;
    let unidad: string;
    if (modo === "presion") {
      res = this.calc.calcular({ tipo: "presion", payload: { fuerza: F, area: A } });
      enunciado = `Una fuerza de ${F} N actúa sobre un área de ${A} m². ¿Cuál es la presión?`;
      unidad = "Pa";
    } else if (modo === "fuerza") {
      res = this.calc.calcular({ tipo: "presion_fuerza", payload: { presion: P, area: A } });
      enunciado = `Una presión de ${P} Pa actúa sobre ${A} m². ¿Cuál es la fuerza?`;
      unidad = "N";
    } else {
      res = this.calc.calcular({ tipo: "presion_area", payload: { fuerza: F, presion: P } });
      enunciado = `Una fuerza de ${F} N genera una presión de ${P} Pa. ¿Cuál es el área?`;
      unidad = "m²";
    }
    const ans = this.redondear(res.resultado as number, 3);
    const opts = [`${ans} ${unidad}`, ...this.generarOpcionesIncorrectas(ans, 3, 0.3).map(x => `${x} ${unidad}`)];
    return {
      ...this.crearQuiz({
        id: `${this.id}/presion/${this.randInt(1e5, 9e5)}`,
        materia: this.materia, subtipo: "presion", dificultad,
        enunciado, opciones: opts, indiceCorrecto: 0,
        pasos: res.pasos,
      }),
      visual: FLUIDOS_IMAGE,
    };
  }

  private genPresionHidro(dificultad: Dificultad): Ejercicio {
    const [hMin, hMax] = rng(dificultad, [1, 10], [5, 50], [10, 200]);
    const h = this.randInt(hMin, hMax);
    // Common fluids: water (1000 kg/m³), sea water (1025), mercury (13600)
    const { nombre, rho } = this.pickOne([
      { nombre: "agua", rho: 1000 },
      { nombre: "agua de mar", rho: 1025 },
    ]);
    const res = this.calc.calcular({ tipo: "presion_hidrostatica", payload: { densidad: rho, g: G, profundidad: h } });
    const ans = this.redondear(res.resultado as number, 2);
    const opts = [`${ans} Pa`, ...this.generarOpcionesIncorrectas(ans, 3, 0.3).map(x => `${x} Pa`)];
    return {
      ...this.crearQuiz({
        id: `${this.id}/presion_hidrostatica/${this.randInt(1e5, 9e5)}`,
        materia: this.materia, subtipo: "presion_hidrostatica", dificultad,
        enunciado: `¿Cuál es la presión hidrostática a ${h} m de profundidad en ${nombre} (ρ=${rho} kg/m³, g=9.8 m/s²)?`,
        opciones: opts, indiceCorrecto: 0,
        pasos: res.pasos,
        datos: { densidad: rho, g: G, profundidad: h },
      }),
      visual: FLUIDOS_IMAGE,
    };
  }

  private genCaudal(dificultad: Dificultad): Ejercicio {
    const [aMin, aMax] = rng(dificultad, [0.01, 0.5], [0.05, 1], [0.1, 2]); // m²
    const [vMin, vMax] = rng(dificultad, [1, 10], [2, 20], [5, 50]);         // m/s
    const A = this.redondear(this.randFloat(aMin, aMax, 3), 3);
    const v = this.randInt(vMin, vMax);
    const res = this.calc.calcular({ tipo: "caudal_area_velocidad", payload: { area: A, velocidad: v } });
    const ans = this.redondear(res.resultado as number, 4);
    const opts = [`${ans} m³/s`, ...this.generarOpcionesIncorrectas(ans, 3, 0.3).map(x => `${x} m³/s`)];
    return {
      ...this.crearQuiz({
        id: `${this.id}/caudal/${this.randInt(1e5, 9e5)}`,
        materia: this.materia, subtipo: "caudal", dificultad,
        enunciado: `Un tubo de sección ${A} m² conduce fluido a ${v} m/s. ¿Cuál es el caudal?`,
        opciones: opts, indiceCorrecto: 0,
        pasos: res.pasos,
        datos: { area: A, velocidad: v },
      }),
      visual: FLUIDOS_IMAGE,
    };
  }
}
