# Matemática — Probabilidad simple (cuestionario, 25 preguntas VBLang)

> Tema: `D8`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es la probabilidad

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_simple"
  nivel: "basico"
  tags: ["probabilidad", "vocabulario"]

enunciado: "¿Qué mide la probabilidad de un evento?"
tipo: mc
opciones_explicitas:
  - "Qué tan posible es que ocurra ese evento, con un número entre 0 (imposible) y 1 (seguro)"
  - "Cuántas veces ya ocurrió ese evento en el pasado"
  - "El tiempo que tarda en ocurrir ese evento"
respuesta: "Qué tan posible es que ocurra ese evento, con un número entre 0 (imposible) y 1 (seguro)"

explicacion: |
  0 significa que nunca puede pasar; 1 significa que siempre pasa.
```

### 2 — Completar: la fórmula de probabilidad simple

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_simple"
  nivel: "basico"
  tags: ["probabilidad", "completar"]

tipo: completar
enunciado: "Completá: P(evento) = casos ___ / casos totales."
respuestas_validas:
  - "favorables"

explicacion: |
  Los casos favorables son los que cumplen la condición del evento.
```

### 3 — Qué es el espacio muestral

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_simple"
  nivel: "intermedio"
  tags: ["probabilidad", "vocabulario"]

enunciado: "¿Qué es el espacio muestral de un experimento?"
tipo: mc
opciones_explicitas:
  - "El conjunto de TODOS los resultados posibles de ese experimento"
  - "Sólo el resultado que finalmente ocurrió"
  - "La cantidad de veces que se repite el experimento"
respuesta: "El conjunto de TODOS los resultados posibles de ese experimento"

explicacion: |
  Al tirar un dado, el espacio muestral es {1, 2, 3, 4, 5, 6}.
```

### 4 — Qué es un evento

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_simple"
  nivel: "intermedio"
  tags: ["probabilidad", "vocabulario"]

enunciado: "¿Qué es un evento, en términos de probabilidad?"
tipo: mc
opciones_explicitas:
  - "Un subconjunto del espacio muestral (un conjunto de resultados que cumplen cierta condición)"
  - "El espacio muestral completo, siempre"
  - "Un número entre 0 y 100 fijo"
respuesta: "Un subconjunto del espacio muestral (un conjunto de resultados que cumplen cierta condición)"

explicacion: |
  Es el mismo vocabulario de conjuntos que ya se usó en
  `../diagramas-de-venn/`.
```

### 5 — Problema: probabilidad de sacar par en un dado

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_simple"
  nivel: "intermedio"
  tags: ["probabilidad", "problema"]

respuesta: 0.5
tipo: input
tolerancia_abs: 0.01

enunciado: "Al tirar un dado de 6 caras, ¿cuál es la probabilidad de que salga un número PAR (2, 4 o 6)?"

pasos:
  - "Casos favorables: {2, 4, 6} = 3. Casos totales: 6."
  - "P = 3/6 = 0,5"

explicacion: |
  La mitad de los números del 1 al 6 son pares.
```

### 6 — Problema: probabilidad de múltiplo de 3

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_simple"
  nivel: "intermedio"
  tags: ["probabilidad", "problema"]

respuesta: redondear(2 / 6, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "Al tirar un dado de 6 caras, ¿cuál es la probabilidad de que salga un múltiplo de 3 (3 o 6)?"

pasos:
  - "Casos favorables: {3, 6} = 2. Casos totales: 6."
  - "P = 2/6 = {redondear(2 / 6, 3)}"

explicacion: |
  Sólo el 3 y el 6, entre el 1 y el 6, son múltiplos de 3.
```

### 7 — Problema: probabilidad de cara en una moneda

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_simple"
  nivel: "basico"
  tags: ["probabilidad", "problema"]

respuesta: 0.5
tipo: input

enunciado: "Al lanzar una moneda equilibrada, ¿cuál es la probabilidad de que salga cara?"

pasos:
  - "1 caso favorable (cara) sobre 2 casos totales (cara o ceca): P = 1/2 = 0,5"

explicacion: |
  Ambos resultados son igual de probables en una moneda equilibrada.
```

### 8 — Problema: expresar la probabilidad como fracción simplificada

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_simple"
  nivel: "avanzado"
  tags: ["probabilidad", "problema"]

variables:
  totales: uno_de([12, 18, 24])
  favorables: uno_de([4, 6])

respuesta: fraccion(favorables, totales)
tipo: input

enunciado: "En una bolsa hay {totales} bolitas en total, y {favorables} son rojas. Expresá la probabilidad de sacar una bolita roja como fracción simplificada (formato p/q)."

pasos:
  - "P = {favorables}/{totales}, simplificada = {fraccion(favorables, totales)}"

explicacion: |
  Se simplifica la fracción dividiendo numerador y denominador por su
  máximo común divisor.
```

### 9 — P=0 significa imposible

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_simple"
  nivel: "basico"
  tags: ["probabilidad"]

respuesta: verdadero
tipo: vf

enunciado: "Si la probabilidad de un evento es exactamente 0, ese evento es imposible: no tiene ningún caso favorable."

explicacion: |
  Por ejemplo, sacar un 7 en un dado normal de 6 caras.
```

### 10 — P=1 significa seguro

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_simple"
  nivel: "basico"
  tags: ["probabilidad"]

respuesta: verdadero
tipo: vf

enunciado: "Si la probabilidad de un evento es exactamente 1, ese evento es seguro: todos los casos posibles lo cumplen."

explicacion: |
  Por ejemplo, sacar un número entre 1 y 6 en un dado de 6 caras.
```

### 11 — La suma de todas las probabilidades del espacio muestral da 1

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_simple"
  nivel: "avanzado"
  tags: ["probabilidad"]

respuesta: verdadero
tipo: vf

enunciado: "La suma de las probabilidades de TODOS los resultados posibles de un espacio muestral siempre da exactamente 1 (100%)."

explicacion: |
  Alguno de los resultados posibles tiene que ocurrir, así que la
  probabilidad total de que 'pase alguno' es 1.
```

### 12 — Completar: fórmula del complemento

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_simple"
  nivel: "intermedio"
  tags: ["probabilidad", "completar"]

tipo: completar
enunciado: "Completá: P(Ā) = 1 − ___."
respuestas_validas:
  - "P(A)"

explicacion: |
  La probabilidad de que NO ocurra A es 1 menos la probabilidad de que
  ocurra A.
```

### 13 — Problema: probabilidad del complemento

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_simple"
  nivel: "intermedio"
  tags: ["probabilidad", "problema"]

variables:
  p_a: uno_de([0.2, 0.3, 0.4, 0.6, 0.7])

respuesta: redondear(1 - p_a, 2)
tipo: input

enunciado: "Si la probabilidad de que llueva mañana es {p_a}, ¿cuál es la probabilidad de que NO llueva?"

pasos:
  - "P(no llueve) = 1 − {p_a} = {redondear(1 - p_a, 2)}"

explicacion: |
  Lluvia y no-lluvia son eventos complementarios: cubren entre los dos
  todo lo posible.
```

### 14 — Problema: bolillero con bolitas de colores

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_simple"
  nivel: "avanzado"
  tags: ["probabilidad", "problema"]

variables:
  rojas: random(3, 8)
  azules: random(3, 8)
  verdes: random(3, 8)

respuesta: redondear(rojas / (rojas + azules + verdes), 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "Una bolsa tiene {rojas} bolitas rojas, {azules} azules y {verdes} verdes. Si se saca una al azar, ¿cuál es la probabilidad de que sea roja?"

pasos:
  - "Total de bolitas = {rojas} + {azules} + {verdes} = {rojas + azules + verdes}"
  - "P(roja) = {rojas} / {rojas + azules + verdes} = {redondear(rojas / (rojas + azules + verdes), 3)}"

explicacion: |
  Los casos favorables son las bolitas rojas; los totales, todas las
  bolitas de la bolsa.
```

### 15 — Problema: probabilidad de sacar un as

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_simple"
  nivel: "intermedio"
  tags: ["probabilidad", "problema"]

respuesta: redondear(4 / 40, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "En un mazo de 40 cartas españolas (4 palos, 10 cartas cada uno), ¿cuál es la probabilidad de sacar un as (hay 4 ases en total)?"

pasos:
  - "P(as) = 4/40 = {redondear(4 / 40, 3)}"

explicacion: |
  Hay exactamente un as por palo, 4 en total sobre 40 cartas.
```

### 16 — Ordenar: pasos para calcular una probabilidad simple

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_simple"
  nivel: "intermedio"
  tags: ["probabilidad", "ordenar"]

enunciado: "Ordená los pasos para calcular la probabilidad de un evento simple."
tipo: ordenar
opciones_explicitas:
  - "El cociente entre ambos es la probabilidad del evento"
  - "Contar cuántos casos totales hay en el espacio muestral"
  - "Contar cuántos de esos casos son favorables al evento"
respuesta_orden: ["Contar cuántos casos totales hay en el espacio muestral", "Contar cuántos de esos casos son favorables al evento", "El cociente entre ambos es la probabilidad del evento"]
explicacion: |
  Sin los dos números (favorables y totales) no hay cociente que
  calcular.
```

### 17 — Aplicación real: pronóstico del tiempo

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_simple"
  nivel: "basico"
  tags: ["probabilidad", "aplicacion"]

enunciado: "Cuando un pronóstico dice '70% de probabilidad de lluvia', ¿qué significa ese número?"
tipo: mc
opciones_explicitas:
  - "Que, en condiciones similares, llovió el 70% de las veces (es una estimación de qué tan probable es que llueva, no una certeza)"
  - "Que va a llover exactamente el 70% del día"
  - "Que sólo va a llover en el 70% del territorio"
respuesta: "Que, en condiciones similares, llovió el 70% de las veces (es una estimación de qué tan probable es que llueva, no una certeza)"

explicacion: |
  Una probabilidad alta no es una garantía — sigue siendo posible que
  no llueva ese día en particular.
```

### 18 — Aplicación real: lotería

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_simple"
  nivel: "basico"
  tags: ["probabilidad", "aplicacion"]

enunciado: "¿Por qué la probabilidad de ganar el premio mayor de una lotería suele ser un número extremadamente chico (cercano a 0, pero no exactamente 0)?"
tipo: mc
opciones_explicitas:
  - "Porque hay muchísimos casos totales posibles y muy pocos (o uno solo) son favorables"
  - "Porque las loterías están diseñadas para que nadie pueda ganar nunca"
  - "Porque la probabilidad de ganar siempre es exactamente 0"
respuesta: "Porque hay muchísimos casos totales posibles y muy pocos (o uno solo) son favorables"

explicacion: |
  No es imposible (P=0), sólo muy poco probable — hay una diferencia
  real entre ambas cosas.
```

### 19 — Problema: probabilidad de NO sacar un color

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_simple"
  nivel: "avanzado"
  tags: ["probabilidad", "problema"]

variables:
  rojas: random(3, 10)
  azules: random(3, 10)

respuesta: redondear(azules / (rojas + azules), 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "Una bolsa tiene {rojas} bolitas rojas y {azules} azules (nada más). ¿Cuál es la probabilidad de que la bolita extraída NO sea roja?"

pasos:
  - "P(no roja) = P(azul) = {azules} / ({rojas}+{azules}) = {redondear(azules / (rojas + azules), 3)}"

explicacion: |
  Como sólo hay dos colores, 'no roja' es exactamente lo mismo que
  'azul'.
```

### 20 — La probabilidad nunca es negativa ni mayor a 1

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_simple"
  nivel: "intermedio"
  tags: ["probabilidad"]

respuesta: verdadero
tipo: vf

enunciado: "La probabilidad de cualquier evento siempre está entre 0 y 1 (inclusive) — nunca puede ser negativa ni mayor a 1."

explicacion: |
  Los casos favorables nunca pueden ser más que los casos totales, ni
  menos que cero.
```

### 21 — Problema: convertir probabilidad a porcentaje

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_simple"
  nivel: "basico"
  tags: ["probabilidad", "problema"]

variables:
  p: uno_de([0.25, 0.4, 0.6, 0.75])

respuesta: p * 100
tipo: input
unidad: "%"

enunciado: "Si la probabilidad de un evento es {p}, ¿a qué porcentaje equivale?"

pasos:
  - "{p} × 100 = {p * 100}%"

explicacion: |
  Multiplicar por 100 pasa de proporción (0 a 1) a porcentaje (0% a
  100%).
```

### 22 — Evento imposible vs. evento muy poco probable

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_simple"
  nivel: "avanzado"
  tags: ["probabilidad"]

respuesta: verdadero
tipo: vf

enunciado: "Un evento con probabilidad muy baja (por ejemplo, 0,0001) NO es lo mismo que un evento imposible (probabilidad exactamente 0) — sigue pudiendo ocurrir."

explicacion: |
  'Muy poco probable' y 'imposible' son categorías distintas, aunque
  en la vida cotidiana a veces se confundan.
```

### 23 — Problema: probabilidad con espacio muestral más grande

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_simple"
  nivel: "avanzado"
  tags: ["probabilidad", "problema"]

variables:
  numeros_totales: uno_de([20, 30, 50])
  multiplo: uno_de([4, 5])

respuesta: redondear(floor(numeros_totales / multiplo) / numeros_totales, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "Se elige al azar un número entre 1 y {numeros_totales}. ¿Cuál es la probabilidad de que sea múltiplo de {multiplo}?"

pasos:
  - "Cantidad de múltiplos de {multiplo} hasta {numeros_totales}: {floor(numeros_totales / multiplo)}"
  - "P = {floor(numeros_totales / multiplo)} / {numeros_totales} = {redondear(floor(numeros_totales / multiplo) / numeros_totales, 3)}"

explicacion: |
  Se cuentan los múltiplos de {multiplo} en ese rango, y se divide por
  el total de números posibles.
```

### 24 — Problema: probabilidad de un color específico con fracción

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_simple"
  nivel: "avanzado"
  tags: ["probabilidad", "problema"]

variables:
  total: uno_de([10, 15, 20, 25])
  favorables: uno_de([2, 5])

respuesta: fraccion(favorables, total)
tipo: input

enunciado: "Una ruleta tiene {total} casilleros iguales, {favorables} de ellos son de color dorado. Expresá la probabilidad de que caiga en dorado como fracción simplificada."

pasos:
  - "P = {favorables}/{total}, simplificada = {fraccion(favorables, total)}"

explicacion: |
  Simplificar la fracción no cambia el valor de la probabilidad, sólo
  la forma en que se escribe.
```

### 25 — Cierre: para qué sirve este bloque

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_simple"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve calcular la probabilidad simple de un evento?"
tipo: mc
opciones_explicitas:
  - "Para medir con un número qué tan posible es que ocurra un evento, a partir de casos favorables sobre casos totales"
  - "Sólo sirve para juegos de azar, sin ninguna otra aplicación"
  - "Sólo aplica cuando el espacio muestral tiene exactamente 6 resultados"
respuesta: "Para medir con un número qué tan posible es que ocurra un evento, a partir de casos favorables sobre casos totales"

explicacion: |
  Es la base directa de `../independencia-de-eventos-y-diagrama-de-arbol/`
  y `../probabilidad-compuesta/`, que combinan varios eventos simples
  como este.
```
