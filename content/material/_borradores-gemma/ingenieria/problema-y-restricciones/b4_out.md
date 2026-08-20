### 1 — Requisito vs Restricción
```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "basico"
  tags: ["conceptos_fundamentales", "definiciones"]

tipo: mc
opciones_explicitas: ["Un requisito define qué debe hacer el sistema, mientras que una restricción limita cómo debe hacerse.", "Un requisito es una limitación de recursos, mientras que una restricción es una funcionalidad deseada.", "Ambos términos son sinónimos en el diseño de ingeniería.", "El requisito es una limitación de tiempo y la restricción es una meta de rendimiento."]

enunciado: "En el contexto de la ingeniería de sistemas, ¿cuál es la distinción fundamental entre un requisito y una restricción?"

explicacion: |
  Los requisitos describen las funciones o capacidades que el producto debe poseer (el "qué"), mientras que las restricciones imponen límites o condiciones de diseño que deben respetarse (el "cómo", como presupuesto, tiempo o normativas).
```

### 2 — Naturaleza de las restricciones
```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "basico"
  tags: ["conceptos_fundamentales"]

tipo: vf
enunciado: "Las restricciones de diseño, como el presupuesto o la disponibilidad de materiales, son elementos que el ingeniero puede ignorar si la solución técnica es superior."

respuesta: falso

explicacion: |
  Las restricciones son límites inamovibles. Si una solución técnica es excelente pero excede el presupuesto o viola una norma de seguridad (restricción), la solución no es válida para el problema planteado.
```

### 3 — Clasificación de requerimientos
```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "intermedio"
  tags: ["clasificacion", "requisitos"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["El sistema debe procesar 100 transacciones por segundo.", "El sistema debe pesar menos de 5kg."],
    ["El sistema debe ser de color azul.", "El sistema debe operar entre 0°C y 50°C."]
  ]
  tipos: ["Funcional", "No Funcional"]

tipo: completar
enunciado: "Considerando el escenario: '{escenarios[escenario_idx][0]}', este se clasifica como un requisito de tipo {tipos[0]}."
respuestas_validas: ["Funcional", "No Funcional"]
respuesta: "Funcional"

explicacion: |
  Los requisitos funcionales definen acciones o comportamientos específicos del sistema (lo que hace), mientras que los no funcionales (como peso, color o temperatura) definen atributos o cualidades de la solución.
```

### 4 — Etapas de resolución de problemas
```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "intermedio"
  tags: ["metodologia", "proceso"]

tipo: ordenar
opciones_explicitas: ["Definición del problema y sus restricciones", "Generación de alternativas de solución", "Evaluación de soluciones bajo criterios de diseño", "Selección de la solución óptima"]

enunciado: "Ordene cronológicamente las etapas lógicas del proceso de diseño de ingeniería para abordar un problema con restricciones dadas:"

explicacion: |
  No se puede diseñar sin entender primero las limitaciones (restricciones). Una vez definido el problema, se exploran opciones, se comparan contra las restricciones y finalmente se elige la mejor.
```

### 5 — El impacto de las restricciones
```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "avanzado"
  tags: ["optimizacion", "toma_de_decisiones"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [
    ["Aumentar la velocidad de un motor", "Reducir el costo de fabricación"],
    ["Mejorar la durabilidad de un material", "Reducir el peso de una estructura"]
  ]
  objetivo: ["Optimizar el rendimiento", "Optimizar la economía"]
  conflicto: ["El costo de los materiales aumenta", "La resistencia estructural disminuye"]

tipo: mc
opciones_explicitas: ["El cumplimiento de la restricción suele entrar en conflicto con la optimización del objetivo.", "La restricción es el objetivo principal del ingeniero.", "Las restricciones eliminan la necesidad de optimizar.", "No existe conflicto entre objetivos y restricciones."]

enunciado: "Al intentar '{objetivo[caso_idx]}' en el caso de '{casos[caso_idx][0]}', es común que surja un conflicto con la restricción de '{conflicto[caso_idx]}'. ¿Cómo se define esta relación?"

explicacion: |
  En ingeniería, la optimización de un parámetro (ej. velocidad) suele penalizar otro (ej. costo o peso). El diseño consiste en encontrar el equilibrio óptimo dentro de las restricciones impuestas.
```