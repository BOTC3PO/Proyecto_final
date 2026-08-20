# Matemática — Coordenadas de un punto (cuestionario, 24 preguntas VBLang)

> Tema: `GA2`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es un par ordenado

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "basico"
  tags: ["coordenadas", "vocabulario"]

enunciado: "¿Qué es un par ordenado, como (3, 5)?"
tipo: mc
opciones_explicitas:
  - "Dos números que identifican un punto: el primero es la posición horizontal, el segundo la vertical"
  - "Dos números que se pueden escribir en cualquier orden sin cambiar el punto"
  - "Un número dividido en dos partes"
respuesta: "Dos números que identifican un punto: el primero es la posición horizontal, el segundo la vertical"

explicacion: |
  Se llama "ordenado" porque el orden de los dos números importa.
```

### 2 — Qué es la abscisa

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "basico"
  tags: ["coordenadas", "vocabulario"]

enunciado: "¿Qué es la abscisa de un punto?"
tipo: mc
opciones_explicitas:
  - "La primera coordenada (x), la posición horizontal"
  - "La segunda coordenada (y), la posición vertical"
  - "La distancia del punto al origen"
respuesta: "La primera coordenada (x), la posición horizontal"

explicacion: |
  La ordenada es la segunda coordenada (y).
```

### 3 — Qué es la ordenada

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "basico"
  tags: ["coordenadas", "vocabulario"]

enunciado: "¿Qué es la ordenada de un punto?"
tipo: mc
opciones_explicitas:
  - "La segunda coordenada (y), la posición vertical"
  - "La primera coordenada (x), la posición horizontal"
  - "El nombre del propio punto"
respuesta: "La segunda coordenada (y), la posición vertical"

explicacion: |
  La abscisa es la primera coordenada (x).
```

### 4 — (2, 3) y (3, 2) son puntos distintos

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "intermedio"
  tags: ["coordenadas"]

respuesta: verdadero
tipo: vf

enunciado: "Los puntos (2, 3) y (3, 2) son puntos distintos en el plano cartesiano."

explicacion: |
  El orden de las coordenadas importa: invertirlo cambia el punto.
```

### 5 — Problema: primera coordenada de un punto

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "basico"
  tags: ["coordenadas", "problema"]

variables:
  x: random(-10, 10)
  oy: random(-10, 10)

respuesta: x
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es la abscisa (primera coordenada) del punto ({x}, {oy})?"

explicacion: |
  Es el primer número del par ordenado.
```

### 6 — Problema: segunda coordenada de un punto

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "basico"
  tags: ["coordenadas", "problema"]

variables:
  x: random(-10, 10)
  oy: random(-10, 10)

respuesta: oy
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es la ordenada (segunda coordenada) del punto ({x}, {oy})?"

explicacion: |
  Es el segundo número del par ordenado.
```

### 7 — Cómo se ubica un punto: primer paso

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "intermedio"
  tags: ["coordenadas", "vocabulario"]

enunciado: "Para ubicar el punto (4, -2) en el plano, ¿cuál es el primer movimiento desde el origen?"
tipo: mc
opciones_explicitas:
  - "Moverse 4 unidades a la derecha"
  - "Moverse 2 unidades hacia abajo"
  - "Moverse 4 unidades hacia arriba"
respuesta: "Moverse 4 unidades a la derecha"

explicacion: |
  Primero se mueve sobre el eje x (la abscisa), y recién después sobre
  el eje y.
```

### 8 — Un punto (a, 0) está sobre el eje x

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "intermedio"
  tags: ["coordenadas"]

respuesta: verdadero
tipo: vf

enunciado: "Cualquier punto de la forma (a, 0), con la segunda coordenada en 0, está siempre sobre el eje x."

explicacion: |
  No se mueve nada en dirección vertical, así que queda sobre el eje
  horizontal.
```

### 9 — Un punto (0, b) está sobre el eje y

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "intermedio"
  tags: ["coordenadas"]

respuesta: verdadero
tipo: vf

enunciado: "Cualquier punto de la forma (0, b), con la primera coordenada en 0, está siempre sobre el eje y."

explicacion: |
  No se mueve nada en dirección horizontal, así que queda sobre el eje
  vertical.
```

### 10 — Problema: coordenadas del origen

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "basico"
  tags: ["coordenadas", "problema"]

respuesta: "(0, 0)"
tipo: mc
opciones_explicitas:
  - "(0, 0)"
  - "(1, 1)"
  - "(0, 1)"

enunciado: "¿Cuáles son las coordenadas del origen del plano cartesiano?"

explicacion: |
  Es el único punto que no se mueve en ninguna dirección desde sí
  mismo.
```

### 11 — Coordenada negativa en x

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "intermedio"
  tags: ["coordenadas", "vocabulario"]

enunciado: "Si la abscisa de un punto es negativa, ¿hacia qué lado del origen queda ese punto?"
tipo: mc
opciones_explicitas:
  - "A la izquierda"
  - "A la derecha"
  - "Hacia abajo"
respuesta: "A la izquierda"

explicacion: |
  Los valores negativos de x quedan a la izquierda del origen.
```

### 12 — Coordenada negativa en y

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "intermedio"
  tags: ["coordenadas", "vocabulario"]

enunciado: "Si la ordenada de un punto es negativa, ¿hacia qué lado del origen queda ese punto?"
tipo: mc
opciones_explicitas:
  - "Hacia abajo"
  - "Hacia arriba"
  - "A la izquierda"
respuesta: "Hacia abajo"

explicacion: |
  Los valores negativos de y quedan hacia abajo del origen.
```

### 13 — Problema: describir un movimiento como coordenada

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "intermedio"
  tags: ["coordenadas", "problema"]

variables:
  x: random(1, 10)
  oy: random(1, 10)

respuesta: 0 - oy
tipo: input
tolerancia_abs: 0

enunciado: "Un punto está {x} unidades a la derecha del origen y {oy} unidades hacia abajo. ¿Cuál es su ordenada?"

explicacion: |
  Hacia abajo es y negativo: la ordenada es -{oy}.
```

### 14 — Dos pares con las mismas cifras pero orden distinto

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "avanzado"
  tags: ["coordenadas"]

respuesta: falso
tipo: vf

enunciado: "Los puntos (5, -1) y (-1, 5) representan la misma posición en el plano."

explicacion: |
  Tienen las mismas dos cifras, pero en orden distinto: son puntos
  distintos.
```

### 15 — Problema: ubicar el punto medio de los ejes (vocabulario)

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "basico"
  tags: ["coordenadas", "vocabulario"]

enunciado: "¿Qué nombre recibe el punto (0, 0) en el plano cartesiano?"
tipo: mc
opciones_explicitas:
  - "El origen"
  - "El vértice"
  - "El centro de masa"
respuesta: "El origen"

explicacion: |
  Es el punto de referencia desde el que se miden todas las posiciones.
```

### 16 — Coordenadas iguales en ambas posiciones

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "intermedio"
  tags: ["coordenadas", "problema"]

variables:
  n: random(1, 15)

respuesta: verdadero
tipo: vf

enunciado: "El punto ({n}, {n}) tiene la misma distancia horizontal y vertical al origen, porque su abscisa y su ordenada son iguales."

explicacion: |
  Ambas coordenadas valen {n}, así que el punto se mueve lo mismo en
  ambas direcciones desde el origen.
```

### 17 — Un par ordenado tiene exactamente dos números

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "basico"
  tags: ["coordenadas"]

respuesta: verdadero
tipo: vf

enunciado: "Un par ordenado en el plano cartesiano siempre tiene exactamente dos números: la abscisa y la ordenada."

explicacion: |
  Un tercer número haría falta recién en un espacio de tres dimensiones,
  fuera del alcance de este módulo.
```

### 18 — Ordenar: pasos para ubicar un punto en el plano

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "intermedio"
  tags: ["coordenadas", "ordenar"]

enunciado: "Ordená los pasos para ubicar el punto (x, y) en el plano cartesiano."
tipo: ordenar
opciones_explicitas:
  - "Desde ahí, moverse y unidades en dirección vertical"
  - "Partir del origen (0, 0)"
  - "Moverse x unidades sobre el eje horizontal"
respuesta_orden: ["Partir del origen (0, 0)", "Moverse x unidades sobre el eje horizontal", "Desde ahí, moverse y unidades en dirección vertical"]
explicacion: |
  Siempre se resuelve primero el movimiento horizontal (x), y recién
  después el vertical (y).
```

### 19 — Problema: abscisa de un punto sobre el eje y

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "intermedio"
  tags: ["coordenadas", "problema"]

variables:
  oy: random(-10, 10)

respuesta: 0
tipo: input
tolerancia_abs: 0

enunciado: "Un punto está sobre el eje y, en la posición vertical {oy}. ¿Cuál es su abscisa?"

explicacion: |
  Todo punto sobre el eje y tiene abscisa 0.
```

### 20 — Problema: ordenada de un punto sobre el eje x

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "intermedio"
  tags: ["coordenadas", "problema"]

variables:
  x: random(-10, 10)

respuesta: 0
tipo: input
tolerancia_abs: 0

enunciado: "Un punto está sobre el eje x, en la posición horizontal {x}. ¿Cuál es su ordenada?"

explicacion: |
  Todo punto sobre el eje x tiene ordenada 0.
```

### 21 — Completar: nombre de la primera coordenada

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "intermedio"
  tags: ["coordenadas", "completar"]

tipo: completar
enunciado: "Completá: la primera coordenada de un par ordenado se llama ___."
respuestas_validas:
  - "abscisa"

explicacion: |
  La segunda coordenada se llama ordenada.
```

### 22 — Completar: nombre de la segunda coordenada

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "intermedio"
  tags: ["coordenadas", "completar"]

tipo: completar
enunciado: "Completá: la segunda coordenada de un par ordenado se llama ___."
respuestas_validas:
  - "ordenada"

explicacion: |
  La primera coordenada se llama abscisa.
```

### 23 — Las coordenadas describen una posición exacta

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "avanzado"
  tags: ["coordenadas"]

respuesta: verdadero
tipo: vf

enunciado: "Un par ordenado describe una posición exacta y única en el plano: no puede haber dos puntos distintos con exactamente las mismas dos coordenadas."

explicacion: |
  Es lo que hace útil al sistema de coordenadas: cada punto tiene un
  'nombre' numérico propio.
```

### 24 — Cierre: para qué sirven las coordenadas

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve nombrar un punto con un par ordenado?"
tipo: mc
opciones_explicitas:
  - "Es la forma más compacta de describir una posición exacta, necesaria para medir distancias y hallar puntos medios más adelante"
  - "Sólo sirve para dibujar triángulos"
  - "Sólo aplica a puntos que están sobre los ejes"
respuesta: "Es la forma más compacta de describir una posición exacta, necesaria para medir distancias y hallar puntos medios más adelante"

explicacion: |
  Sin coordenadas, no se podría calcular ni distancia ni punto medio
  entre dos puntos.
```
