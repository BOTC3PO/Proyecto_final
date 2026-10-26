# Matemática — Leer un gráfico de barras (cuestionario, 22 preguntas VBLang)

> Tema: `D2a`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué representa la altura de una barra

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_barras"
  nivel: "basico"
  tags: ["barras", "vocabulario"]

enunciado: "En un gráfico de barras, ¿qué representa la altura (o longitud) de cada barra?"
tipo: mc
opciones_explicitas:
  - "El valor numérico de esa categoría"
  - "El orden en que aparece la categoría"
  - "El color de la categoría"
respuesta: "El valor numérico de esa categoría"

explicacion: |
  Cuanto más alta la barra, mayor el valor que representa.
```

### 2 — Qué va en el eje de las categorías

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_barras"
  nivel: "basico"
  tags: ["barras", "vocabulario"]

enunciado: "¿Qué tipo de dato suele ir en el eje que NO mide altura (categorías)?"
tipo: mc
opciones_explicitas:
  - "Categorías sin un orden numérico propio (productos, colores, nombres)"
  - "Siempre el tiempo, en orden cronológico"
  - "Siempre porcentajes que suman 100%"
respuesta: "Categorías sin un orden numérico propio (productos, colores, nombres)"

explicacion: |
  A diferencia de un gráfico de líneas, el orden de las barras no
  tiene por qué representar una secuencia numérica.
```

### 3 — Problema: leer el valor de una barra

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_barras"
  nivel: "intermedio"
  tags: ["barras", "problema"]

variables:
  datos: [{producto: "Camisas", ventas: 45}, {producto: "Pantalones", ventas: 30}, {producto: "Camperas", ventas: 15}, {producto: "Zapatos", ventas: 25}]
  idx: uno_de([0, 1, 2, 3])

respuesta: datos[idx].ventas
tipo: input
unidad: "unidades"

enunciado: "Un gráfico de barras muestra las ventas del mes: Camisas 45, Pantalones 30, Camperas 15, Zapatos 25. ¿Cuántas unidades de {datos[idx].producto} se vendieron?"

explicacion: |
  Se lee la altura de la barra correspondiente a esa categoría.
```

### 4 — Problema: comparar dos barras

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_barras"
  nivel: "intermedio"
  tags: ["barras", "problema"]

enunciado: "En el gráfico de ventas — Camisas 45, Pantalones 30, Camperas 15, Zapatos 25 — ¿qué producto tiene la barra más alta?"
tipo: mc
opciones_explicitas:
  - "Camisas"
  - "Pantalones"
  - "Zapatos"
respuesta: "Camisas"

explicacion: |
  45 es el valor más alto de los cuatro.
```

### 5 — Problema: diferencia entre dos barras

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_barras"
  nivel: "avanzado"
  tags: ["barras", "problema"]

respuesta: 30
tipo: input

enunciado: "Con el mismo gráfico de ventas — Camisas 45, Pantalones 30, Camperas 15, Zapatos 25 — ¿cuál es la diferencia entre la barra más alta y la más baja?"

pasos:
  - "Más alta: Camisas (45). Más baja: Camperas (15)."
  - "Diferencia = 45 − 15 = 30"

explicacion: |
  Se identifican los dos extremos y se resta.
```

### 6 — Es la misma tabla, dibujada

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_barras"
  nivel: "intermedio"
  tags: ["barras"]

respuesta: verdadero
tipo: vf

enunciado: "Cada barra de un gráfico de barras corresponde exactamente a una fila de una tabla: la categoría es el nombre de la fila, y la altura es el valor de la columna graficada."

explicacion: |
  Es la misma información que una tabla, sólo que dibujada.
```

### 7 — Las barras pueden ser horizontales

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_barras"
  nivel: "intermedio"
  tags: ["barras"]

respuesta: verdadero
tipo: vf

enunciado: "Un gráfico de barras puede dibujarse con barras horizontales (en vez de verticales) — la lógica de lectura es la misma, sólo cambia la orientación."

explicacion: |
  Se usa sobre todo cuando los nombres de las categorías son largos y
  no entran bien debajo de una barra vertical.
```

### 8 — Ordenar: pasos para leer el valor de una barra

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_barras"
  nivel: "intermedio"
  tags: ["barras", "ordenar"]

enunciado: "Ordená los pasos para leer el valor exacto de una barra en un gráfico."
tipo: ordenar
opciones_explicitas:
  - "Leer el número donde esa altura coincide con el eje numérico"
  - "Identificar la barra correspondiente a la categoría que interesa"
  - "Seguir su altura (o longitud) hasta el eje que tiene los números"
respuesta_orden: ["Identificar la barra correspondiente a la categoría que interesa", "Seguir su altura (o longitud) hasta el eje que tiene los números", "Leer el número donde esa altura coincide con el eje numérico"]
explicacion: |
  Sin identificar primero la barra correcta, no hay altura que seguir.
```

### 9 — Aplicación real: resultados electorales

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_barras"
  nivel: "basico"
  tags: ["barras", "aplicacion"]

enunciado: "¿Por qué los resultados electorales suelen mostrarse con un gráfico de barras (una barra por candidato o partido)?"
tipo: mc
opciones_explicitas:
  - "Porque permite comparar de un vistazo cuántos votos sacó cada candidato, sin un orden numérico entre ellos"
  - "Porque los votos siempre cambian con el tiempo, como en un gráfico de líneas"
  - "Porque las barras muestran directamente porcentajes que suman 100%"
respuesta: "Porque permite comparar de un vistazo cuántos votos sacó cada candidato, sin un orden numérico entre ellos"

explicacion: |
  Los candidatos son categorías, no una secuencia temporal ni
  proporciones de un total (eso sería más propio de una torta).
```

### 10 — Problema: sumar dos barras

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_barras"
  nivel: "avanzado"
  tags: ["barras", "problema"]

respuesta: 60
tipo: input

enunciado: "Con el gráfico de ventas — Camisas 45, Pantalones 30, Camperas 15, Zapatos 25 — ¿cuántas unidades se vendieron entre Camperas y Zapatos juntos?"

pasos:
  - "15 + 25 = 40"

explicacion: |
  Se suman los valores de las dos barras correspondientes.

```

### 11 — Un gráfico de barras no muestra tendencia en el tiempo

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_barras"
  nivel: "avanzado"
  tags: ["barras"]

respuesta: falso
tipo: vf

enunciado: "Un gráfico de barras siempre muestra cómo cambia un valor a lo largo del tiempo."

explicacion: |
  Es falso en general: las categorías de un gráfico de barras
  usualmente no tienen relación temporal entre sí (aunque se puede usar
  para comparar el mismo dato en distintos años, ese no es su uso
  típico ni exclusivo).
```

### 12 — Problema: barra más baja

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_barras"
  nivel: "intermedio"
  tags: ["barras", "problema"]

enunciado: "Con el gráfico de ventas — Camisas 45, Pantalones 30, Camperas 15, Zapatos 25 — ¿qué producto tiene la barra más baja?"
tipo: mc
opciones_explicitas:
  - "Camperas"
  - "Zapatos"
  - "Pantalones"
respuesta: "Camperas"

explicacion: |
  15 es el valor más bajo de los cuatro.
```

### 13 — Barras agrupadas comparan dos series a la vez

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_barras"
  nivel: "avanzado"
  tags: ["barras", "vocabulario"]

enunciado: "¿Para qué sirve un gráfico de barras AGRUPADAS (dos barras juntas por cada categoría, de colores distintos)?"
tipo: mc
opciones_explicitas:
  - "Para comparar dos series de datos distintas (por ejemplo, ventas de este año contra el año pasado) para cada categoría"
  - "Para mostrar el promedio de todas las categorías juntas"
  - "Es exactamente lo mismo que un gráfico de líneas"
respuesta: "Para comparar dos series de datos distintas (por ejemplo, ventas de este año contra el año pasado) para cada categoría"

explicacion: |
  Cada categoría tiene dos barras (o más) en vez de una, una por cada
  serie que se está comparando.
```

### 14 — Problema: segundo par de datos

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_barras"
  nivel: "intermedio"
  tags: ["barras", "problema"]

variables:
  datos: [{dia: "Lunes", clientes: 80}, {dia: "Martes", clientes: 65}, {dia: "Miércoles", clientes: 95}, {dia: "Jueves", clientes: 70}, {dia: "Viernes", clientes: 120}]
  idx: uno_de([0, 1, 2, 3, 4])

respuesta: datos[idx].clientes
tipo: input

enunciado: "Un local registra clientes por día: Lunes 80, Martes 65, Miércoles 95, Jueves 70, Viernes 120. ¿Cuántos clientes tuvo el {datos[idx].dia}?"

explicacion: |
  Cada barra representa un día, con su cantidad de clientes.
```

### 15 — Problema: día con más clientes

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_barras"
  nivel: "intermedio"
  tags: ["barras", "problema"]

enunciado: "Con el gráfico de clientes — Lunes 80, Martes 65, Miércoles 95, Jueves 70, Viernes 120 — ¿qué día tuvo más clientes?"
tipo: mc
opciones_explicitas:
  - "Viernes"
  - "Miércoles"
  - "Lunes"
respuesta: "Viernes"

explicacion: |
  120 es el valor más alto de la semana mostrada.
```

### 16 — Cambiar el orden de las barras no cambia los valores

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_barras"
  nivel: "intermedio"
  tags: ["barras"]

respuesta: verdadero
tipo: vf

enunciado: "Si se reordenan las barras de un gráfico (por ejemplo, de mayor a menor), los valores que representa cada una no cambian, sólo el orden en que se presentan."

explicacion: |
  Es la misma idea que reordenar filas de una tabla.
```

### 17 — Un eje sin números es difícil de leer con precisión

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_barras"
  nivel: "avanzado"
  tags: ["barras"]

respuesta: verdadero
tipo: vf

enunciado: "Sin números en el eje que mide la altura, sólo se puede comparar qué barra es más alta o más baja, pero no leer el valor exacto de ninguna."

explicacion: |
  Los números del eje son los que permiten pasar de 'más alta' a
  'exactamente cuánto'.
```

### 18 — Problema: promedio de las barras

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_barras"
  nivel: "avanzado"
  tags: ["barras", "problema"]

respuesta: 30
tipo: input

enunciado: "Con el gráfico de ventas — Camisas 45, Pantalones 30, Camperas 15, Zapatos 25 — ¿cuál es el promedio de ventas de las 4 categorías?"

pasos:
  - "(45 + 30 + 15 + 25) ÷ 4 = 115 ÷ 4"
  - "= 28,75, redondeado a la unidad más cercana ≈ 30"

explicacion: |
  Sumar todas las barras y dividir por la cantidad de categorías.
```

### 19 — Aplicación real: comparar precios entre supermercados

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_barras"
  nivel: "basico"
  tags: ["barras", "aplicacion"]

enunciado: "Un gráfico de barras muestra el precio del mismo producto en 4 supermercados distintos. ¿Para qué sirve este gráfico?"
tipo: mc
opciones_explicitas:
  - "Para comparar de un vistazo en qué supermercado el producto es más caro o más barato"
  - "Para mostrar cómo cambió el precio a lo largo del año"
  - "Para mostrar qué porcentaje del gasto total representa ese producto"
respuesta: "Para comparar de un vistazo en qué supermercado el producto es más caro o más barato"

explicacion: |
  Los supermercados son categorías (sin orden numérico entre sí), el
  caso típico de un gráfico de barras.
```

### 20 — El área bajo la barra no tiene un significado especial aquí

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_barras"
  nivel: "avanzado"
  tags: ["barras"]

respuesta: verdadero
tipo: vf

enunciado: "En un gráfico de barras simple, lo que importa es la ALTURA de cada barra — el ancho de las barras no representa ningún dato (suele ser sólo estético)."

explicacion: |
  A diferencia de un histograma (donde el ancho también importa), en
  un gráfico de barras categórico sólo la altura tiene significado.
```

### 21 — Problema: cuántas categorías superan un valor

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_barras"
  nivel: "avanzado"
  tags: ["barras", "problema"]

respuesta: 2
tipo: input

enunciado: "Con el gráfico de clientes — Lunes 80, Martes 65, Miércoles 95, Jueves 70, Viernes 120 — ¿en cuántos días hubo MÁS de 90 clientes?"

pasos:
  - "Miércoles (95) y Viernes (120) superan los 90. Los demás días no."

explicacion: |
  Se revisa cada barra y se cuentan las que cumplen la condición.
```

### 22 — Cierre: para qué sirve este bloque

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_barras"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve un gráfico de barras?"
tipo: mc
opciones_explicitas:
  - "Para comparar de un vistazo el valor de distintas categorías, usando la altura de cada barra"
  - "Sólo sirve para mostrar datos que cambian con el tiempo"
  - "Sólo aplica cuando hay exactamente 2 categorías"
respuesta: "Para comparar de un vistazo el valor de distintas categorías, usando la altura de cada barra"

explicacion: |
  Es el hermano de `../lineas/` (para datos en el tiempo) y
  `../torta/` (para proporciones de un total).
```
