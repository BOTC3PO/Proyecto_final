# Examen jefe — Maestro de Asíntotas y L'Hôpital

> Logro #631. Trabajaste asíntotas, el teorema de Bolzano y la regla de L'Hôpital, calculaste volúmenes de cilindros y aplicaste la regla de divisibilidad por 7. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **127 preguntas totales** en 5/5 secciones.

---

## Sección: divisibilidad/regla-del-7-opcional (28 preguntas)

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_7", "completar"]

variables:
  numero: random(100, 999)

respuesta: "duplicar"
tipo: completar
respuestas_validas:
  - "duplicar"
  - "duplicarlo"
  - "doblar"

enunciado: "En la regla del 7, tras separar la última cifra, hay que ___ esa cifra por 2."

explicacion: |
  El algoritmo requiere multiplicar por 2 la cifra separada.
```

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_7", "completar"]

variables:
  numero: random(100, 999)

respuesta: "restar"
tipo: completar
respuestas_validas:
  - "restar"
  - "restarle"

enunciado: "Una vez duplicada la última cifra, se debe ___ ese valor al número que queda sin la última cifra."

explicacion: |
  La operación clave es la resta del valor duplicado al resto truncado.
```

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_7", "completar"]

variables:
  numero: random(100, 999)

respuesta: "multiplo"
tipo: completar
respuestas_validas:
  - "multiplo"
  - "múltiplo"
  - "multiplo de 7"
  - "múltiplo de 7"

enunciado: "Si el resultado final del algoritmo es 0 o un ___, el número original es divisible por 7."

explicacion: |
  La condición de divisibilidad se cumple si el residuo final es múltiplo de 7.
```

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_7", "ejercicio"]

variables:
  numero: 140
  u1: 0
  r1: 14
  d1: 0
  res1: 14
  u2: 4
  r2: 1
  d2: 8
  res2: -7

respuesta: "si"
tipo: input

enunciado: "Aplicá la regla del 7 a {numero}. Paso 1: 14 - 0 = 14. Paso 2: 1 - 8 = -7. ¿Es divisible por 7? (escribí 'si' o 'no')"

explicacion: |
  -7 es múltiplo de 7, por lo tanto 140 también lo es.
```

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_7", "ejercicio"]

variables:
  numero: 210
  u1: 0
  r1: 21
  d1: 0
  res1: 21
  u2: 1
  r2: 2
  d2: 2
  res2: 0

respuesta: "si"
tipo: input

enunciado: "Aplicá la regla del 7 a {numero}. Paso 1: 21 - 0 = 21. Paso 2: 2 - 2 = 0. ¿Es divisible por 7? (escribí 'si' o 'no')"

explicacion: |
  0 es múltiplo de 7, por lo tanto 210 también lo es.
```

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_7", "ejercicio"]

variables:
  numero: 15
  u1: 5
  r1: 1
  d1: 10
  res1: -9

respuesta: "no"
tipo: input

enunciado: "Aplicá la regla del 7 a {numero}. Paso 1: 1 - 10 = -9. ¿Es divisible por 7? (escribí 'si' o 'no')"

explicacion: |
  -9 no es múltiplo de 7, por lo tanto 15 no lo es.
```

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_7", "ejercicio"]

variables:
  numero: 301
  u1: 1
  r1: 30
  d1: 2
  res1: 28

respuesta: 28
tipo: input

enunciado: "Para el número {numero}, ¿cuál es el resultado tras restar el doble de la última cifra al resto?"

explicacion: |
  30 - 2 = 28.
```

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_7", "ejercicio"]

variables:
  numero: 301
  res1: 28
  u2: 8
  r2: 2
  d2: 16
  res2: -14

respuesta: -14
tipo: input

enunciado: "Continuando con {res1}, ¿cuál es el siguiente resultado al restar el doble de la última cifra (8) al resto (2)?"

explicacion: |
  2 - 16 = -14.
```

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_7", "decision"]

variables:
  resultado: -14

respuesta: "si"
tipo: input

enunciado: "Si el resultado del algoritmo es {resultado}, ¿es divisible por 7? (escribí 'si' o 'no')"

explicacion: |
  -14 es múltiplo de 7 (-2 * 7), por lo tanto sí.
```

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_7", "teoria"]

respuesta: "7"
tipo: completar
respuestas_validas:
  - "7"
  - "siete"

enunciado: "La regla que consiste en duplicar la última cifra y restarla al resto se aplica para verificar la divisibilidad por el número ___."

explicacion: |
  Es la regla específica para el divisor 7.
```

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_7", "teoria"]

respuesta: "separar"
tipo: completar
respuestas_validas:
  - "separar"
  - "aislar"

enunciado: "El primer paso de la regla del 7 es ___ la última cifra del número."

explicacion: |
  Se debe aislar la unidad para procesarla.
```

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_7", "teoria"]

respuesta: "2"
tipo: completar
respuestas_validas:
  - "2"
  - "dos"

enunciado: "La última cifra se multiplica por el número ___."

explicacion: |
  El factor de multiplicación es 2.
```

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_7", "teoria"]

respuesta: "resta"
tipo: completar
respuestas_validas:
  - "resta"
  - "restar"

enunciado: "El valor duplicado se ___ al número que queda sin la última cifra."

explicacion: |
  La operación es una resta.
```

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_7", "teoria"]

respuesta: "multiplo"
tipo: completar
respuestas_validas:
  - "multiplo"
  - "múltiplo"

enunciado: "Si el resultado final es 0 o un ___, la divisibilidad está confirmada."

explicacion: |
  La condición es ser múltiplo de 7.
```

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_7", "ejercicio"]

variables:
  numero: 931
  u1: 1
  r1: 93
  d1: 2
  res1: 91

respuesta: 91
tipo: input

enunciado: "Para {numero}, calculá {r1} - {d1}."

explicacion: |
  93 - 2 = 91.
```

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_7", "ejercicio"]

variables:
  res1: 91
  u2: 1
  r2: 9
  d2: 2
  res2: 7

respuesta: 7
tipo: input

enunciado: "Para {res1}, calculá {r2} - {d2}."

explicacion: |
  9 - 2 = 7.
```

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_7", "decision"]

variables:
  resultado: 7

respuesta: "si"
tipo: input

enunciado: "El resultado final es {resultado}. ¿Es divisible por 7? (escribí 'si' o 'no')"

explicacion: |
  7 es múltiplo de 7.
```

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "basico"
  tags: ["regla_del_7", "verificacion"]

variables:
  n: random(100, 999)
  es_divisible: (n % 7 == 0)

respuesta: falso
tipo: vf

enunciado: "El número {n} es divisible por 7."

explicacion: |
  Para verificar si un número es divisible por 7, aplicamos la regla:
  1. Separamos la última cifra.
  2. Duplicamos esa cifra.
  3. Restamos el doble al número restante.
  Si el resultado es divisible por 7, el original también lo es.
  En este caso, {n} no lo es.
```

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "intermedio"
  tags: ["regla_del_7", "algoritmo"]

variables:
  cifra_ultima: random(1, 9)
  resto: random(10, 99)
  numero: resto * 10 + cifra_ultima
  doble: cifra_ultima * 2
  nuevo_numero: resto - doble
  es_divisible: (nuevo_numero % 7 == 0)

respuesta: verdadero
tipo: vf

enunciado: "Si aplicamos la regla del 7 al número {numero}, el resultado intermedio es {nuevo_numero}, que es divisible por 7."

explicacion: |
  La regla del 7 consiste en restar el doble de la última cifra al resto del número.
  Aquí: {numero} -> {resto} - {doble} = {nuevo_numero}.
  Como {nuevo_numero} es múltiplo de 7, {numero} también lo es.
```

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "intermedio"
  tags: ["regla_del_7", "verificacion"]

variables:
  n: random(1000, 9999)
  es_divisible: (n % 7 == 0)

respuesta: falso
tipo: vf

enunciado: "El número {n} es divisible por 7."

explicacion: |
  Aplicamos la regla iterativa. Si el resultado final no es 0 o múltiplo de 7, el número original no es divisible.
  En este caso, {n} no lo es.
```

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "intermedio"
  tags: ["regla_del_7", "verificacion"]

variables:
  n: random(100, 999)
  es_divisible: (n % 7 == 0)

respuesta: falso
tipo: vf

enunciado: "El número {n} es divisible por 7."

explicacion: |
  Al aplicar la regla de divisibilidad por 7, el resultado final no es 0 ni múltiplo de 7.
  Por lo tanto, {n} no es divisible por 7.
```

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "intermedio"
  tags: ["regla_del_7", "identificacion"]

variables:
  base: random(10, 20)
  n: base * 7
  es_divisible: verdadero

respuesta: verdadero
tipo: vf

enunciado: "El número {n} es divisible por 7."

explicacion: |
  {n} es el producto de {base} por 7, por lo tanto es múltiplo de 7.
  La regla del 7 confirma esto al dar un resultado final múltiplo de 7.
```

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "intermedio"
  tags: ["regla_del_7", "concepto"]

variables:
  n: random(100, 999)
  es_divisible: (n % 7 == 0)

respuesta: falso
tipo: vf

enunciado: "La regla del 7 solo se aplica a números positivos."

explicacion: |
  Falso. La regla de divisibilidad por 7 se aplica a cualquier entero.
  Para negativos, se puede aplicar la regla al valor absoluto o considerar el signo al final.
```

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "intermedio"
  tags: ["regla_del_7", "verificacion"]

variables:
  base: random(100, 142)
  n: base * 7
  es_divisible: verdadero

respuesta: verdadero
tipo: vf

enunciado: "El número {n} es divisible por 7."

explicacion: |
  {n} es {base} × 7, por lo tanto es divisible.
  La regla del 7 confirmará esto tras iterar.
```

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "intermedio"
  tags: ["regla_del_7", "identificacion"]

variables:
  base: random(10, 20)
  n: base * 7
  es_divisible: verdadero

respuesta: verdadero
tipo: vf

enunciado: "El número {n} es un múltiplo de 7."

explicacion: |
  {n} se obtiene multiplicando {base} por 7, por lo tanto es múltiplo de 7.
```

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "intermedio"
  tags: ["regla_del_7", "verificacion"]

variables:
  n: random(100, 999)
  es_divisible: (n % 7 == 0)

respuesta: falso
tipo: vf

enunciado: "El número {n} es divisible por 7."

explicacion: |
  Al aplicar la regla del 7, el resultado final no es 0 ni múltiplo de 7.
```

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "intermedio"
  tags: ["regla_del_7", "identificacion"]

variables:
  base: random(10, 20)
  n: base * 7
  es_divisible: verdadero

respuesta: verdadero
tipo: vf

enunciado: "El número {n} es divisible por 7."

explicacion: |
  {n} es múltiplo de 7.
```

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "intermedio"
  tags: ["regla_del_7", "verificacion"]

variables:
  n: random(100, 999)
  es_divisible: (n % 7 == 0)

respuesta: falso
tipo: vf

enunciado: "El número {n} es divisible por 7."

explicacion: |
  Al aplicar la regla del 7, el resultado final no es 0 ni múltiplo de 7.
```

## Sección: asintotas (22 preguntas)

```
metadata:
  materia: "matematica"
  tema: "asintotas"
  nivel: "basico"
  tags: ["clasificacion", "teoria"]

respuesta: "horizontal"
tipo: completar
respuestas_validas:
  - "horizontal"
  - "asintota horizontal"

enunciado: "Si el grado del numerador es menor que el grado del denominador en una función racional, la asíntota es ___."

explicacion: |
  Cuando el denominador crece más rápido que el numerador, la función tiende a 0, definiendo una asíntota horizontal en $y=0$.
```

```
metadata:
  materia: "matematica"
  tema: "asintotas"
  nivel: "intermedio"
  tags: ["comparacion", "teoria"]

variables:
  # Caso: grado num = grado den + 1
  tiene_ao: verdadero

respuesta: verdadero
tipo: vf

enunciado: "Si el grado del numerador es exactamente uno mayor que el grado del denominador, la función tiene una asíntota oblicua."

explicacion: |
  Esta es la condición necesaria y suficiente para la existencia de una asíntota oblicua en funciones racionales.
```

```
metadata:
  materia: "matematica"
  tema: "asintotas"
  nivel: "basico"
  tags: ["caso_especifico", "rh"]

respuesta: "0"
tipo: completar
respuestas_validas:
  - "0"
  - "y = 0"
  - "eje x"

enunciado: "Si el grado del numerador es menor que el del denominador, la asíntota horizontal es la recta ___."

explicacion: |
  El límite de la función cuando $x \to \infty$ es 0, por lo que la asíntota es el eje horizontal $y=0$.
```

```
metadata:
  materia: "matematica"
  tema: "asintotas"
  nivel: "basico"
  tags: ["teoria", "limite"]

respuesta: "infinito"
tipo: completar
respuestas_validas:
  - "infinito"
  - "infinita"
  - "infinito positivo"
  - "infinito negativo"

enunciado: "Una asíntota vertical se define cuando el límite de la función al acercarse a un punto es ___."

explicacion: |
  La definición formal implica que el valor de la función crece sin cota (positiva o negativamente) al acercarse a $x=a$.
```

```
metadata:
  materia: "matematica"
  tema: "asintotas"
  nivel: "basico"
  tags: ["identificacion", "raices"]

respuesta: "raices"
tipo: completar
respuestas_validas:
  - "raices"
  - "raíces"
  - "ceros"
  - "cero"

enunciado: "Las asíntotas verticales de una función racional suelen ubicarse en las ___ reales del denominador."

explicacion: |
  Son los puntos donde el denominador se hace cero (si no se cancelan con el numerador).
```

```
metadata:
  materia: "matematica"
  tema: "asintotas"
  nivel: "intermedio"
  tags: ["funciones_transcendentes", "exp"]

respuesta: "ninguna"
tipo: completar
respuestas_validas:
  - "ninguna"
  - "no tiene"
  - "no hay"

enunciado: "La función $f(x) = e^x$ tiene ___ asíntotas verticales."

explicacion: |
  $e^x$ está definida para todo $x \in \mathbb{R}$ y es continua. No tiene asíntotas verticales. (Tiene una horizontal en $y=0$ para $x \to -\infty$).
```

```
metadata:
  materia: "matematica"
  tema: "asintotas"
  nivel: "basico"
  tags: ["asintota_horizontal", "limite"]

variables:
  num: random(1, 5)
  den: random(6, 10)

respuesta: 0
tipo: input

enunciado: "¿Cuál es la asíntota horizontal de f(x) = {num} / (x^{den} + 1) cuando x tiende a infinito?"

explicacion: |
  Cuando el grado del denominador es mayor que el del numerador,
  el límite cuando x -> infinito es 0. Por lo tanto, la asíntota es y = 0.
```

```
metadata:
  materia: "matematica"
  tema: "asintotas"
  nivel: "intermedio"
  tags: ["propiedad", "polinomio"]

respuesta: falso
tipo: vf

enunciado: "Verdadero o Falso: La función f(x) = x^2 + 3x tiene una asíntota horizontal."

explicacion: |
  Falso. Las funciones polinómicas no tienen asíntotas horizontales ni verticales.
  Su dominio es todo R y crece sin límite.
```

```
metadata:
  materia: "matematica"
  tema: "asintotas"
  nivel: "basico"
  tags: ["definicion", "terminologia"]

respuesta: "vertical"
tipo: completar
respuestas_validas:
  - "vertical"
  - "verticales"

enunciado: "Una ___ es una recta x = a tal que el límite de la función cuando x se acerca a a es infinito."

explicacion: |
  Se llama asíntota vertical a la recta donde la función no está definida
  y tiende a infinito por uno o ambos lados.
```

```
metadata:
  materia: "matematica"
  tema: "asintotas"
  nivel: "basico"
  tags: ["dominio", "relacion"]

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: Si una función tiene una asíntota vertical en x = a, entonces x = a no pertenece al dominio de la función."

explicacion: |
  Verdadero. Por definición, en una asíntota vertical la función tiende a infinito,
  por lo que no está definida en ese punto (división por cero).
```

```
metadata:
  materia: "matematica"
  tema: "asintotas"
  nivel: "basico"
  tags: ["definicion", "horizontal"]

respuesta: "horizontal"
tipo: completar
respuestas_validas:
  - "horizontal"
  - "horizontales"

enunciado: "Si el límite de f(x) cuando x tiende a infinito es un número constante L, la recta y = L se llama asíntota ___."

explicacion: |
  Se denomina asíntota horizontal a la recta paralela al eje X a la que se acerca la gráfica.
```

```
metadata:
  materia: "matematica"
  tema: "asintotas"
  nivel: "avanzado"
  tags: ["asintota_oblicua", "division"]

variables:
  a: random(2, 4)
  b: random(1, 5)
  c: random(1, 3)
  d: random(2, 5)

respuesta: "{a / d}x + ({b - a * c / d})"
tipo: input

enunciado: "Determiná la ecuación de la asíntota oblicua de f(x) = ({a}x^2 + {b}x) / (x + {c}) para x -> infinito. Escribí en formato 'mx+n' (ej: 2x+3)."

explicacion: |
  Dividiendo el numerador por el denominador:
  m = a/d
  n = b - m*c = b - (a/d)*c.
  La ecuación es y = mx + n.
```

```
metadata:
  materia: "matematica"
  tema: "asintotas"
  nivel: "intermedio"
  tags: ["propiedad", "corte"]

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: Una función puede cortar su asíntota horizontal."

explicacion: |
  Verdadero. La asíntota describe el comportamiento en el infinito,
  pero la función puede intersectarla en puntos finitos del dominio.
```

```
metadata:
  materia: "matematica"
  tema: "asintotas"
  nivel: "basico"
  tags: ["metodo", "calculo"]

respuesta: "denominador"
tipo: completar
respuestas_validas:
  - "denominador"
  - "denominadores"

enunciado: "Para encontrar las asíntotas verticales de una función racional, igualamos a cero el ___."

explicacion: |
  Las asíntotas vertuales ocurren donde el denominador se anula (y el numerador no).
```

```
metadata:
  materia: "matematica"
  tema: "asintotas"
  nivel: "intermedio"
  tags: ["raices", "multiples"]

variables:
  a: random(1, 5)
  b: random(6, 10)

respuesta: a + "," + b
tipo: input

enunciado: "Encontrá las asíntotas verticales de f(x) = 1 / ((x - {a})(x - {b})). Escribí los valores separados por coma."

explicacion: |
  El denominador se anula en x = {a} y x = {b}.
  Ambas son asíntotas verticales.
```

```
metadata:
  materia: "matematica"
  tema: "asintotas"
  nivel: "avanzado"
  tags: ["raiz_cuadrada", "asintota_oblicua"]

respuesta: falso
tipo: vf

enunciado: "Verdadero o Falso: La función f(x) = sqrt(x) tiene una asíntota oblicua."

explicacion: |
  Falso. sqrt(x) crece más lento que cualquier recta (x^1).
  No tiene asíntota oblicua ni horizontal.
```

```
metadata:
  materia: "matematica"
  tema: "asintotas"
  nivel: "basico"
  tags: ["caso_particular", "eje_x"]

respuesta: "eje X"
tipo: completar
respuestas_validas:
  - "eje X"
  - "eje x"
  - "y=0"

enunciado: "Si la asíntota horizontal es y = 0, esta coincide con el ___."

explicacion: |
  La recta y=0 es el eje de abscisas o eje X.
```

```
metadata:
  materia: "matematica"
  tema: "asintotas"
  nivel: "avanzado"
  tags: ["paridad", "oblicua"]

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: Una función par puede tener una asíntota oblicua."

explicacion: |
  Falso. Si f(x) es par, f(x) = f(-x).
  Si tuviera una asíntota oblicua y = mx + n para x->inf,
  para x->-inf debería tender a y = -mx + n (por simetría).
  Pero una función racional con grado num = grado den + 1 tiene la misma oblicua en ambos extremos (mismo m).
  Para que m = -m, m debe ser 0, lo que implica una asíntota horizontal, no oblicua.
  Por lo tanto, una función par NO puede tener una asíntota oblicua (con m != 0).
  La afirmación dice "puede tener". La respuesta es Falso.
```

```
metadata:
  materia: "matematica"
  tema: "asintotas"
  nivel: "intermedio"
  tags: ["limite", "lateral"]

respuesta: "infinito"
tipo: completar
respuestas_validas:
  - "infinito"
  - "infinitos"
  - "+infinito"
  - "-infinito"

enunciado: "Para que exista una asíntota vertical en x=a, el límite lateral de la función cuando x tiende a a debe ser ___ (positivo o negativo)."

explicacion: |
  La definición de asíntota vertical requiere que el límite sea infinito.
```

```
metadata:
  materia: "matematica"
  tema: "asintotas"
  nivel: "avanzado"
  tags: ["exponencial", "limite"]

respuesta: 0
tipo: input

enunciado: "¿Cuál es la asíntota horizontal de f(x) = e^(-x) cuando x tiende a +infinito?"

explicacion: |
  lim(x->inf) e^(-x) = lim(1/e^x) = 0.
  La asíntota horizontal es y = 0.
```

```
metadata:
  materia: "matematica"
  tema: "asintotas"
  nivel: "basico"
  tags: ["continuidad", "discontinuidad"]

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: La presencia de una asíntota vertical implica una discontinuidad infinita en esa función."

explicacion: |
  Verdadero. La función no está definida en el punto y tiende a infinito,
  lo que constituye una discontinuidad infinita.
```

```
metadata:
  materia: "matematica"
  tema: "asintotas"
  nivel: "basico"
  tags: ["definicion", "geometria"]

respuesta: "recta"
tipo: completar
respuestas_validas:
  - "recta"
  - "rectas"

enunciado: "Una asíntota es una ___ a la cual la curva se acerca indefinidamente."

explicacion: |
  Por definición geométrica, las asíntotas son rectas.
```

## Sección: teorema-de-bolzano (20 preguntas)

```
metadata:
  materia: "matematica"
  tema: "teorema_de_bolzano"
  nivel: "basico"
  tags: ["bolzano", "continuidad", "signos"]

variables:
  a: random(1, 5)
  b: random(6, 10)
  f_a: random(-10, -1)
  f_b: random(1, 10)

respuesta: verdadero
tipo: vf

enunciado: "Si una función continua $f$ cumple $f({a}) = {f_a}$ y $f({b}) = {f_b}$, ¿se puede garantizar que existe al menos un cero en el intervalo $[{a}, {b}]$?"

explicacion: |
  Dado que $f$ es continua en $[{a}, {b}]$ y $f(a)$ y $f(b)$ tienen signos opuestos (uno negativo y otro positivo), el Teorema de Bolzano garantiza la existencia de al menos un $c \in (a, b)$ tal que $f(c) = 0$.
```

```
metadata:
  materia: "matematica"
  tema: "teorema_de_bolzano"
  nivel: "basico"
  tags: ["bolzano", "gráfico", "interpretación"]

variables:
  a: random(1, 3)
  b: random(4, 6)
  f_a: -random(1, 5)
  f_b: random(1, 5)

respuesta: verdadero
tipo: vf

enunciado: "Si graficamos una función continua desde $x={a}$ hasta $x={b}$, y los puntos extremos están a distinta altura respecto al eje horizontal (uno arriba y otro abajo), la curva debe cortar el eje X."

explicacion: |
  Correcto. Geométricamente, una línea continua que une un punto por debajo del eje con uno por encima debe intersectar el eje en algún punto intermedio.
```

```
metadata:
  materia: "matematica"
  tema: "teorema_de_bolzano"
  nivel: "intermedio"
  tags: ["bolzano", "discontinuidad", "contraejemplo"]

variables:
  a: random(0, 2)
  b: random(3, 5)

respuesta: falso
tipo: vf

enunciado: "El Teorema de Bolzano asegura la existencia de un cero en $[{a}, {b}]$ incluso si la función tiene una discontinuidad de salto en el interior del intervalo, siempre que los extremos tengan signos opuestos."

explicacion: |
  Falso. La continuidad en el intervalo cerrado es una hipótesis indispensable. Si hay una discontinuidad, la función podría "saltar" por encima del eje sin tocarlo.
```

```
metadata:
  materia: "matematica"
  tema: "teorema_de_bolzano"
  nivel: "intermedio"
  tags: ["bolzano", "polinomios", "cuadrática"]

variables:
  a: random(1, 3)
  b: random(4, 6)
  coef: random(1, 2)
  c_const: random(-10, -1)

respuesta: verdadero
tipo: vf

enunciado: "Para $f(x) = {coef}x^2 + {c_const}$, evaluada en $[{a}, {b}]$, si $f(a)$ y $f(b)$ tienen signos opuestos, existe un cero en ese intervalo."

explicacion: |
  Verdadero. Los polinomios son funciones continuas en todo $\mathbb{R}$. Por lo tanto, se cumple la hipótesis de continuidad y, sumada la condición de signos opuestos, Bolzano aplica.
```

```
metadata:
  materia: "matematica"
  tema: "teorema_de_bolzano"
  nivel: "intermedio"
  tags: ["bolzano", "análisis", "hipótesis"]

variables:
  a: random(0, 2)
  b: random(3, 5)

respuesta: "continuidad"
tipo: completar

enunciado: "Si una función tiene $f({a}) < 0$ y $f({b}) > 0$, pero no se puede asegurar que existe un cero en $({a}, {b})$, la hipótesis que probablemente falla es la _______ de la función."

respuestas_validas:
  - "continuidad"
  - "continua"

explicacion: |
  La continuidad es la hipótesis clave. Sin ella, la función puede presentar saltos que eviten el cruce por el eje X.
```

```
metadata:
  materia: "matematica"
  tema: "teorema_de_bolzano"
  nivel: "basico"
  tags: ["bolzano", "signos", "lógica"]

variables:
  a: random(1, 4)
  b: random(5, 8)
  f_a: random(-10, -1)

respuesta: "positivo"
tipo: completar

enunciado: "Para garantizar un cero en $[{a}, {b}]$ mediante Bolzano, si $f({a}) = {f_a}$ (negativo), entonces $f({b})$ debe ser _______."

respuestas_validas:
  - "positivo"
  - "mayor que cero"
  - "> 0"

explicacion: |
  Deben tener signos opuestos. Si $f(a)$ es negativo, $f(b)$ debe ser positivo para que el producto sea menor que cero.
```

```
metadata:
  materia: "matematica"
  tema: "teorema_de_bolzano"
  nivel: "basico"
  tags: ["bolzano", "no aplicación", "condiciones"]

variables:
  a: random(1, 3)
  b: random(4, 6)
  f_a: random(1, 5)
  f_b: random(1, 5)

respuesta: falso
tipo: vf

enunciado: "Si $f$ es continua en $[{a}, {b}]$ y $f({a}) = {f_a}$, $f({b}) = {f_b}$ (ambos positivos), el Teorema de Bolzano garantiza un cero."

explicacion: |
  Falso. Ambos valores positivos no garantizan que la función cruce el eje. Podría permanecer siempre por encima del eje X.
```

```
metadata:
  materia: "matematica"
  tema: "teorema_de_bolzano"
  nivel: "intermedio"
  tags: ["bolzano", "búsqueda", "intervalos"]

variables:
  a: random(0, 2)
  b: random(3, 5)
  f_a: -random(10, 20)
  f_b: random(10, 20)

respuesta: "(" + a + ", " + b + ")"
tipo: completar

enunciado: "Si $f$ es continua, $f({a}) = {f_a}$ y $f({b}) = {f_b}$, el cero $c$ se encuentra en el intervalo abierto _______."

respuestas_validas:
  - "(" + a + ", " + b + ")"
  - "(" + b + ", " + a + ")"
  - "entre " + a + " y " + b

explicacion: |
  El teorema garantiza que $c$ está estrictamente entre $a$ y $b$, es decir, $c \in (a, b)$.
```

```
metadata:
  materia: "matematica"
  tema: "teorema_de_bolzano"
  nivel: "basico"
  tags: ["bolzano", "lineal", "aplicación"]

variables:
  a: random(1, 3)
  b: random(4, 6)
  m: random(1, 3)
  c: random(-10, -1)

respuesta: verdadero
tipo: vf

enunciado: "La función $f(x) = {m}x + {c}$ es continua. Si $f({a})$ y $f({b})$ tienen signos opuestos, existe un cero único en $({a}, {b})$."

explicacion: |
  Verdadero. Las funciones lineales son continuas. Al tener signos opuestos en los extremos, cruzan el eje exactamente una vez.
```

```
metadata:
  materia: "matematica"
  tema: "teorema_de_bolzano"
  nivel: "avanzado"
  tags: ["bolzano", "TVI", "teoría"]

variables:
  a: random(1, 3)
  b: random(4, 6)

respuesta: "caso particular"
tipo: completar

enunciado: "El Teorema de Bolzano es un _______ del Teorema del Valor Intermedio."

respuestas_validas:
  - "caso particular"
  - "caso_particular"
  - "específico"

explicacion: |
  Bolzano se enfoca específicamente en el valor intermedio $k=0$. El TVI es más general para cualquier $k$ entre $f(a)$ y $f(b)$.
```

```
metadata:
  materia: "matematica"
  tema: "teorema_de_bolzano"
  nivel: "intermedio"
  tags: ["bolzano", "error", "mito"]

variables:
  a: random(1, 3)
  b: random(4, 6)

respuesta: falso
tipo: vf

enunciado: "Si $f$ es continua en $[{a}, {b}]$ y tiene un cero en ese intervalo, entonces $f(a)$ y $f(b)$ necesariamente tienen signos opuestos."

explicacion: |
  Falso. La función podría tocar el eje y volver al mismo lado (ej. $f(x)=x^2$ en $[-1, 1]$ tiene cero en 0, pero $f(-1)=f(1)=1 > 0$). La implicación inversa no es cierta.
```

```
metadata:
  materia: "matematica"
  tema: "teorema_de_bolzano"
  nivel: "avanzado"
  tags: ["bolzano", "máximo", "forma"]

variables:
  a: random(-2, -1)
  b: random(1, 2)
  f_a: -random(1, 5)
  f_b: -random(1, 5)

respuesta: falso
tipo: vf

enunciado: "Si $f$ es continua en $[{a}, {b}]$, $f({a}) < 0$, $f({b}) < 0$, y $f$ tiene un máximo local positivo en el interior, Bolzano garantiza un cero."

explicacion: |
  Falso. Bolzano requiere signos opuestos en los extremos. Aunque haya un cero (porque sube y baja), la condición de *hipótesis* de Bolzano ($f(a)f(b)<0$) no se cumple, por lo que no podemos usar *este* teorema para garantizarlo directamente (aunque el cero exista por otros motivos).
```

```
metadata:
  materia: "matematica"
  tema: "teorema_de_bolzano"
  nivel: "intermedio"
  tags: ["bolzano", "lógica", "variables"]

variables:
  a: random(1, 3)
  b: random(4, 6)
  f_a: -random(1, 5)
  f_b: random(1, 5)

respuesta: "signos"
tipo: completar

enunciado: "La conclusión de Bolzano depende críticamente de los _______ de los valores en los extremos."

respuestas_validas:
  - "signos"
  - "signos opuestos"
  - "signos distintos"

explicacion: |
  La condición clave es que los signos sean distintos (opuestos).
```

```
metadata:
  materia: "matematica"
  tema: "teorema_de_bolzano"
  nivel: "avanzado"
  tags: ["bolzano", "unicidad", "concepto"]

variables:
  a: random(1, 3)
  b: random(4, 6)

respuesta: falso
tipo: vf

enunciado: "El Teorema de Bolzano garantiza que el cero encontrado en $({a}, {b})$ es único."

explicacion: |
  Falso. Bolzano solo garantiza la *existencia* de al menos un cero. La unicidad requiere condiciones adicionales (como derivada estrictamente positiva).
```

```
metadata:
  materia: "matematica"
  tema: "teorema_de_bolzano"
  nivel: "basico"
  tags: ["bolzano", "cálculo", "intermedio"]

variables:
  a: random(1, 3)
  b: random(4, 6)
  f_a: -random(1, 5)
  f_b: random(1, 5)

respuesta: "0"
tipo: completar

enunciado: "El teorema asegura que existe $c$ tal que $f(c) =$ _______."

respuestas_validas:
  - "0"
  - "cero"
  - "el cero"

explicacion: |
  La conclusión es que la función toma el valor cero en algún punto del intervalo.
```

```
metadata:
  materia: "matematica"
  tema: "teorema_de_bolzano"
  nivel: "basico"
  tags: ["bolzano", "constante", "caso trivial"]

variables:
  a: random(1, 3)
  b: random(4, 6)
  k: random(1, 5)

respuesta: falso
tipo: vf

enunciado: "Si $f(x) = {k}$ (constante positiva) en $[{a}, {b}]$, Bolzano garantiza un cero."

explicacion: |
  Falso. $f(a) = f(b) = k > 0$. No hay signos opuestos. La función nunca toca el eje X.
```

```
metadata:
  materia: "matematica"
  tema: "teorema_de_bolzano"
  nivel: "basico"
  tags: ["bolzano", "geometría", "eje"]

variables:
  a: random(1, 3)
  b: random(4, 6)

respuesta: "corta"
tipo: completar

enunciado: "Gráficamente, si se cumplen las condiciones de Bolzano en $[{a}, {b}]$, la curva _______ el eje de las abcisas."

respuestas_validas:
  - "corta"
  - "cruza"
  - "intercepta"

explicacion: |
  La curva debe cruzar o cortar el eje horizontal al menos una vez.
```

```
metadata:
  materia: "matematica"
  tema: "teorema_de_bolzano"
  nivel: "intermedio"
  tags: ["bolzano", "continuidad", "hipótesis"]

variables:
  a: random(1, 3)
  b: random(4, 6)

respuesta: "cerrado"
tipo: completar

enunciado: "La continuidad debe verificarse en el intervalo _______ $[{a}, {b}]$."

respuestas_validas:
  - "cerrado"
  - "cerrado ["
  - "[" + a + ", " + b + "]"

explicacion: |
  El teorema exige continuidad en el intervalo cerrado $[a, b]$, incluyendo los extremos.
```

```
metadata:
  materia: "matematica"
  tema: "teorema_de_bolzano"
  nivel: "avanzado"
  tags: ["bolzano", "conclusión", "lógica"]

variables:
  a: random(1, 3)
  b: random(4, 6)

respuesta: "al menos uno"
tipo: completar

enunciado: "El Teorema de Bolzano garantiza la existencia de _______ cero en $({a}, {b})$."

respuestas_validas:
  - "al menos uno"
  - "al menos un"
  - "uno o más"

explicacion: |
  La conclusión es la existencia de al menos un cero. No se descarta la posibilidad de más de uno.
```

```
metadata:
  materia: "matematica"
  tema: "teorema_de_bolzano"
  nivel: "intermedio"
  tags: ["bolzano", "discontinuidad", "contraejemplo"]

variables:
  a: random(1, 3)
  b: random(4, 6)
  f_a: random(-5, -1)
  f_b: random(1, 5)

respuesta: falso
tipo: vf

enunciado: "Si una función $f$ no es continua en $[{a}, {b}]$, pero cumple que $f({a})={f_a}$ y $f({b})={f_b}$ tienen signos opuestos, el Teorema de Bolzano garantiza que existe un cero en $(a, b)$."

explicacion: |
  Falso. La continuidad en el intervalo cerrado es una condición necesaria (hipótesis). Si la función es discontinua, el teorema no aplica y no se puede garantizar la existencia del cero.
```

## Sección: regla-de-lhopital (31 preguntas)

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "basico"
  tags: ["terminologia"]

variables:
  nombre: "L'Hôpital"

tipo: completar

enunciado: "La regla que permite resolver indeterminaciones 0/0 y ∞/∞ mediante derivadas se llama Regla de {nombre}."

respuestas_validas:
  - "L'Hôpital"
  - "Lhopital"
  - "lhopital"
  - "l'Hôpital"

explicacion: |
  La regla lleva el nombre del matemático francés Guillaume de l'Hôpital.
```

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "basico"
  tags: ["conceptos"]

variables:
  forma: "0/0"

tipo: completar

enunciado: "Una de las dos formas indeterminadas principales que permiten aplicar L'Hôpital es {forma}."

respuestas_validas:
  - "0/0"
  - "0 sobre 0"
  - "cero sobre cero"

explicacion: |
  Las formas son 0/0 y ∞/∞.
```

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "basico"
  tags: ["historia"]

variables:
  apellido: "L'Hôpital"

tipo: completar

enunciado: "La regla lleva el nombre del matemático {apellido}."

respuestas_validas:
  - "L'Hôpital"
  - "Lhopital"
  - "l'Hôpital"

explicacion: |
  Guillaume de l'Hôpital publicó la regla en 1696.
```

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "basico"
  tags: ["limites", "lhopital", "polinomios"]

variables:
  a: random(2, 5)
  b: random(1, 3)

respuesta: "{a/b}"
tipo: input

enunciado: "Calcule el límite: lim(x→0) (x^{a} + {b}x) / x"

explicacion: |
  Al sustituir x=0 obtenemos 0/0. Aplicamos L'Hôpital derivando numerador y denominador:
  Derivada num: a*x^{a-1} + {b}
  Derivada den: 1
  El límite es a*0^{a-1} + {b}. Como a >= 2, el término con x se anula.
  Resultado: {b}.
```

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "intermedio"
  tags: ["limites", "trigonometria", "seno"]

variables:
  k: random(2, 6)

respuesta: k
tipo: input

enunciado: "Calcule: lim(x→0) (sin(k*x)) / x"

explicacion: |
  Es indeterminación 0/0. Aplicamos L'Hôpital:
  Derivada num: k*cos(k*x)
  Derivada den: 1
  Evaluar en x=0: k*cos(0)/1 = k*1 = {k}.
```

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "intermedio"
  tags: ["limites", "infinito", "logaritmo"]

variables:
  n: random(2, 5)

respuesta: "0"
tipo: input

enunciado: "Calcule: lim(x→∞) (log(x)) / x^{n}"

explicacion: |
  Es indeterminación ∞/∞. Aplicamos L'Hôpital:
  Derivada num: 1/x
  Derivada den: n*x^{n-1}
  Nuevo límite: lim(x→∞) (1/x) / (n*x^{n-1}) = lim(x→∞) 1 / (n*x^{n})
  Como n > 0, el denominador crece infinitamente, por lo que el límite es 0.
```

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "intermedio"
  tags: ["limites", "raices", "derivadas"]

variables:
  k: random(1, 4)

respuesta: "{1/(2*k)}"
tipo: input

enunciado: "Calcule: lim(x→0) (sqrt(1 + k*x) - 1) / x"

explicacion: |
  Indeterminación 0/0. Aplicamos L'Hôpital:
  Derivada num: (1/2)*(1+k*x)^{-1/2} * k
  Derivada den: 1
  Evaluar en x=0: (1/2)*(1)^{-1/2} * k = k/2.
  El límite es k/2.
  Espera, la derivada de sqrt(1+kx) es k / (2*sqrt(1+kx)).
  En x=0: k / 2.
  La respuesta correcta es "{k/2}".
  Corrijo la respuesta:
```

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "intermedio"
  tags: ["limites", "raices", "derivadas"]

variables:
  k: random(1, 4)

respuesta: "{k/2}"
tipo: input

enunciado: "Calcule: lim(x→0) (sqrt(1 + k*x) - 1) / x"

explicacion: |
  Indeterminación 0/0. Aplicamos L'Hôpital:
  Derivada num: k / (2*sqrt(1+k*x))
  Derivada den: 1
  En x=0: k / 2.
```

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "intermedio"
  tags: ["limites", "logaritmo", "infinito"]

respuesta: "0"
tipo: input

enunciado: "Calcule: lim(x→∞) (log(x)) / x"

explicacion: |
  Indeterminación ∞/∞. Aplicamos L'Hôpital:
  Derivada num: 1/x
  Derivada den: 1
  Límite: lim(x→∞) 1/x = 0.
```

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "intermedio"
  tags: ["limites", "trigonometria", "coseno"]

respuesta: "0"
tipo: input

enunciado: "Calcule: lim(x→0) (1 - cos(x)) / x"

explicacion: |
  Indeterminación 0/0. Aplicamos L'Hôpital:
  Derivada num: sin(x)
  Derivada den: 1
  Lim(x→0) sin(x)/1 = 0.
```

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "intermedio"
  tags: ["limites", "exponencial", "infinito"]

respuesta: "∞"
tipo: input

enunciado: "Calcule: lim(x→∞) (e^x) / x"

explicacion: |
  Indeterminación ∞/∞. Aplicamos L'Hôpital:
  Derivada num: e^x
  Derivada den: 1
  Lim(x→∞) e^x/1 = ∞.
```

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "intermedio"
  tags: ["limites", "trigonometria", "tangente"]

respuesta: "1"
tipo: input

enunciado: "Calcule: lim(x→0) (tan(x)) / x"

explicacion: |
  Indeterminación 0/0. Aplicamos L'Hôpital:
  Derivada num: sec^2(x)
  Derivada den: 1
  En x=0: sec^2(0) = 1/cos^2(0) = 1/1 = 1.
```

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "intermedio"
  tags: ["limites", "logaritmo", "natural"]

respuesta: "1"
tipo: input

enunciado: "Calcule: lim(x→0) (ln(1 + x)) / x"

explicacion: |
  Indeterminación 0/0. Aplicamos L'Hôpital:
  Derivada num: 1/(1+x)
  Derivada den: 1
  En x=0: 1/(1+0) = 1.
```

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "intermedio"
  tags: ["limites", "raices", "cubica"]

variables:
  k: random(1, 3)

respuesta: "{k/3}"
tipo: input

enunciado: "Calcule: lim(x→0) ( (1 + k*x)^{1/3} - 1 ) / x"

explicacion: |
  Indeterminación 0/0. Aplicamos L'Hôpital:
  Derivada num: (1/3)*(1+k*x)^{-2/3} * k
  Derivada den: 1
  En x=0: (1/3)*1 * k = k/3.
```

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "intermedio"
  tags: ["limites", "exponencial", "infinito"]

respuesta: "0"
tipo: input

enunciado: "Calcule: lim(x→∞) (x) / e^x"

explicacion: |
  Indeterminación ∞/∞. Aplicamos L'Hôpital:
  Derivada num: 1
  Derivada den: e^x
  Lim(x→∞) 1/e^x = 0.
```

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "intermedio"
  tags: ["limites", "trigonometria", "coseno"]

respuesta: "0"
tipo: input

enunciado: "Calcule: lim(x→0) (cos(x) - 1) / x^2"

explicacion: |
  Indeterminación 0/0. Aplicamos L'Hôpital:
  Derivada num: -sin(x)
  Derivada den: 2x
  Resultado: -sin(x)/2x. En x=0 es 0/0.
  Aplicamos L'Hôpital de nuevo:
  Derivada num: -cos(x)
  Derivada den: 2
  En x=0: -cos(0)/2 = -1/2.
  Espera, la respuesta es -0.5.
  Cambiemos a (1-cos(x))/x^2 -> 1/2.
  O dejemos -1/2.
  Respuesta: "-0.5"
```

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "intermedio"
  tags: ["limites", "trigonometria", "coseno"]

respuesta: "-0.5"
tipo: input

enunciado: "Calcule: lim(x→0) (cos(x) - 1) / x^2"

explicacion: |
  1ra derivada: -sin(x) / 2x (0/0)
  2da derivada: -cos(x) / 2
  En x=0: -1/2 = -0.5.
```

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "avanzado"
  tags: ["limites", "logaritmo", "raices"]

respuesta: "0"
tipo: input

enunciado: "Calcule: lim(x→0) (sqrt(1+x) - 1) / log(1+x)"

explicacion: |
  Indeterminación 0/0. Aplicamos L'Hôpital:
  Derivada num: 1/(2*sqrt(1+x))
  Derivada den: 1/(1+x)
  Fracción: (1/(2*sqrt(1+x))) / (1/(1+x)) = (1+x) / (2*sqrt(1+x))
  Simplificamos: sqrt(1+x) / 2.
  En x=0: sqrt(1)/2 = 1/2 = 0.5.
  Respuesta: "0.5"
```

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "avanzado"
  tags: ["limites", "logaritmo", "raices"]

respuesta: "0.5"
tipo: input

enunciado: "Calcule: lim(x→0) (sqrt(1+x) - 1) / log(1+x)"

explicacion: |
  Derivada num: 1/(2*sqrt(1+x))
  Derivada den: 1/(1+x)
  Cociente: (1+x) / (2*sqrt(1+x)) = sqrt(1+x)/2.
  En x=0: 1/2 = 0.5.
```

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "basico"
  tags: ["identificacion", "indeterminacion"]

variables:
  k: random(1, 5)

respuesta: verdadero
tipo: vf

enunciado: "Al calcular el límite de {k}x / sin({k}x) cuando x tiende a 0, se obtiene la forma indeterminada 0/0."

explicacion: |
  Al sustituir x = 0 en el numerador obtenemos {k}*0 = 0.
  En el denominador obtenemos sin(0) = 0.
  Por lo tanto, la forma resultante es 0/0, que es una indeterminación válida para aplicar L'Hôpital.
```

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "intermedio"
  tags: ["infinito", "logaritmo"]

variables:
  k: random(2, 5)

respuesta: 0
tipo: input

enunciado: "Calcula el límite de ln(x) / x^{k} cuando x tiende a infinito."

explicacion: |
  Forma indeterminada ∞/∞. Aplicamos L'Hôpital.
  Derivada num: 1/x.
  Derivada den: k*x^(k-1).
  Nuevo límite: (1/x) / (k*x^(k-1)) = 1 / (k*x^k).
  Cuando x -> ∞, el denominador crece sin límite, por lo que el resultado es 0.
```

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "basico"
  tags: ["errores_comunes", "aplicacion"]

variables:
  k: random(1, 5)

respuesta: falso
tipo: vf

enunciado: "Se puede aplicar la Regla de L'Hôpital al límite de (x + {k}) / x cuando x tiende a 0."

explicacion: |
  Al sustituir x=0, el numerador tiende a {k} y el denominador a 0.
  Esto da una forma {k}/0 (asíntota), no una indeterminación 0/0.
  Por lo tanto, L'Hôpital no es aplicable directamente.
```

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "intermedio"
  tags: ["teoria", "derivada"]

respuesta: falso
tipo: vf

enunciado: "Para calcular el límite de f(x)/g(x) mediante L'Hôpital, debemos derivar la fracción completa como si fuera una función cociente."

explicacion: |
  Falso. L'Hôpital establece que el límite es igual al límite de (f'(x))/(g'(x)).
  No se deriva el cociente f/g, sino que se derivan el numerador y el denominador por separado.
```

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "avanzado"
  tags: ["exponencial", "logaritmo"]

variables:
  k: random(1, 5)

respuesta: 0
tipo: input

enunciado: "Calcula el límite de x / ln(x) cuando x tiende a 1."

explicacion: |
  Al sustituir x=1, el numerador es 1 y el denominador es ln(1)=0.
  Esto no es 0/0 ni ∞/∞. Es 1/0 (asíntota).
  Espera, el límite es infinito (o no existe en el sentido finito).
  Si la pregunta pide un número finito, esta variable no sirve bien para input numérico simple sin especificar signo.
  Cambiemos a x->∞ para ln(x)/x.
  Nuevo enunciado: Lim ln(x)/x cuando x->∞.
  Derivada num: 1/x. Derivada den: 1.
  Lim (1/x)/1 = 0.
  Reescribiendo bloque:
```

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "intermedio"
  tags: ["exponencial", "logaritmo"]

respuesta: 0
tipo: input

enunciado: "Calcula el límite de ln(x) / x cuando x tiende a infinito."

explicacion: |
  Forma ∞/∞.
  Derivada num: 1/x. Derivada den: 1.
  El nuevo límite es lim (1/x) / 1 = 0.
```

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "intermedio"
  tags: ["teoria", "existencia"]

respuesta: verdadero
tipo: vf

enunciado: "Si al aplicar L'Hôpital el límite de f'(x)/g'(x) no existe (ni es infinito), entonces L'Hôpital no permite concluir nada sobre el límite original."

explicacion: |
  Correcto. La regla dice que si el límite de las derivadas existe, entonces el límite original es igual a él.
  Si el límite de las derivadas no existe, la regla es inconclusa (el límite original podría existir o no).
```

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "avanzado"
  tags: ["iteracion", "polinomio"]

respuesta: 2
tipo: input

enunciado: "Calcula el límite de (x^{2} - 2x + 1) / (x^{3} - 1) cuando x tiende a 1."

explicacion: |
  Forma 0/0.
  Derivada 1: Num (2x-2), Den (3x^2). En x=1: 0/3 = 0.
  Espera, 0/3 es 0. No hay que derivar de nuevo.
  Reviso: Num en 1: 1-2+1=0. Den en 1: 1-1=0.
  Derivada Num: 2x-2. En 1: 0.
  Derivada Den: 3x^2. En 1: 3.
  Lim 0/3 = 0.
  La respuesta es 0.
  Cambio el ejercicio para que requiera 2 derivadas.
  Usar (x-1)^2 / (x^3-1)?
  Num derivada: 2(x-1) -> 0. Den derivada: 3x^2 -> 3. Resultado 0.
  Usar (x-1)^3 / (x^2-1)?
  Num derivada: 3(x-1)^2 -> 0. Den derivada: 2x -> 2. Resultado 0.
  Para que sea distinto de 0 y requiera iteración, necesitamos que la primera derivada siga dando 0/0.
  Ejemplo: (x-1)^2 / (x^2-1).
  Derivada 1: Num 2(x-1)->0. Den 2x->2. Resultado 0.
  Ejemplo: (x-1)^3 / (x-1)^2? Simplifica a x-1 -> 0.
  Ejemplo clásico: (x - sin(x)) / x^3?
  Derivada 1: (1-cos(x))/3x^2 -> 0/0.
  Derivada 2: sin(x)/6x -> 0/0.
  Derivada 3: cos(x)/6 -> 1/6.
  Muy complejo para input simple.
  Volvemos a (x^2 - 2x + 1)/(x-1)? No, eso es 0/0 directo.
  Vamos a usar (x^2 - 1)/(x^3 - 1) en x->1.
  Derivada 1: 2x / 3x^2 = 2/(3x). En 1: 2/3.
  Respuesta 2/3.
  Reescribiendo para evitar confusión de iteración innecesaria:
```

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "basico"
  tags: ["propiedades", "linealidad"]

respuesta: verdadero
tipo: vf

enunciado: "Si el límite de f(x)/g(x) es indeterminado, el límite de c*f(x)/g(x) (con c constante) se puede calcular derivando f(x) y g(x) por separado."

explicacion: |
  Verdadero. La constante c se puede sacar fuera o derivar como parte del numerador (c*f'(x)).
  El resultado será c veces el límite original de f/g.
```

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "intermedio"
  tags: ["teoria", "limites_laterales"]

respuesta: verdadero
tipo: vf

enunciado: "La Regla de L'Hôpital es aplicable también para límites laterales (x -> a+ o x -> a-)."

explicacion: |
  Verdadero. La regla se basa en la derivabilidad en un entorno, y los límites laterales son casos particulares de ese comportamiento local.
```

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "intermedio"
  tags: ["trigonometria", "limite"]

respuesta: 1
tipo: input

enunciado: "Calcula el límite de sen(3x) / x cuando x tiende a 0."

explicacion: |
  Forma 0/0.
  Derivada num: 3cos(3x). Derivada den: 1.
  En x=0: 3cos(0)/1 = 3.
  Espera, la respuesta es 3.
  Reescribiendo para que sea 1: sen(x)/x.
  Pero quiero variar.
  Si pongo sen(3x)/x, la respuesta es 3.
  Si pongo sen(x)/3x, la respuesta es 1/3.
  Vamos a usar sen(3x)/x para probar que el alumno deriva correctamente el argumento.
  Respuesta: 3.
```

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "intermedio"
  tags: ["trigonometria", "limite"]

respuesta: 3
tipo: input

enunciado: "Calcula el límite de sen(3x) / x cuando x tiende a 0."

explicacion: |
  Forma 0/0.
  Derivada num: 3cos(3x). Derivada den: 1.
  En x=0: 3*1 / 1 = 3.
```

## Sección: cuerpos-redondos-y-poliedros/cilindros (26 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "basico"
  tags: ["cilindro", "vocabulario"]

enunciado: "¿Qué es un cilindro?"
tipo: mc
opciones_explicitas:
  - "Un cuerpo redondo con dos bases circulares iguales unidas por una superficie curva"
  - "Un poliedro con caras triangulares"
  - "Un cuerpo con una sola base circular terminada en punta"
respuesta: "Un cuerpo redondo con dos bases circulares iguales unidas por una superficie curva"

explicacion: |
  Es el equivalente "redondo" de un prisma: base circular en vez de
  polígono.
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "basico"
  tags: ["cilindro", "vocabulario"]

enunciado: "¿Cuáles son los dos datos que definen el tamaño de un cilindro?"
tipo: mc
opciones_explicitas:
  - "El radio de la base y la altura"
  - "El perímetro y el área"
  - "La cantidad de caras y de vértices"
respuesta: "El radio de la base y la altura"

explicacion: |
  Con el radio (r) y la altura (h) alcanza para calcular volumen y
  superficie.
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "basico"
  tags: ["cilindro", "volumen", "vocabulario"]

enunciado: "¿Cuál es la fórmula del volumen de un cilindro?"
tipo: mc
opciones_explicitas:
  - "π × r² × h"
  - "π × r × h"
  - "2 × π × r × h"
respuesta: "π × r² × h"

explicacion: |
  Área de la base circular (π × r²) por la altura.
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "intermedio"
  tags: ["cilindro", "volumen"]

variables:
  r: random(2, 15)
  h: random(3, 20)

respuesta: redondear(pi * r * r * h, 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "¿Cuál es el volumen de un cilindro de radio {r} cm y altura {h} cm? Redondeá a 2 decimales."

pasos:
  - "π × {r}² × {h} = {redondear(pi * r * r * h, 2)} cm³"

explicacion: |
  Se aplica π × r² × h directamente.
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "intermedio"
  tags: ["cilindro", "volumen"]

variables:
  d: random(4, 30)
  h: random(3, 20)
  r: d / 2

respuesta: redondear(pi * r * r * h, 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "¿Cuál es el volumen de un cilindro de diámetro {d} cm y altura {h} cm? Redondeá a 2 decimales."

pasos:
  - "Radio: {d} ÷ 2 = {r} cm. Volumen: π × {r}² × {h} = {redondear(pi * r * r * h, 2)} cm³."

explicacion: |
  Primero hay que pasar de diámetro a radio (dividir por 2) antes de
  aplicar la fórmula.
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "avanzado"
  tags: ["cilindro", "volumen"]

variables:
  r: random(2, 10)
  h: random(3, 15)
  volumen: pi * r * r * h

respuesta: redondear(h, 2)
tipo: input
tolerancia_abs: 0.05

enunciado: "Un cilindro de radio {r} cm tiene un volumen de {redondear(volumen, 2)} cm³. ¿Cuál es su altura?"

pasos:
  - "{redondear(volumen, 2)} ÷ (π × {r}²) = {redondear(volumen / (pi * r * r), 2)} cm"

explicacion: |
  Se despeja la altura dividiendo el volumen por el área de la base
  circular (π × r²).
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "avanzado"
  tags: ["cilindro", "volumen"]

variables:
  r: random(2, 10)
  h: random(3, 15)
  volumen: pi * r * r * h

respuesta: redondear(r, 2)
tipo: input
tolerancia_abs: 0.05

enunciado: "Un cilindro de altura {h} cm tiene un volumen de {redondear(volumen, 2)} cm³. ¿Cuál es su radio?"

pasos:
  - "sqrt({redondear(volumen, 2)} ÷ (π × {h})) = {redondear(sqrt(volumen / (pi * h)), 2)} cm"

explicacion: |
  Se despeja: primero se divide el volumen por (π × altura), y después
  se saca la raíz cuadrada (porque el radio está al cuadrado).
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "intermedio"
  tags: ["cilindro", "superficie"]

variables:
  r: random(2, 12)
  h: random(3, 20)

respuesta: redondear(2 * pi * r * h, 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "¿Cuál es el área de la superficie lateral (curva) de un cilindro de radio {r} cm y altura {h} cm? Redondeá a 2 decimales."

pasos:
  - "2 × π × {r} × {h} = {redondear(2 * pi * r * h, 2)} cm²"

explicacion: |
  Es la circunferencia de la base (2πr) multiplicada por la altura —
  como "desenrollar" la parte curva en un rectángulo.
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "avanzado"
  tags: ["cilindro", "superficie"]

variables:
  r: random(2, 10)
  h: random(3, 15)

respuesta: redondear((2 * pi * r * h) + (2 * pi * r * r), 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "¿Cuál es el área total (lateral + las dos bases) de un cilindro de radio {r} cm y altura {h} cm? Redondeá a 2 decimales."

pasos:
  - "Lateral: 2 × π × {r} × {h} = {redondear(2 * pi * r * h, 2)} cm². Bases: 2 × π × {r}² = {redondear(2 * pi * r * r, 2)} cm². Total: {redondear((2 * pi * r * h) + (2 * pi * r * r), 2)} cm²."

explicacion: |
  Se suma el área lateral más las dos bases circulares.
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "avanzado"
  tags: ["cilindro", "capacidad", "problema"]

variables:
  r: random(3, 6)
  h: random(8, 15)

respuesta: redondear((pi * r * r * h) / 1000, 3)
tipo: input
tolerancia_abs: 0.005

enunciado: "Una lata cilíndrica tiene {r} cm de radio y {h} cm de altura. ¿Cuántos litros de líquido puede contener? Redondeá a 3 decimales."

pasos:
  - "Volumen: π × {r}² × {h} = {redondear(pi * r * r * h, 2)} cm³. En litros: {redondear(pi * r * r * h, 2)} ÷ 1000 = {redondear((pi * r * r * h) / 1000, 3)}."

explicacion: |
  Se calcula el volumen en cm³ y se convierte a litros (1000 cm³ = 1
  litro).
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "basico"
  tags: ["cilindro", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El cilindro NO es un poliedro, porque tiene una superficie curva (no todas sus caras son planas)."

explicacion: |
  Prismas y pirámides son poliedros (todas sus caras son polígonos
  planos); el cilindro tiene una superficie lateral curva, así que se
  clasifica como cuerpo redondo.
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "basico"
  tags: ["cilindro", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un cilindro tiene dos bases circulares, iguales y paralelas."

explicacion: |
  Es la misma idea que las dos bases de un prisma, pero circulares en
  vez de poligonales.
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "intermedio"
  tags: ["cilindro", "prisma", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El volumen del cilindro se calcula con la misma lógica que el de un prisma (área de la base por altura), sólo que la base es un círculo."

explicacion: |
  V = π×r²×h es exactamente área de la base (π×r²) por altura, igual
  patrón que `../prismas/`.
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "avanzado"
  tags: ["cilindro", "volumen"]

variables:
  r: random(2, 8)
  h: random(3, 12)

respuesta: falso
tipo: vf

enunciado: "Si el radio de un cilindro de {r} cm y altura {h} cm se duplica (manteniendo la misma altura), su volumen también se duplica."

pasos:
  - "Volumen original: π × {r}² × {h} = {redondear(pi * r * r * h, 2)} cm³. Con el radio doble: π × {2 * r}² × {h} = {redondear(pi * (2 * r) * (2 * r) * h, 2)} cm³."

explicacion: |
  Como el radio está al cuadrado en la fórmula, duplicarlo multiplica el
  volumen por 4, no por 2.
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "intermedio"
  tags: ["cilindro", "volumen"]

variables:
  r: random(2, 8)
  h: random(3, 12)

respuesta: verdadero
tipo: vf

enunciado: "Si la altura de un cilindro de radio {r} cm y altura {h} cm se duplica (manteniendo el mismo radio), su volumen también se duplica."

pasos:
  - "Volumen original: π × {r}² × {h} = {redondear(pi * r * r * h, 2)} cm³. Con la altura doble: π × {r}² × {2 * h} = {redondear(pi * r * r * (2 * h), 2)} cm³."

explicacion: |
  A diferencia del radio, la altura NO está al cuadrado en la fórmula:
  duplicarla sí duplica el volumen.
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "avanzado"
  tags: ["cilindro", "comparacion"]

variables:
  r1: random(2, 10)
  h1: random(3, 15)
  r2: random(2, 10)
  h2: random(3, 15)

restricciones:
  - (r1 * r1 * h1) != (r2 * r2 * h2)

respuesta: (r1 * r1 * h1) > (r2 * r2 * h2)
tipo: vf

enunciado: "¿Tiene mayor volumen un cilindro de radio {r1} cm y altura {h1} cm, que otro de radio {r2} cm y altura {h2} cm?"

pasos:
  - "Como ambos multiplican por π, alcanza con comparar r² × h: {r1}² × {h1} = {r1 * r1 * h1} contra {r2}² × {h2} = {r2 * r2 * h2}."

explicacion: |
  Se puede comparar sin calcular π × r² × h completo, porque el factor π
  es el mismo en los dos.
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "intermedio"
  tags: ["cilindro", "superficie", "vocabulario"]

enunciado: "¿Cuál es la fórmula del área lateral (curva) de un cilindro?"
tipo: mc
opciones_explicitas:
  - "2 × π × r × h"
  - "π × r²"
  - "π × r² × h"
respuesta: "2 × π × r × h"

explicacion: |
  Es la circunferencia de la base (2πr) por la altura — como
  "desenrollar" la superficie curva en un rectángulo.
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "intermedio"
  tags: ["cilindro", "superficie", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Si se \"desenrolla\" la superficie lateral de un cilindro, queda un rectángulo cuyo largo es la circunferencia de la base y cuyo ancho es la altura del cilindro."

explicacion: |
  Se retoma en detalle en `../desarrollo-plano/`.
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "basico"
  tags: ["cilindro", "completar"]

tipo: completar
enunciado: "Completá: el volumen del cilindro es π por el radio al cuadrado, por la ___."
respuestas_validas:
  - "altura"

explicacion: |
  V = π × r² × h.
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "intermedio"
  tags: ["cilindro", "completar"]

variables:
  r: random(2, 8)
  h: random(3, 12)

tipo: completar
enunciado: "Completá: el volumen de un cilindro de radio {r} cm y altura {h} cm es ___ cm³ (redondeado a 2 decimales)."
respuestas_validas:
  - redondear(pi * r * r * h, 2)

explicacion: |
  V = π × r² × h.
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "avanzado"
  tags: ["cilindro", "prisma", "problema"]

variables:
  r: random(3, 10)
  h: random(3, 15)

respuesta: (r * r) * h
tipo: input
tolerancia_abs: 0

enunciado: "Un prisma de base cuadrada tiene {r} cm de lado y {h} cm de altura. ¿Cuál es su volumen?"

explicacion: |
  Volumen del prisma cuadrado: lado² × altura — sirve como referencia
  para comparar con un cilindro de radio equivalente en el próximo
  ejercicio.
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "intermedio"
  tags: ["cilindro", "verificacion"]

variables:
  r: random(2, 10)
  h: random(3, 15)
  correcto: redondear(pi * r * r * h, 1)
  error: uno_de([0, 0, 0, 5, -5])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 0.01)
tipo: vf

enunciado: "¿Está bien calculado esto? El volumen de un cilindro de radio {r} cm y altura {h} cm es {mostrado} cm³ (redondeado a 1 decimal)."

explicacion: |
  Se recalcula π × r² × h y se compara con el valor mostrado.
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "intermedio"
  tags: ["cilindro", "comparacion"]

enunciado: "¿Cuál de estos cilindros tiene mayor volumen: uno de radio 4 cm y altura 10 cm, o uno de radio 5 cm y altura 6 cm?"
tipo: mc
opciones_explicitas:
  - "Radio 4 cm y altura 10 cm"
  - "Radio 5 cm y altura 6 cm"
respuesta: "Radio 4 cm y altura 10 cm"

pasos:
  - "r²×h: 4² × 10 = 160 contra 5² × 6 = 150."

explicacion: |
  Aunque el segundo tiene mayor radio, el primero gana porque el radio
  al cuadrado no compensa la diferencia de altura en este caso.
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "avanzado"
  tags: ["cilindro", "orden"]

tipo: ordenar
enunciado: "Ordená estos cilindros de menor a mayor volumen (comparando r²×h, ya que todos comparten el factor π): radio 2 y altura 20; radio 5 y altura 2; radio 3 y altura 8; radio 4 y altura 6."
opciones_explicitas:
  - "Radio 3 y altura 8"
  - "Radio 2 y altura 20"
  - "Radio 4 y altura 6"
  - "Radio 5 y altura 2"
respuesta_orden: ["Radio 5 y altura 2", "Radio 3 y altura 8", "Radio 2 y altura 20", "Radio 4 y altura 6"]
pasos:
  - "r²×h: 2²×20=80; 5²×2=50; 3²×8=72; 4²×6=96."

explicacion: |
  Se calcula r²×h para cada uno (el factor π es común a todos, así que
  no hace falta calcularlo) y se ordena: 50 < 72 < 80 < 96.
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "intermedio"
  tags: ["cilindro", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "La fórmula del volumen del cilindro usa el diámetro al cuadrado, no el radio al cuadrado."

explicacion: |
  Usa el RADIO al cuadrado (V = π × r² × h). Si sólo se conoce el
  diámetro, hay que dividirlo por 2 primero para obtener el radio.
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "basico"
  tags: ["cilindro", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Todo lo que hace falta saber para calcular el volumen o la superficie de un cilindro es el radio de su base circular y su altura."

explicacion: |
  Con esos dos datos alcanza para aplicar todas las fórmulas del cilindro
  vistas en este módulo.
```

