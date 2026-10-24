# Derecho — Argumentacion juridica (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

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

respuesta: "precedente"
tipo: completar
respuestas_validas:
  - "precedente"
  - "argumento de autoridad"

enunciado: "Cuando un abogado utiliza una decisión previa de un tribunal superior para sustentar su postura, está recurriendo al ___."

pasos:
  - "Identificar la fuente de la autoridad (jurisprudencia o precedente)."
  - "Verificar la pertinencia del caso anterior con el caso actual."

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
respuesta_orden: ["Premisa Normativa", "Premisa Fáctica", "Conclusión"]

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

### 6 — La estructura del silogismo jurídico

```
metadata:
  materia: "derecho"
  tema: "argumentacion_juridica"
  nivel: "intermedio"
  tags: ["silogismo", "logica_juridica"]

respuesta: "premisa_mayor"
tipo: completar
respuestas_validas:
  - "premisa_mayor"
  - "premisa_menor"
  - "conclusión"

enunciado: "En un silogismo jurídico, la norma general o ley aplicable se denomina ___."

explicacion: |
  El silogismo jurídico consta de tres partes: la premisa mayor (la norma), la premisa menor (el hecho probado) y la conclusión (la consecuencia jurídica resultante de aplicar la norma al hecho).
```

### 7 — Validez de la interpretación analógica

```
metadata:
  materia: "derecho"
  tema: "argumentacion_juridica"
  nivel: "avanzado"
  tags: ["analogia", "interpretacion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Se aplica una norma de un contrato de compraventa a uno de permuta por similitud de objeto.", "falso"], ["Se aplica una norma de derecho penal para sancionar una conducta no prevista por analogia in malam partem.", "falso"]]

respuesta: escenarios[escenario_idx][1]
tipo: completar
enunciado: "En el escenario donde {escenarios[escenario_idx][0]}, la aplicación analógica de la norma es jurídicamente válida para crear nuevas obligaciones."

explicacion: |
  La analogía es válida en derecho civil/administrativo para llenar lagunas, pero está prohibida en derecho penal cuando la interpretación es 'in malam partem' (perjudicial para el reo). En ambos casos presentados, la afirmación de validez es falsa según la doctrina general.
```

### 8 — Jerarquía en la argumentación

```
metadata:
  materia: "derecho"
  tema: "argumentacion_juridica"
  nivel: "basico"
  tags: ["jerarquia", "normas"]

respuesta: "Constitución Nacional"
tipo: mc
opciones_explicitas: ["Constitución Nacional", "Decreto Reglamentario", "Resolución Ministerial", "Contrato entre partes"]

enunciado: "Si un juez debe resolver una contradicción entre una norma de rango constitucional y un decreto administrativo, debe priorizar la ___."

explicacion: |
  De acuerdo al principio de jerarquía normativa (Pirámide de Kelsen), la Constitución es la norma suprema y prevalece sobre cualquier norma de inferior rango.
```

### 9 — Pasos para la construcción de un precedente

```
metadata:
  materia: "derecho"
  tema: "argumentacion_juridica"
  nivel: "intermedio"
  tags: ["precedente", "ratio_decidendi"]

respuesta_orden: ["Identificación de los hechos relevantes", "Determinación de la ratio decidendi", "Extracción del principio jurídico", "Aplicación al caso actual"]
tipo: ordenar

opciones_explicitas: ["Identificación de los hechos relevantes", "Determinación de la ratio decidendi", "Extracción del principio jurídico", "Aplicación al caso actual"]

enunciado: "Para utilizar un precedente judicial de forma sólida en un nuevo argumento, se debe seguir este orden lógico:"

explicacion: |
  Para aplicar un precedente no basta con citar la sentencia; se debe identificar primero los hechos (fáctico), luego el núcleo de la decisión (ratio decidendi), extraer la regla de derecho y finalmente aplicarla al nuevo caso.
```

### 10 — El peso de la prueba en la argumentación

```
metadata:
  materia: "derecho"
  tema: "argumentacion_juridica"
  nivel: "intermedio"
  tags: ["carga_de_la_prueba", "argumentacion"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["El demandado alega un hecho extintivo de la obligación.", "verdadero"], ["El actor afirma la existencia de un contrato verbal.", "falso"]]

respuesta: casos[caso_idx][1]
tipo: completar
enunciado: "En el caso donde {casos[caso_idx][0]}, la carga de la prueba recae sobre el demandado (quien debe probar el hecho que afirma)."

explicacion: |
  Según la carga de la prueba, quien afirma un hecho debe probarlo. Sin embargo, si el demandado alega un hecho nuevo que extingue la obligación (ej. pago o prescripción), la carga de la prueba se traslada a él.
```

### 11 — La jerarquía normativa en la argumentación

```
metadata:
  materia: "derecho"
  tema: "argumentacion_juridica"
  nivel: "intermedio"
  tags: ["jerarquia", "normas", "argumentacion"]

respuesta: "Constitución"
tipo: completar
respuestas_validas:
  - "Constitución"

enunciado: "En un sistema de argumentación jurídica basado en la jerarquía de Kelsen, ninguna norma puede contradecir a la ___."

explicacion: |
  La Constitución es la norma de máxima jerarquía (norma fundamental). Un argumento jurídico sólido debe respetar la supremacía constitucional para evitar la invalidez de la norma inferior.
```

### 12 — Precedente vs. Ley

```
metadata:
  materia: "derecho"
  tema: "argumentacion_juridica"
  nivel: "intermedio"
  tags: ["precedente", "jurisprudencia", "fuentes"]

tipo: mc
opciones_explicitas: ["El precedente es una norma de aplicación general e inmediata para todos los casos futuros.", "El precedente es una guía interpretativa que debe ser analizada caso por caso según su ratio decidendi."]

respuesta: "El precedente es una guía interpretativa que debe ser analizada caso por caso según su ratio decidendi."

enunciado: "Al utilizar la jurisprudencia como fuente de argumentación, ¿cuál es el error más común al aplicar un precedente?"

explicacion: |
  No se debe aplicar un precedente de forma mecánica (subsunción automática). Un argumento sólido requiere identificar la 'ratio decidendi' (razón de la decisión) y verificar si los hechos del nuevo caso son sustancialmente similares.
```

### 13 — La falacia de la autoridad (Argumentum ad verecundiam)

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

### 14 — Estructura del silogismo jurídico

```
metadata:
  materia: "derecho"
  tema: "argumentacion_juridica"
  nivel: "intermedio"
  tags: ["silogismo", "estructura", "logica"]

respuesta_orden: ["Premisa mayor", "Premisa menor", "Conclusión"]
tipo: ordenar
opciones_explicitas: ["Premisa mayor", "Premisa menor", "Conclusión"]

enunciado: "Para construir un silogismo jurídico válido y evitar errores de lógica formal, se debe seguir este orden de construcción:"

explicacion: |
  1. Premisa mayor: La norma general. 2. Premisa menor: El hecho concreto encuadrado en la norma. 3. Conclusión: La consecuencia jurídica derivada de la subsunción.
```

### 15 — El error de la analogía incompleta

```
metadata:
  materia: "derecho"
  tema: "argumentacion_juridica"
  nivel: "avanzado"
  tags: ["analogia", "interpretacion"]

tipo: mc
opciones_explicitas: ["La analogía es válida siempre que la laguna legal sea absoluta y no existan normas de principios.", "La analogía solo es lícita si existe identidad de razón entre el caso regulado y el caso no regulado, evitando la analogía in malam partem en derecho penal."]

respuesta: "La analogía solo es lícita si existe identidad de razón entre el caso regulado y el caso no regulado, evitando la analogía in malam partem en derecho penal."

enunciado: "En un argumento basado en la analogía, ¿cuál es el límite fundamental para evitar la arbitrariedad?"

explicacion: |
  El límite es la 'identidad de razón'. Además, en materias como el derecho penal, está prohibida la analogía para crear delitos o penas (principio de legalidad), lo que se conoce como prohibición de analogía 'in malam partem'.
```

### 16 — Argumento vs. Opinión

```
metadata:
  materia: "derecho"
  tema: "argumentacion_juridica"
  nivel: "basico"
  tags: ["fundamentos", "logica"]

respuesta: "argumento"
tipo: "completar"
respuestas_validas:
  - "argumento"

enunciado: "Mientras que una opinión es una manifestación subjetiva de un juicio de valor, un ___ se construye mediante el uso de premisas normativas y hechos probados para llegar a una conclusión jurídica."

explicacion: |
  La diferencia fundamental radica en la fundamentación. La opinión no requiere de una estructura lógica ni de la aplicación de una norma, mientras que el argumento jurídico debe derivar necesariamente de la norma aplicada al caso concreto.
```

### 17 — Silogismo Jurídico

```
metadata:
  materia: "derecho"
  tema: "argumentacion_juridica"
  nivel: "intermedio"
  tags: ["silogismo", "estructura"]

variables:
  escenario: uno_de([["La norma prohíbe conducir ebrio", "El sujeto conducía con 0.8 g/l", "El sujeto es culpable"], ["La ley otorga propiedad a quien compra", "Juan compró la casa con escritura", "Juan es el dueño"], ["El contrato exige firma para validez", "El contrato no tiene firma", "El contrato es nulo"]])

respuesta: "premisa_mayor"
tipo: "mc"
opciones_explicitas: ["premisa_mayor", "premisa_menor", "conclusión"]

enunciado: "En el silogismo jurídico aplicado al escenario {escenario[0]}, la afirmación '{escenario[0]}' representa la: "

explicacion: |
  La estructura del silogismo jurídico consta de: 1) Premisa mayor (la norma), 2) Premisa menor (el hecho/subsunción) y 3) Conclusión (la consecuencia jurídica).
```

### 18 — Precedente vs. Doctrina

```
metadata:
  materia: "derecho"
  tema: "argumentacion_juridica"
  nivel: "avanzado"
  tags: ["precedente", "doctrina"]

respuesta: verdadero
tipo: "vf"

enunciado: "A diferencia de la doctrina (que es la opinión de los estudiosos del derecho), el precedente judicial es una decisión vinculante que establece una regla de interpretación para casos futuros similares."

explicacion: |
  La doctrina no tiene fuerza obligatoria por sí misma, mientras que el precedente (dependiendo del sistema jurídico, como el Common Law o la jurisprudencia vinculante en Civil Law) es una fuente de derecho que debe ser respetada por los jueces.
```

### 19 — Argumento Analógico vs. A Contrario

```
metadata:
  materia: "derecho"
  tema: "argumentacion_juridica"
  nivel: "avanzado"
  tags: ["interpretacion", "logica"]

respuesta: "a_contrario"
tipo: "mc"
opciones_explicitas: ["analogia", "a_contrario", "a_significatio"]

enunciado: "Si un abogado sostiene que, dado que la norma prohíbe el ingreso de 'perros' a un recinto, se entiende que también se prohíbe el ingreso de 'gatos' por una similitud de naturaleza, está usando analogía. Si, por el contrario, sostiene que como la norma dice 'perros', se entiende que se permite todo lo que NO sea un perro, está utilizando el argumento: "

explicacion: |
  El argumento 'a contrario' establece que la norma es excluyente: si la ley regula una situación específica, se entiende que excluye a todas aquellas que no encajen en esa descripción.
```

### 20 — Pasos de la Subsunción Jurídica

```
metadata:
  materia: "derecho"
  tema: "argumentacion_juridica"
  nivel: "intermedio"
  tags: ["subsuncion", "metodologia"]

tipo: "ordenar"
opciones_explicitas: ["enunciado_normativo", "enunciado_fáctico", "subsunción", "conclusión"]
respuesta_orden: ["enunciado_normativo", "enunciado_fáctico", "subsunción", "conclusión"]

enunciado: "Para construir un argumento sólido mediante la técnica de la subsunción, el jurista debe seguir este orden lógico de elementos:"

explicacion: |
  El proceso requiere primero identificar la norma (premisa mayor), luego los hechos probados (premisa menor), realizar el encuadre o subsunción (verificar si el hecho encaja en la norma) y finalmente dictar la consecuencia jurídica.
```

### 21 — Validez del argumento por jerarquía

```
metadata:
  materia: "derecho"
  tema: "argumentacion_juridica"
  nivel: "intermedio"
  tags: ["jerarquia_normativa", "constitucionalidad"]

variables:
  escenario: uno_de([["Una ley provincial contradice la Constitución Nacional.", "inconstitucional"], ["Un decreto reglamentario contradice la Ley Nacional.", "ilegal"], ["Un reglamento municipal contradice una Ley Provincial.", "inválido"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["inconstitucional", "ilegal", "inválido"]

enunciado: "De acuerdo al principio de jerarquía normativa, si {escenario[0]}, el argumento jurídico debe concluir que la norma inferior es ___."

explicacion: |
  En el sistema jurídico, la norma de mayor rango (como la Constitución) prevalece sobre las de menor rango. Un argumento sólido debe identificar la norma superior para invalidar la inferior.
```

### 22 — Estructura del Silogismo Jurídico

```
metadata:
  materia: "derecho"
  tema: "logica_juridica"
  nivel: "basico"
  tags: ["silogismo", "premisa_mayor", "premisa_menor"]

variables:
  silogismo: uno_de([["La norma establece una sanción para el robo. Juan robó. Por tanto, Juan debe ser sancionado.", "Juan robó", "premisa_menor"], ["El contrato exige firma para ser válido. El contrato no tiene firma. Por tanto, es nulo.", "El contrato exige firma para ser válido", "premisa_mayor"], ["La ley prohíbe conducir sin licencia. Pedro no tiene licencia. Por tanto, Pedro infringe la ley.", "Pedro no tiene licencia", "premisa_menor"]])

respuesta: silogismo[2]
tipo: completar
respuestas_validas:
  - "premisa_menor"
  - "premisa_mayor"
enunciado: "En el siguiente silogismo: '{silogismo[0]}', el elemento '{silogismo[1]}' actúa como la ___ (la subsunción del hecho a la norma)."

explicacion: |
  El silogismo jurídico se compone de la premisa mayor (la norma), la premisa menor (el hecho) y la conclusión. La subsunción es el proceso de encuadrar el hecho en la norma.
```

### 23 — Uso de Precedentes

```
metadata:
  materia: "derecho"
  tema: "precedentes_judiciales"
  nivel: "avanzado"
  tags: ["stare_decisis", "argumentacion"]

variables:
  caso: uno_de([["Un fallo de la Corte Suprema sobre libertad de expresión.", "obligatorio"], ["Una sentencia de un juzgado de primera instancia sobre un contrato.", "persuasivo"], ["Un dictamen de un tribunal administrativo sobre un trámite.", "persuasivo"]])

respuesta: caso[1]
tipo: mc
opciones_explicitas: ["obligatorio", "persuasivo", "irrelevante"]

enunciado: "Al construir un argumento basado en la jurisprudencia, si se cita {caso[0]}, el valor del precedente para el juez es ___."

explicacion: |
  Los precedentes de tribunales superiores (como la Corte) suelen tener carácter obligatorio (stare decisis), mientras que los de instancias inferiores o administrativas sirven como argumento persuasivo.
```

### 24 — Elementos de la Argumentación

```
metadata:
  materia: "derecho"
  tema: "argumentacion_juridica"
  nivel: "intermedio"
  tags: ["argumentos", "autoridad", "razonamiento"]

tipo: ordenar
opciones_explicitas: ["Premisa Mayor", "Premisa Menor", "Conclusión"]
respuesta_orden: ["Premisa Mayor", "Premisa Menor", "Conclusión"]

enunciado: "Ordene los elementos necesarios para construir un argumento jurídico deductivo sólido, desde la norma general hasta el caso concreto:"

pasos:
  - "El hecho concreto aplicado a la norma."
  - "La consecuencia jurídica derivada."
  - "La norma o precepto legal general."

explicacion: |
  El orden lógico deductivo requiere primero la norma (mayor), luego el hecho (menor) y finalmente la consecuencia (conclusión).
```

### 25 — Identificación de la Falacia

```
metadata:
  materia: "derecho"
  tema: "fallos_en_la_argumentacion"
  nivel: "intermedio"
  tags: ["falacias", "argumentacion_logica"]

variables:
  falacia: uno_de([["El abogado dice: 'Es culpable porque siempre miente'.", "ad_hominem"], ["El abogado dice: 'Es culpable porque todos los vecinos dicen que es malo'.", "ad_populum"]])

respuesta: falacia[1]
tipo: completar
respuestas_validas:
  - "ad_hominem"
  - "ad_populum"

enunciado: "Si un abogado argumenta que: '{falacia[0]}', está incurriendo en una falacia de tipo ___."

explicacion: |
  La falacia ad hominem ataca a la persona y no al argumento, mientras que la ad populum apela a la mayoría para validar una conclusión.
```
