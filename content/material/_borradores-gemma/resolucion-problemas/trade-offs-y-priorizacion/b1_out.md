### 1 — Concepto de Trade-off
```
metadata:
  materia: "resolucion-problemas"
  tema: "trade_offs_y_priorizacion"
  nivel: "basico"
  tags: ["definicion", "conceptos_clave"]

respuesta: "costo de oportunidad"
tipo: completar
respuestas_validas: ["costo de oportunidad"]

enunciado: "En el proceso de toma de decisiones, cuando elegir una opción implica renunciar a los beneficios de la mejor alternativa descartada, estamos enfrentando el ___."

explicacion: |
  El costo de oportunidad es el valor de la mejor opción no elegida. Es el concepto fundamental para entender los trade-offs.
```

### 2 — Identificación de Trade-offs
```
metadata:
  materia: "resolucion-problemas"
  tema: "trade_offs_y_priorizacion"
  nivel: "basico"
  tags: ["identificacion", "escenarios"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Aumentar la velocidad de producción", "Aumentar los costos de mantenimiento"],
    ["Mejorar la calidad del producto", "Aumentar el precio de venta"]
  ]
  consecuencias: [
    ["Aumentar los costos de mantenimiento", "Aumentar el precio de venta"],
    ["Aumentar la velocidad de producción", "Mejorar la calidad del producto"]
  ]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["Aumentar la velocidad de producción", "Mejorar la calidad del producto", "Aumentar los costos de mantenimiento", "Aumentar el precio de venta"]

enunciado: "Si decidimos '{escenarios[escenario_idx][0]}', el trade-off directo (lo que se ve afectado negativamente) sería: {consecuencias[escenario_idx][0]}."

explicacion: |
  Un trade-off ocurre cuando la mejora en una dimensión (ej. velocidad) conlleva una degradación en otra (ej. mantenimiento o calidad).
```

### 3 — Priorización y Valor
```
metadata:
  materia: "resolucion-problemas"
  tema: "trade_offs_y_priorizacion"
  nivel: "basico"
  tags: ["priorizacion", "criterios"]

respuesta: verdadero
tipo: vf

enunciado: "La priorización es el proceso de organizar tareas o decisiones en un orden de importancia para optimizar el uso de recursos limitados."

explicacion: |
  Exacto. La priorización es la herramienta que utilizamos para gestionar los trade-offs, decidiendo qué beneficio es más valioso en un contexto dado.
```

### 4 — Elementos de la Decisión
```
metadata:
  materia: "resolucion-problemas"
  tema: "trade_offs_y_priorizacion"
  nivel: "basico"
  tags: ["componentes", "decision"]

respuesta: "recursos"
tipo: completar
respuestas_validas: ["recursos"]

enunciado: "Los trade-offs existen principalmente porque los ___ (como tiempo, dinero o energía) son finitos."

explicacion: |
  La escasez de recursos es la causa raíz de por qué no podemos tenerlo todo simultáneamente, obligándonos a elegir.
```

### 5 — Proceso de Resolución
```
metadata:
  materia: "resolucion-problemas"
  tema: "trade_offs_y_priorizacion"
  nivel: "intermedio"
  tags: ["metodologia", "orden"]

respuesta: ["Identificar objetivos", "Evaluar alternativas", "Analizar trade-offs", "Seleccionar opción"]
tipo: ordenar
opciones_explicitas: ["Identificar objetivos", "Evaluar alternativas", "Analizar trade-offs", "Seleccionar opción", "Ejecutar sin pensar"]

enunciado: "Ordena los pasos lógicos para resolver un conflicto de prioridades mediante el análisis de trade-offs:"

explicacion: |
  Primero definimos qué queremos (objetivos), luego vemos qué opciones hay (alternativas), pesamos lo que perdemos en cada una (trade-offs) y finalmente decidimos.
```