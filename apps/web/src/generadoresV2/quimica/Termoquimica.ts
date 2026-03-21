import { BaseGenerador } from "../core/baseGenerador";
import type { PRNG } from "../core/prng";
import type { Dificultad, Ejercicio, Calculator } from "../core/types";

type Rng = [number, number];
function rng(d: Dificultad, b: Rng, i: Rng, a: Rng): Rng {
  return d === "basico" ? b : d === "intermedio" ? i : a;
}

interface Sustancia { nombre: string; formula: string; c: number; } // c in J/g·°C
const SUSTANCIAS_C: Sustancia[] = [
  { nombre: "agua", formula: "H₂O", c: 4.184 },
  { nombre: "aluminio", formula: "Al", c: 0.900 },
  { nombre: "hierro", formula: "Fe", c: 0.449 },
  { nombre: "cobre", formula: "Cu", c: 0.385 },
  { nombre: "etanol", formula: "C₂H₅OH", c: 2.440 },
];

interface Combustible { nombre: string; formula: string; masaMolar: number; deltaHMolar: number; }
const COMBUSTIBLES: Combustible[] = [
  { nombre: "metano", formula: "CH₄", masaMolar: 16.04, deltaHMolar: -890.3 },
  { nombre: "etanol", formula: "C₂H₅OH", masaMolar: 46.07, deltaHMolar: -1366.8 },
  { nombre: "propano", formula: "C₃H₈", masaMolar: 44.10, deltaHMolar: -2220.0 },
  { nombre: "glucosa", formula: "C₆H₁₂O₆", masaMolar: 180.16, deltaHMolar: -2803.0 },
];

export class TermoquimicaGenerator extends BaseGenerador {
  readonly id = "quimica/termoquimica";
  readonly materia = "quimica";
  readonly subtipos = [
    "calor", "cambio_entalpia", "ley_hess", "energia_reaccion", "poder_calorifico",
  ];

  constructor(prng: PRNG) { super(prng); }

  generarEjercicio(subtipo: string, dificultad: Dificultad, _calc: Calculator): Ejercicio {
    switch (subtipo) {
      case "calor":              return this.genCalor(dificultad);
      case "cambio_entalpia":    return this.genCambioEntalpia(dificultad);
      case "ley_hess":           return this.genLeyHess(dificultad);
      case "energia_reaccion":   return this.genEnergiaReaccion(dificultad);
      default:                   return this.genPoderCalorifico(dificultad);
    }
  }

  private genCalor(dificultad: Dificultad): Ejercicio {
    const s = this.pickOne(SUSTANCIAS_C);
    const [mMin, mMax] = rng(dificultad, [50, 200], [100, 500], [200, 1000]);
    const [dtMin, dtMax] = rng(dificultad, [5, 30], [10, 60], [20, 100]);
    const m = this.randInt(mMin, mMax);
    const deltaT = this.randInt(dtMin, dtMax);
    const Q = this.redondear(m * s.c * deltaT, 0);
    const opts = [`${Q} J`, ...this.generarOpcionesIncorrectas(Q, 3, 0.3).map(x => `${x} J`)];
    return this.crearQuiz({
      id: `${this.id}/calor/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "calor", dificultad,
      enunciado: `¿Cuánto calor se necesita para calentar ${m} g de ${s.nombre} (c = ${s.c} J/g·°C) en ${deltaT} °C?`,
      opciones: opts, indiceCorrecto: 0,
      pasos: [
        "Usa Q = m·c·ΔT.",
        `Q = ${m} × ${s.c} × ${deltaT} = ${Q} J.`,
      ],
      datos: { m, c: s.c, deltaT },
    });
  }

  private genCambioEntalpia(dificultad: Dificultad): Ejercicio {
    const c = this.pickOne(COMBUSTIBLES);
    const [mMin, mMax] = rng(dificultad, [5, 20], [10, 50], [20, 100]);
    const masa = this.randFloat(mMin, mMax, 1);
    const n = masa / c.masaMolar;
    const deltaH = this.redondear(n * c.deltaHMolar, 1);
    const absDeltaH = Math.abs(deltaH);
    const opts = [`${deltaH} kJ`, ...this.generarOpcionesIncorrectas(absDeltaH, 3, 0.2).map(x => `${-x} kJ`)];
    return this.crearQuiz({
      id: `${this.id}/cambio_entalpia/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "cambio_entalpia", dificultad,
      enunciado: `La combustión de ${c.nombre} (${c.formula}) tiene ΔH° = ${c.deltaHMolar} kJ/mol. ¿Cuánto calor se libera al quemar ${masa} g? (M = ${c.masaMolar} g/mol)`,
      opciones: opts, indiceCorrecto: 0,
      pasos: [
        `n = ${masa} / ${c.masaMolar} = ${this.redondear(n, 4)} mol.`,
        `ΔH = ${this.redondear(n, 4)} × ${c.deltaHMolar} = ${deltaH} kJ.`,
      ],
      datos: { masa, masaMolar: c.masaMolar, deltaHMolar: c.deltaHMolar },
    });
  }

  private genLeyHess(dificultad: Dificultad): Ejercicio {
    const [hMin, hMax] = rng(dificultad, [100, 300], [150, 500], [200, 700]);
    const dH1 = -this.randInt(hMin, hMax);
    const dH2 = -this.randInt(hMin, hMax);
    const dHtotal = this.redondear(dH1 + dH2, 1);
    const opts = [`${dHtotal} kJ`, ...this.generarOpcionesIncorrectas(Math.abs(dHtotal), 3, 0.2).map(x => `${-x} kJ`)];
    return this.crearQuiz({
      id: `${this.id}/ley_hess/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "ley_hess", dificultad,
      enunciado: [
        "Usando la ley de Hess, calcula el ΔH de la reacción global:",
        `(1) C(s) + ½O₂(g) → CO(g)    ΔH₁ = ${dH1} kJ`,
        `(2) CO(g) + ½O₂(g) → CO₂(g)  ΔH₂ = ${dH2} kJ`,
        "Reacción global: C(s) + O₂(g) → CO₂(g)",
      ].join("\n"),
      opciones: opts, indiceCorrecto: 0,
      pasos: [
        "Ley de Hess: ΔH_global = ΔH₁ + ΔH₂.",
        `ΔH = ${dH1} + ${dH2} = ${dHtotal} kJ.`,
      ],
      datos: { deltaH1: dH1, deltaH2: dH2 },
    });
  }

  private genEnergiaReaccion(dificultad: Dificultad): Ejercicio {
    // Entalpías de formación estándar conocidas (kJ/mol)
    const reacciones = [
      {
        texto: "CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l)",
        deltaH: -890.3,
        descripcion: "combustión del metano",
      },
      {
        texto: "N₂(g) + 3H₂(g) → 2NH₃(g)",
        deltaH: -92.4,
        descripcion: "síntesis del amoniaco",
      },
      {
        texto: "H₂(g) + ½O₂(g) → H₂O(l)",
        deltaH: -285.8,
        descripcion: "formación del agua",
      },
      {
        texto: "C(s) + O₂(g) → CO₂(g)",
        deltaH: -393.5,
        descripcion: "combustión del carbono",
      },
    ];
    const r = this.pickOne(reacciones);
    const [nMin, nMax] = rng(dificultad, [1, 3], [1, 5], [1, 8]);
    const n = this.randFloat(nMin, nMax, 1);
    const deltaHTotal = this.redondear(r.deltaH * n, 1);
    const absH = Math.abs(deltaHTotal);
    const opts = [`${deltaHTotal} kJ`, ...this.generarOpcionesIncorrectas(absH, 3, 0.2).map(x => `${-x} kJ`)];
    return this.crearQuiz({
      id: `${this.id}/energia_reaccion/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "energia_reaccion", dificultad,
      enunciado: `La ${r.descripcion} libera ${r.deltaH} kJ/mol. ¿Cuánta energía se libera en ${n} mol de reacción?\n${r.texto}`,
      opciones: opts, indiceCorrecto: 0,
      pasos: [
        `ΔH_total = n × ΔH° = ${n} × (${r.deltaH}) = ${deltaHTotal} kJ.`,
        "El signo negativo indica que la reacción es exotérmica.",
      ],
      datos: { n, deltaH: r.deltaH },
    });
  }

  private genPoderCalorifico(dificultad: Dificultad): Ejercicio {
    const combustibles = [
      { nombre: "carbón", pci: 29.3 },  // MJ/kg
      { nombre: "madera", pci: 15.0 },
      { nombre: "gas natural", pci: 55.5 },
      { nombre: "gasolina", pci: 44.0 },
    ];
    const c = this.pickOne(combustibles);
    const [mMin, mMax] = rng(dificultad, [1, 5], [2, 10], [5, 20]);
    const masa = this.randFloat(mMin, mMax, 1); // kg
    const energia = this.redondear(masa * c.pci, 2); // MJ
    const opts = [`${energia} MJ`, ...this.generarOpcionesIncorrectas(energia, 3, 0.3).map(x => `${x} MJ`)];
    return this.crearQuiz({
      id: `${this.id}/poder_calorifico/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "poder_calorifico", dificultad,
      enunciado: `El poder calorífico del ${c.nombre} es ${c.pci} MJ/kg. ¿Cuánta energía se libera al quemar ${masa} kg?`,
      opciones: opts, indiceCorrecto: 0,
      pasos: [
        "Energía = masa × poder calorífico.",
        `E = ${masa} kg × ${c.pci} MJ/kg = ${energia} MJ.`,
      ],
      datos: { masa, pci: c.pci },
    });
  }
}
