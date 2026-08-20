### 1 — El carácter de la noticia
```
metadata:
  materia: "comunicacion"
  tema: "generos_periodisticos"
  nivel: "basico"
  tags: ["noticia", "objetividad"]

respuesta: "objetiva"
tipo: completar
respuestas_validas: ["objetiva", "subjetiva"]

enunciado: "A diferencia de la crónica o el artículo de opinión, la noticia busca ser una narración ___ de los hechos."

explicacion: |
  La noticia tiene como objetivo principal informar sobre un hecho reciente de la manera más imparcial posible, evitando juicios de valor o interpretaciones personales del periodista.
```

### 2 — La subjetividad en la crónica
```
metadata:
  materia: "comunicacion"
  tema: "generos_periodisticos"
  nivel: "intermedio"
  tags: ["cronica", "estilo"]

variables:
  es_cronica_subjetiva: verdadero

respuesta: es_cronica_subjetiva
tipo: vf

enunciado: "¿Es la crónica un género que permite al periodista utilizar recursos literarios y aportar su visión personal del evento?"

explicacion: |
  Correcto. Aunque la crónica parte de un hecho real, su estilo es mucho más narrativo y subjetivo que el de la noticia, permitiendo al autor tejer una interpretación del ambiente y los sucesos.
```

### 3 — La estructura de la entrevista
```
metadata:
  materia: "comunicacion"
  tema: "generos_periodisticos"
  nivel: "basico"
  tags: ["entrevista", "estructura"]

variables:
  idx: uno_de([0,1,2])
  escenario: [
    ["pregunta", "respuesta", "introducción"],
    ["introducción", "pregunta", "cierre"],
    ["cierre", "introducción", "pregunta"]
  ]

respuesta: escenario[idx][0]
tipo: mc
opciones_explicitas: ["pregunta", "respuesta", "introducción"]

enunciado: "En una entrevista periodística, el orden lógico de los elementos suele comenzar con una ___ para contextualizar al personaje."

explicacion: |
  La estructura clásica de una entrevista requiere primero presentar al entrevistado y el motivo del encuentro (introducción) antes de pasar al cuerpo de preguntas y respuestas.
```

### 4 — Clasificación de la opinión
```
metadata:
  materia: "comunicacion"
  tema: "generos_periodisticos"
  nivel: "intermedio"
  tags: ["opinion", "editorial"]

respuesta: "editorial"
tipo: completar
respuestas_validas: ["editorial", "columna"]

enunciado: "Cuando un texto de opinión no lleva firma y representa la postura oficial del medio de comunicación, se denomina ___."

explicacion: |
  El editorial es un género de opinión institucional; no representa la visión de un periodista particular, sino la ideología del periódico o medio que lo publica.
```

### 5 — Evolución de la información
```
metadata:
  materia: "comunicacion"
  tema: "generos_periodisticos"
  nivel: "avanzado"
  tags: ["cronica", "noticia", "orden"]

respuesta: ["noticia", "crónica", "artículo de opinión"]
tipo: ordenar
opciones_explicitas: ["noticia", "crónica", "artículo de opinión"]

enunciado: "Ordene estos géneros de menor a mayor grado de subjetividad (desde el más objetivo al más interpretativo):"

explicacion: |
  La escala de objetividad parte de la noticia (hecho puro), pasa por la crónica (hecho con estilo narrativo/personal) y llega al artículo de opinión (juicio de valor explícito).
```