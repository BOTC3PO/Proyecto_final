# Examen jefe — Maestro del Análisis de Datos

> Logro #69. Leí gráficos, tablas y expresiones algebraicas hasta dominar límites y logaritmos. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **140 preguntas totales** en 5/5 secciones.

---

## Sección: leer-grafico/torta (23 preguntas)

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
respuesta_orden:
  - "Identificar el porcentaje de la porción y el valor del total"
  - "Multiplicar el porcentaje por el total y dividir por 100"
  - "El resultado es la cantidad real de esa categoría"

explicacion: |
  Sin el total, el porcentaje solo no dice cuánto es en cantidad real.
```

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

## Sección: leer-una-tabla (25 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "basico"
  tags: ["tabla", "vocabulario"]

enunciado: "En una tabla, ¿qué es una fila?"
tipo: mc
opciones_explicitas:
  - "Una línea horizontal de la tabla, que agrupa los datos de un mismo registro"
  - "Una línea vertical de la tabla"
  - "El título general de toda la tabla"
respuesta: "Una línea horizontal de la tabla, que agrupa los datos de un mismo registro"

explicacion: |
  Por ejemplo, todos los datos de un mismo producto suelen ir en la
  misma fila.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "basico"
  tags: ["tabla", "vocabulario"]

enunciado: "En una tabla, ¿qué es una columna?"
tipo: mc
opciones_explicitas:
  - "Una línea vertical de la tabla, que agrupa el mismo tipo de dato para todos los registros"
  - "Una línea horizontal de la tabla"
  - "Un dato suelto, sin relación con el resto"
respuesta: "Una línea vertical de la tabla, que agrupa el mismo tipo de dato para todos los registros"

explicacion: |
  Por ejemplo, la columna "Precio" tiene el precio de cada producto,
  uno por fila.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "basico"
  tags: ["tabla", "vocabulario"]

enunciado: "¿Qué es una celda en una tabla?"
tipo: mc
opciones_explicitas:
  - "La intersección de una fila y una columna, con un solo dato puntual adentro"
  - "El título de una columna"
  - "El total de una fila"
respuesta: "La intersección de una fila y una columna, con un solo dato puntual adentro"

explicacion: |
  Cada celda contiene un único valor.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "basico"
  tags: ["tabla", "vocabulario"]

enunciado: "¿Qué es el encabezado de una tabla?"
tipo: mc
opciones_explicitas:
  - "La primera fila, que nombra qué dato contiene cada columna"
  - "La última fila, con los totales"
  - "La primera columna, con los nombres de cada fila"
respuesta: "La primera fila, que nombra qué dato contiene cada columna"

explicacion: |
  Sin encabezado, no se sabría qué representa cada columna de números.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "intermedio"
  tags: ["tabla", "problema"]

variables:
  tabla: [{producto: "Manzana", precio: 120, stock: 30}, {producto: "Banana", precio: 80, stock: 45}, {producto: "Naranja", precio: 100, stock: 20}, {producto: "Pera", precio: 150, stock: 15}]
  idx: uno_de([0, 1, 2, 3])

respuesta: tabla[idx].precio
tipo: input
unidad: "$"

enunciado: "Según esta tabla — Manzana: $120 (30 en stock); Banana: $80 (45 en stock); Naranja: $100 (20 en stock); Pera: $150 (15 en stock) — ¿cuál es el precio de {tabla[idx].producto}?"

explicacion: |
  Se busca la fila del producto pedido, y se lee el valor de la
  columna "Precio" en esa fila.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "intermedio"
  tags: ["tabla", "problema"]

variables:
  tabla: [{producto: "Manzana", precio: 120, stock: 30}, {producto: "Banana", precio: 80, stock: 45}, {producto: "Naranja", precio: 100, stock: 20}, {producto: "Pera", precio: 150, stock: 15}]
  idx: uno_de([0, 1, 2, 3])

respuesta: tabla[idx].stock
tipo: input

enunciado: "Con la misma tabla — Manzana: $120 (30 en stock); Banana: $80 (45 en stock); Naranja: $100 (20 en stock); Pera: $150 (15 en stock) — ¿cuántas unidades hay en stock de {tabla[idx].producto}?"

explicacion: |
  Ahora se lee la columna "Stock" en vez de "Precio", en la misma fila.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "intermedio"
  tags: ["tabla", "problema"]

enunciado: "Según la tabla — Manzana: $120; Banana: $80; Naranja: $100; Pera: $150 — ¿cuál de estos dos productos es más caro, Banana o Pera?"
tipo: mc
opciones_explicitas:
  - "Pera"
  - "Banana"
respuesta: "Pera"

explicacion: |
  Pera cuesta $150 y Banana $80 — se comparan los valores de la misma
  columna en filas distintas.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "avanzado"
  tags: ["tabla", "problema"]

respuesta: 110
tipo: input

enunciado: "Según la tabla de stock — Manzana: 30; Banana: 45; Naranja: 20; Pera: 15 — ¿cuál es el stock TOTAL sumando las 4 filas?"

pasos:
  - "30 + 45 + 20 + 15 = 110"

explicacion: |
  Cuando la tabla no trae ya un total, hay que sumar manualmente los
  valores de la columna.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "avanzado"
  tags: ["tabla", "problema"]

respuesta: 70
tipo: input

enunciado: "Según la tabla de precios — Manzana: $120; Banana: $80; Naranja: $100; Pera: $150 — ¿cuál es la diferencia entre el producto más caro y el más barato?"

pasos:
  - "Más caro: Pera ($150). Más barato: Banana ($80)."
  - "Diferencia = 150 − 80 = 70"

explicacion: |
  Primero hay que identificar cuál fila tiene el mayor y cuál el menor
  valor, y después restar.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "intermedio"
  tags: ["tabla"]

respuesta: verdadero
tipo: vf

enunciado: "Una tabla sin encabezado sigue siendo una tabla (filas y columnas de datos), pero es mucho más difícil de interpretar porque no queda claro qué representa cada columna."

explicacion: |
  El encabezado es lo que le da significado a los números de cada
  columna.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "intermedio"
  tags: ["tabla", "ordenar"]

enunciado: "Ordená los pasos para encontrar un dato puntual en una tabla (por ejemplo, el precio de un producto específico)."
tipo: ordenar
opciones_explicitas:
  - "Ubicar la columna correspondiente al dato que se busca"
  - "Ubicar la fila correspondiente al registro que interesa"
  - "Leer el valor de la celda donde se cruzan esa fila y esa columna"
respuesta_orden:
  - "Ubicar la fila correspondiente al registro que interesa"
  - "Ubicar la columna correspondiente al dato que se busca"
  - "Leer el valor de la celda donde se cruzan esa fila y esa columna"

explicacion: |
  Sin fijar primero la fila (o la columna), no hay una sola celda que
  leer.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "basico"
  tags: ["tabla", "aplicacion"]

enunciado: "Una boleta de supermercado lista productos, cantidades y precios en filas. ¿Qué habilidad hace falta para entender cuánto costó cada producto?"
tipo: mc
opciones_explicitas:
  - "Leer una tabla: identificar la fila del producto y la columna del precio"
  - "Ninguna habilidad matemática, sólo hay que mirar el total final"
  - "Sólo sirve saber sumar, sin necesidad de leer filas ni columnas"
respuesta: "Leer una tabla: identificar la fila del producto y la columna del precio"

explicacion: |
  Es la misma habilidad de este módulo, aplicada a un documento real
  y cotidiano.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "intermedio"
  tags: ["tabla", "problema"]

variables:
  equipos: [{nombre: "Águilas", puntos: 24, partidos: 10}, {nombre: "Tigres", puntos: 18, partidos: 10}, {nombre: "Leones", puntos: 30, partidos: 10}]
  idx: uno_de([0, 1, 2])

respuesta: equipos[idx].puntos
tipo: input

enunciado: "Tabla de un torneo — Águilas: 24 puntos (10 partidos); Tigres: 18 puntos (10 partidos); Leones: 30 puntos (10 partidos). ¿Cuántos puntos tiene {equipos[idx].nombre}?"

explicacion: |
  Misma habilidad que con la tabla de productos, en otro contexto.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "intermedio"
  tags: ["tabla", "problema"]

enunciado: "Con la tabla del torneo — Águilas: 24 puntos; Tigres: 18 puntos; Leones: 30 puntos — ¿qué equipo está primero en la tabla de posiciones?"
tipo: mc
opciones_explicitas:
  - "Leones"
  - "Águilas"
  - "Tigres"
respuesta: "Leones"

explicacion: |
  Tiene la mayor cantidad de puntos de los tres equipos.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "intermedio"
  tags: ["tabla", "vocabulario"]

enunciado: "¿Cómo se le llama, en general, al conjunto de datos de una misma fila (por ejemplo, todos los datos de un mismo producto)?"
tipo: mc
opciones_explicitas:
  - "Un registro"
  - "Un encabezado"
  - "Una celda"
respuesta: "Un registro"

explicacion: |
  Cada fila (fuera del encabezado) suele representar un registro
  completo.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "avanzado"
  tags: ["tabla", "problema"]

respuesta: 24
tipo: input

enunciado: "Con la tabla de puntos — Águilas: 24; Tigres: 18; Leones: 30 — ¿cuál es el promedio de puntos de los 3 equipos?"

pasos:
  - "(24 + 18 + 30) ÷ 3 = 72 ÷ 3 = 24"

explicacion: |
  Sumar la columna completa y dividir por la cantidad de filas.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "intermedio"
  tags: ["tabla"]

respuesta: verdadero
tipo: vf

enunciado: "Una tabla puede tener columnas con texto (como nombres o categorías), no sólo columnas numéricas."

explicacion: |
  La columna "Producto" o "Equipo", por ejemplo, es texto — sólo
  algunas columnas necesitan ser números.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "avanzado"
  tags: ["tabla", "problema"]

respuesta: 2
tipo: input

enunciado: "De la tabla de precios — Manzana: $120; Banana: $80; Naranja: $100; Pera: $150 — ¿cuántos productos cuestan MÁS de $100?"

pasos:
  - "Manzana ($120) y Pera ($150) superan los $100 — Naranja ($100) no supera, está justo en el límite."
  - "Total: 2 productos"

explicacion: |
  Hay que revisar cada fila una por una y contar cuántas cumplen la
  condición.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "intermedio"
  tags: ["tabla"]

respuesta: verdadero
tipo: vf

enunciado: "Si se reordenan las filas de una tabla (por ejemplo, de mayor a menor precio), los datos de cada registro no cambian — sólo cambia el orden en que se presentan."

explicacion: |
  Reordenar no agrega ni quita información, sólo la presenta distinto.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "basico"
  tags: ["tabla", "vocabulario"]

enunciado: "Antes de confiar en los datos de una tabla, ¿qué conviene revisar además de los números en sí?"
tipo: mc
opciones_explicitas:
  - "De dónde vienen esos datos (la fuente) y si están actualizados"
  - "Sólo el color de fondo de la tabla"
  - "No hace falta revisar nada más, los números siempre son confiables"
respuesta: "De dónde vienen esos datos (la fuente) y si están actualizados"

explicacion: |
  Una tabla puede estar bien construida y aun así tener datos viejos o
  poco confiables si la fuente no es buena.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "intermedio"
  tags: ["tabla", "problema"]

enunciado: "De la tabla de stock — Manzana: 30; Banana: 45; Naranja: 20; Pera: 15 — ¿qué producto tiene MÁS unidades en stock?"
tipo: mc
opciones_explicitas:
  - "Banana"
  - "Manzana"
  - "Naranja"
respuesta: "Banana"

explicacion: |
  Banana tiene 45, el valor más alto de esa columna.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "intermedio"
  tags: ["tabla", "problema"]

enunciado: "De la misma tabla de stock — Manzana: 30; Banana: 45; Naranja: 20; Pera: 15 — ¿qué producto tiene MENOS unidades en stock?"
tipo: mc
opciones_explicitas:
  - "Pera"
  - "Naranja"
  - "Manzana"
respuesta: "Pera"

explicacion: |
  Pera tiene 15, el valor más bajo de esa columna.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "avanzado"
  tags: ["tabla"]

respuesta: verdadero
tipo: vf

enunciado: "Una celda vacía en una tabla no siempre significa 'cero' — puede significar 'dato no disponible' o 'no aplica', y confundir ambos casos puede llevar a un error de interpretación."

explicacion: |
  Es un error común: tratar un dato faltante como si fuera 0 cuando en
  realidad nunca se midió ese valor.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "basico"
  tags: ["tabla", "aplicacion"]

enunciado: "Un horario escolar tiene los días de la semana en las columnas y las horas del día en las filas. ¿Cómo se encuentra qué materia hay el miércoles a las 10 hs?"
tipo: mc
opciones_explicitas:
  - "Se busca la fila de las 10 hs y la columna del miércoles, y se lee la celda donde se cruzan"
  - "Se suman todas las materias de la semana"
  - "No se puede saber sin ver el horario completo del año"
respuesta: "Se busca la fila de las 10 hs y la columna del miércoles, y se lee la celda donde se cruzan"

explicacion: |
  Es exactamente el mismo procedimiento de cruzar fila y columna.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve saber leer una tabla?"
tipo: mc
opciones_explicitas:
  - "Para encontrar, comparar y sumar datos organizados en filas y columnas, sin necesidad de que estén dibujados como gráfico"
  - "Sólo sirve para tablas de multiplicar"
  - "Sólo aplica a tablas con menos de 3 filas"
respuesta: "Para encontrar, comparar y sumar datos organizados en filas y columnas, sin necesidad de que estén dibujados como gráfico"

explicacion: |
  Es el prerrequisito directo de los tres módulos de gráficos que
  siguen — un gráfico es, en el fondo, una tabla dibujada.
```

## Sección: lenguaje-algebraico (40 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "basico"
  tags: ["vocabulario", "doble"]

variables:
  n: random(1, 50)

respuesta: 2 * n
tipo: input
tolerancia_abs: 0

enunciado: "El doble de un número. Si el número es {n}, ¿cuál es el resultado?"

pasos:
  - "El doble significa multiplicar por 2: 2 × {n} = {2 * n}"

explicacion: |
  "El doble de x" se traduce como 2x.
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "basico"
  tags: ["vocabulario", "triple"]

variables:
  n: random(1, 40)

respuesta: 3 * n
tipo: input
tolerancia_abs: 0

enunciado: "El triple de un número. Si el número es {n}, ¿cuál es el resultado?"

pasos:
  - "El triple significa multiplicar por 3: 3 × {n} = {3 * n}"

explicacion: |
  "El triple de x" se traduce como 3x.
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "basico"
  tags: ["vocabulario", "mitad"]

variables:
  n: random(1, 50) * 2

respuesta: n / 2
tipo: input
tolerancia_abs: 0

enunciado: "La mitad de un número. Si el número es {n}, ¿cuál es el resultado?"

pasos:
  - "La mitad significa dividir por 2: {n} / 2 = {n / 2}"

explicacion: |
  "La mitad de x" se traduce como x/2.
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "basico"
  tags: ["vocabulario", "cuadrado"]

variables:
  n: random(2, 20)

respuesta: n ^ 2
tipo: input
tolerancia_abs: 0

enunciado: "El cuadrado de un número. Si el número es {n}, ¿cuál es el resultado?"

pasos:
  - "El cuadrado significa elevar a la 2: {n}² = {n ^ 2}"

explicacion: |
  "El cuadrado de x" se traduce como x².
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "basico"
  tags: ["vocabulario", "siguiente"]

variables:
  n: random(1, 99)

respuesta: n + 1
tipo: input
tolerancia_abs: 0

enunciado: "El siguiente de un número. Si el número es {n}, ¿cuál es el resultado?"

explicacion: |
  "El siguiente de x" se traduce como x + 1.
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "basico"
  tags: ["vocabulario", "anterior"]

variables:
  n: random(2, 100)

respuesta: n - 1
tipo: input
tolerancia_abs: 0

enunciado: "El anterior a un número. Si el número es {n}, ¿cuál es el resultado?"

explicacion: |
  "El anterior a x" se traduce como x − 1.
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "basico"
  tags: ["vocabulario", "aumentado"]

variables:
  n: random(1, 80)
  a: random(1, 20)

respuesta: n + a
tipo: input
tolerancia_abs: 0

enunciado: "Un número aumentado en {a}. Si el número es {n}, ¿cuál es el resultado?"

explicacion: |
  "x aumentado en a" se traduce como x + a.
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "basico"
  tags: ["vocabulario", "disminuido"]

variables:
  n: random(30, 100)
  a: random(1, 20)

respuesta: n - a
tipo: input
tolerancia_abs: 0

enunciado: "Un número disminuido en {a}. Si el número es {n}, ¿cuál es el resultado?"

explicacion: |
  "x disminuido en a" se traduce como x − a: el número es el que pierde a,
  no al revés.
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "intermedio"
  tags: ["vocabulario", "orden"]

variables:
  a: random(50, 100)
  n: random(1, 40)

respuesta: a - n
tipo: input
tolerancia_abs: 0

enunciado: "La diferencia entre {a} y un número. Si el número es {n}, ¿cuál es el resultado?"

explicacion: |
  "La diferencia entre A y B" se traduce como A − B, en ese orden: el
  primero nombrado es el que resta al segundo. Acá {a} resta {n}, no al
  revés.
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "intermedio"
  tags: ["orden", "parentesis"]

variables:
  n: random(1, 40)
  a: random(1, 20)

respuesta: 3 * n + a
tipo: input
tolerancia_abs: 0

enunciado: "El triple de un número, aumentado en {a}. Si el número es {n}, ¿cuál es el resultado?"

pasos:
  - "Primero se triplica: 3 × {n} = {3 * n}. Después se suma {a}: {3 * n} + {a} = {3 * n + a}"

explicacion: |
  La coma separa las dos operaciones: primero se triplica el número, y
  recién después se le suma {a} al resultado. Sin la coma ("el triple de
  un número aumentado en {a}") el resultado sería otro.
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "intermedio"
  tags: ["orden", "parentesis"]

variables:
  n: random(1, 40)
  a: random(1, 20)

respuesta: 3 * (n + a)
tipo: input
tolerancia_abs: 0

enunciado: "El triple de un número aumentado en {a}. Si el número es {n}, ¿cuál es el resultado?"

pasos:
  - "Sin coma, primero se aumenta: {n} + {a} = {n + a}. Después se triplica todo: 3 × {n + a} = {3 * (n + a)}"

explicacion: |
  Sin la coma, "aumentado en {a}" describe al número antes de triplicar:
  primero se suma, y el resultado completo es lo que se triplica. Hace
  falta el paréntesis: 3({n}+{a}), no 3×{n}+{a}.
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "basico"
  tags: ["vocabulario", "dos_numeros"]

variables:
  x: random(1, 50)
  y: random(1, 50)

respuesta: x + y
tipo: input
tolerancia_abs: 0

enunciado: "La suma de dos números. Si son {x} y {y}, ¿cuál es el resultado?"

explicacion: |
  "La suma de x e y" se traduce como x + y.
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "basico"
  tags: ["vocabulario", "dos_numeros"]

variables:
  x: random(2, 20)
  y: random(2, 20)

respuesta: x * y
tipo: input
tolerancia_abs: 0

enunciado: "El producto de dos números. Si son {x} y {y}, ¿cuál es el resultado?"

explicacion: |
  "El producto de x e y" se traduce como x · y.
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "intermedio"
  tags: ["vocabulario", "dos_numeros", "orden"]

variables:
  x: random(50, 100)
  y: random(1, 49)

respuesta: x - y
tipo: input
tolerancia_abs: 0

enunciado: "La diferencia entre {x} y {y}. ¿Cuál es el resultado?"

explicacion: |
  El primero nombrado ({x}) resta al segundo ({y}).
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "basico"
  tags: ["vocabulario", "dos_numeros"]

variables:
  y: random(2, 12)
  k: random(2, 12)
  x: y * k

respuesta: x / y
tipo: input
tolerancia_abs: 0

enunciado: "El cociente entre {x} y {y}. ¿Cuál es el resultado?"

explicacion: |
  "El cociente entre x e y" se traduce como x/y, en ese orden.
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "intermedio"
  tags: ["orden", "parentesis"]

variables:
  n: random(1, 40)
  a: random(1, 20)

respuesta: 2 * (n + a)
tipo: input
tolerancia_abs: 0

enunciado: "El doble de la suma de un número y {a}. Si el número es {n}, ¿cuál es el resultado?"

pasos:
  - "La suma va completa adentro del paréntesis: ({n} + {a}) = {n + a}. Después se duplica: 2 × {n + a} = {2 * (n + a)}"

explicacion: |
  "El doble de [una suma]" triplica — acá duplica — el resultado completo
  de esa suma: 2({n}+{a}).
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "intermedio"
  tags: ["orden", "mitad"]

variables:
  n: random(1, 50) * 2
  a: random(1, 10)

respuesta: n / 2 - a
tipo: input
tolerancia_abs: 0

enunciado: "La mitad de un número, menos {a}. Si el número es {n}, ¿cuál es el resultado?"

explicacion: |
  La coma vuelve a separar: primero la mitad, después se resta {a} al
  resultado.
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "intermedio"
  tags: ["orden", "parentesis", "cuadrado"]

variables:
  n: random(20, 40)
  a: random(1, 10)

respuesta: (n - a) ^ 2
tipo: input
tolerancia_abs: 0

enunciado: "El cuadrado de la diferencia entre un número y {a}. Si el número es {n}, ¿cuál es el resultado?"

explicacion: |
  La diferencia va completa adentro del paréntesis antes de elevarla al
  cuadrado: ({n}−{a})², no {n}² − {a}.
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "intermedio"
  tags: ["dos_numeros", "combinacion"]

variables:
  x: random(1, 30)
  y: random(1, 30)

respuesta: 2 * x + 3 * y
tipo: input
tolerancia_abs: 0

enunciado: "El doble de un número, más el triple de otro. Si son {x} y {y}, ¿cuál es el resultado?"

explicacion: |
  Cada número lleva su propio multiplicador antes de sumar: 2·{x} + 3·{y}.
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "intermedio"
  tags: ["dos_numeros", "combinacion"]

variables:
  x: random(1, 30)
  y: random(1, 30)

respuesta: 3 * x + 2 * y
tipo: input
tolerancia_abs: 0

enunciado: "El triple de un número, más el doble de otro. Si son {x} y {y}, ¿cuál es el resultado?"

explicacion: |
  Mismos ingredientes que el ejercicio anterior, con los multiplicadores
  cruzados: 3·{x} + 2·{y}, no 2·{x} + 3·{y}.
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "intermedio"
  tags: ["orden", "combinacion"]

variables:
  n: random(1, 50)

respuesta: 2 * n + 1
tipo: input
tolerancia_abs: 0

enunciado: "El siguiente del doble de un número. Si el número es {n}, ¿cuál es el resultado?"

pasos:
  - "Primero el doble: 2 × {n} = {2 * n}. Después el siguiente: {2 * n} + 1 = {2 * n + 1}"

explicacion: |
  Primero se duplica, y el siguiente se calcula sobre ese resultado.
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "intermedio"
  tags: ["orden", "combinacion"]

variables:
  n: random(1, 50)

respuesta: 2 * (n + 1)
tipo: input
tolerancia_abs: 0

enunciado: "El doble del siguiente de un número. Si el número es {n}, ¿cuál es el resultado?"

pasos:
  - "Primero el siguiente: {n} + 1 = {n + 1}. Después el doble: 2 × {n + 1} = {2 * (n + 1)}"

explicacion: |
  Orden opuesto al ejercicio anterior: acá primero se calcula el
  siguiente, y ese resultado completo es el que se duplica.
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "avanzado"
  tags: ["orden", "combinacion", "mitad"]

variables:
  n: random(1, 50) * 2 + 1

respuesta: (n - 1) / 2
tipo: input
tolerancia_abs: 0

enunciado: "La mitad del anterior a un número. Si el número es {n}, ¿cuál es el resultado?"

explicacion: |
  Primero el anterior ({n}−1), y de ese resultado se toma la mitad.
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "avanzado"
  tags: ["orden", "combinacion", "mitad"]

variables:
  n: random(1, 50) * 2

respuesta: n / 2 - 1
tipo: input
tolerancia_abs: 0

enunciado: "El anterior a la mitad de un número. Si el número es {n}, ¿cuál es el resultado?"

explicacion: |
  Primero la mitad ({n}/2), y a ese resultado se le resta 1.
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "avanzado"
  tags: ["mismo_numero", "combinacion"]

variables:
  n: random(1, 30)

respuesta: n * (n + 1)
tipo: input
tolerancia_abs: 0

enunciado: "El producto de un número por su siguiente. Si el número es {n}, ¿cuál es el resultado?"

explicacion: |
  "Su siguiente" repite el mismo número, no uno nuevo: {n} × ({n}+1).
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "avanzado"
  tags: ["mismo_numero", "combinacion"]

variables:
  n: random(1, 20)

respuesta: n ^ 2 + 2 * n
tipo: input
tolerancia_abs: 0

enunciado: "El cuadrado de un número, aumentado en su doble. Si el número es {n}, ¿cuál es el resultado?"

explicacion: |
  "Su doble" usa el mismo número que ya apareció en "cuadrado": {n}² + 2·{n}.
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "avanzado"
  tags: ["mismo_numero", "combinacion"]

variables:
  n: random(1, 20)

respuesta: n + n ^ 2
tipo: input
tolerancia_abs: 0

enunciado: "La suma de un número y su cuadrado. Si el número es {n}, ¿cuál es el resultado?"

explicacion: |
  {n} + {n}², el mismo número usado dos veces con roles distintos.
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "intermedio"
  tags: ["orden", "parentesis"]

variables:
  n: random(20, 40)
  a: random(1, 10)

respuesta: 3 * (n - a)
tipo: input
tolerancia_abs: 0

enunciado: "El triple de la diferencia entre un número y {a}. Si el número es {n}, ¿cuál es el resultado?"

explicacion: |
  La diferencia va completa adentro del paréntesis antes de triplicar:
  3({n}−{a}).
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "intermedio"
  tags: ["orden", "parentesis"]

variables:
  n: random(1, 30)
  a: random(1, 20)

respuesta: 3 * n - a
tipo: input
tolerancia_abs: 0

enunciado: "La diferencia entre el triple de un número y {a}. Si el número es {n}, ¿cuál es el resultado?"

explicacion: |
  Acá "el triple de un número" ya es un resultado armado (3·{n}) antes de
  restarle {a} — no hace falta paréntesis porque la multiplicación ya
  tiene mayor jerarquía que la resta.
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "intermedio"
  tags: ["dos_numeros", "mitad", "parentesis"]

variables:
  x: random(1, 40) * 2
  y: random(1, 40) * 2

respuesta: (x + y) / 2
tipo: input
tolerancia_abs: 0

enunciado: "La mitad de la suma de {x} y {y}. ¿Cuál es el resultado?"

explicacion: |
  La suma se calcula completa antes de tomar la mitad: ({x}+{y})/2.
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "intermedio"
  tags: ["dos_numeros", "combinacion"]

variables:
  x: random(1, 20)
  y: random(1, 20)

respuesta: 2 * x * y
tipo: input
tolerancia_abs: 0

enunciado: "El doble del producto de {x} y {y}. ¿Cuál es el resultado?"

explicacion: |
  Primero el producto ({x}·{y}), después se duplica ese resultado.
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "avanzado"
  tags: ["dos_numeros", "parentesis"]

variables:
  x: random(1, 30)
  y: random(1, 30)
  z: uno_de(divisores(x + y))

respuesta: (x + y) / z
tipo: input
tolerancia_abs: 0

enunciado: "El cociente entre la suma de {x} y {y}, y {z}. ¿Cuál es el resultado?"

explicacion: |
  La suma va completa adentro del paréntesis antes de dividir por {z}:
  ({x}+{y})/{z}.
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "avanzado"
  tags: ["mismo_numero", "combinacion", "cuadrado"]

variables:
  n: random(1, 20)

respuesta: (n + (n + 1)) ^ 2
tipo: input
tolerancia_abs: 0

enunciado: "El cuadrado de la suma de un número y su siguiente. Si el número es {n}, ¿cuál es el resultado?"

explicacion: |
  Primero la suma completa ({n} + ({n}+1)), y recién ese resultado se
  eleva al cuadrado.
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "avanzado"
  tags: ["mismo_numero", "combinacion"]

variables:
  n: random(2, 20)

respuesta: n ^ 2 - (n + 1)
tipo: input
tolerancia_abs: 0

enunciado: "La diferencia entre el cuadrado de un número y su siguiente. Si el número es {n}, ¿cuál es el resultado?"

explicacion: |
  "El cuadrado de un número" ({n}²) resta a "su siguiente" ({n}+1), en
  ese orden.
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "avanzado"
  tags: ["mismo_numero", "combinacion", "orden"]

variables:
  n: random(2, 20)

respuesta: (n + 1) - n ^ 2

tipo: input
tolerancia_abs: 0

enunciado: "La diferencia entre el siguiente de un número y su cuadrado. Si el número es {n}, ¿cuál es el resultado?"

explicacion: |
  Orden invertido respecto al ejercicio anterior: ahora "el siguiente"
  resta al "cuadrado" — el resultado suele dar negativo, y eso es
  correcto: el cuadrado crece más rápido que el siguiente.
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "avanzado"
  tags: ["dos_numeros", "combinacion", "mitad"]

variables:
  x: random(1, 30)
  y: random(1, 30) * 2

respuesta: 2 * x - y / 2
tipo: input
tolerancia_abs: 0

enunciado: "El doble de un número, disminuido en la mitad de otro. Si son {x} y {y}, ¿cuál es el resultado?"

explicacion: |
  Cada número lleva su propia operación antes de restar: 2·{x} − {y}/2.
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "intermedio"
  tags: ["orden", "parentesis", "opcion_multiple"]

variables:
  n: random(2, 20)
  a: random(2, 15)

respuesta: 3 * n + a
tipo: mc
opciones_explicitas:
  - 3 * n + a
  - 3 * (n + a)
  - 3 * n * a

enunciado: "El triple de un número, aumentado en {a}. Si el número es {n}, ¿cuál es el resultado?"

explicacion: |
  La coma indica que primero se triplica y después se suma {a}: 3{n}+{a}.
  3({n}+{a}) sería la traducción de la misma frase SIN la coma.
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "intermedio"
  tags: ["orden", "parentesis", "opcion_multiple"]

variables:
  n: random(2, 20)
  a: random(2, 15)

respuesta: 3 * (n + a)
tipo: mc
opciones_explicitas:
  - 3 * (n + a)
  - 3 * n + a
  - n + a + 3

enunciado: "El triple de un número aumentado en {a}. Si el número es {n}, ¿cuál es el resultado?"

explicacion: |
  Sin coma, "aumentado en {a}" describe al número antes de triplicar: hace
  falta el paréntesis, 3({n}+{a}).
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "intermedio"
  tags: ["orden", "opcion_multiple"]

variables:
  a: random(30, 60)
  n: random(1, 25)

respuesta: a - n
tipo: mc
opciones_explicitas:
  - a - n
  - n - a

enunciado: "La diferencia entre {a} y un número. Si el número es {n}, ¿cuál es el resultado?"

explicacion: |
  El primero nombrado ({a}) resta al segundo ({n}), en ese orden.
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "intermedio"
  tags: ["orden", "opcion_multiple"]

variables:
  n: random(30, 60)
  a: random(1, 25)

respuesta: n - a
tipo: mc
opciones_explicitas:
  - n - a
  - a - n

enunciado: "Un número disminuido en {a}. Si el número es {n}, ¿cuál es el resultado?"

explicacion: |
  Acá el número es el que pierde {a}, aunque el nombre "{a}" aparezca
  segundo en la frase igual que en el ejercicio anterior — el que resta
  primero cambia según la construcción gramatical ("un número disminuido
  en X" vs. "la diferencia entre X y un número"), no sólo según qué
  palabra aparece primero.
```

## Sección: limite (26 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "basico"
  tags: ["continua"]

variables:
  a: random(1, 6)
  b: random(1, 10)
  c: random(-10, 10)
  punto: random(-8, 8)

respuesta: a * punto ^ 2 + b * punto + c
tipo: input
tolerancia_abs: 0

enunciado: "lim(x→{punto}) [{a}x² + {b}x + {c}]. ¿Cuánto vale?"

explicacion: |
  Para un polinomio, el límite es simplemente evaluar la función en ese
  punto.
```

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "basico"
  tags: ["continua"]

variables:
  m: random(1, 10)
  b: random(-15, 15)
  punto: random(-10, 10)

respuesta: m * punto + b
tipo: input
tolerancia_abs: 0

enunciado: "lim(x→{punto}) [{m}x + {b}]. ¿Cuánto vale?"

explicacion: |
  Una función lineal es continua en todos lados: el límite es f({punto}).
```

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "intermedio"
  tags: ["continua"]

variables:
  a: random(2, 10)
  punto: random(1, 10)
  desplazamiento: random(1, 10)

respuesta: a / (punto + desplazamiento)
tipo: input
tolerancia_abs: 0

enunciado: "lim(x→{punto}) [{a} / (x + {desplazamiento})]. ¿Cuánto vale?"

explicacion: |
  El denominador no se anula en x={punto} (da {punto + desplazamiento}),
  así que se puede evaluar directo.
```

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "intermedio"
  tags: ["indeterminacion"]

variables:
  a: random(1, 20)

respuesta: 2 * a
tipo: input
tolerancia_abs: 0

enunciado: "lim(x→{a}) [(x² − {a ^ 2}) / (x − {a})]. ¿Cuánto vale?"

pasos:
  - "Reemplazar directo da 0/0 — hay que factorear"
  - "(x²−{a ^ 2})/(x−{a}) = (x+{a})(x−{a})/(x−{a}) = x+{a} (para x≠{a})"
  - "lim(x→{a}) (x+{a}) = {a}+{a} = {2 * a}"

explicacion: |
  Factorear como diferencia de cuadrados cancela el factor problemático.
```

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "intermedio"
  tags: ["indeterminacion"]

variables:
  a: random(1, 15)

respuesta: 2 * a
tipo: input
tolerancia_abs: 0

enunciado: "lim(x→−{a}) [(x² − {a ^ 2}) / (x + {a})]. ¿Cuánto vale?"

pasos:
  - "(x²−{a ^ 2})/(x+{a}) = (x+{a})(x−{a})/(x+{a}) = x−{a} (para x≠−{a})"
  - "lim(x→−{a}) (x−{a}) = −{a}−{a} = −{2 * a}"

explicacion: |
  Acá el factor que se cancela es (x+{a}), porque el límite es en
  x=−{a}.
```

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "avanzado"
  tags: ["indeterminacion"]

variables:
  k: random(2, 10)
  a: random(1, 15)

respuesta: k * a
tipo: input
tolerancia_abs: 0

enunciado: "lim(x→0) [({k}x² + {k * a}x) / x]. ¿Cuánto vale?"

pasos:
  - "({k}x²+{k * a}x)/x = x({k}x+{k * a})/x = {k}x+{k * a} (para x≠0)"
  - "lim(x→0) ({k}x+{k * a}) = {k * a}"

explicacion: |
  Sacando x como factor común en el numerador, se cancela con el
  denominador.
```

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "intermedio"
  tags: ["laterales", "verdadero_falso"]

variables:
  m: random(1, 10)
  b: random(-10, 10)
  punto: random(-10, 10)

respuesta: verdadero
tipo: vf

enunciado: "f(x) = {m}x + {b}. ¿Coinciden el límite por la izquierda y por la derecha de f en x={punto} (o sea, existe el límite)?"

explicacion: |
  Para una función lineal (sin quiebres), los límites laterales siempre
  coinciden.
```

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "avanzado"
  tags: ["laterales", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Si el límite por la izquierda de f en x=a da 3, y el límite por la derecha da 7, el límite de f en x=a existe (y vale algún promedio de los dos)."

explicacion: |
  Si los límites laterales no coinciden, el límite completo NO existe —
  no se promedia ni se elige uno.
```

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "basico"
  tags: ["concepto", "error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Cuando reemplazar directo en un límite da 0/0, eso significa que el límite vale 0."

explicacion: |
  0/0 es una indeterminación, no un valor — hay que factorear y
  simplificar antes de poder evaluar.
```

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Una función puede no estar definida en x=a y aun así tener un límite bien definido cuando x se acerca a a."

explicacion: |
  Es exactamente el caso de (x²−a²)/(x−a): no está definida en x=a
  (denominador 0), pero el límite ahí sí existe y vale 2a.
```

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Para un polinomio, el límite en cualquier punto coincide exactamente con evaluar la función en ese punto."

explicacion: |
  Los polinomios son continuos en todos los reales — no hay "saltos" ni
  denominadores que se anulen.
```

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  a: random(2, 10)
  b: random(-10, 10)
  c: random(-10, 10)
  punto: random(-5, 5)
  real: a * punto ^ 2 + b * punto + c
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "lim(x→{punto}) [{a}x² + {b}x + {c}]. ¿Es correcto que el resultado sea {propuesto}?"

explicacion: |
  El valor correcto es {real}, evaluando el polinomio en {punto}.
```

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "avanzado"
  tags: ["indeterminacion"]

variables:
  a: random(1, 12)

respuesta: 3 * a ^ 2
tipo: input
tolerancia_abs: 0

enunciado: "lim(x→{a}) [(x³ − {a ^ 3}) / (x − {a})]. Usando que x³−a³ = (x−a)(x²+ax+a²), ¿cuánto vale el límite?"

pasos:
  - "(x³−{a ^ 3})/(x−{a}) = x²+{a}x+{a ^ 2} (para x≠{a})"
  - "lim(x→{a}) (x²+{a}x+{a ^ 2}) = {a ^ 2}+{a ^ 2}+{a ^ 2} = {3 * a ^ 2}"

explicacion: |
  Factorear una diferencia de cubos deja un trinomio que sí se puede
  evaluar directo.
```

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "avanzado"
  tags: ["infinito"]

variables:
  a: random(2, 10)
  b: random(2, 10)

respuesta: a / b
tipo: input
tolerancia_abs: 0

enunciado: "lim(x→∞) [({a}x + 5) / ({b}x − 3)]. ¿Cuánto vale?"

pasos:
  - "Con x muy grande, los términos sin x se vuelven insignificantes frente a los que sí tienen x"
  - "El límite es el cociente de los coeficientes principales: {a}/{b}"

explicacion: |
  Cuando el grado del numerador y del denominador coincide, el límite en
  el infinito es el cociente de los coeficientes principales.
```

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "avanzado"
  tags: ["infinito", "opcion_multiple"]

variables:
  a: random(1, 10)

respuesta: "Infinito (crece sin límite)"
tipo: mc
opciones_explicitas:
  - "Infinito (crece sin límite)"
  - "0"
  - "{a}"

enunciado: "lim(x→∞) [{a}x² + 3x − 7]. ¿Qué pasa con este límite?"

explicacion: |
  Un polinomio de grado 2 o más crece sin límite cuando x se va a
  infinito (con coeficiente principal positivo).
```

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "avanzado"
  tags: ["aplicacion"]

variables:
  a: random(1, 10)
  punto: random(1, 10)

respuesta: 2 * a * punto
tipo: input
tolerancia_abs: 0

enunciado: "Para f(x) = {a}x², el límite lim(h→0) [(f({punto}+h) − f({punto})) / h] da {2 * a}×{punto}. ¿Cuánto es ese valor?"

explicacion: |
  Este límite en particular es, exactamente, la definición de derivada
  — adelanto de `../derivada/`.
```

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El límite de una suma de funciones es la suma de los límites de cada una (siempre que cada límite individual exista)."

explicacion: |
  Es una de las propiedades básicas de los límites: se pueden calcular
  "por partes".
```

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El límite de un producto de funciones es el producto de los límites de cada una (siempre que cada límite individual exista)."

explicacion: |
  Misma idea que la suma, aplicada al producto.
```

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "intermedio"
  tags: ["opcion_multiple"]

respuesta: "Factorear el numerador y cancelar el factor común con el denominador"
tipo: mc
opciones_explicitas:
  - "Factorear el numerador y cancelar el factor común con el denominador"
  - "Reemplazar x=a directamente y dejar el resultado como 0/0"
  - "Ignorar el denominador y evaluar sólo el numerador"

enunciado: "Al calcular un límite que da 0/0 al reemplazar directo, ¿cuál es el paso correcto?"

explicacion: |
  0/0 avisa que hace falta simplificar algebraicamente antes de evaluar
  — no es la respuesta final.
```

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "avanzado"
  tags: ["indeterminacion"]

variables:
  r1: random(1, 15)
  r2: random(1, 15)

respuesta: r1 - r2
tipo: input
tolerancia_abs: 0

enunciado: "lim(x→{r1}) [(x² − {r1 + r2}x + {r1 * r2}) / (x − {r1})]. ¿Cuánto vale?"

pasos:
  - "El numerador se factorea como (x−{r1})(x−{r2})"
  - "(x−{r1})(x−{r2})/(x−{r1}) = x−{r2} (para x≠{r1})"
  - "lim(x→{r1}) (x−{r2}) = {r1}−{r2} = {r1 - r2}"

explicacion: |
  El trinomio del numerador se factorea usando el mismo método de
  `../polinomios-factoreo/`.
```

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "basico"
  tags: ["concepto"]

variables:
  c: random(-20, 20)

respuesta: c
tipo: input
tolerancia_abs: 0

enunciado: "lim(x→5) [{c}] (una función constante). ¿Cuánto vale?"

explicacion: |
  El límite de una constante es esa misma constante, sin importar hacia
  dónde se acerque x.
```

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "basico"
  tags: ["concepto"]

variables:
  punto: random(1, 8)
  n: random(2, 4)

respuesta: punto ^ n
tipo: input
tolerancia_abs: 0

enunciado: "lim(x→{punto}) [xⁿ], con n={n}. ¿Cuánto vale?"

explicacion: |
  {punto}^{n} = {punto ^ n} — otra vez, evaluar directo alcanza.
```

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "El límite de f(x) cuando x tiende a a es siempre exactamente igual a f(a), sin excepción."

explicacion: |
  No siempre: si f no está definida en a (por ejemplo, con un
  denominador que se anula), el límite puede existir de todas formas —
  son preguntas relacionadas, pero no idénticas.
```

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "avanzado"
  tags: ["verificacion", "verdadero_falso"]

variables:
  a: random(1, 15)
  real: 2 * a
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "lim(x→{a}) [(x² − {a ^ 2}) / (x − {a})]. ¿Es correcto que el resultado sea {propuesto}?"

explicacion: |
  El valor correcto es 2×{a} = {real}.
```

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "avanzado"
  tags: ["infinito", "opcion_multiple"]

respuesta: "Infinito"
tipo: mc
opciones_explicitas:
  - "Infinito"
  - "0"
  - "1"

enunciado: "lim(x→∞) [(x² + 3) / (x + 1)]. El grado del numerador (2) es mayor que el del denominador (1). ¿Qué pasa con este límite?"

explicacion: |
  Cuando el numerador crece más rápido que el denominador, el cociente
  crece sin límite.
```

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "avanzado"
  tags: ["infinito", "opcion_multiple"]

respuesta: "0"
tipo: mc
opciones_explicitas:
  - "0"
  - "Infinito"
  - "1"

enunciado: "lim(x→∞) [(x + 3) / (x² + 1)]. El grado del denominador (2) es mayor que el del numerador (1). ¿Qué pasa con este límite?"

explicacion: |
  Cuando el denominador crece más rápido, el cociente se achica hacia 0.
```

## Sección: logaritmos (26 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "basico"
  tags: ["logaritmos", "vocabulario"]

enunciado: "¿Qué es log₁₀ x?"
tipo: mc
opciones_explicitas:
  - "El exponente al que hay que elevar 10 para obtener x"
  - "x dividido 10"
  - "10 elevado a x"
respuesta: "El exponente al que hay que elevar 10 para obtener x"

explicacion: |
  log_b x = y significa que bʸ = x: el logaritmo despeja el exponente.
```

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "basico"
  tags: ["logaritmos"]

variables:
  n: random(1, 6)
  x: 10 ^ n

respuesta: log10(x)
tipo: input
tolerancia_abs: 0.001

enunciado: "¿Cuánto es log₁₀({x})?"

pasos:
  - "{x} = 10^{n}, así que log₁₀({x}) = {n}"

explicacion: |
  El logaritmo en base 10 de una potencia exacta de 10 es, directamente,
  el exponente.
```

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "intermedio"
  tags: ["logaritmos"]

variables:
  n: random(2, 9)
  x: 10 ^ n

respuesta: log10(x)
tipo: input
tolerancia_abs: 0.001

enunciado: "¿Cuánto es log₁₀({x})?"

explicacion: |
  Alcanza con contar cuántos ceros tiene {x} después del 1.
```

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "intermedio"
  tags: ["logaritmos", "vocabulario"]

variables:
  n: random(1, 6)
  x: 10 ^ n

respuesta: ((10 ^ n) == x)
tipo: vf

enunciado: "Sabiendo que log₁₀({x}) = {n}, ¿es cierto que 10^{n} = {x}?"

explicacion: |
  El logaritmo y la potencia son operaciones inversas: si log_b x = y,
  entonces bʸ = x.
```

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "basico"
  tags: ["logaritmos", "casos_especiales"]

respuesta: 0
tipo: input
tolerancia_abs: 0.001

enunciado: "¿Cuánto es log₁₀(1)?"

explicacion: |
  Cualquier base elevada a 0 da 1: por eso el logaritmo de 1, en
  cualquier base, siempre es 0.
```

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "basico"
  tags: ["logaritmos", "casos_especiales"]

respuesta: 1
tipo: input
tolerancia_abs: 0.001

enunciado: "¿Cuánto es log₁₀(10)?"

explicacion: |
  Cualquier base elevada a 1 da esa misma base: por eso log_b(b) siempre
  es 1.
```

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "intermedio"
  tags: ["logaritmos", "propiedades"]

variables:
  a: random(2, 90)
  b: random(2, 90)

respuesta: (abs(log10(a * b) - (log10(a) + log10(b))) < 0.001)
tipo: vf

enunciado: "¿Es cierto que log₁₀({a} × {b}) da lo mismo que log₁₀({a}) + log₁₀({b})?"

explicacion: |
  Es la propiedad del logaritmo de un producto: se convierte en una suma
  de logaritmos.
```

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "intermedio"
  tags: ["logaritmos", "propiedades"]

variables:
  a: random(20, 900)
  b: random(2, 19)

respuesta: (abs(log10(a / b) - (log10(a) - log10(b))) < 0.001)
tipo: vf

enunciado: "¿Es cierto que log₁₀({a} ÷ {b}) da lo mismo que log₁₀({a}) - log₁₀({b})?"

explicacion: |
  Es la propiedad del logaritmo de un cociente: se convierte en una resta
  de logaritmos.
```

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "intermedio"
  tags: ["logaritmos", "propiedades"]

variables:
  a: random(2, 90)
  n: random(2, 4)

respuesta: (abs(log10(a ^ n) - (n * log10(a))) < 0.001)
tipo: vf

enunciado: "¿Es cierto que log₁₀({a}^{n}) da lo mismo que {n} × log₁₀({a})?"

explicacion: |
  Es la propiedad del logaritmo de una potencia: el exponente pasa a
  multiplicar.
```

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "intermedio"
  tags: ["logaritmos", "propiedades"]

variables:
  n1: random(1, 4)
  n2: random(1, 4)

respuesta: n1 + n2
tipo: input
tolerancia_abs: 0.001

enunciado: "Sabiendo que log₁₀(10^{n1}) = {n1} y log₁₀(10^{n2}) = {n2}, ¿cuánto es log₁₀(10^{n1} × 10^{n2})?"

pasos:
  - "log₁₀(10^{n1} × 10^{n2}) = {n1} + {n2} = {n1 + n2}"

explicacion: |
  El logaritmo de un producto es la suma de los logaritmos.
```

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "intermedio"
  tags: ["logaritmos"]

variables:
  n: random(1, 6)
  x: 10 ^ n

respuesta: n
tipo: mc
opciones_explicitas:
  - n
  - x / 10
  - n + 1

enunciado: "¿Cuánto es log₁₀({x})?"

explicacion: |
  Las otras opciones confunden el logaritmo con dividir por 10, o se
  equivocan por poco.
```

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "intermedio"
  tags: ["logaritmos", "verificacion"]

variables:
  n: random(1, 6)
  x: 10 ^ n
  error: uno_de([0, 0, 0, 1, -1])
  mostrado: n + error

respuesta: (mostrado == n)
tipo: vf

enunciado: "¿Está bien calculado esto? log₁₀({x}) = {mostrado}"

explicacion: |
  Se verifica comprobando que 10 elevado al resultado dado sea igual a
  {x}.
```

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "intermedio"
  tags: ["logaritmos"]

variables:
  n: random(1, 6)

tipo: completar
enunciado: "Completá: log₁₀(10^___) = {n}."
respuestas_validas:
  - n

explicacion: |
  Hay que encontrar a qué exponente hay que elevar 10 para que el
  logaritmo dé {n}.
```

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "avanzado"
  tags: ["logaritmos", "problema"]

variables:
  n: random(100, 98765)

respuesta: floor(log10(n)) + 1
tipo: input
tolerancia_abs: 0

enunciado: "Usando que la cantidad de cifras de un número es floor(log₁₀(n)) + 1, ¿cuántas cifras tiene {n}?"

explicacion: |
  El logaritmo en base 10 de un número dice, aproximadamente, cuántas
  cifras tiene: tomar la parte entera y sumarle 1 da la cantidad exacta.
```

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "intermedio"
  tags: ["logaritmos", "comparacion"]

variables:
  a: random(2, 999)
  b: random(2, 999)

restricciones:
  - a != b

respuesta: (log10(a) > log10(b))
tipo: vf

enunciado: "¿Es log₁₀({a}) mayor que log₁₀({b})?"

explicacion: |
  Con base mayor a 1, a mayor argumento, mayor el logaritmo — no hace
  falta calcular los dos logaritmos exactos para saber cuál es mayor.
```

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "avanzado"
  tags: ["logaritmos", "problema"]

variables:
  n1: random(2, 6)
  n2: n1 + 1

respuesta: 10
tipo: input
tolerancia_abs: 0.01

enunciado: "La escala Richter es logarítmica en base 10: un sismo de magnitud {n2} libera 10 veces más energía que uno de magnitud {n1}. ¿Cuántas veces más energía libera cada punto de diferencia?"

explicacion: |
  En una escala logarítmica de base 10, cada unidad de diferencia
  representa multiplicar por 10.
```

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "avanzado"
  tags: ["logaritmos", "casos_especiales"]

variables:
  n: random(1, 4)

respuesta: -n
tipo: input
tolerancia_abs: 0.001

enunciado: "¿Cuánto es log₁₀(1 ÷ 10^{n})?"

pasos:
  - "1 ÷ 10^{n} = 10^(-{n}), así que su logaritmo es -{n}"

explicacion: |
  El logaritmo de un número menor a 1 (pero mayor a 0) siempre da
  negativo.
```

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "intermedio"
  tags: ["logaritmos", "orden"]

tipo: ordenar
enunciado: "Calculá estos logaritmos y ordená los resultados de menor a mayor."
opciones_explicitas:
  - "log₁₀(1000)"
  - "log₁₀(10)"
  - "log₁₀(100000)"
  - "log₁₀(1)"
respuesta_orden: ["log₁₀(1)", "log₁₀(10)", "log₁₀(1000)", "log₁₀(100000)"]

explicacion: |
  log₁₀(1)=0, log₁₀(10)=1, log₁₀(1000)=3, log₁₀(100000)=5.
```

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "avanzado"
  tags: ["logaritmos"]

variables:
  n: random(2, 999)

respuesta: log10(n)
tipo: input
tolerancia_abs: 0.001

enunciado: "¿Cuánto es (aproximadamente) log₁₀({n})?"

explicacion: |
  No todos los logaritmos dan un número entero exacto: cuando no es
  potencia exacta de la base, el resultado es un decimal.
```

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "avanzado"
  tags: ["logaritmos", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La parte entera de log₁₀(n) está directamente relacionada con el exponente que tendría n escrito en notación científica."

explicacion: |
  Para un número entre 1×10ⁿ y 10×10ⁿ, log₁₀ del número da un valor
  entre n y n+1 — la parte entera coincide con el exponente de la
  notación científica.
```

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "basico"
  tags: ["logaritmos", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El logaritmo es la operación inversa de la potenciación, igual que la resta es inversa de la suma."

explicacion: |
  Aplicar la potenciación y después el logaritmo (en la misma base)
  vuelve al exponente original.
```

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "intermedio"
  tags: ["logaritmos", "propiedades"]

variables:
  a: random(2, 90)
  b: random(2, 90)

respuesta: falso
tipo: vf

enunciado: "¿Es cierto que log₁₀({a} × {b}) da lo mismo que log₁₀({a}) × log₁₀({b})?"

explicacion: |
  Es un error común: el logaritmo de un producto es la SUMA de los
  logaritmos, no el producto.
```

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "intermedio"
  tags: ["logaritmos", "vocabulario"]

enunciado: "Cuando se escribe \"log x\" sin ninguna base aclarada, ¿a qué base se suele referir en el nivel secundario?"
tipo: mc
opciones_explicitas:
  - "Base 10"
  - "Base 2"
  - "Siempre hay que aclarar la base, nunca se sobreentiende"
respuesta: "Base 10"

explicacion: |
  "log" sin base es, por convención en este nivel, el logaritmo decimal
  (base 10) — distinto de "ln", que es el logaritmo natural (base e).
```

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "avanzado"
  tags: ["logaritmos", "comparacion"]

variables:
  a: random(100, 999)
  b: random(10, 99)

respuesta: verdadero
tipo: vf

enunciado: "Sin calcular el valor exacto: ¿es cierto que log₁₀({a}) es mayor que log₁₀({b}), sabiendo que {a} tiene más cifras que {b}?"

explicacion: |
  Más cifras significa mayor magnitud, y el logaritmo en base 10 crece
  junto con la magnitud del número.
```

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "avanzado"
  tags: ["logaritmos", "problema"]

respuesta: verdadero
tipo: vf

enunciado: "El pH de una solución se calcula con un logaritmo en base 10: por eso, una solución de pH 3 es 10 veces más ácida que una de pH 4."

explicacion: |
  Es otra aplicación real de una escala logarítmica, igual que la escala
  Richter de terremotos.
```

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "basico"
  tags: ["logaritmos", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El logaritmo despeja el exponente de una potencia, sabiendo la base y el resultado."

explicacion: |
  Es la idea central de todo el tema: log_b x = y ⟺ bʸ = x.
```
