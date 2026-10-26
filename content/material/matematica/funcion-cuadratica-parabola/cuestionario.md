# Matemática — Función cuadrática y parábola (cuestionario, 28 preguntas VBLang)

> Tema: `A8` (Tronco 2 — Algebraico). Ver `teoria.md` en esta misma
> carpeta.

Los coeficientes se arman a partir del vértice deseado (xᵥ, yᵥ), así
xᵥ = −b/(2a) siempre da un valor entero exacto.

---

### 1 — Vértice: coordenada x

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "intermedio"
  tags: ["vertice"]

variables:
  a: random(1, 6)
  xv: random(-10, 10)
  b: -2 * a * xv
  c: random(-10, 10)

respuesta: xv
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {a}x² + {b}x + {c}. ¿Cuál es la coordenada x del vértice?"

pasos:
  - "xᵥ = −{b} / (2×{a}) = {-b} / {2 * a} = {(-b) / (2 * a)}"

explicacion: |
  xᵥ = −b/(2a).
```

### 2 — Vértice: coordenada y

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "avanzado"
  tags: ["vertice"]

variables:
  a: random(1, 6)
  xv: random(-10, 10)
  b: -2 * a * xv
  c: random(-10, 10)

respuesta: a * xv ^ 2 + b * xv + c
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {a}x² + {b}x + {c}. Ya sabiendo que xᵥ = {xv}, ¿cuál es la coordenada y del vértice (o sea, f({xv}))?"

explicacion: |
  yᵥ = f(xᵥ) = {a}×{xv}² + {b}×{xv} + {c} = {a * xv ^ 2 + b * xv + c}.
```

### 3 — Ordenada al origen

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "basico"
  tags: ["ordenada_origen"]

variables:
  a: random(1, 8)
  b: random(-15, 15)
  c: random(-20, 20)

respuesta: c
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {a}x² + {b}x + {c}. ¿Cuál es la ordenada al origen (f(0))?"

explicacion: |
  f(0) = {c} — se lee directo, sin ninguna cuenta.
```

### 4 — Evaluar la función en un punto cualquiera

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "basico"
  tags: ["evaluar"]

variables:
  a: random(1, 6)
  b: random(-10, 10)
  c: random(-10, 10)
  x: random(-8, 8)

respuesta: a * x ^ 2 + b * x + c
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {a}x² + {b}x + {c}. ¿Cuánto vale f({x})?"

explicacion: |
  Se reemplaza x por {x} y se calcula.
```

### 5 — Raíces: hallar la mayor

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "intermedio"
  tags: ["raices"]

variables:
  r1: random(1, 15)
  r2: random(1, 15)
  b: -(r1 + r2)
  c: r1 * r2

respuesta: max(r1, r2)
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = x² + {b}x + {c}. ¿Cuál es la mayor raíz (dónde f(x)=0)?"

explicacion: |
  Mismo procedimiento que `../ecuacion-cuadratica/`: las raíces son
  {r1} y {r2}.
```

### 6 — Raíces: hallar la menor

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "intermedio"
  tags: ["raices"]

variables:
  r1: random(1, 15)
  r2: random(1, 15)
  b: -(r1 + r2)
  c: r1 * r2

respuesta: min(r1, r2)
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = x² + {b}x + {c}. ¿Cuál es la menor raíz?"

explicacion: |
  Las raíces son {r1} y {r2}.
```

### 7 — Concavidad: abre hacia arriba

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "basico"
  tags: ["concavidad", "verdadero_falso"]

variables:
  a: random(1, 10)
  b: random(-15, 15)
  c: random(-15, 15)

respuesta: verdadero
tipo: vf

enunciado: "f(x) = {a}x² + {b}x + {c}. ¿Abre hacia arriba la parábola (el vértice es un mínimo)?"

explicacion: |
  El coeficiente principal {a} es positivo, así que abre hacia arriba.
```

### 8 — Concavidad: abre hacia abajo

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "basico"
  tags: ["concavidad", "verdadero_falso"]

variables:
  a: random(-10, -1)
  b: random(-15, 15)
  c: random(-15, 15)

respuesta: falso

tipo: vf

enunciado: "f(x) = {a}x² + {b}x + {c}. ¿Abre hacia arriba la parábola?"

explicacion: |
  El coeficiente principal {a} es negativo, así que abre hacia ABAJO (el
  vértice es un máximo).
```

### 9 — Eje de simetría

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "intermedio"
  tags: ["eje_simetria"]

variables:
  a: random(1, 6)
  xv: random(-10, 10)
  b: -2 * a * xv
  c: random(-10, 10)

respuesta: xv
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {a}x² + {b}x + {c}. ¿En qué valor de x está el eje de simetría?"

explicacion: |
  El eje de simetría pasa siempre por la coordenada x del vértice.
```

### 10 — Simetría: mismo valor de f en puntos equidistantes

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "avanzado"
  tags: ["eje_simetria", "verdadero_falso"]

variables:
  a: random(1, 6)
  xv: random(-8, 8)
  b: -2 * a * xv
  c: random(-10, 10)
  d: random(1, 8)

respuesta: ((a * (xv + d) ^ 2 + b * (xv + d) + c) == (a * (xv - d) ^ 2 + b * (xv - d) + c))
tipo: vf

enunciado: "f(x) = {a}x² + {b}x + {c}, con vértice en xᵥ={xv}. ¿f({xv}+{d}) es igual a f({xv}−{d})?"

explicacion: |
  Dos puntos a la misma distancia del eje de simetría siempre dan el
  mismo valor de f — es la definición de simetría.
```

### 11 — Concepto: cuántas raíces tiene, según discriminante positivo

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

variables:
  r1: random(1, 10)
  r2: random(1, 10)
  b: -(r1 + r2)
  c: r1 * r2

respuesta: verdadero
tipo: vf

enunciado: "f(x) = x² + {b}x + {c}. ¿Cruza esta parábola el eje x en dos puntos distintos?"

explicacion: |
  Al tener dos raíces reales distintas ({r1} y {r2}), la parábola cruza
  el eje x en dos puntos.
```

### 12 — Concepto: vértice como mínimo

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Si una parábola abre hacia arriba, el vértice es el punto más bajo de toda la curva."

explicacion: |
  Es el mínimo absoluto de la función en ese caso.
```

### 13 — Concepto: fórmula del vértice, signo

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "intermedio"
  tags: ["concepto", "error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "La coordenada x del vértice se calcula como b/(2a), sin ningún signo negativo."

explicacion: |
  Es −b/(2a), con el signo negativo — un error muy común es olvidarlo.
```

### 14 — Concepto: ordenada al origen vs. vértice

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "La ordenada al origen (f(0)) es siempre el mismo punto que el vértice de la parábola."

explicacion: |
  Sólo coinciden cuando b=0 (el vértice está sobre el eje y) — en
  general son dos puntos distintos.
```

### 15 — Aplicar: vértice con b=0

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "basico"
  tags: ["vertice"]

variables:
  a: random(1, 8)
  c: random(-15, 15)

respuesta: 0
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {a}x² + {c} (sin término x). ¿Cuál es la coordenada x del vértice?"

explicacion: |
  Con b=0, xᵥ = −0/(2a) = 0 — el vértice está sobre el eje y.
```

### 16 — Aplicar: vértice y ordenada al origen coinciden

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "intermedio"
  tags: ["vertice", "verdadero_falso"]

variables:
  a: random(1, 8)
  c: random(-15, 15)

respuesta: ((0) == (0))
tipo: vf

enunciado: "f(x) = {a}x² + {c}. ¿Coincide el vértice con la ordenada al origen, en este caso particular?"

explicacion: |
  Sí, porque b=0: el vértice cae justo sobre el eje y, en el mismo punto
  que f(0).
```

### 17 — Problema: altura máxima de un objeto lanzado

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "avanzado"
  tags: ["problema", "concavidad"]

variables:
  tv: random(1, 10)
  a: -random(1, 5)
  b: -2 * a * tv
  altura_inicial: random(0, 20)

respuesta: tv
tipo: input
tolerancia_abs: 0

enunciado: "La altura de un objeto lanzado es h(t) = {a}t² + {b}t + {altura_inicial}. ¿En qué instante t alcanza la altura máxima?"

pasos:
  - "Como a={a} es negativo, la parábola abre hacia abajo: el vértice es un máximo, en t = −{b}/(2×{a})"

explicacion: |
  El instante de altura máxima es siempre la coordenada t del vértice.
```

### 18 — Problema: altura máxima alcanzada

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "avanzado"
  tags: ["problema", "concavidad"]

variables:
  tv: random(1, 10)
  a: -random(1, 5)
  b: -2 * a * tv
  altura_inicial: random(0, 20)

respuesta: a * tv ^ 2 + b * tv + altura_inicial
tipo: input
tolerancia_abs: 0

enunciado: "h(t) = {a}t² + {b}t + {altura_inicial}, con instante de altura máxima en t = {tv}. ¿Cuál es esa altura máxima?"

explicacion: |
  Se evalúa h en t={tv}: h({tv}) = {a * tv ^ 2 + b * tv + altura_inicial}.
```

### 19 — Verificación con error: vértice

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  a: random(1, 6)
  xv: random(-10, 10)
  b: -2 * a * xv
  c: random(-10, 10)
  error: uno_de([0, 0, 1, -1])
  propuesto: xv + error

respuesta: (propuesto == xv)
tipo: vf

enunciado: "f(x) = {a}x² + {b}x + {c}. ¿Es correcto que la coordenada x del vértice sea {propuesto}?"

explicacion: |
  El valor correcto es xᵥ = −b/(2a) = {xv}.
```

### 20 — Concepto: dominio de una función cuadrática

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "basico"
  tags: ["concepto", "dominio", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El dominio de cualquier función cuadrática f(x) = ax² + bx + c son todos los números reales."

explicacion: |
  No tiene denominador, ni raíz, ni logaritmo — nada que restrinja el
  dominio (ver `../funcion-dominio/`).
```

### 21 — Concepto: imagen según concavidad

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "intermedio"
  tags: ["concepto", "imagen", "verdadero_falso"]

variables:
  a: random(1, 8)

respuesta: falso

tipo: vf

enunciado: "Con a = {a} (positivo), la imagen de la función es 'y ≤ yᵥ'."

explicacion: |
  Con a positivo (abre hacia arriba), la imagen es 'y ≥ yᵥ', no ≤ — ver
  `../funcion-imagen/`.
```

### 22 — Aplicar factoreo para hallar raíces de la función

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "intermedio"
  tags: ["raices", "factoreo"]

variables:
  r: random(1, 20)

respuesta: r
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = x² − {2 * r}x + {r ^ 2} se factorea como (x − {r})². ¿Cuál es la única raíz (doble) de f?"

explicacion: |
  Con discriminante 0, la parábola sólo toca el eje x en un punto: el
  vértice coincide con la raíz.
```

### 23 — Concepto: relación entre raíces y factoreo de la función

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Si f(x) = a(x − r₁)(x − r₂), entonces r₁ y r₂ son exactamente los puntos donde la parábola cruza el eje x."

explicacion: |
  Es la misma conexión ya vista entre factoreo y raíces en
  `../ecuacion-cuadratica/`.
```

### 24 — Evaluar en la raíz: da 0

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "basico"
  tags: ["raices", "verdadero_falso"]

variables:
  r1: random(1, 15)
  r2: random(1, 15)
  b: -(r1 + r2)
  c: r1 * r2

respuesta: ((r1 ^ 2 + b * r1 + c) == 0)
tipo: vf

enunciado: "f(x) = x² + {b}x + {c}. ¿Es f({r1}) igual a 0?"

explicacion: |
  Por definición, evaluar la función en una raíz siempre da 0.
```

### 25 — Concepto: número de intersecciones con el eje x

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "avanzado"
  tags: ["concepto", "opcion_multiple"]

respuesta: "Ninguna"
tipo: mc
opciones_explicitas:
  - "Ninguna"
  - "Una"
  - "Dos"

enunciado: "Si el discriminante de una función cuadrática es negativo, ¿en cuántos puntos cruza el eje x?"

explicacion: |
  Sin raíces reales, la parábola no toca el eje x en absoluto — queda
  completamente arriba o completamente abajo.
```

### 26 — Problema: ingreso máximo (economía)

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "avanzado"
  tags: ["problema", "concavidad"]

variables:
  pv: random(5, 30)
  a: -random(1, 4)
  b: -2 * a * pv

respuesta: pv
tipo: input
tolerancia_abs: 0

enunciado: "El ingreso de una empresa según el precio p es I(p) = {a}p² + {b}p. ¿A qué precio p se maximiza el ingreso?"

explicacion: |
  El precio óptimo es la coordenada del vértice, igual que en el
  problema de altura máxima.
```

### 27 — Concepto: parábola simétrica respecto de una recta vertical

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Toda parábola de una función cuadrática es simétrica respecto de una recta vertical (el eje de simetría)."

explicacion: |
  Es una propiedad geométrica central de la parábola.
```

### 28 — Aplicar: hallar b conociendo el vértice y a

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "avanzado"
  tags: ["vertice"]

variables:
  a: random(1, 8)
  xv: random(-15, 15)

respuesta: -2 * a * xv
tipo: input
tolerancia_abs: 0

enunciado: "Se quiere que f(x) = {a}x² + bx + c tenga vértice en xᵥ = {xv}. ¿Cuánto tiene que valer b?"

explicacion: |
  De xᵥ = −b/(2a), despejando: b = −2a×xᵥ = −2×{a}×{xv} = {-2 * a * xv}.
```
