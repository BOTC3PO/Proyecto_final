# Filosofía — Ser (ontología) (cuestionario, 20 preguntas VBLang)

> Tema: `FI4a`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es la metafísica

```
metadata:
  materia: "filosofia"
  tema: "ser_ontologia"
  nivel: "basico"
  tags: ["metafisica", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La metafísica es la rama de Filosofía que estudia las preguntas más generales sobre lo que existe: qué es el ser, qué significa existir, qué es \"real\"."

pasos:
  - "Es una de las 5 ramas clásicas de la disciplina."

explicacion: |
  Verdadero: es la definición central de esta rama filosófica.
```

### 2 — Qué pregunta la ontología

```
metadata:
  materia: "filosofia"
  tema: "ser_ontologia"
  nivel: "basico"
  tags: ["ontologia", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La ontología pregunta qué significa \"ser\" algo en general, no qué es una cosa en particular."

pasos:
  - "No pregunta \"¿qué es una silla?\", sino \"¿qué tienen en común todas las cosas que son?\"."

explicacion: |
  Verdadero: la ontología busca la pregunta más abstracta y general
  detrás de cualquier afirmación de existencia.
```

### 3 — Identificar sustancia

```
metadata:
  materia: "filosofia"
  tema: "ser_ontologia"
  nivel: "intermedio"
  tags: ["sustancia"]

variables:
  n: uno_de([1, 1])

respuesta: "sustancia"
tipo: mc
opciones_explicitas: ["sustancia", "accidente"]

enunciado: "En la categorización aristotélica, lo que existe por sí mismo (como una persona o un árbol) se llama..."

pasos:
  - "No depende de otra cosa para existir."

explicacion: |
  La sustancia es lo que existe de forma independiente en la
  categorización aristotélica.
```

### 4 — Identificar accidente

```
metadata:
  materia: "filosofia"
  tema: "ser_ontologia"
  nivel: "intermedio"
  tags: ["accidente"]

variables:
  n: uno_de([1, 1])

respuesta: "accidente"
tipo: mc
opciones_explicitas: ["sustancia", "accidente"]

enunciado: "En la categorización aristotélica, una propiedad que depende de una sustancia para existir (como el color o el tamaño) se llama..."

pasos:
  - "El accidente no existe por sí mismo, siempre pertenece a una sustancia."

explicacion: |
  El accidente es una propiedad dependiente, distinta de la sustancia
  a la que pertenece.
```

### 5 — Una sustancia puede cambiar sus accidentes

```
metadata:
  materia: "filosofia"
  tema: "ser_ontologia"
  nivel: "intermedio"
  tags: ["sustancia", "accidente"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una sustancia puede cambiar sus accidentes (por ejemplo, envejecer o cambiar de color) y seguir siendo \"la misma\" en su ser."

pasos:
  - "Una persona sigue siendo la misma persona aunque cambie su apariencia con el tiempo."

explicacion: |
  Verdadero: la distinción sustancia/accidente explica cómo algo
  puede cambiar y a la vez seguir siendo lo mismo.
```

### 6 — Aristóteles como referente de las categorías del ser

```
metadata:
  materia: "filosofia"
  tema: "ser_ontologia"
  nivel: "basico"
  tags: ["autores"]

variables:
  n: uno_de([1, 1])

respuesta: "Aristóteles"
tipo: completar

enunciado: "El filósofo griego que propuso las categorías de sustancia y accidente para clasificar los modos de ser algo se llama..."

pasos:
  - "Es uno de los referentes clásicos más citados de la ontología."

explicacion: |
  Aristóteles es el filósofo asociado a esta clasificación clásica
  del ser.
```

### 7 — Ser vs. parecer

```
metadata:
  materia: "filosofia"
  tema: "ser_ontologia"
  nivel: "intermedio"
  tags: ["ser_vs_parecer"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un espejismo puede PARECER agua sin SER realmente agua: es un ejemplo clásico de la distinción entre ser y parecer."

pasos:
  - "La ontología se pregunta por el ser real, no por la apariencia."

explicacion: |
  Verdadero: es el ejemplo clásico usado para ilustrar esta
  distinción filosófica.
```

### 8 — La ontología pregunta lo más general primero

```
metadata:
  materia: "filosofia"
  tema: "ser_ontologia"
  nivel: "avanzado"
  tags: ["ontologia", "prioridad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Antes de preguntar \"¿existe Dios?\" o \"¿existen los números?\", la ontología pregunta algo previo: ¿qué significa, en general, que \"algo exista\"?"

pasos:
  - "Es el fundamento sobre el que se apoyan preguntas metafísicas más específicas."

explicacion: |
  Verdadero: la ontología es la pregunta metafísica más básica y
  general de esta subrama.
```

### 9 — Metafísica es una de las 5 ramas clásicas

```
metadata:
  materia: "filosofia"
  tema: "ser_ontologia"
  nivel: "intermedio"
  tags: ["metafisica", "ramas_clasicas"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Las 5 ramas clásicas de Filosofía son: metafísica, epistemología, ética, lógica y estética."

pasos:
  - "Ver `../epistemologia/`: el propio mapa nombra estas 5 ramas al agregar los nodos que faltaban."

explicacion: |
  Verdadero: es la clasificación clásica de las áreas centrales de la
  disciplina.
```

### 10 — La ontología no pregunta por una cosa particular

```
metadata:
  materia: "filosofia"
  tema: "ser_ontologia"
  nivel: "intermedio"
  tags: ["ontologia", "generalidad"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "La ontología pregunta específicamente \"¿qué es una silla?\" o \"¿qué es un árbol?\", igual que cualquier definición cotidiana de objetos concretos."

pasos:
  - "Esas serían preguntas particulares; la ontología pregunta por lo que TODAS las cosas que existen tienen en común."

explicacion: |
  Falso: la ontología busca la pregunta más general y abstracta, no
  definiciones de objetos particulares.
```

### 11 — Identificar sustancia y accidente en un ejemplo

```
metadata:
  materia: "filosofia"
  tema: "ser_ontologia"
  nivel: "intermedio"
  tags: ["sustancia", "accidente", "practica"]

variables:
  elementos: ["el árbol en sí", "el color verde de sus hojas"]
  tipos: ["sustancia", "accidente"]
  idx: uno_de([0, 1])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["sustancia", "accidente"]

enunciado: "En \"un árbol con hojas verdes\", \"{elementos[idx]}\" es un ejemplo de..."

pasos:
  - "El árbol existe por sí mismo (sustancia); el color de sus hojas depende del árbol para existir (accidente)."

explicacion: |
  El árbol es la sustancia; el color de sus hojas es un accidente que
  depende de esa sustancia.
```

### 12 — El ser como fundamento de existencia y realidad

```
metadata:
  materia: "filosofia"
  tema: "ser_ontologia"
  nivel: "avanzado"
  tags: ["ser_ontologia", "existencia", "realidad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El ser (ontología) es el punto de partida de la subrama, que se completa con Existencia (qué significa que algo particular exista) y Realidad (qué distingue lo real de lo aparente)."

pasos:
  - "Ver `../existencia/` y `../realidad/`: los tres temas son hermanos que exploran distintos ángulos de la misma pregunta metafísica general."

explicacion: |
  Verdadero: los tres nodos forman una subrama coherente de preguntas
  relacionadas pero distintas.
```

### 13 — Cambiar de accidentes no cambia la identidad

```
metadata:
  materia: "filosofia"
  tema: "ser_ontologia"
  nivel: "avanzado"
  tags: ["sustancia", "identidad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Según la distinción sustancia/accidente, si una persona cambia de peinado o de ropa, sigue siendo la misma sustancia (persona), sólo cambiaron sus accidentes."

pasos:
  - "La identidad de la sustancia no depende de sus accidentes cambiantes."

explicacion: |
  Verdadero: es la aplicación práctica de la distinción a un ejemplo
  cotidiano de identidad personal.
```

### 14 — Todo accidente pertenece a una sustancia

```
metadata:
  materia: "filosofia"
  tema: "ser_ontologia"
  nivel: "avanzado"
  tags: ["sustancia", "accidente"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un accidente (como un color o un tamaño) no puede existir de forma completamente independiente, siempre pertenece a alguna sustancia."

pasos:
  - "El \"verde\" no flota solo en el mundo, siempre es el verde de algo (una hoja, una pared)."

explicacion: |
  Verdadero: la dependencia del accidente respecto de una sustancia
  es parte central de esta distinción.
```

### 15 — El espejismo no es agua real

```
metadata:
  materia: "filosofia"
  tema: "ser_ontologia"
  nivel: "intermedio"
  tags: ["ser_vs_parecer"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un espejismo en el desierto no ES agua, aunque desde lejos PAREZCA agua a quien lo mira."

pasos:
  - "Es el ejemplo clásico de la distinción entre apariencia (parecer) y ser real."

explicacion: |
  Verdadero: confirma la distinción ser/parecer estudiada en este
  tema.
```

### 16 — La ontología es una pregunta abstracta, no empírica

```
metadata:
  materia: "filosofia"
  tema: "ser_ontologia"
  nivel: "avanzado"
  tags: ["ontologia", "metodo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La pregunta ontológica (\"¿qué significa ser?\") no se responde con un experimento científico, sino con análisis conceptual y argumentación filosófica."

pasos:
  - "Es una pregunta tan general que ningún experimento particular podría responderla directamente."

explicacion: |
  Verdadero: la metafísica en general, y la ontología en particular,
  usan métodos de análisis conceptual, no experimentación empírica.
```

### 17 — Relación entre metafísica y las otras ramas clásicas

```
metadata:
  materia: "filosofia"
  tema: "ser_ontologia"
  nivel: "avanzado"
  tags: ["metafisica", "ramas_clasicas"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La metafísica es una rama distinta de la epistemología: mientras la metafísica pregunta qué existe, la epistemología pregunta cómo se puede saber algo sobre lo que existe."

pasos:
  - "Ver `../epistemologia/`: son preguntas relacionadas pero diferentes dentro de las 5 ramas clásicas."

explicacion: |
  Verdadero: cada rama clásica de Filosofía aborda una pregunta
  central distinta, aunque estén relacionadas entre sí.
```

### 18 — Ordenar el análisis de un ejemplo con la distinción sustancia/accidente

```
metadata:
  materia: "filosofia"
  tema: "ser_ontologia"
  nivel: "intermedio"
  tags: ["sustancia", "accidente", "metodo"]

enunciado: "Ordená los pasos para analizar un objeto usando la distinción sustancia/accidente."
tipo: ordenar
opciones_explicitas:
  - "Identificar qué existe por sí mismo en el ejemplo (la sustancia)"
  - "Identificar qué propiedades dependen de esa sustancia (los accidentes)"
  - "Revisar si esos accidentes pueden cambiar sin que cambie la sustancia"
  - "Concluir que la identidad del objeto depende de la sustancia, no de sus accidentes"
respuesta_orden: ["Identificar qué existe por sí mismo en el ejemplo (la sustancia)", "Identificar qué propiedades dependen de esa sustancia (los accidentes)", "Revisar si esos accidentes pueden cambiar sin que cambie la sustancia", "Concluir que la identidad del objeto depende de la sustancia, no de sus accidentes"]
explicacion: |
  El análisis va de identificar la sustancia a sus accidentes, y
  concluye con la relación de dependencia entre ambos.
```

### 19 — El ser como base de las otras preguntas metafísicas

```
metadata:
  materia: "filosofia"
  tema: "ser_ontologia"
  nivel: "avanzado"
  tags: ["ser_ontologia", "prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Entender qué significa \"ser\" en general es un paso previo útil antes de preguntar específicamente qué significa que algo particular \"exista\" (el tema siguiente, Existencia)."

pasos:
  - "Ver `../existencia/`: aunque los tres nodos son hermanos en el MAPA, el orden conceptual va de lo más general (ser) a lo más específico."

explicacion: |
  Verdadero: aunque no haya dependencia formal entre los tres nodos
  hermanos, hay una progresión conceptual natural de lo general a lo
  específico.
```

### 20 — Aplicación: distinguir lo esencial de lo accesorio

```
metadata:
  materia: "filosofia"
  tema: "ser_ontologia"
  nivel: "avanzado"
  tags: ["sustancia", "accidente", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La distinción sustancia/accidente da un vocabulario útil para razonar sobre qué es esencial a algo (no puede cambiar sin que deje de ser lo que es) y qué es accesorio (puede cambiar sin afectar su identidad)."

pasos:
  - "Es una herramienta conceptual que se aplica más allá de la filosofía pura, en cualquier análisis de identidad y cambio."

explicacion: |
  Verdadero: es la aplicación práctica de esta distinción clásica
  fuera del contexto puramente filosófico.
```
