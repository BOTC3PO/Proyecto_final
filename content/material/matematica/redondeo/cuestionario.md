# Matemática — Redondeo (cuestionario, 22 preguntas VBLang)

> Tema: `N8` (mitad). Ver `teoria.md` en esta misma carpeta. Usa el
> builtin `redondear(valor, cifras_decimales)` del DSL, ya usado en
> plantillas reales del repo (ver `matematicas-aritmetica-oficiales.ts`,
> `REGLA_TRES_DSL`).

---

### 1 — Redondear a 1 cifra decimal

```
metadata:
  materia: "matematicas"
  tema: "redondeo"
  nivel: "basico"
  tags: ["redondeo"]

variables:
  entero: random(1, 50)
  h: random(1, 9)
  m: random(0, 9)
  n: entero + h / 10 + m / 100

respuesta: redondear(n, 1)
tipo: input
tolerancia_abs: 0.01

enunciado: "Redondeá {n} a 1 cifra decimal."

pasos:
  - "Se mira la segunda cifra decimal ({m}) para decidir si la primera sube o queda igual: {redondear(n, 1)}"

explicacion: |
  Se mira la cifra que sigue a la posición buscada: 5 o más, sube; menos
  de 5, queda igual.
```

### 2 — Redondear a 2 cifras decimales

```
metadata:
  materia: "matematicas"
  tema: "redondeo"
  nivel: "basico"
  tags: ["redondeo"]

variables:
  entero: random(1, 50)
  h: random(1, 9)
  m: random(0, 9)
  mil: random(0, 9)
  n: entero + h / 10 + m / 100 + mil / 1000

respuesta: redondear(n, 2)
tipo: input
tolerancia_abs: 0.001

enunciado: "Redondeá {n} a 2 cifras decimales."

pasos:
  - "Se mira la tercera cifra decimal ({mil}) para decidir: {redondear(n, 2)}"

explicacion: |
  Es el mismo criterio, mirando ahora la tercera cifra decimal.
```

### 3 — Redondear a 2 cifras decimales (caso frontera)

```
metadata:
  materia: "matematicas"
  tema: "redondeo"
  nivel: "intermedio"
  tags: ["redondeo"]

variables:
  entero: random(1, 50)
  h: random(0, 9)
  m: random(0, 9)
  n: entero + h / 10 + m / 100 + 5 / 1000

respuesta: redondear(n, 2)
tipo: input
tolerancia_abs: 0.001

enunciado: "Redondeá {n} a 2 cifras decimales."

pasos:
  - "La tercera cifra decimal es 5: la segunda cifra sube."

explicacion: |
  Cuando la cifra que decide es exactamente 5, la posición anterior sube.
```

### 4 — Redondear al entero más cercano

```
metadata:
  materia: "matematicas"
  tema: "redondeo"
  nivel: "basico"
  tags: ["redondeo"]

variables:
  entero: random(1, 100)
  h: random(0, 9)
  n: entero + h / 10

respuesta: redondear(n, 0)
tipo: input
tolerancia_abs: 0.01

enunciado: "Redondeá {n} al entero más cercano."

pasos:
  - "Se mira la primera cifra decimal ({h}) para decidir: {redondear(n, 0)}"

explicacion: |
  Redondear al entero es mirar sólo la primera cifra decimal.
```

### 5 — Redondear al entero más cercano (caso frontera)

```
metadata:
  materia: "matematicas"
  tema: "redondeo"
  nivel: "intermedio"
  tags: ["redondeo"]

variables:
  entero: random(1, 100)
  n: entero + 5 / 10

respuesta: redondear(n, 0)
tipo: input
tolerancia_abs: 0.01

enunciado: "Redondeá {n} al entero más cercano."

pasos:
  - "La primera cifra decimal es 5: la parte entera sube."

explicacion: |
  El caso frontera (cifra exactamente 5) sigue subiendo, igual que con
  enteros.
```

### 6 — La regla es la misma que con enteros

```
metadata:
  materia: "matematicas"
  tema: "redondeo"
  nivel: "basico"
  tags: ["redondeo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La regla de redondeo de decimales es la misma que la de enteros: se mira la cifra siguiente a la posición buscada."

explicacion: |
  No es una regla nueva: es la misma idea de `../valor-posicional/`,
  aplicada del otro lado de la coma.
```

### 7 — Redondear y truncar pueden coincidir

```
metadata:
  materia: "matematicas"
  tema: "redondeo"
  nivel: "intermedio"
  tags: ["redondeo", "truncar"]

variables:
  entero: random(1, 50)
  h: random(0, 4)
  m: random(0, 9)
  n: entero + h / 10 + m / 100
  truncado: floor(n * 10) / 10

respuesta: (redondear(n, 1) == truncado)
tipo: vf

enunciado: "¿Coinciden redondear {n} a 1 cifra decimal y truncarlo a 1 cifra decimal?"

explicacion: |
  Cuando la cifra que decide el redondeo es menor a 5, redondear y
  truncar dan el mismo resultado (los dos "se quedan" con la cifra
  anterior).
```

### 8 — Truncar un decimal

```
metadata:
  materia: "matematicas"
  tema: "redondeo"
  nivel: "intermedio"
  tags: ["redondeo", "truncar"]

variables:
  entero: random(1, 50)
  h: random(0, 9)
  m: random(5, 9)
  n: entero + h / 10 + m / 100

respuesta: floor(n * 10) / 10
tipo: input
tolerancia_abs: 0.01

enunciado: "Truncá {n} a 1 cifra decimal (sin redondear, cortando directo)."

explicacion: |
  Truncar corta directo, sin mirar si la cifra siguiente es 5 o más — a
  diferencia de redondear, siempre "se queda" con la cifra anterior tal
  cual está.
```

### 9 — Truncar y redondear NO siempre coinciden

```
metadata:
  materia: "matematicas"
  tema: "redondeo"
  nivel: "intermedio"
  tags: ["redondeo", "truncar"]

variables:
  entero: random(1, 50)
  h: random(0, 9)
  m: random(5, 9)
  n: entero + h / 10 + m / 100
  truncado: floor(n * 10) / 10

respuesta: (redondear(n, 1) == truncado)
tipo: vf

enunciado: "¿Coinciden redondear {n} a 1 cifra decimal y truncarlo a 1 cifra decimal?"

explicacion: |
  Acá la cifra que decide es 5 o más, así que redondear hace subir la
  cifra anterior — pero truncar no sube nunca. Por eso no coinciden.
```

### 10 — Problema: redondear un precio a centavos

```
metadata:
  materia: "matematicas"
  tema: "redondeo"
  nivel: "intermedio"
  tags: ["redondeo", "problema"]

variables:
  entero: random(10, 500)
  c1: random(0, 9)
  c2: random(0, 9)
  c3: random(0, 9)
  precio: entero + c1 / 10 + c2 / 100 + c3 / 1000

respuesta: redondear(precio, 2)
tipo: input
tolerancia_abs: 0.001

enunciado: "Un cálculo da un precio de ${precio}. Redondeado a centavos (2 cifras decimales), ¿cuánto queda?"

explicacion: |
  Los precios en pesos se redondean a 2 cifras decimales porque no
  existen fracciones de centavo.
```

### 11 — Problema: redondear un promedio

```
metadata:
  materia: "matematicas"
  tema: "redondeo"
  nivel: "avanzado"
  tags: ["redondeo", "problema"]

variables:
  a: random(1, 10)
  b: random(1, 10)
  c: random(1, 10)
  promedio: (a + b + c) / 3

respuesta: redondear(promedio, 2)
tipo: input
tolerancia_abs: 0.001

enunciado: "El promedio de {a}, {b} y {c} da {promedio}. Redondeado a 2 cifras decimales, ¿cuánto queda?"

explicacion: |
  Un promedio rara vez da un número "redondo": conviene redondearlo a una
  cantidad razonable de cifras decimales.
```

### 12 — Elegir el redondeo correcto

```
metadata:
  materia: "matematicas"
  tema: "redondeo"
  nivel: "intermedio"
  tags: ["redondeo"]

variables:
  entero: random(1, 50)
  h: random(0, 9)
  m: random(0, 9)
  n: entero + h / 10 + m / 100
  correcto: redondear(n, 1)

respuesta: correcto
tipo: mc
opciones_explicitas:
  - correcto
  - floor(n * 10) / 10
  - correcto + 0.1

enunciado: "¿Cuál es el redondeo correcto de {n} a 1 cifra decimal?"

explicacion: |
  Las otras opciones son truncar (no mirar la cifra siguiente) o un error
  de un décimo de más.
```

### 13 — Verificar un redondeo (con error a veces)

```
metadata:
  materia: "matematicas"
  tema: "redondeo"
  nivel: "intermedio"
  tags: ["redondeo", "verificacion"]

variables:
  entero: random(1, 50)
  h: random(0, 9)
  m: random(0, 9)
  n: entero + h / 10 + m / 100
  correcto: redondear(n, 1)
  error: uno_de([0, 0, 0, 0.1, -0.1])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 0.01)
tipo: vf

enunciado: "¿Está bien redondeado {n} a 1 cifra decimal, si el resultado dado es {mostrado}?"

explicacion: |
  Hay que volver a aplicar la regla (mirar la segunda cifra decimal) y
  comparar.
```

### 14 — Redondear a 3 cifras decimales

```
metadata:
  materia: "matematicas"
  tema: "redondeo"
  nivel: "avanzado"
  tags: ["redondeo"]

variables:
  entero: random(1, 20)
  h: random(0, 9)
  m: random(0, 9)
  mil: random(0, 9)
  diez_mil: random(0, 9)
  n: entero + h / 10 + m / 100 + mil / 1000 + diez_mil / 10000

respuesta: redondear(n, 3)
tipo: input
tolerancia_abs: 0.0001

enunciado: "Redondeá {n} a 3 cifras decimales."

explicacion: |
  Con más cifras decimales, el procedimiento es el mismo: mirar la cifra
  que sigue a la posición buscada.
```

### 15 — El redondeo puede subir o quedar igual (verdadero/falso)

```
metadata:
  materia: "matematicas"
  tema: "redondeo"
  nivel: "basico"
  tags: ["redondeo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Al redondear, la cifra de la posición buscada sólo puede subir en 1 o quedar igual — nunca baja."

explicacion: |
  Redondear nunca resta a la cifra buscada: como mucho, la deja igual (si
  la siguiente es menor a 5) o la sube en 1 (si es 5 o más).
```

### 16 — Completar: qué cifra hace que el redondeo suba

```
metadata:
  materia: "matematicas"
  tema: "redondeo"
  nivel: "intermedio"
  tags: ["redondeo"]

tipo: completar
enunciado: "¿A partir de qué cifra (0 a 9) la posición anterior sube al redondear? Nombrá la más chica que hace subir."
respuestas_validas:
  - 5

explicacion: |
  A partir del 5 (inclusive), la posición anterior sube.
```

### 17 — Ordenar decimales redondeados

```
metadata:
  materia: "matematicas"
  tema: "redondeo"
  nivel: "basico"
  tags: ["redondeo", "orden"]

tipo: ordenar
enunciado: "Estos números ya están redondeados a 1 cifra decimal. Ordenalos de menor a mayor."
opciones_explicitas:
  - "3,4"
  - "3,1"
  - "3,8"
  - "3,2"
respuesta_orden: ["3,1", "3,2", "3,4", "3,8"]

explicacion: |
  Una vez redondeados, se ordenan igual que cualquier lista de decimales.
```

### 18 — Redondear a 0 cifras decimales

```
metadata:
  materia: "matematicas"
  tema: "redondeo"
  nivel: "basico"
  tags: ["redondeo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Redondear un número a 0 cifras decimales es lo mismo que redondearlo al entero más cercano."

explicacion: |
  0 cifras decimales significa "sin ninguna cifra después de la coma": es
  exactamente el entero más cercano.
```

### 19 — Redondear pierde precisión (concepto)

```
metadata:
  materia: "matematicas"
  tema: "redondeo"
  nivel: "basico"
  tags: ["redondeo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Redondear un número casi siempre pierde algo de precisión: el número redondeado no es exactamente igual al original (salvo que ya terminara justo ahí)."

explicacion: |
  Redondear es una aproximación útil, no magia: se gana simplicidad a
  cambio de exactitud.
```

### 20 — Elegir cuál redondeo está mal hecho

```
metadata:
  materia: "matematicas"
  tema: "redondeo"
  nivel: "avanzado"
  tags: ["redondeo"]

variables:
  entero: random(1, 30)
  m: random(5, 9)
  n: entero + m / 10
  correcto: redondear(n, 0)
  mal_hecho: entero

respuesta: mal_hecho
tipo: mc
opciones_explicitas:
  - correcto
  - mal_hecho

enunciado: "Para redondear {n} al entero más cercano, ¿cuál de estos dos resultados está mal (no aplicó la regla)?"

explicacion: |
  {mal_hecho} simplemente descartó la parte decimal sin mirar si tenía
  que subir — eso es truncar, no redondear.
```

### 21 — Redondear no cambia si ya está "justo"

```
metadata:
  materia: "matematicas"
  tema: "redondeo"
  nivel: "intermedio"
  tags: ["redondeo"]

variables:
  entero: random(1, 999)

respuesta: entero
tipo: input
tolerancia_abs: 0.01

enunciado: "Redondeá {entero} (un número entero) a 2 cifras decimales."

explicacion: |
  Un número que ya no tiene cifras decimales de sobra no cambia al
  redondearlo: queda igual.
```

### 22 — Qué es redondear (cierre)

```
metadata:
  materia: "matematicas"
  tema: "redondeo"
  nivel: "basico"
  tags: ["redondeo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Redondear es aproximar un número a una cantidad determinada de cifras, mirando la cifra siguiente para decidir si la última que queda sube o se mantiene igual."

explicacion: |
  Es la idea central de todo el tema, aplicada tanto a enteros como a
  decimales.
```
