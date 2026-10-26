# Matemática — Lenguaje algebraico: traducir enunciado a expresión (cuestionario, 40 preguntas VBLang)

> Tema: `A1` (Tronco 2 — Algebraico). Ver `teoria.md` en esta misma carpeta.

Patrón general: cada enunciado plantea una traducción en palabras y pide
el resultado numérico de esa traducción para un valor concreto sorteado
al azar. Acertar exige construir la expresión correcta (con el orden y
los paréntesis correctos) antes de poder evaluarla — el mismo motor de
VBLang que arma `respuesta:` es la fuente de verdad del resultado.

---

### 1 — El doble de un número

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "basico"
  tags: ["vocabulario", "doble"]

variables:
  n: random(1, 50)

respuesta: 2 * n
tipo: input
tolerancia_abs: 0

enunciado: "El doble de un número. Si el número es {n}, ¿cuál es el resultado?"

pasos:
  - "El doble significa multiplicar por 2: 2 × {n} = {2 * n}"

explicacion: |
  "El doble de x" se traduce como 2x.
```

### 2 — El triple de un número

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "basico"
  tags: ["vocabulario", "triple"]

variables:
  n: random(1, 40)

respuesta: 3 * n
tipo: input
tolerancia_abs: 0

enunciado: "El triple de un número. Si el número es {n}, ¿cuál es el resultado?"

pasos:
  - "El triple significa multiplicar por 3: 3 × {n} = {3 * n}"

explicacion: |
  "El triple de x" se traduce como 3x.
```

### 3 — La mitad de un número

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "basico"
  tags: ["vocabulario", "mitad"]

variables:
  n: random(1, 50) * 2

respuesta: n / 2
tipo: input
tolerancia_abs: 0

enunciado: "La mitad de un número. Si el número es {n}, ¿cuál es el resultado?"

pasos:
  - "La mitad significa dividir por 2: {n} / 2 = {n / 2}"

explicacion: |
  "La mitad de x" se traduce como x/2.
```

### 4 — El cuadrado de un número

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "basico"
  tags: ["vocabulario", "cuadrado"]

variables:
  n: random(2, 20)

respuesta: n ^ 2
tipo: input
tolerancia_abs: 0

enunciado: "El cuadrado de un número. Si el número es {n}, ¿cuál es el resultado?"

pasos:
  - "El cuadrado significa elevar a la 2: {n}² = {n ^ 2}"

explicacion: |
  "El cuadrado de x" se traduce como x².
```

### 5 — El siguiente de un número

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "basico"
  tags: ["vocabulario", "siguiente"]

variables:
  n: random(1, 99)

respuesta: n + 1
tipo: input
tolerancia_abs: 0

enunciado: "El siguiente de un número. Si el número es {n}, ¿cuál es el resultado?"

explicacion: |
  "El siguiente de x" se traduce como x + 1.
```

### 6 — El anterior a un número

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "basico"
  tags: ["vocabulario", "anterior"]

variables:
  n: random(2, 100)

respuesta: n - 1
tipo: input
tolerancia_abs: 0

enunciado: "El anterior a un número. Si el número es {n}, ¿cuál es el resultado?"

explicacion: |
  "El anterior a x" se traduce como x − 1.
```

### 7 — Un número aumentado en un valor

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "basico"
  tags: ["vocabulario", "aumentado"]

variables:
  n: random(1, 80)
  a: random(1, 20)

respuesta: n + a
tipo: input
tolerancia_abs: 0

enunciado: "Un número aumentado en {a}. Si el número es {n}, ¿cuál es el resultado?"

explicacion: |
  "x aumentado en a" se traduce como x + a.
```

### 8 — Un número disminuido en un valor

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "basico"
  tags: ["vocabulario", "disminuido"]

variables:
  n: random(30, 100)
  a: random(1, 20)

respuesta: n - a
tipo: input
tolerancia_abs: 0

enunciado: "Un número disminuido en {a}. Si el número es {n}, ¿cuál es el resultado?"

explicacion: |
  "x disminuido en a" se traduce como x − a: el número es el que pierde a,
  no al revés.
```

### 9 — La diferencia entre un valor y un número (orden invertido)

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "intermedio"
  tags: ["vocabulario", "orden"]

variables:
  a: random(50, 100)
  n: random(1, 40)

respuesta: a - n
tipo: input
tolerancia_abs: 0

enunciado: "La diferencia entre {a} y un número. Si el número es {n}, ¿cuál es el resultado?"

explicacion: |
  "La diferencia entre A y B" se traduce como A − B, en ese orden: el
  primero nombrado es el que resta al segundo. Acá {a} resta {n}, no al
  revés.
```

### 10 — El triple de un número, aumentado en un valor (con coma)

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "intermedio"
  tags: ["orden", "parentesis"]

variables:
  n: random(1, 40)
  a: random(1, 20)

respuesta: 3 * n + a
tipo: input
tolerancia_abs: 0

enunciado: "El triple de un número, aumentado en {a}. Si el número es {n}, ¿cuál es el resultado?"

pasos:
  - "Primero se triplica: 3 × {n} = {3 * n}. Después se suma {a}: {3 * n} + {a} = {3 * n + a}"

explicacion: |
  La coma separa las dos operaciones: primero se triplica el número, y
  recién después se le suma {a} al resultado. Sin la coma ("el triple de
  un número aumentado en {a}") el resultado sería otro.
```

### 11 — El triple de un número aumentado en un valor (sin coma)

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "intermedio"
  tags: ["orden", "parentesis"]

variables:
  n: random(1, 40)
  a: random(1, 20)

respuesta: 3 * (n + a)
tipo: input
tolerancia_abs: 0

enunciado: "El triple de un número aumentado en {a}. Si el número es {n}, ¿cuál es el resultado?"

pasos:
  - "Sin coma, primero se aumenta: {n} + {a} = {n + a}. Después se triplica todo: 3 × {n + a} = {3 * (n + a)}"

explicacion: |
  Sin la coma, "aumentado en {a}" describe al número antes de triplicar:
  primero se suma, y el resultado completo es lo que se triplica. Hace
  falta el paréntesis: 3({n}+{a}), no 3×{n}+{a}.
```

### 12 — La suma de dos números

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "basico"
  tags: ["vocabulario", "dos_numeros"]

variables:
  x: random(1, 50)
  oy: random(1, 50)

respuesta: x + oy
tipo: input
tolerancia_abs: 0

enunciado: "La suma de dos números. Si son {x} y {oy}, ¿cuál es el resultado?"

explicacion: |
  "La suma de x e y" se traduce como x + y.
```

### 13 — El producto de dos números

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "basico"
  tags: ["vocabulario", "dos_numeros"]

variables:
  x: random(2, 20)
  oy: random(2, 20)

respuesta: x * oy
tipo: input
tolerancia_abs: 0

enunciado: "El producto de dos números. Si son {x} y {oy}, ¿cuál es el resultado?"

explicacion: |
  "El producto de x e y" se traduce como x · y.
```

### 14 — La diferencia entre dos números

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "intermedio"
  tags: ["vocabulario", "dos_numeros", "orden"]

variables:
  x: random(50, 100)
  oy: random(1, 49)

respuesta: x - oy
tipo: input
tolerancia_abs: 0

enunciado: "La diferencia entre {x} y {oy}. ¿Cuál es el resultado?"

explicacion: |
  El primero nombrado ({x}) resta al segundo ({oy}).
```

### 15 — El cociente entre dos números

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "basico"
  tags: ["vocabulario", "dos_numeros"]

variables:
  oy: random(2, 12)
  k: random(2, 12)
  x: oy * k

respuesta: x / oy
tipo: input
tolerancia_abs: 0

enunciado: "El cociente entre {x} y {oy}. ¿Cuál es el resultado?"

explicacion: |
  "El cociente entre x e y" se traduce como x/y, en ese orden.
```

### 16 — El doble de la suma de un número y un valor

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "intermedio"
  tags: ["orden", "parentesis"]

variables:
  n: random(1, 40)
  a: random(1, 20)

respuesta: 2 * (n + a)
tipo: input
tolerancia_abs: 0

enunciado: "El doble de la suma de un número y {a}. Si el número es {n}, ¿cuál es el resultado?"

pasos:
  - "La suma va completa adentro del paréntesis: ({n} + {a}) = {n + a}. Después se duplica: 2 × {n + a} = {2 * (n + a)}"

explicacion: |
  "El doble de [una suma]" triplica — acá duplica — el resultado completo
  de esa suma: 2({n}+{a}).
```

### 17 — La mitad de un número, menos un valor

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "intermedio"
  tags: ["orden", "mitad"]

variables:
  n: random(1, 50) * 2
  a: random(1, 10)

respuesta: n / 2 - a
tipo: input
tolerancia_abs: 0

enunciado: "La mitad de un número, menos {a}. Si el número es {n}, ¿cuál es el resultado?"

explicacion: |
  La coma vuelve a separar: primero la mitad, después se resta {a} al
  resultado.
```

### 18 — El cuadrado de la diferencia entre un número y un valor

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "intermedio"
  tags: ["orden", "parentesis", "cuadrado"]

variables:
  n: random(20, 40)
  a: random(1, 10)

respuesta: (n - a) ^ 2
tipo: input
tolerancia_abs: 0

enunciado: "El cuadrado de la diferencia entre un número y {a}. Si el número es {n}, ¿cuál es el resultado?"

explicacion: |
  La diferencia va completa adentro del paréntesis antes de elevarla al
  cuadrado: ({n}−{a})², no {n}² − {a}.
```

### 19 — El doble de un número, más el triple de otro

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "intermedio"
  tags: ["dos_numeros", "combinacion"]

variables:
  x: random(1, 30)
  oy: random(1, 30)

respuesta: 2 * x + 3 * oy
tipo: input
tolerancia_abs: 0

enunciado: "El doble de un número, más el triple de otro. Si son {x} y {oy}, ¿cuál es el resultado?"

explicacion: |
  Cada número lleva su propio multiplicador antes de sumar: 2·{x} + 3·{oy}.
```

### 20 — El triple de un número, más el doble de otro

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "intermedio"
  tags: ["dos_numeros", "combinacion"]

variables:
  x: random(1, 30)
  oy: random(1, 30)

respuesta: 3 * x + 2 * oy
tipo: input
tolerancia_abs: 0

enunciado: "El triple de un número, más el doble de otro. Si son {x} y {oy}, ¿cuál es el resultado?"

explicacion: |
  Mismos ingredientes que el ejercicio anterior, con los multiplicadores
  cruzados: 3·{x} + 2·{oy}, no 2·{x} + 3·{oy}.
```

### 21 — El siguiente del doble de un número

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "intermedio"
  tags: ["orden", "combinacion"]

variables:
  n: random(1, 50)

respuesta: 2 * n + 1
tipo: input
tolerancia_abs: 0

enunciado: "El siguiente del doble de un número. Si el número es {n}, ¿cuál es el resultado?"

pasos:
  - "Primero el doble: 2 × {n} = {2 * n}. Después el siguiente: {2 * n} + 1 = {2 * n + 1}"

explicacion: |
  Primero se duplica, y el siguiente se calcula sobre ese resultado.
```

### 22 — El doble del siguiente de un número

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "intermedio"
  tags: ["orden", "combinacion"]

variables:
  n: random(1, 50)

respuesta: 2 * (n + 1)
tipo: input
tolerancia_abs: 0

enunciado: "El doble del siguiente de un número. Si el número es {n}, ¿cuál es el resultado?"

pasos:
  - "Primero el siguiente: {n} + 1 = {n + 1}. Después el doble: 2 × {n + 1} = {2 * (n + 1)}"

explicacion: |
  Orden opuesto al ejercicio anterior: acá primero se calcula el
  siguiente, y ese resultado completo es el que se duplica.
```

### 23 — La mitad del anterior a un número

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "avanzado"
  tags: ["orden", "combinacion", "mitad"]

variables:
  n: random(1, 50) * 2 + 1

respuesta: (n - 1) / 2
tipo: input
tolerancia_abs: 0

enunciado: "La mitad del anterior a un número. Si el número es {n}, ¿cuál es el resultado?"

explicacion: |
  Primero el anterior ({n}−1), y de ese resultado se toma la mitad.
```

### 24 — El anterior a la mitad de un número

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "avanzado"
  tags: ["orden", "combinacion", "mitad"]

variables:
  n: random(1, 50) * 2

respuesta: n / 2 - 1
tipo: input
tolerancia_abs: 0

enunciado: "El anterior a la mitad de un número. Si el número es {n}, ¿cuál es el resultado?"

explicacion: |
  Primero la mitad ({n}/2), y a ese resultado se le resta 1.
```

### 25 — El producto de un número por su siguiente

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "avanzado"
  tags: ["mismo_numero", "combinacion"]

variables:
  n: random(1, 30)

respuesta: n * (n + 1)
tipo: input
tolerancia_abs: 0

enunciado: "El producto de un número por su siguiente. Si el número es {n}, ¿cuál es el resultado?"

explicacion: |
  "Su siguiente" repite el mismo número, no uno nuevo: {n} × ({n}+1).
```

### 26 — El cuadrado de un número, aumentado en su doble

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "avanzado"
  tags: ["mismo_numero", "combinacion"]

variables:
  n: random(1, 20)

respuesta: n ^ 2 + 2 * n
tipo: input
tolerancia_abs: 0

enunciado: "El cuadrado de un número, aumentado en su doble. Si el número es {n}, ¿cuál es el resultado?"

explicacion: |
  "Su doble" usa el mismo número que ya apareció en "cuadrado": {n}² + 2·{n}.
```

### 27 — La suma de un número y su cuadrado

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "avanzado"
  tags: ["mismo_numero", "combinacion"]

variables:
  n: random(1, 20)

respuesta: n + n ^ 2
tipo: input
tolerancia_abs: 0

enunciado: "La suma de un número y su cuadrado. Si el número es {n}, ¿cuál es el resultado?"

explicacion: |
  {n} + {n}², el mismo número usado dos veces con roles distintos.
```

### 28 — El triple de la diferencia entre un número y un valor

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "intermedio"
  tags: ["orden", "parentesis"]

variables:
  n: random(20, 40)
  a: random(1, 10)

respuesta: 3 * (n - a)
tipo: input
tolerancia_abs: 0

enunciado: "El triple de la diferencia entre un número y {a}. Si el número es {n}, ¿cuál es el resultado?"

explicacion: |
  La diferencia va completa adentro del paréntesis antes de triplicar:
  3({n}−{a}).
```

### 29 — La diferencia entre el triple de un número y un valor

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "intermedio"
  tags: ["orden", "parentesis"]

variables:
  n: random(1, 30)
  a: random(1, 20)

respuesta: 3 * n - a
tipo: input
tolerancia_abs: 0

enunciado: "La diferencia entre el triple de un número y {a}. Si el número es {n}, ¿cuál es el resultado?"

explicacion: |
  Acá "el triple de un número" ya es un resultado armado (3·{n}) antes de
  restarle {a} — no hace falta paréntesis porque la multiplicación ya
  tiene mayor jerarquía que la resta.
```

### 30 — La mitad de la suma de dos números

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "intermedio"
  tags: ["dos_numeros", "mitad", "parentesis"]

variables:
  x: random(1, 40) * 2
  oy: random(1, 40) * 2

respuesta: (x + oy) / 2
tipo: input
tolerancia_abs: 0

enunciado: "La mitad de la suma de {x} y {oy}. ¿Cuál es el resultado?"

explicacion: |
  La suma se calcula completa antes de tomar la mitad: ({x}+{oy})/2.
```

### 31 — El doble del producto de dos números

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "intermedio"
  tags: ["dos_numeros", "combinacion"]

variables:
  x: random(1, 20)
  oy: random(1, 20)

respuesta: 2 * x * oy
tipo: input
tolerancia_abs: 0

enunciado: "El doble del producto de {x} y {oy}. ¿Cuál es el resultado?"

explicacion: |
  Primero el producto ({x}·{oy}), después se duplica ese resultado.
```

### 32 — El cociente entre la suma de dos números y un tercero

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "avanzado"
  tags: ["dos_numeros", "parentesis"]

variables:
  x: random(1, 30)
  oy: random(1, 30)
  z: uno_de(divisores(x + oy))

respuesta: (x + oy) / z
tipo: input
tolerancia_abs: 0

enunciado: "El cociente entre la suma de {x} y {oy}, y {z}. ¿Cuál es el resultado?"

explicacion: |
  La suma va completa adentro del paréntesis antes de dividir por {z}:
  ({x}+{oy})/{z}.
```

### 33 — El cuadrado de la suma de un número y su siguiente

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "avanzado"
  tags: ["mismo_numero", "combinacion", "cuadrado"]

variables:
  n: random(1, 20)

respuesta: (n + (n + 1)) ^ 2
tipo: input
tolerancia_abs: 0

enunciado: "El cuadrado de la suma de un número y su siguiente. Si el número es {n}, ¿cuál es el resultado?"

explicacion: |
  Primero la suma completa ({n} + ({n}+1)), y recién ese resultado se
  eleva al cuadrado.
```

### 34 — La diferencia entre el cuadrado de un número y su siguiente

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "avanzado"
  tags: ["mismo_numero", "combinacion"]

variables:
  n: random(2, 20)

respuesta: n ^ 2 - (n + 1)
tipo: input
tolerancia_abs: 0

enunciado: "La diferencia entre el cuadrado de un número y su siguiente. Si el número es {n}, ¿cuál es el resultado?"

explicacion: |
  "El cuadrado de un número" ({n}²) resta a "su siguiente" ({n}+1), en
  ese orden.
```

### 35 — La diferencia entre el siguiente de un número y su cuadrado

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "avanzado"
  tags: ["mismo_numero", "combinacion", "orden"]

variables:
  n: random(2, 20)

respuesta: (n + 1) - n ^ 2

tipo: input
tolerancia_abs: 0

enunciado: "La diferencia entre el siguiente de un número y su cuadrado. Si el número es {n}, ¿cuál es el resultado?"

explicacion: |
  Orden invertido respecto al ejercicio anterior: ahora "el siguiente"
  resta al "cuadrado" — el resultado suele dar negativo, y eso es
  correcto: el cuadrado crece más rápido que el siguiente.
```

### 36 — El doble de un número, disminuido en la mitad de otro

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "avanzado"
  tags: ["dos_numeros", "combinacion", "mitad"]

variables:
  x: random(1, 30)
  oy: random(1, 30) * 2

respuesta: 2 * x - oy / 2
tipo: input
tolerancia_abs: 0

enunciado: "El doble de un número, disminuido en la mitad de otro. Si son {x} y {oy}, ¿cuál es el resultado?"

explicacion: |
  Cada número lleva su propia operación antes de restar: 2·{x} − {oy}/2.
```

### 37 — Trampa de paréntesis: con coma

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "intermedio"
  tags: ["orden", "parentesis", "opcion_multiple"]

variables:
  n: random(2, 20)
  a: random(2, 15)

respuesta: 3 * n + a
tipo: mc
opciones_explicitas:
  - 3 * n + a
  - 3 * (n + a)
  - 3 * n * a

enunciado: "El triple de un número, aumentado en {a}. Si el número es {n}, ¿cuál es el resultado?"

explicacion: |
  La coma indica que primero se triplica y después se suma {a}: 3{n}+{a}.
  3({n}+{a}) sería la traducción de la misma frase SIN la coma.
```

### 38 — Trampa de paréntesis: sin coma

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "intermedio"
  tags: ["orden", "parentesis", "opcion_multiple"]

variables:
  n: random(2, 20)
  a: random(2, 15)

respuesta: 3 * (n + a)
tipo: mc
opciones_explicitas:
  - 3 * (n + a)
  - 3 * n + a
  - n + a + 3

enunciado: "El triple de un número aumentado en {a}. Si el número es {n}, ¿cuál es el resultado?"

explicacion: |
  Sin coma, "aumentado en {a}" describe al número antes de triplicar: hace
  falta el paréntesis, 3({n}+{a}).
```

### 39 — Trampa de orden: diferencia entre un valor y un número

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "intermedio"
  tags: ["orden", "opcion_multiple"]

variables:
  a: random(30, 60)
  n: random(1, 25)

respuesta: a - n
tipo: mc
opciones_explicitas:
  - a - n
  - n - a

enunciado: "La diferencia entre {a} y un número. Si el número es {n}, ¿cuál es el resultado?"

explicacion: |
  El primero nombrado ({a}) resta al segundo ({n}), en ese orden.
```

### 40 — Trampa de orden: un número disminuido en un valor

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "intermedio"
  tags: ["orden", "opcion_multiple"]

variables:
  n: random(30, 60)
  a: random(1, 25)

respuesta: n - a
tipo: mc
opciones_explicitas:
  - n - a
  - a - n

enunciado: "Un número disminuido en {a}. Si el número es {n}, ¿cuál es el resultado?"

explicacion: |
  Acá el número es el que pierde {a}, aunque el nombre "{a}" aparezca
  segundo en la frase igual que en el ejercicio anterior — el que resta
  primero cambia según la construcción gramatical ("un número disminuido
  en X" vs. "la diferencia entre X y un número"), no sólo según qué
  palabra aparece primero.
```
