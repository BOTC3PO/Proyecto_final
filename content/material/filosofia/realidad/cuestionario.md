# Filosofía — Realidad (cuestionario, 20 preguntas VBLang)

> Tema: `FI4c`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Diferencia entre existencia y realidad

```
metadata:
  materia: "filosofia"
  tema: "realidad"
  nivel: "intermedio"
  tags: ["realidad", "existencia", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Mientras existencia pregunta si algo particular existe o no, realidad pregunta si algo es REALMENTE como parece, o sólo apariencia/construcción mental."

pasos:
  - "Ver `../existencia/`: es una pregunta relacionada pero distinta."

explicacion: |
  Verdadero: es la diferencia central entre estos dos temas hermanos.
```

### 2 — El problema del mundo externo

```
metadata:
  materia: "filosofia"
  tema: "realidad"
  nivel: "intermedio"
  tags: ["mundo_externo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El problema del mundo externo pregunta cómo se puede saber que lo que se percibe a través de los sentidos es real y no una ilusión completa."

pasos:
  - "Es una de las preguntas centrales de la filosofía de la realidad."

explicacion: |
  Verdadero: es el problema filosófico central de este tema.
```

### 3 — El genio maligno de Descartes

```
metadata:
  materia: "filosofia"
  tema: "realidad"
  nivel: "avanzado"
  tags: ["descartes", "genio_maligno"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Descartes formuló la duda sobre el mundo externo de forma extrema con su experimento mental del \"genio maligno\": ¿y si un ser todopoderoso engaña todas mis percepciones?"

pasos:
  - "Fue el punto de partida de su búsqueda de una certeza indudable."

explicacion: |
  Verdadero: es el experimento mental clásico asociado a Descartes
  sobre esta duda radical.
```

### 4 — Identificar el realismo

```
metadata:
  materia: "filosofia"
  tema: "realidad"
  nivel: "intermedio"
  tags: ["realismo"]

variables:
  n: uno_de([1, 1])

respuesta: "realismo"
tipo: mc
opciones_explicitas: ["realismo", "idealismo"]

enunciado: "La postura que sostiene que el mundo existe independientemente de que alguien lo perciba o piense en él se llama..."

pasos:
  - "Las cosas son reales aunque nadie las observe, según esta postura."

explicacion: |
  El realismo (en este sentido metafísico) afirma la independencia
  del mundo respecto de la mente que lo percibe.
```

### 5 — Identificar el idealismo

```
metadata:
  materia: "filosofia"
  tema: "realidad"
  nivel: "intermedio"
  tags: ["idealismo"]

variables:
  n: uno_de([1, 1])

respuesta: "idealismo"
tipo: mc
opciones_explicitas: ["realismo", "idealismo"]

enunciado: "La postura que sostiene que la realidad depende, de alguna manera, de la mente que la percibe o la construye se llama..."

pasos:
  - "No hay \"mundo\" separado de la experiencia consciente que lo capta, según esta postura."

explicacion: |
  El idealismo sostiene una dependencia entre realidad y mente
  perceptora.
```

### 6 — Realismo e idealismo son posturas, no verdades absolutas

```
metadata:
  materia: "filosofia"
  tema: "realidad"
  nivel: "avanzado"
  tags: ["realismo", "idealismo", "neutralidad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Realismo e idealismo son dos posturas filosóficas con argumentos propios, sin que ninguna sea \"la correcta\" de forma consensuada."

pasos:
  - "Mismo criterio de neutralidad ya aplicado en `../epistemologia/` y `../existencia/`."

explicacion: |
  Verdadero: se describe qué sostiene cada postura, sin evaluar cuál
  tiene razón.
```

### 7 — Realidad objetiva

```
metadata:
  materia: "filosofia"
  tema: "realidad"
  nivel: "intermedio"
  tags: ["realidad_objetiva"]

variables:
  n: uno_de([1, 1])

respuesta: "objetiva"
tipo: mc
opciones_explicitas: ["objetiva", "subjetiva"]

enunciado: "La temperatura de una habitación medida con un termómetro, que no depende de la opinión de cada persona, es un ejemplo de realidad..."

pasos:
  - "Un dato medible de forma independiente a la percepción de cada individuo es objetivo."

explicacion: |
  La realidad objetiva es la que es así independientemente de la
  percepción de cada persona.
```

### 8 — Realidad subjetiva

```
metadata:
  materia: "filosofia"
  tema: "realidad"
  nivel: "intermedio"
  tags: ["realidad_subjetiva"]

variables:
  n: uno_de([1, 1])

respuesta: "subjetiva"
tipo: mc
opciones_explicitas: ["objetiva", "subjetiva"]

enunciado: "Que una misma temperatura \"se sienta\" fría para una persona y agradable para otra es un ejemplo de realidad..."

pasos:
  - "Depende de la experiencia particular de cada persona, no es un dato fijo e independiente."

explicacion: |
  La realidad subjetiva varía según la experiencia particular de
  quien la percibe.
```

### 9 — El mito de la caverna de Platón

```
metadata:
  materia: "filosofia"
  tema: "realidad"
  nivel: "avanzado"
  tags: ["platon", "mito_de_la_caverna"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El mito de la caverna de Platón plantea la pregunta de si sólo vemos sombras de las cosas, no las cosas mismas — otra variación del problema de la realidad."

pasos:
  - "Es una de las formas históricas más famosas de plantear la duda sobre lo real vs. lo aparente."

explicacion: |
  Verdadero: es el ejemplo clásico más citado de este problema
  filosófico.
```

### 10 — La duda del sueño

```
metadata:
  materia: "filosofia"
  tema: "realidad"
  nivel: "avanzado"
  tags: ["descartes", "duda_del_sueno"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La duda cartesiana del sueño pregunta cómo se puede saber, en un momento dado, que no se está soñando en ese preciso momento."

pasos:
  - "Es otra formulación del mismo problema de distinguir lo real de lo aparente."

explicacion: |
  Verdadero: es otra de las variaciones históricas del problema de la
  realidad mencionadas en la teoría.
```

### 11 — El cerebro en una cubeta

```
metadata:
  materia: "filosofia"
  tema: "realidad"
  nivel: "avanzado"
  tags: ["cerebro_en_cubeta"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El experimento mental del \"cerebro en una cubeta\" pregunta si toda la experiencia percibida podría ser una simulación, sin que la persona lo note — una versión contemporánea del problema de la realidad."

pasos:
  - "Es la versión más moderna de la misma duda que ya planteaban el mito de la caverna y el genio maligno de Descartes."

explicacion: |
  Verdadero: es la versión contemporánea del mismo problema
  filosófico clásico.
```

### 12 — Todas son variaciones del mismo problema

```
metadata:
  materia: "filosofia"
  tema: "realidad"
  nivel: "avanzado"
  tags: ["realidad", "sintesis"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El mito de la caverna, la duda del sueño, el genio maligno y el cerebro en una cubeta son variaciones históricas de la misma pregunta: ¿cómo distinguir lo real de lo que sólo parece real?"

pasos:
  - "Cada época y filósofo formuló la misma duda de una forma distinta, adaptada a su contexto."

explicacion: |
  Verdadero: reconocer el patrón común detrás de estos ejemplos es
  clave para entender el problema filosófico de fondo.
```

### 13 — Clasificar un ejemplo entre objetivo y subjetivo

```
metadata:
  materia: "filosofia"
  tema: "realidad"
  nivel: "intermedio"
  tags: ["realidad_objetiva", "realidad_subjetiva", "practica"]

variables:
  ejemplos: ["la altura exacta de una montaña medida con instrumentos", "si una canción parece triste o alegre a quien la escucha"]
  tipos: ["objetiva", "subjetiva"]
  idx: uno_de([0, 1])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["objetiva", "subjetiva"]

enunciado: "\"{ejemplos[idx]}\" es un ejemplo de realidad..."

pasos:
  - "Un dato medible de forma independiente es objetivo; una impresión que varía según quien la experimenta es subjetiva."

explicacion: |
  La distinción objetivo/subjetivo depende de si el dato varía según
  quien lo experimenta o no.
```

### 14 — Realismo no niega que percibamos el mundo

```
metadata:
  materia: "filosofia"
  tema: "realidad"
  nivel: "avanzado"
  tags: ["realismo", "distincion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "El realismo sostiene que nadie puede percibir el mundo real, porque el mundo real está completamente separado de cualquier percepción."

pasos:
  - "El realismo sostiene que el mundo existe INDEPENDIENTEMENTE de la percepción, no que sea IMPERCEPTIBLE — son afirmaciones distintas."

explicacion: |
  Falso: el realismo permite que percibamos el mundo, sólo afirma que
  ese mundo no depende de que lo percibamos para existir.
```

### 15 — Idealismo no niega que exista un mundo

```
metadata:
  materia: "filosofia"
  tema: "realidad"
  nivel: "avanzado"
  tags: ["idealismo", "distincion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "El idealismo sostiene que no existe absolutamente nada, que todo es una completa nada vacía."

pasos:
  - "El idealismo sostiene que la realidad depende de la mente que la percibe/construye, no que no exista nada en absoluto."

explicacion: |
  Falso: el idealismo afirma una dependencia entre mente y realidad,
  no la inexistencia total de todo.
```

### 16 — La búsqueda de certeza de Descartes

```
metadata:
  materia: "filosofia"
  tema: "realidad"
  nivel: "avanzado"
  tags: ["descartes", "certeza"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El experimento del genio maligno fue el punto de partida de Descartes para buscar algo de lo que pudiera estar completamente seguro, sin importar cuánto se dudara de todo lo demás."

pasos:
  - "La duda extrema (\"¿y si me engañan en todo?\") era una herramienta metodológica, no una conclusión final de Descartes."

explicacion: |
  Verdadero: la duda radical era el método, no el punto de llegada de
  su filosofía.
```

### 17 — Realidad completa la subrama metafísica básica

```
metadata:
  materia: "filosofia"
  tema: "realidad"
  nivel: "avanzado"
  tags: ["realidad", "sintesis"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Realidad cierra, junto con Ser y Existencia, la subrama de las tres preguntas metafísicas básicas: qué es ser, qué significa existir, y qué distingue lo real de lo aparente."

pasos:
  - "Ver `../ser-ontologia/` y `../existencia/`: los tres son hermanos que dependen del mismo padre en el MAPA."

explicacion: |
  Verdadero: es la síntesis completa de la subrama de metafísica
  básica de este mapa.
```

### 18 — Ordenar el análisis de un caso con el problema de la realidad

```
metadata:
  materia: "filosofia"
  tema: "realidad"
  nivel: "intermedio"
  tags: ["realidad", "metodo"]

enunciado: "Ordená los pasos para analizar un caso usando las herramientas del problema filosófico de la realidad."
tipo: ordenar
opciones_explicitas:
  - "Identificar qué se está percibiendo o experimentando"
  - "Preguntarse si esa percepción podría estar engañando (ilusión, sueño, simulación)"
  - "Distinguir qué parte del caso sería objetiva (independiente de quién percibe) y qué parte subjetiva"
  - "Concluir con qué grado de certeza se puede afirmar que es \"real\""
respuesta_orden: ["Identificar qué se está percibiendo o experimentando", "Preguntarse si esa percepción podría estar engañando (ilusión, sueño, simulación)", "Distinguir qué parte del caso sería objetiva (independiente de quién percibe) y qué parte subjetiva", "Concluir con qué grado de certeza se puede afirmar que es \"real\""]
explicacion: |
  El análisis va de la percepción concreta a las dudas clásicas sobre
  su fiabilidad, y termina distinguiendo lo objetivo de lo subjetivo.
```

### 19 — Realidad conecta con la duda epistemológica

```
metadata:
  materia: "filosofia"
  tema: "realidad"
  nivel: "avanzado"
  tags: ["realidad", "epistemologia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El problema de la realidad (¿cómo sé que lo que percibo es real?) está estrechamente relacionado con la pregunta epistemológica de cómo se justifica una creencia."

pasos:
  - "Ver `../epistemologia/`: dudar de la realidad percibida es, en el fondo, dudar de la justificación de las creencias basadas en los sentidos."

explicacion: |
  Verdadero: metafísica y epistemología, aunque son ramas distintas,
  se cruzan en preguntas como ésta.
```

### 20 — Aplicación: distinguir opinión subjetiva de dato objetivo

```
metadata:
  materia: "filosofia"
  tema: "realidad"
  nivel: "avanzado"
  tags: ["realidad_objetiva", "realidad_subjetiva", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Distinguir realidad objetiva de subjetiva es útil en la vida cotidiana para separar un dato verificable (\"la temperatura es de 20°C\") de una impresión personal (\"hace frío\") sobre ese mismo hecho."

pasos:
  - "Es la aplicación práctica de esta distinción filosófica fuera del contexto puramente teórico."

explicacion: |
  Verdadero: es la aplicación concreta de la distinción
  objetivo/subjetivo estudiada en este tema.
```
