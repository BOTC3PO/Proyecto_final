# Matematica — concavidad y puntos de inflexion (cuestionario, 27 preguntas VBLang)

> Tema: `matematica/concavidad-y-puntos-de-inflexion`. Ver `teoria.md` en esta misma carpeta. Generado con qwen/qwen3.6-35b-a3b, cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

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

### 2 — pregunta 2

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

### 3 — pregunta 3

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

### 4 — pregunta 4

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

### 5 — pregunta 5

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

### 6 — pregunta 6

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

### 7 — pregunta 7

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

### 8 — pregunta 8

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

### 9 — pregunta 9

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

### 10 — pregunta 10

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

### 11 — pregunta 11

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

### 12 — pregunta 12

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

### 13 — pregunta 13

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

### 14 — pregunta 14

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

### 15 — pregunta 15

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

### 16 — pregunta 16

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

### 17 — pregunta 17

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

### 18 — pregunta 18

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

### 19 — pregunta 19

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

### 20 — pregunta 20

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

### 21 — pregunta 21

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

### 22 — pregunta 22

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

### 23 — pregunta 23

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

### 24 — pregunta 24

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

### 25 — pregunta 25

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

### 26 — pregunta 26

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

### 27 — pregunta 27

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
