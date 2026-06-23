/**
 * WO-7c — Plantillas VBLang OFICIALES para Economía (Economía General).
 *
 * Patrón: ver `docs/vblang/porting-generadores.md`. Cada plantilla
 * reproduce la FÓRMULA de un subtipo PARAMÉTRICO de
 * `apps/web/src/generadoresV2/economia/EconomiaGeneral.ts` con respuesta
 * NUMÉRICA.
 *
 * Cobertura (ramas NUMÉRICAS; las MC/conceptuales — `politica_fiscal`,
 * `clasificacion_bienes`, `agentes_economicos`, `estructuras_mercado`,
 * `gastos_fijos_variables`, etc. — son ramas distintas con respuesta
 * string y quedan para WO futura):
 *  - `ganancia_perdida` (basico): Resultado = IT – CT.
 *  - `resultado_bruto` (basico): Ventas – Costo de ventas.
 *  - `resultado_neto` (basico): Resultado Bruto – Gastos.
 *  - `margen_bruto` (basico): (Ganancia Bruta / Ventas) × 100.
 *  - `margen_neto` (basico): (Resultado Neto / Ventas) × 100.
 *  - `capital_trabajo` (basico): Activo Corriente – Pasivo Corriente.
 *  - `punto_equilibrio` (basico): CF / (P – CVu).
 *  - `productividad` (basico): Producción / Insumos.
 *  - `porcentajes_simples` (basico): descuento / aumento / impuesto.
 *
 * Verificación:
 *  - validez DSL: `tests/templates/economia-general-oficiales.test.ts`
 *  - equivalencia con generador: `apps/web/.../economia-equivalencia.spec.ts`
 */
import type { PlantillaOficial } from "./types.js";

/**
 * ganancia_perdida (basico): Resultado = IT – CT.
 * Si IT > CT hay ganancia; si IT < CT hay pérdida. La respuesta
 * es un número con signo (puede ser negativo).
 */
const GANANCIA_PERDIDA_DSL = `metadata:
  materia: "economia"
  nivel: "basico"
  tags: ["ganancia_perdida", "resultado", "ingreso_costo"]

variables:
  # Rangos: basico usa ingresoTotal ∈ [50_000, 200_000] y
  # costoTotal ∈ [30_000, 180_000] (en miles de pesos AR). El
  # generador multiplica por 1000.
  ingresoTotal: random(50, 200) * 1000
  costoTotal: random(30, 180) * 1000
  resultado: ingresoTotal - costoTotal

respuesta: resultado
tipo: input
tolerancia_abs: 0

enunciado: |
  Una actividad económica obtiene un Ingreso Total (IT) de $ {ingresoTotal} y un Costo Total (CT) de $ {costoTotal}.
  ¿Cuál es el resultado (ganancia o pérdida) usando: Resultado = IT – CT?

pasos:
  - "Resultado = IT - CT = {ingresoTotal} - {costoTotal} = {resultado}"

explicacion: |
  Si IT > CT hay ganancia; si IT < CT hay pérdida. Con IT = {ingresoTotal}
  y CT = {costoTotal}, el resultado es {resultado} (positivo = ganancia,
  negativo = pérdida).
`;

/**
 * resultado_bruto (basico): Ventas – Costo de ventas.
 */
const RESULTADO_BRUTO_DSL = `metadata:
  materia: "economia"
  nivel: "basico"
  tags: ["resultado_bruto", "ventas", "costo_ventas"]

variables:
  ventas: random(80, 250) * 1000
  costoVentas: random(40, 200) * 1000
  resultadoBruto: ventas - costoVentas

respuesta: resultadoBruto
tipo: input
tolerancia_abs: 0

enunciado: |
  Una empresa tiene Ventas por $ {ventas} y Costo de ventas por $ {costoVentas}.
  ¿Cuál es el Resultado Bruto usando: Resultado Bruto = Ventas – Costo de ventas?

pasos:
  - "Resultado Bruto = Ventas - Costo de ventas = {ventas} - {costoVentas} = {resultadoBruto}"

explicacion: |
  El Resultado Bruto muestra la ganancia antes de gastos de
  administración y ventas. Se calcula: Ventas – Costo de ventas =
  {ventas} - {costoVentas} = {resultadoBruto}.
`;

/**
 * resultado_neto (basico): Resultado Bruto – Gastos.
 */
const RESULTADO_NETO_DSL = `metadata:
  materia: "economia"
  nivel: "basico"
  tags: ["resultado_neto", "resultado_bruto", "gastos"]

variables:
  resultadoBruto: random(80, 250) * 1000
  gastos: random(20, 150) * 1000
  resultadoNeto: resultadoBruto - gastos

respuesta: resultadoNeto
tipo: input
tolerancia_abs: 0

enunciado: |
  Una empresa tiene Resultado Bruto de $ {resultadoBruto} y Gastos de $ {gastos}.
  ¿Cuál es el Resultado Neto usando: Resultado Neto = Resultado Bruto – Gastos?

pasos:
  - "Resultado Neto = Resultado Bruto - Gastos = {resultadoBruto} - {gastos} = {resultadoNeto}"

explicacion: |
  El Resultado Neto es la ganancia o pérdida final del período,
  luego de restar los gastos al resultado bruto. Resultado Neto =
  {resultadoBruto} - {gastos} = {resultadoNeto}.
`;

/**
 * margen_bruto (basico): (Ganancia Bruta / Ventas) × 100.
 * Devuelve el porcentaje ENTERO (Math.round como en el generador).
 */
const MARGEN_BRUTO_DSL = `metadata:
  materia: "economia"
  nivel: "basico"
  tags: ["margen_bruto", "ganancia_bruta", "ventas", "porcentaje"]

variables:
  ventas: random(100, 300) * 1000
  costoVentas: random(50, 250) * 1000
  gananciaBruta: ventas - costoVentas
  # El generador redondea a entero con Math.round.
  margen: redondear(gananciaBruta / ventas * 100, 0)

respuesta: margen
tipo: input
tolerancia_abs: 0

enunciado: |
  Una empresa tiene Ventas por $ {ventas} y Costo de ventas por $ {costoVentas}.
  La Ganancia Bruta es Ventas – Costo de ventas.
  ¿Cuál es el margen bruto aproximado (Ganancia Bruta / Ventas × 100)?

pasos:
  - "Ganancia Bruta = {ventas} - {costoVentas} = {gananciaBruta}"
  - "Margen bruto = ({gananciaBruta} / {ventas}) × 100 = {margen}%"

explicacion: |
  El margen bruto se calcula como (Ganancia Bruta / Ventas) × 100.
  Indica qué porcentaje de cada peso vendido queda para cubrir otros
  gastos. Con los valores dados, el margen es {margen}%.
`;

/**
 * margen_neto (basico): (Resultado Neto / Ventas) × 100.
 */
const MARGEN_NETO_DSL = `metadata:
  materia: "economia"
  nivel: "basico"
  tags: ["margen_neto", "resultado_neto", "ventas", "porcentaje"]

variables:
  ventas: random(100, 300) * 1000
  # El generador sortea resultadoNeto ∈ [10_000, 80_000] (basico).
  resultadoNeto: random(10, 80) * 1000
  margen: redondear(resultadoNeto / ventas * 100, 0)

respuesta: margen
tipo: input
tolerancia_abs: 0

enunciado: |
  Una empresa tiene Ventas por $ {ventas} y Resultado Neto de $ {resultadoNeto}.
  ¿Cuál es el margen neto aproximado (Resultado Neto / Ventas × 100)?

pasos:
  - "Margen neto = ({resultadoNeto} / {ventas}) × 100 = {margen}%"

explicacion: |
  El margen neto se calcula como (Resultado Neto / Ventas) × 100.
  Muestra qué porcentaje de las ventas queda como ganancia neta.
  Con los valores dados, el margen es {margen}%.
`;

/**
 * capital_trabajo (basico): Activo Corriente – Pasivo Corriente.
 */
const CAPITAL_TRABAJO_DSL = `metadata:
  materia: "economia"
  nivel: "basico"
  tags: ["capital_trabajo", "activo_corriente", "pasivo_corriente"]

variables:
  activoCorriente: random(100, 300) * 1000
  pasivoCorriente: random(50, 250) * 1000
  capitalTrabajo: activoCorriente - pasivoCorriente

respuesta: capitalTrabajo
tipo: input
tolerancia_abs: 0

enunciado: |
  Una empresa presenta un Activo Corriente de $ {activoCorriente} y un Pasivo Corriente de $ {pasivoCorriente}.
  ¿Cuál es su capital de trabajo (AC – PC)?

pasos:
  - "Capital de trabajo = AC - PC = {activoCorriente} - {pasivoCorriente} = {capitalTrabajo}"

explicacion: |
  El capital de trabajo mide la capacidad de la empresa para
  cubrir sus obligaciones de corto plazo: Activo Corriente –
  Pasivo Corriente. Con los valores dados, el capital de trabajo
  es $ {capitalTrabajo}.
`;

/**
 * punto_equilibrio (basico): PE = CF / (P – CVu), redondeado a entero.
 * El generador sortea CF ∈ [200_000, 800_000], P ∈ [2000, 8000], CVu
 * ∈ [max(100, 300)..P-300]. Usamos los mismos rangos.
 */
const PUNTO_EQUILIBRIO_DSL = `metadata:
  materia: "economia"
  nivel: "basico"
  tags: ["punto_equilibrio", "costos_fijos", "margen_unitario"]

variables:
  costoFijo: random(200, 800) * 1000
  precioUnitario: random(2000, 8000)
  # CVu entre max(100, 300) y precioUnitario - 300 (excluyendo
  # margenUnitario ≤ 0). Para simplicidad, sorteamos CVu ∈
  # [300, precioUnitario - 500] para garantizar margen positivo.
  costoVariableUnitario: random(300, precioUnitario - 500)
  margenUnitario: precioUnitario - costoVariableUnitario
  qEquilibrio: redondear(costoFijo / margenUnitario, 0)

respuesta: qEquilibrio
tipo: input
tolerancia_abs: 0

enunciado: |
  Una empresa tiene Costos Fijos de $ {costoFijo}.
  Vende su producto a $ {precioUnitario} por unidad y el costo variable unitario (CVu) es de $ {costoVariableUnitario}.
  ¿Cuál es el punto de equilibrio aproximado en unidades (PE = CF / (P – CVu))?

pasos:
  - "PE = CF / (P - CVu) = {costoFijo} / ({precioUnitario} - {costoVariableUnitario})"
  - "PE = {costoFijo} / {margenUnitario} = {qEquilibrio} unidades"

explicacion: |
  El punto de equilibrio indica la cantidad de unidades que debe
  vender la empresa para no ganar ni perder: PE = Costos Fijos /
  (Precio – Costo variable unitario). Con los valores dados,
  PE = {costoFijo} / {margenUnitario} = {qEquilibrio} unidades.
`;

/**
 * productividad (basico): Producción / Insumos.
 */
const PRODUCTIVIDAD_DSL = `metadata:
  materia: "economia"
  nivel: "basico"
  tags: ["productividad", "produccion", "insumos"]

variables:
  produccion: random(200, 2000)
  insumo: random(4, 40)
  productividad: redondear(produccion / insumo, 1)

respuesta: productividad
tipo: input
tolerancia_abs: 0.05

enunciado: |
  En una actividad se producen {produccion} unidades usando {insumo} unidades de insumo (horas de trabajo).
  ¿Cuál es la productividad aproximada (Producción / Insumos)?

pasos:
  - "Productividad = Producción / Insumos = {produccion} / {insumo} = {productividad}"

explicacion: |
  La productividad se calcula dividiendo la producción total por la
  cantidad de insumos utilizados. Con Producción = {produccion} e
  Insumos = {insumo}, la productividad es {productividad} unidades
  por insumo.
`;

/**
 * porcentajes_simples (basico): descuento / aumento / impuesto.
 * El generador sortea entre 3 tipos con 33% prob cada uno. Como el
 * DSL no tiene ternario ni switch, lo cubrimos con 3 plantillas
 * separadas (una por rama) — todas con `subtipoOriginal:
 * "porcentajes_simples"`. El test de equivalencia acepta que cada
 * plantilla cubra UNA de las 3 ramas (las otras se saltean cuando
 * no matchean la regex del enunciado).
 */
const PORCENTAJE_DESCUENTO_DSL = `metadata:
  materia: "economia"
  nivel: "basico"
  tags: ["porcentajes_simples", "descuento"]

variables:
  base: random(10, 80) * 1000
  pct: random(5, 40)
  resultado: redondear(base * (1 - pct / 100), 0)

respuesta: resultado
tipo: input
tolerancia_abs: 0

enunciado: "Un producto del hogar cuesta $ {base} y tiene un descuento del {pct}%. ¿Cuál es el precio final a pagar?"

pasos:
  - "Descuento = {base} × {pct}/100 = {redondear(base * pct / 100, 0)}"
  - "Precio final = {base} - {redondear(base * pct / 100, 0)} = {resultado}"

explicacion: |
  El descuento se calcula como Base × porcentaje. Con Base = {base}
  y {pct}% de descuento, el precio final es {base} × (1 – {pct}/100) =
  {resultado}.
`;

const PORCENTAJE_AUMENTO_DSL = `metadata:
  materia: "economia"
  nivel: "basico"
  tags: ["porcentajes_simples", "aumento"]

variables:
  base: random(10, 80) * 1000
  pct: random(5, 40)
  resultado: redondear(base * (1 + pct / 100), 0)

respuesta: resultado
tipo: input
tolerancia_abs: 0

enunciado: "Un servicio del hogar cuesta $ {base} y aumenta un {pct}%. ¿Cuál es el nuevo precio?"

pasos:
  - "Aumento = {base} × {pct}/100 = {redondear(base * pct / 100, 0)}"
  - "Precio nuevo = {base} + {redondear(base * pct / 100, 0)} = {resultado}"

explicacion: |
  El aumento se calcula como Base × porcentaje. Con Base = {base}
  y un aumento del {pct}%, el nuevo precio es {base} × (1 + {pct}/100) =
  {resultado}.
`;

const PORCENTAJE_IMPUESTO_DSL = `metadata:
  materia: "economia"
  nivel: "basico"
  tags: ["porcentajes_simples", "impuesto"]

variables:
  base: random(10, 80) * 1000
  pct: random(5, 40)
  resultado: redondear(base * (1 + pct / 100), 0)

respuesta: resultado
tipo: input
tolerancia_abs: 0

enunciado: "Una familia debe pagar un impuesto simple del {pct}% sobre un monto base de $ {base}. ¿Cuál es el monto total a pagar (base + impuesto)?"

pasos:
  - "Impuesto = {base} × {pct}/100 = {redondear(base * pct / 100, 0)}"
  - "Total = {base} + {redondear(base * pct / 100, 0)} = {resultado}"

explicacion: |
  El impuesto se calcula como Base × porcentaje. Con Base = {base}
  y un impuesto del {pct}%, el total a pagar es {base} × (1 + {pct}/100) =
  {resultado}.
`;

export const ECONOMIA_GENERAL_OFICIALES: PlantillaOficial[] = [
  {
    id: "oficial-economia-ganancia-perdida",
    nombre: "Economía: ganancia o pérdida (Resultado = IT – CT)",
    descripcion:
      "Calcula el resultado de una actividad económica como Ingreso Total – Costo Total. Rama basico del subtipo `ganancia_perdida`.",
    materia: "economia",
    tags: ["ganancia_perdida", "resultado"],
    subtipoOriginal: "ganancia_perdida",
    codigoDsl: GANANCIA_PERDIDA_DSL,
  },
  {
    id: "oficial-economia-resultado-bruto",
    nombre: "Economía: resultado bruto (Ventas – Costo de ventas)",
    descripcion:
      "Calcula el resultado bruto de una empresa. Rama basico del subtipo `resultado_bruto`.",
    materia: "economia",
    tags: ["resultado_bruto", "ventas", "costo_ventas"],
    subtipoOriginal: "resultado_bruto",
    codigoDsl: RESULTADO_BRUTO_DSL,
  },
  {
    id: "oficial-economia-resultado-neto",
    nombre: "Economía: resultado neto (Resultado Bruto – Gastos)",
    descripcion:
      "Calcula el resultado neto luego de restar los gastos al resultado bruto. Rama basico del subtipo `resultado_neto`.",
    materia: "economia",
    tags: ["resultado_neto", "gastos"],
    subtipoOriginal: "resultado_neto",
    codigoDsl: RESULTADO_NETO_DSL,
  },
  {
    id: "oficial-economia-margen-bruto",
    nombre: "Economía: margen bruto (Ganancia Bruta / Ventas × 100)",
    descripcion:
      "Calcula el margen bruto como porcentaje. Rama basico del subtipo `margen_bruto`.",
    materia: "economia",
    tags: ["margen_bruto", "porcentaje"],
    subtipoOriginal: "margen_bruto",
    codigoDsl: MARGEN_BRUTO_DSL,
  },
  {
    id: "oficial-economia-margen-neto",
    nombre: "Economía: margen neto (Resultado Neto / Ventas × 100)",
    descripcion:
      "Calcula el margen neto como porcentaje. Rama basico del subtipo `margen_neto`.",
    materia: "economia",
    tags: ["margen_neto", "porcentaje"],
    subtipoOriginal: "margen_neto",
    codigoDsl: MARGEN_NETO_DSL,
  },
  {
    id: "oficial-economia-capital-trabajo",
    nombre: "Economía: capital de trabajo (AC – PC)",
    descripcion:
      "Calcula el capital de trabajo como Activo Corriente – Pasivo Corriente. Rama basico del subtipo `capital_trabajo`.",
    materia: "economia",
    tags: ["capital_trabajo", "activo_corriente", "pasivo_corriente"],
    subtipoOriginal: "capital_trabajo",
    codigoDsl: CAPITAL_TRABAJO_DSL,
  },
  {
    id: "oficial-economia-punto-equilibrio",
    nombre: "Economía: punto de equilibrio (CF / (P – CVu))",
    descripcion:
      "Calcula la cantidad de unidades en el punto de equilibrio. Rama basico del subtipo `punto_equilibrio`.",
    materia: "economia",
    tags: ["punto_equilibrio", "costos_fijos"],
    subtipoOriginal: "punto_equilibrio",
    codigoDsl: PUNTO_EQUILIBRIO_DSL,
  },
  {
    id: "oficial-economia-productividad",
    nombre: "Economía: productividad (Producción / Insumos)",
    descripcion:
      "Calcula la productividad como cociente entre producción e insumos. Rama basico del subtipo `productividad`.",
    materia: "economia",
    tags: ["productividad", "produccion"],
    subtipoOriginal: "productividad",
    codigoDsl: PRODUCTIVIDAD_DSL,
  },
  {
    id: "oficial-economia-porcentaje-descuento",
    nombre: "Economía: porcentaje simple — descuento",
    descripcion:
      "Aplica un descuento porcentual a un precio base. Rama del subtipo `porcentajes_simples` (la otra cubre aumento e impuesto).",
    materia: "economia",
    tags: ["porcentajes_simples", "descuento"],
    subtipoOriginal: "porcentajes_simples",
    codigoDsl: PORCENTAJE_DESCUENTO_DSL,
  },
  {
    id: "oficial-economia-porcentaje-aumento",
    nombre: "Economía: porcentaje simple — aumento",
    descripcion:
      "Aplica un aumento porcentual a un precio base. Rama del subtipo `porcentajes_simples`.",
    materia: "economia",
    tags: ["porcentajes_simples", "aumento"],
    subtipoOriginal: "porcentajes_simples",
    codigoDsl: PORCENTAJE_AUMENTO_DSL,
  },
  {
    id: "oficial-economia-porcentaje-impuesto",
    nombre: "Economía: porcentaje simple — impuesto",
    descripcion:
      "Aplica un impuesto porcentual a un monto base. Rama del subtipo `porcentajes_simples`.",
    materia: "economia",
    tags: ["porcentajes_simples", "impuesto"],
    subtipoOriginal: "porcentajes_simples",
    codigoDsl: PORCENTAJE_IMPUESTO_DSL,
  },
];
