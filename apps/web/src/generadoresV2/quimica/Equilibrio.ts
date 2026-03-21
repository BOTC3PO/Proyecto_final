import { BaseGenerador } from "../core/baseGenerador";
import type { PRNG } from "../core/prng";
import type { Dificultad, Ejercicio, Calculator } from "../core/types";

// Constants
const F = 96485;   // C/mol (Faraday)
const Kf_AGUA = 1.86; // °C·kg/mol
const Kb_AGUA = 0.512; // °C·kg/mol

type Rng = [number, number];
function rng(d: Dificultad, b: Rng, i: Rng, a: Rng): Rng {
  return d === "basico" ? b : d === "intermedio" ? i : a;
}

// Standard reduction potentials (V)
const HALF_CELLS = [
  { name: "Zn²⁺/Zn", E0: -0.76 }, { name: "Fe²⁺/Fe", E0: -0.44 },
  { name: "Ni²⁺/Ni", E0: -0.23 }, { name: "Sn²⁺/Sn", E0: -0.14 },
  { name: "H⁺/H₂", E0: 0.00 },   { name: "Cu²⁺/Cu", E0: +0.34 },
  { name: "Ag⁺/Ag", E0: +0.80 },  { name: "Au³⁺/Au", E0: +1.50 },
];

// Sparingly soluble salts for Ksp
const KSP_SALTS = [
  { formula: "AgCl", ions: "Ag⁺ + Cl⁻", n: 1, m: 1, ksp: 1.8e-10 },
  { formula: "BaSO₄", ions: "Ba²⁺ + SO₄²⁻", n: 1, m: 1, ksp: 1.1e-10 },
  { formula: "CaF₂", ions: "Ca²⁺ + 2F⁻", n: 1, m: 2, ksp: 3.9e-11 },
  { formula: "PbI₂", ions: "Pb²⁺ + 2I⁻", n: 1, m: 2, ksp: 9.8e-9 },
];

// Metals for electrolysis
const ELECTROLYSIS_METALS = [
  { nombre: "cobre", formula: "Cu", masaMolar: 63.55, n: 2 },
  { nombre: "plata", formula: "Ag", masaMolar: 107.87, n: 1 },
  { nombre: "zinc", formula: "Zn", masaMolar: 65.38, n: 2 },
  { nombre: "níquel", formula: "Ni", masaMolar: 58.69, n: 2 },
];

export class EquilibrioGenerator extends BaseGenerador {
  readonly id = "quimica/equilibrio";
  readonly materia = "quimica";
  readonly subtipos = [
    "kc", "kp", "q_direccion", "problemas_ice", "concentraciones_equilibrio",
    "potenciales_estandar", "electroquimica_Ecelda", "anodo_catodo", "deltaG",
    "leyes_faraday", "masa_electrolisis",
    "ley_velocidad", "orden_reaccion", "constante_k", "semivida", "graficos_cinetica",
    "ksp", "solubilidad_molar", "precipitacion", "concentracion_maxima",
    "descenso_congelacion", "elevacion_ebullicion", "presion_osmotica", "factor_vant_hoff",
  ];

  constructor(prng: PRNG) { super(prng); }

  generarEjercicio(subtipo: string, dificultad: Dificultad, _calc: Calculator): Ejercicio {
    switch (subtipo) {
      case "kc":                      return this.genKc(dificultad);
      case "kp":                      return this.genKp(dificultad);
      case "q_direccion":             return this.genQDireccion(dificultad);
      case "problemas_ice":           return this.genProblemasICE(dificultad);
      case "concentraciones_equilibrio": return this.genConcEquilibrio(dificultad);
      case "potenciales_estandar":    return this.genPotencialesEstandar(dificultad);
      case "electroquimica_Ecelda":   return this.genEcelda(dificultad);
      case "anodo_catodo":            return this.genAnodoCatodo(dificultad);
      case "deltaG":                  return this.genDeltaG(dificultad);
      case "leyes_faraday":           return this.genLeyesFaraday(dificultad);
      case "masa_electrolisis":       return this.genMasaElectrolisis(dificultad);
      case "ley_velocidad":           return this.genLeyVelocidad(dificultad);
      case "orden_reaccion":          return this.genOrdenReaccion(dificultad);
      case "constante_k":             return this.genConstanteK(dificultad);
      case "semivida":                return this.genSemivida(dificultad);
      case "graficos_cinetica":       return this.genGraficosCinetica(dificultad);
      case "ksp":                     return this.genKsp(dificultad);
      case "solubilidad_molar":       return this.genSolubilidadMolar(dificultad);
      case "precipitacion":           return this.genPrecipitacion(dificultad);
      case "concentracion_maxima":    return this.genConcentracionMaxima(dificultad);
      case "descenso_congelacion":    return this.genDescensoCongelacion(dificultad);
      case "elevacion_ebullicion":    return this.genElevacionEbullicion(dificultad);
      case "presion_osmotica":        return this.genPresionOsmotica(dificultad);
      default:                        return this.genFactorVantHoff(dificultad);
    }
  }

  // ── Equilibrio químico ─────────────────────────────────────────────────────

  private genKc(dificultad: Dificultad): Ejercicio {
    const [cMin, cMax] = rng(dificultad, [0.10, 0.50], [0.05, 0.80], [0.02, 1.00]);
    const A = this.randFloat(cMin, cMax, 2);
    const B = this.randFloat(cMin, cMax, 2);
    const C = this.randFloat(cMin, cMax * 2, 2);
    const Kc = this.redondear(C / (A * B), 2);
    const opts = [`${Kc}`, ...this.generarOpcionesIncorrectas(Kc, 3, 0.3).map(x => `${x}`)];
    return this.crearQuiz({
      id: `${this.id}/kc/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "kc", dificultad,
      enunciado: `Para la reacción A + B ⇌ C, las concentraciones de equilibrio son [A] = ${A} mol/L, [B] = ${B} mol/L, [C] = ${C} mol/L. ¿Cuánto vale Kc?`,
      opciones: opts, indiceCorrecto: 0,
      pasos: ["Kc = [C] / ([A]·[B]).", `Kc = ${C} / (${A}·${B}) = ${Kc}.`],
      datos: { A, B, C },
    });
  }

  private genKp(dificultad: Dificultad): Ejercicio {
    const [pMin, pMax] = rng(dificultad, [0.5, 2.0], [0.3, 3.0], [0.1, 5.0]);
    const PA = this.randFloat(pMin, pMax, 2);
    const PB = this.randFloat(pMin, pMax, 2);
    const PC = this.randFloat(pMin, pMax * 2, 2);
    const Kp = this.redondear(PC / (PA * PB), 3);
    const opts = [`${Kp} atm⁻¹`, ...this.generarOpcionesIncorrectas(Kp, 3, 0.3).map(x => `${x} atm⁻¹`)];
    return this.crearQuiz({
      id: `${this.id}/kp/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "kp", dificultad,
      enunciado: `Para la reacción A(g) + B(g) ⇌ C(g), las presiones parciales son P(A) = ${PA} atm, P(B) = ${PB} atm, P(C) = ${PC} atm. ¿Cuánto vale Kp?`,
      opciones: opts, indiceCorrecto: 0,
      pasos: ["Kp = P(C) / (P(A)·P(B)).", `Kp = ${PC} / (${PA}·${PB}) = ${Kp} atm⁻¹.`],
      datos: { PA, PB, PC },
    });
  }

  private genQDireccion(dificultad: Dificultad): Ejercicio {
    const [cMin, cMax] = rng(dificultad, [0.10, 0.50], [0.05, 0.80], [0.02, 1.00]);
    const A = this.randFloat(cMin, cMax, 2);
    const B = this.randFloat(cMin, cMax, 2);
    const C = this.randFloat(cMin, cMax * 2, 2);
    const Kc = this.randFloat(1.0, 10.0, 2);
    const Q = this.redondear(C / (A * B), 3);
    let direccion: string;
    let opts: string[];
    if (Q < Kc) {
      direccion = "Hacia productos (→)";
      opts = [direccion, "Hacia reactivos (←)", "El sistema ya está en equilibrio"];
    } else if (Q > Kc) {
      direccion = "Hacia reactivos (←)";
      opts = [direccion, "Hacia productos (→)", "El sistema ya está en equilibrio"];
    } else {
      direccion = "El sistema ya está en equilibrio";
      opts = [direccion, "Hacia productos (→)", "Hacia reactivos (←)"];
    }
    return this.crearQuiz({
      id: `${this.id}/q_direccion/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "q_direccion", dificultad,
      enunciado: `Para A + B ⇌ C con Kc = ${Kc}, las concentraciones iniciales son [A] = ${A}, [B] = ${B}, [C] = ${C} mol/L. ¿En qué dirección avanza la reacción? (Q = ${Q})`,
      opciones: opts, indiceCorrecto: 0,
      pasos: [
        `Q = [C]/([A]·[B]) = ${Q}.`,
        Q < Kc ? `Q (${Q}) < Kc (${Kc}): la reacción avanza hacia productos.` : `Q (${Q}) > Kc (${Kc}): la reacción avanza hacia reactivos.`,
      ],
      datos: { A, B, C, Kc, Q },
    });
  }

  private genProblemasICE(dificultad: Dificultad): Ejercicio {
    // A ⇌ B, Kc given, find equilibrium concentrations
    const A0 = this.randFloat(0.5, 2.0, 2);
    const Kc = this.randFloat(0.5, 4.0, 2);
    // Kc = x/(A0-x) → x = Kc*A0/(1+Kc)
    const x = this.redondear((Kc * A0) / (1 + Kc), 3);
    const Aeq = this.redondear(A0 - x, 3);
    const opts = [`${Aeq} mol/L`, ...this.generarOpcionesIncorrectas(Aeq, 3, 0.3).map(v => `${v} mol/L`)];
    return this.crearQuiz({
      id: `${this.id}/problemas_ice/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "problemas_ice", dificultad,
      enunciado: `Para la reacción A ⇌ B, Kc = ${Kc}. Si la concentración inicial de A es ${A0} mol/L y no hay B, ¿cuál es [A] en el equilibrio?`,
      opciones: opts, indiceCorrecto: 0,
      pasos: [
        "Tabla ICE: I: A=${A0}, B=0; C: −x, +x; E: A0−x, x.",
        `Kc = x/(A₀−x) → x = Kc·A₀/(1+Kc) = ${x}.`,
        `[A]ₑq = ${A0} − ${x} = ${Aeq} mol/L.`,
      ],
      datos: { A0, Kc },
    });
  }

  private genConcEquilibrio(dificultad: Dificultad): Ejercicio {
    const [cMin, cMax] = rng(dificultad, [0.2, 1.0], [0.1, 1.5], [0.05, 2.0]);
    const A0 = this.randFloat(cMin, cMax, 2);
    const B0 = this.randFloat(cMin, cMax, 2);
    const x = this.randFloat(0.05, Math.min(A0, B0) * 0.8, 2);
    const Aeq = this.redondear(A0 - x, 2);
    const Beq = this.redondear(B0 - x, 2);
    const Ceq = this.redondear(x, 2);
    const opts = [`${Ceq} mol/L`, ...this.generarOpcionesIncorrectas(Ceq, 3, 0.3).map(v => `${v} mol/L`)];
    return this.crearQuiz({
      id: `${this.id}/concentraciones_equilibrio/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "concentraciones_equilibrio", dificultad,
      enunciado: `A + B ⇌ C. Concentraciones iniciales: [A]₀ = ${A0}, [B]₀ = ${B0}, [C]₀ = 0 mol/L. Si la concentración de A en el equilibrio es ${Aeq} mol/L, ¿cuánto vale [C]ₑq?`,
      opciones: opts, indiceCorrecto: 0,
      pasos: [
        `Δ[A] = ${A0} − ${Aeq} = ${x} mol/L consumidos.`,
        `Por estequiometría 1:1:1, [C]ₑq = x = ${Ceq} mol/L.`,
        `[B]ₑq = ${B0} − ${x} = ${Beq} mol/L.`,
      ],
      datos: { A0, B0, Aeq, Beq },
    });
  }

  // ── Electroquímica ─────────────────────────────────────────────────────────

  private genPotencialesEstandar(dificultad: Dificultad): Ejercicio {
    const cells = HALF_CELLS;
    const anodo = this.pickOne(cells.slice(0, 4));
    const catodo = this.pickOne(cells.slice(4));
    const Ecelda = this.redondear(catodo.E0 - anodo.E0, 2);
    const opts = [`${Ecelda} V`, ...this.generarOpcionesIncorrectas(Ecelda, 3, 0.2).map(x => `${x} V`)];
    return this.crearQuiz({
      id: `${this.id}/potenciales_estandar/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "potenciales_estandar", dificultad,
      enunciado: `Calcula E°_celda para una celda galvánica con ánodo ${anodo.name} (E° = ${anodo.E0} V) y cátodo ${catodo.name} (E° = ${catodo.E0} V).`,
      opciones: opts, indiceCorrecto: 0,
      pasos: ["E°_celda = E°_cátodo − E°_ánodo.", `E°_celda = ${catodo.E0} − (${anodo.E0}) = ${Ecelda} V.`],
      datos: { E_anodo: anodo.E0, E_catodo: catodo.E0 },
    });
  }

  private genEcelda(dificultad: Dificultad): Ejercicio {
    const [eMin, eMax] = rng(dificultad, [0.1, 0.6], [0.2, 1.0], [0.3, 1.5]);
    const Eanodo = -this.randFloat(eMin, eMax, 2);
    const Ecatodo = this.randFloat(eMin, eMax, 2);
    const Ecelda = this.redondear(Ecatodo - Eanodo, 2);
    const opts = [`${Ecelda} V`, ...this.generarOpcionesIncorrectas(Ecelda, 3, 0.2).map(x => `${x} V`)];
    return this.crearQuiz({
      id: `${this.id}/electroquimica_Ecelda/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "electroquimica_Ecelda", dificultad,
      enunciado: `Una celda galvánica tiene E°(reducción) en el ánodo = ${Eanodo} V y E°(reducción) en el cátodo = ${Ecatodo} V. ¿Cuál es E°_celda?`,
      opciones: opts, indiceCorrecto: 0,
      pasos: ["E°_celda = E°_cátodo − E°_ánodo.", `E°_celda = ${Ecatodo} − (${Eanodo}) = ${Ecelda} V.`],
      datos: { Eanodo, Ecatodo },
    });
  }

  private genAnodoCatodo(dificultad: Dificultad): Ejercicio {
    const cells = HALF_CELLS;
    const a = this.pickOne(cells.slice(0, 5));
    const b = this.pickOne(cells.filter(c => c.E0 > a.E0));
    // In galvanic cell: lower E0 = anode (oxidation), higher = cathode (reduction)
    const anodo = a.name;
    const catodo = b.name;
    const opciones = [`Ánodo: ${anodo}, Cátodo: ${catodo}`, `Ánodo: ${catodo}, Cátodo: ${anodo}`, `Ambos actúan como ánodos`, `Ambos actúan como cátodos`];
    return this.crearQuiz({
      id: `${this.id}/anodo_catodo/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "anodo_catodo", dificultad,
      enunciado: `En una celda galvánica con los semielementos ${a.name} (E° = ${a.E0} V) y ${b.name} (E° = ${b.E0} V), ¿cuál actúa como ánodo y cuál como cátodo?`,
      opciones, indiceCorrecto: 0,
      pasos: [
        "El electrodo con menor potencial estándar se oxida → ánodo.",
        `${a.name} (E° = ${a.E0} V) < ${b.name} (E° = ${b.E0} V), por lo que ${anodo} es el ánodo.`,
      ],
      datos: { E_a: a.E0, E_b: b.E0 },
    });
  }

  private genDeltaG(dificultad: Dificultad): Ejercicio {
    const n = this.randInt(1, 4);
    const [eMin, eMax] = rng(dificultad, [0.3, 0.8], [0.2, 1.2], [0.1, 1.5]);
    const Ecelda = this.randFloat(eMin, eMax, 2);
    const deltaG = this.redondear(-n * F * Ecelda / 1000, 1); // kJ
    const opts = [`${deltaG} kJ`, ...this.generarOpcionesIncorrectas(Math.abs(deltaG), 3, 0.2).map(x => `${-x} kJ`)];
    return this.crearQuiz({
      id: `${this.id}/deltaG/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "deltaG", dificultad,
      enunciado: `Calcula ΔG° para una celda electroquímica con n = ${n} electrones y E°_celda = ${Ecelda} V. (F = 96485 C/mol)`,
      opciones: opts, indiceCorrecto: 0,
      pasos: ["ΔG° = −n·F·E°_celda.", `ΔG° = −${n} × 96485 × ${Ecelda} = ${this.redondear(-n*F*Ecelda, 0)} J = ${deltaG} kJ.`],
      datos: { n, Ecelda },
    });
  }

  private genLeyesFaraday(dificultad: Dificultad): Ejercicio {
    const metal = this.pickOne(ELECTROLYSIS_METALS);
    const [iMin, iMax] = rng(dificultad, [1, 5], [2, 10], [5, 20]);
    const corriente = this.randFloat(iMin, iMax, 1); // A
    const tiempo = this.randInt(300, 3600); // s
    const carga = corriente * tiempo; // C
    const masa = this.redondear((carga * metal.masaMolar) / (metal.n * F), 3);
    const opts = [`${masa} g`, ...this.generarOpcionesIncorrectas(masa, 3, 0.3).map(x => `${x} g`)];
    return this.crearQuiz({
      id: `${this.id}/leyes_faraday/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "leyes_faraday", dificultad,
      enunciado: `Una corriente de ${corriente} A se aplica durante ${tiempo} s en un baño de ${metal.nombre} (${metal.formula}, n = ${metal.n}, M = ${metal.masaMolar} g/mol). ¿Qué masa se deposita?`,
      opciones: opts, indiceCorrecto: 0,
      pasos: [
        `Q = I·t = ${corriente} × ${tiempo} = ${this.redondear(carga, 0)} C.`,
        `m = Q·M/(n·F) = ${this.redondear(carga, 0)} × ${metal.masaMolar} / (${metal.n} × 96485) = ${masa} g.`,
      ],
      datos: { corriente, tiempo, masaMolar: metal.masaMolar, n: metal.n },
    });
  }

  private genMasaElectrolisis(dificultad: Dificultad): Ejercicio {
    const metal = this.pickOne(ELECTROLYSIS_METALS);
    const [cMin, cMax] = rng(dificultad, [0.5, 2.0], [1.0, 5.0], [2.0, 10.0]);
    const carga = this.randFloat(cMin * 1000, cMax * 1000, 0); // C
    const masa = this.redondear((carga * metal.masaMolar) / (metal.n * F), 3);
    const opts = [`${masa} g`, ...this.generarOpcionesIncorrectas(masa, 3, 0.3).map(x => `${x} g`)];
    return this.crearQuiz({
      id: `${this.id}/masa_electrolisis/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "masa_electrolisis", dificultad,
      enunciado: `Se hace pasar una carga de ${carga} C en la electrólisis de una solución de ${metal.formula}²⁺. ¿Qué masa de ${metal.nombre} se deposita? (M = ${metal.masaMolar} g/mol, n = ${metal.n})`,
      opciones: opts, indiceCorrecto: 0,
      pasos: [
        "Ley de Faraday: m = Q·M/(n·F).",
        `m = ${carga} × ${metal.masaMolar} / (${metal.n} × 96485) = ${masa} g.`,
      ],
      datos: { carga, masaMolar: metal.masaMolar, n: metal.n },
    });
  }

  // ── Cinética química ───────────────────────────────────────────────────────

  private genLeyVelocidad(dificultad: Dificultad): Ejercicio {
    const m = this.randInt(1, 2);
    const nn = this.randInt(0, 1);
    const [kMin, kMax] = rng(dificultad, [0.1, 1.0], [0.05, 0.5], [0.01, 0.3]);
    const k = this.randFloat(kMin, kMax, 3);
    const A = this.randFloat(0.1, 1.0, 2);
    const B = this.randFloat(0.1, 1.0, 2);
    const v = this.redondear(k * Math.pow(A, m) * Math.pow(B, nn), 4);
    const opts = [`${v} mol/L·s`, ...this.generarOpcionesIncorrectas(v, 3, 0.3).map(x => `${x} mol/L·s`)];
    return this.crearQuiz({
      id: `${this.id}/ley_velocidad/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "ley_velocidad", dificultad,
      enunciado: `La ley de velocidad es v = k·[A]^${m}·[B]^${nn}. Con k = ${k}, [A] = ${A} mol/L, [B] = ${B} mol/L, ¿cuál es la velocidad de reacción?`,
      opciones: opts, indiceCorrecto: 0,
      pasos: [
        `v = ${k} × ${A}^${m} × ${B}^${nn} = ${v} mol/L·s.`,
      ],
      datos: { k, A, B, m, n: nn },
    });
  }

  private genOrdenReaccion(dificultad: Dificultad): Ejercicio {
    // Given two experiments, determine order wrt A
    const k = this.randFloat(0.1, 0.5, 2);
    const A1 = this.randFloat(0.1, 0.5, 2);
    const A2 = this.redondear(A1 * 2, 2);
    const orden = this.randInt(1, 2);
    const v1 = this.redondear(k * Math.pow(A1, orden), 4);
    const v2 = this.redondear(k * Math.pow(A2, orden), 4);
    const opts = [`${orden}`, ...["0", orden === 1 ? "2" : "1", "3"].slice(0, 3)];
    return this.crearQuiz({
      id: `${this.id}/orden_reaccion/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "orden_reaccion", dificultad,
      enunciado: `En dos experimentos: Exp 1: [A] = ${A1} mol/L → v = ${v1} mol/L·s; Exp 2: [A] = ${A2} mol/L → v = ${v2} mol/L·s. ¿Cuál es el orden de reacción respecto a A?`,
      opciones: opts, indiceCorrecto: 0,
      pasos: [
        `v₂/v₁ = (${A2}/${A1})^n → ${this.redondear(v2/v1, 2)} = 2^n.`,
        `n = ${orden}.`,
      ],
      datos: { A1, A2, v1, v2 },
    });
  }

  private genConstanteK(dificultad: Dificultad): Ejercicio {
    // First-order: v = k·[A]
    const [vMin, vMax] = rng(dificultad, [0.01, 0.1], [0.01, 0.2], [0.005, 0.3]);
    const v = this.randFloat(vMin, vMax, 4);
    const A = this.randFloat(0.1, 1.0, 2);
    const k = this.redondear(v / A, 4);
    const opts = [`${k} s⁻¹`, ...this.generarOpcionesIncorrectas(k, 3, 0.3).map(x => `${x} s⁻¹`)];
    return this.crearQuiz({
      id: `${this.id}/constante_k/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "constante_k", dificultad,
      enunciado: `Para una reacción de primer orden, la velocidad es ${v} mol/L·s cuando [A] = ${A} mol/L. ¿Cuál es la constante de velocidad k?`,
      opciones: opts, indiceCorrecto: 0,
      pasos: ["v = k·[A] → k = v/[A].", `k = ${v} / ${A} = ${k} s⁻¹.`],
      datos: { v, A },
    });
  }

  private genSemivida(dificultad: Dificultad): Ejercicio {
    // t½ = ln2/k for first-order
    const [kMin, kMax] = rng(dificultad, [0.01, 0.1], [0.005, 0.2], [0.001, 0.3]);
    const k = this.randFloat(kMin, kMax, 3);
    const t12 = this.redondear(Math.LN2 / k, 2);
    const opts = [`${t12} s`, ...this.generarOpcionesIncorrectas(t12, 3, 0.3).map(x => `${x} s`)];
    return this.crearQuiz({
      id: `${this.id}/semivida/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "semivida", dificultad,
      enunciado: `Para una reacción de primer orden con k = ${k} s⁻¹, ¿cuál es la semivida (t½)?`,
      opciones: opts, indiceCorrecto: 0,
      pasos: ["t½ = ln2 / k.", `t½ = 0.6931 / ${k} = ${t12} s.`],
      datos: { k },
    });
  }

  private genGraficosCinetica(dificultad: Dificultad): Ejercicio {
    const graficos = [
      { orden: "primer", linealidad: "ln[A] vs t", pendiente: "−k (negativa)", otros: ["[A] vs t (exponencial)", "[A]⁻¹ vs t (lineal para 2°orden)"] },
      { orden: "segundo", linealidad: "1/[A] vs t", pendiente: "+k (positiva)", otros: ["ln[A] vs t (lineal para 1°orden)", "[A] vs t (hiperbólica)"] },
    ];
    const g = this.pickOne(graficos);
    return this.crearQuiz({
      id: `${this.id}/graficos_cinetica/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "graficos_cinetica", dificultad,
      enunciado: `Para una reacción de ${g.orden} orden, ¿qué representación gráfica es lineal?`,
      opciones: [g.linealidad, ...g.otros], indiceCorrecto: 0,
      pasos: [
        `Para reacciones de ${g.orden} orden, la gráfica lineal es ${g.linealidad}.`,
        `La pendiente de esa recta es ${g.pendiente}.`,
      ],
      datos: {},
    });
  }

  // ── Solubilidad y precipitación ────────────────────────────────────────────

  private genKsp(dificultad: Dificultad): Ejercicio {
    const Ag = this.randFloat(1e-5, 1e-3, 6);
    const Cl = this.randFloat(1e-5, 1e-3, 6);
    const Ksp_calc = this.redondear(Ag * Cl, 12);
    const Ksp_exp = Ksp_calc.toExponential(2);
    const altOpts = this.generarOpcionesIncorrectas(Ksp_calc * 1e10, 3, 0.5).map(x => `${(x / 1e10).toExponential(2)}`);
    return this.crearQuiz({
      id: `${this.id}/ksp/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "ksp", dificultad,
      enunciado: `AgCl(s) ⇌ Ag⁺ + Cl⁻. En solución saturada: [Ag⁺] = ${Ag.toExponential(2)} mol/L, [Cl⁻] = ${Cl.toExponential(2)} mol/L. ¿Cuál es Ksp?`,
      opciones: [Ksp_exp, ...altOpts], indiceCorrecto: 0,
      pasos: ["Ksp = [Ag⁺]·[Cl⁻].", `Ksp = ${Ag.toExponential(2)} × ${Cl.toExponential(2)} = ${Ksp_exp}.`],
      datos: { Ag, Cl },
    });
  }

  private genSolubilidadMolar(dificultad: Dificultad): Ejercicio {
    // AgCl: Ksp = s² → s = sqrt(Ksp)
    const Ksp = this.randFloat(1e-11, 1e-9, 12);
    const s = this.redondear(Math.sqrt(Ksp), 6);
    const s_exp = s.toExponential(2);
    const altOpts = this.generarOpcionesIncorrectas(s * 1e5, 3, 0.4).map(x => `${(x / 1e5).toExponential(2)} mol/L`);
    return this.crearQuiz({
      id: `${this.id}/solubilidad_molar/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "solubilidad_molar", dificultad,
      enunciado: `AgCl tiene Ksp = ${Ksp.toExponential(2)}. ¿Cuál es su solubilidad molar en agua pura?`,
      opciones: [`${s_exp} mol/L`, ...altOpts], indiceCorrecto: 0,
      pasos: ["AgCl ⇌ Ag⁺ + Cl⁻, Ksp = s².", `s = √(${Ksp.toExponential(2)}) = ${s_exp} mol/L.`],
      datos: { Ksp },
    });
  }

  private genPrecipitacion(dificultad: Dificultad): Ejercicio {
    // Q vs Ksp
    const saltPrecip = this.pickOne(KSP_SALTS);
    const precipita = this.pickOne([true, false]);
    const Ksp = saltPrecip.ksp;
    let Q: number;
    if (precipita) {
      Q = Ksp * this.randFloat(2, 10, 1);
    } else {
      Q = Ksp * this.randFloat(0.1, 0.8, 2);
    }
    const respuesta = precipita ? "Sí, precipita (Q > Ksp)" : "No precipita (Q < Ksp)";
    const otra = precipita ? "No precipita (Q < Ksp)" : "Sí, precipita (Q > Ksp)";
    return this.crearQuiz({
      id: `${this.id}/precipitacion/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "precipitacion", dificultad,
      enunciado: `Para ${saltPrecip.formula}, Ksp = ${Ksp.toExponential(2)}. Si Q = ${Q.toExponential(2)}, ¿precipita el soluto?`,
      opciones: [respuesta, otra, "El sistema está en equilibrio (Q = Ksp)", "No se puede determinar"],
      indiceCorrecto: 0,
      pasos: [
        `Q = ${Q.toExponential(2)}, Ksp = ${Ksp.toExponential(2)}.`,
        precipita ? "Q > Ksp → la solución está supersaturada → precipita." : "Q < Ksp → la solución no está saturada → no precipita.",
      ],
      datos: { Q, Ksp },
    });
  }

  private genConcentracionMaxima(dificultad: Dificultad): Ejercicio {
    // Max [Ag+] given [Cl-] and Ksp of AgCl
    const Ksp = 1.8e-10;
    const [clMin, clMax] = rng(dificultad, [0.01, 0.1], [0.001, 0.1], [0.0001, 0.1]);
    const Cl = this.randFloat(clMin, clMax, 4);
    const Ag_max = this.redondear(Ksp / Cl, 10);
    const Ag_exp = Ag_max.toExponential(2);
    const altOpts = this.generarOpcionesIncorrectas(Ag_max * 1e8, 3, 0.4).map(x => `${(x / 1e8).toExponential(2)} mol/L`);
    return this.crearQuiz({
      id: `${this.id}/concentracion_maxima/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "concentracion_maxima", dificultad,
      enunciado: `En una solución con [Cl⁻] = ${Cl} mol/L, ¿cuál es la concentración máxima de Ag⁺ sin que precipite AgCl? (Ksp(AgCl) = 1.8×10⁻¹⁰)`,
      opciones: [`${Ag_exp} mol/L`, ...altOpts], indiceCorrecto: 0,
      pasos: ["[Ag⁺]_max = Ksp / [Cl⁻].", `[Ag⁺]_max = 1.8×10⁻¹⁰ / ${Cl} = ${Ag_exp} mol/L.`],
      datos: { Cl, Ksp },
    });
  }

  // ── Propiedades coligativas ────────────────────────────────────────────────

  private genDescensoCongelacion(dificultad: Dificultad): Ejercicio {
    const [mMin, mMax] = rng(dificultad, [5, 25], [10, 50], [20, 100]);
    const masaSoluto = this.randFloat(mMin, mMax, 1);
    const masaMolar = this.randFloat(40, 180, 0);
    const masaDisolvente = this.randFloat(100, 500, 0);
    const mol = masaSoluto / masaMolar;
    const kg = masaDisolvente / 1000;
    const m_mol = this.redondear(mol / kg, 3);
    const deltaTf = this.redondear(Kf_AGUA * m_mol, 2);
    const Tf = this.redondear(-deltaTf, 2);
    const opts = [`${Tf} °C`, ...this.generarOpcionesIncorrectas(Math.abs(Tf), 3, 0.3).map(x => `${-x} °C`)];
    return this.crearQuiz({
      id: `${this.id}/descenso_congelacion/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "descenso_congelacion", dificultad,
      enunciado: `Se disuelven ${masaSoluto} g de soluto (M = ${masaMolar} g/mol) en ${masaDisolvente} g de agua (Kf = 1.86 °C·kg/mol). ¿Cuál es el punto de congelación de la solución?`,
      opciones: opts, indiceCorrecto: 0,
      pasos: [
        `m = ${this.redondear(mol, 4)} mol / ${kg} kg = ${m_mol} mol/kg.`,
        `ΔTf = Kf × m = 1.86 × ${m_mol} = ${deltaTf} °C.`,
        `Tf = 0 − ${deltaTf} = ${Tf} °C.`,
      ],
      datos: { masaSoluto, masaMolar, masaDisolvente },
    });
  }

  private genElevacionEbullicion(dificultad: Dificultad): Ejercicio {
    const [mMin, mMax] = rng(dificultad, [5, 25], [10, 50], [20, 100]);
    const masaSoluto = this.randFloat(mMin, mMax, 1);
    const masaMolar = this.randFloat(40, 180, 0);
    const masaDisolvente = this.randFloat(100, 500, 0);
    const mol = masaSoluto / masaMolar;
    const kg = masaDisolvente / 1000;
    const m_mol = this.redondear(mol / kg, 3);
    const deltaTb = this.redondear(Kb_AGUA * m_mol, 2);
    const Tb = this.redondear(100 + deltaTb, 2);
    const opts = [`${Tb} °C`, ...this.generarOpcionesIncorrectas(Tb, 3, 0.05).map(x => `${x} °C`)];
    return this.crearQuiz({
      id: `${this.id}/elevacion_ebullicion/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "elevacion_ebullicion", dificultad,
      enunciado: `Se disuelven ${masaSoluto} g de soluto (M = ${masaMolar} g/mol) en ${masaDisolvente} g de agua (Kb = 0.512 °C·kg/mol). ¿Cuál es el punto de ebullición de la solución?`,
      opciones: opts, indiceCorrecto: 0,
      pasos: [
        `m = ${m_mol} mol/kg.`,
        `ΔTb = Kb × m = 0.512 × ${m_mol} = ${deltaTb} °C.`,
        `Tb = 100 + ${deltaTb} = ${Tb} °C.`,
      ],
      datos: { masaSoluto, masaMolar, masaDisolvente },
    });
  }

  private genPresionOsmotica(dificultad: Dificultad): Ejercicio {
    // π = MRT
    const [cMin, cMax] = rng(dificultad, [0.1, 0.5], [0.1, 1.0], [0.1, 2.0]);
    const C = this.randFloat(cMin, cMax, 2); // mol/L
    const T = this.randInt(273, 310); // K
    const pi_atm = this.redondear(C * 0.08206 * T, 3); // atm
    const opts = [`${pi_atm} atm`, ...this.generarOpcionesIncorrectas(pi_atm, 3, 0.3).map(x => `${x} atm`)];
    return this.crearQuiz({
      id: `${this.id}/presion_osmotica/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "presion_osmotica", dificultad,
      enunciado: `Calcula la presión osmótica de una solución ${C} mol/L a ${T} K. (R = 0.08206 L·atm/mol·K)`,
      opciones: opts, indiceCorrecto: 0,
      pasos: ["π = C·R·T.", `π = ${C} × 0.08206 × ${T} = ${pi_atm} atm.`],
      datos: { C, T },
    });
  }

  private genFactorVantHoff(dificultad: Dificultad): Ejercicio {
    const electrolitos = [
      { nombre: "NaCl", formula: "NaCl", i_teo: 2, descripcion: "se disocia en Na⁺ y Cl⁻" },
      { nombre: "CaCl₂", formula: "CaCl₂", i_teo: 3, descripcion: "se disocia en Ca²⁺ y 2Cl⁻" },
      { nombre: "glucosa", formula: "C₆H₁₂O₆", i_teo: 1, descripcion: "no se disocia (no electrolito)" },
      { nombre: "MgSO₄", formula: "MgSO₄", i_teo: 2, descripcion: "se disocia en Mg²⁺ y SO₄²⁻" },
    ];
    const e = this.pickOne(electrolitos);
    const opts = [`${e.i_teo}`, ...["1", "2", "3", "4"].filter(x => x !== `${e.i_teo}`).slice(0, 3)];
    return this.crearQuiz({
      id: `${this.id}/factor_vant_hoff/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "factor_vant_hoff", dificultad,
      enunciado: `¿Cuál es el factor de van't Hoff (i) teórico para el ${e.nombre} (${e.formula}) en solución acuosa diluida?`,
      opciones: opts, indiceCorrecto: 0,
      pasos: [
        `${e.formula} ${e.descripcion}.`,
        `i = ${e.i_teo} partículas de soluto por unidad de fórmula.`,
      ],
      datos: {},
    });
  }
}
