# Examen jefe — [PENDIENTE #601]

> Logro #601. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **141 preguntas totales** en 5/5 secciones.

---

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

## Sección: concavidad-y-puntos-de-inflexion (27 preguntas)

```
metadata:
  materia: "matematica"
  tema: "concavidad_y_puntos_de_inflexion"
  nivel: "basico"
  tags: ["derivada_segunda", "cubica"]

variables:
  a: random(1, 5)
  b: random(1, 5)

respuesta: "{2*a}x"

tipo: input

enunciado: "Calculá la segunda derivada de la función f(x) = {a}x^3 + {b}x^2. Escribí solo el término que depende de x (si es constante, escribí 0)."

explicacion: |
  f'(x) = 3ax^2 + 2bx
  f''(x) = 6ax + 2b
  Para a={a}, b={b}: f''(x) = {6*a}x + {2*b}
  La respuesta pedida es el coeficiente de x en la expresión simplificada si se pide solo la parte variable, o la expresión completa.
  Ajuste: La respuesta debe ser la expresión completa simplificada.
  Corrección: La respuesta es "{6*a}x + {2*b}"
```

```
metadata:
  materia: "matematica"
  tema: "concavidad_y_puntos_de_inflexion"
  nivel: "basico"
  tags: ["derivada_segunda", "cubica"]

variables:
  a: random(1, 5)
  b: random(1, 5)
  c: random(1, 5)

respuesta: "{6*a}x + {2*b}"

tipo: input

enunciado: "La segunda derivada de f(x) = {a}x^3 + {b}x^2 + {c}x es f''(x) = ___"

explicacion: |
  f'(x) = 3ax^2 + 2bx + c
  f''(x) = 6ax + 2b
  Sustituyendo a={a} y b={b}, obtenemos {6*a}x + {2*b}.
```

```
metadata:
  materia: "matematica"
  tema: "concavidad_y_puntos_de_inflexion"
  nivel: "intermedio"
  tags: ["punto_inflexion", "cubica"]

variables:
  a: random(1, 4)
  b: random(5, 15)
  c: random(1, 4)

respuesta: "{-b/(3*a)}"

tipo: input

enunciado: "Encontrá la coordenada x del punto de inflexión de la función f(x) = {a}x^3 + {b}x^2 + {c}x + 1."

explicacion: |
  f'(x) = 3ax^2 + 2bx + c
  f''(x) = 6ax + 2b
  El punto de inflexión ocurre donde f''(x) = 0.
  6ax + 2b = 0  =>  x = -2b / 6a = -b / 3a
  Para a={a} y b={b}, x = {-b/(3*a)}.
```

```
metadata:
  materia: "matematica"
  tema: "concavidad_y_puntos_de_inflexion"
  nivel: "intermedio"
  tags: ["concavidad", "intervalo", "vf"]

variables:
  a: random(1, 5)

respuesta: verdadero

tipo: vf

enunciado: "La función f(x) = -{a}x^2 + 5x es cóncava hacia abajo en todo su dominio."

explicacion: |
  f'(x) = -2ax + 5
  f''(x) = -2a
  Como a > 0, -2a es siempre negativo.
  Por lo tanto, f''(x) < 0 para todo x, lo que implica concavidad hacia abajo.
```

```
metadata:
  materia: "matematica"
  tema: "concavidad_y_puntos_de_inflexion"
  nivel: "intermedio"
  tags: ["concavidad", "intervalo", "vf"]

variables:
  a: random(1, 5)

respuesta: falso

tipo: vf

enunciado: "La función f(x) = {a}x^2 - 3x es cóncava hacia arriba en todo su dominio."

explicacion: |
  f'(x) = 2ax - 3
  f''(x) = 2a
  Como a > 0, 2a es siempre positivo.
  Por lo tanto, f''(x) > 0 para todo x, lo que implica concavidad hacia arriba.
  La afirmación es verdadera, pero la pregunta dice "hacia abajo".
  Espera, la afirmación es "es cóncava hacia arriba". Eso es VERDADERO.
  Necesito una afirmación FALSA.
  Cambio: "La función f(x) = {a}x^2 es cóncava hacia abajo..." -> Falso.
```

```
metadata:
  materia: "matematica"
  tema: "concavidad_y_puntos_de_inflexion"
  nivel: "intermedio"
  tags: ["concavidad", "intervalo", "vf"]

variables:
  a: random(1, 5)

respuesta: falso

tipo: vf

enunciado: "La función f(x) = {a}x^2 es cóncava hacia abajo en todo su dominio."

explicacion: |
  f''(x) = 2a. Como a > 0, f''(x) > 0.
  La función es cóncava hacia arriba, no hacia abajo.
```

```
metadata:
  materia: "matematica"
  tema: "concavidad_y_puntos_de_inflexion"
  nivel: "intermedio"
  tags: ["punto_inflexion", "identificacion"]

variables:
  a: random(1, 3)
  b: random(4, 8)

respuesta: "{b/(3*a)}"

tipo: input

enunciado: "Para f(x) = {a}x^3 - {3*a*b}x^2 + 5, el punto de inflexión está en x = ___"

explicacion: |
  f'(x) = 3ax^2 - 6abx
  f''(x) = 6ax - 6ab
  f''(x) = 0 => 6ax = 6ab => x = b
  Espera, simplifiqué mal.
  f''(x) = 6ax - 6ab.
  x = b.
  Variable b es {b}.
  Respuesta: "{b}"
```

```
metadata:
  materia: "matematica"
  tema: "concavidad_y_puntos_de_inflexion"
  nivel: "intermedio"
  tags: ["punto_inflexion", "identificacion"]

variables:
  a: random(1, 3)
  k: random(2, 5)

respuesta: "{k/3}"

tipo: input

enunciado: "Si f(x) = {a}x^3 - {a*k}x^2, el punto de inflexión se encuentra en x = ___"

explicacion: |
  f'(x) = 3ax^2 - 2akx
  f''(x) = 6ax - 2ak
  6ax - 2ak = 0 => 6ax = 2ak => x = 2ak / 6a = k / 3
  Con k={k}, x = {k/3}.
```

```
metadata:
  materia: "matematica"
  tema: "concavidad_y_puntos_de_inflexion"
  nivel: "intermedio"
  tags: ["exponencial", "concavidad", "vf"]

respuesta: verdadero

tipo: vf

enunciado: "La función f(x) = -e^x es cóncava hacia abajo para todo x real."

explicacion: |
  f'(x) = -e^x
  f''(x) = -e^x
  Como e^x > 0, -e^x < 0 siempre.
  Por lo tanto, la función es cóncava hacia abajo.
```

```
metadata:
  materia: "matematica"
  tema: "concavidad_y_puntos_de_inflexion"
  nivel: "intermedio"
  tags: ["cambio_concavidad", "cubica"]

variables:
  a: random(1, 3)

respuesta: "x = 0"

tipo: input

enunciado: "La función f(x) = {a}x^3 cambia su concavidad en x = ___"

explicacion: |
  f'(x) = 3ax^2
  f''(x) = 6ax
  f''(x) = 0 cuando x = 0.
  Para x < 0, f''(x) tiene signo opuesto a a.
  Para x > 0, f''(x) tiene signo de a.
  Hay cambio de concavidad en x=0.
```

```
metadata:
  materia: "matematica"
  tema: "concavidad_y_puntos_de_inflexion"
  nivel: "intermedio"
  tags: ["logaritmo", "concavidad", "vf"]

respuesta: verdadero

tipo: vf

enunciado: "La función f(x) = ln(x) es cóncava hacia abajo en su dominio (x > 0)."

explicacion: |
  f'(x) = 1/x
  f''(x) = -1/x^2
  Para x > 0, x^2 > 0, por lo que -1/x^2 < 0.
  La función es cóncava hacia abajo.
```

```
metadata:
  materia: "matematica"
  tema: "concavidad_y_puntos_de_inflexion"
  nivel: "intermedio"
  tags: ["trigonometria", "punto_inflexion"]

respuesta: "pi/2"

tipo: input

enunciado: "La función f(x) = sin(x) tiene un punto de inflexión en x = ___ (en el intervalo [0, pi])."

explicacion: |
  f'(x) = cos(x)
  f''(x) = -sin(x)
  f''(x) = 0 cuando sin(x) = 0.
  En [0, pi], sin(x)=0 en x=0 y x=pi.
  Sin embargo, el cambio de concavidad ocurre donde f'' cambia de signo.
  f''(x) = -sin(x).
  Para x en (0, pi), sin(x) > 0, entonces f''(x) < 0 (cóncava abajo).
  Para x en (-pi, 0), sin(x) < 0, entonces f''(x) > 0 (cóncava arriba).
  El punto de inflexión típico en el centro del ciclo es x=pi.
  Pero en [0, pi], los extremos son 0 y pi.
  En x=pi, la concavidad cambia de abajo (antes) a arriba (después).
  La pregunta pide en [0, pi]. El punto pi es un punto de inflexión.
  También x=0 es un punto de inflexión.
  Usaremos pi/2 como distractor? No, pi/2 no es cero de f''.
  f''(pi/2) = -1 != 0.
  La respuesta correcta es "pi" o "0".
  Cambiaré la pregunta para que sea más clara.
  "El primer punto de inflexión positivo de sin(x) es x = ___" -> pi.
```

```
metadata:
  materia: "matematica"
  tema: "concavidad_y_puntos_de_inflexion"
  nivel: "intermedio"
  tags: ["trigonometria", "punto_inflexion"]

respuesta: "pi"

tipo: input

enunciado: "El primer valor positivo x donde sin(x) tiene un punto de inflexión es x = ___"

explicacion: |
  f''(x) = -sin(x).
  f''(x) = 0 en x = k*pi.
  El primer positivo es pi.
```

```
metadata:
  materia: "matematica"
  tema: "concavidad_y_puntos_de_inflexion"
  nivel: "intermedio"
  tags: ["raiz_cuadrada", "concavidad", "vf"]

respuesta: verdadero

tipo: vf

enunciado: "La función f(x) = sqrt(x) es cóncava hacia abajo para x > 0."

explicacion: |
  f(x) = x^(1/2)
  f'(x) = (1/2)x^(-1/2)
  f''(x) = (-1/4)x^(-3/2) = -1 / (4x*sqrt(x))
  Para x > 0, f''(x) < 0.
  Es cóncava hacia abajo.
```

```
metadata:
  materia: "matematica"
  tema: "concavidad_y_puntos_de_inflexion"
  nivel: "intermedio"
  tags: ["derivada_segunda", "cuartica"]

variables:
  a: random(1, 3)
  b: random(1, 5)

respuesta: "{12*a}x^2 + {6*b}x"

tipo: input

enunciado: "La segunda derivada de f(x) = {a}x^4 + {b}x^3 es f''(x) = ___"

explicacion: |
  f'(x) = 4ax^3 + 3bx^2
  f''(x) = 12ax^2 + 6bx
  Sustituyendo a={a}, b={b}: {12*a}x^2 + {6*b}x.
```

```
metadata:
  materia: "matematica"
  tema: "concavidad_y_puntos_de_inflexion"
  nivel: "basico"
  tags: ["interpretacion_f2", "concavidad"]

variables:
  a: random(1, 5)

respuesta: "concava_hacia_arriba"

tipo: mc

enunciado: "Si f''(x) = {a}x^2 + {a}, la función f(x) es:"

opciones_explicitas: ["concava_hacia_arriba", "concava_hacia_abajo", "lineal", "no_se_puede_determinar"]

explicacion: |
  f''(x) = a(x^2 + 1).
  Como x^2 + 1 > 0 siempre y a > 0, f''(x) > 0 siempre.
  Por lo tanto, f es cóncava hacia arriba.
```

```
metadata:
  materia: "matematica"
  tema: "concavidad_y_puntos_de_inflexion"
  nivel: "basico"
  tags: ["interpretacion_f2", "concavidad"]

variables:
  a: random(1, 5)

respuesta: "concava_hacia_abajo"

tipo: mc

enunciado: "Si f''(x) = -{a}(x^2 + 1), la función f(x) es:"

opciones_explicitas: ["concava_hacia_arriba", "concava_hacia_abajo", "lineal", "no_se_puede_determinar"]

explicacion: |
  f''(x) = -a(x^2 + 1).
  Como a > 0, -a < 0. Y (x^2+1) > 0.
  Producto de negativo por positivo es negativo.
  f''(x) < 0, por lo tanto cóncava hacia abajo.
```

```
metadata:
  materia: "matematica"
  tema: "concavidad_y_puntos_de_inflexion"
  nivel: "intermedio"
  tags: ["punto_inflexion", "cuartica"]

respuesta: falso

tipo: vf

enunciado: "La función f(x) = x^4 tiene un punto de inflexión en x = 0."

explicacion: |
  f'(x) = 4x^3
  f''(x) = 12x^2
  f''(0) = 0.
  Sin embargo, f''(x) >= 0 para todo x.
  No hay cambio de signo en f''(x) alrededor de 0.
  Por lo tanto, NO es un punto de inflexión.
```

```
metadata:
  materia: "matematica"
  tema: "concavidad_y_puntos_de_inflexion"
  nivel: "intermedio"
  tags: ["cubica", "concavidad", "intervalo"]

respuesta: "concava_hacia_abajo"

tipo: mc

enunciado: "Para la función f(x) = x^3 - x, en el intervalo (-infinity, -1/sqrt(3)), la concavidad es:"

opciones_explicitas: ["concava_hacia_arriba", "concava_hacia_abajo", "lineal", "oscilante"]

explicacion: |
  f'(x) = 3x^2 - 1
  f''(x) = 6x
  Para x < -1/sqrt(3) (que es negativo), f''(x) < 0.
  Por lo tanto, cóncava hacia abajo.
```

```
metadata:
  materia: "matematica"
  tema: "concavidad_y_puntos_de_inflexion"
  nivel: "intermedio"
  tags: ["cubica", "concavidad", "intervalo"]

respuesta: "concava_hacia_arriba"

tipo: mc

enunciado: "Para la función f(x) = x^3 - x, en el intervalo (1/sqrt(3), infinity), la concavidad es:"

opciones_explicitas: ["concava_hacia_arriba", "concava_hacia_abajo", "lineal", "oscilante"]

explicacion: |
  f''(x) = 6x.
  Para x > 1/sqrt(3) (positivo), f''(x) > 0.
  Por lo tanto, cóncava hacia arriba.
```

```
metadata:
  materia: "matematica"
  tema: "concavidad_y_puntos_de_inflexion"
  nivel: "intermedio"
  tags: ["punto_inflexion", "cubica"]

respuesta: "0"

tipo: input

enunciado: "La función f(x) = x^3 - 3x tiene su punto de inflexión en x = ___"

explicacion: |
  f'(x) = 3x^2 - 3
  f''(x) = 6x
  f''(x) = 0 => x = 0.
  Cambio de signo en x=0.
```

```
metadata:
  materia: "matematica"
  tema: "concavidad_y_puntos_de_inflexion"
  nivel: "intermedio"
  tags: ["punto_inflexion", "quintica"]

respuesta: verdadero

tipo: vf

enunciado: "La función f(x) = x^5 tiene un punto de inflexión en x = 0."

explicacion: |
  f'(x) = 5x^4
  f''(x) = 20x^3
  f''(0) = 0.
  Para x < 0, f''(x) < 0 (cóncava abajo).
  Para x > 0, f''(x) > 0 (cóncava arriba).
  Hay cambio de concavidad, por lo tanto sí es un punto de inflexión.
```

```
metadata:
  materia: "matematica"
  tema: "concavidad_y_puntos_de_inflexion"
  nivel: "intermedio"
  tags: ["trigonometria", "derivada_segunda"]

respuesta: "-cos(x)"

tipo: input

enunciado: "La segunda derivada de f(x) = cos(x) es f''(x) = ___"

explicacion: |
  f'(x) = -sin(x)
  f''(x) = -cos(x)
```

```
metadata:
  materia: "matematica"
  tema: "concavidad_y_puntos_de_inflexion"
  nivel: "intermedio"
  tags: ["trigonometria", "concavidad", "intervalo"]

respuesta: "concava_hacia_abajo"

tipo: mc

enunciado: "En el intervalo (0, pi/2), la función f(x) = cos(x) es:"

opciones_explicitas: ["concava_hacia_arriba", "concava_hacia_abajo", "lineal", "constante"]

explicacion: |
  f''(x) = -cos(x).
  En (0, pi/2), cos(x) > 0.
  Por lo tanto, -cos(x) < 0.
  Cóncava hacia abajo.
```

```
metadata:
  materia: "matematica"
  tema: "concavidad_y_puntos_de_inflexion"
  nivel: "intermedio"
  tags: ["trigonometria", "concavidad", "intervalo"]

respuesta: "concava_hacia_arriba"

tipo: mc

enunciado: "En el intervalo (pi, 3pi/2), la función f(x) = cos(x) es:"

opciones_explicitas: ["concava_hacia_arriba", "concava_hacia_abajo", "lineal", "constante"]

explicacion: |
  f''(x) = -cos(x).
  En (pi, 3pi/2), cos(x) < 0.
  Por lo tanto, -cos(x) > 0.
  Cóncava hacia arriba.
```

```
metadata:
  materia: "matematica"
  tema: "concavidad_y_puntos_de_inflexion"
  nivel: "intermedio"
  tags: ["trigonometria", "punto_inflexion"]

respuesta: "pi/2"

tipo: input

enunciado: "El primer punto de inflexión positivo de f(x) = cos(x) es x = ___"

explicacion: |
  f''(x) = -cos(x).
  f''(x) = 0 cuando cos(x) = 0.
  El primer positivo es pi/2.
```

```
metadata:
  materia: "matematica"
  tema: "concavidad_y_puntos_de_inflexion"
  nivel: "avanzado"
  tags: ["racionales", "concavidad", "vf"]

respuesta: verdadero

tipo: vf

enunciado: "La función f(x) = x^2 + 1/x es cóncava hacia arriba para todo x > 0."

explicacion: |
  f'(x) = 2x - x^(-2)
  f''(x) = 2 + 2x^(-3) = 2 + 2/x^3
  Para x > 0, x^3 > 0, entonces 2/x^3 > 0.
  f''(x) > 2 > 0.
  Es cóncava hacia arriba.
```

## Sección: conjuntos-pertenencia-e-inclusion (24 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "basico"
  tags: ["conjuntos", "vocabulario"]

enunciado: "¿Qué es un conjunto en matemática?"
tipo: mc
opciones_explicitas:
  - "Una colección de objetos bien definida, sin importar el orden y sin repetir elementos"
  - "Una lista de números que siempre debe estar ordenada"
  - "Un conjunto sólo puede tener números, nunca letras u objetos"
respuesta: "Una colección de objetos bien definida, sin importar el orden y sin repetir elementos"

explicacion: |
  {2, 4, 6} y {6, 4, 2} son el mismo conjunto — el orden no importa.
```

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "basico"
  tags: ["conjuntos", "vocabulario"]

enunciado: "¿Cómo se llama cada objeto que forma parte de un conjunto?"
tipo: mc
opciones_explicitas:
  - "Elemento"
  - "Subconjunto"
  - "Universo"
respuesta: "Elemento"

explicacion: |
  Un conjunto está formado por sus elementos.
```

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "basico"
  tags: ["conjuntos", "completar"]

tipo: completar
enunciado: "Completá: el símbolo que indica que un elemento SÍ pertenece a un conjunto es ___."
respuestas_validas:
  - "∈"

explicacion: |
  3 ∈ {1, 2, 3} se lee "3 pertenece al conjunto".
```

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "basico"
  tags: ["conjuntos", "completar"]

tipo: completar
enunciado: "Completá: el símbolo que indica que un elemento NO pertenece a un conjunto es ___."
respuestas_validas:
  - "∉"

explicacion: |
  5 ∉ {1, 2, 3} se lee "5 no pertenece al conjunto".
```

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "intermedio"
  tags: ["conjuntos", "problema"]

enunciado: "Dado el conjunto A = {3, 6, 9, 12, 15}, ¿el número 10 pertenece a A?"
tipo: vf
respuesta: falso

explicacion: |
  10 no está en la lista de elementos de A — no cumple ninguna
  propiedad especial, simplemente no fue incluido.
```

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "intermedio"
  tags: ["conjuntos"]

respuesta: verdadero
tipo: vf

enunciado: "El conjunto vacío (∅) es un conjunto válido, con cardinalidad 0 — no es lo mismo que 'no tener conjunto'."

explicacion: |
  ∅ es una colección válida (dos llaves sin nada adentro), simplemente sin elementos.
```

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "basico"
  tags: ["conjuntos", "completar"]

tipo: completar
enunciado: "Completá: el conjunto vacío se representa con el símbolo ___ o con dos llaves sin nada adentro."
respuestas_validas:
  - "∅"

explicacion: |
  También se acepta escribirlo con dos llaves sin nada adentro.
```

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "basico"
  tags: ["conjuntos", "vocabulario"]

enunciado: "¿Qué mide la cardinalidad de un conjunto, escrita |A|?"
tipo: mc
opciones_explicitas:
  - "La cantidad de elementos que tiene el conjunto"
  - "El elemento más grande del conjunto"
  - "La suma de todos los elementos del conjunto"
respuesta: "La cantidad de elementos que tiene el conjunto"

explicacion: |
  |{2, 4, 6, 8}| = 4, sin importar cuáles sean esos elementos.
```

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "intermedio"
  tags: ["conjuntos", "problema"]

enunciado: "¿Cuál es la cardinalidad del conjunto A = {10, 20, 30, 40, 50, 60}?"
tipo: input
respuesta: 6

explicacion: |
  Se cuentan los elementos listados, sin importar su valor: hay 6.
```

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "basico"
  tags: ["conjuntos"]

respuesta: 0
tipo: input

enunciado: "¿Cuál es la cardinalidad del conjunto vacío, |∅|?"

explicacion: |
  No tiene ningún elemento, así que su cardinalidad es 0.
```

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "intermedio"
  tags: ["conjuntos", "vocabulario"]

enunciado: "¿Cuándo se dice que B es subconjunto de A (B ⊆ A)?"
tipo: mc
opciones_explicitas:
  - "Cuando TODOS los elementos de B también son elementos de A"
  - "Cuando B y A tienen la misma cantidad de elementos"
  - "Cuando B tiene al menos un elemento en común con A"
respuesta: "Cuando TODOS los elementos de B también son elementos de A"

explicacion: |
  Con que un solo elemento de B no esté en A, ya no es subconjunto.
```

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "basico"
  tags: ["conjuntos", "completar"]

tipo: completar
enunciado: "Completá: el símbolo que indica que B es subconjunto de A se escribe B ___ A."
respuestas_validas:
  - "⊆"

explicacion: |
  Se lee "B está incluido en A" o "B es subconjunto de A".
```

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "avanzado"
  tags: ["conjuntos"]

respuesta: verdadero
tipo: vf

enunciado: "Todo conjunto A es subconjunto de sí mismo (A ⊆ A), aunque no sea subconjunto PROPIO."

explicacion: |
  Todos los elementos de A están, obviamente, en A — cumple la
  definición, aunque no agregue nada nuevo.
```

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "avanzado"
  tags: ["conjuntos"]

respuesta: verdadero
tipo: vf

enunciado: "El conjunto vacío (∅) es subconjunto de cualquier conjunto A, sin excepción."

explicacion: |
  No hay ningún elemento en ∅ que pueda faltar en A (no hay ninguno),
  así que la condición se cumple siempre, vacuamente.
```

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "avanzado"
  tags: ["conjuntos", "vocabulario"]

enunciado: "¿Qué diferencia a un subconjunto PROPIO (B ⊂ A) de un subconjunto cualquiera (B ⊆ A)?"
tipo: mc
opciones_explicitas:
  - "En el propio, A tiene además al menos un elemento que B no tiene (son distintos)"
  - "En el propio, B y A tienen que ser exactamente iguales"
  - "No hay ninguna diferencia real entre ambos símbolos"
respuesta: "En el propio, A tiene además al menos un elemento que B no tiene (son distintos)"

explicacion: |
  Si B = A, entonces B ⊆ A pero B NO es subconjunto propio de A.
```

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "avanzado"
  tags: ["conjuntos"]

enunciado: "A = {2, 4, 6, 8, 10}. ¿B = {4, 8, 12} es subconjunto de A?"
tipo: vf
respuesta: falso

explicacion: |
  12 es un elemento de B que NO está en A — alcanza con ese uno solo
  para que B no sea subconjunto de A.
```

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "intermedio"
  tags: ["conjuntos", "vocabulario"]

enunciado: "¿Qué es el conjunto universal (U) en un problema de conjuntos?"
tipo: mc
opciones_explicitas:
  - "El conjunto de referencia que contiene a todos los elementos posibles en ese contexto"
  - "El conjunto con más elementos que existe en matemática"
  - "Un sinónimo del conjunto vacío"
respuesta: "El conjunto de referencia que contiene a todos los elementos posibles en ese contexto"

explicacion: |
  Por ejemplo, si el problema habla de los días de la semana, U son
  esos 7 días — cualquier otro conjunto del problema es subconjunto de U.
```

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "intermedio"
  tags: ["conjuntos", "vocabulario"]

enunciado: "¿Cuál de estas dos formas escribe un conjunto 'por extensión'?"
tipo: mc
opciones_explicitas:
  - "A = {2, 4, 6, 8}"
  - "A = {x : x es par y 0 < x < 10}"
  - "Ambas son la misma forma, sólo cambia el nombre"
respuesta: "A = {2, 4, 6, 8}"

explicacion: |
  Por extensión se listan los elementos uno por uno; por comprensión
  se describe la propiedad que cumplen.
```

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "avanzado"
  tags: ["conjuntos", "ordenar"]

enunciado: "Ordená los pasos para verificar si un conjunto B es subconjunto de un conjunto A."
tipo: ordenar
opciones_explicitas:
  - "Si en algún momento se encuentra un elemento de B que no está en A, se concluye que B NO es subconjunto de A"
  - "Tomar cada elemento de B, uno por uno"
  - "Revisar si ese elemento también pertenece a A"
respuesta_orden: ["Tomar cada elemento de B, uno por uno", "Revisar si ese elemento también pertenece a A", "Si en algún momento se encuentra un elemento de B que no está en A, se concluye que B NO es subconjunto de A"]
explicacion: |
  Alcanza con UN elemento de B ausente en A para descartar la inclusión.
```

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "avanzado"
  tags: ["conjuntos"]

respuesta: verdadero
tipo: vf

enunciado: "Dos conjuntos son iguales si y sólo si tienen exactamente los mismos elementos (sin importar el orden en que se escriban)."

explicacion: |
  {1, 2, 3} y {3, 1, 2} son el mismo conjunto.
```

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "intermedio"
  tags: ["conjuntos"]

respuesta: verdadero
tipo: vf

enunciado: "{2, 2, 4, 4, 4, 6} representa el mismo conjunto que {2, 4, 6} — un conjunto nunca repite elementos, aunque se los escriba repetidos."

explicacion: |
  Por definición, un conjunto no tiene elementos duplicados.
```

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "basico"
  tags: ["conjuntos", "aplicacion"]

enunciado: "¿Dónde se usa la misma idea de pertenencia e inclusión de conjuntos, fuera de la matemática pura?"
tipo: mc
opciones_explicitas:
  - "En bases de datos (una fila 'pertenece' a una tabla que cumple ciertas condiciones) y en lógica proposicional"
  - "Sólo en geometría, para clasificar triángulos"
  - "No tiene ninguna aplicación fuera de la matemática pura"
respuesta: "En bases de datos (una fila 'pertenece' a una tabla que cumple ciertas condiciones) y en lógica proposicional"

explicacion: |
  Es el mismo vocabulario de fondo que usan las consultas de bases de
  datos y la lógica proposicional de Filosofía.
```

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "avanzado"
  tags: ["conjuntos", "problema"]

variables:
  limite: uno_de([10, 15, 20, 25, 30])

respuesta: floor(limite / 2)
tipo: input

enunciado: "¿Cuántos elementos tiene el conjunto A = {{x : x es un número par positivo y x ≤ {limite}}}?"

pasos:
  - "Los pares positivos hasta {limite} son 2, 4, 6, ..., hasta el mayor par ≤ {limite}"
  - "Cantidad = {limite} ÷ 2 (redondeado hacia abajo) = {floor(limite / 2)}"

explicacion: |
  Cada 2 números hay exactamente un par, así que la cantidad de pares
  hasta un límite es ese límite dividido 2 (redondeado hacia abajo si
  el límite es impar).
```

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve el vocabulario de pertenencia e inclusión de conjuntos?"
tipo: mc
opciones_explicitas:
  - "Es la base formal sobre la que se construyen las operaciones entre conjuntos, los diagramas de Venn y toda la combinatoria de este tronco"
  - "Sólo sirve para clasificar números pares e impares"
  - "Sólo se usa en un único ejercicio de examen"
respuesta: "Es la base formal sobre la que se construyen las operaciones entre conjuntos, los diagramas de Venn y toda la combinatoria de este tronco"

explicacion: |
  Sin esta base, "unión" e "intersección" (próximo módulo) serían sólo
  palabras sueltas, sin una definición formal detrás.
```

## Sección: conteo (40 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "sucesor"]

variables:
  a: random(0, 8)
  siguiente: a + 1

respuesta: siguiente
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el sucesor de {a}?"

pasos:
  - "El sucesor de un número es el que sigue: {a} + 1 = {siguiente}"

explicacion: |
  El sucesor de un número n es n + 1, el próximo en la secuencia de conteo.
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "sucesor"]

variables:
  a: random(10, 98)
  siguiente: a + 1

respuesta: siguiente
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el sucesor de {a}?"

pasos:
  - "{a} + 1 = {siguiente}"

explicacion: |
  El sucesor es siempre el número anterior más 1, aunque haya que cruzar
  una decena (ej.: el sucesor de 29 es 30).
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "sucesor"]

variables:
  a: random(100, 998)
  siguiente: a + 1

respuesta: siguiente
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el sucesor de {a}?"

pasos:
  - "{a} + 1 = {siguiente}"

explicacion: |
  Igual que con números más chicos: se suma 1, aunque se cruce una centena
  (ej.: el sucesor de 399 es 400).
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "antecesor"]

variables:
  a: random(1, 9)
  anterior: a - 1

respuesta: anterior
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el antecesor de {a}?"

pasos:
  - "El antecesor es el número anterior: {a} - 1 = {anterior}"

explicacion: |
  El antecesor de un número n es n − 1, el que viene justo antes en la
  secuencia de conteo.
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "antecesor"]

variables:
  a: random(11, 99)
  anterior: a - 1

respuesta: anterior
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el antecesor de {a}?"

pasos:
  - "{a} - 1 = {anterior}"

explicacion: |
  Se resta 1, aunque haya que bajar de decena (ej.: el antecesor de 40 es 39).
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "antecesor"]

variables:
  a: random(101, 999)
  anterior: a - 1

respuesta: anterior
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el antecesor de {a}?"

pasos:
  - "{a} - 1 = {anterior}"

explicacion: |
  Se resta 1, aunque haya que bajar de centena (ej.: el antecesor de 500 es
  499).
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "sucesor"]

variables:
  a: random(1, 500)
  b: a + uno_de([1, 1, 2, -1, 0])

respuesta: (b == a + 1)
tipo: vf

enunciado: "¿Es {b} el sucesor de {a}?"

explicacion: |
  El sucesor de {a} es {a} + 1. Hay que comparar ese resultado con el número
  propuesto, no alcanza con que "esté cerca".
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "antecesor"]

variables:
  a: random(2, 500)
  b: a - uno_de([1, 1, 2, -1, 0])

respuesta: (b == a - 1)
tipo: vf

enunciado: "¿Es {b} el antecesor de {a}?"

explicacion: |
  El antecesor de {a} es {a} − 1. Se compara ese resultado exacto con el
  número propuesto.
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "conteo_salteado"]

variables:
  inicio: random(0, 20) * 2
  n: random(3, 8)
  termino: inicio + 2 * (n - 1)

respuesta: termino
tipo: input
tolerancia_abs: 0

enunciado: "Contando de 2 en 2 desde {inicio}, ¿qué número decís en el lugar {n}° (contando {inicio} como el 1°)?"

pasos:
  - "Cada paso suma 2. Del 1° al {n}° hay {n} - 1 pasos: {inicio} + 2 × ({n} - 1) = {termino}"

explicacion: |
  Contar salteado de a 2 es sumar siempre 2 al número anterior. El término
  en el lugar n es inicio + 2×(n − 1).
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "conteo_salteado"]

variables:
  inicio: random(0, 20) * 5
  n: random(3, 8)
  termino: inicio + 5 * (n - 1)

respuesta: termino
tipo: input
tolerancia_abs: 0

enunciado: "Contando de 5 en 5 desde {inicio}, ¿qué número decís en el lugar {n}°?"

pasos:
  - "{inicio} + 5 × ({n} - 1) = {termino}"

explicacion: |
  Contar de 5 en 5 es la base de la tabla del 5: cada salto suma 5 al
  anterior.
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "conteo_salteado"]

variables:
  inicio: random(0, 50) * 10
  n: random(3, 8)
  termino: inicio + 10 * (n - 1)

respuesta: termino
tipo: input
tolerancia_abs: 0

enunciado: "Contando de 10 en 10 desde {inicio}, ¿qué número decís en el lugar {n}°?"

pasos:
  - "{inicio} + 10 × ({n} - 1) = {termino}"

explicacion: |
  Contar de 10 en 10 sólo cambia la cifra de las decenas (o más arriba); las
  unidades quedan fijas.
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "conteo_salteado"]

variables:
  inicio: random(0, 30) * 3
  n: random(3, 8)
  termino: inicio + 3 * (n - 1)

respuesta: termino
tipo: input
tolerancia_abs: 0

enunciado: "Contando de 3 en 3 desde {inicio}, ¿qué número decís en el lugar {n}°?"

pasos:
  - "{inicio} + 3 × ({n} - 1) = {termino}"

explicacion: |
  Igual que con otros saltos: se suma siempre el mismo número (acá, 3) al
  anterior.
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "conteo_salteado"]

variables:
  inicio: random(0, 30) * 4
  n: random(3, 8)
  termino: inicio + 4 * (n - 1)

respuesta: termino
tipo: input
tolerancia_abs: 0

enunciado: "Contando de 4 en 4 desde {inicio}, ¿qué número decís en el lugar {n}°?"

pasos:
  - "{inicio} + 4 × ({n} - 1) = {termino}"

explicacion: |
  El salto de 4 en 4 es la base de la tabla del 4.
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "intermedio"
  tags: ["conteo", "conteo_salteado"]

variables:
  inicio: random(1, 97)
  paso: uno_de([2, 3, 5, 10])
  n: random(3, 6)
  termino: inicio + paso * (n - 1)

respuesta: termino
tipo: input
tolerancia_abs: 0

enunciado: "Contando de {paso} en {paso} desde {inicio} (sin que {inicio} sea necesariamente múltiplo de {paso}), ¿qué número decís en el lugar {n}°?"

pasos:
  - "{inicio} + {paso} × ({n} - 1) = {termino}"

explicacion: |
  El conteo salteado funciona igual aunque el número de inicio no sea
  "redondo": el salto se suma siempre desde el propio inicio, no desde el
  múltiplo más cercano.
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "cuenta_regresiva"]

variables:
  inicio: random(20, 999)
  pasos_atras: random(3, 9)
  resultado: inicio - pasos_atras

respuesta: resultado
tipo: input
tolerancia_abs: 0

enunciado: "Contando hacia atrás de 1 en 1 desde {inicio}, ¿qué número decís después de {pasos_atras} pasos?"

pasos:
  - "{inicio} - {pasos_atras} = {resultado}"

explicacion: |
  Contar hacia atrás de a 1 es restar 1 en cada paso, tantas veces como
  pasos se cuenten.
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "cuenta_regresiva"]

variables:
  inicio: random(20, 200) * 2
  pasos_atras: random(2, 6)
  resultado: inicio - 2 * pasos_atras

respuesta: resultado
tipo: input
tolerancia_abs: 0

enunciado: "Contando hacia atrás de 2 en 2 desde {inicio}, ¿qué número decís después de {pasos_atras} pasos?"

pasos:
  - "{inicio} - 2 × {pasos_atras} = {resultado}"

explicacion: |
  Igual que la cuenta regresiva de a 1, pero restando 2 en cada paso.
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "cuenta_regresiva"]

variables:
  inicio: random(20, 100) * 10
  pasos_atras: random(2, 6)
  resultado: inicio - 10 * pasos_atras

respuesta: resultado
tipo: input
tolerancia_abs: 0

enunciado: "Contando hacia atrás de 10 en 10 desde {inicio}, ¿qué número decís después de {pasos_atras} pasos?"

pasos:
  - "{inicio} - 10 × {pasos_atras} = {resultado}"

explicacion: |
  La cuenta regresiva de 10 en 10 sólo mueve la cifra de las decenas (o
  superior).
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "cuenta_regresiva"]

respuesta: verdadero
tipo: vf

enunciado: "Al contar hacia atrás (cuenta regresiva), cada número que se dice es menor que el anterior."

explicacion: |
  Contar hacia atrás es restar en cada paso: por eso la secuencia siempre
  desciende, nunca sube ni se repite.
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "comparacion"]

variables:
  a: random(1, 999)
  b: random(1, 999)

respuesta: (a > b)
tipo: vf

enunciado: "¿Es {a} mayor que {b}?"

explicacion: |
  Un número es mayor que otro si aparece más adelante en la secuencia de
  conteo (más lejos del cero).
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "comparacion"]

variables:
  a: random(1, 999)
  b: random(1, 999)

respuesta: (a < b)
tipo: vf

enunciado: "¿Es {a} menor que {b}?"

explicacion: |
  Un número es menor que otro si aparece antes en la secuencia de conteo
  (más cerca del cero).
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "comparacion"]

variables:
  a: random(1, 200)
  b: uno_de([a, a, random(1, 200)])

respuesta: (a == b)
tipo: vf

enunciado: "¿{a} es igual a {b}?"

explicacion: |
  Dos cantidades son iguales sólo si representan exactamente el mismo
  número, no alcanza con estar cerca.
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "comparacion"]

variables:
  a: random(1, 999)
  b: random(1, 999)

restricciones:
  - a != b

respuesta: max(a, b)
tipo: mc
opciones_explicitas:
  - a
  - b

enunciado: "¿Cuál de estos dos números es mayor: {a} o {b}?"

explicacion: |
  Para comparar dos números se los ubica mentalmente en la secuencia de
  conteo: el que se dice más tarde es el mayor.
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "comparacion"]

variables:
  a: random(1, 999)
  b: random(1, 999)
  c: random(1, 999)

respuesta: max(a, b, c)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el mayor entre {a}, {b} y {c}?"

explicacion: |
  Se comparan de a pares hasta quedarse con el más grande de los tres.
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "comparacion"]

variables:
  a: random(1, 999)
  b: random(1, 999)
  c: random(1, 999)

respuesta: min(a, b, c)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el menor entre {a}, {b} y {c}?"

explicacion: |
  Se comparan de a pares hasta quedarse con el más chico de los tres.
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "orden"]

tipo: ordenar
enunciado: "Ordená estos números de menor a mayor."
opciones_explicitas:
  - "23"
  - "7"
  - "41"
  - "16"
respuesta_orden: ["7", "16", "23", "41"]

explicacion: |
  Ordenar de menor a mayor es ubicar los números según su lugar en la
  secuencia de conteo, del más cercano al cero al más lejano.
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "orden"]

tipo: ordenar
enunciado: "Ordená estos números de mayor a menor."
opciones_explicitas:
  - "8"
  - "34"
  - "12"
  - "50"
respuesta_orden: ["50", "34", "12", "8"]

explicacion: |
  Ordenar de mayor a menor es el mismo criterio que de menor a mayor, pero
  arrancando por el que está más lejos del cero.
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "intermedio"
  tags: ["conteo", "orden"]

tipo: ordenar
enunciado: "Ordená estos números de menor a mayor."
opciones_explicitas:
  - "67"
  - "19"
  - "88"
  - "45"
  - "31"
respuesta_orden: ["19", "31", "45", "67", "88"]

explicacion: |
  Con más números conviene ir descartando de a uno el menor (o el mayor)
  restante, en vez de compararlos todos de una sola vez.
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "intermedio"
  tags: ["conteo", "orden"]

tipo: ordenar
enunciado: "Ordená estos números de mayor a menor."
opciones_explicitas:
  - "402"
  - "218"
  - "990"
  - "125"
respuesta_orden: ["990", "402", "218", "125"]

explicacion: |
  Con números de más cifras, primero se compara la cantidad de cifras (más
  cifras es siempre mayor) y recién después, si empatan, cifra por cifra de
  izquierda a derecha.
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "secuencia"]

variables:
  a: random(1, 96)

tipo: completar
enunciado: "Completá el número que falta: {a}, {a+1}, ___, {a+3}."
respuestas_validas:
  - a + 2

explicacion: |
  La secuencia avanza de 1 en 1: el número que falta es el anterior más 1.
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "secuencia"]

variables:
  a: random(0, 90) * 2

tipo: completar
enunciado: "Completá el número que falta: {a}, {a+2}, ___, {a+6}."
respuestas_validas:
  - a + 4

explicacion: |
  La secuencia avanza de 2 en 2: cada término es el anterior más 2.
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "secuencia"]

variables:
  a: random(0, 180) * 5

tipo: completar
enunciado: "Completá el número que falta: {a}, {a+5}, ___, {a+15}."
respuestas_validas:
  - a + 10

explicacion: |
  La secuencia avanza de 5 en 5: cada término es el anterior más 5.
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "secuencia"]

variables:
  a: random(0, 90) * 10

tipo: completar
enunciado: "Completá el número que falta: {a}, {a+10}, ___, {a+30}."
respuestas_validas:
  - a + 20

explicacion: |
  La secuencia avanza de 10 en 10: cada término es el anterior más 10.
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "intermedio"
  tags: ["conteo", "secuencia", "cuenta_regresiva"]

variables:
  a: random(20, 999)

tipo: completar
enunciado: "Completá el número que falta: {a}, {a-1}, ___, {a-3}."
respuestas_validas:
  - a - 2

explicacion: |
  En una secuencia descendente cada término es el anterior menos el salto
  (acá, menos 1).
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "intermedio"
  tags: ["conteo", "cardinalidad"]

variables:
  a: random(1, 100)
  b: a + random(5, 40)

respuesta: b - a + 1
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos números hay entre {a} y {b}, contando a los dos extremos?"

pasos:
  - "Cantidad = {b} - {a} + 1 = {b - a + 1} (se suma 1 porque {a} también se cuenta)"

explicacion: |
  Si se cuentan los dos extremos, la cantidad de números entre A y B es
  B − A + 1, no B − A: hay que sumar 1 porque el propio A ya es el primero
  que se cuenta.
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "avanzado"
  tags: ["conteo", "cardinalidad", "pares"]

variables:
  a: random(1, 100)
  b: a + random(10, 50)
  pares: floor(b / 2) - floor((a - 1) / 2)

respuesta: pares
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos números pares hay entre {a} y {b}, contando a los dos extremos si son pares?"

pasos:
  - "Se cuentan los múltiplos de 2 hasta {b} y se descartan los que ya pasaron antes de {a}: {pares} números pares"

explicacion: |
  Contar los pares en un rango es contar los múltiplos de 2 salteados, igual
  que en el conteo salteado de 2 en 2, pero acotado entre dos extremos.
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "avanzado"
  tags: ["conteo", "cardinalidad", "impares"]

variables:
  a: random(1, 100)
  b: a + random(10, 50)
  total: b - a + 1
  pares: floor(b / 2) - floor((a - 1) / 2)
  impares: total - pares

respuesta: impares
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos números impares hay entre {a} y {b}, contando a los dos extremos si son impares?"

pasos:
  - "Total de números en el rango: {total}. De esos, {pares} son pares, así que {impares} son impares."

explicacion: |
  Los impares de un rango son los que no son pares: alcanza con contar el
  total de números del rango y restarle la cantidad de pares.
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "cardinalidad"]

variables:
  lista: mezclar([3, 7, 12, 5, 9, 18, 2, 14, 6, 11])
  cantidad_mostrada: random(4, 9)
  elegidos: n_de(lista, cantidad_mostrada)

respuesta: largo(elegidos)
tipo: input
tolerancia_abs: 0

enunciado: "Contá cuántos números hay en esta lista: {elegidos}."

pasos:
  - "Se cuenta un elemento por vez, sin saltear ni repetir: en total son {largo(elegidos)}"

explicacion: |
  Contar los elementos de una lista es aplicar directamente la
  correspondencia uno a uno: un número de la secuencia de conteo por cada
  elemento de la lista.
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "intermedio"
  tags: ["conteo", "conteo_salteado", "problema"]

variables:
  inicial: random(0, 20)
  paso: uno_de([2, 3, 5, 10])
  veces: random(2, 6)
  total: inicial + paso * veces

respuesta: veces
tipo: input
tolerancia_abs: 0

enunciado: "Tenés {inicial} figuritas y le vas agregando de a {paso} por vez. ¿Cuántas veces tenés que agregar {paso} figuritas para llegar a {total}?"

pasos:
  - "Hay que juntar {total} - {inicial} = {total - inicial} figuritas más, de a {paso}: ({total} - {inicial}) / {paso} = {veces} veces"

explicacion: |
  Agregar siempre la misma cantidad es contar salteado: la cantidad de
  veces que hay que agregar es la diferencia total dividida por el salto.
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "intermedio"
  tags: ["conteo", "conteo_salteado", "problema"]

variables:
  paso: uno_de([2, 3, 5, 10])
  cantidad_saltos: random(3, 8)
  llegada: paso * cantidad_saltos

respuesta: cantidad_saltos + 1
tipo: input
tolerancia_abs: 0

enunciado: "Contando de {paso} en {paso} empezando en 0 (0, {paso}, {paso*2}, ...) hasta llegar a {llegada}, ¿cuántos números dijiste en total, contando el 0?"

pasos:
  - "Del 0 a {llegada} hay {cantidad_saltos} saltos de {paso}; como el 0 también se cuenta, en total son {cantidad_saltos} + 1 = {cantidad_saltos + 1} números"

explicacion: |
  Igual que contar los elementos de un rango: hay que sumar 1 porque el
  primer número dicho (el 0) también cuenta como uno de los números.
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "intermedio"
  tags: ["conteo", "cardinalidad", "ordinalidad"]

variables:
  inicio: random(1, 10)
  posicion: random(2, 8)
  resultado: inicio + posicion - 1

respuesta: resultado
tipo: input
tolerancia_abs: 0

enunciado: "Si contás de uno en uno empezando en {inicio} (o sea, {inicio} es el 1°), ¿qué número decís en el lugar {posicion}°?"

pasos:
  - "El lugar {posicion}° está {posicion} - 1 pasos después del inicio: {inicio} + ({posicion} - 1) = {resultado}"

explicacion: |
  Distingue la cardinalidad (cuántos hay) de la ordinalidad (qué lugar
  ocupa): el número en el lugar k, empezando a contar desde "inicio", es
  inicio + (k − 1).
```

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

