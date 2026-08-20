# Matemática — Conteo (cuestionario, 40 preguntas VBLang)

> Tema: `N1` (Tronco 1 — Numérico), mitad "Conteo". Ver `teoria.md` en esta
> misma carpeta.

Formato: cada pregunta es una plantilla VBLang completa (ver
`packages/vblang/src/schema/question-schemas.ts` y
`packages/vblang/src/templates/matematicas-aritmetica-oficiales.ts` para el
DSL real que ya usa el sistema). Donde un enunciado se repetiría con sólo el
número cambiado, se usa `variables:` + `random(...)` en vez de escribir
variantes sueltas — una sola plantilla parametrizada cubre todas esas
repeticiones. No se usó `dataset:` (bloque que referencia una tabla
`VblangDataset` de la base): para listas chicas y fijas el propio código del
repo prefiere declararlas como constantes en `variables:` (ver el comentario
de diseño en `matematicas/../economia-ar-oficiales.ts`), y acá no hace falta
ninguna tabla externa.

---

### 1 — Sucesor, número de 1 cifra

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "sucesor"]

variables:
  a: random(0, 8)
  siguiente: a + 1

respuesta: siguiente
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el sucesor de {a}?"

pasos:
  - "El sucesor de un número es el que sigue: {a} + 1 = {siguiente}"

explicacion: |
  El sucesor de un número n es n + 1, el próximo en la secuencia de conteo.
```

### 2 — Sucesor, número de 2 cifras

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "sucesor"]

variables:
  a: random(10, 98)
  siguiente: a + 1

respuesta: siguiente
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el sucesor de {a}?"

pasos:
  - "{a} + 1 = {siguiente}"

explicacion: |
  El sucesor es siempre el número anterior más 1, aunque haya que cruzar
  una decena (ej.: el sucesor de 29 es 30).
```

### 3 — Sucesor, número de 3 cifras

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "sucesor"]

variables:
  a: random(100, 998)
  siguiente: a + 1

respuesta: siguiente
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el sucesor de {a}?"

pasos:
  - "{a} + 1 = {siguiente}"

explicacion: |
  Igual que con números más chicos: se suma 1, aunque se cruce una centena
  (ej.: el sucesor de 399 es 400).
```

### 4 — Antecesor, número de 1 cifra

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "antecesor"]

variables:
  a: random(1, 9)
  anterior: a - 1

respuesta: anterior
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el antecesor de {a}?"

pasos:
  - "El antecesor es el número anterior: {a} - 1 = {anterior}"

explicacion: |
  El antecesor de un número n es n − 1, el que viene justo antes en la
  secuencia de conteo.
```

### 5 — Antecesor, número de 2 cifras

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "antecesor"]

variables:
  a: random(11, 99)
  anterior: a - 1

respuesta: anterior
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el antecesor de {a}?"

pasos:
  - "{a} - 1 = {anterior}"

explicacion: |
  Se resta 1, aunque haya que bajar de decena (ej.: el antecesor de 40 es 39).
```

### 6 — Antecesor, número de 3 cifras

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "antecesor"]

variables:
  a: random(101, 999)
  anterior: a - 1

respuesta: anterior
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el antecesor de {a}?"

pasos:
  - "{a} - 1 = {anterior}"

explicacion: |
  Se resta 1, aunque haya que bajar de centena (ej.: el antecesor de 500 es
  499).
```

### 7 — Reconocer el sucesor (verdadero/falso)

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "sucesor"]

variables:
  a: random(1, 500)
  b: a + uno_de([1, 1, 2, -1, 0])

respuesta: (b == a + 1)
tipo: vf

enunciado: "¿Es {b} el sucesor de {a}?"

explicacion: |
  El sucesor de {a} es {a} + 1. Hay que comparar ese resultado con el número
  propuesto, no alcanza con que "esté cerca".
```

### 8 — Reconocer el antecesor (verdadero/falso)

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "antecesor"]

variables:
  a: random(2, 500)
  b: a - uno_de([1, 1, 2, -1, 0])

respuesta: (b == a - 1)
tipo: vf

enunciado: "¿Es {b} el antecesor de {a}?"

explicacion: |
  El antecesor de {a} es {a} − 1. Se compara ese resultado exacto con el
  número propuesto.
```

### 9 — Conteo salteado de 2 en 2

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "conteo_salteado"]

variables:
  inicio: random(0, 20) * 2
  n: random(3, 8)
  termino: inicio + 2 * (n - 1)

respuesta: termino
tipo: input
tolerancia_abs: 0

enunciado: "Contando de 2 en 2 desde {inicio}, ¿qué número decís en el lugar {n}° (contando {inicio} como el 1°)?"

pasos:
  - "Cada paso suma 2. Del 1° al {n}° hay {n} - 1 pasos: {inicio} + 2 × ({n} - 1) = {termino}"

explicacion: |
  Contar salteado de a 2 es sumar siempre 2 al número anterior. El término
  en el lugar n es inicio + 2×(n − 1).
```

### 10 — Conteo salteado de 5 en 5

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "conteo_salteado"]

variables:
  inicio: random(0, 20) * 5
  n: random(3, 8)
  termino: inicio + 5 * (n - 1)

respuesta: termino
tipo: input
tolerancia_abs: 0

enunciado: "Contando de 5 en 5 desde {inicio}, ¿qué número decís en el lugar {n}°?"

pasos:
  - "{inicio} + 5 × ({n} - 1) = {termino}"

explicacion: |
  Contar de 5 en 5 es la base de la tabla del 5: cada salto suma 5 al
  anterior.
```

### 11 — Conteo salteado de 10 en 10

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "conteo_salteado"]

variables:
  inicio: random(0, 50) * 10
  n: random(3, 8)
  termino: inicio + 10 * (n - 1)

respuesta: termino
tipo: input
tolerancia_abs: 0

enunciado: "Contando de 10 en 10 desde {inicio}, ¿qué número decís en el lugar {n}°?"

pasos:
  - "{inicio} + 10 × ({n} - 1) = {termino}"

explicacion: |
  Contar de 10 en 10 sólo cambia la cifra de las decenas (o más arriba); las
  unidades quedan fijas.
```

### 12 — Conteo salteado de 3 en 3

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "conteo_salteado"]

variables:
  inicio: random(0, 30) * 3
  n: random(3, 8)
  termino: inicio + 3 * (n - 1)

respuesta: termino
tipo: input
tolerancia_abs: 0

enunciado: "Contando de 3 en 3 desde {inicio}, ¿qué número decís en el lugar {n}°?"

pasos:
  - "{inicio} + 3 × ({n} - 1) = {termino}"

explicacion: |
  Igual que con otros saltos: se suma siempre el mismo número (acá, 3) al
  anterior.
```

### 13 — Conteo salteado de 4 en 4

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "conteo_salteado"]

variables:
  inicio: random(0, 30) * 4
  n: random(3, 8)
  termino: inicio + 4 * (n - 1)

respuesta: termino
tipo: input
tolerancia_abs: 0

enunciado: "Contando de 4 en 4 desde {inicio}, ¿qué número decís en el lugar {n}°?"

pasos:
  - "{inicio} + 4 × ({n} - 1) = {termino}"

explicacion: |
  El salto de 4 en 4 es la base de la tabla del 4.
```

### 14 — Conteo salteado desde un número cualquiera

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "intermedio"
  tags: ["conteo", "conteo_salteado"]

variables:
  inicio: random(1, 97)
  paso: uno_de([2, 3, 5, 10])
  n: random(3, 6)
  termino: inicio + paso * (n - 1)

respuesta: termino
tipo: input
tolerancia_abs: 0

enunciado: "Contando de {paso} en {paso} desde {inicio} (sin que {inicio} sea necesariamente múltiplo de {paso}), ¿qué número decís en el lugar {n}°?"

pasos:
  - "{inicio} + {paso} × ({n} - 1) = {termino}"

explicacion: |
  El conteo salteado funciona igual aunque el número de inicio no sea
  "redondo": el salto se suma siempre desde el propio inicio, no desde el
  múltiplo más cercano.
```

### 15 — Cuenta regresiva de 1 en 1

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "cuenta_regresiva"]

variables:
  inicio: random(20, 999)
  pasos_atras: random(3, 9)
  resultado: inicio - pasos_atras

respuesta: resultado
tipo: input
tolerancia_abs: 0

enunciado: "Contando hacia atrás de 1 en 1 desde {inicio}, ¿qué número decís después de {pasos_atras} pasos?"

pasos:
  - "{inicio} - {pasos_atras} = {resultado}"

explicacion: |
  Contar hacia atrás de a 1 es restar 1 en cada paso, tantas veces como
  pasos se cuenten.
```

### 16 — Cuenta regresiva de 2 en 2

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "cuenta_regresiva"]

variables:
  inicio: random(20, 200) * 2
  pasos_atras: random(2, 6)
  resultado: inicio - 2 * pasos_atras

respuesta: resultado
tipo: input
tolerancia_abs: 0

enunciado: "Contando hacia atrás de 2 en 2 desde {inicio}, ¿qué número decís después de {pasos_atras} pasos?"

pasos:
  - "{inicio} - 2 × {pasos_atras} = {resultado}"

explicacion: |
  Igual que la cuenta regresiva de a 1, pero restando 2 en cada paso.
```

### 17 — Cuenta regresiva de 10 en 10

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "cuenta_regresiva"]

variables:
  inicio: random(20, 100) * 10
  pasos_atras: random(2, 6)
  resultado: inicio - 10 * pasos_atras

respuesta: resultado
tipo: input
tolerancia_abs: 0

enunciado: "Contando hacia atrás de 10 en 10 desde {inicio}, ¿qué número decís después de {pasos_atras} pasos?"

pasos:
  - "{inicio} - 10 × {pasos_atras} = {resultado}"

explicacion: |
  La cuenta regresiva de 10 en 10 sólo mueve la cifra de las decenas (o
  superior).
```

### 18 — Sentido de la cuenta regresiva (verdadero/falso)

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "cuenta_regresiva"]

respuesta: verdadero
tipo: vf

enunciado: "Al contar hacia atrás (cuenta regresiva), cada número que se dice es menor que el anterior."

explicacion: |
  Contar hacia atrás es restar en cada paso: por eso la secuencia siempre
  desciende, nunca sube ni se repite.
```

### 19 — Comparar dos cantidades: mayor (verdadero/falso)

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "comparacion"]

variables:
  a: random(1, 999)
  b: random(1, 999)

respuesta: (a > b)
tipo: vf

enunciado: "¿Es {a} mayor que {b}?"

explicacion: |
  Un número es mayor que otro si aparece más adelante en la secuencia de
  conteo (más lejos del cero).
```

### 20 — Comparar dos cantidades: menor (verdadero/falso)

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "comparacion"]

variables:
  a: random(1, 999)
  b: random(1, 999)

respuesta: (a < b)
tipo: vf

enunciado: "¿Es {a} menor que {b}?"

explicacion: |
  Un número es menor que otro si aparece antes en la secuencia de conteo
  (más cerca del cero).
```

### 21 — Comparar dos cantidades: igual (verdadero/falso)

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "comparacion"]

variables:
  a: random(1, 200)
  b: uno_de([a, a, random(1, 200)])

respuesta: (a == b)
tipo: vf

enunciado: "¿{a} es igual a {b}?"

explicacion: |
  Dos cantidades son iguales sólo si representan exactamente el mismo
  número, no alcanza con estar cerca.
```

### 22 — Cuál es mayor (opción múltiple)

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "comparacion"]

variables:
  a: random(1, 999)
  b: random(1, 999)

restricciones:
  - a != b

respuesta: max(a, b)
tipo: mc
opciones_explicitas:
  - a
  - b

enunciado: "¿Cuál de estos dos números es mayor: {a} o {b}?"

explicacion: |
  Para comparar dos números se los ubica mentalmente en la secuencia de
  conteo: el que se dice más tarde es el mayor.
```

### 23 — El mayor de tres

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "comparacion"]

variables:
  a: random(1, 999)
  b: random(1, 999)
  c: random(1, 999)

respuesta: max(a, b, c)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el mayor entre {a}, {b} y {c}?"

explicacion: |
  Se comparan de a pares hasta quedarse con el más grande de los tres.
```

### 24 — El menor de tres

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "comparacion"]

variables:
  a: random(1, 999)
  b: random(1, 999)
  c: random(1, 999)

respuesta: min(a, b, c)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el menor entre {a}, {b} y {c}?"

explicacion: |
  Se comparan de a pares hasta quedarse con el más chico de los tres.
```

### 25 — Ordenar de menor a mayor (4 números de 1-2 cifras)

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "orden"]

tipo: ordenar
enunciado: "Ordená estos números de menor a mayor."
opciones_explicitas:
  - "23"
  - "7"
  - "41"
  - "16"
respuesta_orden: ["7", "16", "23", "41"]

explicacion: |
  Ordenar de menor a mayor es ubicar los números según su lugar en la
  secuencia de conteo, del más cercano al cero al más lejano.
```

### 26 — Ordenar de mayor a menor (4 números de 1-2 cifras)

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "orden"]

tipo: ordenar
enunciado: "Ordená estos números de mayor a menor."
opciones_explicitas:
  - "8"
  - "34"
  - "12"
  - "50"
respuesta_orden: ["50", "34", "12", "8"]

explicacion: |
  Ordenar de mayor a menor es el mismo criterio que de menor a mayor, pero
  arrancando por el que está más lejos del cero.
```

### 27 — Ordenar de menor a mayor (5 números de dos cifras)

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "intermedio"
  tags: ["conteo", "orden"]

tipo: ordenar
enunciado: "Ordená estos números de menor a mayor."
opciones_explicitas:
  - "67"
  - "19"
  - "88"
  - "45"
  - "31"
respuesta_orden: ["19", "31", "45", "67", "88"]

explicacion: |
  Con más números conviene ir descartando de a uno el menor (o el mayor)
  restante, en vez de compararlos todos de una sola vez.
```

### 28 — Ordenar de mayor a menor (números de tres cifras)

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "intermedio"
  tags: ["conteo", "orden"]

tipo: ordenar
enunciado: "Ordená estos números de mayor a menor."
opciones_explicitas:
  - "402"
  - "218"
  - "990"
  - "125"
respuesta_orden: ["990", "402", "218", "125"]

explicacion: |
  Con números de más cifras, primero se compara la cantidad de cifras (más
  cifras es siempre mayor) y recién después, si empatan, cifra por cifra de
  izquierda a derecha.
```

### 29 — Completar la secuencia (de 1 en 1)

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "secuencia"]

variables:
  a: random(1, 96)

tipo: completar
enunciado: "Completá el número que falta: {a}, {a+1}, ___, {a+3}."
respuestas_validas:
  - a + 2

explicacion: |
  La secuencia avanza de 1 en 1: el número que falta es el anterior más 1.
```

### 30 — Completar la secuencia (de 2 en 2)

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "secuencia"]

variables:
  a: random(0, 90) * 2

tipo: completar
enunciado: "Completá el número que falta: {a}, {a+2}, ___, {a+6}."
respuestas_validas:
  - a + 4

explicacion: |
  La secuencia avanza de 2 en 2: cada término es el anterior más 2.
```

### 31 — Completar la secuencia (de 5 en 5)

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "secuencia"]

variables:
  a: random(0, 180) * 5

tipo: completar
enunciado: "Completá el número que falta: {a}, {a+5}, ___, {a+15}."
respuestas_validas:
  - a + 10

explicacion: |
  La secuencia avanza de 5 en 5: cada término es el anterior más 5.
```

### 32 — Completar la secuencia (de 10 en 10)

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "secuencia"]

variables:
  a: random(0, 90) * 10

tipo: completar
enunciado: "Completá el número que falta: {a}, {a+10}, ___, {a+30}."
respuestas_validas:
  - a + 20

explicacion: |
  La secuencia avanza de 10 en 10: cada término es el anterior más 10.
```

### 33 — Completar la secuencia descendente

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "intermedio"
  tags: ["conteo", "secuencia", "cuenta_regresiva"]

variables:
  a: random(20, 999)

tipo: completar
enunciado: "Completá el número que falta: {a}, {a-1}, ___, {a-3}."
respuestas_validas:
  - a - 2

explicacion: |
  En una secuencia descendente cada término es el anterior menos el salto
  (acá, menos 1).
```

### 34 — Cuántos números hay en un rango (inclusive)

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "intermedio"
  tags: ["conteo", "cardinalidad"]

variables:
  a: random(1, 100)
  b: a + random(5, 40)

respuesta: b - a + 1
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos números hay entre {a} y {b}, contando a los dos extremos?"

pasos:
  - "Cantidad = {b} - {a} + 1 = {b - a + 1} (se suma 1 porque {a} también se cuenta)"

explicacion: |
  Si se cuentan los dos extremos, la cantidad de números entre A y B es
  B − A + 1, no B − A: hay que sumar 1 porque el propio A ya es el primero
  que se cuenta.
```

### 35 — Cuántos números pares hay en un rango

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "avanzado"
  tags: ["conteo", "cardinalidad", "pares"]

variables:
  a: random(1, 100)
  b: a + random(10, 50)
  pares: floor(b / 2) - floor((a - 1) / 2)

respuesta: pares
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos números pares hay entre {a} y {b}, contando a los dos extremos si son pares?"

pasos:
  - "Se cuentan los múltiplos de 2 hasta {b} y se descartan los que ya pasaron antes de {a}: {pares} números pares"

explicacion: |
  Contar los pares en un rango es contar los múltiplos de 2 salteados, igual
  que en el conteo salteado de 2 en 2, pero acotado entre dos extremos.
```

### 36 — Cuántos números impares hay en un rango

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "avanzado"
  tags: ["conteo", "cardinalidad", "impares"]

variables:
  a: random(1, 100)
  b: a + random(10, 50)
  total: b - a + 1
  pares: floor(b / 2) - floor((a - 1) / 2)
  impares: total - pares

respuesta: impares
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos números impares hay entre {a} y {b}, contando a los dos extremos si son impares?"

pasos:
  - "Total de números en el rango: {total}. De esos, {pares} son pares, así que {impares} son impares."

explicacion: |
  Los impares de un rango son los que no son pares: alcanza con contar el
  total de números del rango y restarle la cantidad de pares.
```

### 37 — Contar los elementos de una lista

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "cardinalidad"]

variables:
  lista: mezclar([3, 7, 12, 5, 9, 18, 2, 14, 6, 11])
  cantidad_mostrada: random(4, 9)
  elegidos: n_de(lista, cantidad_mostrada)

respuesta: largo(elegidos)
tipo: input
tolerancia_abs: 0

enunciado: "Contá cuántos números hay en esta lista: {elegidos}."

pasos:
  - "Se cuenta un elemento por vez, sin saltear ni repetir: en total son {largo(elegidos)}"

explicacion: |
  Contar los elementos de una lista es aplicar directamente la
  correspondencia uno a uno: un número de la secuencia de conteo por cada
  elemento de la lista.
```

### 38 — Problema: agregar de a varios hasta llegar a un total

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "intermedio"
  tags: ["conteo", "conteo_salteado", "problema"]

variables:
  inicial: random(0, 20)
  paso: uno_de([2, 3, 5, 10])
  veces: random(2, 6)
  total: inicial + paso * veces

respuesta: veces
tipo: input
tolerancia_abs: 0

enunciado: "Tenés {inicial} figuritas y le vas agregando de a {paso} por vez. ¿Cuántas veces tenés que agregar {paso} figuritas para llegar a {total}?"

pasos:
  - "Hay que juntar {total} - {inicial} = {total - inicial} figuritas más, de a {paso}: ({total} - {inicial}) / {paso} = {veces} veces"

explicacion: |
  Agregar siempre la misma cantidad es contar salteado: la cantidad de
  veces que hay que agregar es la diferencia total dividida por el salto.
```

### 39 — Problema: cuántos números se dijeron en un conteo salteado desde cero

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "intermedio"
  tags: ["conteo", "conteo_salteado", "problema"]

variables:
  paso: uno_de([2, 3, 5, 10])
  cantidad_saltos: random(3, 8)
  llegada: paso * cantidad_saltos

respuesta: cantidad_saltos + 1
tipo: input
tolerancia_abs: 0

enunciado: "Contando de {paso} en {paso} empezando en 0 (0, {paso}, {paso*2}, ...) hasta llegar a {llegada}, ¿cuántos números dijiste en total, contando el 0?"

pasos:
  - "Del 0 a {llegada} hay {cantidad_saltos} saltos de {paso}; como el 0 también se cuenta, en total son {cantidad_saltos} + 1 = {cantidad_saltos + 1} números"

explicacion: |
  Igual que contar los elementos de un rango: hay que sumar 1 porque el
  primer número dicho (el 0) también cuenta como uno de los números.
```

### 40 — Posición en la secuencia de conteo

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "intermedio"
  tags: ["conteo", "cardinalidad", "ordinalidad"]

variables:
  inicio: random(1, 10)
  posicion: random(2, 8)
  resultado: inicio + posicion - 1

respuesta: resultado
tipo: input
tolerancia_abs: 0

enunciado: "Si contás de uno en uno empezando en {inicio} (o sea, {inicio} es el 1°), ¿qué número decís en el lugar {posicion}°?"

pasos:
  - "El lugar {posicion}° está {posicion} - 1 pasos después del inicio: {inicio} + ({posicion} - 1) = {resultado}"

explicacion: |
  Distingue la cardinalidad (cuántos hay) de la ordinalidad (qué lugar
  ocupa): el número en el lugar k, empezando a contar desde "inicio", es
  inicio + (k − 1).
```
