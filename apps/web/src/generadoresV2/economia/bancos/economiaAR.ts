/**
 * F6-02 — Bancos estáticos de EconomíaAR.
 *
 * Extraídos de `apps/web/src/generadoresV2/economia/EconomiaAR.ts`
 * (NO modificados — siguen vivos hasta F6-06). Cada banco corresponde a
 * un subtipo BANCO del generador (criterio: hardcoded pickOne de un
 * array, sin PRNG para la respuesta).
 *
 * Bancos migrados (5, todos los BANCO del archivo):
 *   - recibo_basico (5)
 *   - descuentos_obligatorios (4)
 *   - jurisdiccion_impuestos (9)
 *   - formal_informal (9)
 *   - monotributo (4)
 *
 * Subtipos NO migrados: 5 PARAMétricos (`aportes_17`, `neto_desde_bruto`,
 * `iva`, `iva_calculo`, `tasa_desempleo`) — la auditoría los marca
 * PARAMETRIZABLE por montos sorteados. Quedan en la fuente por ahora
 * (F6-06 los borra tras migrar a un generador paramétrico real).
 */

import type { MCQuestion } from "../../basic/types";

function tags(subtipo: string, dificultad: string): string[] {
  return ["economia", "economia-ar", `subtipo:${subtipo}`, `dificultad:${dificultad}`];
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

// ── 1) recibo_basico (5 preguntas) ─────────────────────────────────

const RECIBO_BASICO_RAW: { enunciado: string; opciones: string[]; indiceCorrecto: number; explicacion: string; dificultad: string }[] = [
  { enunciado: "En un recibo de sueldo argentino, ¿qué representa el concepto 'Sueldo básico'?", opciones: ["Los aportes que paga el empleador", "El monto base antes de adicionales y descuentos", "El neto final que cobra el trabajador", "Los reintegros por viáticos"], indiceCorrecto: 1, explicacion: "El sueldo básico es la remuneración base del trabajador, sobre la que luego se suman adicionales y se descuentan aportes.", dificultad: "basico" },
  { enunciado: "En un recibo de sueldo argentino, ¿qué representa el concepto 'Remuneraciones' o 'Haberes'?", opciones: ["Los importes que el empleador descuenta al trabajador", "Los importes que paga el empleador al trabajador por su trabajo", "Los aportes patronales que paga la empresa al Estado", "Los reintegros de gastos del trabajador"], indiceCorrecto: 1, explicacion: "Las remuneraciones o haberes son los importes brutos que el empleador paga al trabajador por su trabajo (sueldo básico, antigüedad, horas extras, etc.).", dificultad: "intermedio" },
  { enunciado: "En un recibo de sueldo, ¿qué diferencia principal hay entre un concepto remunerativo y uno no remunerativo?", opciones: ["El remunerativo no se paga, el no remunerativo sí", "El remunerativo integra la base de aportes y contribuciones", "El no remunerativo siempre se paga en efectivo", "No hay diferencias, son sinónimos"], indiceCorrecto: 1, explicacion: "Los conceptos remunerativos forman parte de la base para aportes y contribuciones; los no remunerativos no integran esa base.", dificultad: "avanzado" },
  { enunciado: "Si un recibo incluye horas extras, ¿dónde suelen aparecer y cómo impactan?", opciones: ["En Descuentos, reduciendo el neto", "En Remuneraciones, aumentando el bruto", "En Aportes del empleador, sin afectar el bruto", "En Observaciones, sin impacto económico"], indiceCorrecto: 1, explicacion: "Las horas extras son remunerativas y se suman en la sección de Remuneraciones, incrementando el sueldo bruto.", dificultad: "avanzado" },
  { enunciado: "En muchos recibos aparece una sección de 'Aportes del empleador'. ¿Qué representa?", opciones: ["Importes que se descuentan al trabajador", "Impuestos personales del trabajador", "Contribuciones que la empresa paga al sistema de seguridad social", "Bonificaciones voluntarias al trabajador"], indiceCorrecto: 2, explicacion: "Los aportes del empleador son contribuciones patronales que la empresa paga al Estado; no se descuentan del sueldo del trabajador.", dificultad: "avanzado" },
];

export const RECIBO_BASICO: MCQuestion[] = RECIBO_BASICO_RAW.map((c, i) =>
  mc({
    id: `economia_ar_recibo_basico_${i + 1}`,
    prompt: c.enunciado,
    opciones: c.opciones,
    indiceCorrecto: c.indiceCorrecto,
    explicacion: c.explicacion,
    subtipo: "recibo_basico",
    dificultad: c.dificultad,
  }),
);

// ── 2) descuentos_obligatorios (4 preguntas) ───────────────────────

const DESCUENTOS_OBLIGATORIOS_RAW: { enunciado: string; opciones: string[]; indiceCorrecto: number; explicacion: string; dificultad: string }[] = [
  { enunciado: "En un recibo de sueldo típico en Argentina, ¿qué porcentaje se descuenta para la Jubilación sobre el sueldo bruto remunerativo?", opciones: ["3%", "11%", "17%", "21%"], indiceCorrecto: 1, explicacion: "El aporte obligatorio del trabajador a la jubilación suele ser el 11% del sueldo bruto remunerativo.", dificultad: "basico" },
  { enunciado: "En un recibo de sueldo típico en Argentina, ¿qué porcentaje se descuenta para la Obra Social sobre el sueldo bruto remunerativo?", opciones: ["3%", "11%", "10,5%", "21%"], indiceCorrecto: 0, explicacion: "El aporte obligatorio del trabajador a la Obra Social suele ser el 3% del sueldo bruto remunerativo.", dificultad: "intermedio" },
  { enunciado: "En un recibo de sueldo típico en Argentina, ¿qué porcentaje se descuenta para PAMI sobre el sueldo bruto remunerativo?", opciones: ["11%", "3%", "6%", "21%"], indiceCorrecto: 1, explicacion: "El aporte obligatorio del trabajador a PAMI suele ser el 3% del sueldo bruto remunerativo.", dificultad: "avanzado" },
  { enunciado: "¿Cuál es el total de aportes del trabajador si se suman Jubilación (11%), Obra Social (3%) y PAMI (3%)?", opciones: ["14%", "15%", "17%", "21%"], indiceCorrecto: 2, explicacion: "La suma de 11% + 3% + 3% da un total de 17% de aportes obligatorios del trabajador.", dificultad: "avanzado" },
];

export const DESCUENTOS_OBLIGATORIOS: MCQuestion[] = DESCUENTOS_OBLIGATORIOS_RAW.map((c, i) =>
  mc({
    id: `economia_ar_descuentos_obligatorios_${i + 1}`,
    prompt: c.enunciado,
    opciones: c.opciones,
    indiceCorrecto: c.indiceCorrecto,
    explicacion: c.explicacion,
    subtipo: "descuentos_obligatorios",
    dificultad: c.dificultad,
  }),
);

// ── 3) jurisdiccion_impuestos (9 preguntas) ────────────────────────

const JURISDICCION = ["Nacional", "Provincial", "Municipal"];

const JURISDICCION_IMPUESTOS_RAW: { desc: string; tipo: string; detalle: string; dificultad: string }[] = [
  { desc: "IVA", tipo: "Nacional", detalle: "Impuesto nacional.", dificultad: "basico" },
  { desc: "Impuesto Inmobiliario", tipo: "Provincial", detalle: "Depende de la provincia.", dificultad: "basico" },
  { desc: "Impuesto a las Ganancias", tipo: "Nacional", detalle: "Impuesto nacional sobre la renta.", dificultad: "intermedio" },
  { desc: "Ingresos Brutos", tipo: "Provincial", detalle: "Recaudacion provincial.", dificultad: "intermedio" },
  { desc: "Tasa de Seguridad e Higiene", tipo: "Municipal", detalle: "Tasa municipal.", dificultad: "avanzado" },
  { desc: "ABL (Alumbrado, Barrido y Limpieza)", tipo: "Municipal", detalle: "Tasa local municipal.", dificultad: "avanzado" },
  { desc: "Impuesto al Cheque", tipo: "Nacional", detalle: "Grava movimientos bancarios a nivel nacional.", dificultad: "avanzado" },
  { desc: "Patente automotor", tipo: "Provincial", detalle: "Tributo provincial asociado al vehiculo.", dificultad: "avanzado" },
  { desc: "Tasa de habilitacion comercial", tipo: "Municipal", detalle: "Tributo municipal por habilitar un comercio.", dificultad: "avanzado" },
];

export const JURISDICCION_IMPUESTOS: MCQuestion[] = JURISDICCION_IMPUESTOS_RAW.map((c, i) =>
  mc({
    id: `economia_ar_jurisdiccion_impuestos_${i + 1}`,
    prompt: `¿A qué jurisdicción pertenece el impuesto/tasa: "${c.desc}"?`,
    opciones: JURISDICCION,
    indiceCorrecto: JURISDICCION.indexOf(c.tipo),
    explicacion: c.detalle,
    subtipo: "jurisdiccion_impuestos",
    dificultad: c.dificultad,
  }),
);

// ── 4) formal_informal (9 preguntas) ────────────────────────────────

const FORMAL_INFORMAL_RAW: { text: string; tipo: string; detalle: string; dificultad: string }[] = [
  { text: "Trabajo con recibo de sueldo, aportes jubilatorios y obra social.", tipo: "Formal", detalle: "Incluye aportes y marco legal.", dificultad: "basico" },
  { text: "Trabajo sin contrato ni aportes, pago en efectivo, no registrado.", tipo: "Informal", detalle: "No registrado, sin aportes.", dificultad: "basico" },
  { text: "Trabajo con ART, salario bancarizado y declaracion al Estado.", tipo: "Formal", detalle: "Protegido y registrado.", dificultad: "intermedio" },
  { text: "Changas ocasionales sin facturar ni declarar.", tipo: "Informal", detalle: "Sin registro fiscal.", dificultad: "intermedio" },
  { text: "Empleado con contrato, pero parte del salario se paga en negro.", tipo: "Informal", detalle: "Existe registro parcial, pero hay porcion no declarada.", dificultad: "avanzado" },
  { text: "Trabajador independiente que factura y paga monotributo.", tipo: "Formal", detalle: "Esta registrado y cumple obligaciones fiscales.", dificultad: "avanzado" },
  { text: "Empleado con contrato temporal registrado y aportes completos.", tipo: "Formal", detalle: "Aunque sea temporal, esta registrado.", dificultad: "avanzado" },
  { text: "Cuidador domiciliario sin recibo ni aportes, pago semanal en efectivo.", tipo: "Informal", detalle: "No hay registro ni aportes.", dificultad: "avanzado" },
  { text: "Microemprendedor que vende por redes sin facturar ni registrar actividad.", tipo: "Informal", detalle: "No esta inscripto ni emite comprobantes.", dificultad: "avanzado" },
];

export const FORMAL_INFORMAL: MCQuestion[] = FORMAL_INFORMAL_RAW.map((c, i) =>
  mc({
    id: `economia_ar_formal_informal_${i + 1}`,
    prompt: `Clasificá la situación laboral en Argentina:\n\n${c.text}`,
    opciones: ["Formal", "Informal"],
    indiceCorrecto: c.tipo === "Formal" ? 0 : 1,
    explicacion: c.detalle,
    subtipo: "formal_informal",
    dificultad: c.dificultad,
  }),
);

// ── 5) monotributo (4 preguntas) ───────────────────────────────────

const MONOTRIBUTO_RAW: { enunciado: string; opciones: string[]; indiceCorrecto: number; explicacion: string; dificultad: string }[] = [
  { enunciado: "¿Qué es el Monotributo en Argentina (concepto escolar)?", opciones: ["Un impuesto exclusivo para grandes empresas", "Un régimen simplificado para pequeños contribuyentes", "Un subsidio estatal para empleados públicos", "Una tasa municipal por comercio"], indiceCorrecto: 1, explicacion: "El Monotributo es un régimen simplificado para pequeños contribuyentes que unifica impuestos y aportes.", dificultad: "basico" },
  { enunciado: "¿Qué pagos suele unificar el Monotributo en una sola cuota?", opciones: ["IVA, Ganancias y aportes previsionales", "Impuesto inmobiliario y patentes", "Sueldos y aguinaldo", "Impuesto al cheque y tasas bancarias"], indiceCorrecto: 0, explicacion: "El Monotributo unifica componentes impositivos (IVA/Ganancias) y aportes previsionales/obra social.", dificultad: "intermedio" },
  { enunciado: "Un trabajador independiente que factura y paga una cuota mensual fija, ¿probablemente está en?", opciones: ["Relación de dependencia", "Monotributo", "Impuesto a los Sellos", "Tasa de Seguridad e Higiene"], indiceCorrecto: 1, explicacion: "El pago mensual fijo por categoría es propio del régimen de Monotributo.", dificultad: "avanzado" },
  { enunciado: "¿Cuál es el criterio principal para clasificar las categorías del Monotributo en el enfoque escolar?", opciones: ["Cantidad de empleados en nómina", "Nivel de ingresos/facturación anual", "Cantidad de provincias donde opera", "Tipo de moneda utilizada"], indiceCorrecto: 1, explicacion: "Las categorías del Monotributo se determinan principalmente por el nivel de ingresos o facturación.", dificultad: "avanzado" },
];

export const MONOTRIBUTO: MCQuestion[] = MONOTRIBUTO_RAW.map((c, i) =>
  mc({
    id: `economia_ar_monotributo_${i + 1}`,
    prompt: c.enunciado,
    opciones: c.opciones,
    indiceCorrecto: c.indiceCorrecto,
    explicacion: c.explicacion,
    subtipo: "monotributo",
    dificultad: c.dificultad,
  }),
);

// ── Barrel ─────────────────────────────────────────────────────────

export const BANCOS_ECONOMIA_AR: ReadonlyArray<readonly [string, MCQuestion[]]> = [
  ["economia_ar_recibo_basico", RECIBO_BASICO],
  ["economia_ar_descuentos_obligatorios", DESCUENTOS_OBLIGATORIOS],
  ["economia_ar_jurisdiccion_impuestos", JURISDICCION_IMPUESTOS],
  ["economia_ar_formal_informal", FORMAL_INFORMAL],
  ["economia_ar_monotributo", MONOTRIBUTO],
] as const;
