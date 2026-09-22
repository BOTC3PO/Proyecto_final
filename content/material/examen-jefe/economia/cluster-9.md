# Examen jefe — [PENDIENTE #774]

> Logro #774. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **115 preguntas totales** en 5/5 secciones.

---

## Sección: indices-financieros (22 preguntas)

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "basico"
  tags: ["liquidez", "corriente"]

variables:
  ac: random(100, 500)
  pc: random(50, 150)
  resultado: redondear(ac / pc, 2)

respuesta: resultado
tipo: input

enunciado: "Una empresa tiene Activos Corrientes de {ac} y Pasivos Corrientes de {pc}. Calculá el índice de Liquidez Corriente. Redondeá a 2 decimales."

explicacion: |
  La Liquidez Corriente se calcula dividiendo los Activos Corrientes entre los Pasivos Corrientes.
  Fórmula: AC / PC.
```

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "intermedio"
  tags: ["rotacion", "stock"]

variables:
  costo: random(1000, 5000)
  inventario: random(100, 500)
  resultado: redondear(costo / inventario, 2)

respuesta: resultado
tipo: input

enunciado: "El Costo de Mercadería Vendida es {costo} y el Inventario Promedio es {inventario}. Calculá la rotación de stock."

explicacion: |
  La rotación de stock mide cuántas veces se renueva el inventario. Se calcula como Costo de Mercadería Vendida / Inventario Promedio.
```

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "basico"
  tags: ["balance", "activos"]

variables:
  ac: random(100, 300)
  af: random(400, 900)
  resultado: ac + af

respuesta: resultado
tipo: input

enunciado: "Los Activos Corrientes son {ac} y los Activos Fijos son {af}. ¿Cuál es el total de Activos?"

explicacion: |
  Activos Totales = Activos Corrientes + Activos Fijos.
```

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "intermedio"
  tags: ["liquidez", "acida"]

variables:
  ac: random(200, 500)
  inventario: random(50, 150)
  pc: random(100, 300)
  numerador: ac - inventario
  resultado: redondear(numerador / pc, 2)

respuesta: resultado
tipo: input

enunciado: "Activos Corrientes: {ac}, Inventario: {inventario}, Pasivos Corrientes: {pc}. Calculá la Liquidez Ácida."

explicacion: |
  Liquidez Ácida = (Activos Corrientes - Inventario) / Pasivos Corrientes.
  Elimina el inventario porque es el activo menos líquido.
```

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "basico"
  tags: ["conceptos", "costo"]

variables:
  tasa: random(5, 15)
  monto: random(1000, 5000)
  interes: redondear(monto * (tasa / 100), 0)

respuesta: interes
tipo: completar

enunciado: "Si inviertes {monto} a una tasa del {tasa}% anual, el rendimiento futuro es {interes}. Este monto representa el costo de oportunidad de no tener el dinero disponible hoy."

explicacion: |
  El costo de oportunidad en finanzas suele referirse al retorno perdido al elegir una alternativa sobre otra. Aquí se calcula el interés generado.
```

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "intermedio"
  tags: ["rotacion", "cuentas_cobrar"]

variables:
  ventas_credito: random(10000, 50000)
  cuentas_cobrar: random(1000, 5000)
  dias: 360
  rotacion: ventas_credito / cuentas_cobrar
  resultado: floor(dias / rotacion)

respuesta: resultado
tipo: input

enunciado: "Ventas a Crédito: {ventas_credito}, Cuentas por Cobrar: {cuentas_cobrar}. Usando un año de 360 días, calculá el período promedio de cobro en días."

explicacion: |
  Período de Cobro = 360 / (Ventas a Crédito / Cuentas por Cobrar).
```

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "avanzado"
  tags: ["valor_tiempo", "vp"]

variables:
  vf: random(1000, 5000)
  tasa: random(5, 10)
  anios: uno_de([1, 2, 3])
  resultado: redondear(vf / ((1 + tasa/100) ^ anios), 2)

respuesta: resultado
tipo: input

enunciado: "Un valor futuro de {vf} dentro de {anios} años, con una tasa de descuento del {tasa}%, tiene un Valor Presente de aproximadamente:"

explicacion: |
  VP = VF / (1 + r)^n.
```

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "basico"
  tags: ["liquidez", "efectivo"]

variables:
  caja: random(100, 500)
  bancos: random(200, 800)
  resultado: caja + bancos

respuesta: resultado
tipo: input

enunciado: "Caja: {caja}, Bancos: {bancos}. ¿Cuál es el total de Efectivo y Equivalentes de Efectivo?"

explicacion: |
  Efectivo = Caja + Bancos. Es el activo más líquido.
```

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "avanzado"
  tags: ["costo", "capital"]

variables:
  dividendo: random(2, 10)
  precio: random(20, 50)
  crecimiento: random(2, 8)
  costo: redondear((dividendo / precio) + (crecimiento / 100), 4)

respuesta: costo
tipo: input

enunciado: "Dividendo esperado: {dividendo}, Precio de la acción: {precio}, Tasa de crecimiento: {crecimiento}%. Calculá el Costo de Capital Accionario (Modelo Gordon)."

explicacion: |
  Ke = (D1 / P0) + g.
  Donde D1 es dividendo, P0 precio y g tasa de crecimiento.
```

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "intermedio"
  tags: ["costos", "equilibrio"]

variables:
  costos_fijos: random(1000, 5000)
  precio: random(100, 300)
  costo_variable: random(40, 80)
  resultado: floor(costos_fijos / (precio - costo_variable))

respuesta: resultado
tipo: input

enunciado: "Costos Fijos: {costos_fijos}, Precio de Venta: {precio}, Costo Variable Unitario: {costo_variable}. Calculá el punto de equilibrio en unidades."

explicacion: |
  Punto de Equilibrio = Costos Fijos / (Precio - Costo Variable Unitario).
```

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "intermedio"
  tags: ["valor_tiempo", "vf"]

variables:
  pv: random(1000, 5000)
  tasa: random(5, 10)
  anios: uno_de([1, 2, 3])
  resultado: redondear(pv * ((1 + tasa/100) ^ anios), 2)

respuesta: resultado
tipo: input

enunciado: "Si inviertes {pv} hoy a una tasa del {tasa}% anual durante {anios} años, el Valor Futuro será:"

explicacion: |
  VF = PV * (1 + r)^n.
```

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "intermedio"
  tags: ["liquidez", "inmediata"]

variables:
  efectivo: random(50, 200)
  pc: random(100, 400)
  resultado: redondear(efectivo / pc, 2)

respuesta: resultado
tipo: input

enunciado: "Efectivo y Equivalentes: {efectivo}, Pasivos Corrientes: {pc}. Calculá la Liquidez Inmediata."

explicacion: |
  Liquidez Inmediata = Efectivo / Pasivos Corrientes.
  Mide la capacidad de pago sin vender inventario.
```

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "intermedio"
  tags: ["recuperacion", "inversion"]

variables:
  inversion: random(5000, 15000)
  flujo_anual: random(1000, 3000)
  resultado: floor(inversion / flujo_anual)

respuesta: resultado
tipo: input

enunciado: "Inversión Inicial: {inversion}, Flujo de Caja Anual Constante: {flujo_anual}. Calculá el periodo de recuperación simple en años."

explicacion: |
  Periodo de Recuperación = Inversión Inicial / Flujo de Caja Anual.
```

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "avanzado"
  tags: ["wacc", "capital"]

variables:
  deuda_ratio: 0.4
  eq_ratio: 0.6
  costo_deuda: 0.08
  costo_equity: 0.12
  impuesto: 0.30
  wacc: redondear((deuda_ratio * costo_deuda * (1 - impuesto)) + (eq_ratio * costo_equity), 4)

respuesta: wacc
tipo: input

enunciado: "Estructura de Capital: 40% Deuda, 60% Equity. Costo Deuda: 8%, Costo Equity: 12%, Impuesto: 30%. Calculá el WACC."

explicacion: |
  WACC = (Wd * Kd * (1-T)) + (We * Ke).
```

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "basico"
  tags: ["liquidez", "interpretacion"]

variables:
  ac: random(100, 300)
  pc: random(301, 500)

respuesta: falso
tipo: vf

enunciado: "Si una empresa tiene Activos Corrientes de {ac} y Pasivos Corrientes de {pc}, su Liquidez Corriente indica que tiene holgura para pagar sus deudas a corto plazo."

explicacion: |
  Falso. Al ser {ac} < {pc}, el índice es menor a 1 ({redondear(ac/pc, 2)}), lo que indica dificultad potencial para cubrir obligaciones a corto plazo.
```

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "intermedio"
  tags: ["rotacion", "eficiencia"]

variables:
  costo_ventas: random(1000, 5000)
  inventario: random(100, 500)

respuesta: verdadero
tipo: vf

enunciado: "Un índice de rotación de inventario alto indica que la empresa vende su mercadería rápidamente y la mantiene poco tiempo en almacén."

explicacion: |
  Verdadero. Una rotación alta significa que el inventario se renueva frecuentemente, lo que suele ser un signo de buena gestión y demanda.
```

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "intermedio"
  tags: ["estructura", "riesgo"]

variables:
  ratio: uno_de([0.3, 0.4, 0.5, 0.6, 0.7])

respuesta: falso
tipo: vf

enunciado: "Un ratio de endeudamiento del {ratio} se considera generalmente de muy bajo riesgo financiero para cualquier tipo de empresa."

explicacion: |
  Falso. Un ratio de {ratio} ({ratio*100}%) indica que el 40-70% de los activos está financiado con deuda, lo que representa un nivel de riesgo moderado a alto, dependiendo del sector.
```

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "basico"
  tags: ["rentabilidad", "interpretacion"]

variables:
  margen: uno_de([0.05, 0.1, 0.15, 0.2, 0.3])

respuesta: verdadero
tipo: vf

enunciado: "Un margen neto del {margen*100}% significa que por cada peso vendido, la empresa se queda con {redondear(margen*100, 1)} centavos de ganancia después de todos los gastos."

explicacion: |
  Verdadero. El margen neto refleja la eficiencia global de la empresa en la conversión de ventas en ganancias.
```

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "intermedio"
  tags: ["estructura", "riesgo"]

variables:
  ratio: uno_de([0.5, 0.8, 1.2, 1.5, 2.0])

respuesta: falso
tipo: vf

enunciado: "Un ratio Deuda/Patrimonio de {ratio} indica que la empresa está financiada principalmente con recursos propios (patrimonio)."

explicacion: |
  Falso. Si el ratio es mayor a 1 (como {ratio}), significa que la deuda es mayor que el patrimonio, por lo que la financiación es principalmente ajena.
```

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "basico"
  tags: ["rentabilidad", "interpretacion"]

variables:
  margen: uno_de([0.05, 0.1, 0.15, 0.2, 0.3])

respuesta: verdadero
tipo: vf

enunciado: "Un margen operativo del {margen*100}% indica la eficiencia de la empresa en la gestión de sus costos y gastos operativos antes de impuestos e intereses."

explicacion: |
  Verdadero. El margen operativo refleja la rentabilidad del negocio principal, excluyendo efectos financieros y tributarios.
```

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "intermedio"
  tags: ["rentabilidad", "interpretacion"]

variables:
  roe: uno_de([0.05, 0.1, 0.15, 0.2, 0.3])

respuesta: verdadero
tipo: vf

enunciado: "Un ROE del {roe*100}% indica que por cada peso invertido por los accionistas, la empresa generó {redondear(roe*100, 1)} centavos de ganancia."

explicacion: |
  Verdadero. El ROE es una medida clave de la rentabilidad desde la perspectiva del accionista.
```

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "intermedio"
  tags: ["rotacion", "interpretacion"]

variables:
  rotacion: uno_de([0.5, 1.0, 1.5, 2.0, 3.0])

respuesta: verdadero
tipo: vf

enunciado: "Una rotación de activo total de {rotacion} indica que la empresa genera {rotacion} pesos de ventas por cada peso de activo que posee."

explicacion: |
  Verdadero. Este ratio refleja la eficiencia en el uso de los activos para generar ingresos.
```

## Sección: pools-liquidez-amm (22 preguntas)

```
metadata:
  materia: "economia"
  tema: "pools_liquidez_amm"
  nivel: "basico"
  tags: ["defi", "vocabulario"]

enunciado: "¿Qué es un pool de liquidez?"
tipo: mc
opciones_explicitas:
  - "Un fondo compartido de dos tokens, guardado en un contrato inteligente, que sirve de contraparte automática de un swap"
  - "Una cuenta bancaria compartida entre varias personas"
  - "El nombre de un tipo especial de wallet"
respuesta: "Un fondo compartido de dos tokens, guardado en un contrato inteligente, que sirve de contraparte automática de un swap"

explicacion: |
  Es lo que reemplaza al libro de órdenes de un exchange tradicional.
```

```
metadata:
  materia: "economia"
  tema: "pools_liquidez_amm"
  nivel: "basico"
  tags: ["defi", "vocabulario"]

enunciado: "¿Quién arma un pool de liquidez, depositando ambos tokens?"
tipo: mc
opciones_explicitas:
  - "Proveedores de liquidez (LP), a cambio de ganar una comisión de cada swap"
  - "Sólo la empresa dueña del DEX"
  - "El banco central del país donde vive el usuario"
respuesta: "Proveedores de liquidez (LP), a cambio de ganar una comisión de cada swap"

explicacion: |
  Son usuarios comunes que aportan sus propios tokens al pool.
```

```
metadata:
  materia: "economia"
  tema: "pools_liquidez_amm"
  nivel: "basico"
  tags: ["defi", "vocabulario"]

enunciado: "¿Qué es un AMM (creador de mercado automático)?"
tipo: mc
opciones_explicitas:
  - "Una fórmula matemática que fija el precio automáticamente, según las reservas del pool, sin que una persona lo decida"
  - "Una persona que decide manualmente el precio de cada swap"
  - "Otro nombre para un contrato inteligente cualquiera"
respuesta: "Una fórmula matemática que fija el precio automáticamente, según las reservas del pool, sin que una persona lo decida"

explicacion: |
  Reemplaza al \"market maker\" humano de una casa de cambio
  tradicional por una fórmula.
```

```
metadata:
  materia: "economia"
  tema: "pools_liquidez_amm"
  nivel: "intermedio"
  tags: ["defi", "vocabulario"]

enunciado: "¿Qué se mantiene constante en el AMM más usado, según la fórmula del producto constante?"
tipo: mc
opciones_explicitas:
  - "El producto entre las dos reservas del pool (reserva_A × reserva_B)"
  - "La suma entre las dos reservas del pool"
  - "El precio del token, sin importar cuánto se opere"
respuesta: "El producto entre las dos reservas del pool (reserva_A × reserva_B)"

explicacion: |
  Es la fórmula central del tema: x × y = k, con k constante.
```

```
metadata:
  materia: "economia"
  tema: "pools_liquidez_amm"
  nivel: "intermedio"
  tags: ["defi", "calculo"]

variables:
  reserva_a: random(50, 150) * 10
  reserva_b: random(6, 20) * 12

respuesta: reserva_a * reserva_b
tipo: input
tolerancia_abs: 0

enunciado: "Un pool tiene {reserva_a} unidades de Token A y {reserva_b} unidades de Token B. Según la fórmula del producto constante, ¿cuál es el valor de k?"

explicacion: |
  k = reserva_A × reserva_B, el valor que el pool mantiene fijo.
```

```
metadata:
  materia: "economia"
  tema: "pools_liquidez_amm"
  nivel: "intermedio"
  tags: ["defi", "vocabulario"]

enunciado: "Si alguien deposita Token A en el pool para llevarse Token B, ¿qué pasa con las dos reservas del pool?"
tipo: mc
opciones_explicitas:
  - "La reserva de A sube y la reserva de B baja"
  - "Las dos reservas suben por igual"
  - "Las dos reservas quedan exactamente iguales que antes"
respuesta: "La reserva de A sube y la reserva de B baja"

explicacion: |
  El pool entrega B y recibe A: sube lo que entra, baja lo que sale.
```

```
metadata:
  materia: "economia"
  tema: "pools_liquidez_amm"
  nivel: "avanzado"
  tags: ["defi", "calculo"]

variables:
  reserva_a: random(50, 150) * 10
  reserva_b: random(6, 20) * 12
  k: reserva_a * reserva_b
  factor: uno_de([2, 3, 4, 6])
  reserva_a_2: reserva_a * factor
  reserva_b_2_correcto: reserva_b / factor
  error: uno_de([0, 0, 0, 5, -5])
  reserva_b_2_reportado: reserva_b_2_correcto + error

respuesta: (reserva_a_2 * reserva_b_2_reportado == k)
tipo: vf

enunciado: "Un pool arrancó con {reserva_a} de Token A y {reserva_b} de Token B (k = {k}). Después de varios swaps, quedó con {reserva_a_2} de Token A y {reserva_b_2_reportado} de Token B. ¿Es correcto que el pool mantuvo el producto constante?"

explicacion: |
  Se multiplican las reservas nuevas y se compara el resultado contra
  el k original.
```

```
metadata:
  materia: "economia"
  tema: "pools_liquidez_amm"
  nivel: "intermedio"
  tags: ["defi", "vocabulario"]

enunciado: "En un AMM de producto constante, ¿cómo se calcula el precio de un token en términos del otro?"
tipo: mc
opciones_explicitas:
  - "Por la relación entre las dos reservas (cuánto hay de uno por cada unidad del otro)"
  - "Lo fija manualmente el proveedor de liquidez que depositó más"
  - "Siempre es 1 a 1, sin importar las reservas"
respuesta: "Por la relación entre las dos reservas (cuánto hay de uno por cada unidad del otro)"

explicacion: |
  El precio surge de la proporción entre reservas, no de una decisión
  manual.
```

```
metadata:
  materia: "economia"
  tema: "pools_liquidez_amm"
  nivel: "avanzado"
  tags: ["defi", "calculo"]

variables:
  reserva_a: random(2, 20) * 10
  precio: uno_de([2, 3, 4, 5])
  reserva_b: reserva_a * precio

respuesta: reserva_b / reserva_a
tipo: input
tolerancia_abs: 0

enunciado: "Un pool tiene {reserva_a} unidades de Token A y {reserva_b} unidades de Token B. ¿Cuántas unidades de Token B vale, aproximadamente, cada unidad de Token A?"

explicacion: |
  Precio de A en términos de B = reserva_B / reserva_A.
```

```
metadata:
  materia: "economia"
  tema: "pools_liquidez_amm"
  nivel: "intermedio"
  tags: ["defi", "vocabulario"]

enunciado: "¿Qué es el slippage (deslizamiento) en un swap?"
tipo: mc
opciones_explicitas:
  - "La diferencia entre el precio esperado al empezar la operación y el precio real obtenido al terminarla"
  - "La comisión fija que cobra el DEX por cada operación"
  - "El tiempo que tarda en confirmarse un swap"
respuesta: "La diferencia entre el precio esperado al empezar la operación y el precio real obtenido al terminarla"

explicacion: |
  Es consecuencia directa de que el precio se mueve mientras se
  ejecuta la operación.
```

```
metadata:
  materia: "economia"
  tema: "pools_liquidez_amm"
  nivel: "avanzado"
  tags: ["defi", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un swap grande cambia la relación entre las reservas de forma más brusca que uno chico, por eso el precio final que recibe quien opera es peor cuanto más grande es la operación."

explicacion: |
  El precio depende de la proporción entre reservas: moverla mucho
  empeora el precio de la propia operación que la movió.
```

```
metadata:
  materia: "economia"
  tema: "pools_liquidez_amm"
  nivel: "avanzado"
  tags: ["defi", "problema"]

enunciado: "Para hacer un swap grande con el menor slippage posible, ¿qué conviene buscar?"
tipo: mc
opciones_explicitas:
  - "Un pool con reservas grandes (mucha profundidad), donde la misma operación mueve menos la relación entre reservas"
  - "El pool con las reservas más chicas disponibles"
  - "Da exactamente igual el tamaño de las reservas del pool"
respuesta: "Un pool con reservas grandes (mucha profundidad), donde la misma operación mueve menos la relación entre reservas"

explicacion: |
  Un mismo swap mueve proporcionalmente menos un pool grande que uno
  chico.
```

```
metadata:
  materia: "economia"
  tema: "pools_liquidez_amm"
  nivel: "avanzado"
  tags: ["defi", "vocabulario"]

enunciado: "¿Qué es la \"pérdida impermanente\" para un proveedor de liquidez?"
tipo: mc
opciones_explicitas:
  - "Que la combinación de tokens que le queda en el pool valga menos, en conjunto, que si se hubiera quedado con los tokens originales sin depositarlos"
  - "La comisión que cobra el DEX por retirar fondos del pool"
  - "La pérdida garantizada que sufre cualquier proveedor de liquidez, sin excepción"
respuesta: "Que la combinación de tokens que le queda en el pool valga menos, en conjunto, que si se hubiera quedado con los tokens originales sin depositarlos"

explicacion: |
  Ocurre cuando el precio de mercado de los dos tokens diverge por
  fuera del pool.
```

```
metadata:
  materia: "economia"
  tema: "pools_liquidez_amm"
  nivel: "avanzado"
  tags: ["defi", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La pérdida impermanente sólo se vuelve una pérdida real si el proveedor retira sus fondos del pool en ese momento; si los precios vuelven a acercarse, la pérdida se reduce o desaparece."

explicacion: |
  Es justamente lo que explica el nombre \"impermanente\": no está
  fija hasta que se retira.
```

```
metadata:
  materia: "economia"
  tema: "pools_liquidez_amm"
  nivel: "intermedio"
  tags: ["defi", "calculo"]

variables:
  volumen_swap: random(1, 50) * 1000
  fee_pct: uno_de([1, 2, 5])

respuesta: volumen_swap * fee_pct / 100
tipo: input
tolerancia_abs: 0

enunciado: "Un pool cobra una comisión del {fee_pct}% sobre cada swap. Si en un día se operó un volumen total de ${volumen_swap}, ¿cuánto se repartió en comisiones entre los proveedores de liquidez? (comisión simplificada a un número redondo para el cálculo; las reales suelen ser más chicas, del orden de 0.3%)"

explicacion: |
  Comisión = volumen operado × porcentaje de comisión.
```

```
metadata:
  materia: "economia"
  tema: "pools_liquidez_amm"
  nivel: "basico"
  tags: ["defi", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En un AMM, ninguna persona decide manualmente el precio en cada operación: el precio surge automáticamente de la fórmula, según las reservas del pool en ese momento."

explicacion: |
  Es la idea central de \"automático\" en el nombre AMM.
```

```
metadata:
  materia: "economia"
  tema: "pools_liquidez_amm"
  nivel: "intermedio"
  tags: ["defi", "vocabulario"]

enunciado: "En una casa de cambio tradicional, ¿quién decide a qué precio comprar y vender?"
tipo: mc
opciones_explicitas:
  - "Una persona (el \"market maker\")"
  - "Una fórmula matemática automática"
  - "Nadie: el precio siempre es fijo"
respuesta: "Una persona (el \"market maker\")"

explicacion: |
  Es justo lo que el AMM reemplaza: la decisión humana por una
  fórmula.
```

```
metadata:
  materia: "economia"
  tema: "pools_liquidez_amm"
  nivel: "avanzado"
  tags: ["defi", "orden"]

tipo: ordenar
enunciado: "Ordená estos pasos del ciclo de un proveedor de liquidez (LP) en un pool."
opciones_explicitas:
  - "El LP retira su parte del pool, incluyendo las comisiones ganadas"
  - "El LP deposita una cantidad de ambos tokens en el pool"
  - "El pool acumula comisiones de cada swap"
  - "Otros usuarios hacen swaps usando ese pool como contraparte"
respuesta_orden: ["El LP deposita una cantidad de ambos tokens en el pool", "Otros usuarios hacen swaps usando ese pool como contraparte", "El pool acumula comisiones de cada swap", "El LP retira su parte del pool, incluyendo las comisiones ganadas"]

explicacion: |
  Cada paso depende del anterior: sin depósito no hay pool, sin swaps
  no hay comisión que acumular.
```

```
metadata:
  materia: "economia"
  tema: "pools_liquidez_amm"
  nivel: "avanzado"
  tags: ["defi", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Cuando una app de DeFi muestra un \"APY estimado\" por dar liquidez, ese número suele reflejar las comisiones esperadas, sin incluir necesariamente el riesgo de pérdida impermanente."

explicacion: |
  Es una distinción importante: la comisión ganada y el riesgo del
  pool son cosas separadas.
```

```
metadata:
  materia: "economia"
  tema: "pools_liquidez_amm"
  nivel: "basico"
  tags: ["defi"]

tipo: completar
enunciado: "Completá la fórmula del AMM de producto constante: reserva_A × ___ (la otra reserva) = k."
respuestas_validas:
  - "reserva_b"
  - "reserva_B"

explicacion: |
  Es la fórmula central del tema.
```

```
metadata:
  materia: "economia"
  tema: "pools_liquidez_amm"
  nivel: "intermedio"
  tags: ["defi", "vocabulario"]

enunciado: "Cuando alguien hace un swap contra un pool de liquidez, ¿contra quién está intercambiando en términos prácticos?"
tipo: mc
opciones_explicitas:
  - "Contra el fondo compartido del pool en su conjunto, no contra una persona específica"
  - "Contra el proveedor de liquidez que depositó más recientemente"
  - "Contra la empresa dueña del DEX"
respuesta: "Contra el fondo compartido del pool en su conjunto, no contra una persona específica"

explicacion: |
  Es la diferencia con el libro de órdenes tradicional: no hay una
  contraparte individual, sino el pool como conjunto.
```

```
metadata:
  materia: "economia"
  tema: "pools_liquidez_amm"
  nivel: "basico"
  tags: ["defi", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un pool de liquidez guarda dos tokens aportados por proveedores de liquidez, y un AMM fija el precio automáticamente manteniendo constante el producto entre esas dos reservas."

explicacion: |
  Es la idea central de todo el tema.
```

## Sección: precio-final (24 preguntas)

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "basico"
  tags: ["precio_final", "vocabulario"]

enunciado: "¿Qué compone el precio final que paga el consumidor?"
tipo: mc
opciones_explicitas:
  - "Costo + margen de cada eslabón + IVA + otros impuestos y tasas (como Ingresos Brutos)"
  - "Sólo el costo de producción"
  - "Sólo el IVA"
respuesta: "Costo + margen de cada eslabón + IVA + otros impuestos y tasas (como Ingresos Brutos)"

explicacion: |
  El IVA (ver `../iva/teoria.md`) es sólo una de las capas del precio
  final.
```

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "basico"
  tags: ["precio_final", "vocabulario"]

enunciado: "¿Qué es el impuesto a los Ingresos Brutos?"
tipo: mc
opciones_explicitas:
  - "Un impuesto provincial que grava los ingresos de cualquier actividad económica"
  - "Un impuesto nacional idéntico al IVA"
  - "Un impuesto que sólo pagan las importaciones"
respuesta: "Un impuesto provincial que grava los ingresos de cualquier actividad económica"

explicacion: |
  A diferencia del IVA, es provincial: cada provincia fija su propia
  alícuota.
```

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "basico"
  tags: ["precio_final", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Ingresos Brutos es un impuesto provincial, a diferencia del IVA, que es nacional."

explicacion: |
  Es la diferencia clave entre los dos impuestos.
```

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "intermedio"
  tags: ["precio_final", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Cada provincia argentina fija su propia alícuota de Ingresos Brutos, que puede llegar hasta aproximadamente el 9%."

explicacion: |
  Por eso el mismo tipo de producto puede pagar distinto Ingresos Brutos
  según en qué provincia se venda.
```

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "intermedio"
  tags: ["precio_final", "calculo"]

variables:
  precio: random(10, 50) * 1000

respuesta: precio * 0.085
tipo: input
tolerancia_abs: 5

enunciado: "Usando la estimación de que Ingresos Brutos representa, en promedio, un 8,5% del precio final, ¿cuántos pesos de un precio de ${precio} corresponden aproximadamente a este impuesto?"

explicacion: |
  Es una aproximación educativa (la cifra real varía por provincia y por
  producto), no una alícuota fija y exacta.
```

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "intermedio"
  tags: ["precio_final", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Según estimaciones, Ingresos Brutos representa entre el 8% y el 9% del precio final que paga el consumidor, en promedio."

explicacion: |
  Es un \"segundo impuesto\" bastante grande, aunque menos visible que el
  IVA porque no aparece desglosado en el ticket como el IVA.
```

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "intermedio"
  tags: ["precio_final", "vocabulario"]

enunciado: "¿Qué es el \"efecto cascada\" de Ingresos Brutos?"
tipo: mc
opciones_explicitas:
  - "Se cobra sobre el ingreso total de cada eslabón de la cadena, varias veces, sin descontar lo ya pagado antes"
  - "El impuesto baja automáticamente con el tiempo"
  - "Sólo se cobra una vez, al final de toda la cadena"
respuesta: "Se cobra sobre el ingreso total de cada eslabón de la cadena, varias veces, sin descontar lo ya pagado antes"

explicacion: |
  A diferencia del IVA (que sólo grava el valor agregado en cada etapa),
  Ingresos Brutos se acumula etapa tras etapa.
```

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "intermedio"
  tags: ["precio_final", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un mismo producto puede pagar Ingresos Brutos varias veces a lo largo de la cadena productiva: una vez por cada empresa que participó (fabricante, distribuidor, comercio)."

explicacion: |
  Es la característica que lo hace \"distorsivo\": no se descuenta lo
  pagado en etapas anteriores.
```

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "intermedio"
  tags: ["precio_final", "iva", "vocabulario"]

enunciado: "¿Cuál es la diferencia clave entre el IVA e Ingresos Brutos?"
tipo: mc
opciones_explicitas:
  - "El IVA es nacional y grava sólo el valor agregado; Ingresos Brutos es provincial y grava el ingreso total en cada etapa (cascada)"
  - "Son exactamente el mismo impuesto con otro nombre"
  - "El IVA es provincial e Ingresos Brutos es nacional"
respuesta: "El IVA es nacional y grava sólo el valor agregado; Ingresos Brutos es provincial y grava el ingreso total en cada etapa (cascada)"

explicacion: |
  Son dos impuestos bien distintos, aunque los dos terminan formando
  parte del mismo precio final.
```

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "basico"
  tags: ["precio_final", "iva", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El IVA es idéntico en todo el país; Ingresos Brutos puede variar según la provincia donde se venda el producto."

explicacion: |
  Es la razón central de por qué el precio final puede diferir entre
  provincias, aunque el IVA sea el mismo en todos lados.
```

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "avanzado"
  tags: ["precio_final", "problema"]

variables:
  costo_mas_margen: random(5, 30) * 1000

respuesta: costo_mas_margen * 1.21 * 1.085
tipo: input
tolerancia_abs: 5

enunciado: "Un producto tiene un costo más margen de ${costo_mas_margen}, antes de impuestos. Sumando 21% de IVA y, en cascada, un 8,5% aproximado de Ingresos Brutos, ¿cuál es el precio final aproximado?"

pasos:
  - "{costo_mas_margen} × 1,21 × 1,085 = {costo_mas_margen * 1.21 * 1.085}"

explicacion: |
  Los dos impuestos se aplican en cadena (como descuentos o recargos
  sucesivos, ver `../../vida-cotidiana/recargos-sucesivos/`), aunque en
  la práctica real el orden y la base exacta pueden variar según el caso.
```

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "intermedio"
  tags: ["precio_final", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un mismo producto, del mismo fabricante, puede costar distinto en dos provincias distintas."

explicacion: |
  Ingresos Brutos (y otras cargas locales) puede diferir de una provincia
  a otra, aunque el IVA sea idéntico.
```

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "intermedio"
  tags: ["precio_final", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La diferencia de precio de un mismo producto entre dos provincias NO se explica por el IVA (que es igual en todo el país)."

explicacion: |
  Hay que mirar los impuestos provinciales (como Ingresos Brutos) para
  explicar esa diferencia, no el IVA.
```

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "intermedio"
  tags: ["precio_final"]

enunciado: "¿Qué explica mejor que un producto cueste distinto en dos provincias?"
tipo: mc
opciones_explicitas:
  - "Las distintas alícuotas de Ingresos Brutos (y otras cargas locales) de cada provincia"
  - "El IVA, que cambia según la provincia"
  - "El color del envase del producto"
respuesta: "Las distintas alícuotas de Ingresos Brutos (y otras cargas locales) de cada provincia"

explicacion: |
  El IVA es nacional y no cambia por provincia; Ingresos Brutos sí.
```

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "avanzado"
  tags: ["precio_final", "verificacion"]

variables:
  costo_mas_margen: random(5, 30) * 1000
  correcto: costo_mas_margen * 1.21 * 1.085
  error: uno_de([0, 0, 0, 500, -500])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 10)
tipo: vf

enunciado: "¿Está bien calculado esto? Costo+margen ${costo_mas_margen}, con IVA (21%) e Ingresos Brutos (8,5% aprox.), el precio final da ${mostrado}."

explicacion: |
  Se vuelve a aplicar la cadena de multiplicaciones y se compara.
```

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "avanzado"
  tags: ["precio_final"]

variables:
  costo_mas_margen: random(5, 30) * 1000
  precio_final: costo_mas_margen * 1.21 * 1.085

tipo: completar
enunciado: "Completá: ___ (costo+margen) × 1,21 (IVA) × 1,085 (Ingresos Brutos aprox.) = ${precio_final}."
respuestas_validas:
  - costo_mas_margen

explicacion: |
  Se despeja dividiendo el precio final por 1,21 y por 1,085.
```

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "intermedio"
  tags: ["precio_final", "comparacion"]

respuesta: verdadero
tipo: vf

enunciado: "En el precio final, el IVA (21%) representa un porcentaje mayor que Ingresos Brutos (8-9% aproximado en promedio)."

explicacion: |
  Aunque Ingresos Brutos es significativo, sigue siendo menor que la
  alícuota general del IVA.
```

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "avanzado"
  tags: ["precio_final", "problema"]

variables:
  ingreso_fabricante: random(10, 30) * 1000
  ingreso_distribuidor: ingreso_fabricante + random(5, 15) * 1000
  ingreso_comercio: ingreso_distribuidor + random(5, 15) * 1000
  alicuota: 0.03

respuesta: (ingreso_fabricante + ingreso_distribuidor + ingreso_comercio) * alicuota
tipo: input
tolerancia_abs: 1

enunciado: "En una cadena simplificada de 3 etapas, cada una paga Ingresos Brutos (alícuota del 3%) sobre su propio ingreso: fabricante ${ingreso_fabricante}, distribuidor ${ingreso_distribuidor}, comercio ${ingreso_comercio}. ¿Cuánto se pagó de Ingresos Brutos en TOTAL entre las tres etapas?"

pasos:
  - "Se suma el impuesto de cada etapa por separado: ({ingreso_fabricante}+{ingreso_distribuidor}+{ingreso_comercio}) × 3% = {(ingreso_fabricante + ingreso_distribuidor + ingreso_comercio) * alicuota}"

explicacion: |
  Es el efecto cascada en acción: cada etapa paga sobre su propio
  ingreso, sin descontar lo que ya pagaron las etapas anteriores.
```

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "intermedio"
  tags: ["precio_final", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Ingresos Brutos representa, aproximadamente, el 80% de la recaudación tributaria de las provincias argentinas."

explicacion: |
  Es, por lejos, el impuesto provincial más importante en términos de
  recaudación.
```

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "basico"
  tags: ["precio_final", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Además de los impuestos, el precio final incluye el margen de ganancia de cada eslabón de la cadena (fabricante, distribuidor, comercio)."

explicacion: |
  No todo el precio final es impuesto: también hay costo y ganancia de
  cada parte involucrada.
```

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "avanzado"
  tags: ["precio_final", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Especialistas consideran a Ingresos Brutos un impuesto \"distorsivo\", porque grava en cascada a toda la cadena productiva, encareciendo el precio final más de lo que su alícuota nominal sugeriría."

explicacion: |
  El efecto cascada hace que el impuesto \"pese\" más de lo que parece a
  simple vista, comparado con un impuesto que sólo grava el valor
  agregado (como el IVA).
```

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "avanzado"
  tags: ["precio_final", "problema"]

variables:
  costo_mas_margen: random(10, 30) * 1000
  ib_provincia_a: 0.03
  ib_provincia_b: 0.05

respuesta: (costo_mas_margen * 1.21 * (1 + ib_provincia_b)) - (costo_mas_margen * 1.21 * (1 + ib_provincia_a))
tipo: input
tolerancia_abs: 5

enunciado: "Un producto con costo+margen de ${costo_mas_margen} (más 21% de IVA, igual en las dos provincias) paga {ib_provincia_a * 100}% de Ingresos Brutos en la provincia A, y {ib_provincia_b * 100}% en la provincia B. ¿Cuánto más caro sale en la provincia B?"

explicacion: |
  La diferencia depende únicamente de la distinta alícuota de Ingresos
  Brutos, ya que el IVA es igual en las dos.
```

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "intermedio"
  tags: ["precio_final", "iva", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Conocer sólo el 21% de IVA no alcanza para saber cuánto de un precio final es impuesto: falta sumar Ingresos Brutos y otras cargas."

explicacion: |
  El IVA es la parte más visible (a veces se desglosa en el ticket), pero
  no es la única carga tributaria del precio.
```

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "basico"
  tags: ["precio_final", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El precio final combina costo, margen, IVA (nacional, parejo) e Ingresos Brutos y otras cargas locales (que sí varían según la provincia)."

explicacion: |
  Es la idea central de todo el tema: el IVA es sólo una parte de la
  historia completa del precio final.
```

## Sección: presupuesto-administrativo (25 preguntas)

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "basico"
  tags: ["definicion", "conceptos_clave"]

respuesta: "estimación anticipada de ingresos y gastos"
tipo: completar
respuestas_validas:
  - "estimación anticipada de ingresos y gastos"
  - "estimación de ingresos y gastos"

enunciado: "El presupuesto se define como una ___ para un período determinado."

explicacion: |
  El presupuesto es la herramienta de planificación que permite proyectar los recursos que entrarán (ingresos) y los que saldrán (gastos) de una organización.
```

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "basico"
  tags: ["componentes", "ingresos", "gastos"]

opciones_explicitas: ["Ingresos y Gastos", "Activos y Pasivos", "Oferta y Demanda"]
respuesta: "Ingresos y Gastos"
tipo: mc

enunciado: "Un presupuesto se compone fundamentalmente de dos tipos de flujos: los ___."

explicacion: |
  Los ingresos representan las entradas de dinero, mientras que los gastos representan las salidas de recursos necesarias para la operación.
```

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "basico"
  tags: ["naturaleza", "planificacion"]

respuesta: verdadero
tipo: vf

enunciado: "El presupuesto tiene un carácter preventivo, ya que se elabora antes de que ocurran los hechos económicos."

explicacion: |
  Correcto. Al ser una herramienta de planificación, su objetivo es anticiparse a los eventos para tomar decisiones informadas.
```

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "intermedio"
  tags: ["proceso", "ciclo_presupuestario"]

opciones_explicitas: ["Elaboración", "Ejecución", "Control"]
respuesta_orden: ["Elaboración", "Ejecución", "Control"]
tipo: ordenar

enunciado: "Ordene cronológicamente las etapas principales del ciclo presupuestario:"

explicacion: |
  Primero se planifica (elaboración), luego se pone en marcha (ejecución) y finalmente se compara lo real con lo proyectado (control).
```

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "intermedio"
  tags: ["desviaciones", "control"]

respuesta: "Desfavorable"
tipo: mc
opciones_explicitas: ["Favorable", "Desfavorable"]

enunciado: "Si los ingresos reales son menores a los presupuestados, la desviación se considera: ___"

pasos:
  - "Comparar el valor real obtenido con el valor estimado."
  - "Determinar si la diferencia impacta positivamente o negativamente en el saldo."

explicacion: |
  Una desviación es favorable cuando el resultado real mejora la posición financiera respecto al plan, y desfavorable cuando la empeora.
```

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "basico"
  tags: ["conceptos", "definiciones"]

respuesta: "estimación anticipada de ingresos y gastos"
tipo: completar
respuestas_validas:
  - "estimación anticipada de ingresos y gastos"

enunciado: "El presupuesto se define como una ___ para un período determinado."

explicacion: |
  El presupuesto es la herramienta de planificación que permite proyectar la situación financiera de una organización mediante la cuantificación de sus ingresos y gastos esperados.
```

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "intermedio"
  tags: ["calculo", "saldo"]

variables:
  datos: [["Ingresos: 5000, Gastos: 4200", "800"], ["Ingresos: 3000, Gastos: 3500", "-500"], ["Ingresos: 1000, Gastos: 1000", "0"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["800", "-500", "0", "1000"]

enunciado: "Si una empresa tiene un escenario de {datos[idx][0]}, ¿cuál es el saldo presupuestario resultante?"

explicacion: |
  El saldo se calcula restando los gastos a los ingresos: {datos[idx][0]}. El resultado es {datos[idx][1]}.
```

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "basico"
  tags: ["teoria"]

respuesta: falso

tipo: vf

enunciado: "Un presupuesto es un documento de carácter histórico que solo registra los movimientos financieros que ya han ocurrido."

explicacion: |
  Falso. El presupuesto es una herramienta de planificación hacia el futuro (proyectiva), no un registro de hechos pasados (contabilidad histórica).
```

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "intermedio"
  tags: ["proceso", "orden"]

respuesta_orden: ["Definición de objetivos", "Estimación de ingresos", "Asignación de gastos", "Control y seguimiento"]
tipo: ordenar
opciones_explicitas: ["Definición de objetivos", "Estimación de ingresos", "Asignación de gastos", "Control y seguimiento"]

enunciado: "Ordene los pasos lógicos para la gestión de un presupuesto administrativo:"

explicacion: |
  Primero se definen las metas, luego se proyecta lo que entrará de dinero, se distribuye para cubrir las necesidades y finalmente se controla que se cumpla lo planeado.
```

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "avanzado"
  tags: ["calculo", "déficit"]

variables:
  escenario: [["Ingresos: 12000, Gastos: 15000", "3000"], ["Ingresos: 8000, Gastos: 8500", "500"]]
  idx: uno_de([0, 1])

respuesta: escenario[idx][1]
tipo: completar
tolerancia_abs: 0

enunciado: "En el escenario de {escenario[idx][0]}, ¿cuál es el monto del déficit (valor absoluto de la diferencia negativa)?"

pasos:
  - "Identificar ingresos y gastos según el escenario"
  - "Calcular la diferencia: Ingresos - Gastos"
  - "Obtener el valor absoluto del resultado"

explicacion: |
  El déficit ocurre cuando los gastos superan a los ingresos. En este caso, el déficit es de {escenario[idx][1]}.
```

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "basico"
  tags: ["conceptos", "definicion"]

respuesta: "estimación anticipada de ingresos y gastos"
tipo: completar
respuestas_validas:
  - "estimación anticipada de ingresos y gastos"
  - "estimación de ingresos y gastos"

enunciado: "El presupuesto se define como una ___ realizada para un período determinado."

explicacion: |
  El presupuesto es una herramienta de planificación que proyecta los recursos que entrarán (ingresos) y los que saldrán (gastos) de una entidad.
```

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "basico"
  tags: ["diferencia_conceptos"]

variables:
  es_proyectivo: verdadero

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de la contabilidad, que registra hechos ya ocurridos, el presupuesto es una herramienta de carácter proyectivo."

explicacion: |
  Correcto. La contabilidad es histórica (mira hacia atrás), mientras que el presupuesto es una herramienta de planificación (mira hacia adelante).
```

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "intermedio"
  tags: ["gestion", "errores"]

tipo: mc
opciones_explicitas: ["El presupuesto es una norma inamovible que no admite cambios ante contingencias", "El presupuesto debe ser flexible para adaptarse a cambios en el entorno", "Un presupuesto rígido es siempre el ideal para una empresa"]

respuesta: "El presupuesto debe ser flexible para adaptarse a cambios en el entorno"

enunciado: "Respecto a la flexibilidad presupuestaria, ¿cuál de las siguientes afirmaciones es correcta?"

explicacion: |
  Un error común es creer que el presupuesto es una "camisa de fuerza". Para que sea útil, debe permitir ajustes (reprogramaciones) ante cambios significativos en el mercado o la economía.
```

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "basico"
  tags: ["componentes"]

respuesta_orden: ["Ingresos", "Gastos", "Resultado"]
tipo: ordenar

opciones_explicitas: ["Ingresos", "Gastos", "Resultado"]

enunciado: "Ordene los elementos fundamentales que conforman la estructura básica de un presupuesto para determinar el saldo final:"

explicacion: |
  Para determinar la situación financiera proyectada, se deben listar primero los ingresos, luego los gastos y finalmente el resultado (superávit o déficit).
```

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "avanzado"
  tags: ["confusiones_comunes"]

respuesta: verdadero
tipo: vf
enunciado: "Es posible que una organización presente un presupuesto de ingresos positivo pero experimente problemas de liquidez, si esas ventas presupuestadas son a crédito y el dinero aún no ingresó a caja."

explicacion: |
  Este es un error clásico. El presupuesto puede mostrar ingresos por ventas (devengado), pero si esas ventas son a crédito, el dinero no está disponible inmediatamente en caja (flujo de efectivo).
```

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "basico"
  tags: ["conceptos_clave", "flujo_de_caja"]

respuesta: "flujo de caja"
tipo: "completar"
respuestas_validas:
  - "flujo de caja"
  - "cash flow"

enunciado: "Mientras que el presupuesto es una planificación de ingresos y gastos proyectados, el ___ es el registro de las entradas y salidas reales de efectivo en un periodo determinado."

explicacion: |
  El presupuesto es una herramienta de planificación (estimación), mientras que el flujo de caja (cash flow) se enfoca en la liquidez real y el movimiento efectivo de dinero.
```

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "basico"
  tags: ["contabilidad", "planificacion"]

respuesta: verdadero
tipo: "vf"

enunciado: "El presupuesto se distingue de la contabilidad financiera principalmente porque el presupuesto tiene un carácter prospectivo (hacia el futuro), mientras que la contabilidad es histórica (registra lo ya ocurrido)."

explicacion: |
  Correcto. El presupuesto mira hacia adelante para la toma de decisiones, la contabilidad mira hacia atrás para rendir cuentas.
```

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "intermedio"
  tags: ["control_presupuestal", "desviaciones"]

respuesta: "desfavorable"
tipo: "mc"
opciones_explicitas: ["favorable", "desfavorable"]

enunciado: "Si en el control presupuestario se detecta que un gasto real es mayor al gasto presupuestado, la desviación se considera: ___"

explicacion: |
  Un gasto mayor al previsto consume más recursos de los planeados, por lo tanto, es una desviación desfavorable.
```

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "intermedio"
  tags: ["proceso", "ciclo_presupuestal"]

respuesta_orden: ["elaboración", "ejecución", "control", "evaluación"]
tipo: "ordenar"
opciones_explicitas: ["elaboración", "ejecución", "control", "evaluación"]

enunciado: "Ordene cronológicamente las etapas del ciclo presupuestario de una organización:"

explicacion: |
  El ciclo comienza con la planificación (elaboración), sigue con la puesta en marcha (ejecución), se monitorea el proceso (control) y finalmente se analizan los resultados (evaluación).
```

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "avanzado"
  tags: ["base_cero", "incremental"]

variables:
  idx: uno_de([0, 1])
  # 0: Base Cero, 1: Incremental
  # datos: [ [nombre, caracteristica], [nombre, caracteristica] ]
  datos: [["Base Cero", "requiere justificar cada gasto desde cero"], ["Incremental", "se basa en los saldos del periodo anterior"]]

respuesta: datos[idx][1]
tipo: "mc"
opciones_explicitas: ["requiere justificar cada gasto desde cero", "se basa en los saldos del periodo anterior", "no considera la inflación", "es de aplicación automática"]

enunciado: "Si una empresa decide aplicar el método de presupuesto de tipo {datos[idx][0]}, su característica principal es que: ___"

explicacion: |
  El presupuesto incremental simplemente ajusta los valores del año pasado, mientras que el Base Cero obliga a justificar cada partida como si fuera la primera vez.
```

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "basico"
  tags: ["presupuesto", "ingresos", "gastos"]

variables:
  escenarios: [["Ventas: 5000, Gastos: 3200", "Superávit"], ["Ventas: 4500, Gastos: 4600", "Déficit"], ["Ventas: 3000, Gastos: 2500", "Superávit"]]
  caso: uno_de(escenarios)
  enunciado_caso: caso[0]
  resultado_correcto: caso[1]

tipo: mc
respuesta: resultado_correcto
opciones_explicitas: ["Superávit", "Déficit", "Equilibrio"]

enunciado: "Si una organización proyecta un escenario donde {enunciado_caso}, el resultado presupuestario es un ___."

explicacion: |
  El resultado se obtiene restando los gastos de los ingresos. Si el resultado es positivo, hay superávit; si es negativo, hay déficit.
```

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "basico"
  tags: ["definiciones", "teoria"]

tipo: vf
respuesta: verdadero

enunciado: "El presupuesto es una herramienta de planificación que permite estimar los recursos económicos necesarios para alcanzar objetivos en un periodo determinado."

explicacion: |
  Efectivamente, el presupuesto actúa como una hoja de ruta financiera para la gestión administrativa.
```

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "intermedio"
  tags: ["ingresos", "egresos", "clasificacion"]

variables:
  item: uno_de([["Alquiler de oficina", "Gasto"], ["Venta de servicios", "Ingreso"], ["Pago de salarios", "Gasto"]])

tipo: completar
respuestas_validas:
  - "Ingreso"
  - "Gasto"
respuesta: item[1]

enunciado: "El concepto '{item[0]}' se clasifica contablemente como un ___."

explicacion: |
  Los ingresos representan entradas de recursos, mientras que los gastos representan salidas o consumos de recursos.
```

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "intermedio"
  tags: ["proceso", "etapas"]

tipo: ordenar
opciones_explicitas: ["Planificación", "Ejecución", "Control y Evaluación"]
respuesta_orden: ["Planificación", "Ejecución", "Control y Evaluación"]

enunciado: "Ordene las etapas lógicas del proceso presupuestario en una organización:"

explicacion: |
  Primero se planifica (se estima), luego se ejecuta (se gasta/ingresa) y finalmente se controla (se compara lo real vs lo presupuestado).
```

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "avanzado"
  tags: ["desvio", "calculo", "analisis"]

variables:
  idx: uno_de([0, 1])
  presupuestados: [1000, 500]
  reales: [1200, 450]
  desvios_texto: ["200", "-50"]

respuesta: desvios_texto[idx]
tipo: completar
tolerancia_abs: 0

enunciado: "Si el presupuesto para un proyecto era de {presupuestados[idx]} y lo ejecutado fue {reales[idx]}, el desvío (real menos presupuestado) es de ___."

pasos:
  - "Identificar el valor presupuestado."
  - "Identificar el valor real ejecutado."
  - "Calcular la diferencia absoluta entre ambos valores."

explicacion: |
  El desvío mide la diferencia entre lo que se planeó y lo que realmente ocurrió, permitiendo ajustar la gestión.
```

## Sección: oferta-y-demanda (22 preguntas)

```
metadata:
  materia: "economia"
  tema: "oferta_y_demanda"
  nivel: "basico"
  tags: ["mercado", "vocabulario"]

enunciado: "Según la ley de la demanda, ¿qué pasa con la cantidad demandada cuando sube el precio de un bien?"
tipo: mc
opciones_explicitas:
  - "Baja"
  - "Sube"
  - "No cambia nunca"
respuesta: "Baja"

explicacion: |
  A mayor precio, menos gente está dispuesta a comprar esa cantidad.
```

```
metadata:
  materia: "economia"
  tema: "oferta_y_demanda"
  nivel: "basico"
  tags: ["mercado", "vocabulario"]

enunciado: "Según la ley de la oferta, ¿qué pasa con la cantidad ofrecida cuando sube el precio de un bien?"
tipo: mc
opciones_explicitas:
  - "Sube"
  - "Baja"
  - "No cambia nunca"
respuesta: "Sube"

explicacion: |
  A mayor precio, a los vendedores les conviene más producir y
  vender.
```

```
metadata:
  materia: "economia"
  tema: "oferta_y_demanda"
  nivel: "basico"
  tags: ["mercado", "vocabulario"]

enunciado: "¿Qué es el precio de equilibrio?"
tipo: mc
opciones_explicitas:
  - "El precio donde la cantidad demandada es igual a la cantidad ofrecida"
  - "El precio más alto que alguien pagaría por un bien"
  - "El precio fijado por el gobierno para todos los bienes"
respuesta: "El precio donde la cantidad demandada es igual a la cantidad ofrecida"

explicacion: |
  Es el punto donde las dos curvas (oferta y demanda) se cruzan.
```

```
metadata:
  materia: "economia"
  tema: "oferta_y_demanda"
  nivel: "basico"
  tags: ["mercado", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La ley de la demanda dice que, en general, cuando el precio de un bien sube, la cantidad demandada baja."

explicacion: |
  Es la relación inversa entre precio y cantidad demandada.
```

```
metadata:
  materia: "economia"
  tema: "oferta_y_demanda"
  nivel: "basico"
  tags: ["mercado", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La ley de la oferta dice que, en general, cuando el precio de un bien sube, la cantidad ofrecida también sube."

explicacion: |
  Es la relación directa entre precio y cantidad ofrecida.
```

```
metadata:
  materia: "economia"
  tema: "oferta_y_demanda"
  nivel: "intermedio"
  tags: ["mercado", "vocabulario"]

enunciado: "Si el precio de un bien está POR ENCIMA de su precio de equilibrio, ¿qué ocurre?"
tipo: mc
opciones_explicitas:
  - "Exceso de oferta: sobra mercadería sin vender"
  - "Exceso de demanda: falta mercadería"
  - "El mercado se vacía exactamente"
respuesta: "Exceso de oferta: sobra mercadería sin vender"

explicacion: |
  A ese precio los vendedores quieren ofrecer más de lo que los
  compradores quieren llevarse.
```

```
metadata:
  materia: "economia"
  tema: "oferta_y_demanda"
  nivel: "intermedio"
  tags: ["mercado", "vocabulario"]

enunciado: "Si el precio de un bien está POR DEBAJO de su precio de equilibrio, ¿qué ocurre?"
tipo: mc
opciones_explicitas:
  - "Exceso de demanda: falta mercadería"
  - "Exceso de oferta: sobra mercadería"
  - "El mercado se vacía exactamente"
respuesta: "Exceso de demanda: falta mercadería"

explicacion: |
  A ese precio los compradores quieren llevarse más de lo que los
  vendedores quieren ofrecer.
```

```
metadata:
  materia: "economia"
  tema: "oferta_y_demanda"
  nivel: "intermedio"
  tags: ["mercado", "problema"]

enunciado: "Una tienda de ropa liquida la colección de invierno porque quedó mucho stock sin vender. ¿Qué situación describe mejor esto?"
tipo: mc
opciones_explicitas:
  - "Exceso de oferta al precio original"
  - "Exceso de demanda al precio original"
  - "El precio original ya era el de equilibrio"
respuesta: "Exceso de oferta al precio original"

explicacion: |
  Si sobró stock sin vender, es porque a ese precio se ofrecía más de
  lo que se demandaba.
```

```
metadata:
  materia: "economia"
  tema: "oferta_y_demanda"
  nivel: "intermedio"
  tags: ["mercado", "problema"]

enunciado: "Las entradas de un recital, a precio fijo, se agotan en minutos y queda mucha gente sin poder comprar. ¿Qué situación describe mejor esto?"
tipo: mc
opciones_explicitas:
  - "Exceso de demanda al precio fijado"
  - "Exceso de oferta al precio fijado"
  - "El precio fijado ya era el de equilibrio"
respuesta: "Exceso de demanda al precio fijado"

explicacion: |
  Si mucha gente se queda sin comprar, es porque a ese precio se
  demanda más de lo que se ofrece.
```

```
metadata:
  materia: "economia"
  tema: "oferta_y_demanda"
  nivel: "avanzado"
  tags: ["mercado", "vocabulario"]

enunciado: "Si SÓLO cambia el precio de un bien (nada más), y con eso cambia la cantidad demandada, ¿cómo se describe ese cambio?"
tipo: mc
opciones_explicitas:
  - "Un movimiento a lo largo de la misma curva de demanda"
  - "Un desplazamiento de toda la curva de demanda"
  - "Ninguno de los dos: no hay cambio real"
respuesta: "Un movimiento a lo largo de la misma curva de demanda"

explicacion: |
  La curva no se mueve: sólo cambia el punto sobre ella, siguiendo la
  misma ley.
```

```
metadata:
  materia: "economia"
  tema: "oferta_y_demanda"
  nivel: "avanzado"
  tags: ["mercado", "vocabulario"]

enunciado: "Una sequía reduce la cosecha disponible de un cultivo, y eso mueve el propio precio de equilibrio hacia arriba, incluso antes de que cambie ningún otro precio. ¿Cómo se describe este efecto?"
tipo: mc
opciones_explicitas:
  - "Un desplazamiento de la curva de oferta"
  - "Un movimiento a lo largo de la curva de oferta"
  - "No tiene relación con oferta y demanda"
respuesta: "Un desplazamiento de la curva de oferta"

explicacion: |
  Cambió algo distinto del precio (la cantidad disponible para
  cosechar): eso desplaza toda la curva, no sólo mueve un punto sobre
  ella.
```

```
metadata:
  materia: "economia"
  tema: "oferta_y_demanda"
  nivel: "avanzado"
  tags: ["mercado", "calculo"]

variables:
  precio_eq: random(10, 40)
  cantidad_eq: random(100, 400)
  pendiente_demanda: random(2, 8)
  ordenada_demanda: cantidad_eq + pendiente_demanda * precio_eq
  precio_prueba: precio_eq - random(1, 5)

respuesta: ordenada_demanda - pendiente_demanda * precio_prueba
tipo: input
tolerancia_abs: 0

enunciado: "La cantidad demandada de un bien sigue esta fórmula: Qd = {ordenada_demanda} - {pendiente_demanda} × Precio. Si el precio es ${precio_prueba}, ¿cuál es la cantidad demandada?"

explicacion: |
  Se reemplaza el precio en la fórmula y se calcula Qd directo.
```

```
metadata:
  materia: "economia"
  tema: "oferta_y_demanda"
  nivel: "avanzado"
  tags: ["mercado", "calculo"]

variables:
  precio_eq: random(10, 40)
  cantidad_eq: random(100, 400)
  pendiente_oferta: random(2, 8)
  ordenada_oferta: cantidad_eq - pendiente_oferta * precio_eq
  precio_prueba: precio_eq + random(1, 5)

respuesta: ordenada_oferta + pendiente_oferta * precio_prueba
tipo: input
tolerancia_abs: 0

enunciado: "La cantidad ofrecida de un bien sigue esta fórmula: Qs = {ordenada_oferta} + {pendiente_oferta} × Precio. Si el precio es ${precio_prueba}, ¿cuál es la cantidad ofrecida?"

explicacion: |
  Se reemplaza el precio en la fórmula y se calcula Qs directo.
```

```
metadata:
  materia: "economia"
  tema: "oferta_y_demanda"
  nivel: "avanzado"
  tags: ["mercado", "calculo"]

variables:
  precio_eq: random(10, 40)
  cantidad_eq: random(100, 400)
  pendiente_demanda: random(2, 8)
  pendiente_oferta: random(2, 8)
  ordenada_demanda: cantidad_eq + pendiente_demanda * precio_eq
  ordenada_oferta: cantidad_eq - pendiente_oferta * precio_eq
  qd: ordenada_demanda - pendiente_demanda * precio_eq
  qs: ordenada_oferta + pendiente_oferta * precio_eq

respuesta: (qd == qs)
tipo: vf

enunciado: "Con Qd = {ordenada_demanda} - {pendiente_demanda} × Precio y Qs = {ordenada_oferta} + {pendiente_oferta} × Precio, al precio ${precio_eq}: ¿es correcto decir que la cantidad demandada es igual a la ofrecida (o sea, que ese es el precio de equilibrio)?"

explicacion: |
  Se evalúan las dos fórmulas al mismo precio y se comparan los
  resultados.
```

```
metadata:
  materia: "economia"
  tema: "oferta_y_demanda"
  nivel: "intermedio"
  tags: ["mercado", "calculo"]

variables:
  qd: random(100, 300)
  qs: qd + random(20, 80)

respuesta: (qs > qd)
tipo: vf

enunciado: "A un precio determinado, la cantidad demandada es {qd} unidades y la cantidad ofrecida es {qs} unidades. ¿Es correcto decir que hay exceso de oferta a ese precio?"

explicacion: |
  Se ofrece más de lo que se demanda: exceso de oferta.
```

```
metadata:
  materia: "economia"
  tema: "oferta_y_demanda"
  nivel: "intermedio"
  tags: ["mercado", "calculo"]

variables:
  qs: random(100, 300)
  qd: qs + random(20, 80)

respuesta: (qd > qs)
tipo: vf

enunciado: "A un precio determinado, la cantidad ofrecida es {qs} unidades y la cantidad demandada es {qd} unidades. ¿Es correcto decir que hay exceso de demanda a ese precio?"

explicacion: |
  Se demanda más de lo que se ofrece: exceso de demanda.
```

```
metadata:
  materia: "economia"
  tema: "oferta_y_demanda"
  nivel: "intermedio"
  tags: ["mercado", "vocabulario"]

enunciado: "En un mercado libre, si hay exceso de oferta (sobra mercadería), ¿qué tiende a pasar con el precio?"
tipo: mc
opciones_explicitas:
  - "Tiende a bajar, para vender lo que sobra"
  - "Tiende a subir, para compensar la pérdida"
  - "Se queda fijo siempre"
respuesta: "Tiende a bajar, para vender lo que sobra"

explicacion: |
  Los vendedores bajan el precio para deshacerse del stock excedente,
  acercándose de nuevo al equilibrio.
```

```
metadata:
  materia: "economia"
  tema: "oferta_y_demanda"
  nivel: "intermedio"
  tags: ["mercado", "vocabulario"]

enunciado: "En un mercado libre, si hay exceso de demanda (falta mercadería), ¿qué tiende a pasar con el precio?"
tipo: mc
opciones_explicitas:
  - "Tiende a subir, porque hay compradores dispuestos a pagar más"
  - "Tiende a bajar, para atraer más compradores"
  - "Se queda fijo siempre"
respuesta: "Tiende a subir, porque hay compradores dispuestos a pagar más"

explicacion: |
  Los vendedores suben el precio al ver que hay demanda dispuesta a
  pagarlo, acercándose de nuevo al equilibrio.
```

```
metadata:
  materia: "economia"
  tema: "oferta_y_demanda"
  nivel: "avanzado"
  tags: ["mercado", "orden"]

tipo: ordenar
enunciado: "Ordená estos pasos de cómo un mercado libre se ajusta hacia el precio de equilibrio, partiendo de un precio demasiado bajo."
opciones_explicitas:
  - "El mercado se acerca al precio de equilibrio"
  - "Los vendedores suben el precio"
  - "El precio está por debajo del equilibrio"
  - "Se genera exceso de demanda (falta mercadería)"
respuesta_orden: ["El precio está por debajo del equilibrio", "Se genera exceso de demanda (falta mercadería)", "Los vendedores suben el precio", "El mercado se acerca al precio de equilibrio"]

explicacion: |
  El desequilibrio inicial genera la señal (falta de mercadería) que
  empuja el precio de vuelta hacia el equilibrio.
```

```
metadata:
  materia: "economia"
  tema: "oferta_y_demanda"
  nivel: "intermedio"
  tags: ["mercado", "problema"]

respuesta: verdadero
tipo: vf

enunciado: "Si más gente quiere comprar dólares informales de la que quiere venderlos a un precio dado, el precio del dólar informal tiende a subir."

explicacion: |
  Es exceso de demanda a ese precio: empuja el precio hacia arriba,
  igual que en cualquier otro mercado.
```

```
metadata:
  materia: "economia"
  tema: "oferta_y_demanda"
  nivel: "basico"
  tags: ["mercado"]

variables:
  cantidad_eq: random(100, 400)

tipo: completar
enunciado: "En el precio de equilibrio, la cantidad demandada es igual a la cantidad ___ (misma palabra que describe lo que ponen a la venta los vendedores)."
respuestas_validas:
  - "ofrecida"
  - "ofertada"

explicacion: |
  Es la definición misma de precio de equilibrio: demanda = oferta.
```

```
metadata:
  materia: "economia"
  tema: "oferta_y_demanda"
  nivel: "basico"
  tags: ["mercado", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La oferta y la demanda son dos fuerzas que reaccionan al precio en sentidos opuestos, y el precio de equilibrio es el punto exacto donde ambas coinciden."

explicacion: |
  Es la idea central de todo el tema.
```

