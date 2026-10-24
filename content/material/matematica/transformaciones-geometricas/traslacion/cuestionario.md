# Matemática — Transformaciones geométricas: Traslación (cuestionario, 22 preguntas VBLang)

> Tema: `GO8a`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es una traslación

```
metadata:
  materia: "matematicas"
  tema: "traslacion"
  nivel: "basico"
  tags: ["traslacion", "vocabulario"]

enunciado: "¿Qué es una traslación en geometría?"
tipo: mc
opciones_explicitas:
  - "Deslizar una figura entera en una dirección, sin girarla y sin voltearla"
  - "Girar una figura alrededor de un punto"
  - "Reflejar una figura sobre una línea, como en un espejo"
respuesta: "Deslizar una figura entera en una dirección, sin girarla y sin voltearla"

explicacion: |
  Todos los puntos de la figura se mueven la misma distancia, en la
  misma dirección.
```

### 2 — Qué define un vector de traslación

```
metadata:
  materia: "matematicas"
  tema: "traslacion"
  nivel: "basico"
  tags: ["traslacion", "vocabulario"]

enunciado: "¿Qué dos cosas define un vector de traslación?"
tipo: mc
opciones_explicitas:
  - "Una dirección y una magnitud (longitud)"
  - "Un ángulo y un centro de giro"
  - "Un eje de simetría"
respuesta: "Una dirección y una magnitud (longitud)"

explicacion: |
  Ese vector es el mismo para todos los puntos de la figura.
```

### 3 — La traslación preserva forma y tamaño

```
metadata:
  materia: "matematicas"
  tema: "traslacion"
  nivel: "basico"
  tags: ["traslacion"]

respuesta: verdadero
tipo: vf

enunciado: "Una traslación preserva la forma y el tamaño de la figura original."

explicacion: |
  Es una isometría: la imagen es congruente a la original.
```

### 4 — La traslación no cambia la orientación

```
metadata:
  materia: "matematicas"
  tema: "traslacion"
  nivel: "intermedio"
  tags: ["traslacion"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de la rotación y la reflexión, una traslación no cambia la orientación de la figura: no queda girada ni espejada."

explicacion: |
  La figura sólo cambia de posición, se mantiene "mirando" hacia el
  mismo lado.
```

### 5 — Ejemplo cotidiano de traslación

```
metadata:
  materia: "matematicas"
  tema: "traslacion"
  nivel: "basico"
  tags: ["traslacion", "vocabulario"]

enunciado: "¿Cuál de estas es un ejemplo de traslación?"
tipo: mc
opciones_explicitas:
  - "Deslizar una ficha de ajedrez de una casilla a otra sin rotarla"
  - "Girar la manecilla de un reloj"
  - "Ver el reflejo de un objeto en un espejo"
respuesta: "Deslizar una ficha de ajedrez de una casilla a otra sin rotarla"

explicacion: |
  La ficha cambia de lugar pero mantiene su orientación exacta.
```

### 6 — La imagen trasladada es congruente a la original

```
metadata:
  materia: "matematicas"
  tema: "traslacion"
  nivel: "intermedio"
  tags: ["traslacion", "congruencia"]

respuesta: verdadero
tipo: vf

enunciado: "La figura resultante de una traslación (la imagen) es siempre congruente a la figura original."

explicacion: |
  Congruente significa mismo tamaño y forma — la traslación no altera
  ninguna de las dos.
```

### 7 — Problema: trasladar un punto en una recta numérica

```
metadata:
  materia: "matematicas"
  tema: "traslacion"
  nivel: "intermedio"
  tags: ["traslacion", "problema"]

variables:
  punto: random(-10, 10)
  vector: random(1, 15)

respuesta: punto + vector
tipo: input
tolerancia_abs: 0

enunciado: "Un punto está en la posición {punto} de una recta numérica. Se le aplica una traslación de {vector} unidades hacia la derecha. ¿En qué posición queda?"

pasos:
  - "{punto} + {vector} = {punto + vector}"

explicacion: |
  Trasladar hacia la derecha es sumar la magnitud del vector a la
  posición original.
```

### 8 — Problema: trasladar un punto hacia la izquierda

```
metadata:
  materia: "matematicas"
  tema: "traslacion"
  nivel: "intermedio"
  tags: ["traslacion", "problema"]

variables:
  punto: random(-5, 15)
  vector: random(1, 15)

respuesta: punto - vector
tipo: input
tolerancia_abs: 0

enunciado: "Un punto está en la posición {punto} de una recta numérica. Se le aplica una traslación de {vector} unidades hacia la izquierda. ¿En qué posición queda?"

pasos:
  - "{punto} − {vector} = {punto - vector}"

explicacion: |
  Trasladar hacia la izquierda es restar la magnitud del vector.
```

### 9 — Todos los puntos se mueven la misma distancia

```
metadata:
  materia: "matematicas"
  tema: "traslacion"
  nivel: "basico"
  tags: ["traslacion"]

respuesta: verdadero
tipo: vf

enunciado: "En una traslación, todos los puntos de la figura se mueven exactamente la misma distancia y en la misma dirección."

explicacion: |
  Es lo que define al vector de traslación: es único para toda la
  figura, no varía punto por punto.
```

### 10 — La traslación no deja ningún punto fijo

```
metadata:
  materia: "matematicas"
  tema: "traslacion"
  nivel: "avanzado"
  tags: ["traslacion"]

respuesta: verdadero
tipo: vf

enunciado: "Salvo el caso trivial de un vector de longitud cero, una traslación no deja ningún punto de la figura en su lugar original."

explicacion: |
  A diferencia de la rotación (que fija el centro) o la reflexión (que
  fija el eje completo), la traslación mueve todo por igual.
```

### 11 — Problema: dos traslaciones sucesivas

```
metadata:
  materia: "matematicas"
  tema: "traslacion"
  nivel: "avanzado"
  tags: ["traslacion", "problema"]

variables:
  punto: random(0, 10)
  vector: random(2, 8)

respuesta: punto + (2 * vector)
tipo: input
tolerancia_abs: 0

enunciado: "Un punto está en la posición {punto}. Se le aplican dos traslaciones seguidas, cada una de {vector} unidades hacia la derecha (como un patrón que se repite). ¿En qué posición final queda?"

pasos:
  - "Primera traslación: {punto} + {vector} = {punto + vector}"
  - "Segunda traslación: {punto + vector} + {vector} = {punto + (2 * vector)}"

explicacion: |
  Aplicar la misma traslación dos veces equivale a sumar el vector dos
  veces — la misma idea detrás de un patrón de baldosas repetido.
```

### 12 — Qué tienen en común traslación, rotación y reflexión

```
metadata:
  materia: "matematicas"
  tema: "traslacion"
  nivel: "avanzado"
  tags: ["traslacion", "vocabulario"]

enunciado: "¿Qué tienen en común la traslación, la rotación y la reflexión?"
tipo: mc
opciones_explicitas:
  - "Las tres son isometrías: no cambian ni la forma ni el tamaño de la figura"
  - "Las tres cambian el tamaño de la figura"
  - "Las tres necesitan un centro de giro"
respuesta: "Las tres son isometrías: no cambian ni la forma ni el tamaño de la figura"

explicacion: |
  La homotecia (ver `../homotecia/`) es la única de las cuatro que sí
  cambia el tamaño.
```

### 13 — Completar: qué conserva la traslación

```
metadata:
  materia: "matematicas"
  tema: "traslacion"
  nivel: "intermedio"
  tags: ["traslacion", "completar"]

tipo: completar
enunciado: "Completá: la traslación conserva la forma, el tamaño Y la ___ de la figura (no la gira ni la voltea)."
respuestas_validas:
  - "orientación"

explicacion: |
  Es lo único que no conservan la rotación ni la reflexión.
```

### 14 — Ordenar: qué hace falta para describir una traslación

```
metadata:
  materia: "matematicas"
  tema: "traslacion"
  nivel: "intermedio"
  tags: ["traslacion", "ordenar"]

enunciado: "Ordená los pasos para aplicar una traslación a una figura."
tipo: ordenar
opciones_explicitas:
  - "La figura resultante (imagen) queda congruente a la original, sólo que desplazada"
  - "Definir el vector de traslación: una dirección y una magnitud"
  - "Mover cada punto de la figura esa misma distancia, en esa misma dirección"
respuesta_orden: ["Definir el vector de traslación: una dirección y una magnitud", "Mover cada punto de la figura esa misma distancia, en esa misma dirección", "La figura resultante (imagen) queda congruente a la original, sólo que desplazada"]
explicacion: |
  El vector es el mismo para toda la figura: no varía punto por punto.
```

### 15 — Problema: distancia recorrida por traslación

```
metadata:
  materia: "matematicas"
  tema: "traslacion"
  nivel: "basico"
  tags: ["traslacion", "problema"]

variables:
  origen: random(-20, 0)
  destino: random(1, 20)

respuesta: destino - origen
tipo: input
tolerancia_abs: 0

enunciado: "Una figura se traslada de la posición {origen} a la posición {destino} en una recta numérica. ¿Cuál es la magnitud del vector de traslación?"

pasos:
  - "{destino} − ({origen}) = {destino - origen}"

explicacion: |
  La magnitud del vector es la diferencia entre la posición final y la
  inicial.
```

### 16 — La traslación no es lo mismo que la rotación

```
metadata:
  materia: "matematicas"
  tema: "traslacion"
  nivel: "basico"
  tags: ["traslacion"]

respuesta: falso
tipo: vf

enunciado: "Una traslación y una rotación son exactamente lo mismo."

explicacion: |
  La traslación desliza sin girar; la rotación gira alrededor de un
  centro fijo (ver `../rotacion/`) — son transformaciones distintas.
```

### 17 — Un patrón de baldosas usa traslación

```
metadata:
  materia: "matematicas"
  tema: "traslacion"
  nivel: "intermedio"
  tags: ["traslacion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un patrón de baldosas o un papel tapiz que repite el mismo motivo, siempre en la misma orientación, es un ejemplo de traslaciones repetidas."

explicacion: |
  El mismo motivo se desliza el mismo vector una y otra vez, sin girar
  ni espejar.
```

### 18 — Problema: hallar el vector dado el punto inicial y el final

```
metadata:
  materia: "matematicas"
  tema: "traslacion"
  nivel: "intermedio"
  tags: ["traslacion", "problema"]

variables:
  inicial: random(1, 15)
  vector: random(-10, 10)

respuesta: inicial + vector
tipo: input
tolerancia_abs: 0

enunciado: "Un punto en la posición {inicial} se traslada aplicando un vector de {vector} unidades (positivo hacia la derecha, negativo hacia la izquierda). ¿En qué posición queda?"

pasos:
  - "{inicial} + ({vector}) = {inicial + vector}"

explicacion: |
  Un vector negativo desplaza hacia la izquierda; uno positivo, hacia la
  derecha.
```

### 19 — La traslación cambia sólo la posición

```
metadata:
  materia: "matematicas"
  tema: "traslacion"
  nivel: "basico"
  tags: ["traslacion"]

enunciado: "¿Qué es lo único que cambia en una figura después de una traslación?"
tipo: mc
opciones_explicitas:
  - "Su posición"
  - "Su tamaño"
  - "Su forma"
respuesta: "Su posición"

explicacion: |
  Forma, tamaño y orientación quedan exactamente igual.
```

### 20 — Un vector de longitud cero no mueve nada

```
metadata:
  materia: "matematicas"
  tema: "traslacion"
  nivel: "avanzado"
  tags: ["traslacion"]

respuesta: verdadero
tipo: vf

enunciado: "Un vector de traslación de longitud cero deja la figura exactamente en el mismo lugar."

explicacion: |
  Es el único caso en el que una traslación sí deja puntos fijos: todos
  ellos, porque nada se mueve.
```

### 21 — Distinguir traslación de otras transformaciones

```
metadata:
  materia: "matematicas"
  tema: "traslacion"
  nivel: "intermedio"
  tags: ["traslacion", "vocabulario"]

enunciado: "Una figura cambia de posición pero NO cambia de tamaño, forma NI orientación. ¿Qué transformación es?"
tipo: mc
opciones_explicitas:
  - "Una traslación"
  - "Una homotecia"
  - "Una reflexión"
respuesta: "Una traslación"

explicacion: |
  Es la única de las cuatro que conserva también la orientación.
```

### 22 — Cierre: para qué sirve la traslación

```
metadata:
  materia: "matematicas"
  tema: "traslacion"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve entender la traslación?"
tipo: mc
opciones_explicitas:
  - "Es la base de cualquier patrón repetitivo: mosaicos, guardas, papel tapiz"
  - "Sólo sirve para triángulos rectángulos"
  - "Sólo tiene aplicación en el espacio, nunca en el plano"
respuesta: "Es la base de cualquier patrón repetitivo: mosaicos, guardas, papel tapiz"

explicacion: |
  Cualquier diseño donde un motivo se repite sin girar ni cambiar de
  tamaño usa traslaciones.
```
