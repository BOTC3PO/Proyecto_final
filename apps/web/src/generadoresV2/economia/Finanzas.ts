import { BaseGenerador } from "../core/baseGenerador";
import type { Dificultad, Ejercicio, Calculator } from "../core/types";

// ── Presupuesto familiar ───────────────────────────────────────────

type CategoriaPresupuesto = "Ingreso" | "Gasto" | "Ahorro";

const ITEMS_PRESUPUESTO: { descripcion: string; categoria: CategoriaPresupuesto; dificultadMinima: Dificultad }[] = [
  { descripcion: "Sueldo mensual que cobra una persona por su trabajo.", categoria: "Ingreso", dificultadMinima: "basico" },
  { descripcion: "Pago mensual del alquiler de la vivienda.", categoria: "Gasto", dificultadMinima: "basico" },
  { descripcion: "Pago de la factura de luz.", categoria: "Gasto", dificultadMinima: "basico" },
  { descripcion: "Parte del dinero que se guarda todos los meses para emergencias.", categoria: "Ahorro", dificultadMinima: "basico" },
  { descripcion: "Horas extras cobradas a fin de mes.", categoria: "Ingreso", dificultadMinima: "basico" },
  { descripcion: "Compra mensual de alimentos básicos.", categoria: "Gasto", dificultadMinima: "basico" },
  { descripcion: "Monto guardado mensualmente para comprar un electrodoméstico a futuro.", categoria: "Ahorro", dificultadMinima: "basico" },
  { descripcion: "Ingreso por venta ocasional de un mueble usado.", categoria: "Ingreso", dificultadMinima: "intermedio" },
  { descripcion: "Pago del seguro del hogar.", categoria: "Gasto", dificultadMinima: "intermedio" },
  { descripcion: "Parte del ingreso que se aparta para invertir en un plazo fijo.", categoria: "Ahorro", dificultadMinima: "avanzado" },
  { descripcion: "Pago de una cuota escolar mensual.", categoria: "Gasto", dificultadMinima: "avanzado" },
];

// ── Gastos fijos esenciales ────────────────────────────────────────

type TipoGastoFijo = "Gasto fijo esencial" | "Gasto variable esencial" | "Gasto no esencial";

const GASTOS_FIJOS: { descripcion: string; tipo: TipoGastoFijo; dificultadMinima: Dificultad }[] = [
  { descripcion: "Pago mensual de la factura de luz.", tipo: "Gasto fijo esencial", dificultadMinima: "basico" },
  { descripcion: "Pago mensual de la factura de gas.", tipo: "Gasto fijo esencial", dificultadMinima: "basico" },
  { descripcion: "Pago del alquiler de la vivienda.", tipo: "Gasto fijo esencial", dificultadMinima: "basico" },
  { descripcion: "Compra semanal de alimentos básicos.", tipo: "Gasto variable esencial", dificultadMinima: "basico" },
  { descripcion: "Compra de ropa de marca por moda.", tipo: "Gasto no esencial", dificultadMinima: "basico" },
  { descripcion: "Salida al cine y comida rápida los fines de semana.", tipo: "Gasto no esencial", dificultadMinima: "basico" },
  { descripcion: "Pago mensual del servicio de internet.", tipo: "Gasto fijo esencial", dificultadMinima: "basico" },
  { descripcion: "Pago mensual del abono de transporte público.", tipo: "Gasto variable esencial", dificultadMinima: "intermedio" },
  { descripcion: "Cuota mensual del gimnasio.", tipo: "Gasto no esencial", dificultadMinima: "intermedio" },
  { descripcion: "Compra de medicamentos de uso permanente.", tipo: "Gasto variable esencial", dificultadMinima: "avanzado" },
  { descripcion: "Pago anual prorrateado de un seguro del hogar.", tipo: "Gasto fijo esencial", dificultadMinima: "avanzado" },
];

// ── Gastos esenciales vs no esenciales ────────────────────────────

type TipoGastoEsencial = "Gasto esencial" | "Gasto no esencial";

const GASTOS_ESENCIALES: { descripcion: string; tipo: TipoGastoEsencial; dificultadMinima: Dificultad }[] = [
  { descripcion: "Compra mensual de alimentos básicos para la familia.", tipo: "Gasto esencial", dificultadMinima: "basico" },
  { descripcion: "Pago del alquiler o cuota de la vivienda.", tipo: "Gasto esencial", dificultadMinima: "basico" },
  { descripcion: "Pago de servicios básicos (luz, gas, agua).", tipo: "Gasto esencial", dificultadMinima: "basico" },
  { descripcion: "Pago mensual del transporte para ir a trabajar o estudiar.", tipo: "Gasto esencial", dificultadMinima: "basico" },
  { descripcion: "Compra de medicamentos recetados.", tipo: "Gasto esencial", dificultadMinima: "basico" },
  { descripcion: "Suscripción a una plataforma de streaming para ocio.", tipo: "Gasto no esencial", dificultadMinima: "basico" },
  { descripcion: "Compra de ropa de marca por moda, sin necesidad urgente.", tipo: "Gasto no esencial", dificultadMinima: "basico" },
  { descripcion: "Salidas frecuentes a comer afuera por gusto.", tipo: "Gasto no esencial", dificultadMinima: "basico" },
  { descripcion: "Pago mensual de un plan de internet para estudiar/trabajar.", tipo: "Gasto esencial", dificultadMinima: "intermedio" },
  { descripcion: "Compra de entradas para un recital.", tipo: "Gasto no esencial", dificultadMinima: "intermedio" },
  { descripcion: "Reparación de un electrodoméstico esencial en el hogar.", tipo: "Gasto esencial", dificultadMinima: "avanzado" },
  { descripcion: "Vacaciones en un destino turístico de lujo.", tipo: "Gasto no esencial", dificultadMinima: "avanzado" },
];

// ── Ahorro vs consumo responsable ─────────────────────────────────

type TipoDecision = "Ahorro" | "Consumo responsable";

const SITUACIONES_AHORRO: { descripcion: string; tipo: TipoDecision; dificultadMinima: Dificultad }[] = [
  { descripcion: "Separar una parte fija del sueldo todos los meses para un fondo de emergencia.", tipo: "Ahorro", dificultadMinima: "basico" },
  { descripcion: "Comparar precios y elegir un producto más económico de calidad similar.", tipo: "Consumo responsable", dificultadMinima: "basico" },
  { descripcion: "Postergar una compra impulsiva porque no es necesaria en este momento.", tipo: "Consumo responsable", dificultadMinima: "basico" },
  { descripcion: "Guardar dinero durante un año para comprar una computadora que se necesita para estudiar.", tipo: "Ahorro", dificultadMinima: "basico" },
  { descripcion: "Destinar una parte del ingreso para pagar deudas antes de gastar en ocio.", tipo: "Consumo responsable", dificultadMinima: "basico" },
  { descripcion: "Armar un presupuesto mensual para controlar gastos y ahorrar.", tipo: "Ahorro", dificultadMinima: "intermedio" },
  { descripcion: "Comprar un producto con descuento real después de comparar precios.", tipo: "Consumo responsable", dificultadMinima: "intermedio" },
  { descripcion: "Destinar parte del aguinaldo a un fondo para arreglos del hogar.", tipo: "Ahorro", dificultadMinima: "avanzado" },
  { descripcion: "Elegir una opción financiada con cuotas sin interés y dentro del presupuesto.", tipo: "Consumo responsable", dificultadMinima: "avanzado" },
];

// ── Deuda buena vs mala ────────────────────────────────────────────

type TipoDeuda = "Deuda buena" | "Deuda mala";

const DEUDAS: { descripcion: string; tipo: TipoDeuda; dificultadMinima: Dificultad }[] = [
  { descripcion: "Sacar un crédito para estudiar una carrera que aumentará tus posibilidades de ingreso.", tipo: "Deuda buena", dificultadMinima: "basico" },
  { descripcion: "Pedir un préstamo para comprar herramientas que permitirán generar más trabajo o ingresos.", tipo: "Deuda buena", dificultadMinima: "basico" },
  { descripcion: "Financiar un electrodoméstico necesario en cuotas razonables y dentro del presupuesto.", tipo: "Deuda buena", dificultadMinima: "basico" },
  { descripcion: "Pagar con tarjeta de crédito salidas frecuentes a comer afuera y dejar el saldo financiado.", tipo: "Deuda mala", dificultadMinima: "basico" },
  { descripcion: "Endeudarse para comprar ropa de marca y objetos de lujo que no son necesarios.", tipo: "Deuda mala", dificultadMinima: "basico" },
  { descripcion: "Sacar préstamos pequeños repetidos para cubrir gastos superfluos sin plan de pago.", tipo: "Deuda mala", dificultadMinima: "basico" },
  { descripcion: "Pedir un crédito para reparar una herramienta de trabajo clave.", tipo: "Deuda buena", dificultadMinima: "intermedio" },
  { descripcion: "Usar la tarjeta para comprar regalos caros sin evaluar el presupuesto.", tipo: "Deuda mala", dificultadMinima: "intermedio" },
  { descripcion: "Financiar un curso de capacitación que aumenta ingresos futuros.", tipo: "Deuda buena", dificultadMinima: "avanzado" },
  { descripcion: "Refinanciar un saldo con tasas altas para gastos no esenciales.", tipo: "Deuda mala", dificultadMinima: "avanzado" },
];

// ── CFT vs Interés ────────────────────────────────────────────────

type ConceptoCFT = "Interés" | "Costo financiero total (CFT)";

const CASOS_CFT: { descripcion: string; respuesta: ConceptoCFT; dificultadMinima: Dificultad }[] = [
  { descripcion: "Es el porcentaje que se aplica sobre el capital para calcular lo que se paga por usar el dinero durante un tiempo.", respuesta: "Interés", dificultadMinima: "basico" },
  { descripcion: "Incluye no solo el interés, sino también comisiones, impuestos y otros gastos asociados al crédito.", respuesta: "Costo financiero total (CFT)", dificultadMinima: "basico" },
  { descripcion: "En la tarjeta de crédito, el valor más importante para comparar ofertas porque muestra el costo real del financiamiento.", respuesta: "Costo financiero total (CFT)", dificultadMinima: "basico" },
  { descripcion: "En un préstamo, el banco muestra un número más bajo que corresponde solo al rendimiento del dinero.", respuesta: "Interés", dificultadMinima: "basico" },
  { descripcion: "En un crédito, el indicador que suma intereses, gastos administrativos y seguros obligatorios.", respuesta: "Costo financiero total (CFT)", dificultadMinima: "intermedio" },
  { descripcion: "Es la tasa que se usa en la fórmula para calcular cuánto se paga por el préstamo.", respuesta: "Interés", dificultadMinima: "intermedio" },
  { descripcion: "Dato que permite comparar préstamos con diferentes comisiones y cargos.", respuesta: "Costo financiero total (CFT)", dificultadMinima: "avanzado" },
  { descripcion: "Porcentaje anual que representa el costo básico de usar dinero prestado.", respuesta: "Interés", dificultadMinima: "avanzado" },
];

// ── Liquidez personal ──────────────────────────────────────────────

type TipoLiquidez = "Dinero disponible" | "Dinero inmovilizado";

const ITEMS_LIQUIDEZ: { descripcion: string; tipo: TipoLiquidez; dificultadMinima: Dificultad }[] = [
  { descripcion: "Efectivo en la billetera.", tipo: "Dinero disponible", dificultadMinima: "basico" },
  { descripcion: "Saldo en caja de ahorro que se puede retirar con tarjeta de débito.", tipo: "Dinero disponible", dificultadMinima: "basico" },
  { descripcion: "Plazo fijo a 30 días que todavía no venció.", tipo: "Dinero inmovilizado", dificultadMinima: "basico" },
  { descripcion: "Dinero usado para comprar un electrodoméstico en cuotas ya firmado.", tipo: "Dinero inmovilizado", dificultadMinima: "basico" },
  { descripcion: "Saldo en una cuenta de pago digital (billetera virtual) para usar con QR.", tipo: "Dinero disponible", dificultadMinima: "basico" },
  { descripcion: "Ahorros invertidos en un terreno que no se piensa vender pronto.", tipo: "Dinero inmovilizado", dificultadMinima: "basico" },
  { descripcion: "Saldo disponible en una cuenta sueldo para usar con tarjeta.", tipo: "Dinero disponible", dificultadMinima: "intermedio" },
  { descripcion: "Inversión en bonos que no se piensa vender a corto plazo.", tipo: "Dinero inmovilizado", dificultadMinima: "intermedio" },
  { descripcion: "Dinero en una caja de ahorro con extracción inmediata.", tipo: "Dinero disponible", dificultadMinima: "avanzado" },
  { descripcion: "Compra de un vehículo con intención de mantenerlo varios años.", tipo: "Dinero inmovilizado", dificultadMinima: "avanzado" },
  { descripcion: "Aportes hechos a largo plazo en un plan de retiro/jubilación.", tipo: "Dinero inmovilizado", dificultadMinima: "avanzado" },
];

// ── Ingresos activos y pasivos ─────────────────────────────────────

type TipoIngreso = "Ingreso activo" | "Ingreso pasivo";

const INGRESOS: { descripcion: string; tipo: TipoIngreso; dificultadMinima: Dificultad }[] = [
  { descripcion: "Sueldo mensual que se cobra por ir a trabajar a una empresa.", tipo: "Ingreso activo", dificultadMinima: "basico" },
  { descripcion: "Honorarios por trabajos realizados como profesional independiente.", tipo: "Ingreso activo", dificultadMinima: "basico" },
  { descripcion: "Cobro mensual de un alquiler por una vivienda propia.", tipo: "Ingreso pasivo", dificultadMinima: "basico" },
  { descripcion: "Cobro de intereses por un plazo fijo o inversión financiera sin trabajo adicional.", tipo: "Ingreso pasivo", dificultadMinima: "basico" },
  { descripcion: "Pagos por horas extras realizados los fines de semana.", tipo: "Ingreso activo", dificultadMinima: "basico" },
  { descripcion: "Ganancias que se reciben por derechos de autor de un libro publicado.", tipo: "Ingreso pasivo", dificultadMinima: "basico" },
  { descripcion: "Pago por clases particulares dictadas los fines de semana.", tipo: "Ingreso activo", dificultadMinima: "intermedio" },
  { descripcion: "Cobro mensual por alquilar una habitación de la casa.", tipo: "Ingreso pasivo", dificultadMinima: "intermedio" },
  { descripcion: "Comisiones por ventas realizadas en un trabajo dependiente.", tipo: "Ingreso activo", dificultadMinima: "avanzado" },
  { descripcion: "Ingresos por dividendos de acciones sin trabajo adicional.", tipo: "Ingreso pasivo", dificultadMinima: "avanzado" },
];

// ── Publicidad engañosa ────────────────────────────────────────────

type TipoCasoPublicidad = "Publicidad engañosa" | "Publicidad clara";

const CASOS_PUBLICIDAD: { anuncio: string; tipo: TipoCasoPublicidad; consejo: string; dificultadMinima: Dificultad }[] = [
  {
    anuncio: "\"Credito SIN INTERES en 24 cuotas. CFT 120% TNA 80%\" (en letra muy pequenia casi ilegible).",
    tipo: "Publicidad engañosa",
    consejo: "Promete 'sin interes', pero el CFT y la tasa aparecen escondidos: hay costos financieros importantes.",
    dificultadMinima: "basico",
  },
  {
    anuncio: "\"Llevate hoy y empeza a pagar dentro de 6 meses. No aclara tasa ni CFT en ningun lugar visible.\"",
    tipo: "Publicidad engañosa",
    consejo: "Oculta informacion clave sobre el costo del credito, lo que dificulta una decision informada.",
    dificultadMinima: "basico",
  },
  {
    anuncio: "\"Credito personal: TNA 60%, CFT 85%. Monto minimo, maximo, gastos y plazos claramente detallados.\"",
    tipo: "Publicidad clara",
    consejo: "La tasa y el CFT estan visibles; permite comparar con otras ofertas y entender el costo real.",
    dificultadMinima: "basico",
  },
  {
    anuncio: "\"Hasta 30% de descuento pagando en efectivo. Sin intereses ni costos financieros adicionales.\"",
    tipo: "Publicidad clara",
    consejo: "Se trata de un descuento por pago contado, no de un crédito; no hay financiamiento escondido.",
    dificultadMinima: "basico",
  },
  {
    anuncio: "\"12 cuotas fijas. TNA 50% y CFT 90% visibles en la letra principal.\"",
    tipo: "Publicidad clara",
    consejo: "Informa claramente tasas y CFT, lo que permite comparar el costo real.",
    dificultadMinima: "intermedio",
  },
  {
    anuncio: "\"Sin interes en 18 cuotas\" pero solo muestra un numero de telefono sin tasas detalladas.",
    tipo: "Publicidad engañosa",
    consejo: "No detalla CFT ni tasas; la falta de informacion clave puede ocultar costos.",
    dificultadMinima: "intermedio",
  },
  {
    anuncio: "\"Paga en 24 cuotas. CFT 130%\" pero la letra chica agrega seguros y cargos no explicados.",
    tipo: "Publicidad engañosa",
    consejo: "Aunque menciona CFT, agrega cargos ocultos sin detallar; es poco transparente.",
    dificultadMinima: "avanzado",
  },
  {
    anuncio: "\"Financiacion: TNA 55%, CFT 78%, incluye gastos administrativos.\"",
    tipo: "Publicidad clara",
    consejo: "Detalla tasas y cargos, permitiendo entender el costo total del credito.",
    dificultadMinima: "avanzado",
  },
];

// ── Seguros ────────────────────────────────────────────────────────

const CASOS_SEGUROS: {
  enunciado: string;
  opciones: string[];
  correcta: string;
  explicacion: string;
  dificultadMinima: Dificultad;
}[] = [
  {
    enunciado: "Una familia contrata una póliza que cubre daños por incendio y robo en su vivienda.",
    opciones: ["Seguro de hogar", "Seguro de auto", "Seguro de vida", "Seguro de salud"],
    correcta: "Seguro de hogar",
    explicacion: "El seguro de hogar protege la vivienda y su contenido frente a riesgos como incendio, robo o daños.",
    dificultadMinima: "basico",
  },
  {
    enunciado: "Una persona paga una póliza que cubre los gastos médicos en caso de enfermedad o accidente.",
    opciones: ["Seguro de hogar", "Seguro de auto", "Seguro de vida", "Seguro de salud"],
    correcta: "Seguro de salud",
    explicacion: "El seguro de salud ayuda a cubrir gastos médicos e internaciones, protegiendo la economía familiar.",
    dificultadMinima: "basico",
  },
  {
    enunciado: "Una persona asegura su auto para que la compañía cubra daños a terceros y al vehículo en un choque.",
    opciones: ["Seguro de hogar", "Seguro de auto", "Seguro de vida", "Seguro de salud"],
    correcta: "Seguro de auto",
    explicacion: "El seguro de auto cubre daños propios y/o a terceros, reduciendo el impacto económico de un accidente.",
    dificultadMinima: "basico",
  },
  {
    enunciado: "Una familia contrata un seguro que paga una suma de dinero a los beneficiarios si la persona asegurada fallece.",
    opciones: ["Seguro de hogar", "Seguro de auto", "Seguro de vida", "Seguro de salud"],
    correcta: "Seguro de vida",
    explicacion: "El seguro de vida busca proteger económicamente a la familia si falta el ingreso principal.",
    dificultadMinima: "basico",
  },
  {
    enunciado: "Una persona contrata una póliza que cubre consultas y estudios médicos sin pagar todo de su bolsillo.",
    opciones: ["Seguro de hogar", "Seguro de auto", "Seguro de vida", "Seguro de salud"],
    correcta: "Seguro de salud",
    explicacion: "El seguro de salud cubre gastos médicos y ayuda a reducir el costo de atención.",
    dificultadMinima: "intermedio",
  },
  {
    enunciado: "Una persona paga una póliza que entrega una suma a sus familiares si sufre un accidente fatal.",
    opciones: ["Seguro de hogar", "Seguro de auto", "Seguro de vida", "Seguro de salud"],
    correcta: "Seguro de vida",
    explicacion: "El seguro de vida protege a los beneficiarios ante el fallecimiento.",
    dificultadMinima: "avanzado",
  },
  {
    enunciado: "Una póliza protege el contenido de la vivienda ante incendio o robo.",
    opciones: ["Seguro de hogar", "Seguro de auto", "Seguro de vida", "Seguro de salud"],
    correcta: "Seguro de hogar",
    explicacion: "El seguro de hogar cubre la vivienda y sus bienes.",
    dificultadMinima: "avanzado",
  },
];

// ── Generador ──────────────────────────────────────────────────────

export class FinanzasGenerator extends BaseGenerador {
  readonly id = "economia/finanzas";
  readonly materia = "economia" as const;
  readonly subtipos = [
    "presupuesto_familiar",
    "gastos_fijos_esenciales",
    "gastos_esenciales_no_esenciales",
    "ahorro_consumo",
    "deuda_buena_mala",
    "cft_vs_interes",
    "interes_simple",
    "interes_compuesto",
    "liquidez_personal",
    "ingresos_activos_pasivos",
    "publicidad_enganosa",
    "comparacion_inversiones",
    "seguros_familia",
  ];

  generarEjercicio(subtipo: string, dificultad: Dificultad, _calc: Calculator): Ejercicio {
    switch (subtipo) {
      case "presupuesto_familiar":          return this.genPresupuestoFamiliar(dificultad);
      case "gastos_fijos_esenciales":       return this.genGastosFijosEsenciales(dificultad);
      case "gastos_esenciales_no_esenciales": return this.genGastosEsenciales(dificultad);
      case "ahorro_consumo":               return this.genAhorroConsumo(dificultad);
      case "deuda_buena_mala":             return this.genDeudaBuenaMala(dificultad);
      case "cft_vs_interes":               return this.genCftVsInteres(dificultad);
      case "interes_simple":               return this.genInteresSimple(dificultad);
      case "interes_compuesto":            return this.genInteresCompuesto(dificultad);
      case "liquidez_personal":            return this.genLiquidezPersonal(dificultad);
      case "ingresos_activos_pasivos":     return this.genIngresosActivosPasivos(dificultad);
      case "publicidad_enganosa":          return this.genPublicidadEnganosa(dificultad);
      case "comparacion_inversiones":      return this.genComparacionInversiones(dificultad);
      case "seguros_familia":              return this.genSegurosFamilia(dificultad);
      default:                             return this.genPresupuestoFamiliar(dificultad);
    }
  }

  private poolPor<T extends { dificultadMinima: Dificultad }>(items: T[], dificultad: Dificultad): T[] {
    return items.filter(i =>
      dificultad === "basico"
        ? i.dificultadMinima === "basico"
        : dificultad === "intermedio"
        ? i.dificultadMinima !== "avanzado"
        : true
    );
  }

  private genPresupuestoFamiliar(dificultad: Dificultad): Ejercicio {
    const item = this.pickOne(this.poolPor(ITEMS_PRESUPUESTO, dificultad));
    return this.crearQuiz({
      id: `${this.id}/presupuesto_familiar/${this.randInt(1e5, 9e5)}`,
      materia: this.materia,
      subtipo: "presupuesto_familiar",
      dificultad,
      enunciado: `En un presupuesto familiar, ¿cómo se clasifica el siguiente concepto?\n\n${item.descripcion}`,
      opciones: ["Ingreso", "Gasto", "Ahorro"],
      indiceCorrecto: ["Ingreso", "Gasto", "Ahorro"].indexOf(item.categoria),
      explicacion:
        "En el presupuesto familiar se separan los Ingresos (entradas de dinero), los Gastos (salidas de dinero) y el Ahorro (parte del ingreso que se reserva y no se gasta).",
    });
  }

  private genGastosFijosEsenciales(dificultad: Dificultad): Ejercicio {
    const gasto = this.pickOne(this.poolPor(GASTOS_FIJOS, dificultad));
    const opciones: TipoGastoFijo[] = ["Gasto fijo esencial", "Gasto variable esencial", "Gasto no esencial"];
    return this.crearQuiz({
      id: `${this.id}/gastos_fijos_esenciales/${this.randInt(1e5, 9e5)}`,
      materia: this.materia,
      subtipo: "gastos_fijos_esenciales",
      dificultad,
      enunciado: `Clasificá el siguiente gasto del hogar:\n\n${gasto.descripcion}`,
      opciones,
      indiceCorrecto: opciones.indexOf(gasto.tipo),
      explicacion:
        "Los gastos fijos esenciales son pagos periódicos necesarios para el funcionamiento básico del hogar (luz, gas, agua, alquiler, internet). Los variables esenciales pueden cambiar mes a mes (alimentos, transporte) y los no esenciales son prescindibles.",
    });
  }

  private genGastosEsenciales(dificultad: Dificultad): Ejercicio {
    const gasto = this.pickOne(this.poolPor(GASTOS_ESENCIALES, dificultad));
    return this.crearQuiz({
      id: `${this.id}/gastos_esenciales_no_esenciales/${this.randInt(1e5, 9e5)}`,
      materia: this.materia,
      subtipo: "gastos_esenciales_no_esenciales",
      dificultad,
      enunciado: `En un presupuesto familiar, ¿cómo clasificarías el siguiente gasto?\n\n${gasto.descripcion}`,
      opciones: ["Gasto esencial", "Gasto no esencial"],
      indiceCorrecto: gasto.tipo === "Gasto esencial" ? 0 : 1,
      explicacion:
        "Los gastos esenciales son necesarios para cubrir necesidades básicas (vivienda, alimentación, salud, transporte). Los no esenciales se relacionan con gustos o consumos que se pueden recortar sin afectar lo básico.",
    });
  }

  private genAhorroConsumo(dificultad: Dificultad): Ejercicio {
    const situacion = this.pickOne(this.poolPor(SITUACIONES_AHORRO, dificultad));
    return this.crearQuiz({
      id: `${this.id}/ahorro_consumo/${this.randInt(1e5, 9e5)}`,
      materia: this.materia,
      subtipo: "ahorro_consumo",
      dificultad,
      enunciado: `En la siguiente situación, ¿predomina el Ahorro o el Consumo responsable?\n\n${situacion.descripcion}`,
      opciones: ["Ahorro", "Consumo responsable"],
      indiceCorrecto: situacion.tipo === "Ahorro" ? 0 : 1,
      explicacion:
        "El ahorro es guardar parte del ingreso para el futuro. El consumo responsable implica gastar de forma consciente, priorizando necesidades, comparando opciones y evitando compras impulsivas.",
    });
  }

  private genDeudaBuenaMala(dificultad: Dificultad): Ejercicio {
    const deuda = this.pickOne(this.poolPor(DEUDAS, dificultad));
    return this.crearQuiz({
      id: `${this.id}/deuda_buena_mala/${this.randInt(1e5, 9e5)}`,
      materia: this.materia,
      subtipo: "deuda_buena_mala",
      dificultad,
      enunciado: `Clasificá la siguiente situación de endeudamiento:\n\n${deuda.descripcion}`,
      opciones: ["Deuda buena", "Deuda mala"],
      indiceCorrecto: deuda.tipo === "Deuda buena" ? 0 : 1,
      explicacion:
        "Se llama 'deuda buena' a aquella que ayuda a mejorar la capacidad futura de generar ingresos o cubrir necesidades importantes. La 'deuda mala' se usa para consumos innecesarios o impulsivos.",
    });
  }

  private genCftVsInteres(dificultad: Dificultad): Ejercicio {
    const caso = this.pickOne(this.poolPor(CASOS_CFT, dificultad));
    return this.crearQuiz({
      id: `${this.id}/cft_vs_interes/${this.randInt(1e5, 9e5)}`,
      materia: this.materia,
      subtipo: "cft_vs_interes",
      dificultad,
      enunciado: `El siguiente enunciado se refiere principalmente a Interés o a Costo financiero total (CFT):\n\n${caso.descripcion}`,
      opciones: ["Interés", "Costo financiero total (CFT)"],
      indiceCorrecto: caso.respuesta === "Interés" ? 0 : 1,
      explicacion:
        "El interés es solo la parte que se paga por usar el dinero. El CFT incluye intereses más todos los gastos y comisiones, por eso es el indicador más completo para comparar créditos.",
    });
  }

  private genInteresSimple(dificultad: Dificultad): Ejercicio {
    const [capitalMin, capitalMax] = dificultad === "basico" ? [5, 10] : dificultad === "intermedio" ? [10, 20] : [15, 30];
    const [tasaMin, tasaMax] = dificultad === "basico" ? [5, 8] : dificultad === "intermedio" ? [5, 10] : [8, 15];
    const [tiempoMin, tiempoMax] = dificultad === "basico" ? [1, 2] : [1, 3];
    const capital = this.randInt(capitalMin, capitalMax) * 1000;
    const tasa = this.randInt(tasaMin, tasaMax);
    const tiempo = this.randInt(tiempoMin, tiempoMax);
    const interes = Math.round(capital * (tasa / 100) * tiempo);
    const incorrectas = this.generarOpcionesIncorrectas(interes, 3, 0.25).map(v => `$ ${Math.round(v).toLocaleString("es-AR")}`);
    return this.crearQuiz({
      id: `${this.id}/interes_simple/${this.randInt(1e5, 9e5)}`,
      materia: this.materia,
      subtipo: "interes_simple",
      dificultad,
      enunciado: `Una persona invierte $ ${capital.toLocaleString("es-AR")} al interés simple del ${tasa}% anual durante ${tiempo} año(s).\n¿Cuánto interés gana al final del período? (Usar I = C × i × t)`,
      opciones: [`$ ${interes.toLocaleString("es-AR")}`, ...incorrectas],
      indiceCorrecto: 0,
      explicacion:
        "En el interés simple se usa la fórmula I = C × i × t, donde C es el capital inicial, i la tasa en forma decimal y t el tiempo en años. El interés se calcula siempre sobre el mismo capital inicial.",
      datos: { capital, tasa, tiempo, interes },
    });
  }

  private genInteresCompuesto(dificultad: Dificultad): Ejercicio {
    const [capitalMin, capitalMax] = dificultad === "basico" ? [5, 10] : dificultad === "intermedio" ? [5, 15] : [10, 20];
    const [tasaMin, tasaMax] = dificultad === "basico" ? [4, 8] : dificultad === "intermedio" ? [4, 10] : [6, 12];
    const [tiempoMin, tiempoMax] = dificultad === "basico" ? [1, 2] : [1, 3];
    const capital = this.randInt(capitalMin, capitalMax) * 10000;
    const tasa = this.randInt(tasaMin, tasaMax);
    const tiempo = this.randInt(tiempoMin, tiempoMax);
    const monto = Math.round(capital * Math.pow(1 + tasa / 100, tiempo));
    const incorrectas = this.generarOpcionesIncorrectas(monto, 3, 0.25).map(v => `$ ${Math.round(v).toLocaleString("es-AR")}`);
    return this.crearQuiz({
      id: `${this.id}/interes_compuesto/${this.randInt(1e5, 9e5)}`,
      materia: this.materia,
      subtipo: "interes_compuesto",
      dificultad,
      enunciado: `Una persona invierte $ ${capital.toLocaleString("es-AR")} al interés compuesto del ${tasa}% anual durante ${tiempo} año(s).\n¿Cuál es el monto aproximado al final del período? (Usar M = C × (1 + i)^t)`,
      opciones: [`$ ${monto.toLocaleString("es-AR")}`, ...incorrectas],
      indiceCorrecto: 0,
      explicacion:
        "En el interés compuesto el monto final se calcula con M = C × (1 + i)^t. Cada año se calcula el interés sobre el nuevo saldo.",
      datos: { capital, tasa, tiempo, monto },
    });
  }

  private genLiquidezPersonal(dificultad: Dificultad): Ejercicio {
    const item = this.pickOne(this.poolPor(ITEMS_LIQUIDEZ, dificultad));
    return this.crearQuiz({
      id: `${this.id}/liquidez_personal/${this.randInt(1e5, 9e5)}`,
      materia: this.materia,
      subtipo: "liquidez_personal",
      dificultad,
      enunciado: `Clasificá el siguiente recurso del hogar según su liquidez:\n\n${item.descripcion}`,
      opciones: ["Dinero disponible", "Dinero inmovilizado"],
      indiceCorrecto: item.tipo === "Dinero disponible" ? 0 : 1,
      explicacion:
        "La liquidez es la facilidad y rapidez con la que algo se puede convertir en dinero para usar. Efectivo y saldos en cuentas son dinero disponible; inversiones a plazo, bienes y aportes de largo plazo son dinero inmovilizado.",
    });
  }

  private genIngresosActivosPasivos(dificultad: Dificultad): Ejercicio {
    const ingreso = this.pickOne(this.poolPor(INGRESOS, dificultad));
    return this.crearQuiz({
      id: `${this.id}/ingresos_activos_pasivos/${this.randInt(1e5, 9e5)}`,
      materia: this.materia,
      subtipo: "ingresos_activos_pasivos",
      dificultad,
      enunciado: `Clasificá el siguiente ingreso del hogar:\n\n${ingreso.descripcion}`,
      opciones: ["Ingreso activo", "Ingreso pasivo"],
      indiceCorrecto: ingreso.tipo === "Ingreso activo" ? 0 : 1,
      explicacion:
        "El ingreso activo se obtiene directamente por el trabajo (sueldo, honorarios). El ingreso pasivo proviene de inversiones o bienes que generan dinero con poco trabajo diario (alquileres, intereses, regalías).",
    });
  }

  private genPublicidadEnganosa(dificultad: Dificultad): Ejercicio {
    const caso = this.pickOne(this.poolPor(CASOS_PUBLICIDAD, dificultad));
    return this.crearQuiz({
      id: `${this.id}/publicidad_enganosa/${this.randInt(1e5, 9e5)}`,
      materia: this.materia,
      subtipo: "publicidad_enganosa",
      dificultad,
      enunciado: `Leé el siguiente anuncio y decidí si se trata de publicidad engañosa o clara para el consumidor:\n\n${caso.anuncio}`,
      opciones: ["Publicidad engañosa", "Publicidad clara"],
      indiceCorrecto: caso.tipo === "Publicidad engañosa" ? 0 : 1,
      explicacion:
        "Para tomar decisiones inteligentes de compra hay que buscar siempre el CFT, las tasas y los costos detallados. " + caso.consejo,
    });
  }

  private genComparacionInversiones(dificultad: Dificultad): Ejercicio {
    const [capitalMin, capitalMax] = dificultad === "basico" ? [5, 10] : [5, 15];
    const [tasaMin, tasaMax] = dificultad === "basico" ? [10, 20] : [10, 25];
    const capital = this.randInt(capitalMin, capitalMax) * 10000;
    const tasaA = this.randInt(tasaMin, tasaMax);
    const diff = this.randInt(-6, 6);
    const tasaB = Math.max(1, tasaA + diff);
    const rendA = capital * (tasaA / 100);
    const rendB = capital * (tasaB / 100);
    let correcta: string;
    if (rendA > rendB) correcta = "Conviene la inversión A";
    else if (rendB > rendA) correcta = "Conviene la inversión B";
    else correcta = "Ambas rinden lo mismo";
    const opciones = ["Conviene la inversión A", "Conviene la inversión B", "Ambas rinden lo mismo"];
    return this.crearQuiz({
      id: `${this.id}/comparacion_inversiones/${this.randInt(1e5, 9e5)}`,
      materia: this.materia,
      subtipo: "comparacion_inversiones",
      dificultad,
      enunciado: `Una familia quiere invertir $ ${capital.toLocaleString("es-AR")}.\n\nInversión A: rinde un ${tasaA}% anual durante 1 año.\nInversión B: rinde un ${tasaB}% anual durante 1 año.\n\nSuponiendo el mismo riesgo y sin otros costos, ¿cuál conviene más?`,
      opciones,
      indiceCorrecto: opciones.indexOf(correcta),
      explicacion:
        "Para comparar inversiones de igual riesgo, se calcula cuánto rinde cada una según tasa y tiempo. La opción con mayor rendimiento total es la más conveniente.",
    });
  }

  private genSegurosFamilia(dificultad: Dificultad): Ejercicio {
    const caso = this.pickOne(this.poolPor(CASOS_SEGUROS, dificultad));
    return this.crearQuiz({
      id: `${this.id}/seguros_familia/${this.randInt(1e5, 9e5)}`,
      materia: this.materia,
      subtipo: "seguros_familia",
      dificultad,
      enunciado: caso.enunciado,
      opciones: caso.opciones,
      indiceCorrecto: caso.opciones.indexOf(caso.correcta),
      explicacion:
        caso.explicacion + " A nivel escolar, la idea clave es que los seguros ayudan a reducir el impacto económico de ciertos riesgos.",
    });
  }
}
