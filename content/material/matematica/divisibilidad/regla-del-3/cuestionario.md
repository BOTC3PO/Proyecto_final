# Matemática — Regla del 3 (cuestionario, 22 preguntas VBLang)

> Tema: `N4` (parte). Ver `teoria.md` en esta misma carpeta.

---

### 1 — ¿Es divisible por 3?

```
metadata:
  materia: "matematicas"
  tema: "regla_del_3"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_3"]

variables:
  n: random(10, 999)
  resto: n - floor(n / 3) * 3

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Es {n} divisible por 3?"

explicacion: |
  Se suman todas las cifras de {n}; si esa suma es múltiplo de 3, el
  número también lo es.
```

### 2 — ¿Es divisible por 3? (número grande)

```
metadata:
  materia: "matematicas"
  tema: "regla_del_3"
  nivel: "avanzado"
  tags: ["divisibilidad", "regla_del_3"]

variables:
  n: random(1000, 98765)
  resto: n - floor(n / 3) * 3

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Es {n} divisible por 3?"

explicacion: |
  Si la primera suma de cifras da un número grande, se puede volver a
  sumar sus cifras hasta llegar a algo chico.
```

### 3 — Calcular la suma de cifras (3 dígitos)

```
metadata:
  materia: "matematicas"
  tema: "regla_del_3"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_3"]

variables:
  c: random(1, 9)
  d: random(0, 9)
  u: random(0, 9)
  n: c * 100 + d * 10 + u

respuesta: c + d + u
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es la suma de las cifras de {n}?"

explicacion: |
  Sumar todas las cifras es el primer paso de la regla del 3.
```

### 4 — Calcular la suma de cifras (4 dígitos)

```
metadata:
  materia: "matematicas"
  tema: "regla_del_3"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_3"]

variables:
  m: random(1, 9)
  c: random(0, 9)
  d: random(0, 9)
  u: random(0, 9)
  n: m * 1000 + c * 100 + d * 10 + u

respuesta: m + c + d + u
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es la suma de las cifras de {n}?"

explicacion: |
  Con más cifras el procedimiento es el mismo: sumar todas, sin saltear
  ninguna.
```

### 5 — Decidir a partir de la suma de cifras

```
metadata:
  materia: "matematicas"
  tema: "regla_del_3"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_3"]

variables:
  c: random(1, 9)
  d: random(0, 9)
  u: random(0, 9)
  n: c * 100 + d * 10 + u
  suma_cifras: c + d + u
  resto: suma_cifras - floor(suma_cifras / 3) * 3

respuesta: (resto == 0)
tipo: vf

enunciado: "La suma de las cifras de {n} es {suma_cifras}. ¿Eso alcanza para decir que {n} es divisible por 3?"

explicacion: |
  Alcanza con ver si esa suma es múltiplo de 3.
```

### 6 — Elegir cuál es múltiplo de 3

```
metadata:
  materia: "matematicas"
  tema: "regla_del_3"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_3"]

variables:
  base: random(4, 300) * 3
  otro1: base + 1
  otro2: base + 2

respuesta: base
tipo: mc
opciones_explicitas:
  - base
  - otro1
  - otro2

enunciado: "¿Cuál de estos tres números es múltiplo de 3?"

explicacion: |
  Conviene sumar las cifras de cada opción y ver cuál suma da múltiplo
  de 3.
```

### 7 — Elegir cuál NO es múltiplo de 3

```
metadata:
  materia: "matematicas"
  tema: "regla_del_3"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_3"]

variables:
  base: random(4, 300) * 3
  otro: base + 1

respuesta: otro
tipo: mc
opciones_explicitas:
  - base
  - otro

enunciado: "¿Cuál de estos dos números NO es múltiplo de 3?"

explicacion: |
  {base} sí lo es; {otro} tiene una cifra más que rompe la suma múltiplo
  de 3.
```

### 8 — Completar la cifra que falta

```
metadata:
  materia: "matematicas"
  tema: "regla_del_3"
  nivel: "avanzado"
  tags: ["divisibilidad", "regla_del_3"]

variables:
  c: random(1, 9)
  d: random(0, 9)
  suma_parcial: c + d
  r: suma_parcial - floor(suma_parcial / 3) * 3
  necesaria: (3 - r) - floor((3 - r) / 3) * 3

tipo: completar
enunciado: "El número tiene {c} centenas, {d} decenas, y falta la cifra de las unidades. Completá una cifra de unidades que haga que el número sea múltiplo de 3."
respuestas_validas:
  - necesaria
  - necesaria + 3
  - necesaria + 6

explicacion: |
  Hay que buscar qué cifra hace que la suma total de las cifras sea
  múltiplo de 3; puede haber más de una respuesta válida (a intervalos
  de 3).
```

### 9 — Múltiplos de 3 y la tabla del 3

```
metadata:
  materia: "matematicas"
  tema: "regla_del_3"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_3", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Todos los resultados de la tabla del 3 son números divisibles por 3."

explicacion: |
  La tabla del 3 (3, 6, 9, 12...) es, exactamente, la lista de los números
  divisibles por 3.
```

### 10 — Problema: repartir en grupos de 3

```
metadata:
  materia: "matematicas"
  tema: "regla_del_3"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_3", "problema"]

variables:
  n: random(10, 200)
  resto: n - floor(n / 3) * 3

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Se pueden repartir {n} caramelos entre 3 chicos, en partes iguales y sin que sobre ninguno?"

explicacion: |
  Se puede repartir exacto entre 3 sólo si el total es divisible por 3.
```

### 11 — Suma de cifras, número de 2 cifras

```
metadata:
  materia: "matematicas"
  tema: "regla_del_3"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_3"]

variables:
  d: random(1, 9)
  u: random(0, 9)
  n: d * 10 + u

respuesta: d + u
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es la suma de las cifras de {n}?"

explicacion: |
  Con números de 2 cifras, la suma es más rápida de calcular.
```

### 12 — Suma de dos múltiplos de 3

```
metadata:
  materia: "matematicas"
  tema: "regla_del_3"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_3"]

variables:
  a: random(1, 100) * 3
  b: random(1, 100) * 3

respuesta: verdadero
tipo: vf

enunciado: "¿Es {a} + {b} siempre divisible por 3?"

explicacion: |
  La suma de dos múltiplos de 3 sigue siendo múltiplo de 3.
```

### 13 — Elegir cuál es divisible por 3 (números grandes)

```
metadata:
  materia: "matematicas"
  tema: "regla_del_3"
  nivel: "avanzado"
  tags: ["divisibilidad", "regla_del_3"]

variables:
  base: random(500, 4000) * 3
  otro1: base + 1
  otro2: base + 2

respuesta: base
tipo: mc
opciones_explicitas:
  - base
  - otro1
  - otro2

enunciado: "¿Cuál de estos tres números es divisible por 3?"

explicacion: |
  Con números grandes hay que sumar todas las cifras, sin saltear ninguna.
```

### 14 — Aplicar la regla dos veces (suma de suma)

```
metadata:
  materia: "matematicas"
  tema: "regla_del_3"
  nivel: "avanzado"
  tags: ["divisibilidad", "regla_del_3"]

variables:
  c: random(1, 9)
  d: random(0, 9)
  u: random(0, 9)
  n: c * 100 + d * 10 + u
  suma1: c + d + u

respuesta: suma1
tipo: input
tolerancia_abs: 0

enunciado: "Al sumar las cifras de {n} se obtiene un número de 1 o 2 cifras. ¿Cuál es esa primera suma?"

explicacion: |
  Si esa primera suma todavía tiene 2 cifras, se le puede volver a sumar
  las cifras para achicarla más.
```

### 15 — Ordenar múltiplos de 3

```
metadata:
  materia: "matematicas"
  tema: "regla_del_3"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_3", "orden"]

tipo: ordenar
enunciado: "Ordená estos números de menor a mayor: son todos divisibles por 3."
opciones_explicitas:
  - "27"
  - "9"
  - "18"
  - "12"
respuesta_orden: ["9", "12", "18", "27"]

explicacion: |
  Los cuatro tienen suma de cifras múltiplo de 3; sólo hace falta
  ordenarlos por tamaño.
```

### 16 — Divisible por 3 no siempre es divisible por 9

```
metadata:
  materia: "matematicas"
  tema: "regla_del_3"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_3", "comparar_reglas"]

respuesta: falso
tipo: vf

enunciado: "Si un número es divisible por 3, siempre es divisible por 9 también."

explicacion: |
  No es cierto: 12 es divisible por 3 (1+2=3) pero no por 9. La regla del
  9 es más exigente que la del 3.
```

### 17 — Problema: mesas de 3 personas

```
metadata:
  materia: "matematicas"
  tema: "regla_del_3"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_3", "problema"]

variables:
  n: random(10, 200)
  resto: n - floor(n / 3) * 3

respuesta: (resto == 0)
tipo: vf

enunciado: "Un salón tiene mesas para 3 personas cada una. ¿Alcanzan las mesas exactas para sentar a {n} invitados, sin que sobre ni falte ningún lugar?"

explicacion: |
  Alcanzan exacto sólo si {n} es divisible por 3.
```

### 18 — Elegir cuál NO es múltiplo de 3 (comparativo)

```
metadata:
  materia: "matematicas"
  tema: "regla_del_3"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_3"]

variables:
  a: random(10, 300) * 3
  b: random(10, 300) * 3 + 1
  c: random(10, 300) * 3

respuesta: b
tipo: mc
opciones_explicitas:
  - a
  - b
  - c

enunciado: "De estos tres números, ¿cuál es el único que NO es múltiplo de 3?"

explicacion: |
  Hay que sumar las cifras de cada uno y comparar contra la tabla del 3.
```

### 19 — Completar el próximo múltiplo de 3

```
metadata:
  materia: "matematicas"
  tema: "regla_del_3"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_3"]

variables:
  n: random(1, 200) * 3

tipo: completar
enunciado: "Completá el próximo múltiplo de 3 después de {n}."
respuestas_validas:
  - n + 3

explicacion: |
  Los múltiplos de 3 van de 3 en 3.
```

### 20 — La regla del 3 no mira la última cifra (verdadero/falso)

```
metadata:
  materia: "matematicas"
  tema: "regla_del_3"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_3", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de las reglas del 2, 5 y 10, la regla del 3 no alcanza con mirar sólo la última cifra: hay que sumar todas las cifras del número."

explicacion: |
  Es la primera regla del set clásico que necesita mirar el número
  completo, no sólo el final.
```

### 21 — Suma de cifras de un número de 5 cifras

```
metadata:
  materia: "matematicas"
  tema: "regla_del_3"
  nivel: "avanzado"
  tags: ["divisibilidad", "regla_del_3"]

variables:
  dm: random(1, 9)
  m: random(0, 9)
  c: random(0, 9)
  d: random(0, 9)
  u: random(0, 9)
  n: dm * 10000 + m * 1000 + c * 100 + d * 10 + u

respuesta: dm + m + c + d + u
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es la suma de las cifras de {n}?"

explicacion: |
  Con 5 cifras el procedimiento no cambia: sumar todas, una por una.
```

### 22 — Verificar con dos números que suman lo mismo

```
metadata:
  materia: "matematicas"
  tema: "regla_del_3"
  nivel: "avanzado"
  tags: ["divisibilidad", "regla_del_3"]

variables:
  c: random(1, 9)
  d: random(0, 9)
  u: random(0, 9)
  n1: c * 100 + d * 10 + u
  n2: c * 100 + u * 10 + d

respuesta: verdadero
tipo: vf

enunciado: "{n1} y {n2} tienen las mismas cifras en distinto orden. ¿Es cierto que los dos son divisibles por 3, o ninguno de los dos, al mismo tiempo?"

explicacion: |
  La suma de las cifras no cambia si se reordenan: por eso, reordenar las
  cifras de un número nunca cambia si es o no divisible por 3.
```
