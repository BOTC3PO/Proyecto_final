# Matemática — Despejar una variable de una fórmula (cuestionario, 28 preguntas VBLang)

> Tema: `A4` (Tronco 2 — Algebraico). Ver `teoria.md` en esta misma carpeta.

Cada fórmula real (perímetro, área, velocidad, densidad, interés) se
sortea con valores que garantizan un resultado entero exacto al despejar
la letra pedida. El bloque final (verdadero/falso) evalúa si una fórmula
de despeje propuesta es la correcta o un error típico.

---

### 1 — Perímetro del rectángulo, despejar la base

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "basico"
  tags: ["perimetro", "rectangulo"]

variables:
  h: random(1, 30)
  b_sol: random(1, 30)
  P: 2 * (b_sol + h)

respuesta: P / 2 - h
tipo: input
tolerancia_abs: 0

enunciado: "El perímetro de un rectángulo es P = 2(b + h). Si P = {P} y h = {h}, ¿cuánto vale b?"

pasos:
  - "Dividir por 2: P/2 = b + h → {P}/2 = {P / 2}"
  - "Restar h: b = {P / 2} − {h} = {P / 2 - h}"

explicacion: |
  Se deshacen las operaciones en orden inverso: primero la división por
  2, después la resta de h.
```

### 2 — Perímetro del rectángulo, despejar la altura

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "basico"
  tags: ["perimetro", "rectangulo"]

variables:
  b: random(1, 30)
  h_sol: random(1, 30)
  P: 2 * (b + h_sol)

respuesta: P / 2 - b
tipo: input
tolerancia_abs: 0

enunciado: "El perímetro de un rectángulo es P = 2(b + h). Si P = {P} y b = {b}, ¿cuánto vale h?"

explicacion: |
  h = P/2 − b, el mismo procedimiento con los roles de b y h invertidos.
```

### 3 — Área del rectángulo, despejar la base

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "basico"
  tags: ["area", "rectangulo"]

variables:
  h: random(2, 20)
  b_sol: random(1, 20)
  A: b_sol * h

respuesta: A / h
tipo: input
tolerancia_abs: 0

enunciado: "El área de un rectángulo es A = b · h. Si A = {A} y h = {h}, ¿cuánto vale b?"

explicacion: |
  Como h multiplica a b, se deshace dividiendo: b = A/h.
```

### 4 — Área del rectángulo, despejar la altura

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "basico"
  tags: ["area", "rectangulo"]

variables:
  b: random(2, 20)
  h_sol: random(1, 20)
  A: b * h_sol

respuesta: A / b
tipo: input
tolerancia_abs: 0

enunciado: "El área de un rectángulo es A = b · h. Si A = {A} y b = {b}, ¿cuánto vale h?"

explicacion: |
  h = A/b.
```

### 5 — Área del triángulo, despejar la base

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "intermedio"
  tags: ["area", "triangulo"]

variables:
  h: random(1, 10) * 2
  b_sol: random(1, 20)
  A: (b_sol * h) / 2

respuesta: 2 * A / h
tipo: input
tolerancia_abs: 0

enunciado: "El área de un triángulo es A = (b · h) / 2. Si A = {A} y h = {h}, ¿cuánto vale b?"

pasos:
  - "Multiplicar por 2: 2A = b · h → {2 * A}"
  - "Dividir por h: b = {2 * A} / {h} = {2 * A / h}"

explicacion: |
  El 2 del denominador se despeja multiplicando primero.
```

### 6 — Área del triángulo, despejar la altura

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "intermedio"
  tags: ["area", "triangulo"]

variables:
  b: random(1, 10) * 2
  h_sol: random(1, 20)
  A: (b * h_sol) / 2

respuesta: 2 * A / b
tipo: input
tolerancia_abs: 0

enunciado: "El área de un triángulo es A = (b · h) / 2. Si A = {A} y b = {b}, ¿cuánto vale h?"

explicacion: |
  h = 2A / b.
```

### 7 — Velocidad, despejar la distancia

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "basico"
  tags: ["velocidad", "fisica"]

variables:
  v: random(2, 20)
  t: random(2, 10)

respuesta: v * t
tipo: input
tolerancia_abs: 0

enunciado: "v = d / t. Si v = {v} y t = {t}, ¿cuánto vale d?"

explicacion: |
  d ya está multiplicando implícitamente: d = v · t.
```

### 8 — Velocidad, despejar el tiempo (letra en el denominador)

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "intermedio"
  tags: ["velocidad", "fisica", "denominador"]

variables:
  v: random(2, 20)
  t_sol: random(1, 15)
  d: v * t_sol

respuesta: d / v
tipo: input
tolerancia_abs: 0

enunciado: "v = d / t. Si v = {v} y d = {d}, ¿cuánto vale t?"

pasos:
  - "Pasar t multiplicando: v · t = d"
  - "Dividir por v: t = {d} / {v} = {d / v}"

explicacion: |
  Cuando la letra a despejar divide, primero se la pasa multiplicando y
  recién después se despeja — no se invierte la fracción directamente.
```

### 9 — Velocidad, despejar la velocidad

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "basico"
  tags: ["velocidad", "fisica"]

variables:
  t: random(2, 10)
  v_sol: random(2, 20)
  d: v_sol * t

respuesta: d / t
tipo: input
tolerancia_abs: 0

enunciado: "v = d / t. Si d = {d} y t = {t}, ¿cuánto vale v?"

explicacion: |
  v ya está despejada en la fórmula original: v = d/t.
```

### 10 — Densidad, despejar la masa

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "basico"
  tags: ["densidad", "fisica"]

variables:
  dens: random(2, 10)
  V: random(2, 15)

respuesta: dens * V
tipo: input
tolerancia_abs: 0

enunciado: "d = m / V. Si d = {dens} y V = {V}, ¿cuánto vale m?"

explicacion: |
  m = d · V.
```

### 11 — Densidad, despejar el volumen (letra en el denominador)

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "intermedio"
  tags: ["densidad", "fisica", "denominador"]

variables:
  dens: random(2, 10)
  V_sol: random(2, 15)
  m: dens * V_sol

respuesta: m / dens
tipo: input
tolerancia_abs: 0

enunciado: "d = m / V. Si d = {dens} y m = {m}, ¿cuánto vale V?"

pasos:
  - "Pasar V multiplicando: d · V = m"
  - "Dividir por d: V = {m} / {dens} = {m / dens}"

explicacion: |
  Mismo caso que despejar t en v = d/t: la letra divide, así que primero
  pasa multiplicando.
```

### 12 — Interés simple, despejar el capital

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "intermedio"
  tags: ["interes", "tres_letras"]

variables:
  i: random(2, 10)
  t: random(2, 8)
  C_sol: random(1, 20)
  I: C_sol * i * t

respuesta: I / (i * t)
tipo: input
tolerancia_abs: 0

enunciado: "I = C · i · t. Si I = {I}, i = {i} y t = {t}, ¿cuánto vale C?"

pasos:
  - "Dividir por i y por t (las dos letras que multiplican): C = {I} / ({i}×{t}) = {I / (i * t)}"

explicacion: |
  Cuando hay dos letras multiplicando además de la que se despeja, hay
  que dividir por las dos — no sólo por una de ellas.
```

### 13 — Interés simple, despejar la tasa

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "intermedio"
  tags: ["interes", "tres_letras"]

variables:
  C: random(2, 20)
  t: random(2, 8)
  i_sol: random(1, 10)
  I: C * i_sol * t

respuesta: I / (C * t)
tipo: input
tolerancia_abs: 0

enunciado: "I = C · i · t. Si I = {I}, C = {C} y t = {t}, ¿cuánto vale i?"

explicacion: |
  i = I / (C · t).
```

### 14 — Interés simple, despejar el tiempo

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "intermedio"
  tags: ["interes", "tres_letras"]

variables:
  C: random(2, 20)
  i: random(2, 10)
  t_sol: random(1, 8)
  I: C * i * t_sol

respuesta: I / (C * i)
tipo: input
tolerancia_abs: 0

enunciado: "I = C · i · t. Si I = {I}, C = {C} e i = {i}, ¿cuánto vale t?"

explicacion: |
  t = I / (C · i).
```

### 15 — Costo total, despejar la cantidad

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "intermedio"
  tags: ["problema", "dos_pasos"]

variables:
  precio: random(2, 15)
  envio: random(1, 20)
  cant_sol: random(1, 20)
  T: precio * cant_sol + envio

respuesta: (T - envio) / precio
tipo: input
tolerancia_abs: 0

enunciado: "El costo total es T = c·p + e (c: cantidad, p: precio unitario, e: envío). Si T = {T}, p = {precio}, e = {envio}, ¿cuánto vale c?"

explicacion: |
  Mismo procedimiento que a·x + b = c: restar el envío, dividir por el
  precio unitario.
```

### 16 — Costo total, despejar el envío

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "basico"
  tags: ["problema", "dos_pasos"]

variables:
  precio: random(2, 15)
  cant: random(1, 20)
  envio_sol: random(1, 20)
  T: precio * cant + envio_sol

respuesta: T - precio * cant
tipo: input
tolerancia_abs: 0

enunciado: "T = c·p + e. Si T = {T}, c = {cant} y p = {precio}, ¿cuánto vale e?"

explicacion: |
  e = T − c·p.
```

### 17 — Costo total, despejar el precio unitario

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "intermedio"
  tags: ["problema", "dos_pasos"]

variables:
  cant: random(1, 20)
  envio: random(1, 20)
  precio_sol: random(2, 15)
  T: cant * precio_sol + envio

respuesta: (T - envio) / cant
tipo: input
tolerancia_abs: 0

enunciado: "T = c·p + e. Si T = {T}, c = {cant} y e = {envio}, ¿cuánto vale p?"

explicacion: |
  p = (T − e) / c.
```

### 18 — Perímetro del triángulo equilátero

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "basico"
  tags: ["perimetro", "una_letra"]

variables:
  l_sol: random(1, 30)
  P: 3 * l_sol

respuesta: P / 3
tipo: input
tolerancia_abs: 0

enunciado: "El perímetro de un triángulo equilátero es P = 3l. Si P = {P}, ¿cuánto vale l?"

explicacion: |
  l = P/3.
```

### 19 — Área del trapecio, despejar la base mayor

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "avanzado"
  tags: ["area", "trapecio", "parentesis"]

variables:
  b: random(1, 15)
  h: random(1, 10) * 2
  B_sol: random(1, 20)
  A: ((B_sol + b) * h) / 2

respuesta: 2 * A / h - b
tipo: input
tolerancia_abs: 0

enunciado: "El área de un trapecio es A = ((B + b)·h) / 2. Si A = {A}, b = {b} y h = {h}, ¿cuánto vale B (la base mayor)?"

pasos:
  - "Multiplicar por 2 y dividir por h: B + b = 2A/h = {2 * A / h}"
  - "Restar b: B = {2 * A / h} − {b} = {2 * A / h - b}"

explicacion: |
  B queda sola restando b del resultado — no dividiendo por (h − b), que
  sería un error de paréntesis.
```

### 20 — Área del trapecio, despejar la altura

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "avanzado"
  tags: ["area", "trapecio", "parentesis"]

variables:
  B: random(10, 25)
  b: random(1, 9)
  h_sol: random(1, 10) * 2
  A: ((B + b) * h_sol) / 2

respuesta: 2 * A / (B + b)
tipo: input
tolerancia_abs: 0

enunciado: "A = ((B + b)·h) / 2. Si A = {A}, B = {B} y b = {b}, ¿cuánto vale h?"

pasos:
  - "Multiplicar por 2: 2A = (B + b)·h"
  - "Dividir por (B + b): h = {2 * A} / {B + b} = {2 * A / (B + b)}"

explicacion: |
  (B + b) se trata como un solo bloque al dividir, sin separarlo.
```

### 21 — Verificar despeje del área del rectángulo (correcto)

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "basico"
  tags: ["verificacion", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Al despejar h de A = b · h, se obtiene h = A / b."

explicacion: |
  h multiplica a b para dar A, así que se despeja dividiendo: h = A/b.
```

### 22 — Verificar despeje del perímetro (error común)

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "intermedio"
  tags: ["verificacion", "error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Al despejar b de P = 2(b + h), se obtiene b = P/2 + h."

explicacion: |
  La forma correcta es b = P/2 − h (se resta h, no se suma) — error
  típico de cambiar el signo al mover un término.
```

### 23 — Verificar despeje de la velocidad (error de inversión)

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "intermedio"
  tags: ["verificacion", "error_comun", "denominador", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Al despejar t de v = d/t, se obtiene t = v/d."

explicacion: |
  La forma correcta es t = d/v. Invertir directamente sin pasar t
  multiplicando primero da vuelta el resultado.
```

### 24 — Verificar despeje de la densidad (correcto)

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "basico"
  tags: ["verificacion", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Al despejar m de d = m/V, se obtiene m = d · V."

explicacion: |
  m es la que divide por V para dar d, así que se despeja multiplicando:
  m = d·V.
```

### 25 — Verificar despeje del interés simple (error de no dividir por las dos letras)

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "avanzado"
  tags: ["verificacion", "error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Al despejar C de I = C · i · t, se obtiene C = I · i · t."

explicacion: |
  La forma correcta es C = I / (i·t): hay que dividir por las dos letras
  que multiplican, no multiplicarlas.
```

### 26 — Verificación numérica: área del rectángulo

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "intermedio"
  tags: ["verificacion", "numerico", "verdadero_falso"]

variables:
  b: random(2, 20)
  h: random(2, 20)
  A: b * h
  propuesta: uno_de([A / b, A * b])

respuesta: (propuesta == h)
tipo: vf

enunciado: "El área de un rectángulo es A = {A} y su base es b = {b}. ¿Es correcto que la altura sea h = {propuesta}?"

explicacion: |
  La altura correcta es A/b — si la opción mostrada usa A·b en cambio,
  es el error de multiplicar en vez de dividir.
```

### 27 — Verificación numérica: perímetro del rectángulo

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "intermedio"
  tags: ["verificacion", "numerico", "verdadero_falso"]

variables:
  b: random(1, 30)
  h: random(1, 30)
  P: 2 * (b + h)
  propuesta: uno_de([P / 2 - h, P / 2 + h])

respuesta: (propuesta == b)
tipo: vf

enunciado: "El perímetro de un rectángulo es P = {P} y su altura es h = {h}. ¿Es correcto que la base sea b = {propuesta}?"

explicacion: |
  La base correcta es P/2 − h — sumar h en vez de restarlo es el error
  típico de este despeje.
```

### 28 — Verificación numérica: velocidad

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "avanzado"
  tags: ["verificacion", "numerico", "denominador", "verdadero_falso"]

variables:
  v: random(2, 20)
  t: random(2, 10)
  d: v * t
  propuesta: uno_de([d / v, d * v])

respuesta: (propuesta == t)
tipo: vf

enunciado: "v = d/t. Si v = {v} y d = {d}, ¿es correcto que t = {propuesta}?"

explicacion: |
  El tiempo correcto es d/v — multiplicar en vez de dividir es el error
  típico cuando la letra despejada estaba en el denominador.
```
