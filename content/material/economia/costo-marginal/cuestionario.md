# Economía — Costo marginal (cuestionario, 26 preguntas VBLang)

> Tema: `E16` (puente Álgebra → Economía). Ver `teoria.md` en esta misma
> carpeta.

---

### 1 — Calcular el costo marginal

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "intermedio"
  tags: ["evaluar"]

variables:
  a: random(1, 6)
  b: random(5, 30)
  costo_fijo: random(100, 1000)
  q: random(1, 30)

respuesta: 2 * a * q + b
tipo: input
tolerancia_abs: 0

enunciado: "C(q) = {a}q² + {b}q + {costo_fijo}. ¿Cuál es el costo marginal en q={q}?"

pasos:
  - "Cmg(q) = C'(q) = {2 * a}q + {b}"
  - "Cmg({q}) = {2 * a}×{q} + {b} = {2 * a * q + b}"

explicacion: |
  El costo fijo ({costo_fijo}) desaparece al derivar — el costo marginal
  sólo refleja la parte variable.
```

### 2 — Calcular el costo marginal: otro caso

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "intermedio"
  tags: ["evaluar"]

variables:
  a: random(1, 5)
  b: random(5, 20)
  costo_fijo: random(200, 800)
  q: random(1, 20)

respuesta: 2 * a * q + b
tipo: input
tolerancia_abs: 0

enunciado: "C(q) = {a}q² + {b}q + {costo_fijo}. ¿Cuál es el costo marginal en q={q}?"

explicacion: |
  Cmg(q) = {2 * a}q + {b}, evaluado en q={q}.
```

### 3 — Concepto: costos fijos no afectan el costo marginal

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

variables:
  costo_fijo_1: random(100, 500)
  costo_fijo_2: random(501, 1000)
  a: random(1, 5)
  b: random(5, 20)
  q: random(1, 20)

respuesta: verdadero
tipo: vf

enunciado: "Dos empresas tienen la misma parte variable de costo ({a}q² + {b}q), pero costos fijos distintos ({costo_fijo_1} y {costo_fijo_2}). ¿Tienen el mismo costo marginal en q={q}?"

explicacion: |
  El costo fijo se anula al derivar — sólo importa la parte variable
  para el costo marginal.
```

### 4 — Costo marginal constante (costo lineal)

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "basico"
  tags: ["evaluar"]

variables:
  b: random(10, 50)
  costo_fijo: random(100, 500)

respuesta: b
tipo: input
tolerancia_abs: 0

enunciado: "C(q) = {b}q + {costo_fijo} (costo variable lineal). ¿Cuál es el costo marginal, para cualquier q?"

explicacion: |
  Cmg(q) = {b}, constante — no depende de q cuando el costo variable es
  lineal.
```

### 5 — Costo marginal creciente: identificar

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

variables:
  a: random(1, 8)
  b: random(5, 20)
  costo_fijo: random(100, 500)

respuesta: verdadero
tipo: vf

enunciado: "C(q) = {a}q² + {b}q + {costo_fijo} (con a>0). ¿Es creciente el costo marginal a medida que aumenta q?"

explicacion: |
  Cmg(q)={2 * a}q+{b} es una función lineal creciente en q, porque el
  coeficiente {2 * a} es positivo.
```

### 6 — Costo marginal en dos niveles de producción distintos

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "avanzado"
  tags: ["verdadero_falso"]

variables:
  a: random(1, 6)
  b: random(5, 20)
  q1: random(1, 10)
  q2: random(11, 30)

respuesta: ((2 * a * q2 + b) > (2 * a * q1 + b))
tipo: vf

enunciado: "C(q) = {a}q² + {b}q + costo fijo. ¿Es mayor el costo marginal en q={q2} que en q={q1}?"

explicacion: |
  Con a positivo, el costo marginal crece con q — producir más caro cada
  vez la unidad siguiente.
```

### 7 — Concepto: qué mide el costo marginal

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El costo marginal es, aproximadamente, cuánto cuesta producir una unidad adicional."

explicacion: |
  Es la definición central del tema.
```

### 8 — Concepto: costo marginal es la derivada del costo total

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Cmg(q) = C'(q), la derivada de la función de costo total."

explicacion: |
  Es la definición formal, ya usada en las cuentas anteriores.
```

### 9 — Concepto: costo marginal vs. costo promedio

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "El costo marginal (Cmg=C') y el costo promedio (Cme=C/q) son exactamente el mismo cálculo."

explicacion: |
  Son cálculos distintos: el marginal mira la próxima unidad; el
  promedio reparte el costo total entre todas las unidades.
```

### 10 — Aplicar: costo promedio

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "intermedio"
  tags: ["costo_promedio"]

variables:
  q: random(2, 10)
  m: random(5, 20)
  k: random(1, 20)
  costo_fijo: m * q
  costo_variable_total: k * q

respuesta: m + k
tipo: input
tolerancia_abs: 0

enunciado: "Producir {q} unidades cuesta un total de {costo_fijo + costo_variable_total} (fijo {costo_fijo} + variable {costo_variable_total}). ¿Cuál es el costo PROMEDIO por unidad?"

explicacion: |
  Cme = C(q)/q — reparte el costo total entre todas las unidades, algo
  distinto del costo marginal.
```

### 11 — Concepto: costo marginal no incluye costos fijos

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "intermedio"
  tags: ["concepto", "error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "El costo marginal incluye una parte proporcional de los costos fijos de la empresa."

explicacion: |
  No — el costo marginal sólo refleja el costo variable, porque la
  derivada de una constante (el costo fijo) es 0.
```

### 12 — Concepto: Cmg exacto vs. aproximado

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Cmg(q)=C'(q) es una aproximación de C(q+1)−C(q) (el costo real y exacto de producir una unidad más) — para funciones suaves, se parecen mucho, pero no son matemáticamente idénticos."

explicacion: |
  La derivada es un límite; C(q+1)−C(q) es una diferencia discreta —
  ideas relacionadas, no la misma cuenta exacta.
```

### 13 — Aplicar: comparar Cmg exacto y aproximación discreta

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "avanzado"
  tags: ["aplicacion"]

variables:
  a: random(1, 5)
  b: random(5, 15)
  q: random(5, 20)

respuesta: a * (2 * q + 1) + b
tipo: input
tolerancia_abs: 0

enunciado: "C(q) = {a}q² + {b}q (sin costo fijo). ¿Cuánto vale C({q}+1) − C({q}) (el costo exacto de la unidad {q}+1)?"

pasos:
  - "C(q+1)−C(q) = {a}(2q+1) + {b}, evaluado en q={q}"

explicacion: |
  Esta es la diferencia EXACTA, distinta (aunque parecida) al costo
  marginal Cmg({q}) = {2 * a * q + b}.
```

### 14 — Concepto: costo marginal decreciente (economías de escala)

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Si el costo marginal decrece con la cantidad producida, significa que cada unidad adicional cuesta menos que la anterior (economías de escala)."

explicacion: |
  Es lo opuesto a los rendimientos decrecientes — producir más se vuelve
  más eficiente por unidad.
```

### 15 — Verificación con error: costo marginal

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  a: random(1, 6)
  b: random(5, 30)
  costo_fijo: random(100, 1000)
  q: random(1, 30)
  real: 2 * a * q + b
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "C(q) = {a}q² + {b}q + {costo_fijo}. ¿Es correcto que el costo marginal en q={q} sea {propuesto}?"

explicacion: |
  El valor correcto es Cmg({q}) = {real}.
```

### 16 — Aplicar: decisión de producir una unidad más

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "avanzado"
  tags: ["aplicacion", "verdadero_falso"]

variables:
  a: random(1, 5)
  b: random(10, 30)
  q: random(1, 20)
  precio_venta: random(50, 200)

respuesta: ((2 * a * q + b) < precio_venta)
tipo: vf

enunciado: "C(q) = {a}q² + {b}q + costo fijo. El precio de venta de cada unidad es {precio_venta}. En q={q}, ¿conviene producir una unidad más (el costo marginal es menor que el precio de venta)?"

explicacion: |
  Mientras el costo marginal sea menor que el precio de venta, producir
  una unidad más aumenta la ganancia.
```

### 17 — Concepto: cuándo NO conviene producir más

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Si el costo marginal supera al precio de venta, producir una unidad más reduce la ganancia total de la empresa, en vez de aumentarla."

explicacion: |
  Esa unidad cuesta más de lo que se puede vender — es un cálculo que
  conecta con `../../matematica/optimizacion/`: el punto óptimo de
  producción es donde Cmg se iguala al precio (o al ingreso marginal).
```

### 18 — Concepto: costo marginal para q=0

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "intermedio"
  tags: ["evaluar"]

variables:
  b: random(10, 50)
  costo_fijo: random(100, 500)

respuesta: b
tipo: input
tolerancia_abs: 0

enunciado: "C(q) = 3q² + {b}q + {costo_fijo}. ¿Cuál es el costo marginal en q=0?"

explicacion: |
  Cmg(0) = 6×0+{b} = {b}.
```

### 19 — Concepto: unidades del costo marginal

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El costo marginal se mide en unidades de moneda por unidad producida (por ejemplo, pesos por unidad), no en pesos totales."

explicacion: |
  Es una TASA de cambio del costo respecto a la cantidad, no un costo
  total.
```

### 20 — Aplicar: costo marginal con término cúbico

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "avanzado"
  tags: ["evaluar"]

variables:
  a: random(1, 3)
  b: random(1, 5)
  c: random(5, 20)
  q: random(1, 10)

respuesta: 3 * a * q ^ 2 + 2 * b * q + c
tipo: input
tolerancia_abs: 0

enunciado: "C(q) = {a}q³ + {b}q² + {c}q (costo con rendimientos que cambian). ¿Cuál es el costo marginal en q={q}?"

pasos:
  - "Cmg(q) = {3 * a}q² + {2 * b}q + {c}"

explicacion: |
  Con un término cúbico en el costo, el costo marginal mismo ya no es
  lineal — cambia de forma más compleja con q.
```

### 21 — Concepto: costo marginal siempre positivo (en general)

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "En la mayoría de los modelos económicos razonables, el costo marginal es positivo — producir más siempre agrega algo de costo (aunque sea poco)."

explicacion: |
  Sería inusual (aunque matemáticamente posible en un modelo mal
  planteado) que producir más redujera el costo total.
```

### 22 — Concepto: relación con el ingreso marginal (adelanto)

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Así como el costo marginal es la derivada del costo total, el 'ingreso marginal' (no cubierto en este módulo) sería la derivada del ingreso total — la misma idea aplicada al otro lado de la cuenta de una empresa."

explicacion: |
  Es el mismo patrón de "razón de cambio" aplicado a otra magnitud
  económica — la comparación de Cmg con el precio de venta ya adelantó
  esta idea.
```

### 23 — Aplicar: costo marginal en una fábrica con capacidad limitada

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "avanzado"
  tags: ["problema"]

variables:
  a: random(2, 6)
  b: random(10, 30)
  q: random(50, 100)

respuesta: 2 * a * q + b
tipo: input
tolerancia_abs: 0

enunciado: "Una fábrica cerca de su capacidad máxima tiene C(q) = {a}q² + {b}q + costo fijo (el término cuadrático refleja que cuesta cada vez más producir cerca del límite). ¿Cuál es el costo marginal al producir la unidad {q}?"

explicacion: |
  Es un ejemplo real de por qué el costo marginal creciente es común
  cerca de la capacidad instalada de una planta.
```

### 24 — Concepto: costo marginal como pendiente

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El costo marginal en un punto es, geométricamente, la pendiente de la recta tangente al gráfico de C(q) en ese punto."

explicacion: |
  Es la misma interpretación geométrica de la derivada ya vista en
  `../../matematica/derivada/`.
```

### 25 — Verificación con error: costo lineal

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "basico"
  tags: ["verificacion", "verdadero_falso"]

variables:
  b: random(10, 50)
  costo_fijo: random(100, 500)
  propuesto: uno_de([0, 1]) * costo_fijo + b

respuesta: (propuesto == b)
tipo: vf

enunciado: "C(q) = {b}q + {costo_fijo}. ¿Es correcto que el costo marginal sea {propuesto}?"

explicacion: |
  El costo marginal correcto es {b} — si el número propuesto incluye el
  costo fijo, está mal.
```

### 26 — Concepto: cierre — costo marginal como razón de cambio económica

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El costo marginal es un ejemplo de cómo la derivada, entendida como 'razón de cambio', se aplica directamente a decisiones económicas reales de producción."

explicacion: |
  Es el mismo concepto matemático de `../../matematica/derivada/`,
  ahora con significado económico.
```
