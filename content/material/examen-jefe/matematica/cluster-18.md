# Examen jefe — [PENDIENTE #618]

> Logro #618. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **112 preguntas totales** en 5/5 secciones.

---

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

## Sección: divisibilidad/regla-del-10 (20 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "regla_del_10"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_10"]

variables:
  n: random(10, 999)
  resto: n - floor(n / 10) * 10

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Es {n} divisible por 10?"

explicacion: |
  Se mira sólo la última cifra: si es 0, el número es divisible por 10.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_10"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_10"]

variables:
  n: random(1000, 98765)
  resto: n - floor(n / 10) * 10

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Es {n} divisible por 10?"

explicacion: |
  Con números grandes la regla no cambia: sigue alcanzando con la última
  cifra.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_10"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_10"]

variables:
  base: random(5, 400) * 10
  otro1: base + 1
  otro2: base + 5

respuesta: base
tipo: mc
opciones_explicitas:
  - base
  - otro1
  - otro2

enunciado: "¿Cuál de estos tres números es divisible por 10?"

explicacion: |
  Sólo hay que mirar si la última cifra es 0.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_10"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_10"]

variables:
  base: random(5, 400) * 10 + 5
  otro1: random(5, 400) * 10
  otro2: random(5, 400) * 10

respuesta: base
tipo: mc
opciones_explicitas:
  - base
  - otro1
  - otro2

enunciado: "¿Cuál de estos tres números NO es divisible por 10?"

explicacion: |
  {base} termina en 5, no en 0: cumple la regla del 5 pero no la del 10.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_10"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_10"]

variables:
  prefijo: random(1, 99)

tipo: completar
enunciado: "El número {prefijo}_ (falta la última cifra) tiene que ser divisible por 10. Completá la única cifra válida."
respuestas_validas:
  - 0

explicacion: |
  Sólo el 0 sirve como última cifra.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_10"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_10", "comparar_reglas"]

respuesta: verdadero
tipo: vf

enunciado: "Si un número es divisible por 10, también es divisible por 2."

explicacion: |
  Como 10 = 2 × 5, todo múltiplo de 10 es también múltiplo de 2.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_10"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_10", "comparar_reglas"]

respuesta: verdadero
tipo: vf

enunciado: "Si un número es divisible por 10, también es divisible por 5."

explicacion: |
  Como 10 = 2 × 5, todo múltiplo de 10 es también múltiplo de 5.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_10"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_10", "comparar_reglas"]

respuesta: falso
tipo: vf

enunciado: "Si un número es divisible por 5, siempre es divisible por 10 también."

explicacion: |
  No es cierto: un número puede terminar en 5 (divisible por 5) sin
  terminar en 0 (no divisible por 10). Ejemplo: 25.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_10"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_10"]

variables:
  d: random(1, 99)
  n: d * 10

respuesta: 0
tipo: input
tolerancia_abs: 0

enunciado: "El número {n} es divisible por 10. ¿Cuál es su última cifra?"

explicacion: |
  La única cifra posible es el 0.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_10"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_10", "problema"]

variables:
  n: random(10, 500)
  resto: n - floor(n / 10) * 10

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Se puede pagar exactamente ${n} usando sólo billetes de $10, sin vuelto?"

explicacion: |
  Sólo si {n} es divisible por 10.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_10"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_10"]

variables:
  n: random(1, 90)
  dividendo: n * 10

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {dividendo} ÷ 10?"

explicacion: |
  Dividir por 10 es sacarle el último cero al número.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_10"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_10", "orden"]

tipo: ordenar
enunciado: "Ordená estos números de menor a mayor: son todos divisibles por 10."
opciones_explicitas:
  - "90"
  - "20"
  - "60"
  - "40"
respuesta_orden: ["20", "40", "60", "90"]

explicacion: |
  Los cuatro terminan en 0; sólo hace falta ordenarlos por tamaño.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_10"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_10"]

variables:
  a: random(10, 500) * 10
  b: random(10, 500) * 10 + 3
  c: random(10, 500) * 10

respuesta: b
tipo: mc
opciones_explicitas:
  - a
  - b
  - c

enunciado: "De estos tres números, ¿cuál es el único que NO es divisible por 10?"

explicacion: |
  Hay que revisar la última cifra de cada uno.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_10"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_10", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Todos los resultados de la tabla del 10 son números divisibles por 10."

explicacion: |
  La tabla del 10 (10, 20, 30...) es, exactamente, la lista de los números
  divisibles por 10.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_10"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_10"]

variables:
  n: random(1, 90) * 10

tipo: completar
enunciado: "Completá el próximo múltiplo de 10 después de {n}."
respuestas_validas:
  - n + 10

explicacion: |
  Los múltiplos de 10 van de 10 en 10.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_10"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_10"]

variables:
  n: random(1, 999)

respuesta: verdadero
tipo: vf

enunciado: "¿Es cierto que {n} × 10 siempre da un número divisible por 10?"

explicacion: |
  Multiplicar por 10 agrega un cero al final, así que el resultado siempre
  termina en 0.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_10"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_10"]

variables:
  a: random(1, 100) * 10
  b: random(1, 100) * 10

respuesta: verdadero
tipo: vf

enunciado: "¿Es {a} + {b} siempre divisible por 10?"

explicacion: |
  La suma de dos múltiplos de 10 sigue siendo múltiplo de 10.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_10"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_10"]

variables:
  n: random(10, 999)
  ultima_cifra: n - floor(n / 10) * 10
  resto: n - floor(n / 10) * 10

respuesta: (resto == 0)
tipo: vf

enunciado: "La última cifra de {n} es {ultima_cifra}. ¿Eso alcanza para asegurar que {n} es divisible por 10?"

explicacion: |
  Alcanza con esa única cifra: sólo si es 0, {n} es divisible por 10.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_10"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_10", "problema"]

variables:
  n: random(10, 500)
  resto: n - floor(n / 10) * 10

respuesta: (resto == 0)
tipo: vf

enunciado: "Los huevos se venden en cajas cerradas de 10. ¿Se pueden comprar exactamente {n} huevos usando sólo cajas completas?"

explicacion: |
  Sólo si {n} es múltiplo de 10.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_10"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_10", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La regla del 10 es, en el fondo, cumplir la regla del 2 y la regla del 5 al mismo tiempo."

explicacion: |
  Como 10 = 2 × 5, no hace falta una regla nueva: es la intersección de
  las dos anteriores.
```

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

## Sección: ecuacion-primer-grado (32 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_primer_grado"
  nivel: "basico"
  tags: ["deshacer_suma"]

variables:
  a: random(1, 30)
  c: random(31, 80)

respuesta: c - a
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: x + {a} = {c}. ¿Cuánto vale x?"

pasos:
  - "Restar {a} a los dos lados: x = {c} − {a} = {c - a}"

explicacion: |
  Para deshacer una suma, se resta el mismo valor a los dos lados de la
  ecuación.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_primer_grado"
  nivel: "basico"
  tags: ["deshacer_suma"]

variables:
  a: random(1, 15)
  c: random(1, 50)

respuesta: c - a
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: x + {a} = {c}. ¿Cuánto vale x?"

explicacion: |
  x = {c} − {a}.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_primer_grado"
  nivel: "basico"
  tags: ["deshacer_resta"]

variables:
  a: random(1, 30)
  c: random(1, 50)

respuesta: c + a
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: x − {a} = {c}. ¿Cuánto vale x?"

pasos:
  - "Sumar {a} a los dos lados: x = {c} + {a} = {c + a}"

explicacion: |
  Para deshacer una resta, se suma el mismo valor a los dos lados.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_primer_grado"
  nivel: "intermedio"
  tags: ["deshacer_resta", "orden"]

variables:
  a: random(31, 80)
  c: random(1, 30)

respuesta: a - c
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: {a} − x = {c}. ¿Cuánto vale x?"

pasos:
  - "x es el que resta acá: {a} − {c} = {a - c}"

explicacion: |
  Cuando la x resta (en vez de ser restada), x = {a} − {c} — no
  {c} − {a}, que sería el orden opuesto.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_primer_grado"
  nivel: "basico"
  tags: ["deshacer_multiplicacion"]

variables:
  a: random(2, 12)
  sol: random(1, 20)
  c: a * sol

respuesta: c / a
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: {a}x = {c}. ¿Cuánto vale x?"

pasos:
  - "Dividir los dos lados por {a}: x = {c} / {a} = {c / a}"

explicacion: |
  Para deshacer una multiplicación, se divide por el mismo valor a los
  dos lados.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_primer_grado"
  nivel: "basico"
  tags: ["deshacer_multiplicacion"]

variables:
  a: random(2, 20)
  sol: random(1, 15)
  c: a * sol

respuesta: c / a
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: {a}x = {c}. ¿Cuánto vale x?"

explicacion: |
  x = {c} / {a}.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_primer_grado"
  nivel: "basico"
  tags: ["deshacer_division"]

variables:
  a: random(2, 15)
  c: random(1, 20)

respuesta: a * c
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: x / {a} = {c}. ¿Cuánto vale x?"

pasos:
  - "Multiplicar los dos lados por {a}: x = {c} × {a} = {a * c}"

explicacion: |
  Para deshacer una división, se multiplica por el mismo valor a los dos
  lados.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_primer_grado"
  nivel: "intermedio"
  tags: ["deshacer_multiplicacion", "signos"]

variables:
  a: random(2, 12)
  sol: random(1, 15)
  c: (-a) * sol

respuesta: c / (-a)
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: −{a}x = {c}. ¿Cuánto vale x?"

pasos:
  - "Dividir los dos lados por −{a}: x = {c} / (−{a}) = {c / (-a)}"

explicacion: |
  Dividir por un número negativo también funciona, pero hay que arrastrar
  el signo con cuidado.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_primer_grado"
  nivel: "intermedio"
  tags: ["dos_pasos"]

variables:
  a: random(2, 10)
  b: random(1, 20)
  sol: random(1, 20)
  c: a * sol + b

respuesta: (c - b) / a
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: {a}x + {b} = {c}. ¿Cuánto vale x?"

pasos:
  - "Restar {b}: {a}x = {c} − {b} = {c - b}"
  - "Dividir por {a}: x = {c - b} / {a} = {(c - b) / a}"

explicacion: |
  Primero se deshace la suma, después la multiplicación — orden inverso
  a como está armada la ecuación.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_primer_grado"
  nivel: "intermedio"
  tags: ["dos_pasos"]

variables:
  a: random(2, 15)
  b: random(1, 30)
  sol: random(1, 25)
  c: a * sol + b

respuesta: (c - b) / a
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: {a}x + {b} = {c}. ¿Cuánto vale x?"

explicacion: |
  x = ({c} − {b}) / {a}.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_primer_grado"
  nivel: "intermedio"
  tags: ["dos_pasos", "signos"]

variables:
  a: random(2, 10)
  b: random(1, 20)
  sol: random(5, 25)
  c: a * sol - b

respuesta: (c + b) / a
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: {a}x − {b} = {c}. ¿Cuánto vale x?"

pasos:
  - "Sumar {b}: {a}x = {c} + {b} = {c + b}"
  - "Dividir por {a}: x = {c + b} / {a} = {(c + b) / a}"

explicacion: |
  Primero se deshace la resta (sumando), después la multiplicación.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_primer_grado"
  nivel: "intermedio"
  tags: ["dos_pasos", "orden"]

variables:
  a: random(2, 10)
  b: random(1, 20)
  sol: random(1, 20)
  c: b + a * sol

respuesta: (c - b) / a
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: {b} + {a}x = {c}. ¿Cuánto vale x?"

explicacion: |
  Da lo mismo el orden en que están escritos los términos: se resta {b} y
  después se divide por {a}, igual que si el término con x estuviera
  primero.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_primer_grado"
  nivel: "avanzado"
  tags: ["dos_pasos", "signos"]

variables:
  a: random(2, 8)
  b: random(1, 15)
  sol: random(-15, -1)
  c: a * sol + b

respuesta: (c - b) / a
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: {a}x + {b} = {c}. ¿Cuánto vale x?"

explicacion: |
  La misma fórmula funciona aunque la solución sea negativa:
  x = ({c} − {b}) / {a}.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_primer_grado"
  nivel: "avanzado"
  tags: ["dos_pasos", "signos"]

variables:
  a: random(2, 10)
  b: random(1, 20)
  sol: random(-20, -1)
  c: a * sol + b

respuesta: (c - b) / a
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: {a}x + {b} = {c}. ¿Cuánto vale x?"

explicacion: |
  x = ({c} − {b}) / {a}.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_primer_grado"
  nivel: "intermedio"
  tags: ["dos_pasos", "problema"]

variables:
  precio_km: random(2, 10)
  bajada_bandera: random(5, 20)
  sol: random(1, 30)
  total: precio_km * sol + bajada_bandera

respuesta: (total - bajada_bandera) / precio_km
tipo: input
tolerancia_abs: 0

enunciado: "Un remís cobra {bajada_bandera} de bajada de bandera más {precio_km} por cada km. Si el viaje costó {total} en total, ¿cuántos km recorrió?"

pasos:
  - "Plantear: {precio_km} × km + {bajada_bandera} = {total}"
  - "Despejar: km = ({total} − {bajada_bandera}) / {precio_km} = {(total - bajada_bandera) / precio_km}"

explicacion: |
  El planteo es exactamente {precio_km}x + {bajada_bandera} = {total}, la
  misma estructura que las ecuaciones anteriores, con nombres distintos.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_primer_grado"
  nivel: "avanzado"
  tags: ["distributiva"]

variables:
  a: random(2, 10)
  b: random(1, 15)
  sol: random(1, 20)
  c: a * (sol + b)

respuesta: c / a - b
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: {a}(x + {b}) = {c}. ¿Cuánto vale x?"

pasos:
  - "Distribuir: {a}x + {a}×{b} = {c} → {a}x + {a * b} = {c}"
  - "Despejar: x = {c}/{a} − {b} = {c / a - b}"

explicacion: |
  Hay que distribuir el {a} antes de poder despejar x.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_primer_grado"
  nivel: "avanzado"
  tags: ["distributiva", "signos"]

variables:
  a: random(2, 10)
  b: random(1, 15)
  sol: random(10, 30)
  c: a * (sol - b)

respuesta: c / a + b
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: {a}(x − {b}) = {c}. ¿Cuánto vale x?"

pasos:
  - "Distribuir: {a}x − {a * b} = {c}"
  - "Despejar: x = {c}/{a} + {b} = {c / a + b}"

explicacion: |
  Al distribuir, el signo de adentro del paréntesis se conserva: −{a}×{b}.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_primer_grado"
  nivel: "avanzado"
  tags: ["distributiva", "signos", "orden"]

variables:
  a: random(2, 8)
  b: random(20, 40)
  sol: random(1, 15)
  c: a * (b - sol)

respuesta: b - c / a
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: {a}({b} − x) = {c}. ¿Cuánto vale x?"

pasos:
  - "Distribuir: {a}×{b} − {a}x = {c} → {a * b} − {a}x = {c}"
  - "Despejar: {a}x = {a * b} − {c}, x = ({a * b} − {c}) / {a} = {b - c / a}"

explicacion: |
  Acá la x queda restando adentro del paréntesis, así que al distribuir
  el signo negativo cae sobre el término con x, no sobre {b}.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_primer_grado"
  nivel: "intermedio"
  tags: ["dos_lados"]

variables:
  a: random(4, 10)
  d: random(1, 3)
  b: random(1, 20)
  sol: random(1, 20)
  e: (a - d) * sol + b

respuesta: (e - b) / (a - d)
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: {a}x + {b} = {d}x + {e}. ¿Cuánto vale x?"

pasos:
  - "Juntar las x de un lado: {a}x − {d}x = {e} − {b} → {a - d}x = {e - b}"
  - "Despejar: x = {e - b} / {a - d} = {(e - b) / (a - d)}"

explicacion: |
  Se resta {d}x a los dos lados para juntar todos los términos con x en
  el mismo lado.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_primer_grado"
  nivel: "intermedio"
  tags: ["dos_lados"]

variables:
  a: random(6, 12)
  d: random(1, 5)
  b: random(1, 15)
  sol: random(1, 15)
  e: (a - d) * sol + b

respuesta: (e - b) / (a - d)
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: {a}x + {b} = {d}x + {e}. ¿Cuánto vale x?"

explicacion: |
  x = ({e} − {b}) / ({a} − {d}).
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_primer_grado"
  nivel: "avanzado"
  tags: ["dos_lados", "signos"]

variables:
  a: random(6, 12)
  d: random(1, 4)
  b: random(1, 15)
  sol: random(5, 20)
  e: (a - d) * sol - b

respuesta: (e + b) / (a - d)
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: {a}x − {b} = {d}x + {e}. ¿Cuánto vale x?"

pasos:
  - "Juntar las x: {a - d}x = {e} + {b} = {e + b}"
  - "Despejar: x = {e + b} / {a - d} = {(e + b) / (a - d)}"

explicacion: |
  Al mover −{b} al otro lado, cruza como +{b}.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_primer_grado"
  nivel: "avanzado"
  tags: ["dos_lados", "signos"]

variables:
  a: random(1, 4)
  d: random(6, 10)
  sol: random(1, 10)
  b: random(100, 150)
  e: (a - d) * sol + b

respuesta: (e - b) / (a - d)
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: {a}x + {b} = {d}x + {e}. ¿Cuánto vale x?"

explicacion: |
  Acá {d} es mayor que {a}, así que ({a}−{d}) da negativo — la fórmula
  funciona igual, sólo hay que llevar el signo con cuidado.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_primer_grado"
  nivel: "avanzado"
  tags: ["dos_lados", "problema"]

variables:
  fijo_a: random(1, 20)
  precio_a: random(3, 10)
  precio_b: random(1, 2)
  sol: random(1, 20)
  fijo_b: (precio_a - precio_b) * sol + fijo_a

respuesta: (fijo_b - fijo_a) / (precio_a - precio_b)
tipo: input
tolerancia_abs: 0

enunciado: "El Plan A cuesta {fijo_a} fijos más {precio_a} por unidad. El Plan B cuesta {fijo_b} fijos más {precio_b} por unidad. ¿A partir de cuántas unidades cuestan lo mismo?"

pasos:
  - "Igualar: {precio_a}x + {fijo_a} = {precio_b}x + {fijo_b}"
  - "Despejar: x = ({fijo_b} − {fijo_a}) / ({precio_a} − {precio_b})"

explicacion: |
  Es la misma ecuación con variable en los dos lados, aplicada a un
  problema real: igualar costo total de dos planes.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_primer_grado"
  nivel: "intermedio"
  tags: ["dos_pasos"]

variables:
  a: random(3, 9)
  b: random(1, 25)
  sol: random(1, 30)
  c: a * sol + b

respuesta: (c - b) / a
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: {a}x + {b} = {c}. ¿Cuánto vale x?"

explicacion: |
  x = ({c} − {b}) / {a}.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_primer_grado"
  nivel: "basico"
  tags: ["verificacion", "verdadero_falso"]

variables:
  a: random(2, 10)
  b: random(1, 20)
  sol: random(1, 20)
  c: a * sol + b

respuesta: (a * sol + b) == c
tipo: vf

enunciado: "¿x = {sol} es solución de {a}x + {b} = {c}?"

explicacion: |
  Se reemplaza x por {sol} en la ecuación original y se verifica si los
  dos lados dan el mismo número.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_primer_grado"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  a: random(2, 10)
  b: random(1, 20)
  sol: random(1, 20)
  c: a * sol + b
  error: uno_de([0, 0, 1, -1, 2])
  propuesto: sol + error

respuesta: (a * propuesto + b) == c
tipo: vf

enunciado: "¿x = {propuesto} es solución de {a}x + {b} = {c}?"

explicacion: |
  Reemplazando x por {propuesto}: {a}×{propuesto}+{b} = {a * propuesto + b}, y el otro lado vale {c}.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_primer_grado"
  nivel: "intermedio"
  tags: ["verificacion", "dos_lados", "verdadero_falso"]

variables:
  a: random(4, 10)
  d: random(1, 3)
  b: random(1, 15)
  sol: random(1, 15)
  e: (a - d) * sol + b
  error: uno_de([0, 0, 1, -1])
  propuesto: sol + error

respuesta: (a * propuesto + b) == (d * propuesto + e)
tipo: vf

enunciado: "¿x = {propuesto} es solución de {a}x + {b} = {d}x + {e}?"

explicacion: |
  Se reemplaza x por {propuesto} en los dos lados y se comparan.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_primer_grado"
  nivel: "avanzado"
  tags: ["verificacion", "distributiva", "verdadero_falso"]

variables:
  a: random(2, 10)
  b: random(1, 15)
  sol: random(1, 20)
  c: a * (sol + b)
  error: uno_de([0, 0, 1, -1])
  propuesto: sol + error

respuesta: (a * (propuesto + b)) == c
tipo: vf

enunciado: "¿x = {propuesto} es solución de {a}(x + {b}) = {c}?"

explicacion: |
  Se reemplaza x por {propuesto} adentro del paréntesis antes de
  distribuir y comparar.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_primer_grado"
  nivel: "basico"
  tags: ["procedimiento", "opcion_multiple"]

variables:
  a: random(2, 10)
  b: random(1, 20)
  c: random(21, 60)

respuesta: c - b
tipo: mc
opciones_explicitas:
  - c - b
  - c + b
  - c * b

enunciado: "Para resolver {a}x + {b} = {c}, el primer paso es restar {b} a los dos lados. ¿A qué queda igual {a}x?"

explicacion: |
  {a}x + {b} − {b} = {c} − {b}, así que {a}x = {c} − {b}.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_primer_grado"
  nivel: "basico"
  tags: ["dos_pasos"]

variables:
  b: random(1, 30)
  sol: random(1, 40)
  c: sol + b

respuesta: c - b
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: x + {b} = {c}. ¿Cuánto vale x?"

explicacion: |
  Cuando no hay número escrito multiplicando a x, el coeficiente es 1 —
  se resuelve igual que los casos con coeficiente explícito.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_primer_grado"
  nivel: "intermedio"
  tags: ["problema"]

variables:
  ya_tiene: random(100, 500)
  ahorro_mensual: random(20, 100)
  sol: random(1, 24)
  meta: ahorro_mensual * sol + ya_tiene

respuesta: (meta - ya_tiene) / ahorro_mensual
tipo: input
tolerancia_abs: 0

enunciado: "Alguien ya tiene ahorrados {ya_tiene} y ahorra {ahorro_mensual} por mes. ¿En cuántos meses llega a {meta}?"

pasos:
  - "Plantear: {ahorro_mensual} × meses + {ya_tiene} = {meta}"
  - "Despejar: meses = ({meta} − {ya_tiene}) / {ahorro_mensual}"

explicacion: |
  Mismo planteo que a·x + b = c, con "meses" en el lugar de x.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_primer_grado"
  nivel: "avanzado"
  tags: ["dos_pasos", "signos"]

variables:
  a: random(2, 8)
  b: random(20, 40)
  sol: random(10, 30)
  c: a * sol - b

respuesta: (c + b) / a
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: {a}x − {b} = {c}. ¿Cuánto vale x?"

explicacion: |
  x = ({c} + {b}) / {a} — el signo de {c} puede dar negativo sin que eso
  afecte el procedimiento.
```

