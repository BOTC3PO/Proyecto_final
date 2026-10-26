/**
 * F6-04 — Plantillas VBLang OFICIALES para EconomiaAR.
 *
 * Upgrade de los 3 subtipos PARAMETRIZABLE de mayor valor demo señalados por
 * `docs/AUDITORIA_GENERADORES.md` (sección "EconomiaAR (5)"): `recibo_basico`,
 * `descuentos_obligatorios` y `monotributo`. En `apps/web/src/generadoresV2/economia/EconomiaAR.ts`
 * estos tres subtipos eran "pool disfrazado" (preguntas conceptuales de opción
 * fija sobre CASOS_RECIBO / CASOS_DESCUENTOS / CASOS_MONOTRIBUTO, ya migradas a
 * bancos estáticos en F6-02). Acá se reemplazan por el CÓMPUTO REAL en VBLang:
 * el alumno resuelve un cálculo de sueldo/aportes/monotributo con parámetros
 * sorteados y respuesta numérica verificable.
 *
 * Decisión de diseño — tablas como CONSTANTES de la plantilla (no `dataset:`):
 * F2-01 (`docs/vblang/diagnostico_datasets.md`) confirmó que `dataset: <X>` +
 * `uno_de(X)` funciona SOLO cuando `<X>` es un IDENT válido, y que el fix de
 * los datasets sembrados (nombres con espacios/acentos) no fue aplicado. Crear
 * un dataset nuevo implicaría además sembrarlo en `VblangDataset`/Prisma, fuera
 * del alcance de esta tarea (los criterios de aceptación de F6-04 son
 * `pnpm --filter ./packages/vblang test` + `pnpm test:web`, sin `pnpm test:api`).
 * Las tablas de estos 3 subtipos son chicas (≤5 filas), normativas y de cambio
 * poco frecuente: declararlas como arrays de objetos en `variables:` es
 * autocontenido, no depende de la DB ni del runtime de datasets, y el docente
 * que clone la plantilla puede editarlas como cualquier otra constante del DSL.
 */

export interface PlantillaOficialEconomiaAR {
  /** Id propuesto para sembrar como `PlantillaEjercicio` (F6-01: owner=SYSTEM_OWNER_ID). */
  id: string;
  nombre: string;
  descripcion: string;
  materia: string;
  tags: string[];
  /** Subtipo de `EconomiaAR.ts` que esta plantilla reemplaza/upgradea. */
  subtipoOriginal: string;
  codigoDsl: string;
}

const RECIBO_BASICO_DSL = `metadata:
  materia: "economia"
  nivel: "intermedio"
  tags: ["economia_ar", "recibo_basico", "sueldo_bruto"]

variables:
  basico: random(6, 15) * 10000
  anios_antiguedad: random(1, 15)
  horas_extra: random(0, 8)
  adicional_antiguedad: redondear(basico * anios_antiguedad * 0.01, 0)
  valor_hora_extra: redondear(basico / 200 * 1.5, 0)
  pago_horas_extra: horas_extra * valor_hora_extra
  sueldo_bruto: basico + adicional_antiguedad + pago_horas_extra

respuesta: sueldo_bruto
unidad: "$"
tolerancia_abs: 1
tipo: input

enunciado: |
  Un trabajador tiene un sueldo básico de $ {basico}.
  Tiene {anios_antiguedad} años de antigüedad: por convenio se suma un 1% del básico
  por cada año de antigüedad. Además, este mes trabajó {horas_extra} horas extra, que
  se pagan con un recargo del 50% sobre el valor de la hora normal (la hora normal se
  calcula como básico / 200).
  ¿Cuál es el sueldo bruto (las "Remuneraciones" o "Haberes") de este trabajador?

pasos:
  - "Adicional por antigüedad = básico × años × 1% = {basico} × {anios_antiguedad} × 0,01 = $ {adicional_antiguedad}"
  - "Valor de la hora extra = (básico / 200) × 1,5 = $ {valor_hora_extra}"
  - "Pago de horas extra = {horas_extra} × {valor_hora_extra} = $ {pago_horas_extra}"
  - "Sueldo bruto = básico + antigüedad + horas extra = {basico} + {adicional_antiguedad} + {pago_horas_extra} = $ {sueldo_bruto}"

explicacion: |
  El sueldo bruto (también llamado "Remuneraciones" o "Haberes") se obtiene sumando al
  sueldo básico todos los conceptos remunerativos: la antigüedad (1% del básico por
  cada año trabajado) y las horas extra (que se pagan con un 50% de recargo sobre el
  valor de la hora normal). Bruto = {basico} + {adicional_antiguedad} + {pago_horas_extra} = $ {sueldo_bruto}.
`;

const DESCUENTOS_OBLIGATORIOS_DSL = `metadata:
  materia: "economia"
  nivel: "intermedio"
  tags: ["economia_ar", "descuentos_obligatorios", "aportes"]

variables:
  bruto: random(60, 150) * 1000
  concepto: uno_de([{ nombre: "Jubilación", porcentaje: 11 }, { nombre: "Obra Social", porcentaje: 3 }, { nombre: "PAMI", porcentaje: 3 }, { nombre: "el total de aportes obligatorios", porcentaje: 17 }])
  descuento: redondear(bruto * concepto.porcentaje / 100, 0)

respuesta: descuento
unidad: "$"
tolerancia_abs: 1
tipo: input

enunciado: |
  Un trabajador en blanco tiene un sueldo bruto remunerativo de $ {bruto}.
  Los descuentos obligatorios del trabajador sobre el sueldo bruto son:
  Jubilación 11%, Obra Social 3% y PAMI 3% (en conjunto, 17%).
  ¿Cuánto le descuentan por {concepto.nombre}?

pasos:
  - "El descuento por {concepto.nombre} equivale al {concepto.porcentaje}% del sueldo bruto."
  - "{concepto.nombre} = {bruto} × {concepto.porcentaje} / 100 = $ {descuento}"

explicacion: |
  Los aportes obligatorios que se descuentan del sueldo bruto remunerativo en
  Argentina son Jubilación (11%), Obra Social (3%) y PAMI (3%), que sumados dan el
  17%. {concepto.nombre} = {bruto} × {concepto.porcentaje} / 100 = $ {descuento}.
`;

const MONOTRIBUTO_DSL = `metadata:
  materia: "economia"
  nivel: "avanzado"
  tags: ["economia_ar", "monotributo", "categorias"]

variables:
  categorias: [{ nombre: "A", limite: 6000000, cuota: 30000 }, { nombre: "B", limite: 9000000, cuota: 35000 }, { nombre: "C", limite: 12000000, cuota: 45000 }, { nombre: "D", limite: 15000000, cuota: 58000 }, { nombre: "E", limite: 18000000, cuota: 73000 }]
  ingresos_anuales: random(40, 180) * 100000
  categoria: primero(filtrar(categorias, item.limite >= ingresos_anuales))

respuesta: categoria.cuota
unidad: "$"
tolerancia_abs: 1
tipo: input

enunciado: |
  Una persona monotributista factura $ {ingresos_anuales} por año.
  Tabla simplificada de categorías del Monotributo (límite de facturación anual y cuota mensual fija):
  Categoría A: hasta $ 6.000.000 -> cuota $ 30.000
  Categoría B: hasta $ 9.000.000 -> cuota $ 35.000
  Categoría C: hasta $ 12.000.000 -> cuota $ 45.000
  Categoría D: hasta $ 15.000.000 -> cuota $ 58.000
  Categoría E: hasta $ 18.000.000 -> cuota $ 73.000
  Según sus ingresos anuales, ¿cuál es la cuota mensual que debería pagar?

pasos:
  - "Se busca la categoría más baja cuyo límite anual sea mayor o igual a los ingresos ({ingresos_anuales})."
  - "Esa es la categoría {categoria.nombre}, con cuota mensual $ {categoria.cuota}."

explicacion: |
  En el Monotributo, la categoría (y la cuota mensual fija que unifica impuesto y
  aportes previsionales) depende del nivel de ingresos anuales: a cada categoría le
  corresponde un límite de facturación. Con $ {ingresos_anuales} de ingresos anuales
  corresponde la categoría {categoria.nombre}, cuya cuota mensual es $ {categoria.cuota}.
  (Tabla simplificada con fines didácticos; las alícuotas vigentes de AFIP se
  actualizan periódicamente.)
`;

export const ECONOMIA_AR_OFICIALES: PlantillaOficialEconomiaAR[] = [
  {
    id: "oficial-economia-ar-recibo-basico",
    nombre: "Recibo de sueldo: del básico al bruto",
    descripcion:
      "Calcula el sueldo bruto (Remuneraciones) a partir del básico, la antigüedad (1% por año) y las horas extra (50% de recargo).",
    materia: "economia",
    tags: ["economia_ar", "recibo_basico", "sueldo_bruto"],
    subtipoOriginal: "recibo_basico",
    codigoDsl: RECIBO_BASICO_DSL,
  },
  {
    id: "oficial-economia-ar-descuentos-obligatorios",
    nombre: "Descuentos obligatorios sobre el sueldo bruto",
    descripcion:
      "Calcula el descuento de Jubilación, Obra Social, PAMI o el total de aportes (17%) sobre un sueldo bruto remunerativo.",
    materia: "economia",
    tags: ["economia_ar", "descuentos_obligatorios", "aportes"],
    subtipoOriginal: "descuentos_obligatorios",
    codigoDsl: DESCUENTOS_OBLIGATORIOS_DSL,
  },
  {
    id: "oficial-economia-ar-monotributo",
    nombre: "Monotributo: categoría y cuota mensual",
    descripcion:
      "A partir de los ingresos anuales facturados, determina la categoría de Monotributo aplicable y su cuota mensual según una tabla simplificada.",
    materia: "economia",
    tags: ["economia_ar", "monotributo", "categorias"],
    subtipoOriginal: "monotributo",
    codigoDsl: MONOTRIBUTO_DSL,
  },
];
