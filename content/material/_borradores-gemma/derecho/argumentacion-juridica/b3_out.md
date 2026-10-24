### 1 — La jerarquía normativa en la argumentación
```
metadata:
  materia: "derecho"
  tema: "argumentacion_juridica"
  nivel: "intermedio"
  tags: ["jerarquia", "normas", "argumentacion"]

respuesta: "Constitución"
tipo: completar
respuestas_validas: ["Constitución"]

enunciado: "En un sistema de argumentación jurídica basado en la jerarquía de Kelsen, ninguna norma puede contradecir a la ___."

explicacion: |
  La Constitución es la norma de máxima jerarquía (norma fundamental). Un argumento jurídico sólido debe respetar la supremacía constitucional para evitar la invalidez de la norma inferior.
```

### 2 — Precedente vs. Ley
```
metadata:
  materia: "derecho"
  tema: "argumentacion_juridica"
  nivel: "intermedio"
  tags: ["precedente", "jurisprudencia", "fuentes"]

variables:
  caso_idx: uno_de([0, 1])

respuesta: uno_de([0, 1])[1]
tipo: mc
opciones_explicitas: ["El precedente es una norma de aplicación general e inmediata para todos los casos futuros.", "El precedente es una guía interpretativa que debe ser analizada caso por caso según su ratio decidendi."]

enunciado: "Al utilizar la jurisprudencia como fuente de argumentación, ¿cuál es el error más común al aplicar un precedente?"

explicacion: |
  No se debe aplicar un precedente de forma mecánica (subsunción automática). Un argumento sólido requiere identificar la 'ratio decidendi' (razón de la decisión) y verificar si los hechos del nuevo caso son sustancialmente similares.
```

### 3 — La falacia de la autoridad (Argumentum ad verecundiam)
```
metadata:
  materia: "derecho"
  tema: "argumentacion_juridica"
  nivel: "basico"
  tags: ["falacias", "logica"]

respuesta: falso
tipo: vf

enunciado: "Si un abogado cita la opinión de un jurista prestigioso para sustentar una tesis, el argumento es automáticamente válido y vinculante, independientemente de si la opinión es doctrina o jurisprudencia."

explicacion: |
  Falso. La opinión de un jurista es doctrina (autoridad científica), pero no tiene fuerza vinculante como la ley o la jurisprudencia. Citar autoridad sin conectar la razón jurídica con el caso constituye una falacia de autoridad.
```

### 4 — Estructura del silogismo jurídico
```
metadata:
  materia: "derecho"
  tema: "argumentacion_juridica"
  nivel: "intermedio"
  tags: ["silogismo", "estructura", "logica"]

respuesta: ["Premisa mayor", "Premisa menor", "Conclusión"]
tipo: ordenar
opciones_explicitas: ["Premisa mayor", "Premisa menor", "Conclusión"]

enunciado: "Para construir un silogismo jurídico válido y evitar errores de lógica formal, se debe seguir este orden de construcción:"

explicacion: |
  1. Premisa mayor: La norma general. 2. Premisa menor: El hecho concreto encuadrado en la norma. 3. Conclusión: La consecuencia jurídica derivada de la subsunción.
```

### 5 — El error de la analogía incompleta
```
metadata:
  materia: "derecho"
  tema: "argumentacion_juridica"
  nivel: "avanzado"
  tags: ["analogia", "interpretacion"]

variables:
  escenario: uno_de([0, 1])

respuesta: uno_de([0, 1])[1]
tipo: mc
opciones_explicitas: ["La analogía es válida siempre que la laguna legal sea absoluta y no existan normas de principios.", "La analogía solo es lícita si existe identidad de razón entre el caso regulado y el caso no regulado, evitando la analogía in malam partem en derecho penal."]

enunciado: "En un argumento basado en la analogía, ¿cuál es el límite fundamental para evitar la arbitrariedad?"

explicacion: |
  El límite es la 'identidad de razón'. Además, en materias como el derecho penal, está prohibida la analogía para crear delitos o penas (principio de legalidad), lo que se conoce como prohibición de analogía 'in malam partem'.
```