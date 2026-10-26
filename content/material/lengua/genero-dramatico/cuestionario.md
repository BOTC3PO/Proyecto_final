# Lengua — Género dramático (cuestionario, 20 preguntas VBLang)

> Tema: `P10Bc`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Definición del género dramático

```
metadata:
  materia: "lengua"
  tema: "genero_dramatico"
  nivel: "basico"
  tags: ["genero_dramatico", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El género dramático agrupa textos escritos para ser representados en un escenario, organizados casi por completo a través de diálogos entre personajes."

pasos:
  - "A diferencia del narrativo, no tiene un narrador que cuente los hechos."

explicacion: |
  Verdadero: la representación y el diálogo son las marcas centrales
  del género dramático.
```

### 2 — El dramático no tiene narrador

```
metadata:
  materia: "lengua"
  tema: "genero_dramatico"
  nivel: "intermedio"
  tags: ["genero_dramatico", "genero_narrativo", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "El género dramático, igual que el narrativo, tiene siempre un narrador que cuenta lo que va sucediendo."

pasos:
  - "En el texto dramático, la historia se conoce a través de lo que dicen los personajes, no de una voz narradora."

explicacion: |
  Falso: la ausencia de narrador es justamente lo que distingue al
  dramático del narrativo.
```

### 3 — Identificar el diálogo

```
metadata:
  materia: "lengua"
  tema: "genero_dramatico"
  nivel: "basico"
  tags: ["dialogo"]

variables:
  n: uno_de([1, 1])

respuesta: "diálogo"
tipo: completar

enunciado: "La forma central del texto dramático, donde los personajes hablan entre sí, se llama..."

pasos:
  - "A través de esas intervenciones se conoce la historia, sin narrador."

explicacion: |
  El diálogo es el elemento estructural principal del texto
  dramático.
```

### 4 — Identificar acotaciones

```
metadata:
  materia: "lengua"
  tema: "genero_dramatico"
  nivel: "basico"
  tags: ["acotaciones"]

variables:
  n: uno_de([1, 1])

respuesta: "acotaciones"
tipo: completar

enunciado: "Las indicaciones entre paréntesis o en cursiva que describen gestos, movimientos o tono de voz (y no forman parte del diálogo) se llaman..."

pasos:
  - "Son la única \"voz\" del autor visible en el texto dramático."

explicacion: |
  Las acotaciones guían la puesta en escena sin ser parte de lo que
  dicen los personajes.
```

### 5 — Función de las acotaciones

```
metadata:
  materia: "lengua"
  tema: "genero_dramatico"
  nivel: "intermedio"
  tags: ["acotaciones", "funcion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En \"JUAN: (nervioso) ¿Vas a venir?\", la palabra \"nervioso\" es una acotación que indica cómo debería actuarse esa línea."

pasos:
  - "Está entre paréntesis, fuera del texto que Juan efectivamente dice."

explicacion: |
  Verdadero: las acotaciones indican gestos/tono, no son parte del
  parlamento del personaje.
```

### 6 — Identificar el acto

```
metadata:
  materia: "lengua"
  tema: "genero_dramatico"
  nivel: "intermedio"
  tags: ["estructura", "acto"]

variables:
  n: uno_de([1, 1])

respuesta: "acto"
tipo: mc
opciones_explicitas: ["acto", "escena", "acotación"]

enunciado: "Cada una de las grandes partes en que se divide una obra de teatro (equivalente a un capítulo) se llama..."

pasos:
  - "El acto es la unidad mayor de división de la obra."

explicacion: |
  El acto agrupa varias escenas y marca las grandes divisiones de la
  obra.
```

### 7 — Identificar la escena

```
metadata:
  materia: "lengua"
  tema: "genero_dramatico"
  nivel: "intermedio"
  tags: ["estructura", "escena"]

variables:
  n: uno_de([1, 1])

respuesta: "escena"
tipo: mc
opciones_explicitas: ["acto", "escena", "acotación"]

enunciado: "La subdivisión de un acto, marcada por la entrada o salida de un personaje o un cambio de escenario, se llama..."

pasos:
  - "La escena es una unidad más chica que el acto."

explicacion: |
  Un acto se compone de varias escenas, delimitadas por cambios en
  los personajes presentes o en el escenario.
```

### 8 — Identificar la tragedia

```
metadata:
  materia: "lengua"
  tema: "genero_dramatico"
  nivel: "intermedio"
  tags: ["subgeneros", "tragedia"]

variables:
  n: uno_de([1, 1])

respuesta: "tragedia"
tipo: mc
opciones_explicitas: ["tragedia", "comedia", "drama"]

enunciado: "El subgénero dramático con conflicto grave, personajes de gran dignidad y final desdichado se llama..."

pasos:
  - "El desenlace desgraciado y la gravedad del conflicto son las marcas de la tragedia."

explicacion: |
  La tragedia clásica se caracteriza por su gravedad y su final
  infeliz.
```

### 9 — Identificar la comedia

```
metadata:
  materia: "lengua"
  tema: "genero_dramatico"
  nivel: "intermedio"
  tags: ["subgeneros", "comedia"]

variables:
  n: uno_de([1, 1])

respuesta: "comedia"
tipo: mc
opciones_explicitas: ["tragedia", "comedia", "drama"]

enunciado: "El subgénero dramático con conflicto liviano, tono humorístico y final feliz se llama..."

pasos:
  - "El humor y el final feliz son las marcas de la comedia."

explicacion: |
  La comedia se distingue de la tragedia por su tono y su desenlace.
```

### 10 — Identificar el drama (subgénero)

```
metadata:
  materia: "lengua"
  tema: "genero_dramatico"
  nivel: "avanzado"
  tags: ["subgeneros", "drama"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El drama, como subgénero, mezcla tono serio y liviano, sin la rigidez de la tragedia clásica, y es el subgénero más común en el teatro moderno."

pasos:
  - "No exige ni el final necesariamente desdichado de la tragedia ni el tono siempre cómico de la comedia."

explicacion: |
  Verdadero: el drama moderno flexibiliza las reglas estrictas de
  tragedia y comedia clásicas.
```

### 11 — No confundir "drama" (subgénero) con "género dramático"

```
metadata:
  materia: "lengua"
  tema: "genero_dramatico"
  nivel: "avanzado"
  tags: ["subgeneros", "vocabulario"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "\"Drama\" y \"género dramático\" son exactamente lo mismo: toda obra de género dramático se llama \"drama\"."

pasos:
  - "\"Género dramático\" es la categoría general (con tragedia, comedia y drama como subgéneros); \"drama\" es sólo uno de esos tres subgéneros."

explicacion: |
  Falso: el drama es un subgénero particular dentro del género
  dramático, no un sinónimo de la categoría completa.
```

### 12 — Diferenciar diálogo de acotación

```
metadata:
  materia: "lengua"
  tema: "genero_dramatico"
  nivel: "basico"
  tags: ["dialogo", "acotaciones", "diferenciacion"]

variables:
  partes: ["¿Vas a venir a la fiesta?", "(nervioso)"]
  tipos: ["diálogo", "acotación"]
  idx: uno_de([0, 1])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["diálogo", "acotación"]

enunciado: "En \"JUAN: (nervioso) ¿Vas a venir a la fiesta?\", la parte \"{partes[idx]}\" es..."

pasos:
  - "Lo que está entre paréntesis es acotación; lo que dice el personaje directamente es diálogo."

explicacion: |
  El diálogo es lo que el personaje efectivamente dice; la acotación
  es la indicación escénica entre paréntesis.
```

### 13 — El dramático está pensado para representarse

```
metadata:
  materia: "lengua"
  tema: "genero_dramatico"
  nivel: "intermedio"
  tags: ["genero_dramatico", "representacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El texto dramático está pensado principalmente para ser actuado en un escenario, aunque también se pueda leer como cualquier otro texto."

pasos:
  - "Su estructura en diálogos y acotaciones está orientada a la puesta en escena."

explicacion: |
  Verdadero: la representación es el destino principal del texto
  dramático, la lectura es una forma alternativa de acceder a él.
```

### 14 — Acto y escena: relación de tamaño

```
metadata:
  materia: "lengua"
  tema: "genero_dramatico"
  nivel: "intermedio"
  tags: ["estructura", "acto", "escena"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un acto puede estar formado por varias escenas."

pasos:
  - "La escena es una subdivisión del acto, no al revés."

explicacion: |
  Verdadero: el acto es la unidad mayor, compuesta de una o más
  escenas.
```

### 15 — Reconocer género dramático en un fragmento

```
metadata:
  materia: "lengua"
  tema: "genero_dramatico"
  nivel: "intermedio"
  tags: ["genero_dramatico", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: "dramático"
tipo: mc
opciones_explicitas: ["narrativo", "lírico", "dramático"]

enunciado: "Un texto compuesto por líneas como \"ANA: No puedo creerlo. (se sienta, sorprendida) ¿Cuándo pasó esto?\" es de género..."

pasos:
  - "Diálogo identificado por nombre del personaje + acotación entre paréntesis = marcas del género dramático."

explicacion: |
  La estructura de diálogo con acotaciones es exclusiva del género
  dramático.
```

### 16 — Diferenciar dramático de lírico

```
metadata:
  materia: "lengua"
  tema: "genero_dramatico"
  nivel: "avanzado"
  tags: ["genero_dramatico", "genero_lirico", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "El género dramático, igual que el lírico, se organiza principalmente alrededor de un único hablante que expresa sus emociones."

pasos:
  - "El dramático se organiza en diálogos entre VARIOS personajes, no en la voz de un único hablante."

explicacion: |
  Falso: la lírica gira en torno a un hablante; el dramático, en
  torno al intercambio de varios personajes.
```

### 17 — Las acotaciones no las dice ningún personaje

```
metadata:
  materia: "lengua"
  tema: "genero_dramatico"
  nivel: "intermedio"
  tags: ["acotaciones"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Las acotaciones no son pronunciadas por ningún personaje: son indicaciones del autor para quien monta o interpreta la obra."

pasos:
  - "Se distinguen tipográficamente (paréntesis/cursiva) precisamente porque no forman parte de lo hablado."

explicacion: |
  Verdadero: las acotaciones son la voz del autor guiando la puesta
  en escena, no un parlamento de los personajes.
```

### 18 — Ordenar el análisis de un texto dramático

```
metadata:
  materia: "lengua"
  tema: "genero_dramatico"
  nivel: "intermedio"
  tags: ["genero_dramatico", "metodo"]

enunciado: "Ordená los pasos para analizar la estructura de una obra dramática."
tipo: ordenar
opciones_explicitas:
  - "Separar el texto en actos"
  - "Dentro de cada acto, identificar las escenas"
  - "Distinguir el diálogo de las acotaciones"
  - "Determinar si el tono general corresponde a tragedia, comedia o drama"
respuesta_orden: ["Separar el texto en actos", "Dentro de cada acto, identificar las escenas", "Distinguir el diálogo de las acotaciones", "Determinar si el tono general corresponde a tragedia, comedia o drama"]
explicacion: |
  El análisis va de la estructura mayor (actos) a la menor (escenas),
  después distingue diálogo de acotación, y termina clasificando el
  subgénero.
```

### 19 — El género dramático no necesita descripción de ambiente en prosa

```
metadata:
  materia: "lengua"
  tema: "genero_dramatico"
  nivel: "avanzado"
  tags: ["genero_dramatico", "acotaciones"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El texto dramático puede describir el escenario o ambiente a través de acotaciones, sin necesitar párrafos descriptivos en prosa como en la narrativa."

pasos:
  - "Las acotaciones cumplen la función que en la narrativa cumpliría un párrafo descriptivo."

explicacion: |
  Verdadero: las acotaciones son el recurso propio del dramático para
  describir escenario, gestos y tono, reemplazando la descripción en
  prosa.
```

### 20 — Aplicación: elegir género dramático según el propósito

```
metadata:
  materia: "lengua"
  tema: "genero_dramatico"
  nivel: "avanzado"
  tags: ["genero_dramatico", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Si el propósito es que una historia se represente en vivo ante un público, con personajes que interactúan directamente entre sí, conviene escribirla como texto dramático antes que como cuento."

pasos:
  - "El cuento tiene narrador y se lee; el texto dramático se organiza para la actuación en escena."

explicacion: |
  Verdadero: la elección del género depende del propósito
  (representación en vivo vs. lectura narrada).
```
