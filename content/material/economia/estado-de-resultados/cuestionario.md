# Economia — Estado de resultados (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de Ingresos

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "basico"
  tags: ["conceptos", "ingresos"]

respuesta: "ingresos"
tipo: completar
respuestas_validas:
  - "ingresos"
  - "ventas"

enunciado: "El conjunto de incrementos en los beneficios económicos durante el período, que resultan en aumentos del patrimonio neto, se denominan _______."

explicacion: |
  Los ingresos representan las entradas de recursos o incrementos en el valor de los activos que surgen de las actividades principales de la organización.
```

### 2 — Composición del Resultado

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "basico"
  tags: ["estructura", "resultado"]

variables:
  idx: uno_de([0, 1])
  escenario: [[1000, 800, 200], [500, 700, -200]]

respuesta: escenario[idx][2]
tipo: completar
tolerancia_abs: 0

enunciado: "En un escenario donde los ingresos son de ${escenario[idx][0]} y los costos/gastos totales son de ${escenario[idx][1]}, el resultado del período es _______."

pasos:
  - "Identificar el total de ingresos: ${escenario[idx][0]}"
  - "Identificar el total de costos y gastos: ${escenario[idx][1]}"
  - "Restar: Ingresos - Costos = Resultado"

explicacion: |
  El resultado se obtiene restando los costos y gastos de los ingresos totales. Si el resultado es positivo es ganancia, si es negativo es pérdida.
```

### 3 — Clasificación de Resultados

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "basico"
  tags: ["terminologia"]

respuesta: "verdadero"
tipo: completar
enunciado: "Si el total de ingresos es menor que el total de costos y gastos en un período determinado, la organización presenta una pérdida."

explicacion: |
  Exacto. La pérdida ocurre cuando los egresos superan a los ingresos en el estado de resultados.
```

### 4 — Componentes del Estado de Resultados

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "basico"
  tags: ["estructura"]

respuesta_orden: ["Ingresos", "Costos", "Resultado"]
tipo: ordenar

opciones_explicitas: ["Ingresos", "Costos", "Resultado"]

enunciado: "Ordene los elementos según la estructura lógica de cálculo del estado de resultados (desde el origen del recurso hasta el resultado final):"

explicacion: |
  La secuencia lógica es: primero se registran los ingresos, luego se restan los costos/gastos y finalmente se obtiene el resultado (utilidad o pérdida).
```

### 5 — Naturaleza del Resultado

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "basico"
  tags: ["conceptos"]

variables:
  idx: uno_de([0, 1])
  resultado_tipo: [["Ganancia", "positivo"], ["Pérdida", "negativo"]]

respuesta: resultado_tipo[idx][1]
tipo: mc

opciones_explicitas: ["positivo", "negativo"]

enunciado: "Si el resultado del período es una '_______', el valor numérico final es ${resultado_tipo[idx][0]}."

explicacion: |
  Una ganancia implica un valor positivo (ingresos > costos), mientras que una pérdida implica un valor negativo (ingresos < costos).
```

### 6 — Cálculo del Resultado Bruto

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "basico"
  tags: ["contabilidad", "ingresos", "costos"]

variables:
  datos: [[150000, 90000], [250000, 180000], [80000, 50000]]
  idx: uno_de([0,1,2])
  ventas: datos[idx][0]
  costo_ventas: datos[idx][1]

respuesta: ventas - costo_ventas
tipo: completar
tolerancia_abs: 0

enunciado: "Una empresa presenta las siguientes cifras en su estado de resultados: Ventas Totales de ${ventas} y Costo de Mercaderías Vendidas de ${costo_ventas}. ¿Cuál es el Resultado Bruto?"

pasos:
  - "Identificar las Ventas Netas: ${ventas}"
  - "Identificar el Costo de Ventas: ${costo_ventas}"
  - "Restar el Costo de las Ventas a las Ventas Netas: ${ventas} - ${costo_ventas}"

explicacion: |
  El Resultado Bruto se obtiene restando el costo de lo vendido a los ingresos por ventas. En este caso: ${ventas} - ${costo_ventas} = ${ventas - costo_ventas}.
```

### 7 — Clasificación de conceptos

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "basico"
  tags: ["clasificacion", "conceptos"]

respuesta: "Ingreso"
tipo: mc
opciones_explicitas: ["Ingreso", "Costo", "Gasto", "Activo"]

enunciado: "Si una empresa realiza una venta de servicios por un valor de $50.000, este concepto se clasifica contablemente en el Estado de Resultados como un:"

explicacion: |
  Las entradas de recursos que incrementan el patrimonio neto de la entidad, provenientes de la actividad principal, se denominan Ingresos.
```

### 8 — Determinación de la Utilidad Neta

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "intermedio"
  tags: ["utilidad", "impuestos", "gastos"]

variables:
  escenario: [[10000, 4000, 2000], [25000, 12000, 5000], [5000, 6000, 1000]]
  idx: uno_de([0,1,2])
  res_bruto: escenario[idx][0]
  gastos_op: escenario[idx][1]
  impuestos: escenario[idx][2]

respuesta: res_bruto - gastos_op - impuestos
tipo: completar
tolerancia_abs: 0

enunciado: "Se dispone de un Resultado Bruto de ${res_bruto}, Gastos Operativos de ${gastos_op} e Impuestos de ${impuestos}. Calcule la Utilidad Neta (Resultado del Ejercicio)."

pasos:
  - "Partir del Resultado Bruto: ${res_bruto}"
  - "Restar los Gastos Operativos: ${res_bruto} - ${gastos_op}"
  - "Restar los Impuestos para obtener el resultado final: ${res_bruto} - ${gastos_op} - ${impuestos}"

explicacion: |
  La Utilidad Neta es el resultado final después de deducir todos los costos, gastos y obligaciones impositivas.
```

### 9 — Verdad o Falso: Naturaleza del Resultado

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "basico"
  tags: ["teoria", "conceptos"]

respuesta: falso

tipo: vf

enunciado: "Si el total de ingresos de una organización es menor al total de sus costos y gastos en un período determinado, el resultado se denomina 'Ganancia'."

explicacion: |
  Falso. Cuando los gastos superan a los ingresos, el resultado es una 'Pérdida'. La 'Ganancia' ocurre cuando los ingresos son mayores.
```

### 10 — Orden de la Estructura (Cascada)

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "intermedio"
  tags: ["estructura", "proceso"]

opciones_explicitas: ["Ventas", "Resultado Bruto", "Resultado Operativo", "Resultado Neto"]
respuesta_orden: ["Ventas", "Resultado Bruto", "Resultado Operativo", "Resultado Neto"]
tipo: ordenar

enunciado: "Ordene los siguientes conceptos según la estructura lógica de cascada de un Estado de Resultados, desde el ingreso principal hasta el resultado final:"

explicacion: |
  La estructura sigue un orden de deducción sucesiva: se parte de las Ventas, se restan los costos para obtener el Bruto, luego se restan gastos operativos para el Operativo, y finalmente impuestos y otros para el Neto.
```

### 11 — Ingresos vs. Flujo de Caja

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "basico"
  tags: ["ingresos", "devengado", "flujo_de_caja"]

respuesta: falso
tipo: vf

enunciado: "Un ingreso registrado en el Estado de Resultados implica necesariamente que el dinero ya ingresó a la cuenta bancaria de la organización."

explicacion: |
  El Estado de Resultados se rige por el principio de lo devengado. Esto significa que los ingresos se registran cuando se produce la venta o la prestación del servicio, independientemente de si el cliente pagó en efectivo o si la transacción fue a crédito.
```

### 12 — El cálculo del Resultado del Ejercicio

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "intermedio"
  tags: ["resultado", "ganancia", "perdida"]

variables:
  idx: uno_de([0, 1, 2])
  ingresos: [1000, 500, 1200]
  costos: [800, 600, 1200]
  resultados_texto: ["200", "-100", "0"]

respuesta: resultados_texto[idx]
tipo: mc
opciones_explicitas: ["200", "-100", "0", "No se puede determinar"]

enunciado: "Si una organización presenta un total de ingresos de {ingresos[idx]} y un total de costos de {costos[idx]}, su resultado del período es:"

explicacion: |
  El resultado (ganancia o pérdida) se obtiene restando los costos y gastos de los ingresos totales. El resultado es positivo (ganancia) o negativo (pérdida) según cuál de los dos totales sea mayor.
```

### 13 — Estructura del Estado de Resultados

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "basico"
  tags: ["orden", "estructura"]

respuesta_orden: ["Ventas", "Costo de Ventas", "Resultado Bruto", "Gastos Operativos", "Resultado Operativo"]
tipo: ordenar

opciones_explicitas: ["Ventas", "Costo de Ventas", "Resultado Bruto", "Gastos Operativos", "Resultado Operativo"]

enunciado: "Ordene los conceptos según el orden lógico de presentación en un Estado de Resultados estándar para determinar la utilidad operativa."

explicacion: |
  El orden lógico comienza con los ingresos por ventas, se restan los costos directos para obtener el margen bruto, luego se restan los gastos operativos para llegar al resultado operativo.
```

### 14 — Diferencia entre Costo y Gasto

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "intermedio"
  tags: ["costo", "gasto", "clasificacion"]

respuesta: "gasto"
tipo: completar
respuestas_validas:
  - "gasto"

enunciado: "Mientras que el costo está directamente vinculado a la producción de un bien o servicio, el pago de la factura de luz de la oficina administrativa se clasifica contablemente como un ___."

explicacion: |
  Los costos son inversiones que se recuperan al vender el producto (están en el inventario hasta la venta), mientras que los gastos son consumos que se utilizan para mantener la estructura operativa de la empresa.
```

### 15 — El concepto de Resultado Neto

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "avanzado"
  tags: ["impuestos", "resultado_neto"]

variables:
  escenario: [["Resultado antes de impuestos: 100, Tasa: 0.3", "70"], ["Resultado antes de impuestos: -50, Tasa: 0.3", "-50"]]
  idx: uno_de([0, 1])

respuesta: escenario[idx][1]
tipo: completar
tolerancia_abs: 0

enunciado: "Calcule el Resultado Neto (utilidad o pérdida después de impuestos) considerando el siguiente escenario: {escenario[idx][0]}."

explicacion: |
  El resultado neto es el resultado final después de restar los impuestos al resultado antes de impuestos. Si hay pérdida, generalmente no se calcula impuesto sobre la renta (dependiendo de la legislación local, pero en ejercicios académicos se asume que no se resta impuesto a una pérdida).
```

### 16 — Diferencia fundamental

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "basico"
  tags: ["conceptos", "contabilidad"]

respuesta: "flujo"
tipo: completar
respuestas_validas:
  - "flujo"
  - "flujo de fondos"
  - "flujo de caja"

enunciado: "A diferencia del Balance General, que muestra la situación patrimonial en un momento dado, el Estado de Resultados muestra el ___ de ingresos y gastos durante un período determinado."

explicacion: |
  El Balance General es una "foto" estática, mientras que el Estado de Resultados es un "video" que registra el flujo de transacciones en un tiempo determinado.
```

### 17 — Diferencia entre utilidad y caja

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "intermedio"
  tags: ["rentabilidad", "liquidez"]

variables:
  escenarios: [[verdadero, falso], [falso, verdadero]]
  escenario_idx: uno_de([0, 1])
  respuesta_correcta: escenarios[escenario_idx][0]

respuesta: respuesta_correcta
tipo: vf

enunciado: "Si una empresa reporta una utilidad neta positiva pero tiene problemas para pagar sus deudas corrientes, ¿es correcto afirmar que la utilidad neta indica la liquidez inmediata de la empresa?"

explicacion: |
  El principio del devengado implica que los ingresos y gastos se registran cuando ocurren, independientemente de si hubo movimiento de efectivo o no.
```

### 18 — Componentes del resultado

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "basico"
  tags: ["estructura", "conceptos"]

respuesta: falso
tipo: vf

enunciado: "¿Es correcto afirmar que el Resultado del Ejercicio se obtiene simplemente restando el Activo del Pasivo?"

explicacion: |
  Falso. La diferencia entre Activo y Pasivo es el Patrimonio Neto. El Resultado del Ejercicio se obtiene de la diferencia entre Ingresos y Gastos en el Estado de Resultados.
```

### 19 — Orden de la estructura operativa

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "intermedio"
  tags: ["estructura", "jerarquia"]

respuesta_orden: ["Ventas Netas", "Costo de Mercaderías Vendidas", "Utilidad Bruta", "Gastos Operativos", "Utilidad Operativa"]
tipo: ordenar
opciones_explicitas: ["Ventas Netas", "Costo de Mercaderías Vendidas", "Utilidad Bruta", "Gastos Operativos", "Utilidad Operativa"]

enunciado: "Ordene los conceptos según la estructura lógica de un Estado de Resultados para determinar la utilidad operativa:"

explicacion: |
  La estructura sigue un orden descendente: primero se determinan las ventas, se restan los costos directos para obtener la utilidad bruta, y luego se restan los gastos de administración y ventas para llegar a la utilidad operativa.
```

### 20 — Costos vs Gastos

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "avanzado"
  tags: ["costos", "clasificacion"]

variables:
  tipo_item_idx: uno_de([0, 1])
  items: [[0, 1], [1, 0]]

respuesta: items[tipo_item_idx][0]
tipo: mc
opciones_explicitas: [0, 1]

enunciado: "En el Estado de Resultados, el concepto que se relaciona directamente con el ingreso por ventas para determinar la utilidad bruta se denomina ___."

explicacion: |
  El 'Costo' (como el CMV) está directamente vinculado a la producción o adquisición de lo vendido, mientras que el 'Gasto' suele referirse a consumos para la estructura operativa (administración/ventas).
```

### 21 — Cálculo de la utilidad bruta

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "basico"
  tags: ["contabilidad", "utilidad_bruta"]

variables:
  escenario: [[150000, 85000, 45000], [200000, 120000, 30000], [180000, 90000, 55000]]
  idx: uno_de([0, 1, 2])
  ventas: escenario[idx][0]
  costo_ventas: escenario[idx][1]

respuesta: ventas - costo_ventas
tipo: completar
tolerancia_abs: 0

enunciado: "Una empresa reporta en su estado de resultados un total de ventas de ${ventas} y un costo de ventas de ${costo_ventas}. ¿Cuál es el monto de la utilidad bruta?"

explicacion: |
  La utilidad bruta se calcula restando el costo de ventas de los ingresos totales por ventas:
  Utilidad Bruta = Ventas - Costo de Ventas
  En este caso: ${ventas} - ${costo_ventas} = ${ventas - costo_ventas}.
```

### 22 — Clasificación de gastos

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "basico"
  tags: ["clasificacion", "gastos"]

respuesta: "Gastos Operativos"
tipo: mc
opciones_explicitas: ["Costo de Ventas", "Gastos Operativos", "Ingresos No Operativos"]

enunciado: "Si una empresa tiene un listado de pagos por sueldos administrativos, alquiler de oficinas y servicios de luz para la administración, ¿en qué categoría del estado de resultados se clasifican principalmente?"

explicacion: |
  Los gastos de administración, ventas y financieros se agrupan como Gastos Operativos, a diferencia del Costo de Ventas que está directamente ligado a la producción o adquisición de bienes vendidos.
```

### 23 — Resultado del ejercicio (Verdadero/Falso)

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "intermedio"
  tags: ["resultado_neto", "perdida"]

variables:
  datos: [[5000, 8000], [12000, 10000], [4500, 4500]]
  idx: uno_de([0, 1, 2])
  ingresos: datos[idx][0]
  gastos: datos[idx][1]

respuesta: ingresos > gastos
tipo: completar
enunciado: "Considerando que los ingresos totales son ${ingresos} y los gastos totales son ${gastos}, ¿el resultado del ejercicio es una utilidad (ganancia)?"

explicacion: |
  Para que haya utilidad, los ingresos deben ser mayores que los gastos. 
  En este escenario: ${ingresos} > ${gastos} es ${ingresos > gastos}.
```

### 24 — Estructura del Estado de Resultados

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "intermedio"
  tags: ["orden", "estructura"]

respuesta_orden: ["Ventas", "Costo de Ventas", "Utilidad Bruta", "Gastos Operativos", "Utilidad Operativa"]
tipo: ordenar

opciones_explicitas: ["Ventas", "Costo de Ventas", "Utilidad Bruta", "Gastos Operativos", "Utilidad Operativa"]

enunciado: "Ordene los siguientes conceptos según la secuencia lógica de presentación en un Estado de Resultados convencional (de mayor a menor margen):"

explicacion: |
  La estructura lógica comienza con el ingreso principal (Ventas), se le resta el costo directo para obtener la Utilidad Bruta, luego se restan los gastos operativos para llegar a la Utilidad Operativa.
```

### 25 — Cálculo de Utilidad Neta

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "avanzado"
  tags: ["utilidad_neta", "impuestos"]

variables:
  escenario: [[10000, 2000], [15000, 3000], [8000, 1500]]
  idx: uno_de([0, 1, 2])
  utilidad_antes_imp: escenario[idx][0]
  impuesto_tasa: 0.30

respuesta: utilidad_antes_imp * (1 - impuesto_tasa)

tipo: completar
respuestas_validas:
  - 7000
  - 10500
  - 5600

enunciado: "Si una empresa obtiene una utilidad antes de impuestos de ${utilidad_antes_imp} y debe afrontar una tasa impositiva del 30%, el valor de la utilidad neta es ___"

explicacion: |
  La utilidad neta se obtiene aplicando la tasa impositiva sobre la utilidad antes de impuestos:
  Utilidad Neta = Utilidad Antes de Impuestos * (1 - Tasa)
  En este caso: ${utilidad_antes_imp} * (1 - 0.30) = ${utilidad_antes_imp * 0.7}.
```
