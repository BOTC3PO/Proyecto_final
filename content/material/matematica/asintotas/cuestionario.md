# Matematica — asintotas (cuestionario, 22 preguntas VBLang)

> Tema: `matematica/asintotas`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — pregunta 1

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

### 2 — pregunta 2

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

### 3 — pregunta 3

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

### 4 — pregunta 4

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

### 5 — pregunta 5

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

### 6 — pregunta 6

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

### 7 — pregunta 7

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

### 8 — pregunta 8

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

### 9 — pregunta 9

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

### 10 — pregunta 10

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

### 11 — pregunta 11

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

### 12 — pregunta 12

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

### 13 — pregunta 13

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

### 14 — pregunta 14

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

### 15 — pregunta 15

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

### 16 — pregunta 16

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

### 17 — pregunta 17

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

### 18 — pregunta 18

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

### 19 — pregunta 19

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

### 20 — pregunta 20

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

### 21 — pregunta 21

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

### 22 — pregunta 22

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
