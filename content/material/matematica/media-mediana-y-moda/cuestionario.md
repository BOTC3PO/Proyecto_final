# Matemática — Media, mediana y moda (cuestionario, 25 preguntas VBLang)

> Tema: `D4`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es la media

```
metadata:
  materia: "matematicas"
  tema: "media_mediana_y_moda"
  nivel: "basico"
  tags: ["media", "vocabulario"]

enunciado: "¿Qué es la media (promedio) de un conjunto de datos?"
tipo: mc
opciones_explicitas:
  - "La suma de todos los valores, dividida por la cantidad de valores"
  - "El valor que aparece más veces"
  - "El valor que queda justo en el medio al ordenar los datos"
respuesta: "La suma de todos los valores, dividida por la cantidad de valores"

explicacion: |
  Es la medida de tendencia central más usada.
```

### 2 — Qué es la mediana

```
metadata:
  materia: "matematicas"
  tema: "media_mediana_y_moda"
  nivel: "basico"
  tags: ["mediana", "vocabulario"]

enunciado: "¿Qué es la mediana de un conjunto de datos?"
tipo: mc
opciones_explicitas:
  - "El valor que queda exactamente en el medio, una vez que los datos están ordenados de menor a mayor"
  - "El valor que aparece más veces"
  - "La suma de todos los valores"
respuesta: "El valor que queda exactamente en el medio, una vez que los datos están ordenados de menor a mayor"

explicacion: |
  Hay que ordenar los datos primero — sin ordenar, 'el del medio' no
  significa nada.
```

### 3 — Qué es la moda

```
metadata:
  materia: "matematicas"
  tema: "media_mediana_y_moda"
  nivel: "basico"
  tags: ["moda", "vocabulario"]

enunciado: "¿Qué es la moda de un conjunto de datos?"
tipo: mc
opciones_explicitas:
  - "El valor (o valores) que aparece con más frecuencia"
  - "El valor más grande de todos"
  - "El promedio de todos los valores"
respuesta: "El valor (o valores) que aparece con más frecuencia"

explicacion: |
  Es la única de las tres medidas que también tiene sentido con datos
  que no son números (como colores o talles).
```

### 4 — Completar: fórmula de la media

```
metadata:
  materia: "matematicas"
  tema: "media_mediana_y_moda"
  nivel: "basico"
  tags: ["media", "completar"]

tipo: completar
enunciado: "Completá: media = suma de todos los valores / ___."
respuestas_validas:
  - "cantidad de valores"
  - "cantidad"

explicacion: |
  Dividir por la cantidad de datos es lo que convierte la suma total
  en un promedio.
```

### 5 — Problema: calcular la media

```
metadata:
  materia: "matematicas"
  tema: "media_mediana_y_moda"
  nivel: "intermedio"
  tags: ["media", "problema"]

variables:
  a: random(1, 20)
  b: random(1, 20)
  c: random(1, 20)
  d: random(1, 20)
  e: random(1, 20)
  datos: [a, b, c, d, e]

respuesta: redondear(promedio(datos), 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Calculá la media de estos 5 valores: {a}, {b}, {c}, {d}, {e}."

pasos:
  - "Suma = {a}+{b}+{c}+{d}+{e} = {a + b + c + d + e}"
  - "Media = {a + b + c + d + e} / 5 = {redondear(promedio(datos), 2)}"

explicacion: |
  Se suman los 5 valores y se divide por 5.
```

### 6 — Problema: mediana con cantidad impar de datos

```
metadata:
  materia: "matematicas"
  tema: "media_mediana_y_moda"
  nivel: "intermedio"
  tags: ["mediana", "problema"]

variables:
  a: random(1, 30)
  b: random(1, 30)
  c: random(1, 30)
  d: random(1, 30)
  e: random(1, 30)
  datos: [a, b, c, d, e]

respuesta: mediana(datos)
tipo: input

enunciado: "Calculá la mediana de estos 5 valores: {a}, {b}, {c}, {d}, {e}."

pasos:
  - "Se ordenan de menor a mayor, y se toma el valor del medio (el 3° de 5)."
  - "Mediana = {mediana(datos)}"

explicacion: |
  Con 5 valores (cantidad impar), hay un único valor central una vez
  ordenados.
```

### 7 — Problema: mediana con cantidad par de datos

```
metadata:
  materia: "matematicas"
  tema: "media_mediana_y_moda"
  nivel: "avanzado"
  tags: ["mediana", "problema"]

variables:
  a: random(1, 30)
  b: random(1, 30)
  c: random(1, 30)
  d: random(1, 30)
  datos: [a, b, c, d]

respuesta: mediana(datos)
tipo: input
tolerancia_abs: 0.01

enunciado: "Calculá la mediana de estos 4 valores: {a}, {b}, {c}, {d}."

pasos:
  - "Se ordenan de menor a mayor, y se promedian los dos valores centrales (el 2° y el 3° de 4)."
  - "Mediana = {mediana(datos)}"

explicacion: |
  Con una cantidad par de datos, no hay un único valor central — se
  promedian los dos del medio.
```

### 8 — Con cantidad par, la mediana promedia los dos centrales

```
metadata:
  materia: "matematicas"
  tema: "media_mediana_y_moda"
  nivel: "intermedio"
  tags: ["mediana"]

respuesta: verdadero
tipo: vf

enunciado: "Cuando hay una cantidad PAR de datos, la mediana es el promedio de los dos valores que quedan en el medio, una vez ordenados."

explicacion: |
  No hay un único valor central posible con una cantidad par, así que
  se promedian los dos.
```

### 9 — Problema: calcular la moda

```
metadata:
  materia: "matematicas"
  tema: "media_mediana_y_moda"
  nivel: "intermedio"
  tags: ["moda", "problema"]

variables:
  repetido: random(1, 10)
  otro1: random(11, 20)
  otro2: random(11, 20)
  datos: [repetido, repetido, repetido, otro1, otro2]

respuesta: repetido
tipo: input

enunciado: "Calculá la moda de estos 5 valores: {repetido}, {repetido}, {repetido}, {otro1}, {otro2}."

pasos:
  - "{repetido} aparece 3 veces; los demás aparecen 1 vez cada uno."
  - "Moda = {repetido}"

explicacion: |
  Es el valor con la frecuencia más alta del conjunto.
```

### 10 — Puede no haber moda

```
metadata:
  materia: "matematicas"
  tema: "media_mediana_y_moda"
  nivel: "avanzado"
  tags: ["moda"]

respuesta: verdadero
tipo: vf

enunciado: "Si todos los valores de un conjunto de datos aparecen exactamente la misma cantidad de veces, no hay moda."

explicacion: |
  No hay ningún valor que se destaque por frecuencia más alta que los
  demás.
```

### 11 — Puede haber más de una moda

```
metadata:
  materia: "matematicas"
  tema: "media_mediana_y_moda"
  nivel: "avanzado"
  tags: ["moda"]

respuesta: verdadero
tipo: vf

enunciado: "Si dos o más valores empatan en la frecuencia más alta, un conjunto de datos puede tener más de una moda a la vez."

explicacion: |
  Por ejemplo, en {1, 1, 2, 2, 3}, tanto 1 como 2 aparecen 2 veces —
  hay dos modas.
```

### 12 — Ordenar: pasos para calcular la mediana

```
metadata:
  materia: "matematicas"
  tema: "media_mediana_y_moda"
  nivel: "intermedio"
  tags: ["mediana", "ordenar"]

enunciado: "Ordená los pasos para calcular la mediana de un conjunto de datos."
tipo: ordenar
opciones_explicitas:
  - "Si la cantidad es par, promediar los dos valores centrales; si es impar, tomar el único valor central"
  - "Ordenar todos los datos de menor a mayor"
  - "Contar cuántos datos hay en total, para saber si es una cantidad par o impar"
respuesta_orden: ["Ordenar todos los datos de menor a mayor", "Contar cuántos datos hay en total, para saber si es una cantidad par o impar", "Si la cantidad es par, promediar los dos valores centrales; si es impar, tomar el único valor central"]
explicacion: |
  Sin ordenar primero, 'el valor del medio' no tiene ningún sentido.
```

### 13 — Problema: media distorsionada por un valor atípico

```
metadata:
  materia: "matematicas"
  tema: "media_mediana_y_moda"
  nivel: "avanzado"
  tags: ["media", "mediana", "problema"]

variables:
  a: random(8, 12)
  b: random(8, 12)
  c: random(8, 12)
  d: random(8, 12)
  atipico: random(80, 100)
  datos: [a, b, c, d, atipico]

respuesta: redondear(promedio(datos), 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Un grupo de 5 valores son: {a}, {b}, {c}, {d} y un valor mucho más grande, {atipico}. ¿Cuál es la MEDIA de estos 5 valores?"

pasos:
  - "Media = ({a}+{b}+{c}+{d}+{atipico}) / 5 = {redondear(promedio(datos), 2)}"

explicacion: |
  El valor atípico ({atipico}) empuja bastante la media hacia arriba,
  aunque los otros 4 valores sean todos parecidos y chicos.
```

### 14 — Un valor atípico afecta mucho a la media, poco a la mediana

```
metadata:
  materia: "matematicas"
  tema: "media_mediana_y_moda"
  nivel: "avanzado"
  tags: ["media", "mediana"]

respuesta: verdadero
tipo: vf

enunciado: "Un valor atípico (mucho más grande o más chico que el resto) puede correr bastante el valor de la media, mientras que la mediana casi no se ve afectada por él."

explicacion: |
  La mediana sólo depende del ORDEN, no del valor exacto de cada
  dato — un valor extremo sigue siendo 'el más alto', sin importar
  cuán extremo sea.
```

### 15 — Aplicación real: sueldo promedio de un país

```
metadata:
  materia: "matematicas"
  tema: "media_mediana_y_moda"
  nivel: "basico"
  tags: ["media", "mediana", "aplicacion"]

enunciado: "¿Por qué a veces se prefiere hablar del sueldo MEDIANO de un país en vez del sueldo PROMEDIO (media)?"
tipo: mc
opciones_explicitas:
  - "Porque unos pocos sueldos extremadamente altos pueden subir mucho la media, sin representar el sueldo 'típico' de la mayoría"
  - "Porque la mediana siempre da un número más alto que la media"
  - "Porque la media no se puede calcular con sueldos"
respuesta: "Porque unos pocos sueldos extremadamente altos pueden subir mucho la media, sin representar el sueldo 'típico' de la mayoría"

explicacion: |
  Es el ejemplo clásico de por qué elegir bien la medida importa —
  desarrollado en detalle en `../cual-miente-y-cuando/`.
```

### 16 — Problema: mediana con datos ya ordenados

```
metadata:
  materia: "matematicas"
  tema: "media_mediana_y_moda"
  nivel: "intermedio"
  tags: ["mediana", "problema"]

variables:
  paso: uno_de([2, 3, 5])
  inicio: random(1, 10)
  datos: [inicio, inicio + paso, inicio + paso * 2, inicio + paso * 3, inicio + paso * 4, inicio + paso * 5, inicio + paso * 6]

respuesta: mediana(datos)
tipo: input

enunciado: "Estos 7 valores ya están ordenados de menor a mayor: {inicio}, {inicio + paso}, {inicio + paso * 2}, {inicio + paso * 3}, {inicio + paso * 4}, {inicio + paso * 5}, {inicio + paso * 6}. ¿Cuál es la mediana?"

pasos:
  - "Con 7 valores ya ordenados, la mediana es el 4° valor: {mediana(datos)}"

explicacion: |
  Ya estando ordenados, sólo hace falta contar hasta el valor central.
```

### 17 — Cuál medida es más resistente a valores atípicos

```
metadata:
  materia: "matematicas"
  tema: "media_mediana_y_moda"
  nivel: "avanzado"
  tags: ["media", "mediana"]

enunciado: "¿Cuál de las tres medidas de tendencia central es más resistente a la presencia de valores atípicos?"
tipo: mc
opciones_explicitas:
  - "La mediana"
  - "La media"
  - "Las tres son igual de sensibles a los valores atípicos"
respuesta: "La mediana"

explicacion: |
  Sólo depende del orden de los datos, no de cuán extremo sea el
  valor más alto o más bajo.
```

### 18 — La mediana puede no ser un valor real del conjunto

```
metadata:
  materia: "matematicas"
  tema: "media_mediana_y_moda"
  nivel: "avanzado"
  tags: ["mediana"]

respuesta: verdadero
tipo: vf

enunciado: "Cuando hay una cantidad par de datos, la mediana (el promedio de los dos centrales) puede ser un valor que no está entre los datos originales."

explicacion: |
  Por ejemplo, con {2, 4, 6, 8}, la mediana es (4+6)/2=5, que no
  aparece en la lista original.
```

### 19 — Problema: comparar media y mediana en un conjunto simétrico

```
metadata:
  materia: "matematicas"
  tema: "media_mediana_y_moda"
  nivel: "avanzado"
  tags: ["media", "mediana", "problema"]

variables:
  centro: random(20, 50)
  paso: uno_de([3, 5, 8])
  datos: [centro - paso * 2, centro - paso, centro, centro + paso, centro + paso * 2]

respuesta: promedio(datos)
tipo: input

enunciado: "Con los valores {centro - paso * 2}, {centro - paso}, {centro}, {centro + paso}, {centro + paso * 2} (equidistantes entre sí), ¿cuál es la media?"

pasos:
  - "Al ser equidistantes alrededor de {centro}, la media coincide exactamente con la mediana: {promedio(datos)}"

explicacion: |
  Cuando los datos son simétricos alrededor de un valor central, media
  y mediana coinciden.
```

### 20 — Problema: talle más vendido (moda con más de 5 datos)

```
metadata:
  materia: "matematicas"
  tema: "media_mediana_y_moda"
  nivel: "intermedio"
  tags: ["moda", "problema"]

variables:
  talle_popular: uno_de([38, 40, 42])
  otro1: uno_de([36, 44])
  otro2: uno_de([36, 44])
  datos: [talle_popular, talle_popular, talle_popular, talle_popular, otro1, otro2]

respuesta: talle_popular
tipo: input

enunciado: "Una tienda vendió estos talles de zapatillas: {talle_popular}, {talle_popular}, {talle_popular}, {talle_popular}, {otro1}, {otro2}. ¿Cuál es el talle moda (el más vendido)?"

pasos:
  - "{talle_popular} se repite 4 veces, más que cualquier otro talle."

explicacion: |
  La moda es especialmente útil para decidir qué talle pedir más stock.
```

### 21 — Ninguna de las tres medidas es 'la correcta' siempre

```
metadata:
  materia: "matematicas"
  tema: "media_mediana_y_moda"
  nivel: "avanzado"
  tags: ["media", "mediana", "moda"]

respuesta: verdadero
tipo: vf

enunciado: "Ninguna de las tres medidas (media, mediana, moda) es 'la correcta' en todos los casos — cuál conviene usar depende de qué pregunta se quiere responder y de cómo están distribuidos los datos."

explicacion: |
  Por eso el próximo módulo se llama justamente 'Cuál miente y
  cuándo'.
```

### 22 — Problema: media de un conjunto sin valores atípicos

```
metadata:
  materia: "matematicas"
  tema: "media_mediana_y_moda"
  nivel: "intermedio"
  tags: ["media", "problema"]

variables:
  a: random(50, 70)
  b: random(50, 70)
  c: random(50, 70)
  datos: [a, b, c]

respuesta: redondear(promedio(datos), 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Tres exámenes de un alumno dieron estas notas: {a}, {b}, {c} (sobre 100). ¿Cuál es la nota media?"

pasos:
  - "({a}+{b}+{c}) / 3 = {redondear(promedio(datos), 2)}"

explicacion: |
  Con valores parecidos entre sí (sin atípicos), la media representa
  bien el rendimiento típico.
```

### 23 — La moda es la única de las tres que sirve con datos no numéricos

```
metadata:
  materia: "matematicas"
  tema: "media_mediana_y_moda"
  nivel: "avanzado"
  tags: ["moda"]

respuesta: verdadero
tipo: vf

enunciado: "La moda es la única de las tres medidas que tiene sentido calcular incluso con datos que no son números (como colores favoritos o marcas de auto más elegidas)."

explicacion: |
  No se puede sumar ni ordenar "rojo" y "azul", pero sí se puede
  contar cuál aparece más veces.
```

### 24 — Problema: mediana par con valores repetidos

```
metadata:
  materia: "matematicas"
  tema: "media_mediana_y_moda"
  nivel: "avanzado"
  tags: ["mediana", "problema"]

variables:
  valor: random(10, 30)
  extra1: random(1, 9)
  extra2: random(31, 40)

respuesta: valor
tipo: input

enunciado: "Estos 4 valores son: {extra1}, {valor}, {valor}, {extra2}. ¿Cuál es la mediana?"

pasos:
  - "Ordenados: {extra1}, {valor}, {valor}, {extra2}. Los dos centrales son {valor} y {valor}."
  - "Mediana = ({valor}+{valor})/2 = {valor}"

explicacion: |
  Cuando los dos valores centrales son iguales, la mediana coincide
  exactamente con ese valor repetido.
```

### 25 — Cierre: para qué sirve este bloque

```
metadata:
  materia: "matematicas"
  tema: "media_mediana_y_moda"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirven la media, la mediana y la moda?"
tipo: mc
opciones_explicitas:
  - "Para resumir un conjunto de datos en un solo número que represente su 'centro', cada una desde un criterio distinto"
  - "Sólo sirven para calcular notas escolares"
  - "Las tres dan siempre exactamente el mismo resultado"
respuesta: "Para resumir un conjunto de datos en un solo número que represente su 'centro', cada una desde un criterio distinto"

explicacion: |
  Es la base directa de `../cual-miente-y-cuando/` y de
  `../tablas-de-frecuencia-cuartiles-percentiles-y-varianza/`.
```
