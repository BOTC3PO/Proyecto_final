# Física — Velocidad y aceleración instantáneas (cuestionario, 26 preguntas VBLang)

> Tema: `F4` (puente Álgebra → Física). Ver `teoria.md` en esta misma
> carpeta.

---

### 1 — Velocidad instantánea: derivar y evaluar

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "intermedio"
  tags: ["velocidad"]

variables:
  a: random(1, 5)
  b: random(1, 8)
  c: random(-10, 10)
  t: random(1, 6)

respuesta: 2 * a * t + b
tipo: input
tolerancia_abs: 0

enunciado: "x(t) = {a}t² + {b}t + {c} (posición, metros). ¿Cuál es la velocidad instantánea en t={t}?"

pasos:
  - "v(t) = x'(t) = {2 * a}t + {b}"
  - "v({t}) = {2 * a}×{t} + {b} = {2 * a * t + b}"

explicacion: |
  La velocidad instantánea es la derivada de la posición.
```

### 2 — Velocidad instantánea: posición cúbica

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "avanzado"
  tags: ["velocidad"]

variables:
  a: random(1, 3)
  b: random(1, 6)
  c: random(-10, 10)
  t: random(1, 4)

respuesta: 3 * a * t ^ 2 + 2 * b * t + c
tipo: input
tolerancia_abs: 0

enunciado: "x(t) = {a}t³ + {b}t² + {c}t (posición, metros). ¿Cuál es la velocidad instantánea en t={t}?"

pasos:
  - "v(t) = x'(t) = {3 * a}t² + {2 * b}t + {c}"

explicacion: |
  Con posición cúbica, la velocidad ya no es constante ni lineal — es
  cuadrática.
```

### 3 — Aceleración instantánea: derivar dos veces

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "intermedio"
  tags: ["aceleracion"]

variables:
  a: random(1, 5)
  b: random(1, 8)
  c: random(-10, 10)

respuesta: 2 * a
tipo: input
tolerancia_abs: 0

enunciado: "x(t) = {a}t² + {b}t + {c}. ¿Cuál es la aceleración instantánea (constante, en este caso)?"

pasos:
  - "v(t) = {2 * a}t + {b}. a(t) = v'(t) = {2 * a}"

explicacion: |
  Con posición cuadrática, la aceleración es constante (mismo caso que
  MRUV).
```

### 4 — Aceleración instantánea: posición cúbica, evaluar en un punto

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "avanzado"
  tags: ["aceleracion"]

variables:
  a: random(1, 3)
  b: random(1, 6)
  t: random(1, 5)

respuesta: 6 * a * t + 2 * b
tipo: input
tolerancia_abs: 0

enunciado: "x(t) = {a}t³ + {b}t² (posición). ¿Cuál es la aceleración instantánea en t={t}?"

pasos:
  - "v(t) = {3 * a}t² + {2 * b}t. a(t) = v'(t) = {6 * a}t + {2 * b}"
  - "a({t}) = {6 * a}×{t} + {2 * b} = {6 * a * t + 2 * b}"

explicacion: |
  Con posición cúbica, la aceleración cambia con el tiempo — hay que
  evaluarla en el instante pedido, no asumirla constante.
```

### 5 — Hallar cuándo la velocidad se anula

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "avanzado"
  tags: ["punto_critico"]

variables:
  a: random(1, 8)
  t_sol: random(1, 10)
  b: -2 * a * t_sol

respuesta: t_sol
tipo: input
tolerancia_abs: 0

enunciado: "x(t) = {a}t² + {b}t. ¿En qué instante t la velocidad instantánea es 0?"

pasos:
  - "v(t) = {2 * a}t + {b} = 0 → t = {t_sol}"

explicacion: |
  Es el mismo procedimiento que hallar un punto crítico en
  `../../matematica/optimizacion/`.
```

### 6 — Verificar que la aceleración no es 0 cuando v=0

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "avanzado"
  tags: ["verdadero_falso"]

variables:
  a: random(1, 3)
  b: random(1, 6)
  t_sol: random(1, 5)
  c: -(3 * a * t_sol ^ 2) - (2 * b * t_sol)

respuesta: ((6 * a * t_sol + 2 * b) != 0)
tipo: vf

enunciado: "x(t) = {a}t³ + {b}t² + {c}t tiene v({t_sol})=0. ¿Es también 0 la aceleración en ese mismo instante?"

explicacion: |
  En general, v=0 no implica a=0 — son valores independientes, salvo en
  casos particulares como el reposo total.
```

### 7 — Velocidad media en un intervalo

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "intermedio"
  tags: ["velocidad_media"]

variables:
  a: random(1, 5)
  t1: random(1, 4)
  t2: random(5, 10)

respuesta: a * (t1 + t2)
tipo: input
tolerancia_abs: 0

enunciado: "x(t) = {a}t² (posición). ¿Cuál es la velocidad MEDIA entre t={t1} y t={t2}?"

pasos:
  - "v_media = (x({t2})−x({t1}))/({t2}−{t1}) = ({a}×{t2}²−{a}×{t1}²)/({t2}−{t1}) = {a}×({t1}+{t2})"

explicacion: |
  La velocidad media usa el cociente incremental completo, no la
  derivada puntual.
```

### 8 — Comparar velocidad media con velocidad instantánea en un extremo

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "avanzado"
  tags: ["verdadero_falso"]

variables:
  a: random(1, 5)
  t1: random(1, 4)
  t2: random(5, 10)

respuesta: ((a * (t1 + t2)) != (2 * a * t1))
tipo: vf

enunciado: "x(t) = {a}t². ¿Es la velocidad media entre t={t1} y t={t2} igual a la velocidad instantánea en t={t1}?"

explicacion: |
  En general son distintas — sólo coinciden en el caso especial de
  velocidad constante (MRU).
```

### 9 — Concepto: definición de velocidad instantánea

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La velocidad instantánea es la derivada de la posición respecto del tiempo."

explicacion: |
  v(t) = x'(t) — la definición central del tema.
```

### 10 — Concepto: definición de aceleración instantánea

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La aceleración instantánea es la derivada de la velocidad respecto del tiempo (o la derivada segunda de la posición)."

explicacion: |
  a(t) = v'(t) = x''(t).
```

### 11 — Concepto: MRU tiene aceleración siempre 0

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "En un MRU (x(t) lineal en t), la aceleración instantánea es 0 en todo momento."

explicacion: |
  La derivada de una función lineal es constante, y la derivada de esa
  constante es 0.
```

### 12 — Concepto: MRUV tiene aceleración constante distinta de 0

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "En un MRUV (x(t) cuadrática en t), la aceleración instantánea es constante (pero distinta de 0)."

explicacion: |
  La derivada segunda de una función cuadrática es siempre la misma
  constante — mismo resultado ya visto en
  `../../matematica/optimizacion/`.
```

### 13 — Concepto: aceleración variable con posición cúbica

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Si x(t) es un polinomio de grado 3 (o mayor), la aceleración instantánea ya no es constante — cambia con el tiempo."

explicacion: |
  La derivada segunda de un cúbico es lineal en t, no una constante.
```

### 14 — Error común: confundir velocidad media con instantánea

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "intermedio"
  tags: ["error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Calcular (x(t₂)−x(t₁))/(t₂−t₁) da directamente la velocidad instantánea en cualquiera de los dos instantes."

explicacion: |
  Eso da la velocidad MEDIA en el intervalo — la instantánea es un
  límite (la derivada), no ese cociente directo.
```

### 15 — Error común: v=0 implica a=0

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "avanzado"
  tags: ["error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Si la velocidad instantánea es 0 en un instante, la aceleración también tiene que ser 0 en ese mismo instante."

explicacion: |
  No, son cantidades independientes — en el punto más alto de un tiro
  vertical, v=0 pero a=−g, distinto de 0.
```

### 16 — Aplicar: rapidez de cambio en un cruce con tiro vertical

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "avanzado"
  tags: ["aplicacion"]

variables:
  v0: random(10, 50)
  t: random(1, 5)

respuesta: v0 - 10 * t
tipo: input
tolerancia_abs: 0

enunciado: "y(t) = {v0}t − 5t² (tiro vertical, g=10). ¿Cuál es la velocidad instantánea en t={t}?"

pasos:
  - "v(t) = y'(t) = {v0} − 10t"

explicacion: |
  Es la misma fórmula v(t)=v₀−gt de `../tiro-vertical/`, obtenida ahora
  derivando la posición en vez de plantearla directo.
```

### 17 — Verificación con error: velocidad instantánea

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  a: random(1, 5)
  b: random(1, 8)
  t: random(1, 6)
  real: 2 * a * t + b
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "x(t) = {a}t² + {b}t. ¿Es correcto que la velocidad en t={t} sea {propuesto}?"

explicacion: |
  El valor correcto es v({t}) = {real}.
```

### 18 — Concepto: rapidez vs. velocidad

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La rapidez es el valor absoluto de la velocidad — dos objetos con velocidades +10 m/s y −10 m/s tienen la misma rapidez, pero direcciones opuestas."

explicacion: |
  Velocidad incluye dirección (signo); rapidez es sólo la magnitud.
```

### 19 — Aplicar: posición cúbica, hallar la velocidad en t=0

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "intermedio"
  tags: ["velocidad"]

variables:
  a: random(1, 5)
  b: random(1, 8)
  c: random(-10, 10)

respuesta: c
tipo: input
tolerancia_abs: 0

enunciado: "x(t) = {a}t³ + {b}t² + {c}t. ¿Cuál es la velocidad instantánea en t=0?"

explicacion: |
  v(0) = 3{a}(0)² + 2{b}(0) + {c} = {c} — el coeficiente del término
  lineal es directamente la velocidad inicial.
```

### 20 — Concepto: la aceleración es la derivada segunda

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Para llegar de la posición a la aceleración, hay que derivar DOS veces (posición→velocidad→aceleración), no una sola."

explicacion: |
  Derivar una sola vez desde la posición da la velocidad, no la
  aceleración.
```

### 21 — Aplicar: aceleración en t=0 de un movimiento cúbico

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "intermedio"
  tags: ["aceleracion"]

variables:
  a: random(1, 5)
  b: random(1, 8)

respuesta: 2 * b
tipo: input
tolerancia_abs: 0

enunciado: "x(t) = {a}t³ + {b}t². ¿Cuál es la aceleración instantánea en t=0?"

explicacion: |
  a(t) = {6 * a}t + {2 * b} → a(0) = {2 * b}.
```

### 22 — Concepto: en qué momento se pasa de frenar a acelerar

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El instante donde a(t) cambia de signo marca un cambio en cómo actúa la aceleración (de frenar a acelerar en el sentido del movimiento, o viceversa), no necesariamente un cambio en la dirección del movimiento en sí (eso lo marca el signo de v)."

explicacion: |
  v y a son señales independientes — cada una responde una pregunta
  distinta sobre el movimiento.
```

### 23 — Verificación con error: aceleración instantánea

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "avanzado"
  tags: ["verificacion", "verdadero_falso"]

variables:
  a: random(1, 3)
  b: random(1, 6)
  t: random(1, 5)
  real: 6 * a * t + 2 * b
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "x(t) = {a}t³ + {b}t². ¿Es correcto que la aceleración en t={t} sea {propuesto}?"

explicacion: |
  El valor correcto es a({t}) = {real}.
```

### 24 — Concepto: velocidad instantánea puede ser negativa

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La velocidad instantánea puede dar negativa — significa que, en ese instante, el objeto se mueve en el sentido negativo elegido como referencia."

explicacion: |
  El signo de v(t) indica dirección, no un error de cálculo.
```

### 25 — Aplicar: comparar velocidad instantánea en dos instantes

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "avanzado"
  tags: ["verdadero_falso"]

variables:
  a: random(1, 5)
  b: random(1, 8)
  t1: random(1, 4)
  t2: random(5, 10)

respuesta: ((2 * a * t2 + b) > (2 * a * t1 + b))
tipo: vf

enunciado: "x(t) = {a}t² + {b}t (con a positivo). ¿Es mayor la velocidad instantánea en t={t2} que en t={t1}?"

explicacion: |
  Con aceleración constante positiva, la velocidad crece con el tiempo
  — el instante posterior siempre tiene mayor velocidad.
```

### 26 — Concepto: cierre — la cadena completa

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Posición, velocidad y aceleración forman una cadena de derivadas: cada una es la derivada de la anterior respecto del tiempo."

explicacion: |
  x(t) → (derivar) → v(t) → (derivar) → a(t).
```
