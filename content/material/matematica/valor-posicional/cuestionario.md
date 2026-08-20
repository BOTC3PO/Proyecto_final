# Matemática — Valor posicional (cuestionario, 40 preguntas VBLang)

> Tema: `N1` (Tronco 1 — Numérico), mitad "Valor posicional". Ver
> `teoria.md` en esta misma carpeta.

Mismo formato que `../conteo/cuestionario.md`: plantillas VBLang reales,
`variables:` + `random(...)` en vez de repetir enunciados literales, sin
`dataset:` porque no hace falta ninguna tabla externa. Los números se
generan cifra por cifra (cada cifra es una variable propia) en vez de
sortear el número entero y tratar de "leerle" una cifra: así la respuesta
correcta sale de la misma cifra que ya se usó para construir el enunciado,
sin depender de ninguna función de extracción de dígitos.

---

### 1 — Identificar la cifra de las unidades

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "basico"
  tags: ["valor_posicional", "identificar_cifra"]

variables:
  c: random(1, 9)
  d: random(0, 9)
  u: random(0, 9)
  numero: c * 100 + d * 10 + u

respuesta: u
tipo: input
tolerancia_abs: 0

enunciado: "En el número {numero}, ¿qué cifra ocupa el lugar de las unidades?"

pasos:
  - "Las unidades son la cifra más a la derecha de {numero}: {u}"

explicacion: |
  La cifra de las unidades es siempre la última, la que está más a la
  derecha del número.
```

### 2 — Identificar la cifra de las decenas

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "basico"
  tags: ["valor_posicional", "identificar_cifra"]

variables:
  c: random(1, 9)
  d: random(0, 9)
  u: random(0, 9)
  numero: c * 100 + d * 10 + u

respuesta: d
tipo: input
tolerancia_abs: 0

enunciado: "En el número {numero}, ¿qué cifra ocupa el lugar de las decenas?"

pasos:
  - "Las decenas son la segunda cifra desde la derecha de {numero}: {d}"

explicacion: |
  La cifra de las decenas es la que está un lugar a la izquierda de las
  unidades.
```

### 3 — Identificar la cifra de las centenas

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "basico"
  tags: ["valor_posicional", "identificar_cifra"]

variables:
  c: random(1, 9)
  d: random(0, 9)
  u: random(0, 9)
  numero: c * 100 + d * 10 + u

respuesta: c
tipo: input
tolerancia_abs: 0

enunciado: "En el número {numero}, ¿qué cifra ocupa el lugar de las centenas?"

pasos:
  - "Las centenas son la tercera cifra desde la derecha de {numero}: {c}"

explicacion: |
  La cifra de las centenas es la que está dos lugares a la izquierda de las
  unidades.
```

### 4 — Identificar la cifra de las unidades de mil

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "identificar_cifra"]

variables:
  m: random(1, 9)
  c: random(0, 9)
  d: random(0, 9)
  u: random(0, 9)
  numero: m * 1000 + c * 100 + d * 10 + u

respuesta: m
tipo: input
tolerancia_abs: 0

enunciado: "En el número {numero}, ¿qué cifra ocupa el lugar de las unidades de mil?"

pasos:
  - "Las unidades de mil son la cuarta cifra desde la derecha de {numero}: {m}"

explicacion: |
  Cada vez que se agrega un lugar más a la izquierda, el valor de la
  posición se multiplica por 10: unidades → decenas → centenas →
  unidades de mil.
```

### 5 — Identificar la cifra de las decenas de mil

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "identificar_cifra"]

variables:
  dm: random(1, 9)
  m: random(0, 9)
  c: random(0, 9)
  d: random(0, 9)
  u: random(0, 9)
  numero: dm * 10000 + m * 1000 + c * 100 + d * 10 + u

respuesta: dm
tipo: input
tolerancia_abs: 0

enunciado: "En el número {numero}, ¿qué cifra ocupa el lugar de las decenas de mil?"

pasos:
  - "Las decenas de mil son la quinta cifra desde la derecha de {numero}: {dm}"

explicacion: |
  Con 5 cifras, la primera de la izquierda es la de las decenas de mil.
```

### 6 — Identificar la cifra de las centenas de mil

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "identificar_cifra"]

variables:
  cm: random(1, 9)
  dm: random(0, 9)
  m: random(0, 9)
  c: random(0, 9)
  d: random(0, 9)
  u: random(0, 9)
  numero: cm * 100000 + dm * 10000 + m * 1000 + c * 100 + d * 10 + u

respuesta: cm
tipo: input
tolerancia_abs: 0

enunciado: "En el número {numero}, ¿qué cifra ocupa el lugar de las centenas de mil?"

pasos:
  - "Las centenas de mil son la sexta cifra desde la derecha de {numero}: {cm}"

explicacion: |
  Con 6 cifras, la primera de la izquierda es la de las centenas de mil.
```

### 7 — Valor de la cifra de las decenas (no sólo el dígito)

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "basico"
  tags: ["valor_posicional", "valor_de_cifra"]

variables:
  c: random(1, 9)
  d: random(1, 9)
  u: random(0, 9)
  numero: c * 100 + d * 10 + u

respuesta: d * 10
tipo: input
tolerancia_abs: 0

enunciado: "En el número {numero}, ¿cuánto VALE la cifra de las decenas (no cuál es, sino cuánto vale)?"

pasos:
  - "La cifra de las decenas es {d}, y en ese lugar vale {d} × 10 = {d * 10}"

explicacion: |
  No es lo mismo la cifra que su valor: la cifra es sólo el dígito (0-9); el
  valor es ese dígito multiplicado por lo que vale su posición.
```

### 8 — Valor de la cifra de las centenas

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "valor_de_cifra"]

variables:
  m: random(1, 9)
  c: random(1, 9)
  d: random(0, 9)
  u: random(0, 9)
  numero: m * 1000 + c * 100 + d * 10 + u

respuesta: c * 100
tipo: input
tolerancia_abs: 0

enunciado: "En el número {numero}, ¿cuánto vale la cifra de las centenas?"

pasos:
  - "La cifra de las centenas es {c}, y en ese lugar vale {c} × 100 = {c * 100}"

explicacion: |
  El valor de una cifra es siempre el dígito multiplicado por la potencia de
  10 que le corresponde a su lugar.
```

### 9 — Valor de la cifra de las unidades de mil

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "valor_de_cifra"]

variables:
  dm: random(1, 9)
  m: random(1, 9)
  c: random(0, 9)
  d: random(0, 9)
  u: random(0, 9)
  numero: dm * 10000 + m * 1000 + c * 100 + d * 10 + u

respuesta: m * 1000
tipo: input
tolerancia_abs: 0

enunciado: "En el número {numero}, ¿cuánto vale la cifra de las unidades de mil?"

pasos:
  - "La cifra de las unidades de mil es {m}, y en ese lugar vale {m} × 1.000 = {m * 1000}"

explicacion: |
  A partir de las unidades de mil, cada lugar vale 1.000 veces más que el
  dígito solo, antes de seguir multiplicando por 10 hacia la izquierda.
```

### 10 — Componer un número de 3 cifras

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "basico"
  tags: ["valor_posicional", "descomposicion"]

variables:
  c: random(1, 9)
  d: random(0, 9)
  u: random(0, 9)
  numero: c * 100 + d * 10 + u

respuesta: numero
tipo: input
tolerancia_abs: 0

enunciado: "¿Qué número resulta de {c} centenas + {d} decenas + {u} unidades?"

pasos:
  - "{c} × 100 + {d} × 10 + {u} = {numero}"

explicacion: |
  Componer un número es la operación inversa a descomponerlo: se suman los
  valores de cada cifra en su lugar.
```

### 11 — Componer un número de 4 cifras

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "descomposicion"]

variables:
  m: random(1, 9)
  c: random(0, 9)
  d: random(0, 9)
  u: random(0, 9)
  numero: m * 1000 + c * 100 + d * 10 + u

respuesta: numero
tipo: input
tolerancia_abs: 0

enunciado: "¿Qué número resulta de {m} unidades de mil + {c} centenas + {d} decenas + {u} unidades?"

pasos:
  - "{m} × 1.000 + {c} × 100 + {d} × 10 + {u} = {numero}"

explicacion: |
  Cada término de la descomposición aporta el valor de su cifra en su
  lugar; sumados dan el número completo.
```

### 12 — Componer un número de 5 cifras

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "descomposicion"]

variables:
  dm: random(1, 9)
  m: random(0, 9)
  c: random(0, 9)
  d: random(0, 9)
  u: random(0, 9)
  numero: dm * 10000 + m * 1000 + c * 100 + d * 10 + u

respuesta: numero
tipo: input
tolerancia_abs: 0

enunciado: "¿Qué número resulta de {dm} decenas de mil + {m} unidades de mil + {c} centenas + {d} decenas + {u} unidades?"

pasos:
  - "{dm} × 10.000 + {m} × 1.000 + {c} × 100 + {d} × 10 + {u} = {numero}"

explicacion: |
  Con más cifras el procedimiento es el mismo: sumar el valor posicional de
  cada una.
```

### 13 — Comparar cantidad de cifras (verdadero/falso)

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "basico"
  tags: ["valor_posicional", "comparacion"]

variables:
  a: random(10, 999)
  b: random(10, 999)

respuesta: (longitud(concatenar(a)) > longitud(concatenar(b)))
tipo: vf

enunciado: "¿Tiene {a} más cifras que {b}?"

explicacion: |
  Antes de mirar cifra por cifra, conviene contar cuántas cifras tiene cada
  número: el que tiene más cifras es siempre el mayor.
```

### 14 — Comparar cantidad de cifras (opción múltiple)

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "basico"
  tags: ["valor_posicional", "comparacion"]

variables:
  a: random(1, 9999)
  b: random(1, 9999)

restricciones:
  - longitud(concatenar(a)) != longitud(concatenar(b))

respuesta: max(a, b)
tipo: mc
opciones_explicitas:
  - a
  - b

enunciado: "¿Cuál de estos dos números tiene más cifras: {a} o {b}?"

explicacion: |
  La cantidad de cifras decide directamente cuál número es mayor, sin
  necesidad de comparar cifra por cifra.
```

### 15 — Comparar dos números de igual cantidad de cifras (mayor)

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "comparacion"]

variables:
  c: random(1, 9)
  d1: random(0, 9)
  d2: random(0, 9)
  u1: random(0, 9)
  u2: random(0, 9)
  a: c * 100 + d1 * 10 + u1
  b: c * 100 + d2 * 10 + u2

restricciones:
  - d1 != d2

respuesta: (a > b)
tipo: vf

enunciado: "{a} y {b} tienen la misma cifra de centenas. ¿Es {a} mayor que {b}?"

explicacion: |
  Cuando dos números tienen la misma cantidad de cifras y coinciden en la
  primera, hay que seguir comparando la próxima cifra hacia la derecha
  hasta encontrar una diferencia.
```

### 16 — Comparar dos números de igual cantidad de cifras (opción múltiple)

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "comparacion"]

variables:
  m: random(1, 9)
  resto1: random(0, 999)
  resto2: random(0, 999)
  a: m * 1000 + resto1
  b: m * 1000 + resto2

restricciones:
  - resto1 != resto2

respuesta: max(a, b)
tipo: mc
opciones_explicitas:
  - a
  - b

enunciado: "{a} y {b} tienen la misma cifra de unidades de mil. ¿Cuál de los dos es mayor?"

explicacion: |
  Si la primera cifra empata, la decisión queda en manos de las cifras
  siguientes, comparadas en el mismo orden (de izquierda a derecha).
```

### 17 — Comparar cuando sólo difiere la cifra de decenas

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "comparacion"]

variables:
  c: random(1, 9)
  d1: random(0, 8)
  d2: random(0, 8)
  u: random(0, 9)
  a: c * 100 + d1 * 10 + u
  b: c * 100 + d2 * 10 + u

restricciones:
  - d1 != d2

respuesta: (a < b)
tipo: vf

enunciado: "{a} y {b} tienen la misma cifra de centenas y de unidades, sólo cambia la de decenas ({d1} contra {d2}). ¿Es {a} menor que {b}?"

explicacion: |
  Cuando todas las demás cifras coinciden, el número menor es el que tiene
  la cifra más chica en la primera posición donde difieren.
```

### 18 — Redondear a la decena más cercana

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "basico"
  tags: ["valor_posicional", "redondeo"]

variables:
  numero: random(11, 988)
  resultado: redondear(numero / 10, 0) * 10

respuesta: resultado
tipo: input
tolerancia_abs: 0

enunciado: "Redondeá {numero} a la decena más cercana."

pasos:
  - "Se mira la cifra de las unidades de {numero} para decidir si la decena sube o queda igual: resultado {resultado}"

explicacion: |
  Se mira la cifra que está un lugar a la derecha de la posición a
  redondear (acá, las unidades): 5 o más, la decena sube; menos de 5, queda
  igual.
```

### 19 — Redondear a la decena más cercana (caso "termina en 5")

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "redondeo"]

variables:
  base: random(1, 98)
  numero: base * 10 + 5
  resultado: redondear(numero / 10, 0) * 10

respuesta: resultado
tipo: input
tolerancia_abs: 0

enunciado: "Redondeá {numero} a la decena más cercana."

pasos:
  - "La cifra de las unidades es 5: por convención, la decena sube. {numero} → {resultado}"

explicacion: |
  Cuando la cifra que decide el redondeo es exactamente 5, la regla es que
  la posición anterior sube (no se deja igual).
```

### 20 — Redondear a la centena más cercana

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "basico"
  tags: ["valor_posicional", "redondeo"]

variables:
  numero: random(101, 9888)
  resultado: redondear(numero / 100, 0) * 100

respuesta: resultado
tipo: input
tolerancia_abs: 0

enunciado: "Redondeá {numero} a la centena más cercana."

pasos:
  - "Se mira la cifra de las decenas de {numero} para decidir: resultado {resultado}"

explicacion: |
  Igual que redondear a la decena, pero mirando la cifra de las decenas
  (un lugar a la derecha de las centenas).
```

### 21 — Redondear a la centena más cercana (caso frontera)

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "redondeo"]

variables:
  base: random(1, 98)
  numero: base * 100 + 50
  resultado: redondear(numero / 100, 0) * 100

respuesta: resultado
tipo: input
tolerancia_abs: 0

enunciado: "Redondeá {numero} a la centena más cercana."

pasos:
  - "La cifra de las decenas es 5: la centena sube. {numero} → {resultado}"

explicacion: |
  Mismo criterio que con las decenas: en el caso frontera (cifra 5), la
  posición objetivo sube.
```

### 22 — Redondear al millar más cercano

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "redondeo"]

variables:
  numero: random(1001, 98888)
  resultado: redondear(numero / 1000, 0) * 1000

respuesta: resultado
tipo: input
tolerancia_abs: 0

enunciado: "Redondeá {numero} al millar (unidad de mil) más cercano."

pasos:
  - "Se mira la cifra de las centenas de {numero} para decidir: resultado {resultado}"

explicacion: |
  El mismo criterio de siempre, ahora mirando la cifra de las centenas para
  decidir si la unidad de mil sube o queda igual.
```

### 23 — Cifra de los décimos

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "decimales"]

variables:
  entero: random(1, 99)
  t: random(1, 9)
  h: random(0, 9)
  numero: entero + t / 10 + h / 100

respuesta: t
tipo: input
tolerancia_abs: 0

enunciado: "En el número {numero}, ¿qué cifra ocupa el lugar de los décimos?"

pasos:
  - "Los décimos son la primera cifra después de la coma: {t}"

explicacion: |
  Del otro lado de la coma la lógica se invierte: la primera posición
  (décimos) vale ÷10, no ×10.
```

### 24 — Cifra de los centésimos

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "decimales"]

variables:
  entero: random(1, 99)
  t: random(0, 9)
  h: random(1, 9)
  numero: entero + t / 10 + h / 100

respuesta: h
tipo: input
tolerancia_abs: 0

enunciado: "En el número {numero}, ¿qué cifra ocupa el lugar de los centésimos?"

pasos:
  - "Los centésimos son la segunda cifra después de la coma: {h}"

explicacion: |
  Los centésimos valen ÷100: cada lugar después de la coma sigue dividiendo
  por 10 respecto al anterior.
```

### 25 — Valor de la cifra de los décimos

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "avanzado"
  tags: ["valor_posicional", "decimales", "valor_de_cifra"]

variables:
  entero: random(1, 99)
  t: random(1, 9)
  h: random(0, 9)
  numero: entero + t / 10 + h / 100

respuesta: t / 10
tipo: input
tolerancia_abs: 0.01

enunciado: "En el número {numero}, ¿cuánto vale la cifra de los décimos?"

pasos:
  - "La cifra de los décimos es {t}, y en ese lugar vale {t} ÷ 10 = {t / 10}"

explicacion: |
  Igual que del lado entero: el valor es la cifra multiplicada (acá,
  dividida) por lo que vale su posición.
```

### 26 — Cuántas cifras tiene un número

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "basico"
  tags: ["valor_posicional", "cantidad_de_cifras"]

variables:
  numero: random(100, 98765)

respuesta: longitud(concatenar(numero))
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántas cifras tiene el número {numero}?"

explicacion: |
  Se cuentan todos los dígitos del número, de izquierda a derecha, sin
  saltear ninguno.
```

### 27 — Cuántas cifras tiene un número grande

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "cantidad_de_cifras"]

variables:
  numero: random(1000000, 987654321)

respuesta: longitud(concatenar(numero))
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántas cifras tiene el número {numero}?"

explicacion: |
  El procedimiento es el mismo con números grandes: contar los dígitos, uno
  por uno.
```

### 28 — Cifra de mayor valor posicional

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "basico"
  tags: ["valor_posicional", "identificar_cifra"]

variables:
  m: random(1, 9)
  c: random(0, 9)
  d: random(0, 9)
  u: random(0, 9)
  numero: m * 1000 + c * 100 + d * 10 + u

respuesta: m
tipo: input
tolerancia_abs: 0

enunciado: "En el número {numero}, ¿cuál es la cifra que ocupa el lugar de mayor valor (la que más vale)?"

pasos:
  - "La cifra de mayor valor es siempre la primera de la izquierda: {m}"

explicacion: |
  La cifra de mayor valor posicional es la más a la izquierda: es la que
  está multiplicada por la potencia de 10 más grande.
```

### 29 — Nombre del lugar (opción múltiple, tercera cifra desde la derecha)

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "basico"
  tags: ["valor_posicional", "vocabulario"]

enunciado: "¿Cómo se llama el lugar de la 3ª cifra contando desde la derecha de un número?"
tipo: mc
opciones_explicitas:
  - "Unidades"
  - "Decenas"
  - "Centenas"
respuesta: "Centenas"

explicacion: |
  Contando desde la derecha: 1ª unidades, 2ª decenas, 3ª centenas.
```

### 30 — Nombre del lugar (opción múltiple, primera cifra desde la derecha)

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "basico"
  tags: ["valor_posicional", "vocabulario"]

enunciado: "¿Cómo se llama el lugar de la cifra que está más a la derecha en cualquier número entero?"
tipo: mc
opciones_explicitas:
  - "Unidades"
  - "Decenas"
  - "Centenas"
respuesta: "Unidades"

explicacion: |
  La cifra más a la derecha de un número entero siempre ocupa el lugar de
  las unidades.
```

### 31 — Verificar un valor posicional concreto (verdadero)

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "basico"
  tags: ["valor_posicional", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En el número 4.257, la cifra 2 vale 200."

explicacion: |
  El 2 de 4.257 está en el lugar de las centenas: 2 × 100 = 200.
```

### 32 — Verificar un valor posicional concreto (falso)

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "basico"
  tags: ["valor_posicional", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "En el número 4.257, la cifra 5 vale 5."

explicacion: |
  El 5 de 4.257 está en el lugar de las decenas, no de las unidades: vale
  5 × 10 = 50, no 5.
```

### 33 — Completar la descomposición (falta la cifra de decenas)

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "descomposicion"]

variables:
  c: random(1, 9)
  d: random(1, 9)
  u: random(0, 9)
  numero: c * 100 + d * 10 + u

tipo: completar
enunciado: "Completá: {c} × 100 + ___ × 10 + {u} = {numero}."
respuestas_validas:
  - d

explicacion: |
  El hueco es la cifra de las decenas: la única que hace que la suma dé
  exactamente el número de la derecha.
```

### 34 — Completar la descomposición (falta la cifra de centenas)

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "descomposicion"]

variables:
  m: random(1, 9)
  c: random(1, 9)
  d: random(0, 9)
  u: random(0, 9)
  numero: m * 1000 + c * 100 + d * 10 + u

tipo: completar
enunciado: "Completá: {m} × 1.000 + ___ × 100 + {d} × 10 + {u} = {numero}."
respuestas_validas:
  - c

explicacion: |
  Se despeja la cifra que falta viendo cuál hace que la suma total coincida
  con el número dado.
```

### 35 — Ordenar cifras de menor a mayor

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "basico"
  tags: ["valor_posicional", "orden"]

tipo: ordenar
enunciado: "Ordená estas cifras de menor a mayor."
opciones_explicitas:
  - "7"
  - "2"
  - "9"
  - "4"
respuesta_orden: ["2", "4", "7", "9"]

explicacion: |
  Ordenar cifras sueltas es comparar dígitos, sin que ningún lugar
  posicional entre en juego todavía.
```

### 36 — Mayor número de 2 cifras con dos dígitos dados

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "composicion"]

variables:
  par: n_de([1, 2, 3, 4, 5, 6, 7, 8, 9], 2)
  d1: primero(par)
  d2: ultimo(par)
  menor_digito: primero(ordenar(par))
  mayor_digito: ultimo(ordenar(par))

restricciones:
  - d1 != d2

respuesta: mayor_digito * 10 + menor_digito
tipo: input
tolerancia_abs: 0

enunciado: "Con las cifras {d1} y {d2}, ¿cuál es el mayor número de 2 cifras que se puede formar (usando cada cifra una sola vez)?"

pasos:
  - "Para que sea el mayor posible, la cifra más grande va en las decenas: {mayor_digito} decenas + {menor_digito} unidades = {mayor_digito * 10 + menor_digito}"

explicacion: |
  Para armar el número más grande posible con cifras dadas, la cifra más
  grande siempre va en el lugar de mayor valor.
```

### 37 — Menor número de 2 cifras con dos dígitos dados

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "composicion"]

variables:
  par: n_de([1, 2, 3, 4, 5, 6, 7, 8, 9], 2)
  d1: primero(par)
  d2: ultimo(par)
  menor_digito: primero(ordenar(par))
  mayor_digito: ultimo(ordenar(par))

restricciones:
  - d1 != d2

respuesta: menor_digito * 10 + mayor_digito
tipo: input
tolerancia_abs: 0

enunciado: "Con las cifras {d1} y {d2}, ¿cuál es el menor número de 2 cifras que se puede formar (usando cada cifra una sola vez)?"

pasos:
  - "Para que sea el menor posible, la cifra más chica va en las decenas: {menor_digito} decenas + {mayor_digito} unidades = {menor_digito * 10 + mayor_digito}"

explicacion: |
  Al revés que para el mayor número: la cifra más chica va en el lugar de
  mayor valor, para que pese lo menos posible.
```

### 38 — Unidades de mil completas que tiene un número

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "descomposicion"]

variables:
  numero: random(1001, 98765)

respuesta: floor(numero / 1000)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántas unidades de mil completas tiene el número {numero}?"

pasos:
  - "{numero} ÷ 1.000, tomando sólo la parte entera: {floor(numero / 1000)}"

explicacion: |
  Es lo mismo que preguntar por las cifras que quedan a la izquierda del
  lugar de las centenas, leídas como un solo número.
```

### 39 — Centenas completas que tiene un número

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "descomposicion"]

variables:
  numero: random(101, 9876)

respuesta: floor(numero / 100)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántas centenas completas tiene el número {numero}?"

pasos:
  - "{numero} ÷ 100, tomando sólo la parte entera: {floor(numero / 100)}"

explicacion: |
  Son las cifras que quedan a la izquierda del lugar de las decenas, leídas
  como un solo número.
```

### 40 — Principio general del valor posicional (verdadero/falso)

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "basico"
  tags: ["valor_posicional", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El valor de una cifra depende del lugar que ocupa dentro del número, no sólo de qué dígito es."

explicacion: |
  Es la idea central de todo el tema: el mismo dígito vale distinto según
  esté en el lugar de las unidades, las decenas, las centenas, etc.
```
