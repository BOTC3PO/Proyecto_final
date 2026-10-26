### 1 — Cálculo del Resultado Bruto
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
tipo: input
tolerancia_abs: 0

enunciado: "Una empresa presenta las siguientes cifras en su estado de resultados: Ventas Totales de ${ventas} y Costo de Mercaderías Vendidas de ${costo_ventas}. ¿Cuál es el Resultado Bruto?"

pasos:
  - "Identificar las Ventas Netas: ${ventas}"
  - "Identificar el Costo de Ventas: ${costo_ventas}"
  - "Restar el Costo de las Ventas a las Ventas Netas: ${ventas} - ${costo_ventas}"

explicacion: |
  El Resultado Bruto se obtiene restando el costo de lo vendido a los ingresos por ventas. En este caso: ${ventas} - ${costo_ventas} = ${ventas - costo_ventas}.
```

### 2 — Clasificación de conceptos
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

### 3 — Determinación de la Utilidad Neta
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
tipo: input
tolerancia_abs: 0

enunciado: "Se dispone de un Resultado Bruto de ${res_bruto}, Gastos Operativos de ${gastos_op} e Impuestos de ${impuestos}. Calcule la Utilidad Neta (Resultado del Ejercicio)."

pasos:
  - "Partir del Resultado Bruto: ${res_bruto}"
  - "Restar los Gastos Operativos: ${res_bruto} - ${gastos_op}"
  - "Restar los Impuestos para obtener el resultado final: ${res_bruto} - ${gastos_op} - ${impuestos}"

explicacion: |
  La Utilidad Neta es el resultado final después de deducir todos los costos, gastos y obligaciones impositivas.
```

### 4 — Verdad o Falso: Naturaleza del Resultado
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

### 5 — Orden de la Estructura (Cascada)
```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "intermedio"
  tags: ["estructura", "proceso"]

opciones_explicitas: ["Ventas", "Resultado Bruto", "Resultado Operativo", "Resultado Neto"]
respuesta: ["Ventas", "Resultado Bruto", "Resultado Operativo", "Resultado Neto"]
tipo: ordenar

enunciado: "Ordene los siguientes conceptos según la estructura lógica de cascada de un Estado de Resultados, desde el ingreso principal hasta el resultado final:"

explicacion: |
  La estructura sigue un orden de deducción sucesiva: se parte de las Ventas, se restan los costos para obtener el Bruto, luego se restan gastos operativos para el Operativo, y finalmente impuestos y otros para el Neto.
```