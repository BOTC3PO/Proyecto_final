# Matemática — Máximo Común Divisor (MCD) (cuestionario, 24 preguntas VBLang)

> Tema: `N5` (mitad). Ver `teoria.md` en esta misma carpeta. Usa el
> builtin `mcd(a, b)` del DSL (confirmado en
> `packages/vblang/src/validator/builtin-signatures.ts`).

---

### 1 — Qué es el MCD

```
metadata:
  materia: "matematicas"
  tema: "mcd"
  nivel: "basico"
  tags: ["mcd", "vocabulario"]

enunciado: "¿Qué es el Máximo Común Divisor (MCD) de dos números?"
tipo: mc
opciones_explicitas:
  - "El mayor número que es divisor de los dos a la vez"
  - "El menor número que es múltiplo de los dos a la vez"
  - "La suma de todos los divisores en común"
respuesta: "El mayor número que es divisor de los dos a la vez"

explicacion: |
  Se buscan los divisores en común de los dos números, y se toma el más
  grande.
```

### 2 — Calcular el MCD (números chicos)

```
metadata:
  materia: "matematicas"
  tema: "mcd"
  nivel: "basico"
  tags: ["mcd"]

variables:
  a: random(4, 40)
  b: random(4, 40)

respuesta: mcd(a, b)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el MCD de {a} y {b}?"

explicacion: |
  Se buscan los divisores en común de {a} y {b}, y se toma el mayor.
```

### 3 — Calcular el MCD (números más grandes)

```
metadata:
  materia: "matematicas"
  tema: "mcd"
  nivel: "intermedio"
  tags: ["mcd"]

variables:
  a: random(40, 200)
  b: random(40, 200)

respuesta: mcd(a, b)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el MCD de {a} y {b}?"

explicacion: |
  Con números más grandes conviene usar la factorización prima en vez de
  listar todos los divisores.
```

### 4 — MCD por factorización prima

```
metadata:
  materia: "matematicas"
  tema: "mcd"
  nivel: "intermedio"
  tags: ["mcd", "factorizacion"]

variables:
  primo_comun: uno_de([2, 3, 5])
  k1: random(2, 9)
  k2: random(2, 9)
  a: primo_comun * k1
  b: primo_comun * k2

restricciones:
  - k1 != k2

respuesta: mcd(a, b)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el MCD de {a} y {b}?"

pasos:
  - "{a} = {primo_comun} × {k1}. {b} = {primo_comun} × {k2}. Comparten el factor {primo_comun}."

explicacion: |
  Al menos comparten el factor primo {primo_comun}; el MCD real puede ser
  más grande si {k1} y {k2} también comparten factores.
```

### 5 — Identificar un divisor común

```
metadata:
  materia: "matematicas"
  tema: "mcd"
  nivel: "basico"
  tags: ["mcd", "divisores"]

variables:
  d: random(2, 9)
  a: d * random(2, 10)
  b: d * random(2, 10)

respuesta: verdadero
tipo: vf

enunciado: "¿Es {d} un divisor común de {a} y {b}?"

explicacion: |
  {d} divide a los dos, aunque no sea necesariamente el MCD (podría haber
  un divisor común más grande).
```

### 6 — MCD de números coprimos

```
metadata:
  materia: "matematicas"
  tema: "mcd"
  nivel: "intermedio"
  tags: ["mcd"]

variables:
  n: random(2, 200)

respuesta: mcd(n, n + 1)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el MCD de {n} y {n + 1} (dos números consecutivos)?"

explicacion: |
  Dos números consecutivos nunca comparten ningún factor (salvo el 1): su
  MCD siempre es 1.
```

### 7 — El MCD de un número y sí mismo

```
metadata:
  materia: "matematicas"
  tema: "mcd"
  nivel: "basico"
  tags: ["mcd"]

variables:
  n: random(2, 999)

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el MCD de {n} y {n}?"

explicacion: |
  El mayor divisor en común de un número consigo mismo es el propio
  número.
```

### 8 — El MCD nunca es mayor que el menor de los dos números

```
metadata:
  materia: "matematicas"
  tema: "mcd"
  nivel: "basico"
  tags: ["mcd", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El MCD de dos números nunca puede ser mayor que el más chico de los dos."

explicacion: |
  Un divisor de un número nunca puede ser mayor que ese número; como el
  MCD divide a los dos, no puede superar al más chico.
```

### 9 — Elegir el MCD correcto

```
metadata:
  materia: "matematicas"
  tema: "mcd"
  nivel: "intermedio"
  tags: ["mcd"]

variables:
  a: random(10, 60)
  b: random(10, 60)
  correcto: mcd(a, b)

respuesta: correcto
tipo: mc
opciones_explicitas:
  - correcto
  - correcto + 1
  - a

enunciado: "¿Cuál es el MCD de {a} y {b}?"

explicacion: |
  Las otras opciones no son divisores en común de los dos números (o no
  son el mayor de ellos).
```

### 10 — Simplificar una fracción usando el MCD

```
metadata:
  materia: "matematicas"
  tema: "mcd"
  nivel: "intermedio"
  tags: ["mcd", "problema"]

variables:
  d: random(2, 9)
  num: d * random(2, 9)
  den: d * random(2, 9)
  divisor_comun: mcd(num, den)

restricciones:
  - num != den

respuesta: num / divisor_comun
tipo: input
tolerancia_abs: 0

enunciado: "Para simplificar la fracción {num}/{den} al máximo, hay que dividir numerador y denominador por su MCD. ¿Cuál queda el numerador?"

pasos:
  - "El MCD de {num} y {den} es {divisor_comun}. {num} ÷ {divisor_comun} = {num / divisor_comun}"

explicacion: |
  Dividir numerador y denominador por su MCD da la fracción equivalente
  más simple posible.
```

### 11 — Problema: la mayor cantidad de grupos iguales

```
metadata:
  materia: "matematicas"
  tema: "mcd"
  nivel: "intermedio"
  tags: ["mcd", "problema"]

variables:
  a: random(10, 60)
  b: random(10, 60)

respuesta: mcd(a, b)
tipo: input
tolerancia_abs: 0

enunciado: "Tenés {a} caramelos y {b} chocolates, y querés armar la mayor cantidad posible de bolsitas iguales usando todos, sin mezclar tipos ni que sobre nada. ¿Cuántas bolsitas podés armar?"

explicacion: |
  La cantidad máxima de grupos iguales, sin que sobre nada de ninguno de
  los dos, es el MCD de las dos cantidades.
```

### 12 — Problema: cortar varillas en pedazos iguales

```
metadata:
  materia: "matematicas"
  tema: "mcd"
  nivel: "intermedio"
  tags: ["mcd", "problema"]

variables:
  a: random(20, 200)
  b: random(20, 200)

respuesta: mcd(a, b)
tipo: input
tolerancia_abs: 0

enunciado: "Tenés dos varillas de {a} cm y {b} cm, y querés cortarlas en pedazos iguales, del mayor tamaño posible, sin que sobre nada de ninguna. ¿De cuántos cm tiene que ser cada pedazo?"

explicacion: |
  El pedazo más grande posible que entra exacto en las dos varillas es el
  MCD de sus longitudes.
```

### 13 — MCD de tres números

```
metadata:
  materia: "matematicas"
  tema: "mcd"
  nivel: "avanzado"
  tags: ["mcd"]

variables:
  a: random(10, 80)
  b: random(10, 80)
  c: random(10, 80)

respuesta: mcd(mcd(a, b), c)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el MCD de {a}, {b} y {c}?"

pasos:
  - "Se calcula de a dos: MCD({a}, {b}) = {mcd(a, b)}, y después MCD({mcd(a, b)}, {c}) = {mcd(mcd(a, b), c)}"

explicacion: |
  El MCD de tres números se calcula de a pares: primero entre dos, y
  después ese resultado con el tercero.
```

### 14 — Verificar un MCD (con error a veces)

```
metadata:
  materia: "matematicas"
  tema: "mcd"
  nivel: "intermedio"
  tags: ["mcd", "verificacion"]

variables:
  a: random(10, 80)
  b: random(10, 80)
  correcto: mcd(a, b)
  error: uno_de([0, 0, 0, 1, -1])
  mostrado: correcto + error

respuesta: (mostrado == correcto)
tipo: vf

enunciado: "¿Es correcto decir que el MCD de {a} y {b} es {mostrado}?"

explicacion: |
  Hay que verificar dos cosas: que {mostrado} sea divisor de los dos
  números, y que no haya ningún divisor común más grande.
```

### 15 — MCD de dos primos distintos

```
metadata:
  materia: "matematicas"
  tema: "mcd"
  nivel: "intermedio"
  tags: ["mcd"]

variables:
  primos: [2, 3, 5, 7, 11, 13]
  p1: uno_de(primos)
  p2: uno_de(primos)

restricciones:
  - p1 != p2

respuesta: 1
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el MCD de {p1} y {p2} (dos números primos distintos)?"

explicacion: |
  Dos primos distintos no comparten ningún factor además del 1: su MCD
  siempre es 1.
```

### 16 — El MCD siempre es divisor de los dos números

```
metadata:
  materia: "matematicas"
  tema: "mcd"
  nivel: "basico"
  tags: ["mcd", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El MCD de dos números siempre es divisor de los dos, además de ser el mayor de los divisores en común."

explicacion: |
  Es la propia definición: el MCD tiene que dividir a ambos números para
  contar como divisor común.
```

### 17 — Completar el divisor común que falta

```
metadata:
  materia: "matematicas"
  tema: "mcd"
  nivel: "intermedio"
  tags: ["mcd", "divisores"]

variables:
  d: random(2, 9)
  a: d * random(2, 9)
  b: d * random(2, 9)

tipo: completar
enunciado: "Nombrá un divisor común de {a} y {b} (no hace falta que sea el MCD, alcanza con que sea común a los dos)."
respuestas_validas:
  - d
  - 1

explicacion: |
  Cualquier divisor que aparezca en las dos listas de divisores sirve; el
  1 siempre es válido porque divide a todos los números.
```

### 18 — MCD cuando un número es múltiplo del otro

```
metadata:
  materia: "matematicas"
  tema: "mcd"
  nivel: "intermedio"
  tags: ["mcd"]

variables:
  a: random(2, 30)
  k: random(2, 9)
  b: a * k

respuesta: a
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el MCD de {a} y {b}, sabiendo que {b} es múltiplo de {a}?"

explicacion: |
  Cuando un número es múltiplo del otro, el más chico de los dos ya es el
  MCD: no hace falta calcular nada más.
```

### 19 — Elegir cuál NO es divisor común

```
metadata:
  materia: "matematicas"
  tema: "mcd"
  nivel: "intermedio"
  tags: ["mcd", "divisores"]

variables:
  d: random(2, 9)
  a: d * random(2, 9)
  b: d * random(2, 9)
  no_comun: a + 1

respuesta: no_comun
tipo: mc
opciones_explicitas:
  - d
  - 1
  - no_comun

enunciado: "¿Cuál de estos tres números NO es divisor común de {a} y {b}?"

explicacion: |
  {no_comun} es mayor que {a}, así que ni siquiera puede ser divisor de
  {a}.
```

### 20 — MCD de números consecutivos (enunciado directo)

```
metadata:
  materia: "matematicas"
  tema: "mcd"
  nivel: "basico"
  tags: ["mcd", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El MCD de dos números consecutivos (como 8 y 9) siempre es 1."

explicacion: |
  Dos números consecutivos nunca comparten factores, salvo el 1.
```

### 21 — Problema: simplificar una razón

```
metadata:
  materia: "matematicas"
  tema: "mcd"
  nivel: "avanzado"
  tags: ["mcd", "problema"]

variables:
  d: random(2, 9)
  a: d * random(2, 9)
  b: d * random(2, 9)
  divisor_comun: mcd(a, b)

restricciones:
  - a != b

respuesta: b / divisor_comun
tipo: input
tolerancia_abs: 0

enunciado: "En un salón hay {a} varones y {b} mujeres. Para escribir esa razón de la forma más simple posible, hay que dividir los dos números por su MCD. ¿Cuál queda el número de mujeres?"

pasos:
  - "MCD({a}, {b}) = {divisor_comun}. {b} ÷ {divisor_comun} = {b / divisor_comun}"

explicacion: |
  Simplificar una razón es la misma idea que simplificar una fracción:
  dividir ambos números por su MCD.
```

### 22 — Elegir el MCD correcto (con factorización)

```
metadata:
  materia: "matematicas"
  tema: "mcd"
  nivel: "avanzado"
  tags: ["mcd", "factorizacion"]

variables:
  a: uno_de([12, 18, 24, 36])
  b: uno_de([12, 18, 24, 36])
  correcto: mcd(a, b)

restricciones:
  - a != b

respuesta: correcto
tipo: mc
opciones_explicitas:
  - correcto
  - a * b
  - correcto + 6

enunciado: "¿Cuál es el MCD de {a} y {b}?"

explicacion: |
  Conviene factorizar los dos números en primos y quedarse con los
  factores en común, usando el menor exponente de cada uno.
```

### 23 — El MCD no depende del orden

```
metadata:
  materia: "matematicas"
  tema: "mcd"
  nivel: "intermedio"
  tags: ["mcd", "propiedades"]

variables:
  a: random(10, 90)
  b: random(10, 90)

respuesta: (mcd(a, b) == mcd(b, a))
tipo: vf

enunciado: "¿Es cierto que el MCD de {a} y {b} da lo mismo que el MCD de {b} y {a}?"

explicacion: |
  El orden en que se comparan los dos números no cambia el resultado: el
  MCD es conmutativo.
```

### 24 — Qué representa el MCD (cierre)

```
metadata:
  materia: "matematicas"
  tema: "mcd"
  nivel: "basico"
  tags: ["mcd", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El MCD sirve para saber, entre otras cosas, cuál es el tamaño de grupo más grande que se puede repetir exacto en dos cantidades distintas, sin que sobre nada."

explicacion: |
  Es la aplicación práctica más común del MCD: repartir o cortar en la
  mayor cantidad posible de partes iguales.
```
