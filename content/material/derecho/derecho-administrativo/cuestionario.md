# Derecho — Derecho administrativo (cuestionario, 26 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de Derecho Administrativo

```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "basico"
  tags: ["definicion", "estado"]

respuesta: "regula la organización y actividad del Estado y su relación con los ciudadanos"
tipo: completar
respuestas_validas:
  - "regula la organización y actividad del Estado y su relación con los ciudadanos"

enunciado: "El Derecho Administrativo es la rama del derecho público que ___."

explicacion: |
  El Derecho Administrativo se encarga de regular la estructura, el funcionamiento y las facultades de la Administración Pública, así como sus vínculos con los particulares.
```

### 2 — Sujeto de la relación administrativa

```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "basico"
  tags: ["sujeto", "administracion"]

tipo: mc
opciones_explicitas: ["Administración Pública", "Poder Judicial", "Legislativo", "Empresa Privada"]

respuesta: "Administración Pública"

enunciado: "En una relación administrativa típica, ¿cuál es el sujeto que actúa en nombre del Estado?"

explicacion: |
  La Administración Pública es el brazo ejecutor del Estado que interactúa con los ciudadanos.
```

### 3 — Carácter del Derecho Administrativo

```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "basico"
  tags: ["caracter", "derecho_publico"]

respuesta: verdadero
tipo: vf

enunciado: "El Derecho Administrativo pertenece al ámbito del Derecho Público, ya que regula intereses generales de la comunidad."

explicacion: |
  Es correcto. Al regular la función estatal, se sitúa en el Derecho Público, a diferencia del Derecho Privado que regula relaciones entre particulares en igualdad de condiciones.
```

### 4 — Elementos de la Actividad Administrativa

```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "intermedio"
  tags: ["elementos", "acto_administrativo"]

respuesta_orden: ["Sujeto", "Objeto", "Motivo", "Finalidad"]
tipo: ordenar
opciones_explicitas: ["Sujeto", "Objeto", "Motivo", "Finalidad"]

enunciado: "Ordene los elementos constitutivos de un acto administrativo según su estructura lógica de validez:"

explicacion: |
  Para que un acto sea válido, debe tener un sujeto con competencia, un objeto lícito, un motivo (antecedentes) y una finalidad de interés público.
```

### 5 — Principio de Legalidad

```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "intermedio"
  tags: ["principios", "legalidad"]

respuesta: falso
tipo: vf

enunciado: "Según el Principio de Legalidad, es correcto afirmar que 'La Administración puede actuar incluso sin norma previa si es urgente'."

explicacion: |
  El Principio de Legalidad establece que la Administración solo puede realizar aquello que la ley le permite expresamente.
```

### 6 — El acto administrativo

```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "basico"
  tags: ["acto_administrativo", "estado"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["La Municipalidad otorga una licencia de construcción a un ciudadano.", "licencia"], ["El Ministerio de Salud dicta una resolución de clausura para un restaurante.", "clausura"]]

enunciado: "Considerando que {escenarios[escenario_idx][0]}, estamos ante un acto administrativo que regula la actividad del Estado frente a un particular."

respuesta: escenarios[escenario_idx][1]
tipo: completar
respuestas_validas:
  - "licencia"
  - "clausura"

explicacion: |
  El acto administrativo es una declaración de voluntad del Estado que produce efectos jurídicos directos sobre los administrados.
```

### 7 — Relación Estado-Ciudadano

```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "basico"
  tags: ["sujeto", "estado"]

enunciado: "En un proceso de licitación pública, el Estado actúa como un ente regulador y organizador. ¿Es el ciudadano un sujeto pasivo de la actividad administrativa en este contexto?"

respuesta: verdadero
tipo: vf

explicacion: |
  El Derecho Administrativo regula la relación entre el Estado (sujeto activo) y los ciudadanos (sujetos pasivos/administrados).
```

### 8 — Elementos del Acto Administrativo

```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "intermedio"
  tags: ["elementos", "validez"]

enunciado: "Para que un acto administrativo sea válido, debe cumplir con ciertos requisitos. Si una autoridad dicta una norma sin tener la competencia legal para ello, el elemento afectado es:"

respuesta: "Competencia"
tipo: mc
opciones_explicitas: ["Objeto", "Sujeto", "Competencia", "Motivación"]

explicacion: |
  La competencia es la atribución legal que tiene un órgano del Estado para actuar. Actuar sin ella invalida el acto.
```

### 9 — Procedimiento Administrativo

```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "intermedio"
  tags: ["procedimiento", "pasos"]

enunciado: "Ordene la secuencia lógica de un procedimiento administrativo estándar para la resolución de un reclamo ciudadano:"

respuesta_orden: ["Inicio del trámite", "Instrucción/Prueba", "Resolución", "Notificación"]
tipo: ordenar
opciones_explicitas: ["Inicio del trámite", "Instrucción/Prueba", "Resolución", "Notificación"]

explicacion: |
  El procedimiento administrativo es la serie de pasos sucesivos que garantizan el debido proceso antes de la decisión final.
```

### 10 — Control de Legalidad

```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "avanzado"
  tags: ["control", "recurso"]

enunciado: "Ante un acto administrativo que el administrado considera lesivo a sus derechos, el paso siguiente es ___ el acto mediante un recurso administrativo."

respuesta: "impugnar"
tipo: completar
respuestas_validas:
  - "impugnar"

explicacion: |
  La impugnación es el derecho de los ciudadanos de cuestionar la legalidad de los actos del Estado para que sean revisados.
```

### 11 — El objeto del Derecho Administrativo

```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "basico"
  tags: ["definicion", "estado"]

respuesta: "regula la organización y actividad del Estado y su relación con los ciudadanos"
tipo: completar
respuestas_validas:
  - "regula la organización y actividad del Estado y su relación con los ciudadanos"

enunciado: "El Derecho Administrativo es la rama del derecho público que ___."

explicacion: |
  A diferencia del derecho privado, el administrativo se centra en la estructura, funciones y facultades de la administración pública para asegurar el bien común.
```

### 12 — ¿Derecho Público o Privado?

```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "basico"
  tags: ["clasificacion", "derecho_publico"]

respuesta: verdadero
tipo: vf

enunciado: "El Derecho Administrativo pertenece a la rama del Derecho Público, ya que regula el ejercicio de la función administrativa del Estado."

explicacion: |
  Correcto. El Derecho Público regula las relaciones donde el Estado actúa con imperio (autoridad) para satisfacer el interés general.
```

### 13 — Diferencia con el Derecho Constitucional

```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "intermedio"
  tags: ["distincion", "constitucional"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["La Constitución establece la estructura básica del Estado.", "El Derecho Administrativo desarrolla el funcionamiento concreto de esa estructura."], ["La Constitución define los derechos fundamentales.", "El Derecho Administrativo establece los procedimientos para que el Estado los garantice o los limite."]]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: [escenarios[escenario_idx][0], escenarios[escenario_idx][1]]

enunciado: "Si el Derecho Constitucional se ocupa de la estructura orgánica y los principios fundamentales del Estado, el Derecho Administrativo se ocupa de: {escenarios[escenario_idx][1]}"

explicacion: |
  El Derecho Constitucional es la norma suprema que organiza el poder; el Administrativo es la herramienta operativa que permite a ese poder actuar en la realidad cotidiana.
```

### 14 — Elementos de la Actividad Administrativa

```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "intermedio"
  tags: ["elementos", "acto_administrativo"]

respuesta: "Sujeto, Objeto, Motivo, Finalidad y Procedimiento"
tipo: completar
respuestas_validas:
  - "Sujeto, Objeto, Motivo, Finalidad y Procedimiento"

enunciado: "Para que un acto administrativo sea válido, debe contar con ciertos elementos esenciales: ___, ___, ___, ___ y ___."

explicacion: |
  La validez de la actuación estatal depende de que el sujeto tenga competencia, el objeto sea lícito, el motivo sea real, la finalidad sea el interés público y se cumpla el procedimiento legal.
```

### 15 — Jerarquía de la actuación estatal

```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "avanzado"
  tags: ["jerarquia", "orden_normativo"]

respuesta_orden: ["Constitución Nacional", "Tratados Internacionales", "Leyes", "Reglamentos/Decretos"]
tipo: ordenar
opciones_explicitas: ["Constitución Nacional", "Tratados Internacionales", "Leyes", "Reglamentos/Decretos"]

enunciado: "Ordene de mayor a menor jerarquía normativa los instrumentos que rigen la actividad de la administración pública:"

explicacion: |
  El Derecho Administrativo debe actuar siempre bajo el principio de legalidad, respetando la pirámide jurídica que comienza con la Constitución y los Tratados, seguidos por las leyes y finalmente los reglamentos dictados por la propia administración.
```

### 16 — Diferencia con el Derecho Privado

```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "basico"
  tags: ["naturaleza_juridica", "derecho_privado"]

respuesta: "Derecho Administrativo"
tipo: "completar"
respuestas_validas:
  - "Derecho Administrativo"

enunciado: "Mientras que el Derecho Privado regula las relaciones entre particulares, el ___ regula la organización y actividad del Estado en su función pública."

explicacion: |
  El Derecho Administrativo es una rama del Derecho Público que se ocupa de la organización, funcionamiento, poderes y deberes de la Administración Pública y de la relación jurídica entre esta y los ciudadanos.
```

### 17 — Relación de Subordinación vs. Igualdad

```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "intermedio"
  tags: ["principios", "derecho_privado"]

respuesta: falso
tipo: "vf"

enunciado: "En el Derecho Administrativo, la relación entre el Estado y el ciudadano es de igualdad absoluta, tal como ocurre en el Derecho Privado."

explicacion: |
  Falso. En el Derecho Administrativo rige el principio de supraestatalidad o prerrogativas de la Administración, lo que implica una relación de subordinación jurídica para asegurar el bien común, a diferencia de la igualdad de condiciones en el Derecho Privado.
```

### 18 — El Objeto de Estudio

```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "basico"
  tags: ["objeto_estudio"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["un contrato de alquiler entre dos vecinos", "Derecho Privado"], ["la concesión de una licencia de conducir por un municipio", "Derecho Administrativo"]]

respuesta: escenarios[escenario_idx][1]
tipo: "mc"
opciones_explicitas: ["Derecho Privado", "Derecho Administrativo"]

enunciado: "Identifique a qué rama del derecho pertenece la siguiente situación: {escenarios[escenario_idx][0]}"

explicacion: |
  El Derecho Administrativo regula los actos de la administración pública, como la emisión de licencias o permisos, mientras que los contratos entre particulares pertenecen al Derecho Privado.
```

### 19 — El Objeto de Estudio (Versión Corregida)

```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "basico"
  tags: ["objeto_estudio"]

variables:
  idx: uno_de([0, 1])
  datos: [["un contrato de alquiler entre dos vecinos", "Derecho Privado"], ["la concesión de una licencia de conducir por un municipio", "Derecho Administrativo"]]

respuesta: datos[idx][1]
tipo: "mc"
opciones_explicitas: ["Derecho Privado", "Derecho Administrativo"]

enunciado: "Si el caso es {datos[idx][0]}, ¿qué rama del derecho lo regula?"

explicacion: |
  El Derecho Administrativo regula los actos de la administración pública, como la emisión de licencias o permisos, mientras que los contratos entre particulares pertenecen al Derecho Privado.
```

### 20 — Jerarquía de Normas

```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "intermedio"
  tags: ["jerarquia", "normativa"]

respuesta: "Derecho Público"
tipo: "completar"
respuestas_validas:
  - "Derecho Público"

enunciado: "A diferencia del Derecho Privado, el Derecho Administrativo se clasifica dentro del ___."

explicacion: |
  El Derecho Administrativo es parte del Derecho Público porque regula intereses generales y la estructura del Estado, donde el Estado actúa con potestades que no posee un particular.
```

### 21 — Elementos de la Actividad Administrativa

```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "avanzado"
  tags: ["procedimiento", "orden"]

tipo: "ordenar"
opciones_explicitas: ["Sujeto Activo (Estado)", "Sujeto Pasivo (Administrado)", "Objeto (Acto Administrativo)", "Motivación (Causa/Fin)"]
respuesta_orden: ["Sujeto Activo (Estado)", "Sujeto Pasivo (Administrado)", "Objeto (Acto Administrativo)", "Motivación (Causa/Fin)"]

enunciado: "Ordene los elementos esenciales que configuran la relación administrativa, partiendo desde la entidad que ejerce la función hasta la justificación del acto:"

pasos:
  - "Identificar quién actúa (Estado)"
  - "Identificar quién recibe la acción (Ciudadano)"
  - "Identificar el contenido del acto"
  - "Identificar la razón de ser del acto"

explicacion: |
  Para que exista la actividad administrativa, debe haber un sujeto estatal (activo) que interactúa con un ciudadano (pasivo) mediante un acto (objeto) que debe estar debidamente fundado (motivación).
```

### 22 — Acto administrativo y nulidad

```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "intermedio"
  tags: ["acto_administrativo", "nulidad"]

variables:
  escenario: uno_de([["Un funcionario dicta una resolución sin tener competencia sobre la materia", "nulo"], ["La administración emite un acto con vicio en el objeto, siendo imposible de ejecutar", "nulo"], ["Un acto administrativo carece de la motivación exigida por la ley", "nulo"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["nulo", "válido", "anulable"]

enunciado: "En el siguiente caso: {escenario[0]}, la validez del acto administrativo es: ___"

explicacion: |
  Un acto administrativo presenta nulidad absoluta cuando carece de elementos esenciales (competencia, objeto, causa, motivación o finalidad) o cuando el vicio es de tal magnitud que impide su subsistencia legal.
```

### 23 — Silencio administrativo

```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "intermedio"
  tags: ["silencio_administrativo", "procedimiento"]

variables:
  tipo_silencio: uno_de([["El interesado solicita una licencia y la administración no responde en el plazo legal. La ley establece que esto implica una denegación.", "negativo"], ["El interesado solicita una subvención y la administración no responde en el plazo legal. La ley establece que esto implica una concesión.", "positivo"]])

respuesta: tipo_silencio[1]
tipo: mc
opciones_explicitas: ["negativo", "positivo"]

enunciado: "Ante el escenario donde {tipo_silencio[0]}, estamos ante un silencio administrativo de carácter: ___"

explicacion: |
  El silencio administrativo puede ser positivo (la falta de respuesta equivale a la aceptación de la petición) o negativo (la falta de respuesta equivale a un rechazo), dependiendo de lo que la norma específica determine para ese trámite.
```

### 24 — Elementos del acto administrativo

```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "basico"
  tags: ["elementos", "acto_administrativo"]

respuesta: "competencia, objeto, causa, motivación, finalidad"
tipo: completar
respuestas_validas:
  - "competencia, objeto, causa, motivación, finalidad"

enunciado: "Para que un acto administrativo sea válido, debe reunir una serie de elementos esenciales. Estos son: ___, ___, ___, ___ y ___."

explicacion: |
  Los elementos son: Competencia (autoridad facultada), Objeto (lo que el acto decide), Causa (antecedentes de hecho y derecho), Motivación (explicación de la decisión) y Finalidad (interés público).
```

### 25 — Principio de legalidad

```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "basico"
  tags: ["principios", "legalidad"]

respuesta: falso
tipo: vf

enunciado: "¿Es correcto afirmar que la Administración Pública puede actuar de manera discrecional incluso si sus decisiones contravienen la ley vigente?"

explicacion: |
  No. El principio de legalidad establece que la Administración solo puede realizar aquello que la ley le permite expresamente, limitando la discrecionalidad al marco de la ley y el interés público.
```

### 26 — Fases del procedimiento administrativo

```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "intermedio"
  tags: ["procedimiento", "fases"]

respuesta_orden: ["Iniciación", "Instrucción", "Finalización"]
tipo: ordenar
opciones_explicitas: ["Iniciación", "Instrucción", "Finalización"]

enunciado: "Ordene cronológicamente las etapas típicas de un procedimiento administrativo:"

explicacion: |
  El procedimiento comienza con la Iniciación (de oficio o a parte), sigue con la Instrucción (donde se aportan pruebas y alegaciones) y concluye con la Finalización (mediante resolución o acto administrativo).
```
