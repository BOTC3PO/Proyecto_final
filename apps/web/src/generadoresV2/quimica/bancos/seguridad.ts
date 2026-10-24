/**
 * F6-03 — Bancos estáticos de Seguridad (química).
 *
 * Extraídos de `apps/web/src/generadoresV2/quimica/Seguridad.ts` (NO
 * modificados — siguen vivos hasta F6-06).
 *
 * Particularidad: a diferencia de los bancos de economía, los 3
 * subtipos BANCO de Seguridad producen **3 preguntas por fila** (una
 * por dificultad), con prompts y opciones DISTINTOS por dificultad.
 * F6-03 preserva esta estructura: cada fila se expande a 3 preguntas
 * etiquetadas con la dificultad correspondiente.
 *
 * Bancos migrados (3):
 *   - pictogramas_ghs: 9 filas × 3 difficulties = 27 preguntas
 *   - materiales_inflamables: 4 filas × 3 difficulties = 12 preguntas
 *   - riesgos_toxicos: 4 filas × 3 difficulties = 12 preguntas
 *   TOTAL: 51 preguntas
 *
 * Subtipo NO migrado: `equipos_proteccion` (4 filas × 3 difficulties =
 * 36 preguntas). El audit dice explícitamente "Seguridad (3) → BANCO"
 * sin contar `equipos_proteccion`. Lo omitimos para mantener paridad
 * con el audit.
 */

import type { MCQuestion } from "../../basic/types";

function tags(subtipo: string, dificultad: string): string[] {
  return ["quimica", "quimica-seguridad", `subtipo:${subtipo}`, `dificultad:${dificultad}`];
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

// ── 1) pictogramas_ghs (9 filas × 3 difficulties = 27 preguntas) ──

const PICTOGRAMAS = [
  { codigo: "GHS01", nombre: "Explosivo",            descripcion: "sustancias y mezclas explosivas, reactivas, o que forman gases inflamables", ejemplos: ["TNT", "nitroglicerina", "pólvora"] },
  { codigo: "GHS02", nombre: "Inflamable",           descripcion: "líquidos, gases, aerosoles y sólidos inflamables",                       ejemplos: ["etanol", "gasolina", "acetona"] },
  { codigo: "GHS03", nombre: "Comburente",           descripcion: "sustancias oxidantes que pueden provocar o intensificar un incendio",   ejemplos: ["peróxido de hidrógeno", "nitrato de potasio", "cloro"] },
  { codigo: "GHS04", nombre: "Gas a presión",        descripcion: "gases comprimidos, licuados o disueltos a presión",                     ejemplos: ["nitrógeno comprimido", "gas propano", "dióxido de carbono"] },
  { codigo: "GHS05", nombre: "Corrosivo",            descripcion: "sustancias que causan corrosión en metales o quemaduras en la piel",   ejemplos: ["ácido sulfúrico", "hidróxido de sodio", "ácido clorhídrico"] },
  { codigo: "GHS06", nombre: "Tóxico agudo",         descripcion: "sustancias muy tóxicas por inhalación, ingestión o contacto con la piel", ejemplos: ["cianuro de potasio", "arseniato de sodio", "estricnina"] },
  { codigo: "GHS07", nombre: "Irritante/Nocivo",     descripcion: "sustancias irritantes para piel, ojos o sistema respiratorio",          ejemplos: ["amoníaco diluido", "cloro a bajas concentraciones", "acetaldehído"] },
  { codigo: "GHS08", nombre: "Peligro para la salud", descripcion: "carcinógenos, mutágenos, sustancias tóxicas para la reproducción",     ejemplos: ["benceno", "formaldehído", "cloruro de vinilo"] },
  { codigo: "GHS09", nombre: "Peligro ambiental",    descripcion: "sustancias muy tóxicas para organismos acuáticos",                       ejemplos: ["mercurio", "plomo", "pesticidas organoclorados"] },
];

// 3 question styles per row. Los distractores en el source son
// `filter(x => x.codigo !== p.codigo).slice(0, 3)`, que produce los 3
// primeros pictogramas distintos del elegido. Acá replicamos esa
// elección fija (los 3 "siguientes" en el array — los índices pueden
// variar en el shuffle real del source, pero la pregunta sigue siendo
// válida porque el alumno puede identificar la respuesta correcta).
const PICTOGRAMAS_QUESTIONS: MCQuestion[] = [];
let nPicto = 0;
for (const p of PICTOGRAMAS) {
  nPicto += 1;
  const otrosNombres = PICTOGRAMAS.filter((x) => x.codigo !== p.codigo).slice(0, 3).map((x) => x.nombre);
  const otrasDescs = PICTOGRAMAS.filter((x) => x.codigo !== p.codigo).slice(0, 3).map((x) => x.descripcion);
  const ej = p.ejemplos[0];

  // basico: dado el código, identificar el nombre
  PICTOGRAMAS_QUESTIONS.push(
    mc({
      id: `quimica_seguridad_pictogramas_ghs_${nPicto}_basico`,
      prompt: `El pictograma ${p.codigo} del sistema GHS/SGA corresponde a la categoría de peligro:`,
      opciones: [p.nombre, ...otrosNombres],
      indiceCorrecto: 0,
      explicacion: `${p.codigo} es el pictograma de "${p.nombre}". Indica: ${p.descripcion}.`,
      subtipo: "pictogramas_ghs",
      dificultad: "basico",
    }),
  );
  // intermedio: dado el nombre, identificar la descripción
  PICTOGRAMAS_QUESTIONS.push(
    mc({
      id: `quimica_seguridad_pictogramas_ghs_${nPicto}_intermedio`,
      prompt: `¿Qué tipo de sustancias indica el pictograma GHS "${p.nombre}" (${p.codigo})?`,
      opciones: [p.descripcion, ...otrasDescs],
      indiceCorrecto: 0,
      explicacion: `El pictograma ${p.codigo} ("${p.nombre}") se aplica a: ${p.descripcion}.`,
      subtipo: "pictogramas_ghs",
      dificultad: "intermedio",
    }),
  );
  // avanzado: dado un ejemplo, identificar el pictograma
  PICTOGRAMAS_QUESTIONS.push(
    mc({
      id: `quimica_seguridad_pictogramas_ghs_${nPicto}_avanzado`,
      prompt: `El ${ej} es un ejemplo de sustancia que lleva el pictograma GHS de peligro:`,
      opciones: [p.nombre, ...otrosNombres],
      indiceCorrecto: 0,
      explicacion: `El ${ej} pertenece a la categoría "${p.nombre}" (${p.codigo}). ${p.descripcion}.`,
      subtipo: "pictogramas_ghs",
      dificultad: "avanzado",
    }),
  );
}
export const PICTOGRAMAS_GHS: MCQuestion[] = PICTOGRAMAS_QUESTIONS;

// ── 2) materiales_inflamables (4 filas × 3 difficulties = 12) ────

const INFLAMABLES = [
  { sustancia: "etanol",    formula: "C₂H₅OH",    puntoIgnicion:   13, clasificacion: "líquido inflamable",                       medidas: ["almacenar lejos de fuentes de calor", "evitar llamas abiertas", "usar recipientes cerrados"] },
  { sustancia: "acetona",   formula: "CH₃COCH₃",  puntoIgnicion:  -18, clasificacion: "líquido muy inflamable",                   medidas: ["ventilar el área", "no usar cerca de equipos eléctricos", "almacenar en lugar fresco"] },
  { sustancia: "hexano",    formula: "C₆H₁₄",    puntoIgnicion:  -22, clasificacion: "líquido extremadamente inflamable",         medidas: ["eliminar toda fuente de ignición", "usar ropa antiestática", "extractor de vapores obligatorio"] },
  { sustancia: "hidrógeno", formula: "H₂",        puntoIgnicion: -253, clasificacion: "gas inflamable extremadamente peligroso",  medidas: ["detectores de fugas", "ventilación forzada", "prohibir llamas en el área"] },
];

const INFLAMABLES_QUESTIONS: MCQuestion[] = [];
let nInfl = 0;
for (const f of INFLAMABLES) {
  nInfl += 1;
  const otrasClasif = INFLAMABLES.filter((x) => x.sustancia !== f.sustancia).map((x) => x.clasificacion).slice(0, 3);
  const otrosPuntos = INFLAMABLES.filter((x) => x.sustancia !== f.sustancia).map((x) => `${x.puntoIgnicion} °C`).slice(0, 3);
  const medida0 = f.medidas[0];
  const otrasMedidas = INFLAMABLES
    .filter((x) => x.sustancia !== f.sustancia)
    .flatMap((x) => x.medidas)
    .filter((m) => !f.medidas.includes(m))
    .slice(0, 3);

  // basico: clasificación
  INFLAMABLES_QUESTIONS.push(
    mc({
      id: `quimica_seguridad_materiales_inflamables_${nInfl}_basico`,
      prompt: `¿Cómo se clasifica el ${f.sustancia} (${f.formula}) según su inflamabilidad?`,
      opciones: [f.clasificacion, ...otrasClasif],
      indiceCorrecto: 0,
      explicacion: `El ${f.sustancia} es un ${f.clasificacion}. Su punto de ignición es ${f.puntoIgnicion} °C.`,
      subtipo: "materiales_inflamables",
      dificultad: "basico",
    }),
  );
  // intermedio: punto de ignición
  INFLAMABLES_QUESTIONS.push(
    mc({
      id: `quimica_seguridad_materiales_inflamables_${nInfl}_intermedio`,
      prompt: `El ${f.sustancia} (${f.formula}) está clasificado como "${f.clasificacion}". ¿Cuál es su punto de ignición aproximado?`,
      opciones: [`${f.puntoIgnicion} °C`, ...otrosPuntos],
      indiceCorrecto: 0,
      explicacion: `El punto de ignición del ${f.sustancia} es aproximadamente ${f.puntoIgnicion} °C. Un punto de ignición más bajo implica mayor peligro de inflamación.`,
      subtipo: "materiales_inflamables",
      dificultad: "intermedio",
    }),
  );
  // avanzado: medida de seguridad
  INFLAMABLES_QUESTIONS.push(
    mc({
      id: `quimica_seguridad_materiales_inflamables_${nInfl}_avanzado`,
      prompt: `Al manipular ${f.sustancia} (${f.formula}), un ${f.clasificacion}, ¿cuál de las siguientes es una medida de seguridad correcta?`,
      opciones: [medida0, ...otrasMedidas],
      indiceCorrecto: 0,
      explicacion: `Para manejar ${f.sustancia} de forma segura se debe: ${f.medidas.join("; ")}.`,
      subtipo: "materiales_inflamables",
      dificultad: "avanzado",
    }),
  );
}
export const MATERIALES_INFLAMABLES: MCQuestion[] = INFLAMABLES_QUESTIONS;

// ── 3) riesgos_toxicos (4 filas × 3 difficulties = 12) ────────────

const TOXICOS = [
  { sustancia: "cianuro de potasio", formula: "KCN", ruta: "inhalación, ingestión, contacto cutáneo",  dosis: "DL₅₀ oral (rat): 5 mg/kg",                  sintomas: "mareo, dolor de cabeza, convulsiones, paro cardiorrespiratorio", primeros_auxilios: "alejar de la exposición, llamar emergencias, administrar antídoto (hidroxocobalamina)" },
  { sustancia: "plomo",              formula: "Pb",  ruta: "inhalación de polvo, ingestión",          dosis: "acumulativo; tóxico por exposición crónica", sintomas: "anemia, daño neurológico, encefalopatía",                            primeros_auxilios: "remover contaminación, lavado de piel y ojos, atención médica" },
  { sustancia: "mercurio",           formula: "Hg",  ruta: "inhalación de vapores, contacto dérmico", dosis: "IDLH: 10 mg/m³ (vapor)",                   sintomas: "temblores, daño renal, pérdida de memoria",                          primeros_auxilios: "evacuar área, no tocar el derrame, llamar servicios de emergencia" },
  { sustancia: "ácido sulfhídrico",  formula: "H₂S", ruta: "inhalación",                              dosis: "IDLH: 50 ppm",                            sintomas: "irritación ocular y respiratoria, pérdida del olfato, edema pulmonar", primeros_auxilios: "retirar a víctima al aire fresco, ventilación artificial si es necesario" },
];

const TOXICOS_QUESTIONS: MCQuestion[] = [];
let nTox = 0;
for (const t of TOXICOS) {
  nTox += 1;
  const otrasRutas = TOXICOS.filter((x) => x.sustancia !== t.sustancia).map((x) => x.ruta).slice(0, 3);
  const otrosSintomas = TOXICOS.filter((x) => x.sustancia !== t.sustancia).map((x) => x.sintomas).slice(0, 3);
  const otrosAux = TOXICOS.filter((x) => x.sustancia !== t.sustancia).map((x) => x.primeros_auxilios).slice(0, 3);

  // basico: rutas
  TOXICOS_QUESTIONS.push(
    mc({
      id: `quimica_seguridad_riesgos_toxicos_${nTox}_basico`,
      prompt: `¿Cuáles son las principales rutas de exposición tóxica al ${t.sustancia} (${t.formula})?`,
      opciones: [t.ruta, ...otrasRutas],
      indiceCorrecto: 0,
      explicacion: `El ${t.sustancia} es tóxico principalmente por: ${t.ruta}. Datos toxicológicos: ${t.dosis}.`,
      subtipo: "riesgos_toxicos",
      dificultad: "basico",
    }),
  );
  // intermedio: síntomas
  TOXICOS_QUESTIONS.push(
    mc({
      id: `quimica_seguridad_riesgos_toxicos_${nTox}_intermedio`,
      prompt: `La intoxicación por ${t.sustancia} (${t.formula}) produce los siguientes síntomas:`,
      opciones: [t.sintomas, ...otrosSintomas],
      indiceCorrecto: 0,
      explicacion: `Síntomas de intoxicación por ${t.sustancia}: ${t.sintomas}. Ruta de exposición: ${t.ruta}.`,
      subtipo: "riesgos_toxicos",
      dificultad: "intermedio",
    }),
  );
  // avanzado: primeros auxilios
  TOXICOS_QUESTIONS.push(
    mc({
      id: `quimica_seguridad_riesgos_toxicos_${nTox}_avanzado`,
      prompt: `Ante una exposición accidental al ${t.sustancia} (${t.formula}), los primeros auxilios correctos son:`,
      opciones: [t.primeros_auxilios, ...otrosAux],
      indiceCorrecto: 0,
      explicacion: `Primeros auxilios ante exposición a ${t.sustancia}: ${t.primeros_auxilios}.`,
      subtipo: "riesgos_toxicos",
      dificultad: "avanzado",
    }),
  );
}
export const RIESGOS_TOXICOS: MCQuestion[] = TOXICOS_QUESTIONS;

// ── Barrel ─────────────────────────────────────────────────────────

export const BANCOS_SEGURIDAD: ReadonlyArray<readonly [string, MCQuestion[]]> = [
  ["quimica_seguridad_pictogramas_ghs", PICTOGRAMAS_GHS],
  ["quimica_seguridad_materiales_inflamables", MATERIALES_INFLAMABLES],
  ["quimica_seguridad_riesgos_toxicos", RIESGOS_TOXICOS],
] as const;
