### 1 — Concepto de Ingresos
```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "basico"
  tags: ["conceptos", "ingresos"]

respuesta: "ingresos"
tipo: completar
respuestas_validas: ["ingresos", "ventas"]

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
tipo: input
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
tipo: vf

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

respuesta: ["Ingresos", "Costos", "Resultado"]
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