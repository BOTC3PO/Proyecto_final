# Matemática — Números primos: factorización prima (cuestionario, 24 preguntas VBLang)

> Tema: `N16`. Ver `teoria.md` en esta misma carpeta. Usa los builtins
> `es_primo(n)`, `divisores(n)` y `factorizar(n)` del DSL (confirmados en
> `packages/vblang/src/validator/builtin-signatures.ts`).

---

### 1 — Qué es un número primo

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "basico"
  tags: ["numeros_primos", "vocabulario"]

enunciado: "¿Qué es un número primo?"
tipo: mc
opciones_explicitas:
  - "Un número mayor que 1 con exactamente 2 divisores: el 1 y él mismo"
  - "Un número que no se puede dividir por ningún otro"
  - "Cualquier número impar"
respuesta: "Un número mayor que 1 con exactamente 2 divisores: el 1 y él mismo"

explicacion: |
  Todo número primo tiene exactamente dos divisores, ni más ni menos.
```

### 2 — ¿Es primo?

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "basico"
  tags: ["numeros_primos"]

variables:
  n: random(2, 50)

respuesta: es_primo(n)
tipo: vf

enunciado: "¿Es {n} un número primo?"

explicacion: |
  Se prueba si {n} tiene algún divisor además de 1 y él mismo.
```

### 3 — ¿Es primo? (número más grande)

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "intermedio"
  tags: ["numeros_primos"]

variables:
  n: random(50, 150)

respuesta: es_primo(n)
tipo: vf

enunciado: "¿Es {n} un número primo?"

explicacion: |
  Con números más grandes conviene probar dividir por los primos chicos
  (2, 3, 5, 7, 11...) hasta la raíz cuadrada de {n}.
```

### 4 — Qué es un número compuesto

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "basico"
  tags: ["numeros_primos", "vocabulario"]

enunciado: "¿Qué es un número compuesto?"
tipo: mc
opciones_explicitas:
  - "Un número mayor que 1 con más de 2 divisores"
  - "Cualquier número par"
  - "Un número que no tiene divisores"
respuesta: "Un número mayor que 1 con más de 2 divisores"

explicacion: |
  Si tiene más de 2 divisores, no puede ser primo: es compuesto.
```

### 5 — ¿Es compuesto?

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "basico"
  tags: ["numeros_primos"]

variables:
  n: random(4, 100)

respuesta: (es_primo(n) == falso)
tipo: vf

enunciado: "¿Es {n} un número compuesto?"

explicacion: |
  Un número mayor que 1 que no es primo, es compuesto — no hay una tercera
  opción (salvo el propio 1).
```

### 6 — El 1 no es primo ni compuesto

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "basico"
  tags: ["numeros_primos", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El número 1 no es primo ni compuesto."

explicacion: |
  El 1 tiene un solo divisor (él mismo), no dos, así que no cumple la
  definición de ninguno de los dos grupos.
```

### 7 — El 2 es el único primo par

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "basico"
  tags: ["numeros_primos", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El 2 es el único número primo que es par."

explicacion: |
  Cualquier otro número par tiene, como mínimo, tres divisores (1, 2, y él
  mismo), así que ya es compuesto.
```

### 8 — Elegir cuál es primo

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "intermedio"
  tags: ["numeros_primos"]

variables:
  candidatos: [11, 13, 17, 19, 23, 29, 31]
  primo: uno_de(candidatos)
  compuesto1: primo + 1
  compuesto2: primo - 1

respuesta: primo
tipo: mc
opciones_explicitas:
  - primo
  - compuesto1
  - compuesto2

enunciado: "¿Cuál de estos tres números es primo?"

explicacion: |
  Los otros dos son pares (compuestos): el número que queda entre dos
  pares consecutivos suele ser el único candidato a primo.
```

### 9 — Elegir cuál NO es primo

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "intermedio"
  tags: ["numeros_primos"]

variables:
  candidatos: [11, 13, 17, 19, 23, 29, 31]
  primo1: uno_de(candidatos)
  primo2: uno_de(candidatos)
  compuesto: primo1 + 1

restricciones:
  - primo1 != primo2

respuesta: compuesto
tipo: mc
opciones_explicitas:
  - primo1
  - primo2
  - compuesto

enunciado: "¿Cuál de estos tres números NO es primo?"

explicacion: |
  {compuesto} es par (y mayor que 2), así que ya tiene al 2 como tercer
  divisor.
```

### 10 — Cuántos divisores tiene un número primo

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "basico"
  tags: ["numeros_primos"]

variables:
  candidatos: [2, 3, 5, 7, 11, 13, 17, 19, 23]
  n: uno_de(candidatos)

respuesta: 2
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos divisores tiene el número primo {n}?"

explicacion: |
  Todo número primo tiene exactamente 2 divisores: el 1 y él mismo.
```

### 11 — Cuántos divisores tiene un número compuesto

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "intermedio"
  tags: ["numeros_primos"]

variables:
  n: random(4, 60)

respuesta: largo(divisores(n))
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos divisores tiene {n}?"

explicacion: |
  Se cuentan todos los divisores; si son más de 2, ya se sabe que {n} no
  es primo.
```

### 12 — El quinto número primo

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "basico"
  tags: ["numeros_primos"]

respuesta: 11
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el 5° número primo (contando el 2 como el primero: 2, 3, 5, 7, 11...)?"

explicacion: |
  Los primeros primos son 2, 3, 5, 7, 11 — el quinto es 11.
```

### 13 — Cuántos factores primos (contando repetidos)

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "intermedio"
  tags: ["numeros_primos", "factorizacion"]

variables:
  primos: [2, 3, 5, 7]
  p1: uno_de(primos)
  p2: uno_de(primos)
  p3: uno_de(primos)
  n: p1 * p2 * p3

respuesta: largo(factorizar(n))
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos factores primos tiene la factorización de {n} (contando cada repetido)?"

explicacion: |
  {n} se armó multiplicando 3 primos (a veces repetidos), así que su
  factorización tiene 3 factores en total.
```

### 14 — Reconstruir un número desde 2 factores primos

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "basico"
  tags: ["numeros_primos", "factorizacion"]

variables:
  primos: [2, 3, 5, 7, 11]
  p1: uno_de(primos)
  p2: uno_de(primos)

respuesta: p1 * p2
tipo: input
tolerancia_abs: 0

enunciado: "Si la factorización prima de un número es {p1} × {p2}, ¿cuál es ese número?"

explicacion: |
  Multiplicar los factores primos reconstruye el número original.
```

### 15 — Reconstruir un número desde 3 factores (potencia de un primo)

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "intermedio"
  tags: ["numeros_primos", "factorizacion"]

variables:
  primos: [2, 3, 5]
  p: uno_de(primos)

respuesta: p * p * p
tipo: input
tolerancia_abs: 0

enunciado: "Si la factorización prima de un número es {p} × {p} × {p}, ¿cuál es ese número?"

explicacion: |
  Un mismo primo puede repetirse en la factorización: {p} × {p} × {p} es
  {p} elevado al cubo.
```

### 16 — La factorización prima es única

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "basico"
  tags: ["numeros_primos", "factorizacion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Todo número compuesto tiene una única factorización prima (sin contar el orden de los factores)."

explicacion: |
  Es el Teorema Fundamental de la Aritmética: no hay dos formas distintas
  de descomponer el mismo número en primos.
```

### 17 — Un número par mayor que 2 nunca es primo

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "basico"
  tags: ["numeros_primos", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Ningún número par mayor que 2 puede ser primo."

explicacion: |
  Todo número par mayor que 2 tiene al 2 como divisor extra, además de 1 y
  él mismo: ya son 3 divisores como mínimo.
```

### 18 — Usar la regla del 2 como atajo

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "basico"
  tags: ["numeros_primos"]

variables:
  n: random(3, 200) * 2

respuesta: falso
tipo: vf

enunciado: "¿Es {n} un número primo?"

explicacion: |
  {n} es par y mayor que 2: la regla de divisibilidad del 2 ya alcanza
  para descartarlo como primo, sin necesidad de probar más divisores.
```

### 19 — Usar la regla del 3 como atajo

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "intermedio"
  tags: ["numeros_primos"]

variables:
  n: random(3, 200) * 3 + uno_de([0, 3, 6])

respuesta: falso
tipo: vf

enunciado: "¿Es {n} un número primo?"

explicacion: |
  La suma de las cifras de {n} es múltiplo de 3, así que ya se sabe que
  tiene al 3 como divisor extra — no puede ser primo.
```

### 20 — Ordenar números primos de menor a mayor

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "basico"
  tags: ["numeros_primos", "orden"]

tipo: ordenar
enunciado: "Ordená estos números primos de menor a mayor."
opciones_explicitas:
  - "17"
  - "5"
  - "13"
  - "11"
respuesta_orden: ["5", "11", "13", "17"]

explicacion: |
  Los cuatro son primos; sólo hace falta ordenarlos por tamaño.
```

### 21 — Un factor primo de un número

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "intermedio"
  tags: ["numeros_primos", "factorizacion"]

variables:
  primos: [2, 3, 5, 7]
  p: uno_de(primos)
  k: random(2, 20)
  n: p * k

respuesta: verdadero
tipo: vf

enunciado: "¿Es {p} uno de los factores primos de {n}?"

explicacion: |
  {n} se construyó multiplicando {p} por otro número, así que {p} tiene
  que aparecer en su factorización.
```

### 22 — Problema: repartir usando la factorización

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "avanzado"
  tags: ["numeros_primos", "problema"]

variables:
  primos: [2, 3, 5, 7]
  p1: uno_de(primos)
  p2: uno_de(primos)
  n: p1 * p2

respuesta: p2
tipo: input
tolerancia_abs: 0

enunciado: "Un salón con {n} sillas se organiza en {p1} filas iguales. ¿Cuántas sillas hay en cada fila?"

explicacion: |
  Como {n} = {p1} × {p2}, dividir por {p1} da exactamente {p2}.
```

### 23 — Descartar con dos reglas a la vez

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "intermedio"
  tags: ["numeros_primos"]

variables:
  n: random(3, 100) * 5

respuesta: falso
tipo: vf

enunciado: "¿Es {n} un número primo?"

explicacion: |
  {n} termina en 0 o en 5 (regla del 5): salvo que sea el propio 5, ya no
  puede ser primo.
```

### 24 — Primos gemelos (curiosidad)

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "avanzado"
  tags: ["numeros_primos"]

variables:
  candidatos: [3, 5, 11, 17, 29]
  p: uno_de(candidatos)

respuesta: es_primo(p + 2)
tipo: vf

enunciado: "{p} es primo. ¿{p} + 2 también es primo?"

explicacion: |
  Cuando dos primos están separados por sólo 2 (como 3 y 5, u 11 y 13) se
  llaman "primos gemelos" — no todos los primos tienen un gemelo así.
```
