# Matemática — Leer un gráfico de torta (cuestionario, 23 preguntas VBLang)

> Tema: `D2c`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es un gráfico de torta

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_torta"
  nivel: "basico"
  tags: ["torta", "vocabulario"]

enunciado: "¿Qué es un gráfico de torta (o circular)?"
tipo: mc
opciones_explicitas:
  - "Un círculo dividido en porciones, donde cada una representa la proporción de una categoría sobre el total"
  - "Un gráfico que conecta puntos con líneas a lo largo del tiempo"
  - "Un gráfico donde cada categoría es una barra de distinta altura"
respuesta: "Un círculo dividido en porciones, donde cada una representa la proporción de una categoría sobre el total"

explicacion: |
  El círculo completo siempre representa el 100% del total.
```

### 2 — Las porciones siempre suman 100%

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_torta"
  nivel: "basico"
  tags: ["torta"]

respuesta: verdadero
tipo: vf

enunciado: "En un gráfico de torta, todas las porciones mostradas tienen que sumar exactamente el 100% del total."

explicacion: |
  Si suman menos, falta alguna categoría en el gráfico.
```

### 3 — Completar: fórmula de porcentaje a cantidad

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_torta"
  nivel: "intermedio"
  tags: ["torta", "completar"]

tipo: completar
enunciado: "Completá: cantidad de la categoría = porcentaje × total / ___."
respuestas_validas:
  - "100"

explicacion: |
  Es la misma fórmula de porcentaje ya conocida, aplicada a una
  porción del gráfico.
```

### 4 — Problema: de porcentaje a cantidad

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_torta"
  nivel: "avanzado"
  tags: ["torta", "problema"]

variables:
  porcentaje: uno_de([20, 25, 30, 40])
  total: uno_de([50000, 80000, 100000])

respuesta: porcentaje * total / 100
tipo: input
unidad: "$"

enunciado: "En un gráfico de torta de un presupuesto total de ${total}, la categoría 'Alquiler' ocupa el {porcentaje}% de la torta. ¿A cuánto dinero equivale esa porción?"

pasos:
  - "Cantidad = {porcentaje} × {total} / 100 = {porcentaje * total / 100}"

explicacion: |
  Se aplica el porcentaje directamente sobre el total.
```

### 5 — Problema: de cantidad a porcentaje

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_torta"
  nivel: "avanzado"
  tags: ["torta", "problema"]

variables:
  total: uno_de([200, 400, 500])
  cantidad: uno_de([50, 100])

respuesta: redondear(cantidad * 100 / total, 1)
tipo: input
tolerancia_abs: 0.1
unidad: "%"

enunciado: "De un total de {total} personas encuestadas, {cantidad} eligieron la opción A. ¿Qué porcentaje de la torta representa esa opción?"

pasos:
  - "Porcentaje = {cantidad} × 100 / {total} = {redondear(cantidad * 100 / total, 1)}%"

explicacion: |
  Es la fórmula de porcentaje despejada al revés.
```

### 6 — Problema: porcentaje faltante

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_torta"
  nivel: "avanzado"
  tags: ["torta", "problema"]

variables:
  a: random(20, 35)
  b: random(15, 30)
  c: random(10, 20)

respuesta: 100 - a - b - c
tipo: input
unidad: "%"

enunciado: "Un gráfico de torta tiene 4 categorías. Se sabe que tres de ellas ocupan {a}%, {b}% y {c}% respectivamente. ¿Qué porcentaje ocupa la cuarta categoría?"

pasos:
  - "100 − {a} − {b} − {c} = {100 - a - b - c}%"

explicacion: |
  Como todas las porciones suman 100%, la que falta es lo que resta
  hasta llegar a ese total.
```

### 7 — Problema: leer un gasto por categoría

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_torta"
  nivel: "intermedio"
  tags: ["torta", "problema"]

variables:
  gastos: [{categoria: "Alquiler", porcentaje: 35}, {categoria: "Comida", porcentaje: 25}, {categoria: "Transporte", porcentaje: 15}, {categoria: "Ocio", porcentaje: 10}, {categoria: "Otros", porcentaje: 15}]
  idx: uno_de([0, 1, 2, 3, 4])

respuesta: gastos[idx].porcentaje
tipo: input
unidad: "%"

enunciado: "Un gráfico de torta muestra la distribución de un presupuesto: Alquiler 35%, Comida 25%, Transporte 15%, Ocio 10%, Otros 15%. ¿Qué porcentaje ocupa {gastos[idx].categoria}?"

explicacion: |
  Se lee directamente el tamaño de la porción correspondiente.
```

### 8 — Si las porciones no suman 100%, falta una categoría

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_torta"
  nivel: "intermedio"
  tags: ["torta"]

respuesta: verdadero
tipo: vf

enunciado: "Si las porciones mostradas en un gráfico de torta suman menos del 100%, significa que falta alguna categoría (posiblemente agrupada como 'Otros')."

explicacion: |
  El círculo completo siempre debería representar el total.
```

### 9 — Cuándo conviene usar un gráfico de torta

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_torta"
  nivel: "intermedio"
  tags: ["torta"]

enunciado: "¿En qué situación conviene más usar un gráfico de torta?"
tipo: mc
opciones_explicitas:
  - "Cuando hay pocas categorías (hasta 5 o 6) y lo que importa es la proporción de cada una sobre el total"
  - "Cuando se quiere mostrar la evolución de un valor a lo largo del tiempo"
  - "Cuando hay 20 categorías distintas, todas del mismo tamaño"
respuesta: "Cuando hay pocas categorías (hasta 5 o 6) y lo que importa es la proporción de cada una sobre el total"

explicacion: |
  Con muchas categorías chicas, las porciones se vuelven ilegibles.
```

### 10 — Cuándo NO conviene usar un gráfico de torta

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_torta"
  nivel: "avanzado"
  tags: ["torta"]

enunciado: "¿Por qué no conviene usar un gráfico de torta con 20 categorías distintas, muchas de ellas muy chicas?"
tipo: mc
opciones_explicitas:
  - "Porque las porciones más chicas se vuelven casi imposibles de distinguir o leer a simple vista"
  - "Porque un gráfico de torta nunca puede tener más de 3 categorías"
  - "No hay ningún problema real en hacerlo"
respuesta: "Porque las porciones más chicas se vuelven casi imposibles de distinguir o leer a simple vista"

explicacion: |
  Es un límite práctico de legibilidad, no una regla matemática
  estricta.
```

### 11 — Ordenar: pasos para calcular la cantidad real de una porción

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_torta"
  nivel: "avanzado"
  tags: ["torta", "ordenar"]

enunciado: "Ordená los pasos para calcular la cantidad real que representa una porción, dado su porcentaje y el total."
tipo: ordenar
opciones_explicitas:
  - "El resultado es la cantidad real de esa categoría"
  - "Identificar el porcentaje de la porción y el valor del total"
  - "Multiplicar el porcentaje por el total y dividir por 100"
respuesta_orden: ["Identificar el porcentaje de la porción y el valor del total", "Multiplicar el porcentaje por el total y dividir por 100", "El resultado es la cantidad real de esa categoría"]
explicacion: |
  Sin el total, el porcentaje solo no dice cuánto es en cantidad real.
```

### 12 — Dos tortas de tamaños distintos no se comparan directo

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_torta"
  nivel: "avanzado"
  tags: ["torta"]

respuesta: verdadero
tipo: vf

enunciado: "Si dos gráficos de torta representan totales distintos (por ejemplo, presupuestos de distinto tamaño), una porción del 20% en uno no necesariamente es una cantidad mayor que una porción del 30% en el otro."

explicacion: |
  El porcentaje es relativo a SU propio total — sin conocer ambos
  totales, no se puede comparar la cantidad real.
```

### 13 — Aplicación real: composición de una población

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_torta"
  nivel: "basico"
  tags: ["torta", "aplicacion"]

enunciado: "¿Para qué sirve un gráfico de torta al mostrar la composición de una población por grupo de edad?"
tipo: mc
opciones_explicitas:
  - "Para mostrar qué proporción del total de la población representa cada grupo de edad"
  - "Para mostrar cómo cambió la población año a año"
  - "Para comparar la población de dos países distintos en números absolutos"
respuesta: "Para mostrar qué proporción del total de la población representa cada grupo de edad"

explicacion: |
  Es el caso de uso típico: proporciones de un total, no evolución en
  el tiempo ni comparación de magnitudes absolutas.
```

### 14 — Problema: categoría más grande

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_torta"
  nivel: "intermedio"
  tags: ["torta", "problema"]

enunciado: "Con el gráfico de presupuesto — Alquiler 35%, Comida 25%, Transporte 15%, Ocio 10%, Otros 15% — ¿cuál es la categoría con la porción más grande?"
tipo: mc
opciones_explicitas:
  - "Alquiler"
  - "Comida"
  - "Otros"
respuesta: "Alquiler"

explicacion: |
  35% es el valor más alto de las 5 categorías.
```

### 15 — Problema: diferencia entre dos porciones

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_torta"
  nivel: "avanzado"
  tags: ["torta", "problema"]

respuesta: 10
tipo: input
unidad: "%"

enunciado: "Con el mismo gráfico — Alquiler 35%, Comida 25%, Transporte 15%, Ocio 10%, Otros 15% — ¿cuál es la diferencia de porcentaje entre Alquiler y Comida?"

pasos:
  - "35 − 25 = 10 puntos porcentuales"

explicacion: |
  Se restan directamente los dos porcentajes.
```

### 16 — Muchas categorías chicas hacen difícil la lectura

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_torta"
  nivel: "intermedio"
  tags: ["torta"]

respuesta: verdadero
tipo: vf

enunciado: "Una torta con muchas categorías muy chicas (por ejemplo, 15 categorías de 2-3% cada una) es más difícil de leer con precisión que una con pocas categorías grandes."

explicacion: |
  Las porciones muy finitas son difíciles de comparar visualmente
  entre sí.
```

### 17 — Problema: gasto en Comida y Transporte juntos

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_torta"
  nivel: "avanzado"
  tags: ["torta", "problema"]

variables:
  total: uno_de([60000, 90000, 120000])

respuesta: 40 * total / 100
tipo: input
unidad: "$"

enunciado: "Con el presupuesto — Alquiler 35%, Comida 25%, Transporte 15%, Ocio 10%, Otros 15% — y un total de ${total}, ¿cuánto se gasta en Comida y Transporte JUNTOS?"

pasos:
  - "Comida + Transporte = 25% + 15% = 40%"
  - "40% de {total} = {40 * total / 100}"

explicacion: |
  Se suman primero los porcentajes de las categorías que interesan, y
  después se aplica al total.
```

### 18 — Aplicación real: resultados de una encuesta

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_torta"
  nivel: "basico"
  tags: ["torta", "aplicacion"]

enunciado: "Una encuesta muestra en un gráfico de torta qué porcentaje de la gente prefiere cada una de 4 opciones. ¿Qué garantiza el hecho de que sea un gráfico de torta?"
tipo: mc
opciones_explicitas:
  - "Que los 4 porcentajes mostrados suman exactamente 100% de los encuestados"
  - "Que las 4 opciones tienen exactamente el mismo porcentaje"
  - "Que la encuesta se hizo en un solo día"
respuesta: "Que los 4 porcentajes mostrados suman exactamente 100% de los encuestados"

explicacion: |
  Es la propiedad definitoria de este tipo de gráfico.
```

### 19 — 'Otros' agrupa categorías chicas

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_torta"
  nivel: "intermedio"
  tags: ["torta"]

respuesta: verdadero
tipo: vf

enunciado: "La categoría 'Otros' en un gráfico de torta suele agrupar varias categorías chicas en una sola porción, para no saturar el gráfico con muchas porciones diminutas."

explicacion: |
  Es una simplificación visual habitual, no significa que esas
  categorías no existan.
```

### 20 — Problema: convertir varias porciones a cantidad real

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_torta"
  nivel: "avanzado"
  tags: ["torta", "problema"]

variables:
  gastos: [{categoria: "Alquiler", porcentaje: 35}, {categoria: "Comida", porcentaje: 25}, {categoria: "Transporte", porcentaje: 15}]
  idx: uno_de([0, 1, 2])
  total: uno_de([40000, 60000, 80000])

respuesta: gastos[idx].porcentaje * total / 100
tipo: input
unidad: "$"

enunciado: "Con el presupuesto — Alquiler 35%, Comida 25%, Transporte 15% — y un total de ${total}, ¿cuánto dinero representa la categoría {gastos[idx].categoria}?"

pasos:
  - "{gastos[idx].porcentaje}% de {total} = {gastos[idx].porcentaje} × {total} / 100 = {gastos[idx].porcentaje * total / 100}"

explicacion: |
  Se aplica la fórmula de porcentaje a cada categoría por separado.
```

### 21 — El tamaño del círculo no representa el total, sólo lo divide

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_torta"
  nivel: "avanzado"
  tags: ["torta"]

respuesta: falso
tipo: vf

enunciado: "Un círculo dibujado más grande en un gráfico de torta siempre representa un total mayor que un círculo más chico en otra torta."

explicacion: |
  No necesariamente — el tamaño del dibujo es una decisión visual, no
  garantiza nada sobre el total real que representa, salvo que el
  gráfico lo aclare explícitamente.
```

### 22 — Problema: porcentaje de dos categorías combinadas

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_torta"
  nivel: "avanzado"
  tags: ["torta", "problema"]

respuesta: 25
tipo: input
unidad: "%"

enunciado: "Con el gráfico — Alquiler 35%, Comida 25%, Transporte 15%, Ocio 10%, Otros 15% — ¿qué porcentaje representan juntas Transporte y Ocio?"

pasos:
  - "Transporte (15%) + Ocio (10%) = 25%"

explicacion: |
  Se suman directamente los dos porcentajes de las categorías
  pedidas.
```

### 23 — Cierre: para qué sirve este bloque

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_torta"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve un gráfico de torta?"
tipo: mc
opciones_explicitas:
  - "Para mostrar qué proporción de un total representa cada categoría, cuando hay pocas categorías"
  - "Para mostrar la evolución de un dato a lo largo del tiempo"
  - "Sólo aplica cuando todas las categorías tienen el mismo tamaño"
respuesta: "Para mostrar qué proporción de un total representa cada categoría, cuando hay pocas categorías"

explicacion: |
  Es el hermano de `../barras/` (comparar categorías) y `../lineas/`
  (evolución en el tiempo) — cierra el trío de gráficos básicos.
```
