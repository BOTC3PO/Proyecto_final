### 1 — La esencia de la noticia
```
metadata:
  materia: "comunicacion"
  tema: "generos_periodisticos"
  nivel: "basico"
  tags: ["noticia", "objetividad"]

respuesta: "objetividad"
tipo: completar
respuestas_validas: ["objetividad", "imparcialidad", "neutralidad"]

enunciado: "A diferencia de la columna de opinión, la noticia busca transmitir los hechos con ___ para informar de manera directa."

explicacion: |
  La noticia es un género informativo cuyo objetivo es relatar un hecho reciente de la manera más neutra posible, evitando juicios de valor o interpretaciones personales.
```

### 2 — Crónica vs. Noticia
```
metadata:
  materia: "comunicacion"
  tema: "generos_periodisticos"
  nivel: "intermedio"
  tags: ["cronica", "estilo"]

variables:
  es_cronica: true

opciones_explicitas: ["Falso", "Verdadero"]
respuesta: "Verdadero"
tipo: vf

enunciado: "La crónica se distingue de la noticia porque, además de informar, permite al periodista utilizar recursos literarios y una estructura narrativa más subjetiva."

explicacion: |
  Mientras la noticia es puramente expositiva, la crónica es un género híbrido que combina la información con la interpretación y el estilo narrativo del autor.
```

### 3 — El propósito de la entrevista
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

### 4 — La jerarquía de la opinión
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

respuestas_validas: ["editorial"]
tipo: completar

explicacion: |
  El editorial es el género de opinión por excelencia que refleja el pensamiento del medio de comunicación, a diferencia de la columna o el artículo de opinión que son de autoría personal.
```
*(Nota: Para la pregunta 4, el usuario debe completar con "editorial". El sistema usa el sorteo para la lógica interna si se requiere variar, pero aquí se define la respuesta fija según la regla de no revelar la respuesta en el enunciado).*

### 5 — Orden de los géneros por subjetividad
```
metadata:
  materia: "comunicacion"
  tema: "generos_periodisticos"
  nivel: "avanzado"
  tags: ["clasificacion", "subjetividad"]

opciones_explicitas: ["Noticia, Crónica, Entrevista, Editorial"]
respuesta: ["Noticia", "Crónica", "Entrevista", "Editorial"]
tipo: ordenar

enunciado: "Ordena los siguientes géneros de menor a mayor grado de subjetividad (desde el más objetivo al más interpretativo):"

explicacion: |
  La noticia es puramente objetiva (hechos), la crónica añade estilo narrativo, la entrevista permite la visión del otro y el editorial es la expresión máxima de la opinión institucional.
```