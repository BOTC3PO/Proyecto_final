# Examen jefe — [PENDIENTE #623]

> Logro #623. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **136 preguntas totales** en 5/5 secciones.

---

## Sección: notacion-cientifica (26 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "basico"
  tags: ["notacion_cientifica", "vocabulario"]

enunciado: "¿Cómo se escribe un número en notación científica?"
tipo: mc
opciones_explicitas:
  - "a × 10ⁿ, con a entre 1 y 10"
  - "Cualquier número multiplicado por 10"
  - "Un número con muchos ceros"
respuesta: "a × 10ⁿ, con a entre 1 y 10"

explicacion: |
  El coeficiente a siempre tiene que estar entre 1 y 10 (1 ≤ a < 10).
```

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "intermedio"
  tags: ["notacion_cientifica", "conversion"]

variables:
  a_entero: random(1, 9)
  a_decimal: random(0, 9)
  n: random(4, 8)
  numero: (a_entero + a_decimal / 10) * (10 ^ n)

respuesta: a_entero + a_decimal / 10
tipo: input
tolerancia_abs: 0.01

enunciado: "Al escribir {numero} en notación científica, ¿cuál es el coeficiente (la parte \"a\")?"

explicacion: |
  Se corre la coma hasta que quede un solo dígito antes de ella: ese
  número (con su parte decimal) es el coeficiente.
```

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "intermedio"
  tags: ["notacion_cientifica", "conversion"]

variables:
  a_entero: random(1, 9)
  a_decimal: random(0, 9)
  n: random(4, 8)
  numero: (a_entero + a_decimal / 10) * (10 ^ n)

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "Al escribir {numero} en notación científica, ¿cuál es el exponente de 10?"

explicacion: |
  El exponente es la cantidad de lugares que se corrió la coma hacia la
  izquierda.
```

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "avanzado"
  tags: ["notacion_cientifica", "conversion"]

variables:
  a_entero: random(1, 9)
  a_decimal: random(0, 9)
  n: random(3, 6)
  numero: (a_entero + a_decimal / 10) / (10 ^ n)

respuesta: a_entero + a_decimal / 10
tipo: input
tolerancia_abs: 0.01

enunciado: "Al escribir {numero} en notación científica, ¿cuál es el coeficiente?"

explicacion: |
  Igual que con números grandes: se corre la coma hasta dejar un solo
  dígito antes de ella.
```

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "avanzado"
  tags: ["notacion_cientifica", "conversion"]

variables:
  a_entero: random(1, 9)
  a_decimal: random(0, 9)
  n: random(3, 6)
  numero: (a_entero + a_decimal / 10) / (10 ^ n)

respuesta: -n
tipo: input
tolerancia_abs: 0

enunciado: "Al escribir {numero} en notación científica, ¿cuál es el exponente de 10?"

explicacion: |
  Con números menores a 1, el exponente da negativo: la coma se corrió
  hacia la derecha.
```

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "intermedio"
  tags: ["notacion_cientifica", "conversion"]

variables:
  a: random(1, 9)
  n: random(3, 7)

respuesta: a * (10 ^ n)
tipo: input
tolerancia_abs: 0

enunciado: "¿A qué número equivale {a} × 10^{n}?"

pasos:
  - "{a} × 10^{n} corre la coma {n} lugares a la derecha: {a * (10 ^ n)}"

explicacion: |
  Un exponente positivo corre la coma hacia la derecha, agregando ceros.
```

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "avanzado"
  tags: ["notacion_cientifica", "conversion"]

variables:
  a: random(1, 9)
  n: random(2, 5)

respuesta: a / (10 ^ n)
tipo: input
tolerancia_abs: 0.00001

enunciado: "¿A qué número equivale {a} × 10^(-{n})?"

pasos:
  - "Un exponente negativo corre la coma {n} lugares a la izquierda: {a / (10 ^ n)}"

explicacion: |
  Un exponente negativo corre la coma hacia la izquierda.
```

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "basico"
  tags: ["notacion_cientifica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En la notación científica a × 10ⁿ, el coeficiente \"a\" siempre tiene que cumplir 1 ≤ a < 10."

explicacion: |
  Es la regla que define la forma correcta: ni con más de un dígito antes
  de la coma, ni con la coma antes del primer dígito.
```

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "intermedio"
  tags: ["notacion_cientifica", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "35 × 10⁶ está bien escrito como notación científica."

explicacion: |
  El coeficiente 35 es mayor o igual a 10: no cumple la regla. La forma
  correcta sería 3,5 × 10⁷.
```

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "intermedio"
  tags: ["notacion_cientifica", "comparacion"]

variables:
  a1: random(1, 9)
  n1: random(2, 8)
  a2: random(1, 9)
  n2: random(2, 8)

restricciones:
  - n1 != n2

respuesta: (n1 > n2)
tipo: vf

enunciado: "¿Es {a1} × 10^{n1} mayor que {a2} × 10^{n2}?"

explicacion: |
  Con exponentes distintos, alcanza con comparar los exponentes: gana el
  mayor, sin importar el coeficiente.
```

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "intermedio"
  tags: ["notacion_cientifica", "comparacion"]

variables:
  n: random(2, 8)
  a1: random(1, 8)
  a2: a1 + 1

respuesta: falso
tipo: vf

enunciado: "¿Es {a1} × 10^{n} mayor que {a2} × 10^{n}?"

explicacion: |
  Con el mismo exponente, se compara el coeficiente: {a1} es menor que
  {a2}.
```

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "intermedio"
  tags: ["notacion_cientifica"]

variables:
  a_entero: random(1, 9)
  a_decimal: random(0, 9)
  n: random(4, 8)
  numero: (a_entero + a_decimal / 10) * (10 ^ n)
  correcto: a_entero + a_decimal / 10

respuesta: correcto
tipo: mc
opciones_explicitas:
  - correcto
  - correcto * 10
  - correcto / 10

enunciado: "¿Cuál es el coeficiente correcto para escribir {numero} en notación científica?"

explicacion: |
  Las otras opciones no cumplen la regla de que el coeficiente esté entre
  1 y 10.
```

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "intermedio"
  tags: ["notacion_cientifica", "verificacion"]

variables:
  a: random(1, 9)
  n: random(3, 7)
  correcto: a * (10 ^ n)
  error: uno_de([0, 0, 0, 1, -1])
  mostrado: correcto + error

respuesta: (mostrado == correcto)
tipo: vf

enunciado: "¿Está bien convertido esto? {a} × 10^{n} = {mostrado}"

explicacion: |
  Se vuelve a calcular corriendo la coma y se compara.
```

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "intermedio"
  tags: ["notacion_cientifica"]

variables:
  a: random(1, 9)
  n: random(3, 7)

tipo: completar
enunciado: "Completá: {a} × 10^___ = {a * (10 ^ n)}."
respuestas_validas:
  - n

explicacion: |
  Se cuenta cuántos lugares hay que correr la coma para llegar de {a} al
  número completo.
```

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "intermedio"
  tags: ["notacion_cientifica", "problema"]

variables:
  a: random(1, 9)
  n: random(6, 9)

respuesta: a * (10 ^ n)
tipo: input
tolerancia_abs: 0

enunciado: "La distancia a una estrella es {a} × 10^{n} km. ¿Cuántos km son, escritos en forma normal?"

explicacion: |
  Las distancias astronómicas son un caso típico donde conviene la
  notación científica.
```

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "avanzado"
  tags: ["notacion_cientifica", "problema"]

variables:
  a: random(1, 9)
  n: random(6, 9)

respuesta: a / (10 ^ n)
tipo: input
tolerancia_abs: 0.000000001

enunciado: "El diámetro de una célula es {a} × 10^(-{n}) metros. ¿Cuántos metros son, escritos en forma normal?"

explicacion: |
  Las medidas microscópicas también se escriben cómodas en notación
  científica, con exponente negativo.
```

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "basico"
  tags: ["notacion_cientifica"]

variables:
  n: random(2, 9)

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos ceros tiene 10^{n} escrito en forma normal (después del 1)?"

explicacion: |
  10 elevado a n se escribe como un 1 seguido de n ceros.
```

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "intermedio"
  tags: ["notacion_cientifica", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "0,35 × 10⁸ está bien escrito como notación científica."

explicacion: |
  El coeficiente 0,35 es menor a 1: no cumple la regla. La forma correcta
  sería 3,5 × 10⁷.
```

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "intermedio"
  tags: ["notacion_cientifica", "conversion"]

variables:
  a_entero: random(1, 9)
  a_decimal: random(0, 9)
  n: random(3, 7)
  numero: (a_entero + a_decimal / 10) * (10 ^ n)
  a: a_entero + a_decimal / 10

respuesta: verdadero
tipo: vf

enunciado: "{numero} en notación científica es {a} × 10^{n}. ¿Es cierto que convertir {a} × 10^{n} de vuelta a forma normal da otra vez {numero}?"

explicacion: |
  Convertir y volver a convertir tiene que devolver el número original:
  son dos formas de escribir la misma cantidad.
```

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "intermedio"
  tags: ["notacion_cientifica", "orden"]

tipo: ordenar
enunciado: "Ordená estos números de menor a mayor."
opciones_explicitas:
  - "5 × 10^4"
  - "2 × 10^6"
  - "9 × 10^3"
  - "1 × 10^5"
respuesta_orden: ["9 × 10^3", "5 × 10^4", "1 × 10^5", "2 × 10^6"]

explicacion: |
  Primero se compara el exponente; entre exponentes iguales (acá no hay
  ninguno repetido), recién se compararía el coeficiente.
```

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "intermedio"
  tags: ["notacion_cientifica", "comparacion"]

variables:
  a1: random(1, 9)
  n1: random(2, 8)
  a2: random(1, 9)
  n2: random(2, 8)
  a3: random(1, 9)
  n3: random(2, 8)

restricciones:
  - n1 != n2
  - n1 != n3
  - n2 != n3

respuesta: max(n1, n2, n3)
tipo: mc
opciones_explicitas:
  - n1
  - n2
  - n3

enunciado: "Entre {a1}×10^{n1}, {a2}×10^{n2} y {a3}×10^{n3}, ¿cuál exponente corresponde al número mayor?"

explicacion: |
  Con exponentes todos distintos, gana el mayor exponente sin importar el
  coeficiente.
```

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "basico"
  tags: ["notacion_cientifica"]

variables:
  n: random(3, 9)

respuesta: 1
tipo: input
tolerancia_abs: 0

enunciado: "Al escribir 10^{n} (un 1 seguido de {n} ceros) en notación científica, ¿cuál es el coeficiente?"

explicacion: |
  Cuando el número ya es una potencia exacta de 10, el coeficiente es 1.
```

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "intermedio"
  tags: ["notacion_cientifica", "problema"]

variables:
  a_entero: random(1, 9)
  a_decimal: random(0, 9)

respuesta: a_entero + a_decimal / 10
tipo: input
tolerancia_abs: 0.01

enunciado: "La población mundial es aproximadamente {a_entero},{a_decimal} × 10⁹ personas. ¿Cuál es el coeficiente de esa notación?"

explicacion: |
  El coeficiente es, directamente, la parte antes de la potencia de 10.
```

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "intermedio"
  tags: ["notacion_cientifica", "potencias"]

variables:
  n1: random(2, 6)
  n2: random(2, 6)

respuesta: n1 + n2
tipo: input
tolerancia_abs: 0

enunciado: "10^{n1} × 10^{n2} = 10^x. ¿Cuánto vale x?"

explicacion: |
  Al multiplicar potencias de igual base (acá, 10), se suman los
  exponentes — la misma propiedad de `../potencias/`.
```

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "basico"
  tags: ["notacion_cientifica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La notación científica sirve para escribir cómodo números muy grandes o muy chicos, sin tener que contar montones de ceros."

explicacion: |
  Es la razón de ser de esta notación: comparar y operar con magnitudes
  extremas sin perderse entre los ceros.
```

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "basico"
  tags: ["notacion_cientifica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En a × 10ⁿ, un exponente positivo representa un número grande, y un exponente negativo representa un número menor a 1."

explicacion: |
  Es la idea central de todo el tema: el signo del exponente dice si el
  número original era grande o chico.
```

## Sección: ecuacion-de-la-recta (26 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "basico"
  tags: ["ecuacion_recta", "vocabulario"]

enunciado: "¿Qué es la ordenada al origen de una recta?"
tipo: mc
opciones_explicitas:
  - "El punto donde la recta cruza el eje y"
  - "El punto donde la recta cruza el eje x"
  - "La pendiente de la recta"
respuesta: "El punto donde la recta cruza el eje y"

explicacion: |
  Es el punto (0, b): se obtiene evaluando la ecuación en x = 0.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "intermedio"
  tags: ["ecuacion_recta", "vocabulario"]

enunciado: "¿Qué es la abscisa al origen (o raíz) de una recta?"
tipo: mc
opciones_explicitas:
  - "El punto donde la recta cruza el eje x"
  - "El punto donde la recta cruza el eje y"
  - "El punto más alejado del origen"
respuesta: "El punto donde la recta cruza el eje x"

explicacion: |
  Se obtiene poniendo y = 0 en la ecuación y despejando x.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "basico"
  tags: ["ecuacion_recta", "problema"]

variables:
  m: uno_de([2, 3, 4, 5, -2, -3])
  b: uno_de([1, 2, 5, -3, -4, 6])

respuesta: b
tipo: input
tolerancia_abs: 0

enunciado: "Una recta tiene ecuación y = {m}x + {b}. ¿Cuál es su ordenada al origen?"

pasos:
  - "En x = 0: y = {m} × 0 + {b} = {b}"

explicacion: |
  La ordenada al origen es directamente el término independiente b.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "intermedio"
  tags: ["ecuacion_recta", "problema"]

variables:
  m: uno_de([2, 4, 5])
  k: random(-6, 6)
  b: 0 - (m * k)

respuesta: k
tipo: input
tolerancia_abs: 0

enunciado: "Una recta tiene ecuación y = {m}x + {b}. ¿Cuál es su abscisa al origen (dónde cruza el eje x)?"

pasos:
  - "0 = {m}x + {b}"
  - "x = -{b} ÷ {m} = {k}"

explicacion: |
  Se pone y = 0 y se despeja x.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "basico"
  tags: ["ecuacion_recta", "problema"]

variables:
  m: uno_de([2, 3, 4, -2])
  b: uno_de([1, 3, 5, -2])
  x: random(1, 8)

respuesta: (m * x) + b
tipo: input
tolerancia_abs: 0

enunciado: "Una recta tiene ecuación y = {m}x + {b}. ¿Cuál es el valor de y cuando x = {x}?"

pasos:
  - "y = {m} × {x} + {b} = {(m * x) + b}"

explicacion: |
  Se reemplaza x por el valor dado y se calcula y.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "intermedio"
  tags: ["ecuacion_recta"]

respuesta: verdadero
tipo: vf

enunciado: "Si la ordenada al origen de una recta es b = 0, la recta pasa exactamente por el origen (0, 0)."

explicacion: |
  La ecuación queda y = mx, que en x = 0 da y = 0.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "intermedio"
  tags: ["ecuacion_recta"]

respuesta: verdadero
tipo: vf

enunciado: "Si la pendiente de una recta es m = 0, la recta es horizontal: y = b para cualquier valor de x."

explicacion: |
  Sin inclinación, la recta no sube ni baja.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "avanzado"
  tags: ["ecuacion_recta"]

respuesta: verdadero
tipo: vf

enunciado: "Una recta horizontal y = b, con b distinto de 0, nunca cruza el eje x."

explicacion: |
  Como y vale siempre b (nunca 0), no hay ningún punto de esa recta
  sobre el eje x.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "avanzado"
  tags: ["ecuacion_recta"]

respuesta: verdadero
tipo: vf

enunciado: "Una recta vertical (x = k, para cualquier k) no se puede escribir en la forma y = mx + b."

explicacion: |
  Su pendiente es indefinida: a un mismo x le corresponderían infinitos
  valores de y.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "avanzado"
  tags: ["ecuacion_recta", "vocabulario"]

enunciado: "¿Por qué una recta vertical no tiene una pendiente definida?"
tipo: mc
opciones_explicitas:
  - "Porque todos sus puntos comparten el mismo x, y la fórmula de pendiente dividiría por (x₂ − x₁) = 0"
  - "Porque las rectas verticales no existen en geometría"
  - "Porque su pendiente siempre vale exactamente 0"
respuesta: "Porque todos sus puntos comparten el mismo x, y la fórmula de pendiente dividiría por (x₂ − x₁) = 0"

explicacion: |
  Dividir por 0 no está definido — por eso la pendiente de una recta
  vertical no existe como número.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "intermedio"
  tags: ["ecuacion_recta", "problema"]

variables:
  m: uno_de([2, 3, -2])
  b: uno_de([1, 4, -3])
  x: random(1, 6)
  oy: (m * x) + b

respuesta: verdadero
tipo: vf

enunciado: "Una recta tiene ecuación y = {m}x + {b}. ¿El punto ({x}, {oy}) está sobre esa recta?"

explicacion: |
  Reemplazando x = {x}: y = {m} × {x} + {b} = {oy}, que coincide con la
  ordenada del punto.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "intermedio"
  tags: ["ecuacion_recta", "problema"]

variables:
  m: uno_de([2, 3, -2])
  b: uno_de([1, 4, -3])
  x: random(1, 6)
  y_real: (m * x) + b
  y_falso: y_real + random(1, 4)

respuesta: falso
tipo: vf

enunciado: "Una recta tiene ecuación y = {m}x + {b}. ¿El punto ({x}, {y_falso}) está sobre esa recta?"

explicacion: |
  Reemplazando x = {x}, la recta da y = {y_real}, que NO coincide con
  {y_falso}: el punto no está sobre la recta.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "intermedio"
  tags: ["ecuacion_recta", "ordenar"]

enunciado: "Ordená los pasos para graficar la recta y = mx + b sin tabular muchos puntos."
tipo: ordenar
opciones_explicitas:
  - "Trazar la recta que pasa por esos dos puntos"
  - "Marcar el punto (0, b), la ordenada al origen"
  - "Desde ese punto, usar la pendiente m para subir/bajar y avanzar, marcando un segundo punto"
respuesta_orden: ["Marcar el punto (0, b), la ordenada al origen", "Desde ese punto, usar la pendiente m para subir/bajar y avanzar, marcando un segundo punto", "Trazar la recta que pasa por esos dos puntos"]
explicacion: |
  Con sólo dos puntos alcanza para trazar toda la recta.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "intermedio"
  tags: ["ecuacion_recta", "vocabulario"]

enunciado: "Si una recta tiene pendiente m = 3/4, ¿cómo se usa ese valor para marcar un segundo punto desde la ordenada al origen?"
tipo: mc
opciones_explicitas:
  - "Subir 3 unidades y avanzar 4 unidades hacia la derecha"
  - "Avanzar 3 unidades y subir 4 unidades"
  - "Subir 4 unidades y avanzar 3 hacia la izquierda"
respuesta: "Subir 3 unidades y avanzar 4 unidades hacia la derecha"

explicacion: |
  La pendiente es "cuánto sube, dividido cuánto avanza": el numerador es
  la subida, el denominador el avance horizontal.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "avanzado"
  tags: ["ecuacion_recta", "problema"]

variables:
  b: uno_de([1, 2, 3])
  avance: uno_de([2, 3, 4])
  subida: uno_de([1, 2, 3])

respuesta: b + subida
tipo: input
tolerancia_abs: 0

enunciado: "Una recta pasa por (0, {b}) y tiene pendiente {subida}/{avance}. Si desde ese punto se avanza {avance} hacia la derecha, ¿en qué valor de y queda el nuevo punto?"

pasos:
  - "{b} + {subida} = {b + subida}"

explicacion: |
  Avanzar exactamente el denominador de la pendiente hace subir (o
  bajar) exactamente el numerador.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "basico"
  tags: ["ecuacion_recta"]

respuesta: verdadero
tipo: vf

enunciado: "La ordenada al origen de una recta se obtiene evaluando su ecuación en x = 0."

explicacion: |
  y = m×0 + b = b.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "basico"
  tags: ["ecuacion_recta"]

respuesta: verdadero
tipo: vf

enunciado: "La abscisa al origen de una recta se obtiene poniendo y = 0 en su ecuación y despejando x."

explicacion: |
  0 = mx + b, así que x = −b/m.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "avanzado"
  tags: ["ecuacion_recta", "problema"]

variables:
  m: uno_de([-2, -3, -5])
  k: random(1, 8)
  b: 0 - (m * k)

respuesta: k
tipo: input
tolerancia_abs: 0

enunciado: "Una recta tiene ecuación y = {m}x + {b}. ¿Cuál es su abscisa al origen?"

pasos:
  - "0 = {m}x + {b}"
  - "x = -{b} ÷ ({m}) = {k}"

explicacion: |
  Con pendiente negativa, el cálculo funciona exactamente igual.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "intermedio"
  tags: ["ecuacion_recta", "vocabulario"]

enunciado: "En geometría analítica, ¿qué es la 'raíz' de una recta?"
tipo: mc
opciones_explicitas:
  - "Otro nombre para la abscisa al origen"
  - "Otro nombre para la ordenada al origen"
  - "Otro nombre para la pendiente"
respuesta: "Otro nombre para la abscisa al origen"

explicacion: |
  Es el valor de x donde la recta "vale cero" (cruza el eje x).
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "intermedio"
  tags: ["ecuacion_recta", "problema"]

variables:
  m: random(2, 8)
  x: random(1, 10)

respuesta: m * x
tipo: input
tolerancia_abs: 0

enunciado: "Una recta pasa por el origen y tiene pendiente {m} (es decir, y = {m}x). ¿Cuánto vale y cuando x = {x}?"

pasos:
  - "{m} × {x} = {m * x}"

explicacion: |
  Sin ordenada al origen (b = 0), la ecuación se reduce a y = mx.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "avanzado"
  tags: ["ecuacion_recta"]

respuesta: verdadero
tipo: vf

enunciado: "Toda recta que no sea vertical cruza el eje y en algún punto, así que tiene una ordenada al origen definida."

explicacion: |
  Sólo las rectas verticales (x = k) pueden no cruzar el eje y en ningún
  punto (salvo la propia recta x = 0).
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "intermedio"
  tags: ["ecuacion_recta", "vocabulario"]

enunciado: "¿Cuál es la diferencia entre la ecuación de una recta horizontal y una vertical?"
tipo: mc
opciones_explicitas:
  - "La horizontal es y = b (pendiente 0); la vertical es x = k (pendiente indefinida)"
  - "Son la misma ecuación, escrita de dos formas distintas"
  - "La horizontal es x = k; la vertical es y = b"
respuesta: "La horizontal es y = b (pendiente 0); la vertical es x = k (pendiente indefinida)"

explicacion: |
  Sólo la horizontal se puede escribir en la forma y = mx + b (con
  m = 0); la vertical no.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "avanzado"
  tags: ["ecuacion_recta", "problema"]

variables:
  b: uno_de([2, 4, 6])
  m: uno_de([2, 3])
  x2: random(1, 5)

respuesta: b
tipo: input
tolerancia_abs: 0

enunciado: "En un gráfico, una recta pasa por el punto (0, {b}) y por el punto ({x2}, {(m * x2) + b}). ¿Cuál es su ordenada al origen?"

pasos:
  - "El punto (0, {b}) ya está sobre el eje y: la ordenada al origen es {b}"

explicacion: |
  Cuando uno de los puntos marcados ya tiene x = 0, la ordenada al
  origen se lee directamente, sin ningún cálculo extra.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "intermedio"
  tags: ["ecuacion_recta"]

respuesta: verdadero
tipo: vf

enunciado: "Si b es distinto de 0 en y = mx + b, la recta no pasa por el origen (0, 0)."

explicacion: |
  En x = 0, y valdría b (no 0), así que el origen no está sobre esa
  recta.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "avanzado"
  tags: ["ecuacion_recta"]

respuesta: verdadero
tipo: vf

enunciado: "La ecuación y = mx + b es el mismo objeto que la función lineal de Álgebra, ahora leída como el dibujo de una recta sobre el plano cartesiano."

explicacion: |
  Es la idea central de este módulo: la pendiente que se despeja
  algebraicamente es la misma que se ve como inclinación en el gráfico.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve poder pasar de la ecuación de una recta a su dibujo, y viceversa?"
tipo: mc
opciones_explicitas:
  - "Para resolver problemas geométricos reales: hallar cruces con los ejes, verificar puntos, y comparar rectas entre sí"
  - "Sólo sirve para memorizar más fórmulas"
  - "Sólo aplica a rectas que pasan por el origen"
respuesta: "Para resolver problemas geométricos reales: hallar cruces con los ejes, verificar puntos, y comparar rectas entre sí"

explicacion: |
  Es la base para el módulo siguiente,
  `../rectas-paralelas-y-perpendiculares/`.
```

## Sección: polinomios-factoreo (30 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "polinomios_factoreo"
  nivel: "basico"
  tags: ["grado"]

variables:
  n: random(2, 6)

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el grado del polinomio 3x^{n} + 5x² − 7?"

explicacion: |
  El grado es el exponente más alto que aparece: {n}.
```

```
metadata:
  materia: "matematicas"
  tema: "polinomios_factoreo"
  nivel: "basico"
  tags: ["suma"]

variables:
  x: random(1, 20)
  a: random(1, 10)
  b: random(1, 10)
  c: random(1, 10)
  d: random(1, 10)

respuesta: (a * x ^ 2 + b * x) + (c * x ^ 2 - d * x)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto vale ({a}x² + {b}x) + ({c}x² − {d}x), si x = {x}?"

explicacion: |
  Se combinan los términos semejantes: ({a}+{c})x² + ({b}−{d})x, y
  después se evalúa.
```

```
metadata:
  materia: "matematicas"
  tema: "polinomios_factoreo"
  nivel: "basico"
  tags: ["resta"]

variables:
  x: random(1, 20)
  a: random(5, 15)
  b: random(5, 15)
  c: random(1, 4)
  d: random(1, 4)

respuesta: (a * x ^ 2 + b * x) - (c * x ^ 2 + d * x)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto vale ({a}x² + {b}x) − ({c}x² + {d}x), si x = {x}?"

explicacion: |
  Se restan los coeficientes de cada término semejante.
```

```
metadata:
  materia: "matematicas"
  tema: "polinomios_factoreo"
  nivel: "intermedio"
  tags: ["multiplicacion"]

variables:
  x: random(1, 15)
  a: random(1, 8)
  b: random(1, 8)

respuesta: (x + a) * (x + b)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto vale (x + {a})(x + {b}), si x = {x}?"

pasos:
  - "Distribuyendo: x² + {a}x + {b}x + {a * b} = x² + {a + b}x + {a * b}"

explicacion: |
  Cada término del primer paréntesis multiplica a cada término del
  segundo.
```

```
metadata:
  materia: "matematicas"
  tema: "polinomios_factoreo"
  nivel: "intermedio"
  tags: ["multiplicacion"]

variables:
  x: random(1, 15)
  p: random(2, 6)
  a: random(1, 8)
  q: random(2, 6)
  b: random(1, 8)

respuesta: (p * x + a) * (q * x + b)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto vale ({p}x + {a})({q}x + {b}), si x = {x}?"

explicacion: |
  ({p}x)({q}x) + ({p}x)({b}) + ({a})({q}x) + ({a})({b}).
```

```
metadata:
  materia: "matematicas"
  tema: "polinomios_factoreo"
  nivel: "basico"
  tags: ["factor_comun"]

variables:
  a: random(2, 10)
  p: random(2, 10)
  q: random(2, 10)

respuesta: a
tipo: input
tolerancia_abs: 0

enunciado: "En {a * p}x + {a * q}, ¿cuál es el mayor factor común de los dos términos?"

explicacion: |
  {a * p} = {a}×{p} y {a * q} = {a}×{q}: comparten el factor {a}.
```

```
metadata:
  materia: "matematicas"
  tema: "polinomios_factoreo"
  nivel: "intermedio"
  tags: ["factor_comun", "verdadero_falso"]

variables:
  x: random(1, 20)
  a: random(2, 10)
  p: random(2, 10)
  q: random(2, 10)

respuesta: ((a * p * x + a * q) == (a * (p * x + q)))
tipo: vf

enunciado: "¿Son equivalentes {a * p}x + {a * q} y {a}({p}x + {q}), para x = {x}?"

explicacion: |
  Sacar factor común no cambia el valor de la expresión, sólo su forma.
```

```
metadata:
  materia: "matematicas"
  tema: "polinomios_factoreo"
  nivel: "intermedio"
  tags: ["factor_comun"]

variables:
  x: random(1, 15)
  a: random(2, 8)
  p: random(2, 8)
  q: random(2, 8)

respuesta: (a * p * x ^ 2 + a * q * x)
tipo: input
tolerancia_abs: 0

enunciado: "El polinomio {a * p}x² + {a * q}x se factorea como {a}x({p}x + {q}). Si x = {x}, ¿cuánto vale el polinomio original?"

explicacion: |
  El factor común acá incluye una x, no sólo el número {a}.
```

```
metadata:
  materia: "matematicas"
  tema: "polinomios_factoreo"
  nivel: "intermedio"
  tags: ["diferencia_cuadrados", "verdadero_falso"]

variables:
  x: random(1, 20)
  a: random(1, 15)

respuesta: ((x ^ 2 - a ^ 2) == ((x + a) * (x - a)))
tipo: vf

enunciado: "¿Son equivalentes x² − {a}² y (x + {a})(x − {a}), para x = {x}?"

explicacion: |
  a² − b² = (a+b)(a−b) — la identidad de diferencia de cuadrados.
```

```
metadata:
  materia: "matematicas"
  tema: "polinomios_factoreo"
  nivel: "basico"
  tags: ["diferencia_cuadrados"]

variables:
  x: random(5, 30)
  a: random(1, 15)

respuesta: x ^ 2 - a ^ 2
tipo: input
tolerancia_abs: 0

enunciado: "x² − {a}² se factorea como (x + {a})(x − {a}). Si x = {x}, ¿cuánto vale el resultado?"

explicacion: |
  x² − {a}² = ({x}+{a})×({x}−{a}) = {x ^ 2 - a ^ 2}.
```

```
metadata:
  materia: "matematicas"
  tema: "polinomios_factoreo"
  nivel: "intermedio"
  tags: ["diferencia_cuadrados", "opcion_multiple"]

variables:
  a: random(1, 15)

respuesta: concatenar("(x + ", a, ")(x - ", a, ")")
tipo: mc
opciones_explicitas:
  - concatenar("(x + ", a, ")(x - ", a, ")")
  - concatenar("(x + ", a, ")(x + ", a, ")")
  - concatenar("(x - ", a, ")(x - ", a, ")")

enunciado: "¿Cómo se factorea x² − {a}²?"

explicacion: |
  Un factor suma, el otro resta — nunca los dos con el mismo signo.
```

```
metadata:
  materia: "matematicas"
  tema: "polinomios_factoreo"
  nivel: "intermedio"
  tags: ["trinomio_cuadrado_perfecto", "verdadero_falso"]

variables:
  x: random(1, 20)
  a: random(1, 12)

respuesta: ((x ^ 2 + 2 * a * x + a ^ 2) == ((x + a) ^ 2))
tipo: vf

enunciado: "¿Son equivalentes x² + {2 * a}x + {a ^ 2} y (x + {a})², para x = {x}?"

explicacion: |
  El término del medio, 2×x×{a} = {2 * a}x, coincide exactamente — es un
  trinomio cuadrado perfecto.
```

```
metadata:
  materia: "matematicas"
  tema: "polinomios_factoreo"
  nivel: "basico"
  tags: ["trinomio_cuadrado_perfecto"]

variables:
  x: random(1, 20)
  a: random(1, 15)

respuesta: (x + a) ^ 2
tipo: input
tolerancia_abs: 0

enunciado: "x² + {2 * a}x + {a ^ 2} se factorea como (x + {a})². Si x = {x}, ¿cuánto vale?"

explicacion: |
  (x+{a})² = ({x}+{a})² = {(x + a) ^ 2}.
```

```
metadata:
  materia: "matematicas"
  tema: "polinomios_factoreo"
  nivel: "avanzado"
  tags: ["trinomio_cuadrado_perfecto", "verdadero_falso"]

variables:
  x: random(1, 20)
  a: random(2, 12)
  error: uno_de([2, -2, 3, -3])
  b: 2 * a + error

respuesta: ((x ^ 2 + b * x + a ^ 2) == ((x + a) ^ 2))
tipo: vf

enunciado: "¿Son equivalentes x² + {b}x + {a ^ 2} y (x + {a})², para x = {x}?"

explicacion: |
  Para ser cuadrado perfecto, el término del medio tendría que ser
  exactamente {2 * a}x — acá es {b}x, así que NO coinciden.
```

```
metadata:
  materia: "matematicas"
  tema: "polinomios_factoreo"
  nivel: "intermedio"
  tags: ["trinomio"]

variables:
  p: random(1, 10)
  q: random(1, 10)
  b: p + q
  c: p * q

respuesta: c
tipo: input
tolerancia_abs: 0

enunciado: "x² + {b}x + c se factorea como (x + {p})(x + {q}). ¿Cuánto vale c?"

explicacion: |
  c = p×q = {p}×{q} = {c}.
```

```
metadata:
  materia: "matematicas"
  tema: "polinomios_factoreo"
  nivel: "intermedio"
  tags: ["trinomio"]

variables:
  p: random(1, 10)
  q: random(1, 10)
  c: p * q

respuesta: p + q
tipo: input
tolerancia_abs: 0

enunciado: "x² + bx + {c} se factorea como (x + {p})(x + {q}). ¿Cuánto vale b?"

explicacion: |
  b = p+q = {p}+{q} = {p + q}.
```

```
metadata:
  materia: "matematicas"
  tema: "polinomios_factoreo"
  nivel: "basico"
  tags: ["trinomio"]

variables:
  x: random(1, 15)
  p: random(1, 8)
  q: random(1, 8)

respuesta: x ^ 2 + (p + q) * x + p * q
tipo: input
tolerancia_abs: 0

enunciado: "x² + {p + q}x + {p * q} se factorea como (x + {p})(x + {q}). Si x = {x}, ¿cuánto vale?"

explicacion: |
  Evaluar el trinomio original o el producto factoreado da el mismo
  resultado.
```

```
metadata:
  materia: "matematicas"
  tema: "polinomios_factoreo"
  nivel: "avanzado"
  tags: ["trinomio", "signos"]

variables:
  p: random(1, 10)
  q: random(1, 10)

respuesta: (-p) + (-q)
tipo: input
tolerancia_abs: 0

enunciado: "x² + bx + {p * q} se factorea como (x − {p})(x − {q}). ¿Cuánto vale b?"

explicacion: |
  Con los dos factores restando, b = (−{p})+(−{q}) = {(-p) + (-q)}: b da
  negativo, aunque c sea positivo.
```

```
metadata:
  materia: "matematicas"
  tema: "polinomios_factoreo"
  nivel: "avanzado"
  tags: ["trinomio", "signos"]

variables:
  p: random(5, 15)
  q: random(1, 4)

respuesta: p - q
tipo: input
tolerancia_abs: 0

enunciado: "x² + bx − {p * q} se factorea como (x + {p})(x − {q}). ¿Cuánto vale b?"

explicacion: |
  b = {p} + (−{q}) = {p - q}. Un c negativo indica que los dos factores
  tienen signos opuestos.
```

```
metadata:
  materia: "matematicas"
  tema: "polinomios_factoreo"
  nivel: "avanzado"
  tags: ["factor_comun", "trinomio_cuadrado_perfecto"]

variables:
  x: random(1, 15)
  k: random(2, 6)
  a: random(1, 8)

respuesta: k * (x + a) ^ 2
tipo: input
tolerancia_abs: 0

enunciado: "{k}x² + {2 * k * a}x + {k * a ^ 2} se factorea como {k}(x + {a})². Si x = {x}, ¿cuánto vale?"

pasos:
  - "Primero se saca el factor común {k}: {k}(x² + {2 * a}x + {a ^ 2})"
  - "Adentro queda un trinomio cuadrado perfecto: (x + {a})²"

explicacion: |
  Es común combinar dos técnicas: sacar factor común primero, y después
  reconocer el patrón que queda adentro.
```

```
metadata:
  materia: "matematicas"
  tema: "polinomios_factoreo"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "x² + a² (una SUMA de cuadrados) se puede factorear de la misma forma que x² − a², como (x+a)(x−a)."

explicacion: |
  La identidad (x+a)(x−a) da x² − a² (una resta), no una suma — la suma
  de dos cuadrados no se factorea así con números reales.
```

```
metadata:
  materia: "matematicas"
  tema: "polinomios_factoreo"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Para comprobar que un factoreo está bien hecho, se puede multiplicar el resultado y ver si da el polinomio original."

explicacion: |
  Multiplicar es la operación inversa de factorear — si al multiplicar
  no se recupera el original, el factoreo tiene un error.
```

```
metadata:
  materia: "matematicas"
  tema: "polinomios_factoreo"
  nivel: "intermedio"
  tags: ["concepto", "grado"]

variables:
  n: random(1, 4)
  m: random(1, 4)

respuesta: n + m
tipo: input
tolerancia_abs: 0

enunciado: "Si un polinomio de grado {n} se multiplica por otro de grado {m}, ¿qué grado tiene el resultado?"

explicacion: |
  Los grados se suman al multiplicar polinomios.
```

```
metadata:
  materia: "matematicas"
  tema: "polinomios_factoreo"
  nivel: "intermedio"
  tags: ["concepto", "error_comun", "verdadero_falso"]

variables:
  x: random(1, 15)
  p: random(2, 8)
  q: random(2, 8)

respuesta: ((6 * p * x ^ 2 + 6 * q * x) == (3 * (2 * p * x ^ 2 + 2 * q * x)))
tipo: vf

enunciado: "¿6·{p}·x² + 6·{q}·x es equivalente a 3(2·{p}·x² + 2·{q}·x), para x = {x}?"

explicacion: |
  Numéricamente sí coinciden, pero sacar sólo el 3 no es el factoreo
  completo — el mayor factor común real de 6{p} y 6{q} suele incluir más
  que sólo el 3 (y también la x del segundo término).
```

```
metadata:
  materia: "matematicas"
  tema: "polinomios_factoreo"
  nivel: "avanzado"
  tags: ["trinomio", "signos"]

variables:
  p: random(1, 4)
  q: random(5, 15)

respuesta: p - q
tipo: input
tolerancia_abs: 0

enunciado: "x² + bx − {p * q} se factorea como (x + {p})(x − {q}). ¿Cuánto vale b?"

explicacion: |
  b = {p} − {q} = {p - q}, negativo porque {q} es mayor que {p}.
```

```
metadata:
  materia: "matematicas"
  tema: "polinomios_factoreo"
  nivel: "intermedio"
  tags: ["multiplicacion", "verdadero_falso"]

variables:
  x: random(1, 20)
  a: random(1, 15)

respuesta: (((x + a) ^ 2) == (x ^ 2 + 2 * a * x + a ^ 2))
tipo: vf

enunciado: "¿(x + {a})² es equivalente a x² + {2 * a}x + {a ^ 2}, para x = {x}?"

explicacion: |
  (x+a)² = x² + 2ax + a², no x² + a² — el término del medio (2ax) es el
  que se suele olvidar.
```

```
metadata:
  materia: "matematicas"
  tema: "polinomios_factoreo"
  nivel: "intermedio"
  tags: ["multiplicacion", "error_comun", "verdadero_falso"]

variables:
  x: random(2, 20)
  a: random(1, 15)

respuesta: (((x + a) ^ 2) == (x ^ 2 + a ^ 2))
tipo: vf

enunciado: "¿(x + {a})² es equivalente a x² + {a ^ 2} (sin el término del medio), para x = {x}?"

explicacion: |
  Es el error más común al elevar un binomio al cuadrado: falta el
  término 2ax — (x+a)² NO es x²+a².
```

```
metadata:
  materia: "matematicas"
  tema: "polinomios_factoreo"
  nivel: "avanzado"
  tags: ["trinomio_cuadrado_perfecto", "problema"]

variables:
  a: random(2, 15)

respuesta: a
tipo: input
tolerancia_abs: 0

enunciado: "El área de un cuadrado de lado (x + L) es x² + {2 * a}x + {a ^ 2}. ¿Cuánto mide L?"

explicacion: |
  El área de un cuadrado de lado (x+L) es (x+L)² = x²+2Lx+L² — comparando
  con el trinomio dado, L = {a}.
```

```
metadata:
  materia: "matematicas"
  tema: "polinomios_factoreo"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Si un trinomio se factorea como (x + p)(x + q), los valores x = −p y x = −q son los que hacen que el trinomio valga 0."

explicacion: |
  Es la conexión con `../ecuacion-cuadratica/`: un producto da 0 sólo si
  alguno de los factores da 0.
```

```
metadata:
  materia: "matematicas"
  tema: "polinomios_factoreo"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  x: random(1, 15)
  a: random(2, 10)
  p: random(2, 10)
  q: random(2, 10)
  original: a * p * x + a * q
  error: uno_de([0, 0, 1, -1])
  a_propuesto: a + error

respuesta: ((a_propuesto * (p * x + q)) == original)
tipo: vf

enunciado: "{a * p}x + {a * q} se factorea proponiendo {a_propuesto}({p}x + {q}). ¿Es correcto ese factoreo?"

explicacion: |
  El factor común correcto es {a} — cualquier otro número, aunque
  cercano, no reproduce el polinomio original al multiplicar.
```

## Sección: proporcionalidad-funcion (28 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "basico"
  tags: ["directa"]

variables:
  k: random(2, 20)
  x: random(1, 15)
  oy: k * x

respuesta: oy / x
tipo: input
tolerancia_abs: 0

enunciado: "y es directamente proporcional a x. Si x = {x} e y = {oy}, ¿cuál es la constante de proporcionalidad k?"

explicacion: |
  k = y/x = {oy}/{x} = {oy / x}.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "basico"
  tags: ["directa"]

variables:
  k: random(2, 20)
  x: random(1, 30)

respuesta: k * x
tipo: input
tolerancia_abs: 0

enunciado: "y = {k}x (proporcionalidad directa). ¿Cuánto vale y cuando x = {x}?"

explicacion: |
  y = {k}×{x} = {k * x}.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "intermedio"
  tags: ["directa"]

variables:
  k: random(2, 15)
  x_sol: random(1, 20)
  oy: k * x_sol

respuesta: x_sol
tipo: input
tolerancia_abs: 0

enunciado: "y = {k}x. ¿Para qué valor de x es y = {oy}?"

explicacion: |
  x = y/k = {oy}/{k} = {oy / k}.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "intermedio"
  tags: ["directa", "problema"]

variables:
  precio_kg: random(200, 2000)
  kg1: random(1, 10)
  kg2: random(1, 20)
  costo1: precio_kg * kg1

respuesta: precio_kg * kg2
tipo: input
tolerancia_abs: 0

enunciado: "{kg1} kg de un producto cuestan {costo1}. ¿Cuánto cuestan {kg2} kg (proporcionalidad directa)?"

pasos:
  - "k = {costo1}/{kg1} = {precio_kg} (precio por kg)"
  - "{kg2} kg cuestan {precio_kg}×{kg2} = {precio_kg * kg2}"

explicacion: |
  Es la misma regla de tres directa de `../regla-de-tres-directa/`,
  mirada ahora como una función y=kx.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "intermedio"
  tags: ["directa", "verificacion", "verdadero_falso"]

variables:
  k: random(2, 15)
  x1: random(1, 10)
  x2: random(11, 20)
  y1: k * x1
  y2: k * x2

respuesta: ((y1 / x1) == (y2 / x2))
tipo: vf

enunciado: "Un par de valores es ({x1}, {y1}) y otro es ({x2}, {y2}). ¿Son directamente proporcionales (o sea, y/x da lo mismo en los dos)?"

explicacion: |
  y₁/x₁ = {y1 / x1}, y₂/x₂ = {y2 / x2} — coinciden, así que sí son
  directamente proporcionales.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "intermedio"
  tags: ["directa", "verificacion", "verdadero_falso"]

variables:
  k1: random(2, 10)
  k2: random(11, 20)
  x1: random(1, 10)
  x2: random(1, 10)
  y1: k1 * x1
  y2: k2 * x2

respuesta: ((y1 / x1) == (y2 / x2))
tipo: vf

enunciado: "Un par de valores es ({x1}, {y1}) y otro es ({x2}, {y2}). ¿Son directamente proporcionales?"

explicacion: |
  y₁/x₁ = {y1 / x1}, y₂/x₂ = {y2 / x2} — al no coincidir, no son
  directamente proporcionales.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "basico"
  tags: ["inversa"]

variables:
  x: random(2, 15)
  oy: random(2, 15)

respuesta: x * oy
tipo: input
tolerancia_abs: 0

enunciado: "y es inversamente proporcional a x. Si x = {x} e y = {oy}, ¿cuál es la constante de proporcionalidad k?"

explicacion: |
  k = x×y = {x}×{oy} = {x * oy}.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "intermedio"
  tags: ["inversa"]

variables:
  x: random(2, 12)
  y_deseado: random(2, 15)
  k: x * y_deseado

respuesta: k / x
tipo: input
tolerancia_abs: 0

enunciado: "y = {k}/x (proporcionalidad inversa). ¿Cuánto vale y cuando x = {x}?"

explicacion: |
  y = {k}/{x} = {k / x}.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "intermedio"
  tags: ["inversa"]

variables:
  x_sol: random(2, 15)
  oy: random(2, 15)
  k: x_sol * oy

respuesta: x_sol
tipo: input
tolerancia_abs: 0

enunciado: "y = {k}/x. ¿Para qué valor de x es y = {oy}?"

explicacion: |
  x = k/y = {k}/{oy} = {k / oy}.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "intermedio"
  tags: ["inversa", "problema"]

variables:
  dias1: random(2, 15)
  dias2: random(2, 15)
  m: random(2, 8)
  obreros1: dias2 * m
  obreros2: dias1 * m
  trabajo_total: obreros1 * dias1

respuesta: dias2
tipo: input
tolerancia_abs: 0

enunciado: "{obreros1} obreros tardan {dias1} días en hacer un trabajo. ¿Cuántos días tardarían {obreros2} obreros (al mismo ritmo cada uno)?"

pasos:
  - "k = {obreros1}×{dias1} = {trabajo_total} (trabajo total)"
  - "días = {trabajo_total}/{obreros2} = {dias2}"

explicacion: |
  Es la misma regla de tres inversa de `../regla-de-tres-inversa/`,
  mirada como función y=k/x.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "intermedio"
  tags: ["inversa", "verificacion", "verdadero_falso"]

variables:
  x1: random(2, 8)
  x2: random(2, 8)
  m: random(2, 10)
  y1: x2 * m
  y2: x1 * m
  k: x1 * y1

respuesta: ((x1 * y1) == (x2 * y2))
tipo: vf

enunciado: "Dos pares de valores son ({x1}, {y1}) y ({x2}, {y2}), ambos con y=k/x para k={k}. ¿Es cierto que x×y da lo mismo en ambos casos?"

explicacion: |
  El producto x×y siempre da k, sea cual sea el par — eso es justamente
  lo que define a la proporcionalidad inversa.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "avanzado"
  tags: ["inversa", "verificacion", "verdadero_falso"]

variables:
  k: random(2, 15)
  x1: random(1, 10)
  x2: random(11, 20)
  y1: k * x1
  y2: k * x2

respuesta: ((x1 * y1) == (x2 * y2))
tipo: vf

enunciado: "Un par de valores es ({x1}, {y1}) y otro es ({x2}, {y2}) (que en realidad son directamente proporcionales). ¿Son también inversamente proporcionales (x×y constante)?"

explicacion: |
  x₁×y₁ = {x1 * y1}, x₂×y₂ = {x2 * y2} — no coinciden: una relación
  directamente proporcional casi nunca es, a la vez, inversamente
  proporcional.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "intermedio"
  tags: ["opcion_multiple"]

respuesta: "Directa"
tipo: mc
opciones_explicitas:
  - "Directa"
  - "Inversa"
  - "Ninguna de las dos"

enunciado: "x: 2, 4, 6 — y: 10, 20, 30. El cociente y/x siempre da 5. ¿Es directa o inversa?"

explicacion: |
  El cociente y/x constante es la marca de la proporcionalidad directa.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "intermedio"
  tags: ["opcion_multiple"]

respuesta: "Inversa"
tipo: mc
opciones_explicitas:
  - "Inversa"
  - "Directa"
  - "Ninguna de las dos"

enunciado: "x: 2, 4, 6 — y: 12, 6, 4. El producto x×y siempre da 24. ¿Es directa o inversa?"

explicacion: |
  El producto x×y constante es la marca de la proporcionalidad inversa.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El gráfico de una relación de proporcionalidad directa siempre pasa por el origen (0,0)."

explicacion: |
  y=kx da y=0 cuando x=0 — siempre pasa por el origen.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "El gráfico de una relación de proporcionalidad inversa pasa por el origen (0,0), igual que la directa."

explicacion: |
  La inversa (y=k/x) ni siquiera está definida en x=0 — no puede pasar
  por ese punto.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "intermedio"
  tags: ["concepto", "dominio", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El dominio de y = k/x son todos los reales excepto 0."

explicacion: |
  x=0 haría que el denominador se anule — mismo criterio que
  `../funcion-dominio/`.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La proporcionalidad directa y=kx es el caso particular de una función lineal y=mx+b, con b=0."

explicacion: |
  k hace el papel de la pendiente m, y la ordenada al origen es 0.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "La proporcionalidad inversa y=k/x también es una función lineal, como la directa."

explicacion: |
  No: su gráfico es una hipérbola, no una recta — x no tiene exponente 1
  en una posición lineal, está dividiendo.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

variables:
  k: random(1, 15)

respuesta: verdadero
tipo: vf

enunciado: "En y = {k}x (con k positivo), si x aumenta, y también aumenta."

explicacion: |
  Con k positivo, la relación es directamente proporcional: los dos
  crecen juntos.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

variables:
  k: random(1, 15)

respuesta: falso

tipo: vf

enunciado: "En y = {k}/x (con k positivo), si x aumenta, y también aumenta."

explicacion: |
  Al revés: si x aumenta, y DISMINUYE — el producto x×y se mantiene
  constante.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "avanzado"
  tags: ["inversa", "problema"]

variables:
  tiempo1: random(1, 10)
  tiempo2: random(1, 10)
  m: random(5, 20)
  velocidad1: tiempo2 * m
  velocidad2: tiempo1 * m
  distancia: velocidad1 * tiempo1

respuesta: tiempo2
tipo: input
tolerancia_abs: 0

enunciado: "Un viaje a {velocidad1} km/h tarda {tiempo1} horas. ¿Cuánto tardaría el mismo viaje a {velocidad2} km/h?"

pasos:
  - "La distancia (constante) es {velocidad1}×{tiempo1} = {distancia} km"
  - "tiempo = {distancia}/{velocidad2} = {tiempo2}"

explicacion: |
  A distancia fija, velocidad y tiempo son inversamente proporcionales:
  cuanto más rápido, menos tiempo.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  k: random(2, 20)
  x: random(1, 15)
  oy: k * x
  error: uno_de([0, 0, 1, -1])
  propuesto: k + error

respuesta: (propuesto == k)
tipo: vf

enunciado: "y es directamente proporcional a x, con x = {x} e y = {oy}. ¿Es correcto que la constante k sea {propuesto}?"

explicacion: |
  k = y/x = {oy / x}.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  x: random(2, 15)
  oy: random(2, 15)
  real: x * oy
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "y es inversamente proporcional a x, con x = {x} e y = {oy}. ¿Es correcto que la constante k sea {propuesto}?"

explicacion: |
  k = x×y = {real}.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "avanzado"
  tags: ["concepto", "signos", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Una proporcionalidad directa también puede tener constante k negativa (y = −3x, por ejemplo) — en ese caso, cuando x crece, y decrece."

explicacion: |
  El signo de k determina si es creciente o decreciente, pero sigue
  siendo "directamente proporcional" mientras el cociente y/x sea
  constante.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "intermedio"
  tags: ["directa", "problema"]

variables:
  escala: random(2, 8)
  medida_real: random(5, 50)

respuesta: medida_real * escala
tipo: input
tolerancia_abs: 0

enunciado: "En un plano, cada medida real se multiplica por {escala} para dibujarla a escala. Si una pared mide {medida_real} en la realidad, ¿cuánto mide en el plano?"

explicacion: |
  Es una proporcionalidad directa simple, con k={escala}.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Repartir un monto en partes directamente proporcionales a distintos valores (por ejemplo, según horas trabajadas) usa la misma idea de y=kx, con una k común para todos."

explicacion: |
  Cada parte se calcula como k×(su valor correspondiente), con el mismo
  k para todos los repartos.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "intermedio"
  tags: ["opcion_multiple"]

respuesta: "Inversa (más grifos, menos tiempo)"
tipo: mc
opciones_explicitas:
  - "Inversa (más grifos, menos tiempo)"
  - "Directa (más grifos, más tiempo)"

enunciado: "Llenar un tanque con más grifos abiertos a la vez tarda menos tiempo. ¿Es una relación directa o inversa entre cantidad de grifos y tiempo?"

explicacion: |
  A más grifos, menos tiempo — el producto (grifos×tiempo) es lo que se
  mantiene constante: proporcionalidad inversa.
```

## Sección: division-polinomios-ruffini (26 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "basico"
  tags: ["teorema_resto"]

variables:
  c3: random(1, 5)
  c2: random(-5, 5)
  c1: random(-5, 5)
  c0: random(-10, 10)
  a: random(1, 6)

respuesta: c3 * a ^ 3 + c2 * a ^ 2 + c1 * a + c0
tipo: input
tolerancia_abs: 0

enunciado: "P(x) = {c3}x³ + {c2}x² + {c1}x + {c0}. Por el teorema del resto, ¿cuál es el resto de dividir P(x) por (x − {a})?"

pasos:
  - "El resto es P({a}) = {c3}×{a}³ + {c2}×{a}² + {c1}×{a} + {c0} = {c3 * a ^ 3 + c2 * a ^ 2 + c1 * a + c0}"

explicacion: |
  No hace falta dividir: el resto es directamente el valor del polinomio
  evaluado en a.
```

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "intermedio"
  tags: ["teorema_resto", "signos"]

variables:
  c2: random(1, 6)
  c1: random(-6, 6)
  c0: random(-10, 10)
  a: random(1, 6)

respuesta: c2 * (-a) ^ 2 + c1 * (-a) + c0
tipo: input
tolerancia_abs: 0

enunciado: "P(x) = {c2}x² + {c1}x + {c0}. ¿Cuál es el resto de dividir P(x) por (x + {a})?"

pasos:
  - "(x + {a}) es lo mismo que (x − (−{a})), así que se evalúa en x = −{a}"

explicacion: |
  Dividir por (x+a) equivale a evaluar en x = −a, no en x = a — un
  descuido común de signo.
```

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "basico"
  tags: ["teorema_resto"]

variables:
  c3: random(1, 4)
  c1: random(-8, 8)
  c0: random(-10, 10)
  a: random(1, 5)

respuesta: c3 * a ^ 3 + c1 * a + c0
tipo: input
tolerancia_abs: 0

enunciado: "P(x) = {c3}x³ + {c1}x + {c0} (sin término x²). ¿Cuál es el resto de dividir P(x) por (x − {a})?"

explicacion: |
  Falta el término x², pero el procedimiento es el mismo: evaluar en
  x = {a}.
```

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "intermedio"
  tags: ["ruffini"]

variables:
  c3: random(1, 5)
  c2: random(-8, 8)
  a: random(1, 6)

respuesta: c2 + c3 * a
tipo: input
tolerancia_abs: 0

enunciado: "Dividiendo por Ruffini un polinomio con coeficientes {c3}, {c2}, ... por (x − {a}): se baja el {c3}, se multiplica por {a}, y se suma al siguiente coeficiente ({c2}). ¿Qué número queda?"

explicacion: |
  {c2} + ({c3}×{a}) = {c2 + c3 * a}.
```

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "intermedio"
  tags: ["ruffini"]

variables:
  c3: random(1, 5)
  c2: random(-8, 8)
  c1: random(-8, 8)
  a: random(1, 6)
  paso2: c2 + c3 * a

respuesta: c1 + paso2 * a
tipo: input
tolerancia_abs: 0

enunciado: "Siguiendo Ruffini: el paso anterior dio {paso2}. Se multiplica por {a} y se suma al siguiente coeficiente ({c1}). ¿Qué número queda?"

explicacion: |
  {c1} + ({paso2}×{a}) = {c1 + paso2 * a}.
```

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "avanzado"
  tags: ["ruffini"]

variables:
  c3: random(1, 4)
  c2: random(-6, 6)
  c1: random(-6, 6)
  c0: random(-10, 10)
  a: random(1, 5)
  paso2: c2 + c3 * a
  paso3: c1 + paso2 * a

respuesta: c0 + paso3 * a
tipo: input
tolerancia_abs: 0

enunciado: "Último paso de Ruffini: el paso anterior dio {paso3}. Se multiplica por {a} y se suma al término independiente ({c0}). ¿Cuál es el resto?"

explicacion: |
  {c0} + ({paso3}×{a}) = {c0 + paso3 * a} — este último número es el
  resto de la división.
```

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "avanzado"
  tags: ["verificacion", "verdadero_falso"]

variables:
  c3: random(1, 4)
  c2: random(-6, 6)
  c1: random(-6, 6)
  c0: random(-10, 10)
  a: random(1, 5)
  paso2: c2 + c3 * a
  paso3: c1 + paso2 * a
  resto_ruffini: c0 + paso3 * a
  resto_teorema: c3 * a ^ 3 + c2 * a ^ 2 + c1 * a + c0

respuesta: (resto_ruffini == resto_teorema)
tipo: vf

enunciado: "P(x) = {c3}x³ + {c2}x² + {c1}x + {c0}. ¿El resto que da Ruffini al dividir por (x−{a}) coincide con P({a}) calculado directamente?"

explicacion: |
  Tienen que coincidir siempre — son dos formas distintas de calcular
  exactamente lo mismo.
```

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "intermedio"
  tags: ["teorema_factor", "verdadero_falso"]

variables:
  r: random(1, 10)
  c1: random(1, 8)
  c0: -c1 * r
  a: uno_de([r, r + 1, r - 1, r + 2])

respuesta: ((c1 * a + c0) == 0)
tipo: vf

enunciado: "P(x) = {c1}x + {c0}. ¿Es (x − {a}) un factor de P(x)?"

explicacion: |
  (x−{a}) es factor si y sólo si P({a}) = 0 — se verifica evaluando.
```

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "avanzado"
  tags: ["teorema_factor", "verdadero_falso"]

variables:
  r1: random(1, 5)
  r2: random(1, 5)
  a: uno_de([r1, r2, r1 + r2])

respuesta: (((a - r1) * (a - r2) * a) == 0)
tipo: vf

enunciado: "P(x) = x(x − {r1})(x − {r2}) (ya factoreado). ¿Es (x − {a}) uno de sus factores?"

explicacion: |
  Los únicos factores de la forma (x−k) son con k = 0, {r1} o {r2} — los
  valores que hacen 0 a cada factor.
```

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El resto de dividir P(x) por (x − a) es igual a P(a)."

explicacion: |
  Es el enunciado exacto del teorema del resto.
```

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Si P(a) = 0, entonces (x − a) es un factor de P(x)."

explicacion: |
  Es el corolario directo del teorema del resto: resto 0 significa
  división exacta, o sea, (x−a) divide a P(x) sin dejar resto.
```

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "intermedio"
  tags: ["concepto", "signos", "opcion_multiple"]

variables:
  k: random(1, 15)

respuesta: -k
tipo: mc
opciones_explicitas:
  - -k
  - k

enunciado: "Para dividir un polinomio por (x + {k}) usando Ruffini, ¿qué valor de a hay que usar?"

explicacion: |
  (x + {k}) = (x − (−{k})), así que a = −{k}, no {k}.
```

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "La regla de Ruffini se puede usar para dividir por cualquier polinomio, sin importar su grado."

explicacion: |
  Ruffini sólo funciona para divisores de la forma (x − a) — un binomio
  de grado 1 con coeficiente 1 en x.
```

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Para aplicar Ruffini a x³ − 1, hay que usar los coeficientes 1, 0, 0, −1 (completando con ceros los grados que no aparecen)."

explicacion: |
  Faltan los términos x² y x — sus coeficientes son 0, y hay que
  incluirlos para que Ruffini funcione bien.
```

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "intermedio"
  tags: ["concepto"]

variables:
  n: random(2, 8)

respuesta: n - 1
tipo: input
tolerancia_abs: 0

enunciado: "Al dividir un polinomio de grado {n} por (x − a), ¿qué grado tiene el cociente?"

explicacion: |
  Siempre un grado menos que el polinomio original, porque se le "saca"
  el factor (x−a), de grado 1.
```

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "avanzado"
  tags: ["verificacion", "verdadero_falso"]

variables:
  x: random(1, 15)
  a: random(1, 8)
  q1: random(1, 6)
  q0: random(-8, 8)
  r: random(1, 9)

respuesta: (((x - a) * (q1 * x + q0) + r) == ((q1 * x ^ 2 + (q0 - a * q1) * x + (r - a * q0))))
tipo: vf

enunciado: "Si el cociente de dividir P(x) por (x−{a}) es {q1}x+{q0}, y el resto es {r}, ¿P(x) tiene que ser igual a (x−{a})({q1}x+{q0})+{r}, evaluado en x={x}?"

explicacion: |
  Es la verificación general de cualquier división: dividendo = divisor
  × cociente + resto.
```

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  c2: random(1, 6)
  c1: random(-8, 8)
  c0: random(-10, 10)
  a: random(1, 6)
  real: c2 * a ^ 2 + c1 * a + c0
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "P(x) = {c2}x² + {c1}x + {c0}. ¿Es correcto que el resto de dividir por (x−{a}) sea {propuesto}?"

explicacion: |
  El resto correcto es P({a}) = {real}.
```

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "basico"
  tags: ["ruffini"]

variables:
  c2: random(1, 8)
  c1: random(-8, 8)
  c0: random(-10, 10)

respuesta: c0
tipo: input
tolerancia_abs: 0

enunciado: "P(x) = {c2}x² + {c1}x + {c0}. ¿Cuál es el resto de dividir P(x) por x (o sea, por x − 0)?"

explicacion: |
  P(0) = {c0} — el término independiente es directamente el resto de
  dividir por x.
```

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "avanzado"
  tags: ["teorema_factor"]

variables:
  r: random(1, 12)

respuesta: r
tipo: input
tolerancia_abs: 0

enunciado: "Se sabe que P(x) = x − {r} tiene resto 0 al dividir por (x − k), para un único valor de k. ¿Cuánto vale k?"

explicacion: |
  P(x) es cero exactamente en x = {r} — ese es el único k para el que
  (x−k) divide exacto a P(x).
```

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "avanzado"
  tags: ["ruffini", "signos"]

variables:
  c2: random(-8, -2)
  c1: random(-8, 8)
  a: random(1, 6)

respuesta: c1 + c2 * a
tipo: input
tolerancia_abs: 0

enunciado: "Dividiendo por Ruffini {c2}x² + {c1}x + ... por (x − {a}): se baja {c2}, se multiplica por {a} y se suma al siguiente coeficiente ({c1}). ¿Qué número queda?"

explicacion: |
  El procedimiento no cambia con coeficientes negativos, sólo hay que
  llevar el signo con cuidado.
```

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Un polinomio de grado n puede tener, como máximo, n factores distintos de la forma (x − a)."

explicacion: |
  Cada factor (x−a) resta 1 al grado del cociente — no puede haber más
  factores lineales que el grado total del polinomio.
```

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "avanzado"
  tags: ["teorema_factor", "verdadero_falso"]

variables:
  a: random(1, 5)
  b: random(1, 5)
  c: random(1, 5)
  candidato: uno_de([a, b, c, a + b + c])

respuesta: (((candidato - a) * (candidato - b) * (candidato - c)) == 0)
tipo: vf

enunciado: "P(x) = (x−{a})(x−{b})(x−{c}). ¿Es x = {candidato} una raíz de P(x) (o sea, P({candidato}) = 0)?"

explicacion: |
  Un producto da 0 si y sólo si alguno de sus factores da 0 — se verifica
  si {candidato} coincide con {a}, {b} o {c}.
```

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "intermedio"
  tags: ["ruffini", "opcion_multiple"]

respuesta: "El primer coeficiente se baja igual, sin cambios"
tipo: mc
opciones_explicitas:
  - "El primer coeficiente se baja igual, sin cambios"
  - "El primer coeficiente se multiplica por a antes de bajar"
  - "El primer coeficiente pasa a ser el resto"

enunciado: "En el primer paso de Ruffini, ¿qué se hace con el primer coeficiente del polinomio?"

explicacion: |
  Se "baja" directamente, sin ninguna operación — recién el segundo paso
  en adelante involucra multiplicar y sumar.
```

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El teorema del resto sirve para probar rápidamente si un número candidato es raíz de un polinomio, antes de intentar factorearlo por completo."

explicacion: |
  En vez de adivinar un factoreo a ojo, se prueban candidatos evaluando
  P(a) — si da 0, ya se encontró un factor real.
```

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "avanzado"
  tags: ["ruffini", "teorema_resto"]

variables:
  c4: random(1, 3)
  c3: random(-5, 5)
  c2: random(-5, 5)
  c1: random(-5, 5)
  c0: random(-8, 8)
  a: random(1, 4)

respuesta: c4 * a ^ 4 + c3 * a ^ 3 + c2 * a ^ 2 + c1 * a + c0
tipo: input
tolerancia_abs: 0

enunciado: "P(x) = {c4}x⁴ + {c3}x³ + {c2}x² + {c1}x + {c0}. ¿Cuál es el resto de dividir P(x) por (x − {a})?"

explicacion: |
  El teorema del resto funciona igual sin importar el grado del
  polinomio: siempre alcanza con evaluar en x = {a}.
```

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "El resto de dividir un polinomio por (x − a) siempre da 0."

explicacion: |
  Sólo da 0 cuando (x−a) es efectivamente un factor del polinomio — en
  general, puede dar cualquier número.
```

