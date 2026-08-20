### 1 — Identificación de género
```
metadata:
  materia: "comunicacion"
  tema: "generos_periodisticos"
  nivel: "basico"
  tags: ["noticia", "cronica", "entrevista", "opinion"]

variables:
  escenario: uno_de([["Un texto que relata un hecho reciente de forma objetiva, respondiendo al qué, quién, cuándo y dónde.", "noticia"], ["Un texto que narra un evento con detalles temporales y matices subjetivos del autor.", "cronica"], ["Un texto basado en el diálogo directo con un protagonista.", "entrevista"], ["Un texto donde el autor analiza y juzga un hecho desde su punto de vista.", "opinion"]])
  idx: uno_de([0, 1, 2, 3])

enunciado: "Si un periodista escribe un texto que consiste en {escenario[idx][0]}, estamos ante una {escenario[idx][1]}."

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["noticia", "cronica", "entrevista", "opinion"]

explicacion: |
  El texto descrito corresponde a la definición de la opción seleccionada.
```

### 2 — Verdad o Falso: Objetividad
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

### 3 — Completar: El elemento clave de la entrevista
```
metadata:
  materia: "comunicacion"
  tema: "generos_periodisticos"
  nivel: "basico"
  tags: ["entrevista", "dialogo"]

variables:
  tipo_texto: uno_de([["diálogo", "entrevista"], ["relato", "noticia"], ["análisis", "editorial"]])
  idx: uno_de([0, 1, 2])

enunciado: "La característica fundamental que define a la ___ es la presencia de un ___ entre el periodista y el entrevistado."

respuestas_validas: ["diálogo", "diálogo"]
respuesta: "diálogo"
tipo: completar

explicacion: |
  La entrevista se basa en la interacción y el intercambio de preguntas y respuestas (diálogo).
```

### 4 — Ordenar: Estructura de la noticia
```
metadata:
  materia: "comunicacion"
  tema: "generos_periodisticos"
  nivel: "intermedio"
  tags: ["noticia", "estructura", "piramide_invertida"]

enunciado: "Ordena los elementos de una noticia según la estructura de la pirámide invertida, de la información más importante a la menos relevante:"

opciones_explicitas: ["Copete/Lead", "Cuerpo de la noticia", "Contexto/Detalles secundarios"]
respuesta: ["Copete/Lead", "Cuerpo de la noticia", "Contexto/Detalles secundarios"]
tipo: ordenar

explicacion: |
  La pirámide invertida jerarquiza la información comenzando por lo más esencial (Lead) y terminando con los detalles menos relevantes.
```

### 5 — Identificación de género (Escenario complejo)
```
metadata:
  materia: "comunicacion"
  tema: "generos_periodisticos"
  nivel: "intermedio"
  tags: ["cronica", "subjetividad"]

variables:
  caso: uno_de([["Un periodista narra un viaje por la Patagonia, describiendo sensaciones, colores y el paso del tiempo con un estilo literario.", "cronica"], ["Un reporte seco sobre el cierre de una fábrica en la ciudad.", "noticia"], ["Una columna sobre la importancia de la educación en la era digital.", "opinion"]])
  idx: uno_de([0, 1, 2])

enunciado: "El texto que describe {caso[idx][0]} es una ___."

respuesta: "cronica"
tipo: mc
opciones_explicitas: ["noticia", "cronica", "opinion"]

explicacion: |
  La crónica combina la información de la noticia con recursos literarios y la visión subjetiva del cronista.
```