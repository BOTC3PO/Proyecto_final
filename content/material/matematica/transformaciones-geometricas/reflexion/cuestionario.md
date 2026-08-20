# Matemática — Transformaciones geométricas: Reflexión (cuestionario, 22 preguntas VBLang)

> Tema: `GO8c`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es una reflexión

```
metadata:
  materia: "matematicas"
  tema: "reflexion"
  nivel: "basico"
  tags: ["reflexion", "vocabulario"]

enunciado: "¿Qué es una reflexión en geometría?"
tipo: mc
opciones_explicitas:
  - "Voltear una figura como en un espejo, respecto de una línea (el eje de simetría)"
  - "Deslizar una figura sin girarla"
  - "Girar una figura alrededor de un punto"
respuesta: "Voltear una figura como en un espejo, respecto de una línea (el eje de simetría)"

explicacion: |
  Cada punto y su reflejo quedan a la misma distancia del eje, en lados
  opuestos.
```

### 2 — Qué es el eje de simetría

```
metadata:
  materia: "matematicas"
  tema: "reflexion"
  nivel: "basico"
  tags: ["reflexion", "vocabulario"]

enunciado: "¿Qué es el eje de simetría de una reflexión?"
tipo: mc
opciones_explicitas:
  - "La línea que actúa como espejo: cada punto y su reflejo quedan a la misma distancia de ella"
  - "El punto que no se mueve durante la transformación"
  - "El vector que define la dirección del movimiento"
respuesta: "La línea que actúa como espejo: cada punto y su reflejo quedan a la misma distancia de ella"

explicacion: |
  A diferencia de la rotación (un punto fijo) o la traslación (ningún
  punto fijo), acá lo fijo es toda una línea.
```

### 3 — La reflexión preserva forma y tamaño

```
metadata:
  materia: "matematicas"
  tema: "reflexion"
  nivel: "basico"
  tags: ["reflexion"]

respuesta: verdadero
tipo: vf

enunciado: "Una reflexión preserva la forma y el tamaño de la figura original."

explicacion: |
  Es una isometría: la imagen es congruente a la original.
```

### 4 — La reflexión invierte la orientación

```
metadata:
  materia: "matematicas"
  tema: "reflexion"
  nivel: "intermedio"
  tags: ["reflexion"]

respuesta: verdadero
tipo: vf

enunciado: "Una reflexión invierte la orientación de la figura: queda 'espejada'."

explicacion: |
  Es lo que distingue a la reflexión de la traslación y la rotación.
```

### 5 — Problema: reflejar un punto respecto del eje en 0

```
metadata:
  materia: "matematicas"
  tema: "reflexion"
  nivel: "intermedio"
  tags: ["reflexion", "problema"]

variables:
  punto: random(1, 20)

respuesta: 0 - punto
tipo: input
tolerancia_abs: 0

enunciado: "En una recta numérica, el eje de simetría está en la posición 0. Un punto está en la posición {punto}. ¿En qué posición queda su reflejo?"

pasos:
  - "El reflejo queda a la misma distancia del eje, del otro lado: −{punto}"

explicacion: |
  Respecto del 0, reflejar es cambiar el signo de la posición.
```

### 6 — Problema: reflejar un punto respecto de un eje distinto de 0

```
metadata:
  materia: "matematicas"
  tema: "reflexion"
  nivel: "avanzado"
  tags: ["reflexion", "problema"]

variables:
  eje: random(5, 15)
  punto: random(1, 4)

respuesta: (2 * eje) - punto
tipo: input
tolerancia_abs: 0

enunciado: "En una recta numérica, el eje de simetría está en la posición {eje}. Un punto está en la posición {punto}. ¿En qué posición queda su reflejo?"

pasos:
  - "Distancia del punto al eje: {eje} − {punto} = {eje - punto}"
  - "El reflejo queda a esa misma distancia, del otro lado del eje: {eje} + {eje - punto} = {(2 * eje) - punto}"

explicacion: |
  El reflejo está tan lejos del eje, del otro lado, como estaba el punto
  original.
```

### 7 — Los puntos sobre el eje no se mueven

```
metadata:
  materia: "matematicas"
  tema: "reflexion"
  nivel: "basico"
  tags: ["reflexion"]

respuesta: verdadero
tipo: vf

enunciado: "Los puntos que están exactamente sobre el eje de simetría no cambian de posición al reflejar la figura."

explicacion: |
  Están a distancia 0 del eje, así que su reflejo cae en el mismo lugar.
```

### 8 — Ejemplo cotidiano de reflexión

```
metadata:
  materia: "matematicas"
  tema: "reflexion"
  nivel: "basico"
  tags: ["reflexion", "vocabulario"]

enunciado: "¿Cuál de estas es un ejemplo cotidiano de reflexión?"
tipo: mc
opciones_explicitas:
  - "El reflejo de un árbol en la superficie de un lago"
  - "Las manecillas de un reloj girando"
  - "Un cajón que se desliza al abrirlo"
respuesta: "El reflejo de un árbol en la superficie de un lago"

explicacion: |
  La superficie del agua actúa como el eje (o plano) de simetría.
```

### 9 — Problema: ejes de simetría de un cuadrado

```
metadata:
  materia: "matematicas"
  tema: "reflexion"
  nivel: "intermedio"
  tags: ["reflexion", "problema"]

respuesta: 4
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos ejes de simetría tiene un cuadrado?"

explicacion: |
  Las dos diagonales, más las dos líneas que unen los puntos medios de
  lados opuestos: 4 en total.
```

### 10 — Un círculo tiene infinitos ejes de simetría

```
metadata:
  materia: "matematicas"
  tema: "reflexion"
  nivel: "intermedio"
  tags: ["reflexion", "vocabulario"]

enunciado: "¿Cuántos ejes de simetría tiene un círculo?"
tipo: mc
opciones_explicitas:
  - "Infinitos: cualquier diámetro es un eje de simetría"
  - "Ninguno"
  - "Exactamente 4"
respuesta: "Infinitos: cualquier diámetro es un eje de simetría"

explicacion: |
  Cualquier línea que pase por el centro divide al círculo en dos
  mitades espejadas.
```

### 11 — La letra A tiene un eje de simetría vertical

```
metadata:
  materia: "matematicas"
  tema: "reflexion"
  nivel: "basico"
  tags: ["reflexion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La letra 'A' mayúscula (en su forma geométrica típica) tiene un eje de simetría vertical."

explicacion: |
  Su mitad izquierda es el reflejo de su mitad derecha.
```

### 12 — La letra N no tiene eje de simetría

```
metadata:
  materia: "matematicas"
  tema: "reflexion"
  nivel: "basico"
  tags: ["reflexion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La letra 'N' mayúscula no tiene ningún eje de simetría (ninguna línea la refleja en sí misma)."

explicacion: |
  Ninguna línea vertical, horizontal ni diagonal la refleja en sí misma
  (aunque sí tiene simetría rotacional de 180°, algo distinto).
```

### 13 — Qué significa tener simetría axial

```
metadata:
  materia: "matematicas"
  tema: "reflexion"
  nivel: "intermedio"
  tags: ["reflexion", "vocabulario"]

enunciado: "¿Qué significa que una figura tenga simetría axial?"
tipo: mc
opciones_explicitas:
  - "Que existe al menos un eje respecto del cual la figura reflejada coincide exactamente con la original"
  - "Que la figura tiene todos los lados iguales"
  - "Que la figura se puede rotar y queda igual"
respuesta: "Que existe al menos un eje respecto del cual la figura reflejada coincide exactamente con la original"

explicacion: |
  Es la simetría "de espejo", distinta de la simetría rotacional.
```

### 14 — Dos reflexiones sucesivas equivalen a una rotación

```
metadata:
  materia: "matematicas"
  tema: "reflexion"
  nivel: "avanzado"
  tags: ["reflexion"]

respuesta: verdadero
tipo: vf

enunciado: "Aplicar dos reflexiones seguidas sobre dos ejes distintos que se cruzan equivale a una rotación alrededor del punto de cruce."

explicacion: |
  Es la conexión entre reflexión y rotación, clave en el diseño de
  rosetones.
```

### 15 — Distinguir reflexión de rotación

```
metadata:
  materia: "matematicas"
  tema: "reflexion"
  nivel: "intermedio"
  tags: ["reflexion", "vocabulario"]

enunciado: "¿Qué diferencia principal hay entre una reflexión y una rotación?"
tipo: mc
opciones_explicitas:
  - "La reflexión deja fija toda una línea (el eje); la rotación deja fijo un solo punto (el centro)"
  - "La reflexión cambia el tamaño de la figura; la rotación no"
  - "No hay ninguna diferencia real"
respuesta: "La reflexión deja fija toda una línea (el eje); la rotación deja fijo un solo punto (el centro)"

explicacion: |
  Esa es la diferencia estructural entre ambas isometrías.
```

### 16 — Ordenar: pasos para reflejar una figura

```
metadata:
  materia: "matematicas"
  tema: "reflexion"
  nivel: "intermedio"
  tags: ["reflexion", "ordenar"]

enunciado: "Ordená los pasos para reflejar un punto respecto de un eje."
tipo: ordenar
opciones_explicitas:
  - "Ese nuevo punto es el reflejo"
  - "Medir la distancia del punto al eje de simetría"
  - "Ubicar esa misma distancia del otro lado del eje"
respuesta_orden: ["Medir la distancia del punto al eje de simetría", "Ubicar esa misma distancia del otro lado del eje", "Ese nuevo punto es el reflejo"]
explicacion: |
  La distancia al eje se conserva; sólo cambia de lado.
```

### 17 — Problema: distancia entre un punto y su reflejo

```
metadata:
  materia: "matematicas"
  tema: "reflexion"
  nivel: "avanzado"
  tags: ["reflexion", "problema"]

variables:
  distancia_al_eje: random(2, 20)

respuesta: 2 * distancia_al_eje
tipo: input
tolerancia_abs: 0

enunciado: "Un punto está a {distancia_al_eje} cm del eje de simetría. ¿A qué distancia queda ese punto de su propio reflejo?"

pasos:
  - "2 × {distancia_al_eje} = {2 * distancia_al_eje} cm"

explicacion: |
  El punto y su reflejo están cada uno a esa distancia del eje, en
  lados opuestos: la distancia entre ambos es el doble.
```

### 18 — La reflexión es una isometría

```
metadata:
  materia: "matematicas"
  tema: "reflexion"
  nivel: "intermedio"
  tags: ["reflexion"]

respuesta: verdadero
tipo: vf

enunciado: "La reflexión es una isometría: no cambia ni la forma ni el tamaño de la figura."

explicacion: |
  Junto con la traslación y la rotación, es una de las tres isometrías.
```

### 19 — Por qué una F reflejada no coincide deslizando o girando

```
metadata:
  materia: "matematicas"
  tema: "reflexion"
  nivel: "avanzado"
  tags: ["reflexion", "vocabulario"]

enunciado: "¿Por qué una letra 'F' reflejada no se puede hacer coincidir con una 'F' normal deslizándola o girándola, sólo volteándola?"
tipo: mc
opciones_explicitas:
  - "Porque la reflexión invierte la orientación de la figura, algo que ni la traslación ni la rotación hacen"
  - "Porque la reflexión cambia el tamaño de la letra"
  - "En realidad sí se puede, con suficiente rotación"
respuesta: "Porque la reflexión invierte la orientación de la figura, algo que ni la traslación ni la rotación hacen"

explicacion: |
  Es la propiedad distintiva de la reflexión frente a las otras dos
  isometrías.
```

### 20 — Problema: reflejar un punto respecto de otro eje

```
metadata:
  materia: "matematicas"
  tema: "reflexion"
  nivel: "avanzado"
  tags: ["reflexion", "problema"]

variables:
  eje: random(10, 30)
  punto: random(1, 9)

respuesta: (2 * eje) - punto
tipo: input
tolerancia_abs: 0

enunciado: "En una recta numérica, el eje de simetría está en la posición {eje}. Un punto está en la posición {punto}. ¿En qué posición queda su reflejo?"

pasos:
  - "Distancia al eje: {eje} − {punto} = {eje - punto}"
  - "Reflejo: {eje} + {eje - punto} = {(2 * eje) - punto}"

explicacion: |
  Misma fórmula que el problema anterior, con otro eje y otro punto.
```

### 21 — Problema: ejes de simetría de un triángulo equilátero

```
metadata:
  materia: "matematicas"
  tema: "reflexion"
  nivel: "intermedio"
  tags: ["reflexion", "problema"]

respuesta: 3
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos ejes de simetría tiene un triángulo equilátero?"

explicacion: |
  Uno por cada vértice, pasando por el punto medio del lado opuesto.
```

### 22 — Cierre: para qué sirve la reflexión

```
metadata:
  materia: "matematicas"
  tema: "reflexion"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve entender la reflexión?"
tipo: mc
opciones_explicitas:
  - "Para describir y diseñar cualquier patrón simétrico tipo espejo: logos, rosetones, reflejos"
  - "Sólo sirve para calcular áreas"
  - "Sólo aplica a figuras con más de 6 lados"
respuesta: "Para describir y diseñar cualquier patrón simétrico tipo espejo: logos, rosetones, reflejos"

explicacion: |
  Junto con la rotación, es la base matemática de los diseños con
  simetría (ver `../../../arte/rosetones-y-simetria/`).
```
