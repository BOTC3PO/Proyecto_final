# Matemática — Tablas de frecuencia, cuartiles/percentiles y varianza (cuestionario, 29 preguntas VBLang)

> Tema: `D4B`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es la frecuencia absoluta

```
metadata:
  materia: "matematicas"
  tema: "tablas_de_frecuencia_cuartiles_percentiles_y_varianza"
  nivel: "basico"
  tags: ["frecuencia", "vocabulario"]

enunciado: "¿Qué es la frecuencia absoluta de un valor?"
tipo: mc
opciones_explicitas:
  - "La cantidad de veces que ese valor aparece en el conjunto de datos"
  - "El porcentaje que representa ese valor sobre el total"
  - "La suma de las frecuencias de todos los valores anteriores"
respuesta: "La cantidad de veces que ese valor aparece en el conjunto de datos"

explicacion: |
  Es un conteo directo, en cantidad concreta.
```

### 2 — Qué es la frecuencia relativa

```
metadata:
  materia: "matematicas"
  tema: "tablas_de_frecuencia_cuartiles_percentiles_y_varianza"
  nivel: "basico"
  tags: ["frecuencia", "vocabulario"]

enunciado: "¿Qué es la frecuencia relativa de un valor?"
tipo: mc
opciones_explicitas:
  - "La proporción (o porcentaje) que esa frecuencia absoluta representa sobre el total de datos"
  - "La cantidad de veces que aparece ese valor, en número entero"
  - "El valor más repetido de todo el conjunto"
respuesta: "La proporción (o porcentaje) que esa frecuencia absoluta representa sobre el total de datos"

explicacion: |
  Frecuencia relativa = frecuencia absoluta / total.
```

### 3 — Qué es la frecuencia acumulada

```
metadata:
  materia: "matematicas"
  tema: "tablas_de_frecuencia_cuartiles_percentiles_y_varianza"
  nivel: "intermedio"
  tags: ["frecuencia", "vocabulario"]

enunciado: "¿Qué responde la frecuencia acumulada de un valor?"
tipo: mc
opciones_explicitas:
  - "Cuántos casos hay hasta ese valor, inclusive, sumando las frecuencias de ese valor y de todos los anteriores"
  - "Cuántas veces aparece únicamente ese valor, sin sumar nada más"
  - "El porcentaje de datos que quedan por ENCIMA de ese valor"
respuesta: "Cuántos casos hay hasta ese valor, inclusive, sumando las frecuencias de ese valor y de todos los anteriores"

explicacion: |
  Se va acumulando fila por fila, según el orden de los valores.
```

### 4 — Problema: leer la frecuencia absoluta de una tabla

```
metadata:
  materia: "matematicas"
  tema: "tablas_de_frecuencia_cuartiles_percentiles_y_varianza"
  nivel: "intermedio"
  tags: ["frecuencia", "problema"]

variables:
  tabla: [{nota: 5, frecuencia: 3}, {nota: 6, frecuencia: 5}, {nota: 7, frecuencia: 8}, {nota: 8, frecuencia: 4}]
  idx: uno_de([0, 1, 2, 3])

respuesta: tabla[idx].frecuencia
tipo: input

enunciado: "Tabla de frecuencias de notas de un curso: nota 5 → 3 alumnos; nota 6 → 5 alumnos; nota 7 → 8 alumnos; nota 8 → 4 alumnos. ¿Cuántos alumnos sacaron la nota {tabla[idx].nota}?"

explicacion: |
  Se lee directamente la frecuencia absoluta de esa fila.
```

### 5 — Problema: calcular la frecuencia relativa

```
metadata:
  materia: "matematicas"
  tema: "tablas_de_frecuencia_cuartiles_percentiles_y_varianza"
  nivel: "avanzado"
  tags: ["frecuencia", "problema"]

variables:
  tabla: [{nota: 5, frecuencia: 3}, {nota: 6, frecuencia: 5}, {nota: 7, frecuencia: 8}, {nota: 8, frecuencia: 4}]
  idx: uno_de([0, 1, 2, 3])

respuesta: redondear(tabla[idx].frecuencia / 20 * 100, 1)
tipo: input
tolerancia_abs: 0.1
unidad: "%"

enunciado: "Con la misma tabla de notas (3+5+8+4 = 20 alumnos en total), ¿qué porcentaje del curso sacó la nota {tabla[idx].nota}?"

pasos:
  - "Frecuencia relativa = {tabla[idx].frecuencia}/20 × 100 = {redondear(tabla[idx].frecuencia / 20 * 100, 1)}%"

explicacion: |
  Se divide la frecuencia absoluta de esa fila por el total de datos.
```

### 6 — Problema: frecuencia acumulada hasta una fila

```
metadata:
  materia: "matematicas"
  tema: "tablas_de_frecuencia_cuartiles_percentiles_y_varianza"
  nivel: "avanzado"
  tags: ["frecuencia", "problema"]

respuesta: 16
tipo: input

enunciado: "Con la tabla de notas — 5→3 alumnos, 6→5 alumnos, 7→8 alumnos, 8→4 alumnos —, ¿cuántos alumnos sacaron nota 7 O MENOS (frecuencia acumulada hasta la nota 7)?"

pasos:
  - "Acumulada hasta 7 = 3 + 5 + 8 = 16"

explicacion: |
  Se suman las frecuencias absolutas de esa fila y de todas las
  anteriores (según el orden de los valores).
```

### 7 — La suma de frecuencias relativas siempre da 100%

```
metadata:
  materia: "matematicas"
  tema: "tablas_de_frecuencia_cuartiles_percentiles_y_varianza"
  nivel: "intermedio"
  tags: ["frecuencia"]

respuesta: verdadero
tipo: vf

enunciado: "La suma de las frecuencias relativas de todos los valores de una tabla siempre da exactamente 100% (o 1, si se expresa como proporción)."

explicacion: |
  Es la misma idea de que las probabilidades de todo el espacio
  muestral suman 1.
```

### 8 — La frecuencia acumulada del último valor es el total

```
metadata:
  materia: "matematicas"
  tema: "tablas_de_frecuencia_cuartiles_percentiles_y_varianza"
  nivel: "intermedio"
  tags: ["frecuencia"]

respuesta: verdadero
tipo: vf

enunciado: "La frecuencia acumulada del último valor de la tabla (el más grande) siempre coincide con el total de datos."

explicacion: |
  Al llegar al último valor, ya se sumaron las frecuencias de todos
  los valores posibles.
```

### 9 — Ordenar: pasos para construir una tabla de frecuencia

```
metadata:
  materia: "matematicas"
  tema: "tablas_de_frecuencia_cuartiles_percentiles_y_varianza"
  nivel: "avanzado"
  tags: ["frecuencia", "ordenar"]

enunciado: "Ordená los pasos para construir una tabla de frecuencia a partir de una lista de datos sin organizar."
tipo: ordenar
opciones_explicitas:
  - "Calcular la frecuencia relativa y la acumulada de cada valor"
  - "Listar los valores distintos que aparecen en los datos"
  - "Contar cuántas veces aparece cada valor (frecuencia absoluta)"
respuesta_orden: ["Listar los valores distintos que aparecen en los datos", "Contar cuántas veces aparece cada valor (frecuencia absoluta)", "Calcular la frecuencia relativa y la acumulada de cada valor"]
explicacion: |
  Sin la frecuencia absoluta primero, no hay nada de donde calcular la
  relativa ni la acumulada.
```

### 10 — Qué es Q1

```
metadata:
  materia: "matematicas"
  tema: "tablas_de_frecuencia_cuartiles_percentiles_y_varianza"
  nivel: "intermedio"
  tags: ["cuartiles", "vocabulario"]

enunciado: "¿Qué representa el primer cuartil, Q1?"
tipo: mc
opciones_explicitas:
  - "El valor que deja el 25% de los datos por debajo"
  - "El valor que deja el 75% de los datos por debajo"
  - "El valor más chico de todo el conjunto"
respuesta: "El valor que deja el 25% de los datos por debajo"

explicacion: |
  Divide, junto con Q2 y Q3, los datos ordenados en 4 partes iguales.
```

### 11 — Qué es Q3

```
metadata:
  materia: "matematicas"
  tema: "tablas_de_frecuencia_cuartiles_percentiles_y_varianza"
  nivel: "intermedio"
  tags: ["cuartiles", "vocabulario"]

enunciado: "¿Qué representa el tercer cuartil, Q3?"
tipo: mc
opciones_explicitas:
  - "El valor que deja el 75% de los datos por debajo"
  - "El valor que deja el 25% de los datos por debajo"
  - "El valor más grande de todo el conjunto"
respuesta: "El valor que deja el 75% de los datos por debajo"

explicacion: |
  Es el cuartil 'alto' de los tres.
```

### 12 — Q2 es la mediana

```
metadata:
  materia: "matematicas"
  tema: "tablas_de_frecuencia_cuartiles_percentiles_y_varianza"
  nivel: "basico"
  tags: ["cuartiles"]

respuesta: verdadero
tipo: vf

enunciado: "El segundo cuartil, Q2, es exactamente la mediana del conjunto de datos (el 50%)."

explicacion: |
  Son el mismo concepto, con dos nombres distintos.
```

### 13 — Completar: Q1 como percentil

```
metadata:
  materia: "matematicas"
  tema: "tablas_de_frecuencia_cuartiles_percentiles_y_varianza"
  nivel: "intermedio"
  tags: ["cuartiles", "completar"]

tipo: completar
enunciado: "Completá: Q1 es equivalente al percentil ___."
respuestas_validas:
  - "25"
  - "P25"

explicacion: |
  Ambos dejan el 25% de los datos por debajo.
```

### 14 — Completar: Q3 como percentil

```
metadata:
  materia: "matematicas"
  tema: "tablas_de_frecuencia_cuartiles_percentiles_y_varianza"
  nivel: "intermedio"
  tags: ["cuartiles", "completar"]

tipo: completar
enunciado: "Completá: Q3 es equivalente al percentil ___."
respuestas_validas:
  - "75"
  - "P75"

explicacion: |
  Ambos dejan el 75% de los datos por debajo.
```

### 15 — Problema: calcular Q2 (mediana) de un conjunto ordenado

```
metadata:
  materia: "matematicas"
  tema: "tablas_de_frecuencia_cuartiles_percentiles_y_varianza"
  nivel: "avanzado"
  tags: ["cuartiles", "problema"]

variables:
  datos: [10, 12, 15, 18, 20, 22, 25, 30]

respuesta: mediana(datos)
tipo: input

enunciado: "Con los 8 valores ya ordenados 10, 12, 15, 18, 20, 22, 25, 30, ¿cuál es Q2 (la mediana)?"

pasos:
  - "Con 8 valores (par), Q2 = promedio de los dos centrales (18 y 20) = {mediana(datos)}"

explicacion: |
  Es el mismo procedimiento de mediana ya conocido.
```

### 16 — Problema: calcular Q1

```
metadata:
  materia: "matematicas"
  tema: "tablas_de_frecuencia_cuartiles_percentiles_y_varianza"
  nivel: "avanzado"
  tags: ["cuartiles", "problema"]

respuesta: 13.5
tipo: input

enunciado: "Con los mismos 8 valores 10, 12, 15, 18, 20, 22, 25, 30, ¿cuál es Q1?"

pasos:
  - "Mitad inferior (los primeros 4): 10, 12, 15, 18"
  - "Q1 = mediana de esa mitad = (12+15)/2 = 13,5"

explicacion: |
  Q1 es la mediana de la mitad inferior de los datos.
```

### 17 — Problema: calcular Q3

```
metadata:
  materia: "matematicas"
  tema: "tablas_de_frecuencia_cuartiles_percentiles_y_varianza"
  nivel: "avanzado"
  tags: ["cuartiles", "problema"]

respuesta: 23.5
tipo: input

enunciado: "Con los mismos 8 valores 10, 12, 15, 18, 20, 22, 25, 30, ¿cuál es Q3?"

pasos:
  - "Mitad superior (los últimos 4): 20, 22, 25, 30"
  - "Q3 = mediana de esa mitad = (22+25)/2 = 23,5"

explicacion: |
  Q3 es la mediana de la mitad superior de los datos.
```

### 18 — Problema: calcular el rango intercuartílico

```
metadata:
  materia: "matematicas"
  tema: "tablas_de_frecuencia_cuartiles_percentiles_y_varianza"
  nivel: "avanzado"
  tags: ["cuartiles", "problema"]

respuesta: 10
tipo: input

enunciado: "Con Q1 = 13,5 y Q3 = 23,5 (del mismo conjunto de 8 valores), ¿cuál es el rango intercuartílico (IQR)?"

pasos:
  - "IQR = Q3 − Q1 = 23,5 − 13,5 = 10"

explicacion: |
  El IQR mide cuánto ocupa el 50% central de los datos.
```

### 19 — El IQR es menos sensible a valores atípicos que el rango completo

```
metadata:
  materia: "matematicas"
  tema: "tablas_de_frecuencia_cuartiles_percentiles_y_varianza"
  nivel: "avanzado"
  tags: ["cuartiles"]

respuesta: verdadero
tipo: vf

enunciado: "El rango intercuartílico (IQR) es menos sensible a valores atípicos que el rango completo (máximo menos mínimo), porque ignora el 25% más bajo y el 25% más alto de los datos."

explicacion: |
  Un valor atípico extremo cambiaría mucho el rango completo, pero
  puede no afectar en nada a Q1 ni a Q3.
```

### 20 — Aplicación real: percentil en un examen estandarizado

```
metadata:
  materia: "matematicas"
  tema: "tablas_de_frecuencia_cuartiles_percentiles_y_varianza"
  nivel: "basico"
  tags: ["cuartiles", "aplicacion"]

enunciado: "Si un examen estandarizado dice que un puntaje está en el percentil 90 (P90), ¿qué significa eso?"
tipo: mc
opciones_explicitas:
  - "Que ese puntaje es mayor o igual que el 90% de todos los puntajes de referencia"
  - "Que ese puntaje representa el 90% del puntaje máximo posible"
  - "Que el examen tiene 90 preguntas en total"
respuesta: "Que ese puntaje es mayor o igual que el 90% de todos los puntajes de referencia"

explicacion: |
  Un percentil describe la posición RELATIVA respecto de otros
  puntajes, no una proporción del puntaje máximo.
```

### 21 — Qué mide la varianza

```
metadata:
  materia: "matematicas"
  tema: "tablas_de_frecuencia_cuartiles_percentiles_y_varianza"
  nivel: "intermedio"
  tags: ["varianza", "vocabulario"]

enunciado: "¿Qué mide la varianza de un conjunto de datos?"
tipo: mc
opciones_explicitas:
  - "En promedio, qué tan lejos está cada dato de la media (usando distancias al cuadrado)"
  - "El valor más frecuente del conjunto"
  - "La suma total de todos los valores"
respuesta: "En promedio, qué tan lejos está cada dato de la media (usando distancias al cuadrado)"

explicacion: |
  Es una medida de dispersión, no de tendencia central.
```

### 22 — Completar: fórmula de la varianza

```
metadata:
  materia: "matematicas"
  tema: "tablas_de_frecuencia_cuartiles_percentiles_y_varianza"
  nivel: "avanzado"
  tags: ["varianza", "completar"]

tipo: completar
enunciado: "Completá: varianza = suma de (cada valor − media) al cuadrado, dividida por la ___."
respuestas_validas:
  - "cantidad de valores"
  - "cantidad"

explicacion: |
  Es un promedio de distancias al cuadrado respecto de la media.
```

### 23 — Por qué se eleva al cuadrado

```
metadata:
  materia: "matematicas"
  tema: "tablas_de_frecuencia_cuartiles_percentiles_y_varianza"
  nivel: "avanzado"
  tags: ["varianza"]

respuesta: verdadero
tipo: vf

enunciado: "Se elevan al cuadrado las distancias a la media para que las distancias positivas (valores por encima) y negativas (por debajo) no se cancelen entre sí al promediarlas."

explicacion: |
  Sin el cuadrado, el promedio de las distancias siempre daría 0, sin
  importar la dispersión real.
```

### 24 — Problema: calcular la varianza de 3 valores

```
metadata:
  materia: "matematicas"
  tema: "tablas_de_frecuencia_cuartiles_percentiles_y_varianza"
  nivel: "avanzado"
  tags: ["varianza", "problema"]

variables:
  a: random(1, 10)
  b: random(1, 10)
  c: random(1, 10)
  datos: [a, b, c]
  media: promedio(datos)

respuesta: redondear(((a - media) ^ 2 + (b - media) ^ 2 + (c - media) ^ 2) / 3, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "Calculá la varianza de estos 3 valores: {a}, {b}, {c}."

pasos:
  - "Media = ({a}+{b}+{c})/3 = {redondear(media, 2)}"
  - "Distancias al cuadrado: ({a}−{redondear(media, 2)})², ({b}−{redondear(media, 2)})², ({c}−{redondear(media, 2)})²"
  - "Varianza = suma de esos cuadrados / 3 = {redondear(((a - media) ^ 2 + (b - media) ^ 2 + (c - media) ^ 2) / 3, 3)}"

explicacion: |
  Se calcula la media primero, y después el promedio de las
  distancias al cuadrado respecto de ella.
```

### 25 — Problema: calcular la varianza de 4 valores

```
metadata:
  materia: "matematicas"
  tema: "tablas_de_frecuencia_cuartiles_percentiles_y_varianza"
  nivel: "avanzado"
  tags: ["varianza", "problema"]

variables:
  a: random(5, 15)
  b: random(5, 15)
  c: random(5, 15)
  d: random(5, 15)
  datos: [a, b, c, d]
  media: promedio(datos)

respuesta: redondear(((a - media) ^ 2 + (b - media) ^ 2 + (c - media) ^ 2 + (d - media) ^ 2) / 4, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "Calculá la varianza de estos 4 valores: {a}, {b}, {c}, {d}."

pasos:
  - "Media = ({a}+{b}+{c}+{d})/4 = {redondear(media, 2)}"
  - "Varianza = suma de (cada valor − media)² / 4 = {redondear(((a - media) ^ 2 + (b - media) ^ 2 + (c - media) ^ 2 + (d - media) ^ 2) / 4, 3)}"

explicacion: |
  Mismo procedimiento que con 3 valores, ahora con 4.
```

### 26 — A mayor varianza, más dispersos están los datos

```
metadata:
  materia: "matematicas"
  tema: "tablas_de_frecuencia_cuartiles_percentiles_y_varianza"
  nivel: "intermedio"
  tags: ["varianza"]

respuesta: verdadero
tipo: vf

enunciado: "Cuanto mayor es la varianza, más dispersos (alejados entre sí) están los datos; cuanto menor, más parecidos son entre sí."

explicacion: |
  Es la lectura práctica de la varianza como medida de dispersión.
```

### 27 — Si todos los valores son iguales, la varianza es 0

```
metadata:
  materia: "matematicas"
  tema: "tablas_de_frecuencia_cuartiles_percentiles_y_varianza"
  nivel: "avanzado"
  tags: ["varianza", "problema"]

variables:
  valor: random(1, 100)
  datos: [valor, valor, valor, valor]
  media: promedio(datos)

respuesta: ((valor - media) ^ 2 + (valor - media) ^ 2 + (valor - media) ^ 2 + (valor - media) ^ 2) / 4
tipo: input

enunciado: "Calculá la varianza de estos 4 valores, todos iguales: {valor}, {valor}, {valor}, {valor}."

pasos:
  - "Media = {valor} (todos son iguales)"
  - "Todas las distancias a la media son 0, así que la varianza es 0"

explicacion: |
  Sin ninguna diferencia entre los valores, no hay ninguna dispersión
  que medir.
```

### 28 — Ordenar: pasos para calcular la varianza

```
metadata:
  materia: "matematicas"
  tema: "tablas_de_frecuencia_cuartiles_percentiles_y_varianza"
  nivel: "avanzado"
  tags: ["varianza", "ordenar"]

enunciado: "Ordená los pasos para calcular la varianza de un conjunto de datos."
tipo: ordenar
opciones_explicitas:
  - "Promediar todos esos valores al cuadrado"
  - "Calcular la media del conjunto de datos"
  - "Calcular la distancia de cada valor a la media, y elevarla al cuadrado"
respuesta_orden: ["Calcular la media del conjunto de datos", "Calcular la distancia de cada valor a la media, y elevarla al cuadrado", "Promediar todos esos valores al cuadrado"]
explicacion: |
  Sin la media primero, no hay 'distancia a la media' que calcular.
```

### 29 — Cierre: para qué sirve este bloque

```
metadata:
  materia: "matematicas"
  tema: "tablas_de_frecuencia_cuartiles_percentiles_y_varianza"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirven las tablas de frecuencia, los cuartiles/percentiles y la varianza, juntos?"
tipo: mc
opciones_explicitas:
  - "Para organizar datos repetidos, ubicar posiciones relativas dentro de un conjunto, y medir cuán dispersos están entre sí — un resumen mucho más completo que un solo promedio"
  - "Sólo sirven para calcular notas de exámenes"
  - "Las tres ideas son exactamente lo mismo, con nombres distintos"
respuesta: "Para organizar datos repetidos, ubicar posiciones relativas dentro de un conjunto, y medir cuán dispersos están entre sí — un resumen mucho más completo que un solo promedio"

explicacion: |
  Es el puente directo hacia `Dispersión: rango y desvío` (el próximo
  módulo del MAPA), que retoma la varianza para llegar al desvío
  estándar.
```
