# Matemática — Derivada (cuestionario, 30 preguntas VBLang)

> Tema: `A13` (Tronco 2 — Algebraico). Ver `teoria.md` en esta misma
> carpeta.

Cada pregunta aplica la regla de la potencia y las reglas básicas
"a mano" (la fórmula de la derivada ya se calculó al escribir la
pregunta) — el DSL sólo evalúa el resultado numérico final.

---

### 1 — Derivada de xⁿ: coeficiente

```
metadata:
  materia: "matematicas"
  tema: "derivada"
  nivel: "basico"
  tags: ["regla_potencia"]

variables:
  n: random(2, 6)

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = x^{n}. ¿Cuál es el coeficiente de f'(x)?"

explicacion: |
  La derivada de xⁿ es n·x^(n−1) — el coeficiente es directamente n.
```

### 2 — Derivada de xⁿ: exponente resultante

```
metadata:
  materia: "matematicas"
  tema: "derivada"
  nivel: "basico"
  tags: ["regla_potencia"]

variables:
  n: random(2, 8)

respuesta: n - 1
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = x^{n}. ¿Cuál es el exponente de f'(x)?"

explicacion: |
  Se le resta 1 al exponente original.
```

### 3 — Derivada de k·xⁿ: coeficiente

```
metadata:
  materia: "matematicas"
  tema: "derivada"
  nivel: "intermedio"
  tags: ["regla_potencia"]

variables:
  k: random(2, 10)
  n: random(2, 6)

respuesta: k * n
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {k}x^{n}. ¿Cuál es el coeficiente de f'(x)?"

explicacion: |
  El coeficiente {k} se multiplica por el exponente {n}: {k}×{n} = {k * n}.
```

### 4 — Derivada de una constante

```
metadata:
  materia: "matematicas"
  tema: "derivada"
  nivel: "basico"
  tags: ["constante"]

variables:
  c: random(-30, 30)

respuesta: 0
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {c} (una función constante). ¿Cuánto vale f'(x)?"

explicacion: |
  Una constante no cambia, así que su derivada es siempre 0.
```

### 5 — Derivada de un término lineal

```
metadata:
  materia: "matematicas"
  tema: "derivada"
  nivel: "basico"
  tags: ["regla_potencia"]

variables:
  m: random(1, 20)

respuesta: m
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {m}x. ¿Cuánto vale f'(x)?"

explicacion: |
  La derivada de mx es simplemente m (la pendiente ya es constante).
```

### 6 — Derivada de un polinomio: evaluar en un punto

```
metadata:
  materia: "matematicas"
  tema: "derivada"
  nivel: "intermedio"
  tags: ["polinomio"]

variables:
  a: random(1, 8)
  b: random(1, 10)
  c: random(-15, 15)
  punto: random(-8, 8)

respuesta: 2 * a * punto + b
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {a}x² + {b}x + {c}. ¿Cuánto vale f'({punto})?"

pasos:
  - "f'(x) = {2 * a}x + {b}"
  - "f'({punto}) = {2 * a}×{punto} + {b} = {2 * a * punto + b}"

explicacion: |
  Se deriva término a término y después se evalúa en {punto}.
```

### 7 — Derivada de un polinomio de grado 3: evaluar

```
metadata:
  materia: "matematicas"
  tema: "derivada"
  nivel: "avanzado"
  tags: ["polinomio"]

variables:
  a: random(1, 5)
  b: random(1, 8)
  c: random(-10, 10)
  d: random(-10, 10)
  punto: random(-5, 5)

respuesta: 3 * a * punto ^ 2 + 2 * b * punto + c
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {a}x³ + {b}x² + {c}x + {d}. ¿Cuánto vale f'({punto})?"

pasos:
  - "f'(x) = {3 * a}x² + {2 * b}x + {c}"

explicacion: |
  Cada término se deriva con la regla de la potencia, por separado.
```

### 8 — Derivada de una suma: identificar el término constante

```
metadata:
  materia: "matematicas"
  tema: "derivada"
  nivel: "basico"
  tags: ["suma", "verdadero_falso"]

variables:
  a: random(1, 10)
  b: random(1, 10)
  c: random(-20, 20)

respuesta: verdadero
tipo: vf

enunciado: "f(x) = {a}x² + {b}x + {c}. ¿La derivada de f NO tiene término independiente (constante)?"

explicacion: |
  El término {c} desaparece al derivar (su derivada es 0), así que
  f'(x) no tiene término constante propio, salvo que quede como
  resultado de derivar el término lineal.
```

### 9 — Pendiente de la recta tangente en un punto

```
metadata:
  materia: "matematicas"
  tema: "derivada"
  nivel: "intermedio"
  tags: ["interpretacion_geometrica"]

variables:
  a: random(1, 6)
  punto: random(-6, 6)

respuesta: 2 * a * punto
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {a}x². ¿Cuál es la pendiente de la recta tangente al gráfico de f en x={punto}?"

explicacion: |
  La pendiente de la tangente en un punto es, exactamente, la derivada
  evaluada ahí: f'({punto}) = {2 * a}×{punto} = {2 * a * punto}.
```

### 10 — Velocidad instantánea (aplicación física)

```
metadata:
  materia: "matematicas"
  tema: "derivada"
  nivel: "intermedio"
  tags: ["aplicacion", "fisica"]

variables:
  a: random(1, 10)
  t: random(1, 10)

respuesta: 2 * a * t
tipo: input
tolerancia_abs: 0

enunciado: "La posición de un objeto es s(t) = {a}t² (metros). ¿Cuál es su velocidad instantánea en t={t} segundos?"

pasos:
  - "s'(t) = {2 * a}t → s'({t}) = {2 * a}×{t} = {2 * a * t}"

explicacion: |
  La velocidad instantánea es la derivada de la posición respecto del
  tiempo — el cruce clásico entre Análisis y Física.
```

### 11 — Concepto: qué mide la derivada

```
metadata:
  materia: "matematicas"
  tema: "derivada"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La derivada de f en un punto mide la tasa de cambio instantánea de f ahí."

explicacion: |
  Es la definición central de la derivada.
```

### 12 — Concepto: derivada como pendiente de la tangente

```
metadata:
  materia: "matematicas"
  tema: "derivada"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "f'(a) es exactamente la pendiente de la recta tangente al gráfico de f en el punto (a, f(a))."

explicacion: |
  Es la interpretación geométrica de la derivada.
```

### 13 — Concepto: f(a) vs f'(a)

```
metadata:
  materia: "matematicas"
  tema: "derivada"
  nivel: "intermedio"
  tags: ["concepto", "error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "f(a) y f'(a) son siempre el mismo número, para cualquier función f."

explicacion: |
  Son cosas distintas: f(a) es el VALOR de la función en a; f'(a) es la
  PENDIENTE (tasa de cambio) en a — en general, números distintos.
```

### 14 — Concepto: derivada de una constante es 0

```
metadata:
  materia: "matematicas"
  tema: "derivada"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La derivada de cualquier función constante es 0."

explicacion: |
  Una constante nunca cambia, así que su tasa de cambio es siempre 0.
```

### 15 — Error común: olvidar restar 1 al exponente

```
metadata:
  materia: "matematicas"
  tema: "derivada"
  nivel: "intermedio"
  tags: ["error_comun", "opcion_multiple"]

variables:
  n: random(3, 8)

respuesta: n - 1
tipo: mc
opciones_explicitas:
  - n - 1
  - n
  - n + 1

enunciado: "f(x) = x^{n}. ¿Cuál es el exponente correcto de f'(x)?"

explicacion: |
  Es n−1, no n (dejar el mismo exponente) ni n+1 — hay que restar 1,
  siempre.
```

### 16 — Derivada de dos términos con distinto signo

```
metadata:
  materia: "matematicas"
  tema: "derivada"
  nivel: "intermedio"
  tags: ["polinomio", "signos"]

variables:
  a: random(2, 8)
  b: random(2, 8)
  punto: random(-8, 8)

respuesta: 2 * a * punto - b
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {a}x² − {b}x. ¿Cuánto vale f'({punto})?"

pasos:
  - "f'(x) = {2 * a}x − {b}"

explicacion: |
  El signo del término se mantiene al derivar cada uno por separado.
```

### 17 — Máximos y mínimos: dónde f'(x)=0 (adelanto de optimización)

```
metadata:
  materia: "matematicas"
  tema: "derivada"
  nivel: "avanzado"
  tags: ["aplicacion"]

variables:
  a: random(1, 8)
  xv: random(-10, 10)
  b: -2 * a * xv

respuesta: xv
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {a}x² + {b}x. ¿En qué valor de x se anula f'(x) (o sea, dónde está el vértice de la parábola)?"

pasos:
  - "f'(x) = {2 * a}x + {b}"
  - "{2 * a}x + {b} = 0 → x = −{b}/{2 * a} = {xv}"

explicacion: |
  Es la misma fórmula del vértice de `../funcion-cuadratica-parabola/`,
  vista ahora como consecuencia de que la derivada se anula ahí — la
  base de `../optimizacion/`.
```

### 18 — Verificación con error

```
metadata:
  materia: "matematicas"
  tema: "derivada"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  a: random(1, 8)
  b: random(1, 10)
  punto: random(-8, 8)
  real: 2 * a * punto + b
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "f(x) = {a}x² + {b}x. ¿Es correcto que f'({punto}) sea {propuesto}?"

explicacion: |
  El valor correcto es f'({punto}) = {real}.
```

### 19 — Concepto: derivada de una función lineal es constante

```
metadata:
  materia: "matematicas"
  tema: "derivada"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La derivada de una función lineal f(x)=mx+b es siempre la misma constante m, sin importar en qué punto se evalúe."

explicacion: |
  Tiene sentido: la pendiente de una recta es la misma en todos sus
  puntos.
```

### 20 — Aplicar: pendiente de la tangente en el vértice

```
metadata:
  materia: "matematicas"
  tema: "derivada"
  nivel: "avanzado"
  tags: ["interpretacion_geometrica", "verdadero_falso"]

variables:
  a: random(1, 8)
  xv: random(-10, 10)
  b: -2 * a * xv

respuesta: ((2 * a * xv + b) == 0)
tipo: vf

enunciado: "f(x) = {a}x² + {b}x. ¿Es 0 la pendiente de la recta tangente en x={xv} (el vértice)?"

explicacion: |
  En el vértice de una parábola, la recta tangente es horizontal —
  pendiente 0, exactamente donde f' se anula.
```

### 21 — Derivada de un polinomio con varios términos

```
metadata:
  materia: "matematicas"
  tema: "derivada"
  nivel: "avanzado"
  tags: ["polinomio"]

variables:
  a: random(1, 4)
  b: random(1, 6)
  c: random(1, 8)
  d: random(-10, 10)
  punto: random(1, 5)

respuesta: 3 * a * punto ^ 2 + 2 * b * punto + c
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {a}x³ + {b}x² + {c}x + {d}. ¿Cuánto vale f'({punto})?"

explicacion: |
  f'(x) = {3 * a}x² + {2 * b}x + {c}, evaluado en x={punto}.
```

### 22 — Concepto: derivada segunda (adelanto)

```
metadata:
  materia: "matematicas"
  tema: "derivada"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Se puede derivar la derivada de una función, obteniendo la 'derivada segunda' — por ejemplo, la derivada de la velocidad es la aceleración."

explicacion: |
  Derivar dos veces mide "cómo cambia la tasa de cambio" — en física, la
  aceleración es la derivada segunda de la posición.
```

### 23 — Aplicar: derivada segunda de una posición cuadrática

```
metadata:
  materia: "matematicas"
  tema: "derivada"
  nivel: "avanzado"
  tags: ["aplicacion"]

variables:
  a: random(1, 10)

respuesta: 2 * a
tipo: input
tolerancia_abs: 0

enunciado: "s(t) = {a}t² (posición). La velocidad es s'(t) = {2 * a}t. ¿Cuál es la aceleración (la derivada de la velocidad)?"

explicacion: |
  Derivar {2 * a}t (una función lineal en t) da la constante {2 * a} —
  la aceleración es constante en este movimiento.
```

### 24 — Concepto: derivada de x (exponente 1 implícito)

```
metadata:
  materia: "matematicas"
  tema: "derivada"
  nivel: "basico"
  tags: ["concepto"]

respuesta: 1
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = x. ¿Cuánto vale f'(x)?"

explicacion: |
  x es x¹: derivando, 1×x⁰ = 1×1 = 1.
```

### 25 — Aplicar: costo marginal (adelanto de economía)

```
metadata:
  materia: "matematicas"
  tema: "derivada"
  nivel: "avanzado"
  tags: ["aplicacion"]

variables:
  a: random(1, 5)
  b: random(10, 50)
  cantidad: random(1, 20)

respuesta: 2 * a * cantidad + b
tipo: input
tolerancia_abs: 0

enunciado: "El costo de producir q unidades es C(q) = {a}q² + {b}q. ¿Cuál es el costo marginal (la derivada de C) en q={cantidad}?"

explicacion: |
  El costo marginal es, literalmente, la derivada del costo total —
  cuánto cuesta producir "una unidad más" en ese punto.
```

### 26 — Derivada de un binomio con coeficiente negativo

```
metadata:
  materia: "matematicas"
  tema: "derivada"
  nivel: "intermedio"
  tags: ["polinomio", "signos"]

variables:
  a: random(2, 8)
  punto: random(-6, 6)

respuesta: -2 * a * punto
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = −{a}x². ¿Cuánto vale f'({punto})?"

pasos:
  - "f'(x) = −{2 * a}x"

explicacion: |
  El signo negativo se conserva al derivar, igual que cualquier otro
  coeficiente.
```

### 27 — Concepto: crecimiento y signo de la derivada

```
metadata:
  materia: "matematicas"
  tema: "derivada"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Si f'(a) es positiva, la función es creciente cerca de x=a; si f'(a) es negativa, es decreciente ahí."

explicacion: |
  El signo de la derivada indica la dirección del cambio, y su valor
  absoluto, qué tan rápido cambia.
```

### 28 — Verificación con error en el coeficiente

```
metadata:
  materia: "matematicas"
  tema: "derivada"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  k: random(2, 10)
  n: random(2, 6)
  real: k * n
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "f(x) = {k}x^{n}. ¿Es correcto que el coeficiente de f'(x) sea {propuesto}?"

explicacion: |
  El coeficiente correcto es {k}×{n} = {real}.
```

### 29 — Concepto: derivada de la suma vs. producto de derivadas

```
metadata:
  materia: "matematicas"
  tema: "derivada"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "La derivada de un producto de dos funciones es simplemente el producto de sus derivadas."

explicacion: |
  No es tan simple — la regla del producto real es más elaborada
  (f·g)' = f'g + fg'. Sólo la SUMA se deriva término a término de forma
  directa.
```

### 30 — Aplicar: hallar dónde la pendiente vale un número dado

```
metadata:
  materia: "matematicas"
  tema: "derivada"
  nivel: "avanzado"
  tags: ["aplicacion"]

variables:
  a: random(1, 6)
  x_sol: random(1, 10)
  pendiente_deseada: 2 * a * x_sol

respuesta: x_sol
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {a}x². ¿En qué valor positivo de x la pendiente de la tangente es {pendiente_deseada}?"

pasos:
  - "f'(x) = {2 * a}x = {pendiente_deseada} → x = {pendiente_deseada}/{2 * a}"

explicacion: |
  Se plantea f'(x) = valor deseado, y se despeja x — la misma ecuación
  de primer grado de siempre.
```
