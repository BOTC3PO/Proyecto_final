### 1 — Ingresos vs. Flujo de Caja
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

### 2 — El cálculo del Resultado del Ejercicio
```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "intermedio"
  tags: ["resultado", "ganancia", "perdida"]

variables:
  datos: [["Ingresos: 1000, Costos: 800", "200"], ["Ingresos: 500, Costos: 600", "-100"], ["Ingresos: 1200, Costos: 1200", "0"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["200", "-100", "0", "No se puede determinar"]

enunciado: "Si una organización presenta un total de ingresos de {datos[idx][0].split(':')[1].split(',')[0].strip()} y un total de costos de {datos[idx][0].split(':')[2].strip()}, su resultado del período es:"

explicacion: |
  El resultado (ganancia o pérdida) se obtiene restando los costos y gastos de los ingresos totales. En el caso {datos[idx][1]}, el resultado es positivo (ganancia) o negativo (pérdida).
```

### 3 — Estructura del Estado de Resultados
```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "basico"
  tags: ["orden", "estructura"]

respuesta: ["Ventas", "Costo de Ventas", "Resultado Bruto", "Gastos Operativos", "Resultado Operativo"]
tipo: ordenar

opciones_explicitas: ["Ventas", "Costo de Ventas", "Resultado Bruto", "Gastos Operativos", "Resultado Operativo"]

enunciado: "Ordene los conceptos según el orden lógico de presentación en un Estado de Resultados estándar para determinar la utilidad operativa."

explicacion: |
  El orden lógico comienza con los ingresos por ventas, se restan los costos directos para obtener el margen bruto, luego se restan los gastos operativos para llegar al resultado operativo.
```

### 4 — Diferencia entre Costo y Gasto
```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "intermedio"
  tags: ["costo", "gasto", "clasificacion"]

respuesta: "gasto"
tipo: completar
respuestas_validas: ["gasto"]

enunciado: "Mientras que el costo está directamente vinculado a la producción de un bien o servicio, el pago de la factura de luz de la oficina administrativa se clasifica contablemente como un ___."

explicacion: |
  Los costos son inversiones que se recuperan al vender el producto (están en el inventario hasta la venta), mientras que los gastos son consumos que se utilizan para mantener la estructura operativa de la empresa.
```

### 5 — El concepto de Resultado Neto
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
tipo: input
tolerancia_abs: 0

enunciado: "Calcule el Resultado Neto (utilidad o pérdida después de impuestos) considerando el siguiente escenario: {escenario[idx][0]}."

explicacion: |
  El resultado neto es el resultado final después de restar los impuestos al resultado antes de impuestos. Si hay pérdida, generalmente no se calcula impuesto sobre la renta (dependiendo de la legislación local, pero en ejercicios académicos se asume que no se resta impuesto a una pérdida).
```