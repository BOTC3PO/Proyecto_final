# Matemática — Dispersión: rango y desvío (cuestionario, 20 preguntas VBLang)

> Tema: `D6`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué mide el rango

```
metadata:
  materia: "matematicas"
  tema: "dispersion_rango_y_desvio"
  nivel: "basico"
  tags: ["rango", "vocabulario"]

enunciado: "¿Qué mide el rango de un conjunto de datos?"
tipo: mc
opciones_explicitas:
  - "La distancia entre el valor máximo y el valor mínimo"
  - "El promedio de todos los valores"
  - "El valor que más se repite"
respuesta: "La distancia entre el valor máximo y el valor mínimo"

explicacion: |
  Rango = máximo − mínimo.
```

### 2 — Completar: fórmula del rango

```
metadata:
  materia: "matematicas"
  tema: "dispersion_rango_y_desvio"
  nivel: "basico"
  tags: ["rango", "completar"]

tipo: completar
enunciado: "Completá: rango = máximo − ___."
respuestas_validas:
  - "mínimo"

explicacion: |
  Es la distancia entre los dos valores extremos del conjunto.
```

### 3 — Problema: calcular el rango

```
metadata:
  materia: "matematicas"
  tema: "dispersion_rango_y_desvio"
  nivel: "intermedio"
  tags: ["rango", "problema"]

variables:
  a: random(10, 20)
  b: random(21, 35)
  c: random(1, 9)
  d: random(36, 50)

respuesta: max(a, b, c, d) - min(a, b, c, d)
tipo: input

enunciado: "Cuatro edades registradas: {a}, {b}, {c}, {d}. ¿Cuál es el rango de este conjunto?"

pasos:
  - "Máximo = {max(a, b, c, d)}, mínimo = {min(a, b, c, d)}"
  - "Rango = {max(a, b, c, d)} − {min(a, b, c, d)} = {max(a, b, c, d) - min(a, b, c, d)}"

explicacion: |
  Sólo hacen falta el mayor y el menor valor — el resto de los datos no
  interviene en el cálculo del rango.
```

### 4 — El rango ignora todo lo que pasa entre los extremos

```
metadata:
  materia: "matematicas"
  tema: "dispersion_rango_y_desvio"
  nivel: "avanzado"
  tags: ["rango"]

respuesta: verdadero
tipo: vf

enunciado: "El rango sólo usa los dos valores extremos del conjunto (máximo y mínimo) e ignora por completo cómo se distribuyen los datos entre medio."

explicacion: |
  Por eso dos conjuntos con formas de dispersión muy distintas pueden
  tener exactamente el mismo rango.
```

### 5 — Por qué el rango es sensible a valores atípicos

```
metadata:
  materia: "matematicas"
  tema: "dispersion_rango_y_desvio"
  nivel: "intermedio"
  tags: ["rango", "atipicos"]

enunciado: "¿Por qué un solo valor atípico (muy alto o muy bajo) puede distorsionar mucho el rango?"
tipo: mc
opciones_explicitas:
  - "Porque el rango depende sólo del máximo y el mínimo — un único dato extremo cambia uno de esos dos valores, sin que el resto del conjunto haya cambiado"
  - "Porque el rango es un promedio de todos los datos, y un valor extremo pesa más que los demás"
  - "El rango no se ve afectado por valores atípicos"
respuesta: "Porque el rango depende sólo del máximo y el mínimo — un único dato extremo cambia uno de esos dos valores, sin que el resto del conjunto haya cambiado"

explicacion: |
  Es la misma debilidad que ya tenía el promedio frente a la mediana en
  `../cual-miente-y-cuando/`, aplicada acá a una medida de dispersión.
```

### 6 — Problema: rango con un valor atípico

```
metadata:
  materia: "matematicas"
  tema: "dispersion_rango_y_desvio"
  nivel: "avanzado"
  tags: ["rango", "atipicos", "problema"]

variables:
  a: random(8, 12)
  b: random(8, 12)
  c: random(8, 12)
  atipico: random(80, 100)

respuesta: max(a, b, c, atipico) - min(a, b, c, atipico)
tipo: input

enunciado: "Cuatro valores: {a}, {b}, {c}, {atipico} (el último es un valor atípico, muy distinto del resto). ¿Cuál es el rango del conjunto?"

pasos:
  - "Máximo = {atipico}, mínimo = {min(a, b, c)}"
  - "Rango = {atipico} − {min(a, b, c)} = {max(a, b, c, atipico) - min(a, b, c, atipico)}"

explicacion: |
  El valor atípico por sí solo dispara el rango, aunque los otros tres
  valores estén todos muy cerca entre sí.
```

### 7 — Qué es el desvío estándar

```
metadata:
  materia: "matematicas"
  tema: "dispersion_rango_y_desvio"
  nivel: "basico"
  tags: ["desvio", "vocabulario"]

enunciado: "¿Qué es el desvío estándar de un conjunto de datos?"
tipo: mc
opciones_explicitas:
  - "La raíz cuadrada de la varianza"
  - "El cuadrado de la varianza"
  - "La distancia entre el máximo y el mínimo"
respuesta: "La raíz cuadrada de la varianza"

explicacion: |
  desvío estándar = √varianza.
```

### 8 — Completar: fórmula del desvío estándar

```
metadata:
  materia: "matematicas"
  tema: "dispersion_rango_y_desvio"
  nivel: "basico"
  tags: ["desvio", "completar"]

tipo: completar
enunciado: "Completá: el desvío estándar es la raíz cuadrada de la ___."
respuestas_validas:
  - "varianza"

explicacion: |
  Ya definida en `../tablas-de-frecuencia-cuartiles-percentiles-y-varianza/`.
```

### 9 — Problema: desvío estándar a partir de la varianza (cuadrado exacto)

```
metadata:
  materia: "matematicas"
  tema: "dispersion_rango_y_desvio"
  nivel: "intermedio"
  tags: ["desvio", "problema"]

variables:
  varianza: uno_de([4, 9, 16, 25, 36])

respuesta: sqrt(varianza)
tipo: input

enunciado: "La varianza de un conjunto de datos es {varianza}. ¿Cuál es su desvío estándar?"

pasos:
  - "desvío = √{varianza} = {sqrt(varianza)}"

explicacion: |
  Sacar la raíz cuadrada devuelve el resultado a las unidades
  originales de los datos.
```

### 10 — Problema: desvío estándar redondeado

```
metadata:
  materia: "matematicas"
  tema: "dispersion_rango_y_desvio"
  nivel: "intermedio"
  tags: ["desvio", "problema"]

variables:
  varianza: uno_de([2, 3, 5, 8, 10])

respuesta: redondear(sqrt(varianza), 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "La varianza de un conjunto de datos es {varianza}. ¿Cuál es su desvío estándar, redondeado a 2 decimales?"

pasos:
  - "desvío = √{varianza} ≈ {redondear(sqrt(varianza), 2)}"

explicacion: |
  No todas las varianzas dan una raíz exacta — acá hace falta redondear.
```

### 11 — Desvío estándar vs. varianza: las unidades

```
metadata:
  materia: "matematicas"
  tema: "dispersion_rango_y_desvio"
  nivel: "avanzado"
  tags: ["desvio", "varianza"]

respuesta: verdadero
tipo: vf

enunciado: "El desvío estándar queda en las mismas unidades que los datos originales, mientras que la varianza queda en esas unidades elevadas al cuadrado."

explicacion: |
  Por eso el desvío estándar es el que se reporta e interpreta
  directamente, y la varianza es más bien un paso intermedio del
  cálculo.
```

### 12 — Por qué se prefiere el desvío estándar sobre la varianza

```
metadata:
  materia: "matematicas"
  tema: "dispersion_rango_y_desvio"
  nivel: "intermedio"
  tags: ["desvio", "varianza"]

enunciado: "Si la varianza ya mide dispersión, ¿para qué calcular además el desvío estándar?"
tipo: mc
opciones_explicitas:
  - "Porque el desvío está en las mismas unidades que los datos originales, y por eso es más fácil de interpretar que la varianza (que queda en unidades al cuadrado)"
  - "Porque la varianza no mide dispersión, sólo el desvío la mide"
  - "No hay ninguna diferencia práctica entre los dos"
respuesta: "Porque el desvío está en las mismas unidades que los datos originales, y por eso es más fácil de interpretar que la varianza (que queda en unidades al cuadrado)"

explicacion: |
  "Los datos se apartan en promedio 1,63 unidades de la media" tiene
  sentido directo; "2,67 unidades al cuadrado" no se interpreta igual
  de fácil.
```

### 13 — Problema: calcular el desvío estándar desde cero

```
metadata:
  materia: "matematicas"
  tema: "dispersion_rango_y_desvio"
  nivel: "avanzado"
  tags: ["desvio", "problema"]

variables:
  a: uno_de([2, 3, 4])
  b: uno_de([6, 7, 8])
  c: uno_de([10, 11, 12])
  media: (a + b + c) / 3
  varianza: ((a - media) ^ 2 + (b - media) ^ 2 + (c - media) ^ 2) / 3

respuesta: redondear(sqrt(varianza), 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Tres valores: {a}, {b}, {c}. Calculá el desvío estándar completo (media, varianza y su raíz)."

pasos:
  - "Media = ({a}+{b}+{c})/3 = {redondear(media, 2)}"
  - "Varianza = (({a}−{redondear(media,2)})² + ({b}−{redondear(media,2)})² + ({c}−{redondear(media,2)})²)/3 = {redondear(varianza, 2)}"
  - "Desvío estándar = √{redondear(varianza, 2)} ≈ {redondear(sqrt(varianza), 2)}"

explicacion: |
  El mismo procedimiento completo de `../tablas-de-frecuencia-.../`,
  terminado con la raíz cuadrada.
```

### 14 — Mismo rango, distinto desvío

```
metadata:
  materia: "matematicas"
  tema: "dispersion_rango_y_desvio"
  nivel: "avanzado"
  tags: ["rango", "desvio"]

respuesta: verdadero
tipo: vf

enunciado: "Dos conjuntos de datos pueden tener exactamente el mismo rango y, sin embargo, tener desvíos estándar muy distintos (por ejemplo, si en uno los datos se agrupan cerca del centro y en el otro se reparten parejo entre los extremos)."

explicacion: |
  El rango sólo mira los dos extremos; el desvío estándar sí toma en
  cuenta la posición de cada dato — por eso distingue casos que el
  rango no puede distinguir.
```

### 15 — Qué es el coeficiente de variación

```
metadata:
  materia: "matematicas"
  tema: "dispersion_rango_y_desvio"
  nivel: "intermedio"
  tags: ["coeficiente_variacion", "vocabulario"]

enunciado: "¿Qué es el coeficiente de variación (CV)?"
tipo: mc
opciones_explicitas:
  - "El desvío estándar dividido por la media — mide dispersión relativa, sin unidades, útil para comparar conjuntos de escalas distintas"
  - "El desvío estándar multiplicado por la media"
  - "Otro nombre para el rango"
respuesta: "El desvío estándar dividido por la media — mide dispersión relativa, sin unidades, útil para comparar conjuntos de escalas distintas"

explicacion: |
  CV = desvío estándar / media.
```

### 16 — Problema: calcular el coeficiente de variación

```
metadata:
  materia: "matematicas"
  tema: "dispersion_rango_y_desvio"
  nivel: "avanzado"
  tags: ["coeficiente_variacion", "problema"]

variables:
  media: uno_de([50, 80, 100])
  desvio: uno_de([5, 10, 15])

respuesta: redondear(desvio / media * 100, 1)
tipo: input
tolerancia_abs: 0.1
unidad: "%"

enunciado: "Un conjunto de datos tiene media {media} y desvío estándar {desvio}. ¿Cuál es su coeficiente de variación, expresado como porcentaje?"

pasos:
  - "CV = {desvio}/{media} × 100 = {redondear(desvio / media * 100, 1)}%"

explicacion: |
  Al dividir por la media, el resultado queda sin unidades — se puede
  comparar directo contra el CV de otro conjunto, aunque mida algo
  totalmente distinto.
```

### 17 — Aplicación real: comparar dispersión entre escalas distintas

```
metadata:
  materia: "matematicas"
  tema: "dispersion_rango_y_desvio"
  nivel: "basico"
  tags: ["coeficiente_variacion", "aplicacion"]

enunciado: "Una empresa A tiene sueldos con media $500.000 y desvío $50.000; una empresa B tiene sueldos con media $2.000.000 y desvío $150.000. ¿Cómo se compara realmente la dispersión relativa de sueldos entre las dos, sin que la diferencia de escala engañe?"
tipo: mc
opciones_explicitas:
  - "Calculando el coeficiente de variación de cada una (desvío/media) y comparando esos dos números, no los desvíos en pesos directamente"
  - "Comparando directo los desvíos en pesos: la empresa B tiene más dispersión porque $150.000 > $50.000"
  - "No se puede comparar la dispersión entre dos empresas con sueldos tan distintos"
respuesta: "Calculando el coeficiente de variación de cada una (desvío/media) y comparando esos dos números, no los desvíos en pesos directamente"

explicacion: |
  CV(A) = 50.000/500.000 = 10%; CV(B) = 150.000/2.000.000 = 7,5% — en
  términos relativos, la empresa A tiene MÁS dispersión salarial que
  la B, aunque su desvío en pesos sea menor.
```

### 18 — Misma media, distinto desvío

```
metadata:
  materia: "matematicas"
  tema: "dispersion_rango_y_desvio"
  nivel: "intermedio"
  tags: ["desvio"]

respuesta: verdadero
tipo: vf

enunciado: "Si dos conjuntos de datos tienen la misma media pero distinto desvío estándar, el que tiene mayor desvío es el que tiene los datos más dispersos alrededor de esa media."

explicacion: |
  Es exactamente lo que el desvío estándar mide: qué tan lejos, en
  promedio, están los datos de su propia media.
```

### 19 — El desvío estándar nunca es negativo

```
metadata:
  materia: "matematicas"
  tema: "dispersion_rango_y_desvio"
  nivel: "avanzado"
  tags: ["desvio"]

respuesta: verdadero
tipo: vf

enunciado: "El desvío estándar nunca puede dar un valor negativo, porque es la raíz cuadrada de la varianza, que a su vez es un promedio de valores elevados al cuadrado (siempre positivos o cero)."

explicacion: |
  Como mucho el desvío estándar da 0, y eso pasa sólo cuando todos los
  datos son exactamente iguales entre sí.
```

### 20 — Cierre: para qué sirven rango y desvío

```
metadata:
  materia: "matematicas"
  tema: "dispersion_rango_y_desvio"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirven el rango y el desvío estándar?"
tipo: mc
opciones_explicitas:
  - "Para responder 'qué tan dispersos están los datos': el rango da una idea rápida y grosera, el desvío estándar es la medida que realmente se usa en estadística"
  - "Sólo sirven para calcular la media de un conjunto de datos"
  - "Sólo se pueden calcular si los datos ya están ordenados en una tabla de frecuencia"
respuesta: "Para responder 'qué tan dispersos están los datos': el rango da una idea rápida y grosera, el desvío estándar es la medida que realmente se usa en estadística"

explicacion: |
  Media y desvío estándar son, además, los dos números que definen por
  completo una distribución normal — el módulo que sigue.
```
