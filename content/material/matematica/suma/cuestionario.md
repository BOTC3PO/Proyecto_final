# Matemática — Suma (cuestionario, 40 preguntas VBLang)

> Tema: `N2` (Tronco 1 — Numérico), mitad "Suma". Ver `teoria.md` en esta
> misma carpeta.

Mismo formato que los cuestionarios anteriores: plantillas VBLang reales,
`variables:` + `random(...)` en vez de enunciados repetidos, sin
`dataset:`. Los casos "con llevada" fuerzan la llevada con un bloque
`restricciones:` (si el sorteo no la produce, se vuelve a sortear) en vez de
escribir números fijos.

---

### 1 — Suma de 1 cifra, sin llevar

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "basico"
  tags: ["suma", "sin_llevar"]

variables:
  a: random(0, 9)
  b: random(0, 9)

restricciones:
  - (a + b) <= 9

respuesta: a + b
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} + {b}?"

explicacion: |
  Sumar sin llevar es contar hacia adelante desde el primer sumando tantas
  veces como indica el segundo.
```

### 2 — Suma de 1 cifra, en contexto

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "basico"
  tags: ["suma", "sin_llevar", "problema"]

variables:
  a: random(1, 9)
  b: random(1, 9)

restricciones:
  - (a + b) <= 9

respuesta: a + b
tipo: input
tolerancia_abs: 0

enunciado: "Tenés {a} caramelos y te regalan {b} más. ¿Cuántos caramelos tenés ahora?"

explicacion: |
  "Tener y que te den más" es sumar: el total junta lo que ya tenías con lo
  que se agregó.
```

### 3 — Suma de 2 cifras, sin llevar

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "basico"
  tags: ["suma", "sin_llevar"]

variables:
  da: random(1, 8)
  au: random(0, 9)
  db: random(1, 8)
  bu: random(0, 9)
  a: da * 10 + au
  b: db * 10 + bu

restricciones:
  - (au + bu) <= 9
  - (da + db) <= 9

respuesta: a + b
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} + {b}?"

pasos:
  - "Unidades: {au} + {bu} = {au + bu}. Decenas: {da} + {db} = {da + db}."

explicacion: |
  Sin llevar, cada columna (unidades, decenas) se suma por separado y no
  hay que ajustar nada entre ellas.
```

### 4 — Suma de 2 cifras redondas (decenas exactas)

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "basico"
  tags: ["suma", "calculo_mental"]

variables:
  da: random(1, 8)
  db: random(1, 8)
  a: da * 10
  b: db * 10

respuesta: a + b
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} + {b}?"

pasos:
  - "Sumar decenas completas es sumar las decenas y agregar el cero: {da} + {db} = {da + db}, entonces {a} + {b} = {a + b}"

explicacion: |
  Cuando ambos números son "redondos" (terminan en cero), alcanza con sumar
  las cifras significativas y agregar los ceros al final.
```

### 5 — Suma de 2 cifras, con llevada en las unidades

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "intermedio"
  tags: ["suma", "con_llevada"]

variables:
  da: random(1, 8)
  au: random(1, 9)
  db: random(1, 8)
  bu: random(1, 9)
  a: da * 10 + au
  b: db * 10 + bu

restricciones:
  - (au + bu) >= 10

respuesta: a + b
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} + {b}?"

pasos:
  - "Unidades: {au} + {bu} = {au + bu} → se escribe {(au + bu) - 10} y se lleva 1 a las decenas"

explicacion: |
  Cuando la suma de una columna da 10 o más, se escribe sólo la cifra de
  las unidades de ese resultado y se lleva 1 a la columna siguiente.
```

### 6 — Suma de 2 cifras, con llevada en las decenas

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "intermedio"
  tags: ["suma", "con_llevada"]

variables:
  da: random(5, 9)
  au: random(0, 4)
  db: random(5, 9)
  bu: random(0, 4)
  a: da * 10 + au
  b: db * 10 + bu

respuesta: a + b
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} + {b}?"

pasos:
  - "Decenas: {da} + {db} = {da + db} → el resultado pasa a tener 3 cifras"

explicacion: |
  La llevada no es sólo cosa de las unidades: si la columna de las decenas
  también suma 10 o más, se lleva 1 a las centenas.
```

### 7 — Suma de 2 cifras con llevada, en contexto

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "intermedio"
  tags: ["suma", "con_llevada", "problema"]

variables:
  au: random(5, 9)
  da: random(1, 8)
  bu: random(5, 9)
  db: random(1, 8)
  a: da * 10 + au
  b: db * 10 + bu

restricciones:
  - (au + bu) >= 10

respuesta: a + b
tipo: input
tolerancia_abs: 0

enunciado: "En un colectivo suben {a} pasajeros en una parada y {b} en la siguiente. ¿Cuántos pasajeros subieron en total?"

explicacion: |
  El planteo es el mismo que una suma numérica; el contexto sólo dice qué
  representa cada sumando.
```

### 8 — Suma de 3 cifras, con llevada

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "intermedio"
  tags: ["suma", "con_llevada"]

variables:
  ca: random(1, 8)
  da: random(0, 9)
  au: random(1, 9)
  cb: random(1, 8)
  db: random(0, 9)
  bu: random(1, 9)
  a: ca * 100 + da * 10 + au
  b: cb * 100 + db * 10 + bu

restricciones:
  - (au + bu) >= 10

respuesta: a + b
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} + {b}?"

explicacion: |
  Con 3 cifras el procedimiento es el mismo, columna por columna, sólo que
  la llevada puede seguir de las unidades a las decenas y de ahí a las
  centenas.
```

### 9 — Suma de 3 cifras, con doble llevada

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "avanzado"
  tags: ["suma", "con_llevada"]

variables:
  ca: random(1, 8)
  da: random(5, 9)
  au: random(5, 9)
  cb: random(1, 8)
  db: random(5, 9)
  bu: random(5, 9)
  a: ca * 100 + da * 10 + au
  b: cb * 100 + db * 10 + bu

restricciones:
  - (au + bu) >= 10
  - (da + db) >= 9

respuesta: a + b
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} + {b}?"

explicacion: |
  Acá la llevada de las unidades empuja también a las decenas a llevarse:
  hay que arrastrar el 1 de una columna a la otra sin perderlo.
```

### 10 — Suma de 3 cifras, en contexto de dinero

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "intermedio"
  tags: ["suma", "con_llevada", "problema"]

variables:
  a: random(150, 899)
  b: random(150, 899)

respuesta: a + b
tipo: input
tolerancia_abs: 0

enunciado: "Gastaste ${a} en el supermercado y ${b} en la farmacia. ¿Cuánto gastaste en total?"

explicacion: |
  Sumar montos de dinero es sumar los números igual que siempre; el signo
  $ no cambia el procedimiento.
```

### 11 — Sumar tres números

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "intermedio"
  tags: ["suma", "varios_sumandos"]

variables:
  a: random(1, 90)
  b: random(1, 90)
  c: random(1, 90)

respuesta: a + b + c
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} + {b} + {c}?"

pasos:
  - "Se puede sumar de a dos, en cualquier orden: ({a} + {b}) + {c} = {a + b + c}"

explicacion: |
  Sumar tres o más números es sumar de a dos, empezando por cualquier par
  (propiedad asociativa).
```

### 12 — Sumar tres números, conviene agrupar distinto

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "intermedio"
  tags: ["suma", "varios_sumandos", "calculo_mental"]

variables:
  a: random(1, 8) * 10
  b: random(1, 8)
  c: random(1, 8) * 10

respuesta: a + b + c
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} + {b} + {c}?"

pasos:
  - "Conviene sumar primero las dos decenas redondas: {a} + {c} = {a + c}, y después sumar {b}: {a + c} + {b} = {a + b + c}"

explicacion: |
  La propiedad asociativa permite elegir qué par sumar primero: agrupar los
  números "más fáciles" ahorra trabajo mental.
```

### 13 — Sumar tres números de 3 cifras

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "avanzado"
  tags: ["suma", "varios_sumandos"]

variables:
  a: random(100, 400)
  b: random(100, 400)
  c: random(100, 400)

respuesta: a + b + c
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} + {b} + {c}?"

explicacion: |
  Con más cifras el procedimiento no cambia: se suma de a dos hasta usar
  todos los sumandos.
```

### 14 — Propiedad conmutativa

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "basico"
  tags: ["suma", "propiedades"]

variables:
  a: random(1, 90)
  b: random(1, 90)

restricciones:
  - a != b

respuesta: a + b
tipo: mc
opciones_explicitas:
  - b + a
  - a + b + 1
  - a + b - 1

enunciado: "¿Cuál de estas opciones da el mismo resultado que {a} + {b}?"

explicacion: |
  Cambiar el orden de los sumandos no cambia el resultado (propiedad
  conmutativa): {a} + {b} es exactamente lo mismo que {b} + {a}.
```

### 15 — Propiedad conmutativa (verdadero/falso)

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "basico"
  tags: ["suma", "propiedades"]

respuesta: verdadero
tipo: vf

enunciado: "Cambiar el orden de los sumandos no cambia el resultado de una suma."

explicacion: |
  Es la propiedad conmutativa: a + b siempre da lo mismo que b + a.
```

### 16 — Propiedad asociativa

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "intermedio"
  tags: ["suma", "propiedades"]

variables:
  a: random(1, 30)
  b: random(1, 30)
  c: random(1, 30)

respuesta: ((a + b) + c == a + (b + c))
tipo: vf

enunciado: "¿Es cierto que ({a} + {b}) + {c} da lo mismo que {a} + ({b} + {c})?"

explicacion: |
  Es la propiedad asociativa: no importa qué par de sumandos se sume
  primero, el resultado final es siempre el mismo.
```

### 17 — Propiedad asociativa (verdadero/falso, enunciado directo)

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "basico"
  tags: ["suma", "propiedades"]

respuesta: falso
tipo: vf

enunciado: "Agrupar los sumandos de otra manera (por ejemplo, sumar primero el segundo y el tercero en vez del primero y el segundo) cambia el resultado final de la suma."

explicacion: |
  Justamente al revés: agrupar distinto no cambia nada (propiedad
  asociativa); el resultado final es siempre el mismo.
```

### 18 — Elemento neutro

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "basico"
  tags: ["suma", "propiedades"]

variables:
  a: random(1, 999)

respuesta: a
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} + 0?"

explicacion: |
  Sumar 0 no agrega ni quita nada: el resultado es siempre el mismo número
  con el que se empezó.
```

### 19 — Elemento neutro (verdadero/falso)

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "basico"
  tags: ["suma", "propiedades"]

respuesta: verdadero
tipo: vf

enunciado: "Sumarle 0 a cualquier número da como resultado ese mismo número, sin cambiarlo."

explicacion: |
  El 0 es el elemento neutro de la suma: no aporta ni resta nada.
```

### 20 — Nombre del resultado de una suma

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "basico"
  tags: ["suma", "vocabulario"]

enunciado: "En la suma 8 + 5 = 13, ¿cómo se llama el 13?"
tipo: mc
opciones_explicitas:
  - "Total"
  - "Sumando"
  - "Resto"
respuesta: "Total"

explicacion: |
  El resultado de una suma se llama total (o suma); los números que se
  suman son los sumandos.
```

### 21 — Nombre de los términos de una suma

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "basico"
  tags: ["suma", "vocabulario"]

enunciado: "En la suma 8 + 5 = 13, ¿cómo se llaman el 8 y el 5?"
tipo: mc
opciones_explicitas:
  - "Sumandos"
  - "Totales"
  - "Restos"
respuesta: "Sumandos"

explicacion: |
  Los números que se suman se llaman sumandos; el resultado es el total.
```

### 22 — Estimar una suma redondeando a la decena

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "intermedio"
  tags: ["suma", "estimacion"]

variables:
  a: random(11, 988)
  b: random(11, 988)
  ra: redondear(a / 10, 0) * 10
  rb: redondear(b / 10, 0) * 10

respuesta: ra + rb
tipo: input
tolerancia_abs: 0

enunciado: "Redondeá {a} y {b} a la decena más cercana, y sumá esos redondeos. ¿Cuánto da la estimación?"

pasos:
  - "{a} redondea a {ra}. {b} redondea a {rb}. {ra} + {rb} = {ra + rb}"

explicacion: |
  Estimar una suma es redondear cada sumando por separado antes de sumar,
  para tener una idea rápida del resultado sin hacer la cuenta exacta.
```

### 23 — Estimar una suma redondeando a la centena

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "intermedio"
  tags: ["suma", "estimacion"]

variables:
  a: random(101, 9888)
  b: random(101, 9888)
  ra: redondear(a / 100, 0) * 100
  rb: redondear(b / 100, 0) * 100

respuesta: ra + rb
tipo: input
tolerancia_abs: 0

enunciado: "Redondeá {a} y {b} a la centena más cercana, y sumá esos redondeos. ¿Cuánto da la estimación?"

pasos:
  - "{a} redondea a {ra}. {b} redondea a {rb}. {ra} + {rb} = {ra + rb}"

explicacion: |
  Con números más grandes conviene redondear a la centena (en vez de la
  decena) para que la estimación sea más rápida de calcular.
```

### 24 — Sentido de una estimación (verdadero/falso)

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "basico"
  tags: ["suma", "estimacion"]

respuesta: falso
tipo: vf

enunciado: "Una estimación siempre tiene que dar exactamente el mismo número que la cuenta exacta."

explicacion: |
  Una estimación es sólo un valor aproximado, útil para controlar que la
  cuenta exacta no tenga un error grosero — no tiene por qué coincidir al
  dígito con el resultado real.
```

### 25 — Hallar el sumando que falta (números chicos)

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "basico"
  tags: ["suma", "sumando_faltante"]

variables:
  a: random(1, 90)
  x: random(1, 90)
  total: a + x

respuesta: x
tipo: input
tolerancia_abs: 0

enunciado: "¿Qué número hay que sumarle a {a} para obtener {total}?"

pasos:
  - "{total} - {a} = {total - a}"

explicacion: |
  Buscar el sumando que falta es, en realidad, hacer la resta entre el
  total y el sumando conocido.
```

### 26 — Hallar el sumando que falta (números de 3 cifras)

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "intermedio"
  tags: ["suma", "sumando_faltante"]

variables:
  a: random(100, 800)
  x: random(50, 199)
  total: a + x

respuesta: x
tipo: input
tolerancia_abs: 0

enunciado: "¿Qué número hay que sumarle a {a} para obtener {total}?"

explicacion: |
  El procedimiento es el mismo con números más grandes: restar el sumando
  conocido al total.
```

### 27 — Completar el sumando que falta

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "intermedio"
  tags: ["suma", "sumando_faltante"]

variables:
  a: random(1, 90)
  x: random(1, 90)
  total: a + x

tipo: completar
enunciado: "Completá: ___ + {a} = {total}."
respuestas_validas:
  - x

explicacion: |
  El número que falta es el que, sumado a {a}, completa exactamente
  {total}.
```

### 28 — Verificar una suma (números de 1 cifra)

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "basico"
  tags: ["suma", "verificacion"]

variables:
  a: random(1, 9)
  b: random(1, 9)
  correcto: a + b
  error: uno_de([0, 0, 0, 1, -1])
  mostrado: correcto + error

respuesta: (mostrado == correcto)
tipo: vf

enunciado: "¿Está bien resuelta esta suma? {a} + {b} = {mostrado}"

explicacion: |
  Para verificar una suma hay que volver a calcularla y comparar el
  resultado, no alcanza con que el número "parezca" razonable.
```

### 29 — Verificar una suma (números de 2 cifras)

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "intermedio"
  tags: ["suma", "verificacion"]

variables:
  a: random(10, 90)
  b: random(10, 90)
  correcto: a + b
  error: uno_de([0, 0, 0, 1, -1, 10])
  mostrado: correcto + error

respuesta: (mostrado == correcto)
tipo: vf

enunciado: "¿Está bien resuelta esta suma? {a} + {b} = {mostrado}"

explicacion: |
  Un error típico al sumar en columna es olvidarse de la llevada: por eso
  conviene siempre volver a revisar columna por columna.
```

### 30 — Verificar una suma (números de 3 cifras)

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "avanzado"
  tags: ["suma", "verificacion"]

variables:
  a: random(100, 800)
  b: random(100, 800)
  correcto: a + b
  error: uno_de([0, 0, 0, 1, -1, 100])
  mostrado: correcto + error

respuesta: (mostrado == correcto)
tipo: vf

enunciado: "¿Está bien resuelta esta suma? {a} + {b} = {mostrado}"

explicacion: |
  Con más cifras hay más columnas donde puede haber un error: conviene
  verificar de derecha a izquierda, igual que al resolver.
```

### 31 — Problema: total de dos grupos

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "basico"
  tags: ["suma", "problema"]

variables:
  a: random(5, 40)
  b: random(5, 40)

respuesta: a + b
tipo: input
tolerancia_abs: 0

enunciado: "En un salón hay {a} varones y {b} mujeres. ¿Cuántas personas hay en total?"

explicacion: |
  Juntar dos grupos distintos en un solo total es sumar sus cantidades.
```

### 32 — Problema: recorrido en dos tramos

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "intermedio"
  tags: ["suma", "problema"]

variables:
  a: random(100, 500)
  b: random(50, 300)

respuesta: a + b
tipo: input
tolerancia_abs: 0

enunciado: "Un colectivo recorrió {a} metros hasta la primera parada y {b} metros más hasta la segunda. ¿Cuántos metros recorrió en total?"

explicacion: |
  Sumar dos tramos de un recorrido da la distancia total recorrida.
```

### 33 — Cuánto falta para el próximo múltiplo de 10

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "intermedio"
  tags: ["suma", "calculo_mental"]

variables:
  a: random(1, 988)
  cifra_unidades: a - floor(a / 10) * 10
  falta: 10 - cifra_unidades

restricciones:
  - cifra_unidades != 0

respuesta: falta
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto le falta a {a} para llegar al próximo múltiplo de 10?"

pasos:
  - "La cifra de las unidades de {a} es {cifra_unidades}; falta {falta} para completar la decena"

explicacion: |
  Encontrar cuánto falta para "redondear hacia arriba" es una suma
  disfrazada de resta: se busca el número que, sumado, completa el
  múltiplo de 10 más cercano.
```

### 34 — Cuánto falta para el próximo múltiplo de 100

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "intermedio"
  tags: ["suma", "calculo_mental"]

variables:
  a: random(1, 9888)
  resto: a - floor(a / 100) * 100
  falta: 100 - resto

restricciones:
  - resto != 0

respuesta: falta
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto le falta a {a} para llegar al próximo múltiplo de 100?"

explicacion: |
  Mismo razonamiento que con los múltiplos de 10, mirando ahora las dos
  últimas cifras del número.
```

### 35 — Problema: cuánto falta ahorrar

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "intermedio"
  tags: ["suma", "problema"]

variables:
  a: random(100, 900)
  meta: a + random(50, 400)

respuesta: meta - a
tipo: input
tolerancia_abs: 0

enunciado: "Tenés ahorrados ${a} y tu meta es juntar ${meta}. ¿Cuánto te falta ahorrar?"

explicacion: |
  Lo ahorrado más lo que falta tiene que dar exactamente la meta: por eso
  lo que falta es la meta menos lo ya ahorrado.
```

### 36 — Ordenar sumas de menor a mayor resultado

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "basico"
  tags: ["suma", "orden"]

tipo: ordenar
enunciado: "Ordená estas sumas de menor a mayor resultado (sin calcularlas todas de una)."
opciones_explicitas:
  - "6 + 7"
  - "3 + 2"
  - "9 + 9"
  - "5 + 4"
respuesta_orden: ["3 + 2", "5 + 4", "6 + 7", "9 + 9"]

explicacion: |
  3+2=5, 5+4=9, 6+7=13, 9+9=18: hay que resolver cada suma antes de poder
  ordenarlas.
```

### 37 — Completar una suma en columna

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "basico"
  tags: ["suma", "algoritmo_columna"]

variables:
  da: random(1, 8)
  au: random(1, 8)
  db: random(1, 8)
  bu: random(0, 9 - au)
  a: da * 10 + au
  b: db * 10 + bu
  suma: a + b

tipo: completar
enunciado: "Completá el resultado: {a} + {b} = ___."
respuestas_validas:
  - suma

explicacion: |
  Se resuelve la suma en columna, de derecha a izquierda, y se completa
  con el resultado final.
```

### 38 — Cuánto hay que sumar para llegar a un total (contexto de puntaje)

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "basico"
  tags: ["suma", "sumando_faltante", "problema"]

variables:
  a: random(10, 80)
  total: random(90, 150)

restricciones:
  - total > a

respuesta: total - a
tipo: input
tolerancia_abs: 0

enunciado: "Llevás {a} puntos y necesitás llegar a {total} para ganar. ¿Cuántos puntos más tenés que sumar?"

explicacion: |
  Lo que ya tenés más lo que falta tiene que dar el total buscado.
```

### 39 — Suma de tres sumandos redondos

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "basico"
  tags: ["suma", "calculo_mental", "varios_sumandos"]

variables:
  a: random(1, 9) * 100
  b: random(1, 9) * 100
  c: random(1, 9) * 100

respuesta: a + b + c
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} + {b} + {c}?"

pasos:
  - "Al ser todos números redondos, alcanza con sumar las centenas: {a / 100} + {b / 100} + {c / 100} = {a / 100 + b / 100 + c / 100}, y agregar los ceros"

explicacion: |
  Sumar números redondos (que terminan en cero) es más rápido: se suman
  las cifras significativas y se agregan los ceros al final.
```

### 40 — Qué es la suma (verdadero/falso)

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "basico"
  tags: ["suma", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Sumar es juntar dos o más cantidades en una sola."

explicacion: |
  Es la idea central de la suma: combinar cantidades separadas en un único
  total.
```
