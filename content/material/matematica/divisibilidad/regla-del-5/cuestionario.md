# Matemática — Regla del 5 (cuestionario, 20 preguntas VBLang)

> Tema: `N4` (parte). Ver `teoria.md` en esta misma carpeta.

---

### 1 — ¿Es divisible por 5?

```
metadata:
  materia: "matematicas"
  tema: "regla_del_5"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_5"]

variables:
  n: random(10, 999)
  resto: n - floor(n / 5) * 5

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Es {n} divisible por 5?"

explicacion: |
  Se mira sólo la última cifra: si es 0 o 5, el número es divisible por 5.
```

### 2 — ¿Es divisible por 5? (número grande)

```
metadata:
  materia: "matematicas"
  tema: "regla_del_5"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_5"]

variables:
  n: random(1000, 98765)
  resto: n - floor(n / 5) * 5

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Es {n} divisible por 5?"

explicacion: |
  Con números más grandes la regla no cambia: sigue alcanzando con la
  última cifra.
```

### 3 — Elegir cuál es divisible por 5

```
metadata:
  materia: "matematicas"
  tema: "regla_del_5"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_5"]

variables:
  base: random(5, 400) * 5
  otro1: base + 1
  otro2: base + 3

respuesta: base
tipo: mc
opciones_explicitas:
  - base
  - otro1
  - otro2

enunciado: "¿Cuál de estos tres números es divisible por 5?"

explicacion: |
  Sólo hay que mirar si la última cifra es 0 o 5.
```

### 4 — Elegir cuál NO es divisible por 5

```
metadata:
  materia: "matematicas"
  tema: "regla_del_5"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_5"]

variables:
  base: random(5, 400) * 5 + 2
  otro1: random(5, 400) * 5
  otro2: random(5, 400) * 5

respuesta: base
tipo: mc
opciones_explicitas:
  - base
  - otro1
  - otro2

enunciado: "¿Cuál de estos tres números NO es divisible por 5?"

explicacion: |
  {base} no termina en 0 ni en 5.
```

### 5 — Completar una cifra válida

```
metadata:
  materia: "matematicas"
  tema: "regla_del_5"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_5"]

variables:
  prefijo: random(1, 99)

tipo: completar
enunciado: "El número {prefijo}_ (falta la última cifra) tiene que ser divisible por 5. Completá una cifra válida."
respuestas_validas:
  - 0
  - 5

explicacion: |
  Sólo el 0 y el 5 sirven como última cifra.
```

### 6 — Completar una cifra inválida

```
metadata:
  materia: "matematicas"
  tema: "regla_del_5"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_5"]

variables:
  prefijo: random(1, 99)

tipo: completar
enunciado: "El número {prefijo}_ (falta la última cifra) tiene que NO ser divisible por 5. Completá una cifra válida."
respuestas_validas:
  - 1
  - 2
  - 3
  - 4
  - 6
  - 7
  - 8
  - 9

explicacion: |
  Cualquier cifra distinta de 0 y 5 hace que el número no sea divisible
  por 5.
```

### 7 — Terminar en 0 (verdadero/falso)

```
metadata:
  materia: "matematicas"
  tema: "regla_del_5"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_5"]

variables:
  d: random(1, 99)
  n: d * 10

respuesta: verdadero
tipo: vf

enunciado: "¿Es {n} divisible por 5?"

explicacion: |
  Termina en 0, así que es divisible por 5 (y también por 10 y por 2).
```

### 8 — Terminar en 5 (verdadero/falso)

```
metadata:
  materia: "matematicas"
  tema: "regla_del_5"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_5"]

variables:
  d: random(1, 99)
  n: d * 10 + 5

respuesta: verdadero
tipo: vf

enunciado: "¿Es {n} divisible por 5?"

explicacion: |
  Termina en 5, así que es divisible por 5.
```

### 9 — Última cifra de un número divisible por 5

```
metadata:
  materia: "matematicas"
  tema: "regla_del_5"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_5"]

variables:
  d: random(1, 99)
  u: uno_de([0, 5])
  n: d * 10 + u

respuesta: u
tipo: input
tolerancia_abs: 0

enunciado: "El número {n} es divisible por 5. ¿Cuál es su última cifra?"

explicacion: |
  Sólo puede ser 0 o 5.
```

### 10 — Problema: repartir en grupos de 5

```
metadata:
  materia: "matematicas"
  tema: "regla_del_5"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_5", "problema"]

variables:
  n: random(10, 200)
  resto: n - floor(n / 5) * 5

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Se pueden repartir {n} caramelos entre 5 chicos, en partes iguales y sin que sobre ninguno?"

explicacion: |
  Se puede repartir exacto entre 5 sólo si el total es divisible por 5.
```

### 11 — Elegir cuál es divisible por 5 (números grandes)

```
metadata:
  materia: "matematicas"
  tema: "regla_del_5"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_5"]

variables:
  base: random(500, 4000) * 5
  otro1: base + 1
  otro2: base + 4

respuesta: base
tipo: mc
opciones_explicitas:
  - base
  - otro1
  - otro2

enunciado: "¿Cuál de estos tres números es divisible por 5?"

explicacion: |
  Con números grandes la regla no cambia.
```

### 12 — Ordenar múltiplos de 5

```
metadata:
  materia: "matematicas"
  tema: "regla_del_5"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_5", "orden"]

tipo: ordenar
enunciado: "Ordená estos números de menor a mayor: son todos divisibles por 5."
opciones_explicitas:
  - "45"
  - "10"
  - "30"
  - "25"
respuesta_orden: ["10", "25", "30", "45"]

explicacion: |
  Los cuatro terminan en 0 o en 5; sólo hace falta ordenarlos por tamaño.
```

### 13 — Múltiplos de 5 y la tabla del 5

```
metadata:
  materia: "matematicas"
  tema: "regla_del_5"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_5", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Todos los resultados de la tabla del 5 son números divisibles por 5."

explicacion: |
  La tabla del 5 (5, 10, 15, 20...) es, exactamente, la lista de los
  números divisibles por 5.
```

### 14 — Suma de dos múltiplos de 5

```
metadata:
  materia: "matematicas"
  tema: "regla_del_5"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_5"]

variables:
  a: random(1, 100) * 5
  b: random(1, 100) * 5

respuesta: verdadero
tipo: vf

enunciado: "¿Es {a} + {b} siempre divisible por 5?"

explicacion: |
  La suma de dos múltiplos de 5 sigue siendo múltiplo de 5.
```

### 15 — Leer la última cifra y decidir

```
metadata:
  materia: "matematicas"
  tema: "regla_del_5"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_5"]

variables:
  n: random(10, 999)
  ultima_cifra: n - floor(n / 10) * 10
  resto: n - floor(n / 5) * 5

respuesta: (resto == 0)
tipo: vf

enunciado: "La última cifra de {n} es {ultima_cifra}. ¿Eso alcanza para asegurar que {n} es divisible por 5?"

explicacion: |
  Alcanza con esa única cifra: sólo si es 0 o 5, {n} es divisible por 5.
```

### 16 — Elegir cuál NO es divisible por 5 (comparativo)

```
metadata:
  materia: "matematicas"
  tema: "regla_del_5"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_5"]

variables:
  a: random(10, 500) * 5
  b: random(10, 500) * 5 + 2
  c: random(10, 500) * 5

respuesta: b
tipo: mc
opciones_explicitas:
  - a
  - b
  - c

enunciado: "De estos tres números, ¿cuál es el único que NO es divisible por 5?"

explicacion: |
  Hay que revisar la última cifra de cada uno.
```

### 17 — Divisible por 5 pero no por 2 (verdadero/falso)

```
metadata:
  materia: "matematicas"
  tema: "regla_del_5"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_5"]

variables:
  d: random(1, 99)
  n: d * 10 + 5

respuesta: verdadero
tipo: vf

enunciado: "¿Es cierto que {n} es divisible por 5 pero NO por 2?"

explicacion: |
  {n} termina en 5, que es impar: cumple la regla del 5 pero no la del 2.
```

### 18 — Problema: precios que terminan en 0 o 5

```
metadata:
  materia: "matematicas"
  tema: "regla_del_5"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_5", "problema"]

variables:
  n: random(10, 500)
  resto: n - floor(n / 5) * 5

respuesta: (resto == 0)
tipo: vf

enunciado: "Un producto cuesta ${n}. ¿Es un precio múltiplo de 5?"

explicacion: |
  Depende de si la última cifra del precio es 0 o 5.
```

### 19 — Completar el próximo múltiplo de 5

```
metadata:
  materia: "matematicas"
  tema: "regla_del_5"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_5"]

variables:
  n: random(1, 100) * 5

tipo: completar
enunciado: "Completá el próximo múltiplo de 5 después de {n}."
respuestas_validas:
  - n + 5

explicacion: |
  Los múltiplos de 5 van de 5 en 5.
```

### 20 — La regla del 5 sólo mira la última cifra

```
metadata:
  materia: "matematicas"
  tema: "regla_del_5"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_5", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Para saber si un número es divisible por 5, alcanza con mirar su última cifra."

explicacion: |
  Es el mismo tipo de atajo que la regla del 2: no hace falta la división
  completa.
```
