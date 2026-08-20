# Derecho — Corrientes interpretacion juridica (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Corriente del derecho natural

```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "basico"
  tags: ["iusnaturalismo", "teoria_del_derecho"]

respuesta: verdadero
tipo: vf

enunciado: "El iusnaturalismo sostiene que existen principios morales universales e inmutables que son superiores al derecho positivo creado por el hombre."

explicacion: |
  El iusnaturalismo postula la existencia de un derecho natural (jusnaturalismo) basado en la razón o la naturaleza humana, que sirve como parámetro de validez para las leyes humanas.
```

### 2 — La validez de la norma

```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "basico"
  tags: ["iuspositivismo", "norma"]

variables:
  idx: uno_de([0, 1])
  datos: [[ "una norma es válida si ha sido creada por la autoridad competente siguiendo el procedimiento legal", "la validez de una norma depende de su concordancia con la moral" ], [ "la validez de una norma depende de su concordancia con la moral", "una norma es válida si ha sido creada por la autoridad competente siguiendo el procedimiento legal" ]]

respuesta: datos[idx][0]
tipo: mc
opciones_explicitas: ["una norma es válida si ha sido creada por la autoridad competente siguiendo el procedimiento legal", "la validez de una norma depende de su concordancia con la moral"]

enunciado: "Desde la perspectiva del iuspositivismo, {datos[idx][0]}"

explicacion: |
  Para el iuspositivismo, la validez de una norma es una cuestión de forma y procedencia (derecho puesto), separando la validez jurídica de la moralidad.
```

### 3 — El rol de los jueces

```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "intermedio"
  tags: ["realismo_juridico", "jueces"]

respuesta: "lo que los jueces hacen en la práctica"
tipo: completar
respuestas_validas:
  - "lo que los jueces hacen en la práctica"
  - "la conducta judicial efectiva"

enunciado: "Para el realismo jurídico, el derecho no es un conjunto de normas abstractas, sino ___."

explicacion: |
  El realismo jurídico desplaza el foco de la norma escrita hacia la conducta de los tribunales y la eficacia de las decisiones judiciales en la realidad social.
```

### 4 — Relación entre derecho y moral

```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "basico"
  tags: ["iuspositivismo", "iusnaturalismo"]

respuesta: falso
tipo: vf

enunciado: "El iuspositivismo defiende la tesis de la conexión necesaria entre el derecho y la moral."

explicacion: |
  Al contrario, el iuspositivismo sostiene la tesis de la separación, argumentando que la existencia de una norma no depende de su contenido moral.
```

### 5 — Evolución del pensamiento jurídico

```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "intermedio"
  tags: ["teoria_del_derecho", "ordenar"]

respuesta_orden: ["Derecho Natural", "Derecho Positivo", "Realismo Jurídico"]
tipo: ordenar
opciones_explicitas: ["Derecho Natural", "Derecho Positivo", "Realismo Jurídico"]

enunciado: "Ordene estas corrientes según su enfoque principal: de la búsqueda de principios universales hacia el enfoque en la eficacia de la decisión judicial."

explicacion: |
  El orden solicitado parte del Iusnaturalismo (principios universales), pasa por el Iuspositivismo (la norma escrita) y llega al Realismo Jurídico (la práctica judicial).
```

### 6 — El dilema de la norma injusta

```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "basico"
  tags: ["iuspositivismo", "iusnaturalismo"]

respuesta: "iusnaturalismo"
tipo: mc
opciones_explicitas: ["iuspositivismo", "iusnaturalismo", "realismo_juridico"]

enunciado: "Un juez se encuentra ante una ley que, aunque es válida y fue promulgada correctamente por el legislador, considera que es profundamente inmoral y viola los derechos humanos fundamentales. Si el juez decide que no puede aplicarla porque el derecho debe basarse en principios morales universales superiores a la norma escrita, está adoptando una postura de ___."

explicacion: |
  El iusnaturalismo sostiene que el derecho positivo (la ley escrita) solo es válido si es conforme a la justicia o a principios morales naturales. Si la ley es injusta, no es derecho.
```

### 7 — El caso del juez y la práctica judicial

```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "intermedio"
  tags: ["realismo_juridico"]

tipo: mc
opciones_explicitas: ["El juez decide basándose en la jurisprudencia predominante de su tribunal.", "El juez ignora la norma para seguir su propia convicción.", "El juez aplica la ley de forma mecánica sin considerar el contexto."]

respuesta: "El juez decide basándose en la jurisprudencia predominante de su tribunal."

enunciado: "Un estudioso del derecho observa que, ante una ley ambigua, los jueces de una ciudad siempre fallan a favor de las empresas locales para mantener la estabilidad económica. El estudioso concluye que el derecho no es la norma en el papel, sino la conducta de los jueces. ¿Cuál de las siguientes conductas judiciales ejemplifica mejor esta visión realista?"

explicacion: |
  El realismo jurídico sostiene que el derecho es lo que los jueces hacen en la práctica, desplazando la importancia de la norma abstracta por la realidad de la función judicial.
```

### 8 — La validez de la norma escrita

```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "basico"
  tags: ["iuspositivismo"]

respuesta: verdadero
tipo: vf

enunciado: "Desde la perspectiva del iuspositivismo estricto, la validez de una norma jurídica depende de su proceso de creación y su vigencia, independientemente de si su contenido es moral o inmoral."

explicacion: |
  Para el iuspositivismo, existe una separación conceptual entre el derecho y la moral. La validez es una cuestión de hechos (si fue dictada por la autoridad competente) y no de valores.
```

### 9 — Evolución de la interpretación

```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "intermedio"
  tags: ["metodologia"]

respuesta_orden: ["Identificar la norma escrita", "Analizar la moralidad de la norma", "Decidir la aplicación según principios superiores"]
tipo: ordenar

opciones_explicitas: ["Identificar la norma escrita", "Analizar la moralidad de la norma", "Decidir la aplicación según principios superiores"]

enunciado: "Un abogado que sigue la corriente del iusnaturalismo para impugnar una ley injusta debería seguir este orden de razonamiento:"

explicacion: |
  El iusnaturalista primero reconoce la norma positiva, luego la confronta con un sistema de valores morales superiores y finalmente concluye que la norma no debe aplicarse por ser contraria a la justicia.
```

### 10 — El vacío legal y la realidad

```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "avanzado"
  tags: ["realismo_juridico"]

respuesta: "El derecho es la acción judicial"
tipo: completar
respuestas_validas:
  - "El derecho es la acción judicial"

enunciado: "En un escenario de realismo jurídico, si un abogado quiere saber cómo se aplicará una nueva ley, no leerá solo el código, sino que estudiará cómo actúan los jueces. Para esta corriente, el derecho es ___."

explicacion: |
  El realismo jurídico desplaza el foco del texto legal hacia la conducta del funcionario judicial, considerando que la norma es solo una predicción de lo que el juez hará.
```

### 11 — El origen de la validez jurídica

```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "basico"
  tags: ["iuspositivismo", "iusnaturalismo"]

respuesta: "iusnaturalismo"
tipo: completar
respuestas_validas:
  - "iusnaturalismo"

enunciado: "La corriente que sostiene que la validez de una norma jurídica depende de su conformidad con principios morales o derechos universales superiores, independientemente de si ha sido promulgada por el Estado, es el ___."

explicacion: |
  El iusnaturalismo postula la existencia de un derecho natural superior al derecho positivo, basado en la moral o la razón.
```

### 12 — La separación entre moral y derecho

```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "intermedio"
  tags: ["iuspositivismo"]

respuesta: falso
tipo: vf

enunciado: "Para el iuspositivismo extremo, la validez de una norma jurídica está intrínsecamente condicionada a su contenido moral; es decir, una ley injusta no es ley."

explicacion: |
  Falso. El iuspositivismo sostiene la tesis de la separación: la validez de una norma depende de su origen formal y su vigencia, no de su contenido moral.
```

### 13 — El papel del juez en la aplicación del derecho

```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "intermedio"
  tags: ["realismo_juridico"]

variables:
  idx: uno_de([0, 1])
  datos: [["realismo jurídico", "El derecho es la predicción de lo que los jueces decidirán en la práctica."], ["formalismo jurídico", "El derecho es un conjunto de normas abstractas contenidas en los códigos."]]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["El derecho es un conjunto de normas abstractas contenidas en los códigos.", "El derecho es la predicción de lo que los jueces decidirán en la práctica."]

enunciado: "Según la perspectiva del {datos[idx][0]}, ¿cuál es la naturaleza del derecho?"

explicacion: |
  El realismo jurídico desplaza el foco de la norma escrita a la conducta real de los tribunales y los jueces.
```

### 14 — Confusión de conceptos: Iusnaturalismo vs. Iuspositivismo

```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "avanzado"
  tags: ["comparativa"]

respuesta: "El iuspositivismo busca la certeza jurídica mediante la norma escrita, mientras que el iusnaturalismo busca la justicia mediante la moral."
tipo: completar
respuestas_validas:
  - "El iuspositivismo busca la certeza jurídica mediante la norma escrita, mientras que el iusnaturalismo busca la justicia mediante la moral."

enunciado: "Una distinción fundamental es que ___."

explicacion: |
  El positivismo prioriza la seguridad jurídica y la estructura formal, mientras que el iusnaturalismo prioriza la justicia material.
```

### 15 — Evolución del pensamiento jurídico

```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "basico"
  tags: ["ordenar"]

respuesta_orden: ["Iusnaturalismo", "Iuspositivismo", "Realismo jurídico"]
tipo: ordenar
opciones_explicitas: ["Iusnaturalismo", "Iuspositivismo", "Realismo jurídico"]

enunciado: "Ordene estas corrientes según su enfoque principal: de la búsqueda de la justicia moral (primero) a la búsqueda de la eficacia judicial (último)."

explicacion: |
  El iusnaturalismo se centra en la moral (justicia), el iuspositivismo en la norma (ley escrita) y el realismo en la aplicación (hechos judiciales).
```

### 16 — Corrientes de la interpretación jurídica

```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "basico"
  tags: ["iuspositivismo", "iusnaturalismo", "realismo"]

respuesta: "iusnaturalismo"
tipo: "completar"
respuestas_validas:
  - "iusnaturalismo"

enunciado: "A diferencia del iuspositivismo, que sostiene que la validez de una norma depende exclusivamente de su origen formal y su vigencia, el ___ sostiene que existe un conjunto de principios morales universales superiores al derecho positivo."

explicacion: |
  El iusnaturalismo postula la existencia de un derecho natural (basado en la moral o la razón) que sirve como criterio de validez para el derecho creado por el hombre.
```

### 17 — El rol del juez en el Realismo Jurídico

```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "intermedio"
  tags: ["realismo_juridico", "interpretacion"]

opciones_explicitas: ["El derecho es un conjunto de normas abstractas e ideales.", "El derecho es lo que los jueces deciden en la práctica.", "El derecho es la voluntad del legislador plasmada en códigos."]

respuesta: "El derecho es lo que los jueces deciden en la práctica."
tipo: "mc"

enunciado: "Desde la perspectiva del realismo jurídico, ¿cuál es la característica que distingue su visión del derecho frente al formalismo iuspositivista?"

explicacion: |
  Para el realismo jurídico, el derecho no es un sistema de normas lógicas, sino una conducta social observada; por tanto, el derecho es la actividad judicial efectiva.
```

### 18 — Validez vs. Justicia

```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "basico"
  tags: ["iuspositivismo", "moral"]

respuesta: verdadero
tipo: "vf"

enunciado: "Para el iuspositivismo puro, la validez de una norma jurídica no depende de su contenido moral, sino de su procedencia conforme a los procedimientos establecidos por el sistema."

explicacion: |
  El iuspositivismo establece una separación conceptual entre el derecho (lo que es) y la moral (lo que debería ser).
```

### 19 — Evolución del pensamiento jurídico

```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "intermedio"
  tags: ["ordenar", "corrientes"]

opciones_explicitas: ["Iusnaturalismo (Derecho basado en la moral)", "Iuspositivismo (Derecho basado en la norma escrita)", "Realismo Jurídico (Derecho basado en la eficacia judicial)"]

tipo: "ordenar"
respuesta_orden: ["Iusnaturalismo (Derecho basado en la moral)", "Iuspositivismo (Derecho basado en la norma escrita)", "Realismo Jurídico (Derecho basado en la eficacia judicial)"]

enunciado: "Ordene cronológicamente la evolución predominante de las corrientes de pensamiento jurídico en la historia del derecho occidental:"

explicacion: |
  Históricamente, el pensamiento transitó desde la búsqueda de leyes naturales universales, pasando por la codificación y formalismo del positivismo, hasta llegar al enfoque empírico del realismo.
```

### 20 — Diferencias de enfoque

```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "avanzado"
  tags: ["comparacion", "metodologia"]

variables:
  idx: uno_de([0, 1])
  frases: ["El iuspositivismo se centra en la norma escrita, mientras que el realismo jurídico se centra en la conducta del juez.", "El iusnaturalismo se centra en la justicia universal, mientras que el iuspositivismo se centra en la validez formal."]

respuesta: verdadero
tipo: "vf"

enunciado: "Determina si la siguiente afirmación es correcta: {frases[idx]}"

explicacion: |
  El ejercicio requiere identificar cuál de las dos descripciones de la variable `escenario` es correcta según la teoría jurídica.
```

### 21 — El origen de la norma

```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "basico"
  tags: ["iusnaturalismo", "iuspositivismo"]

variables:
  datos: [["Un juez decide que una ley es injusta porque viola la dignidad humana y, por tanto, no es aplicable", "iusnaturalismo"], ["Un juez aplica una ley que considera moralmente cuestionable simplemente porque fue promulgada por la autoridad competente", "iuspositivismo"]]
  idx: uno_de([0, 1])

enunciado: "Si un jurista sostiene que el derecho debe basarse en principios morales universales y superiores a la ley escrita, estamos ante el..."

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["iusnaturalismo", "iuspositivismo", "realismo_juridico"]

explicacion: |
  El iusnaturalismo sostiene que existe un derecho natural superior al derecho positivo, basado en la moral y la razón.
```

### 22 — La validez de la norma

```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "intermedio"
  tags: ["iuspositivismo"]

variables:
  datos: [["La ley es válida porque cumple con el proceso legislativo, independientemente de su contenido moral", "Verdadero"], ["La validez de una norma depende de su conformidad con la moralidad social", "Falso"]]
  idx: uno_de([0, 1])

enunciado: "En el iuspositivismo estricto, la validez de una norma jurídica reside en su origen formal y no en su contenido ético."

respuestas_validas:
  - datos[idx][1]
respuesta: datos[idx][1]
tipo: completar
explicacion: |
  Para el iuspositivismo, la separación entre derecho y moral es fundamental para determinar la validez de la norma.
```

### 23 — El rol del juez

```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "avanzado"
  tags: ["realismo_juridico"]

variables:
  datos: [["El derecho es el conjunto de normas escritas en el código", "normativismo"], ["El derecho es lo que los jueces deciden en sus sentencias", "realismo_juridico"]]
  idx: uno_de([0, 1])

enunciado: "Desde la perspectiva del realismo jurídico, el derecho se define como ___."

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "lo que los jueces realmente hacen"
  - "lo que los jueces deciden en sus sentencias"

explicacion: |
  El realismo jurídico desplaza el foco de la norma escrita hacia la conducta y decisiones de los tribunales.
```

### 24 — Elementos del ordenamiento

```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "intermedio"
  tags: ["ordenar", "metodologia"]

enunciado: "Ordene los elementos según el enfoque del Realismo Jurídico, desde el factor más subjetivo (el juez) al más objetivo (la norma escrita):"

pasos:
  - "La decisión del juez en el caso concreto"
  - "La conducta social predominante"
  - "El texto de la norma legal"

respuesta_orden: ["La decisión del juez en el caso concreto", "La conducta social predominante", "El texto de la norma legal"]
tipo: ordenar
opciones_explicitas: ["La decisión del juez en el caso concreto", "La conducta social predominante", "El texto de la norma legal"]

explicacion: |
  El realismo enfatiza que el derecho no es solo texto, sino la actividad judicial influenciada por factores sociales.
```

### 25 — El dilema de la justicia

```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "basico"
  tags: ["iusnaturalismo", "iuspositivismo"]

variables:
  datos: [["La ley es la ley y debe aplicarse sin importar la percepción de injusticia", "positivismo"], ["La ley debe ser sometida al juicio de la justicia natural", "iusnaturalismo"]]
  idx: uno_de([0, 1])

enunciado: "Si un sistema jurídico afirma que 'la ley es la ley' y su aplicación es obligatoria incluso si es considerada injusta, el sistema está operando bajo el principio de ___."

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["positivismo", "iusnaturalismo", "realismo_juridico"]

explicacion: |
  El principio de legalidad estricta es un pilar del iuspositivismo, donde la validez es formal.
```
