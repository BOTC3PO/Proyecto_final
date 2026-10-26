# Matemática — Resta (cuestionario, 40 preguntas VBLang)

> Tema: `N2` (Tronco 1 — Numérico), mitad "Resta". Ver `teoria.md` en esta
> misma carpeta.

Mismo formato que los cuestionarios anteriores. Para los casos "con
préstamo" los dígitos se generan con rangos que garantizan el préstamo
matemáticamente (ej.: la cifra de unidades del sustraendo mayor que la del
minuendo), en vez de sortear libre y filtrar con `restricciones:` — el
resultado es el mismo (una plantilla que siempre cae en el caso pedido)
pero sin necesidad de reintentos.

---

### 1 — Resta de 1 cifra, sin pedir prestado

```
metadata:
  materia: "matematicas"
  tema: "resta"
  nivel: "basico"
  tags: ["resta", "sin_prestamo"]

variables:
  a: random(1, 9)
  b: random(0, a)

respuesta: a - b
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} - {b}?"

explicacion: |
  Restar sin pedir prestado es contar hacia atrás desde el minuendo tantas
  veces como indica el sustraendo.
```

### 2 — Resta de 1 cifra, en contexto

```
metadata:
  materia: "matematicas"
  tema: "resta"
  nivel: "basico"
  tags: ["resta", "sin_prestamo", "problema"]

variables:
  a: random(2, 9)
  b: random(0, a)

respuesta: a - b
tipo: input
tolerancia_abs: 0

enunciado: "Tenías {a} galletitas y comiste {b}. ¿Cuántas galletitas te quedan?"

explicacion: |
  "Tener y que se use una parte" es restar: lo que queda es el minuendo
  menos lo que se sacó.
```

### 3 — Resta de 2 cifras, sin pedir prestado

```
metadata:
  materia: "matematicas"
  tema: "resta"
  nivel: "basico"
  tags: ["resta", "sin_prestamo"]

variables:
  da: random(2, 9)
  au: random(0, 9)
  db: random(1, da)
  bu: random(0, au)
  a: da * 10 + au
  b: db * 10 + bu

respuesta: a - b
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} - {b}?"

pasos:
  - "Unidades: {au} - {bu} = {au - bu}. Decenas: {da} - {db} = {da - db}."

explicacion: |
  Sin pedir prestado, cada columna se resta por separado: la cifra de
  arriba siempre alcanza para restar la de abajo.
```

### 4 — Resta de 2 cifras redondas (decenas exactas)

```
metadata:
  materia: "matematicas"
  tema: "resta"
  nivel: "basico"
  tags: ["resta", "calculo_mental"]

variables:
  da: random(2, 9)
  db: random(1, da)
  a: da * 10
  b: db * 10

respuesta: a - b
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} - {b}?"

pasos:
  - "Restar decenas completas es restar las decenas y agregar el cero: {da} - {db} = {da - db}, entonces {a} - {b} = {a - b}"

explicacion: |
  Cuando ambos números son "redondos", alcanza con restar las cifras
  significativas y agregar los ceros al final.
```

### 5 — Resta de 2 cifras, pidiendo prestado

```
metadata:
  materia: "matematicas"
  tema: "resta"
  nivel: "intermedio"
  tags: ["resta", "con_prestamo"]

variables:
  da: random(3, 9)
  au: random(0, 4)
  db: random(1, da - 1)
  bu: random(au + 1, 9)
  a: da * 10 + au
  b: db * 10 + bu

respuesta: a - b
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} - {b}?"

pasos:
  - "Unidades: {au} es menor que {bu}, así que se pide prestada 1 decena: {au + 10} - {bu} = {au + 10 - bu}, y las decenas quedan en {da - 1} - {db}"

explicacion: |
  Cuando la cifra de arriba es menor que la de abajo, se pide prestada 1
  unidad a la columna de al lado (que baja en 1) para poder restar.
```

### 6 — Resta de 2 cifras pidiendo prestado, en contexto

```
metadata:
  materia: "matematicas"
  tema: "resta"
  nivel: "intermedio"
  tags: ["resta", "con_prestamo", "problema"]

variables:
  da: random(3, 9)
  au: random(0, 4)
  db: random(1, da - 1)
  bu: random(au + 1, 9)
  a: da * 10 + au
  b: db * 10 + bu

respuesta: a - b
tipo: input
tolerancia_abs: 0

enunciado: "Había {a} personas en la plaza y se fueron {b}. ¿Cuántas personas quedan?"

explicacion: |
  El planteo es el mismo que una resta numérica; el contexto sólo dice qué
  representa el minuendo y qué el sustraendo.
```

### 7 — Resta de 2 cifras, otra vez pidiendo prestado

```
metadata:
  materia: "matematicas"
  tema: "resta"
  nivel: "intermedio"
  tags: ["resta", "con_prestamo"]

variables:
  da: random(4, 9)
  au: random(0, 3)
  db: random(1, da - 2)
  bu: random(au + 2, 9)
  a: da * 10 + au
  b: db * 10 + bu

respuesta: a - b
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} - {b}?"

explicacion: |
  Pedir prestado no cambia el valor del número, sólo reorganiza dónde está
  guardado ese valor: 1 decena son 10 unidades.
```

### 8 — Resta de 3 cifras, pidiendo prestado en las unidades

```
metadata:
  materia: "matematicas"
  tema: "resta"
  nivel: "intermedio"
  tags: ["resta", "con_prestamo"]

variables:
  ca: random(2, 9)
  da: random(0, 9)
  au: random(0, 4)
  cb: random(1, ca)
  db: random(0, da)
  bu: random(au + 1, 9)
  a: ca * 100 + da * 10 + au
  b: cb * 100 + db * 10 + bu

respuesta: a - b
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} - {b}?"

explicacion: |
  Con 3 cifras el procedimiento es el mismo, columna por columna; el
  préstamo puede afectar sólo a una columna o encadenarse a más de una.
```

### 9 — Resta de 3 cifras, con doble préstamo

```
metadata:
  materia: "matematicas"
  tema: "resta"
  nivel: "avanzado"
  tags: ["resta", "con_prestamo"]

variables:
  ca: random(3, 9)
  da: random(0, 4)
  au: random(0, 4)
  cb: random(1, ca - 1)
  db: random(da + 1, 9)
  bu: random(au + 1, 9)
  a: ca * 100 + da * 10 + au
  b: cb * 100 + db * 10 + bu

respuesta: a - b
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} - {b}?"

explicacion: |
  Acá el préstamo se encadena: las unidades le piden prestado a las
  decenas, y las decenas (que ya quedaron más chicas) le piden prestado a
  las centenas.
```

### 10 — Resta de 3 cifras, en contexto de dinero

```
metadata:
  materia: "matematicas"
  tema: "resta"
  nivel: "intermedio"
  tags: ["resta", "con_prestamo", "problema"]

variables:
  a: random(300, 900)
  b: random(50, 299)

respuesta: a - b
tipo: input
tolerancia_abs: 0

enunciado: "Tenías ${a} y gastaste ${b}. ¿Cuánto dinero te queda?"

explicacion: |
  Restar montos de dinero es restar los números igual que siempre; el
  signo $ no cambia el procedimiento.
```

### 11 — La resta no es conmutativa (verdadero/falso)

```
metadata:
  materia: "matematicas"
  tema: "resta"
  nivel: "basico"
  tags: ["resta", "propiedades"]

variables:
  a: random(1, 90)
  b: random(1, 90)

restricciones:
  - a != b

respuesta: (a - b == b - a)
tipo: vf

enunciado: "¿Es cierto que {a} - {b} da el mismo resultado que {b} - {a}?"

explicacion: |
  A diferencia de la suma, en la resta el orden importa: cambiar el
  minuendo por el sustraendo cambia el resultado (incluso el signo).
```

### 12 — El orden importa en la resta (verdadero/falso, enunciado directo)

```
metadata:
  materia: "matematicas"
  tema: "resta"
  nivel: "basico"
  tags: ["resta", "propiedades"]

respuesta: verdadero
tipo: vf

enunciado: "En una resta, el orden de los números sí importa: no es lo mismo el minuendo que el sustraendo."

explicacion: |
  A diferencia de la suma (donde el orden de los sumandos no importa), acá
  cambiar el orden cambia el resultado.
```

### 13 — Restas encadenadas, de izquierda a derecha

```
metadata:
  materia: "matematicas"
  tema: "resta"
  nivel: "intermedio"
  tags: ["resta", "propiedades"]

variables:
  a: random(50, 99)
  b: random(1, 20)
  c: random(1, 20)

respuesta: a - b - c
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} - {b} - {c}?"

pasos:
  - "Se resuelve de izquierda a derecha: {a} - {b} = {a - b}, y después {a - b} - {c} = {a - b - c}"

explicacion: |
  En una cadena de restas no se puede reagrupar como en la suma: hay que
  resolver siempre en el orden en que aparecen, de izquierda a derecha.
```

### 14 — La resta no es asociativa (verdadero/falso)

```
metadata:
  materia: "matematicas"
  tema: "resta"
  nivel: "intermedio"
  tags: ["resta", "propiedades"]

variables:
  a: random(50, 99)
  b: random(1, 20)
  c: random(1, 20)

respuesta: ((a - b) - c == a - (b - c))
tipo: vf

enunciado: "¿Es cierto que ({a} - {b}) - {c} da lo mismo que {a} - ({b} - {c})?"

explicacion: |
  Salvo casos puntuales, no da lo mismo: agrupar distinto una cadena de
  restas cambia el resultado (a diferencia de la suma, que sí es
  asociativa).
```

### 15 — La prueba de la resta (verdadero/falso)

```
metadata:
  materia: "matematicas"
  tema: "resta"
  nivel: "basico"
  tags: ["resta", "prueba_de_la_resta"]

variables:
  a: random(50, 900)
  b: random(10, 49)
  diferencia: a - b

respuesta: (diferencia + b == a)
tipo: vf

enunciado: "Si {a} - {b} = {diferencia}, ¿tiene que ser cierto que {diferencia} + {b} da {a}?"

explicacion: |
  Es la prueba de la resta: como restar es la operación inversa de sumar,
  la diferencia más el sustraendo siempre reconstruye el minuendo.
```

### 16 — Aplicar la prueba de la resta para verificar

```
metadata:
  materia: "matematicas"
  tema: "resta"
  nivel: "intermedio"
  tags: ["resta", "prueba_de_la_resta"]

variables:
  a: random(100, 900)
  b: random(10, 99)
  diferencia_correcta: a - b
  error: uno_de([0, 0, 0, 1, -1])
  diferencia_mostrada: diferencia_correcta + error

respuesta: ((diferencia_mostrada + b) == a)
tipo: vf

enunciado: "Alguien dice que {a} - {b} = {diferencia_mostrada}. Usando la prueba de la resta (sumar la diferencia al sustraendo), ¿el resultado es correcto?"

explicacion: |
  Si {diferencia_mostrada} + {b} no da {a}, la resta está mal hecha —
  la prueba de la resta sirve exactamente para detectar ese error.
```

### 17 — Prueba de la resta, número chico

```
metadata:
  materia: "matematicas"
  tema: "resta"
  nivel: "basico"
  tags: ["resta", "prueba_de_la_resta"]

variables:
  a: random(5, 9)
  b: random(1, a - 1)
  diferencia: a - b

respuesta: (diferencia + b)
tipo: input
tolerancia_abs: 0

enunciado: "Sabiendo que {a} - {b} = {diferencia}, ¿cuánto tiene que dar {diferencia} + {b}?"

explicacion: |
  Por la prueba de la resta, sumar la diferencia y el sustraendo siempre
  reconstruye el minuendo original.
```

### 18 — Nombre del resultado de una resta

```
metadata:
  materia: "matematicas"
  tema: "resta"
  nivel: "basico"
  tags: ["resta", "vocabulario"]

enunciado: "En la resta 13 - 5 = 8, ¿cómo se llama el 8?"
tipo: mc
opciones_explicitas:
  - "Diferencia"
  - "Minuendo"
  - "Sustraendo"
respuesta: "Diferencia"

explicacion: |
  El resultado de una resta se llama diferencia (o "resto").
```

### 19 — Nombre de los términos de una resta

```
metadata:
  materia: "matematicas"
  tema: "resta"
  nivel: "basico"
  tags: ["resta", "vocabulario"]

enunciado: "En la resta 13 - 5 = 8, ¿cómo se llaman el 13 y el 5, respectivamente?"
tipo: mc
opciones_explicitas:
  - "Minuendo y sustraendo"
  - "Sustraendo y minuendo"
  - "Sumando y diferencia"
respuesta: "Minuendo y sustraendo"

explicacion: |
  El primer número (del que se resta) es el minuendo; el que se resta es
  el sustraendo.
```

### 20 — Estimar una resta redondeando a la decena

```
metadata:
  materia: "matematicas"
  tema: "resta"
  nivel: "intermedio"
  tags: ["resta", "estimacion"]

variables:
  a: random(100, 988)
  b: random(11, 99)
  ra: redondear(a / 10, 0) * 10
  rb: redondear(b / 10, 0) * 10

respuesta: ra - rb
tipo: input
tolerancia_abs: 0

enunciado: "Redondeá {a} y {b} a la decena más cercana, y restá esos redondeos. ¿Cuánto da la estimación?"

pasos:
  - "{a} redondea a {ra}. {b} redondea a {rb}. {ra} - {rb} = {ra - rb}"

explicacion: |
  Estimar una resta es redondear minuendo y sustraendo por separado antes
  de restar, para tener una idea rápida del resultado.
```

### 21 — Estimar una resta redondeando a la centena

```
metadata:
  materia: "matematicas"
  tema: "resta"
  nivel: "intermedio"
  tags: ["resta", "estimacion"]

variables:
  a: random(1000, 9888)
  b: random(101, 999)
  ra: redondear(a / 100, 0) * 100
  rb: redondear(b / 100, 0) * 100

respuesta: ra - rb
tipo: input
tolerancia_abs: 0

enunciado: "Redondeá {a} y {b} a la centena más cercana, y restá esos redondeos. ¿Cuánto da la estimación?"

explicacion: |
  Con números más grandes conviene redondear a la centena para que la
  estimación sea más rápida.
```

### 22 — Hallar el sustraendo que falta

```
metadata:
  materia: "matematicas"
  tema: "resta"
  nivel: "basico"
  tags: ["resta", "termino_faltante"]

variables:
  a: random(20, 99)
  diferencia: random(1, a - 1)
  x: a - diferencia

respuesta: x
tipo: input
tolerancia_abs: 0

enunciado: "¿Qué número hay que restarle a {a} para obtener {diferencia}?"

pasos:
  - "{a} - {diferencia} = {a - diferencia}"

explicacion: |
  Buscar el sustraendo que falta es restar la diferencia conocida al
  minuendo.
```

### 23 — Hallar el minuendo que falta

```
metadata:
  materia: "matematicas"
  tema: "resta"
  nivel: "intermedio"
  tags: ["resta", "termino_faltante"]

variables:
  b: random(10, 90)
  diferencia: random(10, 90)
  a: b + diferencia

respuesta: a
tipo: input
tolerancia_abs: 0

enunciado: "¿A qué número hay que restarle {b} para obtener {diferencia}?"

pasos:
  - "{diferencia} + {b} = {diferencia + b}"

explicacion: |
  El minuendo que falta se encuentra sumando la diferencia y el
  sustraendo — es la misma prueba de la resta, usada al revés.
```

### 24 — Completar el minuendo que falta

```
metadata:
  materia: "matematicas"
  tema: "resta"
  nivel: "intermedio"
  tags: ["resta", "termino_faltante"]

variables:
  b: random(10, 90)
  diferencia: random(10, 90)
  a: b + diferencia

tipo: completar
enunciado: "Completá: ___ - {b} = {diferencia}."
respuestas_validas:
  - a

explicacion: |
  El número que falta es el minuendo: el que, al restarle {b}, da
  exactamente {diferencia}.
```

### 25 — Verificar una resta (números de 1 cifra)

```
metadata:
  materia: "matematicas"
  tema: "resta"
  nivel: "basico"
  tags: ["resta", "verificacion"]

variables:
  a: random(3, 9)
  b: random(1, a - 1)
  correcto: a - b
  error: uno_de([0, 0, 0, 1, -1])
  mostrado: correcto + error

respuesta: (mostrado == correcto)
tipo: vf

enunciado: "¿Está bien resuelta esta resta? {a} - {b} = {mostrado}"

explicacion: |
  Para verificar una resta hay que volver a calcularla (o usar la prueba
  de la resta) y comparar, no alcanza con que el número parezca razonable.
```

### 26 — Verificar una resta (números de 2 cifras, con préstamo)

```
metadata:
  materia: "matematicas"
  tema: "resta"
  nivel: "intermedio"
  tags: ["resta", "verificacion"]

variables:
  da: random(3, 9)
  au: random(0, 4)
  db: random(1, da - 1)
  bu: random(au + 1, 9)
  a: da * 10 + au
  b: db * 10 + bu
  correcto: a - b
  error: uno_de([0, 0, 0, 1, -1, 10])
  mostrado: correcto + error

respuesta: (mostrado == correcto)
tipo: vf

enunciado: "¿Está bien resuelta esta resta? {a} - {b} = {mostrado}"

explicacion: |
  Un error típico al restar con préstamo es olvidarse de descontarle 1 a
  la columna que prestó: por eso conviene revisar columna por columna.
```

### 27 — Verificar una resta (números de 3 cifras)

```
metadata:
  materia: "matematicas"
  tema: "resta"
  nivel: "avanzado"
  tags: ["resta", "verificacion"]

variables:
  a: random(300, 900)
  b: random(50, 299)
  correcto: a - b
  error: uno_de([0, 0, 0, 1, -1, 100])
  mostrado: correcto + error

respuesta: (mostrado == correcto)
tipo: vf

enunciado: "¿Está bien resuelta esta resta? {a} - {b} = {mostrado}"

explicacion: |
  Con más cifras hay más columnas donde puede haber un error: conviene
  verificar de derecha a izquierda, igual que al resolver.
```

### 28 — Problema: cuánto queda

```
metadata:
  materia: "matematicas"
  tema: "resta"
  nivel: "basico"
  tags: ["resta", "problema"]

variables:
  a: random(20, 90)
  b: random(1, a - 1)

respuesta: a - b
tipo: input
tolerancia_abs: 0

enunciado: "Había {a} alumnos en el patio y {b} entraron al aula. ¿Cuántos alumnos quedan en el patio?"

explicacion: |
  "Quedar" después de que una parte se va es restar: lo que queda es el
  total menos lo que se fue.
```

### 29 — Problema: diferencia entre dos cantidades

```
metadata:
  materia: "matematicas"
  tema: "resta"
  nivel: "intermedio"
  tags: ["resta", "problema"]

variables:
  a: random(100, 500)
  b: random(20, 99)

respuesta: a - b
tipo: input
tolerancia_abs: 0

enunciado: "Un edificio tiene {a} metros de altura y otro tiene {b} metros menos. ¿Cuántos metros tiene el segundo edificio?"

explicacion: |
  "Tener X metros menos" es restar esa cantidad al primer valor.
```

### 30 — Problema: cuánto bajó la temperatura

```
metadata:
  materia: "matematicas"
  tema: "resta"
  nivel: "intermedio"
  tags: ["resta", "problema"]

variables:
  a: random(15, 30)
  b: random(3, 14)

respuesta: a - b
tipo: input
tolerancia_abs: 0

enunciado: "A la mañana había {a} grados y a la noche bajó {b} grados. ¿Cuántos grados hay a la noche?"

explicacion: |
  Bajar una cantidad respecto de un valor inicial es restar esa cantidad.
```

### 31 — Cuánto hay que bajar para llegar a un número menor

```
metadata:
  materia: "matematicas"
  tema: "resta"
  nivel: "intermedio"
  tags: ["resta", "termino_faltante", "problema"]

variables:
  a: random(50, 200)
  meta: random(1, a - 1)

respuesta: a - meta
tipo: input
tolerancia_abs: 0

enunciado: "Un termo tiene {a} ml de agua. ¿Cuánta agua hay que sacarle para que queden {meta} ml?"

explicacion: |
  Lo que hay que sacar es, exactamente, la diferencia entre lo que hay
  ahora y lo que se quiere que quede.
```

### 32 — Cuánto hay que bajar de precio (descuento)

```
metadata:
  materia: "matematicas"
  tema: "resta"
  nivel: "intermedio"
  tags: ["resta", "termino_faltante", "problema"]

variables:
  a: random(500, 2000)
  meta: random(100, a - 1)

respuesta: a - meta
tipo: input
tolerancia_abs: 0

enunciado: "Un producto cuesta ${a} y va a quedar en ${meta} tras un descuento. ¿De cuánto es el descuento?"

explicacion: |
  El descuento es la diferencia entre el precio original y el precio final.
```

### 33 — Restar de un número redondo (100)

```
metadata:
  materia: "matematicas"
  tema: "resta"
  nivel: "basico"
  tags: ["resta", "calculo_mental"]

variables:
  x: random(1, 99)

respuesta: 100 - x
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es 100 - {x}?"

explicacion: |
  Restar de un número redondo como 100 es un caso frecuente al calcular
  vueltos: conviene practicarlo aparte de la resta en columna general.
```

### 34 — Vuelto: pagar con un billete redondo

```
metadata:
  materia: "matematicas"
  tema: "resta"
  nivel: "basico"
  tags: ["resta", "calculo_mental", "problema"]

variables:
  billete: uno_de([100, 500, 1000])
  precio: random(1, billete - 1)

respuesta: billete - precio
tipo: input
tolerancia_abs: 0

enunciado: "Pagás con un billete de ${billete} algo que cuesta ${precio}. ¿Cuánto te tienen que dar de vuelto?"

explicacion: |
  El vuelto es la diferencia entre lo que se paga y el precio real.
```

### 35 — Ordenar restas de menor a mayor resultado

```
metadata:
  materia: "matematicas"
  tema: "resta"
  nivel: "basico"
  tags: ["resta", "orden"]

tipo: ordenar
enunciado: "Ordená estas restas de menor a mayor resultado (sin calcularlas todas de una)."
opciones_explicitas:
  - "15 - 7"
  - "9 - 2"
  - "20 - 3"
  - "11 - 4"
respuesta_orden: ["9 - 2", "11 - 4", "15 - 7", "20 - 3"]

explicacion: |
  9-2=7, 11-4=7... en realidad hay que resolver cada resta antes de poder
  ordenarlas: 9-2=7, 11-4=7, 15-7=8, 20-3=17.
```

### 36 — Completar una resta en columna

```
metadata:
  materia: "matematicas"
  tema: "resta"
  nivel: "basico"
  tags: ["resta", "algoritmo_columna"]

variables:
  da: random(2, 9)
  au: random(0, 9)
  db: random(1, da)
  bu: random(0, au)
  a: da * 10 + au
  b: db * 10 + bu
  diferencia: a - b

tipo: completar
enunciado: "Completá el resultado: {a} - {b} = ___."
respuestas_validas:
  - diferencia

explicacion: |
  Se resuelve la resta en columna, de derecha a izquierda, y se completa
  con el resultado final.
```

### 37 — Restar un número de sí mismo

```
metadata:
  materia: "matematicas"
  tema: "resta"
  nivel: "basico"
  tags: ["resta", "propiedades"]

variables:
  a: random(1, 999)

respuesta: 0
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} - {a}?"

explicacion: |
  Cualquier número menos sí mismo da 0: no queda nada por quitar.
```

### 38 — Restar 0

```
metadata:
  materia: "matematicas"
  tema: "resta"
  nivel: "basico"
  tags: ["resta", "propiedades"]

variables:
  a: random(1, 999)

respuesta: a
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} - 0?"

explicacion: |
  Restar 0 no quita nada: el resultado es siempre el mismo número con el
  que se empezó — pero ojo, esto sólo vale restando 0 (no sumando 0 al
  revés: 0 - {a} no da {a}).
```

### 39 — Restar tres números encadenados, en contexto

```
metadata:
  materia: "matematicas"
  tema: "resta"
  nivel: "intermedio"
  tags: ["resta", "problema"]

variables:
  a: random(80, 150)
  b: random(10, 30)
  c: random(10, 30)

respuesta: a - b - c
tipo: input
tolerancia_abs: 0

enunciado: "Tenías {a} figuritas, regalaste {b} a un amigo y {c} a otro. ¿Cuántas figuritas te quedan?"

pasos:
  - "Se resta en el orden en que ocurrieron los regalos: {a} - {b} - {c} = {a - b - c}"

explicacion: |
  Cuando se resta más de una vez en un problema, se va restando en el
  orden en que van ocurriendo los descuentos.
```

### 40 — Qué es la resta (verdadero/falso)

```
metadata:
  materia: "matematicas"
  tema: "resta"
  nivel: "basico"
  tags: ["resta", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Restar es quitarle una cantidad a otra para ver cuánto queda."

explicacion: |
  Es la idea central de la resta: separar una parte de una cantidad para
  ver qué queda de ella.
```
