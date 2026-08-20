### 1 — El dilema de la velocidad de entrega
```
metadata:
  materia: "resolucion-problemas"
  tema: "trade_offs_y_priorizacion"
  nivel: "basico"
  tags: ["gestion_de_proyectos", "trade_offs"]

variables:
  escenario: uno_de([
    ["Priorizar rapidez", "costo_alto"],
    ["Priorizar bajo costo", "calidad_baja"]
  ])

enunciado: "Un equipo de desarrollo debe decidir entre lanzar una funcionalidad mañana con errores menores (sacrificando calidad) o lanzarla en un mes con alta calidad (sacrificando tiempo). Si el objetivo principal del cliente es la estabilidad del sistema, el trade-off implica que elegir la rapidez resultará en una ___."

respuesta: escenario[1]
tipo: completar
respuestas_validas: ["costo_alto", "calidad_baja"]

explicacion: |
  Al elegir la rapidez sobre la calidad, se está aceptando un trade-off donde la estabilidad se ve comprometida. En este escenario, la consecuencia directa es la baja calidad.
```

### 2 — Identificación de Trade-offs
```
metadata:
  materia: "resolucion-problemas"
  tema: "trade_offs_y_priorizacion"
  nivel: "intermedio"
  tags: ["decision_toma", "analisis"]

enunciado: "En un proyecto de software, mejorar la seguridad del código suele requerir más tiempo de revisión y más recursos de hardware. ¿Qué tipo de relación describe este escenario?"

opciones_explicitas: ["Relación directa (ambos mejoran)", "Trade-off (mejorar uno empeora otro)", "Sinergia (ambos mejoran simultáneamente)", "Independencia (no hay relación)"]
respuesta: "Trade-off (mejorar uno empeora otro)"
tipo: mc

explicacion: |
  Un trade-off ocurre cuando la optimización de una variable (seguridad) conlleva una degradación en otra variable (tiempo/costo).
```

### 3 — Priorización por impacto
```
metadata:
  materia: "resolucion-problemas"
  tema: "trade_offs_y_priorizacion"
  nivel: "intermedio"
  tags: ["priorizacion", "metodologias"]

variables:
  caso: uno_de([
    ["reparar_bug_critico", "reparar_bug_estetico"],
    ["añadir_nueva_funcionalidad", "mejorar_documentacion"]
  ])

enunciado: "Se tiene un presupuesto limitado de horas de trabajo. Según el criterio de 'Impacto en el Usuario Final', ¿cuál de las siguientes tareas debería priorizarse?"

opciones_explicitas: ["reparar_bug_critico", "reparar_bug_estetico", "añadir_nueva_funcionalidad", "mejorar_documentacion"]
respuesta: caso[0]
tipo: mc

explicacion: |
  La priorización efectiva requiere evaluar el impacto. Un bug crítico afecta la funcionalidad esencial, siendo prioritario sobre cambios estéticos o mejoras de soporte.
```

### 4 — Pasos para la toma de decisiones
```
metadata:
  materia: "resolucion-problemas"
  tema: "trade_offs_y_priorizacion"
  nivel: "avanzado"
  tags: ["metodologia", "proceso"]

opciones_explicitas: ["Identificar los objetivos", "Evaluar los trade-offs", "Seleccionar la opción con mayor valor", "Implementar y monitorear"]
respuesta: ["Identificar los objetivos", "Evaluar los trade-offs", "Seleccionar la opción con mayor valor", "Implementar y monitorear"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para resolver un conflicto de prioridades en un equipo de producto:"

explicacion: |
  El proceso lógico comienza con la definición de metas, sigue con el análisis de las consecuencias de cada elección (trade-offs), la toma de decisión basada en valor y finalmente la ejecución.
```

### 5 — El costo de oportunidad
```
metadata:
  materia: "resolucion-problemas"
  tema: "trade_offs_y_priorizacion"
  nivel: "basico"
  tags: ["conceptos_clave"]

enunciado: "Si una empresa decide invertir todo su capital en Marketing para aumentar ventas, está renunciando a la posibilidad de invertir ese mismo capital en Investigación y Desarrollo (I+D). ¿Es esto un ejemplo de trade-off?"

respuesta: verdadero
tipo: vf

explicacion: |
  Verdadero. El costo de oportunidad es la esencia del trade-off: la pérdida de la siguiente mejor alternativa al tomar una decisión.
```