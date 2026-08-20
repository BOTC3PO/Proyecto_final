# Matemática — Multiplicación (cuestionario, 40 preguntas VBLang)

> Tema: `N3` (Tronco 1 — Numérico), mitad "Multiplicación". Ver `teoria.md`
> en esta misma carpeta.

Mismo formato que los cuestionarios anteriores: plantillas VBLang reales,
`variables:` + `random(...)`, sin `dataset:`. Los casos "sin llevar" y "con
llevar" se garantizan con rangos de dígitos elegidos a propósito (ej.:
ambos factores de una cifra chicos para que el producto no pase de 9), no
con `restricciones:` — más simple cuando el rango alcanza solo.

---

### 1 — Tabla del 2

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "basico"
  tags: ["multiplicacion", "tablas"]

variables:
  n: random(1, 10)

respuesta: 2 * n
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es 2 × {n}?"

explicacion: |
  La tabla del 2 es sumar 2 tantas veces como indique el otro factor.
```

### 2 — Tabla del 5

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "basico"
  tags: ["multiplicacion", "tablas"]

variables:
  n: random(1, 10)

respuesta: 5 * n
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es 5 × {n}?"

explicacion: |
  La tabla del 5 siempre termina en 0 o en 5: sirve para verificar el
  resultado a simple vista.
```

### 3 — Tabla del 9

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "basico"
  tags: ["multiplicacion", "tablas"]

variables:
  n: random(1, 10)

respuesta: 9 * n
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es 9 × {n}?"

explicacion: |
  La tabla del 9 tiene un patrón: la cifra de las decenas del resultado es
  siempre uno menos que el otro factor.
```

### 4 — Producto de dos números de 1 cifra

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "basico"
  tags: ["multiplicacion", "tablas"]

variables:
  a: random(2, 9)
  b: random(2, 9)

respuesta: a * b
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} × {b}?"

explicacion: |
  Es la tabla de multiplicar de {a} (o de {b}), en el lugar que le
  corresponde a {b} (o a {a}).
```

### 5 — Multiplicación de 2 cifras por 1 cifra, sin llevar

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "basico"
  tags: ["multiplicacion", "sin_llevar"]

variables:
  d: random(1, 4)
  u: random(0, 4)
  m: 2
  a: d * 10 + u

respuesta: a * m
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} × {m}?"

pasos:
  - "Unidades: {u} × {m} = {u * m}. Decenas: {d} × {m} = {d * m}."

explicacion: |
  Sin llevar, se multiplica cada cifra del número por el factor y se
  colocan los resultados en su columna, sin ajustar nada entre ellas.
```

### 6 — Multiplicación de 2 cifras por 1 cifra, sin llevar (factor 3)

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "basico"
  tags: ["multiplicacion", "sin_llevar"]

variables:
  d: random(1, 3)
  u: random(0, 3)
  m: 3
  a: d * 10 + u

respuesta: a * m
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} × {m}?"

explicacion: |
  Mismo procedimiento con otro factor: cada cifra se multiplica por
  separado, sin llevar.
```

### 7 — Multiplicación de 2 cifras por 1 cifra, con llevada

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "intermedio"
  tags: ["multiplicacion", "con_llevada"]

variables:
  d: random(1, 9)
  u: random(4, 9)
  m: random(4, 9)
  a: d * 10 + u

respuesta: a * m
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} × {m}?"

pasos:
  - "Unidades: {u} × {m} = {u * m} → se escribe {(u * m) - (floor((u * m) / 10) * 10)} y se lleva {floor((u * m) / 10)} a las decenas"

explicacion: |
  Cuando un producto parcial da 10 o más, se escribe sólo la cifra de las
  unidades de ese resultado y se lleva el resto a la columna siguiente,
  donde se suma al próximo producto.
```

### 8 — Multiplicación de 2 cifras por 1 cifra, con llevada (en contexto)

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "intermedio"
  tags: ["multiplicacion", "con_llevada", "problema"]

variables:
  d: random(1, 9)
  u: random(4, 9)
  m: random(4, 9)
  a: d * 10 + u

respuesta: a * m
tipo: input
tolerancia_abs: 0

enunciado: "Cada caja tiene {a} lápices. ¿Cuántos lápices hay en {m} cajas?"

explicacion: |
  El planteo es el mismo que una multiplicación numérica; el contexto sólo
  dice qué representa cada factor.
```

### 9 — Multiplicación de 3 cifras por 1 cifra, con llevada

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "avanzado"
  tags: ["multiplicacion", "con_llevada"]

variables:
  c: random(1, 9)
  d: random(0, 9)
  u: random(4, 9)
  m: random(4, 9)
  a: c * 100 + d * 10 + u

respuesta: a * m
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} × {m}?"

explicacion: |
  Con más cifras el procedimiento es el mismo: se multiplica cada cifra por
  el factor, llevando el sobrante de cada columna a la siguiente.
```

### 10 — Multiplicación de 2 cifras por 2 cifras

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "avanzado"
  tags: ["multiplicacion", "columna_completa"]

variables:
  a: random(11, 49)
  b: random(11, 49)

respuesta: a * b
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} × {b}?"

pasos:
  - "Se multiplica {a} por las unidades de {b}, después por las decenas de {b} (corriendo un lugar), y se suman los dos productos parciales"

explicacion: |
  Multiplicar por un número de 2 cifras es repetir el algoritmo una vez por
  cada cifra del segundo factor, y sumar los productos parciales al final.
```

### 11 — Multiplicación de 2 cifras por 2 cifras (otro rango)

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "avanzado"
  tags: ["multiplicacion", "columna_completa"]

variables:
  a: random(50, 99)
  b: random(11, 30)

respuesta: a * b
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} × {b}?"

explicacion: |
  El procedimiento no cambia con números más grandes: productos parciales,
  uno por cada cifra del segundo factor, sumados al final.
```

### 12 — Multiplicar por 10, 100 o 1.000

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "basico"
  tags: ["multiplicacion", "potencias_de_10"]

variables:
  a: random(1, 999)
  potencia: uno_de([10, 100, 1000])

respuesta: a * potencia
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} × {potencia}?"

explicacion: |
  Multiplicar por una potencia de 10 es agregar al final tantos ceros como
  tenga esa potencia.
```

### 13 — Multiplicar por potencias de 10 (verdadero/falso)

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "basico"
  tags: ["multiplicacion", "potencias_de_10"]

respuesta: verdadero
tipo: vf

enunciado: "Multiplicar un número entero por 100 es agregarle dos ceros al final."

explicacion: |
  Cada cero de la potencia de 10 corre las cifras un lugar más hacia la
  izquierda en el valor posicional.
```

### 14 — Propiedad conmutativa

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "basico"
  tags: ["multiplicacion", "propiedades"]

variables:
  a: random(2, 90)
  b: random(2, 90)

restricciones:
  - a != b

respuesta: a * b
tipo: mc
opciones_explicitas:
  - b * a
  - a * b + 1
  - a * b - 1

enunciado: "¿Cuál de estas opciones da el mismo resultado que {a} × {b}?"

explicacion: |
  Cambiar el orden de los factores no cambia el resultado (propiedad
  conmutativa): {a} × {b} es exactamente lo mismo que {b} × {a}.
```

### 15 — Propiedad conmutativa (verdadero/falso)

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "basico"
  tags: ["multiplicacion", "propiedades"]

respuesta: verdadero
tipo: vf

enunciado: "Cambiar el orden de los factores no cambia el resultado de una multiplicación."

explicacion: |
  Es la propiedad conmutativa: a × b siempre da lo mismo que b × a.
```

### 16 — Propiedad asociativa

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "intermedio"
  tags: ["multiplicacion", "propiedades"]

variables:
  a: random(2, 9)
  b: random(2, 9)
  c: random(2, 9)

respuesta: ((a * b) * c == a * (b * c))
tipo: vf

enunciado: "¿Es cierto que ({a} × {b}) × {c} da lo mismo que {a} × ({b} × {c})?"

explicacion: |
  Es la propiedad asociativa: no importa qué par de factores se
  multiplique primero, el resultado final es siempre el mismo.
```

### 17 — Calcular agrupando distinto (asociativa)

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "intermedio"
  tags: ["multiplicacion", "propiedades", "calculo_mental"]

variables:
  a: random(2, 9)
  b: 5
  c: random(2, 9)

respuesta: a * b * c
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} × {b} × {c}?"

pasos:
  - "Conviene multiplicar primero por el 5, que da un número redondo con un par: {b} × {c} = {b * c}, y después × {a}: {a} × {b * c} = {a * b * c}"

explicacion: |
  La propiedad asociativa permite elegir qué par multiplicar primero:
  agrupar los números "más fáciles" ahorra trabajo mental.
```

### 18 — Elemento neutro

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "basico"
  tags: ["multiplicacion", "propiedades"]

variables:
  a: random(1, 999)

respuesta: a
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} × 1?"

explicacion: |
  Multiplicar por 1 no cambia nada: el resultado es siempre el mismo
  número con el que se empezó.
```

### 19 — Elemento absorbente

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "basico"
  tags: ["multiplicacion", "propiedades"]

variables:
  a: random(1, 999)

respuesta: 0
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} × 0?"

explicacion: |
  Multiplicar por 0 siempre da 0, sin importar qué tan grande sea el otro
  factor.
```

### 20 — Neutro y absorbente (verdadero/falso)

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "basico"
  tags: ["multiplicacion", "propiedades"]

respuesta: falso
tipo: vf

enunciado: "Multiplicar por 0 da como resultado el mismo número, igual que multiplicar por 1."

explicacion: |
  Son propiedades distintas: multiplicar por 1 no cambia el número
  (elemento neutro), pero multiplicar por 0 siempre da 0 (elemento
  absorbente).
```

### 21 — Propiedad distributiva (verdadero/falso)

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "intermedio"
  tags: ["multiplicacion", "propiedades"]

variables:
  a: random(2, 9)
  b: random(1, 40)
  c: random(1, 40)

respuesta: (a * (b + c) == a * b + a * c)
tipo: vf

enunciado: "¿Es cierto que {a} × ({b} + {c}) da lo mismo que {a} × {b} + {a} × {c}?"

explicacion: |
  Es la propiedad distributiva: repartir un factor entre una suma da lo
  mismo que multiplicar cada término por separado y sumar después.
```

### 22 — Aplicar la propiedad distributiva

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "intermedio"
  tags: ["multiplicacion", "propiedades", "calculo_mental"]

variables:
  a: random(2, 9)
  b: random(1, 8) * 10
  c: random(1, 9)

respuesta: a * (b + c)
tipo: input
tolerancia_abs: 0

enunciado: "Usá la propiedad distributiva para calcular {a} × ({b} + {c})."

pasos:
  - "{a} × {b} + {a} × {c} = {a * b} + {a * c} = {a * b + a * c}"

explicacion: |
  Separar en una parte "redonda" ({b}) y una chica ({c}) hace que la
  cuenta se pueda resolver mentalmente por partes.
```

### 23 — Reconocer la propiedad distributiva aplicada

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "intermedio"
  tags: ["multiplicacion", "propiedades"]

variables:
  a: random(2, 9)
  b: random(1, 20)
  c: random(1, 20)

respuesta: a * b + a * c
tipo: mc
opciones_explicitas:
  - a * (b + c)
  - a * b + c
  - a + b * c

enunciado: "¿Cuál de estas expresiones es igual a {a} × {b} + {a} × {c}?"

explicacion: |
  Es la propiedad distributiva mirada al revés: la suma de dos productos
  con el mismo factor se puede escribir como ese factor por la suma de los
  otros dos.
```

### 24 — Nombre del resultado de una multiplicación

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "basico"
  tags: ["multiplicacion", "vocabulario"]

enunciado: "En la multiplicación 4 × 5 = 20, ¿cómo se llama el 20?"
tipo: mc
opciones_explicitas:
  - "Producto"
  - "Factor"
  - "Cociente"
respuesta: "Producto"

explicacion: |
  El resultado de una multiplicación se llama producto; los números que se
  multiplican son los factores.
```

### 25 — Nombre de los términos de una multiplicación

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "basico"
  tags: ["multiplicacion", "vocabulario"]

enunciado: "En la multiplicación 4 × 5 = 20, ¿cómo se llaman el 4 y el 5?"
tipo: mc
opciones_explicitas:
  - "Factores"
  - "Productos"
  - "Divisores"
respuesta: "Factores"

explicacion: |
  Los números que se multiplican se llaman factores; el resultado es el
  producto.
```

### 26 — Estimar una multiplicación

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "intermedio"
  tags: ["multiplicacion", "estimacion"]

variables:
  a: random(11, 88)
  b: random(2, 9)
  ra: redondear(a / 10, 0) * 10

respuesta: ra * b
tipo: input
tolerancia_abs: 0

enunciado: "Redondeá {a} a la decena más cercana y multiplicalo por {b}. ¿Cuánto da la estimación?"

pasos:
  - "{a} redondea a {ra}. {ra} × {b} = {ra * b}"

explicacion: |
  Estimar una multiplicación es redondear uno de los factores antes de
  multiplicar, para tener una idea rápida del resultado.
```

### 27 — Estimar el producto de dos números de 2 cifras

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "avanzado"
  tags: ["multiplicacion", "estimacion"]

variables:
  a: random(11, 88)
  b: random(11, 88)
  ra: redondear(a / 10, 0) * 10
  rb: redondear(b / 10, 0) * 10

respuesta: ra * rb
tipo: input
tolerancia_abs: 0

enunciado: "Redondeá {a} y {b} a la decena más cercana y multiplicá esos redondeos. ¿Cuánto da la estimación?"

explicacion: |
  Redondear los dos factores antes de multiplicar da una idea rápida de la
  magnitud del resultado, sin hacer la cuenta exacta.
```

### 28 — Verificar una multiplicación (tabla)

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "basico"
  tags: ["multiplicacion", "verificacion"]

variables:
  a: random(2, 9)
  b: random(2, 9)
  correcto: a * b
  error: uno_de([0, 0, 0, 1, -1])
  mostrado: correcto + error

respuesta: (mostrado == correcto)
tipo: vf

enunciado: "¿Está bien resuelta esta multiplicación? {a} × {b} = {mostrado}"

explicacion: |
  Para verificar una multiplicación hay que volver a calcularla, no
  alcanza con que el número parezca razonable.
```

### 29 — Verificar una multiplicación (2 cifras por 1)

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "intermedio"
  tags: ["multiplicacion", "verificacion"]

variables:
  d: random(1, 9)
  u: random(0, 9)
  m: random(2, 9)
  a: d * 10 + u
  correcto: a * m
  error: uno_de([0, 0, 0, 1, -1, 10])
  mostrado: correcto + error

respuesta: (mostrado == correcto)
tipo: vf

enunciado: "¿Está bien resuelta esta multiplicación? {a} × {m} = {mostrado}"

explicacion: |
  Un error típico es olvidarse de sumar la llevada de un producto parcial
  al siguiente: conviene revisar columna por columna.
```

### 30 — Verificar una multiplicación (2 cifras por 2 cifras)

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "avanzado"
  tags: ["multiplicacion", "verificacion"]

variables:
  a: random(11, 60)
  b: random(11, 30)
  correcto: a * b
  error: uno_de([0, 0, 0, 1, -1, 100])
  mostrado: correcto + error

respuesta: (mostrado == correcto)
tipo: vf

enunciado: "¿Está bien resuelta esta multiplicación? {a} × {b} = {mostrado}"

explicacion: |
  Con dos cifras en cada factor hay más productos parciales donde puede
  haber un error de cálculo.
```

### 31 — Problema: arreglo rectangular

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "basico"
  tags: ["multiplicacion", "problema"]

variables:
  filas: random(3, 12)
  columnas: random(3, 12)

respuesta: filas * columnas
tipo: input
tolerancia_abs: 0

enunciado: "Un salón tiene {filas} filas de sillas, con {columnas} sillas cada fila. ¿Cuántas sillas hay en total?"

explicacion: |
  Contar un arreglo en filas y columnas es multiplicar la cantidad de filas
  por la cantidad de columnas.
```

### 32 — Problema: grupos iguales

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "basico"
  tags: ["multiplicacion", "problema"]

variables:
  grupos: random(2, 10)
  n: random(3, 15)

respuesta: grupos * n
tipo: input
tolerancia_abs: 0

enunciado: "Hay {grupos} grupos de {n} alumnos cada uno. ¿Cuántos alumnos hay en total?"

explicacion: |
  Varios grupos con la misma cantidad de elementos es el caso típico de
  multiplicación: grupos × elementos por grupo.
```

### 33 — Problema: costo total

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "intermedio"
  tags: ["multiplicacion", "problema"]

variables:
  precio: random(50, 500)
  cantidad: random(2, 9)

respuesta: precio * cantidad
tipo: input
tolerancia_abs: 0

enunciado: "Cada entrada cuesta ${precio}. ¿Cuánto cuestan {cantidad} entradas?"

explicacion: |
  El costo total de varias unidades iguales es el precio de una, repetido
  tantas veces como unidades se compren.
```

### 34 — Problema: repetición a lo largo de varios días

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "intermedio"
  tags: ["multiplicacion", "problema"]

variables:
  n: random(2, 10)
  dias: random(3, 20)

respuesta: n * dias
tipo: input
tolerancia_abs: 0

enunciado: "Si tomás {n} vasos de agua por día, ¿cuántos vasos tomás en {dias} días?"

explicacion: |
  Repetir la misma cantidad todos los días es multiplicar esa cantidad por
  la cantidad de días.
```

### 35 — Hallar el factor que falta

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "intermedio"
  tags: ["multiplicacion", "termino_faltante"]

variables:
  a: random(2, 9)
  x: random(2, 20)
  total: a * x

respuesta: x
tipo: input
tolerancia_abs: 0

enunciado: "¿Por qué número hay que multiplicar {a} para obtener {total}?"

pasos:
  - "{total} ÷ {a} = {total / a}"

explicacion: |
  Buscar el factor que falta es, en realidad, hacer la división entre el
  producto y el factor conocido.
```

### 36 — Hallar el factor que falta (otro rango)

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "intermedio"
  tags: ["multiplicacion", "termino_faltante"]

variables:
  a: random(3, 12)
  x: random(3, 15)
  total: a * x

respuesta: x
tipo: input
tolerancia_abs: 0

enunciado: "¿Por qué número hay que multiplicar {a} para obtener {total}?"

explicacion: |
  El procedimiento es el mismo con números más grandes: dividir el
  producto por el factor que ya se conoce.
```

### 37 — Completar el factor que falta

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "intermedio"
  tags: ["multiplicacion", "termino_faltante"]

variables:
  a: random(2, 9)
  x: random(2, 12)
  total: a * x

tipo: completar
enunciado: "Completá: {a} × ___ = {total}."
respuestas_validas:
  - x

explicacion: |
  El número que falta es el que, multiplicado por {a}, da exactamente
  {total}.
```

### 38 — Completar una multiplicación en columna

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "basico"
  tags: ["multiplicacion", "algoritmo_columna"]

variables:
  d: random(1, 9)
  u: random(0, 9)
  m: random(2, 9)
  a: d * 10 + u
  producto: a * m

tipo: completar
enunciado: "Completá el resultado: {a} × {m} = ___."
respuestas_validas:
  - producto

explicacion: |
  Se resuelve la multiplicación en columna, cifra por cifra, y se completa
  con el resultado final.
```

### 39 — Ordenar productos de menor a mayor

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "basico"
  tags: ["multiplicacion", "orden"]

tipo: ordenar
enunciado: "Ordená estos productos de menor a mayor resultado (sin calcularlos todos de una)."
opciones_explicitas:
  - "3 × 4"
  - "2 × 5"
  - "6 × 6"
  - "4 × 4"
respuesta_orden: ["2 × 5", "3 × 4", "4 × 4", "6 × 6"]

explicacion: |
  2×5=10, 3×4=12, 4×4=16, 6×6=36: hay que resolver cada producto antes de
  poder ordenarlos.
```

### 40 — Qué es la multiplicación (verdadero/falso)

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "basico"
  tags: ["multiplicacion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Multiplicar es sumar el mismo número varias veces."

explicacion: |
  Es la idea central de la multiplicación: 4 × 3 es lo mismo que
  4 + 4 + 4.
```
