# Examen jefe — Domina Transformaciones y Conjuntos

> Logro #611. Rotaste y trasladaste figuras, trabajaste las distribuciones de Poisson y exponencial y los diagramas de Venn. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **110 preguntas totales** en 5/5 secciones.

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

## Sección: distribucion-de-poisson (20 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "distribucion_de_poisson"
  nivel: "basico"
  tags: ["poisson", "vocabulario"]

enunciado: "¿Qué modela la distribución de Poisson?"
tipo: mc
opciones_explicitas:
  - "La cantidad de eventos que ocurren en un intervalo fijo de tiempo o espacio, cuando pasan al azar a una tasa promedio constante"
  - "El tiempo que pasa hasta que ocurre el próximo evento"
  - "El promedio de un conjunto de datos ya medidos"
respuesta: "La cantidad de eventos que ocurren en un intervalo fijo de tiempo o espacio, cuando pasan al azar a una tasa promedio constante"

explicacion: |
  Como la cantidad de llamadas que recibe un call center en una hora.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_de_poisson"
  nivel: "basico"
  tags: ["poisson", "vocabulario"]

enunciado: "En la distribución de Poisson, ¿qué representa el parámetro λ?"
tipo: mc
opciones_explicitas:
  - "La cantidad promedio de eventos que ocurren en el intervalo"
  - "La probabilidad de que ocurra un único evento particular"
  - "La cantidad máxima de eventos que pueden ocurrir"
respuesta: "La cantidad promedio de eventos que ocurren en el intervalo"

explicacion: |
  Si en promedio hay 4 llamadas por hora, λ = 4.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_de_poisson"
  nivel: "intermedio"
  tags: ["poisson"]

respuesta: verdadero
tipo: vf

enunciado: "En la distribución de Poisson, el valor esperado E(X) es directamente igual a λ, sin necesitar ningún cálculo extra."

explicacion: |
  A diferencia de otras distribuciones, acá λ ya ES el promedio.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_de_poisson"
  nivel: "avanzado"
  tags: ["poisson", "completar"]

tipo: completar
enunciado: "Completá la fórmula: P(X=k) = (λᵏ × e^(−λ)) / ___."
respuestas_validas:
  - "k!"
  - "k factorial"

explicacion: |
  El factorial de k, el mismo usado en combinatoria.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_de_poisson"
  nivel: "avanzado"
  tags: ["poisson", "problema"]

variables:
  lambda: uno_de([2, 3, 4])
  k: uno_de([0, 1, 2])

respuesta: redondear((lambda ^ k * e ^ (-lambda)) / factorial(k), 4)
tipo: input
tolerancia_abs: 0.001

enunciado: "Un call center recibe en promedio λ = {lambda} llamadas por hora. ¿Cuál es la probabilidad de recibir exactamente {k} llamadas en una hora (P(X={k}))?"

pasos:
  - "P(X={k}) = ({lambda}^{k} × e^(−{lambda})) / {k}! = {redondear((lambda ^ k * e ^ (-lambda)) / factorial(k), 4)}"

explicacion: |
  Se aplica directo la fórmula de Poisson con λ = {lambda} y k = {k}.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_de_poisson"
  nivel: "intermedio"
  tags: ["poisson", "problema"]

variables:
  lambda: uno_de([1, 2, 3, 5])

respuesta: redondear(e ^ (-lambda), 4)
tipo: input
tolerancia_abs: 0.001

enunciado: "Una ruta tiene en promedio λ = {lambda} accidentes por semana. ¿Cuál es la probabilidad de que NO ocurra NINGÚN accidente en una semana (P(X=0))?"

pasos:
  - "P(X=0) = ({lambda}⁰ × e^(−{lambda})) / 0! = e^(−{lambda}) = {redondear(e ^ (-lambda), 4)}"

explicacion: |
  Con k=0, λᵏ=1 y 0!=1 — la fórmula se reduce a e^(−λ).
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_de_poisson"
  nivel: "basico"
  tags: ["poisson", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La distribución de Poisson es discreta, porque siempre cuenta una cantidad entera de eventos (0, 1, 2, 3...)."

explicacion: |
  A diferencia de la exponencial (continua), que mide tiempo.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_de_poisson"
  nivel: "avanzado"
  tags: ["poisson"]

enunciado: "¿Por qué la distribución de Poisson se conoce como 'ley de los sucesos raros'?"
tipo: mc
opciones_explicitas:
  - "Porque hay muchísimas oportunidades de que el evento ocurra, pero la probabilidad de que ocurra en cada oportunidad puntual es muy baja"
  - "Porque los eventos que modela nunca ocurren en la realidad"
  - "Porque sólo se puede usar una vez por cada experimento"
respuesta: "Porque hay muchísimas oportunidades de que el evento ocurra, pero la probabilidad de que ocurra en cada oportunidad puntual es muy baja"

explicacion: |
  Como la probabilidad de que suene el teléfono en un segundo
  cualquiera del día: minúscula, pero sumada da un promedio por hora.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_de_poisson"
  nivel: "avanzado"
  tags: ["poisson", "binomial"]

respuesta: verdadero
tipo: vf

enunciado: "La distribución de Poisson es el caso límite de la distribución binomial cuando la cantidad de intentos n es muy grande y la probabilidad de éxito p es muy chica, manteniendo n×p = λ constante."

explicacion: |
  Es la conexión matemática entre `../distribucion-binomial/` (n
  intentos discretos) y Poisson (conteo en un intervalo continuo de
  oportunidades).
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_de_poisson"
  nivel: "avanzado"
  tags: ["poisson", "exponencial"]

enunciado: "¿Qué relación tiene la distribución de Poisson con la distribución exponencial?"
tipo: mc
opciones_explicitas:
  - "Son la versión discreta (cuántos eventos) y continua (cuánto tiempo entre ellos) de la misma situación real, con la misma tasa subyacente"
  - "No tienen ninguna relación real entre sí"
  - "La Poisson reemplaza siempre a la exponencial"
respuesta: "Son la versión discreta (cuántos eventos) y continua (cuánto tiempo entre ellos) de la misma situación real, con la misma tasa subyacente"

explicacion: |
  Poisson cuenta eventos en un intervalo; exponencial mide el tiempo
  entre esos mismos eventos.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_de_poisson"
  nivel: "basico"
  tags: ["poisson", "aplicacion"]

enunciado: "Una fábrica de telas tiene en promedio 2 defectos por cada 100 metros producidos. ¿Qué distribución conviene usar para calcular la probabilidad de encontrar exactamente 3 defectos en un rollo de 100 metros?"
tipo: mc
opciones_explicitas:
  - "La distribución de Poisson, con λ = 2 defectos por cada 100 metros"
  - "La distribución exponencial, con λ = 1/2"
  - "La distribución normal, con media 2"
respuesta: "La distribución de Poisson, con λ = 2 defectos por cada 100 metros"

explicacion: |
  Es un conteo de eventos raros (defectos) en un intervalo fijo
  (100 metros de tela) — el caso central de Poisson.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_de_poisson"
  nivel: "intermedio"
  tags: ["poisson", "clasificar"]

enunciado: "¿Cuál de estos dos escenarios se modela con Poisson, y no con la exponencial?"
tipo: mc
opciones_explicitas:
  - "La cantidad de mensajes de error que aparecen en un servidor durante una hora"
  - "El tiempo que pasa hasta el próximo mensaje de error"
respuesta: "La cantidad de mensajes de error que aparecen en un servidor durante una hora"

explicacion: |
  "Cantidad en un intervalo" es Poisson; "tiempo hasta que pase algo"
  es exponencial (`../distribucion-exponencial/`).
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_de_poisson"
  nivel: "avanzado"
  tags: ["poisson", "problema"]

variables:
  lambda_bajo: 1
  lambda_alto: 5

respuesta: e ^ (-lambda_bajo) > e ^ (-lambda_alto)
tipo: vf

enunciado: "Comparando P(X=0) (ningún evento) entre un local con λ = {lambda_bajo} clientes por hora y otro con λ = {lambda_alto} clientes por hora, ¿el local con MENOS clientes promedio tiene MAYOR probabilidad de no recibir ninguno?"

explicacion: |
  Cuanto menor es λ, más probable es que no ocurra ningún evento —
  e^(−λ) crece a medida que λ baja.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_de_poisson"
  nivel: "avanzado"
  tags: ["poisson", "problema"]

variables:
  lambda: 3

respuesta: redondear((lambda ^ 3 * e ^ (-lambda)) / factorial(3), 4)
tipo: input
tolerancia_abs: 0.001

enunciado: "Con λ = {lambda} eventos promedio por intervalo, ¿cuál es P(X=3)?"

pasos:
  - "P(X=3) = ({lambda}³ × e^(−{lambda})) / 3! = {redondear((lambda ^ 3 * e ^ (-lambda)) / factorial(3), 4)}"

explicacion: |
  P(X=k) es más alta cerca de k=λ (el valor esperado) y baja a medida
  que k se aleja de ese valor.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_de_poisson"
  nivel: "intermedio"
  tags: ["poisson"]

respuesta: verdadero
tipo: vf

enunciado: "El parámetro λ de una Poisson puede ser un número decimal (por ejemplo, λ = 2,5 llamadas por hora), aunque los valores que puede tomar X sean siempre enteros (0, 1, 2, 3...)."

explicacion: |
  λ es un promedio, y un promedio puede perfectamente ser 2,5 aunque
  cada resultado individual sea un entero.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_de_poisson"
  nivel: "avanzado"
  tags: ["poisson", "problema"]

variables:
  lambda: uno_de([1, 2])

respuesta: redondear((lambda ^ 1 * e ^ (-lambda)) / factorial(1), 4)
tipo: input
tolerancia_abs: 0.001

enunciado: "Una página de un libro tiene en promedio {lambda} errores de tipeo. ¿Cuál es la probabilidad de que una página elegida al azar tenga EXACTAMENTE 1 error?"

pasos:
  - "P(X=1) = ({lambda}¹ × e^(−{lambda})) / 1! = {redondear((lambda ^ 1 * e ^ (-lambda)) / factorial(1), 4)}"

explicacion: |
  Con k=1, la fórmula se reduce a λ × e^(−λ).
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_de_poisson"
  nivel: "avanzado"
  tags: ["poisson", "clasificar"]

enunciado: "Un analista quiere calcular 'la probabilidad de esperar más de 10 minutos hasta el próximo cliente'. ¿La distribución de Poisson es la herramienta correcta para esta pregunta?"
tipo: mc
opciones_explicitas:
  - "No: esa pregunta es sobre TIEMPO de espera, corresponde a la distribución exponencial, no a Poisson"
  - "Sí: cualquier pregunta sobre clientes se resuelve con Poisson"
respuesta: "No: esa pregunta es sobre TIEMPO de espera, corresponde a la distribución exponencial, no a Poisson"

explicacion: |
  Poisson responde "cuántos eventos", no "cuánto tiempo hasta el
  próximo" — esa es la pregunta que resuelve la exponencial.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_de_poisson"
  nivel: "avanzado"
  tags: ["poisson"]

respuesta: verdadero
tipo: vf

enunciado: "La suma de P(X=0) + P(X=1) + P(X=2) + ... (para todos los valores posibles de k, hasta infinito) da exactamente 1, igual que en cualquier variable aleatoria discreta."

explicacion: |
  Es la misma propiedad de toda distribución de probabilidad discreta,
  vista en `../variable-aleatoria-discreta-continua/`.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_de_poisson"
  nivel: "basico"
  tags: ["poisson", "aplicacion"]

enunciado: "En genética, la cantidad de mutaciones espontáneas por generación en una población suele modelarse con Poisson. ¿Por qué es un buen candidato para esta distribución?"
tipo: mc
opciones_explicitas:
  - "Porque hay muchísimos genes donde podría ocurrir una mutación (muchas oportunidades), pero la probabilidad de que mute cada uno en particular es muy baja"
  - "Porque las mutaciones siempre ocurren en cantidades fijas y predecibles"
  - "Porque la Poisson sólo aplica a fenómenos biológicos"
respuesta: "Porque hay muchísimos genes donde podría ocurrir una mutación (muchas oportunidades), pero la probabilidad de que mute cada uno en particular es muy baja"

explicacion: |
  Es la misma lógica de "sucesos raros" aplicada a genética, en vez de
  a llamadas telefónicas o accidentes.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_de_poisson"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve la distribución de Poisson?"
tipo: mc
opciones_explicitas:
  - "Para calcular la probabilidad de que ocurran una cantidad exacta de eventos raros e independientes dentro de un intervalo fijo de tiempo o espacio"
  - "Para medir el tiempo que pasa hasta que ocurre un evento"
  - "Para calcular el promedio de un conjunto de datos ya medidos"
respuesta: "Para calcular la probabilidad de que ocurran una cantidad exacta de eventos raros e independientes dentro de un intervalo fijo de tiempo o espacio"

explicacion: |
  Cierra, junto con `../distribucion-exponencial/`, el par
  discreto/continuo que completa la clasificación de
  `../variable-aleatoria-discreta-continua/`.
```

## Sección: distribucion-exponencial (20 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "distribucion_exponencial"
  nivel: "basico"
  tags: ["exponencial", "vocabulario"]

enunciado: "¿Qué modela la distribución exponencial?"
tipo: mc
opciones_explicitas:
  - "El tiempo que pasa hasta que ocurre el próximo evento, cuando los eventos suceden a una tasa promedio constante"
  - "La cantidad de eventos que ocurren en un intervalo fijo de tiempo"
  - "El promedio de un conjunto de datos ya medidos"
respuesta: "El tiempo que pasa hasta que ocurre el próximo evento, cuando los eventos suceden a una tasa promedio constante"

explicacion: |
  Como el tiempo hasta que llega el próximo colectivo.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_exponencial"
  nivel: "basico"
  tags: ["exponencial", "vocabulario"]

enunciado: "En la distribución exponencial, ¿qué representa el parámetro λ (lambda)?"
tipo: mc
opciones_explicitas:
  - "La tasa promedio de eventos por unidad de tiempo"
  - "La cantidad total de eventos posibles"
  - "El tiempo máximo que se puede esperar"
respuesta: "La tasa promedio de eventos por unidad de tiempo"

explicacion: |
  Por ejemplo, 3 colectivos por hora → λ = 3/hora.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_exponencial"
  nivel: "intermedio"
  tags: ["exponencial", "completar"]

tipo: completar
enunciado: "Completá: el tiempo promedio de espera E(T) = 1 / ___."
respuestas_validas:
  - "λ"
  - "lambda"

explicacion: |
  El tiempo promedio de espera es el inverso de la tasa de eventos.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_exponencial"
  nivel: "intermedio"
  tags: ["exponencial", "problema"]

variables:
  lambda: uno_de([2, 3, 4, 6])

respuesta: redondear(1 / lambda, 3)
tipo: input
tolerancia_abs: 0.001
unidad: "horas"

enunciado: "En promedio llegan {lambda} colectivos por hora (λ = {lambda}/hora). ¿Cuál es el tiempo promedio de espera entre un colectivo y el siguiente, en horas?"

pasos:
  - "E(T) = 1/λ = 1/{lambda} = {redondear(1 / lambda, 3)} horas"

explicacion: |
  El tiempo promedio de espera es el inverso de la tasa de llegada.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_exponencial"
  nivel: "intermedio"
  tags: ["exponencial", "problema"]

variables:
  tiempo_promedio: uno_de([4, 5, 10, 20])

respuesta: redondear(1 / tiempo_promedio, 3)
tipo: input
tolerancia_abs: 0.001

enunciado: "El tiempo promedio entre fallas de una máquina es de {tiempo_promedio} días. ¿Cuál es la tasa λ de fallas por día?"

pasos:
  - "λ = 1/E(T) = 1/{tiempo_promedio} = {redondear(1 / tiempo_promedio, 3)} fallas por día"

explicacion: |
  λ y el tiempo promedio son inversos entre sí.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_exponencial"
  nivel: "avanzado"
  tags: ["exponencial", "completar"]

tipo: completar
enunciado: "Completá: P(T > t) = e^(−λ × ___)."
respuestas_validas:
  - "t"

explicacion: |
  Es la probabilidad de tener que esperar más de `t` unidades de
  tiempo.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_exponencial"
  nivel: "avanzado"
  tags: ["exponencial", "problema"]

variables:
  lambda: uno_de([0.5, 1, 2])
  t: uno_de([1, 2])

respuesta: redondear(e ^ (-(lambda * t)), 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "Los eventos ocurren con tasa λ = {lambda} por unidad de tiempo. ¿Cuál es la probabilidad de tener que esperar MÁS de {t} unidades de tiempo (P(T > {t}))?"

pasos:
  - "P(T > {t}) = e^(−{lambda}×{t}) = {redondear(e ^ (-(lambda * t)), 3)}"

explicacion: |
  Cuanto más grande el tiempo `t`, más chica esta probabilidad.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_exponencial"
  nivel: "avanzado"
  tags: ["exponencial", "problema"]

variables:
  lambda: uno_de([0.5, 1, 2])
  t: uno_de([1, 2])

respuesta: redondear(1 - e ^ (-(lambda * t)), 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "Los eventos ocurren con tasa λ = {lambda} por unidad de tiempo. ¿Cuál es la probabilidad de que el evento YA HAYA OCURRIDO para el tiempo {t} (P(T ≤ {t}))?"

pasos:
  - "P(T ≤ {t}) = 1 − e^(−{lambda}×{t}) = {redondear(1 - e ^ (-(lambda * t)), 3)}"

explicacion: |
  Es el complemento de P(T > t): juntas siempre suman 1.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_exponencial"
  nivel: "intermedio"
  tags: ["exponencial"]

respuesta: verdadero
tipo: vf

enunciado: "P(T ≤ t) y P(T > t) siempre suman exactamente 1, para cualquier valor de t."

explicacion: |
  Son eventos complementarios: o el evento ya ocurrió, o no.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_exponencial"
  nivel: "avanzado"
  tags: ["exponencial", "poisson"]

enunciado: "¿Cómo se relaciona la distribución exponencial con la distribución de Poisson?"
tipo: mc
opciones_explicitas:
  - "Si la CANTIDAD de eventos por intervalo sigue una Poisson, el TIEMPO entre esos eventos consecutivos sigue una exponencial con la misma tasa λ"
  - "No tienen ninguna relación, son distribuciones completamente independientes"
  - "La exponencial reemplaza a la Poisson, nunca se usan para el mismo problema"
respuesta: "Si la CANTIDAD de eventos por intervalo sigue una Poisson, el TIEMPO entre esos eventos consecutivos sigue una exponencial con la misma tasa λ"

explicacion: |
  Son dos caras de la misma situación: una cuenta eventos (discreta),
  la otra mide el tiempo entre ellos (continua).
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_exponencial"
  nivel: "basico"
  tags: ["exponencial", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La distribución exponencial es una distribución continua, porque el tiempo puede tomar cualquier valor, no sólo números enteros."

explicacion: |
  A diferencia de la Poisson (discreta, que cuenta eventos enteros).
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_exponencial"
  nivel: "basico"
  tags: ["exponencial", "aplicacion"]

enunciado: "Una lamparita dura en promedio 2.000 horas antes de quemarse, y las fallas ocurren al azar a una tasa constante. ¿Qué distribución conviene usar para modelar 'cuánto va a durar esta lamparita en particular'?"
tipo: mc
opciones_explicitas:
  - "La distribución exponencial, con λ = 1/2000 fallas por hora"
  - "La distribución binomial, con n=2000 intentos"
  - "La distribución de Poisson, contando lamparitas"
respuesta: "La distribución exponencial, con λ = 1/2000 fallas por hora"

explicacion: |
  Es exactamente "tiempo hasta que ocurre el próximo evento (la
  falla)", el caso central de la exponencial.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_exponencial"
  nivel: "intermedio"
  tags: ["exponencial", "clasificar"]

enunciado: "¿Cuál de estos dos escenarios se modela con la distribución EXPONENCIAL, y no con Poisson?"
tipo: mc
opciones_explicitas:
  - "El tiempo que pasa hasta que llega el próximo cliente a un local"
  - "La cantidad de clientes que llegan a un local en una hora"
respuesta: "El tiempo que pasa hasta que llega el próximo cliente a un local"

explicacion: |
  "Tiempo hasta" es exponencial (continua); "cantidad en un
  intervalo" es Poisson (discreta) — ver `../distribucion-de-poisson/`.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_exponencial"
  nivel: "avanzado"
  tags: ["exponencial", "problema"]

variables:
  lambda_a: 1
  lambda_b: 3
  t: 1

respuesta: e ^ (-(lambda_a * t)) > e ^ (-(lambda_b * t))
tipo: vf

enunciado: "Sistema A tiene λ = {lambda_a} eventos por hora; Sistema B tiene λ = {lambda_b} eventos por hora (más eventos por hora que A). Para el mismo tiempo t = {t} hora, ¿P(T > {t}) del Sistema A es MAYOR que la del Sistema B?"

explicacion: |
  A menor tasa de eventos (λ), más probable es tener que esperar más
  tiempo — A tiene menos eventos por hora, así que su P(T>1) es mayor.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_exponencial"
  nivel: "intermedio"
  tags: ["exponencial"]

respuesta: verdadero
tipo: vf

enunciado: "Cuanto mayor es la tasa λ (más eventos ocurren por unidad de tiempo), menor es el tiempo promedio de espera hasta el próximo evento."

explicacion: |
  E(T) = 1/λ: si λ crece, 1/λ (el tiempo promedio) baja.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_exponencial"
  nivel: "intermedio"
  tags: ["exponencial", "problema"]

variables:
  lambda_local_a: uno_de([2, 4])
  lambda_local_b: uno_de([1, 3])

respuesta: (1 / lambda_local_a) < (1 / lambda_local_b)
tipo: vf

enunciado: "Local A recibe clientes con tasa λ = {lambda_local_a} por hora; Local B recibe clientes con tasa λ = {lambda_local_b} por hora. ¿El tiempo promedio entre clientes del Local A es MENOR que el del Local B?"

explicacion: |
  Comparar 1/λ de cada local: mayor tasa de llegada implica menor
  tiempo promedio de espera entre clientes.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_exponencial"
  nivel: "basico"
  tags: ["exponencial", "aplicacion"]

enunciado: "Una fábrica quiere estimar la probabilidad de que una máquina funcione MÁS de 100 horas sin fallar, sabiendo que en promedio falla cada 500 horas. ¿Qué necesita calcular?"
tipo: mc
opciones_explicitas:
  - "P(T > 100) usando la exponencial con λ = 1/500"
  - "P(X = 100) usando la binomial con n = 500"
  - "El desvío estándar de 500 horas"
respuesta: "P(T > 100) usando la exponencial con λ = 1/500"

explicacion: |
  Es la pregunta central de la distribución exponencial aplicada a
  confiabilidad de componentes.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_exponencial"
  nivel: "avanzado"
  tags: ["exponencial", "problema"]

variables:
  lambda: uno_de([1, 2, 4])
  t: 1 / lambda

respuesta: redondear(e ^ (-(lambda * t)), 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "Con λ = {lambda}, el tiempo promedio de espera es 1/{lambda}. ¿Cuál es la probabilidad de esperar MÁS que ese tiempo promedio (P(T > 1/λ))?"

pasos:
  - "P(T > 1/λ) = e^(−λ×1/λ) = e^(−1) ≈ {redondear(e ^ (-(lambda * t)), 3)}"

explicacion: |
  Este resultado (e^(−1) ≈ 0,368) es siempre el mismo, sin importar
  λ — casi el 37% de las veces se espera más que el promedio, porque
  la exponencial no es simétrica como la normal.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_exponencial"
  nivel: "avanzado"
  tags: ["exponencial", "clasificar"]

enunciado: "Un analista quiere calcular 'la probabilidad de que lleguen exactamente 5 clientes en la próxima hora'. ¿La distribución exponencial es la herramienta correcta para esta pregunta?"
tipo: mc
opciones_explicitas:
  - "No: esa pregunta es un CONTEO de eventos en un intervalo fijo, corresponde a la distribución de Poisson, no a la exponencial"
  - "Sí: cualquier pregunta sobre clientes se resuelve con la exponencial"
respuesta: "No: esa pregunta es un CONTEO de eventos en un intervalo fijo, corresponde a la distribución de Poisson, no a la exponencial"

explicacion: |
  La exponencial responde "cuánto tiempo hasta que pase algo", no
  "cuántos eventos van a pasar" — esa es la pregunta de Poisson.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_exponencial"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve la distribución exponencial?"
tipo: mc
opciones_explicitas:
  - "Para modelar el tiempo de espera hasta que ocurre un evento, cuando los eventos suceden al azar a una tasa promedio constante"
  - "Para contar cuántos eventos ocurren en un intervalo fijo de tiempo"
  - "Para calcular el promedio de un conjunto de datos ya medidos"
respuesta: "Para modelar el tiempo de espera hasta que ocurre un evento, cuando los eventos suceden al azar a una tasa promedio constante"

explicacion: |
  Es el caso continuo hermano de la distribución de Poisson (el
  módulo que sigue), que cuenta eventos en vez de medir tiempos.
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

