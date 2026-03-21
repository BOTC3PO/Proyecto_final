import { BaseGenerador } from "../core/baseGenerador";
import type { Dificultad, Ejercicio, Calculator } from "../core/types";

// ── Datos ─────────────────────────────────────────────────────────

type Clasificacion = "Activo" | "Pasivo" | "Patrimonio Neto" | "R+" | "R-";

const CUENTAS_CLASIFICACION: { nombre: string; clasificacion: Clasificacion }[] = [
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

const CLASIFICACION_OPCIONES: Clasificacion[] = ["Activo", "Pasivo", "Patrimonio Neto", "R+", "R-"];

type Naturaleza = "Deudora" | "Acreedora";

const CUENTAS_NATURALEZA: { nombre: string; naturaleza: Naturaleza }[] = [
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

const CUENTAS_NATURALEZA_BASICO = ["Caja", "Banco c/c", "Clientes", "Capital", "Proveedores"];
const CUENTAS_NATURALEZA_INTERMEDIO = [
  "Caja", "Banco c/c", "Clientes", "Mercaderías", "Muebles y Útiles", "Capital", "Reservas", "Proveedores",
];

type Ubicacion =
  | "Activo Corriente"
  | "Activo No Corriente"
  | "Pasivo Corriente"
  | "Pasivo No Corriente"
  | "Resultados (Ingresos)"
  | "Resultados (Costos/Gastos)";

const CUENTAS_UBICACION: { nombre: string; ubicacion: Ubicacion }[] = [
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

const UBICACION_OPCIONES: Ubicacion[] = [
  "Activo Corriente",
  "Activo No Corriente",
  "Pasivo Corriente",
  "Pasivo No Corriente",
  "Resultados (Ingresos)",
  "Resultados (Costos/Gastos)",
];

const HECHOS_PATRIMONIO: {
  descripcion: string;
  respuesta: "Afecta el patrimonio" | "No afecta el patrimonio";
  detalle: string;
  dificultadMinima: Dificultad;
}[] = [
  {
    descripcion: "Se paga en efectivo una deuda con un proveedor.",
    respuesta: "Afecta el patrimonio",
    detalle: "Disminuye el Activo (Caja) y disminuye el Pasivo (Proveedores): hecho permutativo.",
    dificultadMinima: "basico",
  },
  {
    descripcion: "Se compra mercadería al contado.",
    respuesta: "Afecta el patrimonio",
    detalle: "Aumenta un Activo (Mercaderías) y disminuye otro Activo (Caja): hecho permutativo.",
    dificultadMinima: "basico",
  },
  {
    descripcion: "El dueño mira el estado contable sin hacer operaciones.",
    respuesta: "No afecta el patrimonio",
    detalle: "No hay operación económica, solo una observación. No se modifican cuentas.",
    dificultadMinima: "basico",
  },
  {
    descripcion: "Se emite una factura de venta a crédito a un cliente.",
    respuesta: "Afecta el patrimonio",
    detalle: "Aumenta Activo (Clientes) y aumenta R+ (Ventas): hecho modificativo aumentativo.",
    dificultadMinima: "intermedio",
  },
  {
    descripcion: "Se pasa la mercadería del depósito al salón de ventas.",
    respuesta: "No afecta el patrimonio",
    detalle: "Solo se cambia la ubicación física de un mismo activo sin modificar su valor contable.",
    dificultadMinima: "intermedio",
  },
  {
    descripcion: "Se rompe una silla del local sin reposición.",
    respuesta: "Afecta el patrimonio",
    detalle: "Disminuye el Activo (Muebles y Útiles) y aumenta un gasto: hecho modificativo disminutivo.",
    dificultadMinima: "intermedio",
  },
  {
    descripcion: "Se registra un gasto por servicio de luz del mes.",
    respuesta: "Afecta el patrimonio",
    detalle: "Disminuye el Activo (Caja/Banco) y aumenta un gasto, reduciendo el patrimonio neto.",
    dificultadMinima: "avanzado",
  },
  {
    descripcion: "Se recibe un préstamo bancario en la cuenta corriente.",
    respuesta: "Afecta el patrimonio",
    detalle: "Aumenta el Activo (Banco) y aumenta el Pasivo (Préstamo), cambia la estructura del patrimonio.",
    dificultadMinima: "avanzado",
  },
];

const ITEMS_BIENES_DERECHOS: {
  descripcion: string;
  categoria: "Bien" | "Derecho" | "Obligación";
  dificultadMinima: Dificultad;
}[] = [
  {
    descripcion: "Un vehículo que pertenece a la empresa.",
    categoria: "Bien",
    dificultadMinima: "basico",
  },
  {
    descripcion: "Mercaderías almacenadas para la venta.",
    categoria: "Bien",
    dificultadMinima: "basico",
  },
  {
    descripcion: "Un crédito a cobrar a clientes por ventas a plazo.",
    categoria: "Derecho",
    dificultadMinima: "basico",
  },
  {
    descripcion: "Una deuda bancaria a corto plazo.",
    categoria: "Obligación",
    dificultadMinima: "basico",
  },
  {
    descripcion: "Una computadora de la oficina.",
    categoria: "Bien",
    dificultadMinima: "intermedio",
  },
  {
    descripcion: "Un cheque de terceros en cartera pendiente de cobro.",
    categoria: "Derecho",
    dificultadMinima: "intermedio",
  },
  {
    descripcion: "Facturas de proveedores pendientes de pago.",
    categoria: "Obligación",
    dificultadMinima: "intermedio",
  },
  {
    descripcion: "Un seguro pagado por adelantado.",
    categoria: "Derecho",
    dificultadMinima: "avanzado",
  },
  {
    descripcion: "Un pagaré a favor de un proveedor.",
    categoria: "Obligación",
    dificultadMinima: "avanzado",
  },
  {
    descripcion: "Un depósito en garantía entregado a un proveedor.",
    categoria: "Derecho",
    dificultadMinima: "avanzado",
  },
  {
    descripcion: "Un préstamo a largo plazo con una entidad financiera.",
    categoria: "Obligación",
    dificultadMinima: "avanzado",
  },
];

const CONCEPTOS_APORTES: {
  descripcion: string;
  tipo: "Aporte del trabajador" | "Contribución del empleador";
  dificultadMinima: Dificultad;
}[] = [
  {
    descripcion: "Descuento del 11% de jubilación sobre el sueldo del empleado.",
    tipo: "Aporte del trabajador",
    dificultadMinima: "basico",
  },
  {
    descripcion: "Descuento del 3% de Obra Social sobre el salario del empleado.",
    tipo: "Aporte del trabajador",
    dificultadMinima: "basico",
  },
  {
    descripcion: "Aporte patronal a la seguridad social que paga la empresa.",
    tipo: "Contribución del empleador",
    dificultadMinima: "basico",
  },
  {
    descripcion: "Pago de la ART (Aseguradora de Riesgos del Trabajo) por parte de la empresa.",
    tipo: "Contribución del empleador",
    dificultadMinima: "basico",
  },
  {
    descripcion: "Descuento del 3% de PAMI sobre el salario.",
    tipo: "Aporte del trabajador",
    dificultadMinima: "intermedio",
  },
  {
    descripcion: "Contribución de la empresa a la Obra Social.",
    tipo: "Contribución del empleador",
    dificultadMinima: "intermedio",
  },
  {
    descripcion: "Descuento por seguro de vida obligatorio sobre el salario.",
    tipo: "Aporte del trabajador",
    dificultadMinima: "avanzado",
  },
  {
    descripcion: "Contribución patronal al SIPA sobre el salario.",
    tipo: "Contribución del empleador",
    dificultadMinima: "avanzado",
  },
];

const VARIACIONES_PATRIMONIALES: {
  descripcion: string;
  tipo: "Permutativa" | "Modificativa Aumentativa" | "Modificativa Disminutiva";
  detalle: string;
  dificultadMinima: Dificultad;
}[] = [
  {
    descripcion: "Se compra mercadería al contado.",
    tipo: "Permutativa",
    detalle: "Aumenta un Activo (Mercaderías) y disminuye otro Activo (Caja). El patrimonio total no cambia.",
    dificultadMinima: "basico",
  },
  {
    descripcion: "Se paga una deuda a proveedores en efectivo.",
    tipo: "Permutativa",
    detalle: "Disminuye el Activo (Caja) y disminuye el Pasivo (Proveedores). El patrimonio total no cambia.",
    dificultadMinima: "basico",
  },
  {
    descripcion: "Se vende mercadería al contado generando ganancia.",
    tipo: "Modificativa Aumentativa",
    detalle: "Aumenta el Activo (Caja) y aumenta un ingreso (Ventas), incrementando el patrimonio neto.",
    dificultadMinima: "basico",
  },
  {
    descripcion: "Se paga el alquiler del local comercial.",
    tipo: "Modificativa Disminutiva",
    detalle: "Disminuye el Activo (Caja) y aumenta un gasto (Alquileres), reduciendo el patrimonio neto.",
    dificultadMinima: "basico",
  },
  {
    descripcion: "Se rompe una máquina y se reconoce la pérdida contable.",
    tipo: "Modificativa Disminutiva",
    detalle: "Disminuye el Activo (Bienes de uso) y aumenta un gasto por pérdida, bajando el patrimonio neto.",
    dificultadMinima: "intermedio",
  },
  {
    descripcion: "Se otorga un préstamo a un tercero desde Caja.",
    tipo: "Permutativa",
    detalle: "Disminuye Caja y aumenta un Derecho (Préstamos otorgados). El patrimonio total no cambia.",
    dificultadMinima: "intermedio",
  },
  {
    descripcion: "Se cobra un interés por un préstamo otorgado.",
    tipo: "Modificativa Aumentativa",
    detalle: "Aumenta el Activo (Caja/Banco) y aumenta un ingreso financiero, incrementando el patrimonio neto.",
    dificultadMinima: "avanzado",
  },
  {
    descripcion: "Se reconoce una amortización del mobiliario.",
    tipo: "Modificativa Disminutiva",
    detalle: "Disminuye el valor del activo (Bienes de uso) y aumenta un gasto por amortización.",
    dificultadMinima: "avanzado",
  },
];

// ── Generador ──────────────────────────────────────────────────────

export class ContabilidadGenerator extends BaseGenerador {
  readonly id = "economia/contabilidad";
  readonly materia = "economia" as const;
  readonly subtipos = [
    "clasificacion_cuentas",
    "naturaleza_cuentas",
    "saldo_normal",
    "ubicacion_estados",
    "hechos_patrimonio",
    "bienes_derechos_obligaciones",
    "aportes_contribuciones",
    "variaciones_patrimoniales",
  ];

  generarEjercicio(subtipo: string, dificultad: Dificultad, _calc: Calculator): Ejercicio {
    switch (subtipo) {
      case "clasificacion_cuentas":        return this.genClasificacionCuentas(dificultad);
      case "naturaleza_cuentas":           return this.genNaturalezaCuentas(dificultad);
      case "saldo_normal":                 return this.genSaldoNormal(dificultad);
      case "ubicacion_estados":            return this.genUbicacionEstados(dificultad);
      case "hechos_patrimonio":            return this.genHechosPatrimonio(dificultad);
      case "bienes_derechos_obligaciones": return this.genBienesDerechosObligaciones(dificultad);
      case "aportes_contribuciones":       return this.genAportesContribuciones(dificultad);
      case "variaciones_patrimoniales":    return this.genVariacionesPatrimoniales(dificultad);
      default:                             return this.genClasificacionCuentas(dificultad);
    }
  }

  private genClasificacionCuentas(dificultad: Dificultad): Ejercicio {
    const cuenta = this.pickOne(CUENTAS_CLASIFICACION);
    const correcta = cuenta.clasificacion;
    const cantOpciones = dificultad === "basico" ? 3 : dificultad === "intermedio" ? 4 : 5;
    const distractores = CLASIFICACION_OPCIONES.filter(c => c !== correcta);
    const opciones: string[] = [correcta];
    const shuffled = this.shuffle(distractores);
    for (let i = 0; i < cantOpciones - 1 && i < shuffled.length; i++) {
      opciones.push(shuffled[i]);
    }
    return this.crearQuiz({
      id: `${this.id}/clasificacion_cuentas/${this.randInt(1e5, 9e5)}`,
      materia: this.materia,
      subtipo: "clasificacion_cuentas",
      dificultad,
      enunciado: `La cuenta "${cuenta.nombre}" se clasifica como:`,
      opciones,
      indiceCorrecto: 0,
      explicacion:
        "Se clasifican las cuentas según si representan bienes/derechos (Activo), deudas (Pasivo), aportes y resultados acumulados (Patrimonio Neto) o resultados del ejercicio (R+ ingresos, R- costos/gastos).",
    });
  }

  private genNaturalezaCuentas(dificultad: Dificultad): Ejercicio {
    const permitidos =
      dificultad === "basico"
        ? CUENTAS_NATURALEZA_BASICO
        : dificultad === "intermedio"
        ? CUENTAS_NATURALEZA_INTERMEDIO
        : CUENTAS_NATURALEZA.map(c => c.nombre);
    const pool = CUENTAS_NATURALEZA.filter(c => permitidos.includes(c.nombre));
    const cuenta = this.pickOne(pool);
    return this.crearQuiz({
      id: `${this.id}/naturaleza_cuentas/${this.randInt(1e5, 9e5)}`,
      materia: this.materia,
      subtipo: "naturaleza_cuentas",
      dificultad,
      enunciado: `¿Qué naturaleza tiene la cuenta "${cuenta.nombre}"?`,
      opciones: ["Deudora", "Acreedora"],
      indiceCorrecto: cuenta.naturaleza === "Deudora" ? 0 : 1,
      explicacion:
        "Las cuentas de Activo y gastos tienen naturaleza Deudora; las de Pasivo, Patrimonio Neto e ingresos tienen naturaleza Acreedora.",
    });
  }

  private genSaldoNormal(dificultad: Dificultad): Ejercicio {
    const deudoras = ["Caja", "Banco c/c", "Clientes", "Mercaderías"];
    const acreedoras = ["Proveedores", "Deudas Bancarias", "Capital"];
    const esDeudora = this.pickOne([true, false]);
    const nombreCuenta = esDeudora
      ? this.pickOne(deudoras)
      : this.pickOne(acreedoras);
    const [min, max] = dificultad === "basico" ? [5, 10] : dificultad === "intermedio" ? [8, 16] : [12, 25];
    const debitos = this.randInt(min, max) * 1000;
    const creditos = this.randInt(min - 3, max - 5) * 1000;
    const saldo = Math.abs(debitos - creditos);
    const esSaldoDeudor = debitos > creditos;
    const tipoSaldo = esSaldoDeudor ? "Deudor" : "Acreedor";
    const saldoStr = saldo.toLocaleString("es-AR");
    const opcionCorrecta = `${saldoStr} ${tipoSaldo}`;
    const opciones = [
      opcionCorrecta,
      `${saldoStr} ${esSaldoDeudor ? "Acreedor" : "Deudor"}`,
      `${(saldo + 1000).toLocaleString("es-AR")} Deudor`,
      `${(saldo + 1000).toLocaleString("es-AR")} Acreedor`,
    ];
    return this.crearQuiz({
      id: `${this.id}/saldo_normal/${this.randInt(1e5, 9e5)}`,
      materia: this.materia,
      subtipo: "saldo_normal",
      dificultad,
      enunciado: `En la cuenta "${nombreCuenta}" se registraron Débitos por ${debitos.toLocaleString("es-AR")} y Créditos por ${creditos.toLocaleString("es-AR")}. ¿Cuál es el saldo final y su tipo?`,
      opciones,
      indiceCorrecto: 0,
      explicacion:
        "Saldo = Débitos – Créditos si predominan los débitos (saldo Deudor) o Créditos – Débitos si predominan los créditos (saldo Acreedor).",
    });
  }

  private genUbicacionEstados(dificultad: Dificultad): Ejercicio {
    const cuenta = this.pickOne(CUENTAS_UBICACION);
    const correcta = cuenta.ubicacion;
    const cantOpciones = dificultad === "basico" ? 3 : dificultad === "intermedio" ? 4 : 6;
    const distractores = UBICACION_OPCIONES.filter(o => o !== correcta);
    const opciones: string[] = [correcta];
    const shuffled = this.shuffle(distractores);
    for (let i = 0; i < cantOpciones - 1 && i < shuffled.length; i++) {
      opciones.push(shuffled[i]);
    }
    return this.crearQuiz({
      id: `${this.id}/ubicacion_estados/${this.randInt(1e5, 9e5)}`,
      materia: this.materia,
      subtipo: "ubicacion_estados",
      dificultad,
      enunciado: `¿Dónde se ubica la cuenta "${cuenta.nombre}" en los estados contables?`,
      opciones,
      indiceCorrecto: 0,
      explicacion:
        "En el Balance se separan las cuentas según su exigibilidad o realización (Corriente/No Corriente) y en el Estado de Resultados se presentan ingresos y costos/gastos del período.",
    });
  }

  private genHechosPatrimonio(dificultad: Dificultad): Ejercicio {
    const disponibles = HECHOS_PATRIMONIO.filter(h =>
      dificultad === "basico"
        ? h.dificultadMinima === "basico"
        : dificultad === "intermedio"
        ? h.dificultadMinima !== "avanzado"
        : true
    );
    const hecho = this.pickOne(disponibles);
    return this.crearQuiz({
      id: `${this.id}/hechos_patrimonio/${this.randInt(1e5, 9e5)}`,
      materia: this.materia,
      subtipo: "hechos_patrimonio",
      dificultad,
      enunciado: `Indique si el siguiente hecho económico afecta o no afecta al patrimonio:\n\n${hecho.descripcion}`,
      opciones: ["Afecta el patrimonio", "No afecta el patrimonio"],
      indiceCorrecto: hecho.respuesta === "Afecta el patrimonio" ? 0 : 1,
      explicacion: hecho.detalle,
    });
  }

  private genBienesDerechosObligaciones(dificultad: Dificultad): Ejercicio {
    const disponibles = ITEMS_BIENES_DERECHOS.filter(i =>
      dificultad === "basico"
        ? i.dificultadMinima === "basico"
        : dificultad === "intermedio"
        ? i.dificultadMinima !== "avanzado"
        : true
    );
    const item = this.pickOne(disponibles);
    const opciones = ["Bien", "Derecho", "Obligación"];
    return this.crearQuiz({
      id: `${this.id}/bienes_derechos_obligaciones/${this.randInt(1e5, 9e5)}`,
      materia: this.materia,
      subtipo: "bienes_derechos_obligaciones",
      dificultad,
      enunciado: `Clasificá el siguiente elemento del patrimonio como Bien, Derecho u Obligación:\n\n${item.descripcion}`,
      opciones,
      indiceCorrecto: opciones.indexOf(item.categoria),
      explicacion:
        "El patrimonio está formado por bienes (lo que la empresa posee), derechos (lo que tiene para cobrar) y obligaciones (lo que debe a terceros).",
    });
  }

  private genAportesContribuciones(dificultad: Dificultad): Ejercicio {
    const disponibles = CONCEPTOS_APORTES.filter(c =>
      dificultad === "basico"
        ? c.dificultadMinima === "basico"
        : dificultad === "intermedio"
        ? c.dificultadMinima !== "avanzado"
        : true
    );
    const concepto = this.pickOne(disponibles);
    const opciones = ["Aporte del trabajador", "Contribución del empleador"];
    return this.crearQuiz({
      id: `${this.id}/aportes_contribuciones/${this.randInt(1e5, 9e5)}`,
      materia: this.materia,
      subtipo: "aportes_contribuciones",
      dificultad,
      enunciado: `Clasificá el siguiente concepto del recibo de sueldo:\n\n${concepto.descripcion}`,
      opciones,
      indiceCorrecto: opciones.indexOf(concepto.tipo),
      explicacion:
        "Los aportes se descuentan del salario del trabajador; las contribuciones son montos adicionales que paga el empleador sobre el sueldo.",
    });
  }

  private genVariacionesPatrimoniales(dificultad: Dificultad): Ejercicio {
    const disponibles = VARIACIONES_PATRIMONIALES.filter(h =>
      dificultad === "basico"
        ? h.dificultadMinima === "basico"
        : dificultad === "intermedio"
        ? h.dificultadMinima !== "avanzado"
        : true
    );
    const hecho = this.pickOne(disponibles);
    const opciones = ["Permutativa", "Modificativa Aumentativa", "Modificativa Disminutiva"];
    return this.crearQuiz({
      id: `${this.id}/variaciones_patrimoniales/${this.randInt(1e5, 9e5)}`,
      materia: this.materia,
      subtipo: "variaciones_patrimoniales",
      dificultad,
      enunciado: `Clasificá la siguiente operación según el tipo de variación patrimonial:\n\n${hecho.descripcion}`,
      opciones,
      indiceCorrecto: opciones.indexOf(hecho.tipo),
      explicacion:
        "Las operaciones permutativas cambian la composición del patrimonio pero no su valor total; las modificativas aumentan o disminuyen el patrimonio neto. " +
        hecho.detalle,
    });
  }
}
