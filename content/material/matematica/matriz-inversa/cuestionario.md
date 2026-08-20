# Matemática — Matriz inversa (cuestionario, 24 preguntas VBLang)

> Tema: `AL1B` (mitad — Tronco 2, Algebraico). Ver `teoria.md` en esta
> misma carpeta.

Las preguntas de "matriz adjunta" no necesitan dividir (funcionan con
cualquier a, b, c, d). Las de "inversa completa" se construyen con
determinante ±1 para que el resultado sea siempre entero exacto, sin
perder generalidad del procedimiento.

---

### 1 — Matriz adjunta: elemento (1,1)

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

### 2 — Matriz adjunta: elemento (2,2)

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

### 3 — Matriz adjunta: elemento (1,2)

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

### 4 — Matriz adjunta: elemento (2,1)

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

### 5 — Inversa completa: elemento (1,1)

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

### 6 — Inversa completa: elemento (2,2)

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

### 7 — Inversa completa: elemento (1,2)

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

### 8 — Inversa completa: elemento (2,1)

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

### 9 — Verificar A · A⁻¹ = I: elemento (1,1)

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

### 10 — Verificar A · A⁻¹ = I: elemento (1,2)

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

### 11 — Verificar A · A⁻¹ = I: caso con error

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

### 12 — Usar la inversa para resolver un sistema: hallar x

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

### 13 — Usar la inversa para resolver un sistema: hallar y

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

### 14 — Sistema con la inversa, otro caso: hallar x

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

### 15 — Sistema con la inversa, otro caso: hallar y

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

### 16 — Concepto: condición de existencia

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

### 17 — Concepto: qué hace la inversa

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

### 18 — Concepto: qué se intercambia en la adjunta

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

### 19 — Concepto: matriz sin inversa

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

### 20 — Concepto: la inversa como herramienta para sistemas

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

### 21 — Elegir la fórmula correcta de la inversa 2×2

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

### 22 — Elegir la fórmula correcta: signo de b

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

### 23 — Determinante primero, siempre

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

### 24 — Verificar un elemento de la inversa (caso con error)

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
