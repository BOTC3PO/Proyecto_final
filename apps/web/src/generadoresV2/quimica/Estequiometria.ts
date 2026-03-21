import { BaseGenerador } from "../core/baseGenerador";
import type { PRNG } from "../core/prng";
import type { Dificultad, Ejercicio, Calculator } from "../core/types";

const NA = 6.022e23;

type R = [number, number];
function rng(d: Dificultad, b: R, i: R, a: R): R {
  return d === "basico" ? b : d === "intermedio" ? i : a;
}

interface Ecuacion {
  texto: string;
  coefs: number[];
  especies: string[];
}

const ECUACIONES: Ecuacion[] = [
  { texto: "__ H₂ + __ O₂ → __ H₂O", coefs: [2, 1, 2], especies: ["H₂", "O₂", "H₂O"] },
  { texto: "__ N₂ + __ H₂ → __ NH₃", coefs: [1, 3, 2], especies: ["N₂", "H₂", "NH₃"] },
  { texto: "__ Fe + __ O₂ → __ Fe₂O₃", coefs: [4, 3, 2], especies: ["Fe", "O₂", "Fe₂O₃"] },
  { texto: "__ Na + __ Cl₂ → __ NaCl", coefs: [2, 1, 2], especies: ["Na", "Cl₂", "NaCl"] },
  { texto: "__ C₃H₈ + __ O₂ → __ CO₂ + __ H₂O", coefs: [1, 5, 3, 4], especies: ["C₃H₈", "O₂", "CO₂", "H₂O"] },
  { texto: "__ Al + __ O₂ → __ Al₂O₃", coefs: [4, 3, 2], especies: ["Al", "O₂", "Al₂O₃"] },
  { texto: "__ Mg + __ O₂ → __ MgO", coefs: [2, 1, 2], especies: ["Mg", "O₂", "MgO"] },
];

interface Sustancia { nombre: string; formula: string; masaMolar: number; }
const SUSTANCIAS: Sustancia[] = [
  { nombre: "agua", formula: "H₂O", masaMolar: 18.02 },
  { nombre: "cloruro de sodio", formula: "NaCl", masaMolar: 58.44 },
  { nombre: "glucosa", formula: "C₆H₁₂O₆", masaMolar: 180.16 },
  { nombre: "dióxido de carbono", formula: "CO₂", masaMolar: 44.01 },
  { nombre: "amoniaco", formula: "NH₃", masaMolar: 17.03 },
  { nombre: "ácido clorhídrico", formula: "HCl", masaMolar: 36.46 },
  { nombre: "hidróxido de sodio", formula: "NaOH", masaMolar: 40.00 },
  { nombre: "sulfato de cobre", formula: "CuSO₄", masaMolar: 159.61 },
];

interface ReaccionMolar { ecuacion: string; reactivo: string; producto: string; coefR: number; coefP: number; }
const REACCIONES_MOLARES: ReaccionMolar[] = [
  { ecuacion: "N₂ + 3H₂ → 2NH₃", reactivo: "N₂", producto: "NH₃", coefR: 1, coefP: 2 },
  { ecuacion: "2H₂ + O₂ → 2H₂O", reactivo: "H₂", producto: "H₂O", coefR: 2, coefP: 2 },
  { ecuacion: "2Na + Cl₂ → 2NaCl", reactivo: "Na", producto: "NaCl", coefR: 2, coefP: 2 },
  { ecuacion: "4Fe + 3O₂ → 2Fe₂O₃", reactivo: "Fe", producto: "Fe₂O₃", coefR: 4, coefP: 2 },
];

interface SustanciaConc { nombre: string; masaMolar: number; }
const SOLUTOS: SustanciaConc[] = [
  { nombre: "NaCl", masaMolar: 58.44 },
  { nombre: "NaOH", masaMolar: 40.00 },
  { nombre: "KCl", masaMolar: 74.55 },
  { nombre: "CaCl₂", masaMolar: 110.98 },
  { nombre: "HCl", masaMolar: 36.46 },
  { nombre: "H₂SO₄", masaMolar: 98.08 },
  { nombre: "MgSO₄", masaMolar: 120.37 },
];

export class EstequiometriaGenerator extends BaseGenerador {
  readonly id = "quimica/estequiometria";
  readonly materia = "quimica";
  readonly subtipos = [
    "balanceo", "calculo_moles", "calculo_masa", "numero_particulas",
    "relaciones_molares", "reactivo_limitante", "reactivo_exceso",
    "rendimiento_teorico", "porcentaje_rendimiento", "pureza_reactivos",
    "ley_proporciones_multiples", "ley_proporciones_definidas",
    "porcentaje_masa_masa", "porcentaje_masa_volumen", "porcentaje_volumen_volumen",
    "molaridad", "molalidad", "normalidad", "fraccion_molar",
    "diluciones", "preparacion_soluciones",
  ];

  constructor(prng: PRNG) { super(prng); }

  generarEjercicio(subtipo: string, dificultad: Dificultad, _calc: Calculator): Ejercicio {
    switch (subtipo) {
      case "balanceo":                  return this.genBalanceo(dificultad);
      case "calculo_moles":             return this.genCalculoMoles(dificultad);
      case "calculo_masa":              return this.genCalculoMasa(dificultad);
      case "numero_particulas":         return this.genNumeroParticulas(dificultad);
      case "relaciones_molares":        return this.genRelacionesMolares(dificultad);
      case "reactivo_limitante":        return this.genReactivoLimitante(dificultad);
      case "reactivo_exceso":           return this.genReactivoExceso(dificultad);
      case "rendimiento_teorico":       return this.genRendimientoTeorico(dificultad);
      case "porcentaje_rendimiento":    return this.genPorcentajeRendimiento(dificultad);
      case "pureza_reactivos":          return this.genPurezaReactivos(dificultad);
      case "ley_proporciones_multiples": return this.genLeyProporcionesMultiples(dificultad);
      case "ley_proporciones_definidas": return this.genLeyProporcionesDefinidas(dificultad);
      case "porcentaje_masa_masa":      return this.genPorcentajeMasaMasa(dificultad);
      case "porcentaje_masa_volumen":   return this.genPorcentajeMasaVolumen(dificultad);
      case "porcentaje_volumen_volumen": return this.genPorcentajeVolumenVolumen(dificultad);
      case "molaridad":                 return this.genMolaridad(dificultad);
      case "molalidad":                 return this.genMolalidad(dificultad);
      case "normalidad":                return this.genNormalidad(dificultad);
      case "fraccion_molar":            return this.genFraccionMolar(dificultad);
      case "diluciones":                return this.genDiluciones(dificultad);
      default:                          return this.genPreparacionSoluciones(dificultad);
    }
  }

  private genBalanceo(dificultad: Dificultad): Ejercicio {
    const ec = this.pickOne(ECUACIONES);
    const idx = this.randInt(0, ec.coefs.length - 1);
    const correcto = ec.coefs[idx]!;
    const incorrectos = this.generarOpcionesIncorrectas(correcto, 3, 0.5).map(x => `${Math.max(1, Math.round(x))}`);
    const opciones = [`${correcto}`, ...incorrectos];
    return this.crearQuiz({
      id: `${this.id}/balanceo/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "balanceo", dificultad,
      enunciado: `Balancea la siguiente ecuación química. ¿Cuál es el coeficiente de ${ec.especies[idx]} en la reacción?\n${ec.texto}`,
      opciones, indiceCorrecto: 0,
      pasos: [
        "Cuenta los átomos de cada elemento en reactivos y productos.",
        "Ajusta los coeficientes para igualar ambos lados.",
        `El coeficiente de ${ec.especies[idx]} es ${correcto}.`,
      ],
      datos: {},
    });
  }

  private genCalculoMoles(dificultad: Dificultad): Ejercicio {
    const s = this.pickOne(SUSTANCIAS);
    const [mMin, mMax] = rng(dificultad, [10, 50], [20, 100], [50, 200]);
    const masa = this.randFloat(mMin, mMax, 1);
    const moles = this.redondear(masa / s.masaMolar, 3);
    const opts = [`${moles} mol`, ...this.generarOpcionesIncorrectas(moles, 3, 0.3).map(x => `${x} mol`)];
    return this.crearQuiz({
      id: `${this.id}/calculo_moles/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "calculo_moles", dificultad,
      enunciado: `¿Cuántos moles hay en ${masa} g de ${s.nombre} (${s.formula}, M = ${s.masaMolar} g/mol)?`,
      opciones: opts, indiceCorrecto: 0,
      pasos: [
        "Usa la relación: n = m / M.",
        `n = ${masa} g / ${s.masaMolar} g/mol = ${moles} mol.`,
      ],
      datos: { masa, masaMolar: s.masaMolar },
    });
  }

  private genCalculoMasa(dificultad: Dificultad): Ejercicio {
    const s = this.pickOne(SUSTANCIAS);
    const [nMin, nMax] = rng(dificultad, [0.5, 3], [1, 8], [2, 15]);
    const moles = this.randFloat(nMin, nMax, 2);
    const masa = this.redondear(moles * s.masaMolar, 2);
    const opts = [`${masa} g`, ...this.generarOpcionesIncorrectas(masa, 3, 0.3).map(x => `${x} g`)];
    return this.crearQuiz({
      id: `${this.id}/calculo_masa/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "calculo_masa", dificultad,
      enunciado: `¿Cuántos gramos hay en ${moles} mol de ${s.nombre} (${s.formula}, M = ${s.masaMolar} g/mol)?`,
      opciones: opts, indiceCorrecto: 0,
      pasos: [
        "Usa la relación: m = n × M.",
        `m = ${moles} mol × ${s.masaMolar} g/mol = ${masa} g.`,
      ],
      datos: { moles, masaMolar: s.masaMolar },
    });
  }

  private genNumeroParticulas(dificultad: Dificultad): Ejercicio {
    const s = this.pickOne(SUSTANCIAS);
    const [mMin, mMax] = rng(dificultad, [5, 20], [10, 50], [20, 100]);
    const masa = this.randFloat(mMin, mMax, 1);
    const moles = masa / s.masaMolar;
    const particulas = moles * NA;
    const exp = Math.floor(Math.log10(particulas));
    const coef = this.redondear(particulas / Math.pow(10, exp), 2);
    const ans = `${coef} × 10^${exp}`;
    const altCoefs = this.generarOpcionesIncorrectas(coef, 3, 0.3).map(x => `${x} × 10^${exp}`);
    return this.crearQuiz({
      id: `${this.id}/numero_particulas/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "numero_particulas", dificultad,
      enunciado: `¿Cuántas moléculas hay en ${masa} g de ${s.nombre} (${s.formula}, M = ${s.masaMolar} g/mol)? (Nₐ = 6.022 × 10²³)`,
      opciones: [ans, ...altCoefs], indiceCorrecto: 0,
      pasos: [
        `n = ${masa} / ${s.masaMolar} = ${this.redondear(moles, 4)} mol.`,
        `N = n × Nₐ = ${this.redondear(moles, 4)} × 6.022×10²³ ≈ ${ans} moléculas.`,
      ],
      datos: { masa, masaMolar: s.masaMolar },
    });
  }

  private genRelacionesMolares(dificultad: Dificultad): Ejercicio {
    const r = this.pickOne(REACCIONES_MOLARES);
    const [nMin, nMax] = rng(dificultad, [1, 5], [2, 10], [3, 20]);
    const nReactivo = this.randFloat(nMin, nMax, 2);
    const nProducto = this.redondear(nReactivo * r.coefP / r.coefR, 3);
    const opts = [`${nProducto} mol`, ...this.generarOpcionesIncorrectas(nProducto, 3, 0.3).map(x => `${x} mol`)];
    return this.crearQuiz({
      id: `${this.id}/relaciones_molares/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "relaciones_molares", dificultad,
      enunciado: `Dada la reacción: ${r.ecuacion}\n¿Cuántos moles de ${r.producto} se forman a partir de ${nReactivo} mol de ${r.reactivo}?`,
      opciones: opts, indiceCorrecto: 0,
      pasos: [
        `La relación estequiométrica es: ${r.coefR} mol ${r.reactivo} → ${r.coefP} mol ${r.producto}.`,
        `n(${r.producto}) = ${nReactivo} × (${r.coefP}/${r.coefR}) = ${nProducto} mol.`,
      ],
      datos: { nReactivo, coefR: r.coefR, coefP: r.coefP },
    });
  }

  private genReactivoLimitante(dificultad: Dificultad): Ejercicio {
    // N₂ + 3H₂ → 2NH₃
    const [nMin, nMax] = rng(dificultad, [1, 5], [2, 10], [3, 15]);
    const nN2 = this.randFloat(nMin, nMax, 2);
    const factorH2 = this.randFloat(1.5, 4.0, 2);
    const nH2 = this.redondear(3 * nN2 * factorH2, 2); // excess H2
    const nNH3 = this.redondear(2 * nN2, 2); // limited by N2
    const limitante = "N₂";
    const alts = ["H₂", "NH₃", "Ambos reactivos en igual proporción"].slice(0, 3);
    const opciones = [limitante, ...alts];
    return this.crearQuiz({
      id: `${this.id}/reactivo_limitante/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "reactivo_limitante", dificultad,
      enunciado: `En la reacción N₂ + 3H₂ → 2NH₃, se dispone de ${nN2} mol de N₂ y ${nH2} mol de H₂. ¿Cuál es el reactivo limitante? (Se producen ${nNH3} mol de NH₃)`,
      opciones, indiceCorrecto: 0,
      pasos: [
        `H₂ necesario para ${nN2} mol N₂: 3 × ${nN2} = ${this.redondear(3*nN2,2)} mol.`,
        `H₂ disponible: ${nH2} mol > ${this.redondear(3*nN2,2)} mol requeridos → N₂ es el limitante.`,
        `Se producen 2 × ${nN2} = ${nNH3} mol NH₃.`,
      ],
      datos: { nN2, nH2 },
    });
  }

  private genReactivoExceso(dificultad: Dificultad): Ejercicio {
    // 2H₂ + O₂ → 2H₂O
    const [nMin, nMax] = rng(dificultad, [1, 5], [2, 8], [3, 12]);
    const nH2 = this.randFloat(nMin, nMax, 1);
    const factorO2 = this.randFloat(1.3, 2.5, 2);
    const nO2 = this.redondear(0.5 * nH2 * factorO2, 2);
    const nO2consumido = this.redondear(nH2 / 2, 2);
    const sobrante = this.redondear(nO2 - nO2consumido, 2);
    const opts = [`${sobrante} mol O₂`, ...this.generarOpcionesIncorrectas(sobrante, 3, 0.3).map(x => `${x} mol O₂`)];
    return this.crearQuiz({
      id: `${this.id}/reactivo_exceso/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "reactivo_exceso", dificultad,
      enunciado: `En la reacción 2H₂ + O₂ → 2H₂O, se mezclan ${nH2} mol de H₂ y ${nO2} mol de O₂. ¿Cuántos moles de O₂ quedan en exceso?`,
      opciones: opts, indiceCorrecto: 0,
      pasos: [
        `O₂ necesario para ${nH2} mol H₂: ${nH2}/2 = ${nO2consumido} mol.`,
        `O₂ sobrante: ${nO2} − ${nO2consumido} = ${sobrante} mol.`,
      ],
      datos: { nH2, nO2 },
    });
  }

  private genRendimientoTeorico(dificultad: Dificultad): Ejercicio {
    // H₂ + Cl₂ → 2HCl, M(H₂)=2.02, M(HCl)=36.46
    const M_H2 = 2.02; const M_HCl = 36.46;
    const [mMin, mMax] = rng(dificultad, [2, 10], [5, 20], [10, 40]);
    const masaH2 = this.randFloat(mMin, mMax, 1);
    const nH2 = masaH2 / M_H2;
    const masaHCl = this.redondear(nH2 * 2 * M_HCl, 2);
    const opts = [`${masaHCl} g`, ...this.generarOpcionesIncorrectas(masaHCl, 3, 0.3).map(x => `${x} g`)];
    return this.crearQuiz({
      id: `${this.id}/rendimiento_teorico/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "rendimiento_teorico", dificultad,
      enunciado: `En la reacción H₂ + Cl₂ → 2HCl, ¿cuál es el rendimiento teórico de HCl a partir de ${masaH2} g de H₂? (M(H₂) = 2.02 g/mol, M(HCl) = 36.46 g/mol)`,
      opciones: opts, indiceCorrecto: 0,
      pasos: [
        `n(H₂) = ${masaH2} / 2.02 = ${this.redondear(nH2, 4)} mol.`,
        `n(HCl) = 2 × ${this.redondear(nH2, 4)} = ${this.redondear(2*nH2, 4)} mol.`,
        `m(HCl) = ${this.redondear(2*nH2, 4)} × 36.46 = ${masaHCl} g.`,
      ],
      datos: { masaH2, masaMolarH2: M_H2, masaMolarHCl: M_HCl },
    });
  }

  private genPorcentajeRendimiento(dificultad: Dificultad): Ejercicio {
    const [mMin, mMax] = rng(dificultad, [10, 40], [20, 80], [30, 120]);
    const masaTeorica = this.randFloat(mMin, mMax, 1);
    const factorReal = this.randFloat(0.55, 0.98, 2);
    const masaReal = this.redondear(masaTeorica * factorReal, 1);
    const pct = this.redondear((masaReal / masaTeorica) * 100, 1);
    const opts = [`${pct}%`, ...this.generarOpcionesIncorrectas(pct, 3, 0.15).map(x => `${x}%`)];
    return this.crearQuiz({
      id: `${this.id}/porcentaje_rendimiento/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "porcentaje_rendimiento", dificultad,
      enunciado: `Una reacción tiene un rendimiento teórico de ${masaTeorica} g pero solo se obtienen ${masaReal} g. ¿Cuál es el porcentaje de rendimiento?`,
      opciones: opts, indiceCorrecto: 0,
      pasos: [
        "% rendimiento = (masa real / masa teórica) × 100.",
        `% = (${masaReal} / ${masaTeorica}) × 100 = ${pct}%.`,
      ],
      datos: { masaReal, masaTeorica },
    });
  }

  private genPurezaReactivos(dificultad: Dificultad): Ejercicio {
    // CaCO₃ → CaO + CO₂
    const M_CaCO3 = 100.09; const M_CO2 = 44.01;
    const [mMin, mMax] = rng(dificultad, [10, 30], [20, 60], [30, 100]);
    const masaMuestra = this.randFloat(mMin, mMax, 1);
    const pureza = this.randFloat(0.60, 0.95, 2);
    const masaCaCO3 = masaMuestra * pureza;
    const nCaCO3 = masaCaCO3 / M_CaCO3;
    const masaCO2 = this.redondear(nCaCO3 * M_CO2, 2);
    // Recalculate pureza from rounded CO2
    const purezaCalc = this.redondear(((masaCO2 / M_CO2) * M_CaCO3 / masaMuestra) * 100, 1);
    const opts = [`${purezaCalc}%`, ...this.generarOpcionesIncorrectas(purezaCalc, 3, 0.15).map(x => `${x}%`)];
    return this.crearQuiz({
      id: `${this.id}/pureza_reactivos/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "pureza_reactivos", dificultad,
      enunciado: `Una muestra de ${masaMuestra} g de CaCO₃ impuro se calienta (CaCO₃ → CaO + CO₂) y produce ${masaCO2} g de CO₂. ¿Cuál es el porcentaje de pureza de la muestra?`,
      opciones: opts, indiceCorrecto: 0,
      pasos: [
        `n(CO₂) = ${masaCO2} / 44.01 = ${this.redondear(masaCO2/M_CO2, 4)} mol = n(CaCO₃ puro).`,
        `m(CaCO₃ puro) = ${this.redondear(masaCO2/M_CO2, 4)} × 100.09 = ${this.redondear((masaCO2/M_CO2)*M_CaCO3, 2)} g.`,
        `% pureza = (${this.redondear((masaCO2/M_CO2)*M_CaCO3, 2)} / ${masaMuestra}) × 100 = ${purezaCalc}%.`,
      ],
      datos: { masaMuestra, masaCO2 },
    });
  }

  private genLeyProporcionesMultiples(dificultad: Dificultad): Ejercicio {
    // Two oxides of nitrogen: NO (M=30) and NO₂ (M=46) - fixed 14g of N
    const masaN = 14;
    const masaO1 = this.randFloat(14, 20, 1); // ~NO
    const razon = this.randInt(2, 4);
    const masaO2 = this.redondear(masaO1 * razon, 1);
    const razCalc = this.redondear(masaO2 / masaO1, 2);
    const opts = [`${razCalc}`, ...this.generarOpcionesIncorrectas(razCalc, 3, 0.3).map(x => `${x}`)];
    return this.crearQuiz({
      id: `${this.id}/ley_proporciones_multiples/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "ley_proporciones_multiples", dificultad,
      enunciado: `El nitrógeno forma dos compuestos con el oxígeno. En el compuesto A, ${masaN} g de N se combinan con ${masaO1} g de O. En el compuesto B, ${masaN} g de N se combinan con ${masaO2} g de O. ¿Cuál es la razón de masas de O (B:A) para la misma cantidad de N?`,
      opciones: opts, indiceCorrecto: 0,
      pasos: [
        "La ley de proporciones múltiples dice que las masas del elemento variable guardan una razón de números enteros pequeños.",
        `Razón = ${masaO2} g / ${masaO1} g = ${razCalc} (≈ ${razon}).`,
      ],
      datos: { masaN, masaO_A: masaO1, masaO_B: masaO2 },
    });
  }

  private genLeyProporcionesDefinidas(dificultad: Dificultad): Ejercicio {
    // Water is always 88.9% O and 11.1% H
    const pctH = 11.1;
    const pctO = 88.9;
    const [mMin, mMax] = rng(dificultad, [10, 50], [20, 100], [50, 200]);
    const masaMuestra = this.randFloat(mMin, mMax, 1);
    const masaO = this.redondear(masaMuestra * pctO / 100, 2);
    const masaH = this.redondear(masaMuestra * pctH / 100, 2);
    const opts = [`${pctO}%`, ...this.generarOpcionesIncorrectas(pctO, 3, 0.1).map(x => `${x}%`)];
    return this.crearQuiz({
      id: `${this.id}/ley_proporciones_definidas/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "ley_proporciones_definidas", dificultad,
      enunciado: `Una muestra de ${masaMuestra} g de agua contiene ${masaH} g de hidrógeno y ${masaO} g de oxígeno. ¿Qué porcentaje en masa corresponde al oxígeno?`,
      opciones: opts, indiceCorrecto: 0,
      pasos: [
        `% O = (${masaO} / ${masaMuestra}) × 100 = ${this.redondear(masaO/masaMuestra*100, 1)}%.`,
        "El agua siempre tiene ~88.9% O en masa (ley de proporciones definidas).",
      ],
      datos: { masaMuestra, masaH, masaO },
    });
  }

  private genPorcentajeMasaMasa(dificultad: Dificultad): Ejercicio {
    const s = this.pickOne(SOLUTOS);
    const [msMin, msMax] = rng(dificultad, [5, 20], [10, 40], [20, 80]);
    const masaSoluto = this.randFloat(msMin, msMax, 1);
    const masaDisolvente = this.randFloat(msMin * 3, msMax * 8, 1);
    const masaSolucion = this.redondear(masaSoluto + masaDisolvente, 1);
    const pct = this.redondear((masaSoluto / masaSolucion) * 100, 2);
    const opts = [`${pct}%`, ...this.generarOpcionesIncorrectas(pct, 3, 0.2).map(x => `${x}%`)];
    return this.crearQuiz({
      id: `${this.id}/porcentaje_masa_masa/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "porcentaje_masa_masa", dificultad,
      enunciado: `Se disuelven ${masaSoluto} g de ${s.nombre} en ${masaDisolvente} g de agua. ¿Cuál es la concentración en % m/m?`,
      opciones: opts, indiceCorrecto: 0,
      pasos: [
        `Masa de solución = ${masaSoluto} + ${masaDisolvente} = ${masaSolucion} g.`,
        `% m/m = (${masaSoluto} / ${masaSolucion}) × 100 = ${pct}%.`,
      ],
      datos: { masaSoluto, masaDisolvente, masaSolucion },
    });
  }

  private genPorcentajeMasaVolumen(dificultad: Dificultad): Ejercicio {
    const s = this.pickOne(SOLUTOS);
    const [msMin, msMax] = rng(dificultad, [2, 15], [5, 30], [10, 60]);
    const masaSoluto = this.randFloat(msMin, msMax, 1);
    const volumen = this.randFloat(50, 200, 0);
    const pct = this.redondear((masaSoluto / volumen) * 100, 2);
    const opts = [`${pct}%`, ...this.generarOpcionesIncorrectas(pct, 3, 0.2).map(x => `${x}%`)];
    return this.crearQuiz({
      id: `${this.id}/porcentaje_masa_volumen/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "porcentaje_masa_volumen", dificultad,
      enunciado: `Se disuelven ${masaSoluto} g de ${s.nombre} en suficiente agua hasta obtener ${volumen} mL de solución. ¿Cuál es la concentración en % m/v (g/100 mL)?`,
      opciones: opts, indiceCorrecto: 0,
      pasos: [
        "% m/v = (masa de soluto [g] / volumen de solución [mL]) × 100.",
        `% m/v = (${masaSoluto} / ${volumen}) × 100 = ${pct}%.`,
      ],
      datos: { masaSoluto, volumen },
    });
  }

  private genPorcentajeVolumenVolumen(dificultad: Dificultad): Ejercicio {
    const [vMin, vMax] = rng(dificultad, [10, 50], [20, 100], [30, 150]);
    const volSoluto = this.randFloat(vMin, vMax, 0);
    const volSolucion = this.randFloat(volSoluto * 3, volSoluto * 10, 0);
    const pct = this.redondear((volSoluto / volSolucion) * 100, 2);
    const opts = [`${pct}%`, ...this.generarOpcionesIncorrectas(pct, 3, 0.2).map(x => `${x}%`)];
    return this.crearQuiz({
      id: `${this.id}/porcentaje_volumen_volumen/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "porcentaje_volumen_volumen", dificultad,
      enunciado: `Se prepara una solución mezclando ${volSoluto} mL de etanol con suficiente agua hasta ${volSolucion} mL. ¿Cuál es la concentración en % v/v?`,
      opciones: opts, indiceCorrecto: 0,
      pasos: [
        "% v/v = (volumen de soluto / volumen de solución) × 100.",
        `% v/v = (${volSoluto} / ${volSolucion}) × 100 = ${pct}%.`,
      ],
      datos: { volSoluto, volSolucion },
    });
  }

  private genMolaridad(dificultad: Dificultad): Ejercicio {
    const s = this.pickOne(SOLUTOS);
    const [mMin, mMax] = rng(dificultad, [5, 30], [10, 60], [20, 120]);
    const masa = this.randFloat(mMin, mMax, 1);
    const vol = this.randFloat(0.25, 1.50, 2);
    const M = this.redondear((masa / s.masaMolar) / vol, 3);
    const opts = [`${M} mol/L`, ...this.generarOpcionesIncorrectas(M, 3, 0.3).map(x => `${x} mol/L`)];
    return this.crearQuiz({
      id: `${this.id}/molaridad/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "molaridad", dificultad,
      enunciado: `¿Cuál es la molaridad de una solución que contiene ${masa} g de ${s.nombre} (M = ${s.masaMolar} g/mol) en ${vol} L de solución?`,
      opciones: opts, indiceCorrecto: 0,
      pasos: [
        `n = ${masa} / ${s.masaMolar} = ${this.redondear(masa/s.masaMolar, 4)} mol.`,
        `C = n / V = ${this.redondear(masa/s.masaMolar, 4)} / ${vol} = ${M} mol/L.`,
      ],
      datos: { masa, masaMolar: s.masaMolar, volumen: vol },
    });
  }

  private genMolalidad(dificultad: Dificultad): Ejercicio {
    const s = this.pickOne(SOLUTOS);
    const [mMin, mMax] = rng(dificultad, [5, 30], [10, 60], [20, 100]);
    const masa = this.randFloat(mMin, mMax, 1);
    const kgDisolvente = this.randFloat(0.1, 1.0, 2);
    const m = this.redondear((masa / s.masaMolar) / kgDisolvente, 3);
    const opts = [`${m} mol/kg`, ...this.generarOpcionesIncorrectas(m, 3, 0.3).map(x => `${x} mol/kg`)];
    return this.crearQuiz({
      id: `${this.id}/molalidad/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "molalidad", dificultad,
      enunciado: `¿Cuál es la molalidad de una solución con ${masa} g de ${s.nombre} (M = ${s.masaMolar} g/mol) disueltos en ${kgDisolvente} kg de agua?`,
      opciones: opts, indiceCorrecto: 0,
      pasos: [
        `n = ${masa} / ${s.masaMolar} = ${this.redondear(masa/s.masaMolar, 4)} mol.`,
        `m = n / kg disolvente = ${this.redondear(masa/s.masaMolar, 4)} / ${kgDisolvente} = ${m} mol/kg.`,
      ],
      datos: { masa, masaMolar: s.masaMolar, kgDisolvente },
    });
  }

  private genNormalidad(dificultad: Dificultad): Ejercicio {
    // HCl: equivalentes = moles (1 eq/mol); H2SO4: 2 eq/mol
    const acidos = [
      { nombre: "HCl", masaMolar: 36.46, eq: 1 },
      { nombre: "H₂SO₄", masaMolar: 98.08, eq: 2 },
      { nombre: "H₃PO₄", masaMolar: 97.99, eq: 3 },
    ];
    const a = this.pickOne(acidos);
    const [mMin, mMax] = rng(dificultad, [5, 20], [10, 40], [20, 80]);
    const masa = this.randFloat(mMin, mMax, 1);
    const vol = this.randFloat(0.25, 1.0, 2);
    const N = this.redondear((masa / a.masaMolar) * a.eq / vol, 3);
    const opts = [`${N} N`, ...this.generarOpcionesIncorrectas(N, 3, 0.3).map(x => `${x} N`)];
    return this.crearQuiz({
      id: `${this.id}/normalidad/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "normalidad", dificultad,
      enunciado: `Calcula la normalidad de una solución que contiene ${masa} g de ${a.nombre} (M = ${a.masaMolar} g/mol, ${a.eq} eq/mol) en ${vol} L de solución.`,
      opciones: opts, indiceCorrecto: 0,
      pasos: [
        `Equivalentes = (${masa} / ${a.masaMolar}) × ${a.eq} = ${this.redondear(masa/a.masaMolar*a.eq, 4)} eq.`,
        `N = ${this.redondear(masa/a.masaMolar*a.eq, 4)} / ${vol} = ${N} N.`,
      ],
      datos: { masa, masaMolar: a.masaMolar, eq: a.eq, volumen: vol },
    });
  }

  private genFraccionMolar(dificultad: Dificultad): Ejercicio {
    const s = this.pickOne(SOLUTOS);
    const M_agua = 18.02;
    const [mMin, mMax] = rng(dificultad, [5, 20], [10, 40], [20, 80]);
    const masaSoluto = this.randFloat(mMin, mMax, 1);
    const masaAgua = this.randFloat(50, 200, 0);
    const nSoluto = masaSoluto / s.masaMolar;
    const nAgua = masaAgua / M_agua;
    const xSoluto = this.redondear(nSoluto / (nSoluto + nAgua), 4);
    const opts = [`${xSoluto}`, ...this.generarOpcionesIncorrectas(xSoluto, 3, 0.3).map(x => `${x}`)];
    return this.crearQuiz({
      id: `${this.id}/fraccion_molar/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "fraccion_molar", dificultad,
      enunciado: `¿Cuál es la fracción molar de ${s.nombre} (M = ${s.masaMolar} g/mol) en una solución que contiene ${masaSoluto} g de soluto y ${masaAgua} g de agua?`,
      opciones: opts, indiceCorrecto: 0,
      pasos: [
        `n(soluto) = ${masaSoluto} / ${s.masaMolar} = ${this.redondear(nSoluto, 4)} mol.`,
        `n(H₂O) = ${masaAgua} / 18.02 = ${this.redondear(nAgua, 4)} mol.`,
        `X = ${this.redondear(nSoluto, 4)} / (${this.redondear(nSoluto, 4)} + ${this.redondear(nAgua, 4)}) = ${xSoluto}.`,
      ],
      datos: { masaSoluto, masaAgua },
    });
  }

  private genDiluciones(dificultad: Dificultad): Ejercicio {
    const [c1Min, c1Max] = rng(dificultad, [2, 5], [3, 10], [5, 18]);
    const C1 = this.randFloat(c1Min, c1Max, 1);
    const V1 = this.randFloat(10, 50, 0);
    const V2 = this.randFloat(V1 * 2, V1 * 10, 0);
    const C2 = this.redondear(C1 * V1 / V2, 3);
    const opts = [`${C2} mol/L`, ...this.generarOpcionesIncorrectas(C2, 3, 0.3).map(x => `${x} mol/L`)];
    return this.crearQuiz({
      id: `${this.id}/diluciones/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "diluciones", dificultad,
      enunciado: `Se toman ${V1} mL de una solución ${C1} mol/L y se diluye hasta ${V2} mL. ¿Cuál es la concentración final?`,
      opciones: opts, indiceCorrecto: 0,
      pasos: [
        "Se aplica la ley de dilución: C₁V₁ = C₂V₂.",
        `C₂ = (${C1} × ${V1}) / ${V2} = ${C2} mol/L.`,
      ],
      datos: { C1, V1, V2 },
    });
  }

  private genPreparacionSoluciones(dificultad: Dificultad): Ejercicio {
    const s = this.pickOne(SOLUTOS);
    const [cMin, cMax] = rng(dificultad, [0.1, 0.5], [0.2, 1.0], [0.5, 2.0]);
    const Cdeseada = this.randFloat(cMin, cMax, 2);
    const Vdeseado = this.randFloat(0.25, 1.0, 2);
    const masaNecesaria = this.redondear(Cdeseada * Vdeseado * s.masaMolar, 2);
    const opts = [`${masaNecesaria} g`, ...this.generarOpcionesIncorrectas(masaNecesaria, 3, 0.3).map(x => `${x} g`)];
    return this.crearQuiz({
      id: `${this.id}/preparacion_soluciones/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "preparacion_soluciones", dificultad,
      enunciado: `¿Cuántos gramos de ${s.nombre} (M = ${s.masaMolar} g/mol) se necesitan para preparar ${Vdeseado} L de solución ${Cdeseada} mol/L?`,
      opciones: opts, indiceCorrecto: 0,
      pasos: [
        `n = C × V = ${Cdeseada} × ${Vdeseado} = ${this.redondear(Cdeseada*Vdeseado, 4)} mol.`,
        `m = n × M = ${this.redondear(Cdeseada*Vdeseado, 4)} × ${s.masaMolar} = ${masaNecesaria} g.`,
      ],
      datos: { concentracion: Cdeseada, volumen: Vdeseado, masaMolar: s.masaMolar },
    });
  }
}
