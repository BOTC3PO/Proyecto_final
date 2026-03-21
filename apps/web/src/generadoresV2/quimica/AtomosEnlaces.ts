import { BaseGenerador } from "../core/baseGenerador";
import type { PRNG } from "../core/prng";
import type { Dificultad, Ejercicio, Calculator } from "../core/types";

// ── Datos inline ─────────────────────────────────────────────────────────────

interface Elemento {
  simbolo: string; nombre: string; Z: number;
  grupo: number; periodo: number; tipo: string;
  electroneg: number; radioAtomico: number; valencia: number;
  config: string; subcapa: string;
  proton: number; neutron: number; electron: number;
}
const ELEMENTOS: Elemento[] = [
  { simbolo: "H",  nombre: "hidrógeno", Z:  1, grupo:  1, periodo: 1, tipo: "no metal",   electroneg: 2.20, radioAtomico:  53, valencia: 1, config: "1s¹",              subcapa: "s", proton:  1, neutron:  0, electron:  1 },
  { simbolo: "He", nombre: "helio",     Z:  2, grupo: 18, periodo: 1, tipo: "gas noble",   electroneg: 0.00, radioAtomico:  31, valencia: 0, config: "1s²",              subcapa: "s", proton:  2, neutron:  2, electron:  2 },
  { simbolo: "Li", nombre: "litio",     Z:  3, grupo:  1, periodo: 2, tipo: "metal",       electroneg: 0.98, radioAtomico: 167, valencia: 1, config: "[He] 2s¹",         subcapa: "s", proton:  3, neutron:  4, electron:  3 },
  { simbolo: "C",  nombre: "carbono",   Z:  6, grupo: 14, periodo: 2, tipo: "no metal",   electroneg: 2.55, radioAtomico:  77, valencia: 4, config: "[He] 2s² 2p²",      subcapa: "p", proton:  6, neutron:  6, electron:  6 },
  { simbolo: "N",  nombre: "nitrógeno", Z:  7, grupo: 15, periodo: 2, tipo: "no metal",   electroneg: 3.04, radioAtomico:  75, valencia: 3, config: "[He] 2s² 2p³",      subcapa: "p", proton:  7, neutron:  7, electron:  7 },
  { simbolo: "O",  nombre: "oxígeno",   Z:  8, grupo: 16, periodo: 2, tipo: "no metal",   electroneg: 3.44, radioAtomico:  73, valencia: 2, config: "[He] 2s² 2p⁴",      subcapa: "p", proton:  8, neutron:  8, electron:  8 },
  { simbolo: "F",  nombre: "flúor",     Z:  9, grupo: 17, periodo: 2, tipo: "no metal",   electroneg: 3.98, radioAtomico:  64, valencia: 1, config: "[He] 2s² 2p⁵",      subcapa: "p", proton:  9, neutron: 10, electron:  9 },
  { simbolo: "Na", nombre: "sodio",     Z: 11, grupo:  1, periodo: 3, tipo: "metal",       electroneg: 0.93, radioAtomico: 186, valencia: 1, config: "[Ne] 3s¹",         subcapa: "s", proton: 11, neutron: 12, electron: 11 },
  { simbolo: "Mg", nombre: "magnesio",  Z: 12, grupo:  2, periodo: 3, tipo: "metal",       electroneg: 1.31, radioAtomico: 160, valencia: 2, config: "[Ne] 3s²",         subcapa: "s", proton: 12, neutron: 12, electron: 12 },
  { simbolo: "Al", nombre: "aluminio",  Z: 13, grupo: 13, periodo: 3, tipo: "metal",       electroneg: 1.61, radioAtomico: 143, valencia: 3, config: "[Ne] 3s² 3p¹",     subcapa: "p", proton: 13, neutron: 14, electron: 13 },
  { simbolo: "Si", nombre: "silicio",   Z: 14, grupo: 14, periodo: 3, tipo: "metaloide",  electroneg: 1.90, radioAtomico: 118, valencia: 4, config: "[Ne] 3s² 3p²",     subcapa: "p", proton: 14, neutron: 14, electron: 14 },
  { simbolo: "Cl", nombre: "cloro",     Z: 17, grupo: 17, periodo: 3, tipo: "no metal",   electroneg: 3.16, radioAtomico:  99, valencia: 1, config: "[Ne] 3s² 3p⁵",     subcapa: "p", proton: 17, neutron: 18, electron: 17 },
  { simbolo: "Ca", nombre: "calcio",    Z: 20, grupo:  2, periodo: 4, tipo: "metal",       electroneg: 1.00, radioAtomico: 197, valencia: 2, config: "[Ar] 4s²",         subcapa: "s", proton: 20, neutron: 20, electron: 20 },
  { simbolo: "Fe", nombre: "hierro",    Z: 26, grupo:  8, periodo: 4, tipo: "metal",       electroneg: 1.83, radioAtomico: 126, valencia: 2, config: "[Ar] 3d⁶ 4s²",    subcapa: "d", proton: 26, neutron: 30, electron: 26 },
  { simbolo: "Cu", nombre: "cobre",     Z: 29, grupo: 11, periodo: 4, tipo: "metal",       electroneg: 1.90, radioAtomico: 128, valencia: 2, config: "[Ar] 3d¹⁰ 4s¹",   subcapa: "d", proton: 29, neutron: 35, electron: 29 },
  { simbolo: "Br", nombre: "bromo",     Z: 35, grupo: 17, periodo: 4, tipo: "no metal",   electroneg: 2.96, radioAtomico: 114, valencia: 1, config: "[Ar] 3d¹⁰ 4s² 4p⁵", subcapa: "p", proton: 35, neutron: 45, electron: 35 },
];

interface GeometriaMolecular { formula: string; geometria: string; otras: string[]; }
const GEOMETRIAS: GeometriaMolecular[] = [
  { formula: "H₂O",  geometria: "angular (bent)",       otras: ["lineal", "trigonal plana", "tetraédrica"] },
  { formula: "CO₂",  geometria: "lineal",                otras: ["angular", "tetraédrica", "piramidal"] },
  { formula: "NH₃",  geometria: "piramidal trigonal",   otras: ["lineal", "trigonal plana", "tetraédrica"] },
  { formula: "CH₄",  geometria: "tetraédrica",           otras: ["lineal", "angular", "piramidal trigonal"] },
  { formula: "BF₃",  geometria: "trigonal plana",        otras: ["lineal", "angular", "tetraédrica"] },
  { formula: "PCl₅", geometria: "bipiramidal trigonal",  otras: ["tetraédrica", "octaédrica", "trigonal plana"] },
  { formula: "SF₆",  geometria: "octaédrica",            otras: ["tetraédrica", "bipiramidal trigonal", "lineal"] },
];

interface MetodoSeparacion { mezcla: string; metodo: string; otros: string[]; }
const METODOS_SEP: MetodoSeparacion[] = [
  { mezcla: "agua + sal (NaCl)",         metodo: "evaporación",   otros: ["filtración", "destilación", "centrifugación"] },
  { mezcla: "agua + arena",              metodo: "filtración",    otros: ["evaporación", "cristalización", "decantación"] },
  { mezcla: "agua + aceite",             metodo: "decantación",   otros: ["filtración", "evaporación", "cromatografía"] },
  { mezcla: "alcohol + agua",            metodo: "destilación",   otros: ["filtración", "evaporación", "centrifugación"] },
  { mezcla: "tinta (pigmentos mixtos)",  metodo: "cromatografía", otros: ["filtración", "destilación", "decantación"] },
];

interface TipoReaccion { ecuacion: string; tipo: string; otros: string[]; }
const REACCIONES_TIPO: TipoReaccion[] = [
  { ecuacion: "2Na + Cl₂ → 2NaCl",                     tipo: "síntesis",       otros: ["descomposición", "desplazamiento", "combustión"] },
  { ecuacion: "2H₂O → 2H₂ + O₂",                       tipo: "descomposición", otros: ["síntesis", "neutralización", "combustión"] },
  { ecuacion: "Zn + H₂SO₄ → ZnSO₄ + H₂",              tipo: "desplazamiento", otros: ["síntesis", "neutralización", "combustión"] },
  { ecuacion: "CH₄ + 2O₂ → CO₂ + 2H₂O",               tipo: "combustión",     otros: ["síntesis", "descomposición", "neutralización"] },
  { ecuacion: "HCl + NaOH → NaCl + H₂O",               tipo: "neutralización", otros: ["síntesis", "descomposición", "precipitación"] },
  { ecuacion: "AgNO₃ + NaCl → AgCl↓ + NaNO₃",         tipo: "precipitación",  otros: ["síntesis", "descomposición", "neutralización"] },
];

export class AtomosEnlacesGenerator extends BaseGenerador {
  readonly id = "quimica/atomos_enlaces";
  readonly materia = "quimica";
  readonly subtipos = [
    "tabla_periodica_clasificacion", "tabla_periodica_numero_atomico",
    "tendencias_periodicas", "electronegatividad", "radio_atomico", "valencia_tipica",
    "particulas_subatomicas", "iones_cationes_aniones", "configuracion_electronica",
    "niveles_subniveles", "orbitales_spdf",
    "enlace_ionico", "enlace_covalente", "enlace_metalico", "polaridad_enlaces",
    "geometria_molecular",
    "sustancia_pura_mezcla", "mezcla_homogenea_heterogenea", "metodos_separacion",
    "propiedades_fisicas_quimicas",
    "sintesis", "descomposicion", "desplazamiento", "combustion",
    "neutralizacion_tipo", "precipitacion_tipo",
  ];

  constructor(prng: PRNG) { super(prng); }

  generarEjercicio(subtipo: string, dificultad: Dificultad, _calc: Calculator): Ejercicio {
    switch (subtipo) {
      case "tabla_periodica_clasificacion":  return this.genClasificacion(dificultad);
      case "tabla_periodica_numero_atomico": return this.genNumeroAtomico(dificultad);
      case "tendencias_periodicas":          return this.genTendencias(dificultad);
      case "electronegatividad":             return this.genElectronegatividad(dificultad);
      case "radio_atomico":                  return this.genRadioAtomico(dificultad);
      case "valencia_tipica":                return this.genValencia(dificultad);
      case "particulas_subatomicas":         return this.genParticulasSubatomicas(dificultad);
      case "iones_cationes_aniones":         return this.genIones(dificultad);
      case "configuracion_electronica":      return this.genConfigElectronica(dificultad);
      case "niveles_subniveles":             return this.genNivelesSubniveles(dificultad);
      case "orbitales_spdf":                 return this.genOrbitales(dificultad);
      case "enlace_ionico":                  return this.genEnlaceIonico(dificultad);
      case "enlace_covalente":               return this.genEnlaceCovalente(dificultad);
      case "enlace_metalico":                return this.genEnlaceMetalico(dificultad);
      case "polaridad_enlaces":              return this.genPolaridad(dificultad);
      case "geometria_molecular":            return this.genGeometria(dificultad);
      case "sustancia_pura_mezcla":          return this.genSustanciaMezcla(dificultad);
      case "mezcla_homogenea_heterogenea":   return this.genMezclaHomHet(dificultad);
      case "metodos_separacion":             return this.genMetodosSeparacion(dificultad);
      case "propiedades_fisicas_quimicas":   return this.genPropiedades(dificultad);
      case "sintesis":                       return this.genTipoReaccion("síntesis", dificultad);
      case "descomposicion":                 return this.genTipoReaccion("descomposición", dificultad);
      case "desplazamiento":                 return this.genTipoReaccion("desplazamiento", dificultad);
      case "combustion":                     return this.genTipoReaccion("combustión", dificultad);
      case "neutralizacion_tipo":            return this.genTipoReaccion("neutralización", dificultad);
      default:                               return this.genTipoReaccion("precipitación", dificultad);
    }
  }

  private genClasificacion(_d: Dificultad): Ejercicio {
    const el = this.pickOne(ELEMENTOS);
    const opciones = ["metal", "no metal", "metaloide", "gas noble"].filter((t, i, a) => a.indexOf(t) === i);
    const correcto = el.tipo;
    const idx = opciones.indexOf(correcto);
    const shuffled = idx >= 0 ? opciones : [correcto, "metal", "no metal", "metaloide"];
    return this.crearQuiz({
      id: `${this.id}/tabla_periodica_clasificacion/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "tabla_periodica_clasificacion", dificultad: _d,
      enunciado: `El elemento ${el.nombre} (${el.simbolo}) ¿cómo se clasifica?`,
      opciones: shuffled, indiceCorrecto: shuffled.indexOf(correcto),
      pasos: [`${el.simbolo} es un ${el.tipo} (grupo ${el.grupo}, periodo ${el.periodo}).`],
      datos: {},
    });
  }

  private genNumeroAtomico(_d: Dificultad): Ejercicio {
    const el = this.pickOne(ELEMENTOS);
    const alts = this.generarOpcionesIncorrectas(el.Z, 3, 0.3).map(x => `${Math.max(1, Math.round(x))}`);
    return this.crearQuiz({
      id: `${this.id}/tabla_periodica_numero_atomico/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "tabla_periodica_numero_atomico", dificultad: _d,
      enunciado: `¿Cuál es el número atómico del ${el.nombre} (${el.simbolo})?`,
      opciones: [`${el.Z}`, ...alts], indiceCorrecto: 0,
      pasos: [`El número atómico de ${el.simbolo} es Z = ${el.Z} (igual al número de protones).`],
      datos: {},
    });
  }

  private genTendencias(_d: Dificultad): Ejercicio {
    const tendencias = [
      {
        pregunta: "¿En qué dirección aumenta la electronegatividad en la tabla periódica?",
        correcto: "De izquierda a derecha en un período y de abajo hacia arriba en un grupo",
        otros: [
          "De derecha a izquierda en un período y de arriba hacia abajo en un grupo",
          "De izquierda a derecha en un período y de arriba hacia abajo en un grupo",
          "Siempre aumenta al aumentar el número atómico",
        ],
      },
      {
        pregunta: "¿En qué dirección aumenta el radio atómico en la tabla periódica?",
        correcto: "De derecha a izquierda en un período y de arriba hacia abajo en un grupo",
        otros: [
          "De izquierda a derecha en un período y de arriba hacia abajo en un grupo",
          "Siempre al aumentar el número atómico",
          "De izquierda a derecha en un período y de abajo hacia arriba en un grupo",
        ],
      },
      {
        pregunta: "¿Cuál es la tendencia de la energía de ionización a lo largo de un período (de izquierda a derecha)?",
        correcto: "Aumenta generalmente",
        otros: ["Disminuye generalmente", "Se mantiene constante", "Primero aumenta y luego disminuye"],
      },
    ];
    const t = this.pickOne(tendencias);
    return this.crearQuiz({
      id: `${this.id}/tendencias_periodicas/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "tendencias_periodicas", dificultad: _d,
      enunciado: t.pregunta,
      opciones: [t.correcto, ...t.otros], indiceCorrecto: 0,
      pasos: [t.correcto],
      datos: {},
    });
  }

  private genElectronegatividad(_d: Dificultad): Ejercicio {
    const par = this.shuffle([...ELEMENTOS]).slice(0, 2);
    const [a, b] = par;
    const masElect = a.electroneg > b.electroneg ? a : b;
    const opts = [`${masElect.simbolo} (${masElect.electroneg})`, `${(a === masElect ? b : a).simbolo} (${(a === masElect ? b : a).electroneg})`, "Son iguales", "No se puede determinar"];
    return this.crearQuiz({
      id: `${this.id}/electronegatividad/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "electronegatividad", dificultad: _d,
      enunciado: `¿Cuál elemento tiene mayor electronegatividad: ${a.nombre} (${a.simbolo}) o ${b.nombre} (${b.simbolo})?`,
      opciones: opts, indiceCorrecto: 0,
      pasos: [`Escala de Pauling: ${a.simbolo} = ${a.electroneg}, ${b.simbolo} = ${b.electroneg}. Mayor: ${masElect.simbolo}.`],
      datos: {},
    });
  }

  private genRadioAtomico(_d: Dificultad): Ejercicio {
    const par = this.shuffle([...ELEMENTOS.filter(e => e.radioAtomico > 0)]).slice(0, 2);
    const [a, b] = par;
    const mayor = a.radioAtomico > b.radioAtomico ? a : b;
    const menor = mayor === a ? b : a;
    const opts = [`${mayor.simbolo} (${mayor.radioAtomico} pm)`, `${menor.simbolo} (${menor.radioAtomico} pm)`, "Son iguales", "Depende del estado de agregación"];
    return this.crearQuiz({
      id: `${this.id}/radio_atomico/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "radio_atomico", dificultad: _d,
      enunciado: `¿Cuál de estos elementos tiene mayor radio atómico: ${a.nombre} (${a.simbolo}) o ${b.nombre} (${b.simbolo})?`,
      opciones: opts, indiceCorrecto: 0,
      pasos: [`Radio atómico: ${a.simbolo} = ${a.radioAtomico} pm, ${b.simbolo} = ${b.radioAtomico} pm. Mayor: ${mayor.simbolo}.`],
      datos: {},
    });
  }

  private genValencia(_d: Dificultad): Ejercicio {
    const el = this.pickOne(ELEMENTOS.filter(e => e.valencia > 0));
    const alts = this.generarOpcionesIncorrectas(el.valencia, 3, 0.5).map(x => `${Math.max(1, Math.min(4, Math.round(Math.abs(x))))}`);
    return this.crearQuiz({
      id: `${this.id}/valencia_tipica/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "valencia_tipica", dificultad: _d,
      enunciado: `¿Cuál es la valencia típica del ${el.nombre} (${el.simbolo})?`,
      opciones: [`${el.valencia}`, ...alts], indiceCorrecto: 0,
      pasos: [`${el.simbolo} está en el grupo ${el.grupo} → valencia típica = ${el.valencia}.`],
      datos: {},
    });
  }

  private genParticulasSubatomicas(_d: Dificultad): Ejercicio {
    const el = this.pickOne(ELEMENTOS);
    const pregunta = this.pickOne(["protones", "neutrones", "electrones"] as const);
    const valor = pregunta === "protones" ? el.proton : pregunta === "neutrones" ? el.neutron : el.electron;
    const alts = this.generarOpcionesIncorrectas(valor, 3, 0.3).map(x => `${Math.max(0, Math.round(x))}`);
    return this.crearQuiz({
      id: `${this.id}/particulas_subatomicas/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "particulas_subatomicas", dificultad: _d,
      enunciado: `El ${el.nombre} (${el.simbolo}, Z=${el.Z}) tiene número másico A = ${el.proton + el.neutron}. ¿Cuántos ${pregunta} tiene?`,
      opciones: [`${valor}`, ...alts], indiceCorrecto: 0,
      pasos: [
        `Z = ${el.Z} = número de protones = número de electrones.`,
        `N = A − Z = ${el.proton + el.neutron} − ${el.Z} = ${el.neutron} neutrones.`,
      ],
      datos: {},
    });
  }

  private genIones(_d: Dificultad): Ejercicio {
    const ionesData = [
      { simbolo: "Na⁺",  descripcion: "catión", particulas: "11 protones, 10 electrones", carga: +1 },
      { simbolo: "Ca²⁺", descripcion: "catión", particulas: "20 protones, 18 electrones", carga: +2 },
      { simbolo: "Cl⁻",  descripcion: "anión",  particulas: "17 protones, 18 electrones", carga: -1 },
      { simbolo: "O²⁻",  descripcion: "anión",  particulas: "8 protones, 10 electrones",  carga: -2 },
      { simbolo: "Fe²⁺", descripcion: "catión", particulas: "26 protones, 24 electrones", carga: +2 },
    ];
    const ion = this.pickOne(ionesData);
    const esCat = ion.descripcion === "catión";
    const opciones = [ion.descripcion, esCat ? "anión" : "catión", "átomo neutro", "radical libre"];
    return this.crearQuiz({
      id: `${this.id}/iones_cationes_aniones/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "iones_cationes_aniones", dificultad: _d,
      enunciado: `El ion ${ion.simbolo} (${ion.particulas}) es:`,
      opciones, indiceCorrecto: 0,
      pasos: [
        `Carga = ${ion.carga > 0 ? "+" : ""}${ion.carga}.`,
        ion.carga > 0 ? "Tiene más protones que electrones → catión." : "Tiene más electrones que protones → anión.",
      ],
      datos: {},
    });
  }

  private genConfigElectronica(_d: Dificultad): Ejercicio {
    const el = this.pickOne(ELEMENTOS);
    const alts = ELEMENTOS.filter(e => e !== el).slice(0, 3).map(e => e.config);
    return this.crearQuiz({
      id: `${this.id}/configuracion_electronica/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "configuracion_electronica", dificultad: _d,
      enunciado: `¿Cuál es la configuración electrónica del ${el.nombre} (${el.simbolo}, Z = ${el.Z})?`,
      opciones: [el.config, ...alts], indiceCorrecto: 0,
      pasos: [`${el.simbolo} (Z = ${el.Z}): ${el.config} (principio Aufbau + Pauli + Hund).`],
      datos: {},
    });
  }

  private genNivelesSubniveles(_d: Dificultad): Ejercicio {
    const preguntas = [
      { pregunta: "¿Cuántos electrones caben en el subnivel 2p?", respuesta: "6", otros: ["2", "4", "8"] },
      { pregunta: "¿Cuántos orbitales tiene el subnivel 3d?", respuesta: "5", otros: ["3", "7", "1"] },
      { pregunta: "¿Cuántos electrones caben en el nivel n=3 completo?", respuesta: "18", otros: ["8", "10", "32"] },
      { pregunta: "¿Cuántos subniveles tiene el nivel n=4?", respuesta: "4 (s, p, d, f)", otros: ["2 (s, p)", "3 (s, p, d)", "5"] },
      { pregunta: "¿Cuántos electrones caben en el nivel n=2?", respuesta: "8", otros: ["2", "6", "18"] },
    ];
    const q = this.pickOne(preguntas);
    return this.crearQuiz({
      id: `${this.id}/niveles_subniveles/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "niveles_subniveles", dificultad: _d,
      enunciado: q.pregunta,
      opciones: [q.respuesta, ...q.otros], indiceCorrecto: 0,
      pasos: [`Respuesta: ${q.respuesta}.`],
      datos: {},
    });
  }

  private genOrbitales(_d: Dificultad): Ejercicio {
    const preguntas = [
      { pregunta: "¿Cuál es la forma del orbital s?", respuesta: "Esférica", otros: ["Doble lóbulo (haltera)", "Cuatro lóbulos", "Toroidal"] },
      { pregunta: "¿Cuántos orbitales p hay en un subnivel p?", respuesta: "3", otros: ["1", "5", "7"] },
      { pregunta: "¿Qué tipo de orbital puede tener hasta 2 electrones?", respuesta: "Cualquier orbital (máximo 2 e⁻ por orbital)", otros: ["Solo el orbital s", "Solo el orbital p", "Solo los orbitales f"] },
      { pregunta: "¿Cuántos orbitales d hay en el subnivel 3d?", respuesta: "5", otros: ["3", "7", "10"] },
    ];
    const q = this.pickOne(preguntas);
    return this.crearQuiz({
      id: `${this.id}/orbitales_spdf/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "orbitales_spdf", dificultad: _d,
      enunciado: q.pregunta,
      opciones: [q.respuesta, ...q.otros], indiceCorrecto: 0,
      pasos: [q.respuesta],
      datos: {},
    });
  }

  private genEnlaceIonico(_d: Dificultad): Ejercicio {
    const ejemplos = [
      { compuesto: "NaCl", componentes: "Na (metal, baja electroneg.) y Cl (no metal, alta electroneg.)", tipo: "iónico" },
      { compuesto: "MgO", componentes: "Mg y O", tipo: "iónico" },
      { compuesto: "KBr", componentes: "K y Br", tipo: "iónico" },
      { compuesto: "CaF₂", componentes: "Ca y F", tipo: "iónico" },
    ];
    const e = this.pickOne(ejemplos);
    const preguntas = [
      { pregunta: `¿Qué tipo de enlace predomina en ${e.compuesto} (${e.componentes})?`, respuesta: "Enlace iónico", otros: ["Enlace covalente polar", "Enlace covalente apolar", "Enlace metálico"] },
      { pregunta: "¿Cuál es una característica del enlace iónico?", respuesta: "Transferencia de electrones entre iones", otros: ["Compartición de electrones", "Mar de electrones libres", "Solo en metales"] },
    ];
    const q = this.pickOne(preguntas);
    return this.crearQuiz({
      id: `${this.id}/enlace_ionico/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "enlace_ionico", dificultad: _d,
      enunciado: q.pregunta,
      opciones: [q.respuesta, ...q.otros], indiceCorrecto: 0,
      pasos: [q.respuesta],
      datos: {},
    });
  }

  private genEnlaceCovalente(_d: Dificultad): Ejercicio {
    const preguntas = [
      { pregunta: "¿Cuántos pares de electrones comparte un enlace doble?", respuesta: "2 pares (4 electrones)", otros: ["1 par (2 electrones)", "3 pares (6 electrones)", "0 pares"] },
      { pregunta: "¿En qué compuesto predomina el enlace covalente polar?", respuesta: "HCl (H–Cl)", otros: ["Cl₂ (Cl–Cl)", "Na–Cl (NaCl)", "Cu metálico"] },
      { pregunta: "¿Cuántos enlaces covalentes puede formar el carbono (C) típicamente?", respuesta: "4", otros: ["2", "3", "6"] },
      { pregunta: "¿Cuál es la característica del enlace covalente apolar?", respuesta: "Compartición igual de electrones entre átomos iguales", otros: ["Transferencia de electrones", "Diferencia de electronegatividad grande", "Solo se da en metales"] },
    ];
    const q = this.pickOne(preguntas);
    return this.crearQuiz({
      id: `${this.id}/enlace_covalente/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "enlace_covalente", dificultad: _d,
      enunciado: q.pregunta,
      opciones: [q.respuesta, ...q.otros], indiceCorrecto: 0,
      pasos: [q.respuesta],
      datos: {},
    });
  }

  private genEnlaceMetalico(_d: Dificultad): Ejercicio {
    const preguntas = [
      { pregunta: "¿Cuál es el modelo que describe el enlace metálico?", respuesta: "Mar de electrones libres (electrones deslocalizados)", otros: ["Transferencia de electrones entre iones", "Compartición de electrones entre dos átomos", "Dipolo permanente"] },
      { pregunta: "¿Cuál propiedad se explica por el enlace metálico?", respuesta: "Alta conductividad eléctrica de los metales", otros: ["Fragilidad de los cristales de sal", "Alta electronegatividad del flúor", "Baja solubilidad en agua"] },
    ];
    const q = this.pickOne(preguntas);
    return this.crearQuiz({
      id: `${this.id}/enlace_metalico/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "enlace_metalico", dificultad: _d,
      enunciado: q.pregunta,
      opciones: [q.respuesta, ...q.otros], indiceCorrecto: 0,
      pasos: [q.respuesta],
      datos: {},
    });
  }

  private genPolaridad(_d: Dificultad): Ejercicio {
    const moleculas = [
      { formula: "H₂O", polar: true, razon: "tiene geometría angular y momentos dipolares que no se cancelan" },
      { formula: "CO₂", polar: false, razon: "es lineal y los momentos dipolares de los enlaces C=O se cancelan" },
      { formula: "HF",  polar: true, razon: "enlace covalente polar entre H y F (muy diferente electronegatividad)" },
      { formula: "Cl₂", polar: false, razon: "enlace entre átomos iguales → no hay dipolo" },
      { formula: "NH₃", polar: true, razon: "geometría piramidal con par libre → momento dipolar neto" },
    ];
    const m = this.pickOne(moleculas);
    const respuesta = m.polar ? "Polar" : "Apolar";
    const opts = [respuesta, m.polar ? "Apolar" : "Polar", "Iónica", "No se puede determinar"];
    return this.crearQuiz({
      id: `${this.id}/polaridad_enlaces/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "polaridad_enlaces", dificultad: _d,
      enunciado: `La molécula ${m.formula} es:`,
      opciones: opts, indiceCorrecto: 0,
      pasos: [`${m.formula} es ${respuesta.toLowerCase()} porque ${m.razon}.`],
      datos: {},
    });
  }

  private genGeometria(_d: Dificultad): Ejercicio {
    const g = this.pickOne(GEOMETRIAS);
    return this.crearQuiz({
      id: `${this.id}/geometria_molecular/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "geometria_molecular", dificultad: _d,
      enunciado: `Según la teoría VSEPR, ¿cuál es la geometría molecular de ${g.formula}?`,
      opciones: [g.geometria, ...g.otras], indiceCorrecto: 0,
      pasos: [`La geometría de ${g.formula} es ${g.geometria} (VSEPR).`],
      datos: {},
    });
  }

  private genSustanciaMezcla(_d: Dificultad): Ejercicio {
    const preguntas = [
      { pregunta: "¿Cuál es un ejemplo de sustancia pura?", respuesta: "Agua destilada (H₂O)", otros: ["Agua de mar", "Aire", "Acero"] },
      { pregunta: "¿Cuál es una característica de una mezcla?", respuesta: "Sus componentes pueden separarse por métodos físicos", otros: ["Composición fija y constante", "Solo un tipo de partícula", "Siempre en estado líquido"] },
      { pregunta: "Una sustancia pura puede ser:", respuesta: "Elemento o compuesto", otros: ["Solo un elemento", "Solo un compuesto", "Siempre una mezcla homogénea"] },
    ];
    const q = this.pickOne(preguntas);
    return this.crearQuiz({
      id: `${this.id}/sustancia_pura_mezcla/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "sustancia_pura_mezcla", dificultad: _d,
      enunciado: q.pregunta,
      opciones: [q.respuesta, ...q.otros], indiceCorrecto: 0,
      pasos: [q.respuesta],
      datos: {},
    });
  }

  private genMezclaHomHet(_d: Dificultad): Ejercicio {
    const preguntas = [
      { pregunta: "¿Cuál es un ejemplo de mezcla homogénea?", respuesta: "Solución de azúcar en agua", otros: ["Arena y piedras", "Aceite y agua", "Ensalada de frutas"] },
      { pregunta: "¿Cuál es un ejemplo de mezcla heterogénea?", respuesta: "Arena y sal mezcladas", otros: ["Aire seco", "Agua con alcohol", "Café negro sin posos"] },
      { pregunta: "¿Qué caracteriza a una mezcla homogénea?", respuesta: "Composición y apariencia uniformes en toda la muestra", otros: ["Se pueden ver sus componentes a simple vista", "Sus componentes están en fases distintas", "Siempre es líquida"] },
    ];
    const q = this.pickOne(preguntas);
    return this.crearQuiz({
      id: `${this.id}/mezcla_homogenea_heterogenea/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "mezcla_homogenea_heterogenea", dificultad: _d,
      enunciado: q.pregunta,
      opciones: [q.respuesta, ...q.otros], indiceCorrecto: 0,
      pasos: [q.respuesta],
      datos: {},
    });
  }

  private genMetodosSeparacion(_d: Dificultad): Ejercicio {
    const m = this.pickOne(METODOS_SEP);
    return this.crearQuiz({
      id: `${this.id}/metodos_separacion/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "metodos_separacion", dificultad: _d,
      enunciado: `¿Qué método de separación es más adecuado para separar ${m.mezcla}?`,
      opciones: [m.metodo, ...m.otros], indiceCorrecto: 0,
      pasos: [`Para ${m.mezcla} se usa ${m.metodo}.`],
      datos: {},
    });
  }

  private genPropiedades(_d: Dificultad): Ejercicio {
    const preguntas = [
      { pregunta: "¿Cuál es una propiedad química del hierro?", respuesta: "Se oxida (forma óxido de hierro, herrumbre)", otros: ["Tiene color gris", "Es maleable", "Conduce electricidad"] },
      { pregunta: "¿Cuál es una propiedad física del agua?", respuesta: "Punto de ebullición 100 °C", otros: ["Reacciona con metales alcalinos", "Puede oxidarse", "Arde en presencia de oxígeno"] },
      { pregunta: "¿Cuál es una propiedad química?", respuesta: "Inflamabilidad del metano", otros: ["Dureza del diamante", "Densidad del plomo", "Color del azufre"] },
    ];
    const q = this.pickOne(preguntas);
    return this.crearQuiz({
      id: `${this.id}/propiedades_fisicas_quimicas/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo: "propiedades_fisicas_quimicas", dificultad: _d,
      enunciado: q.pregunta,
      opciones: [q.respuesta, ...q.otros], indiceCorrecto: 0,
      pasos: [q.respuesta],
      datos: {},
    });
  }

  private genTipoReaccion(tipo: string, d: Dificultad): Ejercicio {
    const subtipo = tipo === "síntesis" ? "sintesis"
      : tipo === "descomposición" ? "descomposicion"
      : tipo === "desplazamiento" ? "desplazamiento"
      : tipo === "combustión" ? "combustion"
      : tipo === "neutralización" ? "neutralizacion_tipo"
      : "precipitacion_tipo";

    const candidatas = REACCIONES_TIPO.filter(r => r.tipo === tipo);
    const r = candidatas.length > 0 ? this.pickOne(candidatas) : this.pickOne(REACCIONES_TIPO);
    return this.crearQuiz({
      id: `${this.id}/${subtipo}/${this.randInt(1e5, 9e5)}`,
      materia: this.materia, subtipo, dificultad: d,
      enunciado: `¿Qué tipo de reacción química es la siguiente?\n${r.ecuacion}`,
      opciones: [r.tipo, ...r.otros], indiceCorrecto: 0,
      pasos: [`Es una reacción de ${r.tipo}: ${r.ecuacion}`],
      datos: {},
    });
  }
}
