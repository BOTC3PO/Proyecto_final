import { BaseGenerador } from "../core/baseGenerador";
import type { PRNG } from "../core/prng";
import type { Dificultad, Ejercicio, Calculator } from "../core/types";

const PICTOGRAMAS = [
  {
    codigo: "GHS01",
    nombre: "Explosivo",
    descripcion: "sustancias y mezclas explosivas, reactivas, o que forman gases inflamables",
    ejemplos: ["TNT", "nitroglicerina", "pólvora"],
  },
  {
    codigo: "GHS02",
    nombre: "Inflamable",
    descripcion: "líquidos, gases, aerosoles y sólidos inflamables",
    ejemplos: ["etanol", "gasolina", "acetona"],
  },
  {
    codigo: "GHS03",
    nombre: "Comburente",
    descripcion: "sustancias oxidantes que pueden provocar o intensificar un incendio",
    ejemplos: ["peróxido de hidrógeno", "nitrato de potasio", "cloro"],
  },
  {
    codigo: "GHS04",
    nombre: "Gas a presión",
    descripcion: "gases comprimidos, licuados o disueltos a presión",
    ejemplos: ["nitrógeno comprimido", "gas propano", "dióxido de carbono"],
  },
  {
    codigo: "GHS05",
    nombre: "Corrosivo",
    descripcion: "sustancias que causan corrosión en metales o quemaduras en la piel",
    ejemplos: ["ácido sulfúrico", "hidróxido de sodio", "ácido clorhídrico"],
  },
  {
    codigo: "GHS06",
    nombre: "Tóxico agudo",
    descripcion: "sustancias muy tóxicas por inhalación, ingestión o contacto con la piel",
    ejemplos: ["cianuro de potasio", "arseniato de sodio", "estricnina"],
  },
  {
    codigo: "GHS07",
    nombre: "Irritante/Nocivo",
    descripcion: "sustancias irritantes para piel, ojos o sistema respiratorio",
    ejemplos: ["amoníaco diluido", "cloro a bajas concentraciones", "acetaldehído"],
  },
  {
    codigo: "GHS08",
    nombre: "Peligro para la salud",
    descripcion: "carcinógenos, mutágenos, sustancias tóxicas para la reproducción",
    ejemplos: ["benceno", "formaldehído", "cloruro de vinilo"],
  },
  {
    codigo: "GHS09",
    nombre: "Peligro ambiental",
    descripcion: "sustancias muy tóxicas para organismos acuáticos",
    ejemplos: ["mercurio", "plomo", "pesticidas organoclorados"],
  },
];

const INFLAMABLES = [
  {
    sustancia: "etanol",
    formula: "C₂H₅OH",
    puntoIgnicion: 13,
    clasificacion: "líquido inflamable",
    medidas: ["almacenar lejos de fuentes de calor", "evitar llamas abiertas", "usar recipientes cerrados"],
  },
  {
    sustancia: "acetona",
    formula: "CH₃COCH₃",
    puntoIgnicion: -18,
    clasificacion: "líquido muy inflamable",
    medidas: ["ventilar el área", "no usar cerca de equipos eléctricos", "almacenar en lugar fresco"],
  },
  {
    sustancia: "hexano",
    formula: "C₆H₁₄",
    puntoIgnicion: -22,
    clasificacion: "líquido extremadamente inflamable",
    medidas: ["eliminar toda fuente de ignición", "usar ropa antiestática", "extractor de vapores obligatorio"],
  },
  {
    sustancia: "hidrógeno",
    formula: "H₂",
    puntoIgnicion: -253,
    clasificacion: "gas inflamable extremadamente peligroso",
    medidas: ["detectores de fugas", "ventilación forzada", "prohibir llamas en el área"],
  },
];

const TOXICOS = [
  {
    sustancia: "cianuro de potasio",
    formula: "KCN",
    ruta: "inhalación, ingestión, contacto cutáneo",
    dosis: "DL₅₀ oral (rat): 5 mg/kg",
    sintomas: "mareo, dolor de cabeza, convulsiones, paro cardiorrespiratorio",
    primeros_auxilios: "alejar de la exposición, llamar emergencias, administrar antídoto (hidroxocobalamina)",
  },
  {
    sustancia: "plomo",
    formula: "Pb",
    ruta: "inhalación de polvo, ingestión",
    dosis: "acumulativo; tóxico por exposición crónica",
    sintomas: "anemia, daño neurológico, encefalopatía",
    primeros_auxilios: "remover contaminación, lavado de piel y ojos, atención médica",
  },
  {
    sustancia: "mercurio",
    formula: "Hg",
    ruta: "inhalación de vapores, contacto dérmico",
    dosis: "IDLH: 10 mg/m³ (vapor)",
    sintomas: "temblores, daño renal, pérdida de memoria",
    primeros_auxilios: "evacuar área, no tocar el derrame, llamar servicios de emergencia",
  },
  {
    sustancia: "ácido sulfhídrico",
    formula: "H₂S",
    ruta: "inhalación",
    dosis: "IDLH: 50 ppm",
    sintomas: "irritación ocular y respiratoria, pérdida del olfato, edema pulmonar",
    primeros_auxilios: "retirar a víctima al aire fresco, ventilación artificial si es necesario",
  },
];

const EPPS = [
  {
    equipo: "gafas de seguridad",
    tipo: "protección ocular",
    uso: "protege los ojos de salpicaduras químicas y partículas",
    cuando: "siempre que se manipulen líquidos corrosivos, volátiles o bajo presión",
  },
  {
    equipo: "guantes de nitrilo",
    tipo: "protección de manos",
    uso: "barrera química frente a ácidos, bases y solventes orgánicos",
    cuando: "manipulación de sustancias corrosivas, tóxicas o irritantes",
  },
  {
    equipo: "bata de laboratorio",
    tipo: "protección corporal",
    uso: "protege la ropa y la piel de salpicaduras",
    cuando: "toda práctica de laboratorio con reactivos químicos",
  },
  {
    equipo: "respirador con filtro",
    tipo: "protección respiratoria",
    uso: "filtra vapores orgánicos, ácidos o partículas tóxicas",
    cuando: "manejo de solventes volátiles, ácidos concentrados o polvos tóxicos",
  },
  {
    equipo: "pantalla facial",
    tipo: "protección facial completa",
    uso: "protege cara completa de salpicaduras de grandes volúmenes de líquido",
    cuando: "trasvase de ácidos o bases concentradas en grandes volúmenes",
  },
  {
    equipo: "botas de seguridad",
    tipo: "protección de pies",
    uso: "protege pies de derrames y objetos pesados",
    cuando: "laboratorios industriales o áreas de almacenamiento de reactivos",
  },
];

export class SeguridadGenerator extends BaseGenerador {
  readonly id = "quimica/seguridad";
  readonly materia = "quimica";
  readonly subtipos = [
    "pictogramas_ghs", "materiales_inflamables", "riesgos_toxicos", "equipos_proteccion",
  ];

  constructor(prng: PRNG) { super(prng); }

  generarEjercicio(subtipo: string, dificultad: Dificultad, _calc: Calculator): Ejercicio {
    switch (subtipo) {
      case "pictogramas_ghs":       return this.genPictogramas(dificultad);
      case "materiales_inflamables": return this.genInflamables(dificultad);
      case "riesgos_toxicos":       return this.genToxicos(dificultad);
      default:                      return this.genEPP(dificultad);
    }
  }

  private genPictogramas(dificultad: Dificultad): Ejercicio {
    const p = this.pickOne(PICTOGRAMAS);
    const tipo = dificultad === "basico"
      ? "nombre"
      : dificultad === "intermedio"
        ? "descripcion"
        : "ejemplo";

    if (tipo === "nombre") {
      // Given code, identify name
      const otras = PICTOGRAMAS.filter(x => x.codigo !== p.codigo).slice(0, 3).map(x => x.nombre);
      const opts = this.shuffle([p.nombre, ...otras]);
      const idx = opts.indexOf(p.nombre);
      return this.crearQuiz({
        id: `${this.id}/pictogramas_ghs/${this.randInt(1e5, 9e5)}`,
        materia: this.materia, subtipo: "pictogramas_ghs", dificultad,
        enunciado: `El pictograma ${p.codigo} del sistema GHS/SGA corresponde a la categoría de peligro:`,
        opciones: opts, indiceCorrecto: idx,
        pasos: [
          `${p.codigo} es el pictograma de "${p.nombre}".`,
          `Indica: ${p.descripcion}.`,
        ],
        datos: { codigo: p.codigo },
      });
    } else if (tipo === "descripcion") {
      // Given name, choose correct description
      const otras = PICTOGRAMAS.filter(x => x.codigo !== p.codigo).slice(0, 3).map(x => x.descripcion);
      const opts = this.shuffle([p.descripcion, ...otras]);
      const idx = opts.indexOf(p.descripcion);
      return this.crearQuiz({
        id: `${this.id}/pictogramas_ghs/${this.randInt(1e5, 9e5)}`,
        materia: this.materia, subtipo: "pictogramas_ghs", dificultad,
        enunciado: `¿Qué tipo de sustancias indica el pictograma GHS "${p.nombre}" (${p.codigo})?`,
        opciones: opts, indiceCorrecto: idx,
        pasos: [
          `El pictograma ${p.codigo} ("${p.nombre}") se aplica a: ${p.descripcion}.`,
        ],
        datos: { codigo: p.codigo, nombre: p.nombre },
      });
    } else {
      // Given an example, identify the pictogram
      const ej = this.pickOne(p.ejemplos);
      const otras = PICTOGRAMAS.filter(x => x.codigo !== p.codigo).slice(0, 3).map(x => x.nombre);
      const opts = this.shuffle([p.nombre, ...otras]);
      const idx = opts.indexOf(p.nombre);
      return this.crearQuiz({
        id: `${this.id}/pictogramas_ghs/${this.randInt(1e5, 9e5)}`,
        materia: this.materia, subtipo: "pictogramas_ghs", dificultad,
        enunciado: `El ${ej} es un ejemplo de sustancia que lleva el pictograma GHS de peligro:`,
        opciones: opts, indiceCorrecto: idx,
        pasos: [
          `El ${ej} pertenece a la categoría "${p.nombre}" (${p.codigo}).`,
          `${p.descripcion}.`,
        ],
        datos: { ejemplo: ej },
      });
    }
  }

  private genInflamables(dificultad: Dificultad): Ejercicio {
    const f = this.pickOne(INFLAMABLES);
    const variante = dificultad === "basico" ? "clasificacion" : dificultad === "intermedio" ? "punto" : "medida";

    if (variante === "clasificacion") {
      const otras = INFLAMABLES.filter(x => x.sustancia !== f.sustancia).map(x => x.clasificacion);
      const opts = this.shuffle([f.clasificacion, ...otras.slice(0, 3)]);
      const idx = opts.indexOf(f.clasificacion);
      return this.crearQuiz({
        id: `${this.id}/materiales_inflamables/${this.randInt(1e5, 9e5)}`,
        materia: this.materia, subtipo: "materiales_inflamables", dificultad,
        enunciado: `¿Cómo se clasifica el ${f.sustancia} (${f.formula}) según su inflamabilidad?`,
        opciones: opts, indiceCorrecto: idx,
        pasos: [
          `El ${f.sustancia} es un ${f.clasificacion}.`,
          `Su punto de ignición es ${f.puntoIgnicion} °C.`,
        ],
        datos: { sustancia: f.sustancia },
      });
    } else if (variante === "punto") {
      const otras = INFLAMABLES.filter(x => x.sustancia !== f.sustancia).map(x => `${x.puntoIgnicion} °C`);
      const opts = this.shuffle([`${f.puntoIgnicion} °C`, ...otras.slice(0, 3)]);
      const idx = opts.indexOf(`${f.puntoIgnicion} °C`);
      return this.crearQuiz({
        id: `${this.id}/materiales_inflamables/${this.randInt(1e5, 9e5)}`,
        materia: this.materia, subtipo: "materiales_inflamables", dificultad,
        enunciado: `El ${f.sustancia} (${f.formula}) está clasificado como "${f.clasificacion}". ¿Cuál es su punto de ignición aproximado?`,
        opciones: opts, indiceCorrecto: idx,
        pasos: [
          `El punto de ignición del ${f.sustancia} es aproximadamente ${f.puntoIgnicion} °C.`,
          "Un punto de ignición más bajo implica mayor peligro de inflamación.",
        ],
        datos: { sustancia: f.sustancia },
      });
    } else {
      // medidas de seguridad
      const medida = this.pickOne(f.medidas);
      const otrasMedidas = INFLAMABLES
        .filter(x => x.sustancia !== f.sustancia)
        .flatMap(x => x.medidas)
        .filter(m => !f.medidas.includes(m))
        .slice(0, 3);
      const opts = this.shuffle([medida, ...otrasMedidas]);
      const idx = opts.indexOf(medida);
      return this.crearQuiz({
        id: `${this.id}/materiales_inflamables/${this.randInt(1e5, 9e5)}`,
        materia: this.materia, subtipo: "materiales_inflamables", dificultad,
        enunciado: `Al manipular ${f.sustancia} (${f.formula}), un ${f.clasificacion}, ¿cuál de las siguientes es una medida de seguridad correcta?`,
        opciones: opts, indiceCorrecto: idx,
        pasos: [
          `Para manejar ${f.sustancia} de forma segura se debe: ${f.medidas.join("; ")}.`,
        ],
        datos: { sustancia: f.sustancia },
      });
    }
  }

  private genToxicos(dificultad: Dificultad): Ejercicio {
    const t = this.pickOne(TOXICOS);
    const variante = dificultad === "basico" ? "ruta" : dificultad === "intermedio" ? "sintomas" : "aux";

    if (variante === "ruta") {
      const otras = TOXICOS.filter(x => x.sustancia !== t.sustancia).map(x => x.ruta);
      const opts = this.shuffle([t.ruta, ...otras.slice(0, 3)]);
      const idx = opts.indexOf(t.ruta);
      return this.crearQuiz({
        id: `${this.id}/riesgos_toxicos/${this.randInt(1e5, 9e5)}`,
        materia: this.materia, subtipo: "riesgos_toxicos", dificultad,
        enunciado: `¿Cuáles son las principales rutas de exposición tóxica al ${t.sustancia} (${t.formula})?`,
        opciones: opts, indiceCorrecto: idx,
        pasos: [
          `El ${t.sustancia} es tóxico principalmente por: ${t.ruta}.`,
          `Datos toxicológicos: ${t.dosis}.`,
        ],
        datos: { sustancia: t.sustancia },
      });
    } else if (variante === "sintomas") {
      const otras = TOXICOS.filter(x => x.sustancia !== t.sustancia).map(x => x.sintomas);
      const opts = this.shuffle([t.sintomas, ...otras.slice(0, 3)]);
      const idx = opts.indexOf(t.sintomas);
      return this.crearQuiz({
        id: `${this.id}/riesgos_toxicos/${this.randInt(1e5, 9e5)}`,
        materia: this.materia, subtipo: "riesgos_toxicos", dificultad,
        enunciado: `La intoxicación por ${t.sustancia} (${t.formula}) produce los siguientes síntomas:`,
        opciones: opts, indiceCorrecto: idx,
        pasos: [
          `Síntomas de intoxicación por ${t.sustancia}: ${t.sintomas}.`,
          `Ruta de exposición: ${t.ruta}.`,
        ],
        datos: { sustancia: t.sustancia },
      });
    } else {
      const otras = TOXICOS.filter(x => x.sustancia !== t.sustancia).map(x => x.primeros_auxilios);
      const opts = this.shuffle([t.primeros_auxilios, ...otras.slice(0, 3)]);
      const idx = opts.indexOf(t.primeros_auxilios);
      return this.crearQuiz({
        id: `${this.id}/riesgos_toxicos/${this.randInt(1e5, 9e5)}`,
        materia: this.materia, subtipo: "riesgos_toxicos", dificultad,
        enunciado: `Ante una exposición accidental al ${t.sustancia} (${t.formula}), los primeros auxilios correctos son:`,
        opciones: opts, indiceCorrecto: idx,
        pasos: [
          `Primeros auxilios ante exposición a ${t.sustancia}: ${t.primeros_auxilios}.`,
        ],
        datos: { sustancia: t.sustancia },
      });
    }
  }

  private genEPP(dificultad: Dificultad): Ejercicio {
    const e = this.pickOne(EPPS);
    const variante = dificultad === "basico" ? "uso" : dificultad === "intermedio" ? "cuando" : "tipo";

    if (variante === "uso") {
      const otras = EPPS.filter(x => x.equipo !== e.equipo).slice(0, 3).map(x => x.uso);
      const opts = this.shuffle([e.uso, ...otras]);
      const idx = opts.indexOf(e.uso);
      return this.crearQuiz({
        id: `${this.id}/equipos_proteccion/${this.randInt(1e5, 9e5)}`,
        materia: this.materia, subtipo: "equipos_proteccion", dificultad,
        enunciado: `¿Para qué sirven los ${e.equipo} en el laboratorio?`,
        opciones: opts, indiceCorrecto: idx,
        pasos: [
          `Los ${e.equipo} (${e.tipo}) se utilizan para: ${e.uso}.`,
        ],
        datos: { equipo: e.equipo },
      });
    } else if (variante === "cuando") {
      const otras = EPPS.filter(x => x.equipo !== e.equipo).slice(0, 3).map(x => x.cuando);
      const opts = this.shuffle([e.cuando, ...otras]);
      const idx = opts.indexOf(e.cuando);
      return this.crearQuiz({
        id: `${this.id}/equipos_proteccion/${this.randInt(1e5, 9e5)}`,
        materia: this.materia, subtipo: "equipos_proteccion", dificultad,
        enunciado: `¿Cuándo es obligatorio usar ${e.equipo} en el laboratorio?`,
        opciones: opts, indiceCorrecto: idx,
        pasos: [
          `Se deben usar ${e.equipo} cuando: ${e.cuando}.`,
          `Función: ${e.uso}.`,
        ],
        datos: { equipo: e.equipo },
      });
    } else {
      // Given a description of use, identify the EPP
      const otras = EPPS.filter(x => x.equipo !== e.equipo).slice(0, 3).map(x => x.equipo);
      const opts = this.shuffle([e.equipo, ...otras]);
      const idx = opts.indexOf(e.equipo);
      return this.crearQuiz({
        id: `${this.id}/equipos_proteccion/${this.randInt(1e5, 9e5)}`,
        materia: this.materia, subtipo: "equipos_proteccion", dificultad,
        enunciado: `Se necesita un equipo de protección para: "${e.cuando}". ¿Qué EPP es el más indicado?`,
        opciones: opts, indiceCorrecto: idx,
        pasos: [
          `Para esta situación se requiere: ${e.equipo}.`,
          `Función: ${e.uso}.`,
        ],
        datos: {},
      });
    }
  }
}
