/**
 * F6-02 — Bancos estáticos de EconomíaGeneral.
 *
 * Extraídos de `apps/web/src/generadoresV2/economia/EconomiaGeneral.ts`
 * (NO modificados — siguen vivos hasta F6-06). Cada banco corresponde a
 * un subtipo BANCO del generador (criterio: hardcoded pickOne de un
 * array, sin PRNG para la respuesta).
 *
 * Bancos migrados (7, post-dedup de 6 quiz_* que tienen canónico en
 * Finanzas/Contabilidad):
 *   - politica_fiscal_monetaria (8)
 *   - clasificacion_bienes (8)
 *   - agentes_economicos (7)
 *   - estructuras_mercado (6)
 *   - gastos_fijos_variables (8)
 *   - quiz_ganancia_equilibrio (2)
 *   - quiz_interes_simple_compuesto (2)
 *
 * Subtipos del generador NO migrados (8): 6 quiz_* dropados al canónico
 * de Finanzas/Contabilidad, 1 PARAM (`saldo_normal` no es de este
 * archivo — está en Contabilidad), 1 PARAM (`cft_mayor_interes` y
 * `ganancia_vs_equilibrio` con monto sorteado — la auditoría los marca
 * PARAM; los migré como `quiz_cft_interes` queda dropped y
 * `cft_mayor_interes` se mantiene en la fuente por ahora).
 */

import type { MCQuestion } from "../../basic/types";

function tags(subtipo: string, dificultad: string): string[] {
  return ["economia", "economia-general", `subtipo:${subtipo}`, `dificultad:${dificultad}`];
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

// ── 1) politica_fiscal_monetaria (8 preguntas) ──────────────────────

const TIPO_POLITICA = [
  "Política fiscal expansiva",
  "Política fiscal contractiva",
  "Política monetaria expansiva",
  "Política monetaria contractiva",
];

const POLITICA_FISCAL_MONETARIA_RAW: { descripcion: string; respuesta: string; explicacion: string; dificultad: string }[] = [
  { descripcion: "El gobierno aumenta el gasto público en obras y programas sociales para impulsar la actividad económica.", respuesta: "Política fiscal expansiva", explicacion: "Usa el presupuesto del Estado (gasto público) para aumentar la demanda agregada.", dificultad: "basico" },
  { descripcion: "El gobierno baja impuestos a familias y empresas para que tengan más dinero para gastar e invertir.", respuesta: "Política fiscal expansiva", explicacion: "Reduce la carga impositiva para estimular el consumo y la inversión.", dificultad: "basico" },
  { descripcion: "El gobierno reduce el gasto público y sube algunos impuestos para achicar el déficit fiscal.", respuesta: "Política fiscal contractiva", explicacion: "Busca frenar la demanda y ordenar las cuentas públicas reduciendo gastos o aumentando impuestos.", dificultad: "intermedio" },
  { descripcion: "El Banco Central baja la tasa de interés y facilita el crédito para que se pida más dinero prestado.", respuesta: "Política monetaria expansiva", explicacion: "Hace más barato el crédito para estimular el consumo y la inversión.", dificultad: "intermedio" },
  { descripcion: "El Banco Central sube mucho la tasa de interés para frenar la inflación y el consumo.", respuesta: "Política monetaria contractiva", explicacion: "Hace más caro el crédito para reducir la cantidad de dinero circulando.", dificultad: "avanzado" },
  { descripcion: "El gobierno congela el gasto y aumenta impuestos para reducir la demanda agregada en un contexto inflacionario.", respuesta: "Política fiscal contractiva", explicacion: "Al subir impuestos y frenar el gasto público, se reduce el impulso fiscal y la demanda.", dificultad: "avanzado" },
  { descripcion: "El Banco Central vende títulos y sube encajes bancarios para absorber liquidez del sistema.", respuesta: "Política monetaria contractiva", explicacion: "Al absorber liquidez, disminuye la cantidad de dinero disponible y se enfría la economía.", dificultad: "avanzado" },
  { descripcion: "El Banco Central reduce la tasa de referencia y compra bonos para expandir la base monetaria.", respuesta: "Política monetaria expansiva", explicacion: "Baja tasas y compra activos para inyectar dinero y estimular crédito y gasto.", dificultad: "avanzado" },
];

export const POLITICA_FISCAL_MONETARIA: MCQuestion[] = POLITICA_FISCAL_MONETARIA_RAW.map((c, i) =>
  mc({
    id: `economia_general_politica_fiscal_monetaria_${i + 1}`,
    prompt: `Clasificá la siguiente medida de política económica:\n\n${c.descripcion}`,
    opciones: TIPO_POLITICA,
    indiceCorrecto: TIPO_POLITICA.indexOf(c.respuesta),
    explicacion: c.explicacion,
    subtipo: "politica_fiscal_monetaria",
    dificultad: c.dificultad,
  }),
);

// ── 2) clasificacion_bienes (8 preguntas) ────────────────────────────

const CLASIFICACION_BIENES_RAW: { enunciado: string; opciones: string[]; correcta: string; explicacion: string; dificultad: string }[] = [
  { enunciado: "El aire que respiramos normalmente se clasifica como:", opciones: ["Bien libre", "Bien económico"], correcta: "Bien libre", explicacion: "Es un bien libre porque está disponible en abundancia, no tiene precio y no requiere proceso productivo directo.", dificultad: "basico" },
  { enunciado: "Un paquete de fideos que se compra en el supermercado se clasifica como:", opciones: ["Bien libre", "Bien económico"], correcta: "Bien económico", explicacion: "Requiere trabajo, insumos y organización para producirse y tiene un precio; por eso es un bien económico.", dificultad: "basico" },
  { enunciado: "Una heladera que una familia compra para su casa se clasifica como:", opciones: ["Bien de consumo", "Bien de capital"], correcta: "Bien de consumo", explicacion: "Se usa directamente para satisfacer una necesidad del hogar, no para producir otros bienes.", dificultad: "basico" },
  { enunciado: "Una máquina industrial que utiliza una fábrica para producir botellas se clasifica como:", opciones: ["Bien de consumo", "Bien de capital"], correcta: "Bien de capital", explicacion: "Es un medio de producción que sirve para fabricar otros bienes.", dificultad: "intermedio" },
  { enunciado: "El café y el té se consideran ejemplos de bienes:", opciones: ["Sustitutos", "Complementarios"], correcta: "Sustitutos", explicacion: "Cubren una necesidad similar, por lo que se pueden reemplazar entre sí.", dificultad: "intermedio" },
  { enunciado: "El auto y la nafta se consideran ejemplos de bienes:", opciones: ["Sustitutos", "Complementarios"], correcta: "Complementarios", explicacion: "Se usan juntos: el auto necesita combustible para funcionar.", dificultad: "intermedio" },
  { enunciado: "Un software de diseño que compra una empresa para producir gráficos se clasifica como:", opciones: ["Bien de consumo", "Bien de capital"], correcta: "Bien de capital", explicacion: "Es un recurso utilizado para producir otros bienes o servicios.", dificultad: "avanzado" },
  { enunciado: "El azúcar y el edulcorante se consideran ejemplos de bienes:", opciones: ["Sustitutos", "Complementarios"], correcta: "Sustitutos", explicacion: "Ambos cumplen la misma función y pueden reemplazarse según la preferencia del consumidor.", dificultad: "avanzado" },
];

export const CLASIFICACION_BIENES: MCQuestion[] = CLASIFICACION_BIENES_RAW.map((c, i) =>
  mc({
    id: `economia_general_clasificacion_bienes_${i + 1}`,
    prompt: c.enunciado,
    opciones: c.opciones,
    indiceCorrecto: c.opciones.indexOf(c.correcta),
    explicacion: c.explicacion,
    subtipo: "clasificacion_bienes",
    dificultad: c.dificultad,
  }),
);

// ── 3) agentes_economicos (7 preguntas) ─────────────────────────────

const AGENTE = ["Hogares/Familias", "Empresas", "Estado", "Sector externo"];

const AGENTES_ECONOMICOS_RAW: { descripcion: string; agente: string; explicacion: string; dificultad: string }[] = [
  { descripcion: "Personas que ofrecen su trabajo a las empresas y consumen bienes y servicios.", agente: "Hogares/Familias", explicacion: "Los hogares ofrecen trabajo y demandan bienes y servicios.", dificultad: "basico" },
  { descripcion: "Organizaciones que producen bienes y servicios para vender en el mercado.", agente: "Empresas", explicacion: "Las empresas demandan factores de producción y ofrecen bienes/servicios.", dificultad: "basico" },
  { descripcion: "Cobra impuestos, realiza gasto público y regula la economía.", agente: "Estado", explicacion: "El Estado interviene con impuestos, gasto y regulaciones.", dificultad: "intermedio" },
  { descripcion: "Relaciona la economía local con otros países mediante exportaciones e importaciones.", agente: "Sector externo", explicacion: "El sector externo participa con comercio exterior y flujo de capitales.", dificultad: "intermedio" },
  { descripcion: "Recauda impuestos para financiar obras públicas y programas sociales.", agente: "Estado", explicacion: "La recaudación y el gasto público son funciones del Estado en la economía.", dificultad: "avanzado" },
  { descripcion: "Importa insumos y exporta productos terminados, conectando el mercado local con el global.", agente: "Sector externo", explicacion: "El comercio internacional de insumos y productos pertenece al sector externo.", dificultad: "avanzado" },
  { descripcion: "Contrata trabajadores, invierte en maquinaria y busca beneficios a través de sus ventas.", agente: "Empresas", explicacion: "Las empresas combinan factores de producción para generar bienes y servicios.", dificultad: "avanzado" },
];

export const AGENTES_ECONOMICOS: MCQuestion[] = AGENTES_ECONOMICOS_RAW.map((c, i) =>
  mc({
    id: `economia_general_agentes_economicos_${i + 1}`,
    prompt: `En el flujo circular de la economía, ¿qué agente económico corresponde a la siguiente descripción?\n\n${c.descripcion}`,
    opciones: AGENTE,
    indiceCorrecto: AGENTE.indexOf(c.agente),
    explicacion: c.explicacion,
    subtipo: "agentes_economicos",
    dificultad: c.dificultad,
  }),
);

// ── 4) estructuras_mercado (6 preguntas) ───────────────────────────

const MERCADO = ["Competencia perfecta", "Competencia monopolística", "Oligopolio", "Monopolio"];

const ESTRUCTURAS_MERCADO_RAW: { descripcion: string; tipo: string; explicacion: string; dificultad: string }[] = [
  { descripcion: "Hay muchísimas empresas pequeñas que venden un producto prácticamente igual. Ninguna puede influir por sí sola en el precio.", tipo: "Competencia perfecta", explicacion: "Muchos oferentes y demandantes, producto homogéneo y precio determinado por el mercado.", dificultad: "basico" },
  { descripcion: "Pocas empresas dominan la mayor parte de la oferta de un producto (por ejemplo, empresas grandes de telefonía móvil).", tipo: "Oligopolio", explicacion: "Pocos oferentes con poder de mercado, pueden influir en precios y cantidades.", dificultad: "basico" },
  { descripcion: "Solo hay una empresa que vende un producto sin sustitutos cercanos y controla el precio.", tipo: "Monopolio", explicacion: "Un solo oferente con alto poder de mercado.", dificultad: "intermedio" },
  { descripcion: "Muchas empresas compiten ofreciendo productos similares pero diferenciados (por ejemplo, distintas marcas de ropa).", tipo: "Competencia monopolística", explicacion: "Hay muchos vendedores, pero cada uno ofrece un producto con cierta diferenciación.", dificultad: "intermedio" },
  { descripcion: "Un único proveedor con concesión exclusiva ofrece energía en una región, sin posibilidad de entrada de competidores.", tipo: "Monopolio", explicacion: "La exclusividad legal limita la competencia y concentra la oferta en un solo agente.", dificultad: "avanzado" },
  { descripcion: "Varias empresas dominan la oferta de automóviles, con barreras de entrada y competencia en precios y tecnología.", tipo: "Oligopolio", explicacion: "Pocos grandes oferentes con barreras de entrada, interdependencia y competencia estratégica.", dificultad: "avanzado" },
];

export const ESTRUCTURAS_MERCADO: MCQuestion[] = ESTRUCTURAS_MERCADO_RAW.map((c, i) =>
  mc({
    id: `economia_general_estructuras_mercado_${i + 1}`,
    prompt: `Identificá la estructura de mercado de la siguiente situación:\n\n${c.descripcion}`,
    opciones: MERCADO,
    indiceCorrecto: MERCADO.indexOf(c.tipo),
    explicacion: c.explicacion,
    subtipo: "estructuras_mercado",
    dificultad: c.dificultad,
  }),
);

// ── 5) gastos_fijos_variables (8 preguntas) ─────────────────────────

const GASTOS_FIJOS_VARIABLES_RAW: { descripcion: string; tipo: string; explicacion: string; dificultad: string }[] = [
  { descripcion: "El alquiler mensual del local comercial que paga la empresa.", tipo: "Gasto fijo", explicacion: "El alquiler no cambia con la producción: es fijo.", dificultad: "basico" },
  { descripcion: "El sueldo básico del personal de administración.", tipo: "Gasto fijo", explicacion: "El sueldo base no depende de cuánto se produce.", dificultad: "basico" },
  { descripcion: "Los materiales directos que se usan en cada unidad producida.", tipo: "Gasto variable", explicacion: "Aumentan con la producción: son variables.", dificultad: "basico" },
  { descripcion: "La comisión que cobra el vendedor por cada venta.", tipo: "Gasto variable", explicacion: "Depende del volumen de ventas: es variable.", dificultad: "basico" },
  { descripcion: "La amortización anual de una maquinaria.", tipo: "Gasto fijo", explicacion: "La amortización se calcula por el paso del tiempo, no por producción.", dificultad: "intermedio" },
  { descripcion: "El consumo de energía eléctrica de las máquinas que varía con la producción.", tipo: "Gasto variable", explicacion: "Si produce más, gasta más energía: es variable.", dificultad: "intermedio" },
  { descripcion: "Seguro anual del establecimiento.", tipo: "Gasto fijo", explicacion: "El seguro no varía con la producción.", dificultad: "avanzado" },
  { descripcion: "Insumos de limpieza proporcionales al número de unidades producidas.", tipo: "Gasto variable", explicacion: "Su importe depende del nivel de actividad.", dificultad: "avanzado" },
];

export const GASTOS_FIJOS_VARIABLES: MCQuestion[] = GASTOS_FIJOS_VARIABLES_RAW.map((c, i) =>
  mc({
    id: `economia_general_gastos_fijos_variables_${i + 1}`,
    prompt: `Clasificá el siguiente gasto de la empresa como Gasto fijo o Gasto variable:\n\n${c.descripcion}`,
    opciones: ["Gasto fijo", "Gasto variable"],
    indiceCorrecto: c.tipo === "Gasto fijo" ? 0 : 1,
    explicacion: c.explicacion,
    subtipo: "gastos_fijos_variables",
    dificultad: c.dificultad,
  }),
);

// ── 6) quiz_ganancia_equilibrio (2 preguntas) ────────────────────────

const QUIZ_GANANCIA_EQUILIBRIO_RAW: { enunciado: string; opciones: string[]; indiceCorrecto: number; explicacion: string; dificultad: string }[] = [
  { enunciado: "¿Qué significa que una empresa está en 'punto de equilibrio'?", opciones: ["Ganancia", "Pérdida", "Punto de equilibrio", "Margen de seguridad"], indiceCorrecto: 2, explicacion: "En el punto de equilibrio los ingresos igualan los costos totales: no hay ganancia ni pérdida.", dificultad: "basico" },
  { enunciado: "¿Qué pasa cuando una empresa vende por debajo de su punto de equilibrio?", opciones: ["Obtiene ganancia", "Está en equilibrio", "Tiene pérdida", "Maximiza beneficios"], indiceCorrecto: 2, explicacion: "Si vende menos que el punto de equilibrio, los ingresos no cubren los costos: hay pérdida.", dificultad: "basico" },
];

export const QUIZ_GANANCIA_EQUILIBRIO: MCQuestion[] = QUIZ_GANANCIA_EQUILIBRIO_RAW.map((c, i) =>
  mc({
    id: `economia_general_quiz_ganancia_equilibrio_${i + 1}`,
    prompt: c.enunciado,
    opciones: c.opciones,
    indiceCorrecto: c.indiceCorrecto,
    explicacion: c.explicacion,
    subtipo: "quiz_ganancia_equilibrio",
    dificultad: c.dificultad,
  }),
);

// ── 7) quiz_interes_simple_compuesto (2 preguntas) ──────────────────

const QUIZ_INTERES_SIMPLE_COMPUESTO_RAW: { enunciado: string; opciones: string[]; indiceCorrecto: number; explicacion: string; dificultad: string }[] = [
  { enunciado: "En el interés simple, ¿sobre qué se calcula el interés de cada período?", opciones: ["Sobre el capital acumulado con intereses anteriores", "Sobre el capital inicial siempre", "Sobre el capital más inflación", "Sobre el CFT"], indiceCorrecto: 1, explicacion: "El interés simple siempre se calcula sobre el capital original.", dificultad: "basico" },
  { enunciado: "En el interés compuesto, ¿qué ocurre con los intereses generados?", opciones: ["Se pierden al final de cada período", "Se suman al capital para generar más intereses", "Se restan del capital inicial", "No tienen efecto en el monto final"], indiceCorrecto: 1, explicacion: "En el interés compuesto, los intereses se capitalizan y generan nuevos intereses.", dificultad: "intermedio" },
];

export const QUIZ_INTERES_SIMPLE_COMPUESTO: MCQuestion[] = QUIZ_INTERES_SIMPLE_COMPUESTO_RAW.map((c, i) =>
  mc({
    id: `economia_general_quiz_interes_simple_compuesto_${i + 1}`,
    prompt: c.enunciado,
    opciones: c.opciones,
    indiceCorrecto: c.indiceCorrecto,
    explicacion: c.explicacion,
    subtipo: "quiz_interes_simple_compuesto",
    dificultad: c.dificultad,
  }),
);

// ── Barrel ─────────────────────────────────────────────────────────

export const BANCOS_ECONOMIA_GENERAL: ReadonlyArray<readonly [string, MCQuestion[]]> = [
  ["economia_general_politica_fiscal_monetaria", POLITICA_FISCAL_MONETARIA],
  ["economia_general_clasificacion_bienes", CLASIFICACION_BIENES],
  ["economia_general_agentes_economicos", AGENTES_ECONOMICOS],
  ["economia_general_estructuras_mercado", ESTRUCTURAS_MERCADO],
  ["economia_general_gastos_fijos_variables", GASTOS_FIJOS_VARIABLES],
  ["economia_general_quiz_ganancia_equilibrio", QUIZ_GANANCIA_EQUILIBRIO],
  ["economia_general_quiz_interes_simple_compuesto", QUIZ_INTERES_SIMPLE_COMPUESTO],
] as const;
