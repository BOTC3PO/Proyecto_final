# Examen jefe — Maestro de series y conicas

> Logro #78. Resolviste el parcial dominando resta, riesgos, circunferencias, Thales y series geométricas. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **140 preguntas totales** en 5/5 secciones.

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

## Sección: riesgo-relativo-vs-absoluto (20 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "riesgo_relativo_vs_absoluto"
  nivel: "basico"
  tags: ["riesgo_absoluto", "vocabulario"]

enunciado: "¿Qué es el riesgo absoluto de un evento en un grupo?"
tipo: mc
opciones_explicitas:
  - "La probabilidad simple de que ocurra el evento en ese grupo (por ejemplo, 70 de cada 10.000 personas)"
  - "La comparación entre el riesgo de dos grupos distintos"
  - "El porcentaje de personas que NO tuvieron el evento"
respuesta: "La probabilidad simple de que ocurra el evento en ese grupo (por ejemplo, 70 de cada 10.000 personas)"

explicacion: |
  Es la misma probabilidad condicional P(evento|grupo) de
  `../probabilidad-condicional/`.
```

```
metadata:
  materia: "matematicas"
  tema: "riesgo_relativo_vs_absoluto"
  nivel: "intermedio"
  tags: ["riesgo_relativo", "vocabulario"]

enunciado: "¿Qué es el riesgo relativo (RR)?"
tipo: mc
opciones_explicitas:
  - "La razón entre el riesgo de un grupo expuesto y el riesgo de un grupo no expuesto (P(evento|expuesto) / P(evento|no expuesto))"
  - "La probabilidad absoluta de un único grupo, sin comparar con ningún otro"
  - "La diferencia de edad entre dos grupos comparados"
respuesta: "La razón entre el riesgo de un grupo expuesto y el riesgo de un grupo no expuesto (P(evento|expuesto) / P(evento|no expuesto))"

explicacion: |
  RR=1 significa que no hay diferencia entre ambos grupos.
```

```
metadata:
  materia: "matematicas"
  tema: "riesgo_relativo_vs_absoluto"
  nivel: "avanzado"
  tags: ["riesgo_relativo", "problema"]

variables:
  riesgo_expuesto: uno_de([0.04, 0.06, 0.08])
  riesgo_no_expuesto: uno_de([0.02, 0.03])

respuesta: redondear(riesgo_expuesto / riesgo_no_expuesto, 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "El riesgo de un evento es {riesgo_expuesto} en el grupo expuesto y {riesgo_no_expuesto} en el grupo no expuesto. ¿Cuál es el riesgo relativo (RR)?"

pasos:
  - "RR = {riesgo_expuesto} / {riesgo_no_expuesto} = {redondear(riesgo_expuesto / riesgo_no_expuesto, 2)}"

explicacion: |
  Un RR mayor a 1 indica más riesgo en el grupo expuesto.
```

```
metadata:
  materia: "matematicas"
  tema: "riesgo_relativo_vs_absoluto"
  nivel: "avanzado"
  tags: ["riesgo_absoluto", "problema"]

variables:
  riesgo_expuesto: uno_de([0.04, 0.06, 0.08])
  riesgo_no_expuesto: uno_de([0.02, 0.03])

respuesta: redondear(riesgo_expuesto - riesgo_no_expuesto, 3)
tipo: input
tolerancia_abs: 0.001

enunciado: "Con los mismos riesgos ({riesgo_expuesto} expuesto, {riesgo_no_expuesto} no expuesto), ¿cuál es la diferencia de riesgo ABSOLUTA?"

pasos:
  - "Diferencia = {riesgo_expuesto} − {riesgo_no_expuesto} = {redondear(riesgo_expuesto - riesgo_no_expuesto, 3)}"

explicacion: |
  Es una resta simple, a diferencia del riesgo relativo (que es un
  cociente).
```

```
metadata:
  materia: "matematicas"
  tema: "riesgo_relativo_vs_absoluto"
  nivel: "avanzado"
  tags: ["riesgo_relativo", "riesgo_absoluto"]

respuesta: verdadero
tipo: vf

enunciado: "Un riesgo relativo alto (por ejemplo, RR=2) puede corresponder a una diferencia de riesgo absoluta insignificante, si el riesgo base (sin exposición) ya era muy bajo de por sí."

explicacion: |
  Duplicar un riesgo de 1 en un millón sigue siendo un riesgo
  absoluto mínimo, aunque el riesgo relativo (RR=2) suene alarmante.
```

```
metadata:
  materia: "matematicas"
  tema: "riesgo_relativo_vs_absoluto"
  nivel: "avanzado"
  tags: ["riesgo_absoluto", "problema"]

variables:
  riesgo_base: 0.000001
  rr: 2

respuesta: redondear(riesgo_base * rr - riesgo_base, 7)
tipo: input
tolerancia_abs: 0.0000001

enunciado: "Un hábito duplica (RR={rr}) el riesgo de una enfermedad muy rara, cuyo riesgo base sin el hábito es {riesgo_base} (1 en 1.000.000). ¿Cuál es la diferencia de riesgo ABSOLUTA real?"

pasos:
  - "Riesgo con el hábito = {riesgo_base} × {rr} = {riesgo_base * rr}"
  - "Diferencia absoluta = {riesgo_base * rr} − {riesgo_base} = {redondear(riesgo_base * rr - riesgo_base, 7)}"

explicacion: |
  A pesar de 'duplicar el riesgo', el aumento absoluto real es de
  apenas 1 en 1.000.000 — prácticamente insignificante en términos
  prácticos.
```

```
metadata:
  materia: "matematicas"
  tema: "riesgo_relativo_vs_absoluto"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "Un titular dice: 'Comer X duplica el riesgo de la enfermedad Y'. ¿Qué información falta para poder evaluar si esto es realmente preocupante?"
tipo: mc
opciones_explicitas:
  - "El riesgo ABSOLUTO de base (sin comer X): duplicar un riesgo de 1 en un millón no es lo mismo que duplicar uno de 1 en 10"
  - "No falta ninguna información: 'duplica el riesgo' ya dice todo lo necesario"
  - "Sólo importa saber cuántas personas participaron en el estudio"
respuesta: "El riesgo ABSOLUTO de base (sin comer X): duplicar un riesgo de 1 en un millón no es lo mismo que duplicar uno de 1 en 10"

explicacion: |
  El riesgo relativo solo, sin el riesgo absoluto de referencia, no
  alcanza para evaluar la relevancia práctica de la noticia.
```

```
metadata:
  materia: "matematicas"
  tema: "riesgo_relativo_vs_absoluto"
  nivel: "avanzado"
  tags: ["riesgo_relativo", "problema"]

variables:
  riesgo_no_expuesto: 0.001
  riesgo_expuesto: 0.003

respuesta: redondear(riesgo_expuesto / riesgo_no_expuesto, 1)
tipo: input
tolerancia_abs: 0.1

enunciado: "Un titular dice 'esto TRIPLICA el riesgo'. El riesgo sin exposición es {riesgo_no_expuesto} y con exposición es {riesgo_expuesto}. ¿El riesgo relativo confirma ese 'triplica'?"

pasos:
  - "RR = {riesgo_expuesto} / {riesgo_no_expuesto} = {redondear(riesgo_expuesto / riesgo_no_expuesto, 1)}"

explicacion: |
  El cálculo confirma el RR=3 del titular — pero sigue haciendo falta
  el riesgo absoluto para saber si es relevante en la práctica.
```

```
metadata:
  materia: "matematicas"
  tema: "riesgo_relativo_vs_absoluto"
  nivel: "intermedio"
  tags: ["riesgo_relativo"]

enunciado: "¿Por qué el riesgo relativo, reportado SOLO (sin el riesgo absoluto), no cuenta toda la historia?"
tipo: mc
opciones_explicitas:
  - "Porque el mismo número de riesgo relativo puede corresponder a situaciones con consecuencias prácticas muy distintas, según cuál sea el riesgo absoluto de base"
  - "Porque el riesgo relativo siempre es un número inventado, sin ninguna base real"
  - "El riesgo relativo solo siempre es suficiente, no hace falta nada más"
respuesta: "Porque el mismo número de riesgo relativo puede corresponder a situaciones con consecuencias prácticas muy distintas, según cuál sea el riesgo absoluto de base"

explicacion: |
  Es la idea central de todo el módulo, ilustrada con el ejemplo del
  riesgo base de 1 en un millón.
```

```
metadata:
  materia: "matematicas"
  tema: "riesgo_relativo_vs_absoluto"
  nivel: "avanzado"
  tags: ["riesgo_relativo", "riesgo_absoluto"]

respuesta: verdadero
tipo: vf

enunciado: "Dos situaciones con el mismo riesgo relativo (RR=2) pueden tener consecuencias prácticas muy distintas, según si el riesgo base era del 0,0001% o del 10%."

explicacion: |
  Duplicar 10% a 20% (10 puntos de diferencia absoluta) es mucho más
  relevante que duplicar 0,0001% a 0,0002%.
```

```
metadata:
  materia: "matematicas"
  tema: "riesgo_relativo_vs_absoluto"
  nivel: "avanzado"
  tags: ["riesgo_relativo", "problema"]

variables:
  riesgo_base_a: 0.001
  riesgo_base_b: 0.15
  rr: 2

respuesta: (riesgo_base_b * rr - riesgo_base_b) > (riesgo_base_a * rr - riesgo_base_a)
tipo: vf

enunciado: "Escenario A tiene riesgo base {riesgo_base_a}; Escenario B tiene riesgo base {riesgo_base_b}. En ambos, el RR de la exposición es {rr}. ¿La diferencia de riesgo ABSOLUTA del Escenario B es MAYOR que la del Escenario A?"

explicacion: |
  Con el mismo riesgo relativo, un riesgo base más alto siempre
  produce una diferencia absoluta mayor.
```

```
metadata:
  materia: "matematicas"
  tema: "riesgo_relativo_vs_absoluto"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "Al leer 'X aumenta el riesgo de Y en un Z%', ¿qué conviene preguntarse antes de preocuparse?"
tipo: mc
opciones_explicitas:
  - "¿Cuál es el riesgo ABSOLUTO de base? Un aumento relativo grande sobre una base muy chica puede seguir siendo un riesgo absoluto insignificante"
  - "Nada más: el porcentaje ya dice todo lo que hace falta saber"
  - "Sólo importa el nombre de la revista que publicó el estudio"
respuesta: "¿Cuál es el riesgo ABSOLUTO de base? Un aumento relativo grande sobre una base muy chica puede seguir siendo un riesgo absoluto insignificante"

explicacion: |
  Es la pregunta crítica central de este módulo.
```

```
metadata:
  materia: "matematicas"
  tema: "riesgo_relativo_vs_absoluto"
  nivel: "intermedio"
  tags: ["probabilidad_condicional", "bayes"]

enunciado: "¿Qué relación tienen el riesgo absoluto y el riesgo relativo con `../probabilidad-condicional/` y `../teorema-de-bayes/`?"
tipo: mc
opciones_explicitas:
  - "Ambos son formas de reportar y comparar probabilidades condicionales (P(evento|expuesto) vs. P(evento|no expuesto)), la misma maquinaria ya vista en esos módulos"
  - "No tienen ninguna relación con la probabilidad condicional"
  - "Reemplazan por completo la necesidad de calcular probabilidad condicional"
respuesta: "Ambos son formas de reportar y comparar probabilidades condicionales (P(evento|expuesto) vs. P(evento|no expuesto)), la misma maquinaria ya vista en esos módulos"

explicacion: |
  El riesgo relativo es, literalmente, un cociente de dos
  probabilidades condicionales.
```

```
metadata:
  materia: "matematicas"
  tema: "riesgo_relativo_vs_absoluto"
  nivel: "avanzado"
  tags: ["riesgo_relativo", "problema"]

variables:
  riesgo_expuesto: 0.02
  riesgo_no_expuesto: 0.08

respuesta: redondear(riesgo_expuesto / riesgo_no_expuesto, 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "El riesgo de un evento es {riesgo_expuesto} en el grupo expuesto a un factor protector, y {riesgo_no_expuesto} en el grupo no expuesto. ¿Cuál es el riesgo relativo?"

pasos:
  - "RR = {riesgo_expuesto} / {riesgo_no_expuesto} = {redondear(riesgo_expuesto / riesgo_no_expuesto, 2)}"

explicacion: |
  Un RR menor a 1 indica que la exposición está asociada con MENOS
  riesgo (un factor protector), no con más.
```

```
metadata:
  materia: "matematicas"
  tema: "riesgo_relativo_vs_absoluto"
  nivel: "intermedio"
  tags: ["riesgo_relativo"]

respuesta: verdadero
tipo: vf

enunciado: "Un riesgo relativo de exactamente 1 significa que no hay ninguna diferencia de riesgo entre el grupo expuesto y el no expuesto."

explicacion: |
  P(evento|expuesto) = P(evento|no expuesto) cuando el cociente entre
  ambos da 1.
```

```
metadata:
  materia: "matematicas"
  tema: "riesgo_relativo_vs_absoluto"
  nivel: "avanzado"
  tags: ["aplicacion"]

enunciado: "En medicina se usa el 'número necesario a tratar' (NNT): el inverso de la diferencia de riesgo absoluta, que dice a cuántas personas hay que tratar para evitar un caso. ¿Por qué esta medida es útil, más allá del riesgo relativo?"
tipo: mc
opciones_explicitas:
  - "Porque traduce la diferencia de riesgo absoluta a una cifra concreta y fácil de interpretar en la práctica clínica, en vez de un cociente abstracto como el riesgo relativo"
  - "Porque reemplaza por completo la necesidad de calcular riesgo relativo o absoluto"
  - "El NNT no tiene ninguna aplicación médica real"
respuesta: "Porque traduce la diferencia de riesgo absoluta a una cifra concreta y fácil de interpretar en la práctica clínica, en vez de un cociente abstracto como el riesgo relativo"

explicacion: |
  Un NNT de 100 dice 'hay que tratar a 100 personas para evitar 1
  caso' — una forma muy concreta de leer la diferencia de riesgo
  absoluta.
```

```
metadata:
  materia: "matematicas"
  tema: "riesgo_relativo_vs_absoluto"
  nivel: "avanzado"
  tags: ["aplicacion", "problema"]

variables:
  diferencia_riesgo: uno_de([0.01, 0.02, 0.05])

respuesta: redondear(1 / diferencia_riesgo, 0)
tipo: input

enunciado: "Un tratamiento reduce el riesgo de un evento en {diferencia_riesgo} (diferencia de riesgo absoluta). ¿Cuál es el número necesario a tratar (NNT) para evitar 1 caso, aproximadamente?"

pasos:
  - "NNT = 1 / {diferencia_riesgo} = {redondear(1 / diferencia_riesgo, 0)}"

explicacion: |
  El NNT es, simplemente, el inverso de la diferencia de riesgo
  absoluta.
```

```
metadata:
  materia: "matematicas"
  tema: "riesgo_relativo_vs_absoluto"
  nivel: "avanzado"
  tags: ["aplicacion"]

respuesta: verdadero
tipo: vf

enunciado: "Un estudio serio de salud debería reportar tanto el riesgo relativo como el riesgo absoluto (o la diferencia de riesgo), porque cada uno responde una pregunta distinta y complementaria."

explicacion: |
  El relativo dice 'qué tan grande es el efecto, proporcionalmente';
  el absoluto dice 'qué tan probable es que me pase a mí'.
```

```
metadata:
  materia: "matematicas"
  tema: "riesgo_relativo_vs_absoluto"
  nivel: "avanzado"
  tags: ["aplicacion", "problema"]

variables:
  diferencia_a: 0.1
  diferencia_b: 0.02

respuesta: (1 / diferencia_a) < (1 / diferencia_b)
tipo: vf

enunciado: "Tratamiento A reduce el riesgo en {diferencia_a}; Tratamiento B lo reduce en {diferencia_b}. ¿El NNT del Tratamiento A es MENOR que el del Tratamiento B (hace falta tratar a menos personas para evitar 1 caso)?"

explicacion: |
  Una diferencia de riesgo absoluta más grande siempre da un NNT más
  chico (más eficiente en términos prácticos).
```

```
metadata:
  materia: "matematicas"
  tema: "riesgo_relativo_vs_absoluto"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve distinguir entre riesgo relativo y riesgo absoluto al leer una noticia de salud?"
tipo: mc
opciones_explicitas:
  - "Para evaluar con criterio propio si un titular alarmante ('duplica el riesgo') es realmente relevante en la práctica, o si esconde un riesgo absoluto insignificante"
  - "Para descartar automáticamente cualquier noticia que mencione un riesgo relativo"
  - "Sólo tiene aplicación en estudios de medicamentos, no en otro tipo de noticias"
respuesta: "Para evaluar con criterio propio si un titular alarmante ('duplica el riesgo') es realmente relevante en la práctica, o si esconde un riesgo absoluto insignificante"

explicacion: |
  Es la misma familia de pensamiento crítico estadístico que
  `../grafico-eje-truncado/` y `../correlacion-no-es-causalidad/`.
```

## Sección: secciones-conicas-circunferencia (26 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "basico"
  tags: ["conicas", "vocabulario"]

enunciado: "¿Qué son las secciones cónicas?"
tipo: mc
opciones_explicitas:
  - "Las curvas que se obtienen al cortar un cono con un plano: circunferencia, elipse, parábola e hipérbola"
  - "Otro nombre para los triángulos rectángulos"
  - "Un tipo de ecuación de primer grado"
respuesta: "Las curvas que se obtienen al cortar un cono con un plano: circunferencia, elipse, parábola e hipérbola"

explicacion: |
  Este módulo cubre sólo la circunferencia, la más simple de las
  cuatro.
```

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "basico"
  tags: ["conicas", "vocabulario"]

enunciado: "¿Qué es una circunferencia, en términos de distancia?"
tipo: mc
opciones_explicitas:
  - "El conjunto de todos los puntos que están a la misma distancia (el radio) de un punto fijo (el centro)"
  - "El conjunto de puntos que están a distancia 0 del centro"
  - "Una recta que pasa por el centro"
respuesta: "El conjunto de todos los puntos que están a la misma distancia (el radio) de un punto fijo (el centro)"

explicacion: |
  Es la misma definición geométrica de siempre, ahora escrita como
  ecuación.
```

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "intermedio"
  tags: ["conicas", "completar"]

tipo: completar
enunciado: "Completá la ecuación canónica de la circunferencia: (x − h)² + (y − k)² = ___."
respuestas_validas:
  - "r²"
  - "r^2"

explicacion: |
  El lado derecho es el radio al cuadrado.
```

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "avanzado"
  tags: ["conicas", "vocabulario"]

enunciado: "¿De qué fórmula ya conocida sale la ecuación de la circunferencia?"
tipo: mc
opciones_explicitas:
  - "De la fórmula de distancia entre dos puntos, igualada al radio y elevada al cuadrado"
  - "De la fórmula del área del círculo"
  - "No tiene relación con ninguna fórmula anterior"
respuesta: "De la fórmula de distancia entre dos puntos, igualada al radio y elevada al cuadrado"

explicacion: |
  √((x−h)² + (y−k)²) = r, elevado al cuadrado en ambos lados.
```

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "intermedio"
  tags: ["conicas", "problema"]

variables:
  r: uno_de([3, 4, 5, 6, 7, 8])

respuesta: r * r
tipo: input
tolerancia_abs: 0

enunciado: "Una circunferencia está centrada en el origen y tiene radio {r}. En su ecuación x² + y² = ___, ¿qué número va del lado derecho?"

pasos:
  - "{r}² = {r * r}"

explicacion: |
  El lado derecho es siempre el radio al cuadrado, no el radio.
```

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "intermedio"
  tags: ["conicas", "problema"]

variables:
  r: uno_de([3, 4, 5, 6, 7, 8, 9, 10])

respuesta: r
tipo: input
tolerancia_abs: 0

enunciado: "Una circunferencia tiene ecuación x² + y² = {r * r}. ¿Cuál es su radio?"

pasos:
  - "√{r * r} = {r}"

explicacion: |
  El radio es la raíz cuadrada del número del lado derecho, no el
  número mismo.
```

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "intermedio"
  tags: ["conicas", "problema"]

variables:
  h: random(1, 10)
  k: random(1, 10)
  r: uno_de([3, 4, 5])

respuesta: h
tipo: input
tolerancia_abs: 0

enunciado: "Una circunferencia tiene ecuación (x − {h})² + (y − {k})² = {r * r}. ¿Cuál es la abscisa (h) de su centro?"

explicacion: |
  Se lee directo del signo dentro del paréntesis: (x − h)² tiene h = {h}.
```

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "avanzado"
  tags: ["conicas", "problema"]

variables:
  h: random(1, 10)
  k: random(1, 10)
  r: uno_de([3, 4, 5])

respuesta: 0 - h
tipo: input
tolerancia_abs: 0

enunciado: "Una circunferencia tiene ecuación (x + {h})² + (y − {k})² = {r * r}. ¿Cuál es la abscisa (h) de su centro?"

pasos:
  - "(x + {h})² es lo mismo que (x − (-{h}))²: el centro tiene h = -{h}"

explicacion: |
  Un '+' dentro del paréntesis corresponde a una coordenada NEGATIVA del
  centro — es un error común leerlo al revés.
```

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "intermedio"
  tags: ["conicas", "problema"]

variables:
  h: random(1, 8)
  k: random(1, 8)
  r: uno_de([3, 4, 5, 6])

respuesta: r * r
tipo: input
tolerancia_abs: 0

enunciado: "Una circunferencia tiene centro ({h}, {k}) y radio {r}. En su ecuación (x − {h})² + (y − {k})² = ___, ¿qué número va del lado derecho?"

pasos:
  - "{r}² = {r * r}"

explicacion: |
  Siempre el radio al cuadrado, sin importar dónde esté el centro.
```

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "avanzado"
  tags: ["conicas", "problema"]

variables:
  k: random(1, 6)
  cateto1: 3 * k
  cateto2: 4 * k

respuesta: verdadero
tipo: vf

enunciado: "Una circunferencia está centrada en el origen y tiene radio {5 * k}. ¿El punto ({cateto1}, {cateto2}) está sobre esa circunferencia?"

explicacion: |
  {cateto1}² + {cateto2}² = {(cateto1 * cateto1) + (cateto2 * cateto2)},
  que es exactamente {5 * k}² = {(5 * k) * (5 * k)}: el punto cumple la
  ecuación, está sobre la circunferencia (terna pitagórica 3-4-5 escalada).
```

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "avanzado"
  tags: ["conicas", "problema"]

variables:
  r: uno_de([5, 10, 15])

respuesta: verdadero
tipo: vf

enunciado: "Una circunferencia está centrada en el origen y tiene radio {r}. ¿El punto (1, 1) está DENTRO de esa circunferencia?"

explicacion: |
  1² + 1² = 2, que es mucho menor que {r}² = {r * r}: el punto está
  dentro.
```

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "avanzado"
  tags: ["conicas", "problema"]

variables:
  r: uno_de([2, 3])
  x: r + random(3, 6)

respuesta: verdadero
tipo: vf

enunciado: "Una circunferencia está centrada en el origen y tiene radio {r}. ¿El punto ({x}, 0) está FUERA de esa circunferencia?"

explicacion: |
  {x}² + 0² = {x * x}, que es mayor que {r}² = {r * r}: el punto está
  fuera.
```

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "intermedio"
  tags: ["conicas", "vocabulario"]

enunciado: "Si para un punto (x, y), el valor de (x−h)² + (y−k)² es MENOR que r², ¿dónde está ese punto respecto de la circunferencia?"
tipo: mc
opciones_explicitas:
  - "Dentro de la circunferencia"
  - "Sobre la circunferencia"
  - "Fuera de la circunferencia"
respuesta: "Dentro de la circunferencia"

explicacion: |
  Está más cerca del centro que el propio radio.
```

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "intermedio"
  tags: ["conicas", "vocabulario"]

enunciado: "Si para un punto (x, y), el valor de (x−h)² + (y−k)² es EXACTAMENTE igual a r², ¿dónde está ese punto respecto de la circunferencia?"
tipo: mc
opciones_explicitas:
  - "Sobre la circunferencia"
  - "Dentro de la circunferencia"
  - "Fuera de la circunferencia"
respuesta: "Sobre la circunferencia"

explicacion: |
  Cumple exactamente la ecuación: está a distancia r del centro, ni más
  ni menos.
```

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "intermedio"
  tags: ["conicas", "vocabulario"]

enunciado: "Si para un punto (x, y), el valor de (x−h)² + (y−k)² es MAYOR que r², ¿dónde está ese punto respecto de la circunferencia?"
tipo: mc
opciones_explicitas:
  - "Fuera de la circunferencia"
  - "Dentro de la circunferencia"
  - "Sobre la circunferencia"
respuesta: "Fuera de la circunferencia"

explicacion: |
  Está más lejos del centro que el propio radio.
```

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "intermedio"
  tags: ["conicas"]

respuesta: verdadero
tipo: vf

enunciado: "La ecuación x² + y² = r² es un caso particular de la ecuación canónica, cuando el centro está en el origen (0, 0)."

explicacion: |
  Con h = 0 y k = 0, (x−0)² + (y−0)² se simplifica a x² + y².
```

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "intermedio"
  tags: ["conicas"]

respuesta: verdadero
tipo: vf

enunciado: "En la ecuación de una circunferencia, el radio es la raíz cuadrada del número del lado derecho, no el número mismo."

explicacion: |
  El lado derecho es r² (radio al cuadrado), no r.
```

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "avanzado"
  tags: ["conicas", "vocabulario"]

enunciado: "Una circunferencia tiene ecuación x² + y² = 25. ¿Cuál es el error más común al leer su radio?"
tipo: mc
opciones_explicitas:
  - "Decir que el radio es 25, en vez de sacar la raíz cuadrada y decir que es 5"
  - "Decir que el centro está en (25, 0)"
  - "Pensar que no tiene centro"
respuesta: "Decir que el radio es 25, en vez de sacar la raíz cuadrada y decir que es 5"

explicacion: |
  25 es r², no r: el radio real es √25 = 5.
```

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "avanzado"
  tags: ["conicas", "ordenar"]

enunciado: "Ordená los pasos que llevan de la definición de circunferencia a su ecuación."
tipo: ordenar
opciones_explicitas:
  - "Elevar ambos lados al cuadrado para eliminar la raíz"
  - "Plantear que la distancia entre un punto (x, y) y el centro (h, k) es igual al radio r"
  - "Escribir esa distancia con la fórmula de distancia entre dos puntos"
respuesta_orden:
  - "Plantear que la distancia entre un punto (x, y) y el centro (h, k) es igual al radio r"
  - "Escribir esa distancia con la fórmula de distancia entre dos puntos"
  - "Elevar ambos lados al cuadrado para eliminar la raíz"

explicacion: |
  El resultado final es (x−h)² + (y−k)² = r².
```

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "avanzado"
  tags: ["conicas"]

respuesta: verdadero
tipo: vf

enunciado: "En una ecuación como (x + 3)² + (y − 2)² = r², la coordenada h del centro es -3, no 3."

explicacion: |
  La forma canónica siempre resta h: (x + 3)² es (x − (−3))².
```

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "intermedio"
  tags: ["conicas", "problema"]

variables:
  h: random(-5, 5)
  k: random(-5, 5)
  r: uno_de([2, 3, 4])

respuesta: r * r
tipo: input
tolerancia_abs: 0

enunciado: "Se quiere escribir la ecuación de una circunferencia con centro ({h}, {k}) y radio {r}. ¿Qué valor va del lado derecho de la ecuación?"

pasos:
  - "{r}² = {r * r}"

explicacion: |
  El signo de h y k no afecta al lado derecho, que siempre es r².
```

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "basico"
  tags: ["conicas"]

respuesta: verdadero
tipo: vf

enunciado: "De las cuatro secciones cónicas (circunferencia, elipse, parábola, hipérbola), este módulo cubre únicamente la circunferencia."

explicacion: |
  Las otras tres quedan para cuando se necesiten en el mapa de temas.
```

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "avanzado"
  tags: ["conicas", "vocabulario"]

enunciado: "¿Por qué la ecuación de la circunferencia usa (x−h)² + (y−k)² en vez de la raíz cuadrada de esa suma?"
tipo: mc
opciones_explicitas:
  - "Porque se elevaron ambos lados al cuadrado para eliminar la raíz de la fórmula de distancia"
  - "Porque las raíces cuadradas no existen en geometría analítica"
  - "Es sólo una convención sin motivo matemático"
respuesta: "Porque se elevaron ambos lados al cuadrado para eliminar la raíz de la fórmula de distancia"

explicacion: |
  Es más simple trabajar con la ecuación sin raíz, comparando cuadrados.
```

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "avanzado"
  tags: ["conicas", "problema"]

variables:
  k: random(1, 5)

respuesta: (13 * k) * (13 * k)
tipo: input
tolerancia_abs: 0

enunciado: "Una circunferencia centrada en el origen pasa por el punto ({5 * k}, {12 * k}). ¿Qué número va del lado derecho de su ecuación x² + y² = ___?"

pasos:
  - "Radio: √(({5 * k})² + ({12 * k})²) = {13 * k}"
  - "Lado derecho: {13 * k}² = {(13 * k) * (13 * k)}"

explicacion: |
  Primero hay que hallar el radio (la distancia del punto al centro), y
  recién después elevarlo al cuadrado.
```

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "avanzado"
  tags: ["conicas"]

respuesta: verdadero
tipo: vf

enunciado: "Si un punto (x, y) sobre una circunferencia centrada en el origen tiene coordenadas negativas, igual cumple x² + y² = r², porque los cuadrados eliminan el signo."

explicacion: |
  (-3)² da el mismo resultado que 3²: el signo desaparece al elevar al
  cuadrado.
```

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve escribir una circunferencia como ecuación algebraica?"
tipo: mc
opciones_explicitas:
  - "Para verificar con números si un punto está dentro, sobre o fuera de un área circular, sin necesidad de medir sobre un dibujo"
  - "Sólo sirve para calcular el área del círculo"
  - "Sólo aplica a circunferencias centradas en el origen"
respuesta: "Para verificar con números si un punto está dentro, sobre o fuera de un área circular, sin necesidad de medir sobre un dibujo"

explicacion: |
  Como el alcance de una señal, una zona de cobertura, o un radar.
```

## Sección: semejanza-y-teorema-de-thales (28 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "semejanza_y_teorema_de_thales"
  nivel: "basico"
  tags: ["semejanza", "vocabulario"]

enunciado: "¿Qué significa que dos triángulos sean semejantes?"
tipo: mc
opciones_explicitas:
  - "Que tienen la misma forma (mismos ángulos y lados proporcionales), aunque no el mismo tamaño"
  - "Que tienen exactamente el mismo tamaño y la misma forma"
  - "Que comparten al menos un lado"
respuesta: "Que tienen la misma forma (mismos ángulos y lados proporcionales), aunque no el mismo tamaño"

explicacion: |
  La semejanza exige la misma forma, no el mismo tamaño: uno puede ser una
  ampliación o reducción del otro.
```

```
metadata:
  materia: "matematicas"
  tema: "semejanza_y_teorema_de_thales"
  nivel: "basico"
  tags: ["semejanza", "vocabulario"]

enunciado: "¿Qué es la \"razón de semejanza\" entre dos triángulos semejantes?"
tipo: mc
opciones_explicitas:
  - "El número fijo por el que hay que multiplicar cada lado de uno para obtener el lado correspondiente del otro"
  - "La suma de los tres lados de un triángulo"
  - "La diferencia entre el ángulo mayor y el ángulo menor"
respuesta: "El número fijo por el que hay que multiplicar cada lado de uno para obtener el lado correspondiente del otro"

explicacion: |
  Es la escala: si la razón es 3, cada lado del primer triángulo mide 3
  veces el lado correspondiente del segundo.
```

```
metadata:
  materia: "matematicas"
  tema: "semejanza_y_teorema_de_thales"
  nivel: "basico"
  tags: ["semejanza", "congruencia", "vocabulario"]

enunciado: "¿Cuál es la diferencia entre semejanza y congruencia?"
tipo: mc
opciones_explicitas:
  - "La congruencia exige misma forma Y mismo tamaño; la semejanza sólo exige misma forma"
  - "Son exactamente lo mismo, con nombres distintos"
  - "La semejanza sólo se aplica a triángulos rectángulos"
respuesta: "La congruencia exige misma forma Y mismo tamaño; la semejanza sólo exige misma forma"

explicacion: |
  Congruencia es un caso particular de semejanza, con razón de semejanza
  igual a 1 (ver `../congruencia-de-triangulos/`).
```

```
metadata:
  materia: "matematicas"
  tema: "semejanza_y_teorema_de_thales"
  nivel: "intermedio"
  tags: ["semejanza", "congruencia"]

respuesta: verdadero
tipo: vf

enunciado: "Toda pareja de triángulos congruentes es también una pareja de triángulos semejantes."

explicacion: |
  Congruentes es semejantes con razón de semejanza 1: mismos ángulos y
  lados proporcionales (con razón 1), que es exactamente lo que pide la
  semejanza.
```

```
metadata:
  materia: "matematicas"
  tema: "semejanza_y_teorema_de_thales"
  nivel: "intermedio"
  tags: ["semejanza", "congruencia"]

respuesta: falso
tipo: vf

enunciado: "Toda pareja de triángulos semejantes es también una pareja de triángulos congruentes."

explicacion: |
  Falso: dos triángulos semejantes pueden tener tamaños distintos (razón
  de semejanza distinta de 1) y seguir sin ser congruentes.
```

```
metadata:
  materia: "matematicas"
  tema: "semejanza_y_teorema_de_thales"
  nivel: "intermedio"
  tags: ["semejanza", "criterios", "vocabulario"]

enunciado: "¿Qué dice el criterio de semejanza AA (Ángulo-Ángulo)?"
tipo: mc
opciones_explicitas:
  - "Si dos ángulos de un triángulo son iguales a dos ángulos de otro, los triángulos son semejantes"
  - "Si dos lados de un triángulo son iguales a dos lados de otro, los triángulos son semejantes"
  - "Si un ángulo de un triángulo es igual a un ángulo de otro, alcanza para asegurar semejanza"
respuesta: "Si dos ángulos de un triángulo son iguales a dos ángulos de otro, los triángulos son semejantes"

explicacion: |
  Con dos ángulos iguales alcanza — el tercero queda determinado por la
  suma de 180°.
```

```
metadata:
  materia: "matematicas"
  tema: "semejanza_y_teorema_de_thales"
  nivel: "intermedio"
  tags: ["semejanza", "criterios", "triangulos"]

respuesta: verdadero
tipo: vf

enunciado: "En el criterio AA no hace falta verificar el tercer ángulo, porque queda determinado por los otros dos (la suma de los ángulos internos de un triángulo siempre es 180°)."

explicacion: |
  Es la misma propiedad vista en `../triangulos/`: fijados dos ángulos, el
  tercero sale de 180° menos la suma de esos dos.
```

```
metadata:
  materia: "matematicas"
  tema: "semejanza_y_teorema_de_thales"
  nivel: "intermedio"
  tags: ["semejanza", "criterios", "vocabulario"]

enunciado: "¿Qué dice el criterio de semejanza LLL proporcional?"
tipo: mc
opciones_explicitas:
  - "Si los tres lados de un triángulo son proporcionales a los tres lados de otro (misma razón), son semejantes"
  - "Si los tres lados de un triángulo son iguales a los tres lados de otro, son semejantes"
  - "Si un lado de un triángulo es proporcional a un lado de otro, alcanza"
respuesta: "Si los tres lados de un triángulo son proporcionales a los tres lados de otro (misma razón), son semejantes"

explicacion: |
  A diferencia del LLL de congruencia (lados IGUALES), acá alcanza con que
  guarden la misma razón entre sí.
```

```
metadata:
  materia: "matematicas"
  tema: "semejanza_y_teorema_de_thales"
  nivel: "intermedio"
  tags: ["semejanza", "criterios", "vocabulario"]

enunciado: "¿Qué dice el criterio de semejanza LAL proporcional?"
tipo: mc
opciones_explicitas:
  - "Si dos lados de un triángulo son proporcionales a dos lados de otro, y el ángulo comprendido entre ellos es igual en ambos, son semejantes"
  - "Si dos lados de un triángulo son iguales a dos lados de otro, son semejantes sin importar los ángulos"
  - "Si dos ángulos cualquiera son proporcionales, son semejantes"
respuesta: "Si dos lados de un triángulo son proporcionales a dos lados de otro, y el ángulo comprendido entre ellos es igual en ambos, son semejantes"

explicacion: |
  El ángulo comprendido tiene que ser igual (no proporcional) — sólo los
  lados van en razón.
```

```
metadata:
  materia: "matematicas"
  tema: "semejanza_y_teorema_de_thales"
  nivel: "intermedio"
  tags: ["semejanza", "problema"]

variables:
  a: random(4, 12)
  b: random(4, 12)
  c: random(4, 12)
  k: random(2, 4)

restricciones:
  - a != b
  - b != c

respuesta: c * k
tipo: input
tolerancia_abs: 0

enunciado: "El triángulo 1 tiene lados {a} cm, {b} cm y {c} cm. El triángulo 2 es semejante al primero, con razón de semejanza {k}: sus lados correspondientes son {a * k} cm y {b * k} cm. ¿Cuánto mide su tercer lado?"

pasos:
  - "{c} cm × {k} = {c * k} cm"

explicacion: |
  Cada lado del triángulo 2 es {k} veces el lado correspondiente del
  triángulo 1.
```

```
metadata:
  materia: "matematicas"
  tema: "semejanza_y_teorema_de_thales"
  nivel: "intermedio"
  tags: ["semejanza", "problema"]

variables:
  a: random(3, 9)
  k: random(2, 5)

respuesta: k
tipo: input
tolerancia_abs: 0

enunciado: "Un triángulo tiene un lado de {a} cm. Su semejante tiene el lado correspondiente de {a * k} cm. ¿Cuál es la razón de semejanza (del triángulo grande respecto del chico)?"

pasos:
  - "{a * k} cm ÷ {a} cm = {k}"

explicacion: |
  La razón de semejanza es el cociente entre lados correspondientes.
```

```
metadata:
  materia: "matematicas"
  tema: "semejanza_y_teorema_de_thales"
  nivel: "avanzado"
  tags: ["semejanza", "problema"]

variables:
  a: random(3, 10)
  b: random(3, 10)
  a2: random(11, 20)

restricciones:
  - a != b
  - (b * a2) - floor((b * a2) / a) * a == 0

respuesta: (b * a2) / a
tipo: input
tolerancia_abs: 0

enunciado: "Dos triángulos son semejantes. En el primero, dos lados miden {a} cm y {b} cm. En el segundo, el lado correspondiente a los {a} cm mide {a2} cm. ¿Cuánto mide el lado correspondiente a los {b} cm?"

pasos:
  - "{a}/{a2} = {b}/x → x = ({b} × {a2}) ÷ {a} = {(b * a2) / a}"

explicacion: |
  Se plantea la proporción entre lados correspondientes y se despeja con
  producto cruzado, igual que en `../proporcion/`.
```

```
metadata:
  materia: "matematicas"
  tema: "semejanza_y_teorema_de_thales"
  nivel: "intermedio"
  tags: ["semejanza", "triangulos"]

respuesta: verdadero
tipo: vf

enunciado: "Dos triángulos equiláteros cualquiera siempre son semejantes entre sí (aunque tengan tamaños distintos)."

explicacion: |
  Todo triángulo equilátero tiene sus tres ángulos de 60°: dos ángulos
  iguales (en realidad los tres) alcanzan para AA.
```

```
metadata:
  materia: "matematicas"
  tema: "semejanza_y_teorema_de_thales"
  nivel: "avanzado"
  tags: ["semejanza", "triangulos"]

respuesta: falso
tipo: vf

enunciado: "Dos triángulos isósceles cualquiera siempre son semejantes entre sí."

explicacion: |
  Falso: \"isósceles\" sólo dice que dos lados son iguales, pero no fija los
  ángulos — un isósceles muy achatado y uno muy alto pueden tener ángulos
  bien distintos, así que no cumplen AA.
```

```
metadata:
  materia: "matematicas"
  tema: "semejanza_y_teorema_de_thales"
  nivel: "intermedio"
  tags: ["thales", "vocabulario"]

enunciado: "¿Qué dice el Teorema de Thales?"
tipo: mc
opciones_explicitas:
  - "Si dos o más rectas paralelas cortan a dos rectas transversales, los segmentos que determinan sobre una transversal son proporcionales a los correspondientes de la otra"
  - "La suma de los ángulos internos de un triángulo es 180°"
  - "Todo triángulo rectángulo cumple que el cuadrado de la hipotenusa es la suma de los cuadrados de los catetos"
respuesta: "Si dos o más rectas paralelas cortan a dos rectas transversales, los segmentos que determinan sobre una transversal son proporcionales a los correspondientes de la otra"

explicacion: |
  Es un teorema sobre proporcionalidad de segmentos generados por
  paralelas, no sobre ángulos internos ni sobre triángulos rectángulos
  (eso es Pitágoras, un módulo aparte).
```

```
metadata:
  materia: "matematicas"
  tema: "semejanza_y_teorema_de_thales"
  nivel: "avanzado"
  tags: ["thales", "problema"]

variables:
  p: random(2, 8)
  q: random(2, 8)
  r: random(2, 12)

restricciones:
  - (r * q) - floor((r * q) / p) * p == 0

respuesta: (r * q) / p
tipo: input
tolerancia_abs: 0

enunciado: "Tres rectas paralelas cortan a dos transversales. Sobre la primera transversal, los segmentos miden {p} cm y {q} cm. Sobre la segunda, el segmento correspondiente a los {p} cm mide {r} cm. ¿Cuánto mide el segmento correspondiente a los {q} cm?"

pasos:
  - "{p}/{r} = {q}/x → x = ({q} × {r}) ÷ {p} = {(r * q) / p}"

explicacion: |
  Las paralelas hacen que los segmentos de una transversal sean
  proporcionales a los correspondientes de la otra.
```

```
metadata:
  materia: "matematicas"
  tema: "semejanza_y_teorema_de_thales"
  nivel: "intermedio"
  tags: ["thales", "vocabulario"]

enunciado: "Si se traza una recta paralela a un lado de un triángulo, cortando a los otros dos lados, ¿qué pasa?"
tipo: mc
opciones_explicitas:
  - "Divide a esos dos lados en segmentos proporcionales, y el triángulo chico que se forma es semejante al original"
  - "Divide a esos dos lados en segmentos iguales, sin importar dónde se trace la paralela"
  - "No tiene ningún efecto sobre las proporciones de los lados"
respuesta: "Divide a esos dos lados en segmentos proporcionales, y el triángulo chico que se forma es semejante al original"

explicacion: |
  Es el corolario de Thales aplicado al triángulo: la paralela genera un
  triángulo más chico, semejante al grande.
```

```
metadata:
  materia: "matematicas"
  tema: "semejanza_y_teorema_de_thales"
  nivel: "intermedio"
  tags: ["thales", "semejanza"]

respuesta: verdadero
tipo: vf

enunciado: "El triángulo chico que se forma al trazar una paralela a un lado de un triángulo es semejante al triángulo original completo."

explicacion: |
  Comparten el ángulo del vértice, y la paralela genera un ángulo
  correspondiente igual al que ya existía en el otro vértice — dos
  ángulos iguales alcanzan para AA.
```

```
metadata:
  materia: "matematicas"
  tema: "semejanza_y_teorema_de_thales"
  nivel: "avanzado"
  tags: ["thales", "problema"]

variables:
  lado1: random(6, 16)
  segmento1: random(2, lado1 - 2)
  lado2: random(6, 16)

restricciones:
  - (lado2 * segmento1) - floor((lado2 * segmento1) / lado1) * lado1 == 0

respuesta: (lado2 * segmento1) / lado1
tipo: input
tolerancia_abs: 0

enunciado: "En un triángulo, un lado mide {lado1} cm y otro mide {lado2} cm. Una paralela al tercer lado corta al primero a {segmento1} cm de un vértice. ¿A qué distancia de ese mismo vértice corta al segundo lado?"

pasos:
  - "{segmento1}/{lado1} = x/{lado2} → x = ({segmento1} × {lado2}) ÷ {lado1} = {(lado2 * segmento1) / lado1}"

explicacion: |
  Los segmentos que corta la paralela en cada lado guardan la misma razón
  que los lados completos.
```

```
metadata:
  materia: "matematicas"
  tema: "semejanza_y_teorema_de_thales"
  nivel: "avanzado"
  tags: ["thales", "semejanza"]

enunciado: "¿Por qué el triángulo chico formado por la paralela es semejante al triángulo grande?"
tipo: mc
opciones_explicitas:
  - "Porque comparten el ángulo del vértice y la paralela genera un ángulo correspondiente igual al otro vértice: se cumple AA"
  - "Porque sus tres lados miden siempre lo mismo"
  - "Porque toda paralela genera automáticamente un triángulo congruente, no sólo semejante"
respuesta: "Porque comparten el ángulo del vértice y la paralela genera un ángulo correspondiente igual al otro vértice: se cumple AA"

explicacion: |
  Dos ángulos iguales entre el triángulo chico y el grande alcanzan para
  aplicar el criterio AA.
```

```
metadata:
  materia: "matematicas"
  tema: "semejanza_y_teorema_de_thales"
  nivel: "intermedio"
  tags: ["semejanza", "criterios", "completar"]

enunciado: "Completar: para que dos triángulos sean semejantes por el criterio AA, alcanza con que tengan ___ ángulos correspondientes iguales."
tipo: completar
respuestas_validas:
  - "dos"
  - "2"

explicacion: |
  Con dos ángulos iguales, el tercero queda determinado por la suma de
  180°.
```

```
metadata:
  materia: "matematicas"
  tema: "semejanza_y_teorema_de_thales"
  nivel: "intermedio"
  tags: ["thales", "completar"]

enunciado: "Completar: cuando rectas paralelas cortan a dos transversales, los segmentos que determinan sobre las transversales son ___."
tipo: completar
respuestas_validas:
  - "proporcionales"

explicacion: |
  Esa es la idea central del Teorema de Thales: proporcionalidad de
  segmentos, no igualdad.
```

```
metadata:
  materia: "matematicas"
  tema: "semejanza_y_teorema_de_thales"
  nivel: "avanzado"
  tags: ["thales", "aplicacion", "ordenar"]

enunciado: "Ordenar los pasos para calcular la altura de un poste midiendo sombras (con un bastón de altura conocida, al mismo momento del día)."
tipo: ordenar
opciones_explicitas:
  - "Despejar la altura del poste con producto cruzado"
  - "Medir la altura del bastón y la longitud de su sombra"
  - "Plantear la proporción: altura del bastón / sombra del bastón = altura del poste / sombra del poste"
  - "Medir la longitud de la sombra del poste (misma hora, mismo sol)"
respuesta_orden:
  - "Medir la altura del bastón y la longitud de su sombra"
  - "Medir la longitud de la sombra del poste (misma hora, mismo sol)"
  - "Plantear la proporción: altura del bastón / sombra del bastón = altura del poste / sombra del poste"
  - "Despejar la altura del poste con producto cruzado"

explicacion: |
  El bastón y el poste, con sus sombras, forman dos triángulos semejantes
  (mismo ángulo del sol): las alturas y las sombras guardan la misma
  razón.
```

```
metadata:
  materia: "matematicas"
  tema: "semejanza_y_teorema_de_thales"
  nivel: "avanzado"
  tags: ["thales", "aplicacion", "problema"]

variables:
  altura_baston: random(1, 3)
  sombra_baston: random(1, 4)
  sombra_poste: random(5, 20)

restricciones:
  - (altura_baston * sombra_poste) - floor((altura_baston * sombra_poste) / sombra_baston) * sombra_baston == 0

respuesta: (altura_baston * sombra_poste) / sombra_baston
tipo: input
tolerancia_abs: 0

enunciado: "Un bastón de {altura_baston} m proyecta una sombra de {sombra_baston} m. En ese mismo momento, un poste proyecta una sombra de {sombra_poste} m. ¿Cuánto mide el poste?"

pasos:
  - "{altura_baston}/{sombra_baston} = x/{sombra_poste} → x = ({altura_baston} × {sombra_poste}) ÷ {sombra_baston} = {(altura_baston * sombra_poste) / sombra_baston}"

explicacion: |
  El bastón y el poste forman triángulos semejantes con sus sombras: la
  razón altura/sombra es la misma para los dos.
```

```
metadata:
  materia: "matematicas"
  tema: "semejanza_y_teorema_de_thales"
  nivel: "intermedio"
  tags: ["semejanza", "aplicacion", "problema"]

variables:
  escala: uno_de([100, 500, 1000, 10000])
  medida_mapa: random(2, 15)

respuesta: medida_mapa * escala
tipo: input
tolerancia_abs: 0

enunciado: "En un mapa a escala 1:{escala}, una distancia entre dos ciudades mide {medida_mapa} cm. ¿Cuántos cm mide esa distancia en la realidad?"

pasos:
  - "{medida_mapa} cm × {escala} = {medida_mapa * escala} cm"

explicacion: |
  La escala de un mapa es una razón de semejanza entre el dibujo y la
  realidad.
```

```
metadata:
  materia: "matematicas"
  tema: "semejanza_y_teorema_de_thales"
  nivel: "intermedio"
  tags: ["semejanza", "problema"]

variables:
  a: random(3, 10)
  b: random(3, 10)
  c: random(3, 10)
  k: random(2, 5)

respuesta: (a + b + c) * k
tipo: input
tolerancia_abs: 0

enunciado: "Un triángulo tiene lados {a} cm, {b} cm y {c} cm (perímetro {a + b + c} cm). Su semejante tiene razón de semejanza {k}. ¿Cuál es el perímetro del triángulo semejante?"

pasos:
  - "({a} + {b} + {c}) cm × {k} = {(a + b + c) * k} cm"

explicacion: |
  El perímetro es una suma de longitudes: escala igual que los lados, por
  {k}.
```

```
metadata:
  materia: "matematicas"
  tema: "semejanza_y_teorema_de_thales"
  nivel: "avanzado"
  tags: ["semejanza", "problema"]

variables:
  area1: random(4, 30)
  k: random(2, 5)

respuesta: area1 * k^2
tipo: input
tolerancia_abs: 0

enunciado: "Un triángulo tiene área {area1} cm². Su semejante tiene razón de semejanza {k}. ¿Cuál es el área del triángulo semejante?"

pasos:
  - "{area1} cm² × {k}² = {area1} cm² × {k^2} = {area1 * k^2} cm²"

explicacion: |
  El área escala por el cuadrado de la razón de semejanza, porque es un
  producto de dos longitudes (no una suma, como el perímetro).
```

```
metadata:
  materia: "matematicas"
  tema: "semejanza_y_teorema_de_thales"
  nivel: "basico"
  tags: ["semejanza", "thales", "cierre"]

enunciado: "¿Cuál de estas es una aplicación real de la semejanza y el Teorema de Thales?"
tipo: mc
opciones_explicitas:
  - "Calcular la altura de un poste sin medirlo directamente, usando sombras"
  - "Sumar los ángulos internos de un triángulo"
  - "Calcular el área de un círculo"
respuesta: "Calcular la altura de un poste sin medirlo directamente, usando sombras"

explicacion: |
  Semejanza y Thales permiten medir indirectamente (alturas, distancias en
  mapas) usando proporciones entre triángulos, en vez de medir todo a
  mano.
```

## Sección: series-geometricas (26 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "basico"
  tags: ["series_geometricas", "vocabulario"]

enunciado: "¿Qué es una sucesión geométrica?"
tipo: mc
opciones_explicitas:
  - "Una lista de números donde siempre se multiplica por la misma razón para pasar al siguiente"
  - "Una lista de números donde siempre se suma la misma cantidad"
  - "Una lista de números al azar"
respuesta: "Una lista de números donde siempre se multiplica por la misma razón para pasar al siguiente"

explicacion: |
  Esa cantidad fija por la que se multiplica se llama razón (r).
```

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "basico"
  tags: ["series_geometricas"]

variables:
  a1: random(1, 10)
  r: random(2, 4)
  n: random(3, 6)

respuesta: a1 * (r ^ (n - 1))
tipo: input
tolerancia_abs: 0

enunciado: "En una sucesión geométrica con a₁ = {a1} y razón r = {r}, ¿cuánto vale a{n}?"

pasos:
  - "aₙ = a₁ × r^(n−1) = {a1} × {r}^{n - 1} = {a1} × {r ^ (n - 1)} = {a1 * (r ^ (n - 1))}"

explicacion: |
  Se aplica la fórmula del término general: multiplicar el primer
  término por la razón elevada a (n−1).
```

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "intermedio"
  tags: ["series_geometricas"]

variables:
  a1: random(1, 5)
  r: 2
  n: random(6, 10)

respuesta: a1 * (r ^ (n - 1))
tipo: input
tolerancia_abs: 0

enunciado: "En una sucesión geométrica con a₁ = {a1} y razón r = {r}, ¿cuánto vale a{n}?"

explicacion: |
  El crecimiento geométrico se nota más cuanto más lejano es el término.
```

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "basico"
  tags: ["series_geometricas"]

variables:
  a1: random(1, 10)
  r: random(2, 6)
  a2: a1 * r

respuesta: r
tipo: input
tolerancia_abs: 0

enunciado: "En una sucesión geométrica, dos términos consecutivos son {a1} y {a2}. ¿Cuál es la razón?"

explicacion: |
  La razón es el término siguiente dividido por el anterior.
```

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "intermedio"
  tags: ["series_geometricas"]

variables:
  a1: random(1, 10)
  r: random(2, 4)
  a2: a1 * r
  a3: a2 * r
  a4: a3 * r

respuesta: verdadero
tipo: vf

enunciado: "¿Es geométrica la sucesión {a1}, {a2}, {a3}, {a4}?"

explicacion: |
  La razón entre cada par de términos consecutivos es siempre {r}.
```

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "intermedio"
  tags: ["series_geometricas"]

variables:
  a1: random(1, 10)
  r: random(2, 4)
  a2: a1 * r
  a3: a2 * r
  a4: a3 * r + 1

respuesta: falso
tipo: vf

enunciado: "¿Es geométrica la sucesión {a1}, {a2}, {a3}, {a4}?"

explicacion: |
  Los primeros pares mantienen razón {r}, pero el último par rompe esa
  proporción: no es geométrica.
```

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "basico"
  tags: ["series_geometricas", "vocabulario"]

enunciado: "¿Cuál es la diferencia entre una sucesión aritmética y una geométrica?"
tipo: mc
opciones_explicitas:
  - "La aritmética suma siempre la misma diferencia; la geométrica multiplica siempre por la misma razón"
  - "No hay ninguna diferencia, son lo mismo"
  - "La geométrica sólo sirve para figuras geométricas"
respuesta: "La aritmética suma siempre la misma diferencia; la geométrica multiplica siempre por la misma razón"

explicacion: |
  Son dos formas distintas de generar el siguiente término.
```

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "intermedio"
  tags: ["series_geometricas"]

variables:
  a1: random(1, 10)
  r: 2
  n: random(3, 8)

respuesta: a1 * ((r ^ n) - 1) / (r - 1)
tipo: input
tolerancia_abs: 0.01

enunciado: "Sumá los primeros {n} términos de una sucesión geométrica con a₁ = {a1} y r = {r}."

pasos:
  - "Sₙ = a₁ × (rⁿ−1) ÷ (r−1) = {a1} × ({r}^{n}−1) ÷ ({r}−1) = {a1 * ((r ^ n) - 1) / (r - 1)}"

explicacion: |
  Se aplica la fórmula de la suma de una serie geométrica finita.
```

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "avanzado"
  tags: ["series_geometricas"]

variables:
  a1: random(1, 5)
  r: 3
  n: random(3, 6)

respuesta: a1 * ((r ^ n) - 1) / (r - 1)
tipo: input
tolerancia_abs: 0.01

enunciado: "Sumá los primeros {n} términos de una sucesión geométrica con a₁ = {a1} y r = {r}."

explicacion: |
  El procedimiento es el mismo con cualquier razón (distinta de 1).
```

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "intermedio"
  tags: ["series_geometricas", "verificacion"]

variables:
  a1: random(1, 10)
  r: 2
  n: random(3, 6)
  correcto: a1 * ((r ^ n) - 1) / (r - 1)
  error: uno_de([0, 0, 0, a1, -a1])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 0.01)
tipo: vf

enunciado: "¿Está bien calculada esta suma? Los primeros {n} términos (a₁={a1}, r={r}) suman {mostrado}."

explicacion: |
  Se vuelve a aplicar la fórmula y se compara.
```

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "intermedio"
  tags: ["series_geometricas"]

variables:
  a1: random(1, 10)
  r: random(2, 4)
  n: random(3, 6)
  correcto: a1 * (r ^ (n - 1))

respuesta: correcto
tipo: mc
opciones_explicitas:
  - correcto
  - a1 * r * n
  - a1 + (r ^ (n - 1))

enunciado: "En una sucesión geométrica con a₁={a1}, r={r}, ¿cuánto vale a{n}?"

explicacion: |
  Las otras opciones confunden multiplicar por r elevado al exponente con
  multiplicar por r y n, o mezclan suma con potencia.
```

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "intermedio"
  tags: ["series_geometricas"]

variables:
  a1: random(1, 10)
  r: random(2, 4)
  a2: a1 * r
  a4: a1 * (r ^ 3)

tipo: completar
enunciado: "Completá el término que falta: {a1}, {a2}, ___, {a4}."
respuestas_validas:
  - a1 * (r ^ 2)

explicacion: |
  El término que falta sigue multiplicando por la misma razón r.
```

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "intermedio"
  tags: ["series_geometricas", "problema"]

variables:
  inicial: random(2, 20)
  horas: random(3, 8)

respuesta: inicial * (2 ^ horas)
tipo: input
tolerancia_abs: 0

enunciado: "Una población de {inicial} bacterias se duplica cada hora. ¿Cuántas bacterias hay después de {horas} horas?"

pasos:
  - "Es una sucesión geométrica con r=2: {inicial} × 2^{horas} = {inicial * (2 ^ horas)}"

explicacion: |
  Duplicarse cada hora es multiplicar por 2 en cada paso: razón
  geométrica r=2.
```

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "avanzado"
  tags: ["series_geometricas", "problema"]

variables:
  capital: random(1000, 5000)
  periodos: random(2, 5)

respuesta: capital * (1.1 ^ periodos)
tipo: input
tolerancia_abs: 0.1

enunciado: "Un capital de ${capital} crece un 10% cada período. ¿Cuánto queda después de {periodos} períodos?"

pasos:
  - "Cada período se multiplica por 1,1: {capital} × 1,1^{periodos} = {capital * (1.1 ^ periodos)}"

explicacion: |
  El interés compuesto es, exactamente, una sucesión geométrica con razón
  (1 + tasa).
```

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "avanzado"
  tags: ["series_geometricas", "problema"]

variables:
  altura_inicial: random(100, 500)
  rebotes: random(2, 4)

respuesta: altura_inicial * (0.5 ^ rebotes)
tipo: input
tolerancia_abs: 0.1

enunciado: "Una pelota cae desde {altura_inicial} cm, y en cada rebote alcanza la mitad de la altura anterior. ¿A qué altura llega en el rebote número {rebotes}?"

pasos:
  - "Razón r=0,5: {altura_inicial} × 0,5^{rebotes} = {altura_inicial * (0.5 ^ rebotes)}"

explicacion: |
  Con razón menor a 1, la sucesión geométrica decrece en vez de crecer.
```

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "avanzado"
  tags: ["series_geometricas"]

variables:
  a1: random(50, 200)
  n: random(2, 4)

respuesta: a1 * (0.5 ^ (n - 1))
tipo: input
tolerancia_abs: 0.1

enunciado: "En una sucesión geométrica con a₁ = {a1} y r = 0,5, ¿cuánto vale a{n}?"

explicacion: |
  La fórmula funciona igual con razones menores a 1: el resultado va
  bajando en vez de subir.
```

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "intermedio"
  tags: ["series_geometricas", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Con el mismo punto de partida, una sucesión geométrica (con razón mayor a 1) termina superando a una aritmética, sin importar cuán grande sea la diferencia de la aritmética."

explicacion: |
  El crecimiento exponencial siempre "gana" al lineal a largo plazo,
  aunque al principio la aritmética pueda ir adelante.
```

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "basico"
  tags: ["series_geometricas", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En una sucesión geométrica, la razón entre cualquier par de términos consecutivos es siempre la misma."

explicacion: |
  Es la propia definición de sucesión geométrica.
```

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "basico"
  tags: ["series_geometricas", "orden"]

tipo: ordenar
enunciado: "Ordená estos términos de una sucesión geométrica (a₁=2, r=3) de menor a mayor."
opciones_explicitas:
  - "54"
  - "2"
  - "18"
  - "6"
respuesta_orden: ["2", "6", "18", "54"]

explicacion: |
  2, 2×3=6, 6×3=18, 18×3=54: con razón mayor a 1, ya están en orden
  creciente por cómo se construyen.
```

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "avanzado"
  tags: ["series_geometricas"]

variables:
  a1: random(1, 10)
  r: random(2, 4)
  n: random(3, 5)
  an: a1 * (r ^ (n - 1))

respuesta: a1
tipo: input
tolerancia_abs: 0

enunciado: "En una sucesión geométrica con r = {r}, el término {n} vale {an} (a{n} = {an}). ¿Cuál es a₁?"

pasos:
  - "a₁ = a{n} ÷ r^(n−1) = {an} ÷ {r}^{n - 1} = {an / (r ^ (n - 1))}"

explicacion: |
  Se despeja a₁ de la fórmula del término general.
```

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "avanzado"
  tags: ["series_geometricas", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Si la razón de una sucesión geométrica está entre -1 y 1 (sin ser 0), la suma de TODOS sus infinitos términos da un resultado finito."

explicacion: |
  Es contraintuitivo, pero pasa porque cada término agregado es cada vez
  más chico: la suma converge a a₁ ÷ (1−r).
```

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "avanzado"
  tags: ["series_geometricas", "casos_especiales"]

variables:
  a1: random(2, 10)
  n: random(2, 5)

respuesta: a1 * ((-2) ^ (n - 1))
tipo: input
tolerancia_abs: 0

enunciado: "En una sucesión geométrica con a₁ = {a1} y r = -2, ¿cuánto vale a{n}?"

explicacion: |
  Con razón negativa, los signos de los términos van alternando entre
  positivo y negativo.
```

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "avanzado"
  tags: ["series_geometricas", "comparacion"]

variables:
  r1: random(2, 5)
  r2: random(2, 5)

restricciones:
  - r1 != r2

respuesta: (r1 > r2)
tipo: vf

enunciado: "Dos sucesiones geométricas empiezan igual (mismo a₁). Una tiene razón {r1} y la otra {r2}. Después de varios términos, ¿la primera va a estar por delante?"

explicacion: |
  A mayor razón (siendo ambas mayores a 1), más rápido crece la
  sucesión.
```

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "intermedio"
  tags: ["series_geometricas", "problema"]

variables:
  inicial: random(2, 15)
  ciclos: random(3, 6)

respuesta: inicial * (3 ^ ciclos)
tipo: input
tolerancia_abs: 0

enunciado: "Un cultivo de {inicial} bacterias se triplica en cada ciclo. ¿Cuántas bacterias hay después de {ciclos} ciclos?"

explicacion: |
  Triplicarse es multiplicar por 3 en cada paso: razón geométrica r=3.
```

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "basico"
  tags: ["series_geometricas", "vocabulario"]

enunciado: "¿Cuál es la fórmula del término general de una sucesión geométrica?"
tipo: mc
opciones_explicitas:
  - "aₙ = a₁ × r^(n−1)"
  - "aₙ = a₁ + (n−1)×r"
  - "aₙ = a₁ × n × r"
respuesta: "aₙ = a₁ × r^(n−1)"

explicacion: |
  La segunda opción es la fórmula de la sucesión ARITMÉTICA, no la
  geométrica.
```

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "basico"
  tags: ["series_geometricas", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Una sucesión geométrica es una lista de números donde cada uno se obtiene multiplicando siempre por la misma razón al anterior."

explicacion: |
  Es la idea central de todo el tema, y el puente hacia el crecimiento
  exponencial que se profundiza en Álgebra.
```
