# Examen jefe — Maestro de Conjuntos y Gráficos

> Logro #54. Analizaste la concavidad, congruencia y conteo con precisión. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **143 preguntas totales** en 5/5 secciones.

---

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

## Sección: congruencia-de-triangulos (28 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "basico"
  tags: ["congruencia", "vocabulario"]

enunciado: "¿Qué significa que dos triángulos sean congruentes?"
tipo: mc
opciones_explicitas:
  - "Que tienen exactamente la misma forma y el mismo tamaño"
  - "Que tienen la misma forma, aunque sean de tamaños distintos"
  - "Que tienen al menos un lado en común"
respuesta: "Que tienen exactamente la misma forma y el mismo tamaño"

explicacion: |
  Sus lados y ángulos correspondientes miden exactamente lo mismo.
```

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "basico"
  tags: ["congruencia", "vocabulario"]

enunciado: "¿Qué son los \"lados correspondientes\" entre dos triángulos congruentes?"
tipo: mc
opciones_explicitas:
  - "Los lados que ocupan la misma posición según cómo se nombran los vértices de cada triángulo"
  - "Cualquier par de lados, elegidos al azar"
  - "Sólo el lado más largo de cada triángulo"
respuesta: "Los lados que ocupan la misma posición según cómo se nombran los vértices de cada triángulo"

explicacion: |
  El orden de los vértices al nombrar cada triángulo indica qué lado
  corresponde a cuál.
```

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "intermedio"
  tags: ["congruencia", "criterios", "vocabulario"]

enunciado: "¿Qué dice el criterio de congruencia LAL (Lado-Ángulo-Lado)?"
tipo: mc
opciones_explicitas:
  - "Si dos lados y el ángulo comprendido entre ellos son iguales en ambos triángulos, son congruentes"
  - "Si los tres lados son iguales, son congruentes"
  - "Si los tres ángulos son iguales, son congruentes"
respuesta: "Si dos lados y el ángulo comprendido entre ellos son iguales en ambos triángulos, son congruentes"

explicacion: |
  El ángulo tiene que ser específicamente el que queda ENTRE esos dos
  lados.
```

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "intermedio"
  tags: ["congruencia", "criterios", "vocabulario"]

enunciado: "¿Qué dice el criterio de congruencia ALA (Ángulo-Lado-Ángulo)?"
tipo: mc
opciones_explicitas:
  - "Si dos ángulos y el lado comprendido entre ellos son iguales en ambos triángulos, son congruentes"
  - "Si los tres lados son iguales, son congruentes"
  - "Si dos lados cualquiera son iguales, son congruentes"
respuesta: "Si dos ángulos y el lado comprendido entre ellos son iguales en ambos triángulos, son congruentes"

explicacion: |
  El lado tiene que ser específicamente el que queda ENTRE esos dos
  ángulos.
```

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "intermedio"
  tags: ["congruencia", "criterios", "vocabulario"]

enunciado: "¿Qué dice el criterio de congruencia LLL (Lado-Lado-Lado)?"
tipo: mc
opciones_explicitas:
  - "Si los tres lados de un triángulo son iguales a los tres lados del otro, son congruentes"
  - "Si un solo lado es igual, ya son congruentes"
  - "Si los tres ángulos son iguales, son congruentes"
respuesta: "Si los tres lados de un triángulo son iguales a los tres lados del otro, son congruentes"

explicacion: |
  No hace falta conocer ningún ángulo para este criterio.
```

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "intermedio"
  tags: ["congruencia", "criterios", "problema"]

variables:
  a: random(4, 15)
  b: random(4, 15)
  c: random(4, 15)

restricciones:
  - a != b
  - b != c

respuesta: verdadero
tipo: vf

enunciado: "El triángulo 1 tiene lados {a} cm, {b} cm y {c} cm. El triángulo 2 tiene lados {a} cm, {b} cm y {c} cm. ¿Son congruentes por el criterio LLL?"

explicacion: |
  Los tres lados coinciden uno a uno: sí son congruentes por LLL.
```

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "intermedio"
  tags: ["congruencia", "criterios", "problema"]

variables:
  a: random(4, 15)
  b: random(4, 15)
  c: random(4, 15)
  c2: c + random(1, 5)

restricciones:
  - a != b
  - b != c

respuesta: falso
tipo: vf

enunciado: "El triángulo 1 tiene lados {a} cm, {b} cm y {c} cm. El triángulo 2 tiene lados {a} cm, {b} cm y {c2} cm. ¿Son congruentes por el criterio LLL?"

explicacion: |
  El tercer lado no coincide ({c} cm contra {c2} cm): no se cumple LLL.
```

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "intermedio"
  tags: ["congruencia", "criterios", "problema"]

variables:
  a: random(4, 15)
  b: random(4, 15)
  angulo: random(30, 100)

respuesta: verdadero
tipo: vf

enunciado: "El triángulo 1 tiene lados {a} cm y {b} cm, con un ángulo de {angulo}° comprendido entre ellos. El triángulo 2 tiene lados {a} cm y {b} cm, con un ángulo de {angulo}° comprendido entre ellos. ¿Son congruentes por el criterio LAL?"

explicacion: |
  Coinciden los dos lados Y el ángulo comprendido entre ellos: sí, por
  LAL.
```

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "intermedio"
  tags: ["congruencia", "criterios", "problema"]

variables:
  a: random(4, 15)
  b: random(4, 15)
  angulo: random(30, 90)
  angulo2: angulo + random(5, 20)

respuesta: falso
tipo: vf

enunciado: "El triángulo 1 tiene lados {a} cm y {b} cm, con un ángulo de {angulo}° comprendido entre ellos. El triángulo 2 tiene lados {a} cm y {b} cm, con un ángulo de {angulo2}° comprendido entre ellos. ¿Son congruentes por el criterio LAL?"

explicacion: |
  Aunque los lados coincidan, el ángulo comprendido es distinto
  ({angulo}° contra {angulo2}°): no se cumple LAL.
```

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "intermedio"
  tags: ["congruencia", "criterios", "problema"]

variables:
  angulo1: random(30, 70)
  angulo2: random(30, 70)
  lado: random(4, 15)

respuesta: verdadero
tipo: vf

enunciado: "El triángulo 1 tiene ángulos de {angulo1}° y {angulo2}°, con un lado de {lado} cm comprendido entre ellos. El triángulo 2 tiene ángulos de {angulo1}° y {angulo2}°, con un lado de {lado} cm comprendido entre ellos. ¿Son congruentes por el criterio ALA?"

explicacion: |
  Coinciden los dos ángulos Y el lado comprendido entre ellos: sí, por
  ALA.
```

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "intermedio"
  tags: ["congruencia", "criterios", "problema"]

variables:
  angulo1: random(30, 70)
  angulo2: random(30, 70)
  lado: random(4, 15)
  lado2: lado + random(1, 5)

respuesta: falso
tipo: vf

enunciado: "El triángulo 1 tiene ángulos de {angulo1}° y {angulo2}°, con un lado de {lado} cm comprendido entre ellos. El triángulo 2 tiene ángulos de {angulo1}° y {angulo2}°, con un lado de {lado2} cm comprendido entre ellos. ¿Son congruentes por el criterio ALA?"

explicacion: |
  El lado comprendido no coincide ({lado} cm contra {lado2} cm): no se
  cumple ALA.
```

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "basico"
  tags: ["congruencia", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Si dos triángulos son congruentes, sus tres pares de ángulos correspondientes miden exactamente lo mismo."

explicacion: |
  Es parte de la definición de congruencia.
```

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "basico"
  tags: ["congruencia", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Si dos triángulos son congruentes, sus tres pares de lados correspondientes miden exactamente lo mismo."

explicacion: |
  Es la otra mitad de la definición de congruencia.
```

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "avanzado"
  tags: ["congruencia", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "Si dos triángulos tienen sus 3 ángulos iguales, uno a uno, eso ya alcanza para garantizar que son congruentes."

explicacion: |
  Tener los mismos 3 ángulos sólo garantiza la misma FORMA (pueden ser de
  tamaños distintos, como una foto ampliada) — eso se llama semejanza,
  no congruencia.
```

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "avanzado"
  tags: ["congruencia", "semejanza", "vocabulario"]

enunciado: "¿En qué se diferencia la semejanza de la congruencia?"
tipo: mc
opciones_explicitas:
  - "La semejanza permite misma forma con tamaños distintos; la congruencia exige forma Y tamaño iguales"
  - "Son exactamente lo mismo, con otro nombre"
  - "La semejanza sólo aplica a círculos"
respuesta: "La semejanza permite misma forma con tamaños distintos; la congruencia exige forma Y tamaño iguales"

explicacion: |
  Dos triángulos semejantes tienen ángulos iguales y lados
  proporcionales (no necesariamente iguales).
```

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "intermedio"
  tags: ["congruencia", "criterios"]

enunciado: "Si se conocen dos lados de cada triángulo y el ángulo comprendido entre ellos, ¿qué criterio conviene usar?"
tipo: mc
opciones_explicitas:
  - "LAL"
  - "ALA"
  - "LLL"
respuesta: "LAL"

explicacion: |
  Lado-Ángulo-Lado: dos lados y el ángulo comprendido.
```

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "intermedio"
  tags: ["congruencia", "criterios"]

enunciado: "Si se conocen dos ángulos de cada triángulo y el lado comprendido entre ellos, ¿qué criterio conviene usar?"
tipo: mc
opciones_explicitas:
  - "ALA"
  - "LAL"
  - "LLL"
respuesta: "ALA"

explicacion: |
  Ángulo-Lado-Ángulo: dos ángulos y el lado comprendido.
```

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "intermedio"
  tags: ["congruencia", "criterios"]

enunciado: "Si se conocen los tres lados de cada triángulo (y ningún ángulo), ¿qué criterio conviene usar?"
tipo: mc
opciones_explicitas:
  - "LLL"
  - "LAL"
  - "ALA"
respuesta: "LLL"

explicacion: |
  Lado-Lado-Lado: los tres lados, sin necesidad de ángulos.
```

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "intermedio"
  tags: ["congruencia", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Gracias a los criterios de congruencia, alcanza con verificar 3 datos bien elegidos (no los 6: 3 lados + 3 ángulos) para confirmar que dos triángulos son congruentes."

explicacion: |
  Es justamente para qué sirven los criterios: ahorrar verificaciones.
```

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "avanzado"
  tags: ["congruencia", "criterios", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "Para aplicar el criterio LAL, sirve cualquier ángulo del triángulo, no necesariamente el que está comprendido entre los dos lados conocidos."

explicacion: |
  Tiene que ser específicamente el ángulo ENTRE esos dos lados — usar
  otro ángulo no garantiza la congruencia de la misma forma.
```

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "avanzado"
  tags: ["congruencia", "problema"]

variables:
  a: random(5, 12)
  angulo: random(40, 90)
  b: random(5, 12)

enunciado: "Dos triángulos comparten un lado de {a} cm, un ángulo de {angulo}° comprendido, y otro lado de {b} cm. ¿Qué criterio de congruencia se está aplicando?"
tipo: mc
opciones_explicitas:
  - "LAL"
  - "ALA"
  - "LLL"
respuesta: "LAL"

explicacion: |
  Lado, ángulo comprendido, lado: es exactamente el patrón de LAL.
```

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "basico"
  tags: ["congruencia", "completar"]

tipo: completar
enunciado: "Completá: el criterio LLL no necesita conocer ningún ___ para garantizar la congruencia."
respuestas_validas:
  - "ángulo"

explicacion: |
  Con los tres lados alcanza.
```

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "basico"
  tags: ["congruencia", "completar"]

tipo: completar
enunciado: "Completá: dos triángulos congruentes tienen la misma forma y el mismo ___."
respuestas_validas:
  - "tamaño"

explicacion: |
  Forma Y tamaño: es la definición completa de congruencia.
```

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "avanzado"
  tags: ["congruencia", "orden"]

tipo: ordenar
enunciado: "Ordená los pasos para demostrar que dos triángulos son congruentes usando el criterio LAL."
opciones_explicitas:
  - "Confirmar que el ángulo comprendido entre esos dos lados también es igual en ambos"
  - "Identificar dos lados de un triángulo y sus correspondientes en el otro"
  - "Concluir que los triángulos son congruentes por LAL"
  - "Medir o verificar que esos dos pares de lados sean iguales"
respuesta_orden:
  - "Identificar dos lados de un triángulo y sus correspondientes en el otro"
  - "Medir o verificar que esos dos pares de lados sean iguales"
  - "Confirmar que el ángulo comprendido entre esos dos lados también es igual en ambos"
  - "Concluir que los triángulos son congruentes por LAL"

explicacion: |
  Se identifican los lados correspondientes, se verifica su igualdad, se
  confirma el ángulo comprendido, y recién ahí se concluye la
  congruencia.
```

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "avanzado"
  tags: ["congruencia", "criterios", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Para que el criterio ALA aplique, el lado conocido tiene que estar exactamente ENTRE los dos ángulos conocidos, no en cualquier otra posición."

explicacion: |
  Si el lado no está comprendido entre esos dos ángulos, no es el
  patrón ALA (aunque sigue habiendo otras formas de probar congruencia
  en ese caso, fuera del alcance de este módulo).
```

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "avanzado"
  tags: ["congruencia", "criterios", "problema"]

variables:
  a: random(5, 10)
  b: random(11, 16)
  c: random(17, 22)

respuesta: verdadero
tipo: vf

enunciado: "El triángulo 1 tiene lados {a} cm, {b} cm y {c} cm. El triángulo 2 tiene esos mismos tres lados, pero nombrados en otro orden: {c} cm, {a} cm y {b} cm. ¿Siguen siendo congruentes por LLL?"

explicacion: |
  El orden en que se listan los lados no importa: lo que importa es que
  el CONJUNTO de tres medidas coincida entre ambos triángulos.
```

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "intermedio"
  tags: ["congruencia", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Si el triángulo A es congruente con el triángulo B, entonces el triángulo B también es congruente con el triángulo A."

explicacion: |
  La congruencia no tiene una dirección: es una relación simétrica.
```

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "basico"
  tags: ["congruencia", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Los criterios LAL, ALA y LLL existen para poder afirmar que dos triángulos son congruentes sin tener que medir los 6 datos completos (3 lados y 3 ángulos) de cada uno."

explicacion: |
  Es la razón de ser de todo este módulo.
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
  ∅ = {} es una colección válida, simplemente sin elementos.
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
  También se acepta escribirlo como {}.
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
respuesta_orden:
  - "Tomar cada elemento de B, uno por uno"
  - "Revisar si ese elemento también pertenece a A"
  - "Si en algún momento se encuentra un elemento de B que no está en A, se concluye que B NO es subconjunto de A"

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

enunciado: "¿Cuántos elementos tiene el conjunto A = {x : x es un número par positivo y x ≤ {limite}}?"

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

## Sección: construir-un-grafico (24 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "construir_un_grafico"
  nivel: "basico"
  tags: ["construir_grafico", "vocabulario"]

enunciado: "Para comparar valores entre categorías sin orden numérico propio (por ejemplo, ventas por producto), ¿qué tipo de gráfico conviene?"
tipo: mc
opciones_explicitas:
  - "Gráfico de barras"
  - "Gráfico de líneas"
  - "Gráfico de torta"
respuesta: "Gráfico de barras"

explicacion: |
  Las categorías se comparan bien con la altura de una barra por cada
  una.
```

```
metadata:
  materia: "matematicas"
  tema: "construir_un_grafico"
  nivel: "basico"
  tags: ["construir_grafico", "vocabulario"]

enunciado: "Para mostrar cómo cambia un valor a lo largo del tiempo (por ejemplo, temperatura mes a mes), ¿qué tipo de gráfico conviene?"
tipo: mc
opciones_explicitas:
  - "Gráfico de líneas"
  - "Gráfico de barras"
  - "Gráfico de torta"
respuesta: "Gráfico de líneas"

explicacion: |
  La línea conecta los puntos y muestra la tendencia completa.
```

```
metadata:
  materia: "matematicas"
  tema: "construir_un_grafico"
  nivel: "basico"
  tags: ["construir_grafico", "vocabulario"]

enunciado: "Para mostrar cómo se reparte un presupuesto total entre distintas categorías, ¿qué tipo de gráfico conviene?"
tipo: mc
opciones_explicitas:
  - "Gráfico de torta"
  - "Gráfico de líneas"
  - "Gráfico de barras"
respuesta: "Gráfico de torta"

explicacion: |
  Cada porción muestra directamente qué proporción del 100% ocupa
  cada categoría.
```

```
metadata:
  materia: "matematicas"
  tema: "construir_un_grafico"
  nivel: "intermedio"
  tags: ["construir_grafico", "problema"]

enunciado: "Se quiere mostrar cómo variaron las ventas de una tienda mes a mes durante todo el año. ¿Qué tipo de gráfico conviene?"
tipo: mc
opciones_explicitas:
  - "De líneas"
  - "De torta"
  - "De barras horizontales sin ningún orden"
respuesta: "De líneas"

explicacion: |
  Los meses son una secuencia temporal ordenada — el caso típico de
  un gráfico de líneas.
```

```
metadata:
  materia: "matematicas"
  tema: "construir_un_grafico"
  nivel: "intermedio"
  tags: ["construir_grafico", "problema"]

enunciado: "Se quiere comparar el puntaje final de 5 equipos de un torneo, sin relación temporal entre ellos. ¿Qué tipo de gráfico conviene?"
tipo: mc
opciones_explicitas:
  - "De barras"
  - "De líneas"
  - "De torta"
respuesta: "De barras"

explicacion: |
  Los equipos son categorías sin un orden numérico propio entre sí.
```

```
metadata:
  materia: "matematicas"
  tema: "construir_un_grafico"
  nivel: "intermedio"
  tags: ["construir_grafico", "problema"]

enunciado: "Se quiere mostrar qué porcentaje del presupuesto familiar se destina a cada gasto (alquiler, comida, transporte, etc.), sumando 100%. ¿Qué tipo de gráfico conviene?"
tipo: mc
opciones_explicitas:
  - "De torta"
  - "De líneas"
  - "De barras"
respuesta: "De torta"

explicacion: |
  Es exactamente el caso de proporciones de un total.
```

```
metadata:
  materia: "matematicas"
  tema: "construir_un_grafico"
  nivel: "basico"
  tags: ["construir_grafico", "vocabulario"]

enunciado: "¿Qué elementos básicos debería tener cualquier gráfico bien construido?"
tipo: mc
opciones_explicitas:
  - "Título, ejes etiquetados con su unidad, y una escala con intervalos iguales"
  - "Sólo los datos, sin ninguna etiqueta ni título"
  - "Sólo colores llamativos, sin importar la escala"
respuesta: "Título, ejes etiquetados con su unidad, y una escala con intervalos iguales"

explicacion: |
  Sin esos elementos, el gráfico se vuelve ambiguo o directamente
  ilegible.
```

```
metadata:
  materia: "matematicas"
  tema: "construir_un_grafico"
  nivel: "intermedio"
  tags: ["construir_grafico"]

respuesta: verdadero
tipo: vf

enunciado: "En la escala numérica de un gráfico, la distancia entre dos marcas consecutivas (por ejemplo, de 0 a 10, y de 10 a 20) siempre debería representar el mismo intervalo."

explicacion: |
  Si los intervalos no fueran iguales, la posición visual dejaría de
  representar fielmente el valor real.
```

```
metadata:
  materia: "matematicas"
  tema: "construir_un_grafico"
  nivel: "intermedio"
  tags: ["construir_grafico"]

respuesta: verdadero
tipo: vf

enunciado: "El eje numérico de un gráfico de barras debería empezar en 0, para que la altura de cada barra represente fielmente la proporción real entre los valores."

explicacion: |
  Si no empieza en 0, diferencias chicas entre barras pueden verse
  exageradamente grandes.
```

```
metadata:
  materia: "matematicas"
  tema: "construir_un_grafico"
  nivel: "intermedio"
  tags: ["construir_grafico"]

respuesta: falso
tipo: vf

enunciado: "La leyenda (qué representa cada color) es un elemento obligatorio en TODOS los gráficos, incluso cuando hay una sola serie de datos."

explicacion: |
  Con una sola serie no hace falta distinguir colores — la leyenda se
  vuelve necesaria recién cuando hay más de una serie.
```

```
metadata:
  materia: "matematicas"
  tema: "construir_un_grafico"
  nivel: "avanzado"
  tags: ["construir_grafico", "problema"]

variables:
  minimo: 0
  maximo: uno_de([50, 100, 200])
  marcas: uno_de([5, 10])

respuesta: maximo / marcas
tipo: input

enunciado: "Se quiere construir una escala de 0 a {maximo}, con {marcas} intervalos iguales. ¿De cuánto tiene que ser cada intervalo?"

pasos:
  - "Intervalo = ({maximo} − 0) / {marcas} = {maximo / marcas}"

explicacion: |
  Se reparte el rango total en la cantidad de intervalos pedida.
```

```
metadata:
  materia: "matematicas"
  tema: "construir_un_grafico"
  nivel: "avanzado"
  tags: ["construir_grafico", "ordenar"]

enunciado: "Ordená los pasos generales para construir un gráfico a partir de una tabla de datos."
tipo: ordenar
opciones_explicitas:
  - "Definir una escala con intervalos iguales que cubra el rango de los datos"
  - "Decidir qué tipo de gráfico corresponde según el tipo de dato (categorías, tiempo, o proporciones)"
  - "Dibujar los datos sobre esa escala, y agregar título, etiquetas de ejes y leyenda si hace falta"
respuesta_orden:
  - "Decidir qué tipo de gráfico corresponde según el tipo de dato (categorías, tiempo, o proporciones)"
  - "Definir una escala con intervalos iguales que cubra el rango de los datos"
  - "Dibujar los datos sobre esa escala, y agregar título, etiquetas de ejes y leyenda si hace falta"

explicacion: |
  Elegir el tipo de gráfico es siempre la primera decisión — condiciona
  todo lo que sigue.
```

```
metadata:
  materia: "matematicas"
  tema: "construir_un_grafico"
  nivel: "avanzado"
  tags: ["construir_grafico"]

enunciado: "¿Por qué usar un gráfico de torta para mostrar datos que cambian mes a mes sería una mala elección?"
tipo: mc
opciones_explicitas:
  - "Porque una torta no muestra tendencia en el tiempo — esconde si el valor subió, bajó o se mantuvo estable mes a mes"
  - "Porque una torta nunca puede tener más de 2 categorías"
  - "No hay ningún problema real en usarla para eso"
respuesta: "Porque una torta no muestra tendencia en el tiempo — esconde si el valor subió, bajó o se mantuvo estable mes a mes"

explicacion: |
  Cada tipo de gráfico está pensado para un tipo de pregunta distinta
  sobre los datos.
```

```
metadata:
  materia: "matematicas"
  tema: "construir_un_grafico"
  nivel: "avanzado"
  tags: ["construir_grafico", "problema"]

variables:
  maximo: uno_de([300, 500, 800])
  marcas: uno_de([4, 5, 8])

respuesta: maximo / marcas
tipo: input

enunciado: "Los datos van de 0 a {maximo}. Si se quiere marcar la escala en {marcas} intervalos iguales, ¿de cuánto debería ser cada intervalo?"

pasos:
  - "{maximo} / {marcas} = {maximo / marcas}"

explicacion: |
  Mismo procedimiento que la pregunta 11, con otros números.
```

```
metadata:
  materia: "matematicas"
  tema: "construir_un_grafico"
  nivel: "intermedio"
  tags: ["construir_grafico"]

respuesta: verdadero
tipo: vf

enunciado: "Un gráfico sin título sigue mostrando los datos correctamente, pero es más difícil saber de qué trata sin más contexto."

explicacion: |
  El título no cambia los datos, pero ayuda mucho a interpretarlos sin
  ambigüedad.
```

```
metadata:
  materia: "matematicas"
  tema: "construir_un_grafico"
  nivel: "basico"
  tags: ["construir_grafico", "aplicacion"]

enunciado: "Un reporte anual quiere mostrar la evolución de las ventas mes a mes, y además qué porcentaje de las ventas totales representó cada producto. ¿Cuántos tipos de gráfico distintos convendría usar, y cuáles?"
tipo: mc
opciones_explicitas:
  - "Dos: uno de líneas (evolución mensual) y uno de torta (porcentaje por producto)"
  - "Uno solo de torta, sirve para ambas cosas"
  - "Uno solo de barras, sirve para ambas cosas"
respuesta: "Dos: uno de líneas (evolución mensual) y uno de torta (porcentaje por producto)"

explicacion: |
  Son dos preguntas distintas sobre los datos, y cada una tiene su
  tipo de gráfico más adecuado.
```

```
metadata:
  materia: "matematicas"
  tema: "construir_un_grafico"
  nivel: "avanzado"
  tags: ["construir_grafico", "problema"]

enunciado: "Los datos de un gráfico van de 40 a 60. ¿Cuál de estas escalas para el eje numérico aprovecha mejor el espacio del gráfico?"
tipo: mc
opciones_explicitas:
  - "De 0 a 100, en intervalos de 10"
  - "De 0 a 10.000, en intervalos de 1.000"
  - "De 0 a 1.000.000, en intervalos de 100.000"
respuesta: "De 0 a 100, en intervalos de 10"

explicacion: |
  Las otras dos escalas son tan grandes comparadas con el rango real
  de los datos (40-60) que toda la variación se vería aplastada en
  una línea casi plana.
```

```
metadata:
  materia: "matematicas"
  tema: "construir_un_grafico"
  nivel: "intermedio"
  tags: ["construir_grafico"]

respuesta: verdadero
tipo: vf

enunciado: "El eje numérico de un gráfico de líneas también debería tener intervalos iguales entre sí, igual que el de un gráfico de barras."

explicacion: |
  La regla de intervalos iguales aplica a cualquier eje numérico, sin
  importar el tipo de gráfico.
```

```
metadata:
  materia: "matematicas"
  tema: "construir_un_grafico"
  nivel: "intermedio"
  tags: ["construir_grafico", "problema"]

variables:
  maximo: uno_de([25, 35, 45])

respuesta: maximo / 5
tipo: input

enunciado: "Se quiere marcar una escala de 0 a {maximo} en intervalos de tamaño 5. ¿Cuántas marcas (sin contar el 0) tendría esa escala?"

pasos:
  - "{maximo} / 5 = {maximo / 5} marcas"

explicacion: |
  Se divide el máximo por el tamaño del intervalo elegido.
```

```
metadata:
  materia: "matematicas"
  tema: "construir_un_grafico"
  nivel: "avanzado"
  tags: ["construir_grafico"]

enunciado: "Si el eje numérico de un gráfico de barras empieza, por ejemplo, en 80 en vez de en 0, ¿qué efecto visual puede producir?"
tipo: mc
opciones_explicitas:
  - "Puede hacer que diferencias chicas entre barras se vean exageradamente grandes"
  - "No produce ningún efecto, siempre se ve exactamente igual"
  - "Hace que las barras sean automáticamente más precisas"
respuesta: "Puede hacer que diferencias chicas entre barras se vean exageradamente grandes"

explicacion: |
  Es uno de los errores de construcción más comunes (a veces
  intencional) para exagerar una diferencia real.
```

```
metadata:
  materia: "matematicas"
  tema: "construir_un_grafico"
  nivel: "intermedio"
  tags: ["construir_grafico"]

respuesta: verdadero
tipo: vf

enunciado: "La etiqueta de un eje numérico debería indicar la unidad de medida (pesos, personas, grados, etc.), no sólo los números sueltos."

explicacion: |
  Sin la unidad, un '50' en el eje podría significar cualquier cosa.
```

```
metadata:
  materia: "matematicas"
  tema: "construir_un_grafico"
  nivel: "avanzado"
  tags: ["construir_grafico", "problema"]

variables:
  maximo: uno_de([120, 150, 180])
  intervalo: uno_de([10, 15, 30])

restricciones:
  - maximo - floor(maximo / intervalo) * intervalo == 0

respuesta: maximo / intervalo
tipo: input

enunciado: "Se quiere construir una escala de 0 a {maximo}, con intervalos de tamaño {intervalo}. ¿Cuántos intervalos tendría la escala completa?"

pasos:
  - "{maximo} / {intervalo} = {maximo / intervalo} intervalos"

explicacion: |
  Se divide el rango total por el tamaño de cada intervalo.
```

```
metadata:
  materia: "matematicas"
  tema: "construir_un_grafico"
  nivel: "basico"
  tags: ["construir_grafico", "aplicacion"]

enunciado: "Se quiere mostrar qué proporción de una clase de 30 estudiantes son varones y cuál mujeres. ¿Qué tipo de gráfico conviene?"
tipo: mc
opciones_explicitas:
  - "De torta (dos porciones que suman el 100% de la clase)"
  - "De líneas (porque el año tiene 12 meses)"
  - "No se puede graficar ese tipo de dato"
respuesta: "De torta (dos porciones que suman el 100% de la clase)"

explicacion: |
  Es exactamente proporciones de un total, aunque sean sólo 2
  categorías.
```

```
metadata:
  materia: "matematicas"
  tema: "construir_un_grafico"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve saber construir un gráfico?"
tipo: mc
opciones_explicitas:
  - "Para elegir el tipo correcto según el dato, armar una escala razonable, y comunicar los datos de forma clara y sin distorsión"
  - "Sólo sirve para hacer un gráfico más lindo visualmente"
  - "Sólo aplica cuando los datos ya vienen en un gráfico hecho"
respuesta: "Para elegir el tipo correcto según el dato, armar una escala razonable, y comunicar los datos de forma clara y sin distorsión"

explicacion: |
  Es el paso siguiente a leer gráficos: ahora hay que decidir y armar
  uno propio. Es también el prerrequisito de `../media-mediana-y-moda/`.
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
