### 1 — Requisitos vs. Restricciones
```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "basico"
  tags: ["conceptos_fundamentales", "definiciones"]

respuesta: "restricción"
tipo: mc
opciones_explicitas: ["requisito", "restricción", "objetivo", "variable"]

enunciado: "En el diseño de un sistema, un elemento que limita las opciones de solución (como un presupuesto máximo o un límite de peso) se denomina ________."

explicacion: |
  Un requisito describe lo que el sistema DEBE hacer (funcionalidad), mientras que una restricción impone límites sobre cómo debe ser construido o qué recursos puede consumir (presupuesto, tiempo, materiales).
```

### 2 — El error de la solución ideal
```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "intermedio"
  tags: ["optimizacion", "errores_comunes"]

respuesta: falso
tipo: vf

enunciado: "¿Es correcto afirmar que la 'solución óptima' es siempre aquella que maximiza el rendimiento técnico, ignorando las restricciones de costo y tiempo?"

explicacion: |
  Falso. En ingeniería, la solución óptima es un compromiso (trade-off) que satisface todos los requisitos y respeta todas las restricciones. Una solución técnicamente superior pero que excede el presupuesto es una solución inviable.
```

### 3 — Jerarquía de prioridades
```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "intermedio"
  tags: ["gestion_de_proyectos", "priorizacion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["El cliente exige un color específico (estético)", "El puente debe soportar 50 toneladas (seguridad)"],
    ["El software debe ser azul (estético)", "El software no debe colapsar con 100 usuarios (estabilidad)"]
  ]

respuesta: "seguridad"
tipo: mc
opciones_explicitas: ["estética", "seguridad", "costo", "tiempo"]

enunciado: "Dada la situación: {escenarios[escenario_idx][1]}, si las restricciones de presupuesto se ven comprometidas, ¿qué tipo de restricción debe priorizarse siempre para garantizar la viabilidad del proyecto?"

explicacion: |
  Las restricciones de seguridad y estabilidad son críticas e innegociables. Si una solución no cumple con la seguridad, no es una solución válida, independientemente de su costo o estética.
```

### 4 — Ciclo de vida de la restricción
```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "avanzado"
  tags: ["metodologia", "proceso_de_diseño"]

respuesta: ["Identificación", "Análisis", "Cumplimiento", "Validación"]
tipo: ordenar

opciones_explicitas: ["Cumplimiento", "Identificación", "Validación", "Análisis"]

enunciado: "Ordene cronológicamente las etapas lógicas en el manejo de restricciones durante el proceso de diseño de un producto:"

explicacion: |
  Primero se identifican las limitaciones (Identificación), luego se estudia cómo afectan al diseño (Análisis), se diseña respetando esos límites (Cumplimiento) y finalmente se comprueba que se cumplieron (Validación).
```

### 5 — Restricciones implícitas
```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "intermedio"
  tags: ["definicion_problema", "errores_comunes"]

respuesta: ["implícitas", "explícitas"]
tipo: completar
respuestas_validas: ["implícitas", "explícitas"]

enunciado: "Las restricciones que no son mencionadas directamente por el cliente pero que son obligatorias por ley o normas técnicas se conocen como restricciones ________, mientras que las comunicadas directamente son ________."

explicacion: |
  Las restricciones explícitas son las dadas por el cliente (ej. "quiero que sea rojo"). Las implícitas son aquellas que el ingeniero debe conocer por conocimiento profesional (ej. normas de seguridad eléctrica o leyes ambientales).
```