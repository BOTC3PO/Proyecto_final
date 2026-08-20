# Examen jefe — Maestro de las Reglas de Divisibilidad

> Logro #61. Dominaste las reglas del 3, 4, 5 y 6 para descomponer números como un pro. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **110 preguntas totales** en 5/5 secciones.

---

## Sección: divisibilidad/regla-del-3 (22 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "regla_del_3"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_3"]

variables:
  n: random(10, 999)
  resto: n - floor(n / 3) * 3

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Es {n} divisible por 3?"

explicacion: |
  Se suman todas las cifras de {n}; si esa suma es múltiplo de 3, el
  número también lo es.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_3"
  nivel: "avanzado"
  tags: ["divisibilidad", "regla_del_3"]

variables:
  n: random(1000, 98765)
  resto: n - floor(n / 3) * 3

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Es {n} divisible por 3?"

explicacion: |
  Si la primera suma de cifras da un número grande, se puede volver a
  sumar sus cifras hasta llegar a algo chico.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_3"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_3"]

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
  Sumar todas las cifras es el primer paso de la regla del 3.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_3"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_3"]

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
  Con más cifras el procedimiento es el mismo: sumar todas, sin saltear
  ninguna.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_3"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_3"]

variables:
  c: random(1, 9)
  d: random(0, 9)
  u: random(0, 9)
  n: c * 100 + d * 10 + u
  suma_cifras: c + d + u
  resto: suma_cifras - floor(suma_cifras / 3) * 3

respuesta: (resto == 0)
tipo: vf

enunciado: "La suma de las cifras de {n} es {suma_cifras}. ¿Eso alcanza para decir que {n} es divisible por 3?"

explicacion: |
  Alcanza con ver si esa suma es múltiplo de 3.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_3"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_3"]

variables:
  base: random(4, 300) * 3
  otro1: base + 1
  otro2: base + 2

respuesta: base
tipo: mc
opciones_explicitas:
  - base
  - otro1
  - otro2

enunciado: "¿Cuál de estos tres números es múltiplo de 3?"

explicacion: |
  Conviene sumar las cifras de cada opción y ver cuál suma da múltiplo
  de 3.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_3"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_3"]

variables:
  base: random(4, 300) * 3
  otro: base + 1

respuesta: otro
tipo: mc
opciones_explicitas:
  - base
  - otro

enunciado: "¿Cuál de estos dos números NO es múltiplo de 3?"

explicacion: |
  {base} sí lo es; {otro} tiene una cifra más que rompe la suma múltiplo
  de 3.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_3"
  nivel: "avanzado"
  tags: ["divisibilidad", "regla_del_3"]

variables:
  c: random(1, 9)
  d: random(0, 9)
  suma_parcial: c + d
  r: suma_parcial - floor(suma_parcial / 3) * 3
  necesaria: (3 - r) - floor((3 - r) / 3) * 3

tipo: completar
enunciado: "El número tiene {c} centenas, {d} decenas, y falta la cifra de las unidades. Completá una cifra de unidades que haga que el número sea múltiplo de 3."
respuestas_validas:
  - necesaria
  - necesaria + 3
  - necesaria + 6

explicacion: |
  Hay que buscar qué cifra hace que la suma total de las cifras sea
  múltiplo de 3; puede haber más de una respuesta válida (a intervalos
  de 3).
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_3"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_3", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Todos los resultados de la tabla del 3 son números divisibles por 3."

explicacion: |
  La tabla del 3 (3, 6, 9, 12...) es, exactamente, la lista de los números
  divisibles por 3.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_3"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_3", "problema"]

variables:
  n: random(10, 200)
  resto: n - floor(n / 3) * 3

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Se pueden repartir {n} caramelos entre 3 chicos, en partes iguales y sin que sobre ninguno?"

explicacion: |
  Se puede repartir exacto entre 3 sólo si el total es divisible por 3.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_3"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_3"]

variables:
  d: random(1, 9)
  u: random(0, 9)
  n: d * 10 + u

respuesta: d + u
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es la suma de las cifras de {n}?"

explicacion: |
  Con números de 2 cifras, la suma es más rápida de calcular.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_3"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_3"]

variables:
  a: random(1, 100) * 3
  b: random(1, 100) * 3

respuesta: verdadero
tipo: vf

enunciado: "¿Es {a} + {b} siempre divisible por 3?"

explicacion: |
  La suma de dos múltiplos de 3 sigue siendo múltiplo de 3.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_3"
  nivel: "avanzado"
  tags: ["divisibilidad", "regla_del_3"]

variables:
  base: random(500, 4000) * 3
  otro1: base + 1
  otro2: base + 2

respuesta: base
tipo: mc
opciones_explicitas:
  - base
  - otro1
  - otro2

enunciado: "¿Cuál de estos tres números es divisible por 3?"

explicacion: |
  Con números grandes hay que sumar todas las cifras, sin saltear ninguna.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_3"
  nivel: "avanzado"
  tags: ["divisibilidad", "regla_del_3"]

variables:
  c: random(1, 9)
  d: random(0, 9)
  u: random(0, 9)
  n: c * 100 + d * 10 + u
  suma1: c + d + u

respuesta: suma1
tipo: input
tolerancia_abs: 0

enunciado: "Al sumar las cifras de {n} se obtiene un número de 1 o 2 cifras. ¿Cuál es esa primera suma?"

explicacion: |
  Si esa primera suma todavía tiene 2 cifras, se le puede volver a sumar
  las cifras para achicarla más.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_3"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_3", "orden"]

tipo: ordenar
enunciado: "Ordená estos números de menor a mayor: son todos divisibles por 3."
opciones_explicitas:
  - "27"
  - "9"
  - "18"
  - "12"
respuesta_orden: ["9", "12", "18", "27"]

explicacion: |
  Los cuatro tienen suma de cifras múltiplo de 3; sólo hace falta
  ordenarlos por tamaño.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_3"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_3", "comparar_reglas"]

respuesta: falso
tipo: vf

enunciado: "Si un número es divisible por 3, siempre es divisible por 9 también."

explicacion: |
  No es cierto: 12 es divisible por 3 (1+2=3) pero no por 9. La regla del
  9 es más exigente que la del 3.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_3"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_3", "problema"]

variables:
  n: random(10, 200)
  resto: n - floor(n / 3) * 3

respuesta: (resto == 0)
tipo: vf

enunciado: "Un salón tiene mesas para 3 personas cada una. ¿Alcanzan las mesas exactas para sentar a {n} invitados, sin que sobre ni falte ningún lugar?"

explicacion: |
  Alcanzan exacto sólo si {n} es divisible por 3.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_3"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_3"]

variables:
  a: random(10, 300) * 3
  b: random(10, 300) * 3 + 1
  c: random(10, 300) * 3

respuesta: b
tipo: mc
opciones_explicitas:
  - a
  - b
  - c

enunciado: "De estos tres números, ¿cuál es el único que NO es múltiplo de 3?"

explicacion: |
  Hay que sumar las cifras de cada uno y comparar contra la tabla del 3.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_3"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_3"]

variables:
  n: random(1, 200) * 3

tipo: completar
enunciado: "Completá el próximo múltiplo de 3 después de {n}."
respuestas_validas:
  - n + 3

explicacion: |
  Los múltiplos de 3 van de 3 en 3.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_3"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_3", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de las reglas del 2, 5 y 10, la regla del 3 no alcanza con mirar sólo la última cifra: hay que sumar todas las cifras del número."

explicacion: |
  Es la primera regla del set clásico que necesita mirar el número
  completo, no sólo el final.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_3"
  nivel: "avanzado"
  tags: ["divisibilidad", "regla_del_3"]

variables:
  dm: random(1, 9)
  m: random(0, 9)
  c: random(0, 9)
  d: random(0, 9)
  u: random(0, 9)
  n: dm * 10000 + m * 1000 + c * 100 + d * 10 + u

respuesta: dm + m + c + d + u
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es la suma de las cifras de {n}?"

explicacion: |
  Con 5 cifras el procedimiento no cambia: sumar todas, una por una.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_3"
  nivel: "avanzado"
  tags: ["divisibilidad", "regla_del_3"]

variables:
  c: random(1, 9)
  d: random(0, 9)
  u: random(0, 9)
  n1: c * 100 + d * 10 + u
  n2: c * 100 + u * 10 + d

respuesta: verdadero
tipo: vf

enunciado: "{n1} y {n2} tienen las mismas cifras en distinto orden. ¿Es cierto que los dos son divisibles por 3, o ninguno de los dos, al mismo tiempo?"

explicacion: |
  La suma de las cifras no cambia si se reordenan: por eso, reordenar las
  cifras de un número nunca cambia si es o no divisible por 3.
```

## Sección: divisibilidad/regla-del-4 (20 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "regla_del_4"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_4"]

variables:
  prefijo: random(1, 9)
  suffix: random(0, 99)
  n: prefijo * 100 + suffix
  resto: suffix - floor(suffix / 4) * 4

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Es {n} divisible por 4?"

explicacion: |
  Alcanza con mirar el número formado por las últimas dos cifras: si ese
  número es múltiplo de 4, todo el número lo es.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_4"
  nivel: "avanzado"
  tags: ["divisibilidad", "regla_del_4"]

variables:
  prefijo: random(10, 999)
  suffix: random(0, 99)
  n: prefijo * 100 + suffix
  resto: suffix - floor(suffix / 4) * 4

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Es {n} divisible por 4?"

explicacion: |
  Con números más grandes la regla no cambia: sólo importan las últimas
  dos cifras.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_4"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_4"]

variables:
  prefijo: random(1, 9)
  suffix: random(0, 99)
  n: prefijo * 100 + suffix

respuesta: suffix
tipo: input
tolerancia_abs: 0

enunciado: "Para aplicar la regla del 4, ¿qué número forman las últimas dos cifras de {n}?"

explicacion: |
  Es el primer paso: aislar las últimas dos cifras como si fueran un
  número aparte.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_4"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_4"]

variables:
  prefijo: random(1, 9)
  suffix: random(0, 99)
  n: prefijo * 100 + suffix
  resto: suffix - floor(suffix / 4) * 4

respuesta: (resto == 0)
tipo: vf

enunciado: "Las últimas dos cifras de {n} forman el número {suffix}. ¿Eso alcanza para decir que {n} es divisible por 4?"

explicacion: |
  Alcanza con ver si {suffix} es múltiplo de 4.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_4"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_4"]

variables:
  base: random(3, 200) * 4
  otro1: base + 1
  otro2: base + 2

respuesta: base
tipo: mc
opciones_explicitas:
  - base
  - otro1
  - otro2

enunciado: "¿Cuál de estos tres números es divisible por 4?"

explicacion: |
  Se comparan las últimas dos cifras de cada opción contra la tabla del 4.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_4"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_4"]

variables:
  base: random(3, 200) * 4 + 2
  otro1: random(3, 200) * 4
  otro2: random(3, 200) * 4

respuesta: base
tipo: mc
opciones_explicitas:
  - base
  - otro1
  - otro2

enunciado: "¿Cuál de estos tres números NO es divisible por 4?"

explicacion: |
  Las últimas dos cifras de {base} no forman un múltiplo de 4.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_4"
  nivel: "avanzado"
  tags: ["divisibilidad", "regla_del_4"]

variables:
  prefijo: random(1, 9)
  d: random(0, 9)
  base_decena: d * 10
  r: base_decena - floor(base_decena / 4) * 4
  necesaria: (4 - r) - floor((4 - r) / 4) * 4

tipo: completar
enunciado: "El número {prefijo}{d}_ (falta la cifra de las unidades) tiene que ser divisible por 4. Completá una cifra válida."
respuestas_validas:
  - necesaria
  - necesaria + 4

explicacion: |
  Hay que buscar qué cifra hace que las últimas dos cifras formen un
  múltiplo de 4.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_4"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_4", "comparar_reglas"]

respuesta: verdadero
tipo: vf

enunciado: "Si un número es divisible por 4, también es divisible por 2."

explicacion: |
  Como 4 = 2 × 2, todo múltiplo de 4 es también múltiplo de 2.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_4"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_4", "comparar_reglas"]

respuesta: falso
tipo: vf

enunciado: "Si un número es divisible por 2, siempre es divisible por 4 también."

explicacion: |
  No es cierto: 6 es divisible por 2 pero no por 4. La regla del 4 es más
  exigente.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_4"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_4", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Todos los resultados de la tabla del 4 son números divisibles por 4."

explicacion: |
  La tabla del 4 (4, 8, 12, 16...) es, exactamente, la lista de los
  números divisibles por 4.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_4"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_4", "problema"]

variables:
  prefijo: random(1, 9)
  suffix: random(0, 99)
  n: prefijo * 100 + suffix
  resto: suffix - floor(suffix / 4) * 4

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Se pueden repartir {n} figuritas entre 4 chicos, en partes iguales y sin que sobre ninguna?"

explicacion: |
  Se puede repartir exacto entre 4 sólo si el total es divisible por 4.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_4"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_4"]

variables:
  prefijo: random(1, 99)
  n: prefijo * 100

respuesta: verdadero
tipo: vf

enunciado: "¿Es {n} divisible por 4?"

explicacion: |
  Termina en 00, que cuenta como múltiplo de 4 (0 es múltiplo de
  cualquier número).
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_4"
  nivel: "avanzado"
  tags: ["divisibilidad", "regla_del_4"]

variables:
  base: random(300, 2000) * 4
  otro1: base + 1
  otro2: base + 3

respuesta: base
tipo: mc
opciones_explicitas:
  - base
  - otro1
  - otro2

enunciado: "¿Cuál de estos tres números es divisible por 4?"

explicacion: |
  Con números grandes la regla no cambia: sólo importan las últimas dos
  cifras.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_4"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_4", "orden"]

tipo: ordenar
enunciado: "Ordená estos números de menor a mayor: son todos divisibles por 4."
opciones_explicitas:
  - "24"
  - "8"
  - "16"
  - "12"
respuesta_orden: ["8", "12", "16", "24"]

explicacion: |
  Los cuatro son múltiplos de 4; sólo hace falta ordenarlos por tamaño.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_4"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_4"]

variables:
  a: random(1, 100) * 4
  b: random(1, 100) * 4

respuesta: verdadero
tipo: vf

enunciado: "¿Es {a} + {b} siempre divisible por 4?"

explicacion: |
  La suma de dos múltiplos de 4 sigue siendo múltiplo de 4.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_4"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_4", "problema"]

variables:
  prefijo: random(1, 9)
  suffix: random(0, 99)
  n: prefijo * 100 + suffix
  resto: suffix - floor(suffix / 4) * 4

respuesta: (resto == 0)
tipo: vf

enunciado: "Un producto se empaqueta en cajas cerradas de 4 unidades. ¿Se pueden empaquetar exactamente {n} unidades sin que sobre ninguna?"

explicacion: |
  Sólo si {n} es divisible por 4.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_4"
  nivel: "avanzado"
  tags: ["divisibilidad", "regla_del_4"]

variables:
  a: random(10, 200) * 4
  b: random(10, 200) * 4 + 2
  c: random(10, 200) * 4

respuesta: b
tipo: mc
opciones_explicitas:
  - a
  - b
  - c

enunciado: "De estos tres números, ¿cuál es el único que NO es divisible por 4?"

explicacion: |
  Hay que comparar las últimas dos cifras de cada uno contra la tabla del
  4.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_4"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_4"]

variables:
  n: random(1, 200) * 4

tipo: completar
enunciado: "Completá el próximo múltiplo de 4 después de {n}."
respuestas_validas:
  - n + 4

explicacion: |
  Los múltiplos de 4 van de 4 en 4.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_4"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_4", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La regla del 4 mira dos cifras (no una sola) porque 100 es múltiplo de 4, pero 10 no lo es."

explicacion: |
  Todo lo que esté "de las centenas para arriba" ya es automáticamente
  múltiplo de 4; sólo hace falta chequear el resto.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_4"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_4"]

variables:
  n: random(10, 99)
  resto: n - floor(n / 4) * 4

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Es {n} divisible por 4?"

explicacion: |
  Con un número de 2 cifras, el número completo YA ES sus últimas dos
  cifras.
```

## Sección: divisibilidad/regla-del-5 (20 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "regla_del_5"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_5"]

variables:
  n: random(10, 999)
  resto: n - floor(n / 5) * 5

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Es {n} divisible por 5?"

explicacion: |
  Se mira sólo la última cifra: si es 0 o 5, el número es divisible por 5.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_5"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_5"]

variables:
  n: random(1000, 98765)
  resto: n - floor(n / 5) * 5

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Es {n} divisible por 5?"

explicacion: |
  Con números más grandes la regla no cambia: sigue alcanzando con la
  última cifra.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_5"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_5"]

variables:
  base: random(5, 400) * 5
  otro1: base + 1
  otro2: base + 3

respuesta: base
tipo: mc
opciones_explicitas:
  - base
  - otro1
  - otro2

enunciado: "¿Cuál de estos tres números es divisible por 5?"

explicacion: |
  Sólo hay que mirar si la última cifra es 0 o 5.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_5"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_5"]

variables:
  base: random(5, 400) * 5 + 2
  otro1: random(5, 400) * 5
  otro2: random(5, 400) * 5

respuesta: base
tipo: mc
opciones_explicitas:
  - base
  - otro1
  - otro2

enunciado: "¿Cuál de estos tres números NO es divisible por 5?"

explicacion: |
  {base} no termina en 0 ni en 5.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_5"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_5"]

variables:
  prefijo: random(1, 99)

tipo: completar
enunciado: "El número {prefijo}_ (falta la última cifra) tiene que ser divisible por 5. Completá una cifra válida."
respuestas_validas:
  - 0
  - 5

explicacion: |
  Sólo el 0 y el 5 sirven como última cifra.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_5"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_5"]

variables:
  prefijo: random(1, 99)

tipo: completar
enunciado: "El número {prefijo}_ (falta la última cifra) tiene que NO ser divisible por 5. Completá una cifra válida."
respuestas_validas:
  - 1
  - 2
  - 3
  - 4
  - 6
  - 7
  - 8
  - 9

explicacion: |
  Cualquier cifra distinta de 0 y 5 hace que el número no sea divisible
  por 5.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_5"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_5"]

variables:
  d: random(1, 99)
  n: d * 10

respuesta: verdadero
tipo: vf

enunciado: "¿Es {n} divisible por 5?"

explicacion: |
  Termina en 0, así que es divisible por 5 (y también por 10 y por 2).
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_5"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_5"]

variables:
  d: random(1, 99)
  n: d * 10 + 5

respuesta: verdadero
tipo: vf

enunciado: "¿Es {n} divisible por 5?"

explicacion: |
  Termina en 5, así que es divisible por 5.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_5"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_5"]

variables:
  d: random(1, 99)
  u: uno_de([0, 5])
  n: d * 10 + u

respuesta: u
tipo: input
tolerancia_abs: 0

enunciado: "El número {n} es divisible por 5. ¿Cuál es su última cifra?"

explicacion: |
  Sólo puede ser 0 o 5.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_5"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_5", "problema"]

variables:
  n: random(10, 200)
  resto: n - floor(n / 5) * 5

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Se pueden repartir {n} caramelos entre 5 chicos, en partes iguales y sin que sobre ninguno?"

explicacion: |
  Se puede repartir exacto entre 5 sólo si el total es divisible por 5.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_5"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_5"]

variables:
  base: random(500, 4000) * 5
  otro1: base + 1
  otro2: base + 4

respuesta: base
tipo: mc
opciones_explicitas:
  - base
  - otro1
  - otro2

enunciado: "¿Cuál de estos tres números es divisible por 5?"

explicacion: |
  Con números grandes la regla no cambia.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_5"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_5", "orden"]

tipo: ordenar
enunciado: "Ordená estos números de menor a mayor: son todos divisibles por 5."
opciones_explicitas:
  - "45"
  - "10"
  - "30"
  - "25"
respuesta_orden: ["10", "25", "30", "45"]

explicacion: |
  Los cuatro terminan en 0 o en 5; sólo hace falta ordenarlos por tamaño.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_5"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_5", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Todos los resultados de la tabla del 5 son números divisibles por 5."

explicacion: |
  La tabla del 5 (5, 10, 15, 20...) es, exactamente, la lista de los
  números divisibles por 5.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_5"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_5"]

variables:
  a: random(1, 100) * 5
  b: random(1, 100) * 5

respuesta: verdadero
tipo: vf

enunciado: "¿Es {a} + {b} siempre divisible por 5?"

explicacion: |
  La suma de dos múltiplos de 5 sigue siendo múltiplo de 5.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_5"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_5"]

variables:
  n: random(10, 999)
  ultima_cifra: n - floor(n / 10) * 10
  resto: n - floor(n / 5) * 5

respuesta: (resto == 0)
tipo: vf

enunciado: "La última cifra de {n} es {ultima_cifra}. ¿Eso alcanza para asegurar que {n} es divisible por 5?"

explicacion: |
  Alcanza con esa única cifra: sólo si es 0 o 5, {n} es divisible por 5.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_5"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_5"]

variables:
  a: random(10, 500) * 5
  b: random(10, 500) * 5 + 2
  c: random(10, 500) * 5

respuesta: b
tipo: mc
opciones_explicitas:
  - a
  - b
  - c

enunciado: "De estos tres números, ¿cuál es el único que NO es divisible por 5?"

explicacion: |
  Hay que revisar la última cifra de cada uno.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_5"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_5"]

variables:
  d: random(1, 99)
  n: d * 10 + 5

respuesta: verdadero
tipo: vf

enunciado: "¿Es cierto que {n} es divisible por 5 pero NO por 2?"

explicacion: |
  {n} termina en 5, que es impar: cumple la regla del 5 pero no la del 2.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_5"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_5", "problema"]

variables:
  n: random(10, 500)
  resto: n - floor(n / 5) * 5

respuesta: (resto == 0)
tipo: vf

enunciado: "Un producto cuesta ${n}. ¿Es un precio múltiplo de 5?"

explicacion: |
  Depende de si la última cifra del precio es 0 o 5.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_5"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_5"]

variables:
  n: random(1, 100) * 5

tipo: completar
enunciado: "Completá el próximo múltiplo de 5 después de {n}."
respuestas_validas:
  - n + 5

explicacion: |
  Los múltiplos de 5 van de 5 en 5.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_5"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_5", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Para saber si un número es divisible por 5, alcanza con mirar su última cifra."

explicacion: |
  Es el mismo tipo de atajo que la regla del 2: no hace falta la división
  completa.
```

## Sección: divisibilidad/regla-del-6 (20 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "regla_del_6"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_6"]

variables:
  n: random(10, 999)
  resto2: n - floor(n / 2) * 2
  resto3: n - floor(n / 3) * 3

respuesta: (n - floor(n / 6) * 6 == 0)
tipo: vf

enunciado: "¿Es {n} divisible por 6?"

explicacion: |
  Tiene que cumplir la regla del 2 (ser par) y la regla del 3 (suma de
  cifras múltiplo de 3) al mismo tiempo.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_6"
  nivel: "avanzado"
  tags: ["divisibilidad", "regla_del_6"]

variables:
  n: random(1000, 98765)
  resto2: n - floor(n / 2) * 2
  resto3: n - floor(n / 3) * 3

respuesta: (n - floor(n / 6) * 6 == 0)
tipo: vf

enunciado: "¿Es {n} divisible por 6?"

explicacion: |
  Con números más grandes la regla no cambia: hay que chequear las dos
  condiciones.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_6"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_6"]

variables:
  n: random(10, 999)
  resto2: n - floor(n / 2) * 2

respuesta: (resto2 == 0)
tipo: vf

enunciado: "Para saber si {n} es divisible por 6, el primer chequeo es la regla del 2. ¿Es {n} par?"

explicacion: |
  Es el primero de los dos chequeos obligatorios para la regla del 6.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_6"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_6"]

variables:
  n: random(10, 999)
  resto3: n - floor(n / 3) * 3

respuesta: (resto3 == 0)
tipo: vf

enunciado: "Para saber si {n} es divisible por 6, el segundo chequeo es la regla del 3. ¿La suma de las cifras de {n} es múltiplo de 3?"

explicacion: |
  Es el segundo de los dos chequeos obligatorios para la regla del 6.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_6"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_6"]

variables:
  d: random(1, 9)
  u: uno_de([0, 2, 4, 6, 8])
  n: d * 10 + u
  resto3: n - floor(n / 3) * 3

respuesta: (resto3 == 0)
tipo: vf

enunciado: "{n} es par. ¿Alcanza sólo con eso para asegurar que {n} es divisible por 6?"

explicacion: |
  No alcanza: además de ser par, tiene que cumplir también la regla del 3.
  Ser par no es suficiente por sí solo.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_6"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_6"]

variables:
  base: random(3, 150) * 6
  otro1: base + 2
  otro2: base + 3

respuesta: base
tipo: mc
opciones_explicitas:
  - base
  - otro1
  - otro2

enunciado: "¿Cuál de estos tres números es divisible por 6?"

explicacion: |
  Tiene que cumplir las dos condiciones a la vez: ser par y tener suma de
  cifras múltiplo de 3.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_6"
  nivel: "avanzado"
  tags: ["divisibilidad", "regla_del_6"]

variables:
  base: random(3, 150) * 6
  par_no_multiplo_3: base + 2

respuesta: par_no_multiplo_3
tipo: mc
opciones_explicitas:
  - base
  - par_no_multiplo_3

enunciado: "¿Cuál de estos dos números es par pero NO es divisible por 6?"

explicacion: |
  {par_no_multiplo_3} es par, pero su suma de cifras no es múltiplo de 3
  — le falta la segunda condición.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_6"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_6", "comparar_reglas"]

respuesta: verdadero
tipo: vf

enunciado: "Si un número es divisible por 6, también es divisible por 2."

explicacion: |
  Como 6 = 2 × 3, todo múltiplo de 6 es también múltiplo de 2.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_6"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_6", "comparar_reglas"]

respuesta: verdadero
tipo: vf

enunciado: "Si un número es divisible por 6, también es divisible por 3."

explicacion: |
  Como 6 = 2 × 3, todo múltiplo de 6 es también múltiplo de 3.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_6"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_6", "comparar_reglas"]

respuesta: falso
tipo: vf

enunciado: "Si un número es divisible por 3, siempre es divisible por 6 también."

explicacion: |
  No es cierto: 9 es divisible por 3 pero no por 6 (es impar). Hace falta
  además ser par.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_6"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_6", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Todos los resultados de la tabla del 6 son números divisibles por 6."

explicacion: |
  La tabla del 6 (6, 12, 18, 24...) es, exactamente, la lista de los
  números divisibles por 6.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_6"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_6", "problema"]

variables:
  n: random(10, 300)
  resto2: n - floor(n / 2) * 2
  resto3: n - floor(n / 3) * 3

respuesta: (n - floor(n / 6) * 6 == 0)
tipo: vf

enunciado: "¿Se pueden repartir {n} caramelos entre 6 chicos, en partes iguales y sin que sobre ninguno?"

explicacion: |
  Se puede repartir exacto entre 6 sólo si el total es divisible por 6.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_6"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_6", "orden"]

tipo: ordenar
enunciado: "Ordená estos números de menor a mayor: son todos divisibles por 6."
opciones_explicitas:
  - "36"
  - "6"
  - "24"
  - "12"
respuesta_orden: ["6", "12", "24", "36"]

explicacion: |
  Los cuatro son múltiplos de 6; sólo hace falta ordenarlos por tamaño.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_6"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_6"]

variables:
  a: random(1, 50) * 6
  b: random(1, 50) * 6

respuesta: verdadero
tipo: vf

enunciado: "¿Es {a} + {b} siempre divisible por 6?"

explicacion: |
  La suma de dos múltiplos de 6 sigue siendo múltiplo de 6.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_6"
  nivel: "avanzado"
  tags: ["divisibilidad", "regla_del_6"]

variables:
  base: random(200, 1000) * 6
  otro1: base + 2
  otro2: base + 3

respuesta: base
tipo: mc
opciones_explicitas:
  - base
  - otro1
  - otro2

enunciado: "¿Cuál de estos tres números es divisible por 6?"

explicacion: |
  Hay que revisar las dos condiciones (par y suma múltiplo de 3) en cada
  opción.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_6"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_6", "problema"]

variables:
  n: random(10, 300)
  resto2: n - floor(n / 2) * 2
  resto3: n - floor(n / 3) * 3

respuesta: (n - floor(n / 6) * 6 == 0)
tipo: vf

enunciado: "Un salón tiene mesas para 6 personas cada una. ¿Alcanzan las mesas exactas para {n} invitados, sin que sobre ni falte ningún lugar?"

explicacion: |
  Alcanzan exacto sólo si {n} es divisible por 6.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_6"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_6"]

variables:
  n: random(1, 100) * 6

tipo: completar
enunciado: "Completá el próximo múltiplo de 6 después de {n}."
respuestas_validas:
  - n + 6

explicacion: |
  Los múltiplos de 6 van de 6 en 6.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_6"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_6"]

variables:
  n: random(5, 400) * 2 + 1

respuesta: falso
tipo: vf

enunciado: "¿Es {n} divisible por 6?"

explicacion: |
  {n} es impar, así que ya falla la primera condición (ser par) — ni hace
  falta revisar la suma de cifras.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_6"
  nivel: "avanzado"
  tags: ["divisibilidad", "regla_del_6"]

variables:
  a: random(10, 150) * 6
  b: random(10, 150) * 6 + 2
  c: random(10, 150) * 6

respuesta: b
tipo: mc
opciones_explicitas:
  - a
  - b
  - c

enunciado: "De estos tres números, ¿cuál es el único que NO es divisible por 6?"

explicacion: |
  Hay que chequear las dos condiciones (par y múltiplo de 3) en cada uno.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_6"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_6", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La regla del 6 no es un método nuevo: es aplicar la regla del 2 y la regla del 3 a la vez, y pedir que las dos den que sí."

explicacion: |
  Es la ventaja (y la definición) de esta regla: no hay nada nuevo que
  memorizar más allá de combinar las dos anteriores.
```

## Sección: divisibilidad/regla-del-7-opcional (28 preguntas)

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_7", "completar"]

variables:
  numero: random(100, 999)

respuesta: "duplicar"
tipo: completar
respuestas_validas:
  - "duplicar"
  - "duplicarlo"
  - "doblar"

enunciado: "En la regla del 7, tras separar la última cifra, hay que ___ esa cifra por 2."

explicacion: |
  El algoritmo requiere multiplicar por 2 la cifra separada.
```

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_7", "completar"]

variables:
  numero: random(100, 999)

respuesta: "restar"
tipo: completar
respuestas_validas:
  - "restar"
  - "restarle"

enunciado: "Una vez duplicada la última cifra, se debe ___ ese valor al número que queda sin la última cifra."

explicacion: |
  La operación clave es la resta del valor duplicado al resto truncado.
```

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_7", "completar"]

variables:
  numero: random(100, 999)

respuesta: "multiplo"
tipo: completar
respuestas_validas:
  - "multiplo"
  - "múltiplo"
  - "multiplo de 7"
  - "múltiplo de 7"

enunciado: "Si el resultado final del algoritmo es 0 o un ___, el número original es divisible por 7."

explicacion: |
  La condición de divisibilidad se cumple si el residuo final es múltiplo de 7.
```

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_7", "ejercicio"]

variables:
  numero: 140
  u1: 0
  r1: 14
  d1: 0
  res1: 14
  u2: 4
  r2: 1
  d2: 8
  res2: -7

respuesta: "si"
tipo: input

enunciado: "Aplicá la regla del 7 a {numero}. Paso 1: 14 - 0 = 14. Paso 2: 1 - 8 = -7. ¿Es divisible por 7? (escribí 'si' o 'no')"

explicacion: |
  -7 es múltiplo de 7, por lo tanto 140 también lo es.
```

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_7", "ejercicio"]

variables:
  numero: 210
  u1: 0
  r1: 21
  d1: 0
  res1: 21
  u2: 1
  r2: 2
  d2: 2
  res2: 0

respuesta: "si"
tipo: input

enunciado: "Aplicá la regla del 7 a {numero}. Paso 1: 21 - 0 = 21. Paso 2: 2 - 2 = 0. ¿Es divisible por 7? (escribí 'si' o 'no')"

explicacion: |
  0 es múltiplo de 7, por lo tanto 210 también lo es.
```

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_7", "ejercicio"]

variables:
  numero: 15
  u1: 5
  r1: 1
  d1: 10
  res1: -9

respuesta: "no"
tipo: input

enunciado: "Aplicá la regla del 7 a {numero}. Paso 1: 1 - 10 = -9. ¿Es divisible por 7? (escribí 'si' o 'no')"

explicacion: |
  -9 no es múltiplo de 7, por lo tanto 15 no lo es.
```

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_7", "ejercicio"]

variables:
  numero: 301
  u1: 1
  r1: 30
  d1: 2
  res1: 28

respuesta: 28
tipo: input

enunciado: "Para el número {numero}, ¿cuál es el resultado tras restar el doble de la última cifra al resto?"

explicacion: |
  30 - 2 = 28.
```

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_7", "ejercicio"]

variables:
  numero: 301
  res1: 28
  u2: 8
  r2: 2
  d2: 16
  res2: -14

respuesta: -14
tipo: input

enunciado: "Continuando con {res1}, ¿cuál es el siguiente resultado al restar el doble de la última cifra (8) al resto (2)?"

explicacion: |
  2 - 16 = -14.
```

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_7", "decision"]

variables:
  resultado: -14

respuesta: "si"
tipo: input

enunciado: "Si el resultado del algoritmo es {resultado}, ¿es divisible por 7? (escribí 'si' o 'no')"

explicacion: |
  -14 es múltiplo de 7 (-2 * 7), por lo tanto sí.
```

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_7", "teoria"]

respuesta: "7"
tipo: completar
respuestas_validas:
  - "7"
  - "siete"

enunciado: "La regla que consiste en duplicar la última cifra y restarla al resto se aplica para verificar la divisibilidad por el número ___."

explicacion: |
  Es la regla específica para el divisor 7.
```

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_7", "teoria"]

respuesta: "separar"
tipo: completar
respuestas_validas:
  - "separar"
  - "aislar"

enunciado: "El primer paso de la regla del 7 es ___ la última cifra del número."

explicacion: |
  Se debe aislar la unidad para procesarla.
```

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_7", "teoria"]

respuesta: "2"
tipo: completar
respuestas_validas:
  - "2"
  - "dos"

enunciado: "La última cifra se multiplica por el número ___."

explicacion: |
  El factor de multiplicación es 2.
```

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_7", "teoria"]

respuesta: "resta"
tipo: completar
respuestas_validas:
  - "resta"
  - "restar"

enunciado: "El valor duplicado se ___ al número que queda sin la última cifra."

explicacion: |
  La operación es una resta.
```

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_7", "teoria"]

respuesta: "multiplo"
tipo: completar
respuestas_validas:
  - "multiplo"
  - "múltiplo"

enunciado: "Si el resultado final es 0 o un ___, la divisibilidad está confirmada."

explicacion: |
  La condición es ser múltiplo de 7.
```

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_7", "ejercicio"]

variables:
  numero: 931
  u1: 1
  r1: 93
  d1: 2
  res1: 91

respuesta: 91
tipo: input

enunciado: "Para {numero}, calculá {r1} - {d1}."

explicacion: |
  93 - 2 = 91.
```

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_7", "ejercicio"]

variables:
  res1: 91
  u2: 1
  r2: 9
  d2: 2
  res2: 7

respuesta: 7
tipo: input

enunciado: "Para {res1}, calculá {r2} - {d2}."

explicacion: |
  9 - 2 = 7.
```

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_7", "decision"]

variables:
  resultado: 7

respuesta: "si"
tipo: input

enunciado: "El resultado final es {resultado}. ¿Es divisible por 7? (escribí 'si' o 'no')"

explicacion: |
  7 es múltiplo de 7.
```

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "basico"
  tags: ["regla_del_7", "verificacion"]

variables:
  n: random(100, 999)
  es_divisible: (n % 7 == 0)

respuesta: falso
tipo: vf

enunciado: "El número {n} es divisible por 7."

explicacion: |
  Para verificar si un número es divisible por 7, aplicamos la regla:
  1. Separamos la última cifra.
  2. Duplicamos esa cifra.
  3. Restamos el doble al número restante.
  Si el resultado es divisible por 7, el original también lo es.
  En este caso, {n} no lo es.
```

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "intermedio"
  tags: ["regla_del_7", "algoritmo"]

variables:
  cifra_ultima: random(1, 9)
  resto: random(10, 99)
  numero: resto * 10 + cifra_ultima
  doble: cifra_ultima * 2
  nuevo_numero: resto - doble
  es_divisible: (nuevo_numero % 7 == 0)

respuesta: verdadero
tipo: vf

enunciado: "Si aplicamos la regla del 7 al número {numero}, el resultado intermedio es {nuevo_numero}, que es divisible por 7."

explicacion: |
  La regla del 7 consiste en restar el doble de la última cifra al resto del número.
  Aquí: {numero} -> {resto} - {doble} = {nuevo_numero}.
  Como {nuevo_numero} es múltiplo de 7, {numero} también lo es.
```

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "intermedio"
  tags: ["regla_del_7", "verificacion"]

variables:
  n: random(1000, 9999)
  es_divisible: (n % 7 == 0)

respuesta: falso
tipo: vf

enunciado: "El número {n} es divisible por 7."

explicacion: |
  Aplicamos la regla iterativa. Si el resultado final no es 0 o múltiplo de 7, el número original no es divisible.
  En este caso, {n} no lo es.
```

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "intermedio"
  tags: ["regla_del_7", "verificacion"]

variables:
  n: random(100, 999)
  es_divisible: (n % 7 == 0)

respuesta: falso
tipo: vf

enunciado: "El número {n} es divisible por 7."

explicacion: |
  Al aplicar la regla de divisibilidad por 7, el resultado final no es 0 ni múltiplo de 7.
  Por lo tanto, {n} no es divisible por 7.
```

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "intermedio"
  tags: ["regla_del_7", "identificacion"]

variables:
  base: random(10, 20)
  n: base * 7
  es_divisible: verdadero

respuesta: verdadero
tipo: vf

enunciado: "El número {n} es divisible por 7."

explicacion: |
  {n} es el producto de {base} por 7, por lo tanto es múltiplo de 7.
  La regla del 7 confirma esto al dar un resultado final múltiplo de 7.
```

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "intermedio"
  tags: ["regla_del_7", "concepto"]

variables:
  n: random(100, 999)
  es_divisible: (n % 7 == 0)

respuesta: falso
tipo: vf

enunciado: "La regla del 7 solo se aplica a números positivos."

explicacion: |
  Falso. La regla de divisibilidad por 7 se aplica a cualquier entero.
  Para negativos, se puede aplicar la regla al valor absoluto o considerar el signo al final.
```

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "intermedio"
  tags: ["regla_del_7", "verificacion"]

variables:
  base: random(100, 142)
  n: base * 7
  es_divisible: verdadero

respuesta: verdadero
tipo: vf

enunciado: "El número {n} es divisible por 7."

explicacion: |
  {n} es {base} × 7, por lo tanto es divisible.
  La regla del 7 confirmará esto tras iterar.
```

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "intermedio"
  tags: ["regla_del_7", "identificacion"]

variables:
  base: random(10, 20)
  n: base * 7
  es_divisible: verdadero

respuesta: verdadero
tipo: vf

enunciado: "El número {n} es un múltiplo de 7."

explicacion: |
  {n} se obtiene multiplicando {base} por 7, por lo tanto es múltiplo de 7.
```

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "intermedio"
  tags: ["regla_del_7", "verificacion"]

variables:
  n: random(100, 999)
  es_divisible: (n % 7 == 0)

respuesta: falso
tipo: vf

enunciado: "El número {n} es divisible por 7."

explicacion: |
  Al aplicar la regla del 7, el resultado final no es 0 ni múltiplo de 7.
```

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "intermedio"
  tags: ["regla_del_7", "identificacion"]

variables:
  base: random(10, 20)
  n: base * 7
  es_divisible: verdadero

respuesta: verdadero
tipo: vf

enunciado: "El número {n} es divisible por 7."

explicacion: |
  {n} es múltiplo de 7.
```

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "intermedio"
  tags: ["regla_del_7", "verificacion"]

variables:
  n: random(100, 999)
  es_divisible: (n % 7 == 0)

respuesta: falso
tipo: vf

enunciado: "El número {n} es divisible por 7."

explicacion: |
  Al aplicar la regla del 7, el resultado final no es 0 ni múltiplo de 7.
```
