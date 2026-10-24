/**
 * F6-02 — Bancos estáticos de Finanzas.
 *
 * Extraídos de `apps/web/src/generadoresV2/economia/Finanzas.ts`
 * (NO modificados — siguen vivos hasta F6-06). Cada banco corresponde a
 * un subtipo BANCO del generador (criterio: hardcoded pickOne de un
 * array, sin PRNG para la respuesta).
 *
 * Bancos migrados (10, todos los del archivo):
 *   - presupuesto_familiar (11)
 *   - gastos_fijos_esenciales (11)
 *   - gastos_esenciales_no_esenciales (12)
 *   - ahorro_consumo (9)
 *   - deuda_buena_mala (10) — canónico de `quiz_deuda_buena_mala` en EG
 *   - cft_vs_interes (8) — canónico de `quiz_cft_interes` en EG
 *   - liquidez_personal (11) — canónico de `quiz_liquidez` en EG
 *   - ingresos_activos_pasivos (10)
 *   - publicidad_enganosa (8) — canónico de `quiz_publicidad_enganosa` en EG
 *   - seguros_familia (7)
 *
 * Subtipos NO migrados: 3 PARAMétricos (`interes_simple`,
 * `interes_compuesto`, `comparacion_inversiones`) — la auditoría los
 * marca PARAMETRIZABLE por cómputo de interés. Quedan en la fuente
 * (F6-06 los borra tras migrar a un generador paramétrico real).
 *
 * Nota: cft_vs_interes, liquidez_personal y presupuesto_familiar son
 * lookup puro en el código (sin PRNG), pero la auditoría los marca
 * PARAMETRIZABLE por "montos sorteados + cómputo". Se incluyen acá
 * porque en el código NO hay tales montos — son pools hardcoded.
 */

import type { MCQuestion } from "../../basic/types";

function tags(subtipo: string, dificultad: string): string[] {
  return ["economia", "finanzas", `subtipo:${subtipo}`, `dificultad:${dificultad}`];
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

// ── 1) presupuesto_familiar (11 preguntas) ─────────────────────────

const CATEGORIA_PRESUPUESTO = ["Ingreso", "Gasto", "Ahorro"];

const PRESUPUESTO_FAMILIAR_RAW: { descripcion: string; categoria: string; dificultad: string }[] = [
  { descripcion: "Sueldo mensual que cobra una persona por su trabajo.", categoria: "Ingreso", dificultad: "basico" },
  { descripcion: "Pago mensual del alquiler de la vivienda.", categoria: "Gasto", dificultad: "basico" },
  { descripcion: "Pago de la factura de luz.", categoria: "Gasto", dificultad: "basico" },
  { descripcion: "Parte del dinero que se guarda todos los meses para emergencias.", categoria: "Ahorro", dificultad: "basico" },
  { descripcion: "Horas extras cobradas a fin de mes.", categoria: "Ingreso", dificultad: "basico" },
  { descripcion: "Compra mensual de alimentos básicos.", categoria: "Gasto", dificultad: "basico" },
  { descripcion: "Monto guardado mensualmente para comprar un electrodoméstico a futuro.", categoria: "Ahorro", dificultad: "basico" },
  { descripcion: "Ingreso por venta ocasional de un mueble usado.", categoria: "Ingreso", dificultad: "intermedio" },
  { descripcion: "Pago del seguro del hogar.", categoria: "Gasto", dificultad: "intermedio" },
  { descripcion: "Parte del ingreso que se aparta para invertir en un plazo fijo.", categoria: "Ahorro", dificultad: "avanzado" },
  { descripcion: "Pago de una cuota escolar mensual.", categoria: "Gasto", dificultad: "avanzado" },
];

export const PRESUPUESTO_FAMILIAR: MCQuestion[] = PRESUPUESTO_FAMILIAR_RAW.map((c, i) =>
  mc({
    id: `finanzas_presupuesto_familiar_${i + 1}`,
    prompt: `En un presupuesto familiar, ¿cómo se clasifica el siguiente concepto?\n\n${c.descripcion}`,
    opciones: CATEGORIA_PRESUPUESTO,
    indiceCorrecto: CATEGORIA_PRESUPUESTO.indexOf(c.categoria),
    explicacion:
      "En el presupuesto familiar se separan los Ingresos (entradas de dinero), los Gastos (salidas de dinero) y el Ahorro (parte del ingreso que se reserva y no se gasta).",
    subtipo: "presupuesto_familiar",
    dificultad: c.dificultad,
  }),
);

// ── 2) gastos_fijos_esenciales (11 preguntas) ─────────────────────

const TIPO_GASTO_FIJO = ["Gasto fijo esencial", "Gasto variable esencial", "Gasto no esencial"];

const GASTOS_FIJOS_ESENCIALES_RAW: { descripcion: string; tipo: string; dificultad: string }[] = [
  { descripcion: "Pago mensual de la factura de luz.", tipo: "Gasto fijo esencial", dificultad: "basico" },
  { descripcion: "Pago mensual de la factura de gas.", tipo: "Gasto fijo esencial", dificultad: "basico" },
  { descripcion: "Pago del alquiler de la vivienda.", tipo: "Gasto fijo esencial", dificultad: "basico" },
  { descripcion: "Compra semanal de alimentos básicos.", tipo: "Gasto variable esencial", dificultad: "basico" },
  { descripcion: "Compra de ropa de marca por moda.", tipo: "Gasto no esencial", dificultad: "basico" },
  { descripcion: "Salida al cine y comida rápida los fines de semana.", tipo: "Gasto no esencial", dificultad: "basico" },
  { descripcion: "Pago mensual del servicio de internet.", tipo: "Gasto fijo esencial", dificultad: "basico" },
  { descripcion: "Pago mensual del abono de transporte público.", tipo: "Gasto variable esencial", dificultad: "intermedio" },
  { descripcion: "Cuota mensual del gimnasio.", tipo: "Gasto no esencial", dificultad: "intermedio" },
  { descripcion: "Compra de medicamentos de uso permanente.", tipo: "Gasto variable esencial", dificultad: "avanzado" },
  { descripcion: "Pago anual prorrateado de un seguro del hogar.", tipo: "Gasto fijo esencial", dificultad: "avanzado" },
];

export const GASTOS_FIJOS_ESENCIALES: MCQuestion[] = GASTOS_FIJOS_ESENCIALES_RAW.map((c, i) =>
  mc({
    id: `finanzas_gastos_fijos_esenciales_${i + 1}`,
    prompt: `Clasificá el siguiente gasto del hogar:\n\n${c.descripcion}`,
    opciones: TIPO_GASTO_FIJO,
    indiceCorrecto: TIPO_GASTO_FIJO.indexOf(c.tipo),
    explicacion:
      "Los gastos fijos esenciales son pagos periódicos necesarios para el funcionamiento básico del hogar (luz, gas, agua, alquiler, internet). Los variables esenciales pueden cambiar mes a mes (alimentos, transporte) y los no esenciales son prescindibles.",
    subtipo: "gastos_fijos_esenciales",
    dificultad: c.dificultad,
  }),
);

// ── 3) gastos_esenciales_no_esenciales (12 preguntas) ──────────────

const GASTOS_ESENCIALES_NO_ESENCIALES_RAW: { descripcion: string; tipo: string; dificultad: string }[] = [
  { descripcion: "Compra mensual de alimentos básicos para la familia.", tipo: "Gasto esencial", dificultad: "basico" },
  { descripcion: "Pago del alquiler o cuota de la vivienda.", tipo: "Gasto esencial", dificultad: "basico" },
  { descripcion: "Pago de servicios básicos (luz, gas, agua).", tipo: "Gasto esencial", dificultad: "basico" },
  { descripcion: "Pago mensual del transporte para ir a trabajar o estudiar.", tipo: "Gasto esencial", dificultad: "basico" },
  { descripcion: "Compra de medicamentos recetados.", tipo: "Gasto esencial", dificultad: "basico" },
  { descripcion: "Suscripción a una plataforma de streaming para ocio.", tipo: "Gasto no esencial", dificultad: "basico" },
  { descripcion: "Compra de ropa de marca por moda, sin necesidad urgente.", tipo: "Gasto no esencial", dificultad: "basico" },
  { descripcion: "Salidas frecuentes a comer afuera por gusto.", tipo: "Gasto no esencial", dificultad: "basico" },
  { descripcion: "Pago mensual de un plan de internet para estudiar/trabajar.", tipo: "Gasto esencial", dificultad: "intermedio" },
  { descripcion: "Compra de entradas para un recital.", tipo: "Gasto no esencial", dificultad: "intermedio" },
  { descripcion: "Reparación de un electrodoméstico esencial en el hogar.", tipo: "Gasto esencial", dificultad: "avanzado" },
  { descripcion: "Vacaciones en un destino turístico de lujo.", tipo: "Gasto no esencial", dificultad: "avanzado" },
];

export const GASTOS_ESENCIALES_NO_ESENCIALES: MCQuestion[] = GASTOS_ESENCIALES_NO_ESENCIALES_RAW.map((c, i) =>
  mc({
    id: `finanzas_gastos_esenciales_no_esenciales_${i + 1}`,
    prompt: `En un presupuesto familiar, ¿cómo clasificarías el siguiente gasto?\n\n${c.descripcion}`,
    opciones: ["Gasto esencial", "Gasto no esencial"],
    indiceCorrecto: c.tipo === "Gasto esencial" ? 0 : 1,
    explicacion:
      "Los gastos esenciales son necesarios para cubrir necesidades básicas (vivienda, alimentación, salud, transporte). Los no esenciales se relacionan con gustos o consumos que se pueden recortar sin afectar lo básico.",
    subtipo: "gastos_esenciales_no_esenciales",
    dificultad: c.dificultad,
  }),
);

// ── 4) ahorro_consumo (9 preguntas) ────────────────────────────────

const AHORRO_CONSUMO_RAW: { descripcion: string; tipo: string; dificultad: string }[] = [
  { descripcion: "Separar una parte fija del sueldo todos los meses para un fondo de emergencia.", tipo: "Ahorro", dificultad: "basico" },
  { descripcion: "Comparar precios y elegir un producto más económico de calidad similar.", tipo: "Consumo responsable", dificultad: "basico" },
  { descripcion: "Postergar una compra impulsiva porque no es necesaria en este momento.", tipo: "Consumo responsable", dificultad: "basico" },
  { descripcion: "Guardar dinero durante un año para comprar una computadora que se necesita para estudiar.", tipo: "Ahorro", dificultad: "basico" },
  { descripcion: "Destinar una parte del ingreso para pagar deudas antes de gastar en ocio.", tipo: "Consumo responsable", dificultad: "basico" },
  { descripcion: "Armar un presupuesto mensual para controlar gastos y ahorrar.", tipo: "Ahorro", dificultad: "intermedio" },
  { descripcion: "Comprar un producto con descuento real después de comparar precios.", tipo: "Consumo responsable", dificultad: "intermedio" },
  { descripcion: "Destinar parte del aguinaldo a un fondo para arreglos del hogar.", tipo: "Ahorro", dificultad: "avanzado" },
  { descripcion: "Elegir una opción financiada con cuotas sin interés y dentro del presupuesto.", tipo: "Consumo responsable", dificultad: "avanzado" },
];

export const AHORRO_CONSUMO: MCQuestion[] = AHORRO_CONSUMO_RAW.map((c, i) =>
  mc({
    id: `finanzas_ahorro_consumo_${i + 1}`,
    prompt: `En la siguiente situación, ¿predomina el Ahorro o el Consumo responsable?\n\n${c.descripcion}`,
    opciones: ["Ahorro", "Consumo responsable"],
    indiceCorrecto: c.tipo === "Ahorro" ? 0 : 1,
    explicacion:
      "El ahorro es guardar parte del ingreso para el futuro. El consumo responsable implica gastar de forma consciente, priorizando necesidades, comparando opciones y evitando compras impulsivas.",
    subtipo: "ahorro_consumo",
    dificultad: c.dificultad,
  }),
);

// ── 5) deuda_buena_mala (10 preguntas, canónico de quiz_* en EG) ───

const DEUDA_BUENA_MALA_RAW: { descripcion: string; tipo: string; dificultad: string }[] = [
  { descripcion: "Sacar un crédito para estudiar una carrera que aumentará tus posibilidades de ingreso.", tipo: "Deuda buena", dificultad: "basico" },
  { descripcion: "Pedir un préstamo para comprar herramientas que permitirán generar más trabajo o ingresos.", tipo: "Deuda buena", dificultad: "basico" },
  { descripcion: "Financiar un electrodoméstico necesario en cuotas razonables y dentro del presupuesto.", tipo: "Deuda buena", dificultad: "basico" },
  { descripcion: "Pagar con tarjeta de crédito salidas frecuentes a comer afuera y dejar el saldo financiado.", tipo: "Deuda mala", dificultad: "basico" },
  { descripcion: "Endeudarse para comprar ropa de marca y objetos de lujo que no son necesarios.", tipo: "Deuda mala", dificultad: "basico" },
  { descripcion: "Sacar préstamos pequeños repetidos para cubrir gastos superfluos sin plan de pago.", tipo: "Deuda mala", dificultad: "basico" },
  { descripcion: "Pedir un crédito para reparar una herramienta de trabajo clave.", tipo: "Deuda buena", dificultad: "intermedio" },
  { descripcion: "Usar la tarjeta para comprar regalos caros sin evaluar el presupuesto.", tipo: "Deuda mala", dificultad: "intermedio" },
  { descripcion: "Financiar un curso de capacitación que aumenta ingresos futuros.", tipo: "Deuda buena", dificultad: "avanzado" },
  { descripcion: "Refinanciar un saldo con tasas altas para gastos no esenciales.", tipo: "Deuda mala", dificultad: "avanzado" },
];

export const DEUDA_BUENA_MALA: MCQuestion[] = DEUDA_BUENA_MALA_RAW.map((c, i) =>
  mc({
    id: `finanzas_deuda_buena_mala_${i + 1}`,
    prompt: `Clasificá la siguiente situación de endeudamiento:\n\n${c.descripcion}`,
    opciones: ["Deuda buena", "Deuda mala"],
    indiceCorrecto: c.tipo === "Deuda buena" ? 0 : 1,
    explicacion:
      "Se llama 'deuda buena' a aquella que ayuda a mejorar la capacidad futura de generar ingresos o cubrir necesidades importantes. La 'deuda mala' se usa para consumos innecesarios o impulsivos.",
    subtipo: "deuda_buena_mala",
    dificultad: c.dificultad,
  }),
);

// ── 6) cft_vs_interes (8 preguntas, canónico de quiz_* en EG) ──────

const CFT_VS_INTERES_RAW: { descripcion: string; respuesta: string; dificultad: string }[] = [
  { descripcion: "Es el porcentaje que se aplica sobre el capital para calcular lo que se paga por usar el dinero durante un tiempo.", respuesta: "Interés", dificultad: "basico" },
  { descripcion: "Incluye no solo el interés, sino también comisiones, impuestos y otros gastos asociados al crédito.", respuesta: "Costo financiero total (CFT)", dificultad: "basico" },
  { descripcion: "En la tarjeta de crédito, el valor más importante para comparar ofertas porque muestra el costo real del financiamiento.", respuesta: "Costo financiero total (CFT)", dificultad: "basico" },
  { descripcion: "En un préstamo, el banco muestra un número más bajo que corresponde solo al rendimiento del dinero.", respuesta: "Interés", dificultad: "basico" },
  { descripcion: "En un crédito, el indicador que suma intereses, gastos administrativos y seguros obligatorios.", respuesta: "Costo financiero total (CFT)", dificultad: "intermedio" },
  { descripcion: "Es la tasa que se usa en la fórmula para calcular cuánto se paga por el préstamo.", respuesta: "Interés", dificultad: "intermedio" },
  { descripcion: "Dato que permite comparar préstamos con diferentes comisiones y cargos.", respuesta: "Costo financiero total (CFT)", dificultad: "avanzado" },
  { descripcion: "Porcentaje anual que representa el costo básico de usar dinero prestado.", respuesta: "Interés", dificultad: "avanzado" },
];

export const CFT_VS_INTERES: MCQuestion[] = CFT_VS_INTERES_RAW.map((c, i) =>
  mc({
    id: `finanzas_cft_vs_interes_${i + 1}`,
    prompt: `El siguiente enunciado se refiere principalmente a Interés o a Costo financiero total (CFT):\n\n${c.descripcion}`,
    opciones: ["Interés", "Costo financiero total (CFT)"],
    indiceCorrecto: c.respuesta === "Interés" ? 0 : 1,
    explicacion:
      "El interés es solo la parte que se paga por usar el dinero. El CFT incluye intereses más todos los gastos y comisiones, por eso es el indicador más completo para comparar créditos.",
    subtipo: "cft_vs_interes",
    dificultad: c.dificultad,
  }),
);

// ── 7) liquidez_personal (11 preguntas, canónico de quiz_* en EG) ──

const LIQUIDEZ_PERSONAL_RAW: { descripcion: string; tipo: string; dificultad: string }[] = [
  { descripcion: "Efectivo en la billetera.", tipo: "Dinero disponible", dificultad: "basico" },
  { descripcion: "Saldo en caja de ahorro que se puede retirar con tarjeta de débito.", tipo: "Dinero disponible", dificultad: "basico" },
  { descripcion: "Plazo fijo a 30 días que todavía no venció.", tipo: "Dinero inmovilizado", dificultad: "basico" },
  { descripcion: "Dinero usado para comprar un electrodoméstico en cuotas ya firmado.", tipo: "Dinero inmovilizado", dificultad: "basico" },
  { descripcion: "Saldo en una cuenta de pago digital (billetera virtual) para usar con QR.", tipo: "Dinero disponible", dificultad: "basico" },
  { descripcion: "Ahorros invertidos en un terreno que no se piensa vender pronto.", tipo: "Dinero inmovilizado", dificultad: "basico" },
  { descripcion: "Saldo disponible en una cuenta sueldo para usar con tarjeta.", tipo: "Dinero disponible", dificultad: "intermedio" },
  { descripcion: "Inversión en bonos que no se piensa vender a corto plazo.", tipo: "Dinero inmovilizado", dificultad: "intermedio" },
  { descripcion: "Dinero en una caja de ahorro con extracción inmediata.", tipo: "Dinero disponible", dificultad: "avanzado" },
  { descripcion: "Compra de un vehículo con intención de mantenerlo varios años.", tipo: "Dinero inmovilizado", dificultad: "avanzado" },
  { descripcion: "Aportes hechos a largo plazo en un plan de retiro/jubilación.", tipo: "Dinero inmovilizado", dificultad: "avanzado" },
];

export const LIQUIDEZ_PERSONAL: MCQuestion[] = LIQUIDEZ_PERSONAL_RAW.map((c, i) =>
  mc({
    id: `finanzas_liquidez_personal_${i + 1}`,
    prompt: `Clasificá el siguiente recurso del hogar según su liquidez:\n\n${c.descripcion}`,
    opciones: ["Dinero disponible", "Dinero inmovilizado"],
    indiceCorrecto: c.tipo === "Dinero disponible" ? 0 : 1,
    explicacion:
      "La liquidez es la facilidad y rapidez con la que algo se puede convertir en dinero para usar. Efectivo y saldos en cuentas son dinero disponible; inversiones a plazo, bienes y aportes de largo plazo son dinero inmovilizado.",
    subtipo: "liquidez_personal",
    dificultad: c.dificultad,
  }),
);

// ── 8) ingresos_activos_pasivos (10 preguntas) ─────────────────────

const INGRESOS_ACTIVOS_PASIVOS_RAW: { descripcion: string; tipo: string; dificultad: string }[] = [
  { descripcion: "Sueldo mensual que se cobra por ir a trabajar a una empresa.", tipo: "Ingreso activo", dificultad: "basico" },
  { descripcion: "Honorarios por trabajos realizados como profesional independiente.", tipo: "Ingreso activo", dificultad: "basico" },
  { descripcion: "Cobro mensual de un alquiler por una vivienda propia.", tipo: "Ingreso pasivo", dificultad: "basico" },
  { descripcion: "Cobro de intereses por un plazo fijo o inversión financiera sin trabajo adicional.", tipo: "Ingreso pasivo", dificultad: "basico" },
  { descripcion: "Pagos por horas extras realizados los fines de semana.", tipo: "Ingreso activo", dificultad: "basico" },
  { descripcion: "Ganancias que se reciben por derechos de autor de un libro publicado.", tipo: "Ingreso pasivo", dificultad: "basico" },
  { descripcion: "Pago por clases particulares dictadas los fines de semana.", tipo: "Ingreso activo", dificultad: "intermedio" },
  { descripcion: "Cobro mensual por alquilar una habitación de la casa.", tipo: "Ingreso pasivo", dificultad: "intermedio" },
  { descripcion: "Comisiones por ventas realizadas en un trabajo dependiente.", tipo: "Ingreso activo", dificultad: "avanzado" },
  { descripcion: "Ingresos por dividendos de acciones sin trabajo adicional.", tipo: "Ingreso pasivo", dificultad: "avanzado" },
];

export const INGRESOS_ACTIVOS_PASIVOS: MCQuestion[] = INGRESOS_ACTIVOS_PASIVOS_RAW.map((c, i) =>
  mc({
    id: `finanzas_ingresos_activos_pasivos_${i + 1}`,
    prompt: `Clasificá el siguiente ingreso del hogar:\n\n${c.descripcion}`,
    opciones: ["Ingreso activo", "Ingreso pasivo"],
    indiceCorrecto: c.tipo === "Ingreso activo" ? 0 : 1,
    explicacion:
      "El ingreso activo se obtiene directamente por el trabajo (sueldo, honorarios). El ingreso pasivo proviene de inversiones o bienes que generan dinero con poco trabajo diario (alquileres, intereses, regalías).",
    subtipo: "ingresos_activos_pasivos",
    dificultad: c.dificultad,
  }),
);

// ── 9) publicidad_enganosa (8 preguntas, canónico de quiz_* en EG) ──

const PUBLICIDAD_ENGANOSA_RAW: { anuncio: string; tipo: string; consejo: string; dificultad: string }[] = [
  {
    anuncio: "\"Credito SIN INTERES en 24 cuotas. CFT 120% TNA 80%\" (en letra muy pequenia casi ilegible).",
    tipo: "Publicidad engañosa",
    consejo: "Promete 'sin interes', pero el CFT y la tasa aparecen escondidos: hay costos financieros importantes.",
    dificultad: "basico",
  },
  {
    anuncio: "\"Llevate hoy y empeza a pagar dentro de 6 meses. No aclara tasa ni CFT en ningun lugar visible.\"",
    tipo: "Publicidad engañosa",
    consejo: "Oculta informacion clave sobre el costo del credito, lo que dificulta una decision informada.",
    dificultad: "basico",
  },
  {
    anuncio: "\"Credito personal: TNA 60%, CFT 85%. Monto minimo, maximo, gastos y plazos claramente detallados.\"",
    tipo: "Publicidad clara",
    consejo: "La tasa y el CFT estan visibles; permite comparar con otras ofertas y entender el costo real.",
    dificultad: "basico",
  },
  {
    anuncio: "\"Hasta 30% de descuento pagando en efectivo. Sin intereses ni costos financieros adicionales.\"",
    tipo: "Publicidad clara",
    consejo: "Se trata de un descuento por pago contado, no de un crédito; no hay financiamiento escondido.",
    dificultad: "basico",
  },
  {
    anuncio: "\"12 cuotas fijas. TNA 50% y CFT 90% visibles en la letra principal.\"",
    tipo: "Publicidad clara",
    consejo: "Informa claramente tasas y CFT, lo que permite comparar el costo real.",
    dificultad: "intermedio",
  },
  {
    anuncio: "\"Sin interes en 18 cuotas\" pero solo muestra un numero de telefono sin tasas detalladas.",
    tipo: "Publicidad engañosa",
    consejo: "No detalla CFT ni tasas; la falta de informacion clave puede ocultar costos.",
    dificultad: "intermedio",
  },
  {
    anuncio: "\"Paga en 24 cuotas. CFT 130%\" pero la letra chica agrega seguros y cargos no explicados.",
    tipo: "Publicidad engañosa",
    consejo: "Aunque menciona CFT, agrega cargos ocultos sin detallar; es poco transparente.",
    dificultad: "avanzado",
  },
  {
    anuncio: "\"Financiacion: TNA 55%, CFT 78%, incluye gastos administrativos.\"",
    tipo: "Publicidad clara",
    consejo: "Detalla tasas y cargos, permitiendo entender el costo total del credito.",
    dificultad: "avanzado",
  },
];

export const PUBLICIDAD_ENGANOSA: MCQuestion[] = PUBLICIDAD_ENGANOSA_RAW.map((c, i) =>
  mc({
    id: `finanzas_publicidad_enganosa_${i + 1}`,
    prompt: `Leé el siguiente anuncio y decidí si se trata de publicidad engañosa o clara para el consumidor:\n\n${c.anuncio}`,
    opciones: ["Publicidad engañosa", "Publicidad clara"],
    indiceCorrecto: c.tipo === "Publicidad engañosa" ? 0 : 1,
    explicacion:
      "Para tomar decisiones inteligentes de compra hay que buscar siempre el CFT, las tasas y los costos detallados. " + c.consejo,
    subtipo: "publicidad_enganosa",
    dificultad: c.dificultad,
  }),
);

// ── 10) seguros_familia (7 preguntas) ─────────────────────────────

const SEGUROS_FAMILIA_RAW: { enunciado: string; opciones: string[]; correcta: string; explicacion: string; dificultad: string }[] = [
  { enunciado: "Una familia contrata una póliza que cubre daños por incendio y robo en su vivienda.", opciones: ["Seguro de hogar", "Seguro de auto", "Seguro de vida", "Seguro de salud"], correcta: "Seguro de hogar", explicacion: "El seguro de hogar protege la vivienda y su contenido frente a riesgos como incendio, robo o daños.", dificultad: "basico" },
  { enunciado: "Una persona paga una póliza que cubre los gastos médicos en caso de enfermedad o accidente.", opciones: ["Seguro de hogar", "Seguro de auto", "Seguro de vida", "Seguro de salud"], correcta: "Seguro de salud", explicacion: "El seguro de salud ayuda a cubrir gastos médicos e internaciones, protegiendo la economía familiar.", dificultad: "basico" },
  { enunciado: "Una persona asegura su auto para que la compañía cubra daños a terceros y al vehículo en un choque.", opciones: ["Seguro de hogar", "Seguro de auto", "Seguro de vida", "Seguro de salud"], correcta: "Seguro de auto", explicacion: "El seguro de auto cubre daños propios y/o a terceros, reduciendo el impacto económico de un accidente.", dificultad: "basico" },
  { enunciado: "Una familia contrata un seguro que paga una suma de dinero a los beneficiarios si la persona asegurada fallece.", opciones: ["Seguro de hogar", "Seguro de auto", "Seguro de vida", "Seguro de salud"], correcta: "Seguro de vida", explicacion: "El seguro de vida busca proteger económicamente a la familia si falta el ingreso principal.", dificultad: "basico" },
  { enunciado: "Una persona contrata una póliza que cubre consultas y estudios médicos sin pagar todo de su bolsillo.", opciones: ["Seguro de hogar", "Seguro de auto", "Seguro de vida", "Seguro de salud"], correcta: "Seguro de salud", explicacion: "El seguro de salud cubre gastos médicos y ayuda a reducir el costo de atención.", dificultad: "intermedio" },
  { enunciado: "Una persona paga una póliza que entrega una suma a sus familiares si sufre un accidente fatal.", opciones: ["Seguro de hogar", "Seguro de auto", "Seguro de vida", "Seguro de salud"], correcta: "Seguro de vida", explicacion: "El seguro de vida protege a los beneficiarios ante el fallecimiento.", dificultad: "avanzado" },
  { enunciado: "Una póliza protege el contenido de la vivienda ante incendio o robo.", opciones: ["Seguro de hogar", "Seguro de auto", "Seguro de vida", "Seguro de salud"], correcta: "Seguro de hogar", explicacion: "El seguro de hogar cubre la vivienda y sus bienes.", dificultad: "avanzado" },
];

export const SEGUROS_FAMILIA: MCQuestion[] = SEGUROS_FAMILIA_RAW.map((c, i) =>
  mc({
    id: `finanzas_seguros_familia_${i + 1}`,
    prompt: c.enunciado,
    opciones: c.opciones,
    indiceCorrecto: c.opciones.indexOf(c.correcta),
    explicacion: c.explicacion,
    subtipo: "seguros_familia",
    dificultad: c.dificultad,
  }),
);

// ── Barrel ─────────────────────────────────────────────────────────

export const BANCOS_FINANZAS: ReadonlyArray<readonly [string, MCQuestion[]]> = [
  ["finanzas_presupuesto_familiar", PRESUPUESTO_FAMILIAR],
  ["finanzas_gastos_fijos_esenciales", GASTOS_FIJOS_ESENCIALES],
  ["finanzas_gastos_esenciales_no_esenciales", GASTOS_ESENCIALES_NO_ESENCIALES],
  ["finanzas_ahorro_consumo", AHORRO_CONSUMO],
  ["finanzas_deuda_buena_mala", DEUDA_BUENA_MALA],
  ["finanzas_cft_vs_interes", CFT_VS_INTERES],
  ["finanzas_liquidez_personal", LIQUIDEZ_PERSONAL],
  ["finanzas_ingresos_activos_pasivos", INGRESOS_ACTIVOS_PASIVOS],
  ["finanzas_publicidad_enganosa", PUBLICIDAD_ENGANOSA],
  ["finanzas_seguros_familia", SEGUROS_FAMILIA],
] as const;
