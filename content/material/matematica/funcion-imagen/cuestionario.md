# Matemática — Función: imagen (cuestionario, 24 preguntas VBLang)

> Tema: `FUNC1b` (Tronco 2 — Algebraico). Ver `teoria.md` en esta misma
> carpeta.

---

### 1 — Imagen de función lineal

```
metadata:
  materia: "matematicas"
  tema: "funcion_imagen"
  nivel: "basico"
  tags: ["lineal", "verdadero_falso"]

variables:
  m: random(1, 10)
  b: random(-10, 10)

respuesta: verdadero
tipo: vf

enunciado: "f(x) = {m}x + {b}. ¿Es la imagen de f todos los números reales?"

explicacion: |
  Cualquier función lineal no constante (m ≠ 0) tiene como imagen todos
  los reales.
```

### 2 — Imagen de función constante

```
metadata:
  materia: "matematicas"
  tema: "funcion_imagen"
  nivel: "basico"
  tags: ["constante"]

variables:
  k: random(1, 30)

respuesta: k
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {k} para todo x. ¿Cuál es el único valor de la imagen de f?"

explicacion: |
  Una función constante siempre devuelve el mismo valor: {k}.
```

### 3 — Vértice de parábola hacia arriba: mínimo de la imagen

```
metadata:
  materia: "matematicas"
  tema: "funcion_imagen"
  nivel: "intermedio"
  tags: ["cuadratica"]

variables:
  h: random(-10, 10)
  k: random(-10, 10)

respuesta: k
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = (x − {h})² + {k}. ¿Cuál es el valor mínimo de la imagen de f?"

explicacion: |
  El vértice está en ({h}, {k}), y como abre hacia arriba, {k} es el
  mínimo.
```

### 4 — Vértice de parábola hacia arriba: otro caso

```
metadata:
  materia: "matematicas"
  tema: "funcion_imagen"
  nivel: "intermedio"
  tags: ["cuadratica"]

variables:
  h: random(-15, 15)
  k: random(-15, 15)

respuesta: k
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = (x + {h})² − {k}. ¿Cuál es el valor mínimo de la imagen de f?"

explicacion: |
  El vértice está en (−{h}, −{k}) — el mínimo de la imagen es −{k}, el
  mismo número que ya está restando en la fórmula.
```

### 5 — Vértice de parábola hacia abajo: máximo de la imagen

```
metadata:
  materia: "matematicas"
  tema: "funcion_imagen"
  nivel: "intermedio"
  tags: ["cuadratica", "signos"]

variables:
  h: random(-10, 10)
  k: random(-10, 10)

respuesta: k
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = −(x − {h})² + {k}. ¿Cuál es el valor máximo de la imagen de f?"

explicacion: |
  El signo negativo adelante hace que la parábola abra hacia abajo: el
  vértice ({h}, {k}) es ahora un máximo, no un mínimo.
```

### 6 — Vértice de parábola hacia abajo: otro caso

```
metadata:
  materia: "matematicas"
  tema: "funcion_imagen"
  nivel: "intermedio"
  tags: ["cuadratica", "signos"]

variables:
  h: random(-15, 15)
  k: random(-15, 15)

respuesta: k
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = −(x + {h})² + {k}. ¿Cuál es el valor máximo de la imagen de f?"

explicacion: |
  Vértice en (−{h}, {k}), y como abre hacia abajo, {k} es el máximo.
```

### 7 — Vértice de valor absoluto: mínimo de la imagen

```
metadata:
  materia: "matematicas"
  tema: "funcion_imagen"
  nivel: "intermedio"
  tags: ["valor_absoluto"]

variables:
  h: random(-10, 10)
  k: random(-10, 10)

respuesta: k
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = |x − {h}| + {k}. ¿Cuál es el valor mínimo de la imagen de f?"

explicacion: |
  El valor absoluto nunca da negativo, así que el mínimo se alcanza
  cuando |x−{h}| = 0, dando f = {k}.
```

### 8 — Vértice de valor absoluto: otro caso

```
metadata:
  materia: "matematicas"
  tema: "funcion_imagen"
  nivel: "intermedio"
  tags: ["valor_absoluto"]

variables:
  h: random(-15, 15)
  k: random(-15, 15)

respuesta: k
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = |x + {h}| + {k}. ¿Cuál es el valor mínimo de la imagen de f?"

explicacion: |
  El mínimo se alcanza en x = −{h}, dando f = {k}.
```

### 9 — Pertenece a la imagen: parábola hacia arriba (caso general)

```
metadata:
  materia: "matematicas"
  tema: "funcion_imagen"
  nivel: "intermedio"
  tags: ["cuadratica", "verdadero_falso"]

variables:
  h: random(-10, 10)
  k: random(-10, 10)
  offset: uno_de([-5, -2, -1, 1, 3, 5])
  val: k + offset

respuesta: (val >= k)
tipo: vf

enunciado: "f(x) = (x − {h})² + {k}. ¿y = {val} pertenece a la imagen de f?"

explicacion: |
  Pertenece si y ≥ {k} (el mínimo del vértice).
```

### 10 — Pertenece a la imagen: parábola hacia arriba (borde incluido)

```
metadata:
  materia: "matematicas"
  tema: "funcion_imagen"
  nivel: "intermedio"
  tags: ["cuadratica", "verdadero_falso"]

variables:
  h: random(-10, 10)
  k: random(-10, 10)

respuesta: (k >= k)
tipo: vf

enunciado: "f(x) = (x − {h})² + {k}. ¿y = {k} (el valor exacto del vértice) pertenece a la imagen de f?"

explicacion: |
  Sí: se alcanza justo en x = {h}, así que el borde está incluido.
```

### 11 — Pertenece a la imagen: parábola hacia abajo

```
metadata:
  materia: "matematicas"
  tema: "funcion_imagen"
  nivel: "intermedio"
  tags: ["cuadratica", "signos", "verdadero_falso"]

variables:
  h: random(-10, 10)
  k: random(-10, 10)
  offset: uno_de([-5, -2, -1, 1, 3, 5])
  val: k + offset

respuesta: (val <= k)
tipo: vf

enunciado: "f(x) = −(x − {h})² + {k}. ¿y = {val} pertenece a la imagen de f?"

explicacion: |
  Con la parábola hacia abajo, pertenece si y ≤ {k} (el máximo).
```

### 12 — Pertenece a la imagen: valor absoluto

```
metadata:
  materia: "matematicas"
  tema: "funcion_imagen"
  nivel: "intermedio"
  tags: ["valor_absoluto", "verdadero_falso"]

variables:
  h: random(-10, 10)
  k: random(-10, 10)
  offset: uno_de([-5, -2, -1, 1, 3, 5])
  val: k + offset

respuesta: (val >= k)
tipo: vf

enunciado: "f(x) = |x − {h}| + {k}. ¿y = {val} pertenece a la imagen de f?"

explicacion: |
  El valor absoluto nunca baja de su vértice: pertenece si y ≥ {k}.
```

### 13 — Pertenece a la imagen: valor por debajo del mínimo

```
metadata:
  materia: "matematicas"
  tema: "funcion_imagen"
  nivel: "intermedio"
  tags: ["cuadratica", "verdadero_falso"]

variables:
  h: random(-10, 10)
  k: random(-5, 15)
  offset: random(1, 10)
  val: k - offset

respuesta: (val >= k)
tipo: vf

enunciado: "f(x) = (x − {h})² + {k}. ¿y = {val} pertenece a la imagen de f?"

explicacion: |
  {val} está por debajo del mínimo {k}, así que no pertenece a la
  imagen — la parábola nunca baja de su vértice.
```

### 14 — Pertenece a la imagen: valor por encima del máximo

```
metadata:
  materia: "matematicas"
  tema: "funcion_imagen"
  nivel: "intermedio"
  tags: ["cuadratica", "signos", "verdadero_falso"]

variables:
  h: random(-10, 10)
  k: random(-5, 15)
  offset: random(1, 10)
  val: k + offset

respuesta: (val <= k)
tipo: vf

enunciado: "f(x) = −(x − {h})² + {k}. ¿y = {val} pertenece a la imagen de f?"

explicacion: |
  {val} está por encima del máximo {k}, así que no pertenece — la
  parábola hacia abajo nunca supera su vértice.
```

### 15 — Elegir la descripción correcta: parábola hacia arriba

```
metadata:
  materia: "matematicas"
  tema: "funcion_imagen"
  nivel: "intermedio"
  tags: ["cuadratica", "opcion_multiple"]

variables:
  h: random(-10, 10)
  k: random(-10, 10)

respuesta: concatenar("y ≥ ", k)
tipo: mc
opciones_explicitas:
  - concatenar("y ≥ ", k)
  - concatenar("y ≤ ", k)
  - concatenar("y ≠ ", k)

enunciado: "¿Cuál describe la imagen de f(x) = (x − {h})² + {k}?"

explicacion: |
  Abre hacia arriba (sin signo negativo adelante): imagen y ≥ {k}.
```

### 16 — Elegir la descripción correcta: parábola hacia abajo

```
metadata:
  materia: "matematicas"
  tema: "funcion_imagen"
  nivel: "intermedio"
  tags: ["cuadratica", "signos", "opcion_multiple"]

variables:
  h: random(-10, 10)
  k: random(-10, 10)

respuesta: concatenar("y ≤ ", k)
tipo: mc
opciones_explicitas:
  - concatenar("y ≤ ", k)
  - concatenar("y ≥ ", k)
  - concatenar("y ≠ ", k)

enunciado: "¿Cuál describe la imagen de f(x) = −(x − {h})² + {k}?"

explicacion: |
  El signo negativo da vuelta la parábola: imagen y ≤ {k}.
```

### 17 — Elegir la descripción correcta: valor absoluto

```
metadata:
  materia: "matematicas"
  tema: "funcion_imagen"
  nivel: "intermedio"
  tags: ["valor_absoluto", "opcion_multiple"]

variables:
  h: random(-10, 10)
  k: random(-10, 10)

respuesta: concatenar("y ≥ ", k)
tipo: mc
opciones_explicitas:
  - concatenar("y ≥ ", k)
  - concatenar("y ≤ ", k)
  - concatenar("y = ", k)

enunciado: "¿Cuál describe la imagen de f(x) = |x − {h}| + {k}?"

explicacion: |
  El valor absoluto siempre da ≥ 0, así que f nunca baja de {k}.
```

### 18 — Concepto: dominio vs. imagen

```
metadata:
  materia: "matematicas"
  tema: "funcion_imagen"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "El dominio y la imagen de una función son exactamente la misma idea, sólo con otro nombre."

explicacion: |
  El dominio restringe los valores de ENTRADA (x); la imagen describe los
  valores de SALIDA (y) que la función realmente produce.
```

### 19 — Concepto: el vértice como valor extremo

```
metadata:
  materia: "matematicas"
  tema: "funcion_imagen"
  nivel: "basico"
  tags: ["concepto", "cuadratica", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El vértice de una parábola marca el valor mínimo o máximo de su imagen."

explicacion: |
  Según hacia dónde abra la parábola, el vértice es el punto más bajo o
  el más alto que alcanza la función.
```

### 20 — Concepto: valor absoluto nunca negativo

```
metadata:
  materia: "matematicas"
  tema: "funcion_imagen"
  nivel: "basico"
  tags: ["concepto", "valor_absoluto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El valor absoluto de cualquier número nunca es negativo."

explicacion: |
  Por eso la imagen de f(x) = |x − h| + k siempre tiene un mínimo (k), y
  nunca un máximo.
```

### 21 — Concepto: imagen de una función lineal vs. constante

```
metadata:
  materia: "matematicas"
  tema: "funcion_imagen"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "La imagen de cualquier función de la forma f(x) = mx + b siempre son todos los reales, sin excepción."

explicacion: |
  Hay una excepción: si m = 0, la función es constante, y su imagen es
  un único valor, no todos los reales.
```

### 22 — Concepto: parábola hacia abajo, olvido de dar vuelta

```
metadata:
  materia: "matematicas"
  tema: "funcion_imagen"
  nivel: "intermedio"
  tags: ["concepto", "error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Da lo mismo escribir 'y ≥ k' o 'y ≤ k' para describir la imagen de una parábola, sea cual sea el signo que tenga adelante."

explicacion: |
  No da lo mismo: si abre hacia abajo (signo negativo) hay que usar
  ≤; usar ≥ ahí sería un error de signo.
```

### 23 — Verificación numérica: mínimo de una parábola

```
metadata:
  materia: "matematicas"
  tema: "funcion_imagen"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  h: random(-10, 10)
  k: random(-10, 10)
  error: uno_de([0, 0, 1, -1])
  propuesto: k + error

respuesta: (propuesto == k)
tipo: vf

enunciado: "f(x) = (x − {h})² + {k}. ¿Es correcto que el mínimo de la imagen sea {propuesto}?"

explicacion: |
  El mínimo correcto es {k}, el valor del vértice.
```

### 24 — Verificación numérica: máximo de una parábola hacia abajo

```
metadata:
  materia: "matematicas"
  tema: "funcion_imagen"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  h: random(-10, 10)
  k: random(-10, 10)
  error: uno_de([0, 0, 1, -1])
  propuesto: k + error

respuesta: (propuesto == k)
tipo: vf

enunciado: "f(x) = −(x − {h})² + {k}. ¿Es correcto que el máximo de la imagen sea {propuesto}?"

explicacion: |
  El máximo correcto es {k}, el valor del vértice.
```
