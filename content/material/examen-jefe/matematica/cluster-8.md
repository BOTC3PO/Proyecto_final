# Examen jefe — Domino las distribuciones y distancias

> Logro #59. Completaste el examen jefe sobre dispersión, rangos, desvíos, distancias y distribuciones binomial, Poisson y exponencial. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **105 preguntas totales** en 5/5 secciones.

---

## Sección: dispersion-rango-y-desvio (20 preguntas)

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

## Sección: distancia-entre-dos-puntos (25 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "intermedio"
  tags: ["distancia", "vocabulario"]

enunciado: "¿Qué relación tiene la fórmula de distancia entre dos puntos con el teorema de Pitágoras?"
tipo: mc
opciones_explicitas:
  - "Es el teorema de Pitágoras aplicado a un triángulo rectángulo formado por las diferencias de coordenadas"
  - "No tiene ninguna relación, son fórmulas independientes"
  - "Es el teorema de Pitágoras, pero sólo para puntos en el cuadrante I"
respuesta: "Es el teorema de Pitágoras aplicado a un triángulo rectángulo formado por las diferencias de coordenadas"

explicacion: |
  Δx y Δy son los catetos; la distancia es la hipotenusa.
```

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "intermedio"
  tags: ["distancia", "completar"]

tipo: completar
enunciado: "Completá: en la fórmula de distancia, el resultado final se obtiene sacando ___ de la suma de los cuadrados de Δx y Δy."
respuestas_validas:
  - "raíz cuadrada"
  - "raiz cuadrada"

explicacion: |
  Es el mismo último paso que en el teorema de Pitágoras.
```

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "basico"
  tags: ["distancia", "vocabulario"]

enunciado: "¿Qué representa Δx (x₂ − x₁) en la fórmula de distancia?"
tipo: mc
opciones_explicitas:
  - "El cateto horizontal del triángulo rectángulo entre los dos puntos"
  - "La distancia total entre los dos puntos"
  - "El cateto vertical del triángulo"
respuesta: "El cateto horizontal del triángulo rectángulo entre los dos puntos"

explicacion: |
  Δy es el cateto vertical.
```

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "intermedio"
  tags: ["distancia", "problema"]

variables:
  k: random(1, 8)
  x1: 0
  y1: 0
  x2: 3 * k
  y2: 4 * k

respuesta: 5 * k
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es la distancia entre los puntos ({x1}, {y1}) y ({x2}, {y2})?"

pasos:
  - "Δx = {x2} − {x1} = {x2 - x1}; Δy = {y2} − {y1} = {y2 - y1}"
  - "√({x2 - x1}² + {y2 - y1}²) = √{(x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)} = {5 * k}"

explicacion: |
  Es la terna pitagórica 3-4-5 escalada por {k}: da una distancia exacta.
```

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "intermedio"
  tags: ["distancia", "problema"]

variables:
  k: random(1, 6)
  x1: random(-5, 5)
  y1: random(-5, 5)
  x2: x1 + 5 * k
  y2: y1 + 12 * k

respuesta: 13 * k
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es la distancia entre los puntos ({x1}, {y1}) y ({x2}, {y2})?"

pasos:
  - "Δx = {x2 - x1}; Δy = {y2 - y1}"
  - "√({x2 - x1}² + {y2 - y1}²) = {13 * k}"

explicacion: |
  Es la terna pitagórica 5-12-13 escalada por {k}, ahora con un punto
  inicial que no es el origen.
```

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "basico"
  tags: ["distancia", "problema"]

variables:
  y: random(-10, 10)
  x1: random(-10, 0)
  x2: random(1, 10)

respuesta: x2 - x1
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es la distancia entre los puntos ({x1}, {y}) y ({x2}, {y})?"

pasos:
  - "Misma ordenada: la distancia es directamente |{x2} − ({x1})| = {x2 - x1}"

explicacion: |
  Con la misma y, la distancia es sólo la diferencia de abscisas, sin
  necesidad de raíz cuadrada.
```

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "basico"
  tags: ["distancia", "problema"]

variables:
  x: random(-10, 10)
  y1: random(-10, 0)
  y2: random(1, 10)

respuesta: y2 - y1
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es la distancia entre los puntos ({x}, {y1}) y ({x}, {y2})?"

pasos:
  - "Misma abscisa: la distancia es directamente |{y2} − ({y1})| = {y2 - y1}"

explicacion: |
  Con la misma x, la distancia es sólo la diferencia de ordenadas.
```

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "intermedio"
  tags: ["distancia"]

respuesta: verdadero
tipo: vf

enunciado: "No importa cuál de los dos puntos se llame 'punto 1' y cuál 'punto 2': la distancia calculada da exactamente igual."

explicacion: |
  Restar al revés sólo cambia el signo de Δx y Δy, y el cuadrado
  elimina ese signo.
```

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "avanzado"
  tags: ["distancia", "problema"]

variables:
  x1: random(-8, 0)
  y1: random(-8, 0)
  x2: random(1, 8)
  y2: random(1, 8)

respuesta: redondear(sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)), 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "¿Cuál es la distancia entre los puntos ({x1}, {y1}) y ({x2}, {y2})? Redondeá a 2 decimales."

pasos:
  - "Δx = {x2 - x1}; Δy = {y2 - y1}"
  - "√({x2 - x1}² + {y2 - y1}²) = {redondear(sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)), 2)}"

explicacion: |
  No siempre la distancia da un número exacto: en ese caso se redondea.
```

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "intermedio"
  tags: ["distancia"]

respuesta: verdadero
tipo: vf

enunciado: "La distancia entre dos puntos nunca puede dar un número negativo."

explicacion: |
  Es una raíz cuadrada de una suma de cuadrados: siempre positiva o
  cero.
```

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "basico"
  tags: ["distancia"]

respuesta: verdadero
tipo: vf

enunciado: "La distancia de un punto a sí mismo es siempre 0."

explicacion: |
  Δx y Δy dan 0, así que la raíz de la suma también da 0.
```

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "intermedio"
  tags: ["distancia", "ordenar"]

enunciado: "Ordená los pasos para calcular la distancia entre dos puntos (x₁, y₁) y (x₂, y₂)."
tipo: ordenar
opciones_explicitas:
  - "Sacar raíz cuadrada de esa suma"
  - "Calcular Δx = x₂ − x₁ y Δy = y₂ − y₁"
  - "Elevar al cuadrado ambas diferencias y sumarlas"
respuesta_orden:
  - "Calcular Δx = x₂ − x₁ y Δy = y₂ − y₁"
  - "Elevar al cuadrado ambas diferencias y sumarlas"
  - "Sacar raíz cuadrada de esa suma"

explicacion: |
  Es exactamente el mismo procedimiento de Pitágoras para hallar una
  hipotenusa.
```

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "avanzado"
  tags: ["distancia", "problema"]

variables:
  k: random(1, 5)
  x1: random(1, 5)
  y1: random(1, 5)
  x2: x1 + 8 * k
  y2: y1 + 15 * k

respuesta: 17 * k
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es la distancia entre los puntos ({x1}, {y1}) y ({x2}, {y2})?"

pasos:
  - "Δx = {x2 - x1}; Δy = {y2 - y1}"
  - "√({x2 - x1}² + {y2 - y1}²) = {17 * k}"

explicacion: |
  Es la terna pitagórica 8-15-17 escalada por {k}.
```

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "avanzado"
  tags: ["distancia", "vocabulario"]

enunciado: "¿Para qué sirve calcular las tres distancias entre los vértices de un triángulo dado por sus coordenadas?"
tipo: mc
opciones_explicitas:
  - "Para clasificarlo como equilátero, isósceles o escaleno, sólo a partir de las coordenadas"
  - "Para calcular su área directamente, sin ninguna otra fórmula"
  - "No tiene ninguna aplicación práctica"
respuesta: "Para clasificarlo como equilátero, isósceles o escaleno, sólo a partir de las coordenadas"

explicacion: |
  Si las tres distancias (los tres lados) son iguales, es equilátero; si
  sólo dos son iguales, isósceles; si las tres son distintas, escaleno.
```

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "avanzado"
  tags: ["distancia", "problema"]

variables:
  k: random(1, 5)

respuesta: verdadero
tipo: vf

enunciado: "Un triángulo tiene vértices en (0, 0), ({3 * k}, {4 * k}) y (0, {5 * k}). Dos de sus lados miden {5 * k} (uno calculado con la terna 3-4-5, el otro como distancia vertical directa). ¿Es un triángulo isósceles (al menos dos lados iguales)?"

explicacion: |
  El lado entre (0,0) y ({3 * k},{4 * k}) mide {5 * k}, y el lado entre
  (0,0) y (0,{5 * k}) también mide {5 * k}: dos lados iguales alcanzan
  para ser isósceles.
```

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "intermedio"
  tags: ["distancia"]

respuesta: verdadero
tipo: vf

enunciado: "La fórmula de distancia funciona exactamente igual sin importar en qué cuadrante estén los dos puntos, incluso con coordenadas negativas."

explicacion: |
  Las diferencias se elevan al cuadrado, así que cualquier signo negativo
  desaparece antes de sumar.
```

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "basico"
  tags: ["distancia", "problema"]

variables:
  y: random(-5, 5)
  x1: random(-10, -1)
  x2: random(1, 10)

respuesta: x2 - x1
tipo: input
tolerancia_abs: 0

enunciado: "Dos puntos están en la misma altura y = {y}, en las posiciones x = {x1} y x = {x2}. ¿Qué distancia hay entre ellos?"

explicacion: |
  Basta con restar las dos abscisas.
```

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "intermedio"
  tags: ["distancia"]

respuesta: verdadero
tipo: vf

enunciado: "Si dos puntos comparten la misma abscisa o la misma ordenada, no hace falta usar raíz cuadrada para calcular la distancia entre ellos: alcanza con una resta directa."

explicacion: |
  Uno de los dos términos dentro de la raíz da 0, así que la raíz de un
  solo cuadrado es directamente ese valor absoluto.
```

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "avanzado"
  tags: ["distancia", "problema"]

variables:
  k: random(1, 6)
  dy: 12 * k
  d: 13 * k

respuesta: 5 * k
tipo: input
tolerancia_abs: 0

enunciado: "Dos puntos están a una distancia de {d} unidades entre sí, y su diferencia de ordenadas (Δy) es {dy}. ¿Cuál es su diferencia de abscisas (Δx)?"

pasos:
  - "{d}² − {dy}² = {(d * d) - (dy * dy)}"
  - "√{(d * d) - (dy * dy)} = {5 * k}"

explicacion: |
  Se despeja Δx invirtiendo Pitágoras, igual que hallar un cateto
  conociendo la hipotenusa y el otro cateto.
```

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "basico"
  tags: ["distancia", "vocabulario"]

enunciado: "¿Qué significa el símbolo Δ (delta) en 'Δx' o 'Δy'?"
tipo: mc
opciones_explicitas:
  - "Diferencia o cambio entre dos valores"
  - "El símbolo de una raíz cuadrada"
  - "Un ángulo específico de 90°"
respuesta: "Diferencia o cambio entre dos valores"

explicacion: |
  Δx es "cambio en x": x₂ menos x₁.
```

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "avanzado"
  tags: ["distancia", "problema"]

variables:
  k1: random(1, 4)
  k2: k1 + random(1, 3)

respuesta: verdadero
tipo: vf

enunciado: "La distancia entre (0,0) y ({3 * k2}, {4 * k2}) es mayor que la distancia entre (0,0) y ({3 * k1}, {4 * k1})."

explicacion: |
  {5 * k2} es mayor que {5 * k1}: a mayor factor de escala sobre la
  misma terna 3-4-5, mayor la distancia resultante.
```

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "intermedio"
  tags: ["distancia"]

respuesta: verdadero
tipo: vf

enunciado: "La distancia de A a B es siempre igual a la distancia de B a A."

explicacion: |
  Es una propiedad básica de cualquier distancia geométrica: no importa
  la dirección en la que se mida.
```

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "intermedio"
  tags: ["distancia", "vocabulario"]

enunciado: "¿Para qué sirve la fórmula de distancia entre dos puntos, aplicada a un mapa con coordenadas?"
tipo: mc
opciones_explicitas:
  - "Para calcular la distancia real 'en línea recta' entre dos ubicaciones, a partir de sus coordenadas"
  - "Sólo sirve para calcular el área de un mapa"
  - "No tiene ninguna aplicación fuera de la matemática pura"
respuesta: "Para calcular la distancia real 'en línea recta' entre dos ubicaciones, a partir de sus coordenadas"

explicacion: |
  Es la misma fórmula, aplicada a coordenadas geográficas o a
  coordenadas de un plano de edificio.
```

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "intermedio"
  tags: ["distancia"]

respuesta: verdadero
tipo: vf

enunciado: "Si dos puntos son distintos entre sí, la distancia entre ellos es siempre mayor que 0."

explicacion: |
  Sólo un punto respecto de sí mismo tiene distancia exactamente 0.
```

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve la fórmula de distancia entre dos puntos?"
tipo: mc
opciones_explicitas:
  - "Para medir la distancia real entre dos ubicaciones dadas por sus coordenadas, reusando el teorema de Pitágoras"
  - "Sólo sirve para puntos ubicados en el mismo cuadrante"
  - "Es una fórmula completamente distinta al teorema de Pitágoras"
respuesta: "Para medir la distancia real entre dos ubicaciones dadas por sus coordenadas, reusando el teorema de Pitágoras"

explicacion: |
  Es el mismo teorema ya conocido, aplicado a un par de coordenadas.
```

## Sección: distribucion-binomial (20 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "distribucion_binomial"
  nivel: "basico"
  tags: ["binomial", "vocabulario"]

enunciado: "¿Qué modela la distribución binomial?"
tipo: mc
opciones_explicitas:
  - "La cantidad de éxitos en n intentos independientes, todos con la misma probabilidad de éxito"
  - "El tiempo que pasa hasta el próximo éxito"
  - "El promedio de un conjunto de datos ya medidos"
respuesta: "La cantidad de éxitos en n intentos independientes, todos con la misma probabilidad de éxito"

explicacion: |
  Como la cantidad de caras en varios tiros de moneda.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_binomial"
  nivel: "intermedio"
  tags: ["binomial", "completar"]

tipo: completar
enunciado: "Completá: P(X=k) = C(n,k) × pᵏ × (1−p)^___."
respuestas_validas:
  - "n-k"
  - "n−k"

explicacion: |
  El exponente del complemento (1−p) es la cantidad de fracasos: n−k.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_binomial"
  nivel: "intermedio"
  tags: ["binomial", "combinaciones"]

enunciado: "En la fórmula binomial, ¿qué representa el factor C(n,k)?"
tipo: mc
opciones_explicitas:
  - "De cuántas formas distintas pueden caer exactamente k éxitos entre los n intentos"
  - "La probabilidad de un único intento exitoso"
  - "La cantidad total de intentos posibles"
respuesta: "De cuántas formas distintas pueden caer exactamente k éxitos entre los n intentos"

explicacion: |
  Es exactamente el mismo `C(n,k)` de `../combinaciones/`.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_binomial"
  nivel: "avanzado"
  tags: ["binomial", "problema"]

variables:
  n: 5
  p: 0.5
  k: uno_de([2, 3])

respuesta: redondear(combinations(n, k) * p ^ k * (1 - p) ^ (n - k), 4)
tipo: input
tolerancia_abs: 0.001

enunciado: "Se tira una moneda {n} veces (p=0,5 de cara en cada tiro). ¿Cuál es la probabilidad de que salgan exactamente {k} caras (P(X={k}))?"

pasos:
  - "C({n},{k}) = {combinations(n, k)}"
  - "P(X={k}) = {combinations(n, k)} × {p}^{k} × {1-p}^{n-k} = {redondear(combinations(n, k) * p ^ k * (1 - p) ^ (n - k), 4)}"

explicacion: |
  Se combina la cantidad de formas posibles (combinatoria) con la
  probabilidad de una secuencia particular (probabilidad compuesta).
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_binomial"
  nivel: "avanzado"
  tags: ["binomial", "problema"]

variables:
  n: uno_de([4, 6])
  p: uno_de([0.2, 0.3, 0.7])
  k: uno_de([1, 2])

respuesta: redondear(combinations(n, k) * p ^ k * (1 - p) ^ (n - k), 4)
tipo: input
tolerancia_abs: 0.001

enunciado: "Un jugador convierte penales con probabilidad p={p} en cada intento (independientes entre sí). De {n} penales pateados, ¿cuál es la probabilidad de que convierta exactamente {k}?"

pasos:
  - "C({n},{k}) = {combinations(n, k)}"
  - "P(X={k}) = {combinations(n, k)} × {p}^{k} × {1-p}^{n-k} = {redondear(combinations(n, k) * p ^ k * (1 - p) ^ (n - k), 4)}"

explicacion: |
  Se aplica la misma fórmula con la probabilidad de éxito propia de
  este escenario.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_binomial"
  nivel: "intermedio"
  tags: ["binomial", "vocabulario"]

enunciado: "¿Cuáles son los tres requisitos para poder usar la distribución binomial?"
tipo: mc
opciones_explicitas:
  - "Una cantidad fija de intentos independientes, con la misma probabilidad de éxito en cada uno, y sólo dos resultados posibles por intento"
  - "Que la cantidad de intentos sea siempre mayor a 30"
  - "Que la probabilidad de éxito cambie en cada intento"
respuesta: "Una cantidad fija de intentos independientes, con la misma probabilidad de éxito en cada uno, y sólo dos resultados posibles por intento"

explicacion: |
  Si la probabilidad cambiara de un intento a otro, la fórmula no
  aplicaría directo.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_binomial"
  nivel: "avanzado"
  tags: ["binomial", "clasificar"]

enunciado: "Se sacan 3 cartas de un mazo SIN reposición, y se cuenta cuántas son ases. ¿Corresponde usar la fórmula binomial directo para este caso?"
tipo: mc
opciones_explicitas:
  - "No, porque sin reposición la probabilidad de sacar un as cambia de una extracción a la siguiente — no es constante como exige la binomial"
  - "Sí, porque cualquier conteo de 'éxitos' siempre es binomial"
respuesta: "No, porque sin reposición la probabilidad de sacar un as cambia de una extracción a la siguiente — no es constante como exige la binomial"

explicacion: |
  Es el mismo caso 'dependiente' de
  `../independencia-de-eventos-y-diagrama-de-arbol/` — rompe el
  requisito de probabilidad constante.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_binomial"
  nivel: "intermedio"
  tags: ["binomial", "completar"]

tipo: completar
enunciado: "Completá: el valor esperado de una distribución binomial es E(X) = n × ___."
respuestas_validas:
  - "p"

explicacion: |
  n intentos por la probabilidad de éxito de cada uno.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_binomial"
  nivel: "intermedio"
  tags: ["binomial", "problema"]

variables:
  n: uno_de([10, 20, 40])
  p: uno_de([0.1, 0.25, 0.5])

respuesta: redondear(n * p, 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Se repite un experimento {n} veces, con probabilidad de éxito p={p} en cada uno. ¿Cuál es el valor esperado de la cantidad de éxitos, E(X)?"

pasos:
  - "E(X) = {n} × {p} = {redondear(n * p, 2)}"

explicacion: |
  El valor esperado no tiene por qué ser un número entero: es un
  promedio a largo plazo.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_binomial"
  nivel: "avanzado"
  tags: ["binomial"]

respuesta: verdadero
tipo: vf

enunciado: "El valor esperado E(X)=n×p de una binomial no tiene por qué ser un número entero, aunque X en sí (la cantidad de éxitos observada) siempre lo sea."

explicacion: |
  Es un promedio a largo plazo, no un resultado posible puntual — por
  ejemplo, E(X)=2,5 con n=5 y p=0,5.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_binomial"
  nivel: "avanzado"
  tags: ["binomial", "problema"]

variables:
  n: uno_de([3, 4, 5])
  p: uno_de([0.2, 0.3])

respuesta: redondear((1 - p) ^ n, 4)
tipo: input
tolerancia_abs: 0.001

enunciado: "Con n={n} intentos y probabilidad de éxito p={p} en cada uno, ¿cuál es la probabilidad de que NO haya NINGÚN éxito (P(X=0))?"

pasos:
  - "C({n},0) = 1, así que P(X=0) = (1−{p})^{n} = {redondear((1 - p) ^ n, 4)}"

explicacion: |
  Con k=0, C(n,0)=1 y pᵏ=1, así que la fórmula se reduce a
  (1−p)ⁿ: todos los intentos fallan.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_binomial"
  nivel: "avanzado"
  tags: ["binomial", "problema"]

variables:
  n: uno_de([3, 4, 5])
  p: uno_de([0.6, 0.8])

respuesta: redondear(p ^ n, 4)
tipo: input
tolerancia_abs: 0.001

enunciado: "Con n={n} intentos y probabilidad de éxito p={p} en cada uno, ¿cuál es la probabilidad de que TODOS sean éxitos (P(X={n}))?"

pasos:
  - "C({n},{n}) = 1, así que P(X={n}) = {p}^{n} = {redondear(p ^ n, 4)}"

explicacion: |
  Con k=n, C(n,n)=1 y (1−p)⁰=1, así que la fórmula se reduce a pⁿ:
  todos los intentos son éxito.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_binomial"
  nivel: "basico"
  tags: ["binomial", "aplicacion"]

enunciado: "Una máquina produce piezas con un 2% de probabilidad de defecto en cada una, independiente entre piezas. Se inspecciona un lote de 50 piezas. ¿Qué distribución conviene usar para calcular la probabilidad de encontrar exactamente 3 piezas defectuosas?"
tipo: mc
opciones_explicitas:
  - "La distribución binomial, con n=50 y p=0,02"
  - "La distribución exponencial, con λ=0,02"
  - "La distribución normal, con media 50"
respuesta: "La distribución binomial, con n=50 y p=0,02"

explicacion: |
  Cantidad fija de intentos (50 piezas), independientes, misma
  probabilidad de defecto en cada una — el caso central de la
  binomial.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_binomial"
  nivel: "avanzado"
  tags: ["binomial", "aplicacion"]

enunciado: "Una pareja tiene 4 hijos. Cada hijo tiene, independientemente, una probabilidad de 1/4 de heredar un genotipo recesivo particular (según el cuadro de Punnett). ¿Qué distribución conviene usar para calcular la probabilidad de que exactamente 2 de los 4 hijos lo hereden?"
tipo: mc
opciones_explicitas:
  - "La distribución binomial, con n=4 y p=1/4"
  - "La distribución de Poisson, con λ=4"
respuesta: "La distribución binomial, con n=4 y p=1/4"

explicacion: |
  Es la misma probabilidad compuesta de `../probabilidad-compuesta/`
  aplicada a genética, ahora generalizada a 'exactamente k de n'.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_binomial"
  nivel: "avanzado"
  tags: ["binomial", "problema"]

variables:
  n: 4
  p: 0.25
  k: 2

respuesta: redondear(combinations(n, k) * p ^ k * (1 - p) ^ (n - k), 4)
tipo: input
tolerancia_abs: 0.001

enunciado: "Con {n} hijos y probabilidad p={p} de heredar el alelo recesivo cada uno (independiente), ¿cuál es la probabilidad de que exactamente {k} lo hereden?"

pasos:
  - "C({n},{k}) = {combinations(n, k)}"
  - "P(X={k}) = {combinations(n, k)} × {p}^{k} × {1-p}^{n-k} = {redondear(combinations(n, k) * p ^ k * (1 - p) ^ (n - k), 4)}"

explicacion: |
  Aplicación directa de la binomial a un caso genético con más de dos
  hijos.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_binomial"
  nivel: "avanzado"
  tags: ["binomial"]

respuesta: verdadero
tipo: vf

enunciado: "La suma de P(X=0) + P(X=1) + ... + P(X=n) (para todos los valores posibles de k) siempre da exactamente 1, igual que en cualquier distribución de variable aleatoria discreta."

explicacion: |
  Es la misma propiedad general de `../variable-aleatoria-discreta-continua/`.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_binomial"
  nivel: "avanzado"
  tags: ["binomial", "problema"]

variables:
  n: 5
  k: 3
  p_bajo: 0.2
  p_alto: 0.7

respuesta: (combinations(n, k) * p_alto ^ k * (1 - p_alto) ^ (n - k)) > (combinations(n, k) * p_bajo ^ k * (1 - p_bajo) ^ (n - k))
tipo: vf

enunciado: "Con n={n} y k={k}, ¿P(X={k}) es MAYOR cuando p={p_alto} que cuando p={p_bajo}?"

explicacion: |
  Con una probabilidad de éxito más alta, es más probable observar
  una cantidad alta de éxitos como k={k}.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_binomial"
  nivel: "basico"
  tags: ["binomial", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La distribución binomial es discreta, porque X (la cantidad de éxitos) siempre es un número entero entre 0 y n."

explicacion: |
  Es el ejemplo central de variable discreta usado en
  `../variable-aleatoria-discreta-continua/`.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_binomial"
  nivel: "avanzado"
  tags: ["binomial", "poisson"]

enunciado: "¿Qué distribución se obtiene como caso límite de la binomial cuando n es muy grande y p es muy chico, con n×p constante?"
tipo: mc
opciones_explicitas:
  - "La distribución de Poisson"
  - "La distribución normal"
  - "La distribución exponencial"
respuesta: "La distribución de Poisson"

explicacion: |
  Es la conexión mencionada en `../distribucion-de-poisson/`, entre
  'muchos intentos con probabilidad chica' y 'conteo de eventos
  raros'.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_binomial"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve la distribución binomial?"
tipo: mc
opciones_explicitas:
  - "Para calcular la probabilidad de obtener exactamente k éxitos en n intentos independientes, todos con la misma probabilidad de éxito"
  - "Para calcular el tiempo de espera hasta el próximo evento"
  - "Para calcular el promedio de un conjunto de datos ya medidos"
respuesta: "Para calcular la probabilidad de obtener exactamente k éxitos en n intentos independientes, todos con la misma probabilidad de éxito"

explicacion: |
  Combina directo la combinatoria de `../combinaciones/` con la
  probabilidad compuesta de `../probabilidad-compuesta/`.
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
