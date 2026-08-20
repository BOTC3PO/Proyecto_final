# Matemática — Distribución normal (cuestionario, 20 preguntas VBLang)

> Tema: `D7`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es la distribución normal

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

### 2 — Qué dos números definen una distribución normal

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

### 3 — Simetría de la normal

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

### 4 — Completar: regla empírica, 1 desvío

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

### 5 — Completar: regla empírica, 2 desvíos

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

### 6 — Completar: regla empírica, 3 desvíos

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

### 7 — Problema: rango del 68% de los datos

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

### 8 — Problema: rango del 95% de los datos

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

### 9 — Qué es el z-score

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

### 10 — Completar: fórmula del z-score

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

### 11 — Problema: calcular el z-score

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

### 12 — Problema: despejar el valor a partir del z-score

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

### 13 — Z-score negativo

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

### 14 — Para qué sirve el z-score

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

### 15 — A mayor desvío, más ancha la campana

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

### 16 — Por qué la normal aparece tan seguido en la naturaleza

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

### 17 — Problema: ¿está dentro de 1 desvío?

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

### 18 — Normal vs. variable aleatoria continua

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

### 19 — Comparar dos normales con la misma media

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

### 20 — Cierre: para qué sirve la distribución normal

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
