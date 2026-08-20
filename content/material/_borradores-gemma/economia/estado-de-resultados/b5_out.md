### 1 — Cálculo de la utilidad bruta
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
tipo: input
tolerancia_abs: 0

enunciado: "Una empresa reporta en su estado de resultados un total de ventas de ${ventas} y un costo de ventas de ${costo_ventas}. ¿Cuál es el monto de la utilidad bruta?"

explicacion: |
  La utilidad bruta se calcula restando el costo de ventas de los ingresos totales por ventas:
  Utilidad Bruta = Ventas - Costo de Ventas
  En este caso: ${ventas} - ${costo_ventas} = ${ventas - costo_ventas}.
```

### 2 — Clasificación de gastos
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

### 3 — Resultado del ejercicio (Verdadero/Falso)
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
tipo: vf

enunciado: "Considerando que los ingresos totales son ${ingresos} y los gastos totales son ${gastos}, ¿el resultado del ejercicio es una utilidad (ganancia)?"

explicacion: |
  Para que haya utilidad, los ingresos deben ser mayores que los gastos. 
  En este escenario: ${ingresos} > ${gastos} es ${ingresos > gastos}.
```

### 4 — Estructura del Estado de Resultados
```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "intermedio"
  tags: ["orden", "estructura"]

respuesta: ["Ventas", "Costo de Ventas", "Utilidad Bruta", "Gastos Operativos", "Utilidad Operativa"]
tipo: ordenar

opciones_explicitas: ["Ventas", "Costo de Ventas", "Utilidad Bruta", "Gastos Operativos", "Utilidad Operativa"]

enunciado: "Ordene los siguientes conceptos según la secuencia lógica de presentación en un Estado de Resultados convencional (de mayor a menor margen):"

explicacion: |
  La estructura lógica comienza con el ingreso principal (Ventas), se le resta el costo directo para obtener la Utilidad Bruta, luego se restan los gastos operativos para llegar a la Utilidad Operativa.
```

### 5 — Cálculo de Utilidad Neta
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
respuestas_validas: [7000, 10500, 5600]

enunciado: "Si una empresa obtiene una utilidad antes de impuestos de ${utilidad_antes_imp} y debe afrontar una tasa impositiva del 30%, el valor de la utilidad neta es ___"

explicacion: |
  La utilidad neta se obtiene aplicando la tasa impositiva sobre la utilidad antes de impuestos:
  Utilidad Neta = Utilidad Antes de Impuestos * (1 - Tasa)
  En este caso: ${utilidad_antes_imp} * (1 - 0.30) = ${utilidad_antes_imp * 0.7}.
```