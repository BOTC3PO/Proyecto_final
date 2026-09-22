# Examen jefe — [PENDIENTE #612]

> Logro #612. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **154 preguntas totales** en 5/5 secciones.

---

## Sección: suma (40 preguntas)

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

## Sección: principio-multiplicativo-de-conteo (25 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "basico"
  tags: ["conteo", "vocabulario"]

enunciado: "¿Qué establece el principio multiplicativo de conteo?"
tipo: mc
opciones_explicitas:
  - "Si una elección se compone de varios pasos independientes, el total de combinaciones es el producto de las opciones de cada paso"
  - "Para contar combinaciones siempre hay que enumerarlas una por una"
  - "El total de combinaciones es la suma de las opciones de cada paso"
respuesta: "Si una elección se compone de varios pasos independientes, el total de combinaciones es el producto de las opciones de cada paso"

explicacion: |
  Es la herramienta que permite contar sin enumerar.
```

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "basico"
  tags: ["conteo", "completar"]

tipo: completar
enunciado: "Completá: si hay n₁ opciones para el primer paso, n₂ para el segundo y n₃ para el tercero, el total de combinaciones es n₁ × n₂ × ___."
respuestas_validas:
  - "n₃"

explicacion: |
  Se multiplican las opciones de TODOS los pasos, sin importar cuántos
  sean.
```

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "intermedio"
  tags: ["conteo", "problema"]

variables:
  entradas: random(2, 5)
  platos: random(3, 6)
  postres: random(2, 4)

respuesta: entradas * platos * postres
tipo: input

enunciado: "Un restaurante ofrece {entradas} entradas, {platos} platos principales y {postres} postres. ¿Cuántos menús distintos (una entrada, un plato y un postre) se pueden armar?"

pasos:
  - "Total = {entradas} × {platos} × {postres} = {entradas * platos * postres}"

explicacion: |
  Cada elección es independiente de las otras dos.
```

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "avanzado"
  tags: ["conteo", "problema"]

variables:
  digitos: uno_de([3, 4, 5])

respuesta: 10 ^ digitos
tipo: input

enunciado: "Una clave numérica tiene {digitos} dígitos, cada uno del 0 al 9, y se pueden repetir dígitos. ¿Cuántas claves distintas son posibles?"

pasos:
  - "Cada dígito tiene 10 opciones posibles, independientes entre sí: 10^{digitos} = {10 ^ digitos}"

explicacion: |
  Es el mismo dígito repetido {digitos} veces en la multiplicación,
  porque cada posición tiene las mismas 10 opciones.
```

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "intermedio"
  tags: ["conteo", "problema"]

variables:
  camisas: random(3, 8)
  pantalones: random(2, 6)
  zapatos: random(2, 5)

respuesta: camisas * pantalones * zapatos
tipo: input

enunciado: "Alguien tiene {camisas} camisas, {pantalones} pantalones y {zapatos} pares de zapatos. ¿Cuántos outfits distintos (una camisa, un pantalón, un par de zapatos) puede armar?"

pasos:
  - "Total = {camisas} × {pantalones} × {zapatos} = {camisas * pantalones * zapatos}"

explicacion: |
  Cada prenda se elige de forma independiente de las otras.
```

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "avanzado"
  tags: ["conteo", "problema"]

variables:
  letras: uno_de([2, 3])
  numeros: uno_de([3, 4])

respuesta: 26 ^ letras * 10 ^ numeros
tipo: input

enunciado: "Una patente tiene {letras} letras (de un alfabeto de 26, con repetición permitida) seguidas de {numeros} números (0-9, con repetición permitida). ¿Cuántas patentes distintas son posibles?"

pasos:
  - "Letras: 26^{letras} = {26 ^ letras}"
  - "Números: 10^{numeros} = {10 ^ numeros}"
  - "Total = {26 ^ letras} × {10 ^ numeros} = {26 ^ letras * 10 ^ numeros}"

explicacion: |
  Se multiplican las combinaciones de las letras por las de los
  números, porque son dos bloques independientes.
```

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "intermedio"
  tags: ["conteo"]

respuesta: verdadero
tipo: vf

enunciado: "El principio multiplicativo, en su forma simple (multiplicar directo), funciona cuando cada paso es independiente: la cantidad de opciones de un paso no depende de lo que se elija en los otros."

explicacion: |
  Si un paso cambiara según la elección anterior de forma más
  compleja que simplemente 'un elemento menos disponible', haría
  falta un análisis más cuidadoso.
```

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "avanzado"
  tags: ["conteo"]

enunciado: "Si la cantidad de opciones de un paso cambiara de forma impredecible según lo elegido en un paso anterior, ¿qué pasaría con la multiplicación directa?"
tipo: mc
opciones_explicitas:
  - "Ya no alcanzaría con multiplicar directo — habría que analizar los casos por separado"
  - "No cambiaría nada, la multiplicación siempre funciona igual"
  - "El resultado sería siempre cero"
respuesta: "Ya no alcanzaría con multiplicar directo — habría que analizar los casos por separado"

explicacion: |
  La forma simple del principio presupone independencia entre los
  pasos.
```

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "intermedio"
  tags: ["conteo", "problema"]

variables:
  lanzamientos: uno_de([3, 4, 5, 6])

respuesta: 2 ^ lanzamientos
tipo: input

enunciado: "Se lanza una moneda {lanzamientos} veces seguidas (cara o ceca cada vez). ¿Cuántas secuencias distintas de resultados son posibles?"

pasos:
  - "Cada lanzamiento tiene 2 resultados posibles, independientes: 2^{lanzamientos} = {2 ^ lanzamientos}"

explicacion: |
  Cada lanzamiento no depende de los anteriores.
```

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "intermedio"
  tags: ["conteo", "problema"]

variables:
  lanzamientos: uno_de([2, 3, 4])

respuesta: 6 ^ lanzamientos
tipo: input

enunciado: "Se lanza un dado de 6 caras {lanzamientos} veces seguidas. ¿Cuántas secuencias distintas de resultados son posibles?"

pasos:
  - "Cada lanzamiento tiene 6 resultados posibles: 6^{lanzamientos} = {6 ^ lanzamientos}"

explicacion: |
  Igual que con la moneda, pero con 6 opciones en vez de 2.
```

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "avanzado"
  tags: ["conteo", "ordenar"]

enunciado: "Ordená los pasos para aplicar el principio multiplicativo a un problema de conteo."
tipo: ordenar
opciones_explicitas:
  - "Multiplicar todas esas cantidades entre sí"
  - "Identificar en cuántos pasos independientes se divide la elección completa"
  - "Contar cuántas opciones hay disponibles en cada paso, por separado"
respuesta_orden: ["Identificar en cuántos pasos independientes se divide la elección completa", "Contar cuántas opciones hay disponibles en cada paso, por separado", "Multiplicar todas esas cantidades entre sí"]
explicacion: |
  Sin identificar primero los pasos, no hay qué contar ni qué
  multiplicar.
```

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "avanzado"
  tags: ["conteo", "problema"]

variables:
  a: random(2, 4)
  b: random(2, 4)
  c: random(2, 4)
  d: random(2, 4)

respuesta: a * b * c * d
tipo: input

enunciado: "Para armar un producto hay {a} opciones de color, {b} de tamaño, {c} de material y {d} de acabado. ¿Cuántas combinaciones distintas de producto son posibles?"

pasos:
  - "Total = {a} × {b} × {c} × {d} = {a * b * c * d}"

explicacion: |
  El principio se extiende a cualquier cantidad de pasos, no sólo dos
  o tres.
```

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "basico"
  tags: ["conteo"]

respuesta: verdadero
tipo: vf

enunciado: "Multiplicar las opciones de cada paso da exactamente el mismo resultado que enumerar todas las combinaciones una por una — sólo que mucho más rápido, sobre todo con números grandes."

explicacion: |
  Para pocas opciones se puede verificar enumerando; para miles o
  millones, multiplicar es la única forma práctica.
```

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "basico"
  tags: ["conteo", "aplicacion"]

enunciado: "¿Por qué una clave numérica de 6 dígitos (con repetición) es más difícil de adivinar al azar que una de 4 dígitos?"
tipo: mc
opciones_explicitas:
  - "Porque tiene 10⁶ = 1.000.000 de combinaciones posibles, muchas más que las 10⁴ = 10.000 de la de 4 dígitos"
  - "Porque los números de 6 cifras son, en general, más grandes"
  - "No hay ninguna diferencia real en la dificultad"
respuesta: "Porque tiene 10⁶ = 1.000.000 de combinaciones posibles, muchas más que las 10⁴ = 10.000 de la de 4 dígitos"

explicacion: |
  Cada dígito extra multiplica por 10 la cantidad de combinaciones
  posibles.
```

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "intermedio"
  tags: ["conteo", "problema"]

variables:
  lista1: random(4, 10)
  lista2: random(4, 10)

respuesta: lista1 * lista2
tipo: input

enunciado: "Hay {lista1} colores de pintura y {lista2} tipos de acabado (mate, satinado, etc.). ¿Cuántas combinaciones distintas de color y acabado se pueden elegir?"

pasos:
  - "Total = {lista1} × {lista2} = {lista1 * lista2}"

explicacion: |
  Dos pasos independientes, dos factores en la multiplicación.
```

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "avanzado"
  tags: ["conteo"]

respuesta: verdadero
tipo: vf

enunciado: "Si en cada paso se permite repetir elementos ya usados en pasos anteriores (por ejemplo, el mismo dígito varias veces en una clave), la fórmula sigue siendo un producto simple de las opciones de cada paso."

explicacion: |
  La independencia entre pasos no se rompe por permitir repetición —
  al contrario, permitir repetición es lo que MANTIENE la cantidad de
  opciones igual en cada paso.
```

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "intermedio"
  tags: ["conteo", "completar"]

tipo: completar
enunciado: "Completá: permutaciones, variaciones y combinaciones son, en el fondo, aplicaciones del principio ___ con distintas restricciones sobre el orden y la repetición."
respuestas_validas:
  - "multiplicativo"

explicacion: |
  Cada uno de esos tres módulos agrega una restricción distinta sobre
  el mismo principio de base.
```

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "avanzado"
  tags: ["conteo"]

enunciado: "¿En qué se diferencia el principio multiplicativo general de una permutación (ordenar TODOS los elementos de un conjunto)?"
tipo: mc
opciones_explicitas:
  - "El principio multiplicativo es la herramienta general; la permutación es un caso particular donde, en cada paso, hay una opción menos disponible porque no se puede repetir ningún elemento"
  - "No hay ninguna diferencia entre ambos conceptos"
  - "La permutación no usa ninguna multiplicación"
respuesta: "El principio multiplicativo es la herramienta general; la permutación es un caso particular donde, en cada paso, hay una opción menos disponible porque no se puede repetir ningún elemento"

explicacion: |
  Es el puente directo hacia `../permutaciones/`.
```

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "avanzado"
  tags: ["conteo", "problema"]

respuesta: 10 * 9 * 8
tipo: input

enunciado: "Una clave tiene 3 dígitos (0 al 9), y NINGÚN dígito se puede repetir. ¿Cuántas claves distintas son posibles?"

pasos:
  - "Primer dígito: 10 opciones"
  - "Segundo dígito: 9 opciones (ya se usó una)"
  - "Tercer dígito: 8 opciones (ya se usaron dos)"
  - "Total = 10 × 9 × 8 = {10 * 9 * 8}"

explicacion: |
  Cada paso sigue siendo independiente en el sentido de que la
  CANTIDAD de opciones disponibles es predecible, aunque vaya
  bajando — es el mismo principio, con una opción menos en cada paso.
```

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "intermedio"
  tags: ["conteo", "problema"]

variables:
  a: random(2, 3)
  b: random(2, 3)
  c: random(2, 3)
  d: random(2, 3)
  e: random(2, 3)

respuesta: a * b * c * d * e
tipo: input

enunciado: "Un sistema de contraseñas usa 5 categorías de símbolos con {a}, {b}, {c}, {d} y {e} opciones respectivamente, una de cada categoría. ¿Cuántas contraseñas distintas son posibles?"

pasos:
  - "Total = {a} × {b} × {c} × {d} × {e} = {a * b * c * d * e}"

explicacion: |
  El principio no tiene límite en la cantidad de pasos que puede
  combinar.
```

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "basico"
  tags: ["conteo", "aplicacion"]

enunciado: "Si hay 4 materias posibles para la primera hora y 5 para la segunda hora (sin repetir materia), ¿cómo se calcula la cantidad de combinaciones posibles para esas dos horas?"
tipo: mc
opciones_explicitas:
  - "Multiplicando 4 × 5"
  - "Sumando 4 + 5"
  - "Dividiendo 5 ÷ 4"
respuesta: "Multiplicando 4 × 5"

explicacion: |
  Dos decisiones independientes (una por cada hora) se multiplican,
  no se suman.
```

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "intermedio"
  tags: ["conteo", "aplicacion"]

enunciado: "En una final a 3 partidos independientes (cada uno con 2 resultados posibles: gana el equipo A o gana el equipo B), ¿cuántas secuencias distintas de resultados de los 3 partidos son posibles?"
tipo: mc
opciones_explicitas:
  - "2³ = 8"
  - "2 × 3 = 6"
  - "3² = 9"
respuesta: "2³ = 8"

explicacion: |
  Cada partido tiene 2 resultados posibles, y hay 3 partidos
  independientes: 2×2×2 = 8.
```

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "basico"
  tags: ["conteo"]

respuesta: verdadero
tipo: vf

enunciado: "En el principio multiplicativo, no importa en qué orden se multipliquen las cantidades de cada paso — el resultado final es el mismo."

explicacion: |
  La multiplicación es conmutativa: 3×4×2 da lo mismo que 2×3×4.
```

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "intermedio"
  tags: ["conteo", "problema"]

variables:
  tapas: random(2, 4)
  rellenos: random(3, 6)
  coberturas: random(2, 5)

respuesta: tapas * rellenos * coberturas
tipo: input

enunciado: "Una pastelería ofrece {tapas} tipos de masa, {rellenos} tipos de relleno y {coberturas} tipos de cobertura. ¿Cuántas tortas distintas (una masa, un relleno, una cobertura) se pueden armar?"

pasos:
  - "Total = {tapas} × {rellenos} × {coberturas} = {tapas * rellenos * coberturas}"

explicacion: |
  Es el mismo patrón del menú de la pregunta 3, con otro contexto.
```

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve el principio multiplicativo de conteo?"
tipo: mc
opciones_explicitas:
  - "Para calcular cuántas combinaciones posibles hay en una elección de varios pasos, sin tener que enumerarlas una por una"
  - "Sólo sirve para contar objetos físicos, uno por uno"
  - "Sólo aplica cuando hay exactamente dos pasos"
respuesta: "Para calcular cuántas combinaciones posibles hay en una elección de varios pasos, sin tener que enumerarlas una por una"

explicacion: |
  Es la base directa de permutaciones, variaciones y combinaciones —
  los tres módulos que siguen.
```

## Sección: multiplicacion (40 preguntas)

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

## Sección: combinaciones (25 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "basico"
  tags: ["combinaciones", "vocabulario"]

enunciado: "¿Qué es una combinación de k elementos elegidos de un conjunto de n elementos (k ≤ n)?"
tipo: mc
opciones_explicitas:
  - "Cada forma distinta de elegir k elementos, sin repetir ninguno, donde el ORDEN NO importa"
  - "Cada forma distinta de elegir Y ordenar k elementos"
  - "Cada forma de ordenar TODOS los n elementos"
respuesta: "Cada forma distinta de elegir k elementos, sin repetir ninguno, donde el ORDEN NO importa"

explicacion: |
  Elegir A y B es lo mismo que elegir B y A — es la misma combinación.
```

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "intermedio"
  tags: ["combinaciones", "completar"]

tipo: completar
enunciado: "Completá: C(n, k) = n! / (___ × (n−k)!)."
respuestas_validas:
  - "k!"

explicacion: |
  Se divide por k! para no contar cada combinación una vez por cada
  orden posible de sus elementos.
```

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "avanzado"
  tags: ["combinaciones", "problema"]

variables:
  n: uno_de([6, 7, 8, 9, 10])
  k: uno_de([2, 3])

respuesta: combinations(n, k)
tipo: input

enunciado: "¿Cuántas combinaciones de {k} elementos se pueden formar a partir de un conjunto de {n} elementos?"

pasos:
  - "C({n}, {k}) = {n}! / ({k}! × ({n}−{k})!) = {combinations(n, k)}"

explicacion: |
  Se divide la variación correspondiente por las formas de ordenar los
  {k} elementos elegidos.
```

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "intermedio"
  tags: ["combinaciones"]

respuesta: verdadero
tipo: vf

enunciado: "En una combinación, elegir A y luego B es exactamente lo mismo que elegir B y luego A — cuentan como UNA sola combinación."

explicacion: |
  Es la diferencia clave con las variaciones, donde sí se
  distinguen.
```

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "intermedio"
  tags: ["combinaciones"]

respuesta: falso
tipo: vf

enunciado: "En una combinación (en el sentido clásico de este módulo), se permite elegir el mismo elemento más de una vez."

explicacion: |
  Es falso: cada elemento se elige como máximo una vez, igual que en
  variaciones y permutaciones.
```

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "avanzado"
  tags: ["combinaciones", "problema"]

variables:
  candidatos: uno_de([8, 9, 10, 12])
  comite: uno_de([2, 3])

respuesta: combinations(candidatos, comite)
tipo: input

enunciado: "Entre {candidatos} candidatos, se va a formar un comité de {comite} personas, sin roles distintos (no importa el orden en que se elijan). ¿Cuántos comités distintos son posibles?"

pasos:
  - "C({candidatos}, {comite}) = {combinations(candidatos, comite)}"

explicacion: |
  A diferencia de elegir presidente y vicepresidente (variación), acá
  ningún miembro del comité tiene un rol distinto de los demás.
```

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "avanzado"
  tags: ["combinaciones", "problema"]

variables:
  mazo: uno_de([10, 12, 15])
  mano: uno_de([2, 3])

respuesta: combinations(mazo, mano)
tipo: input

enunciado: "De un mazo de {mazo} cartas distintas, ¿de cuántas formas se pueden elegir {mano} cartas (sin importar el orden en que se las reciba)?"

pasos:
  - "C({mazo}, {mano}) = {combinations(mazo, mano)}"

explicacion: |
  Una mano de cartas es el ejemplo clásico de combinación: no importa
  en qué orden llegaron a la mano.
```

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "avanzado"
  tags: ["combinaciones"]

respuesta: verdadero
tipo: vf

enunciado: "C(n, k) es siempre igual a C(n, n−k) — elegir k para incluir es lo mismo que elegir n−k para dejar afuera."

explicacion: |
  Son la misma partición del conjunto en dos partes, mirada desde
  cualquiera de los dos lados.
```

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "avanzado"
  tags: ["combinaciones", "problema"]

variables:
  n: uno_de([8, 9, 10])
  k: uno_de([2, 3])

respuesta: combinations(n, n - k)
tipo: input

enunciado: "Si C({n}, {k}) = {combinations(n, k)}, ¿cuánto es C({n}, {n}−{k})?"

pasos:
  - "Por la propiedad simétrica, C({n}, {n}−{k}) = C({n}, {k}) = {combinations(n, n - k)}"

explicacion: |
  Elegir {k} para incluir de un total de {n} es lo mismo que elegir
  {n}−{k} para dejar afuera.
```

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "avanzado"
  tags: ["combinaciones", "ordenar"]

enunciado: "Ordená los pasos para calcular C(n, k) a partir de la variación correspondiente."
tipo: ordenar
opciones_explicitas:
  - "Dividir esa variación por k! (las formas de ordenar los k elementos elegidos)"
  - "Calcular la variación V(n, k) = n! / (n−k)!"
  - "El resultado de esa división es C(n, k)"
respuesta_orden: ["Calcular la variación V(n, k) = n! / (n−k)!", "Dividir esa variación por k! (las formas de ordenar los k elementos elegidos)", "El resultado de esa división es C(n, k)"]
explicacion: |
  La combinación se obtiene corrigiendo la variación por el
  sobre-conteo de los distintos órdenes.
```

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "avanzado"
  tags: ["combinaciones", "variaciones", "problema"]

variables:
  n: uno_de([7, 8, 9])
  k: uno_de([2, 3])

respuesta: combinations(n, k) * factorial(k)
tipo: input

enunciado: "Si C({n}, {k}) = {combinations(n, k)}, ¿cuánto vale la variación V({n}, {k}) (multiplicando la combinación por las formas de ordenar los {k} elementos)?"

pasos:
  - "V({n}, {k}) = C({n}, {k}) × {k}! = {combinations(n, k)} × {factorial(k)} = {combinations(n, k) * factorial(k)}"

explicacion: |
  Es la relación inversa a la fórmula de combinaciones: V = C × k!.
```

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "avanzado"
  tags: ["combinaciones"]

enunciado: "¿Por qué la fórmula de combinaciones divide la variación por k!?"
tipo: mc
opciones_explicitas:
  - "Porque cada combinación de k elementos corresponde a k! variaciones distintas (todos los órdenes posibles de esos mismos elementos), y hay que corregir ese sobre-conteo"
  - "Porque k! siempre es un número muy grande y hay que reducir el resultado"
  - "No hay ninguna razón matemática, es sólo una convención arbitraria"
respuesta: "Porque cada combinación de k elementos corresponde a k! variaciones distintas (todos los órdenes posibles de esos mismos elementos), y hay que corregir ese sobre-conteo"

explicacion: |
  Sin dividir, se estaría contando la misma combinación una vez por
  cada orden posible de sus elementos.
```

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "intermedio"
  tags: ["combinaciones", "problema"]

variables:
  n: random(5, 20)

respuesta: n
tipo: input

enunciado: "¿Cuántas combinaciones de 1 solo elemento hay en un conjunto de {n} elementos?"

pasos:
  - "C({n}, 1) = {n} (elegir uno solo, sin nada más que decidir)"

explicacion: |
  Con k=1 no hay orden ni repetición que considerar: el resultado es
  simplemente n.
```

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "intermedio"
  tags: ["combinaciones", "problema"]

variables:
  n: random(5, 20)

respuesta: 1
tipo: input

enunciado: "¿Cuántas combinaciones de {n} elementos hay en un conjunto de {n} elementos (elegirlos todos)?"

explicacion: |
  Sólo hay una forma de 'elegir a todos' — no hay ninguna decisión
  real que tomar.
```

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "intermedio"
  tags: ["combinaciones", "problema"]

variables:
  n: random(5, 20)

respuesta: 1
tipo: input

enunciado: "Por convención, ¿cuántas combinaciones de 0 elementos hay en un conjunto de {n} elementos?"

explicacion: |
  C(n, 0) = 1 — hay exactamente una forma de 'no elegir nada' (el
  conjunto vacío).
```

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "avanzado"
  tags: ["combinaciones", "variaciones"]

respuesta: verdadero
tipo: vf

enunciado: "Para los mismos n y k, C(n,k) siempre es menor o igual que V(n,k)."

explicacion: |
  La combinación es la variación dividida por k! (que es 1 o mayor),
  así que nunca puede ser mayor.
```

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "basico"
  tags: ["combinaciones", "aplicacion"]

enunciado: "En una lotería donde se elige un grupo de números sin importar el orden en que salen, ¿qué hay que calcular para saber cuántos resultados distintos son posibles?"
tipo: mc
opciones_explicitas:
  - "Una combinación: no importa el orden en que salen los números, sólo cuáles salen"
  - "Una variación, porque el orden de salida sí importa"
  - "Una simple multiplicación de la cantidad de números por sí misma"
respuesta: "Una combinación: no importa el orden en que salen los números, sólo cuáles salen"

explicacion: |
  Ganar con los números 5-12-23 es lo mismo que ganar con 23-5-12: el
  orden de salida no cambia el resultado del sorteo.
```

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "avanzado"
  tags: ["combinaciones", "problema"]

variables:
  total_numeros: uno_de([20, 25, 30])
  elegidos: uno_de([3, 4])

respuesta: combinations(total_numeros, elegidos)
tipo: input

enunciado: "Una lotería sortea {elegidos} números distintos de un total de {total_numeros} números posibles (sin importar el orden). ¿Cuántos resultados de sorteo distintos son posibles?"

pasos:
  - "C({total_numeros}, {elegidos}) = {combinations(total_numeros, elegidos)}"

explicacion: |
  Es exactamente el mismo cálculo que un comité o una mano de cartas.
```

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "basico"
  tags: ["combinaciones", "aplicacion"]

enunciado: "¿Para qué se usan las combinaciones en problemas de probabilidad compuesta (por ejemplo, probabilidades genéticas en Biología)?"
tipo: mc
opciones_explicitas:
  - "Para contar cuántos casos favorables y cuántos casos totales hay, sin necesidad de enumerarlos todos, y así calcular la probabilidad como un cociente"
  - "Sólo sirven para calcular promedios de datos"
  - "No tienen ninguna aplicación en probabilidad"
respuesta: "Para contar cuántos casos favorables y cuántos casos totales hay, sin necesidad de enumerarlos todos, y así calcular la probabilidad como un cociente"

explicacion: |
  Es el puente directo hacia Probabilidad compuesta (Tronco 4.b).
```

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "avanzado"
  tags: ["combinaciones", "problema"]

variables:
  puntos: uno_de([6, 7, 8, 9])

respuesta: combinations(puntos, 3)
tipo: input

enunciado: "Hay {puntos} puntos marcados en una hoja, ninguno alineado con otros dos. ¿Cuántos triángulos distintos se pueden formar uniendo 3 de esos puntos?"

pasos:
  - "Cada triángulo es un grupo de 3 puntos, sin importar el orden en que se los nombre: C({puntos}, 3) = {combinations(puntos, 3)}"

explicacion: |
  Un triángulo con vértices A, B, C es el mismo triángulo sin importar
  en qué orden se mencionen los vértices — por eso es combinación, no
  variación.
```

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "avanzado"
  tags: ["combinaciones", "variaciones"]

respuesta: verdadero
tipo: vf

enunciado: "Para k=1, la combinación C(n,1) y la variación V(n,1) dan exactamente el mismo resultado (ambas son n)."

explicacion: |
  Con un solo elemento elegido no hay ningún orden que definir, así
  que dividir por 1! (=1) no cambia nada.
```

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "avanzado"
  tags: ["combinaciones", "problema"]

variables:
  n: uno_de([9, 10, 11])
  k: uno_de([3, 4])

respuesta: combinations(n - 1, k - 1)
tipo: input

enunciado: "De un grupo de {n} personas, se va a elegir un comité de {k}, con la condición de que una persona específica (el director) SIEMPRE tiene que estar incluida. ¿Cuántos comités distintos son posibles?"

pasos:
  - "El director ya está incluido: sólo hay que elegir los {k}−1 restantes entre las otras {n}−1 personas"
  - "C({n}−1, {k}−1) = {combinations(n - 1, k - 1)}"

explicacion: |
  Fijar un elemento reduce el problema a elegir el resto entre los que
  quedan disponibles.
```

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "avanzado"
  tags: ["combinaciones"]

respuesta: verdadero
tipo: vf

enunciado: "Sin la fórmula de combinaciones, calcular la probabilidad de sucesos compuestos (como extraer varias cartas de un mismo color) quedaría condenado a enumerar caso por caso."

explicacion: |
  Para conjuntos grandes, enumerar deja de ser viable — combinaciones
  resuelve el conteo sin listar nada.
```

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "avanzado"
  tags: ["combinaciones", "problema"]

variables:
  n: uno_de([10, 12, 14])

respuesta: combinations(n, 2) + combinations(n, 3)
tipo: input

enunciado: "De un grupo de {n} personas, se quiere saber cuántos comités posibles hay en total, contando tanto los comités de 2 personas como los de 3 personas (cada tamaño por separado, sumados al final). ¿Cuál es ese total?"

pasos:
  - "Comités de 2: C({n}, 2) = {combinations(n, 2)}"
  - "Comités de 3: C({n}, 3) = {combinations(n, 3)}"
  - "Total = {combinations(n, 2)} + {combinations(n, 3)} = {combinations(n, 2) + combinations(n, 3)}"

explicacion: |
  Como son comités de tamaños distintos (no se solapan entre sí), se
  suman directo las dos cantidades.
```

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve calcular combinaciones?"
tipo: mc
opciones_explicitas:
  - "Para contar cuántas formas hay de elegir una parte de un conjunto SIN importar el orden, sin repetir elementos"
  - "Sólo sirve cuando el orden de la elección es importante"
  - "Sólo aplica a conjuntos de cartas de juego"
respuesta: "Para contar cuántas formas hay de elegir una parte de un conjunto SIN importar el orden, sin repetir elementos"

explicacion: |
  Cierra el tronco de Conjuntos y combinatoria (4.a), y es la puerta
  directa hacia Probabilidad compuesta (Tronco 4.b).
```

## Sección: permutaciones (24 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "basico"
  tags: ["permutaciones", "vocabulario"]

enunciado: "¿Qué es una permutación de un conjunto de n elementos?"
tipo: mc
opciones_explicitas:
  - "Cada una de las formas distintas de ordenar TODOS los elementos, sin dejar ninguno afuera y sin repetir ninguno"
  - "Cada una de las formas de elegir sólo una parte de los elementos"
  - "Cada una de las formas de elegir elementos sin importar el orden"
respuesta: "Cada una de las formas distintas de ordenar TODOS los elementos, sin dejar ninguno afuera y sin repetir ninguno"

explicacion: |
  Usa el conjunto completo — a diferencia de variaciones y
  combinaciones, que usan sólo una parte.
```

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "intermedio"
  tags: ["permutaciones", "completar"]

tipo: completar
enunciado: "Completá: n! = n × (n−1) × (n−2) × ... × 2 × ___."
respuestas_validas:
  - "1"

explicacion: |
  El producto termina siempre en 1.
```

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "intermedio"
  tags: ["permutaciones", "problema"]

variables:
  n: uno_de([3, 4, 5, 6])

respuesta: factorial(n)
tipo: input

enunciado: "¿Cuántas permutaciones distintas tiene un conjunto de {n} elementos?"

pasos:
  - "{n}! = {factorial(n)}"

explicacion: |
  Se multiplican todos los números enteros desde {n} hasta 1.
```

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "intermedio"
  tags: ["permutaciones"]

respuesta: verdadero
tipo: vf

enunciado: "Por convención, 0! = 1 (hay exactamente una forma de 'ordenar' un conjunto vacío: no hacer nada)."

explicacion: |
  Es una convención necesaria para que las fórmulas de variaciones y
  combinaciones sigan funcionando en los casos extremos.
```

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "basico"
  tags: ["permutaciones"]

respuesta: verdadero
tipo: vf

enunciado: "1! = 1 (con un solo elemento, hay una única forma de 'ordenarlo')."

explicacion: |
  No hay nada que reordenar con un solo elemento.
```

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "intermedio"
  tags: ["permutaciones", "problema"]

variables:
  personas: uno_de([4, 5, 6, 7])

respuesta: factorial(personas)
tipo: input

enunciado: "¿De cuántas formas distintas se pueden ordenar {personas} personas en una fila?"

pasos:
  - "{personas}! = {factorial(personas)}"

explicacion: |
  Cada orden distinto de la fila es una permutación diferente.
```

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "avanzado"
  tags: ["permutaciones", "problema"]

variables:
  corredores: uno_de([4, 5, 6])

respuesta: factorial(corredores)
tipo: input

enunciado: "En una carrera con {corredores} corredores, ¿de cuántas formas distintas puede quedar el orden de llegada completo (1° a {corredores}°), sin empates?"

pasos:
  - "{corredores}! = {factorial(corredores)}"

explicacion: |
  Es una permutación de los {corredores} corredores en las
  {corredores} posiciones de llegada.
```

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "intermedio"
  tags: ["permutaciones", "problema"]

variables:
  canciones: uno_de([5, 6, 7, 8])

respuesta: factorial(canciones)
tipo: input

enunciado: "Un álbum tiene {canciones} canciones. ¿De cuántos órdenes distintos se puede armar una lista de reproducción que use TODAS las canciones del álbum?"

pasos:
  - "{canciones}! = {factorial(canciones)}"

explicacion: |
  Usa todas las canciones (no una parte), así que es una permutación.
```

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "avanzado"
  tags: ["permutaciones"]

enunciado: "¿Por qué el factorial crece mucho más rápido que una multiplicación por un número fijo?"
tipo: mc
opciones_explicitas:
  - "Porque cada término nuevo multiplica por un número que también crece (n, n−1, n−2...), no por un factor constante"
  - "En realidad el factorial crece a la misma velocidad que cualquier multiplicación"
  - "Porque siempre se multiplica por 10"
respuesta: "Porque cada término nuevo multiplica por un número que también crece (n, n−1, n−2...), no por un factor constante"

explicacion: |
  Por eso 10! (3.628.800) es enormemente más grande que 10×9=90.
```

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "avanzado"
  tags: ["permutaciones", "problema"]

variables:
  n: uno_de([4, 5, 6, 7])

respuesta: n + 1
tipo: input

enunciado: "¿Cuántas veces más grande es ({n}+1)! comparado con {n}!?"

pasos:
  - "({n}+1)! = ({n}+1) × {n}! — así que la razón es exactamente {n}+1 = {n + 1}"

explicacion: |
  Pasar de n! a (n+1)! agrega un factor más: multiplicar por (n+1).
```

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "avanzado"
  tags: ["permutaciones"]

respuesta: verdadero
tipo: vf

enunciado: "Para cualquier n ≥ 2, n! es siempre un número par."

explicacion: |
  El producto n × (n−1) × ... × 2 × 1 incluye siempre el factor 2, así
  que el resultado es múltiplo de 2.
```

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "avanzado"
  tags: ["permutaciones", "ordenar"]

enunciado: "Ordená los pasos para calcular de cuántas formas se pueden ordenar n elementos, usando el principio multiplicativo."
tipo: ordenar
opciones_explicitas:
  - "Para el último elemento por ubicar queda 1 sola opción"
  - "Para el primer lugar hay n opciones disponibles"
  - "Para el segundo lugar hay n−1 opciones (ya se usó una), y así sucesivamente"
respuesta_orden: ["Para el primer lugar hay n opciones disponibles", "Para el segundo lugar hay n−1 opciones (ya se usó una), y así sucesivamente", "Para el último elemento por ubicar queda 1 sola opción"]
explicacion: |
  Multiplicar esa secuencia completa (n, n−1, ..., 1) es exactamente
  n!.
```

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "avanzado"
  tags: ["permutaciones", "problema"]

variables:
  letras: uno_de([4, 5, 6])

respuesta: factorial(letras)
tipo: input

enunciado: "Una palabra tiene {letras} letras, TODAS distintas entre sí. ¿Cuántos anagramas distintos (reordenamientos de esas letras) se pueden formar, tengan sentido o no?"

pasos:
  - "{letras}! = {factorial(letras)}"

explicacion: |
  Cada anagrama es una permutación distinta de las {letras} letras.
```

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "intermedio"
  tags: ["permutaciones"]

respuesta: verdadero
tipo: vf

enunciado: "Una permutación siempre usa TODOS los elementos del conjunto — ninguno queda afuera."

explicacion: |
  Es la diferencia clave con variaciones y combinaciones, que usan
  sólo una parte.
```

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "basico"
  tags: ["permutaciones", "aplicacion"]

enunciado: "Si una contraseña tiene que usar EXACTAMENTE las letras A, B, C, D (todas, sin repetir, en algún orden), ¿qué se necesita calcular para saber cuántas contraseñas distintas son posibles?"
tipo: mc
opciones_explicitas:
  - "Una permutación de las 4 letras: 4!"
  - "Una suma de las 4 letras"
  - "El cuadrado de 4"
respuesta: "Una permutación de las 4 letras: 4!"

explicacion: |
  Se usan todas las letras disponibles, sin dejar ninguna afuera.
```

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "avanzado"
  tags: ["permutaciones", "problema"]

variables:
  n: uno_de([7, 8, 9])

respuesta: factorial(n)
tipo: input

enunciado: "¿Cuánto es {n}!?"

pasos:
  - "{n}! = {n} × {n-1} × ... × 1 = {factorial(n)}"

explicacion: |
  A partir de 7-8 elementos, la cantidad de permutaciones ya es enorme.
```

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "avanzado"
  tags: ["permutaciones"]

respuesta: verdadero
tipo: vf

enunciado: "El factorial de un número negativo no tiene sentido en el contexto de contar permutaciones (no se puede ordenar una cantidad negativa de elementos)."

explicacion: |
  n siempre representa una cantidad de elementos, así que tiene que
  ser 0 o un entero positivo.
```

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "basico"
  tags: ["permutaciones", "completar"]

tipo: completar
enunciado: "Completá: la cantidad de permutaciones de n elementos se escribe con el símbolo n ___ (factorial)."
respuestas_validas:
  - "!"

explicacion: |
  Se lee "n factorial".
```

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "intermedio"
  tags: ["permutaciones", "problema"]

variables:
  amigos: uno_de([4, 5, 6])

respuesta: factorial(amigos)
tipo: input

enunciado: "{amigos} amigos van al cine y hay exactamente {amigos} asientos en fila. ¿De cuántas formas distintas se pueden sentar?"

pasos:
  - "{amigos}! = {factorial(amigos)}"

explicacion: |
  Cada asiento distinto para cada persona es una permutación.
```

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "avanzado"
  tags: ["permutaciones"]

enunciado: "¿Cómo se relaciona una permutación con el principio multiplicativo de conteo?"
tipo: mc
opciones_explicitas:
  - "Es el caso particular donde en cada paso hay una opción menos disponible, porque se usan todos los elementos sin repetir"
  - "No tiene ninguna relación con el principio multiplicativo"
  - "Es el principio multiplicativo, pero sumando en vez de multiplicando"
respuesta: "Es el caso particular donde en cada paso hay una opción menos disponible, porque se usan todos los elementos sin repetir"

explicacion: |
  n × (n−1) × (n−2) × ... es exactamente la forma del principio
  multiplicativo con una opción menos en cada paso.
```

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "basico"
  tags: ["permutaciones"]

respuesta: 24
tipo: input

enunciado: "¿Cuánto es 4! (4 factorial)?"

pasos:
  - "4! = 4 × 3 × 2 × 1 = 24"

explicacion: |
  Es un valor que conviene recordar de memoria, por lo seguido que
  aparece.
```

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "avanzado"
  tags: ["permutaciones", "problema"]

variables:
  n: uno_de([4, 5, 6])

respuesta: factorial(n + 1) - factorial(n)
tipo: input

enunciado: "¿Cuál es la diferencia entre ({n}+1)! y {n}!?"

pasos:
  - "({n}+1)! = {factorial(n + 1)}"
  - "{n}! = {factorial(n)}"
  - "Diferencia = {factorial(n + 1)} − {factorial(n)} = {factorial(n + 1) - factorial(n)}"

explicacion: |
  No es una resta trivial — el factorial crece tan rápido que la
  diferencia entre dos consecutivos también es grande.
```

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "basico"
  tags: ["permutaciones"]

respuesta: 1
tipo: input

enunciado: "¿De cuántas formas distintas se puede 'ordenar' un conjunto de un solo elemento?"

explicacion: |
  Con un solo elemento no hay nada que reordenar: sólo hay 1 forma.
```

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve calcular permutaciones?"
tipo: mc
opciones_explicitas:
  - "Para saber de cuántas formas distintas se puede ordenar UN CONJUNTO COMPLETO de elementos"
  - "Sólo sirve para calcular probabilidades de lotería"
  - "Sólo aplica a conjuntos de números, nunca a personas u objetos"
respuesta: "Para saber de cuántas formas distintas se puede ordenar UN CONJUNTO COMPLETO de elementos"

explicacion: |
  Es también la pieza (el factorial) que hace falta para calcular
  variaciones y combinaciones, los dos módulos hermanos que siguen.
```

