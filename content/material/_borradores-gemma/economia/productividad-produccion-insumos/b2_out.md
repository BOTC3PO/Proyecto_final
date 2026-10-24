### 1 — Cálculo de Productividad Simple
```
metadata:
  materia: "economia"
  tema: "productividad_insumos"
  nivel: "basico"
  tags: ["productividad", "calculo"]

variables:
  produccion: 150
  insumo: 30

respuesta: 5.0
tipo: input
tolerancia_abs: 0.1

enunciado: "Una fábrica produce {produccion} unidades de un producto utilizando {insumo} unidades de materia prima. ¿Cuál es el índice de productividad (producción por unidad de insumo)?"

pasos:
  - "Identificar la producción total: 150"
  - "Identificar el insumo utilizado: 30"
  - "Dividir la producción por el insumo: 150 / 30 = 5"

explicacion: |
  La productividad se calcula dividiendo la producción total entre la cantidad de insumos utilizados. En este caso: 150 / 30 = 5.
```

### 2 — Análisis de Eficiencia
```
metadata:
  materia: "economia"
  tema: "productividad_insumos"
  nivel: "intermedio"
  tags: ["eficiencia", "comparacion"]

variables:
  caso_a: [["100 unidades / 20 insumos", "5"], ["200 unidades / 50 insumos", "4"]]
  idx: uno_de([0, 1])
  resultado_a: caso_a[idx][0]
  resultado_b: "200 unidades / 40 insumos"
  valor_b: "5"

respuesta: "5"
tipo: mc
opciones_explicitas: ["4", "5", "6", "7"]

enunciado: "Si el Caso A tiene una productividad de {resultado_a}, y el Caso B tiene una producción de 200 unidades con 40 unidades de insumo, ¿cuál es la productividad del Caso B?"

explicacion: |
  Para el Caso B: 200 / 40 = 5. Ambos casos presentan la misma productividad.
```

### 3 — Factores que afectan la Productividad
```
metadata:
  materia: "economia"
  tema: "productividad_insumos"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "¿Si una empresa logra producir la misma cantidad de bienes utilizando menos insumos, su productividad ha aumentado?"

explicacion: |
  Correcto. La productividad es una relación inversa entre insumos y producción para un mismo nivel de output; a menor insumo para el mismo producto, mayor productividad.
```

### 4 — Proceso de Optimización
```
metadata:
  materia: "economia"
  tema: "productividad_insumos"
  nivel: "intermedio"
  tags: ["proceso", "ordenar"]

opciones_explicitas: ["Medir la producción total", "Calcular la cantidad de insumos usados", "Dividir producción por insumos", "Analizar el índice de productividad"]

respuesta: ["Medir la producción total", "Calcular la cantidad de insumos usados", "Dividir producción por insumos", "Analizar el índice de productividad"]
tipo: ordenar

enunciado: "Ordene los pasos lógicos para realizar un análisis de productividad en una línea de montaje:"

explicacion: |
  Primero se debe conocer qué se produjo, luego qué se gastó, luego realizar la operación matemática y finalmente interpretar el resultado obtenido.
```

### 5 — Completar la Definición
```
metadata:
  materia: "economia"
  tema: "productividad_insumos"
  nivel: "basico"
  tags: ["teoria"]

respuestas_validas: ["relación", "razón", "proporción"]
respuesta: "relación"
tipo: completar

enunciado: "La productividad se define técnicamente como la ___ entre la cantidad de producto obtenido y la cantidad de recursos empleados."

explicacion: |
  La productividad es la relación (o razón) matemática que indica la eficiencia con la que se transforman los insumos en productos finales.
```