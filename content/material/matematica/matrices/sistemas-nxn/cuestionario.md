# Matemática — Matrices: sistemas n×n (cuestionario, 27 preguntas VBLang)

> Tema: `AL1` (mitad — Tronco 2, Algebraico). Ver `teoria.md` en esta
> misma carpeta.

Un bloque de operaciones de fila sueltas (el paso mecánico de Gauss), un
bloque de sistemas de 3×3 armados desde la solución (mismo truco de
construcción que en `../../sistemas-dos-ecuaciones/`), preguntas
conceptuales, tamaño de la matriz aumentada, y verificación de una terna
solución con la suma de cuadrados de los tres restos (reemplaza al "y"
lógico que el DSL no tiene).

---

### 1 — Operación de fila: restar un múltiplo, primer valor

```
metadata:
  materia: "matematicas"
  tema: "matrices_sistemas_nxn"
  nivel: "intermedio"
  tags: ["operacion_fila"]

variables:
  r1: random(1, 10)
  r2: random(1, 10)
  r3: random(1, 10)
  s1: random(1, 10)
  s2: random(1, 10)
  s3: random(1, 10)
  k: random(2, 5)

respuesta: s1 - k * r1
tipo: input
tolerancia_abs: 0

enunciado: "Fila 1 = ({r1}, {r2}, {r3}), Fila 2 = ({s1}, {s2}, {s3}). Si se hace Fila 2 → Fila 2 − {k}×Fila 1, ¿qué queda en la primera posición de la nueva Fila 2?"

explicacion: |
  s1 − {k}×r1 = {s1} − {k}×{r1} = {s1 - k * r1}.
```

### 2 — Operación de fila: restar un múltiplo, tercer valor

```
metadata:
  materia: "matematicas"
  tema: "matrices_sistemas_nxn"
  nivel: "intermedio"
  tags: ["operacion_fila"]

variables:
  r1: random(1, 10)
  r2: random(1, 10)
  r3: random(1, 10)
  s1: random(1, 10)
  s2: random(1, 10)
  s3: random(1, 10)
  k: random(2, 5)

respuesta: s3 - k * r3
tipo: input
tolerancia_abs: 0

enunciado: "Fila 1 = ({r1}, {r2}, {r3}), Fila 2 = ({s1}, {s2}, {s3}). Si se hace Fila 2 → Fila 2 − {k}×Fila 1, ¿qué queda en la tercera posición de la nueva Fila 2?"

explicacion: |
  s3 − {k}×r3.
```

### 3 — Operación de fila: sumar un múltiplo

```
metadata:
  materia: "matematicas"
  tema: "matrices_sistemas_nxn"
  nivel: "intermedio"
  tags: ["operacion_fila"]

variables:
  r1: random(1, 10)
  r2: random(1, 10)
  r3: random(1, 10)
  s1: random(1, 10)
  s2: random(1, 10)
  s3: random(1, 10)
  k: random(2, 5)

respuesta: s2 + k * r2
tipo: input
tolerancia_abs: 0

enunciado: "Fila 1 = ({r1}, {r2}, {r3}), Fila 2 = ({s1}, {s2}, {s3}). Si se hace Fila 2 → Fila 2 + {k}×Fila 1, ¿qué queda en la segunda posición de la nueva Fila 2?"

explicacion: |
  s2 + {k}×r2.
```

### 4 — Operación de fila: multiplicar por un escalar

```
metadata:
  materia: "matematicas"
  tema: "matrices_sistemas_nxn"
  nivel: "basico"
  tags: ["operacion_fila"]

variables:
  r1: random(1, 10)
  r2: random(1, 10)
  r3: random(1, 10)
  k: random(2, 6)

respuesta: k * r2
tipo: input
tolerancia_abs: 0

enunciado: "Fila 1 = ({r1}, {r2}, {r3}). Si se hace Fila 1 → {k}×Fila 1, ¿qué queda en la segunda posición?"

explicacion: |
  Multiplicar una fila por un escalar multiplica cada valor de la fila.
```

### 5 — Operación de fila: intercambiar filas

```
metadata:
  materia: "matematicas"
  tema: "matrices_sistemas_nxn"
  nivel: "basico"
  tags: ["operacion_fila"]

variables:
  r1: random(1, 10)
  r2: random(1, 10)
  r3: random(1, 10)
  s1: random(1, 10)
  s2: random(1, 10)
  s3: random(1, 10)

respuesta: s2
tipo: input
tolerancia_abs: 0

enunciado: "Fila 1 = ({r1}, {r2}, {r3}), Fila 2 = ({s1}, {s2}, {s3}). Si se intercambian Fila 1 y Fila 2, ¿qué valor queda ahora en la segunda posición de la nueva Fila 1?"

explicacion: |
  Después del intercambio, la nueva Fila 1 es la vieja Fila 2 completa.
```

### 6 — Operación de fila: la columna de términos independientes también cambia

```
metadata:
  materia: "matematicas"
  tema: "matrices_sistemas_nxn"
  nivel: "avanzado"
  tags: ["operacion_fila", "matriz_aumentada"]

variables:
  r1: random(1, 8)
  r2: random(1, 8)
  r3: random(1, 8)
  d1: random(1, 20)
  s1: random(1, 8)
  s2: random(1, 8)
  s3: random(1, 8)
  d2: random(1, 20)
  k: random(2, 5)

respuesta: d2 - k * d1
tipo: input
tolerancia_abs: 0

enunciado: "Fila 1 = ({r1}, {r2}, {r3} | {d1}), Fila 2 = ({s1}, {s2}, {s3} | {d2}). Si se hace Fila 2 → Fila 2 − {k}×Fila 1, ¿qué queda en la columna de términos independientes de la nueva Fila 2?"

explicacion: |
  La operación se aplica a la fila COMPLETA, incluida la columna de
  términos independientes — no sólo a los coeficientes.
```

### 7 — Sistema 3×3: hallar x

```
metadata:
  materia: "matematicas"
  tema: "matrices_sistemas_nxn"
  nivel: "avanzado"
  tags: ["sistema_3x3"]

variables:
  x_sol: random(1, 15)
  y_sol: random(1, 15)
  z_sol: random(1, 15)
  p1: random(1, 5)
  q1: random(1, 5)
  r1: random(1, 5)
  d1: p1 * x_sol + q1 * y_sol + r1 * z_sol
  p2: random(1, 5)
  q2: random(1, 5)
  r2: random(1, 5)
  d2: p2 * x_sol + q2 * y_sol + r2 * z_sol
  p3: random(1, 5)
  q3: random(1, 5)
  r3: random(1, 5)
  d3: p3 * x_sol + q3 * y_sol + r3 * z_sol

respuesta: x_sol
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé el sistema: {p1}x + {q1}y + {r1}z = {d1}; {p2}x + {q2}y + {r2}z = {d2}; {p3}x + {q3}y + {r3}z = {d3}. ¿Cuánto vale x?"

pasos:
  - "Armar la matriz aumentada 3×4 y triangular con operaciones de fila, o eliminar x entre pares de ecuaciones como en un sistema 2×2"

explicacion: |
  Mismo método de eliminación de siempre, con un paso más: eliminar una
  incógnita entre dos pares de ecuaciones antes de llegar a una sola
  incógnita.
```

### 8 — Sistema 3×3: hallar y (mismo sistema)

```
metadata:
  materia: "matematicas"
  tema: "matrices_sistemas_nxn"
  nivel: "avanzado"
  tags: ["sistema_3x3"]

variables:
  x_sol: random(1, 15)
  y_sol: random(1, 15)
  z_sol: random(1, 15)
  p1: random(1, 5)
  q1: random(1, 5)
  r1: random(1, 5)
  d1: p1 * x_sol + q1 * y_sol + r1 * z_sol
  p2: random(1, 5)
  q2: random(1, 5)
  r2: random(1, 5)
  d2: p2 * x_sol + q2 * y_sol + r2 * z_sol
  p3: random(1, 5)
  q3: random(1, 5)
  r3: random(1, 5)
  d3: p3 * x_sol + q3 * y_sol + r3 * z_sol

respuesta: y_sol
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé el sistema: {p1}x + {q1}y + {r1}z = {d1}; {p2}x + {q2}y + {r2}z = {d2}; {p3}x + {q3}y + {r3}z = {d3}. ¿Cuánto vale y?"

explicacion: |
  Con x ya encontrado, queda un sistema 2×2 en y y z.
```

### 9 — Sistema 3×3: hallar z (mismo sistema)

```
metadata:
  materia: "matematicas"
  tema: "matrices_sistemas_nxn"
  nivel: "avanzado"
  tags: ["sistema_3x3"]

variables:
  x_sol: random(1, 15)
  y_sol: random(1, 15)
  z_sol: random(1, 15)
  p1: random(1, 5)
  q1: random(1, 5)
  r1: random(1, 5)
  d1: p1 * x_sol + q1 * y_sol + r1 * z_sol
  p2: random(1, 5)
  q2: random(1, 5)
  r2: random(1, 5)
  d2: p2 * x_sol + q2 * y_sol + r2 * z_sol
  p3: random(1, 5)
  q3: random(1, 5)
  r3: random(1, 5)
  d3: p3 * x_sol + q3 * y_sol + r3 * z_sol

respuesta: z_sol
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé el sistema: {p1}x + {q1}y + {r1}z = {d1}; {p2}x + {q2}y + {r2}z = {d2}; {p3}x + {q3}y + {r3}z = {d3}. ¿Cuánto vale z?"

explicacion: |
  Con x e y ya encontrados, z se despeja de cualquiera de las tres
  ecuaciones originales.
```

### 10 — Sistema 3×3 (otro): hallar x

```
metadata:
  materia: "matematicas"
  tema: "matrices_sistemas_nxn"
  nivel: "avanzado"
  tags: ["sistema_3x3"]

variables:
  x_sol: random(1, 12)
  y_sol: random(1, 12)
  z_sol: random(1, 12)
  p1: random(1, 4)
  q1: random(1, 4)
  r1: random(1, 4)
  d1: p1 * x_sol + q1 * y_sol + r1 * z_sol
  p2: random(1, 4)
  q2: random(1, 4)
  r2: random(1, 4)
  d2: p2 * x_sol + q2 * y_sol + r2 * z_sol
  p3: random(1, 4)
  q3: random(1, 4)
  r3: random(1, 4)
  d3: p3 * x_sol + q3 * y_sol + r3 * z_sol

respuesta: x_sol
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé el sistema: {p1}x + {q1}y + {r1}z = {d1}; {p2}x + {q2}y + {r2}z = {d2}; {p3}x + {q3}y + {r3}z = {d3}. ¿Cuánto vale x?"

explicacion: |
  Se puede resolver triangulando la matriz aumentada con operaciones de
  fila, o eliminando de a una incógnita como en un sistema 2×2.
```

### 11 — Sistema 3×3 (otro): hallar y

```
metadata:
  materia: "matematicas"
  tema: "matrices_sistemas_nxn"
  nivel: "avanzado"
  tags: ["sistema_3x3"]

variables:
  x_sol: random(1, 12)
  y_sol: random(1, 12)
  z_sol: random(1, 12)
  p1: random(1, 4)
  q1: random(1, 4)
  r1: random(1, 4)
  d1: p1 * x_sol + q1 * y_sol + r1 * z_sol
  p2: random(1, 4)
  q2: random(1, 4)
  r2: random(1, 4)
  d2: p2 * x_sol + q2 * y_sol + r2 * z_sol
  p3: random(1, 4)
  q3: random(1, 4)
  r3: random(1, 4)
  d3: p3 * x_sol + q3 * y_sol + r3 * z_sol

respuesta: y_sol
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé el sistema: {p1}x + {q1}y + {r1}z = {d1}; {p2}x + {q2}y + {r2}z = {d2}; {p3}x + {q3}y + {r3}z = {d3}. ¿Cuánto vale y?"

explicacion: |
  y = resultado de eliminar x y z entre pares de ecuaciones.
```

### 12 — Sistema 3×3 (otro): hallar z

```
metadata:
  materia: "matematicas"
  tema: "matrices_sistemas_nxn"
  nivel: "avanzado"
  tags: ["sistema_3x3"]

variables:
  x_sol: random(1, 12)
  y_sol: random(1, 12)
  z_sol: random(1, 12)
  p1: random(1, 4)
  q1: random(1, 4)
  r1: random(1, 4)
  d1: p1 * x_sol + q1 * y_sol + r1 * z_sol
  p2: random(1, 4)
  q2: random(1, 4)
  r2: random(1, 4)
  d2: p2 * x_sol + q2 * y_sol + r2 * z_sol
  p3: random(1, 4)
  q3: random(1, 4)
  r3: random(1, 4)
  d3: p3 * x_sol + q3 * y_sol + r3 * z_sol

respuesta: z_sol
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé el sistema: {p1}x + {q1}y + {r1}z = {d1}; {p2}x + {q2}y + {r2}z = {d2}; {p3}x + {q3}y + {r3}z = {d3}. ¿Cuánto vale z?"

explicacion: |
  Último paso: reemplazar x e y ya encontrados en cualquier ecuación
  original.
```

### 13 — Sistema 3×3 en contexto: tres productos

```
metadata:
  materia: "matematicas"
  tema: "matrices_sistemas_nxn"
  nivel: "avanzado"
  tags: ["sistema_3x3", "problema"]

variables:
  x_sol: random(2, 15)
  y_sol: random(2, 15)
  z_sol: random(2, 15)
  p1: random(1, 3)
  q1: random(1, 3)
  r1: random(1, 3)
  d1: p1 * x_sol + q1 * y_sol + r1 * z_sol
  p2: random(1, 3)
  q2: random(1, 3)
  r2: random(1, 3)
  d2: p2 * x_sol + q2 * y_sol + r2 * z_sol
  p3: random(1, 3)
  q3: random(1, 3)
  r3: random(1, 3)
  d3: p3 * x_sol + q3 * y_sol + r3 * z_sol

respuesta: x_sol
tipo: input
tolerancia_abs: 0

enunciado: "Tres combos de compras dan: {p1} unidades de A + {q1} de B + {r1} de C = {d1}; {p2} de A + {q2} de B + {r2} de C = {d2}; {p3} de A + {q3} de B + {r3} de C = {d3} (en costo total). ¿Cuánto cuesta una unidad de A?"

explicacion: |
  Es el mismo sistema 3×3 de siempre, con nombres de producto en vez de
  x, y, z.
```

### 14 — Concepto: intercambiar filas

```
metadata:
  materia: "matematicas"
  tema: "matrices_sistemas_nxn"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Intercambiar dos filas de una matriz aumentada no cambia el conjunto solución del sistema."

explicacion: |
  Cambia el orden en que están escritas las ecuaciones, no las
  ecuaciones en sí.
```

### 15 — Concepto: la columna de términos independientes

```
metadata:
  materia: "matematicas"
  tema: "matrices_sistemas_nxn"
  nivel: "intermedio"
  tags: ["concepto", "error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Al restar un múltiplo de una fila a otra, sólo hace falta aplicarlo a los coeficientes, no a la columna de términos independientes."

explicacion: |
  Hay que aplicarlo a la fila completa, columna de términos
  independientes incluida — es el error más común del método.
```

### 16 — Concepto: multiplicar por 0

```
metadata:
  materia: "matematicas"
  tema: "matrices_sistemas_nxn"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Multiplicar una fila entera por 0 es una operación elemental válida."

explicacion: |
  Multiplicar por 0 borraría información de esa ecuación — la operación
  válida es multiplicar por cualquier número DISTINTO de 0.
```

### 17 — Concepto: qué busca el método de Gauss

```
metadata:
  materia: "matematicas"
  tema: "matrices_sistemas_nxn"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El método de Gauss busca, usando operaciones de fila, dejar ceros debajo de la diagonal principal de la matriz."

explicacion: |
  Esa forma triangular es la que permite despejar una incógnita por vez
  con sustitución hacia atrás.
```

### 18 — Concepto: sustitución hacia atrás

```
metadata:
  materia: "matematicas"
  tema: "matrices_sistemas_nxn"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La sustitución hacia atrás empieza resolviendo la incógnita de la última fila triangulada."

explicacion: |
  Esa fila queda con una sola incógnita — de ahí se sube reemplazando en
  las filas anteriores.
```

### 19 — Concepto: Gauss generaliza a más incógnitas

```
metadata:
  materia: "matematicas"
  tema: "matrices_sistemas_nxn"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Con un sistema de 4 ecuaciones y 4 incógnitas, el método de Gauss ya no sirve y hace falta usar otro método distinto."

explicacion: |
  El método es exactamente el mismo, sólo con más filas y columnas —
  matriz aumentada de 4×5 en vez de 3×4.
```

### 20 — Tamaño de la matriz aumentada: filas

```
metadata:
  materia: "matematicas"
  tema: "matrices_sistemas_nxn"
  nivel: "basico"
  tags: ["matriz_aumentada"]

variables:
  n: random(2, 8)

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "Un sistema de {n} ecuaciones con {n} incógnitas se representa con una matriz aumentada. ¿Cuántas filas tiene?"

explicacion: |
  Una fila por ecuación.
```

### 21 — Tamaño de la matriz aumentada: columnas

```
metadata:
  materia: "matematicas"
  tema: "matrices_sistemas_nxn"
  nivel: "basico"
  tags: ["matriz_aumentada"]

variables:
  n: random(2, 8)

respuesta: n + 1
tipo: input
tolerancia_abs: 0

enunciado: "Un sistema de {n} ecuaciones con {n} incógnitas se representa con una matriz aumentada. ¿Cuántas columnas tiene en total (coeficientes más términos independientes)?"

explicacion: |
  {n} columnas de coeficientes (una por incógnita) más 1 columna de
  términos independientes = {n + 1}.
```

### 22 — Qué representa la columna extra

```
metadata:
  materia: "matematicas"
  tema: "matrices_sistemas_nxn"
  nivel: "basico"
  tags: ["matriz_aumentada", "opcion_multiple"]

respuesta: "Los términos independientes"
tipo: mc
opciones_explicitas:
  - "Los términos independientes"
  - "Los coeficientes de una incógnita más"
  - "El resultado de sumar todas las filas"

enunciado: "En la matriz aumentada de un sistema, ¿qué representa la última columna?"

explicacion: |
  Es el número que está del otro lado del "=" en cada ecuación.
```

### 23 — Verificar terna solución: caso correcto

```
metadata:
  materia: "matematicas"
  tema: "matrices_sistemas_nxn"
  nivel: "avanzado"
  tags: ["verificacion", "verdadero_falso"]

variables:
  x_sol: random(1, 12)
  y_sol: random(1, 12)
  z_sol: random(1, 12)
  p1: random(1, 4)
  q1: random(1, 4)
  r1: random(1, 4)
  d1: p1 * x_sol + q1 * y_sol + r1 * z_sol
  p2: random(1, 4)
  q2: random(1, 4)
  r2: random(1, 4)
  d2: p2 * x_sol + q2 * y_sol + r2 * z_sol
  p3: random(1, 4)
  q3: random(1, 4)
  r3: random(1, 4)
  d3: p3 * x_sol + q3 * y_sol + r3 * z_sol

respuesta: ((p1 * x_sol + q1 * y_sol + r1 * z_sol - d1) ^ 2 + (p2 * x_sol + q2 * y_sol + r2 * z_sol - d2) ^ 2 + (p3 * x_sol + q3 * y_sol + r3 * z_sol - d3) ^ 2) == 0
tipo: vf

enunciado: "¿(x, y, z) = ({x_sol}, {y_sol}, {z_sol}) es solución del sistema {p1}x+{q1}y+{r1}z={d1}; {p2}x+{q2}y+{r2}z={d2}; {p3}x+{q3}y+{r3}z={d3}?"

explicacion: |
  Es exactamente la terna con la que se armó el sistema, así que cumple
  las tres ecuaciones a la vez.
```

### 24 — Verificar terna solución: una coordenada corrida

```
metadata:
  materia: "matematicas"
  tema: "matrices_sistemas_nxn"
  nivel: "avanzado"
  tags: ["verificacion", "verdadero_falso"]

variables:
  x_sol: random(1, 12)
  y_sol: random(1, 12)
  z_sol: random(1, 12)
  p1: random(1, 4)
  q1: random(1, 4)
  r1: random(1, 4)
  d1: p1 * x_sol + q1 * y_sol + r1 * z_sol
  p2: random(1, 4)
  q2: random(1, 4)
  r2: random(1, 4)
  d2: p2 * x_sol + q2 * y_sol + r2 * z_sol
  p3: random(1, 4)
  q3: random(1, 4)
  r3: random(1, 4)
  d3: p3 * x_sol + q3 * y_sol + r3 * z_sol
  val_z: z_sol + 1

respuesta: ((p1 * x_sol + q1 * y_sol + r1 * val_z - d1) ^ 2 + (p2 * x_sol + q2 * y_sol + r2 * val_z - d2) ^ 2 + (p3 * x_sol + q3 * y_sol + r3 * val_z - d3) ^ 2) == 0
tipo: vf

enunciado: "¿(x, y, z) = ({x_sol}, {y_sol}, {val_z}) es solución del sistema {p1}x+{q1}y+{r1}z={d1}; {p2}x+{q2}y+{r2}z={d2}; {p3}x+{q3}y+{r3}z={d3}?"

explicacion: |
  x e y están bien, pero z está corrida en 1 — no cumple las tres
  ecuaciones a la vez, así que no es solución del sistema.
```

### 25 — Verificar terna solución: caso con error, mezclado

```
metadata:
  materia: "matematicas"
  tema: "matrices_sistemas_nxn"
  nivel: "avanzado"
  tags: ["verificacion", "verdadero_falso"]

variables:
  x_sol: random(1, 12)
  y_sol: random(1, 12)
  z_sol: random(1, 12)
  p1: random(1, 4)
  q1: random(1, 4)
  r1: random(1, 4)
  d1: p1 * x_sol + q1 * y_sol + r1 * z_sol
  p2: random(1, 4)
  q2: random(1, 4)
  r2: random(1, 4)
  d2: p2 * x_sol + q2 * y_sol + r2 * z_sol
  p3: random(1, 4)
  q3: random(1, 4)
  r3: random(1, 4)
  d3: p3 * x_sol + q3 * y_sol + r3 * z_sol
  error: uno_de([0, 0, 2, -2])
  val_x: x_sol + error

respuesta: ((p1 * val_x + q1 * y_sol + r1 * z_sol - d1) ^ 2 + (p2 * val_x + q2 * y_sol + r2 * z_sol - d2) ^ 2 + (p3 * val_x + q3 * y_sol + r3 * z_sol - d3) ^ 2) == 0
tipo: vf

enunciado: "¿(x, y, z) = ({val_x}, {y_sol}, {z_sol}) es solución del sistema {p1}x+{q1}y+{r1}z={d1}; {p2}x+{q2}y+{r2}z={d2}; {p3}x+{q3}y+{r3}z={d3}?"

explicacion: |
  Se reemplaza la terna completa en las tres ecuaciones — si falla en
  cualquiera de las tres, no es solución del sistema.
```

### 26 — Concepto: cuántas ecuaciones hacen falta para n incógnitas

```
metadata:
  materia: "matematicas"
  tema: "matrices_sistemas_nxn"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "En general, para encontrar un único valor de cada una de n incógnitas hacen falta al menos n ecuaciones independientes."

explicacion: |
  Con menos ecuaciones que incógnitas, sobran grados de libertad y el
  sistema queda con infinitas soluciones posibles (no una única terna).
```

### 27 — Operación de fila: preparar el pivote antes de eliminar

```
metadata:
  materia: "matematicas"
  tema: "matrices_sistemas_nxn"
  nivel: "avanzado"
  tags: ["operacion_fila"]

variables:
  r1: random(2, 6)
  r2: random(1, 10)
  r3: random(1, 10)
  mult: random(1, 4)
  s1: r1 * mult
  s2: random(1, 10)
  s3: random(1, 10)

respuesta: s2 - (s1 / r1) * r2
tipo: input
tolerancia_abs: 0

enunciado: "Fila 1 = ({r1}, {r2}, {r3}), Fila 2 = ({s1}, {s2}, {s3}). Para anular el primer valor de la Fila 2, se hace Fila 2 → Fila 2 − (s1/r1)×Fila 1. ¿Qué queda en la segunda posición de la nueva Fila 2?"

pasos:
  - "El múltiplo a restar es s1/r1 = {s1}/{r1} = {s1 / r1}"
  - "Segunda posición: {s2} − {s1 / r1}×{r2} = {s2 - (s1 / r1) * r2}"

explicacion: |
  El múltiplo exacto que hace falta restar es el cociente entre el valor
  a anular y el "pivote" (el valor de esa columna en la fila de arriba).
```
