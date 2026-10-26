### 1 — La noticia
```
metadata:
  materia: "comunicacion"
  tema: "generos_periodisticos"
  nivel: "basico"
  tags: ["noticia", "definicion"]

respuesta: "objetividad"
tipo: completar
respuestas_validas: ["objetividad", "imparcialidad"]

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

variables:
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Relato cronológico de un evento", "Diálogo entre un entrevistador y un entrevistado", "Análisis profundo de un tema de actualidad"]

enunciado: "Dependiendo del enfoque, la entrevista puede ser una herramienta para obtener ___ de una persona relevante."

datos:
  - ["Relato cronológico de un evento", "Relato cronológico de un evento"]
  - ["Diálogo entre un entrevistador y un entrevistado", "Diálogo entre un entrevistador y un entrevistado"]

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

respuesta: ["Relato de hechos", "Interpretación subjetiva", "Estilo literario"]
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