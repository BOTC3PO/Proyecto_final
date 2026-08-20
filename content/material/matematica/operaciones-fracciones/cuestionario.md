# Matemática — Operaciones con fracciones (cuestionario, 28 preguntas VBLang)

> Tema: `N7`. Ver `teoria.md` en esta misma carpeta. Usa los builtins
> `mcm(a, b)` y `mcd(a, b)` del DSL.

---

### 1 — Suma con el mismo denominador

```
metadata:
  materia: "matematicas"
  tema: "operaciones_fracciones"
  nivel: "basico"
  tags: ["operaciones_fracciones", "suma"]

variables:
  b: random(5, 12)
  a: random(1, b - 3)
  c: random(1, b - a - 1)

respuesta: a + c
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el numerador de {a}/{b} + {c}/{b}?"

pasos:
  - "Mismo denominador: se suman los numeradores. {a} + {c} = {a + c} (el denominador queda {b})"

explicacion: |
  Con el mismo denominador, se suman los numeradores y se deja el mismo
  denominador.
```

### 2 — Resta con el mismo denominador

```
metadata:
  materia: "matematicas"
  tema: "operaciones_fracciones"
  nivel: "basico"
  tags: ["operaciones_fracciones", "resta"]

variables:
  b: random(5, 12)
  a: random(2, b - 1)
  c: random(1, a - 1)

respuesta: a - c
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el numerador de {a}/{b} - {c}/{b}?"

explicacion: |
  Con el mismo denominador, se restan los numeradores y se deja el mismo
  denominador.
```

### 3 — Hallar el común denominador

```
metadata:
  materia: "matematicas"
  tema: "operaciones_fracciones"
  nivel: "intermedio"
  tags: ["operaciones_fracciones", "suma"]

variables:
  b: random(2, 12)
  d: random(2, 12)

respuesta: mcm(b, d)
tipo: input
tolerancia_abs: 0

enunciado: "Para sumar una fracción de denominador {b} con otra de denominador {d}, ¿cuál es el común denominador más chico?"

explicacion: |
  El común denominador más chico es el MCM de los dos denominadores.
```

### 4 — Amplificar la primera fracción al común denominador

```
metadata:
  materia: "matematicas"
  tema: "operaciones_fracciones"
  nivel: "intermedio"
  tags: ["operaciones_fracciones", "suma"]

variables:
  a: random(1, 5)
  b: random(2, 9)
  d: random(2, 9)
  comun: mcm(b, d)

respuesta: a * (comun / b)
tipo: input
tolerancia_abs: 0

enunciado: "Para sumar {a}/{b} con una fracción de denominador {d}, hay que amplificar {a}/{b} hasta el común denominador {comun}. ¿Cuál queda el nuevo numerador?"

pasos:
  - "{comun} ÷ {b} = {comun / b} (factor de amplificación). {a} × {comun / b} = {a * (comun / b)}"

explicacion: |
  El numerador se multiplica por el mismo factor que hizo falta para
  llegar del denominador original al común.
```

### 5 — Amplificar la segunda fracción al común denominador

```
metadata:
  materia: "matematicas"
  tema: "operaciones_fracciones"
  nivel: "intermedio"
  tags: ["operaciones_fracciones", "suma"]

variables:
  c: random(1, 5)
  b: random(2, 9)
  d: random(2, 9)
  comun: mcm(b, d)

respuesta: c * (comun / d)
tipo: input
tolerancia_abs: 0

enunciado: "Para sumar {c}/{d} con una fracción de denominador {b}, hay que amplificar {c}/{d} hasta el común denominador {comun}. ¿Cuál queda el nuevo numerador?"

explicacion: |
  Mismo procedimiento que con la primera fracción, ahora aplicado a la
  segunda.
```

### 6 — Suma completa con distinto denominador

```
metadata:
  materia: "matematicas"
  tema: "operaciones_fracciones"
  nivel: "avanzado"
  tags: ["operaciones_fracciones", "suma"]

variables:
  a: random(1, 4)
  b: random(2, 6)
  c: random(1, 4)
  d: random(2, 6)
  comun: mcm(b, d)
  num_a: a * (comun / b)
  num_c: c * (comun / d)

respuesta: num_a + num_c
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el numerador de {a}/{b} + {c}/{d}, expresado sobre el común denominador {comun}?"

pasos:
  - "{a}/{b} = {num_a}/{comun}. {c}/{d} = {num_c}/{comun}. {num_a} + {num_c} = {num_a + num_c}"

explicacion: |
  Primero se amplifican las dos fracciones al común denominador, y recién
  ahí se suman los numeradores.
```

### 7 — Resta completa con distinto denominador

```
metadata:
  materia: "matematicas"
  tema: "operaciones_fracciones"
  nivel: "avanzado"
  tags: ["operaciones_fracciones", "resta"]

variables:
  a: random(2, 5)
  b: random(2, 6)
  c: random(1, 4)
  d: random(2, 6)
  comun: mcm(b, d)
  num_a: a * (comun / b)
  num_c: c * (comun / d)

restricciones:
  - num_a > num_c

respuesta: num_a - num_c
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el numerador de {a}/{b} - {c}/{d}, expresado sobre el común denominador {comun}?"

explicacion: |
  Igual que en la suma, primero se amplifican las dos fracciones al común
  denominador, y recién ahí se restan los numeradores.
```

### 8 — Multiplicación de fracciones: el numerador

```
metadata:
  materia: "matematicas"
  tema: "operaciones_fracciones"
  nivel: "basico"
  tags: ["operaciones_fracciones", "multiplicacion"]

variables:
  a: random(1, 9)
  b: random(2, 9)
  c: random(1, 9)
  d: random(2, 9)

respuesta: a * c
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el numerador de {a}/{b} × {c}/{d}?"

explicacion: |
  Se multiplican los numeradores entre sí.
```

### 9 — Multiplicación de fracciones: el denominador

```
metadata:
  materia: "matematicas"
  tema: "operaciones_fracciones"
  nivel: "basico"
  tags: ["operaciones_fracciones", "multiplicacion"]

variables:
  a: random(1, 9)
  b: random(2, 9)
  c: random(1, 9)
  d: random(2, 9)

respuesta: b * d
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el denominador de {a}/{b} × {c}/{d}?"

explicacion: |
  Se multiplican los denominadores entre sí.
```

### 10 — La recíproca de una fracción

```
metadata:
  materia: "matematicas"
  tema: "operaciones_fracciones"
  nivel: "basico"
  tags: ["operaciones_fracciones", "division"]

variables:
  a: random(1, 9)
  b: random(2, 9)

respuesta: b
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el numerador de la recíproca de {a}/{b}?"

explicacion: |
  La recíproca "da vuelta" la fracción: el denominador original pasa a
  ser el nuevo numerador.
```

### 11 — División de fracciones: el numerador

```
metadata:
  materia: "matematicas"
  tema: "operaciones_fracciones"
  nivel: "intermedio"
  tags: ["operaciones_fracciones", "division"]

variables:
  a: random(1, 9)
  b: random(2, 9)
  c: random(1, 9)
  d: random(2, 9)

respuesta: a * d
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el numerador de {a}/{b} ÷ {c}/{d}?"

pasos:
  - "Dividir es multiplicar por la recíproca: {a}/{b} × {d}/{c}. Numerador: {a} × {d} = {a * d}"

explicacion: |
  Se multiplica por la recíproca de la segunda fracción: numerador por
  denominador de la que divide.
```

### 12 — División de fracciones: el denominador

```
metadata:
  materia: "matematicas"
  tema: "operaciones_fracciones"
  nivel: "intermedio"
  tags: ["operaciones_fracciones", "division"]

variables:
  a: random(1, 9)
  b: random(2, 9)
  c: random(1, 9)
  d: random(2, 9)

respuesta: b * c
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el denominador de {a}/{b} ÷ {c}/{d}?"

pasos:
  - "Dividir es multiplicar por la recíproca: {a}/{b} × {d}/{c}. Denominador: {b} × {c} = {b * c}"

explicacion: |
  Se multiplica por la recíproca: denominador por numerador de la que
  divide.
```

### 13 — Sumar requiere el mismo denominador (verdadero/falso)

```
metadata:
  materia: "matematicas"
  tema: "operaciones_fracciones"
  nivel: "basico"
  tags: ["operaciones_fracciones", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Para sumar o restar fracciones, primero hay que llevarlas al mismo denominador."

explicacion: |
  Sólo se pueden sumar (o restar) directamente los numeradores cuando el
  denominador ya es el mismo.
```

### 14 — Multiplicar NO requiere el mismo denominador (verdadero/falso)

```
metadata:
  materia: "matematicas"
  tema: "operaciones_fracciones"
  nivel: "basico"
  tags: ["operaciones_fracciones", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Para multiplicar fracciones NO hace falta que tengan el mismo denominador."

explicacion: |
  A diferencia de la suma y la resta, multiplicar fracciones se puede
  hacer directamente, sin importar los denominadores.
```

### 15 — Dividir es multiplicar por la recíproca (verdadero/falso)

```
metadata:
  materia: "matematicas"
  tema: "operaciones_fracciones"
  nivel: "basico"
  tags: ["operaciones_fracciones", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Dividir por una fracción es lo mismo que multiplicar por su recíproca."

explicacion: |
  Es la regla clave para dividir fracciones: dar vuelta la segunda
  fracción y multiplicar.
```

### 16 — Simplificar el resultado de una multiplicación

```
metadata:
  materia: "matematicas"
  tema: "operaciones_fracciones"
  nivel: "avanzado"
  tags: ["operaciones_fracciones", "multiplicacion", "simplificar"]

variables:
  a: random(1, 6)
  b: random(2, 6)
  c: random(1, 6)
  d: random(2, 6)
  num: a * c
  den: b * d
  simplificador: mcd(num, den)

respuesta: num / simplificador
tipo: input
tolerancia_abs: 0

enunciado: "{a}/{b} × {c}/{d} da como resultado {num}/{den}. Simplificado al máximo (dividiendo por el MCD), ¿cuál queda el numerador?"

pasos:
  - "MCD({num}, {den}) = {simplificador}. {num} ÷ {simplificador} = {num / simplificador}"

explicacion: |
  Después de multiplicar, conviene simplificar el resultado al máximo
  usando su MCD.
```

### 17 — Problema: sumar partes de una tarea

```
metadata:
  materia: "matematicas"
  tema: "operaciones_fracciones"
  nivel: "intermedio"
  tags: ["operaciones_fracciones", "problema"]

variables:
  b: random(5, 10)
  a: random(1, b - 3)
  c: random(1, b - a - 1)

respuesta: a + c
tipo: input
tolerancia_abs: 0

enunciado: "El lunes hiciste {a}/{b} de un trabajo, y el martes hiciste {c}/{b} más. ¿Cuál es el numerador de la fracción total hecha (sobre {b})?"

explicacion: |
  Sumar partes hechas en distintos momentos es sumar fracciones — acá con
  el mismo denominador.
```

### 18 — Problema: la mitad de un tercio

```
metadata:
  materia: "matematicas"
  tema: "operaciones_fracciones"
  nivel: "intermedio"
  tags: ["operaciones_fracciones", "multiplicacion", "problema"]

variables:
  b: random(2, 9)
  d: random(2, 9)

respuesta: b * d
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el denominador de \"1/{b} de 1/{d}\" de una torta (es decir, 1/{b} × 1/{d})?"

explicacion: |
  "Una fracción de otra fracción" es multiplicar: los denominadores se
  multiplican entre sí.
```

### 19 — Problema: repartir una fracción en partes iguales

```
metadata:
  materia: "matematicas"
  tema: "operaciones_fracciones"
  nivel: "avanzado"
  tags: ["operaciones_fracciones", "division", "problema"]

variables:
  a: random(1, 5)
  b: random(2, 9)
  personas: random(2, 6)

respuesta: b * personas
tipo: input
tolerancia_abs: 0

enunciado: "Tenés {a}/{b} de una torta y la repartís en partes iguales entre {personas} personas. ¿Cuál es el denominador de la fracción que le toca a cada una (es decir, {a}/{b} ÷ {personas})?"

pasos:
  - "{a}/{b} ÷ {personas} = {a}/{b} × 1/{personas}: el denominador queda {b} × {personas} = {b * personas}"

explicacion: |
  Repartir una fracción entre varias personas es dividir esa fracción por
  la cantidad de personas.
```

### 20 — Elegir el resultado correcto de una suma

```
metadata:
  materia: "matematicas"
  tema: "operaciones_fracciones"
  nivel: "intermedio"
  tags: ["operaciones_fracciones", "suma"]

variables:
  b: random(5, 12)
  a: random(1, b - 3)
  c: random(1, b - a - 1)
  correcto: a + c

respuesta: correcto
tipo: mc
opciones_explicitas:
  - correcto
  - a * c
  - correcto + 1

enunciado: "¿Cuál es el numerador correcto de {a}/{b} + {c}/{b}?"

explicacion: |
  Con el mismo denominador, se suman los numeradores — no se multiplican.
```

### 21 — Elegir el resultado correcto de una multiplicación

```
metadata:
  materia: "matematicas"
  tema: "operaciones_fracciones"
  nivel: "intermedio"
  tags: ["operaciones_fracciones", "multiplicacion"]

variables:
  a: random(1, 8)
  b: random(2, 8)
  c: random(1, 8)
  d: random(2, 8)
  correcto: a * c

respuesta: correcto
tipo: mc
opciones_explicitas:
  - correcto
  - a + c
  - correcto + 1

enunciado: "¿Cuál es el numerador correcto de {a}/{b} × {c}/{d}?"

explicacion: |
  Al multiplicar fracciones, los numeradores se multiplican — no se
  suman.
```

### 22 — Verificar una suma con distinto denominador (con error a veces)

```
metadata:
  materia: "matematicas"
  tema: "operaciones_fracciones"
  nivel: "avanzado"
  tags: ["operaciones_fracciones", "verificacion"]

variables:
  a: random(1, 4)
  b: random(2, 6)
  c: random(1, 4)
  d: random(2, 6)
  comun: mcm(b, d)
  num_a: a * (comun / b)
  num_c: c * (comun / d)
  correcto: num_a + num_c
  error: uno_de([0, 0, 0, 1, -1])
  mostrado: correcto + error

respuesta: (mostrado == correcto)
tipo: vf

enunciado: "¿Está bien resuelto esto? {a}/{b} + {c}/{d} = {mostrado}/{comun}"

explicacion: |
  Hay que amplificar cada fracción al común denominador y sumar recién
  ahí los numeradores.
```

### 23 — Verificar una multiplicación (con error a veces)

```
metadata:
  materia: "matematicas"
  tema: "operaciones_fracciones"
  nivel: "intermedio"
  tags: ["operaciones_fracciones", "verificacion"]

variables:
  a: random(1, 8)
  b: random(2, 8)
  c: random(1, 8)
  d: random(2, 8)
  correcto: a * c
  error: uno_de([0, 0, 0, 1, -1])
  mostrado: correcto + error

respuesta: (mostrado == correcto)
tipo: vf

enunciado: "¿Está bien resuelto esto? {a}/{b} × {c}/{d} = {mostrado}/{b * d}"

explicacion: |
  El numerador correcto es el producto de los dos numeradores originales.
```

### 24 — Completar el común denominador que falta

```
metadata:
  materia: "matematicas"
  tema: "operaciones_fracciones"
  nivel: "intermedio"
  tags: ["operaciones_fracciones", "suma"]

variables:
  b: random(2, 9)
  d: random(2, 9)

tipo: completar
enunciado: "Para sumar 1/{b} + 1/{d}, ¿cuál conviene usar como común denominador (el más chico posible)?"
respuestas_validas:
  - mcm(b, d)

explicacion: |
  El común denominador más chico posible es el MCM de {b} y {d}.
```

### 25 — Elegir la recíproca correcta

```
metadata:
  materia: "matematicas"
  tema: "operaciones_fracciones"
  nivel: "basico"
  tags: ["operaciones_fracciones", "division"]

variables:
  a: random(1, 9)
  b: random(2, 9)

respuesta: b
tipo: mc
opciones_explicitas:
  - b
  - a
  - a + b

enunciado: "¿Cuál es el numerador de la recíproca de {a}/{b}?"

explicacion: |
  La recíproca intercambia numerador y denominador.
```

### 26 — Resta con distinto denominador (otro caso)

```
metadata:
  materia: "matematicas"
  tema: "operaciones_fracciones"
  nivel: "avanzado"
  tags: ["operaciones_fracciones", "resta"]

variables:
  b: random(2, 8)
  d: random(2, 8)
  comun: mcm(b, d)
  num_a: random(2, comun - 1)
  num_c: random(1, num_a - 1)

respuesta: num_a - num_c
tipo: input
tolerancia_abs: 0

enunciado: "Dos fracciones, ya amplificadas sobre el común denominador {comun}, tienen numeradores {num_a} y {num_c}. ¿Cuál es el numerador de la resta?"

explicacion: |
  Una vez que las dos fracciones ya están sobre el mismo denominador,
  restar es tan simple como restar los numeradores.
```

### 27 — Problema: cuánto queda de un depósito

```
metadata:
  materia: "matematicas"
  tema: "operaciones_fracciones"
  nivel: "avanzado"
  tags: ["operaciones_fracciones", "resta", "problema"]

variables:
  b: random(5, 10)
  usado: random(1, b - 1)

respuesta: b - usado
tipo: input
tolerancia_abs: 0

enunciado: "Un tanque estaba lleno y se usó {usado}/{b} de su capacidad. ¿Cuál es el numerador de la fracción que queda (sobre {b})?"

pasos:
  - "El tanque lleno es {b}/{b}: {b}/{b} - {usado}/{b} = ({b} - {usado})/{b} = {b - usado}/{b}"

explicacion: |
  Lo que queda es 1 entero (el todo) menos la fracción usada.
```

### 28 — Cierre: las cuatro operaciones con fracciones

```
metadata:
  materia: "matematicas"
  tema: "operaciones_fracciones"
  nivel: "basico"
  tags: ["operaciones_fracciones", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Sumar y restar fracciones necesita el mismo denominador; multiplicar y dividir no."

explicacion: |
  Es la diferencia clave entre las dos parejas de operaciones con
  fracciones.
```
