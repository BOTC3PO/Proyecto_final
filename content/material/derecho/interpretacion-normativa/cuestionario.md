# Derecho — Interpretacion normativa (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de interpretación normativa

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "basico"
  tags: ["conceptos", "teoria_del_derecho"]

respuesta: "desentrañar el sentido y el alcance de la norma"
tipo: completar
respuestas_validas:
  - "desentrañar el sentido y el alcance de la norma"
  - "determinar el sentido y el alcance de la norma"

enunciado: "La interpretación normativa es la actividad intelectual consistente en ___ para aplicarla a un caso concreto."

explicacion: |
  Interpretar una norma no es solo leerla, sino determinar qué significa y hasta dónde llega su aplicación en un contexto específico.
```

### 2 — Elementos de la interpretación

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "basico"
  tags: ["elementos", "metodologia"]

respuesta: "gramatical"
tipo: mc
opciones_explicitas: ["gramatical", "teleologica", "sistemática"]

enunciado: "Cuando un juez busca el sentido de la norma basándose exclusivamente en el significado de las palabras utilizadas en el texto, ¿qué tipo de interpretación está realizando?"

explicacion: |
  La interpretación gramatical o literal se centra en el tenor semántico de las palabras del texto normativo.
```

### 3 — El alcance de la norma

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "intermedio"
  tags: ["alcance", "aplicacion"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es correcto afirmar que la interpretación normativa busca determinar tanto el significado (sentido) como el alcance (ámbito de aplicación) de una norma?"

explicacion: |
  Efectivamente, la interpretación tiene una doble dimensión: el contenido semántico (qué dice) y la extensión de su aplicación (a quiénes y en qué situaciones alcanza).
```

### 4 — Métodos de interpretación

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "intermedio"
  tags: ["metodos", "orden"]

opciones_explicitas: ["Análisis del texto", "Identificación del problema", "Aplicación al caso concreto"]
respuesta_orden: ["Análisis del texto", "Identificación del problema", "Aplicación al caso concreto"]
tipo: ordenar

enunciado: "Ordene lógicamente los pasos que sigue un aplicador del derecho al realizar un proceso de interpretación y aplicación normativa:"

explicacion: |
  El proceso comienza con la comprensión del texto, sigue con la detección de la controversia jurídica y culmina con la subsunción o aplicación de la norma al hecho.
```

### 5 — Interpretación Teleológica

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "avanzado"
  tags: ["teleologica", "finalidad"]

respuesta: "teleológica"
tipo: mc
opciones_explicitas: ["gramatical", "teleológica", "sistemática", "histórica"]

enunciado: "Si un intérprete busca el sentido de la norma atendiendo a los fines o propósitos para los cuales fue creada (el 'espíritu' de la ley), ¿qué tipo de interpretación está realizando?"

explicacion: |
  La interpretación teleológica se centra en la finalidad (telos) de la norma, ya sea la intención original del legislador o la finalidad social/actual de la norma en la comunidad.
```

### 6 — El sentido de la norma

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "basico"
  tags: ["interpretacion", "hermeneutica"]

respuesta: "gramatical"
tipo: completar
respuestas_validas:
  - "gramatical"
  - "teleologica"
  - "sistemática"

enunciado: "Cuando un juez se limita a analizar el significado literal de las palabras utilizadas en un precepto legal para determinar su alcance, está aplicando un método de interpretación de tipo ___."

explicacion: |
  El método gramatical o literal es el primer paso de la interpretación; consiste en analizar la sintaxis y el semántica del texto normativo para hallar su sentido inmediato.
```

### 7 — Interpretación Teleológica

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "intermedio"
  tags: ["finalidad", "ratio_legis"]

respuesta: "finalidad"
tipo: completar
respuestas_validas:
  - "finalidad"
  - "fin"
  - "propósito"

enunciado: "La interpretación teleológica busca determinar el significado de la norma basándose en su ___ (el 'espíritu' de la ley)."

explicacion: |
  La interpretación teleológica (o finalista) busca el 'espíritu' de la ley, es decir, el fin o la finalidad (ratio legis) para la cual fue creada la norma.
```

### 8 — El método sistemático

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "intermedio"
  tags: ["sistema", "coherencia"]

respuesta: "sistemática"
tipo: mc
opciones_explicitas: ["gramatical", "sistemática", "histórica", "evolutiva"]

enunciado: "Un abogado sostiene que una norma no puede entenderse de forma aislada, sino que debe integrarse con el resto del ordenamiento jurídico para evitar contradicciones. ¿Qué método está utilizando?"

explicacion: |
  La interpretación sistemática considera que la norma es parte de un todo (el sistema jurídico) y que su sentido se completa al relacionarla con otras normas del mismo cuerpo legal.
```

### 9 — Pasos de la aplicación normativa

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "avanzado"
  tags: ["procedimiento", "subsunción"]

respuesta_orden: ["Subsunción", "Interpretación", "Fijación del hecho"]
tipo: ordenar
opciones_explicitas: ["Subsunción", "Interpretación", "Fijación del hecho"]

enunciado: "Ordene correctamente los pasos lógicos para aplicar una norma a un caso concreto, desde la recepción del hecho hasta la decisión final."

explicacion: |
  Primero se deben fijar los hechos (fase fáctica), luego interpretar la norma para entender su alcance (fase normativa) y finalmente realizar la subsunción (encuadramiento del hecho en la norma).
```

### 10 — Interpretación Histórica

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "basico"
  tags: ["historia", "legislador"]

respuesta: verdadero
tipo: vf

enunciado: "La interpretación histórica consiste en analizar los antecedentes de la norma, como los debates parlamentarios o la exposición de motivos, para comprender la voluntad del legislador original."

explicacion: |
  Correcto. Este método busca reconstruir la intención del legislador analizando el contexto y los documentos que dieron origen a la norma.
```

### 11 — El error de la literalidad extrema

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "intermedio"
  tags: ["hermeneutica", "literalismo"]

respuesta: "error"
tipo: "mc"
opciones_explicitas: ["error", "método_correcto", "interpretación_teleológica", "interpretación_gramatical"]

enunciado: "Cuando un aplicador del derecho se limita exclusivamente al significado semántico de las palabras de la norma, ignorando el espíritu o la finalidad de la ley, está incurriendo en un _________ de interpretación."

explicacion: |
  La interpretación puramente gramatical o literal puede llevar a absurdos jurídicos si no se considera la finalidad (ratio legis) de la norma.
```

### 12 — Verdad o Falso: La norma vs. el texto

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "basico"
  tags: ["teoria_del_derecho"]

respuesta: falso
tipo: "vf"

enunciado: "¿Es correcto afirmar que la 'norma' y el 'texto de la ley' son conceptos idénticos en el proceso de interpretación?"

explicacion: |
  Falso. El texto es el soporte lingüístico (el enunciado), mientras que la norma es el significado o sentido que se extrae de ese texto tras el proceso interpretativo.
```

### 13 — El proceso de integración

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "avanzado"
  tags: ["lagunas", "analogia"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["existe una laguna legal", "analogía"], ["la norma es ambigua", "interpretación sistemática"]]

respuesta: datos[escenario_idx][1]
tipo: "completar"
respuestas_validas:
  - "analogía"
  - "interpretación sistemática"

enunciado: "Si al aplicar una norma a un caso concreto se detecta que no hay una disposición aplicable para ese supuesto (laguna), el juez debe recurrir a la _________ para resolver."

explicacion: |
  La analogía permite aplicar una norma que regula un caso similar a uno que no está regulado, siempre que exista la misma razón de ser.
```

### 14 — El orden de los factores interpretativos

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "intermedio"
  tags: ["metodologia"]

respuesta_orden: ["gramatical", "lógica", "sistemática", "histórica"]
tipo: "ordenar"
opciones_explicitas: ["gramatical", "lógica", "sistemática", "histórica"]

enunciado: "Ordene los métodos de interpretación de la ley desde el más básico (estudio del lenguaje) hasta el más complejo (relación con el ordenamiento completo):"

explicacion: |
  El proceso interpretativo suele comenzar por la gramática, sigue con la lógica (finalidad), se integra con el sistema jurídico y finalmente revisa el contexto histórico.
```

### 15 — El alcance de la interpretación sistemática

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "intermedio"
  tags: ["coherencia", "sistema_juridico"]

respuesta: falso
tipo: "vf"

enunciado: "¿La interpretación sistemática sostiene que una norma debe entenderse de forma aislada, sin considerar su relación con otras normas del mismo ordenamiento?"

explicacion: |
  Falso. La interpretación sistemática parte de la premisa de que el ordenamiento es un todo coherente y que cada norma debe interpretarse en relación con las demás.
```

### 16 — Interpretación vs. Integración

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "intermedio"
  tags: ["teoria_del_derecho", "interpretacion"]

respuesta: "integración"
tipo: completar
respuestas_validas:
  - "integración"
  - "integracion"

enunciado: "Mientras que la interpretación normativa busca determinar el sentido y alcance de una norma existente, la ___ se utiliza cuando existen lagunas legales para llenar los vacíos del ordenamiento."

explicacion: |
  La interpretación se aplica cuando la norma está presente pero su sentido es ambiguo. La integración se aplica cuando no hay norma aplicable al caso (laguna).
```

### 17 — Métodos de interpretación

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "basico"
  tags: ["metodos", "hermeneutica"]

tipo: mc
opciones_explicitas: ["gramatical", "teleologica", "sistemática", "histórica"]

respuesta: "gramatical"

enunciado: "Si un juez decide interpretar una norma centrándose exclusivamente en el significado de las palabras utilizadas en el texto legal, está aplicando un método de tipo ___."

explicacion: |
  El método gramatical o literal se limita al análisis semántico de las palabras del texto.
```

### 18 — Verdad jurídica vs. Verdad real

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "avanzado"
  tags: ["verdad", "proceso_judicial"]

respuesta: falso

tipo: vf

enunciado: "En el proceso de interpretación normativa para la aplicación de la ley, el juez debe buscar siempre la 'verdad real' (lo que ocurrió exactamente en la realidad física), incluso si esta contradice las pruebas obtenidas legalmente."

explicacion: |
  En derecho, la interpretación se realiza sobre la 'verdad jurídica' o procesal, que es la reconstrucción de los hechos basada en las pruebas válidas dentro del proceso.
```

### 19 — Elementos de la interpretación

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "intermedio"
  tags: ["elementos", "hermeneutica"]

respuesta: "sistemática"
tipo: completar
respuestas_validas:
  - "sistemática"
  - "sistematica"

enunciado: "Cuando la interpretación no se limita a la norma aislada, sino que busca su sentido analizando su relación con el resto del ordenamiento jurídico, se está utilizando una interpretación ___."

explicacion: |
  La interpretación sistemática considera la norma como parte de un todo coherente y no como un elemento aislado.
```

### 20 — Jerarquía de criterios

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "avanzado"
  tags: ["jerarquia", "criterios"]

respuesta_orden: ["Constitución", "Ley", "Reglamento", "Sentencia"]
tipo: ordenar

opciones_explicitas: ["Constitución", "Ley", "Reglamento", "Sentencia"]

enunciado: "Ordene los siguientes ordenamientos de mayor a menor jerarquía para determinar el alcance de una norma en un conflicto de leyes:"

explicacion: |
  La jerarquía normativa (Pirámide de Kelsen) establece que la Constitución es la norma suprema, seguida por las leyes, luego los reglamentos y finalmente los actos administrativos o sentencias en su aplicación específica.
```

### 21 — El sentido de la norma en el caso concreto

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

enunciado: "Ante el escenario de {escenario}, ¿de qué tipo es el alcance de la norma que el intérprete debe determinar?"

explicacion: |
  La interpretación normativa busca determinar el sentido de la norma (su contenido) y su alcance (su aplicación) frente a un hecho concreto.
```

### 22 — El método de interpretación gramatical

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

### 23 — Interpretación Teleológica vs. Gramatical

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "avanzado"
  tags: ["teleologica", "finalidad"]

respuesta: "finalidad"
tipo: completar
respuestas_validas:
  - "finalidad"

enunciado: "Si el intérprete se enfoca en el ___ de la norma (el 'porqué' o el espíritu de la ley) para resolver una laguna, está realizando una interpretación teleológica."

explicacion: |
  La interpretación teleológica busca la finalidad o el espíritu de la norma para asegurar que la aplicación sea coherente con el objetivo del legislador.
```

### 24 — Verdad o Falsedad: Interpretación Sistemática

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

### 25 — Pasos para la aplicación de la norma

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "intermedio"
  tags: ["metodologia", "proceso"]

respuesta_orden: ["Subsunción del hecho", "Interpretación de la norma", "Determinación del sentido", "Resolución del caso"]
tipo: ordenar
opciones_explicitas: ["Subsunción del hecho", "Interpretación de la norma", "Determinación del sentido", "Resolución del caso"]

enunciado: "Ordene los pasos lógicos que sigue un aplicador del derecho para resolver un conflicto jurídico:"

explicacion: |
  El proceso requiere primero entender el significado de la norma (interpretación), luego determinar su alcance, aplicar ese sentido al hecho (subsunción) y finalmente dictar la resolución.
```
