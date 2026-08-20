# Examen jefe — Maestro de la Divisibilidad

> Logro #60. Completaste el parcial dominando reglas de divisibilidad y la distribución normal. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **104 preguntas totales** en 5/5 secciones.

---

## Sección: distribucion-normal (20 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "distribucion_normal"
  nivel: "basico"
  tags: ["normal", "vocabulario"]

enunciado: "¿Qué forma tiene la distribución normal (campana de Gauss)?"
tipo: mc
opciones_explicitas:
  - "Simétrica, con la mayoría de los casos agrupados cerca del centro y cada vez menos casos hacia los extremos"
  - "Una línea recta con la misma cantidad de casos en todos los valores"
  - "Siempre inclinada hacia un solo lado"
respuesta: "Simétrica, con la mayoría de los casos agrupados cerca del centro y cada vez menos casos hacia los extremos"

explicacion: |
  Es simétrica respecto de la media, con forma de campana.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_normal"
  nivel: "basico"
  tags: ["normal", "vocabulario"]

enunciado: "¿Qué dos números definen por completo una distribución normal?"
tipo: mc
opciones_explicitas:
  - "La media (dónde está el centro) y el desvío estándar (qué tan ancha es)"
  - "El máximo y el mínimo"
  - "La moda y el rango"
respuesta: "La media (dónde está el centro) y el desvío estándar (qué tan ancha es)"

explicacion: |
  Los mismos dos números construidos en `../dispersion-rango-y-desvio/`.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_normal"
  nivel: "basico"
  tags: ["normal"]

respuesta: verdadero
tipo: vf

enunciado: "En una distribución normal perfecta, media, mediana y moda coinciden en el mismo valor."

explicacion: |
  Es el caso ideal en el que un solo promedio sí representa bien a
  todo el conjunto de datos.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_normal"
  nivel: "intermedio"
  tags: ["normal", "regla_empirica", "completar"]

tipo: completar
enunciado: "Completá la regla empírica: aproximadamente el 68% de los datos cae dentro de ___ desvío(s) estándar de la media."
respuestas_validas:
  - "1"
  - "un"

explicacion: |
  μ ± 1σ contiene aproximadamente el 68% de los datos.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_normal"
  nivel: "intermedio"
  tags: ["normal", "regla_empirica", "completar"]

tipo: completar
enunciado: "Completá la regla empírica: aproximadamente el 95% de los datos cae dentro de ___ desvíos estándar de la media."
respuestas_validas:
  - "2"
  - "dos"

explicacion: |
  μ ± 2σ contiene aproximadamente el 95% de los datos.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_normal"
  nivel: "intermedio"
  tags: ["normal", "regla_empirica", "completar"]

tipo: completar
enunciado: "Completá la regla empírica: aproximadamente el 99,7% de los datos cae dentro de ___ desvíos estándar de la media."
respuestas_validas:
  - "3"
  - "tres"

explicacion: |
  Es la regla "68-95-99,7" completa.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_normal"
  nivel: "intermedio"
  tags: ["normal", "regla_empirica", "problema"]

variables:
  media: uno_de([50, 60, 70, 100])
  desvio: uno_de([5, 8, 10])

respuesta: media - desvio
tipo: input

enunciado: "Las notas de un examen tienen media {media} y desvío estándar {desvio}. Según la regla empírica, ¿cuál es el límite INFERIOR del rango que contiene aproximadamente al 68% de los alumnos?"

pasos:
  - "Límite inferior = media − 1 desvío = {media} − {desvio} = {media - desvio}"

explicacion: |
  El rango completo del 68% va de (media − 1σ) a (media + 1σ).
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_normal"
  nivel: "avanzado"
  tags: ["normal", "regla_empirica", "problema"]

variables:
  media: uno_de([50, 60, 70, 100])
  desvio: uno_de([5, 8, 10])

respuesta: media + desvio * 2
tipo: input

enunciado: "Las notas de un examen tienen media {media} y desvío estándar {desvio}. Según la regla empírica, ¿cuál es el límite SUPERIOR del rango que contiene aproximadamente al 95% de los alumnos?"

pasos:
  - "Límite superior = media + 2 desvíos = {media} + 2×{desvio} = {media + desvio * 2}"

explicacion: |
  El rango completo del 95% va de (media − 2σ) a (media + 2σ).
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_normal"
  nivel: "intermedio"
  tags: ["z_score", "vocabulario"]

enunciado: "¿Qué indica el z-score de un valor?"
tipo: mc
opciones_explicitas:
  - "A cuántos desvíos estándar de la media está ese valor"
  - "El porcentaje exacto de datos que son mayores a ese valor"
  - "La media del conjunto de datos"
respuesta: "A cuántos desvíos estándar de la media está ese valor"

explicacion: |
  z = (x − media) / desvío.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_normal"
  nivel: "intermedio"
  tags: ["z_score", "completar"]

tipo: completar
enunciado: "Completá: z = (x − media) / ___."
respuestas_validas:
  - "desvío"
  - "desvio"
  - "desvío estándar"
  - "desvio estandar"

explicacion: |
  Se divide la distancia a la media por el desvío estándar.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_normal"
  nivel: "avanzado"
  tags: ["z_score", "problema"]

variables:
  media: uno_de([50, 60, 100])
  desvio: uno_de([5, 10])
  pasos_z: uno_de([1, 2, -1, -2])
  x: media + desvio * pasos_z

respuesta: redondear((x - media) / desvio, 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Una distribución tiene media {media} y desvío estándar {desvio}. ¿Cuál es el z-score del valor {x}?"

pasos:
  - "z = ({x} − {media}) / {desvio} = {redondear((x - media) / desvio, 2)}"

explicacion: |
  El z-score indica directamente cuántos desvíos estándar separan al
  valor de la media.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_normal"
  nivel: "avanzado"
  tags: ["z_score", "problema"]

variables:
  media: uno_de([50, 60, 100])
  desvio: uno_de([5, 10])
  z: uno_de([1, 2, -1])

respuesta: media + z * desvio
tipo: input

enunciado: "Una distribución tiene media {media} y desvío estándar {desvio}. ¿Qué valor tiene un z-score de {z}?"

pasos:
  - "x = media + z × desvío = {media} + {z}×{desvio} = {media + z * desvio}"

explicacion: |
  Es la fórmula del z-score despejada para `x` en vez de para `z`.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_normal"
  nivel: "intermedio"
  tags: ["z_score"]

respuesta: verdadero
tipo: vf

enunciado: "Un z-score negativo significa que el valor está por debajo de la media."

explicacion: |
  z < 0 ocurre cuando x < media, porque el numerador (x − media) da
  negativo.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_normal"
  nivel: "intermedio"
  tags: ["z_score", "aplicacion"]

enunciado: "Un alumno sacó 8 en Matemática (media 6, desvío 1) y 80 en Lengua (media 65, desvío 10). ¿Cómo se puede comparar en cuál de las dos materias le fue relativamente mejor?"
tipo: mc
opciones_explicitas:
  - "Calculando el z-score de cada nota y comparando esos dos números, no las notas directamente"
  - "Comparando las notas directo: 80 > 8, así que le fue mejor en Lengua"
  - "No se puede comparar el desempeño en dos materias distintas"
respuesta: "Calculando el z-score de cada nota y comparando esos dos números, no las notas directamente"

explicacion: |
  z(Matemática) = (8−6)/1 = 2; z(Lengua) = (80−65)/10 = 1,5 — en
  términos relativos a cada distribución, le fue mejor en Matemática.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_normal"
  nivel: "intermedio"
  tags: ["normal"]

respuesta: verdadero
tipo: vf

enunciado: "Cuanto mayor es el desvío estándar, más ancha (más 'aplastada') es la campana de la distribución normal, porque los datos están más dispersos alrededor de la media."

explicacion: |
  Un desvío chico da una campana angosta y alta (datos muy
  concentrados cerca de la media); un desvío grande la aplasta y
  ensancha.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_normal"
  nivel: "avanzado"
  tags: ["normal", "aplicacion"]

enunciado: "¿Por qué fenómenos tan distintos (alturas de personas, errores de medición, tiempos de reacción) suelen aproximarse a una distribución normal?"
tipo: mc
opciones_explicitas:
  - "Porque son el resultado de sumar muchos factores pequeños e independientes — cuando eso pasa, el resultado tiende a distribuirse en forma normal"
  - "Porque todos los fenómenos naturales son normales por definición, sin ninguna razón matemática detrás"
  - "Porque se los mide siempre con el mismo instrumento"
respuesta: "Porque son el resultado de sumar muchos factores pequeños e independientes — cuando eso pasa, el resultado tiende a distribuirse en forma normal"

explicacion: |
  Es la intuición central detrás del teorema central del límite, un
  módulo más adelante en esta misma cadena.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_normal"
  nivel: "avanzado"
  tags: ["normal", "regla_empirica", "problema"]

variables:
  media: 70
  desvio: 10
  nota: uno_de([65, 75, 55, 95])

respuesta: abs(nota - media) <= desvio
tipo: vf

enunciado: "Un examen tiene media 70 y desvío estándar 10. Un alumno sacó {nota}. ¿Esa nota cae dentro de 1 desvío estándar de la media (entre 60 y 80)?"

explicacion: |
  Alcanza con comparar la distancia a la media (|{nota} − 70|) contra
  el desvío estándar (10).
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_normal"
  nivel: "intermedio"
  tags: ["normal", "vocabulario"]

enunciado: "¿La distribución normal es un ejemplo de variable aleatoria discreta o continua?"
tipo: mc
opciones_explicitas:
  - "Continua: puede tomar cualquier valor dentro de un intervalo, no sólo números enteros contables"
  - "Discreta: sólo puede tomar valores enteros"
  - "Ninguna de las dos categorías se aplica a la normal"
respuesta: "Continua: puede tomar cualquier valor dentro de un intervalo, no sólo números enteros contables"

explicacion: |
  A diferencia de la binomial (discreta, cuenta éxitos), la normal
  describe una magnitud que puede tomar cualquier valor real.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_normal"
  nivel: "avanzado"
  tags: ["normal"]

enunciado: "Dos exámenes distintos tienen la misma media (70), pero el Examen A tiene desvío 5 y el Examen B tiene desvío 20. ¿Qué diferencia real hay entre ambos grupos de notas?"
tipo: mc
opciones_explicitas:
  - "En el Examen A las notas están mucho más concentradas cerca de 70; en el B están mucho más dispersas, con más alumnos lejos de la media"
  - "No hay ninguna diferencia real, porque la media es igual en los dos"
  - "El Examen B tiene, en promedio, notas más altas que el A"
respuesta: "En el Examen A las notas están mucho más concentradas cerca de 70; en el B están mucho más dispersas, con más alumnos lejos de la media"

explicacion: |
  La media dice dónde está el centro; el desvío dice qué tan
  agrupados o dispersos están los datos alrededor de ese centro — son
  dos preguntas distintas.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_normal"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve conocer la distribución normal?"
tipo: mc
opciones_explicitas:
  - "Para describir y predecir la proporción de datos que cae en cierto rango, en fenómenos que resultan de sumar muchos factores pequeños e independientes"
  - "Sólo sirve para calcular la media de un conjunto de datos"
  - "Sólo se aplica a exámenes escolares"
respuesta: "Para describir y predecir la proporción de datos que cae en cierto rango, en fenómenos que resultan de sumar muchos factores pequeños e independientes"

explicacion: |
  Es la base de muestreo, intervalos de confianza y tests de
  hipótesis — todos los módulos que siguen en esta cadena.
```

## Sección: divisibilidad/divisores (22 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "divisores"
  nivel: "basico"
  tags: ["divisores", "vocabulario"]

enunciado: "¿Qué significa que B sea divisor de A?"
tipo: mc
opciones_explicitas:
  - "A dividido B da resto 0"
  - "B es más grande que A"
  - "B es múltiplo de A"
respuesta: "A dividido B da resto 0"

explicacion: |
  B es divisor de A si la división A ÷ B es exacta (resto 0).
```

```
metadata:
  materia: "matematicas"
  tema: "divisores"
  nivel: "basico"
  tags: ["divisores"]

variables:
  b: random(2, 9)
  k: random(2, 20)
  a: b * k + uno_de([0, 0, 1])
  resto: a - floor(a / b) * b

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Es {b} divisor de {a}?"

explicacion: |
  B es divisor de A si A ÷ B no deja resto.
```

```
metadata:
  materia: "matematicas"
  tema: "divisores"
  nivel: "basico"
  tags: ["divisores"]

variables:
  a: random(20, 200)
  b: random(2, 15)
  resto: a - floor(a / b) * b

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Es {b} divisor de {a}?"

explicacion: |
  Hay que hacer la división y ver si el resto da 0.
```

```
metadata:
  materia: "matematicas"
  tema: "divisores"
  nivel: "intermedio"
  tags: ["divisores"]

variables:
  n: random(2, 40)

respuesta: largo(divisores(n))
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos divisores tiene el número {n} (contando el 1 y el propio {n})?"

explicacion: |
  Se cuentan todos los números que dividen a {n} exactamente.
```

```
metadata:
  materia: "matematicas"
  tema: "divisores"
  nivel: "avanzado"
  tags: ["divisores"]

variables:
  n: random(40, 100)

respuesta: largo(divisores(n))
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos divisores tiene el número {n}?"

explicacion: |
  Con números más grandes conviene probar sistemáticamente desde el 1 en
  adelante, sin saltear ninguno.
```

```
metadata:
  materia: "matematicas"
  tema: "divisores"
  nivel: "basico"
  tags: ["divisores"]

variables:
  n: random(2, 999)

respuesta: 1
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el divisor más chico de {n} (mayor que 0)?"

explicacion: |
  El 1 es divisor de todos los números, así que siempre es el más chico
  posible.
```

```
metadata:
  materia: "matematicas"
  tema: "divisores"
  nivel: "basico"
  tags: ["divisores"]

variables:
  n: random(2, 999)

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el divisor más grande de {n}?"

explicacion: |
  Ningún divisor puede ser mayor que el propio número: el más grande
  siempre es él mismo.
```

```
metadata:
  materia: "matematicas"
  tema: "divisores"
  nivel: "intermedio"
  tags: ["divisores"]

variables:
  n: random(20, 60)
  divs: divisores(n)
  reales: n_de(divs, 2)
  falso_candidato: n + 1

restricciones:
  - largo(divs) >= 4

respuesta: falso_candidato
tipo: mc
opciones_explicitas:
  - primero(reales)
  - ultimo(reales)
  - falso_candidato

enunciado: "¿Cuál de estos tres números NO es divisor de {n}?"

explicacion: |
  Ningún número mayor que {n} puede ser divisor de {n}.
```

```
metadata:
  materia: "matematicas"
  tema: "divisores"
  nivel: "avanzado"
  tags: ["divisores"]

variables:
  d: random(2, 9)
  a: d * random(2, 10)
  b: d * random(2, 10)

respuesta: verdadero
tipo: vf

enunciado: "¿Es {d} divisor de {a} y también divisor de {b} al mismo tiempo?"

explicacion: |
  Un mismo número puede ser divisor de varios números a la vez: acá {d}
  divide a los dos.
```

```
metadata:
  materia: "matematicas"
  tema: "divisores"
  nivel: "basico"
  tags: ["divisores", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Si A es múltiplo de B, entonces B es divisor de A."

explicacion: |
  Son la misma afirmación mirada desde los dos lados.
```

```
metadata:
  materia: "matematicas"
  tema: "divisores"
  nivel: "basico"
  tags: ["divisores", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El 1 es divisor de cualquier número."

explicacion: |
  n ÷ 1 = n, sin resto, para cualquier n.
```

```
metadata:
  materia: "matematicas"
  tema: "divisores"
  nivel: "basico"
  tags: ["divisores", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Todo número es divisor de sí mismo."

explicacion: |
  n ÷ n = 1, resto 0, para cualquier n distinto de 0.
```

```
metadata:
  materia: "matematicas"
  tema: "divisores"
  nivel: "avanzado"
  tags: ["divisores"]

variables:
  a: random(10, 40)
  b: random(10, 40)

restricciones:
  - largo(divisores(a)) != largo(divisores(b))

respuesta: (largo(divisores(a)) > largo(divisores(b)))
tipo: vf

enunciado: "¿Tiene {a} más divisores que {b}?"

explicacion: |
  Hay que contar los divisores de cada uno y comparar las cantidades.
```

```
metadata:
  materia: "matematicas"
  tema: "divisores"
  nivel: "intermedio"
  tags: ["divisores"]

variables:
  n: uno_de([2, 3, 5, 7, 11, 13, 17, 19, 23])

respuesta: 2
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos divisores tiene el número {n}?"

explicacion: |
  {n} sólo tiene dos divisores: el 1 y él mismo — esa es, de hecho, la
  definición de número primo.
```

```
metadata:
  materia: "matematicas"
  tema: "divisores"
  nivel: "basico"
  tags: ["divisores"]

respuesta: 1
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos divisores tiene el número 1?"

explicacion: |
  El 1 sólo se divide exactamente por sí mismo: tiene un único divisor.
```

```
metadata:
  materia: "matematicas"
  tema: "divisores"
  nivel: "intermedio"
  tags: ["divisores", "problema"]

variables:
  n: random(20, 60)
  divs: divisores(n)
  candidato: n_de(divs, 1)

respuesta: verdadero
tipo: vf

enunciado: "¿Se pueden repartir {n} figuritas entre {primero(candidato)} chicos sin que sobre ninguna?"

explicacion: |
  Se puede repartir sin que sobre nada exactamente cuando la cantidad de
  chicos es un divisor del total.
```

```
metadata:
  materia: "matematicas"
  tema: "divisores"
  nivel: "intermedio"
  tags: ["divisores", "problema"]

variables:
  n: random(20, 60)
  divs: divisores(n)
  no_divisor: n + 1

respuesta: falso
tipo: vf

enunciado: "¿Se pueden repartir {n} figuritas entre {no_divisor} chicos sin que sobre ninguna?"

explicacion: |
  {no_divisor} es mayor que {n}, así que ni siquiera le tocaría una
  figurita entera a cada uno — mucho menos un reparto exacto.
```

```
metadata:
  materia: "matematicas"
  tema: "divisores"
  nivel: "intermedio"
  tags: ["divisores"]

variables:
  d: random(2, 9)
  base: d * random(3, 30)
  otro1: base + 1
  otro2: base + 2

respuesta: base
tipo: mc
opciones_explicitas:
  - base
  - otro1
  - otro2

enunciado: "¿Cuál de estos tres números tiene a {d} como divisor?"

explicacion: |
  Sólo uno de los tres es exactamente {d} × algún entero.
```

```
metadata:
  materia: "matematicas"
  tema: "divisores"
  nivel: "intermedio"
  tags: ["divisores"]

variables:
  d: random(2, 9)
  k: random(2, 9)
  n: d * k

tipo: completar
enunciado: "Nombrá un divisor de {n} que no sea ni 1 ni {n}."
respuestas_validas:
  - d
  - k

explicacion: |
  Cualquier divisor de la lista completa, salvo el 1 y el propio número,
  sirve como respuesta.
```

```
metadata:
  materia: "matematicas"
  tema: "divisores"
  nivel: "basico"
  tags: ["divisores", "orden"]

tipo: ordenar
enunciado: "Ordená de menor a mayor los divisores de 12."
opciones_explicitas:
  - "6"
  - "1"
  - "3"
  - "2"
respuesta_orden: ["1", "2", "3", "6"]

explicacion: |
  12 tiene 6 divisores en total (1, 2, 3, 4, 6, 12); estos cuatro,
  ordenados de menor a mayor, quedan 1, 2, 3, 6.
```

```
metadata:
  materia: "matematicas"
  tema: "divisores"
  nivel: "basico"
  tags: ["divisores", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un divisor nunca puede ser mayor que el número que divide."

explicacion: |
  Si B fuera mayor que A, B no podría entrar ni una vez completa dentro
  de A — no sería divisor.
```

```
metadata:
  materia: "matematicas"
  tema: "divisores"
  nivel: "avanzado"
  tags: ["divisores"]

variables:
  d: random(2, 9)
  a: d * random(2, 10)
  b: d * random(2, 10)

respuesta: d
tipo: input
tolerancia_abs: 0

enunciado: "Nombrá un número (distinto de 1) que sea divisor de {a} y de {b} al mismo tiempo."

explicacion: |
  Buscar divisores en común entre dos números es el primer paso para
  calcular el MCD, más adelante en el mapa.
```

## Sección: divisibilidad/multiplos (22 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "multiplos"
  nivel: "basico"
  tags: ["multiplos", "vocabulario"]

enunciado: "¿Qué significa que A sea múltiplo de B?"
tipo: mc
opciones_explicitas:
  - "A es el resultado de multiplicar B por algún número entero"
  - "A es más chico que B"
  - "A y B son siempre el mismo número"
respuesta: "A es el resultado de multiplicar B por algún número entero"

explicacion: |
  A es múltiplo de B si existe un entero k tal que A = B × k.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplos"
  nivel: "basico"
  tags: ["multiplos"]

variables:
  b: random(2, 9)
  k: random(2, 20)
  a: b * k + uno_de([0, 0, 1])
  resto: a - floor(a / b) * b

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Es {a} múltiplo de {b}?"

explicacion: |
  A es múltiplo de B si B entra un número exacto de veces en A.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplos"
  nivel: "basico"
  tags: ["multiplos"]

variables:
  b: random(2, 9)
  n: random(2, 8)

respuesta: b * n
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el múltiplo número {n} de {b}?"

explicacion: |
  El múltiplo número n de b es b × n.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplos"
  nivel: "intermedio"
  tags: ["multiplos"]

variables:
  b: random(3, 25)
  n: random(5, 15)

respuesta: b * n
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el múltiplo número {n} de {b}?"

explicacion: |
  El procedimiento es el mismo con números más grandes: b × n.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplos"
  nivel: "intermedio"
  tags: ["multiplos", "problema"]

variables:
  b: random(2, 9)
  n: random(3, 10)

respuesta: b * n
tipo: input
tolerancia_abs: 0

enunciado: "Un colectivo pasa cada {b} minutos, empezando en el minuto {b}. ¿En qué minuto pasa por {n}ª vez?"

explicacion: |
  La n-ésima vez que pasa es, exactamente, el múltiplo número n de {b}.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplos"
  nivel: "intermedio"
  tags: ["multiplos"]

variables:
  b: random(2, 9)
  a: random(1, 100)
  c: a + random(20, 80)

respuesta: floor(c / b) - floor((a - 1) / b)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos múltiplos de {b} hay entre {a} y {c}, contando a los dos extremos si lo son?"

explicacion: |
  Se cuentan los múltiplos de {b} hasta {c} y se descartan los que ya
  habían pasado antes de {a}.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplos"
  nivel: "intermedio"
  tags: ["multiplos"]

variables:
  b: random(3, 12)
  a: random(1, 50)
  c: a + random(30, 100)

respuesta: floor(c / b) - floor((a - 1) / b)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos múltiplos de {b} hay entre {a} y {c}?"

explicacion: |
  Mismo procedimiento, con otro rango y otro número.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplos"
  nivel: "basico"
  tags: ["multiplos"]

variables:
  b: random(2, 9)
  base: b * random(4, 40)
  otro1: base + 1
  otro2: base + 2

respuesta: base
tipo: mc
opciones_explicitas:
  - base
  - otro1
  - otro2

enunciado: "¿Cuál de estos tres números es múltiplo de {b}?"

explicacion: |
  Sólo uno de los tres es exactamente {b} × algún entero.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplos"
  nivel: "basico"
  tags: ["multiplos"]

variables:
  b: random(2, 9)
  base: b * random(4, 40)
  otro: base + 1

respuesta: otro
tipo: mc
opciones_explicitas:
  - base
  - otro

enunciado: "¿Cuál de estos dos números NO es múltiplo de {b}?"

explicacion: |
  {base} sí es múltiplo de {b}; el otro número no lo es porque le sobra 1.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplos"
  nivel: "basico"
  tags: ["multiplos", "secuencia"]

variables:
  b: random(2, 9)
  n: random(2, 10)

tipo: completar
enunciado: "Completá el próximo múltiplo de {b} después de {b * n}."
respuestas_validas:
  - b * (n + 1)

explicacion: |
  El próximo múltiplo es, simplemente, sumarle {b} otra vez al anterior.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplos"
  nivel: "intermedio"
  tags: ["multiplos", "secuencia"]

variables:
  b: random(2, 9)
  n: random(2, 10)

tipo: completar
enunciado: "Completá el múltiplo que falta: {b * n}, ___, {b * (n + 2)}."
respuestas_validas:
  - b * (n + 1)

explicacion: |
  Entre dos múltiplos consecutivos hay exactamente un salto de {b}.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplos"
  nivel: "basico"
  tags: ["multiplos", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Todo número es múltiplo de sí mismo."

explicacion: |
  n = n × 1, así que cualquier n cumple la definición de múltiplo de sí
  mismo.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplos"
  nivel: "basico"
  tags: ["multiplos", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Todo número es múltiplo de 1."

explicacion: |
  n = 1 × n, para cualquier n.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplos"
  nivel: "basico"
  tags: ["multiplos"]

variables:
  b: random(2, 99)

respuesta: b
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el primer múltiplo de {b} (sin contar el 0)?"

explicacion: |
  El primer múltiplo (sin contar el 0) es el propio número, multiplicado
  por 1.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplos"
  nivel: "avanzado"
  tags: ["multiplos", "calculo_mental"]

variables:
  b: random(2, 9)
  n: random(3, 8)

respuesta: b * (n * (n + 1) / 2)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto suman los primeros {n} múltiplos de {b} (desde {b} hasta {b * n})?"

pasos:
  - "Es {b} × (1+2+...+{n}) = {b} × {n * (n + 1) / 2} = {b * (n * (n + 1) / 2)}"

explicacion: |
  Sumar los primeros n múltiplos de b es lo mismo que multiplicar b por la
  suma de los primeros n números naturales.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplos"
  nivel: "intermedio"
  tags: ["multiplos"]

variables:
  a: random(2, 9)
  b: random(2, 9)
  candidato: a * b

respuesta: verdadero
tipo: vf

enunciado: "¿Es {candidato} múltiplo tanto de {a} como de {b}?"

explicacion: |
  El producto de dos números siempre es múltiplo de cada uno de ellos por
  separado.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplos"
  nivel: "avanzado"
  tags: ["multiplos"]

variables:
  a: random(2, 9)
  b: random(2, 9)
  base: a * b
  otro1: base + a
  otro2: base + 1

respuesta: base
tipo: mc
opciones_explicitas:
  - base
  - otro1
  - otro2

enunciado: "¿Cuál de estos tres números es múltiplo de {a} y de {b} al mismo tiempo?"

explicacion: |
  {base} es {a} × {b}, así que es múltiplo de los dos a la vez; los otros
  dos rompen al menos una de las dos condiciones.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplos"
  nivel: "basico"
  tags: ["multiplos", "problema"]

variables:
  b: random(2, 12)
  n: random(3, 15)

respuesta: b * n
tipo: input
tolerancia_abs: 0

enunciado: "Cada caja tiene {b} botellas. Si hay {n} cajas completas, ¿cuántas botellas hay en total?"

explicacion: |
  El total de botellas es siempre un múltiplo de {b}: {b} por la cantidad
  de cajas.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplos"
  nivel: "intermedio"
  tags: ["multiplos", "problema"]

variables:
  b: random(2, 9)
  k: random(3, 15)
  total: b * k + uno_de([0, 0, 1])
  resto: total - floor(total / b) * b

respuesta: (resto == 0)
tipo: vf

enunciado: "Las entradas vienen en paquetes de {b}. ¿Se puede comprar exactamente {total} entradas sin que sobre ninguna en el último paquete?"

explicacion: |
  Sólo se puede si {total} es múltiplo de {b} — si no lo es, sobrarían
  algunas sueltas de un paquete incompleto.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplos"
  nivel: "basico"
  tags: ["multiplos", "orden"]

tipo: ordenar
enunciado: "Ordená estos múltiplos de 6 de menor a mayor."
opciones_explicitas:
  - "24"
  - "6"
  - "18"
  - "12"
respuesta_orden: ["6", "12", "18", "24"]

explicacion: |
  Son los primeros cuatro múltiplos de 6, en el orden en que aparecen al
  contar de 6 en 6.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplos"
  nivel: "intermedio"
  tags: ["multiplos", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El 0 es múltiplo de cualquier número, porque 0 = B × 0 para cualquier B."

explicacion: |
  Cumple la definición estricta, aunque en los ejercicios de la escuela
  casi nunca se lo cuenta como el "primer" múltiplo.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplos"
  nivel: "basico"
  tags: ["multiplos", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Los múltiplos de un número son, exactamente, los resultados de su tabla de multiplicar."

explicacion: |
  La tabla del 4 (4, 8, 12, 16...) es, ni más ni menos, la lista de los
  múltiplos de 4.
```

## Sección: divisibilidad/regla-del-10 (20 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "regla_del_10"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_10"]

variables:
  n: random(10, 999)
  resto: n - floor(n / 10) * 10

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Es {n} divisible por 10?"

explicacion: |
  Se mira sólo la última cifra: si es 0, el número es divisible por 10.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_10"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_10"]

variables:
  n: random(1000, 98765)
  resto: n - floor(n / 10) * 10

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Es {n} divisible por 10?"

explicacion: |
  Con números grandes la regla no cambia: sigue alcanzando con la última
  cifra.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_10"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_10"]

variables:
  base: random(5, 400) * 10
  otro1: base + 1
  otro2: base + 5

respuesta: base
tipo: mc
opciones_explicitas:
  - base
  - otro1
  - otro2

enunciado: "¿Cuál de estos tres números es divisible por 10?"

explicacion: |
  Sólo hay que mirar si la última cifra es 0.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_10"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_10"]

variables:
  base: random(5, 400) * 10 + 5
  otro1: random(5, 400) * 10
  otro2: random(5, 400) * 10

respuesta: base
tipo: mc
opciones_explicitas:
  - base
  - otro1
  - otro2

enunciado: "¿Cuál de estos tres números NO es divisible por 10?"

explicacion: |
  {base} termina en 5, no en 0: cumple la regla del 5 pero no la del 10.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_10"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_10"]

variables:
  prefijo: random(1, 99)

tipo: completar
enunciado: "El número {prefijo}_ (falta la última cifra) tiene que ser divisible por 10. Completá la única cifra válida."
respuestas_validas:
  - 0

explicacion: |
  Sólo el 0 sirve como última cifra.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_10"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_10", "comparar_reglas"]

respuesta: verdadero
tipo: vf

enunciado: "Si un número es divisible por 10, también es divisible por 2."

explicacion: |
  Como 10 = 2 × 5, todo múltiplo de 10 es también múltiplo de 2.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_10"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_10", "comparar_reglas"]

respuesta: verdadero
tipo: vf

enunciado: "Si un número es divisible por 10, también es divisible por 5."

explicacion: |
  Como 10 = 2 × 5, todo múltiplo de 10 es también múltiplo de 5.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_10"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_10", "comparar_reglas"]

respuesta: falso
tipo: vf

enunciado: "Si un número es divisible por 5, siempre es divisible por 10 también."

explicacion: |
  No es cierto: un número puede terminar en 5 (divisible por 5) sin
  terminar en 0 (no divisible por 10). Ejemplo: 25.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_10"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_10"]

variables:
  d: random(1, 99)
  n: d * 10

respuesta: 0
tipo: input
tolerancia_abs: 0

enunciado: "El número {n} es divisible por 10. ¿Cuál es su última cifra?"

explicacion: |
  La única cifra posible es el 0.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_10"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_10", "problema"]

variables:
  n: random(10, 500)
  resto: n - floor(n / 10) * 10

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Se puede pagar exactamente ${n} usando sólo billetes de $10, sin vuelto?"

explicacion: |
  Sólo si {n} es divisible por 10.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_10"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_10"]

variables:
  n: random(1, 90)
  dividendo: n * 10

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {dividendo} ÷ 10?"

explicacion: |
  Dividir por 10 es sacarle el último cero al número.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_10"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_10", "orden"]

tipo: ordenar
enunciado: "Ordená estos números de menor a mayor: son todos divisibles por 10."
opciones_explicitas:
  - "90"
  - "20"
  - "60"
  - "40"
respuesta_orden: ["20", "40", "60", "90"]

explicacion: |
  Los cuatro terminan en 0; sólo hace falta ordenarlos por tamaño.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_10"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_10"]

variables:
  a: random(10, 500) * 10
  b: random(10, 500) * 10 + 3
  c: random(10, 500) * 10

respuesta: b
tipo: mc
opciones_explicitas:
  - a
  - b
  - c

enunciado: "De estos tres números, ¿cuál es el único que NO es divisible por 10?"

explicacion: |
  Hay que revisar la última cifra de cada uno.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_10"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_10", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Todos los resultados de la tabla del 10 son números divisibles por 10."

explicacion: |
  La tabla del 10 (10, 20, 30...) es, exactamente, la lista de los números
  divisibles por 10.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_10"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_10"]

variables:
  n: random(1, 90) * 10

tipo: completar
enunciado: "Completá el próximo múltiplo de 10 después de {n}."
respuestas_validas:
  - n + 10

explicacion: |
  Los múltiplos de 10 van de 10 en 10.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_10"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_10"]

variables:
  n: random(1, 999)

respuesta: verdadero
tipo: vf

enunciado: "¿Es cierto que {n} × 10 siempre da un número divisible por 10?"

explicacion: |
  Multiplicar por 10 agrega un cero al final, así que el resultado siempre
  termina en 0.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_10"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_10"]

variables:
  a: random(1, 100) * 10
  b: random(1, 100) * 10

respuesta: verdadero
tipo: vf

enunciado: "¿Es {a} + {b} siempre divisible por 10?"

explicacion: |
  La suma de dos múltiplos de 10 sigue siendo múltiplo de 10.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_10"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_10"]

variables:
  n: random(10, 999)
  ultima_cifra: n - floor(n / 10) * 10
  resto: n - floor(n / 10) * 10

respuesta: (resto == 0)
tipo: vf

enunciado: "La última cifra de {n} es {ultima_cifra}. ¿Eso alcanza para asegurar que {n} es divisible por 10?"

explicacion: |
  Alcanza con esa única cifra: sólo si es 0, {n} es divisible por 10.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_10"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_10", "problema"]

variables:
  n: random(10, 500)
  resto: n - floor(n / 10) * 10

respuesta: (resto == 0)
tipo: vf

enunciado: "Los huevos se venden en cajas cerradas de 10. ¿Se pueden comprar exactamente {n} huevos usando sólo cajas completas?"

explicacion: |
  Sólo si {n} es múltiplo de 10.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_10"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_10", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La regla del 10 es, en el fondo, cumplir la regla del 2 y la regla del 5 al mismo tiempo."

explicacion: |
  Como 10 = 2 × 5, no hace falta una regla nueva: es la intersección de
  las dos anteriores.
```

## Sección: divisibilidad/regla-del-2 (20 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "regla_del_2"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_2"]

variables:
  n: random(10, 999)
  resto: n - floor(n / 2) * 2

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Es {n} divisible por 2?"

explicacion: |
  Se mira sólo la última cifra: si es par, el número es divisible por 2.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_2"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_2"]

variables:
  n: random(1000, 98765)
  resto: n - floor(n / 2) * 2

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Es {n} divisible por 2?"

explicacion: |
  Con números más grandes, la regla no cambia: sigue alcanzando con mirar
  la última cifra.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_2"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_2"]

variables:
  base: random(5, 400) * 2
  otro1: base + 1
  otro2: base + 3

respuesta: base
tipo: mc
opciones_explicitas:
  - base
  - otro1
  - otro2

enunciado: "¿Cuál de estos tres números es divisible por 2?"

explicacion: |
  Sólo hay que mirar la última cifra de cada opción.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_2"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_2"]

variables:
  base: random(5, 400) * 2 + 1
  otro1: base + 2
  otro2: base - 2

respuesta: base
tipo: mc
opciones_explicitas:
  - base
  - otro1
  - otro2

enunciado: "¿Cuál de estos tres números NO es divisible por 2 (es impar)?"

explicacion: |
  {base} termina en una cifra impar; los otros dos terminan en cifra par.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_2"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_2"]

variables:
  prefijo: random(1, 99)

tipo: completar
enunciado: "El número {prefijo}_ (falta la última cifra) tiene que ser divisible por 2. Completá una cifra válida."
respuestas_validas:
  - 0
  - 2
  - 4
  - 6
  - 8

explicacion: |
  Cualquier cifra par sirve como última cifra.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_2"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_2"]

variables:
  prefijo: random(1, 99)

tipo: completar
enunciado: "El número {prefijo}_ (falta la última cifra) tiene que NO ser divisible por 2. Completá una cifra válida."
respuestas_validas:
  - 1
  - 3
  - 5
  - 7
  - 9

explicacion: |
  Cualquier cifra impar hace que el número no sea divisible por 2.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_2"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_2", "vocabulario"]

enunciado: "¿Cómo se le dice a un número que es divisible por 2?"
tipo: mc
opciones_explicitas:
  - "Par"
  - "Impar"
  - "Primo"
respuesta: "Par"

explicacion: |
  Divisible por 2 y "número par" significan exactamente lo mismo.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_2"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_2", "vocabulario"]

enunciado: "¿Cómo se le dice a un número que NO es divisible por 2?"
tipo: mc
opciones_explicitas:
  - "Impar"
  - "Par"
  - "Primo"
respuesta: "Impar"

explicacion: |
  No divisible por 2 y "número impar" significan exactamente lo mismo.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_2"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_2"]

variables:
  a: random(1, 400) * 2
  b: random(1, 400) * 2

respuesta: verdadero
tipo: vf

enunciado: "¿Es {a} + {b} siempre un número par?"

explicacion: |
  La suma de dos números pares siempre da par: cada uno aporta un múltiplo
  de 2, y la suma de dos múltiplos de 2 sigue siendo múltiplo de 2.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_2"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_2"]

variables:
  a: random(1, 400) * 2
  b: random(1, 400) * 2 + 1

respuesta: falso
tipo: vf

enunciado: "¿Es {a} + {b} un número par?"

explicacion: |
  Par más impar siempre da impar.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_2"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_2", "problema"]

variables:
  n: random(10, 200)
  resto: n - floor(n / 2) * 2

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Se pueden repartir {n} caramelos entre 2 personas, en partes iguales y sin que sobre ninguno?"

explicacion: |
  Se puede repartir exacto entre 2 sólo si el total es divisible por 2.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_2"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_2"]

variables:
  d: random(1, 9)
  u: uno_de([0, 2, 4, 6, 8])
  n: d * 10 + u

respuesta: u
tipo: input
tolerancia_abs: 0

enunciado: "El número {n} es divisible por 2. ¿Cuál es su última cifra?"

explicacion: |
  Como {n} es divisible por 2, su última cifra tiene que ser par.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_2"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_2"]

variables:
  base: random(500, 4000) * 2
  otro1: base + 1
  otro2: base + 5

respuesta: base
tipo: mc
opciones_explicitas:
  - base
  - otro1
  - otro2

enunciado: "¿Cuál de estos tres números es divisible por 2?"

explicacion: |
  Con números grandes la regla no cambia: se mira sólo la última cifra.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_2"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_2"]

tipo: ordenar
enunciado: "Ordená estos números de menor a mayor: son todos pares."
opciones_explicitas:
  - "18"
  - "4"
  - "26"
  - "12"
respuesta_orden: ["4", "12", "18", "26"]

explicacion: |
  Los cuatro son pares (terminan en cifra par); acá sólo hace falta
  ordenarlos por tamaño.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_2"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_2", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Todos los resultados de la tabla del 2 son números pares."

explicacion: |
  La tabla del 2 (2, 4, 6, 8...) es, exactamente, la lista de los números
  divisibles por 2.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_2"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_2", "verificacion"]

variables:
  n: random(10, 999)
  ultima_cifra: n - floor(n / 10) * 10
  resto: n - floor(n / 2) * 2

respuesta: (resto == 0)
tipo: vf

enunciado: "La última cifra de {n} es {ultima_cifra}. ¿Eso alcanza para asegurar que {n} es divisible por 2?"

explicacion: |
  Alcanza con esa única cifra: si es par, {n} es divisible por 2; si es
  impar, no lo es.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_2"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_2"]

variables:
  n: random(1, 400) * 2

respuesta: verdadero
tipo: vf

enunciado: "¿Es cierto que {n} es par?"

explicacion: |
  {n} se construyó como 2 por otro número, así que termina en cifra par.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_2"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_2", "problema"]

variables:
  n: random(10, 100)
  resto: n - floor(n / 2) * 2

respuesta: (resto == 0)
tipo: vf

enunciado: "Un colectivo tiene asientos dobles (de a 2). ¿Alcanzan exactamente para {n} pasajeros sin que sobre ningún asiento vacío ni ningún pasajero de pie?"

explicacion: |
  Alcanzan exacto sólo si {n} es divisible por 2.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_2"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_2"]

variables:
  a: random(10, 500) * 2
  b: random(10, 500) * 2 + 1
  c: random(10, 500) * 2

respuesta: b
tipo: mc
opciones_explicitas:
  - a
  - b
  - c

enunciado: "De estos tres números, ¿cuál es el único que NO es divisible por 2?"

explicacion: |
  Hay que revisar la última cifra de cada uno; sólo una es impar.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_2"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_2", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Para saber si un número es divisible por 2, alcanza con mirar su última cifra; no hace falta mirar el resto del número."

explicacion: |
  Es la ventaja de esta regla: es un atajo que evita hacer la división
  completa.
```
