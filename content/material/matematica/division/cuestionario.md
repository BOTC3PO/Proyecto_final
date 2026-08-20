# Matemática — División (cuestionario, 40 preguntas VBLang)

> Tema: `N3` (Tronco 1 — Numérico), mitad "División". Ver `teoria.md` en
> esta misma carpeta.

Mismo formato que los cuestionarios anteriores. Para garantizar una
división entera válida (resto siempre menor que el divisor) los números se
arman al revés: se sortean divisor, cociente y resto por separado, y el
dividendo se calcula como `divisor × cociente + resto` — así el resultado
correcto siempre existe y no hace falta ninguna función de "resto" que el
DSL no tiene.

---

### 1 — División exacta, tabla del 2 (inversa)

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

### 2 — División exacta, tabla del 5 (inversa)

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

### 3 — División exacta, tabla del 9 (inversa)

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

### 4 — División exacta, general

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

### 5 — División entera: hallar el cociente

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

### 6 — División entera: hallar el resto

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

### 7 — División entera: reconstruir el dividendo

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

### 8 — División entera, en contexto de reparto con sobrante

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

### 9 — La prueba de la división (verdadero/falso)

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

### 10 — División como inversa de la multiplicación

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

### 11 — División como inversa de la multiplicación (el otro factor)

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

### 12 — La división no es conmutativa (verdadero/falso)

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

### 13 — El orden importa en la división (verdadero/falso, directo)

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

### 14 — Dividir por 0 (verdadero/falso)

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

### 15 — Dividir 0 por otro número (verdadero/falso)

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

### 16 — Nombre del dividendo

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

### 17 — Nombre del cociente y el resto

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

### 18 — Dividir por 10, 100 o 1.000

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

### 19 — Dividir por potencias de 10 (verdadero/falso)

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

### 20 — Estimar una división redondeando a la centena

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

### 21 — Estimar una división redondeando a la decena

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

### 22 — Hallar el dividendo que falta

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

### 23 — Hallar el divisor que falta

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

### 24 — Completar el dividendo que falta

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

### 25 — Verificar una división (tabla)

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

### 26 — Verificar una división con resto

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

### 27 — Verificar una división (número más grande)

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

### 28 — Problema: reparto exacto

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

### 29 — Problema: cuántos grupos completos caben

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

### 30 — Problema: costo unitario

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

### 31 — Problema: repartir dinero entre personas

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

### 32 — ¿Es exacta esta división?

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

### 33 — ¿Es exacta esta división? (otro caso)

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

### 34 — Completar el cociente en una división exacta

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

### 35 — El resto siempre es menor que el divisor (verdadero/falso)

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

### 36 — Reconocer un resto inválido

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

### 37 — Ordenar cocientes de menor a mayor

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

### 38 — Cuántas veces entra un número en otro

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

### 39 — Problema: repartir en partes iguales, con sobrante explícito

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

### 40 — Qué es la división (verdadero/falso)

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
