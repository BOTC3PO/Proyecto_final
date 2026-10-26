# Matemática — Transformaciones geométricas: Rotación (cuestionario, 23 preguntas VBLang)

> Tema: `GO8b`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es una rotación

```
metadata:
  materia: "matematicas"
  tema: "rotacion"
  nivel: "basico"
  tags: ["rotacion", "vocabulario"]

enunciado: "¿Qué es una rotación en geometría?"
tipo: mc
opciones_explicitas:
  - "Girar una figura alrededor de un punto fijo, una cierta cantidad de grados"
  - "Deslizar una figura sin girarla"
  - "Reflejar una figura sobre una línea"
respuesta: "Girar una figura alrededor de un punto fijo, una cierta cantidad de grados"

explicacion: |
  El punto fijo es el centro de rotación.
```

### 2 — Qué define una rotación

```
metadata:
  materia: "matematicas"
  tema: "rotacion"
  nivel: "basico"
  tags: ["rotacion", "vocabulario"]

enunciado: "¿Qué dos datos definen una rotación?"
tipo: mc
opciones_explicitas:
  - "El centro de rotación y el ángulo de rotación (con su sentido)"
  - "Un vector de dirección y magnitud"
  - "Un eje de simetría"
respuesta: "El centro de rotación y el ángulo de rotación (con su sentido)"

explicacion: |
  El sentido puede ser horario o antihorario.
```

### 3 — El centro de rotación no se mueve

```
metadata:
  materia: "matematicas"
  tema: "rotacion"
  nivel: "basico"
  tags: ["rotacion"]

respuesta: verdadero
tipo: vf

enunciado: "En una rotación, el centro de rotación es el único punto que no cambia de lugar."

explicacion: |
  Todos los demás puntos giran alrededor de él, recorriendo un arco de
  circunferencia.
```

### 4 — La rotación preserva forma y tamaño

```
metadata:
  materia: "matematicas"
  tema: "rotacion"
  nivel: "basico"
  tags: ["rotacion"]

respuesta: verdadero
tipo: vf

enunciado: "Una rotación preserva la forma y el tamaño de la figura original."

explicacion: |
  Es una isometría: la imagen es congruente a la original.
```

### 5 — La rotación sí cambia la orientación

```
metadata:
  materia: "matematicas"
  tema: "rotacion"
  nivel: "intermedio"
  tags: ["rotacion"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de la traslación, una rotación sí cambia la orientación de la figura (queda 'mirando' hacia otro lado)."

explicacion: |
  Sólo se mantiene el tamaño y la forma, no la orientación en el
  espacio.
```

### 6 — Una rotación de 360° devuelve la figura a su lugar

```
metadata:
  materia: "matematicas"
  tema: "rotacion"
  nivel: "basico"
  tags: ["rotacion"]

respuesta: verdadero
tipo: vf

enunciado: "Una rotación de 360° deja la figura exactamente en la misma posición y orientación que al principio."

explicacion: |
  360° es una vuelta completa.
```

### 7 — Problema: nueva posición angular tras rotar

```
metadata:
  materia: "matematicas"
  tema: "rotacion"
  nivel: "intermedio"
  tags: ["rotacion", "problema"]

variables:
  inicial: random(0, 350)
  angulo: random(10, 340)

respuesta: (inicial + angulo) - (floor((inicial + angulo) / 360) * 360)
tipo: input
tolerancia_abs: 0

enunciado: "Un punto está en la posición {inicial}° sobre una circunferencia. Se rota {angulo}° en sentido antihorario. ¿En qué posición (en grados, entre 0° y 360°) queda?"

pasos:
  - "{inicial}° + {angulo}° = {inicial + angulo}°"
  - "Si pasa de 360°, se le resta una vuelta completa: {(inicial + angulo) - (floor((inicial + angulo) / 360) * 360)}°"

explicacion: |
  Rotar es sumar el ángulo; si el resultado supera 360°, se resta una
  vuelta completa (la posición "da la vuelta").
```

### 8 — Problema: rotación de 180°

```
metadata:
  materia: "matematicas"
  tema: "rotacion"
  nivel: "intermedio"
  tags: ["rotacion", "problema"]

variables:
  inicial: random(0, 179)

respuesta: inicial + 180
tipo: input
tolerancia_abs: 0

enunciado: "Un punto está en la posición {inicial}° sobre una circunferencia. Se rota 180°. ¿En qué posición queda?"

pasos:
  - "{inicial}° + 180° = {inicial + 180}°"

explicacion: |
  Una rotación de 180° pone al punto exactamente del otro lado del
  centro, a la misma distancia.
```

### 9 — Qué es la simetría rotacional

```
metadata:
  materia: "matematicas"
  tema: "rotacion"
  nivel: "avanzado"
  tags: ["rotacion", "vocabulario"]

enunciado: "¿Qué es la simetría rotacional de una figura?"
tipo: mc
opciones_explicitas:
  - "Que la figura se ve exactamente igual después de rotarla menos de 360°"
  - "Que la figura tiene un eje de simetría"
  - "Que todos sus lados miden lo mismo"
respuesta: "Que la figura se ve exactamente igual después de rotarla menos de 360°"

explicacion: |
  Por ejemplo, un cuadrado se ve igual rotado 90°, sin necesidad de
  completar la vuelta entera.
```

### 10 — Problema: ángulo mínimo de simetría de un polígono regular

```
metadata:
  materia: "matematicas"
  tema: "rotacion"
  nivel: "avanzado"
  tags: ["rotacion", "problema"]

variables:
  n: uno_de([3, 4, 5, 6, 8, 9, 10, 12])

respuesta: 360 / n
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el ángulo mínimo de rotación con el que un polígono REGULAR de {n} lados se ve exactamente igual a sí mismo?"

pasos:
  - "360° ÷ {n} = {360 / n}°"

explicacion: |
  Un polígono regular de n lados tiene simetría rotacional cada
  360°/n.
```

### 11 — Completar: fórmula del ángulo mínimo de simetría

```
metadata:
  materia: "matematicas"
  tema: "rotacion"
  nivel: "intermedio"
  tags: ["rotacion", "completar"]

tipo: completar
enunciado: "Completá: el ángulo mínimo de simetría rotacional de un polígono regular de n lados es 360° dividido ___."
respuestas_validas:
  - "n"

explicacion: |
  A más lados, menor el ángulo mínimo de simetría.
```

### 12 — Ejemplo real de rotación

```
metadata:
  materia: "matematicas"
  tema: "rotacion"
  nivel: "basico"
  tags: ["rotacion", "vocabulario"]

enunciado: "¿Cuál de estas es un ejemplo cotidiano de rotación?"
tipo: mc
opciones_explicitas:
  - "Las aspas de un ventilador girando alrededor de su eje"
  - "Un cajón que se desliza al abrirlo"
  - "El reflejo de un objeto en un espejo"
respuesta: "Las aspas de un ventilador girando alrededor de su eje"

explicacion: |
  El eje del ventilador es el centro de rotación.
```

### 13 — Ordenar: pasos para aplicar una rotación

```
metadata:
  materia: "matematicas"
  tema: "rotacion"
  nivel: "intermedio"
  tags: ["rotacion", "ordenar"]

enunciado: "Ordená los pasos para aplicar una rotación a una figura."
tipo: ordenar
opciones_explicitas:
  - "Girar cada punto de la figura ese ángulo alrededor del centro"
  - "Elegir el centro de rotación (el punto que no se va a mover)"
  - "Definir el ángulo de rotación y el sentido (horario o antihorario)"
respuesta_orden: ["Elegir el centro de rotación (el punto que no se va a mover)", "Definir el ángulo de rotación y el sentido (horario o antihorario)", "Girar cada punto de la figura ese ángulo alrededor del centro"]
explicacion: |
  El centro se define primero: todo el resto del giro se mide respecto
  de él.
```

### 14 — Rotar en sentido horario o antihorario da resultados distintos

```
metadata:
  materia: "matematicas"
  tema: "rotacion"
  nivel: "intermedio"
  tags: ["rotacion"]

respuesta: verdadero
tipo: vf

enunciado: "Salvo en el caso de 180°, rotar una figura X grados en sentido horario da un resultado distinto que rotarla X grados en sentido antihorario."

explicacion: |
  El sentido importa tanto como la magnitud del ángulo — sólo a 180° dan
  el mismo resultado, porque quedan exactamente opuestos.
```

### 15 — Problema: dos rotaciones sucesivas

```
metadata:
  materia: "matematicas"
  tema: "rotacion"
  nivel: "avanzado"
  tags: ["rotacion", "problema"]

variables:
  angulo1: random(20, 150)
  angulo2: random(20, 150)

respuesta: angulo1 + angulo2
tipo: input
tolerancia_abs: 0

enunciado: "Una figura se rota {angulo1}° y después se rota otros {angulo2}° más, en el mismo sentido y alrededor del mismo centro. ¿A qué rotación total equivale?"

pasos:
  - "{angulo1}° + {angulo2}° = {angulo1 + angulo2}°"

explicacion: |
  Dos rotaciones sucesivas alrededor del mismo centro equivalen a una
  sola rotación con la suma de los ángulos.
```

### 16 — Qué distingue a la rotación de la traslación

```
metadata:
  materia: "matematicas"
  tema: "rotacion"
  nivel: "intermedio"
  tags: ["rotacion", "vocabulario"]

enunciado: "¿Qué distingue a la rotación de la traslación?"
tipo: mc
opciones_explicitas:
  - "La rotación tiene un punto fijo (el centro) y cambia la orientación; la traslación no tiene puntos fijos y mantiene la orientación"
  - "La rotación cambia el tamaño de la figura; la traslación no"
  - "No hay ninguna diferencia real entre las dos"
respuesta: "La rotación tiene un punto fijo (el centro) y cambia la orientación; la traslación no tiene puntos fijos y mantiene la orientación"

explicacion: |
  Son las dos diferencias clave entre ambas transformaciones.
```

### 17 — La rotación es una isometría

```
metadata:
  materia: "matematicas"
  tema: "rotacion"
  nivel: "intermedio"
  tags: ["rotacion"]

respuesta: verdadero
tipo: vf

enunciado: "La rotación es una isometría: no cambia ni la forma ni el tamaño de la figura, sólo su orientación y posición."

explicacion: |
  Junto con la traslación y la reflexión, es una de las tres isometrías
  (la homotecia es la excepción: sí cambia el tamaño).
```

### 18 — Problema: hexágono regular, simetría rotacional

```
metadata:
  materia: "matematicas"
  tema: "rotacion"
  nivel: "avanzado"
  tags: ["rotacion", "problema"]

respuesta: 60
tipo: input
tolerancia_abs: 0

enunciado: "¿Cada cuántos grados un hexágono regular se ve exactamente igual a sí mismo al rotarlo?"

pasos:
  - "360° ÷ 6 = 60°"

explicacion: |
  Un hexágono regular tiene 6 lados: 360° ÷ 6 = 60°.
```

### 19 — Problema: hallar n dado el ángulo mínimo de simetría

```
metadata:
  materia: "matematicas"
  tema: "rotacion"
  nivel: "avanzado"
  tags: ["rotacion", "problema"]

variables:
  n: uno_de([3, 4, 5, 6, 8, 9, 10, 12])

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "Un polígono regular tiene simetría rotacional cada {360 / n}°. ¿Cuántos lados tiene?"

pasos:
  - "360° ÷ {360 / n}° = {n}"

explicacion: |
  Se despeja n dividiendo 360° por el ángulo mínimo dado.
```

### 20 — Un círculo tiene infinitos ángulos de simetría rotacional

```
metadata:
  materia: "matematicas"
  tema: "rotacion"
  nivel: "avanzado"
  tags: ["rotacion"]

respuesta: verdadero
tipo: vf

enunciado: "Un círculo se ve exactamente igual sin importar cuántos grados se lo rote: tiene simetría rotacional para cualquier ángulo."

explicacion: |
  Es el caso límite: al no tener vértices ni lados distinguibles,
  cualquier rotación alrededor de su centro lo deja igual.
```

### 21 — El centro de rotación puede estar fuera de la figura

```
metadata:
  materia: "matematicas"
  tema: "rotacion"
  nivel: "avanzado"
  tags: ["rotacion"]

respuesta: verdadero
tipo: vf

enunciado: "El centro de rotación no tiene por qué estar dentro de la figura que se rota: puede ser cualquier punto del plano."

explicacion: |
  Por ejemplo, las manecillas de un reloj giran alrededor de un centro
  que está fuera de cada manecilla individual.
```

### 22 — Rosetones usan rotación

```
metadata:
  materia: "matematicas"
  tema: "rotacion"
  nivel: "intermedio"
  tags: ["rotacion", "vocabulario"]

enunciado: "¿Qué transformación explica que un rosetón (una ventana circular con un patrón repetido) se vea igual varias veces al girarlo?"
tipo: mc
opciones_explicitas:
  - "La rotación, por su simetría rotacional"
  - "La traslación"
  - "La homotecia"
respuesta: "La rotación, por su simetría rotacional"

explicacion: |
  El motivo del rosetón se repite girando un ángulo fijo alrededor del
  centro de la ventana (ver `../../../arte/rosetones-y-simetria/`).
```

### 23 — Cierre: para qué sirve la rotación

```
metadata:
  materia: "matematicas"
  tema: "rotacion"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve entender la rotación?"
tipo: mc
opciones_explicitas:
  - "Para describir y diseñar cualquier objeto o patrón con un eje de giro: ruedas, relojes, rosetones"
  - "Sólo sirve para calcular áreas"
  - "Sólo aplica a triángulos"
respuesta: "Para describir y diseñar cualquier objeto o patrón con un eje de giro: ruedas, relojes, rosetones"

explicacion: |
  Cualquier cosa que gire alrededor de un punto fijo se describe con
  centro y ángulo de rotación.
```
