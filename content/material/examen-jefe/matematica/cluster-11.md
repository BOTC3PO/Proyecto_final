# Examen jefe — Dominio de la Regla del 8

> Logro #62. Completaste el parcial dominando divisibilidad, Ruffini y ecuaciones cuadráticas jefe. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **138 preguntas totales** en 5/5 secciones.

---

## Sección: divisibilidad/regla-del-8 (20 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "regla_del_8"
  nivel: "avanzado"
  tags: ["divisibilidad", "regla_del_8"]

variables:
  prefijo: random(1, 9)
  suffix: random(0, 999)
  n: prefijo * 1000 + suffix
  resto: suffix - floor(suffix / 8) * 8

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Es {n} divisible por 8?"

explicacion: |
  Alcanza con mirar el número formado por las últimas tres cifras: si ese
  número es múltiplo de 8, todo el número lo es.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_8"
  nivel: "avanzado"
  tags: ["divisibilidad", "regla_del_8"]

variables:
  prefijo: random(10, 999)
  suffix: random(0, 999)
  n: prefijo * 1000 + suffix
  resto: suffix - floor(suffix / 8) * 8

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Es {n} divisible por 8?"

explicacion: |
  Con números más grandes la regla no cambia: sólo importan las últimas
  tres cifras.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_8"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_8"]

variables:
  prefijo: random(1, 9)
  suffix: random(0, 999)
  n: prefijo * 1000 + suffix

respuesta: suffix
tipo: input
tolerancia_abs: 0

enunciado: "Para aplicar la regla del 8, ¿qué número forman las últimas tres cifras de {n}?"

explicacion: |
  Es el primer paso: aislar las últimas tres cifras.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_8"
  nivel: "avanzado"
  tags: ["divisibilidad", "regla_del_8"]

variables:
  prefijo: random(1, 9)
  suffix: random(0, 999)
  n: prefijo * 1000 + suffix
  resto: suffix - floor(suffix / 8) * 8

respuesta: (resto == 0)
tipo: vf

enunciado: "Las últimas tres cifras de {n} forman el número {suffix}. ¿Eso alcanza para decir que {n} es divisible por 8?"

explicacion: |
  Alcanza con ver si {suffix} es múltiplo de 8.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_8"
  nivel: "avanzado"
  tags: ["divisibilidad", "regla_del_8"]

variables:
  base: random(3, 120) * 8
  otro1: base + 1
  otro2: base + 4

respuesta: base
tipo: mc
opciones_explicitas:
  - base
  - otro1
  - otro2

enunciado: "¿Cuál de estos tres números es divisible por 8?"

explicacion: |
  Se comparan las últimas tres cifras de cada opción contra la tabla del 8.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_8"
  nivel: "avanzado"
  tags: ["divisibilidad", "regla_del_8"]

variables:
  base: random(3, 120) * 8 + 2
  otro1: random(3, 120) * 8
  otro2: random(3, 120) * 8

respuesta: base
tipo: mc
opciones_explicitas:
  - base
  - otro1
  - otro2

enunciado: "¿Cuál de estos tres números NO es divisible por 8?"

explicacion: |
  Las últimas tres cifras de {base} no forman un múltiplo de 8.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_8"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_8", "comparar_reglas"]

respuesta: verdadero
tipo: vf

enunciado: "Si un número es divisible por 8, también es divisible por 4."

explicacion: |
  Como 8 = 4 × 2, todo múltiplo de 8 es también múltiplo de 4 (y de 2).
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_8"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_8", "comparar_reglas"]

respuesta: falso
tipo: vf

enunciado: "Si un número es divisible por 4, siempre es divisible por 8 también."

explicacion: |
  No es cierto: 12 es divisible por 4 pero no por 8. La regla del 8 es más
  exigente.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_8"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_8", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Todos los resultados de la tabla del 8 son números divisibles por 8."

explicacion: |
  La tabla del 8 (8, 16, 24, 32...) es, exactamente, la lista de los
  números divisibles por 8.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_8"
  nivel: "avanzado"
  tags: ["divisibilidad", "regla_del_8", "problema"]

variables:
  prefijo: random(1, 9)
  suffix: random(0, 999)
  n: prefijo * 1000 + suffix
  resto: suffix - floor(suffix / 8) * 8

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Se pueden repartir {n} figuritas entre 8 chicos, en partes iguales y sin que sobre ninguna?"

explicacion: |
  Se puede repartir exacto entre 8 sólo si el total es divisible por 8.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_8"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_8"]

variables:
  prefijo: random(1, 99)
  n: prefijo * 1000

respuesta: verdadero
tipo: vf

enunciado: "¿Es {n} divisible por 8?"

explicacion: |
  Termina en 000, que cuenta como múltiplo de 8.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_8"
  nivel: "avanzado"
  tags: ["divisibilidad", "regla_del_8"]

variables:
  base: random(200, 2000) * 8
  otro1: base + 1
  otro2: base + 3

respuesta: base
tipo: mc
opciones_explicitas:
  - base
  - otro1
  - otro2

enunciado: "¿Cuál de estos tres números es divisible por 8?"

explicacion: |
  Con números grandes la regla no cambia: sólo importan las últimas tres
  cifras.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_8"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_8", "orden"]

tipo: ordenar
enunciado: "Ordená estos números de menor a mayor: son todos divisibles por 8."
opciones_explicitas:
  - "40"
  - "8"
  - "24"
  - "16"
respuesta_orden: ["8", "16", "24", "40"]

explicacion: |
  Los cuatro son múltiplos de 8; sólo hace falta ordenarlos por tamaño.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_8"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_8"]

variables:
  a: random(1, 100) * 8
  b: random(1, 100) * 8

respuesta: verdadero
tipo: vf

enunciado: "¿Es {a} + {b} siempre divisible por 8?"

explicacion: |
  La suma de dos múltiplos de 8 sigue siendo múltiplo de 8.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_8"
  nivel: "avanzado"
  tags: ["divisibilidad", "regla_del_8", "problema"]

variables:
  prefijo: random(1, 9)
  suffix: random(0, 999)
  n: prefijo * 1000 + suffix
  resto: suffix - floor(suffix / 8) * 8

respuesta: (resto == 0)
tipo: vf

enunciado: "Un producto se empaqueta en cajas cerradas de 8 unidades. ¿Se pueden empaquetar exactamente {n} unidades sin que sobre ninguna?"

explicacion: |
  Sólo si {n} es divisible por 8.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_8"
  nivel: "avanzado"
  tags: ["divisibilidad", "regla_del_8"]

variables:
  a: random(10, 150) * 8
  b: random(10, 150) * 8 + 4
  c: random(10, 150) * 8

respuesta: b
tipo: mc
opciones_explicitas:
  - a
  - b
  - c

enunciado: "De estos tres números, ¿cuál es el único que NO es divisible por 8?"

explicacion: |
  Hay que comparar las últimas tres cifras de cada uno contra la tabla
  del 8.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_8"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_8"]

variables:
  n: random(1, 200) * 8

tipo: completar
enunciado: "Completá el próximo múltiplo de 8 después de {n}."
respuestas_validas:
  - n + 8

explicacion: |
  Los múltiplos de 8 van de 8 en 8.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_8"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_8", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La regla del 8 mira tres cifras (no dos) porque 1.000 es múltiplo de 8, pero 100 no lo es."

explicacion: |
  Todo lo que esté "de las unidades de mil para arriba" ya es
  automáticamente múltiplo de 8.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_8"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_8"]

variables:
  n: random(100, 999)
  resto: n - floor(n / 8) * 8

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Es {n} divisible por 8?"

explicacion: |
  Con un número de 3 cifras, el número completo YA ES sus últimas tres
  cifras.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_8"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_8", "comparar_reglas"]

respuesta: verdadero
tipo: vf

enunciado: "Si un número es divisible por 8, también es divisible por 4 y por 2 al mismo tiempo."

explicacion: |
  8 = 4 × 2 = 2 × 2 × 2: todo múltiplo de 8 arrastra ambas divisibilidades.
```

## Sección: divisibilidad/regla-del-9 (20 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "regla_del_9"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_9"]

variables:
  n: random(10, 999)
  resto: n - floor(n / 9) * 9

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Es {n} divisible por 9?"

explicacion: |
  Se suman todas las cifras de {n}; si esa suma es múltiplo de 9, el
  número también lo es.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_9"
  nivel: "avanzado"
  tags: ["divisibilidad", "regla_del_9"]

variables:
  n: random(1000, 98765)
  resto: n - floor(n / 9) * 9

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Es {n} divisible por 9?"

explicacion: |
  Mismo procedimiento que con números más chicos: sumar todas las cifras.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_9"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_9"]

variables:
  c: random(1, 9)
  d: random(0, 9)
  u: random(0, 9)
  n: c * 100 + d * 10 + u

respuesta: c + d + u
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es la suma de las cifras de {n}?"

explicacion: |
  Es el mismo primer paso que la regla del 3: sumar todas las cifras.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_9"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_9"]

variables:
  c: random(1, 9)
  d: random(0, 9)
  u: random(0, 9)
  n: c * 100 + d * 10 + u
  suma_cifras: c + d + u
  resto: suma_cifras - floor(suma_cifras / 9) * 9

respuesta: (resto == 0)
tipo: vf

enunciado: "La suma de las cifras de {n} es {suma_cifras}. ¿Eso alcanza para decir que {n} es divisible por 9?"

explicacion: |
  Alcanza con ver si esa suma es múltiplo de 9 (no de 3).
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_9"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_9"]

variables:
  base: random(3, 100) * 9
  otro1: base + 1
  otro2: base + 2

respuesta: base
tipo: mc
opciones_explicitas:
  - base
  - otro1
  - otro2

enunciado: "¿Cuál de estos tres números es múltiplo de 9?"

explicacion: |
  Conviene sumar las cifras de cada opción y ver cuál suma da múltiplo
  de 9.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_9"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_9"]

variables:
  base: random(3, 100) * 9
  otro: base + 1

respuesta: otro
tipo: mc
opciones_explicitas:
  - base
  - otro

enunciado: "¿Cuál de estos dos números NO es múltiplo de 9?"

explicacion: |
  {base} sí lo es; el otro rompe la condición de suma múltiplo de 9.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_9"
  nivel: "avanzado"
  tags: ["divisibilidad", "regla_del_9"]

variables:
  c: random(1, 9)
  d: random(0, 9)
  suma_parcial: c + d
  r: suma_parcial - floor(suma_parcial / 9) * 9
  necesaria: (9 - r) - floor((9 - r) / 9) * 9

tipo: completar
enunciado: "El número tiene {c} centenas, {d} decenas, y falta la cifra de las unidades. Completá una cifra de unidades que haga que el número sea múltiplo de 9."
respuestas_validas:
  - necesaria

explicacion: |
  Hay que buscar qué cifra hace que la suma total de las cifras sea
  múltiplo de 9.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_9"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_9", "comparar_reglas"]

respuesta: verdadero
tipo: vf

enunciado: "Si un número es divisible por 9, también es divisible por 3."

explicacion: |
  Toda suma de cifras que sea múltiplo de 9 también es múltiplo de 3.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_9"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_9", "comparar_reglas"]

respuesta: falso
tipo: vf

enunciado: "Si un número es divisible por 3, siempre es divisible por 9 también."

explicacion: |
  No es cierto: 12 es divisible por 3 pero no por 9. La regla del 9 es más
  exigente.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_9"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_9", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Todos los resultados de la tabla del 9 son números divisibles por 9."

explicacion: |
  La tabla del 9 (9, 18, 27...) es, exactamente, la lista de los números
  divisibles por 9.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_9"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_9", "problema"]

variables:
  n: random(10, 300)
  resto: n - floor(n / 9) * 9

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Se pueden repartir {n} figuritas entre 9 chicos, en partes iguales y sin que sobre ninguna?"

explicacion: |
  Se puede repartir exacto entre 9 sólo si el total es divisible por 9.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_9"
  nivel: "avanzado"
  tags: ["divisibilidad", "regla_del_9"]

variables:
  base: random(200, 1000) * 9
  otro1: base + 1
  otro2: base + 3

respuesta: base
tipo: mc
opciones_explicitas:
  - base
  - otro1
  - otro2

enunciado: "¿Cuál de estos tres números es divisible por 9?"

explicacion: |
  Con números grandes hay que sumar todas las cifras, sin saltear ninguna.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_9"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_9"]

variables:
  m: random(1, 9)
  c: random(0, 9)
  d: random(0, 9)
  u: random(0, 9)
  n: m * 1000 + c * 100 + d * 10 + u

respuesta: m + c + d + u
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es la suma de las cifras de {n}?"

explicacion: |
  Igual que con menos cifras: se suman todas, sin saltear ninguna.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_9"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_9", "orden"]

tipo: ordenar
enunciado: "Ordená estos números de menor a mayor: son todos divisibles por 9."
opciones_explicitas:
  - "36"
  - "9"
  - "27"
  - "18"
respuesta_orden: ["9", "18", "27", "36"]

explicacion: |
  Los cuatro tienen suma de cifras múltiplo de 9; sólo hace falta
  ordenarlos por tamaño.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_9"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_9"]

variables:
  a: random(1, 50) * 9
  b: random(1, 50) * 9

respuesta: verdadero
tipo: vf

enunciado: "¿Es {a} + {b} siempre divisible por 9?"

explicacion: |
  La suma de dos múltiplos de 9 sigue siendo múltiplo de 9.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_9"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_9", "problema"]

variables:
  n: random(10, 300)
  resto: n - floor(n / 9) * 9

respuesta: (resto == 0)
tipo: vf

enunciado: "Un producto se empaqueta en cajas cerradas de 9 unidades. ¿Se pueden empaquetar exactamente {n} unidades sin que sobre ninguna?"

explicacion: |
  Sólo si {n} es divisible por 9.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_9"
  nivel: "avanzado"
  tags: ["divisibilidad", "regla_del_9"]

variables:
  a: random(10, 200) * 9
  b: random(10, 200) * 9 + 1
  c: random(10, 200) * 9

respuesta: b
tipo: mc
opciones_explicitas:
  - a
  - b
  - c

enunciado: "De estos tres números, ¿cuál es el único que NO es múltiplo de 9?"

explicacion: |
  Hay que sumar las cifras de cada uno y comparar contra la tabla del 9.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_9"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_9"]

variables:
  n: random(1, 100) * 9

tipo: completar
enunciado: "Completá el próximo múltiplo de 9 después de {n}."
respuestas_validas:
  - n + 9

explicacion: |
  Los múltiplos de 9 van de 9 en 9.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_9"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_9", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La regla del 9 usa exactamente el mismo método que la regla del 3 (sumar las cifras); sólo cambia el número contra el que se compara la suma."

explicacion: |
  Es la misma idea, con la tabla del 9 en vez de la tabla del 3.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_9"
  nivel: "avanzado"
  tags: ["divisibilidad", "regla_del_9"]

variables:
  c: random(1, 9)
  d: random(0, 9)
  u: random(0, 9)
  n1: c * 100 + d * 10 + u
  n2: c * 100 + u * 10 + d

respuesta: verdadero
tipo: vf

enunciado: "{n1} y {n2} tienen las mismas cifras en distinto orden. ¿Es cierto que los dos son divisibles por 9, o ninguno de los dos, al mismo tiempo?"

explicacion: |
  La suma de las cifras no cambia si se reordenan: por eso reordenar las
  cifras nunca cambia si un número es o no divisible por 9.
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

## Sección: division-polinomios-ruffini (26 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "basico"
  tags: ["teorema_resto"]

variables:
  c3: random(1, 5)
  c2: random(-5, 5)
  c1: random(-5, 5)
  c0: random(-10, 10)
  a: random(1, 6)

respuesta: c3 * a ^ 3 + c2 * a ^ 2 + c1 * a + c0
tipo: input
tolerancia_abs: 0

enunciado: "P(x) = {c3}x³ + {c2}x² + {c1}x + {c0}. Por el teorema del resto, ¿cuál es el resto de dividir P(x) por (x − {a})?"

pasos:
  - "El resto es P({a}) = {c3}×{a}³ + {c2}×{a}² + {c1}×{a} + {c0} = {c3 * a ^ 3 + c2 * a ^ 2 + c1 * a + c0}"

explicacion: |
  No hace falta dividir: el resto es directamente el valor del polinomio
  evaluado en a.
```

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "intermedio"
  tags: ["teorema_resto", "signos"]

variables:
  c2: random(1, 6)
  c1: random(-6, 6)
  c0: random(-10, 10)
  a: random(1, 6)

respuesta: c2 * (-a) ^ 2 + c1 * (-a) + c0
tipo: input
tolerancia_abs: 0

enunciado: "P(x) = {c2}x² + {c1}x + {c0}. ¿Cuál es el resto de dividir P(x) por (x + {a})?"

pasos:
  - "(x + {a}) es lo mismo que (x − (−{a})), así que se evalúa en x = −{a}"

explicacion: |
  Dividir por (x+a) equivale a evaluar en x = −a, no en x = a — un
  descuido común de signo.
```

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "basico"
  tags: ["teorema_resto"]

variables:
  c3: random(1, 4)
  c1: random(-8, 8)
  c0: random(-10, 10)
  a: random(1, 5)

respuesta: c3 * a ^ 3 + c1 * a + c0
tipo: input
tolerancia_abs: 0

enunciado: "P(x) = {c3}x³ + {c1}x + {c0} (sin término x²). ¿Cuál es el resto de dividir P(x) por (x − {a})?"

explicacion: |
  Falta el término x², pero el procedimiento es el mismo: evaluar en
  x = {a}.
```

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "intermedio"
  tags: ["ruffini"]

variables:
  c3: random(1, 5)
  c2: random(-8, 8)
  a: random(1, 6)

respuesta: c2 + c3 * a
tipo: input
tolerancia_abs: 0

enunciado: "Dividiendo por Ruffini un polinomio con coeficientes {c3}, {c2}, ... por (x − {a}): se baja el {c3}, se multiplica por {a}, y se suma al siguiente coeficiente ({c2}). ¿Qué número queda?"

explicacion: |
  {c2} + ({c3}×{a}) = {c2 + c3 * a}.
```

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "intermedio"
  tags: ["ruffini"]

variables:
  c3: random(1, 5)
  c2: random(-8, 8)
  c1: random(-8, 8)
  a: random(1, 6)
  paso2: c2 + c3 * a

respuesta: c1 + paso2 * a
tipo: input
tolerancia_abs: 0

enunciado: "Siguiendo Ruffini: el paso anterior dio {paso2}. Se multiplica por {a} y se suma al siguiente coeficiente ({c1}). ¿Qué número queda?"

explicacion: |
  {c1} + ({paso2}×{a}) = {c1 + paso2 * a}.
```

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "avanzado"
  tags: ["ruffini"]

variables:
  c3: random(1, 4)
  c2: random(-6, 6)
  c1: random(-6, 6)
  c0: random(-10, 10)
  a: random(1, 5)
  paso2: c2 + c3 * a
  paso3: c1 + paso2 * a

respuesta: c0 + paso3 * a
tipo: input
tolerancia_abs: 0

enunciado: "Último paso de Ruffini: el paso anterior dio {paso3}. Se multiplica por {a} y se suma al término independiente ({c0}). ¿Cuál es el resto?"

explicacion: |
  {c0} + ({paso3}×{a}) = {c0 + paso3 * a} — este último número es el
  resto de la división.
```

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "avanzado"
  tags: ["verificacion", "verdadero_falso"]

variables:
  c3: random(1, 4)
  c2: random(-6, 6)
  c1: random(-6, 6)
  c0: random(-10, 10)
  a: random(1, 5)
  paso2: c2 + c3 * a
  paso3: c1 + paso2 * a
  resto_ruffini: c0 + paso3 * a
  resto_teorema: c3 * a ^ 3 + c2 * a ^ 2 + c1 * a + c0

respuesta: (resto_ruffini == resto_teorema)
tipo: vf

enunciado: "P(x) = {c3}x³ + {c2}x² + {c1}x + {c0}. ¿El resto que da Ruffini al dividir por (x−{a}) coincide con P({a}) calculado directamente?"

explicacion: |
  Tienen que coincidir siempre — son dos formas distintas de calcular
  exactamente lo mismo.
```

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "intermedio"
  tags: ["teorema_factor", "verdadero_falso"]

variables:
  r: random(1, 10)
  c1: random(1, 8)
  c0: -c1 * r
  a: uno_de([r, r + 1, r - 1, r + 2])

respuesta: ((c1 * a + c0) == 0)
tipo: vf

enunciado: "P(x) = {c1}x + {c0}. ¿Es (x − {a}) un factor de P(x)?"

explicacion: |
  (x−{a}) es factor si y sólo si P({a}) = 0 — se verifica evaluando.
```

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "avanzado"
  tags: ["teorema_factor", "verdadero_falso"]

variables:
  r1: random(1, 5)
  r2: random(1, 5)
  a: uno_de([r1, r2, r1 + r2])

respuesta: (((a - r1) * (a - r2) * a) == 0)
tipo: vf

enunciado: "P(x) = x(x − {r1})(x − {r2}) (ya factoreado). ¿Es (x − {a}) uno de sus factores?"

explicacion: |
  Los únicos factores de la forma (x−k) son con k = 0, {r1} o {r2} — los
  valores que hacen 0 a cada factor.
```

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El resto de dividir P(x) por (x − a) es igual a P(a)."

explicacion: |
  Es el enunciado exacto del teorema del resto.
```

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Si P(a) = 0, entonces (x − a) es un factor de P(x)."

explicacion: |
  Es el corolario directo del teorema del resto: resto 0 significa
  división exacta, o sea, (x−a) divide a P(x) sin dejar resto.
```

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "intermedio"
  tags: ["concepto", "signos", "opcion_multiple"]

variables:
  k: random(1, 15)

respuesta: -k
tipo: mc
opciones_explicitas:
  - -k
  - k

enunciado: "Para dividir un polinomio por (x + {k}) usando Ruffini, ¿qué valor de a hay que usar?"

explicacion: |
  (x + {k}) = (x − (−{k})), así que a = −{k}, no {k}.
```

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "La regla de Ruffini se puede usar para dividir por cualquier polinomio, sin importar su grado."

explicacion: |
  Ruffini sólo funciona para divisores de la forma (x − a) — un binomio
  de grado 1 con coeficiente 1 en x.
```

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Para aplicar Ruffini a x³ − 1, hay que usar los coeficientes 1, 0, 0, −1 (completando con ceros los grados que no aparecen)."

explicacion: |
  Faltan los términos x² y x — sus coeficientes son 0, y hay que
  incluirlos para que Ruffini funcione bien.
```

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "intermedio"
  tags: ["concepto"]

variables:
  n: random(2, 8)

respuesta: n - 1
tipo: input
tolerancia_abs: 0

enunciado: "Al dividir un polinomio de grado {n} por (x − a), ¿qué grado tiene el cociente?"

explicacion: |
  Siempre un grado menos que el polinomio original, porque se le "saca"
  el factor (x−a), de grado 1.
```

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "avanzado"
  tags: ["verificacion", "verdadero_falso"]

variables:
  x: random(1, 15)
  a: random(1, 8)
  q1: random(1, 6)
  q0: random(-8, 8)
  r: random(1, 9)

respuesta: (((x - a) * (q1 * x + q0) + r) == ((q1 * x ^ 2 + (q0 - a * q1) * x + (r - a * q0))))
tipo: vf

enunciado: "Si el cociente de dividir P(x) por (x−{a}) es {q1}x+{q0}, y el resto es {r}, ¿P(x) tiene que ser igual a (x−{a})({q1}x+{q0})+{r}, evaluado en x={x}?"

explicacion: |
  Es la verificación general de cualquier división: dividendo = divisor
  × cociente + resto.
```

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  c2: random(1, 6)
  c1: random(-8, 8)
  c0: random(-10, 10)
  a: random(1, 6)
  real: c2 * a ^ 2 + c1 * a + c0
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "P(x) = {c2}x² + {c1}x + {c0}. ¿Es correcto que el resto de dividir por (x−{a}) sea {propuesto}?"

explicacion: |
  El resto correcto es P({a}) = {real}.
```

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "basico"
  tags: ["ruffini"]

variables:
  c2: random(1, 8)
  c1: random(-8, 8)
  c0: random(-10, 10)

respuesta: c0
tipo: input
tolerancia_abs: 0

enunciado: "P(x) = {c2}x² + {c1}x + {c0}. ¿Cuál es el resto de dividir P(x) por x (o sea, por x − 0)?"

explicacion: |
  P(0) = {c0} — el término independiente es directamente el resto de
  dividir por x.
```

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "avanzado"
  tags: ["teorema_factor"]

variables:
  r: random(1, 12)

respuesta: r
tipo: input
tolerancia_abs: 0

enunciado: "Se sabe que P(x) = x − {r} tiene resto 0 al dividir por (x − k), para un único valor de k. ¿Cuánto vale k?"

explicacion: |
  P(x) es cero exactamente en x = {r} — ese es el único k para el que
  (x−k) divide exacto a P(x).
```

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "avanzado"
  tags: ["ruffini", "signos"]

variables:
  c2: random(-8, -2)
  c1: random(-8, 8)
  a: random(1, 6)

respuesta: c1 + c2 * a
tipo: input
tolerancia_abs: 0

enunciado: "Dividiendo por Ruffini {c2}x² + {c1}x + ... por (x − {a}): se baja {c2}, se multiplica por {a} y se suma al siguiente coeficiente ({c1}). ¿Qué número queda?"

explicacion: |
  El procedimiento no cambia con coeficientes negativos, sólo hay que
  llevar el signo con cuidado.
```

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Un polinomio de grado n puede tener, como máximo, n factores distintos de la forma (x − a)."

explicacion: |
  Cada factor (x−a) resta 1 al grado del cociente — no puede haber más
  factores lineales que el grado total del polinomio.
```

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "avanzado"
  tags: ["teorema_factor", "verdadero_falso"]

variables:
  a: random(1, 5)
  b: random(1, 5)
  c: random(1, 5)
  candidato: uno_de([a, b, c, a + b + c])

respuesta: (((candidato - a) * (candidato - b) * (candidato - c)) == 0)
tipo: vf

enunciado: "P(x) = (x−{a})(x−{b})(x−{c}). ¿Es x = {candidato} una raíz de P(x) (o sea, P({candidato}) = 0)?"

explicacion: |
  Un producto da 0 si y sólo si alguno de sus factores da 0 — se verifica
  si {candidato} coincide con {a}, {b} o {c}.
```

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "intermedio"
  tags: ["ruffini", "opcion_multiple"]

respuesta: "El primer coeficiente se baja igual, sin cambios"
tipo: mc
opciones_explicitas:
  - "El primer coeficiente se baja igual, sin cambios"
  - "El primer coeficiente se multiplica por a antes de bajar"
  - "El primer coeficiente pasa a ser el resto"

enunciado: "En el primer paso de Ruffini, ¿qué se hace con el primer coeficiente del polinomio?"

explicacion: |
  Se "baja" directamente, sin ninguna operación — recién el segundo paso
  en adelante involucra multiplicar y sumar.
```

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El teorema del resto sirve para probar rápidamente si un número candidato es raíz de un polinomio, antes de intentar factorearlo por completo."

explicacion: |
  En vez de adivinar un factoreo a ojo, se prueban candidatos evaluando
  P(a) — si da 0, ya se encontró un factor real.
```

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "avanzado"
  tags: ["ruffini", "teorema_resto"]

variables:
  c4: random(1, 3)
  c3: random(-5, 5)
  c2: random(-5, 5)
  c1: random(-5, 5)
  c0: random(-8, 8)
  a: random(1, 4)

respuesta: c4 * a ^ 4 + c3 * a ^ 3 + c2 * a ^ 2 + c1 * a + c0
tipo: input
tolerancia_abs: 0

enunciado: "P(x) = {c4}x⁴ + {c3}x³ + {c2}x² + {c1}x + {c0}. ¿Cuál es el resto de dividir P(x) por (x − {a})?"

explicacion: |
  El teorema del resto funciona igual sin importar el grado del
  polinomio: siempre alcanza con evaluar en x = {a}.
```

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "El resto de dividir un polinomio por (x − a) siempre da 0."

explicacion: |
  Sólo da 0 cuando (x−a) es efectivamente un factor del polinomio — en
  general, puede dar cualquier número.
```

## Sección: ecuacion-cuadratica (32 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_cuadratica"
  nivel: "basico"
  tags: ["discriminante"]

variables:
  a: random(1, 6)
  b: random(-15, 15)
  c: random(-15, 15)

respuesta: b ^ 2 - 4 * a * c
tipo: input
tolerancia_abs: 0

enunciado: "{a}x² + {b}x + {c} = 0. ¿Cuál es el discriminante (Δ)?"

pasos:
  - "Δ = {b}² − 4×{a}×{c} = {b ^ 2} − {4 * a * c} = {b ^ 2 - 4 * a * c}"

explicacion: |
  Δ = b² − 4ac.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_cuadratica"
  nivel: "basico"
  tags: ["discriminante", "verdadero_falso"]

variables:
  r1: random(1, 15)
  r2: random(1, 15)
  b: -(r1 + r2)
  c: r1 * r2

respuesta: ((b ^ 2 - 4 * c) > 0)
tipo: vf

enunciado: "x² + {b}x + {c} = 0. ¿Es positivo el discriminante (o sea, tiene dos soluciones reales distintas)?"

explicacion: |
  Como se armó con dos raíces distintas ({r1} y {r2}), el discriminante
  tiene que dar positivo.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_cuadratica"
  nivel: "intermedio"
  tags: ["discriminante"]

variables:
  r: random(1, 20)
  b: -2 * r
  c: r ^ 2

respuesta: b ^ 2 - 4 * c
tipo: input
tolerancia_abs: 0

enunciado: "x² + {b}x + {c} = 0 (viene de (x−{r})²). ¿Cuál es el discriminante?"

explicacion: |
  Al ser un cuadrado perfecto, el discriminante da exactamente 0 — una
  única solución (doble).
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_cuadratica"
  nivel: "intermedio"
  tags: ["discriminante", "verdadero_falso"]

variables:
  a: random(1, 4)
  b: random(-6, 6)
  c: random(10, 30)

respuesta: ((b ^ 2 - 4 * a * c) < 0)
tipo: vf

enunciado: "{a}x² + {b}x + {c} = 0. ¿Es negativo el discriminante (o sea, no tiene soluciones reales)?"

explicacion: |
  Con {a} y {c} positivos y grandes en comparación con {b}, es frecuente
  que 4ac supere a b², dando discriminante negativo.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_cuadratica"
  nivel: "intermedio"
  tags: ["formula_resolvente"]

variables:
  r1: random(1, 20)
  r2: random(1, 20)
  b: -(r1 + r2)
  c: r1 * r2

respuesta: max(r1, r2)
tipo: input
tolerancia_abs: 0

enunciado: "x² + {b}x + {c} = 0. ¿Cuál es la mayor de las dos soluciones?"

pasos:
  - "Δ = {b}² − 4×{c} = {b ^ 2 - 4 * c}"
  - "x = (−({b}) ± √{b ^ 2 - 4 * c}) / 2"

explicacion: |
  Las dos soluciones son {r1} y {r2}.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_cuadratica"
  nivel: "intermedio"
  tags: ["formula_resolvente"]

variables:
  r1: random(1, 20)
  r2: random(1, 20)
  b: -(r1 + r2)
  c: r1 * r2

respuesta: min(r1, r2)
tipo: input
tolerancia_abs: 0

enunciado: "x² + {b}x + {c} = 0. ¿Cuál es la menor de las dos soluciones?"

explicacion: |
  Las dos soluciones son {r1} y {r2}.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_cuadratica"
  nivel: "avanzado"
  tags: ["formula_resolvente"]

variables:
  a: random(2, 6)
  r1: random(1, 15)
  r2: random(1, 15)
  b: -a * (r1 + r2)
  c: a * r1 * r2

respuesta: max(r1, r2)
tipo: input
tolerancia_abs: 0

enunciado: "{a}x² + {b}x + {c} = 0. ¿Cuál es la mayor de las dos soluciones?"

pasos:
  - "Δ = {b}² − 4×{a}×{c} = {b ^ 2 - 4 * a * c}"
  - "x = (−({b}) ± √{b ^ 2 - 4 * a * c}) / (2×{a})"

explicacion: |
  Con a distinto de 1, hay que dividir por 2a completo, no sólo por 2.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_cuadratica"
  nivel: "avanzado"
  tags: ["formula_resolvente"]

variables:
  a: random(2, 6)
  r1: random(1, 15)
  r2: random(1, 15)
  b: -a * (r1 + r2)
  c: a * r1 * r2

respuesta: min(r1, r2)
tipo: input
tolerancia_abs: 0

enunciado: "{a}x² + {b}x + {c} = 0. ¿Cuál es la menor de las dos soluciones?"

explicacion: |
  Las dos soluciones son {r1} y {r2}.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_cuadratica"
  nivel: "intermedio"
  tags: ["formula_resolvente"]

variables:
  r: random(1, 25)
  b: -2 * r
  c: r ^ 2

respuesta: r
tipo: input
tolerancia_abs: 0

enunciado: "x² + {b}x + {c} = 0, con discriminante 0. ¿Cuál es la única solución?"

explicacion: |
  Con Δ=0, x = −b/(2a) = {r} — las dos "ramas" de la fórmula coinciden.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_cuadratica"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  r1: random(1, 15)
  r2: random(1, 15)
  b: -(r1 + r2)
  c: r1 * r2

respuesta: ((r1 ^ 2 + b * r1 + c) == 0)
tipo: vf

enunciado: "x² + {b}x + {c} = 0. ¿Es x = {r1} una solución?"

explicacion: |
  Se reemplaza x por {r1} y se comprueba que la ecuación dé 0.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_cuadratica"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  r1: random(1, 15)
  r2: random(1, 15)
  b: -(r1 + r2)
  c: r1 * r2
  propuesto: r1 + uno_de([1, -1, 2, -2])

respuesta: ((propuesto ^ 2 + b * propuesto + c) == 0)
tipo: vf

enunciado: "x² + {b}x + {c} = 0. ¿Es x = {propuesto} una solución?"

explicacion: |
  Sólo {r1} y {r2} son soluciones — cualquier otro valor no cumple la
  ecuación (salvo coincidencia numérica puntual).
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_cuadratica"
  nivel: "intermedio"
  tags: ["vieta"]

variables:
  a: random(1, 5)
  r1: random(1, 15)
  r2: random(1, 15)
  b: -a * (r1 + r2)
  c: a * r1 * r2

respuesta: -b / a
tipo: input
tolerancia_abs: 0

enunciado: "{a}x² + {b}x + {c} = 0. Sin resolver la ecuación, ¿cuánto vale la suma de las dos raíces?"

explicacion: |
  Suma de raíces = −b/a = {-b / a}, sin necesidad de calcular cada raíz
  por separado.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_cuadratica"
  nivel: "intermedio"
  tags: ["vieta"]

variables:
  a: random(1, 5)
  r1: random(1, 15)
  r2: random(1, 15)
  b: -a * (r1 + r2)
  c: a * r1 * r2

respuesta: c / a
tipo: input
tolerancia_abs: 0

enunciado: "{a}x² + {b}x + {c} = 0. Sin resolver la ecuación, ¿cuánto vale el producto de las dos raíces?"

explicacion: |
  Producto de raíces = c/a = {c / a}.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_cuadratica"
  nivel: "avanzado"
  tags: ["vieta", "verificacion", "verdadero_falso"]

variables:
  r1: random(1, 15)
  r2: random(1, 15)
  b: -(r1 + r2)
  c: r1 * r2

respuesta: (((r1 + r2) == (-b)) == ((r1 * r2) == c))
tipo: vf

enunciado: "x² + {b}x + {c} = 0 tiene raíces {r1} y {r2}. ¿Coinciden a la vez la suma (−b) y el producto (c) con las relaciones de Vieta?"

explicacion: |
  Es la forma de verificar rápido si las raíces encontradas están bien,
  sin tener que rehacer toda la fórmula resolvente.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_cuadratica"
  nivel: "basico"
  tags: ["factoreo"]

variables:
  r1: random(1, 12)
  r2: random(1, 12)

respuesta: r1
tipo: input
tolerancia_abs: 0

enunciado: "x² − {r1 + r2}x + {r1 * r2} = 0 se factorea como (x − {r1})(x − {r2}) = 0. ¿Cuál es una de las soluciones?"

explicacion: |
  Un producto da 0 sólo si alguno de los factores da 0 — las soluciones
  son directamente {r1} y {r2}.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_cuadratica"
  nivel: "intermedio"
  tags: ["signos"]

variables:
  r1: random(1, 15)
  r2: random(1, 15)
  b: r2 - r1
  c: -r1 * r2

respuesta: r1
tipo: input
tolerancia_abs: 0

enunciado: "x² + {b}x + {c} = 0 tiene una raíz negativa (−{r2}) y una positiva. ¿Cuál es la raíz positiva?"

pasos:
  - "El producto de las raíces es {c}/1 = {c}, negativo — significa que las dos raíces tienen signos opuestos"

explicacion: |
  Con c negativo, las raíces siempre tienen signos opuestos entre sí.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_cuadratica"
  nivel: "basico"
  tags: ["concepto", "opcion_multiple"]

respuesta: "Dos soluciones reales distintas"
tipo: mc
opciones_explicitas:
  - "Dos soluciones reales distintas"
  - "Una única solución"
  - "Ninguna solución real"

enunciado: "Si el discriminante de una ecuación cuadrática es positivo, ¿cuántas soluciones reales tiene?"

explicacion: |
  Δ>0 da dos raíces distintas.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_cuadratica"
  nivel: "basico"
  tags: ["concepto", "opcion_multiple"]

respuesta: "Una única solución (raíz doble)"
tipo: mc
opciones_explicitas:
  - "Una única solución (raíz doble)"
  - "Dos soluciones reales distintas"
  - "Ninguna solución real"

enunciado: "Si el discriminante de una ecuación cuadrática es 0, ¿cuántas soluciones reales tiene?"

explicacion: |
  Δ=0 da una única solución, contada dos veces (raíz doble).
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_cuadratica"
  nivel: "basico"
  tags: ["concepto", "opcion_multiple"]

respuesta: "Ninguna solución real"
tipo: mc
opciones_explicitas:
  - "Ninguna solución real"
  - "Dos soluciones reales distintas"
  - "Una única solución"

enunciado: "Si el discriminante de una ecuación cuadrática es negativo, ¿cuántas soluciones reales tiene?"

explicacion: |
  Δ<0 no da soluciones reales — la raíz cuadrada de un número negativo
  no es real (sí tiene solución compleja, tema de `../numeros-complejos/`).
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_cuadratica"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "En ax²+bx+c=0, si a fuera 0, la ecuación dejaría de ser cuadrática (pasaría a ser de primer grado, o ni siquiera una ecuación en x si b también fuera 0)."

explicacion: |
  Por eso la condición a≠0 es parte de la definición de ecuación
  cuadrática.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_cuadratica"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "El símbolo ± en la fórmula resolvente es sólo una forma de escribir más corto, y en la práctica sólo hay que calcular un valor de x."

explicacion: |
  Hay que calcular DOS valores (uno sumando la raíz, otro restando),
  salvo que Δ=0 (ahí coinciden en un solo valor).
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_cuadratica"
  nivel: "avanzado"
  tags: ["error_comun", "verdadero_falso"]

variables:
  a: random(2, 5)
  r1: random(1, 10)
  r2: random(1, 10)
  b: -a * (r1 + r2)
  c: a * r1 * r2
  disc: b ^ 2 - 4 * a * c

respuesta: (((-b + sqrt(disc)) / (2 * a)) == max(r1, r2))
tipo: vf

enunciado: "{a}x² + {b}x + {c} = 0. ¿Es correcto que x = (−({b}) + √{disc}) / (2×{a}) dé la mayor raíz?"

explicacion: |
  Dividir por 2a completo (no sólo el numerador de un lado) es
  justamente lo que hace falta para que la fórmula dé el resultado
  correcto.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_cuadratica"
  nivel: "avanzado"
  tags: ["problema"]

variables:
  ancho: random(2, 15)
  largo_extra: random(1, 10)

respuesta: ancho
tipo: input
tolerancia_abs: 0

enunciado: "Un terreno rectangular tiene {largo_extra} metros más de largo que de ancho, y su área es {ancho * (ancho + largo_extra)} m². ¿Cuánto mide el ancho?"

pasos:
  - "Planteo: x(x+{largo_extra}) = {ancho * (ancho + largo_extra)} → x² + {largo_extra}x − {ancho * (ancho + largo_extra)} = 0"

explicacion: |
  Es la misma ecuación cuadrática de siempre, planteada desde un
  problema de área — se descarta la raíz negativa porque un ancho no
  puede ser negativo.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_cuadratica"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "En problemas donde x representa una magnitud física (longitud, tiempo, cantidad), si una de las dos raíces da negativa, normalmente se descarta."

explicacion: |
  La ecuación puede tener dos soluciones matemáticas válidas, pero sólo
  una (o ninguna) tiene sentido en el contexto del problema real.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_cuadratica"
  nivel: "intermedio"
  tags: ["formula_resolvente"]

variables:
  r: random(2, 15)
  c: -(r ^ 2)

respuesta: r
tipo: input
tolerancia_abs: 0

enunciado: "x² + {c} = 0 (sin término x). ¿Cuál es la solución positiva?"

pasos:
  - "x² = {-c} → x = ±√{-c}"

explicacion: |
  Sin el término x, la ecuación se resuelve directo despejando x² y
  sacando raíz cuadrada — no hace falta la fórmula completa.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_cuadratica"
  nivel: "intermedio"
  tags: ["factoreo"]

variables:
  r: random(1, 20)

respuesta: r
tipo: input
tolerancia_abs: 0

enunciado: "x² − {r}x = 0 (sin término independiente). Factoreando: x(x − {r}) = 0. ¿Cuál es la solución distinta de 0?"

explicacion: |
  Sacando x como factor común, las soluciones son x=0 y x={r} — no hace
  falta la fórmula resolvente completa acá tampoco.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_cuadratica"
  nivel: "intermedio"
  tags: ["discriminante", "verificacion", "verdadero_falso"]

variables:
  r1: random(1, 12)
  r2: random(1, 12)
  b: -(r1 + r2)
  c: r1 * r2
  disc: b ^ 2 - 4 * c
  raiz_disc: sqrt(disc)

respuesta: (raiz_disc == abs(r1 - r2))
tipo: vf

enunciado: "x² + {b}x + {c} = 0 tiene raíces {r1} y {r2}. ¿Es √Δ igual a la diferencia (en valor absoluto) entre las dos raíces?"

explicacion: |
  √Δ = |r1 − r2| siempre, porque las dos raíces son (−b±√Δ)/2 —
  la distancia entre ellas es exactamente √Δ.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_cuadratica"
  nivel: "basico"
  tags: ["factoreo"]

variables:
  r1: random(1, 20)
  r2: random(1, 20)

respuesta: r2
tipo: input
tolerancia_abs: 0

enunciado: "(x − {r1})(x − {r2}) = 0. ¿Cuál es la segunda solución (la distinta de {r1})?"

explicacion: |
  Ya está factoreada — las soluciones se leen directo: {r1} y {r2}.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_cuadratica"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  a: random(1, 5)
  b: random(-15, 15)
  c: random(-15, 15)
  real: b ^ 2 - 4 * a * c
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "{a}x² + {b}x + {c} = 0. ¿Es correcto que el discriminante sea {propuesto}?"

explicacion: |
  El discriminante correcto es b²−4ac = {real}.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_cuadratica"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Si un trinomio se puede factorear como (x−p)(x−q), entonces p y q son exactamente las soluciones de esa ecuación cuadrática."

explicacion: |
  Es la conexión directa con `../polinomios-factoreo/`: factorear y
  resolver son, en el fondo, la misma pregunta.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_cuadratica"
  nivel: "avanzado"
  tags: ["vieta"]

variables:
  r1: random(1, 20)
  r2: random(1, 20)

respuesta: -(r1 + r2)
tipo: input
tolerancia_abs: 0

enunciado: "Se quiere armar una ecuación x² + bx + c = 0 cuyas raíces sean {r1} y {r2}. ¿Cuánto tiene que valer b?"

explicacion: |
  b = −(suma de las raíces) = −({r1}+{r2}) = {-(r1 + r2)}.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_cuadratica"
  nivel: "avanzado"
  tags: ["vieta"]

variables:
  r1: random(1, 20)
  r2: random(1, 20)

respuesta: r1 * r2
tipo: input
tolerancia_abs: 0

enunciado: "Se quiere armar una ecuación x² + bx + c = 0 cuyas raíces sean {r1} y {r2}. ¿Cuánto tiene que valer c?"

explicacion: |
  c = producto de las raíces = {r1}×{r2} = {r1 * r2}.
```
