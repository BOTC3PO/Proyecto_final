### 1 — El sentido de la norma en el caso concreto
```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "intermedio"
  tags: ["interpretacion", "aplicacion", "norma"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["una norma que prohíbe vehículos en parques", "prohibición"], ["una norma que regula el uso de drones", "regulación"]]
  escenario: datos[escenario_idx][0]
  tipo_norma: datos[escenario_idx][1]

respuesta: tipo_norma
tipo: mc
opciones_explicitas: ["prohibición", "regulación", "exención", "derogación"]

enunciado: "Ante el escenario de {escenario}, el intérprete debe determinar si el alcance de la norma es de {tipo_norma}."

explicacion: |
  La interpretación normativa busca determinar el sentido de la norma (su contenido) y su alcance (su aplicación) frente a un hecho concreto.
```

### 2 — El método de interpretación gramatical
```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "basico"
  tags: ["gramatical", "literalidad"]

respuesta: "literal"
tipo: mc
opciones_explicitas: ["literal", "teleológica", "sistemática", "histórica"]

enunciado: "Cuando un juez se limita a analizar el significado semántico y sintáctico de las palabras de la ley para determinar su sentido, está aplicando una interpretación de tipo ___."

explicacion: |
  La interpretación gramatical o literal se centra exclusivamente en el texto de la norma y el significado de sus términos.
```

### 3 — Interpretación Teleológica vs. Gramatical
```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "avanzado"
  tags: ["teleologica", "finalidad"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["la norma busca proteger la vida", "finalidad"], ["la norma busca proteger el patrimonio", "finalidad"]]
  objetivo: casos[caso_idx][0]

respuesta: "finalidad"
tipo: completar
respuestas_validas: ["finalidad"]

enunciado: "Si el intérprete se enfoca en el ___ de la norma (el 'porqué' o el espíritu de la ley) para resolver una laguna, está realizando una interpretación teleológica."

explicacion: |
  La interpretación teleológica busca la finalidad o el espíritu de la norma para asegurar que la aplicación sea coherente con el objetivo del legislador.
```

### 4 — Verdad o Falsedad: Interpretación Sistemática
```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "intermedio"
  tags: ["sistemática", "coherencia"]

respuesta: falso
tipo: vf

enunciado: "La interpretación sistemática sostiene que una norma debe entenderse de forma aislada, sin considerar su relación con el resto del ordenamiento jurídico."

explicacion: |
  Falso. La interpretación sistemática establece que la norma es parte de un todo y debe interpretarse en armonía con el sistema jurídico completo.
```

### 5 — Pasos para la aplicación de la norma
```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "intermedio"
  tags: ["metodologia", "proceso"]

respuesta: ["Subsunción del hecho", "Interpretación de la norma", "Determinación del sentido", "Resolución del caso"]
tipo: ordenar
opciones_explicitas: ["Subsunción del hecho", "Interpretación de la norma", "Determinación del sentido", "Resolución del caso"]

enunciado: "Ordene los pasos lógicos que sigue un aplicador del derecho para resolver un conflicto jurídico:"

explicacion: |
  El proceso requiere primero entender el significado de la norma (interpretación), luego determinar su alcance, aplicar ese sentido al hecho (subsunción) y finalmente dictar la resolución.
```