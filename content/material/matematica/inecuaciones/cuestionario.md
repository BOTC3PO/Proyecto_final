# Matemática — Inecuaciones: identidad, ecuación e inecuación (cuestionario, 28 preguntas VBLang)

> Tema: `A16` (Tronco 2 — Algebraico). Ver `teoria.md` en esta misma carpeta.

Cuatro bloques: clasificar una igualdad/desigualdad (opción múltiple, con
texto fijo como opción — confirmado que el DSL lo admite entre
comillas), verificar si un valor pertenece al conjunto solución
(verdadero/falso, dejando que el propio evaluador compare), hallar el
valor frontera de una inecuación (igual que resolver una ecuación), y el
conjunto solución completo usando `concatenar()` para armar el texto de
la respuesta.

---

### 1 — Clasificar: identidad simple

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "basico"
  tags: ["clasificar", "identidad", "opcion_multiple"]

variables:
  a: random(2, 10)
  b: random(1, 20)

respuesta: "Identidad"
tipo: mc
opciones_explicitas:
  - "Identidad"
  - "Ecuación"
  - "Inecuación"

enunciado: "¿{a}(x + {b}) = {a}x + {a * b} es una identidad, una ecuación o una inecuación?"

explicacion: |
  Distribuyendo el lado izquierdo se obtiene exactamente el lado
  derecho — es verdadera para cualquier x, así que es una identidad.
```

### 2 — Clasificar: identidad por combinar semejantes

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "basico"
  tags: ["clasificar", "identidad", "opcion_multiple"]

variables:
  a: random(2, 10)
  c: random(2, 10)
  b: random(1, 20)

respuesta: "Identidad"
tipo: mc
opciones_explicitas:
  - "Identidad"
  - "Ecuación"
  - "Inecuación"

enunciado: "¿{a}x + {b} + {c}x = {a + c}x + {b} es una identidad, una ecuación o una inecuación?"

explicacion: |
  El lado izquierdo, al combinar los términos con x, da exactamente el
  lado derecho — verdadera para cualquier x.
```

### 3 — Clasificar: ecuación simple

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "basico"
  tags: ["clasificar", "ecuacion", "opcion_multiple"]

variables:
  a: random(2, 10)
  b: random(1, 20)
  c: random(21, 60)

respuesta: "Ecuación"
tipo: mc
opciones_explicitas:
  - "Identidad"
  - "Ecuación"
  - "Inecuación"

enunciado: "¿{a}x + {b} = {c} es una identidad, una ecuación o una inecuación?"

explicacion: |
  Tiene "=" y los dos lados no son la misma expresión — se cumple sólo
  para un valor puntual de x, así que es una ecuación.
```

### 4 — Clasificar: ecuación con resta

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "basico"
  tags: ["clasificar", "ecuacion", "opcion_multiple"]

variables:
  a: random(2, 10)
  b: random(1, 20)
  c: random(1, 30)

respuesta: "Ecuación"
tipo: mc
opciones_explicitas:
  - "Identidad"
  - "Ecuación"
  - "Inecuación"

enunciado: "¿{a}x − {b} = {c} es una identidad, una ecuación o una inecuación?"

explicacion: |
  Tiene una única solución puntual — es una ecuación.
```

### 5 — Clasificar: inecuación con "menor que"

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "basico"
  tags: ["clasificar", "inecuacion", "opcion_multiple"]

variables:
  a: random(2, 10)
  b: random(1, 20)
  c: random(21, 60)

respuesta: "Inecuación"
tipo: mc
opciones_explicitas:
  - "Identidad"
  - "Ecuación"
  - "Inecuación"

enunciado: "¿{a}x + {b} < {c} es una identidad, una ecuación o una inecuación?"

explicacion: |
  Usa un símbolo de desigualdad en vez de "=" — es una inecuación, y su
  solución es un rango de valores, no uno solo.
```

### 6 — Clasificar: inecuación con "mayor que"

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "basico"
  tags: ["clasificar", "inecuacion", "opcion_multiple"]

variables:
  a: random(2, 10)
  b: random(1, 20)
  c: random(1, 30)

respuesta: "Inecuación"
tipo: mc
opciones_explicitas:
  - "Identidad"
  - "Ecuación"
  - "Inecuación"

enunciado: "¿{a}x − {b} > {c} es una identidad, una ecuación o una inecuación?"

explicacion: |
  Cualquier símbolo <, >, ≤ o ≥ marca una inecuación.
```

### 7 — Verificar pertenencia: "menor que", coeficiente positivo

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  a: random(2, 10)
  b: random(1, 20)
  sol: random(1, 20)
  c: a * sol + b
  offset: uno_de([-5, -2, -1, 1, 2, 5])
  val: sol + offset

respuesta: (a * val + b) < c
tipo: vf

enunciado: "¿x = {val} es solución de {a}x + {b} < {c}?"

explicacion: |
  Se reemplaza x por {val} y se compara: {a}×{val}+{b} = {a * val + b},
  contra {c}.
```

### 8 — Verificar pertenencia: "mayor que", coeficiente positivo

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  a: random(2, 10)
  b: random(1, 20)
  sol: random(1, 20)
  c: a * sol + b
  offset: uno_de([-5, -2, -1, 1, 2, 5])
  val: sol + offset

respuesta: (a * val + b) > c
tipo: vf

enunciado: "¿x = {val} es solución de {a}x + {b} > {c}?"

explicacion: |
  Se reemplaza x por {val} en {a}x + {b} y se compara el resultado con
  {c}.
```

### 9 — Verificar pertenencia: coeficiente negativo, "menor que"

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "avanzado"
  tags: ["verificacion", "signos", "verdadero_falso"]

variables:
  a: random(-10, -2)
  b: random(1, 20)
  sol: random(1, 20)
  c: a * sol + b
  offset: uno_de([-5, -2, -1, 1, 2, 5])
  val: sol + offset

respuesta: (a * val + b) < c
tipo: vf

enunciado: "¿x = {val} es solución de {a}x + {b} < {c}?"

explicacion: |
  Con coeficiente negativo, aumentar x hace que {a}x + {b} disminuya —
  al revés que con coeficiente positivo.
```

### 10 — Verificar pertenencia: coeficiente negativo, "mayor que"

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "avanzado"
  tags: ["verificacion", "signos", "verdadero_falso"]

variables:
  a: random(-10, -2)
  b: random(1, 20)
  sol: random(1, 20)
  c: a * sol + b
  offset: uno_de([-5, -2, -1, 1, 2, 5])
  val: sol + offset

respuesta: (a * val + b) > c
tipo: vf

enunciado: "¿x = {val} es solución de {a}x + {b} > {c}?"

explicacion: |
  Reemplazar x por {val} y comparar {a}×{val}+{b} con {c}, con cuidado
  porque {a} es negativo.
```

### 11 — Verificar pertenencia: "menor o igual", coeficiente positivo

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  a: random(2, 10)
  b: random(1, 20)
  sol: random(1, 20)
  c: a * sol + b
  offset: uno_de([-4, -2, 0, 1, 3])
  val: sol + offset

respuesta: (a * val + b) <= c
tipo: vf

enunciado: "¿x = {val} es solución de {a}x + {b} ≤ {c}?"

explicacion: |
  Con ≤, el propio valor frontera (offset 0) también es solución — a
  diferencia de < estricto.
```

### 12 — Verificar pertenencia: "mayor o igual", coeficiente negativo

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "avanzado"
  tags: ["verificacion", "signos", "verdadero_falso"]

variables:
  a: random(-10, -2)
  b: random(1, 20)
  sol: random(1, 20)
  c: a * sol + b
  offset: uno_de([-4, -2, 0, 1, 3])
  val: sol + offset

respuesta: (a * val + b) >= c
tipo: vf

enunciado: "¿x = {val} es solución de {a}x + {b} ≥ {c}?"

explicacion: |
  Con coeficiente negativo, el conjunto solución de "≥" queda del lado
  contrario al que daría un coeficiente positivo.
```

### 13 — Verificar pertenencia: "mayor o igual", coeficiente positivo

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  a: random(2, 10)
  b: random(1, 20)
  sol: random(1, 20)
  c: a * sol + b
  offset: uno_de([-4, -2, 0, 1, 3])
  val: sol + offset

respuesta: (a * val + b) >= c
tipo: vf

enunciado: "¿x = {val} es solución de {a}x + {b} ≥ {c}?"

explicacion: |
  Se reemplaza x por {val} y se compara con {c} usando ≥.
```

### 14 — Verificar pertenencia: "menor o igual", coeficiente negativo

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "avanzado"
  tags: ["verificacion", "signos", "verdadero_falso"]

variables:
  a: random(-10, -2)
  b: random(1, 20)
  sol: random(1, 20)
  c: a * sol + b
  offset: uno_de([-4, -2, 0, 1, 3])
  val: sol + offset

respuesta: (a * val + b) <= c
tipo: vf

enunciado: "¿x = {val} es solución de {a}x + {b} ≤ {c}?"

explicacion: |
  Mismo procedimiento de siempre: reemplazar y comparar, con {a}
  negativo.
```

### 15 — Hallar el valor frontera: coeficiente positivo

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "intermedio"
  tags: ["frontera"]

variables:
  a: random(2, 10)
  b: random(1, 20)
  sol: random(1, 20)
  c: a * sol + b

respuesta: (c - b) / a
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: {a}x + {b} < {c}. ¿Cuál es el valor frontera de x (el límite del conjunto solución)?"

pasos:
  - "Restar {b}: {a}x < {c - b}"
  - "Dividir por {a}: x < {(c - b) / a}"

explicacion: |
  El valor frontera se calcula igual que resolver la ecuación asociada
  {a}x + {b} = {c}.
```

### 16 — Hallar el valor frontera: "mayor que"

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "intermedio"
  tags: ["frontera"]

variables:
  a: random(2, 10)
  b: random(1, 20)
  sol: random(1, 20)
  c: a * sol + b

respuesta: (c - b) / a
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: {a}x + {b} > {c}. ¿Cuál es el valor frontera de x?"

explicacion: |
  x = ({c} − {b}) / {a}, el mismo cálculo que para "<".
```

### 17 — Hallar el valor frontera: coeficiente negativo

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "avanzado"
  tags: ["frontera", "signos"]

variables:
  a: random(-10, -2)
  b: random(1, 20)
  sol: random(1, 20)
  c: a * sol + b

respuesta: (c - b) / a
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: {a}x + {b} < {c}. ¿Cuál es el valor frontera de x?"

pasos:
  - "Restar {b}: {a}x < {c - b}"
  - "Dividir por {a} (negativo): x = {c - b} / {a} = {(c - b) / a}"

explicacion: |
  El valor frontera se calcula igual sea {a} positivo o negativo — lo
  único que cambia con el signo es la dirección de la desigualdad, no el
  número.
```

### 18 — Hallar el valor frontera: coeficiente negativo, "mayor que"

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "avanzado"
  tags: ["frontera", "signos"]

variables:
  a: random(-10, -2)
  b: random(1, 20)
  sol: random(1, 20)
  c: a * sol + b

respuesta: (c - b) / a
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: {a}x + {b} > {c}. ¿Cuál es el valor frontera de x?"

explicacion: |
  x = ({c} − {b}) / {a}.
```

### 19 — Hallar el valor frontera: con resta

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "intermedio"
  tags: ["frontera"]

variables:
  a: random(2, 10)
  b: random(1, 20)
  sol: random(1, 20)
  c: a * sol - b

respuesta: (c + b) / a
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: {a}x − {b} < {c}. ¿Cuál es el valor frontera de x?"

explicacion: |
  Primero se suma {b} a los dos lados, después se divide por {a}.
```

### 20 — Hallar el valor frontera: con "menor o igual"

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "intermedio"
  tags: ["frontera"]

variables:
  a: random(2, 10)
  b: random(1, 20)
  sol: random(1, 20)
  c: a * sol + b

respuesta: (c - b) / a
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: {a}x + {b} ≤ {c}. ¿Cuál es el valor frontera de x?"

explicacion: |
  El procedimiento para hallar el valor frontera no cambia entre < y ≤ —
  sólo cambia si ese valor frontera está incluido o no en la solución.
```

### 21 — Concepto: la regla del signo negativo

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Al resolver una inecuación, si se multiplican (o dividen) los dos lados por un número negativo, la desigualdad se da vuelta."

explicacion: |
  Es la única diferencia real respecto a resolver una ecuación.
```

### 22 — Concepto: identidad vs. ecuación

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Una identidad es verdadera sólo para un valor puntual de x, igual que una ecuación."

explicacion: |
  Al revés: una identidad es verdadera para CUALQUIER valor de x. La que
  tiene un valor puntual como solución es la ecuación.
```

### 23 — Concepto: el conjunto solución de una inecuación

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El conjunto solución de una inecuación suele ser un rango de infinitos valores, no un único número."

explicacion: |
  Por eso se escribe como "x < 3" y no como "x = 3".
```

### 24 — Concepto: qué pasa si no se da vuelta la desigualdad

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Si al dividir los dos lados de una inecuación por un número negativo no se da vuelta la desigualdad, el conjunto solución puede quedar completamente al revés."

explicacion: |
  El resultado incluiría valores que no cumplen la inecuación original, y
  excluiría valores que sí la cumplen.
```

### 25 — Conjunto solución completo: coeficiente positivo, "menor que"

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "intermedio"
  tags: ["conjunto_solucion", "opcion_multiple"]

variables:
  a: random(2, 10)
  b: random(1, 20)
  sol: random(1, 20)
  c: a * sol + b

respuesta: concatenar("x < ", sol)
tipo: mc
opciones_explicitas:
  - concatenar("x < ", sol)
  - concatenar("x > ", sol)
  - concatenar("x = ", sol)

enunciado: "¿Cuál es el conjunto solución de {a}x + {b} < {c}?"

explicacion: |
  Coeficiente positivo: la desigualdad no se da vuelta al despejar.
```

### 26 — Conjunto solución completo: coeficiente positivo, "mayor que"

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "intermedio"
  tags: ["conjunto_solucion", "opcion_multiple"]

variables:
  a: random(2, 10)
  b: random(1, 20)
  sol: random(1, 20)
  c: a * sol + b

respuesta: concatenar("x > ", sol)
tipo: mc
opciones_explicitas:
  - concatenar("x > ", sol)
  - concatenar("x < ", sol)
  - concatenar("x = ", sol)

enunciado: "¿Cuál es el conjunto solución de {a}x + {b} > {c}?"

explicacion: |
  Coeficiente positivo: se despeja igual que en una ecuación, sin dar
  vuelta la desigualdad.
```

### 27 — Conjunto solución completo: coeficiente negativo (se da vuelta)

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "avanzado"
  tags: ["conjunto_solucion", "signos", "opcion_multiple"]

variables:
  a: random(-10, -2)
  b: random(1, 20)
  sol: random(1, 20)
  c: a * sol + b

respuesta: concatenar("x > ", sol)
tipo: mc
opciones_explicitas:
  - concatenar("x > ", sol)
  - concatenar("x < ", sol)
  - concatenar("x = ", sol)

enunciado: "¿Cuál es el conjunto solución de {a}x + {b} < {c}? (atención al signo de {a})"

explicacion: |
  Como {a} es negativo, al dividir para despejar x la desigualdad se da
  vuelta: de "<" pasa a ">".
```

### 28 — Conjunto solución completo: coeficiente negativo, "mayor que" (se da vuelta)

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "avanzado"
  tags: ["conjunto_solucion", "signos", "opcion_multiple"]

variables:
  a: random(-10, -2)
  b: random(1, 20)
  sol: random(1, 20)
  c: a * sol + b

respuesta: concatenar("x < ", sol)
tipo: mc
opciones_explicitas:
  - concatenar("x < ", sol)
  - concatenar("x > ", sol)
  - concatenar("x = ", sol)

enunciado: "¿Cuál es el conjunto solución de {a}x + {b} > {c}? (atención al signo de {a})"

explicacion: |
  Como {a} es negativo, ">" se da vuelta a "<" al despejar x.
```
