# Matemática — Regla del 6 (cuestionario, 20 preguntas VBLang)

> Tema: `N4` (parte). Ver `teoria.md` en esta misma carpeta.

---

### 1 — ¿Es divisible por 6?

```
metadata:
  materia: "matematicas"
  tema: "regla_del_6"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_6"]

variables:
  n: random(10, 999)
  resto2: n - floor(n / 2) * 2
  resto3: n - floor(n / 3) * 3

respuesta: (n - floor(n / 6) * 6 == 0)
tipo: vf

enunciado: "¿Es {n} divisible por 6?"

explicacion: |
  Tiene que cumplir la regla del 2 (ser par) y la regla del 3 (suma de
  cifras múltiplo de 3) al mismo tiempo.
```

### 2 — ¿Es divisible por 6? (número grande)

```
metadata:
  materia: "matematicas"
  tema: "regla_del_6"
  nivel: "avanzado"
  tags: ["divisibilidad", "regla_del_6"]

variables:
  n: random(1000, 98765)
  resto2: n - floor(n / 2) * 2
  resto3: n - floor(n / 3) * 3

respuesta: (n - floor(n / 6) * 6 == 0)
tipo: vf

enunciado: "¿Es {n} divisible por 6?"

explicacion: |
  Con números más grandes la regla no cambia: hay que chequear las dos
  condiciones.
```

### 3 — El primer chequeo (regla del 2)

```
metadata:
  materia: "matematicas"
  tema: "regla_del_6"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_6"]

variables:
  n: random(10, 999)
  resto2: n - floor(n / 2) * 2

respuesta: (resto2 == 0)
tipo: vf

enunciado: "Para saber si {n} es divisible por 6, el primer chequeo es la regla del 2. ¿Es {n} par?"

explicacion: |
  Es el primero de los dos chequeos obligatorios para la regla del 6.
```

### 4 — El segundo chequeo (regla del 3)

```
metadata:
  materia: "matematicas"
  tema: "regla_del_6"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_6"]

variables:
  n: random(10, 999)
  resto3: n - floor(n / 3) * 3

respuesta: (resto3 == 0)
tipo: vf

enunciado: "Para saber si {n} es divisible por 6, el segundo chequeo es la regla del 3. ¿La suma de las cifras de {n} es múltiplo de 3?"

explicacion: |
  Es el segundo de los dos chequeos obligatorios para la regla del 6.
```

### 5 — Par pero no divisible por 6 (el error común)

```
metadata:
  materia: "matematicas"
  tema: "regla_del_6"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_6"]

variables:
  d: random(1, 9)
  u: uno_de([0, 2, 4, 6, 8])
  n: d * 10 + u
  resto3: n - floor(n / 3) * 3

respuesta: (resto3 == 0)
tipo: vf

enunciado: "{n} es par. ¿Alcanza sólo con eso para asegurar que {n} es divisible por 6?"

explicacion: |
  No alcanza: además de ser par, tiene que cumplir también la regla del 3.
  Ser par no es suficiente por sí solo.
```

### 6 — Elegir cuál es divisible por 6

```
metadata:
  materia: "matematicas"
  tema: "regla_del_6"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_6"]

variables:
  base: random(3, 150) * 6
  otro1: base + 2
  otro2: base + 3

respuesta: base
tipo: mc
opciones_explicitas:
  - base
  - otro1
  - otro2

enunciado: "¿Cuál de estos tres números es divisible por 6?"

explicacion: |
  Tiene que cumplir las dos condiciones a la vez: ser par y tener suma de
  cifras múltiplo de 3.
```

### 7 — Elegir cuál NO es divisible por 6 (es par pero no múltiplo de 3)

```
metadata:
  materia: "matematicas"
  tema: "regla_del_6"
  nivel: "avanzado"
  tags: ["divisibilidad", "regla_del_6"]

variables:
  base: random(3, 150) * 6
  par_no_multiplo_3: base + 2

respuesta: par_no_multiplo_3
tipo: mc
opciones_explicitas:
  - base
  - par_no_multiplo_3

enunciado: "¿Cuál de estos dos números es par pero NO es divisible por 6?"

explicacion: |
  {par_no_multiplo_3} es par, pero su suma de cifras no es múltiplo de 3
  — le falta la segunda condición.
```

### 8 — Divisible por 6 implica divisible por 2

```
metadata:
  materia: "matematicas"
  tema: "regla_del_6"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_6", "comparar_reglas"]

respuesta: verdadero
tipo: vf

enunciado: "Si un número es divisible por 6, también es divisible por 2."

explicacion: |
  Como 6 = 2 × 3, todo múltiplo de 6 es también múltiplo de 2.
```

### 9 — Divisible por 6 implica divisible por 3

```
metadata:
  materia: "matematicas"
  tema: "regla_del_6"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_6", "comparar_reglas"]

respuesta: verdadero
tipo: vf

enunciado: "Si un número es divisible por 6, también es divisible por 3."

explicacion: |
  Como 6 = 2 × 3, todo múltiplo de 6 es también múltiplo de 3.
```

### 10 — Divisible por 3 NO implica divisible por 6

```
metadata:
  materia: "matematicas"
  tema: "regla_del_6"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_6", "comparar_reglas"]

respuesta: falso
tipo: vf

enunciado: "Si un número es divisible por 3, siempre es divisible por 6 también."

explicacion: |
  No es cierto: 9 es divisible por 3 pero no por 6 (es impar). Hace falta
  además ser par.
```

### 11 — Múltiplos de 6 y la tabla del 6

```
metadata:
  materia: "matematicas"
  tema: "regla_del_6"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_6", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Todos los resultados de la tabla del 6 son números divisibles por 6."

explicacion: |
  La tabla del 6 (6, 12, 18, 24...) es, exactamente, la lista de los
  números divisibles por 6.
```

### 12 — Problema: repartir en grupos de 6

```
metadata:
  materia: "matematicas"
  tema: "regla_del_6"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_6", "problema"]

variables:
  n: random(10, 300)
  resto2: n - floor(n / 2) * 2
  resto3: n - floor(n / 3) * 3

respuesta: (n - floor(n / 6) * 6 == 0)
tipo: vf

enunciado: "¿Se pueden repartir {n} caramelos entre 6 chicos, en partes iguales y sin que sobre ninguno?"

explicacion: |
  Se puede repartir exacto entre 6 sólo si el total es divisible por 6.
```

### 13 — Ordenar múltiplos de 6

```
metadata:
  materia: "matematicas"
  tema: "regla_del_6"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_6", "orden"]

tipo: ordenar
enunciado: "Ordená estos números de menor a mayor: son todos divisibles por 6."
opciones_explicitas:
  - "36"
  - "6"
  - "24"
  - "12"
respuesta_orden: ["6", "12", "24", "36"]

explicacion: |
  Los cuatro son múltiplos de 6; sólo hace falta ordenarlos por tamaño.
```

### 14 — Suma de dos múltiplos de 6

```
metadata:
  materia: "matematicas"
  tema: "regla_del_6"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_6"]

variables:
  a: random(1, 50) * 6
  b: random(1, 50) * 6

respuesta: verdadero
tipo: vf

enunciado: "¿Es {a} + {b} siempre divisible por 6?"

explicacion: |
  La suma de dos múltiplos de 6 sigue siendo múltiplo de 6.
```

### 15 — Elegir cuál es divisible por 6 (números grandes)

```
metadata:
  materia: "matematicas"
  tema: "regla_del_6"
  nivel: "avanzado"
  tags: ["divisibilidad", "regla_del_6"]

variables:
  base: random(200, 1000) * 6
  otro1: base + 2
  otro2: base + 3

respuesta: base
tipo: mc
opciones_explicitas:
  - base
  - otro1
  - otro2

enunciado: "¿Cuál de estos tres números es divisible por 6?"

explicacion: |
  Hay que revisar las dos condiciones (par y suma múltiplo de 3) en cada
  opción.
```

### 16 — Problema: mesas de 6 personas

```
metadata:
  materia: "matematicas"
  tema: "regla_del_6"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_6", "problema"]

variables:
  n: random(10, 300)
  resto2: n - floor(n / 2) * 2
  resto3: n - floor(n / 3) * 3

respuesta: (n - floor(n / 6) * 6 == 0)
tipo: vf

enunciado: "Un salón tiene mesas para 6 personas cada una. ¿Alcanzan las mesas exactas para {n} invitados, sin que sobre ni falte ningún lugar?"

explicacion: |
  Alcanzan exacto sólo si {n} es divisible por 6.
```

### 17 — Completar el próximo múltiplo de 6

```
metadata:
  materia: "matematicas"
  tema: "regla_del_6"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_6"]

variables:
  n: random(1, 100) * 6

tipo: completar
enunciado: "Completá el próximo múltiplo de 6 después de {n}."
respuestas_validas:
  - n + 6

explicacion: |
  Los múltiplos de 6 van de 6 en 6.
```

### 18 — Impar, ya se descarta directo

```
metadata:
  materia: "matematicas"
  tema: "regla_del_6"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_6"]

variables:
  n: random(5, 400) * 2 + 1

respuesta: falso
tipo: vf

enunciado: "¿Es {n} divisible por 6?"

explicacion: |
  {n} es impar, así que ya falla la primera condición (ser par) — ni hace
  falta revisar la suma de cifras.
```

### 19 — Elegir cuál NO es divisible por 6 (comparativo)

```
metadata:
  materia: "matematicas"
  tema: "regla_del_6"
  nivel: "avanzado"
  tags: ["divisibilidad", "regla_del_6"]

variables:
  a: random(10, 150) * 6
  b: random(10, 150) * 6 + 2
  c: random(10, 150) * 6

respuesta: b
tipo: mc
opciones_explicitas:
  - a
  - b
  - c

enunciado: "De estos tres números, ¿cuál es el único que NO es divisible por 6?"

explicacion: |
  Hay que chequear las dos condiciones (par y múltiplo de 3) en cada uno.
```

### 20 — La regla del 6 no aporta un método nuevo

```
metadata:
  materia: "matematicas"
  tema: "regla_del_6"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_6", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La regla del 6 no es un método nuevo: es aplicar la regla del 2 y la regla del 3 a la vez, y pedir que las dos den que sí."

explicacion: |
  Es la ventaja (y la definición) de esta regla: no hay nada nuevo que
  memorizar más allá de combinar las dos anteriores.
```
