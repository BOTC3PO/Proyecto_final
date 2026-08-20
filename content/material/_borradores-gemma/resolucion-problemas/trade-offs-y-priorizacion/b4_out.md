### 1 — Trade-off vs Eficiencia
```
metadata:
  materia: "resolucion-problemas"
  tema: "trade_offs_y_priorizacion"
  nivel: "basico"
  tags: ["conceptos_clave", "decision"]

enunciado: "Mientras que la eficiencia busca maximizar la producción con el mínimo de recursos, un trade-off ocurre cuando mejorar un aspecto de un sistema implica necesariamente ___ otro aspecto."

respuestas_validas: ["sacrificar", "empeorar", "reducir"]
tipo: completar

explicacion: |
  Un trade-off es una situación de compromiso donde la mejora de una variable (ej. velocidad) conlleva la degradación de otra (ej. precisión).
```

### 2 — El Costo de Oportunidad
```
metadata:
  materia: "resolucion-problemas"
  tema: "trade_offs_y_priorizacion"
  nivel: "intermedio"
  tags: ["costo_oportunidad", "priorizacion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Elegir desarrollar una nueva función que tarda 3 meses", "perder la oportunidad de arreglar 5 bugs críticos"],
    ["Invertir todo el presupuesto en marketing", "no tener fondos para soporte técnico"]
  ]

enunciado: "En el escenario: {escenarios[escenario_idx][0]}, el costo de oportunidad es: {escenarios[escenario_idx][1]}."

respuestas_validas: ["perder la oportunidad de arreglar 5 bugs críticos", "no tener fondos para soporte técnico"]
tipo: completar

explicacion: |
  El costo de oportunidad no es el valor de lo que elegimos, sino el valor de la mejor alternativa que sacrificamos al tomar esa decisión.
```

### 3 — Priorización vs Urgencia
```
metadata:
  materia: "resolucion-problemas"
  tema: "trade_offs_y_priorizacion"
  nivel: "basico"
  tags: ["matriz_esfuerzo_impacto", "priorizacion"]

enunciado: "En la gestión de tareas, ¿cuál es la diferencia fundamental entre una tarea 'Urgente' y una tarea 'Prioritaria'?"

opciones_explicitas: ["La urgencia se refiere al tiempo, la prioridad al impacto/valor.", "La urgencia es siempre más importante que la prioridad.", "No hay diferencia, son sinónimos en gestión de proyectos.", "La prioridad se basa en la fecha de entrega y la urgencia en la importancia."]

respuesta: "La urgencia se refiere al tiempo, la prioridad al impacto/valor."
tipo: mc

explicacion: |
  Una tarea puede ser urgente (debe hacerse ya) pero tener poco impacto (baja prioridad). La priorización busca maximizar el valor entregado con el esfuerzo invertido.
```

### 4 — El Dilema Calidad-Velocidad
```
metadata:
  materia: "resolucion-problemas"
  tema: "trade_offs_y_priorizacion"
  nivel: "intermedio"
  tags: ["trade_offs", "calidad"]

enunciado: "¿Es posible eliminar completamente los trade-offs en un proceso de toma de decisiones complejo?"

opciones_explicitas: [verdadero, falso]

respuesta: falso
tipo: vf

explicacion: |
  Debido a la escasez de recursos (tiempo, dinero, energía), casi toda decisión implica un compromiso (trade-off). Optimizar una variable suele desplazar el equilibrio hacia otra.
```

### 5 — Secuencia de Análisis de Decisión
```
metadata:
  materia: "resolucion-problemas"
  tema: "trade_offs_y_priorizacion"
  nivel: "avanzado"
  tags: ["metodologia", "priorizacion"]

enunciado: "Ordena los pasos lógicos para resolver un conflicto de prioridades cuando existen múltiples trade-offs detectados:"

opciones_explicitas: ["Identificar los trade-offs", "Evaluar el impacto de cada opción", "Definir el objetivo principal", "Seleccionar la opción con mejor balance"]

respuesta: ["Identificar los trade-offs", "Definir el objetivo principal", "Evaluar el impacto de cada opción", "Seleccionar la opción con mejor balance"]
tipo: ordenar

explicacion: |
  Para decidir correctamente, primero debemos saber qué estamos sacrificando (identificar), tener claro qué queremos lograr (objetivo), medir las consecuencias (evaluar) y finalmente elegir.
```