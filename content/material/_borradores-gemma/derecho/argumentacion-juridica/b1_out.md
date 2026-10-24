### 1 — Concepto de Argumentación Jurídica
```
metadata:
  materia: "derecho"
  tema: "argumentacion_juridica"
  nivel: "basico"
  tags: ["conceptos_clave", "teoria_del_derecho"]

tipo: mc
opciones_explicitas: ["El proceso de justificación de una decisión mediante razones", "La aplicación mecánica de la ley sin razonamiento", "La imposición de la voluntad del juez sobre la norma", "Un conjunto de normas sin interpretación"]

respuesta: "El proceso de justificación de una decisión mediante razones"

enunciado: "La argumentación jurídica se define fundamentalmente como ___"

explicacion: |
  La argumentación jurídica no es una mera aplicación mecánica de la norma, sino un proceso de razonamiento orientado a justificar una decisión mediante la entrega de razones válidas.
```

### 2 — El Silogismo Jurídico
```
metadata:
  materia: "derecho"
  tema: "argumentacion_juridica"
  nivel: "basico"
  tags: ["logica_juridica", "silogismo"]

tipo: vf
respuesta: falso

enunciado: "En el silogismo jurídico, la premisa mayor es el hecho concreto ocurrido en la realidad, mientras que la premisa menor es la norma aplicable."

explicacion: |
  Es falso. En el silogismo jurídico, la premisa mayor es la norma (el precepto legal) y la premisa menor es el hecho (el caso concreto).
```

### 3 — Estructura del Argumento Legal
```
metadata:
  materia: "derecho"
  tema: "argumentacion_juridica"
  nivel: "intermedio"
  tags: ["estructura", "precedentes"]

variables:
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: [datos[idx][1]]

enunciado: "Cuando un abogado utiliza una decisión previa de un tribunal superior para sustentar su postura, está recurriendo al ___."

pasos:
  - "Identificar la fuente de la autoridad (jurisprudencia o precedente)."
  - "Verificar la pertinencia del caso anterior con el caso actual."

datos:
  - ["precedente", "precedente"]
  - ["argumento de autoridad", "argumento de autoridad"]

explicacion: |
  El uso de decisiones previas es la base de la doctrina del precedente, permitiendo la predictibilidad del sistema jurídico.
```

### 4 — Componentes de la Argumentación
```
metadata:
  materia: "derecho"
  tema: "argumentacion_juridica"
  nivel: "basico"
  tags: ["terminologia"]

tipo: ordenar
opciones_explicitas: ["Premisa Normativa", "Premisa Fáctica", "Conclusión"]
respuesta: ["Premisa Normativa", "Premisa Fáctica", "Conclusión"]

enunciado: "Ordene los elementos lógicos que componen la estructura de un argumento jurídico estándar:"

explicacion: |
  La estructura lógica requiere primero la norma (Normativa), luego la verificación de los hechos (Fáctica) y finalmente la subsunción que lleva a la resolución (Conclusión).
```

### 5 — Validez vs. Acierto
```
metadata:
  materia: "derecho"
  tema: "argumentacion_juridica"
  nivel: "intermedio"
  tags: ["logica", "validez"]

tipo: mc
opciones_explicitas: ["La coherencia lógica de la estructura del argumento", "La verdad material de los hechos presentados", "La opinión personal del juzgador", "La cantidad de leyes citadas"]

respuesta: "La coherencia lógica de la estructura del argumento"

enunciado: "En lógica jurídica, cuando un argumento sigue correctamente las reglas de inferencia pero sus premisas son cuestionables, se dice que el argumento es ___ pero no necesariamente ___."

explicacion: |
  Un argumento puede ser formalmente válido (lógicamente correcto) pero carecer de solidez si sus premisas fácticas o normativas son falsas o incorrectas.
```