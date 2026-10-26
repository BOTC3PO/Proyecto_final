### 1 — Identificación de la noticia
```
metadata:
  materia: "comunicacion"
  tema: "generos_periodisticos"
  nivel: "basico"
  tags: ["noticia", "objetividad"]

enunciado: "Un periodista redacta un texto que relata un hecho reciente de manera objetiva, respondiendo a las preguntas: ¿qué?, ¿quién?, ¿cuándo?, ¿dónde?, ¿cómo? y ¿por qué?. Este texto se clasifica como una ___."

respuestas_validas: ["noticia"]

respuesta: "noticia"
tipo: completar

explicacion: |
  La noticia es el género informativo por excelencia. Su objetivo es transmitir un hecho de interés público de la manera más neutra y directa posible, sin incluir la opinión del autor.
```

### 2 — La subjetividad en la crónica
```
metadata:
  materia: "comunicacion"
  tema: "generos_periodisticos"
  nivel: "intermedio"
  tags: ["cronica", "estilo"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Un reporte seco sobre un accidente vial.", "crónica"],
    ["Un relato detallado con descripciones sensoriales sobre un viaje por la Patagonia.", "crónica"]
  ]

enunciado: "Analiza el siguiente ejemplo: {escenarios[escenario_idx][0]}. ¿A qué género pertenece este fragmento?"

opciones_explicitas: ["noticia", "crónica", "entrevista", "artículo de opinión"]

respuesta: escenarios[escenario_idx][1]
tipo: mc

explicacion: |
  La crónica combina la información objetiva con la visión subjetiva y el estilo literario del cronista. A diferencia de la noticia, permite descripciones más ricas y un orden temporal más flexible para crear una atmósfera.
```

### 3 — Elementos de la entrevista
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

### 4 — Orden lógico de una entrevista
```
metadata:
  materia: "comunicacion"
  tema: "generos_periodisticos"
  nivel: "basico"
  tags: ["entrevista", "orden"]

enunciado: "Para realizar una entrevista periodística profesional, se deben seguir ciertos pasos. Ordena las siguientes etapas desde el inicio hasta el final del proceso:"

opciones_explicitas: ["Investigación del personaje", "Preparación de preguntas", "Realización del encuentro", "Transcripción y edición"]

respuesta: ["Investigación del personaje", "Preparación de preguntas", "Realización del encuentro", "Transcripción y edición"]
tipo: ordenar

explicacion: |
  El proceso comienza con la investigación para conocer al sujeto, luego se diseñan las preguntas, se ejecuta la entrevista y finalmente se procesa el material para su publicación.
```

### 5 — El artículo de opinión
```
metadata:
  materia: "comunicacion"
  tema: "generos_periodisticos"
  nivel: "intermedio"
  tags: ["opinion", "subjetividad"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [
    ["Un columnista analiza las causas de la inflación desde su punto de vista personal.", "opinion"],
    ["Un editorial del diario defiende una postura política sobre una nueva ley.", "opinion"]
  ]

enunciado: "Lee el caso: {casos[caso_idx][0]}. El texto presentado es un ejemplo de género de ___."

opciones_explicitas: ["noticia", "crónica", "entrevista", "opinión"]

respuesta: "opinión"
tipo: mc

explicacion: |
  Los géneros de opinión (como la columna o el editorial) tienen como finalidad interpretar, analizar y valorar un hecho, expresando el juicio crítico del autor o de un medio de comunicación.
```