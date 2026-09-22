# Examen jefe — [PENDIENTE #629]

> Logro #629. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **119 preguntas totales** en 5/5 secciones.

---

## Sección: matrices/sistemas-nxn (27 preguntas)

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

## Sección: tecnicas-de-integracion (22 preguntas)

```
metadata:
  materia: "matematica"
  tema: "tecnicas_de_integracion"
  nivel: "basico"
  tags: ["concepto"]

variables:
  n: uno_de([1, 1])

respuesta: "acumulaciones (área, volumen, distancia recorrida)"
tipo: mc
opciones_explicitas: ["tasas de cambio instantáneas", "acumulaciones (área, volumen, distancia recorrida)", "puntos de discontinuidad"]

enunciado: "La integral, como proceso inverso a la derivación, permite calcular principalmente..."

explicacion: |
  Mientras la derivada mide cómo cambia algo en un instante, la integral
  acumula esos cambios: área bajo la curva, volumen, distancia, etc.
```

```
metadata:
  materia: "matematica"
  tema: "tecnicas_de_integracion"
  nivel: "basico"
  tags: ["tecnicas"]

variables:
  tecnica: uno_de(["sustitución", "integración por partes", "fracciones parciales"])

respuesta: verdadero
tipo: vf

enunciado: "\"{tecnica}\" es una de las técnicas de integración mencionadas en la teoría para resolver integrales difíciles."

explicacion: |
  Las tres son las técnicas centrales para "desatar" integrales que no
  se resuelven con la tabla básica de primitivas.
```

```
metadata:
  materia: "matematica"
  tema: "tecnicas_de_integracion"
  nivel: "intermedio"
  tags: ["sustitucion"]

variables:
  n: uno_de([1, 1])

respuesta: "la regla de la cadena"
tipo: mc
opciones_explicitas: ["la regla de la cadena", "la regla del producto", "el teorema fundamental del cálculo"]

enunciado: "La técnica de sustitución (cambio de variable) se basa en..."

explicacion: |
  Es el proceso inverso a aplicar la regla de la cadena al derivar una
  función compuesta.
```

```
metadata:
  materia: "matematica"
  tema: "tecnicas_de_integracion"
  nivel: "intermedio"
  tags: ["sustitucion"]

variables:
  n: random(2, 6)

respuesta: n - 1
tipo: input
tolerancia_abs: 0

enunciado: "Si hacés el cambio de variable u = x^{n}, ¿qué exponente tiene x en du/dx = {n}·x^(exponente)?"

explicacion: |
  Al derivar x^n respecto de x, el exponente baja en 1: du/dx = n·x^(n-1).
```

```
metadata:
  materia: "matematica"
  tema: "tecnicas_de_integracion"
  nivel: "avanzado"
  tags: ["sustitucion"]

variables:
  n: uno_de([1, 1])

respuesta: "la derivada de la función interna está presente (o ajustable) afuera"
tipo: mc
opciones_explicitas: ["la función es un polinomio simple", "la derivada de la función interna está presente (o ajustable) afuera", "la integral ya tiene límites definidos"]

enunciado: "La sustitución es especialmente útil cuando la integranda es una composición de funciones y..."

explicacion: |
  Si la derivada de la función interna (o algo proporcional a ella)
  aparece multiplicando afuera, el cambio de variable simplifica la
  integral directamente.
```

```
metadata:
  materia: "matematica"
  tema: "tecnicas_de_integracion"
  nivel: "basico"
  tags: ["por partes"]

variables:
  n: uno_de([1, 1])

respuesta: "uv - ∫v du"
tipo: mc
opciones_explicitas: ["uv - ∫v du", "u + v - ∫du dv", "∫u dv + ∫v du"]

enunciado: "La fórmula general de integración por partes ∫u dv es igual a:"

explicacion: |
  Es la contraparte de la regla del producto para derivadas:
  ∫u dv = uv - ∫v du.
```

```
metadata:
  materia: "matematica"
  tema: "tecnicas_de_integracion"
  nivel: "intermedio"
  tags: ["por partes"]

variables:
  n: uno_de([1, 1])

respuesta: "cuando la integral es el producto de dos funciones distintas"
tipo: mc
opciones_explicitas: ["cuando la integral es el producto de dos funciones distintas", "cuando la integral es una constante", "cuando el denominador es cero"]

enunciado: "La integración por partes se usa típicamente..."

explicacion: |
  Por ejemplo, un polinomio multiplicado por una exponencial o una
  trigonométrica: ninguna sustitución simple resuelve ese producto.
```

```
metadata:
  materia: "matematica"
  tema: "tecnicas_de_integracion"
  nivel: "avanzado"
  tags: ["por partes"]

variables:
  n: uno_de([1, 1])

respuesta: "la que se simplifica al derivarse (ej. un polinomio)"
tipo: mc
opciones_explicitas: ["la que se simplifica al derivarse (ej. un polinomio)", "la que es más difícil de integrar", "siempre la función trigonométrica"]

enunciado: "Como regla mnemotécnica, conviene elegir como \"u\" la función que..."

explicacion: |
  Un polinomio se simplifica (baja de grado) al derivarse, mientras que
  la parte "dv" conviene que sea fácil de integrar (exponencial,
  trigonométrica).
```

```
metadata:
  materia: "matematica"
  tema: "tecnicas_de_integracion"
  nivel: "avanzado"
  tags: ["por partes"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Si se elige mal qué parte es u y cuál es dv en integración por partes, la nueva integral ∫v du puede volverse más compleja que la original."

explicacion: |
  La elección correcta de u y dv es clave: una mala elección puede
  empeorar el problema en vez de simplificarlo.
```

```
metadata:
  materia: "matematica"
  tema: "tecnicas_de_integracion"
  nivel: "basico"
  tags: ["fracciones parciales"]

variables:
  n: uno_de([1, 1])

respuesta: "funciones racionales (cocientes de polinomios)"
tipo: mc
opciones_explicitas: ["funciones racionales (cocientes de polinomios)", "funciones trigonométricas puras", "funciones constantes"]

enunciado: "Las fracciones parciales se usan para integrar principalmente..."

explicacion: |
  Sirven específicamente para P(x)/Q(x), descomponiendo la fracción
  compleja en fracciones simples ya conocidas.
```

```
metadata:
  materia: "matematica"
  tema: "tecnicas_de_integracion"
  nivel: "intermedio"
  tags: ["fracciones parciales"]

variables:
  n: uno_de([1, 1])

respuesta: "factorizando el denominador y determinando coeficientes desconocidos"
tipo: mc
opciones_explicitas: ["factorizando el denominador y determinando coeficientes desconocidos", "derivando el numerador dos veces", "igualando el denominador a cero siempre"]

enunciado: "El método de fracciones parciales se aplica..."

explicacion: |
  Se factoriza Q(x) y se determinan los coeficientes de las fracciones
  simples resultantes.
```

```
metadata:
  materia: "matematica"
  tema: "tecnicas_de_integracion"
  nivel: "basico"
  tags: ["aplicaciones"]

variables:
  campo: uno_de(["física", "economía"])

respuesta: verdadero
tipo: vf

enunciado: "Las técnicas de integración tienen aplicaciones reales en {campo}, como calcular trabajo de un motor o ingreso total acumulado."

explicacion: |
  El trabajo de un motor con potencia variable (física) y el ingreso
  total a partir del ingreso marginal (economía) son ejemplos reales
  mencionados en la teoría.
```

```
metadata:
  materia: "matematica"
  tema: "tecnicas_de_integracion"
  nivel: "intermedio"
  tags: ["sustitucion"]

variables:
  n: random(2, 9)

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "Para resolver ∫{n}x·e^(x²) dx por sustitución con u = x², necesitás que el coeficiente que multiplica a x afuera sea (al menos proporcional a) {n}. ¿Cuál es ese coeficiente en este caso?"

explicacion: |
  du = 2x dx, así que cualquier múltiplo de x afuera (acá {n}x) permite
  reescribir la integral en términos de u ajustando una constante.
```

```
metadata:
  materia: "matematica"
  tema: "tecnicas_de_integracion"
  nivel: "basico"
  tags: ["concepto"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Todas las funciones se pueden integrar directamente aplicando sólo la tabla básica de primitivas."

explicacion: |
  Muchas expresiones son demasiado complejas para resolverse en un solo
  paso; por eso existen técnicas específicas de simplificación.
```

```
metadata:
  materia: "matematica"
  tema: "tecnicas_de_integracion"
  nivel: "intermedio"
  tags: ["fracciones simples"]

variables:
  n: uno_de([1, 1])

respuesta: "1/x"
tipo: mc
opciones_explicitas: ["1/x", "x²", "eˣ"]

enunciado: "El objetivo de las fracciones parciales es descomponer una fracción compleja en una suma de fracciones simples ya conocidas, como..."

explicacion: |
  Fracciones tipo 1/x o 1/(x+1) son las piezas simples en las que se
  descompone la función racional original.
```

```
metadata:
  materia: "matematica"
  tema: "tecnicas_de_integracion"
  nivel: "avanzado"
  tags: ["sustitucion"]

variables:
  n: uno_de([1, 1])

respuesta: "volver a escribir el resultado en términos de la variable original"
tipo: mc
opciones_explicitas: ["dejar el resultado en términos de u", "volver a escribir el resultado en términos de la variable original", "derivar el resultado una vez más"]

enunciado: "Un paso final crucial de la sustitución, muchas veces olvidado, es..."

explicacion: |
  Después de resolver la integral en términos de u, hay que deshacer
  el cambio de variable y expresar el resultado en función de x.
```

```
metadata:
  materia: "matematica"
  tema: "tecnicas_de_integracion"
  nivel: "basico"
  tags: ["por partes"]

variables:
  n: uno_de([1, 1])

respuesta: "la regla del producto"
tipo: completar

enunciado: "La integración por partes es la contraparte, para integrales, de ___ usada en derivadas."

respuestas_validas:
  - "la regla del producto"
  - "regla del producto"

explicacion: |
  Así como la regla del producto deriva un producto de funciones, la
  integración por partes "deshace" ese producto al integrar.
```

```
metadata:
  materia: "matematica"
  tema: "tecnicas_de_integracion"
  nivel: "intermedio"
  tags: ["cuando usar cada tecnica"]

variables:
  n: uno_de([1, 1])

respuesta: "no hay una función compuesta clara para sustituir"
tipo: mc
opciones_explicitas: ["hay una función compuesta clara para sustituir", "no hay una función compuesta clara para sustituir", "el integrando es una constante"]

enunciado: "La integración por partes es indispensable especialmente cuando..."

explicacion: |
  Si no hay una composición clara de funciones (condición que pide la
  sustitución), pero sí un producto de dos funciones distintas, conviene
  usar partes.
```

```
metadata:
  materia: "matematica"
  tema: "tecnicas_de_integracion"
  nivel: "basico"
  tags: ["metafora"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La teoría compara resolver integrales difíciles con \"desatar un nudo\", donde cada técnica es una forma distinta de aflojarlo."

explicacion: |
  Es la metáfora usada para explicar por qué existen varias técnicas:
  cada una sirve para un tipo distinto de integral difícil.
```

```
metadata:
  materia: "matematica"
  tema: "tecnicas_de_integracion"
  nivel: "intermedio"
  tags: ["aplicaciones"]

variables:
  n: uno_de([1, 1])

respuesta: "ingreso total acumulado a partir del ingreso marginal"
tipo: mc
opciones_explicitas: ["ingreso total acumulado a partir del ingreso marginal", "la tasa de interés fija de un préstamo", "el número de empleados de una empresa"]

enunciado: "En el ejemplo de economía de la teoría, las fracciones parciales sirven para calcular..."

explicacion: |
  Si el ingreso marginal está dado por una función racional, integrarla
  con fracciones parciales da el ingreso total acumulado en un período.
```

```
metadata:
  materia: "matematica"
  tema: "tecnicas_de_integracion"
  nivel: "basico"
  tags: ["importancia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Dominar las técnicas de integración es la base para resolver problemas de física, economía y ciencias naturales que involucran tasas de cambio y acumulaciones."

explicacion: |
  Estas técnicas no son un ejercicio aislado: son la herramienta que
  conecta cálculo con problemas reales de otras disciplinas.
```

```
metadata:
  materia: "matematica"
  tema: "tecnicas_de_integracion"
  nivel: "avanzado"
  tags: ["fracciones parciales"]

variables:
  n: uno_de([1, 1])

respuesta: "1/(x+1)"
tipo: mc
opciones_explicitas: ["1/(x+1)", "x·e^x", "sin(x)"]

enunciado: "¿Cuál de las siguientes es un ejemplo de fracción simple ya conocida, mencionada en la teoría como resultado típico de descomponer P(x)/Q(x)?"

explicacion: |
  1/(x+1) es una de las fracciones simples que se obtienen al aplicar
  fracciones parciales sobre una función racional más compleja.
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

## Sección: teorema-de-bayes (20 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_bayes"
  nivel: "basico"
  tags: ["bayes", "vocabulario"]

enunciado: "¿Para qué sirve el teorema de Bayes?"
tipo: mc
opciones_explicitas:
  - "Para 'invertir' una probabilidad condicional conocida (pasar de P(B|A) a P(A|B))"
  - "Para calcular la probabilidad simple de un único evento"
  - "Para sumar las probabilidades de dos eventos excluyentes"
respuesta: "Para 'invertir' una probabilidad condicional conocida (pasar de P(B|A) a P(A|B))"

explicacion: |
  Es la fórmula exacta para pasar de una dirección de la condicional a
  la otra.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_bayes"
  nivel: "intermedio"
  tags: ["bayes", "completar"]

tipo: completar
enunciado: "Completá: P(A|B) = P(B|A) × P(A) / ___."
respuestas_validas:
  - "P(B)"

explicacion: |
  P(A|B) = P(B|A) × P(A) / P(B).
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_bayes"
  nivel: "avanzado"
  tags: ["bayes", "problema"]

variables:
  p_b_dado_a: uno_de([0.8, 0.9])
  p_a: uno_de([0.2, 0.3])
  p_b: uno_de([0.4, 0.5])

respuesta: redondear((p_b_dado_a * p_a) / p_b, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "P(B|A) = {p_b_dado_a}, P(A) = {p_a}, P(B) = {p_b}. ¿Cuál es P(A|B) según el teorema de Bayes?"

pasos:
  - "P(A|B) = ({p_b_dado_a} × {p_a}) / {p_b} = {redondear((p_b_dado_a * p_a) / p_b, 3)}"

explicacion: |
  Se aplica directo la fórmula de Bayes.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_bayes"
  nivel: "intermedio"
  tags: ["bayes", "vocabulario"]

enunciado: "¿Qué es la probabilidad 'a priori' en el teorema de Bayes?"
tipo: mc
opciones_explicitas:
  - "P(A), lo que se sabía sobre A antes de tener la evidencia B"
  - "P(A|B), el resultado final después de aplicar Bayes"
  - "P(B|A), qué tan probable es la evidencia si A fuera cierto"
respuesta: "P(A), lo que se sabía sobre A antes de tener la evidencia B"

explicacion: |
  Es el punto de partida, antes de incorporar evidencia nueva.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_bayes"
  nivel: "intermedio"
  tags: ["bayes", "vocabulario"]

enunciado: "¿Qué es la probabilidad 'a posteriori' en el teorema de Bayes?"
tipo: mc
opciones_explicitas:
  - "P(A|B), la probabilidad de A actualizada después de incorporar la evidencia B"
  - "P(A), la probabilidad de A antes de cualquier evidencia"
  - "P(B), la probabilidad total de la evidencia"
respuesta: "P(A|B), la probabilidad de A actualizada después de incorporar la evidencia B"

explicacion: |
  Es el resultado final del teorema: la creencia actualizada.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_bayes"
  nivel: "intermedio"
  tags: ["bayes", "vocabulario"]

enunciado: "¿Qué es la verosimilitud P(B|A) en el teorema de Bayes?"
tipo: mc
opciones_explicitas:
  - "Qué tan probable es observar la evidencia B, si A fuera cierto"
  - "La probabilidad final de A, después de ver la evidencia"
  - "La probabilidad de que A y B ocurran juntos"
respuesta: "Qué tan probable es observar la evidencia B, si A fuera cierto"

explicacion: |
  Es el término que 'conecta' la hipótesis A con la evidencia
  observada B.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_bayes"
  nivel: "avanzado"
  tags: ["bayes", "problema"]

variables:
  prevalencia: 0.01
  sensibilidad: 0.99
  especificidad: 0.95
  falso_positivo: 1 - especificidad

respuesta: redondear(sensibilidad * prevalencia + falso_positivo * (1 - prevalencia), 4)
tipo: input
tolerancia_abs: 0.001

enunciado: "Una enfermedad afecta al {prevalencia * 100}% de la población. Un test tiene sensibilidad {sensibilidad * 100}% (P(positivo|enfermo)) y especificidad {especificidad * 100}% (P(negativo|sano)). ¿Cuál es la probabilidad TOTAL de dar positivo, P(positivo), sumando verdaderos y falsos positivos?"

pasos:
  - "P(positivo|sano) = 1 − {especificidad} = {falso_positivo}"
  - "P(positivo) = {sensibilidad}×{prevalencia} + {falso_positivo}×{1 - prevalencia} = {redondear(sensibilidad * prevalencia + falso_positivo * (1 - prevalencia), 4)}"

explicacion: |
  Se suman los dos caminos posibles hacia un resultado positivo:
  venir de un enfermo real, o ser un falso positivo de un sano.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_bayes"
  nivel: "avanzado"
  tags: ["bayes", "problema"]

variables:
  prevalencia: 0.01
  sensibilidad: 0.99
  especificidad: 0.95
  falso_positivo: 1 - especificidad
  p_positivo: sensibilidad * prevalencia + falso_positivo * (1 - prevalencia)

respuesta: redondear((sensibilidad * prevalencia) / p_positivo, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "Con prevalencia {prevalencia * 100}%, sensibilidad {sensibilidad * 100}% y especificidad {especificidad * 100}%, si el test da POSITIVO, ¿cuál es la probabilidad real de estar enfermo, P(enfermo|positivo)?"

pasos:
  - "P(positivo) = {redondear(p_positivo, 4)} (ya calculado)"
  - "P(enfermo|positivo) = ({sensibilidad}×{prevalencia}) / {redondear(p_positivo, 4)} = {redondear((sensibilidad * prevalencia) / p_positivo, 3)}"

explicacion: |
  A pesar de que el test parece muy confiable, el resultado da apenas
  ≈16,7% — la enfermedad es tan rara que los falsos positivos superan
  a los verdaderos positivos.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_bayes"
  nivel: "avanzado"
  tags: ["bayes"]

respuesta: verdadero
tipo: vf

enunciado: "Aunque un test tenga una sensibilidad muy alta (por ejemplo, 99%), si la enfermedad que detecta es muy rara, la probabilidad real de estar enfermo dado un resultado positivo puede ser sorprendentemente baja."

explicacion: |
  Es exactamente lo que muestra el ejemplo del test médico: 99% de
  sensibilidad, pero sólo ≈16,7% de probabilidad real dado positivo.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_bayes"
  nivel: "avanzado"
  tags: ["bayes"]

enunciado: "¿Por qué es tan importante tener en cuenta la prevalencia (probabilidad a priori) al interpretar un resultado de test positivo?"
tipo: mc
opciones_explicitas:
  - "Porque ignorarla lleva a sobreestimar mucho la probabilidad real de estar enfermo — es el error conocido como 'falacia de la tasa base'"
  - "Porque la prevalencia no tiene ningún efecto real sobre el resultado de Bayes"
  - "Porque sólo importa cuando la enfermedad es muy común, nunca cuando es rara"
respuesta: "Porque ignorarla lleva a sobreestimar mucho la probabilidad real de estar enfermo — es el error conocido como 'falacia de la tasa base'"

explicacion: |
  Es el nombre técnico del error de ignorar P(A) y quedarse sólo con
  la verosimilitud P(B|A).
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_bayes"
  nivel: "avanzado"
  tags: ["bayes", "problema"]

variables:
  prevalencia: uno_de([0.001, 0.01, 0.1])
  sensibilidad: 0.99
  especificidad: 0.95
  falso_positivo: 1 - especificidad
  p_positivo: sensibilidad * prevalencia + falso_positivo * (1 - prevalencia)

respuesta: redondear((sensibilidad * prevalencia) / p_positivo, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "Con el mismo test (sensibilidad 99%, especificidad 95%), pero ahora con una enfermedad que afecta al {prevalencia * 100}% de la población, ¿cuál es P(enfermo|positivo)?"

pasos:
  - "P(positivo) = {redondear(p_positivo, 4)}"
  - "P(enfermo|positivo) = ({sensibilidad}×{prevalencia}) / {redondear(p_positivo, 4)} = {redondear((sensibilidad * prevalencia) / p_positivo, 3)}"

explicacion: |
  Cuanto más rara la enfermedad (prevalencia más baja), más chica
  queda la probabilidad real dado un positivo, con el mismo test.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_bayes"
  nivel: "basico"
  tags: ["bayes", "aplicacion"]

enunciado: "Un filtro de spam calcula P(spam | el mail contiene la palabra 'ganador'). ¿Qué rol cumple el teorema de Bayes acá?"
tipo: mc
opciones_explicitas:
  - "Permite calcular esa probabilidad a partir de P(la palabra 'ganador' | spam) (más fácil de medir contando mails ya clasificados) y la proporción general de spam"
  - "El teorema de Bayes no se usa en filtros de spam"
  - "Sólo sirve para contar cuántas veces aparece la palabra 'ganador'"
respuesta: "Permite calcular esa probabilidad a partir de P(la palabra 'ganador' | spam) (más fácil de medir contando mails ya clasificados) y la proporción general de spam"

explicacion: |
  Es más fácil medir 'qué tan común es esta palabra EN mails de spam
  ya clasificados' que medir directo 'qué tan probable es que ESTE
  mail sea spam' — Bayes conecta ambas cosas.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_bayes"
  nivel: "avanzado"
  tags: ["bayes", "problema"]

variables:
  p_spam: 0.2
  p_palabra_dado_spam: 0.6
  p_palabra_dado_no_spam: 0.05
  p_palabra: p_palabra_dado_spam * p_spam + p_palabra_dado_no_spam * (1 - p_spam)

respuesta: redondear((p_palabra_dado_spam * p_spam) / p_palabra, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "El {p_spam * 100}% de los mails son spam. La palabra 'ganador' aparece en el {p_palabra_dado_spam * 100}% de los mails spam, y sólo en el {p_palabra_dado_no_spam * 100}% de los mails normales. Si un mail contiene 'ganador', ¿cuál es P(spam | contiene 'ganador')?"

pasos:
  - "P(contiene 'ganador') = {p_palabra_dado_spam}×{p_spam} + {p_palabra_dado_no_spam}×{1 - p_spam} = {redondear(p_palabra, 4)}"
  - "P(spam | 'ganador') = ({p_palabra_dado_spam}×{p_spam}) / {redondear(p_palabra, 4)} = {redondear((p_palabra_dado_spam * p_spam) / p_palabra, 3)}"

explicacion: |
  Con esta palabra, la probabilidad de spam sube bastante respecto
  del 20% base — es la lógica detrás de cualquier filtro bayesiano.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_bayes"
  nivel: "intermedio"
  tags: ["bayes"]

respuesta: verdadero
tipo: vf

enunciado: "El teorema de Bayes permite calcular P(A|B) a partir de P(B|A) — invierte la dirección de una probabilidad condicional que ya se conoce."

explicacion: |
  Es la utilidad central del teorema: pasar de una dirección de la
  condicional a la otra.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_bayes"
  nivel: "avanzado"
  tags: ["bayes", "problema"]

variables:
  prevalencia: 0.02
  sensibilidad: 0.95
  especificidad: uno_de([0.9, 0.98])
  falso_positivo: 1 - especificidad
  p_positivo: sensibilidad * prevalencia + falso_positivo * (1 - prevalencia)

respuesta: redondear((sensibilidad * prevalencia) / p_positivo, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "Con prevalencia 2%, sensibilidad 95% y especificidad {especificidad * 100}%, ¿cuál es P(enfermo|positivo)?"

pasos:
  - "P(positivo) = {redondear(p_positivo, 4)}"
  - "P(enfermo|positivo) = ({sensibilidad}×{prevalencia}) / {redondear(p_positivo, 4)} = {redondear((sensibilidad * prevalencia) / p_positivo, 3)}"

explicacion: |
  A mayor especificidad (menos falsos positivos), mayor la
  probabilidad real dado un resultado positivo.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_bayes"
  nivel: "intermedio"
  tags: ["bayes", "condicional"]

enunciado: "¿De dónde sale la fórmula del teorema de Bayes?"
tipo: mc
opciones_explicitas:
  - "De combinar las dos formas de escribir P(A y B) con probabilidad condicional: P(A|B)×P(B) = P(A y B) = P(B|A)×P(A)"
  - "Es un axioma independiente, sin relación con la probabilidad condicional"
  - "Se obtiene sumando P(A) y P(B) directamente"
respuesta: "De combinar las dos formas de escribir P(A y B) con probabilidad condicional: P(A|B)×P(B) = P(A y B) = P(B|A)×P(A)"

explicacion: |
  Igualando ambas expresiones de P(A y B) y despejando P(A|B) se
  obtiene exactamente la fórmula de Bayes.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_bayes"
  nivel: "avanzado"
  tags: ["bayes", "condicional"]

respuesta: verdadero
tipo: vf

enunciado: "El resultado de aplicar el teorema de Bayes para calcular P(A|B) siempre coincide con el cálculo directo P(A y B) / P(B) — son la misma fórmula, escrita de dos formas distintas."

explicacion: |
  Bayes sólo reemplaza P(A y B) por P(B|A)×P(A), que es otra forma
  válida de calcular lo mismo.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_bayes"
  nivel: "avanzado"
  tags: ["bayes", "problema"]

variables:
  prevalencia: 0.01
  sensibilidad: 0.99
  especificidad_a: 0.9
  especificidad_b: 0.99

respuesta: (sensibilidad * prevalencia) / (sensibilidad * prevalencia + (1 - especificidad_a) * (1 - prevalencia)) < (sensibilidad * prevalencia) / (sensibilidad * prevalencia + (1 - especificidad_b) * (1 - prevalencia))
tipo: vf

enunciado: "Test A tiene especificidad {especificidad_a * 100}%; Test B tiene especificidad {especificidad_b * 100}% (ambos con sensibilidad {sensibilidad * 100}% y misma prevalencia {prevalencia * 100}%). ¿P(enfermo|positivo) del Test A es MENOR que la del Test B?"

explicacion: |
  Menos especificidad significa más falsos positivos, lo que diluye
  más la probabilidad real de estar enfermo dado un resultado
  positivo.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_bayes"
  nivel: "basico"
  tags: ["bayes", "aplicacion"]

enunciado: "¿Cuál es la idea general detrás de usar el teorema de Bayes para 'actualizar creencias'?"
tipo: mc
opciones_explicitas:
  - "Partir de una probabilidad inicial (a priori), incorporar evidencia nueva, y obtener una probabilidad actualizada (a posteriori) que refleja esa evidencia"
  - "Ignorar cualquier información previa y calcular todo desde cero con cada evidencia nueva"
  - "Asumir que la probabilidad de cualquier evento siempre es 50%"
respuesta: "Partir de una probabilidad inicial (a priori), incorporar evidencia nueva, y obtener una probabilidad actualizada (a posteriori) que refleja esa evidencia"

explicacion: |
  Es el patrón general que se repite en diagnóstico médico, filtros
  de spam, y cualquier sistema que aprenda de evidencia.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_bayes"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve, en definitiva, el teorema de Bayes?"
tipo: mc
opciones_explicitas:
  - "Para calcular la probabilidad real de una causa dado un efecto observado (P(A|B)), a partir de qué tan probable es ese efecto si la causa fuera cierta (P(B|A)) y qué tan común es la causa de por sí (P(A))"
  - "Para calcular la probabilidad de dos eventos independientes ocurriendo a la vez"
  - "Sólo se usa en medicina, no tiene otras aplicaciones"
respuesta: "Para calcular la probabilidad real de una causa dado un efecto observado (P(A|B)), a partir de qué tan probable es ese efecto si la causa fuera cierta (P(B|A)) y qué tan común es la causa de por sí (P(A))"

explicacion: |
  Cierra la cadena de `../probabilidad-condicional/`: de "qué tan
  probable es la evidencia si la hipótesis fuera cierta" a "qué tan
  probable es la hipótesis, dada la evidencia observada".
```

## Sección: matriz-inversa (24 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "matriz_inversa"
  nivel: "basico"
  tags: ["adjunta"]

variables:
  a: random(1, 20)
  b: random(1, 20)
  c: random(1, 20)
  d: random(1, 20)

respuesta: d
tipo: input
tolerancia_abs: 0

enunciado: "A = [[{a}, {b}], [{c}, {d}]]. Antes de dividir por el determinante, ¿cuál es el elemento (1,1) de la matriz adjunta?"

explicacion: |
  El primer movimiento es intercambiar a y d de lugar — el (1,1) de la
  adjunta es la d original.
```

```
metadata:
  materia: "matematicas"
  tema: "matriz_inversa"
  nivel: "basico"
  tags: ["adjunta"]

variables:
  a: random(1, 20)
  b: random(1, 20)
  c: random(1, 20)
  d: random(1, 20)

respuesta: a
tipo: input
tolerancia_abs: 0

enunciado: "A = [[{a}, {b}], [{c}, {d}]]. Antes de dividir por el determinante, ¿cuál es el elemento (2,2) de la matriz adjunta?"

explicacion: |
  El (2,2) de la adjunta es la a original.
```

```
metadata:
  materia: "matematicas"
  tema: "matriz_inversa"
  nivel: "basico"
  tags: ["adjunta", "signos"]

variables:
  a: random(1, 20)
  b: random(1, 20)
  c: random(1, 20)
  d: random(1, 20)

respuesta: -b
tipo: input
tolerancia_abs: 0

enunciado: "A = [[{a}, {b}], [{c}, {d}]]. Antes de dividir por el determinante, ¿cuál es el elemento (1,2) de la matriz adjunta?"

explicacion: |
  b se queda en su lugar, pero cambia de signo: −b.
```

```
metadata:
  materia: "matematicas"
  tema: "matriz_inversa"
  nivel: "basico"
  tags: ["adjunta", "signos"]

variables:
  a: random(1, 20)
  b: random(1, 20)
  c: random(1, 20)
  d: random(1, 20)

respuesta: -c
tipo: input
tolerancia_abs: 0

enunciado: "A = [[{a}, {b}], [{c}, {d}]]. Antes de dividir por el determinante, ¿cuál es el elemento (2,1) de la matriz adjunta?"

explicacion: |
  c se queda en su lugar, pero cambia de signo: −c.
```

```
metadata:
  materia: "matematicas"
  tema: "matriz_inversa"
  nivel: "intermedio"
  tags: ["inversa"]

variables:
  b: random(1, 8)
  c: random(1, 8)
  signo: uno_de([1, -1])
  d: b * c + signo
  a: 1

respuesta: d / (a * d - b * c)
tipo: input
tolerancia_abs: 0

enunciado: "A = [[1, {b}], [{c}, {d}]]. ¿Cuál es el elemento (1,1) de A⁻¹?"

pasos:
  - "det(A) = 1×{d} − {b}×{c} = {a * d - b * c}"
  - "Elemento (1,1) de la adjunta: {d}. Dividido por el determinante: {d / (a * d - b * c)}"

explicacion: |
  Se arma la adjunta y se divide cada elemento por el determinante.
```

```
metadata:
  materia: "matematicas"
  tema: "matriz_inversa"
  nivel: "intermedio"
  tags: ["inversa"]

variables:
  b: random(1, 8)
  c: random(1, 8)
  signo: uno_de([1, -1])
  d: b * c + signo
  a: 1

respuesta: a / (a * d - b * c)
tipo: input
tolerancia_abs: 0

enunciado: "A = [[1, {b}], [{c}, {d}]]. ¿Cuál es el elemento (2,2) de A⁻¹?"

explicacion: |
  Elemento (2,2) de la adjunta es a = 1, dividido por det(A).
```

```
metadata:
  materia: "matematicas"
  tema: "matriz_inversa"
  nivel: "intermedio"
  tags: ["inversa", "signos"]

variables:
  b: random(1, 8)
  c: random(1, 8)
  signo: uno_de([1, -1])
  d: b * c + signo
  a: 1

respuesta: (-b) / (a * d - b * c)
tipo: input
tolerancia_abs: 0

enunciado: "A = [[1, {b}], [{c}, {d}]]. ¿Cuál es el elemento (1,2) de A⁻¹?"

explicacion: |
  Elemento (1,2) de la adjunta es −b, dividido por det(A).
```

```
metadata:
  materia: "matematicas"
  tema: "matriz_inversa"
  nivel: "intermedio"
  tags: ["inversa", "signos"]

variables:
  b: random(1, 8)
  c: random(1, 8)
  signo: uno_de([1, -1])
  d: b * c + signo
  a: 1

respuesta: (-c) / (a * d - b * c)
tipo: input
tolerancia_abs: 0

enunciado: "A = [[1, {b}], [{c}, {d}]]. ¿Cuál es el elemento (2,1) de A⁻¹?"

explicacion: |
  Elemento (2,1) de la adjunta es −c, dividido por det(A).
```

```
metadata:
  materia: "matematicas"
  tema: "matriz_inversa"
  nivel: "avanzado"
  tags: ["verificacion", "verdadero_falso"]

variables:
  b: random(1, 8)
  c: random(1, 8)
  signo: uno_de([1, -1])
  d: b * c + signo
  a: 1
  det: a * d - b * c
  inv11: d / det
  inv21: (-c) / det

respuesta: ((a * inv11 + b * inv21) == 1)
tipo: vf

enunciado: "A = [[1, {b}], [{c}, {d}]]. ¿El elemento (1,1) de A · A⁻¹ da 1, como en la identidad?"

explicacion: |
  Multiplicar A por su inversa tiene que dar exactamente la matriz
  identidad — es la forma de verificar que la inversa está bien
  calculada.
```

```
metadata:
  materia: "matematicas"
  tema: "matriz_inversa"
  nivel: "avanzado"
  tags: ["verificacion", "verdadero_falso"]

variables:
  b: random(1, 8)
  c: random(1, 8)
  signo: uno_de([1, -1])
  d: b * c + signo
  a: 1
  det: a * d - b * c
  inv12: (-b) / det
  inv22: a / det

respuesta: ((a * inv12 + b * inv22) == 0)
tipo: vf

enunciado: "A = [[1, {b}], [{c}, {d}]]. ¿El elemento (1,2) de A · A⁻¹ da 0, como en la identidad?"

explicacion: |
  Fuera de la diagonal, A · A⁻¹ tiene que dar 0.
```

```
metadata:
  materia: "matematicas"
  tema: "matriz_inversa"
  nivel: "avanzado"
  tags: ["verificacion", "error_comun", "verdadero_falso"]

variables:
  b: random(1, 8)
  c: random(1, 8)
  signo: uno_de([1, -1])
  d: b * c + signo
  a: 1
  det: a * d - b * c
  inv11_mal: b / det

respuesta: ((a * inv11_mal + b * ((-c) / det)) == 1)
tipo: vf

enunciado: "Si por error se usa b en vez de d como elemento (1,1) de la adjunta de A = [[1, {b}], [{c}, {d}]], ¿el producto A · A⁻¹ igual da la identidad en su elemento (1,1)?"

explicacion: |
  No — usar el elemento equivocado de la adjunta rompe la verificación:
  A · A⁻¹ deja de dar la identidad, que es justamente la señal de que
  algo está mal calculado.
```

```
metadata:
  materia: "matematicas"
  tema: "matriz_inversa"
  nivel: "avanzado"
  tags: ["sistema"]

variables:
  b: random(1, 6)
  c: random(1, 6)
  signo: uno_de([1, -1])
  d: b * c + signo
  a: 1
  x_sol: random(1, 15)
  y_sol: random(1, 15)
  bx: a * x_sol + b * y_sol
  by: c * x_sol + d * y_sol

respuesta: x_sol
tipo: input
tolerancia_abs: 0

enunciado: "El sistema x + {b}y = {bx}; {c}x + {d}y = {by} se puede escribir como A·v = b, con A = [[1, {b}], [{c}, {d}]]. Usando x = A⁻¹·b, ¿cuánto vale x?"

pasos:
  - "det(A) = {a * d - b * c}, así que A⁻¹ existe"
  - "x = A⁻¹·b da el mismo resultado que resolver el sistema por eliminación"

explicacion: |
  Es el mismo sistema de siempre, resuelto con la inversa en vez de
  sustitución o eliminación — el resultado es idéntico.
```

```
metadata:
  materia: "matematicas"
  tema: "matriz_inversa"
  nivel: "avanzado"
  tags: ["sistema"]

variables:
  b: random(1, 6)
  c: random(1, 6)
  signo: uno_de([1, -1])
  d: b * c + signo
  a: 1
  x_sol: random(1, 15)
  y_sol: random(1, 15)
  bx: a * x_sol + b * y_sol
  by: c * x_sol + d * y_sol

respuesta: y_sol
tipo: input
tolerancia_abs: 0

enunciado: "El sistema x + {b}y = {bx}; {c}x + {d}y = {by} se puede escribir como A·v = b, con A = [[1, {b}], [{c}, {d}]]. Usando v = A⁻¹·b, ¿cuánto vale y?"

explicacion: |
  y = segunda componente de A⁻¹·b.
```

```
metadata:
  materia: "matematicas"
  tema: "matriz_inversa"
  nivel: "avanzado"
  tags: ["sistema"]

variables:
  b: random(2, 7)
  c: random(2, 7)
  signo: uno_de([1, -1])
  d: b * c + signo
  a: 1
  x_sol: random(5, 20)
  y_sol: random(1, 10)
  bx: a * x_sol + b * y_sol
  by: c * x_sol + d * y_sol

respuesta: x_sol
tipo: input
tolerancia_abs: 0

enunciado: "A·v = b, con A = [[1, {b}], [{c}, {d}]] y b = ({bx}, {by}). ¿Cuánto vale la primera componente de v = A⁻¹·b?"

explicacion: |
  Es la misma idea que despejar x en una ecuación de un número, con
  matrices en vez de números.
```

```
metadata:
  materia: "matematicas"
  tema: "matriz_inversa"
  nivel: "avanzado"
  tags: ["sistema"]

variables:
  b: random(2, 7)
  c: random(2, 7)
  signo: uno_de([1, -1])
  d: b * c + signo
  a: 1
  x_sol: random(5, 20)
  y_sol: random(1, 10)
  bx: a * x_sol + b * y_sol
  by: c * x_sol + d * y_sol

respuesta: y_sol
tipo: input
tolerancia_abs: 0

enunciado: "A·v = b, con A = [[1, {b}], [{c}, {d}]] y b = ({bx}, {by}). ¿Cuánto vale la segunda componente de v = A⁻¹·b?"

explicacion: |
  Segunda componente de A⁻¹·b.
```

```
metadata:
  materia: "matematicas"
  tema: "matriz_inversa"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Una matriz cuadrada tiene inversa sólo si su determinante es distinto de 0."

explicacion: |
  Si det(A) = 0, no se puede dividir por el determinante — la inversa
  simplemente no existe.
```

```
metadata:
  materia: "matematicas"
  tema: "matriz_inversa"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "A · A⁻¹ da exactamente la matriz identidad."

explicacion: |
  Es la definición misma de matriz inversa — el equivalente matricial de
  x · (1/x) = 1.
```

```
metadata:
  materia: "matematicas"
  tema: "matriz_inversa"
  nivel: "intermedio"
  tags: ["concepto", "error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Para armar la matriz adjunta 2×2, se cambia el signo de los elementos de la diagonal principal (a y d)."

explicacion: |
  Al revés: a y d se INTERCAMBIAN de lugar (sin cambiar signo). Los que
  cambian de signo son b y c, quedándose en su misma posición.
```

```
metadata:
  materia: "matematicas"
  tema: "matriz_inversa"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Si el determinante de una matriz es 0, su inversa da una matriz con todos ceros."

explicacion: |
  No da una matriz de ceros — directamente NO EXISTE inversa (dividir
  por 0 no está definido).
```

```
metadata:
  materia: "matematicas"
  tema: "matriz_inversa"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Un sistema Ax = b se puede resolver como x = A⁻¹·b, siempre que A tenga inversa."

explicacion: |
  Es una alternativa a sustitución, igualación o eliminación — el mismo
  resultado, otro camino.
```

```
metadata:
  materia: "matematicas"
  tema: "matriz_inversa"
  nivel: "intermedio"
  tags: ["opcion_multiple"]

variables:
  b: random(1, 6)
  c: random(1, 6)
  signo: uno_de([1, -1])
  d: b * c + signo
  a: 1

respuesta: d / (a * d - b * c)
tipo: mc
opciones_explicitas:
  - d / (a * d - b * c)
  - a / (a * d - b * c)
  - d * (a * d - b * c)

enunciado: "A = [[1, {b}], [{c}, {d}]]. ¿Cuál es el elemento (1,1) de A⁻¹?"

explicacion: |
  Es d (no a) dividido por el determinante — el (1,1) de la adjunta es el
  elemento que estaba en (2,2) de la matriz original.
```

```
metadata:
  materia: "matematicas"
  tema: "matriz_inversa"
  nivel: "intermedio"
  tags: ["opcion_multiple", "signos"]

variables:
  b: random(1, 6)
  c: random(1, 6)
  signo: uno_de([1, -1])
  d: b * c + signo
  a: 1

respuesta: (-b) / (a * d - b * c)
tipo: mc
opciones_explicitas:
  - (-b) / (a * d - b * c)
  - b / (a * d - b * c)
  - (-b) * (a * d - b * c)

enunciado: "A = [[1, {b}], [{c}, {d}]]. ¿Cuál es el elemento (1,2) de A⁻¹?"

explicacion: |
  b cambia de signo al armar la adjunta, y después se divide por el
  determinante.
```

```
metadata:
  materia: "matematicas"
  tema: "matriz_inversa"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Antes de intentar calcular una matriz inversa, conviene calcular primero el determinante."

explicacion: |
  Si el determinante da 0, ya se sabe que no hace falta seguir: la
  inversa no existe.
```

```
metadata:
  materia: "matematicas"
  tema: "matriz_inversa"
  nivel: "avanzado"
  tags: ["verificacion", "verdadero_falso"]

variables:
  b: random(1, 8)
  c: random(1, 8)
  signo: uno_de([1, -1])
  d: b * c + signo
  a: 1
  real: d / (a * d - b * c)
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "A = [[1, {b}], [{c}, {d}]]. ¿Es correcto que el elemento (1,1) de A⁻¹ sea {propuesto}?"

explicacion: |
  El valor correcto es d/det(A) = {real}.
```

