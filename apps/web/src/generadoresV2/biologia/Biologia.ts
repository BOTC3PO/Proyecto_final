import { BaseGenerador } from "../core/baseGenerador";
import type { PRNG } from "../core/prng";
import type { Dificultad, Ejercicio, Calculator } from "../core/types";

// ─── Genética de Mendel ─────────────────────────────────────────────────────────

interface CruceData {
  padre1: string;
  padre2: string;
  descripcion: string;
  proporciones: Record<string, string>;
  fenotipoDom: string;
  fenotipoRec: string;
}

const CRUCES: CruceData[] = [
  {
    padre1: "Aa",
    padre2: "Aa",
    descripcion: "monohíbrido (Aa × Aa)",
    proporciones: { AA: "1/4", Aa: "2/4", aa: "1/4" },
    fenotipoDom: "3/4",
    fenotipoRec: "1/4",
  },
  {
    padre1: "AA",
    padre2: "aa",
    descripcion: "líneas puras (AA × aa)",
    proporciones: { AA: "0", Aa: "4/4", aa: "0" },
    fenotipoDom: "1",
    fenotipoRec: "0",
  },
  {
    padre1: "Aa",
    padre2: "aa",
    descripcion: "retrocruzamiento (Aa × aa)",
    proporciones: { AA: "0", Aa: "1/2", aa: "1/2" },
    fenotipoDom: "1/2",
    fenotipoRec: "1/2",
  },
];

const FRACCIONES = ["0", "1/4", "1/2", "3/4", "1"];

// ─── Pirámide de biomasas ───────────────────────────────────────────────────────

const BIOMASAS_PRODUCTORES = [100, 200, 500, 1000, 2000, 5000, 10000];

// ─── Clasificación de seres vivos ───────────────────────────────────────────────

interface SerVivo {
  nombre: string;
  reino: string;
  celula: "eucariota" | "procariota";
  nutricion: "autótrofo" | "heterótrofo";
}

const SERES_VIVOS: SerVivo[] = [
  { nombre: "Escherichia coli (bacteria)", reino: "Monera", celula: "procariota", nutricion: "heterótrofo" },
  { nombre: "Chlamydomonas (alga verde unicelular)", reino: "Protista", celula: "eucariota", nutricion: "autótrofo" },
  { nombre: "Penicillium (hongo)", reino: "Fungi", celula: "eucariota", nutricion: "heterótrofo" },
  { nombre: "Helecho (Pteridophyta)", reino: "Plantae", celula: "eucariota", nutricion: "autótrofo" },
  { nombre: "Perro (Canis lupus familiaris)", reino: "Animalia", celula: "eucariota", nutricion: "heterótrofo" },
  { nombre: "Anabaena (cianobacteria)", reino: "Monera", celula: "procariota", nutricion: "autótrofo" },
  { nombre: "Amoeba proteus", reino: "Protista", celula: "eucariota", nutricion: "heterótrofo" },
  { nombre: "Roble (Quercus robur)", reino: "Plantae", celula: "eucariota", nutricion: "autótrofo" },
  { nombre: "Saccharomyces cerevisiae (levadura)", reino: "Fungi", celula: "eucariota", nutricion: "heterótrofo" },
  { nombre: "Pez payaso (Amphiprioninae)", reino: "Animalia", celula: "eucariota", nutricion: "heterótrofo" },
];

const REINOS_OPCIONES = ["Monera", "Protista", "Fungi", "Plantae", "Animalia"];

// ─── Generador ──────────────────────────────────────────────────────────────────

export class BiologiaGenerator extends BaseGenerador {
  readonly id = "biologia/biologia";
  readonly materia = "biologia" as const;
  readonly subtipos = ["genetica_mendel", "piramide_biomasas", "clasificacion_seres_vivos"];

  constructor(prng: PRNG) {
    super(prng);
  }

  generarEjercicio(subtipo: string, dificultad: Dificultad, _calc: Calculator): Ejercicio {
    switch (subtipo) {
      case "genetica_mendel":
        return this.genGeneticaMendel(dificultad);
      case "piramide_biomasas":
        return this.genPiramideBiomasas(dificultad);
      case "clasificacion_seres_vivos":
        return this.genClasificacion(dificultad);
      default:
        return this.genGeneticaMendel(dificultad);
    }
  }

  // ── Genética de Mendel ──────────────────────────────────────────────────────

  private genGeneticaMendel(dificultad: Dificultad): Ejercicio {
    const cruce = this.pickOne(CRUCES);

    let pregunta: string;
    let respuesta: string;

    if (dificultad === "basico") {
      pregunta = "fenotipo dominante";
      respuesta = cruce.fenotipoDom;
    } else if (dificultad === "intermedio") {
      pregunta = "fenotipo recesivo";
      respuesta = cruce.fenotipoRec;
    } else {
      pregunta = "genotipo homocigoto recesivo (aa)";
      respuesta = cruce.proporciones["aa"] ?? "0";
    }

    const otros = FRACCIONES.filter(f => f !== respuesta);
    const distractores = this.shuffle(otros).slice(0, 3);
    const opciones = [respuesta, ...distractores];

    return this.crearQuiz({
      id: `${this.id}/genetica_mendel/${this.randInt(1e5, 9e5)}`,
      materia: this.materia,
      subtipo: "genetica_mendel",
      dificultad,
      enunciado: `En el cruce ${cruce.padre1} × ${cruce.padre2} (${cruce.descripcion}), ¿cuál es la proporción esperada de descendencia con ${pregunta}?`,
      opciones,
      indiceCorrecto: 0,
      explicacion: `Cuadro de Punnett para ${cruce.descripcion}: fenotipo dominante = ${cruce.fenotipoDom}, fenotipo recesivo = ${cruce.fenotipoRec}. Proporción de genotipo aa = ${cruce.proporciones["aa"]}.`,
    });
  }

  // ── Pirámide de biomasas ────────────────────────────────────────────────────

  private genPiramideBiomasas(dificultad: Dificultad): Ejercicio {
    if (dificultad === "basico") {
      const productor = this.pickOne(BIOMASAS_PRODUCTORES);
      const consumidor1 = productor / 10;
      const opciones = [
        `${consumidor1} kg`,
        `${productor / 2} kg`,
        `${productor / 5} kg`,
        `${productor} kg`,
      ];
      return this.crearQuiz({
        id: `${this.id}/piramide_biomasas/${this.randInt(1e5, 9e5)}`,
        materia: this.materia,
        subtipo: "piramide_biomasas",
        dificultad,
        enunciado: `Un ecosistema tiene ${productor} kg de biomasa en el nivel productor. Aplicando la regla del 10%, ¿cuánta biomasa habrá en el nivel de los consumidores primarios?`,
        opciones,
        indiceCorrecto: 0,
        explicacion: `La regla del 10% indica que solo el 10% de la biomasa se transfiere al siguiente nivel trófico. ${productor} × 0,1 = ${consumidor1} kg.`,
      });
    }

    if (dificultad === "intermedio") {
      const productor = this.pickOne(BIOMASAS_PRODUCTORES);
      const consumidor1 = productor / 10;
      const consumidor2 = productor / 100;
      const opciones = [
        `${consumidor2} kg`,
        `${consumidor1} kg`,
        `${productor / 20} kg`,
        `${productor / 50} kg`,
      ];
      return this.crearQuiz({
        id: `${this.id}/piramide_biomasas/${this.randInt(1e5, 9e5)}`,
        materia: this.materia,
        subtipo: "piramide_biomasas",
        dificultad,
        enunciado: `Un ecosistema tiene ${productor} kg de biomasa en los productores. Aplicando la regla del 10% dos veces consecutivas, ¿cuánta biomasa habrá en el nivel de los consumidores secundarios?`,
        opciones,
        indiceCorrecto: 0,
        explicacion: `Productores → consumidores primarios: ${productor} × 0,1 = ${consumidor1} kg. Consumidores primarios → secundarios: ${consumidor1} × 0,1 = ${consumidor2} kg.`,
      });
    }

    // avanzado: dado el consumidor terciario, calcular biomasa del productor
    const consumidorTerciario = this.pickOne([1, 2, 5, 10, 20]);
    const productor = consumidorTerciario * 1000;
    const opciones = [
      `${productor} kg`,
      `${consumidorTerciario * 100} kg`,
      `${consumidorTerciario * 10} kg`,
      `${consumidorTerciario * 10000} kg`,
    ];
    return this.crearQuiz({
      id: `${this.id}/piramide_biomasas/${this.randInt(1e5, 9e5)}`,
      materia: this.materia,
      subtipo: "piramide_biomasas",
      dificultad,
      enunciado: `Los consumidores terciarios (4.° nivel trófico) tienen ${consumidorTerciario} kg de biomasa. Aplicando la regla del 10%, ¿cuánta biomasa se necesita en el nivel productor (1.° nivel) para sostener esa cantidad?`,
      opciones,
      indiceCorrecto: 0,
      explicacion: `Para subir tres niveles tróficos la relación es inversa: × (1/0,1)³ = × 1000. ${consumidorTerciario} × 1000 = ${productor} kg en el nivel productor.`,
    });
  }

  // ── Clasificación de seres vivos ────────────────────────────────────────────

  private genClasificacion(dificultad: Dificultad): Ejercicio {
    const ser = this.pickOne(SERES_VIVOS);

    if (dificultad === "basico") {
      const otrosReinos = REINOS_OPCIONES.filter(r => r !== ser.reino);
      const distractores = this.shuffle(otrosReinos).slice(0, 3);
      const opciones = [ser.reino, ...distractores];
      return this.crearQuiz({
        id: `${this.id}/clasificacion_seres_vivos/${this.randInt(1e5, 9e5)}`,
        materia: this.materia,
        subtipo: "clasificacion_seres_vivos",
        dificultad,
        enunciado: `¿A qué reino pertenece ${ser.nombre}?`,
        opciones,
        indiceCorrecto: 0,
        explicacion: `${ser.nombre} pertenece al reino ${ser.reino}. Sus células son ${ser.celula}s y su tipo de nutrición es ${ser.nutricion}.`,
      });
    }

    if (dificultad === "intermedio") {
      const correcta = ser.celula;
      const incorrecta = ser.celula === "eucariota" ? "procariota" : "eucariota";
      const opciones = [correcta, incorrecta, "acelular", "multicelular sin núcleo"];
      return this.crearQuiz({
        id: `${this.id}/clasificacion_seres_vivos/${this.randInt(1e5, 9e5)}`,
        materia: this.materia,
        subtipo: "clasificacion_seres_vivos",
        dificultad,
        enunciado: `¿Qué tipo de organización celular tiene ${ser.nombre} (reino ${ser.reino})?`,
        opciones,
        indiceCorrecto: 0,
        explicacion: `${ser.nombre} es ${ser.celula}. ${ser.celula === "procariota" ? "No posee núcleo definido ni orgánulos membranosos." : "Posee núcleo verdadero delimitado por membrana nuclear y orgánulos membranosos."}`,
      });
    }

    // avanzado: tipo de nutrición
    const correcta = ser.nutricion;
    const incorrecta = ser.nutricion === "autótrofo" ? "heterótrofo" : "autótrofo";
    const opciones = [correcta, incorrecta, "mixótrofo", "quimiolitótrofo"];
    return this.crearQuiz({
      id: `${this.id}/clasificacion_seres_vivos/${this.randInt(1e5, 9e5)}`,
      materia: this.materia,
      subtipo: "clasificacion_seres_vivos",
      dificultad,
      enunciado: `¿Cómo obtiene su energía ${ser.nombre} (reino ${ser.reino}, célula ${ser.celula})?`,
      opciones,
      indiceCorrecto: 0,
      explicacion: `${ser.nombre} es ${ser.nutricion}. ${ser.nutricion === "autótrofo" ? "Fabrica su propio alimento a partir de fuentes inorgánicas mediante fotosíntesis o quimiosíntesis." : "Obtiene energía consumiendo materia orgánica producida por otros organismos."}`,
    });
  }
}
