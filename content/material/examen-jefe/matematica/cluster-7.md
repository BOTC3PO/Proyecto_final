# Examen jefe — Maestro del Despeje y Derivadas

> Logro #58. Resolviste el parcial dominando derivadas, determinantes, diagramas de Venn y despeje de fórmulas con dinero. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **135 preguntas totales** en 5/5 secciones.

---

## Sección: derivada (30 preguntas)

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

## Sección: despejar-formula (28 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "basico"
  tags: ["perimetro", "rectangulo"]

variables:
  h: random(1, 30)
  b_sol: random(1, 30)
  P: 2 * (b_sol + h)

respuesta: P / 2 - h
tipo: input
tolerancia_abs: 0

enunciado: "El perímetro de un rectángulo es P = 2(b + h). Si P = {P} y h = {h}, ¿cuánto vale b?"

pasos:
  - "Dividir por 2: P/2 = b + h → {P}/2 = {P / 2}"
  - "Restar h: b = {P / 2} − {h} = {P / 2 - h}"

explicacion: |
  Se deshacen las operaciones en orden inverso: primero la división por
  2, después la resta de h.
```

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "basico"
  tags: ["perimetro", "rectangulo"]

variables:
  b: random(1, 30)
  h_sol: random(1, 30)
  P: 2 * (b + h_sol)

respuesta: P / 2 - b
tipo: input
tolerancia_abs: 0

enunciado: "El perímetro de un rectángulo es P = 2(b + h). Si P = {P} y b = {b}, ¿cuánto vale h?"

explicacion: |
  h = P/2 − b, el mismo procedimiento con los roles de b y h invertidos.
```

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "basico"
  tags: ["area", "rectangulo"]

variables:
  h: random(2, 20)
  b_sol: random(1, 20)
  A: b_sol * h

respuesta: A / h
tipo: input
tolerancia_abs: 0

enunciado: "El área de un rectángulo es A = b · h. Si A = {A} y h = {h}, ¿cuánto vale b?"

explicacion: |
  Como h multiplica a b, se deshace dividiendo: b = A/h.
```

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "basico"
  tags: ["area", "rectangulo"]

variables:
  b: random(2, 20)
  h_sol: random(1, 20)
  A: b * h_sol

respuesta: A / b
tipo: input
tolerancia_abs: 0

enunciado: "El área de un rectángulo es A = b · h. Si A = {A} y b = {b}, ¿cuánto vale h?"

explicacion: |
  h = A/b.
```

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "intermedio"
  tags: ["area", "triangulo"]

variables:
  h: random(1, 10) * 2
  b_sol: random(1, 20)
  A: (b_sol * h) / 2

respuesta: 2 * A / h
tipo: input
tolerancia_abs: 0

enunciado: "El área de un triángulo es A = (b · h) / 2. Si A = {A} y h = {h}, ¿cuánto vale b?"

pasos:
  - "Multiplicar por 2: 2A = b · h → {2 * A}"
  - "Dividir por h: b = {2 * A} / {h} = {2 * A / h}"

explicacion: |
  El 2 del denominador se despeja multiplicando primero.
```

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "intermedio"
  tags: ["area", "triangulo"]

variables:
  b: random(1, 10) * 2
  h_sol: random(1, 20)
  A: (b * h_sol) / 2

respuesta: 2 * A / b
tipo: input
tolerancia_abs: 0

enunciado: "El área de un triángulo es A = (b · h) / 2. Si A = {A} y b = {b}, ¿cuánto vale h?"

explicacion: |
  h = 2A / b.
```

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "basico"
  tags: ["velocidad", "fisica"]

variables:
  v: random(2, 20)
  t: random(2, 10)

respuesta: v * t
tipo: input
tolerancia_abs: 0

enunciado: "v = d / t. Si v = {v} y t = {t}, ¿cuánto vale d?"

explicacion: |
  d ya está multiplicando implícitamente: d = v · t.
```

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "intermedio"
  tags: ["velocidad", "fisica", "denominador"]

variables:
  v: random(2, 20)
  t_sol: random(1, 15)
  d: v * t_sol

respuesta: d / v
tipo: input
tolerancia_abs: 0

enunciado: "v = d / t. Si v = {v} y d = {d}, ¿cuánto vale t?"

pasos:
  - "Pasar t multiplicando: v · t = d"
  - "Dividir por v: t = {d} / {v} = {d / v}"

explicacion: |
  Cuando la letra a despejar divide, primero se la pasa multiplicando y
  recién después se despeja — no se invierte la fracción directamente.
```

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "basico"
  tags: ["velocidad", "fisica"]

variables:
  t: random(2, 10)
  v_sol: random(2, 20)
  d: v_sol * t

respuesta: d / t
tipo: input
tolerancia_abs: 0

enunciado: "v = d / t. Si d = {d} y t = {t}, ¿cuánto vale v?"

explicacion: |
  v ya está despejada en la fórmula original: v = d/t.
```

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "basico"
  tags: ["densidad", "fisica"]

variables:
  dens: random(2, 10)
  V: random(2, 15)

respuesta: dens * V
tipo: input
tolerancia_abs: 0

enunciado: "d = m / V. Si d = {dens} y V = {V}, ¿cuánto vale m?"

explicacion: |
  m = d · V.
```

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "intermedio"
  tags: ["densidad", "fisica", "denominador"]

variables:
  dens: random(2, 10)
  V_sol: random(2, 15)
  m: dens * V_sol

respuesta: m / dens
tipo: input
tolerancia_abs: 0

enunciado: "d = m / V. Si d = {dens} y m = {m}, ¿cuánto vale V?"

pasos:
  - "Pasar V multiplicando: d · V = m"
  - "Dividir por d: V = {m} / {dens} = {m / dens}"

explicacion: |
  Mismo caso que despejar t en v = d/t: la letra divide, así que primero
  pasa multiplicando.
```

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "intermedio"
  tags: ["interes", "tres_letras"]

variables:
  i: random(2, 10)
  t: random(2, 8)
  C_sol: random(1, 20)
  I: C_sol * i * t

respuesta: I / (i * t)
tipo: input
tolerancia_abs: 0

enunciado: "I = C · i · t. Si I = {I}, i = {i} y t = {t}, ¿cuánto vale C?"

pasos:
  - "Dividir por i y por t (las dos letras que multiplican): C = {I} / ({i}×{t}) = {I / (i * t)}"

explicacion: |
  Cuando hay dos letras multiplicando además de la que se despeja, hay
  que dividir por las dos — no sólo por una de ellas.
```

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "intermedio"
  tags: ["interes", "tres_letras"]

variables:
  C: random(2, 20)
  t: random(2, 8)
  i_sol: random(1, 10)
  I: C * i_sol * t

respuesta: I / (C * t)
tipo: input
tolerancia_abs: 0

enunciado: "I = C · i · t. Si I = {I}, C = {C} y t = {t}, ¿cuánto vale i?"

explicacion: |
  i = I / (C · t).
```

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "intermedio"
  tags: ["interes", "tres_letras"]

variables:
  C: random(2, 20)
  i: random(2, 10)
  t_sol: random(1, 8)
  I: C * i * t_sol

respuesta: I / (C * i)
tipo: input
tolerancia_abs: 0

enunciado: "I = C · i · t. Si I = {I}, C = {C} e i = {i}, ¿cuánto vale t?"

explicacion: |
  t = I / (C · i).
```

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "intermedio"
  tags: ["problema", "dos_pasos"]

variables:
  precio: random(2, 15)
  envio: random(1, 20)
  cant_sol: random(1, 20)
  T: precio * cant_sol + envio

respuesta: (T - envio) / precio
tipo: input
tolerancia_abs: 0

enunciado: "El costo total es T = c·p + e (c: cantidad, p: precio unitario, e: envío). Si T = {T}, p = {precio}, e = {envio}, ¿cuánto vale c?"

explicacion: |
  Mismo procedimiento que a·x + b = c: restar el envío, dividir por el
  precio unitario.
```

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "basico"
  tags: ["problema", "dos_pasos"]

variables:
  precio: random(2, 15)
  cant: random(1, 20)
  envio_sol: random(1, 20)
  T: precio * cant + envio_sol

respuesta: T - precio * cant
tipo: input
tolerancia_abs: 0

enunciado: "T = c·p + e. Si T = {T}, c = {cant} y p = {precio}, ¿cuánto vale e?"

explicacion: |
  e = T − c·p.
```

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "intermedio"
  tags: ["problema", "dos_pasos"]

variables:
  cant: random(1, 20)
  envio: random(1, 20)
  precio_sol: random(2, 15)
  T: cant * precio_sol + envio

respuesta: (T - envio) / cant
tipo: input
tolerancia_abs: 0

enunciado: "T = c·p + e. Si T = {T}, c = {cant} y e = {envio}, ¿cuánto vale p?"

explicacion: |
  p = (T − e) / c.
```

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "basico"
  tags: ["perimetro", "una_letra"]

variables:
  l_sol: random(1, 30)
  P: 3 * l_sol

respuesta: P / 3
tipo: input
tolerancia_abs: 0

enunciado: "El perímetro de un triángulo equilátero es P = 3l. Si P = {P}, ¿cuánto vale l?"

explicacion: |
  l = P/3.
```

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "avanzado"
  tags: ["area", "trapecio", "parentesis"]

variables:
  b: random(1, 15)
  h: random(1, 10) * 2
  B_sol: random(1, 20)
  A: ((B_sol + b) * h) / 2

respuesta: 2 * A / h - b
tipo: input
tolerancia_abs: 0

enunciado: "El área de un trapecio es A = ((B + b)·h) / 2. Si A = {A}, b = {b} y h = {h}, ¿cuánto vale B (la base mayor)?"

pasos:
  - "Multiplicar por 2 y dividir por h: B + b = 2A/h = {2 * A / h}"
  - "Restar b: B = {2 * A / h} − {b} = {2 * A / h - b}"

explicacion: |
  B queda sola restando b del resultado — no dividiendo por (h − b), que
  sería un error de paréntesis.
```

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "avanzado"
  tags: ["area", "trapecio", "parentesis"]

variables:
  B: random(10, 25)
  b: random(1, 9)
  h_sol: random(1, 10) * 2
  A: ((B + b) * h_sol) / 2

respuesta: 2 * A / (B + b)
tipo: input
tolerancia_abs: 0

enunciado: "A = ((B + b)·h) / 2. Si A = {A}, B = {B} y b = {b}, ¿cuánto vale h?"

pasos:
  - "Multiplicar por 2: 2A = (B + b)·h"
  - "Dividir por (B + b): h = {2 * A} / {B + b} = {2 * A / (B + b)}"

explicacion: |
  (B + b) se trata como un solo bloque al dividir, sin separarlo.
```

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "basico"
  tags: ["verificacion", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Al despejar h de A = b · h, se obtiene h = A / b."

explicacion: |
  h multiplica a b para dar A, así que se despeja dividiendo: h = A/b.
```

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "intermedio"
  tags: ["verificacion", "error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Al despejar b de P = 2(b + h), se obtiene b = P/2 + h."

explicacion: |
  La forma correcta es b = P/2 − h (se resta h, no se suma) — error
  típico de cambiar el signo al mover un término.
```

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "intermedio"
  tags: ["verificacion", "error_comun", "denominador", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Al despejar t de v = d/t, se obtiene t = v/d."

explicacion: |
  La forma correcta es t = d/v. Invertir directamente sin pasar t
  multiplicando primero da vuelta el resultado.
```

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "basico"
  tags: ["verificacion", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Al despejar m de d = m/V, se obtiene m = d · V."

explicacion: |
  m es la que divide por V para dar d, así que se despeja multiplicando:
  m = d·V.
```

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "avanzado"
  tags: ["verificacion", "error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Al despejar C de I = C · i · t, se obtiene C = I · i · t."

explicacion: |
  La forma correcta es C = I / (i·t): hay que dividir por las dos letras
  que multiplican, no multiplicarlas.
```

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "intermedio"
  tags: ["verificacion", "numerico", "verdadero_falso"]

variables:
  b: random(2, 20)
  h: random(2, 20)
  A: b * h
  propuesta: uno_de([A / b, A * b])

respuesta: (propuesta == h)
tipo: vf

enunciado: "El área de un rectángulo es A = {A} y su base es b = {b}. ¿Es correcto que la altura sea h = {propuesta}?"

explicacion: |
  La altura correcta es A/b — si la opción mostrada usa A·b en cambio,
  es el error de multiplicar en vez de dividir.
```

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "intermedio"
  tags: ["verificacion", "numerico", "verdadero_falso"]

variables:
  b: random(1, 30)
  h: random(1, 30)
  P: 2 * (b + h)
  propuesta: uno_de([P / 2 - h, P / 2 + h])

respuesta: (propuesta == b)
tipo: vf

enunciado: "El perímetro de un rectángulo es P = {P} y su altura es h = {h}. ¿Es correcto que la base sea b = {propuesta}?"

explicacion: |
  La base correcta es P/2 − h — sumar h en vez de restarlo es el error
  típico de este despeje.
```

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "avanzado"
  tags: ["verificacion", "numerico", "denominador", "verdadero_falso"]

variables:
  v: random(2, 20)
  t: random(2, 10)
  d: v * t
  propuesta: uno_de([d / v, d * v])

respuesta: (propuesta == t)
tipo: vf

enunciado: "v = d/t. Si v = {v} y d = {d}, ¿es correcto que t = {propuesta}?"

explicacion: |
  El tiempo correcto es d/v — multiplicar en vez de dividir es el error
  típico cuando la letra despejada estaba en el denominador.
```

## Sección: determinante (26 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "determinante"
  nivel: "basico"
  tags: ["2x2"]

variables:
  a: random(1, 15)
  b: random(1, 15)
  c: random(1, 15)
  d: random(1, 15)

respuesta: a * d - b * c
tipo: input
tolerancia_abs: 0

enunciado: "A = [[{a}, {b}], [{c}, {d}]]. ¿Cuál es el determinante de A?"

pasos:
  - "det(A) = {a}×{d} − {b}×{c} = {a * d} − {b * c} = {a * d - b * c}"

explicacion: |
  Producto de la diagonal principal menos producto de la diagonal
  secundaria.
```

```
metadata:
  materia: "matematicas"
  tema: "determinante"
  nivel: "basico"
  tags: ["2x2", "signos"]

variables:
  a: random(1, 5)
  b: random(10, 20)
  c: random(1, 5)
  d: random(1, 5)

respuesta: a * d - b * c
tipo: input
tolerancia_abs: 0

enunciado: "A = [[{a}, {b}], [{c}, {d}]]. ¿Cuál es el determinante de A?"

explicacion: |
  El determinante puede dar negativo — no hay que "corregir" el signo.
```

```
metadata:
  materia: "matematicas"
  tema: "determinante"
  nivel: "basico"
  tags: ["2x2"]

variables:
  a: random(2, 20)
  b: random(1, 10)
  c: random(1, 10)
  d: random(2, 20)

respuesta: a * d - b * c
tipo: input
tolerancia_abs: 0

enunciado: "A = [[{a}, {b}], [{c}, {d}]]. ¿Cuál es el determinante de A?"

explicacion: |
  det(A) = ad − bc.
```

```
metadata:
  materia: "matematicas"
  tema: "determinante"
  nivel: "basico"
  tags: ["2x2"]

variables:
  a: random(1, 15)
  d: random(1, 15)
  b: random(1, 10)
  c: random(1, 10)

respuesta: a * d - b * c
tipo: input
tolerancia_abs: 0

enunciado: "A = [[{a}, {b}], [{c}, {d}]]. ¿Cuál es el determinante de A?"

explicacion: |
  det(A) = {a}×{d} − {b}×{c}.
```

```
metadata:
  materia: "matematicas"
  tema: "determinante"
  nivel: "intermedio"
  tags: ["2x2"]

variables:
  a: random(10, 30)
  b: random(5, 20)
  c: random(5, 20)
  d: random(10, 30)

respuesta: a * d - b * c
tipo: input
tolerancia_abs: 0

enunciado: "A = [[{a}, {b}], [{c}, {d}]]. ¿Cuál es el determinante de A?"

explicacion: |
  det(A) = {a}×{d} − {b}×{c} = {a * d - b * c}.
```

```
metadata:
  materia: "matematicas"
  tema: "determinante"
  nivel: "intermedio"
  tags: ["2x2", "singular"]

variables:
  a: random(1, 10)
  b: random(1, 10)
  k: random(2, 5)
  c: a * k
  d: b * k

respuesta: a * d - b * c
tipo: input
tolerancia_abs: 0

enunciado: "A = [[{a}, {b}], [{c}, {d}]]. ¿Cuál es el determinante de A?"

explicacion: |
  Acá la segunda fila es exactamente {k} veces la primera, así que el
  determinante da 0: filas proporcionales.
```

```
metadata:
  materia: "matematicas"
  tema: "determinante"
  nivel: "avanzado"
  tags: ["3x3", "sarrus"]

variables:
  a: random(1, 6)
  b: random(1, 6)
  c: random(1, 6)
  d: random(1, 6)
  e: random(1, 6)
  f: random(1, 6)
  g: random(1, 6)
  h: random(1, 6)
  i: random(1, 6)

respuesta: a * e * i + b * f * g + c * d * h - c * e * g - a * f * h - b * d * i
tipo: input
tolerancia_abs: 0

enunciado: "A = [[{a}, {b}, {c}], [{d}, {e}, {f}], [{g}, {h}, {i}]]. ¿Cuál es el determinante de A?"

pasos:
  - "Diagonales +: {a}×{e}×{i} + {b}×{f}×{g} + {c}×{d}×{h}"
  - "Diagonales −: {c}×{e}×{g} + {a}×{f}×{h} + {b}×{d}×{i}"

explicacion: |
  Regla de Sarrus: suma de las tres diagonales principales, menos la
  suma de las tres diagonales secundarias.
```

```
metadata:
  materia: "matematicas"
  tema: "determinante"
  nivel: "avanzado"
  tags: ["3x3", "sarrus"]

variables:
  a: random(1, 5)
  b: random(1, 5)
  c: random(1, 5)
  d: random(1, 5)
  e: random(1, 5)
  f: random(1, 5)
  g: random(1, 5)
  h: random(1, 5)
  i: random(1, 5)

respuesta: a * e * i + b * f * g + c * d * h - c * e * g - a * f * h - b * d * i
tipo: input
tolerancia_abs: 0

enunciado: "A = [[{a}, {b}, {c}], [{d}, {e}, {f}], [{g}, {h}, {i}]]. ¿Cuál es el determinante de A?"

explicacion: |
  Mismo procedimiento de Sarrus con otros números.
```

```
metadata:
  materia: "matematicas"
  tema: "determinante"
  nivel: "avanzado"
  tags: ["3x3", "sarrus"]

variables:
  a: random(1, 6)
  b: random(1, 6)
  c: random(1, 6)
  e: random(1, 6)
  f: random(1, 6)
  h: random(1, 6)
  i: random(1, 6)

respuesta: a * e * i + b * f * 0 + c * 0 * h - c * e * 0 - a * f * h - b * 0 * i
tipo: input
tolerancia_abs: 0

enunciado: "A = [[{a}, {b}, {c}], [0, {e}, {f}], [0, {h}, {i}]]. ¿Cuál es el determinante de A?"

pasos:
  - "Con ceros en la primera columna de las filas 2 y 3, varios productos de Sarrus se anulan directamente"

explicacion: |
  Los productos que incluyen alguno de los ceros se anulan, así que sólo
  quedan los términos que no los usan.
```

```
metadata:
  materia: "matematicas"
  tema: "determinante"
  nivel: "intermedio"
  tags: ["3x3", "diagonal"]

variables:
  a: random(2, 10)
  e: random(2, 10)
  i: random(2, 10)

respuesta: a * e * i
tipo: input
tolerancia_abs: 0

enunciado: "A = [[{a}, 0, 0], [0, {e}, 0], [0, 0, {i}]]. ¿Cuál es el determinante de A?"

explicacion: |
  En una matriz diagonal, todos los productos de Sarrus que no usan sólo
  la diagonal principal se anulan — el determinante queda el producto de
  la diagonal: {a}×{e}×{i}.
```

```
metadata:
  materia: "matematicas"
  tema: "determinante"
  nivel: "avanzado"
  tags: ["3x3", "sarrus"]

variables:
  a: random(1, 4)
  b: random(1, 4)
  c: random(1, 4)
  d: random(1, 4)
  e: random(1, 4)
  f: random(1, 4)
  g: random(1, 4)
  h: random(1, 4)
  i: random(1, 4)

respuesta: a * e * i + b * f * g + c * d * h - c * e * g - a * f * h - b * d * i
tipo: input
tolerancia_abs: 0

enunciado: "A = [[{a}, {b}, {c}], [{d}, {e}, {f}], [{g}, {h}, {i}]]. ¿Cuál es el determinante de A?"

explicacion: |
  Sarrus: suma de diagonales principales menos suma de diagonales
  secundarias.
```

```
metadata:
  materia: "matematicas"
  tema: "determinante"
  nivel: "avanzado"
  tags: ["3x3", "singular"]

variables:
  a: random(1, 5)
  b: random(1, 5)
  c: random(1, 5)
  d: random(1, 5)
  e: random(1, 5)
  f: random(1, 5)
  k: random(2, 3)
  g: a * k
  h: b * k
  i: c * k

respuesta: a * e * i + b * f * g + c * d * h - c * e * g - a * f * h - b * d * i
tipo: input
tolerancia_abs: 0

enunciado: "A = [[{a}, {b}, {c}], [{d}, {e}, {f}], [{g}, {h}, {i}]]. ¿Cuál es el determinante de A?"

explicacion: |
  La tercera fila es {k} veces la primera — filas proporcionales dan
  determinante 0.
```

```
metadata:
  materia: "matematicas"
  tema: "determinante"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  a: random(1, 15)
  b: random(1, 15)
  c: random(1, 15)
  d: random(1, 15)
  real: a * d - b * c
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "A = [[{a}, {b}], [{c}, {d}]]. ¿Es correcto que det(A) = {propuesto}?"

explicacion: |
  El valor correcto es ad − bc = {real}.
```

```
metadata:
  materia: "matematicas"
  tema: "determinante"
  nivel: "intermedio"
  tags: ["error_comun", "verdadero_falso"]

variables:
  a: random(1, 10)
  b: random(11, 20)
  c: random(1, 10)
  d: random(1, 10)

respuesta: (b * c - a * d) == (a * d - b * c)
tipo: vf

enunciado: "A = [[{a}, {b}], [{c}, {d}]]. ¿Es lo mismo calcular bc − ad que ad − bc para el determinante?"

explicacion: |
  No — el determinante es ad − bc, en ese orden. Invertirlo cambia el
  signo del resultado (y en general el número también).
```

```
metadata:
  materia: "matematicas"
  tema: "determinante"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Si det(A) = 0, la matriz A es invertible."

explicacion: |
  Es al revés: det(A) = 0 significa que A NO es invertible.
```

```
metadata:
  materia: "matematicas"
  tema: "determinante"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Si det(A) ≠ 0, el sistema de ecuaciones asociado a A tiene una única solución."

explicacion: |
  Es la propiedad central que hace útil al determinante para sistemas de
  ecuaciones.
```

```
metadata:
  materia: "matematicas"
  tema: "determinante"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Si una fila de una matriz cuadrada es un múltiplo exacto de otra fila, el determinante da 0."

explicacion: |
  Las filas "no aportan información independiente" — es la misma
  situación que un sistema con infinitas soluciones o ninguna.
```

```
metadata:
  materia: "matematicas"
  tema: "determinante"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "La regla de Sarrus se puede usar para calcular el determinante de una matriz de cualquier tamaño."

explicacion: |
  Sarrus sólo funciona para matrices 3×3 — para tamaños mayores hace
  falta otro método (cofactores), fuera de este módulo.
```

```
metadata:
  materia: "matematicas"
  tema: "determinante"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "El determinante sólo puede dar 0 si la matriz tiene algún elemento igual a 0."

explicacion: |
  Una matriz sin ningún cero puede tener determinante 0 igual, si sus
  filas (o columnas) son proporcionales entre sí.
```

```
metadata:
  materia: "matematicas"
  tema: "determinante"
  nivel: "basico"
  tags: ["opcion_multiple"]

variables:
  a: random(2, 15)
  b: random(1, 10)
  c: random(1, 10)
  d: random(2, 15)

respuesta: a * d - b * c
tipo: mc
opciones_explicitas:
  - a * d - b * c
  - a * b - c * d
  - a * d + b * c

enunciado: "A = [[{a}, {b}], [{c}, {d}]]. ¿Cuál es el determinante de A?"

explicacion: |
  det(A) = ad − bc: diagonal principal menos diagonal secundaria.
```

```
metadata:
  materia: "matematicas"
  tema: "determinante"
  nivel: "basico"
  tags: ["opcion_multiple"]

variables:
  a: random(2, 10)
  d: random(2, 10)

respuesta: a * d
tipo: mc
opciones_explicitas:
  - a * d
  - a + d
  - a * d * 2

enunciado: "A = [[{a}, 0], [0, {d}]]. ¿Cuál es el determinante de A?"

explicacion: |
  Con ceros fuera de la diagonal, det(A) = ad − 0×0 = ad.
```

```
metadata:
  materia: "matematicas"
  tema: "determinante"
  nivel: "basico"
  tags: ["identidad"]

respuesta: 1
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el determinante de la matriz identidad 2×2?"

explicacion: |
  det(I) = (1×1) − (0×0) = 1.
```

```
metadata:
  materia: "matematicas"
  tema: "determinante"
  nivel: "intermedio"
  tags: ["signos", "verdadero_falso"]

variables:
  a: random(1, 5)
  b: random(10, 20)
  c: random(1, 5)
  d: random(1, 5)
  real: a * d - b * c

respuesta: (real < 0)
tipo: vf

enunciado: "A = [[{a}, {b}], [{c}, {d}]]. ¿Es negativo el determinante de A?"

explicacion: |
  det(A) = {a}×{d} − {b}×{c} = {real}.
```

```
metadata:
  materia: "matematicas"
  tema: "determinante"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

variables:
  a: random(1, 10)
  b: random(1, 10)
  c: random(1, 10)
  d: random(1, 10)
  det_val: a * d - b * c

respuesta: (det_val != 0)
tipo: vf

enunciado: "A = [[{a}, {b}], [{c}, {d}]]. ¿Es invertible A?"

explicacion: |
  A es invertible si y sólo si su determinante es distinto de 0. Acá
  det(A) = {det_val}.
```

```
metadata:
  materia: "matematicas"
  tema: "determinante"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

variables:
  a: random(1, 5)
  b: random(1, 5)
  c: random(1, 5)
  d: random(1, 5)
  e: random(1, 5)
  f: random(1, 5)
  g: random(1, 5)
  h: random(1, 5)
  i: random(1, 5)
  det_val: a * e * i + b * f * g + c * d * h - c * e * g - a * f * h - b * d * i

respuesta: (det_val != 0)
tipo: vf

enunciado: "A = [[{a}, {b}, {c}], [{d}, {e}, {f}], [{g}, {h}, {i}]]. ¿Es invertible A?"

explicacion: |
  Se calcula el determinante con Sarrus y se comprueba si es distinto de
  0.
```

```
metadata:
  materia: "matematicas"
  tema: "determinante"
  nivel: "intermedio"
  tags: ["2x2", "signos"]

variables:
  a: random(1, 10)
  b: random(-10, -1)
  c: random(1, 10)
  d: random(1, 10)

respuesta: a * d - b * c
tipo: input
tolerancia_abs: 0

enunciado: "A = [[{a}, {b}], [{c}, {d}]]. ¿Cuál es el determinante de A?"

explicacion: |
  Con un elemento negativo, el procedimiento no cambia: det(A) = ad − bc,
  llevando el signo con cuidado.
```

## Sección: diagramas-de-venn (25 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "basico"
  tags: ["venn", "vocabulario"]

enunciado: "¿Qué es un diagrama de Venn?"
tipo: mc
opciones_explicitas:
  - "La representación visual de conjuntos (como círculos) y sus operaciones (superposición = intersección)"
  - "Una tabla de números ordenados de menor a mayor"
  - "Un gráfico de barras para comparar cantidades"
respuesta: "La representación visual de conjuntos (como círculos) y sus operaciones (superposición = intersección)"

explicacion: |
  Es la forma visual de las operaciones ya definidas entre conjuntos.
```

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "basico"
  tags: ["venn", "vocabulario"]

enunciado: "¿Qué representa el rectángulo que envuelve a todos los círculos en un diagrama de Venn?"
tipo: mc
opciones_explicitas:
  - "El conjunto universal U"
  - "El conjunto vacío"
  - "La intersección de todos los conjuntos"
respuesta: "El conjunto universal U"

explicacion: |
  Contiene a todos los elementos posibles en el contexto del problema.
```

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "basico"
  tags: ["venn", "vocabulario"]

enunciado: "En un diagrama de Venn con dos círculos A y B, ¿qué representa la zona donde se superponen?"
tipo: mc
opciones_explicitas:
  - "La intersección, A ∩ B"
  - "La unión, A ∪ B"
  - "El conjunto universal"
respuesta: "La intersección, A ∩ B"

explicacion: |
  Es la zona que pertenece a ambos círculos a la vez.
```

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "intermedio"
  tags: ["venn", "completar"]

tipo: completar
enunciado: "Completá: la parte del círculo A que NO se superpone con B representa el conjunto ___."
respuestas_validas:
  - "A - B"
  - "A−B"

explicacion: |
  Son los elementos de A que no comparte con B.
```

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "intermedio"
  tags: ["venn"]

respuesta: verdadero
tipo: vf

enunciado: "En un diagrama de Venn, A ∪ B es toda la zona cubierta por cualquiera de los dos círculos (las tres regiones: sólo A, sólo B, y la intersección)."

explicacion: |
  Es la superficie total ocupada por al menos uno de los dos conjuntos.
```

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "intermedio"
  tags: ["venn"]

respuesta: falso
tipo: vf

enunciado: "La zona fuera de ambos círculos, pero dentro del rectángulo U, representa elementos que pertenecen a A o a B."

explicacion: |
  Es exactamente lo opuesto: son los elementos que NO pertenecen ni a
  A ni a B.
```

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "avanzado"
  tags: ["venn", "problema"]

variables:
  a: random(20, 35)
  b: random(20, 35)
  interseccion: random(1, min(a, b))
  extra: random(5, 20)
  total: a + b - interseccion + extra

respuesta: extra
tipo: input

enunciado: "En una encuesta a {total} personas, {a} tienen perro, {b} tienen gato, y {interseccion} tienen ambos. ¿Cuántas personas no tienen ni perro ni gato?"

pasos:
  - "Tienen perro o gato (unión) = {a} + {b} − {interseccion} = {a + b - interseccion}"
  - "Ninguno = total − unión = {total} − {a + b - interseccion} = {extra}"

explicacion: |
  Primero se calcula cuántos tienen al menos una de las dos cosas, y
  se resta ese número del total.
```

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "intermedio"
  tags: ["venn", "problema"]

variables:
  a: random(20, 50)
  interseccion: random(1, 15)

respuesta: a - interseccion
tipo: input

enunciado: "En un diagrama de Venn, el conjunto A tiene {a} elementos en total, y {interseccion} de ellos están también en B. ¿Cuántos elementos hay en la región 'sólo A' (dentro del círculo A, pero fuera de la superposición)?"

pasos:
  - "Sólo A = |A| − |A∩B| = {a} − {interseccion} = {a - interseccion}"

explicacion: |
  La región 'sólo A' es lo que queda del círculo A después de sacarle
  la parte compartida con B.
```

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "intermedio"
  tags: ["venn", "problema"]

variables:
  b: random(20, 50)
  interseccion: random(1, 15)

respuesta: b - interseccion
tipo: input

enunciado: "En un diagrama de Venn, el conjunto B tiene {b} elementos en total, y {interseccion} de ellos están también en A. ¿Cuántos elementos hay en la región 'sólo B'?"

pasos:
  - "Sólo B = |B| − |A∩B| = {b} − {interseccion} = {b - interseccion}"

explicacion: |
  El mismo razonamiento que 'sólo A', ahora para el círculo B.
```

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "avanzado"
  tags: ["venn", "ordenar"]

enunciado: "Ordená los pasos para completar un diagrama de Venn de dos conjuntos, a partir de los datos de una encuesta."
tipo: ordenar
opciones_explicitas:
  - "Calcular las regiones 'sólo A' y 'sólo B', restando la intersección a cada total"
  - "Anotar primero la cantidad de la intersección (el centro del diagrama)"
  - "Calcular la región 'ninguno', restando el total de la unión al total de encuestados"
respuesta_orden:
  - "Anotar primero la cantidad de la intersección (el centro del diagrama)"
  - "Calcular las regiones 'sólo A' y 'sólo B', restando la intersección a cada total"
  - "Calcular la región 'ninguno', restando el total de la unión al total de encuestados"

explicacion: |
  Empezar por el centro es clave: las otras regiones se calculan
  restando esa cantidad de los totales dados.
```

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "avanzado"
  tags: ["venn", "problema"]

variables:
  a: random(20, 35)
  b: random(20, 35)
  interseccion_real: random(1, min(a, b))
  ninguno: random(5, 20)
  total: a + b - interseccion_real + ninguno

respuesta: interseccion_real
tipo: input

enunciado: "En una encuesta a {total} personas, {a} usan transporte público, {b} usan bicicleta, y {ninguno} no usan ninguno de los dos. ¿Cuántas personas usan AMBOS medios?"

pasos:
  - "Usan al menos uno = total − ninguno = {total} − {ninguno} = {total - ninguno}"
  - "|A∩B| = |A| + |B| − (usan al menos uno) = {a} + {b} − {total - ninguno} = {interseccion_real}"

explicacion: |
  Se calcula primero la unión (todos menos los que no usan ninguno), y
  de ahí se despeja la intersección.
```

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "intermedio"
  tags: ["venn"]

enunciado: "¿Por qué conviene completar primero la intersección al resolver un diagrama de Venn de dos conjuntos?"
tipo: mc
opciones_explicitas:
  - "Porque las demás regiones (sólo A, sólo B) se calculan restando la intersección de los totales dados"
  - "Porque la intersección siempre es la región más grande"
  - "No hay ninguna razón particular, es sólo costumbre"
respuesta: "Porque las demás regiones (sólo A, sólo B) se calculan restando la intersección de los totales dados"

explicacion: |
  Sin la intersección, no se puede calcular ninguna de las otras
  regiones a partir de los totales de A y B.
```

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "intermedio"
  tags: ["venn"]

respuesta: verdadero
tipo: vf

enunciado: "Sin conocer las operaciones de unión, intersección y diferencia, un diagrama de Venn es sólo un dibujo de círculos superpuestos, sin significado matemático."

explicacion: |
  El diagrama es la forma visual de esas operaciones — no las
  reemplaza.
```

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "intermedio"
  tags: ["venn", "problema"]

variables:
  solo_a: random(10, 30)
  solo_b: random(10, 30)
  ambos: random(5, 20)

respuesta: solo_a + solo_b + ambos
tipo: input

enunciado: "En un diagrama de Venn: la región 'sólo A' tiene {solo_a} elementos, 'sólo B' tiene {solo_b}, y la intersección tiene {ambos}. ¿Cuántos elementos tiene A ∪ B en total?"

pasos:
  - "|A∪B| = sólo A + sólo B + ambos = {solo_a} + {solo_b} + {ambos} = {solo_a + solo_b + ambos}"

explicacion: |
  La unión son las tres regiones sumadas: lo exclusivo de cada
  conjunto más lo compartido.
```

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "intermedio"
  tags: ["venn"]

respuesta: verdadero
tipo: vf

enunciado: "La cantidad de elementos en la región 'sólo A' es igual a |A| menos |A∩B|."

explicacion: |
  Es el total de A menos la parte que comparte con B.
```

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "intermedio"
  tags: ["venn"]

respuesta: verdadero
tipo: vf

enunciado: "La cantidad de elementos en la región 'sólo B' es igual a |B| menos |A∩B|."

explicacion: |
  El mismo razonamiento que 'sólo A', para el otro conjunto.
```

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "avanzado"
  tags: ["venn", "problema"]

variables:
  a: random(25, 40)
  b: random(25, 40)
  interseccion: random(5, 15)
  extra: random(10, 25)
  total: a + b - interseccion + extra

respuesta: total - extra
tipo: input

enunciado: "De {total} estudiantes, {a} hablan inglés, {b} hablan portugués, y {interseccion} hablan ambos idiomas. ¿Cuántos estudiantes hablan AL MENOS uno de los dos idiomas?"

pasos:
  - "Al menos uno = |A∪B| = {a} + {b} − {interseccion} = {a + b - interseccion}"

explicacion: |
  'Al menos uno' es exactamente la definición de unión.
```

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "avanzado"
  tags: ["venn", "problema"]

variables:
  a: random(25, 40)
  b: random(25, 40)
  interseccion: random(5, 15)
  extra: random(10, 25)
  total: a + b - interseccion + extra

respuesta: extra
tipo: input

enunciado: "De {total} estudiantes, {a} hablan inglés, {b} hablan portugués, y {interseccion} hablan ambos idiomas. ¿Cuántos estudiantes NO hablan ninguno de los dos?"

pasos:
  - "Al menos uno = {a} + {b} − {interseccion} = {a + b - interseccion}"
  - "Ninguno = {total} − {a + b - interseccion} = {extra}"

explicacion: |
  Es el mismo problema que el anterior, completando la última región
  del diagrama.
```

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "basico"
  tags: ["venn", "aplicacion"]

enunciado: "¿Para qué se usan los diagramas de Venn en Biología, por ejemplo al comparar especies?"
tipo: mc
opciones_explicitas:
  - "Para mostrar visualmente qué características comparten dos o más grupos, y cuáles son exclusivas de cada uno"
  - "Sólo para medir el tamaño de los animales"
  - "No tienen ninguna aplicación en Biología"
respuesta: "Para mostrar visualmente qué características comparten dos o más grupos, y cuáles son exclusivas de cada uno"

explicacion: |
  Es la misma lógica de conjuntos, aplicada a categorías biológicas en
  vez de números.
```

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "basico"
  tags: ["venn", "aplicacion"]

enunciado: "¿Para qué sirve un diagrama de Venn al estudiar probabilidad simple?"
tipo: mc
opciones_explicitas:
  - "Para clasificar visualmente el espacio muestral en casos que cumplen una condición, otra, ambas, o ninguna"
  - "Para calcular directamente el promedio de un conjunto de datos"
  - "No se usa en probabilidad, sólo en geometría"
respuesta: "Para clasificar visualmente el espacio muestral en casos que cumplen una condición, otra, ambas, o ninguna"

explicacion: |
  Es la base visual sobre la que se construye la probabilidad de
  sucesos combinados.
```

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "intermedio"
  tags: ["venn"]

respuesta: verdadero
tipo: vf

enunciado: "Si en un diagrama de Venn dos círculos se dibujan sin tocarse (sin superposición), representan dos conjuntos disjuntos."

explicacion: |
  Sin superposición no hay intersección — es exactamente lo que
  significa ser disjuntos.
```

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "intermedio"
  tags: ["venn", "problema"]

variables:
  a: random(15, 30)
  b: random(15, 30)
  ninguno: random(5, 20)

respuesta: a + b
tipo: input

enunciado: "En un diagrama de Venn, los círculos A ({a} elementos) y B ({b} elementos) NO se superponen (son disjuntos). ¿Cuántos elementos tiene A ∪ B?"

pasos:
  - "Sin intersección que restar: |A∪B| = |A| + |B| = {a} + {b} = {a + b}"

explicacion: |
  Al no compartir nada, la unión es simplemente la suma de los dos.
```

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "intermedio"
  tags: ["venn"]

enunciado: "¿Cuáles son las tres regiones en las que un diagrama de Venn de dos conjuntos divide a la unión A ∪ B?"
tipo: mc
opciones_explicitas:
  - "Sólo A, sólo B, y la intersección (A∩B)"
  - "El conjunto universal completo"
  - "Sólo la intersección, dividida en dos mitades"
respuesta: "Sólo A, sólo B, y la intersección (A∩B)"

explicacion: |
  Esas tres regiones sumadas son exactamente A ∪ B.
```

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "avanzado"
  tags: ["venn"]

respuesta: falso
tipo: vf

enunciado: "Dibujar un diagrama de Venn alcanza por sí solo para resolver un problema de conteo, sin necesidad de aplicar ninguna fórmula."

explicacion: |
  El diagrama ayuda a organizar visualmente los datos, pero las
  cantidades de cada región siempre se calculan con las fórmulas de
  unión/intersección/diferencia.
```

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve el diagrama de Venn?"
tipo: mc
opciones_explicitas:
  - "Para representar visualmente conjuntos y sus operaciones, y organizar el cálculo de cuántos elementos hay en cada región"
  - "Sólo sirve para dibujar figuras geométricas"
  - "Sólo aplica a conjuntos de menos de 3 elementos"
respuesta: "Para representar visualmente conjuntos y sus operaciones, y organizar el cálculo de cuántos elementos hay en cada región"

explicacion: |
  Es el puente visual entre las operaciones de conjuntos y el próximo
  módulo: contar sin enumerar (principio multiplicativo de conteo).
```

## Sección: dinero (26 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "basico"
  tags: ["dinero", "suma"]

variables:
  a: random(50, 900)
  b: random(50, 900)

respuesta: a + b
tipo: input
tolerancia_abs: 0

enunciado: "Compraste algo de ${a} y otra cosa de ${b}. ¿Cuánto gastaste en total?"

explicacion: |
  Sumar dinero es sumar números, igual que siempre.
```

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "basico"
  tags: ["dinero", "vuelto"]

variables:
  precio: random(50, 900)
  billete: uno_de([1000, 2000])

restricciones:
  - billete > precio

respuesta: billete - precio
tipo: input
tolerancia_abs: 0

enunciado: "Algo cuesta ${precio} y pagás con un billete de ${billete}. ¿Cuánto te dan de vuelto?"

explicacion: |
  El vuelto es lo entregado menos el precio.
```

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "basico"
  tags: ["dinero", "vuelto"]

variables:
  precio: random(10, 90)
  billete: uno_de([100, 200, 500])

restricciones:
  - billete > precio

respuesta: billete - precio
tipo: input
tolerancia_abs: 0

enunciado: "Algo cuesta ${precio} y pagás con un billete de ${billete}. ¿Cuánto te dan de vuelto?"

explicacion: |
  Mismo procedimiento con otra denominación de billete.
```

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "intermedio"
  tags: ["dinero", "billetes"]

variables:
  denominacion: uno_de([10, 20, 50, 100])
  cantidad: random(2, 15)
  monto: denominacion * cantidad

respuesta: cantidad
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos billetes de ${denominacion} hacen falta para juntar exactamente ${monto}?"

explicacion: |
  Se divide el monto total por el valor de cada billete.
```

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "intermedio"
  tags: ["dinero", "billetes"]

variables:
  denominacion: uno_de([50, 100, 200])
  cantidad: random(2, 10)
  resto: random(1, denominacion - 1)
  monto: denominacion * cantidad + resto

respuesta: cantidad
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos billetes COMPLETOS de ${denominacion} entran en ${monto} (sin pasarse)?"

pasos:
  - "{monto} ÷ {denominacion} da {cantidad} billetes completos, y sobran {resto}"

explicacion: |
  Se toma la parte entera de dividir el monto por el valor del billete.
```

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "intermedio"
  tags: ["dinero", "billetes"]

variables:
  denominacion: uno_de([50, 100, 200])
  cantidad: random(2, 10)
  resto: random(1, denominacion - 1)
  monto: denominacion * cantidad + resto

respuesta: resto
tipo: input
tolerancia_abs: 0

enunciado: "Después de sacar todos los billetes completos de ${denominacion} posibles de ${monto}, ¿cuánto queda sin poder formar otro billete de esa denominación?"

explicacion: |
  Es el resto de dividir el monto por el valor del billete.
```

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "intermedio"
  tags: ["dinero", "verificacion"]

variables:
  precio: random(50, 900)
  billete: uno_de([1000, 2000])
  correcto: billete - precio
  error: uno_de([0, 0, 0, 10, -10])
  mostrado: correcto + error

restricciones:
  - billete > precio

respuesta: (mostrado == correcto)
tipo: vf

enunciado: "¿Está bien dado este vuelto? Precio ${precio}, pagaste con ${billete}, te dieron ${mostrado} de vuelto."

explicacion: |
  Se verifica sumando el vuelto al precio: tiene que dar exactamente lo
  que se pagó.
```

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "intermedio"
  tags: ["dinero", "billetes"]

variables:
  n1000: random(0, 3)
  n500: random(0, 3)
  n100: random(1, 4)

respuesta: n1000 * 1000 + n500 * 500 + n100 * 100
tipo: input
tolerancia_abs: 0

enunciado: "Tenés {n1000} billete(s) de $1.000, {n500} de $500 y {n100} de $100. ¿Cuánto dinero tenés en total?"

explicacion: |
  Se multiplica cada denominación por su cantidad, y se suman los
  resultados.
```

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "intermedio"
  tags: ["dinero", "billetes"]

variables:
  billete_grande: 1000
  usados_grandes: random(1, 3)
  falta: random(50, 900)
  monto: billete_grande * usados_grandes + falta

respuesta: falta
tipo: input
tolerancia_abs: 0

enunciado: "Para juntar ${monto} usaste {usados_grandes} billete(s) de ${billete_grande}. ¿Cuánto más te falta juntar?"

explicacion: |
  Se resta lo ya juntado (billete grande × cantidad) al monto total.
```

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "basico"
  tags: ["dinero", "comparacion"]

variables:
  a: random(100, 2000)
  b: random(100, 2000)

restricciones:
  - a != b

respuesta: (a < b)
tipo: vf

enunciado: "¿Es ${a} más barato que ${b}?"

explicacion: |
  Más barato es el precio menor.
```

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "intermedio"
  tags: ["dinero", "problema"]

variables:
  precio_unitario: random(20, 200)
  cantidad: random(2, 6)
  billete: uno_de([1000, 2000])

restricciones:
  - billete > (precio_unitario * cantidad)

respuesta: billete - (precio_unitario * cantidad)
tipo: input
tolerancia_abs: 0

enunciado: "Comprás {cantidad} caramelos a ${precio_unitario} cada uno, y pagás con un billete de ${billete}. ¿Cuánto te dan de vuelto?"

pasos:
  - "Costo total: {precio_unitario} × {cantidad} = {precio_unitario * cantidad}. Vuelto: {billete} - {precio_unitario * cantidad} = {billete - (precio_unitario * cantidad)}"

explicacion: |
  Primero se calcula el costo total, y recién después el vuelto.
```

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "intermedio"
  tags: ["dinero", "problema"]

variables:
  moneda: uno_de([10, 20, 50])
  meta: moneda * random(5, 30)

respuesta: meta / moneda
tipo: input
tolerancia_abs: 0

enunciado: "Querés juntar ${meta} ahorrando monedas de ${moneda}. ¿Cuántas monedas necesitás?"

explicacion: |
  Se divide la meta por el valor de cada moneda.
```

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "basico"
  tags: ["dinero", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El vuelto de una compra es lo que se entrega para pagar, menos el precio real."

explicacion: |
  vuelto = entregado − precio.
```

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "basico"
  tags: ["dinero", "vocabulario"]

variables:
  precio: random(500, 2000)
  billete: random(10, 499)

respuesta: falso
tipo: vf

enunciado: "¿Alcanza un billete de ${billete} para pagar algo que cuesta ${precio}?"

explicacion: |
  El billete entregado tiene que ser mayor o igual al precio; si no, no
  alcanza.
```

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "intermedio"
  tags: ["dinero", "vuelto"]

variables:
  precio: random(50, 900)
  billete: uno_de([1000, 2000])
  correcto: billete - precio

restricciones:
  - billete > precio

respuesta: correcto
tipo: mc
opciones_explicitas:
  - correcto
  - billete + precio
  - precio - billete

enunciado: "Algo cuesta ${precio} y pagás con ${billete}. ¿Cuál es el vuelto correcto?"

explicacion: |
  Las otras opciones suman en vez de restar, o restan al revés (dando un
  número negativo sin sentido acá).
```

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "intermedio"
  tags: ["dinero", "vuelto"]

variables:
  billete: uno_de([1000, 2000])
  vuelto: random(50, 500)

tipo: completar
enunciado: "Pagaste con ${billete} y te dieron ${vuelto} de vuelto. Completá cuánto costaba lo que compraste."
respuestas_validas:
  - billete - vuelto

explicacion: |
  precio = entregado − vuelto (la prueba de la resta, aplicada al revés).
```

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "basico"
  tags: ["dinero", "orden"]

tipo: ordenar
enunciado: "Ordená estos precios de menor a mayor."
opciones_explicitas:
  - "$850"
  - "$120"
  - "$430"
  - "$99"
respuesta_orden: ["$99", "$120", "$430", "$850"]

explicacion: |
  Se ordenan como cualquier lista de números.
```

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "intermedio"
  tags: ["dinero", "problema"]

variables:
  pan: random(50, 300)
  leche: random(50, 300)
  fruta: random(50, 300)

respuesta: pan + leche + fruta
tipo: input
tolerancia_abs: 0

enunciado: "Comprás pan a ${pan}, leche a ${leche} y fruta a ${fruta}. ¿Cuánto es el total?"

explicacion: |
  Se suman los precios de todo lo comprado.
```

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "intermedio"
  tags: ["dinero", "problema"]

variables:
  ya_ahorrado: random(500, 3000)
  meta: ya_ahorrado + random(200, 2000)

respuesta: meta - ya_ahorrado
tipo: input
tolerancia_abs: 0

enunciado: "Ya ahorraste ${ya_ahorrado} y tu meta es ${meta}. ¿Cuánto te falta ahorrar?"

explicacion: |
  Lo que falta es la meta menos lo ya ahorrado.
```

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "intermedio"
  tags: ["dinero", "billetes"]

variables:
  monto: uno_de([100, 200, 500]) * random(2, 6)

respuesta: verdadero
tipo: vf

enunciado: "Para juntar ${monto}, ¿conviene usar la menor cantidad posible de billetes/monedas, empezando por las denominaciones más grandes que entren?"

explicacion: |
  Es la estrategia práctica más común para armar un monto con el menor
  número de piezas.
```

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "intermedio"
  tags: ["dinero", "verificacion"]

variables:
  precio: random(50, 900)
  billete: uno_de([1000, 2000])
  vuelto: billete - precio

restricciones:
  - billete > precio

respuesta: (vuelto + precio == billete)
tipo: vf

enunciado: "Si pagaste ${billete} por algo de ${precio} y te dieron ${vuelto} de vuelto, ¿es cierto que ${vuelto} + ${precio} tiene que dar ${billete}?"

explicacion: |
  Es la prueba de la resta aplicada al vuelto: sumar el vuelto y el
  precio reconstruye lo entregado.
```

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "avanzado"
  tags: ["dinero", "problema"]

variables:
  precio: random(50, 500)
  billete: 1000
  vuelto: billete - precio

restricciones:
  - billete > precio
  - (vuelto - floor(vuelto / 2) * 2) == 0

respuesta: vuelto / 2
tipo: input
tolerancia_abs: 0

enunciado: "Dos amigos pagan juntos ${precio} con un billete de ${billete}, y se reparten el vuelto en partes iguales. ¿Cuánto le toca a cada uno?"

explicacion: |
  Se divide el vuelto total por la cantidad de personas.
```

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "avanzado"
  tags: ["dinero", "billetes"]

variables:
  cant_grandes: random(1, 3)

respuesta: cant_grandes
tipo: mc
opciones_explicitas:
  - cant_grandes
  - cant_grandes * 10

enunciado: "Para juntar ${cant_grandes * 100}, ¿con cuántos billetes se arma más rápido: con {cant_grandes} billete(s) de $100, o con {cant_grandes * 10} billetes de $10?"

explicacion: |
  Con la misma cantidad de dinero, usar billetes más grandes siempre
  necesita menos piezas.
```

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "intermedio"
  tags: ["dinero", "problema"]

variables:
  cantidad: random(2, 9)
  precio_unitario: random(20, 200)
  total: cantidad * precio_unitario

respuesta: precio_unitario
tipo: input
tolerancia_abs: 0

enunciado: "Pagaste ${total} por {cantidad} unidades iguales. ¿Cuánto cuesta cada una?"

explicacion: |
  Se divide el total pagado por la cantidad de unidades.
```

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "intermedio"
  tags: ["dinero", "vuelto"]

variables:
  precio: random(200, 1900)
  billete: 2000

restricciones:
  - billete > precio

respuesta: billete - precio
tipo: input
tolerancia_abs: 0

enunciado: "Algo cuesta ${precio} y pagás con un billete de $2.000. ¿Cuánto te dan de vuelto?"

explicacion: |
  vuelto = entregado − precio, con montos más grandes.
```

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "basico"
  tags: ["dinero", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Sumar, restar, multiplicar y dividir montos de dinero funciona exactamente igual que con cualquier otro número: el signo $ no cambia el procedimiento."

explicacion: |
  Es la idea central de todo el tema: el dinero es una aplicación
  práctica de la aritmética ya aprendida, no una cuenta nueva.
```
