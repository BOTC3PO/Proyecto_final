# Matemática — Regla del 9 (cuestionario, 20 preguntas VBLang)

> Tema: `N4` (parte). Ver `teoria.md` en esta misma carpeta.

---

### 1 — ¿Es divisible por 9?

```
metadata:
  materia: "matematicas"
  tema: "regla_del_9"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_9"]

variables:
  n: random(10, 999)
  resto: n - floor(n / 9) * 9

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Es {n} divisible por 9?"

explicacion: |
  Se suman todas las cifras de {n}; si esa suma es múltiplo de 9, el
  número también lo es.
```

### 2 — ¿Es divisible por 9? (número grande)

```
metadata:
  materia: "matematicas"
  tema: "regla_del_9"
  nivel: "avanzado"
  tags: ["divisibilidad", "regla_del_9"]

variables:
  n: random(1000, 98765)
  resto: n - floor(n / 9) * 9

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Es {n} divisible por 9?"

explicacion: |
  Mismo procedimiento que con números más chicos: sumar todas las cifras.
```

### 3 — Calcular la suma de cifras (para la regla del 9)

```
metadata:
  materia: "matematicas"
  tema: "regla_del_9"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_9"]

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
  Es el mismo primer paso que la regla del 3: sumar todas las cifras.
```

### 4 — Decidir a partir de la suma de cifras

```
metadata:
  materia: "matematicas"
  tema: "regla_del_9"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_9"]

variables:
  c: random(1, 9)
  d: random(0, 9)
  u: random(0, 9)
  n: c * 100 + d * 10 + u
  suma_cifras: c + d + u
  resto: suma_cifras - floor(suma_cifras / 9) * 9

respuesta: (resto == 0)
tipo: vf

enunciado: "La suma de las cifras de {n} es {suma_cifras}. ¿Eso alcanza para decir que {n} es divisible por 9?"

explicacion: |
  Alcanza con ver si esa suma es múltiplo de 9 (no de 3).
```

### 5 — Elegir cuál es múltiplo de 9

```
metadata:
  materia: "matematicas"
  tema: "regla_del_9"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_9"]

variables:
  base: random(3, 100) * 9
  otro1: base + 1
  otro2: base + 2

respuesta: base
tipo: mc
opciones_explicitas:
  - base
  - otro1
  - otro2

enunciado: "¿Cuál de estos tres números es múltiplo de 9?"

explicacion: |
  Conviene sumar las cifras de cada opción y ver cuál suma da múltiplo
  de 9.
```

### 6 — Elegir cuál NO es múltiplo de 9

```
metadata:
  materia: "matematicas"
  tema: "regla_del_9"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_9"]

variables:
  base: random(3, 100) * 9
  otro: base + 1

respuesta: otro
tipo: mc
opciones_explicitas:
  - base
  - otro

enunciado: "¿Cuál de estos dos números NO es múltiplo de 9?"

explicacion: |
  {base} sí lo es; el otro rompe la condición de suma múltiplo de 9.
```

### 7 — Completar la cifra que falta

```
metadata:
  materia: "matematicas"
  tema: "regla_del_9"
  nivel: "avanzado"
  tags: ["divisibilidad", "regla_del_9"]

variables:
  c: random(1, 9)
  d: random(0, 9)
  suma_parcial: c + d
  r: suma_parcial - floor(suma_parcial / 9) * 9
  necesaria: (9 - r) - floor((9 - r) / 9) * 9

tipo: completar
enunciado: "El número tiene {c} centenas, {d} decenas, y falta la cifra de las unidades. Completá una cifra de unidades que haga que el número sea múltiplo de 9."
respuestas_validas:
  - necesaria

explicacion: |
  Hay que buscar qué cifra hace que la suma total de las cifras sea
  múltiplo de 9.
```

### 8 — Divisible por 9 implica divisible por 3

```
metadata:
  materia: "matematicas"
  tema: "regla_del_9"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_9", "comparar_reglas"]

respuesta: verdadero
tipo: vf

enunciado: "Si un número es divisible por 9, también es divisible por 3."

explicacion: |
  Toda suma de cifras que sea múltiplo de 9 también es múltiplo de 3.
```

### 9 — Divisible por 3 NO implica divisible por 9

```
metadata:
  materia: "matematicas"
  tema: "regla_del_9"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_9", "comparar_reglas"]

respuesta: falso
tipo: vf

enunciado: "Si un número es divisible por 3, siempre es divisible por 9 también."

explicacion: |
  No es cierto: 12 es divisible por 3 pero no por 9. La regla del 9 es más
  exigente.
```

### 10 — Múltiplos de 9 y la tabla del 9

```
metadata:
  materia: "matematicas"
  tema: "regla_del_9"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_9", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Todos los resultados de la tabla del 9 son números divisibles por 9."

explicacion: |
  La tabla del 9 (9, 18, 27...) es, exactamente, la lista de los números
  divisibles por 9.
```

### 11 — Problema: repartir en grupos de 9

```
metadata:
  materia: "matematicas"
  tema: "regla_del_9"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_9", "problema"]

variables:
  n: random(10, 300)
  resto: n - floor(n / 9) * 9

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Se pueden repartir {n} figuritas entre 9 chicos, en partes iguales y sin que sobre ninguna?"

explicacion: |
  Se puede repartir exacto entre 9 sólo si el total es divisible por 9.
```

### 12 — Elegir cuál es divisible por 9 (números grandes)

```
metadata:
  materia: "matematicas"
  tema: "regla_del_9"
  nivel: "avanzado"
  tags: ["divisibilidad", "regla_del_9"]

variables:
  base: random(200, 1000) * 9
  otro1: base + 1
  otro2: base + 3

respuesta: base
tipo: mc
opciones_explicitas:
  - base
  - otro1
  - otro2

enunciado: "¿Cuál de estos tres números es divisible por 9?"

explicacion: |
  Con números grandes hay que sumar todas las cifras, sin saltear ninguna.
```

### 13 — Suma de cifras de un número de 4 cifras

```
metadata:
  materia: "matematicas"
  tema: "regla_del_9"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_9"]

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
  Igual que con menos cifras: se suman todas, sin saltear ninguna.
```

### 14 — Ordenar múltiplos de 9

```
metadata:
  materia: "matematicas"
  tema: "regla_del_9"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_9", "orden"]

tipo: ordenar
enunciado: "Ordená estos números de menor a mayor: son todos divisibles por 9."
opciones_explicitas:
  - "36"
  - "9"
  - "27"
  - "18"
respuesta_orden: ["9", "18", "27", "36"]

explicacion: |
  Los cuatro tienen suma de cifras múltiplo de 9; sólo hace falta
  ordenarlos por tamaño.
```

### 15 — Suma de dos múltiplos de 9

```
metadata:
  materia: "matematicas"
  tema: "regla_del_9"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_9"]

variables:
  a: random(1, 50) * 9
  b: random(1, 50) * 9

respuesta: verdadero
tipo: vf

enunciado: "¿Es {a} + {b} siempre divisible por 9?"

explicacion: |
  La suma de dos múltiplos de 9 sigue siendo múltiplo de 9.
```

### 16 — Problema: cajas de 9 unidades

```
metadata:
  materia: "matematicas"
  tema: "regla_del_9"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_9", "problema"]

variables:
  n: random(10, 300)
  resto: n - floor(n / 9) * 9

respuesta: (resto == 0)
tipo: vf

enunciado: "Un producto se empaqueta en cajas cerradas de 9 unidades. ¿Se pueden empaquetar exactamente {n} unidades sin que sobre ninguna?"

explicacion: |
  Sólo si {n} es divisible por 9.
```

### 17 — Elegir cuál NO es múltiplo de 9 (comparativo)

```
metadata:
  materia: "matematicas"
  tema: "regla_del_9"
  nivel: "avanzado"
  tags: ["divisibilidad", "regla_del_9"]

variables:
  a: random(10, 200) * 9
  b: random(10, 200) * 9 + 1
  c: random(10, 200) * 9

respuesta: b
tipo: mc
opciones_explicitas:
  - a
  - b
  - c

enunciado: "De estos tres números, ¿cuál es el único que NO es múltiplo de 9?"

explicacion: |
  Hay que sumar las cifras de cada uno y comparar contra la tabla del 9.
```

### 18 — Completar el próximo múltiplo de 9

```
metadata:
  materia: "matematicas"
  tema: "regla_del_9"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_9"]

variables:
  n: random(1, 100) * 9

tipo: completar
enunciado: "Completá el próximo múltiplo de 9 después de {n}."
respuestas_validas:
  - n + 9

explicacion: |
  Los múltiplos de 9 van de 9 en 9.
```

### 19 — El mismo método, otro número (verdadero/falso)

```
metadata:
  materia: "matematicas"
  tema: "regla_del_9"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_9", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La regla del 9 usa exactamente el mismo método que la regla del 3 (sumar las cifras); sólo cambia el número contra el que se compara la suma."

explicacion: |
  Es la misma idea, con la tabla del 9 en vez de la tabla del 3.
```

### 20 — Verificar con dos números que suman lo mismo

```
metadata:
  materia: "matematicas"
  tema: "regla_del_9"
  nivel: "avanzado"
  tags: ["divisibilidad", "regla_del_9"]

variables:
  c: random(1, 9)
  d: random(0, 9)
  u: random(0, 9)
  n1: c * 100 + d * 10 + u
  n2: c * 100 + u * 10 + d

respuesta: verdadero
tipo: vf

enunciado: "{n1} y {n2} tienen las mismas cifras en distinto orden. ¿Es cierto que los dos son divisibles por 9, o ninguno de los dos, al mismo tiempo?"

explicacion: |
  La suma de las cifras no cambia si se reordenan: por eso reordenar las
  cifras nunca cambia si un número es o no divisible por 9.
```
