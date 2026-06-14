/**
 * F6-02 — Bancos estáticos de Contabilidad.
 *
 * Extraídos de `apps/web/src/generadoresV2/economia/Contabilidad.ts`
 * (NO modificados — siguen vivos hasta F6-06). Cada banco corresponde a
 * un subtipo BANCO del generador (criterio: hardcoded pickOne de un
 * array, sin PRNG para la respuesta).
 *
 * Bancos migrados (7, todos los del archivo):
 *   - clasificacion_cuentas (14)
 *   - naturaleza_cuentas (14)
 *   - ubicacion_estados (13)
 *   - hechos_patrimonio (8)
 *   - bienes_derechos_obligaciones (11)
 *   - aportes_contribuciones (8) — canónico de `quiz_aportes_contribuciones` en EG
 *   - variaciones_patrimoniales (8)
 *
 * Subtipos NO migrados: 1 PARAMétrico (`saldo_normal` — usa randInt
 * para débitos/créditos y computa el saldo). Queda en la fuente
 * (F6-06 lo borra tras migrar a un generador paramétrico real, si
 * aplica).
 *
 * Nota: `aportes_contribuciones` y `variaciones_patrimoniales` son
 * lookup puro en el código, pero la auditoría los marca
 * PARAMETRIZABLE. Se incluyen acá porque en el código NO hay
 * cómputo — son pickOne de un array hardcoded.
 */

import type { MCQuestion } from "../../basic/types";

function tags(subtipo: string, dificultad: string): string[] {
  return ["economia", "contabilidad", `subtipo:${subtipo}`, `dificultad:${dificultad}`];
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

// ── 1) clasificacion_cuentas (14 preguntas) ────────────────────────

const CLASIFICACION_OPCIONES = ["Activo", "Pasivo", "Patrimonio Neto", "R+", "R-"];

const CLASIFICACION_CUENTAS_RAW: { nombre: string; clasificacion: string; dificultad?: string }[] = [
  { nombre: "Caja", clasificacion: "Activo" },
  { nombre: "Banco c/c", clasificacion: "Activo" },
  { nombre: "Clientes", clasificacion: "Activo" },
  { nombre: "Muebles y Útiles", clasificacion: "Activo" },
  { nombre: "Deudas Bancarias", clasificacion: "Pasivo" },
  { nombre: "Proveedores", clasificacion: "Pasivo" },
  { nombre: "Sueldos a Pagar", clasificacion: "Pasivo" },
  { nombre: "Capital", clasificacion: "Patrimonio Neto" },
  { nombre: "Reservas", clasificacion: "Patrimonio Neto" },
  { nombre: "Resultados Acumulados", clasificacion: "Patrimonio Neto" },
  { nombre: "Ventas", clasificacion: "R+" },
  { nombre: "Intereses Ganados", clasificacion: "R+" },
  { nombre: "Sueldos y Jornales", clasificacion: "R-" },
  { nombre: "Alquileres Perdidos", clasificacion: "R-" },
];

export const CLASIFICACION_CUENTAS: MCQuestion[] = CLASIFICACION_CUENTAS_RAW.map((c, i) =>
  mc({
    id: `contabilidad_clasificacion_cuentas_${i + 1}`,
    prompt: `La cuenta "${c.nombre}" se clasifica como:`,
    opciones: CLASIFICACION_OPCIONES,
    indiceCorrecto: CLASIFICACION_OPCIONES.indexOf(c.clasificacion),
    explicacion:
      "Se clasifican las cuentas según si representan bienes/derechos (Activo), deudas (Pasivo), aportes y resultados acumulados (Patrimonio Neto) o resultados del ejercicio (R+ ingresos, R- costos/gastos).",
    subtipo: "clasificacion_cuentas",
    dificultad: "intermedio",
  }),
);

// ── 2) naturaleza_cuentas (14 preguntas) ───────────────────────────

const NATURALEZA_CUENTAS_RAW: { nombre: string; naturaleza: string; dificultad?: string }[] = [
  { nombre: "Caja", naturaleza: "Deudora" },
  { nombre: "Banco c/c", naturaleza: "Deudora" },
  { nombre: "Clientes", naturaleza: "Deudora" },
  { nombre: "Mercaderías", naturaleza: "Deudora" },
  { nombre: "Muebles y Útiles", naturaleza: "Deudora" },
  { nombre: "Anticipos a Proveedores", naturaleza: "Deudora" },
  { nombre: "Gastos Pagados por Adelantado", naturaleza: "Deudora" },
  { nombre: "Capital", naturaleza: "Acreedora" },
  { nombre: "Reservas", naturaleza: "Acreedora" },
  { nombre: "Proveedores", naturaleza: "Acreedora" },
  { nombre: "Deudas Bancarias", naturaleza: "Acreedora" },
  { nombre: "Resultados Acumulados", naturaleza: "Acreedora" },
  { nombre: "Documentos a Pagar", naturaleza: "Acreedora" },
  { nombre: "Anticipos de Clientes", naturaleza: "Acreedora" },
];

export const NATURALEZA_CUENTAS: MCQuestion[] = NATURALEZA_CUENTAS_RAW.map((c, i) =>
  mc({
    id: `contabilidad_naturaleza_cuentas_${i + 1}`,
    prompt: `¿Qué naturaleza tiene la cuenta "${c.nombre}"?`,
    opciones: ["Deudora", "Acreedora"],
    indiceCorrecto: c.naturaleza === "Deudora" ? 0 : 1,
    explicacion:
      "Las cuentas de Activo y gastos tienen naturaleza Deudora; las de Pasivo, Patrimonio Neto e ingresos tienen naturaleza Acreedora.",
    subtipo: "naturaleza_cuentas",
    dificultad: "intermedio",
  }),
);

// ── 3) ubicacion_estados (13 preguntas) ────────────────────────────

const UBICACION_OPCIONES = [
  "Activo Corriente",
  "Activo No Corriente",
  "Pasivo Corriente",
  "Pasivo No Corriente",
  "Resultados (Ingresos)",
  "Resultados (Costos/Gastos)",
];

const UBICACION_ESTADOS_RAW: { nombre: string; ubicacion: string; dificultad?: string }[] = [
  { nombre: "Caja", ubicacion: "Activo Corriente" },
  { nombre: "Banco c/c", ubicacion: "Activo Corriente" },
  { nombre: "Clientes", ubicacion: "Activo Corriente" },
  { nombre: "Mercaderías", ubicacion: "Activo Corriente" },
  { nombre: "Muebles y Útiles", ubicacion: "Activo No Corriente" },
  { nombre: "Inmuebles", ubicacion: "Activo No Corriente" },
  { nombre: "Proveedores", ubicacion: "Pasivo Corriente" },
  { nombre: "Sueldos a Pagar", ubicacion: "Pasivo Corriente" },
  { nombre: "Préstamos a Largo Plazo", ubicacion: "Pasivo No Corriente" },
  { nombre: "Ventas", ubicacion: "Resultados (Ingresos)" },
  { nombre: "Intereses Ganados", ubicacion: "Resultados (Ingresos)" },
  { nombre: "Sueldos y Jornales", ubicacion: "Resultados (Costos/Gastos)" },
  { nombre: "Alquileres Perdidos", ubicacion: "Resultados (Costos/Gastos)" },
];

export const UBICACION_ESTADOS: MCQuestion[] = UBICACION_ESTADOS_RAW.map((c, i) =>
  mc({
    id: `contabilidad_ubicacion_estados_${i + 1}`,
    prompt: `¿Dónde se ubica la cuenta "${c.nombre}" en los estados contables?`,
    opciones: UBICACION_OPCIONES,
    indiceCorrecto: UBICACION_OPCIONES.indexOf(c.ubicacion),
    explicacion:
      "En el Balance se separan las cuentas según su exigibilidad o realización (Corriente/No Corriente) y en el Estado de Resultados se presentan ingresos y costos/gastos del período.",
    subtipo: "ubicacion_estados",
    dificultad: "intermedio",
  }),
);

// ── 4) hechos_patrimonio (8 preguntas) ─────────────────────────────

const HECHOS_PATRIMONIO_RAW: { descripcion: string; respuesta: string; detalle: string; dificultad: string }[] = [
  { descripcion: "Se paga en efectivo una deuda con un proveedor.", respuesta: "Afecta el patrimonio", detalle: "Disminuye el Activo (Caja) y disminuye el Pasivo (Proveedores): hecho permutativo.", dificultad: "basico" },
  { descripcion: "Se compra mercadería al contado.", respuesta: "Afecta el patrimonio", detalle: "Aumenta un Activo (Mercaderías) y disminuye otro Activo (Caja): hecho permutativo.", dificultad: "basico" },
  { descripcion: "El dueño mira el estado contable sin hacer operaciones.", respuesta: "No afecta el patrimonio", detalle: "No hay operación económica, solo una observación. No se modifican cuentas.", dificultad: "basico" },
  { descripcion: "Se emite una factura de venta a crédito a un cliente.", respuesta: "Afecta el patrimonio", detalle: "Aumenta Activo (Clientes) y aumenta R+ (Ventas): hecho modificativo aumentativo.", dificultad: "intermedio" },
  { descripcion: "Se pasa la mercadería del depósito al salón de ventas.", respuesta: "No afecta el patrimonio", detalle: "Solo se cambia la ubicación física de un mismo activo sin modificar su valor contable.", dificultad: "intermedio" },
  { descripcion: "Se rompe una silla del local sin reposición.", respuesta: "Afecta el patrimonio", detalle: "Disminuye el Activo (Muebles y Útiles) y aumenta un gasto: hecho modificativo disminutivo.", dificultad: "intermedio" },
  { descripcion: "Se registra un gasto por servicio de luz del mes.", respuesta: "Afecta el patrimonio", detalle: "Disminuye el Activo (Caja/Banco) y aumenta un gasto, reduciendo el patrimonio neto.", dificultad: "avanzado" },
  { descripcion: "Se recibe un préstamo bancario en la cuenta corriente.", respuesta: "Afecta el patrimonio", detalle: "Aumenta el Activo (Banco) y aumenta el Pasivo (Préstamo), cambia la estructura del patrimonio.", dificultad: "avanzado" },
];

export const HECHOS_PATRIMONIO: MCQuestion[] = HECHOS_PATRIMONIO_RAW.map((c, i) =>
  mc({
    id: `contabilidad_hechos_patrimonio_${i + 1}`,
    prompt: `Indique si el siguiente hecho económico afecta o no afecta al patrimonio:\n\n${c.descripcion}`,
    opciones: ["Afecta el patrimonio", "No afecta el patrimonio"],
    indiceCorrecto: c.respuesta === "Afecta el patrimonio" ? 0 : 1,
    explicacion: c.detalle,
    subtipo: "hechos_patrimonio",
    dificultad: c.dificultad,
  }),
);

// ── 5) bienes_derechos_obligaciones (11 preguntas) ──────────────────

const BIENES_DERECHOS_OBLIGACIONES_RAW: { descripcion: string; categoria: string; dificultad: string }[] = [
  { descripcion: "Un vehículo que pertenece a la empresa.", categoria: "Bien", dificultad: "basico" },
  { descripcion: "Mercaderías almacenadas para la venta.", categoria: "Bien", dificultad: "basico" },
  { descripcion: "Un crédito a cobrar a clientes por ventas a plazo.", categoria: "Derecho", dificultad: "basico" },
  { descripcion: "Una deuda bancaria a corto plazo.", categoria: "Obligación", dificultad: "basico" },
  { descripcion: "Una computadora de la oficina.", categoria: "Bien", dificultad: "intermedio" },
  { descripcion: "Un cheque de terceros en cartera pendiente de cobro.", categoria: "Derecho", dificultad: "intermedio" },
  { descripcion: "Facturas de proveedores pendientes de pago.", categoria: "Obligación", dificultad: "intermedio" },
  { descripcion: "Un seguro pagado por adelantado.", categoria: "Derecho", dificultad: "avanzado" },
  { descripcion: "Un pagaré a favor de un proveedor.", categoria: "Obligación", dificultad: "avanzado" },
  { descripcion: "Un depósito en garantía entregado a un proveedor.", categoria: "Derecho", dificultad: "avanzado" },
  { descripcion: "Un préstamo a largo plazo con una entidad financiera.", categoria: "Obligación", dificultad: "avanzado" },
];

export const BIENES_DERECHOS_OBLIGACIONES: MCQuestion[] = BIENES_DERECHOS_OBLIGACIONES_RAW.map((c, i) =>
  mc({
    id: `contabilidad_bienes_derechos_obligaciones_${i + 1}`,
    prompt: `Clasificá el siguiente elemento del patrimonio como Bien, Derecho u Obligación:\n\n${c.descripcion}`,
    opciones: ["Bien", "Derecho", "Obligación"],
    indiceCorrecto: ["Bien", "Derecho", "Obligación"].indexOf(c.categoria),
    explicacion:
      "El patrimonio está formado por bienes (lo que la empresa posee), derechos (lo que tiene para cobrar) y obligaciones (lo que debe a terceros).",
    subtipo: "bienes_derechos_obligaciones",
    dificultad: c.dificultad,
  }),
);

// ── 6) aportes_contribuciones (8 preguntas, canónico de quiz_* EG) ─

const APORTES_CONTRIBUCIONES_RAW: { descripcion: string; tipo: string; dificultad: string }[] = [
  { descripcion: "Descuento del 11% de jubilación sobre el sueldo del empleado.", tipo: "Aporte del trabajador", dificultad: "basico" },
  { descripcion: "Descuento del 3% de Obra Social sobre el salario del empleado.", tipo: "Aporte del trabajador", dificultad: "basico" },
  { descripcion: "Aporte patronal a la seguridad social que paga la empresa.", tipo: "Contribución del empleador", dificultad: "basico" },
  { descripcion: "Pago de la ART (Aseguradora de Riesgos del Trabajo) por parte de la empresa.", tipo: "Contribución del empleador", dificultad: "basico" },
  { descripcion: "Descuento del 3% de PAMI sobre el salario.", tipo: "Aporte del trabajador", dificultad: "intermedio" },
  { descripcion: "Contribución de la empresa a la Obra Social.", tipo: "Contribución del empleador", dificultad: "intermedio" },
  { descripcion: "Descuento por seguro de vida obligatorio sobre el salario.", tipo: "Aporte del trabajador", dificultad: "avanzado" },
  { descripcion: "Contribución patronal al SIPA sobre el salario.", tipo: "Contribución del empleador", dificultad: "avanzado" },
];

export const APORTES_CONTRIBUCIONES: MCQuestion[] = APORTES_CONTRIBUCIONES_RAW.map((c, i) =>
  mc({
    id: `contabilidad_aportes_contribuciones_${i + 1}`,
    prompt: `Clasificá el siguiente concepto del recibo de sueldo:\n\n${c.descripcion}`,
    opciones: ["Aporte del trabajador", "Contribución del empleador"],
    indiceCorrecto: c.tipo === "Aporte del trabajador" ? 0 : 1,
    explicacion:
      "Los aportes se descuentan del salario del trabajador; las contribuciones son montos adicionales que paga el empleador sobre el sueldo.",
    subtipo: "aportes_contribuciones",
    dificultad: c.dificultad,
  }),
);

// ── 7) variaciones_patrimoniales (8 preguntas) ────────────────────

const VARIACIONES_PATRIMONIALES_RAW: { descripcion: string; tipo: string; detalle: string; dificultad: string }[] = [
  { descripcion: "Se compra mercadería al contado.", tipo: "Permutativa", detalle: "Aumenta un Activo (Mercaderías) y disminuye otro Activo (Caja). El patrimonio total no cambia.", dificultad: "basico" },
  { descripcion: "Se paga una deuda a proveedores en efectivo.", tipo: "Permutativa", detalle: "Disminuye el Activo (Caja) y disminuye el Pasivo (Proveedores). El patrimonio total no cambia.", dificultad: "basico" },
  { descripcion: "Se vende mercadería al contado generando ganancia.", tipo: "Modificativa Aumentativa", detalle: "Aumenta el Activo (Caja) y aumenta un ingreso (Ventas), incrementando el patrimonio neto.", dificultad: "basico" },
  { descripcion: "Se paga el alquiler del local comercial.", tipo: "Modificativa Disminutiva", detalle: "Disminuye el Activo (Caja) y aumenta un gasto (Alquileres), reduciendo el patrimonio neto.", dificultad: "basico" },
  { descripcion: "Se rompe una máquina y se reconoce la pérdida contable.", tipo: "Modificativa Disminutiva", detalle: "Disminuye el Activo (Bienes de uso) y aumenta un gasto por pérdida, bajando el patrimonio neto.", dificultad: "intermedio" },
  { descripcion: "Se otorga un préstamo a un tercero desde Caja.", tipo: "Permutativa", detalle: "Disminuye Caja y aumenta un Derecho (Préstamos otorgados). El patrimonio total no cambia.", dificultad: "intermedio" },
  { descripcion: "Se cobra un interés por un préstamo otorgado.", tipo: "Modificativa Aumentativa", detalle: "Aumenta el Activo (Caja/Banco) y aumenta un ingreso financiero, incrementando el patrimonio neto.", dificultad: "avanzado" },
  { descripcion: "Se reconoce una amortización del mobiliario.", tipo: "Modificativa Disminutiva", detalle: "Disminuye el valor del activo (Bienes de uso) y aumenta un gasto por amortización.", dificultad: "avanzado" },
];

export const VARIACIONES_PATRIMONIALES: MCQuestion[] = VARIACIONES_PATRIMONIALES_RAW.map((c, i) =>
  mc({
    id: `contabilidad_variaciones_patrimoniales_${i + 1}`,
    prompt: `Clasificá la siguiente operación según el tipo de variación patrimonial:\n\n${c.descripcion}`,
    opciones: ["Permutativa", "Modificativa Aumentativa", "Modificativa Disminutiva"],
    indiceCorrecto: ["Permutativa", "Modificativa Aumentativa", "Modificativa Disminutiva"].indexOf(c.tipo),
    explicacion:
      "Las operaciones permutativas cambian la composición del patrimonio pero no su valor total; las modificativas aumentan o disminuyen el patrimonio neto. " +
      c.detalle,
    subtipo: "variaciones_patrimoniales",
    dificultad: c.dificultad,
  }),
);

// ── Barrel ─────────────────────────────────────────────────────────

export const BANCOS_CONTABILIDAD: ReadonlyArray<readonly [string, MCQuestion[]]> = [
  ["contabilidad_clasificacion_cuentas", CLASIFICACION_CUENTAS],
  ["contabilidad_naturaleza_cuentas", NATURALEZA_CUENTAS],
  ["contabilidad_ubicacion_estados", UBICACION_ESTADOS],
  ["contabilidad_hechos_patrimonio", HECHOS_PATRIMONIO],
  ["contabilidad_bienes_derechos_obligaciones", BIENES_DERECHOS_OBLIGACIONES],
  ["contabilidad_aportes_contribuciones", APORTES_CONTRIBUCIONES],
  ["contabilidad_variaciones_patrimoniales", VARIACIONES_PATRIMONIALES],
] as const;
