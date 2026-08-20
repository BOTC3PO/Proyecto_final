# Comunicacion — Generos periodisticos (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — La noticia

```
metadata:
  materia: "comunicacion"
  tema: "generos_periodisticos"
  nivel: "basico"
  tags: ["noticia", "definicion"]

respuesta: "objetividad"
tipo: completar
respuestas_validas:
  - "objetividad"
  - "imparcialidad"

enunciado: "El género de la noticia se caracteriza por la búsqueda de la ___ para relatar hechos de actualidad de la manera más fiel posible."

explicacion: |
  La noticia es un género informativo que busca relatar hechos de manera objetiva, respondiendo a las preguntas básicas: ¿qué?, ¿quién?, ¿cuándo?, ¿dónde?, ¿cómo? y ¿por qué?
```

### 2 — Opinión vs Información

```
metadata:
  materia: "comunicacion"
  tema: "generos_periodisticos"
  nivel: "basico"
  tags: ["opinion", "diferencia"]

respuesta: falso
tipo: vf

enunciado: "¿Es correcto afirmar que un artículo de opinión tiene como objetivo principal informar sobre un hecho sin emitir juicios de valor?"

explicacion: |
  Falso. El artículo de opinión es un género de opinión donde el autor expresa su punto de vista, interpretación y juicios subjetivos sobre un tema.
```

### 3 — La entrevista

```
metadata:
  materia: "comunicacion"
  tema: "generos_periodisticos"
  nivel: "basico"
  tags: ["entrevista", "estructura"]

tipo: mc
opciones_explicitas: ["Relato cronológico de un evento", "Diálogo entre un entrevistador y un entrevistado", "Análisis profundo de un tema de actualidad"]

respuesta: "Diálogo entre un entrevistador y un entrevistado"

enunciado: "Dependiendo del enfoque, la entrevista puede ser una herramienta para obtener ___ de una persona relevante."

explicacion: |
  La entrevista es un género basado en el diálogo con el fin de obtener información, opiniones o testimonios de un personaje.
```

### 4 — La crónica

```
metadata:
  materia: "comunicacion"
  tema: "generos_periodisticos"
  nivel: "intermedio"
  tags: ["cronica", "caracteristicas"]

respuesta_orden: ["Relato de hechos", "Interpretación subjetiva", "Estilo literario"]
tipo: ordenar

opciones_explicitas: ["Relato de hechos", "Interpretación subjetiva", "Estilo literario"]

enunciado: "Ordene los elementos que caracterizan a la crónica periodística, desde su base informativa hasta su forma de expresión:"

explicacion: |
  La crónica es un género híbrido que parte de un hecho real (relato), pero incluye la mirada del cronista (interpretación) y utiliza recursos narrativos (estilo literario).
```

### 5 — Clasificación de géneros

```
metadata:
  materia: "comunicacion"
  tema: "generos_periodisticos"
  nivel: "basico"
  tags: ["clasificacion"]

respuesta: "informativo"
tipo: mc
opciones_explicitas: ["informativo", "opinión", "híbrido"]

enunciado: "Si un periodista escribe una noticia, está trabajando principalmente dentro del género ___."

explicacion: |
  Los géneros se dividen en informativos (noticia, reportaje), de opinión (editorial, columna) e interpretativos o híbridos (crónica).
```

### 6 — Identificación de la noticia

```
metadata:
  materia: "comunicacion"
  tema: "generos_periodisticos"
  nivel: "basico"
  tags: ["noticia", "objetividad"]

enunciado: "Un periodista redacta un texto que relata un hecho reciente de manera objetiva, respondiendo a las preguntas: ¿qué?, ¿quién?, ¿cuándo?, ¿dónde?, ¿cómo? y ¿por qué?. Este texto se clasifica como una ___."

respuestas_validas:
  - "noticia"

respuesta: "noticia"
tipo: completar

explicacion: |
  La noticia es el género informativo por excelencia. Su objetivo es transmitir un hecho de interés público de la manera más neutra y directa posible, sin incluir la opinión del autor.
```

### 7 — La subjetividad en la crónica

```
metadata:
  materia: "comunicacion"
  tema: "generos_periodisticos"
  nivel: "intermedio"
  tags: ["cronica", "estilo"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Un reporte seco sobre un accidente vial.", "crónica"], ["Un relato detallado con descripciones sensoriales sobre un viaje por la Patagonia.", "crónica"]]

enunciado: "Analiza el siguiente ejemplo: {escenarios[escenario_idx][0]}. ¿A qué género pertenece este fragmento?"

opciones_explicitas: ["noticia", "crónica", "entrevista", "artículo de opinión"]

respuesta: escenarios[escenario_idx][1]
tipo: mc

explicacion: |
  La crónica combina la información objetiva con la visión subjetiva y el estilo literario del cronista. A diferencia de la noticia, permite descripciones más ricas y un orden temporal más flexible para crear una atmósfera.
```

### 8 — Elementos de la entrevista

```
metadata:
  materia: "comunicacion"
  tema: "generos_periodisticos"
  nivel: "basico"
  tags: ["entrevista", "estructura"]

enunciado: "En una entrevista periodística, el texto se construye principalmente a través del diálogo entre un entrevistador y un entrevistado. ¿Es verdadero que el objetivo principal es obtener información o testimonios de una personalidad?"

respuesta: verdadero
tipo: vf

explicacion: |
  Correcto. La entrevista es un género que utiliza la pregunta y la respuesta para profundizar en la vida, opiniones o conocimientos de un sujeto relevante.
```

### 9 — Orden lógico de una entrevista

```
metadata:
  materia: "comunicacion"
  tema: "generos_periodisticos"
  nivel: "basico"
  tags: ["entrevista", "orden"]

enunciado: "Para realizar una entrevista periodística profesional, se deben seguir ciertos pasos. Ordena las siguientes etapas desde el inicio hasta el final del proceso:"

opciones_explicitas: ["Investigación del personaje", "Preparación de preguntas", "Realización del encuentro", "Transcripción y edición"]

respuesta_orden: ["Investigación del personaje", "Preparación de preguntas", "Realización del encuentro", "Transcripción y edición"]
tipo: ordenar

explicacion: |
  El proceso comienza con la investigación para conocer al sujeto, luego se diseñan las preguntas, se ejecuta la entrevista y finalmente se procesa el material para su publicación.
```

### 10 — El artículo de opinión

```
metadata:
  materia: "comunicacion"
  tema: "generos_periodisticos"
  nivel: "intermedio"
  tags: ["opinion", "subjetividad"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["Un columnista analiza las causas de la inflación desde su punto de vista personal.", "opinion"], ["Un editorial del diario defiende una postura política sobre una nueva ley.", "opinion"]]

enunciado: "Lee el caso: {casos[caso_idx][0]}. El texto presentado es un ejemplo de género de ___."

opciones_explicitas: ["noticia", "crónica", "entrevista", "opinión"]

respuesta: "opinión"
tipo: mc

explicacion: |
  Los géneros de opinión (como la columna o el editorial) tienen como finalidad interpretar, analizar y valorar un hecho, expresando el juicio crítico del autor o de un medio de comunicación.
```

### 11 — El carácter de la noticia

```
metadata:
  materia: "comunicacion"
  tema: "generos_periodisticos"
  nivel: "basico"
  tags: ["noticia", "objetividad"]

respuesta: "objetiva"
tipo: completar
respuestas_validas:
  - "objetiva"
  - "subjetiva"

enunciado: "A diferencia de la crónica o el artículo de opinión, la noticia busca ser una narración ___ de los hechos."

explicacion: |
  La noticia tiene como objetivo principal informar sobre un hecho reciente de la manera más imparcial posible, evitando juicios de valor o interpretaciones personales del periodista.
```

### 12 — La subjetividad en la crónica

```
metadata:
  materia: "comunicacion"
  tema: "generos_periodisticos"
  nivel: "intermedio"
  tags: ["cronica", "estilo"]

variables:
  es_cronica_subjetiva: verdadero

respuesta: es_cronica_subjetiva
tipo: completar
enunciado: "¿Es la crónica un género que permite al periodista utilizar recursos literarios y aportar su visión personal del evento?"

explicacion: |
  Correcto. Aunque la crónica parte de un hecho real, su estilo es mucho más narrativo y subjetivo que el de la noticia, permitiendo al autor tejer una interpretación del ambiente y los sucesos.
```

### 13 — La estructura de la entrevista

```
metadata:
  materia: "comunicacion"
  tema: "generos_periodisticos"
  nivel: "basico"
  tags: ["entrevista", "estructura"]

tipo: mc
opciones_explicitas: ["pregunta", "respuesta", "introducción"]

respuesta: "introducción"

enunciado: "En una entrevista periodística, el orden lógico de los elementos suele comenzar con una ___ para contextualizar al personaje."

explicacion: |
  La estructura clásica de una entrevista requiere primero presentar al entrevistado y el motivo del encuentro (introducción) antes de pasar al cuerpo de preguntas y respuestas.
```

### 14 — Clasificación de la opinión

```
metadata:
  materia: "comunicacion"
  tema: "generos_periodisticos"
  nivel: "intermedio"
  tags: ["opinion", "editorial"]

respuesta: "editorial"
tipo: completar
respuestas_validas:
  - "editorial"
  - "columna"

enunciado: "Cuando un texto de opinión no lleva firma y representa la postura oficial del medio de comunicación, se denomina ___."

explicacion: |
  El editorial es un género de opinión institucional; no representa la visión de un periodista particular, sino la ideología del periódico o medio que lo publica.
```

### 15 — Evolución de la información

```
metadata:
  materia: "comunicacion"
  tema: "generos_periodisticos"
  nivel: "avanzado"
  tags: ["cronica", "noticia", "orden"]

respuesta_orden: ["noticia", "crónica", "artículo de opinión"]
tipo: ordenar
opciones_explicitas: ["noticia", "crónica", "artículo de opinión"]

enunciado: "Ordene estos géneros de menor a mayor grado de subjetividad (desde el más objetivo al más interpretativo):"

explicacion: |
  La escala de objetividad parte de la noticia (hecho puro), pasa por la crónica (hecho con estilo narrativo/personal) y llega al artículo de opinión (juicio de valor explícito).
```

### 16 — La esencia de la noticia

```
metadata:
  materia: "comunicacion"
  tema: "generos_periodisticos"
  nivel: "basico"
  tags: ["noticia", "objetividad"]

respuesta: "objetividad"
tipo: completar
respuestas_validas:
  - "objetividad"
  - "imparcialidad"
  - "neutralidad"

enunciado: "A diferencia de la columna de opinión, la noticia busca transmitir los hechos con ___ para informar de manera directa."

explicacion: |
  La noticia es un género informativo cuyo objetivo es relatar un hecho reciente de la manera más neutra posible, evitando juicios de valor o interpretaciones personales.
```

### 17 — Crónica vs. Noticia

```
metadata:
  materia: "comunicacion"
  tema: "generos_periodisticos"
  nivel: "intermedio"
  tags: ["cronica", "estilo"]

respuesta: verdadero
tipo: vf
enunciado: "La crónica se distingue de la noticia porque, además de informar, permite al periodista utilizar recursos literarios y una estructura narrativa más subjetiva."

explicacion: |
  Mientras la noticia es puramente expositiva, la crónica es un género híbrido que combina la información con la interpretación y el estilo narrativo del autor.
```

### 18 — El propósito de la entrevista

```
metadata:
  materia: "comunicacion"
  tema: "generos_periodisticos"
  nivel: "basico"
  tags: ["entrevista", "diálogo"]

opciones_explicitas: ["Relatar un hecho cronológicamente", "Obtener información o testimonios mediante el diálogo", "Analizar un tema desde la opinión del editor"]
respuesta: "Obtener información o testimonios mediante el diálogo"
tipo: mc

enunciado: "¿Cuál es el elemento distintivo que define a la entrevista como género periodístico?"

explicacion: |
  La entrevista se basa en la interacción directa entre un entrevistador y un entrevistado para profundizar en un tema o conocer la personalidad de alguien.
```

### 19 — La jerarquía de la opinión

```
metadata:
  materia: "comunicacion"
  tema: "generos_periodisticos"
  nivel: "intermedio"
  tags: ["opinion", "editorial"]

variables:
  caso: uno_de([0, 1])

enunciado: "Si el texto de opinión no va firmado por un periodista, sino que representa la postura institucional del medio, estamos ante un ___."

pasos:
  - "Identificar si el texto es de autor o institucional"

respuestas_validas:
  - "editorial"
tipo: completar

explicacion: |
  El editorial es el género de opinión por excelencia que refleja el pensamiento del medio de comunicación, a diferencia de la columna o el artículo de opinión que son de autoría personal.
```

### 20 — Orden de los géneros por subjetividad

```
metadata:
  materia: "comunicacion"
  tema: "generos_periodisticos"
  nivel: "avanzado"
  tags: ["clasificacion", "subjetividad"]

opciones_explicitas: ["Noticia", "Crónica", "Entrevista", "Editorial"]
respuesta_orden: ["Noticia", "Crónica", "Entrevista", "Editorial"]
tipo: ordenar

enunciado: "Ordena los siguientes géneros de menor a mayor grado de subjetividad (desde el más objetivo al más interpretativo):"

explicacion: |
  La noticia es puramente objetiva (hechos), la crónica añade estilo narrativo, la entrevista permite la visión del otro y el editorial es la expresión máxima de la opinión institucional.
```

### 21 — Identificación de género

```
metadata:
  materia: "comunicacion"
  tema: "generos_periodisticos"
  nivel: "basico"
  tags: ["noticia", "cronica", "entrevista", "opinion"]

variables:
  datos: [["Un texto que relata un hecho reciente de forma objetiva, respondiendo al qué, quién, cuándo y dónde.", "noticia"], ["Un texto que narra un evento con detalles temporales y matices subjetivos del autor.", "cronica"], ["Un texto basado en el diálogo directo con un protagonista.", "entrevista"], ["Un texto donde el autor analiza y juzga un hecho desde su punto de vista.", "opinion"]]
  idx: uno_de([0, 1, 2, 3])

enunciado: "Si un periodista escribe un texto que consiste en {datos[idx][0]}, estamos ante una {datos[idx][1]}."

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["noticia", "cronica", "entrevista", "opinion"]

explicacion: |
  El texto descrito corresponde a la definición de la opción seleccionada.
```

### 22 — Verdad o Falso: Objetividad

```
metadata:
  materia: "comunicacion"
  tema: "generos_periodisticos"
  nivel: "basico"
  tags: ["objetividad", "opinion"]

enunciado: "En un artículo de opinión, el periodista debe evitar expresar su punto de vista personal para mantener la neutralidad absoluta."

respuesta: falso
tipo: vf

explicacion: |
  Falso. El género de opinión tiene como finalidad principal la expresión de juicios de valor y la interpretación subjetiva de la realidad por parte del autor.
```

### 23 — Completar: El elemento clave de la entrevista

```
metadata:
  materia: "comunicacion"
  tema: "generos_periodisticos"
  nivel: "basico"
  tags: ["entrevista", "dialogo"]

variables:
  datos: [["diálogo", "entrevista"], ["relato", "noticia"], ["análisis", "editorial"]]
  idx: uno_de([0, 1, 2])

enunciado: "La característica fundamental que define a la ___ es la presencia de un ___ entre el periodista y el entrevistado."

respuestas_validas:
  - "diálogo"
  - "entrevista"
respuesta: "diálogo"
tipo: completar

explicacion: |
  La entrevista se basa en la interacción y el intercambio de preguntas y respuestas (diálogo).
```

### 24 — Ordenar: Estructura de la noticia

```
metadata:
  materia: "comunicacion"
  tema: "generos_periodisticos"
  nivel: "intermedio"
  tags: ["noticia", "estructura", "piramide_invertida"]

enunciado: "Ordena los elementos de una noticia según la estructura de la pirámide invertida, de la información más importante a la menos relevante:"

opciones_explicitas: ["Copete/Lead", "Cuerpo de la noticia", "Contexto/Detalles secundarios"]
respuesta_orden: ["Copete/Lead", "Cuerpo de la noticia", "Contexto/Detalles secundarios"]
tipo: ordenar

explicacion: |
  La pirámide invertida jerarquiza la información comenzando por lo más esencial (Lead) y terminando con los detalles menos relevantes.
```

### 25 — Identificación de género (Escenario complejo)

```
metadata:
  materia: "comunicacion"
  tema: "generos_periodisticos"
  nivel: "intermedio"
  tags: ["cronica", "subjetividad"]

variables:
  datos: [["Un periodista narra un viaje por la Patagonia, describiendo sensaciones, colores y el paso del tiempo con un estilo literario.", "cronica"], ["Un reporte seco sobre el cierre de una fábrica en la ciudad.", "noticia"], ["Una columna sobre la importancia de la educación en la era digital.", "opinion"]]
  idx: uno_de([0, 1, 2])

enunciado: "El texto que describe {datos[idx][0]} es una ___."

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["noticia", "cronica", "opinion"]

explicacion: |
  La crónica combina la información de la noticia con recursos literarios y la visión subjetiva del cronista.
```
