# Matemática — Producto escalar (cuestionario, 26 preguntas VBLang)

> Tema: `M10`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es el producto escalar

```
metadata:
  materia: "matematicas"
  tema: "producto_escalar"
  nivel: "basico"
  tags: ["producto_escalar", "vocabulario"]

enunciado: "¿Qué es el producto escalar entre dos vectores?"
tipo: mc
opciones_explicitas:
  - "Una operación entre dos vectores que da como resultado un número (no otro vector)"
  - "Una operación que siempre da como resultado otro vector"
  - "Otro nombre para el módulo de un vector"
respuesta: "Una operación entre dos vectores que da como resultado un número (no otro vector)"

explicacion: |
  De ahí el nombre "escalar": el resultado es un número suelto.
```

### 2 — Completar: fórmula del producto escalar

```
metadata:
  materia: "matematicas"
  tema: "producto_escalar"
  nivel: "intermedio"
  tags: ["producto_escalar", "completar"]

tipo: completar
enunciado: "Completá: v · w = (vₓ × wₓ) + ___."
respuestas_validas:
  - "(v_y × w_y)"
  - "v_y × w_y"
  - "vy × wy"

explicacion: |
  Se multiplican las componentes correspondientes y se suman.
```

### 3 — Problema: calcular un producto escalar

```
metadata:
  materia: "matematicas"
  tema: "producto_escalar"
  nivel: "intermedio"
  tags: ["producto_escalar", "problema"]

variables:
  vx: random(1, 8)
  vy: random(1, 8)
  wx: random(1, 8)
  wy: random(1, 8)

respuesta: (vx * wx) + (vy * wy)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el producto escalar entre los vectores ({vx}, {vy}) y ({wx}, {wy})?"

pasos:
  - "({vx} × {wx}) + ({vy} × {wy}) = {vx * wx} + {vy * wy} = {(vx * wx) + (vy * wy)}"

explicacion: |
  Se multiplican las componentes x entre sí, las componentes y entre
  sí, y se suman ambos resultados.
```

### 4 — Problema: producto escalar con un valor negativo

```
metadata:
  materia: "matematicas"
  tema: "producto_escalar"
  nivel: "avanzado"
  tags: ["producto_escalar", "problema"]

variables:
  vx: random(2, 10)
  vy: random(2, 10)
  wx: 0 - random(1, 5)
  wy: random(1, 5)

respuesta: (vx * wx) + (vy * wy)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el producto escalar entre los vectores ({vx}, {vy}) y ({wx}, {wy})?"

pasos:
  - "({vx} × ({wx})) + ({vy} × {wy}) = {(vx * wx) + (vy * wy)}"

explicacion: |
  El signo de cada componente se respeta en la multiplicación.
```

### 5 — El producto escalar da un número, no un vector

```
metadata:
  materia: "matematicas"
  tema: "producto_escalar"
  nivel: "basico"
  tags: ["producto_escalar"]

respuesta: verdadero
tipo: vf

enunciado: "El resultado de un producto escalar es siempre un número (un escalar), nunca otro vector."

explicacion: |
  Es lo que distingue al producto escalar de la suma de vectores, que
  sí da otro vector.
```

### 6 — Fórmula alternativa con el ángulo

```
metadata:
  materia: "matematicas"
  tema: "producto_escalar"
  nivel: "intermedio"
  tags: ["producto_escalar", "vocabulario"]

enunciado: "¿Cuál es la fórmula del producto escalar en términos de los módulos y el ángulo entre los vectores?"
tipo: mc
opciones_explicitas:
  - "v · w = |v| × |w| × cos(θ)"
  - "v · w = |v| + |w| + θ"
  - "v · w = |v| × |w| × sen(θ)"
respuesta: "v · w = |v| × |w| × cos(θ)"

explicacion: |
  Da exactamente el mismo resultado que la fórmula por componentes.
```

### 7 — Producto escalar 0 implica perpendicularidad

```
metadata:
  materia: "matematicas"
  tema: "producto_escalar"
  nivel: "intermedio"
  tags: ["producto_escalar", "perpendicularidad"]

respuesta: verdadero
tipo: vf

enunciado: "Si el producto escalar de dos vectores (ninguno nulo) da 0, esos dos vectores son perpendiculares entre sí."

explicacion: |
  Porque cos(90°) = 0: es la única forma de que el producto dé 0 sin que
  ninguno de los vectores sea nulo.
```

### 8 — Problema: verificar perpendicularidad con producto escalar

```
metadata:
  materia: "matematicas"
  tema: "producto_escalar"
  nivel: "avanzado"
  tags: ["producto_escalar", "problema"]

variables:
  a: random(2, 10)
  b: random(2, 10)

respuesta: verdadero
tipo: vf

enunciado: "¿Son perpendiculares los vectores ({a}, {b}) y (-{b}, {a})?"

explicacion: |
  Producto escalar: ({a})×(-{b}) + ({b})×({a}) = -{a * b} + {a * b} = 0:
  son perpendiculares.
```

### 9 — Problema: verificar que dos vectores NO son perpendiculares

```
metadata:
  materia: "matematicas"
  tema: "producto_escalar"
  nivel: "avanzado"
  tags: ["producto_escalar", "problema"]

variables:
  a: random(2, 10)
  b: random(2, 10)

respuesta: falso
tipo: vf

enunciado: "¿Son perpendiculares los vectores ({a}, {b}) y ({a}, {b})?"

explicacion: |
  Un vector nunca es perpendicular a sí mismo: su producto escalar
  consigo mismo da {(a * a) + (b * b)}, que no es 0 (salvo el vector
  nulo).
```

### 10 — Signo del producto escalar con ángulo agudo

```
metadata:
  materia: "matematicas"
  tema: "producto_escalar"
  nivel: "intermedio"
  tags: ["producto_escalar", "vocabulario"]

enunciado: "Si el ángulo entre dos vectores es agudo (menor a 90°), ¿qué signo tiene su producto escalar?"
tipo: mc
opciones_explicitas:
  - "Positivo"
  - "Negativo"
  - "Siempre cero"
respuesta: "Positivo"

explicacion: |
  cos(θ) es positivo para ángulos entre 0° y 90°.
```

### 11 — Signo del producto escalar con ángulo obtuso

```
metadata:
  materia: "matematicas"
  tema: "producto_escalar"
  nivel: "intermedio"
  tags: ["producto_escalar", "vocabulario"]

enunciado: "Si el ángulo entre dos vectores es obtuso (mayor a 90°), ¿qué signo tiene su producto escalar?"
tipo: mc
opciones_explicitas:
  - "Negativo"
  - "Positivo"
  - "Siempre cero"
respuesta: "Negativo"

explicacion: |
  cos(θ) es negativo para ángulos entre 90° y 180°.
```

### 12 — Signo del producto escalar con ángulo recto

```
metadata:
  materia: "matematicas"
  tema: "producto_escalar"
  nivel: "basico"
  tags: ["producto_escalar", "vocabulario"]

enunciado: "Si el ángulo entre dos vectores es exactamente 90°, ¿cuánto vale su producto escalar?"
tipo: mc
opciones_explicitas:
  - "0"
  - "1"
  - "Depende siempre de los módulos"
respuesta: "0"

explicacion: |
  cos(90°) = 0, así que el producto entero se anula, sin importar los
  módulos.
```

### 13 — El producto escalar es conmutativo

```
metadata:
  materia: "matematicas"
  tema: "producto_escalar"
  nivel: "intermedio"
  tags: ["producto_escalar"]

respuesta: verdadero
tipo: vf

enunciado: "El producto escalar es conmutativo: v · w da exactamente el mismo resultado que w · v."

explicacion: |
  El orden de los factores no altera el producto, igual que con la
  multiplicación de números.
```

### 14 — Problema: verificar la conmutatividad

```
metadata:
  materia: "matematicas"
  tema: "producto_escalar"
  nivel: "intermedio"
  tags: ["producto_escalar", "problema"]

variables:
  vx: random(2, 9)
  vy: random(2, 9)
  wx: random(2, 9)
  wy: random(2, 9)

respuesta: (wx * vx) + (wy * vy)
tipo: input
tolerancia_abs: 0

enunciado: "Si v · w = ({vx} × {wx}) + ({vy} × {wy}) = {(vx * wx) + (vy * wy)}, ¿cuánto vale w · v?"

explicacion: |
  Exactamente lo mismo: {(vx * wx) + (vy * wy)}, por la propiedad
  conmutativa.
```

### 15 — Problema: trabajo de una fuerza con ángulo de 60°

```
metadata:
  materia: "matematicas"
  tema: "producto_escalar"
  nivel: "avanzado"
  tags: ["producto_escalar", "problema"]

variables:
  fuerza: uno_de([10, 20, 40])
  distancia: uno_de([5, 10])
  cos_60: 0.5

respuesta: fuerza * distancia * cos_60
tipo: input
tolerancia_abs: 0.5

enunciado: "Una fuerza de {fuerza} N actúa sobre un objeto que se desplaza {distancia} m, con un ángulo de 60° entre la fuerza y el desplazamiento (cos 60° = 0,5). ¿Cuál es el trabajo realizado (W = F × d × cos θ)?"

pasos:
  - "{fuerza} × {distancia} × 0,5 = {fuerza * distancia * cos_60}"

explicacion: |
  El trabajo de una fuerza es, en el fondo, un producto escalar entre el
  vector fuerza y el vector desplazamiento.
```

### 16 — Ordenar: pasos para calcular el producto escalar por componentes

```
metadata:
  materia: "matematicas"
  tema: "producto_escalar"
  nivel: "intermedio"
  tags: ["producto_escalar", "ordenar"]

enunciado: "Ordená los pasos para calcular el producto escalar de dos vectores, conociendo sus componentes."
tipo: ordenar
opciones_explicitas:
  - "Sumar ambos resultados"
  - "Multiplicar las dos componentes x entre sí"
  - "Multiplicar las dos componentes y entre sí"
respuesta_orden: ["Multiplicar las dos componentes x entre sí", "Multiplicar las dos componentes y entre sí", "Sumar ambos resultados"]
explicacion: |
  v · w = (vₓ×wₓ) + (v_y×w_y).
```

### 17 — Producto escalar y el criterio de perpendicularidad de pendientes

```
metadata:
  materia: "matematicas"
  tema: "producto_escalar"
  nivel: "avanzado"
  tags: ["producto_escalar", "vocabulario"]

enunciado: "¿Qué relación tiene el criterio 'producto escalar = 0' con el criterio de pendientes m₁×m₂=-1 de `../rectas-paralelas-y-perpendiculares/`?"
tipo: mc
opciones_explicitas:
  - "Son dos formas distintas de expresar la misma idea: perpendicularidad, una con vectores y otra con pendientes"
  - "No tienen ninguna relación entre sí"
  - "El producto escalar reemplaza por completo al criterio de pendientes"
respuesta: "Son dos formas distintas de expresar la misma idea: perpendicularidad, una con vectores y otra con pendientes"

explicacion: |
  Ambos son formas de detectar un ángulo de 90° sin medirlo directamente.
```

### 18 — Problema: producto escalar de vectores perpendiculares por construcción

```
metadata:
  materia: "matematicas"
  tema: "producto_escalar"
  nivel: "avanzado"
  tags: ["producto_escalar", "problema"]

variables:
  a: random(3, 12)
  b: random(3, 12)

respuesta: 0
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el producto escalar entre los vectores ({a}, {b}) y (-{b}, {a})?"

pasos:
  - "({a})×(-{b}) + ({b})×({a}) = -{a * b} + {a * b} = 0"

explicacion: |
  Este par de vectores es perpendicular por construcción: intercambiar
  las componentes y cambiar un signo siempre da un vector perpendicular
  al original.
```

### 19 — El producto de un vector consigo mismo

```
metadata:
  materia: "matematicas"
  tema: "producto_escalar"
  nivel: "avanzado"
  tags: ["producto_escalar"]

respuesta: verdadero
tipo: vf

enunciado: "El producto escalar de un vector consigo mismo (v · v) es igual al cuadrado de su propio módulo."

explicacion: |
  v · v = vₓ² + v_y², que es exactamente lo que hay dentro de la raíz de
  la fórmula del módulo.
```

### 20 — Problema: verificar v·v = |v|²

```
metadata:
  materia: "matematicas"
  tema: "producto_escalar"
  nivel: "avanzado"
  tags: ["producto_escalar", "problema"]

variables:
  k: random(1, 6)
  x: 3 * k
  oy: 4 * k

respuesta: (5 * k) * (5 * k)
tipo: input
tolerancia_abs: 0

enunciado: "Un vector tiene componentes ({x}, {oy}) y módulo {5 * k}. ¿Cuánto vale v · v?"

pasos:
  - "{x}² + {oy}² = {(x * x) + (oy * oy)}"
  - "({5 * k})² = {(5 * k) * (5 * k)}"

explicacion: |
  Ambos cálculos dan el mismo resultado: v · v = |v|².
```

### 21 — Aplicación: trabajo de una fuerza perpendicular

```
metadata:
  materia: "matematicas"
  tema: "producto_escalar"
  nivel: "avanzado"
  tags: ["producto_escalar", "vocabulario"]

enunciado: "Si una fuerza actúa exactamente perpendicular a la dirección del desplazamiento de un objeto, ¿cuánto trabajo realiza esa fuerza?"
tipo: mc
opciones_explicitas:
  - "Cero, sin importar cuán grande sea la fuerza"
  - "El máximo posible"
  - "Depende únicamente de la magnitud de la fuerza"
respuesta: "Cero, sin importar cuán grande sea la fuerza"

explicacion: |
  W = F×d×cos(90°) = F×d×0 = 0: es la aplicación física directa de la
  perpendicularidad en el producto escalar.
```

### 22 — Problema: dos vectores con producto escalar negativo

```
metadata:
  materia: "matematicas"
  tema: "producto_escalar"
  nivel: "avanzado"
  tags: ["producto_escalar", "problema"]

variables:
  a: random(5, 15)
  b: random(1, 4)

respuesta: falso
tipo: vf

enunciado: "Los vectores ({a}, 0) y (-{b}, 0) tienen producto escalar {0 - (a * b)}. ¿Forman un ángulo agudo entre sí?"

explicacion: |
  El producto escalar es negativo: el ángulo entre ellos es obtuso (de
  hecho, son opuestos, apuntan en sentidos contrarios sobre el mismo
  eje).
```

### 23 — Producto escalar positivo implica ángulo agudo

```
metadata:
  materia: "matematicas"
  tema: "producto_escalar"
  nivel: "intermedio"
  tags: ["producto_escalar"]

respuesta: verdadero
tipo: vf

enunciado: "Si el producto escalar de dos vectores da un número positivo, el ángulo entre ellos es agudo (menor a 90°)."

explicacion: |
  Es la relación directa entre el signo del producto y el tipo de
  ángulo.
```

### 24 — Producto escalar negativo implica ángulo obtuso

```
metadata:
  materia: "matematicas"
  tema: "producto_escalar"
  nivel: "intermedio"
  tags: ["producto_escalar"]

respuesta: verdadero
tipo: vf

enunciado: "Si el producto escalar de dos vectores da un número negativo, el ángulo entre ellos es obtuso (mayor a 90°)."

explicacion: |
  Es la relación directa entre el signo del producto y el tipo de
  ángulo.
```

### 25 — El producto escalar no es lo mismo que sumar vectores

```
metadata:
  materia: "matematicas"
  tema: "producto_escalar"
  nivel: "basico"
  tags: ["producto_escalar"]

respuesta: verdadero
tipo: vf

enunciado: "El producto escalar entre dos vectores es una operación distinta de la suma de vectores: la suma da otro vector, el producto escalar da un número."

explicacion: |
  Son dos operaciones distintas entre los mismos dos objetos.
```

### 26 — Cierre: para qué sirve el producto escalar

```
metadata:
  materia: "matematicas"
  tema: "producto_escalar"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve el producto escalar entre vectores?"
tipo: mc
opciones_explicitas:
  - "Para detectar perpendicularidad, medir el ángulo entre vectores, y calcular magnitudes físicas como el trabajo de una fuerza"
  - "Sólo sirve para sumar vectores más rápido"
  - "No tiene ninguna aplicación fuera de la matemática pura"
respuesta: "Para detectar perpendicularidad, medir el ángulo entre vectores, y calcular magnitudes físicas como el trabajo de una fuerza"

explicacion: |
  Es la última pieza de este bloque de vectores antes de cruzar a
  Física.
```
