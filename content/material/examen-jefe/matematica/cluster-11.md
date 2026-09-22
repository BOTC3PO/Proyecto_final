# Examen jefe — [PENDIENTE #611]

> Logro #611. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **136 preguntas totales** en 5/5 secciones.

---

## Sección: transformaciones-geometricas/rotacion (23 preguntas)

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

## Sección: transformaciones-geometricas/traslacion (22 preguntas)

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

## Sección: union-interseccion-y-diferencia (26 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "union_interseccion_y_diferencia"
  nivel: "basico"
  tags: ["union", "vocabulario"]

enunciado: "¿Qué es la unión de dos conjuntos A ∪ B?"
tipo: mc
opciones_explicitas:
  - "Todos los elementos que están en A, en B, o en ambos, sin repetir ninguno"
  - "Sólo los elementos que están en A y en B a la vez"
  - "Sólo los elementos de A que no están en B"
respuesta: "Todos los elementos que están en A, en B, o en ambos, sin repetir ninguno"

explicacion: |
  Es la combinación completa de los dos conjuntos.
```

```
metadata:
  materia: "matematicas"
  tema: "union_interseccion_y_diferencia"
  nivel: "basico"
  tags: ["interseccion", "vocabulario"]

enunciado: "¿Qué es la intersección de dos conjuntos A ∩ B?"
tipo: mc
opciones_explicitas:
  - "Sólo los elementos que están en A y en B a la vez"
  - "Todos los elementos de A y de B juntos"
  - "Sólo los elementos de B que no están en A"
respuesta: "Sólo los elementos que están en A y en B a la vez"

explicacion: |
  Es lo que ambos conjuntos comparten.
```

```
metadata:
  materia: "matematicas"
  tema: "union_interseccion_y_diferencia"
  nivel: "basico"
  tags: ["diferencia", "vocabulario"]

enunciado: "¿Qué es la diferencia A − B?"
tipo: mc
opciones_explicitas:
  - "Los elementos de A que NO están en B"
  - "Los elementos de B que no están en A"
  - "Los elementos que están en A y en B a la vez"
respuesta: "Los elementos de A que NO están en B"

explicacion: |
  Se lee "A menos B" — se parte de A y se le quita lo que comparte con B.
```

```
metadata:
  materia: "matematicas"
  tema: "union_interseccion_y_diferencia"
  nivel: "intermedio"
  tags: ["union", "problema"]

enunciado: "Dados A = {1, 2, 3, 4} y B = {3, 4, 5, 6}, ¿cuál es A ∪ B?"
tipo: mc
opciones_explicitas:
  - "{1, 2, 3, 4, 5, 6}"
  - "{3, 4}"
  - "{1, 2}"
respuesta: "{1, 2, 3, 4, 5, 6}"

explicacion: |
  Se juntan todos los elementos de ambos, sin repetir el 3 y el 4 que
  comparten.
```

```
metadata:
  materia: "matematicas"
  tema: "union_interseccion_y_diferencia"
  nivel: "intermedio"
  tags: ["interseccion", "problema"]

enunciado: "Dados A = {1, 2, 3, 4} y B = {3, 4, 5, 6}, ¿cuál es A ∩ B?"
tipo: mc
opciones_explicitas:
  - "{3, 4}"
  - "{1, 2, 3, 4, 5, 6}"
  - "{1, 2}"
respuesta: "{3, 4}"

explicacion: |
  Son los únicos dos elementos que aparecen en los dos conjuntos.
```

```
metadata:
  materia: "matematicas"
  tema: "union_interseccion_y_diferencia"
  nivel: "intermedio"
  tags: ["diferencia", "problema"]

enunciado: "Dados A = {1, 2, 3, 4} y B = {3, 4, 5, 6}, ¿cuál es A − B?"
tipo: mc
opciones_explicitas:
  - "{1, 2}"
  - "{5, 6}"
  - "{3, 4}"
respuesta: "{1, 2}"

explicacion: |
  Es lo que queda de A después de sacarle lo que comparte con B (el 3
  y el 4).
```

```
metadata:
  materia: "matematicas"
  tema: "union_interseccion_y_diferencia"
  nivel: "avanzado"
  tags: ["diferencia", "problema"]

enunciado: "Con los mismos A = {1, 2, 3, 4} y B = {3, 4, 5, 6}, ¿cuál es B − A?"
tipo: mc
opciones_explicitas:
  - "{5, 6}"
  - "{1, 2}"
  - "{3, 4}"
respuesta: "{5, 6}"

explicacion: |
  B − A es distinto de A − B (pregunta 6) — la diferencia no es
  conmutativa.
```

```
metadata:
  materia: "matematicas"
  tema: "union_interseccion_y_diferencia"
  nivel: "intermedio"
  tags: ["diferencia"]

respuesta: verdadero
tipo: vf

enunciado: "En general, A − B no es lo mismo que B − A."

explicacion: |
  Se ve claro en el ejemplo de las preguntas 6 y 7: {1,2} contra {5,6}.
```

```
metadata:
  materia: "matematicas"
  tema: "union_interseccion_y_diferencia"
  nivel: "intermedio"
  tags: ["union"]

respuesta: verdadero
tipo: vf

enunciado: "A ∪ B es siempre igual a B ∪ A, sin importar el orden."

explicacion: |
  Juntar los elementos de dos conjuntos no depende del orden en que se
  los mencione.
```

```
metadata:
  materia: "matematicas"
  tema: "union_interseccion_y_diferencia"
  nivel: "intermedio"
  tags: ["interseccion"]

respuesta: verdadero
tipo: vf

enunciado: "A ∩ B es siempre igual a B ∩ A, sin importar el orden."

explicacion: |
  Lo que comparten A y B es lo mismo que lo que comparten B y A.
```

```
metadata:
  materia: "matematicas"
  tema: "union_interseccion_y_diferencia"
  nivel: "avanzado"
  tags: ["union", "completar"]

tipo: completar
enunciado: "Completá: |A ∪ B| = |A| + |B| − ___."
respuestas_validas:
  - "|A ∩ B|"
  - "A ∩ B"

explicacion: |
  Se resta la intersección porque, si no, sus elementos se contarían
  dos veces.
```

```
metadata:
  materia: "matematicas"
  tema: "union_interseccion_y_diferencia"
  nivel: "avanzado"
  tags: ["union", "problema"]

variables:
  a: random(10, 30)
  b: random(10, 30)
  interseccion: random(1, 8)

respuesta: a + b - interseccion
tipo: input

enunciado: "Un conjunto A tiene {a} elementos y un conjunto B tiene {b} elementos. Si A y B comparten {interseccion} elementos, ¿cuántos elementos tiene A ∪ B?"

pasos:
  - "|A∪B| = |A| + |B| − |A∩B| = {a} + {b} − {interseccion} = {a + b - interseccion}"

explicacion: |
  Se restan los elementos compartidos para no contarlos dos veces.
```

```
metadata:
  materia: "matematicas"
  tema: "union_interseccion_y_diferencia"
  nivel: "avanzado"
  tags: ["interseccion", "problema"]

variables:
  a: random(10, 30)
  b: random(10, 30)
  interseccion_real: random(1, 8)

respuesta: interseccion_real
tipo: input

enunciado: "Un conjunto A tiene {a} elementos, un conjunto B tiene {b} elementos, y A ∪ B tiene {a + b - interseccion_real} elementos. ¿Cuántos elementos comparten A y B (|A ∩ B|)?"

pasos:
  - "|A∩B| = |A| + |B| − |A∪B| = {a} + {b} − {a + b - interseccion_real} = {interseccion_real}"

explicacion: |
  Es la misma fórmula, despejada para la intersección en vez de la unión.
```

```
metadata:
  materia: "matematicas"
  tema: "union_interseccion_y_diferencia"
  nivel: "avanzado"
  tags: ["diferencia", "problema"]

variables:
  a: random(15, 40)
  interseccion: random(1, 10)

respuesta: a - interseccion
tipo: input

enunciado: "Un conjunto A tiene {a} elementos, de los cuales {interseccion} también pertenecen a B. ¿Cuántos elementos tiene A − B?"

pasos:
  - "|A−B| = |A| − |A∩B| = {a} − {interseccion} = {a - interseccion}"

explicacion: |
  A − B es lo de A que no comparte con B, así que se le resta la parte
  compartida.
```

```
metadata:
  materia: "matematicas"
  tema: "union_interseccion_y_diferencia"
  nivel: "intermedio"
  tags: ["disjuntos"]

respuesta: verdadero
tipo: vf

enunciado: "Si dos conjuntos A y B no comparten ningún elemento, se dice que son disjuntos, y A ∩ B = ∅."

explicacion: |
  Es el caso extremo: cero elementos en común.
```

```
metadata:
  materia: "matematicas"
  tema: "union_interseccion_y_diferencia"
  nivel: "intermedio"
  tags: ["disjuntos", "problema"]

variables:
  a: random(5, 20)
  b: random(5, 20)

respuesta: a + b
tipo: input

enunciado: "Un conjunto A tiene {a} elementos y un conjunto B tiene {b} elementos. A y B son disjuntos (no comparten nada). ¿Cuántos elementos tiene A ∪ B?"

pasos:
  - "Como |A∩B| = 0: |A∪B| = |A| + |B| = {a} + {b} = {a + b}"

explicacion: |
  Sin nada compartido, no hace falta restar nada — se suman directo.
```

```
metadata:
  materia: "matematicas"
  tema: "union_interseccion_y_diferencia"
  nivel: "basico"
  tags: ["disjuntos", "vocabulario"]

enunciado: "¿Qué significa que dos conjuntos sean disjuntos?"
tipo: mc
opciones_explicitas:
  - "Que no comparten ningún elemento"
  - "Que tienen la misma cantidad de elementos"
  - "Que uno es subconjunto del otro"
respuesta: "Que no comparten ningún elemento"

explicacion: |
  Su intersección es el conjunto vacío.
```

```
metadata:
  materia: "matematicas"
  tema: "union_interseccion_y_diferencia"
  nivel: "avanzado"
  tags: ["union", "ordenar"]

enunciado: "Ordená los pasos para calcular |A∪B|, sabiendo |A|, |B| y |A∩B|."
tipo: ordenar
opciones_explicitas:
  - "El número que queda es |A∪B|"
  - "Sumar |A| + |B|"
  - "Restar |A∩B| a ese resultado"
respuesta_orden: ["Sumar |A| + |B|", "Restar |A∩B| a ese resultado", "El número que queda es |A∪B|"]
explicacion: |
  El paso de restar la intersección es el que evita el doble conteo.
```

```
metadata:
  materia: "matematicas"
  tema: "union_interseccion_y_diferencia"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "¿Dónde se usa la misma idea de unión e intersección de conjuntos, fuera de la matemática pura?"
tipo: mc
opciones_explicitas:
  - "En consultas de bases de datos: pedir filas que cumplan una condición Y otra (intersección) o cualquiera de dos condiciones O (unión)"
  - "Sólo en geometría, para calcular áreas"
  - "No tiene ninguna aplicación fuera de la matemática pura"
respuesta: "En consultas de bases de datos: pedir filas que cumplan una condición Y otra (intersección) o cualquiera de dos condiciones O (unión)"

explicacion: |
  Es el mismo principio que después usa el álgebra relacional de
  bases de datos (Informática).
```

```
metadata:
  materia: "matematicas"
  tema: "union_interseccion_y_diferencia"
  nivel: "intermedio"
  tags: ["aplicacion"]

respuesta: verdadero
tipo: vf

enunciado: "En una consulta con condiciones combinadas, el conector 'Y' corresponde a una intersección, y el conector 'O' corresponde a una unión."

explicacion: |
  "Cumple A Y B" son los elementos en ambos (intersección); "cumple A
  O B" son los elementos en cualquiera de los dos (unión).
```

```
metadata:
  materia: "matematicas"
  tema: "union_interseccion_y_diferencia"
  nivel: "avanzado"
  tags: ["diferencia", "problema"]

variables:
  a: random(20, 50)
  b: random(1, 15)

respuesta: a - b
tipo: input

enunciado: "Un conjunto A tiene {a} elementos, y B ⊆ A tiene {b} elementos (todos los de B ya están en A). ¿Cuántos elementos tiene A − B?"

pasos:
  - "Como B ⊆ A, todo B está incluido en la parte compartida: |A−B| = |A| − |B| = {a} − {b} = {a - b}"

explicacion: |
  Al ser B subconjunto de A, restar B de A es simplemente restar todos
  sus elementos.
```

```
metadata:
  materia: "matematicas"
  tema: "union_interseccion_y_diferencia"
  nivel: "avanzado"
  tags: ["union"]

respuesta: verdadero
tipo: vf

enunciado: "Si B es subconjunto de A (B ⊆ A), entonces A ∪ B es exactamente igual a A (unir no agrega nada nuevo)."

explicacion: |
  Todo lo que tiene B ya estaba en A, así que juntarlos no cambia nada.
```

```
metadata:
  materia: "matematicas"
  tema: "union_interseccion_y_diferencia"
  nivel: "avanzado"
  tags: ["interseccion"]

respuesta: verdadero
tipo: vf

enunciado: "Si B es subconjunto de A (B ⊆ A), entonces A ∩ B es exactamente igual a B."

explicacion: |
  Todo elemento de B ya está en A, así que lo que comparten es
  exactamente todo B.
```

```
metadata:
  materia: "matematicas"
  tema: "union_interseccion_y_diferencia"
  nivel: "avanzado"
  tags: ["union"]

respuesta: verdadero
tipo: vf

enunciado: "|A ∪ B| siempre es mayor o igual que |A| y que |B|, sin importar qué conjuntos sean."

explicacion: |
  La unión sólo puede agregar elementos, nunca quitarlos.
```

```
metadata:
  materia: "matematicas"
  tema: "union_interseccion_y_diferencia"
  nivel: "avanzado"
  tags: ["interseccion"]

respuesta: verdadero
tipo: vf

enunciado: "|A ∩ B| siempre es menor o igual que |A| y que |B|, sin importar qué conjuntos sean."

explicacion: |
  La intersección sólo puede quedarse con una parte (o todo) de cada
  conjunto, nunca con más de lo que cada uno tiene.
```

```
metadata:
  materia: "matematicas"
  tema: "union_interseccion_y_diferencia"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirven la unión, la intersección y la diferencia de conjuntos?"
tipo: mc
opciones_explicitas:
  - "Para combinar conjuntos de formas distintas y calcular cuántos elementos resultan, sin necesidad de listarlos uno por uno"
  - "Sólo sirven para dibujar círculos superpuestos"
  - "Sólo aplican a conjuntos de números"
respuesta: "Para combinar conjuntos de formas distintas y calcular cuántos elementos resultan, sin necesidad de listarlos uno por uno"

explicacion: |
  Son la base algebraica que el próximo módulo (diagramas de Venn)
  representa visualmente.
```

## Sección: valor-posicional (40 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "basico"
  tags: ["valor_posicional", "identificar_cifra"]

variables:
  c: random(1, 9)
  d: random(0, 9)
  u: random(0, 9)
  numero: c * 100 + d * 10 + u

respuesta: u
tipo: input
tolerancia_abs: 0

enunciado: "En el número {numero}, ¿qué cifra ocupa el lugar de las unidades?"

pasos:
  - "Las unidades son la cifra más a la derecha de {numero}: {u}"

explicacion: |
  La cifra de las unidades es siempre la última, la que está más a la
  derecha del número.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "basico"
  tags: ["valor_posicional", "identificar_cifra"]

variables:
  c: random(1, 9)
  d: random(0, 9)
  u: random(0, 9)
  numero: c * 100 + d * 10 + u

respuesta: d
tipo: input
tolerancia_abs: 0

enunciado: "En el número {numero}, ¿qué cifra ocupa el lugar de las decenas?"

pasos:
  - "Las decenas son la segunda cifra desde la derecha de {numero}: {d}"

explicacion: |
  La cifra de las decenas es la que está un lugar a la izquierda de las
  unidades.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "basico"
  tags: ["valor_posicional", "identificar_cifra"]

variables:
  c: random(1, 9)
  d: random(0, 9)
  u: random(0, 9)
  numero: c * 100 + d * 10 + u

respuesta: c
tipo: input
tolerancia_abs: 0

enunciado: "En el número {numero}, ¿qué cifra ocupa el lugar de las centenas?"

pasos:
  - "Las centenas son la tercera cifra desde la derecha de {numero}: {c}"

explicacion: |
  La cifra de las centenas es la que está dos lugares a la izquierda de las
  unidades.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "identificar_cifra"]

variables:
  m: random(1, 9)
  c: random(0, 9)
  d: random(0, 9)
  u: random(0, 9)
  numero: m * 1000 + c * 100 + d * 10 + u

respuesta: m
tipo: input
tolerancia_abs: 0

enunciado: "En el número {numero}, ¿qué cifra ocupa el lugar de las unidades de mil?"

pasos:
  - "Las unidades de mil son la cuarta cifra desde la derecha de {numero}: {m}"

explicacion: |
  Cada vez que se agrega un lugar más a la izquierda, el valor de la
  posición se multiplica por 10: unidades → decenas → centenas →
  unidades de mil.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "identificar_cifra"]

variables:
  dm: random(1, 9)
  m: random(0, 9)
  c: random(0, 9)
  d: random(0, 9)
  u: random(0, 9)
  numero: dm * 10000 + m * 1000 + c * 100 + d * 10 + u

respuesta: dm
tipo: input
tolerancia_abs: 0

enunciado: "En el número {numero}, ¿qué cifra ocupa el lugar de las decenas de mil?"

pasos:
  - "Las decenas de mil son la quinta cifra desde la derecha de {numero}: {dm}"

explicacion: |
  Con 5 cifras, la primera de la izquierda es la de las decenas de mil.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "identificar_cifra"]

variables:
  cm: random(1, 9)
  dm: random(0, 9)
  m: random(0, 9)
  c: random(0, 9)
  d: random(0, 9)
  u: random(0, 9)
  numero: cm * 100000 + dm * 10000 + m * 1000 + c * 100 + d * 10 + u

respuesta: cm
tipo: input
tolerancia_abs: 0

enunciado: "En el número {numero}, ¿qué cifra ocupa el lugar de las centenas de mil?"

pasos:
  - "Las centenas de mil son la sexta cifra desde la derecha de {numero}: {cm}"

explicacion: |
  Con 6 cifras, la primera de la izquierda es la de las centenas de mil.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "basico"
  tags: ["valor_posicional", "valor_de_cifra"]

variables:
  c: random(1, 9)
  d: random(1, 9)
  u: random(0, 9)
  numero: c * 100 + d * 10 + u

respuesta: d * 10
tipo: input
tolerancia_abs: 0

enunciado: "En el número {numero}, ¿cuánto VALE la cifra de las decenas (no cuál es, sino cuánto vale)?"

pasos:
  - "La cifra de las decenas es {d}, y en ese lugar vale {d} × 10 = {d * 10}"

explicacion: |
  No es lo mismo la cifra que su valor: la cifra es sólo el dígito (0-9); el
  valor es ese dígito multiplicado por lo que vale su posición.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "valor_de_cifra"]

variables:
  m: random(1, 9)
  c: random(1, 9)
  d: random(0, 9)
  u: random(0, 9)
  numero: m * 1000 + c * 100 + d * 10 + u

respuesta: c * 100
tipo: input
tolerancia_abs: 0

enunciado: "En el número {numero}, ¿cuánto vale la cifra de las centenas?"

pasos:
  - "La cifra de las centenas es {c}, y en ese lugar vale {c} × 100 = {c * 100}"

explicacion: |
  El valor de una cifra es siempre el dígito multiplicado por la potencia de
  10 que le corresponde a su lugar.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "valor_de_cifra"]

variables:
  dm: random(1, 9)
  m: random(1, 9)
  c: random(0, 9)
  d: random(0, 9)
  u: random(0, 9)
  numero: dm * 10000 + m * 1000 + c * 100 + d * 10 + u

respuesta: m * 1000
tipo: input
tolerancia_abs: 0

enunciado: "En el número {numero}, ¿cuánto vale la cifra de las unidades de mil?"

pasos:
  - "La cifra de las unidades de mil es {m}, y en ese lugar vale {m} × 1.000 = {m * 1000}"

explicacion: |
  A partir de las unidades de mil, cada lugar vale 1.000 veces más que el
  dígito solo, antes de seguir multiplicando por 10 hacia la izquierda.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "basico"
  tags: ["valor_posicional", "descomposicion"]

variables:
  c: random(1, 9)
  d: random(0, 9)
  u: random(0, 9)
  numero: c * 100 + d * 10 + u

respuesta: numero
tipo: input
tolerancia_abs: 0

enunciado: "¿Qué número resulta de {c} centenas + {d} decenas + {u} unidades?"

pasos:
  - "{c} × 100 + {d} × 10 + {u} = {numero}"

explicacion: |
  Componer un número es la operación inversa a descomponerlo: se suman los
  valores de cada cifra en su lugar.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "descomposicion"]

variables:
  m: random(1, 9)
  c: random(0, 9)
  d: random(0, 9)
  u: random(0, 9)
  numero: m * 1000 + c * 100 + d * 10 + u

respuesta: numero
tipo: input
tolerancia_abs: 0

enunciado: "¿Qué número resulta de {m} unidades de mil + {c} centenas + {d} decenas + {u} unidades?"

pasos:
  - "{m} × 1.000 + {c} × 100 + {d} × 10 + {u} = {numero}"

explicacion: |
  Cada término de la descomposición aporta el valor de su cifra en su
  lugar; sumados dan el número completo.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "descomposicion"]

variables:
  dm: random(1, 9)
  m: random(0, 9)
  c: random(0, 9)
  d: random(0, 9)
  u: random(0, 9)
  numero: dm * 10000 + m * 1000 + c * 100 + d * 10 + u

respuesta: numero
tipo: input
tolerancia_abs: 0

enunciado: "¿Qué número resulta de {dm} decenas de mil + {m} unidades de mil + {c} centenas + {d} decenas + {u} unidades?"

pasos:
  - "{dm} × 10.000 + {m} × 1.000 + {c} × 100 + {d} × 10 + {u} = {numero}"

explicacion: |
  Con más cifras el procedimiento es el mismo: sumar el valor posicional de
  cada una.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "basico"
  tags: ["valor_posicional", "comparacion"]

variables:
  a: random(10, 999)
  b: random(10, 999)

respuesta: (longitud(concatenar(a)) > longitud(concatenar(b)))
tipo: vf

enunciado: "¿Tiene {a} más cifras que {b}?"

explicacion: |
  Antes de mirar cifra por cifra, conviene contar cuántas cifras tiene cada
  número: el que tiene más cifras es siempre el mayor.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "basico"
  tags: ["valor_posicional", "comparacion"]

variables:
  a: random(1, 9999)
  b: random(1, 9999)

restricciones:
  - longitud(concatenar(a)) != longitud(concatenar(b))

respuesta: max(a, b)
tipo: mc
opciones_explicitas:
  - a
  - b

enunciado: "¿Cuál de estos dos números tiene más cifras: {a} o {b}?"

explicacion: |
  La cantidad de cifras decide directamente cuál número es mayor, sin
  necesidad de comparar cifra por cifra.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "comparacion"]

variables:
  c: random(1, 9)
  d1: random(0, 9)
  d2: random(0, 9)
  u1: random(0, 9)
  u2: random(0, 9)
  a: c * 100 + d1 * 10 + u1
  b: c * 100 + d2 * 10 + u2

restricciones:
  - d1 != d2

respuesta: (a > b)
tipo: vf

enunciado: "{a} y {b} tienen la misma cifra de centenas. ¿Es {a} mayor que {b}?"

explicacion: |
  Cuando dos números tienen la misma cantidad de cifras y coinciden en la
  primera, hay que seguir comparando la próxima cifra hacia la derecha
  hasta encontrar una diferencia.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "comparacion"]

variables:
  m: random(1, 9)
  resto1: random(0, 999)
  resto2: random(0, 999)
  a: m * 1000 + resto1
  b: m * 1000 + resto2

restricciones:
  - resto1 != resto2

respuesta: max(a, b)
tipo: mc
opciones_explicitas:
  - a
  - b

enunciado: "{a} y {b} tienen la misma cifra de unidades de mil. ¿Cuál de los dos es mayor?"

explicacion: |
  Si la primera cifra empata, la decisión queda en manos de las cifras
  siguientes, comparadas en el mismo orden (de izquierda a derecha).
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "comparacion"]

variables:
  c: random(1, 9)
  d1: random(0, 8)
  d2: random(0, 8)
  u: random(0, 9)
  a: c * 100 + d1 * 10 + u
  b: c * 100 + d2 * 10 + u

restricciones:
  - d1 != d2

respuesta: (a < b)
tipo: vf

enunciado: "{a} y {b} tienen la misma cifra de centenas y de unidades, sólo cambia la de decenas ({d1} contra {d2}). ¿Es {a} menor que {b}?"

explicacion: |
  Cuando todas las demás cifras coinciden, el número menor es el que tiene
  la cifra más chica en la primera posición donde difieren.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "basico"
  tags: ["valor_posicional", "redondeo"]

variables:
  numero: random(11, 988)
  resultado: redondear(numero / 10, 0) * 10

respuesta: resultado
tipo: input
tolerancia_abs: 0

enunciado: "Redondeá {numero} a la decena más cercana."

pasos:
  - "Se mira la cifra de las unidades de {numero} para decidir si la decena sube o queda igual: resultado {resultado}"

explicacion: |
  Se mira la cifra que está un lugar a la derecha de la posición a
  redondear (acá, las unidades): 5 o más, la decena sube; menos de 5, queda
  igual.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "redondeo"]

variables:
  base: random(1, 98)
  numero: base * 10 + 5
  resultado: redondear(numero / 10, 0) * 10

respuesta: resultado
tipo: input
tolerancia_abs: 0

enunciado: "Redondeá {numero} a la decena más cercana."

pasos:
  - "La cifra de las unidades es 5: por convención, la decena sube. {numero} → {resultado}"

explicacion: |
  Cuando la cifra que decide el redondeo es exactamente 5, la regla es que
  la posición anterior sube (no se deja igual).
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "basico"
  tags: ["valor_posicional", "redondeo"]

variables:
  numero: random(101, 9888)
  resultado: redondear(numero / 100, 0) * 100

respuesta: resultado
tipo: input
tolerancia_abs: 0

enunciado: "Redondeá {numero} a la centena más cercana."

pasos:
  - "Se mira la cifra de las decenas de {numero} para decidir: resultado {resultado}"

explicacion: |
  Igual que redondear a la decena, pero mirando la cifra de las decenas
  (un lugar a la derecha de las centenas).
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "redondeo"]

variables:
  base: random(1, 98)
  numero: base * 100 + 50
  resultado: redondear(numero / 100, 0) * 100

respuesta: resultado
tipo: input
tolerancia_abs: 0

enunciado: "Redondeá {numero} a la centena más cercana."

pasos:
  - "La cifra de las decenas es 5: la centena sube. {numero} → {resultado}"

explicacion: |
  Mismo criterio que con las decenas: en el caso frontera (cifra 5), la
  posición objetivo sube.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "redondeo"]

variables:
  numero: random(1001, 98888)
  resultado: redondear(numero / 1000, 0) * 1000

respuesta: resultado
tipo: input
tolerancia_abs: 0

enunciado: "Redondeá {numero} al millar (unidad de mil) más cercano."

pasos:
  - "Se mira la cifra de las centenas de {numero} para decidir: resultado {resultado}"

explicacion: |
  El mismo criterio de siempre, ahora mirando la cifra de las centenas para
  decidir si la unidad de mil sube o queda igual.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "decimales"]

variables:
  entero: random(1, 99)
  t: random(1, 9)
  h: random(0, 9)
  numero: entero + t / 10 + h / 100

respuesta: t
tipo: input
tolerancia_abs: 0

enunciado: "En el número {numero}, ¿qué cifra ocupa el lugar de los décimos?"

pasos:
  - "Los décimos son la primera cifra después de la coma: {t}"

explicacion: |
  Del otro lado de la coma la lógica se invierte: la primera posición
  (décimos) vale ÷10, no ×10.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "decimales"]

variables:
  entero: random(1, 99)
  t: random(0, 9)
  h: random(1, 9)
  numero: entero + t / 10 + h / 100

respuesta: h
tipo: input
tolerancia_abs: 0

enunciado: "En el número {numero}, ¿qué cifra ocupa el lugar de los centésimos?"

pasos:
  - "Los centésimos son la segunda cifra después de la coma: {h}"

explicacion: |
  Los centésimos valen ÷100: cada lugar después de la coma sigue dividiendo
  por 10 respecto al anterior.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "avanzado"
  tags: ["valor_posicional", "decimales", "valor_de_cifra"]

variables:
  entero: random(1, 99)
  t: random(1, 9)
  h: random(0, 9)
  numero: entero + t / 10 + h / 100

respuesta: t / 10
tipo: input
tolerancia_abs: 0.01

enunciado: "En el número {numero}, ¿cuánto vale la cifra de los décimos?"

pasos:
  - "La cifra de los décimos es {t}, y en ese lugar vale {t} ÷ 10 = {t / 10}"

explicacion: |
  Igual que del lado entero: el valor es la cifra multiplicada (acá,
  dividida) por lo que vale su posición.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "basico"
  tags: ["valor_posicional", "cantidad_de_cifras"]

variables:
  numero: random(100, 98765)

respuesta: longitud(concatenar(numero))
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántas cifras tiene el número {numero}?"

explicacion: |
  Se cuentan todos los dígitos del número, de izquierda a derecha, sin
  saltear ninguno.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "cantidad_de_cifras"]

variables:
  numero: random(1000000, 987654321)

respuesta: longitud(concatenar(numero))
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántas cifras tiene el número {numero}?"

explicacion: |
  El procedimiento es el mismo con números grandes: contar los dígitos, uno
  por uno.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "basico"
  tags: ["valor_posicional", "identificar_cifra"]

variables:
  m: random(1, 9)
  c: random(0, 9)
  d: random(0, 9)
  u: random(0, 9)
  numero: m * 1000 + c * 100 + d * 10 + u

respuesta: m
tipo: input
tolerancia_abs: 0

enunciado: "En el número {numero}, ¿cuál es la cifra que ocupa el lugar de mayor valor (la que más vale)?"

pasos:
  - "La cifra de mayor valor es siempre la primera de la izquierda: {m}"

explicacion: |
  La cifra de mayor valor posicional es la más a la izquierda: es la que
  está multiplicada por la potencia de 10 más grande.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "basico"
  tags: ["valor_posicional", "vocabulario"]

enunciado: "¿Cómo se llama el lugar de la 3ª cifra contando desde la derecha de un número?"
tipo: mc
opciones_explicitas:
  - "Unidades"
  - "Decenas"
  - "Centenas"
respuesta: "Centenas"

explicacion: |
  Contando desde la derecha: 1ª unidades, 2ª decenas, 3ª centenas.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "basico"
  tags: ["valor_posicional", "vocabulario"]

enunciado: "¿Cómo se llama el lugar de la cifra que está más a la derecha en cualquier número entero?"
tipo: mc
opciones_explicitas:
  - "Unidades"
  - "Decenas"
  - "Centenas"
respuesta: "Unidades"

explicacion: |
  La cifra más a la derecha de un número entero siempre ocupa el lugar de
  las unidades.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "basico"
  tags: ["valor_posicional", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En el número 4.257, la cifra 2 vale 200."

explicacion: |
  El 2 de 4.257 está en el lugar de las centenas: 2 × 100 = 200.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "basico"
  tags: ["valor_posicional", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "En el número 4.257, la cifra 5 vale 5."

explicacion: |
  El 5 de 4.257 está en el lugar de las decenas, no de las unidades: vale
  5 × 10 = 50, no 5.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "descomposicion"]

variables:
  c: random(1, 9)
  d: random(1, 9)
  u: random(0, 9)
  numero: c * 100 + d * 10 + u

tipo: completar
enunciado: "Completá: {c} × 100 + ___ × 10 + {u} = {numero}."
respuestas_validas:
  - d

explicacion: |
  El hueco es la cifra de las decenas: la única que hace que la suma dé
  exactamente el número de la derecha.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "descomposicion"]

variables:
  m: random(1, 9)
  c: random(1, 9)
  d: random(0, 9)
  u: random(0, 9)
  numero: m * 1000 + c * 100 + d * 10 + u

tipo: completar
enunciado: "Completá: {m} × 1.000 + ___ × 100 + {d} × 10 + {u} = {numero}."
respuestas_validas:
  - c

explicacion: |
  Se despeja la cifra que falta viendo cuál hace que la suma total coincida
  con el número dado.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "basico"
  tags: ["valor_posicional", "orden"]

tipo: ordenar
enunciado: "Ordená estas cifras de menor a mayor."
opciones_explicitas:
  - "7"
  - "2"
  - "9"
  - "4"
respuesta_orden: ["2", "4", "7", "9"]

explicacion: |
  Ordenar cifras sueltas es comparar dígitos, sin que ningún lugar
  posicional entre en juego todavía.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "composicion"]

variables:
  par: n_de([1, 2, 3, 4, 5, 6, 7, 8, 9], 2)
  d1: primero(par)
  d2: ultimo(par)
  menor_digito: primero(ordenar(par))
  mayor_digito: ultimo(ordenar(par))

restricciones:
  - d1 != d2

respuesta: mayor_digito * 10 + menor_digito
tipo: input
tolerancia_abs: 0

enunciado: "Con las cifras {d1} y {d2}, ¿cuál es el mayor número de 2 cifras que se puede formar (usando cada cifra una sola vez)?"

pasos:
  - "Para que sea el mayor posible, la cifra más grande va en las decenas: {mayor_digito} decenas + {menor_digito} unidades = {mayor_digito * 10 + menor_digito}"

explicacion: |
  Para armar el número más grande posible con cifras dadas, la cifra más
  grande siempre va en el lugar de mayor valor.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "composicion"]

variables:
  par: n_de([1, 2, 3, 4, 5, 6, 7, 8, 9], 2)
  d1: primero(par)
  d2: ultimo(par)
  menor_digito: primero(ordenar(par))
  mayor_digito: ultimo(ordenar(par))

restricciones:
  - d1 != d2

respuesta: menor_digito * 10 + mayor_digito
tipo: input
tolerancia_abs: 0

enunciado: "Con las cifras {d1} y {d2}, ¿cuál es el menor número de 2 cifras que se puede formar (usando cada cifra una sola vez)?"

pasos:
  - "Para que sea el menor posible, la cifra más chica va en las decenas: {menor_digito} decenas + {mayor_digito} unidades = {menor_digito * 10 + mayor_digito}"

explicacion: |
  Al revés que para el mayor número: la cifra más chica va en el lugar de
  mayor valor, para que pese lo menos posible.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "descomposicion"]

variables:
  numero: random(1001, 98765)

respuesta: floor(numero / 1000)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántas unidades de mil completas tiene el número {numero}?"

pasos:
  - "{numero} ÷ 1.000, tomando sólo la parte entera: {floor(numero / 1000)}"

explicacion: |
  Es lo mismo que preguntar por las cifras que quedan a la izquierda del
  lugar de las centenas, leídas como un solo número.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "descomposicion"]

variables:
  numero: random(101, 9876)

respuesta: floor(numero / 100)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántas centenas completas tiene el número {numero}?"

pasos:
  - "{numero} ÷ 100, tomando sólo la parte entera: {floor(numero / 100)}"

explicacion: |
  Son las cifras que quedan a la izquierda del lugar de las decenas, leídas
  como un solo número.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "basico"
  tags: ["valor_posicional", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El valor de una cifra depende del lugar que ocupa dentro del número, no sólo de qué dígito es."

explicacion: |
  Es la idea central de todo el tema: el mismo dígito vale distinto según
  esté en el lugar de las unidades, las decenas, las centenas, etc.
```

## Sección: diagramas-de-venn (25 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "basico"
  tags: ["venn", "vocabulario"]

enunciado: "¿Qué es un diagrama de Venn?"
tipo: mc
opciones_explicitas:
  - "La representación visual de conjuntos (como círculos) y sus operaciones (superposición = intersección)"
  - "Una tabla de números ordenados de menor a mayor"
  - "Un gráfico de barras para comparar cantidades"
respuesta: "La representación visual de conjuntos (como círculos) y sus operaciones (superposición = intersección)"

explicacion: |
  Es la forma visual de las operaciones ya definidas entre conjuntos.
```

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "basico"
  tags: ["venn", "vocabulario"]

enunciado: "¿Qué representa el rectángulo que envuelve a todos los círculos en un diagrama de Venn?"
tipo: mc
opciones_explicitas:
  - "El conjunto universal U"
  - "El conjunto vacío"
  - "La intersección de todos los conjuntos"
respuesta: "El conjunto universal U"

explicacion: |
  Contiene a todos los elementos posibles en el contexto del problema.
```

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "basico"
  tags: ["venn", "vocabulario"]

enunciado: "En un diagrama de Venn con dos círculos A y B, ¿qué representa la zona donde se superponen?"
tipo: mc
opciones_explicitas:
  - "La intersección, A ∩ B"
  - "La unión, A ∪ B"
  - "El conjunto universal"
respuesta: "La intersección, A ∩ B"

explicacion: |
  Es la zona que pertenece a ambos círculos a la vez.
```

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "intermedio"
  tags: ["venn", "completar"]

tipo: completar
enunciado: "Completá: la parte del círculo A que NO se superpone con B representa el conjunto ___."
respuestas_validas:
  - "A - B"
  - "A−B"

explicacion: |
  Son los elementos de A que no comparte con B.
```

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "intermedio"
  tags: ["venn"]

respuesta: verdadero
tipo: vf

enunciado: "En un diagrama de Venn, A ∪ B es toda la zona cubierta por cualquiera de los dos círculos (las tres regiones: sólo A, sólo B, y la intersección)."

explicacion: |
  Es la superficie total ocupada por al menos uno de los dos conjuntos.
```

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "intermedio"
  tags: ["venn"]

respuesta: falso
tipo: vf

enunciado: "La zona fuera de ambos círculos, pero dentro del rectángulo U, representa elementos que pertenecen a A o a B."

explicacion: |
  Es exactamente lo opuesto: son los elementos que NO pertenecen ni a
  A ni a B.
```

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "avanzado"
  tags: ["venn", "problema"]

variables:
  a: random(20, 35)
  b: random(20, 35)
  interseccion: random(1, min(a, b))
  extra: random(5, 20)
  total: a + b - interseccion + extra

respuesta: extra
tipo: input

enunciado: "En una encuesta a {total} personas, {a} tienen perro, {b} tienen gato, y {interseccion} tienen ambos. ¿Cuántas personas no tienen ni perro ni gato?"

pasos:
  - "Tienen perro o gato (unión) = {a} + {b} − {interseccion} = {a + b - interseccion}"
  - "Ninguno = total − unión = {total} − {a + b - interseccion} = {extra}"

explicacion: |
  Primero se calcula cuántos tienen al menos una de las dos cosas, y
  se resta ese número del total.
```

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "intermedio"
  tags: ["venn", "problema"]

variables:
  a: random(20, 50)
  interseccion: random(1, 15)

respuesta: a - interseccion
tipo: input

enunciado: "En un diagrama de Venn, el conjunto A tiene {a} elementos en total, y {interseccion} de ellos están también en B. ¿Cuántos elementos hay en la región 'sólo A' (dentro del círculo A, pero fuera de la superposición)?"

pasos:
  - "Sólo A = |A| − |A∩B| = {a} − {interseccion} = {a - interseccion}"

explicacion: |
  La región 'sólo A' es lo que queda del círculo A después de sacarle
  la parte compartida con B.
```

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "intermedio"
  tags: ["venn", "problema"]

variables:
  b: random(20, 50)
  interseccion: random(1, 15)

respuesta: b - interseccion
tipo: input

enunciado: "En un diagrama de Venn, el conjunto B tiene {b} elementos en total, y {interseccion} de ellos están también en A. ¿Cuántos elementos hay en la región 'sólo B'?"

pasos:
  - "Sólo B = |B| − |A∩B| = {b} − {interseccion} = {b - interseccion}"

explicacion: |
  El mismo razonamiento que 'sólo A', ahora para el círculo B.
```

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "avanzado"
  tags: ["venn", "ordenar"]

enunciado: "Ordená los pasos para completar un diagrama de Venn de dos conjuntos, a partir de los datos de una encuesta."
tipo: ordenar
opciones_explicitas:
  - "Calcular las regiones 'sólo A' y 'sólo B', restando la intersección a cada total"
  - "Anotar primero la cantidad de la intersección (el centro del diagrama)"
  - "Calcular la región 'ninguno', restando el total de la unión al total de encuestados"
respuesta_orden: ["Anotar primero la cantidad de la intersección (el centro del diagrama)", "Calcular las regiones 'sólo A' y 'sólo B', restando la intersección a cada total", "Calcular la región 'ninguno', restando el total de la unión al total de encuestados"]
explicacion: |
  Empezar por el centro es clave: las otras regiones se calculan
  restando esa cantidad de los totales dados.
```

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "avanzado"
  tags: ["venn", "problema"]

variables:
  a: random(20, 35)
  b: random(20, 35)
  interseccion_real: random(1, min(a, b))
  ninguno: random(5, 20)
  total: a + b - interseccion_real + ninguno

respuesta: interseccion_real
tipo: input

enunciado: "En una encuesta a {total} personas, {a} usan transporte público, {b} usan bicicleta, y {ninguno} no usan ninguno de los dos. ¿Cuántas personas usan AMBOS medios?"

pasos:
  - "Usan al menos uno = total − ninguno = {total} − {ninguno} = {total - ninguno}"
  - "|A∩B| = |A| + |B| − (usan al menos uno) = {a} + {b} − {total - ninguno} = {interseccion_real}"

explicacion: |
  Se calcula primero la unión (todos menos los que no usan ninguno), y
  de ahí se despeja la intersección.
```

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "intermedio"
  tags: ["venn"]

enunciado: "¿Por qué conviene completar primero la intersección al resolver un diagrama de Venn de dos conjuntos?"
tipo: mc
opciones_explicitas:
  - "Porque las demás regiones (sólo A, sólo B) se calculan restando la intersección de los totales dados"
  - "Porque la intersección siempre es la región más grande"
  - "No hay ninguna razón particular, es sólo costumbre"
respuesta: "Porque las demás regiones (sólo A, sólo B) se calculan restando la intersección de los totales dados"

explicacion: |
  Sin la intersección, no se puede calcular ninguna de las otras
  regiones a partir de los totales de A y B.
```

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "intermedio"
  tags: ["venn"]

respuesta: verdadero
tipo: vf

enunciado: "Sin conocer las operaciones de unión, intersección y diferencia, un diagrama de Venn es sólo un dibujo de círculos superpuestos, sin significado matemático."

explicacion: |
  El diagrama es la forma visual de esas operaciones — no las
  reemplaza.
```

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "intermedio"
  tags: ["venn", "problema"]

variables:
  solo_a: random(10, 30)
  solo_b: random(10, 30)
  ambos: random(5, 20)

respuesta: solo_a + solo_b + ambos
tipo: input

enunciado: "En un diagrama de Venn: la región 'sólo A' tiene {solo_a} elementos, 'sólo B' tiene {solo_b}, y la intersección tiene {ambos}. ¿Cuántos elementos tiene A ∪ B en total?"

pasos:
  - "|A∪B| = sólo A + sólo B + ambos = {solo_a} + {solo_b} + {ambos} = {solo_a + solo_b + ambos}"

explicacion: |
  La unión son las tres regiones sumadas: lo exclusivo de cada
  conjunto más lo compartido.
```

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "intermedio"
  tags: ["venn"]

respuesta: verdadero
tipo: vf

enunciado: "La cantidad de elementos en la región 'sólo A' es igual a |A| menos |A∩B|."

explicacion: |
  Es el total de A menos la parte que comparte con B.
```

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "intermedio"
  tags: ["venn"]

respuesta: verdadero
tipo: vf

enunciado: "La cantidad de elementos en la región 'sólo B' es igual a |B| menos |A∩B|."

explicacion: |
  El mismo razonamiento que 'sólo A', para el otro conjunto.
```

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "avanzado"
  tags: ["venn", "problema"]

variables:
  a: random(25, 40)
  b: random(25, 40)
  interseccion: random(5, 15)
  extra: random(10, 25)
  total: a + b - interseccion + extra

respuesta: total - extra
tipo: input

enunciado: "De {total} estudiantes, {a} hablan inglés, {b} hablan portugués, y {interseccion} hablan ambos idiomas. ¿Cuántos estudiantes hablan AL MENOS uno de los dos idiomas?"

pasos:
  - "Al menos uno = |A∪B| = {a} + {b} − {interseccion} = {a + b - interseccion}"

explicacion: |
  'Al menos uno' es exactamente la definición de unión.
```

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "avanzado"
  tags: ["venn", "problema"]

variables:
  a: random(25, 40)
  b: random(25, 40)
  interseccion: random(5, 15)
  extra: random(10, 25)
  total: a + b - interseccion + extra

respuesta: extra
tipo: input

enunciado: "De {total} estudiantes, {a} hablan inglés, {b} hablan portugués, y {interseccion} hablan ambos idiomas. ¿Cuántos estudiantes NO hablan ninguno de los dos?"

pasos:
  - "Al menos uno = {a} + {b} − {interseccion} = {a + b - interseccion}"
  - "Ninguno = {total} − {a + b - interseccion} = {extra}"

explicacion: |
  Es el mismo problema que el anterior, completando la última región
  del diagrama.
```

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "basico"
  tags: ["venn", "aplicacion"]

enunciado: "¿Para qué se usan los diagramas de Venn en Biología, por ejemplo al comparar especies?"
tipo: mc
opciones_explicitas:
  - "Para mostrar visualmente qué características comparten dos o más grupos, y cuáles son exclusivas de cada uno"
  - "Sólo para medir el tamaño de los animales"
  - "No tienen ninguna aplicación en Biología"
respuesta: "Para mostrar visualmente qué características comparten dos o más grupos, y cuáles son exclusivas de cada uno"

explicacion: |
  Es la misma lógica de conjuntos, aplicada a categorías biológicas en
  vez de números.
```

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "basico"
  tags: ["venn", "aplicacion"]

enunciado: "¿Para qué sirve un diagrama de Venn al estudiar probabilidad simple?"
tipo: mc
opciones_explicitas:
  - "Para clasificar visualmente el espacio muestral en casos que cumplen una condición, otra, ambas, o ninguna"
  - "Para calcular directamente el promedio de un conjunto de datos"
  - "No se usa en probabilidad, sólo en geometría"
respuesta: "Para clasificar visualmente el espacio muestral en casos que cumplen una condición, otra, ambas, o ninguna"

explicacion: |
  Es la base visual sobre la que se construye la probabilidad de
  sucesos combinados.
```

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "intermedio"
  tags: ["venn"]

respuesta: verdadero
tipo: vf

enunciado: "Si en un diagrama de Venn dos círculos se dibujan sin tocarse (sin superposición), representan dos conjuntos disjuntos."

explicacion: |
  Sin superposición no hay intersección — es exactamente lo que
  significa ser disjuntos.
```

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "intermedio"
  tags: ["venn", "problema"]

variables:
  a: random(15, 30)
  b: random(15, 30)
  ninguno: random(5, 20)

respuesta: a + b
tipo: input

enunciado: "En un diagrama de Venn, los círculos A ({a} elementos) y B ({b} elementos) NO se superponen (son disjuntos). ¿Cuántos elementos tiene A ∪ B?"

pasos:
  - "Sin intersección que restar: |A∪B| = |A| + |B| = {a} + {b} = {a + b}"

explicacion: |
  Al no compartir nada, la unión es simplemente la suma de los dos.
```

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "intermedio"
  tags: ["venn"]

enunciado: "¿Cuáles son las tres regiones en las que un diagrama de Venn de dos conjuntos divide a la unión A ∪ B?"
tipo: mc
opciones_explicitas:
  - "Sólo A, sólo B, y la intersección (A∩B)"
  - "El conjunto universal completo"
  - "Sólo la intersección, dividida en dos mitades"
respuesta: "Sólo A, sólo B, y la intersección (A∩B)"

explicacion: |
  Esas tres regiones sumadas son exactamente A ∪ B.
```

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "avanzado"
  tags: ["venn"]

respuesta: falso
tipo: vf

enunciado: "Dibujar un diagrama de Venn alcanza por sí solo para resolver un problema de conteo, sin necesidad de aplicar ninguna fórmula."

explicacion: |
  El diagrama ayuda a organizar visualmente los datos, pero las
  cantidades de cada región siempre se calculan con las fórmulas de
  unión/intersección/diferencia.
```

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve el diagrama de Venn?"
tipo: mc
opciones_explicitas:
  - "Para representar visualmente conjuntos y sus operaciones, y organizar el cálculo de cuántos elementos hay en cada región"
  - "Sólo sirve para dibujar figuras geométricas"
  - "Sólo aplica a conjuntos de menos de 3 elementos"
respuesta: "Para representar visualmente conjuntos y sus operaciones, y organizar el cálculo de cuántos elementos hay en cada región"

explicacion: |
  Es el puente visual entre las operaciones de conjuntos y el próximo
  módulo: contar sin enumerar (principio multiplicativo de conteo).
```

