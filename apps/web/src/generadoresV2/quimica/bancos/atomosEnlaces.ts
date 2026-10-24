/**
 * F6-03 — Bancos estáticos de AtomosEnlaces (química).
 *
 * Extraídos de `apps/web/src/generadoresV2/quimica/AtomosEnlaces.ts`
 * (NO modificados — siguen vivos hasta F6-06). Cada banco corresponde a
 * un subtipo BANCO del generador (criterio: hardcoded pickOne de un
 * array, sin PRNG para la respuesta).
 *
 * Bancos migrados (18):
 *   - tabla_periodica_clasificacion (16)
 *   - tendencias_periodicas (3)
 *   - iones_cationes_aniones (5)
 *   - niveles_subniveles (5)
 *   - orbitales_spdf (4)
 *   - enlace_ionico (8: 4 ejemplos × 2 preguntas)
 *   - enlace_covalente (4)
 *   - enlace_metalico (2)
 *   - polaridad_enlaces (5)
 *   - geometria_molecular (7)
 *   - sustancia_pura_mezcla (3)
 *   - mezcla_homogenea_heterogenea (3)
 *   - metodos_separacion (5)
 *   - propiedades_fisicas_quimicas (3)
 *   - sintesis (1)
 *   - descomposicion (1)
 *   - desplazamiento (1)
 *   - combustion (1)
 *   - neutralizacion_tipo (1)
 *
 * Subtipos NO migrados (6 PARAMétricos): tabla_periodica_numero_atomico,
 * electronegatividad, radio_atomico, valencia_tipica, particulas_subatomicas,
 * `configuracion_electronica` (los distractores YA están barajados en
 * `AtomosEnlaces.ts:266` vía `this.shuffle(...).slice(0, 3)` — el
 * comentario de la versión inicial describía un bug que ya fue
 * arreglado; ver test `atomosEnlaces.distractores.spec.ts` 2/2).
 *
 * Nota: `precipitacion_tipo` también existe en el switch del .ts pero NO
 * está en la lista BANCO de la auditoría; se omite para mantener
 * paridad con el audit.
 */

import type { MCQuestion } from "../../basic/types";

function tags(subtipo: string, dificultad: string): string[] {
  return ["quimica", "quimica-atomos-enlaces", `subtipo:${subtipo}`, `dificultad:${dificultad}`];
}

function mc(opts: {
  id: string;
  prompt: string;
  opciones: string[];
  indiceCorrecto: number;
  explicacion: string;
  subtipo: string;
  dificultad: string;
}): MCQuestion {
  return {
    id: opts.id,
    type: "mc",
    prompt: opts.prompt,
    options: opts.opciones.map((text, i) => ({
      text,
      correct: i === opts.indiceCorrecto,
      because: "",
    })),
    explanation: opts.explicacion,
    tags: tags(opts.subtipo, opts.dificultad),
  };
}

// ── 1) tabla_periodica_clasificacion (16 preguntas) ──────────────────

const ELEMENTOS = [
  { simbolo: "H",  nombre: "hidrógeno", grupo: 1,  periodo: 1, tipo: "no metal" },
  { simbolo: "He", nombre: "helio",     grupo: 18, periodo: 1, tipo: "gas noble" },
  { simbolo: "Li", nombre: "litio",     grupo: 1,  periodo: 2, tipo: "metal" },
  { simbolo: "C",  nombre: "carbono",   grupo: 14, periodo: 2, tipo: "no metal" },
  { simbolo: "N",  nombre: "nitrógeno", grupo: 15, periodo: 2, tipo: "no metal" },
  { simbolo: "O",  nombre: "oxígeno",   grupo: 16, periodo: 2, tipo: "no metal" },
  { simbolo: "F",  nombre: "flúor",     grupo: 17, periodo: 2, tipo: "no metal" },
  { simbolo: "Na", nombre: "sodio",     grupo: 1,  periodo: 3, tipo: "metal" },
  { simbolo: "Mg", nombre: "magnesio",  grupo: 2,  periodo: 3, tipo: "metal" },
  { simbolo: "Al", nombre: "aluminio",  grupo: 13, periodo: 3, tipo: "metal" },
  { simbolo: "Si", nombre: "silicio",   grupo: 14, periodo: 3, tipo: "metaloide" },
  { simbolo: "Cl", nombre: "cloro",     grupo: 17, periodo: 3, tipo: "no metal" },
  { simbolo: "Ca", nombre: "calcio",    grupo: 2,  periodo: 4, tipo: "metal" },
  { simbolo: "Fe", nombre: "hierro",    grupo: 8,  periodo: 4, tipo: "metal" },
  { simbolo: "Cu", nombre: "cobre",     grupo: 11, periodo: 4, tipo: "metal" },
  { simbolo: "Br", nombre: "bromo",     grupo: 17, periodo: 4, tipo: "no metal" },
];

const OPCIONES_CLASIFICACION = ["metal", "no metal", "metaloide", "gas noble"];

export const TABLA_PERIODICA_CLASIFICACION: MCQuestion[] = ELEMENTOS.map((el, i) =>
  mc({
    id: `quimica_atomos_enlaces_tabla_periodica_clasificacion_${i + 1}`,
    prompt: `El elemento ${el.nombre} (${el.simbolo}) ¿cómo se clasifica?`,
    opciones: OPCIONES_CLASIFICACION,
    indiceCorrecto: OPCIONES_CLASIFICACION.indexOf(el.tipo),
    explicacion: `${el.simbolo} es un ${el.tipo} (grupo ${el.grupo}, periodo ${el.periodo}).`,
    subtipo: "tabla_periodica_clasificacion",
    dificultad: "intermedio",
  }),
);

// ── 2) tendencias_periodicas (3 preguntas) ─────────────────────────

const TENDENCIAS_PERIODICAS_RAW: { pregunta: string; correcto: string; otros: string[]; dificultad: string }[] = [
  {
    pregunta: "¿En qué dirección aumenta la electronegatividad en la tabla periódica?",
    correcto: "De izquierda a derecha en un período y de abajo hacia arriba en un grupo",
    otros: [
      "De derecha a izquierda en un período y de arriba hacia abajo en un grupo",
      "De izquierda a derecha en un período y de arriba hacia abajo en un grupo",
      "Siempre aumenta al aumentar el número atómico",
    ],
    dificultad: "intermedio",
  },
  {
    pregunta: "¿En qué dirección aumenta el radio atómico en la tabla periódica?",
    correcto: "De derecha a izquierda en un período y de arriba hacia abajo en un grupo",
    otros: [
      "De izquierda a derecha en un período y de arriba hacia abajo en un grupo",
      "Siempre al aumentar el número atómico",
      "De izquierda a derecha en un período y de abajo hacia arriba en un grupo",
    ],
    dificultad: "intermedio",
  },
  {
    pregunta: "¿Cuál es la tendencia de la energía de ionización a lo largo de un período (de izquierda a derecha)?",
    correcto: "Aumenta generalmente",
    otros: ["Disminuye generalmente", "Se mantiene constante", "Primero aumenta y luego disminuye"],
    dificultad: "avanzado",
  },
];

export const TENDENCIAS_PERIODICAS: MCQuestion[] = TENDENCIAS_PERIODICAS_RAW.map((c, i) =>
  mc({
    id: `quimica_atomos_enlaces_tendencias_periodicas_${i + 1}`,
    prompt: c.pregunta,
    opciones: [c.correcto, ...c.otros],
    indiceCorrecto: 0,
    explicacion: c.correcto,
    subtipo: "tendencias_periodicas",
    dificultad: c.dificultad,
  }),
);

// ── 3) iones_cationes_aniones (5 preguntas) ────────────────────────

const IONES_RAW: { simbolo: string; descripcion: string; particulas: string; carga: number; dificultad: string }[] = [
  { simbolo: "Na⁺",  descripcion: "catión", particulas: "11 protones, 10 electrones", carga: +1, dificultad: "basico" },
  { simbolo: "Ca²⁺", descripcion: "catión", particulas: "20 protones, 18 electrones", carga: +2, dificultad: "basico" },
  { simbolo: "Cl⁻",  descripcion: "anión",  particulas: "17 protones, 18 electrones", carga: -1, dificultad: "basico" },
  { simbolo: "O²⁻",  descripcion: "anión",  particulas: "8 protones, 10 electrones",  carga: -2, dificultad: "intermedio" },
  { simbolo: "Fe²⁺", descripcion: "catión", particulas: "26 protones, 24 electrones", carga: +2, dificultad: "avanzado" },
];

export const IONES_CATIONES_ANIONES: MCQuestion[] = IONES_RAW.map((c, i) =>
  mc({
    id: `quimica_atomos_enlaces_iones_cationes_aniones_${i + 1}`,
    prompt: `El ion ${c.simbolo} (${c.particulas}) es:`,
    opciones: [c.descripcion, c.descripcion === "catión" ? "anión" : "catión", "átomo neutro", "radical libre"],
    indiceCorrecto: 0,
    explicacion: `Carga = ${c.carga > 0 ? "+" : ""}${c.carga}. ${c.carga > 0 ? "Tiene más protones que electrones → catión." : "Tiene más electrones que protones → anión."}`,
    subtipo: "iones_cationes_aniones",
    dificultad: c.dificultad,
  }),
);

// ── 4) niveles_subniveles (5 preguntas) ────────────────────────────

const NIVELES_SUBNIVELES_RAW: { pregunta: string; respuesta: string; otros: string[]; dificultad: string }[] = [
  { pregunta: "¿Cuántos electrones caben en el subnivel 2p?", respuesta: "6", otros: ["2", "4", "8"], dificultad: "basico" },
  { pregunta: "¿Cuántos orbitales tiene el subnivel 3d?", respuesta: "5", otros: ["3", "7", "1"], dificultad: "basico" },
  { pregunta: "¿Cuántos electrones caben en el nivel n=3 completo?", respuesta: "18", otros: ["8", "10", "32"], dificultad: "intermedio" },
  { pregunta: "¿Cuántos subniveles tiene el nivel n=4?", respuesta: "4 (s, p, d, f)", otros: ["2 (s, p)", "3 (s, p, d)", "5"], dificultad: "intermedio" },
  { pregunta: "¿Cuántos electrones caben en el nivel n=2?", respuesta: "8", otros: ["2", "6", "18"], dificultad: "basico" },
];

export const NIVELES_SUBNIVELES: MCQuestion[] = NIVELES_SUBNIVELES_RAW.map((c, i) =>
  mc({
    id: `quimica_atomos_enlaces_niveles_subniveles_${i + 1}`,
    prompt: c.pregunta,
    opciones: [c.respuesta, ...c.otros],
    indiceCorrecto: 0,
    explicacion: `Respuesta: ${c.respuesta}.`,
    subtipo: "niveles_subniveles",
    dificultad: c.dificultad,
  }),
);

// ── 5) orbitales_spdf (4 preguntas) ───────────────────────────────

const ORBITALES_SPDF_RAW: { pregunta: string; respuesta: string; otros: string[]; dificultad: string }[] = [
  { pregunta: "¿Cuál es la forma del orbital s?", respuesta: "Esférica", otros: ["Doble lóbulo (haltera)", "Cuatro lóbulos", "Toroidal"], dificultad: "basico" },
  { pregunta: "¿Cuántos orbitales p hay en un subnivel p?", respuesta: "3", otros: ["1", "5", "7"], dificultad: "basico" },
  { pregunta: "¿Qué tipo de orbital puede tener hasta 2 electrones?", respuesta: "Cualquier orbital (máximo 2 e⁻ por orbital)", otros: ["Solo el orbital s", "Solo el orbital p", "Solo los orbitales f"], dificultad: "intermedio" },
  { pregunta: "¿Cuántos orbitales d hay en el subnivel 3d?", respuesta: "5", otros: ["3", "7", "10"], dificultad: "intermedio" },
];

export const ORBITALES_SPDF: MCQuestion[] = ORBITALES_SPDF_RAW.map((c, i) =>
  mc({
    id: `quimica_atomos_enlaces_orbitales_spdf_${i + 1}`,
    prompt: c.pregunta,
    opciones: [c.respuesta, ...c.otros],
    indiceCorrecto: 0,
    explicacion: c.respuesta,
    subtipo: "orbitales_spdf",
    dificultad: c.dificultad,
  }),
);

// ── 6) enlace_ionico (4 ejemplos × 2 preguntas = 8 preguntas) ──────

const ENLACE_IONICO_EJEMPLOS = [
  { compuesto: "NaCl",  componentes: "Na (metal, baja electroneg.) y Cl (no metal, alta electroneg.)" },
  { compuesto: "MgO",   componentes: "Mg y O" },
  { compuesto: "KBr",   componentes: "K y Br" },
  { compuesto: "CaF₂",  componentes: "Ca y F" },
];

const ENLACE_IONICO_PREGUNTAS: { key: "tipo_enlace" | "caracteristica"; pregunta?: (e: typeof ENLACE_IONICO_EJEMPLOS[number]) => string; respuesta: string; otros: string[] }[] = [
  {
    key: "tipo_enlace",
    pregunta: (e) => `¿Qué tipo de enlace predomina en ${e.compuesto} (${e.componentes})?`,
    respuesta: "Enlace iónico",
    otros: ["Enlace covalente polar", "Enlace covalente apolar", "Enlace metálico"],
  },
  {
    key: "caracteristica",
    pregunta: () => "¿Cuál es una característica del enlace iónico?",
    respuesta: "Transferencia de electrones entre iones",
    otros: ["Compartición de electrones", "Mar de electrones libres", "Solo en metales"],
  },
];

const ENLACE_IONICO_QUESTIONS: MCQuestion[] = [];
let nEnlaceIonico = 0;
for (const e of ENLACE_IONICO_EJEMPLOS) {
  for (const p of ENLACE_IONICO_PREGUNTAS) {
    nEnlaceIonico += 1;
    ENLACE_IONICO_QUESTIONS.push(
      mc({
        id: `quimica_atomos_enlaces_enlace_ionico_${nEnlaceIonico}`,
        prompt: p.pregunta!(e),
        opciones: [p.respuesta, ...p.otros],
        indiceCorrecto: 0,
        explicacion: p.respuesta,
        subtipo: "enlace_ionico",
        dificultad: "intermedio",
      }),
    );
  }
}
export const ENLACE_IONICO: MCQuestion[] = ENLACE_IONICO_QUESTIONS;

// ── 7) enlace_covalente (4 preguntas) ─────────────────────────────

const ENLACE_COVALENTE_RAW: { pregunta: string; respuesta: string; otros: string[]; dificultad: string }[] = [
  { pregunta: "¿Cuántos pares de electrones comparte un enlace doble?", respuesta: "2 pares (4 electrones)", otros: ["1 par (2 electrones)", "3 pares (6 electrones)", "0 pares"], dificultad: "basico" },
  { pregunta: "¿En qué compuesto predomina el enlace covalente polar?", respuesta: "HCl (H–Cl)", otros: ["Cl₂ (Cl–Cl)", "Na–Cl (NaCl)", "Cu metálico"], dificultad: "basico" },
  { pregunta: "¿Cuántos enlaces covalentes puede formar el carbono (C) típicamente?", respuesta: "4", otros: ["2", "3", "6"], dificultad: "intermedio" },
  { pregunta: "¿Cuál es la característica del enlace covalente apolar?", respuesta: "Compartición igual de electrones entre átomos iguales", otros: ["Transferencia de electrones", "Diferencia de electronegatividad grande", "Solo se da en metales"], dificultad: "avanzado" },
];

export const ENLACE_COVALENTE: MCQuestion[] = ENLACE_COVALENTE_RAW.map((c, i) =>
  mc({
    id: `quimica_atomos_enlaces_enlace_covalente_${i + 1}`,
    prompt: c.pregunta,
    opciones: [c.respuesta, ...c.otros],
    indiceCorrecto: 0,
    explicacion: c.respuesta,
    subtipo: "enlace_covalente",
    dificultad: c.dificultad,
  }),
);

// ── 8) enlace_metalico (2 preguntas) ──────────────────────────────

const ENLACE_METALICO_RAW: { pregunta: string; respuesta: string; otros: string[]; dificultad: string }[] = [
  { pregunta: "¿Cuál es el modelo que describe el enlace metálico?", respuesta: "Mar de electrones libres (electrones deslocalizados)", otros: ["Transferencia de electrones entre iones", "Compartición de electrones entre dos átomos", "Dipolo permanente"], dificultad: "intermedio" },
  { pregunta: "¿Cuál propiedad se explica por el enlace metálico?", respuesta: "Alta conductividad eléctrica de los metales", otros: ["Fragilidad de los cristales de sal", "Alta electronegatividad del flúor", "Baja solubilidad en agua"], dificultad: "intermedio" },
];

export const ENLACE_METALICO: MCQuestion[] = ENLACE_METALICO_RAW.map((c, i) =>
  mc({
    id: `quimica_atomos_enlaces_enlace_metalico_${i + 1}`,
    prompt: c.pregunta,
    opciones: [c.respuesta, ...c.otros],
    indiceCorrecto: 0,
    explicacion: c.respuesta,
    subtipo: "enlace_metalico",
    dificultad: c.dificultad,
  }),
);

// ── 9) polaridad_enlaces (5 preguntas) ────────────────────────────

const POLARIDAD_RAW: { formula: string; polar: boolean; razon: string; dificultad: string }[] = [
  { formula: "H₂O", polar: true,  razon: "tiene geometría angular y momentos dipolares que no se cancelan",          dificultad: "basico" },
  { formula: "CO₂", polar: false, razon: "es lineal y los momentos dipolares de los enlaces C=O se cancelan",      dificultad: "intermedio" },
  { formula: "HF",  polar: true,  razon: "enlace covalente polar entre H y F (muy diferente electronegatividad)",   dificultad: "intermedio" },
  { formula: "Cl₂", polar: false, razon: "enlace entre átomos iguales → no hay dipolo",                              dificultad: "basico" },
  { formula: "NH₃", polar: true,  razon: "geometría piramidal con par libre → momento dipolar neto",                  dificultad: "avanzado" },
];

export const POLARIDAD_ENLACES: MCQuestion[] = POLARIDAD_RAW.map((c, i) => {
  const respuesta = c.polar ? "Polar" : "Apolar";
  return mc({
    id: `quimica_atomos_enlaces_polaridad_enlaces_${i + 1}`,
    prompt: `La molécula ${c.formula} es:`,
    opciones: [respuesta, c.polar ? "Apolar" : "Polar", "Iónica", "No se puede determinar"],
    indiceCorrecto: 0,
    explicacion: `${c.formula} es ${respuesta.toLowerCase()} porque ${c.razon}.`,
    subtipo: "polaridad_enlaces",
    dificultad: c.dificultad,
  });
});

// ── 10) geometria_molecular (7 preguntas) ─────────────────────────

const GEOMETRIAS = [
  { formula: "H₂O",  geometria: "angular (bent)",       otras: ["lineal", "trigonal plana", "tetraédrica"] },
  { formula: "CO₂",  geometria: "lineal",                otras: ["angular", "tetraédrica", "piramidal"] },
  { formula: "NH₃",  geometria: "piramidal trigonal",   otras: ["lineal", "trigonal plana", "tetraédrica"] },
  { formula: "CH₄",  geometria: "tetraédrica",           otras: ["lineal", "angular", "piramidal trigonal"] },
  { formula: "BF₃",  geometria: "trigonal plana",        otras: ["lineal", "angular", "tetraédrica"] },
  { formula: "PCl₅", geometria: "bipiramidal trigonal",  otras: ["tetraédrica", "octaédrica", "trigonal plana"] },
  { formula: "SF₆",  geometria: "octaédrica",            otras: ["tetraédrica", "bipiramidal trigonal", "lineal"] },
];

export const GEOMETRIA_MOLECULAR: MCQuestion[] = GEOMETRIAS.map((g, i) =>
  mc({
    id: `quimica_atomos_enlaces_geometria_molecular_${i + 1}`,
    prompt: `Según la teoría VSEPR, ¿cuál es la geometría molecular de ${g.formula}?`,
    opciones: [g.geometria, ...g.otras],
    indiceCorrecto: 0,
    explicacion: `La geometría de ${g.formula} es ${g.geometria} (VSEPR).`,
    subtipo: "geometria_molecular",
    dificultad: "intermedio",
  }),
);

// ── 11) sustancia_pura_mezcla (3 preguntas) ───────────────────────

const SUSTANCIA_PURA_MEZCLA_RAW: { pregunta: string; respuesta: string; otros: string[]; dificultad: string }[] = [
  { pregunta: "¿Cuál es un ejemplo de sustancia pura?", respuesta: "Agua destilada (H₂O)", otros: ["Agua de mar", "Aire", "Acero"], dificultad: "basico" },
  { pregunta: "¿Cuál es una característica de una mezcla?", respuesta: "Sus componentes pueden separarse por métodos físicos", otros: ["Composición fija y constante", "Solo un tipo de partícula", "Siempre en estado líquido"], dificultad: "intermedio" },
  { pregunta: "Una sustancia pura puede ser:", respuesta: "Elemento o compuesto", otros: ["Solo un elemento", "Solo un compuesto", "Siempre una mezcla homogénea"], dificultad: "intermedio" },
];

export const SUSTANCIA_PURA_MEZCLA: MCQuestion[] = SUSTANCIA_PURA_MEZCLA_RAW.map((c, i) =>
  mc({
    id: `quimica_atomos_enlaces_sustancia_pura_mezcla_${i + 1}`,
    prompt: c.pregunta,
    opciones: [c.respuesta, ...c.otros],
    indiceCorrecto: 0,
    explicacion: c.respuesta,
    subtipo: "sustancia_pura_mezcla",
    dificultad: c.dificultad,
  }),
);

// ── 12) mezcla_homogenea_heterogenea (3 preguntas) ────────────────

const MEZCLA_HOM_HET_RAW: { pregunta: string; respuesta: string; otros: string[]; dificultad: string }[] = [
  { pregunta: "¿Cuál es un ejemplo de mezcla homogénea?", respuesta: "Solución de azúcar en agua", otros: ["Arena y piedras", "Aceite y agua", "Ensalada de frutas"], dificultad: "basico" },
  { pregunta: "¿Cuál es un ejemplo de mezcla heterogénea?", respuesta: "Arena y sal mezcladas", otros: ["Aire seco", "Agua con alcohol", "Café negro sin posos"], dificultad: "basico" },
  { pregunta: "¿Qué caracteriza a una mezcla homogénea?", respuesta: "Composición y apariencia uniformes en toda la muestra", otros: ["Se pueden ver sus componentes a simple vista", "Sus componentes están en fases distintas", "Siempre es líquida"], dificultad: "intermedio" },
];

export const MEZCLA_HOMOGENEA_HETEROGENEA: MCQuestion[] = MEZCLA_HOM_HET_RAW.map((c, i) =>
  mc({
    id: `quimica_atomos_enlaces_mezcla_homogenea_heterogenea_${i + 1}`,
    prompt: c.pregunta,
    opciones: [c.respuesta, ...c.otros],
    indiceCorrecto: 0,
    explicacion: c.respuesta,
    subtipo: "mezcla_homogenea_heterogenea",
    dificultad: c.dificultad,
  }),
);

// ── 13) metodos_separacion (5 preguntas) ──────────────────────────

const METODOS_SEP = [
  { mezcla: "agua + sal (NaCl)",         metodo: "evaporación",   otros: ["filtración", "destilación", "centrifugación"] },
  { mezcla: "agua + arena",              metodo: "filtración",    otros: ["evaporación", "cristalización", "decantación"] },
  { mezcla: "agua + aceite",             metodo: "decantación",   otros: ["filtración", "evaporación", "cromatografía"] },
  { mezcla: "alcohol + agua",            metodo: "destilación",   otros: ["filtración", "evaporación", "centrifugación"] },
  { mezcla: "tinta (pigmentos mixtos)",  metodo: "cromatografía", otros: ["filtración", "destilación", "decantación"] },
];

export const METODOS_SEPARACION: MCQuestion[] = METODOS_SEP.map((m, i) =>
  mc({
    id: `quimica_atomos_enlaces_metodos_separacion_${i + 1}`,
    prompt: `¿Qué método de separación es más adecuado para separar ${m.mezcla}?`,
    opciones: [m.metodo, ...m.otros],
    indiceCorrecto: 0,
    explicacion: `Para ${m.mezcla} se usa ${m.metodo}.`,
    subtipo: "metodos_separacion",
    dificultad: "intermedio",
  }),
);

// ── 14) propiedades_fisicas_quimicas (3 preguntas) ────────────────

const PROPIEDADES_FQ_RAW: { pregunta: string; respuesta: string; otros: string[]; dificultad: string }[] = [
  { pregunta: "¿Cuál es una propiedad química del hierro?", respuesta: "Se oxida (forma óxido de hierro, herrumbre)", otros: ["Tiene color gris", "Es maleable", "Conduce electricidad"], dificultad: "basico" },
  { pregunta: "¿Cuál es una propiedad física del agua?", respuesta: "Punto de ebullición 100 °C", otros: ["Reacciona con metales alcalinos", "Puede oxidarse", "Arde en presencia de oxígeno"], dificultad: "basico" },
  { pregunta: "¿Cuál es una propiedad química?", respuesta: "Inflamabilidad del metano", otros: ["Dureza del diamante", "Densidad del plomo", "Color del azufre"], dificultad: "intermedio" },
];

export const PROPIEDADES_FISICAS_QUIMICAS: MCQuestion[] = PROPIEDADES_FQ_RAW.map((c, i) =>
  mc({
    id: `quimica_atomos_enlaces_propiedades_fisicas_quimicas_${i + 1}`,
    prompt: c.pregunta,
    opciones: [c.respuesta, ...c.otros],
    indiceCorrecto: 0,
    explicacion: c.respuesta,
    subtipo: "propiedades_fisicas_quimicas",
    dificultad: c.dificultad,
  }),
);

// ── 15-19) Reactions (5 subtipos, comparten REACCIONES_TIPO) ──────

const REACCIONES_TIPO = [
  { ecuacion: "2Na + Cl₂ → 2NaCl",                     tipo: "síntesis",       otros: ["descomposición", "desplazamiento", "combustión"] },
  { ecuacion: "2H₂O → 2H₂ + O₂",                       tipo: "descomposición", otros: ["síntesis", "neutralización", "combustión"] },
  { ecuacion: "Zn + H₂SO₄ → ZnSO₄ + H₂",              tipo: "desplazamiento", otros: ["síntesis", "neutralización", "combustión"] },
  { ecuacion: "CH₄ + 2O₂ → CO₂ + 2H₂O",               tipo: "combustión",     otros: ["síntesis", "descomposición", "neutralización"] },
  { ecuacion: "HCl + NaOH → NaCl + H₂O",               tipo: "neutralización", otros: ["síntesis", "descomposición", "precipitación"] },
];

function buildReaccionBank(subtipo: string, _tipoLabel: string) {
  const r = REACCIONES_TIPO.find((x) => x.tipo === _tipoLabel);
  if (!r) return [];
  return [
    mc({
      id: `quimica_atomos_enlaces_${subtipo}_1`,
      prompt: `¿Qué tipo de reacción química es la siguiente?\n${r.ecuacion}`,
      opciones: [r.tipo, ...r.otros],
      indiceCorrecto: 0,
      explicacion: `Es una reacción de ${r.tipo}: ${r.ecuacion}`,
      subtipo,
      dificultad: "intermedio",
    }),
  ];
}

export const SINTESIS: MCQuestion[] = buildReaccionBank("sintesis", "síntesis");
export const DESCOMPOSICION: MCQuestion[] = buildReaccionBank("descomposicion", "descomposición");
export const DESPLAZAMIENTO: MCQuestion[] = buildReaccionBank("desplazamiento", "desplazamiento");
export const COMBUSTION: MCQuestion[] = buildReaccionBank("combustion", "combustión");
export const NEUTRALIZACION_TIPO: MCQuestion[] = buildReaccionBank("neutralizacion_tipo", "neutralización");

// ── Barrel ─────────────────────────────────────────────────────────

export const BANCOS_ATOMOS_ENLACES: ReadonlyArray<readonly [string, MCQuestion[]]> = [
  ["quimica_atomos_enlaces_tabla_periodica_clasificacion", TABLA_PERIODICA_CLASIFICACION],
  ["quimica_atomos_enlaces_tendencias_periodicas", TENDENCIAS_PERIODICAS],
  ["quimica_atomos_enlaces_iones_cationes_aniones", IONES_CATIONES_ANIONES],
  ["quimica_atomos_enlaces_niveles_subniveles", NIVELES_SUBNIVELES],
  ["quimica_atomos_enlaces_orbitales_spdf", ORBITALES_SPDF],
  ["quimica_atomos_enlaces_enlace_ionico", ENLACE_IONICO],
  ["quimica_atomos_enlaces_enlace_covalente", ENLACE_COVALENTE],
  ["quimica_atomos_enlaces_enlace_metalico", ENLACE_METALICO],
  ["quimica_atomos_enlaces_polaridad_enlaces", POLARIDAD_ENLACES],
  ["quimica_atomos_enlaces_geometria_molecular", GEOMETRIA_MOLECULAR],
  ["quimica_atomos_enlaces_sustancia_pura_mezcla", SUSTANCIA_PURA_MEZCLA],
  ["quimica_atomos_enlaces_mezcla_homogenea_heterogenea", MEZCLA_HOMOGENEA_HETEROGENEA],
  ["quimica_atomos_enlaces_metodos_separacion", METODOS_SEPARACION],
  ["quimica_atomos_enlaces_propiedades_fisicas_quimicas", PROPIEDADES_FISICAS_QUIMICAS],
  ["quimica_atomos_enlaces_sintesis", SINTESIS],
  ["quimica_atomos_enlaces_descomposicion", DESCOMPOSICION],
  ["quimica_atomos_enlaces_desplazamiento", DESPLAZAMIENTO],
  ["quimica_atomos_enlaces_combustion", COMBUSTION],
  ["quimica_atomos_enlaces_neutralizacion_tipo", NEUTRALIZACION_TIPO],
] as const;
