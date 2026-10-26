# Matemática — Matrices: operaciones (cuestionario, 26 preguntas VBLang)

> Tema: `AL1` (mitad — Tronco 2, Algebraico). Ver `teoria.md` en esta
> misma carpeta.

El DSL no indexa arrays, así que cada elemento de una matriz 2×2 es una
variable con nombre propio (a11, a12, a21, a22...) — se pide, por
pregunta, un único elemento del resultado.

---

### 1 — Suma de matrices: elemento (1,1)

```
metadata:
  materia: "matematicas"
  tema: "matrices_operaciones"
  nivel: "basico"
  tags: ["suma"]

variables:
  a11: random(1, 20)
  a12: random(1, 20)
  a21: random(1, 20)
  a22: random(1, 20)
  b11: random(1, 20)
  b12: random(1, 20)
  b21: random(1, 20)
  b22: random(1, 20)

respuesta: a11 + b11
tipo: input
tolerancia_abs: 0

enunciado: "A = [[{a11}, {a12}], [{a21}, {a22}]], B = [[{b11}, {b12}], [{b21}, {b22}]]. ¿Cuál es el elemento (1,1) de A + B?"

explicacion: |
  Se suma cada elemento con el de la misma posición: a11 + b11.
```

### 2 — Suma de matrices: elemento (2,2)

```
metadata:
  materia: "matematicas"
  tema: "matrices_operaciones"
  nivel: "basico"
  tags: ["suma"]

variables:
  a11: random(1, 20)
  a12: random(1, 20)
  a21: random(1, 20)
  a22: random(1, 20)
  b11: random(1, 20)
  b12: random(1, 20)
  b21: random(1, 20)
  b22: random(1, 20)

respuesta: a22 + b22
tipo: input
tolerancia_abs: 0

enunciado: "A = [[{a11}, {a12}], [{a21}, {a22}]], B = [[{b11}, {b12}], [{b21}, {b22}]]. ¿Cuál es el elemento (2,2) de A + B?"

explicacion: |
  a22 + b22.
```

### 3 — Resta de matrices: elemento (1,2)

```
metadata:
  materia: "matematicas"
  tema: "matrices_operaciones"
  nivel: "basico"
  tags: ["resta"]

variables:
  a11: random(10, 30)
  a12: random(10, 30)
  a21: random(10, 30)
  a22: random(10, 30)
  b11: random(1, 9)
  b12: random(1, 9)
  b21: random(1, 9)
  b22: random(1, 9)

respuesta: a12 - b12
tipo: input
tolerancia_abs: 0

enunciado: "A = [[{a11}, {a12}], [{a21}, {a22}]], B = [[{b11}, {b12}], [{b21}, {b22}]]. ¿Cuál es el elemento (1,2) de A − B?"

explicacion: |
  a12 − b12.
```

### 4 — Resta de matrices: elemento (2,1)

```
metadata:
  materia: "matematicas"
  tema: "matrices_operaciones"
  nivel: "basico"
  tags: ["resta"]

variables:
  a11: random(10, 30)
  a12: random(10, 30)
  a21: random(10, 30)
  a22: random(10, 30)
  b11: random(1, 9)
  b12: random(1, 9)
  b21: random(1, 9)
  b22: random(1, 9)

respuesta: a21 - b21
tipo: input
tolerancia_abs: 0

enunciado: "A = [[{a11}, {a12}], [{a21}, {a22}]], B = [[{b11}, {b12}], [{b21}, {b22}]]. ¿Cuál es el elemento (2,1) de A − B?"

explicacion: |
  a21 − b21.
```

### 5 — Multiplicación por un escalar: elemento (1,1)

```
metadata:
  materia: "matematicas"
  tema: "matrices_operaciones"
  nivel: "basico"
  tags: ["escalar"]

variables:
  k: random(2, 8)
  a11: random(1, 15)
  a12: random(1, 15)
  a21: random(1, 15)
  a22: random(1, 15)

respuesta: k * a11
tipo: input
tolerancia_abs: 0

enunciado: "A = [[{a11}, {a12}], [{a21}, {a22}]]. ¿Cuál es el elemento (1,1) de {k}·A?"

explicacion: |
  Multiplicar por un escalar multiplica cada elemento por ese número.
```

### 6 — Multiplicación por un escalar: elemento (2,2)

```
metadata:
  materia: "matematicas"
  tema: "matrices_operaciones"
  nivel: "basico"
  tags: ["escalar"]

variables:
  k: random(2, 8)
  a11: random(1, 15)
  a12: random(1, 15)
  a21: random(1, 15)
  a22: random(1, 15)

respuesta: k * a22
tipo: input
tolerancia_abs: 0

enunciado: "A = [[{a11}, {a12}], [{a21}, {a22}]]. ¿Cuál es el elemento (2,2) de {k}·A?"

explicacion: |
  {k} × a22.
```

### 7 — Producto de matrices: elemento (1,1)

```
metadata:
  materia: "matematicas"
  tema: "matrices_operaciones"
  nivel: "intermedio"
  tags: ["producto"]

variables:
  a11: random(1, 10)
  a12: random(1, 10)
  a21: random(1, 10)
  a22: random(1, 10)
  b11: random(1, 10)
  b12: random(1, 10)
  b21: random(1, 10)
  b22: random(1, 10)

respuesta: a11 * b11 + a12 * b21
tipo: input
tolerancia_abs: 0

enunciado: "A = [[{a11}, {a12}], [{a21}, {a22}]], B = [[{b11}, {b12}], [{b21}, {b22}]]. ¿Cuál es el elemento (1,1) de A · B?"

pasos:
  - "Fila 1 de A por columna 1 de B: ({a11}×{b11}) + ({a12}×{b21}) = {a11 * b11 + a12 * b21}"

explicacion: |
  Regla fila por columna: se multiplican término a término y se suma.
```

### 8 — Producto de matrices: elemento (1,2)

```
metadata:
  materia: "matematicas"
  tema: "matrices_operaciones"
  nivel: "intermedio"
  tags: ["producto"]

variables:
  a11: random(1, 10)
  a12: random(1, 10)
  a21: random(1, 10)
  a22: random(1, 10)
  b11: random(1, 10)
  b12: random(1, 10)
  b21: random(1, 10)
  b22: random(1, 10)

respuesta: a11 * b12 + a12 * b22
tipo: input
tolerancia_abs: 0

enunciado: "A = [[{a11}, {a12}], [{a21}, {a22}]], B = [[{b11}, {b12}], [{b21}, {b22}]]. ¿Cuál es el elemento (1,2) de A · B?"

pasos:
  - "Fila 1 de A por columna 2 de B: ({a11}×{b12}) + ({a12}×{b22}) = {a11 * b12 + a12 * b22}"

explicacion: |
  Fila 1 de A, columna 2 de B.
```

### 9 — Producto de matrices: elemento (2,1)

```
metadata:
  materia: "matematicas"
  tema: "matrices_operaciones"
  nivel: "intermedio"
  tags: ["producto"]

variables:
  a11: random(1, 10)
  a12: random(1, 10)
  a21: random(1, 10)
  a22: random(1, 10)
  b11: random(1, 10)
  b12: random(1, 10)
  b21: random(1, 10)
  b22: random(1, 10)

respuesta: a21 * b11 + a22 * b21
tipo: input
tolerancia_abs: 0

enunciado: "A = [[{a11}, {a12}], [{a21}, {a22}]], B = [[{b11}, {b12}], [{b21}, {b22}]]. ¿Cuál es el elemento (2,1) de A · B?"

explicacion: |
  Fila 2 de A, columna 1 de B: (a21×b11) + (a22×b21).
```

### 10 — Producto de matrices: elemento (2,2)

```
metadata:
  materia: "matematicas"
  tema: "matrices_operaciones"
  nivel: "intermedio"
  tags: ["producto"]

variables:
  a11: random(1, 10)
  a12: random(1, 10)
  a21: random(1, 10)
  a22: random(1, 10)
  b11: random(1, 10)
  b12: random(1, 10)
  b21: random(1, 10)
  b22: random(1, 10)

respuesta: a21 * b12 + a22 * b22
tipo: input
tolerancia_abs: 0

enunciado: "A = [[{a11}, {a12}], [{a21}, {a22}]], B = [[{b11}, {b12}], [{b21}, {b22}]]. ¿Cuál es el elemento (2,2) de A · B?"

explicacion: |
  Fila 2 de A, columna 2 de B: (a21×b12) + (a22×b22).
```

### 11 — Producto matriz por vector: primera componente

```
metadata:
  materia: "matematicas"
  tema: "matrices_operaciones"
  nivel: "intermedio"
  tags: ["producto", "vector"]

variables:
  a11: random(1, 10)
  a12: random(1, 10)
  a21: random(1, 10)
  a22: random(1, 10)
  x1: random(1, 10)
  x2: random(1, 10)

respuesta: a11 * x1 + a12 * x2
tipo: input
tolerancia_abs: 0

enunciado: "A = [[{a11}, {a12}], [{a21}, {a22}]], v = [{x1}, {x2}]. ¿Cuál es la primera componente de A · v?"

explicacion: |
  Fila 1 de A por el vector completo: (a11×x1) + (a12×x2).
```

### 12 — Producto matriz por vector: segunda componente

```
metadata:
  materia: "matematicas"
  tema: "matrices_operaciones"
  nivel: "intermedio"
  tags: ["producto", "vector"]

variables:
  a11: random(1, 10)
  a12: random(1, 10)
  a21: random(1, 10)
  a22: random(1, 10)
  x1: random(1, 10)
  x2: random(1, 10)

respuesta: a21 * x1 + a22 * x2
tipo: input
tolerancia_abs: 0

enunciado: "A = [[{a11}, {a12}], [{a21}, {a22}]], v = [{x1}, {x2}]. ¿Cuál es la segunda componente de A · v?"

explicacion: |
  Fila 2 de A por el vector completo.
```

### 13 — Matriz identidad: elemento (1,1)

```
metadata:
  materia: "matematicas"
  tema: "matrices_operaciones"
  nivel: "basico"
  tags: ["identidad"]

respuesta: 1
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el elemento (1,1) de la matriz identidad 2×2?"

explicacion: |
  La diagonal principal de la identidad es siempre 1.
```

### 14 — Matriz identidad: elemento (1,2)

```
metadata:
  materia: "matematicas"
  tema: "matrices_operaciones"
  nivel: "basico"
  tags: ["identidad"]

respuesta: 0
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el elemento (1,2) de la matriz identidad 2×2?"

explicacion: |
  Fuera de la diagonal principal, la identidad tiene 0.
```

### 15 — A · I no cambia la matriz

```
metadata:
  materia: "matematicas"
  tema: "matrices_operaciones"
  nivel: "intermedio"
  tags: ["identidad", "verdadero_falso"]

variables:
  a11: random(1, 20)
  a12: random(1, 20)
  a21: random(1, 20)
  a22: random(1, 20)

respuesta: ((a11 * 1 + a12 * 0) == a11)
tipo: vf

enunciado: "A = [[{a11}, {a12}], [{a21}, {a22}]]. ¿El elemento (1,1) de A · I₂ es igual a {a11} (el mismo elemento (1,1) de A)?"

explicacion: |
  A · I = A: multiplicar por la identidad no cambia la matriz.
```

### 16 — La multiplicación de matrices no es conmutativa

```
metadata:
  materia: "matematicas"
  tema: "matrices_operaciones"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "En general, A · B es igual a B · A."

explicacion: |
  La multiplicación de matrices no es conmutativa — cambiar el orden
  suele dar un resultado distinto (y a veces ni siquiera es posible
  calcularlo, si los tamaños no coinciden al revés).
```

### 17 — Compatibilidad: 2×3 por 3×2

```
metadata:
  materia: "matematicas"
  tema: "matrices_operaciones"
  nivel: "intermedio"
  tags: ["compatibilidad", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "¿Se puede multiplicar una matriz de 2×3 por otra de 3×2?"

explicacion: |
  Las columnas de la primera (3) coinciden con las filas de la segunda
  (3), así que sí se puede — el resultado sería de 2×2.
```

### 18 — Compatibilidad: 2×3 por 2×3

```
metadata:
  materia: "matematicas"
  tema: "matrices_operaciones"
  nivel: "intermedio"
  tags: ["compatibilidad", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "¿Se puede multiplicar una matriz de 2×3 por otra de 2×3?"

explicacion: |
  Las columnas de la primera (3) no coinciden con las filas de la
  segunda (2), así que no se puede.
```

### 19 — Compatibilidad para sumar

```
metadata:
  materia: "matematicas"
  tema: "matrices_operaciones"
  nivel: "basico"
  tags: ["compatibilidad", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "¿Se puede sumar una matriz de 2×2 con otra de 2×3?"

explicacion: |
  Para sumar, las dos matrices tienen que tener exactamente el mismo
  tamaño.
```

### 20 — Tamaño del producto: filas

```
metadata:
  materia: "matematicas"
  tema: "matrices_operaciones"
  nivel: "intermedio"
  tags: ["compatibilidad"]

variables:
  m: random(2, 6)
  n: random(2, 6)
  p: random(2, 6)

respuesta: m
tipo: input
tolerancia_abs: 0

enunciado: "A es de tamaño {m}×{n} y B es de tamaño {n}×{p}. ¿Cuántas filas tiene A · B?"

explicacion: |
  El resultado tiene tantas filas como A.
```

### 21 — Tamaño del producto: columnas

```
metadata:
  materia: "matematicas"
  tema: "matrices_operaciones"
  nivel: "intermedio"
  tags: ["compatibilidad"]

variables:
  m: random(2, 6)
  n: random(2, 6)
  p: random(2, 6)

respuesta: p
tipo: input
tolerancia_abs: 0

enunciado: "A es de tamaño {m}×{n} y B es de tamaño {n}×{p}. ¿Cuántas columnas tiene A · B?"

explicacion: |
  El resultado tiene tantas columnas como B.
```

### 22 — Transpuesta: elemento (1,2)

```
metadata:
  materia: "matematicas"
  tema: "matrices_operaciones"
  nivel: "intermedio"
  tags: ["transpuesta"]

variables:
  a11: random(1, 20)
  a12: random(1, 20)
  a21: random(1, 20)
  a22: random(1, 20)

respuesta: a21
tipo: input
tolerancia_abs: 0

enunciado: "A = [[{a11}, {a12}], [{a21}, {a22}]]. ¿Cuál es el elemento (1,2) de Aᵀ?"

explicacion: |
  El elemento (1,2) de la transpuesta es el elemento (2,1) de la
  original: a21.
```

### 23 — Transpuesta: elemento (2,1)

```
metadata:
  materia: "matematicas"
  tema: "matrices_operaciones"
  nivel: "intermedio"
  tags: ["transpuesta"]

variables:
  a11: random(1, 20)
  a12: random(1, 20)
  a21: random(1, 20)
  a22: random(1, 20)

respuesta: a12
tipo: input
tolerancia_abs: 0

enunciado: "A = [[{a11}, {a12}], [{a21}, {a22}]]. ¿Cuál es el elemento (2,1) de Aᵀ?"

explicacion: |
  El elemento (2,1) de la transpuesta es el elemento (1,2) de la
  original: a12.
```

### 24 — Concepto: requisito para sumar

```
metadata:
  materia: "matematicas"
  tema: "matrices_operaciones"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Para sumar dos matrices, las dos tienen que tener el mismo tamaño."

explicacion: |
  La suma se hace elemento a elemento, así que necesita esa
  correspondencia exacta.
```

### 25 — Concepto: cómo NO se multiplican las matrices

```
metadata:
  materia: "matematicas"
  tema: "matrices_operaciones"
  nivel: "intermedio"
  tags: ["concepto", "error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "La multiplicación de matrices se hace multiplicando los elementos que están en la misma posición, igual que en la suma."

explicacion: |
  Eso sería un error común. La multiplicación de matrices usa la regla
  fila por columna, no posición por posición.
```

### 26 — Producto de matrices: verificación numérica completa

```
metadata:
  materia: "matematicas"
  tema: "matrices_operaciones"
  nivel: "avanzado"
  tags: ["producto", "verificacion", "verdadero_falso"]

variables:
  a11: random(1, 8)
  a12: random(1, 8)
  a21: random(1, 8)
  a22: random(1, 8)
  b11: random(1, 8)
  b12: random(1, 8)
  b21: random(1, 8)
  b22: random(1, 8)
  c11_real: a11 * b11 + a12 * b21
  error: uno_de([0, 0, 1, -1])
  c11_propuesto: c11_real + error

respuesta: (c11_propuesto == c11_real)
tipo: vf

enunciado: "A = [[{a11}, {a12}], [{a21}, {a22}]], B = [[{b11}, {b12}], [{b21}, {b22}]]. ¿Es correcto que el elemento (1,1) de A · B sea {c11_propuesto}?"

explicacion: |
  El valor correcto es (a11×b11) + (a12×b21) = {c11_real}.
```
