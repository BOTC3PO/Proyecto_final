# Matemática — Determinante (cuestionario, 26 preguntas VBLang)

> Tema: `AL1B` (mitad — Tronco 2, Algebraico). Ver `teoria.md` en esta
> misma carpeta.

---

### 1 — Determinante 2×2 básico

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

### 2 — Determinante 2×2, resultado negativo

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

### 3 — Determinante 2×2, otra variante

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

### 4 — Determinante 2×2, con ceros

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

### 5 — Determinante 2×2, valores grandes

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

### 6 — Determinante 2×2 construido para dar 0

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

### 7 — Determinante 3×3 con Sarrus

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

### 8 — Determinante 3×3, otra matriz

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

### 9 — Determinante 3×3, con una fila de ceros parcial

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

### 10 — Determinante 3×3, matriz diagonal

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

### 11 — Determinante 3×3, valores chicos variados

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

### 12 — Determinante 3×3, construido para dar 0

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

### 13 — Verificar el cálculo de un determinante 2×2

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

### 14 — Trampa: orden invertido de la resta

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

### 15 — Concepto: determinante 0 y no invertible

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

### 16 — Concepto: determinante distinto de 0

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

### 17 — Concepto: filas proporcionales

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

### 18 — Concepto: Sarrus sólo para 3×3

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

### 19 — Concepto: matriz llena de ceros vs. determinante 0

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

### 20 — Elegir la fórmula correcta: determinante 2×2

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

### 21 — Elegir la fórmula correcta: producto de diagonal principal, sólo matriz diagonal

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

### 22 — Determinante de la matriz identidad

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

### 23 — Determinante con signo negativo, verificación

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

### 24 — Determinante 2×2 en problema de invertibilidad

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

### 25 — Determinante 3×3 en problema de invertibilidad

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

### 26 — Determinante 2×2, coeficientes con uno negativo

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
