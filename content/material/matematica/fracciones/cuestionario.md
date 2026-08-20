# Matemática — Fracciones: equivalencia y orden (cuestionario, 28 preguntas VBLang)

> Tema: `N6`. Ver `teoria.md` en esta misma carpeta. Usa el builtin
> `mcd(a, b)` del DSL para simplificar (confirmado en
> `packages/vblang/src/validator/builtin-signatures.ts`).

---

### 1 — Qué es el numerador

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "basico"
  tags: ["fracciones", "vocabulario"]

enunciado: "En la fracción 3/4, ¿qué representa el 3 (el numerador)?"
tipo: mc
opciones_explicitas:
  - "Cuántas partes se toman"
  - "En cuántas partes se dividió el todo"
  - "El resultado de la división"
respuesta: "Cuántas partes se toman"

explicacion: |
  El numerador dice cuántas partes del todo se están tomando.
```

### 2 — Qué es el denominador

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "basico"
  tags: ["fracciones", "vocabulario"]

enunciado: "En la fracción 3/4, ¿qué representa el 4 (el denominador)?"
tipo: mc
opciones_explicitas:
  - "En cuántas partes iguales se dividió el todo"
  - "Cuántas partes se toman"
  - "El resultado de la división"
respuesta: "En cuántas partes iguales se dividió el todo"

explicacion: |
  El denominador dice en cuántas partes iguales se dividió el entero.
```

### 3 — ¿Son fracciones equivalentes?

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "intermedio"
  tags: ["fracciones", "equivalencia"]

variables:
  a: random(1, 9)
  b: random(2, 9)
  k: random(2, 8)
  c: a * k
  d: b * k

respuesta: (a * d == b * c)
tipo: vf

enunciado: "¿Son equivalentes las fracciones {a}/{b} y {c}/{d}?"

pasos:
  - "Producto cruzado: {a} × {d} = {a * d}. {b} × {c} = {b * c}. ¿Son iguales?"

explicacion: |
  Dos fracciones son equivalentes si el producto cruzado da lo mismo de
  los dos lados.
```

### 4 — ¿Son fracciones equivalentes? (caso falso)

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "intermedio"
  tags: ["fracciones", "equivalencia"]

variables:
  a: random(1, 9)
  b: random(2, 9)
  c: random(1, 9)
  d: random(2, 9)

restricciones:
  - (a * d) != (b * c)

respuesta: falso
tipo: vf

enunciado: "¿Son equivalentes las fracciones {a}/{b} y {c}/{d}?"

explicacion: |
  El producto cruzado no da igual de los dos lados: no son equivalentes.
```

### 5 — Amplificar una fracción

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "basico"
  tags: ["fracciones", "amplificar"]

variables:
  a: random(1, 9)
  b: random(2, 9)
  k: random(2, 9)

respuesta: a * k
tipo: input
tolerancia_abs: 0

enunciado: "Para amplificar {a}/{b} multiplicando por {k}, ¿cuál queda el nuevo numerador?"

pasos:
  - "{a} × {k} = {a * k} (y el denominador queda {b} × {k} = {b * k})"

explicacion: |
  Amplificar es multiplicar numerador y denominador por el mismo número,
  para llegar a una fracción equivalente.
```

### 6 — Simplificar una fracción

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "intermedio"
  tags: ["fracciones", "simplificar"]

variables:
  divisor_comun: random(2, 9)
  num: divisor_comun * random(2, 9)
  den: divisor_comun * random(2, 9)
  simplificador: mcd(num, den)

restricciones:
  - num != den

respuesta: num / simplificador
tipo: input
tolerancia_abs: 0

enunciado: "Al simplificar {num}/{den} al máximo (dividiendo por su MCD), ¿cuál queda el numerador?"

pasos:
  - "MCD({num}, {den}) = {simplificador}. {num} ÷ {simplificador} = {num / simplificador}"

explicacion: |
  Simplificar al máximo es dividir numerador y denominador por su MCD.
```

### 7 — Fracción irreducible

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "intermedio"
  tags: ["fracciones", "simplificar"]

variables:
  a: random(1, 20)
  b: a + 1

respuesta: verdadero
tipo: vf

enunciado: "¿Es {a}/{b} una fracción irreducible (que ya no se puede simplificar más)?"

explicacion: |
  Como {a} y {b} son números consecutivos, su MCD es 1: no se pueden
  simplificar más.
```

### 8 — Comparar fracciones con el mismo denominador

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "basico"
  tags: ["fracciones", "comparacion"]

variables:
  b: random(5, 20)
  a: random(1, b - 1)
  c: random(1, b - 1)

restricciones:
  - a != c

respuesta: (a > c)
tipo: vf

enunciado: "¿Es {a}/{b} mayor que {c}/{b}?"

explicacion: |
  Con el mismo denominador, alcanza con comparar los numeradores.
```

### 9 — Comparar fracciones con distinto denominador

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "intermedio"
  tags: ["fracciones", "comparacion"]

variables:
  a: random(1, 9)
  b: random(2, 9)
  c: random(1, 9)
  d: random(2, 9)

restricciones:
  - (a * d) != (b * c)

respuesta: (a * d > b * c)
tipo: vf

enunciado: "¿Es {a}/{b} mayor que {c}/{d}?"

pasos:
  - "Producto cruzado: {a} × {d} = {a * d}. {b} × {c} = {b * c}."

explicacion: |
  Con distinto denominador, se compara el producto cruzado: a/b es mayor
  que c/d si a×d es mayor que b×c.
```

### 10 — Fracción propia o impropia

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "basico"
  tags: ["fracciones", "vocabulario"]

variables:
  b: random(2, 9)
  a: random(1, b - 1)

respuesta: verdadero
tipo: vf

enunciado: "¿Es {a}/{b} una fracción propia (menor que 1 entero)?"

explicacion: |
  Como el numerador es menor que el denominador, la fracción vale menos
  que un entero completo.
```

### 11 — Fracción impropia

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "basico"
  tags: ["fracciones", "vocabulario"]

variables:
  b: random(2, 9)
  a: b + random(1, 9)

respuesta: falso
tipo: vf

enunciado: "¿Es {a}/{b} una fracción propia (menor que 1 entero)?"

explicacion: |
  Como el numerador es mayor que el denominador, esta fracción es
  impropia: vale 1 entero o más.
```

### 12 — Convertir a número mixto: la parte entera

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "intermedio"
  tags: ["fracciones", "numero_mixto"]

variables:
  b: random(2, 9)
  entero: random(1, 5)
  resto: random(1, b - 1)
  a: b * entero + resto

respuesta: entero
tipo: input
tolerancia_abs: 0

enunciado: "Al convertir la fracción impropia {a}/{b} a número mixto, ¿cuál es la parte entera?"

pasos:
  - "{a} ÷ {b} da cociente {entero} (y resto {resto})"

explicacion: |
  La parte entera es el cociente de dividir el numerador por el
  denominador.
```

### 13 — Convertir a número mixto: la parte fraccionaria

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "intermedio"
  tags: ["fracciones", "numero_mixto"]

variables:
  b: random(2, 9)
  entero: random(1, 5)
  resto: random(1, b - 1)
  a: b * entero + resto

respuesta: resto
tipo: input
tolerancia_abs: 0

enunciado: "Al convertir {a}/{b} a número mixto, ¿cuál queda el numerador de la parte fraccionaria (sobre el mismo denominador {b})?"

pasos:
  - "El resto de {a} ÷ {b} es {resto}: el número mixto queda {entero} entero(s) y {resto}/{b}"

explicacion: |
  La parte fraccionaria es el resto de la división, sobre el mismo
  denominador original.
```

### 14 — Convertir número mixto a fracción impropia

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "intermedio"
  tags: ["fracciones", "numero_mixto"]

variables:
  entero: random(1, 6)
  b: random(2, 9)
  resto: random(1, b - 1)

respuesta: entero * b + resto
tipo: input
tolerancia_abs: 0

enunciado: "El número mixto es {entero} entero(s) y {resto}/{b}. ¿Cuál es el numerador de la fracción impropia equivalente (sobre el mismo denominador {b})?"

pasos:
  - "{entero} × {b} + {resto} = {entero * b + resto}"

explicacion: |
  Se multiplica la parte entera por el denominador y se suma el
  numerador de la parte fraccionaria.
```

### 15 — Ordenar fracciones con el mismo denominador

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "basico"
  tags: ["fracciones", "orden"]

tipo: ordenar
enunciado: "Ordená estas fracciones de menor a mayor (todas tienen el mismo denominador)."
opciones_explicitas:
  - "5/8"
  - "1/8"
  - "6/8"
  - "3/8"
respuesta_orden: ["1/8", "3/8", "5/8", "6/8"]

explicacion: |
  Con el mismo denominador, alcanza con ordenar los numeradores.
```

### 16 — Elegir la fracción equivalente correcta

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "intermedio"
  tags: ["fracciones", "equivalencia"]

variables:
  a: random(1, 9)
  b: random(2, 9)
  k: random(2, 6)

respuesta: a * k
tipo: mc
opciones_explicitas:
  - a * k
  - a * k + 1
  - a + k

enunciado: "¿Cuál es el numerador de una fracción equivalente a {a}/{b}, con denominador {b * k}?"

explicacion: |
  Si el denominador se multiplicó por {k}, el numerador también tiene que
  multiplicarse por {k} para que la fracción siga valiendo lo mismo.
```

### 17 — Elegir cuál NO es equivalente

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "intermedio"
  tags: ["fracciones", "equivalencia"]

variables:
  a: random(1, 9)
  b: random(2, 9)
  k: random(2, 6)
  equivalente: a * k
  no_equivalente: equivalente + 1

respuesta: no_equivalente
tipo: mc
opciones_explicitas:
  - equivalente
  - no_equivalente

enunciado: "¿Cuál de estos dos numeradores NO forma una fracción equivalente a {a}/{b}, con denominador {b * k}?"

explicacion: |
  Sólo {a} × {k} = {equivalente} mantiene la misma proporción.
```

### 18 — Problema: pizza partida

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "basico"
  tags: ["fracciones", "problema"]

variables:
  porciones: random(4, 12)
  comidas: random(1, porciones - 1)

respuesta: comidas
tipo: input
tolerancia_abs: 0

enunciado: "Una pizza se cortó en {porciones} porciones iguales. Si te comiste {comidas} porciones, ¿cuál es el numerador de la fracción de pizza que comiste (sobre {porciones})?"

explicacion: |
  La cantidad de porciones comidas es, directamente, el numerador de la
  fracción sobre el total de porciones.
```

### 19 — Verificar equivalencia (con error a veces)

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "intermedio"
  tags: ["fracciones", "verificacion"]

variables:
  a: random(1, 9)
  b: random(2, 9)
  k: random(2, 8)
  c_correcto: a * k
  error: uno_de([0, 0, 0, 1, -1])
  c_mostrado: c_correcto + error
  d: b * k

respuesta: (a * d == c_mostrado * b)
tipo: vf

enunciado: "¿Es {c_mostrado}/{d} equivalente a {a}/{b}?"

explicacion: |
  Se verifica con el producto cruzado: si no coincide, no son
  equivalentes.
```

### 20 — Simplificar otra fracción

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "intermedio"
  tags: ["fracciones", "simplificar"]

variables:
  divisor_comun: random(2, 9)
  num: divisor_comun * random(2, 9)
  den: divisor_comun * random(2, 9)
  simplificador: mcd(num, den)

restricciones:
  - num != den

respuesta: den / simplificador
tipo: input
tolerancia_abs: 0

enunciado: "Al simplificar {num}/{den} al máximo, ¿cuál queda el denominador?"

explicacion: |
  Se divide también el denominador por el mismo MCD que se usó en el
  numerador.
```

### 21 — Comparar y elegir cuál es mayor

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "intermedio"
  tags: ["fracciones", "comparacion"]

variables:
  a: random(1, 9)
  b: random(2, 9)
  c: random(1, 9)
  d: random(2, 9)

restricciones:
  - (a * d) != (b * c)

respuesta: (a * d > b * c)
tipo: mc
opciones_explicitas:
  - verdadero
  - falso

enunciado: "¿Es cierto que {a}/{b} es mayor que {c}/{d}?"

explicacion: |
  Se compara con el producto cruzado.
```

### 22 — Una fracción con el mismo numerador y denominador

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "basico"
  tags: ["fracciones", "vocabulario"]

variables:
  n: random(2, 20)

respuesta: verdadero
tipo: vf

enunciado: "¿Es cierto que {n}/{n} representa exactamente 1 entero?"

explicacion: |
  Cuando el numerador y el denominador son iguales, la fracción vale 1: el
  todo entero se dividió en n partes y se tomaron las n.
```

### 23 — Numerador 0

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "basico"
  tags: ["fracciones", "vocabulario"]

variables:
  n: random(2, 20)

respuesta: verdadero
tipo: vf

enunciado: "¿Es cierto que 0/{n} vale 0?"

explicacion: |
  No tomar ninguna parte (numerador 0) de cualquier cantidad de partes
  vale 0.
```

### 24 — El denominador no puede ser 0

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "basico"
  tags: ["fracciones", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Una fracción no puede tener 0 como denominador."

explicacion: |
  Dividir por 0 no está definido (ver la teoría de división): el
  denominador siempre tiene que ser distinto de 0.
```

### 25 — Elegir la mayor entre tres fracciones

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "avanzado"
  tags: ["fracciones", "comparacion"]

variables:
  b: random(6, 12)
  a: random(1, b - 1)
  c: random(1, b - 1)
  e: random(1, b - 1)

restricciones:
  - a != c
  - a != e
  - c != e

respuesta: max(a, c, e)
tipo: mc
opciones_explicitas:
  - a
  - c
  - e

enunciado: "Entre {a}/{b}, {c}/{b} y {e}/{b} (mismo denominador), ¿cuál numerador corresponde a la fracción mayor?"

explicacion: |
  Con el mismo denominador, la fracción mayor es la que tiene el
  numerador más grande.
```

### 26 — Completar el numerador que falta

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "intermedio"
  tags: ["fracciones", "equivalencia"]

variables:
  a: random(1, 9)
  b: random(2, 9)
  k: random(2, 8)

tipo: completar
enunciado: "Completá: {a}/{b} = ___/{b * k} (fracciones equivalentes)."
respuestas_validas:
  - a * k

explicacion: |
  El numerador que falta tiene que guardar la misma proporción: se
  multiplica {a} por el mismo {k} que multiplicó al denominador.
```

### 27 — Problema: repartir en partes desiguales

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "avanzado"
  tags: ["fracciones", "problema"]

variables:
  total: random(10, 40)
  parte_a: random(1, total - 1)

respuesta: total - parte_a
tipo: input
tolerancia_abs: 0

enunciado: "Un grupo de {total} personas se divide en dos: {parte_a} van a un lado. ¿Cuántas personas quedan del otro lado (el numerador de la fracción complementaria, sobre {total})?"

explicacion: |
  Las dos partes complementarias siempre suman el total: si una fracción
  es {parte_a}/{total}, la otra es ({total} - {parte_a})/{total}.
```

### 28 — Qué representa una fracción (cierre)

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "basico"
  tags: ["fracciones", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Una fracción representa una parte de un todo dividido en partes iguales."

explicacion: |
  Es la idea central de toda esta unidad: numerador y denominador,
  equivalencia, comparación — todo se apoya en esta definición.
```
