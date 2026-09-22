# Examen jefe — [PENDIENTE #615]

> Logro #615. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **158 preguntas totales** en 5/5 secciones.

---

## Sección: resta (40 preguntas)

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

## Sección: sucesiones-aritmeticas (26 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "basico"
  tags: ["sucesiones_aritmeticas", "vocabulario"]

enunciado: "¿Qué es una sucesión aritmética?"
tipo: mc
opciones_explicitas:
  - "Una lista de números donde siempre se suma la misma cantidad para pasar al siguiente"
  - "Una lista de números en cualquier orden"
  - "Una lista donde cada número es el doble del anterior"
respuesta: "Una lista de números donde siempre se suma la misma cantidad para pasar al siguiente"

explicacion: |
  Esa cantidad fija que se suma se llama diferencia común (d).
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "basico"
  tags: ["sucesiones_aritmeticas"]

variables:
  a1: random(1, 20)
  d: random(2, 10)
  n: random(4, 10)

respuesta: a1 + (n - 1) * d
tipo: input
tolerancia_abs: 0

enunciado: "En una sucesión aritmética con a₁ = {a1} y d = {d}, ¿cuánto vale el término {n} (aₙ)?"

pasos:
  - "aₙ = a₁ + (n−1)×d = {a1} + ({n}−1)×{d} = {a1 + (n - 1) * d}"

explicacion: |
  Se aplica la fórmula del término general, sin tener que sumar la
  diferencia término por término.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "intermedio"
  tags: ["sucesiones_aritmeticas"]

variables:
  a1: random(1, 20)
  d: random(2, 15)
  n: random(15, 40)

respuesta: a1 + (n - 1) * d
tipo: input
tolerancia_abs: 0

enunciado: "En una sucesión aritmética con a₁ = {a1} y d = {d}, ¿cuánto vale a{n}?"

explicacion: |
  La fórmula sirve igual (y ahorra mucho más trabajo) para términos
  lejanos.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "intermedio"
  tags: ["sucesiones_aritmeticas"]

variables:
  a1: random(50, 200)
  d: -random(2, 10)
  n: random(4, 10)

respuesta: a1 + (n - 1) * d
tipo: input
tolerancia_abs: 0

enunciado: "En una sucesión aritmética con a₁ = {a1} y d = {d} (decreciente), ¿cuánto vale a{n}?"

pasos:
  - "aₙ = {a1} + ({n}−1)×({d}) = {a1 + (n - 1) * d}"

explicacion: |
  Con d negativo, la fórmula funciona igual: el término va bajando.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "basico"
  tags: ["sucesiones_aritmeticas"]

variables:
  a1: random(1, 30)
  d: random(2, 15)
  a2: a1 + d

respuesta: d
tipo: input
tolerancia_abs: 0

enunciado: "En una sucesión aritmética, dos términos consecutivos son {a1} y {a2}. ¿Cuál es la diferencia común (d)?"

explicacion: |
  La diferencia es, directamente, el término siguiente menos el anterior.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "avanzado"
  tags: ["sucesiones_aritmeticas"]

variables:
  a1: random(1, 20)
  d: random(2, 10)
  n: random(3, 8)
  an: a1 + (n - 1) * d

respuesta: d
tipo: input
tolerancia_abs: 0

enunciado: "En una sucesión aritmética, a₁ = {a1} y a{n} = {an}. ¿Cuál es la diferencia común?"

pasos:
  - "d = (a{n} − a₁) ÷ (n−1) = ({an} − {a1}) ÷ ({n}−1) = {(an - a1) / (n - 1)}"

explicacion: |
  Se despeja d de la fórmula del término general.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "intermedio"
  tags: ["sucesiones_aritmeticas"]

variables:
  a1: random(1, 30)
  d: random(2, 10)
  n: random(3, 8)
  an: a1 + (n - 1) * d

respuesta: a1
tipo: input
tolerancia_abs: 0

enunciado: "En una sucesión aritmética con d = {d}, el término {n} vale {an} (a{n} = {an}). ¿Cuál es a₁?"

pasos:
  - "a₁ = a{n} − (n−1)×d = {an} − ({n}−1)×{d} = {an - (n - 1) * d}"

explicacion: |
  Se despeja a₁ de la fórmula del término general.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "intermedio"
  tags: ["sucesiones_aritmeticas"]

variables:
  a1: random(1, 20)
  d: random(2, 10)
  a2: a1 + d
  a3: a2 + d
  a4: a3 + d

respuesta: verdadero
tipo: vf

enunciado: "¿Es aritmética la sucesión {a1}, {a2}, {a3}, {a4}?"

explicacion: |
  La diferencia entre cada par de términos consecutivos es siempre {d}.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "intermedio"
  tags: ["sucesiones_aritmeticas"]

variables:
  a1: random(1, 20)
  d: random(2, 10)
  a2: a1 + d
  a3: a2 + d
  a4: a3 + d + 1

respuesta: falso
tipo: vf

enunciado: "¿Es aritmética la sucesión {a1}, {a2}, {a3}, {a4}?"

explicacion: |
  La diferencia entre los primeros pares es {d}, pero entre los últimos
  dos términos cambia: no es una diferencia constante.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "intermedio"
  tags: ["sucesiones_aritmeticas"]

variables:
  a1: random(1, 20)
  d: random(2, 10)
  n: random(4, 10)
  correcto: a1 + (n - 1) * d

respuesta: correcto
tipo: mc
opciones_explicitas:
  - correcto
  - a1 + n * d
  - a1 * n * d

enunciado: "En una sucesión aritmética con a₁ = {a1} y d = {d}, ¿cuánto vale a{n}?"

explicacion: |
  El error común es multiplicar por n en vez de (n−1): el primer término
  no suma ninguna diferencia todavía.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "intermedio"
  tags: ["sucesiones_aritmeticas", "verificacion"]

variables:
  a1: random(1, 20)
  d: random(2, 10)
  n: random(4, 10)
  correcto: a1 + (n - 1) * d
  error: uno_de([0, 0, 0, d, -d])
  mostrado: correcto + error

respuesta: (mostrado == correcto)
tipo: vf

enunciado: "En una sucesión con a₁ = {a1} y d = {d}, ¿está bien calculado que a{n} = {mostrado}?"

explicacion: |
  Se vuelve a aplicar la fórmula y se compara.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "intermedio"
  tags: ["sucesiones_aritmeticas"]

variables:
  a1: random(1, 20)
  d: random(2, 10)
  a2: a1 + d
  a4: a1 + 3 * d

tipo: completar
enunciado: "Completá el término que falta: {a1}, {a2}, ___, {a4}."
respuestas_validas:
  - a1 + 2 * d

explicacion: |
  El término que falta sigue el mismo salto d que el resto de la
  sucesión.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "basico"
  tags: ["sucesiones_aritmeticas"]

variables:
  a1: random(1, 30)
  d: random(2, 15)
  a2: a1 + d

tipo: completar
enunciado: "En la sucesión {a1}, {a2}, ..., completá la diferencia común (d)."
respuestas_validas:
  - d

explicacion: |
  d es la distancia entre dos términos consecutivos.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "intermedio"
  tags: ["sucesiones_aritmeticas", "problema"]

variables:
  inicial: random(500, 2000)
  ahorro_mensual: random(200, 1000)
  meses: random(4, 12)

respuesta: inicial + (meses - 1) * ahorro_mensual
tipo: input
tolerancia_abs: 0

enunciado: "El primer mes ahorraste ${inicial}, y cada mes siguiente ahorrás ${ahorro_mensual} más que el mes anterior (en total, no adicional). ¿Cuánto ahorraste en el mes {meses}?"

explicacion: |
  Es una sucesión aritmética: a₁ = {inicial}, d = {ahorro_mensual}.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "intermedio"
  tags: ["sucesiones_aritmeticas", "problema"]

variables:
  primera_fila: random(10, 30)
  incremento: random(2, 8)
  fila: random(5, 15)

respuesta: primera_fila + (fila - 1) * incremento
tipo: input
tolerancia_abs: 0

enunciado: "La primera fila de un teatro tiene {primera_fila} asientos, y cada fila siguiente tiene {incremento} asientos más que la anterior. ¿Cuántos asientos tiene la fila {fila}?"

explicacion: |
  Es una sucesión aritmética aplicada a la cantidad de asientos por fila.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "intermedio"
  tags: ["sucesiones_aritmeticas", "problema"]

variables:
  inicial: random(15, 30)
  baja_por_hora: random(1, 4)
  hora: random(4, 10)

respuesta: inicial - (hora - 1) * baja_por_hora
tipo: input
tolerancia_abs: 0

enunciado: "A la hora 1, la temperatura era {inicial}°C, y baja {baja_por_hora} grados cada hora. ¿Qué temperatura hay en la hora {hora} (puede dar negativa)?"

explicacion: |
  Es una sucesión aritmética con diferencia negativa (decreciente).
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "basico"
  tags: ["sucesiones_aritmeticas", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En una sucesión aritmética, la diferencia entre cualquier par de términos consecutivos es siempre la misma."

explicacion: |
  Es la propia definición de sucesión aritmética.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "intermedio"
  tags: ["sucesiones_aritmeticas", "casos_especiales"]

respuesta: verdadero
tipo: vf

enunciado: "Si la diferencia común (d) de una sucesión aritmética es 0, todos los términos de la sucesión son iguales."

explicacion: |
  Sumar 0 en cada paso no cambia nada: la sucesión queda constante.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "basico"
  tags: ["sucesiones_aritmeticas", "casos_especiales"]

variables:
  a1: random(1, 999)
  n: random(2, 50)

respuesta: a1
tipo: input
tolerancia_abs: 0

enunciado: "En una sucesión aritmética con a₁ = {a1} y d = 0, ¿cuánto vale a{n}?"

explicacion: |
  Con d = 0, todos los términos son iguales al primero.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "avanzado"
  tags: ["sucesiones_aritmeticas"]

variables:
  a1: random(1, 20)
  d: random(2, 10)
  n: random(3, 12)
  an: a1 + (n - 1) * d

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "En una sucesión aritmética con a₁ = {a1} y d = {d}, el término {an} (a? = {an}), ¿en qué posición está?"

pasos:
  - "n = (a? − a₁) ÷ d + 1 = ({an} − {a1}) ÷ {d} + 1 = {(an - a1) / d + 1}"

explicacion: |
  Se despeja n de la fórmula del término general.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "intermedio"
  tags: ["sucesiones_aritmeticas", "problema"]

variables:
  a1: random(3, 10)
  d: random(2, 6)
  n: random(4, 10)

respuesta: a1 + (n - 1) * d
tipo: input
tolerancia_abs: 0

enunciado: "La figura 1 de un patrón usa {a1} baldosas, y cada figura siguiente usa {d} baldosas más que la anterior. ¿Cuántas baldosas usa la figura {n}?"

explicacion: |
  Los patrones de figuras que crecen de a lo mismo son sucesiones
  aritméticas.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "avanzado"
  tags: ["sucesiones_aritmeticas", "comparacion"]

variables:
  d1: random(2, 8)
  d2: random(2, 8)

restricciones:
  - d1 != d2

respuesta: (d1 > d2)
tipo: vf

enunciado: "Una sucesión aritmética tiene d = {d1} y otra tiene d = {d2}. ¿Crece más rápido la primera?"

explicacion: |
  A mayor diferencia común, más rápido crece la sucesión, sin importar
  cuál sea el primer término.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "avanzado"
  tags: ["sucesiones_aritmeticas", "orden"]

tipo: ordenar
enunciado: "Calculá el término 5 (a₅) de cada sucesión aritmética y ordená los resultados de menor a mayor."
opciones_explicitas:
  - "a₁=1, d=5"
  - "a₁=10, d=1"
  - "a₁=5, d=3"
  - "a₁=0, d=4"
respuesta_orden: ["a₁=10, d=1", "a₁=0, d=4", "a₁=5, d=3", "a₁=1, d=5"]

explicacion: |
  a₅ = a₁ + 4d en cada caso: 14, 16, 17, 21 — hay que calcular cada una
  antes de poder ordenarlas.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "avanzado"
  tags: ["sucesiones_aritmeticas"]

variables:
  a1: -random(1, 20)
  d: random(2, 10)
  n: random(3, 8)

respuesta: a1 + (n - 1) * d
tipo: input
tolerancia_abs: 0

enunciado: "En una sucesión aritmética con a₁ = {a1} y d = {d}, ¿cuánto vale a{n}?"

explicacion: |
  La fórmula funciona igual aunque el primer término sea negativo.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "basico"
  tags: ["sucesiones_aritmeticas", "vocabulario"]

enunciado: "¿Cuál es la fórmula del término general de una sucesión aritmética?"
tipo: mc
opciones_explicitas:
  - "aₙ = a₁ + (n − 1) × d"
  - "aₙ = a₁ × n × d"
  - "aₙ = a₁ + n × d"
respuesta: "aₙ = a₁ + (n − 1) × d"

explicacion: |
  El (n−1) es clave: el primer término no suma ninguna diferencia
  todavía.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "basico"
  tags: ["sucesiones_aritmeticas", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Una sucesión aritmética es una lista de números donde cada uno se obtiene sumando siempre la misma diferencia al anterior."

explicacion: |
  Es la idea central de todo el tema.
```

## Sección: dinero (26 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "basico"
  tags: ["dinero", "suma"]

variables:
  a: random(50, 900)
  b: random(50, 900)

respuesta: a + b
tipo: input
tolerancia_abs: 0

enunciado: "Compraste algo de ${a} y otra cosa de ${b}. ¿Cuánto gastaste en total?"

explicacion: |
  Sumar dinero es sumar números, igual que siempre.
```

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "basico"
  tags: ["dinero", "vuelto"]

variables:
  precio: random(50, 900)
  billete: uno_de([1000, 2000])

restricciones:
  - billete > precio

respuesta: billete - precio
tipo: input
tolerancia_abs: 0

enunciado: "Algo cuesta ${precio} y pagás con un billete de ${billete}. ¿Cuánto te dan de vuelto?"

explicacion: |
  El vuelto es lo entregado menos el precio.
```

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "basico"
  tags: ["dinero", "vuelto"]

variables:
  precio: random(10, 90)
  billete: uno_de([100, 200, 500])

restricciones:
  - billete > precio

respuesta: billete - precio
tipo: input
tolerancia_abs: 0

enunciado: "Algo cuesta ${precio} y pagás con un billete de ${billete}. ¿Cuánto te dan de vuelto?"

explicacion: |
  Mismo procedimiento con otra denominación de billete.
```

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "intermedio"
  tags: ["dinero", "billetes"]

variables:
  denominacion: uno_de([10, 20, 50, 100])
  cantidad: random(2, 15)
  monto: denominacion * cantidad

respuesta: cantidad
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos billetes de ${denominacion} hacen falta para juntar exactamente ${monto}?"

explicacion: |
  Se divide el monto total por el valor de cada billete.
```

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "intermedio"
  tags: ["dinero", "billetes"]

variables:
  denominacion: uno_de([50, 100, 200])
  cantidad: random(2, 10)
  resto: random(1, denominacion - 1)
  monto: denominacion * cantidad + resto

respuesta: cantidad
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos billetes COMPLETOS de ${denominacion} entran en ${monto} (sin pasarse)?"

pasos:
  - "{monto} ÷ {denominacion} da {cantidad} billetes completos, y sobran {resto}"

explicacion: |
  Se toma la parte entera de dividir el monto por el valor del billete.
```

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "intermedio"
  tags: ["dinero", "billetes"]

variables:
  denominacion: uno_de([50, 100, 200])
  cantidad: random(2, 10)
  resto: random(1, denominacion - 1)
  monto: denominacion * cantidad + resto

respuesta: resto
tipo: input
tolerancia_abs: 0

enunciado: "Después de sacar todos los billetes completos de ${denominacion} posibles de ${monto}, ¿cuánto queda sin poder formar otro billete de esa denominación?"

explicacion: |
  Es el resto de dividir el monto por el valor del billete.
```

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "intermedio"
  tags: ["dinero", "verificacion"]

variables:
  precio: random(50, 900)
  billete: uno_de([1000, 2000])
  correcto: billete - precio
  error: uno_de([0, 0, 0, 10, -10])
  mostrado: correcto + error

restricciones:
  - billete > precio

respuesta: (mostrado == correcto)
tipo: vf

enunciado: "¿Está bien dado este vuelto? Precio ${precio}, pagaste con ${billete}, te dieron ${mostrado} de vuelto."

explicacion: |
  Se verifica sumando el vuelto al precio: tiene que dar exactamente lo
  que se pagó.
```

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "intermedio"
  tags: ["dinero", "billetes"]

variables:
  n1000: random(0, 3)
  n500: random(0, 3)
  n100: random(1, 4)

respuesta: n1000 * 1000 + n500 * 500 + n100 * 100
tipo: input
tolerancia_abs: 0

enunciado: "Tenés {n1000} billete(s) de $1.000, {n500} de $500 y {n100} de $100. ¿Cuánto dinero tenés en total?"

explicacion: |
  Se multiplica cada denominación por su cantidad, y se suman los
  resultados.
```

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "intermedio"
  tags: ["dinero", "billetes"]

variables:
  billete_grande: 1000
  usados_grandes: random(1, 3)
  falta: random(50, 900)
  monto: billete_grande * usados_grandes + falta

respuesta: falta
tipo: input
tolerancia_abs: 0

enunciado: "Para juntar ${monto} usaste {usados_grandes} billete(s) de ${billete_grande}. ¿Cuánto más te falta juntar?"

explicacion: |
  Se resta lo ya juntado (billete grande × cantidad) al monto total.
```

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "basico"
  tags: ["dinero", "comparacion"]

variables:
  a: random(100, 2000)
  b: random(100, 2000)

restricciones:
  - a != b

respuesta: (a < b)
tipo: vf

enunciado: "¿Es ${a} más barato que ${b}?"

explicacion: |
  Más barato es el precio menor.
```

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "intermedio"
  tags: ["dinero", "problema"]

variables:
  precio_unitario: random(20, 200)
  cantidad: random(2, 6)
  billete: uno_de([1000, 2000])

restricciones:
  - billete > (precio_unitario * cantidad)

respuesta: billete - (precio_unitario * cantidad)
tipo: input
tolerancia_abs: 0

enunciado: "Comprás {cantidad} caramelos a ${precio_unitario} cada uno, y pagás con un billete de ${billete}. ¿Cuánto te dan de vuelto?"

pasos:
  - "Costo total: {precio_unitario} × {cantidad} = {precio_unitario * cantidad}. Vuelto: {billete} - {precio_unitario * cantidad} = {billete - (precio_unitario * cantidad)}"

explicacion: |
  Primero se calcula el costo total, y recién después el vuelto.
```

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "intermedio"
  tags: ["dinero", "problema"]

variables:
  moneda: uno_de([10, 20, 50])
  meta: moneda * random(5, 30)

respuesta: meta / moneda
tipo: input
tolerancia_abs: 0

enunciado: "Querés juntar ${meta} ahorrando monedas de ${moneda}. ¿Cuántas monedas necesitás?"

explicacion: |
  Se divide la meta por el valor de cada moneda.
```

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "basico"
  tags: ["dinero", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El vuelto de una compra es lo que se entrega para pagar, menos el precio real."

explicacion: |
  vuelto = entregado − precio.
```

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "basico"
  tags: ["dinero", "vocabulario"]

variables:
  precio: random(500, 2000)
  billete: random(10, 499)

respuesta: falso
tipo: vf

enunciado: "¿Alcanza un billete de ${billete} para pagar algo que cuesta ${precio}?"

explicacion: |
  El billete entregado tiene que ser mayor o igual al precio; si no, no
  alcanza.
```

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "intermedio"
  tags: ["dinero", "vuelto"]

variables:
  precio: random(50, 900)
  billete: uno_de([1000, 2000])
  correcto: billete - precio

restricciones:
  - billete > precio

respuesta: correcto
tipo: mc
opciones_explicitas:
  - correcto
  - billete + precio
  - precio - billete

enunciado: "Algo cuesta ${precio} y pagás con ${billete}. ¿Cuál es el vuelto correcto?"

explicacion: |
  Las otras opciones suman en vez de restar, o restan al revés (dando un
  número negativo sin sentido acá).
```

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "intermedio"
  tags: ["dinero", "vuelto"]

variables:
  billete: uno_de([1000, 2000])
  vuelto: random(50, 500)

tipo: completar
enunciado: "Pagaste con ${billete} y te dieron ${vuelto} de vuelto. Completá cuánto costaba lo que compraste."
respuestas_validas:
  - billete - vuelto

explicacion: |
  precio = entregado − vuelto (la prueba de la resta, aplicada al revés).
```

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "basico"
  tags: ["dinero", "orden"]

tipo: ordenar
enunciado: "Ordená estos precios de menor a mayor."
opciones_explicitas:
  - "$850"
  - "$120"
  - "$430"
  - "$99"
respuesta_orden: ["$99", "$120", "$430", "$850"]

explicacion: |
  Se ordenan como cualquier lista de números.
```

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "intermedio"
  tags: ["dinero", "problema"]

variables:
  pan: random(50, 300)
  leche: random(50, 300)
  fruta: random(50, 300)

respuesta: pan + leche + fruta
tipo: input
tolerancia_abs: 0

enunciado: "Comprás pan a ${pan}, leche a ${leche} y fruta a ${fruta}. ¿Cuánto es el total?"

explicacion: |
  Se suman los precios de todo lo comprado.
```

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "intermedio"
  tags: ["dinero", "problema"]

variables:
  ya_ahorrado: random(500, 3000)
  meta: ya_ahorrado + random(200, 2000)

respuesta: meta - ya_ahorrado
tipo: input
tolerancia_abs: 0

enunciado: "Ya ahorraste ${ya_ahorrado} y tu meta es ${meta}. ¿Cuánto te falta ahorrar?"

explicacion: |
  Lo que falta es la meta menos lo ya ahorrado.
```

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "intermedio"
  tags: ["dinero", "billetes"]

variables:
  monto: uno_de([100, 200, 500]) * random(2, 6)

respuesta: verdadero
tipo: vf

enunciado: "Para juntar ${monto}, ¿conviene usar la menor cantidad posible de billetes/monedas, empezando por las denominaciones más grandes que entren?"

explicacion: |
  Es la estrategia práctica más común para armar un monto con el menor
  número de piezas.
```

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "intermedio"
  tags: ["dinero", "verificacion"]

variables:
  precio: random(50, 900)
  billete: uno_de([1000, 2000])
  vuelto: billete - precio

restricciones:
  - billete > precio

respuesta: (vuelto + precio == billete)
tipo: vf

enunciado: "Si pagaste ${billete} por algo de ${precio} y te dieron ${vuelto} de vuelto, ¿es cierto que ${vuelto} + ${precio} tiene que dar ${billete}?"

explicacion: |
  Es la prueba de la resta aplicada al vuelto: sumar el vuelto y el
  precio reconstruye lo entregado.
```

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "avanzado"
  tags: ["dinero", "problema"]

variables:
  precio: random(50, 500)
  billete: 1000
  vuelto: billete - precio

restricciones:
  - billete > precio
  - (vuelto - floor(vuelto / 2) * 2) == 0

respuesta: vuelto / 2
tipo: input
tolerancia_abs: 0

enunciado: "Dos amigos pagan juntos ${precio} con un billete de ${billete}, y se reparten el vuelto en partes iguales. ¿Cuánto le toca a cada uno?"

explicacion: |
  Se divide el vuelto total por la cantidad de personas.
```

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "avanzado"
  tags: ["dinero", "billetes"]

variables:
  cant_grandes: random(1, 3)

respuesta: cant_grandes
tipo: mc
opciones_explicitas:
  - cant_grandes
  - cant_grandes * 10

enunciado: "Para juntar ${cant_grandes * 100}, ¿con cuántos billetes se arma más rápido: con {cant_grandes} billete(s) de $100, o con {cant_grandes * 10} billetes de $10?"

explicacion: |
  Con la misma cantidad de dinero, usar billetes más grandes siempre
  necesita menos piezas.
```

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "intermedio"
  tags: ["dinero", "problema"]

variables:
  cantidad: random(2, 9)
  precio_unitario: random(20, 200)
  total: cantidad * precio_unitario

respuesta: precio_unitario
tipo: input
tolerancia_abs: 0

enunciado: "Pagaste ${total} por {cantidad} unidades iguales. ¿Cuánto cuesta cada una?"

explicacion: |
  Se divide el total pagado por la cantidad de unidades.
```

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "intermedio"
  tags: ["dinero", "vuelto"]

variables:
  precio: random(200, 1900)
  billete: 2000

restricciones:
  - billete > precio

respuesta: billete - precio
tipo: input
tolerancia_abs: 0

enunciado: "Algo cuesta ${precio} y pagás con un billete de $2.000. ¿Cuánto te dan de vuelto?"

explicacion: |
  vuelto = entregado − precio, con montos más grandes.
```

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "basico"
  tags: ["dinero", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Sumar, restar, multiplicar y dividir montos de dinero funciona exactamente igual que con cualquier otro número: el signo $ no cambia el procedimiento."

explicacion: |
  Es la idea central de todo el tema: el dinero es una aplicación
  práctica de la aritmética ya aprendida, no una cuenta nueva.
```

## Sección: division (40 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "division"
  nivel: "basico"
  tags: ["division", "tablas"]

variables:
  cociente: random(1, 10)
  dividendo: 2 * cociente

respuesta: cociente
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {dividendo} ÷ 2?"

explicacion: |
  Dividir por 2 es preguntar "¿qué número, multiplicado por 2, da
  {dividendo}?" — la tabla del 2 al revés.
```

```
metadata:
  materia: "matematicas"
  tema: "division"
  nivel: "basico"
  tags: ["division", "tablas"]

variables:
  cociente: random(1, 10)
  dividendo: 5 * cociente

respuesta: cociente
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {dividendo} ÷ 5?"

explicacion: |
  Es la tabla del 5 mirada al revés: buscar cuántas veces entra el 5 en
  {dividendo}.
```

```
metadata:
  materia: "matematicas"
  tema: "division"
  nivel: "basico"
  tags: ["division", "tablas"]

variables:
  cociente: random(1, 10)
  dividendo: 9 * cociente

respuesta: cociente
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {dividendo} ÷ 9?"

explicacion: |
  Es la tabla del 9 mirada al revés.
```

```
metadata:
  materia: "matematicas"
  tema: "division"
  nivel: "basico"
  tags: ["division", "tablas"]

variables:
  divisor: random(2, 9)
  cociente: random(2, 9)
  dividendo: divisor * cociente

respuesta: cociente
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {dividendo} ÷ {divisor}?"

explicacion: |
  Como {dividendo} es exactamente {divisor} × {cociente}, la división da
  {cociente} justo, sin resto.
```

```
metadata:
  materia: "matematicas"
  tema: "division"
  nivel: "intermedio"
  tags: ["division", "division_entera"]

variables:
  divisor: random(2, 9)
  cociente: random(2, 15)
  resto: random(1, divisor - 1)
  dividendo: divisor * cociente + resto

respuesta: cociente
tipo: input
tolerancia_abs: 0

enunciado: "En {dividendo} ÷ {divisor}, ¿cuál es el cociente?"

pasos:
  - "{divisor} entra {cociente} veces en {dividendo}, y sobran {resto}"

explicacion: |
  El cociente es la cantidad de veces completas que entra el divisor en el
  dividendo, sin contar lo que sobra.
```

```
metadata:
  materia: "matematicas"
  tema: "division"
  nivel: "intermedio"
  tags: ["division", "division_entera"]

variables:
  divisor: random(2, 9)
  cociente: random(2, 15)
  resto: random(1, divisor - 1)
  dividendo: divisor * cociente + resto

respuesta: resto
tipo: input
tolerancia_abs: 0

enunciado: "En {dividendo} ÷ {divisor}, ¿cuál es el resto?"

pasos:
  - "{divisor} × {cociente} = {divisor * cociente}. {dividendo} - {divisor * cociente} = {resto}"

explicacion: |
  El resto es lo que queda sin poder repartir, una vez sacadas todas las
  veces completas que entra el divisor.
```

```
metadata:
  materia: "matematicas"
  tema: "division"
  nivel: "intermedio"
  tags: ["division", "division_entera"]

variables:
  divisor: random(2, 9)
  cociente: random(2, 15)
  resto: random(1, divisor - 1)
  dividendo: divisor * cociente + resto

respuesta: dividendo
tipo: input
tolerancia_abs: 0

enunciado: "¿Qué número resulta de dividir por {divisor}, obtener cociente {cociente} y que sobren {resto}?"

pasos:
  - "{divisor} × {cociente} + {resto} = {dividendo}"

explicacion: |
  Es la fórmula de la división entera al revés: divisor × cociente + resto
  reconstruye el dividendo original.
```

```
metadata:
  materia: "matematicas"
  tema: "division"
  nivel: "intermedio"
  tags: ["division", "division_entera", "problema"]

variables:
  divisor: random(2, 9)
  cociente: random(2, 15)
  resto: random(1, divisor - 1)
  dividendo: divisor * cociente + resto

respuesta: cociente
tipo: input
tolerancia_abs: 0

enunciado: "Repartís {dividendo} caramelos entre {divisor} chicos, en partes iguales. ¿Cuántos caramelos le tocan a cada uno (sin contar los que sobran)?"

explicacion: |
  A cada chico le toca el cociente; lo que no se puede repartir en partes
  iguales queda como resto.
```

```
metadata:
  materia: "matematicas"
  tema: "division"
  nivel: "basico"
  tags: ["division", "prueba_de_la_division"]

variables:
  divisor: random(2, 9)
  cociente: random(2, 15)
  resto: random(0, divisor - 1)
  dividendo: divisor * cociente + resto

respuesta: (divisor * cociente + resto == dividendo)
tipo: vf

enunciado: "Si {dividendo} ÷ {divisor} da cociente {cociente} y resto {resto}, ¿tiene que ser cierto que {divisor} × {cociente} + {resto} da {dividendo}?"

explicacion: |
  Es la prueba de la división: multiplicar el divisor por el cociente y
  sumar el resto siempre reconstruye el dividendo.
```

```
metadata:
  materia: "matematicas"
  tema: "division"
  nivel: "basico"
  tags: ["division", "relacion_multiplicacion"]

variables:
  a: random(2, 9)
  b: random(2, 20)
  c: a * b

respuesta: b
tipo: input
tolerancia_abs: 0

enunciado: "Sabiendo que {a} × {b} = {c}, ¿cuánto es {c} ÷ {a}?"

explicacion: |
  La división deshace lo que hizo la multiplicación: si {a} × {b} = {c},
  entonces {c} ÷ {a} vuelve a dar {b}.
```

```
metadata:
  materia: "matematicas"
  tema: "division"
  nivel: "basico"
  tags: ["division", "relacion_multiplicacion"]

variables:
  a: random(2, 9)
  b: random(2, 20)
  c: a * b

respuesta: a
tipo: input
tolerancia_abs: 0

enunciado: "Sabiendo que {a} × {b} = {c}, ¿cuánto es {c} ÷ {b}?"

explicacion: |
  Dividiendo por el otro factor se recupera el que falta: {c} ÷ {b} = {a}.
```

```
metadata:
  materia: "matematicas"
  tema: "division"
  nivel: "basico"
  tags: ["division", "propiedades"]

variables:
  a: random(2, 90)
  b: random(2, 90)

restricciones:
  - a != b

respuesta: (a / b == b / a)
tipo: vf

enunciado: "¿Es cierto que {a} ÷ {b} da el mismo resultado que {b} ÷ {a}?"

explicacion: |
  A diferencia de la multiplicación, en la división el orden importa:
  dividendo y divisor no se pueden intercambiar.
```

```
metadata:
  materia: "matematicas"
  tema: "division"
  nivel: "basico"
  tags: ["division", "propiedades"]

respuesta: verdadero
tipo: vf

enunciado: "En una división, no es lo mismo el dividendo que el divisor: cambiarlos de lugar cambia el resultado."

explicacion: |
  Igual que en la resta, el orden de los términos en una división no se
  puede cambiar sin cambiar el resultado.
```

```
metadata:
  materia: "matematicas"
  tema: "division"
  nivel: "basico"
  tags: ["division", "propiedades"]

respuesta: falso
tipo: vf

enunciado: "Se puede dividir cualquier número por 0 y obtener un resultado."

explicacion: |
  Dividir por 0 no está definido: no existe ningún número que, multiplicado
  por 0, dé un resultado distinto de 0.
```

```
metadata:
  materia: "matematicas"
  tema: "division"
  nivel: "basico"
  tags: ["division", "propiedades"]

respuesta: verdadero
tipo: vf

enunciado: "0 dividido cualquier número distinto de 0 da siempre 0."

explicacion: |
  Repartir nada (0) entre cualquier cantidad de partes sigue dando 0 en
  cada parte — distinto de dividir por 0, que no está definido.
```

```
metadata:
  materia: "matematicas"
  tema: "division"
  nivel: "basico"
  tags: ["division", "vocabulario"]

enunciado: "En 17 ÷ 5, ¿cómo se llama el 17?"
tipo: mc
opciones_explicitas:
  - "Dividendo"
  - "Divisor"
  - "Cociente"
respuesta: "Dividendo"

explicacion: |
  El número que se reparte es el dividendo; el que indica en cuántas
  partes es el divisor.
```

```
metadata:
  materia: "matematicas"
  tema: "division"
  nivel: "basico"
  tags: ["division", "vocabulario"]

enunciado: "En 17 ÷ 5 = 3 y sobran 2, ¿cómo se llaman el 3 y el 2, respectivamente?"
tipo: mc
opciones_explicitas:
  - "Cociente y resto"
  - "Resto y cociente"
  - "Divisor y dividendo"
respuesta: "Cociente y resto"

explicacion: |
  El resultado de la división es el cociente; lo que queda sin repartir es
  el resto.
```

```
metadata:
  materia: "matematicas"
  tema: "division"
  nivel: "basico"
  tags: ["division", "potencias_de_10"]

variables:
  potencia: uno_de([10, 100, 1000])
  n: random(1, 90)
  dividendo: n * potencia

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {dividendo} ÷ {potencia}?"

explicacion: |
  Dividir por una potencia de 10 es sacarle al número tantos ceros del
  final como tenga esa potencia.
```

```
metadata:
  materia: "matematicas"
  tema: "division"
  nivel: "basico"
  tags: ["division", "potencias_de_10"]

respuesta: verdadero
tipo: vf

enunciado: "Si un número termina en dos ceros, dividirlo por 100 es sacarle esos dos ceros."

explicacion: |
  Es el mismo movimiento de valor posicional que multiplicar por una
  potencia de 10, pero al revés.
```

```
metadata:
  materia: "matematicas"
  tema: "division"
  nivel: "intermedio"
  tags: ["division", "estimacion"]

variables:
  divisor: uno_de([2, 5, 10])
  base: random(2, 50)
  dividendo: base * divisor * 10
  redondeado: redondear(dividendo / 100, 0) * 100

respuesta: redondeado / divisor
tipo: input
tolerancia_abs: 0

enunciado: "Redondeá {dividendo} a la centena más cercana y dividilo por {divisor}. ¿Cuánto da la estimación?"

pasos:
  - "{dividendo} redondea a {redondeado}. {redondeado} ÷ {divisor} = {redondeado / divisor}"

explicacion: |
  Estimar una división es redondear el dividendo antes de dividir, para
  tener una idea rápida de cuántas cifras (y qué magnitud) va a tener el
  cociente.
```

```
metadata:
  materia: "matematicas"
  tema: "division"
  nivel: "intermedio"
  tags: ["division", "estimacion"]

variables:
  divisor: uno_de([2, 5])
  base: random(2, 90)
  dividendo: base * divisor
  redondeado: redondear(dividendo / 10, 0) * 10

respuesta: redondeado / divisor
tipo: input
tolerancia_abs: 0

enunciado: "Redondeá {dividendo} a la decena más cercana y dividilo por {divisor}. ¿Cuánto da la estimación?"

explicacion: |
  Con números más chicos alcanza con redondear a la decena para tener una
  estimación rápida.
```

```
metadata:
  materia: "matematicas"
  tema: "division"
  nivel: "intermedio"
  tags: ["division", "termino_faltante"]

variables:
  divisor: random(2, 9)
  cociente: random(2, 20)

respuesta: divisor * cociente
tipo: input
tolerancia_abs: 0

enunciado: "¿Qué número dividido por {divisor} da {cociente} (sin resto)?"

pasos:
  - "{divisor} × {cociente} = {divisor * cociente}"

explicacion: |
  El dividendo que falta se encuentra multiplicando el divisor por el
  cociente — la prueba de la división, usada al revés.
```

```
metadata:
  materia: "matematicas"
  tema: "division"
  nivel: "intermedio"
  tags: ["division", "termino_faltante"]

variables:
  divisor_real: random(2, 9)
  cociente: random(2, 15)
  dividendo: divisor_real * cociente

respuesta: divisor_real
tipo: input
tolerancia_abs: 0

enunciado: "¿Por qué número hay que dividir {dividendo} para obtener {cociente} (sin resto)?"

explicacion: |
  El divisor que falta se encuentra dividiendo el dividendo por el
  cociente conocido.
```

```
metadata:
  materia: "matematicas"
  tema: "division"
  nivel: "intermedio"
  tags: ["division", "termino_faltante"]

variables:
  divisor: random(2, 9)
  cociente: random(2, 20)
  dividendo: divisor * cociente

tipo: completar
enunciado: "Completá: ___ ÷ {divisor} = {cociente}."
respuestas_validas:
  - dividendo

explicacion: |
  El número que falta es el dividendo: el que, dividido por {divisor}, da
  exactamente {cociente}.
```

```
metadata:
  materia: "matematicas"
  tema: "division"
  nivel: "basico"
  tags: ["division", "verificacion"]

variables:
  divisor: random(2, 9)
  cociente: random(2, 9)
  dividendo: divisor * cociente
  error: uno_de([0, 0, 0, 1, -1])
  mostrado: cociente + error

respuesta: (mostrado * divisor == dividendo)
tipo: vf

enunciado: "¿Está bien resuelta esta división? {dividendo} ÷ {divisor} = {mostrado}"

explicacion: |
  Para verificar una división exacta alcanza con multiplicar el cociente
  mostrado por el divisor y comparar con el dividendo.
```

```
metadata:
  materia: "matematicas"
  tema: "division"
  nivel: "intermedio"
  tags: ["division", "verificacion"]

variables:
  divisor: random(2, 9)
  cociente: random(2, 15)
  resto: random(1, divisor - 1)
  dividendo: divisor * cociente + resto
  error: uno_de([0, 0, 0, 1, -1])
  resto_mostrado: resto + error

respuesta: ((divisor * cociente + resto_mostrado) == dividendo)
tipo: vf

enunciado: "¿Está bien resuelta esta división? {dividendo} ÷ {divisor} = {cociente}, resto {resto_mostrado}"

explicacion: |
  Se aplica la prueba de la división: divisor × cociente + resto tiene que
  reconstruir el dividendo exacto.
```

```
metadata:
  materia: "matematicas"
  tema: "division"
  nivel: "avanzado"
  tags: ["division", "verificacion"]

variables:
  divisor: random(2, 9)
  cociente: random(20, 90)
  dividendo: divisor * cociente
  error: uno_de([0, 0, 0, 1, -1, 10])
  mostrado: cociente + error

respuesta: (mostrado * divisor == dividendo)
tipo: vf

enunciado: "¿Está bien resuelta esta división? {dividendo} ÷ {divisor} = {mostrado}"

explicacion: |
  Con cocientes más grandes conviene verificar multiplicando de nuevo, en
  vez de confiar en que el número "parece" razonable.
```

```
metadata:
  materia: "matematicas"
  tema: "division"
  nivel: "basico"
  tags: ["division", "problema"]

variables:
  divisor: random(2, 9)
  cociente: random(2, 15)
  dividendo: divisor * cociente

respuesta: cociente
tipo: input
tolerancia_abs: 0

enunciado: "Se reparten {dividendo} figuritas entre {divisor} amigos, en partes iguales y sin que sobre ninguna. ¿Cuántas figuritas le tocan a cada uno?"

explicacion: |
  Repartir en partes iguales, sin que sobre nada, es exactamente una
  división exacta.
```

```
metadata:
  materia: "matematicas"
  tema: "division"
  nivel: "intermedio"
  tags: ["division", "problema"]

variables:
  divisor: random(2, 9)
  cociente: random(2, 15)
  resto: random(1, divisor - 1)
  dividendo: divisor * cociente + resto

respuesta: cociente
tipo: input
tolerancia_abs: 0

enunciado: "Tenés {dividendo} caramelos y querés armar bolsitas de {divisor} caramelos cada una. ¿Cuántas bolsitas completas podés armar?"

explicacion: |
  Sólo se cuentan las bolsitas completas: es el cociente de la división,
  sin contar los caramelos que sobran (el resto).
```

```
metadata:
  materia: "matematicas"
  tema: "division"
  nivel: "intermedio"
  tags: ["division", "problema"]

variables:
  divisor: random(2, 9)
  cociente: random(20, 200)
  dividendo: divisor * cociente

respuesta: cociente
tipo: input
tolerancia_abs: 0

enunciado: "Pagaste ${dividendo} por {divisor} entradas iguales. ¿Cuánto cuesta cada entrada?"

explicacion: |
  El precio de cada unidad es el total dividido por la cantidad de
  unidades.
```

```
metadata:
  materia: "matematicas"
  tema: "division"
  nivel: "intermedio"
  tags: ["division", "problema"]

variables:
  divisor: random(2, 8)
  cociente: random(50, 500)
  dividendo: divisor * cociente

respuesta: cociente
tipo: input
tolerancia_abs: 0

enunciado: "Un premio de ${dividendo} se reparte en partes iguales entre {divisor} personas. ¿Cuánto le toca a cada una?"

explicacion: |
  Repartir un monto en partes iguales es dividir el total por la cantidad
  de personas.
```

```
metadata:
  materia: "matematicas"
  tema: "division"
  nivel: "intermedio"
  tags: ["division", "division_entera"]

variables:
  divisor: random(2, 9)
  cociente: random(2, 15)
  resto: uno_de([0, 0, random(1, divisor - 1)])
  dividendo: divisor * cociente + resto

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Es exacta la división {dividendo} ÷ {divisor} (da resto 0)?"

explicacion: |
  Una división es exacta cuando no queda resto: el divisor entra un
  número entero de veces en el dividendo.
```

```
metadata:
  materia: "matematicas"
  tema: "division"
  nivel: "intermedio"
  tags: ["division", "division_entera"]

variables:
  divisor: random(3, 9)
  cociente: random(2, 15)
  resto: uno_de([0, random(1, divisor - 1), random(1, divisor - 1)])
  dividendo: divisor * cociente + resto

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Es exacta la división {dividendo} ÷ {divisor} (da resto 0)?"

explicacion: |
  Hay que resolver la división (o pensar las tablas) para saber si el
  divisor entra justo o queda algo sin repartir.
```

```
metadata:
  materia: "matematicas"
  tema: "division"
  nivel: "basico"
  tags: ["division", "algoritmo"]

variables:
  divisor: random(2, 9)
  cociente: random(2, 15)
  dividendo: divisor * cociente

tipo: completar
enunciado: "Completá el resultado: {dividendo} ÷ {divisor} = ___."
respuestas_validas:
  - cociente

explicacion: |
  Se busca cuántas veces entra el divisor en el dividendo, y ese número es
  el cociente.
```

```
metadata:
  materia: "matematicas"
  tema: "division"
  nivel: "basico"
  tags: ["division", "division_entera"]

respuesta: verdadero
tipo: vf

enunciado: "En una división entera, el resto siempre tiene que ser menor que el divisor."

explicacion: |
  Si el resto fuera igual o mayor que el divisor, todavía se podría sacar
  una vez más el divisor completo: el cociente estaría mal calculado.
```

```
metadata:
  materia: "matematicas"
  tema: "division"
  nivel: "intermedio"
  tags: ["division", "division_entera"]

variables:
  divisor: random(2, 9)
  cociente: random(2, 15)
  resto_valido: random(0, divisor - 1)
  resto_mostrado: uno_de([resto_valido, resto_valido, divisor + random(0, 3)])
  dividendo: divisor * cociente + resto_mostrado

respuesta: (resto_mostrado < divisor)
tipo: vf

enunciado: "¿Puede ser correcto decir que {dividendo} ÷ {divisor} da cociente {cociente} y resto {resto_mostrado}?"

explicacion: |
  Un resto tiene que ser siempre menor que el divisor; si no lo es, el
  cociente está mal — todavía entraba una vez más el divisor.
```

```
metadata:
  materia: "matematicas"
  tema: "division"
  nivel: "basico"
  tags: ["division", "orden"]

tipo: ordenar
enunciado: "Ordená estos cocientes de menor a mayor (sin calcularlos todos de una)."
opciones_explicitas:
  - "20 ÷ 4"
  - "18 ÷ 6"
  - "24 ÷ 3"
  - "12 ÷ 4"
respuesta_orden: ["12 ÷ 4", "18 ÷ 6", "20 ÷ 4", "24 ÷ 3"]

explicacion: |
  12÷4=3, 18÷6=3... hay que resolver cada cociente antes de poder
  ordenarlos: 12÷4=3, 18÷6=3, 20÷4=5, 24÷3=8.
```

```
metadata:
  materia: "matematicas"
  tema: "division"
  nivel: "basico"
  tags: ["division", "vocabulario"]

variables:
  divisor: random(2, 9)
  cociente: random(2, 12)
  dividendo: divisor * cociente

respuesta: cociente
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántas veces entra el {divisor} en el {dividendo}?"

explicacion: |
  "Cuántas veces entra" es otra forma de decir "cuál es el cociente de la
  división".
```

```
metadata:
  materia: "matematicas"
  tema: "division"
  nivel: "intermedio"
  tags: ["division", "problema", "division_entera"]

variables:
  divisor: random(2, 9)
  cociente: random(2, 15)
  resto: random(1, divisor - 1)
  dividendo: divisor * cociente + resto

respuesta: resto
tipo: input
tolerancia_abs: 0

enunciado: "Repartís {dividendo} lápices entre {divisor} chicos, en partes iguales. ¿Cuántos lápices sobran, sin poder repartirse?"

explicacion: |
  Lo que sobra es exactamente el resto de la división entera.
```

```
metadata:
  materia: "matematicas"
  tema: "division"
  nivel: "basico"
  tags: ["division", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Dividir es repartir una cantidad en partes iguales, o ver cuántas veces entra un número dentro de otro."

explicacion: |
  Es la idea central de la división: repartir equitativamente o contar
  cuántas veces cabe una cantidad dentro de otra.
```

## Sección: hora-y-reloj (26 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "basico"
  tags: ["hora_y_reloj", "conversion"]

variables:
  horas: random(2, 10)

respuesta: horas * 60
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos minutos hay en {horas} horas?"

explicacion: |
  1 hora son 60 minutos: se multiplica la cantidad de horas por 60.
```

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "basico"
  tags: ["hora_y_reloj", "conversion"]

variables:
  minutos: random(2, 20)

respuesta: minutos * 60
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos segundos hay en {minutos} minutos?"

explicacion: |
  1 minuto son 60 segundos: se multiplica la cantidad de minutos por 60.
```

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "intermedio"
  tags: ["hora_y_reloj", "conversion"]

variables:
  horas: random(1, 6)
  minutos_extra: random(1, 59)
  total: horas * 60 + minutos_extra

respuesta: horas
tipo: input
tolerancia_abs: 0

enunciado: "{total} minutos, ¿cuántas horas COMPLETAS son?"

pasos:
  - "{total} ÷ 60 = {horas} horas, con {minutos_extra} minutos sobrando"

explicacion: |
  Se divide por 60 y se toma la parte entera del cociente.
```

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "intermedio"
  tags: ["hora_y_reloj", "conversion"]

variables:
  horas: random(1, 6)
  minutos_extra: random(1, 59)
  total: horas * 60 + minutos_extra

respuesta: minutos_extra
tipo: input
tolerancia_abs: 0

enunciado: "{total} minutos son {horas} horas, ¿y cuántos minutos más?"

explicacion: |
  Los minutos que sobran son el resto de dividir el total por 60.
```

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "intermedio"
  tags: ["hora_y_reloj", "formato"]

variables:
  hora_12: random(1, 11)

respuesta: hora_12 + 12
tipo: input
tolerancia_abs: 0

enunciado: "Las {hora_12} PM, en formato 24 horas, ¿qué hora son?"

explicacion: |
  Para pasar de PM a formato 24 horas (salvo el 12 del mediodía), se
  suma 12.
```

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "intermedio"
  tags: ["hora_y_reloj", "formato"]

variables:
  hora_24: random(13, 23)

respuesta: hora_24 - 12
tipo: input
tolerancia_abs: 0

enunciado: "Las {hora_24} en formato 24 horas, ¿qué hora son en formato 12 horas (PM)?"

explicacion: |
  Para pasar de formato 24 horas a PM, se resta 12.
```

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "basico"
  tags: ["hora_y_reloj", "formato"]

respuesta: 12
tipo: input
tolerancia_abs: 0

enunciado: "El mediodía (12 PM), en formato 24 horas, ¿qué hora es?"

explicacion: |
  Es el único caso PM que no cambia al pasar a formato 24 horas.
```

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "basico"
  tags: ["hora_y_reloj", "duracion"]

variables:
  hora_inicio: random(1, 10)
  minutos: random(0, 59)
  horas_de_diferencia: random(1, 5)
  hora_fin: hora_inicio + horas_de_diferencia

respuesta: horas_de_diferencia
tipo: input
tolerancia_abs: 0

enunciado: "Entre las {hora_inicio} horas y {minutos} minutos, y las {hora_fin} horas y {minutos} minutos, ¿cuántas horas completas pasaron?"

explicacion: |
  Con el mismo minuto en los dos horarios, alcanza con restar las horas.
```

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "avanzado"
  tags: ["hora_y_reloj", "duracion"]

variables:
  min_inicio: random(30, 50)
  min_fin: random(0, min_inicio - 1)
  hora_inicio: random(1, 8)
  hora_fin: hora_inicio + random(1, 4)
  total_inicio: hora_inicio * 60 + min_inicio
  total_fin: hora_fin * 60 + min_fin

respuesta: total_fin - total_inicio
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos minutos pasaron entre las {hora_inicio} horas y {min_inicio} minutos, y las {hora_fin} horas y {min_fin} minutos?"

pasos:
  - "Todo en minutos: {total_inicio} y {total_fin}. {total_fin} - {total_inicio} = {total_fin - total_inicio}"

explicacion: |
  Cuando los minutos de llegada son menos que los de salida, conviene
  pasar todo a minutos totales antes de restar, en vez de restar por
  columnas.
```

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "basico"
  tags: ["hora_y_reloj", "duracion"]

variables:
  hora_inicio: random(1, 8)
  min_inicio: random(0, 29)
  min_agregados: random(1, 29)

respuesta: min_inicio + min_agregados
tipo: input
tolerancia_abs: 0

enunciado: "Empezás algo a las {hora_inicio} horas y {min_inicio} minutos, y dura {min_agregados} minutos más. ¿A los cuántos minutos termina (sin cambiar de hora)?"

explicacion: |
  Sumando los minutos sin pasar de 60, la hora no cambia.
```

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "avanzado"
  tags: ["hora_y_reloj", "duracion"]

variables:
  hora_inicio: random(1, 8)
  min_inicio: random(30, 55)
  min_agregados: random(20, 50)
  total: min_inicio + min_agregados

respuesta: hora_inicio + floor(total / 60)
tipo: input
tolerancia_abs: 0

enunciado: "Empezás algo a las {hora_inicio} horas y {min_inicio} minutos, y dura {min_agregados} minutos más. ¿A qué hora completa cae el final (sin contar los minutos)?"

pasos:
  - "{min_inicio} + {min_agregados} = {total} minutos, que son {floor(total / 60)} hora(s) más: {hora_inicio} + {floor(total / 60)} = {hora_inicio + floor(total / 60)}"

explicacion: |
  Cuando los minutos suman 60 o más, se "lleva" 1 a la hora, igual que
  llevar una decena en una suma común, pero acá llevando de a 60.
```

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "basico"
  tags: ["hora_y_reloj", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "1 hora equivale a 60 minutos."

explicacion: |
  El tiempo se mide en base 60, no en base 10.
```

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "basico"
  tags: ["hora_y_reloj", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "1 minuto equivale a 60 segundos."

explicacion: |
  Mismo sistema sexagesimal que horas y minutos.
```

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "intermedio"
  tags: ["hora_y_reloj"]

variables:
  horas: random(2, 10)
  correcto: horas * 60

respuesta: correcto
tipo: mc
opciones_explicitas:
  - correcto
  - horas * 100
  - horas + 60

enunciado: "¿Cuántos minutos hay en {horas} horas?"

explicacion: |
  Las otras opciones confunden la base 60 con la base 10 (multiplicar por
  100), o mezclan mal las unidades.
```

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "intermedio"
  tags: ["hora_y_reloj", "verificacion"]

variables:
  horas: random(1, 6)
  minutos_extra: random(1, 59)
  total: horas * 60 + minutos_extra
  error: uno_de([0, 0, 0, 1, -1])
  horas_mostradas: horas + error

respuesta: (horas_mostradas == horas)
tipo: vf

enunciado: "¿Está bien calculado esto? {total} minutos son {horas_mostradas} horas completas (y algunos minutos más)."

explicacion: |
  Se verifica dividiendo el total por 60 y comparando la parte entera.
```

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "intermedio"
  tags: ["hora_y_reloj"]

variables:
  min_inicio: random(0, 40)
  min_agregados: random(5, 19)

tipo: completar
enunciado: "{min_inicio} minutos más ___ minutos da {min_inicio + min_agregados} minutos. Completá cuántos minutos se agregaron."
respuestas_validas:
  - min_agregados

explicacion: |
  Se despeja restando: {min_inicio + min_agregados} - {min_inicio}.
```

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "intermedio"
  tags: ["hora_y_reloj", "problema"]

variables:
  total_minutos: random(80, 179)

respuesta: floor(total_minutos / 60)
tipo: input
tolerancia_abs: 0

enunciado: "Una película dura {total_minutos} minutos. ¿Cuántas horas COMPLETAS dura?"

explicacion: |
  Se divide por 60 y se toma la parte entera.
```

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "avanzado"
  tags: ["hora_y_reloj", "problema"]

variables:
  hora_salida: random(6, 10)
  min_salida: random(30, 55)
  duracion_min: random(20, 50)
  total: min_salida + duracion_min

respuesta: hora_salida + floor(total / 60)
tipo: input
tolerancia_abs: 0

enunciado: "Un colectivo sale a las {hora_salida} horas y {min_salida} minutos, y el viaje dura {duracion_min} minutos. ¿A qué hora completa llega (sin contar los minutos)?"

explicacion: |
  Sumar la duración al horario de salida, llevando a la hora si los
  minutos pasan de 60.
```

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "intermedio"
  tags: ["hora_y_reloj", "problema"]

variables:
  min_actual: random(1, 59)

respuesta: 60 - min_actual
tipo: input
tolerancia_abs: 0

enunciado: "Son las {min_actual} minutos de la hora en curso. ¿Cuántos minutos faltan para que se cumpla la hora completa (el próximo :00)?"

explicacion: |
  Faltan 60 menos los minutos que ya pasaron.
```

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "intermedio"
  tags: ["hora_y_reloj", "orden"]

tipo: ordenar
enunciado: "Ordená estos horarios del más temprano al más tarde."
opciones_explicitas:
  - "9 horas y 45 minutos"
  - "9 horas y 5 minutos"
  - "10 horas y 15 minutos"
  - "9 horas y 30 minutos"
respuesta_orden: ["9 horas y 5 minutos", "9 horas y 30 minutos", "9 horas y 45 minutos", "10 horas y 15 minutos"]

explicacion: |
  Primero se compara la hora; si empata, se compara el minuto.
```

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "intermedio"
  tags: ["hora_y_reloj", "comparacion"]

variables:
  min1: random(30, 90)
  min2: random(30, 90)

restricciones:
  - min1 != min2

respuesta: (min1 > min2)
tipo: vf

enunciado: "¿Dura más una actividad de {min1} minutos que una de {min2} minutos?"

explicacion: |
  Se comparan directamente los minutos totales.
```

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "intermedio"
  tags: ["hora_y_reloj", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Al restar horarios, si los minutos de llegada son menos que los de salida, se le pide prestada 1 hora (60 minutos) a la columna de las horas."

explicacion: |
  Es el mismo mecanismo que pedir prestada una decena en una resta común,
  pero acá se presta de a 60 en vez de a 10.
```

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "basico"
  tags: ["hora_y_reloj", "formato"]

variables:
  hora_am: random(1, 11)

respuesta: hora_am
tipo: input
tolerancia_abs: 0

enunciado: "Las {hora_am} AM, en formato 24 horas, ¿qué hora son (el número de la hora no cambia)?"

explicacion: |
  Las horas AM (salvo la medianoche) se escriben igual en formato 24
  horas.
```

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "basico"
  tags: ["hora_y_reloj", "formato"]

respuesta: 0
tipo: input
tolerancia_abs: 0

enunciado: "La medianoche (12 AM), en formato 24 horas, ¿qué hora es?"

explicacion: |
  Es el único caso AM que sí cambia el número: la medianoche es la hora 0.
```

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "intermedio"
  tags: ["hora_y_reloj", "problema"]

variables:
  min_por_recreo: random(10, 20)
  cantidad: random(2, 5)

respuesta: min_por_recreo * cantidad
tipo: input
tolerancia_abs: 0

enunciado: "Cada recreo dura {min_por_recreo} minutos, y hay {cantidad} recreos por día. ¿Cuántos minutos de recreo hay en total?"

explicacion: |
  Multiplicar la duración de cada recreo por la cantidad de recreos.
```

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "basico"
  tags: ["hora_y_reloj", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El tiempo (horas, minutos, segundos) se mide en base 60, un sistema distinto al decimal que se usa para casi todo lo demás."

explicacion: |
  Es la idea central de todo el tema: contar y operar en grupos de 60, no
  de 10.
```

