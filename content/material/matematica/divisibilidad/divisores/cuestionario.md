# Matemática — Divisores (cuestionario, 22 preguntas VBLang)

> Tema: `N4` (parte). Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es un divisor

```
metadata:
  materia: "matematicas"
  tema: "divisores"
  nivel: "basico"
  tags: ["divisores", "vocabulario"]

enunciado: "¿Qué significa que B sea divisor de A?"
tipo: mc
opciones_explicitas:
  - "A dividido B da resto 0"
  - "B es más grande que A"
  - "B es múltiplo de A"
respuesta: "A dividido B da resto 0"

explicacion: |
  B es divisor de A si la división A ÷ B es exacta (resto 0).
```

### 2 — ¿Es divisor?

```
metadata:
  materia: "matematicas"
  tema: "divisores"
  nivel: "basico"
  tags: ["divisores"]

variables:
  b: random(2, 9)
  k: random(2, 20)
  a: b * k + uno_de([0, 0, 1])
  resto: a - floor(a / b) * b

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Es {b} divisor de {a}?"

explicacion: |
  B es divisor de A si A ÷ B no deja resto.
```

### 3 — ¿Es divisor? (otro caso)

```
metadata:
  materia: "matematicas"
  tema: "divisores"
  nivel: "basico"
  tags: ["divisores"]

variables:
  a: random(20, 200)
  b: random(2, 15)
  resto: a - floor(a / b) * b

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Es {b} divisor de {a}?"

explicacion: |
  Hay que hacer la división y ver si el resto da 0.
```

### 4 — Cuántos divisores tiene un número

```
metadata:
  materia: "matematicas"
  tema: "divisores"
  nivel: "intermedio"
  tags: ["divisores"]

variables:
  n: random(2, 40)

respuesta: largo(divisores(n))
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos divisores tiene el número {n} (contando el 1 y el propio {n})?"

explicacion: |
  Se cuentan todos los números que dividen a {n} exactamente.
```

### 5 — Cuántos divisores tiene un número (más grande)

```
metadata:
  materia: "matematicas"
  tema: "divisores"
  nivel: "avanzado"
  tags: ["divisores"]

variables:
  n: random(40, 100)

respuesta: largo(divisores(n))
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos divisores tiene el número {n}?"

explicacion: |
  Con números más grandes conviene probar sistemáticamente desde el 1 en
  adelante, sin saltear ninguno.
```

### 6 — El divisor más chico

```
metadata:
  materia: "matematicas"
  tema: "divisores"
  nivel: "basico"
  tags: ["divisores"]

variables:
  n: random(2, 999)

respuesta: 1
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el divisor más chico de {n} (mayor que 0)?"

explicacion: |
  El 1 es divisor de todos los números, así que siempre es el más chico
  posible.
```

### 7 — El divisor más grande

```
metadata:
  materia: "matematicas"
  tema: "divisores"
  nivel: "basico"
  tags: ["divisores"]

variables:
  n: random(2, 999)

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el divisor más grande de {n}?"

explicacion: |
  Ningún divisor puede ser mayor que el propio número: el más grande
  siempre es él mismo.
```

### 8 — Reconocer un no-divisor

```
metadata:
  materia: "matematicas"
  tema: "divisores"
  nivel: "intermedio"
  tags: ["divisores"]

variables:
  n: random(20, 60)
  divs: divisores(n)
  reales: n_de(divs, 2)
  falso_candidato: n + 1

restricciones:
  - largo(divs) >= 4

respuesta: falso_candidato
tipo: mc
opciones_explicitas:
  - primero(reales)
  - ultimo(reales)
  - falso_candidato

enunciado: "¿Cuál de estos tres números NO es divisor de {n}?"

explicacion: |
  Ningún número mayor que {n} puede ser divisor de {n}.
```

### 9 — Comparar divisores en común

```
metadata:
  materia: "matematicas"
  tema: "divisores"
  nivel: "avanzado"
  tags: ["divisores"]

variables:
  d: random(2, 9)
  a: d * random(2, 10)
  b: d * random(2, 10)

respuesta: verdadero
tipo: vf

enunciado: "¿Es {d} divisor de {a} y también divisor de {b} al mismo tiempo?"

explicacion: |
  Un mismo número puede ser divisor de varios números a la vez: acá {d}
  divide a los dos.
```

### 10 — Divisor y múltiplo, la misma relación al revés

```
metadata:
  materia: "matematicas"
  tema: "divisores"
  nivel: "basico"
  tags: ["divisores", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Si A es múltiplo de B, entonces B es divisor de A."

explicacion: |
  Son la misma afirmación mirada desde los dos lados.
```

### 11 — El 1 es divisor de todo

```
metadata:
  materia: "matematicas"
  tema: "divisores"
  nivel: "basico"
  tags: ["divisores", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El 1 es divisor de cualquier número."

explicacion: |
  n ÷ 1 = n, sin resto, para cualquier n.
```

### 12 — Todo número es divisor de sí mismo

```
metadata:
  materia: "matematicas"
  tema: "divisores"
  nivel: "basico"
  tags: ["divisores", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Todo número es divisor de sí mismo."

explicacion: |
  n ÷ n = 1, resto 0, para cualquier n distinto de 0.
```

### 13 — Elegir el número con más divisores

```
metadata:
  materia: "matematicas"
  tema: "divisores"
  nivel: "avanzado"
  tags: ["divisores"]

variables:
  a: random(10, 40)
  b: random(10, 40)

restricciones:
  - largo(divisores(a)) != largo(divisores(b))

respuesta: (largo(divisores(a)) > largo(divisores(b)))
tipo: vf

enunciado: "¿Tiene {a} más divisores que {b}?"

explicacion: |
  Hay que contar los divisores de cada uno y comparar las cantidades.
```

### 14 — Divisores de un número primo

```
metadata:
  materia: "matematicas"
  tema: "divisores"
  nivel: "intermedio"
  tags: ["divisores"]

variables:
  n: uno_de([2, 3, 5, 7, 11, 13, 17, 19, 23])

respuesta: 2
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos divisores tiene el número {n}?"

explicacion: |
  {n} sólo tiene dos divisores: el 1 y él mismo — esa es, de hecho, la
  definición de número primo.
```

### 15 — Divisores de 1

```
metadata:
  materia: "matematicas"
  tema: "divisores"
  nivel: "basico"
  tags: ["divisores"]

respuesta: 1
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos divisores tiene el número 1?"

explicacion: |
  El 1 sólo se divide exactamente por sí mismo: tiene un único divisor.
```

### 16 — Problema: repartir en partes iguales, sin resto

```
metadata:
  materia: "matematicas"
  tema: "divisores"
  nivel: "intermedio"
  tags: ["divisores", "problema"]

variables:
  n: random(20, 60)
  divs: divisores(n)
  candidato: n_de(divs, 1)

respuesta: verdadero
tipo: vf

enunciado: "¿Se pueden repartir {n} figuritas entre {primero(candidato)} chicos sin que sobre ninguna?"

explicacion: |
  Se puede repartir sin que sobre nada exactamente cuando la cantidad de
  chicos es un divisor del total.
```

### 17 — Problema: NO se puede repartir sin resto

```
metadata:
  materia: "matematicas"
  tema: "divisores"
  nivel: "intermedio"
  tags: ["divisores", "problema"]

variables:
  n: random(20, 60)
  divs: divisores(n)
  no_divisor: n + 1

respuesta: falso
tipo: vf

enunciado: "¿Se pueden repartir {n} figuritas entre {no_divisor} chicos sin que sobre ninguna?"

explicacion: |
  {no_divisor} es mayor que {n}, así que ni siquiera le tocaría una
  figurita entera a cada uno — mucho menos un reparto exacto.
```

### 18 — Elegir cuál tiene ese divisor

```
metadata:
  materia: "matematicas"
  tema: "divisores"
  nivel: "intermedio"
  tags: ["divisores"]

variables:
  d: random(2, 9)
  base: d * random(3, 30)
  otro1: base + 1
  otro2: base + 2

respuesta: base
tipo: mc
opciones_explicitas:
  - base
  - otro1
  - otro2

enunciado: "¿Cuál de estos tres números tiene a {d} como divisor?"

explicacion: |
  Sólo uno de los tres es exactamente {d} × algún entero.
```

### 19 — Completar un divisor que falta

```
metadata:
  materia: "matematicas"
  tema: "divisores"
  nivel: "intermedio"
  tags: ["divisores"]

variables:
  d: random(2, 9)
  k: random(2, 9)
  n: d * k

tipo: completar
enunciado: "Nombrá un divisor de {n} que no sea ni 1 ni {n}."
respuestas_validas:
  - d
  - k

explicacion: |
  Cualquier divisor de la lista completa, salvo el 1 y el propio número,
  sirve como respuesta.
```

### 20 — Ordenar divisores de menor a mayor

```
metadata:
  materia: "matematicas"
  tema: "divisores"
  nivel: "basico"
  tags: ["divisores", "orden"]

tipo: ordenar
enunciado: "Ordená de menor a mayor los divisores de 12."
opciones_explicitas:
  - "6"
  - "1"
  - "3"
  - "2"
respuesta_orden: ["1", "2", "3", "6"]

explicacion: |
  12 tiene 6 divisores en total (1, 2, 3, 4, 6, 12); estos cuatro,
  ordenados de menor a mayor, quedan 1, 2, 3, 6.
```

### 21 — Un divisor nunca es mayor que el número

```
metadata:
  materia: "matematicas"
  tema: "divisores"
  nivel: "basico"
  tags: ["divisores", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un divisor nunca puede ser mayor que el número que divide."

explicacion: |
  Si B fuera mayor que A, B no podría entrar ni una vez completa dentro
  de A — no sería divisor.
```

### 22 — Divisores comunes entre dos números

```
metadata:
  materia: "matematicas"
  tema: "divisores"
  nivel: "avanzado"
  tags: ["divisores"]

variables:
  d: random(2, 9)
  a: d * random(2, 10)
  b: d * random(2, 10)

respuesta: d
tipo: input
tolerancia_abs: 0

enunciado: "Nombrá un número (distinto de 1) que sea divisor de {a} y de {b} al mismo tiempo."

explicacion: |
  Buscar divisores en común entre dos números es el primer paso para
  calcular el MCD, más adelante en el mapa.
```
