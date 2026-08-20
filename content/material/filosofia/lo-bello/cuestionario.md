# Filosofía — Lo bello (cuestionario, 20 preguntas VBLang)

> Tema: `FI6c`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Diferencia entre gusto estético y lo bello

```
metadata:
  materia: "filosofia"
  tema: "lo_bello"
  nivel: "intermedio"
  tags: ["lo_bello", "gusto_estetico", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Mientras el gusto estético pregunta cómo se juzga el arte en general (bueno/malo, valioso/no), lo bello pregunta específicamente qué hace que algo se considere bello."

pasos:
  - "Ver `../el-gusto-estetico/`: es una pregunta más acotada dentro del juicio estético general."

explicacion: |
  Verdadero: es la diferencia central entre estos dos temas hermanos.
```

### 2 — Belleza no es sinónimo de valor artístico

```
metadata:
  materia: "filosofia"
  tema: "lo_bello"
  nivel: "intermedio"
  tags: ["belleza", "valor_artistico", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una obra puede ser artísticamente valiosa (compleja, innovadora, técnicamente admirable) sin ser \"bella\" en el sentido tradicional."

pasos:
  - "Una pintura que representa el horror de una guerra puede ser una obra maestra sin que nadie la llame \"bella\"."

explicacion: |
  Verdadero: belleza es una categoría más específica dentro de lo que
  se puede valorar en el arte, no sinónimo de \"buen arte\".
```

### 3 — Identificar la teoría de la proporción y armonía

```
metadata:
  materia: "filosofia"
  tema: "lo_bello"
  nivel: "intermedio"
  tags: ["proporcion_y_armonia"]

variables:
  n: uno_de([1, 1])

respuesta: "proporción y armonía"
tipo: mc
opciones_explicitas: ["proporción y armonía", "lo sublime", "belleza natural"]

enunciado: "La teoría clásica que sostiene que la belleza está en la relación armónica entre las partes de un todo se llama..."

pasos:
  - "La simetría de un rostro o las proporciones de un edificio clásico son ejemplos de esta idea, muy influyente desde la Antigüedad griega."

explicacion: |
  La teoría de la proporción y armonía es la explicación clásica más
  antigua de la belleza.
```

### 4 — Belleza natural vs. belleza artística

```
metadata:
  materia: "filosofia"
  tema: "lo_bello"
  nivel: "intermedio"
  tags: ["belleza_natural", "belleza_artistica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La belleza de un paisaje natural (no hecho por nadie) plantea un problema distinto de la belleza de una obra hecha deliberadamente por un artista."

pasos:
  - "¿Es el mismo tipo de belleza, o dos fenómenos distintos que comparten nombre? Es una pregunta abierta."

explicacion: |
  Verdadero: es una distinción relevante que complica la pregunta
  general sobre qué es lo bello.
```

### 5 — Identificar lo bello (según la distinción con lo sublime)

```
metadata:
  materia: "filosofia"
  tema: "lo_bello"
  nivel: "avanzado"
  tags: ["lo_bello", "lo_sublime", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: "lo bello"
tipo: mc
opciones_explicitas: ["lo bello", "lo sublime"]

enunciado: "Según la distinción clásica de Kant y Burke, la categoría que genera placer tranquilo y armonioso se llama..."

pasos:
  - "Se opone a lo sublime, que genera asombro mezclado con temor."

explicacion: |
  Lo bello, en esta distinción, es la experiencia estética asociada a
  la armonía y la tranquilidad.
```

### 6 — Identificar lo sublime

```
metadata:
  materia: "filosofia"
  tema: "lo_bello"
  nivel: "avanzado"
  tags: ["lo_sublime"]

variables:
  n: uno_de([1, 1])

respuesta: "lo sublime"
tipo: mc
opciones_explicitas: ["lo bello", "lo sublime"]

enunciado: "Según la distinción clásica de Kant y Burke, la categoría que genera una mezcla de asombro y hasta temor frente a algo inmenso o poderoso (una tormenta, una montaña gigantesca) se llama..."

pasos:
  - "No es \"bello\" en el sentido de armonioso, pero produce una experiencia estética intensa igual."

explicacion: |
  Lo sublime es una categoría estética distinta de lo bello, asociada
  a la inmensidad y el poder.
```

### 7 — Lo sublime no es armonioso pero sí estético

```
metadata:
  materia: "filosofia"
  tema: "lo_bello"
  nivel: "avanzado"
  tags: ["lo_sublime", "distincion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Aunque lo sublime no sea armonioso como lo bello, sigue siendo una experiencia estética intensa y significativa, no una simple sensación de miedo sin más."

pasos:
  - "El océano o una tormenta pueden generar asombro estético, no sólo temor puro."

explicacion: |
  Verdadero: lo sublime es una categoría estética propia, distinta
  pero igual de válida que lo bello.
```

### 8 — Kant y Burke como referentes de la distinción bello/sublime

```
metadata:
  materia: "filosofia"
  tema: "lo_bello"
  nivel: "avanzado"
  tags: ["kant", "burke", "autores"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Kant y Burke son los filósofos clásicos asociados a la distinción entre lo bello y lo sublime."

pasos:
  - "Es la referencia histórica central de esta distinción estética."

explicacion: |
  Verdadero: son los autores clásicos citados para esta distinción.
```

### 9 — Belleza y función en el diseño

```
metadata:
  materia: "filosofia"
  tema: "lo_bello"
  nivel: "avanzado"
  tags: ["belleza_y_funcion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En objetos con función práctica (una silla, un edificio), se discute si la belleza es independiente de qué tan bien cumple su función, o si un diseño \"bello\" es el que cumple mejor su función con elegancia."

pasos:
  - "Es un punto sin consenso filosófico definitivo, mencionado como extensión de la pregunta sobre lo bello."

explicacion: |
  Verdadero: la relación entre belleza y función es otro debate
  abierto dentro de este tema.
```

### 10 — Ejemplo clásico de proporción: simetría del rostro

```
metadata:
  materia: "filosofia"
  tema: "lo_bello"
  nivel: "intermedio"
  tags: ["proporcion_y_armonia", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La simetría de un rostro es un ejemplo clásico usado para ilustrar la teoría de la belleza como proporción y armonía."

pasos:
  - "Es uno de los ejemplos más citados de esta teoría clásica, junto con las proporciones arquitectónicas."

explicacion: |
  Verdadero: es un ejemplo tradicional de esta teoría estética.
```

### 11 — La teoría de la proporción no explica todo lo bello

```
metadata:
  materia: "filosofia"
  tema: "lo_bello"
  nivel: "avanzado"
  tags: ["proporcion_y_armonia", "limitaciones"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La teoría de la proporción y armonía explica bien la belleza clásica (simetría, orden), pero tiene dificultades con formas de belleza más modernas o irregulares que también se consideran bellas por muchas personas."

pasos:
  - "Igual que las definiciones de arte de `../que-es-el-arte/`, ninguna teoría de la belleza cierra el debate por completo."

explicacion: |
  Verdadero: es coherente con el patrón general de este bloque de
  estética, donde ninguna teoría agota el fenómeno completo.
```

### 12 — Clasificar un ejemplo entre bello y sublime

```
metadata:
  materia: "filosofia"
  tema: "lo_bello"
  nivel: "intermedio"
  tags: ["lo_bello", "lo_sublime", "practica"]

variables:
  ejemplos: ["un jardín cuidado con flores en simetría perfecta", "una tormenta eléctrica inmensa vista desde la costa"]
  tipos: ["bello", "sublime"]
  idx: uno_de([0, 1])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["bello", "sublime"]

enunciado: "\"{ejemplos[idx]}\" es un ejemplo más cercano a la categoría de..."

pasos:
  - "Armonía y tranquilidad = bello. Inmensidad y asombro/temor = sublime."

explicacion: |
  Cada ejemplo ilustra una de las dos categorías estéticas de la
  distinción clásica.
```

### 13 — Belleza artística puede representar algo no bello

```
metadata:
  materia: "filosofia"
  tema: "lo_bello"
  nivel: "avanzado"
  tags: ["belleza_artistica", "paradoja"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una obra puede lograr una gran calidad artística y ejecución técnica al representar algo que, en sí mismo, no es bello (el horror, la muerte, la fealdad), generando una paradoja interesante sobre qué se está evaluando como \"bello\"."

pasos:
  - "Se puede admirar la ejecución sin que el contenido representado sea bello en sí."

explicacion: |
  Verdadero: es una paradoja clásica de la estética que separa la
  belleza formal/técnica de la belleza del contenido representado.
```

### 14 — La belleza natural no tiene un autor deliberado

```
metadata:
  materia: "filosofia"
  tema: "lo_bello"
  nivel: "intermedio"
  tags: ["belleza_natural"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de la belleza artística, la belleza natural (un atardecer, una montaña) no fue creada deliberadamente por nadie con intención estética."

pasos:
  - "Esa ausencia de intención plantea la pregunta de si es el mismo tipo de belleza que la artística."

explicacion: |
  Verdadero: es la diferencia clave que distingue belleza natural de
  belleza artística.
```

### 15 — No hay consenso sobre belleza y función

```
metadata:
  materia: "filosofia"
  tema: "lo_bello"
  nivel: "avanzado"
  tags: ["belleza_y_funcion", "debate_abierto"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El debate sobre si la belleza de un objeto funcional depende de su función, o es independiente de ella, no tiene una respuesta filosófica consensuada."

pasos:
  - "Es otro caso, dentro de la estética, donde se describen las posturas sin declarar una ganadora."

explicacion: |
  Verdadero: es coherente con el criterio de neutralidad aplicado en
  toda la materia de Filosofía.
```

### 16 — Lo bello y lo sublime son categorías estéticas distintas

```
metadata:
  materia: "filosofia"
  tema: "lo_bello"
  nivel: "avanzado"
  tags: ["lo_bello", "lo_sublime"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Lo bello y lo sublime son dos categorías estéticas distintas, no dos grados de lo mismo: generan experiencias emocionales de tipo diferente (tranquilidad vs. asombro/temor)."

pasos:
  - "No se trata de que lo sublime sea \"más bello\" que lo bello, son cualitativamente distintos."

explicacion: |
  Verdadero: son dos categorías paralelas, no una escala de más o
  menos de la misma cualidad.
```

### 17 — Lo bello cierra la subrama de estética

```
metadata:
  materia: "filosofia"
  tema: "lo_bello"
  nivel: "avanzado"
  tags: ["lo_bello", "sintesis"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Lo bello cierra, junto con Qué es el arte y El gusto estético, la subrama completa de estética de este mapa."

pasos:
  - "Ver `../que-es-el-arte/` y `../el-gusto-estetico/`: los tres son nodos hermanos con ángulos distintos de la experiencia estética."

explicacion: |
  Verdadero: es la síntesis de la subrama completa de estética.
```

### 18 — Ordenar el análisis de una obra según categorías estéticas

```
metadata:
  materia: "filosofia"
  tema: "lo_bello"
  nivel: "intermedio"
  tags: ["lo_bello", "metodo"]

enunciado: "Ordená los pasos para analizar la experiencia estética que genera una obra o paisaje."
tipo: ordenar
opciones_explicitas:
  - "Describir la experiencia emocional que genera (tranquilidad, asombro, etc.)"
  - "Determinar si esa experiencia corresponde más a lo bello (armonía) o a lo sublime (inmensidad/asombro)"
  - "Revisar si hay proporción o armonía formal identificable en el caso de lo bello"
  - "Considerar si se trata de belleza natural o artística, según corresponda"
respuesta_orden: ["Describir la experiencia emocional que genera (tranquilidad, asombro, etc.)", "Determinar si esa experiencia corresponde más a lo bello (armonía) o a lo sublime (inmensidad/asombro)", "Revisar si hay proporción o armonía formal identificable en el caso de lo bello", "Considerar si se trata de belleza natural o artística, según corresponda"]
explicacion: |
  El análisis va de la experiencia emocional general a las
  distinciones más específicas (bello/sublime, natural/artística).
```

### 19 — Lo bello no agota el análisis del arte

```
metadata:
  materia: "filosofia"
  tema: "lo_bello"
  nivel: "avanzado"
  tags: ["lo_bello", "que_es_el_arte", "el_gusto_estetico"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Analizar completamente una obra de arte requiere combinar las tres preguntas de esta subrama: qué la hace arte, cómo se juzga su valor, y si (además) puede considerarse bella."

pasos:
  - "Ver `../que-es-el-arte/` y `../el-gusto-estetico/`: las tres preguntas son complementarias, ninguna sola agota el análisis estético."

explicacion: |
  Verdadero: es la síntesis final de por qué se necesitan los tres
  temas juntos para un análisis estético completo.
```

### 20 — Aplicación: distinguir belleza de otras cualidades valoradas

```
metadata:
  materia: "filosofia"
  tema: "lo_bello"
  nivel: "avanzado"
  tags: ["lo_bello", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Al describir una obra de arte, conviene distinguir si lo que se admira es su belleza (armonía), su valor técnico/artístico, o su capacidad de generar asombro (lo sublime), en vez de usar \"es hermoso\" como elogio genérico para todo."

pasos:
  - "Usar el vocabulario preciso de este tema permite un análisis estético más matizado que un elogio genérico."

explicacion: |
  Verdadero: es la aplicación práctica de distinguir con precisión
  las distintas categorías estéticas estudiadas en esta subrama.
```
