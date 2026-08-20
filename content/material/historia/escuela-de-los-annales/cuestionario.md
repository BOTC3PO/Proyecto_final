# Historia — Escuela de los Annales (cuestionario, 20 preguntas VBLang)

> Tema: `T11c`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Criterio central de la Escuela de los Annales

```
metadata:
  materia: "historia"
  tema: "escuela_de_los_annales"
  nivel: "basico"
  tags: ["escuela_de_los_annales", "criterio_central"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La Escuela de los Annales propone mirar la historia a través de estructuras de larga duración: clima, geografía, demografía, economía."

pasos:
  - "En vez de centrarse en sucesos puntuales de reyes y batallas."

explicacion: |
  Verdadero: es el criterio central de esta corriente.
```

### 2 — Origen del nombre "Annales"

```
metadata:
  materia: "historia"
  tema: "escuela_de_los_annales"
  nivel: "intermedio"
  tags: ["contexto_historico"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La Escuela de los Annales se llama así por la revista académica Annales donde publicaban sus fundadores, en Francia, durante el siglo XX."

pasos:
  - "Es el origen del nombre de esta corriente historiográfica."

explicacion: |
  Verdadero: es el origen del nombre de esta escuela.
```

### 3 — Marc Bloch como fundador

```
metadata:
  materia: "historia"
  tema: "escuela_de_los_annales"
  nivel: "intermedio"
  tags: ["marc_bloch"]

variables:
  n: uno_de([1, 1])

respuesta: "Bloch"
tipo: completar

enunciado: "Uno de los fundadores de la Escuela de los Annales, autor de \"Apología para la historia\", se apellida..."

pasos:
  - "Marc Bloch es uno de los referentes centrales de esta corriente."

explicacion: |
  Bloch es autor central de esta corriente historiográfica.
```

### 4 — Circunstancia de publicación de "Apología para la historia"

```
metadata:
  materia: "historia"
  tema: "escuela_de_los_annales"
  nivel: "avanzado"
  tags: ["marc_bloch", "contexto_historico"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "\"Apología para la historia\" de Marc Bloch se publicó póstumamente en 1949, después de que Bloch fuera fusilado por la resistencia francesa contra la ocupación nazi."

pasos:
  - "Es un dato histórico sobre las circunstancias de publicación de esta obra clásica."

explicacion: |
  Verdadero: es el contexto histórico de la publicación de esta obra
  fundamental de la corriente.
```

### 5 — Fernand Braudel y los tres niveles de tiempo

```
metadata:
  materia: "historia"
  tema: "escuela_de_los_annales"
  nivel: "intermedio"
  tags: ["fernand_braudel"]

variables:
  n: uno_de([1, 1])

respuesta: "Braudel"
tipo: completar

enunciado: "El historiador de la Escuela de los Annales que propuso distinguir tres ritmos distintos de cambio histórico se apellida..."

pasos:
  - "Fernand Braudel es otro referente central de esta corriente."

explicacion: |
  Braudel es autor central de esta corriente, referente de los tres
  niveles de tiempo histórico.
```

### 6 — Identificar la larga duración

```
metadata:
  materia: "historia"
  tema: "escuela_de_los_annales"
  nivel: "intermedio"
  tags: ["larga_duracion"]

variables:
  n: uno_de([1, 1])

respuesta: "larga duración"
tipo: mc
opciones_explicitas: ["larga duración", "coyunturas", "acontecimientos"]

enunciado: "El nivel de tiempo histórico que abarca estructuras casi inmóviles (geografía, clima) que cambian en siglos o milenios se llama..."

pasos:
  - "Es el nivel más lento de los tres propuestos por Braudel."

explicacion: |
  La larga duración es el nivel de cambio más lento de los tres
  ritmos propuestos por Braudel.
```

### 7 — Identificar las coyunturas

```
metadata:
  materia: "historia"
  tema: "escuela_de_los_annales"
  nivel: "intermedio"
  tags: ["coyunturas"]

variables:
  n: uno_de([1, 1])

respuesta: "coyunturas"
tipo: mc
opciones_explicitas: ["larga duración", "coyunturas", "acontecimientos"]

enunciado: "El nivel de tiempo histórico que abarca ciclos económicos y sociales de mediano plazo (décadas) se llama..."

pasos:
  - "Es el nivel intermedio de los tres propuestos por Braudel."

explicacion: |
  Las coyunturas son el nivel intermedio de cambio, de duración
  media (décadas).
```

### 8 — Identificar los acontecimientos

```
metadata:
  materia: "historia"
  tema: "escuela_de_los_annales"
  nivel: "intermedio"
  tags: ["acontecimientos"]

variables:
  n: uno_de([1, 1])

respuesta: "acontecimientos"
tipo: mc
opciones_explicitas: ["larga duración", "coyunturas", "acontecimientos"]

enunciado: "El nivel de tiempo histórico que abarca los hechos puntuales (batallas, tratados), llamado por Braudel la \"espuma\" de la historia, se llama..."

pasos:
  - "Es el nivel más rápido y visible, pero según Braudel menos determinante."

explicacion: |
  Los acontecimientos son el nivel más rápido y visible, pero para
  Braudel el menos determinante de los tres.
```

### 9 — Los acontecimientos son "la espuma" según Braudel

```
metadata:
  materia: "historia"
  tema: "escuela_de_los_annales"
  nivel: "avanzado"
  tags: ["acontecimientos", "metafora"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Braudel describió a los acontecimientos como la \"espuma\" superficial de la historia: la parte más visible pero menos determinante."

pasos:
  - "Es la metáfora central usada por Braudel para describir la relación entre los tres niveles de tiempo."

explicacion: |
  Verdadero: es la metáfora central que usa Braudel para jerarquizar
  los tres niveles de tiempo histórico.
```

### 10 — Orden de los tres niveles según duración

```
metadata:
  materia: "historia"
  tema: "escuela_de_los_annales"
  nivel: "intermedio"
  tags: ["niveles_de_tiempo", "orden"]

enunciado: "Ordená los tres niveles de tiempo histórico de Braudel, del más lento al más rápido."
tipo: ordenar
opciones_explicitas:
  - "Larga duración"
  - "Coyunturas"
  - "Acontecimientos"
respuesta_orden: ["Larga duración", "Coyunturas", "Acontecimientos"]
explicacion: |
  El orden va de las estructuras casi inmóviles (siglos/milenios) a
  los ciclos de mediano plazo (décadas) y finalmente a los hechos
  puntuales (días/años).
```

### 11 — Por qué priorizar lo estructural sobre los sucesos

```
metadata:
  materia: "historia"
  tema: "escuela_de_los_annales"
  nivel: "avanzado"
  tags: ["estructuras"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Según la Escuela de los Annales, el clima, la geografía y la demografía de una región condicionan durante siglos qué es posible o probable en esa sociedad, más allá de qué rey gobierne en un momento dado."

pasos:
  - "Es la justificación central de por qué esta corriente prioriza las estructuras de larga duración."

explicacion: |
  Verdadero: es la razón central por la que esta corriente considera
  más determinantes las estructuras que los sucesos puntuales.
```

### 12 — Diferencia con el materialismo histórico

```
metadata:
  materia: "historia"
  tema: "escuela_de_los_annales"
  nivel: "avanzado"
  tags: ["materialismo_historico", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El materialismo histórico prioriza específicamente relaciones de clase y producción; la Escuela de los Annales incluye también factores geográficos y climáticos, no ligados directamente al conflicto de clases."

pasos:
  - "Ver `../materialismo-historico/`: es la diferencia de foco entre estas dos corrientes que ambas miran \"estructuras\"."

explicacion: |
  Verdadero: aunque ambas corrientes miran estructuras en vez de
  grandes figuras, difieren en qué tipo de estructuras priorizan.
```

### 13 — Ambas corrientes se apartan de las grandes figuras

```
metadata:
  materia: "historia"
  tema: "escuela_de_los_annales"
  nivel: "avanzado"
  tags: ["materialismo_historico", "positivismo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Tanto el materialismo histórico como la Escuela de los Annales se apartan del foco en grandes figuras y hechos puntuales, propio del positivismo."

pasos:
  - "Ver `../positivismo/`: es el contraste común de ambas corrientes con la primera de la subrama."

explicacion: |
  Verdadero: ambas corrientes comparten esa distancia respecto del
  enfoque positivista, aunque prioricen estructuras distintas.
```

### 14 — Clasificar un ejemplo según nivel de tiempo

```
metadata:
  materia: "historia"
  tema: "escuela_de_los_annales"
  nivel: "avanzado"
  tags: ["niveles_de_tiempo", "practica"]

variables:
  ejemplos: ["la firma de un tratado de paz en un año específico", "el clima de una región que condicionó su agricultura durante siglos"]
  niveles: ["acontecimientos", "larga duración"]
  idx: uno_de([0, 1])

respuesta: niveles[idx]
tipo: mc
opciones_explicitas: ["larga duración", "coyunturas", "acontecimientos"]

enunciado: "\"{ejemplos[idx]}\" corresponde al nivel de tiempo histórico de..."

pasos:
  - "Un hecho puntual es acontecimiento; un factor que cambia en siglos es larga duración."

explicacion: |
  Clasificar un ejemplo según su ritmo de cambio (siglos, décadas o
  puntual) es la aplicación central de este tema.
```

### 15 — La Escuela de los Annales no ignora los acontecimientos por completo

```
metadata:
  materia: "historia"
  tema: "escuela_de_los_annales"
  nivel: "avanzado"
  tags: ["acontecimientos", "matiz"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La Escuela de los Annales no ignora por completo los acontecimientos puntuales, sino que los considera menos determinantes que las estructuras de fondo, sin eliminarlos del análisis."

pasos:
  - "Es un matiz importante: la jerarquía entre los tres niveles no significa descartar por completo el nivel de los acontecimientos."

explicacion: |
  Verdadero: es un matiz importante sobre la relación entre los tres
  niveles de tiempo propuestos por Braudel.
```

### 16 — Escuela de los Annales depende de multicausalidad en el MAPA

```
metadata:
  materia: "historia"
  tema: "escuela_de_los_annales"
  nivel: "avanzado"
  tags: ["prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Cada corriente historiográfica es un modelo distinto de qué causas priorizar al explicar un hecho histórico — por eso este tema depende de multicausalidad en el MAPA."

pasos:
  - "Ver `../multicausalidad/`: es el prerrequisito directo de este tema y sus tres hermanos."

explicacion: |
  Verdadero: es la misma conexión conceptual ya vista en las
  corrientes anteriores de esta subrama.
```

### 17 — La geografía como estructura de larga duración

```
metadata:
  materia: "historia"
  tema: "escuela_de_los_annales"
  nivel: "intermedio"
  tags: ["larga_duracion", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Que un pueblo se haya desarrollado alrededor de un río navegable durante siglos, condicionando su comercio y su forma de organización social, es un ejemplo de análisis desde la larga duración de los Annales."

pasos:
  - "Es la aplicación práctica del foco en geografía como estructura de larga duración."

explicacion: |
  Verdadero: es un ejemplo concreto de análisis desde la perspectiva
  de la larga duración de esta corriente.
```

### 18 — Ordenar el análisis para identificar un texto de la Escuela de los Annales

```
metadata:
  materia: "historia"
  tema: "escuela_de_los_annales"
  nivel: "intermedio"
  tags: ["escuela_de_los_annales", "metodo"]

enunciado: "Ordená los pasos para reconocer si un texto histórico sigue el enfoque de la Escuela de los Annales."
tipo: ordenar
opciones_explicitas:
  - "Revisar si el foco está en estructuras de larga duración (clima, geografía, demografía)"
  - "Identificar si se distinguen distintos ritmos de cambio (larga duración, coyunturas, acontecimientos)"
  - "Revisar si los sucesos puntuales se tratan como menos determinantes que las estructuras de fondo"
  - "Concluir si el texto corresponde al enfoque de la Escuela de los Annales"
respuesta_orden: ["Revisar si el foco está en estructuras de larga duración (clima, geografía, demografía)", "Identificar si se distinguen distintos ritmos de cambio (larga duración, coyunturas, acontecimientos)", "Revisar si los sucesos puntuales se tratan como menos determinantes que las estructuras de fondo", "Concluir si el texto corresponde al enfoque de la Escuela de los Annales"]
explicacion: |
  El análisis va del foco temático a la jerarquía de niveles de
  tiempo, para concluir si corresponde a esta corriente.
```

### 19 — Escuela de los Annales como tercera corriente de la subrama

```
metadata:
  materia: "historia"
  tema: "escuela_de_los_annales"
  nivel: "avanzado"
  tags: ["sintesis"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La Escuela de los Annales es la tercera de las cuatro corrientes historiográficas de esta subrama, hermana de positivismo, materialismo histórico e historia cultural."

pasos:
  - "Ver `../positivismo/`, `../materialismo-historico/` y `../historia-cultural/`: los cuatro nodos hermanos dependen de `../multicausalidad/`."

explicacion: |
  Verdadero: es la relación entre este tema y los otros tres de la
  subrama.
```

### 20 — Aplicación: identificar el enfoque de un texto histórico

```
metadata:
  materia: "historia"
  tema: "escuela_de_los_annales"
  nivel: "avanzado"
  tags: ["escuela_de_los_annales", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Al leer un libro de historia centrado en cómo el clima y la geografía de una región condicionaron su desarrollo económico y social a lo largo de siglos, conviene reconocer que está aplicando un enfoque cercano a la Escuela de los Annales."

pasos:
  - "Es la aplicación práctica directa de este tema al leer críticamente un texto histórico real."

explicacion: |
  Verdadero: es la aplicación concreta de este tema para reconocer el
  enfoque historiográfico de un texto real.
```
