import { BaseGenerador } from "../core/baseGenerador";
import type { Dificultad, Ejercicio, Calculator } from "../core/types";

// ── Recibo básico ──────────────────────────────────────────────────

const CASOS_RECIBO: { enunciado: string; opciones: string[]; indiceCorrecto: number; explicacion: string; dificultad: Dificultad }[] = [
  {
    enunciado: "En un recibo de sueldo argentino, ¿qué representa el concepto 'Sueldo básico'?",
    opciones: [
      "Los aportes que paga el empleador",
      "El monto base antes de adicionales y descuentos",
      "El neto final que cobra el trabajador",
      "Los reintegros por viáticos",
    ],
    indiceCorrecto: 1,
    explicacion:
      "El sueldo básico es la remuneración base del trabajador, sobre la que luego se suman adicionales y se descuentan aportes.",
    dificultad: "basico",
  },
  {
    enunciado: "En un recibo de sueldo argentino, ¿qué representa el concepto 'Remuneraciones' o 'Haberes'?",
    opciones: [
      "Los importes que el empleador descuenta al trabajador",
      "Los importes que paga el empleador al trabajador por su trabajo",
      "Los aportes patronales que paga la empresa al Estado",
      "Los reintegros de gastos del trabajador",
    ],
    indiceCorrecto: 1,
    explicacion:
      "Las remuneraciones o haberes son los importes brutos que el empleador paga al trabajador por su trabajo (sueldo básico, antigüedad, horas extras, etc.).",
    dificultad: "intermedio",
  },
  {
    enunciado: "En un recibo de sueldo, ¿qué diferencia principal hay entre un concepto remunerativo y uno no remunerativo?",
    opciones: [
      "El remunerativo no se paga, el no remunerativo sí",
      "El remunerativo integra la base de aportes y contribuciones",
      "El no remunerativo siempre se paga en efectivo",
      "No hay diferencias, son sinónimos",
    ],
    indiceCorrecto: 1,
    explicacion:
      "Los conceptos remunerativos forman parte de la base para aportes y contribuciones; los no remunerativos no integran esa base.",
    dificultad: "avanzado",
  },
  {
    enunciado: "Si un recibo incluye horas extras, ¿dónde suelen aparecer y cómo impactan?",
    opciones: [
      "En Descuentos, reduciendo el neto",
      "En Remuneraciones, aumentando el bruto",
      "En Aportes del empleador, sin afectar el bruto",
      "En Observaciones, sin impacto económico",
    ],
    indiceCorrecto: 1,
    explicacion:
      "Las horas extras son remunerativas y se suman en la sección de Remuneraciones, incrementando el sueldo bruto.",
    dificultad: "avanzado",
  },
  {
    enunciado: "En muchos recibos aparece una sección de 'Aportes del empleador'. ¿Qué representa?",
    opciones: [
      "Importes que se descuentan al trabajador",
      "Impuestos personales del trabajador",
      "Contribuciones que la empresa paga al sistema de seguridad social",
      "Bonificaciones voluntarias al trabajador",
    ],
    indiceCorrecto: 2,
    explicacion:
      "Los aportes del empleador son contribuciones patronales que la empresa paga al Estado; no se descuentan del sueldo del trabajador.",
    dificultad: "avanzado",
  },
];

// ── Descuentos obligatorios ────────────────────────────────────────

const CASOS_DESCUENTOS: { enunciado: string; opciones: string[]; indiceCorrecto: number; explicacion: string; dificultad: Dificultad }[] = [
  {
    enunciado: "En un recibo de sueldo típico en Argentina, ¿qué porcentaje se descuenta para la Jubilación sobre el sueldo bruto remunerativo?",
    opciones: ["3%", "11%", "17%", "21%"],
    indiceCorrecto: 1,
    explicacion: "El aporte obligatorio del trabajador a la jubilación suele ser el 11% del sueldo bruto remunerativo.",
    dificultad: "basico",
  },
  {
    enunciado: "En un recibo de sueldo típico en Argentina, ¿qué porcentaje se descuenta para la Obra Social sobre el sueldo bruto remunerativo?",
    opciones: ["3%", "11%", "10,5%", "21%"],
    indiceCorrecto: 0,
    explicacion: "El aporte obligatorio del trabajador a la Obra Social suele ser el 3% del sueldo bruto remunerativo.",
    dificultad: "intermedio",
  },
  {
    enunciado: "En un recibo de sueldo típico en Argentina, ¿qué porcentaje se descuenta para PAMI sobre el sueldo bruto remunerativo?",
    opciones: ["11%", "3%", "6%", "21%"],
    indiceCorrecto: 1,
    explicacion: "El aporte obligatorio del trabajador a PAMI suele ser el 3% del sueldo bruto remunerativo.",
    dificultad: "avanzado",
  },
  {
    enunciado: "¿Cuál es el total de aportes del trabajador si se suman Jubilación (11%), Obra Social (3%) y PAMI (3%)?",
    opciones: ["14%", "15%", "17%", "21%"],
    indiceCorrecto: 2,
    explicacion: "La suma de 11% + 3% + 3% da un total de 17% de aportes obligatorios del trabajador.",
    dificultad: "avanzado",
  },
];

// ── Jurisdicción de impuestos ──────────────────────────────────────

type Jur = "Nacional" | "Provincial" | "Municipal";

const CASOS_JURISDICCION: { desc: string; tipo: Jur; detalle: string; dificultad: Dificultad }[] = [
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

// ── Formal vs informal ─────────────────────────────────────────────

type TipoLaboral = "Formal" | "Informal";

const CASOS_FORMAL: { text: string; tipo: TipoLaboral; detalle: string; dificultad: Dificultad }[] = [
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

// ── Monotributo ────────────────────────────────────────────────────

const CASOS_MONOTRIBUTO: { enunciado: string; opciones: string[]; indiceCorrecto: number; explicacion: string; dificultad: Dificultad }[] = [
  {
    enunciado: "¿Qué es el Monotributo en Argentina (concepto escolar)?",
    opciones: [
      "Un impuesto exclusivo para grandes empresas",
      "Un régimen simplificado para pequeños contribuyentes",
      "Un subsidio estatal para empleados públicos",
      "Una tasa municipal por comercio",
    ],
    indiceCorrecto: 1,
    explicacion: "El Monotributo es un régimen simplificado para pequeños contribuyentes que unifica impuestos y aportes.",
    dificultad: "basico",
  },
  {
    enunciado: "¿Qué pagos suele unificar el Monotributo en una sola cuota?",
    opciones: [
      "IVA, Ganancias y aportes previsionales",
      "Impuesto inmobiliario y patentes",
      "Sueldos y aguinaldo",
      "Impuesto al cheque y tasas bancarias",
    ],
    indiceCorrecto: 0,
    explicacion: "El Monotributo unifica componentes impositivos (IVA/Ganancias) y aportes previsionales/obra social.",
    dificultad: "intermedio",
  },
  {
    enunciado: "Un trabajador independiente que factura y paga una cuota mensual fija, ¿probablemente está en?",
    opciones: [
      "Relación de dependencia",
      "Monotributo",
      "Impuesto a los Sellos",
      "Tasa de Seguridad e Higiene",
    ],
    indiceCorrecto: 1,
    explicacion: "El pago mensual fijo por categoría es propio del régimen de Monotributo.",
    dificultad: "avanzado",
  },
  {
    enunciado: "¿Cuál es el criterio principal para clasificar las categorías del Monotributo en el enfoque escolar?",
    opciones: [
      "Cantidad de empleados en nómina",
      "Nivel de ingresos/facturación anual",
      "Cantidad de provincias donde opera",
      "Tipo de moneda utilizada",
    ],
    indiceCorrecto: 1,
    explicacion: "Las categorías del Monotributo se determinan principalmente por el nivel de ingresos o facturación.",
    dificultad: "avanzado",
  },
];

// ── Generador ──────────────────────────────────────────────────────

export class EconomiaARGenerator extends BaseGenerador {
  readonly id = "economia/economia_ar";
  readonly materia = "economia" as const;
  readonly subtipos = [
    "recibo_basico",
    "descuentos_obligatorios",
    "aportes_17",
    "neto_desde_bruto",
    "iva",
    "iva_calculo",
    "jurisdiccion_impuestos",
    "formal_informal",
    "monotributo",
    "tasa_desempleo",
  ];

  generarEjercicio(subtipo: string, dificultad: Dificultad, _calc: Calculator): Ejercicio {
    switch (subtipo) {
      case "recibo_basico":            return this.genReciboBasico(dificultad);
      case "descuentos_obligatorios":  return this.genDescuentosObligatorios(dificultad);
      case "aportes_17":               return this.genAportes17(dificultad);
      case "neto_desde_bruto":         return this.genNetoDesdeBruto(dificultad);
      case "iva":                      return this.genIVA(dificultad);
      case "iva_calculo":              return this.genIVACalculo(dificultad);
      case "jurisdiccion_impuestos":   return this.genJurisdiccionImpuestos(dificultad);
      case "formal_informal":          return this.genFormalInformal(dificultad);
      case "monotributo":              return this.genMonotributo(dificultad);
      case "tasa_desempleo":           return this.genTasaDesempleo(dificultad);
      default:                         return this.genReciboBasico(dificultad);
    }
  }

  private genReciboBasico(dificultad: Dificultad): Ejercicio {
    const pool = CASOS_RECIBO.filter(c =>
      dificultad === "basico"
        ? c.dificultad === "basico"
        : dificultad === "intermedio"
        ? c.dificultad !== "avanzado"
        : true
    );
    const caso = this.pickOne(pool);
    return this.crearQuiz({
      id: `${this.id}/recibo_basico/${this.randInt(1e5, 9e5)}`,
      materia: this.materia,
      subtipo: "recibo_basico",
      dificultad,
      enunciado: caso.enunciado,
      opciones: caso.opciones,
      indiceCorrecto: caso.indiceCorrecto,
      explicacion: caso.explicacion,
    });
  }

  private genDescuentosObligatorios(dificultad: Dificultad): Ejercicio {
    const pool = CASOS_DESCUENTOS.filter(c =>
      dificultad === "basico"
        ? c.dificultad === "basico"
        : dificultad === "intermedio"
        ? c.dificultad !== "avanzado"
        : true
    );
    const caso = this.pickOne(pool);
    return this.crearQuiz({
      id: `${this.id}/descuentos_obligatorios/${this.randInt(1e5, 9e5)}`,
      materia: this.materia,
      subtipo: "descuentos_obligatorios",
      dificultad,
      enunciado: caso.enunciado,
      opciones: caso.opciones,
      indiceCorrecto: caso.indiceCorrecto,
      explicacion: caso.explicacion,
    });
  }

  private genAportes17(dificultad: Dificultad): Ejercicio {
    const [min, max] = dificultad === "basico" ? [60, 100] : dificultad === "intermedio" ? [80, 120] : [100, 150];
    const bruto = this.randInt(min, max) * 1000;
    const totalAportes = Math.round(bruto * 0.17);
    const incorrectas = this.generarOpcionesIncorrectas(totalAportes, 3, 0.2).map(v => `$ ${Math.round(v).toLocaleString("es-AR")}`);
    return this.crearQuiz({
      id: `${this.id}/aportes_17/${this.randInt(1e5, 9e5)}`,
      materia: this.materia,
      subtipo: "aportes_17",
      dificultad,
      enunciado: `Un trabajador tiene un sueldo bruto remunerativo de $ ${bruto.toLocaleString("es-AR")}.\nSuponiendo los aportes obligatorios típicos (11% jubilación, 3% obra social, 3% PAMI), ¿cuál es el total aproximado de aportes del trabajador (17% del bruto)?`,
      opciones: [`$ ${totalAportes.toLocaleString("es-AR")}`, ...incorrectas],
      indiceCorrecto: 0,
      explicacion:
        "En el modelo escolar se suma 11% + 3% + 3% = 17% sobre el sueldo bruto remunerativo. El total de aportes se calcula como Bruto × 0,17.",
      datos: { bruto, totalAportes },
    });
  }

  private genNetoDesdeBruto(dificultad: Dificultad): Ejercicio {
    const [min, max] = dificultad === "basico" ? [60, 100] : dificultad === "intermedio" ? [80, 120] : [100, 150];
    const bruto = this.randInt(min, max) * 1000;
    const descuentos = Math.round(bruto * 0.17);
    const neto = bruto - descuentos;
    const preguntaNeto = dificultad === "basico" ? true : this.pickOne([true, false]);
    const correcta = preguntaNeto ? neto : descuentos;
    const incorrectas = this.generarOpcionesIncorrectas(correcta, 3, 0.2).map(v => `$ ${Math.round(v).toLocaleString("es-AR")}`);
    const enunciado = preguntaNeto
      ? `Un trabajador tiene un sueldo bruto remunerativo de $ ${bruto.toLocaleString("es-AR")}.\nSuponiendo aportes obligatorios totales del 17%, ¿cuál es el 'Neto a cobrar' aproximado?`
      : `Un trabajador tiene un sueldo bruto remunerativo de $ ${bruto.toLocaleString("es-AR")}.\nSuponiendo descuentos obligatorios del 17%, ¿cuál es el total aproximado de descuentos del trabajador?`;
    return this.crearQuiz({
      id: `${this.id}/neto_desde_bruto/${this.randInt(1e5, 9e5)}`,
      materia: this.materia,
      subtipo: "neto_desde_bruto",
      dificultad,
      enunciado,
      opciones: [`$ ${correcta.toLocaleString("es-AR")}`, ...incorrectas],
      indiceCorrecto: 0,
      explicacion: preguntaNeto
        ? "Primero se calcula el total de descuentos: Bruto × 0,17. Luego el neto es Bruto − Descuentos."
        : "Se multiplica el sueldo bruto por el 17% para obtener el total de aportes que se descuentan: Bruto × 0,17.",
      datos: { bruto, descuentos, neto },
    });
  }

  private genIVA(dificultad: Dificultad): Ejercicio {
    const [baseMin, baseMax] = dificultad === "basico" ? [10, 50] : dificultad === "intermedio" ? [20, 80] : [40, 120];
    const base = this.randInt(baseMin, baseMax) * 1000;
    const usaEsencial = dificultad !== "basico" && this.pickOne([true, false]);
    const tasa = usaEsencial ? 0.105 : 0.21;
    const etiqueta = usaEsencial ? "esencial" : "general";
    const iva = Math.round(base * tasa);
    const total = base + iva;
    const incorrectas = this.generarOpcionesIncorrectas(total, 3, 0.2).map(v => `$ ${Math.round(v).toLocaleString("es-AR")}`);
    return this.crearQuiz({
      id: `${this.id}/iva/${this.randInt(1e5, 9e5)}`,
      materia: this.materia,
      subtipo: "iva",
      dificultad,
      enunciado: `En Argentina, un bien ${etiqueta} con precio sin IVA de $ ${base.toLocaleString("es-AR")} paga IVA ${tasa * 100}%. ¿Cuál es el precio final aproximado con IVA incluido?`,
      opciones: [`$ ${total.toLocaleString("es-AR")}`, ...incorrectas],
      indiceCorrecto: 0,
      explicacion: "El IVA se calcula como Precio sin IVA × alícuota y luego se suma al precio base.",
      datos: { base, tasa, iva, total },
    });
  }

  private genIVACalculo(dificultad: Dificultad): Ejercicio {
    const [baseMin, baseMax] = dificultad === "basico" ? [10, 60] : dificultad === "intermedio" ? [20, 90] : [40, 140];
    const base = this.randInt(baseMin, baseMax) * 1000;
    const usaEsencial = dificultad !== "basico" && this.pickOne([true, false]);
    const tasa = usaEsencial ? 0.105 : 0.21;
    const etiqueta = usaEsencial ? "esencial" : "general";
    // En avanzado pregunta el monto de IVA, en otros el total
    const preguntaIVA = dificultad === "avanzado";
    const iva = Math.round(base * tasa);
    const total = base + iva;
    const correcta = preguntaIVA ? iva : total;
    const incorrectas = this.generarOpcionesIncorrectas(correcta, 3, 0.22).map(v => `$ ${Math.round(v).toLocaleString("es-AR")}`);
    const enunciado = preguntaIVA
      ? `Producto ${etiqueta} con precio sin IVA de $ ${base.toLocaleString("es-AR")}. IVA a aplicar = ${tasa * 100}%. ¿Cuánto IVA se paga?`
      : `Producto ${etiqueta} con precio sin IVA de $ ${base.toLocaleString("es-AR")}. IVA a aplicar = ${tasa * 100}%. ¿Cuál es el precio final con IVA?`;
    return this.crearQuiz({
      id: `${this.id}/iva_calculo/${this.randInt(1e5, 9e5)}`,
      materia: this.materia,
      subtipo: "iva_calculo",
      dificultad,
      enunciado,
      opciones: [`$ ${correcta.toLocaleString("es-AR")}`, ...incorrectas],
      indiceCorrecto: 0,
      explicacion: preguntaIVA
        ? `IVA = Precio × ${tasa}.`
        : "El IVA se calcula como Precio sin IVA × alícuota y luego se suma al precio base.",
      datos: { base, tasa, iva, total },
    });
  }

  private genJurisdiccionImpuestos(dificultad: Dificultad): Ejercicio {
    const pool = CASOS_JURISDICCION.filter(c =>
      dificultad === "basico"
        ? c.dificultad === "basico"
        : dificultad === "intermedio"
        ? c.dificultad !== "avanzado"
        : true
    );
    const imp = this.pickOne(pool);
    const opciones: Jur[] = ["Nacional", "Provincial", "Municipal"];
    return this.crearQuiz({
      id: `${this.id}/jurisdiccion_impuestos/${this.randInt(1e5, 9e5)}`,
      materia: this.materia,
      subtipo: "jurisdiccion_impuestos",
      dificultad,
      enunciado: `¿A qué jurisdicción pertenece el impuesto/tasa: "${imp.desc}"?`,
      opciones,
      indiceCorrecto: opciones.indexOf(imp.tipo),
      explicacion: imp.detalle,
    });
  }

  private genFormalInformal(dificultad: Dificultad): Ejercicio {
    const pool = CASOS_FORMAL.filter(c =>
      dificultad === "basico"
        ? c.dificultad === "basico"
        : dificultad === "intermedio"
        ? c.dificultad !== "avanzado"
        : true
    );
    const caso = this.pickOne(pool);
    return this.crearQuiz({
      id: `${this.id}/formal_informal/${this.randInt(1e5, 9e5)}`,
      materia: this.materia,
      subtipo: "formal_informal",
      dificultad,
      enunciado: `Clasificá la situación laboral en Argentina:\n\n${caso.text}`,
      opciones: ["Formal", "Informal"],
      indiceCorrecto: caso.tipo === "Formal" ? 0 : 1,
      explicacion: caso.detalle,
    });
  }

  private genMonotributo(dificultad: Dificultad): Ejercicio {
    const pool = CASOS_MONOTRIBUTO.filter(c =>
      dificultad === "basico"
        ? c.dificultad === "basico"
        : dificultad === "intermedio"
        ? c.dificultad !== "avanzado"
        : true
    );
    const caso = this.pickOne(pool);
    return this.crearQuiz({
      id: `${this.id}/monotributo/${this.randInt(1e5, 9e5)}`,
      materia: this.materia,
      subtipo: "monotributo",
      dificultad,
      enunciado: caso.enunciado,
      opciones: caso.opciones,
      indiceCorrecto: caso.indiceCorrecto,
      explicacion: caso.explicacion,
    });
  }

  private genTasaDesempleo(dificultad: Dificultad): Ejercicio {
    const [peaMin, peaMax] = dificultad === "basico" ? [100000, 200000] : dificultad === "intermedio" ? [150000, 250000] : [200000, 300000];
    const [tasaMin, tasaMax] = dificultad === "basico" ? [5, 8] : dificultad === "intermedio" ? [5, 10] : [7, 12];
    const PEA = this.randInt(peaMin, peaMax);
    const tasaReal = this.randInt(tasaMin, tasaMax);
    const desempleados = Math.round((PEA * tasaReal) / 100);
    const tasa = Math.round((desempleados / PEA) * 100);
    const incorrectas = this.generarOpcionesIncorrectas(tasa, 3, 0.25).map(v => `${Math.max(1, Math.round(v))}%`);
    return this.crearQuiz({
      id: `${this.id}/tasa_desempleo/${this.randInt(1e5, 9e5)}`,
      materia: this.materia,
      subtipo: "tasa_desempleo",
      dificultad,
      enunciado: `La Población Económicamente Activa (PEA) es ${PEA.toLocaleString("es-AR")} personas y los desempleados son ${desempleados.toLocaleString("es-AR")}. ¿Cuál es la tasa de desempleo aproximada?`,
      opciones: [`${tasa}%`, ...incorrectas],
      indiceCorrecto: 0,
      explicacion: "Tasa = Desempleados / PEA × 100",
      datos: { PEA, desempleados, tasa },
    });
  }
}
