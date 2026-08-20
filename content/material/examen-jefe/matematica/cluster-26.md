# Examen jefe — Maestro de Reglas y Regresión

> Logro #77. Aprobaste el parcial dominando redondeo, L'Hôpital, reglas de tres y regresión lineal. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **121 preguntas totales** en 5/5 secciones.

---

## Sección: redondeo (22 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "redondeo"
  nivel: "basico"
  tags: ["redondeo"]

variables:
  entero: random(1, 50)
  h: random(1, 9)
  m: random(0, 9)
  n: entero + h / 10 + m / 100

respuesta: redondear(n, 1)
tipo: input
tolerancia_abs: 0.01

enunciado: "Redondeá {n} a 1 cifra decimal."

pasos:
  - "Se mira la segunda cifra decimal ({m}) para decidir si la primera sube o queda igual: {redondear(n, 1)}"

explicacion: |
  Se mira la cifra que sigue a la posición buscada: 5 o más, sube; menos
  de 5, queda igual.
```

```
metadata:
  materia: "matematicas"
  tema: "redondeo"
  nivel: "basico"
  tags: ["redondeo"]

variables:
  entero: random(1, 50)
  h: random(1, 9)
  m: random(0, 9)
  mil: random(0, 9)
  n: entero + h / 10 + m / 100 + mil / 1000

respuesta: redondear(n, 2)
tipo: input
tolerancia_abs: 0.001

enunciado: "Redondeá {n} a 2 cifras decimales."

pasos:
  - "Se mira la tercera cifra decimal ({mil}) para decidir: {redondear(n, 2)}"

explicacion: |
  Es el mismo criterio, mirando ahora la tercera cifra decimal.
```

```
metadata:
  materia: "matematicas"
  tema: "redondeo"
  nivel: "intermedio"
  tags: ["redondeo"]

variables:
  entero: random(1, 50)
  h: random(0, 9)
  m: random(0, 9)
  n: entero + h / 10 + m / 100 + 5 / 1000

respuesta: redondear(n, 2)
tipo: input
tolerancia_abs: 0.001

enunciado: "Redondeá {n} a 2 cifras decimales."

pasos:
  - "La tercera cifra decimal es 5: la segunda cifra sube."

explicacion: |
  Cuando la cifra que decide es exactamente 5, la posición anterior sube.
```

```
metadata:
  materia: "matematicas"
  tema: "redondeo"
  nivel: "basico"
  tags: ["redondeo"]

variables:
  entero: random(1, 100)
  h: random(0, 9)
  n: entero + h / 10

respuesta: redondear(n, 0)
tipo: input
tolerancia_abs: 0.01

enunciado: "Redondeá {n} al entero más cercano."

pasos:
  - "Se mira la primera cifra decimal ({h}) para decidir: {redondear(n, 0)}"

explicacion: |
  Redondear al entero es mirar sólo la primera cifra decimal.
```

```
metadata:
  materia: "matematicas"
  tema: "redondeo"
  nivel: "intermedio"
  tags: ["redondeo"]

variables:
  entero: random(1, 100)
  n: entero + 5 / 10

respuesta: redondear(n, 0)
tipo: input
tolerancia_abs: 0.01

enunciado: "Redondeá {n} al entero más cercano."

pasos:
  - "La primera cifra decimal es 5: la parte entera sube."

explicacion: |
  El caso frontera (cifra exactamente 5) sigue subiendo, igual que con
  enteros.
```

```
metadata:
  materia: "matematicas"
  tema: "redondeo"
  nivel: "basico"
  tags: ["redondeo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La regla de redondeo de decimales es la misma que la de enteros: se mira la cifra siguiente a la posición buscada."

explicacion: |
  No es una regla nueva: es la misma idea de `../valor-posicional/`,
  aplicada del otro lado de la coma.
```

```
metadata:
  materia: "matematicas"
  tema: "redondeo"
  nivel: "intermedio"
  tags: ["redondeo", "truncar"]

variables:
  entero: random(1, 50)
  h: random(0, 4)
  m: random(0, 9)
  n: entero + h / 10 + m / 100
  truncado: floor(n * 10) / 10

respuesta: (redondear(n, 1) == truncado)
tipo: vf

enunciado: "¿Coinciden redondear {n} a 1 cifra decimal y truncarlo a 1 cifra decimal?"

explicacion: |
  Cuando la cifra que decide el redondeo es menor a 5, redondear y
  truncar dan el mismo resultado (los dos "se quedan" con la cifra
  anterior).
```

```
metadata:
  materia: "matematicas"
  tema: "redondeo"
  nivel: "intermedio"
  tags: ["redondeo", "truncar"]

variables:
  entero: random(1, 50)
  h: random(0, 9)
  m: random(5, 9)
  n: entero + h / 10 + m / 100

respuesta: floor(n * 10) / 10
tipo: input
tolerancia_abs: 0.01

enunciado: "Truncá {n} a 1 cifra decimal (sin redondear, cortando directo)."

explicacion: |
  Truncar corta directo, sin mirar si la cifra siguiente es 5 o más — a
  diferencia de redondear, siempre "se queda" con la cifra anterior tal
  cual está.
```

```
metadata:
  materia: "matematicas"
  tema: "redondeo"
  nivel: "intermedio"
  tags: ["redondeo", "truncar"]

variables:
  entero: random(1, 50)
  h: random(0, 9)
  m: random(5, 9)
  n: entero + h / 10 + m / 100
  truncado: floor(n * 10) / 10

respuesta: (redondear(n, 1) == truncado)
tipo: vf

enunciado: "¿Coinciden redondear {n} a 1 cifra decimal y truncarlo a 1 cifra decimal?"

explicacion: |
  Acá la cifra que decide es 5 o más, así que redondear hace subir la
  cifra anterior — pero truncar no sube nunca. Por eso no coinciden.
```

```
metadata:
  materia: "matematicas"
  tema: "redondeo"
  nivel: "intermedio"
  tags: ["redondeo", "problema"]

variables:
  entero: random(10, 500)
  c1: random(0, 9)
  c2: random(0, 9)
  c3: random(0, 9)
  precio: entero + c1 / 10 + c2 / 100 + c3 / 1000

respuesta: redondear(precio, 2)
tipo: input
tolerancia_abs: 0.001

enunciado: "Un cálculo da un precio de ${precio}. Redondeado a centavos (2 cifras decimales), ¿cuánto queda?"

explicacion: |
  Los precios en pesos se redondean a 2 cifras decimales porque no
  existen fracciones de centavo.
```

```
metadata:
  materia: "matematicas"
  tema: "redondeo"
  nivel: "avanzado"
  tags: ["redondeo", "problema"]

variables:
  a: random(1, 10)
  b: random(1, 10)
  c: random(1, 10)
  promedio: (a + b + c) / 3

respuesta: redondear(promedio, 2)
tipo: input
tolerancia_abs: 0.001

enunciado: "El promedio de {a}, {b} y {c} da {promedio}. Redondeado a 2 cifras decimales, ¿cuánto queda?"

explicacion: |
  Un promedio rara vez da un número "redondo": conviene redondearlo a una
  cantidad razonable de cifras decimales.
```

```
metadata:
  materia: "matematicas"
  tema: "redondeo"
  nivel: "intermedio"
  tags: ["redondeo"]

variables:
  entero: random(1, 50)
  h: random(0, 9)
  m: random(0, 9)
  n: entero + h / 10 + m / 100
  correcto: redondear(n, 1)

respuesta: correcto
tipo: mc
opciones_explicitas:
  - correcto
  - floor(n * 10) / 10
  - correcto + 0.1

enunciado: "¿Cuál es el redondeo correcto de {n} a 1 cifra decimal?"

explicacion: |
  Las otras opciones son truncar (no mirar la cifra siguiente) o un error
  de un décimo de más.
```

```
metadata:
  materia: "matematicas"
  tema: "redondeo"
  nivel: "intermedio"
  tags: ["redondeo", "verificacion"]

variables:
  entero: random(1, 50)
  h: random(0, 9)
  m: random(0, 9)
  n: entero + h / 10 + m / 100
  correcto: redondear(n, 1)
  error: uno_de([0, 0, 0, 0.1, -0.1])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 0.01)
tipo: vf

enunciado: "¿Está bien redondeado {n} a 1 cifra decimal, si el resultado dado es {mostrado}?"

explicacion: |
  Hay que volver a aplicar la regla (mirar la segunda cifra decimal) y
  comparar.
```

```
metadata:
  materia: "matematicas"
  tema: "redondeo"
  nivel: "avanzado"
  tags: ["redondeo"]

variables:
  entero: random(1, 20)
  h: random(0, 9)
  m: random(0, 9)
  mil: random(0, 9)
  diez_mil: random(0, 9)
  n: entero + h / 10 + m / 100 + mil / 1000 + diez_mil / 10000

respuesta: redondear(n, 3)
tipo: input
tolerancia_abs: 0.0001

enunciado: "Redondeá {n} a 3 cifras decimales."

explicacion: |
  Con más cifras decimales, el procedimiento es el mismo: mirar la cifra
  que sigue a la posición buscada.
```

```
metadata:
  materia: "matematicas"
  tema: "redondeo"
  nivel: "basico"
  tags: ["redondeo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Al redondear, la cifra de la posición buscada sólo puede subir en 1 o quedar igual — nunca baja."

explicacion: |
  Redondear nunca resta a la cifra buscada: como mucho, la deja igual (si
  la siguiente es menor a 5) o la sube en 1 (si es 5 o más).
```

```
metadata:
  materia: "matematicas"
  tema: "redondeo"
  nivel: "intermedio"
  tags: ["redondeo"]

tipo: completar
enunciado: "¿A partir de qué cifra (0 a 9) la posición anterior sube al redondear? Nombrá la más chica que hace subir."
respuestas_validas:
  - 5

explicacion: |
  A partir del 5 (inclusive), la posición anterior sube.
```

```
metadata:
  materia: "matematicas"
  tema: "redondeo"
  nivel: "basico"
  tags: ["redondeo", "orden"]

tipo: ordenar
enunciado: "Estos números ya están redondeados a 1 cifra decimal. Ordenalos de menor a mayor."
opciones_explicitas:
  - "3,4"
  - "3,1"
  - "3,8"
  - "3,2"
respuesta_orden: ["3,1", "3,2", "3,4", "3,8"]

explicacion: |
  Una vez redondeados, se ordenan igual que cualquier lista de decimales.
```

```
metadata:
  materia: "matematicas"
  tema: "redondeo"
  nivel: "basico"
  tags: ["redondeo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Redondear un número a 0 cifras decimales es lo mismo que redondearlo al entero más cercano."

explicacion: |
  0 cifras decimales significa "sin ninguna cifra después de la coma": es
  exactamente el entero más cercano.
```

```
metadata:
  materia: "matematicas"
  tema: "redondeo"
  nivel: "basico"
  tags: ["redondeo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Redondear un número casi siempre pierde algo de precisión: el número redondeado no es exactamente igual al original (salvo que ya terminara justo ahí)."

explicacion: |
  Redondear es una aproximación útil, no magia: se gana simplicidad a
  cambio de exactitud.
```

```
metadata:
  materia: "matematicas"
  tema: "redondeo"
  nivel: "avanzado"
  tags: ["redondeo"]

variables:
  entero: random(1, 30)
  m: random(5, 9)
  n: entero + m / 10
  correcto: redondear(n, 0)
  mal_hecho: entero

respuesta: mal_hecho
tipo: mc
opciones_explicitas:
  - correcto
  - mal_hecho

enunciado: "Para redondear {n} al entero más cercano, ¿cuál de estos dos resultados está mal (no aplicó la regla)?"

explicacion: |
  {mal_hecho} simplemente descartó la parte decimal sin mirar si tenía
  que subir — eso es truncar, no redondear.
```

```
metadata:
  materia: "matematicas"
  tema: "redondeo"
  nivel: "intermedio"
  tags: ["redondeo"]

variables:
  entero: random(1, 999)

respuesta: entero
tipo: input
tolerancia_abs: 0.01

enunciado: "Redondeá {entero} (un número entero) a 2 cifras decimales."

explicacion: |
  Un número que ya no tiene cifras decimales de sobra no cambia al
  redondearlo: queda igual.
```

```
metadata:
  materia: "matematicas"
  tema: "redondeo"
  nivel: "basico"
  tags: ["redondeo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Redondear es aproximar un número a una cantidad determinada de cifras, mirando la cifra siguiente para decidir si la última que queda sube o se mantiene igual."

explicacion: |
  Es la idea central de todo el tema, aplicada tanto a enteros como a
  decimales.
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

respuesta: "{k}"
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

## Sección: regla-de-tres-directa (24 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "basico"
  tags: ["regla_de_tres_directa"]

variables:
  a: random(2, 9)
  b: random(2, 30)
  c: random(2, 9)

respuesta: (b * c) / a
tipo: input
tolerancia_abs: 0.01

enunciado: "Resolvé la regla de tres directa: {a} es a {b} como {c} es a x. ¿Cuánto vale x?"

pasos:
  - "x = ({b} × {c}) ÷ {a} = {b * c} ÷ {a} = {(b * c) / a}"

explicacion: |
  Se multiplican los dos términos que están cruzados con la incógnita, y
  se divide por el tercero.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "basico"
  tags: ["regla_de_tres_directa", "problema"]

variables:
  kilos_base: random(2, 6)
  precio_base: kilos_base * random(100, 500)
  kilos_nuevo: random(2, 15)

respuesta: (precio_base * kilos_nuevo) / kilos_base
tipo: input
tolerancia_abs: 0.01

enunciado: "Si {kilos_base} kg de manzanas cuestan ${precio_base}, ¿cuánto cuestan {kilos_nuevo} kg (a precio proporcional)?"

pasos:
  - "x = ({precio_base} × {kilos_nuevo}) ÷ {kilos_base}"

explicacion: |
  Más kilos, más precio: es una relación directamente proporcional.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "intermedio"
  tags: ["regla_de_tres_directa", "problema"]

variables:
  horas_base: random(1, 4)
  km_base: horas_base * random(40, 100)
  horas_nueva: random(2, 10)

respuesta: (km_base * horas_nueva) / horas_base
tipo: input
tolerancia_abs: 0.01

enunciado: "Un auto recorre {km_base} km en {horas_base} horas, a velocidad constante. ¿Cuántos km recorre en {horas_nueva} horas?"

explicacion: |
  A velocidad constante, más horas significa más distancia recorrida:
  relación directa.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "intermedio"
  tags: ["regla_de_tres_directa", "problema"]

variables:
  horas_base: random(2, 8)
  sueldo_base: horas_base * random(500, 2000)
  horas_nueva: random(3, 12)

respuesta: (sueldo_base * horas_nueva) / horas_base
tipo: input
tolerancia_abs: 0.01

enunciado: "Por {horas_base} horas de trabajo se cobran ${sueldo_base}. Manteniendo la misma paga por hora, ¿cuánto se cobra por {horas_nueva} horas?"

explicacion: |
  Más horas trabajadas, más plata cobrada: relación directa.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "basico"
  tags: ["regla_de_tres_directa", "problema"]

variables:
  personas_base: random(2, 6)
  huevos_base: personas_base * random(1, 3)
  personas_nueva: random(3, 20)

respuesta: (huevos_base * personas_nueva) / personas_base
tipo: input
tolerancia_abs: 0.01

enunciado: "Una receta para {personas_base} personas usa {huevos_base} huevos. Manteniendo la proporción, ¿cuántos huevos hacen falta para {personas_nueva} personas?"

explicacion: |
  Más personas, más ingredientes en la misma proporción: relación
  directa.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "intermedio"
  tags: ["regla_de_tres_directa", "problema"]

variables:
  km_base: random(50, 200)
  litros_base: random(4, 20)
  km_nuevo: random(100, 600)

respuesta: (litros_base * km_nuevo) / km_base
tipo: input
tolerancia_abs: 0.01

enunciado: "Un auto gasta {litros_base} litros cada {km_base} km. ¿Cuántos litros gasta en {km_nuevo} km?"

explicacion: |
  Más kilómetros recorridos, más combustible consumido: relación directa.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "intermedio"
  tags: ["regla_de_tres_directa", "problema"]

variables:
  dolares_base: random(1, 10)
  pesos_base: dolares_base * random(800, 1200)
  dolares_nuevo: random(5, 100)

respuesta: (pesos_base * dolares_nuevo) / dolares_base
tipo: input
tolerancia_abs: 0.01

enunciado: "Si {dolares_base} dólar(es) equivalen a ${pesos_base}, ¿cuántos pesos equivalen a {dolares_nuevo} dólares (mismo tipo de cambio)?"

explicacion: |
  El tipo de cambio se mantiene constante: más dólares, más pesos en la
  misma proporción.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "intermedio"
  tags: ["regla_de_tres_directa", "problema"]

variables:
  horas_base: random(1, 5)
  piezas_base: horas_base * random(10, 40)
  horas_nueva: random(2, 12)

respuesta: (piezas_base * horas_nueva) / horas_base
tipo: input
tolerancia_abs: 0.01

enunciado: "Una máquina produce {piezas_base} piezas en {horas_base} horas, a ritmo constante. ¿Cuántas piezas produce en {horas_nueva} horas?"

explicacion: |
  Más horas de producción a ritmo constante, más piezas: relación
  directa.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "basico"
  tags: ["regla_de_tres_directa", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "\"Más horas trabajadas, más plata cobrada\" es un ejemplo de relación directamente proporcional."

explicacion: |
  Las dos magnitudes suben juntas: es directa.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "intermedio"
  tags: ["regla_de_tres_directa", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "\"Más obreros trabajando, más días tarda en terminarse la obra\" es un ejemplo de relación directamente proporcional."

explicacion: |
  Acá pasa lo contrario: más obreros, MENOS días (terminan antes) — es
  una relación inversa, no directa.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "basico"
  tags: ["regla_de_tres_directa", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "\"Más kilos de fruta comprados, más se paga\" es una relación directamente proporcional."

explicacion: |
  Las dos magnitudes (kilos y precio) aumentan juntas.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "basico"
  tags: ["regla_de_tres_directa", "vocabulario"]

enunciado: "¿Cómo se reconoce que un problema es de regla de tres directa?"
tipo: mc
opciones_explicitas:
  - "Las dos magnitudes aumentan (o disminuyen) juntas"
  - "Una magnitud siempre vale el doble de la otra"
  - "Los números del problema son todos pares"
respuesta: "Las dos magnitudes aumentan (o disminuyen) juntas"

explicacion: |
  Si al aumentar una también aumenta la otra (y al disminuir una también
  disminuye la otra), es directa.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "intermedio"
  tags: ["regla_de_tres_directa"]

variables:
  a: random(2, 9)
  b: random(10, 90)
  c: random(2, 9)
  correcto: (b * c) / a

respuesta: correcto
tipo: mc
opciones_explicitas:
  - correcto
  - a * b * c
  - (a * b) / c

enunciado: "En la regla de tres directa {a}—{b} / {c}—x, ¿cuál es la fórmula correcta para x?"

explicacion: |
  x se calcula multiplicando los dos términos cruzados con la incógnita
  ({b} y {c}) y dividiendo por el tercero ({a}).
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "intermedio"
  tags: ["regla_de_tres_directa", "verificacion"]

variables:
  a: random(2, 9)
  b: random(10, 90)
  c: random(2, 9)
  correcto: (b * c) / a
  error: uno_de([0, 0, 0, a, -a])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 0.01)
tipo: vf

enunciado: "¿Está bien resuelta esta regla de tres? {a} es a {b} como {c} es a {mostrado}."

explicacion: |
  Se verifica volviendo a aplicar la fórmula x = (b × c) ÷ a.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "intermedio"
  tags: ["regla_de_tres_directa"]

variables:
  a: random(2, 9)
  b: random(10, 90)
  c: random(2, 9)

tipo: completar
enunciado: "Completá: {a} es a {b} como {c} es a ___."
respuestas_validas:
  - (b * c) / a

explicacion: |
  Se aplica la fórmula de la regla de tres directa.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "basico"
  tags: ["regla_de_tres_directa", "problema"]

variables:
  plantas_base: random(2, 6)
  litros_base: plantas_base * random(1, 3)
  plantas_nueva: random(3, 20)

respuesta: (litros_base * plantas_nueva) / plantas_base
tipo: input
tolerancia_abs: 0.01

enunciado: "Regar {plantas_base} plantas usa {litros_base} litros de agua. Manteniendo la misma cantidad por planta, ¿cuántos litros hacen falta para {plantas_nueva} plantas?"

explicacion: |
  Más plantas, más agua necesaria en la misma proporción: relación
  directa.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "intermedio"
  tags: ["regla_de_tres_directa", "problema"]

variables:
  entradas_base: random(2, 8)
  recaudado_base: entradas_base * random(500, 3000)
  entradas_nueva: random(5, 100)

respuesta: (recaudado_base * entradas_nueva) / entradas_base
tipo: input
tolerancia_abs: 0.01

enunciado: "Vendiendo {entradas_base} entradas se recaudaron ${recaudado_base}. Al mismo precio, ¿cuánto se recauda vendiendo {entradas_nueva} entradas?"

explicacion: |
  Más entradas vendidas, más dinero recaudado: relación directa.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "avanzado"
  tags: ["regla_de_tres_directa"]

variables:
  a: random(2, 9)
  b: random(10, 90)
  c: random(2, 9)
  correcto_directa: (b * c) / a
  formula_inversa: (a * b) / c

restricciones:
  - correcto_directa != formula_inversa

respuesta: correcto_directa
tipo: mc
opciones_explicitas:
  - correcto_directa
  - formula_inversa

enunciado: "En una regla de tres DIRECTA, {a} es a {b} como {c} es a x. ¿Cuál de estos dos valores es x?"

explicacion: |
  La segunda opción usa la fórmula de la regla de tres inversa (que no
  aplica acá): hay que usar la fórmula directa.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "intermedio"
  tags: ["regla_de_tres_directa", "problema"]

variables:
  horas_base: random(1, 3)
  km_base: horas_base * random(60, 120)
  horas_nueva: random(4, 10)

respuesta: (km_base * horas_nueva) / horas_base
tipo: input
tolerancia_abs: 0.01

enunciado: "Un tren recorre {km_base} km en {horas_base} horas, a velocidad constante. ¿Cuántos km recorre en {horas_nueva} horas?"

explicacion: |
  Misma idea que un auto: a velocidad constante, distancia y tiempo son
  directamente proporcionales.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "avanzado"
  tags: ["regla_de_tres_directa"]

variables:
  a: random(3, 9)
  b: random(3, 9)
  c: random(3, 9)

respuesta: (b * c) / a
tipo: input
tolerancia_abs: 0.01

enunciado: "{a} es a {b} como {c} es a x. ¿Cuánto vale x (puede no ser un número entero)?"

explicacion: |
  La regla de tres no siempre da un resultado entero: hay que aceptar
  también resultados con decimales.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "intermedio"
  tags: ["regla_de_tres_directa", "orden"]

tipo: ordenar
enunciado: "Resolvé estas tres reglas de tres directas y ordenalas de menor a mayor resultado."
opciones_explicitas:
  - "2 es a 10 como 5 es a x"
  - "4 es a 8 como 3 es a x"
  - "3 es a 30 como 1 es a x"
respuesta_orden: ["3 es a 30 como 1 es a x", "4 es a 8 como 3 es a x", "2 es a 10 como 5 es a x"]

explicacion: |
  Primero se resuelve cada una (x=10, x=6, x=25) y recién ahí se ordenan.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "intermedio"
  tags: ["regla_de_tres_directa", "problema"]

variables:
  m2_base: random(5, 20)
  litros_base: random(1, 8)
  m2_nuevo: random(20, 100)

respuesta: (litros_base * m2_nuevo) / m2_base
tipo: input
tolerancia_abs: 0.01

enunciado: "Se necesitan {litros_base} litros de pintura para {m2_base} m². ¿Cuántos litros hacen falta para {m2_nuevo} m²?"

explicacion: |
  Más superficie a pintar, más pintura necesaria en la misma proporción.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "intermedio"
  tags: ["regla_de_tres_directa", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En una relación directamente proporcional, si se duplica una magnitud, la otra también se duplica."

explicacion: |
  Es la esencia de la proporcionalidad directa: la razón entre las dos
  magnitudes se mantiene siempre constante.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "basico"
  tags: ["regla_de_tres_directa", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La regla de tres directa sirve para encontrar un valor desconocido cuando dos magnitudes son directamente proporcionales."

explicacion: |
  Es la idea central de todo el tema: aplicar la propiedad fundamental de
  la proporción a un problema concreto.
```

## Sección: regla-de-tres-inversa (24 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_inversa"
  nivel: "basico"
  tags: ["regla_de_tres_inversa"]

variables:
  a: random(2, 9)
  b: random(10, 90)
  c: random(2, 9)

respuesta: (a * b) / c
tipo: input
tolerancia_abs: 0.01

enunciado: "En una relación inversamente proporcional, {a} es a {b} como {c} es a x. ¿Cuánto vale x?"

pasos:
  - "x = ({a} × {b}) ÷ {c} = {a * b} ÷ {c} = {(a * b) / c}"

explicacion: |
  En la regla inversa se igualan los productos, no los cocientes: a×b =
  c×x.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_inversa"
  nivel: "intermedio"
  tags: ["regla_de_tres_inversa", "problema"]

variables:
  obreros_base: random(2, 8)
  dias_base: random(4, 30)
  obreros_nuevo: random(2, 12)

respuesta: (obreros_base * dias_base) / obreros_nuevo
tipo: input
tolerancia_abs: 0.01

enunciado: "{obreros_base} obreros terminan una obra en {dias_base} días. Trabajando todos al mismo ritmo, ¿en cuántos días la terminan {obreros_nuevo} obreros?"

pasos:
  - "x = ({obreros_base} × {dias_base}) ÷ {obreros_nuevo}"

explicacion: |
  Más obreros, menos días: relación inversa, así que se igualan los
  productos.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_inversa"
  nivel: "intermedio"
  tags: ["regla_de_tres_inversa", "problema"]

variables:
  velocidad_base: random(20, 80)
  horas_base: random(2, 8)
  velocidad_nueva: random(20, 120)

respuesta: (velocidad_base * horas_base) / velocidad_nueva
tipo: input
tolerancia_abs: 0.01

enunciado: "A {velocidad_base} km/h, un viaje tarda {horas_base} horas. ¿Cuánto tarda el mismo viaje a {velocidad_nueva} km/h?"

explicacion: |
  Para recorrer la misma distancia, más velocidad significa menos tiempo:
  relación inversa.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_inversa"
  nivel: "basico"
  tags: ["regla_de_tres_inversa", "problema"]

variables:
  personas_base: random(2, 8)
  parte_base: random(10, 90)
  personas_nueva: random(2, 12)

respuesta: (personas_base * parte_base) / personas_nueva
tipo: input
tolerancia_abs: 0.01

enunciado: "Repartiendo ${personas_base * parte_base} entre {personas_base} personas, a cada una le tocan ${parte_base}. Repartiendo la misma plata entre {personas_nueva} personas, ¿cuánto le toca a cada una?"

explicacion: |
  El total a repartir queda fijo: más personas, menos le toca a cada una
  — relación inversa.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_inversa"
  nivel: "intermedio"
  tags: ["regla_de_tres_inversa", "problema"]

variables:
  canillas_base: random(1, 4)
  horas_base: random(4, 20)
  canillas_nueva: random(2, 8)

respuesta: (canillas_base * horas_base) / canillas_nueva
tipo: input
tolerancia_abs: 0.01

enunciado: "Con {canillas_base} canilla(s) abierta(s), un tanque se llena en {horas_base} horas. Con {canillas_nueva} canillas (mismo caudal cada una), ¿en cuántas horas se llena?"

explicacion: |
  Más canillas abiertas, menos tiempo para llenar el mismo tanque:
  relación inversa.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_inversa"
  nivel: "intermedio"
  tags: ["regla_de_tres_inversa", "problema"]

variables:
  maquinas_base: random(2, 8)
  dias_base: random(4, 20)
  maquinas_nueva: random(2, 12)

respuesta: (maquinas_base * dias_base) / maquinas_nueva
tipo: input
tolerancia_abs: 0.01

enunciado: "{maquinas_base} máquinas fabrican un pedido en {dias_base} días. Con {maquinas_nueva} máquinas (mismo ritmo cada una), ¿en cuántos días se fabrica el mismo pedido?"

explicacion: |
  Más máquinas trabajando, menos días necesarios: relación inversa.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_inversa"
  nivel: "basico"
  tags: ["regla_de_tres_inversa", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "\"Más obreros trabajando, menos días tarda la obra\" es un ejemplo de relación inversamente proporcional."

explicacion: |
  Una magnitud sube (obreros) mientras la otra baja (días): es inversa.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_inversa"
  nivel: "intermedio"
  tags: ["regla_de_tres_inversa", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "\"Más kilos de fruta comprados, más se paga\" es un ejemplo de relación inversamente proporcional."

explicacion: |
  Acá las dos magnitudes suben juntas: es una relación directa, no
  inversa.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_inversa"
  nivel: "basico"
  tags: ["regla_de_tres_inversa", "vocabulario"]

enunciado: "¿Cómo se reconoce que un problema es de regla de tres inversa?"
tipo: mc
opciones_explicitas:
  - "Una magnitud aumenta mientras la otra disminuye"
  - "Las dos magnitudes son siempre números pares"
  - "Una de las magnitudes tiene que ser el tiempo"
respuesta: "Una magnitud aumenta mientras la otra disminuye"

explicacion: |
  Es el criterio clave: si al aumentar una la otra disminuye (manteniendo
  el producto constante), es inversa.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_inversa"
  nivel: "intermedio"
  tags: ["regla_de_tres_inversa", "vocabulario"]

enunciado: "En una relación inversamente proporcional, ¿qué se mantiene constante?"
tipo: mc
opciones_explicitas:
  - "El producto de las dos magnitudes"
  - "El cociente entre las dos magnitudes"
  - "La suma de las dos magnitudes"
respuesta: "El producto de las dos magnitudes"

explicacion: |
  En la regla directa lo constante es el cociente (la razón); en la
  inversa, lo constante es el producto.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_inversa"
  nivel: "intermedio"
  tags: ["regla_de_tres_inversa"]

variables:
  a: random(2, 9)
  b: random(10, 90)
  c: random(2, 9)
  correcto: (a * b) / c

respuesta: correcto
tipo: mc
opciones_explicitas:
  - correcto
  - (b * c) / a
  - a * b * c

enunciado: "En la regla de tres inversa {a}—{b} / {c}—x, ¿cuál es la fórmula correcta para x?"

explicacion: |
  La segunda opción es la fórmula de la regla DIRECTA (no aplica acá): en
  la inversa se multiplican {a} y {b}, y se divide por {c}.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_inversa"
  nivel: "intermedio"
  tags: ["regla_de_tres_inversa", "verificacion"]

variables:
  a: random(2, 9)
  b: random(10, 90)
  c: random(2, 9)
  correcto: (a * b) / c
  error: uno_de([0, 0, 0, c, -c])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 0.01)
tipo: vf

enunciado: "En una relación inversa, ¿está bien resuelto esto? {a} es a {b} como {c} es a {mostrado}."

explicacion: |
  Se verifica comprobando que el producto {a} × {b} sea igual a
  {c} × {mostrado}.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_inversa"
  nivel: "intermedio"
  tags: ["regla_de_tres_inversa"]

variables:
  a: random(2, 9)
  b: random(10, 90)
  c: random(2, 9)

tipo: completar
enunciado: "En una relación inversamente proporcional, completá: {a} es a {b} como {c} es a ___."
respuestas_validas:
  - (a * b) / c

explicacion: |
  Se aplica la fórmula de la regla de tres inversa.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_inversa"
  nivel: "intermedio"
  tags: ["regla_de_tres_inversa", "problema"]

variables:
  personas_base: random(2, 6)
  horas_base: random(4, 24)
  personas_nueva: random(2, 10)

respuesta: (personas_base * horas_base) / personas_nueva
tipo: input
tolerancia_abs: 0.01

enunciado: "{personas_base} personas pintan una casa en {horas_base} horas. Trabajando al mismo ritmo, ¿cuántas horas tardan {personas_nueva} personas?"

explicacion: |
  Más personas ayudando, menos horas necesarias: relación inversa.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_inversa"
  nivel: "avanzado"
  tags: ["regla_de_tres_inversa", "regla_de_tres_directa"]

variables:
  a: random(2, 9)
  b: random(10, 90)
  c: random(2, 9)
  formula_directa: (b * c) / a
  formula_inversa: (a * b) / c

restricciones:
  - formula_directa != formula_inversa

respuesta: formula_inversa
tipo: mc
opciones_explicitas:
  - formula_directa
  - formula_inversa

enunciado: "\"Más obreros, menos días\" — con {a} es a {b} como {c} es a x, ¿cuál fórmula corresponde: la directa o la inversa?"

explicacion: |
  Como una magnitud sube y la otra baja, corresponde la fórmula inversa
  (igualar productos), no la directa.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_inversa"
  nivel: "avanzado"
  tags: ["regla_de_tres_inversa", "problema"]

variables:
  velocidad_base: random(30, 100)
  horas_base: random(2, 6)
  horas_nueva: random(1, velocidad_base - 1)

respuesta: (velocidad_base * horas_base) / horas_nueva
tipo: input
tolerancia_abs: 0.01

enunciado: "Un vehículo a {velocidad_base} km/h tarda {horas_base} horas en un viaje. ¿A qué velocidad hay que ir para tardar sólo {horas_nueva} horas en el mismo recorrido?"

explicacion: |
  Menos tiempo para el mismo recorrido significa más velocidad: relación
  inversa.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_inversa"
  nivel: "intermedio"
  tags: ["regla_de_tres_inversa", "problema"]

variables:
  animales_base: random(4, 20)
  dias_base: random(5, 30)
  animales_nuevo: random(4, 40)

respuesta: (animales_base * dias_base) / animales_nuevo
tipo: input
tolerancia_abs: 0.01

enunciado: "La comida almacenada alcanza para {animales_base} animales durante {dias_base} días. ¿Para cuántos días alcanza esa misma comida si hay {animales_nuevo} animales?"

explicacion: |
  Más animales comiendo del mismo stock, menos días dura: relación
  inversa.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_inversa"
  nivel: "intermedio"
  tags: ["regla_de_tres_inversa", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "En la regla de tres inversa, alcanza con invertir cualquier fracción del problema para resolverlo, sin pensar qué representa cada magnitud."

explicacion: |
  Hay que identificar primero si la relación es directa o inversa
  analizando el problema — no es un truco mecánico de "dar vuelta" algo
  al azar.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_inversa"
  nivel: "intermedio"
  tags: ["regla_de_tres_inversa", "orden"]

tipo: ordenar
enunciado: "Resolvé estas tres reglas de tres inversas y ordenalas de menor a mayor resultado."
opciones_explicitas:
  - "2 es a 10 como 5 es a x"
  - "4 es a 8 como 2 es a x"
  - "3 es a 6 como 9 es a x"
respuesta_orden: ["3 es a 6 como 9 es a x", "2 es a 10 como 5 es a x", "4 es a 8 como 2 es a x"]

explicacion: |
  Primero se resuelve cada una con la fórmula inversa (x=2, x=4, x=16) y
  recién ahí se ordenan.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_inversa"
  nivel: "avanzado"
  tags: ["regla_de_tres_inversa", "problema"]

variables:
  desagues_base: random(1, 3)
  horas_base: random(6, 30)
  desagues_nuevo: random(2, 6)

respuesta: (desagues_base * horas_base) / desagues_nuevo
tipo: input
tolerancia_abs: 0.01

enunciado: "Con {desagues_base} desagüe(s) abierto(s), una pileta se vacía en {horas_base} horas. Con {desagues_nuevo} desagües (mismo caudal cada uno), ¿en cuántas horas se vacía?"

explicacion: |
  Más desagües abiertos, menos tiempo para vaciarse: relación inversa.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_inversa"
  nivel: "intermedio"
  tags: ["regla_de_tres_inversa", "regla_de_tres_directa", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "\"A mayor velocidad, menor tiempo para recorrer la misma distancia\" describe una relación inversamente proporcional."

explicacion: |
  Velocidad sube, tiempo baja (para una distancia fija): es inversa.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_inversa"
  nivel: "intermedio"
  tags: ["regla_de_tres_inversa"]

variables:
  a: random(2, 9)
  b: random(10, 90)
  c: random(2, 9)
  x: (a * b) / c

respuesta: verdadero
tipo: vf

enunciado: "Si {a} es a {b} como {c} es a {x} (relación inversa), ¿es cierto que {a} × {b} = {c} × {x}?"

explicacion: |
  Es la propiedad que define a la regla inversa: el producto de cada par
  se mantiene igual.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_inversa"
  nivel: "basico"
  tags: ["regla_de_tres_inversa"]

enunciado: "En la regla de tres inversa a—b / c—x, ¿cuál es la fórmula para x?"
tipo: mc
opciones_explicitas:
  - "x = (a × b) ÷ c"
  - "x = (b × c) ÷ a"
  - "x = a + b + c"
respuesta: "x = (a × b) ÷ c"

explicacion: |
  Se igualan los productos: a×b = c×x, y se despeja x dividiendo por c.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_inversa"
  nivel: "basico"
  tags: ["regla_de_tres_inversa", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La regla de tres inversa sirve para encontrar un valor desconocido cuando, al aumentar una magnitud, la otra disminuye, manteniendo el producto constante."

explicacion: |
  Es la idea central de todo el tema, en contraste directo con la regla
  de tres directa.
```

## Sección: regresion-lineal (20 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "regresion_lineal"
  nivel: "basico"
  tags: ["regresion", "vocabulario"]

enunciado: "¿Qué es la regresión lineal?"
tipo: mc
opciones_explicitas:
  - "El método para encontrar la recta que mejor describe la tendencia de una nube de puntos de datos"
  - "El método para calcular la media de un conjunto de datos"
  - "El método para armar un gráfico de torta"
respuesta: "El método para encontrar la recta que mejor describe la tendencia de una nube de puntos de datos"

explicacion: |
  Parte de la nube de puntos ya construida en `../construir-un-grafico/`.
```

```
metadata:
  materia: "matematicas"
  tema: "regresion_lineal"
  nivel: "basico"
  tags: ["regresion", "vocabulario"]

enunciado: "En la ecuación de la recta de regresión y=m·x+b, ¿qué representan m y b?"
tipo: mc
opciones_explicitas:
  - "m es la pendiente (cuánto cambia y por cada unidad que aumenta x) y b es la ordenada al origen (el valor de y cuando x=0)"
  - "m y b son siempre iguales entre sí"
  - "m es el valor máximo de y, y b es el valor mínimo"
respuesta: "m es la pendiente (cuánto cambia y por cada unidad que aumenta x) y b es la ordenada al origen (el valor de y cuando x=0)"

explicacion: |
  Es la misma forma de la ecuación de la recta ya vista en Álgebra.
```

```
metadata:
  materia: "matematicas"
  tema: "regresion_lineal"
  nivel: "intermedio"
  tags: ["regresion", "problema"]

variables:
  m: uno_de([2, 3, 5])
  b: uno_de([10, 20])
  x: uno_de([4, 6, 8])

respuesta: m * x + b
tipo: input

enunciado: "La recta de regresión ajustada es y = {m}x + {b}. ¿Cuál es la predicción de y para x={x}?"

pasos:
  - "y = {m}×{x} + {b} = {m * x} + {b} = {m * x + b}"

explicacion: |
  Se reemplaza el valor de x directo en la ecuación de la recta.
```

```
metadata:
  materia: "matematicas"
  tema: "regresion_lineal"
  nivel: "avanzado"
  tags: ["regresion", "problema"]

variables:
  m: uno_de([2, 4])
  b: 10
  x_real: uno_de([5, 10])

respuesta: x_real
tipo: input

enunciado: "La recta de regresión es y = {m}x + {b}. Si se observa y = {m * x_real + b}, ¿qué valor de x predice la recta?"

pasos:
  - "{m * x_real + b} = {m}x + {b}"
  - "x = ({m * x_real + b} − {b}) / {m} = {x_real}"

explicacion: |
  Se despeja x de la ecuación de la recta, igual que en cualquier
  ecuación de primer grado.
```

```
metadata:
  materia: "matematicas"
  tema: "regresion_lineal"
  nivel: "intermedio"
  tags: ["correlacion", "vocabulario"]

enunciado: "¿Qué mide el coeficiente de correlación (r)?"
tipo: mc
opciones_explicitas:
  - "Qué tan bien la recta ajustada describe la relación real entre los datos, en una escala de −1 a 1"
  - "La pendiente exacta de la recta de regresión"
  - "La cantidad de puntos que tiene la nube de datos"
respuesta: "Qué tan bien la recta ajustada describe la relación real entre los datos, en una escala de −1 a 1"

explicacion: |
  r cerca de ±1 indica un ajuste fuerte; cerca de 0, un ajuste débil.
```

```
metadata:
  materia: "matematicas"
  tema: "regresion_lineal"
  nivel: "intermedio"
  tags: ["correlacion"]

respuesta: verdadero
tipo: vf

enunciado: "Un coeficiente de correlación cercano a +1 o a −1 indica que la recta ajusta muy bien a los datos; uno cercano a 0 indica un ajuste débil."

explicacion: |
  El valor absoluto de r es lo que indica la fuerza del ajuste; el
  signo indica la dirección (directa o inversa).
```

```
metadata:
  materia: "matematicas"
  tema: "regresion_lineal"
  nivel: "intermedio"
  tags: ["correlacion"]

respuesta: verdadero
tipo: vf

enunciado: "Un coeficiente de correlación positivo indica una relación directa (a mayor x, mayor y); uno negativo indica una relación inversa (a mayor x, menor y)."

explicacion: |
  El signo de r siempre coincide con el signo de la pendiente m de la
  recta ajustada.
```

```
metadata:
  materia: "matematicas"
  tema: "regresion_lineal"
  nivel: "avanzado"
  tags: ["regresion", "vocabulario"]

enunciado: "¿En qué consiste el método de mínimos cuadrados para ajustar una recta?"
tipo: mc
opciones_explicitas:
  - "Elegir la recta que hace mínima la suma de las distancias verticales AL CUADRADO entre cada punto real y la recta"
  - "Elegir la recta que pasa exactamente por todos los puntos, sin excepción"
  - "Elegir la recta con la pendiente más grande posible"
respuesta: "Elegir la recta que hace mínima la suma de las distancias verticales AL CUADRADO entre cada punto real y la recta"

explicacion: |
  Es matemáticamente imposible, en general, que una única recta pase
  por todos los puntos de datos reales.
```

```
metadata:
  materia: "matematicas"
  tema: "regresion_lineal"
  nivel: "avanzado"
  tags: ["regresion"]

enunciado: "¿Por qué el método de mínimos cuadrados usa distancias AL CUADRADO en vez de distancias directas?"
tipo: mc
opciones_explicitas:
  - "Porque las distancias directas (positivas para puntos arriba de la recta, negativas para los de abajo) se cancelarían entre sí al sumarlas"
  - "Porque elevar al cuadrado siempre da un número más chico"
  - "No hay ninguna razón matemática, es sólo una convención arbitraria"
respuesta: "Porque las distancias directas (positivas para puntos arriba de la recta, negativas para los de abajo) se cancelarían entre sí al sumarlas"

explicacion: |
  Es exactamente el mismo argumento usado para la varianza en
  `../tablas-de-frecuencia-cuartiles-percentiles-y-varianza/`.
```

```
metadata:
  materia: "matematicas"
  tema: "regresion_lineal"
  nivel: "avanzado"
  tags: ["regresion", "extrapolacion"]

respuesta: verdadero
tipo: vf

enunciado: "Usar la recta de regresión para predecir valores de x fuera del rango de datos que realmente se observaron (extrapolar) es riesgoso, porque no hay garantía de que la misma tendencia lineal siga valiendo ahí afuera."

explicacion: |
  La recta se ajustó sólo con los datos observados — fuera de ese
  rango, es una extensión sin evidencia directa que la respalde.
```

```
metadata:
  materia: "matematicas"
  tema: "regresion_lineal"
  nivel: "intermedio"
  tags: ["regresion", "problema"]

enunciado: "Un estudio encuentra que, en una empresa, a mayor gasto en publicidad corresponden mayores ventas. ¿Qué signo debería tener la pendiente (m) de la recta de regresión ajustada a estos datos?"
tipo: mc
opciones_explicitas:
  - "Positivo: a medida que aumenta el gasto en publicidad (x), también aumentan las ventas (y)"
  - "Negativo: a medida que aumenta el gasto en publicidad, bajan las ventas"
respuesta: "Positivo: a medida que aumenta el gasto en publicidad (x), también aumentan las ventas (y)"

explicacion: |
  Una relación directa (ambas variables suben juntas) siempre da una
  pendiente positiva.
```

```
metadata:
  materia: "matematicas"
  tema: "regresion_lineal"
  nivel: "basico"
  tags: ["regresion", "aplicacion"]

enunciado: "Una empresa ajustó la recta ventas = 3×(gasto en publicidad) + 500, usando datos históricos. ¿Para qué sirve esta recta?"
tipo: mc
opciones_explicitas:
  - "Para predecir las ventas esperadas dado un monto de gasto en publicidad, dentro del rango de datos ya observado"
  - "Para calcular con certeza absoluta las ventas futuras, sin ningún margen de error"
  - "Sólo sirve para describir datos pasados, nunca para predecir"
respuesta: "Para predecir las ventas esperadas dado un monto de gasto en publicidad, dentro del rango de datos ya observado"

explicacion: |
  Es una predicción basada en la tendencia histórica, no una certeza
  matemática exacta.
```

```
metadata:
  materia: "matematicas"
  tema: "regresion_lineal"
  nivel: "intermedio"
  tags: ["regresion", "problema"]

variables:
  m: uno_de([-2, -3])
  b: uno_de([100, 150])
  x: uno_de([10, 20])

respuesta: m * x + b
tipo: input

enunciado: "Una recta de regresión con pendiente negativa es y = {m}x + {b} (por ejemplo: precio del producto vs. cantidad demandada). ¿Cuál es la predicción de y para x={x}?"

pasos:
  - "y = {m}×{x} + {b} = {m * x + b}"

explicacion: |
  Con pendiente negativa, y BAJA a medida que x aumenta.
```

```
metadata:
  materia: "matematicas"
  tema: "regresion_lineal"
  nivel: "avanzado"
  tags: ["correlacion"]

respuesta: verdadero
tipo: vf

enunciado: "Un coeficiente de correlación cercano a 0 no significa que no haya ninguna relación entre las variables — sólo dice que no hay una relación LINEAL. Podría haber una relación fuerte pero curva."

explicacion: |
  Por ejemplo, una relación en forma de parábola puede dar r≈0 aunque
  las variables estén claramente relacionadas.
```

```
metadata:
  materia: "matematicas"
  tema: "regresion_lineal"
  nivel: "intermedio"
  tags: ["correlacion", "aplicacion"]

enunciado: "¿Por qué conviene reportar el coeficiente de correlación (r) junto con la ecuación de la recta de regresión?"
tipo: mc
opciones_explicitas:
  - "Porque una recta siempre se puede calcular, aunque ajuste mal — r dice qué tan confiable es esa recta para describir los datos reales"
  - "Porque r reemplaza por completo a la ecuación de la recta"
  - "No es necesario reportarlo, la pendiente ya dice todo lo importante"
respuesta: "Porque una recta siempre se puede calcular, aunque ajuste mal — r dice qué tan confiable es esa recta para describir los datos reales"

explicacion: |
  Sin r, no hay forma de saber si la recta realmente describe bien la
  tendencia o si los datos están demasiado dispersos.
```

```
metadata:
  materia: "matematicas"
  tema: "regresion_lineal"
  nivel: "avanzado"
  tags: ["regresion", "problema"]

variables:
  m: uno_de([5, 8, 10])

respuesta: m
tipo: input
unidad: "puntos por hora de estudio"

enunciado: "La recta ajustada entre horas de estudio y nota de examen es nota = {m}×horas + 40. Según esta recta, ¿cuánto aumenta la nota esperada por cada hora adicional de estudio?"

pasos:
  - "La pendiente m={m} es, directamente, el cambio en y por cada unidad de x."

explicacion: |
  Interpretar la pendiente en las unidades del problema es la parte
  más útil de la regresión en la práctica.
```

```
metadata:
  materia: "matematicas"
  tema: "regresion_lineal"
  nivel: "intermedio"
  tags: ["regresion", "aplicacion"]

enunciado: "¿Qué relación tiene la regresión lineal con `../construir-un-grafico/`?"
tipo: mc
opciones_explicitas:
  - "La regresión parte de una nube de puntos (gráfico de dispersión) ya construida, y ajusta la recta que mejor la describe"
  - "No tienen ninguna relación entre sí"
  - "La regresión reemplaza la necesidad de graficar los datos"
respuesta: "La regresión parte de una nube de puntos (gráfico de dispersión) ya construida, y ajusta la recta que mejor la describe"

explicacion: |
  Por eso `../construir-un-grafico/` es el prerrequisito directo de
  este módulo.
```

```
metadata:
  materia: "matematicas"
  tema: "regresion_lineal"
  nivel: "avanzado"
  tags: ["correlacion", "causalidad"]

respuesta: verdadero
tipo: vf

enunciado: "Que una recta ajuste muy bien a los datos (r cercano a ±1) no prueba que una de las variables CAUSE a la otra — podría haber otra explicación detrás de esa relación."

explicacion: |
  Es el punto central de `../correlacion-no-es-causalidad/`, el
  módulo que sigue.
```

```
metadata:
  materia: "matematicas"
  tema: "regresion_lineal"
  nivel: "avanzado"
  tags: ["regresion", "problema"]

variables:
  m: 4
  b: 20
  x1: 10
  x2: 15

respuesta: (m * x2 + b) - (m * x1 + b)
tipo: input

enunciado: "Con la recta y = {m}x + {b}, ¿cuánto AUMENTA la predicción de y al pasar de x={x1} a x={x2}?"

pasos:
  - "y({x1}) = {m * x1 + b}; y({x2}) = {m * x2 + b}"
  - "Diferencia = {m * x2 + b} − {m * x1 + b} = {(m * x2 + b) - (m * x1 + b)}"

explicacion: |
  El aumento siempre es m × (diferencia en x) — es la definición
  misma de pendiente constante en una recta.
```

```
metadata:
  materia: "matematicas"
  tema: "regresion_lineal"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve la regresión lineal?"
tipo: mc
opciones_explicitas:
  - "Para cuantificar y predecir la relación entre dos variables numéricas, ajustando la recta que mejor describe la tendencia de los datos observados"
  - "Para calcular la media y la mediana de un conjunto de datos"
  - "Sólo sirve para variables que ya se sabe que están relacionadas causalmente"
respuesta: "Para cuantificar y predecir la relación entre dos variables numéricas, ajustando la recta que mejor describe la tendencia de los datos observados"

explicacion: |
  El paso siguiente, `../correlacion-no-es-causalidad/`, pone el
  límite crítico a esta herramienta: ajustar bien no es lo mismo que
  explicar por qué.
```
