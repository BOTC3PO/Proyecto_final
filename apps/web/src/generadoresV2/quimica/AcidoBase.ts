import { BaseGenerador } from "../core/baseGenerador";
import type { PRNG } from "../core/prng";
import type { Dificultad, Ejercicio, Calculator } from "../core/types";

type Rng = [number, number];
function rng(d: Dificultad, b: Rng, i: Rng, a: Rng): Rng {
  return d === "basico" ? b : d === "intermedio" ? i : a;
}

// Strong acids with their Ka (for strong: pKa shown conceptually only)
const ACIDOS_DEBILES = [
  { nombre: "ácido acético", formula: "CH₃COOH", Ka: 1.8e-5, pKa: 4.74 },
  { nombre: "ácido fórmico", formula: "HCOOH", Ka: 1.77e-4, pKa: 3.75 },
  { nombre: "ácido fluorhídrico", formula: "HF", Ka: 6.8e-4, pKa: 3.17 },
  { nombre: "ácido cianhídrico", formula: "HCN", Ka: 6.2e-10, pKa: 9.21 },
];

const BASES_DEBILES = [
  { nombre: "amoniaco", formula: "NH₃", Kb: 1.8e-5, pKb: 4.74 },
  { nombre: "metilamina", formula: "CH₃NH₂", Kb: 4.4e-4, pKb: 3.36 },
  { nombre: "piridina", formula: "C₅H₅N", Kb: 1.7e-9, pKb: 8.77 },
];

export class AcidoBaseGenerator extends BaseGenerador {
  readonly id = "quimica/acido_base";
  readonly materia = "quimica";
  readonly subtipos = [
    "pH", "pOH", "Ka_pKa", "Kb_pKb",
    "concentraciones_H_OH", "fuerza_acidos_bases",
    "neutralizacion", "titulaciones_simples",
  ];

  constructor(prng: PRNG) { super(prng); }

  generarEjercicio(subtipo: string, dificultad: Dificultad, _calc: Calculator): Ejercicio {
    switch (subtipo) {
      case "pH":                    return this.genPH(dificultad);
      case "pOH":                   return this.genPOH(dificultad);
      case "Ka_pKa":                return this.genKaPKa(dificultad);
      case "Kb_pKb":                return this.genKbPKb(dificultad);
      case "concentraciones_H_OH":  return this.genConcHOH(dificultad);
      case "fuerza_acidos_bases":   return this.genFuerzaAcidoBase(dificultad);
      case "neutralizacion":        return this.genNeutralizacion(dificultad);
      default:                      return this.genTitulacion(dificultad);
    }
  }

  private genPH(dificultad: Dificultad): Ejercicio {
    const [expMin, expMax] = rng(dificultad, [1, 6], [1, 10], [1, 13]);
    const exp = -this.randInt(expMin, expMax);
    const coef = this.randFloat(1.0, 9.9, 1) / 10;
    const H = coef * Math.pow(10, exp);
    const pH = this.redondear(-Math.log10(H), 2);
    const opts = [`${pH}`, ...this.generarOpcionesIncorrectas(pH, 3, 0.15).map(x => `${x}`)];
    return this.crearQuiz({
      id: `${this.id}/pH/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "pH", dificultad,
      enunciado: `Una solución tiene [H⁺] = ${H.toExponential(2)} mol/L. ¿Cuál es el pH?`,
      opciones: opts, indiceCorrecto: 0,
      pasos: [
        "pH = -log₁₀[H⁺].",
        `pH = -log₁₀(${H.toExponential(2)}) = ${pH}.`,
      ],
      datos: { H },
    });
  }

  private genPOH(dificultad: Dificultad): Ejercicio {
    const [expMin, expMax] = rng(dificultad, [1, 5], [1, 8], [1, 13]);
    const exp = -this.randInt(expMin, expMax);
    const coef = this.randFloat(1.0, 9.9, 1) / 10;
    const OH = coef * Math.pow(10, exp);
    const pOH = this.redondear(-Math.log10(OH), 2);
    const pH = this.redondear(14 - pOH, 2);
    const opts = [`${pOH}`, ...this.generarOpcionesIncorrectas(pOH, 3, 0.15).map(x => `${x}`)];
    return this.crearQuiz({
      id: `${this.id}/pOH/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "pOH", dificultad,
      enunciado: `Una solución tiene [OH⁻] = ${OH.toExponential(2)} mol/L. ¿Cuál es el pOH? (Recuerda: pH + pOH = 14, por lo que pH = ${pH})`,
      opciones: opts, indiceCorrecto: 0,
      pasos: [
        "pOH = -log₁₀[OH⁻].",
        `pOH = -log₁₀(${OH.toExponential(2)}) = ${pOH}.`,
        `pH = 14 - ${pOH} = ${pH}.`,
      ],
      datos: { OH },
    });
  }

  private genKaPKa(dificultad: Dificultad): Ejercicio {
    const a = this.pickOne(ACIDOS_DEBILES);
    // Question: given Ka, find pKa
    const pKa = this.redondear(a.pKa, 2);
    const opts = [`${pKa}`, ...this.generarOpcionesIncorrectas(pKa, 3, 0.15).map(x => `${x}`)];
    return this.crearQuiz({
      id: `${this.id}/Ka_pKa/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "Ka_pKa", dificultad,
      enunciado: `El ${a.nombre} (${a.formula}) tiene Ka = ${a.Ka.toExponential(2)}. ¿Cuál es el pKa?`,
      opciones: opts, indiceCorrecto: 0,
      pasos: [
        "pKa = -log₁₀(Ka).",
        `pKa = -log₁₀(${a.Ka.toExponential(2)}) = ${pKa}.`,
      ],
      datos: { Ka: a.Ka },
    });
  }

  private genKbPKb(dificultad: Dificultad): Ejercicio {
    const b = this.pickOne(BASES_DEBILES);
    const pKb = this.redondear(b.pKb, 2);
    const opts = [`${pKb}`, ...this.generarOpcionesIncorrectas(pKb, 3, 0.15).map(x => `${x}`)];
    return this.crearQuiz({
      id: `${this.id}/Kb_pKb/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "Kb_pKb", dificultad,
      enunciado: `El ${b.nombre} (${b.formula}) tiene Kb = ${b.Kb.toExponential(2)}. ¿Cuál es el pKb?`,
      opciones: opts, indiceCorrecto: 0,
      pasos: [
        "pKb = -log₁₀(Kb).",
        `pKb = -log₁₀(${b.Kb.toExponential(2)}) = ${pKb}.`,
      ],
      datos: { Kb: b.Kb },
    });
  }

  private genConcHOH(dificultad: Dificultad): Ejercicio {
    const [pMin, pMax] = rng(dificultad, [1, 6], [1, 10], [1, 13]);
    const pH = this.randFloat(pMin, pMax, 2);
    const H = this.redondear(Math.pow(10, -pH), 14);
    const OH = this.redondear(1e-14 / H, 14);
    const Hexp = H.toExponential(3);
    const OHexp = OH.toExponential(3);
    const opts = [Hexp, ...this.generarOpcionesIncorrectas(-pH, 3, 0.15).map(x => `${Math.pow(10, x).toExponential(3)}`)];
    return this.crearQuiz({
      id: `${this.id}/concentraciones_H_OH/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "concentraciones_H_OH", dificultad,
      enunciado: `Una solución tiene pH = ${pH}. ¿Cuál es la concentración de iones H⁺? (Kw = 1×10⁻¹⁴, [OH⁻] = ${OHexp} mol/L)`,
      opciones: opts, indiceCorrecto: 0,
      pasos: [
        "[H⁺] = 10^(-pH).",
        `[H⁺] = 10^(-${pH}) = ${Hexp} mol/L.`,
        `[OH⁻] = Kw / [H⁺] = 10⁻¹⁴ / ${Hexp} = ${OHexp} mol/L.`,
      ],
      datos: { pH },
    });
  }

  private genFuerzaAcidoBase(dificultad: Dificultad): Ejercicio {
    const acidos = [
      { nombre: "HCl", tipo: "fuerte", razon: "se disocia completamente en agua" },
      { nombre: "H₂SO₄", tipo: "fuerte", razon: "se disocia completamente en agua" },
      { nombre: "CH₃COOH", tipo: "débil", razon: "se disocia parcialmente (Ka = 1.8×10⁻⁵)" },
      { nombre: "HF", tipo: "débil", razon: "se disocia parcialmente (Ka = 6.8×10⁻⁴)" },
      { nombre: "HNO₃", tipo: "fuerte", razon: "se disocia completamente en agua" },
    ];
    const a = this.pickOne(acidos);
    const opcion = a.tipo === "fuerte" ? "Ácido fuerte" : "Ácido débil";
    const otras = a.tipo === "fuerte"
      ? ["Ácido débil", "Base fuerte", "Base débil"]
      : ["Ácido fuerte", "Base fuerte", "Base débil"];
    return this.crearQuiz({
      id: `${this.id}/fuerza_acidos_bases/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "fuerza_acidos_bases", dificultad,
      enunciado: `¿Cómo se clasifica el ${a.nombre} según su fuerza?`,
      opciones: [opcion, ...otras], indiceCorrecto: 0,
      pasos: [
        `${a.nombre} es un ácido ${a.tipo} porque ${a.razon}.`,
      ],
      datos: {},
    });
  }

  private genNeutralizacion(dificultad: Dificultad): Ejercicio {
    const [cMin, cMax] = rng(dificultad, [0.1, 0.5], [0.2, 1.0], [0.5, 2.0]);
    const Cacido = this.randFloat(cMin, cMax, 2);
    const Vacido = this.randFloat(10, 50, 1);
    const Cbase = this.randFloat(cMin, cMax, 2);
    const Vbase = this.redondear((Cacido * Vacido) / Cbase, 1);
    const opts = [`${Vbase} mL`, ...this.generarOpcionesIncorrectas(Vbase, 3, 0.3).map(x => `${x} mL`)];
    return this.crearQuiz({
      id: `${this.id}/neutralizacion/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "neutralizacion", dificultad,
      enunciado: `HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l)\nSe tienen ${Vacido} mL de HCl ${Cacido} mol/L. ¿Qué volumen de NaOH ${Cbase} mol/L se necesita para neutralizarlo?`,
      opciones: opts, indiceCorrecto: 0,
      pasos: [
        `n(HCl) = ${Cacido} × ${Vacido}/1000 = ${this.redondear(Cacido*Vacido/1000, 5)} mol.`,
        "Estequiometría 1:1: n(NaOH) = n(HCl).",
        `V(NaOH) = n / C = ${this.redondear(Cacido*Vacido/1000, 5)} / ${Cbase} × 1000 = ${Vbase} mL.`,
      ],
      datos: { Cacido, Vacido, Cbase },
    });
  }

  private genTitulacion(dificultad: Dificultad): Ejercicio {
    const [vMin, vMax] = rng(dificultad, [10, 30], [15, 50], [20, 80]);
    const Vacido = this.randFloat(vMin, vMax, 1);
    const Cbase = this.randFloat(0.10, 0.30, 2);
    const Vbase = this.randFloat(vMin, vMax, 1);
    const Cacido = this.redondear((Cbase * Vbase) / Vacido, 3);
    const opts = [`${Cacido} mol/L`, ...this.generarOpcionesIncorrectas(Cacido, 3, 0.3).map(x => `${x} mol/L`)];
    return this.crearQuiz({
      id: `${this.id}/titulaciones_simples/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "titulaciones_simples", dificultad,
      enunciado: `Se titula HCl (concentración desconocida) con NaOH ${Cbase} mol/L. Se usan ${Vacido} mL de ácido y se gastan ${Vbase} mL de base en la titulación (punto de equivalencia). ¿Cuál es la concentración del HCl?`,
      opciones: opts, indiceCorrecto: 0,
      pasos: [
        "En el punto de equivalencia: n(HCl) = n(NaOH).",
        `C_acido × ${Vacido} = ${Cbase} × ${Vbase}.`,
        `C_acido = (${Cbase} × ${Vbase}) / ${Vacido} = ${Cacido} mol/L.`,
      ],
      datos: { Vacido, Cbase, Vbase },
    });
  }
}
