import { BaseGenerador } from "../core/baseGenerador";
import type { Dificultad, Ejercicio, Calculator } from "../core/types";

// ── Helpers ────────────────────────────────────────────────────────

function dificultadFactor(d: Dificultad): number {
  return d === "basico" ? 0.8 : d === "avanzado" ? 1.2 : 1;
}

// ── Política fiscal/monetaria ──────────────────────────────────────

type TipoPolitica =
  | "Política fiscal expansiva"
  | "Política fiscal contractiva"
  | "Política monetaria expansiva"
  | "Política monetaria contractiva";

const CASOS_POLITICA: { descripcion: string; respuesta: TipoPolitica; explicacion: string; dificultadMinima: Dificultad }[] = [
  { descripcion: "El gobierno aumenta el gasto público en obras y programas sociales para impulsar la actividad económica.", respuesta: "Política fiscal expansiva", explicacion: "Usa el presupuesto del Estado (gasto público) para aumentar la demanda agregada.", dificultadMinima: "basico" },
  { descripcion: "El gobierno baja impuestos a familias y empresas para que tengan más dinero para gastar e invertir.", respuesta: "Política fiscal expansiva", explicacion: "Reduce la carga impositiva para estimular el consumo y la inversión.", dificultadMinima: "basico" },
  { descripcion: "El gobierno reduce el gasto público y sube algunos impuestos para achicar el déficit fiscal.", respuesta: "Política fiscal contractiva", explicacion: "Busca frenar la demanda y ordenar las cuentas públicas reduciendo gastos o aumentando impuestos.", dificultadMinima: "intermedio" },
  { descripcion: "El Banco Central baja la tasa de interés y facilita el crédito para que se pida más dinero prestado.", respuesta: "Política monetaria expansiva", explicacion: "Hace más barato el crédito para estimular el consumo y la inversión.", dificultadMinima: "intermedio" },
  { descripcion: "El Banco Central sube mucho la tasa de interés para frenar la inflación y el consumo.", respuesta: "Política monetaria contractiva", explicacion: "Hace más caro el crédito para reducir la cantidad de dinero circulando.", dificultadMinima: "avanzado" },
  { descripcion: "El gobierno congela el gasto y aumenta impuestos para reducir la demanda agregada en un contexto inflacionario.", respuesta: "Política fiscal contractiva", explicacion: "Al subir impuestos y frenar el gasto público, se reduce el impulso fiscal y la demanda.", dificultadMinima: "avanzado" },
  { descripcion: "El Banco Central vende títulos y sube encajes bancarios para absorber liquidez del sistema.", respuesta: "Política monetaria contractiva", explicacion: "Al absorber liquidez, disminuye la cantidad de dinero disponible y se enfría la economía.", dificultadMinima: "avanzado" },
  { descripcion: "El Banco Central reduce la tasa de referencia y compra bonos para expandir la base monetaria.", respuesta: "Política monetaria expansiva", explicacion: "Baja tasas y compra activos para inyectar dinero y estimular crédito y gasto.", dificultadMinima: "avanzado" },
];

// ── Clasificación de bienes ────────────────────────────────────────

const CASOS_BIENES: { enunciado: string; opciones: string[]; correcta: string; explicacion: string; dificultadMinima: Dificultad }[] = [
  { enunciado: "El aire que respiramos normalmente se clasifica como:", opciones: ["Bien libre", "Bien económico"], correcta: "Bien libre", explicacion: "Es un bien libre porque está disponible en abundancia, no tiene precio y no requiere proceso productivo directo.", dificultadMinima: "basico" },
  { enunciado: "Un paquete de fideos que se compra en el supermercado se clasifica como:", opciones: ["Bien libre", "Bien económico"], correcta: "Bien económico", explicacion: "Requiere trabajo, insumos y organización para producirse y tiene un precio; por eso es un bien económico.", dificultadMinima: "basico" },
  { enunciado: "Una heladera que una familia compra para su casa se clasifica como:", opciones: ["Bien de consumo", "Bien de capital"], correcta: "Bien de consumo", explicacion: "Se usa directamente para satisfacer una necesidad del hogar, no para producir otros bienes.", dificultadMinima: "basico" },
  { enunciado: "Una máquina industrial que utiliza una fábrica para producir botellas se clasifica como:", opciones: ["Bien de consumo", "Bien de capital"], correcta: "Bien de capital", explicacion: "Es un medio de producción que sirve para fabricar otros bienes.", dificultadMinima: "intermedio" },
  { enunciado: "El café y el té se consideran ejemplos de bienes:", opciones: ["Sustitutos", "Complementarios"], correcta: "Sustitutos", explicacion: "Cubren una necesidad similar, por lo que se pueden reemplazar entre sí.", dificultadMinima: "intermedio" },
  { enunciado: "El auto y la nafta se consideran ejemplos de bienes:", opciones: ["Sustitutos", "Complementarios"], correcta: "Complementarios", explicacion: "Se usan juntos: el auto necesita combustible para funcionar.", dificultadMinima: "intermedio" },
  { enunciado: "Un software de diseño que compra una empresa para producir gráficos se clasifica como:", opciones: ["Bien de consumo", "Bien de capital"], correcta: "Bien de capital", explicacion: "Es un recurso utilizado para producir otros bienes o servicios.", dificultadMinima: "avanzado" },
  { enunciado: "El azúcar y el edulcorante se consideran ejemplos de bienes:", opciones: ["Sustitutos", "Complementarios"], correcta: "Sustitutos", explicacion: "Ambos cumplen la misma función y pueden reemplazarse según la preferencia del consumidor.", dificultadMinima: "avanzado" },
];

// ── Agentes económicos ─────────────────────────────────────────────

type Agente = "Hogares/Familias" | "Empresas" | "Estado" | "Sector externo";

const CASOS_AGENTES: { descripcion: string; agente: Agente; explicacion: string; dificultadMinima: Dificultad }[] = [
  { descripcion: "Personas que ofrecen su trabajo a las empresas y consumen bienes y servicios.", agente: "Hogares/Familias", explicacion: "Los hogares ofrecen trabajo y demandan bienes y servicios.", dificultadMinima: "basico" },
  { descripcion: "Organizaciones que producen bienes y servicios para vender en el mercado.", agente: "Empresas", explicacion: "Las empresas demandan factores de producción y ofrecen bienes/servicios.", dificultadMinima: "basico" },
  { descripcion: "Cobra impuestos, realiza gasto público y regula la economía.", agente: "Estado", explicacion: "El Estado interviene con impuestos, gasto y regulaciones.", dificultadMinima: "intermedio" },
  { descripcion: "Relaciona la economía local con otros países mediante exportaciones e importaciones.", agente: "Sector externo", explicacion: "El sector externo participa con comercio exterior y flujo de capitales.", dificultadMinima: "intermedio" },
  { descripcion: "Recauda impuestos para financiar obras públicas y programas sociales.", agente: "Estado", explicacion: "La recaudación y el gasto público son funciones del Estado en la economía.", dificultadMinima: "avanzado" },
  { descripcion: "Importa insumos y exporta productos terminados, conectando el mercado local con el global.", agente: "Sector externo", explicacion: "El comercio internacional de insumos y productos pertenece al sector externo.", dificultadMinima: "avanzado" },
  { descripcion: "Contrata trabajadores, invierte en maquinaria y busca beneficios a través de sus ventas.", agente: "Empresas", explicacion: "Las empresas combinan factores de producción para generar bienes y servicios.", dificultadMinima: "avanzado" },
];

// ── Estructuras de mercado ─────────────────────────────────────────

type Mercado = "Competencia perfecta" | "Competencia monopolística" | "Oligopolio" | "Monopolio";

const CASOS_MERCADO: { descripcion: string; tipo: Mercado; explicacion: string; dificultadMinima: Dificultad }[] = [
  { descripcion: "Hay muchísimas empresas pequeñas que venden un producto prácticamente igual. Ninguna puede influir por sí sola en el precio.", tipo: "Competencia perfecta", explicacion: "Muchos oferentes y demandantes, producto homogéneo y precio determinado por el mercado.", dificultadMinima: "basico" },
  { descripcion: "Pocas empresas dominan la mayor parte de la oferta de un producto (por ejemplo, empresas grandes de telefonía móvil).", tipo: "Oligopolio", explicacion: "Pocos oferentes con poder de mercado, pueden influir en precios y cantidades.", dificultadMinima: "basico" },
  { descripcion: "Solo hay una empresa que vende un producto sin sustitutos cercanos y controla el precio.", tipo: "Monopolio", explicacion: "Un solo oferente con alto poder de mercado.", dificultadMinima: "intermedio" },
  { descripcion: "Muchas empresas compiten ofreciendo productos similares pero diferenciados (por ejemplo, distintas marcas de ropa).", tipo: "Competencia monopolística", explicacion: "Hay muchos vendedores, pero cada uno ofrece un producto con cierta diferenciación.", dificultadMinima: "intermedio" },
  { descripcion: "Un único proveedor con concesión exclusiva ofrece energía en una región, sin posibilidad de entrada de competidores.", tipo: "Monopolio", explicacion: "La exclusividad legal limita la competencia y concentra la oferta en un solo agente.", dificultadMinima: "avanzado" },
  { descripcion: "Varias empresas dominan la oferta de automóviles, con barreras de entrada y competencia en precios y tecnología.", tipo: "Oligopolio", explicacion: "Pocos grandes oferentes con barreras de entrada, interdependencia y competencia estratégica.", dificultadMinima: "avanzado" },
];

// ── Gastos fijos vs variables (empresas) ───────────────────────────

const CASOS_GASTOS_FV: { descripcion: string; tipo: "Gasto fijo" | "Gasto variable"; explicacion: string; dificultadMinima: Dificultad }[] = [
  { descripcion: "El alquiler mensual del local comercial que paga la empresa.", tipo: "Gasto fijo", explicacion: "El alquiler no cambia con la producción: es fijo.", dificultadMinima: "basico" },
  { descripcion: "El sueldo básico del personal de administración.", tipo: "Gasto fijo", explicacion: "El sueldo base no depende de cuánto se produce.", dificultadMinima: "basico" },
  { descripcion: "Los materiales directos que se usan en cada unidad producida.", tipo: "Gasto variable", explicacion: "Aumentan con la producción: son variables.", dificultadMinima: "basico" },
  { descripcion: "La comisión que cobra el vendedor por cada venta.", tipo: "Gasto variable", explicacion: "Depende del volumen de ventas: es variable.", dificultadMinima: "basico" },
  { descripcion: "La amortización anual de una maquinaria.", tipo: "Gasto fijo", explicacion: "La amortización se calcula por el paso del tiempo, no por producción.", dificultadMinima: "intermedio" },
  { descripcion: "El consumo de energía eléctrica de las máquinas que varía con la producción.", tipo: "Gasto variable", explicacion: "Si produce más, gasta más energía: es variable.", dificultadMinima: "intermedio" },
  { descripcion: "Seguro anual del establecimiento.", tipo: "Gasto fijo", explicacion: "El seguro no varía con la producción.", dificultadMinima: "avanzado" },
  { descripcion: "Insumos de limpieza proporcionales al número de unidades producidas.", tipo: "Gasto variable", explicacion: "Su importe depende del nivel de actividad.", dificultadMinima: "avanzado" },
];

// ── Generador ──────────────────────────────────────────────────────

export class EconomiaGeneralGenerator extends BaseGenerador {
  readonly id = "economia/economia_general";
  readonly materia = "economia" as const;
  readonly subtipos = [
    "politica_fiscal_monetaria",
    "ganancia_perdida",
    "resultado_bruto",
    "resultado_neto",
    "margen_bruto",
    "margen_neto",
    "capital_trabajo",
    "punto_equilibrio",
    "productividad",
    "porcentajes_simples",
    "clasificacion_bienes",
    "agentes_economicos",
    "estructuras_mercado",
    "gastos_fijos_variables",
    "simple_vs_compuesto",
    "cft_mayor_interes",
    "ganancia_vs_equilibrio",
    "quiz_aportes_contribuciones",
    "quiz_deuda_buena_mala",
    "quiz_publicidad_enganosa",
    "quiz_gastos_esenciales",
    "quiz_liquidez",
    "quiz_interes_simple_compuesto",
    "quiz_cft_interes",
    "quiz_ganancia_equilibrio",
  ];

  generarEjercicio(subtipo: string, dificultad: Dificultad, _calc: Calculator): Ejercicio {
    switch (subtipo) {
      case "politica_fiscal_monetaria":      return this.genPoliticaFiscalMonetaria(dificultad);
      case "ganancia_perdida":               return this.genGananciaPerdida(dificultad);
      case "resultado_bruto":                return this.genResultadoBruto(dificultad);
      case "resultado_neto":                 return this.genResultadoNeto(dificultad);
      case "margen_bruto":                   return this.genMargenBruto(dificultad);
      case "margen_neto":                    return this.genMargenNeto(dificultad);
      case "capital_trabajo":                return this.genCapitalTrabajo(dificultad);
      case "punto_equilibrio":               return this.genPuntoEquilibrio(dificultad);
      case "productividad":                  return this.genProductividad(dificultad);
      case "porcentajes_simples":            return this.genPorcentajesSimples(dificultad);
      case "clasificacion_bienes":           return this.genClasificacionBienes(dificultad);
      case "agentes_economicos":             return this.genAgentesEconomicos(dificultad);
      case "estructuras_mercado":            return this.genEstructurasMercado(dificultad);
      case "gastos_fijos_variables":         return this.genGastosFijosVariables(dificultad);
      case "simple_vs_compuesto":            return this.genSimpleVsCompuesto(dificultad);
      case "cft_mayor_interes":              return this.genCftMayorInteres(dificultad);
      case "ganancia_vs_equilibrio":         return this.genGananciaVsEquilibrio(dificultad);
      case "quiz_aportes_contribuciones":    return this.genQuizAportesContribuciones(dificultad);
      case "quiz_deuda_buena_mala":          return this.genQuizDeudaBuenaMala(dificultad);
      case "quiz_publicidad_enganosa":       return this.genQuizPublicidadEnganosa(dificultad);
      case "quiz_gastos_esenciales":         return this.genQuizGastosEsenciales(dificultad);
      case "quiz_liquidez":                  return this.genQuizLiquidez(dificultad);
      case "quiz_interes_simple_compuesto":  return this.genQuizInteresSimpleCompuesto(dificultad);
      case "quiz_cft_interes":               return this.genQuizCftInteres(dificultad);
      case "quiz_ganancia_equilibrio":       return this.genQuizGananciaEquilibrio(dificultad);
      default:                               return this.genPoliticaFiscalMonetaria(dificultad);
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

  private genPoliticaFiscalMonetaria(dificultad: Dificultad): Ejercicio {
    const pool = this.poolPor(CASOS_POLITICA, dificultad);
    const caso = this.pickOne(pool);
    const opciones: TipoPolitica[] = [
      "Política fiscal expansiva",
      "Política fiscal contractiva",
      "Política monetaria expansiva",
      "Política monetaria contractiva",
    ];
    return this.crearQuiz({
      id: `${this.id}/politica_fiscal_monetaria/${this.randInt(1e5, 9e5)}`,
      materia: this.materia,
      subtipo: "politica_fiscal_monetaria",
      dificultad,
      enunciado: `Clasificá la siguiente medida de política económica:\n\n${caso.descripcion}`,
      opciones,
      indiceCorrecto: opciones.indexOf(caso.respuesta),
      explicacion: caso.explicacion,
    });
  }

  private genGananciaPerdida(dificultad: Dificultad): Ejercicio {
    const f = dificultadFactor(dificultad);
    const [iMin, iMax] = [Math.round(50 * f), Math.round(200 * f)];
    const [cMin, cMax] = [Math.round(30 * f), Math.round(180 * f)];
    const ingresoTotal = this.randInt(iMin, iMax) * 1000;
    const costoTotal = this.randInt(cMin, cMax) * 1000;
    const resultado = ingresoTotal - costoTotal;
    const correctaStr =
      (resultado >= 0 ? "Ganancia" : "Pérdida") + " de $ " + Math.abs(resultado).toLocaleString("es-AR");
    const incorrectas = this.generarOpcionesIncorrectas(resultado, 3, 0.3).map(v => {
      const r = Math.round(v);
      return (r >= 0 ? "Ganancia" : "Pérdida") + " de $ " + Math.abs(r).toLocaleString("es-AR");
    });
    const opciones = [correctaStr, ...incorrectas];
    return this.crearQuiz({
      id: `${this.id}/ganancia_perdida/${this.randInt(1e5, 9e5)}`,
      materia: this.materia,
      subtipo: "ganancia_perdida",
      dificultad,
      enunciado: `Una actividad económica obtiene un Ingreso Total (IT) de $ ${ingresoTotal.toLocaleString("es-AR")} y un Costo Total (CT) de $ ${costoTotal.toLocaleString("es-AR")}.\n¿Cuál es el resultado (ganancia o pérdida) usando: Resultado = IT – CT?`,
      opciones,
      indiceCorrecto: 0,
      explicacion: "Si IT > CT hay ganancia; si IT < CT hay pérdida. El resultado se calcula como IT – CT.",
      datos: { ingresoTotal, costoTotal, resultado },
    });
  }

  private genResultadoBruto(dificultad: Dificultad): Ejercicio {
    const f = dificultadFactor(dificultad);
    const ventas = this.randInt(Math.round(80 * f), Math.round(250 * f)) * 1000;
    const costoVentas = this.randInt(Math.round(40 * f), Math.round(200 * f)) * 1000;
    const resultadoBruto = ventas - costoVentas;
    const incorrectas = this.generarOpcionesIncorrectas(Math.max(1, resultadoBruto), 3, 0.3).map(v => `$ ${Math.round(v).toLocaleString("es-AR")}`);
    return this.crearQuiz({
      id: `${this.id}/resultado_bruto/${this.randInt(1e5, 9e5)}`,
      materia: this.materia,
      subtipo: "resultado_bruto",
      dificultad,
      enunciado: `Una empresa tiene Ventas por $ ${ventas.toLocaleString("es-AR")} y Costo de ventas por $ ${costoVentas.toLocaleString("es-AR")}.\n¿Cuál es el Resultado Bruto usando: Resultado Bruto = Ventas – Costo de ventas?`,
      opciones: [`$ ${resultadoBruto.toLocaleString("es-AR")}`, ...incorrectas],
      indiceCorrecto: 0,
      explicacion: "El Resultado Bruto muestra la ganancia antes de gastos de administración y ventas. Se calcula: Ventas – Costo de ventas.",
      datos: { ventas, costoVentas, resultadoBruto },
    });
  }

  private genResultadoNeto(dificultad: Dificultad): Ejercicio {
    const f = dificultadFactor(dificultad);
    const resultadoBruto = this.randInt(Math.round(80 * f), Math.round(250 * f)) * 1000;
    const gastos = this.randInt(Math.round(20 * f), Math.round(150 * f)) * 1000;
    const resultadoNeto = resultadoBruto - gastos;
    const correctaStr = (resultadoNeto >= 0 ? "Ganancia neta de $ " : "Pérdida neta de $ ") + Math.abs(resultadoNeto).toLocaleString("es-AR");
    const incorrectas = this.generarOpcionesIncorrectas(resultadoNeto, 3, 0.3).map(v => {
      const r = Math.round(v);
      return (r >= 0 ? "Ganancia neta de $ " : "Pérdida neta de $ ") + Math.abs(r).toLocaleString("es-AR");
    });
    return this.crearQuiz({
      id: `${this.id}/resultado_neto/${this.randInt(1e5, 9e5)}`,
      materia: this.materia,
      subtipo: "resultado_neto",
      dificultad,
      enunciado: `Una empresa tiene Resultado Bruto de $ ${resultadoBruto.toLocaleString("es-AR")} y Gastos de $ ${gastos.toLocaleString("es-AR")}.\n¿Cuál es el Resultado Neto usando: Resultado Neto = Resultado Bruto – Gastos?`,
      opciones: [correctaStr, ...incorrectas],
      indiceCorrecto: 0,
      explicacion: "El Resultado Neto es la ganancia o pérdida final del período, luego de restar los gastos al resultado bruto.",
      datos: { resultadoBruto, gastos, resultadoNeto },
    });
  }

  private genMargenBruto(dificultad: Dificultad): Ejercicio {
    const f = dificultadFactor(dificultad);
    const ventas = this.randInt(Math.round(100 * f), Math.round(300 * f)) * 1000;
    const costoVentas = this.randInt(Math.round(50 * f), Math.max(Math.round(50 * f) + 1, Math.round(250 * f) - 50000)) * 1000;
    const gananciaBruta = ventas - costoVentas;
    const margen = Math.round((gananciaBruta / ventas) * 100);
    const opciones = [
      `${margen} %`,
      ...this.generarOpcionesIncorrectas(margen, 3, 0.2).map(v => `${Math.max(1, Math.round(v))} %`),
    ];
    return this.crearQuiz({
      id: `${this.id}/margen_bruto/${this.randInt(1e5, 9e5)}`,
      materia: this.materia,
      subtipo: "margen_bruto",
      dificultad,
      enunciado: `Una empresa tiene Ventas por $ ${ventas.toLocaleString("es-AR")} y Costo de ventas por $ ${costoVentas.toLocaleString("es-AR")}.\nLa Ganancia Bruta es Ventas – Costo de ventas.\n¿Cuál es el margen bruto aproximado (Ganancia Bruta / Ventas × 100)?`,
      opciones,
      indiceCorrecto: 0,
      explicacion: "El margen bruto se calcula como (Ganancia Bruta / Ventas) × 100. Indica qué porcentaje de cada peso vendido queda para cubrir otros gastos.",
      datos: { ventas, costoVentas, gananciaBruta, margen },
    });
  }

  private genMargenNeto(dificultad: Dificultad): Ejercicio {
    const f = dificultadFactor(dificultad);
    const ventas = this.randInt(Math.round(100 * f), Math.round(300 * f)) * 1000;
    const resultadoNeto = this.randInt(Math.round(10 * f), Math.max(Math.round(10 * f) + 1, Math.round(80 * f))) * 1000;
    const margen = Math.round((resultadoNeto / ventas) * 100);
    const opciones = [
      `${margen} %`,
      ...this.generarOpcionesIncorrectas(margen, 3, 0.25).map(v => `${Math.max(1, Math.round(v))} %`),
    ];
    return this.crearQuiz({
      id: `${this.id}/margen_neto/${this.randInt(1e5, 9e5)}`,
      materia: this.materia,
      subtipo: "margen_neto",
      dificultad,
      enunciado: `Una empresa tiene Ventas por $ ${ventas.toLocaleString("es-AR")} y Resultado Neto de $ ${resultadoNeto.toLocaleString("es-AR")}.\n¿Cuál es el margen neto aproximado (Resultado Neto / Ventas × 100)?`,
      opciones,
      indiceCorrecto: 0,
      explicacion: "El margen neto se calcula como (Resultado Neto / Ventas) × 100. Muestra qué porcentaje de las ventas queda como ganancia neta.",
      datos: { ventas, resultadoNeto, margen },
    });
  }

  private genCapitalTrabajo(dificultad: Dificultad): Ejercicio {
    const f = dificultadFactor(dificultad);
    const activoCorriente = this.randInt(Math.round(100 * f), Math.round(300 * f)) * 1000;
    const pasivoCorriente = this.randInt(Math.round(50 * f), Math.round(250 * f)) * 1000;
    const capitalTrabajo = activoCorriente - pasivoCorriente;
    const incorrectas = this.generarOpcionesIncorrectas(capitalTrabajo, 3, 0.3).map(v => `$ ${Math.round(v).toLocaleString("es-AR")}`);
    return this.crearQuiz({
      id: `${this.id}/capital_trabajo/${this.randInt(1e5, 9e5)}`,
      materia: this.materia,
      subtipo: "capital_trabajo",
      dificultad,
      enunciado: `Una empresa presenta un Activo Corriente de $ ${activoCorriente.toLocaleString("es-AR")} y un Pasivo Corriente de $ ${pasivoCorriente.toLocaleString("es-AR")}.\n¿Cuál es su capital de trabajo (AC – PC)?`,
      opciones: [`$ ${capitalTrabajo.toLocaleString("es-AR")}`, ...incorrectas],
      indiceCorrecto: 0,
      explicacion: "El capital de trabajo mide la capacidad de la empresa para cubrir sus obligaciones de corto plazo: Activo Corriente – Pasivo Corriente.",
      datos: { activoCorriente, pasivoCorriente, capitalTrabajo },
    });
  }

  private genPuntoEquilibrio(dificultad: Dificultad): Ejercicio {
    const f = dificultadFactor(dificultad);
    const costoFijo = this.randInt(Math.round(200 * f), Math.round(800 * f)) * 1000;
    const precioUnitario = this.randInt(Math.round(2000 * f), Math.round(8000 * f));
    const margenMin = Math.max(300, Math.round(500 * f));
    const cvuMax = Math.max(margenMin + 1, precioUnitario - margenMin);
    const costoVariableUnitario = this.randInt(Math.max(100, Math.round(300 * f)), cvuMax);
    const margenUnitario = precioUnitario - costoVariableUnitario;
    const qEquilibrio = Math.round(costoFijo / margenUnitario);
    const incorrectas = this.generarOpcionesIncorrectas(qEquilibrio, 3, 0.3).map(v => `${Math.max(1, Math.round(v))} unidades`);
    return this.crearQuiz({
      id: `${this.id}/punto_equilibrio/${this.randInt(1e5, 9e5)}`,
      materia: this.materia,
      subtipo: "punto_equilibrio",
      dificultad,
      enunciado: `Una empresa tiene Costos Fijos de $ ${costoFijo.toLocaleString("es-AR")}.\nVende su producto a $ ${precioUnitario.toLocaleString("es-AR")} por unidad y el costo variable unitario (CVu) es de $ ${costoVariableUnitario.toLocaleString("es-AR")}.\n¿Cuál es el punto de equilibrio aproximado en unidades (PE = CF / (P – CVu))?`,
      opciones: [`${qEquilibrio} unidades`, ...incorrectas],
      indiceCorrecto: 0,
      explicacion: "El punto de equilibrio indica la cantidad de unidades que debe vender la empresa para no ganar ni perder: PE = Costos Fijos / (Precio – Costo variable unitario).",
      datos: { costoFijo, precioUnitario, costoVariableUnitario, qEquilibrio },
    });
  }

  private genProductividad(dificultad: Dificultad): Ejercicio {
    const f = dificultadFactor(dificultad);
    const produccion = this.randInt(Math.round(200 * f), Math.round(2000 * f));
    const insumo = this.randInt(Math.max(2, Math.round(4 * f)), Math.round(40 * f));
    const productividad = Math.round((produccion / insumo) * 10) / 10;
    const incorrectas = this.generarOpcionesIncorrectas(productividad, 3, 0.25).map(v => `${Math.max(0.1, Math.round(v * 10) / 10).toLocaleString("es-AR")} unidades por insumo`);
    return this.crearQuiz({
      id: `${this.id}/productividad/${this.randInt(1e5, 9e5)}`,
      materia: this.materia,
      subtipo: "productividad",
      dificultad,
      enunciado: `En una actividad se producen ${produccion.toLocaleString("es-AR")} unidades usando ${insumo.toLocaleString("es-AR")} unidades de insumo (horas de trabajo).\n¿Cuál es la productividad aproximada (Producción / Insumos)?`,
      opciones: [`${productividad.toLocaleString("es-AR")} unidades por insumo`, ...incorrectas],
      indiceCorrecto: 0,
      explicacion: "La productividad se calcula dividiendo la producción total por la cantidad de insumos utilizados.",
      datos: { produccion, insumo, productividad },
    });
  }

  private genPorcentajesSimples(dificultad: Dificultad): Ejercicio {
    const f = dificultadFactor(dificultad);
    const tipo = this.pickOne(["descuento", "aumento", "impuesto"] as const);
    const base = this.randInt(Math.round(10 * f), Math.round(80 * f)) * 1000;
    const porcentaje = this.randInt(Math.max(1, Math.round(5 * f)), Math.round(40 * f));
    if (tipo === "descuento") {
      const precioFinal = Math.round(base * (1 - porcentaje / 100));
      const incorrectas = this.generarOpcionesIncorrectas(precioFinal, 3, 0.2).map(v => `$ ${Math.round(v).toLocaleString("es-AR")}`);
      return this.crearQuiz({
        id: `${this.id}/porcentajes_simples/${this.randInt(1e5, 9e5)}`,
        materia: this.materia,
        subtipo: "porcentajes_simples",
        dificultad,
        enunciado: `Un producto del hogar cuesta $ ${base.toLocaleString("es-AR")} y tiene un descuento del ${porcentaje}%.\n¿Cuál es el precio final a pagar?`,
        opciones: [`$ ${precioFinal.toLocaleString("es-AR")}`, ...incorrectas],
        indiceCorrecto: 0,
        explicacion: "El descuento se calcula como Precio × porcentaje. Luego se resta del precio original: Precio final = Precio – Descuento.",
        datos: { base, porcentaje, precioFinal },
      });
    } else if (tipo === "aumento") {
      const precioFinal = Math.round(base * (1 + porcentaje / 100));
      const incorrectas = this.generarOpcionesIncorrectas(precioFinal, 3, 0.2).map(v => `$ ${Math.round(v).toLocaleString("es-AR")}`);
      return this.crearQuiz({
        id: `${this.id}/porcentajes_simples/${this.randInt(1e5, 9e5)}`,
        materia: this.materia,
        subtipo: "porcentajes_simples",
        dificultad,
        enunciado: `Un servicio del hogar cuesta $ ${base.toLocaleString("es-AR")} y aumenta un ${porcentaje}%.\n¿Cuál es el nuevo precio?`,
        opciones: [`$ ${precioFinal.toLocaleString("es-AR")}`, ...incorrectas],
        indiceCorrecto: 0,
        explicacion: "En un aumento, el incremento se calcula como Precio × porcentaje. Luego se suma al precio original.",
        datos: { base, porcentaje, precioFinal },
      });
    }
    // impuesto
    const total = Math.round(base * (1 + porcentaje / 100));
    const incorrectas = this.generarOpcionesIncorrectas(total, 3, 0.2).map(v => `$ ${Math.round(v).toLocaleString("es-AR")}`);
    return this.crearQuiz({
      id: `${this.id}/porcentajes_simples/${this.randInt(1e5, 9e5)}`,
      materia: this.materia,
      subtipo: "porcentajes_simples",
      dificultad,
      enunciado: `Una familia debe pagar un impuesto simple del ${porcentaje}% sobre un monto base de $ ${base.toLocaleString("es-AR")}.\n¿Cuál es el monto total a pagar (base + impuesto)?`,
      opciones: [`$ ${total.toLocaleString("es-AR")}`, ...incorrectas],
      indiceCorrecto: 0,
      explicacion: "El impuesto se calcula como Base × porcentaje. El total a pagar es Base + Impuesto.",
      datos: { base, porcentaje, total },
    });
  }

  private genClasificacionBienes(dificultad: Dificultad): Ejercicio {
    const pool = this.poolPor(CASOS_BIENES, dificultad);
    const caso = this.pickOne(pool);
    return this.crearQuiz({
      id: `${this.id}/clasificacion_bienes/${this.randInt(1e5, 9e5)}`,
      materia: this.materia,
      subtipo: "clasificacion_bienes",
      dificultad,
      enunciado: caso.enunciado,
      opciones: caso.opciones,
      indiceCorrecto: caso.opciones.indexOf(caso.correcta),
      explicacion: caso.explicacion,
    });
  }

  private genAgentesEconomicos(dificultad: Dificultad): Ejercicio {
    const pool = this.poolPor(CASOS_AGENTES, dificultad);
    const caso = this.pickOne(pool);
    const opciones: Agente[] = ["Hogares/Familias", "Empresas", "Estado", "Sector externo"];
    return this.crearQuiz({
      id: `${this.id}/agentes_economicos/${this.randInt(1e5, 9e5)}`,
      materia: this.materia,
      subtipo: "agentes_economicos",
      dificultad,
      enunciado: `En el flujo circular de la economía, ¿qué agente económico corresponde a la siguiente descripción?\n\n${caso.descripcion}`,
      opciones,
      indiceCorrecto: opciones.indexOf(caso.agente),
      explicacion: caso.explicacion,
    });
  }

  private genEstructurasMercado(dificultad: Dificultad): Ejercicio {
    const pool = this.poolPor(CASOS_MERCADO, dificultad);
    const caso = this.pickOne(pool);
    const opciones: Mercado[] = ["Competencia perfecta", "Competencia monopolística", "Oligopolio", "Monopolio"];
    return this.crearQuiz({
      id: `${this.id}/estructuras_mercado/${this.randInt(1e5, 9e5)}`,
      materia: this.materia,
      subtipo: "estructuras_mercado",
      dificultad,
      enunciado: `Identificá la estructura de mercado de la siguiente situación:\n\n${caso.descripcion}`,
      opciones,
      indiceCorrecto: opciones.indexOf(caso.tipo),
      explicacion: caso.explicacion,
    });
  }

  private genGastosFijosVariables(dificultad: Dificultad): Ejercicio {
    const pool = this.poolPor(CASOS_GASTOS_FV, dificultad);
    const caso = this.pickOne(pool);
    return this.crearQuiz({
      id: `${this.id}/gastos_fijos_variables/${this.randInt(1e5, 9e5)}`,
      materia: this.materia,
      subtipo: "gastos_fijos_variables",
      dificultad,
      enunciado: `Clasificá el siguiente gasto de la empresa como Gasto fijo o Gasto variable:\n\n${caso.descripcion}`,
      opciones: ["Gasto fijo", "Gasto variable"],
      indiceCorrecto: caso.tipo === "Gasto fijo" ? 0 : 1,
      explicacion: caso.explicacion,
    });
  }

  private genSimpleVsCompuesto(dificultad: Dificultad): Ejercicio {
    const CASOS = [
      {
        descripcion: "El banco te cobra interés solo sobre el capital inicial, sin importar cuántos períodos pasen.",
        respuesta: "Interés simple",
        explicacion: "En el interés simple, el interés se calcula siempre sobre el capital inicial: I = C × i × t.",
        dificultadMinima: "basico" as Dificultad,
      },
      {
        descripcion: "Cada período, el interés ganado se suma al capital y en el siguiente período se calcula sobre ese nuevo total.",
        respuesta: "Interés compuesto",
        explicacion: "En el interés compuesto, el capital crece porque los intereses se acumulan: M = C × (1 + i)^t.",
        dificultadMinima: "basico" as Dificultad,
      },
      {
        descripcion: "Después de 3 años, el interés total es exactamente 3 veces el interés del primer año.",
        respuesta: "Interés simple",
        explicacion: "La linealidad es característica del interés simple.",
        dificultadMinima: "intermedio" as Dificultad,
      },
      {
        descripcion: "El monto final crece de forma exponencial con el tiempo.",
        respuesta: "Interés compuesto",
        explicacion: "El crecimiento exponencial es la característica principal del interés compuesto.",
        dificultadMinima: "avanzado" as Dificultad,
      },
    ];
    const pool = this.poolPor(CASOS, dificultad);
    const caso = this.pickOne(pool);
    return this.crearQuiz({
      id: `${this.id}/simple_vs_compuesto/${this.randInt(1e5, 9e5)}`,
      materia: this.materia,
      subtipo: "simple_vs_compuesto",
      dificultad,
      enunciado: `¿La siguiente descripción corresponde a interés simple o compuesto?\n\n${caso.descripcion}`,
      opciones: ["Interés simple", "Interés compuesto"],
      indiceCorrecto: caso.respuesta === "Interés simple" ? 0 : 1,
      explicacion: caso.explicacion,
    });
  }

  private genCftMayorInteres(dificultad: Dificultad): Ejercicio {
    const CASOS = [
      {
        enunciado: "Un banco ofrece un crédito con TNA 40%. Otro banco ofrece el mismo crédito con CFT 55%. ¿Cuál indica el costo real del financiamiento?",
        opciones: ["La TNA 40%", "El CFT 55%", "Son equivalentes", "Depende del plazo"],
        indiceCorrecto: 1,
        explicacion: "El CFT incluye todos los costos (interés + comisiones + seguros), por eso representa el costo real del crédito.",
        dificultadMinima: "basico" as Dificultad,
      },
      {
        enunciado: "¿Por qué el CFT suele ser mayor que la tasa de interés nominal de un préstamo?",
        opciones: [
          "Porque el CFT incluye solo el interés",
          "Porque el CFT incorpora comisiones, seguros y otros gastos",
          "Porque el CFT es un dato opcional",
          "Porque el CFT y la tasa son el mismo indicador",
        ],
        indiceCorrecto: 1,
        explicacion: "El CFT suma al interés nominal todos los cargos adicionales del crédito.",
        dificultadMinima: "intermedio" as Dificultad,
      },
      {
        enunciado: "Al comparar dos créditos, el indicador más adecuado para tomar la decisión correcta es:",
        opciones: ["La cuota mensual", "El CFT", "La TNA solamente", "El plazo del préstamo"],
        indiceCorrecto: 1,
        explicacion: "El CFT es el único indicador que permite comparar de forma completa el costo de dos créditos diferentes.",
        dificultadMinima: "avanzado" as Dificultad,
      },
    ];
    const pool = this.poolPor(CASOS, dificultad);
    const caso = this.pickOne(pool);
    return this.crearQuiz({
      id: `${this.id}/cft_mayor_interes/${this.randInt(1e5, 9e5)}`,
      materia: this.materia,
      subtipo: "cft_mayor_interes",
      dificultad,
      enunciado: caso.enunciado,
      opciones: caso.opciones,
      indiceCorrecto: caso.indiceCorrecto,
      explicacion: caso.explicacion,
    });
  }

  private genGananciaVsEquilibrio(dificultad: Dificultad): Ejercicio {
    const CASOS = [
      {
        enunciado: "Una empresa vende exactamente la cantidad que le permite cubrir todos sus costos pero no le sobra dinero. ¿Qué situación describe?",
        opciones: ["Ganancia", "Pérdida", "Punto de equilibrio", "Margen de seguridad"],
        indiceCorrecto: 2,
        explicacion: "En el punto de equilibrio los ingresos igualan los costos totales: no hay ganancia ni pérdida.",
        dificultadMinima: "basico" as Dificultad,
      },
      {
        enunciado: "Si una empresa vende más unidades que su punto de equilibrio, ¿qué ocurre?",
        opciones: ["Pérdida", "Punto de equilibrio", "Ganancia", "No hay impacto"],
        indiceCorrecto: 2,
        explicacion: "Superar el punto de equilibrio genera ganancia porque los ingresos superan los costos totales.",
        dificultadMinima: "basico" as Dificultad,
      },
      {
        enunciado: "Una empresa con IT = $ 500.000 y CT = $ 500.000 se encuentra en:",
        opciones: ["Pérdida", "Ganancia", "Punto de equilibrio", "Déficit fiscal"],
        indiceCorrecto: 2,
        explicacion: "Cuando IT = CT el resultado es cero: punto de equilibrio.",
        dificultadMinima: "intermedio" as Dificultad,
      },
    ];
    const pool = this.poolPor(CASOS, dificultad);
    const caso = this.pickOne(pool);
    return this.crearQuiz({
      id: `${this.id}/ganancia_vs_equilibrio/${this.randInt(1e5, 9e5)}`,
      materia: this.materia,
      subtipo: "ganancia_vs_equilibrio",
      dificultad,
      enunciado: caso.enunciado,
      opciones: caso.opciones,
      indiceCorrecto: caso.indiceCorrecto,
      explicacion: caso.explicacion,
    });
  }

  // ── Quiz conceptuales reutilizados de otros temas ─────────────────

  private genQuizAportesContribuciones(dificultad: Dificultad): Ejercicio {
    const CASOS = [
      { enunciado: "¿Qué son los aportes de los trabajadores en el recibo de sueldo?", opciones: ["Costos extra que paga el empleador", "Descuentos del salario bruto del empleado", "Impuestos nacionales", "Ganancias de la empresa"], indiceCorrecto: 1, explicacion: "Los aportes se descuentan del salario bruto del trabajador.", dificultadMinima: "basico" as Dificultad },
      { enunciado: "¿Qué son las contribuciones patronales?", opciones: ["Descuentos al trabajador", "Montos que paga el empleador al Estado sobre el salario", "Sueldos en negro", "IVA sobre servicios"], indiceCorrecto: 1, explicacion: "Las contribuciones son costos adicionales que la empresa paga al Estado sobre la nómina.", dificultadMinima: "basico" as Dificultad },
      { enunciado: "¿Quién paga la ART (Aseguradora de Riesgos del Trabajo)?", opciones: ["El trabajador de su salario", "El empleador como contribución patronal", "El Estado nacional", "El sindicato"], indiceCorrecto: 1, explicacion: "La ART la paga el empleador como parte de las contribuciones patronales.", dificultadMinima: "intermedio" as Dificultad },
    ];
    const pool = this.poolPor(CASOS, dificultad);
    const caso = this.pickOne(pool);
    return this.crearQuiz({
      id: `${this.id}/quiz_aportes_contribuciones/${this.randInt(1e5, 9e5)}`,
      materia: this.materia,
      subtipo: "quiz_aportes_contribuciones",
      dificultad,
      enunciado: caso.enunciado,
      opciones: caso.opciones,
      indiceCorrecto: caso.indiceCorrecto,
      explicacion: caso.explicacion,
    });
  }

  private genQuizDeudaBuenaMala(dificultad: Dificultad): Ejercicio {
    const CASOS = [
      { enunciado: "¿Cuál de las siguientes situaciones representa una 'deuda buena'?", opciones: ["Financiar ropa de moda que no necesitás", "Pedir un crédito para estudiar y mejorar tu ingreso futuro", "Usar la tarjeta para salidas nocturnas frecuentes", "Endeudarse para comprar tecnología de lujo"], indiceCorrecto: 1, explicacion: "La deuda buena invierte en algo que genera valor o ingresos futuros.", dificultadMinima: "basico" as Dificultad },
      { enunciado: "¿Cuál de las siguientes situaciones representa una 'deuda mala'?", opciones: ["Préstamo para herramientas de trabajo", "Financiamiento de medicamentos necesarios", "Uso de tarjeta para viajes de lujo innecesarios", "Crédito para reparar el techo de la vivienda"], indiceCorrecto: 2, explicacion: "La deuda mala financia consumos innecesarios sin generar beneficio futuro.", dificultadMinima: "intermedio" as Dificultad },
    ];
    const pool = this.poolPor(CASOS, dificultad);
    const caso = this.pickOne(pool);
    return this.crearQuiz({
      id: `${this.id}/quiz_deuda_buena_mala/${this.randInt(1e5, 9e5)}`,
      materia: this.materia,
      subtipo: "quiz_deuda_buena_mala",
      dificultad,
      enunciado: caso.enunciado,
      opciones: caso.opciones,
      indiceCorrecto: caso.indiceCorrecto,
      explicacion: caso.explicacion,
    });
  }

  private genQuizPublicidadEnganosa(dificultad: Dificultad): Ejercicio {
    const CASOS = [
      { enunciado: "Para identificar si una publicidad financiera es engañosa, lo más importante es verificar:", opciones: ["El color del aviso", "Que aparezcan el CFT y las tasas claramente", "La cantidad de cuotas ofrecidas", "El nombre de la empresa"], indiceCorrecto: 1, explicacion: "La presencia del CFT y las tasas es lo que permite evaluar el costo real.", dificultadMinima: "basico" as Dificultad },
      { enunciado: "Un aviso dice '0% de interés' pero en letra chica aclara CFT 90%. ¿Qué tipo de publicidad es?", opciones: ["Publicidad clara", "Publicidad engañosa", "Publicidad educativa", "Publicidad neutral"], indiceCorrecto: 1, explicacion: "Decir '0% interés' cuando existe un CFT alto es publicidad engañosa.", dificultadMinima: "intermedio" as Dificultad },
    ];
    const pool = this.poolPor(CASOS, dificultad);
    const caso = this.pickOne(pool);
    return this.crearQuiz({
      id: `${this.id}/quiz_publicidad_enganosa/${this.randInt(1e5, 9e5)}`,
      materia: this.materia,
      subtipo: "quiz_publicidad_enganosa",
      dificultad,
      enunciado: caso.enunciado,
      opciones: caso.opciones,
      indiceCorrecto: caso.indiceCorrecto,
      explicacion: caso.explicacion,
    });
  }

  private genQuizGastosEsenciales(dificultad: Dificultad): Ejercicio {
    const CASOS = [
      { enunciado: "¿Cuál de los siguientes es un ejemplo de gasto esencial?", opciones: ["Suscripción a Netflix", "Compra de alimentos básicos", "Entradas a un recital", "Ropa de marca"], indiceCorrecto: 1, explicacion: "Los alimentos son necesidades básicas: gasto esencial.", dificultadMinima: "basico" as Dificultad },
      { enunciado: "¿Cuál de los siguientes es un ejemplo de gasto no esencial?", opciones: ["Pago del alquiler", "Medicamentos recetados", "Transporte para el trabajo", "Suscripción de streaming"], indiceCorrecto: 3, explicacion: "El streaming es prescindible: gasto no esencial.", dificultadMinima: "basico" as Dificultad },
    ];
    const pool = this.poolPor(CASOS, dificultad);
    const caso = this.pickOne(pool);
    return this.crearQuiz({
      id: `${this.id}/quiz_gastos_esenciales/${this.randInt(1e5, 9e5)}`,
      materia: this.materia,
      subtipo: "quiz_gastos_esenciales",
      dificultad,
      enunciado: caso.enunciado,
      opciones: caso.opciones,
      indiceCorrecto: caso.indiceCorrecto,
      explicacion: caso.explicacion,
    });
  }

  private genQuizLiquidez(dificultad: Dificultad): Ejercicio {
    const CASOS = [
      { enunciado: "¿Qué significa que un activo tiene 'alta liquidez'?", opciones: ["Es muy costoso", "Se puede convertir rápidamente en dinero", "Genera mucho interés", "Es imposible venderlo"], indiceCorrecto: 1, explicacion: "Alta liquidez significa que se puede convertir en efectivo de forma rápida y sin grandes pérdidas.", dificultadMinima: "basico" as Dificultad },
      { enunciado: "¿Cuál de las siguientes opciones representa el activo más líquido?", opciones: ["Un terreno en la periferia", "Efectivo en la billetera", "Un plazo fijo a 180 días", "Un automóvil"], indiceCorrecto: 1, explicacion: "El efectivo es la forma más líquida de dinero.", dificultadMinima: "basico" as Dificultad },
    ];
    const pool = this.poolPor(CASOS, dificultad);
    const caso = this.pickOne(pool);
    return this.crearQuiz({
      id: `${this.id}/quiz_liquidez/${this.randInt(1e5, 9e5)}`,
      materia: this.materia,
      subtipo: "quiz_liquidez",
      dificultad,
      enunciado: caso.enunciado,
      opciones: caso.opciones,
      indiceCorrecto: caso.indiceCorrecto,
      explicacion: caso.explicacion,
    });
  }

  private genQuizInteresSimpleCompuesto(dificultad: Dificultad): Ejercicio {
    const CASOS = [
      { enunciado: "En el interés simple, ¿sobre qué se calcula el interés de cada período?", opciones: ["Sobre el capital acumulado con intereses anteriores", "Sobre el capital inicial siempre", "Sobre el capital más inflación", "Sobre el CFT"], indiceCorrecto: 1, explicacion: "El interés simple siempre se calcula sobre el capital original.", dificultadMinima: "basico" as Dificultad },
      { enunciado: "En el interés compuesto, ¿qué ocurre con los intereses generados?", opciones: ["Se pierden al final de cada período", "Se suman al capital para generar más intereses", "Se restan del capital inicial", "No tienen efecto en el monto final"], indiceCorrecto: 1, explicacion: "En el interés compuesto, los intereses se capitalizan y generan nuevos intereses.", dificultadMinima: "intermedio" as Dificultad },
    ];
    const pool = this.poolPor(CASOS, dificultad);
    const caso = this.pickOne(pool);
    return this.crearQuiz({
      id: `${this.id}/quiz_interes_simple_compuesto/${this.randInt(1e5, 9e5)}`,
      materia: this.materia,
      subtipo: "quiz_interes_simple_compuesto",
      dificultad,
      enunciado: caso.enunciado,
      opciones: caso.opciones,
      indiceCorrecto: caso.indiceCorrecto,
      explicacion: caso.explicacion,
    });
  }

  private genQuizCftInteres(dificultad: Dificultad): Ejercicio {
    const CASOS = [
      { enunciado: "¿Cuál es la diferencia principal entre tasa de interés y CFT?", opciones: ["Son idénticos", "El CFT incluye el interés más comisiones y cargos adicionales", "La tasa es mayor que el CFT siempre", "El CFT se aplica solo a créditos hipotecarios"], indiceCorrecto: 1, explicacion: "El CFT (Costo Financiero Total) suma al interés todos los gastos y comisiones del crédito.", dificultadMinima: "basico" as Dificultad },
      { enunciado: "¿Por qué es importante mirar el CFT al pedir un crédito?", opciones: ["Porque es solo un dato formal", "Porque muestra el costo real total del financiamiento", "Porque determina el color de la tarjeta", "Porque lo exige el banco solo por normativa"], indiceCorrecto: 1, explicacion: "El CFT es el indicador que refleja todos los costos reales del crédito.", dificultadMinima: "intermedio" as Dificultad },
    ];
    const pool = this.poolPor(CASOS, dificultad);
    const caso = this.pickOne(pool);
    return this.crearQuiz({
      id: `${this.id}/quiz_cft_interes/${this.randInt(1e5, 9e5)}`,
      materia: this.materia,
      subtipo: "quiz_cft_interes",
      dificultad,
      enunciado: caso.enunciado,
      opciones: caso.opciones,
      indiceCorrecto: caso.indiceCorrecto,
      explicacion: caso.explicacion,
    });
  }

  private genQuizGananciaEquilibrio(dificultad: Dificultad): Ejercicio {
    const CASOS = [
      { enunciado: "¿Qué significa que una empresa está en 'punto de equilibrio'?", opciones: ["Tiene máxima ganancia", "Sus ingresos igualan sus costos totales", "Está en quiebra", "Tiene exceso de producción"], indiceCorrecto: 1, explicacion: "En el punto de equilibrio IT = CT: no hay ganancia ni pérdida.", dificultadMinima: "basico" as Dificultad },
      { enunciado: "¿Qué pasa cuando una empresa vende por debajo de su punto de equilibrio?", opciones: ["Obtiene ganancia", "Está en equilibrio", "Tiene pérdida", "Maximiza beneficios"], indiceCorrecto: 2, explicacion: "Si vende menos que el punto de equilibrio, los ingresos no cubren los costos: hay pérdida.", dificultadMinima: "basico" as Dificultad },
    ];
    const pool = this.poolPor(CASOS, dificultad);
    const caso = this.pickOne(pool);
    return this.crearQuiz({
      id: `${this.id}/quiz_ganancia_equilibrio/${this.randInt(1e5, 9e5)}`,
      materia: this.materia,
      subtipo: "quiz_ganancia_equilibrio",
      dificultad,
      enunciado: caso.enunciado,
      opciones: caso.opciones,
      indiceCorrecto: caso.indiceCorrecto,
      explicacion: caso.explicacion,
    });
  }
}
